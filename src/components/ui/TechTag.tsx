interface Props {
  label: string
  className?: string
}

export function TechTag({ label, className = '' }: Props) {
  return (
    <span
      className={`px-2.5 py-1 text-[11px] rounded-md font-medium text-secondary bg-ios border-ios ${className}`}
      style={{ border: '0.5px solid var(--ios-separator)' }}
    >
      {label}
    </span>
  )
}
