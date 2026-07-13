import type { Education, Certificate } from '@/types'

export const education: Education[] = [
  {
    id: 'kmutnb',
    institution: "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    institutionTh: 'มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)',
    degree: "Bachelor's Degree of Engineering",
    degreeTh: 'วิศวกรรมศาสตรบัณฑิต',
    field: 'Electrical and Electronic Engineering Technology',
    fieldTh: 'สาขาเทคโนโลยีวิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์',
    startYear: 2019,
    endYear: 2023,
    gpa: '3.03',
    note: 'TOEIC: 630 (Listening 405 / Reading 225) — Tested 25 Jun 2026',
    noteTh: 'คะแนน TOEIC: 630 (Listening 405 / Reading 225) — สอบวันที่ 25 มิ.ย. 2569',
  },
]

export const certificates: Certificate[] = [
  {
    id: 'toeic',
    name: 'TOEIC — Score 630',
    nameTh: 'TOEIC — คะแนน 630',
    issuer: 'ETS (Educational Testing Service)',
    issuedDate: '2026-06',
  },
]
