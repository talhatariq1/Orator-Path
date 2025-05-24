"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { widgetThemes } from "../../../utils/colorPalette";

const WidgetCard = ({
  children,
  title,
  theme = "blue",
  action,
  className = "",
  fullHeight = false,
  animate = true,
  delay = 0,
  noPadding = false,
  showGlow = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeStyles = widgetThemes[theme] || widgetThemes.blue;

  // Generate glow color based on theme
  const glowColor = {
    blue: "rgba(59, 130, 246, 0.5)", // blue-500
    purple: "rgba(139, 92, 246, 0.5)", // purple-500
    green: "rgba(34, 197, 94, 0.5)", // green-500
    yellow: "rgba(234, 179, 8, 0.5)", // yellow-500
    red: "rgba(239, 68, 68, 0.5)", // red-500
  }[theme] || "rgba(59, 130, 246, 0.5)";

  const cardContent = (
    <motion.div
      className={`rounded-xl border ${themeStyles.border} bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm shadow-lg overflow-hidden relative ${fullHeight ? 'h-full flex flex-col' : ''} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      animate={{
        boxShadow: isHovered && showGlow ? `0 0 20px ${glowColor}` : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
      }}
      transition={{ boxShadow: { duration: 0.3 } }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-widget-${theme}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-widget-${theme})`} />
        </svg>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${themeStyles.text.replace('text-', 'from-').replace('400', '600')} to-transparent opacity-10 rounded-bl-full`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.7, delay: delay + 0.3 }}
      />

      {title && (
        <motion.div
          className={`flex justify-between items-center px-5 py-4 border-b ${themeStyles.border} relative z-10`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay + 0.1 }}
        >
          <motion.h3
            className={`font-semibold ${themeStyles.heading} widget-title flex items-center`}
            animate={{
              textShadow: isHovered && showGlow ? `0 0 8px ${glowColor}` : "none"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.span
              className={`inline-block w-2 h-2 rounded-full bg-gradient-to-r ${themeStyles.text.replace('text-', 'from-').replace('400', '500')} to-transparent mr-2`}
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

          {action && (
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              {action}
            </motion.div>
          )}
        </motion.div>
      )}

      <motion.div
        className={`${noPadding ? '' : 'p-5'} relative z-10 ${fullHeight ? 'flex-grow' : ''}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        className={fullHeight ? 'h-full' : ''}
      >
        {cardContent}
      </motion.div>
    );
  }

  return cardContent;
};

export default WidgetCard;
