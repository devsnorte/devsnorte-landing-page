'use client'

import { TitleProps } from '@/types/components/sectionTypes'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import styles from './styles/Title.module.css'

export function Title({ children }: TitleProps) {
  const textRef = useRef<HTMLHeadingElement>(null)
  const isInView = useInView(textRef, { once: true, margin: '0px 100px -100px 0px' })

  return (
    <h2 className={`${styles.title} ${isInView && styles.show}`} ref={textRef}>
      {children}
    </h2>
  )
}
