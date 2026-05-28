'use client'

import React from 'react'

import { motion } from 'framer-motion'
import { ScrollReveal, StaggerContainer, StaggerItem } from '@/components/ui/ScrollReveal'

const wishlistItems = [
  {
    icon: '🧴',
    title: 'Postpartum Essentials',
    items:
      'Pads, mesh underwear, nipple cream, nursing pads, perineal spray, sitz bath salts, dry shampoo, deodorant.',
  },
  {
    icon: '👶',
    title: 'Infant Supplies',
    items:
      'Newborn through size 2 diapers, wipes, formula, clothings (0–3, 3–6M), receiving blankets, pacifiers, baby wash.',
  },
  {
    icon: '🍱',
    title: 'Nourishment & Meals',
    items:
      'Gift cards (HEB, Walmart, Kroger), non-perishable meals, lactation teas, healthy snacks, protein bars.',
  },
]

export function WishlistSection() {
  return (
    <section
      id="wishlist"
      style={{
        background: 'var(--mist)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 0% 0%, rgba(90,45,102,.06), transparent 50%), radial-gradient(ellipse at 100% 100%, rgba(184,92,122,.05), transparent 50%)',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal direction="up">
          <span className="section-eyebrow">Wishlist</span>
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
            Donate items we need most
          </h2>
          <p
            style={{
              maxWidth: '640px',
              lineHeight: 1.95,
              color: 'var(--soft-text)',
              fontSize: '1rem',
              marginBottom: '3rem',
            }}
          >
            Can&apos;t give money? You can still make a huge difference. Here are the
            physical items we&apos;re actively collecting for families in Greater
            Houston.
          </p>
        </ScrollReveal>

        <StaggerContainer
          stagger={0.12}
          className="grid gap-6 mb-10"
          style={{ gridTemplateColumns: 'repeat(3, 1fr)' } as React.CSSProperties}
        >
          {wishlistItems.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                style={{
                  background: '#fff',
                  borderRadius: '1.4rem',
                  padding: '2rem',
                  border: '1px solid var(--line)',
                  height: '100%',
                }}
                whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                transition={{ duration: 0.3 }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3
                  style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    color: 'var(--plum)',
                    fontSize: '1.2rem',
                    marginBottom: '0.6rem',
                    fontWeight: 700,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    color: 'var(--soft-text)',
                    lineHeight: 1.8,
                  }}
                >
                  {item.items}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal direction="up" delay={0.3} className="text-center">
          <a
            href="mailto:info@handsofhopewcen.org?subject=Wishlist%20Donation"
            className="btn btn-outline"
          >
            📦 Donate Items — Email Us
          </a>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #wishlist .grid[style*="repeat(3"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          #wishlist .grid[style*="repeat(3"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
