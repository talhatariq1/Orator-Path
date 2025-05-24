import { Html, Head, Main, NextScript } from 'next/document';

/**
 * Custom Document component to control the initial HTML structure
 * This helps prevent hydration mismatches by ensuring consistent HTML structure
 * between server and client rendering
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Add a script in the head to run as early as possible */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // This script runs before the body is even created
                // It will set up a MutationObserver to watch for the body element
                // and remove the attribute as soon as the body is created
                var observer = new MutationObserver(function(mutations) {
                  if (document.body) {
                    // Remove the attribute if it exists
                    if (document.body.hasAttribute('inject_video_svd')) {
                      console.log('Removing inject_video_svd attribute from body (early)');
                      document.body.removeAttribute('inject_video_svd');
                    }

                    // Set up another observer specifically for the body
                    var bodyObserver = new MutationObserver(function(mutations) {
                      mutations.forEach(function(mutation) {
                        if (mutation.type === 'attributes' &&
                            mutation.attributeName === 'inject_video_svd') {
                          console.log('Removing inject_video_svd attribute from body (mutation)');
                          document.body.removeAttribute('inject_video_svd');
                        }
                      });
                    });

                    // Start observing the body for attribute changes
                    bodyObserver.observe(document.body, { attributes: true });

                    // Override setAttribute to prevent the attribute from being added
                    var originalSetAttribute = Element.prototype.setAttribute;
                    Element.prototype.setAttribute = function(name, value) {
                      if (this.tagName === 'BODY' && name === 'inject_video_svd') {
                        console.log('Blocked attempt to add inject_video_svd attribute');
                        return;
                      }
                      return originalSetAttribute.call(this, name, value);
                    };

                    // We can disconnect this observer now that we've set up the body observer
                    observer.disconnect();
                  }
                });

                // Start observing the document for changes
                observer.observe(document, { childList: true, subtree: true });
              })();
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/*
          Add a script that runs immediately to remove any unwanted attributes
          This runs before React hydration
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                // Remove any attributes that might cause hydration mismatches
                if (document.body.hasAttribute('inject_video_svd')) {
                  console.log('Removing inject_video_svd attribute from body (late)');
                  document.body.removeAttribute('inject_video_svd');
                }

                // Set up a MutationObserver to prevent the attribute from being added
                var observer = new MutationObserver(function(mutations) {
                  mutations.forEach(function(mutation) {
                    if (mutation.type === 'attributes' &&
                        mutation.attributeName === 'inject_video_svd') {
                      console.log('Removing inject_video_svd attribute from body (late mutation)');
                      document.body.removeAttribute('inject_video_svd');
                    }
                  });
                });

                // Start observing the body
                observer.observe(document.body, { attributes: true });
              })();
            `,
          }}
        />
      </body>
    </Html>
  );
}
