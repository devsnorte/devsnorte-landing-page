"use client";

import { SectionContainerContentProps } from "@/types/section";

export const ContainerContent = ({ children }: SectionContainerContentProps) => {
  return <div className="max-w-96 h-1/2 flex lg:pt-30 xl:pt-48">{children}</div>;
};
