"use client";

import { TextProps } from "@/types/section";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Info = ({ children }: TextProps) => {
  const textRef = useRef<HTMLParagraphElement>(null);
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
    <div className="mt-2 font-poppins" ref={textRef}>
      {children}
    </div>
  );
};
