'use client'

import { SectionContainerProps } from '@/types/components/sectionTypes'

export function Container({ children, id }: SectionContainerProps) {
  return (
    <section className='w-full h-full flex flex-col md:flex-row-reverse' id={id}>
      {children}
    </section>
  )
}
