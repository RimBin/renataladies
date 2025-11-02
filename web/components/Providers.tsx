"use client"
import { SessionProvider } from 'next-auth/react'
import { CartProvider, useCart } from '@/components/CartProvider'
import MiniCart from './MiniCart';

function CartManager({ children }: { children: React.ReactNode }) {
  const { isCartOpen, closeCart } = useCart();
  return (
    <>
      <MiniCart open={isCartOpen} setOpen={closeCart} />
      {children}
    </>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CartProvider>
        <CartManager>
          {children}
        </CartManager>
      </CartProvider>
    </SessionProvider>
  )
}
