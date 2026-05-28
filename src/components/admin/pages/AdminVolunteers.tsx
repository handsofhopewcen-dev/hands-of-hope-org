'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const initialVolunteers = [
  { name: 'Janet George', email: 'janet@email.com', role: 'Outreach Partner', status: 'Active', joined: 'Jan 2026' },
  { name: 'Jordan Williams', email: 'jordan@email.com', role: 'Childcare Support', status: 'Active', joined: 'Feb 2026' },
  { name: 'Simone Davis', email: 'simone@email.com', role: 'Workshop Facilitator', status: 'Pending', joined: 'May 2026' },
  { name: 'Marcus Thompson', email: 'marcus@email.com', role: 'Event Support', status: 'Pending', joined: 'May 2026' },
  { name: 'Priya Patel', email: 'priya@email.com', role: 'Mentor', status: 'Active', joined: 'Mar 2026' },
  { name: 'Deondra Harris', email: 'deondra@email.com', role: 'Fundraising', status: 'Inactive', joined: 'Dec 2025' },
]

const statusClass = (s: string) => {
  if (s === 'Active') return 'badge-active'
  if (s === 'Pending') return 'badge-pending'
  return 'badge-inactive'
}

export function AdminVolunteers() {
  const [volunteers, setVolunteers] = useState(initialVolunteers)
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = volunteers.filter(
    (v) =>
      v.name.toLowerCase().includes(search.toLowerCase()) ||
      v.email.toLowerCase().includes(search.toLowerCase()) ||
      v.role.toLowerCase().includes(search.toLowerCase())
  )

  const approve = (idx: number) => {
    setVolunteers((prev) =>
      prev.map((v, i) => (i === idx ? { ...v, status: 'Active' } : v))
    )
  }

  return (
    <div>
      <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', overflow: 'hidden' }}>
        <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Volunteer Management</div>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <input
              placeholder="Search volunteers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: '0.5rem 1rem', border: '1.5px solid var(--line)', borderRadius: '0.8rem', fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', outline: 'none', width: '220px' }}
            />
            <button
              onClick={() => setShowModal(true)}
              style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}
            >
              + Add Volunteer
            </button>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'Email', 'Role', 'Status', 'Joined', 'Actions'].map((h) => (
                <th key={h} style={{ background: '#F9F6FC', padding: '0.9rem 1.2rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', borderBottom: '1px solid var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((v, i) => (
              <tr key={i} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}><strong>{v.name}</strong></td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{v.email}</td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}>{v.role}</td>
                <td style={{ padding: '0.95rem 1.2rem' }}><span className={`badge ${statusClass(v.status)}`}>{v.status}</span></td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{v.joined}</td>
                <td style={{ padding: '0.95rem 1.2rem' }}>
                  {v.status === 'Pending' ? (
                    <button
                      onClick={() => approve(i)}
                      style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: '#2E7D52', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}
                    >
                      Approve
                    </button>
                  ) : (
                    <button style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'transparent', border: '1.5px solid var(--line)', color: 'var(--soft-text)', fontFamily: 'Jost, sans-serif' }}>
                      Notes
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-[200] flex items-center justify-center p-4"
            style={{ background: 'rgba(14,6,12,.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              style={{ background: '#fff', borderRadius: '1.4rem', padding: '2rem', width: 'min(560px, 100%)', maxHeight: '90vh', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--plum)' }}>Add Volunteer</div>
                <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--soft-text)' }}>✕</button>
              </div>
              {['Full Name', 'Email', 'Phone'].map((label) => (
                <div key={label}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.4rem' }}>{label}</label>
                  <input style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem 1rem', fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', marginBottom: '1rem' }} placeholder={label} />
                </div>
              ))}
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.4rem' }}>Role / Area</label>
              <select style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem 1rem', fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', marginBottom: '1.5rem' }}>
                <option>Select Role</option>
                {['Mentor', 'Childcare Support', 'Workshop Facilitator', 'Administrative Help', 'Community Outreach', 'Event Support', 'Counseling & Advocacy', 'Fundraising'].map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowModal(false)} style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'transparent', border: '1.5px solid var(--line)', color: 'var(--soft-text)', fontFamily: 'Jost, sans-serif' }}>Cancel</button>
                <button onClick={() => setShowModal(false)} style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}>Add Volunteer</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
