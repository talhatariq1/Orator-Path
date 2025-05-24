"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const RecommendationsWidget = ({ recommendations }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextRecommendation = () => {
    setActiveIndex((prev) => (prev + 1) % recommendations.length);
  };
  
  const prevRecommendation = () => {
    setActiveIndex((prev) => (prev - 1 + recommendations.length) % recommendations.length);
  };
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5 overflow-hidden">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Personalized Recommendations</h3>
        <div className="flex space-x-2">
          <button 
            onClick={prevRecommendation}
            className="p-1 rounded-full hover:bg-[#232429] text-gray-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button 
            onClick={nextRecommendation}
            className="p-1 rounded-full hover:bg-[#232429] text-gray-400 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      <div className="relative h-[220px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <div className="flex flex-col h-full">
              <div className={`p-3 rounded-lg ${recommendations[activeIndex].bgColor} mb-3 flex items-center`}>
                <div className={`p-2 rounded-full ${recommendations[activeIndex].iconBgColor}`}>
                  {recommendations[activeIndex].icon}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-white">{recommendations[activeIndex].title}</h4>
                  <p className="text-xs text-white/80">{recommendations[activeIndex].category}</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-300 mb-4 flex-grow">
                {recommendations[activeIndex].description}
              </p>
              
              <div className="flex justify-between items-center mt-auto">
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {recommendations[activeIndex].users.map((user, i) => (
                      <div 
                        key={i} 
                        className="w-6 h-6 rounded-full bg-gray-700 border-2 border-[#1A1B20] flex items-center justify-center text-xs text-white overflow-hidden"
                      >
                        {user.avatar ? (
                          <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
                        ) : (
                          user.name.charAt(0)
                        )}
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-400 ml-2">
                    {recommendations[activeIndex].users.length} people tried this
                  </span>
                </div>
                
                <Link 
                  href={recommendations[activeIndex].link}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium ${recommendations[activeIndex].buttonColor} transition-colors`}
                >
                  Try Now
                </Link>
              </div>
              
              {/* Progress indicator */}
              <div className="flex justify-center space-x-1 mt-4">
                {recommendations.map((_, index) => (
                  <div 
                    key={index} 
                    className={`w-2 h-2 rounded-full transition-colors ${index === activeIndex ? 'bg-purple-500' : 'bg-[#232429]'}`}
                    onClick={() => setActiveIndex(index)}
                    style={{ cursor: 'pointer' }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RecommendationsWidget;
