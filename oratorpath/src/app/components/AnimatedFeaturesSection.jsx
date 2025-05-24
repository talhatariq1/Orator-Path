"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import WaveDecoration from "./WaveDecoration";

// Animation variants for staggered animation
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

// Optimized FloatingCard component
const FloatingCard = ({ icon, title, description, index, isContainerInView }) => {
  const delay = index * 0.2;
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isContainerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay }}
      className="relative bg-[#131419]/80 border border-gray-700/30 rounded-xl p-6 backdrop-blur-sm group hover:border-blue-500/30 transition-all duration-300"
    >
      {/* Top decorative accent */}
      <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/80 to-purple-500/0 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="flex items-start space-x-4">
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/20">
          {icon}
        </div>

        <div>
          <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Optimized background glow without blur */}
      <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
};

// Optimized AnimatedImage component
const AnimatedImage = ({ src, alt, isInView, unoptimized }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative aspect-square max-w-md mx-auto"
    >
      <div className="relative w-full h-full">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain"
          unoptimized={unoptimized}
        />
      </div>

      {/* Optimized blob background without blur or pulse */}
      <div
        className="absolute -z-10 inset-0 -m-10 opacity-20 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(76,109,255,0.2) 0%, rgba(136,58,234,0.1) 50%, transparent 70%)' }}
      ></div>
    </motion.div>
  );
};

export default function AnimatedFeaturesSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yLeftColumn = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const yRightColumn = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const features = [
    {
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm-8 0c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm8 8c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>,
      title: "Real-Time Feedback",
      description: "Get instant insights on your speech pace, tone, and clarity as you practice."
    },
    {
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>,
      title: "Analytics Dashboard",
      description: "Track your progress with detailed metrics and improvement trends."
    },
    {
      icon: <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5v2h4v-2zm6 0h-4v2h4v-2zm6-6h-4v2h4V6zm-10 4H7v2h4v-2zm6 0h-4v2h4v-2zm-6 4H7v2h4v-2z"/></svg>,
      title: "Personalized Coaching",
      description: "Receive tailored tips and exercises based on your unique speaking style."
    },
    { icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>, title: "Community Support", description: "Connect with other speakers, share experiences, and learn together in a supportive environment." }
  ];

  // Single useInView for the entire features container
  const cardsContainerRef = useRef(null);
  const isCardsContainerInView = useInView(cardsContainerRef, { once: true, margin: "-100px" });

  // Single useInView for the image and stats
  const imageContainerRef = useRef(null);
  const isImageContainerInView = useInView(imageContainerRef, { once: true, margin: "-150px" });

  // Title animation
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section id="features" ref={sectionRef} className="relative pt-10 min-h-screen py-20 overflow-hidden">
      {/* Optional Wave Decorations */}
      <WaveDecoration position="top-right" color="rgba(76, 109, 255, 0.1)" size="large" />
      <WaveDecoration position="bottom-left" color="rgba(136, 58, 234, 0.1)" size="large" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section title with reveal animation */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Advanced Features</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Our cutting-edge technology helps you master the art of public speaking with personalized coaching and real-time feedback.
          </p>
        </motion.div>

        {/* Main content with parallax scroll effect */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Left column - Features cards */}
          <motion.div
            style={{ y: yLeftColumn }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div ref={cardsContainerRef} className="space-y-6">
              {features.map((feature, index) => (
                <FloatingCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                  isContainerInView={isCardsContainerInView}
                />
              ))}
            </div>
          </motion.div>

          {/* Right column - Image and stats */}
          <motion.div
            style={{ y: yRightColumn }}
            className="w-full lg:w-1/2"
            ref={imageContainerRef}
          >
            
            <svg
              width="300"
              height="300"
              viewBox="0 0 300 300"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="title desc"
              className="relative aspect-square max-w-md mx-auto object-contain"
            >
              <title id="title">AI Speech Coach Animated Logo</title>
              <desc id="desc">
                Circular badge with a radial blue-to-gold gradient background, a white microphone icon,
                animated pulsing speech waveform above it, subtle microphone bobbing, and &ldquo;AI SPEECH COACH&rdquo; label.
              </desc>

              <defs>
                {/* Background gradient */}
                <radialGradient id="bgGrad" cx="50%" cy="50%" r="%">
                  <stop offset="0%" stop-color="#FFCB05"/>
                  <stop offset="100%" stop-color="#0057B7"/>
                </radialGradient>

                {/* Common microphone outline style - using dangerouslySetInnerHTML for CSS */}
                <style type="text/css" dangerouslySetInnerHTML={{__html: `
                  /* Mic bobbing */
                  @keyframes micBob {
                    0%, 100% { transform: translateY(0); }
                    50%      { transform: translateY(-3px); }
                  }
                  /* Waveform pulsing */
                  @keyframes wavePulse {
                    0%, 100% { transform: scaleY(1); }
                    50%      { transform: scaleY(1.2); }
                  }
                  /* Apply animations */
                  .mic-group {
                    transform-origin: 150px 160px;
                    animation: micBob 3s ease-in-out infinite;
                  }
                  .wave-form {
                    transform-origin: 150px 85px;
                    animation: wavePulse 2s ease-in-out infinite;
                  }
                `}} />
              </defs>

              {/* Background circle */}
              <circle cx="150" cy="150" r="150" fill="url(#bgGrad)" />

              {/* Animated waveform group */}
              <g id="waveform" class="wave-form" fill="none" stroke-width="4" stroke-linecap="round">
                {/* Top arc */}
                <path d="M110,80 C140,50 160,50 190,80" stroke="#C0D8FF"/>
                <circle cx="110" cy="80" r="6" fill="#C0D8FF"/>
                <circle cx="190" cy="80" r="6" fill="#C0D8FF"/>
                {/* Middle arc */}
                <path d="M115,95 C140,70 160,70 185,95" stroke="#A0CFFF"/>
                <circle cx="115" cy="95" r="5" fill="#A0CFFF"/>
                <circle cx="185" cy="95" r="5" fill="#A0CFFF"/>
                {/* Bottom arc */}
                <path d="M120,110 C140,90 160,90 180,110" stroke="#80BFFF"/>
                <circle cx="120" cy="110" r="4" fill="#80BFFF"/>
                <circle cx="180" cy="110" r="4" fill="#80BFFF"/>
              </g>

              {/* Microphone and sound‑wave accents */}
              <g id="mic" class="mic-group" fill="none" stroke="#FFFFFF" stroke-width="6" stroke-linecap="round">
                {/* Mic body */}
                <rect x="140" y="120" width="20" height="60" rx="10" ry="10" fill="none"/>
                {/* Mic stand arc */}
                <path d="M130,160 Q150,200 170,160" />
                {/* Stand base */}
                <line x1="150" y1="200" x2="150" y2="220" />
                <line x1="135" y1="220" x2="165" y2="220" />

                {/* Left & right sound‑wave flicks */}
                <path d="M130,150 C125,145 125,155 130,150" stroke-width="4" stroke="#A0D6FF"/>
                <path d="M170,150 C175,145 175,155 170,150" stroke-width="4" stroke="#FFE680"/>
              </g>
            </svg>

            {/* Stats cards with reveal animation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="grid grid-cols-2 gap-4 mt-8"
            >
              <motion.div variants={fadeIn} className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-gray-400 text-sm mb-1">Users Improved</h4>
                <p className="text-3xl font-bold text-white">90%</p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-gray-400 text-sm mb-1">Confidence Boost</h4>
                <p className="text-3xl font-bold text-white">85%</p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-gray-400 text-sm mb-1">Speech Quality</h4>
                <p className="text-3xl font-bold text-white">+75%</p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-4 backdrop-blur-sm">
                <h4 className="text-gray-400 text-sm mb-1">Active Users</h4>
                <p className="text-3xl font-bold text-white">10k+</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Animated highlight lines (subtle grid enhancements) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
        ></motion.div>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
          className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        ></motion.div>
      </div>
    </section>
  );
}