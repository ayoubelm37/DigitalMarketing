"use client"
import { useState } from "react";
import { FaPaintBrush, FaCode, FaSearch, FaFacebook, FaHeart, FaPenNib, FaEnvelope, FaUserFriends, FaCamera } from "react-icons/fa";
import Image from 'next/image';

const services = [
  {
    icon: <FaPaintBrush className="text-2xl text-rose-500" />,
    title: "Graphic Design",
    details: "We create visually stunning designs that capture your brand's essence and engage your audience.",
  },
  {
    icon: <FaCode className="text-2xl text-rose-500" />,
    title: "Website Creation",
    details: "Custom websites built for performance, aesthetics, and conversion, tailored to your business needs.",
  },
  {
    icon: <FaSearch className="text-2xl text-rose-500" />,
    title: "SEO Optimization",
    details: "Boost your online visibility and attract more organic traffic with our expert SEO strategies.",
  },
  {
    icon: <FaFacebook className="text-2xl text-rose-500" />,
    title: "Facebook Ads and Google Ads:",
    details: "Maximize your ROI with targeted ad campaigns on Facebook and Google, reaching your ideal customers.",
  },
  {
    icon: <FaHeart className="text-2xl text-rose-500" />,
    title: "Social Media Management:",
    details: "Engage and grow your audience with consistent, creative, and strategic social media management.",
  },
  {
    icon: <FaPenNib className="text-2xl text-rose-500" />,
    title: "Copywriting captivant",
    details: "Compelling copy that tells your story, drives action, and builds your brand voice.",
  },
  {
    icon: <FaEnvelope className="text-2xl text-rose-500" />,
    title: "Powerful Email Marketing",
    details: "Nurture leads and boost conversions with personalized, high-impact email campaigns.",
  },
  {
    icon: <FaUserFriends className="text-2xl text-rose-500" />,
    title: "Exceptional Lead Generation",
    details: "Attract and convert high-quality leads to grow your business and increase sales.",
  },
  {
    icon: <FaCamera className="text-2xl text-rose-500" />,
    title: "Photography and Videography:",
    details: "Professional photos and videos that showcase your brand and captivate your audience.",
  },
];

export default function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="w-full max-w-6xl mx-auto my-12 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1525] mb-8 text-center">
        Our digital marketing solutions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="space-y-4">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow flex flex-col transition-all duration-300 border border-gray-100"
              >
                <button
                  className="flex items-center w-full px-6 py-5 focus:outline-none justify-between"
                  onClick={() => toggleAccordion(idx)}
                  aria-expanded={openIndex === idx}
                >
                  <div className="flex items-center gap-3">
                    {service.icon}
                    <span className="font-semibold text-lg text-[#0a1525]">{service.title}</span>
                  </div>
                  <span className="text-2xl text-gray-400">
                    {openIndex === idx ? "–" : "+"}
                  </span>
                </button>
                {openIndex === idx && (
                  <div className="px-6 pb-5 text-gray-700 text-base animate-fade-in">
                    {service.details}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end">
          <Image src="/GIF-Ipad-eng.gif" alt="iPad with digital marketing solutions" width={400} height={300} className="w-full max-w-sm md:max-w-md lg:max-w-lg mb-8" />

          <div className="grid grid-cols-2 gap-8 text-center mb-8">
            <div>
              <p className="text-rose-500 text-sm font-bold">ORGANIC TRAFFIC</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">+77%</p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">ROI REVOLUTION</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">+241%</p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">IMPRESSIONS</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">+81%</p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">ENGAGEMENT</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">+73%</p>
            </div>
          </div>

          <a
            href="/contact"
            className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300"
          >
            Request your Free quote now
          </a>
        </div>
      </div>
    </section>
  );
} 