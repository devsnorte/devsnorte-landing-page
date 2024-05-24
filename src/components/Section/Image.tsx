'use client'

import { SectionImageProps } from '@/types/components/SectionTypes'
import NextImage from 'next/image'
import styles from './styles/Image.module.css'
export function Image({ className, width = 768, height = 835, ...rest }: SectionImageProps) {
  return (
    <NextImage
      height={height}
      width={width}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      className={`${styles.image} ${className}`}
    />
  )
}
