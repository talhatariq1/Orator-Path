"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

// Fallback tips in case API fails
const fallbackTips = [
  {
    id: 1,
    content: "When speaking, aim for clarity over complexity. Simple, well-articulated ideas often have more impact than verbose explanations.",
    dayOfWeek: 0,
    dayName: "Sunday"
  },
  {
    id: 2,
    content: "Practice the 'pause technique' - strategic pauses create emphasis, give your audience time to absorb information, and help you appear more confident and thoughtful.",
    dayOfWeek: 1,
    dayName: "Monday"
  },
  {
    id: 3,
    content: "Make eye contact with different sections of your audience. This creates connection and ensures everyone feels included in your message.",
    dayOfWeek: 2,
    dayName: "Tuesday"
  },
  {
    id: 4,
    content: "Start with a strong hook - a surprising statistic, a compelling story, or a thought-provoking question can immediately capture your audience's attention.",
    dayOfWeek: 3,
    dayName: "Wednesday"
  },
  {
    id: 5,
    content: "End your speeches with a clear call-to-action. Tell your audience exactly what you want them to do, think, or feel after listening to you.",
    dayOfWeek: 4,
    dayName: "Thursday"
  },
  {
    id: 6,
    content: "Use the 'rule of three' in your presentations - grouping ideas in threes makes them more engaging, memorable, and effective.",
    dayOfWeek: 5,
    dayName: "Friday"
  },
  {
    id: 7,
    content: "Record yourself speaking and analyze your body language. Your nonverbal communication often speaks louder than your words.",
    dayOfWeek: 6,
    dayName: "Saturday"
  }
];

const DailySpeakingTipWidget = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dailyTip, setDailyTip] = useState(null);
  const [currentDayName, setCurrentDayName] = useState("");
  const [retryCount, setRetryCount] = useState(0);

  // Import fetchWithRetry from apiUtils
  const { fetchWithRetry } = require('../../../utils/apiUtils');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  // Fetch the daily tip from the API with improved error handling and retry logic
  useEffect(() => {
    // Add a small delay before the first fetch to ensure database connection is ready
    const initialDelay = 300; // 300ms delay before first fetch

    const fetchDailyTip = async () => {
      try {
        setIsLoading(true);

        // Use fetchWithRetry for better error handling and caching
        const result = await fetchWithRetry('/api/daily-speaking-tip', {}, {
          timeout: 5000,         // 5 second timeout
          maxRetries: 2,         // Retry up to 2 times
          retryDelay: 500,       // Start with 500ms delay
          useFallbackCache: true // Use fallback cache if available
        });

        if (!result.success) {
          throw new Error(result.error || 'Failed to fetch daily speaking tip');
        }

        const data = result.data;
        console.log('Daily speaking tip data:', data);

        // Validate the data
        if (!data.tip || !data.tip.content) {
          console.error('Invalid daily speaking tip data format:', data);
          throw new Error('Invalid daily speaking tip data format');
        }

        if (data.status === 'success' || data.tip) {
          setDailyTip(data.tip);
          setCurrentDayName(data.dayName || data.tip.dayName);
          setError(null);
        } else {
          throw new Error('Invalid response format');
        }
      } catch (err) {
        console.error('Error fetching daily speaking tip:', err);

        // If we've retried less than 3 times, try again with increasing delay
        if (retryCount < 3) {
          const retryDelay = 1000 * (retryCount + 1); // Increasing delay: 1s, 2s, 3s
          console.log(`Retrying daily tip fetch in ${retryDelay}ms (attempt ${retryCount + 1}/3)...`);

          setTimeout(() => {
            setRetryCount(prevCount => prevCount + 1);
            // This will trigger the useEffect again due to retryCount dependency
          }, retryDelay);

          // Don't show error or fallback yet, just keep loading state
          return;
        }

        // After all retries, show error and use fallback
        setError('Failed to load daily tip');

        // Use fallback tip based on current day
        const currentDay = new Date().getDay();
        const fallbackTip = fallbackTips.find(tip => tip.dayOfWeek === currentDay) || fallbackTips[0];
        setDailyTip(fallbackTip);

        // Set day name
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        setCurrentDayName(days[currentDay]);
      } finally {
        setIsLoading(false);
      }
    };

    // Add initial delay before first fetch
    const timer = setTimeout(() => {
      fetchDailyTip();
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [retryCount]); // Re-run when retryCount changes

  // Animation variants
  const fadeVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-500 rounded-xl shadow-lg p-6 text-white h-full relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.02 }}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-white/20 rounded-lg mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-xl font-bold widget-title">Daily Speaking Tip</h2>
        </div>

        {/* Day indicator */}
        <motion.div
          className="mb-3"
          initial="hidden"
          animate="visible"
          variants={fadeVariants}
          transition={{ duration: 0.3, delay: 0.5 }}
        >
          <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
            {isLoading ? "Loading..." : currentDayName}
          </span>
        </motion.div>

        {/* Tip content with animation */}
        <div className="h-[150px] relative overflow-hidden">
          {isLoading ? (
            <motion.div
              className="flex items-center justify-center h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <span className="ml-3 text-white/70">Loading tip...</span>
            </motion.div>
          ) : error ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white/70 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-white/70 text-center">{error}</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.p
                key={dailyTip?.content || "loading"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white text-lg font-medium leading-relaxed absolute inset-0"
              >
                "{dailyTip?.content}"
              </motion.p>
            </AnimatePresence>
          )}
        </div>

        {/* Footer with source indication */}
        <motion.div
          className="mt-4 text-xs text-white/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Tip refreshes daily
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DailySpeakingTipWidget;
