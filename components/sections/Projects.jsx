'use client'

import { useState } from 'react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import ProjectCard from '@/components/ui/ProjectCard'
import ProjectModal from '@/components/ui/ProjectModal'
import { projects } from '@/data/projects'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#6B7280]">
            Portfolio
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-5xl md:text-7xl font-light mt-4 mb-4">
            All Projects
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="font-body text-base text-[#6B7280] mb-16">
            A selection of recent client work and personal builds.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.07} className="h-full">
              <ProjectCard
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  )
}
