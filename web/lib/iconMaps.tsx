import React from 'react'
import {
  type LucideIcon,
  UserCheck,
  History,
  ClipboardList,
  Zap,
} from 'lucide-react'

export function consultationIcon(id: string): JSX.Element {
  const map: Record<string, LucideIcon> = {
    initial: UserCheck,
    'follow-up': History,
    'meal-planning': ClipboardList,
    express: Zap,
  }
  const Icon = map[id] ?? UserCheck
  return <Icon className="w-7 h-7 text-rlPink" />
}

