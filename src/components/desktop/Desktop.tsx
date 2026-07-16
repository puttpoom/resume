'use client'

import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { IoDocumentText, IoChevronForward, IoSunny, IoMoon, IoGlobe, IoDownload } from 'react-icons/io5'
import { projects } from '@/data/projects'
import { MenuBar } from './MenuBar'
import { AboutSection }      from '@/components/sections/AboutSection'
import { SkillsSection }     from '@/components/sections/SkillsSection'
import { ProjectsPanel }     from './panels/ProjectsPanel'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { EducationSection }  from '@/components/sections/EducationSection'
import { ContactSection }    from '@/components/sections/ContactSection'
import { ResumePanel }       from './panels/ResumePanel'
import { PanelToolbar }      from './toolbar/PanelToolbar'
import { AppIcon }   from '@/components/ui/AppIcon'
import { IOSSwitch } from '@/components/ui/IOSSwitch'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLang }    from '@/lib/lang'
import { useTheme }   from '@/lib/theme'
import { useDisplay, FONT_ZOOM } from '@/lib/display'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL, resumeUrl } from '@/lib/assets'
import { profile } from '@/lib/content'
import { NAV_ITEMS, type NavId } from '@/lib/navigation'

type Section = NavId | 'resume'
const SECTION_IDS: Section[] = [...NAV_ITEMS.map((i) => i.id), 'resume']

export function Desktop() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/').filter(Boolean)
  const active: Section = (SECTION_IDS as string[]).includes(segments[0]) ? (segments[0] as Section) : 'about'
  const selectedProjectId = active === 'projects' ? segments[1] ?? null : null

  const { lang, setLang } = useLang()
  const { theme, toggle }  = useTheme()
  const { fontSize, density } = useDisplay()
  const t = getStrings(lang)

  const navRows = NAV_ITEMS.map((item) => ({ ...item, label: t.nav[item.id] }))

  const pdfUrl = resumeUrl(lang)
  const rowPy = density === 'compact' ? '6px' : density === 'spacious' ? '12px' : '9px'
  const activeLabel = active === 'resume'
    ? t.ui.viewResume
    : selectedProjectId
      ? projects.find(p => p.id === selectedProjectId)?.title ?? navRows.find(r => r.id === active)?.label ?? ''
      : navRows.find(r => r.id === active)?.label ?? ''

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
                alt={profile.name}
                className="w-12 h-12 rounded-full object-cover shrink-0"
                style={{ border: '0.5px solid var(--ios-separator)' }}
              />
              <div className="min-w-0">
                <p className="text-[14px] font-semibold leading-snug truncate text-primary">
                  {profile.shortName}
                </p>
                <p className="text-[12px] truncate text-system-blue">{profile.role}</p>
                <p className="text-[11px] truncate mt-0.5 text-tertiary">{profile.location}</p>
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
                  onClick={() => router.push(`/${row.id}`)}
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
                onClick={() => router.push('/resume')}
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
            onBack={selectedProjectId && active === 'projects' ? () => router.push('/projects') : undefined}
            backLabel={t.nav.projects}
          />
          <main
            className={`flex-1 ${active === 'projects' ? 'overflow-hidden' : 'overflow-y-auto'}`}
            style={{ zoom: FONT_ZOOM[fontSize] }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="h-full"
              >
                {active === 'about'      && <AboutSection />}
                {active === 'skills'     && <SkillsSection />}
                {active === 'projects'   && <ProjectsPanel selectedProjectId={selectedProjectId} onSelectProject={(id) => router.push(id ? `/projects/${id}` : '/projects')} />}
                {active === 'experience' && <ExperienceSection />}
                {active === 'education'  && <EducationSection />}
                {active === 'contact'    && <ContactSection />}
                {active === 'resume'     && <ResumePanel />}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>
    </div>
  )
}
