import embla from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import { CarouselButton } from './CarouselButtons'
import { DotButton } from './CarouselDotButton'
import { useEffect, useState } from 'react'
import ArrowIcon from '/public/icons/arrow.svg'
import DotIcon from '/public/icons/dot.svg'

interface IEventCarousel {
  options?: EmblaOptionsType
  children: React.ReactNode
}

export function EventCarousel({ options, children }: IEventCarousel) {
  const [currentIndex, setCurrentIndex] = useState(options?.startIndex || 0)
  const [emblaRef, carousel] = embla(options)

  const disableNextButton = (carousel ? carousel.slideNodes().length - 1 : 0) <= currentIndex

  useEffect(() => {
    carousel?.on('init', () => {
      carousel.scrollTo(currentIndex)
    })

    carousel?.on('select', () => {
      setCurrentIndex(carousel.selectedScrollSnap())
    })

    return () => {
      carousel?.off('select', () => null)
    }
  }, [carousel, currentIndex])

  useEffect(() => {
    carousel?.reInit()
  }, [carousel])

  function handleScrollTo(index: number) {
    setCurrentIndex(index)
    carousel?.scrollTo(index)
  }

  return (
    <section className='flex flex-col gap-4 w-full items-center'>
      <div className='w-full h-[300px] overflow-hidden' ref={emblaRef}>
        <div className='flex w-full'>{children}</div>
      </div>
      <div className='flex justify-between w-full md:w-[70%]'>
        <CarouselButton classname='' disabled={currentIndex <= 0} onClick={() => handleScrollTo(currentIndex - 1)}>
          <ArrowIcon className='w-8 bg-green-300 rounded-full' />
        </CarouselButton>

        <div className='flex gap-4'>
          {carousel?.slideNodes().map((_, index) => (
            <DotButton classname='' key={index} onClick={() => handleScrollTo(index)}>
              <DotIcon
                className={` ${currentIndex === index ? 'border-white text-white' : 'border-green-300 text-green-300'} w-4 border-2 rounded-full 
             `}
              />
            </DotButton>
          ))}
        </div>

        <CarouselButton classname='' disabled={disableNextButton} onClick={() => handleScrollTo(currentIndex + 1)}>
          <ArrowIcon className='w-8 rotate-180 bg-green-300 rounded-full' />
        </CarouselButton>
      </div>
    </section>
  )
}
