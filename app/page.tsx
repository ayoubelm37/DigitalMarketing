import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import DigitalMarketingSolutions from "./components/DigitalMarketingSolutions"
import ServicesAccordion from "./components/ServicesAccordion"
import AboutCEO from "./components/AboutCEO"
import ContactSection from "./components/ContactSection"

import FinalMarketingSection from './components/FinalMarketingSection';
import ClientVoicesSection from "./components/ClientVoicesSection"
import Footer from "./components/Footer"
import TrustedBy from "./components/TrustedBy"


export default function Home() {
  return (
    <main className="min-h-screen  ">
      <Navbar />
      <Hero />
      <TrustedBy/>
      <DigitalMarketingSolutions/>
      <ServicesAccordion/>
      <ContactSection/>
      <AboutCEO/>
        <FinalMarketingSection />
        <ClientVoicesSection/>
        <Footer/>
    </main>
  )
}
