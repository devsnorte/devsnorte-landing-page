'use client'

import { TitleProps } from '@/types/section'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const Title = ({ children }: TitleProps) => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const triggerRef = useRef(null)

  useEffect(() => {
    const Trigger = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
          onUpdate: ({ progress }) => {
            // console.log(progress);
          }
        }
      }
    )
    return () => {
      Trigger.kill()
    }
  }, [])
  return (
    <h2 className='text-4xl md:text-6xl font-semibold' ref={textRef}>
      {children}
    </h2>
  )
}
