import type React from "react"
import { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import ReCAPTCHA from "react-google-recaptcha"
import { portfolioImages } from "../assets/images"
import type { LinkType } from "../components/Header"

const projectTypes = [
   "Frontend Web Application (React)",
   "Backend API Development (PHP / Go / Node)",
   "Full-Stack Web Platform",
   "Real-Time Messaging or Socket System",
   "Microservices & Infrastructure",
]

export default function Contact({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   useEffect(() => setActive('contact'), [setActive])
   const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY as string | undefined

   const [isSending, setIsSending] = useState(false)
   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null)
   const [formStatus, setFormStatus] = useState<{ type: "idle" | "success" | "error"; message: string }>({ type: "idle", message: "" })

   const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const form = event.currentTarget
      const formData = new FormData(form)

      if (!recaptchaSiteKey) {
         setFormStatus({ type: "error", message: "reCAPTCHA is not configured yet. Add VITE_RECAPTCHA_SITE_KEY to enable submissions." })
         return
      }
      if (!recaptchaToken) {
         setFormStatus({ type: "error", message: "Please complete the reCAPTCHA challenge before sending." })
         return
      }

      formData.append("_subject", "New Project Inquiry from dconco.tech")
      formData.append("_template", "table")
      formData.append("_captcha", "false")

      setIsSending(true)
      setFormStatus({ type: "idle", message: "" })

      try {
         const response = await fetch("https://formsubmit.co/ajax/1c41973ae1f0a00d7b78338ea422926e", {
            method: "POST",
            headers: { Accept: "application/json" },
            body: formData,
         })
         if (!response.ok) throw new Error()
         setFormStatus({ type: "success", message: "Inquiry sent successfully. A response will come shortly." })
         form.reset()
         setRecaptchaToken(null)
      } catch {
         setFormStatus({ type: "error", message: "Something went wrong while sending. Please try again or email directly." })
      } finally {
         setIsSending(false)
      }
   }

   return (
      <main className="mx-auto max-w-7xl px-6 pb-24 pt-32 md:px-12 lg:px-24">

         {/* Header */}
         <section data-aos="fade-up" className="mb-16">
            <div className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-secondary">
               <span className="h-px w-8 bg-secondary" />
               Get in touch
            </div>
            <h1 className="font-headline text-5xl leading-[1.02] tracking-tight md:text-7xl lg:text-8xl">
               Let's build<br />
               <span className="font-serif italic text-primary">something real.</span>
            </h1>
         </section>

         <section data-aos="fade-up" className="grid grid-cols-1 gap-6 md:grid-cols-12">

            {/* Form */}
            <article data-aos="fade-right" className="md:col-span-8">
               <p className="mb-8 text-sm text-on-surface-variant">
                  Before submitting, please review the{" "}
                  <a href="/developer-client-agreement" className="font-semibold text-primary underline underline-offset-2 hover:opacity-80">
                     Developer Client Agreement
                  </a>.
               </p>

               <form onSubmit={handleSubmit} className="space-y-8">
                  <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                     <label className="space-y-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Your Name</span>
                        <input
                           type="text"
                           name="name"
                           required
                           placeholder="John Doe"
                           className="w-full border-b border-outline-variant/40 bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors"
                        />
                     </label>
                     <label className="space-y-2">
                        <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Your Email</span>
                        <input
                           type="email"
                           name="email"
                           required
                           placeholder="example@gmail.com"
                           className="w-full border-b border-outline-variant/40 bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors"
                        />
                     </label>
                  </div>

                  <label className="block space-y-2">
                     <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Project Type</span>
                     <select
                        name="project_type"
                        required
                        className="w-full cursor-pointer border-b border-outline-variant/40 bg-transparent py-3 text-on-surface focus:border-primary focus:outline-none transition-colors"
                     >
                        {projectTypes.map((item) => (
                           <option key={item} className="bg-surface">{item}</option>
                        ))}
                     </select>
                  </label>

                  <label className="block space-y-2">
                     <span className="block text-xs font-bold uppercase tracking-widest text-on-surface-variant">Project Brief</span>
                     <textarea
                        rows={5}
                        name="message"
                        required
                        placeholder="Tell me about your vision, goals, and timeline..."
                        className="w-full resize-none border-b border-outline-variant/40 bg-transparent py-3 text-on-surface placeholder:text-on-surface-variant/40 focus:border-primary focus:outline-none transition-colors"
                     />
                  </label>

                  <div>
                     {recaptchaSiteKey ? (
                        <ReCAPTCHA
                           sitekey={recaptchaSiteKey}
                           onChange={(token: string | null) => setRecaptchaToken(token)}
                           onExpired={() => setRecaptchaToken(null)}
                           theme="dark"
                        />
                     ) : (
                        <p className="text-sm text-red-300">reCAPTCHA key missing. Set `VITE_RECAPTCHA_SITE_KEY` in your `.env` file.</p>
                     )}
                  </div>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                     <p className="text-sm italic text-on-surface-variant">Estimated response: 24-48 hours</p>
                     <button
                        type="submit"
                        disabled={isSending}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-primary-container px-10 py-4 text-sm font-black uppercase tracking-widest text-on-primary-container transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                     >
                        {isSending ? "Sending..." : "Send Inquiry"}
                        <Icon icon="material-symbols:arrow-forward-rounded" className="text-xl" />
                     </button>
                  </div>

                  {formStatus.type !== "idle" && (
                     <p className={`text-sm font-medium ${formStatus.type === "success" ? "text-primary" : "text-red-300"}`}>
                        {formStatus.message}
                     </p>
                  )}
               </form>
            </article>

            {/* Sidebar — original */}
            <div className="flex flex-col gap-6 md:col-span-4">

               <article data-aos="fade-left" data-aos-delay="120" className="rounded-xl bg-surface-container p-8">
                  <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Direct Channels</h3>
                  <div className="space-y-6">
                     <a href="mailto:me@dconco.tech" className="group block">
                        <span className="mb-1 block text-xs text-on-surface-variant">Email</span>
                        <span className="text-xl font-bold transition-colors group-hover:text-primary">me@dconco.tech</span>
                     </a>
                     <div className="grid grid-cols-2 gap-4 pt-2">
                        <a href="https://x.com/dave_conco" target="_blank" rel="noreferrer"
                           className="flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest p-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-primary/10">
                           <Icon icon="mdi:twitter" className="text-base text-on-surface-variant" />
                           Twitter
                        </a>
                        <a href="https://github.com/dconco" target="_blank" rel="noreferrer"
                           className="flex items-center justify-center gap-2 rounded-lg bg-surface-container-lowest p-4 text-xs font-bold uppercase tracking-widest transition-colors hover:bg-primary/10">
                           <Icon icon="mdi:github" className="text-base text-on-surface-variant" />
                           GitHub
                        </a>
                     </div>
                  </div>
               </article>

               <article data-aos="fade-left" data-aos-delay="160" className="group relative h-48 overflow-hidden rounded-xl bg-surface-container-lowest p-8">
                  <img
                     src={portfolioImages.contactGlobalMap}
                     alt="Dark abstract globe map"
                     className="absolute inset-0 h-full w-full object-cover opacity-10 grayscale transition-all duration-700 group-hover:grayscale-0"
                  />
                  <div className="relative z-10 flex h-full flex-col justify-end">
                     <div className="mb-1 flex items-center gap-2">
                        <Icon icon="material-symbols:public" className="text-secondary" />
                        <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Global Reach</h3>
                     </div>
                     <p className="text-lg font-bold">Working Globally</p>
                     <p className="mt-1 text-xs uppercase tracking-widest text-on-surface-variant">GMT +1 (Nigeria/Lagos)</p>
                  </div>
               </article>
            </div>
         </section>

      </main>
   )
}
