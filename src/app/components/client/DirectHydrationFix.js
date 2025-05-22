'use client';

import { useEffect, useState } from 'react';

/**
 * This component provides a direct fix for hydration errors by:
 * 1. Rendering a completely empty div on the server
 * 2. Only rendering the actual content on the client after hydration
 * 
 * This approach completely avoids hydration mismatches by not rendering
 * anything that could potentially mismatch during server rendering.
 */
const DirectHydrationFix = ({ children }) => {
  // Use state to track if we're on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client once we're mounted
    setIsClient(true);
    
    // Also remove any problematic attributes
    if (document.body.hasAttribute('inject_video_svd')) {
      console.log('Removing inject_video_svd attribute via DirectHydrationFix');
      document.body.removeAttribute('inject_video_svd');
    }
    
    // Set up a MutationObserver to prevent the attribute from being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inject_video_svd'
        ) {
          console.log('Removing inject_video_svd attribute via DirectHydrationFix MutationObserver');
          document.body.removeAttribute('inject_video_svd');
        }
      });
    });
    
    // Start observing the body
    observer.observe(document.body, { attributes: true });
    
    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  // On the server or during hydration, render an empty div
  // This ensures there's no possibility of hydration mismatch
  if (!isClient) {
    return <div data-hydration-fix="true"></div>;
  }

  // On the client after hydration, render the actual content
  return <>{children}</>;
};

export default DirectHydrationFix;
