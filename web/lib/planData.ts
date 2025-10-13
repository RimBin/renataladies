export const PLANS = [
  {
    id: 'fatloss-1600',
    title: 'Riebalų mažinimo planas (1600 kcal)',
    goal: 'svorio mažinimas',
    diet: 'subalansuota',
    days: 7,
    kcal: 1600,
    recipes: 35,
    includes: ['4 valgiai per dieną', 'Pirkinių sąrašai', 'Pakaitalai'],
    thumb:
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-1600.pdf',
    rating: 4.9,
  },
  {
    id: 'muscle-2000',
    title: 'Raumenų auginimas (2000–2200 kcal)',
    goal: 'raumenų auginimas',
    diet: 'subalansuota',
    days: 7,
    kcal: 2100,
    recipes: 40,
    includes: ['Baltyminiai užkandžiai', 'Variantai sporto dienoms', 'Pirkinių sąrašai'],
    thumb:
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-2000.pdf',
    rating: 4.8,
  },
  {
    id: 'vegan-1800',
    title: 'Augalinis balansas (1800 kcal)',
    goal: 'svorio mažinimas',
    diet: 'vegan',
    days: 7,
    kcal: 1800,
    recipes: 38,
    includes: ['Augaliniai baltymai', 'Greiti pietūs', 'Sezoniniai produktai'],
    thumb:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-vegan.pdf',
    rating: 4.7,
  },
  {
    id: 'glutenfree-1700',
    title: 'Be gliuteno (1700 kcal)',
    goal: 'svorio mažinimas',
    diet: 'be gliuteno',
    days: 7,
    kcal: 1700,
    recipes: 34,
    includes: ['Be glitimo alternatyvos', 'Pirkinių sąrašai', 'Pakaitalai'],
    thumb:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1400&auto=format&fit=crop',
    samplePdf: '/samples/mityba-glutenfree.pdf',
    rating: 4.6,
  },
]

export const GOALS = [
  { value: '', label: 'Visi tikslai' },
  { value: 'svorio mažinimas', label: 'Svorio mažinimas' },
  { value: 'raumenų auginimas', label: 'Raumenų auginimas' },
]

export const DIETS = [
  { value: '', label: 'Visos mitybos kryptys' },
  { value: 'subalansuota', label: 'Subalansuota' },
  { value: 'vegan', label: 'Augalinė (vegan)' },
  { value: 'be gliuteno', label: 'Be gliuteno' },
]
