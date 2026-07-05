'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type { ContactInput } from '@/types'

const contactInfo = [
  { icon: '📍', label: 'Location', value: 'Greater Houston, Texas, United States' },
  { icon: '📧', label: 'Email', value: 'info@handsofhopewcen.org', href: 'mailto:info@handsofhopewcen.org' },
  { icon: '📞', label: 'Phone', value: '806-302-0899', href: 'tel:8063020899' },
  { icon: '🕐', label: 'Office Hours', value: 'Monday – Friday | 9AM – 5PM CT' },
]

export function ContactSection() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<ContactInput>()

  const onSubmit = async (data: ContactInput) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setSuccess(true); reset() }
      else alert('Something went wrong. Please email us at info@handsofhopewcen.org')
    } catch {
      alert('Connection error. Please email us at info@handsofhopewcen.org')
    }
    setLoading(false)
  }

  return (
    <section
      id="contact"
      style={{
        background: 'var(--cream)',
        padding: '7rem 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 100% 0%, rgba(90,45,102,.04), transparent 50%)',
        }}
      />

      <div
        className="relative z-10 grid gap-20 items-start"
        style={{
          width: 'min(1200px, 92%)',
          margin: '0 auto',
          gridTemplateColumns: '1fr 1.2fr',
        }}
      >
        {/* Left: Info */}
        <ScrollReveal direction="left">
          <span className="section-eyebrow">Get In Touch</span>
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
            We&apos;re here{' '}
            <span style={{ color: 'var(--plum)' }}>to help</span>
          </h2>
          <p
            style={{
              lineHeight: 1.95,
              color: 'var(--soft-text)',
              fontSize: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            Whether you&apos;re seeking support, looking to volunteer, or interested
            in partnering with Hands of Hope, we would love to hear from you.
          </p>

          {contactInfo.map((info, i) => (
            <div key={i} style={{ marginBottom: '1.8rem' }}>
              <h4
                style={{
                  fontWeight: 600,
                  color: 'var(--plum)',
                  marginBottom: '0.3rem',
                  fontSize: '1rem',
                }}
              >
                {info.icon} {info.label}
              </h4>
              {info.href ? (
                <a
                  href={info.href}
                  style={{
                    color: 'var(--rose)',
                    lineHeight: 1.7,
                    fontSize: '1.06rem',
                    fontWeight: 500,
                  }}
                >
                  {info.value}
                </a>
              ) : (
                <p style={{ color: 'var(--soft-text)', lineHeight: 1.7, fontSize: '1.06rem' }}>
                  {info.value}
                </p>
              )}
            </div>
          ))}

          {/* Social / Additional */}
          <div
            style={{
              background: '#fff',
              border: '1px solid var(--line)',
              borderRadius: '1.2rem',
              padding: '1.5rem',
              marginTop: '1rem',
            }}
          >
            <p
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.1rem',
                fontStyle: 'italic',
                color: 'var(--plum)',
                lineHeight: 1.7,
              }}
            >
              "No family should face life's hardest moments alone. We're here with hope, healing, and support when it matters most."
            </p>
          </div>
        </ScrollReveal>

        {/* Right: Form */}
        <ScrollReveal direction="right" delay={0.1}>
          <motion.div
            style={{
              background: '#fff',
              padding: '3rem',
              borderRadius: '2rem',
              boxShadow: 'var(--shadow-md)',
              border: '1px solid var(--line)',
            }}
          >
            {success ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💜</div>
                <h4
                  style={{
                    color: 'var(--plum)',
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.6rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message sent!
                </h4>
                <p style={{ color: 'var(--soft-text)', fontSize: '1.02rem' }}>
                  Thank you for reaching out. We&apos;ll be in touch within 1–2 business days.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label className="form-label">Full Name</label>
                  <input className="form-input" {...register('full_name', { required: true })} placeholder="Your full name" required />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label className="form-label">Email Address</label>
                  <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@example.com" required />
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label className="form-label">How Can We Help?</label>
                  <select className="form-input" {...register('inquiry_type')}>
                    <option>Select One</option>
                    <option>Request Support</option>
                    <option>Volunteer Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Donation Question</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                <div style={{ marginBottom: '1.2rem' }}>
                  <label className="form-label">Message</label>
                  <textarea className="form-input" {...register('message', { required: true })} placeholder="Tell us more about how we can support or connect with you." style={{ minHeight: '120px', resize: 'vertical' }} required />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn btn-primary"
                  style={{ width: '100%', border: 'none' }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          #contact > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
