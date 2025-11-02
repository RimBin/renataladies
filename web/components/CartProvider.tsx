"use client"
import React, { createContext, useContext, useMemo, useState } from 'react'
import type { Product } from '@/lib/products'

export type CartItem = { product: Product; qty: number }
type CartCtx = {
  items: CartItem[]
  add: (product: Product, qty?: number) => void
  remove: (id: string) => void
  total: number
  isCartOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
}

const Ctx = createContext<CartCtx | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setCartOpen] = useState(false)

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)
  const toggleCart = () => setCartOpen(prev => !prev)

  const add = (product: Product, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((i) => i.product.id === product.id)
      if (idx >= 0) {
        const clone = [...prev]
        clone[idx] = { ...clone[idx], qty: clone[idx].qty + qty }
        return clone
      }
      return [...prev, { product, qty }]
    })
    openCart()
  }

  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.product.id !== id))

  const total = useMemo(() => items.reduce((s, i) => s + i.product.price * i.qty, 0), [items])

  const value = useMemo(() => ({ 
    items, 
    add, 
    remove, 
    total,
    isCartOpen,
    openCart,
    closeCart,
    toggleCart
  }), [items, total, isCartOpen])

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useCart() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useCart must be used within <CartProvider>')
  return ctx
}

