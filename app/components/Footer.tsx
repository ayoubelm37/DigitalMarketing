'use client';

import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'

export default function Footer() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  return (
    <footer className="bg-[#0a1525] text-white py-12">
     

      {/* Existing Footer Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {/* Logo/Brand Section */}
        <div>
          {/* Replace with your logo */}
          <Link href={`/${currentLocale}/`} >
            <div className=" mr-2 pb-6">
            <Image src="/logotr.png" alt="" width={80} height={40} className="rounded-full" style={{ objectFit: "contain" }} />
            </div>
           
          </Link>
     
          <p className="text-gray-400 text-sm mb-4">
            {t.footer.brandSection.paragraph1}
          </p>
          <p className="text-gray-400 text-sm mb-4">
            {t.footer.brandSection.paragraph2}
          </p>
          {/* Badges - Using text placeholders for now */}
          
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.footer.servicesSection.heading}</h3>
          <ul>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.webDesign}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.seoMorocco}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.graphicDesign}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.socialMediaManagement}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.advertising}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.seoCopywriting}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.photography}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.b2bSeo}</Link></li>
            <li><Link href={`/${currentLocale}/#services`} className="text-gray-400 hover:text-white text-sm">{t.footer.servicesSection.seoAgency}</Link></li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.footer.linksSection.heading}</h3>
          <ul>
            <li><Link href={`/${currentLocale}/`} className="text-gray-400 hover:text-white text-sm">{t.footer.linksSection.home}</Link></li>
            <li><Link href={`/${currentLocale}/about`} className="text-gray-400 hover:text-white text-sm">{t.footer.linksSection.about}</Link></li>
            <li><Link href={`/${currentLocale}/contact`} className="text-gray-400 hover:text-white text-sm">{t.footer.linksSection.contact}</Link></li>
            <li><Link href={`/${currentLocale}/terms`} className="text-gray-400 hover:text-white text-sm">{t.footer.linksSection.terms}</Link></li>
            <li><Link href={`/${currentLocale}/privacy`} className="text-gray-400 hover:text-white text-sm">{t.footer.linksSection.privacy}</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.footer.contactInfoSection.heading}</h3>
          <p className="text-gray-400 cursor-pointer text-sm mb-2">✉️ {t.footer.contactInfoSection.email}</p>

          <h4 className="text-md font-semibold mt-4 mb-2">{t.footer.contactInfoSection.officeHeading}</h4>
          <p className="text-gray-400 text-sm mb-2">📍 {t.footer.contactInfoSection.address}</p>
          <p className="text-gray-400 text-sm mb-2">MA: {t.footer.contactInfoSection.phone}</p>
          
          <p><Link href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(t.footer.contactInfoSection.address)}`} className="text-blue-400 hover:underline text-sm">{t.footer.contactInfoSection.viewMap}</Link></p>

     

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTiktok /></a>
          </div>

          {/* Languages Spoken */}
          <h4 className="text-md font-semibold mb-2">{t.footer.contactInfoSection.languagesHeading}</h4>
          <div className="flex space-x-2">
            {/* Replace with actual flag icons */}
            <span className="text-gray-400">🇫🇷</span>
            <span className="text-gray-400">🇺🇸</span>
            <span className="text-gray-400">🇸🇦</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} HELA. {t.footer.copyright}
      </div>
    </footer>
  );
}