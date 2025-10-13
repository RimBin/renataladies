import Link from 'next/link'
import { GradientButton } from '@/components/ui/GradientButton'
import { ArrowUpRightIcon, EtCircleArrowUpRightIcon } from '@/components/ui/icons'
import Hero from '@/components/Hero'
import TrustSection from '@/components/home/TrustSection'
import PathsGrid from '@/components/home/PathsGrid'
import PersonalPlanSplit from '@/components/home/PersonalPlanSplit'
import StoriesSection from '@/components/home/StoriesSection'
import WhyRenata from '@/components/home/WhyRenata'
import OffersSection from '@/components/home/OffersSection'

export default function Home() {
  return (
    <>
      <Hero
        title="Tu gali daugiau, nei manai"
        gradientWords={["gali", "daugiau"]}
        subtitle="Padėsiu pradėti lengviau — su aiškiais mitybos planais, treniruotėmis ir asmeniniu palaikymu."
      >
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3 justify-center">
            <GradientButton as="a" href="/plans" withArrow className="font-semibold">
              Rinktis planą
            </GradientButton>
            <Link href="/videos" className="px-5 py-2.5 rounded-full border font-semibold inline-flex items-center gap-2">
              Peržiūrėti treniruotes
              <EtCircleArrowUpRightIcon className="w-5 h-5 text-rlText" />
            </Link>
          </div>
          <ul className="text-responsive text-neutral-700 grid sm:grid-cols-3 gap-2">
            <li className="flex items-center gap-2"><span className="text-green-600">✔</span> Aiškūs planai ir receptai</li>
            <li className="flex items-center gap-2"><span className="text-green-600">✔</span> Palaikymas pradedančiosioms</li>
            <li className="flex items-center gap-2"><span className="text-green-600">✔</span> Tvari disciplina, ne dieta</li>
          </ul>
        </div>
      </Hero>

      {/* Decorative brand strip */}
      <div className="py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-wrap items-center justify-center gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="px-4 py-1 rounded-full text-xs font-bold tracking-widest bg-pink-50 text-rlText border border-pink-100">RENATA LADIES</span>
          ))}
        </div>
      </div>

      <TrustSection />
      <PathsGrid />
      <PersonalPlanSplit />
  <StoriesSection />
  <OffersSection />
      <WhyRenata />
    </>
  )
}
