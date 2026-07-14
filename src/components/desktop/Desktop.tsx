'use client'

import { useState, useEffect } from 'react'
import {
  IoPerson, IoFlash, IoFolder, IoBriefcase,
  IoSchool, IoMail, IoDocumentText,
  IoChevronForward, IoSunny, IoMoon, IoGlobe, IoDownload,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { projects } from '@/data/projects'
import { MenuBar } from './MenuBar'
import { AboutPanel }      from './panels/AboutPanel'
import { SkillsPanel }     from './panels/SkillsPanel'
import { ProjectsPanel }   from './panels/ProjectsPanel'
import { ExperiencePanel } from './panels/ExperiencePanel'
import { EducationPanel }  from './panels/EducationPanel'
import { ContactPanel }    from './panels/ContactPanel'
import { ResumePanel }     from './panels/ResumePanel'
import { PanelToolbar }    from './toolbar/PanelToolbar'
import { AppIcon }   from '@/components/ui/AppIcon'
import { IOSSwitch } from '@/components/ui/IOSSwitch'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLang }    from '@/lib/lang'
import { useTheme }   from '@/lib/theme'
import { useDisplay, FONT_ZOOM } from '@/lib/display'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL, resumeUrl } from '@/lib/assets'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact' | 'resume'

interface NavRow {
  id: Section
  Icon: IconType
  iconBg: string
  label: string
}

export function Desktop() {
  const [active, setActive] = useState<Section>('about')
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null)
  const { lang, setLang } = useLang()
  const { theme, toggle }  = useTheme()
  const { fontSize, density } = useDisplay()
  const t = getStrings(lang)

  const navRows: NavRow[] = [
    { id: 'about',      Icon: IoPerson,    iconBg: '#007AFF', label: t.nav.about },
    { id: 'skills',     Icon: IoFlash,     iconBg: '#5856D6', label: t.nav.skills },
    { id: 'projects',   Icon: IoFolder,    iconBg: '#FF9500', label: t.nav.projects },
    { id: 'experience', Icon: IoBriefcase, iconBg: '#FF3B30', label: t.nav.experience },
    { id: 'education',  Icon: IoSchool,    iconBg: '#34C759', label: t.nav.education },
    { id: 'contact',    Icon: IoMail,      iconBg: '#0A84FF', label: t.nav.contact },
  ]

  const pdfUrl = resumeUrl(lang)
  const rowPy = density === 'compact' ? '6px' : density === 'spacious' ? '12px' : '9px'
  const activeLabel = active === 'resume'
    ? t.ui.viewResume
    : selectedProjectId
      ? projects.find(p => p.id === selectedProjectId)?.title ?? navRows.find(r => r.id === active)?.label ?? ''
      : navRows.find(r => r.id === active)?.label ?? ''

  useEffect(() => { setSelectedProjectId(null) }, [active])

  return (
    <div className="flex flex-col overflow-hidden bg-ios" style={{ height: '100dvh' }}>
      <MenuBar />

      <div className="flex flex-1 overflow-hidden" style={{ marginTop: 28 }}>

        {/* Sidebar */}
        <aside
          className="shrink-0 overflow-y-auto border-r flex flex-col border-ios bg-ios"
          style={{ width: 280 }}
        >
          {/* Profile */}
          <div className="px-3 pt-4 pb-2">
            <div className="rounded-2xl px-3 py-3 flex items-center gap-3 bg-ios-card">
              <img
                src={AVATAR_URL}
                alt="Putthiphoom"
                className="w-12 h-12 rounded-full object-cover shrink-0"
                style={{ border: '0.5px solid var(--ios-separator)' }}
              />
              <div className="min-w-0">
                <p className="text-[14px] font-semibold leading-snug truncate text-primary">
                  Putthiphoom B.
                </p>
                <p className="text-[12px] truncate text-system-blue">Full-Stack Developer</p>
                <p className="text-[11px] truncate mt-0.5 text-tertiary">Bangkok, Thailand</p>
              </div>
            </div>
          </div>

          {/* Settings */}
          <SectionLabel variant="sidebar">{t.ui.settings}</SectionLabel>
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden bg-ios-card">
              <div
                className="flex items-center gap-2.5 px-3"
                style={{ paddingTop: rowPy, paddingBottom: rowPy, borderBottom: '0.5px solid var(--ios-separator)' }}
              >
                <AppIcon Icon={IoGlobe} bg="#007AFF" size={26} />
                <span className="flex-1 text-[14px] text-primary">{t.ui.language}</span>
                <div className="relative">
                  <select
                    value={lang}
                    onChange={(e) => setLang(e.target.value as 'en' | 'th')}
                    className="appearance-none text-[12px] font-semibold pr-4 pl-1 py-0.5 rounded cursor-pointer focus:outline-none text-system-blue"
                    style={{ background: 'transparent' }}
                  >
                    <option value="en">English</option>
                    <option value="th">ภาษาไทย</option>
                  </select>
                  <IoChevronForward
                    size={10}
                    className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 text-system-blue"
                  />
                </div>
              </div>
              <div
                className="flex items-center gap-2.5 px-3"
                style={{ paddingTop: rowPy, paddingBottom: rowPy }}
              >
                <AppIcon
                  Icon={theme === 'dark' ? IoMoon : IoSunny}
                  bg={theme === 'dark' ? '#636366' : '#FF9500'}
                  size={26}
                />
                <span className="flex-1 text-[14px] text-primary">{t.ui.darkMode}</span>
                <IOSSwitch on={theme === 'dark'} onToggle={toggle} size="sm" />
              </div>
            </div>
          </div>

          {/* Nav rows */}
          <SectionLabel variant="sidebar">{t.ui.portfolio}</SectionLabel>
          <div className="px-3">
            <div className="rounded-2xl overflow-hidden bg-ios-card">
              {navRows.map((row, i) => (
                <button
                  key={row.id}
                  onClick={() => setActive(row.id)}
                  className="w-full flex items-center gap-2.5 px-3 transition-colors"
                  style={{
                    paddingTop: rowPy, paddingBottom: rowPy,
                    background: active === row.id ? 'var(--system-blue)' : 'transparent',
                    borderBottom: i < navRows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none',
                  }}
                >
                  <AppIcon
                    Icon={row.Icon}
                    bg={active === row.id ? 'rgba(255,255,255,0.25)' : row.iconBg}
                    size={26}
                  />
                  <span
                    className="flex-1 text-left text-[14px] font-medium"
                    style={{ color: active === row.id ? '#fff' : 'var(--text-primary)' }}
                  >
                    {row.label}
                  </span>
                  {row.id === 'projects' && active !== row.id && (
                    <span
                      className="text-[11px] font-bold text-white rounded-full flex items-center justify-center"
                      style={{ background: '#FF3B30', minWidth: 18, height: 18, padding: '0 4px' }}
                    >
                      {projects.length}
                    </span>
                  )}
                  {active !== row.id && (
                    <IoChevronForward size={14} className="text-tertiary" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Resume */}
          <SectionLabel variant="sidebar">{t.ui.documents}</SectionLabel>
          <div className="px-3 pb-6">
            <div className="rounded-2xl overflow-hidden bg-ios-card">
              <button
                onClick={() => setActive('resume')}
                className="w-full flex items-center gap-2.5 px-3 transition-colors"
                style={{
                  paddingTop: rowPy, paddingBottom: rowPy,
                  background: active === 'resume' ? 'var(--system-blue)' : 'transparent',
                }}
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
                  {t.ui.viewResume}
                </span>
                <a
                  href={pdfUrl}
                  download
                  onClick={(e) => e.stopPropagation()}
                  className="p-1 rounded-md transition-opacity hover:opacity-60"
                  style={{ color: active === 'resume' ? '#fff' : 'var(--text-tertiary)' }}
                  title={t.ui.download}
                >
                  <IoDownload size={14} />
                </a>
              </button>
            </div>
          </div>
        </aside>

        {/* Detail panel */}
        <div className="flex flex-1 flex-col overflow-hidden bg-ios">
          <PanelToolbar
            title={activeLabel}
            onBack={selectedProjectId && active === 'projects' ? () => setSelectedProjectId(null) : undefined}
            backLabel={t.nav.projects}
          />
          <main
            key={active}
            className={`flex-1 ${active === 'projects' ? 'overflow-hidden' : 'overflow-y-auto'}`}
            style={{ zoom: FONT_ZOOM[fontSize] }}
          >
            {active === 'about'      && <AboutPanel />}
            {active === 'skills'     && <SkillsPanel />}
            {active === 'projects'   && <ProjectsPanel selectedProjectId={selectedProjectId} onSelectProject={setSelectedProjectId} />}
            {active === 'experience' && <ExperiencePanel />}
            {active === 'education'  && <EducationPanel />}
            {active === 'contact'    && <ContactPanel />}
            {active === 'resume'     && <ResumePanel />}
          </main>
        </div>
      </div>
    </div>
  )
}
