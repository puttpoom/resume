import { projects } from '@/data/projects'
import { loc, type Lang } from '@/lib/lang'
import type { LocalizedProject } from '@/types'

export const PANEL_SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const

export function useLocalizedProjects(lang: Lang): LocalizedProject[] {
  return projects.map((p) => ({
    ...p,
    description: loc(lang, p.descriptionTh, p.description),
    bullets: (lang === 'th' && p.bulletsTh) ? p.bulletsTh : (p.bullets ?? []),
  }))
}
