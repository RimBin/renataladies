import Reveal from "../ui/Reveal";
import { Target, ClipboardList, Rocket } from 'lucide-react'

const steps = [
  {
    icon: Target,
    number: '01',
    title: 'Pasirenki savo kelią',
    description: 'Pradedi nuo vienkartinės konsultacijos, specifinio plano, arba tampi VIP nare ir gauni viską iškart.',
    animation: 'icon-bounce',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Gauni asmeninį planą',
    description: 'Užpildai anketą ir gauni mitybos bei sporto planą, pritaikytą tavo kūnui, tikslams ir gyvenimo būdui.',
    animation: 'icon-pulse',
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Pasieki rezultatus su palaikymu',
    description: 'Sportuoji namuose, bet kur ir bet kada – be salės! Valgai skaniai ir mėgaujiesi nuolatiniu Renatos bei bendruomenės palaikymu.',
    animation: 'icon-float',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="rl-section">
        <Reveal>
          <div className="rl-section-header">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
                Kaip viskas <span className="gradient-text">veikia?</span>
              </h2>
            </div>
            <div>
              <p className="rl-section-copy">
                Tavo transformacijos kelionė – tai paprastas ir aiškus procesas.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <Reveal key={index} delay={0.1 * (index + 1)}>
                <div className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group">
                  <div className="w-12 h-12 text-rlPink mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-md">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <p className="text-5xl font-bold gradient-text opacity-30 mb-3">{step.number}</p>
                  <h3 className="text-xl font-bold text-rlText mb-2">{step.title}</h3>
                  <p className="text-neutral-600 text-sm flex-grow">{step.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
