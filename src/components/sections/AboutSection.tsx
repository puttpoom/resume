'use client'

import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { education, certificates } from '@/data/education'
import { AVATAR_URL } from '@/lib/assets'
import { profile, softSkills } from '@/lib/content'
import { EducationList } from '@/components/shared/EducationList'

export function AboutSection() {
  const { lang } = useLang()
  const t = getStrings(lang).about

  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 min-[821px]:p-6 min-[821px]:max-w-3xl min-[821px]:mx-auto min-[821px]:space-y-5">

        {/* Mobile hero */}
        <div className="flex flex-col items-center mb-7 min-[821px]:hidden">
          <img
            src={AVATAR_URL}
            alt={profile.name}
            className="w-[86px] h-[86px] rounded-full object-cover mb-3 shadow-md"
            style={{ border: '1.5px solid var(--ios-separator)' }}
          />
          <h2 className="text-[20px] font-bold text-primary">{profile.name}</h2>
          <p className="text-[14px] mt-1 text-system-blue">{t.role}</p>
        </div>

        {/* Desktop hero card */}
        <div className="hidden min-[821px]:block rounded-2xl overflow-hidden mb-5 bg-ios-card">
          <div className="flex gap-6 p-6">
            <img
              src={AVATAR_URL}
              alt={profile.name}
              className="w-24 h-24 rounded-2xl object-cover shrink-0 shadow-md"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            />
            <div className="flex-1 min-w-0">
              <h1 className="text-[22px] font-bold leading-tight text-primary">
                {profile.name}
              </h1>
              <p className="text-[15px] mt-1 font-medium text-system-blue">{t.role}</p>
              <p className="text-[13px] mt-0.5 text-secondary">
                {profile.location} · {profile.email}
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

        {/* Mobile stats */}
        <div className="rounded-2xl overflow-hidden mb-4 min-[821px]:hidden bg-ios-card">
          <div className="flex divide-x divide-ios">
            {t.stats.map(({ value, label }) => (
              <div key={label} className="flex-1 py-4 text-center">
                <p className="text-[22px] font-bold text-primary">{value}</p>
                <p className="text-[12px] mt-0.5 text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="mb-4 min-[821px]:mb-0">
          <p className="hidden min-[821px]:block text-[12px] uppercase px-1 mb-1.5 text-secondary" style={{ letterSpacing: '0.04em' }}>
            {t.biography}
          </p>
          <div className="rounded-2xl overflow-hidden bg-ios-card">
            {t.bio.map((para, i) => (
              <div
                key={i}
                className="px-4 py-3 min-[821px]:px-5 min-[821px]:py-4"
                style={{ borderBottom: i < t.bio.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
              >
                <p className="text-[15px] leading-relaxed text-primary">{para}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Soft skills */}
        <p className="text-[13px] min-[821px]:text-[12px] uppercase px-1 mb-2 min-[821px]:mb-1.5 text-secondary" style={{ letterSpacing: '0.04em' }}>
          {t.softSkills}
        </p>

        {/* Desktop: wrapped pills */}
        <div className="hidden min-[821px]:flex rounded-2xl p-4 flex-wrap gap-2 bg-ios-card">
          {softSkills.map((s) => (
            <span
              key={s}
              className="px-3 py-1.5 rounded-full text-[13px] font-medium text-primary bg-ios"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            >
              {s}
            </span>
          ))}
        </div>

        {/* Mobile: divided list */}
        <div className="min-[821px]:hidden rounded-2xl overflow-hidden mb-4 bg-ios-card">
          {softSkills.map((s, i) => (
            <div
              key={s}
              className="px-4 py-3"
              style={{ borderBottom: i < softSkills.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <p className="text-[16px] text-primary">{s}</p>
            </div>
          ))}
        </div>

        <div className="mt-4 min-[821px]:mt-0">
          <EducationList education={education} certificates={certificates} lang={lang} />
        </div>
      </div>
    </div>
  )
}
