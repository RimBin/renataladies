"use client"
import { notFound } from 'next/navigation'
import { useCart } from '@/components/CartProvider'
import { GradientButton } from '@/components/ui/GradientButton'
import { APPAREL_ITEMS } from '@/lib/apparelData'

export default function ApparelDetailPage({ params }: { params: { slug: string } }) {
  const { add } = useCart()
  const item = APPAREL_ITEMS.find((i) => i.slug === params.slug)

  if (!item) return notFound()

  const handleAdd = () => {
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
    <section className="max-w-[1100px] mx-auto px-4 pt-24 md:pt-28 pb-16 sm:pb-20">
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-lg border border-neutral-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
          <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/85 text-xs font-semibold text-neutral-700">
            {item.category}
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-rlText">{item.title}</h1>
          <p className="text-neutral-700 text-lg">{item.longDescription}</p>

          <div className="grid sm:grid-cols-2 gap-3">
            {item.benefits.map((b, idx) => (
              <div key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                <span className="text-green-500 mt-0.5">✓</span> {b}
              </div>
            ))}
          </div>

          {item.specs && (
            <div className="pt-2">
              <h3 className="text-sm font-semibold text-neutral-800 mb-1">Specifikacija</h3>
              <ul className="text-sm text-neutral-700 space-y-1">
                {item.specs.map((s, idx) => (
                  <li key={idx}>• {s}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="flex items-center gap-4 pt-4">
            <span className="text-3xl font-bold gradient-text">{item.price} €</span>
            <GradientButton
              as="button"
              onClick={handleAdd}
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
              className="px-6 py-3 text-base"
            >
              Į krepšelį
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  )
}
