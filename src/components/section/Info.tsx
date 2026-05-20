'use client'

import { TextProps } from '@/types/components/sectionTypes'
export function Info({ children }: TextProps) {
  return <div className='flex w-full mt-2 font-poppins'>{children}</div>
}
