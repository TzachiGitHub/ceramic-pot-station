import { useLanguage } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Classes from './components/Classes'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  const { language } = useLanguage()

  return (
    <div dir={language === 'he' ? 'rtl' : 'ltr'} className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Classes />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
