'use client'

import { Desktop } from '@/components/desktop/Desktop'
import { IOSSettings } from '@/components/mobile/IOSSettings'

export default function Home() {
  return (
    <>
      <div className="max-[820px]:block hidden h-full"><IOSSettings /></div>
      <div className="min-[821px]:block hidden h-full"><Desktop /></div>
    </>
  )
}
