'use client'

import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`w-screen fixed top-0 left-0 z-50 py-2 transition-colors duration-500 ${scrolled ? 'bg-[#0a1525]/95' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <div className=" mr-2">
            <Image src="/logoo.png" alt="" width={40} height={40} className="w-10 h-10 rounded-full" />
            </div>
            <span className="text-white text-xl font-bold tracking-wider">HELA</span>
          </Link>
        </div>
        <div className="flex items-center justify-between space-x-28">
        <div className="hidden md:flex items-center justify-center space-x-4">
          <Link href="/about" className="text-white hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            About
          </Link>
          <div className="relative group">
            <button className="flex items-center justify-center text-white  hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-24 h-10  ">
              Services <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-slate-900 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <div className="py-1">
                <Link href="/services/seo" className="block px-4 py-2 text-sm text-white hover:bg-slate-800">
                  SEO Optimization
                </Link>
                <Link href="/services/social" className="block px-4 py-2 text-sm text-white hover:bg-slate-800">
                  Social Media Marketing
                </Link>
                <Link href="/services/content" className="block px-4 py-2 text-sm text-white hover:bg-slate-800">
                  Content Strategy
                </Link>
              </div>
            </div>
          </div>
          <Link href="/blog" className="text-white  hover:bg-[#0a1525] hover:text-rose-500 w-20 h-10 flex items-center justify-center transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-white  hover:bg-[#0a1525] hover:text-rose-500 transition-colors w-20 h-10 flex items-center justify-center">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-4">
        <button className="text-white cursor-pointer">
            <Image src="/images/ar.png" alt="Arabic" width={30} height={20} className="rounded" />
          </button>
          <button className="text-white  cursor-pointer">
            <Image src="/images/eng.png" alt="English" width={30} height={20} className="rounded" />
          </button>
          <button className="text-white  cursor-pointer">
            <Image src="/images/fr.png" alt="French" width={30} height={20} className="rounded" />
          </button>
          <Link
            href="/contact"
            className="bg-rose-500 hover:bg-[#0a1525] text-white px-4 py-2 rounded-md transition-colors"
          >
            REQUEST YOUR QUOTE
          </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 