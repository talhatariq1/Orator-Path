"use client";

import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  // Initialize with undefined to prevent hydration mismatch
  const [theme, setTheme] = useState(undefined);

  // Check for theme preference on component mount
  useEffect(() => {
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Apply theme changes when theme state changes
  useEffect(() => {
    if (theme === undefined) return;
    
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save theme preference
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  // Don't render anything until we know the theme to prevent flashing
  if (theme === undefined) return null;

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-white/10 backdrop-blur-lg border border-white/10 text-white hover:bg-white/20 transition-all duration-200"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <FaSun className="w-5 h-5" />
      ) : (
        <FaMoon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;