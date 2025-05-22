"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const PracticeGoalsWidget = ({ goals }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredGoal, setHoveredGoal] = useState(null);
  const [expandedGoal, setExpandedGoal] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle goal expansion
  const toggleGoalExpansion = (index) => {
    setExpandedGoal(expandedGoal === index ? null : index);
  };

  return (
    <WidgetCard
      title="Practice Goals"
      theme="green"
      fullHeight
      action={
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-xs text-green-400 mr-2">{goals.filter(g => g.progress >= 100).length}/{goals.length} Completed</span>
          <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      }
    >
      <div className="space-y-5">
        {goals.map((goal, index) => {
          const isHovered = hoveredGoal === index;
          const isExpanded = expandedGoal === index;
          const progressColor = goal.progress >= 100
            ? "from-green-500 via-green-400 to-emerald-300"
            : goal.progress >= 75
              ? "from-blue-500 via-cyan-400 to-green-400"
              : goal.progress >= 50
                ? "from-indigo-500 via-purple-400 to-blue-400"
                : "from-amber-500 via-orange-400 to-yellow-300";

          return (
            <motion.div
              key={goal.id}
              className={`p-4 rounded-xl ${isExpanded ? "scale-[1.02]" : ""} ${
                isHovered || isExpanded
                  ? "bg-gradient-to-br from-gray-800/70 to-gray-900/70 border border-green-500/30 shadow-lg shadow-green-500/10"
                  : "bg-gray-800/30 border border-gray-700/50"
              }`}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isLoaded ? 1 : 0,
                y: isLoaded ? 0 : 10,
                boxShadow: isExpanded ? "0 8px 20px -5px rgba(34, 197, 94, 0.1), 0 6px 8px -6px rgba(34, 197, 94, 0.1)" : "none"
              }}
              transition={{
                duration: 0.3,
                delay: 0.1 + (index * 0.05),
                type: "spring",
                stiffness: 300,
                damping: 25
              }}
              onMouseEnter={() => setHoveredGoal(index)}
              onMouseLeave={() => setHoveredGoal(null)}
              onClick={() => toggleGoalExpansion(index)}
              whileHover={{
                y: -3,
                transition: { duration: 0.15, type: "tween" }
              }}
              layout="position"
            >
              {/* Glow effect for completed goals - optimized */}
              {goal.progress >= 100 && (
                <motion.div
                  className="absolute inset-0 rounded-xl bg-green-500/5 z-0"
                  initial={{ opacity: 0.2 }}
                  animate={{
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                />
              )}

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center">
                    <motion.div
                      className={`w-3 h-3 rounded-full bg-gradient-to-r ${progressColor} mr-2 flex items-center justify-center`}
                      animate={{
                        scale: isHovered || isExpanded ? [1, 1.15, 1] : 1,
                        boxShadow: isHovered || isExpanded ? ["0 0 0px rgba(34, 197, 94, 0.2)", "0 0 6px rgba(34, 197, 94, 0.4)", "0 0 0px rgba(34, 197, 94, 0.2)"] : "none"
                      }}
                      transition={{
                        duration: 0.8,
                        repeat: (isHovered || isExpanded) ? Infinity : 0,
                        repeatType: "loop",
                        ease: "easeInOut"
                      }}
                    >
                      {goal.progress >= 100 && (
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-2 w-2 text-white"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          initial={{ opacity: 0, scale: 0.5 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                      )}
                    </motion.div>
                    <h3 className="text-base font-medium text-white dashboard-card-title">
                      {goal.title}
                    </h3>
                  </div>
                  <div className="flex items-center">
                    <motion.span
                      className={`text-xs px-2 py-1 rounded-full ${
                        goal.progress >= 100
                          ? "bg-gradient-to-r from-green-900/50 to-emerald-800/50 text-green-300 border border-green-500/20"
                          : "bg-gray-800/80 text-gray-300 border border-gray-700/50"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {goal.progress >= 100 ? "Completed" : `${goal.progress}%`}
                    </motion.span>
                  </div>
                </div>

                <p className="text-sm text-gray-300 mb-3 pl-5">{goal.description}</p>

                {/* Progress bar */}
                <div className="mt-2 relative">
                  <div className="h-2.5 w-full bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${progressColor} rounded-full relative overflow-hidden`}
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min(goal.progress, 100)}%` }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1 + (index * 0.05),
                        ease: "easeOut"
                      }}
                    >
                      {/* Animated shine effect - optimized */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{
                          x: ["-100%", "200%"],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          repeatType: "loop",
                          repeatDelay: 0.5,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  </div>

                  {/* Progress markers - optimized */}
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-1 pointer-events-none">
                    {[25, 50, 75, 100].map((marker, i) => (
                      <motion.div
                        key={marker}
                        className={`h-3.5 w-0.5 rounded-full ${goal.progress >= marker ? "bg-white/50" : "bg-gray-700/50"}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 10 }}
                        transition={{ delay: 0.2 + (i * 0.05), duration: 0.2 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Goal details */}
                <AnimatePresence>
                  {(isExpanded || isHovered) && (
                    <motion.div
                      className="mt-4 grid grid-cols-3 gap-2 text-xs"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Target Box */}
                      <motion.div
                        className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                        whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.15 }}
                      >
                        <span className="text-gray-400 mb-1">Target</span>
                        <span className="text-green-400 font-medium">{goal.target}</span>
                      </motion.div>

                      {/* Current Box */}
                      <motion.div
                        className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                        whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.05 }}
                      >
                        <span className="text-gray-400 mb-1">Current</span>
                        <span className="text-blue-400 font-medium">{goal.current}</span>
                      </motion.div>

                      {/* Remaining Box */}
                      <motion.div
                        className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                        whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.15, delay: 0.1 }}
                      >
                        <span className="text-gray-400 mb-1">Remaining</span>
                        <span className="text-purple-400 font-medium">{Math.max(0, goal.target - goal.current)}</span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action button - optimized */}
                <AnimatePresence mode="sync">
                  {(isExpanded || isHovered) && (
                    <motion.button
                      className={`mt-4 w-full py-2 px-4 rounded-lg text-white text-sm font-medium transition-all ${goal.progress >= 100
                        ? "bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400"
                        : "bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400"}`}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.2, delay: 0.1 }}
                      whileHover={{
                        scale: 1.02,
                        boxShadow: goal.progress >= 100
                          ? "0 0 10px rgba(34, 197, 94, 0.4)"
                          : "0 0 10px rgba(59, 130, 246, 0.4)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-center">
                        <span>{goal.progress >= 100 ? "View Details" : "Continue Practice"}</span>
                        <motion.svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          animate={{ x: [0, 3, 0] }}
                          transition={{
                            duration: 0.8,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                          }}
                        >
                          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </div>
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          );
        })}
      </div>
    </WidgetCard>
  );
};

export default PracticeGoalsWidget;
