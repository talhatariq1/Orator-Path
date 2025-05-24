"use client";
import React from "react";
import { motion } from "framer-motion";

export default function GradientButton({ text, onClick, className = "" }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(138, 58, 234, 0.6)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-6 py-3 rounded-full font-semibold text-white shadow-lg overflow-hidden ${className}`}
    >
      {/* Background gradient with animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] animate-gradient-x"></div>
      
      {/* Glow overlay */}
      <div className="absolute inset-0 opacity-0 hover:opacity-40 transition-opacity duration-300 bg-white blur-xl"></div>
      
      {/* Button text */}
      <span className="relative z-10">{text}</span>
      
      {/* Shine effect */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute w-1/2 h-full top-0 left-[-100%] transform skew-x-12 bg-gradient-to-r from-transparent to-white/20 group-hover:animate-shine z-10"></div>
      </div>
    </motion.button>
  );
}