/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Main, Head, NextScript } from 'next/document'

const seo = {
  title: 'Devs Norte',
  description:
    // eslint-disable-next-line
    'Explore o universo da tecnologia conosco! Faça parte da maior comunidade de desenvolvedores do Norte do Brasil. Conecte-se, aprenda e colabore com profissionais apaixonados por inovação e desenvolvimento de software.',
  keywords: [
    'Desenvolvimento de Software',
    'Programação',
    'Comunidade de Desenvolvedores',
    'Belém',
    'Tecnologia',
    'Código Fonte',
    'Meetups de Desenvolvedores',
    'Eventos Tech',
    'Networking Profissional',
    'Inovação Tecnológica',
    'Startups',
    'Empreendedorismo Digital',
    'Web Development',
    'Mobile Development',
    'Inteligência Artificial',
    'Internet das Coisas (IoT)',
    'Cloud Computing',
    'Linguagens de Programação',
    'Ferramentas de Desenvolvimento',
    'Educação em Tecnologia'
  ],
  url: 'www.devsnorte.com.br',
  urlImage: 'https://devsnorte.netlify.app/_ipx/w_828,q_75/%2Fimages%2Fnetworking.png?url=%2Fimages%2Fnetworking.png'
}

export const metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    url: seo.url,
    description: seo.description,
    type: 'website',
    images: [
      {
        url: seo.urlImage,
        type: 'image/jpg',
        width: 1200,
        height: 630,
        alt: seo.title
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.urlImage,
        type: 'image/jpg',
        width: 1200,
        height: 630,
        alt: 'EMM'
      }
    ]
  }
}

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{seo.title}</title>
        <meta content={metadata.description} name='description' />
        <meta content={metadata.keywords.join(', ')} name='keywords' />
        <meta content='index, follow' name='robots' />
        <link href='/favicon.ico' rel='shortcut icon' />

        {/* Open Graph */}
        <meta content={metadata.openGraph.title} property='og:title' />
        <meta content={metadata.openGraph.url} property='og:url' />
        <meta content={metadata.openGraph.description} property='og:description' />
        <meta content={metadata.openGraph.type} property='og:type' />
        <meta content={metadata.openGraph.images[0].url} property='og:image' />
        <meta content={metadata.openGraph.images[0].type} property='og:image:type' />
        <meta content={metadata.openGraph.images[0].width.toString()} property='og:image:width' />
        <meta content={metadata.openGraph.images[0].height.toString()} property='og:image:height' />
        <meta content={metadata.openGraph.images[0].alt} property='og:image:alt' />

        {/* Twitter */}
        <meta content={metadata.twitter.card} name='twitter:card' />
        <meta content={metadata.twitter.title} name='twitter:title' />
        <meta content={metadata.twitter.description} name='twitter:description' />
        <meta content={metadata.twitter.images[0].url} name='twitter:image' />
        <meta content={metadata.twitter.images[0].alt} name='twitter:image:alt' />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      <script data-domain='devsnorte.com' defer src='https://devsnorte-plausible.fly.dev/js/script.js' />
    </Html>
  )
}
