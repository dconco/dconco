import type { ReactNode } from 'react'
import { useState, useCallback } from 'react'
import { CartContext } from '../hooks/useCart';
export type LicenseType = 'frontend' | 'backend' | 'full'

export interface Product {
   id: string;
   name: string;
   tagline: string;
   description: string;
   images: string[];
   price: {
      frontend: number;
      backend: number;
      full: number;
   };
   tags: string[];
   demoUrl?: string;
   liveDemo?: boolean;
}

export interface CartItem {
   product: Product;
   license: LicenseType;
}

export type CartContextType = {
   isOpen: boolean;
   openCart: () => void;
   closeCart: () => void;
   items: CartItem[];
   addToCart: (product: Product, license: LicenseType) => void;
   removeFromCart: (productId: string, license: LicenseType) => void;
   clearCart: () => void;
   isInCart: (productId: string, license: LicenseType) => boolean;
}

export function CartProvider({ children }: { children: ReactNode }) {
   const [isOpen, setIsOpen] = useState(false)
   const [items, setItems] = useState<CartItem[]>(() => {
      try { return JSON.parse(sessionStorage.getItem('cart') ?? '[]') } catch { return [] }
   })

   const persist = (next: CartItem[]) => {
      sessionStorage.setItem('cart', JSON.stringify(next))
      return next
   }

   const openCart = useCallback(() => setIsOpen(true), [])
   const closeCart = useCallback(() => setIsOpen(false), [])

   const addToCart = useCallback((product: Product, license: LicenseType) => {
      setItems((prev) => {
         if (prev.some(i => i.product.id === product.id && i.license === license)) return prev
         return persist([...prev, { product, license }])
      })
   }, [])

   const removeFromCart = useCallback((productId: string, license: LicenseType) => {
      setItems((prev) => persist(prev.filter(i => !(i.product.id === productId && i.license === license))))
   }, [])

   const clearCart = useCallback(() => { sessionStorage.removeItem('cart'); setItems([]) }, [])

   const isInCart = useCallback(
      (productId: string, license: LicenseType) => {
         return items.some(
            (item) => item.product.id === productId && item.license === license
         )
      },
      [items]
   )

   return (
      <CartContext.Provider
         value={{
            isOpen,
            openCart,
            closeCart,
            items,
            addToCart,
            removeFromCart,
            clearCart,
            isInCart,
         }}
      >
         {children}
      </CartContext.Provider>
   )
}
