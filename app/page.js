import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import ClientesCarousel from '@/components/ClientesCarousel'
import Services from '@/components/Services'
import Pilares from '@/components/Pilares'
import Portfolio from '@/components/Portfolio'
import Team from '@/components/Team'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ClientesCarousel />
      <Services />
      <Pilares />
      <Portfolio />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  )
}
