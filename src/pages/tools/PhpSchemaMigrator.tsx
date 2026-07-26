import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const CodeBlock = ({ code, lang = 'php' }: { code: string; lang?: string }) => (
   <pre className={`language-${lang} overflow-x-auto rounded-lg bg-surface-container-lowest px-5 py-4 text-sm text-primary font-label leading-relaxed`}>
      <code>{code.trim()}</code>
   </pre>
)

const commands = [
   { cmd: 'schema-migrator init', desc: 'Creates the config file and migrations directory in the current project. Prompts for database connection details.' },
   { cmd: 'schema-migrator make:migration CreateUsersTable', desc: 'Creates a new timestamped migration file.' },
   { cmd: 'schema-migrator migrate', desc: 'Executes all pending migrations.' },
   { cmd: 'schema-migrator migrate:status', desc: 'Shows which migrations have run and which are still pending.' },
   { cmd: 'schema-migrator migrate:rollback', desc: 'Rolls back the last batch. Add --steps=3 to roll back multiple batches.' },
]

const features = [
   { icon: 'material-symbols:terminal-rounded', title: 'Beautiful CLI', detail: 'Powered by Symfony Console with colored output and interactive commands.' },
   { icon: 'material-symbols:public-rounded', title: 'Global Install', detail: 'Install once via Composer, use it in any PHP project on your machine.' },
   { icon: 'material-symbols:layers-outline-rounded', title: 'Zero Framework', detail: 'No Laravel, no framework bloat. Just the migration tooling, standalone.' },
   { icon: 'material-symbols:storage-rounded', title: 'Multi-Database', detail: 'MySQL, PostgreSQL, SQLite, and SQL Server — all supported out of the box.' },
   { icon: 'material-symbols:settings-outline-rounded', title: 'Per-Project Config', detail: 'Each project keeps its own schema-migrator.yml and migration state.' },
   { icon: 'material-symbols:check-circle-outline-rounded', title: 'Laravel-Compatible', detail: 'Uses Laravel\'s proven migration syntax — familiar if you\'ve used it before.' },
]

export default function PhpSchemaMigrator(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [stats, setStats] = useState<{ stars: number; downloads: number } | null>(null)

   useEffect(() => {
      fetch('https://packagist.org/packages/dconco/schema-migrator.json')
         .then(r => r.json())
         .then(d => setStats({
            stars: d.package.github_stars,
            downloads: d.package.downloads.total,
         })).catch(() => {})
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
               PHP Schema Migrator
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               Laravel-style database migrations for any PHP project. No framework required — just install globally and run.
            </p>

            <div className="flex flex-wrap gap-3">
               {stats && (
                  <>
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                        <Icon icon="material-symbols:star-outline-rounded" className="text-secondary" />
                        {stats.stars} stars
                     </span>
                     <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                        <Icon icon="material-symbols:download-rounded" className="text-primary" />
                        {stats.downloads.toLocaleString()} installs
                     </span>
                  </>
               )}
               <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                  <Icon icon="devicon-plain:php" className="text-primary" />
                  PHP 8.1+ · Composer
               </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
               <a
                  href="https://packagist.org/packages/dconco/schema-migrator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Packagist
               </a>
               <a
                  href="https://github.com/dconco/php-schema-migrator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="mdi:github" />
                  GitHub
               </a>
            </div>
         </section>

         {/* Features */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">What it does</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               I built this because I kept needing proper migration tooling in plain PHP projects — not just Laravel apps. Schema Migrator gives you the same workflow without pulling in a full framework.
            </p>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
               {features.map(f => (
                  <div key={f.title} className="space-y-3 rounded-xl border border-outline-variant/20 bg-surface-container p-6">
                     <Icon icon={f.icon} className="text-2xl text-primary" />
                     <h3 className="font-headline text-base font-bold text-on-surface">{f.title}</h3>
                     <p className="text-sm leading-relaxed text-on-surface-variant">{f.detail}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* Install + Quick start */}
         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <section className="space-y-6">
               <h2 className="font-headline text-3xl text-on-surface">Install</h2>
               <CodeBlock lang="bash" code="composer global require dconco/schema-migrator" />
               <p className="text-sm text-on-surface-variant">Make sure the global Composer bin is in your PATH:</p>
               <CodeBlock lang="bash" code={`# Add to ~/.bashrc or ~/.zshrc\nexport PATH="$PATH:$HOME/.composer/vendor/bin"`} />

               <h2 className="font-headline text-3xl text-on-surface pt-4">Commands</h2>
               <div className="space-y-4">
                  {commands.map(c => (
                     <div key={c.cmd} className="space-y-1.5">
                        <CodeBlock lang="bash" code={c.cmd} />
                        <p className="text-sm text-on-surface-variant">{c.desc}</p>
                     </div>
                  ))}
               </div>
            </section>

            <section className="space-y-6">
               <h2 className="font-headline text-3xl text-on-surface">Quick start</h2>
               <p className="text-sm text-on-surface-variant">Init, create a migration, edit it, run it.</p>
               <CodeBlock lang="bash" code={`cd /path/to/your/project\nschema-migrator init\nschema-migrator make:migration CreateUsersTable\nschema-migrator migrate`} />

               <h2 className="font-headline text-3xl text-on-surface pt-4">Migration file</h2>
               <CodeBlock code={`return new class extends Migration {
   public function up(): void
   {
      Capsule::schema()->create('users', function (Blueprint $table) {
         $table->id();
         $table->string('name');
         $table->string('email')->unique();
         $table->string('password');
         $table->timestamps();
      });
   }

   public function down(): void
   {
      Capsule::schema()->dropIfExists('users');
   }
};`} />

               <h2 className="font-headline text-3xl text-on-surface pt-4">Config</h2>
               <CodeBlock lang="yaml" code={`database:
  driver: mysql   # mysql, pgsql, sqlite, sqlsrv
  host: 127.0.0.1
  port: 3306
  database: your_database
  username: your_username
  password: your_password
migrations:
  table: migrations
  path: database/migrations`} />
            </section>
         </div>

         {/* Multiple projects */}
         <section className="space-y-4">
            <h2 className="font-headline text-3xl text-on-surface">Works across multiple projects</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               Install once globally. Each project gets its own config and migration state — they don't interfere with each other.
            </p>
            <CodeBlock lang="bash" code={`cd /project-a\nschema-migrator init\nschema-migrator migrate\n\ncd /project-b\nschema-migrator init\nschema-migrator migrate`} />
         </section>

         {/* CTA */}
         <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-12 text-center space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Laravel migrations, without Laravel</h2>
            <p className="text-on-surface-variant">
               If it's broken or missing something you need, open an issue or send a PR.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <a
                  href="https://packagist.org/packages/dconco/schema-migrator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Install via Composer
               </a>
               <a
                  href="https://github.com/dconco/php-schema-migrator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="mdi:github" />
                  View on GitHub
               </a>
            </div>
         </section>

      </main>
   )
}
