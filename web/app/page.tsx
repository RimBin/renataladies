import { GradientButton } from '@/components/ui/GradientButton'
import Hero from '@/components/Hero'
import StoriesSection from '@/components/home/StoriesSection'
import ImageCarousel from '@/components/home/ImageCarousel'
import AboutAndWhy from '@/components/home/AboutAndWhy'
import ProblemSolution from '@/components/home/ProblemSolution'
import HomeServicesSection from '@/components/home/HomeServicesSection'
import HowItWorks from '@/components/home/HowItWorks'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/home/FinalCTA'
import Reveal from '@/components/ui/Reveal'
import AvatarStack from '@/components/ui/AvatarStack'

export default function Home() {
  return (
    <>
      <Hero
        title="Tu gali daugiau, nei manai"
        gradientWords={["gali", "daugiau", "manai"]}
        subtitle="Tavo pokyčiai prasideda namuose – su mitybos ir treniruočių planais, pritaikytais specialiai moterims, kurios nori sulieknėti, sustiprėti ir jaustis nuostabiai"
        trustBullets={[
          "Sportuok namuose – jokių salių!",
          "Aiškūs receptai ir porcijos",
          "Asmeninis palaikymas kiekviename žingsnyje"
        ]}
      >
        <div className="flex flex-col items-center gap-4">
          <GradientButton as="a" href="#paslaugos" withArrow icon="et-circle-cutout" iconClassName="w-8 h-8" iconHover="slide-right" className="font-semibold text-lg px-8 py-4">
            Rinkis savo kelią
          </GradientButton>
          <AvatarStack count={1200} size="md" />
        </div>
      </Hero>

      <ProblemSolution />
      
      <Reveal>
        <StoriesSection />
      </Reveal>

      <ImageCarousel />

      <Reveal>
        <HomeServicesSection />
      </Reveal>

      <Reveal>
        <HowItWorks />
      </Reveal>

      <Reveal>
        <AboutAndWhy />
      </Reveal>

      <Reveal>
        <FAQ />
      </Reveal>

      <Reveal>
        <FinalCTA />
      </Reveal>
    </>
  )
}

