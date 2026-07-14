import { IoLogoGithub, IoOpen, IoBusiness, IoPerson, IoPeople } from 'react-icons/io5'
import type { LocalizedProject } from '@/types'
import type { Lang } from '@/lib/lang'
import { BulletText } from '@/components/ui/BulletText'
import { TechTag } from '@/components/ui/TechTag'
import { getStrings } from '@/data/i18n'
import { ProjectGallery } from './ProjectGallery'

const OWNERSHIP_STYLE = {
  company:  { label: 'Full Responsibility', labelTh: 'รับผิดชอบหลัก',  color: '#FF9500', bg: 'rgba(255,149,0,0.12)' },
  co:       { label: 'Co-developed',        labelTh: 'ร่วมพัฒนา',       color: '#5856D6', bg: 'rgba(88,86,214,0.12)' },
  personal: { label: 'Side Project',        labelTh: 'โปรเจกต์ส่วนตัว', color: '#34C759', bg: 'rgba(52,199,89,0.12)' },
} as const

const OWNERSHIP_ICON = {
  company:  IoBusiness,
  co:       IoPeople,
  personal: IoPerson,
} as const

interface Props {
  project: LocalizedProject
  lang: Lang
}

export function ProjectDetailView({ project: p, lang }: Props) {
  const t = getStrings(lang)
  const own = OWNERSHIP_STYLE[p.ownership]
  const OwnIcon = OWNERSHIP_ICON[p.ownership]
  const ownerLabel = lang === 'th' ? own.labelTh : own.label

  return (
    <div className="space-y-4">
      {/* Header */}
      <div
        className="rounded-2xl px-5 pt-5 pb-4 bg-ios-card"
        style={{ border: "0.5px solid var(--ios-separator)" }}
      >
        <div className="flex items-start gap-2 mb-3">
          <h2 className="flex-1 text-[20px] font-bold leading-snug text-primary">
            {p.title}
          </h2>
          <span className="text-[13px] tabular-nums shrink-0 mt-1 text-tertiary">
            {p.year}
          </span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          <span
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[12px] font-semibold"
            style={{ background: own.bg, color: own.color }}
          >
            <OwnIcon size={12} />
            {ownerLabel}
          </span>
          {p.company && (
            <span
              className="px-2.5 py-1 rounded-full text-[12px] font-medium text-secondary bg-ios"
              style={{ border: "0.5px solid var(--ios-separator)" }}
            >
              {p.company}
            </span>
          )}
        </div>
      </div>

      {/* Image gallery */}
      {p?.images && <ProjectGallery project={p} galleryLabel={t.ui.gallery} />}

      {/* Description + bullets */}
      <div
        className="rounded-2xl px-5 py-4 bg-ios-card space-y-3"
        style={{ border: "0.5px solid var(--ios-separator)" }}
      >
        <p className="text-[15px] leading-relaxed text-secondary">
          {p.description}
        </p>
        {p.bullets.length > 0 && (
          <div className="space-y-2 pt-1">
            {p.bullets.map((b, i) => (
              <div key={i} className="flex gap-2">
                <span className="shrink-0 mt-[5px] text-[9px] text-system-blue">
                  ●
                </span>
                <BulletText text={b} lang={lang} className="text-[14px]" />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tech stack */}
      <div
        className="rounded-2xl px-5 py-4 bg-ios-card"
        style={{ border: "0.5px solid var(--ios-separator)" }}
      >
        <p
          className="text-[11px] uppercase font-medium mb-3 text-tertiary"
          style={{ letterSpacing: "0.04em" }}
        >
          {t.projects.techStack}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {p.techStack.map((tech) => (
            <TechTag key={tech} label={tech} />
          ))}
        </div>
      </div>

      {/* Links */}
      {(p.githubUrl || p.liveUrl) && (
        <div
          className="rounded-2xl px-5 py-4 flex gap-5 bg-ios-card"
          style={{ border: "0.5px solid var(--ios-separator)" }}
        >
          {p.githubUrl && (
            <a
              href={p.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] font-semibold transition-opacity hover:opacity-70 text-system-blue"
            >
              <IoLogoGithub size={18} /> GitHub
            </a>
          )}
          {p.liveUrl && (
            <a
              href={p.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] font-semibold transition-opacity hover:opacity-70 text-system-blue"
            >
              <IoOpen size={18} /> Live Demo
            </a>
          )}
        </div>
      )}

      {/* Repos */}
      {p.repos && p.repos.length > 0 && (
        <div
          className="rounded-2xl px-5 py-4 bg-ios-card"
          style={{ border: "0.5px solid var(--ios-separator)" }}
        >
          <p
            className="text-[11px] uppercase font-medium mb-3 text-tertiary"
            style={{ letterSpacing: "0.04em" }}
          >
            Repositories
          </p>
          <div className="flex flex-wrap gap-1.5">
            {p.repos.map((repo) => (
              <span
                key={repo}
                className="px-2.5 py-1 rounded-lg text-[12px] font-mono text-secondary"
                style={{
                  background: "var(--ios-bg)",
                  border: "0.5px solid var(--ios-separator)",
                }}
              >
                {repo}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
