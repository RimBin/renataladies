"use client"
import { useState, useMemo } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import ProgramCard from '@/components/ProgramCard'
import { PROGRAMS } from '@/lib/programData'

export default function ProgramsPage() {
  const [level, setLevel] = useState<string>('')
  const [showPremiumOnly, setShowPremiumOnly] = useState(false)

  const filteredPrograms = useMemo(() => {
    return PROGRAMS.filter((program) => {
      if (level && program.level !== level) return false
      if (showPremiumOnly && !program.isPremium) return false
      return true
    })
  }, [level, showPremiumOnly])

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Treniruočių <span className="gradient-text">programos</span> – struktūruoti planai tavo tikslams
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Pasirink programą pagal savo tikslą – sėdmenų formavimas, nugaros stiprinimas, ar pilvo raumenų vystymas. Kiekviena programa susideda iš kelių video treniruočių.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <select 
              value={level} 
              onChange={(e) => setLevel(e.target.value)} 
              className="px-3 py-2 rounded-xl border bg-white"
            >
              <option value="">Visi lygiai</option>
              <option value="beginner">Pradedantiems</option>
              <option value="intermediate">Vidutinis</option>
              <option value="advanced">Pažengusiems</option>
            </select>

            <label className="flex items-center gap-2 px-3 py-2 rounded-xl border bg-white cursor-pointer">
              <input
                type="checkbox"
                checked={showPremiumOnly}
                onChange={(e) => setShowPremiumOnly(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm">Tik Premium</span>
            </label>

            <div className="ml-auto text-sm text-neutral-500">
              {filteredPrograms.length} programa(-os)
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
        {filteredPrograms.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPrograms.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg mb-4">Nerasta programų pagal pasirinktus filtrus</p>
            <GradientButton
              as="button"
              onClick={() => {
                setLevel('')
                setShowPremiumOnly(false)
              }}
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
            >
              Išvalyti filtrus
            </GradientButton>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Nori <span className="gradient-text">individualų</span> planą?
          </h2>
          <p className="text-lg text-neutral-700 mb-8">
            Rezervuok konsultaciją ir gaukite treniruočių planą, pritaikytą būtent tau.
          </p>
          <GradientButton 
            as="a" 
            href="/konsultacijos" 
            withArrow
            icon="et-circle-cutout"
            iconHover="slide-right"
            className="text-lg px-8 py-4"
          >
            Rezervuoti konsultaciją
          </GradientButton>
        </div>
      </section>
    </>
  )
}
