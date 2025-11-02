import Link from 'next/link'
import { products } from '@/lib/products'
import { Card } from '@/components/ui/Card'

export default function ProductsPage() {
  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
            Visos <span className="gradient-text">prekės</span>
          </h1>
        </div>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <li key={p.id}>
            <Card className="overflow-hidden h-full">
            <Link href={`/products/${p.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4 space-y-1">
                <h2 className="h4 font-medium">{p.title}</h2>
                <p className="text-sm text-gray-600">{p.price.toFixed(2)} €</p>
              </div>
            </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
