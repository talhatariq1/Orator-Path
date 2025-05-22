"use client";
import React from 'react';
import styles from './SkillsOrbit.module.css';

const SkillsOrbit = () => {
  // Icons are no longer interactive
  
  // Inner circle icons (rotating clockwise)
  const innerIcons = [
    { id: 1, content: 'AI', className: 'bg-blue-400 text-white' },
    { id: 2, content: 'C1', className: 'bg-indigo-600 text-white' },
    { id: 3, content: 'IELTS', className: 'bg-white text-black font-semibold text-xs' },
    { id: 4, content: '|||', className: 'bg-white text-black' }, // Audio waveform representation
  ];

  // // Outer circle icons (rotating counter-clockwise)
  // const outerIcons = [
  //   { id: 1, content: 'TS', className: 'bg-blue-500 text-white' },
  //   { id: 2, content: 'JS', className: 'bg-yellow-500 text-black' },
  //   { id: 3, content: <span className="text-blue-400">⚛</span>, className: 'bg-gray-900 flex items-center justify-center' }, // React
  //   { id: 4, content: <span className="text-green-500">N</span>, className: 'bg-white flex items-center justify-center' }, // Node
  //   { id: 5, content: 'N', className: 'bg-white text-black font-bold' }, // Next.js
  //   { id: 6, content: <span className="text-cyan-400">~</span>, className: 'bg-gray-900 flex items-center justify-center' }, // Wave symbol
  // ];

  return (
    <div className={styles.orbitContainer}>
      {/* Center text */}
      {/* <div className={styles.centerText}>
        <span className="text-6xl font-bold"><span className="text-gray-600 ml-1 text-5xl"></span></span>
      </div> */}
      
      {/* Inner orbit - no longer using the hovered class on the orbit container */}
      <div className={styles.innerOrbit}>
        {innerIcons.map((icon) => (
          <div 
            key={icon.id} 
            className={`${styles.icon} ${styles.innerIcon} ${icon.className}`}
          >
            {icon.content}
          </div>
        ))}
      </div>
      
      {/* Outer orbit */}
      {/* <div className={styles.outerOrbit}>
        {outerIcons.map((icon) => (
          <div 
            key={icon.id} 
            className={`${styles.icon} ${styles.outerIcon} ${icon.className}`}
          >
            {icon.content}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default SkillsOrbit;