import React from 'react'

type Props = { text: string; words?: string[] }

export default function Gradientizer({ text, words = [] }: Props) {
  if (!text) return null
  const safe = words.filter(Boolean).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))

  // Support explicit line breaks in the provided text: split on '\n' and render <br /> between lines.
  const lines = text.split('\n')

  // If there are no gradient words to highlight, just render raw lines with <br/> between them.
  if (safe.length === 0) {
    return (
      <>
        {lines.map((line, li) => (
          <React.Fragment key={li}>
            {line}
            {li !== lines.length - 1 && <br />}
          </React.Fragment>
        ))}
      </>
    )
  }

  const reSplit = new RegExp(`(${safe.join('|')})`, 'gi')
  const reExact = new RegExp(`^(?:${safe.join('|')})$`, 'i')

  return (
    <>
      {lines.map((line, li) => {
        const parts = line.split(reSplit)
        return (
          <React.Fragment key={li}>
            {parts.map((chunk, i) =>
              reExact.test(chunk) ? (
                <span key={i} className="rl-grad-word">
                  {chunk}
                </span>
              ) : (
                <span key={i}>{chunk}</span>
              )
            )}
            {li !== lines.length - 1 && <br />}
          </React.Fragment>
        )
      })}
    </>
  )
}
