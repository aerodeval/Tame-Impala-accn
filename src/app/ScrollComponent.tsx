/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef, useState } from 'react';

export default function ScrollComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const topDivRef = useRef<HTMLDivElement | null>(null);
  const [revealComplete, setRevealComplete] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!containerRef.current || !topDivRef.current) return;

  

      const deltaY = event.deltaY;
      const containerHeight = containerRef.current.clientHeight;
      const windowHeight = window.innerHeight;

      if (!revealComplete) {
        // Stage 1: Reveal effect
        const newScrollPosition = scrollPosition + deltaY;
        const revealRatio = Math.min(newScrollPosition / windowHeight, 1);
        const revealAmount = revealRatio * 100;

        topDivRef.current.style.clipPath = `inset(0 0 ${revealAmount}% 0)`;
        if (revealAmount === 100) {
          containerRef.current.style.position = 'relative';
        } else {
          containerRef.current.style.position = 'fixed';
          containerRef.current.style.top = '0';
        }

        if (revealAmount >= 100) {
          setRevealComplete(true);
        }

        setScrollPosition(newScrollPosition);
      } else {
        // Stage 2: Translate effect
        const maxTranslateY = containerHeight - windowHeight;
        let newTranslateY = scrollPosition - windowHeight + deltaY;

        newTranslateY = Math.max(-maxTranslateY, Math.min(0, newTranslateY));
        setScrollPosition(newTranslateY);
        containerRef.current.style.transform = `translate3d(0, ${newTranslateY}px, 0)`;
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollPosition, revealComplete]);

  return (
    <section  className="special">
      <div className="wrapper" ref={containerRef} style={{ transform: `translate3d(0, 0, 0)` }}>
        <div id="bottom-div1" className="bottom-div">
            <p className="text-2xl sm:text-8xl font-bold absolute who-ist top-text text-[#7fff00]">
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
      </div>
    </section>
  );
}
