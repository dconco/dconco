import type React from 'react'
import { useEffect, useState } from 'react'
import { Icon } from '@iconify/react'

const CodeBlock = ({ code, lang = 'php' }: { code: string; lang?: string }) => (
   <pre className={`language-${lang} overflow-x-auto rounded-lg bg-surface-container-lowest px-5 py-4 text-sm text-primary font-label leading-relaxed`}>
      <code>{code.trim()}</code>
   </pre>
)

const attributes = [
   { name: '#[Validatable]', desc: 'Marks the class as validatable. Required on every DTO.' },
   { name: '#[Message]', desc: 'Base error message returned when validation fails.' },
   { name: '#[Required]', desc: 'Custom required-field message. Inferred automatically when no default value exists.' },
   { name: '#[RequiredIf]', desc: 'Required when another field equals a specific value.' },
   { name: '#[Email]', desc: 'Validates email format.' },
   { name: '#[MinLength / MaxLength]', desc: 'String length constraints.' },
   { name: '#[Length]', desc: 'String length between min and max.' },
   { name: '#[Min / Max / Between]', desc: 'Numeric range constraints.' },
   { name: '#[Regex]', desc: 'Validates against a custom pattern.' },
   { name: '#[Url / Uuid / Ip / Phone / Json]', desc: 'Format validators for common data types.' },
   { name: '#[Enum]', desc: 'Value must be one of a defined set.' },
   { name: '#[Boolean / Numeric / Date / Timestamp]', desc: 'Type validators.' },
   { name: '#[Alpha / AlphaNum]', desc: 'Letters only, or letters and numbers only.' },
   { name: '#[AllowedCharacters]', desc: 'Restricts allowed characters and their max occurrences. Composable with other attributes.' },
   { name: '#[Lowercase / Uppercase]', desc: 'Case constraints.' },
   { name: '#[IsArray / MinItems / MaxItems]', desc: 'Array validation.' },
   { name: '#[ValidatableType]', desc: 'Validates nested objects or arrays of objects.' },
]

export default function ClassValidator(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   const [stats, setStats] = useState<{ stars: number; downloads: number } | null>(null)

   useEffect(() => {
      fetch('https://packagist.org/packages/phpspa/validator.json')
         .then(r => r.json())
         .then(pkg => setStats({
            stars: pkg.package.github_stars,
            downloads: pkg.package.downloads.total,
         }))
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
               Class Validator
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
               Attribute-based request validation for PHP. Define your rules directly on the class — no separate schema files, no verbose rule arrays. Just annotate your DTO and validate.
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
                  PHP · Composer
               </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
               <a
                  href="https://packagist.org/packages/phpspa/validator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Packagist
               </a>
               <a
                  href="https://github.com/dconco/phpspa-validator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-outline-variant/30 px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-surface transition-colors hover:border-primary hover:text-primary"
               >
                  <Icon icon="mdi:github" />
                  GitHub
               </a>
            </div>
         </section>

         {/* Install */}
         <section className="space-y-4">
            <h2 className="font-headline text-3xl text-on-surface">Install</h2>
            <CodeBlock code="composer require phpspa/validator" lang="bash" />
         </section>

         {/* Quick usage + Payload sources */}
         <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-start">
            <section className="space-y-4">
               <h2 className="font-headline text-3xl text-on-surface">Quick usage</h2>
               <p className="text-sm leading-relaxed text-on-surface-variant">
                  Mark your class with <code className="text-primary">#[Validatable]</code>, annotate each property, then pass the payload to <code className="text-primary">Validator::from()</code>. That's the whole flow.
               </p>
               <CodeBlock code={`use PhpSPA\\Validator\\Attributes\\Email;
use PhpSPA\\Validator\\Attributes\\MinLength;
use PhpSPA\\Validator\\Attributes\\Validatable;
use PhpSPA\\Validator\\Validator;

#[Validatable]
final class CreateUserDto
{
   #[Email]
   public ?string $email = null;

   #[MinLength(8)]
   public string $password;
}

$result = Validator::from($req->json(), CreateUserDto::class);

if (!$result->isValid()) {
   return $res->validationError($result->errors());
}

$dto = $result->data();
$email = $dto->email;
$password = $dto->password;`} />
            </section>

            <section className="space-y-4">
               <h2 className="font-headline text-3xl text-on-surface">Payload sources</h2>
               <p className="text-sm leading-relaxed text-on-surface-variant">
                  Works with any PHP array or object — PhpSPA, Laravel, Symfony, raw <code className="text-primary">$_POST</code>, or a plain array.
               </p>
               <CodeBlock code={`// PhpSPA
Validator::from($req->json(), Dto::class);
Validator::from($req->post(), Dto::class);

// Raw PHP
Validator::from($_POST, Dto::class);

// Laravel
Validator::from($request->all(), Dto::class);

// Any array
Validator::from(['email' => 'me@example.com'], Dto::class);`} />

               <h2 className="font-headline text-3xl text-on-surface pt-6">Laravel example</h2>
               <CodeBlock code={`#[Validatable]
final class User extends Model
{
   #[MinLength(2, message: 'Name must be at least 2 chars')]
   public string $name = 'user';

   #[Boolean]
   public string $isAdmin;
}

public function store(Request $request)
{
   $result = Validator::from($request->all(), User::class);

   if (!$result->isValid()) {
      return response()->json([
         'message' => $result->message(),
         'errors'  => $result->errors(),
      ], 422);
   }

   $user = $result->data();
}`} />
            </section>
         </div>

         {/* Notes */}
         <section className="space-y-4">
            <h2 className="font-headline text-3xl text-on-surface">How it works</h2>
            <ul className="space-y-3">
               {[
                  'Classes must be marked with #[Validatable] to be validated.',
                  'Optional fields are declared nullable (e.g. ?string). Fields with a default value are also treated as optional.',
                  'Fields without a default value are required automatically — no extra attribute needed.',
                  'Use #[Required(message: "...")] when you want a custom required-field error message.',
                  'DTO property names map directly to request payload keys — $email validates the "email" key.',
                  'Base error message comes from #[Message] on the class itself.',
               ].map(note => (
                  <li key={note} className="flex items-start gap-3 text-sm text-on-surface-variant">
                     <Icon icon="material-symbols:check-circle-outline-rounded" className="mt-0.5 shrink-0 text-base text-primary" />
                     {note}
                  </li>
               ))}
            </ul>
         </section>

         {/* Attributes reference */}
         <section className="space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Attributes reference</h2>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
               {attributes.map(a => (
                  <div key={a.name} className="rounded-xl border border-outline-variant/20 bg-surface-container px-5 py-4 space-y-1">
                     <code className="text-sm font-bold text-primary">{a.name}</code>
                     <p className="text-sm text-on-surface-variant">{a.desc}</p>
                  </div>
               ))}
            </div>
         </section>

         {/* CTA */}
         <section className="rounded-2xl border border-outline-variant/20 bg-surface-container-low px-8 py-12 text-center space-y-6">
            <h2 className="font-headline text-3xl text-on-surface">Part of the PhpSPA ecosystem</h2>
            <p className="text-on-surface-variant">
               It works with any PHP app — but it was built alongside PhpSPA. If you're already using PhpSPA, it fits right in.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
               <a
                  href="https://packagist.org/packages/phpspa/validator"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-on-primary transition-opacity hover:opacity-80"
               >
                  <Icon icon="material-symbols:download-rounded" />
                  Install via Composer
               </a>
               <a
                  href="https://github.com/dconco/phpspa-validator"
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
