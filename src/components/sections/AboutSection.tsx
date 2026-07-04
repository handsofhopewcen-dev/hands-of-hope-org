'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const missionCards = [
  {
    title: 'Our Mission',
    body: 'To connect women and children with compassionate support, practical resources, education, and community-centered care that fosters healing, empowerment, stability, and hope.',
  },
  {
    title: 'Our Vision',
    body: 'To build thriving communities where every mother is supported, every child reaches their developmental potential, and every family has equitable access to life-changing resources and care.',
  },
]

export function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle layered gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 50%, rgba(238,231,242,.6), transparent 60%)',
        }}
      />

      <div
        className="relative z-10 grid gap-20 items-center"
        style={{
          width: 'min(1200px, 92%)',
          margin: '0 auto',
          gridTemplateColumns: '1fr 1fr',
        }}
      >
        {/* Image Collage */}
        <ScrollReveal direction="left">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {[
              {
                src: '/postpmother.jpg',
                alt: 'Mother and child bonding',
                containerStyle: { marginTop: '2.5rem' },
                objectPosition: 'center center',
              },
              {
                src: '/underschildren.jpg',
                alt: 'Children learning together',
                containerStyle: {},
                objectPosition: 'center bottom',
              },
              {
                src: '/about1.jpg',
                alt: 'Hands of Hope community support',
                containerStyle: {},
                objectPosition: 'center center',
              },
              {
                src: '/about2.jpg',
                alt: 'Hands of Hope family empowerment',
                containerStyle: { marginTop: '-1.5rem' },
                objectPosition: 'center center',
              },
            ].map((img, i) => (
              <div
                key={i}
                style={{
                  borderRadius: '1.4rem',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  position: 'relative',
                  height: '280px',
                  ...img.containerStyle,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    style={{ objectFit: 'cover', objectPosition: img.objectPosition }}
                    sizes="(max-width: 768px) 100vw, 300px"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal direction="right">
          <span className="section-eyebrow">About Hands of Hope</span>
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
            Built on compassion.
            <br />
            <span style={{ color: 'var(--plum)' }}>Rooted in community.</span>
          </h2>
          <p
            style={{
              lineHeight: 1.95,
              color: 'var(--soft-text)',
              fontSize: '1rem',
              marginBottom: '1.4rem',
            }}
          >
            Hands of Hope was founded by <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>Dierdre Adeniyi, OTR/L</strong> — a licensed Pediatric Occupational Therapist with nearly a decade of clinical experience, and a first-time mom to twins. She witnessed two distinct realities: the clinical gaps in early childhood developmental care, and the emotional isolation mothers face postpartum. Hands of Hope was born from that intersection — bridging compassionate maternal support with evidence-based pediatric care for children birth through age 5.
          </p>

          <StaggerContainer
            stagger={0.1}
            delay={0.2}
            className="grid gap-4"
            style={{ gridTemplateColumns: '1fr 1fr' } as React.CSSProperties}
          >
            {missionCards.map((card, i) => (
              <StaggerItem key={i}>
                <motion.div
                  style={{
                    background: 'var(--cream)',
                    padding: '1.8rem',
                    borderRadius: '1.4rem',
                    border: '1px solid var(--line)',
                    height: '100%',
                  }}
                  whileHover={{
                    y: -3,
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    style={{
                      color: 'var(--plum)',
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.3rem',
                      marginBottom: '0.7rem',
                      fontWeight: 700,
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      lineHeight: 1.8,
                      color: 'var(--soft-text)',
                      fontSize: '1.02rem',
                    }}
                  >
                    {card.body}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Founder credential strip */}
          <div
            style={{
              marginTop: '1.6rem',
              background: 'linear-gradient(135deg, rgba(90,45,102,.06), rgba(184,92,122,.06))',
              border: '1px solid rgba(90,45,102,.15)',
              borderRadius: '1.2rem',
              padding: '1.1rem 1.4rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--plum), var(--rose))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1.1rem',
              }}
            >
              🩺
            </div>
            <div>
              <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--rose)', marginBottom: '0.18rem' }}>
                Founded &amp; Led By
              </div>
              <div style={{ fontWeight: 600, color: 'var(--ink)', fontSize: '0.95rem' }}>
                Dierdre Adeniyi, OTR/L
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--soft-text)', lineHeight: 1.5 }}>
                Licensed Pediatric Occupational Therapist · Nearly 10 years clinical experience
              </div>
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#programs" className="btn btn-primary">
              See Our Programs
            </a>
            <a href="#impact" className="btn btn-outline">
              Our Impact
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #about > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          #about > div > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
