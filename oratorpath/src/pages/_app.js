import { useEffect } from 'react';
import Script from 'next/script';

/**
 * Custom App component to handle global application state and behavior
 * This component wraps all pages and can be used to handle hydration issues
 */
export default function App({ Component, pageProps }) {
  // Remove any problematic attributes on mount
  useEffect(() => {
    if (document.body.hasAttribute('inject_video_svd')) {
      console.log('Removing inject_video_svd attribute from _app.js useEffect');
      document.body.removeAttribute('inject_video_svd');
    }

    // Set up a MutationObserver to prevent the attribute from being added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'inject_video_svd'
        ) {
          console.log('Removing inject_video_svd attribute from _app.js MutationObserver');
          document.body.removeAttribute('inject_video_svd');
        }
      });
    });

    // Start observing the body
    observer.observe(document.body, { attributes: true });

    // Override setAttribute to prevent the attribute from being added
    const originalSetAttribute = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, value) {
      if (this.tagName === 'BODY' && name === 'inject_video_svd') {
        console.log('Blocked attempt to add inject_video_svd attribute from _app.js');
        return;
      }
      return originalSetAttribute.call(this, name, value);
    };

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
        console.log('Removing inject_video_svd attribute via _app.js inline script');
        document.body.removeAttribute('inject_video_svd');
      }

      // Override setAttribute to prevent the attribute from being added
      const originalSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(name, value) {
        if (this.tagName === 'BODY' && name === 'inject_video_svd') {
          console.log('Blocked attempt to add inject_video_svd attribute via _app.js inline script');
          return;
        }
        return originalSetAttribute.call(this, name, value);
      };
    })();
  `;

  return (
    <>
      <Script id="hydration-error-fix-app" strategy="beforeInteractive">
        {inlineScript}
      </Script>
      <Component {...pageProps} />
    </>
  );
}
