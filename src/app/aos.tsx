"use client"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export const AOSInit = () => {
    useEffect(() => {
        AOS.init({
            // Customize AOS options here (e.g., duration, delay, etc.)
            duration: 1000, // Example duration
            delay: 50, // Example delay
        });
    }, []);

    return null;
};