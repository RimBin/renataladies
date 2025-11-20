"use client"
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [displayChildren, setDisplayChildren] = useState(children)
  const [stage, setStage] = useState<'enter' | 'exit'>('enter')

  useEffect(() => {
    setStage('exit')
    const timeout = setTimeout(() => {
      setDisplayChildren(children)
      setStage('enter')
    }, 180) // exit duration
    return () => clearTimeout(timeout)
  }, [children, pathname])

  return (
    <div
      className={clsx(
        'transition-opacity duration-300',
        stage === 'enter' ? 'opacity-100' : 'opacity-0'
      )}
    >
      {displayChildren}
    </div>
  )
}
