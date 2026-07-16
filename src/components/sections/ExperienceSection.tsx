'use client'

import { experiences } from '@/data/experience'
import { useLang } from '@/lib/lang'
import { ExperienceCard } from '@/components/shared/ExperienceCard'

export function ExperienceSection() {
  const { lang } = useLang()
  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-4 min-[821px]:p-6 min-[821px]:max-w-3xl min-[821px]:mx-auto">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} lang={lang} />
        ))}
      </div>
    </div>
  )
}
