import React from 'react'

export function ArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  )
}

// ET/Divi-like circle with a white arrow up-right. Circle color = currentColor, arrow = white.
export function EtCircleArrowUpRightIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path d="M8 16 L16 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M10 8 H16 V14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

// White round background with transparent arrow cutout (shows background through the arrow)
export function EtCircleArrowCutoutIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <defs>
        <mask id="et-cutout-mask" maskUnits="userSpaceOnUse">
          {/* Reveal everything by default */}
          <rect x="0" y="0" width="24" height="24" fill="#ffffff" />
          {/* Hide along the arrow paths to punch a hole */}
          <path d="M8 16 L16 8" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M10 8 H16 V14" stroke="#000000" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </mask>
      </defs>
      <g mask="url(#et-cutout-mask)">
        <circle cx="12" cy="12" r="11" fill="#ffffff" />
      </g>
    </svg>
  )
}

export function CartIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <circle cx="9" cy="20" r="1" />
      <circle cx="17" cy="20" r="1" />
      <path d="M5 4h2l2.5 12h8l2-8H7" />
    </svg>
  )
}

// A softer, feminine shopping bag with a heart accent
export function FemCartIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Bag body */}
      <path
        d="M6.5 8.5H17.5L16 20a2 2 0 0 1-2 1.7H10a2 2 0 0 1-2-1.7L6.5 8.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Handle */}
      <path
        d="M9 8.5c0-2 6-2 6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Heart accent */}
      <path
        d="M12 13.2c-.9-1.1-2.6-.9-3 .4-.5 1.3.6 2.3 1.5 2.9.6.4 1 .6 1.5 1 .5-.4.9-.6 1.5-1 .9-.6 2-1.6 1.5-2.9-.4-1.3-2.1-1.5-3-.4Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function UserIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

// Woman avatar with hair and shoulders (outline, currentColor strokes)
export function WomanIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Hair silhouette */}
      <path d="M7.5 9.5c-.4-3 1.9-5 4.5-5s4.9 2 4.5 5c1 .3 1.8 1.1 2.1 2.1-1-.6-2.1-.9-3.2-.9h-.5c-.8 1.4-2.1 2.3-3.9 2.3s-3.1-.9-3.9-2.3H9c-1.1 0-2.2.3-3.2.9.3-1 1.1-1.8 2.1-2.1Z" />
      {/* Face (eyes optional as subtle dimples) */}
      <circle cx="11.25" cy="10.25" r=".2" fill="currentColor" stroke="none" />
      <circle cx="12.75" cy="10.25" r=".2" fill="currentColor" stroke="none" />
      {/* Shoulders */}
      <path d="M5 20v-1c.5-2.5 3.2-4 7-4s6.5 1.5 7 4v1" />
    </svg>
  )
}

// Minimal shopping bag (outline, currentColor strokes)
export function BagIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`inline-block ${className}`}
      aria-hidden="true"
    >
      {/* Bag body */}
      <rect x="7" y="9" width="10" height="10" rx="2" ry="2" />
      {/* Handle */}
      <path d="M9 9c0-2 6-2 6 0" />
    </svg>
  )
}
