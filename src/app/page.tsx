'use client'

import { useState, useEffect } from 'react'
import { Desktop } from '@/components/desktop/Desktop'
import { IOSSettings } from '@/components/mobile/IOSSettings'

export default function Home() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)

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
