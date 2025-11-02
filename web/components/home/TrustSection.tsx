import Gradientizer from '@/components/Gradientizer'
import { GradientButton } from '@/components/ui/GradientButton'

export default function TrustSection() {
  const title = 'Kodėl gali manimi pasitikėti?'

  return (
    <section className="bg-white">
      <div className="rl-section grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h2 className="h2 font-extrabold rl-section-title">
            <Gradientizer text={title} words={["gali"]} />
          </h2>
          <p className="text-neutral-700 text-base mt-4 max-w-xl">
            Aiškūs planai, realūs rezultatai ir žmogiškas palaikymas. Mano tikslas – kad jaustumeisi lengviau ir užtikrinčiau kiekviename žingsnyje.
          </p>
          <ul className="mt-5 space-y-2 text-neutral-700 text-sm sm:text-base">
            <li>✔️ 5+ metų patirtis dirbant su moterimis</li>
            <li>✔️ Subalansuoti planai, pritaikyti kasdienybei</li>
            <li>✔️ Rezultatai ne tik skaičiai – bet ir savijauta</li>
          </ul>
          <GradientButton as="a" href="#paths" withArrow icon="et-circle-cutout" iconHover="slide-right" className="mt-6">
            Prisijungti
          </GradientButton>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1594737625785-c6683fcf8c31?q=80&w=1200&auto=format&fit=crop"
            alt="Trainer"
            className="rounded-2xl object-cover h-56 w-full"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.unsplash.com/photo-1615870216515-73254a56d389?q=80&w=1200&auto=format&fit=crop"
            alt="Weights"
            className="rounded-2xl object-cover h-56 w-full"
          />
        </div>
      </div>
    </section>
  )
}
