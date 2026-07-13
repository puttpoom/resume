import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'freewillfx',
    company: 'FreewillFX Co., Ltd.',
    role: 'Full-Stack Developer',
    startDate: '2024-10',
    endDate: null,
    description: [
      'iSupply — Owned full-stack development (Frontend + Backend) of a multi-tenant inventory system for concrete plants',
      'Reduced API response time by ~30% by fixing slow queries and adding indexes (EXPLAIN-based tuning)',
      'Fixed a memory-crash bug in bulk Excel exports by processing stock reports in smaller batches',
      'Connected a Go authentication service to the PHP application using OAuth 2.0',
      'Mena Transport — Built a Go program to process real-time GPS data from ~50 delivery vehicles and reformat to third-party logistics system requirements',
      'ICHO Automate Plant — Led full migration of legacy PHP 5.5 codebase to PHP 8.3, including DEV/QAS/Production setup',
      'Built MVC-based CRUD system for vehicle and driver data with Excel import/export for factory operations',
      'Fixed security issues from a VA scan: access-token authentication and session handling',
      'ICHO Terminal — Built on-site terminal app connecting hardware (breathalyzer, gate, license-plate camera) for factory entry control',
      'Cloudtime Passenger — Built map dashboard showing bus routes and real-time boarding counts; fixed GPS timestamp/schedule mismatches',
    ],
    descriptionTh: [
      'iSupply — พัฒนาระบบจัดการสต็อกวัตถุดิบสำหรับหลายโรงงานปูนซีเมนต์ ทั้งฝั่ง Frontend และ Backend ด้วยตนเอง',
      'ปรับปรุงความเร็วของ API ได้ประมาณ 30% โดยแก้ไข query ที่ทำงานช้าและเพิ่ม index ให้เหมาะสม',
      'แก้ปัญหาระบบล่มจากการใช้หน่วยความจำเกิน ในฟีเจอร์ export รายงานสต็อกเป็น Excel โดยแบ่งประมวลผลเป็นชุดย่อย',
      'เชื่อมต่อระบบ Login ที่เขียนด้วย Go เข้ากับระบบ PHP โดยใช้ OAuth 2.0',
      'Mena Transport — พัฒนาโปรแกรมด้วย Go สำหรับประมวลผลข้อมูล GPS แบบเรียลไทม์จากรถขนส่งประมาณ 50 คัน และปรับรูปแบบให้ตรงตามระบบโลจิสติกส์ของบุคคลที่สาม',
      'ICHO Automate Plant — รับผิดชอบหลักในการอัปเกรดระบบ PHP เวอร์ชันเก่า (5.5) ทั้งหมดเป็นเวอร์ชัน 8.3 พร้อมจัดเตรียมระบบ Test และ Production',
      'พัฒนาระบบจัดการข้อมูลรถและพนักงานขับรถ (CRUD) พร้อมฟีเจอร์นำเข้า-ส่งออกข้อมูลผ่าน Excel สำหรับงานหน้าโรงงาน',
      'แก้ไขช่องโหว่ด้านความปลอดภัยที่พบจากการสแกน ปรับปรุงระบบ authentication และการจัดการ session',
      'ICHO Terminal — พัฒนาแอปพลิเคชันหน้างานที่เชื่อมต่อกับอุปกรณ์ฮาร์ดแวร์ เช่น เครื่องเป่าแอลกอฮอล์และกล้องอ่านป้ายทะเบียน สำหรับควบคุมการเข้า-ออกโรงงาน',
      'Cloudtime Passenger — พัฒนา Dashboard แสดงแผนที่เส้นทางเดินรถและจำนวนผู้โดยสารแบบเรียลไทม์ แก้ปัญหาข้อมูลเวลาจาก GPS ไม่ตรงกับตารางเดินรถ',
    ],
    techStack: ['Go', 'PHP Laravel', 'ReactJS', 'MySQL', 'MongoDB', 'RabbitMQ', 'Bootstrap 5', 'jQuery', 'Google Maps API'],
  },
  {
    id: 'payment-platform',
    company: 'Payment Platform',
    role: 'Frontend Developer',
    note: 'Contract · Part-time',
    noteTh: 'สัญญาจ้าง · Part-time',
    startDate: '2025-04',
    endDate: '2025-07',
    description: [
      'Built pages, forms, and navigation (React Hook Form + TanStack Query) for an internal support ticketing system',
      'Used existing components to match the team\'s design system (DaisyUI + shadcn/ui)',
    ],
    descriptionTh: [
      'พัฒนาหน้าเว็บ ฟอร์ม และระบบนำทางสำหรับระบบ Ticket ของทีม support ภายในองค์กร ด้วย React',
      'นำ Component ที่มีอยู่แล้วมาปรับใช้ให้ตรงกับ Design System ของทีม',
    ],
    techStack: ['ReactJS', 'React Hook Form', 'TanStack Query', 'DaisyUI', 'shadcn/ui'],
  },
]
