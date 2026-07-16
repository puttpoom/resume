'use client'

import { education, certificates } from '@/data/education'
import { useLang } from '@/lib/lang'
import { EducationList } from '@/components/shared/EducationList'

export function EducationSection() {
  const { lang } = useLang()
  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-5 min-[821px]:p-6 min-[821px]:max-w-3xl min-[821px]:mx-auto">
        <EducationList education={education} certificates={certificates} lang={lang} />
      </div>
    </div>
  )
}
