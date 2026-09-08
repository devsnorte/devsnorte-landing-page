export const seo = {
  title: 'Devs Norte',
  description:
    // eslint-disable-next-line max-len
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
