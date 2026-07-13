'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { IoChevronDown, IoChevronForward, IoLogoGithub, IoOpen } from 'react-icons/io5'
import { projects } from '@/data/projects'
import { useLang } from '@/lib/lang'
import type { Project } from '@/types'

export function ProjectsDetail() {
  const { lang } = useLang()
  const [selected, setSelected] = useState<string | null>(null)

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: lang === 'th' && p.descriptionTh ? p.descriptionTh : p.description,
  }))

  return (
    <div className="h-full overflow-y-auto" style={{ background: 'var(--ios-bg)' }}>
      <div className="px-4 pt-5 pb-12">
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
          {localizedProjects.map((p, i) => (
            <div key={p.id}>
              <button
                onClick={() => setSelected(selected === p.id ? null : p.id)}
                className="w-full flex items-center gap-3 px-4 py-[11px] active:opacity-70 transition-opacity"
                style={{ borderBottom: selected !== p.id && i < localizedProjects.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
              >
                <div className="flex-1 text-left min-w-0">
                  <p className="text-[16px] font-medium truncate" style={{ color: 'var(--text-primary)' }}>{p.title}</p>
                  <p className="text-[12px] truncate mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {p.techStack.slice(0, 3).join(' · ')}
                  </p>
                </div>
                {selected === p.id
                  ? <IoChevronDown size={17} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />
                  : <IoChevronForward size={17} style={{ color: 'var(--text-tertiary)', flexShrink: 0 }} />}
              </button>

              <AnimatePresence>
                {selected === p.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div
                      className="px-4 py-4"
                      style={{
                        background: 'var(--ios-bg)',
                        borderTop: '0.5px solid var(--ios-separator)',
                        borderBottom: i < localizedProjects.length - 1 ? '0.5px solid var(--ios-separator)' : 'none',
                      }}
                    >
                      <p className="text-[14px] leading-relaxed mb-3" style={{ color: 'var(--text-secondary)' }}>
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {p.techStack.map((tech) => (
                          <span key={tech}
                            className="px-2 py-0.5 text-[11px] rounded-md font-medium"
                            style={{ background: 'var(--ios-card-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {p.githubUrl && (
                          <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[14px] font-semibold"
                            style={{ color: 'var(--system-blue)' }}
                            onClick={e => e.stopPropagation()}>
                            <IoLogoGithub size={16} /> GitHub
                          </a>
                        )}
                        {p.liveUrl && (
                          <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-[14px] font-semibold"
                            style={{ color: 'var(--system-blue)' }}
                            onClick={e => e.stopPropagation()}>
                            <IoOpen size={16} /> Live
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
