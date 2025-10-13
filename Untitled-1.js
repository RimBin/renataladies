"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/components/CartProvider';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { items } = useCart();
  
  // Grupuoti navigacijos punktus į kategorijas
  const primaryMenu = [
    { href: "/plans", label: "Mitybos planai" },
    { href: "/vip", label: "Konsultacijos" },
    { href: "/videos", label: "Treniruočių video" },
  ];
  
  const secondaryMenu = [
    { href: "/blog", label: "Tinklaraštis" },
    { href: "/kontaktai", label: "Kontaktai" },
    { href: "/apie", label: "Apie mane" },
    { href: "/faq", label: "DUK" },
  ];

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl bg-white/70 backdrop-blur-lg shadow-lg border border-white/40 rounded-3xl px-4 md:px-6 py-2.5 flex items-center justify-between">
      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <img src="/renata%20ladies%20logotipas.svg" alt="Renata Ladies" className="h-8 md:h-9 w-auto" />
      </Link>
      
      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center space-x-2">
        {/* Primary nav items */}
        <ul className="flex items-center gap-5 text-sm font-medium">
          {primaryMenu.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`px-2.5 py-2 rounded-full transition ${
                  pathname === item.href 
                    ? 'font-semibold text-[#AB57F4]' 
                    : 'hover:bg-white/80'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        
        {/* Divider */}
        <div className="h-6 w-px bg-gray-200 mx-1"></div>
        
        {/* Secondary nav items */}
        <ul className="flex items-center gap-3 text-sm text-neutral-600">
          {secondaryMenu.map((item) => (
            <li key={item.href}>
              <Link 
                href={item.href}
                className={`px-2 py-1.5 transition ${
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
      <div className="flex items-center gap-1.5">
        {/* Account */}
        <Link 
          href="/api/auth/signin" 
          className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-full hover:bg-neutral-100"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5">
            <path d="M7.5 9.5c-.4-3 1.9-5 4.5-5s4.9 2 4.5 5c1 .3 1.8 1.1 2.1 2.1-1-.6-2.1-.9-3.2-.9h-.5c-.8 1.4-2.1 2.3-3.9 2.3s-3.1-.9-3.9-2.3H9c-1.1 0-2.2.3-3.2.9.3-1 1.1-1.8 2.1-2.1Z"></path>
            <circle cx="11.25" cy="10.25" r=".2" fill="currentColor" stroke="none"></circle>
            <circle cx="12.75" cy="10.25" r=".2" fill="currentColor" stroke="none"></circle>
            <path d="M5 20v-1c.5-2.5 3.2-4 7-4s6.5 1.5 7 4v1"></path>
          </svg>
          <span className="hidden xl:inline text-sm">Paskyra</span>
        </Link>
        
        {/* CTA */}
        <Link 
          href="/plans" 
          className="bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white px-4 md:px-5 py-2 rounded-full font-semibold text-sm hover:opacity-90 transition inline-flex items-center gap-1.5"
        >
          <span className="hidden xs:inline">Pradėti šiandien</span>
          <span className="xs:hidden">Pradėti</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5 text-rlText">
            <circle cx="12" cy="12" r="11" fill="currentColor"></circle>
            <path d="M8 16 L16 8" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
            <path d="M10 8 H16 V14" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
          </svg>
        </Link>
        
        {/* Cart */}
        <Link 
          href="/cart" 
          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full hover:bg-neutral-100 relative"
          aria-label={`Krepšelis, prekių: ${items?.length || 0}`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="w-5 h-5">
            <rect x="7" y="9" width="10" height="10" rx="2" ry="2"></rect>
            <path d="M9 9c0-2 6-2 6 0"></path>
          </svg>
          <span className="text-xs font-semibold bg-black text-white rounded-full px-1.5 py-0.5 min-w-[18px] text-center">
            {items?.length || 0}
          </span>
        </Link>
        
        {/* Mobile menu toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-full hover:bg-neutral-100"
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
        <div className="lg:hidden fixed inset-x-0 top-20 bg-white/95 backdrop-blur-md p-4 shadow-lg rounded-lg mx-4 z-40 border border-gray-100 animate-fadeIn">
          <ul className="space-y-2">
            {[...primaryMenu, ...secondaryMenu].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg transition ${
                    pathname === item.href
                      ? 'bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white'
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
  );
}
