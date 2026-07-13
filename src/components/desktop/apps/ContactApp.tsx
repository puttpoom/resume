'use client'

import { Window } from '../Window'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

const CONTACT_ROWS = [
  {
    label: 'Email',
    value: 'putthiphoom.boo@freewillfx.com',
    href: 'mailto:putthiphoom.boo@freewillfx.com',
    icon: '✉️',
  },
  {
    label: 'GitHub',
    value: 'github.com/puttpoom',
    href: 'https://github.com/puttpoom',
    icon: '🐙',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/putthiphoom',
    href: 'https://linkedin.com/in/putthiphoom',
    icon: '💼',
  },
  {
    label: 'Location',
    value: 'Bangkok, Thailand',
    href: null,
    icon: '📍',
  },
]

export function ContactApp() {
  const { lang } = useLang()
  const t = getStrings(lang).contact

  return (
    <Window id="contact" title="Contact — Contacts" width={460} height={420}>
      <div className="p-6 flex flex-col items-center gap-6">
        {/* Avatar card */}
        <div className="flex flex-col items-center gap-2 pt-2">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg"
            style={{ background: 'linear-gradient(135deg, #007AFF 0%, #5856D6 100%)' }}
          >
            P
          </div>
          <div className="text-center">
            <h2 className="font-semibold text-[16px]" style={{ color: 'var(--text-primary)' }}>
              Putthiphoom Boonmahatanasombut
            </h2>
            <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>Full-Stack Developer</p>
          </div>
        </div>

        {/* Contact rows */}
        <div className="w-full rounded-xl overflow-hidden" style={{ border: '0.5px solid var(--ios-separator)' }}>
          {CONTACT_ROWS.map((row, i) => (
            <div
              key={row.label}
              className="flex items-center gap-3 px-4 py-3"
              style={{
                background: 'var(--window-bg)',
                borderBottom: i < CONTACT_ROWS.length - 1 ? '0.5px solid var(--ios-separator)' : 'none',
              }}
            >
              <span className="text-[16px] w-7 flex-shrink-0">{row.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[11px] uppercase font-medium" style={{ color: 'var(--text-tertiary)' }}>{row.label}</p>
                {row.href ? (
                  <a
                    href={row.href}
                    target={row.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="text-[13px] truncate block hover:underline"
                    style={{ color: 'var(--system-blue)' }}
                  >
                    {row.value}
                  </a>
                ) : (
                  <p className="text-[13px]" style={{ color: 'var(--text-primary)' }}>{row.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <a
          href="mailto:putthiphoom.boo@freewillfx.com"
          className="w-full py-2.5 rounded-xl text-center text-[14px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--system-blue)' }}
        >
          {t.cta || 'Send Message'}
        </a>
      </div>
    </Window>
  )
}
