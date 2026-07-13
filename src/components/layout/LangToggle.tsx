'use client'

import { useLang } from '@/lib/lang'

export function LangToggle() {
  const { lang, setLang } = useLang()

  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
      aria-label={lang === 'en' ? 'Switch to Thai' : 'เปลี่ยนเป็นภาษาอังกฤษ'}
      className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-[rgba(242,239,232,0.15)] text-[#8A8278] hover:text-[#F2EFE8] hover:border-[rgba(242,239,232,0.3)] transition-colors text-xs font-semibold tracking-wide"
    >
      <span className={lang === 'en' ? 'text-[#F2EFE8]' : ''}>EN</span>
      <span className="text-[rgba(242,239,232,0.2)]">|</span>
      <span className={lang === 'th' ? 'text-[#F2EFE8]' : ''}>TH</span>
    </button>
  )
}
