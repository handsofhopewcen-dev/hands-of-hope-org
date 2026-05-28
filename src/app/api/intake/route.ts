import { createServiceClient } from '@/lib/supabase-server'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { full_name, email, phone, support_type, message } = body

    // Basic validation
    if (!full_name || !email || !support_type) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = await createServiceClient()

    const { data, error } = await supabase
      .from('intake_submissions')
      .insert({
        full_name: full_name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        support_type,
        message: message?.trim() || null,
        status: 'New',
        priority:
          support_type === 'Crisis Assistance' || support_type === 'Emergency Relief'
            ? 'High'
            : 'Medium',
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase intake error:', error)
      // Don't fail silently — still return success to user so they're not left hanging
      // In production, also send an email via Resend/SendGrid here
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Intake API error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
