export const EN_ACTIONS = new Set([
  'Built','Reduced','Fixed','Connected','Led','Migrated','Designed',
  'Improved','Owned','Implemented','Developed','Created','Processed',
  'Reformatted','Upgraded','Deployed','Integrated','Resolved',
  'Optimized','Shipped','Managed','Refactored','Wrote','Added',
])
export const TH_ACTIONS = new Set([
  'สร้าง','พัฒนา','แก้ไข','ออกแบบ','ปรับปรุง','รับผิดชอบ',
  'อัปเกรด','เชื่อมต่อ','แก้ปัญหา','ปรับ','จัดเตรียม',
])

export function formatDate(d: string | null, lang: string): string {
  if (!d) return lang === 'th' ? 'ปัจจุบัน' : 'Present'
  const [y, m] = d.split('-')
  return new Date(Number(y), Number(m) - 1).toLocaleDateString(
    lang === 'th' ? 'th-TH' : 'en-US',
    { year: 'numeric', month: 'short' },
  )
}

interface Props {
  text: string
  lang: string
  className?: string
}

export function BulletText({ text, lang, className = 'text-[14px]' }: Props) {
  const tokens = text.split(/(\s+|—|–|,|;)/)
  return (
    <p className={`${className} leading-relaxed text-secondary`}>
      {tokens.map((tok, i) => {
        const word = tok.replace(/[.,;:!?]$/, '')
        const isAction = lang === 'th' ? TH_ACTIONS.has(word) : EN_ACTIONS.has(word)
        return isAction
          ? <strong key={i} className="text-primary font-bold">{tok}</strong>
          : <span key={i}>{tok}</span>
      })}
    </p>
  )
}
