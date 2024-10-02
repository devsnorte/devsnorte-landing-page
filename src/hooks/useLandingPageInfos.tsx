import { EventSection } from '@/components/events/EventSection'
import { useTranslation } from 'next-i18next'
import Gallery from '@/components/gallery/Gallery'
import { exampleImages } from '@/data/mock/gallery'
import Link from 'next/link'
import Image from 'next/image'

export const useLandingPageInfos = () => {
  const { t } = useTranslation()
  const infos = [
    {
      image: {
        url: '/images/networking.png',
        alt: t('networking')
      },
      title: t('Networking'),
      info: <p>{t('networkingSubtitle')}</p>
    },

    {
      image: {
        url: '/images/sorteios.png',
        alt: 'Imagem de Palestra'
      },
      title: t('giveaways'),
      info: <p>{t('giveawaysSubtitle')}</p>
    },
    {
      image: {
        url: '/images/palestras.png',
        alt: 'Imagem de Palestra'
      },
      title: t('lecture'),
      info: <p>{t('lectureSubtitle')}</p>
    },
    {
      image: {
        url: '/images/eventos.png',
        alt: 'Eventos Sympla'
      },
      title: t('events'),
      info: <EventSection />
    },
    {
      image: {
        url: '/images/palestras.png',
        alt: 'Imagem de Parcerias'
      },
      title: t('partnerships'),
      info: (
        <ul className='flex flex-wrap gap-2'>
          <li className='flex items-center justify-center'>           
            {/* Jetbrains:&nbsp; */}
            <Link href='https://www.jetbrains.com/company/brand/'>
            <Image alt='Jetbrains' height={100} src='/images/logos/jetbrains.png' width={200}/>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            {/* Faculdade Vincit:&nbsp; */}
            <Link href='https://www.faculdadevincit.edu.br/'>
            <Image alt='Faculdade Vincit' height={100} src='/images/logos/faculdadevincint.png' width={200}/>
            </Link>
          </li>
          <li className='flex items-center justify-center'>
            {/* Fanhero:&nbsp; */}
            <Link href='https://fanhero.com/pt-br/'>
            <Image alt='Fanhero' height={100} src='/images/logos/fanhero.png' width={200}/></Link>

          </li>
          <li className='flex items-center justify-center'>
            {/* Amazonia Online:&nbsp; */}
            <Link href='https://amazoniaonline.com.br/'>
            <Image alt='Amazonia Oline' height={100} src='/images/logos/amazoniaonline.png' width={200}/></Link>

          </li>
          <li className='flex items-center justify-center'>
            {/* Iidopterlabs:&nbsp; */}
            <Link href='https://www.idopterlabs.com.br/'>
            <Image alt='Iidopterlabs' height={100} src='/images/logos/idopterlabs.png' width={200}/>
            </Link>
          </li>
        </ul>
      )
    },
    {
      title: t('gallery'),
      customSection: <Gallery images={exampleImages} />
    }
  ]
  return infos
}
