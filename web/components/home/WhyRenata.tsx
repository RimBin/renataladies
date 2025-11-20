import Image from "next/image";
import Reveal from "../ui/Reveal";
import { Lightbulb, Heart, Handshake } from 'lucide-react'

export default function WhyRenata() {
  const features = [
    { icon: Lightbulb, title: 'Mokslu pagrįsta', desc: 'Jokių mitų ar trumpalaikių madų. Tik patikrinti metodai, kurie duoda ilgalaikius rezultatus ir gerina sveikatą.' },
    { icon: Heart, title: 'Sukurta moteriai', desc: 'Sistema atsižvelgia į moters kūno ypatumus, hormonų svyravimus ir gyvenimo būdo poreikius.' },
    { icon: Handshake, title: 'Asmeninis ryšys', desc: 'Tai ne tik planai, bet ir nuolatinis mano palaikymas, motyvacija ir atsakymai į visus klausimus.' },
  ];

  return (
    <section className="bg-white">
      <div className="rl-section grid md:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-rlText rl-section-title mb-4">
                Kodėl mano sistema <span className="gradient-text">veikia</span>?
              </h2>
              <p className="rl-section-copy">
                Sukūriau metodiką, kuri sujungia mitybos mokslą, judesio svarbą ir, svarbiausia, realaus gyvenimo patogumą.
              </p>
            </div>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <Reveal key={index} delay={0.1 * (index + 1)}>
                  <div className="flex items-start gap-4">
                    <span className="mt-1">{(() => { const Icon = feature.icon; return <Icon className="w-7 h-7 text-rlPink" /> })()}</span>
                    <div>
                      <h3 className="font-semibold text-xl text-neutral-800">{feature.title}</h3>
                      <p className="text-neutral-600 mt-1">{feature.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop"
            alt="Renata konsultuoja klientę"
            width={600}
            height={700}
            className="rounded-xl shadow-lg object-cover aspect-[4/5]"
          />
        </Reveal>
      </div>
    </section>
  );
}
