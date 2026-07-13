'use client'

import { useState } from 'react'
import { Window } from '../Window'
import { projects } from '@/data/projects'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import type { Project } from '@/types'

function FileIcon() {
  return (
    <svg width="32" height="38" viewBox="0 0 32 38" fill="none">
      <rect width="32" height="38" rx="4" fill="#E8F0FE"/>
      <path d="M20 0v8h8" stroke="#B0C4F5" fill="none"/>
      <path d="M20 0l8 8H20V0z" fill="#C8D8F8"/>
      <rect x="5" y="16" width="22" height="2" rx="1" fill="#93B4EF" opacity=".6"/>
      <rect x="5" y="21" width="16" height="2" rx="1" fill="#93B4EF" opacity=".4"/>
      <rect x="5" y="26" width="19" height="2" rx="1" fill="#93B4EF" opacity=".3"/>
    </svg>
  )
}

function TechTag({ label }: { label: string }) {
  return (
    <span className="px-2 py-0.5 text-[11px] rounded" style={{ background: 'var(--ios-separator)', color: 'var(--text-secondary)' }}>
      {label}
    </span>
  )
}

export function ProjectsApp() {
  const { lang } = useLang()
  const t = getStrings(lang).projects
  const [selected, setSelected] = useState<Project | null>(null)

  const localizedProjects = projects.map((p) => ({
    ...p,
    description: lang === 'th' && p.descriptionTh ? p.descriptionTh : p.description,
  }))

  const sidebar = (
    <div className="p-2">
      <p className="text-[11px] font-semibold uppercase opacity-40 px-2 mb-1" style={{ color: 'var(--text-primary)' }}>
        Favourites
      </p>
      {['All Projects', 'Featured', 'Open Source'].map((item) => (
        <div key={item} className="px-2 py-1 rounded-md text-[13px] cursor-default hover:bg-black/5 dark:hover:bg-white/5"
          style={{ color: 'var(--text-primary)' }}>
          {item}
        </div>
      ))}
    </div>
  )

  return (
    <Window id="projects" title="Projects — Finder" width={760} height={480} sidebar={sidebar}>
      <div className="flex h-full">
        {/* File grid */}
        <div className="w-56 border-r overflow-y-auto p-3" style={{ borderColor: 'var(--ios-separator)' }}>
          <div className="grid grid-cols-2 gap-3">
            {localizedProjects.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelected(p as Project)}
                className="flex flex-col items-center gap-1 p-2 rounded-lg text-center transition-colors focus-visible:ring-2"
                style={{
                  background: selected?.id === p.id ? 'var(--system-blue)' : 'transparent',
                  color: selected?.id === p.id ? 'white' : 'var(--text-primary)',
                }}
              >
                <FileIcon />
                <span className="text-[11px] leading-tight line-clamp-2">{p.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail pane */}
        <div className="flex-1 p-5 overflow-y-auto">
          {selected ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FileIcon />
                <div>
                  <h3 className="font-semibold text-[15px]" style={{ color: 'var(--text-primary)' }}>{selected.title}</h3>
                  <p className="text-[12px]" style={{ color: 'var(--text-secondary)' }}>{selected.year}</p>
                </div>
              </div>

              <p className="text-[13px] leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                {lang === 'th' && (selected as Project & {descriptionTh?:string}).descriptionTh
                  ? (selected as Project & {descriptionTh?:string}).descriptionTh
                  : selected.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {selected.techStack.map((t) => <TechTag key={t} label={t} />)}
              </div>

              <div className="flex gap-3">
                {selected.githubUrl && (
                  <a href={selected.githubUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] font-medium px-3 py-1.5 rounded-md transition-colors"
                    style={{ background: 'var(--system-blue)', color: 'white' }}>
                    GitHub →
                  </a>
                )}
                {selected.liveUrl && (
                  <a href={selected.liveUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[12px] font-medium px-3 py-1.5 rounded-md transition-colors"
                    style={{ background: 'var(--ios-separator)', color: 'var(--text-primary)' }}>
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-[13px]" style={{ color: 'var(--text-tertiary)' }}>Select a project</p>
            </div>
          )}
        </div>
      </div>
    </Window>
  )
}
