'use client'

import { useRef, type ReactNode } from 'react'
import { motion, useDragControls, AnimatePresence } from 'framer-motion'
import { useWindowManager, type AppId } from './WindowManager'

interface WindowProps {
  id: AppId
  title: string
  width?: number
  height?: number
  children: ReactNode
  sidebar?: ReactNode
}

export function Window({ id, title, width = 720, height = 480, children, sidebar }: WindowProps) {
  const { windows, closeApp, minimizeApp, maximizeApp, bringToFront, updatePosition } = useWindowManager()
  const win = windows[id]
  const dragControls = useDragControls()
  const constraintRef = useRef<HTMLDivElement>(null)

  if (!win.open || win.minimized) return null

  const isMax = win.maximized

  return (
    <AnimatePresence>
      <motion.div
        key={id}
        drag={!isMax}
        dragControls={dragControls}
        dragListener={false}
        dragMomentum={false}
        dragElastic={0}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.88 }}
        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        onDragEnd={(_, info) => {
          updatePosition(id, win.x + info.offset.x, win.y + info.offset.y)
        }}
        onMouseDown={() => bringToFront(id)}
        style={{
          position: 'fixed',
          zIndex: win.zIndex,
          ...(isMax
            ? { top: 28, left: 0, right: 0, bottom: 0, width: '100%', height: 'calc(100vh - 28px)', borderRadius: 0 }
            : { top: win.y, left: win.x, width, height, borderRadius: 'var(--radius-window)' }),
        }}
        className="window-chrome flex flex-col overflow-hidden select-none"
      >
        {/* Title Bar */}
        <div
          onPointerDown={(e) => { if (!isMax) dragControls.start(e) }}
          className="flex items-center gap-2 px-3 h-11 shrink-0 border-b border-black/[0.06] dark:border-white/[0.06] cursor-default"
          style={{ background: 'var(--window-sidebar)' }}
        >
          {/* Traffic lights */}
          <TrafficLight color="red"    onClick={() => closeApp(id)} title="Close" />
          <TrafficLight color="yellow" onClick={() => minimizeApp(id)} title="Minimize" />
          <TrafficLight color="green"  onClick={() => maximizeApp(id)} title="Zoom" />

          <span className="flex-1 text-center text-[13px] font-semibold text-[var(--text-primary)] pointer-events-none truncate pr-16">
            {title}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-1 overflow-hidden">
          {sidebar && (
            <aside className="w-44 shrink-0 border-r border-black/[0.06] dark:border-white/[0.06] overflow-y-auto"
              style={{ background: 'var(--window-sidebar)' }}>
              {sidebar}
            </aside>
          )}
          <main className="flex-1 overflow-auto" style={{ background: 'var(--window-bg)' }}>
            {children}
          </main>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

function TrafficLight({ color, onClick, title }: { color: 'red' | 'yellow' | 'green'; onClick: () => void; title: string }) {
  const colors = { red: '#FF5F57', yellow: '#FFBD2E', green: '#28C840' }
  const hovers = { red: '#FF4136', yellow: '#FFAA00', green: '#1AA832' }

  return (
    <motion.button
      onClick={onClick}
      aria-label={title}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      className="w-3 h-3 rounded-full focus-visible:ring-2"
      style={{ background: colors[color] }}
      onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.background = hovers[color] }}
      onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.background = colors[color] }}
    />
  )
}
