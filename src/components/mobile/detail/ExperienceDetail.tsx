'use client'

import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'

function formatDate(d: string | null, lang: string): string {
  if (!d) return lang === 'th' ? 'ปัจจุบัน' : 'Present'
  const [y, m] = d.split('-')
  return new Date(Number(y), Number(m) - 1).toLocaleDateString(
    lang === 'th' ? 'th-TH' : 'en-US',
    { year: 'numeric', month: 'short' }
  )
}

export function ExperienceDetail() {
  const { lang } = useLang()

  return (
    <div className="h-full overflow-y-auto" style={{ background: 'var(--ios-bg)' }}>
      <div className="px-4 pt-5 pb-12 space-y-4">
        {experiences.map((exp) => {
          const desc = lang === 'th' && exp.descriptionTh ? exp.descriptionTh : exp.description
          const role = lang === 'th' && exp.roleTh ? exp.roleTh : exp.role
          const company = lang === 'th' && exp.companyTh ? exp.companyTh : exp.company
          const note = lang === 'th' && exp.noteTh ? exp.noteTh : exp.note

          return (
            <div key={exp.id} className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
              {/* Header */}
              <div className="px-4 py-3.5" style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
                <p className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>{role}</p>
                <p className="text-[14px] mt-0.5" style={{ color: 'var(--system-blue)' }}>
                  {company}
                  {note && <span className="opacity-60 ml-1.5 text-[12px]">· {note}</span>}
                </p>
                <p className="text-[12px] mt-1" style={{ color: 'var(--text-tertiary)' }}>
                  {formatDate(exp.startDate, lang)} — {formatDate(exp.endDate, lang)}
                </p>
              </div>

              {/* Bullets */}
              <div className="px-4 py-3 space-y-2.5">
                {desc.map((bullet, i) => (
                  <div key={i} className="flex gap-2.5">
                    <span className="shrink-0 mt-[3px] text-[10px]" style={{ color: 'var(--system-blue)' }}>●</span>
                    <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Tech tags */}
              <div className="px-4 pb-3.5 pt-2 flex flex-wrap gap-1.5"
                style={{ borderTop: '0.5px solid var(--ios-separator)' }}>
                {exp.techStack.map((t) => (
                  <span key={t}
                    className="px-2 py-0.5 text-[11px] rounded-md font-medium"
                    style={{ background: 'var(--ios-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
