'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { skillCategories, getSkillsByCategory } from '@/data/skills'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function Skills() {
  const { lang } = useLang()
  const t = getStrings(lang).skills

  return (
    <section id="skills" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading overline={t.overline} title={t.title} subtitle={t.subtitle} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, ci) => {
            const items = getSkillsByCategory(category)
            return (
              <ScrollReveal key={category} delay={ci * 0.1}>
                <div className="rounded-2xl bg-[#1C1A19] border border-[rgba(242,239,232,0.07)] p-6">
                  <h3 className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5C158] mb-5">
                    {t.categories[category]}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, si) => (
                      <ScrollReveal key={skill.name} delay={ci * 0.1 + si * 0.04}>
                        <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm text-[#8A8278] bg-[rgba(242,239,232,0.04)] border border-[rgba(242,239,232,0.07)] hover:text-[#F2EFE8] hover:border-[rgba(242,239,232,0.15)] transition-colors cursor-default">
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
