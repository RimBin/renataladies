export default function PersonalPlanSplit() {
  return (
    <section className="bg-white">
      <div className="rl-section grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
        <div>
          <h2 className="h2 font-extrabold rl-section-title">
            Asmeninis <span className="rl-grad-word">mitybos planas</span> – pagal tavo kūną ir <span className="rl-grad-word">tikslą</span>
          </h2>
          <p className="text-neutral-700 text-base mt-4 max-w-xl">
            Kartu parinksime geriausius sprendimus, suderinsime ritmą ir leisime progresui vykti natūraliai.
          </p>
        </div>
        <div className="grid gap-4">
          <div className="rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6">
            <p className="font-semibold text-neutral-800">Pagrindiniai duomenys</p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>Ūgis, svoris, aktyvumas</li>
              <li>Alimentacijos įpročiai ir mėgstami produktai</li>
              <li>Galimi apribojimai ir tikslai</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6">
            <p className="font-semibold text-neutral-800">Mitybos nustatos</p>
            <ul className="mt-3 text-sm text-neutral-700 space-y-2">
              <li>Kalorijų paskirstymas</li>
              <li>Patogus receptų planas savaitei</li>
              <li>Pakaitalų lentelė ir pirkinių sąrašas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
