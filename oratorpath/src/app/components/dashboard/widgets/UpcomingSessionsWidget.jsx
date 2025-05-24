"use client";

import React from "react";
import { motion } from "framer-motion";

const UpcomingSessionsWidget = ({ sessions }) => {
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Upcoming Sessions</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          Schedule New
        </button>
      </div>
      
      <div className="space-y-3">
        {sessions.length > 0 ? (
          sessions.map((session, index) => (
            <motion.div
              key={session.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
              className="relative bg-[#232429] rounded-lg p-4 border border-[#2C2D32]/80 hover:border-purple-500/30 transition-all"
              whileHover={{ 
                y: -3,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Date indicator */}
              <div className="absolute -left-2 top-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs font-medium px-2 py-1 rounded shadow-lg">
                {session.date}
              </div>
              
              <div className="pl-14">
                <h4 className="text-gray-200 font-medium">{session.title}</h4>
                <div className="flex items-center text-xs text-gray-400 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>{session.time}</span>
                  
                  {session.duration && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{session.duration}</span>
                    </>
                  )}
                  
                  {session.type && (
                    <>
                      <span className="mx-2">•</span>
                      <span>{session.type}</span>
                    </>
                  )}
                </div>
                
                {/* Optional description */}
                {session.description && (
                  <p className="text-xs text-gray-500 mt-2">{session.description}</p>
                )}
                
                {/* Action buttons */}
                <div className="flex space-x-2 mt-3">
                  <motion.button 
                    className="px-2 py-1 text-xs bg-purple-900/30 text-purple-400 rounded hover:bg-purple-900/40 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Start
                  </motion.button>
                  <motion.button 
                    className="px-2 py-1 text-xs bg-[#2C2D32] text-gray-400 rounded hover:bg-[#35363B] transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Reschedule
                  </motion.button>
                </div>
              </div>
              
              {/* Status indicator */}
              {session.status && (
                <div className={`absolute top-2 right-2 px-1.5 py-0.5 rounded text-xs font-medium
                  ${session.status === 'confirmed' ? 'bg-green-900/30 text-green-400' : 
                    session.status === 'pending' ? 'bg-amber-900/30 text-amber-400' : 
                    'bg-blue-900/30 text-blue-400'}`}
                >
                  {session.status.charAt(0).toUpperCase() + session.status.slice(1)}
                </div>
              )}
            </motion.div>
          ))
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-400 mb-3">No upcoming sessions</p>
            <motion.button 
              className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-lg border border-purple-500/30 hover:bg-purple-900/40 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Your First Session
            </motion.button>
          </div>
        )}
      </div>
      
      {sessions.length > 0 && (
        <motion.button 
          className="mt-4 w-full py-2 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          View All Sessions
        </motion.button>
      )}
    </div>
  );
};

export default UpcomingSessionsWidget;
