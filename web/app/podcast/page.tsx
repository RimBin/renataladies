import { GradientButton } from '@/components/ui/GradientButton'

export default function PodcastPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-neutral-50 pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid md:grid-cols-[3fr_2fr] gap-8 items-end">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText mb-0">
                Renata Ladies <span className="gradient-text">Podcast</span>
              </h1>
            </div>
            <div>
              <p className="text-lg text-neutral-600">
                Pokalbiai apie sveiką gyvenimo būdą, mitybą, treniruotes ir moterų savijautą. Klausykis, kur tau patogu!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="max-w-[1440px] mx-auto px-4 md:px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] flex items-center justify-center">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#28262C] mb-4">
              Jau greitai!
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Ruošiame pirmąjį Renata Ladies podcast epizodą. Jau greitai galėsi klausytis įkvepiančių pokalbių apie sveikos moters gyvenimą.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <a 
                href="https://open.spotify.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#1DB954] text-[#1DB954] hover:bg-[#1DB954] hover:text-white font-semibold transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              
              <a 
                href="https://podcasts.apple.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#9333EA] text-[#9333EA] hover:bg-[#9333EA] hover:text-white font-semibold transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 21.6c-5.302 0-9.6-4.298-9.6-9.6S6.698 2.4 12 2.4s9.6 4.298 9.6 9.6-4.298 9.6-9.6 9.6zm0-16.8c-3.973 0-7.2 3.227-7.2 7.2s3.227 7.2 7.2 7.2 7.2-3.227 7.2-7.2-3.227-7.2-7.2-7.2zm0 12c-2.649 0-4.8-2.151-4.8-4.8s2.151-4.8 4.8-4.8 4.8 2.151 4.8 4.8-2.151 4.8-4.8 4.8zm0-7.2c-1.325 0-2.4 1.075-2.4 2.4s1.075 2.4 2.4 2.4 2.4-1.075 2.4-2.4-1.075-2.4-2.4-2.4z"/>
                </svg>
                Apple Podcasts
              </a>
            </div>

            <GradientButton
              as="a"
              href="/kontaktai"
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
            >
              Siūlyti temą
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Topics Preview */}
      <section className="bg-neutral-50 py-16">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Apie ką kalbėsime?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">🥗 Mityba</h3>
              <p className="text-neutral-600">Kaip maitintis sveikai ir skaniai. Mitai ir tiesa apie maistą.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">💪 Treniruotės</h3>
              <p className="text-neutral-600">Efektyvūs pratimai, motyvacija ir kaip išvengti traumų.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">🧘‍♀️ Mindset</h3>
              <p className="text-neutral-600">Emocinė sveikata, pasitikėjimas savimi ir gyvenimo balansas.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">👥 Svečiai</h3>
              <p className="text-neutral-600">Pokalbiai su įkvepiančiomis moterimis iš įvairių sričių.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">📖 Istorijos</h3>
              <p className="text-neutral-600">Tikros transformacijų istorijos ir iššūkių įveikimas.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-[#28262C] mb-2">❓ Q&A</h3>
              <p className="text-neutral-600">Atsakymai į klausytojų klausimus ir patarimus.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
