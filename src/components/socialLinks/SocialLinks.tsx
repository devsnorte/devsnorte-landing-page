import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
  FaYoutube

} from 'react-icons/fa'

import { RedeSocial } from '@/types/components/socialLinksTypes'

// Tipando o array com RedeSocial
const redes: RedeSocial[] = [
  { nome: 'Discord', url: 'https://discord.gg/V825KxKzcQ', icone: FaDiscord },
  { nome: 'Facebook', url: 'http://facebook.com/devsnorte', icone: FaFacebook },
  { nome: 'GitHub', url: 'https://www.github.com/devsnorte/', icone: FaGithub },
  { nome: 'Instagram', url: 'http://instagram.com/devsnorte', icone: FaInstagram },
  { nome: 'LinkedIn', url: 'https://www.linkedin.com/company/devsnorte/', icone: FaLinkedin },
  { nome: 'Telegram', url: 'https://t.me/devsnorte', icone: FaTelegram },
  { nome: 'Twitter', url: 'https://www.twitter.com/devsnorte/', icone: FaTwitter },
  { nome: 'YouTube', url: 'https://youtube.com/c/DevsNorte', icone: FaYoutube }
]

function SocialLinks() {
  return (
    <div className='mb-5'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-center gap-4'>
        <h2 className='text-gray-700 text-2xl font-bold w-full text-center md:w-auto md:text-left md:mb-0'>
          Nossas redes:
        </h2>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          {redes.map(({ nome, url, icone: Icon }) => (
            <a
              className='flex items-center justify-center text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-white transition-colors'
              href={url}
              key={nome}
              rel='noopener noreferrer'
              target='blank'
              title={nome}
            >
              <Icon className='w-6 h-6 aspect-square' />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SocialLinks