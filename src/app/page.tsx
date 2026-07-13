'use client'

import { useEffect, useState } from 'react'
import { Desktop } from '@/components/desktop/Desktop'
import { IOSSettings } from '@/components/mobile/IOSSettings'

export default function Home() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 820px)')
    setIsMobile(mq.matches)
    setMounted(true)
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  if (!mounted) return null
  return isMobile ? <IOSSettings /> : <Desktop />
}
