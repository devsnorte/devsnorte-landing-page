import { useContext } from 'react'
import css from './style.module.css'
import DevsNorte from '/public/icons/devsnorte-hero.svg'
import DevsNorteLight from '/public/icons/devsnorte-hero-light.svg'
import Star from '/public/icons/star.svg'
import { ThemeContext } from '../ContextAPI/ThemeContext'

const ImageHero = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className='relative'>
      {theme === 'dark' ? (
        <DevsNorte className={css['devsnorte-svg']} />
      ) : (
        <DevsNorteLight className={css['devsnorte-svg']} />
      )}

      <Star className={css.star} />
    </div>
  )
}

export default ImageHero
