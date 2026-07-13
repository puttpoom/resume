'use client'

import { Window } from '../Window'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function ResumeApp() {
  const { lang } = useLang()
  const t = getStrings(lang).resume

  const fileName = lang === 'th' ? 'resume_putthiphoom_thai.pdf' : 'resume_putthiphoom_eng.pdf'
  const basePath = process.env.NODE_ENV === 'production' ? '/spa-portfilo' : ''
  const fileUrl = `${basePath}/docs/${fileName}`

  return (
    <Window id="resume" title="Résumé — Preview" width={560} height={520}>
      <div className="flex flex-col h-full">
        {/* Toolbar */}
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ borderColor: 'var(--ios-separator)', background: 'var(--window-sidebar)' }}
        >
          <p className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{fileName}</p>
          <a
            href={fileUrl}
            download={fileName}
            className="px-3 py-1 text-[12px] font-semibold rounded-md text-white transition-opacity hover:opacity-90"
            style={{ background: 'var(--system-blue)' }}
          >
            ↓ {t.download}
          </a>
        </div>

        {/* PDF preview area */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={fileUrl}
            title="Resume Preview"
            className="w-full h-full"
            style={{ border: 'none' }}
          />
        </div>
      </div>
    </Window>
  )
}
