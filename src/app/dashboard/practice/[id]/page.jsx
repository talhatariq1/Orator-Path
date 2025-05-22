"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";
import DashboardLayout from "../../../components/dashboard/DashboardLayout";
import DashboardPageWrapper from "../../../components/dashboard/DashboardPageWrapper";
import WidgetCard from "../../../components/dashboard/ui/WidgetCard";
import { fetchWithRetry } from "../../../../lib/api/apiUtils";
import { WavyBackground } from "../../../../components/ui/wavy-background.js";

// Custom arrow left icon component
const ArrowLeftIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </svg>
);

// Icons for text analysis sections
const icons = {
  stats: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
    </svg>
  ),
  filler: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  ),
  sentiment: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  ),
  content: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
    </svg>
  ),
  emotion: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" />
    </svg>
  ),
  readability: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
    </svg>
  ),
  transition: (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-400" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  )
};

// Section component for text analysis
const Section = ({ title, icon, children, className = "", delay = 0 }) => (
  <motion.div
    className={`bg-gray-900/40 p-5 rounded-lg border border-gray-800/40 ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="flex items-center mb-3">
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 p-2 rounded-lg mr-3 border border-gray-700/30">
        {icon}
      </div>
      <h3 className="font-medium text-gray-200">{title}</h3>
    </div>
    <div className="space-y-2">
      {children}
    </div>
  </motion.div>
);

// Stat component for displaying individual statistics
const Stat = ({ label, value, suffix = "" }) => {
  // Format the value based on its type and label
  const formatValue = (val, lbl) => {
    if (val === null || val === undefined) return "N/A";

    if (typeof val === 'number') {
      // Integer values (counts, etc.)
      if (lbl.toLowerCase().includes('count') ||
          lbl.toLowerCase().includes('word') ||
          lbl.toLowerCase().includes('sentence')) {
        return Math.round(val);
      }

      // Percentage values
      else if (lbl.toLowerCase().includes('percentage') ||
               lbl.toLowerCase().includes('richness') ||
               suffix === '%') {
        return val.toFixed(1);
      }

      // Ratios and other decimal values
      else if (lbl.toLowerCase().includes('ratio') ||
               lbl.toLowerCase().includes('polarity') ||
               lbl.toLowerCase().includes('subjectivity')) {
        return val.toFixed(2);
      }

      // Default number formatting
      else {
        return val.toFixed(1);
      }
    }

    // String values
    return val;
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-gray-400">{label}</span>
      <span className="text-gray-300 font-medium">
        {formatValue(value, label)}
        {suffix}
      </span>
    </div>
  );
};

// ListPreview component for displaying lists of items
const ListPreview = ({ items, emptyMessage }) => {
  if (!items || (Array.isArray(items) && items.length === 0) || (typeof items === 'object' && Object.keys(items).length === 0)) {
    return <p className="text-gray-500 italic text-sm mt-2">{emptyMessage}</p>;
  }

  if (Array.isArray(items)) {
    return (
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item, index) => (
          <span key={index} className="bg-gray-800/60 text-gray-300 px-2 py-1 rounded text-xs">
            {item}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className="mt-2 space-y-1">
      {Object.entries(items)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5)
        .map(([word, count]) => (
          <div key={word} className="flex justify-between items-center">
            <span className="text-gray-400 text-sm">{word}</span>
            <span className="text-gray-500 text-xs">{count}</span>
          </div>
        ))}
    </div>
  );
};

// EmotionBar component for emotion analysis
const EmotionBar = ({ emotion, percent }) => {
  const getEmotionColor = (emotion) => {
    const colors = {
      joy: "bg-yellow-500",
      sadness: "bg-blue-500",
      anger: "bg-red-500",
      fear: "bg-purple-500",
      surprise: "bg-pink-500",
      disgust: "bg-green-500",
      neutral: "bg-gray-500",
      love: "bg-rose-500",
      happiness: "bg-amber-500",
      excitement: "bg-orange-500",
      confidence: "bg-emerald-500",
      curiosity: "bg-cyan-500",
      determination: "bg-indigo-500"
    };

    return colors[emotion.toLowerCase()] || "bg-gray-500";
  };

  // Normalize the percent value
  const normalizedPercent = () => {
    // If percent is already between 0-1, use it directly
    if (percent >= 0 && percent <= 1) {
      return percent;
    }
    // If percent is between 0-100, convert to 0-1
    else if (percent > 1 && percent <= 100) {
      return percent / 100;
    }
    // Default fallback
    return 0;
  };

  // Format the percentage for display
  const displayPercent = () => {
    const normalized = normalizedPercent();
    return `${(normalized * 100).toFixed(0)}%`;
  };

  return (
    <div className="bg-gray-900/60 p-3 rounded-lg">
      <div className="flex justify-between items-center mb-1">
        <span className="text-gray-300 capitalize text-sm">{emotion}</span>
        <span className="text-gray-400 text-xs">{displayPercent()}</span>
      </div>
      <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${getEmotionColor(emotion)} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${normalizedPercent() * 100}%` }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>
    </div>
  );
};

/**
 * Practice Analysis Page
 * Displays detailed analysis for a specific practice session with tabs for
 * Transcript, Voice Analysis, Text Analysis, and Recommendations
 */
const PracticeAnalysisPage = () => {
  const params = useParams();
  const [practiceData, setPracticeData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("transcript");

  // Define tabs for navigation
  const tabs = [
    {
      id: "transcript",
      label: "Transcript",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: "voice",
      label: "Voice Analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: "text",
      label: "Text Analysis",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
          <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      id: "recommendations",
      label: "Recommendations",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  // Fetch practice data when component mounts
  useEffect(() => {
    if (!params.id) return;

    const fetchPracticeData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Generate a request ID for tracking
        const requestId = Math.random().toString(36).substring(2, 10);
        console.log(`[${requestId}] Fetching practice data for ID: ${params.id}`);

        // Use fetchWithRetry for better error handling and automatic retries
        const result = await fetchWithRetry(`/api/practice-session/${params.id}`, {}, {
          timeout: 3000,        // 3 second initial timeout
          maxRetries: 2,        // Retry up to 2 times
          retryDelay: 300,      // Start with 300ms delay
          useFallbackCache: true // Use fallback cache if available
        });

        // Check if the fetch was successful
        if (!result.success) {
          throw new Error(result.error || "Failed to fetch practice data");
        }

        const data = result.data;

        // Check if data has the expected structure
        if (!data || !data.success || !data.session) {
          console.log("Invalid practice data format:", data);
          throw new Error("Invalid practice data format");
        }

        // Set the practice data
        setPracticeData(data.session);
        console.log("Practice data loaded:", data.session);
      } catch (error) {
        console.error("Error fetching practice data:", error);
        setError(error.message || "Failed to load practice data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPracticeData();
  }, [params.id]);

  // Get score color based on value
  const getScoreColor = (score) => {
    if (score >= 90) return "text-green-400";
    if (score >= 80) return "text-blue-400";
    if (score >= 70) return "text-purple-400";
    if (score >= 60) return "text-yellow-400";
    return "text-red-400";
  };

  // Get score description based on value
  const getScoreDescription = (score) => {
    if (score >= 90) return "Excellent";
    if (score >= 80) return "Very Good";
    if (score >= 70) return "Good";
    if (score >= 60) return "Fair";
    return "Needs Improvement";
  };

  // Get score theme based on value
  const getScoreTheme = (score) => {
    if (score >= 90) return "green";
    if (score >= 80) return "blue";
    if (score >= 70) return "purple";
    if (score >= 60) return "yellow";
    return "red";
  };

  // Utility function to safely get nested properties
  const safeGet = (obj, path, defaultValue = null) => {
    // Handle null or undefined objects
    if (!obj || typeof obj !== 'object') return defaultValue;

    // Split the path into individual keys
    const keys = path.split('.');
    let result = obj;

    // Traverse the object using the keys
    for (const key of keys) {
      if (result === null || result === undefined || typeof result !== 'object') {
        return defaultValue;
      }
      result = result[key];
    }

    // Handle special cases for different data types
    if (result === null || result === undefined) {
      return defaultValue;
    }

    // Return the result or default value
    return result;
  };

  // Format number with specified decimal places and data type awareness
  const formatNumber = (num, decimalPlaces = 2) => {
    // Handle invalid input
    if (num === null || num === undefined || isNaN(parseFloat(num))) {
      return "0";
    }

    // Convert to number if it's a string
    const value = typeof num === 'string' ? parseFloat(num) : num;

    // Handle integers - don't show decimal places for whole numbers
    if (Number.isInteger(value) && decimalPlaces === 0) {
      return value.toString();
    }

    // Format with specified decimal places
    return value.toFixed(decimalPlaces);
  };

  // Get speaking rate status
  const getSpeakingRateStatus = (rate) => {
    if (rate < 2.5) return { status: 'slow', color: 'text-blue-400', message: 'Your speaking pace is slow and deliberate.' };
    if (rate > 4.0) return { status: 'fast', color: 'text-amber-400', message: 'Your speaking pace is quite fast.' };
    return { status: 'optimal', color: 'text-green-400', message: 'Your speaking pace is at an optimal rate.' };
  };

  // Render error display
  const renderErrorDisplay = (errorMessage) => (
    <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-700/50">
      <p className="text-red-300 font-medium">Could not load this section.</p>
      <p className="text-red-400 text-sm mt-1">Error: {errorMessage || "Unknown error."}</p>
    </div>
  );

  // Render voice analysis tab content
  const renderVoiceAnalysis = () => {
    if (!practiceData) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Practice data is not available.</p>;
    }

    if (!practiceData.voiceAnalysis) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Voice analysis data is not available.</p>;
    }

    const voice = practiceData.voiceAnalysis;
    console.log("Voice analysis data:", voice); // Log voice analysis data for debugging

    // Check if the voiceAnalysis object itself has an error reported by the backend
    if (voice.error) {
      return renderErrorDisplay(`Voice analysis failed: ${voice.error}`);
    }

    // Get speaking rate and status with fallback
    const speakingRate = safeGet(voice, 'speaking_rate', 0);
    const rateStatus = getSpeakingRateStatus(speakingRate);

    return (
      <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
          <motion.div className="absolute top-0 right-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
          <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}></motion.div>

          {/* Voice Analysis Header */}
          <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Voice Analysis</h2>
          </motion.div>

          {/* Voice Analysis Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {/* Speaking Rate */}
            <motion.div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-green-500/20 to-green-700/20 p-2 rounded-lg mr-3 border border-green-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">Speaking Rate</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">Rate</span>
                    <span className={`font-medium ${rateStatus.color}`}>{formatNumber(speakingRate, 1)} syl/sec</span>
                  </div>
                  <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className={`h-full ${rateStatus.status === 'optimal' ? 'bg-green-500' : rateStatus.status === 'fast' ? 'bg-amber-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${Math.min(100, (speakingRate / 6) * 100)}%` }}></div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm">{rateStatus.message} {rateStatus.status === 'optimal' ? "Ideal for comprehension." : rateStatus.status === 'fast' ? "Consider slowing down." : "Increase pace for engagement."}</div>
              </div>
            </motion.div>

            {/* Pitch Analysis */}
            <motion.div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                  </svg>
                </div>
                <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Pitch Analysis</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Average Pitch</span>
                  <span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.average', 0))} Hz</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">Min Pitch</span>
                  <span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.min', 0))} Hz</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400">Max Pitch</span>
                  <span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.max', 0))} Hz</span>
                </div>
                <div className="mt-3">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">Variability</span>
                    <span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.variability', 0))}</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pitch.variability', 0) * 100)}%` }}></div>
                  </div>
                </div>
                <div className="text-gray-400 text-sm italic mt-2">
                  {safeGet(voice, 'pitch.variability', 0) < 0.2 ? "Low pitch variability. Try adding more vocal variety." :
                   safeGet(voice, 'pitch.variability', 0) > 0.5 ? "High pitch variability. Your speech is dynamic and engaging." :
                   "Good pitch variability. Your voice has a natural, engaging rhythm."}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 relative z-10">
            {/* Pauses Analysis */}
            <motion.div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 p-2 rounded-lg mr-3 border border-amber-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">Pauses Analysis</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Pauses</span>
                  <span className="text-gray-300 font-medium">{safeGet(voice, 'pauses.count', 0)}</span>
                </div>
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-gray-400 text-sm">Average Duration</span>
                    <span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pauses.average_duration', 0))} seconds</span>
                  </div>
                  <div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pauses.average_duration', 0) * 50)}%` }}></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-3">
                  <span className="text-gray-400 text-sm">Pauses per Minute</span>
                  <span className="text-gray-300 font-medium">
                    {formatNumber(safeGet(voice, 'pauses.count', 0) / (safeGet(voice, 'duration', 60) / 60), 1)}
                  </span>
                </div>
                <div className="text-gray-400 text-sm italic mt-2">
                  {safeGet(voice, 'pauses.count', 0) < 3 ? "Few pauses. Consider adding strategic pauses for emphasis." :
                   safeGet(voice, 'pauses.count', 0) > 10 ? "Frequent pauses. Try to maintain a more fluid delivery." :
                   "Good use of pauses. Your speech has a natural rhythm."}
                </div>
              </div>
            </motion.div>

            {/* Voice Quality */}
            <motion.div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
              <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 p-2 rounded-lg mr-3 border border-indigo-500/30">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100">Voice Quality</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-900/50 p-3 rounded-lg">
                  <span className="text-gray-400 text-sm">Spectral Centroid</span>
                  <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'voice_quality.spectral_centroid', 0))}</p>
                  <p className="text-gray-400 text-xs mt-1">Higher values indicate brighter tone</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg">
                  <span className="text-gray-400 text-sm">Spectral Bandwidth</span>
                  <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'voice_quality.spectral_bandwidth', 0))}</p>
                  <p className="text-gray-400 text-xs mt-1">Indicates tonal richness</p>
                </div>
                <div className="bg-gray-900/50 p-3 rounded-lg col-span-2">
                  <span className="text-gray-400 text-sm">Spectral Contrast</span>
                  <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'voice_quality.spectral_contrast', 0))}</p>
                  <p className="text-gray-400 text-xs mt-1">Indicates tonal quality and clarity</p>
                </div>
                {safeGet(voice, 'gender_estimation.likely_gender') && (
                  <div className="bg-gray-900/50 p-3 rounded-lg col-span-2">
                    <span className="text-gray-400 text-sm">Voice Type</span>
                    <p className="text-gray-300 font-medium capitalize">{safeGet(voice, 'gender_estimation.likely_gender', 'unknown')}</p>
                    <p className="text-gray-400 text-xs mt-1">Confidence: {formatNumber(safeGet(voice, 'gender_estimation.confidence', 0) * 100)}%</p>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Duration Information */}
          <motion.div className="mt-6 bg-gray-900/40 p-5 rounded-lg border border-gray-800/40 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
            <div className="flex items-center mb-3">
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Recording Information</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-gray-900/50 p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Duration</span>
                <p className="text-gray-300 font-medium">{practiceData.duration}</p>
                <p className="text-gray-400 text-xs mt-1">{formatNumber(safeGet(voice, 'duration', 0))} seconds</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Tempo</span>
                <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'tempo', 0))} BPM</p>
                <p className="text-gray-400 text-xs mt-1">Speech rhythm</p>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Volume Avg</span>
                <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.average', 0))}</p>
                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.average', 0) * 100)}%` }}></div>
                </div>
              </div>
              <div className="bg-gray-900/50 p-3 rounded-lg">
                <span className="text-gray-400 text-sm">Volume Var</span>
                <p className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.variability', 0))}</p>
                <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden mt-2">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.variability', 0) * 200)}%` }}></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

 // --- MAIN RENDER ---
const renderTextAnalysis = () => {
  if (!practiceData) {
    return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Practice data is not available.</p>;
  }
  const text = practiceData.textAnalysis;
  if (!text) {
    return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Text analysis data is not available.</p>;
  }
  if (text.error) {
    return renderErrorDisplay(`Text analysis failed: ${text.error}`);
  }

  // Destructure once
  const {
    text_statistics: stats,
    filler_words: filler,
    sentiment_analysis: sentiment,
    content_analysis: content,
    emotion_analysis: emotion,
    readability: read,
    transition_words: transition,
  } = text;

  return (
    <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
        {/* Background effects */}
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}></motion.div>

        {/* Text Analysis Header */}
        <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <motion.div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 p-2 rounded-lg mr-3 border border-indigo-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(99, 102, 241, 0.3)" }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
            </svg>
          </motion.div>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100">Text Analysis</h2>
        </motion.div>

        {/* Text Analysis Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          {/* Text Statistics */}
          <Section title="Text Statistics" icon={icons.stats} delay={0.2}>
            <Stat label="Word Count" value={safeGet(stats, 'word_count', 0)} />
            <Stat label="Sentence Count" value={safeGet(stats, 'sentence_count', 0)} />
            <Stat
              label="Avg Words/Sentence"
              value={safeGet(stats, 'average_words_per_sentence', 0)}
            />
            <Stat
              label="Vocabulary Richness"
              value={safeGet(stats, 'vocabulary_richness', 0)}
              suffix="%"
            />
          </Section>

          {/* Filler Words */}
          <Section title="Filler Words" icon={icons.filler} delay={0.3}>
            <Stat label="Total Count" value={safeGet(filler, 'total_count', 0)} />
            <Stat label="Percentage" value={safeGet(filler, 'percentage', 0)} suffix="%" />
            <ListPreview
              items={safeGet(filler, 'occurrences', {})}
              emptyMessage="No significant filler words detected."
            />
          </Section>

          {/* Sentiment Analysis */}
          <Section title="Sentiment Analysis" icon={icons.sentiment} delay={0.4}>
            <Stat
              label="Label"
              value={safeGet(sentiment, 'label', 'Neutral')}
            />
            <Stat
              label="Polarity"
              value={safeGet(sentiment, 'polarity', 0)}
            />
            <Stat
              label="Subjectivity"
              value={safeGet(sentiment, 'subjectivity', 0)}
            />
          </Section>

          {/* Content Analysis */}
          <Section title="Content Analysis" icon={icons.content} delay={0.5}>
            <Stat
              label="Noun-Verb Ratio"
              value={safeGet(content, 'noun_verb_ratio', 0)}
            />
            <Stat
              label="Hesitation Patterns"
              value={safeGet(content, 'hesitation_patterns', 0)}
            />
            <h4 className="text-gray-300 mt-2 text-sm">Common Words:</h4>
            <ListPreview
              items={safeGet(content, 'most_common_words', [])}
              emptyMessage="No common words data."
            />
          </Section>

          {/* Readability */}
          <Section title="Readability" icon={icons.readability} delay={0.6}>
            <Stat
              label="Reading Level"
              value={safeGet(read, 'reading_level', 'N/A')}
            />
            <Stat
              label="Flesch Reading Ease"
              value={safeGet(read, 'flesch_reading_ease', 0)}
            />
            <p className="text-gray-400 text-sm mt-1 italic">
              (Higher Flesch score means easier to read. 60–70 is plain English.)
            </p>
          </Section>

          {/* Transition Words */}
          {safeGet(transition, 'total_count', 0) > 0 && (
            <Section title="Transition Words" icon={icons.transition} delay={0.7}>
              <Stat
                label="Total Count"
                value={safeGet(transition, 'total_count', 0)}
              />
              <Stat
                label="Percentage"
                value={safeGet(transition, 'percentage', 0)}
                suffix="%"
              />
              <ListPreview
                items={safeGet(transition, 'occurrences', {})}
                emptyMessage="No significant transition words detected."
              />
            </Section>
          )}
        </div>

        {/* Emotion Analysis - Full Width */}
        <Section
          title="Emotion Analysis"
          icon={icons.emotion}
          className="mt-6"
          delay={0.8}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <div className="bg-gray-900/50 p-3 rounded-lg flex-1">
              <p className="text-gray-300">
                Primary Emotion:{' '}
                <span className="capitalize font-medium text-white">
                  {safeGet(emotion, 'primary_emotion', 'Neutral')}
                </span>
              </p>
              <p className="text-gray-300 mt-2">
                Summary:{' '}
                <span className="italic text-gray-400">
                  {safeGet(emotion, 'emotion_summary', 'Emotion analysis not available.')}
                </span>
              </p>
            </div>
          </div>

          {emotion && (emotion.emotion_distribution || emotion.emotion_counts) ? (
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Use emotion_distribution if available, otherwise use emotion_counts */}
              {Object.entries(emotion.emotion_distribution || emotion.emotion_counts || {})
                .sort(([, a], [, b]) => b - a)
                .filter(([, value]) => value > 0) // Filter out zero values
                .slice(0, 9) // Limit to top 9 emotions for better display
                .map(([e, p]) => (
                  <EmotionBar key={e} emotion={e} percent={p} />
                ))}
            </div>
          ) : (
            <p className="text-gray-400 italic text-sm">
              No emotion distribution data available.
            </p>
          )}
        </Section>
      </div>
    </motion.div>
  );
};

  // Render recommendations tab content
  const renderRecommendations = () => {
    if (!practiceData) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Practice data is not available.</p>;
    }

    if (!practiceData.recommendations) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Recommendations are not available.</p>;
    }

    // Check if the recommendations object itself has an error reported by the backend
    if (practiceData.recommendations.error) {
      return renderErrorDisplay(`Recommendations generation failed: ${practiceData.recommendations.error}`);
    }

    const recommendationsData = practiceData.recommendations; // This is the object { recommendations: [], performance_assessment: {}, development_plan: {} }
    const performanceAssessment = safeGet(recommendationsData, 'performance_assessment', {});
    const developmentPlan = safeGet(recommendationsData, 'development_plan', {});
    const specificRecommendations = safeGet(recommendationsData, 'recommendations', []);

    return (
      <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
          <motion.div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
          <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}></motion.div>

          {/* Recommendations Header */}
          <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 p-2 rounded-lg mr-3 border border-teal-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(20, 184, 166, 0.3)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </motion.div>
            <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Personalized Recommendations</h2>
          </motion.div>

          {/* Recommendations Content */}
          <div className="space-y-6 relative z-10">
            {/* Performance Assessment Section */}
            {Object.keys(performanceAssessment).length > 0 && (
              <motion.div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Performance Assessment</h2>
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-gray-300 font-medium">Overall Score</h3>
                      <div className="flex items-center bg-gray-800/60 px-3 py-1 rounded-full">
                        <span className="text-xl font-bold text-purple-300">{formatNumber(safeGet(performanceAssessment, 'overall_score', 0), 0)}</span>
                        <span className="text-gray-400 ml-1">/100</span>
                      </div>
                    </div>

                    <div className="h-3 w-full bg-gray-800/80 rounded-full overflow-hidden shadow-inner mb-4">
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{
                          backgroundColor: safeGet(performanceAssessment, 'overall_score', 0) >= 80 ? '#10B981' :
                                          safeGet(performanceAssessment, 'overall_score', 0) >= 60 ? '#6366F1' :
                                          safeGet(performanceAssessment, 'overall_score', 0) >= 40 ? '#F59E0B' : '#EF4444'
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${safeGet(performanceAssessment, 'overall_score', 0)}%` }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                      >
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}/>
                      </motion.div>
                    </div>

                    <div className="bg-gray-900/40 p-3 rounded-lg">
                      <h3 className="text-gray-300 font-medium mb-1">Performance Level</h3>
                      <p className="text-purple-300 font-semibold">{safeGet(performanceAssessment, 'performance_level', 'Not Available')}</p>
                      <p className="text-gray-400 text-sm mt-2">{safeGet(performanceAssessment, 'performance_description', '')}</p>
                    </div>
                  </div>


                </div>

                {safeGet(performanceAssessment, 'detailed_strengths', []).length > 0 && (
                  <div className="mt-5">
                    <h3 className="font-medium text-green-400 text-lg mb-2">Your Strengths:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {safeGet(performanceAssessment, 'detailed_strengths', []).map((strength, index) => (
                        <div key={index} className="bg-green-900/20 p-3 rounded-lg border border-green-700/30 shadow-sm">
                          <h4 className="font-semibold text-green-300">{strength.category || 'Strength'}: {strength.strength}</h4>
                          <p className="text-gray-400 text-sm mt-1">{strength.description}</p>
                          {strength.enhancement && <p className="text-green-400/80 text-xs mt-1 italic">To enhance: {strength.enhancement}</p>}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {safeGet(performanceAssessment, 'growth_areas', []).length > 0 && (
                  <div className="mt-5">
                    <h3 className="font-medium text-amber-400 text-lg mb-2">Growth Areas:</h3>
                    <div className="flex flex-wrap gap-2">
                      {safeGet(performanceAssessment, 'growth_areas', []).map((area, index) => (
                        <span key={index} className="bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full text-sm border border-amber-700/40 shadow-sm">{area}</span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Priority Improvements Section */}
            {safeGet(performanceAssessment, 'priority_improvements', []).length > 0 && (
              <motion.div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Priority Improvements</h2>
                </div>

                <div className="space-y-3">
                  {safeGet(performanceAssessment, 'priority_improvements', []).map((priority, index) => (
                    <div key={index} className="flex gap-3 items-start p-3 bg-blue-900/20 rounded-lg border-l-4 border-blue-400 shadow-sm">
                      <div className="bg-blue-800/40 rounded-full h-7 w-7 flex items-center justify-center text-blue-300 font-bold shrink-0 text-sm border border-blue-600/50">{index + 1}</div>
                      <div>
                        <h3 className="font-semibold text-blue-300">{priority.category || 'Improvement'}: {priority.issue}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed">{priority.impact}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Specific Recommendations Section */}
            {specificRecommendations.length > 0 && (
              <motion.div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 p-2 rounded-lg mr-3 border border-teal-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Detailed Recommendations</h2>
                </div>

                <div className="space-y-4">
                  {specificRecommendations.map((rec, index) => (
                    <motion.div
                      key={index}
                      className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                    >
                      <div className="flex items-center mb-2">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          rec.category === 'Clarity' ? 'bg-blue-900/50 text-blue-300' :
                          rec.category === 'Fluency' ? 'bg-green-900/50 text-green-300' :
                          rec.category === 'Eloquence' ? 'bg-purple-900/50 text-purple-300' :
                          rec.category === 'Filler Words' ? 'bg-red-900/50 text-red-300' :
                          'bg-gray-800 text-gray-300'
                        }`}>
                          {rec.category}
                        </span>
                        <h3 className="font-medium text-gray-200 ml-2">{rec.issue}</h3>
                      </div>
                      <p className="text-gray-400 text-sm mb-3">{rec.description}</p>
                      <div>
                        <h4 className="text-teal-400 text-sm font-medium mb-1">Suggestion:</h4>
                        <p className="text-gray-300 text-sm">{rec.suggestion}</p>
                      </div>
                      {rec.exercises && rec.exercises.length > 0 && (
                        <div className="mt-3">
                          <h4 className="text-teal-400 text-sm font-medium mb-1">Exercises:</h4>
                          <ul className="list-disc list-inside text-gray-400 text-sm space-y-1">
                            {rec.exercises.map((exercise, i) => (
                              <li key={i}>{exercise}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Development Plan Section */}
            {Object.keys(developmentPlan).length > 0 && safeGet(developmentPlan, 'next_steps', []).length > 0 && (
              <motion.div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                <div className="flex items-center mb-3">
                  <div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 p-2 rounded-lg mr-3 border border-amber-500/30">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  </div>
                  <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-100">Development Plan</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium text-amber-400 mb-2">Next Steps:</h3>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {safeGet(developmentPlan, 'next_steps', []).map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ul>
                  </div>

                  {safeGet(developmentPlan, 'development_pathway', []).length > 0 && (
                    <div>
                      <h3 className="font-medium text-amber-400 mb-2">Development Pathway:</h3>
                      <div className="relative pl-8 space-y-4 before:absolute before:left-4 before:top-2 before:h-full before:w-0.5 before:-translate-x-1/2 before:bg-amber-700/30">
                        {safeGet(developmentPlan, 'development_pathway', []).map((path, index) => (
                          <div key={index} className="relative">
                            <div className="absolute left-0 top-1.5 h-3 w-3 -translate-x-4 rounded-full border-2 border-amber-500 bg-gray-900"></div>
                            <h4 className="font-medium text-amber-300">{path.stage || `Stage ${index + 1}`}</h4>
                            <p className="text-gray-400 text-sm">{path.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* No Recommendations Message */}
            {Object.keys(performanceAssessment).length === 0 && specificRecommendations.length === 0 && Object.keys(developmentPlan).length === 0 && (
              <motion.div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40 text-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-gray-400 text-lg mb-1">No Detailed Recommendations Available</h3>
                <p className="text-gray-500">We couldn't generate specific recommendations for this practice session.</p>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    );
  };

  // Render transcript tab content
  const renderTranscript = () => {
    if (!practiceData || !practiceData.transcription) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Transcript data is not available.</p>;
    }

    // Check if the transcriptAnalysis object itself has an error reported by the backend
    if (practiceData.transcriptAnalysis && practiceData.transcriptAnalysis.error) {
      return renderErrorDisplay(`Transcript processing failed: ${practiceData.transcriptAnalysis.error}`);
    }

    return (
      <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
          <motion.div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
          <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}></motion.div>
          <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
            </motion.div>
            <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Speech Transcript</h2>
          </motion.div>
          <motion.div className="relative z-10 mt-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar bg-gray-900/30 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line font-light tracking-wide">{practiceData.transcription}</p>
          </motion.div>
          {practiceData.transcriptAnalysis && (
            <motion.div className="mt-6 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="mb-6 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40">
                <div className="flex items-center justify-between mb-3">
                  <motion.h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 flex items-center" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                    <span className="bg-blue-500/20 p-1.5 rounded-md mr-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg></span>
                    Coherence Score
                  </motion.h3>
                  <motion.div className="flex items-center bg-gray-800/60 px-3 py-1 rounded-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}>
                    <motion.span className="text-xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>{formatNumber(safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0))}</motion.span>
                    <span className="text-gray-400 ml-1">/100</span>
                  </motion.div>
                </div>
                <div className="h-3 w-full bg-gray-800/80 rounded-full overflow-hidden shadow-inner">
                  <motion.div className="h-full rounded-full relative" style={{ backgroundColor: safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0) >= 70 ? '#10B981' : safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0) >= 40 ? '#F59E0B' : '#EF4444' }} initial={{ width: 0 }} animate={{ width: `${safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0)}%` }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}/>
                  </motion.div>
                </div>
                <div className="mt-2 text-xs text-gray-400 italic">
                  {safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0) >= 70 ? "Excellent coherence - your speech flows naturally and logically." : safeGet(practiceData.transcriptAnalysis, 'coherence_score', 0) >= 40 ? "Moderate coherence - some improvements could enhance the flow of ideas." : "Low coherence - consider restructuring your speech for better flow."}
                </div>
              </div>
              {safeGet(practiceData.transcriptAnalysis, 'raw_transcription') && safeGet(practiceData.transcriptAnalysis, 'raw_transcription') !== practiceData.transcription && (
                <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
                    <details className="group">
                      <summary className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-800/40 transition-colors duration-200">
                        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
                        </motion.div>
                        <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 group-hover:from-blue-200 group-hover:to-blue-50 transition-all duration-300">View Original Unprocessed Transcript</h3>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400 group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" whileHover={{ scale: 1.1 }}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></motion.svg>
                      </summary>
                      <motion.div className="mt-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-blue-500/20 max-h-[200px] overflow-y-auto custom-scrollbar" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}>
                        <p className="text-gray-400 whitespace-pre-line font-light">{safeGet(practiceData.transcriptAnalysis, 'raw_transcription', '')}</p>
                      </motion.div>
                    </details>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };


  return (
    <DashboardLayout>
      <DashboardPageWrapper
        title="Practice Analysis"
        description="View your practice session details"
        action={
          <Link
            href="/dashboard/practices"
            className="flex items-center px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            style={{ textDecoration: 'none' }}
          >
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeftIcon className="w-4 h-4 mr-2" />
              Back to Practices
            </motion.div>
          </Link>
        }
      >
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="w-16 h-16 border-4 border-gray-700 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-400">Loading practice data...</p>
            </motion.div>
          ) : error ? (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="p-4 bg-red-900/30 border border-red-800 rounded-lg text-red-300 max-w-md">
                <h3 className="text-lg font-semibold mb-2">Error Loading Data</h3>
                <p>{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Retry
                </button>
              </div>
            </motion.div>
          ) : practiceData ? (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Practice Session Info */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-200 mb-2">{practiceData.title}</h2>
                <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                  <div>Date: {practiceData.analysisDate}</div>
                  <div>Duration: {practiceData.duration}</div>
                </div>
              </div>



              {/* Tab Navigation */}
              <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-1 mb-6">
                <nav className="flex">
                  {tabs.map((tab) => (
                    <motion.button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${
                        activeTab === tab.id
                          ? "bg-gradient-to-r from-purple-900/70 to-purple-800/50 text-purple-200 shadow-lg shadow-purple-900/20"
                          : "bg-transparent text-gray-400 hover:bg-gray-800/30 hover:text-gray-300"
                      }`}
                      whileHover={{ scale: activeTab !== tab.id ? 1.02 : 1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {tab.icon}
                      <span className="font-medium hidden sm:inline">{tab.label}</span>
                      <span className="font-medium sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "transcript" && (
                  <motion.div
                    key="transcript"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderTranscript()}
                  </motion.div>
                )}
                {activeTab === "voice" && (
                  <motion.div
                    key="voice"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderVoiceAnalysis()}
                  </motion.div>
                )}
                {activeTab === "text" && (
                  <motion.div
                    key="text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderTextAnalysis()}
                  </motion.div>
                )}
                {activeTab === "recommendations" && (
                  <motion.div
                    key="recommendations"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {renderRecommendations()}
                  </motion.div>
                )}
              </AnimatePresence>


            </motion.div>
          ) : (
            <motion.div
              key="not-found"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center min-h-[400px]"
            >
              <div className="p-4 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 max-w-md text-center">
                <h3 className="text-lg font-semibold mb-2">Practice Session Not Found</h3>
                <p>The practice session you're looking for doesn't exist or you don't have permission to view it.</p>
                <Link
                  href="/dashboard/practices"
                  className="mt-4 px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition-colors inline-block"
                  style={{ textDecoration: 'none' }}
                >
                  Go to My Practices
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DashboardPageWrapper>
    </DashboardLayout>
  );
};

export default PracticeAnalysisPage;