export const parseTime = (start_time: number): string => {
	const diff = Math.max(0, Date.now() - start_time)
	const s = Math.floor(diff / 1000) % 60
	const m = Math.floor(diff / 60000) % 60
	const h = Math.floor(diff / 3600000) % 24
	const d = Math.floor(diff / 86400000)
	return `${d}d, ${h}h, ${m}m, ${s}s`
}
