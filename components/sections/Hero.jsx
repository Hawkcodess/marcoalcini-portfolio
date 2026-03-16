'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    id: 1,
    label: 'Web Design',
    year: '2024',
    bg: 'linear-gradient(145deg, #111111 0%, #2a2a2a 100%)',
    baseX: -190,
    rotation: -10,
    scale: 0.91,
    factor: 20,
    delay: 0.45,
    zIndex: 1,
  },
  {
    id: 2,
    label: 'E-Commerce',
    year: '2024',
    bg: 'linear-gradient(145deg, #FF5500 0%, #CC3300 100%)',
    baseX: -64,
    rotation: -3,
    scale: 0.97,
    factor: 34,
    delay: 0.55,
    zIndex: 4,
  },
  {
    id: 3,
    label: 'Web App',
    year: '2024',
    bg: 'linear-gradient(145deg, #1a2a4a 0%, #2d5a9e 100%)',
    baseX: 64,
    rotation: 4,
    scale: 0.97,
    factor: 28,
    delay: 0.6,
    zIndex: 3,
  },
  {
    id: 4,
    label: 'CMS',
    year: '2024',
    bg: 'linear-gradient(145deg, #1C1C1E 0%, #48484A 100%)',
    baseX: 190,
    rotation: 11,
    scale: 0.91,
    factor: 16,
    delay: 0.7,
    zIndex: 2,
  },
]

// Single-line word reveal — inline-block so words sit on the same line
function InlineWordReveal({ children, delay }) {
  return (
    <span
      className="inline-block overflow-hidden"
      style={{ verticalAlign: 'bottom' }}
    >
      <motion.span
        className="inline-block"
        style={{ transformOrigin: 'bottom' }}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [ready, setReady] = useState(false)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [viewportWidth, setViewportWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setReady(true), 900)
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }
    const handleResize = () => setViewportWidth(window.innerWidth)
    setViewportWidth(window.innerWidth)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('resize', handleResize)
    return () => {
      clearTimeout(t)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const cardSpread = viewportWidth < 480 ? 0.45 : viewportWidth < 640 ? 0.6 : viewportWidth < 768 ? 0.75 : 1
  const cardSize = viewportWidth < 480 ? { w: 100, h: 126 } : viewportWidth < 640 ? { w: 116, h: 146 } : { w: 140, h: 176 }

  return (
    <section
      id="home"
      className="relative bg-[#EDE8DF] flex flex-col justify-between overflow-hidden select-none"
      style={{ height: '100dvh', paddingTop: '1.75rem', paddingBottom: '1.75rem' }}
    >
      {/* ── Top bar ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.7 }}
        className="flex items-center justify-between px-8 md:px-16"
      >
        <span className="font-body text-[11px] uppercase tracking-[0.18em] text-[#8C8579]">
          London, UK
        </span>
        <span className="font-body text-[11px] text-[#8C8579] hidden sm:block">
          hello@marcoalcini.com
        </span>
        <span className="flex items-center gap-2 font-body text-[11px] text-[#8C8579]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
          </span>
          Available
        </span>
      </motion.div>

      {/* ── Centre block ── */}
      <div className="flex flex-col items-center text-center px-4">

        {/* Name — single line, light italic */}
        <h1
          className="font-heading font-light italic text-[#111111] whitespace-nowrap mb-5"
          style={{
            fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
            lineHeight: 1,
            letterSpacing: '-0.01em',
          }}
        >
          <InlineWordReveal delay={0.25}>Marco&nbsp;</InlineWordReveal>
          <InlineWordReveal delay={0.38}>Alcini</InlineWordReveal>
        </h1>

        {/* Floating cards fan */}
        <div
          className="relative flex items-center justify-center w-full"
          style={{ height: '190px', marginBottom: '1.25rem' }}
        >
          {cards.map((card) => {
            const isHovered = hoveredCard === card.id
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: card.delay, duration: 0.9 }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: 'absolute',
                  width: `${cardSize.w}px`,
                  height: `${cardSize.h}px`,
                  background: card.bg,
                  borderRadius: '18px',
                  boxShadow: isHovered
                    ? '0 36px 80px rgba(0,0,0,0.32)'
                    : '0 20px 50px rgba(0,0,0,0.18)',
                  overflow: 'hidden',
                  zIndex: isHovered ? 10 : card.zIndex,
                  cursor: 'pointer',
                  transform: `translateX(calc(${(card.baseX + mousePos.x * card.factor) * cardSpread}px)) translateY(${mousePos.y * card.factor * 0.45 + (isHovered ? -14 : 0)}px) rotate(${card.rotation + mousePos.x * 1.5 + (isHovered ? -card.rotation * 0.4 : 0)}deg) scale(${card.scale * (isHovered ? 1.09 : 1)})`,
                  transition: ready
                    ? 'transform 0.45s cubic-bezier(0.25, 0.1, 0.25, 1), box-shadow 0.3s ease'
                    : 'none',
                  willChange: 'transform',
                }}
              >
                <div className="w-full h-full flex flex-col justify-between p-4 relative">
                  <span
                    className="font-heading font-bold leading-none"
                    style={{ fontSize: '3rem', color: 'rgba(255,255,255,0.07)' }}
                  >
                    0{card.id}
                  </span>
                  <div>
                    <span className="block font-body uppercase tracking-widest" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.5)' }}>
                      {card.label}
                    </span>
                    <span className="block font-body" style={{ fontSize: '9px', color: 'rgba(255,255,255,0.28)', marginTop: '2px' }}>
                      {card.year}
                    </span>
                  </div>

                  {/* Hover overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(255,255,255,0.07)',
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        border: '1px solid rgba(255,255,255,0.4)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transform: isHovered ? 'scale(1)' : 'scale(0.5)',
                        transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1)',
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 12L12 2M12 2H5M12 2V9" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Orange role text */}
        <div
          className="font-heading font-bold uppercase text-center"
          style={{
            fontSize: 'clamp(1.75rem, 3.8vw, 3.4rem)',
            letterSpacing: '-0.02em',
            lineHeight: 0.95,
            color: '#FF5500',
          }}
        >
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.9 }}>
            Creative Developer
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.9 }}>
            &amp; Web Builder
          </motion.div>
        </div>
      </div>

      {/* ── Tagline — standalone flex child so justify-between centres it naturally ── */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        className="font-body text-sm text-[#8C8579] text-center max-w-sm leading-relaxed mx-auto px-6"
      >
        I design and build modern websites and web apps for businesses that want to stand out.
      </motion.p>

      {/* ── CTA buttons ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.7 }}
        className="flex items-center justify-center gap-3 px-6"
      >
        <motion.a
          href="#work"
          onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="font-body text-sm bg-[#111111] text-white px-8 py-3.5 rounded-full tracking-wide inline-block cursor-pointer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          View Work
        </motion.a>
        <motion.a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          className="font-body text-sm border border-[#C5BFB4] text-[#111111] px-8 py-3.5 rounded-full tracking-wide inline-block cursor-pointer hover:border-[#111111] transition-colors duration-200"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.96 }}
        >
          Start a Project
        </motion.a>
      </motion.div>

    </section>
  )
}
