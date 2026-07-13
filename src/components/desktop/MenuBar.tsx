'use client'

import { useEffect, useState } from 'react'
import { useTheme } from '@/lib/theme'
import { useLang } from '@/lib/lang'

const MENUS = ['File', 'Edit', 'View', 'Window', 'Help']

function LiveClock() {
  const [time, setTime] = useState('')

  useEffect(() => {
    function tick() {
      setTime(new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true }))
    }
    tick()
    const id = setInterval(tick, 10000)
    return () => clearInterval(id)
  }, [])

  return <span className="text-[13px] tabular-nums">{time}</span>
}

function WifiIcon() {
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" aria-label="Wi-Fi">
      <path d="M8 9.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"/>
      <path fillRule="evenodd" d="M8 5.5C10.2 5.5 12.2 6.4 13.6 7.9l1.1-1.2A8.5 8.5 0 0 0 8 4a8.5 8.5 0 0 0-6.7 2.7l1.1 1.2A6.5 6.5 0 0 1 8 5.5z" opacity=".5"/>
      <path fillRule="evenodd" d="M8 1.5C11.5 1.5 14.6 3 16.7 5.5l-1.1 1.2A10.5 10.5 0 0 0 8 0 10.5 10.5 0 0 0-.6 6.7l1.1-1.2C2.4 3 5.5 1.5 8 1.5z" opacity=".3" clipPath="none"/>
    </svg>
  )
}

function BatteryIcon() {
  return (
    <svg width="25" height="12" viewBox="0 0 25 12" fill="none" aria-label="Battery">
      <rect x="0.5" y="0.5" width="21" height="11" rx="3.5" stroke="currentColor" strokeOpacity=".35"/>
      <rect x="2" y="2" width="16" height="8" rx="1.5" fill="currentColor" opacity=".8"/>
      <path d="M23 4v4a2 2 0 0 0 0-4z" fill="currentColor" opacity=".4"/>
    </svg>
  )
}

export function MenuBar({ appName = 'Portfolio' }: { appName?: string }) {
  const { theme, toggle } = useTheme()
  const { lang, setLang } = useLang()

  return (
    <header
      className="menubar-chrome fixed top-0 inset-x-0 z-[9999] h-7 flex items-center px-3 gap-4 text-[var(--text-primary)]"
      role="menubar"
    >
      {/* Apple logo */}
      <svg width="13" height="16" viewBox="0 0 814 1000" fill="currentColor" aria-label="Apple" className="opacity-90">
        <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46 790.7 0 663.4 0 541.8 0 316.3 155.5 196.8 280.8 196.8c70.8 0 129.3 46.8 173.3 46.8 42.8 0 110.1-50.2 196.8-50.2a213.3 213.3 0 0 1 137.2 52.6zm-160.5-191.4c32.9-39.5 56.5-94.5 56.5-149.5 0-7.7-.6-15.5-2-22.5-54.3 2-119.3 36.2-160.5 81.6-31.2 35.5-60 90.6-60 146.4 0 8.6 1.5 17.2 2 19.8 3.4.6 8.6 1.5 13.8 1.5 49.5 0 112.7-33.3 150.2-77.3z"/>
      </svg>

      {/* App name */}
      <span className="text-[13px] font-semibold">{appName}</span>

      {/* Menu items */}
      <nav className="flex items-center gap-4" aria-label="Application menu">
        {MENUS.map((m) => (
          <button key={m} className="text-[13px] opacity-80 hover:opacity-100 transition-opacity focus-visible:ring-1 rounded px-1">
            {m}
          </button>
        ))}
      </nav>

      {/* Right-side status icons */}
      <div className="ml-auto flex items-center gap-3">
        {/* Lang toggle */}
        <button
          onClick={() => setLang(lang === 'en' ? 'th' : 'en')}
          className="text-[11px] font-semibold opacity-75 hover:opacity-100 transition-opacity tabular-nums"
          aria-label="Toggle language"
        >
          {lang === 'en' ? 'TH' : 'EN'}
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggle}
          aria-label="Toggle dark mode"
          className="opacity-80 hover:opacity-100 transition-opacity"
        >
          {theme === 'dark' ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12H1M23 12h-2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
            </svg>
          ) : (
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            </svg>
          )}
        </button>

        <WifiIcon />
        <BatteryIcon />
        <LiveClock />
      </div>
    </header>
  )
}
