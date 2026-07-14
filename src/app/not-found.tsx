'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

function AppIconError() {
  return (
    <motion.div
      initial={{ scale: 0.7, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.05 }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 22,
        background: 'var(--system-red)',
        boxShadow: '0 8px 32px rgba(255,59,48,0.35)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <svg
        width="52"
        height="52"
        viewBox="0 0 52 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="26" cy="26" r="23" stroke="white" strokeWidth="3.5" strokeOpacity="0.35" />
        <rect x="23.25" y="12" width="5.5" height="20" rx="2.75" fill="white" />
        <circle cx="26" cy="40" r="3.25" fill="white" />
      </svg>
    </motion.div>
  )
}

function StatusBarPlaceholder() {
  return <div style={{ height: 44 }} />
}

export default function NotFound() {
  return (
    <div
      className="min-h-dvh flex flex-col"
      style={{ background: 'var(--ios-bg)', fontFamily: "-apple-system, 'SF Pro Display', system-ui, sans-serif" }}
    >
      <StatusBarPlaceholder />

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 gap-8">
        <AppIconError />

        {/* Text block */}
        <motion.div
          className="text-center flex flex-col gap-2"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.15 }}
        >
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: 'var(--system-red)',
            }}
          >
            Error 404
          </span>
          <h1
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: 0,
              letterSpacing: '-0.3px',
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              fontSize: 15,
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              maxWidth: 280,
              margin: '0 auto',
            }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </motion.div>

        {/* Actions */}
        <motion.div
          className="flex flex-col items-stretch gap-3 w-full"
          style={{ maxWidth: 280 }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut', delay: 0.25 }}
        >
          <Link
            href="/"
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--system-blue)',
              color: '#ffffff',
              borderRadius: 14,
              padding: '14px 0',
              fontWeight: 600,
              fontSize: 17,
              textDecoration: 'none',
              letterSpacing: '-0.1px',
              transition: 'opacity 0.15s ease',
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
            onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Go Home
          </Link>

          <button
            onClick={() => window.history.back()}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--system-blue)',
              fontSize: 17,
              fontWeight: 400,
              cursor: 'pointer',
              padding: '10px 0',
              letterSpacing: '-0.1px',
              fontFamily: 'inherit',
            }}
          >
            Go Back
          </button>
        </motion.div>
      </div>

      {/* iOS home indicator stub */}
      <div className="flex justify-center pb-6">
        <div
          style={{
            width: 134,
            height: 5,
            borderRadius: 3,
            background: 'var(--text-tertiary)',
            opacity: 0.45,
          }}
        />
      </div>
    </div>
  )
}
