import type React from 'react'
import { useCallback, useEffect, useState } from 'react'
import { Icon } from '@iconify/react'
import { BadgePill } from '../components/ui/BadgePill'
import type { LinkType } from '../components/Header'
import { useCart } from '../hooks/useCart'
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react'

export default function Checkout({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   useEffect(() => setActive('store'), [setActive])

   const { items, clearCart } = useCart()
   const [selectedMethod, setSelectedMethod] = useState<string>('')
   const [paymentStep, setPaymentStep] = useState<'method' | 'details'>('method')
   const [email, setEmail] = useState('')
   const [receiptFiles, setReceiptFiles] = useState<File[]>([])
   const [transactionId, setTransactionId] = useState('')
   const [qrCodeUrl, setQrCodeUrl] = useState('')

   const formatPrice = (amount: number) => {
      return new Intl.NumberFormat('en-NG', {
         style: 'currency',
         currency: 'NGN',
         minimumFractionDigits: 0,
      }).format(amount)
   }

   const total = items.reduce((sum, item) => {
      const price = item.product.price[item.license]
      return sum + (price || 0)
   }, 0)

   const licenseLabel: Record<string, string> = {
      frontend: 'Frontend Only',
      backend: 'Backend Only',
      full: 'Full Package',
   }

   const paymentMethods = [
      {
         id: 'transfer',
         label: 'Bank Transfer',
         icon: 'material-symbols:account-balance',
         description: 'Direct bank transfer to our account',
         bankDetails: {
            bank: 'First Bank',
            account: '1234567890',
            name: 'Dave Conco',
         },
      },
      {
         id: 'paystack',
         label: 'Paystack',
         icon: 'material-symbols:credit-card',
         description: 'Secure payment via Paystack gateway',
      },
      {
         id: 'crypto',
         label: 'Cryptocurrency',
         icon: 'mdi:bitcoin',
         description: 'Pay with BTC, ETH, or USDT',
         cryptoAddresses: {
            btc: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
            eth: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
            usdt: 'T9yD14Nj9j7xAB4dbGeiX9h8zzCuUj9R5T',
         },
      },
      {
         id: 'opera',
         label: 'Opera Mini Pay',
         icon: 'mdi:qrcode',
         description: 'Scan QR code with Opera Mini',
      },
   ]

   const generateQRCode = useCallback(() => {
      const operaPayLink = `celo://wallet/pay?address=0x1234567890abcdef&amount=${total}&currency=cUSD`
      setQrCodeUrl(operaPayLink)
   }, [total])

   const handleMethodSelect = (methodId: string) => {
      setSelectedMethod(methodId)
      setTransactionId('') // Reset transaction ID when changing methods
      if (methodId === 'opera') {
         generateQRCode()
      }
   }

   const handleAddFile = () => {
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*,.pdf'
      input.onchange = (e) => {
         const file = (e.target as HTMLInputElement).files?.[0]
         if (file && !receiptFiles.find((f) => f.name === file.name)) {
            setReceiptFiles([...receiptFiles, file])
         }
      }
      input.click()
   }

   const handleRemoveFile = (index: number) => {
      setReceiptFiles(receiptFiles.filter((_, i) => i !== index))
   }

   const handleProceedDetails = () => {
      if (!selectedMethod) return
      setPaymentStep('details')
   }

   const handleConfirmPayment = async () => {
      if (!email) {
         alert('Please enter your email address')
         return
      }

      if ((selectedMethod === 'transfer' || selectedMethod === 'crypto' || selectedMethod === 'opera') && receiptFiles.length === 0) {
         alert('Please upload proof of payment')
         return
      }

      if ((selectedMethod === 'crypto' || selectedMethod === 'opera') && !transactionId.trim()) {
         alert('Please enter your transaction ID')
         return
      }

      // Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substring(7).toUpperCase()}`

      // Prepare complete order payload with website details
      const orderPayload = {
         // Order metadata
         orderId,
         timestamp: new Date().toISOString(),
         
         // Website/Business details
         website: {
            name: 'Dave Conco Portfolio',
            url: window.location.origin,
            email: 'hello@daveconco.com',
            phone: '+234 (example)',
         },

         // Customer details
         customer: {
            email,
            userAgent: navigator.userAgent,
            ipAddress: 'server-side-only',
         },

         // Order items
         items: items.map((item) => ({
            productId: item.product.id,
            name: item.product.name,
            license: item.license,
            price: item.product.price[item.license],
            quantity: 1,
         })),

         // Payment details
         payment: {
            method: selectedMethod,
            amount: total,
            currency: 'NGN',
            status: 'pending',
         },

         // Payment method specific details
         paymentDetails: {
            ...(selectedMethod === 'transfer' && {
               bankTransfer: {
                  bank: 'First Bank',
                  accountNumber: '1234567890',
                  accountName: 'Dave Conco',
                  proofOfPaymentFiles: receiptFiles.map((f) => f.name),
               },
            }),
            ...(selectedMethod === 'crypto' && {
               cryptocurrency: {
                  transactionId,
                  preferredCurrency: 'BTC | ETH | USDT',
                  addresses: {
                     btc: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
                     eth: '0x71C7656EC7ab88b098defB751B7401B5f6d8976F',
                     usdt: 'T9yD14Nj9j7xAB4dbGeiX9h8zzCuUj9R5T',
                  },
                  proofOfPaymentFiles: receiptFiles.map((f) => f.name),
               },
            }),
            ...(selectedMethod === 'paystack' && {
               paystack: {
                  status: 'processing',
                  redirectUrl: 'https://www.paystack.com',
               },
            }),
            ...(selectedMethod === 'opera' && {
               operaMiniPay: {
                  status: 'awaiting_payment_proof',
                  transactionId,
                  deepLink: 'celo://wallet/pay?address=0x1234567890abcdef&amount=' + total + '&currency=cUSD',
                  proofOfPaymentFiles: receiptFiles.map((f) => f.name),
               },
            }),
         },

         // Metadata
         metadata: {
            pageTitle: document.title,
            referrer: document.referrer,
            screenResolution: `${window.innerWidth}x${window.innerHeight}`,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
         },
      }

      // Log the complete payload
      console.log('Complete Payment Payload:', orderPayload)

      // Prepare FormData if file uploads exist
      if (receiptFiles.length > 0) {
         const formData = new FormData()
         formData.append('order', JSON.stringify(orderPayload))
         receiptFiles.forEach((file, index) => {
            formData.append(`proofOfPayment_${index}`, file)
         })
         
         console.log('FormData prepared with files:', formData)
      } else if (selectedMethod === 'paystack') {
         console.log('JSON payload ready for Paystack:', orderPayload)
      }

      // Store order details for success page
      const successPageUrl = `/payment-success?orderId=${orderId}&method=${selectedMethod}&email=${encodeURIComponent(email)}${transactionId ? `&txId=${encodeURIComponent(transactionId)}` : ''}`
      
      // Redirect to permanent success page
      clearCart()
      window.location.href = successPageUrl
   }

   if (items.length === 0 && paymentStep === 'method') {
      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 text-center">
               <Icon icon="material-symbols:shopping-cart-off" className="text-7xl text-on-surface-variant/30" />
               <h2 className="font-headline text-3xl text-on-surface">Your cart is empty</h2>
               <p className="text-lg text-on-surface-variant">Add some products before checking out</p>
            </div>
         </main>
      )
   }

   if (paymentStep === 'details') {
      const method = paymentMethods.find((m) => m.id === selectedMethod)

      return (
         <main className="mx-auto max-w-7xl px-6 pb-16 pt-32 lg:px-12">
            <section className="max-w-2xl mx-auto">
               <div className="mb-8 flex items-center gap-4">
                  <button
                     onClick={() => setPaymentStep('method')}
                     className="rounded-full p-2 hover:bg-surface-container-highest"
                  >
                     <Icon icon="material-symbols:arrow-back" className="text-2xl" />
                  </button>
                  <h1 className="font-headline text-3xl font-bold text-on-surface">{method?.label} Payment</h1>
               </div>

               <div className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-8 space-y-8">
                  {/* Order Summary */}
                  <div className="space-y-4">
                     <h2 className="font-headline text-2xl text-on-surface">Order Summary</h2>
                     <div className="space-y-2 text-on-surface-variant">
                        <p>Items: {items.length}</p>
                        <p className="font-bold text-on-surface text-lg">Total: {formatPrice(total)}</p>
                     </div>
                  </div>

                  {/* Payment Instructions / QR Code */}
                  <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                     <h3 className="font-headline text-lg text-on-surface">Payment Instructions</h3>

                     {selectedMethod === 'transfer' && method && (
                        <div className="space-y-3 rounded-xl bg-surface-container p-4">
                           <p className="text-sm font-bold text-on-surface-variant uppercase">Bank Details</p>
                           <div className="space-y-2 font-mono text-sm">
                              <p>Bank: <span className="text-on-surface">{method.bankDetails?.bank}</span></p>
                              <p>Account: <span className="text-on-surface">{method.bankDetails?.account}</span></p>
                              <p>Name: <span className="text-on-surface">{method.bankDetails?.name}</span></p>
                           </div>
                        </div>
                     )}

                     {selectedMethod === 'crypto' && method && (
                        <div className="space-y-3 rounded-xl bg-surface-container p-4">
                           <p className="text-sm font-bold text-on-surface-variant uppercase">Cryptocurrency Addresses</p>
                           <div className="space-y-2 text-sm">
                              <div>
                                 <p className="text-xs text-on-surface-variant">Bitcoin (BTC)</p>
                                 <p className="text-on-surface break-all font-mono text-xs">{method.cryptoAddresses?.btc}</p>
                              </div>
                              <div>
                                 <p className="text-xs text-on-surface-variant">Ethereum (ETH)</p>
                                 <p className="text-on-surface break-all font-mono text-xs">{method.cryptoAddresses?.eth}</p>
                              </div>
                              <div>
                                 <p className="text-xs text-on-surface-variant">USDT (TRC20)</p>
                                 <p className="text-on-surface break-all font-mono text-xs">{method.cryptoAddresses?.usdt}</p>
                              </div>
                           </div>
                        </div>
                     )}

                     {selectedMethod === 'opera' && qrCodeUrl && (
                        <div className="space-y-3 rounded-xl bg-surface-container p-6 text-center">
                           <p className="text-sm font-bold text-on-surface-variant uppercase">Scan to Pay with Opera Mini</p>
                           <div className="flex justify-center">
                              <div className="inline-block rounded-lg bg-white p-4">
                                 <QRCodeSVG 
                                    value={qrCodeUrl}
                                    size={200}
                                    level="H"
                                    marginSize={1}
                                    className="rounded"
                                 />
                              </div>
                           </div>
                           <div className="space-y-1">
                              <p className="text-xs text-on-surface-variant font-mono break-all bg-surface-container-lowest rounded px-3 py-2">
                                 {qrCodeUrl}
                              </p>
                              <p className="text-xs text-on-surface-variant">Amount: {formatPrice(total)} cUSD</p>
                           </div>
                        </div>
                     )}
                  </div>

                  {/* Email */}
                  <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                     <div>
                        <label className="block text-sm font-bold text-on-surface mb-2">Email Address *</label>
                        <input
                           type="email"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="your@email.com"
                           className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary"
                        />
                        <p className="text-xs text-on-surface-variant/60 mt-2">We'll send your package download link here</p>
                     </div>

                     {(selectedMethod === 'crypto' || selectedMethod === 'opera') && (
                        <div>
                           <label className="block text-sm font-bold text-on-surface mb-2">
                              Transaction ID / Hash *
                           </label>
                           <input
                              type="text"
                              value={transactionId}
                              onChange={(e) => setTransactionId(e.target.value)}
                              placeholder={selectedMethod === 'crypto' ? '0x...' : 'Transaction reference'}
                              className="w-full rounded-xl border border-outline-variant/30 bg-surface-container px-4 py-3 text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary font-mono text-sm"
                           />
                           <p className="text-xs text-on-surface-variant/60 mt-2">
                              {selectedMethod === 'crypto'
                                 ? 'Your blockchain transaction hash for verification'
                                 : 'Your payment reference or transaction ID from Opera Mini Pay'}
                           </p>
                        </div>
                     )}
                  </div>

                  {/* File Uploads for Bank Transfer, Crypto, and Opera Mini Pay */}
                  {(selectedMethod === 'transfer' || selectedMethod === 'crypto' || selectedMethod === 'opera') && (
                     <div className="space-y-4 border-t border-outline-variant/20 pt-6">
                        <div className="flex items-center justify-between">
                           <label className="block text-sm font-bold text-on-surface">Proof of Payment *</label>
                           <button
                              onClick={handleAddFile}
                              className="flex items-center gap-2 text-xs font-bold text-primary hover:text-primary/80 transition-colors"
                           >
                              <Icon icon="material-symbols:add-circle-outline" className="text-lg" />
                              Add File
                           </button>
                        </div>

                        {receiptFiles.length > 0 ? (
                           <div className="space-y-2 rounded-xl bg-surface-container p-4">
                              {receiptFiles.map((file, index) => (
                                 <div key={`${file.name}-${index}`} className="flex items-center justify-between rounded-lg bg-surface-container-lowest p-3">
                                    <div className="flex items-center gap-2 min-w-0">
                                       <Icon icon="material-symbols:description" className="text-lg text-primary flex-shrink-0" />
                                       <span className="text-sm text-on-surface truncate">{file.name}</span>
                                       <span className="text-xs text-on-surface-variant flex-shrink-0">({(file.size / 1024).toFixed(1)} KB)</span>
                                    </div>
                                    <button
                                       onClick={() => handleRemoveFile(index)}
                                       className="rounded-full p-1 hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface transition-colors flex-shrink-0"
                                    >
                                       <Icon icon="material-symbols:close" className="text-lg" />
                                    </button>
                                 </div>
                              ))}
                           </div>
                        ) : (
                           <button
                              onClick={handleAddFile}
                              className="flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-outline-variant/30 bg-surface-container p-8 cursor-pointer hover:border-primary/50 transition-colors w-full"
                           >
                              <Icon icon="material-symbols:upload-file" className="text-3xl text-on-surface-variant/50" />
                              <div className="text-center">
                                 <p className="text-sm font-bold text-on-surface">Click to upload or drag file here</p>
                                 <p className="text-xs text-on-surface-variant">PNG, JPG, or PDF (max 5MB each)</p>
                              </div>
                           </button>
                        )}
                     </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-6 border-t border-outline-variant/20">
                     <button
                        onClick={() => setPaymentStep('method')}
                        className="flex-1 rounded-full border border-outline-variant/40 px-6 py-3 text-sm font-bold text-on-surface-variant transition-all hover:bg-surface-container-highest"
                     >
                        Cancel
                     </button>
                     <button
                        onClick={handleConfirmPayment}
                        className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-bold text-on-primary transition-all hover:bg-primary/80 active:scale-95"
                     >
                        Confirm & Pay
                     </button>
                  </div>
               </div>
            </section>
         </main>
      )
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
               {/* Order Summary */}
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

               {/* Payment Methods */}
               <section data-aos="fade-up" data-aos-delay="100" className="rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-6">
                  <h2 className="mb-6 font-headline text-2xl text-on-surface">Select Payment Method</h2>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                     {paymentMethods.map((method) => (
                        <button
                           key={method.id}
                           onClick={() => handleMethodSelect(method.id)}
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
               </section>
            </div>

            {/* Sidebar - Proceed Button */}
            <div className="lg:col-span-1">
               <section data-aos="fade-up" data-aos-delay="200" className="sticky top-24 rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 p-6">
                  <h2 className="mb-6 font-headline text-xl text-on-surface">Order Total</h2>
                  <div className="space-y-4">
                     <div className="flex items-center justify-between text-sm">
                        <span className="text-on-surface-variant">Items</span>
                        <span className="font-bold text-on-surface">{items.length}</span>
                     </div>
                     <div className="flex items-center justify-between border-t border-outline-variant/20 pt-4">
                        <span className="font-bold text-on-surface-variant">Total</span>
                        <span className="font-headline text-2xl font-bold text-primary">{formatPrice(total)}</span>
                     </div>
                  </div>

                  <button
                     onClick={handleProceedDetails}
                     disabled={!selectedMethod}
                     className={`mt-6 w-full rounded-full px-6 py-4 text-sm font-bold uppercase tracking-widest transition-all ${
                        selectedMethod
                           ? 'bg-primary text-on-primary shadow-lg shadow-primary/20 hover:bg-primary/80 active:scale-95'
                           : 'cursor-not-allowed bg-surface-container-high text-on-surface-variant/50'
                     }`}
                  >
                     Proceed to Payment
                  </button>

                  <p className="mt-4 text-center text-xs text-on-surface-variant/60">
                     By confirming, you agree to our terms of service
                  </p>
               </section>
            </div>
         </div>
      </main>
   )
}