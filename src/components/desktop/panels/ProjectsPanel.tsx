'use client'

import { projects } from '@/data/projects'
import { useLang, loc } from '@/lib/lang'
import { ProjectCard } from '@/components/shared/ProjectCard'

export function ProjectsPanel() {
  const { lang } = useLang()

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: loc(lang, p.descriptionTh, p.description),
    bullets: (lang === 'th' && p.bulletsTh) ? p.bulletsTh : (p.bullets ?? []),
  }))

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-4">
      {localizedProjects.map((p) => (
        <ProjectCard key={p.id} project={p} lang={lang} />
      ))}
    </div>
  )
}
