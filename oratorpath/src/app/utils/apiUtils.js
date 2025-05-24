/**
 * Client-side API utilities for widgets
 * 
 * This file contains simplified versions of the server-side API utilities
 * for use in client components.
 */

/**
 * Fetch data with enhanced retry logic, timeout, and error handling
 * @param {string} url - URL to fetch
 * @param {Object} options - Fetch options
 * @param {Object} retryOptions - Retry options
 * @param {number} retryOptions.maxRetries - Maximum number of retry attempts (default: 3)
 * @param {number} retryOptions.retryDelay - Base delay between retries in ms (default: 200)
 * @param {number} retryOptions.timeout - Fetch timeout in ms (default: 2500)
 * @param {boolean} retryOptions.useFallbackCache - Whether to use fallback cache on failure (default: true)
 * @returns {Promise<Object>} Fetch result with metadata
 */
export const fetchWithRetry = async (url, options = {}, retryOptions = {}) => {
  const {
    maxRetries = 3,
    retryDelay = 200,
    timeout = 2500,
    useFallbackCache = true
  } = retryOptions;

  let attempts = 0;
  const startTime = Date.now();
  const requestId = Math.random().toString(36).substring(2, 10);

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

      // Calculate fetch time
      const fetchTime = Date.now() - startTime;
      console.log(`[${requestId}] Fetch successful in ${fetchTime}ms`);

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
