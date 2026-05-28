'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ImageRevealProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  wrapperClassName?: string
  delay?: number
  priority?: boolean
  overlayClassName?: string
}

export function ImageReveal({
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
  delay = 0,
  priority = false,
  overlayClassName,
}: ImageRevealProps) {
  return (
    <div className={`relative overflow-hidden ${wrapperClassName || ''}`}>
      {/* Reveal overlay that slides away */}
      <motion.div
        className="absolute inset-0 z-10 origin-left"
        style={{ background: 'var(--mist)' }}
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.9,
          delay,
          ease: [0.76, 0, 0.24, 1],
        }}
      />
      {/* Image scales in slightly as it reveals */}
      <motion.div
        className="w-full h-full"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 1.2,
          delay: delay + 0.1,
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          priority={priority}
        />
      </motion.div>
      {overlayClassName && (
        <div className={overlayClassName} />
      )}
    </div>
  )
}

// Simpler hover-scale image with gradient overlay
interface HoverImageProps {
  src: string
  alt: string
  className?: string
  overlayClassName?: string
  fill?: boolean
  width?: number
  height?: number
  priority?: boolean
}

export function HoverImage({
  src,
  alt,
  className,
  overlayClassName,
  fill,
  width,
  height,
  priority,
}: HoverImageProps) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        className="w-full h-full"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={`object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
            onLoad={() => setLoaded(true)}
            priority={priority}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 800}
            height={height || 600}
            className={`w-full h-full object-cover transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
            onLoad={() => setLoaded(true)}
            priority={priority}
          />
        )}
      </motion.div>
      {overlayClassName && <div className={overlayClassName} />}
    </div>
  )
}
