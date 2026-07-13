'use client'

import { ScrollReveal } from '@/components/animations/ScrollReveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { AtSign, Globe, Link, Mail } from 'lucide-react'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/puttpoom', icon: Globe },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/putthiphoom', icon: Link },
  { label: 'Email', href: 'mailto:putthiphoom.bm@gmail.com', icon: AtSign },
]

export function Contact() {
  const { lang } = useLang()
  const t = getStrings(lang).contact

  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-3xl mx-auto w-full text-center">
        <SectionHeading overline={t.overline} title={t.title} subtitle={t.subtitle} />

        <ScrollReveal delay={0.2}>
          <a
            href="mailto:putthiphoom.bm@gmail.com"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#E5C158] hover:bg-[#d4b248] text-[#111010] font-semibold text-lg transition-all duration-200 hover:scale-[1.03]"
          >
            <Mail size={20} />
            putthiphoom.bm@gmail.com
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <p className="mt-6 text-[#8A8278]/70 text-sm">{t.findMeOn}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.45}>
          <div className="flex items-center justify-center gap-6 mt-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={label}
                className="group flex flex-col items-center gap-2 text-[#8A8278] hover:text-[#F2EFE8] transition-colors"
              >
                <div className="w-12 h-12 rounded-xl border border-[rgba(242,239,232,0.07)] flex items-center justify-center group-hover:border-[rgba(242,239,232,0.25)] group-hover:bg-[rgba(242,239,232,0.04)] transition-all">
                  <Icon size={20} />
                </div>
                <span className="text-xs">{label}</span>
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.6}>
          <p className="mt-20 text-[#8A8278]/40 text-xs">{t.footer}</p>
        </ScrollReveal>
      </div>
    </section>
  )
}
