'use client';

import { useRef, useEffect, useState } from 'react';
import useCanvasCursor from '../hooks/useCanvasCursor';

const CanvasCursor = () => {
  const canvasRef = useRef(null);
  const [isDashboard, setIsDashboard] = useState(false);

  useEffect(() => {
    // Check if we're in the dashboard by looking for the dashboard-active class
    const checkDashboardActive = () => {
      const hasDashboardClass = document.body.classList.contains('dashboard-active');
      setIsDashboard(hasDashboardClass);
    };

    // Check immediately
    checkDashboardActive();

    // Set up a mutation observer to detect when the class is added/removed
    const observer = new MutationObserver(checkDashboardActive);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Only use the cursor animation when not in dashboard
  useCanvasCursor(canvasRef);

  // Don't render the canvas at all when in dashboard
  if (isDashboard) {
    return null;
  }

  return <canvas className="pointer-events-none fixed inset-0" id="canvas" ref={canvasRef} />;
};

export default CanvasCursor;