'use client';

import React from 'react';

export default function FinalMarketingSection() {
  return (
    <section className="w-full text-white text-center py-16" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-rose-500 mb-4">
          Finally, a Digital Marketing Agency That Keeps Its Promises and Goes Beyond !
        </h2>
        <p className="text-gray-300 mb-8">
          In just three months and for dozens of clients, our digital marketing agency&apos;s innovative digital marketing solutions
          have led to an impressive 40% average increase in turnover, significantly boosting website traffic, social media
          followers and enhancing average order value through our strategic digital marketing solutions.
        </p>
        <a
          href="/contact" // Assuming a contact page for experts
          className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300 inline-block"
        >
          Talk to our Experts
        </a>
      </div>
    </section>
  );
} 