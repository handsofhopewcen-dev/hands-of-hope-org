'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const steps = [
  {
    num: '1',
    title: 'Reach Out',
    desc: 'Families connect with our team confidentially through referrals, outreach programs, or direct contact. No judgment. Just help.',
    color: 'var(--rose)',
  },
  {
    num: '2',
    title: 'Needs Assessment',
    desc: "We listen carefully, identify urgent needs, and connect families to the right resources and support systems — tailored to where they are.",
    color: 'var(--plum)',
  },
  {
    num: '3',
    title: 'Care & Restoration',
    desc: 'Through practical care, education, and ongoing support, families begin rebuilding stability and hope — one day at a time.',
    color: 'var(--gold)',
  },
]

export function HowWeHelp() {
  return (
    <section
      style={{
        background: 'var(--cream)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative wave top */}
      <div
        className="absolute top-0 left-0 right-0 pointer-events-none"
        style={{ height: '6px', background: 'linear-gradient(90deg, var(--rose), var(--plum), var(--gold))' }}
      />

      {/* Background orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(184,92,122,.06), transparent)',
          filter: 'blur(60px)',
          top: '10%',
          right: '-100px',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto' }}>
        <ScrollReveal direction="up" className="mb-16">
          <span className="section-eyebrow">How We Help</span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              color: 'var(--ink)',
              marginBottom: '1rem',
            }}
          >
            A compassionate path to support
          </h2>
          <p style={{ color: 'var(--soft-text)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '560px' }}>
            Every family&apos;s journey is unique. We meet you exactly where you are
            and walk with you every step of the way.
          </p>
        </ScrollReveal>

        <StaggerContainer
          stagger={0.15}
          delay={0.1}
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' } as React.CSSProperties}
        >
          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: '#fff',
                  borderRadius: '1.6rem',
                  padding: '2.5rem',
                  boxShadow: 'var(--shadow-sm)',
                  border: '1px solid var(--line)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: 'var(--shadow-md)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated bottom bar */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0"
                  style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${step.color}, var(--gold))`,
                    transformOrigin: 'left',
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                />

                {/* Step number */}
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: 'var(--mist)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.7rem',
                    fontWeight: 700,
                    color: step.color,
                    marginBottom: '1.4rem',
                    border: '2px solid var(--mist-dark)',
                  }}
                >
                  {step.num}
                </div>

                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    marginBottom: '0.8rem',
                    color: 'var(--ink)',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    lineHeight: 1.85,
                    color: 'var(--soft-text)',
                    fontSize: '1.02rem',
                  }}
                >
                  {step.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.3} className="text-center mt-14">
          <p style={{ color: 'var(--soft-text)', marginBottom: '1.5rem', fontSize: '1rem' }}>
            Ready to take the first step?
          </p>
          <a href="#get-help" className="btn btn-primary">
            Request Support Now
          </a>
        </ScrollReveal>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #how-we-help-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
