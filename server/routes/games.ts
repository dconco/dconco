import { Router, Request, Response } from 'express'
import games from '../data/games.json'
import { getEntry, getFresh, put } from '../utils/fileCache'

const router = Router()

// Play Games OAuth creds live ONLY on the server (never shipped to the client).
const CLIENT_ID = process.env.PLAY_GAMES_CLIENT_ID ?? ''
const CLIENT_SECRET = process.env.PLAY_GAMES_CLIENT_SECRET ?? ''
const REFRESH_TOKEN = process.env.PLAY_GAMES_REFRESH_TOKEN ?? ''
const configured = Boolean(CLIENT_ID && CLIENT_SECRET && REFRESH_TOKEN)

const TOKEN_URL = 'https://oauth2.googleapis.com/token'
const GAMES_BASE = 'https://games.googleapis.com/games/v1'

// File-backed cache: the live profile survives restarts and token outages.
const CACHE_KEY = 'games_profile'
const TTL = 24 * 60 * 60 * 1000 // 24 hours

type PlayerProfile = {
	playerName: string | null
	avatar: string | null
	gamerLevel: number | null
	experiencePoints: number | null
}

// Trade the long-lived refresh token for a short-lived access token.
async function accessToken(): Promise<string> {
	const body = new URLSearchParams({
		client_id: CLIENT_ID,
		client_secret: CLIENT_SECRET,
		refresh_token: REFRESH_TOKEN,
		grant_type: 'refresh_token',
	})
	const r = await fetch(TOKEN_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body,
	})
	if (!r.ok) {
		const txt = await r.text().catch(() => '')
		throw new Error(`token ${r.status}: ${txt.slice(0, 300)}`)
	}
	const json = (await r.json()) as { access_token?: string }
	if (!json.access_token) throw new Error('No access_token returned')
	return json.access_token
}

// Pull the authenticated player's own Play Games profile (level + XP).
async function fetchPlayer(): Promise<PlayerProfile> {
	const fresh = getFresh<PlayerProfile>(CACHE_KEY, TTL)
	if (fresh !== null) return fresh

	const token = await accessToken()

	// players/me intermittently 500s with Google "backendError"; retry a few times.
	let r: Awaited<ReturnType<typeof fetch>> | null = null
	let lastBody = ''
	for (let attempt = 0; attempt < 3; attempt++) {
		r = await fetch(`${GAMES_BASE}/players/me?language=en`, {
			headers: { Authorization: `Bearer ${token}` },
		})
		if (r.ok) break
		lastBody = await r.text().catch(() => '')
		if (r.status !== 500 && r.status !== 503) break // only retry transient server errors
		await new Promise((ok) => setTimeout(ok, 400 * (attempt + 1)))
	}
	if (!r || !r.ok) {
		throw new Error(`players/me ${r?.status ?? '?'}: ${lastBody.slice(0, 300)}`)
	}
	const p = (await r.json()) as {
		displayName?: string
		avatarImageUrl?: string
		experienceInfo?: { currentLevel?: { level?: number }; currentExperiencePoints?: string }
	}

	const profile: PlayerProfile = {
		playerName: p.displayName ?? null,
		avatar: p.avatarImageUrl ?? null,
		gamerLevel: p.experienceInfo?.currentLevel?.level ?? null,
		experiencePoints: p.experienceInfo?.currentExperiencePoints
			? Number(p.experienceInfo.currentExperiencePoints)
			: null,
	}
	put(CACHE_KEY, profile)
	return profile
}

// Serve curated per-game stats (games.json) merged with the LIVE Play Games
// player profile. Per-game level/rank for third-party titles is not exposed by
// the Play Games API, so those stay curated; the player-level profile is live.
router.get('/', async (_req: Request, res: Response) => {
	const base = games as typeof games & {
		profile: { playerName: string; totalGamesPlayed: number | null; gamerLevel: number | null }
	}

	if (!configured) return res.json({ data: base })

	try {
		const live = await fetchPlayer()
		const entry = getEntry<PlayerProfile>(CACHE_KEY)
		res.json({
			data: {
				...base,
				profile: {
					...base.profile,
					playerName: live.playerName ?? base.profile.playerName,
					gamerLevel: live.gamerLevel ?? base.profile.gamerLevel,
					avatar: live.avatar,
					experiencePoints: live.experiencePoints,
					lastChecked: entry ? new Date(entry.at).toISOString() : null,
				},
			},
		})
	} catch (err) {
		// On any auth/API failure, serve the last cached profile from disk;
		// only if there is none at all do we drop to the curated data.
		console.error('[games] live fetch failed:', (err as Error).message)
		const entry = getEntry<PlayerProfile>(CACHE_KEY)
		if (entry) {
			const stale = entry.data
			return res.json({
				data: {
					...base,
					profile: {
						...base.profile,
						playerName: stale.playerName ?? base.profile.playerName,
						gamerLevel: stale.gamerLevel ?? base.profile.gamerLevel,
						avatar: stale.avatar,
						experiencePoints: stale.experiencePoints,
						lastChecked: new Date(entry.at).toISOString(),
					},
				},
				warning: 'live_stale',
			})
		}
		res.json({ data: base, warning: 'live_unavailable', detail: (err as Error).message })
	}
})

export default router
