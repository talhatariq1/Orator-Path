"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PracticeHistoryWidget = ({ practices }) => {
  const [expandedPractice, setExpandedPractice] = useState(null);
  
  // Toggle practice expansion
  const togglePractice = (id) => {
    setExpandedPractice(expandedPractice === id ? null : id);
  };
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Practice History</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-1">
        {practices.map((practice, index) => (
          <motion.div
            key={practice.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            className="relative"
          >
            {/* Timeline connector */}
            {index < practices.length - 1 && (
              <div className="absolute left-3 top-10 bottom-0 w-0.5 bg-[#2C2D32]" />
            )}
            
            <motion.div 
              className={`relative pl-7 py-3 pr-3 rounded-lg transition-all ${
                expandedPractice === practice.id 
                  ? 'bg-[#232429] border border-[#2C2D32]/80' 
                  : 'hover:bg-[#232429]/50'
              }`}
              whileHover={{ x: expandedPractice === practice.id ? 0 : 3 }}
              onClick={() => togglePractice(practice.id)}
            >
              {/* Timeline dot */}
              <div className={`absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center ${practice.iconBg || 'bg-purple-900/30'}`}>
                {practice.icon || (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-200">{practice.title}</h4>
                  <div className="flex items-center text-xs text-gray-400 mt-0.5">
                    <span>{practice.date}</span>
                    <span className="mx-2">•</span>
                    <span>{practice.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-900/30 text-green-400">
                    {practice.score}%
                  </div>
                  <motion.button
                    className="ml-2 text-gray-400 hover:text-gray-200"
                    initial={false}
                    animate={{ rotate: expandedPractice === practice.id ? 180 : 0 }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.button>
                </div>
              </div>
              
              {/* Expanded content */}
              <AnimatePresence>
                {expandedPractice === practice.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 pt-3 border-t border-[#2C2D32]/80">
                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        {practice.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="bg-[#1A1B20] rounded-lg p-2 text-center">
                            <div className="text-xs text-gray-400 mb-1">{metric.label}</div>
                            <div className={`text-sm font-medium ${getMetricColor(metric.value)}`}>
                              {metric.value}%
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Feedback */}
                      {practice.feedback && (
                        <div className="bg-[#1A1B20] rounded-lg p-3 mb-3">
                          <h5 className="text-xs font-medium text-gray-300 mb-1">AI Feedback</h5>
                          <p className="text-xs text-gray-400">{practice.feedback}</p>
                        </div>
                      )}
                      
                      {/* Actions */}
                      <div className="flex space-x-2">
                        <motion.button 
                          className="px-2 py-1 text-xs bg-purple-900/30 text-purple-400 rounded hover:bg-purple-900/40 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          View Details
                        </motion.button>
                        <motion.button 
                          className="px-2 py-1 text-xs bg-blue-900/30 text-blue-400 rounded hover:bg-blue-900/40 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Compare
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="mt-4 w-full py-2 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Practice Sessions
      </motion.button>
    </div>
  );
};

// Helper function to get color based on metric value
const getMetricColor = (value) => {
  if (value >= 80) return "text-green-400";
  if (value >= 60) return "text-blue-400";
  if (value >= 40) return "text-yellow-400";
  return "text-red-400";
};

export default PracticeHistoryWidget;
