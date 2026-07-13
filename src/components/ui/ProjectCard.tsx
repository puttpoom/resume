'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import { TechBadge } from './TechBadge'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      className="relative group bg-zinc-900/60 border border-white/8 rounded-2xl p-6 flex flex-col gap-4 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-colors duration-300"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
          <span className="text-xs text-zinc-500 mt-1">{project.year}</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors p-1"
              aria-label="Live demo"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
      <p className="text-sm text-zinc-400 leading-relaxed flex-1">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>
    </motion.div>
  )
}
