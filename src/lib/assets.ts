export const BASE_PATH = process.env.NODE_ENV === 'production' ? '/resume' : ''
export const AVATAR_URL = `${BASE_PATH}/assets/putthiphoom_pic.jpg`
export const resumeUrl = (lang: 'en' | 'th') =>
  `${BASE_PATH}/docs/resume_putthiphoom_${lang === 'th' ? 'thai' : 'eng'}.pdf`
export const projectImageUrl = (path: string) => `${BASE_PATH}${path}`
