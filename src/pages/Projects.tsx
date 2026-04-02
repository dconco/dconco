import type React from 'react'
import { Icon } from '@iconify/react'
import { portfolioImages } from '../assets/images'
import type { LinkType } from '../components/Header'
import { useEffect } from 'react'

const filters = ['All Projects', 'Web Design', 'Mobile Apps', 'Brand Systems']

export default function Projects({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
	useEffect(() => setActive('projects'), [setActive])

	return (
		<main className="mx-auto max-w-7xl px-8 pb-24 pt-32">
			<header data-aos="fade-up" className="mb-20 max-w-3xl space-y-6">
				<div className="inline-flex items-center gap-3 rounded-full border border-outline-variant/15 bg-surface-container-highest px-4 py-1.5">
					<span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
					<span className="text-xs font-bold uppercase tracking-widest text-primary">Active Deployments</span>
				</div>
				<h1 className="font-headline text-6xl leading-tight text-on-surface md:text-7xl">Live Now</h1>
				<p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
					A curated gallery of deployed products across fintech dashboards, landing pages,
					business websites, API documentation, and trading utilities.
				</p>
			</header>

			<nav data-aos="fade-up" data-aos-delay="80" className="mb-16 flex flex-wrap gap-8 border-b border-outline-variant/15 pb-6">
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

			<section className="grid grid-cols-1 gap-6 md:grid-cols-12">
				<article data-aos="zoom-in" className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-8">
					<div className="aspect-[16/9] w-full overflow-hidden">
						<img
							src={portfolioImages.badaProject}
							alt="Bada fintech product landing page"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-6 p-8 md:p-12">
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
							<div className="space-y-2">
								<h3 className="font-headline text-3xl text-on-surface">bada-fintech.vercel.app</h3>
								<p className="max-w-md text-on-surface-variant">
									Fintech product landing page for Bada, showcasing crypto trading, giftcard redemption,
									sending/withdraw flows, and trust-driven metrics.
								</p>
							</div>
							<div className="flex gap-2">
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">React</span>
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Tailwind CSS</span>
							</div>
						</div>
						<a href="https://bada-fintech.vercel.app" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 font-bold text-primary">
							View Live
							<Icon icon="material-symbols:arrow-forward" className="transition-transform group-hover:translate-x-1" />
						</a>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="100" className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-high/40 backdrop-blur-md transition-all duration-500 md:col-span-4">
					<div className="aspect-square w-full overflow-hidden">
						<img
							src={`/project-screenshots/bennybit-landing.png`}
							alt="Minimalist glowing golden abstract lines"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-4 bg-surface-container-low/80 p-8 backdrop-blur-md">
						<h3 className="font-headline text-2xl text-secondary">bennybit.vercel.app</h3>
						<p className="text-sm text-on-surface-variant">
							Secure fintech-style web dashboard with authentication and workflows for users,
							transactions, crypto, and gift card operations.
						</p>
						<div className="flex items-center justify-between pt-4">
							<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">React • Node.js • TypeScript</span>
							<a href="https://bennybit.vercel.app" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 transition-colors hover:bg-primary hover:text-on-primary">
								<Icon icon="material-symbols:open-in-new" />
							</a>
						</div>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="120" className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-4">
					<div className="flex-1 space-y-4 p-8">
						<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
							<Icon icon="material-symbols:grid-view" />
						</div>
						<h3 className="font-headline text-2xl text-on-surface">greenworldpower.com.ng</h3>
						<p className="text-sm text-on-surface-variant">
							Renewable energy company website focused on services, installations, and a clear contact flow.
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							<span className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold text-on-surface-variant">PHP</span>
							<span className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold text-on-surface-variant">Laravel ORM</span>
							<span className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold text-on-surface-variant">PhpSPA</span>
						</div>
						<a href="https://greenworldpower.com.ng" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 pt-2 text-sm font-bold text-primary">
							Visit Site
							<Icon icon="material-symbols:open-in-new" />
						</a>
					</div>
					<div className="h-48 overflow-hidden">
						<img
							src={`/project-screenshots/greenworld.png`}
							alt="High tech server room with green neon lighting"
							className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
						/>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="160" className="group relative flex flex-col overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 md:col-span-8 md:flex-row">
					<div className="overflow-hidden md:w-1/2">
						<img
							src={`/project-screenshots/phpspa-client.png`}
							alt="Sleek silver metal abstract waves"
							className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						/>
					</div>
					<div className="flex flex-col justify-center space-y-6 p-8 md:w-1/2 md:p-12">
						<div className="space-y-2">
							<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">API + Client Delivery</span>
							<h3 className="font-headline text-3xl text-on-surface">Backend + Client Projects</h3>
							<p className="text-on-surface-variant">Finance tracker API, PhpSPA client showcase, and PipGalaxy market insights platform.</p>
						</div>
						<div className="flex items-center gap-4">
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

				<article data-aos="zoom-in" data-aos-delay="200" className="group relative overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-12">
					<div className="space-y-4 p-8 md:p-10">
						<h3 className="font-headline text-2xl text-on-surface">Additional Live Links</h3>
						<p className="text-on-surface-variant">More shipped work from the same stack and delivery pipeline.</p>
						<div className="flex flex-wrap gap-3">
							<a href="https://skyshow-app.vercel.app" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">skyshow.vercel.app</a>
							<a href="https://usebennybit.com" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">usebennybit.com</a>
							<a href="https://bennybit.vercel.app" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">bennybit.vercel.app</a>
							<a href="https://greenworldpower.com.ng" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">greenworldpower.com.ng</a>
							<a href="https://ppay-dashboard.vercel.app" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">ppay-dashboard.vercel.app</a>
							<a href="https://neofinance.vercel.app/api-docs" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">neofinance.vercel.app/api-docs</a>
							<a href="https://phpspa-client.onrender.com" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">phpspa-client.onrender.com</a>
							<a href="https://pipgalaxy.free.nf" target="_blank" rel="noreferrer" className="rounded-full border border-outline-variant/40 px-4 py-2 text-xs font-bold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">pipgalaxy.free.nf</a>
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}
