'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect } from 'react'

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
    </svg>
  )
}

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.16, 1, 0.3, 1] },
})

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            className="fixed z-50 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl"
            style={{ top: '50%', left: '50%', x: '-50%', y: '-50%' }}
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center text-[#6B7280] hover:bg-[#F5F5F5] hover:text-[#111111] transition-colors z-10"
              aria-label="Close modal"
            >
              <CloseIcon />
            </button>

            {/* Colored area */}
            <motion.div
              className={`relative h-64 rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-6`}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className="absolute top-4 right-4 text-[160px] font-bold leading-none select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.06)' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                {String(project.id).padStart(2, '0')}
              </motion.span>
            </motion.div>

            {/* Category */}
            <motion.span
              className="font-body text-xs uppercase tracking-widest text-[#6B7280]"
              {...fadeUp(0.2)}
            >
              {project.category}
            </motion.span>

            {/* Title */}
            <motion.h2
              className="font-heading text-3xl md:text-4xl font-light text-[#111111] mt-1 mb-4"
              {...fadeUp(0.25)}
            >
              {project.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              className="font-body text-base text-[#6B7280] leading-relaxed mb-6"
              {...fadeUp(0.3)}
            >
              {project.description}
            </motion.p>

            {/* Tags */}
            <motion.div
              className="flex flex-wrap gap-2 mb-4"
              {...fadeUp(0.35)}
            >
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs text-[#6B7280] bg-[#F5F5F5] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Year */}
            <motion.span
              className="font-body text-xs text-[#6B7280]/60"
              {...fadeUp(0.4)}
            >
              {project.year}
            </motion.span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
