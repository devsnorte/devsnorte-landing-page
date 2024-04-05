'use client'
import {
  Container,
  ContainerContent,
  Content,
  Image,
  Info,
  Title
} from './index'
import ReactangleSection from '/public/icons/rectangle-section.svg'
import LineSection from '/public/icons/line-section.svg'
import { useLandingPageInfos } from '@/hooks/useLandingPageInfos'
import { useBreakpoints } from '@/hooks/useBreakpoints'

const Section = {
  Container,
  Content,
  Title,
  Info,
  Image,
  ContainerContent
}

const SectionPrincipal = () => {
  const landingPageInfos = useLandingPageInfos()
  const { isCustomBreakpoint } = useBreakpoints()
  const shouldSquareAppear = isCustomBreakpoint(850)

  return landingPageInfos.map((section, index) => {
    const isEven = index % 2 === 0
    return (
      <Section.Container id={section.title} key={section.title}>
        {!section.customSection ? (
          <>
            <Section.Image src={section.image.url} alt={section.image.alt} />
            <Section.Content variant={isEven ? 'black' : 'brand'}>
              <Section.Title>{section.title}</Section.Title>
              <div className='pt-4 pb-2'>
                <LineSection
                  className={`w-[157px] h-[1px] text-black dark:text-${
                    isEven ? 'white' : 'black'
                  }`}
                />
              </div>
              <Section.ContainerContent>
                <Section.Info>{section.info}</Section.Info>
              </Section.ContainerContent>
              {shouldSquareAppear && (
                <ReactangleSection
                  className={` absolute bottom-10 -right-5 z-10 w-[118px] h-[158px] text-${
                    isEven ? 'brand' : 'black'
                  }`}
                />
              )}
            </Section.Content>
          </>
        ) : (
          section.customSection
        )}
      </Section.Container>
    )
  })
}

export default SectionPrincipal
