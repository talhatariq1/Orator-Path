"use client";

import React from "react";
import AnalysisWidget from "./AnalysisWidget";

const VocabularyAnalysisWidget = ({ data, summary }) => {
  // Simplify summary if it's too long
  const simplifiedSummary = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;

  return (
    <AnalysisWidget
      title="Vocabulary Analysis"
      theme="yellow"
      data={data}
      summary={simplifiedSummary}
      delay={0.3}
    />
  );
};

export default VocabularyAnalysisWidget;
