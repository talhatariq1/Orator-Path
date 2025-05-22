"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpeechAnalysisWidget = ({ analysisData }) => {
  const [activeTab, setActiveTab] = useState("clarity");
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Define tabs
  const tabs = [
    { id: "clarity", label: "Clarity", color: "blue" },
    { id: "pace", label: "Pace", color: "purple" },
    { id: "confidence", label: "Confidence", color: "green" },
    { id: "vocabulary", label: "Vocabulary", color: "amber" }
  ];
  
  // Get active data
  const activeData = analysisData[activeTab] || [];
  
  // Color mapping
  const colorMap = {
    blue: {
      primary: "bg-blue-500",
      light: "bg-blue-500/20",
      border: "border-blue-500/30",
      text: "text-blue-400",
      gradient: "from-blue-500/20 to-blue-500/5"
    },
    purple: {
      primary: "bg-purple-500",
      light: "bg-purple-500/20",
      border: "border-purple-500/30",
      text: "text-purple-400",
      gradient: "from-purple-500/20 to-purple-500/5"
    },
    green: {
      primary: "bg-green-500",
      light: "bg-green-500/20",
      border: "border-green-500/30",
      text: "text-green-400",
      gradient: "from-green-500/20 to-green-500/5"
    },
    amber: {
      primary: "bg-amber-500",
      light: "bg-amber-500/20",
      border: "border-amber-500/30",
      text: "text-amber-400",
      gradient: "from-amber-500/20 to-amber-500/5"
    }
  };
  
  const activeColor = colorMap[tabs.find(tab => tab.id === activeTab)?.color || "blue"];
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5 h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Speech Analysis</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          View Details
        </button>
      </div>
      
      {/* Tabs */}
      <div className="flex space-x-2 mb-6 overflow-x-auto pb-1">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeTab === tab.id 
                ? `${colorMap[tab.color].light} ${colorMap[tab.color].text} ${colorMap[tab.color].border} border` 
                : 'bg-[#232429] text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
      
      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-[200px]"
        >
          {/* Chart */}
          <div className="relative h-full">
            <div className="absolute inset-x-0 bottom-0 h-[180px]">
              <div className="flex h-full items-end space-x-2">
                {activeData.map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <motion.div 
                      className={`w-full ${activeColor.primary} rounded-t-sm`}
                      initial={{ height: 0 }}
                      animate={{ height: isLoaded ? `${item.value}%` : 0 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.1 * index,
                        ease: "easeOut"
                      }}
                    />
                    <div className="text-xs text-gray-400 mt-2 w-full text-center truncate">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 h-[180px] flex flex-col justify-between text-xs text-gray-500">
              <div>100%</div>
              <div>75%</div>
              <div>50%</div>
              <div>25%</div>
              <div>0%</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      
      {/* Summary */}
      <div className={`mt-4 p-3 rounded-lg bg-gradient-to-r ${activeColor.gradient} ${activeColor.border} border`}>
        <p className="text-sm text-gray-300">
          {analysisData.summary[activeTab]}
        </p>
      </div>
    </div>
  );
};

export default SpeechAnalysisWidget;
