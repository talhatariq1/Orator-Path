"use client";

import { motion } from "framer-motion";

export default function DashboardLoading() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <motion.div
          className="w-16 h-16 rounded-full border-4 border-t-purple-500 border-r-purple-500 border-b-transparent border-l-transparent"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p className="mt-4 text-gray-400">Loading dashboard...</p>
      </div>
    </div>
  );
}
