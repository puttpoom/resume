import { PortfolioApp } from '@/components/PortfolioApp'
import { projects } from '@/data/projects'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }))
}

export const dynamicParams = false

export default function Page() {
  return <PortfolioApp />
}
