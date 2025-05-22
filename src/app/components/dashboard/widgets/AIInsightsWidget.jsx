"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";

const AIInsightsWidget = ({ insights }) => {
  const [activeInsight, setActiveInsight] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // Handle next insight
  const nextInsight = () => {
    setActiveInsight((prev) => (prev + 1) % insights.length);
  };

  // Handle previous insight
  const prevInsight = () => {
    setActiveInsight((prev) => (prev - 1 + insights.length) % insights.length);
  };

  // Autoplay insights
  useEffect(() => {
    if (!autoplay) return;

    const timer = setTimeout(() => {
      nextInsight();
    }, 8000);

    return () => clearTimeout(timer);
  }, [activeInsight, autoplay]);

  // Current insight
  const currentInsight = insights[activeInsight];

  return (
    <WidgetCard
      title="AI Insights"
      theme="yellow"
      action={
        <div className="flex space-x-2">
          <motion.button
            className="p-1 rounded-full bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setAutoplay(!autoplay)}
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
            className="p-1 rounded-full bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevInsight}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </motion.button>
          <motion.button
            className="p-1 rounded-full bg-yellow-900/30 text-yellow-400 hover:bg-yellow-900/50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextInsight}
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
          {autoplay && (
            <motion.div
              className="h-full bg-yellow-500"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 8, ease: "linear" }}
              key={activeInsight}
            />
          )}
        </div>

        <div className="pt-3 h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentInsight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-start mb-4">
                <div className={`p-2.5 rounded-lg ${currentInsight.iconBg} flex-shrink-0`}>
                  <div className={currentInsight.iconColor}>
                    {currentInsight.icon}
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-base font-medium text-yellow-300">{currentInsight.title}</h4>
                  <p className="text-xs text-yellow-500/80">{currentInsight.category}</p>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${currentInsight.bgColor} border ${currentInsight.borderColor} mb-4 flex-grow`}>
                <p className="text-sm text-gray-300 leading-relaxed">{currentInsight.content}</p>
              </div>

              {currentInsight.recommendations && (
                <div className="mb-4">
                  <h5 className="text-xs font-medium text-yellow-500/80 mb-2">Recommendations:</h5>
                  <ul className="space-y-2">
                    {currentInsight.recommendations.map((rec, recIndex) => (
                      <motion.li
                        key={recIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * recIndex, duration: 0.3 }}
                        className="flex items-start"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 mr-2 mt-0.5 ${currentInsight.iconColor}`} viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-300">{rec}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-auto flex justify-between items-center">
                <div className="flex space-x-1">
                  {insights.map((_, i) => (
                    <button
                      key={i}
                      className={`w-2 h-2 rounded-full ${i === activeInsight ? 'bg-yellow-500' : 'bg-gray-700'}`}
                      onClick={() => setActiveInsight(i)}
                    />
                  ))}
                </div>
                <motion.button
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium ${currentInsight.actionBg} ${currentInsight.actionColor} border ${currentInsight.borderColor}`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {currentInsight.actionText}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </WidgetCard>
  );
};

export default AIInsightsWidget;
