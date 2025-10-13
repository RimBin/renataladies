import React from 'react'

export function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded ${className}`}>
      {children}
    </div>
  )
}
