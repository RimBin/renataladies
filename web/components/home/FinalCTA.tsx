'use client'

import { GradientButton } from '@/components/ui/GradientButton'
import Reveal from '@/components/ui/Reveal'
import QuizModal from '@/components/QuizModal'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function FinalCTA() {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [0, 1])
  const contentY = useTransform(scrollYProgress, [0, 0.4], [50, 0])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[600px] sm:min-h-[700px] py-24 sm:py-32 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/cta/2025-R-3.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-6 grid lg:grid-cols-[1.4fr_minmax(260px,360px)] gap-10 items-center min-h-[600px] sm:min-h-[700px] will-change-transform"
      >
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-5xl sm:text-6xl font-bold text-rlText mb-6">
              AR <span className="gradient-text">PASIRUOŠUSI</span> PRADĖTI?
            </h2>
            <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
              Išsirink planą ar paslaugą ir ženk pirmą žingsnį pokyčių link jau šiandien.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <GradientButton
                as="a"
                href="#paslaugos"
                withArrow
                icon="et-circle-cutout"
                iconHover="slide-right"
                className="font-semibold text-lg px-8 py-4"
              >
                Rinkis savo kelią
              </GradientButton>
            </div>

            <QuizModal />
          </div>
        </Reveal>

        <div />
      </motion.div>
    </section>
  )
}
