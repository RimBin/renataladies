"use client"
import { useCart } from '@/components/CartProvider'
import type { Product } from '@/lib/products'

export function AddToCartButton({ product }: { product: Product }) {
  const { add } = useCart()
  return (
    <button
      onClick={() => add(product, 1)}
      className="inline-flex items-center justify-center rounded bg-black px-4 py-2 text-white hover:opacity-90"
    >
      Į krepšelį
    </button>
  )
}
