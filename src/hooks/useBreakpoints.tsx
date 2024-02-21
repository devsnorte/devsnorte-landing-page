import { useEffect, useState } from "react";

export const useBreakpoints = () => {
  const [windowSize, setWindowSize] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({
        height: window?.innerHeight || 0,
        width: window?.innerWidth || 0,
      });
    }
  }, []);

  const handleResize = () => {
    setWindowSize({
      height: window?.innerHeight || 0,
      width: window?.innerWidth || 0,
    });
  };

  useEffect(() => {
    window?.addEventListener("resize", handleResize);
    handleResize();

    return () => window?.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return {
    isCustomBreakpoint: (customWidth: number) => customWidth <= windowSize.width,
  };
};
