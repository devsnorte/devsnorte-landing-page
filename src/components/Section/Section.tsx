"use client";
import { Container, ContainerContent, Content, Image, Info, Title } from "./index";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLandingPageInfos } from "@/hooks/useLandingPageInfos";
import { useBreakpoints } from "@/hooks/useBreakpoints";

gsap.registerPlugin(ScrollTrigger);

const Section = {
  Container,
  Content,
  Title,
  Info,
  Image,
  ContainerContent,
};

const SectionPrincipal = () => {
  const landingPageInfos = useLandingPageInfos();
  const { isCustomBreakpoint } = useBreakpoints();
  const shouldSquareAppear = isCustomBreakpoint(850);

  return landingPageInfos.map((section, index) => {
    const isEven = index % 2 === 0;
    return (
      <Section.Container key={section.title}>
        <Section.Image src={section.image.url} alt={section.image.alt} />
        <Section.Content variant={isEven ? "black" : "brand"}>
          <Section.Title>{section.title}</Section.Title>
          <div className="pt-5">
            <svg width="157" height="1" viewBox="0 0 157 1" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="4.37114e-08" y1="0.5" x2="157" y2="0.500014" stroke={isEven ? "#EEEEEE" : "#111111"} />
            </svg>
          </div>
          <Section.ContainerContent>
            <Section.Info>{section.info}</Section.Info>
          </Section.ContainerContent>
          {shouldSquareAppear && (
            <div className="absolute bottom-10 -right-5 z-10">
              <svg width="118" height="158" viewBox="0 0 118 158" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="118" height="158" fill={isEven ? "#41B883" : "#111111"} />
              </svg>
            </div>
          )}
        </Section.Content>
      </Section.Container>
    );
  });
};

export default SectionPrincipal;
