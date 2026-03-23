import type React from "react"
import { HeaderShell } from "./layout/PortfolioShell"
import { Link } from "react-router-dom"


export type LinkType = 'overview' | 'about' | 'expertise' | 'contact'

export const Header = ({ active }: { active: LinkType }): React.JSX.Element => {
   const navItems = [
      { href: '/', label: 'Overview', active: active === 'overview' },
      { href: '/expertise', label: 'Expertise', active: active === 'expertise' },
      { href: '/about', label: 'About', active: active === 'about' },
      { href: '/contact', label: 'Contact', active: active === 'contact' },
   ]

   return (
      <HeaderShell className="bg-slate-900/40">
         <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
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

            <button className="rounded-full bg-primary-container px-6 py-2.5 font-semibold text-on-primary-container transition-transform duration-300 hover:scale-105 active:scale-95">
               Hire Me
            </button>
         </nav>
      </HeaderShell>
   )
}