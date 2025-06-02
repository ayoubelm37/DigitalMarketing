'use client';

import Link from 'next/link';
import React from 'react';
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#0a1525] text-white py-12">
      {/* New section from the screenshot */}
      <div className="w-full mx-auto px-4 pb-12 flex flex-col gap-4 items-center">
        {/* Contact and Phone */}
        <div className="flex items-center md:items-start text-center md:text-left gap-4">
          {/* Image Placeholder */}
          <div className="mb-4 md:mb-0">
            <Image src="/houssam.jpeg" alt="Marketing Expert" width={96} height={96} className="w-24 h-24 rounded-full object-cover" />
          </div>
          <div>
            <p className="text-gray-300 text-sm mb-2">Ready to speak with a marketing expert?</p>
            <p className="text-gray-300 text-sm mb-4">Contact us.</p>
            <p className="text-red-500 text-2xl font-bold">+212 635-589948</p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold">+920</p>
            <p className="text-gray-400 text-sm">DIGITAL PROJECTS</p>
          </div>
          <div>
            <p className="text-4xl font-bold">+615</p>
            <p className="text-gray-400 text-sm">COMPANIES</p>
          </div>
          <div>
            <p className="text-4xl font-bold">+20</p>
            <p className="text-gray-400 text-sm">COUNTRIES</p>
          </div>
        </div>

        {/* Appointment Request and Revenue */}
        <div className="bg-[#1a2b40] p-8 w-6xl rounded-lg flex flex-col justify-center h-full gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Request your appointment</h3>
            <p className="text-gray-400 text-sm mb-6">Different city? Different country? Different continent? We always stay close to you.</p>
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg">
              Make an appointment
            </button>
          </div>
          <div className="mt-6 text-right">
            <p className="text-gray-300 text-sm">REVENUE GENERATED FOR OUR CLIENTS</p>
            <p className="text-white text-2xl font-bold">$50,231,398,548</p>
          </div>
        </div>
      </div>

      {/* Existing Footer Content */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
        {/* Logo/Brand Section */}
        <div>
          {/* Replace with your logo */}
          <Link href="/" >
            <div className=" mr-2 pb-6">
            <Image src="/logotr.png" alt="" width={80} height={40} className="rounded-full" />
            </div>
           
          </Link>
     
          <p className="text-gray-400 text-sm mb-4">
            Our aim is to democratise digital marketing.
          </p>
          <p className="text-gray-400 text-sm mb-4">
            We are committed to exceeding your expectations. We provide services with
            very high added value while guaranteeing excellent profitability.
          </p>
          {/* Badges - Using text placeholders for now */}
          
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">SERVICES</h3>
          <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Web Design</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Morocco SEO expert</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Graphic Design</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Social Media Management</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Advertising</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">SEO copywriting en</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Photography</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">B2b SEO services</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Seo Agency</Link></li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">LINKS</h3>
          <ul>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Home</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">About</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Contact</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Terms and Conditions of Use</Link></li>
            <li><Link href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">CONTACT</h3>
          <p className="text-gray-400 text-sm mb-2">✉️ akratihoussam@gmail.com</p>

          <h4 className="text-md font-semibold mt-4 mb-2">OUR OFFICE IN MOROCCO</h4>
          <p className="text-gray-400 text-sm mb-2">📍 5ème étage, N°27, Akram Offices, Av. Arabie Saoudite, Tangier 90000</p>
          <p className="text-gray-400 text-sm mb-2">MA: +212 635-589948</p>
          
          <p><a href="#" className="text-blue-400 hover:underline text-sm">Vue map →</a></p>

     

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-400 hover:text-white"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white"><FaTiktok /></a>
          </div>

          {/* Languages Spoken */}
          <h4 className="text-md font-semibold mb-2">WE SPEAK</h4>
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
        &copy; {new Date().getFullYear()} HELA. All rights reserved.
      </div>
    </footer>
  );
}