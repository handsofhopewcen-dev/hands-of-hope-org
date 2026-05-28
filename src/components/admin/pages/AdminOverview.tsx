'use client'

import { motion } from 'framer-motion'

interface Props {
  onNavigate: (page: string) => void
}

const stats = [
  { label: 'Active Cases', value: '24', sub: '↑ 4 new this week', icon: '🆘', color: 'var(--rose)' },
  { label: 'Active Volunteers', value: '37', sub: '↑ 6 pending approval', icon: '🙋', color: '#1D4E89' },
  { label: 'Families Served', value: '214', sub: '↑ 18 this month', icon: '👨‍👩‍👧', color: '#2E7D52' },
  { label: 'Donations (May)', value: '$4,820', sub: '↑ 22% vs last month', icon: '💝', color: 'var(--gold)' },
]

const recentIntake = [
  { name: 'Maria G.', type: 'Postpartum Support', status: 'New', statusClass: 'badge-new', date: 'May 23' },
  { name: 'Tamara B.', type: 'Emergency Relief', status: 'High Priority', statusClass: 'badge-high', date: 'May 22' },
  { name: 'Priya S.', type: 'Child Developmental Resources', status: 'In Review', statusClass: 'badge-review', date: 'May 21' },
  { name: 'Keisha L.', type: 'Postpartum Support', status: 'Resolved', statusClass: 'badge-resolved', date: 'May 20' },
  { name: 'Destiny R.', type: 'Emergency Relief', status: 'In Review', statusClass: 'badge-review', date: 'May 19' },
]

const recentActivity = [
  { icon: '🆘', bg: '#EEE7F2', title: 'New intake — Maria G.', sub: 'Postpartum support request · 2h ago' },
  { icon: '✅', bg: '#D1FAE5', title: 'Volunteer approved', sub: 'Janet G. — Outreach Partner · 4h ago' },
  { icon: '💝', bg: '#FEF3C7', title: 'Donation received — $150', sub: 'Anonymous · via Zeffy · 6h ago' },
  { icon: '📝', bg: '#EEE7F2', title: 'Case note added', sub: 'Tamara B. — Emergency Relief case · 8h ago' },
  { icon: '✅', bg: '#D1FAE5', title: 'Case resolved', sub: 'Keisha L. — Postpartum Support · Yesterday' },
]

export function AdminOverview({ onNavigate }: Props) {
  return (
    <div>
      {/* Stats grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem', marginBottom: '2rem' }}>
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            style={{
              background: '#fff',
              borderRadius: '1.2rem',
              padding: '1.5rem',
              border: '1px solid var(--line)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '4px',
                height: '100%',
                background: stat.color,
              }}
            />
            <div style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', marginBottom: '0.5rem' }}>
              {stat.label}
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--plum)', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--soft-text)', marginTop: '0.4rem' }}>
              {stat.sub}
            </div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1.2rem', fontSize: '2rem', opacity: 0.12 }}>
              {stat.icon}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Content grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '1.5rem' }}>
        {/* Recent Intake Table */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', overflow: 'hidden' }}>
          <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
            <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Recent Intake Submissions</div>
            <button
              onClick={() => onNavigate('intake')}
              style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}
            >
              View All
            </button>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Name', 'Type', 'Status', 'Date'].map((h) => (
                  <th key={h} style={{ background: '#F9F6FC', padding: '0.9rem 1.2rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', borderBottom: '1px solid var(--line)' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentIntake.map((row, i) => (
                <tr key={i} style={{ borderBottom: i < recentIntake.length - 1 ? '1px solid var(--line)' : 'none' }}>
                  <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}><strong>{row.name}</strong></td>
                  <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}>{row.type}</td>
                  <td style={{ padding: '0.95rem 1.2rem' }}><span className={`badge ${row.statusClass}`}>{row.status}</span></td>
                  <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Activity Feed */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', color: 'var(--plum)' }}>Recent Activity</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {recentActivity.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '0.8rem', alignItems: 'flex-start', padding: '0.9rem 0', borderBottom: i < recentActivity.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <strong style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--ink)' }}>{item.title}</strong>
                  <span style={{ fontSize: '0.78rem', color: 'var(--soft-text)' }}>{item.sub}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          div[style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="1.4fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
