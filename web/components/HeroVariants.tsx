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

/**
 * VARIANTAS 1: Center Aligned - Tekstas centre, portretas dešinėje
 */
export function HeroVariant1({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-pink-50/40">
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative rl-container pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-center">
          {/* Tekstas centre */}
          <div className="text-center lg:text-left space-y-6 max-w-2xl mx-auto lg:mx-0">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
                {eyebrow}
              </p>
            )}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-rlText leading-tight">
              <Gradientizer text={title} words={gradientWords} />
            </h1>
            {subtitle && (
              <p className="text-xl text-neutral-700 leading-relaxed">{subtitle}</p>
            )}
            {trustBullets && trustBullets.length > 0 && (
              <ul className="flex flex-col gap-y-3 text-base text-neutral-700 list-none items-center lg:items-start">
                {trustBullets.map((bullet, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#AB57F4]" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {children && <div className="flex flex-col items-center lg:items-start gap-4">{children}</div>}
          </div>
          {/* Portretas dešinėje */}
          <div className="relative flex justify-center lg:justify-end">
            <Image src="/images/hero/Renata-ladies-renata.png" alt="Renata" width={500} height={667} priority className="object-contain drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * VARIANTAS 2: Full Width Text Over - Tekstas virš porteto, pilnas plotis
 */
export function HeroVariant2({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-pink-50/40 min-h-[85vh]">
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Portretas background */}
      <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-3/4 opacity-90">
        <Image src="/images/hero/Renata-ladies-renata.png" alt="Renata" fill className="object-contain object-bottom drop-shadow-2xl" priority />
      </div>

      <div className="relative rl-container pt-28 pb-16 min-h-[85vh] flex items-center">
        <div className="max-w-2xl space-y-8">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
              {eyebrow}
            </p>
          )}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-rlText leading-tight">
            <Gradientizer text={title} words={gradientWords} />
          </h1>
          {subtitle && (
            <p className="text-xl text-neutral-700 leading-relaxed backdrop-blur-sm bg-white/60 p-4 rounded-xl">{subtitle}</p>
          )}
          {trustBullets && trustBullets.length > 0 && (
            <ul className="flex flex-col gap-y-3 text-base text-neutral-700 backdrop-blur-sm bg-white/60 p-6 rounded-xl">
              {trustBullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#AB57F4]" />
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {children && <div className="flex flex-col items-start gap-4">{children}</div>}
        </div>
      </div>
    </section>
  )
}

/**
 * VARIANTAS 3: Split Screen - Portretas kairėje, tekstas dešinėje
 */
export function HeroVariant3({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[85vh]">
        {/* Kairė - Portretas su background */}
        <div className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-pink-100 flex items-end justify-center overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <video autoPlay loop muted playsInline className="w-full h-full object-cover">
              <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative w-full max-w-md h-5/6">
            <Image src="/images/hero/Renata-ladies-renata.png" alt="Renata" fill className="object-contain object-bottom drop-shadow-2xl" priority />
          </div>
        </div>

        {/* Dešinė - Tekstas */}
        <div className="bg-white flex items-center">
          <div className="px-8 md:px-16 py-12 space-y-6 max-w-xl">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rlText leading-tight">
              <Gradientizer text={title} words={gradientWords} />
            </h1>
            {subtitle && <p className="text-lg text-neutral-700 leading-relaxed">{subtitle}</p>}
            {trustBullets && trustBullets.length > 0 && (
              <ul className="flex flex-col gap-y-3 text-base text-neutral-700">
                {trustBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-[#AB57F4] flex-shrink-0" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {children && <div className="flex flex-col items-start gap-4">{children}</div>}
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * VARIANTAS 4: Centered Everything - Viskas centre, portretas apačioje
 */
export function HeroVariant4({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-pink-50/40">
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative rl-container pt-20 pb-12 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {eyebrow && (
            <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
              {eyebrow}
            </p>
          )}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-rlText leading-tight">
            <Gradientizer text={title} words={gradientWords} />
          </h1>
          {subtitle && <p className="text-xl text-neutral-700 leading-relaxed max-w-3xl mx-auto">{subtitle}</p>}
          
          {trustBullets && trustBullets.length > 0 && (
            <ul className="flex flex-wrap justify-center gap-6 text-base text-neutral-700">
              {trustBullets.map((bullet, index) => (
                <li key={index} className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle2 className="w-5 h-5 text-[#AB57F4]" />
                  <span className="font-medium">{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {children && <div className="flex flex-col items-center gap-4">{children}</div>}

          {/* Portretas apačioje */}
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] mt-8">
            <Image src="/images/hero/Renata-ladies-renata.png" alt="Renata" fill priority className="object-contain object-bottom drop-shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * VARIANTAS 5: Asymmetric Grid - Asimetrinis išdėstymas su dideliu portretu
 */
export function HeroVariant5({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50/40 via-purple-50/30 to-pink-50/40">
      <div className="absolute inset-0 opacity-20">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="/Video/atsispaudimai filtras.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative rl-container pt-20 md:pt-28 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-12 items-center">
          {/* Tekstas kairėje (mažesnis) */}
          <div className="space-y-6 max-w-xl">
            {eyebrow && (
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-4 py-2 rounded-full shadow-md">
                {eyebrow}
              </p>
            )}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-rlText leading-tight">
              <Gradientizer text={title} words={gradientWords} />
            </h1>
            {subtitle && <p className="text-lg text-neutral-700 leading-relaxed">{subtitle}</p>}
            {trustBullets && trustBullets.length > 0 && (
              <ul className="flex flex-col gap-y-2 text-sm text-neutral-700">
                {trustBullets.map((bullet, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#AB57F4] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
            {children && <div className="flex flex-col items-start gap-4">{children}</div>}
          </div>

          {/* Didelis portretas dešinėje */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-2xl aspect-[3/4]">
              <Image src="/images/hero/Renata-ladies-renata.png" alt="Renata" fill priority className="object-contain object-bottom drop-shadow-2xl" sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
