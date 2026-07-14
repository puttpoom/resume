import type { Project } from '@/types'
import projectsData from './projects.json'

export const projects: Project[] = projectsData as Project[]

export const featuredProjects = projects.filter((p) => p.featured)
