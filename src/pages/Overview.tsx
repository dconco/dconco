import type React from "react";

import { BadgePill } from '../components/ui/BadgePill';
import { ProjectBentoCard } from '../components/ui/ProjectBentoCard';
import { SectionIntro } from '../components/ui/SectionIntro';
import { SkillMeterCard } from '../components/ui/SkillMeterCard';
import { TimelineEntry } from '../components/ui/TimelineEntry';
import { heroHighlights, projectCards, skillCards, timelineItems } from '../data/portfolioData';
import { HoverLift } from "../components/layout/PortfolioShell";
import { Icon } from "@iconify/react";

export default function Overview(): React.JSX.Element {
   return (
      <main className="mx-auto max-w-7xl space-y-32 px-6 pb-16 pt-32 lg:px-12">
         <section className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
            <div className="space-y-8 lg:col-span-8">
               <div className="inline-flex items-center gap-2 rounded-full border border-outline-soft bg-surface-container-highest px-4 py-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
                  <span className="text-xs font-nav-link font-bold tracking-normal text-on-surface-variant">
                     AVAILABLE FOR NEW PROJECTS
                  </span>
               </div>

               <h1 className="font-headline text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
                  Curating <span className="font-serif text-primary italic">Digital</span> Narrative through{' '}
                  <span className="font-serif text-secondary italic">Intentional</span> Design.
               </h1>

               <p className="font-body max-w-2xl text-xl text-on-surface-variant">
                  A multidisciplinary designer and developer crafting editorial-grade digital experiences. I
                  transform complex ideas into visually stunning, high-performance interfaces.
               </p>
            </div>

            <div className="flex flex-col gap-6 lg:col-span-4">
               {heroHighlights.map((item) => (
                  <HoverLift key={item.title}>
                     <article className={`space-y-4 rounded-xl p-8 ${item.className}`}>
                        <Icon icon={item.iconName} className={item.iconClass} />
                        <h3 className="font-headline text-2xl">{item.title}</h3>
                        <p className="font-body text-sm text-on-surface-variant">{item.detail}</p>
                     </article>
                  </HoverLift>
               ))}
            </div>
         </section>

         <section id="work" className="space-y-12">
            <div className="flex items-end justify-between gap-4">
               <SectionIntro
                  title="Featured Gallery"
                  subtitle="Selected 'Live' projects that define our creative philosophy."
                  italic
               />
               <button className="group hidden items-center gap-2 font-bold text-primary transition-colors hover:text-primary-fixed-dim md:flex">
                  VIEW ALL ARCHIVE
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
               >
                  <BadgePill className="self-start bg-secondary-container text-on-secondary-container">
                     FEATURED CASE STUDY
                  </BadgePill>
                  <h3 className="font-headline text-4xl font-bold">{projectCards.quaternary.title}</h3>
                  <p className="font-body text-on-surface-variant">{projectCards.quaternary.detail}</p>
                  <button className="w-fit rounded-full border border-white/10 bg-white/10 px-6 py-3 text-sm font-bold backdrop-blur-md transition-all hover:bg-white/20">
                     EXPLORE SYSTEM
                  </button>
               </ProjectBentoCard>
            </div>
         </section>

         <section id="expertise" className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="space-y-12 lg:col-span-4">
               <SectionIntro
                  title="Experience"
                  subtitle="A decade of refining digital craftsmanship across world-class teams."
                  italic
               />

               <div className="relative space-y-8 pl-8 before:absolute before:bottom-2 before:left-0 before:top-2 before:w-px before:bg-outline-soft">
                  {timelineItems.map((item) => (
                     <TimelineEntry key={item.period} {...item} />
                  ))}
               </div>
            </div>

            <div className="space-y-12 lg:col-span-8">
               <SectionIntro title="Skills Matrix" subtitle="The intersection of art and engineering." italic />

               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  {skillCards.map((card) => (
                     <SkillMeterCard key={card.title} {...card} />
                  ))}

                  <article className="flex flex-col items-center justify-between gap-8 rounded-xl bg-surface-container-low p-8 md:col-span-2 md:flex-row">
                     <div className="space-y-2 text-center md:text-left">
                        <h4 className="font-headline text-2xl font-bold">Philosophy of Asymmetry</h4>
                        <p className="font-body max-w-md text-sm text-on-surface-variant">
                           I believe digital products should feel alive, shifting, breathing, and responding
                           with human-like nuance rather than rigid grid systems.
                        </p>
                     </div>

                     <div className="flex -space-x-4">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border-4 border-surface-container-low bg-primary">
                           <Icon icon="material-symbols:palette-outline-rounded" className="text-on-primary" />
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
            id="contact"
            className="relative overflow-hidden rounded-3xl bg-surface-container-low px-6 py-20 text-center md:px-12 md:py-24"
         >
            <div className="pointer-events-none absolute inset-0 bg-contact-radial" />

            <div className="relative z-10 space-y-6">
               <span className="text-sm font-bold tracking-widest text-primary">CONTACT</span>
               <h2 className="font-headline mx-auto max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
                  Ready to Curate Your <span className="italic font-serif text-secondary">Next Story</span>?
               </h2>
               <p className="font-body mx-auto max-w-2xl text-xl text-on-surface-variant">
                  Currently accepting select project inquiries for late 2024 and 2025.
               </p>
            </div>

            <div className="relative z-10 mt-10 flex flex-wrap justify-center gap-6">
               <button className="rounded-full bg-primary-container px-10 py-5 text-lg font-bold text-on-primary-container shadow-lg transition-all duration-300 hover:scale-105">
                  Start a Project
               </button>
               <button className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                  Get in Touch
               </button>
            </div>
         </section>
      </main>
   )
}