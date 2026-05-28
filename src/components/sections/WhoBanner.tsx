'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const quotes = [
  {
    text: 'More than one-third of women experience lasting health problems after childbirth — yet most never receive the follow-up care they need.',
    source: 'World Health Organization (WHO)',
  },
  {
    text: 'Approximately 1 in 6 children in the US have a developmental delay or disability, yet fewer than half are identified before starting school.',
    source: 'CDC',
  },
]

export function WhoBanner() {
  return (
    <section
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '5.5rem 0',
      }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, #3D1D47 0%, #2D1238 50%, #3D1D47 100%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      {/* Subtle dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23fff'/%3E%3C/svg%3E\")",
        }}
      />

      <div
        className="relative z-10"
        style={{ width: 'min(1200px, 92%)', margin: '0 auto' }}
      >
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center mb-12">
          <p
            style={{
              fontSize: '1.06rem',
              textTransform: 'uppercase',
              letterSpacing: '0.14em',
              fontWeight: 600,
              color: 'var(--gold-light)',
              marginBottom: '0.8rem',
            }}
          >
            The Reality We Are Responding To
          </p>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)',
              color: 'rgba(255,255,255,0.9)',
              fontWeight: 700,
              fontStyle: 'italic',
            }}
          >
            Why families in Houston cannot wait
          </h2>
        </ScrollReveal>

        <StaggerContainer
          stagger={0.15}
          className="grid gap-8"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' } as React.CSSProperties}
        >
          {quotes.map((q, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: 'rgba(255,255,255,.05)',
                  border: '1px solid rgba(255,255,255,.1)',
                  borderRadius: '1.6rem',
                  padding: '2.5rem',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{
                  background: 'rgba(255,255,255,.09)',
                  y: -3,
                }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '4rem',
                    color: 'var(--gold)',
                    lineHeight: '0.8',
                    marginBottom: '1rem',
                    opacity: 0.7,
                  }}
                >
                  "
                </div>
                <blockquote
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.3rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,.92)',
                    fontStyle: 'italic',
                    marginBottom: '1.2rem',
                  }}
                >
                  {q.text}
                </blockquote>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    fontSize: '1rem',
                    color: 'var(--gold-light)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '1.5px',
                      background: 'var(--gold)',
                      flexShrink: 0,
                      display: 'block',
                    }}
                  />
                  {q.source}
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
