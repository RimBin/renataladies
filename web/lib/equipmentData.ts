export type EquipmentItem = {
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

export const EQUIPMENT_ITEMS: EquipmentItem[] = [
  {
    id: 'booty-band-set',
    slug: 'booty-band-set',
    title: 'Elastinių juostų rinkinys',
    category: 'Gumos ir juostos',
    description: '3 skirtingo pasipriešinimo juostos sėdmenims ir kojoms.',
    longDescription:
      'Pilnas 3 pasipriešinimo lygių rinkinys, kad galėtum aktyvuoti sėdmenis, šlaunis ir atlikti apšilimą namuose ar kelionėje.',
    benefits: ['Tinka namų treniruotėms', 'Neslystantis vidus', 'Puikiai kelionėms'],
    specs: ['3 juostos: light/medium/heavy', 'Medžiaga: audinio mišinys su lateksu', 'Drob bag transportavimui'],
    price: '19.99',
    image: '/images/products/equipment/booty-band-set.jpg'
  },
  {
    id: 'yoga-mat',
    slug: 'jogos-kilimelis',
    title: 'Jogos kilimėlis 6mm',
    category: 'Kilimėliai',
    description: 'Storesnis, neslystantis paviršius komfortiškam treniruotės pamatui.',
    longDescription:
      '6 mm storio TPE kilimėlis suteikia komfortą keliams ir riešams, o neslystantis paviršius leidžia saugiai atlikti pratimus.',
    benefits: ['Neslystanti danga', 'Lengvas valymas', 'Patogus storis'],
    specs: ['Storis: 6 mm', 'Medžiaga: TPE', 'Ilgis: 183 cm, plotis: 61 cm'],
    price: '29.99',
    image: '/images/services/workouts.webp'
  },
  {
    id: 'foam-roller',
    slug: 'putu-volelis',
    title: 'Putų volelis 45 cm',
    category: 'Mobilumas',
    description: 'Raumenų atpalaidavimui po treniruotės ir mobilumo darbui.',
    longDescription:
      'Vidutinio kietumo volelis padeda mažinti raumenų įtampą, gerina kraujotaką ir pagreitina atsistatymą po treniruotės.',
    benefits: ['Mažina įtampą', 'Skatina atsistatymą', 'Pagerina mobilumą'],
    specs: ['Ilgis: 45 cm', 'Skersmuo: 14 cm', 'Tankis: vidutinis'],
    price: '17.99',
    image: '/images/products/equipment/foam-roller.jpg'
  },
  {
    id: 'kettlebell-8kg',
    slug: 'kettlebell-8kg',
    title: 'Kettlebell 8 kg',
    category: 'Svoriniai',
    description: 'Universalus svoris jėgai ir stabilumui lavinti namuose.',
    longDescription:
      'Ketaus kettlebell su patogia rankena – idealiai tinka sėdmenų, nugaros ir viso kūno jėgos pratimams.',
    benefits: ['Viso kūno treniruotės', 'Tvirtas plienas', 'Patogi rankena'],
    specs: ['Svoris: 8 kg', 'Medžiaga: ketaus', 'Pagrindas: plokščias stabilumui'],
    price: '34.99',
    image: '/images/products/equipment/kettlebell.jpg'
  },
  {
    id: 'speed-rope',
    slug: 'greicio-virvute',
    title: 'Greičio šokdynė',
    category: 'Priedai',
    description: 'Reguliuojamas ilgis ir guolinės rankenos sklandžiam sukimui.',
    longDescription:
      'Plieninis troselis su PVC danga ir guolinėmis rankenomis, kad galėtum atlikti greitus dublinius šuolius ir kardio namuose.',
    benefits: ['Kardio namuose', 'Reguliuojamas ilgis', 'Guolinės rankenos'],
    specs: ['Reguliuojamas ilgis iki 3 m', 'Troselis: plienas su PVC danga', 'Rankenos su guoliais'],
    price: '14.99',
    image: '/images/products/equipment/speed-rope.jpg'
  },
  {
    id: 'mini-band-set',
    slug: 'mini-juostu-rinkinys',
    title: 'Mini juostų rinkinys',
    category: 'Gumos ir juostos',
    description: 'Mažos kilpinės juostos aktyvacijai, apšilimui ir reabilitacijai.',
    longDescription:
      '5 mini juostų komplektas nuo lengvo iki labai stipraus pasipriešinimo, kad galėtum įjungti raumenis prieš treniruotę.',
    benefits: ['Puikiai apšilimui', 'Įvairūs pasipriešinimai', 'Kompaktiškos'],
    specs: ['5 juostos: X-light iki X-heavy', 'Lateksas', 'Kompaktiškas dėklas'],
    price: '12.99',
    image: '/images/products/equipment/mini-bands.jpg'
  }
]
