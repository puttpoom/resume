interface Props {
  children: string
  variant?: 'sidebar' | 'settings'
}

/** Sidebar variant: desktop sidebar labels (uppercase, small, tight). Settings variant: iOS list section headers. */
export function SectionLabel({ children, variant = 'settings' }: Props) {
  if (variant === 'sidebar') {
    return (
      <p className="text-[11px] uppercase px-3 pt-4 pb-1 text-secondary" style={{ letterSpacing: '0.05em' }}>
        {children}
      </p>
    )
  }
  return (
    <p className="text-[13px] uppercase px-4 mb-1 mt-6 text-secondary" style={{ letterSpacing: '0.03em' }}>
      {children}
    </p>
  )
}
