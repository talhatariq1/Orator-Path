"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";
import { widgetThemes } from "../../../utils/colorPalette";

const StatCard = ({
  title,
  value,
  change,
  theme = "blue",
  delay = 0,
  subtitle,
  timeframe,
  lastUpdated,
  description,
  previousValue
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isValueChanged, setIsValueChanged] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0, placement: 'bottom' });
  const prevValueRef = useRef(value);
  const cardRef = useRef(null);
  const infoButtonRef = useRef(null);

  const themeStyles = widgetThemes[theme] || widgetThemes.blue;
  const isPositive = change && change.startsWith('+');
  const isLoading = value === "Loading...";

  // Format value if it's a number
  const formattedValue = !isLoading && !isNaN(value) && !value.toString().includes('%')
    ? (value.toString().includes('.') ? parseFloat(value).toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 }) : parseInt(value).toLocaleString())
    : value;

  // Generate glow color based on theme
  const glowColor = {
    blue: "rgba(59, 130, 246, 0.5)", // blue-500
    purple: "rgba(139, 92, 246, 0.5)", // purple-500
    green: "rgba(34, 197, 94, 0.5)", // green-500
    yellow: "rgba(234, 179, 8, 0.5)", // yellow-500
    red: "rgba(239, 68, 68, 0.5)", // red-500
  }[theme] || "rgba(59, 130, 246, 0.5)";

  // Effect to detect value changes and trigger animation
  useEffect(() => {
    if (prevValueRef.current !== value && !isLoading && prevValueRef.current !== "Loading...") {
      setIsValueChanged(true);
      const timer = setTimeout(() => {
        setIsValueChanged(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    prevValueRef.current = value;
  }, [value, isLoading]);

  // Generate description if not provided
  const tooltipContent = description || `${title} shows your ${title.toLowerCase()} over ${timeframe || 'all time'}.`;

  // Format the change value for display
  const formattedChange = change && !isLoading ? (
    isPositive ? `+${change.replace('+', '')}` : change
  ) : "";

  // Handle mouse enter/leave for card hover effect
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Calculate optimal tooltip position with boundary detection
  const calculateTooltipPosition = (buttonRect, tooltipWidth = 250, tooltipHeight = 100) => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    // Calculate button center point
    const buttonCenterX = buttonRect.left + (buttonRect.width / 2);
    const buttonCenterY = buttonRect.top + (buttonRect.height / 2);

    // Default position (below the button)
    let position = {
      // Center the tooltip under the button, with a slight offset to the left
      x: buttonRect.left - 30,
      y: buttonRect.bottom + 5,
      placement: 'bottom', // 'bottom', 'top', 'left', 'right'
      arrowPosition: {} // Will store the arrow position
    };

    // Check if tooltip would go off the right edge
    if (buttonRect.left + tooltipWidth > viewportWidth - 20) {
      // Position to the left of the button if there's enough space
      if (buttonRect.right - tooltipWidth > 20) {
        position.x = buttonRect.right - tooltipWidth;
      } else {
        // Center horizontally if it would go off both edges
        position.x = Math.max(20, Math.min(viewportWidth - tooltipWidth - 20, buttonRect.left));
      }
    }

    // Check if tooltip would go off the bottom edge
    if (buttonRect.bottom + tooltipHeight > viewportHeight - 20) {
      // Position above the button
      position.y = buttonRect.top - tooltipHeight - 5;
      position.placement = 'top';
    }

    // Check if tooltip would go off the top edge
    if (position.placement === 'top' && position.y < 20) {
      // If there's not enough space above, try positioning to the right
      if (buttonRect.right + tooltipWidth < viewportWidth - 20) {
        position.x = buttonRect.right + 5;
        position.y = buttonRect.top;
        position.placement = 'right';
      }
      // If not enough space to the right, try to the left
      else if (buttonRect.left - tooltipWidth > 20) {
        position.x = buttonRect.left - tooltipWidth - 5;
        position.y = buttonRect.top;
        position.placement = 'left';
      }
      // If no good position, default to below but capped at viewport bounds
      else {
        position.y = buttonRect.bottom + 5;
        position.placement = 'bottom';
        position.y = Math.min(position.y, viewportHeight - tooltipHeight - 20);
      }
    }

    // Calculate arrow position based on placement
    switch (position.placement) {
      case 'bottom':
        // Arrow at the top, pointing to the button
        position.arrowPosition = {
          // Adjust left position to be more aligned with the button (subtract 15px offset)
          left: Math.max(10, Math.min(tooltipWidth - 10, buttonCenterX - position.x - 15))
        };
        break;
      case 'top':
        // Arrow at the bottom, pointing to the button
        position.arrowPosition = {
          // Adjust left position to be more aligned with the button (subtract 15px offset)
          left: Math.max(10, Math.min(tooltipWidth - 10, buttonCenterX - position.x - 15))
        };
        break;
      case 'left':
        // Arrow at the right, pointing to the button
        position.arrowPosition = {
          // Adjust top position to be more aligned with the button (subtract 5px offset)
          top: Math.max(10, Math.min(tooltipHeight - 10, buttonCenterY - position.y - 5))
        };
        break;
      case 'right':
        // Arrow at the left, pointing to the button
        position.arrowPosition = {
          // Adjust top position to be more aligned with the button (subtract 5px offset)
          top: Math.max(10, Math.min(tooltipHeight - 10, buttonCenterY - position.y - 5))
        };
        break;
    }

    return position;
  };

  // Handle info button click to show/hide tooltip
  const handleInfoButtonClick = (e) => {
    e.stopPropagation();

    if (showTooltip) {
      setShowTooltip(false);
    } else {
      // Calculate position based on the info button
      if (infoButtonRef.current) {
        const rect = infoButtonRef.current.getBoundingClientRect();
        const position = calculateTooltipPosition(rect);
        setTooltipPosition(position);
      }
      setShowTooltip(true);
    }
  };

  // Effect to handle clicks outside the tooltip to dismiss it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showTooltip &&
        infoButtonRef.current &&
        !infoButtonRef.current.contains(event.target)
      ) {
        setShowTooltip(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showTooltip]);

  // Use useEffect to ensure we only attempt to use document on the client side
  const [isMounted, setIsMounted] = useState(false);
  const tooltipRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update tooltip position on window resize
  useEffect(() => {
    if (!showTooltip) return;

    const handleResize = () => {
      if (infoButtonRef.current) {
        const rect = infoButtonRef.current.getBoundingClientRect();
        // Get actual tooltip dimensions if available
        const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 250;
        const tooltipHeight = tooltipRef.current ? tooltipRef.current.offsetHeight : 100;
        const position = calculateTooltipPosition(rect, tooltipWidth, tooltipHeight);
        setTooltipPosition(position);
      }
    };

    window.addEventListener('resize', handleResize);
    // Initial position calculation with a slight delay to ensure tooltip is rendered
    const timer = setTimeout(handleResize, 50);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [showTooltip]);

  return (
    <div className="relative">
      {/* Custom tooltip - rendered in a portal to avoid clipping */}
      {isMounted && showTooltip && createPortal(
        <AnimatePresence>
          <motion.div
            ref={tooltipRef}
            className="fixed z-[9999] bg-gray-800/95 text-white px-4 py-3 rounded-lg shadow-lg text-sm"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            style={{
              // Dynamic border based on placement
              ...(tooltipPosition.placement === 'bottom' && { borderTop: `3px solid ${glowColor.replace('0.5', '1')}` }),
              ...(tooltipPosition.placement === 'top' && { borderBottom: `3px solid ${glowColor.replace('0.5', '1')}` }),
              ...(tooltipPosition.placement === 'left' && { borderRight: `3px solid ${glowColor.replace('0.5', '1')}` }),
              ...(tooltipPosition.placement === 'right' && { borderLeft: `3px solid ${glowColor.replace('0.5', '1')}` }),
              backdropFilter: 'blur(8px)',
              width: 'max-content',
              maxWidth: '250px',
              // Position based on calculated coordinates
              top: `${tooltipPosition.y}px`,
              left: `${tooltipPosition.x}px`,
              boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 10px ${glowColor}`
            }}
          >
            <div className="relative">
              {tooltipContent}

              {/* Dynamic arrow positioning based on placement */}
              {tooltipPosition.placement === 'bottom' && (
                <div
                  className="absolute -top-4 transform rotate-45 w-2 h-2 bg-gray-800/95"
                  style={{
                    borderTop: `3px solid ${glowColor.replace('0.5', '1')}`,
                    borderLeft: `3px solid ${glowColor.replace('0.5', '1')}`,
                    left: `${tooltipPosition.arrowPosition?.left || 20}px`
                  }}
                />
              )}

              {tooltipPosition.placement === 'top' && (
                <div
                  className="absolute -bottom-4 transform rotate-45 w-2 h-2 bg-gray-800/95"
                  style={{
                    borderRight: `3px solid ${glowColor.replace('0.5', '1')}`,
                    borderBottom: `3px solid ${glowColor.replace('0.5', '1')}`,
                    left: `${tooltipPosition.arrowPosition?.left || 20}px`
                  }}
                />
              )}

              {tooltipPosition.placement === 'left' && (
                <div
                  className="absolute -right-4 transform rotate-45 w-2 h-2 bg-gray-800/95"
                  style={{
                    borderTop: `3px solid ${glowColor.replace('0.5', '1')}`,
                    borderRight: `3px solid ${glowColor.replace('0.5', '1')}`,
                    top: `${tooltipPosition.arrowPosition?.top || 20}px`
                  }}
                />
              )}

              {tooltipPosition.placement === 'right' && (
                <div
                  className="absolute -left-4 transform rotate-45 w-2 h-2 bg-gray-800/95"
                  style={{
                    borderBottom: `3px solid ${glowColor.replace('0.5', '1')}`,
                    borderLeft: `3px solid ${glowColor.replace('0.5', '1')}`,
                    top: `${tooltipPosition.arrowPosition?.top || 20}px`
                  }}
                />
              )}
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}

      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 1,
          y: 0,
          boxShadow: isHovered
            ? `0 0 25px ${glowColor}`
            : isValueChanged
              ? `0 0 20px ${glowColor}`
              : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        }}
        transition={{
          duration: 0.5,
          delay,
          boxShadow: { duration: 0.3 }
        }}
        className={`rounded-xl border ${themeStyles.border} bg-gradient-to-br from-gray-900/80 to-gray-950/80 p-5 backdrop-blur-sm shadow-lg relative overflow-hidden`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        whileHover={{ scale: 1.02 }}
      >
      {/* Value change pulse animation */}
      <AnimatePresence>
        {isValueChanged && (
          <motion.div
            className="absolute inset-0 rounded-xl z-0"
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{
              opacity: [0.5, 0.2, 0],
              scale: [0.95, 1.02, 1.05]
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            style={{
              background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
              pointerEvents: 'none'
            }}
          />
        )}
      </AnimatePresence>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id={`grid-stat-${theme}`} width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#grid-stat-${theme})`} />
        </svg>
      </div>

      {/* Animated corner accent */}
      <motion.div
        className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${themeStyles.text.replace('text-', 'from-').replace('400', '600')} to-transparent opacity-20 rounded-bl-full`}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.2 }}
        transition={{ duration: 0.7, delay: delay + 0.3 }}
      />



      <div className="flex flex-col relative z-10">
        {/* Header with title and info icon in a single row */}
        <div className="flex items-center justify-between mb-2">
          {/* Left side: Title with indicator dot */}
          <div className="flex items-center flex-1 min-w-0 mr-2">
            <motion.div
              className={`font-medium ${themeStyles.heading} stat-label flex items-center flex-1 min-w-0`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
            >
              <motion.span
                className={`inline-block flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${themeStyles.text.replace('text-', 'from-').replace('400', '500')} to-transparent mr-2`}
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
              <span className="text-base font-semibold tracking-wide truncate">{title}</span>
            </motion.div>
          </div>

          {/* Right side: Info button */}
          <motion.button
            ref={infoButtonRef}
            className={`p-1 rounded-full ${themeStyles.text} bg-gray-800/50 hover:bg-gray-700/70 focus:outline-none focus:ring-1 focus:ring-gray-500 flex-shrink-0`}
            onClick={handleInfoButtonClick}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.9, scale: 1 }}
            whileHover={{ opacity: 1, scale: 1.1, backgroundColor: `rgba(75, 85, 99, 0.7)` }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2, delay: delay + 0.3 }}
            aria-label="More information"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </motion.button>
        </div>

        {/* Value and change indicator */}
        <div className="flex items-baseline mt-1">
          <motion.div
            className={`text-3xl font-bold ${themeStyles.heading} stat-value`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{
              opacity: 1,
              scale: isValueChanged ? [1, 1.05, 1] : 1,
              textShadow: isHovered || isValueChanged ? `0 0 8px ${glowColor}` : "none"
            }}
            transition={{
              opacity: { duration: 0.5, delay: delay + 0.3 },
              scale: {
                duration: isValueChanged ? 0.5 : 0.3,
                delay: isValueChanged ? 0 : delay + 0.3
              },
              textShadow: { duration: 0.3 }
            }}
          >
            {isLoading ? (
              <div className="flex items-center">
                <span>Loading</span>
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                  className="ml-1"
                >
                  ...
                </motion.span>
              </div>
            ) : (
              formattedValue
            )}
          </motion.div>

          {change && !isLoading && (
            <motion.div
              className={`ml-3 px-2 py-1 text-sm rounded-full ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} flex items-center`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: delay + 0.4 }}
            >
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 mr-1"
                viewBox="0 0 20 20"
                fill="currentColor"
                animate={{
                  y: isPositive ? [0, -2, 0] : [0, 2, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  repeatDelay: 1
                }}
              >
                {isPositive ? (
                  <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                ) : (
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                )}
              </motion.svg>
              {formattedChange}
            </motion.div>
          )}
        </div>

        {/* Divider */}
        <motion.div
          className={`h-px w-full ${themeStyles.border.replace('border-', 'bg-')} my-2 opacity-30`}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.3 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
        />

        {/* Footer with metadata */}
        <div className="flex flex-col mt-1">
          {subtitle && (
            <motion.p
              className="text-xs text-gray-500 mb-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: delay + 0.5 }}
            >
              {subtitle}
            </motion.p>
          )}

          <div className="flex justify-between items-center">
            {/* Timeframe display */}
            {timeframe && !isLoading && (
              <motion.p
                className="text-xs text-gray-500 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: delay + 0.6 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                {timeframe}
              </motion.p>
            )}

            {/* Last updated display */}
            {lastUpdated && !isLoading && (
              <motion.p
                className="text-xs text-gray-500 flex items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ delay: delay + 0.7 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                {lastUpdated}
              </motion.p>
            )}
          </div>
        </div>
      </div>
      </motion.div>
    </div>
  );
};

export default StatCard;
