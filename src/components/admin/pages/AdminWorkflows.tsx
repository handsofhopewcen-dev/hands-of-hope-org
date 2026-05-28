'use client'

import { useState } from 'react'

const initialWorkflows = [
  { icon: '📧', name: 'Auto Welcome Email', desc: 'Sends a warm welcome email to new support requestors within 15 minutes of form submission.', active: true },
  { icon: '🔔', name: 'Staff Intake Alert', desc: 'Notifies admin via email when a new high-priority intake is submitted.', active: true },
  { icon: '🙋', name: 'Volunteer Confirmation', desc: 'Sends confirmation email when a volunteer application is received and assigns pending status.', active: true },
  { icon: '📅', name: 'Weekly Summary Report', desc: 'Sends admin a weekly digest every Monday with new cases, donations, and volunteer activity.', active: false },
  { icon: '💝', name: 'Donor Thank You', desc: 'Sends personalized thank-you email after each Zeffy donation is processed.', active: true },
  { icon: '⚠️', name: 'Stale Case Alert', desc: 'Flags cases that have been "In Review" for more than 7 days with no note update.', active: true },
]

export function AdminWorkflows() {
  const [workflows, setWorkflows] = useState(initialWorkflows)

  const toggle = (idx: number) => {
    setWorkflows((prev) =>
      prev.map((w, i) => (i === idx ? { ...w, active: !w.active } : w))
    )
  }

  return (
    <div>
      <p style={{ fontSize: '0.88rem', color: 'var(--soft-text)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
        Configure automated workflows that trigger based on form submissions, status changes, and scheduled events. Toggle each workflow on or off.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.2rem' }}>
        {workflows.map((w, i) => (
          <div
            key={i}
            style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}
          >
            <div style={{ fontSize: '1.6rem', marginBottom: '0.8rem' }}>{w.icon}</div>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--plum)', marginBottom: '0.4rem' }}>{w.name}</div>
            <div style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--soft-text)', marginBottom: '1rem' }}>{w.desc}</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: '0.82rem', color: 'var(--soft-text)' }}>
                {w.active ? 'Active' : 'Inactive'}
              </span>
              {/* Toggle switch */}
              <label
                style={{ position: 'relative', width: '40px', height: '22px', cursor: 'pointer' }}
                onClick={() => toggle(i)}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: w.active ? 'var(--plum)' : '#D1D5DB',
                    borderRadius: '100px',
                    transition: 'background 0.3s',
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: '#fff',
                    top: '3px',
                    left: w.active ? '21px' : '3px',
                    transition: 'left 0.3s',
                  }}
                />
              </label>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          div[style*="repeat(3, 1fr)"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
