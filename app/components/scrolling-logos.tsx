"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

interface ScrollingLogosProps {
  logos: {
    src: string
    alt: string
    width: number
    height: number
  }[]
  speed?: number
  pauseOnHover?: boolean
  className?: string
}

export default function ScrollingLogos({
  logos,
  speed = 25,
  pauseOnHover = true,
  className = "",
}: ScrollingLogosProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Always show logos, don't wait for calculations
  return (
    <div className={`w-full overflow-hidden ${className}`}>
      <div className="relative py-8">
        {isMounted ? (
          <motion.div
            className={`flex ${pauseOnHover ? "hover:pause-animation" : ""}`}
            animate={{
              x: [0, -1000],
            }}
            transition={{
              duration: speed,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* Render logos multiple times for seamless loop */}
            {Array.from({ length: 4 }).map((_, setIndex) => (
              <div key={setIndex} className="flex items-center space-x-16 px-8 shrink-0">
                {logos.map((logo, logoIndex) => (
                  <div key={`${setIndex}-${logoIndex}`} className="flex items-center justify-center shrink-0">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-60"
                      onError={(e) => {
                        console.log(`Failed to load image: ${logo.src}`)
                        e.currentTarget.src = "/placeholder.svg?height=60&width=120"
                      }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        ) : (
          // Fallback static version while mounting
          <div className="flex items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center shrink-0">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    console.log(`Failed to load image: ${logo.src}`)
                    e.currentTarget.src = "/placeholder.svg?height=60&width=120"
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}