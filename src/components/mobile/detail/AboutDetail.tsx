'use client'

import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function AboutDetail() {
  const { lang } = useLang()
  const t = getStrings(lang).about

  return (
    <div className="h-full overflow-y-auto" style={{ background: 'var(--ios-bg)' }}>
      <div className="px-4 pt-5 pb-12">

        {/* Avatar */}
        <div className="flex flex-col items-center mb-7">
          <img
            src={(process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') + '/assets/putthiphoom_pic.jpg'}
            alt="Putthiphoom"
            className="w-[86px] h-[86px] rounded-full object-cover mb-3 shadow-md"
            style={{ border: '1.5px solid var(--ios-separator)' }}
          />
          <h2 className="text-[20px] font-bold" style={{ color: 'var(--text-primary)' }}>
            Putthiphoom Boonmahatanasombut
          </h2>
          <p className="text-[14px] mt-1" style={{ color: 'var(--system-blue)' }}>Full-Stack Developer</p>
        </div>

        {/* Stats */}
        <div className="mx-0 rounded-2xl overflow-hidden mb-4" style={{ background: 'var(--ios-card-bg)' }}>
          <div className="flex divide-x" style={{ borderColor: 'var(--ios-separator)' }}>
            {t.stats.map(({ value, label }) => (
              <div key={label} className="flex-1 py-4 text-center">
                <p className="text-[22px] font-bold" style={{ color: 'var(--text-primary)' }}>{value}</p>
                <p className="text-[12px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="rounded-2xl overflow-hidden mb-4" style={{ background: 'var(--ios-card-bg)' }}>
          {t.bio.map((para, i) => (
            <div
              key={i}
              className="px-4 py-3"
              style={{ borderBottom: i < t.bio.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <p className="text-[15px] leading-relaxed" style={{ color: 'var(--text-primary)' }}>{para}</p>
            </div>
          ))}
        </div>

        {/* Soft skills */}
        <p className="text-[13px] uppercase px-1 mb-2" style={{ color: 'var(--text-secondary)', letterSpacing: '0.03em' }}>
          {lang === 'th' ? 'ทักษะอื่น' : 'Soft Skills'}
        </p>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
          {['Communication', 'Teamwork', 'Ownership', 'Problem Solving', 'Adaptability', 'Time Management'].map((s, i, arr) => (
            <div
              key={s}
              className="px-4 py-3"
              style={{ borderBottom: i < arr.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <p className="text-[16px]" style={{ color: 'var(--text-primary)' }}>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
