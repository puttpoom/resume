import type { Education, Certificate } from '@/types'

export const education: Education[] = [
  {
    id: "kmutnb",
    institution:
      "King Mongkut's University of Technology North Bangkok (KMUTNB)",
    institutionTh: "มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าพระนครเหนือ (KMUTNB)",
    degree: "Bachelor's Degree of Engineering",
    degreeTh: "วิศวกรรมศาสตรบัณฑิต",
    field: "Electrical and Electronic Engineering Technology",
    fieldTh: "สาขาเทคโนโลยีวิศวกรรมไฟฟ้าและอิเล็กทรอนิกส์",
    startYear: 2019,
    startYearTh: 2562,
    endYear: 2023,
    endYearTh: 2566,
    gpa: "3.03",
  },
];

export const certificates: Certificate[] = [
  {
    id: "toeic",
    name: "TOEIC",
    nameTh: "TOEIC",
    note: "Score 630 (Listening 405 / Reading 225)",
    noteTh: "คะแนน: 630 (การฟัง 405 / การอ่าน 225)",
    issuer: "ETS (Educational Testing Service)",
    issuedDate: "Tested 25 Jun 2026",
    issuedDateTh: "สอบวันที่ 25 มิ.ย. 2569",
  },
];
