import React from 'react'
import type { Metadata } from 'next'

// Server Component layout — keeps metadata working while the page itself is client-rendered
export const metadata: Metadata = {
  title: 'Admin Dashboard — Hands of Hope',
  description: 'Staff and admin portal for Hands of Hope WCEN',
  robots: { index: false, follow: false },
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
