import type { Experience } from '@/types'
import type { Lang } from '@/lib/lang'
import { loc } from '@/lib/lang'
import { BulletText, formatDate } from '@/components/ui/BulletText'
import { TechTag } from '@/components/ui/TechTag'

interface Props {
  exp: Experience
  lang: Lang
  /** compact=true → mobile detail style; false → desktop panel style */
  compact?: boolean
}

export function ExperienceCard({ exp, lang, compact = false }: Props) {
  const role    = loc(lang, exp.roleTh,    exp.role)
  const company = loc(lang, exp.companyTh, exp.company)
  const note    = exp.note != null ? loc(lang, exp.noteTh, exp.note) : undefined
  const bullets = (lang === 'th' && exp.descriptionTh) ? exp.descriptionTh : exp.description
  const dateStr = `${formatDate(exp.startDate, lang)} — ${formatDate(exp.endDate, lang)}`
  const px = compact ? 'px-4' : 'px-5'

  return (
    <div className="rounded-2xl overflow-hidden bg-ios-card">
      {/* Header */}
      <div
        className={`${px} ${compact ? 'py-3.5' : 'py-4'}`}
        style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
      >
        {compact ? (
          <>
            <p className="text-[16px] font-semibold text-primary">{role}</p>
            <p className="text-[14px] mt-0.5 text-system-blue">
              {company}
              {note && <span className="opacity-60 ml-1.5 text-[12px]">· {note}</span>}
            </p>
            <p className="text-[12px] mt-1 text-tertiary">{dateStr}</p>
          </>
        ) : (
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[17px] font-semibold text-primary">{role}</p>
              <p className="text-[14px] mt-0.5 font-medium text-system-blue">
                {company}
                {note && <span className="ml-2 font-normal text-[12px] text-tertiary">· {note}</span>}
              </p>
            </div>
            <p className="text-[12px] shrink-0 tabular-nums pt-0.5 text-tertiary">{dateStr}</p>
          </div>
        )}
      </div>

      {/* Bullets */}
      <div className={`${px} ${compact ? 'py-3 space-y-2.5' : 'py-4 space-y-3'}`}>
        {bullets.map((bullet, i) => (
          <div key={i} className={`flex ${compact ? 'gap-2.5' : 'gap-3'}`}>
            {compact ? (
              <span className="shrink-0 mt-[3px] text-[10px] text-system-blue">●</span>
            ) : (
              <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full bg-system-blue" />
            )}
            <BulletText text={bullet} lang={lang} />
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div
        className={`${px} ${compact ? 'pb-3.5' : 'pb-4'} pt-2 flex flex-wrap gap-1.5`}
        style={{ borderTop: '0.5px solid var(--ios-separator)' }}
      >
        {exp.techStack.map((tech) => <TechTag key={tech} label={tech} />)}
      </div>
    </div>
  )
}
