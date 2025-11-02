type Plan = {
  id: string
  title: string
  goal: string
  diet: string
  days: number
  kcal: number
  recipes: number
  includes: string[]
  thumb: string
  samplePdf: string
  rating: number
}
import { GradientButton } from '@/components/ui/GradientButton'

export default function PlanCard({ p, onPreview }: { p: Plan; onPreview: (p: Plan) => void }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition">
      <div className="relative aspect-[4/3]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={p.thumb} alt={p.title} className="w-full h-full object-cover" />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="px-2 py-1 text-xs rounded-full bg-black/70 text-white">{p.goal}</span>
          <span className="px-2 py-1 text-xs rounded-full bg-black/70 text-white">{p.diet}</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">{p.title}</h3>
          <span className="text-sm text-yellow-600 font-medium">★ <span className="rl-grad-word">{p.rating}</span></span>
        </div>
        <div className="mt-2 flex flex-wrap gap-2 text-xs text-neutral-600">
          <span className="px-2 py-1 border rounded-full">{p.kcal} kcal</span>
          <span className="px-2 py-1 border rounded-full">{p.recipes} receptų</span>
          <span className="px-2 py-1 border rounded-full">{p.days} d. meniu</span>
        </div>
        <ul className="mt-3 space-y-1 text-sm text-neutral-700">
          {p.includes.map((i, idx) => (
            <li key={idx}>• {i}</li>
          ))}
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <button onClick={() => onPreview(p)} className="w-full border rounded-full py-2 font-semibold text-sm">
            Peržiūrėti
          </button>
          <GradientButton
            as="a"
            href={`/api/checkout?plan=${p.id}`}
            withArrow
            icon="et-circle-cutout"
            iconHover="slide-right"
            className="w-full justify-center py-2 font-semibold text-sm"
          >
            Rinktis
          </GradientButton>
        </div>
      </div>
    </div>
  )
}
