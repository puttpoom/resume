export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const AVATAR_URL = `${BASE_PATH}/assets/putthiphoom_pic.jpg`
export const resumeUrl = (lang: 'en' | 'th') =>
  `${BASE_PATH}/docs/resume_putthiphoom_${lang === 'th' ? 'thai' : 'eng'}.pdf`
export const projectImageUrl = (path: string) => `${BASE_PATH}${path}`
