import type { Metadata } from 'next'
import './globals.css'
import Nav from './navbar/nav'
import Topnav from './navbar/topnav'
import FloatingBackground from './theme' // assumed to be a visual background

export const metadata: Metadata = {
  title: 'uirihealing',
  description: 'healing',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <FloatingBackground />
        </div>

        {/* UI Content */}
        <Topnav />
        <Nav />
        {children}
      </body>
    </html>
  )
}
