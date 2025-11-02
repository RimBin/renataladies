"use client"
import { useMemo, useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import FilterBar from '@/components/FilterBar'
import PlanCard from '@/components/PlanCard'
import FAQ from '@/components/FAQ'
import NutritionCalculator from '@/components/NutritionCalculator'
import { PLANS, GOALS, DIETS } from '@/lib/planData'

type Plan = (typeof PLANS)[number]

export default function PlansPage() {
  const [q, setQ] = useState('')
  const [goal, setGoal] = useState('')
  const [diet, setDiet] = useState('')
  const [preview, setPreview] = useState<Plan | null>(null)

  const list = useMemo(() => {
    return PLANS.filter(
      (p) => (!q || p.title.toLowerCase().includes(q.toLowerCase())) && (!goal || p.goal === goal) && (!diet || p.diet === diet),
    )
  }, [q, goal, diet])

  return (
    <>
      <section className="bg-neutral-50 pt-28 md:pt-36">
        <div className="rl-container pb-12 sm:pb-16">
          <div className="rl-section-header">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText rl-section-title">
                Asmeninis <span className="gradient-text">mitybos planas</span> – pagal tavo kūną ir <span className="gradient-text">tikslą</span>
              </h1>
            </div>
            <div>
              <p className="rl-section-copy">
                Įvesk savo duomenis. Pagal juos paruošiu asmeninį mitybos planą (PDF) ir atsiųsiu per 24 val.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Nutrition Calculator */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-8">
        <NutritionCalculator />
      </section>

      <FilterBar q={q} setQ={setQ} goal={goal} setGoal={setGoal} diet={diet} setDiet={setDiet} goals={GOALS} diets={DIETS} />

      <section className="bg-white">
        <div className="rl-section">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PlanCard key={p.id} p={p} onPreview={setPreview} />
          ))}
          </div>
          {list.length === 0 && <div className="text-center py-20 text-neutral-500">Nerasta pagal pasirinktus filtrus.</div>}
        </div>
      </section>

      <section className="bg-white">
        <FAQ />
      </section>

      <section className="bg-white border-t">
        <div className="rl-section flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="h2 font-extrabold">
              Pasiruošusi maitintis <span className="rl-grad-word">lengviau</span>?
            </h2>
            <p className="text-neutral-600 mt-2 text-responsive">Išsirink planą ir gauk visą savaitę sudėliotą meniu su receptais ir pirkinių sąrašais.</p>
          </div>
          <GradientButton as="a" href="/mitybos-planai" withArrow icon="et-circle-cutout" iconHover="slide-right">
            Rinktis planą
          </GradientButton>
        </div>
      </section>

      {preview && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setPreview(null)}>
          <div className="bg-white rounded-xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="px-6 py-3 border-b font-semibold flex justify-between items-center flex-shrink-0">
              <span>{preview.title}</span>
              <button onClick={() => setPreview(null)} className="text-2xl leading-none hover:opacity-70">&times;</button>
            </div>
            <div className="p-4 overflow-y-auto flex-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/plans/Mitybos-plano-pavyzdys-1.webp" alt="Mitybos plano pavyzdys" className="w-full h-auto" />
            </div>
            <div className="px-6 py-4 text-sm text-neutral-600 flex gap-3 border-t flex-shrink-0">
              <span className="px-2 py-1 border rounded-full">{preview.kcal} kcal</span>
              <span className="px-2 py-1 border rounded-full">{preview.recipes} receptų</span>
              <span className="px-2 py-1 border rounded-full">{preview.days} d. meniu</span>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
