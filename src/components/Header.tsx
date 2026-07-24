import React, { useEffect, useState } from "react"
import { Icon } from "@iconify/react"
import { HeaderShell } from "./layout/PortfolioShell"
import { Link, useLocation } from "react-router-dom"
import { useCart } from "../hooks/useCart"


export type LinkType = 'overview' | 'about' | 'projects' | 'tools' | 'store' | 'contact'

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
      { href: '/tools', label: 'Tools', active: active === ('tools' as LinkType) },
      { href: '/store', label: 'Store', active: active === 'store' },
   ]

   return (
      <HeaderShell className="relative border-b border-white/[0.06] bg-[#0b1326]/80">
         <nav className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-6 py-4 md:px-8 lg:py-5">
            <Link to="/" className="group flex shrink-0 items-center gap-3" aria-label="Dave Conco home">
               <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl border border-primary/40 bg-primary/10 font-nav-link text-sm font-bold text-primary transition-colors group-hover:bg-primary/20">
                  DC
                  <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#0b1326] bg-primary" />
               </span>
               <span className="leading-none">
                  <span className="block font-headline text-lg font-bold tracking-tight">
                     <span className="text-primary">dave</span><span className="text-on-surface">conco</span>
                  </span>
                  <span className="mt-1 hidden font-nav-link text-[9px] uppercase tracking-[0.28em] text-on-surface-variant/70 sm:block">Independent builder</span>
               </span>
            </Link>

            <div className="hidden items-center gap-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] p-1 lg:flex">
               {navItems.map((item) => (
                  <Link
                     key={item.label}
                     to={item.href}
                     className={
                        item.active
                           ? 'group flex items-center gap-2 rounded-xl bg-primary/10 px-4 py-2.5 font-nav-link text-[11px] font-bold uppercase tracking-[0.14em] text-primary'
                           : 'group flex items-center gap-2 rounded-xl px-4 py-2.5 font-nav-link text-[11px] font-medium uppercase tracking-[0.14em] text-on-surface-variant transition-colors hover:bg-white/[0.05] hover:text-on-surface'
                     }
                  >
                     <span className={`text-[9px] transition-colors ${item.active ? 'text-primary/70' : 'text-on-surface-variant/35 group-hover:text-primary/60'}`}>
                        {String(navItems.indexOf(item) + 1).padStart(2, '0')}
                     </span>
                     {item.label}
                  </Link>
               ))}
            </div>

            <div className="hidden items-center gap-5 lg:flex">
               <div className="hidden items-center gap-2 xl:flex">
                  <span className="relative flex h-2 w-2">
                     <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                     <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <span className="font-nav-link text-[10px] uppercase tracking-[0.16em] text-on-surface-variant/75">Open to select work</span>
               </div>
               <span className="h-6 w-px bg-white/10" />
               <button
                  onClick={openCart}
                  className="relative rounded-xl p-2 text-on-surface-variant transition-colors hover:bg-white/[0.05] hover:text-primary"
                  aria-label="Open cart"
               >
                  <Icon icon="material-symbols:shopping-bag-outline-rounded" className="text-xl" />
                  {items.length > 0 && (
                     <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 font-nav-link text-[9px] font-bold text-on-primary">
                        {items.length}
                     </span>
                  )}
               </button>
               <Link to="/contact" className="group inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-nav-link text-[11px] font-bold uppercase tracking-[0.12em] text-on-primary transition-all hover:bg-primary-fixed hover:shadow-lg hover:shadow-primary/10 active:scale-95">
                  Start a conversation
                  <Icon icon="material-symbols:arrow-outward-rounded" className="text-base transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
               </Link>
            </div>

            <div className="flex items-center gap-3 lg:hidden">
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
            className={`absolute left-4 right-4 top-[calc(100%+0.5rem)] z-40 rounded-2xl border border-outline-variant/35 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-emerald-950/70 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 lg:hidden ${
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

            <a href="/contact" className="mt-4 inline-flex w-full">
               <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-container px-6 py-3 font-semibold text-on-primary-container transition-transform duration-300 active:scale-95">
                  Contact
                  <Icon icon="material-symbols:arrow-forward-rounded" className="text-lg" />
               </button>
            </a>
         </div>
      </HeaderShell>
   )
}
