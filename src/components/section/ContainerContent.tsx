'use client'

import { SectionContainerContentProps } from '@/types/components/sectionTypes'

export function ContainerContent({ children }: SectionContainerContentProps) {
  return <div className='flex lg:pt-8 xl:pt-10'>{children}</div>
}
