'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

const featuredProjects = [
  {
    number: '01',
    title: 'Webnest CMS Platform',
    description:
      'A full-stack CMS built for web agencies to manage client websites, billing and content at scale.',
    tags: ['React', 'Node.js', 'SQLite'],
    year: '2024',
    gradient: 'from-[#1a1a2e] to-[#16213e]',
  },
  {
    number: '02',
    title: 'Restaurant Digital Suite',
    description:
      'Complete digital presence for a local restaurant chain — website, online ordering, and reservation management.',
    tags: ['Next.js', 'Stripe', 'Tailwind'],
    year: '2024',
    gradient: 'from-[#0f0f0f] to-[#2d2d2d]',
  },
]

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <span className="font-body text-xs uppercase tracking-[0.15em] text-[#6B7280]">
            Featured Work
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-heading text-5xl md:text-7xl font-light mt-4 mb-16">
            Selected Projects
          </h2>
        </ScrollReveal>

        {/* Cards */}
        <div className="flex flex-col gap-8">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.number} delay={i * 0.1}>
              <motion.div
                className="relative overflow-hidden rounded-2xl h-[500px] md:h-[600px] cursor-pointer group"
                whileHover="hover"
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                />

                {/* Large project number */}
                <span
                  className="absolute right-8 bottom-0 font-heading font-bold leading-none select-none pointer-events-none"
                  style={{ fontSize: '200px', color: 'rgba(255,255,255,0.04)' }}
                >
                  {project.number}
                </span>

                {/* Hover arrow */}
                <motion.div
                  className="absolute top-8 right-8 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/60"
                  variants={{ hover: { rotate: 45, borderColor: 'rgba(255,255,255,0.6)', color: 'rgba(255,255,255,1)' } }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowIcon />
                </motion.div>

                {/* Bottom overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-heading text-3xl md:text-4xl font-light text-white">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-white/60 max-w-md mt-2 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 mt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-body text-xs text-white/60 border border-white/20 px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="font-body text-xs text-white/40 ml-auto">
                      {project.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
