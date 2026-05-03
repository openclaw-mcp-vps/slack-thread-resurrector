import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Slack Thread Resurrector — Auto-bump important Slack threads',
  description: 'Monitors Slack threads and automatically bumps important discussions before they get buried. Configurable rules, real-time webhooks, background scheduling.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="ee425161-428b-4ae7-ad59-07984914cfb6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
