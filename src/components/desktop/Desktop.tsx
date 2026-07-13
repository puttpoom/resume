'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  IoPerson, IoFlash, IoFolder, IoBriefcase,
  IoSchool, IoMail, IoDocumentText,
  IoChevronForward, IoSunny, IoMoon, IoGlobe,
  IoDownload,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { MenuBar } from './MenuBar'
import { AboutPanel }      from './panels/AboutPanel'
import { SkillsPanel }     from './panels/SkillsPanel'
import { ProjectsPanel }   from './panels/ProjectsPanel'
import { ExperiencePanel } from './panels/ExperiencePanel'
import { EducationPanel }  from './panels/EducationPanel'
import { ContactPanel }    from './panels/ContactPanel'
import { ResumePanel }     from './panels/ResumePanel'
import { useLang } from '@/lib/lang'
import { useTheme } from '@/lib/theme'
import { getStrings } from '@/data/i18n'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact' | 'resume'

interface NavRow {
  id: Section
  Icon: IconType
  iconBg: string
  label: string
}

const AVATAR =
  (process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') +
  '/assets/putthiphoom_pic.jpg'

/* ── Shared sub-components ─────────────────────────────────────── */

function AppIcon({ Icon, bg, size = 28 }: { Icon: IconType; bg: string; size?: number }) {
  return (
    <div
      className="flex items-center justify-center shrink-0"
      style={{
        width: size,
        height: size,
        borderRadius: Math.round(size * 0.2237),
        background: bg,
      }}
    >
      <Icon size={Math.round(size * 0.62)} color="#fff" />
    </div>
  )
}

function IOSSwitch({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className="relative shrink-0 focus-visible:outline-none"
      style={{
        width: 44,
        height: 26,
        borderRadius: 13,
        background: on ? '#34C759' : 'rgba(120,120,128,0.32)',
        transition: 'background 0.2s ease',
      }}
    >
      <motion.div
        animate={{ x: on ? 20 : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 36 }}
        style={{
          position: 'absolute',
          top: 2,
          width: 22,
          height: 22,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: '0 1px 4px rgba(0,0,0,0.3)',
        }}
      />
    </button>
  )
}

function SidebarLabel({ children }: { children: string }) {
  return (
    <p className="text-[11px] uppercase px-3 pt-5 pb-1"
      style={{ color: 'var(--text-secondary)', letterSpacing: '0.05em' }}>
      {children}
    </p>
  )
}

/* ── Desktop ──────────────────────────────────────────────────── */
export function Desktop() {
  const [active, setActive] = useState<Section>('about')
  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const t = getStrings(lang)

  const navRows: NavRow[] = [
    { id: 'about',      Icon: IoPerson,       iconBg: '#007AFF', label: t.nav.about },
    { id: 'skills',     Icon: IoFlash,         iconBg: '#5856D6', label: t.nav.skills },
    { id: 'projects',   Icon: IoFolder,        iconBg: '#FF9500', label: t.nav.projects },
    { id: 'experience', Icon: IoBriefcase,     iconBg: '#FF3B30', label: t.nav.experience },
    { id: 'education',  Icon: IoSchool,        iconBg: '#34C759', label: t.nav.education },
    { id: 'contact',    Icon: IoMail,          iconBg: '#0A84FF', label: t.nav.contact },
  ]

  const resumeUrl =
    (process.env.NODE_ENV === 'production' ? '/spa-portfilo' : '') +
    `/docs/resume_putthiphoom_${lang === 'th' ? 'thai' : 'eng'}.pdf`

  return (
    <div
      className="flex flex-col overflow-hidden"
      style={{ height: '100dvh', background: 'var(--ios-bg)' }}
    >
      {/* macOS-style menu bar stays */}
      <MenuBar />

      {/* Two-column body below menubar */}
      <div className="flex flex-1 overflow-hidden" style={{ marginTop: 28 }}>

        {/* ── Sidebar ──────────────────────────────────────────── */}
        <aside
          className="shrink-0 overflow-y-auto border-r flex flex-col"
          style={{
            width: 280,
            borderColor: 'var(--ios-separator)',
            background: 'var(--ios-bg)',
          }}
        >
          {/* Profile */}
          <div className="px-3 pt-5 pb-2">
            <div
              className="rounded-2xl px-3 py-3 flex items-center gap-3"
              style={{ background: 'var(--ios-card-bg)' }}
            >
              <img
                src={AVATAR}
                alt="Putthiphoom"
                className="w-12 h-12 rounded-full object-cover shrink-0"
                style={{ border: '0.5px solid var(--ios-separator)' }}
              />
              <div className="min-w-0">
                <p className="text-[14px] font-semibold leading-snug truncate"
                  style={{ color: 'var(--text-primary)' }}>
                  Putthiphoom B.
                </p>
                <p className="text-[12px] truncate" style={{ color: 'var(--system-blue)' }}>
                  Full-Stack Developer
                </p>
                <p className="text-[11px] truncate mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                  Bangkok, Thailand
                </p>
              </div>
            </div>
          </div>

          {/* Settings rows: Language + Dark mode */}
          <SidebarLabel>{lang === 'th' ? 'การตั้งค่า' : 'Settings'}</SidebarLabel>
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
              {/* Language */}
              <div className="flex items-center gap-2.5 px-3 py-2.5"
                style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
                <AppIcon Icon={IoGlobe} bg="#007AFF" size={26} />
                <span className="flex-1 text-[14px]" style={{ color: 'var(--text-primary)' }}>
                  {lang === 'th' ? 'ภาษา' : 'Language'}
                </span>
                <button
                  onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
                  className="text-[12px] font-semibold transition-opacity hover:opacity-70"
                  style={{ color: 'var(--system-blue)' }}
                >
                  {lang === 'en' ? 'ภาษาไทย' : 'English'}
                </button>
              </div>
              {/* Appearance */}
              <div className="flex items-center gap-2.5 px-3 py-2.5">
                <AppIcon
                  Icon={theme === 'dark' ? IoMoon : IoSunny}
                  bg={theme === 'dark' ? '#636366' : '#FF9500'}
                  size={26}
                />
                <span className="flex-1 text-[14px]" style={{ color: 'var(--text-primary)' }}>
                  {lang === 'th' ? 'โหมดมืด' : 'Dark Mode'}
                </span>
                <IOSSwitch on={theme === 'dark'} onToggle={toggle} />
              </div>
            </div>
          </div>

          {/* Nav rows */}
          <SidebarLabel>{lang === 'th' ? 'พอร์ตโฟลิโอ' : 'Portfolio'}</SidebarLabel>
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
              {navRows.map((row, i) => (
                <button
                  key={row.id}
                  onClick={() => setActive(row.id)}
                  className="w-full flex items-center gap-2.5 px-3 py-2.5 transition-colors"
                  style={{
                    background: active === row.id ? 'var(--system-blue)' : 'transparent',
                    borderBottom: i < navRows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none',
                  }}
                >
                  <AppIcon Icon={row.Icon} bg={active === row.id ? 'rgba(255,255,255,0.25)' : row.iconBg} size={26} />
                  <span
                    className="flex-1 text-left text-[14px] font-medium"
                    style={{ color: active === row.id ? '#fff' : 'var(--text-primary)' }}
                  >
                    {row.label}
                  </span>
                  {active !== row.id && (
                    <IoChevronForward size={14} style={{ color: 'var(--text-tertiary)' }} />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Resume download */}
          <SidebarLabel>{lang === 'th' ? 'เอกสาร' : 'Documents'}</SidebarLabel>
          <div className="px-3 pb-6">
            <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
              <button
                onClick={() => setActive('resume')}
                className="w-full flex items-center gap-2.5 px-3 py-2.5 transition-colors"
                style={{ background: active === 'resume' ? 'var(--system-blue)' : 'transparent' }}
              >
                <AppIcon
                  Icon={IoDocumentText}
                  bg={active === 'resume' ? 'rgba(255,255,255,0.25)' : '#FF2D55'}
                  size={26}
                />
                <span
                  className="flex-1 text-left text-[14px] font-medium"
                  style={{ color: active === 'resume' ? '#fff' : 'var(--text-primary)' }}
                >
                  {lang === 'th' ? 'ดู CV' : 'View Résumé'}
                </span>
                <a
                  href={resumeUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded-md transition-opacity hover:opacity-60"
                  style={{ color: active === 'resume' ? '#fff' : 'var(--text-tertiary)' }}
                  title={lang === 'th' ? 'ดาวน์โหลด' : 'Download'}
                >
                  <IoDownload size={14} />
                </a>
              </button>
            </div>
          </div>
        </aside>

        {/* ── Detail panel ─────────────────────────────────────── */}
        <main
          key={active}
          className="flex-1 overflow-y-auto"
          style={{ background: 'var(--ios-bg)' }}
        >
          {active === 'about'      && <AboutPanel />}
          {active === 'skills'     && <SkillsPanel />}
          {active === 'projects'   && <ProjectsPanel />}
          {active === 'experience' && <ExperiencePanel />}
          {active === 'education'  && <EducationPanel />}
          {active === 'contact'    && <ContactPanel />}
          {active === 'resume'     && <ResumePanel />}
        </main>
      </div>
    </div>
  )
}
