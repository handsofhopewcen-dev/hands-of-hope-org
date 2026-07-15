'use client'

import { motion } from 'framer-motion'
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

export function WatchStory() {
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

        {/* ── Cinematic Story Teaser (replaces video until ready) ── */}
        <ScrollReveal direction="up" delay={0.1}>
          <motion.div
            style={{
              position: 'relative',
              borderRadius: '2rem',
              overflow: 'hidden',
              aspectRatio: '16/9',
              boxShadow: 'var(--shadow-xl)',
              marginBottom: '3.5rem',
              cursor: 'default',
            }}
            whileHover={{ scale: 1.008 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Background image */}
            <Image
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1600&auto=format&fit=crop"
              alt="A mother holding her child — Hands of Hope story"
              fill
              className="object-cover"
              style={{ objectPosition: 'center 30%' }}
              sizes="100vw"
            />

            {/* Multi-layer cinematic gradient */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(135deg, rgba(35,10,45,.88) 0%, rgba(61,29,71,.70) 45%, rgba(90,29,60,.55) 100%)',
              }}
            />

            {/* Subtle grain texture overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.04\'/%3E%3C/svg%3E")',
                opacity: 0.4,
                pointerEvents: 'none',
              }}
            />

            {/* Content */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(2rem, 5vw, 4rem)',
                textAlign: 'center',
              }}
            >
              {/* "Coming Soon" badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.55rem',
                  background: 'rgba(215,161,74,.18)',
                  border: '1px solid rgba(215,161,74,.45)',
                  borderRadius: '100px',
                  padding: '0.45rem 1.1rem',
                  marginBottom: '2rem',
                }}
              >
                <span
                  style={{
                    width: '7px',
                    height: '7px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                    display: 'block',
                    animation: 'pulseDot 2s infinite',
                  }}
                />
                <span
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    color: 'var(--gold-light)',
                  }}
                >
                  Story Coming Soon
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35, duration: 0.7 }}
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(1.7rem, 4vw, 3.4rem)',
                  fontWeight: 700,
                  color: '#fff',
                  lineHeight: 1.18,
                  maxWidth: '680px',
                  marginBottom: '2rem',
                }}
              >
                Our story is being written —{' '}
                <span style={{ color: 'var(--gold-light)', fontStyle: 'italic' }}>
                  one life at a time.
                </span>
              </motion.h3>

              {/* Founder quote */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.7 }}
                style={{
                  maxWidth: '560px',
                  background: 'rgba(255,255,255,.07)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,.14)',
                  borderRadius: '1.2rem',
                  padding: 'clamp(1.2rem, 3vw, 1.8rem) clamp(1.4rem, 4vw, 2rem)',
                }}
              >
                <p
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(1rem, 2vw, 1.22rem)',
                    fontStyle: 'italic',
                    color: 'rgba(255,255,255,.92)',
                    lineHeight: 1.75,
                    marginBottom: '1rem',
                  }}
                >
                  "Hands of Hope was born out of two distinct realities I live every day: my professional career as a licensed Pediatric Occupational Therapist with nearly ten years of experience, and my personal journey as a first-time mom to twins."
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '1.5px',
                      background: 'var(--gold)',
                      display: 'block',
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--gold-light)',
                    }}
                  >
                    Dierdre Adeniyi, OTR/L · Founder &amp; Executive Director
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
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

/*
 * ── RESTORE VIDEO ─────────────────────────────────────────────────────────────
 * When the Our Story video is ready, replace the "Cinematic Story Teaser" block
 * above with the original video player. The full original WatchStory component
 * (with Vimeo embed, floating mini-player, and autoplay-on-scroll logic) is
 * preserved in git history — run:
 *
 *   git show HEAD~2:src/components/sections/WatchStory.tsx
 *
 * to retrieve it, or just ask Claude to restore the video version.
 * ─────────────────────────────────────────────────────────────────────────────
 */
