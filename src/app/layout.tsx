import React from 'react'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hands of Hope — Women & Children Empowerment Network',
  description:
    'Helping postpartum mothers and vulnerable children recover, stabilize, and thrive through practical care and community support in Greater Houston, TX.',
  keywords: [
    'postpartum support Houston',
    'mothers support nonprofit',
    'children empowerment',
    'maternal wellness Texas',
    'nonprofit Greater Houston',
  ],
  openGraph: {
    title: 'Hands of Hope — Women & Children Empowerment Network',
    description:
      'Supporting postpartum mothers, children, and families through compassionate care and community support in Greater Houston, TX.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Hands of Hope WCEN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hands of Hope — Women & Children Empowerment Network',
    description: 'Supporting postpartum mothers, children, and families in Greater Houston.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#5A2D66',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
