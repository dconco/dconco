import type React from 'react'
import { Icon } from '@iconify/react'
import { portfolioImages } from '../assets/images'
import type { LinkType } from '../components/Header'
import { Link } from 'react-router-dom'

const toolkit = [
	{ label: 'Laravel', icon: 'flowbite:laravel-solid', level: 2 },
	{ label: 'GoFiber', icon: 'simple-icons:go', level: 3 },
	{ label: 'Express', icon: 'simple-icons:express', level: 2 },
	{ label: 'Django', icon: 'akar-icons:django-fill', level: 2 },
	{ label: 'React', icon: 'mdi:react', level: 3 },
	{ label: 'Zustand', icon: 'devicon-plain:zustand', level: 2 },
	{ label: 'Tailwind', icon: 'mdi:tailwind', level: 3 },
	{ label: 'jQuery', icon: 'devicon-plain:jquery-wordmark', level: 3 },
	{ label: 'MongoDB', icon: 'simple-icons:mongodb', level: 2 },
	{ label: 'MySQL', icon: 'simple-icons:mysql', level: 3 },
	{ label: 'Git', icon: 'mdi:git', level: 3 },
	{ label: 'Linux/Apache', icon: 'uil:linux', level: 2 },
]

const programmingLanguages = [
	{ label: 'PHP', level: 'Advanced' },
	{ label: 'Go', level: 'Advanced' },
	{ label: 'TypeScript', level: 'Advanced' },
	{ label: 'JavaScript', level: 'Advanced' },
	{ label: 'C++', level: 'Intermediate' },
	{ label: 'Python', level: 'Intermediate' },
]

const milestones = [
	{
		year: '2025',
		title: 'Backend Platform Focus',
		detail: 'Shifted focus to scalable backend architecture, API reliability, and secure service design.',
		yearClass: 'text-secondary',
	},
	{
		year: '2023',
		title: 'Independent Product Delivery',
		detail: 'Delivered backend-heavy products from concept to deployment across commerce and custom platforms.',
		yearClass: 'text-primary',
	},
	{
		year: '2021',
		title: 'Engineering Foundation',
		detail: 'Built strong fundamentals in databases, Linux workflows, and maintainable application structure.',
		yearClass: 'text-on-surface-variant',
	},
]

export default function About({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   setActive('about')

	return (
		<main className="mx-auto max-w-7xl space-y-40 px-6 pb-24 pt-32 md:px-12 lg:px-24">
			<section id="about" data-aos="fade-up" className="relative isolate grid grid-cols-1 items-end gap-12 overflow-hidden rounded-2xl p-6 lg:grid-cols-12 lg:p-10">
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
						Building with <br />
						<span className="font-serif text-primary italic">Purposeful</span> <br />
						Architecture.
					</h1>
					<p className="max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
						Dave Conco is a full-stack engineer with strong frontend and backend expertise. He builds
						React interfaces that feel polished and intuitive, then supports them with reliable APIs,
						clear architecture, and maintainable production code.
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

			<section id="expertise" data-aos="fade-up" className="space-y-12">
				<div className="flex items-end justify-between border-b border-outline-variant/20 pb-6">
					<h2 className="font-headline text-4xl text-on-surface">Core Expertise</h2>
					<div className="hidden text-sm uppercase tracking-widest text-on-surface-variant md:block">
						Defining the Digital Frontier
					</div>
				</div>

				<div className="grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-6">
					<article data-aos="fade-right" className="bento-card space-y-6 rounded-xl p-10 md:col-span-2 lg:col-span-3">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
							<Icon icon="material-symbols:category-outline-rounded" className="text-3xl text-primary" />
						</div>
						<h3 className="font-headline text-3xl">Frontend Engineering</h3>
						<p className="leading-relaxed text-on-surface-variant">
							He crafts responsive React experiences with thoughtful interaction patterns,
							strong component architecture, and clean state management.
						</p>
						<div className="flex flex-wrap gap-2 pt-4">
							{['React & React Native', 'JavaScript & TypeScript', 'Modern UI/UX'].map((tag) => (
								<span key={tag} className="rounded-full bg-surface-container-highest/50 px-4 py-1.5 text-xs">
									{tag}
								</span>
							))}
						</div>
					</article>

					<article data-aos="fade-left" data-aos-delay="80" className="bento-card space-y-6 rounded-xl p-10 md:col-span-2 lg:col-span-3">
						<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary/10">
							<Icon icon="material-symbols:architecture-rounded" className="text-3xl text-secondary" />
						</div>
						<h3 className="font-headline text-3xl">Backend & Data Systems</h3>
						<p className="leading-relaxed text-on-surface-variant">
							From schema design to authentication, he builds backend services that protect data,
							reduce operational risk, and scale confidently.
						</p>
						<div className="flex flex-wrap gap-2 pt-4">
							{['PHP & Laravel', 'Golang & GoFiber', 'MySQL / MongoDB'].map((tag) => (
								<span key={tag} className="rounded-full bg-surface-container-highest/50 px-4 py-1.5 text-xs">
									{tag}
								</span>
							))}
						</div>
					</article>

					<article data-aos="fade-up" data-aos-delay="120" className="bento-card flex flex-col items-start gap-10 overflow-hidden rounded-xl p-10 md:col-span-4 md:flex-row lg:col-span-4">
						<div className="flex-1 space-y-6">
							<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
								<Icon icon="si:insights-fill" className="text-3xl text-primary" />
							</div>
							<h3 className="font-headline text-3xl">Systems Strategy</h3>
							<p className="leading-relaxed text-on-surface-variant">
								His approach connects product UX goals with practical engineering choices,
								including microservices, socket communication, and CI/CD-ready workflows.
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

					<article data-aos="zoom-in" data-aos-delay="140" className="flex cursor-default flex-col justify-end space-y-6 rounded-xl bg-primary-container p-10 md:col-span-4 lg:col-span-2">
						<Icon icon="material-symbols:code-rounded" className="text-5xl text-on-primary-container" />
						<div>
							<h3 className="font-headline text-3xl text-on-primary-container">Continuous Learning</h3>
							<p className="mt-2 text-on-primary-container/80">
								He stays current by exploring new tools, contributing to open source, and sharing what he learns.
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
					{toolkit.map((tool, index) => (
						<article
							key={tool.label}
							data-aos="fade-up"
							data-aos-delay={index * 100}
							className="bento-card flex flex-col items-center gap-4 rounded-xl p-8"
						>
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
						{programmingLanguages.map((language, index) => (
							<div
								key={language.label}
								data-aos="fade-up"
								data-aos-delay={index == 0 ? 100 : index+1 * 100}
								className="flex items-center justify-between rounded-lg border border-outline-variant/20 bg-surface-container px-4 py-3"
							>
								<span className="font-nav-link text-sm font-semibold text-on-surface">{language.label}</span>
								<span className="text-xs uppercase tracking-wider text-on-surface-variant">{language.level}</span>
							</div>
						))}
					</div>
				</article>
			</section>

			<section data-aos="fade-up" className="-mx-6 space-y-12 rounded-2xl border border-outline-variant/10 bg-surface-container-low/30 px-6 py-20 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24">
				<h2 className="font-headline text-4xl">Milestones</h2>
				<div className="flex flex-col gap-12 md:flex-row">
					{milestones.map((item, index) => (
						<article
							key={item.year}
							data-aos="fade-up"
							data-aos-delay={index * 100}
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
				data-aos="fade-up"
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
					<a href="https://wa.me/2349121235927" target="_blank">
						<button className="scale-100 rounded-full bg-primary px-12 py-5 text-sm font-black uppercase tracking-widest text-on-primary shadow-xl shadow-primary/20 transition-all active:scale-95 hover:opacity-80">
							Hire Me Now
						</button>
					</a>
					<Link to="/contact">
						<button className="inline-flex items-center gap-3 text-sm uppercase px-12 py-5 rounded-full tracking-[0.2em] text-primary transition-transform hover:translate-x-2 hover:bg-white/10">
							Send Enquiry <Icon icon="material-symbols:arrow-right-alt-rounded" />
						</button>
					</Link>
				</div>
			</section>
		</main>
	)
}
