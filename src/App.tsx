import { AppShell, ScrollProgress } from './components/layout/PortfolioShell';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import Overview from './pages/Overview';

export default function App() {
   return (
      <AppShell className="selection:bg-primary-container selection:text-on-primary-container">
         <ScrollProgress />
         <Header />
         <Overview />
         <Footer />
      </AppShell>
   );
}
