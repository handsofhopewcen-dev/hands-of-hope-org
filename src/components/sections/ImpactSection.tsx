'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedBar } from '@/components/ui/AnimatedCounter'
import { useDonation } from '@/components/ui/DonationModal'

const dataBars = [
  {
    label: '500 Postpartum Care Packages',
    percentage: 1,
    stat: '6 delivered so far',
  },
  {
    label: '400 Families Connected to Developmental Support',
    percentage: 1,
    stat: '5 of 400 goal',
  },
  {
    label: 'Volunteer Hours Contributed',
    percentage: 6,
    stat: '50 of 892 hours',
  },
  {
    label: 'Early Head Start Programs Supported',
    percentage: 0,
    stat: '0 of 15 programs',
  },
]

export function ImpactSection() {
  const { openModal } = useDonation()

  return (
    <section
      id="impact"
      style={{
        background: 'var(--plum-deep)',
        position: 'relative',
        overflow: 'hidden',
        padding: '7rem 0',
      }}
    >
      {/* Radial gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 30% 50%, rgba(184,92,122,.15) 0%, transparent 65%), radial-gradient(ellipse at 70% 20%, rgba(215,161,74,.08) 0%, transparent 60%)',
        }}
      />

      {/* Animated moving dots */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='30' cy='30' r='2' fill='%23fff'/%3E%3C/svg%3E\")",
        }}
        animate={{ backgroundPosition: ['0px 0px', '60px 60px'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />

      <div
        style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-16">
          <span
            className="section-eyebrow section-eyebrow-gold"
            style={{ color: 'var(--gold-light)' }}
          >
            Impact
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              color: '#fff',
            }}
          >
            Our Current Goal for Greater Houston
          </h2>
        </ScrollReveal>

        {/* Data Story */}
        <ScrollReveal direction="up">
          <div
            className="grid gap-8"
            style={{ gridTemplateColumns: '1fr 1fr' }}
          >
            {dataBars.map((bar, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: '0.94rem',
                    color: 'rgba(255,255,255,.65)',
                    marginBottom: '0.6rem',
                    fontWeight: 500,
                  }}
                >
                  {bar.label}
                </div>
                <AnimatedBar
                  percentage={bar.percentage}
                  delay={i * 150}
                  className="h-2"
                  style={{
                    background: 'rgba(255,255,255,.08)',
                    borderRadius: '100px',
                  } as React.CSSProperties}
                  barClassName="progress-bar-fill"
                />
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--gold)',
                    marginTop: '0.5rem',
                  }}
                >
                  {bar.stat}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal direction="up" delay={0.2} className="text-center mt-16">
          <button
            onClick={openModal}
            className="btn btn-outline-white"
            style={{ border: '1.5px solid rgba(255,255,255,.4)', cursor: 'pointer' }}
          >
            Help Us Reach Our Goals
          </button>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #impact .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
