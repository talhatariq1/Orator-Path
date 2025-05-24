import { NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import mongoose from 'mongoose';
import { connect } from '../../../lib/mongodb/mongoose';

// Define the schema directly to avoid import issues
const audioAnalysisSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      index: true,
    },
    recommendations: {
      performance_assessment: {
        strengths: Array,
        detailed_strengths: Array,
        growth_areas: Array,
        priority_improvements: Array,
      },
    },
    analysisDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

// Add an index on clerkId and analysisDate for efficient querying
audioAnalysisSchema.index({ clerkId: 1, analysisDate: -1 });

// Use the schema to create or retrieve the model
const AudioAnalysis = mongoose.models.AudioAnalysis ||
  mongoose.model('AudioAnalysis', audioAnalysisSchema);

export async function GET() {
  try {
    // Get the current user from Clerk
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userId = user.id;

    // Connect to MongoDB
    await connect();

    // Get all audio analyses for the user, sorted by date (newest first)
    const analyses = await AudioAnalysis.find({ clerkId: userId }).sort({ analysisDate: -1 });

    // Calculate focus areas data
    const focusAreasData = calculateFocusAreas(analyses);

    return NextResponse.json(focusAreasData, { status: 200 });
  } catch (error) {
    console.error('Error fetching focus areas:', error);
    return NextResponse.json({ error: 'Failed to fetch focus areas data' }, { status: 500 });
  }
}

function calculateFocusAreas(analyses) {
  // Default data if no analyses are found
  if (!analyses || analyses.length === 0) {
    return {
      strengths: [],
      improvements: [],
      lastUpdated: "Never"
    };
  }

  // Get the most recent analysis
  const mostRecentAnalysis = analyses[0];

  // Format the date for display
  const lastUpdated = formatDate(new Date(mostRecentAnalysis.analysisDate));

  // Extract strengths from the most recent analysis
  const detailedStrengths = mostRecentAnalysis.recommendations?.performance_assessment?.detailed_strengths || [];
  const strengths = detailedStrengths.slice(0, 3).map(strength => ({
    id: generateId(strength.category, strength.strength),
    title: `${strength.category}: ${strength.strength}`,
    description: strength.description,
    enhancement: strength.enhancement || ""
  }));

  // Extract priority improvements from the most recent analysis
  const priorityImprovements = mostRecentAnalysis.recommendations?.performance_assessment?.priority_improvements || [];

  // Filter out any volume-related improvements
  const filteredImprovements = priorityImprovements.filter(improvement =>
    !improvement.category.toLowerCase().includes('volume') &&
    !improvement.issue.toLowerCase().includes('volume')
  );

  // If we don't have enough non-volume improvements, add some fallback improvements
  const fallbackImprovements = [
    {
      category: "Pacing",
      issue: "Consistent speaking rate",
      impact: "Maintaining a consistent pace helps your audience follow along more easily.",
      guidance: "Practice with a metronome app set to 120-150 BPM and try to align your speech rhythm with it."
    },
    {
      category: "Structure",
      issue: "Clear transitions",
      impact: "Well-defined transitions between topics help your audience follow your message.",
      guidance: "Use explicit transition phrases like 'Next, let's discuss...' or 'Moving on to...'"
    },
    {
      category: "Engagement",
      issue: "Audience connection",
      impact: "Direct engagement keeps your audience invested in your message.",
      guidance: "Incorporate rhetorical questions and occasional direct address to maintain audience attention."
    }
  ];

  // Combine filtered improvements with fallbacks if needed
  let combinedImprovements = [...filteredImprovements];
  let i = 0;
  while (combinedImprovements.length < 3 && i < fallbackImprovements.length) {
    combinedImprovements.push(fallbackImprovements[i]);
    i++;
  }

  // Map improvements to the desired format
  const improvements = combinedImprovements.slice(0, 3).map(improvement => ({
    id: generateId(improvement.category, improvement.issue || "improvement"),
    title: `${improvement.category}: ${improvement.issue}`,
    description: improvement.impact || "Focus on improving this area for better overall performance.",
    guidance: improvement.guidance || "Practice this skill regularly and seek feedback from others."
  }));

  return {
    strengths,
    improvements,
    lastUpdated
  };
}

// Helper function to generate a consistent ID for a strength or improvement
function generateId(category, title) {
  return `${category.toLowerCase().replace(/[^a-z0-9]/g, '-')}-${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
}

// Helper function to format dates in a user-friendly way
function formatDate(date) {
  const now = new Date();
  const diffTime = Math.abs(now - date);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return "Today";
  } else if (diffDays === 1) {
    return "Yesterday";
  } else if (diffDays < 7) {
    return `${diffDays} days ago`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} ${months === 1 ? 'month' : 'months'} ago`;
  } else {
    const years = Math.floor(diffDays / 365);
    return `${years} ${years === 1 ? 'year' : 'years'} ago`;
  }
}
