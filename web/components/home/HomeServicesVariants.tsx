import { ServiceCard } from '@/components/ui/ServiceCard';
import Reveal from '@/components/ui/Reveal';

const services = [
  {
    tag: { text: 'Video', color: 'video' as const },
    imageSrc: '/images/services/workouts.webp',
    title: 'Treniruočių programos',
    description: 'Sportuok namuose ar salėje – įrašai pritaikyti tiek pradedančiajai, tiek pažengusiai.',
    features: [
      'Pasiekiami įrašai bet kada, visiems įrengimams.',
      'Programos pritaikytos skirtingiems tikslams (sėdmenims, nugarai, pilvo presui).',
      'Motyvuojantys rezultatai ir progresas jau po kelių savaičių.',
    ],
    price: 'Nuo 29€ / mėn.',
    buttonText: 'Rinktis programą',
    buttonHref: '/plans/video',
  },
  {
    tag: { text: 'PDF', color: 'pdf' as const },
    imageSrc: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop',
    title: 'Mitybos planai',
    description: 'Valgyk skaniai ir vis tiek siek svorio mažinimo tikslo – planas pritaikytas asmeniškai.',
    features: [
      'Valgyk skaniai ir vis tiek siek svorio mažinimo tikslo.',
      'Pajausi daugiau energijos ir lengvumo kasdien.',
      'Įgauk pasitikėjimo savimi, nes planas pritaikytas tau asmeniškai.',
    ],
    price: 'Nuo 39€',
    buttonText: 'Gauti mitybos planą',
    buttonHref: '/plans/mityba',
  },
  {
    tag: { text: 'VIP', color: 'vip' as const },
    imageSrc: '/images/services/vip.png',
    title: 'Asmeninė priežiūra',
    description: 'Individualios online konsultacijos, nuolatinis palaikymas ir korekcijos.',
    features: [
      'Asmeninis 1:1 dėmesys užtikrina, kad kiekvienas klientas gautų tinkamą palaikymą.',
      'Savaitiniai patikrinimai ir korekcijos.',
      'Prioritetinis atsakymų laikas (VIP).',
    ],
    price: 'Nuo 99€ / mėn.',
    buttonText: 'Rezervuoti vietą',
    buttonHref: '/konsultacijos#rezervacija',
  },
  {
    tag: { text: '1:1', color: 'oneoff' as const },
    imageSrc: '/images/services/consultation.png',
    title: 'Vienkartinė konsultacija',
    description: '60–90 min. susitikimas konkrečiam klausimui – gauk aiškų veiksmų planą po pokalbio.',
    features: [
      'Online vaizdo skambutis (Zoom/Meet).',
      'Aiškios rekomendacijos ir atsakymai.',
      '7 dienų el. pašto palaikymas po konsultacijos.',
    ],
    price: 'Nuo 29€ / kartą',
    buttonText: 'Užsakyti konsultaciją',
    buttonHref: '/konsultacijos#rezervacija',
  },
];

// VARIANTAS 1: Asimetrinis Grid (2-2 + 2-single)
export function HomeServicesVariant1() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

        {/* LAYOUT 1: L-shaped grid - pirmi du šone, paskui du vienas po kito */}
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Kairės pusės 2x2 grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 h-full">
              <Reveal delay={0.1}>
                <ServiceCard {...services[0]} className="h-full" />
              </Reveal>
              <Reveal delay={0.2}>
                <ServiceCard {...services[1]} className="h-full" />
              </Reveal>
            </div>
          </div>
          
          {/* Dešinės pusės vertikalūs */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              <Reveal delay={0.3}>
                <ServiceCard {...services[2]} className="h-full" />
              </Reveal>
              <Reveal delay={0.4}>
                <ServiceCard {...services[3]} className="h-full" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// VARIANTAS 2: Hero Card + Grid
export function HomeServicesVariant2() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

        {/* LAYOUT 2: Featured + Grid - vienas didelis viršuje, 3 mažesni apačioje */}
  <div className="space-y-2">
          {/* Hero card - VIP services featured */}
          <Reveal delay={0.1}>
            <div className="w-full">
              <ServiceCard {...services[2]} className="max-w-2xl mx-auto" featured />
            </div>
          </Reveal>
          
          {/* Bottom grid - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <Reveal delay={0.2}>
              <ServiceCard {...services[0]} />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard {...services[1]} />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard {...services[3]} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// VARIANTAS 3: Masonry Style
export function HomeServicesVariant3() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

        {/* LAYOUT 3: Masonry - different card heights in 2 columns */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Left column */}
          <div className="space-y-2">
            <Reveal delay={0.1}>
              <ServiceCard {...services[0]} compact />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard {...services[2]} />
            </Reveal>
          </div>
          
          {/* Right column */}
          <div className="space-y-2">
            <Reveal delay={0.2}>
              <ServiceCard {...services[1]} />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard {...services[3]} compact />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// VARIANTAS 4: Pyramid Layout
export function HomeServicesVariant4() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

        {/* LAYOUT 4: Pyramid - 1 top, 2 middle, 1 bottom */}
  <div className="space-y-2">
          {/* Top single */}
          <Reveal delay={0.1}>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <ServiceCard {...services[2]} />
              </div>
            </div>
          </Reveal>
          
          {/* Middle two */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 max-w-4xl mx-auto">
            <Reveal delay={0.2}>
              <ServiceCard {...services[0]} />
            </Reveal>
            <Reveal delay={0.3}>
              <ServiceCard {...services[1]} />
            </Reveal>
          </div>
          
          {/* Bottom single */}
          <Reveal delay={0.4}>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <ServiceCard {...services[3]} />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// VARIANTAS 5: Alternating Layout
export function HomeServicesVariant5() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

        {/* LAYOUT 5: Zigzag/Alternating - wide cards alternating left and right */}
  <div className="space-y-2">
          {/* Row 1: Two cards side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Reveal delay={0.1}>
              <ServiceCard {...services[0]} horizontal />
            </Reveal>
            <Reveal delay={0.2}>
              <ServiceCard {...services[1]} horizontal />
            </Reveal>
          </div>
          
          {/* Row 2: Two cards side by side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <Reveal delay={0.3}>
              <ServiceCard {...services[2]} horizontal />
            </Reveal>
            <Reveal delay={0.4}>
              <ServiceCard {...services[3]} horizontal />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// Default export - current layout
export default function HomeServicesSection() {
  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-2 mb-16">
            <div className="md:w-3/5">
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText text-center md:text-left">
                Pasirink savo <span className="gradient-text">kelią</span>
              </h2>
            </div>
            <div className="md:w-2/5">
              <p className="text-center md:text-left text-base sm:text-lg text-neutral-600">
                Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
              </p>
            </div>
          </div>
        </Reveal>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.1 * (index + 1)}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
