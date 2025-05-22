"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/morphing-text.css";

const MorphingText = ({ words = ["Communication", "Presentation", "Public Speaking"], interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [words, interval]);
  
  // Variants for the container holding the entire word
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.05
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  // Variants for individual letters
  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 10,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.2,
      },
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  const currentWord = words[currentIndex];

  return (
    <span className="inline-block py-2 md:py-4 px-1 relative morphing-text-container">
      <AnimatePresence mode="wait">
        <motion.span
          key={currentIndex}
          className="text-white font-bold"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {words[currentIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>

    </span>
  );
};

export default MorphingText;
