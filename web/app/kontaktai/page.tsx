import { GradientButton } from '@/components/ui/GradientButton'

export const metadata = {
  title: 'Kontaktai — Renataladies',
  description: 'Susisiekite dėl planų, konsultacijų ar partnerystės.'
}

export default function KontaktaiPage() {
  return (
    <section className="max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            <span className="gradient-text">Kontaktai</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">Turite klausimų apie mitybos planus, treniruotes ar VIP konsultacijas? Parašykite — atrašysiu kuo greičiau.</p>
        </div>
      </div>
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl bg-white shadow p-5">
          <h2 className="font-semibold text-lg mb-3">Susisiekite</h2>
          <div className="space-y-3">
            <div>
              <p className="text-sm text-neutral-500">El. paštas</p>
              <a href="mailto:info@renataladies.com" className="text-[#F28ACD] hover:underline">info@renataladies.com</a>
            </div>
            <div>
              <p className="text-sm text-neutral-500">Telefonas</p>
              <a href="tel:+37068466408" className="text-[#F28ACD] hover:underline">+370 684 66408</a>
            </div>
          </div>
          <h2 className="font-semibold text-lg mt-6 mb-3">Socialiniai tinklai</h2>
          <ul className="text-neutral-600 space-y-1">
            <li><a className="hover:text-[#F28ACD] transition" href="#">Instagram</a></li>
            <li><a className="hover:text-[#F28ACD] transition" href="#">Facebook</a></li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white shadow p-5">
          <h2 className="font-semibold text-lg mb-3">Treniruočių studija Kaune</h2>
          <p className="text-neutral-700 mb-4">
            Vykdome grupines treniruotes ir asmeninius užsiėmimus sporto salėje Kaune. 
            Dėl grafiko ir registracijos susisiekite telefonu ar el. paštu.
          </p>
          <GradientButton as="a" href="/konsultacijos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="mt-4">
            Rezervuoti konsultaciją
          </GradientButton>
        </div>
      </div>
    </section>
  )
}
