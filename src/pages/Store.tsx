import type React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { Icon } from '@iconify/react'
import type { Product, LicenseType } from '../contexts/CartContext'
import { storeProducts } from '../data/storeData'
import { ProductPreviewDialog } from '../components/Store/ProductPreviewDialog'
import { BadgePill } from '../components/ui/BadgePill'
import type { LinkType } from '../components/Header'
import { useCart } from '../hooks/useCart'


export default function Store({ setActive }: { setActive: (active: LinkType) => void }): React.JSX.Element {
   useEffect(() => setActive('store'), [setActive])

   const { addToCart, isInCart, openCart } = useCart()
   const [searchQuery, setSearchQuery] = useState('')
   const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
   const [isPreviewOpen, setIsPreviewOpen] = useState(false)
   const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
   const [pendingAdd, setPendingAdd] = useState<{ product: Product; license: LicenseType } | null>(null)

   const filteredProducts = useMemo(() => {
      if (!searchQuery.trim()) return storeProducts
      const query = searchQuery.toLowerCase()
      return storeProducts.filter(
         (p) =>
            p.name.toLowerCase().includes(query) ||
            p.tagline.toLowerCase().includes(query) ||
            p.tags.some((t) => t.toLowerCase().includes(query))
      )
   }, [searchQuery])

   const handleViewProduct = useCallback((product: Product) => {
      setSelectedProduct(product)
      setIsPreviewOpen(true)
   }, [])

   const handleAddToCartClick = useCallback((product: Product, license: LicenseType) => {
      setPendingAdd({ product, license })
      setIsAddDialogOpen(true)
   }, [])

   const confirmAddToCart = useCallback(() => {
      if (pendingAdd) {
         addToCart(pendingAdd.product, pendingAdd.license)
         setIsAddDialogOpen(false)
         setPendingAdd(null)
         openCart()
      }
   }, [pendingAdd, addToCart, openCart])

   const formatPrice = (amount: number) => {
      return new Intl.NumberFormat('en-NG', {
         style: 'currency',
         currency: 'NGN',
         minimumFractionDigits: 0,
      }).format(amount)
   }

   return (
      <main className="mx-auto max-w-7xl space-y-16 px-6 pb-16 pt-32 lg:px-12">
         <section data-aos="fade-up" className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-outline-soft bg-surface-container-highest px-4 py-2">
               <Icon icon="material-symbols:storefront" className="text-xl text-primary" />
               <span className="text-xs font-nav-link font-medium tracking-normal text-on-surface-variant">
                  DIGITAL PRODUCTS STORE
               </span>
            </div>

            <h1 className="font-headline text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
               Buy <span className="font-serif text-primary italic">Production-Ready</span> Code
            </h1>

            <p className="font-body max-w-2xl text-xl text-on-surface-variant">
               Purchase complete websites, APIs, and applications. Choose frontend, backend, or full package licenses.
            </p>
         </section>

         <section data-aos="fade-up" data-aos-delay="100" className="relative">
            <div className="relative flex items-center gap-3 rounded-xl border border-outline-variant/30 bg-surface-container-low/50 px-4 py-3 backdrop-blur-sm">
               <Icon icon="material-symbols:search" className="text-xl text-on-surface-variant/60" />
               <input
                  type="text"
                  placeholder="Search products by name, tech, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent font-body text-lg text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none"
               />
               {searchQuery && (
                  <button
                     onClick={() => setSearchQuery('')}
                     className="rounded-full p-1 text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                  >
                     <Icon icon="material-symbols:close-rounded" className="text-lg" />
                  </button>
               )}
            </div>
         </section>

         <section className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
               <article
                  key={product.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-low/60 transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10"
               >
                  <div className="relative h-48 overflow-hidden bg-surface-container-highest">
                     {product.images[0] ? (
                        <img
                           src={product.images[0]}
                           alt={product.name}
                           className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                     ) : (
                        <div className="flex h-full w-full items-center justify-center text-on-surface-variant/30">
                           <Icon icon="material-symbols:image-outline" className="text-5xl" />
                        </div>
                     )}

                     <div className="absolute right-3 top-3 flex gap-2">
                        {product.liveDemo && (
                           <button
                              onClick={() => handleViewProduct(product)}
                              className="rounded-full bg-black/60 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm transition-colors hover:bg-black/80"
                           >
                              View Live
                           </button>
                        )}
                     </div>
                  </div>

                  <div className="flex flex-1 flex-col gap-4 p-6">
                     <div className="space-y-2">
                        <h3 className="font-headline text-xl text-on-surface">{product.name}</h3>
                        <p className="text-sm leading-relaxed text-on-surface-variant">{product.tagline}</p>
                     </div>

                     <div className="flex flex-wrap gap-2">
                        {product.tags.slice(0, 3).map((tag) => (
                           <BadgePill key={tag} className="bg-surface-container-highest/50 text-xs text-on-surface-variant">
                              {tag}
                           </BadgePill>
                        ))}
                        {product.tags.length > 3 && (
                           <BadgePill className="bg-surface-container-highest/50 text-xs text-on-surface-variant">
                              +{product.tags.length - 3}
                           </BadgePill>
                        )}
                     </div>

                     <div className="mt-auto space-y-3 pt-4">
                        <div className="flex items-center justify-between">
                           <span className="text-xs font-nav-link uppercase tracking-widest text-on-surface-variant">Starting from</span>
                           <span className="font-headline text-lg font-bold text-primary">
                              {formatPrice(Math.min(...Object.values(product.price).filter((p) => p > 0)))}
                           </span>
                        </div>

                        <div className="flex gap-2">
                           <button
                              onClick={() => handleViewProduct(product)}
                              className="flex-1 rounded-full border border-outline-variant/40 px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                           >
                              Details
                           </button>
                           <button
                              onClick={() => handleAddToCartClick(product, 'full')}
                              className="flex-1 rounded-full bg-primary px-4 py-2.5 text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary/80 active:scale-95"
                           >
                              Add to Cart
                           </button>
                        </div>
                     </div>
                  </div>
               </article>
            ))}
         </section>

         {filteredProducts.length === 0 && (
            <section data-aos="fade-up" className="flex flex-col items-center justify-center gap-4 py-20 text-center">
               <Icon icon="material-symbols:search-off" className="text-6xl text-on-surface-variant/30" />
               <p className="font-body text-xl text-on-surface-variant">No products found</p>
               <p className="text-sm text-on-surface-variant/60">Try adjusting your search terms</p>
            </section>
         )}

         <ProductPreviewDialog
            product={selectedProduct}
            isOpen={isPreviewOpen}
            onClose={() => setIsPreviewOpen(false)}
            onAddToCart={handleAddToCartClick}
            isInCart={isInCart}
         />

         {isAddDialogOpen && pendingAdd && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
               <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setIsAddDialogOpen(false)} />
               <div className="relative z-10 w-full max-w-md rounded-2xl bg-surface-container-low p-8 shadow-2xl">
                  <div className="mb-6 flex items-center gap-3">
                     <Icon icon="material-symbols:add-shopping-cart" className="text-3xl text-primary" />
                     <h3 className="font-headline text-2xl text-on-surface">Add to Cart</h3>
                  </div>

                  <p className="mb-2 text-lg text-on-surface">{pendingAdd.product.name}</p>
                  <p className="mb-6 text-sm text-on-surface-variant">
                     {pendingAdd.license === 'frontend'
                        ? 'Frontend Only'
                        : pendingAdd.license === 'backend'
                        ? 'Backend Only'
                        : 'Full Package'}{' '}
                     — {formatPrice(pendingAdd.product.price[pendingAdd.license])}
                  </p>

                  <div className="flex gap-3">
                     <button
                        onClick={() => setIsAddDialogOpen(false)}
                        className="flex-1 rounded-full border border-outline-variant/40 px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-surface-variant transition-colors hover:bg-surface-container-highest"
                     >
                        Cancel
                     </button>
                     <button
                        onClick={confirmAddToCart}
                        className="flex-1 rounded-full bg-primary px-6 py-3 text-sm font-bold uppercase tracking-widest text-on-primary transition-all hover:bg-primary/80 active:scale-95"
                     >
                        Confirm
                     </button>
                  </div>
               </div>
            </div>
         )}
      </main>
   )
}
