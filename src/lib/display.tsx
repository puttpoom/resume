'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type FontSize = 'sm' | 'md' | 'lg' | 'xl'
export type ViewMode = 'list' | 'grid'
export type Density  = 'compact' | 'normal' | 'spacious'

export const FONT_ZOOM: Record<FontSize, number> = { sm: 0.85, md: 1, lg: 1.15, xl: 1.3 }
const FS_STEPS: FontSize[] = ['sm', 'md', 'lg', 'xl']

interface DisplayCtx {
  fontSize:    FontSize
  setFontSize: (s: FontSize) => void
  viewMode:    ViewMode
  setViewMode: (m: ViewMode) => void
  density:     Density
  setDensity:  (d: Density) => void
}

const Ctx = createContext<DisplayCtx>({
  fontSize: 'md',    setFontSize: () => {},
  viewMode: 'list',  setViewMode: () => {},
  density:  'normal', setDensity: () => {},
})

export function DisplayProvider({ children }: { children: ReactNode }) {
  const [fontSize, setFontSizeState] = useState<FontSize>('md')
  const [viewMode, setViewModeState] = useState<ViewMode>('list')
  const [density,  setDensityState]  = useState<Density>('normal')

  useEffect(() => {
    const fs = localStorage.getItem('disp-fs') as FontSize | null
    const vm = localStorage.getItem('disp-vm') as ViewMode | null
    const d  = localStorage.getItem('disp-den') as Density | null
    if (fs && FS_STEPS.includes(fs)) setFontSizeState(fs)
    if (vm === 'list' || vm === 'grid') setViewModeState(vm)
    if (d === 'compact' || d === 'normal' || d === 'spacious') setDensityState(d)
  }, [])

  const setFontSize = (s: FontSize) => { setFontSizeState(s); localStorage.setItem('disp-fs',  s) }
  const setViewMode = (m: ViewMode) => { setViewModeState(m); localStorage.setItem('disp-vm',  m) }
  const setDensity  = (d: Density)  => { setDensityState(d);  localStorage.setItem('disp-den', d) }

  return (
    <Ctx.Provider value={{ fontSize, setFontSize, viewMode, setViewMode, density, setDensity }}>
      {children}
    </Ctx.Provider>
  )
}

export function useDisplay() { return useContext(Ctx) }
