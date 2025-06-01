'use client';

import React from 'react';

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
              {/* Placeholder for review logos */}
              <div className="flex items-center space-x-8">
                {/* Add actual logos and ratings here */}
                <div className="flex flex-col items-center">
                    {/* Google Logo */}
                    <span className="font-bold text-lg">Google</span>
                    <span className="text-sm text-gray-400">4.9 ★★★★★</span>
                </div>
                 <div className="flex flex-col items-center">
                    {/* Provenexpert Logo */}
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
                    <span className="font-bold text-lg">Shopify partner</span>
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
              <a
                href="/contact" // Assuming a contact page for consultation
                className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300 self-start"
              >
                Free consultation
              </a>
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