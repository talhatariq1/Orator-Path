"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AchievementBadgesWidget = ({ achievements }) => {
  const [selectedBadge, setSelectedBadge] = useState(null);
  
  // Filter achievements by status
  const earnedBadges = achievements.filter(badge => badge.earned);
  const inProgressBadges = achievements.filter(badge => !badge.earned);
  
  // Handle badge click
  const handleBadgeClick = (badge) => {
    setSelectedBadge(selectedBadge?.id === badge.id ? null : badge);
  };
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Achievements</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All
        </button>
      </div>
      
      {/* Badge detail modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 inset-0 bg-black/60 flex items-center justify-center p-4"
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div 
              className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-16 h-16 rounded-full ${selectedBadge.earned ? selectedBadge.bgColor : 'bg-gray-800'} flex items-center justify-center`}>
                  <div className="w-12 h-12 rounded-full bg-[#1A1B20] flex items-center justify-center">
                    {selectedBadge.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-200">{selectedBadge.name}</h3>
                  <p className="text-sm text-gray-400">{selectedBadge.category}</p>
                </div>
                <button 
                  className="ml-auto text-gray-400 hover:text-gray-200"
                  onClick={() => setSelectedBadge(null)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <p className="text-gray-300 mb-4">{selectedBadge.description}</p>
              
              {selectedBadge.earned ? (
                <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-3 text-sm text-green-400">
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Earned on {selectedBadge.earnedDate}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-3 text-sm text-blue-400">
                    <p className="mb-2">Progress: {selectedBadge.progress}%</p>
                    <div className="w-full bg-[#232429] rounded-full h-1.5">
                      <motion.div 
                        className="h-1.5 rounded-full bg-blue-500"
                        initial={{ width: 0 }}
                        animate={{ width: `${selectedBadge.progress}%` }}
                        transition={{ duration: 1 }}
                      />
                    </div>
                  </div>
                  
                  <div className="bg-[#232429] rounded-lg p-3 text-sm text-gray-300">
                    <h4 className="font-medium mb-1">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-400">
                      {selectedBadge.requirements.map((req, index) => (
                        <li key={index} className={req.completed ? 'text-green-400' : ''}>
                          {req.text}
                          {req.completed && (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline ml-1" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Earned badges */}
      {earnedBadges.length > 0 && (
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-400 mb-3">Earned Badges</h4>
          <div className="grid grid-cols-4 gap-2">
            {earnedBadges.map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleBadgeClick(badge)}
              >
                <div className={`w-12 h-12 rounded-full ${badge.bgColor} flex items-center justify-center mb-1 shadow-lg`}>
                  <div className="w-9 h-9 rounded-full bg-[#1A1B20] flex items-center justify-center">
                    {badge.icon}
                  </div>
                </div>
                <span className="text-xs text-gray-400 text-center truncate w-full">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      {/* In progress badges */}
      {inProgressBadges.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-3">In Progress</h4>
          <div className="grid grid-cols-4 gap-2">
            {inProgressBadges.slice(0, 4).map((badge, index) => (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.05 * index, duration: 0.3 }}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => handleBadgeClick(badge)}
              >
                <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center mb-1 relative">
                  <div className="w-9 h-9 rounded-full bg-[#1A1B20] flex items-center justify-center opacity-50">
                    {badge.icon}
                  </div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center">
                    {badge.progress}%
                  </div>
                </div>
                <span className="text-xs text-gray-500 text-center truncate w-full">{badge.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      )}
      
      <motion.button 
        className="mt-4 w-full py-2 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        View All Achievements
      </motion.button>
    </div>
  );
};

export default AchievementBadgesWidget;
