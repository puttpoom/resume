'use client'

import { motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useLang, loc } from '@/lib/lang'
import { ProjectCard } from '@/components/shared/ProjectCard'
import type { LocalizedProject } from '@/types'

const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const

interface Props {
  onSelectProject: (id: string) => void
  isSubDetailOpen: boolean
}

export function ProjectsDetail({ onSelectProject, isSubDetailOpen }: Props) {
  const { lang } = useLang()

  const localizedProjects: LocalizedProject[] = projects.map((p) => ({
    ...p,
    description: loc(lang, p.descriptionTh, p.description),
    bullets: (lang === 'th' && p.bulletsTh) ? p.bulletsTh : (p.bullets ?? []),
  }))

  return (
    <motion.div
      animate={{ x: isSubDetailOpen ? '-30%' : 0 }}
      transition={SPRING}
      className="h-full overflow-y-auto bg-ios"
    >
      <div className="px-4 pt-5 pb-12 space-y-4">
        {localizedProjects.map((p) => (
          <ProjectCard
            key={p.id}
            project={p}
            lang={lang}
            compact
            onClick={() => onSelectProject(p.id)}
          />
        ))}
      </div>
    </motion.div>
  )
}
