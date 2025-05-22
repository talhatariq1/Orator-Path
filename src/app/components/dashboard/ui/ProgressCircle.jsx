"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { widgetThemes } from "../../../utils/colorPalette";

const ProgressCircle = ({
  value = 0,
  size = 120,
  strokeWidth = 8,
  theme = "blue",
  label,
  animate = true,
  delay = 0,
  showGlow = true,
  showAnimation = true,
  subtitle
}) => {
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const themeStyles = widgetThemes[theme] || widgetThemes.blue;

  // Calculate circle properties
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  // Generate glow color based on theme
  const glowColor = {
    blue: "rgba(59, 130, 246, 0.5)", // blue-500
    purple: "rgba(139, 92, 246, 0.5)", // purple-500
    green: "rgba(34, 197, 94, 0.5)", // green-500
    yellow: "rgba(234, 179, 8, 0.5)", // yellow-500
    red: "rgba(239, 68, 68, 0.5)", // red-500
  }[theme] || "rgba(59, 130, 246, 0.5)";

  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, delay * 1000);

      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animate, delay]);

  // Determine color class based on progress value
  const getColorClass = () => {
    if (progress >= 80) return "text-green-400";
    if (progress >= 60) return themeStyles.text;
    if (progress >= 40) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="relative"
        style={{ width: size, height: size }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {/* Background pattern */}
        {showAnimation && (
          <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden rounded-full">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`grid-${theme}-${size}`} width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius + strokeWidth/2}
                fill={`url(#grid-${theme}-${size})`}
              />
            </svg>
          </div>
        )}

        {/* Background circle */}
        <svg width={size} height={size} className="rotate-[-90deg]">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={`rgba(255, 255, 255, 0.1)`}
            strokeWidth={strokeWidth}
          />

          {/* Glow effect */}
          {showGlow && (
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke={themeStyles.text.replace('text-', 'bg-').replace('400', '500')}
              strokeWidth={strokeWidth + 4}
              strokeDasharray={circumference}
              strokeDashoffset={animate ? circumference : strokeDashoffset}
              strokeLinecap="round"
              className="opacity-20 blur-md"
              initial={{ strokeDashoffset: circumference }}
              animate={{
                strokeDashoffset,
                opacity: isHovered ? [0.2, 0.4, 0.2] : 0.2
              }}
              transition={{
                strokeDashoffset: { duration: 1.5, delay, ease: "easeOut" },
                opacity: { duration: 2, repeat: isHovered ? Infinity : 0, repeatType: "loop" }
              }}
            />
          )}

          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={animate ? circumference : strokeDashoffset}
            strokeLinecap="round"
            className={getColorClass()}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, delay, ease: "easeOut" }}
          />

          {/* Animated shine effect */}
          {showAnimation && (
            <motion.circle
              cx={size / 2}
              cy={size / 2}
              r={radius}
              fill="transparent"
              stroke="white"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={animate ? circumference : strokeDashoffset}
              strokeLinecap="round"
              className="opacity-20"
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset }}
              transition={{ duration: 1.5, delay, ease: "easeOut" }}
              style={{ filter: "blur(1px)" }}
            />
          )}

          {/* Progress markers */}
          {showAnimation && [
            { value: 25, angle: 270 - (25 * 3.6) },
            { value: 50, angle: 270 - (50 * 3.6) },
            { value: 75, angle: 270 - (75 * 3.6) },
          ].map((marker) => {
            const markerX = size/2 + radius * Math.cos(marker.angle * Math.PI / 180);
            const markerY = size/2 + radius * Math.sin(marker.angle * Math.PI / 180);
            return (
              <motion.circle
                key={marker.value}
                cx={markerX}
                cy={markerY}
                r={strokeWidth / 3}
                fill={progress >= marker.value ? "white" : "rgba(255, 255, 255, 0.3)"}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: delay + 1 + (marker.value / 100), duration: 0.3 }}
              />
            );
          })}
        </svg>

        {/* Percentage text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span
            className={`text-2xl font-bold ${getColorClass()}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              textShadow: isHovered && showGlow ? `0 0 8px ${glowColor}` : "none"
            }}
            transition={{
              opacity: { duration: 0.5, delay: delay + 0.5 },
              scale: { duration: 0.5, delay: delay + 0.5 },
              textShadow: { duration: 0.3 }
            }}
          >
            {progress}%
          </motion.span>

          {subtitle && (
            <motion.span
              className="text-xs text-gray-400 mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: delay + 0.8 }}
            >
              {subtitle}
            </motion.span>
          )}
        </div>
      </motion.div>

      {label && (
        <motion.p
          className={`mt-2 text-sm font-medium ${themeStyles.text}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.7 }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
};

export default ProgressCircle;
