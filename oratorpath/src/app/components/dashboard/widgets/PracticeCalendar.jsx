"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const PracticeCalendar = ({ practiceData, month = new Date().getMonth(), year = new Date().getFullYear() }) => {
  const [hoveredDay, setHoveredDay] = useState(null);
  
  // Get the number of days in the month
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  // Get the first day of the month (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  
  // Create an array of day numbers for the month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  // Add empty cells for days before the first day of the month
  const emptyCells = Array.from({ length: firstDayOfMonth }, (_, i) => null);
  
  // Combine empty cells and days
  const calendarCells = [...emptyCells, ...days];
  
  // Get month name
  const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
  
  // Function to get practice data for a specific day
  const getPracticeForDay = (day) => {
    return practiceData.find(p => {
      const practiceDate = new Date(p.date);
      return practiceDate.getDate() === day && 
             practiceDate.getMonth() === month && 
             practiceDate.getFullYear() === year;
    });
  };
  
  // Function to get intensity class based on practice duration
  const getIntensityClass = (practice) => {
    if (!practice) return "bg-[#232429]";
    
    const duration = practice.duration;
    if (duration >= 30) return "bg-purple-500";
    if (duration >= 15) return "bg-purple-400/80";
    return "bg-purple-300/60";
  };
  
  return (
    <div className="bg-[#1A1B20] rounded-xl border border-[#2C2D32]/80 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-200">{monthName} {year}</h3>
        <div className="flex space-x-2">
          <button className="p-1 rounded hover:bg-[#232429] text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-1 rounded hover:bg-[#232429] text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Day labels */}
      <div className="grid grid-cols-7 gap-1 mb-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs text-gray-400 font-medium">
            {day}
          </div>
        ))}
      </div>
      
      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {calendarCells.map((day, index) => {
          if (day === null) {
            return <div key={`empty-${index}`} className="aspect-square"></div>;
          }
          
          const practice = getPracticeForDay(day);
          const isToday = new Date().getDate() === day && 
                          new Date().getMonth() === month && 
                          new Date().getFullYear() === year;
          
          return (
            <motion.div
              key={`day-${day}`}
              className={`aspect-square rounded-md flex items-center justify-center relative cursor-pointer
                ${isToday ? 'border border-purple-500' : ''}
              `}
              whileHover={{ scale: 1.1 }}
              onMouseEnter={() => practice && setHoveredDay(day)}
              onMouseLeave={() => setHoveredDay(null)}
            >
              <div className={`absolute inset-2 rounded-sm ${getIntensityClass(practice)}`}></div>
              <span className="relative text-xs font-medium text-gray-200 z-10">{day}</span>
              
              {/* Tooltip */}
              {hoveredDay === day && practice && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-[#232429] text-white text-xs p-2 rounded shadow-lg z-20 whitespace-nowrap">
                  <p className="font-medium">{practice.title}</p>
                  <p className="text-gray-400">{practice.duration} min</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="mt-4 flex items-center justify-end space-x-4 text-xs text-gray-400">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-purple-300/60 mr-1"></div>
          <span>&lt;15 min</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-purple-400/80 mr-1"></div>
          <span>15-30 min</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-sm bg-purple-500 mr-1"></div>
          <span>&gt;30 min</span>
        </div>
      </div>
    </div>
  );
};

export default PracticeCalendar;
