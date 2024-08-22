"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
// aos.tsx or aos.js
export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quad',
      duration: 1000,
    });
  }, [])

  return null
}