import type { Lang } from '@/lib/lang'

export interface I18n {
  nav: { about: string; projects: string; skills: string; experience: string; education: string; contact: string; hire: string }
  hero: { role: string; tagline: string; viewWork: string; getInTouch: string; scroll: string }
  about: { overline: string; title: string; bio: string[]; stats: { value: string; label: string }[] }
  projects: { overline: string; title: string; subtitle: string }
  skills: { overline: string; title: string; subtitle: string; categories: Record<string, string> }
  experience: { overline: string; title: string }
  education: { overline: string; title: string; degreesLabel: string; certsLabel: string }
  contact: { overline: string; title: string; subtitle: string; findMeOn: string; footer: string }
}

export const i18n: Record<Lang, I18n> = {
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      skills: 'Skills',
      experience: 'Experience',
      education: 'Education',
      contact: 'Contact',
      hire: 'Hire Me',
    },
    hero: {
      role: 'Full Stack Developer',
      tagline: 'Building fast, elegant, and scalable web experiences',
      viewWork: 'View Work',
      getInTouch: 'Get in Touch',
      scroll: 'Scroll',
    },
    about: {
      overline: 'About Me',
      title: 'Crafting digital experiences',
      bio: [
        'Full-Stack Developer with 1.5+ years of experience, passionate about solving real business problems with software. Built web systems for logistics, GPS tracking, and ERP companies — including factory inventory management and real-time fleet tracking for transport businesses.',
        'Designed database structures and built REST APIs using Go, PHP Laravel, and ReactJS. Improved system speed and fixed critical bugs across several live projects, with a strong focus on secure coding (OAuth 2.0, access control).',
        'Currently looking for a new Full-Stack or Backend Developer role to keep growing and take on bigger challenges.',
      ],
      stats: [
        { value: '1.5+', label: 'Years Experience' },
        { value: '5+', label: 'Projects Shipped' },
        { value: '10+', label: 'Technologies' },
      ],
    },
    projects: {
      overline: 'Selected Work',
      title: 'Projects',
      subtitle: 'A selection of things I\'ve built — from real-time systems to modern web apps.',
    },
    skills: {
      overline: 'Capabilities',
      title: 'Tech Stack',
      subtitle: 'Tools and technologies I work with daily.',
      categories: {
        Languages: 'Languages',
        Frontend: 'Frontend',
        Backend: 'Backend',
        Databases: 'Databases',
        Tools: 'Tools',
      },
    },
    experience: {
      overline: 'Career',
      title: 'Experience',
    },
    education: {
      overline: 'Background',
      title: 'Education & Certificates',
      degreesLabel: 'Degrees',
      certsLabel: 'Certificates',
    },
    contact: {
      overline: "Let's Connect",
      title: 'Get in Touch',
      subtitle: 'Have a project in mind or just want to say hello? My inbox is always open.',
      findMeOn: 'Or find me on',
      footer: 'Built with Next.js · Framer Motion · Tailwind CSS · Lenis',
    },
  },
  th: {
    nav: {
      about: 'เกี่ยวกับ',
      projects: 'ผลงาน',
      skills: 'ทักษะ',
      experience: 'ประสบการณ์',
      education: 'การศึกษา',
      contact: 'ติดต่อ',
      hire: 'ว่าจ้างฉัน',
    },
    hero: {
      role: 'นักพัฒนา Full Stack',
      tagline: 'สร้างระบบที่รวดเร็ว สวยงาม และขยายได้',
      viewWork: 'ดูผลงาน',
      getInTouch: 'ติดต่อฉัน',
      scroll: 'เลื่อนลง',
    },
    about: {
      overline: 'เกี่ยวกับฉัน',
      title: 'สร้างประสบการณ์ดิจิทัล',
      bio: [
        'นักพัฒนาซอฟต์แวร์สาย Full-Stack ประสบการณ์กว่า 1.5 ปี มีความมุ่งมั่นและหลงใหลในการแก้ปัญหาทางธุรกิจด้วยซอฟต์แวร์ พัฒนาและดูแลเว็บแอปพลิเคชันด้านโลจิสติกส์ ระบบติดตาม GPS และระบบ ERP รวมถึงระบบจัดการสต็อกสินค้าสำหรับโรงงานและระบบติดตามยานพาหนะแบบเรียลไทม์สำหรับธุรกิจขนส่ง',
        'ออกแบบโครงสร้างฐานข้อมูลและพัฒนา REST API ด้วย Go, PHP Laravel และ ReactJS ปรับปรุงประสิทธิภาพระบบและแก้ไขบั๊กสำคัญในโปรเจคที่ใช้งานจริงหลายโปรเจค โดยให้ความสำคัญกับความปลอดภัยของระบบ เช่น OAuth 2.0 และการควบคุมสิทธิ์การเข้าถึง',
        'กำลังมองหาโอกาสในตำแหน่ง Full-Stack หรือ Backend Developer เพื่อเติบโตและรับความท้าทายใหม่ๆ',
      ],
      stats: [
        { value: '1.5+', label: 'ปีประสบการณ์' },
        { value: '5+', label: 'โปรเจกต์' },
        { value: '10+', label: 'เทคโนโลยี' },
      ],
    },
    projects: {
      overline: 'ผลงานที่เลือก',
      title: 'ผลงาน',
      subtitle: 'ตัวอย่างสิ่งที่ฉันสร้าง ตั้งแต่ระบบเรียลไทม์ไปจนถึงเว็บแอปสมัยใหม่',
    },
    skills: {
      overline: 'ความสามารถ',
      title: 'เทคโนโลยี',
      subtitle: 'เครื่องมือและเทคโนโลยีที่ใช้งานทุกวัน',
      categories: {
        Languages: 'ภาษาโปรแกรม',
        Frontend: 'Frontend',
        Backend: 'Backend',
        Databases: 'ฐานข้อมูล',
        Tools: 'เครื่องมือ',
      },
    },
    experience: {
      overline: 'ประวัติการทำงาน',
      title: 'ประสบการณ์',
    },
    education: {
      overline: 'ภูมิหลัง',
      title: 'การศึกษา & ใบรับรอง',
      degreesLabel: 'ปริญญา',
      certsLabel: 'ใบรับรอง',
    },
    contact: {
      overline: 'ติดต่อกัน',
      title: 'ติดต่อฉัน',
      subtitle: 'มีโปรเจกต์ในใจหรืออยากแค่ทักทาย? กล่องข้อความเปิดรับเสมอ',
      findMeOn: 'หรือหาฉันได้ที่',
      footer: 'สร้างด้วย Next.js · Framer Motion · Tailwind CSS · Lenis',
    },
  },
}

export function getStrings(lang: Lang): I18n {
  return i18n[lang] as I18n
}
