"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const AnalysisWidget = ({
  title,
  data,
  summary,
  theme,
  delay = 0
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const progressControls = useAnimation();
  const containerRef = useRef(null);

  // Calculate current value (latest data point)
  const currentValue = data[data.length - 1].value;

  // Calculate trend (difference between first and last value)
  const trend = data.length > 1 ? data[data.length - 1].value - data[0].value : 0;
  const trendText = trend > 0 ? `+${trend}%` : trend < 0 ? `${trend}%` : "0%";
  const trendColor = trend > 0 ? "text-green-500" : trend < 0 ? "text-red-500" : "text-gray-400";

  // Theme-specific colors and styles
  const themeColors = {
    blue: {
      primary: "blue",
      light: "#60A5FA", // blue-400
      main: "#3B82F6", // blue-500
      dark: "#2563EB", // blue-600
      gradient: "from-blue-500/30 to-blue-600/10",
      glow: "rgba(59, 130, 246, 0.5)", // blue-500 with alpha
      border: "border-blue-500/30",
      text: "text-blue-400",
      textHover: "text-blue-300",
      bgLight: "bg-blue-400/20"
    },
    purple: {
      primary: "purple",
      light: "#A78BFA", // purple-400
      main: "#8B5CF6", // purple-500
      dark: "#7C3AED", // purple-600
      gradient: "from-purple-500/30 to-purple-600/10",
      glow: "rgba(139, 92, 246, 0.5)", // purple-500 with alpha
      border: "border-purple-500/30",
      text: "text-purple-400",
      textHover: "text-purple-300",
      bgLight: "bg-purple-400/20"
    },
    green: {
      primary: "green",
      light: "#4ADE80", // green-400
      main: "#22C55E", // green-500
      dark: "#16A34A", // green-600
      gradient: "from-green-500/30 to-green-600/10",
      glow: "rgba(34, 197, 94, 0.5)", // green-500 with alpha
      border: "border-green-500/30",
      text: "text-green-400",
      textHover: "text-green-300",
      bgLight: "bg-green-400/20"
    },
    yellow: {
      primary: "yellow",
      light: "#FACC15", // yellow-400
      main: "#EAB308", // yellow-500
      dark: "#CA8A04", // yellow-600
      gradient: "from-yellow-500/30 to-yellow-600/10",
      glow: "rgba(234, 179, 8, 0.5)", // yellow-500 with alpha
      border: "border-yellow-500/30",
      text: "text-yellow-400",
      textHover: "text-yellow-300",
      bgLight: "bg-yellow-400/20"
    }
  };

  const colors = themeColors[theme] || themeColors.blue;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
      progressControls.start({ width: `${currentValue}%` });
    }, 300);

    return () => clearTimeout(timer);
  }, [currentValue, progressControls]);

  // Generate particles for background animation
  const generateParticles = () => {
    const particles = [];
    // Use fixed values instead of random to ensure consistent rendering
    const positions = [
      { top: "20%", left: "10%", size: 8, delay: 0.5 },
      { top: "70%", left: "20%", size: 6, delay: 1.2 },
      { top: "40%", left: "80%", size: 10, delay: 0.8 },
      { top: "80%", left: "85%", size: 7, delay: 1.5 },
      { top: "30%", left: "50%", size: 9, delay: 0.3 },
    ];

    for (let i = 0; i < positions.length; i++) {
      const { top, left, size, delay } = positions[i];
      particles.push(
        <motion.div
          key={i}
          className={`absolute rounded-full ${colors.bgLight} opacity-30`}
          style={{
            width: size,
            height: size,
            top: top,
            left: left,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, 5, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: delay,
          }}
        />
      );
    }
    return particles;
  };

  return (
    <WidgetCard
      title={title}
      theme={theme}
      action={
        <motion.button
          className={`text-sm ${colors.text} hover:${colors.textHover} transition-colors`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Details
        </motion.button>
      }
      fullHeight
      delay={delay}
    >
      <div
        className="flex flex-col h-full relative overflow-hidden"
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background particles */}
        {generateParticles()}

        {/* Main content container with 3D effect */}
        <motion.div
          className="flex flex-col h-full z-10"
          animate={{
            transform: isHovered ? ["translateY(0px)", "translateY(-5px)", "translateY(0px)"] : "translateY(0px)",
          }}
          transition={{
            duration: 2,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        >
          {/* Score display with animated number */}
          <div className="flex items-center justify-between mb-6">
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              <div className="flex items-baseline">
                <motion.span
                  className={`text-3xl font-bold ${colors.text}`}
                  animate={{ scale: isHovered ? [1, 1.05, 1] : 1 }}
                  transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                >
                  {currentValue}%
                </motion.span>
                <motion.span
                  className={`ml-2 text-sm ${trendColor} font-medium`}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: delay + 0.4 }}
                >
                  {trendText}
                </motion.span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Current score</p>
            </motion.div>

            {/* Circular indicator */}
            <motion.div
              className="relative w-16 h-16"
              initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: -90 }}
              transition={{ duration: 0.5, delay: delay + 0.3 }}
            >
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full bg-gray-800/50"></div>

              {/* Progress circle */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgba(255,255,255,0.1)"
                  strokeWidth="8"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke={colors.light}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="251.2"
                  initial={{ strokeDashoffset: 251.2 }}
                  animate={{
                    strokeDashoffset: 251.2 - (251.2 * currentValue / 100),
                    filter: isHovered ? "drop-shadow(0 0 3px " + colors.glow + ")" : "none"
                  }}
                  transition={{
                    strokeDashoffset: { duration: 1.5, delay: delay + 0.2, ease: "easeOut" },
                    filter: { duration: 0.3 }
                  }}
                />
              </svg>

              {/* Percentage text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-sm font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, rotate: 90 }}
                transition={{ duration: 0.5, delay: delay + 0.8 }}
              >
                <span className={colors.text}>{currentValue}</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <motion.div
              className="flex justify-between text-xs text-gray-500 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.4 }}
            >
              <span>Progress</span>
              <span>{currentValue}%</span>
            </motion.div>
            <div className="h-2 bg-gray-800/50 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${colors.gradient}`}
                initial={{ width: 0 }}
                animate={progressControls}
                transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
              />
            </div>
          </div>

          {/* Summary */}
          <AnimatePresence>
            <motion.div
              className={`p-3 rounded-lg bg-gradient-to-r ${colors.gradient} ${colors.border} border mt-auto backdrop-blur-sm`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
                boxShadow: isHovered ? `0 0 15px ${colors.glow}` : "none"
              }}
              transition={{
                opacity: { duration: 0.4, delay: delay + 0.5 },
                y: { duration: 0.4, delay: delay + 0.5 },
                boxShadow: { duration: 0.3 }
              }}
            >
              <motion.p
                className="text-sm text-gray-300"
                animate={{
                  textShadow: isHovered ? `0 0 5px ${colors.glow}` : "none"
                }}
                transition={{ duration: 0.3 }}
              >
                {summary}
              </motion.p>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </WidgetCard>
  );
};

export default AnalysisWidget;
