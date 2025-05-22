"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DashboardError({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="flex h-screen w-full items-center justify-center">
      <motion.div 
        className="bg-[#1A1B20]/90 backdrop-blur-md p-8 rounded-lg border border-[#2C2D32]/80 shadow-lg max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold text-red-400 mb-4">Something went wrong</h2>
        <p className="text-gray-300 mb-6">
          We encountered an error while loading the dashboard. Please try again or return to the home page.
        </p>
        <div className="flex space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors"
          >
            Try again
          </motion.button>
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-md transition-colors"
            >
              Return home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
