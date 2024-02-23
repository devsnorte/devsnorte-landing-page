import type { Metadata } from "next";
import { Html, Main, Head, NextScript } from "next/document";

const seo = {
  title: 'Devs Norte',
  description: "A maior comunidade de Desenvolvedores do Norte do Brasil",
  keywords: ['palavra1', 'palavra2', 'palavra3'],
  url: "www.devsnorte.com.br",
  urlImage: "https://devsnorte.netlify.app/_ipx/w_828,q_75/%2Fimages%2Fnetworking.png?url=%2Fimages%2Fnetworking.png"
}

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    url: seo.url,
    description: seo.description,
    type: "website",
    images: [
      {
        url: seo.urlImage,
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: seo.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: [
      {
        url: seo.urlImage,
        type: "image/jpg",
        width: 1200,
        height: 630,
        alt: "EMM",
      },
    ],
  },
}

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
