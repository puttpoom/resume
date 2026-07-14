import type { IconType } from 'react-icons'

interface Props {
  Icon: IconType
  bg: string
  size?: number
}

export function AppIcon({ Icon, bg, size = 28 }: Props) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{ width: size, height: size, borderRadius: Math.round(size * 0.2237), background: bg }}
    >
      <Icon size={Math.round(size * 0.62)} color="#fff" />
    </div>
  )
}
