"use client"
import { notFound } from 'next/navigation'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import VideoCard from '@/components/VideoCard'
import { getProgramBySlug } from '@/lib/programData'
import { VIDEOS } from '@/lib/videoData'

export default function ProgramDetailPage({ params }: { params: { slug: string } }) {
  const { data: session } = useSession()
  const program = getProgramBySlug(params.slug)
  const [showAccessModal, setShowAccessModal] = useState(false)

  if (!program) {
    notFound()
  }

  // Get videos for this program
  const programVideos = VIDEOS.filter((v) => program.videoIds.includes(v.id))

  // Check access
  const hasAccess = !program.isPremium || session?.user?.subscription === 'premium'

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  program.level === 'beginner' ? 'bg-green-100 text-green-700' :
                  program.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {program.level === 'beginner' ? 'Pradedantiems' :
                   program.level === 'intermediate' ? 'Vidutinis' :
                   'Pažengusiems'}
                </span>
                {program.isPremium && (
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-sm font-semibold">
                    Premium
                  </span>
                )}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-4">
                {program.title}
              </h1>
              
              <p className="text-lg text-neutral-600 mb-6">
                {program.description}
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F28ACD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F28ACD]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  <span>{program.videoIds.length} video treniruotės</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#F28ACD]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  <span>{program.goal}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail */}
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-lg">
              <img
                src={program.thumbnail}
                alt={program.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Videos in Program */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Treniruotės šioje programoje
        </h2>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programVideos.map((video, index) => (
            <div key={video.id} className="relative">
              <div className="absolute -top-2 -left-2 z-10 w-8 h-8 rounded-full bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] text-white font-bold flex items-center justify-center text-sm">
                {index + 1}
              </div>
              <VideoCard video={video} onClick={() => {
                if (!hasAccess) {
                  setShowAccessModal(true)
                } else {
                  // Open video in /treniruociu-video page or modal
                  window.location.href = `/treniruociu-video?play=${video.id}`
                }
              }} />
            </div>
          ))}
        </div>
      </section>

      {/* Weekly Schedule (if available) */}
      {program.weeklySchedule && program.weeklySchedule.length > 0 && (
        <section className="bg-neutral-50 py-10">
          <div className="max-w-[1440px] mx-auto px-4 md:px-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Savaitės grafikas
            </h2>
            
            {program.weeklySchedule.map((week) => (
              <div key={week.week} className="mb-8">
                <h3 className="text-xl font-bold mb-4">Savaitė {week.week}</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {week.days.map((day) => (
                    <div key={day.day} className="bg-white rounded-xl p-4 shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F28ACD] to-[#AB57F4] text-white font-bold flex items-center justify-center text-sm">
                          {day.day}
                        </span>
                        <span className="font-semibold">Diena {day.day}</span>
                      </div>
                      {day.notes && (
                        <p className="text-sm text-neutral-600">{day.notes}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {!hasAccess && (
        <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Šiai programai reikalinga <span className="gradient-text">Premium</span> prenumerata
            </h2>
            <p className="text-lg text-neutral-700 mb-8">
              Gaukite prieigą prie visų programų ir video treniruočių.
            </p>
            <GradientButton 
              as="a" 
              href="/#premium-plans" 
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
              className="text-lg px-8 py-4"
            >
              Peržiūrėti planus
            </GradientButton>
          </div>
        </section>
      )}

      {/* Access Restriction Modal */}
      {showAccessModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4" 
          onClick={() => setShowAccessModal(false)}
        >
          <div 
            className="bg-white rounded-2xl max-w-lg w-full p-8" 
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#28262C] mb-2">
                Pasirink <span className="gradient-text">prieigą</span>
              </h3>
              <p className="text-neutral-600 mb-6">
                Prisijunk arba įsigyk šią programą individualiai, arba gauk viską su Premium naryste
              </p>
            </div>
            
            <div className="space-y-3 mb-6">
              {/* Premium Option */}
              <div className="relative border-2 border-[#F28ACD] rounded-2xl p-5 bg-gradient-to-br from-pink-50 to-purple-50">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-bold rounded-full">
                  REKOMENDUOJAMA
                </div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg gradient-text mb-1 uppercase">Premium narystė</h4>
                    <p className="text-sm text-neutral-600">Visi video + mitybos planas + daugiau</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold gradient-text">24.99 €</div>
                    <div className="text-xs text-neutral-500">/mėn</div>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">Visi video ir programos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">Individualus mitybos planas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">15% nuolaida papildams</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">Prioritetinė pagalba</span>
                  </li>
                </ul>
                <GradientButton
                  onClick={() => window.location.href = '/#premium-plans'}
                  withArrow
                  icon="et-circle-cutout"
                  iconHover="slide-right"
                  className="w-full justify-center"
                >
                  Rinktis Premium
                </GradientButton>
              </div>

              {/* Single Program Option */}
              <div className="border border-neutral-200 rounded-2xl p-5 bg-white">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-bold text-lg text-rlText mb-1">Tik ši programa</h4>
                    <p className="text-sm text-neutral-600">Vienkartinis mokėjimas</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-rlText">14.99 €</div>
                    <div className="text-xs text-neutral-500">vienk.</div>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4 text-sm">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">Prieiga prie šios programos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">{program.videoIds.length} video treniruotės</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-neutral-700">Neribota prieiga</span>
                  </li>
                </ul>
                <button
                  onClick={() => window.location.href = `/programos/${program.slug}/pirkti`}
                  className="w-full group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 border-2 border-[#F28ACD] text-[#F28ACD] hover:bg-pink-50 font-semibold transition-all"
                >
                  <span>Pirkti programą</span>
                  <svg className="w-5 h-5 transition-transform duration-1000 ease-out group-hover:translate-x-3" viewBox="0 0 24 24" fill="currentColor">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 12h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="text-center border-t pt-4">
              <p className="text-sm text-neutral-600 mb-3">Jau turi paskyrą?</p>
              <button
                onClick={() => {
                  const callbackUrl = encodeURIComponent(window.location.pathname + window.location.search + window.location.hash)
                  window.location.href = `/auth/prisijungti?callbackUrl=${callbackUrl}`
                }}
                className="text-[#F28ACD] hover:underline font-semibold text-sm"
              >
                Prisijungti
              </button>
            </div>
            
            <button
              onClick={() => setShowAccessModal(false)}
              className="absolute top-4 right-4 text-2xl text-neutral-400 hover:text-neutral-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  )
}
