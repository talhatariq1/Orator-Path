"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardPageWrapper from "../../components/dashboard/DashboardPageWrapper";
import WidgetCard from "../../components/dashboard/ui/WidgetCard";
import { WavyBackground } from "../../../components/ui/wavy-background.js";
// import { widgetThemes } from "../../utils/colorPalette"; // widgetThemes not used
import { useUser } from "@clerk/nextjs";

// Utility functions
const formatNumber = (num) => {
  if (num === null || num === undefined || isNaN(parseFloat(num))) {
    return "0.00";
  }
  return Number(num).toFixed(2);
};

const safeGet = (obj, path, defaultValue = null) => {
  const keys = path.split('.');
  let result = obj;

  for (const key of keys) {
    if (result === null || result === undefined || typeof result !== 'object') {
      return defaultValue;
    }
    result = result[key];
  }

  return result !== undefined ? result : defaultValue;
};

export default function VideoAnalysis() {
  // State management
  const [videoFile, setVideoFile] = useState(null);
  const [videoPreview, setVideoPreview] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [facialResults, setFacialResults] = useState(null);
  const [audioResults, setAudioResults] = useState(null); // This will hold the full response from /api/transcribe
  const [emotionComparison, setEmotionComparison] = useState(null);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("combined");
  const [analysisStarted, setAnalysisStarted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { user, isLoaded: isUserLoaded } = useUser();

  const audioRef = useRef(null); // This ref holds the extracted audio Blob
  const fileInputRef = useRef(null);

  // Handle video file selection
  const handleVideoChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Reset states
    setVideoFile(file);
    setFacialResults(null);
    setAudioResults(null);
    setEmotionComparison(null);
    setError("");
    setAnalysisStarted(false); // Reset analysis started flag
    setActiveTab("combined"); // Reset to combined tab

    // Create preview URL for the video
    const videoUrl = URL.createObjectURL(file);
    setVideoPreview(videoUrl);

    // Simulate upload progress
    simulateUploadProgress();
  };

  // Simulate file upload progress
  const simulateUploadProgress = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 50);
  };

  // Enhanced file change handler
  const handleEnhancedVideoChange = (e) => {
    handleVideoChange(e);
    // simulateUploadProgress(); // Already called in handleVideoChange
  };

  // Trigger file input click
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  // Handle drag events
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length && files[0].type.startsWith('video/')) {
      handleVideoChange({ target: { files } });
    }
  };

// Process the video - separating audio and sending to respective backends
const processVideo = async () => {
  if (!videoFile) {
    setError("Please select a video file first");
    return;
  }

  setIsProcessing(true);
  setError("");
  setAnalysisStarted(true); // Indicate that analysis has begun
  setFacialResults(null); // Clear previous results
  setAudioResults(null);
  setEmotionComparison(null);


  try {
    // Extract audio from video
    await extractAudioFromVideo(videoFile);

    // Process video and audio in parallel
    await Promise.all([
      sendVideoForFacialAnalysis(),
      sendAudioForAnalysis() // This will set audioResults
    ]);
  } catch (err) {
    setError(`Failed to process: ${err.message}`);
    console.error("Processing error in processVideo:", err);
  } finally {
    setIsProcessing(false);
  }
};

// Generate emotion comparison when both results are available
useEffect(() => {
  if (facialResults && audioResults && !isProcessing) { // Ensure processing is finished
    try {
      generateEmotionComparison();
    } catch (err) {
      setError("Error generating emotion comparison: " + err.message);
      console.error("Error in generateEmotionComparison useEffect:", err);
    }
  }
}, [facialResults, audioResults, isProcessing]); // Added isProcessing to dependencies

// Extract audio from video
const extractAudioFromVideo = async (videoFile) => {
  return new Promise((resolve, reject) => {
    const video = document.createElement('video');
    video.src = URL.createObjectURL(videoFile);
    video.crossOrigin = 'anonymous';

    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const dest = audioCtx.createMediaStreamDestination();

    video.onloadedmetadata = () => {
      const sourceNode = audioCtx.createMediaElementSource(video);
      sourceNode.connect(dest);
      // Optional: Connect to actual speakers to hear it, or remove for silent extraction
      // sourceNode.connect(audioCtx.destination);

      const recorder = new MediaRecorder(dest.stream, { mimeType: 'audio/webm;codecs=opus' }); // Recommended for quality and compatibility
      const audioChunks = [];

      recorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunks.push(e.data);
      };

      recorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: recorder.mimeType });
        audioRef.current = audioBlob; // Store the Blob
        // Clean up
        sourceNode.disconnect();
        dest.stream.getTracks().forEach(track => track.stop());
        await audioCtx.close();
        resolve(audioBlob);
      };

      recorder.onerror = (e) => {
         console.error("MediaRecorder error:", e);
         reject(new Error("MediaRecorder failed: " + e.error?.message || "Unknown error"));
      };

      video.play().catch(e => {
         console.error("Video play error during extraction:", e);
         reject(new Error("Failed to play video for audio extraction"));
      });
      recorder.start();

      video.onended = () => {
        if (recorder.state === "recording") recorder.stop();
        video.pause();
      };

      const maxDuration = video.duration * 1000 + 2000; // Add 2s buffer
      setTimeout(() => {
        if (recorder.state === "recording") {
          recorder.stop();
          video.pause();
        }
      }, maxDuration > 0 && isFinite(maxDuration) ? maxDuration : 300000); // Cap at 5 mins if duration is weird
    };

    video.onerror = (e) => {
        console.error("Video load error for audio extraction:", e, video.error);
        reject(new Error("Failed to load video for audio extraction: " + (video.error?.message || "Unknown video error")));
    };
  });
};

// Send video for facial emotion analysis
const sendVideoForFacialAnalysis = async () => {
  const formData = new FormData();
  formData.append("video", videoFile);

  try {
    const response = await fetch("/api/video-emotion", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({error: "Server error with no JSON response"}));
      throw new Error(errorData.error || "Failed to analyze facial emotions");
    }

    const result = await response.json();
    setFacialResults(result);
  } catch (err) {
    console.error("Facial analysis error:", err);
    setFacialResults({ error: "Facial emotion analysis failed: " + err.message }); // Set error state for facial results
    throw new Error("Facial emotion analysis failed: " + err.message);
  }
};

const sendAudioForAnalysis = async () => {
  if (!audioRef.current) {
    throw new Error("Audio extraction failed or audio data is not available.");
  }
  if (!isUserLoaded) {
    throw new Error("User data is not yet loaded. Please wait and try again.");
  }
  if (!user || !user.id) {
    throw new Error("User not authenticated. Cannot send audio for analysis.");
  }

  const formData = new FormData();
  const audioFileForForm = new File(
    [audioRef.current],
    (videoFile?.name.replace(/\.[^/.]+$/, "") || "extracted_audio") + (audioRef.current.type.includes('webm') ? ".webm" : ".wav"), // Use correct extension
    { type: audioRef.current.type } // Use the actual Blob MIME type
  );

  formData.append("audio", audioFileForForm);
  formData.append("userId", user.id);

  console.log("Frontend (sendAudioForAnalysis): Sending extracted audio with userId:", user.id, "and filename:", audioFileForForm.name, "type:", audioFileForForm.type);

  try {
    const response = await fetch("/api/transcribe", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ error: `Audio analysis server responded with status ${response.status}`}));
      console.error("Error from /api/transcribe in sendAudioForAnalysis:", errorData);
      setAudioResults({ error: errorData.error || "Failed to analyze extracted audio" }); // Set error state for audio results
      throw new Error(errorData.error || "Failed to analyze extracted audio");
    }

    const result = await response.json();
    console.log("Frontend (sendAudioForAnalysis): Audio analysis result received:", result);
    setAudioResults(result); // This 'result' is the full object from server.py
  } catch (err) {
    console.error("Frontend (sendAudioForAnalysis): Catch block error:", err);
    setAudioResults({ error: "Audio analysis failed: " + err.message }); // Set error state for audio results
    const errorMessage = err.message || String(err);
    throw new Error("Audio analysis failed: " + errorMessage);
  }
};

// Get the emotion color for visual display
const getEmotionColor = (emotion) => {
  const colorMap = {
    joy: 'bg-yellow-500',
    happy: 'bg-yellow-500',
    happiness: 'bg-yellow-500',
    sadness: 'bg-blue-500',
    sad: 'bg-blue-500',
    anger: 'bg-red-600',
    angry: 'bg-red-600',
    fear: 'bg-purple-600',
    surprise: 'bg-green-500',
    surprised: 'bg-green-500',
    disgust: 'bg-orange-500',
    trust: 'bg-blue-400',
    anticipation: 'bg-teal-500',
    neutral: 'bg-gray-500'
  };
  const normalizedEmotion = emotion?.toLowerCase();
  return colorMap[normalizedEmotion] || 'bg-gray-400';
};

const generateEmotionComparison = () => {
  if (!facialResults || !audioResults || facialResults.error || audioResults.error) { // Check for errors in results
      console.warn("Cannot generate emotion comparison due to missing or error in facial/audio results.");
      return;
  }

  // Get primary emotions
  const facialEmotion = safeGet(facialResults, 'emotion_summary.dominant_emotion', 'neutral').toLowerCase();
  // MODIFIED PATH: audioResults.textAnalysis instead of audioResults.text_analysis
  const audioEmotion = safeGet(audioResults, 'textAnalysis.emotion_analysis.primary_emotion', 'neutral').toLowerCase();


  const emotionsMatch = facialEmotion === audioEmotion ||
                       (facialEmotion === 'happy' && audioEmotion === 'joy') ||
                       (facialEmotion === 'joy' && audioEmotion === 'happy');

  const facialEmotions = safeGet(facialResults, 'emotion_summary.emotion_percentages', {});
  // MODIFIED PATH: audioResults.textAnalysis instead of audioResults.text_analysis
  const audioEmotionsFromText = safeGet(audioResults, 'textAnalysis.emotion_analysis.emotion_distribution', {});


  const normalizeEmotions = (emotions) => {
    const normalized = {};
    if (typeof emotions !== 'object' || emotions === null) return normalized; // Add null check
    Object.entries(emotions).forEach(([emotion, value]) => {
      const key = emotion.toLowerCase() === 'happy' ? 'joy' : emotion.toLowerCase();
      normalized[key] = (normalized[key] || 0) + value;
    });
    return normalized;
  };

  const normalizedFacialEmotions = normalizeEmotions(facialEmotions);
  const normalizedTextEmotions = normalizeEmotions(audioEmotionsFromText);

  const allEmotions = new Set([
    ...Object.keys(normalizedFacialEmotions),
    ...Object.keys(normalizedTextEmotions)
  ]);

  let totalOverlap = 0;
  allEmotions.forEach(emotion => {
    const facialValue = normalizedFacialEmotions[emotion] || 0;
    const audioValue = normalizedTextEmotions[emotion] || 0;
    totalOverlap += Math.min(facialValue, audioValue);
  });

  const congruenceScore = Math.min(Math.round(totalOverlap), 100);
  const recommendations = [];

  if (congruenceScore < 40) {
    recommendations.push({
      title: "Low Emotional Congruence",
      description: "Your facial expressions don't match your vocal tone and speech content.",
      suggestions: [
        "Practice aligning your facial expressions with your message",
        "Record yourself and observe when your face doesn't match your words",
        "Consider working with a coach on emotional authenticity"
      ]
    });
    if (facialEmotion === 'neutral' && audioEmotion !== 'neutral') {
      recommendations.push({
        title: "Flat Facial Expression",
        description: `Your voice conveys ${audioEmotion} but your face appears neutral.`,
        suggestions: ["Practice expressing emotion with your face while speaking", "Use a mirror to enhance facial expressiveness"]
      });
    } else if (audioEmotion === 'neutral' && facialEmotion !== 'neutral') {
      recommendations.push({
        title: "Monotone Voice",
        description: `Your face shows ${facialEmotion} but your voice sounds flat.`,
        suggestions: ["Practice vocal variety exercises", "Exaggerate vocal tone during practice sessions"]
      });
    } else if ((facialEmotion === 'happy' || facialEmotion === 'joy') && (audioEmotion === 'sad' || audioEmotion === 'anger')) {
      recommendations.push({
        title: "Conflicting Emotions",
        description: "Your face shows happiness while your voice conveys negative emotion.",
        suggestions: ["This disconnect may confuse your audience", "Work on authentic emotional alignment"]
      });
    }
  } else if (congruenceScore < 70) {
    recommendations.push({
      title: "Moderate Emotional Congruence",
      description: "Your facial expressions somewhat match your voice, but could be more aligned.",
      suggestions: ["Focus on moments of highest emotional intensity", "Practice with feedback from trusted observers"]
    });
  } else {
    recommendations.push({
      title: "Strong Emotional Congruence",
      description: "Your facial expressions effectively match your vocal emotions.",
      suggestions: ["Continue practicing to maintain this strength", "Consider adding more dynamic range to both face and voice"]
    });
  }

  setEmotionComparison({
    facialEmotion,
    audioEmotion,
    emotionsMatch,
    congruenceScore,
    recommendations
  });
};

// Render emotion comparison
const renderEmotionComparison = () => {
  if (!emotionComparison) {
    return (
      <WidgetCard title="Emotion Congruence Analysis">
        <div className="p-6 text-center">
          <p className="text-gray-400">Waiting for emotion comparison results...</p>
          {(facialResults?.error || audioResults?.error) && (
            <p className="text-red-400 mt-2">
              Note: Full comparison may be unavailable due to errors in {facialResults?.error ? "facial" : ""}{facialResults?.error && audioResults?.error ? " and " : ""}{audioResults?.error ? "audio" : ""} analysis.
            </p>
          )}
        </div>
      </WidgetCard>
    );
  }

  const getCongruenceColor = (score) => {
    return score >= 70 ? 'bg-green-500' :
           score >= 40 ? 'bg-yellow-500' : 'bg-red-500';
  };

  return (
    <WidgetCard title="Emotion Congruence Analysis">
      <div className="p-4">
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-300 mb-4">Emotion Comparison</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className="flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full ${getEmotionColor(emotionComparison.facialEmotion)} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold capitalize">Face</span>
              </div>
              <span className="mt-2 capitalize text-lg font-medium text-gray-300">{emotionComparison.facialEmotion}</span>
            </motion.div>
            <div className="flex flex-col items-center">
              <div className="hidden md:block w-32 h-2 bg-gray-700 rounded-full relative">
                <motion.div initial={{ width: 0 }} animate={{ width: `${emotionComparison.congruenceScore}%` }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className={`absolute top-0 h-2 rounded-full ${getCongruenceColor(emotionComparison.congruenceScore)}`}></motion.div>
              </div>
              <div className="md:hidden w-2 h-20 bg-gray-700 rounded-full my-2 relative">
                <motion.div initial={{ height: 0 }} animate={{ height: `${emotionComparison.congruenceScore}%` }} transition={{ duration: 1, ease: "easeOut", delay: 0.3 }} className={`absolute bottom-0 w-2 rounded-full ${getCongruenceColor(emotionComparison.congruenceScore)}`}></motion.div>
              </div>
              <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="font-bold text-sm mt-2 text-gray-300">{emotionComparison.congruenceScore}% Match</motion.span>
            </div>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col items-center">
              <div className={`w-24 h-24 rounded-full ${getEmotionColor(emotionComparison.audioEmotion)} flex items-center justify-center shadow-lg`}>
                <span className="text-white font-bold capitalize">Voice</span>
              </div>
              <span className="mt-2 capitalize text-lg font-medium text-gray-300">{emotionComparison.audioEmotion}</span>
            </motion.div>
          </div>
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5, delay: 0.5 }} className={`text-center p-3 rounded-lg ${emotionComparison.emotionsMatch ? 'bg-green-900/30 text-green-400 border border-green-500/30' : 'bg-yellow-900/30 text-yellow-400 border border-yellow-500/30'}`}>
            {emotionComparison.emotionsMatch ? "✓ Your facial expressions match your voice emotions" : "⚠ There's a mismatch between your facial expressions and voice"}
          </motion.div>
        </div>
        {emotionComparison.recommendations?.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-medium text-gray-300 mb-4">Recommendations</h3>
            <div className="space-y-4">
              {emotionComparison.recommendations.map((rec, index) => (
                <motion.div key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
                  <h4 className="font-medium text-purple-400 mb-2">{rec.title}</h4>
                  <p className="text-gray-300 mb-3">{rec.description}</p>
                  {rec.suggestions && (<ul className="list-disc list-inside text-gray-400 space-y-1">{rec.suggestions.map((suggestion, i) => (<li key={i}>{suggestion}</li>))}</ul>)}
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </WidgetCard>
  );
};

// Render the transcript tab
const renderTranscript = () => {
  // MODIFIED: Check for audioResults and specific keys, and internal errors.
  if (!audioResults || (!audioResults.transcription && !audioResults.transcriptAnalysis)) {
    return (
      <WidgetCard title="Transcript">
        <div className="p-6 text-center">
          <p className="text-gray-400">No transcript available yet. Please analyze a video first.</p>
        </div>
      </WidgetCard>
    );
  }
  const transcriptError = safeGet(audioResults, 'transcriptAnalysis.error');
  if (transcriptError) {
    return (
      <WidgetCard title="Transcript Error">
        <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-700/50">
          <p className="text-red-300 font-medium">Transcript processing encountered an error: {transcriptError}</p>
        </div>
      </WidgetCard>
    );
  }
  if (!audioResults.transcription && (!audioResults.transcriptAnalysis || !safeGet(audioResults.transcriptAnalysis, 'raw_transcription'))) {
      return (
        <WidgetCard title="Transcript">
          <div className="p-6 text-center">
            <p className="text-gray-400">No transcription text found in the analysis.</p>
          </div>
        </WidgetCard>
      );
  }

  // Main transcript text comes from audioResults.transcription
  // Coherence score and raw_transcription from audioResults.transcriptAnalysis
  const transcriptText = audioResults.transcription || "No processed transcript available.";
  const transcriptAnalysisData = audioResults.transcriptAnalysis;

  return (
    <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}></motion.div>
        <motion.div className="relative z-10 mb-4" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Speech Transcript</h2>
        </motion.div>
        <motion.div className="relative z-10 mt-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar bg-gray-900/30 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-gray-300 leading-relaxed whitespace-pre-line font-light tracking-wide">{transcriptText}</p>
        </motion.div>
        {transcriptAnalysisData && ( // Check if transcriptAnalysisData itself exists
          <motion.div className="mt-6 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
            <div className="mb-6 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40">
              <div className="flex items-center justify-between mb-3">
                <motion.h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 flex items-center" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                  <span className="bg-blue-500/20 p-1.5 rounded-md mr-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>Coherence Score
                </motion.h3>
                <motion.span className="text-blue-300 font-medium" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
                  {formatNumber(safeGet(transcriptAnalysisData, 'coherence_score', 0))}%
                </motion.span>
              </div>
              <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full" initial={{ width: 0 }} animate={{ width: `${safeGet(transcriptAnalysisData, 'coherence_score', 0)}%` }} transition={{ duration: 1, delay: 0.3 }}></motion.div>
              </div>
              <p className="text-gray-400 text-sm mt-2">{safeGet(transcriptAnalysisData, 'coherence_score', 0) >= 80 ? "Excellent coherence!" : safeGet(transcriptAnalysisData, 'coherence_score', 0) >= 60 ? "Good coherence." : "Could improve."}</p>
            </div>
            {safeGet(transcriptAnalysisData, 'raw_transcription') && safeGet(transcriptAnalysisData, 'raw_transcription') !== transcriptText && (
              <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                <details className="group">
                  <summary className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-800/40 transition-colors duration-200">
                    <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg></motion.div>
                    <span className="text-gray-300 font-medium">View Original Unprocessed Transcript</span>
                    <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 ml-auto transition-transform duration-300 group-open:rotate-180" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></motion.svg>
                  </summary>
                  <motion.div className="mt-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-blue-500/20 max-h-[200px] overflow-y-auto custom-scrollbar" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}>
                    <p className="text-gray-400 whitespace-pre-line font-light">{safeGet(transcriptAnalysisData, 'raw_transcription', '')}</p>
                  </motion.div>
                </details>
              </motion.div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// Render the voice analysis tab
const renderVoiceAnalysis = () => {
  // MODIFIED: Check for audioResults and audioResults.voiceAnalysis, and internal error.
  if (!audioResults || !audioResults.voiceAnalysis) {
    return (
      <WidgetCard title="Voice Analysis">
        <div className="p-6 text-center">
          <p className="text-gray-400">No voice analysis data available yet. Please analyze a video first.</p>
        </div>
      </WidgetCard>
    );
  }

  const voice = audioResults.voiceAnalysis; // Data is directly in voiceAnalysis
  const voiceError = safeGet(voice, 'error');

  if (voiceError) {
    return (
      <WidgetCard title="Voice Analysis Error">
        <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-700/50">
          <p className="text-red-300 font-medium">Voice analysis encountered an error: {voiceError}</p>
        </div>
      </WidgetCard>
    );
  }

  const getSpeakingRateStatus = (rate) => {
    if (rate < 2.5) return { status: 'slow', color: 'text-blue-400', message: 'Your speaking pace is slow and deliberate.' };
    if (rate > 4.0) return { status: 'fast', color: 'text-amber-400', message: 'Your speaking pace is quite fast.' };
    return { status: 'optimal', color: 'text-green-400', message: 'Your speaking pace is at an optimal rate.' };
  };
  const speakingRate = safeGet(voice, 'speaking_rate', 0);
  const rateStatus = getSpeakingRateStatus(speakingRate);

  return (
    <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}></motion.div>
        <motion.div className="relative z-10 mb-6" initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-green-100">Voice Analysis</h2>
        </motion.div>
        <motion.div className="relative z-10 mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50"><div className="flex items-center"><div className="bg-green-900/30 p-2 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></div><div><div className="text-gray-400 text-xs">Duration</div><div className="text-gray-200 font-medium text-lg">{formatNumber(safeGet(voice, 'duration', 0))} sec</div></div></div></div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50"><div className="flex items-center"><div className={`${rateStatus.status === 'optimal' ? 'bg-green-900/30' : rateStatus.status === 'fast' ? 'bg-amber-900/30' : 'bg-blue-900/30'} p-2 rounded-full mr-3`}><svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${rateStatus.color}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg></div><div><div className="text-gray-400 text-xs">Speaking Rate</div><div className="text-gray-200 font-medium text-lg">{formatNumber(speakingRate)} syl/sec</div></div></div></div>
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800/50"><div className="flex items-center"><div className="bg-amber-900/30 p-2 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div><div><div className="text-gray-400 text-xs">Pauses</div><div className="text-gray-200 font-medium text-lg">{safeGet(voice, 'pauses.count', 0)}</div></div></div></div>
          </div>
        </motion.div>
        <motion.div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40">
            <h3 className="text-gray-200 font-medium mb-4 flex items-center"><span className={`${rateStatus.status === 'optimal' ? 'bg-green-900/30' : rateStatus.status === 'fast' ? 'bg-amber-900/30' : 'bg-blue-900/30'} p-1.5 rounded-md mr-2`}><svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${rateStatus.color}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg></span>Speaking Rate</h3>
            <div className="space-y-4"><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Rate</span><span className={`font-medium ${rateStatus.color}`}>{formatNumber(speakingRate)} syl/sec</span></div><div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className={`h-full ${rateStatus.status === 'optimal' ? 'bg-green-500' : rateStatus.status === 'fast' ? 'bg-amber-500' : 'bg-blue-500'} rounded-full`} style={{ width: `${Math.min(100, (speakingRate / 6) * 100)}%` }}></div></div></div><div className="text-gray-400 text-sm">{rateStatus.message} {rateStatus.status === 'optimal' ? "Ideal for comprehension." : rateStatus.status === 'fast' ? "Consider slowing down." : "Increase pace for engagement."}</div>
              <div className="mt-3 pt-3 border-t border-gray-800">
                <div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Articulation Rate</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'articulation_rate', safeGet(voice, 'speaking_rate', 0)))} syl/sec</span></div> {/* Fallback for articulation_rate */}
                <div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-purple-500 rounded-full" style={{ width: `${Math.min(100, (safeGet(voice, 'articulation_rate', safeGet(voice, 'speaking_rate', 0)) / 6) * 100)}%` }}></div></div><p className="text-gray-400 text-xs mt-1">Rate of speech excluding pauses</p>
              </div></div>
          </div>
          <div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40">
            <h3 className="text-gray-200 font-medium mb-4 flex items-center"><span className="bg-blue-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg></span>Pitch Analysis</h3>
            <div className="space-y-3"><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Pitch</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.average', 0))} Hz</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, (safeGet(voice, 'pitch.average', 0) / 300) * 100)}%` }}></div></div></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Pitch Variation</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.variability', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-indigo-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pitch.variability', 0) * 20)}%` }}></div></div></div> {/* Scaled pitch.variability display */}
            <div className="text-gray-400 text-sm italic mt-2">{safeGet(voice, 'pitch.variability', 0) < 10 ? "Low pitch variation." : safeGet(voice, 'pitch.variability', 0) > 30 ? "High pitch variation." : "Moderate pitch variation."}</div></div>
          </div>
          <div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40">
            <h3 className="text-gray-200 font-medium mb-4 flex items-center"><span className="bg-green-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg></span>Volume Analysis</h3>
            <div className="space-y-3"><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Volume</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.average', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.average', 0) * 200)}%` }}></div></div></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Volume Variation</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.variability', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-teal-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.variability', 0) * 200)}%` }}></div></div></div> {/* Scaled volume.variability */}
            <div className="text-gray-400 text-sm italic mt-2">{safeGet(voice, 'volume.variability', 0) < 0.02 ? "Low volume variation." : safeGet(voice, 'volume.variability', 0) > 0.05 ? "Good volume dynamics." : "Moderate volume variation."}</div></div>
          </div>
          <div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40">
            <h3 className="text-gray-200 font-medium mb-4 flex items-center"><span className="bg-amber-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></span>Pauses Analysis</h3>
            <div className="space-y-3"><div className="flex justify-between items-center"><span className="text-gray-400">Total Pauses</span><span className="text-gray-300 font-medium">{safeGet(voice, 'pauses.count', 0)}</span></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Duration</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pauses.average_duration', 0))} seconds</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pauses.average_duration', 0) * 50)}%` }}></div></div></div> {/* Scaled pause duration */}
            <div className="text-gray-400 text-sm italic mt-2">{safeGet(voice, 'pauses.count', 0) < 3 ? "Few pauses." : safeGet(voice, 'pauses.count', 0) > 10 ? "Frequent pauses." : "Good use of pauses."}</div></div>
          </div>
        </motion.div>
        <motion.div className="relative z-10 mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="bg-gray-900/40 p-5 rounded-lg border border-gray-800/40">
            <h3 className="text-gray-200 font-medium mb-4">Voice Quality Metrics</h3>
            <div className="grid grid-cols-1 gap-3"><div className="bg-gray-900/50 p-3 rounded-lg"><h4 className="text-gray-300 font-medium mb-1">Voice Quality</h4><div className="grid grid-cols-2 gap-2"><div><span className="text-gray-400 text-sm">Spectral Centroid</span><p className="text-gray-300">{formatNumber(safeGet(voice, 'voice_quality.spectral_centroid', 0))}</p></div><div><span className="text-gray-400 text-sm">Spectral Bandwidth</span><p className="text-gray-300">{formatNumber(safeGet(voice, 'voice_quality.spectral_bandwidth', 0))}</p></div></div><p className="text-gray-400 text-xs mt-2">Indicates tonal quality and clarity</p></div></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Render the text analysis tab
const renderTextAnalysis = () => {
  // MODIFIED: Check for audioResults and audioResults.textAnalysis, and internal error.
  if (!audioResults || !audioResults.textAnalysis) {
    return (
      <WidgetCard title="Text Analysis">
        <div className="p-6 text-center">
          <p className="text-gray-400">No text analysis data available yet. Please analyze a video first.</p>
        </div>
      </WidgetCard>
    );
  }

  const text = audioResults.textAnalysis; // Data is directly in textAnalysis
  const textError = safeGet(text, 'error');

  if (textError) {
     return (
      <WidgetCard title="Text Analysis Error">
        <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-700/50">
          <p className="text-red-300 font-medium">Text analysis encountered an error: {textError}</p>
        </div>
      </WidgetCard>
    );
  }

  return (
    <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}></motion.div>
        <motion.div className="flex items-center mb-6 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 p-2 rounded-lg mr-3 border border-indigo-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg></div>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100">Text Analysis</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center mb-3"><span className="bg-indigo-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></span><h3 className="text-gray-200 font-medium">Text Statistics</h3></div>
            <div className="space-y-2"><div className="flex justify-between"><span className="text-gray-400">Word Count</span><span className="text-gray-200 font-medium">{safeGet(text, 'text_statistics.word_count', 0)}</span></div><div className="flex justify-between"><span className="text-gray-400">Sentence Count</span><span className="text-gray-200 font-medium">{safeGet(text, 'text_statistics.sentence_count', 0)}</span></div><div className="flex justify-between"><span className="text-gray-400">Avg Words/Sentence</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'text_statistics.average_words_per_sentence', 0))}</span></div><div className="flex justify-between"><span className="text-gray-400">Vocabulary Richness</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'text_statistics.vocabulary_richness', 0))}%</span></div></div>
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center mb-3"><span className="bg-green-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span><h3 className="text-gray-200 font-medium">Sentiment Analysis</h3></div>
            <div className="space-y-2"><div className="flex justify-between"><span className="text-gray-400">Label</span><span className="text-gray-200 font-medium capitalize">{safeGet(text, 'sentiment_analysis.label', 'Neutral')}</span></div><div className="flex justify-between"><span className="text-gray-400">Polarity</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'sentiment_analysis.polarity', 0))}</span></div><div className="flex justify-between"><span className="text-gray-400">Subjectivity</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'sentiment_analysis.subjectivity', 0))}</span></div></div>
            <div className="mt-3 pt-3 border-t border-gray-700/40"><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Sentiment</span><span className={`text-sm font-medium ${safeGet(text, 'sentiment_analysis.polarity', 0) > 0.2 ? 'text-green-400' : safeGet(text, 'sentiment_analysis.polarity', 0) < -0.2 ? 'text-red-400' : 'text-yellow-400'}`}>{safeGet(text, 'sentiment_analysis.polarity', 0) > 0.2 ? 'Positive' : safeGet(text, 'sentiment_analysis.polarity', 0) < -0.2 ? 'Negative' : 'Neutral'}</span></div><div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className={`h-full ${safeGet(text, 'sentiment_analysis.polarity', 0) > 0.2 ? 'bg-green-500' : safeGet(text, 'sentiment_analysis.polarity', 0) < -0.2 ? 'bg-red-500' : 'bg-yellow-500'} rounded-full`} style={{ width: `${Math.min(100, Math.abs(safeGet(text, 'sentiment_analysis.polarity', 0) * 100))}%`, marginLeft: safeGet(text, 'sentiment_analysis.polarity', 0) < 0 ? 'auto' : '0' }}></div></div></div>
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center mb-3"><span className="bg-yellow-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg></span><h3 className="text-gray-200 font-medium">Content Analysis</h3></div>
            <div className="space-y-2"><div className="flex justify-between"><span className="text-gray-400">Noun-Verb Ratio</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'content_analysis.noun_verb_ratio', 0))}</span></div><div className="flex justify-between"><span className="text-gray-400">Filler Word %</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'filler_words.percentage', 0))}%</span></div><div className="flex justify-between"><span className="text-gray-400">Unique Word %</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'text_statistics.vocabulary_richness', 0))}%</span></div></div> {/* Using vocabulary richness for Unique Word % */}
            <div className="mt-3 pt-3 border-t border-gray-700/40"><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Content Quality</span><span className="text-gray-200 font-medium">{safeGet(text, 'text_statistics.vocabulary_richness', 0) > 70 ? 'Excellent' : safeGet(text, 'text_statistics.vocabulary_richness', 0) > 50 ? 'Good' : 'Basic'}</span></div><div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 rounded-full" style={{ width: `${Math.min(100, safeGet(text, 'text_statistics.vocabulary_richness', 0))}%` }}></div></div></div>
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center mb-3"><span className="bg-teal-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg></span><h3 className="text-gray-200 font-medium">Readability</h3></div>
            <div className="space-y-2"><div className="flex justify-between"><span className="text-gray-400">Reading Level</span><span className="text-gray-200 font-medium">{safeGet(text, 'readability.reading_level', 'N/A')}</span></div><div className="flex justify-between"><span className="text-gray-400">Flesch Reading Ease</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'readability.flesch_reading_ease', 0))}</span></div><div className="flex justify-between"><span className="text-gray-400">Flesch-Kincaid Grade</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(text, 'readability.flesch_kincaid_grade', safeGet(text, 'readability.flesch_reading_ease',0) > 0 ? (206.835 - safeGet(text, 'readability.flesch_reading_ease',0))/8.7 : 0))}</span></div></div> {/* Added fallback for F-K grade */}
            <div className="mt-3 pt-3 border-t border-gray-700/40"><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Ease of Reading</span><span className="text-gray-200 font-medium">{safeGet(text, 'readability.flesch_reading_ease', 0) > 80 ? 'Very Easy' : safeGet(text, 'readability.flesch_reading_ease', 0) > 60 ? 'Easy' : safeGet(text, 'readability.flesch_reading_ease', 0) > 40 ? 'Medium' : 'Difficult'}</span></div><div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-teal-500 rounded-full" style={{ width: `${Math.min(100, safeGet(text, 'readability.flesch_reading_ease', 0))}%` }}></div></div></div>
          </motion.div>
        </div>
        <motion.div className="mt-6 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 relative z-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
          <div className="flex items-center mb-4"><span className="bg-purple-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg></span><h3 className="text-gray-200 font-medium">Emotion Analysis</h3></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div><div className="flex justify-between items-center mb-2"><span className="text-gray-400">Primary Emotion</span><span className="text-gray-200 font-medium capitalize">{safeGet(text, 'emotion_analysis.primary_emotion', 'neutral')}</span></div><div className="bg-gray-900/40 p-3 rounded-lg border border-gray-800/40"><h4 className="text-gray-300 text-sm font-medium mb-2">Emotion Distribution</h4><div className="space-y-2">{Object.entries(safeGet(text, 'emotion_analysis.emotion_distribution', {})).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([emotion, percentage], index) => (<div key={index}><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm capitalize">{emotion}</span><span className="text-gray-300 text-sm">{formatNumber(percentage)}%</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${Math.min(100, percentage)}%` }} transition={{ duration: 0.8, delay: 0.1 * index }} className={`h-full rounded-full ${getEmotionColor(emotion)}`}></motion.div></div></div>))}</div></div></div>
            <div><div className="flex justify-between items-center mb-2"><span className="text-gray-400">Emotional Tone</span><span className="text-gray-200 font-medium">{safeGet(text, 'emotion_analysis.emotion_summary', 'Neutral')}</span></div> {/* Using emotion_summary for tone */}
              <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-800/40"><h4 className="text-gray-300 text-sm font-medium mb-2">Common Words</h4><ul className="space-y-1">{safeGet(text, 'content_analysis.most_common_words', []).slice(0, 5).map(([word, count], index) => (<li key={index} className="flex justify-between"><span className="text-gray-400 text-sm">"{word}"</span><span className="text-gray-300 text-sm">{count} times</span></li>))}</ul></div>
            </div>
          </div>
        </motion.div>

        <motion.div className="mt-6 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 relative z-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}>
          <div className="flex items-center"><span className="bg-indigo-900/30 p-1.5 rounded-md mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></span><h3 className="text-gray-200 font-medium">Text Analysis Insights</h3></div>
          <div className="mt-3 text-gray-300 text-sm"><p>{safeGet(text, 'sentiment_analysis.label', 'neutral') === 'Positive' ? 'Positive tone.' : safeGet(text, 'sentiment_analysis.label', 'neutral') === 'Negative' ? 'Negative tone.' : 'Neutral tone.'}</p><p className="mt-2">{safeGet(text, 'readability.flesch_reading_ease', 0) > 70 ? 'Easy to understand.' : safeGet(text, 'readability.flesch_reading_ease', 0) > 50 ? 'Moderate complexity.' : 'Complex content.'}</p><p className="mt-2">{safeGet(text, 'filler_words.percentage', 0) < 2 ? 'Few filler words.' : safeGet(text, 'filler_words.percentage', 0) < 5 ? 'Some filler words.' : 'Many filler words.'}</p></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Render the recommendations tab
const renderRecommendations = () => {
  const audioRecsData = audioResults?.recommendations;
  const audioRecsError = audioRecsData?.error;

  // Valid audio recommendations exist if data is there AND there's no error flag and it's not an empty object
  const hasValidAudioRecommendations = audioRecsData &&
                                       !audioRecsError &&
                                       (Object.keys(safeGet(audioRecsData, 'performance_assessment', {})).length > 0 ||
                                        safeGet(audioRecsData, 'recommendations', []).length > 0 ||
                                        Object.keys(safeGet(audioRecsData, 'development_plan', {})).length > 0);

  const hasEmotionRecommendations = emotionComparison?.recommendations?.length > 0;

  if (!hasValidAudioRecommendations && !hasEmotionRecommendations) {
    let message = "No recommendations available yet. Please analyze a video first.";
    if (audioRecsError) {
        message = `Could not load speech recommendations: ${audioRecsError}. Emotion recommendations might still be available.`;
    } else if (audioResults && !audioRecsData && !isProcessing && analysisStarted) {
        // analysis done, audioResults exist, but recommendations part is missing without an error flag
        message = "Speech recommendations are not available for this analysis."
    } else if (isProcessing) {
        message = "Recommendations are being generated..."
    }
    return (
      <WidgetCard title="Recommendations">
        <div className="p-6 text-center">
          <p className="text-gray-400">{message}</p>
        </div>
      </WidgetCard>
    );
  }

  return (
    <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
        <motion.div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
        <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}></motion.div>
        <motion.div className="flex items-center mb-6 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" /></svg></div>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Personalized Recommendations</h2>
        </motion.div>

        {hasEmotionRecommendations && (
          <motion.div className="mb-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="flex items-center mb-4"><div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-1.5 rounded-md mr-2 border border-blue-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" /></svg></div><h3 className="text-blue-300 font-medium">Emotion Congruence Recommendations</h3></div>
            <div className="space-y-4">{emotionComparison.recommendations.map((rec, index) => (<motion.div key={index} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }} className={`bg-gray-800/40 p-4 rounded-lg border border-gray-700/40 ${rec.title.includes("Low") ? "border-l-4 border-l-red-500/70" : rec.title.includes("Moderate") ? "border-l-4 border-l-yellow-500/70" : "border-l-4 border-l-green-500/70"}`}><h4 className={`font-medium mb-2 ${rec.title.includes("Low") ? "text-red-400" : rec.title.includes("Moderate") ? "text-yellow-400" : "text-green-400"}`}>{rec.title}</h4><p className="text-gray-300 mb-3">{rec.description}</p>{rec.suggestions && (<ul className="list-disc list-inside text-gray-400 space-y-1">{rec.suggestions.map((suggestion, i) => (<li key={i}>{suggestion}</li>))}</ul>)}</motion.div>))}</div>
          </motion.div>
        )}

        {/* Speech Analysis Recommendations */}
        {hasValidAudioRecommendations && (
          <div className="relative z-10">
            {safeGet(audioRecsData, 'performance_assessment') && Object.keys(safeGet(audioRecsData, 'performance_assessment')).length > 0 && (
              <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                <div className="flex items-center mb-4"><div className="bg-gradient-to-br from-green-500/20 to-green-700/20 p-1.5 rounded-md mr-2 border border-green-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></div><h3 className="text-green-300 font-medium">Performance Assessment</h3></div>
                <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/40">
                  <div className="mb-4"><div className="flex justify-between items-center mb-2"><span className="text-gray-300 font-medium">Overall Score</span><span className="text-gray-200 font-medium">{formatNumber(safeGet(audioRecsData, 'performance_assessment.overall_score', 0))}/100</span></div><div className="h-2 w-full bg-gray-700 rounded-full overflow-hidden"><motion.div initial={{ width: 0 }} animate={{ width: `${safeGet(audioRecsData, 'performance_assessment.overall_score', 0)}%` }} transition={{ duration: 1, delay: 0.4 }} className="h-full bg-gradient-to-r from-green-500 to-green-300 rounded-full"></motion.div></div></div>
                  {safeGet(audioRecsData, 'performance_assessment.detailed_strengths', []).length > 0 && (<div className="mt-4"><h4 className="font-medium text-green-400 text-lg mb-2">Your Strengths:</h4><div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">{safeGet(audioRecsData, 'performance_assessment.detailed_strengths', []).map((strength, index) => (<motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + (index * 0.1) }} className="bg-green-900/20 p-3 rounded border border-green-700/30"><h5 className="font-medium text-green-400">{strength.category}: {strength.strength}</h5><p className="text-gray-400 text-sm mt-1">{strength.description}</p><p className="text-green-400 text-sm mt-1 italic">To enhance: {strength.enhancement}</p></motion.div>))}</div></div>)}
                  {safeGet(audioRecsData, 'performance_assessment.growth_areas', []).length > 0 && (<div className="mt-4"><h4 className="font-medium text-amber-400 text-lg mb-2">Growth Areas:</h4><div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">{safeGet(audioRecsData, 'performance_assessment.growth_areas', []).map((area, index) => (<motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 + (index * 0.1) }} className="bg-amber-900/20 p-3 rounded border border-amber-700/30"><p className="text-amber-400 font-medium">{area}</p><p className="text-gray-400 text-sm mt-1 italic">To improve: Focus on developing this area.</p></motion.div>))}</div></div>)}
                </div>
              </motion.div>
            )}
            {safeGet(audioRecsData, 'performance_assessment.priority_improvements', []).length > 0 && (
              <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                <div className="flex items-center mb-4"><div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-1.5 rounded-md mr-2 border border-blue-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></div><h3 className="text-blue-300 font-medium">Priority Improvements</h3></div>
                <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/40"><div className="space-y-3">{safeGet(audioRecsData, 'performance_assessment.priority_improvements', []).map((priority, index) => (<motion.div key={index} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + (index * 0.1) }} className="flex gap-3 items-start p-3 bg-blue-900/20 rounded border-l-4 border-blue-400"><div className="bg-blue-900/30 rounded-full h-6 w-6 flex items-center justify-center text-blue-400 font-bold shrink-0">{index + 1}</div><div><h4 className="font-medium text-blue-400">{priority.category}: {priority.issue}</h4><p className="text-sm text-gray-400">{priority.impact}</p></div></motion.div>))}</div></div>
              </motion.div>
            )}
            {safeGet(audioRecsData, 'recommendations', []).length > 0 && (
              <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }}>
                <div className="flex items-center mb-4"><div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-1.5 rounded-md mr-2 border border-purple-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" /></svg></div><h3 className="text-purple-300 font-medium">Detailed Recommendations</h3></div>
                <div className="space-y-4">{safeGet(audioRecsData, 'recommendations', []).map((rec, index) => (<motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 + (index * 0.1) }} className="p-4 rounded-lg border border-gray-700/40 bg-gray-800/40"><h4 className="font-medium text-purple-400 text-lg">{rec.category}: {rec.issue}</h4><p className="text-gray-400 mb-3">{rec.description}</p><p className="text-gray-300 font-medium mb-3">Suggestion: {rec.suggestion}</p>{rec.exercises && rec.exercises.length > 0 && (<div className="mt-3 bg-gray-900/40 p-3 rounded-lg border border-gray-800/40"><h5 className="text-sm font-medium text-indigo-400 mb-2">Recommended Exercises:</h5><ul className="list-disc pl-5 text-sm space-y-1">{rec.exercises.map((exercise, i) => (<li key={i} className="text-gray-400">{exercise}</li>))}</ul></div>)}</motion.div>))}</div>
              </motion.div>
            )}
            {safeGet(audioRecsData, 'development_plan') && Object.keys(safeGet(audioRecsData, 'development_plan')).length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
                <div className="flex items-center mb-4"><div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 p-1.5 rounded-md mr-2 border border-teal-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" /></svg></div><h3 className="text-teal-300 font-medium">Development Plan</h3></div>
                <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/40">
                  {safeGet(audioRecsData, 'development_plan.short_term_goals', []).length > 0 && <div className="mb-4"><h4 className="text-teal-400 font-medium mb-2">Short-term Goals (1-2 weeks)</h4><ul className="list-disc pl-5 text-gray-300 space-y-1">{safeGet(audioRecsData, 'development_plan.short_term_goals', []).map((goal, i) => (<li key={i}>{goal}</li>))}</ul></div>}
                  {safeGet(audioRecsData, 'development_plan.medium_term_goals', []).length > 0 && <div className="mb-4"><h4 className="text-teal-400 font-medium mb-2">Medium-term Goals (1-2 months)</h4><ul className="list-disc pl-5 text-gray-300 space-y-1">{safeGet(audioRecsData, 'development_plan.medium_term_goals', []).map((goal, i) => (<li key={i}>{goal}</li>))}</ul></div>}
                  {safeGet(audioRecsData, 'development_plan.practice_routine') && <div className="mb-4"><h4 className="text-teal-400 font-medium mb-2">Suggested Practice Routine</h4><div className="bg-gray-900/40 p-3 rounded-lg border border-gray-800/40"><p className="text-gray-300">{safeGet(audioRecsData, 'development_plan.practice_routine', '')}</p></div></div>}
                  {safeGet(audioRecsData, 'development_plan.tracking_template') && <div><h4 className="text-teal-400 font-medium mb-2">Progress Tracking</h4><div className="bg-gray-900/40 p-3 rounded-lg border border-gray-800/40"><p className="text-gray-300 mb-2">{safeGet(audioRecsData, 'development_plan.tracking_template.weekly_focus', '')}</p><h5 className="text-sm font-medium text-gray-200">Metrics to Track:</h5><ul className="list-disc pl-5 text-sm text-gray-400">{safeGet(audioRecsData, 'development_plan.tracking_template.metrics_to_track', []).map((metric, i) => (<li key={i}>{metric}</li>))}</ul></div></div>}
                </div>
              </motion.div>
            )}
          </div>
        )}
         {audioRecsError && !hasValidAudioRecommendations && (
             <motion.div className="mt-6 bg-red-900/20 p-4 rounded-lg border border-red-700/30" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                <div className="flex items-center mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <h3 className="text-red-300 font-medium">Speech Recommendations Error</h3>
                </div>
                <p className="text-red-400 text-sm">Could not load speech recommendations: {audioRecsError}</p>
             </motion.div>
         )}

        <motion.div className="mt-8 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
          <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-300" onClick={() => alert('PDF download functionality will be implemented soon!')}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clipRule="evenodd" /></svg>Download Complete Report (PDF)
          </button>
          <p className="text-center text-gray-400 text-sm mt-2">Get a comprehensive PDF report with all analysis results and recommendations</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Render the complete results section
const renderResults = () => {
  // analysisStarted is true when "Analyze Video" is clicked.
  // Results are shown if analysis started OR if there are already results (e.g. from a previous session if we implement loading)
  if (!analysisStarted && !facialResults && !audioResults) return null;

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" }},
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 }}
  };

  const tabs = [
    { id: "combined", label: "Combined Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" /></svg>)},
    { id: "facial", label: "Facial Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z" clipRule="evenodd" /></svg>)},
    { id: "transcript", label: "Transcript", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>)},
    { id: "voice", label: "Voice Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071a1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828a1 1 0 010-1.415z" clipRule="evenodd" /></svg>)},
    { id: "text", label: "Text Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>)},
    { id: "recommendations", label: "Recommendations", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>)}
  ];

  return (
    <div className="mt-8">
      <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-1 mb-6">
        <nav className="flex">
          {tabs.map((tab) => (<motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === tab.id ? "bg-gradient-to-r from-purple-900/70 to-purple-800/50 text-purple-200 shadow-lg shadow-purple-900/20" : "bg-transparent text-gray-400 hover:bg-gray-800/30 hover:text-gray-300"}`} whileHover={{ scale: activeTab !== tab.id ? 1.02 : 1 }} whileTap={{ scale: 0.98 }}>{tab.icon}<span className="font-medium hidden sm:inline">{tab.label}</span></motion.button>))}
        </nav>
      </div>
      <AnimatePresence mode="wait">
        {isProcessing && (
          <motion.div key="processing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
            <WavyBackground colors={['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#6d28d9']} backgroundFill="rgba(15, 23, 42, 0.9)" blur={5} speed="fast" waveWidth={40} waveOpacity={0.6} containerClassName="absolute inset-0" />
            <motion.div className="relative z-10 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-500/30 max-w-md w-full" initial={{ scale: 0.8, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 20, opacity: 0 }} transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}>
              <div className="flex flex-col items-center">
                <div className="relative w-28 h-28 mb-6 flex items-center justify-center"><motion.div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30" animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} /><div className="relative z-10"><motion.div className="w-20 h-20 rounded-full bg-gray-800/80 flex items-center justify-center" animate={{ scale: [1, 1.05, 1], }} transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg></motion.div><motion.div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg></motion.div><motion.div className="absolute -bottom-1 -left-1 w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center" animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7], }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></motion.div></div></div>
                <motion.h3 className="text-xl font-medium text-white mb-2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>Analyzing Your Video</motion.h3>
                <motion.p className="text-gray-300 text-center mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>Extracting facial expressions, voice tone, and speech content.</motion.p>
                <motion.div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden mb-4" initial={{ opacity: 0, scaleX: 0.3 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.5, duration: 0.5 }}><motion.div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" animate={{ width: ["15%", "95%"] }} transition={{ duration: 15, ease: "easeInOut", }}/></motion.div>
                <motion.p className="text-gray-400 text-sm text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>This may take a few minutes...</motion.p>
              </div>
            </motion.div>
          </motion.div>
        )}
        {!isProcessing && activeTab === "combined" && (
          <motion.div key="combined" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="combined-results">
            {emotionComparison ? renderEmotionComparison() : (
              <WidgetCard title="Combined Analysis">
                <div className="p-6 text-center">
                  <p className="text-gray-400">{analysisStarted ? "Processing... Please wait." : "Upload a video and click 'Analyze Video'."}</p>
                  {(facialResults?.error || audioResults?.error) && (
                    <p className="text-red-400 mt-2">
                      Note: Analysis may be incomplete due to errors. Check individual tabs for details.
                    </p>
                  )}
                </div>
              </WidgetCard>
            )}
            {facialResults && !facialResults.error && audioResults && !audioResults.error && ( // Only show summaries if no errors in main results
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <WidgetCard title="Facial Analysis Summary">
                  <div className="p-4">{facialResults?.emotion_summary && (<><div className="flex items-center mb-3"><div className={`w-12 h-12 rounded-full ${getEmotionColor(facialResults.emotion_summary.dominant_emotion)} flex items-center justify-center mr-3`}><span className="text-white font-bold text-xs capitalize">{facialResults.emotion_summary.dominant_emotion.substring(0, 3)}</span></div><div><p className="text-gray-300 font-medium">Dominant Emotion</p><p className="text-gray-400 capitalize">{facialResults.emotion_summary.dominant_emotion}</p></div></div><div className="flex items-center"><div className="w-12 h-12 rounded-full bg-blue-900/30 flex items-center justify-center mr-3"><span className="text-blue-400 font-bold text-xs">{facialResults.emotion_summary.face_count_avg.toFixed(1)}</span></div><div><p className="text-gray-300 font-medium">Average Faces</p><p className="text-gray-400">Detected</p></div></div></>)}</div>
                </WidgetCard>
                <WidgetCard title="Speech Content Summary"> {/* MODIFIED: uses audioResults.textAnalysis */}
                  <div className="p-4">{audioResults?.textAnalysis && (<><div className="flex items-center mb-3"><div className={`w-12 h-12 rounded-full ${getEmotionColor(safeGet(audioResults.textAnalysis, 'emotion_analysis.primary_emotion', 'neutral'))} flex items-center justify-center mr-3`}><span className="text-white font-bold text-xs capitalize">{safeGet(audioResults.textAnalysis, 'emotion_analysis.primary_emotion', 'neutral').substring(0, 3)}</span></div><div><p className="text-gray-300 font-medium">Text Emotion</p><p className="text-gray-400 capitalize">{safeGet(audioResults.textAnalysis, 'emotion_analysis.primary_emotion', 'neutral')}</p></div></div><div className="flex items-center"><div className="w-12 h-12 rounded-full bg-purple-900/30 flex items-center justify-center mr-3"><span className="text-purple-400 font-bold text-xs">{formatNumber(safeGet(audioResults.textAnalysis, 'content_analysis.noun_verb_ratio', 0))}</span></div><div><p className="text-gray-300 font-medium">Noun-Verb Ratio</p><p className="text-gray-400">Balance</p></div></div></>)}</div>
                </WidgetCard>
                <WidgetCard title="Voice Analysis Summary"> {/* MODIFIED: uses audioResults.voiceAnalysis */}
                  <div className="p-4">{audioResults?.voiceAnalysis && (<><div className="flex items-center mb-3"><div className="w-12 h-12 rounded-full bg-green-900/30 flex items-center justify-center mr-3"><span className="text-green-400 font-bold text-xs">{formatNumber(safeGet(audioResults.voiceAnalysis, 'duration', 0))}</span></div><div><p className="text-gray-300 font-medium">Duration</p><p className="text-gray-400">Secs</p></div></div><div className="flex items-center"><div className="w-12 h-12 rounded-full bg-yellow-900/30 flex items-center justify-center mr-3"><span className="text-yellow-400 font-bold text-xs">{formatNumber(safeGet(audioResults.voiceAnalysis, 'speaking_rate', 0))}</span></div><div><p className="text-gray-300 font-medium">Speaking Rate</p><p className="text-gray-400">Syl/sec</p></div></div></>)}</div>
                </WidgetCard>
              </div>
            )}
          </motion.div>
        )}
        {!isProcessing && activeTab === "facial" && (
          <motion.div key="facial" variants={tabVariants} initial="hidden" animate="visible" exit="exit" className="facial-results">
            <WidgetCard title="Facial Emotion Analysis">
              {!facialResults || facialResults.error ? (
                <div className="p-6 text-center">
                  <p className="text-gray-400">{facialResults?.error ? `Error: ${facialResults.error}` : "No facial analysis results."}</p>
                </div>
              ) : (
                <div className="p-4">
                  <div className="mb-6"><h3 className="text-lg font-medium text-gray-300 mb-4">Dominant Emotion</h3><div className="flex items-center justify-center mb-6"><motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5 }} className={`w-28 h-28 rounded-full ${getEmotionColor(safeGet(facialResults, 'emotion_summary.dominant_emotion', 'neutral'))} flex items-center justify-center`}><span className="text-white font-bold text-xl capitalize">{safeGet(facialResults, 'emotion_summary.dominant_emotion', 'neutral')}</span></motion.div></div><h3 className="text-lg font-medium text-gray-300 mb-4">Emotion Distribution</h3><div className="space-y-4">{Object.entries(safeGet(facialResults, 'emotion_summary.emotion_percentages', {})).sort((a, b) => b[1] - a[1]).map(([emotion, percentage], index) => (<motion.div key={emotion} initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.3, delay: index * 0.1 }} className="flex items-center"><span className="w-24 text-gray-300 capitalize">{emotion}</span><div className="flex-1 mx-3"><div className="w-full bg-gray-700 rounded-full h-3"><motion.div initial={{ width: 0 }} animate={{ width: `${percentage}%` }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 + (index * 0.1) }} className={`h-3 rounded-full ${getEmotionColor(emotion)}`}></motion.div></div></div><span className="text-gray-300 font-medium min-w-[50px] text-right">{formatNumber(percentage)}%</span></motion.div>))}</div></div>
                </div>
              )}
            </WidgetCard>
          </motion.div>
        )}
        {!isProcessing && activeTab === "transcript" && (<motion.div key="transcript" variants={tabVariants} initial="hidden" animate="visible" exit="exit">{renderTranscript()}</motion.div>)}
        {!isProcessing && activeTab === "voice" && (<motion.div key="voice" variants={tabVariants} initial="hidden" animate="visible" exit="exit">{renderVoiceAnalysis()}</motion.div>)}
        {!isProcessing && activeTab === "text" && (<motion.div key="text" variants={tabVariants} initial="hidden" animate="visible" exit="exit">{renderTextAnalysis()}</motion.div>)}
        {!isProcessing && activeTab === "recommendations" && (<motion.div key="recommendations" variants={tabVariants} initial="hidden" animate="visible" exit="exit">{renderRecommendations()}</motion.div>)}
      </AnimatePresence>
    </div>
  );
};

  return (
    <DashboardLayout>
      <DashboardPageWrapper title="Video Analysis" description="Upload a video to analyze facial expressions, voice tone, and speech content">
        <div className="grid grid-cols-1 gap-6">
          <WidgetCard title="Upload Video" theme="purple">
            <div className="p-6 relative">
              <motion.div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
              <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}></motion.div>
              <div className="relative z-10">
                <motion.p className="text-gray-300 mb-6 text-center font-medium" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Upload a video to analyze facial expressions, voice tone, and speech content for emotional congruence</motion.p>
                <div className="flex flex-col items-center justify-center">
                  {videoPreview ? (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6 w-full flex justify-center relative">
                      <div className="relative max-w-4xl w-full"><div className="aspect-video w-full max-h-[500px] min-h-[400px] bg-gradient-to-br from-gray-900/80 to-gray-950/90 overflow-hidden rounded-lg border-2 border-dashed border-purple-500/50 relative flex items-center justify-center"><video src={videoPreview} className="w-full h-full object-contain rounded-lg" controls /></div></div>
                    </motion.div>
                  ) : (
                    <motion.div className="mb-6 w-full flex justify-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                      <div className="relative max-w-4xl w-full">
                        <motion.div className={`aspect-video w-full max-h-[500px] min-h-[400px] bg-gradient-to-br from-gray-900/80 to-gray-950/90 rounded-lg border-2 border-dashed ${isDragging ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700/50 hover:border-purple-500/50'} flex items-center justify-center relative overflow-hidden group`} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} whileHover={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" }} onClick={triggerFileInput}>
                          <input ref={fileInputRef} type="file" accept="video/*" onChange={handleEnhancedVideoChange} className="hidden" />
                          <motion.div className="flex flex-col items-center justify-center gap-3 relative z-10" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                            <motion.div className="w-24 h-24 bg-gradient-to-br from-purple-900/40 to-indigo-900/40 rounded-full flex items-center justify-center text-purple-400 border border-purple-500/30" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                              <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}><path d="M15,8 L15,16 C15,16.5304 14.7893,17.0391 14.4142,17.4142 C14.0391,17.7893 13.5304,18 13,18 L3,18 C2.46957,18 1.96086,17.7893 1.58579,17.4142 C1.21071,17.0391 1,16.5304 1,16 L1,8 C1,7.46957 1.21071,6.96086 1.58579,6.58579 C1.96086,6.21071 2.46957,6 3,6 L13,6 C13.5304,6 14.0391,6.21071 14.4142,6.58579 C14.7893,6.96086 15,7.46957 15,8 Z" /><path d="M15,12 L23,8 L23,16 L15,12 Z" /></motion.svg>
                            </motion.div>
                            <div className="text-center"><p className="text-gray-300 text-lg mb-2">Drag and drop video or</p><button onClick={triggerFileInput} className="text-purple-400 hover:text-purple-300 font-medium text-lg">browse files</button><p className="text-gray-500 mt-3">Supports MP4, WebM, MOV</p></div>
                          </motion.div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )}
                  {uploadProgress > 0 && uploadProgress < 100 && (
                    <div className="mt-4 w-full max-w-md"><div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden"><motion.div className="h-full bg-gradient-to-r from-purple-600 to-blue-500" initial={{ width: 0 }} animate={{ width: `${uploadProgress}%` }} transition={{ duration: 0.5 }} /></div><p className="text-sm text-gray-400 mt-1 text-center">Uploading... {uploadProgress}%</p></div>
                  )}
                  {videoFile && uploadProgress === 100 && (
                    <motion.div className="mt-4 flex flex-col items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                      <div className="flex items-center justify-center gap-2 text-green-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg><span>Video ready for analysis</span></div>
                    </motion.div>
                  )}
                  <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                      <label className="relative px-6 py-3 bg-[#232429] text-white rounded-lg cursor-pointer flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15,8 L15,16 C15,16.5304 14.7893,17.0391 14.4142,17.4142 C14.0391,17.7893 13.5304,18 13,18 L3,18 C2.46957,18 1.96086,17.7893 1.58579,17.4142 C1.21071,17.0391 1,16.5304 1,16 L1,8 C1,7.46957 1.21071,6.96086 1.58579,6.58579 C1.96086,6.21071 2.46957,6 3,6 L13,6 C13.5304,6 14.0391,6.21071 14.4142,6.58579 C14.7893,6.96086 15,7.46957 15,8 Z" /><path d="M15,12 L23,8 L23,16 L15,12 Z" /></svg><span>{videoFile ? "Change Video" : "Upload Video"}</span><input type="file" accept="video/*" onChange={handleEnhancedVideoChange} className="hidden" /></label>
                    </motion.div>
                    {videoFile && !isProcessing && !analysisStarted && ( // Show Analyze button only if not processing AND analysis hasn't started (or results are cleared)
                      <motion.button onClick={processVideo} disabled={isProcessing} className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-purple-600/20 disabled:from-gray-500 disabled:to-gray-400 disabled:shadow-none" whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}>
                        <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-purple-600/30 overflow-hidden" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 2.5, ease: [0.4, 0, 0.6, 1] }} /><motion.div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-fuchsia-500/10 to-violet-600/0" animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1], rotate: [0, 5, 0], }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }} /><motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/10 to-indigo-500/0" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.05, 1, 1.05], x: [-5, 5, -5], }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }} /><motion.div className="absolute -inset-1 rounded-lg opacity-0 bg-purple-500/20 blur-sm" animate={{ opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 1 }} />
                        <div className="flex items-center justify-center gap-2 relative z-10">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg><span>Analyze Video</span>
                        </div>
                      </motion.button>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mt-3">Max 15 minutes, MP4 or WebM format recommended</p>
                  {error && (<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6 p-4 bg-red-900/30 border border-red-500/30 rounded-lg text-red-300 max-w-2xl"><div className="flex items-start"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 mt-0.5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><p>{error}</p></div></motion.div>)}
                </div>
              </div>
            </div>
          </WidgetCard>
          {renderResults()}
        </div>
      </DashboardPageWrapper>
    </DashboardLayout>
  );
}