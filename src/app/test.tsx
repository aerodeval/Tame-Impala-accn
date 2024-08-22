/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Tabs } from "./ui/tabs";
import {Spotify} from "react-spotify-embed"
import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";
import { Boxes } from "./ui/background-boxes";
import { cn } from "./utils/cn";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { TracingBeam } from "./ui/tracing-beam";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import cloudinaryLoader from "../../my-loader";
import { useState } from "react";
import { audio } from "@cloudinary/url-gen/qualifiers/source";
import { WavyBackground } from "./ui/wavy-background";
import { PinContainer } from "./ui/3d-pin";
import { Vortex } from "./ui/vortex";
import ScrollComponent from "./ScrollComponent";

const isClicked= false;
  const wordsgen = `
Ever since I was a small boy
No one else compared to you, no way
I always thought heroes stayed close
Whenever troubled times arose
I didn't know
Ain't always how it goes

Every single word you told me
I believed without a question, always
To save all of us, you told us both to trust
But now I know you only saved yourself

Did you think I'd never know?
Never wise up as I grow?
  `;

// const words = [
//   {
//     text: "Did",
//   },
//   {
//     text: "you",
//   },
//   {
//     text: "Know",
//   },
//   {
//     text: "Tame",
//     className: "text-purple-500 dark:text-purple-500",

//   },
//   {
//     text: "Impala",
//     className: "text-purple-500 dark:text-purple-500",
//   },
//   {
//     text: "is"
//   },
//   {
//     text: "actually"
//   },
//   {
//     text: "one",
//     className: "text-purple-500 dark:text-purple-500",

//   }, 
//   {
//     text: "guy?",
//     className: "text-purple-500 dark:text-purple-500",

//   }, 


// ];

const imageUrl ='/impalabg2_hahh5f';
const imageUrl2 ='/impalabg3_z9f4mm';
const imageUrl3 ='/tour-image';
const content = [
  {
    title: "Formation",
    description:
    "Tame Impala was formed by Kevin Parker in 2007 in Perth, Western Australia. Initially, it started as a solo project with Parker recording all the music himself. Parker drew inspiration from various psychedelic rock bands of the 1960s and 1970s, such as The Beatles, Pink Floyd, and Cream, as well as contemporary acts like MGMT and Flaming Lips.",
    content: (
      <div>
             <Image
        src="/kevin_parker_qafycq"
        alt="dummy image"
        width="1000"
        height="1000"
      />
      </div>
    ),
  },
  {
    title: "Breakout Album ",
    description:
"Tame Impala's early work received praise from critics for its innovative approach to psychedelic rock, with many lauding Parker's production skills and songwriting prowess. The band's debut album, Innerspeaker, was released in 2010 to widespread acclaim. It showcased Parker's multi-instrumental talents and his knack for crafting intricate psychedelic rock compositions.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image  
        src="/tour-image"
        alt="dummy image"
        width="1000"
        height="1000"
      />
      </div>
    ),
  },
  {
    title: "Expanding the Band",
    description:
      "While Tame Impala initially started as Parker's solo project, he later expanded it into a full band to perform live shows. However, Parker remained the primary songwriter and producer for the group. Following the success of 'Innerspeaker,' Tame Impala released further critically acclaimed albums, including 'Lonerism in 2012 and 'Currents' in 2015, which further solidified their status as one of the leading psychedelic rock acts of the 21st century.",
    content: (
      <Image   
      src="/stickyscroll"
      alt="dummy image"
      width="1000"
      height="1000"
    />
    ),
  },
  {
    title: "Evolution of Sound",
    description:
      "Tame Impala received several Grammy nominations over the years, including nods for Best Alternative Music Album and Best Rock Song, reflecting their impact on contemporary music. Throughout their career, Tame Impala has continually evolved their sound, incorporating elements of electronic music, funk, and pop into their psychedelic rock framework while maintaining Parker's signature sonic aesthetic.",
    content: (
      <Image          src="/Tame_Impala_1"
        alt="dummy image"
        width="1000"
        height="1000"
      />
    ),
  },
];
  const tabs = [
    {
      title: "Currents",
      value: "Currents",
      content: (
        <div  className="test1 w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Currents</p>
          <Image
        src="/currents_fidqbz"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[60%] pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
    {
      title: "Slow Rush",
      value: "Slow Rush",
      content: (
        <div className="test2 w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Slow Rush</p>
          <Image
        src="/slowrush"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[60%] pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
    {
      title: "Lonerism",
      value: "Lonerism",
      content: (
        <div  className="test3 w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Lonerism</p>
          <Image
        src="/lonerism"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[60%] pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
    {
      title: "Inner Speaker",
      value: "Inner Speaker",
      content: (
        <div  className="test4 w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Inner Speaker</p>
          <Image
        src="/innerspeaker"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[60%] pb-20  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
    {
      title: "Live",
      value: "Live",
      content: (
        <div className="test5 w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p >Live Versions</p>
          <Image
        src="/liveversions"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[60%] pb-20  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
  ];
  const animations = [
    `fade-up`,
    `fade-down`,
    `fade-left`,
    `fade-right`,
    `fade-up-right`,
    `fade-up-left`,
    `fade-down-right`,
    `fade-down-left`,
    `zoom-in`,
    `zoom-in-up`,
    `zoom-in-down`,
    `zoom-in-left`,
    `zoom-in-right`,
    `zoom-out`,
    `zoom-out-up`,
    `zoom-out-down`,
    `zoom-out-left`,
    `zoom-out-right`,
    `slide-up`,
    `slide-down`,
    `slide-right`,
    `slide-left`,
    `flip-left`,
    `flip-right`,
    `flip-up`,
    `flip-down`,
  ];
export default function Home() {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); 
  const [isSpinning, setIsSpinning] = useState(false);
  const [interPlan,setPlan]=useState(false)
  const delayInMillis = 4000; // 2 seconds

  const handlePlanetClick=()=>{

  const planet=  document.querySelector('.finalscreen');
  const planet2=  document.querySelector('.scler');

  planet!.classList.add('planetanimation');

  planet!.addEventListener('animationend',()=>{

    planet2!.classList.add('planetTransform')
  })
  };

  const handleImageClick = () => {
    const durationInSeconds = 120; // The duration you want to play the audio for
  
    if (!isSpinning) {
      const newAudio = new Audio('https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3');
      setAudio(newAudio);
  
      setTimeout(() => {
        newAudio.play();
      }, delayInMillis);
  
      // Stop the audio after the specified duration
      setTimeout(() => {
        newAudio.pause();
        newAudio.currentTime = 0; // Reset audio to the beginning if needed
        setIsSpinning(false);
      }, durationInSeconds * 1000);
  
      setIsSpinning(true);
      setTriggerAnimation(true);
    } else {
      if (audio) {
        setIsSpinning(false);
        audio.pause(); // Pause audio playback
      }
    }
  };
  
  const handleDivClick = () => {
    const element = document.querySelector('.vinyl-container');
    element!.classList.add('vinylcontainer');
    element!.addEventListener('animationend', () => {
     const elementToAdd = document.querySelector('.hypnotic-spiral');
     const elementToAdd2 = document.querySelector('.wavey');
     elementToAdd2?.classList.add('bg-opac');
 
    });
    
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);
  // const [scrolledY, setScrolledY] = useState(0);
  // const textRef =useRef<HTMLParagraphElement | null>(null);
  // const [revealComplete, setRevealComplete] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const [triggerAnimation, setTriggerAnimation] = useState(false);


  // useEffect(() => {
  //   const handleScroll = (event: WheelEvent) => {
  //     if (!containerRef.current || !topDivRef.current) return;

  

  //     const deltaY = event.deltaY;
  //     const containerHeight = containerRef.current.clientHeight;
  //     const windowHeight = window.innerHeight;

  //     if (!revealComplete) {
        
  //       // Stage 1: Reveal effect
  //       const newScrollPosition = scrollPosition + deltaY;
  //       const revealRatio = Math.min(newScrollPosition / windowHeight, 1);
  //       const revealAmount = revealRatio * 100;

  //       topDivRef.current.style.clipPath = `inset(0 0 ${revealAmount}% 0)`;
  //       if (revealAmount === 100) {
  //         containerRef.current.style.position = 'relative';

  //       } 
  //       if (revealAmount === 1) {
  //         containerRef.current.style.position = 'fixed';

  //       } 

  //       if (revealAmount >= 100) {
  //         setRevealComplete(true);
      
  //       }

  //       setScrollPosition(newScrollPosition);
  //     } else {
  //       // Stage 2: Translate effect
  //       const maxTranslateY = containerHeight - windowHeight;
  //       let newTranslateY = scrollPosition - windowHeight + deltaY;

  //       newTranslateY = Math.max(-maxTranslateY, Math.min(0, newTranslateY));
  //       setScrollPosition(newTranslateY);
  //       containerRef.current.style.transform = `translate3d(0, ${newTranslateY}px, 0)`;
  //     }
  //   };

  //   window.addEventListener('wheel', handleScroll, { passive: false });

  //   return () => {
  //     window.removeEventListener('wheel', handleScroll);
  //   };
  // }, [scrollPosition, revealComplete]);



  // useEffect(() => {
  //   gsap.to(topDivRef.current, {
  //     scrollTrigger: {
  //       trigger: containerRef.current,
  //       start: "top center",
  //       end: "bottom+=50%", // Adjust as necessary
  //       scrub: true,
  //       pin: true, // Pin the container until the animation is complete
  //       pinSpacing: false, // Disable the extra space added by ScrollTrigger
  //     },
  //     clipPath: "inset(0% 0% 100% 0%)", // Left to right reveal
  //     ease: "none",
  //   });
  // }, []);

//   const playAudio = () => {
//     const audio = new Audio('https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3');
//     audio.play();
//   };
   return (
  //   bg-black bg-grid-white/[0.2]
    <div className="dark  bg-black bg-grid-white/[0.2] "  >
      <section className="h-[100vh] flex justify-center">
        <div className="flex justify-center items-center ">
          <h1> Welcome to the Tame Impala Experience</h1>
          </div>

      </section>

   
    <ScrollComponent></ScrollComponent>
{/* <section>
  <div className="section-psy video-section relative flex justify-center ">
    <div className="absolute z-10 flex flex-col items-center container mx-auto">
    <div className="flex flex-col w-2/3  items-center justify-center p-5 text-center ">
  <h1  className="text-2xl sm:text-7xl font-bold  z-10 get-lost  text-[#7fff00]">
  Get Lost in the Psychedelia:</h1>
  <span className=" get-lost-para z-10">Tame Impalas Top Hits (personally approved)</span>
  </div>
  <div className="flex flex-col w-2/3   ">
  <Spotify style={{width:"100%"}}  link="https://open.spotify.com/playlist/57VwfwVQr5mRoUnnnV2qxA?si=65447040945e4651" />
  </div>
  </div>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
    <video className="bg-video sticky z-0 opacity-70" autoPlay loop muted preload="metadata">
      <source src="https://res.cloudinary.com/dm3ienizb/video/upload/v1723465188/mplabg-2_l9cwxk.mp4" type="video/mp4" />
    </video>
  </div>
</section> */}



      
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
Hi!      </p>
<TypewriterEffectSmooth className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" words={words} />

<Image


        src="/tameimpala_mvyskc"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover opacity-40 object-left-top h-[60%] pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      /> */}
 
    {/* <div  className="h-[100vh] w-full relative">

    <p className="text-4xl sm:text-7xl testes font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
 Some of his work     </p>

    </div> */}
    <section className="next-section" >
    <p   className="text-4xl sm:text-7xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
 Some of his work     </p>
{/* <div className="art-div">
 <div className="shape-container">
	<div className="shape">
  <div className="shape-inner">
  <div className="shape-inner-2">
  <div className="shape-inner-3">
    
    </div>
    </div>
    </div>
  
  </div>
  </div>
  </div> */}

    <div style={{marginTop:0}} className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    <Tabs tabs={tabs} />
  </div>
  </section>
  <section>
  <div data-aos="fade-up">
  <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
His Journey </p>  <div className="p-10 flex items-center justify-center">
    
      <StickyScroll  content={content} />
    
    </div>
  </div></section>
  <section>
<div className="test">
  <div  className=" h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl}>
        <p className="font-bold text-xl">Hollywood Bowl</p>
        <p className="font-normal text-sm">2021</p>
      </DirectionAwareHover>
    </div>
    </div>
    <div className="test-zig">
  <div  className=" h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl2}>
        <p className="font-bold text-xl">Somewhere in space</p>
        <p className="font-normal text-sm">2098</p>
      </DirectionAwareHover>
    </div>
    </div>
    <div className="test-zag mb-[15rem]">
  <div  className=" h-[40rem] relative  flex items-center justify-center ">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">1679</p>
      </DirectionAwareHover>
    </div>
    </div>
    </section>

    {/* <section><p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
As Kevin said himself</p>

<div className="lyrics-display flex items-center justify-center text-center">
 <TextGenerateEffect  words={wordsgen} />
 </div></section> */}
<section className="flex justify-center" >
  <div className="lyrical-cont columns-2 mb-6">

  <div >
 <div className="hspiral-container relative flex items-center justify-center "onClick={handleImageClick} >

 <WavyBackground className="bg-opac max-w-4xl mx-auto pb-40 "></WavyBackground>
<div  className="vinyl-container"    onClick={handleDivClick}>
    <div className="h-[4rem] bg-white packcontainer" >
         </div>

      
<Image
        src="/impalavinyl"
        alt="dummy image"
        width="1000"
        height="1000"
        className={`hypnotic-spiral relative flex items-center justify-center ${isSpinning ? 'spin-animation' : ''}`}
        
      />
   




</div>
</div>
</div>
<div className="h-full flex justify-center flex-col">
<p   className={`text-2xl sm:text-5xl flex flex-col font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-3 items-center text-center justify-center ${
    triggerAnimation ? "what-he-said" : "what-was-said"
  }`}>
As Kevin said himself <span className="text-2xl font-light text-[#7fff00]">Click on the vinyl</span></p>



<div className="lyrics-display flex items-center justify-center pl-10 ">

 <TextGenerateEffect isClicked={isSpinning}  words={wordsgen} />
</div>
</div></div>

</section>

<div className="w-full vortex mx-auto rounded-md relative h-screen overflow-hidden">
  <Vortex
    backgroundColor="black"
    rangeY={800}
    particleCount={500}
    baseHue={120}
    className="flex items-center flex-col justify-center px-2 md:px-10 relative py-4 w-full h-full"
  >
    <div
      onClick={handlePlanetClick}
      className="finalscreen absolute z-20 flex items-center justify-center w-full h-full"
    >
      {/* <Image
        className="checkered-pattern absolute"
        src="/pattern_checkerboard_1_2_0-0_0_1__008a6c_44669c_y33ijk"
        alt="dummy image"
        width="1000"
        height="900"
        style={{ width: 'auto', height: 'auto' }}
      /> */}

      <motion.img
        className="absolute bgspace"
        src="../imgs/bgspace.png"
        alt="dummy image"
        style={{ zIndex: 1 }}
      />

      <motion.img
        className="absolute man"
        src="../imgs/man.png"
        alt="dummy image"
        width="1000"
        height="1000"
        animate={{
          x: [0, 0, 0],
          y: [5, -5, 5],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      />

      <motion.img
        className="absolute sun scler"
        src="../imgs/sun.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 2 }}
        animate={{
          x: [-20, 20, -20],
          y: [0, 0, 0],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 1,
          },
        }}
      />

      <motion.img
        className="absolute plan1 scler"
        src="../imgs/planet1.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 3 }}
        animate={{
          x: [-10, 10, -10],
          y: [10, 10, 10],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      <motion.img
        className="absolute plan2 scler"
        src="../imgs/layer 3.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 4 }}
        animate={{
          x: [-10, 10, -10],
          y: [10, 10, 10],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      <motion.img
        className="absolute plan11 scler"
        src="../imgs/layer 8.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 5 }}
        animate={{
          x: [-10, 10, -10],
          y: [10, 10, 10],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      <motion.img
        className="absolute plan9 scler"
        src="../imgs/layer 9.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 6 }}
        animate={{
          x: [-10, 10, -10],
          y: [10, 10, 10],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />

      <motion.img
        className="absolute plan12 scler"
        src="../imgs/layer 11.png"
        alt="dummy image"
        style={{ maxWidth: '20%', height: 'auto', zIndex: 7 }}
        animate={{
          x: [-10, 10, -10],
          y: [10, 10, 10],
          transition: {
            duration: 2,
            ease: 'easeInOut',
            repeat: Infinity,
          },
        }}
      />
    </div>
  </Vortex>
</div>




    

    {/* <div>
    <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
 
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Tailwind is Awesome
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Framer motion is the best animation library ngl
      </p>
    </div>
    </div> */}
{/* <section>
<div className="w-full vortex mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
      Thanks for tuning in till the end, just like the last echoes of a Tame Impala song.

        </h2>
       
      </Vortex>
    </div>
    </section> */}
  </div>
  );
}
