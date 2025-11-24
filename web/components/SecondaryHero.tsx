"use client"
import { GradientButton } from '@/components/ui/GradientButton'
import QuizModal from '@/components/QuizModal'
import Image from 'next/image'
import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SecondaryHeroProps {
  title: string
  gradientWords?: string[]
  subtitle?: string
  children?: ReactNode
  backgroundImage?: string
  ctaText?: string
  ctaHref?: string
}

export default function SecondaryHero({
  title,
  gradientWords = [],
  subtitle,
  children,
  backgroundImage = '/images/Renata call to action.webp',
  ctaText = 'Rinkis savo kelią',
  ctaHref = '#paslaugos'
}: SecondaryHeroProps) {
  const lines = title.trim().split('\n')
  const isGradientWord = (word: string) =>
    gradientWords.some(
      (gw) => gw.toLowerCase() === word.toLowerCase().replace(/[,!?]/g, '')
    )

  const headingVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.04
      }
    }
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      x: -36,
      y: 32,
      scale: 0.9,
      rotate: -5
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 30
      }
    }
  }

  return (
    <section className="relative bg-neutral-200 min-h-[85vh] py-20 sm:py-28 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-60">
        <Image
          src={backgroundImage}
          alt=""
          fill
          priority
          className="object-cover object-[65%_50%] sm:object-center animate-ken-burns"
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Gradient Overlay - stronger for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/55 to-white/25" />

      {/* Content */}
      <div className="relative max-w-[1440px] mx-auto px-4 md:px-6 flex items-center min-h-[75vh]">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.h1
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-rlText mb-6 leading-[1.1]"
            variants={headingVariants}
            initial="hidden"
            animate="visible"
          >
            {lines.map((line, lineIndex) => (
              <div key={lineIndex} className="whitespace-nowrap">
                {line.split(/\s+/).map((word, wordIndex) => (
                  <motion.span
                    key={`${word}-${lineIndex}-${wordIndex}`}
                    className={`${isGradientWord(word) ? 'gradient-text' : ''} inline-block mr-2 sm:mr-3 md:mr-4`}
                    variants={wordVariants}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            ))}
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed font-medium max-w-2xl"
              initial={{ opacity: 0, y: 32, skewY: 3 }}
              animate={{ opacity: 1, y: 0, skewY: 0 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
                delay: 0.45
              }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Children (bullets + avatars) or Quiz */}
          {children ? (
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 280,
                damping: 28,
                delay: 0.5
              }}
            >
              {children}

              {/* CTA below children */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 34, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 320,
                  damping: 24,
                  delay: 0.95
                }}
              >
                <GradientButton
                  as="a"
                  href={ctaHref}
                  withArrow
                  icon="et-circle-cutout"
                  iconHover="slide-right"
                  className="font-semibold text-lg px-8 py-4 shadow-lg"
                >
                  {ctaText}
                </GradientButton>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 26,
                delay: 0.35
              }}
            >
              <QuizModal />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
