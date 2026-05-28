'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import type {
  SupportRequestInput,
  VolunteerInput,
  PartnerInput,
  DonationQuestionInput,
} from '@/types'

type TabId = 'help' | 'volunteer' | 'partner' | 'donationq'

const tabs: { id: TabId; label: string }[] = [
  { id: 'help', label: 'Request Support' },
  { id: 'volunteer', label: '🤝 Volunteer' },
  { id: 'partner', label: '🏢 Partnership' },
  { id: 'donationq', label: '💛 Donation Questions' },
]

function SuccessMessage({ title, body }: { title: string; body: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className="text-center py-10 px-6"
      style={{
        background: 'var(--mist)',
        borderRadius: '1.2rem',
        marginTop: '1rem',
      }}
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
        {title}
      </h4>
      <p style={{ color: 'var(--soft-text)', fontSize: '1.02rem' }}>{body}</p>
    </motion.div>
  )
}

function SupportForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<SupportRequestInput>()

  const onSubmit = async (data: SupportRequestInput) => {
    setLoading(true)
    try {
      const res = await fetch('/api/intake', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) {
        setSuccess(true)
        reset()
      }
    } catch {
      alert('Something went wrong. Please email us at info@handsofhopewcen.org')
    }
    setLoading(false)
  }

  if (success)
    return (
      <SuccessMessage
        title="We've received your request 💜"
        body="Our team will reach out within 1–2 business days. You are not alone."
      />
    )

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Full Name *</label>
          <input className="form-input" {...register('full_name', { required: true })} placeholder="Your full name" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Email Address *</label>
          <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@example.com" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="tel" {...register('phone')} placeholder="(555) 000-0000" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Type of Support Needed *</label>
          <select className="form-input" {...register('support_type', { required: true })}>
            <option value="">Select One</option>
            <option>Postpartum Support</option>
            <option>Child Developmental Resources</option>
            <option>Emergency Relief</option>
            <option>Other</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Tell us more about your needs</label>
        <textarea className="form-input" {...register('message')} placeholder="Share what you're going through and how we can best support you." style={{ minHeight: '120px', resize: 'vertical' }} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
        {loading ? 'Sending...' : 'Submit Support Request'}
      </button>
    </form>
  )
}

function VolunteerForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<VolunteerInput>()

  const interests = [
    'Mentor', 'Childcare Support', 'Workshop Facilitator', 'Administrative Help',
    'Community Outreach', 'Event Support', 'Counseling & Advocacy', 'Fundraising',
  ]

  const onSubmit = async (data: VolunteerInput) => {
    setLoading(true)
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setSuccess(true); reset() }
    } catch { alert('Something went wrong. Please email us.') }
    setLoading(false)
  }

  if (success) return <SuccessMessage title="Thank you for your heart to serve! 🌸" body="We'll be in touch soon with next steps for joining our volunteer family." />

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Full Name *</label>
          <input className="form-input" {...register('full_name', { required: true })} placeholder="Your full name" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Email Address *</label>
          <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@example.com" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="tel" {...register('phone')} placeholder="(555) 000-0000" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Availability</label>
          <select className="form-input" {...register('availability')}>
            <option value="">Select</option>
            <option>Weekday mornings</option>
            <option>Weekday evenings</option>
            <option>Weekends</option>
            <option>Flexible</option>
          </select>
        </div>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Areas of Interest</label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {interests.map((interest) => (
            <label key={interest} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', fontWeight: 400, color: 'var(--soft-text)', cursor: 'pointer', fontSize: '1.02rem' }}>
              <input type="checkbox" {...register('interests')} value={interest} style={{ accentColor: 'var(--plum)' }} />
              {interest}
            </label>
          ))}
        </div>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Message</label>
        <textarea className="form-input" {...register('message')} placeholder="Tell us about your skills, experience, or why you'd like to volunteer." style={{ minHeight: '120px', resize: 'vertical' }} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-rose" style={{ width: '100%', border: 'none' }}>
        {loading ? 'Sending...' : 'Submit Volunteer Inquiry'}
      </button>
    </form>
  )
}

function PartnerForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<PartnerInput>()

  const onSubmit = async (data: PartnerInput) => {
    setLoading(true)
    try {
      const res = await fetch('/api/partner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (res.ok) { setSuccess(true); reset() }
    } catch { alert('Something went wrong. Please email us.') }
    setLoading(false)
  }

  if (success) return <SuccessMessage title="Partnership inquiry received! ✨" body="We're excited about partnering with you. Our team will follow up within 2–3 business days." />

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Full Name *</label>
          <input className="form-input" {...register('full_name', { required: true })} placeholder="Your full name" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Organization Name</label>
          <input className="form-input" {...register('organization')} placeholder="Your organization (optional)" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Email Address *</label>
          <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@example.com" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Phone Number</label>
          <input className="form-input" type="tel" {...register('phone')} placeholder="(555) 000-0000" />
        </div>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Partnership Type *</label>
        <select className="form-input" {...register('partnership_type', { required: true })}>
          <option value="">Select One</option>
          <option>Community Partnerships</option>
          <option>Corporate Sponsorships</option>
          <option>Church Partnerships</option>
          <option>Resource Partnerships</option>
          <option>Event Collaboration</option>
        </select>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Message</label>
        <textarea className="form-input" {...register('message')} placeholder="Tell us about your organization and how you'd like to partner." style={{ minHeight: '120px', resize: 'vertical' }} />
      </div>
      <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', border: 'none' }}>
        {loading ? 'Sending...' : 'Submit Partnership Inquiry'}
      </button>
    </form>
  )
}

function DonationQForm() {
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, reset } = useForm<DonationQuestionInput>()

  const onSubmit = async (data: DonationQuestionInput) => {
    setLoading(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, inquiry_type: 'Donation Question' }),
      })
      if (res.ok) { setSuccess(true); reset() }
    } catch { alert('Something went wrong. Please email us.') }
    setLoading(false)
  }

  if (success) return <SuccessMessage title="Question received! 💛" body="We'll respond to your donation question within 1 business day." />

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Full Name *</label>
          <input className="form-input" {...register('full_name', { required: true })} placeholder="Your full name" />
        </div>
        <div style={{ marginBottom: '1.2rem' }}>
          <label className="form-label">Email Address *</label>
          <input className="form-input" type="email" {...register('email', { required: true })} placeholder="you@example.com" />
        </div>
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Phone Number (optional)</label>
        <input className="form-input" type="tel" {...register('phone')} placeholder="(555) 000-0000" />
      </div>
      <div style={{ marginBottom: '1.2rem' }}>
        <label className="form-label">Your Question *</label>
        <textarea className="form-input" {...register('message', { required: true })} placeholder="e.g. Questions about Zeffy, tax receipts, recurring donations, or how donations are used." style={{ minHeight: '120px', resize: 'vertical' }} required />
      </div>
      <button type="submit" disabled={loading} className="btn btn-gold" style={{ width: '100%', border: 'none' }}>
        {loading ? 'Sending...' : 'Send Question'}
      </button>
    </form>
  )
}

export function FormsSection() {
  const [activeTab, setActiveTab] = useState<TabId>('help')

  const formComponents: Record<TabId, React.ReactNode> = {
    help: <SupportForm />,
    volunteer: <VolunteerForm />,
    partner: <PartnerForm />,
    donationq: <DonationQForm />,
  }

  return (
    <section
      id="get-help"
      style={{ background: '#fff', padding: '7rem 0' }}
    >
      <div style={{ width: 'min(1200px, 92%)', margin: '0 auto' }}>
        <ScrollReveal direction="up">
          <span className="section-eyebrow">Take the Next Step</span>
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
            <span style={{ color: 'var(--plum)' }}>for you</span>
          </h2>
          <p
            style={{
              maxWidth: '640px',
              lineHeight: 1.95,
              color: 'var(--soft-text)',
              fontSize: '1rem',
              marginBottom: '2.5rem',
            }}
          >
            Whether you need support, want to serve, or wish to partner — reach
            out and we&apos;ll connect you to the right resources.
          </p>
        </ScrollReveal>

        {/* Tab buttons */}
        <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '0.65rem 1.5rem',
                borderRadius: '100px',
                fontSize: '1.06rem',
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: 'Jost, sans-serif',
                border: '1.5px solid',
                transition: 'all 0.25s',
                background: activeTab === tab.id ? 'var(--plum)' : 'transparent',
                color: activeTab === tab.id ? '#fff' : 'var(--soft-text)',
                borderColor: activeTab === tab.id ? 'var(--plum)' : 'var(--line)',
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Form panel */}
        <div
          style={{
            background: 'var(--warm)',
            border: '1px solid var(--line)',
            borderRadius: '1.8rem',
            padding: '2.5rem',
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              {formComponents[activeTab]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          #get-help form > div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
