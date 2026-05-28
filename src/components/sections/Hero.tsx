'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { useDonation } from '@/components/ui/DonationModal'

export function Hero() {
  const { openModal } = useDonation()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const heroImgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const orb1Y = useTransform(scrollYProgress, [0, 1], ['0px', '80px'])
  const orb2Y = useTransform(scrollYProgress, [0, 1], ['0px', '50px'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0px', '40px'])

  return (
    <section
      ref={ref}
      style={{
        paddingTop: '9rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(155deg, #F8F4EF 0%, #EEE7F2 60%, #F0E9E0 100%)',
        }}
      />

      {/* Parallax Orbs */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '500px',
          height: '500px',
          background:
            'radial-gradient(circle, rgba(184,92,122,.12), transparent)',
          filter: 'blur(80px)',
          top: '-100px',
          right: '-50px',
          y: orb1Y,
        }}
      />
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '350px',
          height: '350px',
          background:
            'radial-gradient(circle, rgba(90,45,102,.08), transparent)',
          filter: 'blur(80px)',
          bottom: 0,
          left: '-80px',
          y: orb2Y,
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 grid gap-20 items-center"
        style={{
          width: 'min(1200px, 92%)',
          margin: '0 auto',
          gridTemplateColumns: '1.1fr 0.9fr',
        }}
      >
        {/* Left: Text */}
        <motion.div style={{ y: textY }}>
          <ScrollReveal direction="up" delay={0.1}>
            {/* Tag */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.6rem',
                background: 'rgba(184,92,122,.1)',
                color: 'var(--rose)',
                padding: '0.55rem 1.1rem',
                borderRadius: '100px',
                fontSize: '1.06rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '1.8rem',
                border: '1px solid rgba(184,92,122,.2)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: 'var(--rose)',
                  animation: 'pulseDot 2s infinite',
                  display: 'block',
                }}
              />
              501(c)(3) Nonprofit
            </div>

            <h1
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.6rem, 4.8vw, 4.6rem)',
                lineHeight: 1.08,
                marginBottom: '1.4rem',
                fontWeight: 700,
              }}
            >
              Helping{' '}
              <span style={{ color: 'var(--rose)' }}>postpartum mothers</span>{' '}
              and{' '}
              <span style={{ color: 'var(--plum)' }}>vulnerable children</span>{' '}
              recover, stabilize, and thrive.
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.95,
                color: 'var(--soft-text)',
                maxWidth: '560px',
                marginBottom: '1.6rem',
              }}
            >
              Through practical care and community support, we walk alongside
              mothers and children during their most critical seasons — from the
              third trimester through early childhood.
            </p>

            {/* Pill list */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
                marginBottom: '2.2rem',
              }}
            >
              {[
                'Third Trimester Prenatal Care',
                'Postpartum Care & Recovery',
                'Early Intervention Support',
                'Developmental Milestone Guidance',
                'Community Advocacy & Outreach',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '1.04rem',
                    color: 'var(--ink)',
                    fontWeight: 500,
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '2px',
                      background:
                        'linear-gradient(90deg, var(--rose), var(--gold))',
                      borderRadius: '2px',
                      flexShrink: 0,
                      display: 'block',
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              <button onClick={openModal} className="btn btn-primary" style={{ border: 'none', cursor: 'pointer' }}>
                Help a Mother Today
              </button>
              <button onClick={openModal} className="btn btn-rose" style={{ border: 'none', cursor: 'pointer' }}>
                Sponsor a Child Today
              </button>
              <a href="#impact" className="btn btn-outline">
                See Our Impact
              </a>
            </div>

            {/* Trust signals */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {[
                '100% goes to the mission',
                'Tax-deductible',
                'Community-powered',
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.8rem',
                    color: 'var(--soft-text)',
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </motion.div>

        {/* Right: Image */}
        <ScrollReveal direction="scale" delay={0.2}>
          <div className="relative">
            {/* Main image */}
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-xl)',
                position: 'relative',
              }}
            >
              <motion.div style={{ y: heroImgY }}>
                <Image
                  src="/Heroimage.jpg"
                  alt="A mother holding her newborn — Hands of Hope"
                  width={700}
                  height={700}
                  className="w-full object-cover"
                  style={{ height: '820px', objectPosition: 'center top', marginTop: '-160px', transform: 'scale(1.3)', transformOrigin: 'center top' }}
                  priority
                />
              </motion.div>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(to top, rgba(61,29,71,.45) 0%, transparent 55%)',
                }}
              />
            </div>

            {/* Floating quote cards */}
            <motion.div
              className="floating-card hidden lg:block"
              style={{ bottom: '2rem', left: '-2.8rem', maxWidth: '230px' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.65,
                }}
              >
                More than one-third of women experience lasting health problems after childbirth — yet most never receive the follow-up care they need.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '0.6rem',
                }}
              >
                <span style={{ width: '12px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)' }}>
                  World Health Organization
                </span>
              </div>
            </motion.div>

            <motion.div
              className="floating-card hidden lg:block"
              style={{ top: '2rem', right: '-0.6rem', maxWidth: '150px' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 2.5 }}
            >
              <p
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.05rem',
                  fontStyle: 'italic',
                  color: 'var(--ink)',
                  lineHeight: 1.65,
                }}
              >
                Approximately 1 in 6 children in the US have a developmental delay or disability. Fewer than half are identified before starting school.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  marginTop: '0.6rem',
                }}
              >
                <span style={{ width: '12px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                <span style={{ fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--soft-text)' }}>
                  Nat. Center on Birth Defects & Developmental Disabilities, CDC
                </span>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>

      {/* Mobile grid fix */}
      <style>{`
        @media (max-width: 1024px) {
          section > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
          section > div[style*="grid-template-columns"] > div:last-child {
            order: -1;
          }
        }
      `}</style>
    </section>
  )
}
