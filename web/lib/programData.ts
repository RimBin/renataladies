// Workout Programs - collections of videos for specific goals
export type WorkoutProgram = {
  id: string
  title: string
  slug: string
  description: string
  duration: string // e.g., "4 weeks", "30 days"
  goal: string // e.g., "weight loss", "strength", "flexibility"
  level: 'beginner' | 'intermediate' | 'advanced'
  thumbnail: string
  videoIds: string[] // References to videos from videoData.ts
  weeklySchedule?: {
    week: number
    days: {
      day: number
      videoIds: string[]
      notes?: string
    }[]
  }[]
  isPremium: boolean
}

export const PROGRAMS: WorkoutProgram[] = [
  {
    id: 'p0',
    title: 'Bikini Body (varžybinė programa)',
    slug: 'bikini-body-varzybine-programa',
    description: 'Struktūruota 8 savaičių varžybinė programa: treniruotės + rekomenduojama mitybos struktūra (PDF).',
    duration: '8 savaitės',
    goal: 'Riebalų mažinimas, raumenų ryškinimas',
    level: 'advanced',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1280&h=720&fit=crop&q=80',
    videoIds: ['v4','v5','v2','v7'],
    weeklySchedule: [
      { week: 1, days: [
        { day:1, videoIds:['v4'], notes:'HIIT + žemų kalorijų diena' },
        { day:3, videoIds:['v5'], notes:'Pilvo fokusas' },
        { day:5, videoIds:['v7'], notes:'Viršutinė dalis' },
      ]}
    ],
    isPremium: true,
  },
  {
    id: 'p1',
    title: 'Sėdmenų treniruotė (video)',
    slug: 'sedmenu-treniruote-video',
    description: 'Intensyvi programa sėdmenims stiprinti ir formuoti. Tinka vidutinio ir pažengusio lygio.',
    duration: '4 savaitės',
    goal: 'Sėdmenų stiprinimas',
    level: 'intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1550345332-09e3ac987658?w=1280&h=720&fit=crop&q=80',
    videoIds: ['v4', 'v1', 'v7'], // HIIT sėdmenų, Visa kūno jėga, Rankų jėga
    weeklySchedule: [
      {
        week: 1,
        days: [
          { day: 1, videoIds: ['v4'], notes: 'HIIT sėdmenų ir kojų' },
          { day: 2, videoIds: ['v6'], notes: 'Atsipalaidavimas' },
          { day: 3, videoIds: ['v1'], notes: 'Visa kūno jėga' },
          { day: 4, videoIds: ['v6'], notes: 'Tempimas' },
          { day: 5, videoIds: ['v4'], notes: 'HIIT sėdmenų pakartojimas' },
        ],
      },
    ],
    isPremium: true,
  },
  {
    id: 'p2',
    title: 'Sėdmenų treniruotė namuose (video)',
    slug: 'sedmenu-treniruote-namuose-video',
    description: 'Sėdmenų treniruotė be įrangos - galima atlikti namuose. Tinka pradedantiesiems.',
    duration: '4 savaitės',
    goal: 'Sėdmenų formavimas',
    level: 'beginner',
    thumbnail: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=1280&h=720&fit=crop&q=80',
    videoIds: ['v2', 'v5', 'v6'], // Kardio intervalas, Pilvo presui, Tempimas
    weeklySchedule: [
      {
        week: 1,
        days: [
          { day: 1, videoIds: ['v2'], notes: 'Kardio šilimas' },
          { day: 2, videoIds: ['v5'], notes: 'Pilvo raumenys' },
          { day: 3, videoIds: ['v6'], notes: 'Tempimas ir atsipalaidavimas' },
          { day: 5, videoIds: ['v2', 'v5'], notes: 'Kombinuota' },
        ],
      },
    ],
    isPremium: false,
  },
  {
    id: 'p3',
    title: 'Stipri nugara - treniruotė (video)',
    slug: 'stipri-nugara-treniruote-video',
    description: 'Programa nugarkaulio ir nugaros raumenų stiprinimui. Padeda pagerinti laikyseną.',
    duration: '3 savaitės',
    goal: 'Nugaros stiprinimas',
    level: 'intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1280&h=720&fit=crop&q=80',
    videoIds: ['v7', 'v3', 'v6'], // Rankų/pečių jėga, Yoga, Tempimas
    weeklySchedule: [
      {
        week: 1,
        days: [
          { day: 1, videoIds: ['v7'], notes: 'Pečių ir nugaros jėga' },
          { day: 2, videoIds: ['v3'], notes: 'Yoga lankstumui' },
          { day: 4, videoIds: ['v7'], notes: 'Jėgos pakartojimas' },
          { day: 6, videoIds: ['v6'], notes: 'Nugaros tempimas' },
        ],
      },
    ],
    isPremium: true,
  },
  {
    id: 'p4',
    title: 'Six pack treniruotė (video)',
    slug: 'six-pack-treniruote-video',
    description: 'Intensyvi pilvo raumenų programa. Formuoja stiprų ir atletišką pilvą.',
    duration: '6 savaitės',
    goal: 'Pilvo raumenų formavimas',
    level: 'advanced',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1280&h=720&fit=crop&q=80',
    videoIds: ['v5', 'v4', 'v2'], // Pilvo presui, HIIT, Kardio
    weeklySchedule: [
      {
        week: 1,
        days: [
          { day: 1, videoIds: ['v5'], notes: 'Pilvo fokusas' },
          { day: 2, videoIds: ['v2'], notes: 'Kardio kalorijas' },
          { day: 3, videoIds: ['v5'], notes: 'Pilvo pakartojimas' },
          { day: 4, videoIds: ['v4'], notes: 'HIIT visam kūnui' },
          { day: 6, videoIds: ['v5', 'v2'], notes: 'Kombinuota pilvas + kardio' },
        ],
      },
    ],
    isPremium: true,
  },
]

// Helper functions
export function getProgramById(id: string): WorkoutProgram | undefined {
  return PROGRAMS.find((p) => p.id === id)
}

export function getProgramBySlug(slug: string): WorkoutProgram | undefined {
  return PROGRAMS.find((p) => p.slug === slug)
}

export function getProgramsByLevel(level: 'beginner' | 'intermediate' | 'advanced'): WorkoutProgram[] {
  return PROGRAMS.filter((p) => p.level === level)
}

export function getFreeProgramsCount(): number {
  return PROGRAMS.filter((p) => !p.isPremium).length
}
