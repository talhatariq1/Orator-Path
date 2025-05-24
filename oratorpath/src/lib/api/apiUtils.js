/**
 * API Utilities for Dashboard Widgets
 *
 * This file contains common utilities for API calls, error handling,
 * data validation, and caching strategies.
 */

import { connect, getConnectionMetrics } from '../mongodb/mongoose';

// Cache storage with improved structure
const cache = {
  data: {},
  timestamps: {},
  hits: {},
  misses: {},
  lastUpdated: {}
};

// Cache statistics
let cacheHits = 0;
let cacheMisses = 0;

/**
 * Default cache expiration times in milliseconds
 */
const DEFAULT_CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes
const DASHBOARD_CACHE_EXPIRATION = 2 * 60 * 1000; // 2 minutes for dashboard data
const CRITICAL_DATA_CACHE_EXPIRATION = 1 * 60 * 1000; // 1 minute for critical data

// Check if we're running on the client side
const isClient = typeof window !== 'undefined';

/**
 * Connect to MongoDB with error handling, performance tracking and connection reuse
 * @param {number} timeoutMs - Connection timeout in milliseconds
 * @param {boolean} forceNew - Force a new connection even if one exists
 * @returns {Promise<Object>} MongoDB connection object
 */
export const connectToMongoDB = async (timeoutMs = 3000, forceNew = false) => {
  // If we're on the client side, return a mock successful connection
  if (isClient) {
    return {
      success: true,
      connectionTime: 0,
      reused: true,
      isClient: true
    };
  }

  const startTime = Date.now();
  const metrics = getConnectionMetrics();

  // If connection is already established and we're not forcing a new one, return immediately
  if (!forceNew && metrics.connectionEstablished && metrics.readyState === 1) {
    console.log('MongoDB connection already established, reusing existing connection');
    return {
      success: true,
      connectionTime: 0,
      reused: true
    };
  }

  try {
    // Create a timeout promise with a more aggressive timeout
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => reject(new Error(`MongoDB connection timed out after ${timeoutMs}ms`)), timeoutMs);
    });

    // Race the connection against the timeout
    await Promise.race([
      connect(forceNew),
      timeoutPromise
    ]);

    const connectionTime = Date.now() - startTime;
    console.log(`MongoDB connection established in ${connectionTime}ms`);

    return {
      success: true,
      connectionTime,
      reused: false
    };
  } catch (error) {
    const failureTime = Date.now() - startTime;
    console.error(`MongoDB connection failed after ${failureTime}ms:`, error);

    // If this was a timeout, try again with a longer timeout
    if (error.message && error.message.includes('timed out') && timeoutMs < 5000) {
      console.log('Connection timed out, retrying with longer timeout...');
      return connectToMongoDB(5000, true);
    }

    return {
      success: false,
      error: 'Database connection failed',
      details: error.message || 'Unknown error',
      failureTime
    };
  }
};

/**
 * Format API response with consistent structure
 * @param {Object} data - The data to include in the response
 * @param {string} message - Optional success message
 * @returns {Object} Formatted response object
 */
export const formatSuccessResponse = (data, message = 'Success') => {
  return {
    status: 'success',
    message,
    data,
    timestamp: new Date().toISOString()
  };
};

/**
 * Format error response with consistent structure
 * @param {string} message - Error message
 * @param {number} statusCode - HTTP status code
 * @param {Object} details - Optional error details
 * @returns {Object} Formatted error object
 */
export const formatErrorResponse = (message, statusCode = 500, details = null) => {
  return {
    status: 'error',
    message,
    statusCode,
    details,
    timestamp: new Date().toISOString()
  };
};

/**
 * Get data from cache if available and not expired
 * @param {string} key - Cache key
 * @param {number} expirationTime - Cache expiration time in milliseconds
 * @param {boolean} isDashboardData - Whether this is dashboard data (uses different expiration)
 * @returns {Object|null} Cached data or null if not found or expired
 */
export const getFromCache = (key, expirationTime = DEFAULT_CACHE_EXPIRATION, isDashboardData = false) => {
  const cachedData = cache.data[key];
  const timestamp = cache.timestamps[key];

  if (!cachedData || !timestamp) {
    // Track cache miss
    cache.misses[key] = (cache.misses[key] || 0) + 1;
    cacheMisses++;
    return null;
  }

  const now = Date.now();

  // Use appropriate expiration time based on data type
  const actualExpiration = isDashboardData ?
    DASHBOARD_CACHE_EXPIRATION :
    (expirationTime || DEFAULT_CACHE_EXPIRATION);

  if (now - timestamp > actualExpiration) {
    // Cache expired, remove it
    console.log(`Cache expired for key: ${key} (age: ${(now - timestamp) / 1000}s)`);
    delete cache.data[key];
    delete cache.timestamps[key];
    cache.misses[key] = (cache.misses[key] || 0) + 1;
    cacheMisses++;
    return null;
  }

  // Track cache hit
  cache.hits[key] = (cache.hits[key] || 0) + 1;
  cacheHits++;
  console.log(`Cache hit for key: ${key} (age: ${(now - timestamp) / 1000}s)`);

  return cachedData;
};

/**
 * Save data to cache
 * @param {string} key - Cache key
 * @param {Object} data - Data to cache
 * @param {boolean} isDashboardData - Whether this is dashboard data
 */
export const saveToCache = (key, data, isDashboardData = false) => {
  const now = Date.now();
  cache.data[key] = data;
  cache.timestamps[key] = now;
  cache.lastUpdated[key] = now;

  console.log(`Saved to cache: ${key}`);

  // For dashboard data, we'll pre-warm related caches
  if (isDashboardData && key.includes('user-stats')) {
    // If we're caching user stats, also cache a fallback version with a longer expiration
    const fallbackKey = `${key}:fallback`;
    cache.data[fallbackKey] = data;
    cache.timestamps[fallbackKey] = now;
    console.log(`Created fallback cache: ${fallbackKey}`);
  }
};

/**
 * Get cache statistics
 * @returns {Object} Cache statistics
 */
export const getCacheStats = () => {
  return {
    hits: cacheHits,
    misses: cacheMisses,
    hitRatio: cacheHits / (cacheHits + cacheMisses || 1),
    entries: Object.keys(cache.data).length,
    keyStats: Object.keys(cache.data).map(key => ({
      key,
      hits: cache.hits[key] || 0,
      misses: cache.misses[key] || 0,
      age: (Date.now() - cache.timestamps[key]) / 1000
    }))
  };
};

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 */
export const clearCache = (key) => {
  delete cache.data[key];
  delete cache.timestamps[key];
  console.log(`Cleared cache for key: ${key}`);
};

/**
 * Clear all cache entries
 */
export const clearAllCache = () => {
  const oldSize = Object.keys(cache.data).length;
  cache.data = {};
  cache.timestamps = {};
  console.log(`Cleared all cache entries (${oldSize} entries removed)`);
};

/**
 * Get fallback data from cache if available
 * @param {string} key - Original cache key
 * @returns {Object|null} Fallback data or null if not found
 */
export const getFallbackFromCache = (key) => {
  const fallbackKey = `${key}:fallback`;
  const fallbackData = cache.data[fallbackKey];

  if (fallbackData) {
    console.log(`Using fallback cache for key: ${key}`);
    return fallbackData;
  }

  return null;
};

/**
 * Fetch data with enhanced retry logic, timeout, and fallback caching
 * @param {string} url - URL to fetch
 * @param {Object} options - Fetch options
 * @param {Object} retryOptions - Retry options
 * @param {number} retryOptions.maxRetries - Maximum number of retry attempts (default: 3)
 * @param {number} retryOptions.retryDelay - Base delay between retries in ms (default: 200)
 * @param {number} retryOptions.timeout - Fetch timeout in ms (default: 2500)
 * @param {boolean} retryOptions.useFallbackCache - Whether to use fallback cache on failure (default: true)
 * @param {boolean} retryOptions.isDashboardData - Whether this is dashboard data (default: false)
 * @returns {Promise<Object>} Fetch result with metadata
 */
export const fetchWithRetry = async (url, options = {}, retryOptions = {}) => {
  const {
    maxRetries = 3,
    retryDelay = 200,
    timeout = 2500,
    useFallbackCache = true,
    isDashboardData = false
  } = retryOptions;

  let attempts = 0;
  const startTime = Date.now();
  const requestId = Math.random().toString(36).substring(2, 10);

  // Extract userId from URL for cache key generation
  const userIdMatch = url.match(/user=([^&]+)/);
  const userId = userIdMatch ? userIdMatch[1] : 'anonymous';

  // Generate cache key based on URL
  const cacheKey = generateCacheKey(userId, url);

  // Check cache first
  const cachedData = getFromCache(cacheKey, null, isDashboardData);
  if (cachedData) {
    console.log(`[${requestId}] Using cached data for ${url}`);
    return {
      success: true,
      data: cachedData,
      fetchTime: 0,
      attempts: 0,
      fromCache: true
    };
  }

  // Add default headers if not provided
  const fetchOptions = {
    ...options,
    headers: {
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
      'X-Request-ID': requestId,
      ...(options.headers || {})
    }
  };

  while (attempts <= maxRetries) {
    // Create a controller for this attempt
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout + (attempts * 500)); // Increase timeout with each retry

    try {
      console.log(`[${requestId}] Fetching ${url} (attempt ${attempts + 1}/${maxRetries + 1})...`);

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal
      });

      // Clear the timeout since fetch completed
      clearTimeout(timeoutId);

      // Check if response is OK
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
      }

      // Try to parse as JSON
      let data;
      const textData = await response.text();

      // Check if response is HTML instead of JSON
      if (textData.trim().startsWith('<!DOCTYPE') || textData.trim().startsWith('<html')) {
        throw new Error('Received HTML instead of JSON');
      }

      try {
        data = JSON.parse(textData);
      } catch (parseError) {
        throw new Error(`Invalid JSON response: ${parseError.message}`);
      }

      // Check if the response contains an error field
      if (data.error) {
        console.warn(`[${requestId}] API returned error: ${data.error}`);
      }

      // Calculate fetch time
      const fetchTime = Date.now() - startTime;
      console.log(`[${requestId}] Fetch successful in ${fetchTime}ms`);

      // Cache the successful response
      saveToCache(cacheKey, data, isDashboardData);

      // Return success result with metadata
      return {
        success: true,
        data,
        fetchTime,
        attempts: attempts + 1,
        fromCache: false,
        status: response.status
      };
    } catch (error) {
      // Clear the timeout to prevent memory leaks
      clearTimeout(timeoutId);

      attempts++;
      const currentDuration = Date.now() - startTime;

      // Handle abort errors specially
      const isTimeout = error.name === 'AbortError';
      const errorMessage = isTimeout ? `Request timed out after ${timeout + ((attempts-1) * 500)}ms` : error.message;

      // Use console.warn instead of console.error to prevent red error messages in console
      // Only log as error on the final attempt
      if (attempts > maxRetries) {
        console.warn(`[${requestId}] Fetch error (final attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${errorMessage}`);
      } else {
        console.log(`[${requestId}] Fetch retry needed (attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${errorMessage}`);
      }

      // On last attempt, try to use fallback cache if available
      if (attempts > maxRetries && useFallbackCache) {
        const fallbackData = getFallbackFromCache(cacheKey);
        if (fallbackData) {
          console.log(`[${requestId}] Using fallback cache after all retries failed`);
          return {
            success: true,
            data: fallbackData,
            fetchTime: currentDuration,
            attempts,
            fromFallbackCache: true
          };
        }
      }

      if (attempts <= maxRetries) {
        // Calculate delay with exponential backoff, but cap it at 2 seconds
        const delay = Math.min(retryDelay * Math.pow(1.5, attempts - 1), 2000);
        console.log(`[${requestId}] Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        return {
          success: false,
          error: errorMessage,
          attempts,
          duration: currentDuration
        };
      }
    }
  }
};

/**
 * Generate cache key based on user ID and optional parameters
 * @param {string} userId - User ID
 * @param {string} endpoint - API endpoint
 * @param {Object} params - Optional parameters
 * @returns {string} Cache key
 */
export const generateCacheKey = (userId, endpoint, params = null) => {
  // Create a base key with user ID and endpoint
  let key = `${userId}:${endpoint}`;

  // If additional parameters are provided, add them to the key
  if (params) {
    // Sort the keys to ensure consistent ordering
    const sortedKeys = Object.keys(params).sort();

    // Add each parameter to the key
    if (sortedKeys.length > 0) {
      const paramsStr = sortedKeys
        .filter(paramKey => params[paramKey] !== undefined && params[paramKey] !== null)
        .map(paramKey => `${paramKey}=${params[paramKey]}`)
        .join(',');

      if (paramsStr) {
        key += `:${paramsStr}`;
      }
    }
  }

  return key;
};

/**
 * Validate that required fields exist in an object
 * @param {Object} data - Data object to validate
 * @param {Array<string>} requiredFields - Array of required field names
 * @returns {Object} Validation result with success flag and missing fields
 */
export const validateRequiredFields = (data, requiredFields) => {
  const missingFields = requiredFields.filter(field => {
    const value = data[field];
    return value === undefined || value === null || value === '';
  });

  return {
    success: missingFields.length === 0,
    missingFields
  };
};

/**
 * Format date for display
 * @param {Date|string} date - Date to format
 * @returns {string} Formatted date string
 */
export const formatDateForDisplay = (date) => {
  if (!date) return "Never";

  const dateObj = date instanceof Date ? date : new Date(date);

  if (isNaN(dateObj.getTime())) {
    return "Invalid date";
  }

  return dateObj.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Handle MongoDB query with enhanced error handling, retry logic, and caching
 * @param {Function} queryFn - Async function that performs the MongoDB query
 * @param {string} errorMessage - Error message to use if query fails
 * @param {Object} options - Additional options
 * @param {number} options.maxRetries - Maximum number of retry attempts (default: 3)
 * @param {number} options.retryDelay - Delay between retries in ms (default: 300)
 * @param {number} options.timeout - Query timeout in ms (default: 3000)
 * @param {string} options.cacheKey - Optional cache key for caching results
 * @param {boolean} options.useCache - Whether to use cache (default: true)
 * @param {boolean} options.isDashboardData - Whether this is dashboard data (default: false)
 * @returns {Promise<Object>} Query result or error object
 */
export const handleMongoQuery = async (
  queryFn,
  errorMessage = 'Database query failed',
  options = {}
) => {
  const {
    maxRetries = 3,
    retryDelay = 300,
    timeout = 3000,
    cacheKey = null,
    useCache = true,
    isDashboardData = false
  } = options;

  const requestId = Math.random().toString(36).substring(2, 10);
  let attempts = 0;
  const startTime = Date.now();

  // Check cache if a cache key is provided and caching is enabled
  if (cacheKey && useCache) {
    const cachedData = getFromCache(cacheKey, null, isDashboardData);
    if (cachedData) {
      console.log(`[${requestId}] Using cached data for query (key: ${cacheKey})`);
      return {
        success: true,
        data: cachedData,
        queryTime: 0,
        attempts: 0,
        fromCache: true
      };
    }
  }

  // Ensure MongoDB connection is established before running query
  try {
    const connectionResult = await connectToMongoDB(2000);
    if (!connectionResult.success) {
      console.error(`[${requestId}] MongoDB connection failed before query: ${connectionResult.error}`);

      // If we have a fallback cache, use it
      if (cacheKey && useCache) {
        const fallbackData = getFallbackFromCache(cacheKey);
        if (fallbackData) {
          console.log(`[${requestId}] Using fallback cache due to connection failure`);
          return {
            success: true,
            data: fallbackData,
            queryTime: 0,
            attempts: 0,
            fromFallbackCache: true
          };
        }
      }
    }
  } catch (connError) {
    console.error(`[${requestId}] Error checking MongoDB connection:`, connError);
  }

  while (attempts <= maxRetries) {
    try {
      // Create a timeout promise with increasing timeout for each retry
      const currentTimeout = timeout + (attempts * 500);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error(`Query timed out after ${currentTimeout}ms`)), currentTimeout);
      });

      console.log(`[${requestId}] Executing query (attempt ${attempts + 1}/${maxRetries + 1})...`);

      // Race the query against the timeout
      const result = await Promise.race([
        queryFn(),
        timeoutPromise
      ]);

      const queryTime = Date.now() - startTime;
      if (attempts > 0) {
        console.log(`[${requestId}] Query succeeded after ${attempts} retries in ${queryTime}ms`);
      } else if (queryTime > 500) {
        console.log(`[${requestId}] Query took ${queryTime}ms to complete`);
      }

      // Cache the result if a cache key is provided
      if (cacheKey && useCache && result) {
        saveToCache(cacheKey, result, isDashboardData);
      }

      return {
        success: true,
        data: result,
        queryTime,
        attempts,
        fromCache: false
      };
    } catch (error) {
      attempts++;
      const currentDuration = Date.now() - startTime;

      // Use console.warn instead of console.error to prevent red error messages in console
      // Only log as error on the final attempt
      if (attempts > maxRetries) {
        console.warn(`[${requestId}] ${errorMessage} (final attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms):`, error.message || 'Unknown error');
      } else {
        console.log(`[${requestId}] Query retry needed (attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${error.message || 'Unknown error'}`);
      }

      // On last attempt, try to use fallback cache if available
      if (attempts > maxRetries && cacheKey && useCache) {
        const fallbackData = getFallbackFromCache(cacheKey);
        if (fallbackData) {
          console.log(`[${requestId}] Using fallback cache after all query retries failed`);
          return {
            success: true,
            data: fallbackData,
            queryTime: currentDuration,
            attempts,
            fromFallbackCache: true
          };
        }
      }

      if (attempts <= maxRetries) {
        // Calculate delay with exponential backoff, but cap it at 2 seconds
        const delay = Math.min(retryDelay * Math.pow(1.5, attempts - 1), 2000);
        console.log(`[${requestId}] Retrying query in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      } else {
        return {
          success: false,
          error: errorMessage,
          details: error.message,
          attempts,
          duration: currentDuration
        };
      }
    }
  }
};
