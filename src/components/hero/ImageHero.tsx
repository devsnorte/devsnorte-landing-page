import { useContext } from 'react'
import styles from './styles/ImageHero.module.css'
import DevsNorte from '/public/icons/devsnorte-hero.svg'
import DevsNorteLight from '/public/icons/devsnorte-hero-light.svg'
import Star from '/public/icons/star.svg'
import { ThemeContext } from '../../contexts/ThemeContext'

export function ImageHero() {
  const { theme } = useContext(ThemeContext)
  return (
    <div className='relative'>
      {theme === 'dark' ? <DevsNorte className={styles.devsnorteSvg} /> : <DevsNorteLight className={styles.devsnorteSvg} />}

      <Star className={styles.star} />
    </div>
  )
}
