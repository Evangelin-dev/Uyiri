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
  icons: {
    icon: "/images/uyiri-logo.png", // Make sure this file exists in /public/images/uyiri-logo.png
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
        {/* Structured Data for Google Logo */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "url": "https://www.uyirihealing.com",
              "logo": "https://www.uyirihealing.com/logo.png",
              "name": "Uyiri Healing",
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
