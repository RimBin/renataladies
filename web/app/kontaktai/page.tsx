import { GradientButton } from '@/components/ui/GradientButton'

export const metadata = {
  title: 'Kontaktai — Renataladies',
  description: 'Susisiekite dėl planų, konsultacijų ar partnerystės.'
}

export default function KontaktaiPage() {
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-14">
      <h1 className="h2 font-extrabold">Kontaktai</h1>
      <p className="text-responsive text-neutral-700 mt-2">Turite klausimų apie mitybos planus, treniruotes ar VIP konsultacijas? Parašykite — atrašysiu kuo greičiau.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white shadow p-5">
          <h2 className="font-semibold">El. paštas</h2>
          <a href="mailto:info@renataladies.lt" className="underline">info@renataladies.lt</a>
          <h2 className="font-semibold mt-4">Socialiniai tinklai</h2>
          <ul className="text-responsive text-neutral-700 list-disc list-inside">
            <li><a className="underline" href="#">Instagram</a></li>
            <li><a className="underline" href="#">Facebook</a></li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white shadow p-5">
          <h2 className="font-semibold">Susitarkime konsultaciją</h2>
          <p className="text-responsive text-neutral-700">Trumpa 1:1 apžvalga ir aiškūs žingsniai nuo ko pradėti.</p>
          <GradientButton as="a" href="/vip" withArrow className="mt-4">Rezervuoti</GradientButton>
        </div>
      </div>
    </section>
  )
}
