"use client"

import { useRef, useEffect, useState } from "react"
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
  const [loopCount, setLoopCount] = useState(3)
  const [containerWidth, setContainerWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  // Calculate how many times to duplicate the logos to ensure smooth scrolling
  useEffect(() => {
    if (containerRef.current) {
      const calculateLoops = () => {
        const containerWidth = containerRef.current?.offsetWidth || 0
        const viewportWidth = window.innerWidth
        // Ensure we have enough logos to fill the screen at least twice
        const minLoops = Math.ceil((viewportWidth * 2) / containerWidth) + 1
        setLoopCount(Math.max(minLoops, 3)) // At least 3 loops
        setContainerWidth(containerWidth)
      }

      calculateLoops()
      window.addEventListener("resize", calculateLoops)
      return () => window.removeEventListener("resize", calculateLoops)
    }
  }, [logos])

  return (
    <div className={`w-full overflow-hidden  ${className}`}>
      <div className="relative pt-24">
        
        <motion.div
          className={`inline-flex ${pauseOnHover ? "hover:pause-animation" : ""}`}
          animate={{
            x: [`0%`, `-${100 / loopCount}%`],
          }}
          transition={{
            duration: speed,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {/* First set of logos for measurement */}
          <div ref={containerRef} className="flex items-center space-x-16 px-8">
            {logos.map((logo, index) => (
              <div key={`original-${index}`} className="flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-60"
                />
              </div>
            ))}
          </div>

          {/* Duplicated logos for infinite scrolling */}
          {containerWidth > 0 &&
            Array.from({ length: loopCount - 1 }).map((_, loopIndex) => (
              <div key={`loop-${loopIndex}`} className="flex items-center space-x-16 px-8">
                {logos.map((logo, logoIndex) => (
                  <div key={`${loopIndex}-${logoIndex}`} className="flex items-center justify-center">
                    <Image
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      className="h-12 w-auto object-contain transition-opacity duration-300 hover:opacity-60"
                    />
                  </div>
                ))}
              </div>
            ))}
        </motion.div>
      </div>
    </div>
  )
}
