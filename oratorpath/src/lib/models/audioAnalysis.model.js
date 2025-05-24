// Path: oratorpath/src/lib/models/audioAnalysis.model.js
import mongoose from 'mongoose';

const audioAnalysisSchema = new mongoose.Schema(
  {
    // Store the Clerk ID to link to the User model/collection
    // You might already have a User model that stores clerkId as a unique identifier.
    // If your User model's main identifier is clerkId, you can store that directly.
    // If User model uses MongoDB's _id and you want a direct reference:
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: 'User', // Assuming your user model is named 'User'
    //   required: true,
    // },
    // For simplicity with Clerk, storing clerkId directly is often easier.
    clerkId: {
      type: String,
      required: true,
      index: true, // Add an index for faster queries by clerkId
    },
    fileName: {
      type: String,
      required: false, // Optional: name of the uploaded audio file
    },
    transcription: {
      type: String,
      required: false, // It might fail or be empty
    },
    transcriptAnalysis: {
      raw_transcription: String,
      contextual_issues: Array,
      coherence_score: Number,
    },
    voiceAnalysis: {
      duration: Number,
      pitch: {
        average: Number,
        min: Number,
        max: Number,
        variability: Number,
      },
      volume: {
        average: Number,
        variability: Number,
      },
      speaking_rate: Number,
      tempo: Number,
      pauses: {
        count: Number,
        average_duration: Number,
      },
      voice_quality: {
        spectral_contrast: Number,
        spectral_centroid: Number,
        spectral_bandwidth: Number,
      },
      gender_estimation: {
        likely_gender: String,
        confidence: Number,
      },
      error: String, // To store any errors during voice analysis
    },
    textAnalysis: {
      text_statistics: {
        word_count: Number,
        sentence_count: Number,
        average_words_per_sentence: Number,
        vocabulary_richness: Number,
      },
      filler_words: {
        total_count: Number,
        percentage: Number,
        occurrences: mongoose.Schema.Types.Mixed, // Can be an object
      },
      transition_words: {
        total_count: Number,
        percentage: Number,
        occurrences: mongoose.Schema.Types.Mixed,
      },
      sentiment_analysis: {
        polarity: Number,
        subjectivity: Number,
        label: String,
      },
      emotion_analysis: {
        primary_emotion: String,
        secondary_emotion: String,
        emotion_summary: String,
        emotion_distribution: mongoose.Schema.Types.Mixed,
        emotion_counts: mongoose.Schema.Types.Mixed,
      },
      content_analysis: {
        most_common_words: Array,
        noun_verb_ratio: Number,
        repetitions: Array,
        hesitation_patterns: Number,
      },
      readability: {
        flesch_reading_ease: Number,
        reading_level: String,
      },
      named_entities: mongoose.Schema.Types.Mixed,
      error: String, // To store any errors during text analysis
    },
    recommendations: {
      recommendations: Array, // List of recommendation objects
      performance_assessment: {
        overall_score: Number,
        performance_level: String,
        performance_description: String,
        strengths: Array,
        detailed_strengths: Array,
        growth_areas: Array,
        score_breakdown: mongoose.Schema.Types.Mixed,
        priority_improvements: Array,
      },
      development_plan: {
        next_steps: Array,
        development_pathway: Array,
        tracking_template: mongoose.Schema.Types.Mixed,
      },
    },
    analysisDate: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

// Add an index on clerkId and analysisDate for efficient querying of user's history
audioAnalysisSchema.index({ clerkId: 1, analysisDate: -1 });

const AudioAnalysis =
  mongoose.models.AudioAnalysis || mongoose.model('AudioAnalysis', audioAnalysisSchema);

export default AudioAnalysis;

