import type React from 'react'
import { Icon } from '@iconify/react'
import { portfolioImages } from '../assets/images'
import type { LinkType } from '../components/Header'
import { useEffect } from 'react'

const filters = ['All Projects', 'Web Design', 'Mobile Apps', 'Brand Systems']

export default function Projects({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
	useEffect(() => setActive('projects'), [setActive])

	return (
		<main className="mx-auto max-w-[1920px] px-6 pb-24 pt-32 md:px-12">
			<header data-aos="fade-down" data-aos-duration="700" className="mb-20 max-w-3xl space-y-6">
				<div className="inline-flex items-center gap-3 rounded-full border border-outline-variant/15 bg-surface-container-highest px-4 py-1.5">
					<span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
					<span className="text-xs font-bold uppercase tracking-widest text-primary">Active Deployments</span>
				</div>
				<h1 className="font-noto-serif text-6xl italic leading-tight text-on-surface md:text-7xl">Live Now</h1>
				<p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
					A curated gallery of deployed products across fintech dashboards, landing pages,
					business websites, API documentation, and trading utilities.
				</p>
			</header>

			<nav data-aos="fade-right" data-aos-delay="100" data-aos-duration="600" className="mb-16 flex flex-wrap gap-8 border-b border-outline-variant/15 pb-6">
				{filters.map((filter, index) => (
					<button
						key={filter}
						className={
							index === 0
								? 'text-sm font-bold uppercase tracking-tight text-primary'
								: 'text-sm uppercase tracking-tight text-on-surface-variant transition-colors hover:text-on-surface'
						}
					>
						{filter}
					</button>
				))}
			</nav>

			<section className="grid grid-cols-1 gap-5 md:grid-cols-12">
				{/* Nolpay VTU Mobile App */}
				<div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className="relative md:col-span-12 md:min-h-[680px] overflow-hidden rounded-3xl mb-6">
					<div className="absolute inset-0 bg-[#0b1326]" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_100%,_rgba(78,222,163,0.12)_0%,_transparent_70%)]" />
					<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_20%,_rgba(255,185,95,0.07)_0%,_transparent_70%)]" />

					{/* Mobile layout — stacked */}
					<div className="relative z-10 flex flex-col md:hidden px-8 pt-6 pb-0">
						<span className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Mobile App · VTU Platform</span>
						<h3 className="font-noto-serif text-5xl italic leading-tight text-on-surface">Nol<span className="text-primary">Pay</span></h3>
						<p className="mt-5 text-sm leading-relaxed text-on-surface-variant">
							Buy airtime & data for all networks, pay electricity bills, subscribe to cable TV,
							fund your wallet, and manage transactions — all from one clean, fast mobile app.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{['Airtime & Data', 'Electricity', 'Cable TV', 'Wallet', 'Referrals'].map((tag) => (
								<span key={tag} className="rounded-full border border-outline-variant/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
									{tag}
								</span>
							))}
						</div>
						<div className="mt-4 flex flex-wrap gap-2">
							{['React Native', 'Node.js', 'VTU APIs'].map((tag) => (
								<span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Mobile phones row */}
					<div className="relative z-10 flex md:hidden items-end gap-3 px-4 h-[320px] -mt-17 mb-7">
						<div data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" className="w-[23%] translate-y-4 rotate-[-6deg] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/1.png" alt="Nolpay profile" className="w-full" />
						</div>
						<div data-aos="zoom-in" data-aos-delay="450" data-aos-duration="600" className="w-[25%] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/3.png" alt="Nolpay bills" className="w-full" />
						</div>
						<div data-aos="fade-up" data-aos-delay="550" data-aos-duration="700" className="w-[27%] overflow-hidden rounded-2xl border border-primary/30 shadow-[0_0_40px_rgba(78,222,163,0.2)]">
							<img src="/project-screenshots/nolpay/2.png" alt="Nolpay dashboard" className="w-full" />
						</div>
						<div data-aos="zoom-in" data-aos-delay="650" data-aos-duration="600" className="w-[23%] translate-y-4 rotate-[5deg] overflow-hidden rounded-2xl border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/4.png" alt="Nolpay airtime" className="w-full" />
						</div>
					</div>

					{/* Content — left side (desktop only) */}
					<div className="hidden md:flex absolute left-0 top-0 z-10 h-full w-full flex-col justify-center px-8 md:w-[42%] md:px-12 lg:px-16">
						<span className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Mobile App · VTU Platform</span>
						<h3 className="font-noto-serif text-5xl italic leading-tight text-on-surface lg:text-6xl">Nol<span className="text-primary">Pay</span></h3>
						<p className="mt-5 max-w-sm text-sm leading-relaxed text-on-surface-variant">
							Buy airtime & data for all networks, pay electricity bills, subscribe to cable TV,
							fund your wallet, and manage transactions — all from one clean, fast mobile app.
						</p>
						<div className="mt-6 flex flex-wrap gap-2">
							{['Airtime & Data', 'Electricity', 'Cable TV', 'Wallet', 'Referrals'].map((tag) => (
								<span key={tag} className="rounded-full border border-outline-variant/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
									{tag}
								</span>
							))}
						</div>
						<div className="mt-8 flex flex-wrap gap-2">
							{['React Native', 'Node.js', 'VTU APIs'].map((tag) => (
								<span key={tag} className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-primary">
									{tag}
								</span>
							))}
						</div>
					</div>

					{/* Screenshots — right side, scattered (desktop only) */}
					<div className="hidden md:block absolute bottom-0 right-0 h-full w-full md:w-[65%]">
						<div data-aos="fade-up" data-aos-delay="350" data-aos-duration="600" className="absolute bottom-[-30px] left-[2%] w-[22%] rotate-[-8deg] overflow-hidden rounded-[2rem] border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/1.png" alt="Nolpay profile" className="w-full" />
						</div>
						<div data-aos="zoom-in-up" data-aos-delay="480" data-aos-duration="650" className="absolute bottom-[-15px] left-[22%] w-[24%] rotate-[-3deg] overflow-hidden rounded-[2rem] border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/3.png" alt="Nolpay bills" className="w-full" />
						</div>
						<div data-aos="fade-up" data-aos-delay="600" data-aos-duration="700" className="absolute bottom-0 left-[44%] z-10 w-[26%] overflow-hidden rounded-[2rem] border border-primary/30 shadow-[0_0_60px_rgba(78,222,163,0.2)]">
							<img src="/project-screenshots/nolpay/2.png" alt="Nolpay dashboard" className="w-full" />
						</div>
						<div data-aos="zoom-in-left" data-aos-delay="730" data-aos-duration="600" className="absolute bottom-[-20px] right-[2%] w-[22%] rotate-[6deg] overflow-hidden rounded-[2rem] border border-outline-variant/20 shadow-2xl">
							<img src="/project-screenshots/nolpay/4.png" alt="Nolpay airtime" className="w-full" />
						</div>
					</div>
				</div>

				{/* Row 1: Bada (wide) + Bennybit (narrow) */}
				<article data-aos="fade-right" data-aos-delay="400" data-aos-duration="700" className="group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-8">
					<div className="aspect-[16/9] w-full overflow-hidden">
						<img
							src={portfolioImages.badaProject}
							alt="Bada fintech product landing page"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-5 p-8 md:p-10">
						<div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
							<div className="space-y-1.5">
								<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">Fintech · Landing Page</span>
								<h3 className="font-headline text-3xl text-on-surface">Bada</h3>
								<p className="max-w-md text-sm text-on-surface-variant">
									Fintech product landing page showcasing crypto trading, giftcard redemption,
									sending/withdraw flows, and trust-driven metrics.
								</p>
							</div>
							<div className="flex shrink-0 flex-wrap gap-2">
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">React</span>
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Tailwind</span>
							</div>
						</div>
						<a href="https://bada-fintech.vercel.app" target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-sm font-bold text-primary">
							View Live
							<Icon icon="material-symbols:arrow-forward" className="transition-transform group-hover/link:translate-x-1" />
						</a>
					</div>
				</article>

				<article data-aos="fade-left" data-aos-delay="550" data-aos-duration="700" className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-surface-container-high/40 backdrop-blur-md transition-all duration-500 md:col-span-4">
					<div className="aspect-[4/3] w-full overflow-hidden">
						<img
							src="/project-screenshots/bennybit-landing.png"
							alt="Bennybit landing page"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-3 bg-surface-container-low/80 p-7 backdrop-blur-md">
						<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-secondary">Fintech · Dashboard</span>
						<h3 className="font-headline text-2xl text-on-surface">Bennybit</h3>
						<p className="text-sm text-on-surface-variant">
							Secure fintech web dashboard with auth, crypto, and gift card workflows.
						</p>
						<div className="flex items-center justify-between pt-2">
							<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">React · Node.js · TS</span>
							<a href="https://bennybit.vercel.app" target="_blank" rel="noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full border border-outline-variant/30 transition-colors hover:bg-primary hover:text-on-primary">
								<Icon icon="material-symbols:open-in-new" className="text-sm" />
							</a>
						</div>
					</div>
				</article>

				{/* Row 2: Booking API (wide) + GreenWorld (narrow) */}
				<article data-aos="zoom-in-up" data-aos-delay="700" data-aos-duration="750" className="group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-7">
					{/* Image zone — straight container, perspective-tilted image */}
					<div className="relative h-64 overflow-hidden bg-[#0d1117] md:h-72" style={{ perspective: '900px' }}>
						{/* Gradient overlays */}
						<div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_90%_60%_at_10%_110%,_rgba(99,102,241,0.18)_0%,_transparent_65%)]" />
						<div className="pointer-events-none absolute inset-0 z-10 bg-[radial-gradient(ellipse_50%_50%_at_90%_10%,_rgba(236,72,153,0.09)_0%,_transparent_70%)]" />
						{/* Edge fade — bottom */}
						<div className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 bg-gradient-to-t from-surface-container-low to-transparent" />
						{/* 3D tilted screenshot — fills container, snapped from bottom-left */}
						<div
							className="absolute inset-0 transition-transform duration-700"
							style={{ transformStyle: 'preserve-3d' }}
						>
							<img
								src="/project-screenshots/api.png"
								alt="Booking API with Stripe integration"
								className="absolute inset-0 h-full w-full origin-bottom-left object-cover object-top transition-transform duration-700 group-hover:[transform:rotateX(6deg)_rotateY(-6deg)_rotate(-2deg)_scale(1.04)]"
								style={{ transform: 'rotateX(10deg) rotateY(-14deg) rotate(-4deg) scale(1.08)' }}
							/>
						</div>
					</div>
					<div className="space-y-4 p-8 md:p-10">
						<div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
							<div className="space-y-1.5">
								<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-indigo-400">Backend · REST API</span>
								<h3 className="font-headline text-3xl text-on-surface">Booking API</h3>
								<p className="max-w-sm text-sm text-on-surface-variant">
									Full-featured booking system API with Stripe payment integration — handles reservations,
									availability, and secure checkout flows end-to-end.
								</p>
							</div>
							<div className="flex shrink-0 flex-wrap gap-2">
								<span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400">PHP</span>
								<span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400">Laravel</span>
								<span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400">Stripe</span>
							</div>
						</div>
						<div className="flex flex-wrap gap-2 pt-1">
							{['Reservations', 'Availability Engine', 'Stripe Checkout', 'Webhooks'].map((tag) => (
								<span key={tag} className="rounded-full border border-outline-variant/20 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
									{tag}
								</span>
							))}
						</div>
					</div>
				</article>

				<article data-aos="flip-left" data-aos-delay="850" data-aos-duration="800" className="group flex flex-col overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-5">
					<div className="flex-1 space-y-4 p-8">
						<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
							<Icon icon="material-symbols:bolt" className="text-xl" />
						</div>
						<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Energy · Corporate</span>
						<h3 className="font-headline text-2xl text-on-surface">GreenWorld Power Ltd.</h3>
						<p className="text-sm text-on-surface-variant">
							Renewable energy company website focused on services, installations, and a clear contact flow.
						</p>
						<div className="flex flex-wrap gap-2 pt-1">
							{['PHP', 'Laravel ORM', 'PhpSPA'].map((tag) => (
								<span key={tag} className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold uppercase text-on-surface-variant">{tag}</span>
							))}
						</div>
						<a href="https://greenworldpower.com.ng" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 pt-1 text-sm font-bold text-primary">
							Visit Site
							<Icon icon="material-symbols:open-in-new" className="text-sm" />
						</a>
					</div>
					<div className="h-44 overflow-hidden">
						<img
							src="/project-screenshots/greenworld.png"
							alt="GreenWorld Power website"
							className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
						/>
					</div>
				</article>

				{/* Row 3: Backend + Client (full width) */}
				<article data-aos="fade-up" data-aos-delay="1000" data-aos-duration="700" className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 md:col-span-12 md:flex-row">
					<div className="overflow-hidden md:w-[45%]">
						<img
							src="/project-screenshots/phpspa-client.png"
							alt="PhpSPA client showcase"
							className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						/>
					</div>
					<div className="flex flex-col justify-center space-y-6 p-8 md:w-[55%] md:p-12">
						<div className="space-y-2">
							<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">API + Client Delivery</span>
							<h3 className="font-headline text-3xl text-on-surface">Backend + Client Projects</h3>
							<p className="text-on-surface-variant">Finance tracker API, PhpSPA client showcase, and PipGalaxy market insights platform.</p>
						</div>
						<div className="flex flex-wrap items-center gap-3">
							<a href="https://neofinance.vercel.app/api-docs" target="_blank" rel="noreferrer" className="rounded-full bg-primary-container px-6 py-2 text-sm font-bold text-on-primary-container transition-transform active:scale-95">
								NeoFinance API Docs
							</a>
							<a href="https://phpspa-client.onrender.com" target="_blank" rel="noreferrer" className="text-xs italic text-on-surface-variant underline underline-offset-4 hover:text-on-surface">
								PhpSPA Client
							</a>
							<a href="https://pipgalaxy.free.nf" target="_blank" rel="noreferrer" className="text-xs italic text-on-surface-variant underline underline-offset-4 hover:text-on-surface">
								PipGalaxy
							</a>
						</div>
					</div>
				</article>

				{/* Row 4: Additional links */}
				<article data-aos="zoom-in-down" data-aos-delay="1150" data-aos-duration="600" className="group relative overflow-hidden rounded-2xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-12">
					<div className="space-y-4 p-8 md:p-10">
						<h3 className="font-headline text-2xl text-on-surface">Additional Live Links</h3>
						<p className="text-sm text-on-surface-variant">More shipped work from the same stack and delivery pipeline.</p>
						<div className="flex flex-wrap gap-3">
							{[
								{ label: 'skyshow.vercel.app', href: 'https://skyshow-app.vercel.app' },
								{ label: 'usebennybit.com', href: 'https://usebennybit.com' },
								{ label: 'bennybit.vercel.app', href: 'https://bennybit.vercel.app' },
								{ label: 'greenworldpower.com.ng', href: 'https://greenworldpower.com.ng' },
								{ label: 'ppay-dashboard.vercel.app', href: 'https://ppay-dashboard.vercel.app' },
								{ label: 'neofinance.vercel.app/api-docs', href: 'https://neofinance.vercel.app/api-docs' },
								{ label: 'phpspa-client.onrender.com', href: 'https://phpspa-client.onrender.com' },
								{ label: 'pipgalaxy.free.nf', href: 'https://pipgalaxy.free.nf' },
							].map(({ label, href }) => (
								<a key={href} href={href} target="_blank" rel="noreferrer"
									className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">
									{label}
								</a>
							))}
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}
