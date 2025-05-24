"use client";

import React from "react";
import { motion } from "framer-motion";

const StatsCardGrid = ({ stats }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };
  
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          variants={itemVariants}
          whileHover={{ 
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
          }}
          className="bg-[#1A1B20] rounded-xl shadow-md p-6 border border-[#2C2D32]/80 transition-all duration-300"
        >
          <div className="flex items-center">
            <div className={`p-3 rounded-lg ${stat.bgColor || 'bg-[#232429]'}`}>
              {stat.icon}
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">{stat.title}</p>
              <div className="flex items-baseline">
                <p className="text-2xl font-semibold text-gray-200">{stat.value}</p>
                {stat.change && (
                  <p className={`ml-2 text-sm ${stat.isPositive ? 'text-green-500' : 'text-red-500'} flex items-center`}>
                    {stat.isPositive ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                      </svg>
                    )}
                    {stat.change}
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Optional trend line */}
          {stat.trend && (
            <div className="mt-4 h-10">
              <svg className="w-full h-full" viewBox="0 0 100 30">
                <defs>
                  <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor={stat.trendColor || "#8A3AEA"} stopOpacity="0.5" />
                    <stop offset="100%" stopColor={stat.trendColor || "#8A3AEA"} stopOpacity="0" />
                  </linearGradient>
                </defs>
                
                {/* Area fill */}
                <path
                  d={`M0 ${30 - stat.trend[0]} ${stat.trend.map((point, i) => `L ${(i / (stat.trend.length - 1)) * 100} ${30 - point}`).join(' ')} L 100 30 L 0 30 Z`}
                  fill={`url(#gradient-${index})`}
                />
                
                {/* Line */}
                <path
                  d={`M0 ${30 - stat.trend[0]} ${stat.trend.map((point, i) => `L ${(i / (stat.trend.length - 1)) * 100} ${30 - point}`).join(' ')}`}
                  fill="none"
                  stroke={stat.trendColor || "#8A3AEA"}
                  strokeWidth="1.5"
                />
              </svg>
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default StatsCardGrid;
