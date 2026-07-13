import type { Education, Certificate } from '@/types'

export const education: Education[] = [
  {
    id: 'bachelor',
    institution: 'University',
    degree: "Bachelor's Degree",
    field: 'Computer Science / Information Technology',
    startYear: 2018,
    endYear: 2022,
  },
]

export const certificates: Certificate[] = [
  {
    id: 'docker-cert',
    name: 'Docker Certified Associate',
    issuer: 'Docker, Inc.',
    issuedDate: '2024-03',
  },
  {
    id: 'k8s-cert',
    name: 'Certified Kubernetes Application Developer (CKAD)',
    issuer: 'Cloud Native Computing Foundation',
    issuedDate: '2024-06',
  },
  {
    id: 'nextjs-cert',
    name: 'Next.js Advanced Concepts',
    issuer: 'Vercel / Frontend Masters',
    issuedDate: '2025-01',
  },
]
