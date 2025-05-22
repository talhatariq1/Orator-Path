"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "../lib/utils";
import { motion } from "framer-motion";

// Helper function to generate avatar initials
const getInitials = (name) => {
  return name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();
};

// Helper function to generate a consistent color based on name
const getAvatarColor = (name) => {
  const colors = [
    'bg-blue-500',
    'bg-purple-500',
    'bg-indigo-500',
    'bg-pink-500',
    'bg-teal-500',
    'bg-green-500',
    'bg-red-500',
    'bg-orange-500',
  ];

  // Simple hash function to get a consistent color for a name
  const hash = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[hash % colors.length];
};

const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            className="testimonial-card group relative w-[350px] max-w-full shrink-0 rounded-2xl overflow-hidden transition-all duration-300 px-6 py-6 md:w-[450px] testimonial-card-hover card-ambient-glow card-depth"
            key={item.id || idx}
          >
            {/* Glass morphism background with subtle gradient overlay */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-950/80 via-purple-950/80 to-black/90 backdrop-blur-md rounded-2xl border border-white/10"></div>

            {/* Accent light beam effect */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>

            {/* Animated stripe decoration */}
            <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 bg-[length:200%_auto] animate-border-flow"></div>

            {/* Quote mark decoration */}
            <div className="absolute top-4 right-4 opacity-10">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011C3 9.511 5.294 6.51 8.45 5.606L9 6.874C7.392 7.84 6.209 9.564 6.209 10.908C6.209 11.787 6.866 12.517 7.693 12.517C9.137 12.517 10.373 13.834 10.373 15.383C10.373 16.922 9.138 18.239 7.693 18.239C6.744 18.239 5.421 17.418 4.583 17.321ZM15.583 17.321C14.553 16.227 14 15 14 13.011C14 9.511 16.294 6.51 19.45 5.606L20 6.874C18.392 7.84 17.209 9.564 17.209 10.908C17.209 11.787 17.866 12.517 18.693 12.517C20.137 12.517 21.373 13.834 21.373 15.383C21.373 16.922 20.138 18.239 18.693 18.239C17.744 18.239 16.421 17.418 15.583 17.321Z" fill="url(#paint0_linear)" />
                <defs>
                  <linearGradient id="paint0_linear" x1="3" y1="5.606" x2="21.373" y2="18.239" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#ffffff" />
                    <stop offset="1" stopColor="#ffffff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <blockquote className="relative z-10">
              <p className="text-gray-100 mb-5 leading-relaxed font-light text-base italic">
                {item.content}
              </p>

              <div className="mt-6 flex items-center gap-4">
                {/* Modern avatar with gradient rim */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur-sm opacity-70"></div>
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/20">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full flex items-center justify-center text-white font-semibold ${getAvatarColor(item.name)}`}>
                        {getInitials(item.name)}
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-white text-base">
                    {item.name}
                  </h4>
                  <div className="flex items-center mt-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 mr-2"></span>
                    <p className="text-sm text-blue-300 font-light">{item.role}</p>
                  </div>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { InfiniteMovingCards };
