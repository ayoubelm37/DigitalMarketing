"use client"

import Link from "next/link"
import ParticlesBackground from "./particles-background"


export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-[#0a1525] to-[#4a1525] mx-auto px-4 py-20 md:py-32 text-center overflow-hidden">
      {/* Particles Background - Only for this Hero section */}
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="mb-6 text-white font-medium tracking-wide">
          DIGITAL MARKETING AGENCY THAT BOOSTS YOUR REVENUE
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="text-rose-500 italic font-light">Digital Marketing Agency</span>{" "}
          <span className="text-white">#1 for demanding businesses</span>
        </h1>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          Grow your business with the <span className="text-rose-400">leading digital marketing agency</span>.
        </p>
        <p className="text-white/80 mb-8">
          With proven expertise and concrete results, our <span className="text-rose-400">digital marketing team</span>{" "}
          is ready to help you conquer the digital world.
        </p>
        <p className="text-white/80 mb-12">
          Join our list of over <span className="font-bold">615 businesses</span> who trust us with their digital
          strategy.
        </p>
        <Link
          href="/contact"
          className="bg-rose-500 hover:bg-[#0a1525] text-white px-8 py-3 rounded-md text-lg font-medium transition-colors inline-block"
        >
          Get a Free Consultation Now!
        </Link>
      </div>
    </section>
  )
}
