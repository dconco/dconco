import type React from 'react'
import { useEffect } from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div className="space-y-4">
      <h2 className="font-headline text-2xl text-on-surface">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-on-surface-variant">{children}</div>
   </div>
)

export default function PrivacyPolicy(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   return (
      <main className="mx-auto max-w-3xl space-y-12 px-6 pb-24 pt-32 md:px-12">
         <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Legal
            </div>
            <h1 className="font-headline text-5xl font-bold text-on-surface">Privacy Policy</h1>
            <p className="text-sm text-on-surface-variant">Last updated: July 2026</p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               This policy explains what information I collect when you visit dconco.tech, use my tools, or purchase from my store — and exactly what I do with it. No fluff, no legalese traps.
            </p>
         </div>

         <Section title="1. Who This Covers">
            <p>
               This policy applies to all visitors and users of dconco.tech, including anyone who browses the portfolio, purchases digital products from the store, submits a contact form, or uses any tool hosted under this domain.
            </p>
         </Section>

         <Section title="2. What I Collect">
            <p>I only collect what's necessary to operate this site and fulfill orders. That includes:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li><span className="text-on-surface font-medium">Contact information</span> — name and email address when you fill out the contact form or place an order.</li>
               <li><span className="text-on-surface font-medium">Payment data</span> — processed entirely by third-party payment providers. I never see or store your card details.</li>
            </ul>
            <p>I don't collect anything I don't need. If a form only needs your email, that's all I ask for.</p>
         </Section>

         <Section title="3. How I Use It">
            <p>The information collected is used strictly to:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Respond to enquiries and project requests</li>
               <li>Process and fulfill store orders</li>
               <li>Send order confirmations and relevant transactional emails</li>
            </ul>
            <p>I don't sell your data. I don't share it with advertisers. I don't use it to build profiles on you.</p>
         </Section>

         <Section title="4. Cookies">
            <p>
               This site uses minimal cookies to keep your session state intact during checkout. No tracking cookies from ad networks are used.
            </p>
            <p>
               You can disable cookies in your browser settings at any time. Some parts of the store may not function correctly without them.
            </p>
         </Section>

         <Section title="5. Third-Party Services">
            <p>I use a small number of trusted third-party services to run this site:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li><span className="text-on-surface font-medium">Payment processors</span> — handle all financial transactions securely under their own privacy policies.</li>
               <li><span className="text-on-surface font-medium">Email delivery</span> — used to send transactional emails like order confirmations.</li>
            </ul>
            <p>Each of these services operates under their own privacy policies and data handling standards.</p>
         </Section>

         <Section title="6. Data Retention">
            <p>
               I keep your data only as long as it's needed. Order records are retained for accounting and legal compliance. Contact form submissions are kept until the conversation is resolved.
            </p>
            <p>You can request deletion of your personal data at any time by contacting me directly.</p>
         </Section>

         <Section title="7. Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Access the personal data I hold about you</li>
               <li>Request correction of inaccurate data</li>
               <li>Request deletion of your data</li>
               <li>Withdraw consent for any processing based on consent</li>
               <li>Lodge a complaint with a data protection authority in your jurisdiction</li>
            </ul>
            <p>To exercise any of these rights, reach out via the contact page or directly at <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a>.</p>
         </Section>

         <Section title="8. Security">
            <p>
               I take reasonable technical measures to protect the data processed through this site. Connections are encrypted via HTTPS. Payment data never touches my servers. That said, no system is perfectly immune — if you ever notice something suspicious, let me know immediately.
            </p>
         </Section>

         <Section title="9. Children">
            <p>
               This site is not directed at children under 13. I don't knowingly collect personal information from minors. If you believe a child has submitted data through this site, contact me and I'll remove it promptly.
            </p>
         </Section>

         <Section title="10. Changes to This Policy">
            <p>
               If this policy changes in a meaningful way, I'll update the date at the top of this page. I won't bury significant changes in fine print — if something important shifts, I'll make it clear.
            </p>
         </Section>

         <Section title="11. Contact">
            <p>
               Questions about this policy or how your data is handled? Reach me at <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a> or through the <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
         </Section>
      </main>
   )
}
