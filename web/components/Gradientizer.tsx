type Props = { text: string; words?: string[] }

export default function Gradientizer({ text, words = [] }: Props) {
  if (!text) return null
  const safe = words.filter(Boolean).map((w) => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  if (safe.length === 0) return <>{text}</>
  const reSplit = new RegExp(`(${safe.join('|')})`, 'gi')
  const reExact = new RegExp(`^(?:${safe.join('|')})$`, 'i')
  const parts = text.split(reSplit)
  return (
    <>
      {parts.map((chunk, i) => (reExact.test(chunk) ? <span key={i} className="rl-grad-word">{chunk}</span> : <span key={i}>{chunk}</span>))}
    </>
  )
}
