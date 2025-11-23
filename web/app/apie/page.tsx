"use client"

import Image from 'next/image'
import { useCallback, useEffect, useRef, useState } from 'react'

import { GradientButton } from '@/components/ui/GradientButton'

type Achievement = {
  year: string
  title: string
  isHighlight?: boolean
}

const ACHIEVEMENTS: Achievement[] = [
  { year: '2007', title: 'Debiutas, Lietuvos čempionė ir absoliuti nugalėtoja.', isHighlight: true },
  { year: '2009', title: 'Lietuvos taurės laimėtoja, 2 vieta Lietuvos čempionate, 3 vieta Baltijos šalių mače.', isHighlight: true },
  {
    year: '2011',
    title:
      'Lietuvos čempionė ir absoliuti nugalėtoja; Vilniaus ir Jurbarko pirmenybių čempionė; Europos sporto žaidynių auksas (Šiauliai); 2 vieta Baltijos mače; 4 vieta IFBB London Cup.',
    isHighlight: true,
  },
  {
    year: '2012',
    title:
      'Savickas Classic čempionė; Vilniaus taurės čempionė; IFBB „Grand Prix Pepa" absoliuti čempionė (Čekija); 1 vieta „Tatranský pohár" (Slovakija); 3 vieta „Arnold Classic Europe" (Madrid); 3 vieta Pasaulio taurėje.',
    isHighlight: true,
  },
  {
    year: '2013',
    title:
      'Lietuvos taurės čempionė; 2 vieta „Arnold Classic Europe" (Madrid); 2 vieta „Savickas Classic"; Prezidentės Dalios Grybauskaitės medalis „Už nuopelnus sportui".',
    isHighlight: true,
  },
  {
    year: '2014',
    title: '„Savickas Classic" čempionė; IFBB „Grand Prix Pepa" čempionė; 2 vieta „Nicole Wilkins Classic"; 4 vieta „Arnold Classic Europe".',
    isHighlight: true,
  },
  { year: '2015', title: 'Varžybinė pertrauka.', isHighlight: true },
  {
    year: '2016',
    title:
      'Sugrįžimas: Lietuvos čempionė ir absoliuti nugalėtoja; Jurbarko pirmenybių čempionė; Europos čempionato bronza (3 vieta); „Diamond Cup" sidabras (2 vieta); Pasaulio čempionato 5 vieta; „Grand Prix Pepa" absoliuti čempionė; KKSD medalis „Už sporto pergales".',
    isHighlight: true,
  },
  { year: '2017', title: 'Renata Ladies komandos įkūrėja, komanda tarp sėkmingiausių Lietuvoje.', isHighlight: true },
  { year: '2018', title: 'Suteiktas IFBB PRO statusas (Elite Pro).', isHighlight: true },
  {
    year: '2019+',
    title: 'Trenerės veikla Kaune, „Renata Ladies" studijos įkūrėja, moterų sporto stovyklos ir seminarai.',
    isHighlight: true,
  },
]

function AchievementItem({ achievement, index, total }: { achievement: Achievement; index: number; total: number }) {
  const isLeft = index % 2 === 0
  const isFirst = index === 0
  const isLast = index === total - 1
  const [isVisible, setIsVisible] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (itemRef.current) {
      observer.observe(itemRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={itemRef}
      className={`relative grid grid-cols-[auto_1fr] md:grid-cols-[1fr_auto_1fr] md:items-center gap-4 md:gap-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative flex items-stretch md:flex-col md:items-center md:justify-center col-start-1 md:col-start-2">
        {!isFirst && (
          <span className="hidden md:block w-0.5 flex-1 bg-gradient-to-b from-transparent via-[#E8D4FF] to-[#F28ACD]/40" aria-hidden="true" />
        )}
        <span
          className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full border-4 transition-all duration-500 ${
            achievement.isHighlight
              ? 'border-transparent bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] text-white shadow-[0_16px_32px_rgba(171,87,244,0.45)] hover:shadow-[0_20px_40px_rgba(171,87,244,0.6)] hover:scale-110'
              : 'border-[#E5E0EC] bg-white text-[#AB57F4] shadow-md hover:shadow-lg hover:scale-105'
          } ${isVisible ? 'scale-100' : 'scale-75'}`}
        >
          <svg
            className={`h-8 w-8 transition-transform duration-500 ${isVisible ? 'scale-100' : 'scale-50'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 2H6v5a6 6 0 0 0 12 0V2Z" />
            <path d="M6 5H4a2 2 0 0 0 0 4h2M18 5h2a2 2 0 1 1 0 4h-2" />
            <path d="M9 13v2c0 .6-.4 1-1 .3C6.5 14.8 6 16.7 6 19" />
            <path d="M15 13v2c0 .6.4 1 1 .3 1.5-.5 2 1.4 2 3.7" />
            <path d="M5 22h14" />
          </svg>
        </span>
        {!isLast && (
          <span className="hidden md:block w-0.5 flex-1 bg-gradient-to-b from-[#F28ACD]/50 via-[#AB57F4]/30 to-transparent" aria-hidden="true" />
        )}
      </div>

      <div
        className={`col-start-2 md:row-start-1 md:max-w-xl ${
          isLeft ? 'md:col-start-1 md:justify-self-end md:text-right' : 'md:col-start-3 md:justify-self-start'
        }`}
      >
        <div
          className={`relative rounded-2xl border-2 px-7 py-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
            achievement.isHighlight
              ? 'border-transparent bg-gradient-to-br from-white via-white to-pink-50/50 backdrop-blur-sm shadow-[0_20px_60px_-24px_rgba(171,87,244,0.6)]'
              : 'border-[#F1EDF7] bg-white hover:shadow-[0_20px_50px_-22px_rgba(148,108,196,0.35)]'
          } ${isLeft ? 'md:pl-8' : 'md:pr-8'}`}
        >
          <div className={`mb-4 flex items-center gap-3 ${isLeft ? 'md:justify-end' : ''}`}>
            <span
              className={`inline-flex items-center rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-[0.15em] ${
                achievement.isHighlight ? 'bg-gradient-to-r from-[#F28ACD]/20 to-[#AB57F4]/20 text-[#AB57F4]' : 'bg-neutral-100 text-neutral-500'
              }`}
            >
              {achievement.year}
            </span>
          </div>
          <p
            className={`text-base leading-relaxed md:text-base ${
              achievement.isHighlight
                ? 'bg-gradient-to-r from-[#F28ACD] via-[#AB57F4] to-[#7C3AED] bg-clip-text text-transparent font-semibold'
                : 'text-neutral-700'
            }`}
          >
            {achievement.title}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ApiePage() {
  const timelineRef = useRef<HTMLDivElement | null>(null)
  const autoScrollInterval = useRef<ReturnType<typeof setInterval> | null>(null)
  const restartTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isHoveringRef = useRef(false)

  const stopAutoScroll = useCallback(() => {
    if (autoScrollInterval.current) {
      clearInterval(autoScrollInterval.current)
      autoScrollInterval.current = null
    }
  }, [])

  const startAutoScroll = useCallback(() => {
    const timeline = timelineRef.current
    if (autoScrollInterval.current || !timeline) {
      return
    }

    const maxScroll = timeline.scrollHeight - timeline.clientHeight
    if (maxScroll <= 0 || timeline.scrollTop >= maxScroll) {
      return
    }

    autoScrollInterval.current = setInterval(() => {
      const timeline = timelineRef.current
      if (!timeline) {
        return
      }

      if (isHoveringRef.current) {
        return
      }

      const maxScrollDistance = timeline.scrollHeight - timeline.clientHeight
      if (maxScrollDistance <= 0) {
        return
      }

      const nextScroll = timeline.scrollTop + 0.5
      if (nextScroll >= maxScrollDistance) {
        timeline.scrollTo({ top: maxScrollDistance })
        stopAutoScroll()
        return
      }

      timeline.scrollTo({ top: nextScroll })
    }, 16)
  }, [stopAutoScroll])

  useEffect(() => {
    const timeline = timelineRef.current
    if (!timeline) {
      return
    }

    const handleMouseEnter = () => {
      isHoveringRef.current = true
      stopAutoScroll()
    }

    const handleMouseLeave = () => {
      isHoveringRef.current = false
      startAutoScroll()
    }

    const handleManualInteraction = () => {
      stopAutoScroll()
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current)
      }

      restartTimeoutRef.current = setTimeout(() => {
        if (!isHoveringRef.current) {
          startAutoScroll()
        }
      }, 2500)
    }

    timeline.addEventListener('mouseenter', handleMouseEnter)
    timeline.addEventListener('mouseleave', handleMouseLeave)
    timeline.addEventListener('wheel', handleManualInteraction, { passive: true })
    timeline.addEventListener('touchstart', handleManualInteraction, { passive: true })

    return () => {
      timeline.removeEventListener('mouseenter', handleMouseEnter)
      timeline.removeEventListener('mouseleave', handleMouseLeave)
      timeline.removeEventListener('wheel', handleManualInteraction)
      timeline.removeEventListener('touchstart', handleManualInteraction)
    }
  }, [startAutoScroll, stopAutoScroll])

  useEffect(() => {
    startAutoScroll()

    return () => {
      stopAutoScroll()
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current)
        restartTimeoutRef.current = null
      }
    }
  }, [startAutoScroll, stopAutoScroll])

  return (
    <main className="bg-gradient-to-b from-[#FFF5FB] via-white to-white">
      <section className="relative overflow-hidden bg-white pt-24 md:pt-32 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="grid gap-8 md:grid-cols-[3fr_2fr] items-end mb-12">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0 leading-tight">
                Renata Marcinkutė — <span className="gradient-text whitespace-nowrap">Tavo kelionės vadovė</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Sveikatos ir fitneso trenerė, mitybos konsultantė ir motyvatorė, padedanti tūkstančiams moterų pasiekti tikslus ir atrasti save.
              </p>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-8 items-start">
            {/* Left Column - Video */}
            <div className="space-y-6">
              {/* Video sekcija su gradient border */}
              <div className="relative rounded-[32px] p-1 bg-gradient-to-br from-[#F28ACD] via-[#AB57F4] to-[#F28ACD]">
                <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/16] w-full">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="/Video/Video.mov" type="video/quicktime" />
                    <source src="/Video/Video.mov" type="video/mp4" />
                    Jūsų naršyklė nepalaiko video.
                  </video>
                </div>
              </div>
            </div>

            {/* Middle Column - Content */}
            <div className="space-y-6">
              <p className="text-base text-neutral-600 leading-relaxed">
                Čia dalinuosi pagrindiniais etapais ir pasiekimais, kurie formavo mano patirtį bei bendruomenę. Leiskis į kelionę kartu su manimi.
              </p>

              {/* Patirties statistika */}
              <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-6">
                <h3 className="text-xl font-bold gradient-text mb-4 text-center">Mano kelionė</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">14 metų dailiojo čiuožimo patirties</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">20 metų fitneso patirties</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">18 metų treniravimo patirties</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">10 metų dalyvavimo varžybose</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">5 metai merginų ruošimo varžyboms (ne viena LT čempionė)</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold">✓</span>
                    <span className="text-sm text-neutral-800">5 metai ir toliau – Renata Ladies įkūrimas</span>
                  </div>
                </div>
              </div>
              
              {/* Mano misija sekcija */}
              <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-6">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-neutral-800 leading-relaxed mb-3 text-sm sm:text-base">
                  Mano misija – padėti tau tapti <span className="gradient-text font-bold">geriausia savimi</span>. 
                  Ne per prievartą, ne per badavimą, o per meilę sau, subalansuotą mitybą ir judesį, kuris teikia džiaugsmą.
                </p>
                <p className="text-center text-xs sm:text-sm text-neutral-600">
                  Jau daugiau nei 15 metų moterys renkasi mane kaip savo trenerę ne tik dėl programų, 
                  bet ir dėl <strong>palaikymo, supratimo ir tikėjimo</strong>, kad jos sugeba!
                </p>
              </div>
            </div>

            {/* Right Column - Photo Card */}
            <div className="relative flex w-full justify-center">
              <div className="w-full max-w-sm rounded-[32px] border border-white/40 bg-white/70 p-6 shadow-[0_30px_80px_-40px_rgba(171,87,244,0.55)] backdrop-blur">
                <div className="relative h-96 overflow-hidden rounded-[28px] bg-gradient-to-b from-pink-50 to-purple-50">
                  <Image
                    src="/images/about/about.jpg"
                    alt="Renata Marcinkutė"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 320px, 400px"
                  />
                </div>
                <p className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.3em] text-[#AB57F4]">
                  IFBB Elite Pro
                </p>
                <p className="mt-2 text-center text-sm text-neutral-600 mb-6">
                  Trenerė, studijos įkūrėja ir moterų bendruomenės lyderė
                </p>
                
                <div className="flex flex-col gap-3">
                  <GradientButton
                    as="a"
                    href="/mitybos-planai"
                    withArrow
                    icon="et-circle-cutout"
                    iconHover="slide-right"
                    className="w-full justify-center px-6 py-3 text-sm font-semibold"
                  >
                    Peržiūrėti planus
                  </GradientButton>
                  <a
                    href="/kontaktai"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#28262C] px-6 py-3 text-sm font-semibold text-[#28262C] transition hover:bg-[#28262C] hover:text-white"
                  >
                    Susisiekti
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE - Zigzag Layout */}
      <section className="bg-gradient-to-b from-white to-pink-50/30 py-20">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Metų <span className="gradient-text">laikrodis</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Nuo pirmųjų startų kultūrizme iki Renata Ladies studijos įkūrimo – kiekvienas žingsnis formavo mano misiją padėti moterims atrasti harmoniją.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {ACHIEVEMENTS.filter(a => a.isHighlight).map((achievement, index) => (
              <div
                key={`z-${achievement.year}-${index}`}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Year Circle */}
                <div className="flex-shrink-0 w-32 h-32 rounded-full bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] flex items-center justify-center shadow-2xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{achievement.year}</div>
                    <svg className="w-8 h-8 text-white mx-auto mt-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 2H6v5a6 6 0 0 0 12 0V2Z" />
                      <path d="M6 5H4a2 2 0 0 0 0 4h2M18 5h2a2 2 0 1 1 0 4h-2" />
                      <path d="M5 22h14" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border-l-4 border-[#F28ACD]">
                  <p className="text-neutral-800 leading-relaxed">{achievement.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
