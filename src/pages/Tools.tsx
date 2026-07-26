import type React from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import type { LinkType } from '../components/Header'

const tools = [
   {
      name: 'PhpSPA',
      label: 'Signature Project',
      labelColor: 'text-secondary',
      description: 'A component-based PHP library for building modern, dynamic web applications with reactive state and SPA-like navigation. No JavaScript framework required.',
      tags: ['PHP', 'TypeScript', 'C++', 'JavaScript', 'HTML'],
      icon: 'devicon-plain:php',
      href: '/tools/phpspa',
      external: 'https://phpspa.tech',
      externalLabel: 'phpspa.tech',
   },
   {
      name: 'RutexAI',
      label: 'Acode Plugin',
      labelColor: 'text-primary',
      description: 'An autonomous AI agent plugin for Acode that enables LLMs to read, create, and refactor files while executing terminal commands through a secure agentic loop.',
      tags: ['TypeScript', 'Android', 'AI/LLM'],
      icon: 'mdi:android',
      href: '/tools/rutexai',
      external: 'https://acode.app/plugin/hallofcodes.rutex.coding_agent',
      externalLabel: 'Install on Acode',
   },
   {
      name: 'WarpShare',
      label: 'CLI Tool',
      labelColor: 'text-primary',
      description: 'Share files directly from your device. No repository setup, no collaborator invites — just a link. The other person opens it in their browser and they\'re in.',
      tags: ['Python', 'Linux', 'Windows'],
      icon: 'material-symbols:share-outline-rounded',
      href: '/tools/warpshare',
      external: 'https://github.com/hallofcodes/WarpShare',
      externalLabel: 'GitHub',
   },
   {
      name: 'Class Validator',
      label: 'PHP Library',
      labelColor: 'text-primary',
      description: 'Attribute-based request validation for PHP. Annotate your DTO, pass the payload, get back a result. Works with PhpSPA, Laravel, Symfony, or raw PHP.',
      tags: ['PHP', 'Composer', 'Packagist'],
      icon: 'material-symbols:verified-outline-rounded',
      href: '/tools/class-validator',
      external: 'https://packagist.org/packages/phpspa/validator',
      externalLabel: 'Packagist',
   },
   {
      name: 'PHP Schema Migrator',
      label: 'CLI Tool',
      labelColor: 'text-primary',
      description: 'Laravel-style database migrations for any PHP project. Install globally via Composer, run it anywhere. MySQL, PostgreSQL, SQLite, and SQL Server supported.',
      tags: ['PHP', 'MySQL', 'PostgreSQL', 'SQLite'],
      icon: 'material-symbols:storage-rounded',
      href: '/tools/php-schema-migrator',
      external: 'https://packagist.org/packages/dconco/schema-migrator',
      externalLabel: 'Packagist',
   },
]

export default function Tools({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   useEffect(() => { setActive('tools' as LinkType); window.scrollTo(0, 0) }, [setActive])

   return (
      <main className="mx-auto max-w-[1920px] px-5 pb-24 pt-28 sm:px-8 md:pt-32 lg:px-12">

         <section data-aos="fade-up" className="relative overflow-hidden rounded-[2rem] border border-outline-variant/15 bg-surface-container-lowest px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="pointer-events-none absolute -right-24 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
               <div className="max-w-3xl space-y-6">
                  <div className="inline-flex items-center gap-3 font-nav-link text-[10px] font-bold uppercase tracking-[0.28em] text-secondary">
                     <span className="h-px w-8 bg-secondary" />
                     Open source / 2026
                  </div>
                  <h1 className="font-headline text-5xl font-bold leading-[0.95] tracking-tight text-on-surface sm:text-6xl lg:text-8xl">
                     Tools that <span className="font-serif font-normal italic text-primary">carry</span> the work.
                  </h1>
                  <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
                     Libraries, CLI tools, plugins, and frameworks built from real constraints — made available so your next build can move faster.
                  </p>
               </div>
               <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-outline-variant/20 bg-outline-variant/20 sm:w-fit">
                  <div className="bg-surface-container px-5 py-4 sm:px-7"><span className="block font-headline text-3xl text-primary">05</span><span className="mt-1 block font-nav-link text-[9px] uppercase tracking-[0.18em] text-on-surface-variant">Active tools</span></div>
                  <div className="bg-surface-container px-5 py-4 sm:px-7"><span className="block font-headline text-3xl text-secondary">04</span><span className="mt-1 block font-nav-link text-[9px] uppercase tracking-[0.18em] text-on-surface-variant">Tool types</span></div>
               </div>
            </div>
         </section>

         <section className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
            {tools.map((tool, index) => {
               const featured = index === 0
               // PhpSPA: full-width hero (col-span-6 on lg)
               // RutexAI + WarpShare: col-span-3 each (row 2)
               // ClassValidator + SchemaMigrator: col-span-3 each (row 3)
               const colSpan = featured ? 'lg:col-span-6' : 'lg:col-span-3'
               return (
               <article
                  key={tool.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className={`group relative flex h-full min-h-[350px] flex-col justify-between overflow-hidden rounded-2xl border p-6 transition-all duration-500 sm:p-8 lg:min-h-[370px] ${colSpan} ${featured ? 'border-primary/25 bg-gradient-to-br from-primary/15 via-surface-container to-surface-container-low lg:min-h-[300px]' : 'border-outline-variant/15 bg-surface-container-low hover:border-primary/30 hover:bg-surface-container'}`}
               >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/10 blur-3xl" />
                  <div className="relative space-y-6">
                     <div className="flex items-start justify-between gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${featured ? 'border-primary/30 bg-primary/15' : 'border-outline-variant/20 bg-surface-container-highest/50'}`}>
                           <Icon icon={tool.icon} className={`text-2xl ${featured ? 'text-primary' : 'text-on-surface-variant transition-colors group-hover:text-primary'}`} />
                        </div>
                        <span className={`font-nav-link text-[9px] font-bold uppercase tracking-[0.2em] ${tool.labelColor}`}>{tool.label}</span>
                     </div>
                     <div className="space-y-3">
                        <div className="flex items-center gap-3"><span className="font-nav-link text-[10px] text-on-surface-variant/40">0{index + 1}</span><h2 className={`font-headline font-bold text-on-surface ${featured ? 'text-3xl sm:text-4xl' : 'text-2xl sm:text-3xl'}`}>{tool.name}</h2></div>
                        <p className="max-w-xl text-sm leading-relaxed text-on-surface-variant">{tool.description}</p>
                     </div>
                     <div className="flex flex-wrap gap-2">
                        {tool.tags.map(tag => (
                           <span key={tag} className="rounded-full border border-outline-variant/15 bg-surface-container-highest/50 px-3 py-1 font-nav-link text-[9px] uppercase tracking-wider text-on-surface-variant">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="relative mt-8 flex flex-wrap items-center gap-4 border-t border-outline-variant/15 pt-5">
                     <Link
                        to={tool.href}
                        className="group/link inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 font-nav-link text-[10px] font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary-fixed active:scale-95"
                     >
                        Explore tool
                        <Icon icon="material-symbols:arrow-forward-rounded" className="transition-transform group-hover/link:translate-x-1" />
                     </Link>
                     <a
                        href={tool.external}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex max-w-full items-center gap-1 truncate text-xs text-on-surface-variant transition-colors hover:text-primary"
                     >
                        {tool.externalLabel} <span aria-hidden="true">↗</span>
                     </a>
                  </div>
               </article>
               )
            })}
         </section>

      </main>
   )
}
