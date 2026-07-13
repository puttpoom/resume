'use client'

import { motion } from 'framer-motion'
import { ArrowDown, AtSign, Globe, Link } from 'lucide-react'
import { WordReveal } from '@/components/animations/WordReveal'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

export function Hero() {
  const { lang } = useLang()
  const t = getStrings(lang).hero

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
        }}
      />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs font-semibold tracking-[0.25em] uppercase text-[#E5C158] mb-8"
        >
          {t.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#F2EFE8] leading-none mb-8"
        >
          Putthiphoom
          <br />
          <span className="text-[#E5C158]">Boonmahata.</span>
        </motion.h1>

        <div className="text-xl sm:text-2xl text-[#8A8278] font-light mb-12 leading-relaxed">
          <WordReveal key={t.tagline} text={t.tagline} baseDelay={0.8} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#E5C158] hover:bg-[#d4b248] text-[#111010] font-semibold text-sm transition-colors duration-200"
          >
            {t.viewWork}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[rgba(242,239,232,0.15)] hover:border-[rgba(242,239,232,0.3)] text-[#F2EFE8] font-semibold text-sm transition-colors duration-200"
          >
            {t.getInTouch}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
          className="flex items-center justify-center gap-8 mt-12"
        >
          <a
            href="https://github.com/puttpoom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8278] hover:text-[#F2EFE8] transition-colors"
            aria-label="GitHub"
          >
            <Globe size={18} />
          </a>
          <a
            href="https://linkedin.com/in/putthiphoom"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8A8278] hover:text-[#F2EFE8] transition-colors"
            aria-label="LinkedIn"
          >
            <Link size={18} />
          </a>
          <a
            href="mailto:putthiphoom.bm@gmail.com"
            className="text-[#8A8278] hover:text-[#F2EFE8] transition-colors"
            aria-label="Email"
          >
            <AtSign size={18} />
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8A8278]"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase">{t.scroll}</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}
