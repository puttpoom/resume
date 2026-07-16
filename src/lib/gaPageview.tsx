'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { GA_MEASUREMENT_ID } from '@/lib/gtag'

export function GAPageview() {
  const pathname = usePathname()

  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    window.gtag('event', 'page_view', {
      page_path: pathname,
      page_title: document.title,
      send_to: GA_MEASUREMENT_ID,
    })
  }, [pathname])

  return null
}
