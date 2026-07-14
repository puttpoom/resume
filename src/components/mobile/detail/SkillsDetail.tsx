'use client'

import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import { skillCategories, getSkillsByCategory } from '@/data/skills'
import {
  SiGo, SiPhp, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui,
  SiLaravel, SiRabbitmq,
  SiMysql, SiMongodb,
  SiGit, SiDocker, SiBitbucket, SiGooglemaps,
} from 'react-icons/si'
import { TbApi, TbDatabase } from 'react-icons/tb'
import type { IconType } from 'react-icons'

const ICON_MAP: Record<string, { Icon: IconType; color: string }> = {
  'Go':                { Icon: SiGo,         color: '#00ACD7' },
  'PHP':               { Icon: SiPhp,         color: '#8892BE' },
  'JavaScript (ES6+)': { Icon: SiJavascript,  color: '#F7DF1E' },
  'SQL':               { Icon: TbDatabase,    color: '#4479A1' },
  'React':             { Icon: SiReact,       color: '#61DAFB' },
  'Next.js':           { Icon: SiNextdotjs,   color: '#000000' },
  'React Hook Form':   { Icon: SiReact,       color: '#EC5990' },
  'TanStack Query':    { Icon: SiReact,       color: '#FF4154' },
  'Tailwind CSS':      { Icon: SiTailwindcss, color: '#06B6D4' },
  'shadcn/ui':         { Icon: SiShadcnui,    color: '#1d1d1f' },
  'Go (Gorilla/Mux)':  { Icon: SiGo,          color: '#00ACD7' },
  'PHP Laravel':       { Icon: SiLaravel,     color: '#FF2D20' },
  'REST API':          { Icon: TbApi,         color: '#6366F1' },
  'OAuth 2.0':         { Icon: TbApi,         color: '#FF9500' },
  'RabbitMQ':          { Icon: SiRabbitmq,    color: '#FF6600' },
  'MySQL':             { Icon: SiMysql,       color: '#4479A1' },
  'MongoDB':           { Icon: SiMongodb,     color: '#47A248' },
  'Git':               { Icon: SiGit,         color: '#F05032' },
  'Docker':            { Icon: SiDocker,      color: '#2496ED' },
  'Bitbucket':         { Icon: SiBitbucket,   color: '#0052CC' },
  'Google Maps API':   { Icon: SiGooglemaps,  color: '#4285F4' },
  'Longdo Maps API':   { Icon: SiGooglemaps,  color: '#34A853' },
}

export function SkillsDetail() {
  const { lang } = useLang()
  const t = getStrings(lang).skills

  return (
    <div className="h-full overflow-y-auto bg-ios">
      <div className="px-4 pt-5 pb-12 space-y-5">
        {skillCategories.map((cat) => {
          const items = getSkillsByCategory(cat)
          return (
            <div key={cat}>
              <p className="text-[13px] uppercase px-1 mb-1 text-secondary" style={{ letterSpacing: '0.03em' }}>
                {t.categories[cat]}
              </p>
              <div className="rounded-2xl overflow-hidden bg-ios-card">
                {items.map((skill, i) => {
                  const entry = ICON_MAP[skill.name]
                  return (
                    <div
                      key={skill.name}
                      className="flex items-center gap-3 px-4 py-[11px]"
                      style={{ borderBottom: i < items.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}
                    >
                      {entry ? (
                        <div
                          className="w-[29px] h-[29px] flex items-center justify-center rounded-[6px] shrink-0"
                          style={{ background: `${entry.color}22` }}
                        >
                          <entry.Icon size={18} style={{ color: entry.color }} />
                        </div>
                      ) : (
                        <div className="w-[29px] h-[29px] rounded-[6px] shrink-0 bg-ios" />
                      )}
                      <span className="text-[16px] text-primary">{skill.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
