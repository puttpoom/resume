'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { LangToggle } from './LangToggle'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang } = useLang()
  const t = getStrings(lang).nav

  const links = [
    { label: t.about, href: '#about' },
    { label: t.projects, href: '#projects' },
    { label: t.skills, href: '#skills' },
    { label: t.experience, href: '#experience' },
    { label: t.education, href: '#education' },
    { label: t.contact, href: '#contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-[#111010]/90 backdrop-blur-xl border-b border-[rgba(242,239,232,0.07)]'
          : 'bg-transparent'
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="font-bold text-[#F2EFE8] text-sm tracking-wider hover:text-[#E5C158] transition-colors"
        >
          PB
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-[#8A8278] hover:text-[#F2EFE8] transition-colors font-medium"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LangToggle />
          <a
            href="mailto:putthiphoom.bm@gmail.com"
            className="hidden sm:block text-sm px-4 py-2 rounded-full border border-[rgba(242,239,232,0.15)] text-[#F2EFE8] hover:bg-[rgba(242,239,232,0.05)] transition-colors font-medium"
          >
            {t.hire}
          </a>
        </div>
      </nav>
    </motion.header>
  )
}
