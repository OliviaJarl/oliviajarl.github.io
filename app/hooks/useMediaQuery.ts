"use client";
import { useEffect, useState } from "react";

const useMediaQuery = (breakpoint: number) => {
  const [state, setState] = useState({
    windowWidth: window.innerWidth,
    isDesiredWidth: false,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const currentWindowWidth = window.innerWidth;
      const isDesiredWidth = currentWindowWidth < breakpoint;
      setState({ windowWidth: currentWindowWidth, isDesiredWidth });
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [state.windowWidth, breakpoint]);

  return state.isDesiredWidth;
};

export default useMediaQuery;