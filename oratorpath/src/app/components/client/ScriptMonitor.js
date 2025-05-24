'use client';

import { useEffect } from 'react';

/**
 * This component monitors script executions to help identify the source of the
 * 'inject_video_svd' attribute on the body element.
 */
const ScriptMonitor = () => {
  useEffect(() => {
    // Function to log information about scripts
    const logScriptInfo = () => {
      console.log('Monitoring scripts for potential source of inject_video_svd attribute');
      
      // Log all scripts on the page
      const scripts = document.querySelectorAll('script');
      console.log('Scripts on page:', Array.from(scripts).map(s => ({
        src: s.src || 'inline script',
        type: s.type,
        id: s.id,
        async: s.async,
        defer: s.defer
      })));
      
      // Monitor script execution
      const originalCreateElement = document.createElement;
      document.createElement = function(tagName) {
        const element = originalCreateElement.call(document, tagName);
        
        if (tagName.toLowerCase() === 'script') {
          // Monitor when the script is added to the DOM
          const originalAppendChild = Node.prototype.appendChild;
          element.addEventListener('load', () => {
            console.log('Script loaded:', element.src || 'inline script');
            
            // Check if the body has the attribute after this script loads
            setTimeout(() => {
              if (document.body.hasAttribute('inject_video_svd')) {
                console.log('inject_video_svd attribute detected after script loaded:', element.src || 'inline script');
              }
            }, 0);
          });
        }
        
        return element;
      };
      
      // Monitor setAttribute calls on the body
      const originalSetAttribute = Element.prototype.setAttribute;
      Element.prototype.setAttribute = function(name, value) {
        if (this.tagName === 'BODY' && name === 'inject_video_svd') {
          console.log('Attempt to add inject_video_svd attribute to body');
          console.trace('Stack trace for setAttribute call');
        }
        return originalSetAttribute.call(this, name, value);
      };
    };
    
    // Run the monitoring function
    logScriptInfo();
  }, []);
  
  return null;
};

export default ScriptMonitor;
