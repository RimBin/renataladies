"use client"
import { useSession } from 'next-auth/react'
import { useMemo, useState } from 'react'
import { GradientButton } from '@/components/ui/GradientButton'
import VideoCard from '@/components/VideoCard'
import { VIDEOS, CATEGORIES, LEVELS, DURATIONS, type Video } from '@/lib/videoData'

export default function VideosPage() {
  const { data: session, status } = useSession()

  const accessMode = process.env.NEXT_PUBLIC_OPEN_ACCESS ?? 'partial'
  const userSubscription = session?.user?.subscription || null
  const subscriptionExpiry = session?.user?.subscriptionExpiry || null
  const hasActiveSubscription = userSubscription && subscriptionExpiry && new Date(subscriptionExpiry) > new Date()

  const canPlayVideos =
    accessMode === 'true'
      ? true
      : accessMode === 'partial'
        ? status === 'authenticated'
        : !!hasActiveSubscription

  const [q, setQ] = useState('')
  const [category, setCategory] = useState('')
  const [level, setLevel] = useState('')
  const [duration, setDuration] = useState('')
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [showAccessModal, setShowAccessModal] = useState(false)

  const filteredVideos = useMemo(() => {
    return VIDEOS.filter((v) => {
      if (
        q &&
        !v.title.toLowerCase().includes(q.toLowerCase()) &&
        !v.description.toLowerCase().includes(q.toLowerCase())
      ) {
        return false
      }
      if (category && v.category !== category) return false
      if (level && v.level !== level) return false
      if (duration) {
        if (duration === '0-15' && v.duration > 15) return false
        if (duration === '15-30' && (v.duration < 15 || v.duration > 30)) return false
        if (duration === '30+' && v.duration < 30) return false
      }
      return true
    })
  }, [q, category, level, duration])

  const handleVideoClick = (video: Video) => {
    if (!canPlayVideos) {
      setShowAccessModal(true)
    } else {
      setSelectedVideo(video)
    }
  }

  if (status === 'loading') {
    return (
      <section className="max-w-3xl mx-auto px-4 md:px-6 py-20 text-center">
        <div className="animate-pulse">
          <h1 className="h2 font-extrabold">Kraunama...</h1>
          <p className="mt-2 text-neutral-600">Patikrinama prisijungimo būsena</p>
        </div>
      </section>
    )
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Treniruočių <span className="gradient-text">biblioteka</span> – jėga, kardio, joga, tempimas
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Atrask tobulą treniruotę sau – nuo jėgos ir kardio iki jogos ir tempimo. Visos treniruotės pritaikytos
                skirtingiems lygiams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 bg-white/80 backdrop-blur border-b">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-3">
          <div className="flex flex-wrap gap-3 items-center">
            <div className="flex-1 min-w-[220px]">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ieškoti treniruočių..."
                className="w-full max-w-sm px-3 py-2 rounded-xl border bg-white"
              />
            </div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 rounded-xl border bg-white"
            >
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>
                  {c.label}
                </option>
              ))}
            </select>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="px-3 py-2 rounded-xl border bg-white"
            >
              {LEVELS.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="px-3 py-2 rounded-xl border bg-white"
            >
              {DURATIONS.map((d) => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-neutral-600">
            Rasta <span className="font-semibold text-[#28262C]">{filteredVideos.length}</span> treniruočių
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} onClick={handleVideoClick} />
          ))}
        </div>

        {filteredVideos.length === 0 && (
          <div className="text-center py-20">
            <p className="text-neutral-500 text-lg">Nerasta treniruočių pagal pasirinktus filtrus.</p>
            <button
              onClick={() => {
                setQ('')
                setCategory('')
                setLevel('')
                setDuration('')
              }}
              className="mt-4 text-[#F28ACD] hover:text-[#AB57F4] font-semibold"
            >
              Išvalyti filtrus
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50 border-t">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 py-12 lg:py-16 flex flex-col lg:flex-row items-center gap-6">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="h2 font-extrabold">
              Nori dar daugiau <span className="rl-grad-word">treniruočių</span>?
            </h2>
            <p className="text-neutral-600 mt-2 text-responsive">
              Išsirink premium planą ir gauk prieigą prie visų treniruočių, asmeninių mitybos planų ir dar daugiau!
            </p>
          </div>
          <GradientButton as="a" href="/mitybos-planai" withArrow icon="et-circle-cutout" iconHover="slide-right">
            Rinktis planą
          </GradientButton>
        </div>
      </section>

      {/* Access Restriction Modal */}
      {showAccessModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setShowAccessModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-md w-full p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-[#28262C] mb-2">Prisijunk, kad galėtum žiūrėti video</h3>
            <p className="text-sm text-neutral-600 mb-6">
              Prisijunk arba užsisakyk planą, kad galėtum žiūrėti treniruočių video.
            </p>

            <div className="space-y-3">
              <button
                onClick={() => {
                  const callbackUrl = encodeURIComponent(
                    window.location.pathname + window.location.search + window.location.hash
                  )
                  window.location.href = `/auth/signin?callbackUrl=${callbackUrl}`
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)] text-white hover:opacity-90 font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                  />
                </svg>
                Prisijungti
              </button>

              <button
                onClick={() => (window.location.href = '/plans')}
                className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 border-2 border-[#F28ACD] text-[#F28ACD] hover:bg-pink-50 font-semibold transition"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
                Rinktis planą
              </button>

              <button
                onClick={() => setShowAccessModal(false)}
                className="w-full px-6 py-2 text-neutral-600 hover:text-neutral-900 font-medium"
              >
                Atšaukti
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b flex justify-between items-center flex-shrink-0">
              <h3 className="text-xl font-bold text-[#28262C]">{selectedVideo.title}</h3>
              <button
                onClick={() => setSelectedVideo(null)}
                className="text-3xl leading-none hover:opacity-70 text-neutral-500"
              >
                &times;
              </button>
            </div>

            <div className="flex-1 overflow-auto">
              <div className="aspect-video bg-black">
                <iframe
                  src={selectedVideo.videoUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-sm font-semibold">
                    {selectedVideo.category.toUpperCase()}
                  </span>
                  <span className="px-3 py-1 rounded-full border text-sm font-medium">
                    {selectedVideo.level === 'beginner' && 'Pradedantis'}
                    {selectedVideo.level === 'intermediate' && 'Vidutinis'}
                    {selectedVideo.level === 'advanced' && 'Pažengęs'}
                  </span>
                  <span className="px-3 py-1 rounded-full border text-sm font-medium">
                    {selectedVideo.duration} min
                  </span>
                </div>

                <p className="text-neutral-700 mb-4">{selectedVideo.description}</p>

                {selectedVideo.equipment.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-[#28262C] mb-2">Reikalinga įranga:</h4>
                    <ul className="list-disc list-inside text-neutral-600 space-y-1">
                      {selectedVideo.equipment.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

