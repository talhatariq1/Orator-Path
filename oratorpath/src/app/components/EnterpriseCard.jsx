"use client";

import React from "react";
import { motion } from "framer-motion";

const EnterpriseCard = () => {
  return (
    <motion.div
      whileHover="hover"
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
      variants={{
        hover: {
          scale: 1.05,
        },
      }}
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-purple-600 p-8"
    >
      <div className="relative z-10 text-white">
        <motion.span
          className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white"
          variants={{
            hover: {
              x: 5,
              backgroundColor: "rgba(255, 255, 255, 0.4)",
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          Enterprise
        </motion.span>
        <motion.span
          initial={{ scale: 0.85 }}
          variants={{
            hover: {
              scale: 1,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
          className="my-2 block origin-top-left font-mono text-6xl font-black leading-[1.2]"
        >
          $100/
          <br />
          Month
        </motion.span>
        <motion.p
          variants={{
            hover: {
              y: -5,
              opacity: 1,
            },
          }}
          initial={{ opacity: 0.9 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.1,
          }}
        >
          Complete enterprise solution with customizable AI training & analytics
        </motion.p>

        {/* Feature list */}
        <motion.ul className="mt-4 space-y-2 text-sm">
          {[].map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2"
              variants={{
                hover: { x: 5, opacity: 1 },
              }}
              initial={{ opacity: 0.8 }}
              transition={{
                duration: 0.4,
                ease: "easeOut",
                delay: i * 0.05,
              }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-purple-300"
                variants={{
                  hover: { scale: 1.5, backgroundColor: "#c4b5fd" },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: i * 0.05,
                }}
              />
              <span className="text-purple-200">{feature}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
      <motion.div
        className="absolute bottom-4 left-4 right-4 z-20"
        variants={{
          hover: {
            y: -5,
          },
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <button className="w-full rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-purple-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
          CONTACT SALES
        </button>
      </motion.div>
      <EnterpriseBackground />
    </motion.div>
  );
};

const EnterpriseBackground = () => {
  return (
    <motion.svg
      width="320"
      height="384"
      viewBox="0 0 320 384"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 z-0"
      variants={{
        hover: {
          scale: 1.5,
        },
      }}
      transition={{
        duration: 1,
        ease: "backInOut",
      }}
    >
      {/* Main triangular shape - top */}
      <motion.path
        d="M160 40 L260 160 L60 160 Z"
        fill="#4c1d95"
        variants={{
          hover: {
            scaleY: 0.6,
            y: -25,
            rotate: 10,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
      />

      {/* Bottom triangular shape */}
      <motion.path
        d="M160 320 L260 200 L60 200 Z"
        fill="#4c1d95"
        variants={{
          hover: {
            scaleY: 1.8,
            y: -15,
            rotate: -10,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
      />

      {/* Decorative rings that rotate */}
      <motion.g
        initial={{ opacity: 0.6 }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          rotate: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        }}
        variants={{
          hover: {
            opacity: 0.8,
          },
        }}
      >
        {/* Hexagonal decorative shapes */}
        <motion.path
          d="M160,70 L210,100 L210,160 L160,190 L110,160 L110,100 Z"
          fill="none"
          stroke="#9333ea"
          strokeWidth="1"
          strokeDasharray="5,5"
          variants={{
            hover: {
              scale: 1.2,
              rotate: 30,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        />
        <motion.path
          d="M160,90 L195,110 L195,150 L160,170 L125,150 L125,110 Z"
          fill="none"
          stroke="#a855f7"
          strokeWidth="1"
          strokeDasharray="3,3"
          variants={{
            hover: {
              scale: 0.8,
              rotate: -30,
            },
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        />
      </motion.g>

      {/* Animated floating triangles - swapping on hover */}
      <motion.path
        d="M160 80 L200 140 L120 140 Z"
        fill="#7e22ce"
        variants={{
          hover: {
            y: 120,
            rotate: 180,
            opacity: 0.7,
            scale: 1.2,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.1,
        }}
      />

      <motion.path
        d="M160 280 L200 220 L120 220 Z"
        fill="#9333ea"
        variants={{
          hover: {
            y: -120,
            rotate: -180,
            opacity: 0.7,
            scale: 1.2,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.1,
        }}
      />

      {/* Small decorative triangles */}
      <motion.path
        d="M80 150 L100 180 L60 180 Z"
        fill="#a855f7"
        variants={{
          hover: {
            scale: 2,
            x: -20,
            y: -20,
            opacity: 0.6,
            rotate: 45,
          },
        }}
        transition={{
          duration: 1.2,
          ease: "backInOut",
          delay: 0.2,
        }}
      />
      <motion.path
        d="M240 150 L260 180 L220 180 Z"
        fill="#a855f7"
        variants={{
          hover: {
            scale: 1.8,
            x: 20,
            y: 20,
            opacity: 0.6,
            rotate: -45,
          },
        }}
        transition={{
          duration: 1.2,
          ease: "backInOut",
          delay: 0.3,
        }}
      />

      {/* Animated particle effects - small triangles */}
      <motion.g>
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={i}
            d={`M${130 + i * 15} ${110 + i * 25} L${140 + i * 15} ${130 + i * 25} L${120 + i * 15} ${130 + i * 25} Z`}
            fill={i % 2 === 0 ? "#c4b5fd" : "#ddd6fe"}
            animate={{
              y: [0, -20 - i * 5, 0],
              opacity: [0, 0.7, 0],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, i % 2 === 0 ? 180 : -180, 0],
            }}
            transition={{
              duration: 3 + i,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
              delay: i * 0.5,
            }}
            variants={{
              hover: {
                y: -30 - i * 5,
              },
            }}
          />
        ))}
      </motion.g>
    </motion.svg>
  );
};

export default EnterpriseCard;