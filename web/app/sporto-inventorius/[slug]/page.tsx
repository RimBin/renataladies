"use client"
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { EQUIPMENT_ITEMS } from '@/lib/equipmentData'

export default function EquipmentDetailPage({ params }: { params: { slug: string } }) {
  const { add } = useCart()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [showSuccess, setShowSuccess] = useState(false)
  const item = EQUIPMENT_ITEMS.find((i) => i.slug === params.slug)

  if (!item) return notFound()

  const images = [item.image, item.image, item.image]

  const handleAdd = () => {
    add(
      {
        id: item.id,
        title: item.title,
        price: parseFloat(item.price),
        thumb: item.image,
        description: item.description
      } as any,
      quantity
    )
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 3000)
  }

  return (
    <>
      {/* Breadcrumbs */}
      <div className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-28">
        <nav className="flex items-center gap-2 text-sm text-neutral-600 mb-8">
          <Link href="/" className="hover:text-[#F28ACD]">Pradžia</Link>
          <span>/</span>
          <Link href="/sporto-inventorius" className="hover:text-[#F28ACD]">Sporto inventorius</Link>
          <span>/</span>
          <span className="text-rlText font-medium">{item.title}</span>
        </nav>
      </div>

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
                <img src={img} alt={`${item.title} ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="relative flex-1 aspect-[4/5] rounded-3xl overflow-hidden shadow-lg border border-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={images[selectedImage]} alt={item.title} className="w-full h-full object-cover" />
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 text-xs font-semibold text-neutral-700">
              {item.category}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-4xl sm:text-5xl font-bold text-rlText mb-4">{item.title}</h1>
          
          <div className="flex items-baseline gap-4 mb-6">
            <span className="text-5xl font-bold gradient-text">{item.price} €</span>
          </div>

          <p className="text-lg text-neutral-700 mb-6">{item.longDescription}</p>

          {/* Benefits */}
          <div className="mb-8">
            <h3 className="font-bold text-lg text-rlText mb-3">Privalumai:</h3>
            <ul className="grid sm:grid-cols-2 gap-2">
              {item.benefits.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2 text-neutral-700">
                  <span className="text-green-500 text-lg">✓</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          {item.specs && (
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-xl p-6 mb-8">
              <h4 className="font-semibold text-rlText mb-3">📋 Specifikacija:</h4>
              <ul className="text-neutral-700 space-y-1">
                {item.specs.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>
          )}

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
              onClick={handleAdd}
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
            <p>✓ Originalūs ir kokybiški produktai</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
