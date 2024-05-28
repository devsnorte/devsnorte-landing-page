"use client";

import { SectionContentProps } from "@/types/section";

export const Content = ({
  variant = "brand",
  children,
}: SectionContentProps) => {
  const variantsClasses = {
    brand: "bg-brand text-[#000]",
    black: "bg-zinc-50 text-black dark:bg-[#000] dark:text-white",
  };

  return (
    <div
      className={`flex flex-col items-start py-36 px-5 md:p-10 w-full lg:px-48 lg:py-40 justify-center relative box-border ${variantsClasses[variant]}`}
    >
      <>{children}</>
    </div>
  );
};
