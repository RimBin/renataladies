export const metadata = {
  title: 'Tinklaraštis — Renataladies',
  description: 'Naujienos, patarimai ir istorijos apie mitybą ir treniruotes.'
}

export default function BlogPage() {
  const posts = [
    { title: 'Kaip pradėti kelyje į discipliną', date: '2025-09-28' },
    { title: 'Subalansuota mityba be streso', date: '2025-09-11' },
    { title: 'Treniruočių pagrindai pradedančiosioms', date: '2025-08-26' },
  ]
  return (
    <section className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            <span className="gradient-text">Tinklaraštis</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">Nauji įrašai ir patarimai moterims, kurios nori tvariai keisti įpročius.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {posts.map((p, i) => (
          <article key={i} className="rounded-2xl bg-white shadow p-5">
            <h3 className="font-semibold">{p.title}</h3>
            <p className="text-xs text-neutral-500 mt-1">{new Date(p.date).toLocaleDateString('lt-LT')}</p>
            <a href="#" className="inline-block mt-4 text-sm font-semibold underline">Skaityti</a>
          </article>
        ))}
      </div>
    </section>
  )
}
