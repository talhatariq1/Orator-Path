"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const SpeakingStatsWidget = ({ stats }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("weekly");
  const [hoveredStat, setHoveredStat] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Get the appropriate stats based on the active tab
  const activeStats = stats[activeTab] || [];

  // Calculate max value for scaling
  const maxValue = Math.max(...activeStats.map(stat => stat.value)) || 100;

  // Handle tab change with animation
  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsLoaded(false);
      setTimeout(() => {
        setActiveTab(tab);
        setIsLoaded(true);
      }, 300);
    }
  };

  return (
    <WidgetCard
      title="Speaking Stats"
      theme="purple"
      action={
        <motion.div
          className="flex items-center space-x-1 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-lg p-0.5 border border-purple-500/20 shadow-inner shadow-purple-500/5"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {["weekly", "monthly", "yearly"].map((period) => (
            <motion.button
              key={period}
              className={`text-xs px-3 py-1 rounded-lg transition-all ${activeTab === period ? "bg-gradient-to-r from-purple-600/90 to-indigo-600/90 text-white shadow-md shadow-purple-500/20" : "text-gray-400 hover:text-gray-300"}`}
              onClick={() => handleTabChange(period)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 + (["weekly", "monthly", "yearly"].indexOf(period) * 0.1) }}
            >
              {period.charAt(0).toUpperCase() + period.slice(1)}
              {activeTab === period && (
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"
                  layoutId="activeTabIndicator"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      }
      fullHeight
    >
      <div className="h-[220px] relative">
        {/* Background pattern */}
        <motion.div
          className="absolute inset-0 opacity-5 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          transition={{ duration: 1 }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </motion.div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-10 flex flex-col justify-between text-xs">
          {[100, 75, 50, 25, 0].map((value) => (
            <motion.span
              key={value}
              className="text-gray-500"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -10 }}
              transition={{ duration: 0.5, delay: 0.2 + (value / 500) }}
            >
              {value}%
            </motion.span>
          ))}
        </div>

        {/* Chart area */}
        <div className="absolute left-10 right-0 top-0 bottom-0">
          {/* Horizontal grid lines */}
          {[0, 25, 50, 75, 100].map((value) => (
            <motion.div
              key={value}
              className="absolute w-full h-px bg-gradient-to-r from-purple-800/30 to-transparent"
              style={{ top: `${100 - value}%` }}
              initial={{ opacity: 0, scaleX: 0, transformOrigin: "left" }}
              animate={{ opacity: isLoaded ? 0.5 : 0, scaleX: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.7, delay: 0.2 + (value / 500), ease: "easeOut" }}
            />
          ))}

          {/* Bars */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="absolute inset-0 flex items-end justify-around"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeStats.map((stat, index) => {
                const heightPercent = (stat.value / maxValue) * 100;
                const isHovered = hoveredStat === index;

                // Determine gradient based on change value
                let gradient;
                if (stat.change > 10) {
                  gradient = "from-indigo-600 via-purple-500 to-blue-400";
                } else if (stat.change > 0) {
                  gradient = "from-blue-600 via-purple-500 to-indigo-400";
                } else if (stat.change < 0) {
                  gradient = "from-red-600 via-orange-500 to-amber-400";
                } else {
                  gradient = "from-gray-600 via-gray-500 to-gray-400";
                }

                return (
                  <motion.div
                    key={stat.label}
                    className="relative flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                    onMouseEnter={() => {
                      setHoveredStat(index);
                      setShowTooltip(true);
                    }}
                    onMouseLeave={() => {
                      setHoveredStat(null);
                      setShowTooltip(false);
                    }}
                  >
                    {/* Value label above bar */}
                    <motion.div
                      className={`absolute -top-6 text-xs font-medium ${stat.change > 0 ? "text-blue-400" : stat.change < 0 ? "text-red-400" : "text-gray-400"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10,
                        scale: isHovered ? 1.1 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {stat.value}%
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {isHovered && showTooltip && (
                        <motion.div
                          className="absolute bottom-full mb-2 px-3 py-2 bg-gradient-to-br from-purple-900/90 to-indigo-900/90 text-white text-xs rounded-lg shadow-lg border border-purple-500/30 backdrop-blur-sm z-10 whitespace-nowrap"
                          initial={{ opacity: 0, scale: 0.8, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: 10 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="font-medium mb-1">{stat.label}</div>
                          <div className="flex justify-between gap-4">
                            <span>Current:</span>
                            <span className="text-blue-300">{stat.value}%</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span>Change:</span>
                            <span className={stat.change > 0 ? "text-green-400" : stat.change < 0 ? "text-red-400" : "text-gray-400"}>
                              {stat.change > 0 ? `+${stat.change}%` : `${stat.change}%`}
                            </span>
                          </div>
                          {/* Arrow */}
                          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-indigo-900 rotate-45 border-r border-b border-purple-500/30"></div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bar container with reflection effect */}
                    <div className="relative">
                      {/* Reflection surface */}
                      <motion.div
                        className="absolute -bottom-2 left-0 right-0 h-2 bg-gradient-to-t from-transparent to-purple-900/10 blur-sm rounded-b-lg"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 0.5 : 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                        style={{
                          width: `${Math.max(heightPercent / 3, 8)}px`,
                          left: `${(12 - Math.max(heightPercent / 3, 8)) / 2}px`
                        }}
                      />

                      {/* Bar */}
                      <motion.div
                        className={`w-12 rounded-lg bg-gradient-to-t ${gradient} relative overflow-hidden backdrop-blur-sm border border-purple-500/20 shadow-lg`}
                        style={{ height: "0%" }}
                        initial={{ height: "0%" }}
                        animate={{ height: `${heightPercent}%` }}
                        transition={{
                          duration: 1.2,
                          delay: 0.5 + (index * 0.1),
                          ease: "easeOut"
                        }}
                        whileHover={{
                          scale: 1.05,
                          boxShadow: stat.change > 0
                            ? "0 0 15px rgba(79, 70, 229, 0.5)"
                            : stat.change < 0
                              ? "0 0 15px rgba(239, 68, 68, 0.5)"
                              : "0 0 15px rgba(107, 114, 128, 0.5)",
                          transition: { duration: 0.2 }
                        }}
                      >
                        {/* Animated shine effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
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

                        {/* Change indicator */}
                        <div className="absolute top-2 left-0 right-0 flex justify-center">
                          {stat.change !== 0 && (
                            <motion.div
                              className={`flex items-center justify-center w-5 h-5 rounded-full ${stat.change > 0 ? "bg-green-500/20" : "bg-red-500/20"}`}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 1 + (index * 0.1), duration: 0.3 }}
                            >
                              <motion.svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-3 w-3 ${stat.change > 0 ? "text-green-400" : "text-red-400"}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                animate={{
                                  y: stat.change > 0 ? [0, -2, 0] : [0, 2, 0],
                                }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatType: "loop",
                                  repeatDelay: 1
                                }}
                              >
                                {stat.change > 0 ? (
                                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                                ) : (
                                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                )}
                              </motion.svg>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Label */}
                    <motion.div
                      className="mt-2 text-xs font-medium text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isLoaded ? 1 : 0 }}
                      transition={{ duration: 0.3, delay: 0.8 + (index * 0.1) }}
                      whileHover={{ color: stat.change > 0 ? "#93c5fd" : stat.change < 0 ? "#fca5a5" : "#9ca3af" }}
                    >
                      {stat.shortLabel}
                    </motion.div>
                  </motion.div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Legend */}
      <motion.div
        className="mt-4 flex justify-center space-x-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-600 to-blue-500 mr-2" />
          <span className="text-xs text-gray-400">Improvement</span>
        </motion.div>
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500 mr-2" />
          <span className="text-xs text-gray-400">Decline</span>
        </motion.div>
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 mr-2" />
          <span className="text-xs text-gray-400">No Change</span>
        </motion.div>
      </motion.div>
    </WidgetCard>
  );
};

export default SpeakingStatsWidget;
