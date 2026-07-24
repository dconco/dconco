import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const CodeBlock = ({ code, lang = 'php' }: { code: string; lang?: string }) => (
   <pre className={`language-${lang} overflow-x-auto rounded-lg bg-surface-container-lowest px-5 py-4 text-sm text-primary font-label leading-relaxed`}>
      <code>{code.trim()}</code>
   </pre>
)

const features = [
   { icon: 'material-symbols:widgets-outline-rounded', title: 'Component Architecture', detail: 'Build reusable PHP components the same way you think in React — but it\'s pure PHP, server-rendered.' },
   { icon: 'material-symbols:sync-rounded', title: 'Reactive State', detail: 'useState() keeps your UI in sync with data changes automatically. No manual DOM manipulation.' },
   { icon: 'material-symbols:bolt-rounded', title: 'SPA Navigation', detail: 'Smooth page transitions without full reloads. Client-side routing built in.' },
   { icon: 'material-symbols:search-rounded', title: 'SEO Ready', detail: 'Everything is server-rendered. Search engines see real content, not a blank shell.' },
   { icon: 'material-symbols:compress-rounded', title: 'Native Compression', detail: 'C++ FFI-powered HTML/CSS/JS compression. Aggressive minification at the native layer.' },
   { icon: 'material-symbols:settings-outline-rounded', title: 'Framework Agnostic', detail: 'Drop it into any PHP project. No framework lock-in, no forced conventions.' },
]

export default function PhpSPA(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [stats, setStats] = useState<{ stars: number; downloads: number } | null>(null)

   useEffect(() => {
      fetch('https://packagist.org/packages/dconco/phpspa.json')
         .then(r => r.json())
         .then(d => setStats({
            stars: d.package?.github_stars ?? 0,
            downloads: d.package?.downloads?.total ?? 0,
         })).catch(() => {})
   }, [])

   return (
      <main className="mx-auto max-w-4xl space-y-20 px-6 pb-24 pt-32 md:px-12">

         {/* Hero */}
         <section className="space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Signature Project
            </div>
            <h1 className="font-headline text-5xl font-bold leading-tight text-on-surface md:text-6xl">
               PhpSPA
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               A component-based PHP library for building modern, dynamic web applications — with reactive state, SPA-like navigation, and server-side rendering. No JavaScript framework required.
            </p>
            <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant">
               This is my most ambitious project. Built across PHP, TypeScript, JavaScript, C++, and HTML — it's the one I keep coming back to, refining, and pushing further.
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
                  PHP 8.4+
               </span>
               <span className="inline-flex items-center gap-1.5 rounded-full border border-outline-variant/20 bg-surface-container px-4 py-2 text-sm text-on-surface-variant">
                  <Icon icon="material-symbols:code-rounded" className="text-secondary" />
                  5 languages
               </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
               <a
                  href="https://phpspa.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:menu-book-outline-rounded" />
                  Documentation
               </a>
               <a
                  href="https://packagist.org/packages/dconco/phpspa"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Packagist
               </a>
               <a
                  href="https://github.com/dconco/phpspa"
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
            <h2 className="font-headline text-3xl text-on-surface">What it gives you</h2>
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

         {/* Install + Component syntax */}
         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <section className="space-y-6">
               <h2 className="font-headline text-3xl text-on-surface">Install</h2>
               <CodeBlock lang="bash" code="composer create-project phpspa/phpspa my-app" />
               <p className="text-sm text-on-surface-variant">Or into an existing project:</p>
               <CodeBlock lang="bash" code="composer require dconco/phpspa" />

               <h2 className="font-headline text-3xl text-on-surface pt-4">Building components</h2>
               <p className="text-sm leading-relaxed text-on-surface-variant">
                  Components are plain PHP functions. State is reactive. The UI updates when state changes — no JavaScript needed.
               </p>
               <CodeBlock code={`use PhpSPA\\App;
use PhpSPA\\Component;
use function Component\\useState;

require_once 'vendor/autoload.php';

function HomePage() {
   $counter = useState("count", 0);

   return <<<HTML
      <h1>Counter: {$counter}</h1>
      <button onclick="setState('count', {$counter} + 1)">+</button>
      <Component.Link to="/about" children="About" />
   HTML;
}

$app = new App(fn() => '<div id="app"></div>');
$app->attach((new Component('HomePage'))->route('/'));
$app->run();`} />
            </section>

            <section className="space-y-6">
               <h2 className="font-headline text-3xl text-on-surface">Backend & API routing</h2>
               <p className="text-sm leading-relaxed text-on-surface-variant">
                  PhpSPA has a full router built in. You can build APIs alongside your components — same app, same entry point.
               </p>

               <p className="text-xs uppercase tracking-widest text-on-surface-variant">Route groups & prefixes</p>
               <CodeBlock code={`$app->prefix('/api', function (Router $router) {
   $router->get('/users', function ($req, $res) {
      return $res->success(['user1', 'user2']);
   });

   // Nested: /api/v1/status
   $router->prefix('/v1', function (Router $router) {
      $router->get('/status', fn($req, $res) =>
         $res->success('API V1 Online')
      );
   });
});`} />

               <p className="text-xs uppercase tracking-widest text-on-surface-variant pt-2">Middleware</p>
               <CodeBlock code={`$app->prefix('/admin', function (Router $router) {
   $router->middleware(function ($req, $res, $next) {
      if (!$req->session('user_id')) {
         return $res->redirect('/login');
      }
      return $next($req, $res);
   });

   $router->get('/dashboard', fn($req, $res) =>
      $res->success('Welcome')
   );
});

// Route-specific middleware
$router->get('/users/{id}', $checkRole, function ($req, $res) {
   return $res->success('User Data');
});`} />

               <p className="text-xs uppercase tracking-widest text-on-surface-variant pt-2">HTTP verbs & static files</p>
               <CodeBlock code={`$router->get('/posts', $handler);
$router->post('/posts', $handler);
$router->put('/posts/{id}', $handler);
$router->delete('/posts/{id}', $handler);

// Serve static assets
$app->useStatic('/assets', __DIR__ . '/../public/assets');`} />
            </section>
         </div>

         {/* CTA */}
         <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-12 text-center space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">The full picture is in the docs</h2>
            <p className="text-on-surface-variant">
               Hooks, state arrays, CSRF protection, compression, asset caching, client-side events — it's all documented at phpspa.tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <a
                  href="https://phpspa.tech"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:menu-book-outline-rounded" />
                  Read the Docs
               </a>
               <a
                  href="https://github.com/dconco/phpspa"
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
