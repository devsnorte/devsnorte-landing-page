"use client";
import gsap from "gsap";
import ImageHero from "../ImageHero";
import Detail from "./detail";
import css from "./style.module.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const textHeroSubtitleRef = useRef(null);

  useEffect(() => {
    const textHeroSubtitle = textHeroSubtitleRef.current;

    gsap.fromTo(
      textHeroSubtitle,
      {
        opacity: 0,
        duration: 3,
        y: 0,
      },
      {
        opacity: 1,
        duration: 2,
        y: 20,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div className="px-6">
      <div className="mx-auto my-64 relative max-w-screen-md">
        <hr className={`w-20 absolute right-1 -top-10 ${css.line}`} />
        <ImageHero />
        <p className={`mt-5 text-base lg:text-3xl opacity-0`} ref={textHeroSubtitleRef}>
          {t("heroSubtitle")}
        </p>
        <hr className={`w-40 absolute right-0 ${css.line}`} />
      </div>
      <Detail />
    </div>
  );
};

export default Hero;
