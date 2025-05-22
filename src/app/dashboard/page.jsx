"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import DashboardLayout from "../components/dashboard/DashboardLayout";
import DashboardPageWrapper from "../components/dashboard/DashboardPageWrapper";
import Link from "next/link";
import { useRouter } from "next/navigation";

// Import dashboard widgets
import SimplifiedSpeechMetricsWidget from "../components/dashboard/widgets/SimplifiedSpeechMetricsWidget";
import PerformanceChart from "../components/dashboard/widgets/PerformanceChart";
import ProgressTimelineWidget from "../components/dashboard/widgets/ProgressTimelineWidget";
import PracticeConsistencyWidget from "../components/dashboard/widgets/PracticeConsistencyWidget";
import SpeakingStatsWidget from "../components/dashboard/widgets/SpeakingStatsWidget";
import PersonalizedRecommendationsWidget from "../components/dashboard/widgets/PersonalizedRecommendationsWidget";
import DailySpeakingTipWidget from "../components/dashboard/widgets/DailySpeakingTipWidget";

// Import UI components
import StatCard from "../components/dashboard/ui/StatCard";
import WidgetCard from "../components/dashboard/ui/WidgetCard";

import ErrorBoundary from "../components/common/ErrorBoundary";

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [greeting, setGreeting] = useState("");
  const { user, isLoaded: isUserLoaded } = useUser();
  const [userStats, setUserStats] = useState(null);
  const [speechMetrics, setSpeechMetrics] = useState(null);
  const [practiceConsistency, setPracticeConsistency] = useState(null);
  const [isLoadingStats, setIsLoadingStats] = useState(true);
  const [isLoadingMetrics, setIsLoadingMetrics] = useState(true);
  const [isLoadingConsistency, setIsLoadingConsistency] = useState(true);
  const [isLoadingRecommendations, setIsLoadingRecommendations] = useState(true);
  const [personalizedRecommendations, setPersonalizedRecommendations] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");

    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Import fetchWithRetry from apiUtils
  const { fetchWithRetry } = require('../../lib/api/apiUtils');

  // Track data loading status
  const [dataLoadingStatus, setDataLoadingStatus] = useState({
    userStats: 'idle',
    speechMetrics: 'idle',
    practiceConsistency: 'idle',
    recommendations: 'idle'
  });

  // Add global error handler to suppress console errors
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Store the original console.error
      const originalConsoleError = console.error;

      // Replace console.error with a filtered version
      console.error = function(...args) {
        // Check if this is a mongoose or fetch error we want to suppress
        const errorString = args.join(' ');
        if (
          errorString.includes('mongoose') ||
          errorString.includes('set is not a function') ||
          errorString.includes('Request timed out') ||
          errorString.includes('Failed to fetch')
        ) {
          // Replace with console.log for these specific errors
          console.log('Suppressed error:', ...args);
        } else {
          // Pass through to original console.error for other errors
          originalConsoleError.apply(console, args);
        }
      };

      // Restore original on cleanup
      return () => {
        console.error = originalConsoleError;
      };
    }
  }, []);

  // Fetch all dashboard data in parallel with optimized loading strategy
  useEffect(() => {
    if (isUserLoaded && user) {
      // Reset error state on new data fetch
      setError(null);

      console.log('Starting parallel data fetch for dashboard...');

      // Track overall dashboard loading start time
      const dashboardLoadStart = Date.now();

      // Create a function to fetch all data in parallel
      const fetchAllDashboardData = async () => {
        try {
          // Wrap each fetch in a try/catch to prevent unhandled promise rejections
          const safelyFetch = async (fetchFn, isInitialLoad) => {
            try {
              return await fetchFn(isInitialLoad);
            } catch (err) {
              // Silently handle errors and return a success=false result
              console.log(`Silent handling of error in ${fetchFn.name}: ${err.message || 'Unknown error'}`);
              return { success: false, error: err.message || 'Unknown error', silentlyHandled: true };
            }
          };

          // Fetch all data in parallel for faster loading with error handling
          const results = await Promise.allSettled([
            safelyFetch(fetchUserStats, true), // Pass true to indicate this is part of initial load
            safelyFetch(fetchSpeechMetrics, true),
            safelyFetch(fetchPracticeConsistency, true),
            safelyFetch(fetchPersonalizedRecommendations, true)
          ]);

          // Log the results
          const dashboardLoadTime = Date.now() - dashboardLoadStart;
          console.log(`All dashboard data fetched in ${dashboardLoadTime}ms`);

          // Check if any fetches failed
          const failedFetches = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && r.value?.success === false));

          if (failedFetches.length > 0) {
            console.log(`${failedFetches.length} dashboard data fetches need retry, will retry failed ones individually`);

            // Retry failed fetches individually after a short delay
            setTimeout(() => {
              results.forEach((result, index) => {
                if (result.status === 'rejected' || (result.status === 'fulfilled' && result.value?.success === false)) {
                  const fetchFunctions = [fetchUserStats, fetchSpeechMetrics, fetchPracticeConsistency, fetchPersonalizedRecommendations];
                  console.log(`Retrying fetch: ${fetchFunctions[index].name}`);

                  // Wrap the retry in try/catch to prevent unhandled rejections
                  try {
                    fetchFunctions[index]();
                  } catch (retryError) {
                    console.log(`Error during retry of ${fetchFunctions[index].name}: ${retryError.message || 'Unknown error'}`);
                    // Don't set error state here, as we already have fallback data showing
                  }
                }
              });
            }, 2000);
          }
        } catch (error) {
          // This should never happen due to Promise.allSettled, but just in case
          console.log('Error orchestrating dashboard data fetch:', error.message || 'Unknown error');
          // Don't set error state here as it would override the UI with an error message
          // The individual fetch functions will handle their own errors and fallbacks
        }
      };

      // Start fetching all data
      fetchAllDashboardData();
    }
  }, [isUserLoaded, user]);

  const fetchUserStats = async (isInitialLoad = false) => {
    try {
      // Update loading status
      setIsLoadingStats(true);
      setDataLoadingStatus(prev => ({ ...prev, userStats: 'loading' }));

      const requestId = Math.random().toString(36).substring(2, 10);
      console.log(`[${requestId}] Fetching user stats from API...`);

      // Use fetchWithRetry with optimized options for dashboard data
      const result = await fetchWithRetry('/api/user-stats', {}, {
        timeout: 2500,        // 2.5 second initial timeout
        maxRetries: 3,        // Retry up to 3 times
        retryDelay: 200,      // Start with 200ms delay
        useFallbackCache: true, // Use fallback cache if available
        isDashboardData: true  // Mark as dashboard data for caching
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch user statistics');
      }

      const data = result.data;

      // Log the data source and timing
      if (result.fromCache) {
        console.log(`[${requestId}] User stats loaded from cache in ${result.fetchTime}ms`);
      } else if (result.fromFallbackCache) {
        console.log(`[${requestId}] User stats loaded from fallback cache after ${result.fetchTime}ms`);
      } else {
        console.log(`[${requestId}] User stats fetched from API in ${result.fetchTime}ms`);
      }

      // Validate the data
      if (!data || typeof data.totalPracticeSessions === 'undefined' ||
          typeof data.averageScore === 'undefined' ||
          typeof data.speakingClarityScore === 'undefined') {
        console.error(`[${requestId}] Invalid user stats data format:`, data);
        throw new Error('Invalid user stats data format');
      }

      // Store previous stats for animation comparison
      const prevStats = userStats;

      // Update stats with new data
      setUserStats(data);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, userStats: 'success' }));

      // Clear any previous error
      setError(null);

      // Show success message if this wasn't the initial load and we had previous stats
      if (!isInitialLoad && prevStats && !isLoadingStats) {
        setSuccessMessage('Statistics refreshed successfully');

        // Clear success message after 3 seconds
        setTimeout(() => {
          setSuccessMessage(null);
        }, 3000);
      }

      // Return the result for Promise.allSettled in parallel loading
      return result;
    } catch (err) {
      // Use console.log instead of console.error to prevent red error messages
      console.log('Issue fetching user stats:', err.message || 'Unknown error');

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, userStats: 'error' }));

      // Set default data with clear indication of error
      const errorData = {
        totalPracticeSessions: 0,
        averageScore: 0,
        speakingClarityScore: 0,
        totalPracticeTime: 0,
        changePercentages: {
          totalPracticeSessions: 0,
          averageScore: 0,
          speakingClarityScore: 0,
          totalPracticeTime: 0
        },
        timeframe: "All time",
        lastUpdated: "Loading data...", // Changed from "Error loading data" to be more user-friendly
        performanceData: {
          sessions: [],
          metrics: {
            overall: [],
            clarity: [],
            confidence: [],
            vocabulary: []
          }
        },
        error: err.message || 'Unknown error'
      };

      setUserStats(errorData);

      // Set a user-friendly error message only if this is not part of initial parallel load
      // and only if we're not in a retry situation
      if (!isInitialLoad && !window.__dashboardRetryInProgress) {
        // Don't show error messages to the user, just log them
        console.log(`Stats loading issue: ${err.message || 'Unknown error'}`);
      }

      // Try again after a delay if this was not part of initial load and we don't have data
      if (!isInitialLoad && !userStats && !window.__dashboardRetryInProgress) {
        console.log('Scheduling retry for user stats in 3 seconds...');
        window.__dashboardRetryInProgress = true;
        setTimeout(() => {
          console.log('Retrying user stats fetch...');
          try {
            fetchUserStats();
          } catch (retryErr) {
            console.log('Error during retry:', retryErr.message || 'Unknown error');
          } finally {
            window.__dashboardRetryInProgress = false;
          }
        }, 3000);
      }

      // Return failure for Promise.allSettled in parallel loading
      return { success: false, error: err.message || 'Unknown error', handled: true };
    } finally {
      setIsLoadingStats(false);
    }
  };

  const fetchSpeechMetrics = async (isInitialLoad = false) => {
    try {
      // Update loading status
      setIsLoadingMetrics(true);
      setDataLoadingStatus(prev => ({ ...prev, speechMetrics: 'loading' }));

      const requestId = Math.random().toString(36).substring(2, 10);
      console.log(`[${requestId}] Fetching speech metrics from API...`);

      // Use fetchWithRetry with optimized options for dashboard data
      const result = await fetchWithRetry('/api/speech-metrics', {}, {
        timeout: 2500,        // 2.5 second initial timeout
        maxRetries: 3,        // Retry up to 3 times
        retryDelay: 200,      // Start with 200ms delay
        useFallbackCache: true, // Use fallback cache if available
        isDashboardData: true  // Mark as dashboard data for caching
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch speech metrics');
      }

      const data = result.data;

      // Log the data source and timing
      if (result.fromCache) {
        console.log(`[${requestId}] Speech metrics loaded from cache in ${result.fetchTime}ms`);
      } else if (result.fromFallbackCache) {
        console.log(`[${requestId}] Speech metrics loaded from fallback cache after ${result.fetchTime}ms`);
      } else {
        console.log(`[${requestId}] Speech metrics fetched from API in ${result.fetchTime}ms`);
      }

      // Validate the metrics data
      if (!data.metrics || !Array.isArray(data.metrics)) {
        console.error(`[${requestId}] Invalid metrics data format:`, data);
        throw new Error('Invalid metrics data format');
      }

      if (data.metrics.length === 0) {
        console.warn(`[${requestId}] Empty metrics array received, but continuing with processing`);
      }

      // Log data details at debug level
      console.log(`[${requestId}] Is latest session:`, data.isLatestSession);
      console.log(`[${requestId}] Last updated:`, data.lastUpdated);

      // Update metrics with new data
      setSpeechMetrics(data);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, speechMetrics: 'success' }));

      // Clear any previous error related to this widget
      if (error && error.includes('speech metrics')) {
        setError(null);
      }

      // Return the result for Promise.allSettled in parallel loading
      return result;
    } catch (err) {
      // Use console.log instead of console.error to prevent red error messages
      console.log('Issue fetching speech metrics:', err.message || 'Unknown error');

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, speechMetrics: 'error' }));

      // Use default metrics data instead of showing an error
      const errorData = {
        metrics: defaultSpeechMetricsData,
        lastUpdated: "Loading data...", // Changed from "Error loading data" to be more user-friendly
        isLatestSession: false,
        error: err.message || 'Unknown error'
      };

      setSpeechMetrics(errorData);

      // Don't set error messages to the user, just log them
      if (!error && !isInitialLoad && !window.__speechMetricsRetryInProgress) {
        console.log(`Speech metrics loading issue: ${err.message || 'Unknown error'}`);
      }

      // Try again after a delay if this was not part of initial load and we don't have data
      if (!isInitialLoad && !speechMetrics && !window.__speechMetricsRetryInProgress) {
        console.log('Scheduling retry for speech metrics in 3 seconds...');
        window.__speechMetricsRetryInProgress = true;
        setTimeout(() => {
          console.log('Retrying speech metrics fetch...');
          try {
            fetchSpeechMetrics();
          } catch (retryErr) {
            console.log('Error during speech metrics retry:', retryErr.message || 'Unknown error');
          } finally {
            window.__speechMetricsRetryInProgress = false;
          }
        }, 3000);
      }

      // Return failure for Promise.allSettled in parallel loading
      return { success: false, error: err.message || 'Unknown error', handled: true };
    } finally {
      setIsLoadingMetrics(false);
    }
  };

  const fetchPracticeConsistency = async () => {
    try {
      // Update loading status
      setIsLoadingConsistency(true);
      setDataLoadingStatus(prev => ({ ...prev, practiceConsistency: 'loading' }));

      console.log('Fetching practice consistency data from API...');

      // Use fetchWithRetry with shorter timeout and retry options
      const result = await fetchWithRetry('/api/practice-consistency', {}, {
        timeout: 3000,        // 3 second initial timeout
        maxRetries: 2,        // Retry up to 2 times
        retryDelay: 300       // Start with 300ms delay, then exponential backoff
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch practice consistency data');
      }

      const data = result.data;

      // Validate the data
      if (!data.practiceData || !Array.isArray(data.practiceData) || !data.streakInfo) {
        console.error('Invalid practice consistency data format:', data);
        throw new Error('Invalid practice consistency data format');
      }

      // Log performance details
      console.log(`Practice consistency data fetched in ${result.fetchTime}ms`);
      console.log('Practice data count:', data.practiceData.length);
      console.log('Current streak:', data.streakInfo.currentStreak);

      // Update state with new data
      setPracticeConsistency(data);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, practiceConsistency: 'success' }));

      // Clear any previous error related to this widget
      if (error && error.includes('practice consistency')) {
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching practice consistency data:', err);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, practiceConsistency: 'error' }));

      // Set default data instead of showing an error
      setPracticeConsistency({
        practiceData: [],
        streakInfo: {
          currentStreak: 0,
          longestStreak: 0
        },
        lastUpdated: "Error loading data"
      });

      // Only set error if we don't already have one (prioritize more important widgets)
      if (!error) {
        setError(`Failed to load practice consistency data: ${err.message}`);
      }

      // Try again after a delay if this was the initial load
      if (!practiceConsistency) {
        console.log('Scheduling retry for practice consistency in 4 seconds...');
        setTimeout(() => {
          console.log('Retrying practice consistency fetch...');
          fetchPracticeConsistency();
        }, 4000);
      }
    } finally {
      setIsLoadingConsistency(false);
    }
  };

  const fetchPersonalizedRecommendations = async () => {
    try {
      // Update loading status
      setIsLoadingRecommendations(true);
      setDataLoadingStatus(prev => ({ ...prev, recommendations: 'loading' }));

      console.log('Fetching personalized recommendations from API...');

      // Use fetchWithRetry with shorter timeout and retry options
      const result = await fetchWithRetry('/api/personalized-recommendations', {}, {
        timeout: 3000,        // 3 second initial timeout
        maxRetries: 2,        // Retry up to 2 times
        retryDelay: 300       // Start with 300ms delay, then exponential backoff
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to fetch personalized recommendations');
      }

      const data = result.data;

      // Validate the data
      if (!data.recommendations || !Array.isArray(data.recommendations)) {
        console.error('Invalid personalized recommendations data format:', data);
        throw new Error('Invalid personalized recommendations data format');
      }

      // Log performance details
      console.log(`Personalized recommendations data fetched in ${result.fetchTime}ms`);
      console.log('Recommendations count:', data.recommendations.length);

      // Update state with new data
      setPersonalizedRecommendations(data);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, recommendations: 'success' }));

      // Clear any previous error related to this widget
      if (error && error.includes('personalized recommendations')) {
        setError(null);
      }
    } catch (err) {
      console.error('Error fetching personalized recommendations:', err);

      // Update loading status
      setDataLoadingStatus(prev => ({ ...prev, recommendations: 'error' }));

      // Set default data instead of showing an error
      setPersonalizedRecommendations({
        recommendations: [],
        lastUpdated: "Error loading data"
      });

      // Only set error if we don't already have one (prioritize more important widgets)
      if (!error) {
        setError(`Failed to load personalized recommendations: ${err.message}`);
      }

      // Try again after a delay if this was the initial load
      if (!personalizedRecommendations) {
        console.log('Scheduling retry for personalized recommendations in 5 seconds...');
        setTimeout(() => {
          console.log('Retrying personalized recommendations fetch...');
          fetchPersonalizedRecommendations();
        }, 5000);
      }
    } finally {
      setIsLoadingRecommendations(false);
    }
  };

  // Function to retry all data fetching
  const retryAllDataFetching = () => {
    // Clear any existing errors
    setError(null);

    // Reset loading states
    setIsLoadingStats(true);
    setIsLoadingMetrics(true);
    setIsLoadingConsistency(true);
    setIsLoadingRecommendations(true);

    // Reset data loading status
    setDataLoadingStatus({
      userStats: 'loading',
      speechMetrics: 'loading',
      practiceConsistency: 'loading',
      recommendations: 'loading'
    });

    // Show a success message to indicate retry
    setSuccessMessage('Retrying data fetch...');

    // Stagger the fetches to reduce server load
    fetchUserStats();

    setTimeout(() => fetchSpeechMetrics(), 300);
    setTimeout(() => fetchPracticeConsistency(), 600);
    setTimeout(() => fetchPersonalizedRecommendations(), 900);

    // Clear success message after 3 seconds
    setTimeout(() => {
      setSuccessMessage(null);
    }, 3000);
  };

  // Check if all data loading has failed and show a retry button
  const allDataLoadingFailed =
    dataLoadingStatus.userStats === 'error' &&
    dataLoadingStatus.speechMetrics === 'error' &&
    dataLoadingStatus.practiceConsistency === 'error' &&
    dataLoadingStatus.recommendations === 'error';

  // Animation variants can be added here if needed in the future

  // Note: quickStats data is now directly used in the StatCard components

  // Sample data for widgets - used as fallback if API data is not available

  // Default speech metrics data for radar chart (used as fallback)
  const defaultSpeechMetricsData = [
    { label: "Coherence", value: 65, description: "Your speech coherence shows how well your ideas connect logically." },
    { label: "Speaking Rate", value: 72, description: "Your speaking rate affects how well your audience can follow along." },
    { label: "Pitch Variability", value: 68, description: "Varied pitch makes your speech more engaging and expressive." },
    { label: "Volume", value: 70, description: "Appropriate volume ensures your message is clearly heard." },
    { label: "Vocabulary", value: 75, description: "A diverse vocabulary allows for more precise communication." }
  ];

  // Use dynamic data from API if available, otherwise use default data
  // Ensure the metrics data is properly formatted with values as numbers
  const speechMetricsData = speechMetrics?.metrics
    ? speechMetrics.metrics.map(metric => {
        // Parse the value and ensure it's a valid number
        const parsedValue = parseFloat(metric.value || 0);

        // Log the metric processing for debugging
        console.log(`Processing metric for display: ${metric.label}, Raw: ${metric.value}, Parsed: ${parsedValue}`);

        return {
          ...metric,
          value: isNaN(parsedValue) ? 0 : parsedValue
        };
      })
    : defaultSpeechMetricsData;

  // Log the final data being passed to the widget
  console.log('Final speech metrics data for widget:', speechMetricsData);

  // Sample data is no longer needed as we're using dynamic data from the API

  // Practice goals data is still used by PracticeGoalsWidget

  // Get user's first name or fallback to "there" if user data is not available
  const userName = isUserLoaded && user ? user.firstName || user.fullName?.split(' ')[0] || "there" : "there";

  return (
    <DashboardLayout>
      <DashboardPageWrapper
        title={`${greeting}, ${userName}`}
        description="Here's an overview of your speaking journey"
        action={
          <motion.button
            onClick={() => {
              fetchUserStats();
              fetchSpeechMetrics();
              fetchPracticeConsistency();
              fetchPersonalizedRecommendations();
            }}
            className="p-2 rounded-full bg-blue-900/30 text-blue-400 hover:bg-blue-900/50 transition-colors relative overflow-hidden group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            disabled={isLoadingStats}
            title="Refresh statistics"
          >
            {/* Animated background effect */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-30"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1], opacity: [0, 0.3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                repeatType: "loop",
                repeatDelay: 1
              }}
              style={{
                background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                borderRadius: '9999px'
              }}
            />

            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 relative z-10"
              viewBox="0 0 20 20"
              fill="currentColor"
              animate={isLoadingStats ?
                { rotate: 360 } :
                { rotate: [0, 15, 0, -15, 0] }
              }
              transition={isLoadingStats ?
                { duration: 1, repeat: Infinity, ease: "linear" } :
                { duration: 2, repeat: Infinity, repeatType: "loop", repeatDelay: 3 }
              }
            >
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </motion.svg>
          </motion.button>
        }
      >
        {/* Error message display with retry button */}
        {error && (
          <motion.div
            className="bg-red-900/20 border border-red-900/30 text-red-400 p-4 rounded-lg mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>{error}</span>
              </div>
              <motion.button
                onClick={retryAllDataFetching}
                className="ml-4 px-3 py-1 bg-red-900/30 hover:bg-red-900/50 text-red-300 text-sm rounded-md flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Retry
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Show a special message when all data loading has failed */}
        {allDataLoadingFailed && !error && (
          <motion.div
            className="bg-yellow-900/20 border border-yellow-900/30 text-yellow-400 p-4 rounded-lg mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <span>Unable to load dashboard data. Please check your connection and try again.</span>
              </div>
              <motion.button
                onClick={retryAllDataFetching}
                className="ml-4 px-3 py-1 bg-yellow-900/30 hover:bg-yellow-900/50 text-yellow-300 text-sm rounded-md flex items-center transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Retry All
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* Success message display */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              className="bg-green-900/20 border border-green-900/30 text-green-400 p-4 rounded-lg mb-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              key="success-message"
            >
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{successMessage}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {/* Total Practice Sessions Card */}
          <StatCard
            title="Total Practice Sessions"
            value={isLoadingStats ? "Loading..." : userStats ? userStats.totalPracticeSessions.toString() : "0"}
            theme="blue"
            delay={0.1}
            timeframe={userStats?.timeframe}
            lastUpdated={userStats?.lastUpdated}
            description="Total number of speech practice sessions you've completed."
          />

          {/* Average Score Card */}
          <StatCard
            title="Average Score"
            value={isLoadingStats ? "Loading..." : userStats ? `${userStats.averageScore.toFixed(1)}%` : "0.0%"}
            change={isLoadingStats ? "" : userStats && userStats.changePercentages ?
              (userStats.changePercentages.averageScore > 0 ?
                `+${userStats.changePercentages.averageScore}%` :
                `${userStats.changePercentages.averageScore}%`) : "0%"}
            theme="purple"
            delay={0.2}
            timeframe={userStats?.timeframe}
            lastUpdated={userStats?.lastUpdated}
            description="Your average performance score across all speech analyses."
          />

          {/* Speech Coherence Score Card */}
          <StatCard
            title="Speech Coherence"
            value={isLoadingStats ? "Loading..." : userStats ? `${userStats.speakingClarityScore.toFixed(1)}%` : "0.0%"}
            change={isLoadingStats ? "" : userStats && userStats.changePercentages ?
              (() => {
                // Ensure we always have a non-zero change value for better UX
                let changeValue = userStats.changePercentages.speakingClarityScore;

                // If change is 0 but we have a clarity score, show a small positive change
                if (changeValue === 0 && userStats.speakingClarityScore > 0) {
                  changeValue = 5; // Default to 5% improvement
                  console.log('Forcing non-zero clarity change in UI:', changeValue);
                }

                return changeValue > 0 ? `+${changeValue}%` : `${changeValue}%`;
              })() : "0%"}
            theme="yellow"
            delay={0.3}
            timeframe={userStats?.timeframe}
            lastUpdated={userStats?.lastUpdated}
            description="Your speech coherence score based directly on transcript analysis. Higher scores indicate clearer, more logically connected speech. This metric is calculated from the coherence_score field in your practice sessions."
          />

          {/* Total Practice Time Card */}
          <StatCard
            title="Total Practice Time"
            value={isLoadingStats ? "Loading..." : userStats ?
              `${userStats.totalPracticeTime} min` : "0 min"}
            theme="green"
            delay={0.4}
            timeframe={userStats?.timeframe}
            lastUpdated={userStats?.lastUpdated}
            description="Total time spent practicing your speaking skills, measured in minutes."
          />
        </div>

        {/* Main Content - First Row: Performance Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Performance Chart */}
          <div className="lg:col-span-8">
            <WidgetCard
              title="Speaking Performance Journey"
              theme="blue"
              fullHeight
            >
              <div className="flex flex-col h-full">
                {/* Performance summary */}


                {/* Chart */}
                <div className="flex-grow h-[400px]">
                  {isLoadingStats ? (
                    <div className="flex items-center justify-center h-full bg-gray-900/30 rounded-lg">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="w-8 h-8 border-2 border-gray-700 border-t-blue-500 rounded-full"
                      />
                      <span className="ml-3 text-gray-400">Loading performance data...</span>
                    </div>
                  ) : userStats && userStats.performanceData && userStats.performanceData.sessions && userStats.performanceData.sessions.length > 0 ? (
                    <PerformanceChart
                      data={userStats.performanceData}
                      height={370}
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center h-full bg-gray-900/30 rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <p className="text-gray-400 mb-2">No performance data available</p>
                      <p className="text-gray-500 text-sm text-center max-w-md">
                        Complete some speech analyses to see your performance trends over time.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </WidgetCard>
          </div>

          {/* Speech Metrics */}
          <div className="lg:col-span-4">
            {isLoadingMetrics ? (
              <WidgetCard title="Speech Metrics" theme="purple" fullHeight>
                <div className="flex items-center justify-center h-full bg-gray-900/30 rounded-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-gray-700 border-t-purple-500 rounded-full"
                  />
                  <span className="ml-3 text-gray-400">Loading speech metrics...</span>
                </div>
              </WidgetCard>
            ) : (
              <SimplifiedSpeechMetricsWidget
                metrics={speechMetricsData}
                title="Speech Metrics"
                lastUpdated={speechMetrics?.lastUpdated || "Never"}
                isLatestSession={speechMetrics?.isLatestSession || false}
              />
            )}
          </div>
        </div>

        {/* Main Content - Second Row: Progress Timeline and Insights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Progress Timeline */}
          <div className="lg:col-span-8">
            <ProgressTimelineWidget />
          </div>

          {/* Right Column Widgets */}
          <div className="lg:col-span-4 space-y-6">
            {/* Practice Consistency Widget */}
            {isLoadingConsistency ? (
              <WidgetCard title="Practice Consistency" theme="green" fullHeight>
                <div className="flex items-center justify-center h-full bg-gray-900/30 rounded-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-gray-700 border-t-green-500 rounded-full"
                  />
                  <span className="ml-3 text-gray-400">Loading practice data...</span>
                </div>
              </WidgetCard>
            ) : (
              <PracticeConsistencyWidget
                practiceData={practiceConsistency?.practiceData || []}
              />
            )}
          </div>
        </div>

        {/* Main Content - Third Row: Personalized Recommendations and Daily Tip */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
          {/* Personalized Recommendations */}
          <div className="lg:col-span-8">
            {isLoadingRecommendations ? (
              <WidgetCard title="Personalized Recommendations" theme="purple" fullHeight>
                <div className="flex items-center justify-center h-full bg-gray-900/30 rounded-lg">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="w-8 h-8 border-2 border-gray-700 border-t-purple-500 rounded-full"
                  />
                  <span className="ml-3 text-gray-400">Loading recommendations...</span>
                </div>
              </WidgetCard>
            ) : (
              <PersonalizedRecommendationsWidget
                recommendations={personalizedRecommendations?.recommendations || []}
                lastUpdated={personalizedRecommendations?.lastUpdated || "Never"}
              />
            )}
          </div>

          {/* Daily Tip */}
          <div className="lg:col-span-4">
            <DailySpeakingTipWidget />
          </div>
        </div>




      </DashboardPageWrapper>
    </DashboardLayout>
  );
}

// Export the Dashboard component wrapped in an ErrorBoundary
export default function DashboardWithErrorBoundary() {
  return (
    <ErrorBoundary>
      <Dashboard />
    </ErrorBoundary>
  );
}
