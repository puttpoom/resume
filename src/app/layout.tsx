import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LangProvider } from '@/lib/lang'
import { ThemeProvider } from '@/lib/theme'
import { DisplayProvider } from '@/lib/display'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'
import { GAPageview } from '@/lib/gaPageview'

export const metadata: Metadata = {
  metadataBase: new URL('https://puttpoom.github.io/resume'),
  title: 'Putthiphoom B. — Full-Stack Developer',
  description:
    'Full-Stack Developer with 1.5+ years experience in Go, PHP Laravel, ReactJS, and real-time systems. Based in Bangkok, Thailand.',
  openGraph: {
    title: 'Putthiphoom B. — Full-Stack Developer',
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('portfolio-theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `}
        </Script>
      </head>
      <body className="h-full" suppressHydrationWarning>
        <GAPageview />
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
