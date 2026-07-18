'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const programs = [
  {
    icon: '🌸',
    title: 'Prenatal Support & Maternal Wellness Preparation',
    desc: 'Support expectant mothers in the 3rd Trimester prepare for baby — cleaning, laundry, equipment set up for a confident transition into motherhood.',
    color: 'var(--rose)',
  },
  {
    icon: '🤱',
    title: 'Postpartum Recovery & Care',
    desc: 'Postpartum recovery support, emotional wellness check-ins, newborn transition guidance, nutritious meals, diapers, hygiene supplies, infant essentials, respite care, and safe infant care education.',
    color: 'var(--plum)',
  },
  {
    icon: '🔬',
    title: 'Pediatric OT Free Screening Initiative',
    desc: 'Free professional OT screenings embedded into Head Start campuses, daycares, and pediatricians\' offices. Identifying developmental delays early so no child falls through the cracks.',
    color: 'var(--gold)',
  },
  {
    icon: '🎓',
    title: 'Kindergarten Readiness & Developmental Support',
    desc: 'On-site Occupational Therapist provides monthly developmental education and weekly classroom activities supporting Kindergarten readiness and developmental skills for all children.',
    color: 'var(--rose)',
  },
  {
    icon: '📚',
    title: 'Parent & Caregiver Education',
    desc: 'Workshops and coaching on developmental milestones, school readiness, responsive parenting, stress management, and building healthy family routines for long-term wellbeing.',
    color: 'var(--plum)',
  },
  {
    icon: '📣',
    title: 'Community Outreach & Advocacy Initiatives',
    desc: 'Promote maternal and child wellness through events, outreach programs, partnerships, and advocacy for underserved families.',
    color: 'var(--gold)',
  },
]

export function Programs() {
  return (
    <section
      id="programs"
      style={{
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient layers */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(238,231,242,.5), transparent 60%), radial-gradient(ellipse at 0% 100%, rgba(215,161,74,.04), transparent 60%)',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal direction="up">
          <span className="section-eyebrow">Programs &amp; Services</span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              marginBottom: '1.2rem',
              fontWeight: 700,
              color: 'var(--ink)',
            }}
          >
            Support designed around{' '}
            <span style={{ color: 'var(--plum)' }}>real family needs</span>
          </h2>
          <p
            style={{
              maxWidth: '640px',
              lineHeight: 1.95,
              color: 'var(--soft-text)',
              fontSize: '1rem',
              marginBottom: '4rem',
            }}
          >
            Every program we offer was built in response to gaps we saw in our
            community. From the third trimester through age 5 — the most critical
            window for development — we are there.
          </p>
        </ScrollReveal>

        <StaggerContainer
          stagger={0.1}
          delay={0.1}
          className="grid gap-6"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' } as React.CSSProperties}
        >
          {programs.map((prog, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: '#fff',
                  border: '1px solid var(--line)',
                  padding: '2rem',
                  borderRadius: '1.6rem',
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
                {/* Animated top bar */}
                <motion.div
                  className="absolute top-0 left-0 right-0"
                  style={{
                    height: '3px',
                    background: `linear-gradient(90deg, ${prog.color}, var(--gold))`,
                    transformOrigin: 'left',
                  }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.35 }}
                />

                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '1rem',
                    background: 'var(--mist)',
                    marginBottom: '1.3rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem',
                  }}
                >
                  {prog.icon}
                </div>
                <h3
                  style={{
                    marginBottom: '0.8rem',
                    fontSize: '1rem',
                    fontWeight: 600,
                    lineHeight: 1.4,
                    color: 'var(--plum)',
                  }}
                >
                  {prog.title}
                </h3>
                <p
                  style={{
                    lineHeight: 1.85,
                    color: 'var(--soft-text)',
                    fontSize: '1rem',
                  }}
                >
                  {prog.desc}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.3} className="mt-14 text-center">
          <div
            style={{
              background: 'var(--cream)',
              border: '1px solid var(--line)',
              borderRadius: '1.4rem',
              padding: '2.5rem',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.3rem',
                fontStyle: 'italic',
                color: 'var(--plum)',
                marginBottom: '1.5rem',
                lineHeight: 1.7,
              }}
            >
              "Every program we offer is a direct response to a family who
              needed help and didn&apos;t know where to turn."
            </p>
            <a href="#get-help" className="btn btn-primary">
              Request Support
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #programs .grid[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          #programs .grid[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
