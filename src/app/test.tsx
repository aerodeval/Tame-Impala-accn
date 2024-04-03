'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Tabs } from "./ui/tabs";
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
import { faL } from "@fortawesome/free-solid-svg-icons";
import { audio } from "@cloudinary/url-gen/qualifiers/source";

  const wordsgen = `Will I be known and loved? 
  Is there one that I trust?
  Starting to sober up
  Has it been long enough?
  Will I be known and loved?
  Little closer, close enough
  I'm a loser, loosen up
  Setting free, must be tough
  Will I be known and loved?
  Is there one that I trust?
  Starting to sober up
  Has it been long enough?
  Will I be so in love?
  Any closer? Close enough
  Shout out to what is done
  R.I.P., here comes the sun
  `;

const words = [
  {
    text: "Did",
  },
  {
    text: "you",
  },
  {
    text: "Know",
  },
  {
    text: "Tame",
    className: "text-purple-500 dark:text-purple-500",

  },
  {
    text: "Impala",
    className: "text-purple-500 dark:text-purple-500",
  },
  {
    text: "is"
  },
  {
    text: "actually"
  },
  {
    text: "one",
    className: "text-purple-500 dark:text-purple-500",

  }, 
  {
    text: "guy?",
    className: "text-purple-500 dark:text-purple-500",

  }, 


];

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
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null); 
  const [isSpinning, setIsSpinning] = useState(false);

  const handleImageClick = () => {
    if (!isSpinning) {
      const newAudio = new Audio('https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3');
      setAudio(newAudio);
      newAudio.play(); // Start playing audio
      setIsSpinning(true);
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
     elementToAdd?.classList.add('makeituse');
 
    });
    
  };



//   const playAudio = () => {
//     const audio = new Audio('https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3');
//     audio.play();
//   };
   return (
  //   bg-black bg-grid-white/[0.2]
    <div className="dark  bg-black bg-grid-white/[0.2] "  >
  <div className="h-[50rem] w-full dark:bg-black bg-white flex flex-col  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
Hi!      </p>
<TypewriterEffectSmooth className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8" words={words} />

<Image


        src="/tameimpala_mvyskc"
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover opacity-40 object-left-top h-[60%] pb-20 md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    </div>
    <p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
 Some of his work     </p>


    <div style={{marginTop:0}} className=" h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
    <Tabs tabs={tabs} />
  </div>
  <div>
  <p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
His Journey </p>  <div className="p-10 flex items-center justify-center inline">
    
      <StickyScroll  content={content} />
    
    </div>
  </div>
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
    <div className="test-zag">
  <div  className=" h-[40rem] relative  flex items-center justify-center">
      <DirectionAwareHover imageUrl={imageUrl3}>
        <p className="font-bold text-xl">In the mountains</p>
        <p className="font-normal text-sm">1679</p>
      </DirectionAwareHover>
    </div>
    </div>
  <div className="flex items-center justify-center bg-black dark:bg-grid-white/[0.2] h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="REAL NAME [LEAKED]"
        revealText="Kevin Parker"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the card to know who is Tame Impala
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
    <div>
    <p className="text-4xl sm:text-7xl flex font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 flex items-center justify-center">
As Kevin said himself</p>

<div className="lyrics-display flex items-center justify-center">
 <TextGenerateEffect  words={wordsgen} />
 </div>

 <div className="hspiral-container  flex items-center justify-center">
<div  className="vinyl-container"    onClick={handleDivClick}>
    <div className="h-[4rem] bg-white packcontainer" >
         </div>
    <div className="vinyl-image">
<Image
        src="/impalavinyl"
        alt="dummy image"
        width="1000"
        height="1000"
        className={`hypnotic-spiral relative flex items-center justify-center ${isSpinning ? 'spin-animation' : ''}`}
        onClick={handleImageClick}
      />
</div>


</div>
</div>

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
  </div>
  );
}
