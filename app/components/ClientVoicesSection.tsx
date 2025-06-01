"use client"
import Image from "next/image"
import Slider from "react-slick"
// Import css files
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ParticlesBackground from "./particles-background"

export default function ClientVoicesSection() {
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

  const testimonials = [
    {
      name: "Safa Nassir",
      title: "Directrice Commerciale",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Pendant cette collaboration avec Rhillane, l'équipe ��tait si encourageante, énergique et engageante. Je me suis rendu compte que l'Agence RHILLANE est axée sur la prestation d'un excellent service à ses clients.",
    },
    {
      name: "Afeline Bexon",
      title: "CEO",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "A great understanding of our needs and creative proposals that exceed our expectations. An efficient team both from a design and technical standpoint.",
    },
    {
      name: "Albert Durant",
      title: "Directeur Marketing",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "L'équipe de Rhillane Digital se distingue non seulement par son expertise technique approfondie mais également par une créativité sans bornes qui insuffle à chaque projet de stratégies innovantes.",
    },
    {
      name: "Sarah Martin",
      title: "CEO, TechStart",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "The results we've achieved with Rhillane's digital marketing strategies have exceeded our expectations. Their data-driven approach and creative solutions have significantly boosted our online presence.",
    },
    {
      name: "Marc Dubois",
      title: "Marketing Director, InnovateCo",
      image: "/placeholder.svg?height=80&width=80",
      rating: 5,
      text: "Rhillane's team has transformed our digital marketing strategy. Their expertise in SEO and social media management has helped us reach new audiences and grow our business significantly.",
    },
  ]

  return (
    <section className="w-full bg-gray-50 py-16 px-4 relative overflow-hidden">
      <ParticlesBackground />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Voices of Our Clients</h2>
          <p className="text-rose-500 text-xl font-semibold italic">Inspiring Success Stories to Discover.</p>
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
            href="/contact"
            className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-bold text-lg px-12 py-4 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Request your Free quote now
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
