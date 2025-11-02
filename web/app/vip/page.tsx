import { GradientButton } from '@/components/ui/GradientButton'
import Link from 'next/link'

const PACKAGES = [
  { id: 'vip-1', title: '1 mėn. priežiūra', price: '129€', points: ['Asmeninis planas', 'Savaitinis patikrinimas', 'Chat palaikymas'], href: '/api/checkout?plan=vip-1' },
  { id: 'vip-3', title: '3 mėn. priežiūra', price: '339€', points: ['Asmeninis planas', 'Savaitinis patikrinimas', 'Progreso adaptacijos'], href: '/api/checkout?plan=vip-3' },
  { id: 'vip-6', title: '6 mėn. priežiūra', price: '639€', points: ['Išsamus planas', 'Nuolatinės adaptacijos', 'Prioritetinis palaikymas'], href: '/api/checkout?plan=vip-6' },
]

export default function VipPage() {
  return (
    <main>
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Asmeninė <span className="gradient-text">priežiūra</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                1:1 konsultacijos, savaitiniai patikrinimai ir individualus planas – viskas online.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PACKAGES.map((p) => (
            <div key={p.id} className="rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden">
              <div className="p-6">
                <h3 className="font-bold text-xl text-rlText mb-2">{p.title}</h3>
                <div className="text-4xl font-extrabold text-rlText mb-4">{p.price}</div>
                <ul className="space-y-2 text-sm text-neutral-700 mb-6">
                  {p.points.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2"><span className="text-green-500">✓</span>{pt}</li>
                  ))}
                </ul>
                <GradientButton as="a" href={p.href} withArrow icon="et-circle-cutout" iconHover="slide-right" className="w-full justify-center">
                  Pasirinkti
                </GradientButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-6">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="rounded-2xl bg-white shadow p-6">
            <h3 className="font-bold text-xl text-rlText mb-2">Vienkartinė online konsultacija</h3>
            <p className="text-sm text-neutral-700 mb-4">60–90 min. pokalbis konkrečiam klausimui. Po skambučio gausi aiškų veiksmų planą.</p>
            <GradientButton as="a" href="/konsultacijos#rezervacija" withArrow icon="et-circle-cutout" iconHover="slide-right">
              Rezervuoti laiką
            </GradientButton>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 p-6">
            <h3 className="font-bold text-xl text-rlText mb-2">Narystė – ateina netrukus</h3>
            <p className="text-sm text-neutral-700 mb-4">Savaitiniai video, bendruomenė ir iššūkiai. Palik el. paštą – pranešime startą.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="El. paštas" className="px-4 py-3 rounded-full border w-full sm:w-80" />
              <GradientButton as="button" withArrow icon="et-circle-cutout" iconHover="slide-right">Praneškite man</GradientButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 lg:py-16 text-center">
          <p className="text-neutral-600">
            Nesu tikra, kuris planas tau tinkamiausias? <Link className="text-[#AB57F4] hover:underline font-semibold" href="/konsultacijos#rezervacija">Parašyk man</Link> ir aptarsime.
          </p>
        </div>
      </section>
    </main>
  )
}
