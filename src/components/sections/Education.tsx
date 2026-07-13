'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { education, certificates } from '@/data/education'
import { GraduationCap, Award, ExternalLink } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function Education() {
  const { lang } = useLang()
  const t = getStrings(lang).education

  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <SectionHeading overline={t.overline} title={t.title} />

        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <ScrollReveal>
              <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5C158] mb-8">
                <GraduationCap size={14} />
                {t.degreesLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-6">
              {education.map((edu, i) => (
                <ScrollReveal key={edu.id} delay={i * 0.1}>
                  <div className="relative pl-6 border-l border-[rgba(242,239,232,0.07)]">
                    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#E5C158]" />
                    <p className="text-[#F2EFE8] font-semibold">
                      {lang === 'th' && edu.degreeTh ? edu.degreeTh : edu.degree}
                    </p>
                    <p className="text-[#E5C158] text-sm">
                      {lang === 'th' && edu.fieldTh ? edu.fieldTh : edu.field}
                    </p>
                    <p className="text-[#8A8278] text-sm">
                      {lang === 'th' && edu.institutionTh ? edu.institutionTh : edu.institution}
                    </p>
                    <p className="text-[#8A8278]/60 text-xs mt-1">
                      {edu.startYear} — {edu.endYear ?? (lang === 'th' ? 'ปัจจุบัน' : 'Present')}
                      {edu.gpa && ` · GPA: ${edu.gpa}`}
                    </p>
                    {edu.note && (
                      <p className="text-[#8A8278]/60 text-xs mt-1">
                        {lang === 'th' && edu.noteTh ? edu.noteTh : edu.note}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <h3 className="flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-[#E5C158] mb-8">
                <Award size={14} />
                {t.certsLabel}
              </h3>
            </ScrollReveal>

            <div className="space-y-4">
              {certificates.map((cert, i) => (
                <ScrollReveal key={cert.id} delay={i * 0.1}>
                  <div className="group flex items-start gap-4 bg-[#1C1A19] border border-[rgba(242,239,232,0.07)] rounded-xl p-4 hover:border-[#E5C158]/25 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(229,193,88,0.08)] border border-[rgba(229,193,88,0.15)] flex items-center justify-center shrink-0">
                      <Award size={16} className="text-[#E5C158]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <p className="text-[#F2EFE8] font-medium text-sm leading-snug">
                          {lang === 'th' && cert.nameTh ? cert.nameTh : cert.name}
                        </p>
                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8A8278]/60 hover:text-[#F2EFE8] transition-colors shrink-0"
                          >
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                      <p className="text-[#8A8278] text-xs mt-1">{cert.issuer}</p>
                      <p className="text-[#8A8278]/60 text-xs">{cert.issuedDate}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
