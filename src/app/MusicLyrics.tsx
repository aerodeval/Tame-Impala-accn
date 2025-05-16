import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { WavyBackground } from "./ui/wavy-background";

// Types
interface LyricLine {
  time: number;
  text: string;
}

// Constants
const LYRICS = `
[00:16.00] Ever since I was a small boy
[00:21.50] No one else compared to you, no way
[00:28.00] I always thought heroes stayed close
[00:33.00] Whenever troubled times arose
[00:38.00] I didn't know
[00:42.50] Ain't always how it goes
[00:47.00] Every single word you told me
[00:52.50] I believed without a question, always
[00:58.00] To save all of us, you told us both to trust
[01:04.50] But now I know you only saved yourself
[01:10.50] Did you think I'd never know?
[01:15.50] Never wise up as I grow?
`;

const AUDIO_SRC = "https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3";

// Helper functions
const parseLyrics = (lrcString: string): LyricLine[] => {
  return lrcString
    .split("\n")
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const match = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
      if (match) {
        const minutes = parseInt(match[1], 10);
        const seconds = parseFloat(match[2]);
        const time = minutes * 60 + seconds;
        const text = match[3].trim();
        return { time, text };
      }
      return null;
    })
    .filter((line): line is LyricLine => line !== null);
};

// Components
const VinylPlayer: React.FC<{
  isSpinning: boolean;
  onClick: () => void;
}> = ({ isSpinning, onClick }) => (
  <div
    className="hspiral-container relative flex items-center justify-center gap-[80px]"
    onClick={onClick}
  >
    <WavyBackground className="bg-opac max-w-4xl mx-auto " />
    <div className="vinyl-container">
      <Image
        src="/impalavinyl"
        alt="Tame Impala vinyl"
        width="1000"
        height="1000"
        className={`hypnotic-spiral relative flex items-center justify-center ${
          isSpinning ? "spin-animation" : ""
        }`}
      />
    </div>
  </div>
);

const LyricsDisplay: React.FC<{
  currentLine: string;
  triggerAnimation: boolean;
}> = ({ currentLine, triggerAnimation }) => (
  <div className="h-full flex justify-center flex-col relative w-full">
    <p
      className={`text-2xl sm:text-5xl flex flex-col font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-3 items-center text-center justify-center ${
        triggerAnimation ? "what-he-said" : "what-was-said"
      }`}
    >
      As Kevin said himself{" "}
  
    </p>
    <div className="lyrics-display flex items-center justify-center ">
      <div
        style={{
          marginTop: "20px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        <p>{currentLine ||     <span className="text-2xl font-light text-[#7fff00]">
        Click on the vinyl
      </span>}</p>
      </div>
    </div>
  </div>
);

const SongWithLyrics: React.FC = () => {
  const [lyrics, setLyrics] = useState<LyricLine[]>([]);
  const [currentLine, setCurrentLine] = useState<string>("");
  const [isSpinning, setIsSpinning] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const parsedLyrics = parseLyrics(LYRICS);
    setLyrics(parsedLyrics);
  }, []);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    const currentTime = audioRef.current.currentTime;
    const currentLyric = lyrics.findLast((line) => currentTime >= line.time);
    if (currentLyric) {
      setCurrentLine(currentLyric.text);
    }
  };

  const handleDivClick = () => {
    if (!isSpinning) {
      setIsSpinning(true);
      setTriggerAnimation(true);
      if (audioRef.current) {
        audioRef.current.play();
      }
      const element = document.querySelector(".vinyl-container");
      element?.classList.add("vinylcontainer");
      element?.addEventListener("animationend", () => {
        const waveyElement = document.querySelector(".wavey");
        waveyElement?.classList.add("bg-opac");
      });
    } else {
      setIsSpinning(false);
      setTriggerAnimation(false);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  };

  return (
    <section className="flex justify-center">
      <div className="lyrical-cont flex md:flex-row w-full justify-center items-center mb-6 gap-[80px]">
        <div className="w-[300px]
        ">    <audio
          ref={audioRef}
          src={AUDIO_SRC}
          onTimeUpdate={handleTimeUpdate}
        />
        <VinylPlayer isSpinning={isSpinning} onClick={handleDivClick} />
        </div>
        <div>
        <LyricsDisplay currentLine={currentLine} triggerAnimation={triggerAnimation} />
        </div>
    
      </div>
    </section>
  );
};

export default SongWithLyrics;
