"use client";

import { SectionContainerProps } from "@/types/section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Container = ({ children, id }: SectionContainerProps) => {
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
    <section id={id} ref={triggerRef} className=" w-full flex flex-col md:flex-row-reverse">
      {children}
    </section>
  );
};
