'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { Desktop } from '@/components/desktop/Desktop'
import { IOSSettings } from '@/components/mobile/IOSSettings'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { NAV_ITEMS } from '@/lib/navigation'
import { projects } from '@/data/projects'

const SITE_TITLE = 'Putthiphoom B. — Full-Stack Developer'

function usePageTitle() {
  const pathname = usePathname()
  const { lang } = useLang()

  useEffect(() => {
    const [first, second] = pathname.split('/').filter(Boolean)
    const t = getStrings(lang)
    if (!first) {
      document.title = SITE_TITLE
      return
    }
    if (first === 'projects' && second) {
      const project = projects.find((p) => p.id === second)
      document.title = project ? `${project.title} · ${t.nav.projects} · Putthiphoom B.` : SITE_TITLE
      return
    }
    const navItem = NAV_ITEMS.find((i) => i.id === first)
    const label = navItem ? t.nav[navItem.id] : first === 'resume' ? t.ui.viewResume : null
    document.title = label ? `${label} · Putthiphoom B.` : SITE_TITLE
  }, [pathname, lang])
}

export function PortfolioApp() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  usePageTitle()

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    const update = (matches: boolean) => {
      setIsMobile(matches)
      document.body.classList.toggle('mobile-view', matches)
    }
    update(mq.matches)
    const handler = (e: MediaQueryListEvent) => update(e.matches)
    mq.addEventListener('change', handler)
    return () => {
      mq.removeEventListener('change', handler)
      document.body.classList.remove('mobile-view')
    }
  }, [])

  if (isMobile === null) return <div className="h-dvh bg-ios" />
  return isMobile ? <IOSSettings /> : <Desktop />
}
