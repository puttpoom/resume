import type { Experience } from '@/types'
import type { Lang } from '@/lib/lang'
import { loc } from '@/lib/lang'
import { BulletText, formatDate } from '@/components/ui/BulletText'
import { TechTag } from '@/components/ui/TechTag'

interface Props {
  exp: Experience
  lang: Lang
}

export function ExperienceCard({ exp, lang }: Props) {
  const role    = loc(lang, exp.roleTh,    exp.role)
  const company = loc(lang, exp.companyTh, exp.company)
  const note    = exp.note != null ? loc(lang, exp.noteTh, exp.note) : undefined
  const bullets = (lang === 'th' && exp.descriptionTh) ? exp.descriptionTh : exp.description
  const dateStr = `${formatDate(exp.startDate, lang)} — ${formatDate(exp.endDate, lang)}`
  const px = 'px-4 min-[821px]:px-5'

  return (
    <div className="rounded-2xl overflow-hidden bg-ios-card">
      {/* Header */}
      <div
        className={`${px} py-3.5 min-[821px]:py-4 flex flex-col min-[821px]:flex-row min-[821px]:items-start min-[821px]:justify-between min-[821px]:gap-3`}
        style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
      >
        <div>
          <p className="text-[16px] min-[821px]:text-[17px] font-semibold text-primary">{role}</p>
          <p className="text-[14px] mt-0.5 font-medium text-system-blue">
            {company}
            {note && <span className="ml-1.5 min-[821px]:ml-2 text-[12px] text-tertiary">· {note}</span>}
          </p>
        </div>
        <p className="text-[12px] mt-1 min-[821px]:mt-0 min-[821px]:shrink-0 tabular-nums min-[821px]:pt-0.5 text-tertiary">{dateStr}</p>
      </div>

      {/* Bullets */}
      <div className={`${px} py-3 min-[821px]:py-4 space-y-1.5`}>
        {bullets.map((bullet, i) => (
          <div key={i} className="flex gap-2">
            <span className="shrink-0 mt-[4px] w-1.5 h-1.5 rounded-full bg-system-blue" />
            <BulletText text={bullet} lang={lang} />
          </div>
        ))}
      </div>

      {/* Tech tags */}
      <div
        className={`${px} pb-3 pt-2 flex flex-wrap gap-1.5`}
        style={{ borderTop: '0.5px solid var(--ios-separator)' }}
      >
        {exp.techStack.map((tech) => <TechTag key={tech} label={tech} />)}
      </div>
    </div>
  )
}
