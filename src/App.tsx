import { AppShell, ScrollProgress } from './components/layout/PortfolioShell'
import { Footer } from './components/Footer'
import { Header, type LinkType } from './components/Header'
import { CartDrawer } from './components/Store/CartDrawer'
import Overview from './pages/Overview'
import About from './pages/About'
import Contact from './pages/Contact'
import Store from './pages/Store'
import Checkout from './pages/Checkout'
import PaymentSuccess from './pages/PaymentSuccess'
import { useEffect, useState } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import Projects from './pages/Projects'
import AOS from 'aos'
import { useCart } from './hooks/useCart'


export default function App() {
   const [progress, setShowScrollProgress] = useState<number>(0)
   const [active, setActive] = useState<LinkType>('overview')
   const location = useLocation()
   const navigate = useNavigate()
   const { isOpen: isCartOpen, closeCart } = useCart()

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

   const handleProceedToCheckout = () => {
      closeCart()
      navigate('/checkout')
   }

   return (
      <AppShell className="selection:bg-primary-container selection:text-on-primary-container">
         <ScrollProgress style={{ width: progress + '%' }} />
         <Header active={active} />
         <Routes>
            <Route path="/" element={<Overview setActive={setActive} />} />
            <Route path="/about" element={<About setActive={setActive} />} />
            <Route path="/projects" element={<Projects setActive={setActive} />} />
            <Route path="/store" element={<Store setActive={setActive} />} />
            <Route path="/checkout" element={<Checkout setActive={setActive} />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/contact" element={<Contact setActive={setActive} />} />
         </Routes>
         <Footer />
         <CartDrawer isOpen={isCartOpen} onClose={closeCart} onProceedToCheckout={handleProceedToCheckout} />
      </AppShell>
   )
}
