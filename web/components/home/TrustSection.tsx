import Gradientizer from '@/components/Gradientizer'
import { EtCircleArrowUpRightIcon } from '@/components/ui/icons'

export default function TrustSection() {
  const title = 'Kodėl gali manimi pasitikėti?'
  return (
    <section className="max-w-6xl mx-auto px-4 md:px-6 py-12 lg:py-16 grid lg:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="h2 font-extrabold">
          <Gradientizer text={title} words={["gali"]} />
        </h2>
        <p className="text-responsive text-neutral-700 mt-3">
          Aiškūs planai, realūs rezultatai ir žmogiškas palaikymas. Mano tikslas – kad jaustumeisi lengviau ir užtikrinčiau kiekviename žingsnyje.
        </p>
        <ul className="mt-5 space-y-2 text-neutral-700">
          <li>✔️ 5+ metų patirtis dirbant su moterimis</li>
          <li>✔️ Subalansuoti planai, pritaikyti kasdienybei</li>
          <li>✔️ Rezultatai ne tik skaičiai – bet ir savijauta</li>
        </ul>
        <a href="#paths" className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full font-semibold bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] text-white hover:opacity-90">
          Prisijungti
          <EtCircleArrowUpRightIcon className="w-5 h-5 text-rlText" />
        </a>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1594737625785-c6683fcf8c31?q=80&w=1200&auto=format&fit=crop" alt="Trainer" className="rounded-2xl object-cover h-56 w-full" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1615870216515-73254a56d389?q=80&w=1200&auto=format&fit=crop" alt="Weights" className="rounded-2xl object-cover h-56 w-full" />
      </div>
    </section>
  )
}
