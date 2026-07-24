import type React from 'react'
import { useEffect } from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div className="space-y-4">
      <h2 className="font-headline text-2xl text-on-surface">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-on-surface-variant">{children}</div>
   </div>
)

export default function TermsOfService(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   return (
      <main className="mx-auto max-w-3xl space-y-12 px-6 pb-24 pt-32 md:px-12">
         <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Legal
            </div>
            <h1 className="font-headline text-5xl font-bold text-on-surface">Terms of Service</h1>
            <p className="text-sm text-on-surface-variant">Last updated: July 2026</p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               These Terms govern your access to and use of dconco.tech, the store, and any tools or services hosted under this domain. By using any of these, you agree to what's written here.
            </p>
         </div>

         <Section title="1. Services Covered">
            <p>These Terms apply to:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>This portfolio website (dconco.tech)</li>
               <li>The digital products store</li>
               <li>All tools listed under /tools — including PhpSPA, RutexAI, WarpShare, Class Validator, and PHP Schema Migrator</li>
               <li>Any related pages, APIs, or services operated under this domain</li>
            </ul>
         </Section>

         <Section title="2. Eligibility and Use">
            <p>You must use these services lawfully and responsibly. That means:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>You won't attempt to disrupt, reverse-engineer, or abuse any part of this site or its services</li>
               <li>You won't use any tool or service here for spam, phishing, malware distribution, or any illegal activity</li>
               <li>You're responsible for how you use anything you download, install, or purchase here</li>
            </ul>
         </Section>

         <Section title="3. Store and Digital Products">
            <p>
               When you purchase a digital product from the store, you're buying a license to use it — not ownership of the underlying code or assets unless explicitly stated.
            </p>
            <ul className="list-disc space-y-2 pl-6">
               <li>All sales are final unless covered by the Refund Policy</li>
               <li>You may not redistribute, resell, or sublicense purchased products without written permission</li>
               <li>Access to purchased products is granted after payment is confirmed</li>
            </ul>
         </Section>

         <Section title="4. Open Source Tools">
            <p>
               Tools published as open source are governed by their respective licenses (typically MIT). The license terms for each tool take precedence over these Terms for anything related to the source code itself.
            </p>
            <p>
               Using an open source tool from this site doesn't create a support obligation on my end, though I do my best to maintain and improve them.
            </p>
         </Section>

         <Section title="5. Third-Party Services">
            <p>
               Some parts of this site interact with third-party providers — payment processors, email delivery, and hosting infrastructure. Those services operate under their own terms and policies. I'm not responsible for their practices or any issues arising from their side.
            </p>
         </Section>

         <Section title="6. Intellectual Property">
            <p>
               The content, design, and branding on dconco.tech are mine unless otherwise stated. You may not reproduce or repurpose them without permission. Open source projects are governed by their individual licenses.
            </p>
         </Section>

         <Section title="7. Disclaimer of Warranties">
            <p>
               Everything here is provided "as is" and "as available." I don't make guarantees about uptime, accuracy, or fitness for any particular purpose. Use your own judgment before relying on anything here for production systems.
            </p>
         </Section>

         <Section title="8. Limitation of Liability">
            <p>
               To the extent permitted by law, I'm not liable for any indirect, incidental, or consequential damages arising from your use of this site, its tools, or its products. Your use is at your own risk.
            </p>
         </Section>

         <Section title="9. Changes to These Terms">
            <p>
               I may update these Terms when needed. If something significant changes, I'll update the date at the top. Continued use of the site after changes means you accept the updated Terms.
            </p>
         </Section>

         <Section title="10. Contact">
            <p>
               Questions about these Terms? Reach me at <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a> or through the <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
         </Section>
      </main>
   )
}
