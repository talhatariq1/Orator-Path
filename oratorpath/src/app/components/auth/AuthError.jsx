"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

/**
 * Authentication error component
 * Displays error messages during authentication processes with retry options
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - Error message to display
 * @param {string} props.retryLink - Link for retry action
 * @param {string} props.retryText - Text for retry button
 * @param {Function} props.onRetry - Function to call on retry
 * @returns {JSX.Element} The error component
 */
const AuthError = ({ 
  message = "Authentication failed. Please try again.", 
  retryLink = "/sign-in", 
  retryText = "Try Again",
  onRetry = null
}) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] p-6">
      <motion.div
        className="bg-red-900/20 border border-red-900/30 text-red-400 p-6 rounded-lg max-w-md w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Error icon */}
        <div className="flex items-center justify-center mb-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-12 w-12 text-red-500" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" 
            />
          </svg>
        </div>
        
        {/* Error message */}
        <h3 className="text-lg font-medium text-red-300 text-center mb-2">Authentication Error</h3>
        <p className="text-red-400 text-center mb-6">{message}</p>
        
        {/* Retry action */}
        <div className="flex justify-center">
          {onRetry ? (
            <motion.button
              onClick={onRetry}
              className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-300 rounded-md transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {retryText}
            </motion.button>
          ) : (
            <Link href={retryLink}>
              <motion.span
                className="px-4 py-2 bg-red-900/30 hover:bg-red-900/50 text-red-300 rounded-md transition-colors inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {retryText}
              </motion.span>
            </Link>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthError;
