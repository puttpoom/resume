import { cn } from '@/lib/utils'

interface TechBadgeProps {
  label: string
  className?: string
}

export function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
        'bg-white/5 border border-white/10 text-zinc-400',
        className
      )}
    >
      {label}
    </span>
  )
}
