'use client'

import { usePathname, useRouter } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { IoDocumentText, IoChevronForward, IoChevronBack, IoSunny, IoMoon, IoGlobe, IoDownload } from 'react-icons/io5'
import { projects } from '@/data/projects'
import { IOSStatusBar } from './IOSStatusBar'
import { AboutSection }      from '@/components/sections/AboutSection'
import { SkillsSection }     from '@/components/sections/SkillsSection'
import { ProjectsDetail } from './detail/ProjectsDetail'
import { ProjectDetailView } from '@/components/shared/ProjectDetailView'
import { ExperienceSection } from '@/components/sections/ExperienceSection'
import { ContactSection }    from '@/components/sections/ContactSection'
import { EducationSection }  from '@/components/sections/EducationSection'
import { AppIcon }      from '@/components/ui/AppIcon'
import { IOSSwitch }    from '@/components/ui/IOSSwitch'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { useLang }  from '@/lib/lang'
import { useTheme } from '@/lib/theme'
import { useDisplay, FONT_ZOOM } from '@/lib/display'
import { useLocalizedProjects } from '@/lib/useLocalizedProjects'
import { getStrings } from '@/data/i18n'
import { AVATAR_URL, resumeUrl } from '@/lib/assets'
import { profile } from '@/lib/content'
import { NAV_ITEMS, type NavId } from '@/lib/navigation'

type Section = NavId | null

function Chevron() {
  return <IoChevronForward size={17} className="text-tertiary shrink-0" />
}

const NAV_IDS: string[] = NAV_ITEMS.map((i) => i.id)

export function IOSSettings() {
  const pathname = usePathname()
  const router = useRouter()
  const segments = pathname.split('/').filter(Boolean)
  const active: Section = NAV_IDS.includes(segments[0]) ? (segments[0] as NavId) : null
  const selectedProjectId = active === 'projects' ? segments[1] ?? null : null

  const { lang, setLang } = useLang()
  const { theme, toggle } = useTheme()
  const { fontSize } = useDisplay()
  const zoom = FONT_ZOOM[fontSize]
  const t = getStrings(lang)

  const rows = NAV_ITEMS.map((item) => ({ ...item, label: t.nav[item.id] }))

  const pdfUrl = resumeUrl(lang)
  const activeRow = rows.find((r) => r.id === active)

  const localizedProjects = useLocalizedProjects(lang)
  const localizedSelectedProject = selectedProjectId
    ? localizedProjects.find((p) => p.id === selectedProjectId) ?? null
    : null

  return (
    <div className="relative w-full h-dvh bg-ios">
      {/* Status bar outside overflow-hidden — avoids iOS Safari fixed-in-overflow bug */}
      <IOSStatusBar />

      {/* Clip container for slide animations */}
      <div className="absolute inset-0 overflow-hidden">

      {/* Root scroll list */}
      <div className="absolute inset-0 overflow-y-auto" style={{ paddingTop: 44 }}>
        <div className="pb-12" style={zoom !== 1 ? { zoom } : undefined}>

          <div className="px-4 pt-5 pb-2">
            <h1 className="text-[34px] font-bold tracking-tight text-primary">
              {t.ui.portfolio}
            </h1>
          </div>

          {/* Profile card */}
          <div className="mx-4 rounded-2xl px-4 py-3.5 flex items-center gap-3.5 mb-1 bg-ios-card">
            <img
              src={AVATAR_URL}
              alt={profile.name}
              className="w-15 h-15 rounded-full object-cover shrink-0"
              style={{ border: '0.5px solid var(--ios-separator)' }}
            />
            <div className="min-w-0">
              <p className="text-[17px] font-semibold leading-snug text-primary">{profile.firstName}</p>
              <p className="text-[17px] font-semibold leading-snug text-primary">{profile.lastName}</p>
              <p className="text-[13px] mt-0.5 text-system-blue">
                {t.about.role} · {profile.location.split(',')[0]}
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
                onClick={() => router.push(`/${row.id}`)}
                className="w-full flex items-center gap-3 px-4 py-2.75 active:opacity-70 transition-opacity"
                style={{ borderBottom: i < rows.length - 1 ? '0.5px solid var(--ios-separator)' : 'none', touchAction: 'manipulation' }}
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
                onClick={() => router.push('/')}
                className="flex items-center gap-0.5 px-2 py-1 -ml-1 active:opacity-60 transition-opacity text-system-blue"
                style={{ touchAction: 'manipulation' }}
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
              {active === 'about'      && <AboutSection />}
              {active === 'skills'     && <SkillsSection />}
              {active === 'projects'   && (
                <ProjectsDetail
                  onSelectProject={(id) => router.push(`/projects/${id}`)}
                  isSubDetailOpen={!!selectedProjectId}
                />
              )}
              {active === 'experience' && <ExperienceSection />}
              {active === 'education'  && <EducationSection />}
              {active === 'contact'    && <ContactSection />}
            </div>

            {/* 3rd level: project detail — covers entire 2nd level panel incl nav bar */}
            <AnimatePresence>
              {selectedProjectId && active === 'projects' && localizedSelectedProject && (
                <motion.div
                  key={selectedProjectId}
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', stiffness: 380, damping: 38 }}
                  className="absolute inset-0 z-50 flex flex-col bg-ios"
                >
                  {/* Nav bar — 3-col grid to avoid absolute-positioning quirks in nested motion.div */}
                  <div
                    className="shrink-0 bg-ios-card"
                    style={{ height: 44 + 44, paddingTop: 44, borderBottom: '0.5px solid var(--ios-separator)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)' }}
                  >
                    <div className="h-[44px] grid items-center px-2" style={{ gridTemplateColumns: 'auto 1fr auto' }}>
                      <button
                        onClick={() => router.push('/projects')}
                        className="flex items-center gap-0.5 px-2 py-1 -ml-1 active:opacity-60 transition-opacity text-system-blue"
                        style={{ touchAction: 'manipulation' }}
                      >
                        <IoChevronBack size={20} />
                        <span className="text-[17px]">{t.nav.projects}</span>
                      </button>
                      <p className="text-center text-[17px] font-semibold text-primary truncate px-2">
                        {localizedSelectedProject.title}
                      </p>
                      <div />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 overflow-y-auto">
                    <div className="px-4 pt-5 pb-12">
                      <ProjectDetailView project={localizedSelectedProject} lang={lang} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      </div>{/* end clip container */}
    </div>
  )
}
