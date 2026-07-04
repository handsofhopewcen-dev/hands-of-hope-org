'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useDonation } from '@/components/ui/DonationModal'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#watch', label: 'Our Story' },
  { href: '#programs', label: 'Programs' },
  { href: '#impact', label: 'Impact' },
  { href: '#campaigns', label: 'Campaigns' },
  { href: '#donate', label: 'Donate' },
  { href: '#contact', label: 'Contact' },
]

const involvedLinks: { href: string; label: string; external?: boolean }[] = [
  { href: '#get-help', label: 'Request Support' },
  { href: '#get-help', label: 'Volunteer' },
  { href: '#get-help', label: 'Partnerships' },
  { href: '#get-help', label: 'Corporate Sponsors' },
  { href: '#get-help', label: 'Churches' },
  { href: '#wishlist', label: 'Wishlist' },
  { href: '#donate', label: 'Donate Now' },
]

const contactLinks = [
  { label: '954-830-6030' },
  { label: 'info@handsofhopewcen.org' },
  { label: 'Greater Houston, TX' },
  { label: 'Mon–Fri | 9AM–5PM CT' },
]

export function Footer() {
  const { openModal } = useDonation()

  return (
    <footer
      style={{
        background: '#3D1D47',
        color: '#fff',
        padding: '5rem 0 2.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient border */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: 'linear-gradient(90deg, var(--rose), var(--plum), var(--gold))',
        }}
      />

      {/* Background glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(90,45,102,.15), transparent)',
          filter: 'blur(80px)',
          top: '-200px',
          right: '-200px',
        }}
      />

      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Main grid */}
        <div
          className="grid gap-12 mb-14"
          style={{ gridTemplateColumns: '2fr 1fr 1fr 1fr' }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.2rem' }}>
              <span
                style={{
                  display: 'block',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
                  color: '#fff',
                }}
              >
                Hands <em style={{ color: 'var(--rose)', fontStyle: 'normal' }}>of</em> Hope
              </span>
              <small
                style={{
                  display: 'block',
                  fontFamily: 'Jost, sans-serif',
                  fontSize: '0.62rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,.5)',
                    marginTop: '2px',
                  }}
                >
                  Women &amp; Children Empowerment Network
                </small>
            </div>
            <p
              style={{
                color: 'rgba(255,255,255,.6)',
                lineHeight: 1.8,
                fontSize: '1.02rem',
                marginBottom: '1.5rem',
              }}
            >
              Supporting postpartum mothers, children, and families through
              compassionate care, community support, education, advocacy, and
              practical resources in Greater Houston, Texas.
            </p>
            <div
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.45rem',
                lineHeight: 1.8,
                color: '#FFE135',
                fontStyle: 'italic',
                fontWeight: 700,
                whiteSpace: 'nowrap',
              }}
            >
              Every mother deserves support.
              <br />
              Every child deserves hope.
              <br />
              Every family deserves community.
            </div>
          </div>

          {/* Navigate */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,.45)',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Navigate
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {navLinks.map((link) => (
                <li key={link.href} style={{ marginBottom: '0.65rem' }}>
                  <Link
                    href={link.href}
                    style={{
                      color: 'rgba(255,255,255,.6)',
                      fontSize: '1rem',
                      transition: 'color 0.2s',
                    }}
                    className="hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,.45)',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Get Involved
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {involvedLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: '0.65rem' }}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    style={{
                      color: 'rgba(255,255,255,.6)',
                      fontSize: '1rem',
                      transition: 'color 0.2s',
                    }}
                    className="hover:text-[var(--gold)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'rgba(255,255,255,.45)',
                marginBottom: '1.2rem',
                fontWeight: 600,
              }}
            >
              Contact
            </h4>
            <ul style={{ listStyle: 'none' }}>
              {contactLinks.map((item) => (
                <li
                  key={item.label}
                  style={{
                    color: 'rgba(255,255,255,.6)',
                    fontSize: '1rem',
                    marginBottom: '0.65rem',
                  }}
                >
                  {item.label}
                </li>
              ))}
            </ul>

            {/* Donate CTA */}
            <div style={{ marginTop: '1.5rem' }}>
              <button
                onClick={openModal}
                className="btn btn-rose"
                style={{ fontSize: '0.94rem', padding: '0.7rem 1.3rem', border: 'none', cursor: 'pointer' }}
              >
                💜 Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,.1)',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <span style={{ color: 'rgba(255,255,255,.38)', fontSize: '1.04rem' }}>
            © 2026 Hands of Hope Women &amp; Children Empowerment Network Inc.
          </span>
          <span style={{ color: 'rgba(255,255,255,.38)', fontSize: '1.04rem' }}>
            501(c)(3) Nonprofit ·{' '}
            <Link
              href="/admin"
              style={{ color: 'rgba(255,255,255,.38)' }}
              className="hover:text-[var(--gold)]"
            >
              Staff Portal
            </Link>
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          footer .grid[style*="2fr 1fr 1fr 1fr"] {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 640px) {
          footer .grid[style*="2fr 1fr 1fr 1fr"],
          footer .grid[style*="1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          footer {
            padding-bottom: 6rem;
          }
        }
      `}</style>
    </footer>
  )
}
