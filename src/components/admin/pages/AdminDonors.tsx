'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const donors = [
  { name: 'Anonymous', email: '—', total: '$150', last: 'May 23, 2026', type: 'One-time', tag: 'New', tagClass: 'badge-new' },
  { name: 'James & Carol B.', email: 'jcarol@email.com', total: '$1,200', last: 'May 15, 2026', type: 'Monthly', tag: 'Champion', tagClass: 'badge-active' },
  { name: 'Grace Church Houston', email: 'giving@gracechurch.org', total: '$3,500', last: 'Apr 30, 2026', type: 'Institutional', tag: 'Partner', tagClass: 'badge-active' },
  { name: 'Melissa A.', email: 'melissa@email.com', total: '$75', last: 'Mar 10, 2026', type: 'One-time', tag: '—', tagClass: '' },
  { name: 'Houston Community Fund', email: 'grants@hcf.org', total: '$5,000', last: 'Jan 1, 2026', type: 'Grant', tag: 'Major', tagClass: 'badge-active' },
]

export function AdminDonors() {
  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const filtered = donors.filter((d) =>
    d.name.toLowerCase().includes(search.toLowerCase()) ||
    d.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', overflow: 'hidden' }}>
        <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Donor Tracking</div>
          <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
            <input
              placeholder="Search donors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ padding: '0.5rem 1rem', border: '1.5px solid var(--line)', borderRadius: '0.8rem', fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', outline: 'none', width: '220px' }}
            />
            <button
              onClick={() => setShowModal(true)}
              style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}
            >
              + Add Donor
            </button>
          </div>
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Name', 'Email', 'Total Given', 'Last Donation', 'Type', 'Tags'].map((h) => (
                <th key={h} style={{ background: '#F9F6FC', padding: '0.9rem 1.2rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', borderBottom: '1px solid var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((d, i) => (
              <tr key={i} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}><strong>{d.name}</strong></td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{d.email}</td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', fontWeight: 600, color: 'var(--plum)' }}>{d.total}</td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{d.last}</td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}>{d.type}</td>
                <td style={{ padding: '0.95rem 1.2rem' }}>
                  {d.tagClass ? <span className={`badge ${d.tagClass}`}>{d.tag}</span> : <span style={{ color: 'var(--soft-text)', fontSize: '0.85rem' }}>—</span>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--plum)' }}>Add Donor Record</div>
                <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', fontSize: '1.4rem', cursor: 'pointer', color: 'var(--soft-text)' }}>✕</button>
              </div>
              {['Name', 'Email', 'Donation Amount'].map((label) => (
                <div key={label}>
                  <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.4rem' }}>{label}</label>
                  <input type={label === 'Donation Amount' ? 'number' : 'text'} style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem 1rem', fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', marginBottom: '1rem' }} placeholder={label} />
                </div>
              ))}
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.4rem' }}>Donation Type</label>
              <select style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem 1rem', fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', marginBottom: '1rem' }}>
                <option>One-time</option>
                <option>Monthly</option>
                <option>Institutional</option>
                <option>Grant</option>
              </select>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--plum)', marginBottom: '0.4rem' }}>Notes</label>
              <textarea style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem 1rem', fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', marginBottom: '1.5rem', resize: 'vertical', minHeight: '100px' }} placeholder="Additional notes..." />
              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowModal(false)} style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'transparent', border: '1.5px solid var(--line)', color: 'var(--soft-text)', fontFamily: 'Jost, sans-serif' }}>Cancel</button>
                <button onClick={() => setShowModal(false)} style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}>Save Donor</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
