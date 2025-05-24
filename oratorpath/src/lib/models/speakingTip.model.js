import mongoose from 'mongoose';

const speakingTipSchema = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    dayOfWeek: {
      type: Number,
      required: true,
      min: 0,
      max: 6,
      unique: true, // Ensure only one tip per day of week
      index: true, // Index for faster queries by day of week
    },
    dayName: {
      type: String,
      required: true,
      enum: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true } // Adds createdAt and updatedAt timestamps automatically
);

// Create or retrieve the model
const SpeakingTip = mongoose.models.SpeakingTip || mongoose.model('SpeakingTip', speakingTipSchema);

export default SpeakingTip;
