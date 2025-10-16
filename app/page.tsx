"use client";
import React from "react";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ReactLenis } from "lenis/react";
const Home = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      Page
    </ReactLenis>
  );
};
export default Home;
