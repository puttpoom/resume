'use client'

import { useEffect, useState } from 'react'

/* ── iOS 17+ status bar with Dynamic Island ───────────────────── */
export function IOSStatusBar() {
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
      style={{ height: 59, background: 'var(--ios-bg)' }}
    >
      {/* Dynamic Island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] rounded-full bg-black" />

      {/* Left — time */}
      <div className="absolute left-[21px] top-[14px]">
        <span
          className="text-[15px] font-semibold tabular-nums"
          style={{ color: 'var(--text-primary)' }}
        >
          {time}
        </span>
      </div>

      {/* Right — signal + wifi + battery */}
      <div className="absolute right-[17px] top-[17px] flex items-center gap-[6px]">
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
        <svg width="17" height="13" viewBox="0 0 17 13" fill="none">
          <circle cx="8.5" cy="11.5" r="1.5" fill="currentColor" style={{ color: 'var(--text-primary)' }} />
          <path
            d="M5.5 8.5C6.4 7.6 7.4 7 8.5 7s2.1.6 3 1.5"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            style={{ color: 'var(--text-primary)' }}
          />
          <path
            d="M2.5 5.5C4.2 3.8 6.2 3 8.5 3s4.3.8 6 2.5"
            stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
            style={{ color: 'var(--text-primary)' }}
          />
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
