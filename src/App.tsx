import { AppShell, ScrollProgress } from './components/layout/PortfolioShell'
import { Footer } from './components/Footer'
import { Header, type LinkType } from './components/Header'
import Overview from './pages/Overview'
import About from './pages/About'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Projects from './pages/Projects'
import AOS from 'aos'

export default function App() {
   const [progress, setShowScrollProgress] = useState<number>(0)
   const [active, setActive] = useState<LinkType>('overview')
   const location = useLocation()

   useEffect(() => {
      AOS.init({
         duration: 700,
         easing: 'ease-out-cubic',
         once: true,
         offset: 20,
      })
   }, [])

   useEffect(() => {
      AOS.refreshHard()
   }, [location.pathname])

   useEffect(() => {
      const onScroll = () => {
         const scrollTop = window.scrollY
         const docHeight = document.documentElement.scrollHeight - window.innerHeight
         const scrolled = (scrollTop / docHeight) * 100
         setShowScrollProgress(scrolled)
      }

      document.addEventListener('scroll', onScroll)
      return () => document.removeEventListener('scroll', onScroll)
   }, [])

   return (
      <AppShell className="selection:bg-primary-container selection:text-on-primary-container">
         <ScrollProgress style={{ width: progress + '%' }} />
         <Header active={active} />
         <Routes>
            <Route path="/" element={<Overview setActive={setActive} />} />
            <Route path="/about" element={<About setActive={setActive} />} />
            <Route path="/projects" element={<Projects setActive={setActive} />} />
            <Route path="/contact" element={<Contact setActive={setActive} />} />
         </Routes>
         <Footer />
      </AppShell>
   )
}
