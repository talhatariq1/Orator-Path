'use client';

import React from 'react';

export default function FontDemo() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 blue-glow">
          Space Grotesk for Headlines
        </h1>
        <p className="text-xl text-gray-300 mb-6 font-body">
          This is the Inter font being used for body text. It provides excellent readability and a modern, clean appearance.
        </p>
        
        <h2 className="text-3xl font-heading font-semibold mb-3 purple-glow">
          Modern Typography Makes a Difference
        </h2>
        <p className="text-lg text-gray-400 font-body mb-6">
          Your typography choices significantly impact how users perceive your website. Inter for body text ensures readability across different screen sizes.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="p-6 border-gradient rounded-lg">
            <h3 className="text-2xl font-heading mb-3 gradient-text">Body Text Sample</h3>
            <p className="font-body text-base">
              This is how regular body text appears in your application. The Inter font provides excellent readability and a clean, modern appearance that works well at various sizes and weights.
            </p>
          </div>
          
          <div className="p-6 border-gradient rounded-lg">
            <h3 className="text-2xl font-heading mb-3 gradient-text">Heading Sample</h3>
            <h4 className="font-heading text-xl">
              This is Space Grotesk, your headline font. It has distinctive character while maintaining readability and complements the futuristic style of your application.
            </h4>
          </div>
        </div>
        
        <div className="p-6 border-gradient rounded-lg mb-8">
          <h3 className="text-2xl font-heading mb-4 text-center gradient-text">Typography Scale</h3>
          <div className="space-y-4">
            <div>
              <h1 className="font-heading text-4xl md:text-5xl">Heading 1 - Space Grotesk</h1>
              <p className="font-body text-sm text-gray-400">Font family: Space Grotesk, Font size: 3rem/48px</p>
            </div>
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">Heading 2 - Space Grotesk</h2>
              <p className="font-body text-sm text-gray-400">Font family: Space Grotesk, Font size: 2.25rem/36px</p>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl">Heading 3 - Space Grotesk</h3>
              <p className="font-body text-sm text-gray-400">Font family: Space Grotesk, Font size: 1.875rem/30px</p>
            </div>
            <div>
              <h4 className="font-heading text-xl md:text-2xl">Heading 4 - Space Grotesk</h4>
              <p className="font-body text-sm text-gray-400">Font family: Space Grotesk, Font size: 1.5rem/24px</p>
            </div>
            <div>
              <p className="font-body text-lg">Large Body - Inter</p>
              <p className="font-body text-sm text-gray-400">Font family: Inter, Font size: 1.125rem/18px</p>
            </div>
            <div>
              <p className="font-body text-base">Regular Body - Inter</p>
              <p className="font-body text-sm text-gray-400">Font family: Inter, Font size: 1rem/16px</p>
            </div>
            <div>
              <p className="font-body text-sm">Small Text - Inter</p>
              <p className="font-body text-sm text-gray-400">Font family: Inter, Font size: 0.875rem/14px</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <button className="btn-grad font-heading text-lg">
            Styled Button with Space Grotesk
          </button>
        </div>
      </div>
    </div>
  );
}