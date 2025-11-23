import MainHero from '@/components/SecondaryHero'
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
        title="AR PASIRUOŠUSI PRADĖTI?"
        gradientWords={['PASIRUOŠUSI']}
        subtitle="Tavo pokyčiai prasideda namuose su profesionalia fitneso trenere. Specialiai parengti mitybos ir treniruočių planai, pritaikyti moterims, kurios nori sulieknėti, suformuoti kūną, sustiprėti ir gerai jaustis."
        ctaText="Rinkis savo kelią"
        ctaHref="#paslaugos"
      >
        <div>
          <div className="mt-8 flex flex-col gap-y-3 text-sm text-neutral-700">
            {[
              'Asmeninis palaikymas kiekviename žingsnyje',
              'Sportuok namuose – jokių salių!',
              'Aiškūs receptai ir porcijos'
            ].map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#F6F6F8] text-[#AB57F4]">
                  ✓
                </span>
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-start gap-4">
            <AvatarStack count={1200} size="md" />
          </div>
        </div>
      </MainHero>

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
