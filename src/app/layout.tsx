import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'

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
    <html lang="en" className="h-full antialiased">
      <body className="h-full" style={{ overflow: 'hidden' }}>
        <LangProvider>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  )
}
