import React from 'react'
import { EtCircleArrowUpRightIcon, EtCircleArrowCutoutIcon } from './icons'

type BaseProps = {
  as?: 'button' | 'a'
  href?: string
  withArrow?: boolean
  icon?: 'et-circle-arrow' | 'arrow-up-right' | 'et-circle-cutout'
  iconClassName?: string
  iconHover?: 'nudge' | 'slide-right'
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & BaseProps
type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & BaseProps
type Props = ButtonProps | AnchorProps

export function GradientButton({ as = 'button', href, className = '', withArrow = false, icon = 'et-circle-arrow', iconClassName, iconHover = 'nudge', children, ...rest }: Props) {
  const base = `group relative inline-flex items-center gap-2 justify-center rounded-full px-[clamp(40px,2vw,80px)] py-3 text-white hover:opacity-90 bg-[linear-gradient(90deg,#F28ACD,#AB57F4)]`
  const content = (
    <>
      <span>{children}</span>
      {withArrow && (
        iconHover === 'slide-right' ? (
          // Icon stays in place but slides right on hover
          icon === 'et-circle-cutout' ? (
            <EtCircleArrowCutoutIcon className={`${iconClassName ?? 'w-5 h-5'} transition-transform duration-1000 ease-out will-change-transform group-hover:translate-x-3`} />
          ) : (
            <EtCircleArrowUpRightIcon className={`${iconClassName ?? 'w-5 h-5'} text-rlText transition-transform duration-1000 ease-out will-change-transform group-hover:translate-x-3`} />
          )
        ) : (
          icon === 'et-circle-cutout' ? (
            <EtCircleArrowCutoutIcon className={`${iconClassName ?? 'w-5 h-5'} transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
          ) : icon === 'et-circle-arrow' ? (
            <EtCircleArrowUpRightIcon className={`${iconClassName ?? 'w-5 h-5'} text-rlText transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
          ) : (
            // fallback uses the circle arrow to keep consistency
            <EtCircleArrowUpRightIcon className={`${iconClassName ?? 'w-5 h-5'} text-rlText transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5`} />
          )
        )
      )}
    </>
  )
  if (as === 'a' && href) {
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <a href={href} className={`${base} ${className}`} {...anchorProps}>
        {content}
      </a>
    )
  }
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>
  return (
    <button className={`${base} ${className}`} {...buttonProps}>
      {content}
    </button>
  )
}
