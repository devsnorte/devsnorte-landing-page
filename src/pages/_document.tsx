import { metadata, seo } from '@/contants/seo'
import { Html, Main, Head, NextScript } from 'next/document'

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
