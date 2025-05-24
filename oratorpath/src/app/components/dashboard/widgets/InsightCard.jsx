"use client";

import React from "react";
import { motion } from "framer-motion";

const InsightCard = ({ 
  title, 
  insight, 
  icon, 
  color = "purple", 
  index = 0 
}) => {
  // Define color variants
  const colorVariants = {
    purple: {
      bg: "bg-purple-900/20",
      border: "border-purple-500/30",
      iconBg: "bg-purple-900/30",
      iconColor: "text-purple-400",
      hoverBorder: "hover:border-purple-500/50"
    },
    blue: {
      bg: "bg-blue-900/20",
      border: "border-blue-500/30",
      iconBg: "bg-blue-900/30",
      iconColor: "text-blue-400",
      hoverBorder: "hover:border-blue-500/50"
    },
    green: {
      bg: "bg-green-900/20",
      border: "border-green-500/30",
      iconBg: "bg-green-900/30",
      iconColor: "text-green-400",
      hoverBorder: "hover:border-green-500/50"
    },
    amber: {
      bg: "bg-amber-900/20",
      border: "border-amber-500/30",
      iconBg: "bg-amber-900/30",
      iconColor: "text-amber-400",
      hoverBorder: "hover:border-amber-500/50"
    }
  };
  
  const colors = colorVariants[color] || colorVariants.purple;
  
  return (
    <motion.div 
      className={`rounded-xl p-4 ${colors.bg} ${colors.border} border ${colors.hoverBorder} transition-all duration-300 h-full`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.5 }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
      }}
    >
      <div className="flex items-start">
        <div className={`${colors.iconBg} p-2 rounded-lg ${colors.iconColor}`}>
          {icon}
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-gray-300 mb-1">{title}</h3>
          <p className="text-gray-400 text-sm">{insight}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default InsightCard;
