(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/client/NavigationWrapper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
// Dynamic imports for navigation components
const NavigationBar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/NavigationBar.jsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/NavigationBar.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = NavigationBar;
const FooterWrapper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/FooterWrapper.jsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/FooterWrapper.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = FooterWrapper;
/**
 * NavigationWrapper component
 * Client component that conditionally renders navigation elements
 * based on the current route and navigation state
 */ const NavigationWrapper = ()=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [showNavigation, setShowNavigation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isTransitioning, setIsTransitioning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Determine if navigation should be shown based on the current route
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationWrapper.useEffect": ()=>{
            // Check if we're on a page that should hide navigation
            const shouldHideNavigation = [
                '/sign-in',
                '/sign-up',
                '/sign-out',
                '/auth-redirect',
                '/dashboard'
            ].some({
                "NavigationWrapper.useEffect.shouldHideNavigation": (path)=>pathname?.startsWith(path)
            }["NavigationWrapper.useEffect.shouldHideNavigation"]);
            // Check if we're redirecting (based on URL parameters)
            const isRedirecting = searchParams?.has('redirect_url');
            // Hide navigation if we're on a special page or redirecting
            setShowNavigation(!shouldHideNavigation && !isRedirecting);
            // Set transitioning state briefly to allow for transitions
            setIsTransitioning(true);
            const timer = setTimeout({
                "NavigationWrapper.useEffect.timer": ()=>{
                    setIsTransitioning(false);
                }
            }["NavigationWrapper.useEffect.timer"], 500);
            return ({
                "NavigationWrapper.useEffect": ()=>clearTimeout(timer)
            })["NavigationWrapper.useEffect"];
        }
    }["NavigationWrapper.useEffect"], [
        pathname,
        searchParams
    ]);
    // Don't render anything during transitions or if navigation should be hidden
    if (isTransitioning || !showNavigation) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationBar, {}, void 0, false, {
                fileName: "[project]/src/app/components/client/NavigationWrapper.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FooterWrapper, {}, void 0, false, {
                    fileName: "[project]/src/app/components/client/NavigationWrapper.jsx",
                    lineNumber: 57,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/client/NavigationWrapper.jsx",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
};
_s(NavigationWrapper, "MRkn7rmC63gRV8yMxIiMhvqXrPo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c2 = NavigationWrapper;
const __TURBOPACK__default__export__ = NavigationWrapper;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "NavigationBar");
__turbopack_context__.k.register(_c1, "FooterWrapper");
__turbopack_context__.k.register(_c2, "NavigationWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/PageTransitionWrapper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
/**
 * PageTransitionWrapper component
 * Client component that handles page transitions
 */ const PageTransitionWrapper = ({ children })=>{
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [renderKey, setRenderKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(pathname);
    // Update the render key when the path changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PageTransitionWrapper.useEffect": ()=>{
            setRenderKey(pathname + searchParams?.toString());
        }
    }["PageTransitionWrapper.useEffect"], [
        pathname,
        searchParams
    ]);
    // Check if we're transitioning between major sections
    const isMajorTransition = ()=>{
        // Define major sections of your app
        const sections = [
            '/dashboard',
            '/sign-in',
            '/sign-up',
            '/sign-out',
            '/auth-redirect',
            '/'
        ];
        // Check if we're moving between major sections
        const currentSection = sections.find((section)=>pathname?.startsWith(section));
        const previousSection = sections.find((section)=>renderKey.startsWith(section));
        return currentSection !== previousSection;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        mode: "wait",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: isMajorTransition() ? {
                opacity: 0
            } : {
                opacity: 1
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            transition: {
                duration: 0.3
            },
            className: "w-full h-full flex-grow",
            children: children
        }, renderKey, false, {
            fileName: "[project]/src/app/components/client/PageTransitionWrapper.jsx",
            lineNumber: 35,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/client/PageTransitionWrapper.jsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
};
_s(PageTransitionWrapper, "SZ73tn29UJVXCNWv6vH2Kowmhho=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = PageTransitionWrapper;
const __TURBOPACK__default__export__ = PageTransitionWrapper;
var _c;
__turbopack_context__.k.register(_c, "PageTransitionWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/canvas-cursor-wrapper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
;
'use client';
;
;
const CanvasCursor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/ui/canvas-cursor.js [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/ui/canvas-cursor.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c = CanvasCursor;
const CanvasCursorWrapper = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasCursor, {}, void 0, false, {
        fileName: "[project]/src/app/components/client/canvas-cursor-wrapper.js",
        lineNumber: 10,
        columnNumber: 10
    }, this);
};
_c1 = CanvasCursorWrapper;
const __TURBOPACK__default__export__ = CanvasCursorWrapper;
var _c, _c1;
__turbopack_context__.k.register(_c, "CanvasCursor");
__turbopack_context__.k.register(_c1, "CanvasCursorWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/HydrationFix.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * This component fixes hydration mismatches by ensuring that the client-side DOM
 * matches the server-side DOM. It uses a two-phase approach:
 * 1. Initially renders nothing to avoid hydration mismatches
 * 2. After hydration, renders its children normally
 */ const HydrationFix = ({ children })=>{
    _s();
    // Use state to track if we're hydrated
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HydrationFix.useEffect": ()=>{
            // Mark as hydrated once we're on the client
            setIsHydrated(true);
            // Also remove any problematic attributes that might be causing hydration mismatches
            if (document.body.hasAttribute('inject_video_svd')) {
                document.body.removeAttribute('inject_video_svd');
            }
        }
    }["HydrationFix.useEffect"], []);
    // Return null on first render (server-side)
    // This prevents hydration mismatches by not rendering anything until client-side
    return isHydrated ? children : null;
};
_s(HydrationFix, "I77IOq3pAPHaLortJPfCkmuM/a0=");
_c = HydrationFix;
const __TURBOPACK__default__export__ = HydrationFix;
var _c;
__turbopack_context__.k.register(_c, "HydrationFix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/SVDAttributeRemover.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * This component specifically targets and removes the 'inject_video_svd' attribute
 * that might be added by third-party libraries or scripts.
 * 
 * It also sets up a MutationObserver to detect and remove the attribute
 * if it gets added after the initial render.
 */ const SVDAttributeRemover = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SVDAttributeRemover.useEffect": ()=>{
            // Function to remove the attribute
            const removeAttribute = {
                "SVDAttributeRemover.useEffect.removeAttribute": ()=>{
                    if (document.body.hasAttribute('inject_video_svd')) {
                        console.log('Removing inject_video_svd attribute');
                        document.body.removeAttribute('inject_video_svd');
                    }
                }
            }["SVDAttributeRemover.useEffect.removeAttribute"];
            // Remove it immediately if it exists
            removeAttribute();
            // Set up a MutationObserver to watch for attribute changes on the body
            const observer = new MutationObserver({
                "SVDAttributeRemover.useEffect": (mutations)=>{
                    mutations.forEach({
                        "SVDAttributeRemover.useEffect": (mutation)=>{
                            if (mutation.type === 'attributes' && mutation.attributeName === 'inject_video_svd') {
                                removeAttribute();
                            }
                        }
                    }["SVDAttributeRemover.useEffect"]);
                }
            }["SVDAttributeRemover.useEffect"]);
            // Start observing the body element for attribute changes
            observer.observe(document.body, {
                attributes: true
            });
            // Clean up the observer when the component unmounts
            return ({
                "SVDAttributeRemover.useEffect": ()=>{
                    observer.disconnect();
                }
            })["SVDAttributeRemover.useEffect"];
        }
    }["SVDAttributeRemover.useEffect"], []);
    return null;
};
_s(SVDAttributeRemover, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = SVDAttributeRemover;
const __TURBOPACK__default__export__ = SVDAttributeRemover;
var _c;
__turbopack_context__.k.register(_c, "SVDAttributeRemover");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/AttributeDebugger.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * This component helps debug where the 'inject_video_svd' attribute is coming from.
 * It sets up a MutationObserver to detect when the attribute is added and logs information
 * about the source.
 */ const AttributeDebugger = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AttributeDebugger.useEffect": ()=>{
            // Function to log information about the attribute
            const logAttributeInfo = {
                "AttributeDebugger.useEffect.logAttributeInfo": ()=>{
                    console.log('inject_video_svd attribute detected on body');
                    // Try to get the stack trace to see where it's coming from
                    try {
                        throw new Error('Attribute detection stack trace');
                    } catch (e) {
                        console.log('Stack trace:', e.stack);
                    }
                    // Log all scripts on the page
                    const scripts = document.querySelectorAll('script');
                    console.log('Scripts on page:', Array.from(scripts).map({
                        "AttributeDebugger.useEffect.logAttributeInfo": (s)=>s.src || 'inline script'
                    }["AttributeDebugger.useEffect.logAttributeInfo"]));
                }
            }["AttributeDebugger.useEffect.logAttributeInfo"];
            // Check if the attribute already exists
            if (document.body.hasAttribute('inject_video_svd')) {
                logAttributeInfo();
            }
            // Set up a MutationObserver to watch for attribute changes on the body
            const observer = new MutationObserver({
                "AttributeDebugger.useEffect": (mutations)=>{
                    mutations.forEach({
                        "AttributeDebugger.useEffect": (mutation)=>{
                            if (mutation.type === 'attributes' && mutation.attributeName === 'inject_video_svd') {
                                logAttributeInfo();
                            }
                        }
                    }["AttributeDebugger.useEffect"]);
                }
            }["AttributeDebugger.useEffect"]);
            // Start observing the body element for attribute changes
            observer.observe(document.body, {
                attributes: true
            });
            // Clean up the observer when the component unmounts
            return ({
                "AttributeDebugger.useEffect": ()=>{
                    observer.disconnect();
                }
            })["AttributeDebugger.useEffect"];
        }
    }["AttributeDebugger.useEffect"], []);
    return null;
};
_s(AttributeDebugger, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = AttributeDebugger;
const __TURBOPACK__default__export__ = AttributeDebugger;
var _c;
__turbopack_context__.k.register(_c, "AttributeDebugger");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/HydrationErrorFix.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
/**
 * This component provides a comprehensive fix for hydration errors related to the
 * 'inject_video_svd' attribute on the body element.
 * 
 * It uses multiple strategies:
 * 1. An inline script that runs before React hydration to remove the attribute
 * 2. A MutationObserver to prevent the attribute from being added
 * 3. A direct DOM manipulation to remove the attribute after mount
 */ const HydrationErrorFix = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HydrationErrorFix.useEffect": ()=>{
            // Remove the attribute if it exists
            if (document.body.hasAttribute('inject_video_svd')) {
                console.log('Removing inject_video_svd attribute via useEffect');
                document.body.removeAttribute('inject_video_svd');
            }
            // Set up a MutationObserver to prevent the attribute from being added
            const observer = new MutationObserver({
                "HydrationErrorFix.useEffect": (mutations)=>{
                    mutations.forEach({
                        "HydrationErrorFix.useEffect": (mutation)=>{
                            if (mutation.type === 'attributes' && mutation.attributeName === 'inject_video_svd') {
                                console.log('Removing inject_video_svd attribute via MutationObserver');
                                document.body.removeAttribute('inject_video_svd');
                            }
                        }
                    }["HydrationErrorFix.useEffect"]);
                }
            }["HydrationErrorFix.useEffect"]);
            // Start observing the body element for attribute changes
            observer.observe(document.body, {
                attributes: true
            });
            // Clean up the observer when the component unmounts
            return ({
                "HydrationErrorFix.useEffect": ()=>{
                    observer.disconnect();
                }
            })["HydrationErrorFix.useEffect"];
        }
    }["HydrationErrorFix.useEffect"], []);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            id: "hydration-error-fix",
            strategy: "beforeInteractive",
            children: inlineScript
        }, void 0, false, {
            fileName: "[project]/src/app/components/client/HydrationErrorFix.js",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_s(HydrationErrorFix, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = HydrationErrorFix;
const __TURBOPACK__default__export__ = HydrationErrorFix;
var _c;
__turbopack_context__.k.register(_c, "HydrationErrorFix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/ScriptMonitor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * This component monitors script executions to help identify the source of the
 * 'inject_video_svd' attribute on the body element.
 */ const ScriptMonitor = ()=>{
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScriptMonitor.useEffect": ()=>{
            // Function to log information about scripts
            const logScriptInfo = {
                "ScriptMonitor.useEffect.logScriptInfo": ()=>{
                    console.log('Monitoring scripts for potential source of inject_video_svd attribute');
                    // Log all scripts on the page
                    const scripts = document.querySelectorAll('script');
                    console.log('Scripts on page:', Array.from(scripts).map({
                        "ScriptMonitor.useEffect.logScriptInfo": (s)=>({
                                src: s.src || 'inline script',
                                type: s.type,
                                id: s.id,
                                async: s.async,
                                defer: s.defer
                            })
                    }["ScriptMonitor.useEffect.logScriptInfo"]));
                    // Monitor script execution
                    const originalCreateElement = document.createElement;
                    document.createElement = ({
                        "ScriptMonitor.useEffect.logScriptInfo": function(tagName) {
                            const element = originalCreateElement.call(document, tagName);
                            if (tagName.toLowerCase() === 'script') {
                                // Monitor when the script is added to the DOM
                                const originalAppendChild = Node.prototype.appendChild;
                                element.addEventListener('load', {
                                    "ScriptMonitor.useEffect.logScriptInfo": ()=>{
                                        console.log('Script loaded:', element.src || 'inline script');
                                        // Check if the body has the attribute after this script loads
                                        setTimeout({
                                            "ScriptMonitor.useEffect.logScriptInfo": ()=>{
                                                if (document.body.hasAttribute('inject_video_svd')) {
                                                    console.log('inject_video_svd attribute detected after script loaded:', element.src || 'inline script');
                                                }
                                            }
                                        }["ScriptMonitor.useEffect.logScriptInfo"], 0);
                                    }
                                }["ScriptMonitor.useEffect.logScriptInfo"]);
                            }
                            return element;
                        }
                    })["ScriptMonitor.useEffect.logScriptInfo"];
                    // Monitor setAttribute calls on the body
                    const originalSetAttribute = Element.prototype.setAttribute;
                    Element.prototype.setAttribute = ({
                        "ScriptMonitor.useEffect.logScriptInfo": function(name, value) {
                            if (this.tagName === 'BODY' && name === 'inject_video_svd') {
                                console.log('Attempt to add inject_video_svd attribute to body');
                                console.trace('Stack trace for setAttribute call');
                            }
                            return originalSetAttribute.call(this, name, value);
                        }
                    })["ScriptMonitor.useEffect.logScriptInfo"];
                }
            }["ScriptMonitor.useEffect.logScriptInfo"];
            // Run the monitoring function
            logScriptInfo();
        }
    }["ScriptMonitor.useEffect"], []);
    return null;
};
_s(ScriptMonitor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ScriptMonitor;
const __TURBOPACK__default__export__ = ScriptMonitor;
var _c;
__turbopack_context__.k.register(_c, "ScriptMonitor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/client/DirectHydrationFix.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
/**
 * This component provides a direct fix for hydration errors by:
 * 1. Rendering a completely empty div on the server
 * 2. Only rendering the actual content on the client after hydration
 * 
 * This approach completely avoids hydration mismatches by not rendering
 * anything that could potentially mismatch during server rendering.
 */ const DirectHydrationFix = ({ children })=>{
    _s();
    // Use state to track if we're on the client
    const [isClient, setIsClient] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DirectHydrationFix.useEffect": ()=>{
            // Mark as client once we're mounted
            setIsClient(true);
            // Also remove any problematic attributes
            if (document.body.hasAttribute('inject_video_svd')) {
                console.log('Removing inject_video_svd attribute via DirectHydrationFix');
                document.body.removeAttribute('inject_video_svd');
            }
            // Set up a MutationObserver to prevent the attribute from being added
            const observer = new MutationObserver({
                "DirectHydrationFix.useEffect": (mutations)=>{
                    mutations.forEach({
                        "DirectHydrationFix.useEffect": (mutation)=>{
                            if (mutation.type === 'attributes' && mutation.attributeName === 'inject_video_svd') {
                                console.log('Removing inject_video_svd attribute via DirectHydrationFix MutationObserver');
                                document.body.removeAttribute('inject_video_svd');
                            }
                        }
                    }["DirectHydrationFix.useEffect"]);
                }
            }["DirectHydrationFix.useEffect"]);
            // Start observing the body
            observer.observe(document.body, {
                attributes: true
            });
            // Clean up the observer when the component unmounts
            return ({
                "DirectHydrationFix.useEffect": ()=>{
                    observer.disconnect();
                }
            })["DirectHydrationFix.useEffect"];
        }
    }["DirectHydrationFix.useEffect"], []);
    // On the server or during hydration, render an empty div
    // This ensures there's no possibility of hydration mismatch
    if (!isClient) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            "data-hydration-fix": "true"
        }, void 0, false, {
            fileName: "[project]/src/app/components/client/DirectHydrationFix.js",
            lineNumber: 52,
            columnNumber: 12
        }, this);
    }
    // On the client after hydration, render the actual content
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
_s(DirectHydrationFix, "k460N28PNzD7zo1YW47Q9UigQis=");
_c = DirectHydrationFix;
const __TURBOPACK__default__export__ = DirectHydrationFix;
var _c;
__turbopack_context__.k.register(_c, "DirectHydrationFix");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_components_client_66920cd5._.js.map