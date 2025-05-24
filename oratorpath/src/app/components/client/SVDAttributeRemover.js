'use client';

import { useEffect } from 'react';

/**
 * This component specifically targets and removes the 'inject_video_svd' attribute
 * that might be added by third-party libraries or scripts.
 * 
 * It also sets up a MutationObserver to detect and remove the attribute
 * if it gets added after the initial render.
 */
const SVDAttributeRemover = () => {
  useEffect(() => {
    // Function to remove the attribute
    const removeAttribute = () => {
      if (document.body.hasAttribute('inject_video_svd')) {
        console.log('Removing inject_video_svd attribute');
        document.body.removeAttribute('inject_video_svd');
      }
    };

    // Remove it immediately if it exists
    removeAttribute();

    // Set up a MutationObserver to watch for attribute changes on the body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inject_video_svd'
        ) {
          removeAttribute();
        }
      });
    });

    // Start observing the body element for attribute changes
    observer.observe(document.body, { attributes: true });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
};

export default SVDAttributeRemover;
