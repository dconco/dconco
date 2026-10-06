import { mkdirSync, readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

// JSON cache that survives restarts: memory layer on top, file for persistence.
// Anchored to cwd (server runs from project root) so dev and built runs share it.
const DIR = join(process.cwd(), 'server', '.cache')

type Entry<T> = { at: number; data: T }
const mem = new Map<string, Entry<unknown>>()

const file = (key: string) => join(DIR, `${key}.json`)

function readFile<T>(key: string): Entry<T> | null {
	try {
		return JSON.parse(readFileSync(file(key), 'utf8')) as Entry<T>
	} catch {
		return null
	}
}

// Fresh value within TTL, from memory or disk. Null if missing/stale.
export function getFresh<T>(key: string, ttl: number): T | null {
	const hit = (mem.get(key) as Entry<T>) ?? readFile<T>(key)
	if (hit && Date.now() - hit.at < ttl) {
		mem.set(key, hit)
		return hit.data
	}
	return null
}

// Last known value regardless of age - the restart/outage fallback.
export function getStale<T>(key: string): T | null {
	const hit = (mem.get(key) as Entry<T>) ?? readFile<T>(key)
	return hit ? hit.data : null
}

export function put<T>(key: string, data: T): void {
	const entry: Entry<T> = { at: Date.now(), data }
	mem.set(key, entry)
	try {
		mkdirSync(DIR, { recursive: true })
		writeFileSync(file(key), JSON.stringify(entry))
	} catch {
		// Disk write is best-effort; memory still holds the value this run.
	}
}
