import { GradientButton } from '@/components/ui/GradientButton'
import Reveal from '@/components/ui/Reveal'

const RENATA_VIDEOS = [
  {
    id: 'cqKPfheXTN4',
    title: 'Kaip pradėti kelionę su Renata',
    description: 'Trumpas įkvepiantis video apie tai, kaip atrodo pirmieji žingsniai kartu.',
    url: 'https://www.youtube.com/embed/cqKPfheXTN4'
  },
  {
    id: 'fFRDelI3Izo',
    title: 'Motyvacija ir disciplina kasdienybėje',
    description: 'Renata dalijasi, kaip išlaikyti motyvaciją ir nepasiduoti po pirmų savaičių.',
    url: 'https://www.youtube.com/embed/fFRDelI3Izo'
  },
  {
    id: 'uyiY2czMP5o',
    title: 'Rezultatai ir pokyčių istorijos',
    description: 'Apie realius moterų pokyčius, dažniausias klaidas ir kaip jų išvengti.',
    url: 'https://www.youtube.com/embed/uyiY2czMP5o'
  }
]

export default function VideoSuRenataPage() {
  return (
    <section className="bg-white">
      <div className="max-w-[1440px] mx-auto px-4 pt-24 md:pt-32 pb-16 sm:pb-24">
        <Reveal>
          <div className="rl-section-header mb-10">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-rlText rl-section-title">
                Video su <span className="gradient-text">Renata</span>
              </h1>
            </div>
            <div>
              <p className="rl-section-copy">
                Pažink Renatą artimiau: jos požiūrį į treniruotes, mitybą ir moters kūno pokyčius. Šie video padės
                suprasti, ar toks kelias ir ritmas tinka būtent tau.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-3">
          {RENATA_VIDEOS.map((video, index) => (
            <Reveal key={video.id} delay={0.1 * (index + 1)}>
              <article className="rounded-3xl bg-white shadow-[0_4px_18px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col h-full">
                <div className="relative w-full aspect-video bg-black">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h2 className="text-lg font-bold text-rlText mb-2">{video.title}</h2>
                  <p className="text-sm text-neutral-600 flex-1">{video.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="text-neutral-700 text-lg max-w-2xl">
              Jei šie video tau artimi – ženk kitą žingsnį ir susikurk planą, kuris tiks tavo ritmui, tikslams ir
              gyvenimo būdui.
            </p>
            <GradientButton
              as="a"
              href="/plans"
              withArrow
              icon="et-circle-cutout"
              iconHover="slide-right"
              className="text-lg px-8 py-4 shadow-lg"
            >
              Rinktis savo kelią
            </GradientButton>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

