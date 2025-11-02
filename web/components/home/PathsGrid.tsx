import Link from 'next/link'

export default function PathsGrid() {
  return (
    <section id="paths" className="bg-white">
      <div className="rl-section">
        <h2 className="h2 font-extrabold mb-6 rl-section-title">Pasirink savo kelią į <span className="rl-grad-word">pokyčius</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link
            href="/treniruociu-video"
            className="p-6 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
          >
            <p className="font-semibold text-neutral-800">Treniruočių programos</p>
            <p className="text-sm text-neutral-600 mt-2">Pažingsninės treniruotės ir aiškios užduotys.</p>
          </Link>
          <Link
            href="/mitybos-planai"
            className="p-6 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
          >
            <p className="font-semibold text-neutral-800">Mitybos planai</p>
            <p className="text-sm text-neutral-600 mt-2">Receptai, pirkinių sąrašai ir pakaitalai.</p>
          </Link>
          <Link
            href="/vip"
            className="p-6 rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-shadow"
          >
            <p className="font-semibold text-neutral-800">Asmeninė priežiūra</p>
            <p className="text-sm text-neutral-600 mt-2">1:1 konsultacijos ir savaitinis palaikymas.</p>
          </Link>
        </div>
      </div>
    </section>
  )
}
