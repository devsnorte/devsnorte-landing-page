import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Newsletter } from '@/components/newsletter'
import { SectionPrincipal } from '@/components/section/Section'
import { seo } from '@/contants/seo'
import { NextPageContext } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'

function Home() {
  return (
    <div className='overflow-hidden bg-zinc-50 dark:bg-black dark:text-white'>
      <Head>
        <title>{seo.title}</title>
      </Head>
      <Header />
      <Hero />
      <SectionPrincipal />
      <Newsletter />
    </div>
  )
}

export default Home

export const getStaticProps = async (context: NextPageContext) => {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common']))
    }
  }
}
