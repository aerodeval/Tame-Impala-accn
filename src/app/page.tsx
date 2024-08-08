'use client';
import Home from "./test";
import React, { useEffect, useRef,useState } from 'react';
export default function App() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
      const handleScroll = () => {
          if (!containerRef.current || !topDivRef.current) return;

          const scrollTop = window.scrollY || document.documentElement.scrollTop;
          const containerHeight = containerRef.current.clientHeight;

          const revealRatio = Math.min(scrollTop / containerHeight, 1);
          const revealAmount = 100 * revealRatio; // percentage

          topDivRef.current.style.clipPath = `inset(0 0 ${revealAmount}% 0)`;

          if (revealAmount === 100) {
            containerRef.current.classList.add('relative');
            containerRef.current.classList.remove('fixed');
          } else {
            containerRef.current.classList.add('fixed');
            containerRef.current.classList.remove('relative');
          }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);
  return (
<Home></Home>
  );}