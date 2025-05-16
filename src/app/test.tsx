/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Tabs } from "./ui/tabs";
import {Spotify} from "react-spotify-embed"
import React, { useEffect, useRef } from 'react';
import { Draggable } from 'gsap/Draggable';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import Quote from "./Quote";
import { useGSAP } from '@gsap/react';
import SongWithLyrics from "./MusicLyrics";
import {imgContent,textList} from "./data/data"


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);
const imageUrl ='/impalabg2_hahh5f';
const imageUrl2 ='/impalabg3_z9f4mm';
const imageUrl3 ='/tour-image';




export default function Home() {

  const containerRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);
  const VidDivRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const textQuesRef = useRef<HTMLDivElement | null>(null);
  const textContRef = useRef<HTMLDivElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const ParagraphRef = useRef<HTMLDivElement | null>(null);
  const IPARef = useRef<HTMLDivElement | null>(null);
  const imgGridRef = useRef<HTMLDivElement | null>(null);
  const textChangeRef = useRef(null);
  const intervalRef = useRef<number>(); // Store interval ID
  const [imgLink, setImg] = useState("../imgs/TameImpalaBg.jpg")




  const tabs = [
    {
      title: "Currents",
      value: "Currents",
      content: (
        <div  className="test1 w-[full] overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p>Currents</p>
          <Image
        src="/currents_fidqbz"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-contain h-[80%] xs:h-full  pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
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
        className="object-contain h-[80%] xs:h-full  pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
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
        className="object-contain h-[80%] xs:h-full  pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
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
        className="object-contain h-[80%] xs:h-full  pb-20  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
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
        className="object-contain h-[80%] xs:h-full  pb-20  absolute -bottom-10 inset-x-0 w-[50%] rounded-xl mx-auto"
      />
        </div>
      ),
    },
  ];



  const [currentIndex, setCurrentIndex] = useState(0);

  // const changeText = () => {
  //   gsap.to(textChangeRef.current, {
  //     opacity: 0,
  //     duration: 0.5,
  //     onComplete: () => {
  //       setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
  //       gsap.to(textChangeRef.current, { opacity: 1, duration: 0.5 });
  //     },
  //   });
  // };

  // useEffect(() => {
  //   const interval = setInterval(changeText, 1000); // Every 2 seconds
  //   return () => clearInterval(interval); // Cleanup
  // }, [textList.length]);


  // useEffect(() => {
  //   intervalRef.current = window.setInterval(changeText, 2000); // Every 2 seconds

  //   return () => clearInterval(intervalRef.current); // Cleanup on unmount
  // }, [textList.length]); 

  useGSAP(() => {
    // Animation for the clip-path
    gsap.to(topDivRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        refreshPriority: 1,
      },
      clipPath: "inset(0% 0% 100% 0%)", // Left to right reveal
      ease: "none",
    });

    // Animation for the text movement
gsap.timeline({
  scrollTrigger: {
    trigger: containerRef.current,
    start: "+=50",
    end: "+=900",
    scrub: 0.5,
  }
})
  .to(textRef.current, {
    y: 500, // Move text
    ease: "none",
  })
  .to(textRef.current, {
    opacity: 0, // Start fading out
    ease: "none",
    duration: 0.5, // Adjust duration for fade-out as needed
  }, "+=0.1"); // Adjust the delay before fading out




    gsap.to(VidDivRef.current,{
opacity:100,
      scrollTrigger: {
        trigger: VidDivRef.current,
        start: 'top top', // Start when the top of the container reaches the top of the viewport
        end: `+=1000`, // End 800 pixels after the start point
        scrub: 0.2, // Smoothly animate as the user scrolls
        pin:true


      } ,duration:10  ,   ease: "none",

    });
  
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: '+=800',  // Start animation when the top of the element reaches 90% of the viewport
        end: '+=1000',    // End animation when the top of the element reaches 60% of the viewport
        toggleActions: 'play none none reverse', // Play when scrolling down, reverse when scrolling up
        scrub: 0.3,  // Smooth scrubbing
 // Debugging markers, remove when done
      },
    });

    timeline
    .from(imgGridRef.current, { opacity:100,duration:1}) // Slide in from the right

    .from(textQuesRef.current, { x: 500, opacity: 0, duration: 1 },'-=0.5') // Slide in from the right
    .from(IPARef.current, { x: 500, opacity: 0, duration: 1 }) 
    .from(divRef.current, {    width: '0px', 
      height: '0px',  opacity: 0, duration: 1 }, '-=0.5')
    .from(ParagraphRef.current, { x: 500, opacity: 0, duration: 1 }, '-=0.5');


    
  }, [containerRef] );

   return (
    <div className="  bg-black bg-grid-white/[0.2]   overflow-hidden"  >

      <div className="grain">  </div>
      <section className="h-[100vh] flex relative">

        <div className="flex items-end  ">
         
        <img alt='element'
                src="../imgs/element.png"
                fetchPriority="high"
                decoding="async"
                className="absolute h-full"
               
              />

                 
        <img alt='element'
                src="../imgs/element-2.png"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-4  right-4"
               
              />
                 
        <img alt='element'
                src="../imgs/element-3.png"
                fetchPriority="high"
                decoding="async"
                className="absolute  top-2 right-4"
               
              />
        
        {/* <Spline
        scene="https://prod.spline.design/xxuLYntV0MgDM9DJ/scene.splinecode" 
      /> */}
      <Quote ></Quote>
          <h1 className="text-6xl font-bold z-10 ml-5 pb-16"> Welcome to the  <span className="tame-impala-name">{textList[currentIndex]}</span> <br/> Experience</h1>
          </div>

      </section>



      <div className="wrapper" ref={containerRef} >
        <div id="top-div1" className="top-div" ref={topDivRef}>
        <p  className="text-5xl text-center xs:text-8xl font-bold absolute who-ist bottom-text text-[#E5B0A3]">
                Who is Tame Impala?
              </p>
          <div className="image-grid">
            <div className="row-[34/18] col-[-25/28] xs:row-[12/24] xs:col-[2/-1] image-top">
           
              <img alt='img-gif1-placeholder'
                src="../imgs/impalagif-placeholder.jpg"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover  w-full xs:w-auto"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="row-[19/7] col-[26/1] xs:row-[2/24] xs:col-[18/-2] image-bottom">
              <img alt='img-gif2-placeholder'
                src="../imgs/impalagif2-placeholder.jpg"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover  w-full xs:w-auto"
                style={{ color: 'transparent' }}
              />
            </div>
            <div className="row-[1/10] col-[-25/28]  xs:row-[3/10] xs:col-[2/-1] image-bottom">
              <img alt='img-gif3-placeholder'
                src="../imgs/impalagif3.png"
                fetchPriority="high"
                decoding="async"
                className="h-full object-cover  w-full xs:w-auto"
                style={{ color: 'transparent' }}
              />
            </div>
          </div>
        </div>
        <div id="bottom-div1" className="bottom-div">
            <p ref={textRef} id="textop" className="text-5xl text-center  xs:text-8xl font-bold absolute who-ist top-text text-[#7fff00]">
                  Who is Tame Impala?
                </p>
          <div>
            <div className="image-grid">
              <div className="row-[29/18] col-[26/1] xs:row-[12/24] xs:col-[2/-1] image-top">
       
                <img alt='impala-gif-1'
                  src="../imgs/impalagif.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover w-full xs:w-auto"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[19/7] col-[26/1] xs:row-[2/24] xs:col-[18/-2] image-bottom">
                <img alt='impala-gif-2'
                  src="../imgs/impalagif2.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover  w-full xs:w-auto "
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[1/10] col-[-25/28] xs:row-[3/10] xs:col-[2/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/impalagif3.gif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover  w-full xs:w-auto"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </div>
        </div>
      
      </div>
    <section >
  <div ref={VidDivRef} className="section-psy   video-section relative flex justify-center ">
  <div ref={imgGridRef} className="image-grid absolute z-10 opacity-0">
              <div className="row-[12/24] col-[2/-1] image-top">
       
                <img alt='impala-gif-1'
                  src="../imgs/tp-1.jpg"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[3/11] col-[6/-2] image-bottom">
                <img alt='impala-gif-2'
                  src="../imgs/images.jpg"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[2/11] col-[2/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/tp-3.jpg"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[19/24] col-[20/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/tp-8.png"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="row-[8/18] col-[20/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/tp-6.jpg"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>  
              <div className="row-[15/24] col-[16/-1] image-bottom">
                <img alt='impala-gif-1'
                  src="../imgs/tp-7.jfif"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full object-cover"
                  style={{ color: 'transparent' }}
                />
              </div>  
            </div>



    <div ref={textContRef} className="new-open flex flex-col  absolute z-20">
    <p ref={textQuesRef} className="   urban-head top-text text-[#7fff00]">
             Tame Impala?
    
                </p>
                <div ref={IPARef} className="flex gap-2">
<span className="ipa-text">/teɪm ɪmˈpɑːlə/ 

</span> <span className="ipa-italy">noun</span></div>
                <div ref={divRef}  className="h-[7px] bg-violet-800 w-full">
        
                </div>
                <div ref={ParagraphRef} className=" urban-body  pt-3 text-[#7fff00]">
                  <p>
                A one-man musical journey led by Kevin Parker that feels like a cosmic trip through the 70s, but with a modern twist. Imagine cruising through a kaleidoscope of dreamy guitars, hypnotic synths, and rhythms that make you want to both dance and ponder life's deeper meanings. It's the perfect soundtrack for daydreamers, night thinkers, and anyone who appreciates a good existential groove. Essentially, Tame Impala is what you listen to when you want to get lost in your own head and have a great time doing it.
                </p></div>

    </div>
    <div  className="absolute  inset-0 bg-black opacity-50 z-0"></div> 
    <video  className="bg-video sticky z-0 opacity-70" autoPlay loop muted preload="metadata">
      <source src="https://res.cloudinary.com/dm3ienizb/video/upload/v1745609377/Tmpala-Vid_qowzkt.webm" type="video/mp4" />
    </video>
  </div>
</section>

      

    <section className="next-section" >
    <p   className="text-4xl sm:text-7xl  font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
 Some of his work     </p>
    <div style={{marginTop:0}} className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    <Tabs tabs={tabs} />
  </div>
  </section>
  <section>
  <div data-aos="fade-up">
  <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
His Journey </p>  <div className="p-10 flex items-center justify-center">
    
      <StickyScroll  content={imgContent} />
    
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

 <SongWithLyrics></SongWithLyrics>

<section className="h-[100%]">
  <div className="section-psy-2 video-section relative flex justify-center ">
  
    <div className="absolute z-10 flex flex-col items-center container mx-auto">
    <div className="flex flex-col w-2/3  items-center justify-center p-5 text-center ">
  <h1  className="text-2xl sm:text-4xl  md:text-4xl font-bold  z-10 get-lost  text-[#7fff00]">
  Get Lost in the Psychedelia:</h1>
  <span className=" get-lost-para z-10 text-[10px] sm:text-2xl  md:text-2xl">Tame Impalas Top Hits (personally approved)</span>
  </div>
  <div className="flex flex-col w-2/3   ">
  {/* <Spotify  className="hidden md:block w-100" link="https://open.spotify.com/playlist/57VwfwVQr5mRoUnnnV2qxA?si=65447040945e4651" />
  <Spotify   className="max-w-[170px] max-h-[200px] md:hidden" link="https://open.spotify.com/playlist/57VwfwVQr5mRoUnnnV2qxA?si=65447040945e4651" /> */}

<iframe 
 className="md:block hidden"
  style={{ borderRadius: "12px" }} 
  src="https://open.spotify.com/embed/playlist/57VwfwVQr5mRoUnnnV2qxA?utm_source=generator" 
  width="100%" 
  height="352" 
  frameBorder="0" 
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy"
/>
<iframe 
 className="md:hidden block"
  style={{ borderRadius: "12px" }} 
  src="https://open.spotify.com/embed/playlist/57VwfwVQr5mRoUnnnV2qxA?utm_source=generator" 
  width="100%" 
  height="122" 
  frameBorder="0" 
  allowFullScreen={true}
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
  loading="lazy"
/>
  </div>
  </div>
    <div className="absolute inset-0 bg-black opacity-50 z-0"></div> 
    <video className="bg-video sticky z-0 opacity-70" autoPlay loop muted preload="metadata">
      <source src="https://res.cloudinary.com/dm3ienizb/video/upload/v1723465188/mplabg-2_l9cwxk.mp4" type="video/mp4" />
    </video>
  </div>
</section>
<section className="live-tour ">
  <div className="relative flex justify-center w-[100vw] group max-h-[100vh]">
    <div className="flex justify-center">
    <h1 className="text-2xl md:text-7xl absolute top-6">Experience It Live</h1>
  <img alt='element'
                src="../imgs/headshot.png"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 xl:max-w-screen-md w-[175px] max-h-[620px] md:w-[390px] sm:w-[300px] transition-opacity duration-500 opacity-100 "
               
              />
                <img alt='element'
                 src={imgLink
                  
                 }
                fetchPriority="high"
                decoding="async"
                className="w-[100vw]"
           
               
              />    </div>
              


              <div className="absolute bottom-3 arenas ">
                <div className="flex justify-between gap-[10vw] text-2xl md:text-5xl">
                <h1 onMouseEnter={()=>{ setImg("https://res.cloudinary.com/dm3ienizb/image/upload/v1747306222/Tame_Impala_-_The_Less_I_Know_the_Better_Lollapalooza_Bras_yjau3e.gif")}}>Lollapalooza</h1>
                <h1 onMouseEnter={()=>{ setImg("https://res.cloudinary.com/dm3ienizb/image/upload/v1747306581/TameImpalaTheLessIKnowTheBetters2019Coachella-ezgif.com-cut_hzppti.gif")}}>Coachella</h1>
                <h1 onMouseEnter={()=>{ setImg("https://res.cloudinary.com/dm3ienizb/image/upload/v1747306823/TameImpala-ThelessiKnowthebetterliveAsuncionico-ezgif.com-optimize_u12mz5.gif")}}>Asuncionico</h1>
                </div>
              </div>
     
         </div>
</section>

<section>
<div className="flex justify-center h-8 bg-black loading-text">

  <span className="text-white">Created by aerodeval. Connect with me on sydney223as@gmail.com</span>

</div>
</section>
  </div>

  );
}



