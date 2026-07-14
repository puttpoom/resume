'use client'

import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { education, certificates } from '@/data/education'
import { AVATAR_URL } from '@/lib/assets'
import { EducationList } from '@/components/shared/EducationList'

const SOFT_SKILLS = [
  'Communication', 'Teamwork', 'Ownership',
  'Problem Solving', 'Adaptability', 'Time Management',
  'Self-directed', 'Attention to Detail',
]

export function AboutPanel() {
  const { lang } = useLang()
  const t = getStrings(lang).about

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">
      {/* Hero card */}
      <div className="rounded-2xl overflow-hidden bg-ios-card">
        <div className="flex gap-6 p-6">
          <img
            src={AVATAR_URL}
            alt="Putthiphoom"
            className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-md"
            style={{ border: '0.5px solid var(--ios-separator)' }}
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-[22px] font-bold leading-tight text-primary">
              Putthiphoom Boonmahatanasombut
            </h1>
            <p className="text-[15px] mt-1 font-medium text-system-blue">{t.role}</p>
            <p className="text-[13px] mt-0.5 text-secondary">
              Bangkok, Thailand · putthiphoom.bm@gmail.com
            </p>
            <div className="flex gap-6 mt-4">
              {t.stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[20px] font-bold leading-none text-primary">{value}</p>
                  <p className="text-[11px] mt-0.5 text-secondary">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5 text-secondary" style={{ letterSpacing: '0.04em' }}>
          {t.biography}
        </p>
        <div className="rounded-2xl overflow-hidden bg-ios-card">
          {t.bio.map((para, i) => (
            <div
              key={i}
              className="px-5 py-4"
              style={{ borderBottom: i < t.bio.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <p className="text-[15px] leading-relaxed text-primary">{para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5 text-secondary" style={{ letterSpacing: '0.04em' }}>
          {t.softSkills}
        </p>
        <div className="rounded-2xl p-4 flex flex-wrap gap-2 bg-ios-card">
          {SOFT_SKILLS.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full text-[13px] font-medium text-primary bg-ios"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      <EducationList education={education} certificates={certificates} lang={lang} />
    </div>
  )
}
