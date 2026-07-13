import type { Skill } from '@/types'

export const skills: Skill[] = [
  // Languages
  { name: 'Go', category: 'Languages' },
  { name: 'PHP', category: 'Languages' },
  { name: 'JavaScript (ES6+)', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },

  // Frontend
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'React Hook Form', category: 'Frontend' },
  { name: 'TanStack Query', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'shadcn/ui', category: 'Frontend' },

  // Backend
  { name: 'Go (Gorilla/Mux)', category: 'Backend' },
  { name: 'PHP Laravel', category: 'Backend' },
  { name: 'REST API', category: 'Backend' },
  { name: 'OAuth 2.0', category: 'Backend' },
  { name: 'RabbitMQ', category: 'Backend' },

  // Databases
  { name: 'MySQL', category: 'Databases' },
  { name: 'MongoDB', category: 'Databases' },

  // Tools
  { name: 'Git', category: 'Tools' },
  { name: 'Docker', category: 'Tools' },
  { name: 'Bitbucket', category: 'Tools' },
  { name: 'Google Maps API', category: 'Tools' },
  { name: 'Longdo Maps API', category: 'Tools' },
]

export const skillCategories: Skill['category'][] = [
  'Languages',
  'Frontend',
  'Backend',
  'Databases',
  'Tools',
]

export function getSkillsByCategory(category: Skill['category']): Skill[] {
  return skills.filter((s) => s.category === category)
}
