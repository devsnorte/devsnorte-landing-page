'use client'

import { SectionContainerProps } from '@/types/components/SectionTypes'

export function Container({ children, id }: SectionContainerProps) {
  return (
    <section className='w-full flex flex-col md:flex-row-reverse' id={id}>
      {children}
    </section>
  )
}
