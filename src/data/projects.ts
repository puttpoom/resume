import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'icho-plant',
    title: 'Icho Automate Plant',
    description: 'Real-time plant logistics terminal system for cement/bulk material plant operations. Handles truck check-in/out, weighing, loading, and queue management.',
    techStack: ['PHP', 'MySQL', 'jQuery', 'Bootstrap', 'Docker', 'Kubernetes'],
    githubUrl: '',
    featured: true,
    year: 2024,
  },
  {
    id: 'spa-portfolio',
    title: 'Apple-style SPA Portfolio',
    description: 'Personal portfolio with Apple-product-page scroll aesthetics built with Next.js 14+, Framer Motion, and Lenis smooth scroll.',
    techStack: ['Next.js', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Lenis'],
    githubUrl: 'https://github.com/putthiphoomboonmahatanasbombut/spa-portfilo',
    liveUrl: 'https://putthiphoomboonmahatanasbombut.github.io/spa-portfilo',
    featured: true,
    year: 2025,
  },
  {
    id: 'logistics-dashboard',
    title: 'Logistics Dashboard',
    description: 'Real-time dashboard for truck fleet monitoring with CCTV integration, weight tracking, and automated gate control.',
    techStack: ['PHP', 'Highcharts', 'VXG Player', 'WebSocket', 'Docker'],
    featured: true,
    year: 2024,
  },
]
