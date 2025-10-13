import React from 'react'
import { EtCircleArrowUpRightIcon } from './icons'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  as?: 'button' | 'a'
  href?: string
  withArrow?: boolean
  icon?: 'et-circle-arrow' | 'arrow-up-right'
}

export function GradientButton({ as = 'button', href, className = '', withArrow = false, icon = 'et-circle-arrow', children, ...rest }: Props) {
  const base = 'inline-flex items-center gap-2 justify-center rounded-full px-[clamp(40px,2vw,80px)] py-3 text-white hover:opacity-90 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)]'
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        icon === 'et-circle-arrow' ? (
          <EtCircleArrowUpRightIcon className="w-5 h-5 text-rlText" />
        ) : (
          // fallback
          <EtCircleArrowUpRightIcon className="w-5 h-5 text-rlText" />
        )
      )}
    </>
  )
  if (as === 'a' && href) {
    return <a href={href} className={`${base} ${className}`}>{content}</a>
  }
  return <button className={`${base} ${className}`} {...rest}>{content}</button>
}
