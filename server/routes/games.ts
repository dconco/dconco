import { Router, Request, Response } from 'express'
import games from '../data/games.json'
import { getEntry, getFresh, put } from '../utils/fileCache'

const router = Router()

// Public Play Games profile slug (no API key / OAuth needed - this page is public).
const SLUG = process.env.PLAY_GAMES_PROFILE ?? 'dconco'
const PROFILE_URL = `https://play.google.com/profile/${SLUG}?hl=en_US`

const CACHE_KEY = 'games_profile'
const TTL = 24 * 60 * 60 * 1000 // 24 hours

type Achievement = {
	name: string
	description: string
	rarity: string | null
	progress: string | null
	icon: string | null
}
type PlayerProfile = {
	playerName: string | null
	avatar: string | null
	gamerLevel: number | null
	trophies: number | null
	achievements: Achievement[]
}

const decode = (s: string) =>
	s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&#(\d+);/g, (_, n) => String.fromCharCode(+n)).replace(/&quot;/g, '"')

// Scrape the public profile page: level/name from <title>, achievements + trophy
// count from the server-rendered HTML. No credentials, no OAuth.
async function scrapeProfile(): Promise<PlayerProfile> {
	const fresh = getFresh<PlayerProfile>(CACHE_KEY, TTL)
	if (fresh !== null) return fresh

	const r = await fetch(PROFILE_URL, { headers: { 'Accept-Language': 'en-US', 'User-Agent': 'Mozilla/5.0' } })
	if (!r.ok) throw new Error(`profile ${r.status}`)
	const html = await r.text()

	const title = html.match(/<title>([^<]+)<\/title>/)?.[1] ?? ''
	const playerName = title.split('|')[0]?.trim() || SLUG
	const gamerLevel =
		Number(html.match(/class="LA9k3d">Level\s+(\d+)</)?.[1]) ||
		Number(title.match(/Level\s+(\d+)/)?.[1]) ||
		null
	// Trophy total sits in the header next to the level (class daLzDe).
	const trophies = Number(html.match(/class="daLzDe">(\d+)</)?.[1]) || null
	// Real avatar is the first lh3 /pgs/ image in the header; preview url is only a fallback.
	const avatar =
		html.match(/https:\/\/lh3\.googleusercontent\.com\/pgs\/[A-Za-z0-9_-]+/)?.[0] ??
		html.match(/og:image"\s+content="([^"]+)"/)?.[1] ??
		`https://play.google.com/profile/preview/${SLUG}`

	// Achievement cards: name / description / completion / rarity.
	const achievements: Achievement[] = []
	const cardRe = /class="TzqU8" title="([^"]+)">[^<]*<\/div><div class="pLKw6c" title="([^"]+)"/g
	let m: RegExpExecArray | null
	while ((m = cardRe.exec(html)) && achievements.length < 12) {
		const after = html.slice(m.index, m.index + 500)
		achievements.push({
			name: decode(m[1]),
			description: decode(m[2]),
			progress: after.match(/>(\d+% complete)</)?.[1] ?? null,
			rarity: after.match(/>(Ultra Rare|Very Rare|Rare|Uncommon|Common)</i)?.[1] ?? null,
			icon: after.match(/url\('([^']+)'\)/)?.[1] ?? null,
		})
	}

	const profile: PlayerProfile = { playerName, avatar, gamerLevel, trophies, achievements }
	put(CACHE_KEY, profile)
	return profile
}

// Serve curated per-game stats (games.json) merged with the LIVE public profile
// (level, trophies, achievements) scraped from the public Play Games page.
router.get('/', async (_req: Request, res: Response) => {
	const base = games as typeof games & {
		profile: { playerName: string; totalGamesPlayed: number | null; gamerLevel: number | null }
	}

	try {
		const live = await scrapeProfile()
		const entry = getEntry<PlayerProfile>(CACHE_KEY)
		res.json({
			data: {
				...base,
				profile: {
					...base.profile,
					playerName: live.playerName ?? base.profile.playerName,
					gamerLevel: live.gamerLevel ?? base.profile.gamerLevel,
					avatar: live.avatar,
					trophies: live.trophies,
					achievements: live.achievements,
					lastChecked: entry ? new Date(entry.at).toISOString() : null,
				},
			},
		})
	} catch (err) {
		console.error('[games] profile scrape failed:', (err as Error).message)
		const entry = getEntry<PlayerProfile>(CACHE_KEY)
		if (entry) {
			const s = entry.data
			return res.json({
				data: {
					...base,
					profile: {
						...base.profile,
						playerName: s.playerName ?? base.profile.playerName,
						gamerLevel: s.gamerLevel ?? base.profile.gamerLevel,
						avatar: s.avatar,
						trophies: s.trophies,
						achievements: s.achievements,
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
