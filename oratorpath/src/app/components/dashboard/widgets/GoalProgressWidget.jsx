"use client";

import React from "react";
import { motion } from "framer-motion";

const GoalProgressWidget = ({ goals }) => {
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Goals & Achievements</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {goals.map((goal, index) => (
          <motion.div 
            key={goal.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            className="relative"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${goal.completed ? 'bg-green-900/30 text-green-400' : 'bg-[#232429] text-gray-400'}`}>
                  {goal.completed ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-200">{goal.title}</h4>
                  <p className="text-xs text-gray-400">{goal.description}</p>
                </div>
              </div>
              <div className="text-right">
                <span className={`text-sm font-medium ${goal.completed ? 'text-green-400' : 'text-gray-400'}`}>
                  {goal.progress}%
                </span>
                {goal.dueDate && !goal.completed && (
                  <p className="text-xs text-gray-500">Due {goal.dueDate}</p>
                )}
                {goal.completedDate && goal.completed && (
                  <p className="text-xs text-gray-500">Completed {goal.completedDate}</p>
                )}
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full bg-[#232429] rounded-full h-1.5">
              <motion.div 
                className={`h-1.5 rounded-full ${goal.completed ? 'bg-green-500' : 'bg-purple-500'}`}
                initial={{ width: 0 }}
                animate={{ width: `${goal.progress}%` }}
                transition={{ duration: 1, delay: 0.2 * index }}
              />
            </div>
            
            {/* Reward badge for completed goals */}
            {goal.completed && goal.reward && (
              <motion.div 
                className="absolute -right-2 -top-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-xs text-white px-2 py-0.5 rounded-full shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5 + (0.1 * index), type: "spring" }}
              >
                {goal.reward}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.button 
        className="mt-4 w-full py-2 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        + Add New Goal
      </motion.button>
    </div>
  );
};

export default GoalProgressWidget;
