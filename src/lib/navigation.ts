import { IoPerson, IoFlash, IoFolder, IoBriefcase, IoSchool, IoMail } from 'react-icons/io5'
import type { IconType } from 'react-icons'

export type NavId = 'about' | 'skills' | 'projects' | 'experience' | 'education' | 'contact'

export const NAV_ITEMS: { id: NavId; Icon: IconType; iconBg: string }[] = [
  { id: 'about',      Icon: IoPerson,    iconBg: '#007AFF' },
  { id: 'skills',     Icon: IoFlash,     iconBg: '#5856D6' },
  { id: 'projects',   Icon: IoFolder,    iconBg: '#FF9500' },
  { id: 'experience', Icon: IoBriefcase, iconBg: '#FF3B30' },
  { id: 'education',  Icon: IoSchool,    iconBg: '#34C759' },
  { id: 'contact',    Icon: IoMail,      iconBg: '#0A84FF' },
]
