'use client'

import { IoSchool, IoRibbon } from 'react-icons/io5'
import { education, certificates } from '@/data/education'
import { useLang } from '@/lib/lang'

export function EducationPanel() {
  const { lang } = useLang()

  return (
    <div className="p-6 max-w-3xl mx-auto space-y-5">

      {/* Degrees */}
      <div>
        <p className="text-[12px] uppercase px-1 mb-1.5"
          style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
          {lang === 'th' ? 'ปริญญา' : 'Degrees'}
        </p>
        <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
          {education.map((edu, i) => (
            <div key={edu.id} className="px-5 py-4 flex gap-4"
              style={{ borderBottom: i < education.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}>
              <div className="w-10 h-10 rounded-[22%] flex items-center justify-center shrink-0"
                style={{ background: '#5856D6' }}>
                <IoSchool size={22} color="#fff" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                  {lang === 'th' && edu.degreeTh ? edu.degreeTh : edu.degree}
                </p>
                <p className="text-[14px] mt-0.5" style={{ color: 'var(--system-blue)' }}>
                  {lang === 'th' && edu.fieldTh ? edu.fieldTh : edu.field}
                </p>
                <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                  {lang === 'th' && edu.institutionTh ? edu.institutionTh : edu.institution}
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2">
                  <span className="text-[12px]" style={{ color: 'var(--text-tertiary)' }}>
                    {edu.startYear} – {edu.endYear}
                  </span>
                  {edu.gpa && (
                    <span className="text-[12px] px-2 py-0.5 rounded-full font-medium"
                      style={{ background: 'var(--ios-bg)', color: 'var(--text-secondary)', border: '0.5px solid var(--ios-separator)' }}>
                      GPA {edu.gpa}
                    </span>
                  )}
                </div>
                {edu.note && (
                  <p className="text-[12px] mt-2" style={{ color: 'var(--text-tertiary)' }}>
                    {lang === 'th' && edu.noteTh ? edu.noteTh : edu.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certificates */}
      {certificates.length > 0 && (
        <div>
          <p className="text-[12px] uppercase px-1 mb-1.5"
            style={{ color: 'var(--text-secondary)', letterSpacing: '0.04em' }}>
            {lang === 'th' ? 'ใบรับรอง' : 'Certificates'}
          </p>
          <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--ios-card-bg)' }}>
            {certificates.map((cert, i) => (
              <div key={cert.id} className="px-5 py-4 flex gap-4"
                style={{ borderBottom: i < certificates.length - 1 ? '0.5px solid var(--ios-separator)' : 'none' }}>
                <div className="w-10 h-10 rounded-[22%] flex items-center justify-center shrink-0"
                  style={{ background: '#FF9500' }}>
                  <IoRibbon size={22} color="#fff" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[16px] font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {lang === 'th' && cert.nameTh ? cert.nameTh : cert.name}
                  </p>
                  <p className="text-[13px] mt-0.5" style={{ color: 'var(--text-secondary)' }}>
                    {cert.issuer}
                  </p>
                  <p className="text-[12px] mt-1" style={{ color: 'var(--text-tertiary)' }}>
                    {new Date(cert.issuedDate + '-01').toLocaleDateString(
                      lang === 'th' ? 'th-TH' : 'en-US',
                      { year: 'numeric', month: 'long' }
                    )}
                  </p>
                  {cert.credentialUrl && (
                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer"
                      className="text-[13px] font-semibold mt-1 block"
                      style={{ color: 'var(--system-blue)' }}>
                      View Credential →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
