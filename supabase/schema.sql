-- ============================================================
-- Hands of Hope WCEN — Supabase Database Schema
-- Run this in your Supabase SQL editor to create all tables
-- ============================================================

-- Enable Row Level Security
-- (Tables require auth by default; public forms use anon key with INSERT only)

-- ============================================================
-- INTAKE SUBMISSIONS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.intake_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  support_type TEXT NOT NULL CHECK (support_type IN (
    'Postpartum Support',
    'Child Developmental Resources',
    'Emergency Relief',
    'Other'
  )),
  message TEXT,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Review', 'Resolved')),
  priority TEXT NOT NULL DEFAULT 'Medium' CHECK (priority IN ('High', 'Medium', 'Low')),
  assigned_to TEXT
);

-- RLS: Anyone can insert (public form), only authenticated users can read/update
ALTER TABLE public.intake_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create intake" ON public.intake_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated can read intake" ON public.intake_submissions
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated can update intake" ON public.intake_submissions
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- VOLUNTEERS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.volunteers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  role TEXT,
  availability TEXT,
  interests TEXT[] DEFAULT '{}',
  message TEXT,
  status TEXT NOT NULL DEFAULT 'Pending' CHECK (status IN ('Active', 'Pending', 'Inactive'))
);

ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can apply as volunteer" ON public.volunteers
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated can read volunteers" ON public.volunteers
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated can update volunteers" ON public.volunteers
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- DONORS
-- ============================================================
CREATE TABLE IF NOT EXISTS public.donors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  name TEXT NOT NULL,
  email TEXT,
  total_given NUMERIC(10, 2) DEFAULT 0,
  last_donation_date DATE,
  donation_type TEXT CHECK (donation_type IN ('One-time', 'Monthly', 'Institutional', 'Grant')),
  tags TEXT[] DEFAULT '{}',
  notes TEXT
);

ALTER TABLE public.donors ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can manage donors" ON public.donors
  TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- CASE NOTES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.case_notes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  intake_id UUID REFERENCES public.intake_submissions(id) ON DELETE CASCADE,
  author TEXT NOT NULL DEFAULT 'Admin',
  note_text TEXT NOT NULL
);

ALTER TABLE public.case_notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated can manage case notes" ON public.case_notes
  TO authenticated USING (true) WITH CHECK (true);

-- ============================================================
-- CONTACT MESSAGES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  inquiry_type TEXT,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'Read', 'Replied'))
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send contact message" ON public.contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated can read contact messages" ON public.contact_messages
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated can update contact messages" ON public.contact_messages
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- PARTNER INQUIRIES
-- ============================================================
CREATE TABLE IF NOT EXISTS public.partner_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  full_name TEXT NOT NULL,
  organization TEXT,
  email TEXT NOT NULL,
  phone TEXT,
  partnership_type TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'New' CHECK (status IN ('New', 'In Review', 'Approved', 'Declined'))
);

ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit partnership inquiry" ON public.partner_inquiries
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Authenticated can read partner inquiries" ON public.partner_inquiries
  FOR SELECT TO authenticated USING (true);

CREATE POLICY "Authenticated can update partner inquiries" ON public.partner_inquiries
  FOR UPDATE TO authenticated USING (true);

-- ============================================================
-- INDEXES FOR PERFORMANCE
-- ============================================================
CREATE INDEX IF NOT EXISTS idx_intake_status ON public.intake_submissions(status);
CREATE INDEX IF NOT EXISTS idx_intake_created ON public.intake_submissions(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_volunteers_status ON public.volunteers(status);
CREATE INDEX IF NOT EXISTS idx_contact_status ON public.contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_case_notes_intake ON public.case_notes(intake_id);

-- ============================================================
-- REALTIME (optional — enable in Supabase dashboard too)
-- ============================================================
-- ALTER PUBLICATION supabase_realtime ADD TABLE public.intake_submissions;
-- ALTER PUBLICATION supabase_realtime ADD TABLE public.volunteers;
