import contentData from '@/data/content.json'
import type { Project, Skill, SkillCategory, Experience, Education, Certificate } from '@/types'

interface Profile {
  name: string
  firstName: string
  lastName: string
  shortName: string
  role: string
  location: string
  email: string
  phone: string
  phoneHref: string
  github: string
  githubLabel: string
  linkedin: string
  linkedinLabel: string
}

interface ContentShape {
  profile: Profile
  softSkills: string[]
  skillCategories: SkillCategory[]
  skills: Skill[]
  experience: Experience[]
  education: Education[]
  certificates: Certificate[]
  projects: Project[]
}

const content = contentData as ContentShape

export const profile = content.profile
export const softSkills = content.softSkills
export const skillCategories = content.skillCategories
export const skills = content.skills
export const experiences = content.experience
export const education = content.education
export const certificates = content.certificates
export const projects = content.projects
export const featuredProjects = projects.filter((p) => p.featured)

export function getSkillsByCategory(category: SkillCategory): Skill[] {
  return skills.filter((s) => s.category === category)
}
