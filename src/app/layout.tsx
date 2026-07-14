import type { Metadata } from 'next'
import './globals.css'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'
import { DisplayProvider } from '@/lib/display'

export const metadata: Metadata = {
  title: 'Hello world~',
  description:
    'Full-Stack Developer with 1.5+ years experience in Go, PHP Laravel, ReactJS, and real-time systems. Based in Bangkok, Thailand.',
  openGraph: {
    title: 'Hello world~',
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
    <html lang="en" className="h-dvh antialiased" suppressHydrationWarning>
      <body className="h-full" style={{ overflow: 'hidden' }} suppressHydrationWarning>
        <LangProvider>
          <ThemeProvider>
            <DisplayProvider>
              {children}
            </DisplayProvider>
          </ThemeProvider>
        </LangProvider>
      </body>
    </html>
  )
}
