"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import WaveDecoration from "./WaveDecoration";

// Pricing data with monthly and yearly options
const pricingData = {
  monthly: [
    {
      id: "individual",
      name: "Individual",
      description: "For individuals who want to improve their speaking skills",
      price: 29.99,
      features: [
        "5 speech analyses per month",
        "Basic feedback metrics",
        "Text transcription",
        "Practice prompts library",
      ],
      cta: "Sign up",
      popular: false,
    },
    {
      id: "company",
      name: "Company",
      description: "For mid-sized companies who are serious about boosting team communication",
      price: 20,
      features: [
        "20 speech analyses per month",
        "Advanced metrics and insights",
        "Personalized improvement tips",
        "Progress tracking dashboard",
        "Priority feedback",
        "Speech comparison tools",
      ],
      cta: "Sign up",
      popular: true,
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large enterprises looking to outsource their public speaking training",
      price: 499.99,
      cta: "Book a call",
      popular: false,
    },
  ],
  yearly: [
    {
      id: "individual",
      name: "Individual",
      description: "For individuals who want to improve their speaking skills",
      price: 299.99,
      features: [
        "5 speech analyses per month",
        "Basic feedback metrics",
        "Text transcription",
        "Practice prompts library",
      ],
      cta: "Sign up",
      popular: false,
      savings: "Save $59.89",
    },
    {
      id: "company",
      name: "Company",
      description: "For mid-sized companies who are serious about boosting team communication",
      price: 20,
      features: [
        "20 speech analyses per month",
        "Advanced metrics and insights",
        "Personalized improvement tips",
        "Progress tracking dashboard",
        "Priority feedback",
        "Speech comparison tools",
      ],
      cta: "Sign up",
      popular: true,
      savings: "Save $199.89",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For large enterprises looking to outsource their public speaking training",
      price: 5,
      cta: "Book a call",
      popular: false,
      savings: "Save $999.89",
    },
  ],
};

// Billing toggle component
const BillingToggle = ({ billingCycle, setBillingCycle }) => {
  return (
    <div className="flex items-center justify-center space-x-4 mb-12">
      <span
        className={`text-lg transition-colors duration-200 ${
          billingCycle === "monthly" ? "text-white font-medium" : "text-gray-400"
        }`}
      >
        Monthly
      </span>

      <div
        className="relative w-16 h-8 bg-gray-700/50 rounded-full p-1 cursor-pointer backdrop-blur-sm border border-gray-700/30"
        onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
      >
        <motion.div
          className="absolute w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg"
          animate={{ x: billingCycle === "monthly" ? 0 : 32 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      </div>

      <div className="flex flex-col items-start">
        <span
          className={`text-lg transition-colors duration-200 ${
            billingCycle === "yearly" ? "text-white font-medium" : "text-gray-400"
          }`}
        >
          Yearly
        </span>
        {billingCycle === "yearly" && (
          <span className="text-xs text-emerald-400 font-medium">Save up to 17%</span>
        )}
      </div>
    </div>
  );
};

// Price card component
const PriceCard = ({ plan, billingCycle }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.33, 1, 0.68, 1] // cubic-bezier curve for "squishiness"
      }
    },
    tap: {
      scale: 0.97,
      transition: {
        duration: 0.15,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      whileTap="tap"
      className="squishy-card group relative flex flex-col h-full rounded-xl overflow-hidden bg-white/[0.01] border border-white/[0.05] p-8"
    >
      <div className="flex flex-col h-full">
        <div className="flex flex-col mb-6">
          <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
          <div className="flex items-baseline mb-1">
            <span className="text-3xl font-bold text-white">${plan.price}</span>
            <span className="text-gray-400 ml-2 text-sm">/{billingCycle === "monthly" ? "Month" : "Year"}</span>
          </div>
          <p className="text-gray-400 text-sm">{plan.description}</p>
        </div>

        <div className="mt-auto">
          <button
            className="squishy-button w-full py-2 px-4 rounded-md bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium transition-colors duration-200"
          >
            {plan.cta}
          </button>
        </div>
      </div>

      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

      {/* Subtle border glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/[0.08] to-transparent rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </motion.div>
  );
};

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState("monthly");

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
  };

  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(76,109,255,0.15),transparent_50%)]"></div>
      <WaveDecoration position="top-left" size="large" color="rgba(76, 109, 255, 0.03)" />
      <WaveDecoration position="bottom-right" size="large" color="rgba(138, 58, 234, 0.03)" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
            variants={textVariants}
          >
            Choose Your Path to Oratory Excellence
          </motion.h2>

          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            variants={textVariants}
          >
            Select the plan that best fits your speaking journey. Upgrade or downgrade anytime as your needs evolve.
          </motion.p>

          <motion.div variants={textVariants}>
            <BillingToggle billingCycle={billingCycle} setBillingCycle={setBillingCycle} />
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingData[billingCycle].map((plan) => (
            <PriceCard key={plan.id} plan={plan} billingCycle={billingCycle} />
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-gray-400 mb-2">Need a custom solution for your organization?</p>
          <h3 className="text-2xl font-bold mb-6">Contact our sales team for a tailored package</h3>
          <button className="squishy-button py-3 px-6 rounded-md bg-white/[0.08] hover:bg-white/[0.12] text-white font-medium transition-colors duration-200">
            Contact Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
