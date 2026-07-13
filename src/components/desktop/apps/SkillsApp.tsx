'use client'

import { Window } from '../Window'
import { skills, skillCategories, getSkillsByCategory } from '@/data/skills'
import { useLang } from '@/lib/lang'
import { getStrings } from '@/data/i18n'
import {
  SiGo, SiPhp, SiJavascript,
  SiReact, SiNextdotjs, SiTailwindcss, SiShadcnui,
  SiLaravel, SiRabbitmq,
  SiMysql, SiMongodb,
  SiGit, SiDocker, SiBitbucket, SiGooglemaps,
} from 'react-icons/si'
import { TbApi, TbDatabase } from 'react-icons/tb'

const ICON_MAP: Record<string, { icon: React.ElementType; color: string }> = {
  'Go':              { icon: SiGo,          color: '#00ACD7' },
  'PHP':             { icon: SiPhp,         color: '#8892BE' },
  'JavaScript (ES6+)': { icon: SiJavascript, color: '#F7DF1E' },
  'SQL':             { icon: TbDatabase,     color: '#4479A1' },
  'React':           { icon: SiReact,       color: '#61DAFB' },
  'Next.js':         { icon: SiNextdotjs,   color: '#000000' },
  'React Hook Form': { icon: SiReact,       color: '#EC5990' },
  'TanStack Query':  { icon: SiReact,       color: '#FF4154' },
  'Tailwind CSS':    { icon: SiTailwindcss, color: '#06B6D4' },
  'shadcn/ui':       { icon: SiShadcnui,    color: '#1d1d1f' },
  'Go (Gorilla/Mux)': { icon: SiGo,        color: '#00ACD7' },
  'PHP Laravel':     { icon: SiLaravel,     color: '#FF2D20' },
  'REST API':        { icon: TbApi,         color: '#6366F1' },
  'OAuth 2.0':       { icon: TbApi,         color: '#FF6600' },
  'RabbitMQ':        { icon: SiRabbitmq,    color: '#FF6600' },
  'MySQL':           { icon: SiMysql,       color: '#4479A1' },
  'MongoDB':         { icon: SiMongodb,     color: '#47A248' },
  'Git':             { icon: SiGit,         color: '#F05032' },
  'Docker':          { icon: SiDocker,      color: '#2496ED' },
  'Bitbucket':       { icon: SiBitbucket,   color: '#0052CC' },
  'Google Maps API': { icon: SiGooglemaps,  color: '#4285F4' },
  'Longdo Maps API': { icon: SiGooglemaps,  color: '#34A853' },
}

function SkillTile({ name }: { name: string }) {
  const entry = ICON_MAP[name]
  const Icon = entry?.icon
  const color = entry?.color ?? '#6e6e73'

  return (
    <div className="flex flex-col items-center gap-1.5 group cursor-default">
      <div
        className="w-12 h-12 rounded-[22%] flex items-center justify-center shadow-sm transition-transform group-hover:scale-110"
        style={{ background: `${color}18`, border: `1px solid ${color}30` }}
        title={name}
      >
        {Icon ? (
          <Icon size={24} style={{ color }} />
        ) : (
          <span className="text-[11px] font-bold" style={{ color }}>{name.slice(0,2)}</span>
        )}
      </div>
      <span className="text-[10px] text-center leading-tight max-w-[52px] truncate" style={{ color: 'var(--text-secondary)' }}>
        {name.replace(' (ES6+)', '').replace(' (Gorilla/Mux)', '').replace(' API', '')}
      </span>
    </div>
  )
}

export function SkillsApp() {
  const { lang } = useLang()
  const t = getStrings(lang).skills

  return (
    <Window id="skills" title="Skills — Launchpad" width={640} height={480}>
      <div className="p-6 overflow-y-auto h-full" style={{ background: 'rgba(0,0,0,0.85)' }}>
        <h2 className="text-xl font-semibold text-white mb-5">{t.title}</h2>
        {skillCategories.map((cat) => (
          <div key={cat} className="mb-6">
            <p className="text-[11px] font-semibold uppercase text-white/40 mb-3 tracking-widest">
              {t.categories[cat]}
            </p>
            <div className="flex flex-wrap gap-4">
              {getSkillsByCategory(cat).map((s) => (
                <SkillTile key={s.name} name={s.name} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Window>
  )
}
