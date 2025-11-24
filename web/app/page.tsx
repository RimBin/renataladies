'use client'
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
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <MainHero
        title={`AR PASIRUOŠUSI
PRADĖTI?`}
        gradientWords={["PASIRUOŠUSI"]}
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
              <motion.div
                key={bullet}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -36, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 360,
                  damping: 26,
                  delay: 0.9 + index * 0.12
                }}
              >
                <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#F6F6F8] text-[#AB57F4]">
                  ✓
                </span>
                <span>{bullet}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-6 flex flex-col items-start gap-4"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 22,
              delay: 1.4
            }}
          >
            <AvatarStack count={1200} size="md" />
          </motion.div>
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
