"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const PracticeConsistencyWidget = ({ practiceData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredSession, setHoveredSession] = useState(null);
  const [expandedSession, setExpandedSession] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Handle session expansion
  const toggleSessionExpansion = (index) => {
    setExpandedSession(expandedSession === index ? null : index);
  };

  // Calculate streak if there are consecutive days
  const calculateStreak = () => {
    if (!practiceData || practiceData.length === 0) return 0;

    // Sort sessions by date (newest first)
    const sortedSessions = [...practiceData].sort((a, b) =>
      new Date(b.date) - new Date(a.date)
    );

    // Check if the most recent session is from today
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const mostRecentDate = new Date(sortedSessions[0].date);
    mostRecentDate.setHours(0, 0, 0, 0);

    // If most recent session is not from today, no active streak
    if (mostRecentDate.getTime() !== today.getTime() &&
        mostRecentDate.getTime() !== today.getTime() - 86400000) {
      return 0;
    }

    // Count consecutive days
    let streak = 1;
    let currentDate = mostRecentDate;

    for (let i = 1; i < sortedSessions.length; i++) {
      const sessionDate = new Date(sortedSessions[i].date);
      sessionDate.setHours(0, 0, 0, 0);

      // Check if this session is from the previous day
      const expectedPrevDay = new Date(currentDate);
      expectedPrevDay.setDate(expectedPrevDay.getDate() - 1);

      if (sessionDate.getTime() === expectedPrevDay.getTime()) {
        streak++;
        currentDate = sessionDate;
      } else {
        break;
      }
    }

    return streak;
  };

  // Get intensity level based on duration and score
  const getIntensityLevel = (duration, score) => {
    if (!duration) return "Low";

    const durationMinutes = duration / 60; // Convert seconds to minutes

    if (durationMinutes >= 5 && score >= 75) return "High";
    if (durationMinutes >= 3 || score >= 65) return "Medium";
    return "Low";
  };

  // Get color theme based on intensity
  const getIntensityTheme = (intensity) => {
    switch (intensity) {
      case "High":
        return {
          bg: "bg-green-900/30",
          border: "border-green-500/30",
          text: "text-green-400",
          gradient: "from-green-500 via-green-400 to-emerald-300",
          hoverBg: "from-gray-800/70 to-gray-900/70",
          hoverBorder: "border-green-500/40",
          shadow: "shadow-green-500/10",
          buttonGradient: "from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400",
          buttonShadow: "rgba(34, 197, 94, 0.4)"
        };
      case "Medium":
        return {
          bg: "bg-blue-900/30",
          border: "border-blue-500/30",
          text: "text-blue-400",
          gradient: "from-blue-500 via-cyan-400 to-blue-300",
          hoverBg: "from-gray-800/70 to-gray-900/70",
          hoverBorder: "border-blue-500/40",
          shadow: "shadow-blue-500/10",
          buttonGradient: "from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400",
          buttonShadow: "rgba(59, 130, 246, 0.4)"
        };
      default:
        return {
          bg: "bg-purple-900/30",
          border: "border-purple-500/30",
          text: "text-purple-400",
          gradient: "from-purple-500 via-fuchsia-400 to-pink-300",
          hoverBg: "from-gray-800/80 to-gray-900/90",
          hoverBorder: "border-purple-500/40",
          shadow: "shadow-purple-500/15",
          buttonGradient: "from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400",
          buttonShadow: "rgba(168, 85, 247, 0.4)"
        };
    }
  };

  // Format duration from seconds to minutes and seconds
  const formatDuration = (seconds) => {
    if (!seconds) return "0m 0s";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.round(seconds % 60);
    return `${minutes}m ${remainingSeconds}s`;
  };

  // Calculate practice goal progress
  const calculateGoalProgress = () => {
    // Goal: 3 practice sessions per day
    const goalSessionsPerDay = 3;

    // Group sessions by day
    const sessionsByDay = {};
    practiceData?.forEach(session => {
      // Extract date part only (without time)
      const sessionDate = new Date(session.rawDate || new Date());
      const dateKey = `${sessionDate.getFullYear()}-${sessionDate.getMonth() + 1}-${sessionDate.getDate()}`;

      if (!sessionsByDay[dateKey]) {
        sessionsByDay[dateKey] = [];
      }
      sessionsByDay[dateKey].push(session);
    });

    // Calculate progress based on the most recent day's sessions
    const days = Object.keys(sessionsByDay);
    if (days.length === 0) return 0;

    // Sort days to get the most recent
    days.sort().reverse();
    const mostRecentDay = days[0];
    const sessionsToday = sessionsByDay[mostRecentDay]?.length || 0;

    return Math.min(100, Math.round((sessionsToday / goalSessionsPerDay) * 100));
  };

  const streak = calculateStreak();
  const goalProgress = calculateGoalProgress();

  return (
    <WidgetCard
      title="Practice Consistency"
      theme="green"
      fullHeight
      action={
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {streak > 0 && (
            <span className="text-xs text-green-400 mr-2">
              {streak} day streak!
            </span>
          )}
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
      {/* Weekly goal progress */}
      <div className="mb-5">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm font-medium text-white">Weekly Practice Goal</h3>
          <span className="text-xs text-green-400">{goalProgress}% complete</span>
        </div>
        <div className="h-2.5 w-full bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30">
          <motion.div
            className="h-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 rounded-full relative overflow-hidden"
            initial={{ width: 0 }}
            animate={{ width: `${goalProgress}%` }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
          >
            {/* Animated shine effect */}
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
        <p className="text-xs text-gray-400 mt-1">Goal: 3 practice sessions per day</p>
      </div>

      {/* Recent practice sessions */}
      <h3 className="text-sm font-medium text-white mb-3">Recent Practice Sessions</h3>
      <div className="space-y-4">
        {practiceData && practiceData.length > 0 ? (
          practiceData.map((session, index) => {
            const isHovered = hoveredSession === index;
            const isExpanded = expandedSession === index;
            const intensity = getIntensityLevel(session.duration, session.score);
            const theme = getIntensityTheme(intensity);

            return (
              <motion.div
                key={index}
                className={`p-4 rounded-xl ${isExpanded ? "scale-[1.02]" : ""} ${
                  isHovered || isExpanded
                    ? `bg-gradient-to-br ${theme.hoverBg} border ${theme.hoverBorder} shadow-lg ${theme.shadow}`
                    : `${theme.bg} border border-gray-700/50`
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
                onMouseEnter={() => setHoveredSession(index)}
                onMouseLeave={() => setHoveredSession(null)}
                onClick={() => toggleSessionExpansion(index)}
                whileHover={{
                  y: -3,
                  transition: { duration: 0.15, type: "tween" }
                }}
                layout="position"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex items-center">
                      <motion.div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${theme.gradient} mr-2 flex items-center justify-center`}
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
                      />
                      <h3 className="text-base font-medium text-white dashboard-card-title">
                        {session.date}
                      </h3>
                    </div>
                    <div className="ml-4 text-center flex items-center">
                      <motion.span
                        className={`text-xs ml-4 px-2 py-1 rounded-full ${theme.bg} ${theme.text} border ${theme.border}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {intensity} Intensity
                      </motion.span>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 mb-3 pl-5">
                    {formatDuration(session.duration)} practice session with {session.wordCount} words spoken
                    {intensity === "Low" && (
                      <span className="ml-4 inline-flex items-center">
                        <motion.span
                          className="inline-block ml-1 text-xs px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            Quick Session
                          </span>
                        </motion.span>
                      </span>
                    )}
                  </p>

                  {/* Improvement tip for low intensity sessions */}
                  {intensity === "Low" && (isExpanded || isHovered) && (
                    <motion.div
                      className="mt-2 p-2 rounded-lg bg-purple-900/20 border border-purple-500/20"
                      initial={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      animate={{ opacity: 1, height: 'auto', overflow: 'visible' }}
                      exit={{ opacity: 0, height: 0, overflow: 'hidden' }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs text-purple-300">
                          <span className="font-medium">Improvement Tip:</span> Try to extend your practice sessions to at least 3 minutes for better skill development. Focus on one specific speaking skill per session.
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* Session details */}
                  <AnimatePresence>
                    {(isExpanded || isHovered) && (
                      <motion.div
                        className="mt-4 grid grid-cols-3 gap-2 text-xs"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Score Box */}
                        <motion.div
                          className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                          whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.15 }}
                        >
                          <span className="text-gray-400 mb-1">Score</span>
                          <span className={theme.text + " font-medium"}>{session.score}%</span>
                        </motion.div>

                        {/* Clarity Box */}
                        <motion.div
                          className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                          whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.15, delay: 0.05 }}
                        >
                          <span className="text-gray-400 mb-1">Clarity</span>
                          <span className="text-blue-400 font-medium">{session.clarity}</span>
                        </motion.div>

                        {/* Filler Words Box */}
                        <motion.div
                          className="flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm"
                          whileHover={{ y: -2, boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)" }}
                          initial={{ scale: 0.95, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.15, delay: 0.1 }}
                        >
                          <span className="text-gray-400 mb-1">Filler Words</span>
                          <span className="text-purple-400 font-medium">{session.fillerWords}</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Action button */}
                  <AnimatePresence mode="sync">
                    {(isExpanded || isHovered) && (
                      <motion.a
                        href={`/dashboard/practice/${session.id}`}
                        className={`mt-4 w-full py-2 px-4 rounded-lg text-white text-sm font-medium transition-all bg-gradient-to-r ${theme.buttonGradient} block text-center`}
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 5 }}
                        transition={{ duration: 0.2, delay: 0.1 }}
                        whileHover={{
                          scale: 1.02,
                          boxShadow: `0 0 10px ${theme.buttonShadow}`
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <div className="flex items-center justify-center">
                          <span>View Session Details</span>
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
                      </motion.a>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <h3 className="text-lg font-medium text-gray-300 mb-2">No Practice Sessions Yet</h3>
            <p className="text-sm text-gray-400 mb-4">Complete your first practice session to start tracking your consistency.</p>
            <motion.button
              className="py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Practicing
            </motion.button>
          </div>
        )}
      </div>
    </WidgetCard>
  );
};

export default PracticeConsistencyWidget;
