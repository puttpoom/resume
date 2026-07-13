'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface ScrollRevealProps {
  children: React.ReactNode
  delay?: number
  direction?: 'up' | 'left' | 'right' | 'fade'
  className?: string
  once?: boolean
  threshold?: number
}

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.15,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, amount: threshold })

  const hidden = {
    opacity: 0,
    y: direction === 'up' ? 40 : 0,
    x: direction === 'left' ? 40 : direction === 'right' ? -40 : 0,
  }

  const visible = {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }

  return (
    <motion.div
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
