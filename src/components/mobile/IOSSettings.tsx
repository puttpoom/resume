'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  IoPerson, IoFlash, IoFolder, IoBriefcase, IoSchool, IoMail, IoDocumentText,
  IoChevronForward, IoChevronBack, IoSunny, IoMoon, IoGlobe, IoDownload,
} from 'react-icons/io5'
import type { IconType } from 'react-icons'
import { projects } from '@/data/projects'
import { IOSStatusBar } from './IOSStatusBar'
import { AboutDetail } from './detail/AboutDetail'
import { SkillsDetail } from './detail/SkillsDetail'
import { ProjectsDetail } from './detail/ProjectsDetail'
import { ExperienceDetail } from './detail/ExperienceDetail'
import { ContactDetail } from './detail/ContactDetail'
import { EducationDetail } from './detail/EducationDetail'
import { AppIcon }      from '@/components/ui/AppIcon'
import { IOSSwitch }    from '@/components/ui/IOSSwitch'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLang }  from '@/lib/lang'
import { useTheme } from '@/lib/theme'
import { useDisplay, FONT_ZOOM } from '@/lib/display'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL, resumeUrl } from '@/lib/assets'

type Section = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact' | null

interface SettingsRow {
  id: Section
  Icon: IconType
  iconBg: string
  label: string
}

function Chevron() {
  return <IoChevronForward size={17} className="text-tertiary shrink-0" />
}

export function IOSSettings() {
  const [active, setActive] = useState<Section>(null)
  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const { fontSize } = useDisplay()
  const zoom = FONT_ZOOM[fontSize]
  const t = getStrings(lang)

  const rows: SettingsRow[] = [
    { id: 'about',      Icon: IoPerson,    iconBg: '#007AFF', label: t.nav.about },
    { id: 'skills',     Icon: IoFlash,     iconBg: '#5856D6', label: t.nav.skills },
    { id: 'projects',   Icon: IoFolder,    iconBg: '#FF9500', label: t.nav.projects },
    { id: 'experience', Icon: IoBriefcase, iconBg: '#FF3B30', label: t.nav.experience },
    { id: 'education',  Icon: IoSchool,    iconBg: '#34C759', label: t.nav.education },
    { id: 'contact',    Icon: IoMail,      iconBg: '#0A84FF', label: t.nav.contact },
  ]

  const pdfUrl = resumeUrl(lang)
  const activeRow = rows.find((r) => r.id === active)

  return (
    <div className="relative w-full h-dvh overflow-hidden bg-ios">
      <IOSStatusBar />

      {/* Root scroll list */}
      <div className="absolute inset-0 overflow-y-auto" style={{ paddingTop: 44 }}>
        <div className="pb-12" style={{ zoom }}>

          <div className="px-4 pt-5 pb-2">
            <h1 className="text-[34px] font-bold tracking-tight text-primary">
              {t.ui.portfolio}
            </h1>
          </div>

          {/* Profile card */}
          <div className="mx-4 rounded-2xl px-4 py-3.5 flex items-center gap-3.5 mb-1 bg-ios-card">
            <img
              src={AVATAR_URL}
              alt="Putthiphoom"
              className="w-15 h-15 rounded-full object-cover shrink-0"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-snug text-primary">Putthiphoom</p>
              <p className="text-[17px] font-semibold leading-snug text-primary">Boonmahatanasombut</p>
              <p className="text-[13px] mt-0.5 text-system-blue">
                {t.about.role} · Bangkok
              </p>
            </div>
          </div>

          {/* Settings */}
          <SectionLabel>{t.ui.settings}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden bg-ios-card">
            <div
              className="flex items-center gap-3 px-4 py-2.75"
              style={{ borderBottom: '0.5px solid var(--ios-separator)' }}
            >
              <AppIcon Icon={IoGlobe} bg="#007AFF" />
              <span className="flex-1 text-[16px] text-primary">{t.ui.language}</span>
              <div className="relative">
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value as 'en' | 'th')}
                  className="appearance-none text-[15px] font-medium pr-5 pl-1 py-0.5 rounded-md cursor-pointer focus:outline-none text-system-blue"
                  style={{ background: 'transparent' }}
                >
                  <option value="en">English</option>
                  <option value="th">ภาษาไทย</option>
                </select>
                <IoChevronForward
                  size={12}
                  className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none rotate-90 text-system-blue"
                />
              </div>
            </div>
            <div className="flex items-center gap-3 px-4 py-2.75">
              <AppIcon Icon={theme === 'dark' ? IoMoon : IoSunny} bg={theme === 'dark' ? '#636366' : '#FF9500'} />
              <span className="flex-1 text-[16px] text-primary">{t.ui.darkMode}</span>
              <IOSSwitch on={theme === 'dark'} onToggle={toggle} />
            </div>
          </div>

          {/* Nav rows */}
          <SectionLabel>{t.ui.aboutMe}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden bg-ios-card">
            {rows.map((row, i) => (
              <button
                key={row.id}
                onClick={() => setActive(row.id)}
                className="w-full flex items-center gap-3 px-4 py-2.75 active:opacity-70 transition-opacity"
                style={{ borderBottom: i < rows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
              >
                <AppIcon Icon={row.Icon} bg={row.iconBg} />
                <span className="flex-1 text-left text-[16px] text-primary">{row.label}</span>
                {row.id === 'projects' && (
                  <span
                    className="text-[12px] font-bold text-white rounded-full flex items-center justify-center mr-1"
                    style={{ background: '#FF3B30', minWidth: 20, height: 20, padding: '0 5px' }}
                  >
                    {projects.length}
                  </span>
                )}
                <Chevron />
              </button>
            ))}
          </div>

          {/* Resume */}
          <SectionLabel>{t.ui.documents}</SectionLabel>
          <div className="mx-4 rounded-2xl overflow-hidden bg-ios-card">
            <a
              href={pdfUrl}
              download
              className="flex items-center gap-3 px-4 py-2.75 active:opacity-70 transition-opacity"
            >
              <AppIcon Icon={IoDocumentText} bg="#FF2D55" />
              <span className="flex-1 text-[16px] text-primary">{t.ui.downloadResume}</span>
              <IoDownload size={17} className="text-tertiary" />
            </a>
          </div>

          <p className="text-center text-[12px] mt-8 px-4 text-tertiary">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </div>
      </div>

      {/* Detail push panels */}
      <AnimatePresence>
        {active !== null && (
          <motion.div
            key={active}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 380, damping: 38 }}
            className="absolute inset-0 z-40 flex flex-col bg-ios"
          >
            {/* Navigation bar */}
            <div
              className="shrink-0 flex items-end px-2 pb-2 bg-ios-card"
              style={{
                height: 44 + 44,
                paddingTop: 44,
                borderBottom: '0.5px solid var(--ios-separator)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
              }}
            >
              <button
                onClick={() => setActive(null)}
                className="flex items-center gap-0.5 px-2 py-1 -ml-1 active:opacity-60 transition-opacity text-system-blue"
              >
                <IoChevronBack size={20} />
                <span className="text-[17px]">{t.ui.back}</span>
              </button>
              <p className="absolute inset-x-0 bottom-2 text-center text-[17px] font-semibold pointer-events-none text-primary">
                {activeRow?.label}
              </p>
            </div>

            {/* Panel content */}
            <div className="flex-1 relative overflow-hidden">
              {active === 'about'      && <AboutDetail />}
              {active === 'skills'     && <SkillsDetail />}
              {active === 'projects'   && <ProjectsDetail />}
              {active === 'experience' && <ExperienceDetail />}
              {active === 'education'  && <EducationDetail />}
              {active === 'contact'    && <ContactDetail />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
