'use client'

import { IoChevronBack } from 'react-icons/io5'

interface Props {
  title: string
  onBack?: () => void
  backLabel?: string
}

export function PanelToolbar({ title, onBack, backLabel }: Props) {
  return (
    <div
      className="sticky top-0 z-10 flex items-center gap-1 px-5 py-2 border-b shrink-0"
      style={{
        background: 'var(--ios-bg)',
        borderColor: 'var(--ios-separator)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {onBack && (
        <button
          onClick={onBack}
          className="flex items-center gap-0.5 -ml-2 px-2 py-1 rounded-md transition-opacity hover:opacity-70 text-system-blue shrink-0"
        >
          <IoChevronBack size={16} />
          {backLabel && <span className="text-[13px] font-medium">{backLabel}</span>}
        </button>
      )}
      <h2 className="flex-1 text-[15px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
    </div>
  )
}
