import { HeroVariant1, HeroVariant2, HeroVariant3, HeroVariant4, HeroVariant5 } from '@/components/HeroVariants'
import { GradientButton } from '@/components/ui/GradientButton'
import AvatarStack from '@/components/ui/AvatarStack'

const heroProps = {
  title: "Tu gali daugiau, nei manai",
  gradientWords: ["gali", "daugiau", "manai"],
  subtitle: "Išsirink planą ar paslaugą ir žengk pirmą žingsnį link jau šiandien",
  trustBullets: [
    "🎯 100% Online",
    "⚡ Rezultatai",
    "💪 Be salės"
  ]
}

export default function HeroTestPage() {
  return (
    <main className="space-y-16 pb-16">
      <div className="bg-neutral-900 text-white py-8">
        <div className="rl-container">
          <h1 className="text-4xl font-bold mb-2">Hero Variantų Palyginimas</h1>
          <p className="text-neutral-300">5 skirtingi išdėstymo variantai - pasirink geriausią!</p>
        </div>
      </div>

      {/* Variantas 1 */}
      <section>
        <div className="bg-neutral-100 py-4 border-b-4 border-pink-500">
          <div className="rl-container">
            <h2 className="text-2xl font-bold text-neutral-800">Variantas 1: Center Aligned</h2>
            <p className="text-neutral-600">Tekstas centre (arba kairėje desktop), portretas dešinėje</p>
          </div>
        </div>
        <HeroVariant1 {...heroProps}>
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </HeroVariant1>
      </section>

      {/* Variantas 2 */}
      <section>
        <div className="bg-neutral-100 py-4 border-b-4 border-purple-500">
          <div className="rl-container">
            <h2 className="text-2xl font-bold text-neutral-800">Variantas 2: Full Width Text Over</h2>
            <p className="text-neutral-600">Tekstas virš porteto, portretas dešinėje kaip background</p>
          </div>
        </div>
        <HeroVariant2 {...heroProps}>
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </HeroVariant2>
      </section>

      {/* Variantas 3 */}
      <section>
        <div className="bg-neutral-100 py-4 border-b-4 border-pink-500">
          <div className="rl-container">
            <h2 className="text-2xl font-bold text-neutral-800">Variantas 3: Split Screen</h2>
            <p className="text-neutral-600">Portretas kairėje su fonine spalva, tekstas dešinėje baltame fone</p>
          </div>
        </div>
        <HeroVariant3 {...heroProps}>
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </HeroVariant3>
      </section>

      {/* Variantas 4 */}
      <section>
        <div className="bg-neutral-100 py-4 border-b-4 border-purple-500">
          <div className="rl-container">
            <h2 className="text-2xl font-bold text-neutral-800">Variantas 4: Centered Everything</h2>
            <p className="text-neutral-600">Viskas centre, portretas apačioje po tekstu</p>
          </div>
        </div>
        <HeroVariant4 {...heroProps}>
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </HeroVariant4>
      </section>

      {/* Variantas 5 */}
      <section>
        <div className="bg-neutral-100 py-4 border-b-4 border-pink-500">
          <div className="rl-container">
            <h2 className="text-2xl font-bold text-neutral-800">Variantas 5: Asymmetric Grid</h2>
            <p className="text-neutral-600">Tekstas mažesniame stulpelyje kairėje, didelis portretas užima 60% plotio dešinėje</p>
          </div>
        </div>
        <HeroVariant5 {...heroProps}>
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </HeroVariant5>
      </section>
    </main>
  )
}
