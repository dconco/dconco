import { Router, Request, Response } from 'express'
import { getEntry, getFresh, getStale, put } from '../utils/fileCache'

const router = Router()

// WakaTime API key lives ONLY on the server (never shipped to the client).
const API_KEY = process.env.WAKATIME_API_KEY ?? ''
const BASE = 'https://wakatime.com/api/v1/users/current'

// Basic auth: WakaTime expects base64(api_key) with an empty password.
const authHeader = () => `Basic ${Buffer.from(API_KEY).toString('base64')}`

// File-backed cache so stats survive restarts and outages (change slowly).
const TTL = 24 * 60 * 60 * 1000 // 24 hours
const key = (path: string) => `waka_${path.replace(/[^a-z0-9]+/gi, '_')}`

async function wakaFetch(path: string): Promise<unknown> {
	const fresh = getFresh<unknown>(key(path), TTL)
	if (fresh !== null) return fresh

	try {
		const r = await fetch(`${BASE}${path}`, { headers: { Authorization: authHeader() } })
		if (!r.ok) throw new Error(`WakaTime ${r.status}`)
		const json = await r.json()
		put(key(path), json)
		return json
	} catch (err) {
		// Serve last-known-good from disk rather than failing the whole endpoint.
		const stale = getStale<unknown>(key(path))
		if (stale !== null) return stale
		throw err
	}
}

// One aggregated endpoint the client hits once: all the stats it needs.
router.get('/', async (_req: Request, res: Response) => {
	if (!API_KEY) return res.status(503).json({ error: 'WakaTime not configured' })

	try {
		const [allTime, last7, last30] = await Promise.all([
			wakaFetch('/all_time_since_today'),
			wakaFetch('/stats/last_7_days'),
			wakaFetch('/stats/last_30_days'),
		])

		const s7 = (last7 as { data?: WakaStats }).data ?? {}
		const s30 = (last30 as { data?: WakaStats }).data ?? {}
		const total = (allTime as { data?: { text?: string; total_seconds?: number } }).data ?? {}

		const entry = getEntry<unknown>(key('/all_time_since_today'))

		res.json({
			data: {
				lastChecked: entry ? new Date(entry.at).toISOString() : null,
				allTimeText: total.text ?? null,
				allTimeSeconds: total.total_seconds ?? null,
				dailyAverage: s7.human_readable_daily_average ?? null,
				last7Total: s7.human_readable_total ?? null,
				last30Total: s30.human_readable_total ?? null,
				bestDay: s7.best_day
					? { date: s7.best_day.date, text: s7.best_day.text }
					: null,
				languages: top(s7.languages, 8),
				editors: top(s7.editors, 5),
				projects: top(s7.projects, 6),
				os: top(s7.operating_systems, 4),
			},
		})
	} catch (err) {
		res.status(502).json({ error: (err as Error).message })
	}
})

type WakaItem = { name: string; percent: number; text: string }
type WakaStats = {
	human_readable_daily_average?: string
	human_readable_total?: string
	best_day?: { date: string; text: string }
	languages?: WakaItem[]
	editors?: WakaItem[]
	projects?: WakaItem[]
	operating_systems?: WakaItem[]
}

const top = (items: WakaItem[] = [], n: number) =>
	items.slice(0, n).map((i) => ({ name: i.name, percent: Math.round(i.percent), text: i.text }))

export default router
