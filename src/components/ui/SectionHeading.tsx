import { cn } from '@/lib/utils'
import { ScrollReveal } from '@/components/animations/ScrollReveal'

interface SectionHeadingProps {
  overline?: string
  title: string
  subtitle?: string
  className?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  overline,
  title,
  subtitle,
  className,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <div className={cn('mb-16', align === 'center' && 'text-center', className)}>
      {overline && (
        <ScrollReveal>
          <p className="text-sm font-semibold tracking-widest uppercase text-[#E5C158] mb-3">
            {overline}
          </p>
        </ScrollReveal>
      )}
      <ScrollReveal delay={0.1}>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={0.2}>
          <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">{subtitle}</p>
        </ScrollReveal>
      )}
    </div>
  )
}
