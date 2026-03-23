import type React from 'react'
import { Icon } from '@iconify/react'
import { portfolioImages } from '../assets/images'
import type { LinkType } from '../components/Header'

const filters = ['All Projects', 'Web Design', 'Mobile Apps', 'Brand Systems']

export default function Projects({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
	setActive('projects')

	return (
		<main className="mx-auto max-w-7xl px-8 pb-24 pt-32">
			<header data-aos="fade-up" className="mb-20 max-w-3xl space-y-6">
				<div className="inline-flex items-center gap-3 rounded-full border border-outline-variant/15 bg-surface-container-highest px-4 py-1.5">
					<span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
					<span className="text-xs font-bold uppercase tracking-widest text-primary">Active Deployments</span>
				</div>
				<h1 className="font-headline text-6xl leading-tight text-on-surface md:text-7xl">Live Now</h1>
				<p className="max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
					The intersection of high-fidelity design and production-grade code. Explore a curated
					selection of digital environments currently active across the global web.
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
							src={portfolioImages.liveProjectFeature}
							alt="Abstract 3D emerald glass shards"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-6 p-8 md:p-12">
						<div className="flex flex-col justify-between gap-6 md:flex-row md:items-start">
							<div className="space-y-2">
								<h3 className="font-headline text-3xl text-on-surface">Aether Engine</h3>
								<p className="max-w-md text-on-surface-variant">
									A real-time data visualization platform for celestial mechanics and satellite telemetry.
								</p>
							</div>
							<div className="flex gap-2">
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">Next.js</span>
								<span className="rounded-full bg-surface-container-highest px-3 py-1 text-[10px] font-bold uppercase tracking-widest">WebGL</span>
							</div>
						</div>
						<button className="group inline-flex items-center gap-2 font-bold text-primary">
							View Live
							<Icon icon="material-symbols:arrow-forward" className="transition-transform group-hover:translate-x-1" />
						</button>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="100" className="group relative flex flex-col justify-between overflow-hidden rounded-xl bg-surface-container-high/40 backdrop-blur-md transition-all duration-500 md:col-span-4">
					<div className="aspect-square w-full overflow-hidden">
						<img
							src={portfolioImages.liveProjectSide}
							alt="Minimalist glowing golden abstract lines"
							className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
					<div className="space-y-4 bg-surface-container-low/80 p-8 backdrop-blur-md">
						<h3 className="font-headline text-2xl text-secondary">Solaris OS</h3>
						<p className="text-sm text-on-surface-variant">
							A custom design system for high-performance dashboard interfaces.
						</p>
						<div className="flex items-center justify-between pt-4">
							<span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Framer Motion</span>
							<button className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/30 transition-colors hover:bg-primary hover:text-on-primary">
								<Icon icon="material-symbols:open-in-new" />
							</button>
						</div>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="120" className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-low transition-all duration-500 hover:bg-surface-container md:col-span-4">
					<div className="flex-1 space-y-4 p-8">
						<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container/20 text-primary">
							<Icon icon="material-symbols:grid-view" />
						</div>
						<h3 className="font-headline text-2xl text-on-surface">Nexus Grid</h3>
						<p className="text-sm text-on-surface-variant">
							Architecture for a modular e-commerce experience across multiple brand silos.
						</p>
						<div className="flex flex-wrap gap-2 pt-2">
							<span className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold text-on-surface-variant">Tailwind</span>
							<span className="rounded-full bg-surface-container-highest px-2 py-0.5 text-[9px] font-bold text-on-surface-variant">React</span>
						</div>
					</div>
					<div className="h-48 overflow-hidden">
						<img
							src={portfolioImages.liveProjectGrid}
							alt="High tech server room with green neon lighting"
							className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
						/>
					</div>
				</article>

				<article data-aos="zoom-in" data-aos-delay="160" className="group relative flex flex-col overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-lowest transition-all duration-500 md:col-span-8 md:flex-row">
					<div className="overflow-hidden md:w-1/2">
						<img
							src={portfolioImages.liveProjectMobile}
							alt="Sleek silver metal abstract waves"
							className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
						/>
					</div>
					<div className="flex flex-col justify-center space-y-6 p-8 md:w-1/2 md:p-12">
						<div className="space-y-2">
							<span className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-400">Mobile Deployment</span>
							<h3 className="font-headline text-3xl text-on-surface">Kinetix App</h3>
							<p className="text-on-surface-variant">A gesture-controlled music production tool for iPad Pro.</p>
						</div>
						<div className="flex items-center gap-4">
							<button className="rounded-full bg-primary-container px-6 py-2 text-sm font-bold text-on-primary-container transition-transform active:scale-95">
								Preview App
							</button>
							<span className="text-xs italic text-on-surface-variant">Stable Release v2.4</span>
						</div>
					</div>
				</article>
			</section>
		</main>
	)
}
