'use client'

import { useEffect, useState } from 'react'

/* ── iOS 17+ status bar with Dynamic Island ───────────────────── */
export function IOSStatusBar({ onTimeClick }: { onTimeClick?: () => void }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    function update() {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: false,
        })
      )
    }
    update()
    const id = setInterval(update, 10_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div
      className="fixed top-0 inset-x-0 z-[9999]"
      style={{ height: 44, background: 'var(--ios-bg)' }}
    >
      {/* Left — time (tappable → Control Center) */}
      <button
        className="absolute left-[21px] top-1/2 -translate-y-1/2 focus:outline-none active:opacity-60 transition-opacity"
        onClick={onTimeClick}
        aria-label="Open Control Center"
      >
        <span
          className="text-[15px] font-semibold tabular-nums"
          style={{ color: 'var(--text-primary)' }}
        >
          {time}
        </span>
      </button>

      {/* Right — signal + wifi + battery */}
      <div className="absolute right-[17px] top-1/2 -translate-y-1/2 flex items-center gap-[6px]">
        {/* Cellular signal dots */}
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          {[2,5,8,12].map((h, i) => (
            <rect
              key={i}
              x={i * 5}
              y={12 - h}
              width="3.5"
              height={h}
              rx="1"
              fill="currentColor"
              opacity={i < 3 ? 1 : 0.35}
              style={{ color: 'var(--text-primary)' }}
            />
          ))}
        </svg>

        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <circle cx="8" cy="11" r="1.5" fill="currentColor" style={{ color: 'var(--text-primary)' }} />
          <path d="M5.1 8.2a4.1 4.1 0 0 1 5.8 0"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            style={{ color: 'var(--text-primary)' }} />
          <path d="M2.2 5.4a8 8 0 0 1 11.6 0"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            style={{ color: 'var(--text-primary)' }} />
          <path d="M0 2.7C2.6.2 5.1 0 8 0s5.4.2 8 2.7"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            strokeOpacity="0.38" style={{ color: 'var(--text-primary)' }} />
        </svg>

        {/* Battery */}
        <svg width="27" height="13" viewBox="0 0 27 13" fill="none">
          <rect x="0.5" y="0.5" width="22" height="12" rx="3.5"
            stroke="currentColor" strokeOpacity=".35"
            style={{ color: 'var(--text-primary)' }} />
          <rect x="2" y="2" width="17" height="9" rx="2"
            fill="currentColor" style={{ color: 'var(--text-primary)' }} />
          <path d="M24.5 4.5v4a2.25 2.25 0 0 0 0-4z"
            fill="currentColor" fillOpacity=".45"
            style={{ color: 'var(--text-primary)' }} />
        </svg>
      </div>
    </div>
  )
}
