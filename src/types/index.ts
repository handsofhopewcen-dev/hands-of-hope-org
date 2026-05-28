// ============================================================
// Hands of Hope — TypeScript Types
// ============================================================

export interface IntakeSubmission {
  id: string
  created_at: string
  full_name: string
  email: string
  phone?: string
  support_type: SupportType
  message?: string
  status: IntakeStatus
  priority: Priority
  assigned_to?: string
}

export type SupportType =
  | 'Postpartum Support'
  | 'Child Developmental Resources'
  | 'Crisis Assistance'
  | 'Emergency Relief'
  | 'Life Skills Training'
  | 'Other'

export type IntakeStatus = 'New' | 'In Review' | 'Resolved'
export type Priority = 'High' | 'Medium' | 'Low'

export interface Volunteer {
  id: string
  created_at: string
  full_name: string
  email: string
  phone?: string
  role: VolunteerRole
  availability?: string
  interests: string[]
  message?: string
  status: 'Active' | 'Pending' | 'Inactive'
}

export type VolunteerRole =
  | 'Mentor'
  | 'Childcare Support'
  | 'Workshop Facilitator'
  | 'Administrative Help'
  | 'Community Outreach'
  | 'Event Support'
  | 'Counseling & Advocacy'
  | 'Fundraising'

export interface Donor {
  id: string
  created_at: string
  name: string
  email?: string
  total_given: number
  last_donation_date?: string
  donation_type: 'One-time' | 'Monthly' | 'Institutional' | 'Grant'
  tags?: string[]
  notes?: string
}

export interface CaseNote {
  id: string
  created_at: string
  intake_id: string
  author: string
  note_text: string
}

export interface ContactMessage {
  id: string
  created_at: string
  full_name: string
  email: string
  phone?: string
  inquiry_type?: string
  message: string
  status: 'New' | 'Read' | 'Replied'
}

export interface PartnerInquiry {
  id: string
  created_at: string
  full_name: string
  organization?: string
  email: string
  phone?: string
  partnership_type: string
  message?: string
  status: 'New' | 'In Review' | 'Approved' | 'Declined'
}

export interface DonationQuestion {
  id: string
  created_at: string
  full_name: string
  email: string
  phone?: string
  message: string
  status: 'New' | 'Replied'
}

// Dashboard stats
export interface DashboardStats {
  activeCases: number
  activeVolunteers: number
  familiesServed: number
  donationsThisMonth: number
  carePackagesDelivered: number
  totalDonationsYTD: number
  volunteerHours: number
}

// Form inputs
export interface SupportRequestInput {
  full_name: string
  email: string
  phone?: string
  support_type: SupportType
  message?: string
}

export interface VolunteerInput {
  full_name: string
  email: string
  phone?: string
  availability?: string
  interests: string[]
  message?: string
}

export interface PartnerInput {
  full_name: string
  organization?: string
  email: string
  phone?: string
  partnership_type: string
  message?: string
}

export interface ContactInput {
  full_name: string
  email: string
  inquiry_type?: string
  message: string
}

export interface DonationQuestionInput {
  full_name: string
  email: string
  phone?: string
  message: string
}
