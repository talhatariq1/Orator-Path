(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/NavigationBar.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NavigationBar)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$themes$2f$dist$2f$themes$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/themes/dist/themes/src/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
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
const navLinks = [
    {
        label: "Features",
        href: "/#features"
    },
    {
        label: "Playground",
        href: "/#playground"
    },
    {
        label: "Testimonials",
        href: "/#testimonials"
    },
    {
        label: "Pricing",
        href: "/#pricing"
    }
];
function NavigationBar() {
    _s();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isDashboard, setIsDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])(); // Get current pathname - used for active link styling
    // Check if we're in the dashboard, sign-in, or sign-up pages
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationBar.useEffect": ()=>{
            // Check if the pathname starts with /dashboard or is a sign-in/sign-up page
            const dashboardActive = pathname.startsWith('/dashboard');
            const isAuthPage = pathname.startsWith('/sign-in') || pathname.startsWith('/sign-up');
            setIsDashboard(dashboardActive || isAuthPage);
            // Also check for the body class (for client-side navigation)
            const checkBodyClass = {
                "NavigationBar.useEffect.checkBodyClass": ()=>{
                    const hasDashboardClass = document.body.classList.contains('dashboard-active');
                    setIsDashboard(hasDashboardClass || isAuthPage);
                }
            }["NavigationBar.useEffect.checkBodyClass"];
            // Initial check
            checkBodyClass();
            // Set up a MutationObserver to watch for class changes on the body
            const observer = new MutationObserver(checkBodyClass);
            observer.observe(document.body, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "NavigationBar.useEffect": ()=>{
                    observer.disconnect();
                }
            })["NavigationBar.useEffect"];
        }
    }["NavigationBar.useEffect"], [
        pathname
    ]);
    // Function to handle smooth scrolling
    const handleSmoothScroll = (e, targetId)=>{
        // Only apply smooth scroll on the homepage
        if (pathname !== '/') return;
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Close mobile menu if open
            if (mobileMenuOpen) setMobileMenuOpen(false);
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };
    // Handle scroll effects
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NavigationBar.useEffect": ()=>{
            const handleScroll = {
                "NavigationBar.useEffect.handleScroll": ()=>{
                    const isScrolled = window.scrollY > 10;
                    if (isScrolled !== scrolled) {
                        setScrolled(isScrolled);
                    }
                }
            }["NavigationBar.useEffect.handleScroll"];
            window.addEventListener("scroll", handleScroll);
            return ({
                "NavigationBar.useEffect": ()=>{
                    window.removeEventListener("scroll", handleScroll);
                }
            })["NavigationBar.useEffect"];
        }
    }["NavigationBar.useEffect"], [
        scrolled
    ]);
    // If we're in the dashboard, sign-in, or sign-up pages, don't render the navigation bar
    if (isDashboard) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 py-2 bg-black/60 backdrop-blur-sm shadow-lg main-header`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto flex items-center justify-center px-6 py-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0 absolute left-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: "/",
                            className: "flex items-center gap-2 cursor-pointer",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/Logo.PNG",
                                    alt: "Logo",
                                    width: 48,
                                    height: 48,
                                    className: "h-12 w-auto filter brightness-125 contrast-125",
                                    style: {
                                        objectFit: "contain"
                                    },
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                    lineNumber: 94,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-bold text-white",
                                    children: "OratorPath"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                        lineNumber: 92,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "hidden lg:flex items-center justify-center px-8 py-3 rounded-full shadow-md bg-black/40 nav-border-animation",
                        children: [
                            navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "px-4 z-10 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: "text-gray-300 hover:text-white transition duration-200 cursor-pointer text-base font-medium",
                                        onClick: (e)=>handleSmoothScroll(e, link.href.replace('/#', '')),
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                }, link.label, false, {
                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                    lineNumber: 112,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-2 z-10 relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/sign-in",
                                            className: "px-5 py-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full hover:opacity-90 transition hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2 cursor-pointer font-medium",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                                            lineNumber: 124,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                pathname === "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/dashboard",
                                                    className: "px-5 py-2 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full hover:opacity-90 transition hover:shadow-lg hover:shadow-purple-500/20 flex items-center gap-2 cursor-pointer font-medium",
                                                    children: "Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
                                                    appearance: {
                                                        baseTheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$themes$2f$dist$2f$themes$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dark"],
                                                        elements: {
                                                            userButtonAvatarBox: "w-9 h-9 border-2 border-purple-400 rounded-full",
                                                            userButtonTrigger: "focus:shadow-outline-purple",
                                                            userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                                                            userButtonPopoverText: "text-white",
                                                            userButtonPopoverActionButtonText: "text-white",
                                                            userButtonPopoverFooterText: "text-gray-400"
                                                        }
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                                            lineNumber: 135,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/NavigationBar.jsx",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 lg:hidden absolute right-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedOut"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/sign-in",
                                    className: "px-3 text-sm py-1 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full hover:opacity-90 transition flex items-center gap-1 cursor-pointer",
                                    children: "Login"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NavigationBar.jsx",
                                lineNumber: 166,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["SignedIn"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        pathname === "/" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/dashboard",
                                            className: "px-3 text-sm py-1 bg-gradient-to-r from-purple-500 to-rose-500 text-white rounded-full hover:opacity-90 transition flex items-center gap-1 cursor-pointer",
                                            children: "Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                                            lineNumber: 180,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
                                            appearance: {
                                                baseTheme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$themes$2f$dist$2f$themes$2f$src$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["dark"],
                                                elements: {
                                                    userButtonAvatarBox: "w-8 h-8 border-2 border-purple-400 rounded-full",
                                                    userButtonTrigger: "focus:shadow-outline-purple",
                                                    userButtonPopoverCard: "bg-gray-900 border border-gray-800",
                                                    userButtonPopoverText: "text-white",
                                                    userButtonPopoverActionButtonText: "text-white",
                                                    userButtonPopoverFooterText: "text-gray-400"
                                                }
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                                            lineNumber: 189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                                    lineNumber: 178,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NavigationBar.jsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                                className: "text-white/70 hover:text-white/85 text-2xl",
                                children: "☰"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/NavigationBar.jsx",
                                lineNumber: 204,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/NavigationBar.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/NavigationBar.jsx",
                lineNumber: 90,
                columnNumber: 7
            }, this),
            mobileMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "lg:hidden bg-black/80 shadow-md nav-border-animation mx-4 my-2 rounded-xl mobile-menu",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center py-4 space-y-4",
                    children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: link.href,
                            className: "text-gray-300 hover:text-white transition duration-200 cursor-pointer",
                            onClick: (e)=>{
                                setMobileMenuOpen(false);
                                handleSmoothScroll(e, link.href.replace('/#', ''));
                            },
                            children: link.label
                        }, link.label, false, {
                            fileName: "[project]/src/app/components/NavigationBar.jsx",
                            lineNumber: 218,
                            columnNumber: 15
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/components/NavigationBar.jsx",
                    lineNumber: 216,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/NavigationBar.jsx",
                lineNumber: 215,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/NavigationBar.jsx",
        lineNumber: 87,
        columnNumber: 5
    }, this);
}
_s(NavigationBar, "WaRguM+aQTsLF3w7VJ9jWDwg15o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = NavigationBar;
var _c;
__turbopack_context__.k.register(_c, "NavigationBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/FooterWrapper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>FooterWrapper)
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
const Footer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/Footer.jsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/Footer.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c = Footer;
const SimpleFooter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(()=>__turbopack_context__.r("[project]/src/app/components/SimpleFooter.jsx [app-client] (ecmascript, next/dynamic entry, async loader)")(__turbopack_context__.i), {
    loadableGenerated: {
        modules: [
            "[project]/src/app/components/SimpleFooter.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    }
});
_c1 = SimpleFooter;
function FooterWrapper() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const isRootPage = pathname === "/";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: isRootPage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Footer, {}, void 0, false, {
            fileName: "[project]/src/app/components/FooterWrapper.jsx",
            lineNumber: 16,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SimpleFooter, {}, void 0, false, {
            fileName: "[project]/src/app/components/FooterWrapper.jsx",
            lineNumber: 16,
            columnNumber: 34
        }, this)
    }, void 0, false);
}
_s(FooterWrapper, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = FooterWrapper;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Footer");
__turbopack_context__.k.register(_c1, "SimpleFooter");
__turbopack_context__.k.register(_c2, "FooterWrapper");
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

//# sourceMappingURL=src_app_components_6822dbda._.js.map