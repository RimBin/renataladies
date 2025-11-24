export type ApparelItem = {
  id: string
  slug: string
  title: string
  category: string
  description: string
  benefits: string[]
  price: string
  image: string
  longDescription: string
  specs?: string[]
}

export const APPAREL_ITEMS: ApparelItem[] = [
  {
    id: 'leggings',
    slug: 'auksto-liemens-tampres',
    title: 'Aukšto liemens tamprės',
    category: 'Tampres',
    description: 'Skulptuojančios, squat-proof ir kvėpuojančios.',
    longDescription:
      'Itin elastingos tamprės su aukštu juosmeniu. Nepermatomos net gilaus pritūpimo metu, greitai džiūsta ir priglunda kaip antra oda.',
    benefits: ['Neslysta juosmuo', 'Nepermatomos', 'Greitai džiūsta'],
    specs: ['Sudėtis: 75% nailonas, 25% spandeksas', 'Skalbti 30°C', 'Spalvos: juoda, pilka, alyvinė'],
    price: '39.99',
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80'
  },
  {
    id: 'sports-bra',
    slug: 'sportine-liemenele',
    title: 'Sportinė liemenėlė',
    category: 'Liemenėlės',
    description: 'Vidutinio intensyvumo palaikymas su nuimamais kaušeliais.',
    longDescription:
      'Kryžiuotos petnešos, nuimami kaušeliai ir kvėpuojantis audinys suteikia komfortą kardio ir jėgos treniruotėms.',
    benefits: ['Kvėpuojantis audinys', 'Minkšti kaušeliai', 'Nespaudžia petnešos'],
    specs: ['Sudėtis: 80% poliesteris, 20% elastanas', 'Vidutinio intensyvumo palaikymas'],
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80'
  },
  {
    id: 'hoodie',
    slug: 'oversized-hoodie',
    title: 'Oversized džemperis',
    category: 'Viršutiniai',
    description: 'Minkštas vidus, ilgesnis siluetas ir kangaroo kišenė.',
    longDescription:
      'Šiltas „oversized“ džemperis su kapišonu – puikus pasirinkimas apšilimui arba kelionei į/iš treniruotės.',
    benefits: ['Šiltas vidus', 'Laisvas kritimas', 'Puikiai prieš/po treniruotės'],
    specs: ['Sudėtis: 65% medvilnė, 35% poliesteris', 'Vidinis švelnus pūkelis'],
    price: '44.99',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80'
  },
  {
    id: 'crop-tee',
    slug: 'crop-topas',
    title: 'Crop topas',
    category: 'Viršutiniai',
    description: 'Lengvas, greitai džiūstantis audinys kardio ir treniruotėms.',
    longDescription:
      'Trumpintas, laisvo kritimo topas iš drėgmę išgarinančio audinio. Tinka sluoksniuoti su sportine liemenėle.',
    benefits: ['Kvėpuoja', 'Lengvas', 'Atsparus prakaitui'],
    specs: ['Sudėtis: 88% poliesteris, 12% elastanas', 'Aukštesnė ventiliacija'],
    price: '19.99',
    image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&q=80'
  },
  {
    id: 'joggers',
    slug: 'jogger-kelnes',
    title: 'Jogger kelnės',
    category: 'Kelnės',
    description: 'Tamprus audinys ir siaurėjantis modelis laisvalaikiui ir apšilimui.',
    longDescription:
      'Patogios jogger kelnės su siaurėjančiomis klešnėmis, tampriu juosmeniu ir šoninėmis kišenėmis.',
    benefits: ['Tamprus audinys', 'Gilios kišenės', 'Patogus prigludimas'],
    specs: ['Sudėtis: 60% medvilnė, 35% poliesteris, 5% elastanas', 'Elastinis juosmuo su raišteliu'],
    price: '34.99',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80'
  },
  {
    id: 'training-shorts',
    slug: 'treniruociu-sortai',
    title: 'Treniruočių šortai',
    category: 'Šortai',
    description: 'Lengvi, su vidinėmis tamprių kelnaitėmis stabilumui.',
    longDescription:
      'Dvigubos konstrukcijos šortai su vidinėmis tampriomis kelnaitėmis ir šoninėmis kišenėmis, kad būtum pasiruošusi kardio ar HIIT.',
    benefits: ['Vidinės tamprės', 'Šoninės kišenės', 'Kvėpuojantys'],
    specs: ['Sudėtis: 90% poliesteris, 10% elastanas', 'Vidinės tamprės: 80% nailonas, 20% elastanas'],
    price: '22.99',
    image: 'https://images.unsplash.com/photo-1520716963369-8b9e5d2d70ed?w=800&q=80'
  }
]
