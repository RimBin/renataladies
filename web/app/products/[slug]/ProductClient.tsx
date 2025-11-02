"use client"
import { useState } from 'react'
import Link from 'next/link'
import { Star, Heart, Share2, ShoppingCart, Check, Truck, Shield, Award } from 'lucide-react'

interface ProductClientProps {
  product: any
  images: string[]
  reviews: any[]
  avgRating: number
  relatedProducts: any[]
}

export default function ProductClient({ product, images, reviews, avgRating, relatedProducts }: ProductClientProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState<'description' | 'ingredients' | 'reviews'>('description')

  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
        <Link href="/" className="hover:text-[#AB57F4]">Pradžia</Link>
        <span>/</span>
        <Link href="/papildai" className="hover:text-[#AB57F4]">Produktai</Link>
        <span>/</span>
        <span className="text-neutral-900">{product.title}</span>
      </div>

      {/* Product Main Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square rounded-2xl overflow-hidden bg-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={images[selectedImage]} 
              alt={product.title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-3">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square rounded-xl overflow-hidden border-2 transition ${
                  selectedImage === idx ? 'border-[#AB57F4]' : 'border-transparent hover:border-neutral-300'
                }`}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={img} alt={`${product.title} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold text-rlText mb-3">
              {product.title}
            </h1>
            
            {/* Rating */}
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < Math.round(avgRating) ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} 
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {avgRating.toFixed(1)} ({reviews.length} atsiliepimai)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-bold text-[#AB57F4]">{product.price.toFixed(2)} €</span>
              <span className="text-lg text-neutral-500 line-through">{(product.price * 1.3).toFixed(2)} €</span>
              <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold">-23%</span>
            </div>

            <p className="text-neutral-700 text-lg leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Check, text: 'Natūralūs ingredientai' },
              { icon: Truck, text: 'Nemokamas pristatymas' },
              { icon: Shield, text: '30 dienų garantija' },
              { icon: Award, text: 'Sertifikuotas produktas' },
            ].map((benefit, idx) => (
              <div key={idx} className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl">
                <benefit.icon className="w-5 h-5 text-[#AB57F4]" />
                <span className="text-sm font-medium text-neutral-700">{benefit.text}</span>
              </div>
            ))}
          </div>

          {/* Quantity Selector */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">Kiekis</label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border rounded-xl">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-neutral-50 transition"
                >
                  −
                </button>
                <span className="px-6 py-2 border-x font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-neutral-50 transition"
                >
                  +
                </button>
              </div>
              <span className="text-sm text-neutral-600">Likutis: 47 vnt.</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 px-6 py-4 rounded-full bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition inline-flex items-center justify-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Į krepšelį
            </button>
            <button className="px-4 py-4 rounded-full border-2 border-neutral-200 hover:border-[#AB57F4] hover:text-[#AB57F4] transition">
              <Heart className="w-5 h-5" />
            </button>
            <button className="px-4 py-4 rounded-full border-2 border-neutral-200 hover:border-[#AB57F4] hover:text-[#AB57F4] transition">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-16">
        {/* Tab Navigation */}
        <div className="flex gap-2 border-b mb-6">
          {[
            { id: 'description' as const, label: 'Aprašymas' },
            { id: 'ingredients' as const, label: 'Sudėtis' },
            { id: 'reviews' as const, label: `Atsiliepimai (${reviews.length})` },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-semibold transition relative ${
                activeTab === tab.id
                  ? 'text-[#AB57F4]'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)]" />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="prose max-w-none">
          {activeTab === 'description' && (
            <div>
              <h3 className="text-2xl font-bold text-rlText mb-4">Produkto aprašymas</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <p className="text-neutral-700 leading-relaxed">
                Šis produktas sukurtas naudojant tik geriausius natūralius ingredientus, kurie padeda pasiekti norimų rezultatų. 
                Kiekvienas ingredientas buvo kruopščiai atrinktas ir išbandytas, kad užtikrintume maksimalią kokybę ir efektyvumą.
              </p>
              <ul className="list-disc list-inside space-y-2 text-neutral-700 mt-4">
                <li>Palaiko svorio valdymą</li>
                <li>Gerina medžiagų apykaitą</li>
                <li>Natūralūs ingredientai</li>
                <li>Tinka kasdieniam vartojimui</li>
              </ul>
            </div>
          )}

          {activeTab === 'ingredients' && (
            <div>
              <h3 className="text-2xl font-bold text-rlText mb-4">Sudėtis</h3>
              <div className="bg-neutral-50 rounded-xl p-6">
                <ul className="space-y-3 text-neutral-700">
                  <li className="flex justify-between">
                    <span>Žalioji arbata ekstraktas</span>
                    <span className="font-semibold">500mg</span>
                  </li>
                  <li className="flex justify-between">
                    <span>L-Karnitinas</span>
                    <span className="font-semibold">300mg</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vitaminas B6</span>
                    <span className="font-semibold">2mg</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Vitaminas B12</span>
                    <span className="font-semibold">10μg</span>
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div>
              <h3 className="text-2xl font-bold text-rlText mb-6">Klientų atsiliepimai</h3>
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="bg-neutral-50 rounded-xl p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-semibold text-rlText mb-1">{review.author}</div>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-neutral-300'}`} 
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-neutral-500">{new Date(review.date).toLocaleDateString('lt-LT')}</span>
                    </div>
                    <p className="text-neutral-700">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-3xl font-bold text-rlText mb-8">Panašūs produktai</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProducts.map((relatedProduct) => (
            <Link 
              key={relatedProduct.slug} 
              href={`/products/${relatedProduct.slug}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition"
            >
              <div className="aspect-square overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={relatedProduct.image} 
                  alt={relatedProduct.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-rlText mb-2 group-hover:text-[#AB57F4] transition">
                  {relatedProduct.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{relatedProduct.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-[#AB57F4]">{relatedProduct.price.toFixed(2)} €</span>
                  <button className="px-4 py-2 rounded-full bg-neutral-100 group-hover:bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] group-hover:text-white transition text-sm font-medium">
                    Žiūrėti
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
