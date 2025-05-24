"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import GradientButton from "./GradientButton";
import SkillsOrbit from "./SkillsOrbit";
import MorphingText from "./MorphingText";
import TextBackgroundEffect from "./TextBackgroundEffect";

export default function HeroSection() {
  const heroRef = useRef(null);

  // Ref for the hero image
  const heroImageRef = useRef(null);

  // Ref for the SkillsOrbit container
  const skillsOrbitRef = useRef(null);

  // Effect for mouse parallax
  useEffect(() => {
    if (!heroRef.current) return;

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();

      const x = clientX - left;
      const y = clientY - top;

      const xPercent = x / width;
      const yPercent = y / height;

      const xOffset = (xPercent - 0.5) * 30; // 30px max movement
      const yOffset = (yPercent - 0.5) * 30;

      const elements = heroRef.current.querySelectorAll('.parallax-element');
      elements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-speed')) || 1;
        el.style.transform = `translate(${xOffset * speed}px, ${yOffset * speed}px)`;
      });
    };

    heroRef.current.addEventListener('mousemove', handleMouseMove);

    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  // Effect for ensuring hero image is bright on initial load
  useEffect(() => {
    // Apply brightness immediately
    if (heroImageRef.current) {
      heroImageRef.current.style.opacity = '1';
      heroImageRef.current.style.filter = 'contrast(1.05) brightness(1.15)';
    }
  }, []);

  // Effect to measure SkillsOrbit height
  useEffect(() => {
    if (skillsOrbitRef.current) {
      console.log('SkillsOrbit rendered height:', skillsOrbitRef.current.offsetHeight);
    }
  }, [skillsOrbitRef]);

  return (
    <section ref={heroRef} className="relative pt-32 pb-32 overflow-hidden px-4 flex items-center justify-center min-h-[85vh]">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <motion.div
            // Subtle fade-up effect
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 text-center md:text-left md:pr-8"
          >


            <h1 className="text-4xl text-center md:text-5xl font-extrabold text-white leading-tight md:leading-tight mb-4">
              Elevate Your
              <div className="mt-2 md:mt-3 relative min-h-[60px] flex items-center justify-center">
                <TextBackgroundEffect />
                <MorphingText words={["Communication", "Presentation", "Conversation"]} interval={3000} />
                {/* Subtle underline effect */}
                <div className="absolute bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-70 rounded-full transform scale-x-75"></div>
              </div>
            </h1>
            <p className="w-90 text-lg md:text-xl text-center mb-8 leading-tight md:leading-loose sm:leading-loose">
              Your AI communication coach. Master speaking with{" "}
              <br /> 
              <span className="relative inline-block">
                <span className="relative px-4 py-1">
                  {/* Enhanced glow behind text with dual-layer effect */}
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 via-yellow-500/40 to-yellow-400/30 opacity-20 blur-lg rounded-md"
                    animate={{
                      scale: [1, 1.05, 1],
                      opacity: [0.2, 0.3, 0.2],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Optimized sparkle animations with staggered timing */}
                  <motion.span 
                    className="absolute -left-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg"
                    animate={{
                      scale: [0.8, 1.2, 0.8],
                      opacity: [0.5, 1, 0.5],
                      rotate: [0, 180, 360],
                      y: [-2, 2, -2]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >✨</motion.span>
                  
                  <motion.span 
                    className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-400 text-lg"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.6, 1, 0.6],
                      rotate: [360, 180, 0],
                      y: [2, -2, 2]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >✨</motion.span>
                  
                  {/* Floating stars with improved movement */}
                  <motion.span 
                    className="absolute -top-2 left-1/3 text-yellow-400 text-xs"
                    animate={{
                      scale: [0.8, 1.1, 0.8],
                      opacity: [0.4, 0.8, 0.4],
                      x: [-3, 3, -3],
                      y: [-1, 1, -1]
                    }}
                    transition={{
                      duration: 2.8,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >✨</motion.span>
                  
                  <motion.span 
                    className="absolute -bottom-2 right-1/3 text-yellow-400 text-xs"
                    animate={{
                      scale: [0.9, 1.2, 0.9],
                      opacity: [0.4, 0.9, 0.4],
                      x: [2, -2, 2],
                      y: [1, -1, 1]
                    }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.75
                    }}
                  >✨</motion.span>
                  
                  {/* Enhanced text with dynamic glow effect */}
                  <motion.span 
                    className="relative z-10 font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100"
                    animate={{
                      textShadow: [
                        "0 0 15px rgba(255, 223, 0, 0.3), 0 0 5px rgba(255, 223, 0, 0.2)",
                        "0 0 20px rgba(255, 223, 0, 0.4), 0 0 8px rgba(255, 223, 0, 0.3)",
                        "0 0 15px rgba(255, 223, 0, 0.3), 0 0 5px rgba(255, 223, 0, 0.2)"
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }}
                  >
                    personalized feedback
                  </motion.span>
                </span>
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/sign-up">
                <GradientButton text="Get started now" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative w-full md:w-2/5 mt-12 md:mt-0 parallax-element flex items-center justify-center md:justify-end"
            data-speed="0.6"
          >
            {/* Container for SkillsOrbit and Hero Image */}
            <div className="relative rounded-lg overflow-hidden bg-transparent w-full max-w-lg mx-auto">
              {/* SkillsOrbit wrapper */}
              <div className="absolute inset-0 z-20 mix-blend-lighten flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 1, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, delay: 0.5 }}
                  className="w-full h-full"
                >
                  <SkillsOrbit />
                </motion.div>
              </div>
              {/* Image container */}
              <div ref={heroImageRef} className="flex items-center justify-center">
                  <Image
                    src="/images/hero3d.webp"
                    alt="3D OratorPath illustration"
                    width={450}
                    height={450}
                    className="rounded-lg relative z-10 hero-image-transparent"
                    priority
                    style={{ objectFit: 'contain' }}
                    onLoadingComplete={(img) => {
                      // Ensure brightness is applied as soon as the image loads
                      img.style.opacity = '1';
                      img.style.filter = 'contrast(1) brightness(1)';
                    }}
                  />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}