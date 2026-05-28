'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

/* ── Supporting insight cards (image-backed) ────────────────── */
const insightCards = [
  {
    headline: 'Women frequently report feeling forgotten after delivery',
    body: 'Emotionally unsupported, unprepared for postpartum recovery, and isolated during the transition into motherhood.',
    source: 'Research and Maternal Testimony Studies',
    image: '/womenforgotten.jpg',
    imageAlt: 'A mother sitting alone with her newborn, looking emotionally exhausted',
    imagePosition: 'center 25%',
    overlay: 'linear-gradient(to top, rgba(90,29,60,.88) 0%, rgba(90,29,60,.45) 45%, rgba(90,29,60,.1) 100%)',
  },
  {
    headline: 'No family should navigate postpartum struggles alone',
    body: 'Many women report insufficient follow-up and support after childbirth, particularly beyond the immediate recovery period.',
    source: 'Research and Maternal Testimony Studies',
    image: '/navigatealone.jpg',
    imageAlt: 'A group of women gathered together in mutual support',
    imagePosition: 'center center',
    overlay: 'linear-gradient(to top, rgba(61,29,71,.88) 0%, rgba(61,29,71,.4) 45%, rgba(61,29,71,.08) 100%)',
  },
  {
    headline: 'Social support functions as a critical coping resource',
    body: 'Emotional, practical, and community support are protective factors that significantly improve maternal well-being.',
    source: 'BMC Psychology Review',
    image: '/SocialSupport.jpg',
    imageAlt: 'Two women sharing a warm, supportive moment together',
    imagePosition: 'center 20%',
    overlay: 'linear-gradient(to top, rgba(35,20,55,.88) 0%, rgba(35,20,55,.4) 45%, rgba(35,20,55,.08) 100%)',
  },
  {
    headline: '1 in 8 women report symptoms of postpartum depression',
    body: 'Lack of emotional and practical support is one of the strongest contributing risk factors for postpartum mental health decline.',
    source: 'CDC Reproductive Health Division',
    image: '/Iin8copy.jpg',
    imageAlt: 'A woman sitting alone, looking quietly overwhelmed',
    imagePosition: 'center 15%',
    overlay: 'linear-gradient(to top, rgba(30,18,48,.90) 0%, rgba(30,18,48,.45) 45%, rgba(30,18,48,.1) 100%)',
  },
]

export function NeedIsReal() {
  return (
    <section
      id="need"
      style={{
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--cream)',
      }}
    >
      {/* Subtle gradient overlays */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 10% 40%, rgba(90,45,102,.05), transparent 50%), radial-gradient(ellipse at 90% 65%, rgba(184,92,122,.05), transparent 50%)',
        }}
      />

      <div
        style={{
          width: 'min(1200px, 92%)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* ── Section Header ────────────────────────────────────── */}
        <ScrollReveal direction="up">
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>
              Why This Work Matters
            </span>
            <h2
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
                lineHeight: 1.08,
                fontWeight: 700,
                color: 'var(--ink)',
                marginBottom: '1rem',
              }}
            >
              The Silent{' '}
              <span style={{ color: 'var(--plum)' }}>Crisis</span>
            </h2>
            <p
              style={{
                color: 'var(--soft-text)',
                fontSize: '1.05rem',
                lineHeight: 1.85,
                maxWidth: '520px',
                margin: '0 auto',
              }}
            >
              Supporting mothers and children through life&apos;s hardest seasons.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Two large image-stat panels ──────────────────────── */}
        <ScrollReveal direction="up" delay={0.1}>
          <div
            className="need-panels"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.4rem',
              marginBottom: '1.4rem',
            }}
          >
            {/* Panel A — Mothers */}
            <motion.div
              style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                height: '520px',
                boxShadow: 'var(--shadow-lg)',
              }}
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?q=80&w=900&auto=format&fit=crop&crop=faces,center"
                alt="A mother holding her newborn in a tender moment"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Multi-layer gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(61,29,71,.85) 0%, rgba(61,29,71,.4) 45%, rgba(61,29,71,.08) 100%)',
                }}
              />
              {/* Stat content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.4rem',
                }}
              >
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(3.2rem, 6vw, 5.2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 0.88,
                    marginBottom: '0.4rem',
                  }}
                >
                  1 in 3
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.7)',
                    marginBottom: '0.9rem',
                  }}
                >
                  Women
                </div>
                <p
                  style={{
                    fontSize: '1.04rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,.88)',
                    maxWidth: '340px',
                    marginBottom: '1.2rem',
                  }}
                >
                  experience lasting health problems after childbirth — yet most never receive the follow-up care they need.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--gold-light)',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '1.5px',
                      background: 'var(--gold)',
                      display: 'block',
                    }}
                  />
                  World Health Organization
                </div>
              </div>
            </motion.div>

            {/* Panel B — Children */}
            <motion.div
              style={{
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden',
                height: '520px',
                boxShadow: 'var(--shadow-lg)',
              }}
              whileHover={{ scale: 1.012 }}
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
            >
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=900&auto=format&fit=crop&crop=faces,top"
                alt="A young child looking up with hope and curiosity"
                fill
                className="object-cover"
                style={{ objectPosition: 'center 20%' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Multi-layer gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(29,18,61,.85) 0%, rgba(29,18,61,.35) 45%, rgba(29,18,61,.05) 100%)',
                }}
              />
              {/* Stat content */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '2.4rem',
                }}
              >
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(3.2rem, 6vw, 5.2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 0.88,
                    marginBottom: '0.4rem',
                  }}
                >
                  1 in 6
                </div>
                <div
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.7)',
                    marginBottom: '0.9rem',
                  }}
                >
                  Children
                </div>
                <p
                  style={{
                    fontSize: '1.04rem',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,.88)',
                    maxWidth: '340px',
                    marginBottom: '1.2rem',
                  }}
                >
                  in the US have a developmental delay or disability. Fewer than half are identified before starting school.
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--gold-light)',
                  }}
                >
                  <span
                    style={{
                      width: '20px',
                      height: '1.5px',
                      background: 'var(--gold)',
                      display: 'block',
                    }}
                  />
                  National Center on Birth Defects and Developmental Disabilities, CDC
                </div>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>

        {/* ── Four image insight panels ─────────────────────────── */}
        <StaggerContainer
          stagger={0.1}
          delay={0.15}
          className="grid need-insight-grid gap-5"
          style={{ gridTemplateColumns: 'repeat(4, 1fr)' } as React.CSSProperties}
        >
          {insightCards.map((card, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  position: 'relative',
                  borderRadius: '1.6rem',
                  overflow: 'hidden',
                  height: '400px',
                  boxShadow: 'var(--shadow-md)',
                }}
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              >
                <Image
                  src={card.image}
                  alt={card.imageAlt}
                  fill
                  className="object-cover"
                  style={{ objectPosition: card.imagePosition }}
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {/* Gradient overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: card.overlay,
                  }}
                />
                {/* Text content */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.8rem',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: 'clamp(1.1rem, 1.6vw, 1.4rem)',
                      lineHeight: 1.25,
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {card.headline}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9rem',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,.80)',
                      marginBottom: '1rem',
                    }}
                  >
                    {card.body}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      color: 'var(--gold-light)',
                    }}
                  >
                    <span
                      style={{
                        width: '18px',
                        height: '1.5px',
                        background: 'var(--gold)',
                        display: 'block',
                        flexShrink: 0,
                      }}
                    />
                    {card.source}
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* ── Bottom tagline ────────────────────────────────────── */}
        <ScrollReveal direction="up" delay={0.2}>
          <div
            style={{
              marginTop: '4rem',
              textAlign: 'center',
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)',
              color: 'var(--ink)',
              fontWeight: 700,
              lineHeight: 1.45,
            }}
          >
            Every statistic tells a story.{' '}
            <span style={{ color: 'var(--rose)', fontStyle: 'italic' }}>
              Together, we can change outcomes.
            </span>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .need-insight-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .need-panels {
            grid-template-columns: 1fr !important;
          }
          .need-panels > div {
            height: 420px !important;
          }
          .need-insight-grid {
            grid-template-columns: 1fr !important;
          }
          .need-insight-grid > div > div {
            height: 360px !important;
          }
        }
      `}</style>
    </section>
  )
}
