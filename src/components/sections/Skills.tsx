import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories, getSkillsByCategory } from '@/data/skills'

const categoryColors: Record<string, string> = {
  Languages: 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  Frameworks: 'from-purple-500/20 to-purple-500/5 border-purple-500/20',
  Databases: 'from-green-500/20 to-green-500/5 border-green-500/20',
  DevOps: 'from-orange-500/20 to-orange-500/5 border-orange-500/20',
  Tools: 'from-pink-500/20 to-pink-500/5 border-pink-500/20',
}

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading
          overline="Capabilities"
          title="Tech Stack"
          subtitle="Tools and technologies I work with daily."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, ci) => {
            const items = getSkillsByCategory(category)
            const gradient = categoryColors[category]
            return (
              <ScrollReveal key={category} delay={ci * 0.1}>
                <div className={`rounded-2xl bg-gradient-to-br ${gradient} border p-6 backdrop-blur-sm`}>
                  <h3 className="text-xs font-bold tracking-widest uppercase text-zinc-500 mb-5">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, si) => (
                      <ScrollReveal key={skill.name} delay={ci * 0.1 + si * 0.05}>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium bg-white/5 border border-white/10 text-zinc-200 hover:bg-white/10 transition-colors cursor-default">
                          {skill.name}
                        </span>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
