import { createServiceClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { full_name, email, phone, availability, interests, message } = body

    if (!full_name || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = await createServiceClient()

    const { data, error } = await supabase
      .from('volunteers')
      .insert({
        full_name: full_name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        availability: availability || null,
        interests: Array.isArray(interests) ? interests : [],
        message: message?.trim() || null,
        status: 'Pending',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase volunteer error:', error)
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Volunteer API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
