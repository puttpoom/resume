import type { Skill } from '@/types'

export const skills: Skill[] = [
  { name: 'TypeScript', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'Python', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'Next.js', category: 'Frameworks' },
  { name: 'React', category: 'Frameworks' },
  { name: 'Laravel', category: 'Frameworks' },
  { name: 'Tailwind CSS', category: 'Frameworks' },
  { name: 'Framer Motion', category: 'Frameworks' },
  { name: 'MySQL', category: 'Databases' },
  { name: 'PostgreSQL', category: 'Databases' },
  { name: 'Redis', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },
  { name: 'Docker', category: 'DevOps' },
  { name: 'Kubernetes', category: 'DevOps' },
  { name: 'GitHub Actions', category: 'DevOps' },
  { name: 'DigitalOcean', category: 'DevOps' },
  { name: 'Git', category: 'Tools' },
  { name: 'VS Code', category: 'Tools' },
  { name: 'Figma', category: 'Tools' },
  { name: 'Postman', category: 'Tools' },
]

export const skillCategories: Skill['category'][] = [
  'Languages', 'Frameworks', 'Databases', 'DevOps', 'Tools',
]

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category)
}
