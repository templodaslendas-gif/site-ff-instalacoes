import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Gallery from './components/Gallery'
import Brands from './components/Brands'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

export default function App() {
  return (
    <>
      <FloatingWhatsApp />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Brands />
        <Differentials />
        <Testimonials />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
    </>
  )
}