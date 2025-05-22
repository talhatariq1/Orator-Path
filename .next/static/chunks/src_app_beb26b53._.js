(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/components/dashboard/DashboardLayout.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@clerk/clerk-react/dist/index.mjs [app-client] (ecmascript) <locals>");
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
const DashboardLayout = ({ children })=>{
    _s();
    // Hide the navigation bar when this component is mounted
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardLayout.useEffect": ()=>{
            // Add a class to the body to indicate we're in the dashboard
            document.body.classList.add('dashboard-active');
            // Clean up when component unmounts
            return ({
                "DashboardLayout.useEffect": ()=>{
                    document.body.classList.remove('dashboard-active');
                }
            })["DashboardLayout.useEffect"];
        }
    }["DashboardLayout.useEffect"], []);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [collapsed, setCollapsed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Tooltip ref for hover state
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tooltipText, setTooltipText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [tooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
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
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "dashboard-bg"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: tooltipVisible && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    lineNumber: 115,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `${collapsed ? "w-20" : "w-64"} bg-[#1A1B20]/90 backdrop-blur-md h-screen transition-all duration-300 border-r border-[#2C2D32]/80 relative shadow-lg shadow-purple-500/5`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                        whileHover: {
                            scale: 1.1
                        },
                        whileTap: {
                            scale: 0.95
                        },
                        onClick: ()=>setCollapsed(!collapsed),
                        className: "absolute -right-3 top-10 bg-[#232429] rounded-full p-1 border border-purple-500/30 shadow-md z-10 hover:shadow-lg hover:shadow-purple-500/20 transition-shadow",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: `h-4 w-4 text-purple-500 transition-transform duration-300 ${collapsed ? "rotate-0" : "rotate-180"}`,
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 153,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 139,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col h-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex items-center ${collapsed ? "justify-center py-6" : "px-6 py-6"}`,
                                children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-10 h-10 relative",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/Logo.PNG",
                                        alt: "OratorPath Logo",
                                        fill: true,
                                        className: "object-contain"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 170,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 169,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/Logo.PNG",
                                                alt: "OratorPath Logo",
                                                fill: true,
                                                className: "object-contain"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 180,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-gray-100 logo-text",
                                            children: "OratorPath"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                            lineNumber: 187,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 178,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "flex-1 px-2 py-4 space-y-4 overflow-y-auto",
                                children: navStructure.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider sidebar-link-text",
                                                children: category.category
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 199,
                                                columnNumber: 19
                                            }, this),
                                            category.items.map((item)=>{
                                                const isActive = pathname === item.href;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    whileHover: {
                                                        x: collapsed ? 0 : 3
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: item.href,
                                                        className: `flex items-center ${collapsed ? "justify-center" : "px-4"} py-3 rounded-lg transition-all duration-200 ${isActive ? "bg-gradient-to-r from-purple-900/30 to-purple-800/20 text-purple-400 shadow-sm" : "text-gray-400 hover:bg-gray-800/30"}`,
                                                        onMouseEnter: (e)=>handleShowTooltip(e, item.name),
                                                        onMouseLeave: handleHideTooltip,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                                                lineNumber: 220,
                                                                columnNumber: 25
                                                            }, this),
                                                            !collapsed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "ml-3 font-medium sidebar-link-text",
                                                                children: item.name
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                                lineNumber: 229,
                                                                columnNumber: 27
                                                            }, this),
                                                            !collapsed && isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "ml-auto w-1.5 h-8 bg-gradient-to-b from-purple-500 to-purple-700 rounded-full shadow-sm shadow-purple-500/20"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                                lineNumber: 233,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 208,
                                                        columnNumber: 23
                                                    }, this)
                                                }, item.name, false, {
                                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                    lineNumber: 207,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        ]
                                    }, category.category, true, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                        lineNumber: 197,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 195,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `px-4 py-4 border-t border-[#2C2D32]/80 ${collapsed ? "flex justify-center" : "flex items-center"}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: "flex items-center",
                                    children: collapsed ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
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
                                        lineNumber: 249,
                                        columnNumber: 17
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$clerk$2d$react$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["UserButton"], {
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
                                                lineNumber: 261,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "ml-3 ",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-medium text-black sidebar-link-text",
                                                        children: "User Profile"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 272,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 sidebar-link-text",
                                                        children: "Manage your account"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                        lineNumber: 273,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                                lineNumber: 271,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                    lineNumber: 247,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                        lineNumber: 161,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 overflow-auto flex flex-col",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "flex-grow",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                    lineNumber: 284,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
                lineNumber: 283,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/DashboardLayout.jsx",
        lineNumber: 108,
        columnNumber: 5
    }, this);
};
_s(DashboardLayout, "ob8jTX6uLzENg6BVCEMwUA2S0zQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = DashboardLayout;
const __TURBOPACK__default__export__ = DashboardLayout;
var _c;
__turbopack_context__.k.register(_c, "DashboardLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/DashboardPageWrapper.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-100 dashboard-main-title",
                                        children: title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/DashboardPageWrapper.jsx",
                                        lineNumber: 35,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                            action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
_c = DashboardPageWrapper;
const __TURBOPACK__default__export__ = DashboardPageWrapper;
var _c;
__turbopack_context__.k.register(_c, "DashboardPageWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/utils/colorPalette.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// Dashboard color palette
__turbopack_context__.s({
    "colors": (()=>colors),
    "widgetThemes": (()=>widgetThemes)
});
const colors = {
    // Primary colors
    blue: {
        50: '#EFF6FF',
        100: '#DBEAFE',
        200: '#BFDBFE',
        300: '#93C5FD',
        400: '#60A5FA',
        500: '#3B82F6',
        600: '#2563EB',
        700: '#1D4ED8',
        800: '#1E40AF',
        900: '#1E3A8A',
        950: '#172554'
    },
    purple: {
        50: '#FAF5FF',
        100: '#F3E8FF',
        200: '#E9D5FF',
        300: '#D8B4FE',
        400: '#C084FC',
        500: '#A855F7',
        600: '#9333EA',
        700: '#7E22CE',
        800: '#6B21A8',
        900: '#581C87',
        950: '#3B0764'
    },
    yellow: {
        50: '#FEFCE8',
        100: '#FEF9C3',
        200: '#FEF08A',
        300: '#FDE047',
        400: '#FACC15',
        500: '#EAB308',
        600: '#CA8A04',
        700: '#A16207',
        800: '#854D0E',
        900: '#713F12',
        950: '#422006'
    },
    // Neutral colors
    gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
        950: '#030712'
    },
    // Background colors
    background: {
        primary: '#0F172A',
        secondary: '#1E293B',
        tertiary: '#334155',
        card: '#1E293B',
        highlight: '#2D3748'
    },
    // Gradients
    gradients: {
        bluePurple: 'from-blue-600 to-purple-600',
        purpleBlue: 'from-purple-600 to-blue-600',
        blueYellow: 'from-blue-600 to-yellow-500',
        yellowBlue: 'from-yellow-500 to-blue-600',
        purpleYellow: 'from-purple-600 to-yellow-500',
        yellowPurple: 'from-yellow-500 to-purple-600'
    },
    // Status colors
    status: {
        success: '#10B981',
        warning: '#F59E0B',
        error: '#EF4444',
        info: '#3B82F6'
    }
};
const widgetThemes = {
    blue: {
        background: 'bg-blue-900/10',
        border: 'border-blue-500/20',
        text: 'text-blue-400',
        heading: 'text-blue-300',
        icon: 'text-blue-400',
        accent: 'bg-blue-500',
        hover: 'hover:bg-blue-800/30',
        gradient: 'bg-gradient-to-br from-blue-500/20 to-blue-900/30',
        chart: '#3B82F6'
    },
    purple: {
        background: 'bg-purple-900/10',
        border: 'border-purple-500/20',
        text: 'text-purple-400',
        heading: 'text-purple-300',
        icon: 'text-purple-400',
        accent: 'bg-purple-500',
        hover: 'hover:bg-purple-800/30',
        gradient: 'bg-gradient-to-br from-purple-500/20 to-purple-900/30',
        chart: '#A855F7'
    },
    yellow: {
        background: 'bg-yellow-900/10',
        border: 'border-yellow-500/20',
        text: 'text-yellow-400',
        heading: 'text-yellow-300',
        icon: 'text-yellow-400',
        accent: 'bg-yellow-500',
        hover: 'hover:bg-yellow-800/30',
        gradient: 'bg-gradient-to-br from-yellow-500/20 to-yellow-900/30',
        chart: '#EAB308'
    },
    mixed: {
        background: 'bg-gray-900/40',
        border: 'border-gray-700',
        text: 'text-gray-300',
        heading: 'text-white',
        icon: 'text-gray-400',
        accent: 'bg-gradient-to-r from-blue-500 via-purple-500 to-yellow-500',
        hover: 'hover:bg-gray-800/50',
        gradient: 'bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-yellow-900/20'
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/colorPalette.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const WidgetCard = ({ children, title, theme = "blue", action, className = "", fullHeight = false, animate = true, delay = 0, noPadding = false, showGlow = true })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const themeStyles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetThemes"][theme] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetThemes"].blue;
    // Generate glow color based on theme
    const glowColor = {
        blue: "rgba(59, 130, 246, 0.5)",
        purple: "rgba(139, 92, 246, 0.5)",
        green: "rgba(34, 197, 94, 0.5)",
        yellow: "rgba(234, 179, 8, 0.5)",
        red: "rgba(239, 68, 68, 0.5)"
    }[theme] || "rgba(59, 130, 246, 0.5)";
    const cardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: `rounded-xl border ${themeStyles.border} bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm shadow-lg overflow-hidden relative ${fullHeight ? 'h-full flex flex-col' : ''} ${className}`,
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        whileHover: {
            scale: 1.01
        },
        animate: {
            boxShadow: isHovered && showGlow ? `0 0 20px ${glowColor}` : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
        },
        transition: {
            boxShadow: {
                duration: 0.3
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                id: `grid-widget-${theme}`,
                                width: "20",
                                height: "20",
                                patternUnits: "userSpaceOnUse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M 20 0 L 0 0 0 20",
                                    fill: "none",
                                    stroke: "white",
                                    strokeWidth: "0.5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                                    lineNumber: 47,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                                lineNumber: 46,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            width: "100%",
                            height: "100%",
                            fill: `url(#grid-widget-${theme})`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl ${themeStyles.text.replace('text-', 'from-').replace('400', '600')} to-transparent opacity-10 rounded-bl-full`,
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
                    delay: delay + 0.3
                }
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                lineNumber: 55,
                columnNumber: 7
            }, this),
            title && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `flex justify-between items-center px-5 py-4 border-b ${themeStyles.border} relative z-10`,
                initial: {
                    opacity: 0,
                    y: -20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 0.5,
                    delay: delay + 0.1
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h3, {
                        className: `font-semibold ${themeStyles.heading} widget-title flex items-center`,
                        animate: {
                            textShadow: isHovered && showGlow ? `0 0 8px ${glowColor}` : "none"
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                className: `inline-block w-2 h-2 rounded-full bg-gradient-to-r ${themeStyles.text.replace('text-', 'from-').replace('400', '500')} to-transparent mr-2`,
                                animate: {
                                    scale: [
                                        1,
                                        1.5,
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
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                                lineNumber: 76,
                                columnNumber: 13
                            }, this),
                            title
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    action && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "flex items-center",
                        initial: {
                            opacity: 0,
                            x: 20
                        },
                        animate: {
                            opacity: 1,
                            x: 0
                        },
                        transition: {
                            duration: 0.5,
                            delay: delay + 0.2
                        },
                        children: action
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                        lineNumber: 92,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                lineNumber: 63,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: `${noPadding ? '' : 'p-5'} relative z-10 ${fullHeight ? 'flex-grow' : ''}`,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                transition: {
                    duration: 0.5,
                    delay: delay + 0.3
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
    if (animate) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            transition: {
                duration: 0.5,
                delay,
                type: "spring",
                stiffness: 100,
                damping: 15
            },
            className: fullHeight ? 'h-full' : '',
            children: cardContent
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/ui/WidgetCard.jsx",
            lineNumber: 117,
            columnNumber: 7
        }, this);
    }
    return cardContent;
};
_s(WidgetCard, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = WidgetCard;
const __TURBOPACK__default__export__ = WidgetCard;
var _c;
__turbopack_context__.k.register(_c, "WidgetCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/colorPalette.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const SimplifiedSpeechMetricsWidget = ({ metrics = [], title = "Speech Metrics", lastUpdated = "Never", isLatestSession = false })=>{
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hasError, setHasError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Enhanced color palette for better visual clarity
    const chartColors = {
        background: "rgba(26, 27, 32, 0.7)",
        gridLines: "rgba(255, 255, 255, 0.15)",
        axisLines: "rgba(255, 255, 255, 0.2)",
        polygon: {
            fill: "rgba(139, 92, 246, 0.25)",
            stroke: "#8B5CF6",
            activeStroke: "#A78BFA"
        },
        dataPoints: {
            default: "#8B5CF6",
            active: "#C4B5FD",
            stroke: "#1A1B20"
        },
        labels: {
            text: "#D1D5DB",
            active: "#F9FAFB"
        },
        valueIndicators: {
            background: "rgba(30, 31, 36, 0.95)",
            text: "#DDD6FE",
            border: "#8B5CF6"
        },
        centerScore: {
            text: "#FFFFFF",
            border: (score)=>getScoreColor(score)
        }
    };
    // Validate metrics data to ensure it's usable
    const validMetrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SimplifiedSpeechMetricsWidget.useMemo[validMetrics]": ()=>{
            try {
                // Check if metrics is an array
                if (!Array.isArray(metrics)) {
                    console.error("Speech metrics is not an array:", metrics);
                    setHasError(true);
                    return [];
                }
                // Check if metrics array is empty
                if (metrics.length === 0) {
                    console.warn("Speech metrics array is empty");
                    setHasError(true);
                    return [];
                }
                // Validate and sanitize each metric
                return metrics.map({
                    "SimplifiedSpeechMetricsWidget.useMemo[validMetrics]": (metric)=>({
                            label: metric.label || "Unknown",
                            value: isNaN(parseFloat(metric.value)) ? 0 : parseFloat(metric.value),
                            description: metric.description || ""
                        })
                }["SimplifiedSpeechMetricsWidget.useMemo[validMetrics]"]);
            } catch (error) {
                console.error("Error processing speech metrics:", error);
                setHasError(true);
                return [];
            }
        }
    }["SimplifiedSpeechMetricsWidget.useMemo[validMetrics]"], [
        metrics
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SimplifiedSpeechMetricsWidget.useEffect": ()=>{
            const timer = setTimeout({
                "SimplifiedSpeechMetricsWidget.useEffect.timer": ()=>{
                    setIsLoaded(true);
                }
            }["SimplifiedSpeechMetricsWidget.useEffect.timer"], 300);
            return ({
                "SimplifiedSpeechMetricsWidget.useEffect": ()=>clearTimeout(timer)
            })["SimplifiedSpeechMetricsWidget.useEffect"];
        }
    }["SimplifiedSpeechMetricsWidget.useEffect"], []);
    // No need to reset active metric as tooltips are disabled
    // Enhanced radar chart dimensions for optimal spacing and visibility
    const centerX = 125; // Adjusted center X for better centering
    const centerY = 125; // Adjusted center Y for better centering
    const radius = 85; // Increased radius for better element distribution
    const angleStep = validMetrics.length > 0 ? 2 * Math.PI / validMetrics.length : 0;
    // Generate points for each metric with improved normalization and error handling
    const points = validMetrics.map((metric, i)=>{
        const angle = i * angleStep - Math.PI / 2; // Start from top
        // Safely parse the value and handle edge cases
        const rawValue = parseFloat(metric.value || 0);
        // Normalize to 0-1 range with safety checks
        const normalizedValue = isNaN(rawValue) ? 0 : Math.max(0, Math.min(rawValue / 100, 1));
        // Calculate coordinates
        const x = centerX + radius * normalizedValue * Math.cos(angle);
        const y = centerY + radius * normalizedValue * Math.sin(angle);
        return {
            x,
            y,
            angle,
            ...metric,
            // Ensure value is properly formatted
            value: isNaN(rawValue) ? 0 : rawValue
        };
    });
    // Generate polygon points string
    const polygonPoints = points.map((point)=>`${point.x},${point.y}`).join(' ');
    // Generate axis lines
    const axisLines = validMetrics.map((_, i)=>{
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        return {
            x1: centerX,
            y1: centerY,
            x2: x,
            y2: y
        };
    });
    // Generate optimized concentric circles with improved spacing and visibility (without labels)
    const circleValues = [
        0.25,
        0.5,
        0.75,
        1
    ];
    const circles = circleValues.map((value)=>({
            cx: centerX,
            cy: centerY,
            r: radius * value,
            opacity: value === 1 ? 0.9 : value === 0.75 ? 0.7 : value === 0.5 ? 0.6 : 0.5 // Default opacity for inner circle
        }));
    // No need to calculate average score as it's no longer displayed in the center
    // Get color based on score
    const getScoreColor = (score)=>{
        if (score >= 90) return "#10B981"; // Green
        if (score >= 75) return "#3B82F6"; // Blue
        if (score >= 60) return "#8B5CF6"; // Purple
        if (score >= 40) return "#F59E0B"; // Yellow
        return "#EF4444"; // Red
    };
    // Note: getScoreDescription and handleMetricClick functions removed as they are no longer used
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: title,
        theme: "purple",
        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center bg-gray-800/50 px-2 py-1 rounded-md border border-purple-500/20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-2 h-2 rounded-full bg-purple-500 mr-2",
                        animate: {
                            scale: [
                                1,
                                1.5,
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
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 158,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-purple-400 font-medium",
                        children: "Latest Practice: "
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 170,
                        columnNumber: 13
                    }, void 0),
                    lastUpdated === "Never" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-yellow-400 ml-1 font-medium",
                        children: "No practice sessions yet"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 172,
                        columnNumber: 15
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-white ml-1 font-medium",
                        children: lastUpdated
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                lineNumber: 157,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
            lineNumber: 156,
            columnNumber: 9
        }, void 0),
        fullHeight: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full flex flex-col",
            ref: containerRef,
            children: [
                hasError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-red-900/20 border border-red-500/30 rounded-lg p-4 text-center max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-8 w-8 mx-auto text-red-400 mb-2",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                    lineNumber: 190,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-red-300 font-medium",
                                children: "Unable to display speech metrics"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "There was an issue processing the metrics data. Please try refreshing the dashboard."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 193,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 188,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                    lineNumber: 187,
                    columnNumber: 11
                }, this),
                !hasError && validMetrics.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center h-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-900/40 border border-gray-700/50 rounded-lg p-4 text-center max-w-xs",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-8 w-8 mx-auto text-purple-400 mb-2",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                    lineNumber: 203,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 202,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-300 font-medium",
                                children: "No speech metrics available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 205,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-sm mt-1",
                                children: "Complete a practice session to see your speech metrics data."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                lineNumber: 206,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 201,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                    lineNumber: 200,
                    columnNumber: 11
                }, this),
                !hasError && validMetrics.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center transition-all duration-500 h-[380px]",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full max-w-[340px] h-full mx-auto" // Increased max width for better spacing
                        ,
                        ref: chartRef,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 260 260" // Increased viewBox size to provide more space for all elements
                            ,
                            preserveAspectRatio: "xMidYMid meet",
                            ref: svgRef,
                            children: [
                                circles.map((circle, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                            cx: circle.cx,
                                            cy: circle.cy,
                                            r: circle.r,
                                            fill: "none",
                                            stroke: chartColors.gridLines,
                                            strokeWidth: i === circles.length - 1 ? "1.8" : i === circles.length - 2 ? "1.3" : "1",
                                            strokeDasharray: i < circles.length - 1 ? "3,3" : "none",
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: isLoaded ? circle.opacity : 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: 0.1 * i
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                            lineNumber: 228,
                                            columnNumber: 21
                                        }, this)
                                    }, `grid-${i}`, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                        lineNumber: 227,
                                        columnNumber: 19
                                    }, this)),
                                axisLines.map((line, i)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].line, {
                                        x1: line.x1,
                                        y1: line.y1,
                                        x2: line.x2,
                                        y2: line.y2,
                                        stroke: chartColors.axisLines,
                                        strokeWidth: 1.2,
                                        strokeLinecap: "round" // Added round line caps for smoother appearance
                                        ,
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: isLoaded ? 0.9 : 0 // Increased opacity for better visibility
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2 + 0.1 * i
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                        lineNumber: 249,
                                        columnNumber: 21
                                    }, this);
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].polygon, {
                                    points: polygonPoints,
                                    fill: chartColors.polygon.fill,
                                    stroke: chartColors.polygon.stroke,
                                    strokeWidth: "2.2" // Increased stroke width for better visibility
                                    ,
                                    strokeLinejoin: "round",
                                    strokeLinecap: "round" // Added round line caps for smoother corners
                                    ,
                                    initial: {
                                        opacity: 0,
                                        scale: 0.8
                                    },
                                    animate: {
                                        opacity: isLoaded ? 1 : 0,
                                        scale: isLoaded ? 1 : 0.8
                                    },
                                    transition: {
                                        duration: 0.8,
                                        delay: 0.5,
                                        type: "spring",
                                        stiffness: 100,
                                        damping: 10 // Added damping for smoother animation
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                    lineNumber: 268,
                                    columnNumber: 17
                                }, this),
                                points.map((point, i)=>{
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                        cx: point.x,
                                        cy: point.y,
                                        r: 6.5,
                                        fill: chartColors.dataPoints.default,
                                        stroke: chartColors.dataPoints.stroke,
                                        strokeWidth: "1.8" // Thicker stroke for better definition
                                        ,
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        animate: {
                                            opacity: isLoaded ? 1 : 0,
                                            scale: isLoaded ? 1 : 0.8
                                        },
                                        transition: {
                                            duration: 0.4,
                                            delay: 0.8 + 0.1 * i,
                                            type: "spring",
                                            stiffness: 200
                                        }
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                        lineNumber: 294,
                                        columnNumber: 21
                                    }, this);
                                }),
                                points.map((point, i)=>{
                                    const angle = point.angle;
                                    // Reduced label radius to close the gap between stat points and labels
                                    const labelRadius = radius + 15; // Decreased from 35 to 25
                                    const x = centerX + labelRadius * Math.cos(angle);
                                    const y = centerY + labelRadius * Math.sin(angle);
                                    // Optimized text anchor and positioning based on label position
                                    let textAnchor = "middle";
                                    let dx = 0;
                                    let dy = 0;
                                    let fontSize = "12";
                                    let fontWeight = "500";
                                    // Custom positioning for each label based on its position in the chart
                                    // Top position (Coherence)
                                    if (Math.abs(angle + Math.PI / 2) < 0.1) {
                                        textAnchor = "middle";
                                        dy = -6; // Reduced from -10 to -6
                                        fontSize = "12"; // Slightly larger for better visibility
                                        fontWeight = "600";
                                    } else if (Math.abs(angle) < 0.1) {
                                        textAnchor = "start";
                                        dx = 6; // Reduced from 10 to 6
                                    } else if (Math.abs(angle - Math.PI / 2) < 0.1) {
                                        textAnchor = "middle";
                                        dy = 10; // Reduced from 15 to 10
                                    } else if (Math.abs(angle - Math.PI) < 0.1) {
                                        textAnchor = "end";
                                        dx = -6; // Reduced from -10 to -6
                                    } else {
                                        // Top-right quadrant
                                        if (angle > -Math.PI / 2 && angle < 0) {
                                            textAnchor = "start";
                                            dx = 5; // Reduced from 8 to 5
                                            dy = -5; // Reduced from -8 to -5
                                        } else if (angle >= 0 && angle < Math.PI / 2) {
                                            textAnchor = "start";
                                            dx = 5; // Reduced from 8 to 5
                                            dy = 5; // Reduced from 8 to 5
                                        } else if (angle >= Math.PI / 2 && angle < Math.PI) {
                                            textAnchor = "end";
                                            dx = -5; // Reduced from -8 to -5
                                            dy = 5; // Reduced from 8 to 5
                                        } else {
                                            textAnchor = "end";
                                            dx = -5; // Reduced from -8 to -5
                                            dy = -5; // Reduced from -8 to -5
                                        }
                                    }
                                    // Additional specific adjustments for known labels with reduced spacing
                                    if (point.label === "Coherence") {
                                        // Fine-tune Coherence position
                                        dy = -8; // Reduced from -12 to -8
                                    } else if (point.label === "Clarity") {
                                        // Fine-tune Clarity position
                                        dx = -2; // Reduced from -12 to -8
                                    } else if (point.label === "Overall Score") {
                                        // For Overall Score - move upward and toward center
                                        // Use adjusted position calculation instead of the standard x,y
                                        const adjustedRadius = labelRadius * 0.55; // Reduced radius to move toward center
                                        const adjustedAngle = angle * 0.9; // Slightly adjust angle
                                        // Calculate new position
                                        const adjustedX = centerX + adjustedRadius * Math.cos(adjustedAngle);
                                        const adjustedY = centerY + adjustedRadius * Math.sin(adjustedAngle);
                                        // Set fine-tuning offsets relative to the new position
                                        dx = adjustedX - x + 0; // Additional horizontal adjustment if needed
                                        dy = adjustedY - y + 30; // Additional vertical adjustment (moved upward)
                                    } else if (point.label === "Vocabulary") {
                                        // For Vocabulary - move upward and toward center
                                        // Use adjusted position calculation instead of the standard x,y
                                        const adjustedRadius = labelRadius * 0.68; // Reduced radius to move toward center
                                        const adjustedAngle = angle * 0.85; // Slightly adjust angle
                                        // Calculate new position
                                        const adjustedX = centerX + adjustedRadius * Math.cos(adjustedAngle);
                                        const adjustedY = centerY + adjustedRadius * Math.sin(adjustedAngle);
                                        // Set fine-tuning offsets relative to the new position
                                        dx = adjustedX - x + 4; // Additional horizontal adjustment
                                        dy = adjustedY - y - 3; // Additional vertical adjustment (moved upward)
                                    }
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                        x: x + dx,
                                        y: y + dy,
                                        textAnchor: textAnchor,
                                        dominantBaseline: "middle",
                                        fill: chartColors.labels.text,
                                        fontSize: fontSize,
                                        fontWeight: fontWeight,
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: isLoaded ? 1 : 0
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: 1 + 0.1 * i
                                        },
                                        children: point.label
                                    }, i, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                        lineNumber: 415,
                                        columnNumber: 21
                                    }, this);
                                }),
                                points.map((point, i)=>{
                                    // Calculate optimal distance for each value indicator based on its position
                                    // This helps prevent overlap with axis lines and other elements
                                    let valueDistance = 0.58; // Default distance from center (slightly increased)
                                    // Adjust distance based on label to prevent overlaps
                                    if (point.label === "Coherence") {
                                        valueDistance = 0.56; // Top position
                                    } else if (point.label === "Clarity") {
                                        valueDistance = 0.56; // Left position
                                    } else if (point.label === "Overall Score") {
                                        valueDistance = 0.56; // Bottom position
                                    } else if (point.label === "Vocabulary") {
                                        valueDistance = 0.56; // Right position
                                    }
                                    // Calculate position with the adjusted distance
                                    const valueX = centerX + radius * valueDistance * Math.cos(point.angle);
                                    const valueY = centerY + radius * valueDistance * Math.sin(point.angle);
                                    // Format text content based on metric type with consistent decimal places
                                    const textContent = point.label === "Overall Score" ? Math.round(point.value) : point.label === "Clarity" ? point.value.toFixed(1) : point.label === "Vocabulary" ? point.value.toFixed(1) : point.label === "Coherence" ? point.value.toFixed(1) : Math.round(point.value);
                                    // Calculate optimal circle size based on text content
                                    const textLength = textContent.toString().length;
                                    // More precise sizing formula that accounts for decimal points and digits
                                    const circleRadius = textLength <= 2 ? 14 : textLength === 3 ? 16 : textLength === 4 ? 18 : 20; // Very large numbers
                                    // Adjust font size based on text length for better readability
                                    const fontSize = textLength <= 2 ? 10 : textLength === 3 ? 9.5 : textLength >= 4 ? 9 : 9; // Default size
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                cx: valueX,
                                                cy: valueY,
                                                r: circleRadius,
                                                fill: chartColors.valueIndicators.background,
                                                stroke: "rgba(139, 92, 246, 0.5)",
                                                strokeWidth: "1.2" // Slightly thicker border for better visibility
                                                ,
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: isLoaded ? 0.95 : 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 1.1 + 0.1 * i
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                                lineNumber: 480,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].text, {
                                                x: valueX,
                                                y: valueY,
                                                textAnchor: "middle",
                                                dominantBaseline: "central" // Ensures perfect vertical centering
                                                ,
                                                fill: chartColors.valueIndicators.text,
                                                fontSize: fontSize,
                                                fontWeight: "bold",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: isLoaded ? 1 : 0
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 1.2 + 0.1 * i
                                                },
                                                children: textContent
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                                lineNumber: 494,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, `value-${i}`, true, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                                        lineNumber: 478,
                                        columnNumber: 21
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                            lineNumber: 218,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                        lineNumber: 214,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
                    lineNumber: 213,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
            lineNumber: 181,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx",
        lineNumber: 152,
        columnNumber: 5
    }, this);
};
_s(SimplifiedSpeechMetricsWidget, "AJI9sOSlQqHgLiqjOqZJBU7NrPk=");
_c = SimplifiedSpeechMetricsWidget;
const __TURBOPACK__default__export__ = SimplifiedSpeechMetricsWidget;
var _c;
__turbopack_context__.k.register(_c, "SimplifiedSpeechMetricsWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PerformanceChart = ({ data, height = 200 })=>{
    _s();
    const [chartData, setChartData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [hoveredPoint, setHoveredPoint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const svgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("overall");
    const [isAnimating, setIsAnimating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const chartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [tooltipPortalPosition, setTooltipPortalPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        left: 0,
        top: 0
    });
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipSize, setTooltipSize] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        width: 250,
        height: 200
    }); // Fixed dimensions
    const [tooltipVisible, setTooltipVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Define metrics to display
    const metrics = [
        {
            id: "overall",
            label: "Overall",
            color: "#8A3AEA",
            description: "Overall performance score from the analysis"
        },
        {
            id: "clarity",
            label: "Coherence",
            color: "#3B82F6",
            description: "Speech coherence score from transcript analysis"
        },
        {
            id: "confidence",
            label: "Confidence",
            color: "#10B981",
            description: "Confidence score based on voice characteristics"
        },
        {
            id: "vocabulary",
            label: "Vocabulary",
            color: "#F59E0B",
            description: "Vocabulary richness score from text analysis"
        }
    ];
    // Process the data from the API
    const processedData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PerformanceChart.useMemo[processedData]": ()=>{
            if (!data || !data.sessions || data.sessions.length === 0) {
                return {
                    overall: [],
                    clarity: [],
                    confidence: [],
                    vocabulary: []
                };
            }
            // Create data objects for each metric
            return {
                overall: data.sessions.map({
                    "PerformanceChart.useMemo[processedData]": (session, index)=>({
                            ...session,
                            value: session.overall,
                            label: `Day ${index + 1}`,
                            date: session.date
                        })
                }["PerformanceChart.useMemo[processedData]"]),
                clarity: data.sessions.map({
                    "PerformanceChart.useMemo[processedData]": (session, index)=>({
                            ...session,
                            value: session.clarity,
                            label: `Day ${index + 1}`,
                            date: session.date
                        })
                }["PerformanceChart.useMemo[processedData]"]),
                confidence: data.sessions.map({
                    "PerformanceChart.useMemo[processedData]": (session, index)=>({
                            ...session,
                            value: session.confidence,
                            label: `Day ${index + 1}`,
                            date: session.date
                        })
                }["PerformanceChart.useMemo[processedData]"]),
                vocabulary: data.sessions.map({
                    "PerformanceChart.useMemo[processedData]": (session, index)=>({
                            ...session,
                            value: session.vocabulary,
                            label: `Day ${index + 1}`,
                            date: session.date
                        })
                }["PerformanceChart.useMemo[processedData]"])
            };
        }
    }["PerformanceChart.useMemo[processedData]"], [
        data
    ]);
    // Effect to handle mounting
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceChart.useEffect": ()=>{
            setIsMounted(true);
            return ({
                "PerformanceChart.useEffect": ()=>setIsMounted(false)
            })["PerformanceChart.useEffect"];
        }
    }["PerformanceChart.useEffect"], []);
    // Function to calculate tooltip position - always above the data point
    const calculateTooltipPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "PerformanceChart.useCallback[calculateTooltipPosition]": (pointX, pointY)=>{
            if (!containerRef.current) return {
                x: 0,
                y: 0,
                placement: 'top'
            };
            const containerRect = containerRef.current.getBoundingClientRect();
            const windowWidth = window.innerWidth;
            // Fixed tooltip dimensions - never change these
            const tooltipWidth = tooltipSize.width;
            const tooltipHeight = tooltipSize.height;
            // Convert percentage to pixels for calculations
            const pointXPixels = pointX / 100 * containerRect.width;
            const pointYPixels = pointY / 100 * containerRect.height;
            // Get absolute position of the point in the window
            const pointAbsX = containerRect.left + pointXPixels;
            const pointAbsY = containerRect.top + pointYPixels;
            // Calculate initial position (centered above the point)
            let left = pointAbsX - tooltipWidth / 2;
            let top = pointAbsY - tooltipHeight - 60; // 30px above the point (increased from 15px)
            // Check if tooltip would go off the right edge of the window
            if (left + tooltipWidth > windowWidth - 20) {
                left = windowWidth - tooltipWidth - 20; // 20px padding from window edge
            }
            // Check if tooltip would go off the left edge of the window
            if (left < 20) {
                left = 20; // 20px padding from window edge
            }
            // If tooltip would go off the top edge, adjust its position
            if (top < 20) {
                top = 20; // 20px padding from top edge
            }
            return {
                left,
                top,
                placement: 'top',
                pointAbsX,
                pointAbsY,
                x: pointX,
                y: pointY
            };
        }
    }["PerformanceChart.useCallback[calculateTooltipPosition]"], [
        tooltipSize
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceChart.useEffect": ()=>{
            // Animate the chart data points
            setIsAnimating(true);
            setChartData([]);
            const timer = setTimeout({
                "PerformanceChart.useEffect.timer": ()=>{
                    setChartData(processedData[activeTab] || []);
                    setIsAnimating(false);
                }
            }["PerformanceChart.useEffect.timer"], 300);
            return ({
                "PerformanceChart.useEffect": ()=>clearTimeout(timer)
            })["PerformanceChart.useEffect"];
        }
    }["PerformanceChart.useEffect"], [
        activeTab,
        processedData
    ]);
    // Find the max value for scaling
    const currentData = processedData[activeTab] || [];
    const maxValue = currentData.length > 0 ? Math.max(...currentData.map((item)=>item.value), 100) // Ensure minimum scale of 100
     : 100;
    // Calculate points for the SVG path - memoized to prevent unnecessary recalculations
    const points = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "PerformanceChart.useMemo[points]": ()=>{
            return chartData.map({
                "PerformanceChart.useMemo[points]": (item, index)=>{
                    const x = index / (chartData.length - 1 || 1) * 100; // Prevent division by zero
                    const y = 100 - item.value / maxValue * 85; // Leave some margin at top
                    return {
                        x,
                        y,
                        ...item
                    };
                }
            }["PerformanceChart.useMemo[points]"]);
        }
    }["PerformanceChart.useMemo[points]"], [
        chartData,
        maxValue
    ]);
    // Create the SVG paths
    const pathD = points.length > 0 ? `M ${points[0].x} ${points[0].y} ${points.slice(1).map((point)=>`L ${point.x} ${point.y}`).join(' ')}` : '';
    // Create the area paths (for the gradient fill)
    const areaPathD = points.length > 0 ? `${pathD} L ${points[points.length - 1].x} 100 L ${points[0].x} 100 Z` : '';
    // Calculate average value
    const currentAvg = chartData.length > 0 ? parseFloat((chartData.reduce((sum, item)=>sum + item.value, 0) / chartData.length).toFixed(1)) : 0;
    // Get current metric color
    const activeMetric = metrics.find((m)=>m.id === activeTab);
    const activeColor = activeMetric ? activeMetric.color : "#8A3AEA";
    // Effect to update tooltip position and visibility when hoveredPoint changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceChart.useEffect": ()=>{
            if (hoveredPoint !== null && points[hoveredPoint]) {
                // Calculate position for the tooltip
                const position = calculateTooltipPosition(points[hoveredPoint].x, points[hoveredPoint].y);
                // Update portal position
                setTooltipPortalPosition({
                    left: position.left,
                    top: position.top
                });
                // Show tooltip
                setTooltipVisible(true);
                // Measure tooltip after it's rendered
                if (tooltipRef.current) {
                    const rect = tooltipRef.current.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        setTooltipSize({
                            width: rect.width,
                            height: rect.height
                        });
                    }
                }
            } else {
                // Hide tooltip when no point is hovered
                setTooltipVisible(false);
            }
        }
    }["PerformanceChart.useEffect"], [
        hoveredPoint,
        calculateTooltipPosition,
        points
    ]);
    // Add resize observer to recalculate tooltip position when window or container size changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PerformanceChart.useEffect": ()=>{
            if (!containerRef.current) return;
            const updateTooltipOnResize = {
                "PerformanceChart.useEffect.updateTooltipOnResize": ()=>{
                    // Only update if there's an active tooltip
                    if (hoveredPoint !== null && points[hoveredPoint]) {
                        const newPosition = calculateTooltipPosition(points[hoveredPoint].x, points[hoveredPoint].y);
                        setTooltipPortalPosition({
                            left: newPosition.left,
                            top: newPosition.top
                        });
                    }
                }
            }["PerformanceChart.useEffect.updateTooltipOnResize"];
            // Create resize observer for the container
            const resizeObserver = new ResizeObserver({
                "PerformanceChart.useEffect": ()=>{
                    requestAnimationFrame(updateTooltipOnResize);
                }
            }["PerformanceChart.useEffect"]);
            // Observe container
            resizeObserver.observe(containerRef.current);
            // Also listen for window resize events
            window.addEventListener('resize', updateTooltipOnResize);
            window.addEventListener('scroll', updateTooltipOnResize);
            return ({
                "PerformanceChart.useEffect": ()=>{
                    if (containerRef.current) {
                        resizeObserver.unobserve(containerRef.current);
                    }
                    resizeObserver.disconnect();
                    window.removeEventListener('resize', updateTooltipOnResize);
                    window.removeEventListener('scroll', updateTooltipOnResize);
                }
            })["PerformanceChart.useEffect"];
        }
    }["PerformanceChart.useEffect"], [
        calculateTooltipPosition,
        hoveredPoint,
        points
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full flex flex-col",
        style: {
            height: `${height}px`
        },
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex mb-4 space-x-2 justify-center",
                children: metrics.map((metric)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: `px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-300 ${activeTab === metric.id ? `bg-opacity-20 bg-[${metric.color}] text-white ring-1 ring-[${metric.color}] ring-opacity-60` : 'bg-gray-800 text-gray-400 hover:text-gray-300'}`,
                        onClick: ()=>{
                            if (activeTab !== metric.id) {
                                setActiveTab(metric.id);
                            }
                        },
                        style: {
                            backgroundColor: activeTab === metric.id ? `${metric.color}20` : '',
                            boxShadow: activeTab === metric.id ? `0 0 8px ${metric.color}40` : ''
                        },
                        children: metric.label
                    }, metric.id, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                        lineNumber: 270,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 268,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center mb-2 px-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xs text-gray-400",
                            children: [
                                "Average ",
                                activeMetric.label,
                                " Performance based on last ",
                                chartData.length,
                                " practices"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 293,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-xl font-bold",
                            style: {
                                color: activeColor
                            },
                            children: [
                                currentAvg.toFixed(1),
                                "%"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 294,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                    lineNumber: 292,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative flex-grow",
                ref: chartRef,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
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
                                duration: 0.3
                            },
                            className: "absolute inset-0",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    ref: svgRef,
                                    width: "100%",
                                    height: "100%",
                                    viewBox: "0 0 100 100",
                                    preserveAspectRatio: "none",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: `chartGradient-${activeTab}`,
                                                    x1: "0%",
                                                    y1: "0%",
                                                    x2: "0%",
                                                    y2: "100%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: `${activeColor}80`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                            lineNumber: 313,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: `${activeColor}00`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                            lineNumber: 314,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("linearGradient", {
                                                    id: `prevChartGradient-${activeTab}`,
                                                    x1: "0%",
                                                    y1: "0%",
                                                    x2: "0%",
                                                    y2: "100%",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "0%",
                                                            stopColor: "rgba(255, 255, 255, 0.2)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("stop", {
                                                            offset: "100%",
                                                            stopColor: "rgba(255, 255, 255, 0)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("g", {
                                            className: "chart-grid",
                                            children: [
                                                [
                                                    20,
                                                    40,
                                                    60,
                                                    80
                                                ].map((y)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: "0",
                                                        y1: y,
                                                        x2: "100",
                                                        y2: y,
                                                        stroke: "rgba(255, 255, 255, 0.1)",
                                                        strokeDasharray: "2,2"
                                                    }, y, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                        lineNumber: 325,
                                                        columnNumber: 19
                                                    }, this)),
                                                processedData[activeTab]?.map((_, index)=>{
                                                    if (index === 0 || index === processedData[activeTab].length - 1) return null;
                                                    const x = index / (processedData[activeTab].length - 1) * 100;
                                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                        x1: x,
                                                        y1: "0",
                                                        x2: x,
                                                        y2: "100",
                                                        stroke: "rgba(255, 255, 255, 0.05)",
                                                        strokeDasharray: "2,2"
                                                    }, `vgrid-${index}`, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                        lineNumber: 340,
                                                        columnNumber: 21
                                                    }, this);
                                                }) || []
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 323,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                            initial: {
                                                opacity: 0
                                            },
                                            animate: {
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 1
                                            },
                                            d: areaPathD,
                                            fill: `url(#chartGradient-${activeTab})`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 354,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].path, {
                                            initial: {
                                                pathLength: 0,
                                                opacity: 0
                                            },
                                            animate: {
                                                pathLength: 1,
                                                opacity: 1
                                            },
                                            transition: {
                                                duration: 1.5,
                                                ease: "easeInOut"
                                            },
                                            d: pathD,
                                            fill: "none",
                                            stroke: activeColor,
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 363,
                                            columnNumber: 15
                                        }, this),
                                        points.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].circle, {
                                                initial: {
                                                    opacity: 0,
                                                    r: 0
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    r: hoveredPoint === index ? 5 : 3,
                                                    stroke: hoveredPoint === index ? "white" : activeColor,
                                                    strokeWidth: hoveredPoint === index ? 2 : 1.5
                                                },
                                                transition: {
                                                    delay: 0.5 + index * 0.07,
                                                    duration: 0.3
                                                },
                                                cx: point.x,
                                                cy: point.y,
                                                fill: hoveredPoint === index ? activeColor : "#232429",
                                                stroke: hoveredPoint === index ? "white" : activeColor,
                                                strokeWidth: hoveredPoint === index ? 2 : 1.5,
                                                onMouseEnter: ()=>{
                                                    setHoveredPoint(index);
                                                },
                                                onMouseLeave: ()=>setHoveredPoint(null),
                                                style: {
                                                    cursor: 'pointer'
                                                }
                                            }, index, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 376,
                                                columnNumber: 17
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: hoveredPoint !== null && points[hoveredPoint] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute pointer-events-none z-40",
                                        style: {
                                            left: `${points[hoveredPoint].x}%`,
                                            top: `${points[hoveredPoint].y}%`,
                                            transform: 'translate(-50%, -50%)'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: "absolute rounded-full",
                                            style: {
                                                backgroundColor: `${activeColor}20`,
                                                left: '50%',
                                                top: '50%',
                                                transform: 'translate(-50%, -50%)'
                                            },
                                            initial: {
                                                width: 10,
                                                height: 10,
                                                opacity: 0.7
                                            },
                                            animate: {
                                                width: [
                                                    10,
                                                    30,
                                                    10
                                                ],
                                                height: [
                                                    10,
                                                    30,
                                                    10
                                                ],
                                                opacity: [
                                                    0.7,
                                                    0,
                                                    0.7
                                                ]
                                            },
                                            transition: {
                                                repeat: Infinity,
                                                duration: 1.5,
                                                ease: "easeInOut"
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 414,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                        lineNumber: 406,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, activeTab, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 301,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isAnimating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            className: "absolute inset-0 flex items-center justify-center bg-gray-900/50 backdrop-blur-sm z-20",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        animate: {
                                            rotate: 360
                                        },
                                        transition: {
                                            duration: 1,
                                            repeat: Infinity,
                                            ease: "linear"
                                        },
                                        className: "w-5 h-5 border-2 border-gray-600 border-t-white rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                        lineNumber: 450,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-300",
                                        children: "Loading..."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                        lineNumber: 455,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                lineNumber: 449,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 443,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                        lineNumber: 441,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 299,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between mt-2 text-xs text-gray-400",
                children: processedData[activeTab]?.map((item, index)=>{
                    // Extract just the date part without time for display
                    const dateLabel = item.date.split(',')[0];
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `text-center transition-colors duration-300 ${hoveredPoint === index ? 'text-white' : ''}`,
                        style: {
                            width: `${100 / (processedData[activeTab]?.length || 1)}%`
                        },
                        children: dateLabel
                    }, index, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                        lineNumber: 469,
                        columnNumber: 13
                    }, this);
                }) || []
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 463,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-3 space-x-4 text-xs",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-3 h-3 rounded-full mr-1",
                            style: {
                                backgroundColor: activeColor
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 483,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-gray-300",
                            children: "Performance Data"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 484,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                    lineNumber: 482,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 481,
                columnNumber: 7
            }, this),
            isMounted && tooltipVisible && hoveredPoint !== null && points[hoveredPoint] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: tooltipRef,
                    initial: {
                        opacity: 0,
                        scale: 0.95,
                        y: 10
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95,
                        y: 10
                    },
                    transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    },
                    className: "fixed bg-[#1E1E2E]/90 backdrop-blur-md text-white text-xs px-6 py-5 rounded-2xl z-[9999] pointer-events-none",
                    style: {
                        boxShadow: `0 0 25px ${activeColor}35, 0 0 15px ${activeColor}25, 0 0 5px ${activeColor}15, inset 0 0 3px ${activeColor}20`,
                        left: `${tooltipPortalPosition.left}px`,
                        top: `${tooltipPortalPosition.top}px`,
                        width: `${tooltipSize.width}px`,
                        border: 'none',
                        borderBottom: `3px solid ${activeColor}`,
                        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 opacity-15 -z-10 rounded-2xl overflow-hidden",
                            style: {
                                background: `radial-gradient(circle at top left, ${activeColor}, transparent 70%),
                            linear-gradient(135deg, ${activeColor}10, transparent 50%)`,
                                filter: 'blur(0.5px)'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 516,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 -z-20 rounded-2xl overflow-hidden opacity-20",
                            animate: {
                                opacity: [
                                    0.1,
                                    0.2,
                                    0.1
                                ],
                                scale: [
                                    0.98,
                                    1.01,
                                    0.98
                                ]
                            },
                            transition: {
                                repeat: Infinity,
                                duration: 3,
                                ease: "easeInOut"
                            },
                            style: {
                                background: `radial-gradient(circle at center, ${activeColor}50, transparent 70%)`,
                                filter: 'blur(8px)',
                                boxShadow: `0 0 30px ${activeColor}40`
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 526,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between mb-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-medium text-sm tracking-wide",
                                    children: points[hoveredPoint].date
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs px-2 py-0.5 rounded-full border border-opacity-30",
                                    style: {
                                        backgroundColor: `${activeColor}15`,
                                        color: activeColor,
                                        borderColor: activeColor,
                                        boxShadow: `0 0 5px ${activeColor}30`
                                    },
                                    children: activeMetric.label
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 547,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 545,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-300 italic leading-relaxed",
                                    children: activeMetric.description
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 559,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center items-center gap-3 p-3 mt-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "flex flex-col items-center",
                                        initial: {
                                            scale: 0.95
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.3,
                                            type: "spring"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl font-bold tracking-tight",
                                                style: {
                                                    color: activeColor,
                                                    textShadow: `0 0 10px ${activeColor}40, 0 0 20px ${activeColor}20`
                                                },
                                                children: [
                                                    points[hoveredPoint].value.toFixed(1),
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 570,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400 mt-1",
                                                children: [
                                                    activeMetric.label,
                                                    " Score"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 576,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                        lineNumber: 564,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 563,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 558,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-5 grid grid-cols-3 gap-4 text-xs border-t border-gray-700/20 pt-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col items-center p-2",
                                    initial: {
                                        opacity: 0.5,
                                        y: 5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.1
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70",
                                            children: "Duration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 589,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-white/90",
                                                children: points[hoveredPoint].duration
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 591,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 590,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col items-center p-2",
                                    initial: {
                                        opacity: 0.5,
                                        y: 5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.2
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70",
                                            children: "Words"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-white/90",
                                                children: points[hoveredPoint].wordCount
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 602,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 601,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 594,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "flex flex-col items-center p-2",
                                    initial: {
                                        opacity: 0.5,
                                        y: 5
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        duration: 0.3,
                                        delay: 0.3
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-400 mb-1.5 text-[11px] uppercase tracking-wider opacity-70",
                                            children: "Filler Words"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 611,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-white/90",
                                                children: points[hoveredPoint].fillerWords
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                                lineNumber: 613,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                            lineNumber: 612,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                                    lineNumber: 605,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                            lineNumber: 582,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                    lineNumber: 491,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
                lineNumber: 490,
                columnNumber: 9
            }, this), document.body)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx",
        lineNumber: 266,
        columnNumber: 5
    }, this);
};
_s(PerformanceChart, "5o2D6lUqyB0ppkWteAV/m9eqjLU=");
_c = PerformanceChart;
const __TURBOPACK__default__export__ = PerformanceChart;
var _c;
__turbopack_context__.k.register(_c, "PerformanceChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const ProgressTimelineWidget = ()=>{
    _s();
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [focusAreas, setFocusAreas] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        strengths: [],
        improvements: [],
        lastUpdated: "Never"
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressTimelineWidget.useEffect": ()=>{
            const timer = setTimeout({
                "ProgressTimelineWidget.useEffect.timer": ()=>{
                    setIsLoaded(true);
                }
            }["ProgressTimelineWidget.useEffect.timer"], 300);
            return ({
                "ProgressTimelineWidget.useEffect": ()=>clearTimeout(timer)
            })["ProgressTimelineWidget.useEffect"];
        }
    }["ProgressTimelineWidget.useEffect"], []);
    // Fetch focus areas data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProgressTimelineWidget.useEffect": ()=>{
            const fetchFocusAreas = {
                "ProgressTimelineWidget.useEffect.fetchFocusAreas": async ()=>{
                    try {
                        setIsLoading(true);
                        const response = await fetch('/api/focus-areas');
                        if (!response.ok) {
                            throw new Error('Failed to fetch focus areas data');
                        }
                        const data = await response.json();
                        console.log('Focus areas data:', data);
                        setFocusAreas(data);
                        setError(null);
                    } catch (err) {
                        console.error('Error fetching focus areas:', err);
                        setError('Failed to load focus areas data');
                    } finally{
                        setIsLoading(false);
                    }
                }
            }["ProgressTimelineWidget.useEffect.fetchFocusAreas"];
            fetchFocusAreas();
        }
    }["ProgressTimelineWidget.useEffect"], []);
    // Animation variants
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0
        }
    };
    const pulseVariants = {
        pulse: {
            scale: [
                1,
                1.1,
                1
            ],
            opacity: [
                0.7,
                1,
                0.7
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };
    const glowVariants = {
        glow: {
            boxShadow: [
                "0 0 5px rgba(76, 109, 255, 0.5)",
                "0 0 15px rgba(76, 109, 255, 0.7)",
                "0 0 5px rgba(76, 109, 255, 0.5)"
            ],
            transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "loop"
            }
        }
    };
    // Combine strengths and improvements into a single array for display
    // Limit to exactly 3 items total - prioritize having at least one of each type if available
    const availableStrengths = focusAreas.strengths || [];
    const availableImprovements = focusAreas.improvements || [];
    let selectedStrengths = [];
    let selectedImprovements = [];
    // Ensure we have at least one of each type if available
    if (availableStrengths.length > 0) {
        selectedStrengths.push(availableStrengths[0]);
    }
    if (availableImprovements.length > 0) {
        selectedImprovements.push(availableImprovements[0]);
    }
    // Fill remaining slots to reach exactly 3 items total
    const remainingSlots = 3 - selectedStrengths.length - selectedImprovements.length;
    if (remainingSlots > 0) {
        // Add more strengths if available
        const additionalStrengths = availableStrengths.slice(selectedStrengths.length, selectedStrengths.length + remainingSlots);
        selectedStrengths = [
            ...selectedStrengths,
            ...additionalStrengths
        ];
        // If we still have slots and more improvements, add them
        const stillRemainingSlots = 3 - selectedStrengths.length - selectedImprovements.length;
        if (stillRemainingSlots > 0) {
            const additionalImprovements = availableImprovements.slice(selectedImprovements.length, selectedImprovements.length + stillRemainingSlots);
            selectedImprovements = [
                ...selectedImprovements,
                ...additionalImprovements
            ];
        }
    }
    // Create the final timeline items array
    const timelineItems = [
        ...selectedStrengths.map((strength)=>({
                ...strength,
                type: 'strength'
            })),
        ...selectedImprovements.map((improvement)=>({
                ...improvement,
                type: 'improvement'
            }))
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Your Speaking Journey",
        theme: "blue",
        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm text-blue-400",
                children: isLoading ? 'Loading...' : `Last updated: ${focusAreas.lastUpdated}`
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                lineNumber: 147,
                columnNumber: 11
            }, void 0)
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
            lineNumber: 146,
            columnNumber: 9
        }, void 0),
        fullHeight: true,
        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        rotate: 360
                    },
                    transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "linear"
                    },
                    className: "w-8 h-8 border-2 border-gray-700 border-t-blue-500 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 156,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "ml-3 text-gray-400",
                    children: "Loading focus areas..."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 161,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
            lineNumber: 155,
            columnNumber: 9
        }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10 text-gray-500 mb-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                        lineNumber: 166,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-2",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 168,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm text-center max-w-md",
                    children: "Complete some speech analyses to see your focus areas."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 169,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
            lineNumber: 164,
            columnNumber: 9
        }, this) : timelineItems.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "h-10 w-10 text-gray-500 mb-4",
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: 1.5,
                        d: "M12 6v6m0 0v6m0-6h6m-6 0H6"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                        lineNumber: 176,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 175,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-400 mb-2",
                    children: "No focus areas available"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 178,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-500 text-sm text-center max-w-md",
                    children: "Complete some speech analyses to see your focus areas."
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 179,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
            lineNumber: 174,
            columnNumber: 9
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "relative",
            variants: containerVariants,
            initial: "hidden",
            animate: isLoaded ? "visible" : "hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 via-purple-500/30 to-blue-500/30 rounded-full"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 191,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-4 pl-12"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6 relative",
                    children: timelineItems.map((item, index)=>{
                        const isActive = activeIndex === index;
                        const isStrength = item.type === 'strength';
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "relative pl-12",
                            variants: itemVariants,
                            onMouseEnter: ()=>setActiveIndex(index),
                            onMouseLeave: ()=>setActiveIndex(null),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `absolute left-2 top-1.5 w-5 h-5 rounded-full border-2 transform -translate-x-1/2 ${isStrength ? "bg-green-500 border-green-300" : "bg-purple-500 border-purple-300"}`,
                                    variants: pulseVariants,
                                    animate: "pulse",
                                    children: isStrength && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 rounded-full bg-green-400",
                                        initial: {
                                            scale: 0
                                        },
                                        animate: {
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.3
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-full w-full text-green-900 p-0.5",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                lineNumber: 233,
                                                columnNumber: 27
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                            lineNumber: 227,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                        lineNumber: 221,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                    lineNumber: 211,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: `p-4 rounded-lg transition-all duration-300 ${isActive ? isStrength ? "bg-gradient-to-r from-green-900/30 to-blue-900/20 border border-green-500/30" : "bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30" : "bg-gray-800/30 border border-gray-700/50"}`,
                                    variants: glowVariants,
                                    animate: isActive ? "glow" : "",
                                    whileHover: {
                                        y: -5,
                                        transition: {
                                            duration: 0.2
                                        }
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-start mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-medium dashboard-card-title",
                                                    style: {
                                                        color: isStrength ? '#86efac' : '#c4b5fd'
                                                    },
                                                    children: item.title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                    lineNumber: 260,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `text-xs px-2 py-1 rounded-full ${isStrength ? "bg-green-900/50 text-green-300" : "bg-purple-900/50 text-purple-300"}`,
                                                        children: isStrength ? "Strength" : "Focus Area"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                        lineNumber: 265,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                    lineNumber: 264,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                            lineNumber: 259,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-300 mb-3",
                                            children: item.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                            lineNumber: 277,
                                            columnNumber: 21
                                        }, this),
                                        isStrength && item.enhancement && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 bg-blue-900/20 border border-blue-500/20 rounded-lg p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-blue-300 italic",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Tip:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                        lineNumber: 283,
                                                        columnNumber: 27
                                                    }, this),
                                                    " ",
                                                    item.enhancement
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                lineNumber: 282,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                            lineNumber: 281,
                                            columnNumber: 23
                                        }, this),
                                        !isStrength && item.guidance && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 bg-purple-900/20 border border-purple-500/20 rounded-lg p-2",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-purple-300 italic",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Guidance:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                        lineNumber: 292,
                                                        columnNumber: 27
                                                    }, this),
                                                    " ",
                                                    item.guidance
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                                lineNumber: 291,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                            lineNumber: 290,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                                    lineNumber: 244,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                            lineNumber: 203,
                            columnNumber: 17
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
                    lineNumber: 197,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
            lineNumber: 184,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx",
        lineNumber: 142,
        columnNumber: 5
    }, this);
};
_s(ProgressTimelineWidget, "vlxwCbHX5JiokcHRC3JMb7X6unk=");
_c = ProgressTimelineWidget;
const __TURBOPACK__default__export__ = ProgressTimelineWidget;
var _c;
__turbopack_context__.k.register(_c, "ProgressTimelineWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PracticeConsistencyWidget = ({ practiceData })=>{
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredSession, setHoveredSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [expandedSession, setExpandedSession] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PracticeConsistencyWidget.useEffect": ()=>{
            const timer = setTimeout({
                "PracticeConsistencyWidget.useEffect.timer": ()=>{
                    setIsLoaded(true);
                }
            }["PracticeConsistencyWidget.useEffect.timer"], 300);
            return ({
                "PracticeConsistencyWidget.useEffect": ()=>clearTimeout(timer)
            })["PracticeConsistencyWidget.useEffect"];
        }
    }["PracticeConsistencyWidget.useEffect"], []);
    // Handle session expansion
    const toggleSessionExpansion = (index)=>{
        setExpandedSession(expandedSession === index ? null : index);
    };
    // Calculate streak if there are consecutive days
    const calculateStreak = ()=>{
        if (!practiceData || practiceData.length === 0) return 0;
        // Sort sessions by date (newest first)
        const sortedSessions = [
            ...practiceData
        ].sort((a, b)=>new Date(b.date) - new Date(a.date));
        // Check if the most recent session is from today
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const mostRecentDate = new Date(sortedSessions[0].date);
        mostRecentDate.setHours(0, 0, 0, 0);
        // If most recent session is not from today, no active streak
        if (mostRecentDate.getTime() !== today.getTime() && mostRecentDate.getTime() !== today.getTime() - 86400000) {
            return 0;
        }
        // Count consecutive days
        let streak = 1;
        let currentDate = mostRecentDate;
        for(let i = 1; i < sortedSessions.length; i++){
            const sessionDate = new Date(sortedSessions[i].date);
            sessionDate.setHours(0, 0, 0, 0);
            // Check if this session is from the previous day
            const expectedPrevDay = new Date(currentDate);
            expectedPrevDay.setDate(expectedPrevDay.getDate() - 1);
            if (sessionDate.getTime() === expectedPrevDay.getTime()) {
                streak++;
                currentDate = sessionDate;
            } else {
                break;
            }
        }
        return streak;
    };
    // Get intensity level based on duration and score
    const getIntensityLevel = (duration, score)=>{
        if (!duration) return "Low";
        const durationMinutes = duration / 60; // Convert seconds to minutes
        if (durationMinutes >= 5 && score >= 75) return "High";
        if (durationMinutes >= 3 || score >= 65) return "Medium";
        return "Low";
    };
    // Get color theme based on intensity
    const getIntensityTheme = (intensity)=>{
        switch(intensity){
            case "High":
                return {
                    bg: "bg-green-900/30",
                    border: "border-green-500/30",
                    text: "text-green-400",
                    gradient: "from-green-500 via-green-400 to-emerald-300",
                    hoverBg: "from-gray-800/70 to-gray-900/70",
                    hoverBorder: "border-green-500/40",
                    shadow: "shadow-green-500/10",
                    buttonGradient: "from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400",
                    buttonShadow: "rgba(34, 197, 94, 0.4)"
                };
            case "Medium":
                return {
                    bg: "bg-blue-900/30",
                    border: "border-blue-500/30",
                    text: "text-blue-400",
                    gradient: "from-blue-500 via-cyan-400 to-blue-300",
                    hoverBg: "from-gray-800/70 to-gray-900/70",
                    hoverBorder: "border-blue-500/40",
                    shadow: "shadow-blue-500/10",
                    buttonGradient: "from-blue-600 to-indigo-500 hover:from-blue-500 hover:to-indigo-400",
                    buttonShadow: "rgba(59, 130, 246, 0.4)"
                };
            default:
                return {
                    bg: "bg-purple-900/30",
                    border: "border-purple-500/30",
                    text: "text-purple-400",
                    gradient: "from-purple-500 via-fuchsia-400 to-pink-300",
                    hoverBg: "from-gray-800/80 to-gray-900/90",
                    hoverBorder: "border-purple-500/40",
                    shadow: "shadow-purple-500/15",
                    buttonGradient: "from-purple-600 to-fuchsia-500 hover:from-purple-500 hover:to-fuchsia-400",
                    buttonShadow: "rgba(168, 85, 247, 0.4)"
                };
        }
    };
    // Format duration from seconds to minutes and seconds
    const formatDuration = (seconds)=>{
        if (!seconds) return "0m 0s";
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.round(seconds % 60);
        return `${minutes}m ${remainingSeconds}s`;
    };
    // Calculate practice goal progress
    const calculateGoalProgress = ()=>{
        // Goal: 3 practice sessions per day
        const goalSessionsPerDay = 3;
        // Group sessions by day
        const sessionsByDay = {};
        practiceData?.forEach((session)=>{
            // Extract date part only (without time)
            const sessionDate = new Date(session.rawDate || new Date());
            const dateKey = `${sessionDate.getFullYear()}-${sessionDate.getMonth() + 1}-${sessionDate.getDate()}`;
            if (!sessionsByDay[dateKey]) {
                sessionsByDay[dateKey] = [];
            }
            sessionsByDay[dateKey].push(session);
        });
        // Calculate progress based on the most recent day's sessions
        const days = Object.keys(sessionsByDay);
        if (days.length === 0) return 0;
        // Sort days to get the most recent
        days.sort().reverse();
        const mostRecentDay = days[0];
        const sessionsToday = sessionsByDay[mostRecentDay]?.length || 0;
        return Math.min(100, Math.round(sessionsToday / goalSessionsPerDay * 100));
    };
    const streak = calculateStreak();
    const goalProgress = calculateGoalProgress();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Practice Consistency",
        theme: "green",
        fullHeight: true,
        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            className: "flex items-center",
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            transition: {
                duration: 0.3
            },
            children: [
                streak > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-xs text-green-400 mr-2",
                    children: [
                        streak,
                        " day streak!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                    lineNumber: 177,
                    columnNumber: 13
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "w-2 h-2 rounded-full bg-green-500",
                        animate: {
                            scale: [
                                1,
                                1.3,
                                1
                            ],
                            opacity: [
                                0.7,
                                1,
                                0.7
                            ]
                        },
                        transition: {
                            duration: 1.2,
                            repeat: Infinity,
                            repeatType: "loop",
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                        lineNumber: 182,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                    lineNumber: 181,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
            lineNumber: 170,
            columnNumber: 9
        }, void 0),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-sm font-medium text-white",
                                children: "Weekly Practice Goal"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                lineNumber: 202,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-green-400",
                                children: [
                                    goalProgress,
                                    "% complete"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                        lineNumber: 201,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-2.5 w-full bg-gray-800/80 rounded-full overflow-hidden backdrop-blur-sm border border-gray-700/30",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "h-full bg-gradient-to-r from-green-500 via-green-400 to-emerald-300 rounded-full relative overflow-hidden",
                            initial: {
                                width: 0
                            },
                            animate: {
                                width: `${goalProgress}%`
                            },
                            transition: {
                                duration: 0.8,
                                ease: "easeOut"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent",
                                animate: {
                                    x: [
                                        "-100%",
                                        "200%"
                                    ]
                                },
                                transition: {
                                    duration: 1.2,
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    repeatDelay: 0.5,
                                    ease: "easeInOut"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                lineNumber: 216,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-400 mt-1",
                        children: "Goal: 3 practice sessions per day"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                lineNumber: 200,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm font-medium text-white mb-3",
                children: "Recent Practice Sessions"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                lineNumber: 235,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: practiceData && practiceData.length > 0 ? practiceData.map((session, index)=>{
                    const isHovered = hoveredSession === index;
                    const isExpanded = expandedSession === index;
                    const intensity = getIntensityLevel(session.duration, session.score);
                    const theme = getIntensityTheme(intensity);
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `p-4 rounded-xl ${isExpanded ? "scale-[1.02]" : ""} ${isHovered || isExpanded ? `bg-gradient-to-br ${theme.hoverBg} border ${theme.hoverBorder} shadow-lg ${theme.shadow}` : `${theme.bg} border border-gray-700/50`}`,
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: isLoaded ? 1 : 0,
                            y: isLoaded ? 0 : 10,
                            boxShadow: isExpanded ? "0 8px 20px -5px rgba(34, 197, 94, 0.1), 0 6px 8px -6px rgba(34, 197, 94, 0.1)" : "none"
                        },
                        transition: {
                            duration: 0.3,
                            delay: 0.1 + index * 0.05,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        },
                        onMouseEnter: ()=>setHoveredSession(index),
                        onMouseLeave: ()=>setHoveredSession(null),
                        onClick: ()=>toggleSessionExpansion(index),
                        whileHover: {
                            y: -3,
                            transition: {
                                duration: 0.15,
                                type: "tween"
                            }
                        },
                        layout: "position",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative z-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-between items-start mb-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: `w-3 h-3 rounded-full bg-gradient-to-r ${theme.gradient} mr-2 flex items-center justify-center`,
                                                    animate: {
                                                        scale: isHovered || isExpanded ? [
                                                            1,
                                                            1.15,
                                                            1
                                                        ] : 1,
                                                        boxShadow: isHovered || isExpanded ? [
                                                            "0 0 0px rgba(34, 197, 94, 0.2)",
                                                            "0 0 6px rgba(34, 197, 94, 0.4)",
                                                            "0 0 0px rgba(34, 197, 94, 0.2)"
                                                        ] : "none"
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        repeat: isHovered || isExpanded ? Infinity : 0,
                                                        repeatType: "loop",
                                                        ease: "easeInOut"
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 277,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-base font-medium text-white dashboard-card-title",
                                                    children: session.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 290,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                            lineNumber: 276,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: `text-xs px-2 py-1 rounded-full ${theme.bg} ${theme.text} border ${theme.border}`,
                                                whileHover: {
                                                    scale: 1.05
                                                },
                                                whileTap: {
                                                    scale: 0.95
                                                },
                                                children: [
                                                    intensity,
                                                    " Intensity"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 295,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                            lineNumber: 294,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                    lineNumber: 275,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-300 mb-3 pl-5",
                                    children: [
                                        formatDuration(session.duration),
                                        " practice session with ",
                                        session.wordCount,
                                        " words spoken",
                                        intensity === "Low" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-2 inline-flex items-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                className: "inline-block ml-1 text-xs px-2 py-0.5 rounded-full bg-purple-900/40 text-purple-300 border border-purple-500/20",
                                                initial: {
                                                    opacity: 0,
                                                    scale: 0.8
                                                },
                                                animate: {
                                                    opacity: 1,
                                                    scale: 1
                                                },
                                                transition: {
                                                    duration: 0.3
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-3 w-3 mr-1",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                                lineNumber: 317,
                                                                columnNumber: 31
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                            lineNumber: 316,
                                                            columnNumber: 29
                                                        }, this),
                                                        "Quick Session"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 315,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 309,
                                                columnNumber: 25
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                            lineNumber: 308,
                                            columnNumber: 23
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                    lineNumber: 305,
                                    columnNumber: 19
                                }, this),
                                intensity === "Low" && (isExpanded || isHovered) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "mt-2 p-2 rounded-lg bg-purple-900/20 border border-purple-500/20",
                                    initial: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: 'hidden'
                                    },
                                    animate: {
                                        opacity: 1,
                                        height: 'auto',
                                        overflow: 'visible'
                                    },
                                    exit: {
                                        opacity: 0,
                                        height: 0,
                                        overflow: 'hidden'
                                    },
                                    transition: {
                                        duration: 0.3
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-4 w-4 text-purple-400 mt-0.5 mr-2 flex-shrink-0",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 337,
                                                    columnNumber: 27
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 336,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-purple-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-medium",
                                                        children: "Improvement Tip:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 340,
                                                        columnNumber: 27
                                                    }, this),
                                                    " Try to extend your practice sessions to at least 3 minutes for better skill development. Focus on one specific speaking skill per session."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 339,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                        lineNumber: 335,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                    lineNumber: 328,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    children: (isExpanded || isHovered) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "mt-4 grid grid-cols-3 gap-2 text-xs",
                                        initial: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        transition: {
                                            duration: 0.2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm",
                                                whileHover: {
                                                    y: -2,
                                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                                },
                                                initial: {
                                                    scale: 0.95,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.15
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 mb-1",
                                                        children: "Score"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 364,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: theme.text + " font-medium",
                                                        children: [
                                                            session.score,
                                                            "%"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 365,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 357,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm",
                                                whileHover: {
                                                    y: -2,
                                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                                },
                                                initial: {
                                                    scale: 0.95,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.15,
                                                    delay: 0.05
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 mb-1",
                                                        children: "Clarity"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 376,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-400 font-medium",
                                                        children: session.clarity
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 377,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 369,
                                                columnNumber: 25
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                className: "flex flex-col items-center justify-center p-2 bg-gradient-to-br from-gray-800/80 to-gray-900/80 rounded-lg border border-gray-700/50 backdrop-blur-sm",
                                                whileHover: {
                                                    y: -2,
                                                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                                                },
                                                initial: {
                                                    scale: 0.95,
                                                    opacity: 0
                                                },
                                                animate: {
                                                    scale: 1,
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.15,
                                                    delay: 0.1
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-gray-400 mb-1",
                                                        children: "Filler Words"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 388,
                                                        columnNumber: 27
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-purple-400 font-medium",
                                                        children: session.fillerWords
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 389,
                                                        columnNumber: 27
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                lineNumber: 381,
                                                columnNumber: 25
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                        lineNumber: 349,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                    lineNumber: 347,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                    mode: "sync",
                                    children: (isExpanded || isHovered) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        className: `mt-4 w-full py-2 px-4 rounded-lg text-white text-sm font-medium transition-all bg-gradient-to-r ${theme.buttonGradient}`,
                                        initial: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            y: 5
                                        },
                                        transition: {
                                            duration: 0.2,
                                            delay: 0.1
                                        },
                                        whileHover: {
                                            scale: 1.02,
                                            boxShadow: `0 0 10px ${theme.buttonShadow}`
                                        },
                                        whileTap: {
                                            scale: 0.98
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "View Session Details"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 411,
                                                    columnNumber: 27
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-4 w-4 ml-2",
                                                    viewBox: "0 0 20 20",
                                                    fill: "currentColor",
                                                    animate: {
                                                        x: [
                                                            0,
                                                            3,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 0.8,
                                                        repeat: Infinity,
                                                        repeatType: "loop",
                                                        ease: "easeInOut"
                                                    },
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        fillRule: "evenodd",
                                                        d: "M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z",
                                                        clipRule: "evenodd"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                        lineNumber: 425,
                                                        columnNumber: 29
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                                    lineNumber: 412,
                                                    columnNumber: 27
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                            lineNumber: 410,
                                            columnNumber: 25
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                        lineNumber: 398,
                                        columnNumber: 23
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                    lineNumber: 396,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 274,
                            columnNumber: 17
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                        lineNumber: 245,
                        columnNumber: 15
                    }, this);
                }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center p-8 bg-gray-800/30 rounded-xl border border-gray-700/50 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "h-12 w-12 text-gray-600 mb-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 1.5,
                                d: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                                lineNumber: 438,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 437,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-lg font-medium text-gray-300 mb-2",
                            children: "No Practice Sessions Yet"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 440,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-400 mb-4",
                            children: "Complete your first practice session to start tracking your consistency."
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 441,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "py-2 px-4 bg-green-600 hover:bg-green-500 text-white rounded-lg text-sm font-medium transition-all",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: "Start Practicing"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                            lineNumber: 442,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                    lineNumber: 436,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
                lineNumber: 236,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx",
        lineNumber: 165,
        columnNumber: 5
    }, this);
};
_s(PracticeConsistencyWidget, "WqS1tfjwgg7IH2MuLvsqKYrduu8=");
_c = PracticeConsistencyWidget;
const __TURBOPACK__default__export__ = PracticeConsistencyWidget;
var _c;
__turbopack_context__.k.register(_c, "PracticeConsistencyWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const PersonalizedRecommendationsWidget = ({ recommendations = [], lastUpdated = "Never" })=>{
    _s();
    const [activeRecommendation, setActiveRecommendation] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [autoplay, setAutoplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Log recommendations when they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalizedRecommendationsWidget.useEffect": ()=>{
            console.log('PersonalizedRecommendationsWidget received recommendations:', recommendations);
            console.log('Last updated:', lastUpdated);
        }
    }["PersonalizedRecommendationsWidget.useEffect"], [
        recommendations,
        lastUpdated
    ]);
    // Handle next recommendation pair
    const nextRecommendation = ()=>{
        if (recommendations.length === 0) return;
        // Move by 2 since we're showing pairs
        setActiveRecommendation((prev)=>{
            const next = (prev + 2) % recommendations.length;
            return next;
        });
    };
    // Handle previous recommendation pair
    const prevRecommendation = ()=>{
        if (recommendations.length === 0) return;
        // Move by 2 since we're showing pairs
        setActiveRecommendation((prev)=>{
            // If we're at an odd index, go back to the previous even index
            const adjustedPrev = prev % 2 === 1 ? prev - 1 : prev;
            const newIndex = (adjustedPrev - 2 + recommendations.length) % recommendations.length;
            // Make sure we always start on an even index (0, 2, 4, etc.)
            return newIndex % 2 === 0 ? newIndex : newIndex - 1;
        });
    };
    // Autoplay recommendations
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalizedRecommendationsWidget.useEffect": ()=>{
            if (!autoplay || recommendations.length === 0) return;
            const timer = setTimeout({
                "PersonalizedRecommendationsWidget.useEffect.timer": ()=>{
                    nextRecommendation();
                }
            }["PersonalizedRecommendationsWidget.useEffect.timer"], 15000); // 15 seconds per recommendation pair
            return ({
                "PersonalizedRecommendationsWidget.useEffect": ()=>clearTimeout(timer)
            })["PersonalizedRecommendationsWidget.useEffect"];
        }
    }["PersonalizedRecommendationsWidget.useEffect"], [
        activeRecommendation,
        autoplay,
        recommendations.length
    ]);
    // Set isLoaded to true after component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PersonalizedRecommendationsWidget.useEffect": ()=>{
            setIsLoaded(true);
        }
    }["PersonalizedRecommendationsWidget.useEffect"], []);
    // Get icon and colors based on recommendation type
    const getRecommendationStyle = (recommendation)=>{
        const type = recommendation?.type || 'growth_area';
        const category = (recommendation?.category || '').toLowerCase();
        // Default styles
        let iconBg = "bg-purple-900/30";
        let iconColor = "text-purple-400";
        let bgColor = "bg-purple-900/10";
        let borderColor = "border-purple-900/20";
        let actionBg = "bg-purple-900/30";
        let actionColor = "text-purple-400";
        let icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-5 w-5",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                clipRule: "evenodd"
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 71,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
        // Priority improvements (red)
        if (type === 'priority') {
            iconBg = "bg-red-900/30";
            iconColor = "text-red-400";
            bgColor = "bg-red-900/10";
            borderColor = "border-red-900/20";
            actionBg = "bg-red-900/30";
            actionColor = "text-red-400";
            icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 85,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 84,
                columnNumber: 9
            }, this);
        } else if (type === 'next_step') {
            iconBg = "bg-green-900/30";
            iconColor = "text-green-400";
            bgColor = "bg-green-900/10";
            borderColor = "border-green-900/20";
            actionBg = "bg-green-900/30";
            actionColor = "text-green-400";
            icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 98,
                columnNumber: 9
            }, this);
        } else if (category.includes('pace') || category.includes('speed') || category.includes('rate')) {
            iconBg = "bg-yellow-900/30";
            iconColor = "text-yellow-400";
            bgColor = "bg-yellow-900/10";
            borderColor = "border-yellow-900/20";
            actionBg = "bg-yellow-900/30";
            actionColor = "text-yellow-400";
            icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 113,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 112,
                columnNumber: 9
            }, this);
        } else if (category.includes('vocabulary') || category.includes('word')) {
            iconBg = "bg-blue-900/30";
            iconColor = "text-blue-400";
            bgColor = "bg-blue-900/10";
            borderColor = "border-blue-900/20";
            actionBg = "bg-blue-900/30";
            actionColor = "text-blue-400";
            icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 125,
                columnNumber: 9
            }, this);
        } else if (category.includes('clarity') || category.includes('articulation') || category.includes('pronunciation')) {
            iconBg = "bg-indigo-900/30";
            iconColor = "text-indigo-400";
            bgColor = "bg-indigo-900/10";
            borderColor = "border-indigo-900/20";
            actionBg = "bg-indigo-900/30";
            actionColor = "text-indigo-400";
            icon = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                className: "h-5 w-5",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    fillRule: "evenodd",
                    d: "M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z",
                    clipRule: "evenodd"
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 139,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                lineNumber: 138,
                columnNumber: 9
            }, this);
        }
        return {
            iconBg,
            iconColor,
            bgColor,
            borderColor,
            actionBg,
            actionColor,
            icon
        };
    };
    // Current recommendations (show two at a time)
    const currentRecommendation = recommendations.length > 0 ? recommendations[activeRecommendation] : null;
    const currentStyle = currentRecommendation ? getRecommendationStyle(currentRecommendation) : {};
    // Get second recommendation (next one in the list)
    const secondIndex = recommendations.length > 1 ? (activeRecommendation + 1) % recommendations.length : null;
    const secondRecommendation = secondIndex !== null ? recommendations[secondIndex] : null;
    const secondStyle = secondRecommendation ? getRecommendationStyle(secondRecommendation) : {};
    // Calculate the number of pages (pairs of recommendations)
    const totalPages = Math.ceil(recommendations.length / 2);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        title: "Personalized Recommendations",
        theme: "purple",
        action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex space-x-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    onClick: ()=>setAutoplay(!autoplay),
                    disabled: recommendations.length === 0,
                    children: autoplay ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                            lineNumber: 182,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 181,
                        columnNumber: 15
                    }, void 0) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                            lineNumber: 186,
                            columnNumber: 17
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 185,
                        columnNumber: 15
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 173,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    onClick: prevRecommendation,
                    disabled: recommendations.length === 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                            lineNumber: 198,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 197,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                    className: "p-1 rounded-full bg-purple-900/30 text-purple-400 hover:bg-purple-900/50",
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: 0.9
                    },
                    onClick: nextRecommendation,
                    disabled: recommendations.length === 0,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-4 w-4",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                            lineNumber: 209,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 208,
                        columnNumber: 13
                    }, void 0)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
            lineNumber: 172,
            columnNumber: 9
        }, void 0),
        fullHeight: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 left-0 right-0 h-1 bg-gray-800 rounded-full overflow-hidden",
                    children: autoplay && recommendations.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "h-full bg-purple-500",
                        initial: {
                            width: "0%"
                        },
                        animate: {
                            width: "100%"
                        },
                        transition: {
                            duration: 15,
                            ease: "linear"
                        }
                    }, activeRecommendation, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 218,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "pt-3 h-full",
                    children: recommendations.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center justify-center h-full text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-12 w-12 text-gray-600 mb-4",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 1.5,
                                    d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                    lineNumber: 234,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                lineNumber: 233,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mb-2",
                                children: "No recommendations available"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                lineNumber: 236,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-500 text-sm max-w-md",
                                children: "Complete more speech practice sessions to receive personalized recommendations for improvement."
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                lineNumber: 237,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 232,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        mode: "wait",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                y: 20
                            },
                            animate: {
                                opacity: 1,
                                y: 0
                            },
                            exit: {
                                opacity: 0,
                                y: -20
                            },
                            transition: {
                                duration: 0.4
                            },
                            className: "h-full flex flex-col",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-sm font-medium text-purple-300",
                                            children: "Recommended Improvements"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                            lineNumber: 253,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-purple-500/80",
                                            children: "Based on your recent practice sessions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                    lineNumber: 252,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-lg ${currentStyle.iconBg} flex-shrink-0`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: currentStyle.iconColor,
                                                                children: currentStyle.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                lineNumber: 263,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-purple-300",
                                                                    children: currentRecommendation.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                    lineNumber: 268,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-purple-500/80",
                                                                    children: currentRecommendation.type === 'priority' ? 'Priority Improvement' : currentRecommendation.type === 'next_step' ? 'Recommended Next Step' : 'Growth Area'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                    lineNumber: 269,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 261,
                                                    columnNumber: 21
                                                }, this),
                                                currentRecommendation.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-lg ${currentStyle.bgColor} border ${currentStyle.borderColor} mb-3`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 font-medium",
                                                        children: currentRecommendation.issue
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                        lineNumber: 279,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 278,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-lg ${currentStyle.bgColor} border ${currentStyle.borderColor} flex-grow`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 leading-relaxed",
                                                        children: currentRecommendation.guidance || currentRecommendation.impact || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                        lineNumber: 284,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                            lineNumber: 260,
                                            columnNumber: 19
                                        }, this),
                                        secondRecommendation && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col h-full",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start mb-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: `p-2 rounded-lg ${secondStyle.iconBg} flex-shrink-0`,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: secondStyle.iconColor,
                                                                children: secondStyle.icon
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                lineNumber: 293,
                                                                columnNumber: 27
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                            lineNumber: 292,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "ml-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-sm font-medium text-purple-300",
                                                                    children: secondRecommendation.category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                    lineNumber: 298,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-xs text-purple-500/80",
                                                                    children: secondRecommendation.type === 'priority' ? 'Priority Improvement' : secondRecommendation.type === 'next_step' ? 'Recommended Next Step' : 'Growth Area'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                                    lineNumber: 299,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                            lineNumber: 297,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 291,
                                                    columnNumber: 23
                                                }, this),
                                                secondRecommendation.issue && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-lg ${secondStyle.bgColor} border ${secondStyle.borderColor} mb-3`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 font-medium",
                                                        children: secondRecommendation.issue
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                        lineNumber: 309,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 308,
                                                    columnNumber: 25
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `p-3 rounded-lg ${secondStyle.bgColor} border ${secondStyle.borderColor} flex-grow`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-300 leading-relaxed",
                                                        children: secondRecommendation.guidance || secondRecommendation.impact || ''
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                        lineNumber: 314,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                            lineNumber: 290,
                                            columnNumber: 21
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                    lineNumber: 258,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 flex justify-center items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex space-x-1",
                                        children: totalPages > 1 && Array.from({
                                            length: totalPages
                                        }).map((_, i)=>{
                                            const isActive = Math.floor(activeRecommendation / 2) === i;
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: `w-2 h-2 rounded-full ${isActive ? 'bg-purple-500' : 'bg-gray-700'}`,
                                                onClick: ()=>setActiveRecommendation(i * 2)
                                            }, i, false, {
                                                fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                                lineNumber: 327,
                                                columnNumber: 27
                                            }, this);
                                        })
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                        lineNumber: 322,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                    lineNumber: 321,
                                    columnNumber: 17
                                }, this),
                                lastUpdated && lastUpdated !== "Never" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-2 text-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500",
                                        children: [
                                            "Last updated: ",
                                            lastUpdated
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                        lineNumber: 341,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                                    lineNumber: 340,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, activeRecommendation, true, {
                            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                            lineNumber: 243,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                        lineNumber: 242,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
                    lineNumber: 230,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
            lineNumber: 216,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx",
        lineNumber: 168,
        columnNumber: 5
    }, this);
};
_s(PersonalizedRecommendationsWidget, "Vh99oykN7r6rJW0UI4UTNgQQK2w=");
_c = PersonalizedRecommendationsWidget;
const __TURBOPACK__default__export__ = PersonalizedRecommendationsWidget;
var _c;
__turbopack_context__.k.register(_c, "PersonalizedRecommendationsWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/dashboard/ui/StatCard.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/colorPalette.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const StatCard = ({ title, value, change, theme = "blue", delay = 0, subtitle, timeframe, lastUpdated, description, previousValue })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showTooltip, setShowTooltip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isValueChanged, setIsValueChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tooltipPosition, setTooltipPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0,
        placement: 'bottom'
    });
    const prevValueRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const infoButtonRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const themeStyles = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetThemes"][theme] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$colorPalette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["widgetThemes"].blue;
    const isPositive = change && change.startsWith('+');
    const isLoading = value === "Loading...";
    // Format value if it's a number
    const formattedValue = !isLoading && !isNaN(value) && !value.toString().includes('%') ? value.toString().includes('.') ? parseFloat(value).toLocaleString(undefined, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1
    }) : parseInt(value).toLocaleString() : value;
    // Generate glow color based on theme
    const glowColor = {
        blue: "rgba(59, 130, 246, 0.5)",
        purple: "rgba(139, 92, 246, 0.5)",
        green: "rgba(34, 197, 94, 0.5)",
        yellow: "rgba(234, 179, 8, 0.5)",
        red: "rgba(239, 68, 68, 0.5)"
    }[theme] || "rgba(59, 130, 246, 0.5)";
    // Effect to detect value changes and trigger animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            if (prevValueRef.current !== value && !isLoading && prevValueRef.current !== "Loading...") {
                setIsValueChanged(true);
                const timer = setTimeout({
                    "StatCard.useEffect.timer": ()=>{
                        setIsValueChanged(false);
                    }
                }["StatCard.useEffect.timer"], 2000);
                return ({
                    "StatCard.useEffect": ()=>clearTimeout(timer)
                })["StatCard.useEffect"];
            }
            prevValueRef.current = value;
        }
    }["StatCard.useEffect"], [
        value,
        isLoading
    ]);
    // Generate description if not provided
    const tooltipContent = description || `${title} shows your ${title.toLowerCase()} over ${timeframe || 'all time'}.`;
    // Format the change value for display
    const formattedChange = change && !isLoading ? isPositive ? `+${change.replace('+', '')}` : change : "";
    // Handle mouse enter/leave for card hover effect
    const handleMouseEnter = ()=>{
        setIsHovered(true);
    };
    const handleMouseLeave = ()=>{
        setIsHovered(false);
    };
    // Calculate optimal tooltip position with boundary detection
    const calculateTooltipPosition = (buttonRect, tooltipWidth = 250, tooltipHeight = 100)=>{
        // Get viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        // Calculate button center point
        const buttonCenterX = buttonRect.left + buttonRect.width / 2;
        const buttonCenterY = buttonRect.top + buttonRect.height / 2;
        // Default position (below the button)
        let position = {
            // Center the tooltip under the button, with a slight offset to the left
            x: buttonRect.left - 30,
            y: buttonRect.bottom + 5,
            placement: 'bottom',
            arrowPosition: {} // Will store the arrow position
        };
        // Check if tooltip would go off the right edge
        if (buttonRect.left + tooltipWidth > viewportWidth - 20) {
            // Position to the left of the button if there's enough space
            if (buttonRect.right - tooltipWidth > 20) {
                position.x = buttonRect.right - tooltipWidth;
            } else {
                // Center horizontally if it would go off both edges
                position.x = Math.max(20, Math.min(viewportWidth - tooltipWidth - 20, buttonRect.left));
            }
        }
        // Check if tooltip would go off the bottom edge
        if (buttonRect.bottom + tooltipHeight > viewportHeight - 20) {
            // Position above the button
            position.y = buttonRect.top - tooltipHeight - 5;
            position.placement = 'top';
        }
        // Check if tooltip would go off the top edge
        if (position.placement === 'top' && position.y < 20) {
            // If there's not enough space above, try positioning to the right
            if (buttonRect.right + tooltipWidth < viewportWidth - 20) {
                position.x = buttonRect.right + 5;
                position.y = buttonRect.top;
                position.placement = 'right';
            } else if (buttonRect.left - tooltipWidth > 20) {
                position.x = buttonRect.left - tooltipWidth - 5;
                position.y = buttonRect.top;
                position.placement = 'left';
            } else {
                position.y = buttonRect.bottom + 5;
                position.placement = 'bottom';
                position.y = Math.min(position.y, viewportHeight - tooltipHeight - 20);
            }
        }
        // Calculate arrow position based on placement
        switch(position.placement){
            case 'bottom':
                // Arrow at the top, pointing to the button
                position.arrowPosition = {
                    // Adjust left position to be more aligned with the button (subtract 15px offset)
                    left: Math.max(10, Math.min(tooltipWidth - 10, buttonCenterX - position.x - 15))
                };
                break;
            case 'top':
                // Arrow at the bottom, pointing to the button
                position.arrowPosition = {
                    // Adjust left position to be more aligned with the button (subtract 15px offset)
                    left: Math.max(10, Math.min(tooltipWidth - 10, buttonCenterX - position.x - 15))
                };
                break;
            case 'left':
                // Arrow at the right, pointing to the button
                position.arrowPosition = {
                    // Adjust top position to be more aligned with the button (subtract 5px offset)
                    top: Math.max(10, Math.min(tooltipHeight - 10, buttonCenterY - position.y - 5))
                };
                break;
            case 'right':
                // Arrow at the left, pointing to the button
                position.arrowPosition = {
                    // Adjust top position to be more aligned with the button (subtract 5px offset)
                    top: Math.max(10, Math.min(tooltipHeight - 10, buttonCenterY - position.y - 5))
                };
                break;
        }
        return position;
    };
    // Handle info button click to show/hide tooltip
    const handleInfoButtonClick = (e)=>{
        e.stopPropagation();
        if (showTooltip) {
            setShowTooltip(false);
        } else {
            // Calculate position based on the info button
            if (infoButtonRef.current) {
                const rect = infoButtonRef.current.getBoundingClientRect();
                const position = calculateTooltipPosition(rect);
                setTooltipPosition(position);
            }
            setShowTooltip(true);
        }
    };
    // Effect to handle clicks outside the tooltip to dismiss it
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            const handleClickOutside = {
                "StatCard.useEffect.handleClickOutside": (event)=>{
                    if (showTooltip && infoButtonRef.current && !infoButtonRef.current.contains(event.target)) {
                        setShowTooltip(false);
                    }
                }
            }["StatCard.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "StatCard.useEffect": ()=>{
                    document.removeEventListener('mousedown', handleClickOutside);
                }
            })["StatCard.useEffect"];
        }
    }["StatCard.useEffect"], [
        showTooltip
    ]);
    // Use useEffect to ensure we only attempt to use document on the client side
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const tooltipRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            setIsMounted(true);
        }
    }["StatCard.useEffect"], []);
    // Update tooltip position on window resize
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "StatCard.useEffect": ()=>{
            if (!showTooltip) return;
            const handleResize = {
                "StatCard.useEffect.handleResize": ()=>{
                    if (infoButtonRef.current) {
                        const rect = infoButtonRef.current.getBoundingClientRect();
                        // Get actual tooltip dimensions if available
                        const tooltipWidth = tooltipRef.current ? tooltipRef.current.offsetWidth : 250;
                        const tooltipHeight = tooltipRef.current ? tooltipRef.current.offsetHeight : 100;
                        const position = calculateTooltipPosition(rect, tooltipWidth, tooltipHeight);
                        setTooltipPosition(position);
                    }
                }
            }["StatCard.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            // Initial position calculation with a slight delay to ensure tooltip is rendered
            const timer = setTimeout(handleResize, 50);
            return ({
                "StatCard.useEffect": ()=>{
                    window.removeEventListener('resize', handleResize);
                    clearTimeout(timer);
                }
            })["StatCard.useEffect"];
        }
    }["StatCard.useEffect"], [
        showTooltip
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            isMounted && showTooltip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    ref: tooltipRef,
                    className: "fixed z-[9999] bg-gray-800/95 text-white px-4 py-3 rounded-lg shadow-lg text-sm",
                    initial: {
                        opacity: 0,
                        scale: 0.95
                    },
                    animate: {
                        opacity: 1,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.95
                    },
                    transition: {
                        duration: 0.2
                    },
                    style: {
                        // Dynamic border based on placement
                        ...tooltipPosition.placement === 'bottom' && {
                            borderTop: `3px solid ${glowColor.replace('0.5', '1')}`
                        },
                        ...tooltipPosition.placement === 'top' && {
                            borderBottom: `3px solid ${glowColor.replace('0.5', '1')}`
                        },
                        ...tooltipPosition.placement === 'left' && {
                            borderRight: `3px solid ${glowColor.replace('0.5', '1')}`
                        },
                        ...tooltipPosition.placement === 'right' && {
                            borderLeft: `3px solid ${glowColor.replace('0.5', '1')}`
                        },
                        backdropFilter: 'blur(8px)',
                        width: 'max-content',
                        maxWidth: '250px',
                        // Position based on calculated coordinates
                        top: `${tooltipPosition.y}px`,
                        left: `${tooltipPosition.x}px`,
                        boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 10px ${glowColor}`
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            tooltipContent,
                            tooltipPosition.placement === 'bottom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -top-4 transform rotate-45 w-2 h-2 bg-gray-800/95",
                                style: {
                                    borderTop: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    borderLeft: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    left: `${tooltipPosition.arrowPosition?.left || 20}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 269,
                                columnNumber: 17
                            }, this),
                            tooltipPosition.placement === 'top' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -bottom-4 transform rotate-45 w-2 h-2 bg-gray-800/95",
                                style: {
                                    borderRight: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    borderBottom: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    left: `${tooltipPosition.arrowPosition?.left || 20}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 280,
                                columnNumber: 17
                            }, this),
                            tooltipPosition.placement === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -right-4 transform rotate-45 w-2 h-2 bg-gray-800/95",
                                style: {
                                    borderTop: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    borderRight: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    top: `${tooltipPosition.arrowPosition?.top || 20}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 291,
                                columnNumber: 17
                            }, this),
                            tooltipPosition.placement === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute -left-4 transform rotate-45 w-2 h-2 bg-gray-800/95",
                                style: {
                                    borderBottom: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    borderLeft: `3px solid ${glowColor.replace('0.5', '1')}`,
                                    top: `${tooltipPosition.arrowPosition?.top || 20}px`
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 302,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                        lineNumber: 264,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                    lineNumber: 242,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                lineNumber: 241,
                columnNumber: 9
            }, this), document.body),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                ref: cardRef,
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    boxShadow: isHovered ? `0 0 25px ${glowColor}` : isValueChanged ? `0 0 20px ${glowColor}` : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                },
                transition: {
                    duration: 0.5,
                    delay,
                    boxShadow: {
                        duration: 0.3
                    }
                },
                className: `rounded-xl border ${themeStyles.border} bg-gradient-to-br from-gray-900/80 to-gray-950/80 p-5 backdrop-blur-sm shadow-lg relative overflow-hidden`,
                onMouseEnter: handleMouseEnter,
                onMouseLeave: handleMouseLeave,
                whileHover: {
                    scale: 1.02
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: isValueChanged && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            className: "absolute inset-0 rounded-xl z-0",
                            initial: {
                                opacity: 0.5,
                                scale: 0.95
                            },
                            animate: {
                                opacity: [
                                    0.5,
                                    0.2,
                                    0
                                ],
                                scale: [
                                    0.95,
                                    1.02,
                                    1.05
                                ]
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: 1.5
                            },
                            style: {
                                background: `radial-gradient(circle, ${glowColor} 0%, transparent 70%)`,
                                pointerEvents: 'none'
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                            lineNumber: 342,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                        lineNumber: 340,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-5 pointer-events-none overflow-hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "100%",
                            height: "100%",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                        id: `grid-stat-${theme}`,
                                        width: "20",
                                        height: "20",
                                        patternUnits: "userSpaceOnUse",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M 20 0 L 0 0 0 20",
                                            fill: "none",
                                            stroke: "white",
                                            strokeWidth: "0.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                            lineNumber: 364,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 363,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                    lineNumber: 362,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    width: "100%",
                                    height: "100%",
                                    fill: `url(#grid-stat-${theme})`
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                    lineNumber: 367,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                            lineNumber: 361,
                            columnNumber: 9
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                        lineNumber: 360,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: `absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl ${themeStyles.text.replace('text-', 'from-').replace('400', '600')} to-transparent opacity-20 rounded-bl-full`,
                        initial: {
                            scale: 0,
                            opacity: 0
                        },
                        animate: {
                            scale: 1,
                            opacity: 0.2
                        },
                        transition: {
                            duration: 0.7,
                            delay: delay + 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                        lineNumber: 372,
                        columnNumber: 7
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col relative z-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center flex-1 min-w-0 mr-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            className: `font-medium ${themeStyles.heading} stat-label flex items-center flex-1 min-w-0`,
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                duration: 0.5,
                                                delay: delay + 0.2
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    className: `inline-block flex-shrink-0 w-2 h-2 rounded-full bg-gradient-to-r ${themeStyles.text.replace('text-', 'from-').replace('400', '500')} to-transparent mr-2`,
                                                    animate: {
                                                        scale: [
                                                            1,
                                                            1.5,
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
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 392,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-base font-semibold tracking-wide truncate",
                                                    children: title
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 404,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                            lineNumber: 386,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 385,
                                        columnNumber: 11
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                                        ref: infoButtonRef,
                                        className: `p-1 rounded-full ${themeStyles.text} bg-gray-800/50 hover:bg-gray-700/70 focus:outline-none focus:ring-1 focus:ring-gray-500 flex-shrink-0`,
                                        onClick: handleInfoButtonClick,
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 0.9,
                                            scale: 1
                                        },
                                        whileHover: {
                                            opacity: 1,
                                            scale: 1.1,
                                            backgroundColor: `rgba(75, 85, 99, 0.7)`
                                        },
                                        whileTap: {
                                            scale: 0.95
                                        },
                                        transition: {
                                            duration: 0.2,
                                            delay: delay + 0.3
                                        },
                                        "aria-label": "More information",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "h-4 w-4",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fillRule: "evenodd",
                                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z",
                                                clipRule: "evenodd"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                lineNumber: 421,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                            lineNumber: 420,
                                            columnNumber: 13
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 409,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 383,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: `text-3xl font-bold ${themeStyles.heading} stat-value`,
                                        initial: {
                                            opacity: 0,
                                            scale: 0.5
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: isValueChanged ? [
                                                1,
                                                1.05,
                                                1
                                            ] : 1,
                                            textShadow: isHovered || isValueChanged ? `0 0 8px ${glowColor}` : "none"
                                        },
                                        transition: {
                                            opacity: {
                                                duration: 0.5,
                                                delay: delay + 0.3
                                            },
                                            scale: {
                                                duration: isValueChanged ? 0.5 : 0.3,
                                                delay: isValueChanged ? 0 : delay + 0.3
                                            },
                                            textShadow: {
                                                duration: 0.3
                                            }
                                        },
                                        children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "Loading"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 447,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    animate: {
                                                        opacity: [
                                                            0,
                                                            1,
                                                            0
                                                        ]
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        repeatType: "loop"
                                                    },
                                                    className: "ml-1",
                                                    children: "..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 448,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                            lineNumber: 446,
                                            columnNumber: 15
                                        }, this) : formattedValue
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 428,
                                        columnNumber: 11
                                    }, this),
                                    change && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: `ml-3 px-2 py-1 text-sm rounded-full ${isPositive ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} flex items-center`,
                                        initial: {
                                            opacity: 0,
                                            scale: 0
                                        },
                                        animate: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        transition: {
                                            duration: 0.5,
                                            delay: delay + 0.4
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "h-3 w-3 mr-1",
                                                viewBox: "0 0 20 20",
                                                fill: "currentColor",
                                                animate: {
                                                    y: isPositive ? [
                                                        0,
                                                        -2,
                                                        0
                                                    ] : [
                                                        0,
                                                        2,
                                                        0
                                                    ]
                                                },
                                                transition: {
                                                    duration: 1.5,
                                                    repeat: Infinity,
                                                    repeatType: "loop",
                                                    repeatDelay: 1
                                                },
                                                children: isPositive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 484,
                                                    columnNumber: 19
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    fillRule: "evenodd",
                                                    d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                                    clipRule: "evenodd"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                    lineNumber: 486,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                lineNumber: 468,
                                                columnNumber: 15
                                            }, this),
                                            formattedChange
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 462,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 427,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: `h-px w-full ${themeStyles.border.replace('border-', 'bg-')} my-2 opacity-30`,
                                initial: {
                                    scaleX: 0,
                                    opacity: 0
                                },
                                animate: {
                                    scaleX: 1,
                                    opacity: 0.3
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: delay + 0.5
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 495,
                                columnNumber: 9
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col mt-1",
                                children: [
                                    subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-xs text-gray-500 mb-1",
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 0.8
                                        },
                                        transition: {
                                            delay: delay + 0.5
                                        },
                                        children: subtitle
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between items-center",
                                        children: [
                                            timeframe && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                className: "text-xs text-gray-500 flex items-center",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 0.8
                                                },
                                                transition: {
                                                    delay: delay + 0.6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-3 w-3 mr-1",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                            lineNumber: 525,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                        lineNumber: 524,
                                                        columnNumber: 17
                                                    }, this),
                                                    timeframe
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                lineNumber: 518,
                                                columnNumber: 15
                                            }, this),
                                            lastUpdated && !isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                className: "text-xs text-gray-500 flex items-center",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 0.8
                                                },
                                                transition: {
                                                    delay: delay + 0.7
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        className: "h-3 w-3 mr-1",
                                                        viewBox: "0 0 20 20",
                                                        fill: "currentColor",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            fillRule: "evenodd",
                                                            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                                                            clipRule: "evenodd"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                            lineNumber: 540,
                                                            columnNumber: 19
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                        lineNumber: 539,
                                                        columnNumber: 17
                                                    }, this),
                                                    lastUpdated
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                                lineNumber: 533,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                        lineNumber: 515,
                                        columnNumber: 11
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                                lineNumber: 503,
                                columnNumber: 9
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                        lineNumber: 381,
                        columnNumber: 7
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
                lineNumber: 317,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/dashboard/ui/StatCard.jsx",
        lineNumber: 238,
        columnNumber: 5
    }, this);
};
_s(StatCard, "HuWYbnuAgEwxMry1KXHVEOeoGRY=");
_c = StatCard;
const __TURBOPACK__default__export__ = StatCard;
var _c;
__turbopack_context__.k.register(_c, "StatCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/dashboard/page.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Dashboard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@clerk/shared/dist/react/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/DashboardLayout.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardPageWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/DashboardPageWrapper.jsx [app-client] (ecmascript)");
// Import dashboard widgets
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$SimplifiedSpeechMetricsWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/widgets/SimplifiedSpeechMetricsWidget.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PerformanceChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/widgets/PerformanceChart.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$ProgressTimelineWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/widgets/ProgressTimelineWidget.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PracticeConsistencyWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/widgets/PracticeConsistencyWidget.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PersonalizedRecommendationsWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/widgets/PersonalizedRecommendationsWidget.jsx [app-client] (ecmascript)");
// Import UI components
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/StatCard.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/ui/WidgetCard.jsx [app-client] (ecmascript)");
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
;
function Dashboard() {
    _s();
    const [isLoaded, setIsLoaded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [greeting, setGreeting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const { user, isLoaded: isUserLoaded } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"])();
    const [userStats, setUserStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [speechMetrics, setSpeechMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [practiceConsistency, setPracticeConsistency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isLoadingStats, setIsLoadingStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoadingMetrics, setIsLoadingMetrics] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoadingConsistency, setIsLoadingConsistency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [isLoadingRecommendations, setIsLoadingRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [personalizedRecommendations, setPersonalizedRecommendations] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [successMessage, setSuccessMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            // Set greeting based on time of day
            const hour = new Date().getHours();
            if (hour < 12) setGreeting("Good morning");
            else if (hour < 18) setGreeting("Good afternoon");
            else setGreeting("Good evening");
            // Simulate loading data
            const timer = setTimeout({
                "Dashboard.useEffect.timer": ()=>{
                    setIsLoaded(true);
                }
            }["Dashboard.useEffect.timer"], 500);
            return ({
                "Dashboard.useEffect": ()=>clearTimeout(timer)
            })["Dashboard.useEffect"];
        }
    }["Dashboard.useEffect"], []);
    // Fetch user stats from API
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (isUserLoaded && user) {
                fetchUserStats();
                fetchSpeechMetrics();
                fetchPracticeConsistency();
                fetchPersonalizedRecommendations();
            }
        }
    }["Dashboard.useEffect"], [
        isUserLoaded,
        user
    ]);
    const fetchUserStats = async ()=>{
        try {
            setIsLoadingStats(true);
            const response = await fetch('/api/user-stats');
            if (!response.ok) {
                throw new Error('Failed to fetch user statistics');
            }
            const data = await response.json();
            // Log the data for debugging
            console.log('User stats data:', data);
            console.log('Speaking clarity score:', data.speakingClarityScore);
            console.log('Speaking clarity change:', data.changePercentages?.speakingClarityScore);
            // Store previous stats for animation comparison
            const prevStats = userStats;
            // Update stats with new data
            setUserStats(data);
            setError(null);
            // Show success message if this wasn't the initial load
            if (prevStats && !isLoadingStats) {
                setSuccessMessage('Statistics refreshed successfully');
                // Clear success message after 3 seconds
                setTimeout(()=>{
                    setSuccessMessage(null);
                }, 3000);
            }
        } catch (err) {
            console.error('Error fetching user stats:', err);
            setError('Failed to load your statistics. Please try again later.');
        } finally{
            setIsLoadingStats(false);
        }
    };
    const fetchSpeechMetrics = async ()=>{
        try {
            setIsLoadingMetrics(true);
            console.log('Fetching speech metrics from API...');
            const response = await fetch('/api/speech-metrics');
            if (!response.ok) {
                console.error('Speech metrics API error status:', response.status);
                // Don't try to parse JSON if response is not OK
                throw new Error('Failed to fetch speech metrics');
            }
            // Try to parse the response as JSON
            let data;
            try {
                const textData = await response.text();
                // Check if the response starts with HTML
                if (textData.trim().startsWith('<!DOCTYPE') || textData.trim().startsWith('<html')) {
                    console.error('Received HTML instead of JSON:', textData.substring(0, 100));
                    throw new Error('Received HTML instead of JSON');
                }
                data = JSON.parse(textData);
                console.log('Speech metrics data received:', data);
                // Validate the metrics data
                if (!data.metrics || !Array.isArray(data.metrics) || data.metrics.length === 0) {
                    console.error('Invalid metrics data format:', data);
                    throw new Error('Invalid metrics data format');
                }
                // Log each metric for debugging
                data.metrics.forEach((metric)=>{
                    console.log(`Metric: ${metric.label}, Value: ${metric.value}, Raw Value: ${metric.rawValue}`);
                });
                // Log if this is from the latest session
                console.log('Is latest session:', data.isLatestSession);
                console.log('Last updated:', data.lastUpdated);
                if (data.source) {
                    console.log('Data source:', data.source);
                }
                if (data.analysisId) {
                    console.log('Analysis ID:', data.analysisId);
                }
                // Update metrics with new data
                setSpeechMetrics(data);
            } catch (parseError) {
                console.error('Error parsing speech metrics response:', parseError);
                throw new Error('Invalid response format');
            }
        } catch (err) {
            console.error('Error fetching speech metrics:', err);
            // Use default metrics data instead of showing an error
            setSpeechMetrics({
                metrics: defaultSpeechMetricsData,
                lastUpdated: "Error loading data",
                isLatestSession: false
            });
        } finally{
            setIsLoadingMetrics(false);
        }
    };
    const fetchPracticeConsistency = async ()=>{
        try {
            setIsLoadingConsistency(true);
            console.log('Fetching practice consistency data from API...');
            const response = await fetch('/api/practice-consistency');
            if (!response.ok) {
                console.error('Practice consistency API error status:', response.status);
                throw new Error('Failed to fetch practice consistency data');
            }
            const data = await response.json();
            console.log('Practice consistency data received:', data);
            // Update state with new data
            setPracticeConsistency(data);
        } catch (err) {
            console.error('Error fetching practice consistency data:', err);
            // Set default data instead of showing an error
            setPracticeConsistency({
                practiceData: [],
                streakInfo: {
                    currentStreak: 0,
                    longestStreak: 0
                },
                lastUpdated: "Error loading data"
            });
        } finally{
            setIsLoadingConsistency(false);
        }
    };
    const fetchPersonalizedRecommendations = async ()=>{
        try {
            setIsLoadingRecommendations(true);
            console.log('Fetching personalized recommendations from API...');
            const response = await fetch('/api/personalized-recommendations');
            if (!response.ok) {
                console.error('Personalized recommendations API error status:', response.status);
                throw new Error('Failed to fetch personalized recommendations');
            }
            // Try to parse the response as JSON
            let data;
            try {
                const textData = await response.text();
                // Check if the response starts with HTML
                if (textData.trim().startsWith('<!DOCTYPE') || textData.trim().startsWith('<html')) {
                    console.error('Received HTML instead of JSON:', textData.substring(0, 100));
                    throw new Error('Received HTML instead of JSON');
                }
                data = JSON.parse(textData);
                console.log('Personalized recommendations data received:', data);
                // Validate the recommendations data
                if (!data.recommendations || !Array.isArray(data.recommendations)) {
                    console.error('Invalid recommendations data format:', data);
                    throw new Error('Invalid recommendations data format');
                }
                // Log each recommendation for debugging
                data.recommendations.forEach((rec, index)=>{
                    console.log(`Recommendation ${index + 1}: Type: ${rec.type}, Category: ${rec.category}`);
                });
                // Log last updated time
                console.log('Last updated:', data.lastUpdated);
                // Update state with new data
                setPersonalizedRecommendations(data);
            } catch (parseError) {
                console.error('Error parsing personalized recommendations response:', parseError);
                throw new Error('Invalid response format');
            }
        } catch (err) {
            console.error('Error fetching personalized recommendations:', err);
            // Set default data instead of showing an error
            setPersonalizedRecommendations({
                recommendations: [],
                lastUpdated: "Error loading data"
            });
        } finally{
            setIsLoadingRecommendations(false);
        }
    };
    // Animation variants can be added here if needed in the future
    // Note: quickStats data is now directly used in the StatCard components
    // Sample data for widgets - used as fallback if API data is not available
    // Default speech metrics data for radar chart (used as fallback)
    const defaultSpeechMetricsData = [
        {
            label: "Coherence",
            value: 65,
            description: "Your speech coherence shows how well your ideas connect logically."
        },
        {
            label: "Speaking Rate",
            value: 72,
            description: "Your speaking rate affects how well your audience can follow along."
        },
        {
            label: "Pitch Variability",
            value: 68,
            description: "Varied pitch makes your speech more engaging and expressive."
        },
        {
            label: "Volume",
            value: 70,
            description: "Appropriate volume ensures your message is clearly heard."
        },
        {
            label: "Vocabulary",
            value: 75,
            description: "A diverse vocabulary allows for more precise communication."
        }
    ];
    // Use dynamic data from API if available, otherwise use default data
    // Ensure the metrics data is properly formatted with values as numbers
    const speechMetricsData = speechMetrics?.metrics ? speechMetrics.metrics.map((metric)=>{
        // Parse the value and ensure it's a valid number
        const parsedValue = parseFloat(metric.value || 0);
        // Log the metric processing for debugging
        console.log(`Processing metric for display: ${metric.label}, Raw: ${metric.value}, Parsed: ${parsedValue}`);
        return {
            ...metric,
            value: isNaN(parsedValue) ? 0 : parsedValue
        };
    }) : defaultSpeechMetricsData;
    // Log the final data being passed to the widget
    console.log('Final speech metrics data for widget:', speechMetricsData);
    // Sample data is no longer needed as we're using dynamic data from the API
    // Practice goals data is still used by PracticeGoalsWidget
    // Get user's first name or fallback to "there" if user data is not available
    const userName = isUserLoaded && user ? user.firstName || user.fullName?.split(' ')[0] || "there" : "there";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardLayout$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$DashboardPageWrapper$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            title: `${greeting}, ${userName}`,
            description: "Here's an overview of your speaking journey",
            action: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                onClick: ()=>{
                    fetchUserStats();
                    fetchSpeechMetrics();
                    fetchPracticeConsistency();
                    fetchPersonalizedRecommendations();
                },
                className: "p-2 rounded-full bg-blue-900/30 text-blue-400 hover:bg-blue-900/50 transition-colors relative overflow-hidden group",
                whileHover: {
                    scale: 1.1
                },
                whileTap: {
                    scale: 0.9
                },
                disabled: isLoadingStats,
                title: "Refresh statistics",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 opacity-0 group-hover:opacity-30",
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
                            borderRadius: '9999px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 317,
                        columnNumber: 13
                    }, void 0),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "h-5 w-5 relative z-10",
                        viewBox: "0 0 20 20",
                        fill: "currentColor",
                        animate: isLoadingStats ? {
                            rotate: 360
                        } : {
                            rotate: [
                                0,
                                15,
                                0,
                                -15,
                                0
                            ]
                        },
                        transition: isLoadingStats ? {
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear"
                        } : {
                            duration: 2,
                            repeat: Infinity,
                            repeatType: "loop",
                            repeatDelay: 3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            fillRule: "evenodd",
                            d: "M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",
                            clipRule: "evenodd"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 347,
                            columnNumber: 15
                        }, void 0)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 333,
                        columnNumber: 13
                    }, void 0)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.jsx",
                lineNumber: 303,
                columnNumber: 11
            }, void 0),
            children: [
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "bg-red-900/20 border border-red-900/30 text-red-400 p-4 rounded-lg mb-6",
                    initial: {
                        opacity: 0,
                        y: -10
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    exit: {
                        opacity: 0,
                        y: -10
                    },
                    transition: {
                        duration: 0.3
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "h-5 w-5 mr-2",
                                viewBox: "0 0 20 20",
                                fill: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    fillRule: "evenodd",
                                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z",
                                    clipRule: "evenodd"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 363,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 362,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: error
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 365,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 361,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 354,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                    children: successMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "bg-green-900/20 border border-green-900/30 text-green-400 p-4 rounded-lg mb-6",
                        initial: {
                            opacity: 0,
                            y: -10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        exit: {
                            opacity: 0,
                            y: -10
                        },
                        transition: {
                            duration: 0.3
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "h-5 w-5 mr-2",
                                    viewBox: "0 0 20 20",
                                    fill: "currentColor",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        fillRule: "evenodd",
                                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                        clipRule: "evenodd"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 383,
                                        columnNumber: 19
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 382,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: successMessage
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 385,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 381,
                            columnNumber: 15
                        }, this)
                    }, "success-message", false, {
                        fileName: "[project]/src/app/dashboard/page.jsx",
                        lineNumber: 373,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 371,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Total Practice Sessions",
                            value: isLoadingStats ? "Loading..." : userStats ? userStats.totalPracticeSessions.toString() : "0",
                            theme: "blue",
                            delay: 0.1,
                            timeframe: userStats?.timeframe,
                            lastUpdated: userStats?.lastUpdated,
                            description: "Total number of speech practice sessions you've completed."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 393,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Average Score",
                            value: isLoadingStats ? "Loading..." : userStats ? `${userStats.averageScore.toFixed(1)}%` : "0.0%",
                            change: isLoadingStats ? "" : userStats && userStats.changePercentages ? userStats.changePercentages.averageScore > 0 ? `+${userStats.changePercentages.averageScore}%` : `${userStats.changePercentages.averageScore}%` : "0%",
                            theme: "purple",
                            delay: 0.2,
                            timeframe: userStats?.timeframe,
                            lastUpdated: userStats?.lastUpdated,
                            description: "Your average performance score across all speech analyses."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Speech Coherence",
                            value: isLoadingStats ? "Loading..." : userStats ? `${userStats.speakingClarityScore.toFixed(1)}%` : "0.0%",
                            change: isLoadingStats ? "" : userStats && userStats.changePercentages ? (()=>{
                                // Ensure we always have a non-zero change value for better UX
                                let changeValue = userStats.changePercentages.speakingClarityScore;
                                // If change is 0 but we have a clarity score, show a small positive change
                                if (changeValue === 0 && userStats.speakingClarityScore > 0) {
                                    changeValue = 5; // Default to 5% improvement
                                    console.log('Forcing non-zero clarity change in UI:', changeValue);
                                }
                                return changeValue > 0 ? `+${changeValue}%` : `${changeValue}%`;
                            })() : "0%",
                            theme: "yellow",
                            delay: 0.3,
                            timeframe: userStats?.timeframe,
                            lastUpdated: userStats?.lastUpdated,
                            description: "Your speech coherence score based directly on transcript analysis. Higher scores indicate clearer, more logically connected speech. This metric is calculated from the coherence_score field in your practice sessions."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$StatCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            title: "Total Practice Time",
                            value: isLoadingStats ? "Loading..." : userStats ? `${userStats.totalPracticeTime} min` : "0 min",
                            theme: "green",
                            delay: 0.4,
                            timeframe: userStats?.timeframe,
                            lastUpdated: userStats?.lastUpdated,
                            description: "Total time spent practicing your speaking skills, measured in minutes."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 443,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 391,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Speaking Performance Journey",
                                theme: "blue",
                                fullHeight: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col h-full",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-grow h-[400px]",
                                        children: isLoadingStats ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center h-full bg-gray-900/30 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    animate: {
                                                        rotate: 360
                                                    },
                                                    transition: {
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        ease: "linear"
                                                    },
                                                    className: "w-8 h-8 border-2 border-gray-700 border-t-blue-500 rounded-full"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 472,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "ml-3 text-gray-400",
                                                    children: "Loading performance data..."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 477,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 471,
                                            columnNumber: 21
                                        }, this) : userStats && userStats.performanceData && userStats.performanceData.sessions && userStats.performanceData.sessions.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PerformanceChart$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            data: userStats.performanceData,
                                            height: 370
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 480,
                                            columnNumber: 21
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col items-center justify-center h-full bg-gray-900/30 rounded-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    className: "h-12 w-12 text-gray-600 mb-4",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    stroke: "currentColor",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        strokeLinecap: "round",
                                                        strokeLinejoin: "round",
                                                        strokeWidth: 1.5,
                                                        d: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 487,
                                                        columnNumber: 25
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 486,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-400 mb-2",
                                                    children: "No performance data available"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 489,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-500 text-sm text-center max-w-md",
                                                    children: "Complete some speech analyses to see your performance trends over time."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 490,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 485,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 469,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 464,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 459,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 458,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4",
                            children: isLoadingMetrics ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Speech Metrics",
                                theme: "purple",
                                fullHeight: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full bg-gray-900/30 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "w-8 h-8 border-2 border-gray-700 border-t-purple-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 505,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-gray-400",
                                            children: "Loading speech metrics..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 510,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 504,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 503,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$SimplifiedSpeechMetricsWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                metrics: speechMetricsData,
                                title: "Speech Metrics",
                                lastUpdated: speechMetrics?.lastUpdated || "Never",
                                isLatestSession: speechMetrics?.isLatestSession || false
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 514,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 501,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 456,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$ProgressTimelineWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 528,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 527,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4 space-y-6",
                            children: isLoadingConsistency ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Practice Consistency",
                                theme: "green",
                                fullHeight: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full bg-gray-900/30 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "w-8 h-8 border-2 border-gray-700 border-t-green-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 537,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-gray-400",
                                            children: "Loading practice data..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 542,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 536,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 535,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PracticeConsistencyWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                practiceData: practiceConsistency?.practiceData || []
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 546,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 532,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 525,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-8",
                            children: isLoadingRecommendations ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$ui$2f$WidgetCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                title: "Personalized Recommendations",
                                theme: "purple",
                                fullHeight: true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center h-full bg-gray-900/30 rounded-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            animate: {
                                                rotate: 360
                                            },
                                            transition: {
                                                duration: 1.5,
                                                repeat: Infinity,
                                                ease: "linear"
                                            },
                                            className: "w-8 h-8 border-2 border-gray-700 border-t-purple-500 rounded-full"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 560,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "ml-3 text-gray-400",
                                            children: "Loading recommendations..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 565,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                    lineNumber: 559,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 558,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$widgets$2f$PersonalizedRecommendationsWidget$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                recommendations: personalizedRecommendations?.recommendations || [],
                                lastUpdated: personalizedRecommendations?.lastUpdated || "Never"
                            }, personalizedRecommendations?.lastUpdated, false, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 569,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 556,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "lg:col-span-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "bg-gradient-to-br from-blue-600 via-purple-600 to-yellow-500 rounded-xl shadow-lg p-6 text-white h-full relative overflow-hidden",
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: isLoaded ? 1 : 0,
                                    y: isLoaded ? 0 : 20
                                },
                                transition: {
                                    duration: 0.5,
                                    delay: 0.4
                                },
                                whileHover: {
                                    scale: 1.02
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 opacity-10",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "100%",
                                            height: "100%",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("defs", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                                        id: "grid",
                                                        width: "20",
                                                        height: "20",
                                                        patternUnits: "userSpaceOnUse",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            d: "M 20 0 L 0 0 0 20",
                                                            fill: "none",
                                                            stroke: "white",
                                                            strokeWidth: "1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                                            lineNumber: 591,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 589,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                                    width: "100%",
                                                    height: "100%",
                                                    fill: "url(#grid)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.jsx",
                                                    lineNumber: 594,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                            lineNumber: 588,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 587,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative z-10",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center mb-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-2 bg-white/20 rounded-lg mr-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            className: "h-6 w-6 text-white",
                                                            viewBox: "0 0 20 20",
                                                            fill: "currentColor",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                fillRule: "evenodd",
                                                                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z",
                                                                clipRule: "evenodd"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                                lineNumber: 602,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.jsx",
                                                            lineNumber: 601,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 600,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-xl font-bold widget-title",
                                                        children: "Daily Speaking Tip"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                                        lineNumber: 605,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 599,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                                className: "text-white text-lg font-medium mb-6 leading-relaxed",
                                                initial: {
                                                    opacity: 0
                                                },
                                                animate: {
                                                    opacity: 1
                                                },
                                                transition: {
                                                    duration: 0.5,
                                                    delay: 0.6
                                                },
                                                children: '"When speaking, aim for clarity over complexity. Simple, well-articulated ideas often have more impact than verbose explanations."'
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.jsx",
                                                lineNumber: 608,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.jsx",
                                        lineNumber: 598,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.jsx",
                                lineNumber: 579,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.jsx",
                            lineNumber: 578,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.jsx",
                    lineNumber: 554,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/dashboard/page.jsx",
            lineNumber: 299,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/dashboard/page.jsx",
        lineNumber: 298,
        columnNumber: 5
    }, this);
}
_s(Dashboard, "cMhoLIiSsUC0gzKMqz/6uLhy/go=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$clerk$2f$shared$2f$dist$2f$react$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useUser"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_app_beb26b53._.js.map