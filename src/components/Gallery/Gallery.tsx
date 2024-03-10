import { GalleryProps } from "@/types/gallery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";
import LineSection from "../../../public/icons/line-section.svg";
import { Title } from "../Section";

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
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (galleryRef.current) {
            gsap.from(galleryRef.current.children, {
                opacity: 0.7,
                x: (index) => (index % 2 === 0 ? -350 : 350),
                stagger: 0.1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: galleryRef.current,
                    start: "top 30%", // Começa a animação quando o elemento está 80% visível na janela
                    end: "bottom 20%", // Termina a animação quando o elemento está 20% visível na janela
                    scrub: true, // Suaviza o movimento de acordo com o scroll
                    markers: false, // Remove os marcadores do ScrollTrigger
                },
            }),
                gsap.to(galleryRef.current.children, {
                    opacity: 1,
                    x: 0,
                    stagger: 0.8,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: galleryRef.current,
                        start: "top 30%", // Começa a animação quando o elemento está 80% visível na janela
                        end: "bottom 20%", // Termina a animação quando o elemento está 20% visível na janela
                        scrub: true, // Suaviza o movimento de acordo com o scroll
                        markers: false, // Remove os marcadores do ScrollTrigger
                    },
                });
        }
    }, [windowWidth, images]);

    const calculateGroups = (windowWidth: number) => (windowWidth < 1024 ? 3 : 6);

    const imageGroups = images.reduce((acc: string[][], image, index) => {
        const groupIndex = Math.floor(index / calculateGroups(windowWidth));
        acc[groupIndex] = [...(acc[groupIndex] || []), image];
        return acc;
    }, []);

    //* Testing out modal

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentGroup, setCurrentGroup] = useState(0);

    const openModal = (groupIndex: number, imageIndex: number) => {
        setCurrentGroup(groupIndex);
        setCurrentImage(imageIndex);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const goToNextImage = () => {
        // Check if next image is in the current group
        if (currentImage < imageGroups[currentGroup].length - 1) {
            setCurrentImage(currentImage + 1);
        } else if (currentGroup < imageGroups.length - 1) {
            // Move to the next group
            setCurrentGroup(currentGroup + 1);
            setCurrentImage(0);
        }
    };

    const goToPreviousImage = () => {
        if (currentImage > 0) {
            setCurrentImage(currentImage - 1);
        } else if (currentGroup > 0) {
            // Move to the previous group
            setCurrentGroup(currentGroup - 1);
            setCurrentImage(imageGroups[currentGroup - 1].length - 1);
        }
    };

    return (
        <div className="my-12">
            <div className="px-5 lg:px-48 my-8">
                <Title>{t("gallery")}</Title>
                <div className="pt-5">
                    <LineSection className="w-[157px] h-[1px] text-white" />
                </div>
            </div>
            <div className="overflow-hidden">
                {imageGroups.map((group, groupIndex) => (
                    <div key={groupIndex} className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4 my-4">
                        {group.map((image, index) => (
                            <div key={index} className="w-full overflow-hidden cursor-pointer" onClick={() => openModal(groupIndex, index)}>
                                <Image src={image} alt={`Gallery Image ${index + 1}`} width={800} height={600} layout="responsive" objectFit="cover" />
                            </div>
                        ))}
                    </div>
                ))}
            </div>
            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close" onClick={closeModal}>
                            &times;
                        </span>
                        <Image src={imageGroups[currentGroup][currentImage]} alt="Modal Image" width={800} height={600} layout="responsive" objectFit="cover" />
                        <div className="mt-5 flex justify-between">
                            <button onClick={goToPreviousImage}>Previous</button>
                            <button onClick={goToNextImage}>Next</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
