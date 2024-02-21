"use client";

import { SectionContainerContentProps } from "@/types/section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const ContainerContent = ({ children }: SectionContainerContentProps) => {
  const textRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const Trigger = gsap.fromTo(
      textRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        duration: 1,
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
          onUpdate: ({ progress }) => {
            console.log(progress);
          },
        },
      }
    );
    return () => {
      Trigger.kill();
    };
  }, []);
  return (
    <div className="max-w-96 h-1/2 flex lg:pt-30 xl:pt-48" ref={triggerRef}>
      {children}
    </div>
  );
};
