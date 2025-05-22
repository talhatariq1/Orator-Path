"use client";

import React from "react";
import { InfiniteMovingCards } from "./InfiniteMovingCards";
import "../styles/testimonials/modern-cards.css";

// Import placeholder images from a reliable source
const placeholderImages = [
  "https://randomuser.me/api/portraits/women/1.jpg",
  "https://randomuser.me/api/portraits/men/1.jpg",
  "https://randomuser.me/api/portraits/women/2.jpg",
  "https://randomuser.me/api/portraits/men/2.jpg",
  "https://randomuser.me/api/portraits/women/3.jpg",
  "https://randomuser.me/api/portraits/men/3.jpg",
  "https://randomuser.me/api/portraits/women/4.jpg",
  "https://randomuser.me/api/portraits/men/4.jpg",
  "https://randomuser.me/api/portraits/women/5.jpg",
  "https://randomuser.me/api/portraits/men/5.jpg",
  "https://randomuser.me/api/portraits/women/6.jpg",
  "https://randomuser.me/api/portraits/men/6.jpg",
];

// Enhance the testimonials data with more detailed information
const testimonialItems = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Public Speaker",
    content: "OratorPath has transformed my speaking abilities. The real-time feedback and analytics helped me identify my weaknesses and work on them methodically.",
    image: placeholderImages[0],
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "University Professor",
    content: "The personalized coaching feature in OratorPath has been invaluable for preparing my lectures. My student engagement has improved drastically.",
    image: placeholderImages[1],
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "Corporate Trainer",
    content: "As someone who trains others professionally, I can confidently say that OratorPath is a game-changer for anyone looking to improve their speaking skills.",
    image: placeholderImages[2],
  },
  {
    id: "4",
    name: "Robert Wilson",
    role: "Sales Executive",
    content: "My sales pitches have become so much more effective since I started using OratorPath. The confidence I've gained is reflected in my results.",
    image: placeholderImages[3],
  },
  {
    id: "5",
    name: "Elena Rodriguez",
    role: "TED Speaker",
    content: "OratorPath helped me prepare for my TED talk with precision and confidence. The analytics pointed out pacing issues I wasn't even aware of.",
    image: placeholderImages[4],
  },
  {
    id: "6",
    name: "David Kim",
    role: "Graduate Student",
    content: "Defending my thesis was nerve-wracking, but OratorPath's practice sessions prepared me thoroughly. The committee was impressed with my delivery.",
    image: placeholderImages[5],
  },
  {
    id: "7",
    name: "Olivia Thompson",
    role: "Podcast Host",
    content: "As a podcast host, clear communication is everything. OratorPath has helped me refine my voice and delivery for better audience engagement.",
    image: placeholderImages[6],
  },
  {
    id: "8",
    name: "James Parker",
    role: "Community Leader",
    content: "Leading community meetings requires clear and confident communication. OratorPath has helped me become the effective leader my community needs.",
    image: placeholderImages[7],
  },
  {
    id: "9",
    name: "Natasha Ivanova",
    role: "Language Teacher",
    content: "Teaching pronunciation has become easier as I've improved my own speaking clarity with OratorPath. Highly recommend for language educators.",
    image: placeholderImages[8],
  },
  {
    id: "10",
    name: "Carlos Mendez",
    role: "Debate Champion",
    content: "The real-time feedback during practice sessions helped me master timing and emphasis, which are crucial in competitive debate scenarios.",
    image: placeholderImages[9],
  },
  {
    id: "11",
    name: "Sophia Lee",
    role: "Marketing Director",
    content: "Presenting marketing strategies to clients is now my strength rather than my weakness. OratorPath transformed how I communicate value propositions.",
    image: placeholderImages[10],
  },
  {
    id: "12",
    name: "Jamal Washington",
    role: "Motivational Speaker",
    content: "The analytics and improvement tracking have been instrumental in refining my impact as a motivational speaker. I can see my growth in real data.",
    image: placeholderImages[11],
  },
];

// Create two rows of testimonials with different directions and speeds
const rowOne = testimonialItems.slice(0, 6);
const rowTwo = testimonialItems.slice(6, 12);

export default function HorizontalTestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 overflow-hidden bg-black/30 flex justify-center items-center">
      {/* Modernized background elements */}
      <div className="absolute inset-0 -z-10">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Grid pattern */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(to_right,#0a0a0a_1px,transparent_1px),linear-gradient(to_bottom,#0a0a0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

          {/* Ambient glow spots */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]"></div>

          {/* Dynamic accent lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-500/20 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Enhanced section header */}
        <div className="text-center mb-16 relative">
          {/* Light beam accent */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl light-beam opacity-50"></div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 relative">
            <span className="gradient-text inline-block transform transition-all">Hear from our customers</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto relative">
            Discover how OratorPath has helped speakers of all levels transform their communication skills and boost their confidence.
          </p>
        </div>

        {/* Testimonials rows */}
        <div className="flex flex-col gap-8">
          {/* First row - left to right */}
          <InfiniteMovingCards
            items={rowOne}
            direction="right"
            speed="slow"
            className="py-4"
          />

          {/* Second row - right to left */}
          <InfiniteMovingCards
            items={rowTwo}
            direction="left"
            speed="slow"
            className="py-4"
          />
        </div>
      </div>
    </section>
  );
}
