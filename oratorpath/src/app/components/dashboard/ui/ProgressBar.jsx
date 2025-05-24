"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { widgetThemes } from "../../../utils/colorPalette";

const ProgressBar = ({
  value = 0,
  label,
  theme = "blue",
  showValue = true,
  height = 8,
  delay = 0,
  showAnimation = true,
  markers = [25, 50, 75, 100],
  subtitle
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const themeStyles = widgetThemes[theme] || widgetThemes.blue;

  // Generate gradient class based on theme
  const gradientClass = {
    blue: "from-blue-600 via-blue-500 to-blue-400",
    purple: "from-purple-600 via-purple-500 to-purple-400",
    green: "from-green-600 via-green-500 to-green-400",
    yellow: "from-yellow-600 via-yellow-500 to-yellow-400",
    red: "from-red-600 via-red-500 to-red-400",
  }[theme] || "from-blue-600 via-blue-500 to-blue-400";

  // Determine color class based on progress value
  const getColorClass = () => {
    if (value >= 80) return "from-green-600 via-green-500 to-green-400";
    if (value >= 60) return gradientClass;
    if (value >= 40) return "from-yellow-600 via-yellow-500 to-yellow-400";
    return "from-red-600 via-red-500 to-red-400";
  };

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label && (
        <div className="flex justify-between items-center mb-1">
          <motion.span
            className="text-sm font-medium text-gray-400 flex items-center"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay }}
          >
            <motion.span
              className={`inline-block w-1.5 h-1.5 rounded-full bg-gradient-to-r ${themeStyles.text.replace('text-', 'from-').replace('400', '500')} to-transparent mr-1.5`}
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
            {label}
          </motion.span>

          {showValue && (
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.1 }}
            >
              <motion.span
                className={`text-sm font-medium ${themeStyles.text}`}
                animate={{
                  scale: isHovered ? 1.1 : 1,
                  textShadow: isHovered ? `0 0 8px ${themeStyles.text.replace('text-', 'rgba(').replace('400', '246, 0.5)')}` : "none"
                }}
                transition={{ duration: 0.3 }}
              >
                {value}%
              </motion.span>
            </motion.div>
          )}
        </div>
      )}

      {subtitle && (
        <motion.p
          className="text-xs text-gray-500 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: delay + 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}

      <div
        className={`w-full bg-gray-800/80 rounded-full overflow-hidden relative border border-gray-700/30 backdrop-blur-sm`}
        style={{ height: `${height}px` }}
      >
        {/* Progress markers */}
        {showAnimation && markers && (
          <div className="absolute inset-0 flex items-center justify-between px-1 pointer-events-none">
            {markers.map((marker) => (
              <motion.div
                key={marker}
                className={`h-${height/2} w-0.5 rounded-full ${value >= marker ? "bg-white/30" : "bg-gray-700/30"}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: height/2 }}
                transition={{ delay: delay + 0.5 + (marker / 200), duration: 0.3 }}
              />
            ))}
          </div>
        )}

        {/* Progress bar */}
        <motion.div
          className={`bg-gradient-to-r ${getColorClass()} rounded-full relative overflow-hidden h-full`}
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 1.2, delay, ease: "easeOut" }}
          style={{ height: '100%' }}
        >
          {/* Animated shine effect */}
          {showAnimation && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                ease: "easeInOut"
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProgressBar;
