import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import DigitalMarketingSolutions from "../components/DigitalMarketingSolutions"
import ServicesAccordion from "../components/ServicesAccordion"
import AboutCEO from "../components/AboutCEO"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"
import TrustedBy from "../components/TrustedBy"
import { getDirection, type Locale } from "../lib/i18n"
import { getTranslations } from "../lib/i18n"

// Define proper types for Next.js 15
interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateStaticParams() {
  return ["en", "ar", "fr"].map((locale) => ({ locale }))
}

export default async function Page({ params }: PageProps) {
  // Await the params since they're now a Promise in Next.js 15
  const { locale } = await params
  const direction = getDirection(locale as "en" | "ar" | "fr")
  const t = await getTranslations(locale as Locale) // Load translations

  return (
    <main className="min-h-screen" dir={direction}>
      <Navbar />
      <Hero />
      <TrustedBy />
      <DigitalMarketingSolutions />
      <ServicesAccordion />
      <ContactSection />
      <AboutCEO />
      <Footer t={t} /> {/* Pass t here */}
    </main>
  )
}

// Add generateMetadata for better SEO
export async function generateMetadata({ params }: PageProps) {
  const { locale } = await params

  return {
    title: "Digital Marketing Agency",
    description: "Transform your business with our digital marketing solutions",
    openGraph: {
      title: "Digital Marketing Agency",
      description: "Transform your business with our digital marketing solutions",
      locale: locale,
    },
  }
}
