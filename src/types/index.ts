export interface Project {
  id: string
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: number
}

export interface Skill {
  name: string
  category: SkillCategory
}

export type SkillCategory =
  | 'Languages'
  | 'Frameworks'
  | 'Databases'
  | 'DevOps'
  | 'Tools'

export interface Experience {
  id: string
  company: string
  role: string
  startDate: string
  endDate: string | null
  description: string[]
  techStack: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  field: string
  startYear: number
  endYear: number | null
}

export interface Certificate {
  id: string
  name: string
  issuer: string
  issuedDate: string
  credentialUrl?: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
