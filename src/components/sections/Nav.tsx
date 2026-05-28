'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useDonation } from '@/components/ui/DonationModal'

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { openModal } = useDonation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#watch', label: 'Our Story' },
    { href: '#programs', label: 'Programs' },
    { href: '#get-help', label: 'Get Help' },
  ]

  const getInvolvedLinks = [
    { href: '#get-help', label: '🤝 Volunteer' },
    { href: '#get-help', label: '🏢 Partnerships' },
    { href: '#get-help', label: '💼 Corporate Sponsors' },
    { href: '#get-help', label: '⛪ Churches' },
    { href: '#wishlist', label: '🎁 Wishlist' },
  ]

  return (
    <>
      <motion.nav
        className="fixed w-full top-0 z-[1000]"
        style={{
          background: 'var(--glass)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid var(--line)',
        }}
        animate={{
          boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="flex justify-between items-center py-4"
          style={{ width: 'min(1200px, 92%)', margin: '0 auto' }}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <Image
              src="/logo.png"
              alt="Hands of Hope logo"
              width={52}
              height={52}
              style={{ height: '52px', width: '52px', objectFit: 'contain', flexShrink: 0 }}
              priority
            />
            <span>
              <span
                style={{
                  display: 'block',
                  color: 'var(--plum)',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '0.02em',
                  lineHeight: 1,
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
                  color: 'var(--soft-text)',
                  marginTop: '2px',
                }}
              >
                Women &amp; Children Empowerment Network
              </small>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--ink)',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  letterSpacing: '0.02em',
                  transition: 'color 0.25s',
                  whiteSpace: 'nowrap',
                }}
                className="hover:text-[var(--rose)]"
              >
                {link.label}
              </Link>
            ))}

            {/* Get Involved Dropdown */}
            <div className="relative nav-dropdown">
              <button
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.3rem',
                  color: 'var(--ink)',
                  fontSize: '0.86rem',
                  fontWeight: 500,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Jost, sans-serif',
                }}
                className="hover:text-[var(--rose)]"
              >
                Get Involved <span style={{ fontSize: '0.72rem' }}>▾</span>
              </button>
              <div className="nav-dropdown-menu">
                {getInvolvedLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      display: 'block',
                      padding: '0.65rem 1rem',
                      borderRadius: '0.7rem',
                      color: 'var(--ink)',
                      fontSize: '0.86rem',
                      fontWeight: 500,
                      transition: 'all 0.2s',
                    }}
                    className="hover:bg-[var(--mist)] hover:text-[var(--plum)]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={openModal}
              className="btn btn-primary"
              style={{ padding: '0.7rem 1.4rem', fontSize: '0.84rem', border: 'none', cursor: 'pointer' }}
            >
              Donate
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: 'block',
                  width: '24px',
                  height: '2px',
                  background: 'var(--plum)',
                  borderRadius: '2px',
                }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[999] flex flex-col gap-5 overflow-y-auto"
            style={{
              background: 'var(--warm)',
              padding: '6rem 2rem 2rem',
            }}
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            <button
              className="absolute top-6 right-6 bg-transparent border border-[var(--line)] rounded-full w-11 h-11 cursor-pointer text-xl"
              style={{ color: 'var(--plum)' }}
              onClick={closeMobile}
            >
              ✕
            </button>

            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                style={{
                  fontSize: '1.3rem',
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 600,
                  color: 'var(--plum)',
                  borderBottom: '1px solid var(--line)',
                  paddingBottom: '0.9rem',
                }}
              >
                {link.label}
              </Link>
            ))}

            <span
              style={{
                fontSize: '1rem',
                fontFamily: 'Jost, sans-serif',
                fontWeight: 700,
                color: 'var(--plum)',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                paddingTop: '0.5rem',
              }}
            >
              Get Involved
            </span>
            {getInvolvedLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={closeMobile}
                style={{
                  fontSize: '1.06rem',
                  fontFamily: 'Jost, sans-serif',
                  fontWeight: 500,
                  color: 'var(--soft-text)',
                  paddingLeft: '1rem',
                  marginTop: '-0.5rem',
                }}
              >
                {link.label}
              </Link>
            ))}

            <button
              onClick={() => { openModal(); closeMobile() }}
              className="btn btn-primary text-center mt-2"
              style={{ border: 'none', cursor: 'pointer' }}
            >
              Donate Securely
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
