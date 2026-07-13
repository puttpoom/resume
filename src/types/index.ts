export interface Project {
  id: string
  title: string
  description: string
  descriptionTh?: string
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
  | 'Frontend'
  | 'Backend'
  | 'Databases'
  | 'Tools'

export interface Experience {
  id: string
  company: string
  companyTh?: string
  role: string
  roleTh?: string
  note?: string
  noteTh?: string
  startDate: string
  endDate: string | null
  description: string[]
  descriptionTh?: string[]
  techStack: string[]
}

export interface Education {
  id: string
  institution: string
  institutionTh?: string
  degree: string
  degreeTh?: string
  field: string
  fieldTh?: string
  startYear: number
  endYear: number | null
  gpa?: string
  note?: string
  noteTh?: string
}

export interface Certificate {
  id: string
  name: string
  nameTh?: string
  issuer: string
  issuedDate: string
  credentialUrl?: string
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
