/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useGSAP } from '@gsap/react';
export default function ScrollComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to(topDivRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top", // Ensure the pin ends smoothly
        scrub: true,
        pin:true,
        refreshPriority: 1,
      
      },
      clipPath: "inset(0% 0% 100% 0%)", // Left to right reveal
      ease: "none",
    });
  }, {scope: containerRef })



  

  return (

    <div className="wrapper z-50" ref={containerRef} >
        <div id="top-div1" className="top-div" ref={topDivRef}>
        <p className="text-2xl sm:text-8xl font-bold absolute who-ist bottom-text text-[#E5B0A3]">
                Who is Tame Impala?
              </p>
          <div className="image-grid">
            <div className="row-[12/24] col-[2/-1] image-top">
           
              <img alt='img-gif1-placeholder'
                src="../imgs/impalagif-placeholder.jpg"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="row-[2/24] col-[18/-2] image-bottom">
              <img alt='img-gif2-placeholder'
                src="../imgs/impalagif2-placeholder.jpg"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="row-[3/10] col-[2/-1] image-bottom">
              <img alt='img-gif3-placeholder'
                src="../imgs/impalagif3.png"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div id="bottom-div1" className="bottom-div">
            <p  className="text-2xl sm:text-8xl font-bold absolute who-ist top-text text-[#7fff00]">
                  Who is Tame Impala?
                </p>
          <div>
            <div className="image-grid">
              <div className="row-[12/24] col-[2/-1] image-top">
       
                <img alt='impala-gif-1'
                  src="../imgs/impalagif.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[2/24] col-[18/-2] image-bottom">
                <img alt='impala-gif-2'
                  src="../imgs/impalagif2.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[3/10] col-[2/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/impalagif3.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>

  );
}
