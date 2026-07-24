import type React from 'react'
import { useEffect } from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div className="space-y-4">
      <h2 className="font-headline text-2xl text-on-surface">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-on-surface-variant">{children}</div>
   </div>
)

export default function DeveloperClientAgreement(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   return (
      <main className="mx-auto max-w-3xl space-y-12 px-6 pb-24 pt-32 md:px-12">
         <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Legal
            </div>
            <h1 className="font-headline text-5xl font-bold text-on-surface">Developer Client Agreement</h1>
            <p className="text-sm text-on-surface-variant">Last updated: July 2026</p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               This Agreement governs the professional services I provide to individuals and organizations commissioning development work. By purchasing services or entering into a project engagement with me, you agree to the terms below.
            </p>
         </div>

         <Section title="1. Scope of Services">
            <p>I provide freelance software development services which may include:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Website and web application development</li>
               <li>Mobile application development</li>
               <li>API and backend service development</li>
               <li>Browser extension development</li>
               <li>Software tools and automation scripts</li>
               <li>Website migration or redesign</li>
               <li>Technical consulting and development assistance</li>
               <li>Ongoing support or maintenance services</li>
            </ul>
            <p>
               The exact scope of work will be defined in the project proposal, invoice, written communication, or service listing associated with your request.
            </p>
         </Section>

         <Section title="2. Payment Terms">
            <p>Development services may require partial or full payment before work begins. Payment structures may include:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Upfront deposits</li>
               <li>Milestone-based payments</li>
               <li>Final delivery payments</li>
               <li>Hourly billing for consulting or development assistance</li>
               <li>Monthly retainer fees for ongoing support or maintenance</li>
            </ul>
            <p>
               Failure to complete agreed payments may result in delay, suspension, or termination of the project.
            </p>
         </Section>

         <Section title="3. Long Milestones & Advance Payment">
            <p>
               Some milestones involve complex engineering, research, or extended implementation that may take several weeks or more to complete. In such cases, I reserve the right to request an advance or partial milestone payment before the milestone is fully delivered.
            </p>
            <p>
               Any advance requested will be reasonable and proportionate to the progress or complexity of the work, and communicated to you in advance. Work may be paused until the advance payment is completed.
            </p>
         </Section>

         <Section title="4. App Store & Platform Submission">
            <p>
               I don't deploy native applications using my own Google Play or Apple App Store developer accounts. You're responsible for creating and managing your own developer accounts and submitting your applications to the respective platforms.
            </p>
            <p>
               I may provide guidance during the submission process, but I'm not responsible for managing submissions or for any issues, delays, or decisions made during platform review.
            </p>
         </Section>

         <Section title="5. Legal & Compliance">
            <p>
               I'm not responsible for legal issues — including copyright infringement, intellectual property disputes, or platform policy violations — that arise from the content, design, or functionality of work delivered to you.
            </p>
            <p>
               You remain solely responsible for ensuring your application, website, or service complies with applicable laws, platform policies, copyright rules, and any required privacy policies or terms of service.
            </p>
            <p>
               I may flag potential legal or policy concerns during development, but final responsibility stays with you.
            </p>
         </Section>

         <Section title="6. Project Ownership">
            <p>
               Upon full payment, you receive ownership of the final project deliverables, including source code and deployed applications where applicable.
            </p>
            <p>
               I retain the right to reuse general programming techniques, non-proprietary components, frameworks, and development knowledge gained during the project.
            </p>
         </Section>

         <Section title="7. Privacy of Client Projects">
            <p>
               I respect the confidentiality of your project. Client work won't be publicly displayed on my portfolio, website, or social media without your explicit permission.
            </p>
            <p>
               I may reference completed work privately in a CV or resume for employment verification purposes.
            </p>
         </Section>

         <Section title="8. Revisions and Modifications">
            <p>
               Reasonable revisions are included within the agreed project scope. Major feature changes or additional development beyond the original scope may require additional fees or a revised agreement.
            </p>
         </Section>

         <Section title="9. Limitation of Liability">
            <p>
               I provide services on an "as-is" basis and make no guarantees regarding business outcomes, platform approvals, or performance results.
            </p>
            <p>
               Under no circumstances am I liable for indirect, incidental, or consequential damages — including loss of profits, business interruptions, or platform rejection decisions.
            </p>
         </Section>

         <Section title="10. Termination">
            <p>
               Either party may terminate the project agreement if necessary. Payments already made may not be refundable if work has already been performed. See the <a href="/refund-policy" className="text-primary hover:underline">Refund Policy</a> for full details.
            </p>
         </Section>

         <Section title="11. Governing Law">
            <p>
               This Agreement is governed by and interpreted in accordance with applicable laws in the Federal Republic of Nigeria.
            </p>
         </Section>

         <Section title="12. Contact">
            <p>
               Questions about this Agreement? Reach me at <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a> or through the <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
         </Section>
      </main>
   )
}
