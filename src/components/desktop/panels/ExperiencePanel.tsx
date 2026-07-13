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

export function ExperiencePanel() {
  const { lang } = useLang()

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">
      {experiences.map((exp) => {
        const desc = lang === 'th' && exp.descriptionTh ? exp.descriptionTh : exp.description
        const role = lang === 'th' && exp.roleTh ? exp.roleTh : exp.role
        const company = lang === 'th' && exp.companyTh ? exp.companyTh : exp.company
        const note = lang === 'th' && exp.noteTh ? exp.noteTh : exp.note

        return (
          <div key={exp.id} className="rounded-2xl overflow-hidden"
            style={{ background: 'var(--ios-card-bg)' }}>

            {/* Header */}
            <div className="px-5 py-4" style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[17px] font-semibold" style={{ color: 'var(--text-primary)' }}>{role}</p>
                  <p className="text-[14px] mt-0.5 font-medium" style={{ color: 'var(--system-blue)' }}>
                    {company}
                    {note && (
                      <span className="ml-2 font-normal text-[12px]" style={{ color: 'var(--text-tertiary)' }}>
                        · {note}
                      </span>
                    )}
                  </p>
                </div>
                <p className="text-[12px] shrink-0 tabular-nums pt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                  {formatDate(exp.startDate, lang)} — {formatDate(exp.endDate, lang)}
                </p>
              </div>
            </div>

            {/* Bullets */}
            <div className="px-5 py-4 space-y-3">
              {desc.map((bullet, i) => (
                <div key={i} className="flex gap-3">
                  <span className="shrink-0 mt-[5px] w-1.5 h-1.5 rounded-full"
                    style={{ background: 'var(--system-blue)' }} />
                  <p className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {bullet}
                  </p>
                </div>
              ))}
            </div>

            {/* Tech tags */}
            <div className="px-5 pb-4 pt-2 flex flex-wrap gap-1.5"
              style={{ borderTop: '0.5px solid var(--ios-separator)' }}>
              {exp.techStack.map((tech) => (
                <span key={tech}
                  className="px-2.5 py-1 text-[11px] rounded-full font-medium"
                  style={{ background: 'var(--ios-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
