'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface CaseNote {
  author: string
  date: string
  text: string
}

interface Case {
  name: string
  type: string
  status: string
  preview: string
  date: string
  notes: CaseNote[]
}

const cases: Case[] = [
  {
    name: 'Maria G.',
    type: 'Postpartum Support',
    status: 'New',
    preview: 'New postpartum case — needs home visit...',
    date: 'May 23, 2026',
    notes: [
      { author: 'Ashley M.', date: 'May 23, 2026 at 9:14 AM', text: 'Initial intake completed via phone. Client is 4 weeks postpartum, first-time mother. Reports feeling overwhelmed and isolated. No family support nearby. Referred her to postpartum wellness check-in program. Will schedule home visit for next week.' },
      { author: 'System', date: 'May 23, 2026 at 9:00 AM', text: 'New intake form submitted via website. Support type: Postpartum Support. Priority assigned: High.' },
    ],
  },
  {
    name: 'Tamara B.',
    type: 'Emergency Relief',
    status: 'In Review',
    preview: 'Referral from St. Luke\'s — housing instability...',
    date: 'May 22, 2026',
    notes: [
      { author: 'Janet G.', date: 'May 22, 2026 at 2:30 PM', text: 'Referred by St. Luke\'s social worker. Client facing housing instability with a 2-month-old infant. Connecting to emergency resources and temporary housing assistance.' },
    ],
  },
  {
    name: 'Priya S.',
    type: 'Child Developmental Resources',
    status: 'In Review',
    preview: 'Child 18mo — delayed speech, referred to...',
    date: 'May 21, 2026',
    notes: [
      { author: 'Jordan W.', date: 'May 21, 2026 at 11:00 AM', text: '18-month-old with suspected speech delay. Referred to ECI (Early Childhood Intervention). Provided parent resources for home exercises.' },
    ],
  },
  {
    name: 'Destiny R.',
    type: 'Emergency Relief',
    status: 'In Review',
    preview: 'Emergency supplies requested, 2 children...',
    date: 'May 19, 2026',
    notes: [
      { author: 'Janet G.', date: 'May 19, 2026 at 4:00 PM', text: 'Family of 2 children in urgent need of diapers, formula, and food. Coordinating with HEB food pantry and local diaper bank for immediate delivery.' },
    ],
  },
]

export function AdminCaseNotes() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [newNote, setNewNote] = useState('')
  const [caseList, setCaseList] = useState(cases)

  const selected = caseList[selectedIdx]

  const addNote = () => {
    if (!newNote.trim()) return
    const now = new Date()
    const dateStr = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' at ' + now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })
    setCaseList((prev) =>
      prev.map((c, i) =>
        i === selectedIdx
          ? { ...c, notes: [{ author: 'Admin', date: dateStr, text: newNote }, ...c.notes] }
          : c
      )
    )
    setNewNote('')
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '1.5rem', height: 'calc(100vh - 140px)' }}>
      {/* Cases list */}
      <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '1rem 1.2rem', borderBottom: '1px solid var(--line)', fontWeight: 600, fontSize: '0.88rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span>Active Cases</span>
          <span style={{ fontSize: '0.78rem', color: 'var(--soft-text)' }}>{caseList.length} total</span>
        </div>
        <div style={{ overflowY: 'auto', flex: 1 }}>
          {caseList.map((c, i) => (
            <div
              key={i}
              onClick={() => setSelectedIdx(i)}
              style={{
                padding: '1rem 1.2rem',
                borderBottom: '1px solid var(--line)',
                cursor: 'pointer',
                background: selectedIdx === i ? 'var(--mist)' : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              <div style={{ fontWeight: 600, fontSize: '0.88rem', color: 'var(--plum)' }}>{c.name}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--soft-text)', marginTop: '0.2rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.preview}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--soft-text)', marginTop: '0.2rem' }}>{c.date}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Note detail */}
      <div style={{ background: '#fff', borderRadius: '1.2rem', border: '1px solid var(--line)', padding: '1.5rem', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--line)', marginBottom: '1rem' }}>
          <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--plum)' }}>{selected.name}</div>
          <div style={{ fontSize: '0.82rem', color: 'var(--soft-text)', marginTop: '0.2rem' }}>
            {selected.type} · <span className={`badge ${selected.status === 'New' ? 'badge-new' : selected.status === 'In Review' ? 'badge-review' : 'badge-resolved'}`}>{selected.status}</span>
          </div>
        </div>

        {/* Notes */}
        <div style={{ flex: 1, overflowY: 'auto', marginBottom: '1rem' }}>
          {selected.notes.map((note, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              style={{ background: '#F9F6FC', borderRadius: '0.8rem', padding: '1rem', marginBottom: '0.8rem', borderLeft: '3px solid var(--rose)' }}
            >
              <div style={{ fontSize: '0.72rem', color: 'var(--soft-text)', marginBottom: '0.4rem' }}>
                {note.author} · {note.date}
              </div>
              <div style={{ fontSize: '0.88rem', lineHeight: 1.7 }}>{note.text}</div>
            </motion.div>
          ))}
        </div>

        {/* Add note */}
        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--line)' }}>
          <textarea
            value={newNote}
            onChange={(e) => setNewNote(e.target.value)}
            placeholder="Add a confidential case note..."
            style={{ width: '100%', border: '1.5px solid var(--line)', borderRadius: '0.8rem', padding: '0.8rem', fontFamily: 'Jost, sans-serif', fontSize: '0.88rem', outline: 'none', resize: 'none', height: '80px' }}
          />
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '0.6rem' }}>
            <button
              onClick={addNote}
              style={{ padding: '0.45rem 1rem', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', background: 'var(--plum)', color: '#fff', border: 'none', fontFamily: 'Jost, sans-serif' }}
            >
              Add Note
            </button>
            <select style={{ padding: '0.45rem 0.8rem', borderRadius: '0.6rem', border: '1.5px solid var(--line)', fontFamily: 'Jost, sans-serif', fontSize: '0.82rem', cursor: 'pointer', color: 'var(--soft-text)' }}>
              <option>Update Status...</option>
              <option>New</option>
              <option>In Review</option>
              <option>Resolved</option>
            </select>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          div[style*="300px 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
