// /* eslint-disable @next/next/no-img-element */
// import React, { useEffect, useRef, useState } from 'react';
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from '@gsap/react';
// import 'css-doodle';
// import { Draggable } from 'gsap/Draggable';


// import dynamic from 'next/dynamic';


// // Dynamically import CssDoodleComponent without SSR
// const CssDoodleComponent = dynamic(() => import('../app/doodle'), {
//   ssr: false,
// });


// export default function MagicBall() {
//   const ballRef = useRef<HTMLDivElement | null>(null);
//   const screenRef = useRef<HTMLDivElement | null>(null);
//   const magicRef = useRef<HTMLDivElement | null>(null);
//   const eightRef = useRef<HTMLDivElement | null>(null);
//   const doodleRules = `
//     --color: #8f11f5,#ff56f6,#ff9d76,#840606;
//     @grid: 30x1 / 100vw 100vh / #270f34;

//     :container {
//       perspective: 30vmin;
//       --deg: @p(-180deg, 180deg);
//     }

//     @place: center;
//     @size: 18vmin; 
    
//     box-shadow: @m2(0 0 50px @p(--color));
//     will-change: transform, opacity;
//     animation: scale-up 12s linear infinite;
//     animation-delay: calc(-12s / @I * @i);

//     @keyframes scale-up {
//       0%, 95.01%, 100% {
//         transform: translateZ(0) rotate(0);
//         opacity: 0;
//       }
//       10% { 
//         opacity: 1; 
//       }
//       95% {
//         transform: translateZ(35vmin) rotateZ(var(--deg));
//       }
//     }
//   `;

//   useEffect(() => {
//     // Save the initial position
//     const initialPosition = { x: 0, y: 0 };

//     // GSAP Timeline for scroll-triggered animations
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: magicRef.current,
//         start: 'top top',
//         end: 'bottom bottom',
     
//         pin: true, // Pin the trigger element during the scroll
//       },
//     });

//     // Animate ballRef element to y: 300 as the user scrolls
//     timeline.to(ballRef.current, { y: 200, duration: 10 });

//     // Fade in screenRef element as the user scrolls
//     timeline.to(screenRef.current, { opacity: 1 });

//     timeline.to(ballRef.current, {
//       scale: 1.5, // Example of an additional animation
//       duration: 1,
//       ease: 'power2.out',
//       // You can adjust the timing here based on the scroll
//       delay: 0.5 // Delay to start this animation after reaching y: 300
//     });
//     timeline.to(eightRef.current, {
//       backgroundColor: "#16110f", // New background color (Tomato)
//       duration: 1,
//       ease: 'power2.out',
//       border: "solid 1px rebeccapurple"
//     });

//     // timeline.to(screenRef.current, {
//     //   opacity: 1, 
//     //   duration: 1,
//     //   onStart: () => {
//     //     // Set initial text opacity to 0
//     //     gsap.set(screenRef.current!.querySelector('.text-content'), { opacity: 0 });
//     //   }
//     // });

//     // // Animate text inside screenRef to fade in
//     // timeline.to(screenRef.current!.querySelector('.text-content'), {
//     //   opacity: 1,
//     //   duration: 1,
//     //   ease: 'power2.out'
//     // });


//     // Make the element draggable
//     Draggable.create(ballRef.current, {
//       onPressInit() {
//         // Record the initial position when the dragging starts
//         initialPosition.x = Number(gsap.getProperty(ballRef.current, 'x'));
//         initialPosition.y = Number(gsap.getProperty(ballRef.current, 'y'));

//         // Pause the scroll-triggered timeline when dragging starts
//         timeline.pause();
//       },
//       onDragEnd() {
//         // Animate back to the initial position when dragging ends
//         gsap.to(ballRef.current, {
//           x: initialPosition.x,
//           y: initialPosition.y,
//           duration: 0.5, // Adjust the duration for the return animation
//           ease: 'power2.out', // Smooth easing
//           onComplete: () => {
//             // Resume the scroll-triggered timeline after returning to the original position
//             timeline.play();
//           },
//         });
  
//       },
      
//     },
  

  
  
//   );
//   }, []);

  

//   return (
// <div className='relative flex justify-center' >


// <CssDoodleComponent rule={doodleRules} />



//     <div  className='absolute'>
//     <div ref={magicRef} className="parent  ">

//     <div ref={ballRef} className="circle-outer absolute top-0 z-20">
//     <div className="circle">
//       <div ref={eightRef} className="eight-ball w-[130px] h-[130px] z-10 bg-slate-200 rounded-full flex  justify-center items-center"
//       >

// <span  className="number-ball text-6xl text-black">8</span>
//         <div ref={screenRef}  className="fortune  flex justify-center text-6xl text-black">
//         <div className="text-content">Good Bye</div>
//         </div>

//       </div>
//     </div>
//   </div> 
//     <div className="child relative flex justify-center">
//     <div className="bridge-section">
 
//       <div className="bridge child3 absolute top-0">
//       </div>
//       <div className="bridge child4 absolute top-0">
//       </div>
//       <div className="bridge child5 absolute top-0">
//       </div>
//       <div className="bridge child6 absolute top-0">
//       </div>
//       <div className="bridge child7 absolute top-0">
//       </div>
//     </div>
//     <div className="bridge-section h-full absolute left-[48px]">
//       <div className="bridge child2">
//       </div>
//       <div className="bridge child3 absolute top-0">
//       </div>
//       <div className="bridge child4 absolute top-0">
//       </div>
//       <div className="bridge child5 absolute top-0">
//       </div>
//       <div className="bridge child6 absolute top-0">
//       </div>
//       <div className="bridge child7 absolute top-0">
//       </div>
//     </div>
//     <div className="bridge-section h-full absolute left-[96px]">
//       <div className="bridge child2">
//       </div>
//       <div className="bridge child3 absolute top-0">
//       </div>
//       <div className="bridge child4 absolute top-0">
//       </div>
//       <div className="bridge child5 absolute top-0">
//       </div>
//       <div className="bridge child6 absolute top-0">
//       </div>
//       <div className="bridge child7 absolute top-0">
//       </div>
//     </div>
//     <div className="bridge-section h-full absolute left-[144px]">
//       <div className="bridge child2">
//       </div>
//       <div className="bridge child3 absolute top-0">
//       </div>
//       <div className="bridge child4 absolute top-0">
//       </div>
//       <div className="bridge child5 absolute top-0">
//       </div>
//       <div className="bridge child6 absolute top-0">
//       </div>
//       <div className="bridge child7 absolute top-0">
//       </div>
//     </div>
   
//     </div>
    
//   </div>
//     </div>

// </div>
//   );
// }
