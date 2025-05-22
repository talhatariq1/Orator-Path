"use client";
import React from "react";
import { motion } from "framer-motion";

const TextBackgroundEffect = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 100"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4C6DFF" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#8A3AEA" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4C6DFF" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        <motion.path
          d="M0,50 Q200,20 400,50 T800,50"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            pathOffset: [0, 1] 
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "easeInOut" },
            pathOffset: { 
              repeat: Infinity,
              duration: 10,
              ease: "linear",
              repeatType: "loop"
            }
          }}
        />
        
        <motion.path
          d="M0,70 Q200,40 400,70 T800,70"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="1.5"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ 
            pathLength: 1, 
            opacity: 1,
            pathOffset: [0, 1] 
          }}
          transition={{ 
            pathLength: { duration: 2, ease: "easeInOut" },
            opacity: { duration: 1, ease: "easeInOut" },
            pathOffset: { 
              repeat: Infinity,
              duration: 12,
              ease: "linear",
              repeatType: "loop",
              repeatDelay: 0.5
            }
          }}
        />
      </svg>
    </div>
  );
};

export default TextBackgroundEffect;
