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
  const words = title.trim().split(/\s+/)
  const isGradientWord = (word: string) =>
    gradientWords.some(
      (gw) => gw.toLowerCase() === word.toLowerCase().replace(/[,!?]/g, '')
    )

  const wordVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 0.2 * i,
        ease: [0.25, 0.8, 0.25, 1]
      }
    })
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
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-rlText mb-6 leading-[1.1] whitespace-normal"
            initial="hidden"
            animate="visible"
          >
            <span className="whitespace-nowrap">
              <motion.span
                className={`${isGradientWord(words[0]) ? 'gradient-text' : ''} inline-block`}
                variants={wordVariants}
                custom={0}
              >
                {words[0]}
              </motion.span>
              {'\u00A0'}
              <motion.span
                className={`${isGradientWord(words[1]) ? 'gradient-text' : ''} inline-block`}
                variants={wordVariants}
                custom={1}
              >
                {words[1]}
              </motion.span>
            </span>
            <br />
            <motion.span
              className={`${isGradientWord(words[2]) ? 'gradient-text' : ''} inline-block`}
              variants={wordVariants}
              custom={2}
            >
              {words.slice(2).join(' ')}
            </motion.span>
          </motion.h1>

          {subtitle && (
            <motion.p
              className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed font-medium max-w-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1], delay: 0.15 }}
            >
              {subtitle}
            </motion.p>
          )}

          {/* Children (bullets + avatars) or Quiz */}
          {children ? (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
            >
              {children}

              {/* CTA below children */}
              <motion.div
                className="mt-8 flex flex-col sm:flex-row gap-4 items-start"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1], delay: 0.45 }}
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
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.8, 0.25, 1], delay: 0.3 }}
            >
              <QuizModal />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
