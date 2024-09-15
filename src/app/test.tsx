/* eslint-disable @next/next/no-img-element */
'use client';
import Image from "next/image";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Tabs } from "./ui/tabs";
import {Spotify} from "react-spotify-embed"
import React, { useEffect, useRef } from 'react';
import Marquee from "react-fast-marquee";
import { Draggable } from 'gsap/Draggable';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DirectionAwareHover } from "./ui/direction-aware-hover";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { useState } from "react";
import { WavyBackground } from "./ui/wavy-background";
import Quote from "./Quote";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(Draggable);


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
  const textList = ["Tame Impala", "टेम इम्पाला", "Таме Импала", "길들이-임팔라","ترويض-إمبالا","テーム・インパラ","ตาเม อิมพาลา"];



  const [currentIndex, setCurrentIndex] = useState(0);



  useEffect(() => {
    const changeText = () => {
      gsap.to(textChangeRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % textList.length);
          gsap.to(textChangeRef.current, { opacity: 1, duration: 0.5 });
        },
      });
    };

    const interval = setInterval(changeText, 1000); // Every 2 seconds
    return () => clearInterval(interval); // Cleanup
  }, [textList.length]);

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
        end: `+=3000`, // End 800 pixels after the start point
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
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); 
  const [isSpinning, setIsSpinning] = useState(false);
  const [interPlan,setPlan]=useState(false)
  const delayInMillis = 4000; // 2 seconds

  const [value, setValue] = useState('10:00');

  const onChange = (timeValue: React.SetStateAction<string>) => {
     setValue(timeValue);
  }
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
    <div className="dark  bg-black bg-grid-white/[0.2]   overflow-hidden"  >

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
        <p  className="text-2xl sm:text-8xl font-bold absolute who-ist bottom-text text-[#E5B0A3]">
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
            <p ref={textRef} id="textop" className="text-2xl sm:text-8xl font-bold absolute who-ist top-text text-[#7fff00]">
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
    <p ref={textQuesRef} className="  urban-head top-text text-[#7fff00]">
             Tame Impala?
    
                </p>
                <div ref={IPARef} className="flex gap-2">
<span className="ipa-text">/teɪm ɪmˈpɑːlə/ 

</span> <span className="ipa-italy">noun</span></div>
                <div ref={divRef}  className="h-[7px] bg-violet-800 w-full">
        
                </div>
                <div ref={ParagraphRef} className=" urban-body  pt-3 text-[#7fff00]">
                A one-man musical journey led by Kevin Parker that feels like a cosmic trip through the 70s, but with a modern twist. Imagine cruising through a kaleidoscope of dreamy guitars, hypnotic synths, and rhythms that make you want to both dance and ponder life’s deeper meanings. It’s the perfect soundtrack for daydreamers, night thinkers, and anyone who appreciates a good existential groove. Essentially, Tame Impala is what you listen to when you want to get lost in your own head and have a great time doing it.
                </div>

    </div>
  {/* <div className="h-[83px] w-full
 absolute top-0 z-40 name-bg flex justify-center">
  <Marquee gradient gradientColor="#1d1c1d" gradientWidth={200} className="name-translation">
<p className=" pr-[5rem]">Tame Impala</p>
<p className=" pr-[5rem]" >टेम इम्पाला</p>
<p className=" pr-[5rem]">Таме Импала</p>
<p className=" pr-[5rem]">길들이-임팔라</p>
<p className=" pr-[5rem]">ترويض-إمبالا</p>
<p className=" pr-[5rem]">テーム・インパラ</p>
  </Marquee>
    </div> */}
    <div  className="absolute  inset-0 bg-black opacity-50 z-0"></div> 
    <video  className="bg-video sticky z-0 opacity-70" autoPlay loop muted preload="metadata">
      <source src="https://res.cloudinary.com/dm3ienizb/video/upload/v1722423165/tmpala-vid.mp4" type="video/mp4" />
    </video>
    {/* <div className="h-[83px] w-full
     bg-black absolute bottom-0 z-40 name-bg flex justify-center">
        <Marquee direction="right" gradient gradientColor="#1d1c1d" gradientWidth={200} className="name-translation">
<p className="pr-[5rem]">טיים אימפלה</p> 
<p className="pr-[5rem]">ترويض-إمبالا</p>
<p className="pr-[5rem]">Тейм Імпала</p> 
<p className="pr-[5rem]">Teme Impala</p> 
<p className="pr-[5rem]">ตาเม อิมพาลา</p> 
<p className="pr-[5rem]">ಟೇಮ್ ಇಂಪಾಲಾ</p>
</Marquee>
    </div> */}
  </div>
</section>

      
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
<section className="h-[100%]">
  <div className="section-psy-2 video-section relative flex justify-center ">
  
    <div className="absolute z-10 flex flex-col items-center container mx-auto">
    <div className="flex flex-col w-2/3  items-center justify-center p-5 text-center ">
  <h1  className="text-2xl sm:text-3xl  md:text-7xl font-bold  z-10 get-lost  text-[#7fff00]">
  Get Lost in the Psychedelia:</h1>
  <span className=" get-lost-para z-10 text-[10px] sm:text-1xl  md:text-3xl">Tame Impalas Top Hits (personally approved)</span>
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
</section>
<section>
  <div className="relative flex justify-center">
  <img alt='element'
                src="../imgs/headshot.png"
                fetchPriority="high"
                decoding="async"
                className="absolute bottom-0 xl:max-w-screen-md w-[250px] max-h-[620px] md:w-[600px] sm:w-[300px] xs"
               
              />
                <img alt='element'
                src="../imgs/TameImpalaBg.jpg"
                fetchPriority="high"
                decoding="async"
           
               
              />
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



