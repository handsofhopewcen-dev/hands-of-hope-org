'use client'

// No React hooks needed — pure display component

const monthlyDonations = [820, 1100, 950, 1350, 4820, 0, 0, 0, 0, 0, 0, 0]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const maxDonation = Math.max(...monthlyDonations)

const analyticsStats = [
  { label: 'Families Served YTD', value: '214', sub: 'Goal: 400 by Dec 2026', icon: '👨‍👩‍👧', color: 'var(--rose)' },
  { label: 'Total Donations YTD', value: '$18,450', sub: '↑ 34% vs last year', icon: '💰', color: '#1D4E89' },
  { label: 'Volunteer Hours', value: '612', sub: '37 active volunteers', icon: '🕐', color: '#2E7D52' },
  { label: 'Care Packages', value: '312', sub: 'Goal: 587 by Dec 2026', icon: '🎁', color: 'var(--gold)' },
]

const volunteerBreakdown = [
  { role: 'Outreach Partners', count: 12, pct: 65, color: 'var(--rose)' },
  { role: 'Childcare Support', count: 8, pct: 43, color: 'var(--plum)' },
  { role: 'Workshop Facilitators', count: 6, pct: 32, color: 'var(--gold)' },
  { role: 'Mentors', count: 5, pct: 27, color: 'var(--rose)' },
  { role: 'Other Roles', count: 6, pct: 32, color: 'var(--plum)' },
]

const impactGoals = [
  { label: 'Care Packages (587 goal)', current: 312, goal: 587 },
  { label: 'Families Served (400 goal)', current: 214, goal: 400 },
  { label: 'Volunteers (90 goal)', current: 37, goal: 90 },
  { label: 'Head Start Programs (15 goal)', current: 7, goal: 15 },
]

const donutData = [
  { label: 'Postpartum (40%)', pct: 40, color: 'var(--rose)' },
  { label: 'Developmental (24%)', pct: 24, color: 'var(--plum)' },
  { label: 'Crisis/Emergency (20%)', pct: 20, color: 'var(--gold)' },
  { label: 'Other (16%)', pct: 16, color: '#EEE7F2' },
]

export function AdminAnalytics() {
  return (
    <div>
      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.2rem', marginBottom: '1.5rem' }}>
        {analyticsStats.map((s, i) => (
          <div
            key={i}
            style={{ background: '#fff', borderRadius: '1.2rem', padding: '1.5rem', border: '1px solid var(--line)', position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: s.color }} />
            <div style={{ fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', marginBottom: '0.5rem' }}>{s.label}</div>
            <div style={{ fontSize: '2.2rem', fontWeight: 700, color: 'var(--plum)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--soft-text)', marginTop: '0.4rem' }}>{s.sub}</div>
            <div style={{ position: 'absolute', bottom: '1rem', right: '1.2rem', fontSize: '2rem', opacity: 0.12 }}>{s.icon}</div>
          </div>
        ))}
      </div>

      {/* Charts grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
        {/* Bar chart */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', color: 'var(--plum)' }}>Monthly Donations (2026)</div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '0.5rem', height: '140px' }}>
            {months.map((m, i) => {
              const pct = maxDonation > 0 && monthlyDonations[i] > 0 ? (monthlyDonations[i] / maxDonation * 100) : 4
              return (
                <div key={m} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', flex: 1 }}>
                  {monthlyDonations[i] > 0 && (
                    <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--plum)', textAlign: 'center' }}>
                      ${(monthlyDonations[i] / 1000).toFixed(1)}k
                    </div>
                  )}
                  <div
                    style={{
                      borderRadius: '0.4rem 0.4rem 0 0',
                      width: '100%',
                      height: `${pct}%`,
                      background: monthlyDonations[i] > 0 ? 'linear-gradient(to top, var(--plum), var(--rose))' : '#EEE7F2',
                      minHeight: '4px',
                    }}
                  />
                  <div style={{ fontSize: '0.65rem', color: 'var(--soft-text)', textAlign: 'center' }}>{m}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Donut */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', color: 'var(--plum)' }}>Cases by Support Type</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <svg width="120" height="120" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="45" fill="none" stroke="#EEE7F2" strokeWidth="18" />
              <circle cx="60" cy="60" r="45" fill="none" stroke="var(--rose)" strokeWidth="18" strokeDasharray="113 170" strokeDashoffset="-28" transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="45" fill="none" stroke="var(--plum)" strokeWidth="18" strokeDasharray="68 215" strokeDashoffset="-141" transform="rotate(-90 60 60)" />
              <circle cx="60" cy="60" r="45" fill="none" stroke="var(--gold)" strokeWidth="18" strokeDasharray="57 226" strokeDashoffset="-209" transform="rotate(-90 60 60)" />
              <text x="60" y="64" textAnchor="middle" fontSize="13" fontWeight="700" fill="var(--plum)" fontFamily="Jost,sans-serif">214</text>
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', flex: 1 }}>
              {donutData.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.82rem' }}>
                  <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                  {d.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Volunteer breakdown */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', color: 'var(--plum)' }}>Volunteer Engagement by Role</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
            {volunteerBreakdown.map((v, i) => (
              <div key={i}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                  <span>{v.role}</span>
                  <span style={{ fontWeight: 600 }}>{v.count}</span>
                </div>
                <div style={{ background: 'var(--mist)', borderRadius: '4px', height: '8px' }}>
                  <div style={{ background: v.color, width: `${v.pct}%`, height: '100%', borderRadius: '4px', transition: 'width 0.8s ease' }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact goals */}
        <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem' }}>
          <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '1.2rem', color: 'var(--plum)' }}>Program Impact Goals</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {impactGoals.map((g, i) => {
              const pct = Math.round((g.current / g.goal) * 100)
              return (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.82rem', marginBottom: '0.3rem' }}>
                    <span>{g.label}</span>
                    <span style={{ fontWeight: 600, color: 'var(--plum)' }}>{g.current} / {g.goal}</span>
                  </div>
                  <div style={{ background: 'var(--mist)', borderRadius: '4px', height: '10px' }}>
                    <div style={{ background: 'linear-gradient(90deg, var(--rose), var(--plum))', width: `${pct}%`, height: '100%', borderRadius: '4px', transition: 'width 0.8s ease' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1200px) {
          div[style*="repeat(4, 1fr)"] { grid-template-columns: repeat(2, 1fr) !important; }
          div[style*="1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
