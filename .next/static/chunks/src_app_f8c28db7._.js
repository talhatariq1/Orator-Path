(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/Loader.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Loader)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Loader() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-center h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "animate-spin rounded-full border-t-4 border-red-500 border-solid h-10 w-10"
        }, void 0, false, {
            fileName: "[project]/src/app/components/Loader.jsx",
            lineNumber: 4,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/Loader.jsx",
        lineNumber: 3,
        columnNumber: 7
    }, this);
}
_c = Loader;
var _c;
__turbopack_context__.k.register(_c, "Loader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard-preload.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardPreload)
});
// This script runs before the dashboard layout is fully loaded
// It immediately hides the navigation bar and grid background
// to prevent them from flashing during hard reloads
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function DashboardPreload() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPreload.useEffect": ()=>{
            // Only run this code on the client side after hydration
            // Create and inject a style element with high priority
            const style = document.createElement('style');
            style.id = 'dashboard-preload-style';
            style.innerHTML = `
      /* Hide root layout elements immediately using attribute selectors */
      [data-layout="root"] .pattern-bg,
      [data-layout="root"] header.main-header,
      [data-layout="root"] footer,
      [data-layout="root"] .canvas-cursor-wrapper {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
      }

      /* Set dashboard background immediately */
      body {
        background-color: rgb(17, 18, 23) !important;
        background-image: linear-gradient(to bottom right, rgb(15, 15, 20), rgb(20, 20, 25)) !important;
      }

      /* Prevent layout shift */
      [data-dashboard-preload="true"] {
        overflow: hidden;
      }
    `;
            // Add the style to the head with highest priority
            document.head.appendChild(style);
            // Use data attributes instead of classes to avoid hydration mismatches
            document.documentElement.setAttribute('data-dashboard', 'true');
            document.body.setAttribute('data-dashboard-preload', 'true');
            // After hydration is complete, it's safe to add classes
            setTimeout({
                "DashboardPreload.useEffect": ()=>{
                    document.body.classList.add('dashboard-active');
                    document.body.removeAttribute('data-dashboard-preload');
                }
            }["DashboardPreload.useEffect"], 100);
            return ({
                "DashboardPreload.useEffect": ()=>{
                    // Clean up when component unmounts
                    if (style.parentNode) {
                        style.parentNode.removeChild(style);
                    }
                    document.documentElement.removeAttribute('data-dashboard');
                    document.body.classList.remove('dashboard-active');
                }
            })["DashboardPreload.useEffect"];
        }
    }["DashboardPreload.useEffect"], []);
    return null; // This component doesn't render anything
}
_s(DashboardPreload, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = DashboardPreload;
var _c;
__turbopack_context__.k.register(_c, "DashboardPreload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/head-script.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HeadScript)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
function HeadScript() {
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeadScript.useEffect": ()=>{
            // This script is already in the head, but we'll ensure it's there
            if (!document.getElementById('dashboard-preload-script')) {
                const script = document.createElement('script');
                script.id = 'dashboard-preload-script';
                script.innerHTML = `
        // Immediately hide navigation elements to prevent flashing
        (function() {
          // Use data attributes instead of classes to avoid hydration mismatches
          document.documentElement.setAttribute('data-dashboard', 'true');

          // Create and inject a style element with high priority
          var style = document.createElement('style');
          style.id = 'dashboard-preload-style-inline';
          style.innerHTML = \`
            /* Hide root layout elements immediately using attribute selectors */
            [data-layout="root"] .pattern-bg,
            [data-layout="root"] header.main-header,
            [data-layout="root"] footer,
            [data-layout="root"] .canvas-cursor-wrapper {
              display: none !important;
              opacity: 0 !important;
              visibility: hidden !important;
            }

            /* Set dashboard background immediately */
            body {
              background-color: rgb(17, 18, 23) !important;
              background-image: linear-gradient(to bottom right, rgb(15, 15, 20), rgb(20, 20, 25)) !important;
            }

            /* Prevent layout shift */
            [data-dashboard="true"] {
              overflow-x: hidden;
            }
          \`;

          // Add the style to the head with highest priority
          document.head.insertBefore(style, document.head.firstChild);

          // Wait for hydration to complete before adding classes
          window.addEventListener('load', function() {
            setTimeout(function() {
              // Now it's safe to add classes
              document.documentElement.classList.add('dashboard-page');
              document.body.classList.add('dashboard-active');
            }, 100);
          });
        })();
      `;
                // Insert the script at the beginning of the head
                document.head.insertBefore(script, document.head.firstChild);
            }
            return ({
                "HeadScript.useEffect": ()=>{
                    // Clean up when component unmounts
                    const script = document.getElementById('dashboard-preload-script');
                    if (script) {
                        script.remove();
                    }
                    const style = document.getElementById('dashboard-preload-style-inline');
                    if (style) {
                        style.remove();
                    }
                    document.documentElement.removeAttribute('data-dashboard');
                    // Only remove classes if they were added (after hydration)
                    if (document.documentElement.classList.contains('dashboard-page')) {
                        document.documentElement.classList.remove('dashboard-page');
                    }
                }
            })["HeadScript.useEffect"];
        }
    }["HeadScript.useEffect"], []);
    return null;
}
_s(HeadScript, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HeadScript;
var _c;
__turbopack_context__.k.register(_c, "HeadScript");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/layout.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>DashboardLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$6FBZ36SR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/chunk-6FBZ36SR.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/Loader.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard-preload.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$head$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/dashboard/head-script.js [app-client] (ecmascript)");
;
;
;
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
// Use dynamic imports for client components
const HydrationErrorFix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/client/HydrationErrorFix.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/client/HydrationErrorFix.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = HydrationErrorFix;
const SVDAttributeRemover = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/client/SVDAttributeRemover.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/client/SVDAttributeRemover.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = SVDAttributeRemover;
const AttributeDebugger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/client/AttributeDebugger.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/client/AttributeDebugger.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c2 = AttributeDebugger;
const ScriptMonitor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/client/ScriptMonitor.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/client/ScriptMonitor.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c3 = ScriptMonitor;
const DirectHydrationFix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/client/DirectHydrationFix.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/client/DirectHydrationFix.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c4 = DirectHydrationFix;
function DashboardLayout({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Add a loading state to prevent flashing
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            // Set loading to false after a short delay
            const timer = setTimeout({
                "DashboardLayout.useEffect.timer": ()=>{
                    setIsLoading(false);
                    // Only add classes after hydration is complete
                    // This prevents hydration mismatches
                    document.body.classList.add('dashboard-active');
                    document.documentElement.classList.add('dashboard-page');
                }
            }["DashboardLayout.useEffect.timer"], 100);
            // Use data attributes instead of classes to avoid hydration mismatches
            document.documentElement.setAttribute('data-dashboard', 'true');
            // Remove pattern-bg class from the root background element
            const patternBg = document.querySelector('.pattern-bg');
            if (patternBg) {
                patternBg.style.display = 'none';
            }
            // Add data attribute to the root layout
            const rootLayout = document.querySelector('body > div');
            if (rootLayout) {
                rootLayout.setAttribute('data-layout', 'root');
            }
            // Add preload script to head if it doesn't exist
            if (!document.getElementById('dashboard-preload-script')) {
                const script = document.createElement('script');
                script.id = 'dashboard-preload-script';
                script.src = '/dashboard-preload.js';
                script.async = false;
                document.head.appendChild(script);
            }
            return ({
                "DashboardLayout.useEffect": ()=>{
                    clearTimeout(timer);
                    // Only remove classes and attributes if we're navigating away from dashboard
                    if (!pathname.includes('/dashboard')) {
                        document.body.classList.remove('dashboard-active');
                        document.documentElement.classList.remove('dashboard-page');
                        document.documentElement.removeAttribute('data-dashboard');
                        // Remove data attribute from the root layout
                        if (rootLayout) {
                            rootLayout.removeAttribute('data-layout');
                        }
                        // Restore pattern-bg when leaving dashboard
                        if (patternBg) {
                            patternBg.style.display = 'block';
                        }
                        // Remove the preload script
                        const script = document.getElementById('dashboard-preload-script');
                        if (script) {
                            script.remove();
                        }
                    }
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard-root",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("link", {
                rel: "stylesheet",
                href: "/dashboard-critical.css"
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2f$head$2d$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$dashboard$2d$preload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HydrationErrorFix, {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ScriptMonitor, {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AttributeDebugger, {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 103,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SVDAttributeRemover, {}, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DirectHydrationFix, {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkProvider"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative min-h-screen flex flex-col",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "dashboard-bg"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/layout.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$6FBZ36SR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkLoading"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$Loader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/layout.js",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/layout.js",
                                lineNumber: 111,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$chunk$2d$6FBZ36SR$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ClerkLoaded"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `transition-opacity duration-300 layout-transition ${isLoading ? 'opacity-0' : 'opacity-100'}`,
                                    style: {
                                        transitionDelay: isLoading ? '0ms' : '50ms',
                                        willChange: 'opacity, transform'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                        className: "relative z-10 flex-grow",
                                        children: children
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/layout.js",
                                        lineNumber: 126,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/layout.js",
                                    lineNumber: 117,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/layout.js",
                                lineNumber: 115,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/layout.js",
                        lineNumber: 107,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/layout.js",
                    lineNumber: 106,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/layout.js",
                lineNumber: 105,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/layout.js",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
_s(DashboardLayout, "cjjJzJYmnzBgmhwPl6BkWtWs1po=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c5 = DashboardLayout;
var _c, _c1, _c2, _c3, _c4, _c5;
__turbopack_context__.k.register(_c, "HydrationErrorFix");
__turbopack_context__.k.register(_c1, "SVDAttributeRemover");
__turbopack_context__.k.register(_c2, "AttributeDebugger");
__turbopack_context__.k.register(_c3, "ScriptMonitor");
__turbopack_context__.k.register(_c4, "DirectHydrationFix");
__turbopack_context__.k.register(_c5, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_f8c28db7._.js.map