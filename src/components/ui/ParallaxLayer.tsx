'use client'

import { motion, useScroll, useTransform, MotionValue } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxLayerProps {
  children: ReactNode
  speed?: number // negative = moves up, positive = moves down relative to scroll
  className?: string
  opacity?: [number, number] // start, end opacity
}

export function ParallaxLayer({
  children,
  speed = -0.2,
  className,
  opacity,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  const opacityValue = opacity
    ? useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [opacity[0], 1, 1, opacity[1]])
    : undefined

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, opacity: opacityValue }}>
        {children}
      </motion.div>
    </div>
  )
}

// Full-section parallax background
interface ParallaxSectionProps {
  children: ReactNode
  backgroundElement?: ReactNode
  className?: string
  bgClassName?: string
  parallaxSpeed?: number
}

export function ParallaxSection({
  children,
  backgroundElement,
  className,
  bgClassName,
  parallaxSpeed = -0.15,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', `${parallaxSpeed * 100}%`])

  return (
    <div ref={ref} className={`relative overflow-hidden ${className || ''}`}>
      {backgroundElement && (
        <motion.div
          className={`absolute inset-0 ${bgClassName || ''}`}
          style={{ y: bgY }}
        >
          {backgroundElement}
        </motion.div>
      )}
      <div className="relative z-10">{children}</div>
    </div>
  )
}

// Floating orb with parallax
export function ParallaxOrb({
  className,
  speed = -0.1,
}: {
  className?: string
  speed?: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0px', `${speed * 600}px`])

  return (
    <motion.div
      ref={ref}
      className={`absolute rounded-full pointer-events-none ${className || ''}`}
      style={{ y }}
    />
  )
}
