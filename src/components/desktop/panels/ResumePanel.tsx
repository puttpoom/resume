'use client'

import { IoDownload } from 'react-icons/io5'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { trackEvent } from '@/lib/gtag'

export function ResumePanel() {
  const { lang } = useLang()
  const t = getStrings(lang).resume

  const basePath = process.env.NODE_ENV === 'production' ? '/resume' : ''
  const fileName = `resume_putthiphoom_${lang === 'th' ? 'thai' : 'eng'}.pdf`
  const fileUrl = `${basePath}/docs/${fileName}`

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <div
        className="flex items-center justify-between px-5 py-2.5 shrink-0"
        style={{
          background: 'var(--ios-card-bg)',
          borderBottom: '0.5px solid var(--ios-separator)',
        }}
      >
        <p className="text-[13px]" style={{ color: 'var(--text-secondary)' }}>{fileName}</p>
        <a
          href={fileUrl}
          download={fileName}
          onClick={() => trackEvent('download_resume', { language: lang, file_name: fileName })}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
          style={{ background: 'var(--system-blue)' }}
        >
          <IoDownload size={14} />
          {t.download}
        </a>
      </div>

      {/* PDF viewer */}
      <div className="flex-1 overflow-hidden">
        <iframe
          src={fileUrl}
          title={t.title}
          className="w-full h-full"
          style={{ border: 'none' }}
        />
      </div>
    </div>
  )
}
