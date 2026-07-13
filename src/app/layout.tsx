import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { LenisProvider } from '@/lib/lenis'
import { LangProvider } from '@/lib/lang'
import { Navbar } from '@/components/layout/Navbar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Putthiphoom Boonmahatanasombut — Full Stack Developer',
  description:
    'Full-Stack Developer with 1.5+ years experience in Go, PHP Laravel, ReactJS, and real-time systems. Based in Bangkok, Thailand.',
  openGraph: {
    title: 'Putthiphoom Boonmahatanasombut — Full Stack Developer',
    description: 'Full-Stack Developer based in Bangkok, Thailand',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#111010] text-[#F2EFE8]">
        <LangProvider>
          <LenisProvider>
            <Navbar />
            {children}
          </LenisProvider>
        </LangProvider>
      </body>
    </html>
  )
}
