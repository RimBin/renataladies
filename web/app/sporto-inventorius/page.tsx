"use client"
import Link from 'next/link'
import { useState } from 'react'
import { useCart } from '@/components/CartProvider'
import { GradientButton } from '@/components/ui/GradientButton'
import { EQUIPMENT_ITEMS } from '@/lib/equipmentData'

const CATEGORIES = ['Visi', 'Gumos ir juostos', 'Kilimėliai', 'Mobilumas', 'Svoriniai', 'Priedai']

export default function SportoInventoriusPage() {
  const { add } = useCart()
  const [selectedCategory, setSelectedCategory] = useState('Visi')

  const filteredItems =
    selectedCategory === 'Visi'
      ? EQUIPMENT_ITEMS
      : EQUIPMENT_ITEMS.filter((item) => item.category === selectedCategory)

  const handleAdd = (item: (typeof EQUIPMENT_ITEMS)[number]) => {
    add(
      {
        id: item.id,
        title: item.title,
        price: parseFloat(item.price),
        thumb: item.image,
        description: item.description
      } as any,
      1
    )
  }

  return (
    <section className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Sporto <span className="gradient-text">inventorius</span>
          </h1>
        </div>
        <div>
          <p className="text-lg text-neutral-600">
            Namų treniruotėms pritaikyti įrankiai: patogūs, kompaktiški ir parinkti taip, kad pasiektum rezultatų be salės.
          </p>
        </div>
      </div>

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
        {filteredItems.map((item) => (
          <article
            key={item.id}
            className="rounded-2xl bg-white shadow hover:shadow-xl transition overflow-hidden group h-full flex flex-col"
          >
            <Link href={`/sporto-inventorius/${item.slug}`}>
              <div className="relative aspect-[4/3]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-neutral-700">
                  {item.category}
                </div>
              </div>
            </Link>
            <div className="p-6 flex flex-col flex-1">
              <Link href={`/sporto-inventorius/${item.slug}`}>
                <h3 className="font-bold text-xl text-rlText mb-2 hover:text-[#F28ACD] transition">{item.title}</h3>
              </Link>
              <p className="text-sm text-neutral-600 mb-4 flex-1">{item.description}</p>

              <ul className="space-y-1 mb-4">
                {item.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="text-xs text-neutral-600 flex items-center gap-2">
                    <span className="text-green-500">✓</span> {benefit}
                  </li>
                ))}
              </ul>

              <div className="flex items-center justify-between mt-4 pt-4 border-t">
                <span className="text-2xl font-bold gradient-text">{item.price} €</span>
                <button
                  onClick={() => handleAdd(item)}
                  className="bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition"
                >
                  Į krepšelį
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
