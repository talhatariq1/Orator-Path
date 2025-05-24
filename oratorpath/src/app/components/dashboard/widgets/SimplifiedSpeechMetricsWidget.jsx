"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WidgetCard from "../ui/WidgetCard";
import { widgetThemes } from "../../../utils/colorPalette";

const SimplifiedSpeechMetricsWidget = ({ metrics = [], title = "Speech Metrics", lastUpdated = "Never", isLatestSession = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef(null);
  const chartRef = useRef(null);
  const svgRef = useRef(null);

  // Enhanced color palette for better visual clarity
  const chartColors = {
    background: "rgba(26, 27, 32, 0.7)",
    gridLines: "rgba(255, 255, 255, 0.15)",
    axisLines: "rgba(255, 255, 255, 0.2)",
    polygon: {
      fill: "rgba(139, 92, 246, 0.25)",
      stroke: "#8B5CF6",
      activeStroke: "#A78BFA"
    },
    dataPoints: {
      default: "#8B5CF6",
      active: "#C4B5FD",
      stroke: "#1A1B20"
    },
    labels: {
      text: "#D1D5DB",
      active: "#F9FAFB"
    },
    valueIndicators: {
      background: "rgba(30, 31, 36, 0.95)",
      text: "#DDD6FE",
      border: "#8B5CF6"
    },
    centerScore: {
      text: "#FFFFFF",
      border: (score) => getScoreColor(score)
    }
  };

  // Validate metrics data to ensure it's usable
  const validMetrics = useMemo(() => {
    try {
      // Check if metrics is an array
      if (!Array.isArray(metrics)) {
        console.error("Speech metrics is not an array:", metrics);
        setHasError(true);
        return [];
      }

      // Check if metrics array is empty
      if (metrics.length === 0) {
        console.warn("Speech metrics array is empty");
        setHasError(true);
        return [];
      }

      // Validate and sanitize each metric
      return metrics.map(metric => ({
        label: metric.label || "Unknown",
        value: isNaN(parseFloat(metric.value)) ? 0 : parseFloat(metric.value),
        description: metric.description || ""
      }));
    } catch (error) {
      console.error("Error processing speech metrics:", error);
      setHasError(true);
      return [];
    }
  }, [metrics]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  // No need to reset active metric as tooltips are disabled

  // Enhanced radar chart dimensions for optimal spacing and visibility
  const centerX = 125; // Adjusted center X for better centering
  const centerY = 125; // Adjusted center Y for better centering
  const radius = 85; // Increased radius for better element distribution
  const angleStep = validMetrics.length > 0 ? (2 * Math.PI) / validMetrics.length : 0;

  // Generate points for each metric with improved normalization and error handling
  const points = validMetrics.map((metric, i) => {
    const angle = i * angleStep - Math.PI / 2; // Start from top

    // Safely parse the value and handle edge cases
    const rawValue = parseFloat(metric.value || 0);

    // Normalize to 0-1 range with safety checks
    const normalizedValue = isNaN(rawValue) ? 0 : Math.max(0, Math.min(rawValue / 100, 1));

    // Calculate coordinates
    const x = centerX + radius * normalizedValue * Math.cos(angle);
    const y = centerY + radius * normalizedValue * Math.sin(angle);

    return {
      x,
      y,
      angle,
      ...metric,
      // Ensure value is properly formatted
      value: isNaN(rawValue) ? 0 : rawValue
    };
  });

  // Generate polygon points string
  const polygonPoints = points.map(point => `${point.x},${point.y}`).join(' ');

  // Generate axis lines
  const axisLines = validMetrics.map((_, i) => {
    const angle = i * angleStep - Math.PI / 2;
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x1: centerX, y1: centerY, x2: x, y2: y };
  });

  // Generate optimized concentric circles with improved spacing and visibility (without labels)
  const circleValues = [0.25, 0.5, 0.75, 1];
  const circles = circleValues.map(value => ({
    cx: centerX,
    cy: centerY,
    r: radius * value,
    opacity: value === 1 ? 0.9 : // Increased opacity for outer circle
             value === 0.75 ? 0.7 : // Increased opacity for 75% circle
             value === 0.5 ? 0.6 : // Increased opacity for 50% circle
             0.5 // Default opacity for inner circle
  }));

  // No need to calculate average score as it's no longer displayed in the center

  // Get color based on score
  const getScoreColor = (score) => {
    if (score >= 90) return "#10B981"; // Green
    if (score >= 75) return "#3B82F6"; // Blue
    if (score >= 60) return "#8B5CF6"; // Purple
    if (score >= 40) return "#F59E0B"; // Yellow
    return "#EF4444"; // Red
  };

  // Note: getScoreDescription and handleMetricClick functions removed as they are no longer used

  return (
    <WidgetCard
      title={title}
      theme="purple"
      action={
        <div className="flex items-center">
          <div className="flex items-center bg-gray-800/50 px-2 py-1 rounded-md border border-purple-500/20">
            <motion.div
              className="w-2 h-2 rounded-full bg-purple-500 mr-2"
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
            <span className="text-xs text-purple-400 font-medium">Latest Practice: </span>
            {lastUpdated === "Never" ? (
              <span className="text-xs text-yellow-400 ml-1 font-medium">No practice sessions yet</span>
            ) : (
              <span className="text-xs text-white ml-1 font-medium">{lastUpdated}</span>
            )}
          </div>
        </div>
      }
      fullHeight
    >
      <div
        className="relative h-full flex flex-col"
        ref={containerRef}
      >
        {/* Error message display */}
        {hasError && (
          <div className="flex items-center justify-center h-full">
            <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-red-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-300 font-medium">Unable to display speech metrics</p>
              <p className="text-gray-400 text-sm mt-1">There was an issue processing the metrics data. Please try refreshing the dashboard.</p>
            </div>
          </div>
        )}

        {/* No data message */}
        {!hasError && validMetrics.length === 0 && (
          <div className="flex items-center justify-center h-full">
            <div className="bg-gray-900/40 border border-gray-700/50 rounded-lg p-4 text-center max-w-xs">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-purple-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-purple-300 font-medium">No speech metrics available</p>
              <p className="text-gray-400 text-sm mt-1">Complete a practice session to see your speech metrics data.</p>
            </div>
          </div>
        )}

        {/* Main chart container */}
        {!hasError && validMetrics.length > 0 && (
          <div className="flex justify-center transition-all duration-500 h-[380px]">
            <div
              className="relative w-full max-w-[340px] h-full mx-auto" // Increased max width for better spacing
              ref={chartRef}
            >
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 260 260" // Increased viewBox size to provide more space for all elements
                preserveAspectRatio="xMidYMid meet"
                ref={svgRef}
              >
                {/* Enhanced grid system */}
                {circles.map((circle, i) => (
                  <g key={`grid-${i}`}>
                    <motion.circle
                      cx={circle.cx}
                      cy={circle.cy}
                      r={circle.r}
                      fill="none"
                      stroke={chartColors.gridLines}
                      strokeWidth={i === circles.length - 1 ? "1.8" : // Increased outer circle width
                                 i === circles.length - 2 ? "1.3" : // Increased 75% circle width
                                 "1"} // Default for inner circles
                      strokeDasharray={i < circles.length - 1 ? "3,3" : "none"} // Improved dash pattern
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isLoaded ? circle.opacity : 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                    />
                    {/* Grid value labels removed as requested */}
                  </g>
                ))}

                {/* Enhanced axis lines with improved visibility */}
                {axisLines.map((line, i) => {
                  return (
                    <motion.line
                      key={i}
                      x1={line.x1}
                      y1={line.y1}
                      x2={line.x2}
                      y2={line.y2}
                      stroke={chartColors.axisLines}
                      strokeWidth={1.2} // Increased stroke width for better visibility
                      strokeLinecap="round" // Added round line caps for smoother appearance
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isLoaded ? 0.9 : 0 // Increased opacity for better visibility
                      }}
                      transition={{ duration: 0.5, delay: 0.2 + (0.1 * i) }}
                    />
                  );
                })}

                {/* Data polygon with optimized styling and animation */}
                <motion.polygon
                  points={polygonPoints}
                  fill={chartColors.polygon.fill}
                  stroke={chartColors.polygon.stroke}
                  strokeWidth="2.2" // Increased stroke width for better visibility
                  strokeLinejoin="round"
                  strokeLinecap="round" // Added round line caps for smoother corners
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isLoaded ? 1 : 0,
                    scale: isLoaded ? 1 : 0.8
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 10 // Added damping for smoother animation
                  }}
                />

                {/* Central score display removed as requested */}

                {/* Enhanced data points with improved visibility and styling */}
                {points.map((point, i) => {
                  return (
                    <motion.circle
                      key={i}
                      cx={point.x}
                      cy={point.y}
                      r={6.5} // Increased size for better visibility
                      fill={chartColors.dataPoints.default}
                      stroke={chartColors.dataPoints.stroke}
                      strokeWidth="1.8" // Thicker stroke for better definition
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{
                        opacity: isLoaded ? 1 : 0,
                        scale: isLoaded ? 1 : 0.8
                      }}
                      transition={{
                        duration: 0.4,
                        delay: 0.8 + (0.1 * i),
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  );
                })}

                {/* Enhanced labels with optimized positioning for all metrics */}
                {points.map((point, i) => {
                  const angle = point.angle;
                  // Reduced label radius to close the gap between stat points and labels
                  const labelRadius = radius + 15; // Decreased from 35 to 25
                  const x = centerX + labelRadius * Math.cos(angle);
                  const y = centerY + labelRadius * Math.sin(angle);

                  // Optimized text anchor and positioning based on label position
                  let textAnchor = "middle";
                  let dx = 0;
                  let dy = 0;
                  let fontSize = "12";
                  let fontWeight = "500";

                  // Custom positioning for each label based on its position in the chart
                  // Top position (Coherence)
                  if (Math.abs(angle + Math.PI/2) < 0.1) { // Close to top
                    textAnchor = "middle";
                    dy = -6; // Reduced from -10 to -6
                    fontSize = "12"; // Slightly larger for better visibility
                    fontWeight = "600";
                  }
                  // Right position (typically Vocabulary)
                  else if (Math.abs(angle) < 0.1) { // Close to right
                    textAnchor = "start";
                    dx = 6; // Reduced from 10 to 6
                  }
                  // Bottom position (typically Overall Score)
                  else if (Math.abs(angle - Math.PI/2) < 0.1) { // Close to bottom
                    textAnchor = "middle";
                    dy = 10; // Reduced from 15 to 10
                  }
                  // Left position (typically Clarity)
                  else if (Math.abs(angle - Math.PI) < 0.1) { // Close to left
                    textAnchor = "end";
                    dx = -6; // Reduced from -10 to -6
                  }
                  // For any other positions (if metrics are added or positions change)
                  else {
                    // Top-right quadrant
                    if (angle > -Math.PI/2 && angle < 0) {
                      textAnchor = "start";
                      dx = 5; // Reduced from 8 to 5
                      dy = -5; // Reduced from -8 to -5
                    }
                    // Bottom-right quadrant
                    else if (angle >= 0 && angle < Math.PI/2) {
                      textAnchor = "start";
                      dx = 5; // Reduced from 8 to 5
                      dy = 5; // Reduced from 8 to 5
                    }
                    // Bottom-left quadrant
                    else if (angle >= Math.PI/2 && angle < Math.PI) {
                      textAnchor = "end";
                      dx = -5; // Reduced from -8 to -5
                      dy = 5; // Reduced from 8 to 5
                    }
                    // Top-left quadrant
                    else {
                      textAnchor = "end";
                      dx = -5; // Reduced from -8 to -5
                      dy = -5; // Reduced from -8 to -5
                    }
                  }

                  // Additional specific adjustments for known labels with reduced spacing
                  if (point.label === "Coherence") {
                    // Fine-tune Coherence position
                    dy = -8; // Reduced from -12 to -8
                  } else if (point.label === "Clarity") {
                    // Fine-tune Clarity position
                    dx = -2; // Reduced from -12 to -8
                  } else if (point.label === "Overall Score") {
                    // For Overall Score - move upward and toward center
                    // Use adjusted position calculation instead of the standard x,y
                    const adjustedRadius = labelRadius * 0.55; // Reduced radius to move toward center
                    const adjustedAngle = angle * 0.9; // Slightly adjust angle
                    // Calculate new position
                    const adjustedX = centerX + adjustedRadius * Math.cos(adjustedAngle);
                    const adjustedY = centerY + adjustedRadius * Math.sin(adjustedAngle);
                    // Set fine-tuning offsets relative to the new position
                    dx = adjustedX - x + 0; // Additional horizontal adjustment if needed
                    dy = adjustedY - y + 30; // Additional vertical adjustment (moved upward)
                  } else if (point.label === "Vocabulary") {
                    // For Vocabulary - move upward and toward center
                    // Use adjusted position calculation instead of the standard x,y
                    const adjustedRadius = labelRadius * 0.68; // Reduced radius to move toward center
                    const adjustedAngle = angle * 0.85; // Slightly adjust angle
                    // Calculate new position
                    const adjustedX = centerX + adjustedRadius * Math.cos(adjustedAngle);
                    const adjustedY = centerY + adjustedRadius * Math.sin(adjustedAngle);
                    // Set fine-tuning offsets relative to the new position
                    dx = adjustedX - x + 4; // Additional horizontal adjustment
                    dy = adjustedY - y - 3; // Additional vertical adjustment (moved upward)
                  }

                  return (
                    <motion.text
                      key={i}
                      x={x + dx}
                      y={y + dy}
                      textAnchor={textAnchor}
                      dominantBaseline="middle"
                      fill={chartColors.labels.text}
                      fontSize={fontSize}
                      fontWeight={fontWeight}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: isLoaded ? 1 : 0
                      }}
                      transition={{ duration: 0.5, delay: 1 + (0.1 * i) }}
                    >
                      {point.label}
                    </motion.text>
                  );
                })}

                {/* Optimized value indicators with better positioning and dynamic sizing */}
                {points.map((point, i) => {
                  // Calculate optimal distance for each value indicator based on its position
                  // This helps prevent overlap with axis lines and other elements
                  let valueDistance = 0.58; // Default distance from center (slightly increased)

                  // Adjust distance based on label to prevent overlaps
                  if (point.label === "Coherence") {
                    valueDistance = 0.56; // Top position
                  } else if (point.label === "Clarity") {
                    valueDistance = 0.56; // Left position
                  } else if (point.label === "Overall Score") {
                    valueDistance = 0.56; // Bottom position
                  } else if (point.label === "Vocabulary") {
                    valueDistance = 0.56; // Right position
                  }

                  // Calculate position with the adjusted distance
                  const valueX = centerX + radius * valueDistance * Math.cos(point.angle);
                  const valueY = centerY + radius * valueDistance * Math.sin(point.angle);

                  // Format text content based on metric type with consistent decimal places
                  const textContent = point.label === "Overall Score" ? Math.round(point.value) :
                                     point.label === "Clarity" ? point.value.toFixed(1) :
                                     point.label === "Vocabulary" ? point.value.toFixed(1) : // Changed to 1 decimal place for consistency
                                     point.label === "Coherence" ? point.value.toFixed(1) : // Added explicit handling for Coherence
                                     Math.round(point.value);

                  // Calculate optimal circle size based on text content
                  const textLength = textContent.toString().length;
                  // More precise sizing formula that accounts for decimal points and digits
                  const circleRadius = textLength <= 2 ? 14 : // Small numbers (0-99)
                                      textLength === 3 ? 16 : // Medium numbers (100-999)
                                      textLength === 4 ? 18 : // Large numbers (1000-9999)
                                      20; // Very large numbers

                  // Adjust font size based on text length for better readability
                  const fontSize = textLength <= 2 ? 10 : // Larger font for small numbers
                                 textLength === 3 ? 9.5 : // Medium font for medium numbers
                                 textLength >= 4 ? 9 : // Smaller font for large numbers
                                 9; // Default size

                  return (
                    <g key={`value-${i}`}>
                      {/* Background circle with improved styling */}
                      <motion.circle
                        cx={valueX}
                        cy={valueY}
                        r={circleRadius}
                        fill={chartColors.valueIndicators.background}
                        stroke="rgba(139, 92, 246, 0.5)"
                        strokeWidth="1.2" // Slightly thicker border for better visibility
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: isLoaded ? 0.95 : 0
                        }}
                        transition={{ duration: 0.5, delay: 1.1 + (0.1 * i) }}
                      />
                      {/* Value text with improved alignment */}
                      <motion.text
                        x={valueX}
                        y={valueY}
                        textAnchor="middle"
                        dominantBaseline="central" // Ensures perfect vertical centering
                        fill={chartColors.valueIndicators.text}
                        fontSize={fontSize}
                        fontWeight="bold"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isLoaded ? 1 : 0 }}
                        transition={{ duration: 0.5, delay: 1.2 + (0.1 * i) }}
                      >
                        {textContent}
                      </motion.text>
                    </g>
                  );
                })}
              </svg>

              {/* Tooltips removed as per requirements */}
            </div>
          </div>
        )}
      </div>
    </WidgetCard>
  );
};

export default SimplifiedSpeechMetricsWidget;
