'use client';

import { motion, Variants } from 'framer-motion';
import { Dumbbell, Annoyed, Baby, PiggyBank, BatteryCharging, Clock } from 'lucide-react';

const problems = [
  {
    icon: Dumbbell,
    title: 'Neturi laiko važinėti į salę',
    description: 'Kelionė į salę ir atgal užima daugiau laiko nei pati treniruotė.',
  },
  {
    icon: Annoyed,
    title: 'Gėdijasi pradėti salėje',
    description: 'Jaučiesi nejaukiai tarp patyrusių sportininkų ir nenori atrodyti "naujokė".',
  },
  {
    icon: Baby,
    title: 'Turi mažus vaikus',
    description: 'Negali palikti namų ir ieškoti auklės kiekvienai treniruotei.',
  },
  {
    icon: PiggyBank,
    title: 'Nori sutaupyti pinigų',
    description: 'Salės abonementas, treneris, kelionė – išlaidos, kurios greitai auga.',
  },
  {
    icon: BatteryCharging,
    title: 'Nuolatinis nuovargis',
    description: 'Jautiesi be energijos, nors nuolat bandai maitintis "sveikai".',
  },
  {
    icon: Clock,
    title: 'Laiko stoka',
    description: 'Dienos per trumpos, kad valandas praleistum virtuvėje gaminant.',
  },
];

const cardVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: 'easeOut'
    }
  })
};

const iconVariants: Variants = {
  initial: { scale: 0, rotate: -45 },
  animate: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: 'spring', 
      stiffness: 200, 
      damping: 20,
      delay: 0.6 // Delay to start after card appears
    } 
  },
  hover: { 
    scale: 1.2, 
    rotate: 10, 
    transition: { type: 'spring', stiffness: 400, damping: 10 } 
  },
};

export default function ProblemSolution() {
  return (
    <section className="bg-white">
      <div className="rl-section">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="rl-section-header"
        >
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
              Ar tai skamba <span className="gradient-text">pažįstamai?</span>
            </h2>
          </div>
          <div>
            <p className="rl-section-copy">
              Tu ne viena. Štai kodėl tūkstančiai moterų renkasi treniruotis namuose.
            </p>
          </div>
        </motion.div>

        {/* Problems Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => {
            const IconComponent = problem.icon;
            return (
              <motion.div 
                key={index}
                className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group"
                variants={cardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.5 }}
                custom={index}
                whileHover="hover"
              >
                <motion.div 
                  className="w-12 h-12 text-pink-500 mb-5"
                  variants={iconVariants}
                >
                  <IconComponent className="w-full h-full" />
                </motion.div>
                <h3 className="text-xl font-bold text-rlText mb-2">{problem.title}</h3>
                <p className="text-neutral-600 text-sm flex-grow">{problem.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
