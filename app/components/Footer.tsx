"use client"

import Link from "next/link"
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa"
import Image from "next/image"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ t }: { t: any }) {
  return (
    <footer className="bg-[#0a1525] text-white py-12">
      {/* New section from the screenshot */}
      <div className="w-full mx-auto px-4 pb-12 flex flex-col gap-4 items-center">
        {/* Contact and Phone */}
        <div className="flex items-center md:items-start text-center md:text-left gap-4">
          {/* Image Placeholder */}
          <div className="mb-4 md:mb-0">
            <Image
              src="/houssam.jpeg"
              alt="Marketing Expert"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full object-cover"
            />
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-2">
              {t?.footer?.contactSection?.heading1 || "Get in touch with our marketing expert"}
            </p>
            <p className="text-gray-300 text-sm mb-4">
              {t?.footer?.contactSection?.heading2 || "Ready to boost your digital presence?"}
            </p>
            <p className="text-red-500 text-2xl font-bold" dir="ltr">+212 635-589948</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">+115</p>
            <p className="text-gray-400 text-sm">{t.footer.stats?.projects }</p>
          </div>
          <div>
            <p className="text-4xl font-bold">+70</p>
            <p className="text-gray-400 text-sm">{t.footer.stats?.companies }</p>
          </div>
          <div>
            <p className="text-4xl font-bold">+4</p>
            <p className="text-gray-400 text-sm">{t.footer.stats?.countries}</p>
          </div>
        </div>

        {/* Appointment Request */}
        <div className="bg-[#1a2b40] p-8 max-w-6xl w-full rounded-lg flex flex-col justify-center gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">{t.footer.appointmentSection?.heading }</h3>
            <p className="text-gray-400 text-sm mb-6">
              {t.footer.appointmentSection?.paragraph }
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
              {t.footer.appointmentSection?.button}
            </button>
          </div>
        </div>
      </div>

      {/* Existing Footer Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {/* Logo/Brand Section */}
        <div>
          <Link href="/">
            <div className="mr-2 pb-6">
              <Image src="/logo.png" alt="Company Logo" width={80} height={40} className="rounded-full" />
            </div>
          </Link>
          <p className="text-gray-400 text-sm mb-4">{t.footer.brandSection?.paragraph1}</p>
          <p className="text-gray-400 text-sm mb-4">
            {t.footer.brandSection?.paragraph2 }
          </p>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.footer.servicesSection?.heading || "SERVICES"}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.webDesign || "Web Design"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.seoMorocco}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.graphicDesign || "Graphic Design"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.socialMediaManagement}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.advertising || "Advertising"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.seoCopywriting || "SEO copywriting en"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.photography || "Photography"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.b2bSeo || "B2b SEO services"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.servicesSection?.seoAgency || "Seo Agency"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">{t.footer.linksSection?.heading || "LINKS"}</h3>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.linksSection?.home || "Home"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.linksSection?.about || "About"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.linksSection?.contact || "Contact"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.linksSection?.terms || "Terms and Conditions of Use"}
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-400 hover:text-white text-sm">
                {t.footer.linksSection?.privacy || "Privacy Policy"}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">
            {t.footer.contactInfoSection?.heading }
          </h3>
          <p className="text-gray-400 text-sm mb-2">
            {t.footer.contactInfoSection?.email }
          </p>
          <h4 className="text-md font-semibold mt-4 mb-2">
            {t.footer.contactInfoSection?.officeHeading }
          </h4>
          <p className="text-gray-400 text-sm mb-2">
            {t.footer.contactInfoSection?.address }
          </p>
          <p className="text-gray-400 text-sm mb-2">
            {t.footer.contactInfoSection?.phone}
          </p>
          <p>
            <a href="#" className="text-blue-400 hover:underline text-sm">
              {t.footer.contactInfoSection?.viewMap }
            </a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaTiktok />
            </a>
          </div>

          {/* Languages Spoken */}
          <h4 className="text-md font-semibold mb-2">
            {t.footer.contactInfoSection?.languagesHeading}
          </h4>
          <div className="flex space-x-2">
            <span className="text-gray-400">🇫🇷</span>
            <span className="text-gray-400">🇺🇸</span>
            <span className="text-gray-400">🇸🇦</span>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} {t.footer?.copyright || "HELA. All rights reserved."}
      </div>
    </footer>
  )
}
