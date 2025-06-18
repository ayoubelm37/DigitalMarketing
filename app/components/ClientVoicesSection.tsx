"use client"
import Image from "next/image"
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ParticlesBackground from "./particles-background"
import { getTranslations, type Locale } from '../lib/i18n'
import { usePathname } from 'next/navigation'

export default function ClientVoicesSection() {
  const pathname = usePathname()
  const currentLocale = (pathname.split('/')[1] || 'en') as Locale
  const t = getTranslations(currentLocale)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const testimonials = t.clientVoices.testimonials

  return (
    <section className="w-full bg-gray-50 py-16 px-4 relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.clientVoices.heading}</h2>
          <p className="text-rose-500 text-xl font-semibold italic">{t.clientVoices.subheading}</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Phone Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src="/reviews.jpeg"
                alt="Phone showing client reviews"
                width={600}
                height={800}
                className="object-contain rounded-xl"
                priority
              />
            </div>
          </div>

          {/* Right Column: Testimonials Carousel */}
          <div className="w-full max-w-lg mx-auto lg:mx-0">
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2">
                  <div className="bg-[#1e3a5f] text-white rounded-2xl p-8 shadow-xl">
                    {/* Client Info */}
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-rose-500 flex-shrink-0">
                        <Image
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg text-white">{testimonial.name}</h4>
                        <p className="text-gray-300 text-sm">{testimonial.title}</p>
                      </div>
                    </div>

                    {/* Star Rating */}
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">
                          ★
                        </span>
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-200 text-base leading-relaxed">{testimonial.text}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href={`/${currentLocale}/contact`}
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            {t.clientVoices.button}
          </a>
        </div>
      </div>

      <style jsx global>{`
        .custom-dots {
          bottom: -50px;
        }
        .custom-dots li button:before {
          font-size: 12px;
          color: #cbd5e0;
          opacity: 0.5;
        }
        .custom-dots li.slick-active button:before {
          color: #ef4444;
          opacity: 1;
        }
      `}</style>
    </section>
  )
}
