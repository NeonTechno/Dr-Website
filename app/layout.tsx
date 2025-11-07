import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Decentralized Rights Protocol',
  description: 'Empowering human rights, sustainability, and AI transparency through blockchain',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}