import type { Metadata } from 'next'
import './globals.css'
import Nav from './navbar/nav'
import Topnav from './navbar/topnav'
import BeautifulPinkBackground from './theme'
import Footer from './footer/page'

export const metadata: Metadata = {
  title: "Siddha Doctor for Women’s Health | Uterus Detox & Cancer Care – Dr. Uyiriniyan",
  description:
    "Dr. Uyiriniyan is a Siddha doctor and health coach with 21 years of experience treating uterine disorders, cancer, and genetic illnesses. Book your consultation now.",
  keywords: [
    "Siddha doctor",
    "uterus detox",
    "PCOD remedy",
    "ayurveda for women",
    "natural cancer treatment",
  ],
  verification: {
    google: "qlE5GSmZmIsj5HkfriP1tJesWPjxxQMGawJ_mynkb6Y",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="relative">
        {/* Background Layer */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <BeautifulPinkBackground />
        </div>

        {/* UI Content */}
        <Topnav />
        <Nav />
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
