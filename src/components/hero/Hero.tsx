'use client'
import gsap from 'gsap'
import { ImageHero } from './ImageHero'
import { Detail } from './Detail'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'next-i18next'

export function Hero() {
  const { t } = useTranslation()
  const textHeroSubtitleRef = useRef(null)

  useEffect(() => {
    const textHeroSubtitle = textHeroSubtitleRef.current

    gsap.fromTo(
      textHeroSubtitle,
      {
        opacity: 0,
        duration: 3,
        y: 0
      },
      {
        opacity: 1,
        duration: 2,
        y: 20,
        ease: 'power4.out'
      }
    )
  }, [])

  return (
    <div className='px-6'>
      <div className='mx-auto my-64 relative max-w-screen-md'>
        <ImageHero />
  
        <p className='mt-5 text-base md:text-3xl opacity-0' ref={textHeroSubtitleRef}>
          {t('heroSubtitle')}
        </p>
      </div>
      <Detail />
    </div>
  )
}
