'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface DonationContextType {
  openModal: () => void
  closeModal: () => void
}

const DonationContext = createContext<DonationContextType>({
  openModal: () => {},
  closeModal: () => {},
})

export function useDonation() {
  return useContext(DonationContext)
}

export function DonationProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const openModal = useCallback(() => setIsOpen(true), [])
  const closeModal = useCallback(() => setIsOpen(false), [])

  return (
    <DonationContext.Provider value={{ openModal, closeModal }}>
      {children}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeModal}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              background: 'rgba(30,18,24,0.72)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.92, y: 24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="donation-modal-inner"
              style={{
                background: '#fff',
                borderRadius: '1.8rem',
                overflow: 'hidden',
                boxShadow: '0 40px 100px rgba(30,18,24,.35)',
                width: '100%',
                maxWidth: '520px',
                maxHeight: '96vh',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Header */}
              <div
                style={{
                  background: 'linear-gradient(135deg, var(--plum-deep) 0%, var(--plum) 100%)',
                  padding: 'clamp(1rem, 3vw, 1.6rem) clamp(1rem, 4vw, 2rem)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexShrink: 0,
                }}
              >
                <div>
                  <p
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--gold-light)',
                      marginBottom: '0.4rem',
                    }}
                  >
                    Hands of Hope · 501(c)(3) Nonprofit
                  </p>
                  <h3
                    style={{
                      fontFamily: '"Cormorant Garamond", serif',
                      fontSize: '1.7rem',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.15,
                    }}
                  >
                    Make a Donation
                  </h3>
                  <p
                    style={{
                      color: 'rgba(255,255,255,.6)',
                      fontSize: '0.82rem',
                      marginTop: '0.3rem',
                    }}
                  >
                    100% goes directly to families in Greater Houston
                  </p>
                </div>

                <button
                  onClick={closeModal}
                  aria-label="Close donation form"
                  style={{
                    background: 'rgba(255,255,255,.12)',
                    border: '1px solid rgba(255,255,255,.2)',
                    borderRadius: '50%',
                    width: '38px',
                    height: '38px',
                    cursor: 'pointer',
                    color: '#fff',
                    fontSize: '1.3rem',
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '0.2rem',
                    transition: 'background 0.2s',
                  }}
                >
                  ×
                </button>
              </div>

              {/* Zeffy iframe */}
              <div style={{ flex: 1, overflowY: 'auto', minHeight: '0' }}>
                <iframe
                  title="Hands of Hope Donation Form"
                  src="https://www.zeffy.com/embed/donation-form/donate-to-change-lives-14499"
                  className="zeffy-iframe"
                  style={{ width: '100%', height: '700px', border: 'none', display: 'block' }}
                  allow="payment"
                />
              </div>
              <style>{`
                @media (max-width: 768px) {
                  .donation-modal-inner {
                    max-height: 82vh !important;
                    border-radius: 1.2rem !important;
                  }
                  .zeffy-iframe {
                    height: 480px !important;
                  }
                }
              `}</style>

              {/* Footer note */}
              <div
                style={{
                  padding: '0.9rem 2rem',
                  background: 'var(--mist)',
                  textAlign: 'center',
                  fontSize: '0.72rem',
                  color: 'var(--soft-text)',
                  flexShrink: 0,
                }}
              >
                🔒 Secure · Tax-deductible · Powered by Zeffy (0% platform fees)
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </DonationContext.Provider>
  )
}
