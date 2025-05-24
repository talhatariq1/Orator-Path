"use client";

import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import EnterpriseCard from "./EnterpriseCard";

const SquishyPricingCards = () => {
  return (
    <section id="pricing" className="px-4 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Choose Your Path to Oratory Excellence
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Select the plan that best fits your speaking journey. Upgrade or downgrade anytime as your needs evolve.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <ProCard />
          <TeamCard />
          <EnterpriseCard />
        </div>
      </div>
    </section>
  );
};

// First card - Pro (as provided in the example)
const ProCard = () => {
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-indigo-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Basic
        </span>
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
          $5/
          <br />
          Month
        </motion.span>
        <p>
          For individuals who want to improve their speaking skills with professional guidance.
        </p>
      </div>
      <button className="absolute bottom-4 left-4 right-4 z-20 rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-neutral-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
        GET IT NOW
      </button>
      <ProBackground />
    </motion.div>
  );
};

const ProBackground = () => {
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
      <motion.circle
        variants={{
          hover: {
            scaleY: 0.5,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="114.5"
        r="101.5"
        fill="#262626"
      />
      <motion.ellipse
        variants={{
          hover: {
            scaleY: 2.25,
            y: -25,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="160.5"
        cy="265.5"
        rx="101.5"
        ry="43.5"
        fill="#262626"
      />
    </motion.svg>
  );
};

// Second card - Team (with a different design)
const TeamCard = () => {
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
      className="relative h-96 w-80 shrink-0 overflow-hidden rounded-xl bg-emerald-500 p-8"
    >
      <div className="relative z-10 text-white">
        <span className="mb-3 block w-fit rounded-full bg-white/30 px-3 py-0.5 text-sm font-light text-white">
          Team
        </span>
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
          $20/
          <br />
          Month
        </motion.span>
        <motion.p
          initial={{ opacity: 0.8 }}
          variants={{
            hover: {
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
            delay: 0.2,
          }}
        >
          For teams looking to enhance their communication skills and presentation abilities.
        </motion.p>
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
        <button className="w-full rounded border-2 border-white bg-white py-2 text-center font-mono font-black uppercase text-emerald-800 backdrop-blur transition-colors hover:bg-white/30 hover:text-white">
          GET IT NOW
        </button>
      </motion.div>
      <TeamBackground />
    </motion.div>
  );
};

const TeamBackground = () => {
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
      {/* Top square */}
      <motion.rect
        variants={{
          hover: {
            y: 160,
            rotate: 180,
            opacity: 0.8,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.1,
        }}
        x="110"
        y="40"
        width="100"
        height="100"
        rx="8"
        fill="#065f46"
      />

      {/* Bottom square */}
      <motion.rect
        variants={{
          hover: {
            y: -160,
            rotate: -180,
            opacity: 0.8,
          },
        }}
        transition={{
          duration: 1,
          ease: "backInOut",
          delay: 0.1,
        }}
        x="110"
        y="200"
        width="100"
        height="100"
        rx="8"
        fill="#047857"
      />

      {/* Small decorative circles */}
      <motion.circle
        variants={{
          hover: {
            scale: 2,
            x: -30,
            y: -20,
            opacity: 0.6,
          },
        }}
        transition={{
          duration: 1.2,
          ease: "backInOut",
          delay: 0.2,
        }}
        cx="80"
        cy="150"
        r="20"
        fill="#10b981"
      />
      <motion.circle
        variants={{
          hover: {
            scale: 1.8,
            x: 30,
            y: 20,
            opacity: 0.6,
          },
        }}
        transition={{
          duration: 1.2,
          ease: "backInOut",
          delay: 0.3,
        }}
        cx="240"
        cy="150"
        r="15"
        fill="#10b981"
      />
    </motion.svg>
  );
};

// Third card - Enterprise (imported from separate component)
// The implementation is now in EnterpriseCard.jsx

export default SquishyPricingCards;
