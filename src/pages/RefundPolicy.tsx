import type React from 'react'
import { useEffect } from 'react'

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
   <div className="space-y-4">
      <h2 className="font-headline text-2xl text-on-surface">{title}</h2>
      <div className="space-y-3 text-base leading-relaxed text-on-surface-variant">{children}</div>
   </div>
)

export default function RefundPolicy(): React.JSX.Element {
   useEffect(() => { window.scrollTo(0, 0) }, [])

   return (
      <main className="mx-auto max-w-3xl space-y-12 px-6 pb-24 pt-32 md:px-12">
         <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Legal
            </div>
            <h1 className="font-headline text-5xl font-bold text-on-surface">Refund Policy</h1>
            <p className="text-sm text-on-surface-variant">Last updated: July 2026</p>
            <p className="text-base leading-relaxed text-on-surface-variant">
               This policy explains how delivery and refunds work for purchases made through the dconco.tech store. Read it before you buy — it's short and straightforward.
            </p>
         </div>

         <Section title="1. Digital Product Delivery">
            <p>
               After a successful payment, your purchase is delivered automatically to the email address you provided at checkout. This happens immediately in most cases.
            </p>
            <p>
               If you don't receive anything within a few minutes, check your spam or junk folder before reaching out.
            </p>
         </Section>

         <Section title="2. Didn't Receive Your Order?">
            <p>
               If the automated delivery fails for any reason — email issues, delivery errors, or anything on our end — contact me directly. I'll verify your payment manually and send your package by hand.
            </p>
            <p>
               Reach out at <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a> or through the <a href="/contact" className="text-primary hover:underline">contact page</a> with your order details and I'll sort it out.
            </p>
         </Section>

         <Section title="3. Refunds">
            <p>
               All sales are final. Because these are digital products, I don't offer refunds once a purchase is confirmed.
            </p>
            <p>
               The only exception is if delivery completely fails and I'm unable to get your package to you manually after you've contacted me. In that case, a refund may be issued — either automatically by the payment gateway or manually on my end after confirming the payment.
            </p>
            <p>
               If you believe you qualify, contact me and I'll review it. I'm not going to make this difficult — if you paid and genuinely didn't get what you paid for, we'll make it right.
            </p>
         </Section>

         <Section title="4. Chargebacks">
            <p>
               If you initiate a chargeback before contacting me, I reserve the right to dispute it. Most delivery issues can be resolved quickly — reach out first.
            </p>
         </Section>

         <div className="space-y-2 border-t border-outline-variant/20 pt-10">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Custom-made Projects</p>
            <h2 className="font-headline text-3xl font-bold text-on-surface">Client Work Policy</h2>
            <p className="text-base leading-relaxed text-on-surface-variant">
               This section applies to custom software, websites, mobile applications, APIs, backend services, and any other bespoke work commissioned directly from me.
            </p>
         </div>

         <Section title="5. No Refund Policy for Client Projects">
            <p>
               All payments made for custom work are final and non-refundable once work has started. Software development is a professional service — it involves planning, architecture, engineering, and implementation that can't be undone once underway.
            </p>
            <p>
               Payments compensate the time and expertise applied to your project, not just the final deliverable. Once I start, that time is spent.
            </p>
         </Section>

         <Section title="6. The Only Exception">
            <p>
               A refund may be considered only if a contracted milestone or module is not completed by the agreed delivery date.
            </p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Refunds apply only to the unfinished portion — not the whole project</li>
               <li>Completed and delivered work is fully billable regardless</li>
               <li>The refund amount is proportional to the value of the incomplete work</li>
               <li>Work already delivered, reviewed, or accepted is excluded from any refund calculation</li>
            </ul>
         </Section>

         <Section title="7. No Refund After Delivery">
            <p>
               Once a milestone or deliverable has been handed over in line with the agreed scope, it's considered complete and accepted. Refunds won't be issued because of:
            </p>
            <ul className="list-disc space-y-2 pl-6">
               <li>A change of mind or business direction</li>
               <li>Deciding not to use the delivered software</li>
               <li>Switching to a different solution after delivery</li>
               <li>Requesting features outside the original scope</li>
               <li>The software meeting agreed specs but not matching personal expectations</li>
            </ul>
            <p>
               If you have concerns about a deliverable, raise them during the review period — not after deployment or acceptance.
            </p>
         </Section>


         <Section title="8. Client Responsibilities">
            <p>
               You're responsible for providing complete, accurate, and timely information needed to complete the project. Delays or failures caused by missing requirements, inaccurate specs, or slow responses don't qualify for refunds.
            </p>
            <p>The following don't constitute grounds for a refund:</p>
            <ul className="list-disc space-y-2 pl-6">
               <li>Failure to provide required project materials</li>
               <li>Delayed approvals or prolonged inactivity on your end</li>
               <li>Changing project requirements after development begins</li>
               <li>Supplying inaccurate or incomplete specifications</li>
               <li>Unauthorized modification of the delivered software</li>
               <li>Deployment on unsupported or misconfigured infrastructure</li>
               <li>Failure to follow installation or deployment instructions</li>
               <li>Loss of data caused by you or third parties</li>
            </ul>
            <p>
               Any work required to fix issues resulting from the above may be quoted separately and does not qualify for a refund.
            </p>
         </Section>

         <Section title="9. Force Majeure">
            <p>
               I'm not liable for delays or inability to deliver where the cause is beyond my reasonable control — including but not limited to natural disasters, power outages, internet infrastructure failures, government actions, cyberattacks, or global service outages.
            </p>
            <p>
               No refund, credit, or compensation is owed where delays arise from such events.
            </p>
         </Section>

         <Section title="10. Chargebacks and Payment Disputes">
            <p>
               Before initiating any chargeback or payment reversal through your bank, card provider, or payment gateway, contact me first and give me a reasonable opportunity to resolve the issue.
            </p>
            <p>
               Initiating a fraudulent or unjustified chargeback for completed work may constitute a breach of contract. I reserve the right to contest such disputes with supporting documentation — including contracts, invoices, project records, commit history, communication logs, and delivery confirmations.
            </p>
         </Section>

         <Section title="11. Contact">
            <p>
               Questions about an order or this policy? Email <a href="mailto:me@dconco.tech" className="text-primary hover:underline">me@dconco.tech</a> or use the <a href="/contact" className="text-primary hover:underline">contact page</a>.
            </p>
         </Section>
      </main>
   )
}
