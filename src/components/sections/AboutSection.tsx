'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const missionCards = [
  {
    title: 'Our Mission',
    body: 'Empowering postpartum mothers, strengthening families, transforming futures — one child and one mother at a time.',
  },
  {
    title: 'Our Vision',
    body: 'Increase outreach efforts and become a trusted resource hub for postpartum mothers and children in need of developmental support.',
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
              marginBottom: '2rem',
            }}
          >
            Hands of Hope Women and Children Empowerment Network was created to
            support postpartum mothers, underserved children, and families
            facing difficult seasons through compassionate care, practical
            resources, education, and advocacy.
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
