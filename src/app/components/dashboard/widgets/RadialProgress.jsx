"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RadialProgress = ({ 
  value = 0, 
  size = 120, 
  strokeWidth = 8, 
  color = "#8A3AEA",
  label,
  animate = true
}) => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if (animate) {
      // Animate the progress from 0 to the actual value
      const timer = setTimeout(() => {
        setProgress(value);
      }, 300);
      
      return () => clearTimeout(timer);
    } else {
      setProgress(value);
    }
  }, [value, animate]);
  
  // Calculate SVG parameters
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;
  
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        {/* Background circle */}
        <svg width={size} height={size} className="transform -rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth={strokeWidth}
          />
          
          {/* Progress circle */}
          <motion.circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        
        {/* Percentage text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            className="text-2xl font-bold text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            {Math.round(progress)}%
          </motion.span>
        </div>
      </div>
      
      {label && (
        <motion.p 
          className="mt-2 text-sm text-gray-300 font-medium"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.3 }}
        >
          {label}
        </motion.p>
      )}
    </div>
  );
};

export default RadialProgress;
