'use client'

import { IoMailOutline, IoLogoGithub, IoLogoLinkedin, IoLocationOutline, IoCallOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL } from '@/lib/assets'
import { profile } from '@/lib/content'

interface ContactRow {
  label: string
  value: string
  href: string | null
  Icon: IconType
  iconBg: string
}

export function ContactSection() {
  const { lang } = useLang()
  const t = getStrings(lang).contact

  const rows: ContactRow[] = [
    { label: 'Email',    value: profile.email,         href: `mailto:${profile.email}`, Icon: IoMailOutline,     iconBg: '#007AFF' },
    { label: 'Phone',    value: profile.phone,         href: profile.phoneHref,          Icon: IoCallOutline,     iconBg: '#34C759' },
    { label: 'GitHub',   value: profile.githubLabel,   href: profile.github,             Icon: IoLogoGithub,      iconBg: '#1d1d1f' },
    { label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin,           Icon: IoLogoLinkedin,    iconBg: '#0A66C2' },
    { label: 'Location', value: profile.location,      href: null,                        Icon: IoLocationOutline, iconBg: '#FF3B30' },
  ]

  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 min-[821px]:p-6 min-[821px]:max-w-xl min-[821px]:mx-auto min-[821px]:space-y-5">
        {/* Profile card */}
        <div className="flex flex-col items-center mb-7 min-[821px]:mb-0 min-[821px]:hidden">
          <img
            src={AVATAR_URL}
            alt={profile.name}
            className="w-[86px] h-[86px] rounded-full object-cover mb-3 shadow-md"
            style={{ border: '1.5px solid var(--ios-separator)' }}
          />
          <h2 className="text-[20px] font-bold text-primary">{profile.firstName}</h2>
          <p className="text-[14px] text-secondary">{profile.role}</p>
        </div>

        <div className="rounded-2xl overflow-hidden mb-4 min-[821px]:mb-5 bg-ios-card">
          <div
            className="hidden min-[821px]:flex flex-col items-center py-8 px-6 gap-3"
            style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
          >
            <img
              src={AVATAR_URL}
              alt={profile.name}
              className="w-24 h-24 rounded-full object-cover shadow-lg"
              style={{ border: '2px solid var(--ios-separator)' }}
            />
            <div className="text-center">
              <h2 className="text-[20px] font-bold text-primary">{profile.name}</h2>
              <p className="text-[14px] mt-0.5 text-secondary">{profile.role}</p>
            </div>
          </div>

          {rows.map((row, i) => (
            <div
              key={row.label}
              className="flex items-center gap-3 px-4 py-[11px] min-[821px]:px-5 min-[821px]:py-[13px]"
              style={{ borderBottom: i < rows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <div
                className="w-[29px] h-[29px] min-[821px]:w-8 min-[821px]:h-8 rounded-[6px] min-[821px]:rounded-[8px] flex items-center justify-center shrink-0"
                style={{ background: row.iconBg }}
              >
                <row.Icon size={17} color="#fff" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase font-medium mb-0.5 text-tertiary" style={{ letterSpacing: '0.04em' }}>
                  {row.label}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto') || row.href.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-[15px] truncate block transition-opacity hover:opacity-70 text-system-blue"
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-[15px] text-primary">{row.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="block w-full py-3.5 rounded-2xl text-center text-[17px] min-[821px]:text-[16px] font-semibold text-white transition-opacity hover:opacity-90 bg-system-blue"
        >
          {t.cta}
        </a>

        <p className="hidden min-[821px]:block text-center text-[12px] mt-5 text-tertiary">{t.subtitle}</p>
      </div>
    </div>
  )
}
