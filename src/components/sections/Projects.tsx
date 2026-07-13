import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { projects } from '@/data/projects'

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          overline="Selected Work"
          title="Projects"
          subtitle="A selection of things I&apos;ve built — from real-time systems to modern web apps."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.1} direction="up">
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
