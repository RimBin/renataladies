"use client"
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { EtCircleArrowUpRightIcon, BagIcon, WomanIcon } from '@/components/ui/icons'
import { useCart } from '@/components/CartProvider'

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const { items } = useCart()
  const count = items.reduce((s, i) => s + i.qty, 0)

  const primaryMenu = [
    { href: "/plans", label: "Mitybos planai" },
    { href: "/vip", label: "Konsultacijos" },
    { href: "/videos", label: "Treniruočių video" },
  ]
  
  const secondaryMenu = [
    { href: "/apie", label: "Apie mane" },
    { href: "/blog", label: "Tinklaraštis" },
    { href: "/faq", label: "DUK" },
    { href: "/kontaktai", label: "Kontaktai" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-6xl bg-white/70 backdrop-blur-lg shadow-lg border border-white/40 rounded-3xl px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/renata%20ladies%20logotipas.svg" alt="Renata Ladies" className="h-10 md:h-11 w-auto" />
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-1">
        {/* Primary menu */}
        <ul className="flex items-center text-sm font-medium">
          {primaryMenu.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`px-2.5 py-2 rounded-full transition ${
                  pathname === item.href 
                    ? 'font-semibold text-[#AB57F4] bg-purple-50' 
                    : 'hover:bg-white/80'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Divider */}
        <div className="h-5 w-px bg-gray-200 mx-2"></div>
        
        {/* Secondary menu */}
        <ul className="flex items-center text-sm text-neutral-600">
          {secondaryMenu.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`px-2 py-1.5 rounded-full transition ${
                  pathname === item.href 
                    ? 'font-semibold text-black' 
                    : 'hover:text-[#F28ACD]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Actions */}
      <div className="flex items-center gap-1">
        {/* Account */}
        <Link 
          href="/api/auth/signin" 
          className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full hover:bg-neutral-100"
        >
          <WomanIcon className="w-5 h-5" />
          <span className="hidden xl:inline text-sm">Paskyra</span>
        </Link>
        
        {/* CTA */}
        <Link 
          href="/plans" 
          className="bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-4 md:px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition inline-flex items-center gap-1.5"
        >
          <span className="hidden sm:inline">Pradėti šiandien</span>
          <span className="sm:hidden">Pradėti</span>
          <EtCircleArrowUpRightIcon className="w-4 h-4 text-rlText" />
        </Link>
        
        {/* Cart */}
        <Link 
          href="/cart" 
          className="inline-flex items-center gap-1 px-2 py-2 rounded-full hover:bg-neutral-100 relative"
          aria-label={`Krepšelis, prekių: ${count}`}
        >
          <BagIcon className="w-6 h-6" />
          {count > 0 && (
            <span className="absolute -top-0.5 -right-0.5 text-[10px] font-bold bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              {count}
            </span>
          )}
        </Link>
        
        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-neutral-100"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md p-4 shadow-xl rounded-2xl mx-4 border border-gray-100">
          <ul className="space-y-1">
            {[...primaryMenu, ...secondaryMenu].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg transition ${
                    pathname === item.href
                      ? 'bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white font-semibold'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
