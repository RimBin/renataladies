import { ServiceCard } from '@/components/ui/ServiceCard';

const services = [
  {
    tag: { text: 'Video', color: 'video' as const },
    imageSrc: '/images/services/workouts.webp',
    imageFit: 'cover' as const,
    title: 'Treniruočių programos',
    description: 'Sportuok namuose ar salėje – įrašai pritaikyti tiek pradedančiajai, tiek pažengusiai.',
    features: [
      'Pasiekiami įrašai bet kada, visiems įrengimams.',
      'Programos pritaikytos skirtingiems tikslams (sėdmenims, nugarai, pilvo presui).',
      'Motyvuojantys rezultatai ir progresas jau po kelių savaičių.',
    ],
    price: 'Nuo 29€',
    buttonText: 'Rinktis programą',
    buttonHref: '/programos',
  },
  {
    tag: { text: 'PDF', color: 'pdf' as const },
  imageSrc: '/images/services/consultation.png',
    imageFit: 'cover' as const,
    title: 'Mitybos planai',
    description: 'Valgyk skaniai ir vis tiek siek svorio mažinimo tikslo – planas pritaikytas asmeniškai.',
    features: [
      'Valgyk skaniai ir vis tiek siek svorio mažinimo tikslo.',
      'Pajausi daugiau energijos ir lengvumo kasdien.',
      'Įgauk pasitikėjimo savimi, nes planas pritaikytas tau asmeniškai.',
    ],
    price: 'Nuo 39€',
    buttonText: 'Gauti mitybos planą',
    buttonHref: '/mitybos-planai',
  },
  {
    tag: { text: 'VIP', color: 'vip' as const },
    imageSrc: '/images/services/vip.png',
    imageFit: 'contain' as const,
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
    imageFit: 'contain' as const,
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

export default function HomeServicesSection() {
  const primaryServices = services.slice(0, 3)
  const highlightService = services[3]

  return (
    <section id="paslaugos" className="bg-neutral-50/70 scroll-mt-20">
      <div className="rl-section">
        <div className="rl-section-header">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText rl-section-title">
              Pasirink savo <span className="gradient-text">kelią</span>
            </h2>
          </div>
          <div>
            <p className="rl-section-copy">
              Nesvarbu, ar nori pradėti nuo vieno plano, ar gauti pilną VIP patirtį – čia rasi viską, ko reikia tavo tikslams pasiekti.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {primaryServices.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        {highlightService && (
          <div className="mt-6 lg:mt-10">
            <ServiceCard
              {...highlightService}
              horizontal
              featured
            />
          </div>
        )}
      </div>
    </section>
  );
}
