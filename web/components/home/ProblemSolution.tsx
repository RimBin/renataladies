'use client';

import { Dumbbell, Annoyed, Baby, PiggyBank, BatteryCharging, Clock } from 'lucide-react';
import { GradientButton } from '@/components/ui/GradientButton';
import Reveal from '@/components/ui/Reveal';

const problems = [
  {
    icon: Dumbbell,
    titleBold: 'Neturi laiko',
    titleRest: 'važinėti į salę',
    description: 'Kelionė suvalgo daugiau laiko nei pati treniruotė.',
  },
  {
    icon: Annoyed,
    titleBold: 'Gėdijasi pradėti',
    titleRest: 'salėje',
    description: 'Nejaukiai tarp patyrusių ir nori išvengti "naujokės" jausmo.',
  },
  {
    icon: Baby,
    titleBold: 'Turi mažus vaikus',
    titleRest: '',
    description: 'Negali kiekvieną dieną palikti namų ir ieškoti auklės.',
  },
  {
    icon: PiggyBank,
    titleBold: 'Nori sutaupyti',
    titleRest: 'pinigų',
    description: 'Salės abonementas, treneris, kelionė – išlaidos greitai auga.',
  },
  {
    icon: BatteryCharging,
    titleBold: 'Nuolatinis nuovargis',
    titleRest: '',
    description: 'Be energijos, nors bandai maitintis "sveikai".',
  },
  {
    icon: Clock,
    titleBold: 'Laiko stoka',
    titleRest: '',
    description: 'Dienos per trumpos, kad praleistum valandas virtuvėje.',
  },
];

export default function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="rl-section">
        {/* Header */}
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

        {/* Problems List (semantic ul/li) */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <li 
                key={index}
                className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group"
              >
                <div 
                  className="w-12 h-12 text-rlPink mb-5 transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <IconComponent className="w-full h-full" />
                </div>
                <h3 className="text-xl font-bold text-rlText mb-2">
                  <span className="font-extrabold">{problem.titleBold}</span>
                  {problem.titleRest && <> {problem.titleRest}</>}
                </h3>
                <p className="text-neutral-600 text-sm flex-grow">{problem.description}</p>
              </li>
              </Reveal>
            )
          })}
        </ul>

        {/* CTA Block */}
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
  );
}
