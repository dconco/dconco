import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const CodeBlock = ({ code }: { code: string }) => (
   <pre className="overflow-x-auto rounded-lg bg-surface-container-lowest px-5 py-4 text-sm text-primary font-label leading-relaxed">
      <code>{code.trim()}</code>
   </pre>
)

export default function WarpShare(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [stats, setStats] = useState<{ stars: number; issues: number } | null>(null)

   useEffect(() => {
      fetch('https://api.github.com/repos/hallofcodes/WarpShare')
         .then(r => r.json())
         .then(d => setStats({ stars: d.stargazers_count, issues: d.open_issues_count }))
         .catch(() => {})
   }, [])

   return (
      <main className="mx-auto max-w-[1920px] space-y-20 px-6 pb-24 pt-32 md:px-12">

         {/* Hero */}
         <section className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Open Source Tool
            </div>
            <h1 className="font-headline text-5xl font-bold leading-tight text-on-surface md:text-6xl">
               WarpShare
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               Share files directly from your device. No repository setup, no collaborator invites, no publishing step — just a link.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
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
            </div>
            <div className="flex flex-wrap gap-4 pt-2">
               <a
                  href="https://github.com/hallofcodes/WarpShare/releases/latest"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Download
               </a>
               <a
                  href="https://github.com/hallofcodes/WarpShare"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="mdi:github" />
                  GitHub
               </a>
            </div>
         </section>

         {/* What it does */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">What it does</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               WarpShare lets you serve files from your own machine and hand someone a link to browse, download, and work with them immediately. It's not a cloud sync tool. It's not a fork workflow. It's direct — your device, their browser, no middleman.
            </p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               The person on the other end doesn't need an account, a client, or any setup. They open the link and they're in.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 lg:grid-cols-3">
               {[
                  { icon: 'material-symbols:folder-open-outline-rounded', label: 'Browse folders' },
                  { icon: 'material-symbols:download-rounded', label: 'Download files' },
                  { icon: 'material-symbols:create-new-folder-outline-rounded', label: 'Create folders' },
                  { icon: 'material-symbols:note-add-outline-rounded', label: 'Create files' },
                  { icon: 'material-symbols:drive-file-rename-outline-rounded', label: 'Rename items' },
                  { icon: 'material-symbols:delete-outline-rounded', label: 'Delete items' },
               ].map((f) => (
                  <div key={f.label} className="flex items-center gap-3 rounded-xl border border-outline-variant/20 bg-surface-container px-5 py-4">
                     <Icon icon={f.icon} className="text-xl text-primary" />
                     <span className="text-sm font-medium text-on-surface">{f.label}</span>
                  </div>
               ))}
            </div>
         </section>

         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
         {/* Install */}
         <section className="space-y-8">
            <h2 className="font-headline text-3xl text-on-surface">Install</h2>

            <div className="space-y-6">
               <div className="space-y-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Quick install</h3>
               <CodeBlock code={`curl -fsSL https://raw.githubusercontent.com/hallofcodes/WarpShare/master/install.sh | bash`} />
               <p className="text-sm text-on-surface-variant">No curl? Use wget:</p>
               <CodeBlock code={`wget -qO- https://raw.githubusercontent.com/hallofcodes/WarpShare/master/install.sh | bash`} />
            </div>

            <div className="space-y-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Linux x64 — manual</h3>
               <CodeBlock code={`curl -L https://github.com/hallofcodes/WarpShare/releases/latest/download/warpshare-linux-amd64 -o warpshare
chmod +x warpshare
sudo mv warpshare /usr/local/bin/warpshare
warpshare`} />
            </div>

            <div className="space-y-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Linux ARM64 musl</h3>
               <CodeBlock code={`curl -L https://github.com/hallofcodes/WarpShare/releases/latest/download/warpshare-linux-musl-aarch64 -o warpshare
chmod +x warpshare
sudo mv warpshare /usr/local/bin/warpshare
warpshare`} />
            </div>

            <div className="space-y-3">
               <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Windows</h3>
               <CodeBlock code={`Invoke-WebRequest -Uri https://github.com/hallofcodes/WarpShare/releases/latest/download/warpshare-windows-amd64.exe -OutFile warpshare.exe
Start-Process .\\warpshare.exe`} />
               <p className="text-sm text-on-surface-variant">To use it as a global command:</p>
               <CodeBlock code={`New-Item -ItemType Directory -Force -Path "$env:USERPROFILE\\bin" | Out-Null
Move-Item .\\warpshare.exe "$env:USERPROFILE\\bin\\warpshare.exe" -Force
[Environment]::SetEnvironmentVariable("Path", $env:Path + ";$env:USERPROFILE\\bin", "User")`} />
            </div>
            </div>
         </section>

         {/* Usage */}
         <section className="space-y-8">
            <h2 className="font-headline text-3xl text-on-surface">Usage</h2>

            <div className="space-y-6">
               {[
                  { label: 'Share the current folder on your local network', code: 'warpshare local' },
                  { label: 'Share a specific folder', code: 'warpshare local /path/to/folder' },
                  { label: 'Use a custom port', code: 'warpshare local /path/to/folder --port 8080' },
                  { label: 'Share over the internet', code: 'warpshare remote' },
                  { label: 'Remote share with a specific folder', code: 'warpshare remote /path/to/folder' },
               ].map((item) => (
                  <div key={item.label} className="space-y-2">
                     <p className="text-sm text-on-surface-variant">{item.label}</p>
                     <CodeBlock code={item.code} />
                  </div>
               ))}
            </div>

            <p className="text-base leading-relaxed text-on-surface-variant">
               Once it starts, WarpShare gives you a link. Copy it, send it — the other person opens it in their browser and they're working with your files immediately.
            </p>
         </section>
         </div>

         {/* Why */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Why it exists</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               Most file sharing workflows have too many steps. You publish, you set up a repo, you add collaborators, you wait. WarpShare cuts all of that. The files stay on your machine. The other person gets direct access. That's it.
            </p>
            <ul className="space-y-3 text-base text-on-surface-variant">
               {[
                  'Direct access to files on a real device',
                  'No repository setup or fork workflow',
                  'No collaborator permissions to manage',
                  'Fast sharing and immediate review',
                  'Files stay on the owner\'s machine',
               ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                     <Icon icon="material-symbols:check-circle-outline-rounded" className="mt-0.5 shrink-0 text-lg text-primary" />
                     {item}
                  </li>
               ))}
            </ul>
         </section>

         {/* CTA */}
         <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-12 text-center space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Built with contributions from the community</h2>
            <p className="text-on-surface-variant">WarpShare is open source. Issues, PRs, and feedback are welcome.</p>
            <a
               href="https://github.com/hallofcodes/WarpShare"
               target="_blank"
               rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
            >
               <Icon icon="mdi:github" />
               View on GitHub
            </a>
         </section>

      </main>
   )
}
