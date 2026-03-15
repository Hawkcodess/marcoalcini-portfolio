'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      animate={{
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? 'auto' : 'none',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-[#E5E5E5] backdrop-blur-md bg-[#FAFAFA]/80"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="font-heading text-lg font-light tracking-wide text-[#111111] hover:opacity-70 transition-opacity"
        >
          Marco Alcini
        </a>

        {/* Right side */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-body text-sm text-[#6B7280] hover:text-[#111111] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="font-body text-sm border border-[#111111] text-[#111111] px-5 py-2 rounded-full hover:bg-[#111111] hover:text-white transition-all duration-200"
          >
            Start a Project
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
