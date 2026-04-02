import type React from 'react';
import { useCallback, useState } from 'react';
import { Icon } from '@iconify/react';
import { useCart } from '../contexts/CartContext';
import { BadgePill } from '../components/ui/BadgePill';
import type { LinkType } from '../components/Header';

export default function Checkout({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   setActive('store');

   const { items, clearCart } = useCart();
   const [selectedMethod, setSelectedMethod] = useState<string>('');
   const [showConfirmation, setShowConfirmation] = useState(false);

   const formatPrice = (amount: number) => {
      return new Intl.NumberFormat('en-NG', {
         style: 'currency',
         currency: 'NGN',
         minimumFractionDigits: 0,
      }).format(amount);
   };

   const total = items.reduce((sum, item) => {
      const price = item.product.price[item.license];
      return sum + (price || 0);
   }, 0);

   const licenseLabel: Record<string, string> = {
      frontend: 'Frontend Only',
      backend: 'Backend Only',
      full: 'Full Package',
   };

   const paymentMethods = [
      {
         id: 'transfer',
         label: 'Bank Transfer',
         icon: 'material-symbols:account-balance',
         description: 'Direct bank transfer to our account',
         details: 'Bank: First Bank\nAccount: 1234567890\nName: Dave Conco',
      },
      {
         id: 'paystack',
         label: 'Paystack',
         icon: 'material-symbols:credit-card',
         description: 'Secure payment via Paystack gateway',
         details: 'You will be redirected to Paystack to complete payment',
      },
      {
         id: 'crypto',
         label: 'Cryptocurrency',
         icon: 'mdi:bitcoin',
         description: 'Pay with BTC, ETH, or USDT',
         details: 'BTC: bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh\nETH: 0x71C7656EC7ab88b098defB751B7401B5f6d8976F\nUSDT (TRC20): T9yD14Nj9j7xAB4dbGeiX9h8zzCuUj9R5T',
      },
      {
         id: 'opera',
         label: 'Opera Mini Pay',
         icon: 'mdi:qrcode-scan',
         description: 'Scan QR code with Opera Mini browser',
         details: 'QR code will be generated after confirming order',
      },
   ];

   const handleConfirmOrder = useCallback(() => {
      if (!selectedMethod) return;
      setShowConfirmation(true);
   }, [selectedMethod]);

   if (items.length === 0 && !showConfirmation) {
      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
               <Icon icon="material-symbols:shopping-cart-off" className="text-7xl text-on-surface-variant/30" />
               <h2 className="font-headline text-3xl text-on-surface">Your cart is empty</h2>
               <p className="text-lg text-on-surface-variant">Add some products before checking out</p>
            </div>
         </main>
      );
   }

   return (
      <main className="mx-auto max-w-7xl space-y-12 px-6 pb-16 pt-32 lg:px-12">
         <section data-aos="fade-up" className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-soft bg-surface-container-highest px-4 py-2">
               <Icon icon="material-symbols:lock" className="text-lg text-primary" />
               <span className="text-xs font-nav-link font-medium tracking-normal text-on-surface-variant">
                  SECURE CHECKOUT
               </span>
            </div>
            <h1 className="font-headline text-4xl font-bold md:text-5xl">Complete Your Purchase</h1>
         </section>

         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
               <section data-aos="fade-up" className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-6">
                  <h2 className="mb-6 font-headline text-2xl text-on-surface">Order Summary</h2>
                  <ul className="space-y-4">
                     {items.map((item) => (
                        <li key={`${item.product.id}-${item.license}`} className="flex gap-4 rounded-xl border border-outline-variant/20 bg-surface-container p-4">
                           <div className="h-16 w-20 overflow-hidden rounded-lg bg-surface-container-lowest">
                              {item.product.images[0] ? (
                                 <img src={item.product.images[0]} alt={item.product.name} className="h-full w-full object-cover" />
                              ) : (
                                 <div className="flex h-full w-full items-center justify-center text-on-surface-variant/30">
                                    <Icon icon="material-symbols:image-outline" className="text-lg" />
                                 </div>
                              )}
                           </div>
                           <div className="flex flex-1 flex-col justify-between">
                              <div>
                                 <h3 className="font-headline text-sm text-on-surface">{item.product.name}</h3>
                                 <span className="font-nav-link text-xs uppercase tracking-widest text-on-surface-variant">
                                    {licenseLabel[item.license]}
                                 </span>
                              </div>
                              <span className="font-bold text-primary">{formatPrice(item.product.price[item.license] || 0)}</span>
                           </div>
                        </li>
                     ))}
                  </ul>
                  <div className="mt-6 flex items-center justify-between border-t border-outline-variant/20 pt-4">
                     <span className="text-lg font-bold text-on-surface-variant">Total</span>
                     <span className="font-headline text-3xl font-bold text-primary">{formatPrice(total)}</span>
                  </div>
               </section>

               <section data-aos="fade-up" data-aos-delay="100" className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-6">
                  <h2 className="mb-6 font-headline text-2xl text-on-surface">Payment Method</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     {paymentMethods.map((method) => (
                        <button
                           key={method.id}
                           onClick={() => setSelectedMethod(method.id)}
                           className={`relative flex flex-col gap-3 rounded-xl border p-5 text-left transition-all ${
                              selectedMethod === method.id
                                 ? 'border-primary bg-primary/5'
                                 : 'border-outline-variant/30 bg-surface-container hover:border-primary/50'
                           }`}
                        >
                           {selectedMethod === method.id && (
                              <div className="absolute right-3 top-3">
                                 <BadgePill className="bg-primary text-on-primary">
                                    <Icon icon="material-symbols:check-rounded" className="text-sm" />
                                 </BadgePill>
                              </div>
                           )}
                           <Icon icon={method.icon} className="text-2xl text-primary" />
                           <div>
                              <h3 className="font-headline text-lg text-on-surface">{method.label}</h3>
                              <p className="text-sm text-on-surface-variant">{method.description}</p>
                           </div>
                        </button>
                     ))}
                  </div>

                  {selectedMethod && (
                     <div className="mt-6 rounded-xl border border-outline-variant/30 bg-surface-container p-5">
                        <h3 className="mb-3 font-headline text-lg text-on-surface">
                           {paymentMethods.find((m) => m.id === selectedMethod)?.label} Details
                        </h3>
                        <pre className="whitespace-pre-wrap font-mono text-sm text-on-surface-variant">
                           {paymentMethods.find((m) => m.id === selectedMethod)?.details}
                        </pre>
                     </div>
                  )}
               </section>
            </div>

            <div className="lg:col-span-1">
               <section data-aos="fade-up" data-aos-delay="200" className="sticky top-24 rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-6">
                  <h2 className="mb-6 font-headline text-xl text-on-surface">Complete Order</h2>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-on-surface-variant">Items</span>
                        <span className="font-bold text-on-surface">{items.length}</span>
                     </div>
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-on-surface-variant">Subtotal</span>
                        <span className="font-bold text-on-surface">{formatPrice(total)}</span>
                     </div>
                     <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
                        <span className="font-bold text-on-surface-variant">Total</span>
                        <span className="font-headline text-2xl font-bold text-primary">{formatPrice(total)}</span>
                     </div>
                  </div>

                  <button
                     onClick={handleConfirmOrder}
                     disabled={!selectedMethod}
                     className={`mt-6 w-full rounded-full px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                        selectedMethod
                           ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:bg-primary/80 active:scale-95'
                           : 'cursor-not-allowed bg-surface-container-high text-on-surface-variant/50'
                     }`}
                  >
                     Confirm & Pay
                  </button>

                  <p className="mt-4 text-center text-xs text-on-surface-variant/60">
                     By confirming, you agree to our terms of service
                  </p>
               </section>
            </div>
         </div>

         {showConfirmation && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowConfirmation(false)} />
               <div className="relative z-10 w-full max-w-lg rounded-2xl bg-surface-container-low p-8 shadow-2xl">
                  <div className="mb-6 flex items-center justify-center">
                     <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/20">
                        <Icon icon="material-symbols:check-circle" className="text-5xl text-primary" />
                     </div>
                  </div>
                  <h3 className="mb-2 text-center font-headline text-3xl text-on-surface">Order Confirmed!</h3>
                  <p className="mb-6 text-center text-on-surface-variant">
                     Your order has been placed successfully. You will receive payment instructions shortly.
                  </p>
                  <div className="mb-6 rounded-xl border border-outline-variant/30 bg-surface-container p-4">
                     <p className="mb-2 text-sm font-bold text-on-surface-variant">Order Total</p>
                     <p className="font-headline text-3xl font-bold text-primary">{formatPrice(total)}</p>
                  </div>
                  <div className="flex gap-3">
                     <button
                        onClick={() => {
                           setShowConfirmation(false);
                           clearCart();
                        }}
                        className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary/80 active:scale-95"
                     >
                        Done
                     </button>
                  </div>
               </div>
            </div>
         )}
      </main>
   );
}
