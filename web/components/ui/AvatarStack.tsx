interface AvatarStackProps {
  count: number
  size?: 'sm' | 'md' | 'lg'
}
import CountUp from '@/components/ui/CountUp'

export default function AvatarStack({ count, size = 'md' }: AvatarStackProps) {
  // Placeholder avatars - later replace with real user photos
  const avatars = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=faces',
    'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=faces',
  ]

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  }

  return (
    <div className="flex items-center gap-3">
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <div
            key={index}
            className={`${sizeClasses[size]} rounded-full border-2 border-white shadow-md overflow-hidden bg-neutral-200 relative`}
            style={{ zIndex: index }}
          >
            <img
              src={avatar}
              alt={`User ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="text-sm font-semibold text-neutral-700 rl-reveal rl-in">
        <span className="gradient-text"><CountUp to={count} /></span> moterų
      </div>
    </div>
  )
}
