"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const SpeakingStreakWidget = ({ streakData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Get current streak
  const currentStreak = streakData.currentStreak;
  const longestStreak = streakData.longestStreak;
  const totalPractices = streakData.totalPractices;
  const calendarData = streakData.calendar;

  // Days of the week
  const daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <WidgetCard
      title="Speaking Streak"
      theme="yellow"
      fullHeight
    >
      {/* Streak stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <motion.div
          className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg p-3 border border-yellow-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="text-xs text-yellow-300 mb-1">Current Streak</div>
          <div className="flex items-baseline">
            <motion.span
              className="text-2xl font-bold text-yellow-400"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {currentStreak}
            </motion.span>
            <span className="text-xs text-yellow-300 ml-1">days</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg p-3 border border-yellow-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="text-xs text-yellow-300 mb-1">Longest Streak</div>
          <div className="flex items-baseline">
            <motion.span
              className="text-2xl font-bold text-yellow-400"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {longestStreak}
            </motion.span>
            <span className="text-xs text-yellow-300 ml-1">days</span>
          </div>
        </motion.div>

        <motion.div
          className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/20 rounded-lg p-3 border border-yellow-500/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-xs text-yellow-300 mb-1">Total Practices</div>
          <div className="flex items-baseline">
            <motion.span
              className="text-2xl font-bold text-yellow-400"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {totalPractices}
            </motion.span>
            <span className="text-xs text-yellow-300 ml-1">sessions</span>
          </div>
        </motion.div>
      </div>

      {/* Calendar visualization */}
      <div className="mb-4">
        <div className="grid grid-cols-7 gap-1 mb-2">
          {daysOfWeek.map((day, i) => (
            <div key={i} className="text-xs text-center text-gray-500">
              {day}
            </div>
          ))}
        </div>

        <motion.div
          className="grid grid-cols-7 gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {calendarData.map((day, index) => {
            const isHovered = hoveredDay === index;
            let bgColor = "bg-gray-800";
            let borderColor = "border-gray-700";
            
            if (day.count > 0) {
              if (day.count === 1) {
                bgColor = "bg-yellow-900/50";
                borderColor = "border-yellow-700";
              } else if (day.count === 2) {
                bgColor = "bg-yellow-800/60";
                borderColor = "border-yellow-600";
              } else {
                bgColor = "bg-yellow-700/70";
                borderColor = "border-yellow-500";
              }
            }
            
            if (day.isToday) {
              borderColor = "border-yellow-400";
            }
            
            return (
              <motion.div
                key={index}
                className={`aspect-square rounded-sm border ${borderColor} ${bgColor} flex items-center justify-center relative cursor-pointer`}
                initial={{ scale: 0 }}
                animate={{ scale: isLoaded ? 1 : 0 }}
                transition={{ 
                  duration: 0.3, 
                  delay: 0.5 + (index * 0.005),
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onMouseEnter={() => setHoveredDay(index)}
                onMouseLeave={() => setHoveredDay(null)}
                whileHover={{ scale: 1.2, zIndex: 10 }}
              >
                {day.count > 0 && (
                  <motion.div
                    className="absolute inset-0 bg-yellow-400 rounded-sm opacity-0"
                    animate={{ 
                      opacity: [0, 0.2, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop"
                    }}
                  />
                )}
                
                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-yellow-900/90 text-white text-xs rounded whitespace-nowrap z-20"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                  >
                    {day.date}: {day.count} {day.count === 1 ? 'session' : 'sessions'}
                  </motion.div>
                )}
                
                {/* Day number */}
                <span className={`text-[0.6rem] ${
                  day.count > 0 
                    ? "text-yellow-300" 
                    : day.isCurrentMonth 
                      ? "text-gray-400" 
                      : "text-gray-600"
                }`}>
                  {day.day}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Legend */}
      <div className="flex justify-center space-x-4 mt-2">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-yellow-900/50 border border-yellow-700 mr-1" />
          <span className="text-xs text-gray-400">1 Session</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-yellow-800/60 border border-yellow-600 mr-1" />
          <span className="text-xs text-gray-400">2 Sessions</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-yellow-700/70 border border-yellow-500 mr-1" />
          <span className="text-xs text-gray-400">3+ Sessions</span>
        </div>
      </div>
    </WidgetCard>
  );
};

export default SpeakingStreakWidget;
