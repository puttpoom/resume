'use client'

import { IoMailOutline, IoLogoGithub, IoLogoLinkedin, IoLocationOutline } from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

interface Row {
  label: string
  value: string
  href: string | null
  Icon: IconType
  iconBg: string
}

const ROWS: Row[] = [
  { label: 'Email',    value: 'putthiphoom.boo@freewillfx.com', href: 'mailto:putthiphoom.boo@freewillfx.com', Icon: IoMailOutline,   iconBg: '#007AFF' },
  { label: 'GitHub',   value: 'github.com/puttpoom',             href: 'https://github.com/puttpoom',           Icon: IoLogoGithub,    iconBg: '#1d1d1f' },
  { label: 'LinkedIn', value: 'linkedin.com/in/putthiphoom',     href: 'https://linkedin.com/in/putthiphoom',   Icon: IoLogoLinkedin,  iconBg: '#0A66C2' },
  { label: 'Location', value: 'Bangkok, Thailand',               href: null,                                    Icon: IoLocationOutline, iconBg: '#FF3B30' },
]

export function ContactDetail() {
  const { lang } = useLang()
  const t = getStrings(lang).contact

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
          <h2 className="text-[20px] font-bold" style={{ color: 'var(--text-primary)' }}>Putthiphoom</h2>
          <p className="text-[14px]" style={{ color: 'var(--text-secondary)' }}>Full-Stack Developer</p>
        </div>

        {/* Contact rows */}
        <div className="rounded-2xl overflow-hidden mb-4" style={{ background: 'var(--ios-card-bg)' }}>
          {ROWS.map((row, i) => (
            <div
              key={row.label}
              className="flex items-center gap-3 px-4 py-[11px]"
              style={{ borderBottom: i < ROWS.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
            >
              <div
                className="w-[29px] h-[29px] rounded-[6px] flex items-center justify-center shrink-0"
                style={{ background: row.iconBg }}
              >
                <row.Icon size={17} color="#fff" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase font-medium mb-0.5" style={{ color: 'var(--text-tertiary)', letterSpacing: '0.04em' }}>
                  {row.label}
                </p>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-[15px] truncate block"
                    style={{ color: 'var(--system-blue)' }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-[15px]" style={{ color: 'var(--text-primary)' }}>{row.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA button */}
        <a
          href="mailto:putthiphoom.boo@freewillfx.com"
          className="block w-full py-3.5 rounded-2xl text-center text-[17px] font-semibold text-white"
          style={{ background: 'var(--system-blue)' }}
        >
          {t.cta}
        </a>
      </div>
    </div>
  )
}
