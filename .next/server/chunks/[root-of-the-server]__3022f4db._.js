module.exports = {

"[project]/.next-internal/server/app/api/practice-session/[id]/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/node:crypto [external] (node:crypto, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Check if we're running on the client side
__turbopack_context__.s({
    "connect": (()=>connect),
    "getConnectionMetrics": (()=>getConnectionMetrics),
    "isConnected": (()=>isConnected)
});
const isClient = "undefined" !== 'undefined';
// Only import mongoose on the server side
const mongoose = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs)") : ("TURBOPACK unreachable", undefined);
// Connection state tracking
let initialized = false;
let connectionPromise = null;
let connectionStartTime = 0;
let connectionAttempts = 0;
let connectionEstablished = false;
let lastConnectionTime = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_INTERVAL = 1000; // 1 second (reduced from 2 seconds)
const CONNECTION_HEALTH_CHECK_INTERVAL = 30000; // 30 seconds
const connect = async (forceNew = false)=>{
    // If we're on the client side, return a mock connection
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        mongoose.set('strictQuery', true);
        // If already connected, return immediately unless forceNew is true
        if (!forceNew && mongoose.connection.readyState === 1) {
            console.log('MongoDB already connected (readyState: 1)');
            return mongoose.connection;
        }
        // If connection is in progress and we're not forcing a new one, return the existing promise
        if (!forceNew && connectionPromise) {
            console.log('MongoDB connection already in progress, reusing promise');
            return connectionPromise;
        }
        // Start connection timer
        connectionStartTime = Date.now();
        // Create a new connection promise
        connectionPromise = new Promise(async (resolve, reject)=>{
            try {
                console.log(`Connecting to MongoDB (attempt ${connectionAttempts + 1})...`);
                // Configure connection options with optimized settings
                const connection = await mongoose.connect(process.env.MONGODB_URI, {
                    dbName: 'orator-path',
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    connectTimeoutMS: 3000,
                    socketTimeoutMS: 45000,
                    // Connection pool settings
                    maxPoolSize: 15,
                    minPoolSize: 3,
                    maxIdleTimeMS: 60000,
                    serverSelectionTimeoutMS: 5000,
                    heartbeatFrequencyMS: 10000
                });
                const connectionTime = Date.now() - connectionStartTime;
                lastConnectionTime = connectionTime;
                console.log(`MongoDB connected successfully in ${connectionTime}ms`);
                // Reset connection attempts on successful connection
                connectionAttempts = 0;
                initialized = true;
                connectionEstablished = true;
                // Set up connection event handlers
                mongoose.connection.on('error', (err)=>{
                    console.error('MongoDB connection error:', err);
                    connectionEstablished = false;
                });
                mongoose.connection.on('disconnected', ()=>{
                    console.log('MongoDB disconnected, will attempt to reconnect');
                    initialized = false;
                    connectionPromise = null;
                    connectionEstablished = false;
                    // Only attempt reconnect if we haven't exceeded max attempts
                    if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                        connectionAttempts++;
                        setTimeout(()=>{
                            connect(true).catch((err)=>console.error('Reconnection failed:', err));
                        }, RECONNECT_INTERVAL * Math.min(connectionAttempts, 3)); // Cap backoff at 3x
                    } else {
                        console.error(`Exceeded maximum reconnection attempts (${MAX_RECONNECT_ATTEMPTS})`);
                        // Reset attempts after a longer delay to allow for recovery
                        setTimeout(()=>{
                            connectionAttempts = 0;
                            connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                        }, 10000); // Try again after 10 seconds
                    }
                });
                // Add connected event handler
                mongoose.connection.on('connected', ()=>{
                    console.log('MongoDB connection established');
                    connectionEstablished = true;
                });
                resolve(connection);
            } catch (error) {
                console.error('MongoDB connection error:', error);
                // Reset connection promise so we can try again
                connectionPromise = null;
                connectionEstablished = false;
                // Only attempt reconnect if we haven't exceeded max attempts
                if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                    connectionAttempts++;
                    const backoffTime = RECONNECT_INTERVAL * Math.min(connectionAttempts, 3); // Cap backoff at 3x
                    console.log(`Connection failed, will retry in ${backoffTime}ms (attempt ${connectionAttempts}/${MAX_RECONNECT_ATTEMPTS})`);
                    setTimeout(()=>{
                        connect(true).catch((err)=>console.error('Retry connection failed:', err));
                    }, backoffTime);
                } else {
                    // Reset attempts after a longer delay to allow for recovery
                    setTimeout(()=>{
                        connectionAttempts = 0;
                        connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                    }, 10000); // Try again after 10 seconds
                }
                reject(error);
            }
        });
        return connectionPromise;
    } catch (error) {
        console.error('Error in connect function:', error);
        return Promise.resolve({
            readyState: 0,
            error: true
        });
    }
};
// Warmup connection - connect as soon as the module is imported
if ("TURBOPACK compile-time truthy", 1) {
    console.log('Warming up MongoDB connection...');
    connect().catch((err)=>console.error('Initial connection warmup failed:', err));
    // Set up a periodic health check to ensure connection stays alive
    setInterval(()=>{
        if (!connectionEstablished || mongoose && mongoose.connection.readyState !== 1) {
            console.log('MongoDB connection health check: reconnecting...');
            connect(true).catch((err)=>console.error('Health check reconnection failed:', err));
        } else {
            console.log('MongoDB connection health check: connection is healthy');
        }
    }, CONNECTION_HEALTH_CHECK_INTERVAL);
}
const isConnected = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // Always return true on client side
    return mongoose.connection.readyState === 1;
};
const getConnectionMetrics = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return {
        readyState: mongoose ? mongoose.connection.readyState : 0,
        initialized,
        connectionEstablished,
        lastConnectionTime,
        connectionAttempts
    };
};
}}),
"[project]/src/lib/api/apiUtils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * API Utilities for Dashboard Widgets
 *
 * This file contains common utilities for API calls, error handling,
 * data validation, and caching strategies.
 */ __turbopack_context__.s({
    "clearAllCache": (()=>clearAllCache),
    "clearCache": (()=>clearCache),
    "connectToMongoDB": (()=>connectToMongoDB),
    "fetchWithRetry": (()=>fetchWithRetry),
    "formatDateForDisplay": (()=>formatDateForDisplay),
    "formatErrorResponse": (()=>formatErrorResponse),
    "formatSuccessResponse": (()=>formatSuccessResponse),
    "generateCacheKey": (()=>generateCacheKey),
    "getCacheStats": (()=>getCacheStats),
    "getFallbackFromCache": (()=>getFallbackFromCache),
    "getFromCache": (()=>getFromCache),
    "handleMongoQuery": (()=>handleMongoQuery),
    "saveToCache": (()=>saveToCache),
    "validateRequiredFields": (()=>validateRequiredFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-route] (ecmascript)");
;
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
 */ const DEFAULT_CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes
const DASHBOARD_CACHE_EXPIRATION = 2 * 60 * 1000; // 2 minutes for dashboard data
const CRITICAL_DATA_CACHE_EXPIRATION = 1 * 60 * 1000; // 1 minute for critical data
// Check if we're running on the client side
const isClient = "undefined" !== 'undefined';
const connectToMongoDB = async (timeoutMs = 3000, forceNew = false)=>{
    // If we're on the client side, return a mock successful connection
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const startTime = Date.now();
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getConnectionMetrics"])();
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
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>reject(new Error(`MongoDB connection timed out after ${timeoutMs}ms`)), timeoutMs);
        });
        // Race the connection against the timeout
        await Promise.race([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connect"])(forceNew),
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
const formatSuccessResponse = (data, message = 'Success')=>{
    return {
        status: 'success',
        message,
        data,
        timestamp: new Date().toISOString()
    };
};
const formatErrorResponse = (message, statusCode = 500, details = null)=>{
    return {
        status: 'error',
        message,
        statusCode,
        details,
        timestamp: new Date().toISOString()
    };
};
const getFromCache = (key, expirationTime = DEFAULT_CACHE_EXPIRATION, isDashboardData = false)=>{
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
    const actualExpiration = isDashboardData ? DASHBOARD_CACHE_EXPIRATION : expirationTime || DEFAULT_CACHE_EXPIRATION;
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
const saveToCache = (key, data, isDashboardData = false)=>{
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
const getCacheStats = ()=>{
    return {
        hits: cacheHits,
        misses: cacheMisses,
        hitRatio: cacheHits / (cacheHits + cacheMisses || 1),
        entries: Object.keys(cache.data).length,
        keyStats: Object.keys(cache.data).map((key)=>({
                key,
                hits: cache.hits[key] || 0,
                misses: cache.misses[key] || 0,
                age: (Date.now() - cache.timestamps[key]) / 1000
            }))
    };
};
const clearCache = (key)=>{
    delete cache.data[key];
    delete cache.timestamps[key];
    console.log(`Cleared cache for key: ${key}`);
};
const clearAllCache = ()=>{
    const oldSize = Object.keys(cache.data).length;
    cache.data = {};
    cache.timestamps = {};
    console.log(`Cleared all cache entries (${oldSize} entries removed)`);
};
const getFallbackFromCache = (key)=>{
    const fallbackKey = `${key}:fallback`;
    const fallbackData = cache.data[fallbackKey];
    if (fallbackData) {
        console.log(`Using fallback cache for key: ${key}`);
        return fallbackData;
    }
    return null;
};
const fetchWithRetry = async (url, options = {}, retryOptions = {})=>{
    const { maxRetries = 3, retryDelay = 200, timeout = 2500, useFallbackCache = true, isDashboardData = false } = retryOptions;
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
            ...options.headers || {}
        }
    };
    while(attempts <= maxRetries){
        // Create a controller for this attempt
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), timeout + attempts * 500); // Increase timeout with each retry
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
            const errorMessage = isTimeout ? `Request timed out after ${timeout + (attempts - 1) * 500}ms` : error.message;
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
                await new Promise((resolve)=>setTimeout(resolve, delay));
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
const generateCacheKey = (userId, endpoint, params = null)=>{
    // Create a base key with user ID and endpoint
    let key = `${userId}:${endpoint}`;
    // If additional parameters are provided, add them to the key
    if (params) {
        // Sort the keys to ensure consistent ordering
        const sortedKeys = Object.keys(params).sort();
        // Add each parameter to the key
        if (sortedKeys.length > 0) {
            const paramsStr = sortedKeys.filter((paramKey)=>params[paramKey] !== undefined && params[paramKey] !== null).map((paramKey)=>`${paramKey}=${params[paramKey]}`).join(',');
            if (paramsStr) {
                key += `:${paramsStr}`;
            }
        }
    }
    return key;
};
const validateRequiredFields = (data, requiredFields)=>{
    const missingFields = requiredFields.filter((field)=>{
        const value = data[field];
        return value === undefined || value === null || value === '';
    });
    return {
        success: missingFields.length === 0,
        missingFields
    };
};
const formatDateForDisplay = (date)=>{
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
const handleMongoQuery = async (queryFn, errorMessage = 'Database query failed', options = {})=>{
    const { maxRetries = 3, retryDelay = 300, timeout = 3000, cacheKey = null, useCache = true, isDashboardData = false } = options;
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
    while(attempts <= maxRetries){
        try {
            // Create a timeout promise with increasing timeout for each retry
            const currentTimeout = timeout + attempts * 500;
            const timeoutPromise = new Promise((_, reject)=>{
                setTimeout(()=>reject(new Error(`Query timed out after ${currentTimeout}ms`)), currentTimeout);
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
                await new Promise((resolve)=>setTimeout(resolve, delay));
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
}}),
"[project]/src/lib/models/audioAnalysis.model.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Path: oratorpath/src/lib/models/audioAnalysis.model.js
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const audioAnalysisSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    // Store the Clerk ID to link to the User model/collection
    // You might already have a User model that stores clerkId as a unique identifier.
    // If your User model's main identifier is clerkId, you can store that directly.
    // If User model uses MongoDB's _id and you want a direct reference:
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Assuming your user model is named 'User'
    //   required: true,
    // },
    // For simplicity with Clerk, storing clerkId directly is often easier.
    clerkId: {
        type: String,
        required: true,
        index: true
    },
    fileName: {
        type: String,
        required: false
    },
    transcription: {
        type: String,
        required: false
    },
    transcriptAnalysis: {
        raw_transcription: String,
        contextual_issues: Array,
        coherence_score: Number
    },
    voiceAnalysis: {
        duration: Number,
        pitch: {
            average: Number,
            min: Number,
            max: Number,
            variability: Number
        },
        volume: {
            average: Number,
            variability: Number
        },
        speaking_rate: Number,
        tempo: Number,
        pauses: {
            count: Number,
            average_duration: Number
        },
        voice_quality: {
            spectral_contrast: Number,
            spectral_centroid: Number,
            spectral_bandwidth: Number
        },
        gender_estimation: {
            likely_gender: String,
            confidence: Number
        },
        error: String
    },
    textAnalysis: {
        text_statistics: {
            word_count: Number,
            sentence_count: Number,
            average_words_per_sentence: Number,
            vocabulary_richness: Number
        },
        filler_words: {
            total_count: Number,
            percentage: Number,
            occurrences: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        transition_words: {
            total_count: Number,
            percentage: Number,
            occurrences: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        sentiment_analysis: {
            polarity: Number,
            subjectivity: Number,
            label: String
        },
        emotion_analysis: {
            primary_emotion: String,
            secondary_emotion: String,
            emotion_summary: String,
            emotion_distribution: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
            emotion_counts: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        },
        content_analysis: {
            most_common_words: Array,
            noun_verb_ratio: Number,
            repetitions: Array,
            hesitation_patterns: Number
        },
        readability: {
            flesch_reading_ease: Number,
            reading_level: String
        },
        named_entities: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        error: String
    },
    recommendations: {
        recommendations: Array,
        performance_assessment: {
            overall_score: Number,
            performance_level: String,
            performance_description: String,
            strengths: Array,
            detailed_strengths: Array,
            growth_areas: Array,
            score_breakdown: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
            priority_improvements: Array
        },
        development_plan: {
            next_steps: Array,
            development_pathway: Array,
            tracking_template: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed
        }
    },
    analysisDate: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true
} // Adds createdAt and updatedAt timestamps automatically
);
// Add an index on clerkId and analysisDate for efficient querying of user's history
audioAnalysisSchema.index({
    clerkId: 1,
    analysisDate: -1
});
const AudioAnalysis = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.AudioAnalysis || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model('AudioAnalysis', audioAnalysisSchema);
const __TURBOPACK__default__export__ = AudioAnalysis;
}}),
"[project]/src/app/api/practice-session/[id]/route.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/app-router/server/currentUser.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiUtils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/models/audioAnalysis.model.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
;
;
;
;
async function GET(request, context) {
    // Generate a unique request ID for tracking
    const requestId = Math.random().toString(36).substring(2, 10);
    try {
        // Extract the session ID from params
        const params = await context.params;
        const sessionId = params.id;
        console.log(`[${requestId}] Practice session detail API request started for ID: ${sessionId}`);
        // Get the current user from Clerk
        const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$app$2d$router$2f$server$2f$currentUser$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["currentUser"])();
        if (!user) {
            console.log(`[${requestId}] No authenticated user found`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Authentication required',
                success: false
            }, {
                status: 401
            });
        }
        const userId = user.id;
        console.log(`[${requestId}] User authenticated: ${userId}`);
        // Validate the practice session ID
        if (!sessionId || !__TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Types.ObjectId.isValid(sessionId)) {
            console.log(`[${requestId}] Invalid practice session ID: ${sessionId}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Invalid practice session ID',
                success: false
            }, {
                status: 400
            });
        }
        // Connect to MongoDB with optimized settings
        const dbConnection = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectToMongoDB"])(3000); // 3 second timeout
        if (!dbConnection.success) {
            console.log(`[${requestId}] MongoDB connection failed after ${dbConnection.failureTime}ms: ${dbConnection.error}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: `Database connection failed after ${dbConnection.failureTime}ms`,
                success: false
            }, {
                status: 500
            });
        }
        console.log(`[${requestId}] MongoDB connected in ${dbConnection.connectionTime}ms`);
        // Get the practice session by ID with enhanced retry logic
        const cacheKey = `practice-session-${userId}-${sessionId}`;
        console.log(`[${requestId}] Using cache key: ${cacheKey}`);
        const queryResult = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiUtils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handleMongoQuery"])(async ()=>{
            // Find the practice session by ID and ensure it belongs to the current user
            console.log(`[${requestId}] Querying MongoDB for session ID: ${sessionId}`);
            const session = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$models$2f$audioAnalysis$2e$model$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findOne({
                _id: sessionId,
                clerkId: userId
            }).lean(); // Use lean() for better performance
            return session;
        }, 'Failed to fetch practice session', {
            maxRetries: 2,
            retryDelay: 300,
            timeout: 3000,
            cacheKey: cacheKey,
            useCache: true
        });
        // Check if the query was successful
        if (!queryResult.success) {
            console.log(`[${requestId}] Error fetching practice session: ${queryResult.error}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Failed to fetch practice session',
                success: false
            }, {
                status: 500
            });
        }
        // Check if the practice session exists
        const session = queryResult.data;
        if (!session) {
            console.log(`[${requestId}] Practice session not found: ${params.id}`);
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Practice session not found',
                success: false
            }, {
                status: 404
            });
        }
        // Format the practice session data
        const analysisDate = session.analysisDate || new Date();
        const formattedDate = analysisDate.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
        const formattedTime = analysisDate.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        // Calculate duration in minutes and seconds
        const durationSeconds = session.voiceAnalysis?.duration || 0;
        const minutes = Math.floor(durationSeconds / 60);
        const seconds = Math.floor(durationSeconds % 60);
        const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        // Get overall score
        const overallScore = session.recommendations?.performance_assessment?.overall_score || 0;
        // Return the formatted practice session data with all analysis details
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            session: {
                id: session._id.toString(),
                title: session.fileName || `Practice Session ${formattedDate}`,
                date: formattedDate,
                time: formattedTime,
                timestamp: analysisDate.getTime(),
                duration: formattedDuration,
                durationSeconds: durationSeconds,
                score: Math.round(overallScore),
                overallScore: overallScore,
                analysisDate: formattedDate + ' ' + formattedTime,
                // Include full analysis data
                transcription: session.transcription || '',
                transcriptAnalysis: session.transcriptAnalysis || {},
                voiceAnalysis: session.voiceAnalysis || {},
                textAnalysis: session.textAnalysis || {},
                recommendations: session.recommendations || {}
            }
        }, {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0'
            }
        });
    } catch (error) {
        console.log(`[${requestId}] Error processing practice session request:`, error.message || 'Unknown error');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Failed to fetch practice session',
            success: false
        }, {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__3022f4db._.js.map