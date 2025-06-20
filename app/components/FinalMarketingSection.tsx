'use client';

import React from 'react';
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'

export default function FinalMarketingSection() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  return (
    <section className="w-full text-white text-center py-16 bg-[#0a1525]">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-500 mb-4">
          {t.finalMarketingSection.heading}
        </h2>
        <p className="text-gray-300 mb-8">
          {t.finalMarketingSection.paragraph}
        </p>
        <a
          href={`/${currentLocale}/contact`}
          className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300 inline-block"
        >
          {t.finalMarketingSection.button}
        </a>
      </div>
    </section>
  );
} 