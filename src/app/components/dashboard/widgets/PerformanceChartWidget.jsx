"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";
import { widgetThemes } from "../../../utils/colorPalette";

const PerformanceChartWidget = ({ data, height = 250 }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Find max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));
  const scale = 100 / (maxValue > 0 ? maxValue : 100);

  // Calculate trend
  const trend = data.length > 1
    ? data[data.length - 1].value - data[0].value
    : 0;

  const trendText = trend > 0
    ? `+${trend}% improvement`
    : trend < 0
      ? `${trend}% decrease`
      : "No change";

  const trendColor = trend > 0
    ? "text-green-500"
    : trend < 0
      ? "text-red-500"
      : "text-gray-400";

  return (
    <WidgetCard
      title="Speaking Performance Journey"
      theme="blue"
      action={
        <div className="flex items-center">
          <span className={`text-sm mr-2 ${trendColor}`}>{trendText}</span>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Details
          </button>
        </div>
      }
      fullHeight
    >
      <div style={{ height: `${height}px` }} className="relative">
        {/* Y-axis grid lines */}
        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-full h-px bg-gray-800"
              style={{ top: `${20 * i}%` }}
            />
          ))}
        </div>

        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 pointer-events-none">
          <div>100%</div>
          <div>80%</div>
          <div>60%</div>
          <div>40%</div>
          <div>20%</div>
          <div>0%</div>
        </div>

        {/* Chart */}
        <div className="absolute inset-x-0 bottom-0 h-full pl-8">
          {/* Area chart */}
          <svg
            width="100%"
            height="100%"
            className="overflow-visible"
            preserveAspectRatio="none"
          >
            {/* Area fill */}
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.05" />
              </linearGradient>
            </defs>

            <motion.path
              d={`
                M0,${100 - data[0].value * scale}
                ${data.map((item, i) => `L${(i / (data.length - 1)) * 100}%,${100 - item.value * scale}`).join(' ')}
                L100%,100%
                L0,100%
                Z
              `}
              fill="url(#areaGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Line */}
            <motion.path
              d={`
                M0,${100 - data[0].value * scale}
                ${data.map((item, i) => `L${(i / (data.length - 1)) * 100}%,${100 - item.value * scale}`).join(' ')}
              `}
              fill="none"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: isLoaded ? 1 : 0, opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 1.5, delay: 0.2 }}
            />

            {/* Data points */}
            {data.map((item, i) => (
              <motion.circle
                key={i}
                cx={`${(i / (data.length - 1)) * 100}%`}
                cy={`${100 - item.value * scale}%`}
                r="4"
                fill="#3B82F6"
                stroke="#1A1B20"
                strokeWidth="2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                className="cursor-pointer hover:r-6 transition-all duration-200"
              />
            ))}
          </svg>
        </div>

        {/* X-axis labels */}
        <div className="absolute inset-x-0 bottom-0 flex justify-between pl-8 text-xs text-gray-500 translate-y-6">
          {data.map((item, index) => (
            <div key={index} className="text-center">
              {item.date}
            </div>
          ))}
        </div>
      </div>
    </WidgetCard>
  );
};

export default PerformanceChartWidget;
