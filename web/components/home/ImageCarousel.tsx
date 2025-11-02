'use client'

import { useEffect, useRef } from 'react'

export default function ImageCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 0.5 // Scroll speed
      
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }
      
      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  // Array of image paths - will be loaded from public/images/carousel/
  const images = Array.from({ length: 6 }, (_, i) => `/images/carousel/image-${i + 1}.jpg`)
  
  // Duplicate images for seamless loop
  const allImages = [...images, ...images]

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-neutral-50/30 overflow-hidden">
      <div className="rl-container mb-12">
  <div className="rl-section-header">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText rl-section-title">
              Tikros <span className="gradient-text">transformacijos</span>
            </h2>
          </div>
          <div>
            <p className="rl-section-copy">
              Moterys, kurios patikėjo savimi ir pasiekė savo tikslus su Renata Ladies programa.
            </p>
          </div>
        </div>
      </div>
      
      <div className="w-full">
        <div 
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden"
          style={{ scrollBehavior: 'auto' }}
        >
          {allImages.map((src, index) => (
            <div
              key={`${src}-${index}`}
              className="flex-shrink-0 w-[280px] sm:w-[320px] h-[380px] sm:h-[420px] rounded-2xl overflow-hidden shadow-lg bg-neutral-100"
            >
              <img
                src={src}
                alt={`Transformacija ${(index % images.length) + 1}`}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  console.error(`Failed to load image: ${src}`)
                  e.currentTarget.style.display = 'none'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
