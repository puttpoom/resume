import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'icho-fullstack',
    company: 'ICHO Co., Ltd.',
    role: 'Full Stack Developer',
    startDate: '2023-01',
    endDate: null,
    description: [
      'Built and maintained real-time plant logistics terminal system for cement/bulk material operations',
      'Developed truck check-in/out, weighing, loading, and queue management modules',
      'Integrated CCTV feeds with VXG Player for live monitoring at plant stations',
      'Containerised all services with Docker and deployed to DigitalOcean Kubernetes',
      'Implemented CI/CD pipelines via Bitbucket Pipelines',
    ],
    techStack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Docker', 'Kubernetes', 'Bitbucket Pipelines'],
  },
  {
    id: 'freelance',
    company: 'Freelance',
    role: 'Web Developer',
    startDate: '2021-06',
    endDate: '2022-12',
    description: [
      'Delivered custom web applications for SME clients across Thailand',
      'Built Laravel + MySQL backends with REST API integrations',
      'Implemented responsive frontends with Vue.js and Tailwind CSS',
    ],
    techStack: ['Laravel', 'Vue.js', 'MySQL', 'Tailwind CSS', 'REST API'],
  },
]
