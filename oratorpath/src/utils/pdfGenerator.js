/**
 * PDF Generator Utility for Audio Analysis
 * This utility provides functions to generate PDF reports from audio analysis data
 */

/**
 * Generates a PDF report from audio analysis data using jsPDF
 * @param {Object} analysis - The analysis data object
 * @param {Object} jsPDF - The jsPDF constructor (dynamically imported)
 * @returns {Object} - The generated PDF document
 */
export const generateAnalysisPDF = (analysis, jsPDF) => {
  if (!analysis || !jsPDF) return null;

  try {
    // Create a new jsPDF instance with better default font
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const margin = 20;
    const contentWidth = pageWidth - margin * 2;

    // Brand colors - updated to match the design in the images
    const colors = {
      primary: { r: 59, g: 130, b: 246 }, // #3B82F6 - Primary blue
      secondary: { r: 16, g: 185, b: 129 }, // #10B981 - Green
      accent: { r: 245, g: 158, b: 11 }, // #F59E0B - Orange/amber
      success: { r: 34, g: 197, b: 94 }, // #22C55E - Success green
      lightBlue: { r: 96, g: 165, b: 250 }, // #60A5FA - Light blue for icons
      lightGreen: { r: 52, g: 211, b: 153 }, // #34D399 - Light green
      lightOrange: { r: 251, g: 191, b: 36 }, // #FBBF24 - Light orange
      lightGray: { r: 209, g: 213, b: 219 }, // #D1D5DB - Light gray
      background: { r: 249, g: 250, b: 251 }, // #F9FAFB - Very light gray background
      cardBg: { r: 255, g: 255, b: 255 }, // #FFFFFF - White card background
      text: { r: 31, g: 41, b: 55 }, // #1F2937 - Dark text
      textLight: { r: 107, g: 114, b: 128 }, // #6B7280 - Light text
      border: { r: 229, g: 231, b: 235 }, // #E5E7EB - Border color
      gray: { r: 156, g: 163, b: 175 }, // #9CA3AF - Medium gray
      darkGray: { r: 75, g: 85, b: 99 }, // #4B5563 - Dark gray
      black: { r: 0, g: 0, b: 0 },
      white: { r: 255, g: 255, b: 255 }
    };

    // Set page background to white
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // ===== HEADER =====
    // Add header with logo and title
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.rect(0, 0, pageWidth, 40, 'F');

    // Add title
    doc.setFontSize(22);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Speech Analysis Report', margin, 25);

    // Add date
    const currentDate = new Date().toLocaleDateString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    doc.setFontSize(10);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(`Generated on: ${currentDate}`, margin, 35);

    // Add logo placeholder
    // Circle background
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(pageWidth - margin - 15, 20, 15, 'F');

    // Microphone icon (simplified)
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.rect(pageWidth - margin - 18, 15, 6, 10, 'F');
    doc.circle(pageWidth - margin - 15, 15, 5, 'F');

    // Add "Orator | Path" text
    doc.setFontSize(14);
    doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.text('Orator', pageWidth - margin - 50, 20);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('|', pageWidth - margin - 35, 20);
    doc.text('Path', pageWidth - margin - 30, 20);

    // Add separator line
    doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
    doc.setLineWidth(0.5);
    doc.line(margin, 45, pageWidth - margin, 45);

    // Set background color for the page
    doc.setFillColor(colors.background.r, colors.background.g, colors.background.b);
    doc.rect(0, 50, pageWidth, pageHeight - 50, 'F');

    // Content Page starting position
    let yPos = 70; // Starting Y position after the header

    // Helper function to add a new page if needed
    const checkPageBreak = (neededSpace) => {
      if (yPos + neededSpace > 280) {
        doc.addPage();

        // Set page background color
        doc.setFillColor(colors.background.r, colors.background.g, colors.background.b);
        doc.rect(0, 0, pageWidth, pageHeight, 'F');

        // Add header to new page
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.rect(0, 0, pageWidth, 40, 'F');

        // Add title
        doc.setFontSize(14);
        doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
        doc.text('Orator Path - Speech Analysis Report', pageWidth / 2, 15, { align: 'center' });

        // Add separator line
        doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
        doc.setLineWidth(0.5);
        doc.line(margin, 25, pageWidth - margin, 25);

        yPos = 40; // Start below the header
        return true;
      }
      return false;
    };

    // Helper function to format numbers
    const formatNumber = (num, precision = 2) => {
      if (num === null || num === undefined || isNaN(parseFloat(num))) {
        return "0.00";
      }
      // For very small values use more decimal places
      if (Math.abs(num) < 0.1) {
        return Number(num).toFixed(3);
      }
      return Number(num).toFixed(precision);
    };

    // Safe access function to avoid undefined errors
    const safeGet = (obj, path, defaultValue = null) => {
      if (!obj) return defaultValue;
      const keys = path.split('.');
      let result = obj;

      for (const key of keys) {
        result = result?.[key];
        if (result === undefined) return defaultValue;
      }

      return result;
    };

    // Helper function to add section headers with consistent styling
    const addSectionHeader = (title, icon = null) => {
      checkPageBreak(40);

      // Create a circle for the icon
      doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b, 0.8);
      doc.circle(margin + 15, yPos + 15, 15, 'F');

      // Add icon based on section type
      if (icon === 'transcript') {
        // Document icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.rect(margin + 10, yPos + 10, 10, 10, 'F');
        doc.setDrawColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
        doc.line(margin + 12, yPos + 13, margin + 18, yPos + 13);
        doc.line(margin + 12, yPos + 16, margin + 18, yPos + 16);
        doc.line(margin + 12, yPos + 19, margin + 16, yPos + 19);
      } else if (icon === 'voice') {
        // Microphone icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.circle(margin + 15, yPos + 15, 5, 'F');
        doc.rect(margin + 13, yPos + 10, 4, 10, 'F');
      } else if (icon === 'text') {
        // Text icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.setFont(undefined, 'bold');
        doc.setFontSize(14);
        doc.text('A', margin + 15, yPos + 19, { align: 'center' });
        doc.setFont(undefined, 'normal');
      } else if (icon === 'performance') {
        // Trophy icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.circle(margin + 15, yPos + 12, 5, 'F');
        doc.rect(margin + 12, yPos + 17, 6, 8, 'F');
      }

      // Add section title
      doc.setFontSize(18);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text(title, margin + 40, yPos + 20);

      // Add separator line
      doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
      doc.setLineWidth(0.5);
      doc.line(margin, yPos + 35, pageWidth - margin, yPos + 35);

      yPos += 45; // Move position below the header
    };

    // Helper function to create a card
    const createCard = (x, y, width, height) => {
      // Card background
      doc.setFillColor(colors.cardBg.r, colors.cardBg.g, colors.cardBg.b);
      doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
      doc.roundedRect(x, y, width, height, 3, 3, 'FD');
    };

    // Helper function to create a progress bar
    const createProgressBar = (x, y, width, value, maxValue, color) => {
      // Background bar
      doc.setFillColor(colors.border.r, colors.border.g, colors.border.b, 0.3);
      doc.roundedRect(x, y, width, 8, 4, 4, 'F');

      // Progress value
      const progressWidth = (value / maxValue) * width;
      doc.setFillColor(color.r, color.g, color.b);
      doc.roundedRect(x, y, progressWidth, 8, 4, 4, 'F');
    };

    // ===== TABLE OF CONTENTS =====
    doc.setFontSize(18);
    doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
    doc.text('Table of Contents', margin, yPos);
    yPos += 15;

    // Store page numbers for TOC
    const tocItems = [
      { title: 'Transcript', page: 2 },
      { title: 'Voice Analysis', page: 2 },
      { title: 'Text Analysis', page: 3 },
      { title: 'Performance Assessment', page: 4 },
      { title: 'Recommendations', page: 5 },
      { title: 'Development Plan', page: 6 }
    ];

    // Add TOC items with dot leaders
    doc.setFontSize(12);
    doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);

    tocItems.forEach((item, index) => {
      // Create dot leaders
      const dots = '.'.repeat(50);
      doc.text(`${index + 1}. ${item.title}`, margin, yPos);
      doc.text(dots, margin + 50, yPos);
      doc.text(`Page ${item.page}`, pageWidth - margin, yPos, { align: 'right' });
      yPos += 10;
    });

    yPos += 10;

    // Add a note about the report
    doc.setFontSize(10);
    doc.setTextColor(colors.gray.r, colors.gray.g, colors.gray.b);
    const reportNote = "This report provides a comprehensive analysis of your speech, including voice characteristics, text content, and performance assessment. Use the recommendations and development plan to improve your public speaking skills.";
    const splitNote = doc.splitTextToSize(reportNote, contentWidth);
    doc.text(splitNote, margin, yPos);
    yPos += splitNote.length * 5 + 10;

    // Add a new page for the actual content
    doc.addPage();

    // Set page background color
    doc.setFillColor(colors.background.r, colors.background.g, colors.background.b);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');

    // Add header to new page
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.rect(0, 0, pageWidth, 40, 'F');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Orator Path - Speech Analysis Report', pageWidth / 2, 15, { align: 'center' });

    // Add separator line
    doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
    doc.setLineWidth(0.5);
    doc.line(margin, 25, pageWidth - margin, 25);

    yPos = 40; // Start below the header

    // ===== TRANSCRIPT SECTION =====
    addSectionHeader('Transcript', 'transcript');

    // Add transcript content
    const transcript = analysis.transcription || "No transcript available";

    if (transcript) {
      // Create a card for the transcript
      createCard(margin, yPos, contentWidth, 100);

      // Add transcript text with word wrapping
      doc.setFontSize(11);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);

      const splitTranscript = doc.splitTextToSize(transcript, contentWidth - 20);
      doc.text(splitTranscript, margin + 10, yPos + 15);

      // Calculate transcript height
      const transcriptHeight = splitTranscript.length * 5;
      const cardHeight = Math.max(100, transcriptHeight + 30);

      yPos += cardHeight + 10;
    } else {
      doc.setFontSize(12);
      doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
      doc.text('No transcript available.', margin, yPos + 10);
      yPos += 20;
    }

    // Add transcript coherence score if available
    const coherenceScore = safeGet(analysis, 'textCoherence.score') ||
                          safeGet(analysis, 'text_analysis.coherence.score');

    if (coherenceScore !== null) {
      // Create a card for coherence score
      createCard(margin, yPos, contentWidth, 60);

      // Add magnifying glass icon
      doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
      doc.circle(margin + 20, yPos + 20, 10, 'F');

      // Add icon
      doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
      doc.circle(margin + 20, yPos + 18, 5, 'F');
      doc.rect(margin + 23, yPos + 22, 5, 2, 'F');

      // Add title
      doc.setFontSize(14);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text('Transcript Coherence', margin + 40, yPos + 20);

      // Add score
      doc.setFontSize(24);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text(`${formatNumber(coherenceScore, 1)}/100`, margin + 40, yPos + 45);

      // Add progress bar
      const barWidth = contentWidth - 80;
      const barY = yPos + 40;

      // Create progress bar with green color
      createProgressBar(margin + 100, barY, barWidth - 60, coherenceScore, 100, colors.secondary);

      yPos += 70;
    }

    checkPageBreak(20);

    // ===== VOICE ANALYSIS SECTION =====
    addSectionHeader('Voice Analysis', 'voice');

    // Create a 2x2 grid for voice metrics
    const cardWidth = contentWidth / 2 - 5;
    const cardHeight = 80;

    // Get voice analysis data with fallbacks for different data structures
    const duration = safeGet(analysis, 'duration') ||
                    safeGet(analysis, 'voice_analysis.duration') || 0;

    const speakingRate = safeGet(analysis, 'speakingRate') ||
                        safeGet(analysis, 'voice_analysis.speaking_rate') || 0;

    const pitch = safeGet(analysis, 'pitch.average') ||
                safeGet(analysis, 'voice_analysis.pitch.average') || 0;

    const volume = safeGet(analysis, 'volume.average') ||
                  safeGet(analysis, 'voice_analysis.volume.average') || 0;

    // Duration card
    createCard(margin, yPos, cardWidth, cardHeight);

    // Add stopwatch icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.circle(margin + 20, yPos + 20, 6, 'F');
    doc.setDrawColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setLineWidth(1);
    doc.line(margin + 20, yPos + 20, margin + 20, yPos + 16);
    doc.line(margin + 20, yPos + 20, margin + 23, yPos + 20);

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Duration', margin + 40, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(duration, 1), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('seconds', margin + 40, yPos + 65);

    // Speaking rate card
    createCard(margin + cardWidth + 10, yPos, cardWidth, cardHeight);

    // Add speaking icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + cardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('🔊', margin + cardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Speaking Rate', margin + cardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(speakingRate, 1), margin + cardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('syllables per second', margin + cardWidth + 50, yPos + 65);

    // Add ideal range
    doc.setFontSize(10);
    doc.text('Ideal Range: 4.0 - 5.5', margin + cardWidth + 50, yPos + 75);

    // Add progress bar
    createProgressBar(margin + cardWidth + 90, yPos + 75, cardWidth - 100, speakingRate, 7, colors.accent);

    yPos += cardHeight + 10;

    // Pitch card
    createCard(margin, yPos, cardWidth, cardHeight);

    // Add pitch icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon (musical note)
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(14);
    doc.text('♪', margin + 20, yPos + 24, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Pitch', margin + 40, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(pitch, 1), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('Hz average', margin + 40, yPos + 65);

    // Add range if available
    const pitchMin = safeGet(analysis, 'pitch.min') || safeGet(analysis, 'voice_analysis.pitch.min') || 0;
    const pitchMax = safeGet(analysis, 'pitch.max') || safeGet(analysis, 'voice_analysis.pitch.max') || 0;

    if (pitchMin && pitchMax) {
      doc.setFontSize(10);
      doc.text(`Range: ${formatNumber(pitchMin, 1)} - ${formatNumber(pitchMax, 1)} Hz`, margin + 40, yPos + 75);
    }

    // Volume card
    createCard(margin + cardWidth + 10, yPos, cardWidth, cardHeight);

    // Add volume icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + cardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('📊', margin + cardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Volume', margin + cardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(volume, 3), margin + cardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('average volume level', margin + cardWidth + 50, yPos + 65);

    // Add variability if available
    const volumeVar = safeGet(analysis, 'volume.variability') ||
                     safeGet(analysis, 'voice_analysis.volume.variability') || 0;

    if (volumeVar) {
      doc.setFontSize(10);
      doc.text(`Variability: ${formatNumber(volumeVar, 3)}`, margin + cardWidth + 50, yPos + 75);

      // Add variability bar
      createProgressBar(margin + cardWidth + 120, yPos + 75, cardWidth - 130, volumeVar, 0.2, colors.secondary);
    }

    yPos += cardHeight + 10;

    // Pauses card
    createCard(margin, yPos, cardWidth, cardHeight);

    // Add pauses icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon (pause symbol)
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.rect(margin + 16, yPos + 16, 3, 8, 'F');
    doc.rect(margin + 21, yPos + 16, 3, 8, 'F');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Pauses', margin + 40, yPos + 20);

    // Add value
    const pauseCount = safeGet(analysis, 'pauses.count') ||
                      safeGet(analysis, 'voice_analysis.pauses.count') || 0;

    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(pauseCount.toString(), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('total pauses', margin + 40, yPos + 65);

    // Add average duration if available
    const pauseAvgDuration = safeGet(analysis, 'pauses.average_duration') ||
                            safeGet(analysis, 'voice_analysis.pauses.average_duration') || 0;

    if (pauseAvgDuration) {
      doc.setFontSize(10);
      doc.text(`Average Duration: ${formatNumber(pauseAvgDuration, 1)} seconds`, margin + 40, yPos + 75);
    }

    // Voice Quality card
    createCard(margin + cardWidth + 10, yPos, cardWidth, cardHeight);

    // Add voice quality icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + cardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('🎤', margin + cardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Voice Quality', margin + cardWidth + 50, yPos + 20);

    // Add spectral centroid
    const spectralCentroid = safeGet(analysis, 'voice_quality.spectral_centroid') ||
                            safeGet(analysis, 'voice_analysis.voice_quality.spectral_centroid') || 0;

    doc.setFontSize(12);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(`Spectral Centroid: ${formatNumber(spectralCentroid, 1)}`, margin + cardWidth + 50, yPos + 45);

    // Add spectral bandwidth
    const spectralBandwidth = safeGet(analysis, 'voice_quality.spectral_bandwidth') ||
                             safeGet(analysis, 'voice_analysis.voice_quality.spectral_bandwidth') || 0;

    doc.text(`Spectral Bandwidth: ${formatNumber(spectralBandwidth, 1)}`, margin + cardWidth + 50, yPos + 65);

    yPos += cardHeight + 10;
    checkPageBreak(20);

    // ===== TEXT ANALYSIS SECTION =====
    addSectionHeader('Text Analysis', 'text');

    // Text Statistics section

    // Get text analysis data with fallbacks for different data structures
    const wordCount = safeGet(analysis, 'text_analysis.text_statistics.word_count') ||
                     safeGet(analysis, 'textStatistics.wordCount') || 0;

    const sentenceCount = safeGet(analysis, 'text_analysis.text_statistics.sentence_count') ||
                         safeGet(analysis, 'textStatistics.sentenceCount') || 0;

    const wordsPerSentence = safeGet(analysis, 'text_analysis.text_statistics.average_words_per_sentence') ||
                            safeGet(analysis, 'textStatistics.wordsPerSentence') || 0;

    const vocabularyRichness = safeGet(analysis, 'text_analysis.text_statistics.vocabulary_richness') ||
                              safeGet(analysis, 'textStatistics.vocabularyRichness') || 0;

    // Create a 2x2 grid for text statistics
    const statCardWidth = contentWidth / 2 - 5;
    const statCardHeight = 80;

    // Word Count card
    createCard(margin, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('W', margin + 20, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Word Count', margin + 40, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(wordCount.toString(), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('total words', margin + 40, yPos + 65);

    // Sentence Count card
    createCard(margin + statCardWidth + 10, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + statCardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('S', margin + statCardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Sentence Count', margin + statCardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(sentenceCount.toString(), margin + statCardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('sentences', margin + statCardWidth + 50, yPos + 65);

    yPos += statCardHeight + 10;

    // Words per Sentence card
    createCard(margin, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(10);
    doc.text('W/S', margin + 20, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Words per Sentence', margin + 40, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(wordsPerSentence, 1), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('average', margin + 40, yPos + 65);

    // Add progress bar
    createProgressBar(margin + 40, yPos + 75, statCardWidth - 50, wordsPerSentence, 25, colors.accent);

    // Vocabulary Richness card
    createCard(margin + statCardWidth + 10, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + statCardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('V', margin + statCardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Vocabulary Richness', margin + statCardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(vocabularyRichness, 1) + '%', margin + statCardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('unique words ratio', margin + statCardWidth + 50, yPos + 65);

    // Add progress bar
    createProgressBar(margin + statCardWidth + 50, yPos + 75, statCardWidth - 60, vocabularyRichness, 100, colors.secondary);

    yPos += statCardHeight + 10;
    checkPageBreak(20);

    // Content Analysis section

    // Get content analysis data with fallbacks for different data structures
    const readability = safeGet(analysis, 'text_analysis.readability.reading_level') ||
                       safeGet(analysis, 'contentAnalysis.readability') || 'Standard';

    const fleschScore = safeGet(analysis, 'text_analysis.readability.flesch_reading_ease') ||
                       safeGet(analysis, 'contentAnalysis.fleschReadingEase') || 0;

    const nounVerbRatio = safeGet(analysis, 'text_analysis.content_analysis.noun_verb_ratio') ||
                         safeGet(analysis, 'contentAnalysis.nounVerbRatio') || 0;

    const fillerWords = safeGet(analysis, 'text_analysis.filler_words.total_count') ||
                       safeGet(analysis, 'fillerWords.count') || 0;

    const fillerPercentage = safeGet(analysis, 'text_analysis.filler_words.percentage') ||
                            safeGet(analysis, 'fillerWords.percentage') || 0;

    // Add section subheader
    doc.setFontSize(16);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Content Analysis', margin, yPos);
    yPos += 20;

    // Readability card
    createCard(margin, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('R', margin + 20, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Readability', margin + 40, yPos + 20);

    // Add value
    doc.setFontSize(24);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(readability, margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('reading level', margin + 40, yPos + 65);

    // Add Flesch score
    doc.setFontSize(10);
    doc.text(`Flesch Reading Ease: ${formatNumber(fleschScore, 1)}`, margin + 40, yPos + 75);

    // Add progress bar
    createProgressBar(margin + 150, yPos + 75, statCardWidth - 160, fleschScore, 100, colors.accent);

    // Noun-Verb Ratio card
    createCard(margin + statCardWidth + 10, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + statCardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(10);
    doc.text('N:V', margin + statCardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Noun-Verb Ratio', margin + statCardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(24);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(formatNumber(nounVerbRatio, 1), margin + statCardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('balance indicator', margin + statCardWidth + 50, yPos + 65);

    // Add progress bar
    createProgressBar(margin + statCardWidth + 50, yPos + 75, statCardWidth - 60, Math.min(nounVerbRatio, 2), 2, colors.secondary);

    yPos += statCardHeight + 10;

    // Hesitation Patterns card
    createCard(margin, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 20, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('H', margin + 20, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Hesitation Patterns', margin + 40, yPos + 20);

    // Add value
    const hesitationPatterns = safeGet(analysis, 'contentAnalysis.hesitationPatterns') || 0;

    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(hesitationPatterns.toString(), margin + 40, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('detected patterns', margin + 40, yPos + 65);

    // Filler Words card
    createCard(margin + statCardWidth + 10, yPos, statCardWidth, statCardHeight);

    // Add icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + statCardWidth + 30, yPos + 20, 10, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(12);
    doc.text('F', margin + statCardWidth + 30, yPos + 23, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Filler Words', margin + statCardWidth + 50, yPos + 20);

    // Add value
    doc.setFontSize(28);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(fillerWords.toString(), margin + statCardWidth + 50, yPos + 50);

    // Add unit
    doc.setFontSize(12);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text('total filler words', margin + statCardWidth + 50, yPos + 65);

    // Add percentage
    doc.setFontSize(10);
    doc.text(`Percentage: ${formatNumber(fillerPercentage, 1)}%`, margin + statCardWidth + 50, yPos + 75);

    yPos += statCardHeight + 10;

    // Create a visualization for emotion distribution if available
    const emotionDistribution = safeGet(analysis.text_analysis, 'emotion_analysis.emotion_distribution', {});
    if (Object.keys(emotionDistribution).length > 0) {
      checkPageBreak(80);

      // Add title for emotion distribution
      doc.setFontSize(12);
      doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
      doc.text('Emotion Distribution', margin, yPos);
      yPos += 15;

      // Sort emotions by percentage
      const sortedEmotions = Object.entries(emotionDistribution)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      // Calculate max percentage for scaling
      const maxPercentage = Math.max(...sortedEmotions.map(([_, value]) => value));
      const barHeight = 15;
      const barSpacing = 5;
      const maxBarWidth = contentWidth - 80;

      // Draw emotion bars
      sortedEmotions.forEach(([emotion, percentage], index) => {
        const barY = yPos + (index * (barHeight + barSpacing));
        const barWidth = (percentage / maxPercentage) * maxBarWidth;

        // Draw emotion label
        doc.setFontSize(10);
        doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
        doc.text(emotion, margin, barY + barHeight - 4);

        // Draw bar background
        doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.3);
        doc.roundedRect(margin + 60, barY, maxBarWidth, barHeight, 2, 2, 'F');

        // Draw bar value
        doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.7);
        doc.roundedRect(margin + 60, barY, barWidth, barHeight, 2, 2, 'F');

        // Add percentage text
        doc.setFontSize(9);
        doc.setTextColor(colors.white.r, colors.white.g, colors.white.b);
        if (barWidth > 30) {
          doc.text(`${formatNumber(percentage)}%`, margin + 60 + barWidth - 25, barY + barHeight - 4);
        } else {
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          doc.text(`${formatNumber(percentage)}%`, margin + 60 + barWidth + 5, barY + barHeight - 4);
        }
      });

      yPos += (sortedEmotions.length * (barHeight + barSpacing)) + 10;
    }

    // Add common words visualization if available
    const commonWords = safeGet(analysis.text_analysis, 'content_analysis.most_common_words', []);
    if (commonWords.length > 0) {
      checkPageBreak(60);

      // Add title for common words
      doc.setFontSize(12);
      doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
      doc.text('Most Common Words', margin, yPos);
      yPos += 15;

      // Take top 5 common words
      const topWords = commonWords.slice(0, 5);
      const maxCount = Math.max(...topWords.map(([_, count]) => count));

      // Create a horizontal layout for word bubbles
      const bubbleSpacing = 10;
      const totalBubbleWidth = contentWidth - (bubbleSpacing * (topWords.length - 1));
      const bubbleWidth = totalBubbleWidth / topWords.length;

      // Draw word bubbles
      topWords.forEach(([word, count], index) => {
        const bubbleX = margin + (index * (bubbleWidth + bubbleSpacing));
        const bubbleSize = 20 + ((count / maxCount) * 30);
        const bubbleCenterX = bubbleX + (bubbleWidth / 2);
        const bubbleCenterY = yPos + (bubbleSize / 2);

        // Draw bubble
        const bubbleColor = {
          r: Math.floor(colors.primary.r + (index * 20) % 255),
          g: Math.floor(colors.primary.g - (index * 15) % 255),
          b: Math.floor(colors.primary.b + (index * 25) % 255)
        };

        doc.setFillColor(bubbleColor.r, bubbleColor.g, bubbleColor.b, 0.2);
        doc.setDrawColor(bubbleColor.r, bubbleColor.g, bubbleColor.b, 0.5);
        doc.circle(bubbleCenterX, bubbleCenterY, bubbleSize / 2, 'FD');

        // Add word text
        doc.setFontSize(Math.min(12, 8 + (count / maxCount) * 6));
        doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
        doc.text(word, bubbleCenterX, bubbleCenterY - 5, { align: 'center' });

        // Add count text
        doc.setFontSize(9);
        doc.setTextColor(colors.gray.r, colors.gray.g, colors.gray.b);
        doc.text(`${count} times`, bubbleCenterX, bubbleCenterY + 5, { align: 'center' });
      });

      yPos += 60;
    }

    // Add filler words information if available
    const fillerWordsDetails = safeGet(analysis.text_analysis, 'filler_words.words', {});
    if (Object.keys(fillerWordsDetails).length > 0) {
      checkPageBreak(50);

      // Add title for filler words
      doc.setFontSize(12);
      doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
      doc.text('Filler Words', margin, yPos);
      yPos += 15;

      // Create a table for filler words
      const fillerWordsArray = Object.entries(fillerWordsDetails).sort((a, b) => b[1] - a[1]).slice(0, 8);
      const tableRows = Math.ceil(fillerWordsArray.length / 2);
      const rowHeight = 12;

      // Draw table headers
      doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b, 0.1);
      doc.rect(margin, yPos, contentWidth / 2 - 5, rowHeight, 'F');
      doc.rect(margin + contentWidth / 2 + 5, yPos, contentWidth / 2 - 5, rowHeight, 'F');

      doc.setFontSize(10);
      doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
      doc.text('Word', margin + 5, yPos + 8);
      doc.text('Count', margin + contentWidth / 4, yPos + 8, { align: 'center' });
      doc.text('Word', margin + contentWidth / 2 + 10, yPos + 8);
      doc.text('Count', margin + contentWidth * 3/4 + 5, yPos + 8, { align: 'center' });

      yPos += rowHeight;

      // Draw table rows
      for (let i = 0; i < tableRows; i++) {
        // Left column
        if (i < fillerWordsArray.length) {
          const [word, count] = fillerWordsArray[i];
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          doc.text(word, margin + 5, yPos + 8);
          doc.text(count.toString(), margin + contentWidth / 4, yPos + 8, { align: 'center' });
        }

        // Right column
        if (i + tableRows < fillerWordsArray.length) {
          const [word, count] = fillerWordsArray[i + tableRows];
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          doc.text(word, margin + contentWidth / 2 + 10, yPos + 8);
          doc.text(count.toString(), margin + contentWidth * 3/4 + 5, yPos + 8, { align: 'center' });
        }

        // Add alternating row background
        if (i % 2 === 1) {
          doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.05);
          doc.rect(margin, yPos, contentWidth / 2 - 5, rowHeight, 'F');
          doc.rect(margin + contentWidth / 2 + 5, yPos, contentWidth / 2 - 5, rowHeight, 'F');
        }

        yPos += rowHeight;
      }

      yPos += 10;
    }

    checkPageBreak(20);

    // ===== PERFORMANCE ASSESSMENT SECTION =====
    checkPageBreak(20);
    addSectionHeader('Performance Assessment', 'performance');

    // Get performance data with fallbacks for different data structures
    const overallScore = safeGet(analysis, 'performance_assessment.overall_score') ||
                        safeGet(analysis, 'recommendations.performance_assessment.overall_score') ||
                        safeGet(analysis, 'performanceAssessment.overallScore') || 0;

    const performanceLevel = safeGet(analysis, 'performance_assessment.performance_level') ||
                            safeGet(analysis, 'recommendations.performance_assessment.performance_level') ||
                            safeGet(analysis, 'performanceAssessment.performanceLevel') || 'Average';

    const strengths = safeGet(analysis, 'performance_assessment.strengths') ||
                     safeGet(analysis, 'recommendations.performance_assessment.detailed_strengths') ||
                     safeGet(analysis, 'performanceAssessment.strengths') || [];

    const improvements = safeGet(analysis, 'performance_assessment.areas_for_improvement') ||
                        safeGet(analysis, 'recommendations.performance_assessment.growth_areas') ||
                        safeGet(analysis, 'performanceAssessment.areasForImprovement') || [];

    // Overall Performance Score card
    createCard(margin, yPos, contentWidth, 100);

    // Add trophy icon
    doc.setFillColor(colors.lightBlue.r, colors.lightBlue.g, colors.lightBlue.b);
    doc.circle(margin + 25, yPos + 25, 15, 'F');

    // Add icon
    doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
    doc.setFont(undefined, 'bold');
    doc.setFontSize(14);
    doc.text('🏆', margin + 25, yPos + 30, { align: 'center' });
    doc.setFont(undefined, 'normal');

    // Add title
    doc.setFontSize(14);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text('Overall Performance Score', margin + 50, yPos + 25);

    // Add score
    doc.setFontSize(30);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    doc.text(`${formatNumber(overallScore, 1)}/100`, margin + 50, yPos + 60);

    // Add performance level
    doc.setFontSize(14);
    doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
    doc.text(`Performance Level: ${performanceLevel}`, margin + 50, yPos + 80);

    // Add progress bar
    const barWidth = contentWidth - 100;
    const barY = yPos + 50;

    // Create progress bar with accent color
    createProgressBar(margin + 150, barY, barWidth - 150, overallScore, 100, colors.accent);

    // Add feedback text
    doc.setFontSize(11);
    doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
    const feedbackText = "You demonstrate typical speaking abilities with both strengths and areas needing improvement. Focus on your recommendations to stand out more effectively.";
    const feedbackLines = doc.splitTextToSize(feedbackText, contentWidth - 50);
    doc.text(feedbackLines, margin + 25, yPos + 95);

    yPos += 110;

    // Strengths section
    if (strengths.length > 0) {
      doc.setFontSize(16);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text('Your Strengths', margin, yPos);
      yPos += 20;

      // Create cards for each strength
      strengths.forEach((strength, index) => {
        checkPageBreak(80);

        // Create a card for the strength
        createCard(margin, yPos, contentWidth, 70);

        // Add strength title
        const strengthTitle = typeof strength === 'object' ? strength.category || strength.title : `Strength ${index + 1}`;
        const strengthContent = typeof strength === 'object' ? strength.description : strength;

        // Add thumbs up icon
        doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.circle(margin + 20, yPos + 20, 10, 'F');

        // Add icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.text('👍', margin + 20, yPos + 23, { align: 'center' });
        doc.setFont(undefined, 'normal');

        // Add strength title
        doc.setFontSize(14);
        doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.text(strengthTitle, margin + 40, yPos + 20);

        // Add strength content
        doc.setFontSize(11);
        doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
        const contentLines = doc.splitTextToSize(strengthContent, contentWidth - 50);
        doc.text(contentLines, margin + 40, yPos + 35);

        // Add enhancement tip if available
        if (typeof strength === 'object' && (strength.enhancement || strength.suggestion)) {
          doc.setFontSize(10);
          doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.setFont(undefined, 'italic');
          const enhancementText = strength.enhancement || strength.suggestion;
          const enhancementLines = doc.splitTextToSize(`To enhance: ${enhancementText}`, contentWidth - 50);
          doc.text(enhancementLines, margin + 40, yPos + 35 + (contentLines.length * 5) + 5);
          doc.setFont(undefined, 'normal');
        }

        yPos += 80;
      });
    }

    // Areas for Improvement section
    if (improvements.length > 0) {
      checkPageBreak(20);

      doc.setFontSize(16);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text('Areas for Improvement', margin, yPos);
      yPos += 20;

      // Create cards for each improvement area
      improvements.forEach((improvement, index) => {
        checkPageBreak(80);

        // Create a card for the improvement
        createCard(margin, yPos, contentWidth, 70);

        // Add improvement title
        const improvementTitle = typeof improvement === 'object' ? improvement.category || improvement.title : `Improvement ${index + 1}`;
        const improvementContent = typeof improvement === 'object' ? improvement.description : improvement;

        // Add improvement icon
        doc.setFillColor(colors.accent.r, colors.accent.g, colors.accent.b);
        doc.circle(margin + 20, yPos + 20, 10, 'F');

        // Add icon
        doc.setFillColor(colors.white.r, colors.white.g, colors.white.b);
        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.text('↗', margin + 20, yPos + 23, { align: 'center' });
        doc.setFont(undefined, 'normal');

        // Add improvement title
        doc.setFontSize(14);
        doc.setTextColor(colors.accent.r, colors.accent.g, colors.accent.b);
        doc.text(improvementTitle, margin + 40, yPos + 20);

        // Add improvement content
        doc.setFontSize(11);
        doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
        const contentLines = doc.splitTextToSize(improvementContent, contentWidth - 50);
        doc.text(contentLines, margin + 40, yPos + 35);

        // Add suggestion if available
        if (typeof improvement === 'object' && (improvement.suggestion || improvement.recommendation)) {
          doc.setFontSize(10);
          doc.setTextColor(colors.accent.r, colors.accent.g, colors.accent.b);
          doc.setFont(undefined, 'italic');
          const suggestionText = improvement.suggestion || improvement.recommendation;
          const suggestionLines = doc.splitTextToSize(`Suggestion: ${suggestionText}`, contentWidth - 50);
          doc.text(suggestionLines, margin + 40, yPos + 35 + (contentLines.length * 5) + 5);
          doc.setFont(undefined, 'normal');
        }

        yPos += 80;
      });
    }

    // Priority Improvements
    const priorityImprovements = safeGet(analysis.recommendations, 'performance_assessment.priority_improvements', []);
    if (priorityImprovements.length > 0) {
      checkPageBreak(30);

      // Priority Improvements header
      doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b, 0.1);
      doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.roundedRect(margin - 5, yPos - 5, contentWidth + 10, 25, 3, 3, 'FD');

      doc.setFontSize(12);
      doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.text('Priority Improvements', margin + 5, yPos + 10);

      yPos += 30;

      // Priority Improvements list with cards
      priorityImprovements.forEach((priority, index) => {
        checkPageBreak(40);

        // Create a card for each priority improvement
        doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.1);
        doc.setDrawColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b);
        doc.roundedRect(margin, yPos, contentWidth, 5, 3, 3, 'FD');

        // Priority number badge
        doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
        doc.circle(margin + 15, yPos + 15, 10, 'F');

        doc.setFontSize(12);
        doc.setTextColor(colors.white.r, colors.white.g, colors.white.b);
        doc.text((index + 1).toString(), margin + 15, yPos + 18, { align: 'center' });

        // Priority title
        doc.setFontSize(11);
        doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
        doc.text(`${priority.category}: ${priority.issue}`, margin + 35, yPos + 15);

        yPos += 25;

        // Priority impact
        if (priority.impact) {
          doc.setFontSize(10);
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          const splitImpact = doc.splitTextToSize(priority.impact, contentWidth - 10);
          doc.text(splitImpact, margin + 15, yPos);
          yPos += (splitImpact.length * 5) + 15;
        }
      });
    }

    // ===== RECOMMENDATIONS SECTION =====
    const recommendations = safeGet(analysis.recommendations, 'recommendations', []);
    if (recommendations.length > 0) {
      checkPageBreak(30);
      addSectionHeader('Detailed Recommendations', 'recommendations');

      // Create a timeline-style layout for recommendations
      recommendations.forEach((rec, index) => {
        checkPageBreak(60);

        // Create a timeline node
        doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
        doc.circle(margin + 10, yPos + 15, 8, 'F');

        // Add number inside the circle
        doc.setFontSize(10);
        doc.setTextColor(colors.white.r, colors.white.g, colors.white.b);
        doc.text((index + 1).toString(), margin + 10, yPos + 18, { align: 'center' });

        // Draw timeline line
        if (index < recommendations.length - 1) {
          doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b, 0.3);
          doc.setLineWidth(2);
          doc.line(margin + 10, yPos + 25, margin + 10, yPos + 80);
        }

        // Create recommendation card
        doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.1);
        doc.setDrawColor(colors.primary.r, colors.primary.g, colors.primary.b, 0.3);
        doc.roundedRect(margin + 25, yPos, contentWidth - 30, 5, 3, 3, 'FD');

        // Add recommendation title
        doc.setFontSize(12);
        doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
        const recTitle = `${rec.category}: ${rec.issue}`;
        const splitTitle = doc.splitTextToSize(recTitle, contentWidth - 40);
        doc.text(splitTitle, margin + 35, yPos + 15);

        yPos += splitTitle.length * 7 + 10;

        // Add recommendation description
        if (rec.description) {
          doc.setFontSize(10);
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          const splitDesc = doc.splitTextToSize(rec.description, contentWidth - 50);
          doc.text(splitDesc, margin + 35, yPos);
          yPos += (splitDesc.length * 5) + 10;
        }

        // Add suggestion with highlight
        if (rec.suggestion) {
          // Create suggestion box
          doc.setFillColor(colors.success.r, colors.success.g, colors.success.b, 0.1);
          doc.setDrawColor(colors.success.r, colors.success.g, colors.success.b, 0.3);
          doc.roundedRect(margin + 35, yPos - 5, contentWidth - 60, 5, 2, 2, 'FD');

          // Add suggestion icon
          doc.setFillColor(colors.success.r, colors.success.g, colors.success.b);
          doc.circle(margin + 45, yPos + 5, 3, 'F');

          // Add suggestion text
          doc.setFontSize(10);
          doc.setTextColor(colors.success.r, colors.success.g, colors.success.b);
          const splitSuggestion = doc.splitTextToSize(rec.suggestion, contentWidth - 80);
          doc.text(splitSuggestion, margin + 55, yPos + 5);
          yPos += (splitSuggestion.length * 5) + 15;
        }

        // Add exercises in a structured format
        if (rec.exercises && rec.exercises.length > 0) {
          // Create exercises container
          doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.05);
          doc.roundedRect(margin + 35, yPos - 5, contentWidth - 60, 5, 2, 2, 'F');

          // Add exercises title
          doc.setFontSize(10);
          doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
          doc.text('Recommended Exercises:', margin + 45, yPos + 5);
          yPos += 15;

          // Add exercises as a numbered list
          doc.setFontSize(9);
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);

          rec.exercises.forEach((exercise, i) => {
            // Add exercise number badge
            doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b, 0.1);
            doc.circle(margin + 45, yPos + 3, 6, 'F');

            doc.setFontSize(8);
            doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
            doc.text((i + 1).toString(), margin + 45, yPos + 5, { align: 'center' });

            // Add exercise text
            doc.setFontSize(9);
            doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
            const splitExercise = doc.splitTextToSize(exercise, contentWidth - 80);
            doc.text(splitExercise, margin + 55, yPos + 3);
            yPos += (splitExercise.length * 5) + 8;
          });

          yPos += 10;
        }
      });
    }

    // ===== DEVELOPMENT PLAN SECTION =====
    const developmentPlan = safeGet(analysis.recommendations, 'development_plan', null);
    if (developmentPlan) {
      checkPageBreak(30);
      addSectionHeader('Development Plan', 'development');

      // Add introduction to development plan
      doc.setFontSize(10);
      doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
      const planIntro = "This personalized development plan outlines the steps, exercises, and milestones to help you improve your public speaking skills based on the analysis of your speech.";
      const splitIntro = doc.splitTextToSize(planIntro, contentWidth);
      doc.text(splitIntro, margin, yPos);
      yPos += (splitIntro.length * 5) + 15;

      // Next Steps with visual callout
      const nextSteps = safeGet(developmentPlan, 'next_steps', []);
      if (nextSteps.length > 0) {
        // Create next steps container
        doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.1);
        doc.setDrawColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.roundedRect(margin, yPos, contentWidth, 40 + (nextSteps.length * 15), 3, 3, 'FD');

        // Add next steps title
        doc.setFontSize(14);
        doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.text('Next Steps', margin + 20, yPos + 20);

        // Add decorative element
        doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.rect(margin + 20, yPos + 25, 50, 2, 'F');

        // Add next steps as a checklist
        doc.setFontSize(10);
        doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);

        nextSteps.forEach((step, index) => {
          // Add checkbox
          doc.setDrawColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.setFillColor(255, 255, 255);
          doc.rect(margin + 20, yPos + 35 + (index * 15), 10, 10, 'FD');

          // Add step text
          const splitStep = doc.splitTextToSize(step, contentWidth - 60);
          doc.text(splitStep, margin + 40, yPos + 42 + (index * 15));
        });

        yPos += 50 + (nextSteps.length * 15);
      }

      // Development Pathway as a roadmap
      const pathway = safeGet(developmentPlan, 'development_pathway', []);
      if (pathway.length > 0) {
        checkPageBreak(50);

        // Add pathway title
        doc.setFontSize(14);
        doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.text('Growth Pathway', margin, yPos);
        yPos += 20;

        // Create a roadmap visualization
        const roadmapWidth = contentWidth;
        const stageWidth = roadmapWidth / pathway.length;
        const roadHeight = 20;

        // Draw the road
        doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.2);
        doc.roundedRect(margin, yPos, roadmapWidth, roadHeight, 5, 5, 'F');

        // Draw stage markers
        pathway.forEach((stage, index) => {
          const stageX = margin + (index * stageWidth) + (stageWidth / 2);

          // Draw stage circle
          doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.circle(stageX, yPos + (roadHeight / 2), 8, 'F');

          // Add stage number
          doc.setFontSize(10);
          doc.setTextColor(colors.white.r, colors.white.g, colors.white.b);
          doc.text((index + 1).toString(), stageX, yPos + (roadHeight / 2) + 3, { align: 'center' });

          // Add stage name below
          doc.setFontSize(9);
          doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.text(stage.stage, stageX, yPos + roadHeight + 15, { align: 'center' });
        });

        yPos += roadHeight + 30;

        // Add detailed stage information
        pathway.forEach((stage, index) => {
          checkPageBreak(60);

          // Create stage card
          doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.05);
          doc.setDrawColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.3);
          doc.roundedRect(margin, yPos, contentWidth, 5, 3, 3, 'FD');

          // Add stage header
          doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.1);
          doc.roundedRect(margin, yPos, contentWidth, 25, 3, 3, 'F');

          // Add stage number badge
          doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.circle(margin + 15, yPos + 12, 10, 'F');

          doc.setFontSize(10);
          doc.setTextColor(colors.white.r, colors.white.g, colors.white.b);
          doc.text((index + 1).toString(), margin + 15, yPos + 15, { align: 'center' });

          // Add stage title
          doc.setFontSize(12);
          doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
          doc.text(`Stage: ${stage.stage}`, margin + 35, yPos + 15);

          yPos += 35;

          // Add focus areas
          if (stage.focus_areas && stage.focus_areas.length > 0) {
            doc.setFontSize(10);
            doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
            doc.text('Focus Areas:', margin + 10, yPos);
            yPos += 10;

            doc.setFontSize(9);
            doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);

            stage.focus_areas.forEach((area, areaIndex) => {
              // Add bullet point
              doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
              doc.circle(margin + 15, yPos + 2, 2, 'F');

              // Add focus area text
              const splitArea = doc.splitTextToSize(area, contentWidth - 30);
              doc.text(splitArea, margin + 25, yPos);
              yPos += (splitArea.length * 5) + 5;
            });

            yPos += 5;
          }

          // Add exercises
          if (stage.exercises && stage.exercises.length > 0) {
            doc.setFontSize(10);
            doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
            doc.text('Exercises:', margin + 10, yPos);
            yPos += 10;

            doc.setFontSize(9);
            doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);

            stage.exercises.forEach((exercise, exIndex) => {
              // Add exercise number
              doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.1);
              doc.roundedRect(margin + 15, yPos - 3, 15, 15, 2, 2, 'F');

              doc.setFontSize(8);
              doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
              doc.text((exIndex + 1).toString(), margin + 22, yPos + 4, { align: 'center' });

              // Add exercise text
              doc.setFontSize(9);
              doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
              const splitExercise = doc.splitTextToSize(exercise, contentWidth - 40);
              doc.text(splitExercise, margin + 35, yPos);
              yPos += (splitExercise.length * 5) + 8;
            });

            yPos += 5;
          }

          // Add milestone
          if (stage.milestone) {
            doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.05);
            doc.roundedRect(margin + 10, yPos - 5, contentWidth - 20, 5, 2, 2, 'F');

            doc.setFontSize(10);
            doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
            doc.text('Milestone:', margin + 20, yPos + 5);

            doc.setFontSize(9);
            doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
            const splitMilestone = doc.splitTextToSize(stage.milestone, contentWidth - 30);
            doc.text(splitMilestone, margin + 20, yPos + 15);
            yPos += (splitMilestone.length * 5) + 20;
          }
        });
      }

      // Progress Tracking with visual template
      const tracking = safeGet(developmentPlan, 'tracking_template', null);
      if (tracking) {
        checkPageBreak(50);

        // Add tracking title
        doc.setFontSize(14);
        doc.setTextColor(colors.secondary.r, colors.secondary.g, colors.secondary.b);
        doc.text('Progress Tracking Template', margin, yPos);
        yPos += 15;

        // Create tracking template
        doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.1);
        doc.setDrawColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b);
        doc.roundedRect(margin, yPos, contentWidth, 5, 3, 3, 'FD');

        // Add weekly focus
        if (tracking.weekly_focus) {
          doc.setFontSize(10);
          doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
          doc.text('Weekly Focus:', margin + 10, yPos + 15);

          doc.setFontSize(9);
          doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
          const splitFocus = doc.splitTextToSize(tracking.weekly_focus, contentWidth - 30);
          doc.text(splitFocus, margin + 30, yPos + 25);
          yPos += (splitFocus.length * 5) + 30;
        }

        // Add metrics to track
        if (tracking.metrics_to_track && tracking.metrics_to_track.length > 0) {
          doc.setFontSize(10);
          doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
          doc.text('Metrics to Track:', margin + 10, yPos);
          yPos += 15;

          // Create a table for metrics
          const tableWidth = contentWidth - 20;
          const colWidth = tableWidth / 2;

          // Table header
          doc.setFillColor(colors.secondary.r, colors.secondary.g, colors.secondary.b, 0.1);
          doc.rect(margin + 10, yPos - 5, tableWidth, 20, 'F');

          doc.setFontSize(9);
          doc.setTextColor(colors.darkGray.r, colors.darkGray.g, colors.darkGray.b);
          doc.text('Metric', margin + 20, yPos + 5);
          doc.text('Notes', margin + 10 + colWidth + 20, yPos + 5);

          // Table rows
          doc.setDrawColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b);

          tracking.metrics_to_track.forEach((metric, index) => {
            const rowY = yPos + 15 + (index * 20);

            // Draw row
            if (index % 2 === 0) {
              doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.05);
              doc.rect(margin + 10, rowY, tableWidth, 20, 'F');
            }

            // Add metric
            doc.setFontSize(9);
            doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
            doc.text(metric, margin + 20, rowY + 10);

            // Add empty notes section
            doc.setDrawColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b);
            doc.rect(margin + 10 + colWidth, rowY, colWidth, 20, 'S');
          });

          yPos += (tracking.metrics_to_track.length * 20) + 20;
        }
      }
    }

    // Add footer to all pages
    const pageCount = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pageCount; i++) {
      doc.setPage(i);

      // Skip footer on cover page
      if (i === 1) continue;

      // Add footer background
      doc.setFillColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b, 0.05);
      doc.rect(0, 280, pageWidth, 17, 'F');

      // Add footer line
      doc.setDrawColor(colors.lightGray.r, colors.lightGray.g, colors.lightGray.b);
      doc.setLineWidth(0.5);
      doc.line(margin, 280, pageWidth - margin, 280);

      // Add logo placeholder in footer
      doc.setFillColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.circle(margin + 5, 287, 3, 'F');

      // Add copyright text
      doc.setFontSize(8);
      doc.setTextColor(colors.gray.r, colors.gray.g, colors.gray.b);
      doc.text(`© ${new Date().getFullYear()} Orator Path. All rights reserved.`, margin + 15, 288);

      // Add page numbers
      doc.text(`Page ${i} of ${pageCount}`, pageWidth - margin, 288, { align: 'right' });

      // Add section name in footer if available
      if (i >= 3) { // Skip TOC page
        let sectionName = '';
        if (i === 3) sectionName = 'Transcript & Voice Analysis';
        else if (i === 4) sectionName = 'Text Analysis';
        else if (i === 5) sectionName = 'Performance Assessment';
        else if (i === 6) sectionName = 'Recommendations';
        else if (i >= 7) sectionName = 'Development Plan';

        doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
        doc.text(sectionName, pageWidth / 2, 288, { align: 'center' });
      }
    }

    // Add a QR code placeholder on the last page
    doc.setPage(pageCount);
    const qrSize = 30;
    const qrX = pageWidth - margin - qrSize;
    const qrY = 240;

    // QR code background
    doc.setFillColor(255, 255, 255);
    doc.rect(qrX - 5, qrY - 5, qrSize + 10, qrSize + 10, 'F');

    // QR code placeholder
    doc.setDrawColor(colors.black.r, colors.black.g, colors.black.b);
    doc.setFillColor(colors.black.r, colors.black.g, colors.black.b);
    doc.rect(qrX, qrY, qrSize, qrSize, 'S');

    // Create a simple QR code pattern
    const cellSize = qrSize / 10;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (Math.random() > 0.7 ||
            // Fixed pattern for corners (QR code finder patterns)
            (i < 3 && j < 3) ||
            (i < 3 && j > 6) ||
            (i > 6 && j < 3)) {
          doc.rect(qrX + (i * cellSize), qrY + (j * cellSize), cellSize, cellSize, 'F');
        }
      }
    }

    // Add text next to QR code
    doc.setFontSize(10);
    doc.setTextColor(colors.black.r, colors.black.g, colors.black.b);
    doc.text('Scan to access your', qrX - 70, qrY + 15);
    doc.text('Orator Path dashboard', qrX - 70, qrY + 25);

    // Add footer to all pages
    const totalPages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= totalPages; i++) {
      doc.setPage(i);

      // Add footer line
      doc.setDrawColor(colors.border.r, colors.border.g, colors.border.b);
      doc.setLineWidth(0.5);
      doc.line(margin, pageHeight - 20, pageWidth - margin, pageHeight - 20);

      // Add page number
      doc.setFontSize(8);
      doc.setTextColor(colors.textLight.r, colors.textLight.g, colors.textLight.b);
      doc.text(`Page ${i} of ${totalPages}`, pageWidth - margin, pageHeight - 10, { align: 'right' });

      // Add branding
      doc.setTextColor(colors.primary.r, colors.primary.g, colors.primary.b);
      doc.text('Orator', margin, pageHeight - 10);
      doc.setTextColor(colors.text.r, colors.text.g, colors.text.b);
      doc.text('Path', margin + 20, pageHeight - 10);
    }

    return doc;
  } catch (err) {
    console.error('Error generating PDF:', err);
    return null;
  }
};
