'use client'

import { TextProps } from '@/types/components/SectionTypes'
export function Info({ children }: TextProps) {
  return <div className='mt-2 font-poppins'>{children}</div>
}
