'use client';

import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';

export default function LoadingWrapper({ children }: { children: React.ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
  useEffect(() => {
    // Simulate asset loading with progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setLoading(false); // Once progress reaches 100, stop loading
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1; // Increment progress
      });
    }, 40); // Adjust the speed of the progress (30ms interval)

    return () => clearInterval(progressInterval); // Cleanup
  }, []);

  return (
    <>
    {loading ? <LoadingScreen progress={progress} /> : children}
    </>
  );
}
