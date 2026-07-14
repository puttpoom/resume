export interface Project {
  id: string
  title: string
  description: string
  descriptionTh?: string
  bullets?: string[]
  bulletsTh?: string[]
  techStack: string[]
  githubUrl?: string
  liveUrl?: string
  featured: boolean
  year: number
  ownership: 'company' | 'co' | 'personal'
  company?: string
  repos?: string[]
  images?: string[]
}

export interface LocalizedProject extends Omit<Project, 'bullets'> {
  description: string
  bullets: string[]
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
  id: string;
  institution: string;
  institutionTh?: string;
  degree: string;
  degreeTh?: string;
  field: string;
  fieldTh?: string;
  startYear: number;
  endYear: number | null;
  startYearTh?: number;
  endYearTh?: number;
  gpa: string;
  note?: string;
  noteTh?: string;
}

export interface Certificate {
  id: string;
  name: string;
  nameTh?: string;
  issuer: string;
  credentialUrl?: string;
  note?: string;
  noteTh?: string;
  issuedDate: string;
  issuedDateTh: string;
}

export interface SocialLink {
  platform: string
  url: string
  label: string
}
