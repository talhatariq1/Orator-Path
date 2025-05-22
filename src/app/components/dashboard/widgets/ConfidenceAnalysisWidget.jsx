"use client";

import React from "react";
import AnalysisWidget from "./AnalysisWidget";

const ConfidenceAnalysisWidget = ({ data, summary }) => {
  // Simplify summary if it's too long
  const simplifiedSummary = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;

  return (
    <AnalysisWidget
      title="Confidence Analysis"
      theme="green"
      data={data}
      summary={simplifiedSummary}
      delay={0.2}
    />
  );
};

export default ConfidenceAnalysisWidget;
