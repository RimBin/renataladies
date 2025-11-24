"use client"
import { useCart } from '@/components/CartProvider'
import Link from 'next/link'
import { useParams } from 'next/navigation'
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
    title: 'Vitaminas D3',
    category: 'Vitaminai',
    description: 'Būtinas vitaminų kompleksas imuniteto stiprinimui ir kaulų sveikatai.',
    longDescription: 'Aukštos koncentracijos vitaminas D3 padeda palaikyti sveiką imunitetą ir tvirtus kaulus. Ypač svarbus rudens ir žiemos laikotarpiu.',
    benefits: ['Imunitetas', 'Kaulų sveikata', 'Nuotaikos reguliavimas', 'Kalcio įsisavinimas'],
    dosage: '1 kapsula per dieną',
    ingredients: 'Vitaminas D3 (2000 IU), MCT aliejus',
    price: '16.99',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?q=80&w=800&auto=format&fit=crop'
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
    title: 'Baltymų mildeliai',
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
    image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?q=80&w=800&auto=format&fit=crop'
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
    image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&auto=format&fit=crop'
  },
]

export default function SupplementDetailPage() {
  const params = useParams()
  const { add } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const supplement = SUPPLEMENTS.find(s => s.slug === params.slug)
  const images = supplement ? [supplement.image, supplement.image, supplement.image] : []

  if (!supplement) {
    return (
      <div className="max-w-[1440px] mx-auto px-4 pt-32 pb-24 text-center">
        <h1 className="text-4xl font-bold text-rlText mb-4">Papildas nerastas</h1>
        <Link href="/papildai" className="text-[#F28ACD] hover:underline">
          ← Grįžti į papildų sąrašą
        </Link>
      </div>
    )
  }

  const handleAddToCart = () => {
    add({
      id: supplement.id,
      title: supplement.title,
      price: parseFloat(supplement.price),
      thumb: supplement.image,
      description: supplement.description
    } as any, quantity)
    
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  const relatedSupplements = SUPPLEMENTS.filter(
    s => s.category === supplement.category && s.id !== supplement.id
  ).slice(0, 3)

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-28">
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-[#F28ACD]">Pradžia</Link>
          <span>/</span>
          <Link href="/papildai" className="hover:text-[#F28ACD]">Papildai</Link>
          <span>/</span>
          <span className="text-rlText font-medium">{supplement.title}</span>
        </nav>
      </div>

      {/* Product Detail */}
      <section className="max-w-[1440px] mx-auto px-4 pb-16 sm:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="flex gap-4">
            {/* Thumbnail Gallery - Vertical */}
            <div className="flex flex-col gap-3 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-neutral-300 scrollbar-track-neutral-100">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden border-2 transition ${
                    selectedImage === idx
                      ? 'border-[#F28ACD] shadow-md'
                      : 'border-neutral-200 hover:border-neutral-300'
                  }`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={`${supplement.title} ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative flex-1 aspect-square rounded-2xl overflow-hidden bg-neutral-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={images[selectedImage]}
                alt={supplement.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold text-neutral-700">
                {supplement.category}
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl sm:text-5xl font-bold text-rlText mb-4">
              {supplement.title}
            </h1>
            
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-5xl font-bold gradient-text">{supplement.price} €</span>
            </div>

            <p className="text-lg text-neutral-700 mb-6">
              {supplement.longDescription}
            </p>

            {/* Benefits */}
            <div className="mb-8">
              <h3 className="font-bold text-lg text-rlText mb-3">Nauda:</h3>
              <ul className="grid sm:grid-cols-2 gap-2">
                {supplement.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700">
                    <span className="text-green-500 text-lg">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Dosage & Ingredients */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-xl p-6 mb-8">
              <div className="mb-4">
                <h4 className="font-semibold text-rlText mb-1">📦 Dozavimas:</h4>
                <p className="text-neutral-700">{supplement.dosage}</p>
              </div>
              <div>
                <h4 className="font-semibold text-rlText mb-1">🧪 Sudėtis:</h4>
                <p className="text-neutral-700">{supplement.ingredients}</p>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center border-2 border-neutral-200 rounded-full overflow-hidden">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-neutral-100 transition font-bold"
                >
                  −
                </button>
                <span className="px-6 py-2 font-semibold min-w-[60px] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-neutral-100 transition font-bold"
                >
                  +
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition"
              >
                Į krepšelį
              </button>
            </div>

            {showSuccess && (
              <div className="bg-green-50 border-2 border-green-200 text-green-800 px-4 py-3 rounded-lg text-center font-medium">
                ✓ Pridėta į krepšelį!
              </div>
            )}

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t text-sm text-neutral-600">
              <p className="mb-2">✓ Nemokamas pristatymas užsakymams virš 50 €</p>
              <p className="mb-2">✓ 14 dienų pinigų grąžinimo garantija</p>
              <p>✓ Sertifikuoti ir patikrinti produktai</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedSupplements.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-rlText mb-8">
              Panašūs <span className="gradient-text">papildai</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedSupplements.map((related) => (
                <Link 
                  key={related.id} 
                  href={`/papildai/${related.slug}`}
                  className="rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden group"
                >
                  <div className="relative aspect-[4/3]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-xl text-rlText mb-2 group-hover:text-[#F28ACD] transition">
                      {related.title}
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">{related.description}</p>
                    <span className="text-2xl font-bold gradient-text">{related.price} €</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
