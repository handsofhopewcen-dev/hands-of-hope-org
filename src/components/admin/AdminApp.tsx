'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { createClient } from '@/lib/supabase'
import { AdminOverview } from './pages/AdminOverview'
import { AdminVolunteers } from './pages/AdminVolunteers'
import { AdminDonors } from './pages/AdminDonors'
import { AdminIntake } from './pages/AdminIntake'
import { AdminCaseNotes } from './pages/AdminCaseNotes'
import { AdminWorkflows } from './pages/AdminWorkflows'
import { AdminAnalytics } from './pages/AdminAnalytics'

type PageId =
  | 'overview'
  | 'volunteers'
  | 'donors'
  | 'intake'
  | 'casenotes'
  | 'workflows'
  | 'analytics'

interface NavItem {
  id: PageId | 'website'
  icon: string
  label: string
  section: string
}

const navItems: NavItem[] = [
  { id: 'overview', icon: '📊', label: 'Dashboard', section: 'Overview' },
  { id: 'volunteers', icon: '🙋', label: 'Volunteers', section: 'People' },
  { id: 'donors', icon: '💝', label: 'Donors', section: 'People' },
  { id: 'intake', icon: '🆘', label: 'Intake', section: 'Case Management' },
  { id: 'casenotes', icon: '📝', label: 'Case Notes', section: 'Case Management' },
  { id: 'workflows', icon: '⚙️', label: 'Workflows', section: 'Operations' },
  { id: 'analytics', icon: '📈', label: 'Analytics', section: 'Operations' },
  { id: 'website', icon: '🌐', label: 'View Website', section: 'Website' },
]

const pageTitles: Record<PageId, string> = {
  overview: 'Dashboard Overview',
  volunteers: 'Volunteer Management',
  donors: 'Donor Tracking',
  intake: 'Intake Management',
  casenotes: 'Case Notes',
  workflows: 'Automated Workflows',
  analytics: 'Analytics & Impact',
}

function LoginScreen({ onLogin }: { onLogin: (email: string) => void }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Demo mode: accept any email with password "hope2026"
    if (password === 'hope2026') {
      onLogin(email || 'admin@handsofhopewcen.org')
      setLoading(false)
      return
    }

    // Try Supabase auth
    try {
      const supabase = createClient()
      const { error: authError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (authError) {
        setError('Incorrect credentials. Demo: any email + "hope2026"')
      } else {
        onLogin(email)
      }
    } catch {
      setError('Incorrect credentials. Demo: any email + "hope2026"')
    }
    setLoading(false)
  }

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[9999]"
      style={{
        background: 'linear-gradient(135deg, #3D1D47 0%, #5A2D66 60%, #B85C7A 100%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        style={{
          background: '#fff',
          borderRadius: '1.5rem',
          padding: '2.8rem',
          width: 'min(420px, 92vw)',
          boxShadow: '0 20px 60px rgba(14,6,12,.25)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💜</div>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              color: 'var(--plum)',
              fontFamily: '"Cormorant Garamond", serif',
            }}
          >
            Hands of Hope
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--soft-text)', marginTop: '0.3rem' }}>
            Staff &amp; Admin Portal
          </p>
        </div>

        {error && (
          <div
            style={{
              background: '#FEE2E2',
              color: '#991B1B',
              borderRadius: '0.6rem',
              padding: '0.7rem 1rem',
              fontSize: '0.85rem',
              marginBottom: '1rem',
              textAlign: 'center',
            }}
          >
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '1rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--plum)',
                marginBottom: '0.4rem',
              }}
            >
              Username
            </label>
            <input
              type="text"
              className="form-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@handsofhopewcen.org"
            />
          </div>
          <div style={{ marginBottom: '1.5rem' }}>
            <label
              style={{
                display: 'block',
                fontSize: '0.82rem',
                fontWeight: 600,
                color: 'var(--plum)',
                marginBottom: '0.4rem',
              }}
            >
              Password
            </label>
            <input
              type="password"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              background: 'var(--plum)',
              color: '#fff',
              border: 'none',
              borderRadius: '0.8rem',
              padding: '1rem',
              fontWeight: 600,
              fontSize: '0.95rem',
              cursor: 'pointer',
              fontFamily: 'Jost, sans-serif',
              transition: 'background 0.3s',
            }}
          >
            {loading ? 'Signing in...' : 'Sign In to Dashboard'}
          </button>
        </form>

        <p
          style={{
            fontSize: '0.75rem',
            color: 'var(--soft-text)',
            marginTop: '1rem',
            textAlign: 'center',
          }}
        >
          Demo: any username + password &quot;hope2026&quot;
        </p>
      </motion.div>
    </div>
  )
}

export function AdminApp() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [adminEmail, setAdminEmail] = useState('')
  const [activePage, setActivePage] = useState<PageId>('overview')
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  const sections = ['Overview', 'People', 'Case Management', 'Operations', 'Website']

  const pageComponents: Record<PageId, React.ReactNode> = {
    overview: <AdminOverview onNavigate={(p) => setActivePage(p as PageId)} />,
    volunteers: <AdminVolunteers />,
    donors: <AdminDonors />,
    intake: <AdminIntake />,
    casenotes: <AdminCaseNotes />,
    workflows: <AdminWorkflows />,
    analytics: <AdminAnalytics />,
  }

  const handleLogin = (email: string) => {
    setAdminEmail(email)
    setLoggedIn(true)
  }

  const handleLogout = async () => {
    try {
      const supabase = createClient()
      await supabase.auth.signOut()
    } catch {}
    setLoggedIn(false)
    setAdminEmail('')
  }

  if (!loggedIn) {
    return <LoginScreen onLogin={handleLogin} />
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F4F1F8' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '260px',
          minHeight: '100vh',
          background: 'var(--plum-deep)',
          position: 'fixed',
          top: 0,
          left: 0,
          display: 'flex',
          flexDirection: 'column',
          zIndex: 100,
        }}
      >
        <div
          style={{
            padding: '1.5rem 1.5rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <h2 style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 700 }}>
            Hands of Hope
          </h2>
          <small
            style={{
              color: 'rgba(255,255,255,.45)',
              fontSize: '0.72rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Admin Dashboard
          </small>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          {sections.map((section) => {
            const items = navItems.filter((i) => i.section === section)
            if (!items.length) return null
            return (
              <div key={section} style={{ padding: '0.8rem 0' }}>
                <div
                  style={{
                    padding: '0.4rem 1.5rem',
                    fontSize: '0.68rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.12em',
                    color: 'rgba(255,255,255,.35)',
                    fontWeight: 600,
                  }}
                >
                  {section}
                </div>
                {items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      if (item.id === 'website') {
                        window.open('/', '_blank')
                      } else {
                        setActivePage(item.id as PageId)
                      }
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1.5rem',
                      color:
                        activePage === item.id
                          ? '#fff'
                          : 'rgba(255,255,255,.65)',
                      cursor: 'pointer',
                      background:
                        activePage === item.id
                          ? 'rgba(255,255,255,.08)'
                          : 'none',
                      border: 'none',
                      borderLeft:
                        activePage === item.id
                          ? '3px solid var(--rose)'
                          : '3px solid transparent',
                      width: '100%',
                      textAlign: 'left',
                      fontSize: '0.88rem',
                      fontFamily: 'Jost, sans-serif',
                      transition: 'all 0.2s',
                    }}
                  >
                    <span style={{ fontSize: '1.1rem', width: '20px', textAlign: 'center' }}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
              </div>
            )
          })}
        </div>

        {/* Bottom: user info */}
        <div
          style={{
            marginTop: 'auto',
            padding: '1.5rem',
            borderTop: '1px solid rgba(255,255,255,.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'var(--rose)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                fontWeight: 700,
                fontSize: '0.85rem',
                flexShrink: 0,
              }}
            >
              {adminEmail.charAt(0).toUpperCase() || 'A'}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <strong
                style={{
                  display: 'block',
                  color: '#fff',
                  fontSize: '0.85rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Admin
              </strong>
              <span
                style={{
                  color: 'rgba(255,255,255,.45)',
                  fontSize: '0.75rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  display: 'block',
                }}
              >
                {adminEmail || 'Hands of Hope'}
              </span>
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,.45)',
              cursor: 'pointer',
              fontSize: '0.8rem',
              marginTop: '0.5rem',
              fontFamily: 'Jost, sans-serif',
              padding: 0,
              transition: 'color 0.2s',
            }}
            className="hover:text-white"
          >
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main style={{ marginLeft: '260px', flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Top bar */}
        <div
          style={{
            background: '#fff',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid var(--line)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
          }}
        >
          <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)' }}>
            {pageTitles[activePage]}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ fontSize: '0.82rem', color: 'var(--soft-text)' }}>{today}</div>
          </div>
        </div>

        {/* Page content */}
        <div style={{ padding: '2rem', flex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activePage}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {pageComponents[activePage]}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
