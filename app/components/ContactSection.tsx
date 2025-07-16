'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

export default function ContactSection() {
  const locales = [
    { code: 'en', label: 'English', flag: '/images/en.png' },
    { code: 'ar', label: 'Arabic', flag: '/images/ar.png' },
    { code: 'fr', label: 'French', flag: '/images/fr.png' },
  ];

  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (locale: string) => {
    // Remove the current locale from the path and add the new one
    const segments = pathname.split('/');
    if (locales.some(l => l.code === segments[1])) {
      segments[1] = locale;
    } else {
      segments.splice(1, 0, locale);
    }
    router.push(segments.join('/'));
  };

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
              {/* Review logos */}
              <div className="flex items-center space-x-8">
                {/* Google Logo */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/google.jpg"
                    width={40}
                    height={40}
                    alt="Google"
                    className="w-10 h-10 object-contain rounded bg-white p-1 shadow"
                  />
                  <span className="font-bold text-lg">Google</span>
                  <span className="text-sm text-gray-400">4.9 ★★★★★</span>
                </div>
                {/* Provenexpert Logo */}
                <div className="flex flex-col items-center">
                    <Image
                   
                    width={40}
                    height={40}

                    className="w-10 h-10 object-contain rounded bg-white p-1 shadow"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJsYXllciIgdmlld0JveD0iMCAwIDYzOSA2MzkuNzgiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDojZDljNTk0O30uY2xzLTJ7ZmlsbDojZmZmO308L3N0eWxlPjwvZGVmcz48dGl0bGU+cHJvdmVuZXhwZXJ0LWljb248L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTY0NS41LDMyNS42MWMwLDE3Ni44OS0xNDMuMzksMzIwLjI4LTMxOS41LDMyMC4yOFM2LjUsNTAyLjUsNi41LDMyNS42MSwxNDkuODksNi4xMSwzMjYsNi4xMSw2NDUuNSwxNDkuNSw2NDUuNSwzMjUuNjFaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNi41IC02LjExKSI+PC9wYXRoPjxwYXRoIGNsYXNzPSJjbHMtMiIgZD0iTTQ1My44LDE2MS4xOCwyNzEuNDUsMzQzLjUzLDE5OC4yLDI3MC4yOCwxMjUsMzQzLjUzbDE0Ni41LDE0Ny4yOSwyNTUuNi0yNTUuNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02LjUgLTYuMTEpIj48L3BhdGg+PC9zdmc+" alt={''}/>
                <span className="font-bold text-lg">Provenexpert</span>
                  <span className="text-sm text-gray-400">4.5 ★★★★★</span>
                </div>
                {/* Clutch Logo */}
                <div className="flex flex-col items-center">
                  <Image
                   
                    src="https://images.crunchbase.com/image/upload/c_pad,f_auto,q_auto:eco,dpr_1/amzxshshja4hdd8qhuln"
                    width={40}
                    height={40}
                    alt="Clutch"
                  />
                  <span className="font-bold text-lg">Clutch</span>
                  <span className="text-sm text-gray-400">4.6 ★★★★★</span>
                </div>
                {/* Shopify Partner Logo */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/shopify.webp"
                    width={40}
                    height={40}
                    alt="Shopify Partners"
                    className="w-10 h-10 object-contain rounded bg-white p-1 shadow"
                  />
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