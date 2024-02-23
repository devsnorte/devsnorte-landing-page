"use client";

import { SectionContentProps } from "@/types/section";

export const Content = ({ variant = "brand", children }: SectionContentProps) => {
  const variantsClasses = {
    brand: "bg-brand text-[#000]",
    black: "bg-[#000] text-white",
  };

  return (
    <div
      className={`p-5 h-[500px]  md:h-[430px] lg:h-[610px] xl:h-[835px] w-full flex flex-col items-start lg:px-48 justify-center relative ${variantsClasses[variant]}`}>
      <>{children}</>
    </div>
  );
};
