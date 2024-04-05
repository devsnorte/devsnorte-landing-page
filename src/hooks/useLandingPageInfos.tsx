import { EventContent } from '@/components/Events/EventContent'
import { useTranslation } from 'next-i18next'
import Gallery from '@/components/Gallery'
import { exampleImages } from '@/data/mock/gallery'
import Link from 'next/link'

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
      info: <>{<EventContent />}</>
    },
    {
      image: {
        url: '/images/palestras.png',
        alt: 'Imagem de Parcerias'
      },
      title: t('partnerships'),
      info: (
        <ul>
          <li>
            Jetbrains:&nbsp;
            <Link href='https://www.jetbrains.com/company/brand/'>
              https://www.jetbrains.com/company/brand/
            </Link>
          </li>
          <li>
            Faculdade Vincit:&nbsp;
            <Link href='https://www.faculdadevincit.edu.br/'>
              https://www.faculdadevincit.edu.br/
            </Link>
          </li>
          <li>
            Fanhero:&nbsp;
            <Link href='https://fanhero.com/pt-br/'>
              https://fanhero.com/pt-br/
            </Link>
          </li>
          <li>
            Amazonia Online:&nbsp;
            <Link href='https://amazoniaonline.com.br/'>
              https://amazoniaonline.com.br/
            </Link>
          </li>
          <li>
            Iidopterlabs:&nbsp;
            <Link href='https://www.idopterlabs.com.br/'>
              https://www.idopterlabs.com.br/
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
