'use client'

import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'
import { ExperienceCard } from '@/components/shared/ExperienceCard'

export function ExperienceDetail() {
  const { lang } = useLang()
  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-4">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} lang={lang} compact />
        ))}
      </div>
    </div>
  )
}
