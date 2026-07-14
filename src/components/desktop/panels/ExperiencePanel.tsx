'use client'

import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'
import { ExperienceCard } from '@/components/shared/ExperienceCard'

export function ExperiencePanel() {
  const { lang } = useLang()
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">
      {experiences.map((exp) => (
        <ExperienceCard key={exp.id} exp={exp} lang={lang} />
      ))}
    </div>
  )
}
