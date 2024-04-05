/* eslint-disable @next/next/no-title-in-document-head */
import { Html, Main, Head, NextScript } from 'next/document'

const seo = {
  title: 'Devs Norte',
  description:
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
  urlImage:
    'https://devsnorte.netlify.app/_ipx/w_828,q_75/%2Fimages%2Fnetworking.png?url=%2Fimages%2Fnetworking.png'
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
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content={metadata.keywords.join(', ')} />
        <meta name='robots' content='index, follow' />
        <link rel='shortcut icon' href='/favicon.ico' />

        {/* Open Graph */}
        <meta property='og:title' content={metadata.openGraph.title} />
        <meta property='og:url' content={metadata.openGraph.url} />
        <meta
          property='og:description'
          content={metadata.openGraph.description}
        />
        <meta property='og:type' content={metadata.openGraph.type} />
        <meta property='og:image' content={metadata.openGraph.images[0].url} />
        <meta
          property='og:image:type'
          content={metadata.openGraph.images[0].type}
        />
        <meta
          property='og:image:width'
          content={metadata.openGraph.images[0].width.toString()}
        />
        <meta
          property='og:image:height'
          content={metadata.openGraph.images[0].height.toString()}
        />
        <meta
          property='og:image:alt'
          content={metadata.openGraph.images[0].alt}
        />

        {/* Twitter */}
        <meta name='twitter:card' content={metadata.twitter.card} />
        <meta name='twitter:title' content={metadata.twitter.title} />
        <meta
          name='twitter:description'
          content={metadata.twitter.description}
        />
        <meta name='twitter:image' content={metadata.twitter.images[0].url} />
        <meta
          name='twitter:image:alt'
          content={metadata.twitter.images[0].alt}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
      <script
        defer
        data-domain='devsnorte.com'
        src='https://devsnorte-plausible.fly.dev/js/script.js'
      ></script>
    </Html>
  )
}
