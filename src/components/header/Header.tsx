import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from '@/components/dropdown/Dropdown'
import { useRouter } from 'next/router'
import Translate from '/public/icons/translate.svg'
import { useLandingPageInfos } from '@/hooks/useLandingPageInfos'
import { useState } from 'react'
import { useTheme } from '@/contexts/ThemeContext'
import { CiMenuFries } from 'react-icons/ci'
import { AnimatePresence, motion } from 'framer-motion'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { PiMoonLight, PiSunDim } from 'react-icons/pi'
import { headerMenuItem, headerMenuList } from '@/contants/animationsVariants'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const sections = useLandingPageInfos()
  const onSelectLanguage = (value: string) => {
    router.push(router.pathname, router.asPath, { locale: value })
  }
  const { theme, toggleTheme } = useTheme()

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className='flex flex-col items-center justify-center px-5'>
      <link href='/icons/favicon.svg' rel='icon' sizes='32x32' type='image/svg' />
      <div className='flex items-center justify-between w-full h-16 max-w-screen-lg pt-10'>
        <Link className='block h-16' href='/'>
          <div className='hover:pointer' />
          {theme === 'dark' ? (
            <Image alt='devs norte logo' className='w-full xl:w-44' height={60} src='/icons/logo.svg' width={188} />
          ) : (
            <Image alt='devs norte logo' className='w-full xl:w-44' height={60} src='/icons/logo-light.svg' width={188} />
          )}
        </Link>

        <div className='flex gap-[10px] items-center'>
          <div className='hover:cursor-pointer'>{theme === 'light' ? <PiSunDim onClick={toggleTheme} size={30} /> : <PiMoonLight onClick={toggleTheme} size={30} />}</div>

          <div className='cursor-pointer'>
            <CiMenuFries className='w-8 h-6' onClick={() => setMenuOpen(true)} />
          </div>
        </div>

        <AnimatePresence>
          {menuOpen ? (
            <motion.div animate={{ opacity: 1 }} className='bg-white dark:bg-black fixed top-0 left-0 w-full h-screen z-50' exit={{ opacity: 0 }} initial={{ opacity: 0 }}>
              <motion.div animate={{ scale: 1 }} className='max-w-96 mx-auto p-4' exit={{ scale: 0.8 }} initial={{ scale: 0.8 }}>
                <motion.ul
                  animate='open'
                  className='flex flex-col justify-center gap-5 h-screen w-full relative'
                  initial='closed'
                  style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
                  variants={headerMenuList}
                >
                  <div className='cursor-pointer w-9 h-9 z-50 ml-auto' onClick={() => setMenuOpen(false)}>
                    <IoIosCloseCircleOutline className='text-black dark:text-white text-4xl' />
                  </div>

                  <Dropdown
                    data={[
                      { label: 'Portugues', value: 'pt' },
                      { label: 'English', value: 'en' },
                      { label: 'Espanhol', value: 'es' }
                    ]}
                    onSelect={(value) => onSelectLanguage(value as string)}
                    placeholder={<Translate className='w-6 h-6' />}
                  />

                  {sections.map((section) => (
                    <motion.li
                      className='cursor-pointer text-black dark:text-white text-2xl'
                      key={section.title}
                      onClick={() => {
                        setMenuOpen(false)
                        scrollToSection(section.title)
                      }}
                      variants={headerMenuItem}
                    >
                      {section.title}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  )
}
