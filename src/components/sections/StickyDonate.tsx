'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useDonation } from '@/components/ui/DonationModal'

export function StickyDonate() {
  const [show, setShow] = useState(false)
  const { openModal } = useDonation()

  useEffect(() => {
    const handleResize = () => {
      setShow(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed bottom-0 left-0 right-0 z-[900]"
          style={{
            padding: '1rem 1.5rem 1.2rem',
            background: 'var(--warm)',
            borderTop: '1px solid var(--line)',
            boxShadow: '0 -4px 20px rgba(35,23,31,.1)',
          }}
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <button
            onClick={openModal}
            className="btn btn-primary"
            style={{ width: '100%', justifyContent: 'center', display: 'flex', border: 'none', cursor: 'pointer' }}
          >
            💜 Help a Mother Today
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
