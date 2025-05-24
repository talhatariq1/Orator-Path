"use client";
import React from "react";
import HeroSection from "./components/HeroSection";
import AnimatedFeaturesSection from "./components/AnimatedFeaturesSection";
import SpeechPracticePlayground from "./components/SpeechPracticePlayground";
import HorizontalTestimonialsSection from "./components/HorizontalTestimonialsSection";
import SquishyPricingCards from "./components/SquishyPricingCards";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black/30">
      {/* UI Elements */}
      <HeroSection />

      {/* Animated Features Section with scroll animations */}
      <AnimatedFeaturesSection />

      {/* Interactive Speech Practice Playground */}
      <SpeechPracticePlayground />

      {/* Testimonials Section with horizontal scrolling */}
      <HorizontalTestimonialsSection />

      {/* Squishy Pricing Cards */}
      <SquishyPricingCards />

    </div>
  );
}
