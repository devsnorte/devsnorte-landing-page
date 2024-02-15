"use client";
import NextImage from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TitleProps {
  children: React.ReactNode;
}

interface TextProps {
  children: React.ReactNode;
}

interface SectionContentProps {
  variant?: "brand" | "black";
  children: React.ReactNode;
}

interface SectionImageProps extends React.ComponentProps<typeof NextImage> {}

interface SectionContainerProps {
  children: React.ReactNode;
}

interface SectionContainerContentProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const Trigger = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onUpdate: ({ progress }) => {
            console.log(progress);
          },
        },
      }
    );
    return () => {
      Trigger.kill();
    };
  }, []);
  return (
    <h2 className="lg:text-6xl font-semibold" ref={textRef}>
      {children}
    </h2>
  );
};

const Info = ({ children }: TextProps) => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const Trigger = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onUpdate: ({ progress }) => {
            console.log(progress);
          },
        },
      }
    );
    return () => {
      Trigger.kill();
    };
  }, []);

  return (
    <p className="mt-2 font-poppins" ref={textRef}>
      {children}
    </p>
  );
};

const Content = ({ variant = "brand", children }: SectionContentProps) => {
  const variantsClasses = {
    brand: "bg-brand text-[#000]",
    black: "bg-[#000] text-white",
  };

  return (
    <div
      className={`p-5 h-[835px] w-full flex flex-col items-start lg:px-48 justify-center relative ${variantsClasses[variant]}`}
    >
      <>{children}</>
    </div>
  );
};

const Image = ({
  className,
  width = 630,
  height = 835,
  ...rest
}: SectionImageProps) => {
  return (
    <NextImage
      width={width}
      height={height}
      {...rest}
      className={`h-full flex-grow object-cover object-top ${className}`}
    />
  );
};

const Container = ({ children }: SectionContainerProps) => {
  const textRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const Trigger = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onUpdate: ({ progress }) => {
            console.log(progress);
          },
        },
      }
    );
    return () => {
      Trigger.kill();
    };
  }, []);

  return (
    <section
      ref={triggerRef}
      className="max-h-[835px] w-full max-sm:flex-wrap flex flex-row-reverse"
    >
      {children}
    </section>
  );
};

const ContainerContent = ({ children }: SectionContainerContentProps) => {
   const textRef = useRef(null);
   const triggerRef = useRef(null);

   useEffect(() => {
     const Trigger = gsap.fromTo(
       textRef.current,
       {
         opacity: 0,
         y: 50,
       },
       {
         duration: 1,
         opacity: 1,
         y: 0,
         scrollTrigger: {
           trigger: triggerRef.current,
           start: "top center",
           end: "bottom center",
           scrub: 1,
           markers: false,
           onUpdate: ({ progress }) => {
             console.log(progress);
           },
         },
       }
     );
     return () => {
       Trigger.kill();
     };
   }, []);
  return <div className="max-w-96 h-1/2 flex lg:pt-48" ref={triggerRef}>{children}</div>;
};

const Section = {
  Container,
  Content,
  Title,
  Info,
  Image,
  ContainerContent,
};

const SectionPrincipal = () => {
  return (
    <>
      <Section.Container>
        <Section.Image src="/images/networking.png" alt="netwotking" />
        <Section.Content variant="black">
          <Section.Title>Networking</Section.Title>
          <div className="pt-5">
            <svg
              width="157"
              height="1"
              viewBox="0 0 157 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="0.5"
                x2="157"
                y2="0.500014"
                stroke="#EEEEEE"
              />
            </svg>
          </div>
          <Section.ContainerContent>
            <Section.Info>
              Eventos de tecnologia (TI) são excelentes oportunidades para
              networking. Esses eventos reúnem pessoas de diversos setores da
              indústria, incluindo desenvolvedores, empresários, investidores,
              especialistas em marketing, designers, entre outros.
            </Section.Info>
          </Section.ContainerContent>
          <div className="absolute bottom-10 -right-5 z-10">
            <svg
              width="118"
              height="158"
              viewBox="0 0 118 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="118" height="158" fill="#41B883" />
            </svg>
          </div>
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Image src="/images/palestras.png" alt="Imagem de Palestra" />
        <Section.Content variant="brand">
          <Section.Title>Palestras</Section.Title>
          <div className="pt-5">
            <svg
              width="157"
              height="1"
              viewBox="0 0 157 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="0.5"
                x2="157"
                y2="0.500014"
                stroke="#111111"
              />
            </svg>
          </div>
          <Section.ContainerContent>
            <Section.Info>
              Os eventos da Devs Norte são conhecidos por serem excelentes
              fontes de compartilhamento de conhecimento em programação. A Devs
              Norte é uma comunidade de desenvolvedores que promove eventos,
              meetups e workshops para compartilhar ideias, experiências e
              soluções para os desafios enfrentados pelos programadores.
            </Section.Info>
          </Section.ContainerContent>
          <div className="absolute bottom-10 -right-5 z-10">
            <svg
              width="118"
              height="158"
              viewBox="0 0 118 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="118" height="158" fill="#111111" />
            </svg>
          </div>
        </Section.Content>
      </Section.Container>

      <Section.Container>
        <Section.Image src="/images/sorteios.png" alt="Imagem de Sorteios" />
        <Section.Content variant="black">
          <Section.Title>Sorteios</Section.Title>
          <div className="pt-5">
            <svg
              width="157"
              height="1"
              viewBox="0 0 157 1"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4.37114e-08"
                y1="0.5"
                x2="157"
                y2="0.500014"
                stroke="#EEEEEE"
              />
            </svg>
          </div>
          <Section.ContainerContent>
            <Section.Info>
              Durante os eventos, a Devs Norte realiza sorteios de livros,
              cursos, e ferramentas utilizadas por programadores. Os sorteios
              são uma forma divertida de envolver os participantes e estimular a
              participação nos eventos. Eles também incentivam a comunidade de
              desenvolvedores a compartilhar ainda mais conhecimentos e
              recursos.
            </Section.Info>
          </Section.ContainerContent>
          <div className="absolute bottom-10 -right-5 z-10">
            <svg
              width="118"
              height="158"
              viewBox="0 0 118 158"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="118" height="158" fill="#41B883" />
            </svg>
          </div>
        </Section.Content>
      </Section.Container>
    </>
  );
};

export default SectionPrincipal;
