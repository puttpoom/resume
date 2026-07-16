'use client'

import { motion } from 'framer-motion'
import { useLang } from '@/lib/lang'
import { useLocalizedProjects, PANEL_SPRING as SPRING } from '@/lib/useLocalizedProjects'
import { ProjectCard } from '@/components/shared/ProjectCard'

interface Props {
  onSelectProject: (id: string) => void
  isSubDetailOpen: boolean
}

export function ProjectsDetail({ onSelectProject, isSubDetailOpen }: Props) {
  const { lang } = useLang()

  const localizedProjects = useLocalizedProjects(lang)

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
