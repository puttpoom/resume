import { IoLogoGithub, IoOpen, IoBusiness, IoPerson, IoPeople } from 'react-icons/io5'
import type { Project } from '@/types'
import type { Lang } from '@/lib/lang'
import { BulletText } from '@/components/ui/BulletText'
import { TechTag } from '@/components/ui/TechTag'
import { getStrings } from '@/data/i18n'

const OWNERSHIP_STYLE = {
  company:  { label: 'Full Responsibility', labelTh: 'รับผิดชอบหลัก',  color: '#FF9500', bg: 'rgba(255,149,0,0.12)' },
  co:       { label: 'Co-developed',        labelTh: 'ร่วมพัฒนา',       color: '#5856D6', bg: 'rgba(88,86,214,0.12)' },
  personal: { label: 'Side Project',        labelTh: 'โปรเจกต์ส่วนตัว', color: '#34C759', bg: 'rgba(52,199,89,0.12)' },
} as const

const OWNERSHIP_ICON = {
  company:  IoBusiness,
  co:       IoPeople,
  personal: IoPerson,
} as const

interface LocalizedProject extends Omit<Project, 'bullets'> {
  description: string
  bullets: string[]
}

interface Props {
  project: LocalizedProject
  lang: Lang
  /** compact=true → mobile detail style; false → desktop panel style */
  compact?: boolean
}

export function ProjectCard({ project: p, lang, compact = false }: Props) {
  const t = getStrings(lang)
  const own = OWNERSHIP_STYLE[p.ownership]
  const OwnIcon = OWNERSHIP_ICON[p.ownership]
  const ownerLabel = lang === 'th' ? own.labelTh : own.label
  const px = compact ? 'px-4' : 'px-5'
  const titleSize = compact ? 'text-[17px]' : 'text-[16px]'
  const bodyPy = compact ? 'py-3' : 'py-4'

  return (
    <div className="rounded-2xl overflow-hidden bg-ios-card">
      {/* Header */}
      <div
        className={`${px} ${compact ? 'pt-4' : 'pt-5'} pb-3`}
        style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
      >
        <div className="flex items-start gap-2 mb-2">
          <h3 className={`flex-1 ${titleSize} font-semibold leading-snug text-primary`}>{p.title}</h3>
          <span className="text-[12px] tabular-nums shrink-0 mt-0.5 text-tertiary">{p.year}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold"
            style={{ background: own.bg, color: own.color }}
          >
            <OwnIcon size={11} />
            {ownerLabel}
          </span>
          {p.company && (
            <span
              className="px-2 py-0.5 rounded-full text-[11px] font-medium text-secondary bg-ios"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            >
              {p.company}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className={`${px} ${bodyPy}`} style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
        <p className="text-[14px] leading-relaxed mb-3 text-secondary">{p.description}</p>
        {p.bullets.length > 0 && (
          <div className="space-y-1.5">
            {p.bullets.map((b, i) => (
              <div key={i} className="flex gap-2">
                <span className="shrink-0 mt-[4px] text-[9px] text-system-blue">●</span>
                <BulletText text={b} lang={lang} className="text-[13px]" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech stack */}
      <div
        className={`${px} py-3`}
        style={{ borderBottom: (p.githubUrl || p.liveUrl) ? '0.5px solid var(--ios-separator)' : 'none' }}
      >
        <p className="text-[11px] uppercase font-medium mb-2 text-tertiary" style={{ letterSpacing: '0.04em' }}>
          {t.projects.techStack}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.techStack.map((tech) => <TechTag key={tech} label={tech} />)}
        </div>
      </div>

      {/* Links */}
      {(p.githubUrl || p.liveUrl) && (
        <div className={`${px} py-3 flex gap-4`}>
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${compact ? 'text-[14px]' : 'text-[13px]'} font-semibold transition-opacity hover:opacity-70 text-system-blue`}
            >
              <IoLogoGithub size={compact ? 16 : 15} /> GitHub
            </a>
          )}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-1.5 ${compact ? 'text-[14px]' : 'text-[13px]'} font-semibold transition-opacity hover:opacity-70 text-system-blue`}
            >
              <IoOpen size={compact ? 16 : 15} /> {compact ? 'Live' : 'Live Demo'}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
