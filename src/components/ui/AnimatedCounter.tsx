'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
  decimals?: number
}

export function AnimatedCounter({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className,
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const hasStarted = useRef(false)

  useEffect(() => {
    if (!isInView || hasStarted.current) return
    hasStarted.current = true

    const startTime = performance.now()
    const startValue = 0

    const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4)

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutQuart(progress)
      const currentValue = startValue + (end - startValue) * easedProgress

      setCount(parseFloat(currentValue.toFixed(decimals)))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, end, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString('en-US', {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  )
}

// Progress bar that animates when in view
interface AnimatedBarProps {
  percentage: number // 0-100
  className?: string
  barClassName?: string
  delay?: number
  style?: React.CSSProperties
}

export function AnimatedBar({
  percentage,
  className,
  barClassName,
  delay = 0,
  style,
}: AnimatedBarProps) {
  const [width, setWidth] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setWidth(percentage)
      }, delay)
      return () => clearTimeout(timer)
    }
  }, [isInView, percentage, delay])

  return (
    <div
      ref={ref}
      className={`overflow-hidden rounded-full ${className || ''}`}
      style={style}
    >
      <div
        className={`h-full rounded-full transition-all duration-[1400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${barClassName || ''}`}
        style={{ width: `${width}%` }}
      />
    </div>
  )
}
