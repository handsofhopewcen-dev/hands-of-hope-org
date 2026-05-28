'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { AnimatedBar } from '@/components/ui/AnimatedCounter'
import { useDonation } from '@/components/ui/DonationModal'

const campaigns = [
  {
    season: '🍂 Fall 2026',
    seasonClass: 'summer',
    title: 'Postpartum Care Package Drive',
    desc: 'Every new mother deserves essential hygiene, wellness, and recovery support in the critical weeks after childbirth. Help us reach our goal of 500 care packages this summer.',
    goalLabel: '500 Care Packages',
    progressText: '0 packages delivered · 500 remaining',
    percentage: 0,
    btnLabel: '💜 Fund a Care Package',
    gradientTop: 'linear-gradient(90deg, var(--rose), var(--gold))',
    gradientBar: 'progress-bar-fill',
  },
  {
    season: '🌸 Spring 2027',
    seasonClass: 'fall',
    title: 'Meal Donation Drive',
    desc: 'Nutritious meals 3 times a week can transform recovery for a postpartum mother. Help us provide 400 nourishing meals for families during the critical postpartum season.',
    goalLabel: '400 Nourishing Meals',
    progressText: '0 meals funded · 400 remaining',
    percentage: 0,
    btnLabel: '🍽️ Feed a Family',
    gradientTop: 'linear-gradient(90deg, var(--plum), var(--rose))',
    gradientBar: 'progress-bar-fill progress-bar-fill-plum',
  },
]

export function Campaigns() {
  const { openModal } = useDonation()

  return (
    <section
      id="campaigns"
      style={{
        background: 'linear-gradient(160deg, var(--cream) 0%, #f5eff8 100%)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background radial gradients */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 80% 0%, rgba(184,92,122,.07), transparent 60%), radial-gradient(ellipse at 20% 100%, rgba(90,45,102,.06), transparent 60%)',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <ScrollReveal direction="up" className="text-center mb-4" style={{ maxWidth: '680px', margin: '0 auto 3rem' } as React.CSSProperties}>
          <span className="section-eyebrow">Active Campaigns</span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              marginBottom: '1rem',
              fontWeight: 700,
              color: 'var(--ink)',
            }}
          >
            These families need you{' '}
            <span style={{ color: 'var(--rose)' }}>right now</span>
          </h2>
          <p style={{ color: 'var(--soft-text)', lineHeight: 1.85, fontSize: '1rem' }}>
            Two critical drives are underway. Your gift today directly fuels one
            of these campaigns.
          </p>
        </ScrollReveal>

        {/* Campaign Cards */}
        <div
          className="grid gap-6 mb-10"
          style={{ gridTemplateColumns: '1fr 1fr' }}
        >
          {campaigns.map((c, i) => (
            <ScrollReveal
              key={i}
              direction={i === 0 ? 'left' : 'right'}
              delay={i * 0.1}
            >
              <motion.div
                style={{
                  background: '#fff',
                  borderRadius: '2rem',
                  padding: '2.8rem',
                  boxShadow: 'var(--shadow-md)',
                  border: '1px solid var(--line)',
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                transition={{ duration: 0.35 }}
              >
                {/* Top gradient bar */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: c.gradientTop,
                  }}
                />

                {/* Season badge */}
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '1.06rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    padding: '0.4rem 0.9rem',
                    borderRadius: '100px',
                    marginBottom: '1.5rem',
                    background:
                      i === 0 ? 'rgba(215,161,74,.12)' : 'rgba(90,45,102,.1)',
                    color: i === 0 ? '#8B6B1A' : 'var(--plum)',
                  }}
                >
                  {c.season}
                </div>

                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.6rem',
                    fontWeight: 700,
                    color: 'var(--plum)',
                    marginBottom: '0.8rem',
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>
                <p
                  style={{
                    color: 'var(--soft-text)',
                    lineHeight: 1.85,
                    fontSize: '1.04rem',
                    marginBottom: '1.8rem',
                  }}
                >
                  {c.desc}
                </p>

                {/* Goal box */}
                <div
                  style={{
                    background: 'var(--cream)',
                    borderRadius: '1rem',
                    padding: '1.2rem 1.5rem',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.06rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--soft-text)',
                      marginBottom: '0.5rem',
                    }}
                  >
                    Campaign Goal
                  </div>
                  <div
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.8rem',
                      fontWeight: 700,
                      color: 'var(--plum)',
                    }}
                  >
                    {c.goalLabel}
                  </div>
                  <AnimatedBar
                    percentage={c.percentage}
                    delay={i * 200 + 300}
                    className="mt-3 h-[10px]"
                    style={{ background: 'var(--mist-dark)', borderRadius: '100px' } as React.CSSProperties}
                    barClassName={c.gradientBar}
                  />
                  <p
                    style={{
                      fontSize: '1.04rem',
                      color: 'var(--soft-text)',
                      marginTop: '0.5rem',
                    }}
                  >
                    {c.progressText}
                  </p>
                </div>

                <button
                  onClick={openModal}
                  className={`btn ${i === 0 ? 'btn-rose' : 'btn-primary'}`}
                  style={{ width: '100%', border: 'none', cursor: 'pointer' }}
                >
                  {c.btnLabel}
                </button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 768px) {
          #campaigns .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
