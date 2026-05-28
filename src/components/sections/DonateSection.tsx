'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { useDonation } from '@/components/ui/DonationModal'

const tiers = [
  {
    badge: '🤱 Postpartum Care',
    amount: '$45',
    desc: 'Helps a mother receive postpartum hygiene essentials and wellness resources during a critical recovery season.',
    featured: false,
  },
  {
    badge: '🧠 Child Development',
    amount: '$75',
    desc: 'Helps a child access early developmental screenings, pediatric specialist referrals, and caregiver training that supports healthy development.',
    featured: true,
  },
  {
    badge: '🍽️ Meals & Nourishment',
    amount: '$150',
    desc: 'Provides healthy meals three times a week for a family during the critical postpartum season following the birth of a new baby.',
    featured: false,
  },
]

export function DonateSection() {
  const { openModal } = useDonation()

  return (
    <section
      id="donate"
      style={{
        background: 'var(--cream-dark)',
        padding: '7rem 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(90,45,102,.05), transparent 70%)',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal direction="up">
          <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
            Support Our Mission
          </span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              fontWeight: 700,
              color: 'var(--ink)',
            }}
          >
            Every gift{' '}
            <span style={{ color: 'var(--rose)' }}>restores hope</span>
          </h2>
          <p
            style={{
              color: 'var(--soft-text)',
              lineHeight: 1.95,
              fontSize: '1rem',
              maxWidth: '600px',
              margin: '1rem auto 0',
            }}
          >
            Your support provides postpartum essentials, developmental
            resources, meals, and community support for families navigating
            difficult seasons.
          </p>
        </ScrollReveal>

        {/* Donation Tiers */}
        <StaggerContainer
          stagger={0.1}
          delay={0.2}
          className="grid gap-6 my-12"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' } as React.CSSProperties}
        >
          {tiers.map((tier, i) => (
            <StaggerItem key={i}>
              <motion.button
                onClick={openModal}
                style={{
                  background: '#fff',
                  padding: tier.featured ? '3.2rem 2.5rem 2.5rem' : '2.5rem',
                  borderRadius: '1.8rem',
                  border: tier.featured
                    ? '1.5px solid var(--rose)'
                    : '1.5px solid var(--line)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  width: '100%',
                  position: 'relative',
                  overflow: 'visible',
                  fontFamily: 'inherit',
                }}
                whileHover={{ y: -5, boxShadow: 'var(--shadow-lg)' }}
                transition={{ duration: 0.35 }}
              >
                {tier.featured && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'var(--rose)',
                      color: '#fff',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      letterSpacing: '0.12em',
                      padding: '0.35rem 1.1rem',
                      borderRadius: '100px',
                      textTransform: 'uppercase',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 12px rgba(184,92,122,.35)',
                    }}
                  >
                    Most Impactful
                  </div>
                )}

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.94rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    color: 'var(--rose)',
                    marginBottom: '0.6rem',
                  }}
                >
                  {tier.badge}
                </div>

                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '3rem',
                    fontWeight: 700,
                    color: 'var(--plum)',
                    lineHeight: 1,
                    marginBottom: '1rem',
                  }}
                >
                  {tier.amount}
                </div>
                <p
                  style={{
                    lineHeight: 1.8,
                    color: 'var(--soft-text)',
                    fontSize: '1rem',
                  }}
                >
                  {tier.desc}
                </p>
              </motion.button>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Zeffy Embed */}
        <ScrollReveal direction="up" delay={0.2} className="text-center">
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '1rem' }}>
            <button
              onClick={openModal}
              className="btn btn-primary"
              style={{ fontSize: '1rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}
            >
              Help a Mother Today
            </button>
            <button
              onClick={openModal}
              className="btn btn-rose"
              style={{ fontSize: '1rem', padding: '1rem 2.5rem', border: 'none', cursor: 'pointer' }}
            >
              Sponsor a Child
            </button>
          </div>
          <div
            style={{
              marginTop: '1rem',
              fontSize: '1.06rem',
              color: 'var(--soft-text)',
            }}
          >
            🔒 100% of donations support the mission · Secure checkout powered by Zeffy · Tax receipt provided
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #donate .grid[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
