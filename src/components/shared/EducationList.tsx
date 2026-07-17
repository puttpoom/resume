import { IoSchool, IoRibbon, IoMan, IoReaderSharp } from "react-icons/io5";
import type { Education, Certificate } from '@/types'
import type { Lang } from '@/lib/lang'
import { loc } from '@/lib/lang'
import { getStrings } from '@/data/i18n'

interface Props {
  education: Education[]
  certificates: Certificate[]
  lang: Lang
}

function EduIcon({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <div
      className="w-10 h-10 rounded-[22%] flex items-center justify-center shrink-0"
      style={{ background: color }}
    >
      {children}
    </div>
  )
}

export function EducationList({ education, certificates, lang }: Props) {
  const t = getStrings(lang)

  return (
    <>
      {education.length > 0 && (
        <div>
          <p
            className="text-[12px] uppercase px-1 mb-1.5 text-secondary"
            style={{ letterSpacing: "0.04em" }}
          >
            {t.education.educationLabel}
          </p>
          <div className="rounded-2xl overflow-hidden bg-ios-card">
            {education.map((edu, i) => (
              <div
                key={edu.id}
                className="px-5 py-4 flex gap-4"
                style={{
                  borderBottom:
                    i < education.length - 1
                      ? "0.5px solid var(--ios-separator)"
                      : "none",
                }}
              >
                {edu.id === "kmutnb" && (
                  <EduIcon color="#5856D6">
                    <IoSchool size={22} color="#fff" />
                  </EduIcon>
                )}
                {edu.id === "catc" && (
                  <EduIcon color="#7c7be4">
                    <IoReaderSharp size={22} color="#fff" />
                  </EduIcon>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold text-primary">
                    {loc(lang, edu.degreeTh, edu.degree)}
                  </p>
                  <p className="text-[13px] mt-0.5 text-system-blue">
                    {loc(lang, edu.institutionTh, edu.institution)}
                  </p>
                  <p className="text-[13px] mt-0.5 text-secondary">
                    {loc(lang, edu.fieldTh, edu.field)}
                  </p>
                  <p className="text-[13px] mt-0.5 text-secondary">
                    GPA {edu.gpa}
                  </p>
                  <p className="text-[12px] mt-2 text-tertiary">
                    {lang === "th" && edu.startYearTh
                      ? `${edu.startYearTh} –${edu.endYearTh}`
                      : `${edu.startYear} –${edu.endYear}`}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {certificates.length > 0 && (
        <div>
          <p
            className="text-[12px] uppercase px-1 mb-1.5 text-secondary"
            style={{ letterSpacing: "0.04em" }}
          >
            {t.education.certificatesLabel}
          </p>
          <div className="rounded-2xl overflow-hidden bg-ios-card">
            {certificates.map((cert, i) => (
              <div
                key={cert.id}
                className="px-5 py-4 flex gap-4"
                style={{
                  borderBottom:
                    i < certificates.length - 1
                      ? "0.5px solid var(--ios-separator)"
                      : "none",
                }}
              >
                {cert?.id === "toeic" && (
                  <EduIcon color="#FF9500">
                    <IoRibbon size={22} color="#fff" />
                  </EduIcon>
                )}
                {cert?.id === "military" && (
                  <EduIcon color="#2f7115">
                    <IoMan size={22} color="#fff" />
                  </EduIcon>
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-[15px] font-semibold text-primary">
                    {loc(lang, cert.nameTh, cert.name)}
                  </p>
                  <p className="text-[13px] mt-0.5 text-system-blue">
                    {cert.issuer}
                  </p>
                  {(cert.note || cert.noteTh) && (
                    <p className="text-[13px] mt-0.5 text-secondary">
                      {loc(lang, cert.noteTh, cert.note ?? "")}
                    </p>
                  )}
                  <p className="text-[12px] mt-2 text-tertiary">
                    {loc(lang, cert.issuedDateTh, cert.issuedDate)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
