"use client"
import { useMemo, useState } from 'react'
import Hero from '@/components/Hero'
import FilterBar from '@/components/FilterBar'
import PlanCard from '@/components/PlanCard'
import FAQ from '@/components/FAQ'
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
      <Hero
        eyebrow="MITYBOS PLANAI"
        title="Išsirink mitybos planą pagal tikslą"
        gradientWords={["mitybos", "planą"]}
        subtitle="Subalansuoti planai su receptais, pirkinių sąrašais ir pakaitalais – kad kasdienis rėžimas būtų paprastas ir skanus."
      />
      <FilterBar q={q} setQ={setQ} goal={goal} setGoal={setGoal} diet={diet} setDiet={setDiet} goals={GOALS} diets={DIETS} />

      <section className="max-w-6xl mx-auto px-4 md:px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <PlanCard key={p.id} p={p} onPreview={setPreview} />
          ))}
        </div>
        {list.length === 0 && <div className="text-center py-20 text-neutral-500">Nerasta pagal pasirinktus filtrus.</div>}
      </section>

      <FAQ />

      <section className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1">
            <h2 className="h2 font-extrabold">
              Pasiruošusi maitintis <span className="rl-grad-word">lengviau</span>?
            </h2>
            <p className="text-neutral-600 mt-2 text-responsive">Išsirink planą ir gauk visą savaitę sudėliotą meniu su receptais ir pirkinių sąrašais.</p>
          </div>
          <a href="/plans" className="bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-6 py-3 rounded-full font-semibold">
            Rinktis planą
          </a>
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
