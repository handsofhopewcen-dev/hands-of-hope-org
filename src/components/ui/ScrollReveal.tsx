'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale'

interface ScrollRevealProps {
  children: ReactNode
  direction?: Direction
  delay?: number
  duration?: number
  className?: string
  style?: React.CSSProperties
  once?: boolean
  threshold?: number
}

const variants = {
  up: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  style,
  once = true,
  threshold = 0.1,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered children container
interface StaggerProps {
  children: ReactNode
  stagger?: number
  delay?: number
  className?: string
  style?: React.CSSProperties
}

export function StaggerContainer({ children, stagger = 0.1, delay = 0, className, style }: StaggerProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: Direction
}) {
  return (
    <motion.div
      className={className}
      variants={variants[direction]}
      transition={{ duration: 0.65, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  )
}
