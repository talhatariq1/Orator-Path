"use client";

import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const PersonalizedRecommendationsWidget = ({ recommendations = [], lastUpdated = "Never" }) => {
  // Group recommendations by type
  const groupedRecommendations = useMemo(() => {
    try {
      // Validate recommendations array
      if (!Array.isArray(recommendations)) {
        console.error("Recommendations is not an array:", recommendations);
        return { priority: [], next_step: [], growth_area: [] };
      }

      // Group recommendations by type
      const grouped = {
        priority: [],
        next_step: [],
        growth_area: []
      };

      recommendations.forEach(rec => {
        if (rec && typeof rec === 'object' && rec.type) {
          if (grouped[rec.type]) {
            grouped[rec.type].push(rec);
          } else {
            // If type doesn't match our predefined types, put it in growth_area as fallback
            grouped.growth_area.push({
              ...rec,
              type: 'growth_area' // Override with a valid type
            });
          }
        } else if (rec) {
          // Handle malformed recommendation
          console.warn("Malformed recommendation:", rec);
          grouped.growth_area.push({
            type: 'growth_area',
            category: 'Growth Area',
            guidance: typeof rec === 'string' ? rec : 'Focus on improving your speaking skills',
            issue: ''
          });
        }
      });

      return grouped;
    } catch (error) {
      console.error("Error grouping recommendations:", error);
      return { priority: [], next_step: [], growth_area: [] };
    }
  }, [recommendations]);

  // Get array of types that have recommendations
  const availableTypes = useMemo(() => {
    return Object.keys(groupedRecommendations).filter(
      type => groupedRecommendations[type].length > 0
    );
  }, [groupedRecommendations]);

  // State for tracking which type and index we're currently viewing
  const [activeType, setActiveType] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize activeType when component mounts or recommendations change
  useEffect(() => {
    if (availableTypes.length > 0 && !activeType) {
      setActiveType(availableTypes[0]);
      setActiveIndex(0);
    } else if (availableTypes.length > 0 && !availableTypes.includes(activeType)) {
      // If current activeType is no longer available, reset to first available type
      setActiveType(availableTypes[0]);
      setActiveIndex(0);
    } else if (availableTypes.length === 0) {
      setActiveType(null);
      setActiveIndex(0);
    }
  }, [availableTypes, activeType]);

  // Handle next recommendation group
  const nextRecommendation = () => {
    if (availableTypes.length === 0) return;

    const currentTypeIndex = availableTypes.indexOf(activeType);
    const currentType = activeType;
    const currentGroupLength = groupedRecommendations[currentType].length;

    // If we have more items in the current type group
    if (activeIndex + 2 < currentGroupLength) {
      // Move to next pair within the same type
      setActiveIndex(activeIndex + 2);
    } else {
      // Move to the next type
      const nextTypeIndex = (currentTypeIndex + 1) % availableTypes.length;
      setActiveType(availableTypes[nextTypeIndex]);
      setActiveIndex(0); // Reset to beginning of next type
    }
  };

  // Handle previous recommendation group
  const prevRecommendation = () => {
    if (availableTypes.length === 0) return;

    const currentTypeIndex = availableTypes.indexOf(activeType);
    const currentType = activeType;

    // If we have previous items in the current type group
    if (activeIndex >= 2) {
      // Move to previous pair within the same type
      setActiveIndex(activeIndex - 2);
    } else {
      // Move to the previous type
      const prevTypeIndex = (currentTypeIndex - 1 + availableTypes.length) % availableTypes.length;
      const prevType = availableTypes[prevTypeIndex];
      const prevGroupLength = groupedRecommendations[prevType].length;

      setActiveType(prevType);
      // Set index to last pair (or single item) of previous type
      setActiveIndex(Math.floor((prevGroupLength - 1) / 2) * 2);
    }
  };

  // Autoplay recommendations
  useEffect(() => {
    if (!autoplay || availableTypes.length === 0) return;

    const timer = setTimeout(() => {
      nextRecommendation();
    }, 15000); // 15 seconds per recommendation pair

    return () => clearTimeout(timer);
  }, [activeType, activeIndex, autoplay, availableTypes.length]);

  // Set isLoaded to true after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Get icon and colors based on recommendation type
  const getRecommendationStyle = (recommendation) => {
    const type = recommendation?.type || 'growth_area';
    const category = (recommendation?.category || '').toLowerCase();

    // Default styles
    let iconBg = "bg-purple-900/30";
    let iconColor = "text-purple-400";
    let bgColor = "bg-purple-900/10";
    let borderColor = "border-purple-900/20";
    let actionBg = "bg-purple-900/30";
    let actionColor = "text-purple-400";
    let icon = (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
      </svg>
    );

    // Priority improvements (red)
    if (type === 'priority') {
      iconBg = "bg-red-900/30";
      iconColor = "text-red-400";
      bgColor = "bg-red-900/10";
      borderColor = "border-red-900/20";
      actionBg = "bg-red-900/30";
      actionColor = "text-red-400";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      );
    }
    // Next steps (green)
    else if (type === 'next_step') {
      iconBg = "bg-green-900/30";
      iconColor = "text-green-400";
      bgColor = "bg-green-900/10";
      borderColor = "border-green-900/20";
      actionBg = "bg-green-900/30";
      actionColor = "text-green-400";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
        </svg>
      );
    }
    // Customize by category
    else if (category.includes('pace') || category.includes('speed') || category.includes('rate')) {
      iconBg = "bg-yellow-900/30";
      iconColor = "text-yellow-400";
      bgColor = "bg-yellow-900/10";
      borderColor = "border-yellow-900/20";
      actionBg = "bg-yellow-900/30";
      actionColor = "text-yellow-400";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      );
    }
    else if (category.includes('vocabulary') || category.includes('word')) {
      iconBg = "bg-blue-900/30";
      iconColor = "text-blue-400";
      bgColor = "bg-blue-900/10";
      borderColor = "border-blue-900/20";
      actionBg = "bg-blue-900/30";
      actionColor = "text-blue-400";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
        </svg>
      );
    }
    else if (category.includes('clarity') || category.includes('articulation') || category.includes('pronunciation')) {
      iconBg = "bg-indigo-900/30";
      iconColor = "text-indigo-400";
      bgColor = "bg-indigo-900/10";
      borderColor = "border-indigo-900/20";
      actionBg = "bg-indigo-900/30";
      actionColor = "text-indigo-400";
      icon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
        </svg>
      );
    }

    return {
      iconBg,
      iconColor,
      bgColor,
      borderColor,
      actionBg,
      actionColor,
      icon
    };
  };

  // Get the current recommendations to display (up to 2 of the same type)
  const getCurrentRecommendations = () => {
    if (!activeType || availableTypes.length === 0) {
      return { first: null, second: null, typeLabel: "" };
    }

    const currentTypeRecs = groupedRecommendations[activeType] || [];

    // Get the first recommendation
    const first = currentTypeRecs[activeIndex] || null;

    // Get the second recommendation (if available)
    const second = activeIndex + 1 < currentTypeRecs.length ? currentTypeRecs[activeIndex + 1] : null;

    // Get type label for display
    let typeLabel = "Recommendations";
    if (activeType === 'priority') typeLabel = "Priority Improvements";
    else if (activeType === 'next_step') typeLabel = "Recommended Next Steps";
    else if (activeType === 'growth_area') typeLabel = "Growth Areas";

    return { first, second, typeLabel };
  };

  // Get current recommendations
  const { first: currentRecommendation, second: secondRecommendation, typeLabel } = getCurrentRecommendations();

  // Get styles for current recommendations
  const currentStyle = currentRecommendation ? getRecommendationStyle(currentRecommendation) : {};
  const secondStyle = secondRecommendation ? getRecommendationStyle(secondRecommendation) : {};

  return (
    <WidgetCard
      title="Personalized Recommendations"
      theme="purple"
      action={
        <div className="flex space-x-2">
          <motion.button
            className="p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setAutoplay(!autoplay)}
            disabled={availableTypes.length === 0}
          >
            {autoplay ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </motion.button>
          <motion.button
            className="p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevRecommendation}
            disabled={availableTypes.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
          <motion.button
            className="p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextRecommendation}
            disabled={availableTypes.length === 0}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      }
      fullHeight
    >
      <div className="relative h-full">
        {/* Progress bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden">
          {autoplay && availableTypes.length > 0 && (
            <motion.div
              className="h-full bg-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 15, ease: "linear" }}
              key={`${activeType}-${activeIndex}`}
            />
          )}
        </div>

        <div className="pt-3 h-full">
          {availableTypes.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <p className="text-gray-400 mb-2">No recommendations available</p>
              <p className="text-gray-500 text-sm max-w-md">
                Complete more speech practice sessions to receive personalized recommendations for improvement.
              </p>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activeType}-${activeIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="h-full flex flex-col"
              >
                {/* Title section */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-medium text-purple-300">{typeLabel}</h3>
                  <p className="text-xs text-purple-500/80">Based on your recent practice sessions</p>
                </div>

                {/* Two-column layout for recommendations */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
                  {/* First recommendation */}
                  {currentRecommendation && (
                    <div className="flex flex-col h-full">
                      <div className="flex items-start mb-3">
                        <div className={`p-2 rounded-lg ${currentStyle.iconBg} flex-shrink-0`}>
                          <div className={currentStyle.iconColor}>
                            {currentStyle.icon}
                          </div>
                        </div>
                        <div className="ml-2">
                          <h4 className="text-sm font-medium text-purple-300">{currentRecommendation.category}</h4>
                          <p className="text-xs text-purple-500/80">
                            {currentRecommendation.type === 'priority' ? 'Priority Improvement' :
                             currentRecommendation.type === 'next_step' ? 'Recommended Next Step' :
                             'Growth Area'}
                          </p>
                        </div>
                      </div>

                      {currentRecommendation.issue && (
                        <div className={`p-3 rounded-lg ${currentStyle.bgColor} border ${currentStyle.borderColor} mb-3`}>
                          <p className="text-xs text-gray-300 font-medium">{currentRecommendation.issue}</p>
                        </div>
                      )}

                      <div className={`p-3 rounded-lg ${currentStyle.bgColor} border ${currentStyle.borderColor} flex-grow`}>
                        <p className="text-xs text-gray-300 leading-relaxed">{currentRecommendation.guidance || currentRecommendation.impact || ''}</p>
                      </div>
                    </div>
                  )}

                  {/* Second recommendation - only show if we have more than one recommendation */}
                  {secondRecommendation && (
                    <div className="flex flex-col h-full">
                      <div className="flex items-start mb-3">
                        <div className={`p-2 rounded-lg ${secondStyle.iconBg} flex-shrink-0`}>
                          <div className={secondStyle.iconColor}>
                            {secondStyle.icon}
                          </div>
                        </div>
                        <div className="ml-2">
                          <h4 className="text-sm font-medium text-purple-300">{secondRecommendation.category}</h4>
                          <p className="text-xs text-purple-500/80">
                            {secondRecommendation.type === 'priority' ? 'Priority Improvement' :
                             secondRecommendation.type === 'next_step' ? 'Recommended Next Step' :
                             'Growth Area'}
                          </p>
                        </div>
                      </div>

                      {secondRecommendation.issue && (
                        <div className={`p-3 rounded-lg ${secondStyle.bgColor} border ${secondStyle.borderColor} mb-3`}>
                          <p className="text-xs text-gray-300 font-medium">{secondRecommendation.issue}</p>
                        </div>
                      )}

                      <div className={`p-3 rounded-lg ${secondStyle.bgColor} border ${secondStyle.borderColor} flex-grow`}>
                        <p className="text-xs text-gray-300 leading-relaxed">{secondRecommendation.guidance || secondRecommendation.impact || ''}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Pagination indicators */}
                <div className="mt-4 flex justify-center items-center">
                  {/* Type indicators */}
                  <div className="flex space-x-3">
                    {availableTypes.map((type, i) => {
                      const isActiveType = type === activeType;
                      const typeColor = type === 'priority' ? 'bg-red-500' :
                                        type === 'next_step' ? 'bg-green-500' : 'bg-purple-500';
                      const inactiveColor = type === 'priority' ? 'bg-red-900/30' :
                                           type === 'next_step' ? 'bg-green-900/30' : 'bg-purple-900/30';

                      return (
                        <button
                          key={type}
                          className={`px-2 py-1 rounded-full text-xs ${isActiveType ? typeColor : inactiveColor} transition-colors`}
                          onClick={() => {
                            setActiveType(type);
                            setActiveIndex(0);
                          }}
                        >
                          {type === 'priority' ? 'Priority' :
                           type === 'next_step' ? 'Next Steps' : 'Growth'}
                        </button>
                      );
                    })}
                  </div>

                  {/* Page indicators (if more than one page in current type) */}
                  {activeType && groupedRecommendations[activeType].length > 2 && (
                    <div className="ml-4 flex space-x-1">
                      {Array.from({
                        length: Math.ceil(groupedRecommendations[activeType].length / 2)
                      }).map((_, i) => {
                        const isActivePage = Math.floor(activeIndex / 2) === i;
                        return (
                          <button
                            key={i}
                            className={`w-2 h-2 rounded-full ${isActivePage ? 'bg-purple-500' : 'bg-gray-700'}`}
                            onClick={() => setActiveIndex(i * 2)}
                          />
                        );
                      })}
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </WidgetCard>
  );
};

export default PersonalizedRecommendationsWidget;
