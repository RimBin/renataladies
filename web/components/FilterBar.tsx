type Option = { value: string; label: string }

export default function FilterBar({
  q,
  setQ,
  goal,
  setGoal,
  diet,
  setDiet,
  goals,
  diets,
}: {
  q: string
  setQ: (v: string) => void
  goal: string
  setGoal: (v: string) => void
  diet: string
  setDiet: (v: string) => void
  goals: Option[]
  diets: Option[]
}) {
  return (
    <section className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 flex flex-wrap gap-3 items-center">
        <div className="flex-1 min-w-[220px]">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Paieška planuose…"
            className="w-full max-w-sm px-3 py-2 rounded-xl border bg-white"
          />
        </div>
        <select value={goal} onChange={(e) => setGoal(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
          {goals.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <select value={diet} onChange={(e) => setDiet(e.target.value)} className="px-3 py-2 rounded-xl border bg-white">
          {diets.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  )
}
