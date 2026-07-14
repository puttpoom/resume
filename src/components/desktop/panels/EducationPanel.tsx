'use client'

import { education, certificates } from '@/data/education'
import { useLang } from '@/lib/lang'
import { EducationList } from '@/components/shared/EducationList'

export function EducationPanel() {
  const { lang } = useLang()
  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">
      <EducationList education={education} certificates={certificates} lang={lang} />
    </div>
  )
}
