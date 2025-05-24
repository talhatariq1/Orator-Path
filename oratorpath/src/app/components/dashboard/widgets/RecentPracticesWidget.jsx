"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation, useMotionValue } from "framer-motion";
import Link from "next/link";
import { widgetThemes } from "../../../utils/colorPalette";

const RecentPracticesWidget = ({ practices, title = "Recent Practices", theme = "purple" }) => {
  const [expandedPractice, setExpandedPractice] = useState(null);
  const [hoveredPractice, setHoveredPractice] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const themeStyles = widgetThemes[theme] || widgetThemes.purple;
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Track mouse position for 3D card effect
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 15,
        delay: 0.08 * i,
      },
    }),
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
  };

  const scoreGlowVariants = {
    initial: { opacity: 0, scale: 0 },
    animate: (i) => ({
      opacity: [0.3, 0.4, 0.3], // Reduced opacity values
      scale: [1, 1.05, 1], // Reduced scale effect
      transition: {
        times: [0, 0.5, 1],
        duration: 2.5,
        repeat: Infinity,
        repeatType: "mirror",
        delay: 0.2 * i
      }
    })
  };

  const playButtonVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.15 + 0.08 * i,
      },
    }),
    hover: {
      scale: 1.1,
      boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
      },
    },
    tap: {
      scale: 0.9,
    },
  };

  // Helper function to get color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return "from-green-400 to-green-600";
    if (score >= 80) return "from-blue-400 to-blue-600";
    if (score >= 70) return "from-purple-400 to-purple-600";
    if (score >= 60) return "from-yellow-400 to-yellow-600";
    return "from-red-400 to-red-600";
  };

  const getScoreTextColor = (score) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-blue-400";
    if (score >= 70) return "text-purple-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  // Generate unique wave patterns
  const generateWavePattern = (seed) => {
    const points = [];
    for (let x = 0; x <= 100; x += 5) {
      const y = Math.sin((x/100) * Math.PI * seed) * 10 + 50;
      points.push(`${x},${y}`);
    }
    return `M0,60 ${points.join(' ')} 100,60 V100 H0 Z`;
  };

  // Play button with pulse effect
  const PlayButton = ({ index, waveColor, isHovered }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const controls = useAnimation();
    const waveControls = useAnimation();

    const handlePlayClick = (e) => {
      e.stopPropagation();
      setIsPlaying(!isPlaying);

      if (!isPlaying) {
        controls.start({
          scale: [1, 1.2, 1],
          transition: { duration: 0.3 }
        });
        waveControls.start({
          opacity: [0, 0.7, 0],
          scale: [1, 1.5, 1],
          transition: { duration: 1, repeat: 3 }
        });
      }
    };

    return (
      <motion.div
        className="relative"
        initial="initial"
        animate={isHovered ? "animate" : "initial"} // Only animate when this specific card is hovered
        whileHover={isHovered ? "hover" : "initial"}
        whileTap={isHovered ? "tap" : "initial"}
        custom={index}
        variants={playButtonVariants}
      >
        {/* Pulse waves - Only show when playing */}
        <AnimatePresence>
          {isPlaying && (
            <>
              <motion.div
                className={`absolute -inset-1 rounded-full ${waveColor} blur-sm opacity-30`}
                animate={waveControls}
                exit={{ opacity: 0, scale: 2 }}
              />
              <motion.div
                className={`absolute -inset-2 rounded-full ${waveColor} blur-md opacity-20`}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0, 0.3, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: 0.2
                }}
              />
            </>
          )}
        </AnimatePresence>
        
        {/* Sound wave visualization - Only show when playing */}
        {isPlaying && (
          <motion.div className="absolute -right-8 top-0 h-full w-16 flex items-center">
            {[1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className={`h-${3 + i} w-0.5 mx-0.5 rounded-full ${waveColor}`}
                animate={{
                  height: [12 + i*2, 4 + Math.random()*5, 12 + i*2],
                }}
                transition={{
                  duration: 0.4 + Math.random()*0.3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </motion.div>
        )}
        
        <motion.button
          className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 text-white shadow-lg"
          onClick={handlePlayClick}
          animate={controls}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <rect x="6" y="5" width="3" height="10" rx="1" />
              <rect x="11" y="5" width="3" height="10" rx="1" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          )}
        </motion.button>
      </motion.div>
    );
  };

  // Score indicator with animated fill
  const ScoreIndicator = ({ score, index, isHovered }) => {
    const scoreTextColor = getScoreTextColor(score);
    const circumference = 2 * Math.PI * 18; // 2πr where r=18
    const strokeDashoffset = circumference - (score / 100) * circumference;

    // Get appropriate gradient colors based on score
    const getGradientColors = (score) => {
      if (score >= 90) return { start: "#10B981", end: "#059669" }; // green
      if (score >= 80) return { start: "#3B82F6", end: "#2563EB" }; // blue
      if (score >= 70) return { start: "#8B5CF6", end: "#7C3AED" }; // purple
      if (score >= 60) return { start: "#F59E0B", end: "#D97706" }; // yellow
      return { start: "#EF4444", end: "#DC2626" }; // red
    };

    const gradientColors = getGradientColors(score);
    const glowColor = getScoreTextColor(score).replace('text-', 'bg-');

    return (
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: isHovered ? 1.05 : 1, // Reduced scale effect on hover
          transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 20, 
            delay: 0.2 + 0.08 * index 
          }
        }}
      >
        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-full ${glowColor} blur-md`}
          variants={scoreGlowVariants}
          initial="initial"
          animate={isHovered ? "animate" : "initial"} // Only animate when this specific card is hovered
          custom={index}
          style={{ opacity: 0.12 }} // Reduced base opacity
        />

        <svg width="50" height="50" viewBox="0 0 50 50" className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="25"
            cy="25"
            r="18"
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="4"
          />

          {/* Score circle */}
          <motion.circle
            cx="25"
            cy="25"
            r="18"
            fill="transparent"
            stroke={`url(#scoreGradient-${index})`}
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay: 0.3 + 0.08 * index, ease: "easeOut" }}
          />

          {/* Define gradient for the score circle */}
          <defs>
            <linearGradient id={`scoreGradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor={gradientColors.start} />
              <stop offset="100%" stopColor={gradientColors.end} />
            </linearGradient>
          </defs>
        </svg>

        {/* Score text */}
        <motion.div
          className={`absolute inset-0 flex items-center justify-center ${scoreTextColor} font-bold text-sm`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 + 0.08 * index }}
        >
          {score}%
        </motion.div>
      </motion.div>
    );
  };

  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5 overflow-hidden">
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-lg font-semibold text-gray-200 flex items-center">
          <motion.div 
            className="flex items-center justify-center w-6 h-6 rounded-md bg-purple-500/20 mr-2"
            initial={{ opacity: 0, rotate: -20 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-purple-400">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" />
            </svg>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.span>
          <motion.div
            className="ml-2 px-1.5 py-0.5 rounded text-xs font-normal bg-purple-500/20 text-purple-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {practices.length}
          </motion.div>
        </h3>
        
        <Link 
          href="/dashboard/practices"
          className="flex items-center text-sm text-purple-400 hover:text-purple-300 transition-colors group"
        >
          <motion.span
            className="mr-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            View All
          </motion.span>
          <motion.svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            initial={{ opacity: 0, x: -5 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </motion.svg>
        </Link>
      </div>

      <motion.div
        ref={containerRef}
        className="space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        onMouseMove={handleMouseMove}
      >
        {practices.map((practice, index) => {
          const isHovered = hoveredPractice === practice.id;
          const scoreColor = getScoreTextColor(practice.score).replace('text-', 'bg-');
          const scoreColorClass = scoreColor.replace('bg-', '');
          const wavePattern = generateWavePattern(practice.id / 10);
          
          return (
            <motion.div
              key={practice.id}
              className={`relative overflow-hidden rounded-xl border ${
                isHovered
                  ? "border-purple-500/50"
                  : "border-[#2C2D32]/80"
              } bg-gradient-to-br from-[#232429] to-[#1A1B20] transition-all duration-300`}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              custom={index}
              onHoverStart={() => setHoveredPractice(practice.id)}
              onHoverEnd={() => setHoveredPractice(null)}
              onClick={() => setExpandedPractice(expandedPractice === practice.id ? null : practice.id)}
              style={{
                transformStyle: 'preserve-3d',
                perspective: '1000px',
              }}
            >
              {/* Background pattern - Only animate when this card is hovered */}
              <motion.div 
                className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden"
                initial={{ opacity: 0.05 }}
                animate={{ opacity: isHovered ? 0.08 : 0.05 }}
                transition={{ duration: 0.5 }}
              >
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id={`grid-practice-${practice.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#grid-practice-${practice.id})`} />
                </svg>
              </motion.div>

              {/* Wave background effect - Only animate when this card is hovered */}
              <motion.div 
                className={`absolute bottom-0 left-0 right-0 h-16 opacity-10 ${scoreColorClass}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 0.15 : 0.1 }}
                transition={{ duration: 0.5 }}
                style={{
                  clipPath: `url(#wave-clip-${practice.id})`,
                }}
              >
                <svg width="0" height="0">
                  <defs>
                    <clipPath id={`wave-clip-${practice.id}`}>
                      <path d={wavePattern} />
                    </clipPath>
                  </defs>
                </svg>
              </motion.div>

              {/* Animated highlight effect - Only animate when this card is hovered */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-purple-500/0"
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                />
              )}

              {/* 3D tilt effect with subtle shadow - Only apply to the hovered card */}
              <motion.div
                className="relative z-10 p-4 flex items-center"
                style={{
                  boxShadow: isHovered ? "0 10px 30px -15px rgba(138, 58, 234, 0.2)" : "none",
                  transform: isHovered && containerRef.current ? 
                    `perspective(1000px) 
                    rotateY(${(mousePosition.x / containerRef.current?.offsetWidth - 0.5) * 5}deg) 
                    rotateX(${(mousePosition.y / containerRef.current?.offsetHeight - 0.5) * -5}deg)` : 
                    "none",
                  transition: "transform 0.2s ease-out"
                }}
              >
                <PlayButton 
                  index={index} 
                  waveColor={scoreColor}
                  isHovered={isHovered}
                />

                <div className="ml-4 flex-1">
                  <motion.h3
                    className="text-sm font-medium text-white"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + 0.08 * index }}
                  >
                    {practice.title}
                  </motion.h3>
                  
                  <motion.div
                    className="flex items-center text-xs text-gray-400 mt-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + 0.08 * index }}
                  >
                    <span>{practice.date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      {practice.duration}
                    </span>
                  </motion.div>
                </div>

                <ScoreIndicator
                  score={practice.score}
                  index={index}
                  isHovered={isHovered}
                />
              </motion.div>

              {/* Expanded content */}
              <AnimatePresence>
                {expandedPractice === practice.id && (
                  <motion.div
                    className="px-4 pb-4 pt-1"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <motion.div 
                      className="pt-3 border-t border-[#2C2D32]/80"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-3 px-1">
                        <motion.h4 
                          className="text-xs font-medium text-gray-300 uppercase tracking-wider"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          Performance Metrics
                        </motion.h4>
                        
                        <motion.div 
                          className="text-xs text-purple-400"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          Session #{practice.id}
                        </motion.div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-3 mb-3">
                        {["Clarity", "Pace", "Vocabulary"].map((metric, i) => {
                          const value = 60 + Math.floor(Math.random() * 30);
                          const metricColor = getScoreTextColor(value);
                          return (
                            <motion.div
                              key={metric}
                              className="relative bg-[#1A1B20] rounded-lg p-2 text-center overflow-hidden"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.1 * i, duration: 0.3 }}
                            >
                              {/* Progress bar at bottom */}
                              <motion.div 
                                className={`absolute bottom-0 left-0 h-0.5 ${metricColor.replace('text', 'bg')}`}
                                initial={{ width: 0 }}
                                animate={{ width: `${value}%` }}
                                transition={{ delay: 0.2 + 0.1 * i, duration: 0.5, ease: "easeOut" }}
                              />
                              
                              <div className="text-xs text-gray-400 mb-1">{metric}</div>
                              <div className={`text-sm font-medium ${metricColor}`}>
                                {value}%
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      <motion.div
                        className="bg-[#1A1B20] rounded-lg p-3 mb-3 relative overflow-hidden"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        {/* AI icon decoration */}
                        <motion.div 
                          className="absolute top-2 right-2 opacity-10"
                          animate={{ 
                            rotate: [0, 5, 0, -5, 0],
                            scale: [1, 1.05, 1, 0.95, 1]
                          }}
                          transition={{ duration: 6, repeat: Infinity }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-500" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                          </svg>
                        </motion.div>
                        
                        <h5 className="text-xs font-medium text-gray-300 mb-1 flex items-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M4.5 3.5A2 2 0 018 4.5v.878a2 2 0 01.586 1.415l1.581 1.58a4 4 0 01-3.518 6.886 11.943 11.943 0 01-1.63-.222 1 1 0 00-.656.283.752.752 0 00.008 1.301c.25.25.506.492.777.724C6.44 17.558 8.7 18 11 18c6.075 0 9-3.927 9-8.75 0-2.861-1.726-5.095-4.244-6.161A4.987 4.987 0 0014 2a4.95 4.95 0 00-1.5.434 5.023 5.023 0 00-1.387.934A5.01 5.01 0 008.9 2.6a5.015 5.015 0 00-2.618 0 4.98 4.98 0 00-1.584.603C3.682 3.786 3 4.933 3 6.25c0 .352.035.697.101 1.035A1 1 0 003 7a1 1 0 01-.085-.45.75.75 0 00.383-.996A3.986 3.986 0 012 3.5c0-.328.051-.644.146-.944.095-.3.24-.574.428-.812a3.996 3.996 0 012.46-1.427 4.023 4.023 0 011.932 0 4.003 4.003 0 011.854.854l.058.052.058-.052A4.003 4.003 0 0115 0c.151 0 .301.008.45.025.3.032.59.099.86.198a3.988 3.988 0 011.892 1.753c.13.261.218.537.266.823.048.286.072.579.072.874v.876a1 1 0 00-.293.707h-.002V7c0 3.33-2.67 5-5.679 5a1 1 0 00-.707.293l-.707.707a1 1 0 00-.293.707v4.295z"/>
                          </svg>
                          AI Feedback
                        </h5>
                        <p className="text-xs text-gray-400">
                          {practice.title === "Presentation Practice"
                            ? "Good pacing and clarity. Work on reducing filler words and varying your tone for more engagement."
                            : practice.title === "Interview Prep"
                            ? "Strong answers with good structure. Consider adding more specific examples and maintaining more consistent eye contact."
                            : "Excellent energy and persuasive techniques. Your pitch was concise and compelling with clear value propositions."}
                        </p>
                      </motion.div>

                      <div className="flex space-x-2">
                        <motion.button
                          className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-700/20 text-purple-400 border border-purple-500/30 hover:border-purple-500/50 transition-colors"
                          whileHover={{ 
                            scale: 1.03, 
                            y: -1,
                            boxShadow: "0 0 15px rgba(139, 92, 246, 0.15)" 
                          }}
                          whileTap={{ scale: 0.97 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.3 }}
                        >
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                            </svg>
                            View Details
                          </div>
                        </motion.button>
                        
                        <motion.button
                          className="px-3 py-1.5 text-xs rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-700/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/50 transition-colors"
                          whileHover={{ 
                            scale: 1.03, 
                            y: -1,
                            boxShadow: "0 0 15px rgba(59, 130, 246, 0.15)" 
                          }}
                          whileTap={{ scale: 0.97 }}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5, duration: 0.3 }}
                        >
                          <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
                            </svg>
                            Compare
                          </div>
                        </motion.button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.button
        className="mt-5 w-full py-3 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 relative overflow-hidden group"
        whileHover={{ 
          scale: 1.01,
          boxShadow: "0 5px 15px -5px rgba(139, 92, 246, 0.25)"
        }}
        whileTap={{ scale: 0.99 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        {/* Gradient shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        
        {/* Animated plus sign */}
        <span className="relative z-10 flex items-center justify-center group-hover:text-white transition-colors">
          <motion.div 
            className="flex items-center justify-center bg-purple-500/20 w-5 h-5 rounded-full mr-2"
            whileHover={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 0.5 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </motion.div>
          Start New Practice Session
        </span>
      </motion.button>
    </div>
  );
};

export default RecentPracticesWidget;
