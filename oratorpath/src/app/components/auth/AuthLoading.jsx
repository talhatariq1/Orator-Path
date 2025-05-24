"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

/**
 * Authentication loading component
 * Displays a loading animation during authentication processes
 * 
 * @param {Object} props - Component props
 * @param {string} props.message - Loading message to display
 * @param {boolean} props.fullScreen - Whether to display in full screen mode
 * @returns {JSX.Element} The loading component
 */
const AuthLoading = ({ message = "Authenticating...", fullScreen = true }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${fullScreen ? 'min-h-screen' : 'min-h-[300px]'} bg-gray-900 p-6`}>
      <div className="flex flex-col items-center">
        {/* Logo */}
        <div className="mb-6 relative w-16 h-16">
          <Image
            src="/Logo.PNG"
            alt="OratorPath Logo"
            fill
            className="object-contain filter brightness-125 contrast-125"
            priority
          />
        </div>
        
        {/* Loading animation */}
        <motion.div
          className="w-12 h-12 mb-4 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-purple-500/30 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="absolute inset-0 border-t-4 border-purple-500 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
        
        {/* Loading message */}
        <motion.p
          className="text-gray-300 text-lg font-medium"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {message}
        </motion.p>
        
        {/* Subtle hint */}
        <motion.p
          className="text-gray-500 text-sm mt-2 text-center max-w-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          This will only take a moment
        </motion.p>
      </div>
    </div>
  );
};

export default AuthLoading;
