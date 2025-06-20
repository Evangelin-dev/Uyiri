import type { Metadata } from 'next'
import './globals.css'
import Nav from './navbar/nav'
import Topnav from './navbar/topnav'


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
      <body>
        <>
        <Topnav />
        <Nav /> 
        </>
        {children}
      </body>
    </html>
  )
}
