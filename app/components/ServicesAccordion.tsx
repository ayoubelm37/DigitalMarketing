"use client"
import { useState } from "react";
import { FaPaintBrush, FaCode, FaSearch, FaFacebook, FaHeart, FaPenNib, FaEnvelope, FaUserFriends, FaCamera } from "react-icons/fa";
import Image from 'next/image';
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'
import CountUp from "./CountUp";

export default function ServicesAccordion() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  const services = [
    {
      icon: <FaPaintBrush className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service1.title,
      details: t.servicesAccordion.service1.details,
    },
    {
      icon: <FaCode className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service2.title,
      details: t.servicesAccordion.service2.details,
    },
    {
      icon: <FaSearch className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service3.title,
      details: t.servicesAccordion.service3.details,
    },
    {
      icon: <FaFacebook className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service4.title,
      details: t.servicesAccordion.service4.details,
    },
    {
      icon: <FaHeart className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service5.title,
      details: t.servicesAccordion.service5.details,
    },
    {
      icon: <FaPenNib className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service6.title,
      details: t.servicesAccordion.service6.details,
    },
    {
      icon: <FaEnvelope className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service7.title,
      details: t.servicesAccordion.service7.details,
    },
    {
      icon: <FaUserFriends className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service8.title,
      details: t.servicesAccordion.service8.details,
    },
    {
      icon: <FaCamera className="text-2xl text-rose-500" />,
      title: t.servicesAccordion.service9.title,
      details: t.servicesAccordion.service9.details,
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="services" className="w-full max-w-6xl mx-auto my-12 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a1525] mb-8 text-center">
        {t.servicesAccordion.heading}
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
              <p className="text-rose-500 text-sm font-bold">{t.servicesAccordion.stats.traffic}</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">
                <CountUp end={77} prefix="+" suffix="%" />
              </p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">{t.servicesAccordion.stats.roi}</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">
                <CountUp end={241} prefix="+" suffix="%" />
              </p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">{t.servicesAccordion.stats.impressions}</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">
                <CountUp end={81} prefix="+" suffix="%" />
              </p>
            </div>
            <div>
              <p className="text-rose-500 text-sm font-bold">{t.servicesAccordion.stats.engagement}</p>
              <p className="text-[#0a1525] text-4xl font-extrabold">
                <CountUp end={73} prefix="+" suffix="%" />
              </p>
            </div>
          </div>

          <a
            href={`/${currentLocale}/contact`}
            className="bg-[#ed1c24] hover:bg-[#c81018] text-white font-bold text-lg px-12 py-4 rounded-lg shadow transition-colors duration-300"
          >
            {t.servicesAccordion.button}
          </a>
        </div>
      </div>
    </section>
  );
} 