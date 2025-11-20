export type ConsultationType = {
  id: string
  title: string
  duration: string
  price: string
  description: string
  includes: string[]
  bestFor: string[]
  popular?: boolean
  icon: string
}

export const CONSULTATIONS: ConsultationType[] = [
  {
    id: 'initial',
    title: 'Pradinė konsultacija',
    duration: '60 min',
    price: '49 €',
    description: 'Pirmasis žingsnis į sveikesnį gyvenimą. Kartu aptarsime tavo tikslus, išpročius ir sudarysime veiksmų planą.',
    includes: [
      'Išsamus pokalbis apie tavo tikslus',
      'Dabartinės mitybos įpročių analizė',
      'Kūno matmenų įvertinimas',
      'Individualus veiksmų planas',
      'Rekomendacijos dėl mitybos',
      'PDF santrauka po konsultacijos',
    ],
    bestFor: [
      'Pradedantiesiems',
      'Norintiems sužinoti apie savo kūną',
      'Ieškantiems aiškaus plano',
    ],
    icon: '📋',
  },
  {
    id: 'follow-up',
    title: 'Pasikartojanti konsultacija',
    duration: '45 min',
    price: '39 €',
    description: 'Pažangos vertinimas ir plano koregavimas. Idealus tiems, kurie jau pradėjo kelionę ir nori palaikymo.',
    includes: [
      'Pažangos vertinimas',
      'Naujų tikslų nustatymas',
      'Plano koregavimas',
      'Atsakymai į klausimus',
      'Motyvacijos stiprinimas',
      'Naujos rekomendacijos',
    ],
    bestFor: [
      'Jau pradėjusiems programą',
      'Norintiems koreguoti planą',
      'Ieškantiems motyvacijos',
    ],
    icon: '⭐',
    popular: true,
  },
  {
    id: 'meal-planning',
    title: 'Meniu planavimas',
    duration: '45 min',
    price: '45 €',
    description: 'Kartu sudarysime tau tinkamą savaitės meniu su receptais ir pirkinių sąrašais.',
    includes: [
      'Individualus savaitės meniu',
      'Receptų rinkinys',
      'Pirkinių sąrašas',
      'Maisto ruošimo patarimai',
      'Alternatyvos ir pakaitalai',
      'PDF meniu planas',
    ],
    bestFor: [
      'Norintiems supaprastinti mitybą',
      'Ieškantiems įvairovės',
      'Turintiems daug darbų',
    ],
    icon: '🍽️',
  },
  {
    id: 'express',
    title: 'Express konsultacija',
    duration: '30 min',
    price: '29 €',
    description: 'Greita konsultacija konkrečiam klausimui ar problemai išspręsti.',
    includes: [
      'Tikslinė problema',
      'Greiti sprendimai',
      'Konkretūs patarimai',
      'Išteklių rekomendacijos',
    ],
    bestFor: [
      'Turintiems konkrečią problemą',
      'Norintiems greito atsakymo',
      'Riboto laiko turintiems',
    ],
    icon: '⚡',
  },
]

export const CONSULTATION_PROCESS = [
  {
    step: 1,
    title: 'Rezervuok laiką',
    description: 'Pasirink tinkamą konsultacijos tipą ir rezervuok patogų laiką.',
    icon: '📅',
  },
  {
    step: 2,
    title: 'Užpildyk anketą',
    description: 'Atsakyk į kelis klausimus, kad galėčiau geriau pasiruošti mūsų pokalbiui.',
    icon: '📝',
  },
  {
    step: 3,
    title: 'Video pokalbis',
    description: 'Susitinkame online per Zoom arba Google Meet - kur tau patogiau.',
    icon: '🎥',
  },
  {
    step: 4,
    title: 'Gauk planą',
    description: 'Po konsultacijos gauni PDF su visais patarimais ir veiksmų planu.',
    icon: '📄',
  },
]

export const CONSULTATION_FAQ = [
  {
    question: 'Kaip vyksta konsultacija?',
    answer: 'Visos konsultacijos vyksta online per video skambučius (Zoom/Google Meet). Tu gauni nuorodą prieš pat susitikimą.',
  },
  {
    question: 'Ką reikia pasiruošti?',
    answer: 'Prieš konsultaciją gausi anketą su keliais klausimais. Taip pat naudinga turėti užrašų bloknelį pastaboms.',
  },
  {
    question: 'Ar galiu perkelti rezervaciją?',
    answer: 'Taip! Jei reikia perkelti, pranešk bent 24 val. prieš susitikimą ir surasime naują laiką.',
  },
  {
    question: 'Ar konsultacija tinka pradedantiesiems?',
    answer: 'Absoliučiai! Pradinė konsultacija specialiai sukurta tiems, kurie tik pradeda savo kelionę į sveikesnį gyvenimą.',
  },
  {
    question: 'Kiek laiko gaunu palaikymą po konsultacijos?',
    answer: 'Po konsultacijos gauni 7 dienas el. pašto palaikymą - gali užduoti papildomus klausimus.',
  },
  {
    question: 'Ar gausiu individualų planą?',
    answer: 'Taip! Kiekviena konsultacija baigiasi individualiu veiksmų planu PDF formatu.',
  },
]
