/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Vortex } from "./ui/vortex";
import { useGSAP } from '@gsap/react';
export default function MagicBall() {
  const magicRef = useRef<HTMLDivElement | null>(null);
  const ballRef = useRef<HTMLDivElement | null>(null);

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(ballRef.current,  { y: 0,zIndex:10,perspective:100 }, {
        markers: {startColor: "white", endColor: "white", fontSize: "18px", fontWeight: "bold", indent: 20},
      scrollTrigger: {
        trigger: ballRef.current,
        snap:{
        ease: 'power1.inOut',
        }
  
      
      },
     y:100,// Left to right reveal
      zIndex:100,
      perspective:150,

      ease: "none",
    });
  }, {scope: magicRef })



  

  return (
<div  ref={magicRef} className="w-full vortex mx-auto rounded-md relative h-screen overflow-hidden">
  <Vortex
    backgroundColor="black"
    rangeY={800}
    particleCount={500}
    baseHue={120}
    className="flex items-center flex-col justify-start px-2 md:px-10 relative py-4 w-full h-full"
  >
    <div>
    <div className="parent ">

    <div ref={ballRef} className="circle-outer absolute top-0">
    <div className="circle">
      <div className="eight-ball w-[130px] h-[130px] z-10 bg-slate-200 rounded-full flex  justify-center items-center"
      >
        <span className="fortune text-6xl text-black">8</span>

      </div>
    </div>
  </div> 
    <div className="child relative flex justify-center">
    <div className="bridge-section">
      <div className="bridge child2">
      </div>
      <div className="bridge child3 absolute top-0">
      </div>
      <div className="bridge child4 absolute top-0">
      </div>
      <div className="bridge child5 absolute top-0">
      </div>
      <div className="bridge child6 absolute top-0">
      </div>
      <div className="bridge child7 absolute top-0">
      </div>
    </div>
    <div className="bridge-section h-full absolute left-[48px]">
      <div className="bridge child2">
      </div>
      <div className="bridge child3 absolute top-0">
      </div>
      <div className="bridge child4 absolute top-0">
      </div>
      <div className="bridge child5 absolute top-0">
      </div>
      <div className="bridge child6 absolute top-0">
      </div>
      <div className="bridge child7 absolute top-0">
      </div>
    </div>
    <div className="bridge-section h-full absolute left-[96px]">
      <div className="bridge child2">
      </div>
      <div className="bridge child3 absolute top-0">
      </div>
      <div className="bridge child4 absolute top-0">
      </div>
      <div className="bridge child5 absolute top-0">
      </div>
      <div className="bridge child6 absolute top-0">
      </div>
      <div className="bridge child7 absolute top-0">
      </div>
    </div>
    <div className="bridge-section h-full absolute left-[144px]">
      <div className="bridge child2">
      </div>
      <div className="bridge child3 absolute top-0">
      </div>
      <div className="bridge child4 absolute top-0">
      </div>
      <div className="bridge child5 absolute top-0">
      </div>
      <div className="bridge child6 absolute top-0">
      </div>
      <div className="bridge child7 absolute top-0">
      </div>
    </div>
   
    </div>
    
  </div>
    </div>

  </Vortex>
</div>
    // <div className="wrapper z-50" ref={magicRef} >
    //     <div id="top-div1" className="top-div" ref={ballRef}>
    //     <p className="text-2xl sm:text-8xl font-bold absolute who-ist bottom-text text-[#E5B0A3]">
    //             Who is Tame Impala?
    //           </p>
    //       <div className="image-grid">
    //         <div className="row-[12/24] col-[2/-1] image-top">
           
    //           <img alt='img-gif1-placeholder'
    //             src="../imgs/impalagif-placeholder.jpg"
    //             fetchPriority="high"
    //             decoding="async"
    //             className="h-full object-cover"
    //             style={{ color: 'transparent' }}
    //           />
    //         </div>
    //         <div className="row-[2/24] col-[18/-2] image-bottom">
    //           <img alt='img-gif2-placeholder'
    //             src="../imgs/impalagif2-placeholder.jpg"
    //             fetchPriority="high"
    //             decoding="async"
    //             className="h-full object-cover"
    //             style={{ color: 'transparent' }}
    //           />
    //         </div>
    //         <div className="row-[3/10] col-[2/-1] image-bottom">
    //           <img alt='img-gif3-placeholder'
    //             src="../imgs/impalagif3.png"
    //             fetchPriority="high"
    //             decoding="async"
    //             className="h-full object-cover"
    //             style={{ color: 'transparent' }}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <div id="bottom-div1" className="bottom-div">
    //         <p  className="text-2xl sm:text-8xl font-bold absolute who-ist top-text text-[#7fff00]">
    //               Who is Tame Impala?
    //             </p>
    //       <div>
    //         <div className="image-grid">
    //           <div className="row-[12/24] col-[2/-1] image-top">
       
    //             <img alt='impala-gif-1'
    //               src="../imgs/impalagif.gif"
    //               fetchPriority="high"
    //               decoding="async"
    //               className="h-full object-cover"
    //               style={{ color: 'transparent' }}
    //             />
    //           </div>
    //           <div className="row-[2/24] col-[18/-2] image-bottom">
    //             <img alt='impala-gif-2'
    //               src="../imgs/impalagif2.gif"
    //               fetchPriority="high"
    //               decoding="async"
    //               className="h-full object-cover"
    //               style={{ color: 'transparent' }}
    //             />
    //           </div>
    //           <div className="row-[3/10] col-[2/-1] image-bottom">
    //             <img alt='impala-gif-1'
    //               src="../imgs/impalagif3.gif"
    //               fetchPriority="high"
    //               decoding="async"
    //               className="h-full object-cover"
    //               style={{ color: 'transparent' }}
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </div>
      
    //   </div>

  );
}
