import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DigitalMarketingSolutions from "../components/DigitalMarketingSolutions"
import ServicesAccordion from "../components/ServicesAccordion"
import AboutCEO from "../components/AboutCEO"
import ContactSection from "../components/ContactSection"

import FinalMarketingSection from '../components/FinalMarketingSection';
import ClientVoicesSection from "../components/ClientVoicesSection"
import Footer from "../components/Footer"
import TrustedBy from "../components/TrustedBy"

import { getDirection } from '../lib/i18n'

export async function generateStaticParams() {
  return ['en', 'ar', 'fr'].map((locale) => ({ locale }))
}

export default function Home({ params: { locale } }: { params: { locale: string } }) {
  const direction = getDirection(locale as 'en' | 'ar' | 'fr')
  return (
    <main className="min-h-screen  " dir={direction}>
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