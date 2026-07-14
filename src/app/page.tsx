'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Desktop } from '@/components/desktop/Desktop'
import { IOSSettings } from '@/components/mobile/IOSSettings'

function Spinner() {
  return (
    <div
      className="w-10 h-10 rounded-full animate-spin"
      style={{
        border: '3px solid rgba(0,122,255,0.18)',
        borderTopColor: '#007AFF',
      }}
    />
  )
}

function SplashScreen() {
  return (
    <motion.div
      key="splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="fixed inset-0 z-[99999] flex flex-col items-center justify-center gap-5"
      style={{ background: '#f2f2f7' }}
    >
      <Spinner />
    </motion.div>
  )
}

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

  return (
    <>
      <AnimatePresence>{!mounted && <SplashScreen />}</AnimatePresence>
      {mounted && (isMobile ? <IOSSettings /> : <Desktop />)}
    </>
  )
}
