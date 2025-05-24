"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SkillsRadarChart = ({ skills, size = 300 }) => {
  const [animatedSkills, setAnimatedSkills] = useState(skills.map(skill => ({ ...skill, value: 0 })));
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skills);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [skills]);
  
  // Calculate center point and radius
  const center = size / 2;
  const radius = (size / 2) * 0.8; // Leave some margin
  
  // Calculate points for each skill
  const skillPoints = animatedSkills.map((skill, index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2; // Start from top
    const value = skill.value / 100; // Normalize to 0-1
    const x = center + radius * value * Math.cos(angle);
    const y = center + radius * value * Math.sin(angle);
    return { x, y, ...skill };
  });
  
  // Create the polygon path
  const polygonPoints = skillPoints.map(point => `${point.x},${point.y}`).join(' ');
  
  // Create axis lines and labels
  const axisLines = skills.map((skill, index) => {
    const angle = (Math.PI * 2 * index) / skills.length - Math.PI / 2;
    const x2 = center + radius * Math.cos(angle);
    const y2 = center + radius * Math.sin(angle);
    
    // Calculate label position (slightly outside the chart)
    const labelRadius = radius * 1.1;
    const labelX = center + labelRadius * Math.cos(angle);
    const labelY = center + labelRadius * Math.sin(angle);
    
    // Adjust text anchor based on position
    let textAnchor = "middle";
    if (labelX < center - 10) textAnchor = "end";
    if (labelX > center + 10) textAnchor = "start";
    
    return {
      line: { x1: center, y1: center, x2, y2 },
      label: { x: labelX, y: labelY, textAnchor }
    };
  });
  
  // Create concentric circles for the grid
  const gridCircles = [0.2, 0.4, 0.6, 0.8, 1].map(factor => ({
    cx: center,
    cy: center,
    r: radius * factor
  }));
  
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {/* Grid circles */}
        {gridCircles.map((circle, index) => (
          <circle
            key={`grid-${index}`}
            cx={circle.cx}
            cy={circle.cy}
            r={circle.r}
            fill="transparent"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="1"
            strokeDasharray={index === gridCircles.length - 1 ? "none" : "2,2"}
          />
        ))}
        
        {/* Axis lines */}
        {axisLines.map((axis, index) => (
          <line
            key={`axis-${index}`}
            x1={axis.line.x1}
            y1={axis.line.y1}
            x2={axis.line.x2}
            y2={axis.line.y2}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1"
          />
        ))}
        
        {/* Skill polygon */}
        <motion.polygon
          points={polygonPoints}
          fill="rgba(138, 58, 234, 0.2)"
          stroke="rgba(138, 58, 234, 0.8)"
          strokeWidth="2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
        
        {/* Skill points */}
        {skillPoints.map((point, index) => (
          <motion.circle
            key={`point-${index}`}
            cx={point.x}
            cy={point.y}
            r={4}
            fill="#8A3AEA"
            initial={{ opacity: 0, r: 0 }}
            animate={{ opacity: 1, r: 4 }}
            transition={{ delay: 0.5 + (index * 0.1), duration: 0.3 }}
          />
        ))}
        
        {/* Skill labels */}
        {axisLines.map((axis, index) => (
          <text
            key={`label-${index}`}
            x={axis.label.x}
            y={axis.label.y}
            textAnchor={axis.label.textAnchor}
            dominantBaseline="middle"
            fill="rgba(255, 255, 255, 0.8)"
            fontSize="12"
            fontWeight="500"
          >
            {skills[index].name}
          </text>
        ))}
      </svg>
    </div>
  );
};

export default SkillsRadarChart;
