"use client"
import { useState, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { BagIcon, WomanIcon } from '@/components/ui/icons'
import { useCart } from '@/components/CartProvider'
import { GradientButton } from '@/components/ui/GradientButton'

type NavItem = { href: string; label: string }
type NavGroup = { label: string; items: NavItem[] }

export default function NavigationBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [shopOpen, setShopOpen] = useState(false)
  const [contentOpen, setContentOpen] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const shopTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const contentTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const pathname = usePathname()
  const { items, toggleCart } = useCart()
  const { data: session } = useSession()
  const count = items.reduce((s, i) => s + i.qty, 0)

  const demoUser = {
    name: 'Renata Marmienė',
    email: 'renata@example.com',
    image: null
  }

  const getUserAvatar = () => {
    const user = session?.user || demoUser
    if ('avatar' in user && user.avatar) return user.avatar as string
    if (user.image) return user.image
    const name = user.name || user.email || 'U'
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2)
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=F28ACD&color=fff&size=128`
  }

  const userAvatar = getUserAvatar()
  const userName = (session?.user?.name || demoUser.name)?.split(' ')[0] || 'Paskyra'

  const primaryMenu: NavItem[] = [
    { href: '/', label: 'Pradžia' },
    { href: '/apie', label: 'Apie mane' }
  ]

  const servicesMenu: NavGroup = {
    label: 'Paslaugos',
    items: [
      { href: '/konsultacijos', label: 'Konsultacijos' },
      { href: '/programos', label: 'Treniruočių programos' },
      { href: '/treniruociu-video', label: 'Treniruočių video' },
      { href: '/mitybos-planai', label: 'Mitybos planai' },
      { href: '/stovyklos', label: 'Seminarai' },
      { href: '/podcast', label: 'Podcastai' }
    ]
  }

  const shopMenu: NavGroup = {
    label: 'E-parduotuvė',
    items: [
      { href: '/papildai', label: 'Papildai' },
      { href: '/sporto-inventorius', label: 'Sporto inventorius' },
      { href: '/apranga', label: 'Apranga' }
    ]
  }

  const secondaryMenu: NavItem[] = [
    { href: '/duk', label: 'DUK' },
    { href: '/kontaktai', label: 'Kontaktai' }
  ]

  const contentMenu: NavGroup = {
    label: 'Turinys',
    items: [
      { href: '/videos', label: 'Video su Renata' },
      { href: '/podcast', label: 'Podcast' },
      { href: '/tinklarastis', label: 'Tinklaraštis' }
    ]
  }

  const isActive = (href: string) => pathname === href
  const isGroupActive = (group: NavGroup) => group.items.some(item => isActive(item.href))

  const handleHover = (setter: (v: boolean) => void, ref: React.MutableRefObject<NodeJS.Timeout | null>, open: boolean) => {
    if (ref.current) clearTimeout(ref.current)
    setter(open)
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-[#AB57F4] to-[#F28ACD] text-white text-center py-2 px-4 text-sm font-medium">
        🚧 Bandomoji versija – kol kas negalima pirkti. Greitai grįšime su visomis funkcijomis! 🚧
      </div>

      <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-[1440px] bg-white/70 backdrop-blur-lg shadow-lg border-b border-white/40 rounded-b-3xl px-4 md:px-6 py-2.5 md:py-3 flex items-center justify-between">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2 rounded-full hover:bg-neutral-100"
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

        <Link href="/" className="xl:flex-shrink-0 absolute xl:relative left-1/2 xl:left-auto -translate-x-1/2 xl:translate-x-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/renata%20ladies%20logotipas.svg" alt="Renata Ladies" className="h-12 md:h-14 w-auto" />
        </Link>

        <div className="hidden xl:flex items-center gap-1">
          <ul className="flex items-center text-sm font-medium">
            {primaryMenu.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2.5 py-2 rounded-full transition ${
                    isActive(item.href) ? 'font-semibold text-[#AB57F4] bg-purple-100' : 'hover:text-[#F28ACD]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => handleHover(setServicesOpen, servicesTimeoutRef, true)}
              onMouseLeave={() => {
                servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
              }}
            >
              <button
                className={`px-2.5 py-2 rounded-full transition flex items-center gap-1 ${
                  isGroupActive(servicesMenu) ? 'font-semibold text-[#AB57F4] bg-purple-100' : 'hover:text-[#F28ACD]'
                }`}
              >
                {servicesMenu.label}
                <svg className={`w-3 h-3 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px] z-50"
                  onMouseEnter={() => handleHover(setServicesOpen, servicesTimeoutRef, true)}
                  onMouseLeave={() => {
                    servicesTimeoutRef.current = setTimeout(() => setServicesOpen(false), 200)
                  }}
                >
                  {servicesMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition ${
                        isActive(item.href) ? 'font-semibold text-[#AB57F4] bg-purple-50' : 'hover:bg-gray-50 hover:text-[#F28ACD]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li
              className="relative"
              onMouseEnter={() => handleHover(setShopOpen, shopTimeoutRef, true)}
              onMouseLeave={() => {
                shopTimeoutRef.current = setTimeout(() => setShopOpen(false), 200)
              }}
            >
              <button
                className={`px-2.5 py-2 rounded-full transition flex items-center gap-1 ${
                  isGroupActive(shopMenu) ? 'font-semibold text-[#AB57F4] bg-purple-100' : 'hover:text-[#F28ACD]'
                }`}
              >
                {shopMenu.label}
                <svg className={`w-3 h-3 transition-transform ${shopOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {shopOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[220px] z-50"
                  onMouseEnter={() => handleHover(setShopOpen, shopTimeoutRef, true)}
                  onMouseLeave={() => {
                    shopTimeoutRef.current = setTimeout(() => setShopOpen(false), 200)
                  }}
                >
                  {shopMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition ${
                        isActive(item.href) ? 'font-semibold text-[#AB57F4] bg-purple-50' : 'hover:bg-gray-50 hover:text-[#F28ACD]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>

          <div className="h-5 w-px bg-gray-200 mx-2" />

          <ul className="flex items-center text-sm text-neutral-600">
            {secondaryMenu.map(item => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`px-2 py-1.5 rounded-full transition ${
                    isActive(item.href) ? 'font-semibold text-[#F28ACD]' : 'hover:text-[#F28ACD]'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li
              className="relative"
              onMouseEnter={() => handleHover(setContentOpen, contentTimeoutRef, true)}
              onMouseLeave={() => {
                contentTimeoutRef.current = setTimeout(() => setContentOpen(false), 200)
              }}
            >
              <button
                className={`px-2 py-1.5 rounded-full transition flex items-center gap-1 ${
                  isGroupActive(contentMenu) ? 'font-semibold text-[#F28ACD]' : 'hover:text-[#F28ACD]'
                }`}
              >
                {contentMenu.label}
                <svg className={`w-3 h-3 transition-transform ${contentOpen ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {contentOpen && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-100 py-2 min-w-[180px] z-50"
                  onMouseEnter={() => handleHover(setContentOpen, contentTimeoutRef, true)}
                  onMouseLeave={() => {
                    contentTimeoutRef.current = setTimeout(() => setContentOpen(false), 200)
                  }}
                >
                  {contentMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block px-4 py-2 text-sm transition ${
                        isActive(item.href) ? 'font-semibold text-[#F28ACD] bg-pink-50' : 'hover:bg-gray-50 hover:text-[#F28ACD]'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-1">
          <Link href="/paskyra" className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-2 rounded-full hover:bg-neutral-100">
            {userAvatar ? (
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-[#F28ACD]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={userAvatar} alt={userName} className="w-full h-full object-cover" />
              </div>
            ) : (
              <WomanIcon className="w-5 h-5" />
            )}
            <span className="hidden xl:inline text-sm">{userName}</span>
          </Link>

          <GradientButton
            as="a"
            href="#paslaugos"
            withArrow
            icon="et-circle-cutout"
            iconHover="slide-right"
            className="hidden xl:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold justify-center"
          >
            Rinkis savo kelią
          </GradientButton>

          <button
            onClick={toggleCart}
            className="inline-flex items-center gap-1 px-2 py-2 rounded-full hover:bg-neutral-100 relative"
            aria-label={`Krepšelis, prekių: ${count}`}
          >
            <BagIcon className="w-6 h-6" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 text-[10px] font-bold bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
                {count}
              </span>
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-md p-4 sm:p-6 shadow-xl rounded-2xl mx-2 sm:mx-4 border border-gray-100 max-h-[80vh] overflow-y-auto">
            <ul className="space-y-1.5 pb-4">
              {primaryMenu.map(item => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 sm:px-5 py-2 sm:py-3 rounded-xl text-sm sm:text-base font-semibold transition ${
                      isActive(item.href)
                        ? 'bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white shadow-md'
                        : 'hover:bg-purple-50 text-[#28262C]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              <li className="pt-3 mt-2 border-t border-gray-200">
                <p className="px-2 pb-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">{servicesMenu.label}</p>
                <div className="space-y-1">
                  {servicesMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                        isActive(item.href) ? 'bg-purple-100 text-[#AB57F4] font-semibold' : 'hover:bg-gray-50 text-neutral-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="pt-3 mt-2 border-t border-gray-200">
                <p className="px-2 pb-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">{shopMenu.label}</p>
                <div className="space-y-1">
                  {shopMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                        isActive(item.href) ? 'bg-purple-100 text-[#AB57F4] font-semibold' : 'hover:bg-gray-50 text-neutral-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="pt-3 mt-2 border-t border-gray-200">
                <div className="space-y-1">
                  {secondaryMenu.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2 rounded-lg text-sm transition ${
                        isActive(item.href) ? 'bg-pink-50 text-[#F28ACD] font-semibold' : 'hover:bg-gray-50 text-neutral-600'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="pt-3 mt-2 border-t border-gray-200">
                <p className="px-2 pb-2 text-xs font-bold text-neutral-400 uppercase tracking-wider">{contentMenu.label}</p>
                <div className="space-y-1">
                  {contentMenu.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-4 py-2.5 rounded-lg text-sm transition ${
                        isActive(item.href) ? 'bg-pink-50 text-[#F28ACD] font-semibold' : 'hover:bg-gray-50 text-neutral-700'
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </li>

              <li className="pt-3 mt-2 border-t border-gray-200">
                <Link
                  href="/paskyra"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg transition hover:bg-gray-50 text-neutral-700"
                >
                  <WomanIcon className="w-5 h-5 text-[#F28ACD]" />
                  <span className="text-sm">Paskyra</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}
