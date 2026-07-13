'use client'

import { Window } from '../Window'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function AboutApp() {
  const { lang } = useLang()
  const t = getStrings(lang).about

  const sidebarItems = ['Bio', 'Stats', 'Soft Skills']

  return (
    <Window
      id="about"
      title="About Me — Notes"
      width={680}
      height={460}
      sidebar={
        <div className="p-2">
          <p className="text-[11px] font-semibold uppercase opacity-40 px-2 mb-1" style={{ color: 'var(--text-primary)' }}>
            Notes
          </p>
          {sidebarItems.map((item) => (
            <div key={item} className="px-2 py-1 rounded-md text-[13px] cursor-default hover:bg-black/5 dark:hover:bg-white/5"
              style={{ color: 'var(--text-primary)' }}>
              {item}
            </div>
          ))}
        </div>
      }
    >
      <div className="p-6 max-w-xl">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
          Putthiphoom Boonmahatanasombut
        </h2>
        <p className="text-[13px] mb-4" style={{ color: 'var(--system-blue)' }}>Full-Stack Developer · Bangkok, Thailand</p>

        <div className="space-y-3">
          {t.bio.map((para, i) => (
            <p key={i} className="text-[14px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {para}
            </p>
          ))}
        </div>

        {/* Stats */}
        <div className="flex gap-8 mt-6 pt-4 border-t" style={{ borderColor: 'var(--ios-separator)' }}>
          {t.stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>{value}</p>
              <p className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="mt-5">
          <p className="text-[12px] font-semibold uppercase opacity-50 mb-2" style={{ color: 'var(--text-primary)' }}>
            Soft Skills
          </p>
          <div className="flex flex-wrap gap-2">
            {['Communication','Teamwork','Ownership','Problem Solving','Adaptability','Time Management'].map((s) => (
              <span key={s}
                className="px-2.5 py-1 text-[12px] rounded-full"
                style={{ background: 'var(--ios-separator)', color: 'var(--text-secondary)' }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Window>
  )
}
