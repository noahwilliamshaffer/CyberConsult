import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'SentinelStack Security - Cybersecurity Consulting & Penetration Testing',
    template: '%s | SentinelStack Security'
  },
  description: 'Professional cybersecurity consulting services including CIS implementation, web application penetration testing, and enterprise security solutions. Protect your business with expert cybersecurity services.',
  keywords: [
    'cybersecurity',
    'penetration testing',
    'security consulting',
    'CIS implementation',
    'OWASP',
    'web application security',
    'enterprise security',
    'security assessment',
    'vulnerability assessment',
    'security audit'
  ],
  authors: [{ name: 'SentinelStack Security Team' }],
  creator: 'SentinelStack Security',
  publisher: 'SentinelStack Security',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sentinelstack-security.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sentinelstack-security.vercel.app',
    siteName: 'SentinelStack Security',
    title: 'SentinelStack Security - Cybersecurity Consulting & Penetration Testing',
    description: 'Professional cybersecurity consulting services including CIS implementation, web application penetration testing, and enterprise security solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SentinelStack Security - Cybersecurity Consulting',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SentinelStack Security - Cybersecurity Consulting & Penetration Testing',
    description: 'Professional cybersecurity consulting services including CIS implementation, web application penetration testing, and enterprise security solutions.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
} 