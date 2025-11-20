"use client"
import { GradientButton } from '@/components/ui/GradientButton'
import { useState } from 'react'
import { Film, UtensilsCrossed, Pill, BookOpen, MessageCircle, BarChart2 } from 'lucide-react'
import Reveal from '@/components/ui/Reveal'

const PREMIUM_FEATURES = [
  { icon: Film, title: 'Visi video', description: 'Neribota prieiga prie visų treniruočių video bibliotekos – jėga, cardio, yoga, tempo' },
  { icon: UtensilsCrossed, title: 'Mitybos planas + atnaujinimai', description: 'Individualus mitybos planas su mėnesiniais atnaujinimais ir pritaikymais' },
  { icon: Pill, title: 'Nuolaidos papildams', description: '15% nuolaida visoms maisto papildų rekomendacijoms' },
  { icon: BookOpen, title: 'Ekskluzyvus turinys', description: 'Prieiga prie specialių programų, iššūkių ir e-knygų' },
  { icon: MessageCircle, title: 'Prioritetinė pagalba', description: 'Greitas atsakymas į klausimus ir asmeninė konsultacija kas mėnesį' },
  { icon: BarChart2, title: 'Pažangos stebėjimas', description: 'Išsamūs įrankiai tikslams ir rezultatams sekti' },
]

const PLANS = [
  {
    id: 'monthly',
    name: 'Mėnesinis',
    price: '29.99',
    period: '/mėn',
    description: 'Lankstus pasirinkimas, nutraukti bet kada',
    popular: false,
  },
  {
    id: 'quarterly',
    name: 'Ketvirčio',
    price: '24.99',
    period: '/mėn',
    total: '74.99',
    description: 'Sutaupyk 17% – 3 mėnesių planas',
    popular: true,
    savings: 'Sutaupai 15 €',
  },
  {
    id: 'yearly',
    name: 'Metinis',
    price: '19.99',
    period: '/mėn',
    total: '239.99',
    description: 'Geriausia kaina – 12 mėnesių planas',
    popular: false,
    savings: 'Sutaupai 120 €',
  },
]

export default function PremiumPlansSection() {
  const [selectedPlan, setSelectedPlan] = useState('quarterly')

  const handleSubscribe = (planId: string) => {
    // TODO: Implement checkout/payment flow
    window.location.href = `/auth/prisijungti?plan=${planId}`
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      <div className="max-w-[1440px] mx-auto px-4 md:px-6">
        {/* Header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-end mb-12">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0 uppercase">
                <span className="gradient-text">Premium</span> narystė
              </h2>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Gauk viską, ko reikia transformacijai – treniruočių, mityba, pagalba ir bendruomenė vienoje vietoje
              </p>
            </div>
          </div>
        </Reveal>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PREMIUM_FEATURES.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <Reveal key={idx} delay={0.1 * (idx + 1)}>
                <div 
                  className="p-8 rounded-3xl border border-transparent bg-gradient-to-b from-neutral-50 to-neutral-100/80 shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.07)] hover:border-neutral-200/60 transition-all duration-300 h-full flex flex-col group hover:-translate-y-1"
                >
                  <div className="w-12 h-12 text-rlPink mb-5 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-md">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h3 className="text-xl font-bold text-rlText mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm flex-grow">{feature.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Pricing Cards */}
        <Reveal delay={0.7}>
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl p-6 shadow transition-all duration-300 hover:shadow-xl hover:-translate-y-2 flex flex-col h-full ${
                  selectedPlan === plan.id ? 'ring-2 ring-[#F28ACD]' : ''
                } ${plan.popular ? 'md:-mt-4 md:pb-10' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold rounded-full">
                    POPULIARIAUSIAS
                  </div>
                )}
                
                <div className="text-center mb-6 flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-xl text-rlText mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold gradient-text">{plan.price} €</span>
                    <span className="text-neutral-600">{plan.period}</span>
                  </div>
                  {plan.total && (
                    <p className="text-sm text-neutral-500">Iš viso: {plan.total} €</p>
                  )}
                  {plan.savings && (
                    <p className="text-sm font-semibold text-green-600 mt-1">{plan.savings}</p>
                  )}
                  <p className="text-sm text-neutral-600 mt-2">{plan.description}</p>
                </div>

                <button
                  onClick={() => {
                    setSelectedPlan(plan.id)
                    handleSubscribe(plan.id)
                  }}
                  className={`mt-auto w-full rounded-full px-6 py-3 font-semibold transition flex-shrink-0 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white hover:opacity-90'
                      : 'border-2 border-[#F28ACD] text-[#F28ACD] hover:bg-pink-50'
                  }`}
                >
                  Pradėti dabar
                </button>
              </div>
            ))}
            </div>
          </div>
        </Reveal>

        {/* Trust Section */}
        <Reveal delay={0.9}>
          <div className="mt-12 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Nutraukti bet kada</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>14 dienų pinigų grąžinimo garantija</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Saugus mokėjimas</span>
            </div>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
