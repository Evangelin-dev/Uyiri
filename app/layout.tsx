import type { Metadata } from 'next'
import './globals.css'
import Nav from './navbar/nav'
import Topnav from './navbar/topnav'
import BeautifulPinkBackground from './theme'
import Footer from './footer/page'

export const metadata: Metadata = {
  title: "Siddha Doctor for Women’s Health | Uyiri Healing – Dr. Uyirinayan",
  description:
    "Dr. Uyirinayan is a Siddha doctor and health coach with 21 years of experience treating uterine disorders, cancer, and genetic illnesses. Book your consultation now.",
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
  icons: {
    icon: "/images/uyiri-logo.png", // Ensure this file exists in /public/images/
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.uyirihealing.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Uyiri Healing",
              "url": "https://www.uyirihealing.com",
              "logo": "https://www.uyirihealing.com/images/uyiri-logo.png",
              "sameAs": [],
            }),
          }}
        />
      </head>
      <body className="relative">
        {/* Background Layer */}
        <div className="fixed inset-0 -z-10 pointer-events-none">
          <BeautifulPinkBackground />
        </div>

        {/* Top Navigation & Nav */}
        <Topnav />
        <Nav />

        {/* Visible Branding (for Google title clarity) */}
        <header className="text-center py-4">
          <h1 className="text-3xl font-bold text-[#7a1335]">
            Uyiri Healing
          </h1>
          <p className="text-md text-gray-600">
            Empowering Women's Health through Traditional Siddha Medicine
          </p>
        </header>

        {/* Main Page Content */}
        {children}

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
