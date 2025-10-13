import Gradientizer from '@/components/Gradientizer'

type Props = {
  eyebrow?: string
  title: string
  gradientWords?: string[]
  subtitle?: string
  children?: React.ReactNode
}

export default function Hero({ eyebrow, title, gradientWords, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-pink-300 via-fuchsia-300 to-violet-300" />
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 py-14 md:py-20 text-center">
        {eyebrow && (
          <p className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-white bg-[linear-gradient(90deg,#AB57F4,#F28ACD)] px-3 py-1 rounded-full shadow">
            {eyebrow}
          </p>
        )}
        <h1 className="display font-extrabold mt-4 text-rlText">
          <Gradientizer text={title} words={gradientWords} />
        </h1>
        {subtitle && <p className="mt-3 text-neutral-700 text-responsive mx-auto max-w-3xl">{subtitle}</p>}
        {children && <div className="mt-6 flex flex-col items-center gap-4">{children}</div>}
        {children && (
          <img src="/images/hero/Renata-ladies-renata.png" alt="Renata Ladies" className="mt-8 mx-auto max-w-xs h-auto" />
        )}
      </div>
    </section>
  )
}
