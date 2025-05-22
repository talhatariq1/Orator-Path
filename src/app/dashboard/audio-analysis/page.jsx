"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@clerk/nextjs";
import { generateAnalysisPDF } from "../../../utils/pdfGenerator";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import DashboardPageWrapper from "../../components/dashboard/DashboardPageWrapper";
import WidgetCard from "../../components/dashboard/ui/WidgetCard";
import { WavyBackground } from "../../../components/ui/wavy-background.js";

export default function AudioAnalysis() {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("transcript");
  const [processingAnimation, setProcessingAnimation] = useState(false);

  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [audioSource, setAudioSource] = useState("upload");
  const [isResetMode, setIsResetMode] = useState(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const timerIntervalRef = useRef(null);
  const audioUrlRef = useRef(null);
  const streamRef = useRef(null);
  const canvasRef = useRef(null);
  const audioAnalyserRef = useRef(null);
  const visualizationIntervalRef = useRef(null);
  const fileInputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isPdfGenerating, setIsPdfGenerating] = useState(false);

  const { user, isLoaded } = useUser();

  useEffect(() => {
    return () => {
      if (visualizationIntervalRef.current) {
        clearInterval(visualizationIntervalRef.current);
      }
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioAnalyserRef.current?.audioContext?.state !== 'closed') {
        audioAnalyserRef.current?.audioContext?.close();
      }
      if (audioUrlRef.current) {
        URL.revokeObjectURL(audioUrlRef.current);
      }
    };
  }, []);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setUploadProgress(0);
    if (event.target.files[0]) {
        simulateUploadProgress();
    }
  };

  const toggleAudioSource = (source) => {
    if (source !== audioSource) {
      if (audioSource === "record" && isRecording) {
        stopRecording();
      }
      setAudioSource(source);
      setFile(null);
      setAnalysis(null);
      setError("");
      setUploadProgress(0);
    }
  };

  const startRecording = async () => {
    try {
      audioChunksRef.current = [];
      setRecordingTime(0);
      setError("");
      setIsResetMode(false);
      setFile(null);
      setAnalysis(null);

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      streamRef.current = stream;
      setupAudioVisualization(stream);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        const audioUrl = URL.createObjectURL(audioBlob);
        audioUrlRef.current = audioUrl;
        const audioFile = new File([audioBlob], "recording.wav", { type: 'audio/wav' });
        setFile(audioFile);

        stream.getTracks().forEach(track => track.stop());
        streamRef.current = null; // Clear the stream ref

        if (visualizationIntervalRef.current) {
          clearInterval(visualizationIntervalRef.current);
          visualizationIntervalRef.current = null;
        }
        if (audioAnalyserRef.current?.audioContext) {
          if (audioAnalyserRef.current.audioContext.state !== 'closed') {
            audioAnalyserRef.current.audioContext.close();
          }
          audioAnalyserRef.current = null; // Clear the analyser ref
        }
        if (canvasRef.current) {
          const canvas = canvasRef.current;
          const ctx = canvas.getContext('2d');
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = 'rgba(17, 24, 39, 0.9)';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      };
      mediaRecorder.start(1000);
      setIsRecording(true);
      timerIntervalRef.current = setInterval(() => {
        setRecordingTime(prevTime => prevTime + 1);
      }, 1000);
    } catch (err) {
      setError(`Microphone access error: ${err.message}`);
      console.error("Microphone error:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    }
  };

  const resetRecording = () => {
    setIsResetMode(true);
    if (isRecording) {
      stopRecording(); // This will trigger onstop which handles cleanup
    } else {
      // If not recording, but things might be active (e.g., after stop but before analysis)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
        streamRef.current = null;
      }
      if (visualizationIntervalRef.current) {
        clearInterval(visualizationIntervalRef.current);
        visualizationIntervalRef.current = null;
      }
      if (audioAnalyserRef.current?.audioContext?.state !== 'closed') {
        audioAnalyserRef.current?.audioContext?.close();
        audioAnalyserRef.current = null;
      }
    }

    audioChunksRef.current = [];
    setRecordingTime(0);
    setFile(null);
    setError("");
    setAnalysis(null);

    if (audioUrlRef.current) {
      URL.revokeObjectURL(audioUrlRef.current);
      audioUrlRef.current = null;
    }
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(17, 24, 39, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an audio file or record your speech first.");
      return;
    }
    if (!isLoaded) {
        setError("User information is still loading. Please wait a moment.");
        return;
    }
    if (!user || !user.id) {
      setError("You must be logged in to analyze audio. Please log in and try again.");
      return;
    }

    setLoading(true);
    setProcessingAnimation(true);
    setError("");
    setAnalysis(null);

    const formData = new FormData();
    formData.append("audio", file);
    formData.append("userId", user.id);

    try {
      const response = await fetch("/api/transcribe", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: "Failed to parse error response from server."}));
        console.error("Error from /api/transcribe:", errorData);
        throw new Error(errorData.error || errorData.details || "Failed to analyze audio.");
      }

      const result = await response.json();
      console.log("Analysis result received in frontend:", JSON.stringify(result, null, 2)); // CRUCIAL DEBUG LOG
      setAnalysis(result);
      setActiveTab("transcript");
    } catch (err) {
      console.error("Error during handleUpload:", err);
      setError(err.message || "An unexpected error occurred during analysis.");
      setAnalysis(null); // Ensure analysis is null on error
    } finally {
      setTimeout(() => {
        setProcessingAnimation(false);
        setLoading(false);
      }, 800);
    }
  };

  const formatNumber = (num) => {
    if (num === null || num === undefined || isNaN(parseFloat(num))) return "0.00";
    return Number(num).toFixed(2);
  };

  const safeGet = (obj, path, defaultValue = null) => {
    if (!obj || typeof obj !== 'object') return defaultValue;
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

  const downloadRecordedAudio = () => {
    if (!file || !audioUrlRef.current) {
        if (file && audioSource === "record" && !audioUrlRef.current) {
            const tempUrl = URL.createObjectURL(file);
            const a = document.createElement("a");
            a.href = tempUrl;
            a.download = "recorded-speech.wav";
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(tempUrl);
            return;
        }
        console.error("No file or audio URL to download for recorded audio.");
        return;
    }
    const a = document.createElement("a");
    a.href = audioUrlRef.current;
    a.download = "recorded-speech.wav";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadAnalysisResults = () => {
    if (!analysis) return;
    // Create a deep copy to avoid modifying the state if server returns complex objects
    const reportData = JSON.parse(JSON.stringify(analysis));
    // Add a date to the report
    const report = {
        analysisDate: new Date().toLocaleString(),
        ...reportData
    };
    delete report.processingErrors; // Don't include internal processing errors

    const jsonString = JSON.stringify(report, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "speech-analysis-report.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
  };

  const downloadPdfReport = async () => {
    if (!analysis) return;
    try {
      setIsPdfGenerating(true);

      // Dynamically import jsPDF
      const jsPDFModule = await import('jspdf');
      const jsPDF = jsPDFModule.default;

      // Pass jsPDF to the generateAnalysisPDF function
      const doc = generateAnalysisPDF(analysis, jsPDF);

      if (doc) {
        doc.save('speech-analysis-report.pdf');
      } else {
        console.error('Failed to generate PDF');
        alert('Failed to generate PDF report. Please try again.');
      }
    } catch (err) {
      console.error('Error generating PDF:', err);
      alert('There was an error generating the PDF. Please try again.');
    } finally {
      setIsPdfGenerating(false);
    }
  };

  const setupAudioVisualization = (stream) => {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) {
        setError("AudioContext not supported. Visualization unavailable.");
        return;
    }
    if (audioAnalyserRef.current?.audioContext && audioAnalyserRef.current.audioContext.state !== 'closed') {
        audioAnalyserRef.current.audioContext.close();
    }

    const audioContext = new AudioContextClass();
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    const source = audioContext.createMediaStreamSource(stream);
    source.connect(analyser);
    audioAnalyserRef.current = { analyser, dataArray, bufferLength, audioContext, source };

    if (visualizationIntervalRef.current) clearInterval(visualizationIntervalRef.current);

    visualizationIntervalRef.current = setInterval(() => {
      if (!canvasRef.current || !audioAnalyserRef.current) return;
      const { analyser, dataArray } = audioAnalyserRef.current;
      analyser.getByteFrequencyData(dataArray);
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      const width = canvas.width;
      const height = canvas.height;
      const samples = 40;
      ctx.fillStyle = 'rgba(17, 24, 39, 0.3)';
      ctx.fillRect(0, 0, width, height);
      const barWidth = width / samples;
      const barGap = 1;
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.3)';
      ctx.lineWidth = 1;
      ctx.moveTo(0, height / 2);
      ctx.lineTo(width, height / 2);
      ctx.stroke();
      const blockSize = Math.floor(dataArray.length / samples);
      for (let i = 0; i < samples; i++) {
        let sum = 0;
        for (let j = 0; j < blockSize; j++) sum += dataArray[i * blockSize + j];
        const value = sum / blockSize;
        const percent = value / 255;
        const barHeight = percent * (height / 2) * 0.95;
        const gradientTop = ctx.createLinearGradient(0, height/2, 0, height/2 - barHeight);
        gradientTop.addColorStop(0, 'rgba(167, 139, 250, 0.5)');
        gradientTop.addColorStop(0.5, 'rgba(139, 92, 246, 0.7)');
        gradientTop.addColorStop(1, 'rgba(124, 58, 237, 0.9)');
        const gradientBottom = ctx.createLinearGradient(0, height/2, 0, height/2 + barHeight);
        gradientBottom.addColorStop(0, 'rgba(167, 139, 250, 0.5)');
        gradientBottom.addColorStop(0.5, 'rgba(139, 92, 246, 0.7)');
        gradientBottom.addColorStop(1, 'rgba(124, 58, 237, 0.9)');
        ctx.fillStyle = gradientTop;
        ctx.fillRect(i * barWidth + barGap, height/2 - barHeight, barWidth - barGap * 2, barHeight);
        ctx.fillStyle = gradientBottom;
        ctx.fillRect(i * barWidth + barGap, height/2, barWidth - barGap * 2, barHeight);
        if (percent > 0.5) {
          ctx.shadowColor = 'rgba(139, 92, 246, 0.5)';
          ctx.shadowBlur = 10 * percent;
          ctx.fillRect(i * barWidth + barGap, height/2 - barHeight, barWidth - barGap * 2, barHeight * 2);
          ctx.shadowBlur = 0;
        }
      }
    }, 30);
  };

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => { setIsDragging(false); };
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile.type.startsWith('audio/')) {
        setFile(droppedFile); simulateUploadProgress();
      } else { setError("Invalid file type. Please upload an audio file."); }
    }
  };
  const simulateUploadProgress = () => {
    setUploadProgress(0); let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 10;
      if (currentProgress >= 100) { setUploadProgress(100); clearInterval(interval); }
      else { setUploadProgress(currentProgress); }
    }, 100);
  };
  const handleEnhancedFileChange = (e) => { handleFileChange(e); };
  const triggerFileInput = () => { if (fileInputRef.current) fileInputRef.current.click(); };

  // --- RENDER FUNCTIONS ---
  // (renderAudioInputSelectors and ProcessingAnimation are mostly UI, should be fine)
  // The renderTranscript, renderVoiceAnalysis, renderTextAnalysis, renderRecommendations
  // are critical for displaying data.

  const renderAudioInputSelectors = () => (
    <div className="mb-6">
      <motion.div
        className="flex rounded-xl overflow-hidden mb-6 bg-gray-900/40 p-1 border border-gray-700/30"
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      >
        <motion.button
          onClick={() => toggleAudioSource("upload")}
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${audioSource === "upload" ? "bg-gradient-to-r from-purple-900/70 to-purple-800/50 text-purple-200 shadow-lg shadow-purple-900/20" : "bg-transparent text-gray-400 hover:bg-gray-800/30"}`}
          whileHover={{ scale: audioSource !== "upload" ? 1.02 : 1 }} whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
          <span className="font-medium">Upload Audio</span>
        </motion.button>
        <motion.button
          onClick={() => toggleAudioSource("record")}
          className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${audioSource === "record" ? "bg-gradient-to-r from-purple-900/70 to-purple-800/50 text-purple-200 shadow-lg shadow-purple-900/20" : "bg-transparent text-gray-400 hover:bg-gray-800/30"}`}
          whileHover={{ scale: audioSource !== "record" ? 1.02 : 1 }} whileTap={{ scale: 0.98 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>
          <span className="font-medium">Record Audio</span>
        </motion.button>
      </motion.div>
      <AnimatePresence mode="wait">
        {audioSource === "upload" ? (
          <motion.div key="upload" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-200">Upload Audio File</h3>
                {file && (<span className="text-sm text-gray-400">{file.name}</span>)}
              </div>
              <motion.div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${isDragging ? 'border-purple-500 bg-purple-900/20' : 'border-gray-700/50 hover:border-purple-500/50'}`}
                onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop} whileHover={{ boxShadow: "0 0 15px rgba(139, 92, 246, 0.2)" }}
              >
                <input ref={fileInputRef} type="file" accept="audio/*" onChange={handleEnhancedFileChange} className="hidden" />
                <motion.div className="flex flex-col items-center justify-center gap-3" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <motion.div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center text-purple-400 cursor-pointer" whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }} whileTap={{ scale: 0.95 }} onClick={triggerFileInput}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                  </motion.div>
                  <div className="text-center">
                    <p className="text-gray-300 mb-1">Drag and drop your audio file here or</p>
                    <button onClick={triggerFileInput} className="text-purple-400 hover:text-purple-300 font-medium">browse files</button>
                    <p className="text-gray-500 text-sm mt-2">Supports MP3, WAV, M4A, FLAC</p>
                  </div>
                </motion.div>
                {uploadProgress > 0 && uploadProgress < 100 && (
                  <div className="mt-4">
                    <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                      <motion.div className="h-full bg-gradient-to-r from-purple-600 to-blue-500" initial={{ width: 0 }} animate={{ width: `${uploadProgress}%` }} transition={{ duration: 0.5 }}/>
                    </div>
                    <p className="text-sm text-gray-400 mt-1">Uploading... {uploadProgress}%</p>
                  </div>
                )}
                {file && uploadProgress === 100 && (
                  <motion.div className="mt-4 flex flex-col items-center justify-center gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <div className="flex items-center justify-center gap-2 text-green-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                      <span>File ready for analysis</span>
                    </div>
                    <motion.button
                      onClick={handleUpload} disabled={loading || !isLoaded || !user}
                      className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-purple-600/20 disabled:from-gray-500 disabled:to-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                      whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, type: 'spring', stiffness: 300 }}
                    >
                      <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-purple-600/30 overflow-hidden" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 2.5, ease: [0.4, 0, 0.6, 1] }} />
                      <motion.div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-fuchsia-500/10 to-violet-600/0" animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1], rotate: [0, 5, 0], }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }} />
                      <motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/10 to-indigo-500/0" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.05, 1, 1.05], x: [-5, 5, -5], }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }} />
                      <div className="flex items-center justify-center gap-2 relative z-10">
                        {loading ? (<><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span>Processing...</span></>)
                         : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg><span>Analyze Speech</span></>)}
                      </div>
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
              {file && (<div className="mt-4"><audio src={URL.createObjectURL(file)} controls className="w-full" /></div>)}
            </div>
          </motion.div>
        ) : (
          <motion.div key="record" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
            <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-gray-200">Record Your Speech</h3>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${isRecording ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                  <span className="text-gray-300 font-mono">{formatTime(recordingTime)}</span>
                </div>
              </div>
              <div className="relative h-48 mb-6 bg-gray-900/60 rounded-lg overflow-hidden border border-gray-800/50">
                <canvas ref={canvasRef} className="w-full h-full" width="800" height="200"></canvas>
                {!isRecording && !file && !isResetMode && (<div className="absolute inset-0 flex items-center justify-center text-gray-500"><p>Tap record to start</p></div>)}
                {!isRecording && isResetMode && (<div className="absolute inset-0 flex items-center justify-center text-gray-500"><p>Ready to record again</p></div>)}
                {!isRecording && file && !isResetMode && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div className="bg-gradient-to-br from-gray-900/90 to-purple-900/40 px-6 py-4 rounded-xl border border-purple-500/30 shadow-lg backdrop-blur-sm" initial={{ opacity: 0, scale: 0.9, y: 10 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, type: 'spring', bounce: 0.3 }}>
                      <motion.div className="flex justify-center mb-3" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }}>
                        <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-12 h-12 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-white"><path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" /></svg>
                        </div>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.4 }}>
                        <h3 className="text-center text-lg font-bold text-white mb-1">Recording Complete!</h3>
                        <p className="text-center text-gray-300 text-sm mb-3">Your audio has been successfully recorded</p>
                        <div className="flex justify-center">
                          <motion.div className="bg-purple-600/20 text-purple-300 px-3 py-1.5 rounded-lg font-medium text-xs flex items-center gap-1.5" whileHover={{ scale: 1.03, backgroundColor: 'rgba(147, 51, 234, 0.3)' }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                            Ready for analysis
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                )}
              </div>
              {file && !isRecording && (
                <motion.div className="mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <audio src={audioUrlRef.current || URL.createObjectURL(file)} controls className="w-full" />
                  <div className="mt-3 flex justify-end">
                    <motion.button onClick={downloadRecordedAudio} className="text-purple-400 hover:text-purple-300 flex items-center gap-1 bg-purple-900/20 px-3 py-1.5 rounded-lg transition-colors hover:bg-purple-900/30" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                      Download Recording
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {file && !isRecording && (
                <motion.div className="flex justify-center mb-6" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                  <motion.button
                    onClick={handleUpload} disabled={loading || !isLoaded || !user}
                    className="relative group overflow-hidden bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-purple-600/20 disabled:from-gray-500 disabled:to-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, type: 'spring', stiffness: 300 }}
                  >
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600/30 via-indigo-500/20 to-purple-600/30 overflow-hidden" initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ repeat: Infinity, duration: 2.5, ease: [0.4, 0, 0.6, 1] }}/>
                    <motion.div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-fuchsia-500/10 to-violet-600/0" animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.05, 1], rotate: [0, 5, 0], }} transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }} />
                    <motion.div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/0 via-purple-500/10 to-indigo-500/0" animate={{ opacity: [0.3, 0.6, 0.3], scale: [1.05, 1, 1.05], x: [-5, 5, -5], }} transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut', delay: 0.5 }} />
                    <motion.div className="absolute -inset-1 rounded-lg opacity-0 bg-purple-500/20 blur-sm" animate={{ opacity: [0, 0.5, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut', delay: 1 }} />
                    <div className="flex items-center justify-center gap-2 relative z-10">
                      {loading ? (<><svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><span>Processing...</span></>)
                       : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="8"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg><span>Analyze Speech</span></>)}
                    </div>
                  </motion.button>
                </motion.div>
              )}
              <div className="flex justify-center items-center gap-4">
                {!isRecording ? (
                  <div className="flex items-center gap-4">
                    <motion.button onClick={startRecording} className="bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-red-900/30" whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(239, 68, 68, 0.4)" }} whileTap={{ scale: 0.95 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" /><path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" /></svg>
                    </motion.button>
                    {file && (<motion.button onClick={resetRecording} className="bg-gradient-to-r from-cyan-600 to-cyan-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-cyan-900/30" whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(8, 145, 178, 0.4)" }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" /></svg>
                    </motion.button>)}
                  </div>
                ) : (
                  <motion.button onClick={stopRecording} className="bg-gradient-to-r from-gray-700 to-gray-600 text-white rounded-full w-20 h-20 flex items-center justify-center shadow-lg shadow-gray-900/30" whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(75, 85, 99, 0.4)" }} whileTap={{ scale: 0.95 }} initial={{ scale: 1 }} animate={{ scale: [1, 1.05, 1], boxShadow: ["0 0 0 rgba(239, 68, 68, 0.4)","0 0 20px rgba(239, 68, 68, 0.4)","0 0 0 rgba(239, 68, 68, 0.4)"]}} transition={{repeat: Infinity, duration: 2}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10"><rect x="6" y="6" width="12" height="12" rx="1" /></svg>
                  </motion.button>
                )}
                {isRecording && (
                  <motion.div className="flex flex-col items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                    <div className="flex space-x-1">{[...Array(3)].map((_, i) => (<motion.div key={i} className="w-2 h-2 bg-red-500 rounded-full" animate={{ height: ["8px", "16px", "8px"] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }}/>))}</div>
                    <p className="text-red-400 mt-2 text-sm">Recording in progress...</p>
                  </motion.div>
                )}
              </div>
              {isRecording && (<motion.p className="text-center text-gray-400 mt-4 text-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Speak clearly into your microphone. Click the stop button when finished.</motion.p>)}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  const renderErrorDisplay = (errorMessage) => (
    <div className="mt-4 p-4 bg-red-900/30 rounded-xl border border-red-700/50">
      <p className="text-red-300 font-medium">Could not load this section.</p>
      <p className="text-red-400 text-sm mt-1">Error: {errorMessage || "Unknown error."}</p>
    </div>
  );

  const renderTranscript = () => {
    if (!analysis) return null;
    if (!analysis.transcription && !analysis.transcriptAnalysis) { // If both are missing
        return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Transcript data is not available.</p>;
    }
    // Check if the transcriptAnalysis object itself has an error reported by the backend
    if (analysis.transcriptAnalysis && analysis.transcriptAnalysis.error) {
        return renderErrorDisplay(`Transcript processing failed: ${analysis.transcriptAnalysis.error}`);
    }
    if (!analysis.transcription && (!analysis.transcriptAnalysis || !analysis.transcriptAnalysis.raw_transcription)) {
        return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">No transcription text found.</p>;
    }

    return (
      <motion.div className="mt-4 overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <div className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900/80 to-gray-950/90 border border-gray-700/30 shadow-lg overflow-hidden">
          <motion.div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}></motion.div>
          <motion.div className="absolute bottom-0 left-0 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}></motion.div>
          <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
            <motion.div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.3)" }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>
            </motion.div>
            <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Speech Transcript</h2>
          </motion.div>
          <motion.div className="relative z-10 mt-2 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar bg-gray-900/30 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-gray-300 leading-relaxed whitespace-pre-line font-light tracking-wide">{analysis.transcription || "No processed transcript available."}</p>
          </motion.div>
          {analysis.transcriptAnalysis && (
            <motion.div className="mt-6 relative z-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.5 }}>
              <div className="mb-6 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40">
                <div className="flex items-center justify-between mb-3">
                  <motion.h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 flex items-center" initial={{ x: -10, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
                    <span className="bg-blue-500/20 p-1.5 rounded-md mr-2 flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg></span>
                    Coherence Score
                  </motion.h3>
                  <motion.div className="flex items-center bg-gray-800/60 px-3 py-1 rounded-full" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.4 }}>
                    <motion.span className="text-xl font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.5 }}>{formatNumber(safeGet(analysis.transcriptAnalysis, 'coherence_score', 0))}</motion.span>
                    <span className="text-gray-400 ml-1">/100</span>
                  </motion.div>
                </div>
                <div className="h-3 w-full bg-gray-800/80 rounded-full overflow-hidden shadow-inner">
                  <motion.div className="h-full rounded-full relative" style={{ backgroundColor: safeGet(analysis.transcriptAnalysis, 'coherence_score', 0) >= 70 ? '#10B981' : safeGet(analysis.transcriptAnalysis, 'coherence_score', 0) >= 40 ? '#F59E0B' : '#EF4444' }} initial={{ width: 0 }} animate={{ width: `${safeGet(analysis.transcriptAnalysis, 'coherence_score', 0)}%` }} transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}>
                    <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }}/>
                  </motion.div>
                </div>
                <div className="mt-2 text-xs text-gray-400 italic">
                  {safeGet(analysis.transcriptAnalysis, 'coherence_score', 0) >= 70 ? "Excellent coherence - your speech flows naturally and logically." : safeGet(analysis.transcriptAnalysis, 'coherence_score', 0) >= 40 ? "Moderate coherence - some improvements could enhance the flow of ideas." : "Low coherence - consider restructuring your speech for better flow."}
                </div>
              </div>
              {safeGet(analysis.transcriptAnalysis, 'raw_transcription') && safeGet(analysis.transcriptAnalysis, 'raw_transcription') !== analysis.transcription && (
                <motion.div className="mt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.4 }}>
                    <details className="group">
                      <summary className="flex items-center cursor-pointer p-2 rounded-lg hover:bg-gray-800/40 transition-colors duration-200">
                        <motion.div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30" whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 2a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg></motion.div>
                        <h3 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100 group-hover:from-blue-200 group-hover:to-blue-50 transition-all duration-300">View Original Unprocessed Transcript</h3>
                        <motion.svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 text-gray-400 group-open:rotate-180 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" whileHover={{ scale: 1.1 }}><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" /></motion.svg>
                      </summary>
                      <motion.div className="mt-3 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 border border-blue-500/20 max-h-[200px] overflow-y-auto custom-scrollbar" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} transition={{ duration: 0.3 }}>
                        <p className="text-gray-400 whitespace-pre-line font-light">{safeGet(analysis.transcriptAnalysis, 'raw_transcription', '')}</p>
                      </motion.div>
                    </details>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderVoiceAnalysis = () => {
    if (!analysis || !analysis.voiceAnalysis) {
        return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Voice analysis data is not available.</p>;
    }
    const voice = analysis.voiceAnalysis;
    if (voice.error) {
      return renderErrorDisplay(`Voice analysis failed: ${voice.error}`);
    }

    const getSpeakingRateStatus = (rate) => {
      if (rate < 2.5) return { status: 'slow', color: 'text-blue-400', message: 'Your speaking pace is slow and deliberate.' };
      if (rate > 4.0) return { status: 'fast', color: 'text-amber-400', message: 'Your speaking pace is quite fast.' };
      return { status: 'optimal', color: 'text-green-400', message: 'Your speaking pace is at an optimal rate.' };
    };
    const speakingRate = safeGet(voice, 'speaking_rate', 0);
    const rateStatus = getSpeakingRateStatus(speakingRate);

    return (
      <motion.div className="mt-4 p-6 bg-gray-900/60 rounded-xl border border-gray-700/30 shadow-lg" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex items-center mb-5">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg></div>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Voice Analysis</h2>
        </div>
        <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30 mb-6">
          <h3 className="text-gray-300 font-medium mb-3 text-sm uppercase tracking-wider">Key Metrics Summary</h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800/50">
              <div className="bg-blue-900/30 p-2 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" /></svg></div>
              <div><div className="text-gray-400 text-xs">Duration</div><div className="text-gray-200 font-medium text-lg">{formatNumber(safeGet(voice, 'duration', 0))}s</div></div>
            </div>
            <div className="flex items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800/50">
              <div className="bg-purple-900/30 p-2 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd" /></svg></div>
              <div><div className="text-gray-400 text-xs">Speaking Rate</div><div className="text-gray-200 font-medium text-lg"><span className={rateStatus.color}>{formatNumber(speakingRate)}</span> syl/s</div></div>
            </div>
            <div className="flex items-center bg-gray-900/50 p-3 rounded-lg border border-gray-800/50">
              <div className="bg-amber-900/30 p-2 rounded-full mr-3"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div>
              <div><div className="text-gray-400 text-xs">Pauses</div><div className="text-gray-200 font-medium text-lg">{safeGet(voice, 'pauses.count', 0)}</div></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30">
            <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-1.5 rounded-lg mr-2 border border-blue-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg></div><h3 className="font-medium text-blue-400">Pitch Analysis</h3></div>
            <div className="space-y-3"><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Pitch</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.average', 0))} Hz</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, (safeGet(voice, 'pitch.average', 0) / 300) * 100)}%` }}></div></div></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Pitch Range</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.min', 0))} - {formatNumber(safeGet(voice, 'pitch.max', 0))} Hz</span></div></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Variability</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pitch.variability', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-blue-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pitch.variability', 0) * 20)}%` }}></div></div></div></div> {/* Adjusted variability scale factor */}
          </div>
          <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30">
            <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-green-500/20 to-green-700/20 p-1.5 rounded-lg mr-2 border border-green-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg></div><h3 className="font-medium text-green-400">Volume Analysis</h3></div>
            <div className="space-y-3"><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Volume</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.average', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.average', 0) * 200)}%` }}></div></div></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Variability</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'volume.variability', 0))}</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-green-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'volume.variability', 0) * 200)}%` }}></div></div></div></div> {/* Adjusted volume scale factor */}
          </div>
          <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30">
            <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-amber-500/20 to-amber-700/20 p-1.5 rounded-lg mr-2 border border-amber-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-amber-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div><h3 className="font-medium text-amber-400">Pauses Analysis</h3></div>
            <div className="space-y-3"><div className="flex justify-between items-center"><span className="text-gray-400">Total Pauses</span><span className="text-gray-300 font-medium">{safeGet(voice, 'pauses.count', 0)}</span></div><div><div className="flex justify-between items-center mb-1"><span className="text-gray-400 text-sm">Average Duration</span><span className="text-gray-300 font-medium">{formatNumber(safeGet(voice, 'pauses.average_duration', 0))} seconds</span></div><div className="h-1.5 w-full bg-gray-700 rounded-full overflow-hidden"><div className="h-full bg-amber-500 rounded-full" style={{ width: `${Math.min(100, safeGet(voice, 'pauses.average_duration', 0) * 50)}%` }}></div></div></div><div className="text-gray-400 text-sm italic mt-2">{safeGet(voice, 'pauses.count', 0) < 3 ? "Few pauses detected. Consider using more pauses for emphasis." : safeGet(voice, 'pauses.count', 0) > 10 ? "Frequent pauses detected. Consider a more fluid delivery." : "Good use of pauses in your speech."}</div></div> {/* Adjusted pause duration scale */}
          </div>
          <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700/30">
            <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-1.5 rounded-lg mr-2 border border-purple-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" /></svg></div><h3 className="font-medium text-purple-400">Voice Characteristics</h3></div>
            <div className="grid grid-cols-1 gap-3"><div className="bg-gray-900/50 p-3 rounded-lg"><h4 className="text-gray-300 font-medium mb-1">Voice Quality</h4><div className="grid grid-cols-2 gap-2"><div><span className="text-gray-400 text-sm">Spectral Centroid</span><p className="text-gray-300">{formatNumber(safeGet(voice, 'voice_quality.spectral_centroid', 0))}</p></div><div><span className="text-gray-400 text-sm">Spectral Bandwidth</span><p className="text-gray-300">{formatNumber(safeGet(voice, 'voice_quality.spectral_bandwidth', 0))}</p></div></div></div><div className="bg-gray-900/50 p-3 rounded-lg"><h4 className="text-gray-300 font-medium mb-1">Gender Estimation</h4><div className="flex justify-between items-center"><span className="text-gray-300 capitalize">{safeGet(voice, 'gender_estimation.likely_gender', 'unknown')}</span><div className="bg-purple-900/30 px-2 py-0.5 rounded-full text-purple-300 text-sm">{formatNumber(safeGet(voice, 'gender_estimation.confidence', 0) * 100)}% confidence</div></div></div></div>
          </div>
        </div>
        <div className="mt-5 bg-gray-800/30 p-4 rounded-lg border border-gray-700/30">
          <div className="flex items-start"><div className="bg-blue-900/30 p-2 rounded-full mr-3 mt-0.5"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div><div><h3 className="font-medium text-blue-400 mb-1">Speaking Rate Insight</h3><p className="text-gray-400">{rateStatus.message} The optimal speaking rate for clear communication is typically between 2.5 and 4.0 syllables per second.</p></div></div>
        </div>
      </motion.div>
    );
  };

  const getEmotionColor = (emotion) => {
    const colorMap = {
      joy: 'bg-yellow-500', sadness: 'bg-blue-500', anger: 'bg-red-600',
      fear: 'bg-purple-600', surprise: 'bg-green-500', disgust: 'bg-orange-500',
      trust: 'bg-sky-500', anticipation: 'bg-teal-500', neutral: 'bg-gray-400'
    };
    return colorMap[emotion?.toLowerCase()] || 'bg-gray-500';
  };

  const renderTextAnalysis = () => {
    if (!analysis || !analysis.textAnalysis) {
        return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Text analysis data is not available.</p>;
    }
    const text = analysis.textAnalysis;
    if (text.error) {
      return renderErrorDisplay(`Text analysis failed: ${text.error}`);
    }

    return (
      <motion.div className="mt-4 p-6 bg-gray-900/30 rounded-xl border border-gray-700/30 shadow-lg overflow-hidden" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <motion.div className="flex items-center mb-4 relative z-10" initial={{ y: -10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4 }}>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg></div>
          <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Text Analysis</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <div className="flex items-center mb-3"><div className="bg-blue-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Text Statistics</h3></div>
            <p className="text-gray-300">Word Count: <span className="font-medium text-white">{safeGet(text, 'text_statistics.word_count', 0)}</span></p>
            <p className="text-gray-300">Sentence Count: <span className="font-medium text-white">{safeGet(text, 'text_statistics.sentence_count', 0)}</span></p>
            <p className="text-gray-300">Avg Words/Sentence: <span className="font-medium text-white">{formatNumber(safeGet(text, 'text_statistics.average_words_per_sentence', 0))}</span></p>
            <p className="text-gray-300">Vocabulary Richness: <span className="font-medium text-white">{formatNumber(safeGet(text, 'text_statistics.vocabulary_richness', 0))}%</span></p>
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <div className="flex items-center mb-3"><div className="bg-purple-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Filler Words</h3></div>
            <p className="text-gray-300">Total Count: <span className="font-medium text-white">{safeGet(text, 'filler_words.total_count', 0)}</span></p>
            <p className="text-gray-300">Percentage: <span className="font-medium text-white">{formatNumber(safeGet(text, 'filler_words.percentage', 0))}%</span></p>
            {Object.keys(safeGet(text, 'filler_words.occurrences', {})).length > 0 ? (<ul className="text-gray-400 mt-2 list-disc list-inside space-y-1 text-sm">{Object.entries(safeGet(text, 'filler_words.occurrences', {})).slice(0, 3).map(([word, count]) => (<li key={word}>{`"${word}" - ${count} times`}</li>))}</ul>) : <p className="text-gray-400 mt-2 text-sm italic">No significant filler words detected.</p>}
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
            <div className="flex items-center mb-3"><div className="bg-green-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Sentiment Analysis</h3></div>
            <p className="text-gray-300">Label: <span className="font-medium text-white capitalize">{safeGet(text, 'sentiment_analysis.label', 'Neutral')}</span></p>
            <p className="text-gray-300">Polarity: <span className="font-medium text-white">{formatNumber(safeGet(text, 'sentiment_analysis.polarity', 0))}</span></p>
            <p className="text-gray-300">Subjectivity: <span className="font-medium text-white">{formatNumber(safeGet(text, 'sentiment_analysis.subjectivity', 0))}</span></p>
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
            <div className="flex items-center mb-3"><div className="bg-yellow-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Content Analysis</h3></div>
            <p className="text-gray-300">Noun-Verb Ratio: <span className="font-medium text-white">{formatNumber(safeGet(text, 'content_analysis.noun_verb_ratio', 0))}</span></p>
            <p className="text-gray-300">Hesitation Patterns: <span className="font-medium text-white">{safeGet(text, 'content_analysis.hesitation_patterns', 0)}</span></p>
            <h4 className="text-gray-300 mt-2 text-sm">Common Words:</h4>
            {safeGet(text, 'content_analysis.most_common_words', []).length > 0 ? (<ul className="text-gray-400 list-disc list-inside space-y-1 text-xs">{safeGet(text, 'content_analysis.most_common_words', []).slice(0, 3).map(([w, c], i) => (<li key={i}>{`"${w}" - ${c} times`}</li>))}</ul>): <p className="text-gray-400 text-xs italic">No common words data.</p>}
          </motion.div>
          <motion.div className="col-span-1 md:col-span-2 bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            <div className="flex items-center mb-3"><div className="bg-indigo-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Emotion Analysis</h3></div>
            <p className="text-gray-300">Primary Emotion: <span className="capitalize font-medium text-white">{safeGet(text, 'emotion_analysis.primary_emotion', 'Neutral')}</span></p>
            <p className="text-gray-300 mb-2">Summary: <span className="italic text-gray-400">{safeGet(text, 'emotion_analysis.emotion_summary', 'Emotion analysis not available.')}</span></p>
            {Object.keys(safeGet(text, 'emotion_analysis.emotion_distribution', {})).length > 0 ? (
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2">
                {Object.entries(safeGet(text, 'emotion_analysis.emotion_distribution', {}))
                    .sort(([, a], [, b]) => b - a)
                    .map(([emotion, perc]) => (
                    <div key={emotion} className="flex items-center">
                        <span className="w-24 text-gray-300 capitalize text-sm">{emotion}:</span>
                        <div className="flex-1 bg-gray-700 rounded-full h-2.5 mx-2 overflow-hidden"><div className={`${getEmotionColor(emotion)} h-2.5 rounded-full`} style={{ width: `${Math.min(100, perc)}%` }} /></div>
                        <span className="text-gray-300 text-sm w-10 text-right">{formatNumber(perc)}%</span>
                    </div>
                ))}</div>
            ) : <p className="text-gray-400 mt-2 text-sm italic">Emotion distribution not available.</p>}
          </motion.div>
          <motion.div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
            <div className="flex items-center mb-3"><div className="bg-teal-900/30 p-1.5 rounded-lg mr-2"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v11.494m0 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm0 0a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" /></svg></div><h3 className="text-gray-200 text-lg font-semibold">Readability</h3></div>
            <p className="text-gray-300">Reading Level: <span className="font-medium text-white">{safeGet(text, 'readability.reading_level', 'N/A')}</span></p>
            <p className="text-gray-300">Flesch Reading Ease: <span className="font-medium text-white">{formatNumber(safeGet(text, 'readability.flesch_reading_ease', 0))}</span></p>
            <p className="text-gray-400 text-sm mt-1 italic">(Higher Flesch score means easier to read. 60-70 is plain English.)</p>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  const renderRecommendations = () => {
    if (!analysis || !analysis.recommendations) {
      return <p className="text-gray-400 mt-4 p-4 bg-gray-800/30 rounded-xl">Recommendations are not available.</p>;
    }
    // Your server.py returns the main recommendations object. Check if it contains an error from a higher level.
    if (analysis.recommendations.error) {
        return renderErrorDisplay(`Recommendations generation failed: ${analysis.recommendations.error}`);
    }

    const recommendationsData = analysis.recommendations; // This is the object { recommendations: [], performance_assessment: {}, development_plan: {} }
    const performanceAssessment = safeGet(recommendationsData, 'performance_assessment', {});
    const developmentPlan = safeGet(recommendationsData, 'development_plan', {});
    const specificRecommendations = safeGet(recommendationsData, 'recommendations', []);


    return (
      <div className="mt-4 p-4 bg-gray-900/30 rounded-xl border border-gray-700/30 shadow-lg">
        {Object.keys(performanceAssessment).length > 0 && (
            <div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40 mb-6">
            <div className="flex items-center mb-3">
                <div className="bg-gradient-to-br from-indigo-500/20 to-indigo-700/20 p-2 rounded-lg mr-3 border border-indigo-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" /></svg></div>
                <h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-100">Performance Assessment</h2>
            </div>
            <div className="mb-4">
                <div className="flex items-center justify-between mb-1"><span className="text-gray-300">Overall Score:</span><span className="text-2xl font-bold" style={{color: safeGet(performanceAssessment, 'overall_score', 0) >= 70 ? '#10B981' : safeGet(performanceAssessment, 'overall_score', 0) >= 50 ? '#F59E0B' : '#EF4444'}}>{formatNumber(safeGet(performanceAssessment, 'overall_score', 0))}/100</span></div>
                <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden shadow-inner"><motion.div className="h-3 rounded-full" style={{backgroundColor: safeGet(performanceAssessment, 'overall_score', 0) >= 70 ? '#10B981' : safeGet(performanceAssessment, 'overall_score', 0) >= 50 ? '#F59E0B' : '#EF4444'}} initial={{ width: 0 }} animate={{ width: `${safeGet(performanceAssessment, 'overall_score', 0)}%` }} transition={{ duration: 0.8, ease: "easeOut" }}></motion.div></div>
            </div>
            <p className="text-lg font-medium mb-2 text-gray-300">Performance Level: <span className="font-semibold text-white">{safeGet(performanceAssessment, 'performance_level', 'N/A')}</span></p>
            <p className="text-gray-400 mb-3 text-sm leading-relaxed">{safeGet(performanceAssessment, 'performance_description', '')}</p>
            {safeGet(performanceAssessment, 'detailed_strengths', []).length > 0 && (
                <div className="mt-5"><h3 className="font-medium text-green-400 text-lg mb-2">Your Strengths:</h3><div className="grid grid-cols-1 md:grid-cols-2 gap-3">{safeGet(performanceAssessment, 'detailed_strengths', []).map((strength, index) => (<div key={index} className="bg-green-900/20 p-3 rounded-lg border border-green-700/30 shadow-sm"><h4 className="font-semibold text-green-300">{strength.category || 'Strength'}: {strength.strength}</h4><p className="text-gray-400 text-sm mt-1">{strength.description}</p>{strength.enhancement && <p className="text-green-400/80 text-xs mt-1 italic">To enhance: {strength.enhancement}</p>}</div>))}</div></div>
            )}
            {safeGet(performanceAssessment, 'growth_areas', []).length > 0 && (
                <div className="mt-5"><h3 className="font-medium text-amber-400 text-lg mb-2">Growth Areas:</h3><div className="flex flex-wrap gap-2">{safeGet(performanceAssessment, 'growth_areas', []).map((area, index) => (<span key={index} className="bg-amber-900/30 text-amber-300 px-3 py-1 rounded-full text-sm border border-amber-700/40 shadow-sm">{area}</span>))}</div></div>
            )}
            </div>
        )}
        {safeGet(performanceAssessment, 'priority_improvements', []).length > 0 && (
          <div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40 mb-6">
             <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-blue-500/20 to-blue-700/20 p-2 rounded-lg mr-3 border border-blue-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 6a3 3 0 013-3h1.628c.532 0 1.028.212 1.401.585l1.84 1.84A3 3 0 0012.27 6H14a3 3 0 013 3v4a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm12 3a1 1 0 100-2h-1.628a1 1 0 01-.707-.293l-1.84-1.84A1 1 0 009.427 4H6a1 1 0 00-1 1v4a1 1 0 001 1h3.427a3 3 0 012.122.879l1.84 1.84A1 1 0 0014.372 13H15a1 1 0 001-1V9z" clipRule="evenodd" /></svg></div><h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-100">Priority Improvements</h2></div>
            <div className="space-y-3">{safeGet(performanceAssessment, 'priority_improvements', []).map((priority, index) => (<div key={index} className="flex gap-3 items-start p-3 bg-blue-900/20 rounded-lg border-l-4 border-blue-400 shadow-sm"><div className="bg-blue-800/40 rounded-full h-7 w-7 flex items-center justify-center text-blue-300 font-bold shrink-0 text-sm border border-blue-600/50">{index + 1}</div><div><h3 className="font-semibold text-blue-300">{priority.category || 'Improvement'}: {priority.issue}</h3><p className="text-sm text-gray-400 leading-relaxed">{priority.impact}</p></div></div>))}</div>
          </div>
        )}
        {specificRecommendations.length > 0 && (
            <div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40 mb-6">
                <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-teal-500/20 to-teal-700/20 p-2 rounded-lg mr-3 border border-teal-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1v-3a1 1 0 00-1-1z" clipRule="evenodd" /></svg></div><h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-teal-100">Detailed Recommendations</h2></div>
                <div className="space-y-4">{specificRecommendations.map((rec, index) => (<div key={index} className="p-4 rounded-lg border border-gray-700/50 bg-gray-800/40 shadow-sm"><h3 className="font-semibold text-teal-300 text-lg">{rec.category || 'Recommendation'}: {rec.issue}</h3><p className="text-gray-400 mb-2 text-sm leading-relaxed">{rec.description}</p><p className="text-gray-300 font-medium mb-2 text-sm">Suggestion: <span className="text-teal-400/90">{rec.suggestion}</span></p>{rec.exercises && rec.exercises.length > 0 && (<div className="mt-2"><h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Recommended Exercises:</h4><ul className="list-disc pl-5 text-sm mt-1 space-y-0.5">{rec.exercises.map((exercise, i) => (<li key={i} className="text-gray-400">{exercise}</li>))}</ul></div>)}</div>))}</div>
            </div>
        )}
        {Object.keys(developmentPlan).length > 0 && (safeGet(developmentPlan, 'next_steps', []).length > 0 || safeGet(developmentPlan, 'development_pathway', []).length > 0) && (
            <div className="bg-gray-800/50 p-5 rounded-lg shadow-md border border-gray-700/40">
                <div className="flex items-center mb-3"><div className="bg-gradient-to-br from-purple-500/20 to-purple-700/20 p-2 rounded-lg mr-3 border border-purple-500/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" viewBox="0 0 20 20" fill="currentColor"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L9 9.61V16a1 1 0 001 1h2a1 1 0 001-1V9.61l6.394-2.69a1 1 0 000-1.84l-7-3zM10 8a1 1 0 00-1 1v.61l-1.394.58A1 1 0 007 10l3 1.26V14H8v-2.39l4-1.68V8a1 1 0 00-1-1h-1z" /></svg></div><h2 className="font-semibold text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-100">Development Plan</h2></div>
                {safeGet(developmentPlan, 'next_steps', []).length > 0 && (<div className="mb-5"><h3 className="font-semibold text-purple-300 text-lg mb-1">Next Steps</h3><ul className="list-decimal list-outside pl-5 mt-1 space-y-1">{safeGet(developmentPlan, 'next_steps', []).map((step, index) => (<li key={index} className="text-gray-300 text-sm">{step}</li>))}</ul></div>)}
                {safeGet(developmentPlan, 'development_pathway', []).length > 0 && (<div><h3 className="font-semibold text-purple-300 text-lg mb-2">Growth Pathway</h3><div className="space-y-5">{safeGet(developmentPlan, 'development_pathway', []).map((stage, index) => (<div key={index} className="border-l-4 border-purple-700/50 pl-4 py-2 bg-gray-900/20 rounded-r-md"><h4 className="font-semibold text-purple-400">{stage.stage}</h4>{stage.focus_areas && stage.focus_areas.length > 0 && (<div className="mt-2"><h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Focus Areas:</h5><ul className="list-disc pl-5 text-sm mt-1 space-y-0.5">{stage.focus_areas.map((area, i) => (<li key={i} className="text-gray-400">{area}</li>))}</ul></div>)}{stage.exercises && stage.exercises.length > 0 && (<div className="mt-2"><h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Exercises:</h5><ul className="list-disc pl-5 text-sm mt-1 space-y-0.5">{stage.exercises.map((exercise, i) => (<li key={i} className="text-gray-400">{exercise}</li>))}</ul></div>)}{stage.milestone && (<div className="mt-3 bg-purple-900/30 p-2 rounded-md border border-purple-700/30"><h5 className="text-xs font-semibold text-purple-400/80 uppercase tracking-wider">Milestone:</h5><p className="text-sm text-gray-400">{stage.milestone}</p></div>)}</div>))}</div></div>)}
                {safeGet(developmentPlan, 'tracking_template.weekly_focus') && (<div className="mt-5"><h3 className="font-semibold text-purple-300 text-lg mb-2">Progress Tracking</h3><div className="bg-gray-800/40 p-3 rounded-lg border border-gray-700/50"><p className="text-gray-400 mb-2 text-sm italic">{safeGet(developmentPlan, 'tracking_template.weekly_focus', '')}</p>{safeGet(developmentPlan, 'tracking_template.metrics_to_track', []).length > 0 && (<><h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Metrics to Track:</h4><ul className="list-disc pl-5 text-sm mt-1 space-y-0.5">{safeGet(developmentPlan, 'tracking_template.metrics_to_track', []).map((metric, i) => (<li key={i} className="text-gray-400">{metric}</li>))}</ul></>)}</div></div>)}
            </div>
        )}
      </div>
    );
  };

  const renderDownloadOptions = () => {
    // Same as before, should be fine if `analysis` object is correctly populated.
    if (!analysis) return null;
    return (
      <div className="mt-6 bg-gray-900/30 border border-gray-700/30 rounded-lg p-5">
        <h3 className="font-semibold text-lg mb-3 text-gray-200 flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Export Analysis Results</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 flex flex-col justify-between">
            <div><div className="flex items-center justify-between mb-3"><div className="flex items-center"><div className="bg-indigo-900/40 p-2 rounded-lg mr-3 border border-indigo-700/50"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 100 2h4a1 1 0 100-2H8zm0-3a1 1 0 011-1h4a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd" /></svg></div><h4 className="font-medium text-gray-200">PDF Report</h4></div><span className="text-xs bg-green-800/70 text-green-200 px-2 py-0.5 rounded-full border border-green-600/50">Recommended</span></div><p className="text-sm text-gray-400 mb-3">Complete analysis with visualizations and recommendations.</p></div>
            <button onClick={downloadPdfReport} disabled={isPdfGenerating} className={`w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all duration-200 ${isPdfGenerating ? 'opacity-70 cursor-not-allowed' : 'hover:shadow-lg hover:shadow-indigo-600/30'}`}>
              {isPdfGenerating ? (<><svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>Generating...</>) : (<><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Download PDF</>)}
            </button>
          </div>
          <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 flex flex-col justify-between">
            <div><div className="flex items-center mb-3"><div className="bg-blue-900/40 p-2 rounded-lg mr-3 border border-blue-700/50"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M12.316 3.076a1 1 0 01.633 1.265l-4 12a1 1 0 01-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></div><h4 className="font-medium text-gray-200">JSON Data</h4></div><p className="text-sm text-gray-400 mb-3">Raw data for technical users or further processing.</p></div>
            <button onClick={downloadAnalysisResults} className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all hover:shadow-lg hover:shadow-blue-600/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Download JSON</button>
          </div>
          <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 flex flex-col justify-between">
            <div><div className="flex items-center mb-3"><div className="bg-teal-900/40 p-2 rounded-lg mr-3 border border-teal-700/50"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z" clipRule="evenodd" /></svg></div><h4 className="font-medium text-gray-200">CSV Export</h4></div><p className="text-sm text-gray-400 mb-3">Spreadsheet-compatible for Excel or Google Sheets.</p></div>
            <button onClick={downloadExcelFriendlyReport} className="w-full bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all hover:shadow-lg hover:shadow-teal-600/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Download CSV</button>
          </div>
          {file && audioSource === "record" && (
            <div className="bg-gray-900/40 p-4 rounded-lg border border-gray-800/40 flex flex-col justify-between sm:col-span-2 lg:col-span-3">
              <div><div className="flex items-center mb-3"><div className="bg-green-900/40 p-2 rounded-lg mr-3 border border-green-700/50"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg></div><h4 className="font-medium text-gray-200">Audio Recording</h4></div><p className="text-sm text-gray-400 mb-3">Keep a copy of your original speech recording.</p></div>
              <button onClick={downloadRecordedAudio} className="w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center transition-all hover:shadow-lg hover:shadow-green-600/30"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>Download Audio</button>
            </div>
          )}
        </div>
      </div>
    );
  };

const downloadExcelFriendlyReport = () => {
  if (!analysis) return;

  const createFormattedCsv = () => {
    let csvRows = [];
    csvRows.push(['Speech Analysis Report']);
    csvRows.push(['Date Generated', new Date().toLocaleString()]);
    csvRows.push(['Original File Name', analysis.fileName || 'N/A']);
    csvRows.push([]); // Spacer

    // --- Transcript Section ---
    csvRows.push(['TRANSCRIPT & COHERENCE']);
    csvRows.push(['Processed Transcript', analysis.transcription || 'N/A']);
    if (analysis.transcriptAnalysis) {
      csvRows.push(['Raw Transcription (if different)', safeGet(analysis.transcriptAnalysis, 'raw_transcription', 'N/A') !== analysis.transcription ? safeGet(analysis.transcriptAnalysis, 'raw_transcription', 'N/A') : '(Same as processed)']);
      csvRows.push(['Coherence Score', `${formatNumber(safeGet(analysis.transcriptAnalysis, 'coherence_score', 0))} / 100`]);
      const issues = safeGet(analysis.transcriptAnalysis, 'contextual_issues', []);
      if (issues.length > 0) {
        csvRows.push(['Contextual Issues Detected:']);
        issues.forEach(issue => csvRows.push(['', `Type: ${issue.type}, Text: "${issue.text}", Explanation: ${issue.explanation}`]));
      }
    }
    csvRows.push([]);

    // Helper to add a section with key-value pairs from a nested object
    const addAnalysisSection = (title, dataObject) => {
      csvRows.push([title.toUpperCase()]);
      if (!dataObject || Object.keys(dataObject).length === 0 || dataObject.error) {
        csvRows.push(['(No data or error in this section)', dataObject?.error || '']);
        csvRows.push([]);
        return;
      }
      const flatData = flattenObject(dataObject);
      for (const key in flatData) {
        if (key !== 'error') { // Don't print the error key itself if data exists
            const formattedKey = key.replace(/_/g, ' ').replace(/\./g, ' > ').replace(/\b\w/g, c => c.toUpperCase());
            let value = flatData[key];
            if (typeof value === 'number' && !key.toLowerCase().includes('count') && !key.toLowerCase().includes('percentage')) {
                value = formatNumber(value);
            } else if (typeof value === 'number' && key.toLowerCase().includes('percentage')) {
                value = `${formatNumber(value)}%`;
            }
            csvRows.push([formattedKey, value]);
        }
      }
      csvRows.push([]);
    };

    addAnalysisSection('Voice Analysis', analysis.voiceAnalysis);
    addAnalysisSection('Text Analysis', analysis.textAnalysis);

    // --- Recommendations Section ---
    if (analysis.recommendations && !analysis.recommendations.error) {
      const reco = analysis.recommendations;
      const perf = safeGet(reco, 'performance_assessment', {});
      csvRows.push(['PERFORMANCE ASSESSMENT']);
      csvRows.push(['Overall Score', `${formatNumber(safeGet(perf, 'overall_score', 0))} / 100`]);
      csvRows.push(['Performance Level', safeGet(perf, 'performance_level', 'N/A')]);
      csvRows.push(['Description', safeGet(perf, 'performance_description', 'N/A')]);

      if (safeGet(perf, 'detailed_strengths', []).length > 0) {
        csvRows.push(['Detailed Strengths:']);
        safeGet(perf, 'detailed_strengths', []).forEach(s => csvRows.push(['', `Category: ${s.category}, Strength: ${s.strength}, Desc: ${s.description}, Enhance: ${s.enhancement || ''}`]));
      }
      if (safeGet(perf, 'growth_areas', []).length > 0) {
        csvRows.push(['Growth Areas:', safeGet(perf, 'growth_areas', []).join('; ')]);
      }
       if (safeGet(perf, 'priority_improvements', []).length > 0) {
        csvRows.push(['Priority Improvements:']);
        safeGet(perf, 'priority_improvements', []).forEach(p => csvRows.push(['', `Category: ${p.category}, Issue: ${p.issue}, Impact: ${p.impact}`]));
      }
      csvRows.push([]);

      if (safeGet(reco, 'recommendations', []).length > 0) {
        csvRows.push(['SPECIFIC RECOMMENDATIONS']);
        safeGet(reco, 'recommendations', []).forEach(r => {
          csvRows.push([`Category: ${r.category || ''}`, `Issue: ${r.issue || ''}`]);
          csvRows.push(['', `Description: ${r.description || ''}`]);
          csvRows.push(['', `Suggestion: ${r.suggestion || ''}`]);
          csvRows.push(['', `Exercises: ${(r.exercises || []).join('; ')}`]);
          csvRows.push(['']); // mini spacer
        });
      }
      csvRows.push([]);

      const plan = safeGet(reco, 'development_plan', {});
      if (Object.keys(plan).length > 0) {
        csvRows.push(['DEVELOPMENT PLAN']);
        if (safeGet(plan, 'next_steps', []).length > 0) {
          csvRows.push(['Next Steps:']);
          safeGet(plan, 'next_steps', []).forEach(step => csvRows.push(['', step]));
        }
        if (safeGet(plan, 'development_pathway', []).length > 0) {
          csvRows.push(['Development Pathway:']);
          safeGet(plan, 'development_pathway', []).forEach(p => {
            csvRows.push(['', `Stage: ${p.stage}`]);
            csvRows.push(['', `  Focus: ${(p.focus_areas || []).join('; ')}`]);
            csvRows.push(['', `  Exercises: ${(p.exercises || []).join('; ')}`]);
            csvRows.push(['', `  Milestone: ${p.milestone}`]);
          });
        }
         if (safeGet(plan, 'tracking_template')) {
            csvRows.push(['Progress Tracking Focus', safeGet(plan, 'tracking_template.weekly_focus', '')]);
            csvRows.push(['Metrics to Track', (safeGet(plan, 'tracking_template.metrics_to_track', [])).join('; ')]);
         }
      }
    } else if (analysis.recommendations?.error) {
        csvRows.push(['RECOMMENDATIONS']);
        csvRows.push(['Error loading recommendations', analysis.recommendations.error]);
    }
    csvRows.push([]);
    return csvRows;
  };

  const flattenObject = (obj, prefix = '') => {
    return Object.keys(obj).reduce((acc, k) => {
      const pre = prefix.length ? prefix + '.' : '';
      const value = obj[k];
      if (k === 'error' && value !== null) { // Skip further flattening if this key itself is an error string
          acc[pre + k] = value;
      } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        Object.assign(acc, flattenObject(value, pre + k));
      } else if (Array.isArray(value)) {
        acc[pre + k] = value.map(item => (typeof item === 'object' && item !== null) ? JSON.stringify(item) : item).join('; ');
      } else {
        acc[pre + k] = value;
      }
      return acc;
    }, {});
  };

  const arrayToCsv = (data) => {
    return data.map(row =>
      row.map(cell => {
        if (cell === undefined || cell === null) return '';
        const cellStr = String(cell);
        if (cellStr.includes(',') || cellStr.includes('"') || cellStr.includes('\n') || cellStr.includes(';')) {
          return `"${cellStr.replace(/"/g, '""')}"`;
        }
        return cellStr;
      }).join(',')
    ).join('\n');
  };

  const csvData = createFormattedCsv();
  const csvString = arrayToCsv(csvData);
  const BOM = '\uFEFF';
  const blob = new Blob([BOM + csvString], { type: "text/csv;charset=utf-8;" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "speech-analysis-report.csv";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(a.href);
};

  const ProcessingAnimation = () => (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}>
      <WavyBackground colors={['#7c3aed', '#8b5cf6', '#a78bfa', '#c4b5fd', '#6d28d9']} backgroundFill="rgba(15, 23, 42, 0.9)" blur={5} speed="fast" waveWidth={40} waveOpacity={0.6} containerClassName="absolute inset-0"/>
      <motion.div className="relative z-10 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-purple-500/30 max-w-md w-full" initial={{ scale: 0.8, y: 20, opacity: 0 }} animate={{ scale: 1, y: 0, opacity: 1 }} exit={{ scale: 0.8, y: 20, opacity: 0 }} transition={{ delay: 0.1, type: 'spring', stiffness: 300 }}>
        <div className="flex flex-col items-center">
          <div className="relative w-28 h-28 mb-6 flex items-center justify-center">
            <motion.div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-600/30 to-indigo-600/30" animate={{scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5], rotate: [0, 10, 0]}} transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}/>
            <div className="relative w-20 h-20 flex items-center justify-center">{[...Array(5)].map((_, i) => (<motion.div key={i} className="absolute w-full h-full rounded-full border-2 border-purple-500/60" style={{scale: 0.5 + (i * 0.1),}} animate={{scale: [0.5 + (i * 0.1), 0.7 + (i * 0.1), 0.5 + (i * 0.1)], opacity: [0.3, 0.8, 0.3], borderWidth: [2, 3, 2]}} transition={{repeat: Infinity, duration: 2, delay: i * 0.2, ease: "easeInOut"}}/>))}
              <motion.div className="relative z-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg shadow-purple-500/30" animate={{scale: [1, 1.1, 1], boxShadow: ['0 0 10px rgba(139, 92, 246, 0.5)','0 0 20px rgba(139, 92, 246, 0.7)','0 0 10px rgba(139, 92, 246, 0.5)']}} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.415A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z" clipRule="evenodd" /></svg></motion.div>
            </div>
          </div>
          <motion.h3 className="text-2xl font-bold text-white mb-3 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>Analyzing Your Speech</motion.h3>
          <motion.p className="text-gray-300 text-center mb-5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>Our AI is processing your audio to extract insights about your speech patterns, tone, and content.</motion.p>
          <div className="w-full bg-gray-800/80 rounded-full h-2.5 mb-5 overflow-hidden p-0.5"><motion.div className="h-full bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-600 rounded-full" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 15, ease: "linear" }}/></div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">{['Transcribing', 'Analyzing tone', 'Detecting patterns', 'Generating insights'].map((step, i) => (<motion.div key={step} className="px-3 py-1.5 bg-purple-900/40 rounded-full text-sm text-purple-200 border border-purple-500/30 shadow-sm shadow-purple-500/20" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7 + (i * 0.2) }}>{step}</motion.div>))}</div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <DashboardLayout>
      <AnimatePresence>{processingAnimation && <ProcessingAnimation />}</AnimatePresence>
      <DashboardPageWrapper title="Speech Analysis Tool" description="Analyze your speech and get detailed feedback">
        <WidgetCard className="mb-6 bg-gray-950/60 border border-gray-800/50 shadow-xl">
          {renderAudioInputSelectors()}
          {error && <div className="my-4 p-4 bg-red-900/30 text-red-300 border border-red-700/50 rounded-lg shadow-md">{error}</div>}
          {analysis && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="bg-gray-900/40 border border-gray-700/30 rounded-xl p-1 mb-6">
                <nav className="flex">
                  {[
                    { id: "transcript", label: "Transcript", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" /></svg>) },
                    { id: "voice", label: "Voice Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" /></svg>) },
                    { id: "text", label: "Text Analysis", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" /></svg>) },
                    { id: "recommendations", label: "Recommendations", icon: (<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38zM10 12.586l4-4V7h-2.586l-4 4V13h2.586l2-2z" clipRule="evenodd" /></svg>) }
                  ].map((tab) => (
                    <motion.button
                      key={tab.id} onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 ${activeTab === tab.id ? "bg-gradient-to-r from-purple-900/70 to-purple-800/50 text-purple-200 shadow-lg shadow-purple-900/20" : "bg-transparent text-gray-400 hover:bg-gray-800/30 hover:text-gray-300"}`}
                      whileHover={{ scale: activeTab !== tab.id ? 1.02 : 1 }} whileTap={{ scale: 0.98 }}
                    >
                      {tab.icon}
                      <span className="font-medium hidden sm:inline">{tab.label}</span>
                      <span className="font-medium sm:hidden text-xs">{tab.label.split(' ')[0]}</span>
                    </motion.button>
                  ))}
                </nav>
              </div>
              <AnimatePresence mode="wait">
                {activeTab === "transcript" && (<motion.div key="transcript" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>{renderTranscript()}</motion.div>)}
                {activeTab === "voice" && (<motion.div key="voice" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>{renderVoiceAnalysis()}</motion.div>)}
                {activeTab === "text" && (<motion.div key="text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>{renderTextAnalysis()}</motion.div>)}
                {activeTab === "recommendations" && (<motion.div key="recommendations" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>{renderRecommendations()}</motion.div>)}
              </AnimatePresence>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>{renderDownloadOptions()}</motion.div>
            </motion.div>
          )}
        </WidgetCard>
      </DashboardPageWrapper>
    </DashboardLayout>
  );
}
