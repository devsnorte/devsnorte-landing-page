import Image from 'next/image'
import Link from 'next/link'
import { Dropdown } from '../DropDown/Dropdown'
import { useRouter } from 'next/router'
import Translate from '/public/icons/translate.svg'
import { useTranslation } from 'next-i18next'
import { useLandingPageInfos } from '@/hooks/useLandingPageInfos'
import { FaRegSun, FaRegMoon } from 'react-icons/fa'
import { useContext, useState } from 'react'
import { ThemeContext } from '@/components/ContextAPI/ThemeContext'
import { CiMenuFries } from 'react-icons/ci'
import { AnimatePresence, motion } from 'framer-motion'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { PiMoonLight, PiSunDim } from 'react-icons/pi'

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

const Header = ({ className = '', ...rest }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useTranslation()
  const sections = useLandingPageInfos()
  const onSelectLanguage = (value: string) => {
    router.push(router.pathname, router.asPath, { locale: value })
  }
  const { theme, toggleTheme } = useContext(ThemeContext)

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
    <header className={`flex flex-col items-center justify-center px-5`}>
      <link
        rel='icon'
        href='/icons/favicon.svg'
        type='image/svg'
        sizes='32x32'
      />
      <div className='flex justify-between w-full h-16 max-w-screen-lg pt-10'>
        <Link href='/'>
          <div className='hover:pointer'></div>
          <Image
            src='/icons/logo.svg'
            width={188}
            height={60}
            alt='devs norte logo'
            className='w-full xl:w-44'
          />
        </Link>

        <div className='flex gap-[10px] items-center'>
          <div className='hover:cursor-pointer'>
            {theme === 'light' ? (
              <PiSunDim size={30} onClick={toggleTheme} />
            ) : (
              <PiMoonLight size={30} onClick={toggleTheme} />
            )}
          </div>

          <div className='cursor-pointer'>
            <CiMenuFries
              className='w-8 h-6'
              onClick={() => setMenuOpen(true)}
            />
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='bg-black fixed top-0 left-0 w-full h-screen z-50'
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className='max-w-96 mx-auto p-4'
              >
                <motion.ul
                  initial={'closed'}
                  animate={'open'}
                  variants={{
                    open: {
                      clipPath: 'inset(0% 0% 0% 0% round 10px)',
                      transition: {
                        type: 'spring',
                        bounce: 0,
                        duration: 0.7,
                        delayChildren: 0.3,
                        staggerChildren: 0.05
                      }
                    },
                    closed: {
                      clipPath: 'inset(10% 50% 90% 50% round 10px)',
                      transition: {
                        type: 'spring',
                        bounce: 0,
                        duration: 0.3
                      }
                    }
                  }}
                  style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
                  className='flex flex-col justify-center gap-5 h-screen w-full relative'
                >
                  <Dropdown
                    placeholder={<Translate className='w-6 h-6' />}
                    onSelect={(value) => onSelectLanguage(value as string)}
                    data={[
                      { label: 'Portugues', value: 'pt' },
                      { label: 'English', value: 'en' },
                      { label: 'Espanhol', value: 'es' }
                    ]}
                  />

                  {sections.map((section) => (
                    <motion.li
                      key={section.title}
                      variants={{
                        open: {
                          opacity: 1,
                          y: 0,
                          transition: {
                            type: 'spring',
                            stiffness: 300,
                            damping: 24
                          }
                        },
                        closed: {
                          opacity: 0,
                          y: 20,
                          transition: { duration: 0.2 }
                        }
                      }}
                      onClick={() => {
                        setMenuOpen(false)
                        scrollToSection(section.title)
                      }}
                      className='text-white text-2xl'
                    >
                      {section.title}
                    </motion.li>
                  ))}

                  <div
                    className='cursor-pointer w-9 h-9 z-50 ml-auto'
                    onClick={() => setMenuOpen(false)}
                  >
                    <IoIosCloseCircleOutline className='dark:text-white text-4xl' />
                  </div>
                </motion.ul>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
