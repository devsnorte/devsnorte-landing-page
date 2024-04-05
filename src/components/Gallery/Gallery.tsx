import { FC, useEffect, useRef, useState } from 'react'
import { GalleryProps } from '@/types/gallery'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
// import LineSection from '../../../public/icons/line-section.svg'
import { Title } from '../Section'
import { motion, AnimatePresence } from 'framer-motion'

const Gallery: FC<GalleryProps> = ({ images }) => {
  const { t } = useTranslation()
  const [windowWidth, setWindowWidth] = useState<number>(0)

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    handleResize() // Define a largura inicial da janela
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const calculateGroups = (windowWidth: number) => (windowWidth < 1024 ? 3 : 6)

  const imageGroups = images.reduce((acc: string[][], image, index) => {
    const groupIndex = Math.floor(index / calculateGroups(windowWidth))
    acc[groupIndex] = [...(acc[groupIndex] || []), image]
    return acc
  }, [])

  //* Testing out modal

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)
  const [currentGroup, setCurrentGroup] = useState(0)

  const openModal = (groupIndex: number, imageIndex: number) => {
    setCurrentGroup(groupIndex)
    setCurrentImage(imageIndex)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const goToNextImage = () => {
    // Check if next image is in the current group
    if (currentImage < imageGroups[currentGroup].length - 1) {
      setCurrentImage(currentImage + 1)
    } else if (currentGroup < imageGroups.length - 1) {
      // Move to the next group
      setCurrentGroup(currentGroup + 1)
      setCurrentImage(0)
    }
  }

  const goToPreviousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1)
    } else if (currentGroup > 0) {
      // Move to the previous group
      setCurrentGroup(currentGroup - 1)
      setCurrentImage(imageGroups[currentGroup - 1].length - 1)
    }
  }

  return (
    <div className='my-12'>
      <div className='px-5 lg:px-48 my-8'>
        <Title>{t('gallery')}</Title>
        <div className='pt-5'>
          {/* <LineSection className='w-[157px] h-[1px] text-white' /> */}
        </div>
      </div>
      <div className='overflow-hidden'>
        {imageGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 my-4'
          >
            {group.map((image, index) => (
              <div
                key={index}
                className='w-full overflow-hidden cursor-pointer'
                onClick={() => openModal(groupIndex, index)}
              >
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  width={800}
                  height={600}
                  layout='responsive'
                  objectFit='cover'
                />
              </div>
            ))}
          </div>
        ))}
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className='fixed top-0 left-0 flex items-center justify-center w-full h-screen bg-[#0008] backdrop-blur-md px-4'
            onClick={closeModal}
            exit={{ opacity: 0, scale: 0.8, backgroundColor: 'transparent' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              key={imageGroups[currentGroup][currentImage]}
              className='max-w-sm w-full h-[calc(100%-200px)] relative'
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className='absolute top-2 right-2 text-4xl cursor-pointer w-8 h-8 flex items-center justify-center border-2 border-brand rounded-full bg-[#0007]'
                onClick={closeModal}
              >
                &times;
              </span>
              <Image
                src={imageGroups[currentGroup][currentImage]}
                alt='Modal Image'
                width={630}
                height={835}
                className='w-full object-cover h-full aspect-[0.75/1] grow-0'
              />
              <div className='mt-5 flex justify-between'>
                <button onClick={goToPreviousImage}>Previous</button>
                <button onClick={goToNextImage}>Next</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery
