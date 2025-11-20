import type { ConsultationType } from '@/lib/consultationData'
import { GradientButton } from '@/components/ui/GradientButton'
import { CheckCircle } from 'lucide-react'
import { consultationIcon } from '@/lib/iconMaps'

export default function ConsultationCard({ consultation }: { consultation: ConsultationType }) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-[0_4px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_32px_-12px_rgba(242,138,205,0.35)] transition-all duration-300 hover:-translate-y-1 flex flex-col h-full ${consultation.popular ? 'ring-2 ring-[#F28ACD]' : ''}`}>
      {consultation.popular && (
        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-semibold">
          Populiariausia
        </div>
      )}

      <div className="p-6 flex flex-col flex-grow">\n        <div className="flex items-start gap-3 mb-4">
          <div className="mt-1">{consultationIcon(consultation.id)}</div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#28262C] mb-1">{consultation.title}</h3>
            <div className="flex items-center gap-3 text-sm text-neutral-600">
              <span className="flex items-center gap-1">{consultation.duration}</span>
              <span className="font-bold text-rlPink text-lg">{consultation.price}</span>
            </div>
          </div>
        </div>

        <p className="text-neutral-700 mb-4">{consultation.description}</p>

        <div className="mb-4">
          <h4 className="font-semibold text-[#28262C] mb-2 text-sm">Ką gausi:</h4>
          <ul className="space-y-1.5">
            {consultation.includes.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                <CheckCircle className="w-4 h-4 text-rlPink mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-6 flex-grow">
          <h4 className="font-semibold text-[#28262C] mb-2 text-sm">Geriausiai tinka:</h4>
          <div className="flex flex-wrap gap-2">
            {consultation.bestFor.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-700 text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <GradientButton
          as="a"
          href="#rezervacija"
          withArrow
          icon="et-circle-cutout"
          iconHover="slide-right"
          className="w-full justify-center mt-auto"
        >
          Rezervuoti
        </GradientButton>
      </div>
    </div>
  )
}
