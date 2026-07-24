import type React from "react"

import { BadgePill } from '../components/ui/BadgePill'
import { ProjectBentoCard } from '../components/ui/ProjectBentoCard'
import { SectionIntro } from '../components/ui/SectionIntro'
import { SkillMeterCard } from '../components/ui/SkillMeterCard'
import { TimelineEntry } from '../components/ui/TimelineEntry'
import { heroHighlights, projectCards, skillCards, timelineItems } from '../data/portfolioData'
import { HoverLift } from "../components/layout/PortfolioShell"
import { Icon } from "@iconify/react"
import type { LinkType } from "../components/Header"
import { portfolioImages } from "../assets/images"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Overview({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   useEffect(() => setActive('overview'), [setActive])

   useEffect(() => {
      const hash = window.location.hash
      if (hash) {
         const el = document.querySelector(hash)
         if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
      }
   }, [])

   return (
      <main className="mx-auto max-w-7xl space-y-32 px-6 pb-16 pt-32 lg:px-12">
         <section data-aos="fade-up" className="min-h-full inset-0 grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <img
               src={portfolioImages.headerOverlay}
               alt=""
               aria-hidden="true"
               className="pointer-events-none absolute inset-0 h-full md:h-[90%] w-full object-cover opacity-8"
            />

            <div className="space-y-8 lg:col-span-8">
               <h1 className="font-headline leading-[0.95] tracking-tight mt-3">
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-on-surface">Dave</span>
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-bold text-on-surface">Conco</span>
                  <span className="block text-6xl md:text-7xl lg:text-8xl font-bold font-serif italic text-primary">dconco.</span>
               </h1>

               <p className="font-body max-w-2xl text-xl max-md:text-base text-on-surface-variant mt-10">
                  I partner with teams to build practical, scalable software that improves delivery speed,
                  reduces operational costs, and keeps systems stable in production.
               </p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-4">
               {heroHighlights.map((item, index) => (
                  <HoverLift key={item.title}>
                     <article data-aos="fade-left" data-aos-delay={index * 120} className={`space-y-4 rounded-xl p-8 ${item.className}`}>
                        <Icon icon={item.iconName} className={item.iconClass} />
                        <h3 className="font-headline text-2xl">{item.title}</h3>
                        <p className="font-body text-sm text-on-surface-variant">{item.detail}</p>
                        {item.detail2 && <p className="font-body text-sm text-on-surface-variant/70 italic">{item.detail2}</p>}
                     </article>
                  </HoverLift>
               ))}
            </div>
         </section>

         <section id="work" data-aos="fade-up" className="space-y-12 mt-20">
            <div className="flex items-end justify-between gap-4">
               <SectionIntro
                  title="Featured Gallery"
                  subtitle="Selected frontend and backend initiatives showing architecture, usability, and real-world delivery."
                  italic
               />
               <button className="group hidden items-center gap-2 font-medium font-body text-primary transition-colors hover:text-primary-fixed-dim md:flex">
                  View all Archive
                  <Icon icon="material-symbols:arrow-forward-rounded" className="transition-transform group-hover:translate-x-1" />
               </button>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
               <ProjectBentoCard
                  imageSrc={projectCards.primary.image}
                  imageAlt="Abstract colorful minimalist 3D rendering"
                  cardClassName="bg-surface-container-low md:col-span-8"
                  heightClass="h-[500px]"
                  overlayClassName="bg-gradient-to-t from-background via-background/20 to-transparent"
                  aos="zoom-in"
               >
                  <BadgePill className="bg-primary-container text-on-primary-container">
                     <Icon icon="material-symbols:sensors-rounded" className="text-xs" />
                     LIVE NOW
                  </BadgePill>
                  <h3 className="font-headline text-4xl font-bold">{projectCards.primary.title}</h3>
                  <p className="font-body max-w-md text-on-surface-variant">{projectCards.primary.detail}</p>
               </ProjectBentoCard>

               <ProjectBentoCard
                  imageSrc={projectCards.secondary.image}
                  imageAlt="High tech minimal server room aesthetics"
                  cardClassName="bg-surface-container md:col-span-4"
                  heightClass="h-[500px]"
                  aos="zoom-in"
                  aosDelay={100}
               >
                  <BadgePill className="bg-surface-container-highest text-on-surface">WEB DESIGN</BadgePill>
                  <h3 className="font-headline text-3xl font-bold">{projectCards.secondary.title}</h3>
               </ProjectBentoCard>

               <ProjectBentoCard
                  imageSrc={projectCards.tertiary.image}
                  imageAlt="Minimalist architectural shapes shadow play"
                  cardClassName="bg-surface-container-high md:col-span-4"
                  heightClass="h-[400px]"
                  contentClassName="absolute bottom-0 left-0 space-y-2 p-8"
                  overlayClassName="bg-gradient-to-t from-background/80 via-transparent to-transparent"
                  aos="zoom-in"
                  aosDelay={120}
               >
                  <h3 className="font-headline text-2xl font-bold">{projectCards.tertiary.title}</h3>
                  <p className="font-body text-sm text-on-surface-variant">{projectCards.tertiary.detail}</p>
               </ProjectBentoCard>

               <ProjectBentoCard
                  imageSrc={projectCards.quaternary.image}
                  imageAlt="Modern desktop workstation with sleek computer"
                  cardClassName="bg-surface-container-lowest md:col-span-8"
                  heightClass="h-[400px]"
                  contentClassName="relative flex h-full max-w-lg flex-col justify-center space-y-6 p-12"
                  overlayClassName="bg-gradient-to-r from-background to-transparent"
                  aos="zoom-in"
                  aosDelay={180}
               >
                  <BadgePill className="self-start bg-secondary-container text-on-secondary-container">
                     FEATURED CASE STUDY
                  </BadgePill>
                  <h3 className="font-headline text-4xl font-bold">PhpSPA Framework</h3>
                  <p className="font-body text-on-surface-variant">
                     A component-based PHP library inspired by React, with reactive state,
                     client-side routing, and performance-first rendering using Virtual DOM diffing.
                  </p>
                  <a href="https://phpspa.tech" target="_blank" rel="noreferrer">
                     <button className="w-fit rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur-md transition-all hover:bg-white/20">
                        EXPLORE SYSTEM
                     </button>
                  </a>
               </ProjectBentoCard>
            </div>
         </section>

         <section id="expertise" data-aos="fade-up" className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-4">
               <SectionIntro
                  title="Experience"
                  subtitle="A practical engineering journey shaped by real product constraints and long-term thinking."
                  italic
               />

               <div className="relative space-y-8 pl-8 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-outline-soft">
                  {timelineItems.map((item) => (
                     <TimelineEntry key={item.period} {...item} />
                  ))}
               </div>
            </div>

            <div className="space-y-12 lg:col-span-8">
               <SectionIntro title="Skills Matrix" subtitle="Frontend craft, backend architecture, and modern delivery tooling." italic />

               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {skillCards.map((card) => (
                     <SkillMeterCard key={card.title} {...card} />
                  ))}

                  <article className="flex flex-col items-center justify-between gap-8 rounded-xl bg-surface-container-low p-8 md:col-span-2 md:flex-row">
                     <div className="space-y-2 text-center md:text-left">
                        <h4 className="font-headline text-2xl font-bold">Engineering Mindset</h4>
                        <p className="font-body max-w-md text-sm text-on-surface-variant">
                           I value clarity over cleverness, build for scale from day one, and treat
                           maintainability as a core product feature.
                        </p>
                     </div>

                     <div className="flex -space-x-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-container-low bg-primary">
                           <Icon icon="material-symbols:palette-outline" className="text-on-primary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-container-low bg-secondary">
                           <Icon icon="material-symbols:code-rounded" className="text-on-secondary" />
                        </div>
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-container-low bg-surface-container-highest">
                           <Icon icon="material-symbols:strategy-outline-rounded" className="text-on-surface" />
                        </div>
                     </div>
                  </article>
               </div>
            </div>
         </section>

         <section
            data-aos="fade-up"
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
         >
            <Link to="/about" className="group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-low p-10 transition-colors hover:border-primary/30 hover:bg-surface-container">
               <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
               <div className="relative space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-secondary">About</span>
                  <h2 className="font-headline text-3xl font-bold text-on-surface md:text-4xl">
                     Who's behind the work
                  </h2>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                     My background, how I think about engineering, the tools I use daily, and what I'm focused on right now.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-primary transition-transform group-hover:translate-x-1">
                     Read about me <Icon icon="material-symbols:arrow-forward-rounded" />
                  </div>
               </div>
            </Link>

            <Link to="/projects" className="group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-low p-10 transition-colors hover:border-secondary/30 hover:bg-surface-container">
               <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />
               <div className="relative space-y-4">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Projects</span>
                  <h2 className="font-headline text-3xl font-bold text-on-surface md:text-4xl">
                     See what I've shipped
                  </h2>
                  <p className="text-base leading-relaxed text-on-surface-variant">
                     Real products, real constraints. A full look at the systems, interfaces, and tools I've built and delivered.
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition-transform group-hover:translate-x-1">
                     View projects <Icon icon="material-symbols:arrow-forward-rounded" />
                  </div>
               </div>
            </Link>
         </section>
      </main>
   )
}