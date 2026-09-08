'use client'
import styles from './styles/Content.module.css'
import { SectionContentProps } from '@/types/components/sectionTypes'

const variantsClasses = {
  brand: 'bg-brand text-[#000]',
  black: 'bg-zinc-50 text-black dark:bg-[#000] dark:text-white'
}

export function Content({ variant = 'brand', children }: SectionContentProps) {
  return <div className={`${styles.contentWrapper} ${variantsClasses[variant]}`}>{children}</div>
}
