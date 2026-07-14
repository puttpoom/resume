'use client'

import { useEffect, useRef, useState } from 'react'
import { useTheme } from '@/lib/theme'
import { useLang } from '@/lib/lang'
import { useDisplay, type FontSize, type Density } from '@/lib/display'

const MENUS = ['File', 'Edit', 'View', 'Window', 'Help']

const FS_STEPS: FontSize[] = ['sm', 'md', 'lg', 'xl']
const FS_PX = [11, 13, 15, 18]

const DENSITY_OPTS: { value: Density; labelEn: string; labelTh: string }[] = [
  { value: 'compact',  labelEn: 'Compact',  labelTh: 'กะทัดรัด' },
  { value: 'normal',   labelEn: 'Normal',   labelTh: 'ปกติ' },
  { value: 'spacious', labelEn: 'Spacious', labelTh: 'กว้าง' },
]


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
      {/* Mangosteen logo — B&W bitten */}
      <svg width="16" height="16" viewBox="0 0 16 16" aria-label="Mangosteen">
        <defs>
          <mask id="mgbite">
            <rect width="16" height="16" fill="white"/>
            <circle cx="13.5" cy="8" r="3" fill="black"/>
          </mask>
          <clipPath id="mgfruit">
            <circle cx="8" cy="10" r="5"/>
          </clipPath>
        </defs>
        {/* Flesh exposed at bite */}
        <g clipPath="url(#mgfruit)">
          <circle cx="13.5" cy="8" r="3" fill="white"/>
          <path d="M10.8 7 L12.8 9.5" stroke="#aaa" strokeWidth="0.4" fill="none"/>
        </g>
        {/* Fruit body with bite removed */}
        <circle cx="8" cy="10" r="5" fill="currentColor" mask="url(#mgbite)"/>
        {/* Crown sepals */}
        <ellipse cx="8" cy="4" rx="0.7" ry="1.4" fill="currentColor"/>
        <ellipse cx="6.1" cy="4.7" rx="0.65" ry="1.2" transform="rotate(-38 6.1 4.7)" fill="currentColor"/>
        <ellipse cx="9.9" cy="4.7" rx="0.65" ry="1.2" transform="rotate(38 9.9 4.7)" fill="currentColor"/>
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

        {/* <WifiIcon /> */}
        <BatteryIcon />
        <LiveClock />
      </div>
    </header>
  )
}
