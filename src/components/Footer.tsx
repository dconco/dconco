import type React from "react"

export const Footer = (): React.ReactElement => {
   const socialLinks = [
      { label: 'GitHub', url: 'https://github.com/dconco' },
      { label: 'Twitter (X)', url: 'https://x.com/dave_conco' },
      { label: 'Read.cv', url: 'https://drive.google.com/file/d/1kgE3gD727vE5v8HQ0EMiY8NriG2Y6qBB/view?usp=sharing' },
      { label: 'Start a Project', url: 'https://wa.me/2349121235927' },
   ]

   return (
      <footer className="mt-20 w-full rounded-t-3xl bg-slate-900">
         <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-8 px-12 py-16 text-center md:flex-row md:text-left">
            <div className="space-y-4">
               <div className="font-headline text-xl font-bold"> Dave Conco</div>
               <p className="text-sm tracking-wide text-slate-400">
                  © {new Date().getFullYear()} Digital Curator Portfolio. Built with Intentional Asymmetry.
               </p>
            </div>

            <div className="flex gap-8 font-roobert">
               {socialLinks.map((label, index) => (
                  <a
                     key={label.label}
                     target={'_blank'}
                     href={label.url}
                     className={
                        index === socialLinks.length - 1
                           ? 'text-sm font-bold font-headline tracking-wide text-emerald-400 transition-all hover:text-emerald-300'
                           : 'text-sm tracking-wide text-slate-400 transition-all hover:text-emerald-300'
                     }
                  >
                     {label.label}
                  </a>
               ))}
            </div>
         </div>
      </footer>
   )
}