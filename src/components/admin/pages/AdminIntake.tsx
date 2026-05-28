'use client'

import { useState } from 'react'

const allIntake = [
  { name: 'Maria G.', type: 'Postpartum Support', priority: 'High', priorityClass: 'badge-high', status: 'New', statusClass: 'badge-new', date: 'May 23', assigned: 'Unassigned' },
  { name: 'Tamara B.', type: 'Emergency Relief', priority: 'High', priorityClass: 'badge-high', status: 'In Review', statusClass: 'badge-review', date: 'May 22', assigned: 'Janet G.' },
  { name: 'Priya S.', type: 'Child Developmental Resources', priority: 'Medium', priorityClass: 'badge-medium', status: 'In Review', statusClass: 'badge-review', date: 'May 21', assigned: 'Jordan W.' },
  { name: 'Keisha L.', type: 'Postpartum Support', priority: 'Low', priorityClass: 'badge-low', status: 'Resolved', statusClass: 'badge-resolved', date: 'May 20', assigned: 'Priya P.' },
  { name: 'Destiny R.', type: 'Emergency Relief', priority: 'High', priorityClass: 'badge-high', status: 'In Review', statusClass: 'badge-review', date: 'May 19', assigned: 'Janet G.' },
  { name: 'Courtney M.', type: 'Postpartum Support', priority: 'Medium', priorityClass: 'badge-medium', status: 'New', statusClass: 'badge-new', date: 'May 18', assigned: 'Unassigned' },
]

export function AdminIntake() {
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filters = ['all', 'New', 'In Review', 'Resolved']
  const filtered = allIntake.filter(
    (r) =>
      (filter === 'all' || r.status === filter) &&
      (r.name.toLowerCase().includes(search.toLowerCase()) || r.type.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div>
      <div style={{ display: 'flex', gap: '0.8rem', marginBottom: '1.2rem', flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              padding: '0.45rem 1rem',
              borderRadius: '100px',
              fontSize: '0.8rem',
              fontWeight: 600,
              cursor: 'pointer',
              background: filter === f ? 'var(--plum)' : 'transparent',
              color: filter === f ? '#fff' : 'var(--soft-text)',
              border: filter === f ? 'none' : '1.5px solid var(--line)',
              fontFamily: 'Jost, sans-serif',
            }}
          >
            {f === 'all' ? 'All' : f}
          </button>
        ))}
      </div>

      <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', overflow: 'hidden' }}>
        <div style={{ padding: '1.2rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--line)' }}>
          <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>Intake Management</div>
          <input
            placeholder="Search intake..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ padding: '0.5rem 1rem', border: '1.5px solid var(--line)', borderRadius: '0.8rem', fontFamily: 'Jost, sans-serif', fontSize: '0.85rem', outline: 'none', width: '220px' }}
          />
        </div>

        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              {['Client', 'Support Type', 'Priority', 'Status', 'Date', 'Assigned To', 'Actions'].map((h) => (
                <th key={h} style={{ background: '#F9F6FC', padding: '0.9rem 1.2rem', textAlign: 'left', fontSize: '0.78rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--soft-text)', borderBottom: '1px solid var(--line)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i} style={{ borderBottom: i < filtered.length - 1 ? '1px solid var(--line)' : 'none' }}>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}><strong>{row.name}</strong></td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem' }}>{row.type}</td>
                <td style={{ padding: '0.95rem 1.2rem' }}><span className={`badge ${row.priorityClass}`}>{row.priority}</span></td>
                <td style={{ padding: '0.95rem 1.2rem' }}><span className={`badge ${row.statusClass}`}>{row.status}</span></td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{row.date}</td>
                <td style={{ padding: '0.95rem 1.2rem', fontSize: '0.88rem', color: 'var(--soft-text)' }}>{row.assigned}</td>
                <td style={{ padding: '0.95rem 1.2rem' }}>
                  <button style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: row.status === 'New' ? 'var(--plum)' : 'transparent', color: row.status === 'New' ? '#fff' : 'var(--soft-text)', border: row.status === 'New' ? 'none' : '1.5px solid var(--line)', fontFamily: 'Jost, sans-serif' }}>
                    {row.status === 'New' ? 'Add Note' : 'Notes'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
