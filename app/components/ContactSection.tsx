'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function ContactSection() {
  return (
    <>
      <section className="w-full bg-[#0a1525] text-white ">
        <div className='mx-auto my-12 px-4 max-w-6xl'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12">
            {/* Left Column: Agency Information */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                #1 Digital Marketing Agency
              </h2>
              <p className="text-rose-500 text-xl font-semibold mb-6">
                in digital marketing solutions
              </p>
              <p className="text-gray-300 mb-4">
                We&apos;re more than just a digital marketing solutions agency; we are
                storytellers, innovators, and partners in your digital journey.
              </p>
              <p className="text-gray-300 mb-8">
                We bring a personal touch to every project, ensuring that your brand doesn&apos;t
                just participate but shines in the digital world.
              </p>
              {/* Email Link */}
              <a href="mailto:info@youragency.com" className="text-rose-400 underline hover:text-rose-600 font-semibold mb-4" style={{ display: 'inline-block' }}>
                ✉️ info@youragency.com
              </a>
              {/* Placeholder for review logos */}
              <div className="flex items-center space-x-8">
                {/* Add actual logos and ratings here */}
                <div className="flex flex-col items-center">
                    {/* Google Logo */}
                    <div className="elementor-widget-container"> <div className="elementor-icon-wrapper"> 
                      <div className="elementor-icon"> <i aria-hidden="true" className="fab fa-google"></i> 
                      </div>
                       </div>
                       </div>
                    <span className="font-bold text-lg">Google</span>
                    <span className="text-sm text-gray-400">4.9 ★★★★★</span>
                </div>
                 <div className="flex flex-col items-center">
                    {/* Provenexpert Logo */}
                    <div className="elementor-widget-container"> <Image loading="lazy" decoding="async" width="639" height="639" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJsYXllciIgdmlld0JveD0iMCAwIDYzOSA2MzkuNzgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZDljNTk0O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cHJvdmVuZXhwZXJ0LWljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY0NS41LDMyNS42MWMwLDE3Ni44OS0xNDMuMzksMzIwLjI4LTMxOS41LDMyMC4yOFM2LjUsNTAyLjUsNi41LDMyNS42MSwxNDkuODksNi4xMSwzMjYsNi4xMSw2NDUuNSwxNDkuNSw2NDUuNSwzMjUuNjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi41IC02LjExKSI+PC9wYXRoPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ1My44LDE2MS4xOCwyNzEuNDUsMzQzLjUzLDE5OC4yLDI3MC4yOCwxMjUsMzQzLjUzbDE0Ni41LDE0Ny4yOSwyNTUuNi0yNTUuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjUgLTYuMTEpIj48L3BhdGg+PC9zdmc+" className="attachment-full size-full wp-image-3487" alt="Provenexpert" title="Accueil 14"/> </div>
                    <span className="font-bold text-lg">Provenexpert</span>
                    <span className="text-sm text-gray-400">4.5 ★★★★★</span>
                </div>
                
                 <div className="flex flex-col items-center">
                    {/* Clutch Logo */}
                    <span className="font-bold text-lg">Clutch</span>
                    <span className="text-sm text-gray-400">4.6 ★★★★★</span>
                </div>
                 <div className="flex flex-col items-center">
                    {/* Shopify Partner Logo */}
                    <div className="elementor-icon"> <svg xmlns="http://www.w3.org/2000/svg" width="60px" height="60px" viewBox="-18 0 292 292" preserveAspectRatio="xMidYMid"><path d="M223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-1.703-1.703-5.029-1.185-6.32-.805-.19.056-3.388 1.043-8.678 2.68-5.18-14.906-14.322-28.604-30.405-28.604-.444 0-.901.018-1.358.044C129.31 3.407 123.644.779 118.75.779c-37.465 0-55.364 46.835-60.976 70.635-14.558 4.511-24.9 7.718-26.221 8.133-8.126 2.549-8.383 2.805-9.45 10.462C21.3 95.806.038 260.235.038 260.235l165.678 31.042 89.77-19.42S223.973 58.8 223.775 57.34zM156.49 40.848l-14.019 4.339c.005-.988.01-1.96.01-3.023 0-9.264-1.286-16.723-3.349-22.636 8.287 1.04 13.806 10.469 17.358 21.32zm-27.638-19.483c2.304 5.773 3.802 14.058 3.802 25.238 0 .572-.005 1.095-.01 1.624-9.117 2.824-19.024 5.89-28.953 8.966 5.575-21.516 16.025-31.908 25.161-35.828zm-11.131-10.537c1.617 0 3.246.549 4.805 1.622-12.007 5.65-24.877 19.88-30.312 48.297l-22.886 7.088C75.694 46.16 90.81 10.828 117.72 10.828z" fill="#95BF46"></path><path d="M221.237 54.983c-1.055-.088-23.383-1.743-23.383-1.743s-15.507-15.395-17.209-17.099c-.637-.634-1.496-.959-2.394-1.099l-12.527 256.233 89.762-19.418S223.972 58.8 223.774 57.34c-.201-1.46-1.48-2.268-2.537-2.357" fill="#5E8E3E"></path><path d="M135.242 104.585l-11.069 32.926s-9.698-5.176-21.586-5.176c-17.428 0-18.305 10.937-18.305 13.693 0 15.038 39.2 20.8 39.2 56.024 0 27.713-17.577 45.558-41.277 45.558-28.44 0-42.984-17.7-42.984-17.7l7.615-25.16s14.95 12.835 27.565 12.835c8.243 0 11.596-6.49 11.596-11.232 0-19.616-32.16-20.491-32.16-52.724 0-27.129 19.472-53.382 58.778-53.382 15.145 0 22.627 4.338 22.627 4.338" fill="#FFF"></path></svg> </div>
                    <span className="font-bold text-lg">shopify partners</span>
                    <span className="text-sm text-gray-400">4.8 ★★★★★</span>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-[#0a1525] p-8 rounded-xl shadow-lg border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Tell Us About Your Project
              </h3>
              {/* Placeholder for step indicator */}
              <div className="flex justify-between mb-8 text-gray-400 text-sm">
                <span>1 INFORMATIONS</span>
                <span>2 DESIRED SERVICE</span>
                <span>3 DETAILS</span>
              </div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">Name and Surname</label>
                  <input type="text" id="name" className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 bg-[#1a2b3b] text-white"/>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
                  <input type="email" id="email" className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 bg-[#1a2b3b] text-white"/>
                </div>
                 <div>
                  <label htmlFor="employees" className="block text-sm font-medium text-gray-300">Number of Employees</label>
                  <input type="text" id="employees" className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 bg-[#1a2b3b] text-white"/>
                </div>
                 <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone number</label>
                  <input type="text" id="phone" className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:ring-rose-500 focus:border-rose-500 bg-[#1a2b3b] text-white"/>
                </div>
                <button type="submit" className="w-full bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold py-3 px-4 rounded-md transition-colors duration-300">
                  Next
                </button>
              </form>
            </div>
          </div>
          {/* Existing Partner Section - now integrated */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-12 items-center">
            {/* Left Column: Partner Description */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                Our Partners for digital marketing solution
              </h2>
              <p className="text-gray-300 mb-8">
                At Rhillane, we take pride in collaborating with a diverse range of partners in the digital world,
                creating a dynamic and innovative network.
              </p>
              <Link
                href="/contact" // Assuming a contact page for consultation
                className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300 self-start"
              >
                Free consultation
              </Link>
            </div>

            {/* Right Column: Partner Logos */}
            <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
              {/* Placeholder for logos - replace with actual img tags */}
              <div className="text-center">
                <p className="text-sm text-gray-400">Google Cloud</p>
                <p className="font-bold text-lg">Partner</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">Meta</p>
                <p className="font-bold text-lg">Business Partner</p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-400">aws</p>
                <p className="font-bold text-lg">partner<br />network</p>
              </div>
              <div className="text-center">
                {/* Elementor logo placeholder */}
                <span className="font-bold text-lg">elementor</span>
              </div>
              <div className="text-center">
                {/* WordPress logo placeholder */}
                <span className="font-bold text-lg">WordPress</span>
              </div>
              <div className="text-center">
                {/* Shopify partners logo placeholder */}
                <span className="font-bold text-lg">shopify partners</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    
    </>
  );
} 