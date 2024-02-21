"use client";

import { SectionImageProps } from "@/types/section";
import NextImage from "next/image";

export const Image = ({ className, width = 768, height = 835, ...rest }: SectionImageProps) => {
  return (
    <NextImage
      width={width}
      height={height}
      {...rest}
      className={`h-full flex-grow object-cover object-top md:w-[330px] lg:w-[460px] xl:w-[unset]  object-cover ${className}`}
    />
  );
};
