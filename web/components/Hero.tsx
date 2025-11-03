import Gradientizer from '@/components/Gradientizer'
import { CheckCircle2 } from 'lucide-react'

type Props = {
  eyebrow?: string
  title: string
  gradientWords?: string[]
  subtitle?: string
  children?: React.ReactNode
  trustBullets?: string[]
}

export default function Hero({ eyebrow, title, gradientWords, subtitle, children, trustBullets }: Props) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/video/Video.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/50 to-white"></div>
      </div>
      
      <div className="relative rl-container pt-24 md:pt-32 pb-0 text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.3em] uppercase text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-3 py-1 rounded-full shadow">
            {eyebrow}
          </p>
        )}
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="display font-extrabold text-rlText">
            <Gradientizer text={title} words={gradientWords} />
          </h1>
          {subtitle && <p className="text-neutral-700 text-responsive">{subtitle}</p>}
        </div>
        
        {trustBullets && trustBullets.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-neutral-700">
            {trustBullets.map((bullet, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#AB57F4] flex-shrink-0" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        )}
        
        {children && <div className="mt-6 flex flex-col items-center gap-4">{children}</div>}
        
        <div className="mt-10 flex justify-center">
          <img src="/images/hero/Renata-ladies-renata.png" alt="Renata Ladies" className="max-w-xs h-auto" />
        </div>
      </div>
    </section>
  )
}
