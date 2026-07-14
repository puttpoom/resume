'use client'

import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects } from '@/data/projects'
import { useLang, loc } from '@/lib/lang'
import { ProjectCard } from '@/components/shared/ProjectCard'
import { ProjectDetailView } from '@/components/shared/ProjectDetailView'
import type { LocalizedProject } from '@/types'

const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const

interface Props {
  selectedProjectId: string | null
  onSelectProject: (id: string | null) => void
}

export function ProjectsPanel({ selectedProjectId, onSelectProject }: Props) {
  const { lang } = useLang()

  const localizedProjects: LocalizedProject[] = projects.map((p) => ({
    ...p,
    description: loc(lang, p.descriptionTh, p.description),
    bullets: (lang === 'th' && p.bulletsTh) ? p.bulletsTh : (p.bullets ?? []),
  }))

  const selectedProject = localizedProjects.find((p) => p.id === selectedProjectId) ?? null

  // Reset detail on language switch to avoid stale localized content
  useEffect(() => {
    onSelectProject(null)
  }, [lang]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="relative h-full overflow-hidden">
      <AnimatePresence initial={false}>
        {!selectedProject ? (
          <motion.div
            key="list"
            initial={{ x: '-30%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '-30%', opacity: 0 }}
            transition={SPRING}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="p-6 max-w-3xl mx-auto space-y-4">
              {localizedProjects.map((p) => (
                <ProjectCard
                  key={p.id}
                  project={p}
                  lang={lang}
                  onClick={() => onSelectProject(p.id)}
                />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={selectedProject.id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={SPRING}
            className="absolute inset-0 overflow-y-auto"
          >
            <div className="p-6 max-w-3xl mx-auto">
              <ProjectDetailView project={selectedProject} lang={lang} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
