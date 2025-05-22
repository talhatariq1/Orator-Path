"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GradientButton from "./GradientButton";

// Constants
const SPEECH_PROMPTS = [
  "Introduce yourself and your background in 30 seconds",
  "Explain a complex topic in simple terms",
  "Persuade an audience to try something new",
  "Tell a compelling story about a challenge you overcame",
  "Give an impromptu toast at a celebration",
];
const MAX_RECORDING_TIME = 30;
const SILENCE_THRESHOLD = 0.03;
const MIN_RECORDING_DURATION = 1.0;

// Utility Functions
const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = (seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
};

const calculateVariance = (array) => {
  const mean = array.reduce((sum, val) => sum + val, 0) / array.length;
  return array.reduce((sum, val) => sum + (val - mean) ** 2, 0) / array.length;
};

// Component
const SpeechPracticePlayground = () => {
  // Refs
  const sectionRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const streamRef = useRef(null);
  const recognitionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const transcriptRef = useRef("");  // ref to accumulate final transcript

  // State
  const [state, setState] = useState({
    activePrompt: 0,
    isRecording: false,
    recordingTime: 0,
    showFeedback: false,
    feedbackData: null,
    audioBlob: null,
    analysisError: null,
    transcript: "",
    interimTranscript: "",
    isTranscribing: false
  });

  // Individual state variables for backward compatibility
  const {
    activePrompt, isRecording, recordingTime, showFeedback,
    feedbackData, audioBlob, analysisError, transcript,
    interimTranscript, isTranscribing
  } = state;

  // Memoized speech recognition setup
  const initializeSpeechRecognition = useCallback(() => {
    const SpeechRecognition =
      window.SpeechRecognition ||
      window.webkitSpeechRecognition ||
      window.mozSpeechRecognition ||
      window.msSpeechRecognition;

    if (!SpeechRecognition) return null;

    const recognition = new SpeechRecognition();
    recognition.isActive = false;
    recognition.onstart = () => { recognition.isActive = true; };
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      let finalText = '';
      let interimText = '';

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const word = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalText += word + ' ';
        } else {
          interimText += word;
        }
      }

      if (finalText) {
        transcriptRef.current += finalText;
        setState(prev => ({ ...prev, transcript: transcriptRef.current.trim() }));
      }
      setState(prev => ({ ...prev, interimTranscript: interimText }));
    };

    recognition.onerror = (event) => {
      setState((prev) => ({
        ...prev,
        isTranscribing: false,
        analysisError:
          event.error === "not-allowed"
            ? "Microphone access denied. Please check your browser permissions."
            : prev.analysisError,
      }));
    };

    recognition.onend = () => {
      recognition.isActive = false;
      setState((prev) => {
        if (prev.isRecording && mediaRecorderRef.current?.state === "recording") {
          if (!recognition.isActive) {
            recognition.start();
            recognition.isActive = true;
          }
          return { ...prev, isTranscribing: true };
        }
        return { ...prev, isTranscribing: false };
      });
    };

    return recognition;
  }, []);

  // Initialize audio context and speech recognition
  useEffect(() => {
    audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
    analyserRef.current = audioContextRef.current.createAnalyser();
    analyserRef.current.fftSize = 2048;

    recognitionRef.current = initializeSpeechRecognition();

    return () => {
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (audioContextRef.current?.state !== "closed") {
        audioContextRef.current.close();
      }
    };
  }, [initializeSpeechRecognition]);

  // Recording timer
  useEffect(() => {
    let interval;
    if (state.isRecording) {
      interval = setInterval(() => {
        setState((prev) => {
          const newTime = prev.recordingTime + 1;
          if (newTime >= MAX_RECORDING_TIME) {
            mediaRecorderRef.current?.stop();
            return { ...prev, isRecording: false, recordingTime: MAX_RECORDING_TIME };
          }
          return { ...prev, recordingTime: newTime };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [state.isRecording]);

  // Audio Processing
  const processAudioData = useCallback(async (audioBlob) => {
    if (audioBlob.size < 1000) {
      setState((prev) => ({
        ...prev,
        analysisError: "Recording too short or silent. Please try again.",
      }));
      return null;
    }

    try {
      const arrayBuffer = await audioBlob.arrayBuffer();
      const audioBuffer = await audioContextRef.current.decodeAudioData(arrayBuffer);

      if (audioBuffer.duration < MIN_RECORDING_DURATION) {
        setState((prev) => ({
          ...prev,
          analysisError: "Recording too short for analysis. Speak for at least 1-2 seconds.",
        }));
        return null;
      }

      const volumeMetrics = analyzeVolume(audioBuffer);
      if (volumeMetrics.average < 1.0) {
        setState((prev) => ({
          ...prev,
          analysisError: "Recording too quiet. Speak louder and closer to the microphone.",
        }));
        return null;
      }

      return {
        volume: volumeMetrics,
        speechRate: analyzeSpeechRate(audioBuffer),
        pauses: analyzePauses(audioBuffer),
        clarity: analyzeClarity(audioBuffer),
      };
    } catch (error) {
      console.error("Error processing audio:", error);
      setState((prev) => ({
        ...prev,
        analysisError: "Failed to analyze audio. Please try again.",
      }));
      return null;
    }
  }, []);

  const analyzeVolume = (audioBuffer) => {
    const rawData = audioBuffer.getChannelData(0);
    const windowSize = Math.floor(audioBuffer.sampleRate * 0.05);
    const volumeWindows = [];
    let volumePeaks = 0;

    for (let i = 0; i < rawData.length; i += windowSize) {
      let sumOfSquares = 0;
      const limit = Math.min(i + windowSize, rawData.length);
      for (let j = i; j < limit; j++) {
        sumOfSquares += rawData[j] ** 2;
      }
      const rms = Math.sqrt(sumOfSquares / (limit - i));
      volumeWindows.push(rms);
      if (rms > 0.6) volumePeaks++;
    }

    const nonSilentWindows = volumeWindows.filter((vol) => vol > 0.01);
    const windowsToAnalyze = nonSilentWindows.length > 0 ? nonSilentWindows : volumeWindows;
    const avgVolume = windowsToAnalyze.reduce((sum, vol) => sum + vol, 0) / windowsToAnalyze.length;
    const variance = calculateVariance(windowsToAnalyze);
    const score = Math.round(
      (avgVolume <= 0.05 ? 50 : avgVolume <= 0.3 ? 100 - Math.abs(0.2 - avgVolume) * 200 : Math.max(50, 100 - (avgVolume - 0.3) * 300)) * 0.6 +
      (variance < 0.001 ? 60 : variance <= 0.05 ? 100 - Math.abs(0.025 - variance) * 1000 : Math.max(60, 100 - (variance - 0.05) * 500)) * 0.4
    );

    return { average: avgVolume * 100, peaks: volumePeaks, variance, score };
  };

  const analyzeSpeechRate = (audioBuffer) => {
    const rawData = audioBuffer.getChannelData(0);
    const windowSize = Math.floor(audioBuffer.sampleRate * 0.05);
    let speechSegments = 0;
    let consecutiveSpeechWindows = 0;
    let consecutiveSilenceWindows = 0;

    for (let i = 0; i < rawData.length; i += windowSize) {
      let windowSum = 0;
      const limit = Math.min(i + windowSize, rawData.length);
      for (let j = i; j < limit; j++) {
        windowSum += Math.abs(rawData[j]);
      }
      const windowAvg = windowSum / (limit - i);

      if (windowAvg > SILENCE_THRESHOLD) {
        consecutiveSpeechWindows++;
        consecutiveSilenceWindows = 0;
        if (consecutiveSpeechWindows === 3) speechSegments++;
      } else {
        consecutiveSilenceWindows++;
        if (consecutiveSilenceWindows >= 2) consecutiveSpeechWindows = 0;
      }
    }

    speechSegments = Math.max(1, speechSegments);
    const durationInMinutes = Math.max(0.1, audioBuffer.duration / 60);
    const estimatedWords = Math.max(5, Math.round(speechSegments * 1.5));
    const wpm = Math.min(220, Math.round(estimatedWords / durationInMinutes));
    const score = wpm < 100 ? Math.max(60, Math.round(60 + (wpm - 60) * 0.5)) : wpm <= 160 ? Math.round(80 + (wpm - 100) * 0.33) : Math.max(60, Math.round(100 - (wpm - 160) * 0.25));

    return { wpm, speechSegments, score };
  };

  const analyzePauses = (audioBuffer) => {
    const rawData = audioBuffer.getChannelData(0);
    let pauseCount = 0;
    let currentPauseLength = 0;
    const pauseLengths = [];

    for (let i = 0; i < rawData.length; i++) {
      if (Math.abs(rawData[i]) < 0.05) {
        currentPauseLength++;
      } else if (currentPauseLength > 0) {
        const pauseMs = (currentPauseLength / audioBuffer.sampleRate) * 1000;
        if (pauseMs > 300) {
          pauseCount++;
          pauseLengths.push(pauseMs);
        }
        currentPauseLength = 0;
      }
    }

    const avgPauseLength = pauseLengths.length > 0 ? pauseLengths.reduce((sum, len) => sum + len, 0) / pauseLengths.length : 0;
    const idealPauseFrequency = audioBuffer.duration / 6;
    const pauseFrequencyScore = Math.max(60, 100 - (Math.abs(pauseCount - idealPauseFrequency) / idealPauseFrequency) * 40);
    const pauseLengthScore = avgPauseLength < 300 ? 70 : avgPauseLength <= 1500 ? 100 - (Math.abs(1000 - avgPauseLength) / 1000) * 30 : Math.max(60, 100 - (avgPauseLength - 1500) / 500);
    const score = Math.round(pauseFrequencyScore * 0.6 + pauseLengthScore * 0.4);

    return { count: pauseCount, avgLength: avgPauseLength, score };
  };

  const analyzeClarity = (audioBuffer) => {
    const rawData = audioBuffer.getChannelData(0);
    let zeroCrossings = 0;
    for (let i = 1; i < rawData.length; i++) {
      if ((rawData[i] >= 0 && rawData[i - 1] < 0) || (rawData[i] < 0 && rawData[i - 1] >= 0)) zeroCrossings++;
    }

    const zeroCrossingRate = zeroCrossings / audioBuffer.duration;
    const frameSize = Math.floor(audioBuffer.sampleRate * 0.02);
    const frameEnergies = [];

    for (let i = 0; i < rawData.length; i += frameSize) {
      let energy = 0;
      const limit = Math.min(i + frameSize, rawData.length);
      for (let j = i; j < limit; j++) {
        energy += rawData[j] ** 2;
      }
      frameEnergies.push(energy / (limit - i));
    }

    const energyVariance = calculateVariance(frameEnergies);
    let score = 75;
    if (zeroCrossingRate > 1000 && zeroCrossingRate < 3000) score += 10;
    else if (zeroCrossingRate < 500 || zeroCrossingRate > 4000) score -= 10;
    if (energyVariance > 0.01) score += 10;
    else if (energyVariance < 0.001) score -= 10;
    score = Math.max(60, Math.min(100, score));

    return { zeroCrossingRate, energyVariance, score };
  };

  // Feedback Generation
  const generateFeedbackData = useCallback(
    (metrics, recordingTime, promptIndex, transcript) => {
      if (!metrics)
        return {
          pace: 70,
          clarity: 70,
          confidence: 70,
          fillerWords: 1,
          paceAnalysis: "Using default metrics due to analysis failure.",
          clarityAnalysis: "Using default metrics due to analysis failure.",
          confidenceAnalysis: "Using default metrics due to analysis failure.",
          fillerWordsAnalysis: "Minimal filler words detected.",
          transcript: transcript.trim() || "No transcript available",
          timestamp: new Date().toISOString(),
          promptUsed: SPEECH_PROMPTS[promptIndex],
          rawMetrics: null,
        };

      const pace = metrics.speechRate.score;
      const clarity = metrics.clarity.score;
      const confidence = metrics.volume.score;
      const estimatedFillerWords = Math.max(1, Math.min(10, Math.round((metrics.speechRate.speechSegments - metrics.pauses.count) * 0.2)));

      return {
        pace,
        clarity,
        confidence,
        fillerWords: estimatedFillerWords,
        paceAnalysis: metrics.speechRate.wpm < 5 ? "Speech too short for pace analysis." : metrics.speechRate.wpm < 100 ? `Speaking rate is ${Math.round(metrics.speechRate.wpm)} WPM, slower than ideal.` : metrics.speechRate.wpm > 180 ? `Speaking rate is ${Math.round(metrics.speechRate.wpm)} WPM, faster than ideal.` : pace > 90 ? `Excellent pace at ${Math.round(metrics.speechRate.wpm)} WPM.` : pace > 80 ? `Good pace at ${Math.round(metrics.speechRate.wpm)} WPM.` : pace > 70 ? `Decent pace at ${Math.round(metrics.speechRate.wpm)} WPM.` : `Pace of ${Math.round(metrics.speechRate.wpm)} WPM needs work.`,
        clarityAnalysis: clarity > 90 ? "Exceptional clarity." : clarity > 80 ? "Good clarity." : clarity > 70 ? "Adequate clarity." : "Work on speaking more clearly.",
        confidenceAnalysis: confidence > 90 ? `Highly confident delivery. ${metrics.volume.variance < 0.001 ? "Little volume variation." : metrics.volume.variance > 0.05 ? "Significant volume variation." : "Good volume variation."}` : confidence > 80 ? `Good confidence. ${metrics.volume.variance < 0.001 ? "Little volume variation." : metrics.volume.variance > 0.05 ? "Significant volume variation." : "Good volume variation."}` : confidence > 70 ? `Moderate confidence. ${metrics.volume.variance < 0.001 ? "Little volume variation." : metrics.volume.variance > 0.05 ? "Significant volume variation." : "Good volume variation."}` : `Build confidence. ${metrics.volume.variance < 0.001 ? "Little volume variation." : metrics.volume.variance > 0.05 ? "Significant volume variation." : "Good volume variation."}`,
        fillerWordsAnalysis: estimatedFillerWords < 3 ? `Estimated ${estimatedFillerWords} filler words. Excellent.` : estimatedFillerWords < 5 ? `Estimated ${estimatedFillerWords} filler words. Practice pausing.` : estimatedFillerWords < 7 ? `Estimated ${estimatedFillerWords} filler words. Record to monitor.` : `Estimated ${estimatedFillerWords} filler words. Replace with pauses.`,
        transcript: transcript.trim() || "No transcript available",
        timestamp: new Date().toISOString(),
        promptUsed: SPEECH_PROMPTS[promptIndex],
        rawMetrics: metrics,
      };
    },
    []
  );

  // Recording Control
  const toggleRecording = useCallback(async () => {
    if (state.isRecording) {
      mediaRecorderRef.current?.stop();
      recognitionRef.current?.stop();
      setState((prev) => ({ ...prev, isRecording: false, isTranscribing: false }));
    } else {
      setState((prev) => ({
        ...prev,
        recordingTime: 0,
        showFeedback: false,
        feedbackData: null,
        analysisError: null,
        transcript: "",
        interimTranscript: "",  // clear interim on new session
      }));
      transcriptRef.current = "";  // clear accumulated transcript

      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        const audioChunks = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) audioChunks.push(event.data);
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
          setState((prev) => ({ ...prev, audioBlob }));

          const metrics = await processAudioData(audioBlob);
          setTimeout(() => {
            setState((prev) => ({
              ...prev,
              feedbackData: generateFeedbackData(
                metrics || {
                  volume: { score: 70, variance: 0.02, average: 10 },
                  speechRate: { score: 70, wpm: 120, speechSegments: 5 },
                  pauses: { score: 70, count: 3, avgLength: 800 },
                  clarity: { score: 70, zeroCrossingRate: 1500, energyVariance: 0.005 },
                },
                prev.recordingTime,
                prev.activePrompt,
                prev.transcript.split("(interim)")[0].trim()
              ),
              showFeedback: true,
            }));
          }, 500);

          stream.getTracks().forEach((track) => track.stop());
        };

        mediaRecorder.start(1000);
        setState((prev) => ({ ...prev, isRecording: true }));

        if (recognitionRef.current) {
          recognitionRef.current.start();
          setState((prev) => ({ ...prev, isTranscribing: true }));
        }
      } catch (error) {
        console.error("Error accessing microphone:", error);
        setState((prev) => ({
          ...prev,
          analysisError: "Could not access microphone. Check permissions.",
        }));
      }
    }
  }, [state.isRecording, processAudioData, generateFeedbackData]);

  const resetPractice = useCallback(() => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
    setState((prev) => ({
      ...prev,
      recordingTime: 0,
      isRecording: false,
      showFeedback: false,
      feedbackData: null,
      audioBlob: null,
      analysisError: null,
      transcript: "",
      isTranscribing: false,
      activePrompt: (prev.activePrompt + 1) % SPEECH_PROMPTS.length,
    }));
  }, []);

  // Animation Variants
  const containerVariants = useMemo(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
    }),
    []
  );

  return (
    <section id="playground" ref={sectionRef} className="relative py-20 px-4 overflow-hidden">
      <div className="practice-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-purple-900/10 to-black/0 pointer-events-none" />
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: 0.1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
      />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500 purple-glow">
            Speech Practice Playground
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Try our interactive speech practice tool. Get real-time feedback on your communication skills.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-8 backdrop-blur-sm">
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-2xl font-bold mb-2 text-white">Practice Prompt</h3>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-blue-500/20">
                <p className="text-lg text-gray-200">{SPEECH_PROMPTS[state.activePrompt]}</p>
              </div>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300 font-medium">Recording Time</span>
                <span className="text-gray-300 font-mono">{formatTime(state.recordingTime)}</span>
              </div>
              <div className="speech-meter w-full mb-6">
                <div className="speech-meter-fill" style={{ width: `${(state.recordingTime / MAX_RECORDING_TIME) * 100}%` }} />
              </div>
              {state.isRecording && (
                <div className="mt-4">
                  <h4 className="text-sm text-gray-400 mb-1">Live Transcript</h4>
                  <div className="bg-gray-800/50 p-3 rounded-lg border border-gray-700/50 h-20 overflow-y-auto">
                    <p className="text-gray-300 text-sm">
                      {transcript || interimTranscript ?
                        `${transcript}${interimTranscript ? ' ' + interimTranscript : ''}`.trim() :
                        "Listening..."}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
            <motion.div variants={itemVariants} className="flex justify-center">
              <button
                onClick={toggleRecording}
                className={`relative rounded-full w-16 h-16 flex items-center justify-center mr-2 overflow-hidden ${state.isRecording ? "bg-gray-600 hover:bg-gray-700" : "bg-gradient-to-r from-red-500 to-purple-500 hover:from-red-600 hover:to-purple-600"} transition-all duration-300`}
              >
                {state.isRecording ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                    <rect x="6" y="6" width="12" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
                    <path d="M12 15c1.66 0 3-1.34 3-3V6c0-1.66-1.34-3-3-3S9 4.34 9 6v6c0 1.66 1.34 3 3 3z" />
                    <path d="M17 12c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-2.08c3.39-.49 6-3.39 6-6.92h-2z" />
                  </svg>
                )}
                {state.isRecording && (
                  <>
                    <motion.div
                      className="absolute inset-0 border-2 border-red-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="recording-wave" />
                  </>
                )}
              </button>
              <button onClick={resetPractice} className="bg-gray-700/50 hover:bg-gray-700/70 text-white rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 5V2L8 6l4 4V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
            <AnimatePresence mode="wait">
              {!state.showFeedback ? (
                <motion.div
                  key="instructions"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-8 backdrop-blur-sm h-full flex flex-col justify-center items-center"
                >
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">How It Works</h3>
                    <ol className="text-left text-gray-300 space-y-3 mb-6">
                      <li className="flex items-start">
                        <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">1</span>
                        <span>Click the microphone to start recording</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">2</span>
                        <span>Practice speaking using the prompt</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-500/20 text-blue-400 rounded-full w-6 h-6 flex items-center justify-center mr-2 mt-0.5">3</span>
                        <span>Stop recording to see feedback</span>
                      </li>
                    </ol>
                    <p className="text-gray-400 text-sm italic">Note: This is a demo. Sign up for full analysis.</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="feedback"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-[#131419]/80 border border-gray-700/30 rounded-xl p-8 backdrop-blur-sm feedback-card"
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">Your Speech Feedback</h3>
                  {state.analysisError ? (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg mb-6">
                      <p className="text-red-400">{state.analysisError}</p>
                      <p className="text-sm text-gray-400 mt-2">Try again or check microphone settings.</p>
                    </div>
                  ) : state.feedbackData ? (
                    <div className="space-y-6">
                      <div className="mb-8">
                        <h3 className="text-lg text-gray-300 mb-2 font-semibold">Transcript</h3>
                        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 max-h-32 overflow-y-auto">
                          <p className="text-gray-300 text-sm italic">
                            {state.feedbackData.transcript !== "No transcript available" ? state.feedbackData.transcript : "No transcript available. Speak clearly or check microphone."}
                          </p>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Speaking Pace</span>
                          <span className="text-gray-300 font-mono">{state.feedbackData.pace}%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${state.feedbackData.pace}%` }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{state.feedbackData.paceAnalysis}</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Clarity</span>
                          <span className="text-gray-300 font-mono">{state.feedbackData.clarity}%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${state.feedbackData.clarity}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                            className="bg-gradient-to-r from-green-500 to-teal-500 h-3 rounded-full"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{state.feedbackData.clarityAnalysis}</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Confidence</span>
                          <span className="text-gray-300 font-mono">{state.feedbackData.confidence}%</span>
                        </div>
                        <div className="w-full bg-gray-700/30 rounded-full h-3">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${state.feedbackData.confidence}%` }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                            className="bg-gradient-to-r from-yellow-500 to-amber-500 h-3 rounded-full"
                          />
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{state.feedbackData.confidenceAnalysis}</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300">Filler Words</span>
                          <span className="text-gray-300 font-mono">{state.feedbackData.fillerWords}</span>
                        </div>
                        <div className="flex gap-1">
                          {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className={`h-6 w-full rounded ${i < state.feedbackData.fillerWords ? "bg-red-500/70" : "bg-gray-700/30"}`} />
                          ))}
                        </div>
                        <p className="text-sm text-gray-400 mt-1">{state.feedbackData.fillerWordsAnalysis}</p>
                      </div>
                      <div className="mt-8 pt-4 border-t border-gray-700/30">
                        <p className="text-xs text-gray-400">Analysis completed at: {new Date(state.feedbackData.timestamp).toLocaleTimeString()}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-400">Processing your speech...</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-300 mb-6">Ready to unlock your full speaking potential?</p>
          <Link href="/sign-up">
            <GradientButton text="Get Full Analysis" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default SpeechPracticePlayground;