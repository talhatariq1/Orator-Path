"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnalysisCard = ({ title, score, change, color, children, weeks = 4 }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeWeek, setActiveWeek] = useState(weeks);
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Generate gradient class based on color prop
  const gradientClass = {
    blue: "from-blue-600 via-blue-500 to-blue-400",
    purple: "from-purple-600 via-purple-500 to-purple-400",
    green: "from-green-600 via-green-500 to-green-400",
    yellow: "from-yellow-600 via-yellow-500 to-yellow-400",
  }[color] || "from-blue-600 via-blue-500 to-blue-400";

  // Generate text color class based on color prop
  const textColorClass = {
    blue: "text-blue-400",
    purple: "text-purple-400",
    green: "text-green-400",
    yellow: "text-yellow-400",
  }[color] || "text-blue-400";

  // Generate glow color based on color prop
  const glowColor = {
    blue: "rgba(59, 130, 246, 0.5)", // blue-500
    purple: "rgba(139, 92, 246, 0.5)", // purple-500
    green: "rgba(34, 197, 94, 0.5)", // green-500
    yellow: "rgba(234, 179, 8, 0.5)", // yellow-500
  }[color] || "rgba(59, 130, 246, 0.5)";

  // Generate lighter color for highlights
  const lightColorClass = {
    blue: "text-blue-300",
    purple: "text-purple-300",
    green: "text-green-300",
    yellow: "text-yellow-300",
  }[color] || "text-blue-300";

  // Handle week change with animation
  const handleWeekChange = (week) => {
    if (week !== activeWeek) {
      setActiveWeek(week);
    }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-gray-900/80 to-gray-950/80 border border-gray-800/80 rounded-xl overflow-hidden backdrop-blur-sm shadow-lg relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: isLoaded ? 1 : 0, 
        y: isLoaded ? 0 : 20,
        boxShadow: isHovered ? `0 0 20px ${glowColor}` : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      transition={{ 
        duration: 0.5,
        boxShadow: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-${color}`} width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-${color})`} />
        </svg>
      </div>

      {/* Animated corner accent */}
      <motion.div 
        className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl ${gradientClass} opacity-20 rounded-bl-full`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      />

      <div className="p-5 relative z-10">
        <div className="flex justify-between items-start mb-4">
          <motion.h3 
            className="text-lg font-medium text-white flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <motion.span 
              className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${gradientClass} mr-2`}
              animate={{ 
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            {title}
          </motion.h3>
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-2xl font-bold text-white mr-2">{score}%</span>
            {change && (
              <motion.span 
                className={`text-sm ${change > 0 ? "text-green-400" : "text-red-400"} flex items-center`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-3 w-3 mr-0.5" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                  animate={{
                    y: change > 0 ? [0, -2, 0] : [0, 2, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1
                  }}
                >
                  {change > 0 ? (
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  )}
                </motion.svg>
                {change > 0 ? "+" : ""}{change}%
              </motion.span>
            )}
          </motion.div>
        </div>

        <div className="relative h-36 flex items-center justify-center">
          {/* Circular progress indicator */}
          <div className="relative w-32 h-32">
            {/* Background circle */}
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-gray-800/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            />

            {/* Progress circle */}
            <svg className="absolute inset-0 w-full h-full rotate-[-90deg]" viewBox="0 0 100 100">
              <motion.circle
                className={`stroke-current ${textColorClass}`}
                cx="50"
                cy="50"
                r="42"
                strokeWidth="8"
                fill="none"
                strokeDasharray="264"
                strokeDashoffset="264"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 264 }}
                animate={{ 
                  strokeDashoffset: 264 - (264 * score / 100),
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.5,
                  ease: "easeOut"
                }}
              />
              
              {/* Animated glow effect */}
              <motion.circle
                className={`stroke-current ${textColorClass} opacity-50 blur-sm`}
                cx="50"
                cy="50"
                r="42"
                strokeWidth="2"
                fill="none"
                strokeDasharray="264"
                strokeDashoffset="264"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 264 }}
                animate={{ 
                  strokeDashoffset: 264 - (264 * score / 100),
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  strokeDashoffset: { duration: 1.5, delay: 0.5, ease: "easeOut" },
                  opacity: { duration: 2, repeat: Infinity, repeatType: "loop" }
                }}
              />
            </svg>

            {/* Score text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: isLoaded ? 1 : 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.7 
                }}
              >
                <motion.span 
                  className={`text-3xl font-bold ${textColorClass}`}
                  animate={{ 
                    textShadow: isHovered ? `0 0 8px ${glowColor}` : "none"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {score}%
                </motion.span>
                <motion.span 
                  className={`text-xs ${lightColorClass} mt-1 opacity-80`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.8 }}
                  transition={{ delay: 1 }}
                >
                  {change > 0 ? "Improving" : change < 0 ? "Declining" : "Stable"}
                </motion.span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Details section */}
        <motion.div 
          className="mt-2 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.button
            className={`text-xs ${textColorClass} flex items-center mb-2 hover:underline`}
            onClick={() => setShowDetails(!showDetails)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showDetails ? "Hide details" : "Show details"}
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-3 w-3 ml-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
              animate={{ rotate: showDetails ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </motion.svg>
          </motion.button>
          
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Week selector */}
        <motion.div 
          className="mt-4 flex justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <div className="text-xs text-gray-500">Week</div>
          <div className="flex space-x-1.5">
            {Array.from({ length: weeks }, (_, i) => i + 1).map((week) => (
              <motion.button
                key={week}
                className={`w-7 h-7 rounded-full text-xs flex items-center justify-center transition-all ${
                  activeWeek === week
                    ? `bg-gradient-to-r ${gradientClass} text-white shadow-md`
                    : "bg-gray-800/80 text-gray-500 hover:bg-gray-700/80 border border-gray-700/50"
                }`}
                onClick={() => handleWeekChange(week)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: 1 + (week * 0.05),
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }}
              >
                {week}
                {activeWeek === week && (
                  <motion.div 
                    className="absolute inset-0 rounded-full"
                    initial={{ boxShadow: `0 0 0px ${glowColor}` }}
                    animate={{ 
                      boxShadow: [`0 0 0px ${glowColor}`, `0 0 8px ${glowColor}`, `0 0 0px ${glowColor}`]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnalysisCard;
