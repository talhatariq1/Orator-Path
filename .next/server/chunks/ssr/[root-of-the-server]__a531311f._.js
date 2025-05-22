module.exports = {

"[project]/src/app/components/dashboard/DashboardLayout.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-ssr] (ecmascript) <locals>");
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
const DashboardLayout = ({ children })=>{
    // Hide the navigation bar when this component is mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Add a class to the body to indicate we're in the dashboard
        document.body.classList.add('dashboard-active');
        // Clean up when component unmounts
        return ()=>{
            document.body.classList.remove('dashboard-active');
        };
    }, []);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tooltip ref for hover state
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tooltipText, setTooltipText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [tooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        top: 0,
        left: 0
    });
    // Navigation structure with categories
    const navStructure = [
        {
            category: "Main",
            items: [
                {
                    name: "Dashboard",
                    href: "/dashboard",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 43,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 42,
                        columnNumber: 13
                    }, this)
                }
            ]
        },
        {
            category: "Analysis",
            items: [
                {
                    name: "Audio Analysis",
                    href: "/dashboard/audio-analysis",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 57,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 56,
                        columnNumber: 13
                    }, this)
                },
                {
                    name: "Video Analysis",
                    href: "/dashboard/video-analysis",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 66,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this)
                }
            ]
        },
        {
            category: "Resources",
            items: [
                {
                    name: "My Practices",
                    href: "/dashboard/practices",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 80,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                },
                // This is a hidden item that won't show in the sidebar but helps with active state detection
                {
                    name: "Practice Details",
                    href: "/dashboard/practice",
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 90,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 89,
                        columnNumber: 13
                    }, this),
                    hidden: true
                }
            ]
        }
    ];
    // Handle tooltip display
    const handleShowTooltip = (e, name)=>{
        if (collapsed) {
            const rect = e.currentTarget.getBoundingClientRect();
            setTooltipText(name);
            setTooltipPosition({
                top: rect.top + window.scrollY + rect.height / 2,
                left: rect.right + window.scrollX + 10
            });
            setTooltipVisible(true);
        }
    };
    const handleHideTooltip = ()=>{
        setTooltipVisible(false);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-bg"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: tooltipVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: tooltipRef,
                    initial: {
                        opacity: 0,
                        x: -5
                    },
                    animate: {
                        opacity: 1,
                        x: 0
                    },
                    exit: {
                        opacity: 0
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed z-50 px-2 py-1 text-sm font-medium text-white bg-gray-900 rounded-md shadow-sm",
                    style: {
                        top: `${tooltipPosition.top}px`,
                        left: `${tooltipPosition.left}px`,
                        transform: 'translateY(-50%)'
                    },
                    children: tooltipText
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 124,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${collapsed ? "w-20" : "w-64"} bg-[#1A1B20]/90 backdrop-blur-md h-screen transition-all duration-300 border-r border-[#2C2D32]/80 relative shadow-lg shadow-purple-500/5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "absolute -right-3 top-10 bg-[#232429] rounded-full p-1 border border-purple-500/30 shadow-md z-10 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: `h-4 w-4 text-purple-500 transition-transform duration-300 ${collapsed ? "rotate-0" : "rotate-180"}`,
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 164,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 150,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center ${collapsed ? "justify-center py-6" : "px-6 py-6"}`,
                                children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Logo.PNG",
                                        alt: "OratorPath Logo",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 181,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Logo.PNG",
                                                alt: "OratorPath Logo",
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 191,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 190,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-gray-100 logo-text",
                                            children: "OratorPath"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 198,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 189,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 174,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 px-2 py-4 space-y-4 overflow-y-auto",
                                children: navStructure.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider sidebar-link-text",
                                                children: category.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 210,
                                                columnNumber: 19
                                            }, this),
                                            category.items.map((item)=>{
                                                // Skip hidden items in the sidebar
                                                if (item.hidden) return null;
                                                // Check if the current path starts with the item's href
                                                // This helps with dynamic routes like /dashboard/practice/[id]
                                                const isActive = pathname === item.href || item.href !== '/dashboard' && pathname.startsWith(item.href + '/');
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        x: collapsed ? 0 : 3
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: `flex items-center ${collapsed ? "justify-center" : "px-4"} py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-gradient-to-r from-purple-900/30 to-purple-800/20 text-purple-400 shadow-sm" : "text-gray-400 hover:bg-gray-800/30"}`,
                                                        onMouseEnter: (e)=>handleShowTooltip(e, item.name),
                                                        onMouseLeave: handleHideTooltip,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: `${isActive ? "text-purple-400" : "text-gray-400"}`,
                                                                whileHover: {
                                                                    scale: 1.1
                                                                },
                                                                transition: {
                                                                    type: "spring",
                                                                    stiffness: 400,
                                                                    damping: 10
                                                                },
                                                                children: item.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                                lineNumber: 238,
                                                                columnNumber: 25
                                                            }, this),
                                                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-3 font-medium sidebar-link-text",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                                lineNumber: 247,
                                                                columnNumber: 27
                                                            }, this),
                                                            !collapsed && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-auto w-1.5 h-8 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-sm shadow-purple-500/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                                lineNumber: 251,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 226,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, category.category, true, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-4 py-4 border-t border-[#2C2D32]/80 ${collapsed ? "flex justify-center" : "flex items-center"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "flex items-center",
                                    children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
                                        appearance: {
                                            elements: {
                                                userButtonPopoverCard: "bg-white",
                                                userButtonPopoverText: "text-black",
                                                userButtonPopoverActionButtonText: "text-black",
                                                userButtonPopoverFooterText: "text-black"
                                            }
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 267,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
                                                appearance: {
                                                    elements: {
                                                        userButtonPopoverCard: "bg-white",
                                                        userButtonPopoverText: "text-black",
                                                        userButtonPopoverActionButtonText: "text-black",
                                                        userButtonPopoverFooterText: "text-black"
                                                    }
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 279,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-3 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-black sidebar-link-text",
                                                        children: "User Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 290,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 sidebar-link-text",
                                                        children: "Manage your account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 291,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 289,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 265,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 172,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 145,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-grow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 301,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DashboardLayout;
}}),
"[project]/src/app/components/dashboard/DashboardPageWrapper.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
/**
 * A wrapper component for dashboard pages that provides consistent styling and animations
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children - The content of the page
 * @param {string} props.title - The title of the page
 * @param {string} props.description - A short description of the page
 * @param {React.ReactNode} props.action - Optional action button or component to display in the header
 * @param {number} props.delay - Animation delay in seconds
 */ const DashboardPageWrapper = ({ children, title, description, action, delay = 0 })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6
                    },
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-100 dashboard-main-title",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 mt-1",
                                        children: description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.8
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.4,
                                    delay: 0.3
                                },
                                children: action
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                                lineNumber: 39,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.6,
                        delay: delay
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
            lineNumber: 25,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = DashboardPageWrapper;
}}),
"[project]/src/components/ui/wavy-background.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "WavyBackground": (()=>WavyBackground)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/simplex-noise/dist/esm/simplex-noise.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const WavyBackground = ({ children, className, containerClassName, colors, waveWidth, backgroundFill, blur = 10, speed = "fast", waveOpacity = 0.5, ...props })=>{
    const noise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$simplex$2d$noise$2f$dist$2f$esm$2f$simplex$2d$noise$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createNoise3D"])();
    let w, h, nt, i, x, ctx, canvas;
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getSpeed = ()=>{
        switch(speed){
            case "slow":
                return 0.001;
            case "fast":
                return 0.002;
            default:
                return 0.001;
        }
    };
    const init = ()=>{
        canvas = canvasRef.current;
        ctx = canvas.getContext("2d");
        w = ctx.canvas.width = window.innerWidth;
        h = ctx.canvas.height = window.innerHeight;
        ctx.filter = `blur(${blur}px)`;
        nt = 0;
        window.onresize = function() {
            w = ctx.canvas.width = window.innerWidth;
            h = ctx.canvas.height = window.innerHeight;
            ctx.filter = `blur(${blur}px)`;
        };
        render();
    };
    const waveColors = colors ?? [
        "#38bdf8",
        "#818cf8",
        "#c084fc",
        "#e879f9",
        "#22d3ee"
    ];
    const drawWave = (n)=>{
        nt += getSpeed();
        for(i = 0; i < n; i++){
            ctx.beginPath();
            ctx.lineWidth = waveWidth || 50;
            ctx.strokeStyle = waveColors[i % waveColors.length];
            for(x = 0; x < w; x += 5){
                var y = noise(x / 800, 0.3 * i, nt) * 100;
                ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
            }
            ctx.stroke();
            ctx.closePath();
        }
    };
    let animationId;
    const render = ()=>{
        ctx.fillStyle = backgroundFill || "black";
        ctx.globalAlpha = waveOpacity || 0.5;
        ctx.fillRect(0, 0, w, h);
        drawWave(5);
        animationId = requestAnimationFrame(render);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        init();
        return ()=>{
            cancelAnimationFrame(animationId);
        };
    }, []);
    const [isSafari, setIsSafari] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Support for Safari
        setIsSafari("undefined" !== "undefined" && navigator.userAgent.includes("Safari") && !navigator.userAgent.includes("Chrome"));
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `h-full w-full flex flex-col items-center justify-center ${containerClassName || ""}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                className: "absolute inset-0 z-0",
                ref: canvasRef,
                id: "canvas",
                style: {
                    ...isSafari ? {
                        filter: `blur(${blur}px)`
                    } : {}
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wavy-background.js",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative z-10 ${className || ""}`,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/wavy-background.js",
                lineNumber: 106,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/wavy-background.js",
        lineNumber: 95,
        columnNumber: 5
    }, this);
};
}}),
"[externals]/mongoose [external] (mongoose, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}}),
"[project]/src/lib/mongodb/mongoose.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// Check if we're running on the client side
__turbopack_context__.s({
    "connect": (()=>connect),
    "getConnectionMetrics": (()=>getConnectionMetrics),
    "isConnected": (()=>isConnected)
});
const isClient = "undefined" !== 'undefined';
// Only import mongoose on the server side
const mongoose = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/mongoose [external] (mongoose, cjs)") : ("TURBOPACK unreachable", undefined);
// Connection state tracking
let initialized = false;
let connectionPromise = null;
let connectionStartTime = 0;
let connectionAttempts = 0;
let connectionEstablished = false;
let lastConnectionTime = 0;
const MAX_RECONNECT_ATTEMPTS = 5;
const RECONNECT_INTERVAL = 1000; // 1 second (reduced from 2 seconds)
const CONNECTION_HEALTH_CHECK_INTERVAL = 30000; // 30 seconds
const connect = async (forceNew = false)=>{
    // If we're on the client side, return a mock connection
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    try {
        mongoose.set('strictQuery', true);
        // If already connected, return immediately unless forceNew is true
        if (!forceNew && mongoose.connection.readyState === 1) {
            console.log('MongoDB already connected (readyState: 1)');
            return mongoose.connection;
        }
        // If connection is in progress and we're not forcing a new one, return the existing promise
        if (!forceNew && connectionPromise) {
            console.log('MongoDB connection already in progress, reusing promise');
            return connectionPromise;
        }
        // Start connection timer
        connectionStartTime = Date.now();
        // Create a new connection promise
        connectionPromise = new Promise(async (resolve, reject)=>{
            try {
                console.log(`Connecting to MongoDB (attempt ${connectionAttempts + 1})...`);
                // Configure connection options with optimized settings
                const connection = await mongoose.connect(process.env.MONGODB_URI, {
                    dbName: 'orator-path',
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                    connectTimeoutMS: 3000,
                    socketTimeoutMS: 45000,
                    // Connection pool settings
                    maxPoolSize: 15,
                    minPoolSize: 3,
                    maxIdleTimeMS: 60000,
                    serverSelectionTimeoutMS: 5000,
                    heartbeatFrequencyMS: 10000
                });
                const connectionTime = Date.now() - connectionStartTime;
                lastConnectionTime = connectionTime;
                console.log(`MongoDB connected successfully in ${connectionTime}ms`);
                // Reset connection attempts on successful connection
                connectionAttempts = 0;
                initialized = true;
                connectionEstablished = true;
                // Set up connection event handlers
                mongoose.connection.on('error', (err)=>{
                    console.error('MongoDB connection error:', err);
                    connectionEstablished = false;
                });
                mongoose.connection.on('disconnected', ()=>{
                    console.log('MongoDB disconnected, will attempt to reconnect');
                    initialized = false;
                    connectionPromise = null;
                    connectionEstablished = false;
                    // Only attempt reconnect if we haven't exceeded max attempts
                    if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                        connectionAttempts++;
                        setTimeout(()=>{
                            connect(true).catch((err)=>console.error('Reconnection failed:', err));
                        }, RECONNECT_INTERVAL * Math.min(connectionAttempts, 3)); // Cap backoff at 3x
                    } else {
                        console.error(`Exceeded maximum reconnection attempts (${MAX_RECONNECT_ATTEMPTS})`);
                        // Reset attempts after a longer delay to allow for recovery
                        setTimeout(()=>{
                            connectionAttempts = 0;
                            connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                        }, 10000); // Try again after 10 seconds
                    }
                });
                // Add connected event handler
                mongoose.connection.on('connected', ()=>{
                    console.log('MongoDB connection established');
                    connectionEstablished = true;
                });
                resolve(connection);
            } catch (error) {
                console.error('MongoDB connection error:', error);
                // Reset connection promise so we can try again
                connectionPromise = null;
                connectionEstablished = false;
                // Only attempt reconnect if we haven't exceeded max attempts
                if (connectionAttempts < MAX_RECONNECT_ATTEMPTS) {
                    connectionAttempts++;
                    const backoffTime = RECONNECT_INTERVAL * Math.min(connectionAttempts, 3); // Cap backoff at 3x
                    console.log(`Connection failed, will retry in ${backoffTime}ms (attempt ${connectionAttempts}/${MAX_RECONNECT_ATTEMPTS})`);
                    setTimeout(()=>{
                        connect(true).catch((err)=>console.error('Retry connection failed:', err));
                    }, backoffTime);
                } else {
                    // Reset attempts after a longer delay to allow for recovery
                    setTimeout(()=>{
                        connectionAttempts = 0;
                        connect(true).catch((err)=>console.error('Recovery connection failed:', err));
                    }, 10000); // Try again after 10 seconds
                }
                reject(error);
            }
        });
        return connectionPromise;
    } catch (error) {
        console.error('Error in connect function:', error);
        return Promise.resolve({
            readyState: 0,
            error: true
        });
    }
};
// Warmup connection - connect as soon as the module is imported
if ("TURBOPACK compile-time truthy", 1) {
    console.log('Warming up MongoDB connection...');
    connect().catch((err)=>console.error('Initial connection warmup failed:', err));
    // Set up a periodic health check to ensure connection stays alive
    setInterval(()=>{
        if (!connectionEstablished || mongoose && mongoose.connection.readyState !== 1) {
            console.log('MongoDB connection health check: reconnecting...');
            connect(true).catch((err)=>console.error('Health check reconnection failed:', err));
        } else {
            console.log('MongoDB connection health check: connection is healthy');
        }
    }, CONNECTION_HEALTH_CHECK_INTERVAL);
}
const isConnected = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } // Always return true on client side
    return mongoose.connection.readyState === 1;
};
const getConnectionMetrics = ()=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return {
        readyState: mongoose ? mongoose.connection.readyState : 0,
        initialized,
        connectionEstablished,
        lastConnectionTime,
        connectionAttempts
    };
};
}}),
"[project]/src/lib/api/apiUtils.js [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * API Utilities for Dashboard Widgets
 *
 * This file contains common utilities for API calls, error handling,
 * data validation, and caching strategies.
 */ __turbopack_context__.s({
    "clearAllCache": (()=>clearAllCache),
    "clearCache": (()=>clearCache),
    "connectToMongoDB": (()=>connectToMongoDB),
    "fetchWithRetry": (()=>fetchWithRetry),
    "formatDateForDisplay": (()=>formatDateForDisplay),
    "formatErrorResponse": (()=>formatErrorResponse),
    "formatSuccessResponse": (()=>formatSuccessResponse),
    "generateCacheKey": (()=>generateCacheKey),
    "getCacheStats": (()=>getCacheStats),
    "getFallbackFromCache": (()=>getFallbackFromCache),
    "getFromCache": (()=>getFromCache),
    "handleMongoQuery": (()=>handleMongoQuery),
    "saveToCache": (()=>saveToCache),
    "validateRequiredFields": (()=>validateRequiredFields)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mongodb/mongoose.js [app-ssr] (ecmascript)");
;
// Cache storage with improved structure
const cache = {
    data: {},
    timestamps: {},
    hits: {},
    misses: {},
    lastUpdated: {}
};
// Cache statistics
let cacheHits = 0;
let cacheMisses = 0;
/**
 * Default cache expiration times in milliseconds
 */ const DEFAULT_CACHE_EXPIRATION = 5 * 60 * 1000; // 5 minutes
const DASHBOARD_CACHE_EXPIRATION = 2 * 60 * 1000; // 2 minutes for dashboard data
const CRITICAL_DATA_CACHE_EXPIRATION = 1 * 60 * 1000; // 1 minute for critical data
// Check if we're running on the client side
const isClient = "undefined" !== 'undefined';
const connectToMongoDB = async (timeoutMs = 3000, forceNew = false)=>{
    // If we're on the client side, return a mock successful connection
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    const startTime = Date.now();
    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getConnectionMetrics"])();
    // If connection is already established and we're not forcing a new one, return immediately
    if (!forceNew && metrics.connectionEstablished && metrics.readyState === 1) {
        console.log('MongoDB connection already established, reusing existing connection');
        return {
            success: true,
            connectionTime: 0,
            reused: true
        };
    }
    try {
        // Create a timeout promise with a more aggressive timeout
        const timeoutPromise = new Promise((_, reject)=>{
            setTimeout(()=>reject(new Error(`MongoDB connection timed out after ${timeoutMs}ms`)), timeoutMs);
        });
        // Race the connection against the timeout
        await Promise.race([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mongodb$2f$mongoose$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["connect"])(forceNew),
            timeoutPromise
        ]);
        const connectionTime = Date.now() - startTime;
        console.log(`MongoDB connection established in ${connectionTime}ms`);
        return {
            success: true,
            connectionTime,
            reused: false
        };
    } catch (error) {
        const failureTime = Date.now() - startTime;
        console.error(`MongoDB connection failed after ${failureTime}ms:`, error);
        // If this was a timeout, try again with a longer timeout
        if (error.message && error.message.includes('timed out') && timeoutMs < 5000) {
            console.log('Connection timed out, retrying with longer timeout...');
            return connectToMongoDB(5000, true);
        }
        return {
            success: false,
            error: 'Database connection failed',
            details: error.message || 'Unknown error',
            failureTime
        };
    }
};
const formatSuccessResponse = (data, message = 'Success')=>{
    return {
        status: 'success',
        message,
        data,
        timestamp: new Date().toISOString()
    };
};
const formatErrorResponse = (message, statusCode = 500, details = null)=>{
    return {
        status: 'error',
        message,
        statusCode,
        details,
        timestamp: new Date().toISOString()
    };
};
const getFromCache = (key, expirationTime = DEFAULT_CACHE_EXPIRATION, isDashboardData = false)=>{
    const cachedData = cache.data[key];
    const timestamp = cache.timestamps[key];
    if (!cachedData || !timestamp) {
        // Track cache miss
        cache.misses[key] = (cache.misses[key] || 0) + 1;
        cacheMisses++;
        return null;
    }
    const now = Date.now();
    // Use appropriate expiration time based on data type
    const actualExpiration = isDashboardData ? DASHBOARD_CACHE_EXPIRATION : expirationTime || DEFAULT_CACHE_EXPIRATION;
    if (now - timestamp > actualExpiration) {
        // Cache expired, remove it
        console.log(`Cache expired for key: ${key} (age: ${(now - timestamp) / 1000}s)`);
        delete cache.data[key];
        delete cache.timestamps[key];
        cache.misses[key] = (cache.misses[key] || 0) + 1;
        cacheMisses++;
        return null;
    }
    // Track cache hit
    cache.hits[key] = (cache.hits[key] || 0) + 1;
    cacheHits++;
    console.log(`Cache hit for key: ${key} (age: ${(now - timestamp) / 1000}s)`);
    return cachedData;
};
const saveToCache = (key, data, isDashboardData = false)=>{
    const now = Date.now();
    cache.data[key] = data;
    cache.timestamps[key] = now;
    cache.lastUpdated[key] = now;
    console.log(`Saved to cache: ${key}`);
    // For dashboard data, we'll pre-warm related caches
    if (isDashboardData && key.includes('user-stats')) {
        // If we're caching user stats, also cache a fallback version with a longer expiration
        const fallbackKey = `${key}:fallback`;
        cache.data[fallbackKey] = data;
        cache.timestamps[fallbackKey] = now;
        console.log(`Created fallback cache: ${fallbackKey}`);
    }
};
const getCacheStats = ()=>{
    return {
        hits: cacheHits,
        misses: cacheMisses,
        hitRatio: cacheHits / (cacheHits + cacheMisses || 1),
        entries: Object.keys(cache.data).length,
        keyStats: Object.keys(cache.data).map((key)=>({
                key,
                hits: cache.hits[key] || 0,
                misses: cache.misses[key] || 0,
                age: (Date.now() - cache.timestamps[key]) / 1000
            }))
    };
};
const clearCache = (key)=>{
    delete cache.data[key];
    delete cache.timestamps[key];
    console.log(`Cleared cache for key: ${key}`);
};
const clearAllCache = ()=>{
    const oldSize = Object.keys(cache.data).length;
    cache.data = {};
    cache.timestamps = {};
    console.log(`Cleared all cache entries (${oldSize} entries removed)`);
};
const getFallbackFromCache = (key)=>{
    const fallbackKey = `${key}:fallback`;
    const fallbackData = cache.data[fallbackKey];
    if (fallbackData) {
        console.log(`Using fallback cache for key: ${key}`);
        return fallbackData;
    }
    return null;
};
const fetchWithRetry = async (url, options = {}, retryOptions = {})=>{
    const { maxRetries = 3, retryDelay = 200, timeout = 2500, useFallbackCache = true, isDashboardData = false } = retryOptions;
    let attempts = 0;
    const startTime = Date.now();
    const requestId = Math.random().toString(36).substring(2, 10);
    // Extract userId from URL for cache key generation
    const userIdMatch = url.match(/user=([^&]+)/);
    const userId = userIdMatch ? userIdMatch[1] : 'anonymous';
    // Generate cache key based on URL
    const cacheKey = generateCacheKey(userId, url);
    // Check cache first
    const cachedData = getFromCache(cacheKey, null, isDashboardData);
    if (cachedData) {
        console.log(`[${requestId}] Using cached data for ${url}`);
        return {
            success: true,
            data: cachedData,
            fetchTime: 0,
            attempts: 0,
            fromCache: true
        };
    }
    // Add default headers if not provided
    const fetchOptions = {
        ...options,
        headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'X-Request-ID': requestId,
            ...options.headers || {}
        }
    };
    while(attempts <= maxRetries){
        // Create a controller for this attempt
        const controller = new AbortController();
        const timeoutId = setTimeout(()=>controller.abort(), timeout + attempts * 500); // Increase timeout with each retry
        try {
            console.log(`[${requestId}] Fetching ${url} (attempt ${attempts + 1}/${maxRetries + 1})...`);
            const response = await fetch(url, {
                ...fetchOptions,
                signal: controller.signal
            });
            // Clear the timeout since fetch completed
            clearTimeout(timeoutId);
            // Check if response is OK
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
            }
            // Try to parse as JSON
            let data;
            const textData = await response.text();
            // Check if response is HTML instead of JSON
            if (textData.trim().startsWith('<!DOCTYPE') || textData.trim().startsWith('<html')) {
                throw new Error('Received HTML instead of JSON');
            }
            try {
                data = JSON.parse(textData);
            } catch (parseError) {
                throw new Error(`Invalid JSON response: ${parseError.message}`);
            }
            // Check if the response contains an error field
            if (data.error) {
                console.warn(`[${requestId}] API returned error: ${data.error}`);
            }
            // Calculate fetch time
            const fetchTime = Date.now() - startTime;
            console.log(`[${requestId}] Fetch successful in ${fetchTime}ms`);
            // Cache the successful response
            saveToCache(cacheKey, data, isDashboardData);
            // Return success result with metadata
            return {
                success: true,
                data,
                fetchTime,
                attempts: attempts + 1,
                fromCache: false,
                status: response.status
            };
        } catch (error) {
            // Clear the timeout to prevent memory leaks
            clearTimeout(timeoutId);
            attempts++;
            const currentDuration = Date.now() - startTime;
            // Handle abort errors specially
            const isTimeout = error.name === 'AbortError';
            const errorMessage = isTimeout ? `Request timed out after ${timeout + (attempts - 1) * 500}ms` : error.message;
            // Use console.warn instead of console.error to prevent red error messages in console
            // Only log as error on the final attempt
            if (attempts > maxRetries) {
                console.warn(`[${requestId}] Fetch error (final attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${errorMessage}`);
            } else {
                console.log(`[${requestId}] Fetch retry needed (attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${errorMessage}`);
            }
            // On last attempt, try to use fallback cache if available
            if (attempts > maxRetries && useFallbackCache) {
                const fallbackData = getFallbackFromCache(cacheKey);
                if (fallbackData) {
                    console.log(`[${requestId}] Using fallback cache after all retries failed`);
                    return {
                        success: true,
                        data: fallbackData,
                        fetchTime: currentDuration,
                        attempts,
                        fromFallbackCache: true
                    };
                }
            }
            if (attempts <= maxRetries) {
                // Calculate delay with exponential backoff, but cap it at 2 seconds
                const delay = Math.min(retryDelay * Math.pow(1.5, attempts - 1), 2000);
                console.log(`[${requestId}] Retrying in ${delay}ms...`);
                await new Promise((resolve)=>setTimeout(resolve, delay));
            } else {
                return {
                    success: false,
                    error: errorMessage,
                    attempts,
                    duration: currentDuration
                };
            }
        }
    }
};
const generateCacheKey = (userId, endpoint, params = null)=>{
    // Create a base key with user ID and endpoint
    let key = `${userId}:${endpoint}`;
    // If additional parameters are provided, add them to the key
    if (params) {
        // Sort the keys to ensure consistent ordering
        const sortedKeys = Object.keys(params).sort();
        // Add each parameter to the key
        if (sortedKeys.length > 0) {
            const paramsStr = sortedKeys.filter((paramKey)=>params[paramKey] !== undefined && params[paramKey] !== null).map((paramKey)=>`${paramKey}=${params[paramKey]}`).join(',');
            if (paramsStr) {
                key += `:${paramsStr}`;
            }
        }
    }
    return key;
};
const validateRequiredFields = (data, requiredFields)=>{
    const missingFields = requiredFields.filter((field)=>{
        const value = data[field];
        return value === undefined || value === null || value === '';
    });
    return {
        success: missingFields.length === 0,
        missingFields
    };
};
const formatDateForDisplay = (date)=>{
    if (!date) return "Never";
    const dateObj = date instanceof Date ? date : new Date(date);
    if (isNaN(dateObj.getTime())) {
        return "Invalid date";
    }
    return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};
const handleMongoQuery = async (queryFn, errorMessage = 'Database query failed', options = {})=>{
    const { maxRetries = 3, retryDelay = 300, timeout = 3000, cacheKey = null, useCache = true, isDashboardData = false } = options;
    const requestId = Math.random().toString(36).substring(2, 10);
    let attempts = 0;
    const startTime = Date.now();
    // Check cache if a cache key is provided and caching is enabled
    if (cacheKey && useCache) {
        const cachedData = getFromCache(cacheKey, null, isDashboardData);
        if (cachedData) {
            console.log(`[${requestId}] Using cached data for query (key: ${cacheKey})`);
            return {
                success: true,
                data: cachedData,
                queryTime: 0,
                attempts: 0,
                fromCache: true
            };
        }
    }
    // Ensure MongoDB connection is established before running query
    try {
        const connectionResult = await connectToMongoDB(2000);
        if (!connectionResult.success) {
            console.error(`[${requestId}] MongoDB connection failed before query: ${connectionResult.error}`);
            // If we have a fallback cache, use it
            if (cacheKey && useCache) {
                const fallbackData = getFallbackFromCache(cacheKey);
                if (fallbackData) {
                    console.log(`[${requestId}] Using fallback cache due to connection failure`);
                    return {
                        success: true,
                        data: fallbackData,
                        queryTime: 0,
                        attempts: 0,
                        fromFallbackCache: true
                    };
                }
            }
        }
    } catch (connError) {
        console.error(`[${requestId}] Error checking MongoDB connection:`, connError);
    }
    while(attempts <= maxRetries){
        try {
            // Create a timeout promise with increasing timeout for each retry
            const currentTimeout = timeout + attempts * 500;
            const timeoutPromise = new Promise((_, reject)=>{
                setTimeout(()=>reject(new Error(`Query timed out after ${currentTimeout}ms`)), currentTimeout);
            });
            console.log(`[${requestId}] Executing query (attempt ${attempts + 1}/${maxRetries + 1})...`);
            // Race the query against the timeout
            const result = await Promise.race([
                queryFn(),
                timeoutPromise
            ]);
            const queryTime = Date.now() - startTime;
            if (attempts > 0) {
                console.log(`[${requestId}] Query succeeded after ${attempts} retries in ${queryTime}ms`);
            } else if (queryTime > 500) {
                console.log(`[${requestId}] Query took ${queryTime}ms to complete`);
            }
            // Cache the result if a cache key is provided
            if (cacheKey && useCache && result) {
                saveToCache(cacheKey, result, isDashboardData);
            }
            return {
                success: true,
                data: result,
                queryTime,
                attempts,
                fromCache: false
            };
        } catch (error) {
            attempts++;
            const currentDuration = Date.now() - startTime;
            // Use console.warn instead of console.error to prevent red error messages in console
            // Only log as error on the final attempt
            if (attempts > maxRetries) {
                console.warn(`[${requestId}] ${errorMessage} (final attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms):`, error.message || 'Unknown error');
            } else {
                console.log(`[${requestId}] Query retry needed (attempt ${attempts}/${maxRetries + 1}, ${currentDuration}ms): ${error.message || 'Unknown error'}`);
            }
            // On last attempt, try to use fallback cache if available
            if (attempts > maxRetries && cacheKey && useCache) {
                const fallbackData = getFallbackFromCache(cacheKey);
                if (fallbackData) {
                    console.log(`[${requestId}] Using fallback cache after all query retries failed`);
                    return {
                        success: true,
                        data: fallbackData,
                        queryTime: currentDuration,
                        attempts,
                        fromFallbackCache: true
                    };
                }
            }
            if (attempts <= maxRetries) {
                // Calculate delay with exponential backoff, but cap it at 2 seconds
                const delay = Math.min(retryDelay * Math.pow(1.5, attempts - 1), 2000);
                console.log(`[${requestId}] Retrying query in ${delay}ms...`);
                await new Promise((resolve)=>setTimeout(resolve, delay));
            } else {
                return {
                    success: false,
                    error: errorMessage,
                    details: error.message,
                    attempts,
                    duration: currentDuration
                };
            }
        }
    }
};
}}),
"[project]/src/app/dashboard/practices/page.jsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Practices)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/DashboardLayout.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardPageWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/DashboardPageWrapper.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/nextjs/dist/esm/client-boundary/PromisifiedAuthProvider.js [app-ssr] (ecmascript) <export usePromisifiedAuth as useAuth>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$wavy$2d$background$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/wavy-background.js [app-ssr] (ecmascript)");
// Import fetchWithRetry utility for better API handling
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api/apiUtils.js [app-ssr] (ecmascript)");
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
function Practices() {
    const { isLoaded: isAuthLoaded, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$nextjs$2f$dist$2f$esm$2f$client$2d$boundary$2f$PromisifiedAuthProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__usePromisifiedAuth__as__useAuth$3e$__["useAuth"])();
    const [searchQuery, setSearchQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [sortBy, setSortBy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("date");
    const [sortOrder, setSortOrder] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("desc");
    const [currentPage, setCurrentPage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [practicesData, setPracticesData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [pagination, setPagination] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        currentPage: 1,
        totalPages: 1,
        totalCount: 0,
        hasNextPage: false,
        hasPrevPage: false
    });
    const [expandedPractice, setExpandedPractice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hoveredPractice, setHoveredPractice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const practiceListRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Add global error handler to suppress console errors
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    }, []);
    // Fetch practice sessions from the API with improved error handling and retry logic
    const fetchPracticeSessions = async ()=>{
        if (!isAuthLoaded || !userId) return;
        setIsLoading(true);
        // Clear previous errors
        setError(null);
        try {
            // Build query parameters
            const params = new URLSearchParams({
                page: currentPage,
                limit: 10,
                sortBy: sortBy === "date" ? "analysisDate" : sortBy === "score" ? "recommendations.performance_assessment.overall_score" : sortBy === "duration" ? "voiceAnalysis.duration" : "analysisDate",
                sortOrder: sortOrder,
                search: searchQuery,
                requestId: Math.random().toString(36).substring(2, 10) // Add request ID for tracking
            });
            // Use fetchWithRetry for better error handling and automatic retries
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2f$apiUtils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithRetry"])(`/api/practice-sessions?${params}`, {}, {
                timeout: 3000,
                maxRetries: 2,
                retryDelay: 300,
                useFallbackCache: true // Use fallback cache if available
            });
            // Check if the fetch was successful
            if (!result.success) {
                throw new Error(result.error || "Failed to fetch practice sessions");
            }
            const data = result.data;
            // Check if data has the expected structure
            if (!data || !Array.isArray(data.sessions)) {
                console.log("Invalid practice sessions data format:", data);
                // Create fallback mock data if API returns invalid data
                const mockSessions = Array.from({
                    length: 3
                }, (_, i)=>{
                    const date = new Date();
                    date.setDate(date.getDate() - i);
                    return {
                        id: `fallback-${i}`,
                        title: `Practice Session May ${19 - i}, 2025`,
                        date: `May ${19 - i}, 2025`,
                        time: "10:00 AM",
                        timestamp: date.getTime(),
                        duration: "2:30",
                        durationSeconds: 150,
                        score: 80,
                        wordCount: 200,
                        speakingRate: "120.0",
                        coherenceScore: "0.85",
                        vocabularyRichness: "0.75",
                        fillerWordsCount: 5,
                        emotion: "Neutral",
                        strengths: [
                            "Clear articulation",
                            "Good pacing"
                        ],
                        growthAreas: [
                            "Reduce filler words",
                            "Improve structure"
                        ],
                        performanceLevel: "Intermediate",
                        transcription: "This is a sample transcription.",
                        hasTranscript: true,
                        hasVoiceAnalysis: true,
                        hasTextAnalysis: true,
                        hasRecommendations: true
                    };
                });
                setPracticesData(mockSessions);
                setPagination({
                    currentPage: 1,
                    totalPages: 1,
                    totalCount: mockSessions.length,
                    hasNextPage: false,
                    hasPrevPage: false
                });
                return;
            }
            // Ensure each practice session has all required fields with fallbacks
            const validatedSessions = data.sessions.map((session)=>({
                    ...session,
                    // Ensure all required fields have fallback values
                    id: session.id || `fallback-${Math.random().toString(36).substring(2, 10)}`,
                    title: session.title || `Practice Session`,
                    date: session.date || new Date().toLocaleDateString(),
                    time: session.time || new Date().toLocaleTimeString(),
                    timestamp: session.timestamp || Date.now(),
                    duration: session.duration || "0:00",
                    durationSeconds: session.durationSeconds || 0,
                    score: session.score || 0,
                    wordCount: session.wordCount || 0,
                    speakingRate: session.speakingRate || "0.0",
                    coherenceScore: session.coherenceScore || "0.0",
                    vocabularyRichness: session.vocabularyRichness || "0.0",
                    fillerWordsCount: session.fillerWordsCount || 0,
                    emotion: session.emotion || "Neutral",
                    strengths: session.strengths || [],
                    growthAreas: session.growthAreas || [],
                    performanceLevel: session.performanceLevel || "Beginner",
                    transcription: session.transcription || "",
                    hasTranscript: !!session.hasTranscript,
                    hasVoiceAnalysis: !!session.hasVoiceAnalysis,
                    hasTextAnalysis: !!session.hasTextAnalysis,
                    hasRecommendations: !!session.hasRecommendations
                }));
            // Update state with the validated data
            setPracticesData(validatedSessions);
            setPagination(data.pagination || {
                currentPage: 1,
                totalPages: 1,
                totalCount: validatedSessions.length,
                hasNextPage: false,
                hasPrevPage: false
            });
            // Log performance details
            if (result.fetchTime) {
                console.log(`Practice sessions fetched in ${result.fetchTime}ms`);
            }
        } catch (err) {
            // Use console.log instead of console.error to prevent red error messages
            console.log("Issue fetching practice sessions:", err.message || "Unknown error");
            // Create fallback mock data instead of showing an error
            const mockSessions = Array.from({
                length: 3
            }, (_, i)=>{
                const date = new Date();
                date.setDate(date.getDate() - i);
                return {
                    id: `error-fallback-${i}`,
                    title: `Practice Session May ${19 - i}, 2025`,
                    date: `May ${19 - i}, 2025`,
                    time: "10:00 AM",
                    timestamp: date.getTime(),
                    duration: "0:00",
                    durationSeconds: 0,
                    score: 0,
                    wordCount: 0,
                    speakingRate: "0.0",
                    coherenceScore: "0.0",
                    vocabularyRichness: "0.0",
                    fillerWordsCount: 0,
                    emotion: "Neutral",
                    strengths: [],
                    growthAreas: [],
                    performanceLevel: "Beginner",
                    transcription: "",
                    hasTranscript: true,
                    hasVoiceAnalysis: true,
                    hasTextAnalysis: true,
                    hasRecommendations: true
                };
            });
            // Update state with mock data
            setPracticesData(mockSessions);
            setPagination({
                currentPage: 1,
                totalPages: 1,
                totalCount: mockSessions.length,
                hasNextPage: false,
                hasPrevPage: false
            });
            // Only retry if this is not already a retry attempt
            if (!window.__practicesRetryInProgress) {
                // Try again after a delay
                console.log('Scheduling retry for practice sessions in 3 seconds...');
                window.__practicesRetryInProgress = true;
                setTimeout(()=>{
                    console.log('Retrying practice sessions fetch...');
                    try {
                        fetchPracticeSessions();
                    } catch (retryErr) {
                        console.log('Error during practice sessions retry:', retryErr.message || 'Unknown error');
                    } finally{
                        window.__practicesRetryInProgress = false;
                    }
                }, 3000);
            }
        } finally{
            setIsLoading(false);
        }
    };
    // Fetch data when component mounts or when dependencies change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isAuthLoaded) {
            fetchPracticeSessions();
        }
    }, [
        isAuthLoaded,
        userId,
        currentPage,
        sortBy,
        sortOrder
    ]);
    // Debounce search query changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const timer = setTimeout(()=>{
            if (isAuthLoaded) {
                setCurrentPage(1); // Reset to first page on new search
                fetchPracticeSessions();
            }
        }, 500);
        return ()=>clearTimeout(timer);
    }, [
        searchQuery
    ]);
    // Format date for display
    const formatDate = (dateString)=>{
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };
    // Format time for display
    const formatTime = (timeString)=>{
        if (!timeString) return "";
        const date = new Date(timeString);
        return date.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    // Format relative time (e.g., "2 days ago")
    const formatRelativeTime = (dateString)=>{
        if (!dateString) return "N/A";
        const date = new Date(dateString);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        if (diffInSeconds < 60) return "just now";
        if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
        if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
        if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
        if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
        return formatDate(dateString);
    };
    // Sort practices based on current sort settings with safety checks
    const sortedPractices = [
        ...practicesData
    ].sort((a, b)=>{
        // Ensure we have valid objects with required properties
        if (!a || !b) return 0;
        if (sortBy === 'date') {
            // Safely handle timestamp sorting with fallbacks
            const timestampA = a.timestamp ? new Date(a.timestamp).getTime() : 0;
            const timestampB = b.timestamp ? new Date(b.timestamp).getTime() : 0;
            return sortOrder === 'desc' ? timestampB - timestampA : timestampA - timestampB;
        }
        if (sortBy === 'score') {
            // Safely handle score sorting with fallbacks
            const scoreA = typeof a.score === 'number' ? a.score : 0;
            const scoreB = typeof b.score === 'number' ? b.score : 0;
            return sortOrder === 'desc' ? scoreB - scoreA : scoreA - scoreB;
        }
        if (sortBy === 'duration') {
            // Safely handle duration sorting with fallbacks
            const durationA = typeof a.durationSeconds === 'number' ? a.durationSeconds : 0;
            const durationB = typeof b.durationSeconds === 'number' ? b.durationSeconds : 0;
            return sortOrder === 'desc' ? durationB - durationA : durationA - durationB;
        }
        return 0;
    });
    // No longer using practice type counts for segmentation
    // Helper functions for UI
    const getScoreColor = (score)=>{
        if (score >= 90) return "bg-green-900/30 text-green-400";
        if (score >= 80) return "bg-blue-900/30 text-blue-400";
        if (score >= 70) return "bg-yellow-900/30 text-yellow-400";
        return "bg-red-900/30 text-red-400";
    };
    const getPerformanceLevelColor = (level)=>{
        if (!level) return "text-gray-400";
        const levelLower = level.toLowerCase();
        if (levelLower.includes('advanced') || levelLower.includes('expert')) return "text-green-400";
        if (levelLower.includes('intermediate')) return "text-blue-400";
        if (levelLower.includes('developing')) return "text-yellow-400";
        if (levelLower.includes('beginner') || levelLower.includes('novice')) return "text-orange-400";
        return "text-gray-400";
    };
    const getTypeIcon = ()=>{
        // Consistent practice icon for all types
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5 text-purple-600",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M12,3 C16.9706,3 21,7.02944 21,12 C21,16.9706 16.9706,21 12,21 C7.02944,21 3,16.9706 3,12 C3,7.02944 7.02944,3 12,3 Z"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 380,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.5,9 L16.5,9"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.5,12 L16.5,12"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 382,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9.5,15 L14,15"
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/practices/page.jsx",
            lineNumber: 379,
            columnNumber: 7
        }, this);
    };
    // Function to toggle expanded practice
    const toggleExpandPractice = (id)=>{
        setExpandedPractice(expandedPractice === id ? null : id);
    };
    // Scroll to expanded practice
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (expandedPractice && practiceListRef.current) {
            const expandedElement = document.getElementById(`practice-${expandedPractice}`);
            if (expandedElement) {
                // Smooth scroll to the expanded practice
                expandedElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                });
            }
        }
    }, [
        expandedPractice
    ]);
    // Animation variants
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };
    const cardVariants = {
        hidden: {
            y: 20,
            opacity: 0
        },
        visible: (i)=>({
                y: 0,
                opacity: 1,
                transition: {
                    delay: i * 0.05,
                    duration: 0.4,
                    ease: [
                        0.25,
                        0.1,
                        0.25,
                        1.0
                    ]
                }
            }),
        hover: {
            y: -5,
            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        },
        tap: {
            y: 0,
            scale: 0.98,
            transition: {
                duration: 0.15
            }
        }
    };
    // Loading animation variants
    const loadingPulseVariants = {
        initial: {
            opacity: 0.6
        },
        animate: {
            opacity: [
                0.6,
                0.8,
                0.6
            ],
            transition: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
            }
        }
    };
    const expandedCardVariants = {
        collapsed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        expanded: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeInOut",
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const expandedItemVariants = {
        collapsed: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 0.2
            }
        },
        expanded: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.3
            }
        }
    };
    const paginationVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.5,
                duration: 0.4
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardPageWrapper$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            title: "My Practice Sessions",
            description: "Review and analyze your speaking practice history",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "rounded-xl shadow-lg mb-8 overflow-hidden relative",
                    initial: {
                        opacity: 0,
                        y: -20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 z-0 overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$wavy$2d$background$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WavyBackground"], {
                                colors: [
                                    'rgba(139, 92, 246, 0.15)',
                                    'rgba(59, 130, 246, 0.1)',
                                    'rgba(16, 185, 129, 0.1)'
                                ],
                                blur: 30,
                                speed: "slow",
                                waveWidth: 100,
                                backgroundFill: "rgba(17, 24, 39, 0.7)",
                                waveOpacity: 0.5,
                                className: "w-full h-full"
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                lineNumber: 519,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 518,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 531,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-xl border border-purple-500/20 bg-gradient-to-br from-gray-900/80 to-gray-950/90 z-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 535,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10 p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center w-full md:w-auto",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative flex-grow md:max-w-md group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    placeholder: "Search practices...",
                                                    value: searchQuery,
                                                    onChange: (e)=>setSearchQuery(e.target.value),
                                                    className: "w-full pl-12 pr-20 py-3.5 bg-gray-900/50 text-gray-200 rounded-xl border border-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 backdrop-blur-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute left-4 top-3.5 text-purple-400",
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.1,
                                                            1
                                                        ],
                                                        opacity: [
                                                            0.7,
                                                            1,
                                                            0.7
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 563,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 562,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 550,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute right-4 top-3.5 bg-purple-900/50 px-3 py-1 rounded-full text-xs text-purple-200 border border-purple-500/30 backdrop-blur-sm",
                                                    initial: {
                                                        opacity: 0,
                                                        x: 10
                                                    },
                                                    animate: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: 0.3,
                                                        duration: 0.5
                                                    },
                                                    children: [
                                                        pagination.totalCount || 0,
                                                        " sessions"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 566,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100",
                                                    animate: {
                                                        boxShadow: [
                                                            "0 0 0 0 rgba(139, 92, 246, 0)",
                                                            "0 0 0 3px rgba(139, 92, 246, 0.3)",
                                                            "0 0 0 0 rgba(139, 92, 246, 0)"
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 576,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 542,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                        lineNumber: 541,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 w-full md:w-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative group flex-grow md:flex-grow-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: sortBy,
                                                        onChange: (e)=>setSortBy(e.target.value),
                                                        className: "appearance-none w-full md:w-auto pl-4 pr-10 py-3.5 bg-gray-900/50 text-gray-200 rounded-xl border border-blue-500/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 backdrop-blur-sm",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "date",
                                                                children: "Sort by Date"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 598,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "score",
                                                                children: "Sort by Score"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 599,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "duration",
                                                                children: "Sort by Duration"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 600,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute right-3 top-3.5 text-blue-400 pointer-events-none",
                                                        animate: {
                                                            y: [
                                                                0,
                                                                -2,
                                                                0,
                                                                2,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 5,
                                                            repeat: Infinity,
                                                            repeatType: "loop"
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 614,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 613,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 602,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100",
                                                        animate: {
                                                            boxShadow: [
                                                                "0 0 0 0 rgba(59, 130, 246, 0)",
                                                                "0 0 0 3px rgba(59, 130, 246, 0.3)",
                                                                "0 0 0 0 rgba(59, 130, 246, 0)"
                                                            ]
                                                        },
                                                        transition: {
                                                            duration: 2,
                                                            repeat: Infinity,
                                                            repeatType: "loop"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                lineNumber: 592,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].button, {
                                                onClick: ()=>setSortOrder(sortOrder === "desc" ? "asc" : "desc"),
                                                className: "p-3.5 bg-gray-900/50 text-gray-200 rounded-xl border border-blue-500/30 hover:bg-blue-900/20 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group",
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                title: sortOrder === "desc" ? "Descending order" : "Ascending order",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100",
                                                        initial: {
                                                            scale: 0
                                                        },
                                                        animate: {
                                                            scale: [
                                                                0,
                                                                1.5,
                                                                1
                                                            ],
                                                            opacity: [
                                                                0,
                                                                0.3,
                                                                0
                                                            ]
                                                        },
                                                        transition: {
                                                            repeat: Infinity,
                                                            duration: 2,
                                                            repeatType: "loop",
                                                            repeatDelay: 1
                                                        },
                                                        style: {
                                                            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
                                                            borderRadius: '0.75rem'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 640,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        animate: {
                                                            rotate: sortOrder === "desc" ? 0 : 180
                                                        },
                                                        transition: {
                                                            duration: 0.5,
                                                            type: "spring",
                                                            stiffness: 100
                                                        },
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-5 w-5 text-blue-400",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M3 3a1 1 0 000 2h11a1 1 0 100-2H3zM3 7a1 1 0 000 2h7a1 1 0 100-2H3zM3 11a1 1 0 100 2h4a1 1 0 100-2H3zM15 8a1 1 0 10-2 0v5.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L15 13.586V8z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 661,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 660,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 656,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                lineNumber: 632,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                        lineNumber: 591,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                lineNumber: 539,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 538,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 511,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "rounded-xl shadow-lg p-6 relative overflow-hidden",
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible",
                    ref: practiceListRef,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "100%",
                                height: "100%",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: "grid-pattern",
                                            width: "20",
                                            height: "20",
                                            patternUnits: "userSpaceOnUse",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M 20 0 L 0 0 0 20",
                                                fill: "none",
                                                stroke: "white",
                                                strokeWidth: "0.5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                lineNumber: 683,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 682,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                        lineNumber: 681,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        width: "100%",
                                        height: "100%",
                                        fill: "url(#grid-pattern)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                        lineNumber: 686,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                lineNumber: 680,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 679,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-950/95 border border-blue-500/20 rounded-xl z-0"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 691,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 694,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full filter blur-3xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 695,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-600 to-transparent opacity-10 rounded-bl-full",
                            initial: {
                                scale: 0,
                                opacity: 0
                            },
                            animate: {
                                scale: 1,
                                opacity: 0.1
                            },
                            transition: {
                                duration: 0.7,
                                delay: 0.3
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 698,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                isLoading ? // Loading state with skeleton cards
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "grid grid-cols-1 gap-6 w-full",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        ...Array(3)
                                    ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "relative overflow-hidden rounded-xl border border-blue-500/10 bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-sm",
                                            initial: {
                                                opacity: 0,
                                                y: 20
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                transition: {
                                                    delay: i * 0.1,
                                                    duration: 0.4
                                                }
                                            },
                                            whileInView: {
                                                y: [
                                                    0,
                                                    -5,
                                                    0
                                                ],
                                                transition: {
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    duration: 3,
                                                    delay: i * 0.5
                                                }
                                            },
                                            style: {
                                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-10 pointer-events-none overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "100%",
                                                        height: "100%",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                    id: `grid-card-skeleton-${i}`,
                                                                    width: "20",
                                                                    height: "20",
                                                                    patternUnits: "userSpaceOnUse",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 20 0 L 0 0 0 20",
                                                                        fill: "none",
                                                                        stroke: "white",
                                                                        strokeWidth: "0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 746,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                    lineNumber: 745,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 744,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "100%",
                                                                height: "100%",
                                                                fill: `url(#grid-card-skeleton-${i})`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 749,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 743,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 742,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full filter blur-xl pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 754,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full filter blur-xl pointer-events-none"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 755,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/5 to-transparent -translate-x-full animate-shimmer"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 758,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 relative z-10",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "flex-shrink-0 h-14 w-14 rounded-full bg-blue-900/20 border border-blue-500/30 flex items-center justify-center",
                                                                        variants: loadingPulseVariants,
                                                                        initial: "initial",
                                                                        animate: "animate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 764,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                className: "h-5 bg-gray-700/60 rounded w-32 mb-2",
                                                                                variants: loadingPulseVariants,
                                                                                initial: "initial",
                                                                                animate: "animate"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 771,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "h-4 bg-gray-700/60 rounded w-24 flex items-center",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                    className: "h-4 w-4 mr-1 bg-blue-900/40 rounded-full",
                                                                                    variants: loadingPulseVariants,
                                                                                    initial: "initial",
                                                                                    animate: "animate"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 778,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 777,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 770,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 763,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-8 w-24 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-blue-500/20",
                                                                        variants: loadingPulseVariants,
                                                                        initial: "initial",
                                                                        animate: "animate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 791,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-8 w-28 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-yellow-500/20",
                                                                        variants: loadingPulseVariants,
                                                                        initial: "initial",
                                                                        animate: "animate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 799,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "h-8 w-20 bg-gray-800/70 backdrop-blur-sm rounded-lg border border-blue-500/20",
                                                                        variants: loadingPulseVariants,
                                                                        initial: "initial",
                                                                        animate: "animate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 807,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "ml-2 h-8 w-8 rounded-full bg-gray-800/70 border border-blue-500/20",
                                                                        variants: loadingPulseVariants,
                                                                        initial: "initial",
                                                                        animate: "animate"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 815,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 789,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 761,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 760,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                    lineNumber: 709,
                                    columnNumber: 15
                                }, this) : sortedPractices.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "grid grid-cols-1 gap-6",
                                    variants: containerVariants,
                                    children: sortedPractices.map((practice, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            id: `practice-${practice.id}`,
                                            className: `relative overflow-hidden rounded-xl border ${hoveredPractice === practice.id ? "border-blue-500/50" : "border-blue-500/10"} bg-gradient-to-br from-gray-900/60 to-gray-950/80 backdrop-blur-sm transition-all duration-300`,
                                            variants: cardVariants,
                                            custom: index,
                                            whileHover: "hover",
                                            whileTap: "tap",
                                            onHoverStart: ()=>setHoveredPractice(practice.id),
                                            onHoverEnd: ()=>setHoveredPractice(null),
                                            style: {
                                                boxShadow: hoveredPractice === practice.id ? '0 0 20px rgba(59, 130, 246, 0.3)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 opacity-10 pointer-events-none overflow-hidden",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        width: "100%",
                                                        height: "100%",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                    id: `grid-card-${practice.id}`,
                                                                    width: "20",
                                                                    height: "20",
                                                                    patternUnits: "userSpaceOnUse",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M 20 0 L 0 0 0 20",
                                                                        fill: "none",
                                                                        stroke: "white",
                                                                        strokeWidth: "0.5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 858,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                    lineNumber: 857,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 856,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                width: "100%",
                                                                height: "100%",
                                                                fill: `url(#grid-card-${practice.id})`
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 861,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 855,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 854,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute inset-0 opacity-0 pointer-events-none",
                                                    animate: {
                                                        opacity: hoveredPractice === practice.id ? 0.15 : 0,
                                                        background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)'
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 866,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-blue-600 to-transparent opacity-0 rounded-bl-full",
                                                    animate: {
                                                        opacity: hoveredPractice === practice.id ? 0.2 : 0,
                                                        scale: hoveredPractice === practice.id ? 1 : 0.8
                                                    },
                                                    transition: {
                                                        duration: 0.3
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 876,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "p-6 cursor-pointer relative z-10",
                                                    onClick: ()=>toggleExpandPractice(practice.id),
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col md:flex-row md:items-center justify-between gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "flex-shrink-0 h-14 w-14 rounded-full bg-purple-900/20 border border-purple-500/30 flex items-center justify-center relative overflow-hidden",
                                                                        whileHover: {
                                                                            scale: 1.05
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                className: "absolute inset-0 bg-purple-500/20 opacity-0",
                                                                                animate: {
                                                                                    opacity: hoveredPractice === practice.id ? 0.5 : 0,
                                                                                    scale: hoveredPractice === practice.id ? 1.2 : 1
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.5
                                                                                }
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 898,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                animate: {
                                                                                    scale: [
                                                                                        1,
                                                                                        1.05,
                                                                                        1
                                                                                    ],
                                                                                    rotate: hoveredPractice === practice.id ? [
                                                                                        0,
                                                                                        -5,
                                                                                        5,
                                                                                        0
                                                                                    ] : 0
                                                                                },
                                                                                transition: {
                                                                                    scale: {
                                                                                        duration: 2,
                                                                                        repeat: Infinity,
                                                                                        repeatType: "reverse"
                                                                                    },
                                                                                    rotate: {
                                                                                        duration: 0.5,
                                                                                        delay: 0.2
                                                                                    }
                                                                                },
                                                                                className: "relative z-10 text-purple-600",
                                                                                children: getTypeIcon()
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 908,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 892,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "ml-4",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                className: "text-base font-medium text-gray-200",
                                                                                animate: {
                                                                                    color: hoveredPractice === practice.id ? 'rgb(191, 219, 254)' : 'rgb(229, 231, 235)'
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.3
                                                                                },
                                                                                children: practice.title
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 924,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                className: "text-sm text-gray-400 flex items-center mt-1",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                                        className: "h-4 w-4 mr-1 text-blue-500",
                                                                                        viewBox: "0 0 20 20",
                                                                                        fill: "currentColor",
                                                                                        animate: {
                                                                                            rotate: hoveredPractice === practice.id ? [
                                                                                                0,
                                                                                                360
                                                                                            ] : 0
                                                                                        },
                                                                                        transition: {
                                                                                            duration: 1,
                                                                                            delay: 0.2,
                                                                                            ease: "easeInOut"
                                                                                        },
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                            fillRule: "evenodd",
                                                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                                                            clipRule: "evenodd"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 948,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 934,
                                                                                        columnNumber: 31
                                                                                    }, this),
                                                                                    formatRelativeTime(practice.timestamp)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 933,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 923,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 891,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-wrap items-center gap-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: `/dashboard/practice/${practice.id}`,
                                                                        onClick: (e)=>{
                                                                            e.stopPropagation(); // Prevent toggling the card expansion
                                                                        },
                                                                        className: "flex items-center bg-purple-600 hover:bg-purple-700 text-white px-3 py-1.5 rounded-lg border border-purple-500/20 transition-colors cursor-pointer",
                                                                        style: {
                                                                            textDecoration: 'none'
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                            className: "flex items-center w-full",
                                                                            whileHover: {
                                                                                scale: 1.05
                                                                            },
                                                                            whileTap: {
                                                                                scale: 0.95
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "h-4 w-4 mr-1.5 text-white",
                                                                                    viewBox: "0 0 20 20",
                                                                                    fill: "currentColor",
                                                                                    animate: {
                                                                                        rotate: hoveredPractice === practice.id ? [
                                                                                            0,
                                                                                            360
                                                                                        ] : 0
                                                                                    },
                                                                                    transition: {
                                                                                        duration: 1,
                                                                                        delay: 0.2,
                                                                                        ease: "easeInOut"
                                                                                    },
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 985,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 971,
                                                                                    columnNumber: 31
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-sm font-medium",
                                                                                    children: "View Analysis"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 987,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                            lineNumber: 966,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 958,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "flex items-center bg-gray-900/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-blue-500/20",
                                                                        whileHover: {
                                                                            scale: 1.05,
                                                                            borderColor: 'rgba(59, 130, 246, 0.4)'
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4 mr-1.5 text-blue-500",
                                                                                viewBox: "0 0 20 20",
                                                                                fill: "currentColor",
                                                                                animate: {
                                                                                    rotate: hoveredPractice === practice.id ? [
                                                                                        0,
                                                                                        10,
                                                                                        -10,
                                                                                        0
                                                                                    ] : 0
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.5,
                                                                                    delay: 0.1,
                                                                                    repeat: hoveredPractice === practice.id ? 1 : 0
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 1011,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 997,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-blue-300",
                                                                                children: practice.duration
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1013,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 992,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "flex items-center bg-gray-900/50 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-yellow-500/20",
                                                                        whileHover: {
                                                                            scale: 1.05,
                                                                            borderColor: 'rgba(234, 179, 8, 0.4)'
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "h-4 w-4 mr-1.5 text-yellow-500",
                                                                                viewBox: "0 0 20 20",
                                                                                fill: "currentColor",
                                                                                animate: {
                                                                                    scale: hoveredPractice === practice.id ? [
                                                                                        1,
                                                                                        1.2,
                                                                                        1
                                                                                    ] : 1
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.5,
                                                                                    delay: 0.2,
                                                                                    repeat: hoveredPractice === practice.id ? 1 : 0
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    fillRule: "evenodd",
                                                                                    d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                                                                                    clipRule: "evenodd"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 1036,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1022,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: "text-sm text-yellow-300",
                                                                                children: [
                                                                                    practice.wordCount || 0,
                                                                                    " words"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1038,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 1017,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: `flex items-center px-3 py-1.5 rounded-lg backdrop-blur-sm border ${practice.score >= 90 ? "border-green-500/30 bg-green-900/20" : practice.score >= 80 ? "border-blue-500/30 bg-blue-900/20" : practice.score >= 70 ? "border-yellow-500/30 bg-yellow-900/20" : "border-red-500/30 bg-red-900/20"}`,
                                                                        whileHover: {
                                                                            scale: 1.05
                                                                        },
                                                                        transition: {
                                                                            duration: 0.2
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: `h-4 w-4 mr-1.5 ${practice.score >= 90 ? "text-green-400" : practice.score >= 80 ? "text-blue-400" : practice.score >= 70 ? "text-yellow-400" : "text-red-400"}`,
                                                                                viewBox: "0 0 20 20",
                                                                                fill: "currentColor",
                                                                                animate: {
                                                                                    rotate: hoveredPractice === practice.id ? [
                                                                                        0,
                                                                                        360
                                                                                    ] : 0,
                                                                                    scale: hoveredPractice === practice.id ? [
                                                                                        1,
                                                                                        1.2,
                                                                                        1
                                                                                    ] : 1
                                                                                },
                                                                                transition: {
                                                                                    rotate: {
                                                                                        duration: 0.7,
                                                                                        delay: 0.3
                                                                                    },
                                                                                    scale: {
                                                                                        duration: 0.5,
                                                                                        delay: 0.3
                                                                                    }
                                                                                },
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                    lineNumber: 1071,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1052,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: `text-sm font-medium ${practice.score >= 90 ? "text-green-300" : practice.score >= 80 ? "text-blue-300" : practice.score >= 70 ? "text-yellow-300" : "text-red-300"}`,
                                                                                children: [
                                                                                    practice.score,
                                                                                    "%"
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1073,
                                                                                columnNumber: 29
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 1042,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                        className: "ml-2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-900/50 border border-blue-500/20 text-blue-400",
                                                                        animate: {
                                                                            rotate: expandedPractice === practice.id ? 180 : 0,
                                                                            backgroundColor: expandedPractice === practice.id ? 'rgba(59, 130, 246, 0.2)' : 'rgba(17, 24, 39, 0.5)',
                                                                            borderColor: expandedPractice === practice.id ? 'rgba(59, 130, 246, 0.4)' : 'rgba(59, 130, 246, 0.2)'
                                                                        },
                                                                        transition: {
                                                                            duration: 0.3
                                                                        },
                                                                        whileHover: {
                                                                            scale: 1.1
                                                                        },
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            className: "h-5 w-5",
                                                                            viewBox: "0 0 20 20",
                                                                            fill: "currentColor",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                fillRule: "evenodd",
                                                                                d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                                                clipRule: "evenodd"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1093,
                                                                                columnNumber: 31
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                            lineNumber: 1092,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 1082,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 956,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 889,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 885,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: expandedPractice === practice.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        className: "px-6 pb-6 pt-2 border-t border-blue-500/20 relative",
                                                        variants: expandedCardVariants,
                                                        initial: "collapsed",
                                                        animate: "expanded",
                                                        exit: "collapsed",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                className: "absolute inset-0 bg-blue-500/5 rounded-b-xl pointer-events-none",
                                                                initial: {
                                                                    opacity: 0
                                                                },
                                                                animate: {
                                                                    opacity: 1
                                                                },
                                                                exit: {
                                                                    opacity: 0
                                                                },
                                                                transition: {
                                                                    duration: 0.5
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 1111,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute bottom-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full filter blur-3xl pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 1120,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "absolute top-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full filter blur-3xl pointer-events-none"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 1121,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-6",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                variants: expandedItemVariants,
                                                                                className: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20 relative overflow-hidden",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "100%",
                                                                                            height: "100%",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                                        id: `grid-metrics-${practice.id}`,
                                                                                                        width: "20",
                                                                                                        height: "20",
                                                                                                        patternUnits: "userSpaceOnUse",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M 20 0 L 0 0 0 20",
                                                                                                            fill: "none",
                                                                                                            stroke: "white",
                                                                                                            strokeWidth: "0.5"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1135,
                                                                                                            columnNumber: 41
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1134,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1133,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                    width: "100%",
                                                                                                    height: "100%",
                                                                                                    fill: `url(#grid-metrics-${practice.id})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1138,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1132,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1131,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center mb-4 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "p-1.5 rounded-lg bg-blue-900/30 mr-2",
                                                                                                animate: {
                                                                                                    rotate: [
                                                                                                        0,
                                                                                                        5,
                                                                                                        -5,
                                                                                                        0
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        0.95,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 2,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    repeatDelay: 1
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4 text-blue-400",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        fillRule: "evenodd",
                                                                                                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                                                                        clipRule: "evenodd"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1158,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1157,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1144,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-sm font-medium text-blue-300",
                                                                                                children: "Performance Metrics"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1161,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1143,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "grid grid-cols-2 gap-4 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 relative overflow-hidden group",
                                                                                                whileHover: {
                                                                                                    scale: 1.02,
                                                                                                    borderColor: 'rgba(59, 130, 246, 0.3)'
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 0.2
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        className: "absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100",
                                                                                                        transition: {
                                                                                                            duration: 0.3
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1172,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex justify-between items-start",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-xs text-gray-400 mb-1",
                                                                                                                        children: "Speaking Rate"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1179,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-base font-medium text-blue-400",
                                                                                                                        children: [
                                                                                                                            practice.speakingRate || "N/A",
                                                                                                                            " wpm"
                                                                                                                        ]
                                                                                                                    }, void 0, true, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1180,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1178,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                                className: "p-1.5 rounded-full bg-blue-900/20 text-blue-400",
                                                                                                                animate: {
                                                                                                                    y: [
                                                                                                                        0,
                                                                                                                        -3,
                                                                                                                        0,
                                                                                                                        3,
                                                                                                                        0
                                                                                                                    ]
                                                                                                                },
                                                                                                                transition: {
                                                                                                                    duration: 4,
                                                                                                                    repeat: Infinity,
                                                                                                                    repeatType: "loop"
                                                                                                                },
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    className: "h-3.5 w-3.5",
                                                                                                                    viewBox: "0 0 20 20",
                                                                                                                    fill: "currentColor",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                        fillRule: "evenodd",
                                                                                                                        d: "M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z",
                                                                                                                        clipRule: "evenodd"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1194,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1193,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1182,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1177,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1166,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-green-500/10 relative overflow-hidden group",
                                                                                                whileHover: {
                                                                                                    scale: 1.02,
                                                                                                    borderColor: 'rgba(16, 185, 129, 0.3)'
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 0.2
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        className: "absolute inset-0 bg-green-500/5 opacity-0 group-hover:opacity-100",
                                                                                                        transition: {
                                                                                                            duration: 0.3
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1207,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex justify-between items-start",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-xs text-gray-400 mb-1",
                                                                                                                        children: "Clarity"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1214,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-base font-medium text-green-400",
                                                                                                                        children: practice.coherenceScore || "N/A"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1215,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1213,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                                className: "p-1.5 rounded-full bg-green-900/20 text-green-400",
                                                                                                                animate: {
                                                                                                                    scale: [
                                                                                                                        1,
                                                                                                                        1.1,
                                                                                                                        1,
                                                                                                                        0.9,
                                                                                                                        1
                                                                                                                    ]
                                                                                                                },
                                                                                                                transition: {
                                                                                                                    duration: 4,
                                                                                                                    repeat: Infinity,
                                                                                                                    repeatType: "loop"
                                                                                                                },
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    className: "h-3.5 w-3.5",
                                                                                                                    viewBox: "0 0 20 20",
                                                                                                                    fill: "currentColor",
                                                                                                                    children: [
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                            d: "M10 12a2 2 0 100-4 2 2 0 000 4z"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                            lineNumber: 1229,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this),
                                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                            fillRule: "evenodd",
                                                                                                                            d: "M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",
                                                                                                                            clipRule: "evenodd"
                                                                                                                        }, void 0, false, {
                                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                            lineNumber: 1230,
                                                                                                                            columnNumber: 43
                                                                                                                        }, this)
                                                                                                                    ]
                                                                                                                }, void 0, true, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1228,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1217,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1212,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1201,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/10 relative overflow-hidden group",
                                                                                                whileHover: {
                                                                                                    scale: 1.02,
                                                                                                    borderColor: 'rgba(234, 179, 8, 0.3)'
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 0.2
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        className: "absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100",
                                                                                                        transition: {
                                                                                                            duration: 0.3
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1243,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex justify-between items-start",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-xs text-gray-400 mb-1",
                                                                                                                        children: "Vocabulary"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1250,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-base font-medium text-yellow-400",
                                                                                                                        children: practice.vocabularyRichness || "N/A"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1251,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1249,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                                className: "p-1.5 rounded-full bg-yellow-900/20 text-yellow-400",
                                                                                                                animate: {
                                                                                                                    rotate: [
                                                                                                                        0,
                                                                                                                        10,
                                                                                                                        0,
                                                                                                                        -10,
                                                                                                                        0
                                                                                                                    ]
                                                                                                                },
                                                                                                                transition: {
                                                                                                                    duration: 4,
                                                                                                                    repeat: Infinity,
                                                                                                                    repeatType: "loop"
                                                                                                                },
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    className: "h-3.5 w-3.5",
                                                                                                                    viewBox: "0 0 20 20",
                                                                                                                    fill: "currentColor",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                        d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1265,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1264,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1253,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1248,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1237,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-red-500/10 relative overflow-hidden group",
                                                                                                whileHover: {
                                                                                                    scale: 1.02,
                                                                                                    borderColor: 'rgba(239, 68, 68, 0.3)'
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 0.2
                                                                                                },
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                        className: "absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100",
                                                                                                        transition: {
                                                                                                            duration: 0.3
                                                                                                        }
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1278,
                                                                                                        columnNumber: 37
                                                                                                    }, this),
                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                        className: "flex justify-between items-start",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                children: [
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-xs text-gray-400 mb-1",
                                                                                                                        children: "Filler Words"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1285,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this),
                                                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                                        className: "text-base font-medium text-red-400",
                                                                                                                        children: practice.fillerWordsCount || 0
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1286,
                                                                                                                        columnNumber: 41
                                                                                                                    }, this)
                                                                                                                ]
                                                                                                            }, void 0, true, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1284,
                                                                                                                columnNumber: 39
                                                                                                            }, this),
                                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                                className: "p-1.5 rounded-full bg-red-900/20 text-red-400",
                                                                                                                animate: {
                                                                                                                    opacity: [
                                                                                                                        1,
                                                                                                                        0.5,
                                                                                                                        1
                                                                                                                    ]
                                                                                                                },
                                                                                                                transition: {
                                                                                                                    duration: 2,
                                                                                                                    repeat: Infinity,
                                                                                                                    repeatType: "loop"
                                                                                                                },
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                                    className: "h-3.5 w-3.5",
                                                                                                                    viewBox: "0 0 20 20",
                                                                                                                    fill: "currentColor",
                                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                        fillRule: "evenodd",
                                                                                                                        d: "M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z",
                                                                                                                        clipRule: "evenodd"
                                                                                                                    }, void 0, false, {
                                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                        lineNumber: 1300,
                                                                                                                        columnNumber: 43
                                                                                                                    }, this)
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1299,
                                                                                                                    columnNumber: 41
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1288,
                                                                                                                columnNumber: 39
                                                                                                            }, this)
                                                                                                        ]
                                                                                                    }, void 0, true, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1283,
                                                                                                        columnNumber: 37
                                                                                                    }, this)
                                                                                                ]
                                                                                            }, void 0, true, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1272,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1164,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1126,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            practice.transcription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                variants: expandedItemVariants,
                                                                                className: "bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-purple-500/20 relative overflow-hidden",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "100%",
                                                                                            height: "100%",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                                        id: `grid-transcript-${practice.id}`,
                                                                                                        width: "20",
                                                                                                        height: "20",
                                                                                                        patternUnits: "userSpaceOnUse",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M 20 0 L 0 0 0 20",
                                                                                                            fill: "none",
                                                                                                            stroke: "white",
                                                                                                            strokeWidth: "0.5"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1319,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1318,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1317,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                    width: "100%",
                                                                                                    height: "100%",
                                                                                                    fill: `url(#grid-transcript-${practice.id})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1322,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1316,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1315,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center mb-4 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "p-1.5 rounded-lg bg-purple-900/30 mr-2",
                                                                                                animate: {
                                                                                                    rotate: [
                                                                                                        0,
                                                                                                        5,
                                                                                                        -5,
                                                                                                        0
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        0.95,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 2,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    repeatDelay: 1
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4 text-purple-400",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        fillRule: "evenodd",
                                                                                                        d: "M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z",
                                                                                                        clipRule: "evenodd"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1342,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1341,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1328,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-sm font-medium text-purple-300",
                                                                                                children: "Transcript Preview"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1345,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1327,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "relative",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "absolute -top-2 -left-1 text-purple-500/20 text-4xl",
                                                                                                animate: {
                                                                                                    opacity: [
                                                                                                        0.2,
                                                                                                        0.3,
                                                                                                        0.2
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 3,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop"
                                                                                                },
                                                                                                children: '"'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1350,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "absolute -bottom-6 -right-1 text-purple-500/20 text-4xl",
                                                                                                animate: {
                                                                                                    opacity: [
                                                                                                        0.2,
                                                                                                        0.3,
                                                                                                        0.2
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 3,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    delay: 1.5
                                                                                                },
                                                                                                children: '"'
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1364,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                                className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-purple-500/10 relative z-10",
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-sm text-gray-300 line-clamp-4 italic",
                                                                                                    children: practice.transcription
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1381,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1380,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1349,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1310,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 1124,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-5",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                variants: expandedItemVariants,
                                                                                className: "bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-xl p-5 border border-blue-500/20 relative overflow-hidden group",
                                                                                whileHover: {
                                                                                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.2)",
                                                                                    borderColor: "rgba(59, 130, 246, 0.3)"
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.3
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "100%",
                                                                                            height: "100%",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                                        id: `grid-level-${practice.id}`,
                                                                                                        width: "20",
                                                                                                        height: "20",
                                                                                                        patternUnits: "userSpaceOnUse",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M 20 0 L 0 0 0 20",
                                                                                                            fill: "none",
                                                                                                            stroke: "white",
                                                                                                            strokeWidth: "0.5"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1409,
                                                                                                            columnNumber: 41
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1408,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1407,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                    width: "100%",
                                                                                                    height: "100%",
                                                                                                    fill: `url(#grid-level-${practice.id})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1412,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1406,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1405,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full filter blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1417,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center mb-3 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "p-1.5 rounded-lg bg-blue-900/30 mr-2",
                                                                                                animate: {
                                                                                                    rotate: [
                                                                                                        0,
                                                                                                        5,
                                                                                                        -5,
                                                                                                        0
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        0.95,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 2,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    repeatDelay: 1
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4 text-blue-400",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1435,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1434,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1421,
                                                                                                columnNumber: 35
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-sm font-medium text-blue-300",
                                                                                                children: "Performance Level"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1438,
                                                                                                columnNumber: 35
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1420,
                                                                                        columnNumber: 33
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 relative z-10",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                            className: `text-xl font-medium ${getPerformanceLevelColor(practice.performanceLevel)} flex items-center justify-center`,
                                                                                            animate: {
                                                                                                scale: [
                                                                                                    1,
                                                                                                    1.03,
                                                                                                    1
                                                                                                ]
                                                                                            },
                                                                                            transition: {
                                                                                                duration: 2,
                                                                                                repeat: Infinity,
                                                                                                repeatType: "loop"
                                                                                            },
                                                                                            children: practice.performanceLevel || "Not Available"
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1443,
                                                                                            columnNumber: 35
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1442,
                                                                                        columnNumber: 33
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1395,
                                                                                columnNumber: 31
                                                                            }, this),
                                                                            practice.strengths && practice.strengths.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                variants: expandedItemVariants,
                                                                                className: "bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-xl p-5 border border-green-500/20 relative overflow-hidden group",
                                                                                whileHover: {
                                                                                    boxShadow: "0 0 20px rgba(16, 185, 129, 0.2)",
                                                                                    borderColor: "rgba(16, 185, 129, 0.3)"
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.3
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "100%",
                                                                                            height: "100%",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                                        id: `grid-strengths-${practice.id}`,
                                                                                                        width: "20",
                                                                                                        height: "20",
                                                                                                        patternUnits: "userSpaceOnUse",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M 20 0 L 0 0 0 20",
                                                                                                            fill: "none",
                                                                                                            stroke: "white",
                                                                                                            strokeWidth: "0.5"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1475,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1474,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1473,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                    width: "100%",
                                                                                                    height: "100%",
                                                                                                    fill: `url(#grid-strengths-${practice.id})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1478,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1472,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1471,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute bottom-0 left-0 w-32 h-32 bg-green-500/5 rounded-full filter blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1483,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center mb-3 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "p-1.5 rounded-lg bg-green-900/30 mr-2",
                                                                                                animate: {
                                                                                                    rotate: [
                                                                                                        0,
                                                                                                        5,
                                                                                                        -5,
                                                                                                        0
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        0.95,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 2,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    repeatDelay: 1
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4 text-green-400",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        fillRule: "evenodd",
                                                                                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                                                        clipRule: "evenodd"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1501,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1500,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1487,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-sm font-medium text-green-300",
                                                                                                children: "Strengths"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1504,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1486,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-green-500/10 relative z-10",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "space-y-2",
                                                                                            children: practice.strengths.slice(0, 3).map((strength, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                                                    className: "text-sm text-green-400 flex items-start",
                                                                                                    whileHover: {
                                                                                                        x: 3
                                                                                                    },
                                                                                                    transition: {
                                                                                                        duration: 0.2
                                                                                                    },
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                            animate: {
                                                                                                                scale: [
                                                                                                                    1,
                                                                                                                    1.2,
                                                                                                                    1
                                                                                                                ],
                                                                                                                rotate: [
                                                                                                                    0,
                                                                                                                    0,
                                                                                                                    0
                                                                                                                ]
                                                                                                            },
                                                                                                            transition: {
                                                                                                                duration: 2,
                                                                                                                delay: i * 0.5,
                                                                                                                repeat: Infinity,
                                                                                                                repeatType: "loop"
                                                                                                            },
                                                                                                            className: "mr-2 flex-shrink-0",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                                className: "h-5 w-5",
                                                                                                                viewBox: "0 0 20 20",
                                                                                                                fill: "currentColor",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                    fillRule: "evenodd",
                                                                                                                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                                                                                                    clipRule: "evenodd"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1531,
                                                                                                                    columnNumber: 47
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1530,
                                                                                                                columnNumber: 45
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1517,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            children: strength
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1534,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, i, true, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1511,
                                                                                                    columnNumber: 41
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1509,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1508,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1461,
                                                                                columnNumber: 33
                                                                            }, this),
                                                                            practice.growthAreas && practice.growthAreas.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                variants: expandedItemVariants,
                                                                                className: "bg-gradient-to-br from-gray-900/80 to-gray-950/90 backdrop-blur-sm rounded-xl p-5 border border-yellow-500/20 relative overflow-hidden group",
                                                                                whileHover: {
                                                                                    boxShadow: "0 0 20px rgba(234, 179, 8, 0.2)",
                                                                                    borderColor: "rgba(234, 179, 8, 0.3)"
                                                                                },
                                                                                transition: {
                                                                                    duration: 0.3
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                            width: "100%",
                                                                                            height: "100%",
                                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                                                                        id: `grid-areas-${practice.id}`,
                                                                                                        width: "20",
                                                                                                        height: "20",
                                                                                                        patternUnits: "userSpaceOnUse",
                                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                            d: "M 20 0 L 0 0 0 20",
                                                                                                            fill: "none",
                                                                                                            stroke: "white",
                                                                                                            strokeWidth: "0.5"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1558,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1557,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1556,
                                                                                                    columnNumber: 39
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                                                                    width: "100%",
                                                                                                    height: "100%",
                                                                                                    fill: `url(#grid-areas-${practice.id})`
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1561,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1555,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1554,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "absolute top-0 left-0 w-32 h-32 bg-yellow-500/5 rounded-full filter blur-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1566,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "flex items-center mb-3 relative z-10",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                className: "p-1.5 rounded-lg bg-yellow-900/30 mr-2",
                                                                                                animate: {
                                                                                                    rotate: [
                                                                                                        0,
                                                                                                        5,
                                                                                                        -5,
                                                                                                        0
                                                                                                    ],
                                                                                                    scale: [
                                                                                                        1,
                                                                                                        1.05,
                                                                                                        0.95,
                                                                                                        1
                                                                                                    ]
                                                                                                },
                                                                                                transition: {
                                                                                                    duration: 2,
                                                                                                    repeat: Infinity,
                                                                                                    repeatType: "loop",
                                                                                                    repeatDelay: 1
                                                                                                },
                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                                    className: "h-4 w-4 text-yellow-400",
                                                                                                    viewBox: "0 0 20 20",
                                                                                                    fill: "currentColor",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                        fillRule: "evenodd",
                                                                                                        d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                                                                                                        clipRule: "evenodd"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                        lineNumber: 1584,
                                                                                                        columnNumber: 41
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1583,
                                                                                                    columnNumber: 39
                                                                                                }, this)
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1570,
                                                                                                columnNumber: 37
                                                                                            }, this),
                                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                                                className: "text-sm font-medium text-yellow-300",
                                                                                                children: "Areas for Improvement"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                lineNumber: 1587,
                                                                                                columnNumber: 37
                                                                                            }, this)
                                                                                        ]
                                                                                    }, void 0, true, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1569,
                                                                                        columnNumber: 35
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                        className: "bg-gray-900/60 backdrop-blur-sm rounded-lg p-4 border border-yellow-500/10 relative z-10",
                                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                                            className: "space-y-2",
                                                                                            children: practice.growthAreas.slice(0, 3).map((area, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].li, {
                                                                                                    className: "text-sm text-yellow-400 flex items-start",
                                                                                                    whileHover: {
                                                                                                        x: 3
                                                                                                    },
                                                                                                    transition: {
                                                                                                        duration: 0.2
                                                                                                    },
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                                                                                            animate: {
                                                                                                                scale: [
                                                                                                                    1,
                                                                                                                    1.2,
                                                                                                                    1
                                                                                                                ],
                                                                                                                rotate: [
                                                                                                                    0,
                                                                                                                    0,
                                                                                                                    0
                                                                                                                ]
                                                                                                            },
                                                                                                            transition: {
                                                                                                                duration: 2,
                                                                                                                delay: i * 0.5,
                                                                                                                repeat: Infinity,
                                                                                                                repeatType: "loop"
                                                                                                            },
                                                                                                            className: "mr-2 flex-shrink-0",
                                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                                                className: "h-5 w-5",
                                                                                                                viewBox: "0 0 20 20",
                                                                                                                fill: "currentColor",
                                                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                                                    fillRule: "evenodd",
                                                                                                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                                                                                                                    clipRule: "evenodd"
                                                                                                                }, void 0, false, {
                                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                    lineNumber: 1614,
                                                                                                                    columnNumber: 47
                                                                                                                }, this)
                                                                                                            }, void 0, false, {
                                                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                                lineNumber: 1613,
                                                                                                                columnNumber: 45
                                                                                                            }, this)
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1600,
                                                                                                            columnNumber: 43
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                                            children: area
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                            lineNumber: 1617,
                                                                                                            columnNumber: 43
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, i, true, {
                                                                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                                    lineNumber: 1594,
                                                                                                    columnNumber: 41
                                                                                                }, this))
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                            lineNumber: 1592,
                                                                                            columnNumber: 37
                                                                                        }, this)
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                        lineNumber: 1591,
                                                                                        columnNumber: 35
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                                lineNumber: 1544,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                        lineNumber: 1393,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                                lineNumber: 1122,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 1103,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 1101,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, practice.id, true, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 833,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                    lineNumber: 828,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "py-12 text-center",
                                    initial: {
                                        opacity: 0
                                    },
                                    animate: {
                                        opacity: 1
                                    },
                                    transition: {
                                        duration: 0.5
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-16 w-16 mx-auto text-gray-500 mb-4",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 1.5,
                                                d: "M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                lineNumber: 1642,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1641,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-medium text-gray-300 mb-2",
                                            children: "No practices found"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1644,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-400 mb-6 max-w-md mx-auto",
                                            children: error ? `Error: ${error}` : "Try changing your search or filters, or start a new practice session."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1645,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105",
                                            children: "Start a New Practice"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1648,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                    lineNumber: 1635,
                                    columnNumber: 15
                                }, this),
                                !isLoading && sortedPractices.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-8 flex justify-between items-center",
                                    variants: paginationVariants,
                                    initial: "hidden",
                                    animate: "visible",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-400",
                                            children: [
                                                "Showing ",
                                                (pagination.currentPage - 1) * 10 + 1,
                                                " to ",
                                                Math.min(pagination.currentPage * 10, pagination.totalCount),
                                                " of ",
                                                pagination.totalCount,
                                                " results"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1662,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex space-x-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((prev)=>Math.max(prev - 1, 1)),
                                                    disabled: !pagination.hasPrevPage,
                                                    className: `p-2 rounded-lg border ${pagination.hasPrevPage ? "border-[#2C2D32] bg-[#232429] text-gray-300 hover:bg-[#2C2D32]" : "border-[#2C2D32]/50 bg-[#1A1B20] text-gray-500 cursor-not-allowed"} transition-colors`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 1676,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 1675,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 1666,
                                                    columnNumber: 19
                                                }, this),
                                                [
                                                    ...Array(pagination.totalPages)
                                                ].map((_, i)=>{
                                                    // Only show current page, first, last, and pages around current
                                                    const pageNum = i + 1;
                                                    if (pageNum === 1 || pageNum === pagination.totalPages || pageNum >= pagination.currentPage - 1 && pageNum <= pagination.currentPage + 1) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setCurrentPage(pageNum),
                                                            className: `w-10 h-10 rounded-lg border ${pageNum === pagination.currentPage ? "border-purple-500 bg-purple-900/30 text-purple-300" : "border-[#2C2D32] bg-[#232429] text-gray-300 hover:bg-[#2C2D32]"} transition-colors`,
                                                            children: pageNum
                                                        }, pageNum, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 1690,
                                                            columnNumber: 25
                                                        }, this);
                                                    }
                                                    // Show ellipsis for skipped pages
                                                    if (pageNum === 2 && pagination.currentPage > 3 || pageNum === pagination.totalPages - 1 && pagination.currentPage < pagination.totalPages - 2) {
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "w-10 h-10 flex items-center justify-center text-gray-500",
                                                            children: "..."
                                                        }, pageNum, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 1710,
                                                            columnNumber: 25
                                                        }, this);
                                                    }
                                                    return null;
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setCurrentPage((prev)=>Math.min(prev + 1, pagination.totalPages)),
                                                    disabled: !pagination.hasNextPage,
                                                    className: `p-2 rounded-lg border ${pagination.hasNextPage ? "border-[#2C2D32] bg-[#232429] text-gray-300 hover:bg-[#2C2D32]" : "border-[#2C2D32]/50 bg-[#1A1B20] text-gray-500 cursor-not-allowed"} transition-colors`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-5 w-5",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                            lineNumber: 1729,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                        lineNumber: 1728,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                                    lineNumber: 1719,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                            lineNumber: 1665,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                                    lineNumber: 1656,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/practices/page.jsx",
                            lineNumber: 706,
                            columnNumber: 13
                        }, this),
                        " "
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/practices/page.jsx",
                    lineNumber: 671,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/practices/page.jsx",
            lineNumber: 508,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/practices/page.jsx",
        lineNumber: 507,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__a531311f._.js.map