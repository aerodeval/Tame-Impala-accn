import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { WavyBackground } from "./ui/wavy-background";

// Define the type for each lyric line
interface LyricLine {
  time: number; // Time in seconds
  text: string; // Lyric text
}

const SongWithLyrics: React.FC = () => {
  const [lyrics, setLyrics] = useState<LyricLine[]>([]); // Array to store parsed lyrics
  const [currentLine, setCurrentLine] = useState<string>(""); // Current active lyric line
  const [isSpinning, setIsSpinning] = useState(false);
  const [triggerAnimation, setTriggerAnimation] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference for the audio element

  useEffect(() => {
    // Parse LRC string (raw lyrics with timestamps)
    const lrcString = `
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
[00:23.50] No one else compared to you, no way  
[00:30.00] I always thought heroes stayed close  
[00:35.00] Whenever troubled times arose  
[00:40.00] I didn't know  
[00:44.50] Ain't always how it goes  
[00:49.00] Every single word you told me  
[00:54.50] I believed without a question, always  
[01:00.00] To save all of us, you told us both to trust  
[01:06.50] But now I know you only saved yourself  
[01:12.50] Did you think I'd never know?  
[01:17.50] Never wise up as I grow?  

    `;

    const lines: LyricLine[] = lrcString
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

    setLyrics(lines);
  }, []);

  // Sync lyrics with audio playback
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

      // Play audio
      if (audioRef.current) {
        audioRef.current.play();
      }

      // Add animation class
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
        audioRef.current.currentTime = 0; // Reset playback
      }
    }
  };

  return (
    <section className="flex justify-center">
      <div className="lyrical-cont flex flex-col mb-6">
        <div>
          <div
            className="hspiral-container relative flex items-center justify-center"
            onClick={handleDivClick}
          >
            <WavyBackground className="bg-opac max-w-4xl mx-auto pb-40" />
        {/* <div className="h-[4rem] bg-white packcontainer"> */}
            <div className="vinyl-container">
              <Image
                src="/impalavinyl"
                alt="dummy image"
                width="1000"
                height="1000"
                className={`hypnotic-spiral relative flex items-center justify-center ${
                  isSpinning ? "spin-animation" : ""
                }`}
              />
            </div>
            {/* </div> */}
          </div>
        </div>

        {/* Lyrics and Audio Section */}
        <div className="h-full flex justify-center flex-col">
          <p
            className={`text-2xl sm:text-5xl flex flex-col font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 pb-3 items-center text-center justify-center ${
              triggerAnimation ? "what-he-said" : "what-was-said"
            }`}
          >
            As Kevin said himself{" "}
            <span className="text-2xl font-light text-[#7fff00]">
              Click on the vinyl
            </span>
          </p>

          {/* Audio Player */}
          <div className="lyrics-display flex items-center justify-center pl-10">
            <audio
              ref={audioRef}
              src="https://res.cloudinary.com/dm3ienizb/video/upload/v1712037415/pforgive.mp3"
              onTimeUpdate={handleTimeUpdate}
            />

            {/* Display Lyrics */}
            <div
              style={{
                marginTop: "20px",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              <p>{currentLine || "..."}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SongWithLyrics;
