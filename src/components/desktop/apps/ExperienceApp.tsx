'use client'

import { Window } from '../Window'
import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

function formatDate(d: string | null, lang: string): string {
  if (!d) return lang === 'th' ? 'ปัจจุบัน' : 'Present'
  const [y, m] = d.split('-')
  return new Date(Number(y), Number(m) - 1).toLocaleDateString(lang === 'th' ? 'th-TH' : 'en-US', { year: 'numeric', month: 'short' })
}

export function ExperienceApp() {
  const { lang } = useLang()
  const t = getStrings(lang).experience

  return (
    <Window id="experience" title="Experience" width={680} height={500}>
      <div className="p-5 overflow-y-auto h-full">
        <h2 className="text-xl font-bold mb-5" style={{ color: 'var(--text-primary)' }}>{t.title}</h2>

        <div className="space-y-4">
          {experiences.map((exp) => {
            const desc = lang === 'th' && exp.descriptionTh ? exp.descriptionTh : exp.description
            const role = lang === 'th' && exp.roleTh ? exp.roleTh : exp.role
            const company = lang === 'th' && exp.companyTh ? exp.companyTh : exp.company
            const note = lang === 'th' && exp.noteTh ? exp.noteTh : exp.note

            return (
              <div key={exp.id}
                className="rounded-xl p-4"
                style={{ background: 'var(--ios-separator)' }}>
                <div className="flex items-start justify-between gap-3 mb-1">
                  <div>
                    <h3 className="font-semibold text-[14px]" style={{ color: 'var(--text-primary)' }}>{role}</h3>
                    <p className="text-[13px]" style={{ color: 'var(--system-blue)' }}>
                      {company}
                      {note && <span className="ml-2 opacity-60 text-[11px]">· {note}</span>}
                    </p>
                  </div>
                  <p className="text-[11px] shrink-0 tabular-nums" style={{ color: 'var(--text-tertiary)' }}>
                    {formatDate(exp.startDate, lang)} — {formatDate(exp.endDate, lang)}
                  </p>
                </div>

                <ul className="mt-2 space-y-1">
                  {desc.map((bullet, i) => (
                    <li key={i} className="text-[12px] leading-relaxed flex gap-2" style={{ color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--system-blue)' }} className="shrink-0 mt-0.5">›</span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {exp.techStack.map((t) => (
                    <span key={t} className="px-2 py-0.5 text-[11px] rounded-md"
                      style={{ background: 'var(--window-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </Window>
  )
}
