import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

export default function RutexAI(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [stats, setStats] = useState<{ stars: number; issues: number } | null>(null)

   useEffect(() => {
      fetch('https://api.github.com/repos/hallofcodes/acode-ai-agent-plugin')
         .then(r => r.json())
         .then(d => setStats({ stars: d.stargazers_count, issues: d.open_issues_count }))
         .catch(() => {})
   }, [])

   const capabilities = [
      {
         icon: 'material-symbols:folder-open-outline-rounded',
         title: 'File System Mastery',
         detail: 'Reads, creates, edits, renames, and deletes files and directories directly — no manual steps.',
      },
      {
         icon: 'material-symbols:loop-rounded',
         title: 'Agentic Loop',
         detail: 'Executes tasks in a chain — Read → Analyze → Edit → Verify — without requiring constant prompts.',
      },
      {
         icon: 'material-symbols:terminal-rounded',
         title: 'Terminal Integration',
         detail: 'Bridges the editor and the shell for seamless build and deployment workflows.',
      },
      {
         icon: 'material-symbols:psychology-outline-rounded',
         title: 'Context-Aware',
         detail: 'Maintains deep project context to handle complex refactoring and multi-file updates.',
      },
      {
         icon: 'material-symbols:difference-outline-rounded',
         title: 'Intelligent Diff Engine',
         detail: 'Uses a precise line-based edit system with real-time line shift calculation — surgical updates, no accidental data loss.',
      },
      {
         icon: 'material-symbols:security-rounded',
         title: 'Secure Tool Protocol',
         detail: 'Every file modification goes through a secure tool-calling protocol, keeping changes precise and traceable.',
      },
   ]

   const providers = [
      { name: 'Gemini', detail: 'High-performance multimodal capabilities.' },
      { name: 'OpenRouter', detail: 'Access to a vast array of top-tier LLMs.' },
      { name: 'OpenAI', detail: 'Industry-leading models including GPT-4 and GPT-4o.' },
      { name: 'Ollama', detail: 'Local LLM execution. Use a CORS-proxy URL pointing to your Ollama instance.' },
   ]

   return (
      <main className="mx-auto max-w-[1920px] space-y-20 px-6 pb-24 pt-32 md:px-12">

         {/* Hero */}
         <section className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Open Source Tool
            </div>
            <h1 className="font-headline text-5xl font-bold leading-tight text-on-surface md:text-6xl">
               Rutex AI
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               An autonomous AI agent plugin for Acode that enables LLMs to directly read, create, and refactor files — while executing terminal commands through a secure agentic loop. Desktop-class AI automation, on Android.
            </p>

            <div className="flex flex-wrap gap-3">
               {stats && (
                  <>
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                        <Icon icon="material-symbols:star-outline-rounded" className="text-secondary" />
                        {stats.stars} stars
                     </span>
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                        <Icon icon="material-symbols:bug-report-outline-rounded" className="text-tertiary" />
                        {stats.issues} open issues
                     </span>
                  </>
               )}
               <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                  <Icon icon="mdi:android" className="text-primary" />
                  Android / Acode
               </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
               <a
                  href="https://github.com/hallofcodes/acode-ai-agent-plugin"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="mdi:github" />
                  GitHub
               </a>
               <a
                  href="https://www.buymeacoffee.com/dconco"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="simple-icons:buymeacoffee" className="text-secondary" />
                  Support
               </a>
            </div>
         </section>

         {/* What it does */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">What it does</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               Rutex transforms Acode from a mobile text editor into a fully agentic IDE. You give it a task — it figures out what files to read, what to change, and how to verify the result. You stay in control; it handles the execution.
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               Built with TypeScript and Webpack, it uses a secure tool-calling protocol to interact with the Acode API. Every action is intentional, traceable, and reversible.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-3">
               {capabilities.map((c) => (
                  <div key={c.title} className="space-y-3 rounded-xl border border-outline-variant/20 bg-surface-container p-6">
                     <Icon icon={c.icon} className="text-2xl text-primary" />
                     <h3 className="font-headline text-base font-bold text-on-surface">{c.title}</h3>
                     <p className="text-sm leading-relaxed text-on-surface-variant">{c.detail}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* Providers */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Supported Providers</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               Rutex works with the providers you already use. More are being added.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
               {providers.map((p) => (
                  <div key={p.name} className="flex items-start gap-4 rounded-xl border border-outline-variant/20 bg-surface-container px-6 py-5">
                     <Icon icon="material-symbols:check-circle-outline-rounded" className="mt-0.5 shrink-0 text-xl text-primary" />
                     <div>
                        <p className="font-bold text-on-surface">{p.name}</p>
                        <p className="text-sm text-on-surface-variant">{p.detail}</p>
                     </div>
                  </div>
               ))}
            </div>
         </section>

         {/* Screenshots */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Screenshots</h2>
            <div className="flex flex-wrap gap-4">
               {[1, 2].map((n) => (
                  <div key={n} className="w-36 overflow-hidden rounded-xl border border-outline-variant/20">
                     <img
                        src={`https://raw.githubusercontent.com/hallofcodes/acode-ai-agent-plugin/main/screenshots/${n}.png`}
                        alt={`Rutex interface screenshot ${n}`}
                        className="w-full object-cover"
                     />
                  </div>
               ))}
            </div>
         </section>

         {/* CTA */}
         <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-12 text-center space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">I built this with the Hall Of Codes team</h2>
            <p className="text-on-surface-variant">It's open source. If something's broken, open an issue. If you want to improve it, send a PR.</p>
            <div className="flex flex-wrap justify-center gap-4">
               <a
                  href="https://acode.app/plugin/hallofcodes.rutex.coding_agent"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="mdi:android" />
                  Install on Acode
               </a>
            </div>
         </section>

      </main>
   )
}
