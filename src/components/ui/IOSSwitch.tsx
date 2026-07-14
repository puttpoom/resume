'use client'

import { motion } from 'framer-motion'

interface Props {
  on: boolean
  onToggle: () => void
  size?: 'sm' | 'md'
}

const SIZES = {
  sm: { w: 44, h: 26, r: 13, tw: 22, tx: 20 },
  md: { w: 51, h: 31, r: 15.5, tw: 27, tx: 22 },
}

export function IOSSwitch({ on, onToggle, size = 'md' }: Props) {
  const { w, h, r, tw, tx } = SIZES[size]
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className="relative shrink-0 focus-visible:outline-none"
      style={{
        width: w, height: h, borderRadius: r,
        background: on ? '#34C759' : 'rgba(120,120,128,0.32)',
        transition: 'background 0.2s ease',
      }}
    >
      <motion.div
        animate={{ x: on ? tx : 2 }}
        transition={{ type: 'spring', stiffness: 500, damping: 36 }}
        style={{
          position: 'absolute', top: 2,
          width: tw, height: tw, borderRadius: '50%',
          background: '#fff',
          boxShadow: size === 'sm' ? '0 1px 4px rgba(0,0,0,0.3)' : '0 2px 6px rgba(0,0,0,0.28)',
        }}
      />
    </button>
  )
}
