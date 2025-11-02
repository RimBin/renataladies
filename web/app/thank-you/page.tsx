'use client'

import { useSearchParams } from 'next/navigation'
import { CheckCircle, Download, Mail, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { PLANS } from '@/lib/planData'
import { Suspense } from 'react'

function ThankYouContent() {
  const searchParams = useSearchParams()
  const planId = searchParams.get('plan')
  const email = searchParams.get('email')
  
  const plan = PLANS.find((p) => p.id === planId)
  
  if (!plan) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="max-w-lg text-center">
          <h1 className="text-3xl font-extrabold bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] bg-clip-text text-transparent">
            Planas nerastas
          </h1>
          <p className="mt-2 text-neutral-600">Patikrinkite nuorodą arba grįžkite į pradžią.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 mt-6 rounded-full px-6 py-3 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90"
          >
            <ArrowLeft className="w-5 h-5" />
            Į pradžią
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="w-[92%] max-w-[1440px] mx-auto px-4 md:px-6 py-16 sm:py-24">
      {/* Success Icon */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] mb-6">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-4">
          Ačiū už <span className="gradient-text">užsakymą</span>!
        </h1>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          Tavo užsakymas sėkmingai gautas. Mitybos planą paruošime per 24 valandas ir išsiųsime į el. paštą.
        </p>
      </div>

      {/* Order Summary Card */}
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-100">
          {/* Plan Info */}
          <div className="p-6 sm:p-8 border-b border-neutral-100">
            <h2 className="text-2xl font-bold text-[#28262C] mb-4">
              Užsakymo informacija
            </h2>
            
            <div className="grid sm:grid-cols-[120px_1fr] gap-4 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={plan.thumb} 
                alt={plan.title} 
                className="w-full aspect-video object-cover rounded-lg"
              />
              <div>
                <h3 className="font-semibold text-lg text-[#28262C] mb-2">
                  {plan.title}
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2 py-1 border rounded-full text-neutral-600">
                    {plan.kcal} kcal
                  </span>
                  <span className="px-2 py-1 border rounded-full text-neutral-600">
                    {plan.recipes} receptų
                  </span>
                  <span className="px-2 py-1 border rounded-full text-neutral-600">
                    {plan.days} d. meniu
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-neutral-600">
                <Mail className="w-5 h-5 text-[#AB57F4]" />
                <div>
                  <p className="text-sm font-medium text-[#28262C]">El. paštas</p>
                  <p className="text-sm">{email || 'Nurodytas užsakymo metu'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-neutral-600">
                <Download className="w-5 h-5 text-[#F28ACD]" />
                <div>
                  <p className="text-sm font-medium text-[#28262C]">Pristatymas</p>
                  <p className="text-sm">Per 24 valandas (PDF formatu)</p>
                </div>
              </div>
            </div>
          </div>

          {/* What's Included */}
          <div className="p-6 sm:p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
            <h3 className="font-semibold text-lg text-[#28262C] mb-4">
              Ką gausi:
            </h3>
            <ul className="space-y-2 text-neutral-700">
              {plan.includes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-[#AB57F4] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#AB57F4] flex-shrink-0 mt-0.5" />
                <span>Asmeninis mitybos planas PDF formatu</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-[#AB57F4] flex-shrink-0 mt-0.5" />
                <span>24/7 prieiga prie paskyros</span>
              </li>
            </ul>
          </div>

          {/* Actions */}
          <div className="p-6 sm:p-8 border-t border-neutral-100">
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/paskyra"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white font-semibold hover:opacity-90 transition"
              >
                Peržiūrėti paskyrą
              </Link>
              <Link
                href="/mitybos-planai"
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 border-2 border-[#F28ACD] text-[#F28ACD] font-semibold hover:bg-pink-50 transition"
              >
                Daugiau planų
              </Link>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
          <h4 className="font-semibold text-[#28262C] mb-2 flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-600" />
            Patikrink savo el. paštą
          </h4>
          <p className="text-sm text-neutral-600">
            Išsiuntėme patvirtinimą į tavo el. paštą. Jeigu negavai, patikrink šlamšto (spam) aplanką 
            arba susisiek su mumis: <a href="mailto:info@renataladies.com" className="text-[#AB57F4] hover:underline">info@renataladies.com</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="animate-pulse text-neutral-600">Kraunama...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
}
