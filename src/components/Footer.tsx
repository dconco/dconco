import type React from "react"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"

const tools = [
   { label: 'PhpSPA', url: '/tools/phpspa' },
   { label: 'RutexAI', url: '/tools/rutexai' },
   { label: 'WarpShare', url: '/tools/warpshare' },
   { label: 'PHP Schema Migrator', url: '/tools/php-schema-migrator' },
   { label: 'Class Validator', url: '/tools/class-validator' },
]

const links = [
   { label: 'Overview', url: '/' },
   { label: 'About', url: '/about' },
   { label: 'Projects', url: '/projects' },
   { label: 'Store', url: '/store' },
   { label: 'Contact', url: '/contact' },
   { label: 'Work Experience', url: '/#expertise' },
   { label: 'Uptime', url: '/uptime' },
]

const legal = [
   { label: 'Privacy Policy', url: '/privacy-policy' },
   { label: 'Terms of Service', url: '/terms-of-service' },
   { label: 'Refund Policy', url: '/refund-policy' },
   { label: 'Developer Client Agreement', url: '/developer-client-agreement' },
]

const articles = [
   {
      label: 'How Senior Developers Write PHP in 2026',
      url: 'https://www.hallofcodes.org/blog/how-senior-developers-write-php-in-2026',
   },
]

const Col = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div className="space-y-4">
      <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary">{title}</h4>
      <ul className="space-y-2.5">{children}</ul>
   </div>
)

export const Footer = (): React.ReactElement => {
   return (
      <footer className="mt-20 w-full rounded-t-3xl bg-surface-container-lowest">
         <div className="mx-auto max-w-7xl px-6 py-16 md:px-12">
            <div className="grid grid-cols-2 gap-10 md:grid-cols-5">
               {/* Brand */}
               <div className="col-span-2 space-y-4 md:col-span-1">
                  <div className="font-headline text-xl font-bold">
                     <span className="text-primary">dave</span><span className="text-on-surface">conco</span>
                  </div>
                  <p className="text-sm leading-relaxed text-on-surface-variant">
                     Building practical, scalable software that keeps systems stable in production.
                  </p>
               </div>

               <Col title="Tools">
                  {tools.map((t) => (
                     <li key={t.label}>
                        <Link to={t.url} className="text-sm text-on-surface-variant transition-colors hover:text-primary">
                           {t.label}
                        </Link>
                     </li>
                  ))}
               </Col>

               <Col title="Links">
                  {links.map((l) => (
                     <li key={l.label}>
                        {l.url.includes('#') ? (
                           <a href={l.url} className="text-sm text-on-surface-variant transition-colors hover:text-primary">
                              {l.label}
                           </a>
                        ) : (
                           <Link to={l.url} className="text-sm text-on-surface-variant transition-colors hover:text-primary active:text-primary">
                              {l.label}
                           </Link>
                        )}
                     </li>
                  ))}
               </Col>

               <Col title="Legal">
                  {legal.map((l) => (
                     <li key={l.label}>
                        <a href={l.url} className="text-sm text-on-surface-variant transition-colors hover:text-primary active:text-primary">
                           {l.label}
                        </a>
                     </li>
                  ))}
               </Col>

               <Col title="Recent Articles">
                  {articles.map((a) => (
                     <li key={a.label}>
                        <a
                           href={a.url}
                           target="_blank"
                           rel="noreferrer"
                           className="text-sm leading-snug text-on-surface-variant transition-colors hover:text-primary active:text-primary"
                        >
                           {a.label}
                        </a>
                     </li>
                  ))}
               </Col>
            </div>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-outline-variant/20 pt-8 text-xs text-on-surface-variant/60 md:flex-row md:gap-8">
               <span>© {new Date().getFullYear()} Dave Conco. All rights reserved.</span>
               <div className="flex gap-5">
                  {[
                     { icon: 'mdi:github', url: 'https://github.com/dconco' },
                     { icon: 'ri:twitter-x-fill', url: 'https://x.com/dave_conco' },
                     { icon: 'mdi:youtube', url: 'https://youtube.com/@daveconco' },
                     { icon: 'mdi:file-account-outline', url: 'https://drive.google.com/file/d/1B1D5Gjn-4czF67vRQmMX73aJvUqfd8WK/view?usp=drivesdk' },
                  ].map((s) => (
                     <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" className="text-on-surface-variant/60 transition-colors hover:text-primary active:text-primary">
                        <Icon icon={s.icon} className="text-2xl" />
                     </a>
                  ))}
               </div>
            </div>
         </div>
      </footer>
   )
}
