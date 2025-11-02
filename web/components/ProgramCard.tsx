import Link from 'next/link'
import { GradientButton } from '@/components/ui/GradientButton'
import type { WorkoutProgram } from '@/lib/programData'

type ProgramCardProps = {
  program: WorkoutProgram
}

export default function ProgramCard({ program }: ProgramCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition-all duration-300">

      {/* Premium Badge */}
      {program.isPremium && (
        <div className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white text-xs font-semibold">
          Premium
        </div>
      )}

      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-neutral-100">
        <img
          src={program.thumbnail}
          alt={program.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay with video count */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 flex items-center gap-2 text-white text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            {program.videoIds.length} video
          </span>
          <span>•</span>
          <span>{program.duration}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            program.level === 'beginner' ? 'bg-green-100 text-green-700' :
            program.level === 'intermediate' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {program.level === 'beginner' ? 'Pradedantiems' :
             program.level === 'intermediate' ? 'Vidutinis' :
             'Pažengusiems'}
          </span>
          <span className="text-xs text-neutral-500">{program.goal}</span>
        </div>

        <h3 className="text-lg font-bold text-[#28262C] mb-2 group-hover:text-[#F28ACD] transition">
          {program.title}
        </h3>

        <p className="text-sm text-neutral-600 line-clamp-2 mb-4">
          {program.description}
        </p>

        <GradientButton
          as="a"
          href={`/programos/${program.slug}`}
          withArrow
          icon="et-circle-cutout"
          iconHover="slide-right"
          className="w-full justify-center text-sm"
        >
          Žiūrėti programą
        </GradientButton>
      </div>
    </div>
  )
}
