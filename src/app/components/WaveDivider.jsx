"use client";
import React from "react";

export default function WaveDivider() {
  return (
    <div className="absolute w-full bottom-0 left-0 overflow-hidden leading-[0] rotate-180">
      <svg
        className="relative block w-[calc(100%+1.3px)] h-[100px]"
        viewBox="0 0 700 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C150,0 350,0 700,100 L700,101 L0,101 Z"
          fill="#fff"
        />
      </svg>
    </div>
  );
}
