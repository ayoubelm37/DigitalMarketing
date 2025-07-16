'use client'

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter, usePathname } from 'next/navigation'
import { getTranslations, getDirection, type Locale } from '../lib/i18n'


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)
  const direction = getDirection(currentLocale)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLanguageChange = (locale: Locale) => {
    const currentPath = pathname
    const newPath = currentPath.replace(/^\/[a-z]{2}(?=\/|$)/, `/${locale}`)
    router.push(newPath)
  }

  return (
    <nav className={`w-screen fixed top-0 left-0 z-50 py-2 transition-colors duration-500 ${scrolled ? 'bg-[#0a1525]/95' : 'bg-transparent'}`}  dir={direction}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className="mr-2">
              <Image src="/logo.png" alt="" width={80} height={40} className="rounded-full" />
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-36">
        <div className="hidden md:flex items-center justify-center space-x-4">
          <Link href="/" className="text-white hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            {t.navigation.home}
          </Link>
          <Link href="/about" className="text-white hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            {t.navigation.about}
          </Link>
          <Link href="#services" className="text-white hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            {t.navigation.services}
          </Link>
          <Link href="/contact" className="text-white hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            {t.navigation.contact}
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative group">
            <button className="flex items-center space-x-2 bg-transparent text-white rounded px-2 py-1 focus:outline-none focus:border-white cursor-pointer">
              <Image 
                src={`/images/${currentLocale}.png`}
                alt="Language" 
                width={20} 
                height={15} 
                className="rounded"
              />
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute right-0 mt-2 w-16 rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="py-1">
                <button
                  className="w-full px-2 py-2 hover:bg-slate-800"
                  onClick={() => handleLanguageChange('ar')}
                >
                  <Image src="/images/ar.png" alt="Arabic" width={20} height={15} className="rounded mx-auto" />
                </button>
                <button
                  className="w-full px-2 py-2 hover:bg-slate-800"
                  onClick={() => handleLanguageChange('en')}
                >
                  <Image src="/images/en.png" alt="English" width={20} height={15} className="rounded mx-auto" />
                </button>
                <button
                  className="w-full px-2 py-2 hover:bg-slate-800"
                  onClick={() => handleLanguageChange('fr')}
                >
                  <Image src="/images/fr.png" alt="French" width={20} height={15} className="rounded mx-auto" />
                </button>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-rose-500 hover:bg-[#0a1525] text-white px-4 py-2 rounded-md transition-colors"
          >
            {t.navigation.requestQuote}
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 