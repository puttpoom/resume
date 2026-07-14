'use client'

import { education, certificates } from '@/data/education'
import { useLang } from '@/lib/lang'
import { EducationList } from '@/components/shared/EducationList'

export function EducationDetail() {
  const { lang } = useLang()
  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-5">
        <EducationList education={education} certificates={certificates} lang={lang} />
      </div>
    </div>
  )
}
