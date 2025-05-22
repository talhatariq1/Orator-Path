(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/app/hooks/use-canvasCursor/index.js [app-client] (ecmascript)": ((__turbopack_context__) => {
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
const useCanvasCursor = ()=>{
    _s();
    function n(e) {
        this.init(e || {});
    }
    n.prototype = {
        init: function(e) {
            this.phase = e.phase || 0;
            this.offset = e.offset || 0;
            this.frequency = e.frequency || 0.001;
            this.amplitude = e.amplitude || 1;
        },
        update: function() {
            this.phase += this.frequency;
            return e = this.offset + Math.sin(this.phase) * this.amplitude;
        },
        value: function() {
            return e;
        }
    };
    function Line(e) {
        this.init(e || {});
    }
    Line.prototype = {
        init: function(e) {
            this.spring = e.spring + 0.1 * Math.random() - 0.02;
            this.friction = E.friction + 0.01 * Math.random() - 0.002;
            this.nodes = [];
            for(var t, n = 0; n < E.size; n++){
                t = new Node();
                t.x = pos.x;
                t.y = pos.y;
                this.nodes.push(t);
            }
        },
        update: function() {
            var e = this.spring, t = this.nodes[0];
            t.vx += (pos.x - t.x) * e;
            t.vy += (pos.y - t.y) * e;
            for(var n, i = 0, a = this.nodes.length; i < a; i++)t = this.nodes[i], 0 < i && (n = this.nodes[i - 1], t.vx += (n.x - t.x) * e, t.vy += (n.y - t.y) * e, t.vx += n.vx * E.dampening, t.vy += n.vy * E.dampening), t.vx *= this.friction, t.vy *= this.friction, t.x += t.vx, t.y += t.vy, e *= E.tension;
        },
        draw: function() {
            var e, t, n = this.nodes[0].x, i = this.nodes[0].y;
            ctx.beginPath();
            ctx.moveTo(n, i);
            for(var a = 1, o = this.nodes.length - 2; a < o; a++){
                e = this.nodes[a];
                t = this.nodes[a + 1];
                n = 0.5 * (e.x + t.x);
                i = 0.5 * (e.y + t.y);
                ctx.quadraticCurveTo(e.x, e.y, n, i);
            }
            e = this.nodes[a];
            t = this.nodes[a + 1];
            ctx.quadraticCurveTo(e.x, e.y, t.x, t.y);
            ctx.stroke();
            ctx.closePath();
        }
    };
    function onMousemove(e) {
        function o() {
            lines = [];
            for(var e = 0; e < E.trails; e++)lines.push(new Line({
                spring: 0.4 + e / E.trails * 0.025
            }));
        }
        function c(e) {
            e.touches ? (pos.x = e.touches[0].pageX, pos.y = e.touches[0].pageY) : (pos.x = e.clientX, pos.y = e.clientY), e.preventDefault();
        }
        function l(e) {
            1 == e.touches.length && (pos.x = e.touches[0].pageX, pos.y = e.touches[0].pageY);
        }
        document.removeEventListener('mousemove', onMousemove), document.removeEventListener('touchstart', onMousemove), document.addEventListener('mousemove', c), document.addEventListener('touchmove', c), document.addEventListener('touchstart', l), c(e), o(), render();
    }
    function render() {
        if (ctx && ctx.running) {
            ctx.globalCompositeOperation = 'source-over';
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            ctx.globalCompositeOperation = 'lighter';
            ctx.strokeStyle = 'hsla(' + Math.round(f.update()) + ',50%,50%,0.2)';
            ctx.lineWidth = 1;
            for(var e, t = 0; t < E.trails; t++){
                (e = lines[t]).update();
                e.draw();
            }
            ctx.frame++;
            window.requestAnimationFrame(render);
        }
    }
    function resizeCanvas() {
        if (ctx && ctx.canvas) {
            ctx.canvas.width = window.innerWidth - 20;
            ctx.canvas.height = window.innerHeight;
        }
    }
    var ctx, f, e = 0, pos = {}, lines = [], E = {
        debug: true,
        friction: 0.5,
        trails: 20,
        size: 50,
        dampening: 0.25,
        tension: 0.98
    };
    function Node() {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
    }
    const renderCanvas = function() {
        const canvas = document.getElementById('canvas');
        if (!canvas) return;
        ctx = canvas.getContext('2d');
        ctx.running = true;
        ctx.frame = 1;
        f = new n({
            phase: Math.random() * 2 * Math.PI,
            amplitude: 85,
            frequency: 0.0015,
            offset: 285
        });
        document.addEventListener('mousemove', onMousemove);
        document.addEventListener('touchstart', onMousemove);
        document.body.addEventListener('orientationchange', resizeCanvas);
        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('focus', ()=>{
            if (!ctx.running) {
                ctx.running = true;
                render();
            }
        });
        window.addEventListener('blur', ()=>{
            ctx.running = true;
        });
        resizeCanvas();
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCanvasCursor.useEffect": ()=>{
            // Check if we're in the dashboard by looking for the dashboard-active class
            const isDashboard = document.body.classList.contains('dashboard-active');
            // Don't initialize the canvas cursor if we're in the dashboard
            if (isDashboard) {
                return;
            }
            // We need to wait a bit to ensure the canvas is in the DOM
            const timeout = setTimeout({
                "useCanvasCursor.useEffect.timeout": ()=>{
                    renderCanvas();
                }
            }["useCanvasCursor.useEffect.timeout"], 100);
            return ({
                "useCanvasCursor.useEffect": ()=>{
                    clearTimeout(timeout);
                    if (ctx) {
                        ctx.running = false;
                    }
                    document.removeEventListener('mousemove', onMousemove);
                    document.removeEventListener('touchstart', onMousemove);
                    if (document.body) {
                        document.body.removeEventListener('orientationchange', resizeCanvas);
                    }
                    window.removeEventListener('resize', resizeCanvas);
                    window.removeEventListener('focus', {
                        "useCanvasCursor.useEffect": ()=>{
                            if (!ctx.running) {
                                ctx.running = true;
                                render();
                            }
                        }
                    }["useCanvasCursor.useEffect"]);
                    window.removeEventListener('blur', {
                        "useCanvasCursor.useEffect": ()=>{
                            ctx.running = true;
                        }
                    }["useCanvasCursor.useEffect"]);
                }
            })["useCanvasCursor.useEffect"];
        }
    }["useCanvasCursor.useEffect"], []);
};
_s(useCanvasCursor, "OD7bBpZva5O2jO+Puf00hKivP7c=");
const __TURBOPACK__default__export__ = useCanvasCursor;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ui/canvas-cursor.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$use$2d$canvasCursor$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/hooks/use-canvasCursor/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const CanvasCursor = ()=>{
    _s();
    const [isDashboard, setIsDashboard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CanvasCursor.useEffect": ()=>{
            // Check if we're in the dashboard by looking for the dashboard-active class
            const checkDashboardActive = {
                "CanvasCursor.useEffect.checkDashboardActive": ()=>{
                    const hasDashboardClass = document.body.classList.contains('dashboard-active');
                    setIsDashboard(hasDashboardClass);
                }
            }["CanvasCursor.useEffect.checkDashboardActive"];
            // Check immediately
            checkDashboardActive();
            // Set up a mutation observer to detect when the class is added/removed
            const observer = new MutationObserver(checkDashboardActive);
            observer.observe(document.body, {
                attributes: true,
                attributeFilter: [
                    'class'
                ]
            });
            return ({
                "CanvasCursor.useEffect": ()=>{
                    observer.disconnect();
                }
            })["CanvasCursor.useEffect"];
        }
    }["CanvasCursor.useEffect"], []);
    // Only use the cursor animation when not in dashboard
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$use$2d$canvasCursor$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    // Don't render the canvas at all when in dashboard
    if (isDashboard) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        className: "pointer-events-none fixed inset-0 z-10",
        id: "canvas"
    }, void 0, false, {
        fileName: "[project]/src/app/components/ui/canvas-cursor.js",
        lineNumber: 36,
        columnNumber: 10
    }, this);
};
_s(CanvasCursor, "+2mFrzbZVIN0iaGlP8U21sOi2uM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$hooks$2f$use$2d$canvasCursor$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = CanvasCursor;
const __TURBOPACK__default__export__ = CanvasCursor;
var _c;
__turbopack_context__.k.register(_c, "CanvasCursor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/components/ui/canvas-cursor.js [app-client] (ecmascript, next/dynamic entry)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/components/ui/canvas-cursor.js [app-client] (ecmascript)"));
}}),
}]);

//# sourceMappingURL=src_app_ae188ab0._.js.map