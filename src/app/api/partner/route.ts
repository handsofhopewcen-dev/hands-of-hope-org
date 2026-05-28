import { createServiceClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { full_name, organization, email, phone, partnership_type, message } = body

    if (!full_name || !email || !partnership_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = await createServiceClient()

    const { data, error } = await supabase
      .from('partner_inquiries')
      .insert({
        full_name: full_name.trim(),
        organization: organization?.trim() || null,
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        partnership_type,
        message: message?.trim() || null,
        status: 'New',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase partner error:', error)
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Partner API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
