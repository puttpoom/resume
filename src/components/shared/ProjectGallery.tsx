'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { IoClose, IoChevronBack, IoChevronForward } from 'react-icons/io5'
import type { LocalizedProject } from '@/types'
import { projectImageUrl } from '@/lib/assets'

const SPRING = { type: 'spring', stiffness: 380, damping: 38 } as const

const OWNERSHIP_GRADIENT: Record<string, string> = {
  company:  'linear-gradient(135deg, #FF9500 0%, #FF5E00 100%)',
  co:       'linear-gradient(135deg, #5856D6 0%, #3634A3 100%)',
  personal: 'linear-gradient(135deg, #34C759 0%, #1E8738 100%)',
}

const slideVariants = {
  enter: (d: number) => ({ x: d > 0 ? '100%' : d < 0 ? '-100%' : 0 }),
  center: { x: 0 },
  exit:  (d: number) => ({ x: d > 0 ? '-100%' : d < 0 ? '100%' : 0 }),
}

type GalleryItem = { type: 'img'; src: string } | { type: 'placeholder' }

function PlaceholderSlide({ project }: { project: LocalizedProject }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 select-none"
      style={{ background: OWNERSHIP_GRADIENT[project.ownership] }}
    >
      <p className="text-[20px] font-bold text-white text-center leading-tight">
        {project.title}
      </p>
      <div className="flex flex-wrap justify-center gap-1.5">
        {project.techStack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold text-white/90"
            style={{ background: 'rgba(255,255,255,0.22)' }}
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="text-[12px] tabular-nums mt-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
        {project.year}
      </span>
    </div>
  )
}

interface Props {
  project: LocalizedProject
  galleryLabel: string
}

export function ProjectGallery({ project, galleryLabel }: Props) {
  const [index, setIndex] = useState(0)
  const [dir, setDir]     = useState(0)
  const [lightbox, setLightbox] = useState(false)

  const items: GalleryItem[] = project.images && project.images.length > 0
    ? project.images.map((src) => ({ type: 'img', src }))
    : [{ type: 'placeholder' }]

  const go = (next: number, d: number) => {
    setDir(d)
    setIndex(next)
  }

  const onCarouselDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50 && index < items.length - 1) go(index + 1, 1)
    else if (info.offset.x > 50 && index > 0) go(index - 1, -1)
  }

  const onLightboxDragEnd = (_: unknown, info: { offset: { x: number } }) => {
    if (info.offset.x < -50 && index < items.length - 1) go(index + 1, 1)
    else if (info.offset.x > 50 && index > 0) go(index - 1, -1)
  }

  const cur = items[index]

  return (
    <>
      {/* ── Inline gallery card ── */}
      <div className="rounded-2xl overflow-hidden bg-ios-card" style={{ border: '0.5px solid var(--ios-separator)' }}>
        <p
          className="px-5 pt-4 pb-3 text-[11px] uppercase font-medium text-tertiary"
          style={{ letterSpacing: '0.04em' }}
        >
          {galleryLabel}
        </p>

        {/* Carousel */}
        <div
          className="relative mx-5 mb-3 overflow-hidden rounded-xl"
          style={{ aspectRatio: '16 / 9' }}
        >
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={index}
              custom={dir}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={SPRING}
              drag={items.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.15}
              onDragEnd={onCarouselDragEnd}
              onClick={() => setLightbox(true)}
              className="absolute inset-0 cursor-pointer"
            >
              {cur.type === 'img' ? (
                <img
                  src={projectImageUrl(cur.src)}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              ) : (
                <PlaceholderSlide project={project} />
              )}
            </motion.div>
          </AnimatePresence>

          {/* Arrow nav */}
          {items.length > 1 && index > 0 && (
            <button
              onClick={() => go(index - 1, -1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(6px)' }}
            >
              <IoChevronBack size={17} color="white" />
            </button>
          )}
          {items.length > 1 && index < items.length - 1 && (
            <button
              onClick={() => go(index + 1, 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(0,0,0,0.42)', backdropFilter: 'blur(6px)' }}
            >
              <IoChevronForward size={17} color="white" />
            </button>
          )}
        </div>

        {/* Dot indicators */}
        {items.length > 1 ? (
          <div className="flex justify-center items-center gap-1.5 pb-4">
            {items.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => go(i, i > index ? 1 : -1)}
                animate={{ width: i === index ? 16 : 6 }}
                transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                className="rounded-full h-[6px]"
                style={{ background: i === index ? 'var(--system-blue)' : 'var(--ios-separator)' }}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-[11px] pb-4 text-tertiary">Tap to expand</p>
        )}
      </div>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            style={{ background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)' }}
            onClick={() => setLightbox(false)}
          >
            {/* Slide counter */}
            {items.length > 1 && (
              <p
                className="absolute top-[62px] inset-x-0 text-center text-[13px] font-medium z-10 tabular-nums"
                style={{ color: 'rgba(255,255,255,0.6)' }}
              >
                {index + 1} / {items.length}
              </p>
            )}

            {/* Image / placeholder */}
            <AnimatePresence initial={false} custom={dir}>
              <motion.div
                key={index}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={SPRING}
                drag={items.length > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.25}
                onDragEnd={onLightboxDragEnd}
                onClick={(e) => e.stopPropagation()}
                className="absolute inset-0 flex items-center justify-center"
              >
                {cur.type === 'img' ? (
                  <motion.img
                    initial={{ scale: 0.88 }}
                    animate={{ scale: 1 }}
                    transition={SPRING}
                    src={projectImageUrl(cur.src)}
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="rounded-2xl object-contain"
                    style={{ maxWidth: '92vw', maxHeight: '80dvh' }}
                    draggable={false}
                  />
                ) : (
                  <motion.div
                    initial={{ scale: 0.88 }}
                    animate={{ scale: 1 }}
                    transition={SPRING}
                    className="rounded-2xl overflow-hidden"
                    style={{ width: 'min(92vw, 560px)', aspectRatio: '16 / 9' }}
                  >
                    <PlaceholderSlide project={project} />
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Lightbox arrow nav */}
            {items.length > 1 && index > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); go(index - 1, -1) }}
                className="absolute left-4 z-10 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
              >
                <IoChevronBack size={20} color="white" />
              </button>
            )}
            {items.length > 1 && index < items.length - 1 && (
              <button
                onClick={(e) => { e.stopPropagation(); go(index + 1, 1) }}
                className="absolute right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
              >
                <IoChevronForward size={20} color="white" />
              </button>
            )}

            {/* Close */}
            <button
              onClick={() => setLightbox(false)}
              className="absolute top-12 right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}
            >
              <IoClose size={22} color="white" />
            </button>

            {/* Lightbox dot indicators */}
            {items.length > 1 && (
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5 items-center z-10">
                {items.map((_, i) => (
                  <motion.button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); go(i, i > index ? 1 : -1) }}
                    animate={{ width: i === index ? 16 : 6 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    className="rounded-full h-[6px] bg-white"
                    style={{ opacity: i === index ? 1 : 0.4 }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
