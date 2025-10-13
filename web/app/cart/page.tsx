"use client"
import { useCart } from '@/components/CartProvider'

export default function CartPage() {
  const { items, remove, total } = useCart()
  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
  <h1 className="h1 font-extrabold mb-6"><span className="rl-grad-word">Krepšelis</span></h1>
      {items.length === 0 ? (
  <p className="text-responsive">Krepšelis tuščias.</p>
      ) : (
        <div className="space-y-6">
          <ul className="divide-y">
            {items.map((i) => (
              <li key={i.product.id} className="py-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={i.product.image} alt="" className="w-20 h-16 object-cover rounded" />
                  <div>
                    <p className="font-medium">{i.product.title}</p>
                    <p className="text-sm text-gray-600">Kiekis: {i.qty}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p>€ {(i.product.price * i.qty).toFixed(2)}</p>
                  <button onClick={() => remove(i.product.id)} className="text-sm text-red-600">Pašalinti</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between border-t pt-4">
            <p className="text-lg font-medium">Suma</p>
            <p className="text-lg">€ {total.toFixed(2)}</p>
          </div>
          <form action="/api/checkout" method="post">
            <button className="bg-black text-white px-5 py-2 rounded">Apmokėti (demo)</button>
          </form>
        </div>
      )}
    </div>
  )
}
