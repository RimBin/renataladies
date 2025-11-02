import Link from 'next/link'
import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Heart,
  TrendingUp,
  Users,
} from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-neutral-50 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F28ACD]/10 via-[#AB57F4]/10 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10"></div>

      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24" preserveAspectRatio="none" viewBox="0 0 1440 100" fill="none">
          <path d="M0,50 C240,80 480,20 720,50 C960,80 1200,20 1440,50 L1440,0 L0,0 Z" fill="url(#footerGradient)" />
          <defs>
            <linearGradient id="footerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F28ACD" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#AB57F4" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#F28ACD" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-20">
        <div className="rl-section">
          <div className="mb-16">
            <div className="rl-section-header">
              <div>
                <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title">
                  Prisijunk prie <span className="gradient-text">bendruomenės</span>
                </h2>
              </div>
              <div>
                <p className="rl-section-copy">
                  Gauk naujienas, motyvacines žinutes ir ekskluzyvius pasiūlymus tiesiai į savo el. paštą.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                placeholder="Tavo el. paštas"
                className="w-full px-6 py-4 rounded-full border-2 border-neutral-200 focus:border-[#F28ACD] focus:outline-none transition-all"
              />
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 whitespace-nowrap">
                Užsisakyti
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#28262C]">Greitos Nuorodos</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { href: '/apie', label: 'Apie mane' },
                  { href: '/paslaugos', label: 'Paslaugos' },
                  { href: '/plans', label: 'Mitybos planai' },
                  { href: '/konsultacijos', label: 'Konsultacijos' },
                  { href: '/videos', label: 'Treniruočių video' },
                  { href: '/blog', label: 'Naujienos' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-[#F28ACD] transition-colors text-sm flex items-center gap-2 group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover/link:bg-[#F28ACD] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#AB57F4] to-[#F28ACD] flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#28262C]">Informacija</h4>
              </div>
              <ul className="space-y-3">
                {[
                  { href: '/pirkimo-salygos', label: 'Pirkimo sąlygos' },
                  { href: '/privatumo-politika', label: 'Privatumo politika' },
                  { href: '/grazinimo-politika', label: 'Grąžinimo politika' },
                  { href: '/mokejimo-budai', label: 'Mokėjimo būdai' },
                  { href: '/faq', label: 'DUK' },
                  { href: '/kontaktai', label: 'Kontaktai' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-neutral-600 hover:text-[#AB57F4] transition-colors text-sm flex items-center gap-2 group/link"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover/link:bg-[#AB57F4] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#28262C]">Kontaktai</h4>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group/item">
                  <MapPin className="w-5 h-5 text-[#F28ACD] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <a
                    href="https://www.google.com/maps/dir//UAB+Gym+Plius,+Islandijos+pl.+32,+Kaunas,+47483+Kauno+m.+sav./@54.9398894,23.8888313,567m/data=!3m1!1e3!4m17!1m7!3m6!1s0x46e71f3046f9eed9:0x9f973d2c204b89f4!2sUAB+Gym+Plius!8m2!3d54.9398894!4d23.8914116!16s%2Fg%2F11c6tl25vz!4m8!1m0!1m5!1m1!1s0x46e71f3046f9eed9:0x9f973d2c204b89f4!2m2!1d23.8914116!2d54.9398894!3e2?entry=ttu&g_ep=EgoyMDI1MTAxMy4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-600 hover:text-[#F28ACD] transition-colors text-sm"
                  >
                    Islandijos pl. 32, Kaunas
                  </a>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Mail className="w-5 h-5 text-[#F28ACD] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <a href="mailto:info@renataladies.com" className="text-neutral-600 hover:text-[#F28ACD] transition-colors text-sm">
                    info@renataladies.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group/item">
                  <Phone className="w-5 h-5 text-[#F28ACD] flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                  <a href="tel:+37068466408" className="text-neutral-600 hover:text-[#F28ACD] transition-colors text-sm">
                    +370 684 66408
                  </a>
                </li>
              </ul>
            </div>

            <div className="group">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#AB57F4] to-[#F28ACD] flex items-center justify-center">
                  <Users className="w-4 h-4 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#28262C]">Sekite Mane</h4>
              </div>

              <div className="flex gap-3 mb-8">
                {[
                  { icon: Facebook, href: 'https://www.facebook.com/renaladies', label: 'Facebook' },
                  { icon: Instagram, href: 'https://www.instagram.com/renataladies/', label: 'Instagram' },
                  { icon: Youtube, href: 'https://youtube.com/renataladies', label: 'YouTube' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-neutral-100 hover:bg-gradient-to-br hover:from-[#F28ACD] hover:to-[#AB57F4] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg group/social"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-neutral-600 group-hover/social:text-white transition-colors" />
                  </a>
                ))}
              </div>

              <div>
                <p className="text-sm text-neutral-500 mb-3 font-medium">Priimame:</p>
                <div className="grid grid-cols-2 gap-2">
                  {['Visa', 'Mastercard', 'PayPal', 'Paysera'].map((method) => (
                    <div
                      key={method}
                      className="px-3 py-2 bg-neutral-100 rounded-lg text-xs font-semibold text-neutral-700 text-center hover:bg-neutral-200 transition-colors"
                    >
                      {method}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-200">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#28262C]">Renata Ladies</p>
                  <p className="text-xs text-neutral-500">Įkvepiame moteris nuo 2007</p>
                </div>
              </div>

              <p className="text-sm text-neutral-500 text-center">
                © {currentYear} Renata Ladies. Sukurta su <Heart className="w-3 h-3 inline text-[#F28ACD] fill-[#F28ACD]" /> Lietuvoje
              </p>

              <div className="flex items-center gap-2 text-sm">
                <span className="text-neutral-500">Sukūrė</span>
                <a
                  href="https://itarena.lt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-[#F28ACD] transition-colors font-medium"
                >
                  IT Arena
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-32 h-32 bg-[#F28ACD]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-20 w-40 h-40 bg-[#AB57F4]/5 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  )
}
