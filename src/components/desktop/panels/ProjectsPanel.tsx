'use client'

import { IoLogoGithub, IoOpen } from 'react-icons/io5'
import { projects } from '@/data/projects'
import { useLang } from '@/lib/lang'

export function ProjectsPanel() {
  const { lang } = useLang()

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: lang === 'th' && p.descriptionTh ? p.descriptionTh : p.description,
  }))

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {localizedProjects.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: 'var(--ios-card-bg)' }}
          >
            {/* Header */}
            <div className="px-5 pt-5 pb-3" style={{ borderBottom: '0.5px solid var(--ios-separator)' }}>
              <div className="flex items-start justify-between gap-2">
                <h3 className="text-[16px] font-semibold leading-snug" style={{ color: 'var(--text-primary)' }}>
                  {p.title}
                </h3>
                <span className="text-[12px] shrink-0 mt-0.5 tabular-nums"
                  style={{ color: 'var(--text-tertiary)' }}>
                  {p.year}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="px-5 py-4 flex-1">
              <p className="text-[14px] leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {p.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {p.techStack.map((tech) => (
                  <span key={tech}
                    className="px-2 py-0.5 text-[11px] rounded-md font-medium"
                    style={{ background: 'var(--ios-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            {(p.githubUrl || p.liveUrl) && (
              <div className="px-5 py-3 flex gap-4"
                style={{ borderTop: '0.5px solid var(--ios-separator)' }}>
                {p.githubUrl && (
                  <a href={p.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-70"
                    style={{ color: 'var(--system-blue)' }}>
                    <IoLogoGithub size={15} /> GitHub
                  </a>
                )}
                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-[13px] font-semibold transition-opacity hover:opacity-70"
                    style={{ color: 'var(--system-blue)' }}>
                    <IoOpen size={15} /> Live Demo
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
