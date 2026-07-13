import { cn } from '@/lib/utils'
import { TechBadge } from './TechBadge'
import type { Experience } from '@/types'

interface TimelineItemProps {
  experience: Experience
  isLast?: boolean
  presentLabel?: string
}

function formatDate(date: string | null, presentLabel = 'Present'): string {
  if (!date) return presentLabel
  const [year, month] = date.split('-')
  const d = new Date(Number(year), Number(month) - 1)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short' })
}

export function TimelineItem({ experience, isLast, presentLabel = 'Present' }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      {/* Vertical line */}
      {!isLast && (
        <div className="absolute left-[11px] top-6 bottom-0 w-px bg-white/10" />
      )}
      {/* Dot */}
      <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-[#E5C158] border-2 border-zinc-950 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-white" />
      </div>

      <div className="pb-12">
        <div className="flex flex-wrap items-center gap-2 mb-1">
          <h3 className="text-lg font-semibold text-white">{experience.role}</h3>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[#E5C158] font-medium text-sm">{experience.company}</p>
          {experience.note && (
            <span className="text-[10px] text-[#8A8278] border border-[rgba(242,239,232,0.1)] rounded-full px-2 py-0.5">
              {experience.note}
            </span>
          )}
        </div>
        <p className="text-[#8A8278]/60 text-xs mt-1">
          {formatDate(experience.startDate, presentLabel)} — {formatDate(experience.endDate, presentLabel)}
        </p>
        <ul className="mt-4 space-y-2">
          {experience.description.map((desc, i) => (
            <li key={i} className="text-sm text-zinc-400 flex gap-2">
              <span className="text-[#E5C158] mt-0.5 shrink-0">›</span>
              <span>{desc}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>
      </div>
    </div>
  )
}
