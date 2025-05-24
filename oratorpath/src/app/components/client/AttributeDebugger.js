'use client';

import { useEffect } from 'react';

/**
 * This component helps debug where the 'inject_video_svd' attribute is coming from.
 * It sets up a MutationObserver to detect when the attribute is added and logs information
 * about the source.
 */
const AttributeDebugger = () => {
  useEffect(() => {
    // Function to log information about the attribute
    const logAttributeInfo = () => {
      console.log('inject_video_svd attribute detected on body');
      
      // Try to get the stack trace to see where it's coming from
      try {
        throw new Error('Attribute detection stack trace');
      } catch (e) {
        console.log('Stack trace:', e.stack);
      }
      
      // Log all scripts on the page
      const scripts = document.querySelectorAll('script');
      console.log('Scripts on page:', Array.from(scripts).map(s => s.src || 'inline script'));
    };

    // Check if the attribute already exists
    if (document.body.hasAttribute('inject_video_svd')) {
      logAttributeInfo();
    }

    // Set up a MutationObserver to watch for attribute changes on the body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inject_video_svd'
        ) {
          logAttributeInfo();
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

export default AttributeDebugger;
