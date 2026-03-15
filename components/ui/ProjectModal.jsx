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
            className="fixed z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-8 shadow-2xl"
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
            <div className={`relative h-64 rounded-2xl bg-gradient-to-br ${project.color} overflow-hidden mb-6`}>
              <span
                className="absolute top-4 right-4 text-[160px] font-bold leading-none select-none pointer-events-none"
                style={{ color: 'rgba(255,255,255,0.06)' }}
              >
                {String(project.id).padStart(2, '0')}
              </span>
            </div>

            {/* Content */}
            <span className="font-body text-xs uppercase tracking-widest text-[#6B7280]">
              {project.category}
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-[#111111] mt-1 mb-4">
              {project.title}
            </h2>
            <p className="font-body text-base text-[#6B7280] leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-body text-xs text-[#6B7280] bg-[#F5F5F5] px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Year */}
            <span className="font-body text-xs text-[#6B7280]/60">{project.year}</span>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
