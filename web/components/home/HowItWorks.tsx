import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: '🎯',
    number: '01',
    title: 'Pasirenki savo kelią',
    description: 'Pradedi nuo vienkartinės konsultacijos, specifinio plano, arba tampi VIP nare ir gauni viską iškart.',
    animation: 'icon-bounce',
  },
  {
    icon: '📋',
    number: '02',
    title: 'Gauni asmeninį planą',
    description: 'Užpildai anketą ir gauni mitybos bei sporto planą, pritaikytą tavo kūnui, tikslams ir gyvenimo būdui.',
    animation: 'icon-pulse',
  },
  {
    icon: '🚀',
    number: '03',
    title: 'Pasiekti rezultatus su palaikymu',
    description: 'Sportuoji namuose, bet kur ir bet kada – jokių salių! Valgai skaniai ir mėgaujiesi nuolatiniu Renatos bei visos bendruomenės palaikymu.',
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
          {steps.map((step, index) => (
            <Reveal key={index} delay={0.1 * (index + 1)}>
              <div className="relative p-8 rounded-2xl border border-neutral-200/80 bg-neutral-50/70 h-full flex flex-col group hover:border-neutral-300 transition-colors">
                <div className={`text-6xl mb-4 ${step.animation}`}>{step.icon}</div>
                <p className="text-5xl font-bold gradient-text opacity-30 mb-3">{step.number}</p>
                <h3 className="text-2xl font-bold text-rlText mb-3">{step.title}</h3>
                <p className="text-neutral-600 flex-grow">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
