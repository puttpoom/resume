'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { useWindowManager, type AppId } from './WindowManager'

interface DockApp {
  id: AppId
  label: string
  description: string
  icon: React.ReactNode
}

const DOCK_APPS: DockApp[] = [
  {
    id: 'about',
    label: 'About Me',
    description: 'Notes — Bio & profile',
    icon: <NotesIcon />,
  },
  {
    id: 'skills',
    label: 'Skills',
    description: 'Launchpad — Tech stack',
    icon: <LaunchpadIcon />,
  },
  {
    id: 'projects',
    label: 'Projects',
    description: 'Finder — Work samples',
    icon: <FinderIcon />,
  },
  {
    id: 'experience',
    label: 'Experience',
    description: 'Calendar — Career history',
    icon: <ExperienceIcon />,
  },
  {
    id: 'contact',
    label: 'Contact',
    description: 'Contacts — Get in touch',
    icon: <ContactIcon />,
  },
  {
    id: 'resume',
    label: 'Résumé',
    description: 'Preview — Download CV',
    icon: <ResumeIcon />,
  },
]

function useDockScale(mouseX: ReturnType<typeof useMotionValue<number>>, ref: React.RefObject<HTMLDivElement | null>) {
  const distance = useTransform(mouseX, (mx: number) => {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return 999
    const center = rect.left + rect.width / 2
    return Math.abs(mx - center)
  })
  const scale = useTransform(distance, [0, 80, 130], [1.5, 1.25, 1])
  return useSpring(scale, { stiffness: 350, damping: 22 })
}

function DockItem({ app, mouseX }: { app: DockApp; mouseX: ReturnType<typeof useMotionValue<number>> }) {
  const ref = useRef<HTMLDivElement>(null)
  const scale = useDockScale(mouseX, ref)
  const { windows, openApp, bringToFront } = useWindowManager()
  const win = windows[app.id]

  function handleClick() {
    if (win.open && !win.minimized) {
      bringToFront(app.id)
    } else {
      openApp(app.id)
    }
  }

  return (
    <div ref={ref} className="relative flex flex-col items-center group">
      {/* Popover */}
      <div
        className="absolute bottom-full mb-3 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-150"
        role="tooltip"
      >
        <div
          className="rounded-lg px-3 py-1.5 text-center text-[12px] font-semibold whitespace-nowrap shadow-lg"
          style={{ background: 'var(--chrome-bg)', backdropFilter: 'blur(20px)', color: 'var(--text-primary)' }}
        >
          {app.label}
          <p className="text-[11px] font-normal opacity-60">{app.description}</p>
        </div>
        {/* Pointer arrow */}
        <div
          className="mx-auto w-2 h-2 rotate-45 -mt-1"
          style={{ background: 'var(--chrome-bg)' }}
        />
      </div>

      {/* Icon */}
      <motion.button
        style={{ scale }}
        onClick={handleClick}
        aria-label={app.label}
        whileTap={{ scale: 0.85 }}
        className="w-14 h-14 rounded-[22%] overflow-hidden shadow-md focus-visible:ring-2 focus-visible:ring-[var(--system-blue)]"
      >
        {app.icon}
      </motion.button>

      {/* Open dot */}
      {win.open && !win.minimized && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute -bottom-1.5 w-1 h-1 rounded-full bg-[var(--text-primary)] opacity-70"
        />
      )}
    </div>
  )
}

export function Dock() {
  const mouseX = useMotionValue<number>(Infinity)

  return (
    <div
      className="fixed bottom-3 inset-x-0 z-[9998] flex justify-center pointer-events-none"
      aria-label="Dock"
    >
      <div
        className="flex items-end gap-2 px-3 py-2 rounded-2xl pointer-events-auto"
        style={{
          background: 'var(--dock-bg)',
          border: '0.5px solid var(--dock-border)',
          backdropFilter: 'blur(40px) saturate(180%)',
          WebkitBackdropFilter: 'blur(40px) saturate(180%)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        }}
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        role="toolbar"
      >
        {DOCK_APPS.map((app) => (
          <DockItem key={app.id} app={app} mouseX={mouseX} />
        ))}
      </div>
    </div>
  )
}

/* ─── App Icons ──────────────────────────────────────────────────── */

function NotesIcon() {
  return (
    <div className="w-full h-full flex flex-col" style={{ background: '#FFF9C4' }}>
      <div className="h-4 w-full" style={{ background: '#FFC107' }} />
      <div className="flex-1 p-1.5 space-y-1">
        {[100, 80, 90, 60].map((w, i) => (
          <div key={i} className="h-1 rounded-full bg-amber-800/30" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  )
}

function LaunchpadIcon() {
  const colors = ['#FF3B30','#FF9500','#FFCC00','#34C759','#007AFF','#5856D6','#FF2D55','#AF52DE','#FF3B30']
  return (
    <div className="w-full h-full p-2 grid grid-cols-3 grid-rows-3 gap-1" style={{ background: '#1C1C1E' }}>
      {colors.map((c, i) => (
        <div key={i} className="rounded-[25%]" style={{ background: c }} />
      ))}
    </div>
  )
}

function FinderIcon() {
  return (
    <div className="w-full h-full relative" style={{ background: '#1B6FC8' }}>
      <svg viewBox="0 0 56 56" className="w-full h-full" fill="none">
        <rect width="56" height="56" fill="#1B6FC8"/>
        <circle cx="22" cy="26" r="10" stroke="white" strokeWidth="3"/>
        <circle cx="34" cy="26" r="10" stroke="white" strokeWidth="3"/>
        <path d="M14 40 Q28 34 42 40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="22" cy="23" r="2" fill="white"/>
        <circle cx="34" cy="23" r="2" fill="white"/>
      </svg>
    </div>
  )
}

function ExperienceIcon() {
  return (
    <div className="w-full h-full" style={{ background: '#FF3B30' }}>
      <div className="h-full flex flex-col p-1.5 gap-1">
        <div className="h-3 rounded bg-white/20 text-white text-[7px] flex items-center justify-center font-bold">EXP</div>
        {[1,2].map(i => (
          <div key={i} className="flex-1 rounded bg-white/10 p-1 space-y-0.5">
            <div className="h-0.5 rounded bg-white/50 w-3/4"/>
            <div className="h-0.5 rounded bg-white/30 w-1/2"/>
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactIcon() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center" style={{ background: '#E8EAF6' }}>
      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#7986CB] to-[#3F51B5] flex items-center justify-center text-white text-sm font-bold">P</div>
      <div className="mt-1 space-y-0.5 w-10">
        <div className="h-0.5 rounded bg-gray-400/50 w-full"/>
        <div className="h-0.5 rounded bg-gray-400/50 w-3/4 mx-auto"/>
      </div>
    </div>
  )
}

function ResumeIcon() {
  return (
    <div className="w-full h-full" style={{ background: '#E8F5E9' }}>
      <div className="h-full flex flex-col p-1.5 gap-0.5">
        <div className="h-4 rounded bg-red-400/80 flex items-center justify-center">
          <div className="w-0.5 h-2 bg-white"/>
          <div className="w-2 h-0.5 bg-white absolute"/>
        </div>
        {[100,80,90,70,60].map((w,i) => (
          <div key={i} className="h-0.5 rounded bg-gray-400/40" style={{width:`${w}%`}}/>
        ))}
      </div>
    </div>
  )
}
