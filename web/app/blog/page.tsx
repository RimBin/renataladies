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
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
      <h1 className="h2 font-extrabold">Tinklaraštis</h1>
      <p className="text-responsive text-neutral-700 mt-2">Nauji įrašai ir patarimai moterims, kurios nori tvariai keisti įpročius.</p>
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
