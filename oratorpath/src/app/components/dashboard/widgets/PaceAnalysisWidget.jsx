"use client";

import React from "react";
import AnalysisWidget from "./AnalysisWidget";

const PaceAnalysisWidget = ({ data, summary }) => {
  // Simplify summary if it's too long
  const simplifiedSummary = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;

  return (
    <AnalysisWidget
      title="Pace Analysis"
      theme="purple"
      data={data}
      summary={simplifiedSummary}
      delay={0.1}
    />
  );
};

export default PaceAnalysisWidget;
