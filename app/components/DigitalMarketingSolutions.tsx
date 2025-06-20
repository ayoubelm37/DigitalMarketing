'use client'

import Image from "next/image";
import Link from "next/link";
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'

export default function DigitalMarketingSolutions() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  const cards = [
    {
      img: "/img1.webp",
      title: t.digitalMarketingSolutions.card1.title,
      text: (
        <>
          {t.digitalMarketingSolutions.card1.text1}<br /><br />
          {t.digitalMarketingSolutions.card1.text2}<br /><br />
          <span className="font-bold">{t.digitalMarketingSolutions.card1.text3}</span>
        </>
      ),
    },
    {
      img: "/img2.webp",
      title: t.digitalMarketingSolutions.card2.title,
      text: (
        <>
          {t.digitalMarketingSolutions.card2.text1}<br /><br />
          <span className="font-bold">{t.digitalMarketingSolutions.card2.text2}</span>
        </>
      ),
    },
    {
      img: "/img3.webp",
      title: t.digitalMarketingSolutions.card3.title,
      text: (
        <>
          {t.digitalMarketingSolutions.card3.text1}<br /><br />
          <span className="font-bold">{t.digitalMarketingSolutions.card3.text2}</span>
        </>
      ),
    },
    {
      img: "/img4.webp",
      title: t.digitalMarketingSolutions.card4.title,
      text: (
        <>
          {t.digitalMarketingSolutions.card4.text1}<br /><br />
          <span className="font-bold">{t.digitalMarketingSolutions.card4.text2}</span>
        </>
      ),
    },
  ];

  return (
    <section className="relative  py-20 px-4 z-20 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a1525] mb-4 leading-tight">
          {t.digitalMarketingSolutions.heading}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-[#0a1525] rounded-2xl shadow-lg p-8 flex flex-col items-start justify-between min-h-[420px]">
            <Image src={card.img} alt={card.title} width={400} height={220} className="rounded-lg mb-6 w-full object-cover" />
            <h3 className="text-2xl font-bold text-rose-500 mb-4 text-left leading-snug">{card.title}</h3>
            <p className="text-white/90 text-base mb-6 text-left">{card.text}</p>
            <span className="text-rose-500 text-2xl">↗</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link
          href={`/${currentLocale}/contact`}
          className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300"
        >
          {t.digitalMarketingSolutions.button}
        </Link>
      </div>
      {/* Zigzag SVG shape at the bottom */}
      <div className="absolute left-0 bottom-0 w-full pointer-events-none">
        <svg viewBox="0 0 1920 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-24">
          <polygon 
            points="0,80 480,60 960,90 1440,60 1920,100 1920,120 0,120" 
            fill=""  // <-- light gray, adjust as needed
          />
          <polyline 
            points="0,80 480,60 960,90 1440,60 1920,100" 
            stroke="#ed1c24" 
            strokeWidth="4" 
            fill="none" 
          />
        </svg>
      </div>
    </section>
  );
}
