'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { TimelineItem } from '@/components/ui/TimelineItem'
import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function Experience() {
  const { lang } = useLang()
  const t = getStrings(lang).experience

  const localizedExperiences = experiences.map((exp) => ({
    ...exp,
    role: lang === 'th' && exp.roleTh ? exp.roleTh : exp.role,
    company: lang === 'th' && exp.companyTh ? exp.companyTh : exp.company,
    note: lang === 'th' && exp.noteTh ? exp.noteTh : exp.note,
    description: lang === 'th' && exp.descriptionTh ? exp.descriptionTh : exp.description,
  }))

  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-3xl mx-auto w-full">
        <SectionHeading overline={t.overline} title={t.title} align="left" />

        <div>
          {localizedExperiences.map((exp, i) => (
            <ScrollReveal key={exp.id} delay={i * 0.15}>
              <TimelineItem
                experience={exp}
                isLast={i === localizedExperiences.length - 1}
                presentLabel={lang === 'th' ? 'ปัจจุบัน' : 'Present'}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
