import Link from 'next/link'
import { products } from '@/lib/products'
import { Card } from '@/components/ui/Card'

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="h1 font-extrabold mb-6">Visos <span className="rl-grad-word">prekės</span></h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <li key={p.id}>
            <Card className="overflow-hidden h-full">
            <Link href={`/products/${p.slug}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.image} alt={p.title} className="w-full aspect-[4/3] object-cover" />
              <div className="p-4 space-y-1">
                <h2 className="h4 font-medium">{p.title}</h2>
                <p className="text-sm text-gray-600">€ {p.price.toFixed(2)}</p>
              </div>
            </Link>
            </Card>
          </li>
        ))}
      </ul>
    </div>
  )
}
