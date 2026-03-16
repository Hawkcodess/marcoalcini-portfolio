'use client'

import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ui/ScrollReveal'

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="bg-[#111111] text-white py-20 md:py-32 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Main content — centered */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="font-body text-xs uppercase tracking-[0.15em] text-white/40 mb-8 block">
              Get In Touch
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-5xl md:text-8xl font-light italic text-white leading-none mb-8">
              Let's build something great.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="font-body text-base text-white/50 mb-10">
              Have a project in mind? I'd love to hear about it.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.a
              href="mailto:hello@marcoalcini.com"
              className="font-body text-sm bg-white text-[#111111] px-8 py-4 rounded-full inline-block hover:bg-white/90 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              hello@marcoalcini.com
            </motion.a>
          </ScrollReveal>

          <ScrollReveal delay={0.35}>
            <div className="flex items-center justify-center gap-3 mt-8">
              <span className="font-body text-xs text-white/30">or reach out via</span>
              <motion.a
                href="https://linkedin.com/in/marcoalcini"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-body text-xs text-white/50 hover:text-white transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <LinkedInIcon />
                LinkedIn
              </motion.a>
            </div>
          </ScrollReveal>
        </div>

        {/* Footer */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-body text-xs text-white/30">© 2025 Marco Alcini</span>
          <span className="font-body text-xs text-white/30">Creative Developer & Web Builder</span>
        </div>
      </div>
    </section>
  )
}
