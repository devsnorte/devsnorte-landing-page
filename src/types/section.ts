import type { ImageProps } from "next/image";

export interface TitleProps {
  children: React.ReactNode;
}

export interface TextProps {
  children: React.ReactNode;
}

export interface SectionContentProps {
  variant?: "brand" | "black";
  children: React.ReactNode;
}

export interface SectionImageProps extends ImageProps {}

export interface SectionContainerProps {
  children: React.ReactNode;
  id?: string
}

export interface SectionContainerContentProps {
  children: React.ReactNode;
}
