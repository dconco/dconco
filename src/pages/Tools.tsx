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
      <main className="mx-auto max-w-7xl space-y-16 px-6 pb-24 pt-32 md:px-12">

         {/* Header */}
         <section className="space-y-4" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Open Source
            </div>
            <h1 className="font-headline text-5xl font-bold text-on-surface md:text-6xl">Tools I've Built</h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               Libraries, CLI tools, plugins, and frameworks — things I built because I needed them, then made available for everyone.
            </p>
         </section>

         {/* Tools grid */}
         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
               <article
                  key={tool.name}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group flex flex-col justify-between space-y-6 rounded-2xl border border-outline-variant/20 bg-surface-container p-8 transition-colors hover:border-primary/30 hover:bg-surface-container-high"
               >
                  <div className="space-y-4">
                     <div className="flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                           <Icon icon={tool.icon} className="text-2xl text-primary" />
                        </div>
                        <span className={`text-xs font-bold uppercase tracking-widest ${tool.labelColor}`}>{tool.label}</span>
                     </div>
                     <h2 className="font-headline text-2xl font-bold text-on-surface">{tool.name}</h2>
                     <p className="text-sm leading-relaxed text-on-surface-variant">{tool.description}</p>
                     <div className="flex flex-wrap gap-2">
                        {tool.tags.map(tag => (
                           <span key={tag} className="rounded-full bg-surface-container-highest/60 px-3 py-1 text-xs text-on-surface-variant">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2">
                     <Link
                        to={tool.href}
                        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
                     >
                        Learn more
                        <Icon icon="material-symbols:arrow-forward-rounded" />
                     </Link>
                     <a
                        href={tool.external}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs text-on-surface-variant transition-colors hover:text-primary"
                     >
                        {tool.externalLabel} ↗
                     </a>
                  </div>
               </article>
            ))}
         </div>

      </main>
   )
}
