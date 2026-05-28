'use client'

import React from 'react'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'
import { useDonation } from '@/components/ui/DonationModal'

const testimonials = [
  {
    quote:
      '"After giving birth prematurely, I struggled silently with postpartum depression while caring for my newborn alone. Hands of Hope stepped in with meals, emotional support, and resources that helped me regain stability."',
    name: 'Community Mother',
    role: 'Postpartum Support Participant',
    img: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=500&auto=format&fit=crop&crop=faces',
  },
  {
    quote:
      '"Through Hands of Hope\'s support and referrals, I was able to access pelvic floor therapy I never knew was available after childbirth. That care made a tremendous difference in my healing, recovery, and overall quality of life."',
    name: 'Olivia Culp',
    role: 'Postpartum Support Participant',
    img: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=500&auto=format&fit=crop',
  },
  {
    quote:
      '"Volunteering with Hands of Hope has shown me what compassionate community care truly looks like in action. Every visit feels like being part of a family."',
    name: 'Janet George',
    role: 'Outreach Partner',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=500&auto=format&fit=crop',
  },
]

export function Testimonials() {
  const { openModal } = useDonation()

  return (
    <section
      style={{
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(238,231,242,.4), transparent 70%)',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal direction="up">
          <span className="section-eyebrow">Stories of Hope</span>
          <h2
            style={{
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: 'clamp(2rem, 3.8vw, 3.4rem)',
              lineHeight: 1.15,
              marginBottom: '4rem',
              fontWeight: 700,
              color: 'var(--ink)',
            }}
          >
            Real stories from{' '}
            <span style={{ color: 'var(--plum)' }}>families and volunteers</span>
          </h2>
        </ScrollReveal>

        <StaggerContainer
          stagger={0.15}
          className="grid gap-7"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' } as React.CSSProperties}
        >
          {testimonials.map((t, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: 'var(--cream)',
                  padding: '2.2rem',
                  borderRadius: '1.6rem',
                  border: '1px solid var(--line)',
                  position: 'relative',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                whileHover={{
                  y: -4,
                  boxShadow: 'var(--shadow-md)',
                }}
                transition={{ duration: 0.3 }}
              >
                {/* Decorative quote mark */}
                <div
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '5rem',
                    color: 'var(--rose)',
                    opacity: 0.2,
                    position: 'absolute',
                    top: '1rem',
                    left: '1.5rem',
                    lineHeight: 1,
                  }}
                >
                  "
                </div>

                <p
                  style={{
                    lineHeight: 1.95,
                    color: 'var(--soft-text)',
                    marginBottom: '1.8rem',
                    paddingTop: '1rem',
                    fontSize: '1.06rem',
                    flex: 1,
                  }}
                >
                  {t.quote}
                </p>

                {/* Author */}
                <div style={{ display: 'flex', gap: '0.9rem', alignItems: 'center' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '2px solid var(--mist-dark)',
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={t.img}
                      alt={t.name}
                      width={52}
                      height={52}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <strong
                      style={{
                        display: 'block',
                        fontSize: '1.02rem',
                        fontWeight: 600,
                        color: 'var(--plum)',
                      }}
                    >
                      {t.name}
                    </strong>
                    <span style={{ color: 'var(--soft-text)', fontSize: '1.04rem' }}>
                      {t.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.3} className="text-center mt-14">
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              background: 'linear-gradient(135deg, var(--plum-deep), var(--plum))',
              padding: '2.5rem 3rem',
              borderRadius: '1.6rem',
              color: '#fff',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem',
                fontStyle: 'italic',
                opacity: 0.9,
              }}
            >
              Your gift writes the next story of hope.
            </p>
            <button
              onClick={openModal}
              className="btn btn-outline-white"
              style={{ border: '1.5px solid rgba(255,255,255,.4)', cursor: 'pointer' }}
            >
              Donate Today
            </button>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          section .grid[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          section .grid[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
