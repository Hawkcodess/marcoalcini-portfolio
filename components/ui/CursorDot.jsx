'use client'

import { useEffect, useRef } from 'react'

export default function CursorDot() {
  const dotRef = useRef(null)

  useEffect(() => {
    const dot = dotRef.current
    if (!dot) return

    const handleMouseMove = (e) => {
      dot.style.left = `${e.clientX}px`
      dot.style.top = `${e.clientY}px`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return <div ref={dotRef} className="cursor-dot hidden md:block" />
}
