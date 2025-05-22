'use client';

import { useEffect, useState } from 'react';

/**
 * This component fixes hydration mismatches by ensuring that the client-side DOM
 * matches the server-side DOM. It uses a two-phase approach:
 * 1. Initially renders nothing to avoid hydration mismatches
 * 2. After hydration, renders its children normally
 */
const HydrationFix = ({ children }) => {
  // Use state to track if we're hydrated
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated once we're on the client
    setIsHydrated(true);

    // Also remove any problematic attributes that might be causing hydration mismatches
    if (document.body.hasAttribute('inject_video_svd')) {
      document.body.removeAttribute('inject_video_svd');
    }
  }, []);

  // Return null on first render (server-side)
  // This prevents hydration mismatches by not rendering anything until client-side
  return isHydrated ? children : null;
};

export default HydrationFix;
