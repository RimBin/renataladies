import { GradientButton } from '@/components/ui/GradientButton'

export default function OffersSection() {
  const offers = [
    { title: '1800 kcal Subalansuota 7 d. planas', price: 'Nuo 29€ / mėn.', features: ['7 d. meniu', 'Pirkinių sąrašai', 'Pakaitalai'] },
    { title: '1900 kcal Pervainik 14 d. planas', price: 'Nuo 39€ / mėn.', features: ['14 d. meniu', 'Receptai', 'Pakaitalai'] },
    { title: 'Vegani 1700 kcal 7 d. planas', price: 'Nuo 29€ / mėn.', features: ['7 d. meniu', 'Veg receptai', 'Pakaitalai'] },
  ]

  return (
    <section className="bg-white">
      <div className="rl-section">
        <h2 className="h2 font-extrabold mb-6 rl-section-title">Populiariausi <span className="rl-grad-word">planai</span></h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <div key={index} className="rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-6 flex flex-col">
              <p className="font-semibold text-neutral-800">{offer.title}</p>
              <ul className="mt-4 text-sm text-neutral-700 space-y-2 flex-1">
                {offer.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between">
                <p className="font-medium text-neutral-800">{offer.price}</p>
                <GradientButton
                  as="a"
                  href="/mitybos-planai"
                  withArrow
                  icon="et-circle-cutout"
                  iconHover="slide-right"
                  className="px-4 py-2 text-sm"
                >
                  Įsigyti
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
