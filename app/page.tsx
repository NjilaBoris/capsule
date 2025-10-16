"use client";
import React from "react";
import { useEffect, useRef } from "react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import Hero from "@/components/Hero";

gsap.registerPlugin(SplitText, ScrollTrigger);

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
      <Hero />
      <div className="h-dvh" />
    </ReactLenis>
  );
};
export default Home;
