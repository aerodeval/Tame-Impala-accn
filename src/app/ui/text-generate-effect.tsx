"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  isClicked,
}: {
  words: string;
  className?: string;
  isClicked?: boolean;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
console.log(isClicked)
    if(isClicked){ const timeoutId = setTimeout(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 8,
        delay: stagger(0.2),
      }
    );
  
  }
  , 18000); // 20 seconds delay

  // Cleanup function to clear the timeout if the component unmounts
  return () => clearTimeout(timeoutId);    }
}, [isClicked,scope.current]);

  const renderWords = () => {
    return (


      
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={idx}
              className={` ${idx % 2  === 0 ? 'text-white-500' : 'text-green-500'} opacity-0` }
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div >
        <div className=" dark:text-white text-black text-2xl sm:text-3xl leading-snug tracking-wide " style={{ whiteSpace: 'pre-line' }}>
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
