"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WaveDecoration({
  className = "",
  position = "bottom-right",
  color = "#F3F4F6",
  size = "medium",
  animated = true,
}) {
  // Size mapping
  const sizeMap = {
    small: { width: "150px", height: "150px" },
    medium: { width: "250px", height: "250px" },
    large: { width: "400px", height: "400px" },
  };
  
  // Position mapping
  const positionMap = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };
  
  // Animation variants
  const waveVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 0.7, 
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };
  
  // Get position and size
  const positionClasses = positionMap[position] || positionMap["bottom-right"];
  const sizeStyle = sizeMap[size] || sizeMap["medium"];
  
  return (
    <motion.div
      className={`absolute pointer-events-none overflow-hidden blur-3xl ${positionClasses} ${className}`}
      style={sizeStyle}
      initial={animated ? "hidden" : {}}
      whileInView={animated ? "visible" : {}}
      viewport={{ once: true, margin: "-100px" }}
      variants={waveVariants}
    >
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <path
          fill={color}
          d="M47.4,-51.2C59.9,-35.4,67.4,-17.7,67.2,-0.2C67,17.3,59.2,34.6,46.7,48.9C34.2,63.3,17.1,74.5,-0.6,75.1C-18.2,75.7,-36.4,65.6,-51.2,51.3C-66,37.1,-77.3,18.5,-76.9,0.5C-76.4,-17.6,-64.1,-35.2,-49.3,-51C-34.5,-66.9,-17.2,-80.9,0.4,-81.3C18,-81.7,36,-67.1,47.4,-51.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </motion.div>
  );
}