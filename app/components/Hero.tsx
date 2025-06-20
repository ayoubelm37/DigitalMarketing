"use client"

import Link from "next/link"
import ParticlesBackground from "./particles-background"
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'

export default function Hero() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  return (
    <section className="relative bg-gradient-to-r from-[#0a1525] to-[#4a1525] mx-auto px-4 py-20 md:py-32 text-center overflow-hidden">
      {/* Particles Background - Only for this Hero section */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-6 text-white font-medium tracking-wide">
          {t.hero.tagline}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-rose-500 italic font-light">{t.hero.headline1}</span>{" "}
          <span className="text-white">{t.hero.headline2}</span>
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {t.hero.paragraph1} <span className="text-rose-400">{t.hero.headline1}</span>.
        </p>
        <p className="text-white/80 mb-8">
          {t.hero.paragraph2}
        </p>
        <p className="text-white/80 mb-12">
          {t.hero.paragraph3}
        </p>
        <Link
          href={`/${currentLocale}/contact`}
          className="bg-rose-500 hover:bg-[#0a1525] text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block"
        >
          {t.hero.button}
        </Link>
      </div>
    </section>
  )
}
