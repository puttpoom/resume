import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'
import { DisplayProvider } from '@/lib/display'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

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
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
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
