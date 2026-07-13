'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  IoPerson,
  IoFlash,
  IoFolder,
  IoBriefcase,
  IoMail,
  IoDocumentText,
  IoChevronForward,
  IoChevronBack,
  IoSunny,
  IoMoon,
  IoGlobe,
  IoDownload,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { IOSStatusBar } from './IOSStatusBar'
import { AboutDetail } from './detail/AboutDetail'
import { SkillsDetail } from './detail/SkillsDetail'
import { ProjectsDetail } from './detail/ProjectsDetail'
import { ExperienceDetail } from './detail/ExperienceDetail'
import { ContactDetail } from './detail/ContactDetail'
import { useLang } from '@/lib/lang'
import { useTheme } from '@/lib/theme'
import { getStrings } from '@/data/i18n'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'contact' | null

interface SettingsRow {
  id: Section
  Icon: IconType
  iconBg: string
  label: string
}

/* ── iOS-style rounded square app icon ────────────────────────── */
function AppIcon({ Icon, bg, size = 29 }: { Icon: IconType; bg: string; size?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: size * 0.2237, /* iOS icon radius formula */
        background: bg,
      }}
    >
      <Icon size={size * 0.62} color="#fff" />
    </div>
  )
}

/* ── iOS toggle switch ────────────────────────────────────────── */
function IOSSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className="relative shrink-0 focus-visible:ring-2 focus-visible:ring-offset-1"
      style={{
        width: 51,
        height: 31,
        borderRadius: 15.5,
        background: on ? '#34C759' : 'rgba(120,120,128,0.32)',
        transition: 'background 0.2s ease',
      }}
    >
      <motion.div
        animate={{ x: on ? 22 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 36 }}
        style={{
          position: 'absolute',
          top: 2,
          width: 27,
          height: 27,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 2px 6px rgba(0,0,0,0.28)',
        }}
      />
    </button>
  )
}

/* ── Chevron ───────────────────────────────────────────────────── */
function Chevron() {
  return <IoChevronForward size={17} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
}

/* ── Section label ─────────────────────────────────────────────── */
function SectionLabel({ children }: { children: string }) {
  return (
    <p
      className="text-[13px] uppercase px-4 mb-1 mt-6"
      style={{ color: 'var(--text-secondary)', letterSpacing: '0.03em' }}
    >
      {children}
    </p>
  )
}

/* ── Main ─────────────────────────────────────────────────────── */
export function IOSSettings() {
  const [active, setActive] = useState<Section>(null)
  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const t = getStrings(lang)

  const rows: SettingsRow[] = [
    { id: 'about',      Icon: IoPerson,       iconBg: '#007AFF', label: t.nav.about },
    { id: 'skills',     Icon: IoFlash,         iconBg: '#5856D6', label: t.nav.skills },
    { id: 'projects',   Icon: IoFolder,        iconBg: '#FF9500', label: t.nav.projects },
    { id: 'experience', Icon: IoBriefcase,     iconBg: '#FF3B30', label: t.nav.experience },
    { id: 'contact',    Icon: IoMail,          iconBg: '#34C759', label: t.nav.contact },
  ]

  const resumeUrl =
    (process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') +
    `/docs/resume_putthiphoom_${lang === 'th' ? 'thai' : 'eng'}.pdf`

  const activeRow = rows.find((r) => r.id === active)

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--ios-bg)' }}>
      <IOSStatusBar />

      {/* ── Root scroll list ─────────────────────────────────── */}
      <div className="absolute inset-0 overflow-y-auto" style={{ paddingTop: 59 }}>
        <div className="pb-12">

          {/* Page title */}
          <div className="px-4 pt-5 pb-2">
            <h1 className="text-[34px] font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
              {lang === 'th' ? 'พอร์ตโฟลิโอ' : 'Portfolio'}
            </h1>
          </div>

          {/* Profile card */}
          <div className="mx-4 rounded-2xl px-4 py-3.5 flex items-center gap-3.5 mb-1"
            style={{ background: 'var(--ios-card-bg)' }}>
            <img
              src={(process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') + '/assets/putthiphoom_pic.jpg'}
              alt="Putthiphoom"
              className="w-[60px] h-[60px] rounded-full object-cover shrink-0"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                Putthiphoom
              </p>
              <p className="text-[17px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                Boonmahatanasombut
              </p>
              <p className="text-[13px] mt-0.5" style={{ color: 'var(--system-blue)' }}>
                Full-Stack Developer · Bangkok
              </p>
            </div>
          </div>

          {/* Appearance section */}
          <SectionLabel>{lang === 'th' ? 'การตั้งค่า' : 'Settings'}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
            {/* Language row */}
            <div className="flex items-center gap-3 px-4 py-[11px]"
              style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
              <AppIcon Icon={IoGlobe} bg="#007AFF" />
              <span className="flex-1 text-[16px]" style={{ color: 'var(--text-primary)' }}>
                {lang === 'th' ? 'ภาษา' : 'Language'}
              </span>
              <button
                onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
                className="text-[15px] font-medium"
                style={{ color: 'var(--system-blue)' }}
              >
                {lang === 'en' ? 'ภาษาไทย' : 'English'}
              </button>
            </div>
            {/* Appearance row */}
            <div className="flex items-center gap-3 px-4 py-[11px]">
              <AppIcon Icon={theme === 'dark' ? IoMoon : IoSunny} bg={theme === 'dark' ? '#636366' : '#FF9500'} />
              <span className="flex-1 text-[16px]" style={{ color: 'var(--text-primary)' }}>
                {lang === 'th' ? 'โหมดมืด' : 'Dark Mode'}
              </span>
              <IOSSwitch on={theme === 'dark'} onToggle={toggle} />
            </div>
          </div>

          {/* Navigation sections */}
          <SectionLabel>{lang === 'th' ? 'เกี่ยวกับฉัน' : 'About Me'}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
            {rows.map((row, i) => (
              <button
                key={row.id}
                onClick={() => setActive(row.id)}
                className="w-full flex items-center gap-3 px-4 py-[11px] active:opacity-70 transition-opacity"
                style={{ borderBottom: i < rows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
              >
                <AppIcon Icon={row.Icon} bg={row.iconBg} />
                <span className="flex-1 text-left text-[16px]" style={{ color: 'var(--text-primary)' }}>
                  {row.label}
                </span>
                <Chevron />
              </button>
            ))}
          </div>

          {/* Resume download */}
          <SectionLabel>{lang === 'th' ? 'เอกสาร' : 'Documents'}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
            <a
              href={resumeUrl}
              download
              className="flex items-center gap-3 px-4 py-[11px] active:opacity-70 transition-opacity"
            >
              <AppIcon Icon={IoDocumentText} bg="#FF2D55" />
              <span className="flex-1 text-[16px]" style={{ color: 'var(--text-primary)' }}>
                {lang === 'th' ? 'ดาวน์โหลด CV' : 'Download Résumé'}
              </span>
              <IoDownload size={17} style={{ color: 'var(--text-tertiary)' }} />
            </a>
          </div>

          {/* Footer */}
          <p className="text-center text-[12px] mt-8 px-4" style={{ color: 'var(--text-tertiary)' }}>
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>

      {/* ── Detail push panels ───────────────────────────────── */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={active}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            className="absolute inset-0 z-40 flex flex-col"
            style={{ background: 'var(--ios-bg)' }}
          >
            {/* Navigation bar */}
            <div
              className="shrink-0 flex items-end px-2 pb-2"
              style={{
                height: 59 + 44,
                paddingTop: 59,
                background: 'var(--ios-card-bg)',
                borderBottom: '0.5px solid var(--ios-separator)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <button
                onClick={() => setActive(null)}
                className="flex items-center gap-0.5 px-2 py-1 -ml-1 active:opacity-60 transition-opacity"
                style={{ color: 'var(--system-blue)' }}
              >
                <IoChevronBack size={20} />
                <span className="text-[17px]">
                  {lang === 'th' ? 'พอร์ตโฟลิโอ' : 'Portfolio'}
                </span>
              </button>

              <p
                className="absolute inset-x-0 bottom-2 text-center text-[17px] font-semibold pointer-events-none"
                style={{ color: 'var(--text-primary)' }}
              >
                {activeRow?.label}
              </p>
            </div>

            {/* Scrollable panel content */}
            <div className="flex-1 relative overflow-hidden">
              {active === 'about'      && <AboutDetail />}
              {active === 'skills'     && <SkillsDetail />}
              {active === 'projects'   && <ProjectsDetail />}
              {active === 'experience' && <ExperienceDetail />}
              {active === 'contact'    && <ContactDetail />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
