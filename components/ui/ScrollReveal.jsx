'use client'

import { motion } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}) {
  const getInitial = () => {
    switch (direction) {
      case 'left':
        return { opacity: 0, x: -40, y: 0 }
      case 'right':
        return { opacity: 0, x: 40, y: 0 }
      case 'up':
      default:
        return { opacity: 0, y: 40, x: 0 }
    }
  }

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  )
}
