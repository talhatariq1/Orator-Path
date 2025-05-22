"use client";

import React from "react";
import { motion } from "framer-motion";

const ActivityFeed = ({ activities }) => {
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Recent Activity</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-1">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.3 }}
            className="relative pl-6 py-3 hover:bg-[#232429]/50 rounded-lg transition-colors"
          >
            {/* Timeline line */}
            {index < activities.length - 1 && (
              <div className="absolute left-3 top-8 bottom-0 w-0.5 bg-[#2C2D32]" />
            )}
            
            {/* Activity dot */}
            <div className={`absolute left-0 top-4 w-6 h-6 rounded-full flex items-center justify-center ${activity.iconBg}`}>
              {activity.icon}
            </div>
            
            <div>
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-sm font-medium text-gray-200">{activity.title}</h4>
                  <p className="text-xs text-gray-400 mt-0.5">{activity.description}</p>
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
              
              {/* Optional content preview */}
              {activity.preview && (
                <div className="mt-2 p-2 rounded bg-[#232429] text-xs text-gray-300">
                  {activity.preview}
                </div>
              )}
              
              {/* Optional action buttons */}
              {activity.actions && (
                <div className="mt-2 flex space-x-2">
                  {activity.actions.map((action, i) => (
                    <button
                      key={i}
                      className={`px-2 py-1 text-xs rounded ${action.primary ? 'bg-purple-900/30 text-purple-400' : 'bg-[#232429] text-gray-400'}`}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
