import { AppShell, ScrollProgress } from './components/layout/PortfolioShell'
import { Footer } from './components/Footer'
import { Header, type LinkType } from './components/Header'
import Overview from './pages/Overview'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'

export default function App() {
   const [progress, setShowScrollProgress] = useState<number>(0)
   const [active, setActive] = useState<LinkType>('overview')

   useEffect(() => {
      document.addEventListener('scroll', () => {
         const scrollTop = window.scrollY
         const docHeight = document.documentElement.scrollHeight - window.innerHeight
         const scrolled = (scrollTop / docHeight) * 100
         setShowScrollProgress(scrolled)
      })
   }, [progress])

   return (
      <AppShell className="selection:bg-primary-container selection:text-on-primary-container">
         <ScrollProgress style={{ width: progress + '%' }} />
         <Header active={active} />
         <Routes>
            <Route path="/" element={<Overview setActive={setActive} />} />
            <Route path="/about" element={<About setActive={setActive} />} />
            <Route path="/contact" element={<Contact setActive={setActive} />} />
         </Routes>
         <Footer />
      </AppShell>
   )
}
