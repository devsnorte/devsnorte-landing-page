import { GalleryProps } from '@/types/gallery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { FC, useEffect, useRef, useState } from 'react';
import LineSection from '../../../public/icons/line-section.svg';
import { Title } from '../Section';

const Gallery: FC<GalleryProps> = ({ images }) => {
    const { t } = useTranslation();
    const galleryRef = useRef<HTMLDivElement>(null);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        handleResize(); // Define a largura inicial da janela
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        if (galleryRef.current) {
            gsap.from(galleryRef.current.children, {
                opacity: 0.7,
                x: index => (index % 2 === 0 ? -350 : 350),
                stagger: 0.1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: 'top 80%',
                    end: 'bottom top',
                    scrub: true,
                    markers: false
                }
            });
        }
    }, [windowWidth, images]);

    const calculateGroups = (windowWidth: number) => (windowWidth < 1024 ? 3 : 6);

    const imageGroups = images.reduce((acc: string[][], image, index) => {
        const groupIndex = Math.floor(index / calculateGroups(windowWidth));
        acc[groupIndex] = [...(acc[groupIndex] || []), image];
        return acc;
    }, []);

    return (
        <div className='my-12'>
            <div className='px-5 lg:px-48 my-8'>
                <Title>{t('gallery')}</Title>
                <div className="pt-5">
                    <LineSection className='w-[157px] h-[1px] text-white' />
                </div>
            </div>
            <div ref={galleryRef} className='overflow-hidden'>
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className='grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 my-4'>
                        {group.map((image, index) => (
                            <div key={index} className='w-full overflow-hidden cursor-pointer'>
                                <Image src={image} alt={`Gallery Image ${index + 1}`} width={800} height={600} layout='responsive' objectFit='cover' />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
