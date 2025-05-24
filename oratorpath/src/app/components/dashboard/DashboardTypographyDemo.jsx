'use client';

import React from 'react';

export default function DashboardTypographyDemo() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4 dashboard-main-title">
          Dashboard Typography Demo
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          This demonstrates the simple and classic font styling for dashboard pages.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="dashboard-card p-6">
          <h2 className="text-xl font-semibold mb-3 dashboard-card-title">
            Heading Examples
          </h2>
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl">H1 Heading</h1>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
            <div>
              <h2 className="text-xl">H2 Heading</h2>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
            <div>
              <h3 className="text-lg">H3 Heading</h3>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
            <div>
              <h4 className="text-base">H4 Heading</h4>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
          </div>
        </div>
        
        <div className="dashboard-card p-6">
          <h2 className="text-xl font-semibold mb-3 dashboard-card-title">
            UI Element Examples
          </h2>
          <div className="space-y-4">
            <div>
              <p className="text-base stat-label">Stat Label</p>
              <p className="text-2xl font-semibold stat-value">1,234</p>
            </div>
            <div>
              <p className="text-base section-title">Section Title</p>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
            <div>
              <p className="text-base widget-title">Widget Title</p>
              <p className="text-sm text-gray-400">Using Inter font</p>
            </div>
            <div>
              <p className="text-xl dashboard-welcome-title">Welcome Title</p>
              <p className="text-sm text-gray-400">Using Space Grotesk font</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-card p-6 mb-8">
        <h2 className="text-xl font-semibold mb-3 dashboard-card-title">
          Body Text Example
        </h2>
        <p className="mb-4">
          This is regular body text that still uses the Noto Serif font. We've only changed the headings and important UI elements to use the simpler, more classic Inter font.
        </p>
        <p>
          The combination of Inter for headings and Noto Serif for body text creates a clean, professional look that's perfect for dashboard interfaces while maintaining readability.
        </p>
      </div>
      
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-purple-600 rounded-lg hover:bg-purple-700 transition-colors">
          Button Example
        </button>
        <button className="px-4 py-2 border border-gray-600 rounded-lg hover:border-purple-500 transition-colors">
          Secondary Button
        </button>
      </div>
    </div>
  );
}
