'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function Projects() {
  const { lang } = useLang()
  const t = getStrings(lang).projects

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: lang === 'th' && p.descriptionTh ? p.descriptionTh : p.description,
  }))

  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading overline={t.overline} title={t.title} subtitle={t.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {localizedProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1} direction="up">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
