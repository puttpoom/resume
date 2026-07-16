import type { Lang } from '@/lib/lang'
import contentData from './content.json'

export interface I18n {
  nav: { about: string; projects: string; skills: string; experience: string; education: string; contact: string }
  about: {
    overline: string; title: string; bio: string[]
    stats: { value: string; label: string }[]
    role: string
    biography: string
    softSkills: string
  }
  projects: { overline: string; title: string; subtitle: string; techStack: string }
  skills: { overline: string; title: string; subtitle: string; categories: Record<string, string> }
  experience: { overline: string; title: string }
  education: {
    overline: string; title: string; degreesLabel: string; certsLabel: string
    educationLabel: string
    certificatesLabel: string
  }
  contact: { overline: string; title: string; subtitle: string; findMeOn: string; footer: string; cta: string }
  resume: { title: string; download: string }
  ui: {
    settings: string
    language: string
    darkMode: string
    portfolio: string
    documents: string
    viewResume: string
    downloadResume: string
    download: string
    aboutMe: string
    back: string
    gallery: string
  }
}

const ui = contentData.ui as Record<Lang, I18n>

export function getStrings(lang: Lang): I18n {
  return ui[lang]
}
