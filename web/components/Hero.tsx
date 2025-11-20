"use client"
import Gradientizer from '@/components/Gradientizer'
import { CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

type Props = {
  eyebrow?: string
  title: string
  gradientWords?: string[]
  subtitle?: string
  children?: React.ReactNode
  trustBullets?: string[]
}

export default function Hero({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden bg-neutral-200 min-h-screen">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 opacity-40">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative rl-container pt-20 md:pt-28 pb-12 md:pb-16 text-left min-h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 md:gap-12 items-center">
          {/* Left column: content */}
          <div className="space-y-6">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
                {eyebrow}
              </p>
            )}

            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-rlText leading-tight">
                <Gradientizer text={title} words={gradientWords} />
              </h1>
              {subtitle && (
                <p className="text-lg md:text-xl text-neutral-700 max-w-2xl leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>

            {trustBullets && trustBullets.length > 0 && (
              <ul className="mt-6 flex flex-col gap-y-3 text-base text-neutral-700 list-none">
                {trustBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 
                      className="w-6 h-6 text-[#AB57F4] flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110" 
                      aria-hidden="true"
                    />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {children && (
              <div className="mt-8 flex flex-col items-start gap-4">
                {children}
              </div>
            )}
          </div>

          {/* Right column: portrait */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-sm md:max-w-md aspect-[3/4]">
              <Image
                src="/images/hero/Renata-ladies-renata.png"
                alt="Renata - Asmeninė trenerė ir mitybos specialistė"
                fill
                priority
                className="object-contain object-bottom drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
