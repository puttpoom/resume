'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function About() {
  const { lang } = useLang()
  const t = getStrings(lang).about

  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-6xl mx-auto w-full">
        <SectionHeading overline={t.overline} title={t.title} align="left" />

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            {t.bio.map((para, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-lg text-[#8A8278] leading-relaxed">{para}</p>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-6 pt-4">
                {t.stats.map(({ label, value }) => (
                  <div key={label}>
                    <p className="text-3xl font-bold text-[#F2EFE8]">{value}</p>
                    <p className="text-sm text-[#8A8278] mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="left" delay={0.2}>
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-3xl bg-[#1C1A19] border border-[rgba(242,239,232,0.07)]" />
              <div className="absolute inset-4 rounded-2xl bg-[#111010] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 rounded-full bg-[#E5C158] mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-[#111010]">
                    P
                  </div>
                  <p className="text-[#F2EFE8] font-semibold">Putthiphoom B.</p>
                  <p className="text-[#8A8278] text-sm">Full Stack Developer</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
