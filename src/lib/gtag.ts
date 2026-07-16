export const GA_MEASUREMENT_ID = 'G-DSTVHYQWTH'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export function pageview(path: string, title?: string) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title ?? path,
    })
  }
}

export function trackEvent(
  action: string,
  params?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', action, params)
  }
}
