// Mock video data - replace with Sanity CMS queries later
export type Video = {
  id: string
  title: string
  slug: string
  category: 'strength' | 'cardio' | 'yoga' | 'hiit' | 'stretching'
  duration: number
  level: 'beginner' | 'intermediate' | 'advanced'
  videoUrl: string
  thumbnail: string
  description: string
  equipment: string[]
  isPremium: boolean
}

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Visa kūno jėgos treniruotė',
    slug: 'visa-kuno-jegos-treniruote',
    category: 'strength',
    duration: 30,
    level: 'intermediate',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1280&h=720&fit=crop&q=80',
    description: 'Intensyvi 30 minučių jėgos treniruotė visam kūnui. Stipriname visas pagrindines raumenų grupes.',
    equipment: ['Hanteliai', 'Kilimėlis'],
    isPremium: false,
  },
  {
    id: 'v2',
    title: 'Kardio intervalo treniruotė',
    slug: 'kardio-intervalo-treniruote',
    category: 'cardio',
    duration: 20,
    level: 'beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1280&h=720&fit=crop&q=80',
    description: 'Greitas kalorijas deginantis kardio – idealus pradedantiesiems.',
    equipment: ['Kilimėlis'],
    isPremium: false,
  },
  {
    id: 'v3',
    title: 'Ryto Yoga srauto praktika',
    slug: 'ryto-yoga-srauto-praktika',
    category: 'yoga',
    duration: 25,
    level: 'beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1280&h=720&fit=crop&q=80',
    description: 'Švelni ryto yoga praktika energijai ir lankstumui. Puikus būdas pradėti dieną.',
    equipment: ['Kilimėlis'],
    isPremium: false,
  },
  {
    id: 'v4',
    title: 'HIIT sėdmenų ir kojų',
    slug: 'hiit-sedmenu-ir-koju',
    category: 'hiit',
    duration: 15,
    level: 'advanced',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1280&h=720&fit=crop&q=80',
    description: 'Intensyvi HIIT treniruotė sėdmenims ir kojoms. Greitas kalorijas deginantis formatas.',
    equipment: ['Hanteliai', 'Kilimėlis'],
    isPremium: true,
  },
  {
    id: 'v5',
    title: 'Pilvo presui - 10 min',
    slug: 'pilvo-presui-10-min',
    category: 'strength',
    duration: 10,
    level: 'beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1280&h=720&fit=crop&q=80',
    description: 'Trumpa bet efektyvi pilvo raumenų treniruotė. Tinka kasdien.',
    equipment: ['Kilimėlis'],
    isPremium: false,
  },
  {
    id: 'v6',
    title: 'Vakaro tempimas ir atsipalaidavimas',
    slug: 'vakaro-tempimas-atsipalaidavimas',
    category: 'stretching',
    duration: 15,
    level: 'beginner',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1280&h=720&fit=crop&q=80',
    description: 'Raminantis tempimas prieš miegą. Padeda atsipalaiduoti ir pagerinti lankstumą.',
    equipment: ['Kilimėlis'],
    isPremium: false,
  },
  {
    id: 'v7',
    title: 'Rankų ir pečių jėgos treniruotė',
    slug: 'ranku-peciu-jegos-treniruote',
    category: 'strength',
    duration: 25,
    level: 'intermediate',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1280&h=720&fit=crop&q=80',
    description: 'Suformuok gražius pečius ir rankų raumenis su šia tiksline treniruote.',
    equipment: ['Hanteliai', 'Kilimėlis', 'Guma'],
    isPremium: true,
  },
  {
    id: 'v8',
    title: 'Šokių kardio - dance workout',
    slug: 'sokiu-kardio-dance',
    category: 'cardio',
    duration: 30,
    level: 'intermediate',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    thumbnail: 'https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?w=1280&h=720&fit=crop&q=80',
    description: 'Linksmas šokių kardio, kuris degina kalorijas ir kelia nuotaiką!',
    equipment: [],
    isPremium: true,
  },
]

export const CATEGORIES = [
  { value: '', label: 'Visos kategorijos' },
  { value: 'strength', label: 'Jėgos treniruotės' },
  { value: 'cardio', label: 'Kardio' },
  { value: 'yoga', label: 'Yoga' },
  { value: 'hiit', label: 'HIIT' },
  { value: 'stretching', label: 'Tempimas' },
]

export const LEVELS = [
  { value: '', label: 'Visi lygiai' },
  { value: 'beginner', label: 'Pradedantis' },
  { value: 'intermediate', label: 'Vidutinis' },
  { value: 'advanced', label: 'Pažengęs' },
]

export const DURATIONS = [
  { value: '', label: 'Visa trukmė' },
  { value: '0-15', label: '0-15 min' },
  { value: '15-30', label: '15-30 min' },
  { value: '30+', label: '30+ min' },
]

export const getCategoryLabel = (category: string) => {
  return CATEGORIES.find((c) => c.value === category)?.label || category
}

export const getLevelLabel = (level: string) => {
  return LEVELS.find((l) => l.value === level)?.label || level
}
