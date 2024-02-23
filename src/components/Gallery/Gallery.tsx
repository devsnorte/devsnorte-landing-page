import { GalleryProps } from '@/types/gallery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from "next-i18next";
import Image from 'next/image';
import { FC, useEffect, useRef } from 'react';
import LineSection from "../../../public/icons/line-section.svg";
import { Title } from '../Section';

const Gallery: FC<GalleryProps> = ({ images }) => {
    const { t } = useTranslation();
    const galleryRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        if (galleryRef.current) {
            gsap.from(galleryRef.current.children, {
                opacity: 0,
                x: (index) => index % 2 === 0 ? -350 : 350, // Alternar entre -100 e 100 com base no índice
                stagger: 0.1, // Reduzir o atraso para uma animação mais rápida
                duration: 1, // Aumentar a duração para uma animação mais suave
                ease: "power3.out", // Adicionar um efeito de transição de entrada
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                }
            });
        }
    }, [images]);

    // Divide as imagens em grupos de 4 para cada linha
    const imageGroups = images.reduce((acc, image, index) => {
        const groupIndex = Math.floor(index / 6);
        if (!acc[groupIndex]) {
            acc[groupIndex] = [];
        }
        acc[groupIndex].push(image);
        return acc;
    }, [] as string[][]);

    return (
        <div className='my-12'>
            <div className='px-5 lg:px-48 my-8'>
            <Title> {t("gallery")}</Title>
            <div className="pt-5">
            </div>
            <LineSection className={`w-[157px] h-[1px] text-white`} />
          </div>
        <div ref={galleryRef} className="overflow-hidden">
            {imageGroups.map((group, groupIndex) => (
                <div key={groupIndex} className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4">
                    {group.map((image, index) => (
                        <div key={index} className="w-full overflow-hidden cursor-pointer">
                            <Image src={image} alt={`Gallery Image ${index + 1}`} width={800} height={600} layout="responsive" objectFit="cover" />
                        </div>
                    ))}
                </div>
            ))}
        </div>
        </div>
    );
};

export default Gallery;
