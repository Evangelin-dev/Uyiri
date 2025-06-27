import type { Metadata } from 'next'
import './globals.css'
import Nav from './navbar/nav'
import Topnav from './navbar/topnav'
import BeautifulPinkBackground from './theme'

export const metadata: Metadata = {
  title: 'uyirihealing',
  description: 'UyiriHealing is a women-centered Ayurvedic wellness website offering natural healing through Siddha medicine. Led by GENETICIST.DR. G.M.UYIRINIYAN, the platform provides specialized detox programs, holistic consultations, and therapeutic services focused on uterine health, hormonal balance, and chronic conditions. The site empowers women worldwide with 21 years of healing expertise, personalized care, and accessible wellness resources—both online and in-person.',
  verification: {
    google: "qlE5GSmZmIsj5HkfriP1tJesWPjxxQMGawJ_mynkb6Y",
  },
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
          <BeautifulPinkBackground />
        </div>

        {/* UI Content */}
        <Topnav />
        <Nav />
        {children}
      </body>
    </html>
  )
}
