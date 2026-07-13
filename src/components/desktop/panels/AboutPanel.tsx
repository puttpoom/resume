'use client'

import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { education } from '@/data/education'

const AVATAR =
  (process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') +
  '/assets/putthiphoom_pic.jpg'

const SOFT_SKILLS = [
  'Communication', 'Teamwork', 'Ownership',
  'Problem Solving', 'Adaptability', 'Time Management',
  'Self-directed', 'Attention to Detail',
]

export function AboutPanel() {
  const { lang } = useLang()
  const t = getStrings(lang).about
  const edu = education[0]

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">

      {/* Hero card */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
        <div className="flex gap-6 p-6">
          {/* Avatar */}
          <img
            src={AVATAR}
            alt="Putthiphoom"
            className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-md"
            style={{ border: '0.5px solid var(--ios-separator)' }}
          />
          {/* Identity */}
          <div className="flex-1 min-w-0">
            <h1 className="text-[22px] font-bold leading-tight" style={{ color: 'var(--text-primary)' }}>
              Putthiphoom Boonmahatanasombut
            </h1>
            <p className="text-[15px] mt-1 font-medium" style={{ color: 'var(--system-blue)' }}>
              {lang === 'th' ? 'นักพัฒนา Full-Stack' : 'Full-Stack Developer'}
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              Bangkok, Thailand · putthiphoom.boo@freewillfx.com
            </p>
            {/* Stats inline */}
            <div className="flex gap-6 mt-4">
              {t.stats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-[20px] font-bold leading-none" style={{ color: 'var(--text-primary)' }}>{value}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bio */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5" style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
          {lang === 'th' ? 'เกี่ยวกับฉัน' : 'Biography'}
        </p>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
          {t.bio.map((para, i) => (
            <div key={i} className="px-5 py-4"
              style={{ borderBottom: i < t.bio.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}>
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>{para}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Soft skills */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5" style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
          {lang === 'th' ? 'ทักษะอื่น' : 'Soft Skills'}
        </p>
        <div className="rounded-2xl p-4 flex flex-wrap gap-2" style={{ background: 'var(--ios-card-bg)' }}>
          {SOFT_SKILLS.map((s) => (
            <span key={s} className="px-3 py-1.5 rounded-full text-[13px] font-medium"
              style={{ background: 'var(--ios-bg)', color: 'var(--text-primary)', border: '0.5px solid var(--ios-separator)' }}>
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5" style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
          {lang === 'th' ? 'การศึกษา' : 'Education'}
        </p>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
          <div className="px-5 py-4">
            <p className="text-[15px] font-semibold" style={{ color: 'var(--text-primary)' }}>
              {lang === 'th' && edu.degreeTh ? edu.degreeTh : edu.degree}
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: 'var(--system-blue)' }}>
              {lang === 'th' && edu.fieldTh ? edu.fieldTh : edu.field}
            </p>
            <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
              {lang === 'th' && edu.institutionTh ? edu.institutionTh : edu.institution}
            </p>
            <div className="flex items-center justify-between mt-2">
              <p className="text-[12px]" style={{ color: 'var(--text-tertiary)' }}>
                {edu.startYear} – {edu.endYear} · GPA {edu.gpa}
              </p>
              {edu.note && (
                <p className="text-[12px]" style={{ color: 'var(--text-tertiary)' }}>
                  {lang === 'th' && edu.noteTh ? edu.noteTh : edu.note}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
