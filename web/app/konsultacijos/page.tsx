"use client"
import { useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import ConsultationBooking from '@/components/ConsultationBooking'
import ConsultationCard from '@/components/ConsultationCard'
import { CONSULTATIONS, CONSULTATION_PROCESS, CONSULTATION_FAQ } from '@/lib/consultationData'

export default function ConsultationsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  return (
    <>
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Asmeninės <span className="gradient-text">konsultacijos</span> – individualus planas tavo tikslams
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-neutral-600">
                1:1 pokalbis su manimi, kur kartu aptarsime tavo tikslus, sudėliosime planą ir atsakysiu į visus klausimus.
              </p>
              <GradientButton
                as="a"
                href="#rezervacija"
                withArrow
                icon="et-circle-cutout"
                iconHover="slide-right"
                className="inline-flex items-center justify-center text-base font-semibold px-6 py-3"
              >
                Rezervuoti konsultaciją
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
      <section id="rezervacija" className="py-16 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Rezervuok <span className="gradient-text">konsultaciją</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto">
              Pasirink konsultacijos tipą, datą ir laiką.
            </p>
          </div>
          <ConsultationBooking />
        </div>
      </section>
    </>
  )
}
