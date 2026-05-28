'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const storyPoints = [
  {
    icon: '💜',
    title: 'Compassionate Care',
    desc: 'Every family is met with dignity, respect, and unconditional support at every step of their journey.',
  },
  {
    icon: '🌱',
    title: 'Community Rooted',
    desc: 'We build lasting village networks that surround mothers and children with the support they need to thrive.',
  },
  {
    icon: '✨',
    title: 'Lasting Transformation',
    desc: 'From crisis to stability — we walk alongside families until they are empowered to flourish independently.',
  },
]

const FLOAT_WIDTH = 340
const FLOAT_HEIGHT = Math.round(FLOAT_WIDTH * 9 / 16)
const FLOAT_HEADER = 38

export function WatchStory() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [isFloating, setIsFloating] = useState(false)
  const [dismissed, setDismissed] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  /* ── Auto-load on scroll in; float when scrolled past ───── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVideoLoaded(true)           // autoplay as section enters view
          if (!dismissed) setIsFloating(false)
        } else {
          if (!dismissed) setIsFloating(true) // float when section leaves view
        }
      },
      { threshold: 0.25 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [dismissed])

  function dismiss() {
    setDismissed(true)
    setIsFloating(false)
  }

  function scrollBackAndExpand() {
    setIsFloating(false)
    document.getElementById('watch')?.scrollIntoView({ behavior: 'smooth' })
  }

  const vimeoSrc =
    'https://player.vimeo.com/video/1196456084?autoplay=1&loop=1&title=0&byline=0&portrait=0'

  return (
    <section
      id="watch"
      style={{
        background: 'var(--cream-dark)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 100%, rgba(90,45,102,.05), transparent 60%), radial-gradient(ellipse at 100% 0%, rgba(184,92,122,.05), transparent 60%)',
        }}
      />

      <div className="relative z-10" style={{ width: 'min(1200px, 92%)', margin: '0 auto' }}>

        {/* Header */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              Watch Our Story
            </span>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
                lineHeight: 1.15,
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: '0.8rem',
              }}
            >
              Real lives. Real hope.{' '}
              <span style={{ color: 'var(--plum)' }}>Real change.</span>
            </h2>
            <p style={{ color: 'var(--soft-text)', fontSize: '1rem', lineHeight: 1.85, maxWidth: '580px', margin: '0 auto' }}>
              Watch how Hands of Hope is transforming the lives of postpartum
              mothers, children, and families across Greater Houston through
              compassionate care and practical community support.
            </p>
          </div>
        </ScrollReveal>

        {/* Video container — keeps layout space; iframe moves via CSS */}
        <ScrollReveal direction="up" delay={0.1}>
          <div ref={sectionRef}>
            <div
              style={{
                borderRadius: '2rem',
                overflow: isFloating ? 'visible' : 'hidden',
                boxShadow: isFloating ? 'none' : 'var(--shadow-xl)',
                position: 'relative',
                aspectRatio: '16/9',
                background: isFloating ? 'transparent' : '#1a0a15',
                marginBottom: '3.5rem',
              }}
            >
              {/* Placeholder shown when floating so layout doesn't collapse */}
              {isFloating && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '2rem',
                    background: 'var(--mist)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    border: '2px dashed var(--line)',
                  }}
                  onClick={scrollBackAndExpand}
                >
                  <span style={{ color: 'var(--soft-text)', fontSize: '0.9rem', fontWeight: 600 }}>
                    ▶ Video is playing in mini-player ↘
                  </span>
                </div>
              )}

              {/* Thumbnail / play button — before video loads */}
              {!videoLoaded && (
                <>
                  <Image
                    src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1400&auto=format&fit=crop"
                    alt="Our story thumbnail"
                    fill
                    className="object-cover"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer"
                    style={{ background: 'linear-gradient(135deg, rgba(61,29,71,.72), rgba(184,92,122,.3))' }}
                    onClick={() => setVideoLoaded(true)}
                    whileHover={{ background: 'linear-gradient(135deg, rgba(61,29,71,.5), rgba(184,92,122,.2))' }}
                  >
                    <motion.div
                      style={{ width: '96px', height: '96px', background: 'rgba(255,255,255,.96)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'var(--shadow-lg)' }}
                      whileHover={{ scale: 1.12 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor" style={{ color: 'var(--plum)', marginLeft: '6px' }}>
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </motion.div>
                  </motion.div>
                </>
              )}

              {/* ── SINGLE IFRAME — position switches via CSS ── */}
              {videoLoaded && (
                <iframe
                  src={vimeoSrc}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  style={
                    isFloating
                      ? {
                          position: 'fixed',
                          bottom: '16px',
                          right: '1.8rem',
                          width: `${FLOAT_WIDTH}px`,
                          height: `${FLOAT_HEIGHT}px`,
                          border: 'none',
                          zIndex: 9999,
                          borderRadius: '0 0 1.2rem 1.2rem',
                        }
                      : {
                          position: 'absolute',
                          inset: 0,
                          width: '100%',
                          height: '100%',
                          border: 'none',
                        }
                  }
                />
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Story points */}
        <ScrollReveal direction="up" delay={0.15}>
          <div className="watch-points" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {storyPoints.map((sp, i) => (
              <motion.div
                key={i}
                style={{ background: '#fff', borderRadius: '1.4rem', padding: '1.8rem', border: '1px solid var(--line)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-sm)' }}
              >
                <div style={{ width: '46px', height: '46px', minWidth: '46px', borderRadius: '0.9rem', background: 'var(--mist)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem' }}>
                  {sp.icon}
                </div>
                <div>
                  <h4 style={{ fontWeight: 600, fontSize: '1.06rem', marginBottom: '0.3rem', color: 'var(--plum)' }}>{sp.title}</h4>
                  <p style={{ fontSize: '0.96rem', lineHeight: 1.75, color: 'var(--soft-text)' }}>{sp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal direction="up" delay={0.2}>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#get-help" className="btn btn-primary">Get Support</a>
            <a href="#donate" className="btn btn-outline">Donate Today</a>
          </div>
        </ScrollReveal>
      </div>

      {/* ── Floating mini-player header bar ─────────────────── */}
      <AnimatePresence>
        {isFloating && videoLoaded && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: 'fixed',
              bottom: `${16 + FLOAT_HEIGHT}px`,
              right: '1.8rem',
              width: `${FLOAT_WIDTH}px`,
              zIndex: 9999,
              borderRadius: '1.2rem 1.2rem 0 0',
              background: 'var(--plum-deep)',
              padding: '0 0.9rem',
              height: `${FLOAT_HEADER}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 -4px 24px rgba(35,23,31,.2)',
            }}
          >
            <span style={{ fontSize: '0.74rem', fontWeight: 600, color: 'rgba(255,255,255,.85)', fontFamily: '"Jost", sans-serif', letterSpacing: '0.04em', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis', maxWidth: '160px' }}>
              Our Story — Hands of Hope
            </span>

            <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>

              {/* Expand back */}
              <button
                onClick={scrollBackAndExpand}
                title="Expand"
                style={{ background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: '0.4rem', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              </button>

              {/* Close */}
              <button
                onClick={dismiss}
                title="Close"
                style={{ background: 'rgba(255,255,255,.12)', border: 'none', borderRadius: '0.4rem', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#fff' }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .watch-points { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 1024px) and (min-width: 769px) {
          .watch-points { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
