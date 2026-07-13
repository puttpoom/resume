'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Globe } from 'lucide-react'
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
      className="relative group bg-[#1C1A19] border border-[rgba(242,239,232,0.07)] rounded-2xl p-6 flex flex-col gap-4 hover:border-[#E5C158]/30 transition-colors duration-300"
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
              aria-label="View source"
            >
              <Globe size={18} />
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
