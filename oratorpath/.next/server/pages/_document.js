"use strict";(()=>{var e={};e.id=3220,e.ids=[3220],e.modules={8732:e=>{e.exports=require("react/jsx-runtime")},33873:e=>{e.exports=require("path")},40361:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},45389:(e,t,o)=>{o.r(t),o.d(t,{default:()=>n});var r=o(8732),i=o(82341);function n(){return(0,r.jsxs)(i.Html,{lang:"en",children:[(0,r.jsx)(i.Head,{children:(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})}),(0,r.jsxs)("body",{children:[(0,r.jsx)(i.Main,{}),(0,r.jsx)(i.NextScript,{}),(0,r.jsx)("script",{dangerouslySetInnerHTML:{__html:`
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
            `}})]})]})}},82015:e=>{e.exports=require("react")}};var t=require("../webpack-runtime.js");t.C(e);var o=e=>t(t.s=e),r=t.X(0,[2341],()=>o(45389));module.exports=r})();