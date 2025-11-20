import { GradientButton } from '@/components/ui/GradientButton'
import MainHero from '@/components/SecondaryHero'
import BenefitsHero from '@/components/Hero'
import StoriesSection from '@/components/home/StoriesSection'
import ImageCarousel from '@/components/home/ImageCarousel'
import AboutRenata from '@/components/home/AboutAndWhy'
import WhyItWorks from '@/components/home/WhyItWorks'
import ProblemSolution from '@/components/home/ProblemSolution'
import HomeServicesSection from '@/components/home/HomeServicesSection'
import HowItWorks from '@/components/home/HowItWorks'
import PremiumPlansSection from '@/components/home/PremiumPlansSection'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/home/FinalCTA'
import AvatarStack from '@/components/ui/AvatarStack'

export default function Home() {
  return (
    <>
      <MainHero
        title="PASIRUOŠUSI PRADĖTI?"
        gradientWords={["Pasiruošusi"]}
        subtitle="Tavo pokyčiai prasideda namuose – su mitybos ir treniruočių planais, pritaikytais specialiai moterims, kurios nori sulieknėti, sustiprėti ir jaustis nuostabiai"
        ctaText="Rinkis savo kelią"
        ctaHref="#paslaugos"
      >
        <div>
          <div className="mt-8 flex flex-col gap-y-3 text-sm text-neutral-700">
            {[
              "Asmeninis palaikymas kiekviename žingsnyje",
              "Sportuok namuose – jokių salių!",
              "Aiškūs receptai ir porcijos"
            ].map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#F6F6F8] text-[#AB57F4]">✓</span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start gap-4">
            <AvatarStack count={1200} size="md" />
          </div>
        </div>
      </MainHero>

      {/* <BenefitsHero
        title={"Tu gali daugiau,\nnei manai"}
        gradientWords={["gali", "daugiau", "manai"]}
        subtitle="Išsirink planą ar paslaugą ir žengk pirmą žingsnį pokyčių link jau šiandien"
      >
        <div className="mt-6 space-y-4">
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200/50">
              <span className="text-2xl">🎯</span>
              <span className="font-semibold text-neutral-800">100% Online</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200/50">
              <span className="text-2xl">⚡</span>
              <span className="font-semibold text-neutral-800">Rezultatai per 4 sav.</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-neutral-200/50">
              <span className="text-2xl">💪</span>
              <span className="font-semibold text-neutral-800">Be salės</span>
            </div>
          </div>
          <AvatarStack count={1200} size="md" />
        </div>
      </BenefitsHero> */}

      <ProblemSolution />

      <StoriesSection />

      <ImageCarousel />

      <HomeServicesSection />

      <div id="premium-plans">
        <PremiumPlansSection />
      </div>

      <HowItWorks />

      <AboutRenata />

      <WhyItWorks />

      <FAQ />

      <FinalCTA />
    </>
  )
}

