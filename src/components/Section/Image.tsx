"use client";

import { SectionImageProps } from "@/types/section";
import NextImage from "next/image";

export const Image = ({
  className,
  width = 768,
  height = 835,
  ...rest
}: SectionImageProps) => {
  return (
    <NextImage
      width={width}
      height={height}
      {...rest}
      className={`flex-grow object-cover object-top md:w-[330px] xl:w-1/3 ${className}`}
    />
  );
};
