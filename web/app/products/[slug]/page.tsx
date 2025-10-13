import { getProductBySlug } from '@/lib/products'
import { notFound } from 'next/navigation'
import { AddToCartButton } from '@/components/product/AddToCartButton'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug)
  if (!product) return notFound()

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 grid md:grid-cols-2 gap-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={product.image} alt={product.title} className="w-full aspect-[4/3] object-cover rounded" />
      <div className="space-y-4">
  <h1 className="h2 font-extrabold">{product.title}</h1>
  <p className="text-gray-600 text-responsive">€ {product.price.toFixed(2)}</p>
  <p className="text-gray-700 text-responsive">{product.description}</p>
        <AddToCartButton product={product} />
      </div>
    </div>
  )
}
