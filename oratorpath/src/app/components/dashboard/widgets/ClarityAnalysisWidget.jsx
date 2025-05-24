"use client";

import React from "react";
import AnalysisWidget from "./AnalysisWidget";

const ClarityAnalysisWidget = ({ data, summary }) => {
  // Simplify summary if it's too long
  const simplifiedSummary = summary.length > 100 ? summary.substring(0, 100) + "..." : summary;

  return (
    <AnalysisWidget
      title="Clarity Analysis"
      theme="blue"
      data={data}
      summary={simplifiedSummary}
      delay={0}
    />
  );
};

export default ClarityAnalysisWidget;
