"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";
import { widgetThemes } from "../../../utils/colorPalette";

const SpeechMetricsRadarWidget = ({ metrics, title = "Speech Metrics" }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Calculate radar chart coordinates
  const centerX = 120;
  const centerY = 120;
  const radius = 70; // Reduced radius to give more space for labels
  const angleStep = (2 * Math.PI) / metrics.length;

  // Generate points for each metric
  const points = metrics.map((metric, i) => {
    const angle = i * angleStep - Math.PI / 2; // Start from top
    const value = metric.value / 100; // Normalize to 0-1
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    return { x, y, ...metric };
  });

  // Generate polygon points string
  const polygonPoints = points.map(point => `${point.x},${point.y}`).join(' ');

  // Generate axis lines
  const axisLines = metrics.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x1: centerX, y1: centerY, x2: x, y2: y };
  });

  // Generate concentric circles
  const circles = [0.25, 0.5, 0.75, 1].map(value => ({
    cx: centerX,
    cy: centerY,
    r: radius * value
  }));

  // Calculate average score
  const averageScore = Math.round(
    metrics.reduce((sum, metric) => sum + metric.value, 0) / metrics.length
  );

  return (
    <WidgetCard
      title={title}
      theme="purple"
      action={
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <div className="w-2 h-2 rounded-full bg-purple-500 mr-1"></div>
            <span className="text-xs text-purple-400">{averageScore}% avg</span>
          </div>
          <button className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Details
          </button>
        </div>
      }
      fullHeight
    >
      <div className="flex justify-center">
        <div className="relative w-full max-w-[280px] h-[280px] mx-auto">
          <svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">
            {/* Background circles */}
            {circles.map((circle, i) => (
              <motion.circle
                key={i}
                cx={circle.cx}
                cy={circle.cy}
                r={circle.r}
                fill="none"
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                strokeDasharray="2,2"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}

            {/* Axis lines */}
            {axisLines.map((line, i) => (
              <motion.line
                key={i}
                x1={line.x1}
                y1={line.y1}
                x2={line.x2}
                y2={line.y2}
                stroke="rgba(255, 255, 255, 0.1)"
                strokeWidth="1"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, pathLength: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.2 + (0.1 * i) }}
              />
            ))}

            {/* Data polygon */}
            <motion.polygon
              points={polygonPoints}
              fill="rgba(168, 85, 247, 0.2)"
              stroke="#A855F7"
              strokeWidth="2"
              strokeLinejoin="round"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />

            {/* Data points */}
            {points.map((point, i) => (
              <motion.circle
                key={i}
                cx={point.x}
                cy={point.y}
                r="4"
                fill="#A855F7"
                stroke="#1A1B20"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.3, delay: 0.8 + (0.1 * i) }}
                whileHover={{ r: 6 }}
                className="cursor-pointer"
              />
            ))}

            {/* Labels */}
            {points.map((point, i) => {
              const angle = i * angleStep - Math.PI / 2;
              const labelRadius = radius + 40; // Significantly increased radius for labels
              const x = centerX + labelRadius * Math.cos(angle);
              const y = centerY + labelRadius * Math.sin(angle);

              // Adjust text anchor and position based on angle
              let textAnchor = "middle";
              let dx = 0;
              let dy = 0;

              // Divide the circle into 6 segments for precise positioning
              // Top segment
              if (angle > -Math.PI/3 && angle < Math.PI/3) {
                if (angle < 0) {
                  // Top-right
                  textAnchor = "start";
                  dx = 8;
                } else {
                  // Top-left
                  textAnchor = "end";
                  dx = -8;
                }
              }
              // Right segment
              else if (angle >= -2*Math.PI/3 && angle <= -Math.PI/3) {
                textAnchor = "start";
                dx = 10;
              }
              // Bottom-right segment
              else if (angle > Math.PI/3 && angle < 2*Math.PI/3) {
                textAnchor = "end";
                dx = -10;
                dy = 5;
              }
              // Bottom segment
              else if (angle >= 2*Math.PI/3 && angle <= 4*Math.PI/3) {
                textAnchor = "middle";
                dy = 15;
              }
              // Bottom-left segment
              else if (angle > 4*Math.PI/3 && angle < 5*Math.PI/3) {
                textAnchor = "start";
                dx = 10;
                dy = 5;
              }
              // Left segment
              else {
                textAnchor = "end";
                dx = -10;
              }

              return (
                <g key={i}>
                  {/* Add a background rectangle for better readability */}
                  <motion.rect
                    x={textAnchor === "end" ? x - 45 : textAnchor === "start" ? x : x - 25}
                    y={y - 10}
                    width={textAnchor === "middle" ? 50 : 45}
                    height="20"
                    rx="4"
                    fill="rgba(26, 27, 32, 0.95)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 0.9 : 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + (0.1 * i) }}
                  />
                  <motion.text
                    x={x + dx}
                    y={y + dy}
                    textAnchor={textAnchor}
                    dominantBaseline="middle"
                    fill="#A855F7"
                    fontSize="11"
                    fontWeight="500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 1 + (0.1 * i) }}
                  >
                    {point.label}
                  </motion.text>
                </g>
              );
            })}

            {/* Value labels */}
            {points.map((point, i) => {
              // Calculate position for value label - closer to the data point
              const angle = i * angleStep - Math.PI / 2;
              const valueDistance = 0.6; // 60% of the way from center to the data point
              const valueX = centerX + radius * valueDistance * Math.cos(angle);
              const valueY = centerY + radius * valueDistance * Math.sin(angle);

              return (
                <g key={`value-${i}`}>
                  <motion.circle
                    cx={valueX}
                    cy={valueY}
                    r="12"
                    fill="rgba(26, 27, 32, 0.95)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 0.95 : 0 }}
                    transition={{ duration: 0.5, delay: 1.1 + (0.1 * i) }}
                  />
                  <motion.text
                    x={valueX}
                    y={valueY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#D8B4FE"
                    fontSize="9.5"
                    fontWeight="bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 1.2 + (0.1 * i) }}
                  >
                    {point.value}%
                  </motion.text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-2 px-2">
        {metrics.map((metric, i) => (
          <motion.div
            key={i}
            className="flex items-center bg-gray-900/40 rounded-md px-2 py-1.5"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + (0.1 * i) }}
            whileHover={{ scale: 1.03, backgroundColor: 'rgba(107, 33, 168, 0.2)' }}
          >
            <div className="w-3 h-3 rounded-full bg-purple-500 mr-2" />
            <span className="text-xs text-gray-300">{metric.label}: </span>
            <span className="text-xs font-medium text-purple-300 ml-1">{metric.value}%</span>
          </motion.div>
        ))}
      </div>
    </WidgetCard>
  );
};

export default SpeechMetricsRadarWidget;
