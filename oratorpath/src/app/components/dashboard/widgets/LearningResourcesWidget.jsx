"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LearningResourcesWidget = ({ resources, categories }) => {
  const [activeCategory, setActiveCategory] = useState("all");
  
  // Filter resources by category
  const filteredResources = activeCategory === "all" 
    ? resources 
    : resources.filter(resource => resource.category === activeCategory);
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">Learning Resources</h3>
        <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
          Browse All
        </button>
      </div>
      
      {/* Category tabs */}
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-1">
        <motion.button
          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
            activeCategory === "all" 
              ? 'bg-purple-900/20 text-purple-400 border border-purple-500/30' 
              : 'bg-[#232429] text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveCategory("all")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All
        </motion.button>
        
        {categories.map((category) => (
          <motion.button
            key={category.id}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
              activeCategory === category.id 
                ? `${category.bgColor} ${category.textColor} border ${category.borderColor}` 
                : 'bg-[#232429] text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveCategory(category.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category.name}
          </motion.button>
        ))}
      </div>
      
      {/* Resources list */}
      <div className="space-y-3">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {filteredResources.length > 0 ? (
              <div className="space-y-3">
                {filteredResources.map((resource, index) => {
                  // Find the category object for this resource
                  const resourceCategory = categories.find(cat => cat.id === resource.category) || {
                    bgColor: "bg-purple-900/20",
                    borderColor: "border-purple-500/30",
                    textColor: "text-purple-400"
                  };
                  
                  return (
                    <motion.div
                      key={resource.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 * index, duration: 0.3 }}
                      className={`p-3 rounded-lg border ${resourceCategory.borderColor} ${resourceCategory.bgColor} hover:shadow-md transition-all`}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-start">
                        <div className="p-2 rounded-lg bg-[#1A1B20] mr-3">
                          {resource.icon}
                        </div>
                        <div className="flex-1">
                          <Link href={resource.url} className="block">
                            <h4 className="text-sm font-medium text-gray-200 hover:text-white transition-colors">{resource.title}</h4>
                            <p className="text-xs text-gray-400 mt-0.5">{resource.description}</p>
                          </Link>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center text-xs text-gray-500">
                              <span>{resource.type}</span>
                              <span className="mx-2">•</span>
                              <span>{resource.duration}</span>
                            </div>
                            <div className={`px-2 py-0.5 rounded-full text-xs ${resourceCategory.textColor} border ${resourceCategory.borderColor}`}>
                              {resource.level}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-2">No resources found</p>
                <motion.button 
                  className="px-4 py-2 bg-purple-900/30 text-purple-400 rounded-lg border border-purple-500/30 hover:bg-purple-900/40 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory("all")}
                >
                  View All Resources
                </motion.button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
      
      <motion.button 
        className="mt-4 w-full py-2 rounded-lg border border-dashed border-purple-500/30 text-purple-400 text-sm font-medium hover:bg-purple-900/20 transition-colors"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Explore Learning Center
      </motion.button>
    </div>
  );
};

export default LearningResourcesWidget;
