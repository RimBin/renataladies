"use client"
import { useCart } from '@/components/CartProvider'
import Link from 'next/link'
import { useState } from 'react'

const SUPPLEMENTS = [
  {
    id: 'omega3',
    slug: 'omega-3',
    title: 'Omega-3',
    category: 'Riebalų rūgštys',
    description: 'Aukštos kokybės žuvų taukai širdies sveikatai ir uždegimų mažinimui.',
    longDescription: 'Premium kokybės Omega-3 žuvų taukai, gauti iš laukinių žuvų. Šis papildas yra būtinas širdies ir kraujagyslių sistemos sveikatai palaikyti, smegenų funkcijoms gerinti bei uždegimams mažinti.',
    benefits: ['Širdies sveikata', 'Smegenų funkcija', 'Uždegimų mažinimas', 'Cholesterolio kontrolė'],
    dosage: 'Po 2 kapsules per dieną su maistu',
    ingredients: 'Žuvų taukai (EPA 360mg, DHA 240mg), vitaminas E',
    price: '24.99',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'vitamin-d',
    slug: 'vitaminas-d3',
    title: 'Vitaminas D',
    category: 'Vitaminai',
    description: 'Būtinas vitaminų kompleksas imuniteto stiprinimui ir kaulų sveikatai.',
    longDescription: 'Aukštos koncentracijos vitaminas D3 padeda palaikyti sveiką imunitetą ir tvirtus kaulus. Ypač svarbus rudens ir žiemos laikotarpiu.',
    benefits: ['Imunitetas', 'Kaulų sveikata', 'Nuotaikos reguliavimas', 'Kalcio įsisavinimas'],
    dosage: '1 kapsula per dieną',
    ingredients: 'Vitaminas D3 (2000 IU), MCT aliejus',
    price: '16.99',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'magnesium',
    slug: 'magnis',
    title: 'Magnis',
    category: 'Mineralai',
    description: 'Padeda atsipalaiduoti raumenims, gerinti miegą ir mažinti stresą.',
    longDescription: 'Magnis padeda atsipalaiduoti raumenims po treniruočių, pagerina miego kokybę ir padeda kovoti su stresu.',
    benefits: ['Raumenų atsipalaidavimas', 'Geresnis miegas', 'Streso mažinimas', 'Energijos gamyba'],
    dosage: '2 tabletės prieš miegą',
    ingredients: 'Magnio citratas (400mg elementinio magnio)',
    price: '18.99',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'protein',
    slug: 'baltymu-mildeliai',
    title: 'Baltymų milteliai',
    category: 'Baltymai',
    description: 'Augalinis baltymas lengvam papildymui po treniruotės ar pusryčiuose.',
    longDescription: 'Augalinis baltymų kompleksas iš žirnių, ryžių ir kanapių. Idealus po treniruotės ar prie pusryčių. Be laktozės, be glitimo.',
    benefits: ['Raumenų augimas', 'Sočio jausmas', 'Greitas paruošimas', 'Veganiška formulė'],
    dosage: '1-2 šaukštai (30-60g) per dieną',
    ingredients: 'Žirnių baltymai, ryžių baltymai, kanapių baltymai',
    price: '32.99',
    image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'probiotics',
    slug: 'probiotikai',
    title: 'Probiotikai',
    category: 'Probiotikai',
    description: 'Palaikyti virškinimo sveikatą ir stiprinti imuninę sistemą.',
    longDescription: '10 skirtingų probiotikų padermių kompleksas žarnyno mikroflorai atkurti. Padeda gerinti virškinimą ir stiprinti imunitetą.',
    benefits: ['Virškinimo sveikata', 'Imunitetas', 'Žarnyno mikroflora', 'Patinimų mažinimas'],
    dosage: '1 kapsula per dieną tuščiu skrandžiu',
    ingredients: '10 mlrd. KSV probiotikų (Lactobacillus, Bifidobacterium)',
    price: '28.99',
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'multivitamin',
    slug: 'multivitaminai-moterims',
    title: 'Multivitaminai moterims',
    category: 'Vitaminai',
    description: 'Kompleksinis vitaminų ir mineralų derinys kasdieniniam poreikiui.',
    longDescription: 'Specialiai moterims sukurtas multivitaminų kompleksas su papildoma geležimi, folato rūgštimi ir B grupės vitaminais.',
    benefits: ['Energija', 'Odos sveikata', 'Hormonų balansas', 'Plaukų stiprumas'],
    dosage: '2 tabletės per dieną su maistu',
    ingredients: 'Vitaminai A, C, D, E, K, B kompleksas, geležis, cinkas',
    price: '22.99',
    image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?q=80&w=800&auto=format&fit=crop'
  },
]

const CATEGORIES = ['Visi', 'Vitaminai', 'Mineralai', 'Baltymai', 'Probiotikai', 'Riebalų rūgštys']

export default function PapildaiPage() {
  const { add } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('Visi')

  const handleAddToCart = (supplement: typeof SUPPLEMENTS[0]) => {
    add({
      id: supplement.id,
      title: supplement.title,
      price: parseFloat(supplement.price),
      thumb: supplement.image,
      description: supplement.description
    } as any, 1)
  }

  const filteredSupplements = selectedCategory === 'Visi' 
    ? SUPPLEMENTS 
    : SUPPLEMENTS.filter(s => s.category === selectedCategory)

  return (
    <section className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Maisto <span className="gradient-text">papildai</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Kokybiški papildai, kuriuos pati naudoju ir rekomenduoju. Viską išbandžiau ir patvirtinu kokybę.
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-full font-medium text-sm transition ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 shadow'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredSupplements.map((supplement) => (
          <article key={supplement.id} className="rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden group">
            <Link href={`/papildai/${supplement.slug}`}>
              <div className="relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={supplement.image} 
                  alt={supplement.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700">
                  {supplement.category}
                </div>
              </div>
            </Link>
            <div className="p-6">
              <Link href={`/papildai/${supplement.slug}`}>
                <h3 className="font-bold text-xl text-rlText mb-2 hover:text-[#F28ACD] transition">{supplement.title}</h3>
              </Link>
              <p className="text-sm text-neutral-600 mb-4">{supplement.description}</p>
              
              <ul className="space-y-1 mb-4">
                {supplement.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="text-xs text-neutral-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-2xl font-bold gradient-text">{supplement.price} €</span>
                <button 
                  onClick={() => handleAddToCart(supplement)}
                  className="bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition"
                >
                  Į krepšelį
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Info Section */}
      <div className="mt-16 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Kodėl šie <span className="gradient-text">papildai</span>?
          </h2>
          <p className="text-lg text-neutral-700 mb-6">
            Viską, ką rekomenduoju, pati naudoju ir testuoju. Šie papildai yra aukštos kokybės, 
            patikrintų gamintojų ir tikrai padeda pasiekti geresnius rezultatus – tiek treniruotėse, 
            tiek kasdienėje savijautoje.
          </p>
          <p className="text-neutral-600">
            💡 <strong>Patarimas:</strong> Prieš pradedant vartoti bet kokius papildus, pasitarkite su sveikatos specialistu, 
            ypač jei turite lėtinių ligų ar vartojate vaistus.
          </p>
        </div>
      </div>
    </section>
  )
}
