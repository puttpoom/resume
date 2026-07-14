'use client'

import { projects } from '@/data/projects'
import { useLang, loc } from '@/lib/lang'
import { ProjectCard } from '@/components/shared/ProjectCard'

export function ProjectsDetail() {
  const { lang } = useLang()

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: loc(lang, p.descriptionTh, p.description),
    bullets: (lang === 'th' && p.bulletsTh) ? p.bulletsTh : (p.bullets ?? []),
  }))

  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-4">
        {localizedProjects.map((p) => (
          <ProjectCard key={p.id} project={p} lang={lang} compact />
        ))}
      </div>
    </div>
  )
}
