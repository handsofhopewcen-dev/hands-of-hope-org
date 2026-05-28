# Hands of Hope — Next.js + Supabase Production Platform

A world-class nonprofit website with visual data storytelling, motion-rich animations, and a full admin dashboard backed by Supabase.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Copy environment file and fill in your Supabase credentials
cp .env.local.example .env.local

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) for the website.  
Open [http://localhost:3000/admin](http://localhost:3000/admin) for the admin dashboard.

---

## 🗄️ Supabase Setup

### 1. Create a Supabase Project
- Go to [supabase.com](https://supabase.com) → New Project
- Choose a strong database password

### 2. Run the Schema
- In your Supabase dashboard → SQL Editor
- Paste and run the contents of `supabase/schema.sql`

### 3. Get Your Keys
- Settings → API → copy:
  - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
  - **anon/public** key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
  - **service_role** key → `SUPABASE_SERVICE_ROLE_KEY`

### 4. Create Admin User (for real auth)
- Supabase dashboard → Authentication → Users → Add User
- Email: `admin@handsofhopewcen.org`
- Set a strong password

> **Demo mode:** During development, log in with any username + password `hope2026`

---

## 🌐 Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo in the Vercel dashboard and it deploys automatically.

**Add environment variables in Vercel:**
- Settings → Environment Variables
- Add all variables from `.env.local.example`

---

## ✨ Features

### Public Website
- **Soft Parallax** — Hero image, background orbs, and layered elements scroll at different speeds using Framer Motion `useScroll` + `useTransform`
- **Image Reveals** — Photos animate in with a sliding clip-path reveal + subtle scale
- **Scroll Animations** — Every section fades/slides/scales in as it enters the viewport
- **Staggered Cards** — Program cards, testimonials, and campaign items animate in sequence
- **Animated Counters** — Data bars and statistics animate when they scroll into view
- **Layered Gradients** — Multi-stop radial gradients create depth across every section
- **Motion on Scroll** — `IntersectionObserver`-powered animations throughout

### Admin Dashboard (`/admin`)
- 🔐 Password-protected (demo: `hope2026` | production: Supabase Auth)
- 📊 Overview — live stats, recent intake, activity feed
- 🙋 Volunteers — search, approve, manage
- 💝 Donors — track donations and donor profiles
- 🆘 Intake — manage support requests with priority + status filters
- 📝 Case Notes — confidential timestamped notes per case
- ⚙️ Workflows — toggle automated email workflows on/off
- 📈 Analytics — charts, donut graphs, impact goal tracking

### Forms (Supabase-backed)
- **Request Support** → saves to `intake_submissions`
- **Volunteer** → saves to `volunteers`
- **Partnership** → saves to `partner_inquiries`
- **Contact/Donation Questions** → saves to `contact_messages`

---

## 🎬 Video Setup

**Hero intro video:**
Replace the video source in `src/components/sections/Hero.tsx` if you have an intro video.

**Our Story (YouTube):**
In `src/components/sections/WatchStory.tsx`, replace `YOUR_VIDEO_ID` with your YouTube video ID.

---

## 💰 Zeffy Donations

Your Zeffy link is already integrated:
`https://www.zeffy.com/en-US/donation-form/donate-to-change-lives-14499`

The donation embed is in `src/components/sections/DonateSection.tsx`.

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 + CSS custom properties |
| Animations | Framer Motion |
| Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| Forms | React Hook Form |
| Images | Next.js Image (Unsplash) |
| Deployment | Vercel |

---

## 📞 Support

Email: info@handsofhopewcen.org  
Phone: 806-302-0899
