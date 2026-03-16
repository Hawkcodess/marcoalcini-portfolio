'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'

function ProjectRow({ project, index, onOpen }) {
  const [hovered, setHovered] = useState(false)
  const isEven = index % 2 === 0

  const ImageBlock = (
    <div className="relative overflow-hidden bg-[#E6E0D6]" style={{ minHeight: '280px' }}>
      <motion.div
        className={`w-full h-full bg-gradient-to-br ${project.color} absolute inset-0`}
        animate={{ scale: hovered ? 1.04 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      />
      {/* Large project number watermark */}
      <span
        className="absolute bottom-0 right-6 font-heading font-bold leading-none select-none pointer-events-none"
        style={{ fontSize: '10rem', color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>
    </div>
  )

  const TextBlock = (
    <div
      className="flex flex-col justify-center px-6 md:px-12 py-10 md:py-16"
      style={{ minHeight: '280px' }}
    >
      {/* Category pill */}
      <span className="inline-flex items-center self-start font-body text-[10px] uppercase tracking-[0.18em] text-[#8C8579] border border-[#C5BFB4] rounded-full px-3 py-1 mb-8">
        {project.category}
      </span>

      {/* Title */}
      <h3
        className="font-heading font-light text-[#111111] mb-5 leading-tight"
        style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)' }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p className="font-body text-sm text-[#8C8579] leading-relaxed mb-10 max-w-sm">
        {project.description}
      </p>

      {/* View Case Study link */}
      <motion.button
        onClick={onOpen}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center gap-2 font-body text-sm font-medium text-[#111111] group self-start cursor-pointer"
        whileHover={{ x: 4 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        View Case Study
        <motion.span
          animate={{ x: hovered ? 4 : 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M3 13L13 3M13 3H7M13 3V9" stroke="#111111" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </motion.button>
    </div>
  )

  return (
    <ScrollReveal>
      <div
        className="grid grid-cols-1 md:grid-cols-2 border-t border-[#D8D2C8]"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {isEven ? (
          <>
            <div className="overflow-hidden">{ImageBlock}</div>
            <div>{TextBlock}</div>
          </>
        ) : (
          <>
            <div>{TextBlock}</div>
            <div className="overflow-hidden">{ImageBlock}</div>
          </>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-16 md:py-24 px-6 md:px-16 bg-[#EDE8DF]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#8C8579]">
            Portfolio
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2
            className="font-heading font-light text-[#111111] mt-3 mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: 1 }}
          >
            All Projects
          </h2>
        </ScrollReveal>

        {/* Alternating rows */}
        <div className="border-b border-[#D8D2C8]">
          {projects.map((project, i) => (
            <ProjectRow
              key={project.id}
              project={project}
              index={i}
              onOpen={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
