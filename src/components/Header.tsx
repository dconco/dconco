import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { HeaderShell } from "./layout/PortfolioShell"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../contexts/CartContext"


export type LinkType = 'overview' | 'about' | 'projects' | 'store' | 'contact'

export const Header = ({ active }: { active: LinkType }): React.JSX.Element => {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   const location = useLocation()
   const { items, openCart } = useCart()

   useEffect(() => {
      setIsMenuOpen(false)
   }, [location.pathname])

   const navItems = [
      { href: '/', label: 'Overview', active: active === 'overview' },
      { href: '/about', label: 'About', active: active === 'about' },
      { href: '/projects', label: 'Projects', active: active === 'projects' },
      { href: '/store', label: 'Store', active: active === 'store' },
      { href: '/contact', label: 'Contact', active: active === 'contact' },
   ]

   return (
      <HeaderShell className="relative bg-slate-900/40">
         <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
            <div className="font-headline cursor-pointer text-2xl font-bold italic text-emerald-400 transition-transform duration-300 active:scale-95">
               @𝒅𝒄𝒐𝒏𝒄𝒐
            </div>

            <div className="hidden items-center gap-10 md:flex">
               {navItems.map((item) => (
                  <Link
                     key={item.label}
                     to={item.href}
                     className={
                        item.active
                           ? 'font-nav-link border-b-2 border-emerald-400 pb-1 text-lg font-medium tracking-tight text-emerald-400'
                           : 'font-nav-link text-lg font-medium tracking-tight text-slate-300 transition-all duration-300 hover:scale-105 hover:text-white'
                     }
                  >
                     {item.label}
                  </Link>
               ))}
            </div>

            <div className="hidden items-center gap-4 md:flex">
               <button
                  onClick={openCart}
                  className="relative rounded-full p-2 text-slate-300 transition-all duration-300 hover:scale-105 hover:text-white"
                  aria-label="Open cart"
               >
                  <Icon icon="material-symbols:shopping-cart" className="text-2xl" />
                  {items.length > 0 && (
                     <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                        {items.length}
                     </span>
                  )}
               </button>
               <a href="https://wa.me/2349121235927" target="_blank" rel="noreferrer">
                  <button className="rounded-full bg-primary-container px-6 py-2.5 font-semibold text-on-primary-container transition-transform duration-300 hover:scale-105 active:scale-95">
                     Hire Me
                  </button>
               </a>
            </div>

            <div className="flex items-center gap-3 md:hidden">
               <button
                  onClick={openCart}
                  className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-high/70 text-on-surface transition-colors hover:bg-surface-container-highest"
                  aria-label="Open cart"
               >
                  <Icon icon="material-symbols:shopping-cart" className="text-lg" />
                  {items.length > 0 && (
                     <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-on-primary">
                        {items.length}
                     </span>
                  )}
               </button>
               <a
                  href="https://wa.me/2349121235927"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/15 text-emerald-300"
               >
                  <Icon icon="mdi:briefcase-outline" className="text-lg" />
               </a>
               <button
                  type="button"
                  aria-label="Toggle menu"
                  aria-expanded={isMenuOpen}
                  onClick={() => setIsMenuOpen((current) => !current)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-container-high/70 text-on-surface transition-colors hover:bg-surface-container-highest"
               >
                  <Icon icon={isMenuOpen ? 'material-symbols:close-rounded' : 'material-symbols:menu-rounded'} className="text-xl" />
               </button>
            </div>
         </nav>

         <div
            className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] z-40 rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-950/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 md:hidden ${
               isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-3 opacity-0'
            }`}
         >
            <div className="mb-4 flex items-center justify-between rounded-xl border border-outline-variant/25 bg-surface-container-low/60 px-3 py-2">
               <span className="font-nav-link text-[10px] uppercase tracking-[0.25em] text-on-surface-variant">Navigation</span>
               <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            </div>

            <div className="grid grid-cols-2 gap-3">
               {navItems.map((item, index) => (
                  <Link
                     key={item.label}
                     to={item.href}
                     onClick={() => setIsMenuOpen(false)}
                     className={`group rounded-xl border px-4 py-4 transition-all duration-300 ${
                        item.active
                           ? 'border-emerald-300/40 bg-emerald-500/15'
                           : 'border-outline-variant/25 bg-surface-container-low/40 hover:border-emerald-400/30 hover:bg-surface-container-high/60'
                     }`}
                     style={{ transitionDelay: `${index * 35}ms` }}
                  >
                     <div className="mb-2 flex items-center justify-between">
                        <span className="font-nav-link text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">0{index + 1}</span>
                        <Icon icon="material-symbols:arrow-outward-rounded" className="text-sm text-emerald-300/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                     </div>
                     <span className={`font-headline text-lg ${item.active ? 'text-emerald-300' : 'text-on-surface'}`}>{item.label}</span>
                  </Link>
               ))}
            </div>

            <button
               onClick={() => {
                  openCart();
                  setIsMenuOpen(false);
               }}
               className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-outline-variant/30 bg-surface-container-low/60 px-6 py-3 font-semibold text-on-surface transition-transform duration-300 active:scale-95"
            >
               <Icon icon="material-symbols:shopping-cart" className="text-lg" />
               Cart ({items.length})
            </button>

            <a href="https://wa.me/2349121235927" target="_blank" rel="noreferrer" className="mt-4 inline-flex w-full">
               <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-semibold text-on-primary-container transition-transform duration-300 active:scale-95">
                  Hire Me
                  <Icon icon="material-symbols:arrow-forward-rounded" className="text-lg" />
               </button>
            </a>
         </div>
      </HeaderShell>
   )
}