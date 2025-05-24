"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const ProgressTimelineWidget = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusAreas, setFocusAreas] = useState({
    strengths: [],
    improvements: [],
    lastUpdated: "Never"
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Fetch focus areas data
  useEffect(() => {
    const fetchFocusAreas = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/focus-areas');

        if (!response.ok) {
          throw new Error('Failed to fetch focus areas data');
        }

        const data = await response.json();
        console.log('Focus areas data:', data);
        setFocusAreas(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching focus areas:', err);
        setError('Failed to load focus areas data');
      } finally {
        setIsLoading(false);
      }
    };

    fetchFocusAreas();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const glowVariants = {
    glow: {
      boxShadow: [
        "0 0 5px rgba(76, 109, 255, 0.5)",
        "0 0 15px rgba(76, 109, 255, 0.7)",
        "0 0 5px rgba(76, 109, 255, 0.5)"
      ],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  // Combine strengths and improvements into a single array for display
  // Limit to exactly 3 items total - prioritize having at least one of each type if available
  const availableStrengths = focusAreas.strengths || [];
  const availableImprovements = focusAreas.improvements || [];

  let selectedStrengths = [];
  let selectedImprovements = [];

  // Ensure we have at least one of each type if available
  if (availableStrengths.length > 0) {
    selectedStrengths.push(availableStrengths[0]);
  }

  if (availableImprovements.length > 0) {
    selectedImprovements.push(availableImprovements[0]);
  }

  // Fill remaining slots to reach exactly 3 items total
  const remainingSlots = 3 - selectedStrengths.length - selectedImprovements.length;

  if (remainingSlots > 0) {
    // Add more strengths if available
    const additionalStrengths = availableStrengths.slice(selectedStrengths.length, selectedStrengths.length + remainingSlots);
    selectedStrengths = [...selectedStrengths, ...additionalStrengths];

    // If we still have slots and more improvements, add them
    const stillRemainingSlots = 3 - selectedStrengths.length - selectedImprovements.length;
    if (stillRemainingSlots > 0) {
      const additionalImprovements = availableImprovements.slice(selectedImprovements.length, selectedImprovements.length + stillRemainingSlots);
      selectedImprovements = [...selectedImprovements, ...additionalImprovements];
    }
  }

  // Create the final timeline items array
  const timelineItems = [
    ...selectedStrengths.map(strength => ({
      ...strength,
      type: 'strength'
    })),
    ...selectedImprovements.map(improvement => ({
      ...improvement,
      type: 'improvement'
    }))
  ];

  return (
    <WidgetCard
      title="Your Speaking Journey"
      theme="blue"
      action={
        <div className="flex items-center">
          <span className="text-sm text-blue-400">
            {isLoading ? 'Loading...' : `Last updated: ${focusAreas.lastUpdated}`}
          </span>
        </div>
      }
      fullHeight
    >
      {isLoading ? (
        <div className="flex items-center justify-center h-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-gray-700 border-t-blue-500 rounded-full"
          />
          <span className="ml-3 text-gray-400">Loading focus areas...</span>
        </div>
      ) : error ? (
        <div className="flex flex-col items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <p className="text-gray-400 mb-2">{error}</p>
          <p className="text-gray-500 text-sm text-center max-w-md">
            Complete some speech analyses to see your focus areas.
          </p>
        </div>
      ) : timelineItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          <p className="text-gray-400 mb-2">No focus areas available</p>
          <p className="text-gray-500 text-sm text-center max-w-md">
            Complete some speech analyses to see your focus areas.
          </p>
        </div>
      ) : (
        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
        >
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full" />

          {/* Spacer for consistent layout */}
          <div className="mb-4 pl-12"></div>

          {/* Timeline items */}
          <div className="space-y-6 relative">
            {timelineItems.map((item, index) => {
              const isActive = activeIndex === index;
              const isStrength = item.type === 'strength';

              return (
                <motion.div
                  key={item.id}
                  className="relative pl-12"
                  variants={itemVariants}
                  onMouseEnter={() => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className={`absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 transform -translate-x-1/2 ${
                      isStrength
                        ? "bg-green-500 border-green-300"
                        : "bg-purple-500 border-purple-300"
                    }`}
                    variants={pulseVariants}
                    animate="pulse"
                  >
                    {isStrength && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-green-400"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-full w-full text-green-900 p-0.5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </motion.div>
                    )}
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    className={`p-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? isStrength
                          ? "bg-gradient-to-r from-green-900/30 to-blue-900/20 border border-green-500/30"
                          : "bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30"
                        : "bg-gray-800/30 border border-gray-700/50"
                    }`}
                    variants={glowVariants}
                    animate={isActive ? "glow" : ""}
                    whileHover={{
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-base font-medium dashboard-card-title"
                        style={{ color: isStrength ? '#86efac' : '#c4b5fd' }}>
                        {item.title}
                      </h3>
                      <div className="flex items-center">
                        <span
                          className={`text-xs px-2 py-1 rounded-full ${
                            isStrength
                              ? "bg-green-900/50 text-green-300"
                              : "bg-purple-900/50 text-purple-300"
                          }`}
                        >
                          {isStrength ? "Strength" : "Focus Area"}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-gray-300 mb-3">{item.description}</p>

                    {/* Enhancement tip for strengths */}
                    {isStrength && item.enhancement && (
                      <div className="mt-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-2">
                        <p className="text-xs text-blue-300 italic">
                          <span className="font-medium">Tip:</span> {item.enhancement}
                        </p>
                      </div>
                    )}

                    {/* Guidance for focus areas */}
                    {!isStrength && item.guidance && (
                      <div className="mt-3 bg-purple-900/20 border border-purple-500/20 rounded-lg p-2">
                        <p className="text-xs text-purple-300 italic">
                          <span className="font-medium">Guidance:</span> {item.guidance}
                        </p>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      )}
    </WidgetCard>
  );
};

export default ProgressTimelineWidget;
