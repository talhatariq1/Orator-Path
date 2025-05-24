// Check if we're running on the client side
const isClient = typeof window !== 'undefined';

// Only import mongoose on the server side
const mongoose = !isClient ? require('mongoose') : null;

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

/**
 * Connect to MongoDB with connection pooling and retry logic
 * @param {boolean} forceNew - Force a new connection even if one exists
 * @returns {Promise<mongoose.Connection>} Mongoose connection
 */
export const connect = async (forceNew = false) => {
  // If we're on the client side, return a mock connection
  if (isClient) {
    return Promise.resolve({
      readyState: 1,
      mock: true
    });
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
    connectionPromise = new Promise(async (resolve, reject) => {
      try {
        console.log(`Connecting to MongoDB (attempt ${connectionAttempts + 1})...`);

        // Configure connection options with optimized settings
        const connection = await mongoose.connect(process.env.MONGODB_URI, {
          dbName: 'orator-path',
          useNewUrlParser: true,
          useUnifiedTopology: true,
          connectTimeoutMS: 3000, // Reduced from 5s to 3s for faster failure detection
          socketTimeoutMS: 45000, // 45 second socket timeout
          // Connection pool settings
          maxPoolSize: 15, // Increased from 10 to 15 for better concurrency
          minPoolSize: 3,  // Increased from 2 to 3 to maintain more connections
          maxIdleTimeMS: 60000, // Increased from 30s to 60s to keep connections alive longer
          serverSelectionTimeoutMS: 5000, // 5 second timeout for server selection
          heartbeatFrequencyMS: 10000, // 10 second heartbeat frequency
        });

        const connectionTime = Date.now() - connectionStartTime;
        lastConnectionTime = connectionTime;
        console.log(`MongoDB connected successfully in ${connectionTime}ms`);

        // Reset connection attempts on successful connection
        connectionAttempts = 0;
        initialized = true;
        connectionEstablished = true;

        // Set up connection event handlers
        mongoose.connection.on('error', (err) => {
          console.error('MongoDB connection error:', err);
          connectionEstablished = false;
        });

        mongoose.connection.on('disconnected', () => {
          console.log('MongoDB disconnected, will attempt to reconnect');
          initialized = false;
          connectionPromise = null;
          connectionEstablished = false;

          // Only attempt reconnect if we haven't exceeded max attempts
          if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
            connectionAttempts++;
            setTimeout(() => {
              connect(true).catch(err => console.error('Reconnection failed:', err));
            }, RECONNECT_INTERVAL * Math.min(connectionAttempts, 3)); // Cap backoff at 3x
          } else {
            console.error(`Exceeded maximum reconnection attempts (${MAX_RECONNECT_ATTEMPTS})`);
            // Reset attempts after a longer delay to allow for recovery
            setTimeout(() => {
              connectionAttempts = 0;
              connect(true).catch(err => console.error('Recovery connection failed:', err));
            }, 10000); // Try again after 10 seconds
          }
        });

        // Add connected event handler
        mongoose.connection.on('connected', () => {
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

          setTimeout(() => {
            connect(true).catch(err => console.error('Retry connection failed:', err));
          }, backoffTime);
        } else {
          // Reset attempts after a longer delay to allow for recovery
          setTimeout(() => {
            connectionAttempts = 0;
            connect(true).catch(err => console.error('Recovery connection failed:', err));
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
if (!isClient && process.env.NODE_ENV !== 'test') {
  console.log('Warming up MongoDB connection...');
  connect().catch(err => console.error('Initial connection warmup failed:', err));

  // Set up a periodic health check to ensure connection stays alive
  setInterval(() => {
    if (!connectionEstablished || (mongoose && mongoose.connection.readyState !== 1)) {
      console.log('MongoDB connection health check: reconnecting...');
      connect(true).catch(err => console.error('Health check reconnection failed:', err));
    } else {
      console.log('MongoDB connection health check: connection is healthy');
    }
  }, CONNECTION_HEALTH_CHECK_INTERVAL);
}

// Export connection status checker
export const isConnected = () => {
  if (isClient) return true; // Always return true on client side
  return mongoose.connection.readyState === 1;
};

// Export connection metrics for monitoring
export const getConnectionMetrics = () => {
  if (isClient) {
    // Return mock metrics on client side
    return {
      readyState: 1,
      initialized: true,
      connectionEstablished: true,
      lastConnectionTime: 0,
      connectionAttempts: 0,
      isClient: true
    };
  }

  return {
    readyState: mongoose ? mongoose.connection.readyState : 0,
    initialized,
    connectionEstablished,
    lastConnectionTime,
    connectionAttempts
  };
};
