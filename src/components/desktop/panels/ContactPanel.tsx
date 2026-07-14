'use client'

import { IoMailOutline, IoLogoGithub, IoLogoLinkedin, IoLocationOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL } from '@/lib/assets'

interface ContactRow {
  label: string
  value: string
  href: string | null
  Icon: IconType
  iconBg: string
}

const ROWS: ContactRow[] = [
  { label: 'Email',    value: 'putthiphoom.bm@gmail.com', href: 'mailto:putthiphoom.bm@gmail.com', Icon: IoMailOutline,     iconBg: '#007AFF' },
  { label: 'GitHub',   value: 'github.com/puttpoom',             href: 'https://github.com/puttpoom',           Icon: IoLogoGithub,     iconBg: '#1d1d1f' },
  { label: 'LinkedIn', value: 'linkedin.com/in/putthiphoom',     href: 'https://linkedin.com/in/putthiphoom',   Icon: IoLogoLinkedin,   iconBg: '#0A66C2' },
  { label: 'Location', value: 'Bangkok, Thailand',               href: null,                                    Icon: IoLocationOutline, iconBg: '#FF3B30' },
]

export function ContactPanel() {
  const { lang } = useLang()
  const t = getStrings(lang).contact

  return (
    <div className="p-6 max-w-xl mx-auto space-y-5">
      {/* Profile card */}
      <div className="rounded-2xl overflow-hidden bg-ios-card">
        <div
          className="flex flex-col items-center py-8 px-6 gap-3"
          style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
        >
          <img
            src={AVATAR_URL}
            alt="Putthiphoom"
            className="w-24 h-24 rounded-full object-cover shadow-lg"
            style={{ border: '2px solid var(--ios-separator)' }}
          />
          <div className="text-center">
            <h2 className="text-[20px] font-bold text-primary">Putthiphoom Boonmahatanasombut</h2>
            <p className="text-[14px] mt-0.5 text-secondary">Full-Stack Developer</p>
          </div>
        </div>

        {ROWS.map((row, i) => (
          <div
            key={row.label}
            className="flex items-center gap-3 px-5 py-[13px]"
            style={{ borderBottom: i < ROWS.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
          >
            <div
              className="w-8 h-8 rounded-[8px] flex items-center justify-center shrink-0"
              style={{ background: row.iconBg }}
            >
              <row.Icon size={18} color="#fff" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase font-medium mb-0.5 text-tertiary" style={{ letterSpacing: '0.04em' }}>
                {row.label}
              </p>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith('mailto') ? undefined : '_blank'}
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
        href="mailto:putthiphoom..bm@gmail.com"
        className="block w-full py-3.5 rounded-2xl text-center text-[16px] font-semibold text-white transition-opacity hover:opacity-90 bg-system-blue"
      >
        {t.cta}
      </a>

      <p className="text-center text-[12px] text-tertiary">{t.subtitle}</p>
    </div>
  )
}
