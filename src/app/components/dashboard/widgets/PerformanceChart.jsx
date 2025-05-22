"use client";

import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const PerformanceChart = ({ data, height = 200 }) => {
  const [chartData, setChartData] = useState([]);
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const svgRef = useRef(null);
  const [activeTab, setActiveTab] = useState("overall");
  const [isAnimating, setIsAnimating] = useState(false);
  const chartRef = useRef(null);
  const containerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPortalPosition, setTooltipPortalPosition] = useState({ left: 0, top: 0 });
  const [isMounted, setIsMounted] = useState(false);
  const [tooltipSize, setTooltipSize] = useState({ width: 250, height: 200 }); // Fixed dimensions
  const [tooltipVisible, setTooltipVisible] = useState(false);

  // Define metrics to display
  const metrics = [
    {
      id: "overall",
      label: "Overall",
      color: "#8A3AEA",
      description: "Overall performance score from the analysis"
    },
    {
      id: "clarity",
      label: "Coherence",
      color: "#3B82F6",
      description: "Speech coherence score from transcript analysis"
    },
    {
      id: "confidence",
      label: "Confidence",
      color: "#10B981",
      description: "Confidence score based on voice characteristics"
    },
    {
      id: "vocabulary",
      label: "Vocabulary",
      color: "#F59E0B",
      description: "Vocabulary richness score from text analysis"
    }
  ];

  // Process the data from the API
  const processedData = useMemo(() => {
    if (!data || !data.sessions || data.sessions.length === 0) {
      return {
        overall: [],
        clarity: [],
        confidence: [],
        vocabulary: []
      };
    }

    // Create data objects for each metric
    return {
      overall: data.sessions.map((session, index) => ({
        ...session,
        value: session.overall,
        label: `Day ${index + 1}`,
        date: session.date
      })),
      clarity: data.sessions.map((session, index) => ({
        ...session,
        value: session.clarity,
        label: `Day ${index + 1}`,
        date: session.date
      })),
      confidence: data.sessions.map((session, index) => ({
        ...session,
        value: session.confidence,
        label: `Day ${index + 1}`,
        date: session.date
      })),
      vocabulary: data.sessions.map((session, index) => ({
        ...session,
        value: session.vocabulary,
        label: `Day ${index + 1}`,
        date: session.date
      }))
    };
  }, [data]);

  // Effect to handle mounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  // Function to calculate tooltip position - always above the data point
  const calculateTooltipPosition = useCallback((pointX, pointY) => {
    if (!containerRef.current) return { x: 0, y: 0, placement: 'top' };

    const containerRect = containerRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;

    // Fixed tooltip dimensions - never change these
    const tooltipWidth = tooltipSize.width;
    const tooltipHeight = tooltipSize.height;

    // Convert percentage to pixels for calculations
    const pointXPixels = (pointX / 100) * containerRect.width;
    const pointYPixels = (pointY / 100) * containerRect.height;

    // Get absolute position of the point in the window
    const pointAbsX = containerRect.left + pointXPixels;
    const pointAbsY = containerRect.top + pointYPixels;

    // Calculate initial position (centered above the point)
    let left = pointAbsX - (tooltipWidth / 2);
    let top = pointAbsY - tooltipHeight - 60; // 30px above the point (increased from 15px)

    // Check if tooltip would go off the right edge of the window
    if (left + tooltipWidth > windowWidth - 20) {
      left = windowWidth - tooltipWidth - 20; // 20px padding from window edge
    }

    // Check if tooltip would go off the left edge of the window
    if (left < 20) {
      left = 20; // 20px padding from window edge
    }

    // If tooltip would go off the top edge, adjust its position
    if (top < 20) {
      top = 20; // 20px padding from top edge
    }

    return {
      left,
      top,
      placement: 'top', // Always top
      pointAbsX,
      pointAbsY,
      x: pointX,
      y: pointY
    };
  }, [tooltipSize]);

  useEffect(() => {
    // Animate the chart data points
    setIsAnimating(true);
    setChartData([]);

    const timer = setTimeout(() => {
      setChartData(processedData[activeTab] || []);
      setIsAnimating(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeTab, processedData]);

  // Find the max value for scaling
  const currentData = processedData[activeTab] || [];
  const maxValue = currentData.length > 0
    ? Math.max(...currentData.map(item => item.value), 100) // Ensure minimum scale of 100
    : 100;

  // Calculate points for the SVG path - memoized to prevent unnecessary recalculations
  const points = useMemo(() => {
    return chartData.map((item, index) => {
      const x = (index / (chartData.length - 1 || 1)) * 100; // Prevent division by zero
      const y = 100 - ((item.value / maxValue) * 85); // Leave some margin at top
      return { x, y, ...item };
    });
  }, [chartData, maxValue]);

  // Create the SVG paths
  const pathD = points.length > 0
    ? `M ${points[0].x} ${points[0].y} ${points.slice(1).map(point => `L ${point.x} ${point.y}`).join(' ')}`
    : '';

  // Create the area paths (for the gradient fill)
  const areaPathD = points.length > 0
    ? `${pathD} L ${points[points.length - 1].x} 100 L ${points[0].x} 100 Z`
    : '';

  // Calculate average value
  const currentAvg = chartData.length > 0
    ? parseFloat((chartData.reduce((sum, item) => sum + item.value, 0) / chartData.length).toFixed(1))
    : 0;

  // Get current metric color
  const activeMetric = metrics.find(m => m.id === activeTab);
  const activeColor = activeMetric ? activeMetric.color : "#8A3AEA";

  // Effect to update tooltip position and visibility when hoveredPoint changes
  useEffect(() => {
    if (hoveredPoint !== null && points[hoveredPoint]) {
      // Calculate position for the tooltip
      const position = calculateTooltipPosition(
        points[hoveredPoint].x,
        points[hoveredPoint].y
      );

      // Update portal position
      setTooltipPortalPosition({
        left: position.left,
        top: position.top
      });

      // Show tooltip
      setTooltipVisible(true);

      // Measure tooltip after it's rendered
      if (tooltipRef.current) {
        const rect = tooltipRef.current.getBoundingClientRect();
        if (rect.width > 0 && rect.height > 0) {
          setTooltipSize({
            width: rect.width,
            height: rect.height
          });
        }
      }
    } else {
      // Hide tooltip when no point is hovered
      setTooltipVisible(false);
    }
  }, [hoveredPoint, calculateTooltipPosition, points]);

  // Add resize observer to recalculate tooltip position when window or container size changes
  useEffect(() => {
    if (!containerRef.current) return;

    const updateTooltipOnResize = () => {
      // Only update if there's an active tooltip
      if (hoveredPoint !== null && points[hoveredPoint]) {
        const newPosition = calculateTooltipPosition(
          points[hoveredPoint].x,
          points[hoveredPoint].y
        );
        setTooltipPortalPosition({
          left: newPosition.left,
          top: newPosition.top
        });
      }
    };

    // Create resize observer for the container
    const resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(updateTooltipOnResize);
    });

    // Observe container
    resizeObserver.observe(containerRef.current);

    // Also listen for window resize events
    window.addEventListener('resize', updateTooltipOnResize);
    window.addEventListener('scroll', updateTooltipOnResize);

    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateTooltipOnResize);
      window.removeEventListener('scroll', updateTooltipOnResize);
    };
  }, [calculateTooltipPosition, hoveredPoint, points]);

  return (
    <div className="relative w-full flex flex-col" style={{ height: `${height}px` }} ref={containerRef}>
      {/* Metrics tabs */}
      <div className="flex mb-4 space-x-2 justify-center">
        {metrics.map((metric) => (
          <button
            key={metric.id}
            className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === metric.id
              ? `bg-opacity-20 bg-[${metric.color}] text-white ring-1 ring-[${metric.color}] ring-opacity-60`
              : 'bg-gray-800 text-gray-400 hover:text-gray-300'}`}
            onClick={() => {
              if (activeTab !== metric.id) {
                setActiveTab(metric.id);
              }
            }}
            style={{
              backgroundColor: activeTab === metric.id ? `${metric.color}20` : '',
              boxShadow: activeTab === metric.id ? `0 0 8px ${metric.color}40` : ''
            }}
          >
            {metric.label}
          </button>
        ))}
      </div>

      {/* Performance summary */}
      <div className="flex justify-center items-center mb-2 px-1">
        <div className="flex flex-col items-center">
          <div className="text-xs text-gray-400">Average {activeMetric.label} Performance based on last {chartData.length} practices</div>
          <div className="text-xl font-bold" style={{ color: activeColor }}>{currentAvg.toFixed(1)}%</div>
        </div>
      </div>

      {/* Chart */}
      <div className="relative flex-grow" ref={chartRef}>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Gradient fills */}
              <defs>
                <linearGradient id={`chartGradient-${activeTab}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={`${activeColor}80`} />
                  <stop offset="100%" stopColor={`${activeColor}00`} />
                </linearGradient>
                <linearGradient id={`prevChartGradient-${activeTab}`} x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
                  <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <g className="chart-grid">
                {[20, 40, 60, 80].map(y => (
                  <line
                    key={y}
                    x1="0"
                    y1={y}
                    x2="100"
                    y2={y}
                    stroke="rgba(255, 255, 255, 0.1)"
                    strokeDasharray="2,2"
                  />
                ))}
                {/* Vertical grid lines */}
                {processedData[activeTab]?.map((_, index) => {
                  if (index === 0 || index === processedData[activeTab].length - 1) return null;
                  const x = (index / (processedData[activeTab].length - 1)) * 100;
                  return (
                    <line
                      key={`vgrid-${index}`}
                      x1={x}
                      y1="0"
                      x2={x}
                      y2="100"
                      stroke="rgba(255, 255, 255, 0.05)"
                      strokeDasharray="2,2"
                    />
                  );
                }) || []}
              </g>

              {/* Current week area fill */}
              <motion.path
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                d={areaPathD}
                fill={`url(#chartGradient-${activeTab})`}
              />

              {/* Current week line */}
              <motion.path
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                d={pathD}
                fill="none"
                stroke={activeColor}
                strokeWidth="2.5"
                strokeLinecap="round"
              />

              {/* Current week data points */}
              {points.map((point, index) => (
                <motion.circle
                  key={index}
                  initial={{ opacity: 0, r: 0 }}
                  animate={{
                    opacity: 1,
                    r: hoveredPoint === index ? 5 : 3,
                    stroke: hoveredPoint === index ? "white" : activeColor,
                    strokeWidth: hoveredPoint === index ? 2 : 1.5
                  }}
                  transition={{
                    delay: 0.5 + (index * 0.07),
                    duration: 0.3
                  }}
                  cx={point.x}
                  cy={point.y}
                  fill={hoveredPoint === index ? activeColor : "#232429"}
                  stroke={hoveredPoint === index ? "white" : activeColor}
                  strokeWidth={hoveredPoint === index ? 2 : 1.5}
                  onMouseEnter={() => {
                    setHoveredPoint(index);
                  }}
                  onMouseLeave={() => setHoveredPoint(null)}
                  style={{ cursor: 'pointer' }}
                />
              ))}
            </svg>

            {/* Pulse effect at the data point */}
            <AnimatePresence>
              {hoveredPoint !== null && points[hoveredPoint] && (
                <div className="absolute pointer-events-none z-40"
                  style={{
                    left: `${points[hoveredPoint].x}%`,
                    top: `${points[hoveredPoint].y}%`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  {/* Pulse effect around the point */}
                  <motion.div
                    className="absolute rounded-full"
                    style={{
                      backgroundColor: `${activeColor}20`,
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)'
                    }}
                    initial={{ width: 10, height: 10, opacity: 0.7 }}
                    animate={{
                      width: [10, 30, 10],
                      height: [10, 30, 10],
                      opacity: [0.7, 0, 0.7]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "easeInOut"
                    }}
                  />
                </div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>

        {/* Loading indicator */}
        <AnimatePresence>
          {isAnimating && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-20"
            >
              <div className="flex items-center space-x-2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-gray-600 border-t-white rounded-full"
                />
                <span className="text-sm text-gray-300">Loading...</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* X-axis labels */}
      <div className="flex justify-between mt-2 text-xs text-gray-400">
        {processedData[activeTab]?.map((item, index) => {
          // Extract just the date part without time for display
          const dateLabel = item.date.split(',')[0];

          return (
            <div
              key={index}
              className={`text-center transition-colors duration-300 ${hoveredPoint === index ? 'text-white' : ''}`}
              style={{ width: `${100 / (processedData[activeTab]?.length || 1)}%` }}
            >
              {dateLabel}
            </div>
          );
        }) || []}
      </div>

      {/* Legend */}
      <div className="flex justify-center mt-3 space-x-4 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: activeColor }}></div>
          <span className="text-gray-300">Performance Data</span>
        </div>
      </div>

      {/* Tooltip Portal - rendered outside the container to avoid clipping */}
      {isMounted && tooltipVisible && hoveredPoint !== null && points[hoveredPoint] && createPortal(
        <AnimatePresence>
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 25
            }}
            className="fixed bg-[#1E1E2E]/90 backdrop-blur-md text-white text-xs px-6 py-5 rounded-2xl z-[9999] pointer-events-none"
            style={{
              boxShadow: `0 0 25px ${activeColor}35, 0 0 15px ${activeColor}25, 0 0 5px ${activeColor}15, inset 0 0 3px ${activeColor}20`,
              left: `${tooltipPortalPosition.left}px`,
              top: `${tooltipPortalPosition.top}px`,
              width: `${tooltipSize.width}px`,
              border: 'none',
              borderBottom: `3px solid ${activeColor}`,
              transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
            }}
          >
            {/* No connector or arrow - clean design */}

            {/* Decorative gradient background */}
            <div
              className="absolute inset-0 opacity-15 -z-10 rounded-2xl overflow-hidden"
              style={{
                background: `radial-gradient(circle at top left, ${activeColor}, transparent 70%),
                            linear-gradient(135deg, ${activeColor}10, transparent 50%)`,
                filter: 'blur(0.5px)'
              }}
            />

            {/* Subtle animated glow effect */}
            <motion.div
              className="absolute inset-0 -z-20 rounded-2xl overflow-hidden opacity-20"
              animate={{
                opacity: [0.1, 0.2, 0.1],
                scale: [0.98, 1.01, 0.98]
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
              style={{
                background: `radial-gradient(circle at center, ${activeColor}50, transparent 70%)`,
                filter: 'blur(8px)',
                boxShadow: `0 0 30px ${activeColor}40`
              }}
            />

            {/* Content */}
            <div className="flex items-center justify-between mb-3">
              <div className="font-medium text-sm tracking-wide">{points[hoveredPoint].date}</div>
              <div className="text-xs px-2 py-0.5 rounded-full border border-opacity-30"
                style={{
                  backgroundColor: `${activeColor}15`,
                  color: activeColor,
                  borderColor: activeColor,
                  boxShadow: `0 0 5px ${activeColor}30`
                }}>
                {activeMetric.label}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="text-xs text-gray-300 italic leading-relaxed">
                {activeMetric.description}
              </div>

              <div className="flex justify-center items-center gap-3 p-3 mt-1">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, type: "spring" }}
                >
                  <span className="text-3xl font-bold tracking-tight" style={{
                    color: activeColor,
                    textShadow: `0 0 10px ${activeColor}40, 0 0 20px ${activeColor}20`
                  }}>
                    {points[hoveredPoint].value.toFixed(1)}%
                  </span>
                  <span className="text-xs text-gray-400 mt-1">{activeMetric.label} Score</span>
                </motion.div>
              </div>
            </div>

            {/* Additional metrics */}
            <div className="mt-5 grid grid-cols-3 gap-4 text-xs border-t border-gray-700/20 pt-4">
              <motion.div
                className="flex flex-col items-center p-2"
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <span className="text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70">Duration</span>
                <div className="flex items-center">
                  <span className="font-medium text-white/90">{points[hoveredPoint].duration}</span>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-2"
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70">Words</span>
                <div className="flex items-center">
                  <span className="font-medium text-white/90">{points[hoveredPoint].wordCount}</span>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col items-center p-2"
                initial={{ opacity: 0.5, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <span className="text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70">Filler Words</span>
                <div className="flex items-center">
                  <span className="font-medium text-white/90">{points[hoveredPoint].fillerWords}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </div>
  );
};

export default PerformanceChart;
