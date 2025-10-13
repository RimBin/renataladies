import Link from 'next/link'

export default function PathsGrid() {
  return (
    <section id="paths" className="max-w-6xl mx-auto px-4 md:px-6 py-12">
      <h2 className="h2 font-extrabold mb-6">Pasirink savo kelią į <span className="rl-grad-word">pokyčius</span></h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link href="/videos" className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition">
          <p className="font-semibold">Treniruočių programos</p>
          <p className="text-responsive text-neutral-600 mt-1">Pažingsninės treniruotės ir aiškios užduotys.</p>
        </Link>
        <Link href="/plans" className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition">
          <p className="font-semibold">Mitybos planai</p>
          <p className="text-responsive text-neutral-600 mt-1">Receptai, pirkinių sąrašai ir pakaitalai.</p>
        </Link>
        <Link href="/vip" className="p-6 rounded-2xl bg-white shadow hover:shadow-md transition">
          <p className="font-semibold">Asmeninė priežiūra</p>
          <p className="text-responsive text-neutral-600 mt-1">1:1 konsultacijos ir savaitinis palaikymas.</p>
        </Link>
      </div>
    </section>
  )
}
