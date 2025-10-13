import { EtCircleArrowUpRightIcon } from '@/components/ui/icons'

export default function OffersSection() {
  const offers = [
    { title: '1800 kcal Subalansuota 7 d. planas', price: 'Nuo 29€ / mėn.', features: ['7 d. meniu', 'Pirkinių sąrašai', 'Pakaitalai'] },
    { title: '1900 kcal Pervainik 14 d. planas', price: 'Nuo 39€ / mėn.', features: ['14 d. meniu', 'Receptai', 'Pakaitalai'] },
    { title: 'Vegani 1700 kcal 7 d. planas', price: 'Nuo 29€ / mėn.', features: ['7 d. meniu', 'Veg receptai', 'Pakaitalai'] },
  ]
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-16">
      <h2 className="h2 font-extrabold mb-6">Populiariausi <span className="rl-grad-word">planai</span></h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {offers.map((o, i) => (
          <div key={i} className="rounded-2xl bg-white shadow p-5 flex flex-col">
            <p className="font-semibold">{o.title}</p>
            <ul className="mt-3 text-responsive text-neutral-700 space-y-1 flex-1">
              {o.features.map((f, idx) => (
                <li key={idx}>• {f}</li>
              ))}
            </ul>
            <div className="mt-4 flex items-center justify-between">
              <p className="font-medium">{o.price}</p>
              <a href="/plans" className="px-4 py-2 rounded-full bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white text-sm font-semibold inline-flex items-center gap-2">
                Įsigyti
                <EtCircleArrowUpRightIcon className="w-5 h-5 text-rlText" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
