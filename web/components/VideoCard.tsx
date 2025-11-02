import type { Video } from '@/lib/videoData'
import { getCategoryLabel, getLevelLabel } from '@/lib/videoData'

export default function VideoCard({ video, onClick }: { video: Video; onClick: (v: Video) => void }) {
  return (
    <div 
      onClick={() => onClick(video)} 
      className="group overflow-hidden rounded-2xl bg-white shadow hover:shadow-xl transition cursor-pointer"
    >
      <div className="relative aspect-video overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={video.thumbnail} 
          alt={video.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        
        {/* Play overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
            <svg className="w-8 h-8 text-[#F28ACD] ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
        
        {/* Duration badge */}
        <div className="absolute bottom-3 right-3 px-2 py-1 text-xs rounded-full bg-black/70 text-white font-medium">
          {video.duration} min
        </div>
        
        {/* Premium badge */}
        {video.isPremium && (
          <div className="absolute top-3 left-3 px-2 py-1 text-xs rounded-full bg-gradient-to-r from-[#F28ACD] to-[#AB57F4] text-white font-semibold">
            Premium
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold text-[#28262C] line-clamp-2 group-hover:text-[#F28ACD] transition-colors">
            {video.title}
          </h3>
        </div>
        
        <p className="text-sm text-neutral-600 line-clamp-2 mb-3">
          {video.description}
        </p>
        
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2 py-1 border rounded-full text-neutral-700">
            {getCategoryLabel(video.category)}
          </span>
          <span className="px-2 py-1 border rounded-full text-neutral-700">
            {getLevelLabel(video.level)}
          </span>
          {video.equipment.length > 0 && (
            <span className="px-2 py-1 border rounded-full text-neutral-700">
              {video.equipment[0]}
              {video.equipment.length > 1 && ` +${video.equipment.length - 1}`}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
