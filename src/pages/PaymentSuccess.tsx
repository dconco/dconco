import type React from 'react'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useCart } from '../hooks/useCart'


export default function PaymentSuccess(): React.JSX.Element {
   const [searchParams] = useSearchParams()
   const { clearCart } = useCart()
   const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)
   }, [])

   const orderId = searchParams.get('orderId') || `ORD-${Date.now()}`
   const method = searchParams.get('method') || 'transfer'
   const email = searchParams.get('email') || 'your@email.com'
   const txId = searchParams.get('txId')

   if (!mounted) return <div />

   if (method === 'paystack') {
      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <section className="flex flex-col items-center justify-center gap-8 py-20">
               <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                  <Icon icon="material-symbols:check-circle" className="text-7xl text-primary" />
               </div>
               <div className="text-center space-y-4">
                  <h1 className="font-headline text-4xl font-bold text-on-surface">Payment Successful!</h1>
                  <p className="text-xl text-on-surface-variant">Thank you for your purchase</p>
               </div>

               <div className="rounded-xl border border-outline-variant/30 bg-surface-container p-6 w-full max-w-md space-y-4">
                  <div className="flex items-start gap-3">
                     <Icon icon="material-symbols:mail-outline" className="text-2xl text-primary mt-1" />
                     <div>
                        <p className="font-bold text-on-surface">Check your email</p>
                        <p className="text-sm text-on-surface-variant">{email}</p>
                     </div>
                  </div>
                  <p className="text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4">
                     Your package download link and license details have been sent to your email. Please check your inbox and spam folder.
                  </p>
               </div>

               <div className="text-center space-y-2">
                  <p className="text-sm text-on-surface-variant">Order ID: <span className="font-mono font-bold text-on-surface">{orderId}</span></p>
                  <p className="text-xs text-on-surface-variant/60">You can bookmark this page for your records</p>
               </div>

               <button
                  onClick={() => {
                     clearCart()
                     window.location.href = '/store'
                  }}
                  className="mt-4 rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-all hover:bg-primary/80 active:scale-95"
               >
                  Back to Store
               </button>
            </section>
         </main>
      )
   }

   if (method === 'transfer' || method === 'crypto') {
      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <section className="flex flex-col items-center justify-center gap-8 py-20">
               <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                  <Icon icon="material-symbols:check-circle" className="text-7xl text-primary" />
               </div>
               <div className="text-center space-y-4">
                  <h1 className="font-headline text-4xl font-bold text-on-surface">Payment Received!</h1>
                  <p className="text-xl text-on-surface-variant">
                     We've received your payment and proof. Your package is being prepared.
                  </p>
               </div>

               <div className="rounded-xl border border-outline-variant/30 bg-surface-container p-6 w-full max-w-md space-y-4">
                  <div className="flex items-start gap-3">
                     <Icon icon="material-symbols:mail-outline" className="text-2xl text-primary mt-1" />
                     <div>
                        <p className="font-bold text-on-surface">Confirmation Email</p>
                        <p className="text-sm text-on-surface-variant">{email}</p>
                     </div>
                  </div>
                  {txId && method === 'crypto' && (
                     <div className="flex items-start gap-3 border-t border-outline-variant/30 pt-4">
                        <Icon icon="mdi:bitcoin" className="text-2xl text-primary mt-1" />
                        <div className="flex-1 min-w-0">
                           <p className="font-bold text-on-surface">Transaction Hash</p>
                           <p className="text-sm text-on-surface-variant break-all font-mono text-xs">{txId}</p>
                        </div>
                     </div>
                  )}
                  <p className="text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4">
                     You will receive your download link via email within 24 hours. Check your inbox and spam folder.
                  </p>
               </div>

               <div className="text-center space-y-2">
                  <p className="text-sm text-on-surface-variant">Order ID: <span className="font-mono font-bold text-on-surface">{orderId}</span></p>
                  <p className="text-xs text-on-surface-variant/60">You can bookmark this page for your records</p>
               </div>

               <button
                  onClick={() => {
                     clearCart()
                     window.location.href = '/store'
                  }}
                  className="mt-4 rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-all hover:bg-primary/80 active:scale-95"
               >
                  Back to Store
               </button>
            </section>
         </main>
      )
   }

   if (method === 'opera') {
      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <section className="flex flex-col items-center justify-center gap-8 py-20">
               <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20">
                  <Icon icon="material-symbols:check-circle" className="text-7xl text-primary" />
               </div>
               <div className="text-center space-y-4">
                  <h1 className="font-headline text-4xl font-bold text-on-surface">Payment Received!</h1>
                  <p className="text-xl text-on-surface-variant">
                     We've received your Opera Mini payment and proof. Your package is being prepared.
                  </p>
               </div>

               <div className="rounded-xl border border-outline-variant/30 bg-surface-container p-6 w-full max-w-md space-y-4">
                  <div className="flex items-start gap-3">
                     <Icon icon="material-symbols:mail-outline" className="text-2xl text-primary mt-1" />
                     <div>
                        <p className="font-bold text-on-surface">Confirmation Email</p>
                        <p className="text-sm text-on-surface-variant">{email}</p>
                     </div>
                  </div>
                  {txId && (
                     <div className="flex items-start gap-3 border-t border-outline-variant/30 pt-4">
                        <Icon icon="mdi:qrcode" className="text-2xl text-primary mt-1" />
                        <div className="flex-1 min-w-0">
                           <p className="font-bold text-on-surface">Transaction Ref</p>
                           <p className="text-on-surface-variant break-all font-mono text-xs">{txId}</p>
                        </div>
                     </div>
                  )}
                  <p className="text-sm text-on-surface-variant border-t border-outline-variant/30 pt-4">
                     You will receive your download link via email within 24 hours. Check your inbox and spam folder.
                  </p>
               </div>

               <div className="text-center space-y-2">
                  <p className="text-sm text-on-surface-variant">Order ID: <span className="font-mono font-bold text-on-surface">{orderId}</span></p>
                  <p className="text-xs text-on-surface-variant/60">You can bookmark this page for your records</p>
               </div>

               <button
                  onClick={() => {
                     clearCart()
                     window.location.href = '/store'
                  }}
                  className="mt-4 rounded-full bg-primary px-8 py-3 font-bold text-on-primary transition-all hover:bg-primary/80 active:scale-95"
               >
                  Back to Store
               </button>
            </section>
         </main>
      )
   }

   return <div />
}
