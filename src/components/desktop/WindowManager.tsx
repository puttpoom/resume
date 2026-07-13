'use client'

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'

export type AppId = 'about' | 'skills' | 'projects' | 'experience' | 'contact' | 'resume'

export interface WindowState {
  id: AppId
  open: boolean
  minimized: boolean
  maximized: boolean
  zIndex: number
  x: number
  y: number
}

interface WMContext {
  windows: Record<AppId, WindowState>
  openApp: (id: AppId) => void
  closeApp: (id: AppId) => void
  minimizeApp: (id: AppId) => void
  maximizeApp: (id: AppId) => void
  bringToFront: (id: AppId) => void
  updatePosition: (id: AppId, x: number, y: number) => void
}

const DEFAULT_POSITIONS: Record<AppId, { x: number; y: number }> = {
  about:      { x: 80,  y: 60 },
  skills:     { x: 130, y: 80 },
  projects:   { x: 160, y: 90 },
  experience: { x: 110, y: 70 },
  contact:    { x: 200, y: 100 },
  resume:     { x: 180, y: 85 },
}

function makeInitialWindows(): Record<AppId, WindowState> {
  const ids: AppId[] = ['about', 'skills', 'projects', 'experience', 'contact', 'resume']
  return Object.fromEntries(
    ids.map((id, i) => [
      id,
      {
        id,
        open: false,
        minimized: false,
        maximized: false,
        zIndex: 10 + i,
        x: DEFAULT_POSITIONS[id].x,
        y: DEFAULT_POSITIONS[id].y,
      },
    ])
  ) as Record<AppId, WindowState>
}

const WMCtx = createContext<WMContext>({} as WMContext)

export function WindowManagerProvider({ children }: { children: ReactNode }) {
  const [windows, setWindows] = useState<Record<AppId, WindowState>>(makeInitialWindows)
  const [topZ, setTopZ] = useState(20)

  const bringToFront = useCallback((id: AppId) => {
    setTopZ((z) => z + 1)
    setWindows((w) => ({ ...w, [id]: { ...w[id], zIndex: topZ + 1 } }))
  }, [topZ])

  const openApp = useCallback((id: AppId) => {
    setTopZ((z) => z + 1)
    setWindows((w) => ({
      ...w,
      [id]: { ...w[id], open: true, minimized: false, zIndex: topZ + 1 },
    }))
  }, [topZ])

  const closeApp = useCallback((id: AppId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], open: false, minimized: false, maximized: false } }))
  }, [])

  const minimizeApp = useCallback((id: AppId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], minimized: true } }))
  }, [])

  const maximizeApp = useCallback((id: AppId) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], maximized: !w[id].maximized } }))
  }, [])

  const updatePosition = useCallback((id: AppId, x: number, y: number) => {
    setWindows((w) => ({ ...w, [id]: { ...w[id], x, y } }))
  }, [])

  return (
    <WMCtx.Provider value={{ windows, openApp, closeApp, minimizeApp, maximizeApp, bringToFront, updatePosition }}>
      {children}
    </WMCtx.Provider>
  )
}

export function useWindowManager() {
  return useContext(WMCtx)
}
