'use client'

import { createBrowserClient } from '@supabase/ssr'

// Falls back to placeholder values when env vars aren't configured yet —
// the admin demo login (password: hope2026) works without Supabase.
export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co'
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key'
  return createBrowserClient(url, key)
}
