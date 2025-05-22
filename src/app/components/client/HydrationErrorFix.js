'use client';

import { useEffect } from 'react';
import Script from 'next/script';

/**
 * This component provides a comprehensive fix for hydration errors related to the
 * 'inject_video_svd' attribute on the body element.
 * 
 * It uses multiple strategies:
 * 1. An inline script that runs before React hydration to remove the attribute
 * 2. A MutationObserver to prevent the attribute from being added
 * 3. A direct DOM manipulation to remove the attribute after mount
 */
const HydrationErrorFix = () => {
  useEffect(() => {
    // Remove the attribute if it exists
    if (document.body.hasAttribute('inject_video_svd')) {
      console.log('Removing inject_video_svd attribute via useEffect');
      document.body.removeAttribute('inject_video_svd');
    }

    // Set up a MutationObserver to prevent the attribute from being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inject_video_svd'
        ) {
          console.log('Removing inject_video_svd attribute via MutationObserver');
          document.body.removeAttribute('inject_video_svd');
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

  // Inline script to run before React hydration
  const inlineScript = `
    (function() {
      // Remove the attribute if it exists
      if (document.body.hasAttribute('inject_video_svd')) {
        console.log('Removing inject_video_svd attribute via inline script');
        document.body.removeAttribute('inject_video_svd');
      }

      // Override setAttribute to prevent the attribute from being added
      const originalSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(name, value) {
        if (this.tagName === 'BODY' && name === 'inject_video_svd') {
          console.log('Blocked attempt to add inject_video_svd attribute');
          return;
        }
        return originalSetAttribute.call(this, name, value);
      };

      // Set up a MutationObserver to prevent the attribute from being added
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          if (mutation.type === 'attributes' && 
              mutation.attributeName === 'inject_video_svd') {
            console.log('Removing inject_video_svd attribute via inline MutationObserver');
            document.body.removeAttribute('inject_video_svd');
          }
        });
      });
      
      // Start observing the body
      observer.observe(document.body, { attributes: true });
    })();
  `;

  return (
    <>
      <Script id="hydration-error-fix" strategy="beforeInteractive">
        {inlineScript}
      </Script>
    </>
  );
};

export default HydrationErrorFix;
