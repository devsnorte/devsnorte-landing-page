import { useEffect, useState } from "react";

export const useBreakpoints = () => {
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const handleResize = () => {
    setWindowSize({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return {
    isCustomBreakpoint: (customWidth: number) => customWidth <= windowSize.width,
  };
};
