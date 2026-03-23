import type React from 'react'
import { Icon } from '@iconify/react'
import { portfolioImages } from '../assets/images'
import type { LinkType } from '../components/Header'

const toolkit = [
	{ label: 'Next.js', icon: 'material-symbols:terminal-rounded', level: 2 },
	{ label: 'React', icon: 'material-symbols:data-object-rounded', level: 3 },
	{ label: 'Figma', icon: 'material-symbols:draw-outline-rounded', level: 3 },
	{ label: 'Framer', icon: 'tabler:brand-framer-motion', level: 1 },
	{ label: 'Vercel', icon: 'lineicons:vercel', level: 3 },
	{ label: 'Tailwind', icon: 'material-icon-theme:tailwindcss', level: 3 },
]

const programmingLanguages = [
	{ label: 'TypeScript', level: 'Advanced' },
	{ label: 'JavaScript', level: 'Advanced' },
	{ label: 'Python', level: 'Intermediate' },
	{ label: 'SQL', level: 'Intermediate' },
	{ label: 'HTML/CSS', level: 'Advanced' },
	{ label: 'Bash', level: 'Intermediate' },
]

const milestones = [
	{
		year: '2023',
		title: 'Senior Design Lead',
		detail: "Architected the design system for 'Nexus FinTech', increasing engineering velocity by 40%.",
		yearClass: 'text-secondary',
	},
	{
		year: '2021',
		title: 'Independent Consultant',
		detail: 'Collaborated with 12+ startups to redefine digital presence and UI patterns.',
		yearClass: 'text-primary',
	},
	{
		year: '2019',
		title: 'Red Dot Award',
		detail: 'Received excellence for innovative UI interaction models in e-commerce.',
		yearClass: 'text-on-surface-variant',
	},
]

export default function About({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   setActive('about')

	return (
		<main className="mx-auto max-w-7xl space-y-40 px-6 pb-24 pt-32 md:px-12 lg:px-24">
			<section id="about" className="relative isolate grid grid-cols-1 items-end gap-12 overflow-hidden rounded-2xl p-6 lg:grid-cols-12 lg:p-10">
				<img
					src={portfolioImages.headerOverlay}
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-50"
				/>
				<div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/85 to-surface/70" />

				<div className="relative z-10 space-y-8 lg:col-span-8">
					<div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
						<span className="h-px w-8 bg-secondary" />
						Philosophy
					</div>
					<h1 className="font-headline text-4xl leading-[1.1] text-on-surface md:text-6xl lg:text-7xl">
						Curating with <br />
						<span className="font-serif text-primary italic">Intentional</span> <br />
						Asymmetry.
					</h1>
					<p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
						I treat the digital canvas like a physical gallery where negative space holds as much
						weight as the art itself. My approach rejects rigid symmetry for a curated balance
						that guides the eye with precision.
					</p>
				</div>

				<div className="relative z-10 hidden lg:col-span-4 lg:block">
					<div className="group aspect-[3/4] overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low">
						<img
							src={portfolioImages.aboutPortrait}
							alt="Professional portrait"
							className="h-full w-full object-cover grayscale brightness-75 transition-transform duration-700 group-hover:scale-105"
						/>
					</div>
				</div>
			</section>

			<section id="expertise" className="space-y-12">
				<div className="flex items-end justify-between border-b border-outline-variant/20 pb-6">
					<h2 className="font-headline text-4xl text-on-surface">Core Expertise</h2>
					<div className="hidden text-sm uppercase tracking-widest text-on-surface-variant md:block">
						Defining the Digital Frontier
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
					<article className="bento-card space-y-6 rounded-xl p-10 md:col-span-2 lg:col-span-3">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
							<Icon icon="material-symbols:category-outline-rounded" className="text-3xl text-primary" />
						</div>
						<h3 className="font-headline text-3xl">Brand Identity</h3>
						<p className="leading-relaxed text-on-surface-variant">
							Visual storytelling that transcends the screen. I build systems that communicate
							authority through typography and color theory.
						</p>
						<div className="flex flex-wrap gap-2 pt-4">
							{['Typography', 'Logo Systems', 'Guidelines'].map((tag) => (
								<span key={tag} className="rounded-full bg-surface-container-highest/50 px-4 py-1.5 text-xs">
									{tag}
								</span>
							))}
						</div>
					</article>

					<article className="bento-card space-y-6 rounded-xl p-10 md:col-span-2 lg:col-span-3">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
							<Icon icon="material-symbols:architecture-rounded" className="text-3xl text-secondary" />
						</div>
						<h3 className="font-headline text-3xl">UX Architecture</h3>
						<p className="leading-relaxed text-on-surface-variant">
							Precision engineering for human interaction. Every pixel is placed with intent to
							reduce friction and elevate the user journey.
						</p>
						<div className="flex flex-wrap gap-2 pt-4">
							{['Wireframing', 'Prototyping', 'User Testing'].map((tag) => (
								<span key={tag} className="rounded-full bg-surface-container-highest/50 px-4 py-1.5 text-xs">
									{tag}
								</span>
							))}
						</div>
					</article>

					<article className="bento-card flex flex-col items-start gap-10 overflow-hidden rounded-xl p-10 md:col-span-4 md:flex-row lg:col-span-4">
						<div className="flex-1 space-y-6">
							<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
								<Icon icon="si:insights-fill" className="text-3xl text-primary" />
							</div>
							<h3 className="font-headline text-3xl">Digital Strategy</h3>
							<p className="leading-relaxed text-on-surface-variant">
								Aligning business objectives with creative execution. I help brands find their unique
								voice in a saturated marketplace through data-driven design decisions.
							</p>
						</div>
						<div className="aspect-square w-full overflow-hidden rounded-lg border border-outline-variant/10 bg-surface-container-lowest md:w-64">
							<img
								src={portfolioImages.aboutDataVisual}
								alt="Data visualization"
								className="h-full w-full object-cover opacity-50 grayscale transition-all duration-700 hover:grayscale-0"
							/>
						</div>
					</article>

					<article className="flex cursor-default flex-col justify-end space-y-6 rounded-xl bg-primary-container p-10 md:col-span-4 lg:col-span-2">
						<Icon icon="material-symbols:code-rounded" className="text-5xl text-on-primary-container" />
						<div>
							<h3 className="font-headline text-3xl text-on-primary-container">Interactive Dev</h3>
							<p className="mt-2 text-on-primary-container/80">
								Turning static visions into living, high-performance digital realities.
							</p>
						</div>
					</article>
				</div>
			</section>

			<section className="relative isolate space-y-12 pt-25 overflow-hidden rounded-2xl">
				<img
					src={portfolioImages.headerOverlay}
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover opacity-7"
				/>

				<div className="space-y-4 text-center">
					<h2 className="font-headline text-4xl">The Toolkit</h2>
					<p className="text-xs uppercase tracking-widest text-on-surface-variant">
						High-performance tech for high-end results
					</p>
				</div>

				<div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6">
					{toolkit.map((tool) => (
						<article key={tool.label} className="bento-card flex flex-col items-center gap-4 rounded-xl p-8">
							<div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-container text-on-surface-variant">
								<Icon icon={tool.icon} />
							</div>
							<span className="font-nav-link text-sm font-semibold tracking-wide">{tool.label}</span>
							<div className="flex gap-1.5">
								{[1, 2, 3].map((dot) => (
									<span
										key={dot}
										className={`h-1.5 w-1.5 rounded-full ${dot <= tool.level ? 'bg-primary' : 'bg-primary/20'}`}
									/>
								))}
							</div>
						</article>
					))}
				</div>

				<article className="bento-card space-y-6 rounded-xl p-8 md:p-10">
					<div className="flex items-center justify-between gap-4">
						<h3 className="font-headline text-3xl text-on-surface">Programming Languages</h3>
						<span className="font-nav-link text-xs uppercase tracking-widest text-on-surface-variant">
							Core Stack
						</span>
					</div>

					<div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
						{programmingLanguages.map((language) => (
							<div
								key={language.label}
								className="flex items-center justify-between rounded-lg border border-outline-variant/20 bg-surface-container px-4 py-3"
							>
								<span className="font-nav-link text-sm font-semibold text-on-surface">{language.label}</span>
								<span className="text-xs uppercase tracking-wider text-on-surface-variant">{language.level}</span>
							</div>
						))}
					</div>
				</article>
			</section>

			<section className="-mx-6 space-y-12 rounded-2xl border border-outline-variant/10 bg-surface-container-low/30 px-6 py-20 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
				<h2 className="font-headline text-4xl">Milestones</h2>
				<div className="flex flex-col gap-12 md:flex-row">
					{milestones.map((item, index) => (
						<article
							key={item.year}
							className={`flex-1 space-y-4 ${index === 0 ? 'relative' : 'border-outline-variant/30 pt-8 md:border-l md:pl-8 md:pt-0'}`}
						>
							<div className={`font-headline text-3xl ${item.yearClass}`}>{item.year}</div>
							<h4 className="text-xl font-bold">{item.title}</h4>
							<p className="text-base leading-relaxed text-on-surface-variant">{item.detail}</p>
						</article>
					))}
				</div>
			</section>

			<section
				id="contact"
				className="relative isolate space-y-8 overflow-hidden rounded-3xl bg-gradient-to-b from-transparent to-surface-container-low/20 py-20 text-center"
			>
				<img
					src={portfolioImages.contactOverlay}
					alt=""
					aria-hidden="true"
					className="pointer-events-none absolute inset-x-0 top-0 h-full w-full object-cover opacity-30"
				/>
				<div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-surface/85 via-surface/55 to-transparent" />

				<h2 className="relative z-10 font-headline text-5xl leading-tight md:text-6xl">
					Let's build something <br /> <span className="font-serif text-primary italic">remarkable.</span>
				</h2>

				<div className="relative z-10 flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
					<button className="scale-100 rounded-full bg-primary px-12 py-5 text-sm font-black uppercase tracking-widest text-on-primary shadow-xl shadow-primary/20 transition-all active:scale-95 hover:opacity-80">
						Hire Me Now
					</button>
					<button className="inline-flex items-center gap-3 text-sm uppercase px-12 py-5 rounded-full tracking-[0.2em] text-primary transition-transform hover:translate-x-2 hover:bg-white/10">
						View Portfolio <Icon icon="material-symbols:arrow-right-alt-rounded" />
					</button>
				</div>
			</section>
		</main>
	)
}
