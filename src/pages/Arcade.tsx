import type React from 'react'
import Seo, { pageSeo } from '../components/Seo'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import type { LinkType } from '../components/Header'
import { favoriteAnime, gameIcons } from '../data/arcadeData'

const API_BASE = import.meta.env.VITE_API_BASE_URL ?? ''

type WakaItem = { name: string; percent: number; text: string }
type WakaData = {
	allTimeText: string | null
	lastChecked: string | null
	dailyAverage: string | null
	last7Total: string | null
	last30Total: string | null
	bestDay: { date: string; text: string } | null
	languages: WakaItem[]
	editors: WakaItem[]
	categories: WakaItem[]
	os: WakaItem[]
}

type GameAchievements = { unlocked: number | null; total: number | null }
type Game = {
	id: string
	title: string
	icon: string
	genre: string
	playUrl: string
	hoursPlayed: number | null
	rank: string | null
	achievements: GameAchievements
	stats: { label: string; value: string }[]
}
type PlayAchievement = {
	name: string
	description: string
	rarity: string | null
	progress: string | null
	icon: string | null
}
type GamesData = {
	profile: {
		playerName: string
		totalGamesPlayed: number | null
		gamerLevel: number | null
		avatar?: string | null
		experiencePoints?: number | null
		trophies?: number | null
		achievements?: PlayAchievement[]
		lastChecked?: string | null
	}
	games: Game[]
}

const accentText = { primary: 'text-primary', secondary: 'text-secondary', tertiary: 'text-tertiary' } as const
const accentBg = { primary: 'bg-primary', secondary: 'bg-secondary', tertiary: 'bg-tertiary' } as const

// "2h ago" / "yesterday" style label for the last cache refresh.
function fmtChecked(iso: string): string {
	const then = new Date(iso).getTime()
	const mins = Math.round((Date.now() - then) / 60000)
	if (mins < 1) return 'just now'
	if (mins < 60) return `${mins}m ago`
	const hrs = Math.round(mins / 60)
	if (hrs < 24) return `${hrs}h ago`
	const days = Math.round(hrs / 24)
	return days === 1 ? 'yesterday' : `${days}d ago`
}

export default function Arcade({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
	useEffect(() => setActive('arcade' as LinkType), [setActive])
	useEffect(() => { window.scrollTo(0, 0) }, [])

	const [waka, setWaka] = useState<WakaData | null>(null)
	const [wakaError, setWakaError] = useState<string | null>(null)
	const [wakaLoading, setWakaLoading] = useState(true)

	const [games, setGames] = useState<GamesData | null>(null)
	const [gamesLoading, setGamesLoading] = useState(true)
	const [gamesDiag, setGamesDiag] = useState<{ warning?: string; detail?: string } | null>(null)

	useEffect(() => {
		fetch(`${API_BASE}/api/wakatime`)
			.then((r) => r.json())
			.then((json) => {
				if (json.error) setWakaError(json.error)
				else setWaka(json.data)
			})
			.catch((e) => setWakaError(e.message))
			.finally(() => setWakaLoading(false))

		fetch(`${API_BASE}/api/games`)
			.then((r) => r.json())
			.then((json) => {
				setGames(json.data)
				if (json.warning || json.detail) setGamesDiag({ warning: json.warning, detail: json.detail })
			})
			.catch(() => setGames(null))
			.finally(() => setGamesLoading(false))
	}, [])

	return (
		<main className="mx-auto max-w-7xl space-y-32 px-6 pb-24 pt-32 lg:px-12 lg:pt-28">
            <Seo {...pageSeo.arcade} />

			{/* Hero */}
			<section data-aos="fade-up" className="relative isolate overflow-hidden rounded-3xl border border-outline-variant/15 bg-surface-container-low/40 p-8 md:p-14">
				<div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl" />
				<div className="relative z-10 max-w-3xl space-y-6">
					<div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
						<span className="h-px w-8 bg-secondary" />
						Beyond the Code
					</div>
					<h1 className="font-headline text-5xl font-bold leading-[1.05] text-on-surface md:text-7xl">
						The <span className="font-serif italic text-primary">Arcade</span>
					</h1>
					<p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
						Live coding stats straight from my editor, the anime I keep coming back to, and the
						games I actually play. The numbers below are pulled in real time, nothing hardcoded.
					</p>
				</div>
			</section>

			{/* WakaTime */}
			<section data-aos="fade-up" className="space-y-10">
				<div className="flex flex-wrap items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
					<div className="space-y-2">
						<div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
							<Icon icon="simple-icons:wakatime" />
							Coding Activity
						</div>
						<h2 className="font-headline text-4xl text-on-surface">WakaTime Stats</h2>
						{waka?.lastChecked && (
							<p className="text-[11px] text-on-surface-variant">Updated {fmtChecked(waka.lastChecked)}</p>
						)}
					</div>
					{waka?.allTimeText && (
						<div className="text-right">
							<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">All-time tracked</p>
							<p className="font-headline text-2xl font-bold text-primary">{waka.allTimeText}</p>
						</div>
					)}
				</div>

				{wakaLoading && (
					<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
						{[1, 2, 3, 4].map((n) => <div key={n} className="h-28 animate-pulse rounded-xl bg-surface-container" />)}
					</div>
				)}

				{!wakaLoading && wakaError && (
					<div className="rounded-xl border border-outline-variant/20 bg-surface-container p-8 text-center text-on-surface-variant">
						<Icon icon="material-symbols:bar-chart-4-bars-rounded" className="mx-auto mb-3 text-3xl" />
						<p className="text-sm">Coding stats are warming up. {wakaError === 'WakaTime not configured' ? 'Set WAKATIME_API_KEY on the server to go live.' : 'Try again shortly.'}</p>
					</div>
				)}

				{!wakaLoading && waka && (
					<>
						<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
							<StatCard label="Daily average" value={waka.dailyAverage} accent="text-primary" sub="Last 7 days" />
							<StatCard label="Last 7 days" value={waka.last7Total} accent="text-secondary" sub="Total coded" />
							<StatCard label="Last 30 days" value={waka.last30Total} accent="text-on-surface" sub="Total coded" />
							<StatCard label="Best day" value={waka.bestDay?.text ?? null} accent="text-tertiary" sub={waka.bestDay?.date} />
						</div>

						<div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
							<BarCard title="Languages" icon="material-symbols:code-rounded" items={waka.languages} />
							<BarCard title="AI vs Human Coding" icon="material-symbols:robot-outline" items={waka.categories} />
							<BarCard title="Editors" icon="material-symbols:edit-document-outline-rounded" items={waka.editors} />
							<BarCard title="Operating Systems" icon="material-symbols:desktop-windows-outline-rounded" items={waka.os} />
						</div>
					</>
				)}
			</section>

			{/* Favorite Anime */}
			<section data-aos="fade-up" className="space-y-10">
				<div className="space-y-2 border-b border-outline-variant/20 pb-6">
					<div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
						<Icon icon="material-symbols:animated-images-outline-rounded" />
						Off the Clock
					</div>
					<h2 className="font-headline text-4xl text-on-surface">Favorite Anime</h2>
					<p className="max-w-2xl text-base leading-relaxed text-on-surface-variant">
						The series that fuel the late-night coding sessions.
					</p>
				</div>

				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
					{favoriteAnime.map((anime, index) => (
						<article
							key={anime.title}
							data-aos="zoom-in"
							data-aos-delay={(index % 4) * 80}
							className="group relative aspect-video overflow-hidden rounded-xl border border-outline-variant/15 bg-surface-container-low"
						>
							<img
								src={anime.cover}
								alt={anime.title}
								loading="lazy"
								className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
							/>
							<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 space-y-1 p-4">
								<span className={`inline-flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest ${accentText[anime.accent]}`}>
									<span className={`h-1.5 w-1.5 rounded-full ${accentBg[anime.accent]}`} />
									{anime.genre}
								</span>
								<h3 className="font-headline text-lg font-bold leading-tight text-on-surface">{anime.title}</h3>
							</div>
						</article>
					))}
				</div>
			</section>

			{/* Games */}
			<section data-aos="fade-up" className="space-y-10">
				<div className="flex flex-wrap items-end justify-between gap-4 border-b border-outline-variant/20 pb-6">
					<div className="space-y-2">
						<div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary">
							<Icon icon="material-symbols:stadia-controller-outline-rounded" />
							Press Start
						</div>
						<h2 className="font-headline text-4xl text-on-surface">Games I Play</h2>
						{games?.profile?.lastChecked && (
							<p className="text-[11px] text-on-surface-variant">Updated {fmtChecked(games.profile.lastChecked)}</p>
						)}
					</div>
					{games?.profile?.gamerLevel != null && (
						<div className="flex items-center gap-3">
							{games.profile.avatar && (
								<img
									src={games.profile.avatar}
									alt={games.profile.playerName ?? 'Player'}
									className="h-11 w-11 rounded-full border border-outline-variant/30 object-cover"
								/>
							)}
							<div className="text-right">
								<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Player level</p>
								<p className="font-headline text-2xl font-bold text-secondary">{games.profile.gamerLevel}</p>
								{games.profile.experiencePoints != null && (
									<p className="text-[10px] text-on-surface-variant/70">
										{games.profile.experiencePoints.toLocaleString()} XP
									</p>
								)}
							</div>
							{games.profile.trophies != null && (
								<div className="flex items-center gap-1.5 border-l border-outline-variant/20 pl-3 text-right">
									<Icon icon="material-symbols:trophy-rounded" className="text-tertiary" />
									<div>
										<p className="font-headline text-2xl font-bold text-tertiary">{games.profile.trophies}</p>
										<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">Trophies</p>
									</div>
								</div>
							)}
						</div>
					)}
				</div>

				{gamesDiag && (
					<div className="rounded-xl border border-tertiary/30 bg-tertiary/5 p-4 text-sm text-on-surface-variant">
						<p className="mb-1 font-semibold text-tertiary">
							Live Play Games stats unavailable ({gamesDiag.warning ?? 'error'}) - showing curated data
						</p>
						{gamesDiag.detail && (
							<pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words rounded-lg bg-surface-container p-3 text-[11px] leading-relaxed text-on-surface-variant/80">
								{gamesDiag.detail}
							</pre>
						)}
					</div>
				)}

				{gamesLoading && (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{[1, 2, 3].map((n) => <div key={n} className="h-56 animate-pulse rounded-2xl bg-surface-container" />)}
					</div>
				)}

				{!gamesLoading && games && (
					<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
						{games.games.map((game, index) => (
							<article
								key={game.id}
								data-aos="fade-up"
								data-aos-delay={index * 100}
								className="bento-card group flex flex-col gap-5 rounded-2xl p-6"
							>
								<div className="flex items-center gap-4">
									<div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-outline-variant/20">
										<img src={gameIcons[game.id]} alt={game.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
									</div>
									<div className="min-w-0">
										<h3 className="truncate font-headline text-xl font-bold text-on-surface">{game.title}</h3>
										<p className="text-xs uppercase tracking-wider text-on-surface-variant">{game.genre}</p>
									</div>
								</div>

								<div className="grid grid-cols-2 gap-3">
									<GameMetric label="Hours played" value={game.hoursPlayed != null ? `${game.hoursPlayed}h` : '—'} accent="text-primary" />
									<GameMetric
										label="Achievements"
										value={game.achievements.unlocked != null
											? game.achievements.total != null
												? `${game.achievements.unlocked}/${game.achievements.total}`
												: String(game.achievements.unlocked)
											: '—'}
										accent="text-secondary"
									/>
								</div>

								{game.rank && (
									<div className="flex items-center gap-2 rounded-lg border border-outline-variant/15 bg-surface-container-low px-3 py-2">
										<Icon icon="material-symbols:military-tech-outline-rounded" className="text-tertiary" />
										<span className="text-sm font-semibold text-on-surface">{game.rank}</span>
									</div>
								)}

								{game.stats.length > 0 && (
									<div className="space-y-1.5 border-t border-outline-variant/15 pt-3">
										{game.stats.map((s) => (
											<div key={s.label} className="flex items-center justify-between text-xs">
												<span className="text-on-surface-variant">{s.label}</span>
												<span className="font-semibold text-on-surface">{s.value}</span>
											</div>
										))}
									</div>
								)}

								<a
									href={game.playUrl}
									target="_blank"
									rel="noreferrer"
									className="mt-auto inline-flex items-center justify-center gap-2 rounded-full border border-outline-variant/20 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-on-surface-variant transition-colors hover:border-primary hover:text-primary"
								>
									<Icon icon="material-symbols:google-play" />
									View on Play Store
								</a>
							</article>
						))}
					</div>
				)}

				{!gamesLoading && games?.profile?.achievements && games.profile.achievements.length > 0 && (
					<div className="space-y-5">
						<div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-tertiary">
							<Icon icon="material-symbols:trophy-outline-rounded" />
							Play Games Achievements
						</div>
						<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
							{games.profile.achievements.map((a, i) => (
								<div
									key={`${a.name}-${i}`}
									data-aos="fade-up"
									data-aos-delay={i * 60}
									className="bento-card flex items-center gap-3 rounded-xl p-4"
								>
									{a.icon && (
										<img src={a.icon} alt={a.name} className="h-12 w-12 shrink-0 rounded-lg object-cover" />
									)}
									<div className="min-w-0 flex-1">
										<p className="truncate font-headline text-sm font-bold text-on-surface">{a.name}</p>
										<p className="truncate text-xs text-on-surface-variant" title={a.description}>{a.description}</p>
										<div className="mt-1.5 flex flex-wrap items-center gap-1.5">
											{a.rarity && (
												<span className="rounded-full bg-tertiary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-tertiary">
													{a.rarity}
												</span>
											)}
											{a.progress && (
												<span className="rounded-full bg-secondary/15 px-2 py-0.5 text-[10px] font-semibold text-secondary">
													{a.progress}
												</span>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				)}
			</section>
		</main>
	)
}

function StatCard({ label, value, accent, sub }: { label: string; value: string | null; accent: string; sub?: string }) {
	return (
		<div className="rounded-xl border border-outline-variant/20 bg-surface-container px-4 py-5 sm:px-6">
			<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{label}</p>
			<p className={`mt-2 font-headline text-xl font-bold md:text-2xl ${accent}`}>{value ?? '—'}</p>
			{sub && <p className="mt-1 text-[11px] text-on-surface-variant">{sub}</p>}
		</div>
	)
}

function BarCard({ title, icon, items }: { title: string; icon: string; items: WakaItem[] }) {
	if (!items || items.length === 0) return null
	return (
		<article className="bento-card space-y-5 rounded-2xl p-6 md:p-8">
			<div className="flex items-center gap-2">
				<Icon icon={icon} className="text-xl text-primary" />
				<h3 className="font-headline text-xl text-on-surface">{title}</h3>
			</div>
			<div className="space-y-4">
				{items.map((item) => (
					<div key={item.name} className="space-y-1.5">
						<div className="flex items-center justify-between text-sm">
							<span className="font-semibold text-on-surface">{item.name}</span>
							<span className="text-xs text-on-surface-variant">{item.text} · {item.percent}%</span>
						</div>
						<div className="h-1.5 overflow-hidden rounded-full bg-surface-container-low">
							<div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style={{ width: `${item.percent}%` }} />
						</div>
					</div>
				))}
			</div>
		</article>
	)
}

function GameMetric({ label, value, accent }: { label: string; value: string; accent: string }) {
	return (
		<div className="rounded-lg border border-outline-variant/15 bg-surface-container-low px-3 py-2.5">
			<p className="text-[10px] uppercase tracking-widest text-on-surface-variant">{label}</p>
			<p className={`mt-1 font-headline text-lg font-bold ${accent}`}>{value}</p>
		</div>
	)
}
