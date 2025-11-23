'use client'

import { Dumbbell, Annoyed, Baby, PiggyBank, BatteryCharging, Clock } from 'lucide-react'
import { GradientButton } from '@/components/ui/GradientButton'
import Reveal from '@/components/ui/Reveal'

const problems = [
  {
    icon: Dumbbell,
    title: 'Neturi laiko važinėti į salę',
    description: 'Kelionė suvalgo daugiau laiko nei pati treniruotė.'
  },
  {
    icon: Annoyed,
    title: 'Gėdijasi pradėti salėje',
    description: 'Nejaukiai tarp patyrusių ir nori išvengti „naujokės“ jausmo.'
  },
  {
    icon: Baby,
    title: 'Turi mažus vaikus',
    description: 'Negali kiekvieną dieną palikti namų ir ieškoti auklės.'
  },
  {
    icon: PiggyBank,
    title: 'Nori sutaupyti pinigų',
    description: 'Salės abonementas, treneris, kelionė – išlaidos greitai auga.'
  },
  {
    icon: BatteryCharging,
    title: 'Nuolatinis nuovargis',
    description: 'Be energijos, nors bandai maitintis „sveikai“.'
  },
  {
    icon: Clock,
    title: 'Laiko stoka',
    description: 'Dienos per trumpos, kad praleistum valandas virtuvėje.'
  }
]

function ProblemCard({ icon: Icon, title, description }: { icon: typeof Dumbbell; title: string; description: string }) {
  return (
    <div className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group">
      <div className="w-12 h-12 text-rlPink mb-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-xl font-extrabold text-rlText mb-2 leading-snug">{title}</h3>
      <p className="text-neutral-600 text-sm flex-grow">{description}</p>
    </div>
  )
}

export default function ProblemSolution() {
  const leftCol = problems.slice(0, 3)
  const rightCol = problems.slice(3)

  return (
    <section className="bg-white">
      <div className="rl-section">
        <Reveal>
          <div className="rl-section-header">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
                Ar tai skamba <span className="gradient-text">pažįstamai?</span>
              </h2>
            </div>
            <div>
              <p className="rl-section-copy">
                Tu ne viena. Jei bent vienas punktas tau tinka – padėsiu keisti situaciją.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          <div className="flex flex-col gap-6">
            {leftCol.map((problem, idx) => (
              <Reveal key={problem.title} delay={0.1 * (idx + 1)}>
                <ProblemCard {...problem} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="relative h-full min-h-[360px] w-full max-w-[360px] mx-auto rounded-[32px] p-[10px] bg-gradient-to-br from-[#F28ACD] via-[#AB57F4] to-[#F28ACD] shadow-[0_22px_55px_-18px_rgba(171,87,244,0.45)]">
              <div className="h-full w-full rounded-[24px] overflow-hidden bg-white">
                {/* Use plain img to avoid optimization issues; keep PNG fallback */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/sections/Renata.png"
                  alt="Renata"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            {rightCol.map((problem, idx) => (
              <Reveal key={problem.title} delay={0.1 * (idx + 1)}>
                <ProblemCard {...problem} />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.8}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <GradientButton
              as="a"
              href="#paslaugos"
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
              className="text-lg px-8 py-4 shadow-lg"
            >
              Rasti sprendimą
            </GradientButton>
            <p className="text-sm text-neutral-500">
              <span className="font-semibold text-rlText">1200+ moterų</span> jau transformuoja savo rutiną
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
