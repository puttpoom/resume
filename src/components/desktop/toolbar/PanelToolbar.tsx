'use client'

interface Props {
  title: string
}

export function PanelToolbar({ title }: Props) {
  return (
    <div
      className="sticky top-0 z-10 flex items-center px-5 py-2 border-b shrink-0"
      style={{
        background: 'var(--ios-bg)',
        borderColor: 'var(--ios-separator)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      <h2 className="flex-1 text-[15px] font-semibold truncate" style={{ color: 'var(--text-primary)' }}>
        {title}
      </h2>
    </div>
  )
}
