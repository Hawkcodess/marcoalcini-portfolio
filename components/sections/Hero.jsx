'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const floatingCards = [
  {
    style: { position: 'absolute', top: '8%', right: '0%', width: '240px', height: '300px' },
    rotation: '-5deg',
    factor: 30,
    bg: '#111111',
    label: 'Web Design',
    number: '01',
    delay: 0.6,
  },
  {
    style: { position: 'absolute', top: '32%', right: '25%', width: '200px', height: '260px' },
    rotation: '7deg',
    factor: 50,
    bg: '#0A84FF',
    label: 'Development',
    number: '02',
    delay: 0.7,
  },
  {
    style: { position: 'absolute', top: '60%', right: '5%', width: '180px', height: '220px' },
    rotation: '-2deg',
    factor: 20,
    bg: '#1C1C1E',
    label: 'Strategy',
    number: '03',
    delay: 0.8,
  },
]

function WordReveal({ children, delay }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        style={{ display: 'block', transformOrigin: 'bottom' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const mouse = useRef({ x: 0, y: 0 })
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5)
      const y = (e.clientY / window.innerHeight - 0.5)
      mouse.current = { x, y }
      setMousePos({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleScrollToWork = (e) => {
    e.preventDefault()
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScrollToContact = (e) => {
    e.preventDefault()
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 pt-24 pb-16">
        <div className="flex items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="w-full lg:w-[55%] flex flex-col justify-center">
            {/* Top bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="flex items-center justify-between mb-10"
            >
              <span className="font-body text-xs uppercase tracking-[0.15em] text-[#6B7280]">
                London, UK
              </span>
              <span className="flex items-center gap-2 font-body text-xs text-[#6B7280]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Available for projects
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-heading font-light italic leading-none mb-6" style={{ fontSize: 'clamp(5rem, 10vw, 9rem)' }}>
              <WordReveal delay={0.1}>Marco</WordReveal>
              <WordReveal delay={0.2}>Alcini</WordReveal>
            </h1>

            {/* Subtitle */}
            <div className="font-body font-normal text-[#6B7280] text-xl md:text-2xl mb-8">
              <WordReveal delay={0.45}>Creative Developer</WordReveal>
              <WordReveal delay={0.55}>& Web Builder</WordReveal>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-12 h-px bg-[#E5E5E5] mb-8"
            />

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="font-body text-base text-[#6B7280] max-w-sm mb-10 leading-relaxed"
            >
              I design and build modern websites and web apps for businesses that want to stand out.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#work"
                onClick={handleScrollToWork}
                className="font-body text-sm bg-[#111111] text-white px-8 py-3.5 rounded-full tracking-wide inline-block"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                View Work
              </motion.a>
              <motion.a
                href="#contact"
                onClick={handleScrollToContact}
                className="font-body text-sm border border-[#111111] text-[#111111] px-8 py-3.5 rounded-full tracking-wide inline-block hover:bg-[#111111] hover:text-white transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                Start a Project
              </motion.a>
            </motion.div>
          </div>

          {/* Right: Floating Cards */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] pointer-events-none">
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.number}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: card.delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  ...card.style,
                  transform: `translate(${mousePos.x * card.factor}px, ${mousePos.y * card.factor}px) rotate(${card.rotation})`,
                  transition: 'transform 0.6s cubic-bezier(0.25,0.1,0.25,1)',
                  backgroundColor: card.bg,
                }}
                className="rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Large number */}
                <span className="absolute top-4 right-4 text-8xl font-bold leading-none select-none" style={{ color: 'rgba(255,255,255,0.08)' }}>
                  {card.number}
                </span>
                {/* Label */}
                <span className="absolute bottom-6 left-6 font-body text-xs uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  {card.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-xs uppercase tracking-[0.15em] text-[#6B7280]">Scroll</span>
        <div className="w-px h-10 bg-[#E5E5E5] overflow-hidden relative">
          <motion.div
            className="w-full bg-[#111111]"
            style={{ height: '100%' }}
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
