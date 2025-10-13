export default function PersonalPlanSplit() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
      <div>
  <h2 className="h2 font-extrabold">Asmeninis <span className="rl-grad-word">mitybos planas</span> – pagal tavo kūną ir <span className="rl-grad-word">tikslą</span></h2>
        <p className="text-responsive text-neutral-700 mt-3">Kartu parinksime geriausius sprendimus, suderinsime ritmą ir leisime progresui vykti natūraliai.</p>
      </div>
      <div className="grid gap-4">
        <div className="rounded-2xl bg-white shadow p-5">
          <p className="font-semibold">Pagrindiniai duomenys</p>
          <ul className="mt-2 text-responsive text-neutral-700 space-y-1">
            <li>Ūgis, svoris, aktyvumas</li>
            <li>Alimentacijos įpročiai ir mėgstami produktai</li>
            <li>Galimi apribojimai ir tikslai</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white shadow p-5">
          <p className="font-semibold">Mitybos nustatos</p>
          <ul className="mt-2 text-responsive text-neutral-700 space-y-1">
            <li>Kalorijų paskirstymas</li>
            <li>Patogus receptų planas savaitei</li>
            <li>Pakaitalų lentelė ir pirkinių sąrašas</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
