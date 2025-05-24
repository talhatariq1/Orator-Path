"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";
import { widgetThemes } from "../../../utils/colorPalette";

const EnhancedSpeechMetricsWidget = ({ metrics, title = "Speech Metrics" }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMetric, setActiveMetric] = useState(null);
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // Calculate radar chart coordinates
  const centerX = 120;
  const centerY = 120;
  const radius = 75;
  const angleStep = (2 * Math.PI) / metrics.length;

  // Generate points for each metric
  const points = metrics.map((metric, i) => {
    const angle = i * angleStep - Math.PI / 2; // Start from top
    const value = metric.value / 100; // Normalize to 0-1
    const x = centerX + radius * value * Math.cos(angle);
    const y = centerY + radius * value * Math.sin(angle);
    return { x, y, angle, ...metric };
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

  // Get color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return "#10B981"; // Green
    if (score >= 75) return "#3B82F6"; // Blue
    if (score >= 60) return "#A855F7"; // Purple
    if (score >= 40) return "#F59E0B"; // Yellow
    return "#EF4444"; // Red
  };

  // Get description based on score
  const getScoreDescription = (score) => {
    if (score >= 90) return "Excellent";
    if (score >= 75) return "Good";
    if (score >= 60) return "Average";
    if (score >= 40) return "Needs Improvement";
    return "Poor";
  };

  // Generate particles for background animation
  const generateParticles = () => {
    const particles = [];
    const particleCount = 5;

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 60 + 20;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 15 + 10;
      const delay = Math.random() * 5;

      particles.push(
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-purple-500/5 blur-xl"
          style={{
            width: size,
            height: size,
            top: `${y}%`,
            left: `${x}%`,
          }}
          animate={{
            x: [0, Math.random() * 30 - 15, 0],
            y: [0, Math.random() * 30 - 15, 0],
          }}
          transition={{
            duration: duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
            delay: delay,
          }}
        />
      );
    }

    return particles;
  };

  // Handle metric click
  const handleMetricClick = (metric) => {
    setActiveMetric(activeMetric === metric ? null : metric);
  };

  // Handle expand/collapse
  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <WidgetCard
      title={title}
      theme="purple"
      action={
        <div className="flex items-center">
          <div className="flex items-center mr-3">
            <motion.div 
              className="w-2 h-2 rounded-full bg-purple-500 mr-1"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
              }}
            />
            <span className="text-xs text-purple-400">{averageScore}% avg</span>
          </div>
          <motion.button 
            className="text-sm text-purple-400 hover:text-purple-300 transition-colors flex items-center"
            onClick={handleExpand}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isExpanded ? "Collapse" : "Expand"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-4 w-4 ml-1 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>
      }
      fullHeight
    >
      <div 
        className="relative h-full flex flex-col"
        ref={containerRef}
      >
        {/* Background particles */}
        {generateParticles()}

        {/* Main chart container */}
        <div className={`flex justify-center transition-all duration-500 ${isExpanded ? 'h-[350px]' : 'h-[280px]'}`}>
          <div 
            className="relative w-full max-w-[280px] h-full mx-auto"
            ref={chartRef}
            onMouseLeave={() => setHoveredMetric(null)}
          >
            <svg width="100%" height="100%" viewBox="0 0 240 240" preserveAspectRatio="xMidYMid meet">
              {/* Central score display */}
              <motion.g
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <circle
                  cx={centerX}
                  cy={centerY}
                  r="30"
                  fill="rgba(26, 27, 32, 0.7)"
                  stroke={`${getScoreColor(averageScore)}`}
                  strokeWidth="2"
                />
                <text
                  x={centerX}
                  y={centerY}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fill="#fff"
                  fontSize="14"
                  fontWeight="bold"
                >
                  {averageScore}%
                </text>
              </motion.g>

              {/* Background circles with pulse animation */}
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
                  animate={{ 
                    opacity: isLoaded ? 1 : 0, 
                    scale: isLoaded ? 1 : 0,
                    strokeWidth: hoveredMetric ? [1, 1.5, 1] : 1
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.1 * i,
                    strokeWidth: {
                      duration: 2,
                      repeat: hoveredMetric ? Infinity : 0,
                      repeatType: "reverse"
                    }
                  }}
                />
              ))}

              {/* Axis lines with glow effect */}
              {axisLines.map((line, i) => {
                const isActive = hoveredMetric === metrics[i].label || activeMetric === metrics[i].label;
                return (
                  <motion.line
                    key={i}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke={isActive ? "rgba(168, 85, 247, 0.5)" : "rgba(255, 255, 255, 0.1)"}
                    strokeWidth={isActive ? 2 : 1}
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ 
                      opacity: isLoaded ? 1 : 0, 
                      pathLength: isLoaded ? 1 : 0,
                      strokeWidth: isActive ? 2 : 1,
                      stroke: isActive ? "rgba(168, 85, 247, 0.5)" : "rgba(255, 255, 255, 0.1)"
                    }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.2 + (0.1 * i),
                      stroke: { duration: 0.3 },
                      strokeWidth: { duration: 0.3 }
                    }}
                  />
                );
              })}

              {/* Data polygon with gradient fill and animation */}
              <defs>
                <linearGradient id="polygonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)" />
                  <stop offset="100%" stopColor="rgba(168, 85, 247, 0.1)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>
              <motion.polygon
                points={polygonPoints}
                fill="url(#polygonGradient)"
                stroke="#A855F7"
                strokeWidth="2"
                strokeLinejoin="round"
                filter={hoveredMetric ? "url(#glow)" : ""}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0,
                  strokeWidth: hoveredMetric ? [2, 3, 2] : 2
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.5,
                  strokeWidth: {
                    duration: 1.5,
                    repeat: hoveredMetric ? Infinity : 0,
                    repeatType: "reverse"
                  }
                }}
              />

              {/* Interactive data points */}
              {points.map((point, i) => {
                const isActive = hoveredMetric === point.label || activeMetric === point.label;
                return (
                  <motion.circle
                    key={i}
                    cx={point.x}
                    cy={point.y}
                    r={isActive ? 6 : 4}
                    fill={isActive ? "#D8B4FE" : "#A855F7"}
                    stroke="#1A1B20"
                    strokeWidth="1"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: isLoaded ? 1 : 0, 
                      scale: isLoaded ? 1 : 0,
                      r: isActive ? 6 : 4,
                      fill: isActive ? "#D8B4FE" : "#A855F7"
                    }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.8 + (0.1 * i),
                      r: { duration: 0.2 },
                      fill: { duration: 0.2 }
                    }}
                    whileHover={{ r: 8 }}
                    onMouseEnter={() => setHoveredMetric(point.label)}
                    onClick={() => handleMetricClick(point.label)}
                    className="cursor-pointer"
                  />
                );
              })}

              {/* Enhanced labels with better positioning and animations */}
              {points.map((point, i) => {
                const angle = point.angle;
                const labelRadius = radius + 40;
                const x = centerX + labelRadius * Math.cos(angle);
                const y = centerY + labelRadius * Math.sin(angle);
                const isActive = hoveredMetric === point.label || activeMetric === point.label;

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
                    {/* Label background */}
                    <motion.rect
                      x={textAnchor === "end" ? x - 45 : textAnchor === "start" ? x : x - 25}
                      y={y - 10}
                      width={textAnchor === "middle" ? 50 : 45}
                      height="20"
                      rx="4"
                      fill={isActive ? "rgba(168, 85, 247, 0.3)" : "rgba(26, 27, 32, 0.95)"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isLoaded ? (isActive ? 0.9 : 0.8) : 0,
                        fill: isActive ? "rgba(168, 85, 247, 0.3)" : "rgba(26, 27, 32, 0.95)"
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.9 + (0.1 * i),
                        fill: { duration: 0.3 }
                      }}
                    />
                    {/* Label text */}
                    <motion.text
                      x={x + dx}
                      y={y + dy}
                      textAnchor={textAnchor}
                      dominantBaseline="middle"
                      fill={isActive ? "#FFFFFF" : "#A855F7"}
                      fontSize="11"
                      fontWeight={isActive ? "600" : "500"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isLoaded ? 1 : 0,
                        fill: isActive ? "#FFFFFF" : "#A855F7",
                        fontWeight: isActive ? "600" : "500"
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + (0.1 * i),
                        fill: { duration: 0.3 },
                        fontWeight: { duration: 0.3 }
                      }}
                      onMouseEnter={() => setHoveredMetric(point.label)}
                      onClick={() => handleMetricClick(point.label)}
                      className="cursor-pointer"
                    >
                      {point.label}
                    </motion.text>
                  </g>
                );
              })}

              {/* Value labels with improved positioning and animations */}
              {points.map((point, i) => {
                const angle = point.angle;
                const valueDistance = 0.65;
                const valueX = centerX + radius * valueDistance * Math.cos(angle);
                const valueY = centerY + radius * valueDistance * Math.sin(angle);
                const isActive = hoveredMetric === point.label || activeMetric === point.label;

                return (
                  <g key={`value-${i}`}>
                    <motion.circle
                      cx={valueX}
                      cy={valueY}
                      r="12"
                      fill={isActive ? "rgba(168, 85, 247, 0.4)" : "rgba(26, 27, 32, 0.95)"}
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isLoaded ? 0.95 : 0,
                        fill: isActive ? "rgba(168, 85, 247, 0.4)" : "rgba(26, 27, 32, 0.95)",
                        scale: isActive ? [1, 1.1, 1] : 1
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.1 + (0.1 * i),
                        fill: { duration: 0.3 },
                        scale: {
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          repeatType: "reverse"
                        }
                      }}
                      onMouseEnter={() => setHoveredMetric(point.label)}
                      onClick={() => handleMetricClick(point.label)}
                      className="cursor-pointer"
                    />
                    <motion.text
                      x={valueX}
                      y={valueY}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? "#FFFFFF" : "#D8B4FE"}
                      fontSize="10"
                      fontWeight="bold"
                      initial={{ opacity: 0 }}
                      animate={{ 
                        opacity: isLoaded ? 1 : 0,
                        fill: isActive ? "#FFFFFF" : "#D8B4FE"
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.2 + (0.1 * i),
                        fill: { duration: 0.3 }
                      }}
                      onMouseEnter={() => setHoveredMetric(point.label)}
                      onClick={() => handleMetricClick(point.label)}
                      className="cursor-pointer"
                    >
                      {point.value}%
                    </motion.text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Expanded detail view */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              className="mt-2 bg-gray-900/30 rounded-lg p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-purple-300 font-medium mb-2">Metrics Breakdown</h3>
              <div className="space-y-3">
                {metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    className={`p-3 rounded-lg transition-colors duration-300 ${
                      activeMetric === metric.label || hoveredMetric === metric.label
                        ? 'bg-purple-900/30 border border-purple-500/30'
                        : 'bg-gray-800/40'
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i, duration: 0.3 }}
                    onMouseEnter={() => setHoveredMetric(metric.label)}
                    onMouseLeave={() => setHoveredMetric(null)}
                    onClick={() => handleMetricClick(metric.label)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-3 h-3 rounded-full bg-purple-500 mr-2 ${
                          activeMetric === metric.label || hoveredMetric === metric.label
                            ? 'animate-pulse'
                            : ''
                        }`} />
                        <span className="text-sm text-gray-300 font-medium">{metric.label}</span>
                      </div>
                      <div className="flex items-center">
                        <span className={`text-sm font-bold ${getScoreColor(metric.value) === '#10B981' ? 'text-green-400' : 
                          getScoreColor(metric.value) === '#3B82F6' ? 'text-blue-400' : 
                          getScoreColor(metric.value) === '#A855F7' ? 'text-purple-400' : 
                          getScoreColor(metric.value) === '#F59E0B' ? 'text-yellow-400' : 
                          'text-red-400'}`}
                        >
                          {metric.value}%
                        </span>
                        <span className="text-xs text-gray-400 ml-2">
                          ({getScoreDescription(metric.value)})
                        </span>
                      </div>
                    </div>
                    
                    {/* Show additional details when metric is active */}
                    <AnimatePresence>
                      {activeMetric === metric.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-3 text-xs text-gray-400 leading-relaxed"
                        >
                          <div className="h-1 bg-gray-800 rounded-full mb-2">
                            <motion.div
                              className="h-1 rounded-full"
                              style={{ 
                                width: `${metric.value}%`,
                                backgroundColor: getScoreColor(metric.value)
                              }}
                              initial={{ width: 0 }}
                              animate={{ width: `${metric.value}%` }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </div>
                          {metric.label === "Clarity" && (
                            <p>Your speech clarity is {getScoreDescription(metric.value).toLowerCase()}. Clear articulation helps your audience understand your message without strain.</p>
                          )}
                          {metric.label === "Pace" && (
                            <p>Your speaking pace is {getScoreDescription(metric.value).toLowerCase()}. A balanced pace keeps your audience engaged without overwhelming them.</p>
                          )}
                          {metric.label === "Confidence" && (
                            <p>Your confidence level is {getScoreDescription(metric.value).toLowerCase()}. Confident delivery enhances your credibility and audience trust.</p>
                          )}
                          {metric.label === "Vocabulary" && (
                            <p>Your vocabulary usage is {getScoreDescription(metric.value).toLowerCase()}. A rich vocabulary allows for precise and impactful communication.</p>
                          )}
                          {metric.label === "Engagement" && (
                            <p>Your audience engagement is {getScoreDescription(metric.value).toLowerCase()}. Engaging speakers maintain audience attention and interest throughout.</p>
                          )}
                          {metric.label === "Structure" && (
                            <p>Your speech structure is {getScoreDescription(metric.value).toLowerCase()}. Well-structured speeches help audiences follow your message and remember key points.</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive legend */}
        <div className={`grid grid-cols-2 gap-x-4 gap-y-2 mt-2 px-2 ${isExpanded ? 'mb-0' : 'mb-0'}`}>
          {metrics.map((metric, i) => {
            const isActive = hoveredMetric === metric.label || activeMetric === metric.label;
            return (
              <motion.div
                key={i}
                className={`flex items-center rounded-md px-2 py-1.5 cursor-pointer ${
                  isActive 
                    ? 'bg-purple-900/40 border border-purple-500/30' 
                    : 'bg-gray-900/40'
                }`}
                initial={{ opacity: 0, y: 5 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  y: 0,
                  backgroundColor: isActive ? 'rgba(107, 33, 168, 0.4)' : 'rgba(17, 24, 39, 0.4)'
                }}
                transition={{ 
                  duration: 0.3, 
                  delay: 1.2 + (0.1 * i),
                  backgroundColor: { duration: 0.3 }
                }}
                whileHover={{ 
                  scale: 1.03, 
                  backgroundColor: 'rgba(107, 33, 168, 0.3)'
                }}
                onMouseEnter={() => setHoveredMetric(metric.label)}
                onMouseLeave={() => setHoveredMetric(null)}
                onClick={() => handleMetricClick(metric.label)}
              >
                <motion.div 
                  className="w-3 h-3 rounded-full bg-purple-500 mr-2"
                  animate={{
                    scale: isActive ? [1, 1.3, 1] : 1,
                    opacity: isActive ? [0.7, 1, 0.7] : 0.7
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: isActive ? Infinity : 0,
                    repeatType: "loop"
                  }}
                />
                <span className="text-xs text-gray-300">{metric.label}: </span>
                <span className={`text-xs font-medium ml-1 ${
                  getScoreColor(metric.value) === '#10B981' ? 'text-green-400' : 
                  getScoreColor(metric.value) === '#3B82F6' ? 'text-blue-400' : 
                  getScoreColor(metric.value) === '#A855F7' ? 'text-purple-400' : 
                  getScoreColor(metric.value) === '#F59E0B' ? 'text-yellow-400' : 
                  'text-red-400'
                }`}>{metric.value}%</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </WidgetCard>
  );
};

export default EnhancedSpeechMetricsWidget;
