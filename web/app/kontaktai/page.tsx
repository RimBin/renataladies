import Image from 'next/image'
import { GradientButton } from '@/components/ui/GradientButton'

export const metadata = {
  title: 'Kontaktai — Renataladies',
  description: 'Susisiekite dėl planų, konsultacijų ar partnerystės.'
}

export default function KontaktaiPage() {
  return (
    <main className="bg-gradient-to-b from-[#FFF5FB] via-white to-white">
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 pt-24 md:pt-32 pb-16 sm:pb-24">
        {/* Header */}
        <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
              Parašyk man <span className="gradient-text">žinutę</span>
            </h1>
          </div>
          <div>
            <p className="text-lg text-neutral-600">
              Turite klausimų apie mitybos planus, treniruotes ar VIP konsultacijas? Parašykite — atsakysiu kuo greičiau.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Image */}
          <div className="relative">
            {/* Mobile: Image + Contact side by side */}
            <div className="lg:hidden grid grid-cols-[1fr_1fr] gap-4 mb-6">
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-24px_rgba(171,87,244,0.4)]">
                <Image
                  src="/images/contacts/2025-R-4.jpg"
                  alt="Renata Narušytė"
                  fill
                  priority
                  className="object-cover object-[60%_20%]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Mobile Contact Card */}
              <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-4 border border-neutral-100 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h2 className="text-lg font-bold text-rlText">Susisiekite</h2>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-1">El. paštas</p>
                    <a 
                      href="mailto:info@renataladies.com" 
                      className="text-[#F28ACD] hover:text-[#AB57F4] font-semibold text-sm transition break-all"
                    >
                      info@renataladies.com
                    </a>
                  </div>

                  <div>
                    <p className="text-xs text-neutral-500 font-medium mb-1">Telefonas</p>
                    <a 
                      href="tel:+37068466408" 
                      className="text-[#F28ACD] hover:text-[#AB57F4] font-semibold text-sm transition"
                    >
                      +370 684 66408
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop Image */}
            <div className="hidden lg:block relative h-[700px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-24px_rgba(171,87,244,0.4)]">
              <Image
                src="/images/contacts/2025-R-4.jpg"
                alt="Renata Narušytė"
                fill
                priority
                className="object-cover object-[60%_20%]"
                sizes="50vw"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating Badge - Desktop only */}
            <div className="hidden lg:block absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#AB57F4] mb-2">
                Renata Ladies
              </p>
              <p className="text-neutral-700 text-base leading-relaxed">
                Tavo kelionės vadovė į sveiką, tvirtą ir pasitikinčią savimi gyvenimą
              </p>
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="space-y-6">
            {/* Desktop Contact Card */}
            <div className="hidden lg:block bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-8 border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-rlText">Susisiekite</h2>
              </div>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-pink-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#F28ACD]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium mb-1">El. paštas</p>
                    <a 
                      href="mailto:info@renataladies.com" 
                      className="text-[#F28ACD] hover:text-[#AB57F4] font-semibold text-lg transition"
                    >
                      info@renataladies.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-[#AB57F4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-medium mb-1">Telefonas</p>
                    <a 
                      href="tel:+37068466408" 
                      className="text-[#F28ACD] hover:text-[#AB57F4] font-semibold text-lg transition"
                    >
                      +370 684 66408
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Card */}
            <div className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-rlText">Socialiniai tinklai</h2>
              </div>
              
              <div className="space-y-3">
                <a 
                  href="https://www.instagram.com/renataladies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-rlText group-hover:text-[#AB57F4] transition">Instagram</p>
                    <p className="text-sm text-neutral-600">@renataladies</p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#AB57F4] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="https://www.facebook.com/renataladies" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-xl p-4 hover:bg-white hover:shadow-md transition group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-rlText group-hover:text-[#AB57F4] transition">Facebook</p>
                    <p className="text-sm text-neutral-600">Renata Ladies</p>
                  </div>
                  <svg className="w-5 h-5 text-neutral-400 group-hover:text-[#AB57F4] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Studio Card */}
            <div className="bg-white rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] p-8 border border-neutral-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-rlText">Treniruočių studija</h2>
              </div>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-neutral-500 font-medium mb-2">Vieta</p>
                  <p className="text-neutral-800 font-semibold text-lg">
                    Gym+ sporto klubas, Mega prekybos centras
                  </p>
                  <p className="text-neutral-600 text-sm mt-1">
                    Kaunas
                  </p>
                </div>
                
                <p className="text-neutral-700 leading-relaxed">
                  Vykdome grupines treniruotes ir asmeninius užsiėmimus. 
                  Dėl grafiko ir registracijos susisiekite telefonu ar el. paštu.
                </p>
              </div>
              
              <GradientButton 
                as="a" 
                href="/kontaktai#susisiekite" 
                withArrow 
                icon="et-circle-cutout" 
                iconHover="slide-right"
                className="w-full justify-center mt-6"
              >
                Susisiekti
              </GradientButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
