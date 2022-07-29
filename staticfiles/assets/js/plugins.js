/*!
 * 
 *         SimpleBar.js - v2.6.1
 *         Scrollbars, simpler.
 *         https://grsmto.github.io/simplebar/
 *         
 *         Made by Adrien Grsmto from a fork by Jonathan Nicol
 *         Under MIT License
 *       
 */
! function(t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.SimpleBar = e() : t.SimpleBar = e()
}(this, function() {
    return function(t) {
        function e(r) {
            if (n[r]) return n[r].exports;
            var i = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
        }
        var n = {};
        return e.m = t, e.c = n, e.d = function(t, n, r) {
            e.o(t, n) || Object.defineProperty(t, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        }, e.n = function(t) {
            var n = t && t.__esModule ? function() {
                return t.default
            } : function() {
                return t
            };
            return e.d(n, "a", n), n
        }, e.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, e.p = "", e(e.s = 27)
    }([function(t, e, n) {
        var r = n(23)("wks"),
            i = n(12),
            o = n(1).Symbol,
            s = "function" == typeof o;
        (t.exports = function(t) {
            return r[t] || (r[t] = s && o[t] || (s ? o : i)("Symbol." + t))
        }).store = r
    }, function(t, e) {
        var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
        "number" == typeof __g && (__g = n)
    }, function(t, e) {
        var n = {}.hasOwnProperty;
        t.exports = function(t, e) {
            return n.call(t, e)
        }
    }, function(t, e) {
        var n = t.exports = {
            version: "2.5.1"
        };
        "number" == typeof __e && (__e = n)
    }, function(t, e, n) {
        var r = n(5),
            i = n(11);
        t.exports = n(7) ? function(t, e, n) {
            return r.f(t, e, i(1, n))
        } : function(t, e, n) {
            return t[e] = n, t
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(33),
            o = n(34),
            s = Object.defineProperty;
        e.f = n(7) ? Object.defineProperty : function(t, e, n) {
            if (r(t), e = o(e, !0), r(n), i) try {
                return s(t, e, n)
            } catch (t) {}
            if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
            return "value" in n && (t[e] = n.value), t
        }
    }, function(t, e, n) {
        var r = n(10);
        t.exports = function(t) {
            if (!r(t)) throw TypeError(t + " is not an object!");
            return t
        }
    }, function(t, e, n) {
        t.exports = !n(16)(function() {
            return 7 != Object.defineProperty({}, "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e) {
        var n = Math.ceil,
            r = Math.floor;
        t.exports = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? r : n)(t)
        }
    }, function(t, e) {
        t.exports = function(t) {
            if (void 0 == t) throw TypeError("Can't call method on  " + t);
            return t
        }
    }, function(t, e) {
        t.exports = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        }
    }, function(t, e) {
        t.exports = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        }
    }, function(t, e) {
        var n = 0,
            r = Math.random();
        t.exports = function(t) {
            return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + r).toString(36))
        }
    }, function(t, e) {
        t.exports = {}
    }, function(t, e, n) {
        var r = n(23)("keys"),
            i = n(12);
        t.exports = function(t) {
            return r[t] || (r[t] = i(t))
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(3),
            o = n(4),
            s = n(18),
            c = n(19),
            a = function(t, e, n) {
                var u, l, f, h, d = t & a.F,
                    p = t & a.G,
                    v = t & a.S,
                    b = t & a.P,
                    y = t & a.B,
                    m = p ? r : v ? r[e] || (r[e] = {}) : (r[e] || {}).prototype,
                    g = p ? i : i[e] || (i[e] = {}),
                    E = g.prototype || (g.prototype = {});
                p && (n = e);
                for (u in n) l = !d && m && void 0 !== m[u], f = (l ? m : n)[u], h = y && l ? c(f, r) : b && "function" == typeof f ? c(Function.call, f) : f, m && s(m, u, f, t & a.U), g[u] != f && o(g, u, h), b && E[u] != f && (E[u] = f)
            };
        r.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a
    }, function(t, e) {
        t.exports = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        }
    }, function(t, e, n) {
        var r = n(10),
            i = n(1).document,
            o = r(i) && r(i.createElement);
        t.exports = function(t) {
            return o ? i.createElement(t) : {}
        }
    }, function(t, e, n) {
        var r = n(1),
            i = n(4),
            o = n(2),
            s = n(12)("src"),
            c = Function.toString,
            a = ("" + c).split("toString");
        n(3).inspectSource = function(t) {
            return c.call(t)
        }, (t.exports = function(t, e, n, c) {
            var u = "function" == typeof n;
            u && (o(n, "name") || i(n, "name", e)), t[e] !== n && (u && (o(n, s) || i(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === r ? t[e] = n : c ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)))
        })(Function.prototype, "toString", function() {
            return "function" == typeof this && this[s] || c.call(this)
        })
    }, function(t, e, n) {
        var r = n(35);
        t.exports = function(t, e, n) {
            if (r(t), void 0 === e) return t;
            switch (n) {
                case 1:
                    return function(n) {
                        return t.call(e, n)
                    };
                case 2:
                    return function(n, r) {
                        return t.call(e, n, r)
                    };
                case 3:
                    return function(n, r, i) {
                        return t.call(e, n, r, i)
                    }
            }
            return function() {
                return t.apply(e, arguments)
            }
        }
    }, function(t, e, n) {
        var r = n(41),
            i = n(9);
        t.exports = function(t) {
            return r(i(t))
        }
    }, function(t, e) {
        var n = {}.toString;
        t.exports = function(t) {
            return n.call(t).slice(8, -1)
        }
    }, function(t, e, n) {
        var r = n(8),
            i = Math.min;
        t.exports = function(t) {
            return t > 0 ? i(r(t), 9007199254740991) : 0
        }
    }, function(t, e, n) {
        var r = n(1),
            i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
        t.exports = function(t) {
            return i[t] || (i[t] = {})
        }
    }, function(t, e) {
        t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    }, function(t, e, n) {
        var r = n(5).f,
            i = n(2),
            o = n(0)("toStringTag");
        t.exports = function(t, e, n) {
            t && !i(t = n ? t : t.prototype, o) && r(t, o, {
                configurable: !0,
                value: e
            })
        }
    }, function(t, e, n) {
        var r = n(9);
        t.exports = function(t) {
            return Object(r(t))
        }
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        }

        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n];
                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
        }

        function s(t, e, n) {
            return e && o(t.prototype, e), n && o(t, n), t
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0, n(28);
        var c = r(n(53)),
            a = r(n(54)),
            u = r(n(56));
        n(57), Object.assign = n(58);
        var l = function() {
            function t(e, n) {
                i(this, t), this.el = e, this.flashTimeout, this.contentEl, this.scrollContentEl, this.dragOffset = {
                    x: 0,
                    y: 0
                }, this.isVisible = {
                    x: !0,
                    y: !0
                }, this.scrollOffsetAttr = {
                    x: "scrollLeft",
                    y: "scrollTop"
                }, this.sizeAttr = {
                    x: "offsetWidth",
                    y: "offsetHeight"
                }, this.scrollSizeAttr = {
                    x: "scrollWidth",
                    y: "scrollHeight"
                }, this.offsetAttr = {
                    x: "left",
                    y: "top"
                }, this.globalObserver, this.mutationObserver, this.resizeObserver, this.currentAxis, this.isRtl, this.options = Object.assign({}, t.defaultOptions, n), this.classNames = this.options.classNames, this.scrollbarWidth = (0, c.default)(), this.offsetSize = 20, this.flashScrollbar = this.flashScrollbar.bind(this), this.onDragY = this.onDragY.bind(this), this.onDragX = this.onDragX.bind(this), this.onScrollY = this.onScrollY.bind(this), this.onScrollX = this.onScrollX.bind(this), this.drag = this.drag.bind(this), this.onEndDrag = this.onEndDrag.bind(this), this.onMouseEnter = this.onMouseEnter.bind(this), this.recalculate = (0, a.default)(this.recalculate, 100, {
                    leading: !0
                }), this.init()
            }
            return s(t, [{
                key: "init",
                value: function() {
                    this.el.SimpleBar = this, this.initDOM(), this.scrollbarX = this.trackX.querySelector(".".concat(this.classNames.scrollbar)), this.scrollbarY = this.trackY.querySelector(".".concat(this.classNames.scrollbar)), this.isRtl = "rtl" === getComputedStyle(this.contentEl).direction, this.scrollContentEl.style[this.isRtl ? "paddingLeft" : "paddingRight"] = "".concat(this.scrollbarWidth || this.offsetSize, "px"), this.scrollContentEl.style.marginBottom = "-".concat(2 * this.scrollbarWidth || this.offsetSize, "px"), this.contentEl.style.paddingBottom = "".concat(this.scrollbarWidth || this.offsetSize, "px"), 0 !== this.scrollbarWidth && (this.contentEl.style[this.isRtl ? "marginLeft" : "marginRight"] = "-".concat(this.scrollbarWidth, "px")), this.recalculate(), this.initListeners()
                }
            }, {
                key: "initDOM",
                value: function() {
                    var t = this;
                    if (Array.from(this.el.children).filter(function(e) {
                            return e.classList.contains(t.classNames.scrollContent)
                        }).length) this.trackX = this.el.querySelector(".".concat(this.classNames.track, ".horizontal")), this.trackY = this.el.querySelector(".".concat(this.classNames.track, ".vertical")), this.scrollContentEl = this.el.querySelector(".".concat(this.classNames.scrollContent)), this.contentEl = this.el.querySelector(".".concat(this.classNames.content));
                    else {
                        for (this.scrollContentEl = document.createElement("div"), this.contentEl = document.createElement("div"), this.scrollContentEl.classList.add(this.classNames.scrollContent), this.contentEl.classList.add(this.classNames.content); this.el.firstChild;) this.contentEl.appendChild(this.el.firstChild);
                        this.scrollContentEl.appendChild(this.contentEl), this.el.appendChild(this.scrollContentEl)
                    }
                    if (!this.trackX || !this.trackY) {
                        var e = document.createElement("div"),
                            n = document.createElement("div");
                        e.classList.add(this.classNames.track), n.classList.add(this.classNames.scrollbar), e.appendChild(n), this.trackX = e.cloneNode(!0), this.trackX.classList.add("horizontal"), this.trackY = e.cloneNode(!0), this.trackY.classList.add("vertical"), this.el.insertBefore(this.trackX, this.el.firstChild), this.el.insertBefore(this.trackY, this.el.firstChild)
                    }
                    this.el.setAttribute("data-simplebar", "init")
                }
            }, {
                key: "initListeners",
                value: function() {
                    var t = this;
                    this.options.autoHide && this.el.addEventListener("mouseenter", this.onMouseEnter), this.scrollbarY.addEventListener("mousedown", this.onDragY), this.scrollbarX.addEventListener("mousedown", this.onDragX), this.scrollContentEl.addEventListener("scroll", this.onScrollY), this.contentEl.addEventListener("scroll", this.onScrollX), "undefined" != typeof MutationObserver && (this.mutationObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            (t.isChildNode(e.target) || e.addedNodes.length) && t.recalculate()
                        })
                    }), this.mutationObserver.observe(this.el, {
                        attributes: !0,
                        childList: !0,
                        characterData: !0,
                        subtree: !0
                    })), this.resizeObserver = new u.default(this.recalculate.bind(this)), this.resizeObserver.observe(this.el)
                }
            }, {
                key: "removeListeners",
                value: function() {
                    this.options.autoHide && this.el.removeEventListener("mouseenter", this.onMouseEnter), this.scrollbarX.removeEventListener("mousedown", this.onDragX), this.scrollbarY.removeEventListener("mousedown", this.onDragY), this.scrollContentEl.removeEventListener("scroll", this.onScrollY), this.contentEl.removeEventListener("scroll", this.onScrollX), this.mutationObserver.disconnect(), this.resizeObserver.disconnect()
                }
            }, {
                key: "onDragX",
                value: function(t) {
                    this.onDrag(t, "x")
                }
            }, {
                key: "onDragY",
                value: function(t) {
                    this.onDrag(t, "y")
                }
            }, {
                key: "onDrag",
                value: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "y";
                    t.preventDefault();
                    var n = "y" === e ? this.scrollbarY : this.scrollbarX,
                        r = "y" === e ? t.pageY : t.pageX;
                    this.dragOffset[e] = r - n.getBoundingClientRect()[this.offsetAttr[e]], this.currentAxis = e, document.addEventListener("mousemove", this.drag), document.addEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "drag",
                value: function(t) {
                    var e, n, r;
                    t.preventDefault(), "y" === this.currentAxis ? (e = t.pageY, n = this.trackY, r = this.scrollContentEl) : (e = t.pageX, n = this.trackX, r = this.contentEl);
                    var i = e - n.getBoundingClientRect()[this.offsetAttr[this.currentAxis]] - this.dragOffset[this.currentAxis],
                        o = i / n[this.sizeAttr[this.currentAxis]],
                        s = o * this.contentEl[this.scrollSizeAttr[this.currentAxis]];
                    r[this.scrollOffsetAttr[this.currentAxis]] = s
                }
            }, {
                key: "onEndDrag",
                value: function() {
                    document.removeEventListener("mousemove", this.drag), document.removeEventListener("mouseup", this.onEndDrag)
                }
            }, {
                key: "resizeScrollbar",
                value: function() {
                    var t, e, n, r, i, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    "x" === o ? (t = this.trackX, e = this.scrollbarX, n = this.contentEl[this.scrollOffsetAttr[o]], r = this.contentSizeX, i = this.scrollbarXSize) : (t = this.trackY, e = this.scrollbarY, n = this.scrollContentEl[this.scrollOffsetAttr[o]], r = this.contentSizeY, i = this.scrollbarYSize);
                    var s = i / r,
                        c = n / (r - i),
                        a = Math.max(~~(s * i), this.options.scrollbarMinSize),
                        u = ~~((i - a) * c);
                    this.isVisible[o] = i < r, this.isVisible[o] || this.options.forceVisible ? (t.style.visibility = "visible", this.options.forceVisible ? e.style.visibility = "hidden" : e.style.visibility = "visible", "x" === o ? (e.style.left = "".concat(u, "px"), e.style.width = "".concat(a, "px")) : (e.style.top = "".concat(u, "px"), e.style.height = "".concat(a, "px"))) : t.style.visibility = "hidden"
                }
            }, {
                key: "onScrollX",
                value: function() {
                    this.flashScrollbar("x")
                }
            }, {
                key: "onScrollY",
                value: function() {
                    this.flashScrollbar("y")
                }
            }, {
                key: "onMouseEnter",
                value: function() {
                    this.flashScrollbar("x"), this.flashScrollbar("y")
                }
            }, {
                key: "flashScrollbar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.resizeScrollbar(t), this.showScrollbar(t)
                }
            }, {
                key: "showScrollbar",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y";
                    this.isVisible[t] && ("x" === t ? this.scrollbarX.classList.add("visible") : this.scrollbarY.classList.add("visible"), this.options.autoHide && ("number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout), this.flashTimeout = window.setTimeout(this.hideScrollbar.bind(this), 1e3)))
                }
            }, {
                key: "hideScrollbar",
                value: function() {
                    this.scrollbarX.classList.remove("visible"), this.scrollbarY.classList.remove("visible"), "number" == typeof this.flashTimeout && window.clearTimeout(this.flashTimeout)
                }
            }, {
                key: "recalculate",
                value: function() {
                    this.contentSizeX = this.contentEl[this.scrollSizeAttr.x], this.contentSizeY = this.contentEl[this.scrollSizeAttr.y] - (this.scrollbarWidth || this.offsetSize), this.scrollbarXSize = this.trackX[this.sizeAttr.x], this.scrollbarYSize = this.trackY[this.sizeAttr.y], this.resizeScrollbar("x"), this.resizeScrollbar("y"), this.options.autoHide || (this.showScrollbar("x"), this.showScrollbar("y"))
                }
            }, {
                key: "getScrollElement",
                value: function() {
                    return "y" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "y") ? this.scrollContentEl : this.contentEl
                }
            }, {
                key: "getContentElement",
                value: function() {
                    return this.contentEl
                }
            }, {
                key: "unMount",
                value: function() {
                    this.removeListeners(), this.el.SimpleBar = null
                }
            }, {
                key: "isChildNode",
                value: function(t) {
                    return null !== t && (t === this.el || this.isChildNode(t.parentNode))
                }
            }], [{
                key: "initHtmlApi",
                value: function() {
                    this.initDOMLoadedElements = this.initDOMLoadedElements.bind(this), "undefined" != typeof MutationObserver && (this.globalObserver = new MutationObserver(function(e) {
                        e.forEach(function(e) {
                            Array.from(e.addedNodes).forEach(function(e) {
                                1 === e.nodeType && (e.hasAttribute("data-simplebar") ? !e.SimpleBar && new t(e, t.getElOptions(e)) : Array.from(e.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                                    !e.SimpleBar && new t(e, t.getElOptions(e))
                                }))
                            }), Array.from(e.removedNodes).forEach(function(t) {
                                1 === t.nodeType && (t.hasAttribute("data-simplebar") ? t.SimpleBar && t.SimpleBar.unMount() : Array.from(t.querySelectorAll("[data-simplebar]")).forEach(function(t) {
                                    t.SimpleBar && t.SimpleBar.unMount()
                                }))
                            })
                        })
                    }), this.globalObserver.observe(document, {
                        childList: !0,
                        subtree: !0
                    })), "complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? window.setTimeout(this.initDOMLoadedElements.bind(this)) : (document.addEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.addEventListener("load", this.initDOMLoadedElements))
                }
            }, {
                key: "getElOptions",
                value: function(e) {
                    return Object.keys(t.htmlAttributes).reduce(function(n, r) {
                        var i = t.htmlAttributes[r];
                        return e.hasAttribute(i) && (n[r] = JSON.parse(e.getAttribute(i) || !0)), n
                    }, {})
                }
            }, {
                key: "removeObserver",
                value: function() {
                    this.globalObserver.disconnect()
                }
            }, {
                key: "initDOMLoadedElements",
                value: function() {
                    document.removeEventListener("DOMContentLoaded", this.initDOMLoadedElements), window.removeEventListener("load", this.initDOMLoadedElements), Array.from(document.querySelectorAll("[data-simplebar]")).forEach(function(e) {
                        e.SimpleBar || new t(e, t.getElOptions(e))
                    })
                }
            }, {
                key: "defaultOptions",
                get: function() {
                    return {
                        autoHide: !0,
                        forceVisible: !1,
                        classNames: {
                            content: "simplebar-content",
                            scrollContent: "simplebar-scroll-content",
                            scrollbar: "simplebar-scrollbar",
                            track: "simplebar-track"
                        },
                        scrollbarMinSize: 25
                    }
                }
            }, {
                key: "htmlAttributes",
                get: function() {
                    return {
                        autoHide: "data-simplebar-auto-hide",
                        forceVisible: "data-simplebar-force-visible",
                        scrollbarMinSize: "data-simplebar-scrollbar-min-size"
                    }
                }
            }]), t
        }();
        e.default = l, l.initHtmlApi()
    }, function(t, e, n) {
        n(29), n(46), t.exports = n(3).Array.from
    }, function(t, e, n) {
        "use strict";
        var r = n(30)(!0);
        n(31)(String, "String", function(t) {
            this._t = String(t), this._i = 0
        }, function() {
            var t, e = this._t,
                n = this._i;
            return n >= e.length ? {
                value: void 0,
                done: !0
            } : (t = r(e, n), this._i += t.length, {
                value: t,
                done: !1
            })
        })
    }, function(t, e, n) {
        var r = n(8),
            i = n(9);
        t.exports = function(t) {
            return function(e, n) {
                var o, s, c = String(i(e)),
                    a = r(n),
                    u = c.length;
                return a < 0 || a >= u ? t ? "" : void 0 : (o = c.charCodeAt(a), o < 55296 || o > 56319 || a + 1 === u || (s = c.charCodeAt(a + 1)) < 56320 || s > 57343 ? t ? c.charAt(a) : o : t ? c.slice(a, a + 2) : s - 56320 + (o - 55296 << 10) + 65536)
            }
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(32),
            i = n(15),
            o = n(18),
            s = n(4),
            c = n(2),
            a = n(13),
            u = n(36),
            l = n(25),
            f = n(45),
            h = n(0)("iterator"),
            d = !([].keys && "next" in [].keys()),
            p = function() {
                return this
            };
        t.exports = function(t, e, n, v, b, y, m) {
            u(n, e, v);
            var g, E, O, _ = function(t) {
                    if (!d && t in A) return A[t];
                    switch (t) {
                        case "keys":
                        case "values":
                            return function() {
                                return new n(this, t)
                            }
                    }
                    return function() {
                        return new n(this, t)
                    }
                },
                x = e + " Iterator",
                w = "values" == b,
                S = !1,
                A = t.prototype,
                k = A[h] || A["@@iterator"] || b && A[b],
                j = k || _(b),
                M = b ? w ? _("entries") : j : void 0,
                L = "Array" == e ? A.entries || k : k;
            if (L && (O = f(L.call(new t))) !== Object.prototype && O.next && (l(O, x, !0), r || c(O, h) || s(O, h, p)), w && k && "values" !== k.name && (S = !0, j = function() {
                    return k.call(this)
                }), r && !m || !d && !S && A[h] || s(A, h, j), a[e] = j, a[x] = p, b)
                if (g = {
                        values: w ? j : _("values"),
                        keys: y ? j : _("keys"),
                        entries: M
                    }, m)
                    for (E in g) E in A || o(A, E, g[E]);
                else i(i.P + i.F * (d || S), e, g);
            return g
        }
    }, function(t, e) {
        t.exports = !1
    }, function(t, e, n) {
        t.exports = !n(7) && !n(16)(function() {
            return 7 != Object.defineProperty(n(17)("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })
    }, function(t, e, n) {
        var r = n(10);
        t.exports = function(t, e) {
            if (!r(t)) return t;
            var n, i;
            if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
            if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
            throw TypeError("Can't convert object to primitive value")
        }
    }, function(t, e) {
        t.exports = function(t) {
            if ("function" != typeof t) throw TypeError(t + " is not a function!");
            return t
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(37),
            i = n(11),
            o = n(25),
            s = {};
        n(4)(s, n(0)("iterator"), function() {
            return this
        }), t.exports = function(t, e, n) {
            t.prototype = r(s, {
                next: i(1, n)
            }), o(t, e + " Iterator")
        }
    }, function(t, e, n) {
        var r = n(6),
            i = n(38),
            o = n(24),
            s = n(14)("IE_PROTO"),
            c = function() {},
            a = function() {
                var t, e = n(17)("iframe"),
                    r = o.length;
                for (e.style.display = "none", n(44).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; r--;) delete a.prototype[o[r]];
                return a()
            };
        t.exports = Object.create || function(t, e) {
            var n;
            return null !== t ? (c.prototype = r(t), n = new c, c.prototype = null, n[s] = t) : n = a(), void 0 === e ? n : i(n, e)
        }
    }, function(t, e, n) {
        var r = n(5),
            i = n(6),
            o = n(39);
        t.exports = n(7) ? Object.defineProperties : function(t, e) {
            i(t);
            for (var n, s = o(e), c = s.length, a = 0; c > a;) r.f(t, n = s[a++], e[n]);
            return t
        }
    }, function(t, e, n) {
        var r = n(40),
            i = n(24);
        t.exports = Object.keys || function(t) {
            return r(t, i)
        }
    }, function(t, e, n) {
        var r = n(2),
            i = n(20),
            o = n(42)(!1),
            s = n(14)("IE_PROTO");
        t.exports = function(t, e) {
            var n, c = i(t),
                a = 0,
                u = [];
            for (n in c) n != s && r(c, n) && u.push(n);
            for (; e.length > a;) r(c, n = e[a++]) && (~o(u, n) || u.push(n));
            return u
        }
    }, function(t, e, n) {
        var r = n(21);
        t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
            return "String" == r(t) ? t.split("") : Object(t)
        }
    }, function(t, e, n) {
        var r = n(20),
            i = n(22),
            o = n(43);
        t.exports = function(t) {
            return function(e, n, s) {
                var c, a = r(e),
                    u = i(a.length),
                    l = o(s, u);
                if (t && n != n) {
                    for (; u > l;)
                        if ((c = a[l++]) != c) return !0
                } else
                    for (; u > l; l++)
                        if ((t || l in a) && a[l] === n) return t || l || 0;
                return !t && -1
            }
        }
    }, function(t, e, n) {
        var r = n(8),
            i = Math.max,
            o = Math.min;
        t.exports = function(t, e) {
            return t = r(t), t < 0 ? i(t + e, 0) : o(t, e)
        }
    }, function(t, e, n) {
        var r = n(1).document;
        t.exports = r && r.documentElement
    }, function(t, e, n) {
        var r = n(2),
            i = n(26),
            o = n(14)("IE_PROTO"),
            s = Object.prototype;
        t.exports = Object.getPrototypeOf || function(t) {
            return t = i(t), r(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(19),
            i = n(15),
            o = n(26),
            s = n(47),
            c = n(48),
            a = n(22),
            u = n(49),
            l = n(50);
        i(i.S + i.F * !n(52)(function(t) {
            Array.from(t)
        }), "Array", {
            from: function(t) {
                var e, n, i, f, h = o(t),
                    d = "function" == typeof this ? this : Array,
                    p = arguments.length,
                    v = p > 1 ? arguments[1] : void 0,
                    b = void 0 !== v,
                    y = 0,
                    m = l(h);
                if (b && (v = r(v, p > 2 ? arguments[2] : void 0, 2)), void 0 == m || d == Array && c(m))
                    for (e = a(h.length), n = new d(e); e > y; y++) u(n, y, b ? v(h[y], y) : h[y]);
                else
                    for (f = m.call(h), n = new d; !(i = f.next()).done; y++) u(n, y, b ? s(f, v, [i.value, y], !0) : i.value);
                return n.length = y, n
            }
        })
    }, function(t, e, n) {
        var r = n(6);
        t.exports = function(t, e, n, i) {
            try {
                return i ? e(r(n)[0], n[1]) : e(n)
            } catch (e) {
                var o = t.return;
                throw void 0 !== o && r(o.call(t)), e
            }
        }
    }, function(t, e, n) {
        var r = n(13),
            i = n(0)("iterator"),
            o = Array.prototype;
        t.exports = function(t) {
            return void 0 !== t && (r.Array === t || o[i] === t)
        }
    }, function(t, e, n) {
        "use strict";
        var r = n(5),
            i = n(11);
        t.exports = function(t, e, n) {
            e in t ? r.f(t, e, i(0, n)) : t[e] = n
        }
    }, function(t, e, n) {
        var r = n(51),
            i = n(0)("iterator"),
            o = n(13);
        t.exports = n(3).getIteratorMethod = function(t) {
            if (void 0 != t) return t[i] || t["@@iterator"] || o[r(t)]
        }
    }, function(t, e, n) {
        var r = n(21),
            i = n(0)("toStringTag"),
            o = "Arguments" == r(function() {
                return arguments
            }()),
            s = function(t, e) {
                try {
                    return t[e]
                } catch (t) {}
            };
        t.exports = function(t) {
            var e, n, c;
            return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = s(e = Object(t), i)) ? n : o ? r(e) : "Object" == (c = r(e)) && "function" == typeof e.callee ? "Arguments" : c
        }
    }, function(t, e, n) {
        var r = n(0)("iterator"),
            i = !1;
        try {
            var o = [7][r]();
            o.return = function() {
                i = !0
            }, Array.from(o, function() {
                throw 2
            })
        } catch (t) {}
        t.exports = function(t, e) {
            if (!e && !i) return !1;
            var n = !1;
            try {
                var o = [7],
                    s = o[r]();
                s.next = function() {
                    return {
                        done: n = !0
                    }
                }, o[r] = function() {
                    return s
                }, t(o)
            } catch (t) {}
            return n
        }
    }, function(t, e, n) {
        var r, i, o; /*! scrollbarWidth.js v0.1.3 | felixexter | MIT | https://github.com/felixexter/scrollbarWidth */
        ! function(n, s) {
            i = [], r = s, void 0 !== (o = "function" == typeof r ? r.apply(e, i) : r) && (t.exports = o)
        }(0, function() {
            "use strict";

            function t() {
                if ("undefined" == typeof document) return 0;
                var t, e = document.body,
                    n = document.createElement("div"),
                    r = n.style;
                return r.position = "absolute", r.top = r.left = "-9999px", r.width = r.height = "100px", r.overflow = "scroll", e.appendChild(n), t = n.offsetWidth - n.clientWidth, e.removeChild(n), t
            }
            return t
        })
    }, function(t, e, n) {
        (function(e) {
            function n(t, e, n) {
                function i(e) {
                    var n = v,
                        r = b;
                    return v = b = void 0, w = e, m = t.apply(r, n)
                }

                function o(t) {
                    return w = t, g = setTimeout(l, e), S ? i(t) : m
                }

                function a(t) {
                    var n = t - x,
                        r = t - w,
                        i = e - n;
                    return A ? O(i, y - r) : i
                }

                function u(t) {
                    var n = t - x,
                        r = t - w;
                    return void 0 === x || n >= e || n < 0 || A && r >= y
                }

                function l() {
                    var t = _();
                    if (u(t)) return f(t);
                    g = setTimeout(l, a(t))
                }

                function f(t) {
                    return g = void 0, k && v ? i(t) : (v = b = void 0, m)
                }

                function h() {
                    void 0 !== g && clearTimeout(g), w = 0, v = x = b = g = void 0
                }

                function d() {
                    return void 0 === g ? m : f(_())
                }

                function p() {
                    var t = _(),
                        n = u(t);
                    if (v = arguments, b = this, x = t, n) {
                        if (void 0 === g) return o(x);
                        if (A) return g = setTimeout(l, e), i(x)
                    }
                    return void 0 === g && (g = setTimeout(l, e)), m
                }
                var v, b, y, m, g, x, w = 0,
                    S = !1,
                    A = !1,
                    k = !0;
                if ("function" != typeof t) throw new TypeError(c);
                return e = s(e) || 0, r(n) && (S = !!n.leading, A = "maxWait" in n, y = A ? E(s(n.maxWait) || 0, e) : y, k = "trailing" in n ? !!n.trailing : k), p.cancel = h, p.flush = d, p
            }

            function r(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }

            function i(t) {
                return !!t && "object" == typeof t
            }

            function o(t) {
                return "symbol" == typeof t || i(t) && g.call(t) == u
            }

            function s(t) {
                if ("number" == typeof t) return t;
                if (o(t)) return a;
                if (r(t)) {
                    var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                    t = r(e) ? e + "" : e
                }
                if ("string" != typeof t) return 0 === t ? t : +t;
                t = t.replace(l, "");
                var n = h.test(t);
                return n || d.test(t) ? p(t.slice(2), n ? 2 : 8) : f.test(t) ? a : +t
            }
            var c = "Expected a function",
                a = NaN,
                u = "[object Symbol]",
                l = /^\s+|\s+$/g,
                f = /^[-+]0x[0-9a-f]+$/i,
                h = /^0b[01]+$/i,
                d = /^0o[0-7]+$/i,
                p = parseInt,
                v = "object" == typeof e && e && e.Object === Object && e,
                b = "object" == typeof self && self && self.Object === Object && self,
                y = v || b || Function("return this")(),
                m = Object.prototype,
                g = m.toString,
                E = Math.max,
                O = Math.min,
                _ = function() {
                    return y.Date.now()
                };
            t.exports = n
        }).call(e, n(55))
    }, function(t, e) {
        var n;
        n = function() {
            return this
        }();
        try {
            n = n || Function("return this")() || (0, eval)("this")
        } catch (t) {
            "object" == typeof window && (n = window)
        }
        t.exports = n
    }, function(t, e, n) {
        "use strict";

        function r(t) {
            return parseFloat(t) || 0
        }

        function i(t) {
            return Array.prototype.slice.call(arguments, 1).reduce(function(e, n) {
                return e + r(t["border-" + n + "-width"])
            }, 0)
        }

        function o(t) {
            for (var e = ["top", "right", "bottom", "left"], n = {}, i = 0, o = e; i < o.length; i += 1) {
                var s = o[i],
                    c = t["padding-" + s];
                n[s] = r(c)
            }
            return n
        }

        function s(t) {
            var e = t.getBBox();
            return f(0, 0, e.width, e.height)
        }

        function c(t) {
            var e = t.clientWidth,
                n = t.clientHeight;
            if (!e && !n) return _;
            var s = getComputedStyle(t),
                c = o(s),
                u = c.left + c.right,
                l = c.top + c.bottom,
                h = r(s.width),
                d = r(s.height);
            if ("border-box" === s.boxSizing && (Math.round(h + u) !== e && (h -= i(s, "left", "right") + u), Math.round(d + l) !== n && (d -= i(s, "top", "bottom") + l)), !a(t)) {
                var p = Math.round(h + u) - e,
                    v = Math.round(d + l) - n;
                1 !== Math.abs(p) && (h -= p), 1 !== Math.abs(v) && (d -= v)
            }
            return f(c.left, c.top, h, d)
        }

        function a(t) {
            return t === document.documentElement
        }

        function u(t) {
            return d ? x(t) ? s(t) : c(t) : _
        }

        function l(t) {
            var e = t.x,
                n = t.y,
                r = t.width,
                i = t.height,
                o = "undefined" != typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                s = Object.create(o.prototype);
            return O(s, {
                x: e,
                y: n,
                width: r,
                height: i,
                top: n,
                right: e + r,
                bottom: i + n,
                left: e
            }), s
        }

        function f(t, e, n, r) {
            return {
                x: t,
                y: e,
                width: n,
                height: r
            }
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var h = function() {
                function t(t, e) {
                    var n = -1;
                    return t.some(function(t, r) {
                        return t[0] === e && (n = r, !0)
                    }), n
                }
                return "undefined" != typeof Map ? Map : function() {
                    function e() {
                        this.__entries__ = []
                    }
                    var n = {
                        size: {}
                    };
                    return n.size.get = function() {
                        return this.__entries__.length
                    }, e.prototype.get = function(e) {
                        var n = t(this.__entries__, e),
                            r = this.__entries__[n];
                        return r && r[1]
                    }, e.prototype.set = function(e, n) {
                        var r = t(this.__entries__, e);
                        ~r ? this.__entries__[r][1] = n : this.__entries__.push([e, n])
                    }, e.prototype.delete = function(e) {
                        var n = this.__entries__,
                            r = t(n, e);
                        ~r && n.splice(r, 1)
                    }, e.prototype.has = function(e) {
                        return !!~t(this.__entries__, e)
                    }, e.prototype.clear = function() {
                        this.__entries__.splice(0)
                    }, e.prototype.forEach = function(t, e) {
                        void 0 === e && (e = null);
                        for (var n = 0, r = this.__entries__; n < r.length; n += 1) {
                            var i = r[n];
                            t.call(e, i[1], i[0])
                        }
                    }, Object.defineProperties(e.prototype, n), e
                }()
            }(),
            d = "undefined" != typeof window && "undefined" != typeof document && window.document === document,
            p = function() {
                return "function" == typeof requestAnimationFrame ? requestAnimationFrame : function(t) {
                    return setTimeout(function() {
                        return t(Date.now())
                    }, 1e3 / 60)
                }
            }(),
            v = 2,
            b = function(t, e) {
                function n() {
                    o && (o = !1, t()), s && i()
                }

                function r() {
                    p(n)
                }

                function i() {
                    var t = Date.now();
                    if (o) {
                        if (t - c < v) return;
                        s = !0
                    } else o = !0, s = !1, setTimeout(r, e);
                    c = t
                }
                var o = !1,
                    s = !1,
                    c = 0;
                return i
            },
            y = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
            m = "undefined" != typeof navigator && /Trident\/.*rv:11/.test(navigator.userAgent),
            g = "undefined" != typeof MutationObserver && !m,
            E = function() {
                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = b(this.refresh.bind(this), 20)
            };
        E.prototype.addObserver = function(t) {
            ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_()
        }, E.prototype.removeObserver = function(t) {
            var e = this.observers_,
                n = e.indexOf(t);
            ~n && e.splice(n, 1), !e.length && this.connected_ && this.disconnect_()
        }, E.prototype.refresh = function() {
            this.updateObservers_() && this.refresh()
        }, E.prototype.updateObservers_ = function() {
            var t = this.observers_.filter(function(t) {
                return t.gatherActive(), t.hasActive()
            });
            return t.forEach(function(t) {
                return t.broadcastActive()
            }), t.length > 0
        }, E.prototype.connect_ = function() {
            d && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), g ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0
            })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
        }, E.prototype.disconnect_ = function() {
            d && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
        }, E.prototype.onTransitionEnd_ = function(t) {
            var e = t.propertyName;
            y.some(function(t) {
                return !!~e.indexOf(t)
            }) && this.refresh()
        }, E.getInstance = function() {
            return this.instance_ || (this.instance_ = new E), this.instance_
        }, E.instance_ = null;
        var O = function(t, e) {
                for (var n = 0, r = Object.keys(e); n < r.length; n += 1) {
                    var i = r[n];
                    Object.defineProperty(t, i, {
                        value: e[i],
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    })
                }
                return t
            },
            _ = f(0, 0, 0, 0),
            x = function() {
                return "undefined" != typeof SVGGraphicsElement ? function(t) {
                    return t instanceof SVGGraphicsElement
                } : function(t) {
                    return t instanceof SVGElement && "function" == typeof t.getBBox
                }
            }(),
            w = function(t) {
                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = f(0, 0, 0, 0), this.target = t
            };
        w.prototype.isActive = function() {
            var t = u(this.target);
            return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        }, w.prototype.broadcastRect = function() {
            var t = this.contentRect_;
            return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t
        };
        var S = function(t, e) {
                var n = l(e);
                O(this, {
                    target: t,
                    contentRect: n
                })
            },
            A = function(t, e, n) {
                if ("function" != typeof t) throw new TypeError("The callback provided as parameter 1 is not a function.");
                this.activeObservations_ = [], this.observations_ = new h, this.callback_ = t, this.controller_ = e, this.callbackCtx_ = n
            };
        A.prototype.observe = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) || (e.set(t, new w(t)), this.controller_.addObserver(this), this.controller_.refresh())
            }
        }, A.prototype.unobserve = function(t) {
            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
            if ("undefined" != typeof Element && Element instanceof Object) {
                if (!(t instanceof Element)) throw new TypeError('parameter 1 is not of type "Element".');
                var e = this.observations_;
                e.has(t) && (e.delete(t), e.size || this.controller_.removeObserver(this))
            }
        }, A.prototype.disconnect = function() {
            this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
        }, A.prototype.gatherActive = function() {
            var t = this;
            this.clearActive(), this.observations_.forEach(function(e) {
                e.isActive() && t.activeObservations_.push(e)
            })
        }, A.prototype.broadcastActive = function() {
            if (this.hasActive()) {
                var t = this.callbackCtx_,
                    e = this.activeObservations_.map(function(t) {
                        return new S(t.target, t.broadcastRect())
                    });
                this.callback_.call(t, e, t), this.clearActive()
            }
        }, A.prototype.clearActive = function() {
            this.activeObservations_.splice(0)
        }, A.prototype.hasActive = function() {
            return this.activeObservations_.length > 0
        };
        var k = "undefined" != typeof WeakMap ? new WeakMap : new h,
            j = function(t) {
                if (!(this instanceof j)) throw new TypeError("Cannot call a class as a function");
                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                var e = E.getInstance(),
                    n = new A(t, e, this);
                k.set(this, n)
            };
        ["observe", "unobserve", "disconnect"].forEach(function(t) {
            j.prototype[t] = function() {
                return (e = k.get(this))[t].apply(e, arguments);
                var e
            }
        });
        var M = function() {
            return "undefined" != typeof ResizeObserver ? ResizeObserver : j
        }();
        e.default = M
    }, function(t, e) {}, function(t, e, n) {
        "use strict";

        function r(t) {
            if (null === t || void 0 === t) throw new TypeError("Object.assign cannot be called with null or undefined");
            return Object(t)
        }
        /*
        object-assign
        (c) Sindre Sorhus
        @license MIT
        */
        var i = Object.getOwnPropertySymbols,
            o = Object.prototype.hasOwnProperty,
            s = Object.prototype.propertyIsEnumerable;
        t.exports = function() {
            try {
                if (!Object.assign) return !1;
                var t = new String("abc");
                if (t[5] = "de", "5" === Object.getOwnPropertyNames(t)[0]) return !1;
                for (var e = {}, n = 0; n < 10; n++) e["_" + String.fromCharCode(n)] = n;
                if ("0123456789" !== Object.getOwnPropertyNames(e).map(function(t) {
                        return e[t]
                    }).join("")) return !1;
                var r = {};
                return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                    r[t] = t
                }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
            } catch (t) {
                return !1
            }
        }() ? Object.assign : function(t, e) {
            for (var n, c, a = r(t), u = 1; u < arguments.length; u++) {
                n = Object(arguments[u]);
                for (var l in n) o.call(n, l) && (a[l] = n[l]);
                if (i) {
                    c = i(n);
                    for (var f = 0; f < c.length; f++) s.call(n, c[f]) && (a[c[f]] = n[c[f]])
                }
            }
            return a
        }
    }]).default
});



/*----------------------------
* jQuery meanMenu v2.0.8
------------------------------*/
! function($) {
    "use strict";
    $.fn.meanmenu = function(e) {
        var n = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = $.extend(n, e);
        var a = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var n = e.meanMenuTarget,
                t = e.meanMenuContainer,
                r = e.meanMenuClose,
                i = e.meanMenuCloseSize,
                s = e.meanMenuOpen,
                u = e.meanRevealPosition,
                m = e.meanRevealPositionDistance,
                l = e.meanRevealColour,
                o = e.meanScreenWidth,
                c = e.meanNavPush,
                v = ".meanmenu-reveal",
                h = e.meanShowChildren,
                d = e.meanExpandableChildren,
                y = e.meanExpand,
                j = e.meanContract,
                Q = e.meanRemoveAttrs,
                f = e.onePage,
                g = e.meanDisplay,
                p = e.removeElements,
                C = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (C = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var w = "",
                x = function() {
                    if ("center" === u) {
                        var e = window.innerWidth || document.documentElement.clientWidth,
                            n = e / 2 - 22 + "px";
                        w = "left:" + n + ";right:auto;", C ? jQuery(".meanmenu-reveal").animate({
                            left: n
                        }) : jQuery(".meanmenu-reveal").css("left", n)
                    }
                },
                A = !1,
                E = !1;
            "right" === u && (w = "right:" + m + ";left:auto;"), "left" === u && (w = "left:" + m + ";right:auto;"), x();
            var M = "",
                P = function() {
                    M.html(jQuery(M).is(".meanmenu-reveal.meanclose") ? r : s)
                },
                W = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(t).removeClass("mean-container"), jQuery(n).css("display", g), A = !1, E = !1, jQuery(p).removeClass("mean-remove")
                },
                b = function() {
                    var e = "background:" + l + ";color:" + l + ";" + w;
                    if (o >= a) {
                        jQuery(p).addClass("mean-remove"), E = !0, jQuery(t).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(n).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(n).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(n).hide(), jQuery(".meanmenu-reveal").show(), jQuery(v).html(s), M = jQuery(v), jQuery(".mean-nav ul").hide(), h ? d ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e) {
                            e.preventDefault(), A === !1 ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), A = !0) : (jQuery(".mean-nav ul:first").slideUp(), A = !1), M.toggleClass("meanclose"), P(), jQuery(p).addClass("mean-remove")
                        }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), A = !1, jQuery(M).toggleClass("meanclose").html(s)
                        })
                    } else W()
                };
            C || jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, a > o, W(), o >= a ? (b(), x()) : W()
            }), jQuery(window).resize(function() {
                a = window.innerWidth || document.documentElement.clientWidth, C ? (x(), o >= a ? E === !1 && b() : W()) : (W(), o >= a && (b(), x()))
            }), b()
        })
    }
}(jQuery);


/**
 * afterglowplayer - An easy to integrate HTML5 video player with lightbox support.
 * @link http://afterglowplayer.com
 * 
 * afterglowplayer includes some scripts provided under different licenses by their authors. Please see the project sources via http://afterglowplayer.com in order to learn which projects are included and how you may use them.
 */

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}

function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
}! function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, '.video-js .vjs-audio-button,.video-js .vjs-big-play-button,.video-js .vjs-captions-button,.video-js .vjs-chapters-button,.video-js .vjs-control.vjs-close-button,.video-js .vjs-descriptions-button,.video-js .vjs-fullscreen-control,.video-js .vjs-mouse-display,.video-js .vjs-mute-control,.video-js .vjs-mute-control.vjs-vol-0,.video-js .vjs-mute-control.vjs-vol-1,.video-js .vjs-mute-control.vjs-vol-2,.video-js .vjs-play-control,.video-js .vjs-play-control.vjs-playing,.video-js .vjs-play-progress,.video-js .vjs-subtitles-button,.video-js .vjs-volume-level,.video-js .vjs-volume-menu-button,.video-js .vjs-volume-menu-button.vjs-vol-0,.video-js .vjs-volume-menu-button.vjs-vol-1,.video-js .vjs-volume-menu-button.vjs-vol-2,.video-js.vjs-fullscreen .vjs-fullscreen-control,.vjs-icon-audio,.vjs-icon-audio-description,.vjs-icon-cancel,.vjs-icon-captions,.vjs-icon-chapters,.vjs-icon-circle,.vjs-icon-circle-inner-circle,.vjs-icon-circle-outline,.vjs-icon-cog,.vjs-icon-facebook,.vjs-icon-fullscreen-enter,.vjs-icon-fullscreen-exit,.vjs-icon-gplus,.vjs-icon-hd,.vjs-icon-linkedin,.vjs-icon-pause,.vjs-icon-pinterest,.vjs-icon-play,.vjs-icon-play-circle,.vjs-icon-replay,.vjs-icon-spinner,.vjs-icon-square,.vjs-icon-subtitles,.vjs-icon-tumblr,.vjs-icon-twitter,.vjs-icon-volume-high,.vjs-icon-volume-low,.vjs-icon-volume-mid,.vjs-icon-volume-mute{font-family:VideoJS;font-weight:400;font-style:normal}.video-js,.vjs-no-js{color:#fff;background-color:#000}.video-js .vjs-big-play-button:before,.video-js .vjs-control,.video-js .vjs-control:before,.vjs-menu li,.vjs-no-js{text-align:center}.video-js .vjs-big-play-button:before,.video-js .vjs-control:before,.video-js .vjs-modal-dialog,.vjs-modal-dialog .vjs-modal-dialog-content{position:absolute;top:0;left:0;width:100%;height:100%}@font-face{font-family:VideoJS;src:url(font/VideoJS.eot?#iefix) format("eot")}@font-face{font-family:VideoJS;src:url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAA54AAoAAAAAFmgAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAAA9AAAAD4AAABWUZFeBWNtYXAAAAE0AAAAOgAAAUriMBC2Z2x5ZgAAAXAAAAouAAAPUFvx6AdoZWFkAAALoAAAACsAAAA2DIPpX2hoZWEAAAvMAAAAGAAAACQOogcgaG10eAAAC+QAAAAPAAAAfNkAAABsb2NhAAAL9AAAAEAAAABAMMg06m1heHAAAAw0AAAAHwAAACABMAB5bmFtZQAADFQAAAElAAACCtXH9aBwb3N0AAANfAAAAPwAAAGBZkSN43icY2BkZ2CcwMDKwMFSyPKMgYHhF4RmjmEIZzzHwMDEwMrMgBUEpLmmMDh8ZPwoxw7iLmSHCDOCCADvEAo+AAB4nGNgYGBmgGAZBkYGEHAB8hjBfBYGDSDNBqQZGZgYGD7K/f8PUvCREUTzM0DVAwEjG8OIBwCPdwbVAAB4nI1Xe1CU1xX/zv1eLItLln0JwrIfC7sJGET2hRJ2N1GUoBJE8AESQEEhmBHjaB7UuBMTO4GMaSu7aY3RNlOdRPNqO2pqRmuTaSZtR6JJILUZk00a/4imjpmiecB303O/XUgMJOPufvd+99xzzz33nN855y4HHH7EfrGfIxwHRiANvF/sH71I9BzHszmpW+rGOQOXxXE6YhI4PoMT8zkT4cDFuf1cwMrZJI5cglM0HKVv0MaUFDgIFfg9mJJCG+kbKn1JkqBOVaFOkuhLpARq8fu0Nnc9/zdvfY9PxXW4PdH0C6N+PCejhorxFjAqRjgFRXSINEARbBGsoxcFK7IJmr4OycFJnInL59zIXwxui80fkGRbEHyosMWaATJKUfCskmwJQsAWANkmnIGOhlf514h7U8HNIv3owoHB0WMt0Eb3sx0guLi5pq/8Ny1q6969fKR9X9GBV6dPv6dp04K99SOwtmyPl47ApRa6n4ZpP1yjr5fn7MmYP/vXLUJs715UguklHBaHOZHZmG1N9FAIW2mf0MqWCIdo/8RZ1yGfxKUldDcGIbFA7ICO+vqOMSPTh/ZrSqgHi/bB/O8E8Mnzp+M+acxfpsTShBwej26TiGxBn7m4eEIO+Rueu6Hj+IFBnh88cAEUEQ//nVLx5C7kf+yIR47QEe+eMlhz9SqsGbe3hh2R03NGzoY6O42Kz8l7fB6fAk6LYnTyFo/FYyT6GGyNx2Jx2sdH4rA1Fo/HyCXaFyOp8dhYBCfJb2NIn1ImE6CYNGmgSTb52DawJR6jfXEmDU4xyTEmpgHHOIStoxfjSGdkbsK2w2jbdMQG4sgAstEONgURYCwGHhEhhscioQaAhhCf7McifEQc0l6+mxj9nI+gmSdiQ0Zbm7gZnIO7GSMEXG6UDAVocxAV8GcEXCKg1a02RcTtwANWRGIAyElor6n/+ZU2yOB3+T77Hb1MLqhn4KHVnQBjJnqe9QZSon6Kc5DxAD2vMdPL/BXSmQGwspa67z9wLUjdi9TN7QC7lyyBr9rpt7uXVC1CMpyjKRoXnGPHTuiaPLsNdc2dbAFQLAooPkXEh33FodHl4XpC6sPCIa0ftUIhHSYXVSu5iME+DIXsbZJ51BeidCgajcai43jU9nVzoSn2dPqcFvSoxSzJzgRKAx47WMRxOrIj3Wf0+hndxhJTiOkSEqxar3b3RKM9hY64oxBA64ieURLvCfpkDb8siBdUJ1bgT+urJ5PGfewQrmm5R5+0HmfyIPySD7OYkT0WxRePah8oEiyjlxIP74thVoRTURpmL6QhGuWS+QDjdANXjIM8SQa/1w128ODx0Qp4aLMNg9+JL3joUn8AMxW+aLNiuKjarn4uyyTdXjOzZTsh21uwldUvJoYza+zELALfu3p1L8/3krtyZ0Ag058J3hxHghvbGZn0dHZy6Mim/7Blre4lpHd1c28yVqRViO153F2oIWoXCIKbL4Z0cM1iaQn9mI5KuV2SzEvWXJDMNtkANpMdQoDDhIdD4A/YrP6Aye9ysxyE+uOEAcTDorgvVZJjcua043PnZ/PmdDqcbibZlXOOT8uSo7Kof0YUn9GL+Jo17ficymxiTofC6znUso0DhAxs1Fo+kF+d36vLmgZ8mk5cdGv2mwYj5k3Dm9m3LhJ1aVRNm6HrTbLgYAoWXDhDd/u4PGy5CT+xGMdiaBovewUCF/1BiWNljI9MLn7jeScpg+WyH6mfU62eVDql7hsrmvx1ezp/YldE2LhjbkiDnAn8tGy/MW3IXRMYJduvq9HpmIcKuFt+JCtgdGEGKAcF6UacVwIYbVPGfw/+YuNBS4cx/CUHcnyfc+wRDMtTr72mMSBjT/yn/GKSdeDWQUCH6Xoqq5R10RE60gV6erUL0iCti16d0hZjxut4QI/rEpgSh6WjnJXdBXRg1GKCucGJPtFqM27aD1tOqqKonsQ2KsFSSmEpmvRlsR+TcD9OFwrqXxIclL4sJTnGMSuG8KpkZvKdeVIOKDyWSyPLV16/p1QMPbP8NihwUzr47bdnXtwtjdCvqqpO0H+pOvIl3Pzv46e5CT/tQjklXCXXym1AaWY7bzHLkuDMc7ldKCvgxzLn8wYkJLBhEDyK7MT8bTbwbkxbfp+3mKAGsmTBpabSIEECzMIcQlzOPAMKsxMs7uhsnxPLuofPDTc1hkuq6MX9j16YU7CqegcYHbmWYuvAP6tCS97tgWf7dlQvnl25YPavXLVZvrzQPeHCpZmzzEUVq/xzu5sChnSTPTW7oOYmh69z4zL/gk3b+O6hoa733uviP82vnFcbqWlc9tDmZa23LVzaV1yXURi+JX+28NeBuj3+O8IrQ080Vm1eWB4OKjPmrJu7c1udWynvKF6/vs479lSW9+5gZkn+dKfellNGDPllzeULustz+A0bPvhgw7lkvEUwn/N4Ty7U7nhGsEpFkOfy+kutbOh1JQxhVDJumoW11hnkPThznh6FFlhfT+ra1x9sF56kx5YuDzVY9PQYAYA7iblw4frQ4TPCk2MK/xGU3rlmze62trHz6lsko+v+So/do74PT8KVkpJfOErKcv8znrMGsHTNxoEkWy1mYgDB6XBbPaWsuiS6CryGaL6zCjaXBgvtkuyXBua1wOKnh+k7L9AvPnYWffxK18FcJbuosGf3/Jo7amY+CE1vppzY+UTrva0FXc1i55pKQ/YjVL187N5fCn1kW5uot/1hi+DiZ+5atnJR9E+prvydJ9ZZ5mwOpU5gM4KYysMBQ71UzPuMTl9QQOyUo5nwioeYCPjFklrbK6s6X+ypUZ6rum9+CZYzWRiBJfSP0xzzSmrg7f86g0DKVj/wwFzieD9rRfPGFbeKMl05pn5j9/rsQJJ2iEgRrpohlyBo3f4QK7Kl+EcAYZgAoNVmZWXK704YAa3FwBxgSGUOs5htvGRz4Sgj3yFkSJFBuv/sxu5yk998T8WDJzvv/2RX19HtTUW1S+wpKRKRjJ6zzz/1/OPdFdWGlAKbvzS4PHOtURikg9AGz0LbIB85S/cPOpoXvuue8/iV2H1vPTy3ddvOeZ37HGmO3OmSzVzR+NS53+84dHlFhXPLqtzSO+5ruHM2vXtBdxP87LOzKAD359j/INYIbyPabIi3Cq6Wa+SaGe78diIzu7qcblcAa6/fJRvNopXFJnO+U9KKM5bqH5LM0iQSVmpPCPDu7ZT4Aoubz3709EBTyrTDjyx8MQXgUH1nqm7TWng4TzE4i4AsKskBITXfSyC4Fkl5MxnJDiKSIDSJAsGvd1y+/eNDp2e+A+5d8HeiiunrTkT6TqWLIs+/QRoWr98s0qj8uuzLuS22Ytufg3rdTaHn1m46sfgGKHXt0MGnLaRHdnwN37tvHcWKo2V6lnPxL4UvUQcRdOzmZSQs8X5CH5OxXMXpkATuDz8Et0SH4uyCRR+TjmBDP1GvsVrWEGVzEj33YVQ9jAtIKpqsl/s/0xrocwAAeJxjYGRgYADig3cEzsTz23xl4GZnAIHLRucNkWl2BrA4BwMTiAIAF4IITwB4nGNgZGBgZwCChWASxGZkQAXyABOUANh4nGNnYGBgHyAMADa8ANoAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IHqHicY2BkYGCQZ8hlYGcAASYg5gJCBob/YD4DABbVAaoAeJxdkE1qg0AYhl8Tk9AIoVDaVSmzahcF87PMARLIMoFAl0ZHY1BHdBJIT9AT9AQ9RQ9Qeqy+yteNMzDzfM+88w0K4BY/cNAMB6N2bUaPPBLukybCLvleeAAPj8JD+hfhMV7hC3u4wxs7OO4NzQSZcI/8Ltwnfwi75E/hAR7wJTyk/xYeY49fYQ/PztM+jbTZ7LY6OWdBJdX/pqs6NYWa+zMxa13oKrA6Uoerqi/JwtpYxZXJ1coUVmeZUWVlTjq0/tHacjmdxuL90OR8O0UEDYMNdtiSEpz5XQGqzlm30kzUdAYFFOb8R7NOZk0q2lwAyz1i7oAr1xoXvrOgtYhZx8wY5KRV269JZ5yGpmzPTjQhvY9je6vEElPOuJP3mWKnP5M3V+YAAAB4nG2P2XLCMAxFfYFspGUp3Te+IB9lHJF4cOzUS2n/voaEGR6qB+lKo+WITdhga/a/bRnDBFPMkCBFhhwF5ihxg1sssMQKa9xhg3s84BFPeMYLXvGGd3zgE9tZr/hveXKVkFYoSnoeHJXfRoWOqi54mo9ameNFdrK+dLSyaVf7oJQTlkhXpD3Z5XXhR/rUfQVuKXO91Jps4cLOS6/I5YL3XhodRRsVWZe4NnZOhWnSAWgxhMoEr6SmzZieF43Mk7ZOBdeCVGrp9Eu+54J2xhySplfB5XHwQLXUmT9KH6+kPnQ7ZYuIEzNyfs1DLU1VU4SWZ6LkXGHsD1ZKbMw=) format("woff"),url(data:application/x-font-ttf;charset=utf-8;base64,AAEAAAAKAIAAAwAgT1MvMlGRXgUAAAEoAAAAVmNtYXDiMBC2AAAB/AAAAUpnbHlmW/HoBwAAA4gAAA9QaGVhZAyD6V8AAADQAAAANmhoZWEOogcgAAAArAAAACRobXR42QAAAAAAAYAAAAB8bG9jYTDINOoAAANIAAAAQG1heHABMAB5AAABCAAAACBuYW1l1cf1oAAAEtgAAAIKcG9zdGZEjeMAABTkAAABgQABAAAHAAAAAKEHAAAAAAAHAAABAAAAAAAAAAAAAAAAAAAAHwABAAAAAQAAwdxheF8PPPUACwcAAAAAANMyzzEAAAAA0zLPMQAAAAAHAAcAAAAACAACAAAAAAAAAAEAAAAfAG0ABwAAAAAAAgAAAAoACgAAAP8AAAAAAAAAAQcAAZAABQAIBHEE5gAAAPoEcQTmAAADXABXAc4AAAIABQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUGZFZABA8QHxHgcAAAAAoQcAAAAAAAABAAAAAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAcAAAAHAAAABwAAAAAAAAMAAAADAAAAHAABAAAAAABEAAMAAQAAABwABAAoAAAABgAEAAEAAgAA8R7//wAAAADxAf//AAAPAAABAAAAAAAAAAABBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAFAAZgCyAMYA5gEeAUgBdAGcAfICLgKOAroDCgOOA7AD6gQ4BHwEuAToBQwFogXoBjYGbAbaB3IHqAABAAAAAAWLBYsAAgAAAREBAlUDNgWL++oCCwAAAwAAAAAGawZrAAIADgAaAAAJAhMEAAMSAAUkABMCAAEmACc2ADcWABcGAALrAcD+QJX+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rgIwAVABUAGbCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAAAAAgAAAAAFQAWLAAMABwAAASERKQERIREBwAEr/tUCVQErAXUEFvvqBBYAAAAEAAAAAAYgBiAABgATACQAJwAAAS4BJxUXNjcGBxc+ATUmACcVFhIBBwEhESEBEQEGBxU+ATcXNwEHFwTQAWVVuAO7AidxJSgF/t/lpc77t18BYf6fASsBdQE+TF1OijuZX/1gnJwDgGSeK6W4GBhqW3FGnFT0AWM4mjT+9AHrX/6f/kD+iwH2/sI7HZoSRDGYXwSWnJwAAAEAAAAABKsF1gAFAAABESEBEQECCwEqAXb+igRg/kD+iwSq/osAAAACAAAAAAVmBdYABgAMAAABLgEnET4BAREhAREBBWUBZVRUZfwRASsBdf6LA4Bkniv9piueAUT+QP6LBKr+iwAAAwAAAAAGIAYPAAUADAAaAAATESEBEQEFLgEnET4BAxUWEhcGAgcVNgA3JgDgASsBdf6LAsUBZVVVZbqlzgMDzqXlASEFBf7fBGD+QP6LBKr+i+Bkniv9piueAvOaNP70tbX+9DSaOAFi9fUBYgAAAAQAAAAABYsFiwAFAAsAEQAXAAABIxEhNSMDMzUzNSEBIxUhESMDFTMVMxECC5YBduCWluD+igOA4AF2luDglgLr/oqWAgrglvyAlgF2AqCW4AF2AAQAAAAABYsFiwAFAAsAEQAXAAABMxUzESETIxUhESMBMzUzNSETNSMRITUBdeCW/org4AF2lgHAluD+ipaWAXYCVeABdgHAlgF2++rglgHA4P6KlgAAAAACAAAAAAXWBdYADwATAAABIQ4BBxEeARchPgE3ES4BAyERIQVA/IA/VQEBVT8DgD9VAQFVP/yAA4AF1QFVP/yAP1UBAVU/A4A/VfvsA4AAAAYAAAAABmsGawAHAAwAEwAbACAAKAAACQEmJw4BBwElLgEnAQUhATYSNyYFAQYCBxYXIQUeARcBMwEWFz4BNwECvgFkTlSH8GEBEgOONemh/u4C5f3QAXpcaAEB/BP+3VxoAQEOAjD95DXpoQESeP7dTlSH8GH+7gPwAmgSAQFYUP4nd6X2Pv4nS/1zZAEBk01NAfhk/v+TTUhLpfY+Adn+CBIBAVhQAdkAAAAFAAAAAAZrBdYADwATABcAGwAfAAABIQ4BBxEeARchPgE3ES4BASEVIQEhNSEFITUhNSE1IQXV+1ZAVAICVEAEqkBUAgJU+xYBKv7WAur9FgLqAcD+1gEq/RYC6gXVAVU//IA/VQEBVT8DgD9V/ayV/tWVlZWWlQADAAAAAAYgBdYADwAnAD8AAAEhDgEHER4BFyE+ATcRLgEBIzUjFTM1MxUUBgcjLgEnET4BNzMeARUFIzUjFTM1MxUOAQcjLgE1ETQ2NzMeARcFi/vqP1QCAlQ/BBY/VAICVP1rcJWVcCog4CAqAQEqIOAgKgILcJWVcAEqIOAgKiog4CAqAQXVAVU//IA/VQEBVT8DgD9V/fcl4CVKICoBASogASogKgEBKiBKJeAlSiAqAQEqIAEqICoBASogAAAGAAAAAAYgBPYAAwAHAAsADwATABcAABMzNSMRMzUjETM1IwEhNSERITUhERUhNeCVlZWVlZUBKwQV++sEFfvrBBUDNZb+QJUBwJX+QJb+QJUCVZWVAAAAAQAAAAAGIAZsAC4AAAEiBgcBNjQnAR4BMz4BNy4BJw4BBxQXAS4BIw4BBx4BFzI2NwEGBx4BFz4BNy4BBUArSh797AcHAg8eTixffwICf19ffwIH/fEeTixffwICf18sTh4CFAUBA3tcXHsDA3sCTx8bATcZNhkBNB0gAn9fX38CAn9fGxn+zRwgAn9fX38CIBz+yhcaXHsCAntcXXsAAAIAAAAABlkGawBDAE8AAAE2NCc3PgEnAy4BDwEmLwEuASchDgEPAQYHJyYGBwMGFh8BBhQXBw4BFxMeAT8BFh8BHgEXIT4BPwE2NxcWNjcTNiYnBS4BJz4BNx4BFw4BBasFBZ4KBgeWBxkNujpEHAMUD/7WDxQCHEU5ug0aB5UHBQudBQWdCwUHlQcaDbo5RRwCFA8BKg8UAhxFOboNGgeVBwUL/ThvlAIClG9vlAIClAM3JEokewkaDQEDDAkFSy0cxg4RAQERDsYcLUsFCQz+/QwbCXskSiR7CRoN/v0MCQVLLRzGDhEBAREOxhwtSwUJDAEDDBsJQQKUb2+UAgKUb2+UAAAAAAEAAAAABmsGawALAAATEgAFJAATAgAlBACVCAGmAT0BPQGmCAj+Wv7D/sP+WgOA/sP+WggIAaYBPQE9AaYICP5aAAAAAgAAAAAGawZrAAsAFwAAAQQAAxIABSQAEwIAASYAJzYANxYAFwYAA4D+w/5aCAgBpgE9AT0BpggI/lr+w/3+rgYGAVL9/QFSBgb+rgZrCP5a/sP+w/5aCAgBpgE9AT0BpvrIBgFS/f0BUgYG/q79/f6uAAADAAAAAAZrBmsACwAXACMAAAEEAAMSAAUkABMCAAEmACc2ADcWABcGAAMOAQcuASc+ATceAQOA/sP+WggIAaYBPQE9AaYICP5a/sP9/q4GBgFS/f0BUgYG/q4dAn9fX38CAn9fX38Gawj+Wv7D/sP+WggIAaYBPQE9Aab6yAYBUv39AVIGBv6u/f3+rgJPX38CAn9fX38CAn8AAAAEAAAAAAYgBiAADwAbACUAKQAAASEOAQcRHgEXIT4BNxEuAQEjNSMVIxEzFTM1OwEhHgEXEQ4BByE3MzUjBYv76j9UAgJUPwQWP1QCAlT9a3CVcHCVcJYBKiAqAQEqIP7WcJWVBiACVD/76j9UAgJUPwQWP1T8gpWVAcC7uwEqIP7WICoBcOAAAgAAAAAGawZrAAsAFwAAAQQAAxIABSQAEwIAEwcJAScJATcJARcBA4D+w/5aCAgBpgE9AT0BpggI/lo4af70/vRpAQv+9WkBDAEMaf71BmsI/lr+w/7D/loICAGmAT0BPQGm/BFpAQv+9WkBDAEMaf71AQtp/vQAAQAAAAAF1ga2ABYAAAERCQERHgEXDgEHLgEnIxYAFzYANyYAA4D+iwF1vv0FBf2+vv0FlQYBUf7+AVEGBv6vBYsBKv6L/osBKgT9v779BQX9vv7+rwYGAVH+/gFRAAAAAQAAAAAFPwcAABQAAAERIyIGHQEhAyMRIREjETM1NDYzMgU/nVY8ASUn/v7O///QrZMG9P74SEi9/tj9CQL3ASjaus0AAAAABAAAAAAGjgcAADAARQBgAGwAAAEUHgMVFAcGBCMiJicmNTQ2NzYlLgE1NDcGIyImNTQ2Nz4BMyEHIx4BFRQOAycyNjc2NTQuAiMiBgcGFRQeAxMyPgI1NC4BLwEmLwImIyIOAxUUHgIBMxUjFSM1IzUzNTMDH0BbWkAwSP7qn4TlOSVZSoMBESAfFS4WlMtIP03TcAGiioNKTDFFRjGSJlAaNSI/akAqURkvFCs9WTY6a1s3Dg8THgocJU4QIDVob1M2RnF9A2vV1WnU1GkD5CRFQ1CATlpTenNTYDxHUYouUhIqQCkkMQTBlFKaNkJAWD+MWkhzRztAPiEbOWY6hn1SJyE7ZS5nZ1I0/JcaNF4+GTAkGCMLFx04Ag4kOF07Rms7HQNsbNvbbNkAAwAAAAAGgAZsAAMADgAqAAABESERARYGKwEiJjQ2MhYBESERNCYjIgYHBhURIRIQLwEhFSM+AzMyFgHd/rYBXwFnVAJSZGemZASP/rdRVj9VFQv+twIBAQFJAhQqR2c/q9AEj/whA98BMkliYpNhYfzd/cgCEml3RTMeM/3XAY8B8DAwkCAwOB/jAAABAAAAAAaUBgAAMQAAAQYHFhUUAg4BBCMgJxYzMjcuAScWMzI3LgE9ARYXLgE1NDcWBBcmNTQ2MzIXNjcGBzYGlENfAUyb1v7SrP7x4SMr4bBpph8hHCsqcJNETkJOLHkBW8YIvYaMYG1gJWldBWhiRQ4cgv797rdtkQSKAn1hBQsXsXUEJgMsjlNYS5WzCiYkhr1mFTlzPwoAAAABAAAAAAWABwAAIgAAARcOAQcGLgM1ESM1PgQ3PgE7AREhFSERFB4CNzYFMFAXsFlorXBOIahIckQwFAUBBwT0AU3+sg0gQzBOAc/tIz4BAjhceHg6AiDXGlddb1ctBQf+WPz9+h40NR4BAgABAAAAAAaABoAASgAAARQCBCMiJzY/AR4BMzI+ATU0LgEjIg4DFRQWFxY/ATY3NicmNTQ2MzIWFRQGIyImNz4CNTQmIyIGFRQXAwYXJgI1NBIkIAQSBoDO/p/Rb2s7EzYUaj15vmh34o5ptn9bK1BNHggIBgIGETPRqZepiWs9Sg4IJRc2Mj5WGWMRBM7+zgFhAaIBYc4DgNH+n84gXUfTJzmJ8JZyyH46YH2GQ2ieIAwgHxgGFxQ9WpfZpIOq7lc9I3VZHzJCclVJMf5eRmtbAXzp0QFhzs7+nwAABwAAAAAHAATPAA4AFwAqAD0AUABaAF0AAAERNh4CBw4BBwYmIycmNxY2NzYmBxEUBRY2Nz4BNy4BJyMGHwEeARcOARcWNjc+ATcuAScjBh8BHgEXFAYXFjY3PgE3LgEnIwYfAR4BFw4BBTM/ARUzESMGAyUVJwMchM2UWwgNq4JHrQgBAapUaAoJcWMBfiIhDiMrAQJLMB0BBAokNAIBPmMiIQ4iLAECSzAeAQUKJDQBP2MiIQ4iLAECSzAeAQUKJDQBAT75g+5B4arNLNIBJ44ByQL9BQ9mvYCKwA8FBQMDwwJVTGdzBf6VB8IHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvUwHNR08lld9uT4LCRA/qGNxvVJkAWUDDEf+tYP5AQAAAAEAAAAABiAGtgAbAAABBAADER4BFzMRITU2ADcWABcVIREzPgE3EQIAA4D+4v6FBwJ/X+D+1QYBJ97eAScG/tXgX38CB/6FBrUH/oX+4v32X38CAlWV3gEnBgb+2d6V/asCf18CCgEeAXsAAAAAEADGAAEAAAAAAAEABwAAAAEAAAAAAAIABwAHAAEAAAAAAAMABwAOAAEAAAAAAAQABwAVAAEAAAAAAAUACwAcAAEAAAAAAAYABwAnAAEAAAAAAAoAKwAuAAEAAAAAAAsAEwBZAAMAAQQJAAEADgBsAAMAAQQJAAIADgB6AAMAAQQJAAMADgCIAAMAAQQJAAQADgCWAAMAAQQJAAUAFgCkAAMAAQQJAAYADgC6AAMAAQQJAAoAVgDIAAMAAQQJAAsAJgEeVmlkZW9KU1JlZ3VsYXJWaWRlb0pTVmlkZW9KU1ZlcnNpb24gMS4wVmlkZW9KU0dlbmVyYXRlZCBieSBzdmcydHRmIGZyb20gRm9udGVsbG8gcHJvamVjdC5odHRwOi8vZm9udGVsbG8uY29tAFYAaQBkAGUAbwBKAFMAUgBlAGcAdQBsAGEAcgBWAGkAZABlAG8ASgBTAFYAaQBkAGUAbwBKAFMAVgBlAHIAcwBpAG8AbgAgADEALgAwAFYAaQBkAGUAbwBKAFMARwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABzAHYAZwAyAHQAdABmACAAZgByAG8AbQAgAEYAbwBuAHQAZQBsAGwAbwAgAHAAcgBvAGoAZQBjAHQALgBoAHQAdABwADoALwAvAGYAbwBuAHQAZQBsAGwAbwAuAGMAbwBtAAAAAgAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAABAgEDAQQBBQEGAQcBCAEJAQoBCwEMAQ0BDgEPARABEQESARMBFAEVARYBFwEYARkBGgEbARwBHQEeAR8EcGxheQtwbGF5LWNpcmNsZQVwYXVzZQt2b2x1bWUtbXV0ZQp2b2x1bWUtbG93CnZvbHVtZS1taWQLdm9sdW1lLWhpZ2gQZnVsbHNjcmVlbi1lbnRlcg9mdWxsc2NyZWVuLWV4aXQGc3F1YXJlB3NwaW5uZXIJc3VidGl0bGVzCGNhcHRpb25zCGNoYXB0ZXJzBXNoYXJlA2NvZwZjaXJjbGUOY2lyY2xlLW91dGxpbmUTY2lyY2xlLWlubmVyLWNpcmNsZQJoZAZjYW5jZWwGcmVwbGF5CGZhY2Vib29rBWdwbHVzCGxpbmtlZGluB3R3aXR0ZXIGdHVtYmxyCXBpbnRlcmVzdBFhdWRpby1kZXNjcmlwdGlvbgVhdWRpbwAAAAAA) format("truetype");font-weight:400;font-style:normal}.video-js .vjs-big-play-button:before,.video-js .vjs-play-control:before,.vjs-icon-play:before{content:"\\f101"}.vjs-icon-play-circle:before{content:"\\f102"}.video-js .vjs-play-control.vjs-playing:before,.vjs-icon-pause:before{content:"\\f103"}.video-js .vjs-mute-control.vjs-vol-0:before,.video-js .vjs-volume-menu-button.vjs-vol-0:before,.vjs-icon-volume-mute:before{content:"\\f104"}.video-js .vjs-mute-control.vjs-vol-1:before,.video-js .vjs-volume-menu-button.vjs-vol-1:before,.vjs-icon-volume-low:before{content:"\\f105"}.video-js .vjs-mute-control.vjs-vol-2:before,.video-js .vjs-volume-menu-button.vjs-vol-2:before,.vjs-icon-volume-mid:before{content:"\\f106"}.video-js .vjs-mute-control:before,.video-js .vjs-volume-menu-button:before,.vjs-icon-volume-high:before{content:"\\f107"}.video-js .vjs-fullscreen-control:before,.vjs-icon-fullscreen-enter:before{content:"\\f108"}.video-js.vjs-fullscreen .vjs-fullscreen-control:before,.vjs-icon-fullscreen-exit:before{content:"\\f109"}.vjs-icon-square:before{content:"\\f10a"}.vjs-icon-spinner:before{content:"\\f10b"}.video-js .vjs-subtitles-button:before,.vjs-icon-subtitles:before{content:"\\f10c"}.video-js .vjs-captions-button:before,.vjs-icon-captions:before{content:"\\f10d"}.video-js .vjs-chapters-button:before,.vjs-icon-chapters:before{content:"\\f10e"}.vjs-icon-share{font-family:VideoJS;font-weight:400;font-style:normal}.vjs-icon-share:before{content:"\\f10f"}.vjs-icon-cog:before{content:"\\f110"}.video-js .vjs-mouse-display:before,.video-js .vjs-play-progress:before,.video-js .vjs-volume-level:before,.vjs-icon-circle:before{content:"\\f111"}.vjs-icon-circle-outline:before{content:"\\f112"}.vjs-icon-circle-inner-circle:before{content:"\\f113"}.vjs-icon-hd:before{content:"\\f114"}.video-js .vjs-control.vjs-close-button:before,.vjs-icon-cancel:before{content:"\\f115"}.vjs-icon-replay:before{content:"\\f116"}.vjs-icon-facebook:before{content:"\\f117"}.vjs-icon-gplus:before{content:"\\f118"}.vjs-icon-linkedin:before{content:"\\f119"}.vjs-icon-twitter:before{content:"\\f11a"}.vjs-icon-tumblr:before{content:"\\f11b"}.vjs-icon-pinterest:before{content:"\\f11c"}.video-js .vjs-descriptions-button:before,.vjs-icon-audio-description:before{content:"\\f11d"}.video-js .vjs-audio-button:before,.vjs-icon-audio:before{content:"\\f11e"}.video-js{display:block;vertical-align:top;box-sizing:border-box;position:relative;padding:0;font-size:10px;line-height:1;font-weight:400;font-style:normal;font-family:Arial,Helvetica,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js .vjs-tech,.video-js.vjs-fill{width:100%;height:100%}.video-js *,.video-js :after,.video-js :before{box-sizing:inherit}.video-js ul{font-family:inherit;font-size:inherit;line-height:inherit;list-style-position:outside;margin:0}.vjs-error .vjs-error-display:before,.vjs-menu .vjs-menu-content,.vjs-no-js{font-family:Arial,Helvetica,sans-serif}.video-js.vjs-16-9,.video-js.vjs-4-3,.video-js.vjs-fluid{width:100%;max-width:100%;height:0}.video-js.vjs-16-9{padding-top:56.25%}.video-js.vjs-4-3{padding-top:75%}.video-js .vjs-tech{position:absolute;top:0;left:0}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.vjs-full-window .video-js.vjs-fullscreen{position:fixed;overflow:hidden;z-index:1000;left:0;top:0;bottom:0;right:0}.video-js.vjs-fullscreen{width:100%!important;height:100%!important;padding-top:0!important}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-hidden{display:none!important}.vjs-disabled{opacity:.5;cursor:default}.video-js .vjs-offscreen{height:1px;left:-9999px;position:absolute;top:0;width:1px}.vjs-lock-showing{display:block!important;opacity:1;visibility:visible}.vjs-no-js{padding:20px;font-size:18px;width:300px;height:150px;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#66A8CC}.video-js .vjs-big-play-button{font-size:3em;line-height:1.5em;height:1.5em;width:3em;display:block;position:absolute;top:10px;left:10px;padding:0;cursor:pointer;opacity:1;border:.06666em solid #fff;background-color:#2B333F;background-color:rgba(43,51,63,.7);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-big-play-centered .vjs-big-play-button{top:50%;left:50%;margin-top:-.75em;margin-left:-1.5em}.video-js .vjs-big-play-button:focus,.video-js:hover .vjs-big-play-button{outline:0;border-color:#fff;background-color:#73859f;background-color:rgba(115,133,159,.5);-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}.vjs-controls-disabled .vjs-big-play-button,.vjs-error .vjs-big-play-button,.vjs-has-started .vjs-big-play-button,.vjs-using-native-controls .vjs-big-play-button{display:none}.video-js button{background:0 0;border:none;color:inherit;display:inline-block;overflow:visible;font-size:inherit;line-height:inherit;text-transform:none;text-decoration:none;transition:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.video-js .vjs-control.vjs-close-button{cursor:pointer;height:3em;position:absolute;right:0;top:.5em;z-index:2}.vjs-menu-button{cursor:pointer}.vjs-menu-button.vjs-disabled{cursor:default}.vjs-workinghover .vjs-menu-button.vjs-disabled:hover .vjs-menu{display:none}.vjs-menu .vjs-menu-content{display:block;padding:0;margin:0;overflow:auto}.vjs-scrubbing .vjs-menu-button:hover .vjs-menu{display:none}.vjs-menu li{list-style:none;margin:0;padding:.2em 0;line-height:1.4em;font-size:1.2em;text-transform:lowercase}.vjs-menu li:focus,.vjs-menu li:hover{outline:0;background-color:#73859f;background-color:rgba(115,133,159,.5)}.vjs-menu li.vjs-selected,.vjs-menu li.vjs-selected:focus,.vjs-menu li.vjs-selected:hover{background-color:#fff;color:#2B333F}.vjs-menu li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em;font-weight:700;cursor:default}.vjs-menu-button-popup .vjs-menu{display:none;position:absolute;bottom:0;width:10em;left:-3em;height:0;margin-bottom:1.5em;border-top-color:rgba(43,51,63,.7)}.vjs-menu-button-popup .vjs-menu .vjs-menu-content{background-color:#2B333F;background-color:rgba(43,51,63,.7);position:absolute;width:100%;bottom:1.5em;max-height:15em}.vjs-menu-button-popup .vjs-menu.vjs-lock-showing,.vjs-workinghover .vjs-menu-button-popup:hover .vjs-menu{display:block}.video-js .vjs-menu-button-inline{-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s;overflow:hidden}.video-js .vjs-menu-button-inline:before{width:2.222222222em}.video-js .vjs-menu-button-inline.vjs-slider-active,.video-js .vjs-menu-button-inline:focus,.video-js .vjs-menu-button-inline:hover,.video-js.vjs-no-flex .vjs-menu-button-inline{width:12em}.video-js .vjs-menu-button-inline.vjs-slider-active{-webkit-transition:none;-moz-transition:none;-o-transition:none;transition:none}.vjs-menu-button-inline .vjs-menu{opacity:0;height:100%;width:auto;position:absolute;left:4em;top:0;padding:0;margin:0;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-menu-button-inline:focus .vjs-menu,.vjs-menu-button-inline:hover .vjs-menu{display:block;opacity:1}.vjs-no-flex .vjs-menu-button-inline .vjs-menu{display:block;opacity:1;position:relative;width:auto}.vjs-no-flex .vjs-menu-button-inline.vjs-slider-active .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:focus .vjs-menu,.vjs-no-flex .vjs-menu-button-inline:hover .vjs-menu{width:auto}.vjs-menu-button-inline .vjs-menu-content{width:auto;height:100%;margin:0;overflow:hidden}.video-js .vjs-control-bar{display:none;width:100%;position:absolute;bottom:0;left:0;right:0;height:3em;background-color:#2B333F;background-color:rgba(43,51,63,.7)}.vjs-has-started .vjs-control-bar{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;visibility:visible;opacity:1;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:visible;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-controls-disabled .vjs-control-bar,.vjs-error .vjs-control-bar,.vjs-using-native-controls .vjs-control-bar{display:none!important}.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}.vjs-has-started.vjs-no-flex .vjs-control-bar{display:table}.video-js .vjs-control{outline:0;position:relative;margin:0;padding:0;height:100%;width:4em;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.video-js .vjs-control:before{font-size:1.8em;line-height:1.67}.video-js .vjs-control:focus,.video-js .vjs-control:focus:before,.video-js .vjs-control:hover:before{text-shadow:0 0 1em #fff}.video-js .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-no-flex .vjs-control{display:table-cell;vertical-align:middle}.video-js .vjs-custom-control-spacer{display:none}.video-js .vjs-progress-control{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;min-width:4em}.vjs-live .vjs-progress-control{display:none}.video-js .vjs-progress-holder{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s;height:.3em}.video-js .vjs-progress-control:hover .vjs-progress-holder{font-size:1.666666666666666666em}.video-js .vjs-progress-control:hover .vjs-mouse-display:after,.video-js .vjs-progress-control:hover .vjs-play-progress:after,.video-js .vjs-progress-control:hover .vjs-time-tooltip{font-family:Arial,Helvetica,sans-serif;visibility:visible;font-size:.6em}.video-js .vjs-progress-holder .vjs-load-progress,.video-js .vjs-progress-holder .vjs-load-progress div,.video-js .vjs-progress-holder .vjs-play-progress,.video-js .vjs-progress-holder .vjs-tooltip-progress-bar{position:absolute;display:block;height:.3em;margin:0;padding:0;width:0;left:0;top:0}.video-js .vjs-mouse-display:before,.video-js .vjs-progress-control .vjs-keep-tooltips-inside:after{display:none}.video-js .vjs-play-progress{background-color:#fff}.video-js .vjs-play-progress:before{position:absolute;top:-.333333333333333em;right:-.5em;font-size:.9em}.video-js .vjs-mouse-display:after,.video-js .vjs-play-progress:after,.video-js .vjs-time-tooltip{visibility:hidden;pointer-events:none;position:absolute;top:-3.4em;right:-1.9em;font-size:.9em;color:#000;content:attr(data-current-time);padding:6px 8px 8px;background-color:#fff;background-color:rgba(255,255,255,.8);-webkit-border-radius:.3em;-moz-border-radius:.3em;border-radius:.3em}.video-js .vjs-play-progress:after,.video-js .vjs-play-progress:before,.video-js .vjs-time-tooltip{z-index:1}.video-js .vjs-load-progress{background:#bfc7d3;background:rgba(115,133,159,.5)}.video-js .vjs-load-progress div{background:#fff;background:rgba(115,133,159,.75)}.video-js.vjs-no-flex .vjs-progress-control{width:auto}.video-js .vjs-time-tooltip{display:inline-block;height:2.4em;position:relative;float:right;right:-1.9em}.vjs-tooltip-progress-bar{visibility:hidden}.video-js .vjs-progress-control .vjs-mouse-display{display:none;position:absolute;width:1px;height:100%;background-color:#000;z-index:1}.vjs-no-flex .vjs-progress-control .vjs-mouse-display{z-index:0}.video-js .vjs-progress-control:hover .vjs-mouse-display{display:block}.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display,.video-js.vjs-user-inactive .vjs-progress-control .vjs-mouse-display:after{visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display,.video-js.vjs-user-inactive.vjs-no-flex .vjs-progress-control .vjs-mouse-display:after{display:none}.video-js .vjs-progress-control .vjs-mouse-display:after,.vjs-mouse-display .vjs-time-tooltip{color:#fff;background-color:#000;background-color:rgba(0,0,0,.8)}.video-js .vjs-slider{outline:0;position:relative;cursor:pointer;padding:0;margin:0 .45em;background-color:#73859f;background-color:rgba(115,133,159,.5)}.video-js .vjs-slider:focus{text-shadow:0 0 1em #fff;-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.video-js .vjs-mute-control,.video-js .vjs-volume-menu-button{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.video-js .vjs-volume-control{width:5em;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.video-js .vjs-volume-bar{margin:1.35em .45em}.vjs-volume-bar.vjs-slider-horizontal{width:5em;height:.3em}.vjs-volume-bar.vjs-slider-vertical{width:.3em;height:5em;margin:1.35em auto}.video-js .vjs-volume-level{position:absolute;bottom:0;left:0;background-color:#fff}.video-js .vjs-volume-level:before{position:absolute;font-size:.9em}.vjs-slider-vertical .vjs-volume-level{width:.3em}.vjs-slider-vertical .vjs-volume-level:before{top:-.5em;left:-.3em}.vjs-slider-horizontal .vjs-volume-level{height:.3em}.vjs-slider-horizontal .vjs-volume-level:before{top:-.3em;right:-.5em}.vjs-volume-bar.vjs-slider-vertical .vjs-volume-level{height:100%}.vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{width:100%}.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu{display:block;width:0;height:0;border-top-color:transparent}.vjs-menu-button-popup.vjs-volume-menu-button-vertical .vjs-menu{left:.5em;height:8em}.vjs-menu-button-popup.vjs-volume-menu-button-horizontal .vjs-menu{left:-2em}.vjs-menu-button-popup.vjs-volume-menu-button .vjs-menu-content{height:0;width:0;overflow-x:hidden;overflow-y:hidden}.vjs-volume-menu-button-vertical .vjs-lock-showing .vjs-menu-content,.vjs-volume-menu-button-vertical.vjs-slider-active .vjs-menu-content,.vjs-volume-menu-button-vertical:focus .vjs-menu-content,.vjs-volume-menu-button-vertical:hover .vjs-menu-content{height:8em;width:2.9em}.vjs-volume-menu-button-horizontal .vjs-lock-showing .vjs-menu-content,.vjs-volume-menu-button-horizontal .vjs-slider-active .vjs-menu-content,.vjs-volume-menu-button-horizontal:focus .vjs-menu-content,.vjs-volume-menu-button-horizontal:hover .vjs-menu-content{height:2.9em;width:8em}.vjs-volume-menu-button.vjs-menu-button-inline .vjs-menu-content{background-color:transparent!important}.vjs-poster{display:inline-block;vertical-align:middle;background-repeat:no-repeat;background-position:50% 50%;background-size:contain;background-color:#000;cursor:pointer;margin:0;padding:0;position:absolute;top:0;right:0;bottom:0;left:0;height:100%}.vjs-poster img{display:block;vertical-align:middle;margin:0 auto;max-height:100%;padding:0;width:100%}.vjs-has-started .vjs-poster{display:none}.vjs-audio.vjs-has-started .vjs-poster{display:block}.vjs-controls-disabled .vjs-poster,.vjs-using-native-controls .vjs-poster{display:none}.video-js .vjs-live-control{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:flex-start;-webkit-align-items:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto;font-size:1em;line-height:3em}.vjs-no-flex .vjs-live-control{display:table-cell;width:auto;text-align:left}.video-js .vjs-current-time,.video-js .vjs-duration,.vjs-live .vjs-time-control,.vjs-live .vjs-time-divider,.vjs-no-flex .vjs-current-time,.vjs-no-flex .vjs-duration{display:none}.video-js .vjs-time-control{-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none;font-size:1em;line-height:3em;min-width:2em;width:auto;padding-left:1em;padding-right:1em}.vjs-time-divider{display:none;line-height:3em}.video-js .vjs-play-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.vjs-text-track-display{position:absolute;bottom:3em;left:0;right:0;top:0;pointer-events:none}.video-js.vjs-user-inactive.vjs-playing .vjs-text-track-display{bottom:1em}.video-js .vjs-text-track{font-size:1.4em;text-align:center;margin-bottom:.1em;background-color:#000;background-color:rgba(0,0,0,.5)}.vjs-subtitles{color:#fff}.vjs-captions{color:#fc6}.vjs-tt-cue{display:block}video::-webkit-media-text-track-display{-moz-transform:translateY(-3em);-ms-transform:translateY(-3em);-o-transform:translateY(-3em);-webkit-transform:translateY(-3em);transform:translateY(-3em)}.video-js.vjs-user-inactive.vjs-playing video::-webkit-media-text-track-display{-moz-transform:translateY(-1.5em);-ms-transform:translateY(-1.5em);-o-transform:translateY(-1.5em);-webkit-transform:translateY(-1.5em);transform:translateY(-1.5em)}.video-js .vjs-fullscreen-control{cursor:pointer;-webkit-box-flex:none;-moz-box-flex:none;-webkit-flex:none;-ms-flex:none;flex:none}.vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center}.vjs-playback-rate .vjs-menu{width:4em;left:0}.vjs-error .vjs-error-display .vjs-modal-dialog-content{font-size:1.4em;text-align:center}.vjs-error .vjs-error-display:before{color:#fff;content:\'X\';font-size:4em;left:0;line-height:1;margin-top:-.5em;position:absolute;text-shadow:.05em .05em .1em #000;text-align:center;top:50%;vertical-align:middle;width:100%}.vjs-loading-spinner{display:none;position:absolute;top:50%;left:50%;margin:-25px 0 0 -25px;opacity:.85;text-align:left;border:6px solid rgba(43,51,63,.7);box-sizing:border-box;background-clip:padding-box;width:50px;height:50px;border-radius:25px}.vjs-seeking .vjs-loading-spinner,.vjs-waiting .vjs-loading-spinner{display:block}.vjs-loading-spinner:after,.vjs-loading-spinner:before{content:"";position:absolute;margin:-6px;box-sizing:inherit;width:inherit;height:inherit;border-radius:inherit;opacity:1;border:inherit;border-color:#fff transparent transparent}.vjs-seeking .vjs-loading-spinner:after,.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:before{-webkit-animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite;animation:vjs-spinner-spin 1.1s cubic-bezier(.6,.2,0,.8) infinite,vjs-spinner-fade 1.1s linear infinite}.vjs-seeking .vjs-loading-spinner:before,.vjs-waiting .vjs-loading-spinner:before{border-top-color:#fff}.vjs-seeking .vjs-loading-spinner:after,.vjs-waiting .vjs-loading-spinner:after{border-top-color:#fff;-webkit-animation-delay:.44s;animation-delay:.44s}@keyframes vjs-spinner-spin{100%{transform:rotate(360deg)}}@-webkit-keyframes vjs-spinner-spin{100%{-webkit-transform:rotate(360deg)}}@keyframes vjs-spinner-fade{0%,100%,20%,60%{border-top-color:#73859f}35%{border-top-color:#fff}}@-webkit-keyframes vjs-spinner-fade{0%,100%,20%,60%{border-top-color:#73859f}35%{border-top-color:#fff}}.vjs-chapters-button .vjs-menu ul{width:24em}.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-custom-control-spacer{-webkit-box-flex:auto;-moz-box-flex:auto;-webkit-flex:auto;-ms-flex:auto;flex:auto}.video-js.vjs-layout-tiny:not(.vjs-fullscreen).vjs-no-flex .vjs-custom-control-spacer{width:auto}.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-subtitles-button .vjs-audio-button,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-audio-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-progress-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-tiny:not(.vjs-fullscreen) .vjs-volume-menu-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-audio-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-captions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-chapters-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-current-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-descriptions-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-duration,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-mute-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-playback-rate,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-remaining-time,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-subtitles-button,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-time-divider,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-control,.video-js.vjs-layout-x-small:not(.vjs-fullscreen) .vjs-volume-menu-button{display:none}.vjs-caption-settings{position:relative;top:1em;background-color:#2B333F;background-color:rgba(43,51,63,.75);color:#fff;margin:0 auto;padding:.5em;height:16em;font-size:12px;width:40em}.vjs-caption-settings .vjs-tracksettings{top:0;bottom:1em;left:0;right:0;position:absolute;overflow:auto}.vjs-caption-settings .vjs-tracksettings-colors,.vjs-caption-settings .vjs-tracksettings-font{float:left}.vjs-caption-settings .vjs-tracksettings-colors:after,.vjs-caption-settings .vjs-tracksettings-controls:after,.vjs-caption-settings .vjs-tracksettings-font:after{clear:both}.vjs-caption-settings .vjs-tracksettings-controls{position:absolute;bottom:1em;right:1em}.vjs-caption-settings .vjs-tracksetting{margin:5px;padding:3px;min-height:40px;border:none}.vjs-caption-settings .vjs-tracksetting label,.vjs-caption-settings .vjs-tracksetting legend{display:block;width:100px;margin-bottom:5px}.vjs-caption-settings .vjs-tracksetting span{display:inline;margin-left:5px;vertical-align:top;float:right}.vjs-caption-settings .vjs-tracksetting>div{margin-bottom:5px;min-height:20px}.vjs-caption-settings .vjs-tracksetting>div:last-child{margin-bottom:0;padding-bottom:0;min-height:0}.vjs-caption-settings label>input{margin-right:10px}.vjs-caption-settings fieldset{margin-top:1em;margin-left:.5em}.vjs-caption-settings fieldset .vjs-label{position:absolute;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.vjs-caption-settings input[type=button]{width:40px;height:40px}.video-js .vjs-modal-dialog{background:rgba(0,0,0,.8);background:-webkit-linear-gradient(-90deg,rgba(0,0,0,.8),rgba(255,255,255,0));background:linear-gradient(180deg,rgba(0,0,0,.8),rgba(255,255,255,0))}.vjs-modal-dialog .vjs-modal-dialog-content{font-size:1.2em;line-height:1.5;padding:20px 24px;z-index:1}@media print{.video-js>:not(.vjs-tech):not(.vjs-poster){visibility:hidden}}@media \\0screen{.vjs-user-inactive.vjs-playing .vjs-control-bar :before{content:""}.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{visibility:hidden}}'),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{background-color:#000;background-color:rgba(0,0,0,.7);bottom:0;height:51px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control{top:-5px;background-color:#000;background-color:rgba(0,0,0,.7)}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control:hover{top:-7px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{border-radius:0;-moz-border-radius:0;-webkit-border-radius:0}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:12px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{height:42px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-progress-control{background-color:#000}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:11px}}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time{margin-left:20px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-right:20px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:22px}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar{height:34px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-play-control:before{font-size:11px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-top:9px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-current-time{margin-left:14px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-duration{margin-right:10px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-dark .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:14pxpx}}.vjs-afterglow-skin.afterglow-skin-dark .vjs-control:before{margin-top:5px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar{right:20px;top:16px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{background-color:#000;background-color:rgba(0,0,0,.7);width:32px;height:32px;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;margin-left:7px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{margin-top:-1px;font-size:15px;line-height:16px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar{top:14px;right:16px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{width:28px;height:28px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{font-size:14px;line-height:15px;margin-top:-2px}}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button{width:24px;height:24px}.vjs-afterglow-skin.afterglow-skin-dark .vjs-top-control-bar .vjs-button:before{font-size:12px;line-height:13px;margin-top:0}}.vjs-afterglow-skin.afterglow-skin-dark.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:0;background-color:#000}.vjs-afterglow-skin.afterglow-skin-dark.vjs-youtube.vjs-has-started.vjs-youtube-headstart .vjs-control-bar{right:0}"),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, '@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,300);.vjs-afterglow-skin.vjs-has-started .vjs-control-bar,.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar{-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s}@font-face{font-family:afterglow-icon;src:url(data:font/truetype;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBncAAAC8AAAAYGNtYXDPacz+AAABHAAAAGxnYXNwAAAAEAAAAYgAAAAIZ2x5ZreZViUAAAGQAAAK7GhlYWQO52HJAAAMfAAAADZoaGVhCuoG/AAADLQAAAAkaG10eEhEAzQAAAzYAAAATGxvY2ETpBW6AAANJAAAAChtYXhwABoAwwAADUwAAAAgbmFtZZlKCfsAAA1sAAABhnBvc3QAAwAAAAAO9AAAACAAAwREAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpCQPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAUAAAABAAEAADAAAAAQAg5gvmDeYP6Qn//f//AAAAAAAg5gDmDeYP6Qn//f//AAH/4xoEGgMaAhcJAAMAAQAAAAAAAAAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAADAAAAZAQAAxwAEABAAHMAABMRFBYzITI2NRE0JiMhIgYVBQ4BFRQWMzI2NxUUBgcwBiMiJicuATU0Njc+ATc+ATMyFjEeAQ8BLgEnLgEjIgYHIQ4BFRQWMzI2MRUUBgcwBiMiJicuATU0Njc+ATc+ATMyFjEeAQcwBjcHMCYnLgEjIgYHADAiA1wiMDAi/KQiMAEMEBA9PRk+JBcROCU1UBwcHA4NDicaGjwjI0MQDgYSDhsODRsNHS0QAaIQED08GmEXEDkkNVEcHBsNDg4nGhk9IiNEEA4EAgIUKQ4OGw0dLBACyv3sIjAwIgIUIjAwIpkVPSZRUA0MLBEeBA8gICBbOyZBHRwrDw8PFQUeEC0HCwUFBBUWFT0mUVAZLBEeBA8gICBbOyZBHRwrDw8PFQUdCwUFMxIFBQQVFgAAAAIAGv/aA+YDpgAQACAAABM3NjIXARYUDwEGIicBJjQ3JRcWFAcBBiIvASY0NwE2MhorES8RA1AQECwQLxH8sBERA6AsEBD8sBEvESsREQNQES8DeiwQEPywES8QLBAQA1ARLxAsLBAvEfywEBAsEC8RA1AQAAAAAAEAyQAAAxwDgAALAAAlBiY1ETQ2FwEWFAcBEh4rKx4CCh4eABcWJgM2JhYX/ncXQBcAAAACABr/8wOpA5cAHAA9AAATNDYzMCIzMj4CMTYWFREUBicwLgIrASImPQEFBwYUFxYyPwEXFjI3NjQvATc2NCcmIg8BJyYiBwYUHwEaNypYlUt7VzAMDg4MOF14QDgqPAK4SA8PECkPSEcQKQ8PD0hIDw8PKRBHSA8pEA8PSAIcKj1WaFYTBRP8ZhMFE1dnVzwqrlxIDykPEBBHRxAQDykPSEgPKQ8QEEdHEBAPKQ9IAAEAtv/uAyMDkgALAAAFBiY1ETQ2FwEeAQcBHys+PSwCBCsBLBIhIDYDOjcfIf59IVwhAAAFABr/8wPDA5cAEQAmADwAUgBvAAABNCYxJjQ3NhYXMBYXFBYVLgEzMCIjFAYxBhQXFjY3MD4CJyoBMTM0JjEmND8BNjIXMB4CFxQWFSoBIzMwIiMUBjEGFB8BFjI3MD4CJyoBMSU0NjMwIjMyPgIxNhYVERQGJzAuAisBIiY9AQLDKQwMCxwMNwsFHiABEggpCwsMGwgWGhQCCyOfLggICggZCBIXFgMGGx8TFBIHLggICgcaCBgbFgIPJPyQNypYlUt7VzAMDg4MOF14QDgqPAHARUoUMBMUBhN8QQwSCwQBRU8UMBQTBA8wR1IjWGsTNhMPExMvSVkqCxwMWGsTNhMUExM/XWssXCo9VmhWEwUT/GYTBRNXZ1c8Kq4AAAABABr/8wIfA5cAHAAAEzQ2MzAiMzI+AjE2FhURFAYnMC4CKwEiJj0BGjcqWJVLe1cwDA4ODDhdeEA4KjwCHCo9VmhWEwUT/GYTBRNXZ1c8Kq4AAAADABr/8wMUA5cAEQAmAEMAAAE0JjEmNDc2FhcwFhcUFhUuATMwIiMUBjEGFBcWNjcwPgInKgExJTQ2MzAiMzI+AjE2FhURFAYnMC4CKwEiJj0BAsMpDAwLHAw3CwUeIAESCCkLCwwbCBYaFAILI/1DNypYlUt7VzAMDg4MOF14QDgqPAHARUoUMBMUBhN8QQwSCwQBRU8UMBQTBA8wR1IjXCo9VmhWEwUT/GYTBRNXZ1c8Kq4AAAAABAAr/9gD5AORAAoAFwAiAC8AAAEmND8BFwcGIi8BJQ4BLwEmNj8BNhYPAQEWFA8BJzc+AR8BBT4BHwEWBg8BBiY/AQI1Dg6kcKQOJg4uAZEGLhvMGw8m0CYuBR7+Ew4OpHClDScOLf5wBS4bzBsPJtAmLgYeAhAOJg6kb6UNDS5jJg8byxwuBR4FLibP/uYOJg6kb6UNAQ4uYiYOG8sbLwUeBS4m0AAABAAv/+gD2QOSAAoAFwAhAC4AADcXFjI/AScHBhQXJTc2Jg8BDgEfARY2NwEnJiIPARc3NjQFPgEfARYGDwEGJj8BLywNJQ3Ka8oNDQGsHQUsJMckDxrDGiwFAf4sDSUNyWrKDf5HBS0awhoOJMckLAUcFCwNDcpryg0lDYvHJCwFHQUsGsMaDyQCxywNDcpqyQ4kfSQOGsIaLQUcBSwkxwAAAAACAHz/wAOEA8AADwAfAAATMzIWFREUBisBIiY1ETQ2ITMyFhURFAYrASImNRE0NsJqHSoqHWodKSkCL2odKSkdah0qKgPAKR78jh4pKR4Dch4pKR78jh4pKR4Dch4pAAADABf/3AcLA6QAMABOAF0AACUUBisBIiY1ETQmIyEiBhURFAYrASImNRE0NjsBMhYVERQWMyEyNjURNDY7ATIWFRElDgMrASImNRE0NjsBMh4CFx4DFRQOAgcDNC4CKwERMzI+AjUxAzMfGlsZIB8Z/u4VIyAZWxofHxpbGSAfGQEMFSQfGlsZIANVIlNjcUDYGSAkFfU7aVxPIyAwIRERIjMiSiJFZkRsVUluSyYVGSAgGQEuGSAgGf7SGSAkFQNWGSAgGf70GSAgGQEMGSAkFfyqRSAwHhAkFQNWGSAQHjAgIEpXYjg7a11OIAFsT3VOJ/2IJ094UQAAAAADAAAAZAQAAxwAEAAfAC4AABMRFBYzITI2NRE0JiMhIgYVEzQ2MyEyFhUUBiMhIiY1JzQ2MyEyFhUUBiMhIiY1ADAiA1wiMDAi/KQiMM0YEQIUERgYEf3sERhSGBECuBEYGBH9SBEYAsr97CIwMCICFCIwMCL+PhEYGBERGBgRexEYGBERGBcSAAAAAAYARv/gBygDpQAdAD8AcAChALEAwAAABSMiJjURNDY7ATIeAhceAxUUDgIHDgMjAyIGFREUFjsBMj4CNz4DNTQuAicuAyMUDgEiMQEjIiY1ETQmKwEiBhURFAYrASImNRE0NjsBMhYdARQWOwEyNjURPgE7ATIWFREWBiMBMzIWFREUFjsBMjY1ETQmKwEiBh0BFAYrAS4BNRE0JisBDgEVERQWOwEyNjURNDYzASMRMzIWFx4BFRQGBw4BIyczMj4CNTQuAisBEScFI80cLysg6DlmW08gIDEgEBAhMyIfUGFwP80MFBQMzTtnWUofHi4gEA8dLR4eSVReNUhXSf69Vh0vFAz9DRQrIFYdLyshUB0vFAz9DRQELCFWHC8EKyT+Qf0cLxUMVgwUFAxWDBUrIP0dKhQMWw0UFA1WDBQrIQPlbHxEayghKyclKHdIPEFDYUAfHjxZOlEGICshAy4cLw4fLyAgS1ZhNzpoWk0gIjMhEQOVFQz82AwVDxwqHRxGVGE3MltQRB0cKh0OAgIB/GsrIQEjDBQUDP7dHS8rIQMuHC8rIP4QFRQMAQMcLysg/NckLQG6KyD+3QwVERADKAwVERD9HDAELBwBAwwUBBAM/NcMFBQMASMYLv7jAoYoKCV4UVB6KC0pMCJFZ0VFZUMg/dsFAAEAAP/ABAADwAAwAAATND4CMzIeAhUUDgIjKgEnJjY3MhYzMj4CNTQuAiMiDgIVHAEXDgEnJjQ1AFCLu2pqu4tQUIu7agcOByUBKQYLBlqedkVFdp5aWp52RQEBRgYBAcBqu4tQUIu7amq7i1ABBkYBAUV2nlpannZFRXaeWgUJBSUJJQcOBwABAAAAAAAA88pdWV8PPPUACwQAAAAAANRQjqYAAAAA1FCOpgAA/8AHKAPAAAAACAACAAAAAAAAAAEAAAPA/8AAAAcoAAAAAAcoAAEAAAAAAAAAAAAAAAAAAAATBAAAAAAAAAAAAAAAAgAAAAQAAAAEAAAaBAAAyQQAABoEAAC2BAAAGgQAABoEAAAaBAAAKwQAAC8EAAB8BxwAFwQAAAAHKABGBAAAAAAAAAAACgAUAB4AvgD6ARQBbAGGAhYCQAKcAvADQgNyA/AENgUyBXYAAQAAABMAwQAGAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGljb21vb24AaQBjAG8AbQBvAG8AblZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGljb21vb24AaQBjAG8AbQBvAG8Abmljb21vb24AaQBjAG8AbQBvAG8AblJlZ3VsYXIAUgBlAGcAdQBsAGEAcmljb21vb24AaQBjAG8AbQBvAG8AbkZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=) format(\'truetype\');font-weight:400;font-style:normal}.vjs-afterglow-skin{overflow:hidden;color:#fff}.vjs-afterglow-skin :focus,.vjs-afterglow-skin:focus{outline:0}.vjs-afterglow-skin video{background-color:#000}.vjs-afterglow-skin .vjs-slider{outline:0;position:relative;cursor:pointer;padding:0;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;margin:0 30px;background-color:#fff;background-color:rgba(255,255,255,.1)}@media (max-width:768px){.vjs-afterglow-skin .vjs-slider{margin:0 20px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-slider{margin:0 12px}}.vjs-afterglow-skin .vjs-slider:hover{margin:0 30px}@media (max-width:768px){.vjs-afterglow-skin .vjs-slider:hover{margin:0 20px}}.vjs-afterglow-skin .vjs-slider:focus{-webkit-box-shadow:0 0 2em #fff;-moz-box-shadow:0 0 2em #fff;box-shadow:0 0 2em #fff}.vjs-afterglow-skin .vjs-slider-handle{position:absolute;left:0;top:0;display:none}.vjs-afterglow-skin .vjs-play-progress:before{display:none!important;height:0;width:0;font-size:.9em}.vjs-afterglow-skin .vjs-progress-control .vjs-mouse-display,.vjs-afterglow-skin .vjs-progress-control:hover .vjs-mouse-display,.vjs-afterglow-skin .vjs-progress-control:hover .vjs-play-progress:after{display:none}.vjs-afterglow-skin .vjs-control-bar{display:none;position:absolute;bottom:16px;left:0;right:0;height:33px;font-family:\'Open Sans\';color:rgba(255,255,255,.9);background-color:#000;background-color:rgba(0,0,0,0)}@media (max-width:768px){.vjs-afterglow-skin .vjs-control-bar{bottom:7px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-slider:hover{margin:0 12px}.vjs-afterglow-skin .vjs-control-bar{bottom:0}}.vjs-afterglow-skin .vjs-control-bar .div{opacity:.9}.vjs-afterglow-skin .vjs-control-bar .div:hover{opacity:1}.vjs-afterglow-skin.vjs-has-started .vjs-control-bar{display:block;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-control-bar,.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-top-control-bar{display:block;visibility:hidden;opacity:0}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{display:block;visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-afterglow-skin.vjs-controls-disabled .vjs-control-bar,.vjs-afterglow-skin.vjs-error .vjs-control-bar,.vjs-afterglow-skin.vjs-error .vjs-top-control-bar,.vjs-afterglow-skin.vjs-using-native-controls .vjs-control-bar{display:none}.vjs-afterglow-skin.vjs-audio.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-control-bar{opacity:1;visibility:visible}@media \\0screen{.vjs-afterglow-skin.vjs-user-inactive.vjs-playing .vjs-control-bar :before{content:""}}.vjs-afterglow-skin .vjs-control{outline:0;position:relative;float:left;text-align:center;margin:0;padding:0;height:40px;width:auto}.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:40px}@media (max-width:768px){.vjs-afterglow-skin .vjs-control{height:30px}.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:30px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-control.vjs-captions-button.vjs-control,.vjs-afterglow-skin .vjs-control.vjs-subtitles-button.vjs-control{width:20px}}.vjs-afterglow-skin .vjs-control:before{font-family:afterglow-icon;font-size:17px;line-height:18px;padding-top:10px;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;opacity:.9;text-shadow:0 0 0 rgba(255,255,255,0)}@media (max-width:768px){.vjs-afterglow-skin .vjs-control:before{font-size:13px;line-height:13px;padding-top:9px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-control:before{font-size:11px;line-height:11px;padding-top:6px}}.vjs-afterglow-skin .vjs-control:focus:before,.vjs-afterglow-skin .vjs-control:hover:before{text-shadow:0 0 5px rgba(255,255,255,.6);opacity:1}.vjs-afterglow-skin .vjs-control-text{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.vjs-afterglow-skin .vjs-play-control{width:50px;cursor:pointer;position:absolute;left:50%;margin-left:-25px}@media (max-width:512px){.vjs-afterglow-skin .vjs-play-control{position:relative;left:auto;margin-left:0;width:25px}}.vjs-afterglow-skin .vjs-play-control:before{content:"\\e602";margin-left:1px;font-size:22px}@media (max-width:768px){.vjs-afterglow-skin .vjs-play-control:before{font-size:20px;line-height:22px;top:-5px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-play-control:before{font-size:10px;line-height:10px;top:0}}.vjs-afterglow-skin.vjs-playing .vjs-play-control:before{content:"\\e60a"}.vjs-afterglow-skin .vjs-playback-rate .vjs-playback-rate-value{font-size:1.5em;line-height:2;position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.5)}.vjs-afterglow-skin .vjs-playback-rate .vjs-playback-rate-value.vjs-menu-button .vjs-menu .vjs-menu-content{width:30px;left:15px;list-style:none}.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{cursor:pointer;float:right;width:auto;padding-left:32px;margin-left:10px}.vjs-afterglow-skin .vjs-mute-control:before,.vjs-afterglow-skin .vjs-volume-menu-button:before{content:"\\e605";cursor:pointer}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-0:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-0:before{content:"\\e603"}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-1:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-1:before{content:"\\e606"}.vjs-afterglow-skin .vjs-mute-control.vjs-vol-2:before,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-vol-2:before{content:"\\e607"}@media (max-width:512px){.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{height:26px;padding-left:27px}}.vjs-afterglow-skin .vjs-volume-control{float:right}.vjs-afterglow-skin .vjs-volume-level{position:absolute;top:0;left:0;height:4px;width:100%;background-color:#fff;border-radius:4px}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{display:block;width:0;height:10px;border-top-color:transparent;position:relative;padding-left:0;top:0;padding-top:17px;padding-bottom:17px;left:0;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu .vjs-menu-content{height:10px;width:0;float:right;left:0;box-shadow:none;background:0 0;position:relative;bottom:auto;overflow:hidden;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{width:74px}@media (max-width:768px){.vjs-afterglow-skin .vjs-mute-control,.vjs-afterglow-skin .vjs-volume-menu-button{margin-left:0}.vjs-afterglow-skin .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{left:0;padding-top:13px;padding-bottom:12px}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{padding-left:5px;padding-right:5px;width:50px}}@media (max-width:500px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu{display:none}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu.vjs-lock-showing,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu.vjs-lock-showing{display:none!important}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{display:none}}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-handle:before,.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-level:before,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-handle:before,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level:before{display:none}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{height:10px;width:61px;bottom:0;left:0;float:none;box-shadow:none;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}@media (max-width:768px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-menu-content,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-menu-content{width:41px;left:-5px}.vjs-afterglow-skin .vjs-volume-bar,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal{width:0}}.vjs-afterglow-skin .vjs-volume-bar,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal{width:0;left:1px;height:5px;margin:0;background-color:rgba(255,255,255,.3);border-radius:5px;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-handle,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-handle{width:0;height:0;left:100%}.vjs-afterglow-skin .vjs-volume-bar .vjs-volume-level,.vjs-afterglow-skin .vjs-volume-bar.vjs-slider-horizontal .vjs-volume-level{height:4px;border-radius:4px}.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal{width:60px}@media (max-width:768px){.vjs-afterglow-skin .vjs-volume-menu-button.vjs-volume-menu-button-horizontal:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal,.vjs-afterglow-skin .vjs-volume-menu-button:hover .vjs-menu .vjs-volume-bar.vjs-slider-horizontal{width:40px}}.vjs-afterglow-skin .vjs-menu-button-popup .vjs-menu{position:relative;float:right}.vjs-afterglow-skin .vjs-progress-control{position:absolute;left:0;right:0;width:auto;height:5px;top:-9px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s}.vjs-afterglow-skin .vjs-progress-control:hover{top:-11px;height:9px;-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}@media (max-width:768px){.vjs-afterglow-skin .vjs-progress-control:hover{top:-9px;height:7px}}.vjs-afterglow-skin:hover .vjs-progress-control{-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin .vjs-progress-holder{height:100%}.vjs-afterglow-skin .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin .vjs-progress-holder .vjs-play-progress{position:absolute;display:block;height:100%;margin:0;padding:0;width:0;left:0;top:0;border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px}.vjs-afterglow-skin .vjs-progress-holder .vjs-load-progress div,.vjs-afterglow-skin.vjs-live .vjs-progress-control,.vjs-afterglow-skin.vjs-live .vjs-time-controls,.vjs-afterglow-skin.vjs-live .vjs-time-divider{display:none}.vjs-afterglow-skin .vjs-play-progress{background-color:#fff;box-shadow:0 0 5px rgba(255,255,255,.6);-moz-box-shadow:0 0 5px rgba(255,255,255,.6);-webkit-box-shadow:0 0 5px rgba(255,255,255,.6)}.vjs-afterglow-skin .vjs-load-progress{background:#646464;background:rgba(255,255,255,.2)}.vjs-afterglow-skin .vjs-load-progress div{background:#787878;background:rgba(255,255,255,.2)}.vjs-afterglow-skin .vjs-seek-handle{width:10px;height:100%}.vjs-afterglow-skin.vjs-live .vjs-live-display{display:block}.vjs-afterglow-skin .vjs-live-display{display:none;font-size:1em;line-height:3em}.vjs-afterglow-skin .vjs-time-controls{font-size:22px}.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{height:23px;position:relative;float:left;margin-top:7px;padding:0;font-weight:100;font-size:21px;line-height:22px;display:block;width:auto}@media (max-width:768px){.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{font-size:17px;line-height:17px}}.vjs-afterglow-skin.vjs-no-flex .vjs-current-time,.vjs-afterglow-skin.vjs-no-flex .vjs-duration{display:block}.vjs-afterglow-skin .vjs-current-time{margin-left:30px}@media (max-width:768px){.vjs-afterglow-skin .vjs-current-time{margin-left:20px}}.vjs-afterglow-skin .vjs-duration{float:right;text-align:right;margin-right:30px;padding-left:10px}@media (max-width:768px){.vjs-afterglow-skin .vjs-duration{margin-right:20px;padding-left:6px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-current-time,.vjs-afterglow-skin .vjs-duration{font-size:14px;line-height:14px;margin-top:5px}.vjs-afterglow-skin .vjs-current-time{margin-left:12px}.vjs-afterglow-skin .vjs-duration{margin-right:12px;padding-left:2px}}.vjs-afterglow-skin .vjs-remaining-time{display:none;float:right}.vjs-afterglow-skin .vjs-time-divider{float:left;line-height:3em}.vjs-afterglow-skin .vjs-top-control-bar{width:auto;height:auto;text-align:right;position:absolute;right:26px;top:13px;display:none;opacity:0}@media (max-width:768px){.vjs-afterglow-skin .vjs-top-control-bar{top:10px;right:18px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-top-control-bar{top:6px;right:10px}}.vjs-afterglow-skin .vjs-top-control-bar .vjs-control{width:20px;height:30px;text-align:right;line-height:13px;font-size:13px;cursor:pointer;opacity:.9;margin-left:20px}@media (max-width:768px){.vjs-afterglow-skin .vjs-top-control-bar .vjs-control{font-size:9px;line-height:9px;margin-left:5px}}.vjs-afterglow-skin .vjs-top-control-bar .vjs-control:hover{opacity:1}.vjs-afterglow-skin .vjs-top-control-bar .vjs-fullscreen-control:before{content:"\\e608"}.vjs-afterglow-skin .vjs-top-control-bar .vjs-lightbox-close-button:before{content:"\\e601"}.vjs-afterglow-skin.vjs-fullscreen .vjs-top-control-bar .vjs-fullscreen-control:before{content:"\\e609"}.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar{display:block;visibility:visible;opacity:1;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started .vjs-top-control-bar .vjs-control{opacity:.9;-webkit-transition:visibility .1s,opacity .1s;-moz-transition:visibility .1s,opacity .1s;-o-transition:visibility .1s,opacity .1s;transition:visibility .1s,opacity .1s}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-top-control-bar{display:block;visibility:hidden;opacity:0;-webkit-transition:visibility 1s,opacity 1s;-moz-transition:visibility 1s,opacity 1s;-o-transition:visibility 1s,opacity 1s;transition:visibility 1s,opacity 1s}.vjs-afterglow-skin.vjs-has-started.vjs-user-inactive.vjs-playing .vjs-top-control-bar .vjs-control{opacity:.9}.vjs-afterglow-skin .vjs-big-play-button{display:block;z-index:2;position:absolute;width:80px;height:80px;text-align:center;vertical-align:middle;cursor:pointer;top:50%;left:50%;margin-left:-40px;margin-top:-40px;border:none;background:0 0;visibility:visible;opacity:1;-webkit-transition:all .4s;-moz-transition:all .4s;-o-transition:all .4s;transition:all .4s}.vjs-afterglow-skin.vjs-controls-disabled .vjs-big-play-button{display:none}.vjs-afterglow-skin.vjs-has-started .vjs-big-play-button{display:none;opacity:0}.vjs-afterglow-skin.vjs-has-started.vjs-ended .vjs-big-play-button{display:block;visibility:visible;opacity:1}.vjs-afterglow-skin.vjs-using-native-controls .vjs-big-play-button{display:block}.vjs-afterglow-skin .vjs-big-play-button:focus,.vjs-afterglow-skin:hover .vjs-big-play-button{outline:0;border:none;background:0 0;-webkit-transition:all 0s;-moz-transition:all 0s;-o-transition:all 0s;transition:all 0s}.vjs-afterglow-skin.vjs-seeking .vjs-big-play-button,.vjs-afterglow-skin.vjs-waiting .vjs-big-play-button{display:none;-webkit-animation:spin 1.5s infinite linear;-moz-animation:spin 1.5s infinite linear;-o-animation:spin 1.5s infinite linear;animation:spin 1.5s infinite linear}.vjs-afterglow-skin .vjs-big-play-button:before{content:"\\e602";font-family:afterglow-icon;line-height:80px;font-size:80px;text-shadow:0 0 5px #000;text-shadow:0 0 5px rgba(0,0,0,.6);text-align:center;font-weight:700;position:absolute;left:0;width:100%;height:100%}@media (max-width:768px){.vjs-afterglow-skin .vjs-big-play-button:before{font-size:60px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-big-play-button:before{font-size:40px}}.vjs-afterglow-skin .vjs-error-display,.vjs-afterglow-skin.vjs-error .vjs-big-play-button{display:none}.vjs-afterglow-skin.vjs-error .vjs-error-display{display:block;position:absolute;left:0;top:0;width:100%;height:100%}.vjs-afterglow-skin .vjs-error .vjs-error-display:before{content:\'\'}.vjs-afterglow-skin .vjs-error-display div{position:absolute;bottom:40px;right:0;left:0;font-family:\'Open Sans\',Helvetica light,Helvetica,sans-serif;font-size:16px;text-align:center;padding:3px;background:#000;background:rgba(0,0,0,.5)}.vjs-afterglow-skin .vjs-error-display a,.vjs-afterglow-skin .vjs-error-display a:visited{color:#F4A460}.vjs-afterglow-skin.vjs-error .vjs-fullscreen-control{display:none}.vjs-afterglow-skin .vjs-loading-spinner{position:absolute;top:50%;left:50%;width:32px;height:32px;margin-left:-16px;margin-top:-16px;clear:both;border:3px solid rgba(255,255,255,.1);border-top:3px rgba(255,255,255,.95) solid;border-radius:50%;-webkit-animation:spCircRot 1.6s infinite linear;animation:spCircRot 1.6s infinite linear}.vjs-afterglow-skin .vjs-loading-spinner:after,.vjs-afterglow-skin .vjs-loading-spinner:before{content:none;border:0}.vjs-afterglow-skin .vjs-seeking .vjs-loading-spinner,.vjs-afterglow-skin .vjs-waiting .vjs-loading-spinner{display:block;-webkit-animation:spin 1.5s infinite linear;-moz-animation:spin 1.5s infinite linear;-o-animation:spin 1.5s infinite linear;animation:spin 1.5s infinite linear}.vjs-afterglow-skin .vjs-error .vjs-loading-spinner{display:none;-webkit-animation:none;-moz-animation:none;-o-animation:none;animation:none}@-moz-keyframes spin{0%{-moz-transform:rotate(0)}100%{-moz-transform:rotate(359deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(359deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0)}100%{-o-transform:rotate(359deg)}}@keyframes spin{0%{transform:rotate(0)}100%{transform:rotate(359deg)}}.vjs-afterglow-skin .vjs-menu-button{float:right;cursor:pointer}.vjs-afterglow-skin .vjs-menu-button.vjs-menu-button-inline{width:auto}.vjs-afterglow-skin .vjs-menu-button.vjs-menu-button-inline:before{width:30px}.vjs-afterglow-skin .vjs-menu{display:none;position:relative;bottom:auto;left:-85px;width:0;height:0;margin-bottom:0}@media (max-width:768px){.vjs-afterglow-skin .vjs-menu{left:-75px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-menu{left:-70px}}.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{display:block;padding:0 0 70px;margin:0;position:absolute;bottom:-50px;width:100px;max-height:none;overflow:auto;left:12px;font-family:\'Open Sans\',Helvetica Light,Helvetica,sans-serif;background:0 0}@media (max-width:768px){.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{left:12px;bottom:-40px;padding-bottom:60px}}@media (max-width:512px){.vjs-afterglow-skin .vjs-menu-button .vjs-menu .vjs-menu-content{left:11px;bottom:-30px;padding-bottom:50px}}.vjs-afterglow-skin .vjs-control-content .vjs-menu.vjs-lock-showing,.vjs-afterglow-skin .vjs-menu-button:hover .vjs-control-content .vjs-menu{display:block}.vjs-afterglow-skin.vjs-scrubbing .vjs-menu-button:hover .vjs-control-content .vjs-menu{display:none}.vjs-afterglow-skin .vjs-menu-button ul li{list-style:none;margin:0;padding:0 5px;line-height:16px;font-size:14px;text-align:center;text-transform:lowercase;opacity:.7;text-shadow:0 0 0 rgba(255,255,255,0)}.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected,.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected:focus,.vjs-afterglow-skin .vjs-menu-button ul li.vjs-selected:hover,.vjs-afterglow-skin .vjs-menu-button ul li:focus,.vjs-afterglow-skin .vjs-menu-button ul li:hover{text-shadow:0 0 5px rgba(255,255,255,.6);opacity:1;background:0 0;color:#fff}.vjs-afterglow-skin .vjs-menu-button ul li.vjs-menu-title{text-align:center;text-transform:uppercase;font-size:1em;line-height:2em;padding:0;margin:0 0 .3em;font-weight:700;cursor:afterglow}.vjs-afterglow-skin .vjs-subtitles-button:before{content:"\\e60d"}.vjs-afterglow-skin .vjs-captions-button:before{content:"\\e600"}.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:40px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s}@media (max-width:768px){.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:20px}}.vjs-afterglow-skin video::-webkit-media-text-track-background{background-color:rgba(0,0,0,.5);border-radius:3px;padding:10px 14px}.vjs-afterglow-skin video::-webkit-media-text-track-display{color:#fff;font-family:Open Sans,Georgia;font-size:16px;padding:5px 10px 8px}@media (max-width:768px){.vjs-afterglow-skin video::-webkit-media-text-track-display{font-size:14px}}@media (max-width:512px){.vjs-afterglow-skin video::-webkit-media-text-track-container{bottom:10px}.vjs-afterglow-skin video::-webkit-media-text-track-display{font-size:11px}}.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:70px}@media (max-width:768px){.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:40px}}.vjs-afterglow-skin .vjs-chapters-button.vjs-menu-button .vjs-menu .vjs-menu-content{width:24em;left:-12em}.vjs-afterglow-skin.vjs-responsive,.vjs-afterglow-skin.vjs-responsive video{width:100%;height:auto}.vjs-afterglow-skin .vjs-captions-button:focus .vjs-control-content:before,.vjs-afterglow-skin .vjs-captions-button:hover .vjs-control-content:before{-webkit-box-shadow:0 0 1em #fff;-moz-box-shadow:0 0 1em #fff;box-shadow:0 0 1em #fff}.vjs-afterglow-skin .vjs-tech:focus{outline:0}.vjs-afterglow-skin.vjs-responsive.vjs-has-started .vjs-tech{padding-top:0!important}.vjs-afterglow-skin.vjs-responsive.vjs-fullscreen video{height:100%}.vjs-afterglow-skin .vjs-ag-res-button{float:right;cursor:pointer;width:50px;font-family:afterglow-icon}@media (max-width:768px){.vjs-afterglow-skin .vjs-ag-res-button{width:30px;margin-left:-4px}}@media (max-width:512px){.vjs-afterglow-skin.vjs-user-active video::-webkit-media-text-track-container{bottom:30px}.vjs-afterglow-skin .vjs-ag-res-button{width:20px;margin-right:5px;margin-left:0}}.vjs-afterglow-skin .vjs-ag-res-button:before{font-family:afterglow-icon;content:"\\e60f"}.vjs-afterglow-skin .vjs-ag-res-button.vjs-ag-res-hd:before{content:"\\e60b";margin-left:.5px}.vjs-afterglow-skin.vjs-IE .vjs-ag-res-button{font-size:17px;line-height:18px;padding-top:10px}@media (max-width:768px){.vjs-afterglow-skin.vjs-IE .vjs-ag-res-button{font-size:9px;line-height:9px;margin-left:5px}}.vjs-afterglow-skin .vjs-poster{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=80)";-moz-opacity:.8;-khtml-opacity:.8;opacity:.8;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.vjs-afterglow-skin:hover .vjs-poster{-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";-moz-opacity:1;-khtml-opacity:1;opacity:1}.vjs-afterglow-skin.vjs-youtube>div:first-child{position:absolute!important;margin:0;height:100%;top:0;width:100%}.vjs-afterglow-skin.vjs-youtube iframe{display:block;visibility:hidden}.vjs-afterglow-skin.vjs-youtube.vjs-IE iframe{display:block;visibility:visible}.vjs-afterglow-skin.vjs-youtube .vjs-control-bar{right:120px;width:auto;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s;-webkit-transition-delay:.4s;-moz-transition-delay:.4s;-o-transition-delay:.4s;transition-delay:.4s}.vjs-afterglow-skin.vjs-youtube.vjs-has-started.vjs-youtube-headstart .vjs-control-bar{right:120px;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s;-webkit-transition-delay:0s;-moz-transition-delay:0s;-o-transition-delay:0s;transition-delay:0s}.vjs-afterglow-skin.vjs-youtube.vjs-has-started .vjs-control-bar{right:0;-webkit-transition:all .3s;-moz-transition:all .3s;-o-transition:all .3s;transition:all .3s;-webkit-transition-delay:.4s;-moz-transition-delay:.4s;-o-transition-delay:.4s;transition-delay:.4s}.vjs-afterglow-skin.vjs-youtube.vjs-has-started.vjs-ended .vjs-control-bar,.vjs-afterglow-skin.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:120px;width:auto;-webkit-transition:all .1s;-moz-transition:all .1s;-o-transition:all .1s;transition:all .1s;-webkit-transition-delay:.1s;-moz-transition-delay:.1s;-o-transition-delay:.1s;transition-delay:.1s}.video-js.vjs-has-started .vjs-poster,.vjs-poster{-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s}.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-big-play-button,.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-poster,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-big-play-button,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-poster{display:none}.vjs-afterglow-skin.vjs-youtube.vjs-iOS iframe,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls iframe{display:block;visibility:visible}.vjs-afterglow-skin.vjs-vimeo .vjs-top-control-bar,.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-loading-spinner,.vjs-afterglow-skin.vjs-youtube.vjs-iOS .vjs-text-track-display,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-loading-spinner,.vjs-afterglow-skin.vjs-youtube.vjs-using-native-controls .vjs-text-track-display{display:none}.vjs-afterglow-skin.vjs-IE.vjs-youtube iframe,.vjs-afterglow-skin.vjs-has-started.vjs-youtube iframe{display:block;visibility:visible}.vjs-afterglow-skin .vjs-error-display:before{content:\'\';width:100px;width:10vh;height:100px;height:10vh;background-image:url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjkgMTI5IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAxMjkgMTI5IiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KICA8Zz4KICAgIDxnPgogICAgICA8cGF0aCBkPSJNNjQuNSwxMjIuNmMzMiwwLDU4LjEtMjYsNTguMS01OC4xUzk2LjUsNi40LDY0LjUsNi40UzYuNCwzMi41LDYuNCw2NC41UzMyLjUsMTIyLjYsNjQuNSwxMjIuNnogTTY0LjUsMTQuNiAgICBjMjcuNSwwLDQ5LjksMjIuNCw0OS45LDQ5LjlTOTIsMTE0LjQsNjQuNSwxMTQuNFMxNC42LDkyLDE0LjYsNjQuNVMzNywxNC42LDY0LjUsMTQuNnoiIGZpbGw9IiNGRkZGRkYiLz4KICAgICAgPHBhdGggZD0ibTQyLjcsODUuN2MwLjgsMC44IDEuOCwxLjIgMi45LDEuMnMyLjEtMC40IDIuOS0xLjJsMTYtMTYgMTYsMTZjMC44LDAuOCAxLjgsMS4yIDIuOSwxLjJzMi4xLTAuNCAyLjktMS4yYzEuNi0xLjYgMS42LTQuMiAwLTUuOGwtMTYtMTYgMTYtMTZjMS42LTEuNiAxLjYtNC4yIDAtNS44cy00LjItMS42LTUuOCwwbC0xNiwxNi0xNi0xNmMtMS42LTEuNi00LjItMS42LTUuOCwwLTEuNiwxLjYtMS42LDQuMiAwLDUuOGwxNiwxNi0xNiwxNmMtMS42LDEuNi0xLjYsNC4yLTEuNDIxMDllLTE0LDUuOHoiIGZpbGw9IiNGRkZGRkYiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);background-size:cover;margin-top:-5vh;margin-left:-5vh;top:40%;left:50%}.vjs-afterglow-skin .vjs-error-display .vjs-modal-dialog-content{width:80%;margin:0 auto;font-family:\'Open Sans\';font-weight:100;position:absolute;bottom:20%;height:auto;top:auto;font-size:2vh}.video-js,.vjs-caption-settings{position:relative;background-color:#000}.video-js{padding:0;font-size:22px;vertical-align:middle;font-weight:400;font-style:normal;font-family:Arial,sans-serif;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.video-js:-moz-full-screen{position:absolute}.video-js:-webkit-full-screen{width:100%!important;height:100%!important}.video-js .vjs-tech,.vjs-poster{top:0;width:100%;position:absolute;left:0}.video-js .vjs-tech{height:100%}body.vjs-full-window{padding:0;margin:0;height:100%;overflow-y:auto}.video-js.vjs-fullscreen.vjs-user-inactive{cursor:none}.vjs-poster{background-repeat:no-repeat;background-position:50% 50%;background-size:contain;cursor:pointer;margin:0;padding:0;right:0;bottom:0;transition:all .2s}.vjs-poster img{display:block;margin:0 auto;max-height:100%;padding:0}.video-js.vjs-has-started .vjs-poster{display:none;visibility:hidden;opacity:0;transition:all .2s}.video-js.vjs-has-started.vjs-ended .vjs-poster{display:block;visibility:visible;opacity:1;-webkit-transition:all .2s;-moz-transition:all .2s;-o-transition:all .2s;transition:all .2s}.video-js.vjs-audio.vjs-has-started .vjs-poster{display:block}.video-js.vjs-controls-disabled .vjs-poster{display:none}.video-js.vjs-using-native-controls .vjs-poster{display:block}.video-js .vjs-text-track-display{position:absolute;bottom:50px;pointer-events:none}.vjs-caption-settings{top:1em;opacity:.75;color:#FFF;margin:0 auto;padding:.5em;height:15em;font-family:Arial,Helvetica,sans-serif;font-size:12px;width:40em}.vjs-caption-settings .vjs-tracksettings{top:0;bottom:2em;left:0;right:0;position:absolute;overflow:auto}.vjs-caption-settings .vjs-tracksettings-colors,.vjs-caption-settings .vjs-tracksettings-font{float:left}.vjs-caption-settings .vjs-tracksettings-colors:after,.vjs-caption-settings .vjs-tracksettings-controls:after,.vjs-caption-settings .vjs-tracksettings-font:after{clear:both}.vjs-caption-settings .vjs-tracksettings-controls{position:absolute;bottom:1em;right:1em}.vjs-caption-settings .vjs-tracksetting{margin:5px;padding:3px;min-height:40px}.vjs-caption-settings .vjs-tracksetting label{display:block;width:100px;margin-bottom:5px}.vjs-caption-settings .vjs-tracksetting span{display:inline;margin-left:5px}.vjs-caption-settings .vjs-tracksetting>div{margin-bottom:5px;min-height:20px}.vjs-caption-settings .vjs-tracksetting>div:last-child{margin-bottom:0;padding-bottom:0;min-height:0}.vjs-caption-settings label>input{margin-right:10px}.vjs-caption-settings input[type=button]{width:40px;height:40px}.vjs-hidden{display:none!important}.vjs-lock-showing{display:block!important;opacity:1;visibility:visible}.vjs-no-js{padding:2em;color:#ccc;background-color:#333;font-size:1.8em;font-family:Arial,sans-serif;text-align:center;width:30em;height:15em;margin:0 auto}.vjs-no-js a,.vjs-no-js a:visited{color:#F4A460}@-webkit-keyframes spCircRot{from{-webkit-transform:rotate(0)}to{-webkit-transform:rotate(359deg)}}@keyframes spCircRot{from{transform:rotate(0)}to{transform:rotate(359deg)}}'),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{background-color:#fff;background-color:rgba(255,255,255,.9);bottom:0;height:51px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar *{color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control{top:-5px;background-color:#fff;background-color:rgba(255,255,255,.9)}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{height:42px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control{background-color:#fff}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control:hover{top:-7px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder{margin:0}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{border-radius:0;-moz-border-radius:0;-webkit-border-radius:0}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-load-progress{background-color:#777}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-progress-control .vjs-progress-holder .vjs-play-progress{background-color:#000;box-shadow:0 0 5px rgba(0,0,0,.6);-moz-box-shadow:0 0 5px rgba(0,0,0,.6);-webkit-box-shadow:0 0 5px rgba(0,0,0,.6)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:12px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:11px}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time{margin-left:20px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-right:20px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:22px}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar{height:34px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-play-control:before{font-size:11px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-top:9px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-current-time{margin-left:14px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-duration{margin-right:10px}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button .vjs-menu,.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-menu-button.vjs-volume-menu-button-horizontal .vjs-menu{padding-top:14pxpx}}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-bar{background-color:#555;background-color:rgba(0,0,0,.3)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-volume-bar .vjs-volume-level{background-color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-control-bar .vjs-menu ul.vjs-menu-content li{color:#fff;color:rgba(255,255,255,.8)}.vjs-afterglow-skin.afterglow-skin-light .vjs-control:before{margin-top:5px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar{right:20px;top:16px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar *{color:#000}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{background-color:#fff;background-color:rgba(255,255,255,.9);width:32px;height:32px;border-radius:50px;-moz-border-radius:50px;-webkit-border-radius:50px;margin-left:7px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{margin-top:-1px;font-size:15px;line-height:16px}@media (max-width:768px){.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar{top:14px;right:16px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{width:28px;height:28px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{font-size:14px;line-height:15px;margin-top:-2px}}@media (max-width:512px){.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button{width:24px;height:24px}.vjs-afterglow-skin.afterglow-skin-light .vjs-top-control-bar .vjs-button:before{font-size:12px;line-height:13px;margin-top:0}}.vjs-afterglow-skin.afterglow-skin-light.vjs-youtube.vjs-has-started.vjs-paused .vjs-control-bar{right:0;background-color:#fff}.vjs-afterglow-skin.afterglow-skin-light.vjs-youtube.vjs-has-started.vjs-youtube-headstart .vjs-control-bar{right:0}"),
function(t, e) {
    var o = t.createElement("style");
    if (t.getElementsByTagName("head")[0].appendChild(o), o.styleSheet) o.styleSheet.disabled || (o.styleSheet.cssText = e);
    else try {
        o.innerHTML = e
    } catch (n) {
        o.innerText = e
    }
}(document, ".afterglow-lightbox-wrapper{width:100%;height:100%;position:fixed;top:0;left:0;z-index:999999}.afterglow-lightbox-wrapper .cover{width:100%;height:100%;position:absolute;top:0;left:0;background-color:#000;background-color:rgba(0,0,0,.85)}.afterglow-lightbox-wrapper .afterglow-lightbox{display:block!important;position:absolute;top:0;left:0}.afterglow-lightbox-wrapper .afterglow-lightbox .afterglow-lightboxplayer,.afterglow-lightbox-wrapper .afterglow-lightbox .afterglow-lightboxplayer video{display:block!important}.afterglow-lightbox-wrapper .afterglow-lightbox div.vjs-fullscreen{top:0!important;left:0!important}.afterglow-lightbox-wrapper .afterglow-lightbox .vjs-paused.vjs-ended .vjs-big-play-button{display:block}#afterglow-lightbox-videoel,.afterglow-lightbox-wrapper.hidden,.afterglow-lightboxplayer{display:none}"),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojs = t()
    }
}(function() {
    var t;
    return function e(t, o, n) {
        function r(s, a) {
            if (!o[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var o = t[s][1][e];
                    return r(o ? o : e)
                }, c, c.exports, e, t, o, n)
            }
            return o[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
        return r
    }({
        1: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(2),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        return r(this, e), i(this, t.call(this, o, n))
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-big-play-button"
                    }, e.prototype.handleClick = function() {
                        this.player_.play()
                    }, e
                }(l["default"]);
            p.prototype.controlText_ = "Play Video", c["default"].registerComponent("BigPlayButton", p), o["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        2: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(3),
                l = n(a),
                u = t(5),
                c = n(u),
                p = t(85),
                f = n(p),
                d = t(136),
                h = n(d),
                v = function(t) {
                    function e(o, n) {
                        return r(this, e), i(this, t.call(this, o, n))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "button",
                            e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        e = (0, h["default"])({
                            className: this.buildCSSClass()
                        }, e), "button" !== t && (f["default"].warn("Creating a Button with an HTML element of " + t + " is deprecated; use ClickableComponent instead."), e = (0, h["default"])({
                            tabIndex: 0
                        }, e), o = (0, h["default"])({
                            role: "button"
                        }, o)), o = (0, h["default"])({
                            type: "button",
                            "aria-live": "polite"
                        }, o);
                        var n = c["default"].prototype.createEl.call(this, t, e, o);
                        return this.createControlTextEl(n), n
                    }, e.prototype.addChild = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = this.constructor.name;
                        return f["default"].warn("Adding an actionable (user controllable) child to a Button (" + o + ") is not supported; use a ClickableComponent instead."), c["default"].prototype.addChild.call(this, t, e)
                    }, e.prototype.handleKeyPress = function(e) {
                        32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("Button", v), o["default"] = v
        }, {
            136: 136,
            3: 3,
            5: 5,
            85: 85
        }],
        3: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(81),
                d = n(f),
                h = t(82),
                v = n(h),
                y = t(85),
                g = r(y),
                b = t(92),
                A = r(b),
                m = t(136),
                j = r(m),
                w = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.emitTapEvents(), r.on("tap", r.handleClick), r.on("click", r.handleClick), r.on("focus", r.handleFocus), r.on("blur", r.handleBlur), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        o = (0, j["default"])({
                            className: this.buildCSSClass(),
                            tabIndex: 0
                        }, o), "button" === e && g["default"].error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), n = (0, j["default"])({
                            role: "button",
                            "aria-live": "polite"
                        }, n);
                        var r = t.prototype.createEl.call(this, e, o, n);
                        return this.createControlTextEl(r), r
                    }, e.prototype.createControlTextEl = function(t) {
                        return this.controlTextEl_ = p.createEl("span", {
                            className: "vjs-control-text"
                        }), t && t.appendChild(this.controlTextEl_), this.controlText(this.controlText_, t), this.controlTextEl_
                    }, e.prototype.controlText = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.el();
                        if (!t) return this.controlText_ || "Need Text";
                        var o = this.localize(t);
                        return this.controlText_ = t, this.controlTextEl_.innerHTML = o, e.setAttribute("title", o), this
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-control vjs-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.addChild = function(e) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return t.prototype.addChild.call(this, e, o)
                    }, e.prototype.enable = function() {
                        return this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), this
                    }, e.prototype.disable = function() {
                        return this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), this
                    }, e.prototype.handleClick = function() {}, e.prototype.handleFocus = function() {
                        d.on(A["default"], "keydown", v.bind(this, this.handleKeyPress))
                    }, e.prototype.handleKeyPress = function(e) {
                        32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleClick(e)) : t.prototype.handleKeyPress && t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleBlur = function() {
                        d.off(A["default"], "keydown", v.bind(this, this.handleKeyPress))
                    }, e
                }(u["default"]);
            u["default"].registerComponent("ClickableComponent", w), o["default"] = w
        }, {
            136: 136,
            5: 5,
            80: 80,
            81: 81,
            82: 82,
            85: 85,
            92: 92
        }],
        4: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(2),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.controlText(n && n.controlText || s.localize("Close")), s
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-close-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.trigger({
                            type: "close",
                            bubbles: !1
                        })
                    }, e
                }(l["default"]);
            c["default"].registerComponent("CloseButton", p), o["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        5: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t(93),
                a = r(s),
                l = t(80),
                u = n(l),
                c = t(82),
                p = n(c),
                f = t(84),
                d = n(f),
                h = t(81),
                v = n(h),
                y = t(85),
                g = r(y),
                b = t(89),
                A = r(b),
                m = t(86),
                j = r(m),
                w = function() {
                    function t(e, o, n) {
                        if (i(this, t), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = (0, j["default"])({}, this.options_), o = this.options_ = (0, j["default"])(this.options_, o), this.id_ = o.id || o.el && o.el.id, !this.id_) {
                            var r = e && e.id && e.id() || "no_player";
                            this.id_ = r + "_component_" + d.newGUID()
                        }
                        this.name_ = o.name || null, o.el ? this.el_ = o.el : o.createEl !== !1 && (this.el_ = this.createEl()), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, o.initChildren !== !1 && this.initChildren(), this.ready(n), o.reportTouchActivity !== !1 && this.enableTouchActivity()
                    }
                    return t.prototype.dispose = function() {
                        if (this.trigger({
                                type: "dispose",
                                bubbles: !1
                            }), this.children_)
                            for (var t = this.children_.length - 1; t >= 0; t--) this.children_[t].dispose && this.children_[t].dispose();
                        this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), u.removeElData(this.el_), this.el_ = null
                    }, t.prototype.player = function() {
                        return this.player_
                    }, t.prototype.options = function(t) {
                        return g["default"].warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), t ? (this.options_ = (0, j["default"])(this.options_, t), this.options_) : this.options_
                    }, t.prototype.el = function() {
                        return this.el_
                    }, t.prototype.createEl = function(t, e, o) {
                        return u.createEl(t, e, o)
                    }, t.prototype.localize = function(t) {
                        var e = this.player_.language && this.player_.language(),
                            o = this.player_.languages && this.player_.languages();
                        if (!e || !o) return t;
                        var n = o[e];
                        if (n && n[t]) return n[t];
                        var r = e.split("-")[0],
                            i = o[r];
                        return i && i[t] ? i[t] : t
                    }, t.prototype.contentEl = function() {
                        return this.contentEl_ || this.el_
                    }, t.prototype.id = function() {
                        return this.id_
                    }, t.prototype.name = function() {
                        return this.name_
                    }, t.prototype.children = function() {
                        return this.children_
                    }, t.prototype.getChildById = function(t) {
                        return this.childIndex_[t]
                    }, t.prototype.getChild = function(t) {
                        return this.childNameIndex_[t]
                    }, t.prototype.addChild = function(e) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.children_.length,
                            r = void 0,
                            i = void 0;
                        if ("string" == typeof e) {
                            i = e, o || (o = {}), o === !0 && (g["default"].warn("Initializing a child component with `true` is deprecated. Children should be defined in an array when possible, but if necessary use an object instead of `true`."), o = {});
                            var s = o.componentClass || (0, A["default"])(i);
                            o.name = i;
                            var a = t.getComponent(s);
                            if (!a) throw new Error("Component " + s + " does not exist");
                            if ("function" != typeof a) return null;
                            r = new a(this.player_ || this, o)
                        } else r = e;
                        if (this.children_.splice(n, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), i = i || r.name && r.name(), i && (this.childNameIndex_[i] = r), "function" == typeof r.el && r.el()) {
                            var l = this.contentEl().children,
                                u = l[n] || null;
                            this.contentEl().insertBefore(r.el(), u)
                        }
                        return r
                    }, t.prototype.removeChild = function(t) {
                        if ("string" == typeof t && (t = this.getChild(t)), t && this.children_) {
                            for (var e = !1, o = this.children_.length - 1; o >= 0; o--)
                                if (this.children_[o] === t) {
                                    e = !0, this.children_.splice(o, 1);
                                    break
                                }
                            if (e) {
                                this.childIndex_[t.id()] = null, this.childNameIndex_[t.name()] = null;
                                var n = t.el();
                                n && n.parentNode === this.contentEl() && this.contentEl().removeChild(t.el())
                            }
                        }
                    }, t.prototype.initChildren = function() {
                        var e = this,
                            o = this.options_.children;
                        o && ! function() {
                            var n = e.options_,
                                r = function(t) {
                                    var o = t.name,
                                        r = t.opts;
                                    if (void 0 !== n[o] && (r = n[o]), r !== !1) {
                                        r === !0 && (r = {}), r.playerOptions = e.options_.playerOptions;
                                        var i = e.addChild(o, r);
                                        i && (e[o] = i)
                                    }
                                },
                                i = void 0,
                                s = t.getComponent("Tech");
                            i = Array.isArray(o) ? o : Object.keys(o), i.concat(Object.keys(e.options_).filter(function(t) {
                                return !i.some(function(e) {
                                    return "string" == typeof e ? t === e : t === e.name
                                })
                            })).map(function(t) {
                                var n = void 0,
                                    r = void 0;
                                return "string" == typeof t ? (n = t, r = o[n] || e.options_[n] || {}) : (n = t.name, r = t), {
                                    name: n,
                                    opts: r
                                }
                            }).filter(function(e) {
                                var o = t.getComponent(e.opts.componentClass || (0, A["default"])(e.name));
                                return o && !s.isTech(o)
                            }).forEach(r)
                        }()
                    }, t.prototype.buildCSSClass = function() {
                        return ""
                    }, t.prototype.on = function(t, e, o) {
                        var n = this;
                        return "string" == typeof t || Array.isArray(t) ? v.on(this.el_, t, p.bind(this, e)) : ! function() {
                            var r = t,
                                i = e,
                                s = p.bind(n, o),
                                a = function() {
                                    return n.off(r, i, s)
                                };
                            a.guid = s.guid, n.on("dispose", a);
                            var l = function() {
                                return n.off("dispose", a)
                            };
                            l.guid = s.guid, t.nodeName ? (v.on(r, i, s), v.on(r, "dispose", l)) : "function" == typeof t.on && (r.on(i, s), r.on("dispose", l))
                        }(), this
                    }, t.prototype.off = function(t, e, o) {
                        if (!t || "string" == typeof t || Array.isArray(t)) v.off(this.el_, t, e);
                        else {
                            var n = t,
                                r = e,
                                i = p.bind(this, o);
                            this.off("dispose", i), t.nodeName ? (v.off(n, r, i), v.off(n, "dispose", i)) : (n.off(r, i), n.off("dispose", i))
                        }
                        return this
                    }, t.prototype.one = function(t, e, o) {
                        var n = this,
                            r = arguments;
                        return "string" == typeof t || Array.isArray(t) ? v.one(this.el_, t, p.bind(this, e)) : ! function() {
                            var i = t,
                                s = e,
                                a = p.bind(n, o),
                                l = function u() {
                                    n.off(i, s, u), a.apply(null, r)
                                };
                            l.guid = a.guid, n.on(i, s, l)
                        }(), this
                    }, t.prototype.trigger = function(t, e) {
                        return v.trigger(this.el_, t, e), this
                    }, t.prototype.ready = function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return t && (this.isReady_ ? e ? t.call(this) : this.setTimeout(t, 1) : (this.readyQueue_ = this.readyQueue_ || [], this.readyQueue_.push(t))), this
                    }, t.prototype.triggerReady = function() {
                        this.isReady_ = !0, this.setTimeout(function() {
                            var t = this.readyQueue_;
                            this.readyQueue_ = [], t && t.length > 0 && t.forEach(function(t) {
                                t.call(this)
                            }, this), this.trigger("ready")
                        }, 1)
                    }, t.prototype.$ = function(t, e) {
                        return u.$(t, e || this.contentEl())
                    }, t.prototype.$$ = function(t, e) {
                        return u.$$(t, e || this.contentEl())
                    }, t.prototype.hasClass = function(t) {
                        return u.hasElClass(this.el_, t)
                    }, t.prototype.addClass = function(t) {
                        return u.addElClass(this.el_, t), this
                    }, t.prototype.removeClass = function(t) {
                        return u.removeElClass(this.el_, t), this
                    }, t.prototype.toggleClass = function(t, e) {
                        return u.toggleElClass(this.el_, t, e), this
                    }, t.prototype.show = function() {
                        return this.removeClass("vjs-hidden"), this
                    }, t.prototype.hide = function() {
                        return this.addClass("vjs-hidden"), this
                    }, t.prototype.lockShowing = function() {
                        return this.addClass("vjs-lock-showing"), this
                    }, t.prototype.unlockShowing = function() {
                        return this.removeClass("vjs-lock-showing"), this
                    }, t.prototype.width = function(t, e) {
                        return this.dimension("width", t, e)
                    }, t.prototype.height = function(t, e) {
                        return this.dimension("height", t, e)
                    }, t.prototype.dimensions = function(t, e) {
                        return this.width(t, !0).height(e)
                    }, t.prototype.dimension = function(t, e, o) {
                        if (void 0 !== e) return null !== e && e === e || (e = 0), ("" + e).indexOf("%") !== -1 || ("" + e).indexOf("px") !== -1 ? this.el_.style[t] = e : "auto" === e ? this.el_.style[t] = "" : this.el_.style[t] = e + "px", o || this.trigger("resize"), this;
                        if (!this.el_) return 0;
                        var n = this.el_.style[t],
                            r = n.indexOf("px");
                        return r !== -1 ? parseInt(n.slice(0, r), 10) : parseInt(this.el_["offset" + (0, A["default"])(t)], 10)
                    }, t.prototype.currentDimension = function(t) {
                        var e = 0;
                        if ("width" !== t && "height" !== t) throw new Error("currentDimension only accepts width or height value");
                        if ("function" == typeof a["default"].getComputedStyle) {
                            var o = a["default"].getComputedStyle(this.el_);
                            e = o.getPropertyValue(t) || o[t]
                        } else if (this.el_.currentStyle) {
                            var n = "offset" + (0, A["default"])(t);
                            e = this.el_[n]
                        }
                        return e = parseFloat(e)
                    }, t.prototype.currentDimensions = function() {
                        return {
                            width: this.currentDimension("width"),
                            height: this.currentDimension("height")
                        }
                    }, t.prototype.currentWidth = function() {
                        return this.currentDimension("width")
                    }, t.prototype.currentHeight = function() {
                        return this.currentDimension("height")
                    }, t.prototype.emitTapEvents = function() {
                        var t = 0,
                            e = null,
                            o = 10,
                            n = 200,
                            r = void 0;
                        this.on("touchstart", function(o) {
                            1 === o.touches.length && (e = {
                                pageX: o.touches[0].pageX,
                                pageY: o.touches[0].pageY
                            }, t = (new Date).getTime(), r = !0)
                        }), this.on("touchmove", function(t) {
                            if (t.touches.length > 1) r = !1;
                            else if (e) {
                                var n = t.touches[0].pageX - e.pageX,
                                    i = t.touches[0].pageY - e.pageY,
                                    s = Math.sqrt(n * n + i * i);
                                s > o && (r = !1)
                            }
                        });
                        var i = function() {
                            r = !1
                        };
                        this.on("touchleave", i), this.on("touchcancel", i), this.on("touchend", function(o) {
                            if (e = null, r === !0) {
                                var i = (new Date).getTime() - t;
                                i < n && (o.preventDefault(), this.trigger("tap"))
                            }
                        })
                    }, t.prototype.enableTouchActivity = function() {
                        if (this.player() && this.player().reportUserActivity) {
                            var t = p.bind(this.player(), this.player().reportUserActivity),
                                e = void 0;
                            this.on("touchstart", function() {
                                t(), this.clearInterval(e), e = this.setInterval(t, 250)
                            });
                            var o = function(o) {
                                t(), this.clearInterval(e)
                            };
                            this.on("touchmove", t), this.on("touchend", o), this.on("touchcancel", o)
                        }
                    }, t.prototype.setTimeout = function(t, e) {
                        t = p.bind(this, t);
                        var o = a["default"].setTimeout(t, e),
                            n = function() {
                                this.clearTimeout(o)
                            };
                        return n.guid = "vjs-timeout-" + o, this.on("dispose", n), o
                    }, t.prototype.clearTimeout = function(t) {
                        a["default"].clearTimeout(t);
                        var e = function() {};
                        return e.guid = "vjs-timeout-" + t, this.off("dispose", e), t
                    }, t.prototype.setInterval = function(t, e) {
                        t = p.bind(this, t);
                        var o = a["default"].setInterval(t, e),
                            n = function() {
                                this.clearInterval(o)
                            };
                        return n.guid = "vjs-interval-" + o, this.on("dispose", n), o
                    }, t.prototype.clearInterval = function(t) {
                        a["default"].clearInterval(t);
                        var e = function() {};
                        return e.guid = "vjs-interval-" + t, this.off("dispose", e), t
                    }, t.registerComponent = function(e, o) {
                        return t.components_ || (t.components_ = {}), t.components_[e] = o, o
                    }, t.getComponent = function(e) {
                        return t.components_ && t.components_[e] ? t.components_[e] : a["default"] && a["default"].videojs && a["default"].videojs[e] ? (g["default"].warn("The " + e + " component was added to the videojs object when it should be registered using videojs.registerComponent(name, component)"), a["default"].videojs[e]) : void 0
                    }, t.extend = function(e) {
                        e = e || {}, g["default"].warn("Component.extend({}) has been deprecated, use videojs.extend(Component, {}) instead");
                        var o = e.init || e.init || this.prototype.init || this.prototype.init || function() {},
                            n = function() {
                                o.apply(this, arguments)
                            };
                        n.prototype = Object.create(this.prototype), n.prototype.constructor = n, n.extend = t.extend;
                        for (var r in e) e.hasOwnProperty(r) && (n.prototype[r] = e[r]);
                        return n
                    }, t
                }();
            w.registerComponent("Component", w), o["default"] = w
        }, {
            80: 80,
            81: 81,
            82: 82,
            84: 84,
            85: 85,
            86: 86,
            89: 89,
            93: 93
        }],
        6: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(36),
                l = n(a),
                u = t(5),
                c = n(u),
                p = t(7),
                f = n(p),
                d = function(t) {
                    function e(o) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r(this, e), n.tracks = o.audioTracks && o.audioTracks();
                        var s = i(this, t.call(this, o, n));
                        return s.el_.setAttribute("aria-label", "Audio Menu"), s
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-audio-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createItems = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            e = this.player_.audioTracks && this.player_.audioTracks();
                        if (!e) return t;
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            t.push(new f["default"](this.player_, {
                                track: n,
                                selectable: !0
                            }))
                        }
                        return t
                    }, e
                }(l["default"]);
            d.prototype.controlText_ = "Audio Track", c["default"].registerComponent("AudioTrackButton", d), o["default"] = d
        }, {
            36: 36,
            5: 5,
            7: 7
        }],
        7: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(48),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = n.track,
                            a = o.audioTracks();
                        n.label = r.label || r.language || "Unknown", n.selected = r.enabled;
                        var l = s(this, t.call(this, o, n));
                        return l.track = r, a && ! function() {
                            var t = d.bind(l, l.handleTracksChange);
                            a.addEventListener("change", t), l.on("dispose", function() {
                                a.removeEventListener("change", t)
                            })
                        }(), l
                    }
                    return a(e, t), e.prototype.handleClick = function(e) {
                        var o = this.player_.audioTracks();
                        if (t.prototype.handleClick.call(this, e), o)
                            for (var n = 0; n < o.length; n++) {
                                var r = o[n];
                                r.enabled = r === this.track
                            }
                    }, e.prototype.handleTracksChange = function(t) {
                        this.selected(this.track.enabled)
                    }, e
                }(u["default"]);
            p["default"].registerComponent("AudioTrackMenuItem", h), o["default"] = h
        }, {
            48: 48,
            5: 5,
            82: 82
        }],
        8: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a);
            t(12), t(32), t(33), t(35), t(34), t(10), t(18), t(9), t(38), t(40), t(11), t(25), t(27), t(29), t(24), t(6), t(13), t(21);
            var u = function(t) {
                function e() {
                    return r(this, e), i(this, t.apply(this, arguments))
                }
                return s(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-control-bar",
                        dir: "ltr"
                    }, {
                        role: "group"
                    })
                }, e
            }(l["default"]);
            u.prototype.options_ = {
                children: ["playToggle", "volumeMenuButton", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subtitlesButton", "captionsButton", "audioTrackButton", "fullscreenToggle"]
            }, l["default"].registerComponent("ControlBar", u), o["default"] = u
        }, {
            10: 10,
            11: 11,
            12: 12,
            13: 13,
            18: 18,
            21: 21,
            24: 24,
            25: 25,
            27: 27,
            29: 29,
            32: 32,
            33: 33,
            34: 34,
            35: 35,
            38: 38,
            40: 40,
            5: 5,
            6: 6,
            9: 9
        }],
        9: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(2),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.on(o, "fullscreenchange", s.handleFullscreenChange), s
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-fullscreen-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleFullscreenChange = function() {
                        this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
                    }, e.prototype.handleClick = function() {
                        this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
                    }, e
                }(l["default"]);
            p.prototype.controlText_ = "Fullscreen", c["default"].registerComponent("FullscreenToggle", p), o["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        10: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.updateShowing(), r.on(r.player(), "durationchange", r.updateShowing), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-live-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-live-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE")
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateShowing = function() {
                        this.player().duration() === 1 / 0 ? this.show() : this.hide()
                    }, e
                }(u["default"]);
            u["default"].registerComponent("LiveDisplay", f),
                o["default"] = f
        }, {
            5: 5,
            80: 80
        }],
        11: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(2),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(80),
                d = n(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.on(o, "volumechange", r.update), o.tech_ && o.tech_.featuresVolumeControl === !1 && r.addClass("vjs-hidden"), r.on(o, "loadstart", function() {
                            this.update(), o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }), r
                    }
                    return a(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-mute-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.muted(!this.player_.muted())
                    }, e.prototype.update = function() {
                        var t = this.player_.volume(),
                            e = 3;
                        0 === t || this.player_.muted() ? e = 0 : t < .33 ? e = 1 : t < .67 && (e = 2);
                        var o = this.player_.muted() ? "Unmute" : "Mute";
                        this.controlText() !== o && this.controlText(o);
                        for (var n = 0; n < 4; n++) d.removeElClass(this.el_, "vjs-vol-" + n);
                        d.addElClass(this.el_, "vjs-vol-" + e)
                    }, e
                }(u["default"]);
            h.prototype.controlText_ = "Mute", p["default"].registerComponent("MuteToggle", h), o["default"] = h
        }, {
            2: 2,
            5: 5,
            80: 80
        }],
        12: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(2),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.on(o, "play", s.handlePlay), s.on(o, "pause", s.handlePause), s
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-play-control " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e.prototype.handlePlay = function() {
                        this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
                    }, e.prototype.handlePause = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
                    }, e
                }(l["default"]);
            p.prototype.controlText_ = "Play", c["default"].registerComponent("PlayToggle", p), o["default"] = p
        }, {
            2: 2,
            5: 5
        }],
        13: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(47),
                u = r(l),
                c = t(49),
                p = r(c),
                f = t(14),
                d = r(f),
                h = t(5),
                v = r(h),
                y = t(80),
                g = n(y),
                b = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.updateVisibility(), r.updateLabel(), r.on(o, "loadstart", r.updateVisibility), r.on(o, "ratechange", r.updateLabel), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this);
                        return this.labelEl_ = g.createEl("div", {
                            className: "vjs-playback-rate-value",
                            innerHTML: 1
                        }), e.appendChild(this.labelEl_), e
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-playback-rate " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createMenu = function() {
                        var t = new p["default"](this.player()),
                            e = this.playbackRates();
                        if (e)
                            for (var o = e.length - 1; o >= 0; o--) t.addChild(new d["default"](this.player(), {
                                rate: e[o] + "x"
                            }));
                        return t
                    }, e.prototype.updateARIAAttributes = function() {
                        this.el().setAttribute("aria-valuenow", this.player().playbackRate())
                    }, e.prototype.handleClick = function() {
                        for (var t = this.player().playbackRate(), e = this.playbackRates(), o = e[0], n = 0; n < e.length; n++)
                            if (e[n] > t) {
                                o = e[n];
                                break
                            }
                        this.player().playbackRate(o)
                    }, e.prototype.playbackRates = function() {
                        return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
                    }, e.prototype.playbackRateSupported = function() {
                        return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && this.playbackRates().length > 0
                    }, e.prototype.updateVisibility = function() {
                        this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
                    }, e.prototype.updateLabel = function() {
                        this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
                    }, e
                }(u["default"]);
            b.prototype.controlText_ = "Playback Rate", v["default"].registerComponent("PlaybackRateMenuButton", b), o["default"] = b
        }, {
            14: 14,
            47: 47,
            49: 49,
            5: 5,
            80: 80
        }],
        14: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(48),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = n.rate,
                            a = parseFloat(s, 10);
                        n.label = s, n.selected = 1 === a;
                        var l = i(this, t.call(this, o, n));
                        return l.label = s, l.rate = a, l.on(o, "ratechange", l.update), l
                    }
                    return s(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
                    }, e.prototype.update = function() {
                        this.selected(this.player().playbackRate() === this.rate)
                    }, e
                }(l["default"]);
            p.prototype.contentElType = "button", c["default"].registerComponent("PlaybackRateMenuItem", p), o["default"] = p
        }, {
            48: 48,
            5: 5
        }],
        15: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.partEls_ = [], r.on(o, "progress", r.update), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-load-progress",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
                        })
                    }, e.prototype.update = function() {
                        var t = this.player_.buffered(),
                            e = this.player_.duration(),
                            o = this.player_.bufferedEnd(),
                            n = this.partEls_,
                            r = function(t, e) {
                                var o = t / e || 0;
                                return 100 * (o >= 1 ? 1 : o) + "%"
                            };
                        this.el_.style.width = r(o, e);
                        for (var i = 0; i < t.length; i++) {
                            var s = t.start(i),
                                a = t.end(i),
                                l = n[i];
                            l || (l = this.el_.appendChild(p.createEl()), n[i] = l), l.style.left = r(s, o), l.style.width = r(a - s, o)
                        }
                        for (var u = n.length; u > t.length; u--) this.el_.removeChild(n[u - 1]);
                        n.length = t.length
                    }, e
                }(u["default"]);
            u["default"].registerComponent("LoadProgressBar", f), o["default"] = f
        }, {
            5: 5,
            80: 80
        }],
        16: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(93),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(80),
                d = n(f),
                h = t(82),
                v = n(h),
                y = t(83),
                g = r(y),
                b = t(98),
                A = r(b),
                m = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (r.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), r.keepTooltipsInside && (r.tooltip = d.createEl("div", {
                            className: "vjs-time-tooltip"
                        }), r.el().appendChild(r.tooltip), r.addClass("vjs-keep-tooltips-inside")), r.update(0, 0), o.on("ready", function() {
                            r.on(o.controlBar.progressControl.el(), "mousemove", (0, A["default"])(v.bind(r, r.handleMouseMove), 25))
                        }), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-mouse-display"
                        })
                    }, e.prototype.handleMouseMove = function(t) {
                        var e = this.player_.duration(),
                            o = this.calculateDistance(t) * e,
                            n = t.pageX - d.findElPosition(this.el().parentNode).left;
                        this.update(o, n)
                    }, e.prototype.update = function(t, e) {
                        var o = (0, g["default"])(t, this.player_.duration());
                        if (this.el().style.left = e + "px", this.el().setAttribute("data-current-time", o), this.keepTooltipsInside) {
                            var n = this.clampPosition_(e),
                                r = e - n + 1,
                                i = parseFloat(u["default"].getComputedStyle(this.tooltip).width),
                                s = i / 2;
                            this.tooltip.innerHTML = o, this.tooltip.style.right = "-" + (s - r) + "px"
                        }
                    }, e.prototype.calculateDistance = function(t) {
                        return d.getPointerPosition(this.el().parentNode, t).x
                    }, e.prototype.clampPosition_ = function(t) {
                        if (!this.keepTooltipsInside) return t;
                        var e = parseFloat(u["default"].getComputedStyle(this.player().el()).width),
                            o = parseFloat(u["default"].getComputedStyle(this.tooltip).width),
                            n = o / 2,
                            r = t;
                        return t < n ? r = Math.ceil(n) : t > e - n && (r = Math.floor(e - n)), r
                    }, e
                }(p["default"]);
            p["default"].registerComponent("MouseTimeDisplay", m), o["default"] = m
        }, {
            5: 5,
            80: 80,
            82: 82,
            83: 83,
            93: 93,
            98: 98
        }],
        17: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(82),
                p = n(c),
                f = t(83),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.updateDataAttr(), r.on(o, "timeupdate", r.updateDataAttr), o.ready(p.bind(r, r.updateDataAttr)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (r.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), r.keepTooltipsInside && r.addClass("vjs-keep-tooltips-inside"), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-play-progress vjs-slider-bar",
                            innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        })
                    }, e.prototype.updateDataAttr = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                        this.el_.setAttribute("data-current-time", (0, d["default"])(t, this.player_.duration()))
                    }, e
                }(u["default"]);
            u["default"].registerComponent("PlayProgressBar", h), o["default"] = h
        }, {
            5: 5,
            82: 82,
            83: 83
        }],
        18: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a);
            t(19), t(16);
            var u = function(t) {
                function e() {
                    return r(this, e), i(this, t.apply(this, arguments))
                }
                return s(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-control vjs-control"
                    })
                }, e
            }(l["default"]);
            u.prototype.options_ = {
                children: ["seekBar"]
            }, l["default"].registerComponent("ProgressControl", u), o["default"] = u
        }, {
            16: 16,
            19: 19,
            5: 5
        }],
        19: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(93),
                u = r(l),
                c = t(57),
                p = r(c),
                f = t(5),
                d = r(f),
                h = t(82),
                v = n(h),
                y = t(83),
                g = r(y);
            t(15), t(17), t(20);
            var b = function(t) {
                function e(o, n) {
                    i(this, e);
                    var r = s(this, t.call(this, o, n));
                    return r.on(o, "timeupdate", r.updateProgress), r.on(o, "ended", r.updateProgress), o.ready(v.bind(r, r.updateProgress)), n.playerOptions && n.playerOptions.controlBar && n.playerOptions.controlBar.progressControl && n.playerOptions.controlBar.progressControl.keepTooltipsInside && (r.keepTooltipsInside = n.playerOptions.controlBar.progressControl.keepTooltipsInside), r.keepTooltipsInside && (r.tooltipProgressBar = r.addChild("TooltipProgressBar")), r
                }
                return a(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-progress-holder"
                    }, {
                        "aria-label": "progress bar"
                    })
                }, e.prototype.updateProgress = function() {
                    if (this.updateAriaAttributes(this.el_), this.keepTooltipsInside) {
                        this.updateAriaAttributes(this.tooltipProgressBar.el_), this.tooltipProgressBar.el_.style.width = this.bar.el_.style.width;
                        var t = parseFloat(u["default"].getComputedStyle(this.player().el()).width),
                            e = parseFloat(u["default"].getComputedStyle(this.tooltipProgressBar.tooltip).width),
                            o = this.tooltipProgressBar.el().style;
                        o.maxWidth = Math.floor(t - e / 2) + "px", o.minWidth = Math.ceil(e / 2) + "px", o.right = "-" + e / 2 + "px"
                    }
                }, e.prototype.updateAriaAttributes = function(t) {
                    var e = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
                    t.setAttribute("aria-valuenow", (100 * this.getPercent()).toFixed(2)), t.setAttribute("aria-valuetext", (0, g["default"])(e, this.player_.duration()))
                }, e.prototype.getPercent = function() {
                    var t = this.player_.currentTime() / this.player_.duration();
                    return t >= 1 ? 1 : t
                }, e.prototype.handleMouseDown = function(e) {
                    t.prototype.handleMouseDown.call(this, e), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
                }, e.prototype.handleMouseMove = function(t) {
                    var e = this.calculateDistance(t) * this.player_.duration();
                    e === this.player_.duration() && (e -= .1), this.player_.currentTime(e)
                }, e.prototype.handleMouseUp = function(e) {
                    t.prototype.handleMouseUp.call(this, e), this.player_.scrubbing(!1), this.videoWasPlaying && this.player_.play()
                }, e.prototype.stepForward = function() {
                    this.player_.currentTime(this.player_.currentTime() + 5)
                }, e.prototype.stepBack = function() {
                    this.player_.currentTime(this.player_.currentTime() - 5)
                }, e
            }(p["default"]);
            b.prototype.options_ = {
                children: ["loadProgressBar", "mouseTimeDisplay", "playProgressBar"],
                barName: "playProgressBar"
            }, b.prototype.playerEvent = "timeupdate", d["default"].registerComponent("SeekBar", b), o["default"] = b
        }, {
            15: 15,
            17: 17,
            20: 20,
            5: 5,
            57: 57,
            82: 82,
            83: 83,
            93: 93
        }],
        20: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(82),
                p = n(c),
                f = t(83),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.updateDataAttr(), r.on(o, "timeupdate", r.updateDataAttr), o.ready(p.bind(r, r.updateDataAttr)), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-tooltip-progress-bar vjs-slider-bar",
                            innerHTML: '<div class="vjs-time-tooltip"></div>\n        <span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
                        });
                        return this.tooltip = e.querySelector(".vjs-time-tooltip"), e
                    }, e.prototype.updateDataAttr = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            e = (0, d["default"])(t, this.player_.duration());
                        this.el_.setAttribute("data-current-time", e), this.tooltip.innerHTML = e
                    }, e
                }(u["default"]);
            u["default"].registerComponent("TooltipProgressBar", h), o["default"] = h
        }, {
            5: 5,
            82: 82,
            83: 83
        }],
        21: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(22),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e() {
                        return r(this, e), i(this, t.apply(this, arguments))
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, {
                            className: this.buildCSSClass()
                        });
                        return e.innerHTML = "&nbsp;", e
                    }, e
                }(l["default"]);
            c["default"].registerComponent("CustomControlSpacer", p), o["default"] = p
        }, {
            22: 22,
            5: 5
        }],
        22: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = function(t) {
                    function e() {
                        return r(this, e), i(this, t.apply(this, arguments))
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-spacer " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e
                }(l["default"]);
            l["default"].registerComponent("Spacer", u), o["default"] = u
        }, {
            5: 5
        }],
        23: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(31),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e), n.track = {
                            player: o,
                            kind: n.kind,
                            label: n.kind + " settings",
                            selectable: !1,
                            "default": !1,
                            mode: "disabled"
                        }, n.selectable = !1;
                        var s = i(this, t.call(this, o, n));
                        return s.addClass("vjs-texttrack-settings"), s.controlText(", opens " + n.kind + " settings dialog"), s
                    }
                    return s(e, t), e.prototype.handleClick = function() {
                        this.player().getChild("textTrackSettings").show(), this.player().getChild("textTrackSettings").el_.focus()
                    }, e
                }(l["default"]);
            c["default"].registerComponent("CaptionSettingsMenuItem", p), o["default"] = p
        }, {
            31: 31,
            5: 5
        }],
        24: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(30),
                l = n(a),
                u = t(5),
                c = n(u),
                p = t(23),
                f = n(p),
                d = function(t) {
                    function e(o, n, s) {
                        r(this, e);
                        var a = i(this, t.call(this, o, n, s));
                        return a.el_.setAttribute("aria-label", "Captions Menu"), a
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-captions-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.update = function() {
                        var e = 2;
                        t.prototype.update.call(this), this.player().tech_ && this.player().tech_.featuresNativeTextTracks && (e = 1), this.items && this.items.length > e ? this.show() : this.hide()
                    }, e.prototype.createItems = function() {
                        var e = [];
                        return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || e.push(new f["default"](this.player_, {
                            kind: this.kind_
                        })), t.prototype.createItems.call(this, e)
                    }, e
                }(l["default"]);
            d.prototype.kind_ = "captions", d.prototype.controlText_ = "Captions", c["default"].registerComponent("CaptionsButton", d), o["default"] = d
        }, {
            23: 23,
            30: 30,
            5: 5
        }],
        25: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(30),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(31),
                d = r(f),
                h = t(26),
                v = r(h),
                y = t(49),
                g = r(y),
                b = t(80),
                A = n(b),
                m = t(89),
                j = r(m),
                w = function(t) {
                    function e(o, n, r) {
                        i(this, e);
                        var a = s(this, t.call(this, o, n, r));
                        return a.el_.setAttribute("aria-label", "Chapters Menu"), a
                    }
                    return a(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-chapters-button " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.createItems = function() {
                        var t = [],
                            e = this.player_.textTracks();
                        if (!e) return t;
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.kind === this.kind_ && t.push(new d["default"](this.player_, {
                                track: n
                            }))
                        }
                        return t
                    }, e.prototype.createMenu = function() {
                        for (var t = this, e = this.player_.textTracks() || [], o = void 0, n = this.items || [], r = e.length - 1; r >= 0; r--) {
                            var i = e[r];
                            if (i.kind === this.kind_) {
                                o = i;
                                break
                            }
                        }
                        var s = this.menu;
                        if (void 0 === s) {
                            s = new g["default"](this.player_);
                            var a = A.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: (0, j["default"])(this.kind_),
                                tabIndex: -1
                            });
                            s.children_.unshift(a), A.insertElFirst(a, s.contentEl())
                        } else n.forEach(function(t) {
                            return s.removeChild(t)
                        }), n = [];
                        if (o && (null === o.cues || void 0 === o.cues)) {
                            o.mode = "hidden";
                            var l = this.player_.remoteTextTrackEls().getTrackElementByTrack_(o);
                            l && l.addEventListener("load", function(e) {
                                return t.update()
                            })
                        }
                        if (o && o.cues && o.cues.length > 0)
                            for (var u = o.cues, c = 0, p = u.length; c < p; c++) {
                                var f = u[c],
                                    d = new v["default"](this.player_, {
                                        cue: f,
                                        track: o
                                    });
                                n.push(d), s.addChild(d)
                            }
                        return n.length > 0 && this.show(), this.items = n, s
                    }, e
                }(u["default"]);
            w.prototype.kind_ = "chapters", w.prototype.controlText_ = "Chapters", p["default"].registerComponent("ChaptersButton", w), o["default"] = w
        }, {
            26: 26,
            30: 30,
            31: 31,
            49: 49,
            5: 5,
            80: 80,
            89: 89
        }],
        26: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(48),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = n.track,
                            a = n.cue,
                            l = o.currentTime();
                        n.label = a.text, n.selected = a.startTime <= l && l < a.endTime;
                        var u = s(this, t.call(this, o, n));
                        return u.track = r, u.cue = a, r.addEventListener("cuechange", d.bind(u, u.update)), u
                    }
                    return a(e, t), e.prototype.handleClick = function() {
                        t.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
                    }, e.prototype.update = function() {
                        var t = this.cue,
                            e = this.player_.currentTime();
                        this.selected(t.startTime <= e && e < t.endTime)
                    }, e
                }(u["default"]);
            p["default"].registerComponent("ChaptersTrackMenuItem", h), o["default"] = h
        }, {
            48: 48,
            5: 5,
            82: 82
        }],
        27: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(30),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = function(t) {
                    function e(o, n, r) {
                        i(this, e);
                        var a = s(this, t.call(this, o, n, r));
                        a.el_.setAttribute("aria-label", "Descriptions Menu");
                        var l = o.textTracks();
                        return l && ! function() {
                            var t = d.bind(a, a.handleTracksChange);
                            l.addEventListener("change", t), a.on("dispose", function() {
                                l.removeEventListener("change", t)
                            })
                        }(), a
                    }
                    return a(e, t), e.prototype.handleTracksChange = function(t) {
                        for (var e = this.player().textTracks(), o = !1, n = 0, r = e.length; n < r; n++) {
                            var i = e[n];
                            if (i.kind !== this.kind_ && "showing" === i.mode) {
                                o = !0;
                                break
                            }
                        }
                        o ? this.disable() : this.enable()
                    }, e.prototype.buildCSSClass = function() {
                        return "vjs-descriptions-button " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(u["default"]);
            h.prototype.kind_ = "descriptions", h.prototype.controlText_ = "Descriptions", p["default"].registerComponent("DescriptionsButton", h), o["default"] = h
        }, {
            30: 30,
            5: 5,
            82: 82
        }],
        28: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(31),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n) {
                        r(this, e), n.track = {
                            player: o,
                            kind: n.kind,
                            label: n.kind + " off",
                            "default": !1,
                            mode: "disabled"
                        }, n.selectable = !0;
                        var s = i(this, t.call(this, o, n));
                        return s.selected(!0), s
                    }
                    return s(e, t), e.prototype.handleTracksChange = function(t) {
                        for (var e = this.player().textTracks(), o = !0, n = 0, r = e.length; n < r; n++) {
                            var i = e[n];
                            if (i.kind === this.track.kind && "showing" === i.mode) {
                                o = !1;
                                break
                            }
                        }
                        this.selected(o)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("OffTextTrackMenuItem", p), o["default"] = p
        }, {
            31: 31,
            5: 5
        }],
        29: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(30),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o, n, s) {
                        r(this, e);
                        var a = i(this, t.call(this, o, n, s));
                        return a.el_.setAttribute("aria-label", "Subtitles Menu"), a
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-subtitles-button " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(l["default"]);
            p.prototype.kind_ = "subtitles", p.prototype.controlText_ = "Subtitles", c["default"].registerComponent("SubtitlesButton", p), o["default"] = p
        }, {
            30: 30,
            5: 5
        }],
        30: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(36),
                l = n(a),
                u = t(5),
                c = n(u),
                p = t(31),
                f = n(p),
                d = t(28),
                h = n(d),
                v = function(t) {
                    function e(o) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return r(this, e), n.tracks = o.textTracks(), i(this, t.call(this, o, n))
                    }
                    return s(e, t), e.prototype.createItems = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        t.push(new h["default"](this.player_, {
                            kind: this.kind_
                        }));
                        var e = this.player_.textTracks();
                        if (!e) return t;
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.kind === this.kind_ && t.push(new f["default"](this.player_, {
                                track: n,
                                selectable: !0
                            }))
                        }
                        return t
                    }, e
                }(l["default"]);
            c["default"].registerComponent("TextTrackButton", v), o["default"] = v
        }, {
            28: 28,
            31: 31,
            36: 36,
            5: 5
        }],
        31: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                u = t(48),
                c = r(u),
                p = t(5),
                f = r(p),
                d = t(82),
                h = n(d),
                v = t(93),
                y = r(v),
                g = t(92),
                b = r(g),
                A = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = n.track,
                            a = o.textTracks();
                        n.label = r.label || r.language || "Unknown", n.selected = r["default"] || "showing" === r.mode;
                        var u = s(this, t.call(this, o, n));
                        return u.track = r, a && ! function() {
                            var t = h.bind(u, u.handleTracksChange);
                            a.addEventListener("change", t), u.on("dispose", function() {
                                a.removeEventListener("change", t)
                            })
                        }(), a && void 0 === a.onchange && ! function() {
                            var t = void 0;
                            u.on(["tap", "click"], function() {
                                if ("object" !== l(y["default"].Event)) try {
                                    t = new y["default"].Event("change")
                                } catch (e) {}
                                t || (t = b["default"].createEvent("Event"), t.initEvent("change", !0, !0)), a.dispatchEvent(t)
                            })
                        }(), u
                    }
                    return a(e, t), e.prototype.handleClick = function(e) {
                        var o = this.track.kind,
                            n = this.player_.textTracks();
                        if (t.prototype.handleClick.call(this, e), n)
                            for (var r = 0; r < n.length; r++) {
                                var i = n[r];
                                i.kind === o && (i === this.track ? i.mode = "showing" : i.mode = "disabled")
                            }
                    }, e.prototype.handleTracksChange = function(t) {
                        this.selected("showing" === this.track.mode)
                    }, e
                }(c["default"]);
            f["default"].registerComponent("TextTrackMenuItem", A), o["default"] = A
        }, {
            48: 48,
            5: 5,
            82: 82,
            92: 92,
            93: 93
        }],
        32: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(83),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.on(o, "timeupdate", r.updateContent), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-current-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-current-time-display",
                            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00'
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime(),
                            e = this.localize("Current Time"),
                            o = (0, d["default"])(t, this.player_.duration());
                        o !== this.formattedTime_ && (this.formattedTime_ = o, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + o)
                    }, e
                }(u["default"]);
            u["default"].registerComponent("CurrentTimeDisplay", h), o["default"] = h
        }, {
            5: 5,
            80: 80,
            83: 83
        }],
        33: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(83),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.on(o, "durationchange", r.updateContent), r.on(o, "timeupdate", r.updateContent), r.on(o, "loadedmetadata", r.updateContent), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-duration vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-duration-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        var t = this.player_.duration();
                        if (t && this.duration_ !== t) {
                            this.duration_ = t;
                            var e = this.localize("Duration Time"),
                                o = (0, d["default"])(t);
                            this.contentEl_.innerHTML = '<span class="vjs-control-text">' + e + "</span> " + o
                        }
                    }, e
                }(u["default"]);
            u["default"].registerComponent("DurationDisplay", h), o["default"] = h
        }, {
            5: 5,
            80: 80,
            83: 83
        }],
        34: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(83),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.on(o, "timeupdate", r.updateContent), r.on(o, "durationchange", r.updateContent), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = t.prototype.createEl.call(this, "div", {
                            className: "vjs-remaining-time vjs-time-control vjs-control"
                        });
                        return this.contentEl_ = p.createEl("div", {
                            className: "vjs-remaining-time-display",
                            innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00"
                        }, {
                            "aria-live": "off"
                        }), e.appendChild(this.contentEl_), e
                    }, e.prototype.updateContent = function() {
                        if (this.player_.duration()) {
                            var t = this.localize("Remaining Time"),
                                e = (0, d["default"])(this.player_.remainingTime());
                            e !== this.formattedTime_ && (this.formattedTime_ = e, this.contentEl_.innerHTML = '<span class="vjs-control-text">' + t + "</span> -" + e)
                        }
                    }, e
                }(u["default"]);
            u["default"].registerComponent("RemainingTimeDisplay", h), o["default"] = h
        }, {
            5: 5,
            80: 80,
            83: 83
        }],
        35: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = function(t) {
                    function e() {
                        return r(this, e), i(this, t.apply(this, arguments))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-time-control vjs-time-divider",
                            innerHTML: "<div><span>/</span></div>"
                        })
                    }, e
                }(l["default"]);
            l["default"].registerComponent("TimeDivider", u), o["default"] = u
        }, {
            5: 5
        }],
        36: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(47),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = n.tracks,
                            a = s(this, t.call(this, o, n));
                        if (a.items.length <= 1 && a.hide(), !r) return s(a);
                        var l = d.bind(a, a.update);
                        return r.addEventListener("removetrack", l), r.addEventListener("addtrack", l), a.player_.on("dispose", function() {
                            r.removeEventListener("removetrack", l), r.removeEventListener("addtrack", l)
                        }), a
                    }
                    return a(e, t), e
                }(u["default"]);
            p["default"].registerComponent("TrackButton", h), o["default"] = h
        }, {
            47: 47,
            5: 5,
            82: 82
        }],
        37: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(57),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f);
            t(39);
            var h = function(t) {
                function e(o, n) {
                    i(this, e);
                    var r = s(this, t.call(this, o, n));
                    return r.on(o, "volumechange", r.updateARIAAttributes), o.ready(d.bind(r, r.updateARIAAttributes)), r
                }
                return a(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-bar vjs-slider-bar"
                    }, {
                        "aria-label": "volume level"
                    })
                }, e.prototype.handleMouseMove = function(t) {
                    this.checkMuted(), this.player_.volume(this.calculateDistance(t))
                }, e.prototype.checkMuted = function() {
                    this.player_.muted() && this.player_.muted(!1)
                }, e.prototype.getPercent = function() {
                    return this.player_.muted() ? 0 : this.player_.volume()
                }, e.prototype.stepForward = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
                }, e.prototype.stepBack = function() {
                    this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
                }, e.prototype.updateARIAAttributes = function() {
                    var t = (100 * this.player_.volume()).toFixed(2);
                    this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
                }, e
            }(u["default"]);
            h.prototype.options_ = {
                children: ["volumeLevel"],
                barName: "volumeLevel"
            }, h.prototype.playerEvent = "volumechange", p["default"].registerComponent("VolumeBar", h), o["default"] = h
        }, {
            39: 39,
            5: 5,
            57: 57,
            82: 82
        }],
        38: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a);
            t(37);
            var u = function(t) {
                function e(o, n) {
                    r(this, e);
                    var s = i(this, t.call(this, o, n));
                    return o.tech_ && o.tech_.featuresVolumeControl === !1 && s.addClass("vjs-hidden"), s.on(o, "loadstart", function() {
                        o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                    }), s
                }
                return s(e, t), e.prototype.createEl = function() {
                    return t.prototype.createEl.call(this, "div", {
                        className: "vjs-volume-control vjs-control"
                    })
                }, e
            }(l["default"]);
            u.prototype.options_ = {
                children: ["volumeBar"]
            }, l["default"].registerComponent("VolumeControl", u), o["default"] = u
        }, {
            37: 37,
            5: 5
        }],
        39: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = function(t) {
                    function e() {
                        return r(this, e), i(this, t.apply(this, arguments))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-volume-level",
                            innerHTML: '<span class="vjs-control-text"></span>'
                        })
                    }, e
                }(l["default"]);
            l["default"].registerComponent("VolumeLevel", u), o["default"] = u
        }, {
            5: 5
        }],
        40: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(82),
                u = r(l),
                c = t(5),
                p = n(c),
                f = t(54),
                d = n(f),
                h = t(53),
                v = n(h),
                y = t(11),
                g = n(y),
                b = t(37),
                A = n(b),
                m = function(t) {
                    function e(o) {
                        function n() {
                            o.tech_ && o.tech_.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
                        }
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e), void 0 === r.inline && (r.inline = !0), void 0 === r.vertical && (r.inline ? r.vertical = !1 : r.vertical = !0), r.volumeBar = r.volumeBar || {}, r.volumeBar.vertical = !!r.vertical;
                        var a = s(this, t.call(this, o, r));
                        return a.on(o, "volumechange", a.volumeUpdate), a.on(o, "loadstart", a.volumeUpdate), n.call(a), a.on(o, "loadstart", n), a.on(a.volumeBar, ["slideractive", "focus"], function() {
                            this.addClass("vjs-slider-active")
                        }), a.on(a.volumeBar, ["sliderinactive", "blur"], function() {
                            this.removeClass("vjs-slider-active")
                        }), a.on(a.volumeBar, ["focus"], function() {
                            this.addClass("vjs-lock-showing")
                        }), a.on(a.volumeBar, ["blur"], function() {
                            this.removeClass("vjs-lock-showing")
                        }), a
                    }
                    return a(e, t), e.prototype.buildCSSClass = function() {
                        var e = "";
                        return e = this.options_.vertical ? "vjs-volume-menu-button-vertical" : "vjs-volume-menu-button-horizontal", "vjs-volume-menu-button " + t.prototype.buildCSSClass.call(this) + " " + e
                    }, e.prototype.createPopup = function() {
                        var t = new d["default"](this.player_, {
                                contentElType: "div"
                            }),
                            e = new A["default"](this.player_, this.options_.volumeBar);
                        return t.addChild(e), this.menuContent = t, this.volumeBar = e, this.attachVolumeBarEvents(), t
                    }, e.prototype.handleClick = function() {
                        g["default"].prototype.handleClick.call(this), t.prototype.handleClick.call(this)
                    }, e.prototype.attachVolumeBarEvents = function() {
                        this.menuContent.on(["mousedown", "touchdown"], u.bind(this, this.handleMouseDown))
                    }, e.prototype.handleMouseDown = function(t) {
                        this.on(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove)), this.on(this.el_.ownerDocument, ["mouseup", "touchend"], this.handleMouseUp)
                    }, e.prototype.handleMouseUp = function(t) {
                        this.off(["mousemove", "touchmove"], u.bind(this.volumeBar, this.volumeBar.handleMouseMove))
                    }, e
                }(v["default"]);
            m.prototype.volumeUpdate = g["default"].prototype.update, m.prototype.controlText_ = "Mute", p["default"].registerComponent("VolumeMenuButton", m), o["default"] = m
        }, {
            11: 11,
            37: 37,
            5: 5,
            53: 53,
            54: 54,
            82: 82
        }],
        41: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = t(50),
                c = n(u),
                p = t(86),
                f = n(p),
                d = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.on(o, "error", s.open), s
                    }
                    return s(e, t), e.prototype.buildCSSClass = function() {
                        return "vjs-error-display " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.content = function() {
                        var t = this.player().error();
                        return t ? this.localize(t.message) : ""
                    }, e
                }(c["default"]);
            d.prototype.options_ = (0, f["default"])(c["default"].prototype.options_, {
                fillAlways: !0,
                temporary: !1,
                uncloseable: !0
            }), l["default"].registerComponent("ErrorDisplay", d), o["default"] = d
        }, {
            5: 5,
            50: 50,
            86: 86
        }],
        42: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }
            o.__esModule = !0;
            var r = t(81),
                i = n(r),
                s = function() {};
            s.prototype.allowedEvents_ = {}, s.prototype.on = function(t, e) {
                var o = this.addEventListener;
                this.addEventListener = function() {}, i.on(this, t, e), this.addEventListener = o
            }, s.prototype.addEventListener = s.prototype.on, s.prototype.off = function(t, e) {
                i.off(this, t, e)
            }, s.prototype.removeEventListener = s.prototype.off, s.prototype.one = function(t, e) {
                var o = this.addEventListener;
                this.addEventListener = function() {}, i.one(this, t, e), this.addEventListener = o
            }, s.prototype.trigger = function(t) {
                var e = t.type || t;
                "string" == typeof t && (t = {
                    type: e
                }), t = i.fixEvent(t), this.allowedEvents_[e] && this["on" + e] && this["on" + e](t), i.trigger(this, t)
            }, s.prototype.dispatchEvent = s.prototype.trigger, o["default"] = s
        }, {
            81: 81
        }],
        43: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = t(85),
                s = n(i),
                a = function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof e ? "undefined" : r(e)));
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (t.super_ = e)
                },
                l = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = function() {
                            t.apply(this, arguments)
                        },
                        n = {};
                    "object" === ("undefined" == typeof e ? "undefined" : r(e)) ? ("function" == typeof e.init && (s["default"].warn("Constructor logic via init() is deprecated; please use constructor() instead."), e.constructor = e.init), e.constructor !== Object.prototype.constructor && (o = e.constructor), n = e) : "function" == typeof e && (o = e), a(o, t);
                    for (var i in n) n.hasOwnProperty(i) && (o.prototype[i] = n[i]);
                    return o
                };
            o["default"] = l
        }, {
            85: 85
        }],
        44: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            for (var r = t(92), i = n(r), s = {}, a = [
                    ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
                    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
                    ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
                    ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
                ], l = a[0], u = void 0, c = 0; c < a.length; c++)
                if (a[c][1] in i["default"]) {
                    u = a[c];
                    break
                }
            if (u)
                for (var p = 0; p < u.length; p++) s[l[p]] = u[p];
            o["default"] = s
        }, {
            92: 92
        }],
        45: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = function(t) {
                    function e() {
                        return r(this, e), i(this, t.apply(this, arguments))
                    }
                    return s(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-loading-spinner",
                            dir: "ltr"
                        })
                    }, e
                }(l["default"]);
            l["default"].registerComponent("LoadingSpinner", u), o["default"] = u
        }, {
            5: 5
        }],
        46: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                return t instanceof r ? t : ("number" == typeof t ? this.code = t : "string" == typeof t ? this.message = t : "object" === ("undefined" == typeof t ? "undefined" : i(t)) && ("number" == typeof t.code && (this.code = t.code), (0, a["default"])(this, t)), void(this.message || (this.message = r.defaultMessages[this.code] || "")))
            }
            o.__esModule = !0;
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                s = t(136),
                a = n(s);
            r.prototype.code = 0, r.prototype.message = "", r.prototype.status = null, r.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], r.defaultMessages = {
                1: "You aborted the media playback",
                2: "A network error caused the media download to fail part-way.",
                3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
                4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
                5: "The media is encrypted and we do not have the keys to decrypt it."
            };
            for (var l = 0; l < r.errorTypes.length; l++) r[r.errorTypes[l]] = l, r.prototype[r.errorTypes[l]] = l;
            o["default"] = r
        }, {
            136: 136
        }],
        47: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(3),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(49),
                d = r(f),
                h = t(80),
                v = n(h),
                y = t(82),
                g = n(y),
                b = t(89),
                A = r(b),
                m = function(t) {
                    function e(o) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.update(), r.enabled_ = !0, r.el_.setAttribute("aria-haspopup", "true"), r.el_.setAttribute("role", "menuitem"), r.on("keydown", r.handleSubmenuKeyPress), r
                    }
                    return a(e, t), e.prototype.update = function() {
                        var t = this.createMenu();
                        this.menu && this.removeChild(this.menu), this.menu = t, this.addChild(t), this.buttonPressed_ = !1, this.el_.setAttribute("aria-expanded", "false"), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createMenu = function() {
                        var t = new d["default"](this.player_);
                        if (this.options_.title) {
                            var e = v.createEl("li", {
                                className: "vjs-menu-title",
                                innerHTML: (0, A["default"])(this.options_.title),
                                tabIndex: -1
                            });
                            t.children_.unshift(e), v.insertElFirst(e, t.contentEl())
                        }
                        if (this.items = this.createItems(), this.items)
                            for (var o = 0; o < this.items.length; o++) t.addItem(this.items[o]);
                        return t
                    }, e.prototype.createItems = function() {}, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e.prototype.buildCSSClass = function() {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleClick = function() {
                        this.one(this.menu.contentEl(), "mouseleave", g.bind(this, function(t) {
                            this.unpressButton(), this.el_.blur()
                        })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
                    }, e.prototype.handleKeyPress = function(e) {
                        27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && e.preventDefault()) : 38 === e.which || 40 === e.which ? this.buttonPressed_ || (this.pressButton(), e.preventDefault()) : t.prototype.handleKeyPress.call(this, e)
                    }, e.prototype.handleSubmenuKeyPress = function(t) {
                        27 !== t.which && 9 !== t.which || (this.buttonPressed_ && this.unpressButton(), 9 !== t.which && t.preventDefault())
                    }, e.prototype.pressButton = function() {
                        this.enabled_ && (this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-expanded", "true"), this.menu.focus())
                    }, e.prototype.unpressButton = function() {
                        this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.el_.focus())
                    }, e.prototype.disable = function() {
                        return this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-expanded", "false"), this.enabled_ = !1, t.prototype.disable.call(this)
                    }, e.prototype.enable = function() {
                        return this.enabled_ = !0, t.prototype.enable.call(this)
                    }, e
                }(u["default"]);
            p["default"].registerComponent("MenuButton", m), o["default"] = m
        }, {
            3: 3,
            49: 49,
            5: 5,
            80: 80,
            82: 82,
            89: 89
        }],
        48: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(3),
                l = n(a),
                u = t(5),
                c = n(u),
                p = t(136),
                f = n(p),
                d = function(t) {
                    function e(o, n) {
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.selectable = n.selectable, s.selected(n.selected), s.selectable ? s.el_.setAttribute("role", "menuitemcheckbox") : s.el_.setAttribute("role", "menuitem"), s
                    }
                    return s(e, t), e.prototype.createEl = function(e, o, n) {
                        return t.prototype.createEl.call(this, "li", (0, f["default"])({
                            className: "vjs-menu-item",
                            innerHTML: this.localize(this.options_.label),
                            tabIndex: -1
                        }, o), n)
                    }, e.prototype.handleClick = function() {
                        this.selected(!0)
                    }, e.prototype.selected = function(t) {
                        this.selectable && (t ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected")) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(" ")))
                    }, e
                }(l["default"]);
            c["default"].registerComponent("MenuItem", d), o["default"] = d
        }, {
            136: 136,
            3: 3,
            5: 5
        }],
        49: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(82),
                d = n(f),
                h = t(81),
                v = n(h),
                y = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.focusedChild_ = -1, r.on("keydown", r.handleKeyPress), r
                    }
                    return a(e, t), e.prototype.addItem = function(t) {
                        this.addChild(t), t.on("click", d.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, e.prototype.createEl = function() {
                        var e = this.options_.contentElType || "ul";
                        this.contentEl_ = p.createEl(e, {
                            className: "vjs-menu-content"
                        }), this.contentEl_.setAttribute("role", "menu");
                        var o = t.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return o.setAttribute("role", "presentation"), o.appendChild(this.contentEl_), v.on(o, "click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation()
                        }), o
                    }, e.prototype.handleKeyPress = function(t) {
                        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepForward()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepBack())
                    }, e.prototype.stepForward = function() {
                        var t = 0;
                        void 0 !== this.focusedChild_ && (t = this.focusedChild_ + 1), this.focus(t)
                    }, e.prototype.stepBack = function() {
                        var t = 0;
                        void 0 !== this.focusedChild_ && (t = this.focusedChild_ - 1), this.focus(t)
                    }, e.prototype.focus = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = this.children().slice(),
                            o = e.length && e[0].className && /vjs-menu-title/.test(e[0].className);
                        o && e.shift(), e.length > 0 && (t < 0 ? t = 0 : t >= e.length && (t = e.length - 1), this.focusedChild_ = t, e[t].el_.focus())
                    }, e
                }(u["default"]);
            u["default"].registerComponent("Menu", y), o["default"] = y
        }, {
            5: 5,
            80: 80,
            81: 81,
            82: 82
        }],
        50: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(80),
                u = r(l),
                c = t(82),
                p = r(c),
                f = t(5),
                d = n(f),
                h = "vjs-modal-dialog",
                v = 27,
                y = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.opened_ = r.hasBeenOpened_ = r.hasBeenFilled_ = !1, r.closeable(!r.options_.uncloseable), r.content(r.options_.content), r.contentEl_ = u.createEl("div", {
                            className: h + "-content"
                        }, {
                            role: "document"
                        }), r.descEl_ = u.createEl("p", {
                            className: h + "-description vjs-offscreen",
                            id: r.el().getAttribute("aria-describedby")
                        }), u.textContent(r.descEl_, r.description()), r.el_.appendChild(r.descEl_), r.el_.appendChild(r.contentEl_), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass(),
                            tabIndex: -1
                        }, {
                            "aria-describedby": this.id() + "_description",
                            "aria-hidden": "true",
                            "aria-label": this.label(),
                            role: "dialog"
                        })
                    }, e.prototype.buildCSSClass = function() {
                        return h + " vjs-hidden " + t.prototype.buildCSSClass.call(this)
                    }, e.prototype.handleKeyPress = function(t) {
                        t.which === v && this.closeable() && this.close()
                    }, e.prototype.label = function() {
                        return this.options_.label || this.localize("Modal Window")
                    }, e.prototype.description = function() {
                        var t = this.options_.description || this.localize("This is a modal window.");
                        return this.closeable() && (t += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), t
                    }, e.prototype.open = function() {
                        if (!this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !t.paused(), this.wasPlaying_ && t.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), t.controls(!1), this.show(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
                        }
                        return this
                    }, e.prototype.opened = function(t) {
                        return "boolean" == typeof t && this[t ? "open" : "close"](), this.opened_
                    }, e.prototype.close = function() {
                        if (this.opened_) {
                            var t = this.player();
                            this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && t.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", p.bind(this, this.handleKeyPress)), t.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.options_.temporary && this.dispose()
                        }
                        return this
                    }, e.prototype.closeable = function o(t) {
                        if ("boolean" == typeof t) {
                            var o = this.closeable_ = !!t,
                                e = this.getChild("closeButton");
                            if (o && !e) {
                                var n = this.contentEl_;
                                this.contentEl_ = this.el_, e = this.addChild("closeButton", {
                                    controlText: "Close Modal Dialog"
                                }), this.contentEl_ = n, this.on(e, "close", this.close)
                            }!o && e && (this.off(e, "close", this.close), this.removeChild(e), e.dispose())
                        }
                        return this.closeable_
                    }, e.prototype.fill = function() {
                        return this.fillWith(this.content())
                    }, e.prototype.fillWith = function(t) {
                        var e = this.contentEl(),
                            o = e.parentNode,
                            n = e.nextSibling;
                        return this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, o.removeChild(e), this.empty(), u.insertContent(e, t), this.trigger("modalfill"), n ? o.insertBefore(e, n) : o.appendChild(e), this
                    }, e.prototype.empty = function() {
                        return this.trigger("beforemodalempty"), u.emptyEl(this.contentEl()), this.trigger("modalempty"), this
                    }, e.prototype.content = function(t) {
                        return "undefined" != typeof t && (this.content_ = t), this.content_
                    }, e
                }(d["default"]);
            y.prototype.options_ = {
                temporary: !0
            }, d["default"].registerComponent("ModalDialog", y), o["default"] = y
        }, {
            5: 5,
            80: 80,
            82: 82
        }],
        51: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(92),
                p = r(c),
                f = t(93),
                d = r(f),
                h = t(81),
                v = n(h),
                y = t(80),
                g = n(y),
                b = t(82),
                A = n(b),
                m = t(84),
                j = n(m),
                w = t(78),
                _ = n(w),
                k = t(85),
                x = r(k),
                T = t(89),
                E = r(T),
                C = t(88),
                S = t(79),
                O = t(87),
                B = n(O),
                P = t(44),
                M = r(P),
                I = t(46),
                R = r(I),
                D = t(145),
                N = r(D),
                F = t(136),
                L = r(F),
                Q = t(86),
                z = r(Q),
                V = t(69),
                U = r(V),
                H = t(50),
                Y = r(H),
                G = t(62),
                W = r(G),
                X = t(63),
                J = r(X),
                K = t(76),
                Z = r(K);
            t(61), t(59), t(55), t(68), t(45), t(1), t(4), t(8), t(41), t(71), t(60);
            var q = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "ratechange", "volumechange", "texttrackchange"],
                $ = function(t) {
                    function e(o, n, r) {
                        if (i(this, e), o.id = o.id || "vjs_video_" + j.newGUID(), n = (0, L["default"])(e.getTagSettings(o), n), n.initChildren = !1, n.createEl = !1, n.reportTouchActivity = !1, !n.language)
                            if ("function" == typeof o.closest) {
                                var a = o.closest("[lang]");
                                a && (n.language = a.getAttribute("lang"))
                            } else
                                for (var l = o; l && 1 === l.nodeType;) {
                                    if (g.getElAttributes(l).hasOwnProperty("lang")) {
                                        n.language = l.getAttribute("lang");
                                        break
                                    }
                                    l = l.parentNode
                                }
                        var u = s(this, t.call(this, null, n, r));
                        if (!u.options_ || !u.options_.techOrder || !u.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
                        u.tag = o, u.tagAttributes = o && g.getElAttributes(o), u.language(u.options_.language), n.languages ? ! function() {
                            var t = {};
                            Object.getOwnPropertyNames(n.languages).forEach(function(e) {
                                t[e.toLowerCase()] = n.languages[e]
                            }), u.languages_ = t
                        }() : u.languages_ = e.prototype.options_.languages, u.cache_ = {}, u.poster_ = n.poster || "", u.controls_ = !!n.controls, o.controls = !1, u.scrubbing_ = !1, u.el_ = u.createEl();
                        var c = (0, z["default"])(u.options_);
                        return n.plugins && ! function() {
                            var t = n.plugins;
                            Object.getOwnPropertyNames(t).forEach(function(e) {
                                "function" == typeof this[e] ? this[e](t[e]) : x["default"].error("Unable to find plugin:", e)
                            }, u)
                        }(), u.options_.playerOptions = c, u.initChildren(), u.isAudio("audio" === o.nodeName.toLowerCase()), u.controls() ? u.addClass("vjs-controls-enabled") : u.addClass("vjs-controls-disabled"), u.el_.setAttribute("role", "region"), u.isAudio() ? u.el_.setAttribute("aria-label", "audio player") : u.el_.setAttribute("aria-label", "video player"), u.isAudio() && u.addClass("vjs-audio"), u.flexNotSupported_() && u.addClass("vjs-no-flex"), _.IS_IOS || u.addClass("vjs-workinghover"), e.players[u.id_] = u, u.userActive(!0), u.reportUserActivity(), u.listenForUserActivity_(), u.on("fullscreenchange", u.handleFullscreenChange_), u.on("stageclick", u.handleStageClick_), u
                    }
                    return a(e, t), e.prototype.dispose = function() {
                        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && this.styleEl_.parentNode.removeChild(this.styleEl_), e.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && this.tech_.dispose(), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var e = this.el_ = t.prototype.createEl.call(this, "div"),
                            o = this.tag;
                        o.removeAttribute("width"), o.removeAttribute("height");
                        var n = g.getElAttributes(o);
                        if (Object.getOwnPropertyNames(n).forEach(function(t) {
                                "class" === t ? e.className = n[t] : e.setAttribute(t, n[t])
                            }), o.playerId = o.id, o.id += "_html5_api", o.className = "vjs-tech", o.player = e.player = this, this.addClass("vjs-paused"), d["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                            this.styleEl_ = B.createStyleElement("vjs-styles-dimensions");
                            var r = g.$(".vjs-styles-defaults"),
                                i = g.$("head");
                            i.insertBefore(this.styleEl_, r ? r.nextSibling : i.firstChild)
                        }
                        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
                        for (var s = o.getElementsByTagName("a"), a = 0; a < s.length; a++) {
                            var l = s.item(a);
                            g.addElClass(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
                        }
                        return o.initNetworkState_ = o.networkState, o.parentNode && o.parentNode.insertBefore(e, o), g.insertElFirst(o, e), this.children_.unshift(o), this.el_ = e, e
                    }, e.prototype.width = function(t) {
                        return this.dimension("width", t)
                    }, e.prototype.height = function(t) {
                        return this.dimension("height", t)
                    }, e.prototype.dimension = function(t, e) {
                        var o = t + "_";
                        if (void 0 === e) return this[o] || 0;
                        if ("" === e) this[o] = void 0;
                        else {
                            var n = parseFloat(e);
                            if (isNaN(n)) return x["default"].error('Improper value "' + e + '" supplied for for ' + t), this;
                            this[o] = n
                        }
                        return this.updateStyleEl_(), this
                    }, e.prototype.fluid = function(t) {
                        return void 0 === t ? !!this.fluid_ : (this.fluid_ = !!t, void(t ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid")))
                    }, e.prototype.aspectRatio = function(t) {
                        if (void 0 === t) return this.aspectRatio_;
                        if (!/^\d+\:\d+$/.test(t)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
                        this.aspectRatio_ = t, this.fluid(!0), this.updateStyleEl_()
                    }, e.prototype.updateStyleEl_ = function() {
                        if (d["default"].VIDEOJS_NO_DYNAMIC_STYLE === !0) {
                            var t = "number" == typeof this.width_ ? this.width_ : this.options_.width,
                                e = "number" == typeof this.height_ ? this.height_ : this.options_.height,
                                o = this.tech_ && this.tech_.el();
                            return void(o && (t >= 0 && (o.width = t), e >= 0 && (o.height = e)))
                        }
                        var n = void 0,
                            r = void 0,
                            i = void 0,
                            s = void 0;
                        i = void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9";
                        var a = i.split(":"),
                            l = a[1] / a[0];
                        n = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / l : this.videoWidth() || 300, r = void 0 !== this.height_ ? this.height_ : n * l, s = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(s), B.setTextContent(this.styleEl_, "\n      ." + s + " {\n        width: " + n + "px;\n        height: " + r + "px;\n      }\n\n      ." + s + ".vjs-fluid {\n        padding-top: " + 100 * l + "%;\n      }\n    ")
                    }, e.prototype.loadTech_ = function(t, e) {
                        var o = this;
                        this.tech_ && this.unloadTech_(), "Html5" !== t && this.tag && (W["default"].getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = t, this.isReady_ = !1;
                        var n = (0, L["default"])({
                            source: e,
                            nativeControlsForTouch: this.options_.nativeControlsForTouch,
                            playerId: this.id(),
                            techId: this.id() + "_" + t + "_api",
                            videoTracks: this.videoTracks_,
                            textTracks: this.textTracks_,
                            audioTracks: this.audioTracks_,
                            autoplay: this.options_.autoplay,
                            preload: this.options_.preload,
                            loop: this.options_.loop,
                            muted: this.options_.muted,
                            poster: this.poster(),
                            language: this.language(),
                            "vtt.js": this.options_["vtt.js"]
                        }, this.options_[t.toLowerCase()]);
                        this.tag && (n.tag = this.tag), e && (this.currentType_ = e.type, e.src === this.cache_.src && this.cache_.currentTime > 0 && (n.startTime = this.cache_.currentTime), this.cache_.src = e.src);
                        var r = W["default"].getTech(t);
                        r || (r = u["default"].getComponent(t)), this.tech_ = new r(n), this.tech_.ready(A.bind(this, this.handleTechReady_), !0), U["default"].jsonToTextTracks(this.textTracksJson_ || [], this.tech_), q.forEach(function(t) {
                            o.on(o.tech_, t, o["handleTech" + (0, E["default"])(t) + "_"])
                        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "canplay", this.handleTechCanPlay_), this.on(this.tech_, "canplaythrough", this.handleTechCanPlayThrough_), this.on(this.tech_, "playing", this.handleTechPlaying_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "seeked", this.handleTechSeeked_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === t && this.tag || g.insertElFirst(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
                    }, e.prototype.unloadTech_ = function() {
                        this.videoTracks_ = this.videoTracks(), this.textTracks_ = this.textTracks(), this.audioTracks_ = this.audioTracks(), this.textTracksJson_ = U["default"].textTracksToJson(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1
                    }, e.prototype.tech = function(t) {
                        if (t && t.IWillNotUseThisInPlugins) return this.tech_;
                        var e = "\n      Please make sure that you are not using this inside of a plugin.\n      To disable this alert and error, please pass in an object with\n      `IWillNotUseThisInPlugins` to the `tech` method. See\n      https://github.com/videojs/video.js/issues/2617 for more info.\n    ";
                        throw d["default"].alert(e), new Error(e)
                    }, e.prototype.addTechControlsListeners_ = function() {
                        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
                    }, e.prototype.removeTechControlsListeners_ = function() {
                        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
                    }, e.prototype.handleTechReady_ = function() {
                        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) {
                            try {
                                delete this.tag.poster
                            } catch (t) {
                                (0, x["default"])("deleting tag.poster throws in some browsers", t)
                            }
                            this.play()
                        }
                    }, e.prototype.handleTechLoadStart_ = function() {
                        this.removeClass("vjs-ended"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
                    }, e.prototype.hasStarted = function(t) {
                        return void 0 !== t ? (this.hasStarted_ !== t && (this.hasStarted_ = t, t ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : !!this.hasStarted_
                    }, e.prototype.handleTechPlay_ = function() {
                        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
                    }, e.prototype.handleTechWaiting_ = function() {
                        var t = this;
                        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function() {
                            return t.removeClass("vjs-waiting")
                        })
                    }, e.prototype.handleTechCanPlay_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplay")
                    }, e.prototype.handleTechCanPlayThrough_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
                    }, e.prototype.handleTechPlaying_ = function() {
                        this.removeClass("vjs-waiting"), this.trigger("playing")
                    }, e.prototype.handleTechSeeking_ = function() {
                        this.addClass("vjs-seeking"), this.trigger("seeking")
                    }, e.prototype.handleTechSeeked_ = function() {
                        this.removeClass("vjs-seeking"), this.trigger("seeked")
                    }, e.prototype.handleTechFirstPlay_ = function() {
                        this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started"), this.trigger("firstplay")
                    }, e.prototype.handleTechPause_ = function() {
                        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
                    }, e.prototype.handleTechEnded_ = function() {
                        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
                    }, e.prototype.handleTechDurationChange_ = function() {
                        this.duration(this.techGet_("duration"))
                    }, e.prototype.handleTechClick_ = function(t) {
                        0 === t.button && this.controls() && (this.paused() ? this.play() : this.pause())
                    }, e.prototype.handleTechTap_ = function() {
                        this.userActive(!this.userActive())
                    }, e.prototype.handleTechTouchStart_ = function() {
                        this.userWasActive = this.userActive()
                    }, e.prototype.handleTechTouchMove_ = function() {
                        this.userWasActive && this.reportUserActivity()
                    }, e.prototype.handleTechTouchEnd_ = function(t) {
                        t.preventDefault()
                    }, e.prototype.handleFullscreenChange_ = function() {
                        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
                    }, e.prototype.handleStageClick_ = function() {
                        this.reportUserActivity()
                    }, e.prototype.handleTechFullscreenChange_ = function(t, e) {
                        e && this.isFullscreen(e.isFullscreen), this.trigger("fullscreenchange")
                    }, e.prototype.handleTechError_ = function() {
                        var t = this.tech_.error();
                        this.error(t)
                    }, e.prototype.handleTechTextData_ = function() {
                        var t = null;
                        arguments.length > 1 && (t = arguments[1]), this.trigger("textdata", t)
                    }, e.prototype.getCache = function() {
                        return this.cache_
                    }, e.prototype.techCall_ = function(t, e) {
                        if (this.tech_ && !this.tech_.isReady_) this.tech_.ready(function() {
                            this[t](e)
                        }, !0);
                        else try {
                            this.tech_ && this.tech_[t](e)
                        } catch (o) {
                            throw (0, x["default"])(o), o
                        }
                    }, e.prototype.techGet_ = function(t) {
                        if (this.tech_ && this.tech_.isReady_) try {
                            return this.tech_[t]()
                        } catch (e) {
                            throw void 0 === this.tech_[t] ? (0, x["default"])("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e) : "TypeError" === e.name ? ((0, x["default"])("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1) : (0, x["default"])(e), e
                        }
                    }, e.prototype.play = function() {
                        return this.src() || this.currentSrc() ? this.techCall_("play") : this.tech_.one("loadstart", function() {
                            this.play()
                        }), this
                    }, e.prototype.pause = function() {
                        return this.techCall_("pause"), this
                    }, e.prototype.paused = function() {
                        return this.techGet_("paused") !== !1
                    }, e.prototype.scrubbing = function(t) {
                        return void 0 !== t ? (this.scrubbing_ = !!t, t ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing"), this) : this.scrubbing_
                    }, e.prototype.currentTime = function(t) {
                        return void 0 !== t ? (this.techCall_("setCurrentTime", t), this) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
                    }, e.prototype.duration = function(t) {
                        return void 0 === t ? this.cache_.duration || 0 : (t = parseFloat(t) || 0, t < 0 && (t = 1 / 0), t !== this.cache_.duration && (this.cache_.duration = t, t === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange")), this)
                    }, e.prototype.remainingTime = function() {
                        return this.duration() - this.currentTime()
                    }, e.prototype.buffered = function o() {
                        var o = this.techGet_("buffered");
                        return o && o.length || (o = (0, C.createTimeRange)(0, 0)), o
                    }, e.prototype.bufferedPercent = function() {
                        return (0, S.bufferedPercent)(this.buffered(), this.duration())
                    }, e.prototype.bufferedEnd = function() {
                        var t = this.buffered(),
                            e = this.duration(),
                            o = t.end(t.length - 1);
                        return o > e && (o = e), o
                    }, e.prototype.volume = function(t) {
                        var e = void 0;
                        return void 0 !== t ? (e = Math.max(0, Math.min(1, parseFloat(t))), this.cache_.volume = e, this.techCall_("setVolume", e), this) : (e = parseFloat(this.techGet_("volume")), isNaN(e) ? 1 : e)
                    }, e.prototype.muted = function(t) {
                        return void 0 !== t ? (this.techCall_("setMuted", t), this) : this.techGet_("muted") || !1
                    }, e.prototype.supportsFullScreen = function() {
                        return this.techGet_("supportsFullScreen") || !1
                    }, e.prototype.isFullscreen = function(t) {
                        return void 0 !== t ? (this.isFullscreen_ = !!t, this) : !!this.isFullscreen_
                    }, e.prototype.requestFullscreen = function() {
                        var t = M["default"];
                        return this.isFullscreen(!0), t.requestFullscreen ? (v.on(p["default"], t.fullscreenchange, A.bind(this, function e(o) {
                            this.isFullscreen(p["default"][t.fullscreenElement]), this.isFullscreen() === !1 && v.off(p["default"], t.fullscreenchange, e), this.trigger("fullscreenchange")
                        })), this.el_[t.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.exitFullscreen = function() {
                        var t = M["default"];
                        return this.isFullscreen(!1), t.requestFullscreen ? p["default"][t.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
                    }, e.prototype.enterFullWindow = function() {
                        this.isFullWindow = !0, this.docOrigOverflow = p["default"].documentElement.style.overflow, v.on(p["default"], "keydown", A.bind(this, this.fullWindowOnEscKey)), p["default"].documentElement.style.overflow = "hidden", g.addElClass(p["default"].body, "vjs-full-window"), this.trigger("enterFullWindow")
                    }, e.prototype.fullWindowOnEscKey = function(t) {
                        27 === t.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
                    }, e.prototype.exitFullWindow = function() {
                        this.isFullWindow = !1, v.off(p["default"], "keydown", this.fullWindowOnEscKey), p["default"].documentElement.style.overflow = this.docOrigOverflow, g.removeElClass(p["default"].body, "vjs-full-window"), this.trigger("exitFullWindow")
                    }, e.prototype.canPlayType = function(t) {
                        for (var e = void 0, o = 0, n = this.options_.techOrder; o < n.length; o++) {
                            var r = (0, E["default"])(n[o]),
                                i = W["default"].getTech(r);
                            if (i || (i = u["default"].getComponent(r)), i) {
                                if (i.isSupported() && (e = i.canPlayType(t))) return e
                            } else x["default"].error('The "' + r + '" tech is undefined. Skipped browser support check for that tech.')
                        }
                        return ""
                    }, e.prototype.selectSource = function(t) {
                        var e = this,
                            o = this.options_.techOrder.map(E["default"]).map(function(t) {
                                return [t, W["default"].getTech(t) || u["default"].getComponent(t)]
                            }).filter(function(t) {
                                var e = t[0],
                                    o = t[1];
                                return o ? o.isSupported() : (x["default"].error('The "' + e + '" tech is undefined. Skipped browser support check for that tech.'), !1)
                            }),
                            n = function(t, e, o) {
                                var n = void 0;
                                return t.some(function(t) {
                                    return e.some(function(e) {
                                        if (n = o(t, e)) return !0
                                    })
                                }), n
                            },
                            r = void 0,
                            i = function(t) {
                                return function(e, o) {
                                    return t(o, e)
                                }
                            },
                            s = function(t, o) {
                                var n = t[0],
                                    r = t[1];
                                if (r.canPlaySource(o, e.options_[n.toLowerCase()])) return {
                                    source: o,
                                    tech: n
                                }
                            };
                        return r = this.options_.sourceOrder ? n(t, o, i(s)) : n(o, t, s), r || !1
                    }, e.prototype.src = function(t) {
                        if (void 0 === t) return this.techGet_("src");
                        var e = W["default"].getTech(this.techName_);
                        return e || (e = u["default"].getComponent(this.techName_)), Array.isArray(t) ? this.sourceList_(t) : "string" == typeof t ? this.src({
                            src: t
                        }) : t instanceof Object && (t.type && !e.canPlaySource(t, this.options_[this.techName_.toLowerCase()]) ? this.sourceList_([t]) : (this.cache_.src = t.src, this.currentType_ = t.type || "", this.ready(function() {
                            e.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", t) : this.techCall_("src", t.src), "auto" === this.options_.preload && this.load(), this.options_.autoplay && this.play()
                        }, !0))), this
                    }, e.prototype.sourceList_ = function(t) {
                        var e = this.selectSource(t);
                        e ? e.tech === this.techName_ ? this.src(e.source) : this.loadTech_(e.tech, e.source) : (this.setTimeout(function() {
                            this.error({
                                code: 4,
                                message: this.localize(this.options_.notSupportedMessage)
                            })
                        }, 0), this.triggerReady())
                    }, e.prototype.load = function() {
                        return this.techCall_("load"), this
                    }, e.prototype.reset = function() {
                        return this.loadTech_((0, E["default"])(this.options_.techOrder[0]), null), this.techCall_("reset"), this
                    }, e.prototype.currentSrc = function() {
                        return this.techGet_("currentSrc") || this.cache_.src || ""
                    }, e.prototype.currentType = function() {
                        return this.currentType_ || ""
                    }, e.prototype.preload = function(t) {
                        return void 0 !== t ? (this.techCall_("setPreload", t), this.options_.preload = t, this) : this.techGet_("preload")
                    }, e.prototype.autoplay = function(t) {
                        return void 0 !== t ? (this.techCall_("setAutoplay", t), this.options_.autoplay = t, this) : this.techGet_("autoplay", t)
                    }, e.prototype.loop = function(t) {
                        return void 0 !== t ? (this.techCall_("setLoop", t), this.options_.loop = t, this) : this.techGet_("loop")
                    }, e.prototype.poster = function(t) {
                        return void 0 === t ? this.poster_ : (t || (t = ""), this.poster_ = t, this.techCall_("setPoster", t), this.trigger("posterchange"), this)
                    }, e.prototype.handleTechPosterChange_ = function() {
                        !this.poster_ && this.tech_ && this.tech_.poster && (this.poster_ = this.tech_.poster() || "", this.trigger("posterchange"))
                    }, e.prototype.controls = function(t) {
                        return void 0 !== t ? (t = !!t, this.controls_ !== t && (this.controls_ = t, this.usingNativeControls() && this.techCall_("setControls", t), t ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_())), this) : !!this.controls_
                    }, e.prototype.usingNativeControls = function(t) {
                        return void 0 !== t ? (t = !!t, this.usingNativeControls_ !== t && (this.usingNativeControls_ = t, t ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : !!this.usingNativeControls_
                    }, e.prototype.error = function(t) {
                        return void 0 === t ? this.error_ || null : null === t ? (this.error_ = t, this.removeClass("vjs-error"), this.errorDisplay && this.errorDisplay.close(), this) : (this.error_ = new R["default"](t), this.addClass("vjs-error"), x["default"].error("(CODE:" + this.error_.code + " " + R["default"].errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this.trigger("error"), this)
                    }, e.prototype.reportUserActivity = function(t) {
                        this.userActivity_ = !0
                    }, e.prototype.userActive = function(t) {
                        return void 0 !== t ? (t = !!t, t !== this.userActive_ && (this.userActive_ = t, t ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech_ && this.tech_.one("mousemove", function(t) {
                            t.stopPropagation(), t.preventDefault()
                        }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
                    }, e.prototype.listenForUserActivity_ = function() {
                        var t = void 0,
                            e = void 0,
                            o = void 0,
                            n = A.bind(this, this.reportUserActivity),
                            r = function(t) {
                                t.screenX === e && t.screenY === o || (e = t.screenX, o = t.screenY, n())
                            },
                            i = function() {
                                n(), this.clearInterval(t), t = this.setInterval(n, 250)
                            },
                            s = function(e) {
                                n(), this.clearInterval(t)
                            };
                        this.on("mousedown", i), this.on("mousemove", r), this.on("mouseup", s), this.on("keydown", n), this.on("keyup", n);
                        var a = void 0;
                        this.setInterval(function() {
                            if (this.userActivity_) {
                                this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
                                var t = this.options_.inactivityTimeout;
                                t > 0 && (a = this.setTimeout(function() {
                                    this.userActivity_ || this.userActive(!1)
                                }, t))
                            }
                        }, 250)
                    }, e.prototype.playbackRate = function(t) {
                        return void 0 !== t ? (this.techCall_("setPlaybackRate", t), this) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("playbackRate") : 1
                    }, e.prototype.isAudio = function(t) {
                        return void 0 !== t ? (this.isAudio_ = !!t, this) : !!this.isAudio_
                    }, e.prototype.videoTracks = function() {
                        return this.tech_ ? this.tech_.videoTracks() : (this.videoTracks_ = this.videoTracks_ || new Z["default"], this.videoTracks_)
                    }, e.prototype.audioTracks = function() {
                        return this.tech_ ? this.tech_.audioTracks() : (this.audioTracks_ = this.audioTracks_ || new J["default"], this.audioTracks_)
                    }, e.prototype.textTracks = function() {
                        if (this.tech_) return this.tech_.textTracks()
                    }, e.prototype.remoteTextTracks = function() {
                        if (this.tech_) return this.tech_.remoteTextTracks()
                    }, e.prototype.remoteTextTrackEls = function() {
                        if (this.tech_) return this.tech_.remoteTextTrackEls()
                    }, e.prototype.addTextTrack = function(t, e, o) {
                        if (this.tech_) return this.tech_.addTextTrack(t, e, o)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        if (this.tech_) return this.tech_.addRemoteTextTrack(t)
                    }, e.prototype.removeRemoteTextTrack = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            e = t.track,
                            o = void 0 === e ? arguments[0] : e;
                        if (this.tech_) return this.tech_.removeRemoteTextTrack(o)
                    }, e.prototype.videoWidth = function() {
                        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
                    }, e.prototype.videoHeight = function() {
                        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
                    }, e.prototype.language = function(t) {
                        return void 0 === t ? this.language_ : (this.language_ = String(t).toLowerCase(), this)
                    }, e.prototype.languages = function() {
                        return (0, z["default"])(e.prototype.options_.languages, this.languages_)
                    }, e.prototype.toJSON = function() {
                        var t = (0, z["default"])(this.options_),
                            e = t.tracks;
                        t.tracks = [];
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n = (0, z["default"])(n), n.player = void 0, t.tracks[o] = n
                        }
                        return t
                    }, e.prototype.createModal = function(t, e) {
                        var o = this;
                        e = e || {}, e.content = t || "";
                        var n = new Y["default"](this, e);
                        return this.addChild(n), n.on("dispose", function() {
                            o.removeChild(n)
                        }), n.open()
                    }, e.getTagSettings = function(t) {
                        var e = {
                                sources: [],
                                tracks: []
                            },
                            o = g.getElAttributes(t),
                            n = o["data-setup"];
                        if (null !== n) {
                            var r = (0, N["default"])(n || "{}"),
                                i = r[0],
                                s = r[1];
                            i && x["default"].error(i), (0, L["default"])(o, s)
                        }
                        if ((0, L["default"])(e, o), t.hasChildNodes())
                            for (var a = t.childNodes, l = 0, u = a.length; l < u; l++) {
                                var c = a[l],
                                    p = c.nodeName.toLowerCase();
                                "source" === p ? e.sources.push(g.getElAttributes(c)) : "track" === p && e.tracks.push(g.getElAttributes(c))
                            }
                        return e
                    }, e.prototype.flexNotSupported_ = function() {
                        var t = p["default"].createElement("i");
                        return !("flexBasis" in t.style || "webkitFlexBasis" in t.style || "mozFlexBasis" in t.style || "msFlexBasis" in t.style || "msFlexOrder" in t.style)
                    }, e
                }(u["default"]);
            $.players = {};
            var tt = d["default"].navigator;
            $.prototype.options_ = {
                techOrder: ["html5", "flash"],
                html5: {},
                flash: {},
                defaultVolume: 0,
                inactivityTimeout: 2e3,
                playbackRates: [],
                children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings"],
                language: tt && (tt.languages && tt.languages[0] || tt.userLanguage || tt.language) || "en",
                languages: {},
                notSupportedMessage: "No compatible source was found for this media."
            }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function(t) {
                $.prototype[t] = function() {
                    return this.techGet_(t)
                }
            }), q.forEach(function(t) {
                $.prototype["handleTech" + (0, E["default"])(t) + "_"] = function() {
                    return this.trigger(t)
                }
            }), u["default"].registerComponent("Player", $), o["default"] = $
        }, {
            1: 1,
            136: 136,
            145: 145,
            4: 4,
            41: 41,
            44: 44,
            45: 45,
            46: 46,
            5: 5,
            50: 50,
            55: 55,
            59: 59,
            60: 60,
            61: 61,
            62: 62,
            63: 63,
            68: 68,
            69: 69,
            71: 71,
            76: 76,
            78: 78,
            79: 79,
            8: 8,
            80: 80,
            81: 81,
            82: 82,
            84: 84,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            89: 89,
            92: 92,
            93: 93
        }],
        52: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0;
            var r = t(51),
                i = n(r),
                s = function(t, e) {
                    i["default"].prototype[t] = e
                };
            o["default"] = s
        }, {
            51: 51
        }],
        53: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(3),
                l = n(a),
                u = t(5),
                c = n(u),
                p = function(t) {
                    function e(o) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        r(this, e);
                        var s = i(this, t.call(this, o, n));
                        return s.update(), s
                    }
                    return s(e, t), e.prototype.update = function() {
                        var t = this.createPopup();
                        this.popup && this.removeChild(this.popup), this.popup = t, this.addChild(t), this.items && 0 === this.items.length ? this.hide() : this.items && this.items.length > 1 && this.show()
                    }, e.prototype.createPopup = function() {}, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: this.buildCSSClass()
                        })
                    }, e.prototype.buildCSSClass = function() {
                        var e = "vjs-menu-button";
                        return e += this.options_.inline === !0 ? "-inline" : "-popup", "vjs-menu-button " + e + " " + t.prototype.buildCSSClass.call(this)
                    }, e
                }(l["default"]);
            c["default"].registerComponent("PopupButton", p), o["default"] = p
        }, {
            3: 3,
            5: 5
        }],
        54: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(82),
                d = n(f),
                h = t(81),
                v = n(h),
                y = function(t) {
                    function e() {
                        return i(this, e), s(this, t.apply(this, arguments))
                    }
                    return a(e, t), e.prototype.addItem = function(t) {
                        this.addChild(t), t.on("click", d.bind(this, function() {
                            this.unlockShowing()
                        }))
                    }, e.prototype.createEl = function() {
                        var e = this.options_.contentElType || "ul";
                        this.contentEl_ = p.createEl(e, {
                            className: "vjs-menu-content"
                        });
                        var o = t.prototype.createEl.call(this, "div", {
                            append: this.contentEl_,
                            className: "vjs-menu"
                        });
                        return o.appendChild(this.contentEl_), v.on(o, "click", function(t) {
                            t.preventDefault(), t.stopImmediatePropagation()
                        }), o
                    }, e
                }(u["default"]);
            u["default"].registerComponent("Popup", y), o["default"] = y
        }, {
            5: 5,
            80: 80,
            81: 81,
            82: 82
        }],
        55: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(3),
                u = r(l),
                c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = t(80),
                v = n(h),
                y = t(78),
                g = n(y),
                b = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.update(), o.on("posterchange", d.bind(r, r.update)), r
                    }
                    return a(e, t), e.prototype.dispose = function() {
                        this.player().off("posterchange", this.update), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = v.createEl("div", {
                            className: "vjs-poster",
                            tabIndex: -1
                        });
                        return g.BACKGROUND_SIZE_SUPPORTED || (this.fallbackImg_ = v.createEl("img"), t.appendChild(this.fallbackImg_)), t
                    }, e.prototype.update = function() {
                        var t = this.player().poster();
                        this.setSrc(t), t ? this.show() : this.hide()
                    }, e.prototype.setSrc = function(t) {
                        if (this.fallbackImg_) this.fallbackImg_.src = t;
                        else {
                            var e = "";
                            t && (e = 'url("' + t + '")'), this.el_.style.backgroundImage = e
                        }
                    }, e.prototype.handleClick = function() {
                        this.player_.paused() ? this.player_.play() : this.player_.pause()
                    }, e
                }(u["default"]);
            p["default"].registerComponent("PosterImage", b), o["default"] = b
        }, {
            3: 3,
            5: 5,
            78: 78,
            80: 80,
            82: 82
        }],
        56: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                e && (d = e), setTimeout(h, t)
            }
            o.__esModule = !0, o.hasLoaded = o.autoSetupTimeout = o.autoSetup = void 0;
            var s = t(81),
                a = r(s),
                l = t(92),
                u = n(l),
                c = t(93),
                p = n(c),
                f = !1,
                d = void 0,
                h = function() {
                    var t = u["default"].getElementsByTagName("video"),
                        e = u["default"].getElementsByTagName("audio"),
                        o = [];
                    if (t && t.length > 0)
                        for (var n = 0, r = t.length; n < r; n++) o.push(t[n]);
                    if (e && e.length > 0)
                        for (var s = 0, a = e.length; s < a; s++) o.push(e[s]);
                    if (o && o.length > 0)
                        for (var l = 0, c = o.length; l < c; l++) {
                            var p = o[l];
                            if (!p || !p.getAttribute) {
                                i(1);
                                break
                            }
                            if (void 0 === p.player) {
                                var h = p.getAttribute("data-setup");
                                null !== h && d(p)
                            }
                        } else f || i(1)
                };
            "complete" === u["default"].readyState ? f = !0 : a.one(p["default"], "load", function() {
                f = !0
            });
            var v = function() {
                return f
            };
            o.autoSetup = h, o.autoSetupTimeout = i, o.hasLoaded = v
        }, {
            81: 81,
            92: 92,
            93: 93
        }],
        57: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(5),
                u = r(l),
                c = t(80),
                p = n(c),
                f = t(136),
                d = r(f),
                h = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.bar = r.getChild(r.options_.barName), r.vertical(!!r.options_.vertical), r.on("mousedown", r.handleMouseDown), r.on("touchstart", r.handleMouseDown), r.on("focus", r.handleFocus), r.on("blur", r.handleBlur), r.on("click", r.handleClick), r.on(o, "controlsvisible", r.update), r.on(o, r.playerEvent, r.update), r
                    }
                    return a(e, t), e.prototype.createEl = function(e) {
                        var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return o.className = o.className + " vjs-slider", o = (0, d["default"])({
                            tabIndex: 0
                        }, o), n = (0, d["default"])({
                            role: "slider",
                            "aria-valuenow": 0,
                            "aria-valuemin": 0,
                            "aria-valuemax": 100,
                            tabIndex: 0
                        }, n), t.prototype.createEl.call(this, e, o, n)
                    }, e.prototype.handleMouseDown = function(t) {
                        var e = this.bar.el_.ownerDocument;
                        t.preventDefault(), p.blockTextSelection(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(e, "mousemove", this.handleMouseMove), this.on(e, "mouseup", this.handleMouseUp), this.on(e, "touchmove", this.handleMouseMove), this.on(e, "touchend", this.handleMouseUp), this.handleMouseMove(t)
                    }, e.prototype.handleMouseMove = function() {}, e.prototype.handleMouseUp = function() {
                        var t = this.bar.el_.ownerDocument;
                        p.unblockTextSelection(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(t, "mousemove", this.handleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchmove", this.handleMouseMove), this.off(t, "touchend", this.handleMouseUp), this.update()
                    }, e.prototype.update = function() {
                        if (this.el_) {
                            var t = this.getPercent(),
                                e = this.bar;
                            if (e) {
                                ("number" != typeof t || t !== t || t < 0 || t === 1 / 0) && (t = 0);
                                var o = (100 * t).toFixed(2) + "%";
                                this.vertical() ? e.el().style.height = o : e.el().style.width = o
                            }
                        }
                    }, e.prototype.calculateDistance = function(t) {
                        var e = p.getPointerPosition(this.el_, t);
                        return this.vertical() ? e.y : e.x
                    }, e.prototype.handleFocus = function() {
                        this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, e.prototype.handleKeyPress = function(t) {
                        37 === t.which || 40 === t.which ? (t.preventDefault(), this.stepBack()) : 38 !== t.which && 39 !== t.which || (t.preventDefault(), this.stepForward())
                    }, e.prototype.handleBlur = function() {
                        this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
                    }, e.prototype.handleClick = function(t) {
                        t.stopImmediatePropagation(), t.preventDefault()
                    }, e.prototype.vertical = function(t) {
                        return void 0 === t ? this.vertical_ || !1 : (this.vertical_ = !!t, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal"), this)
                    }, e
                }(u["default"]);
            u["default"].registerComponent("Slider", h), o["default"] = h
        }, {
            136: 136,
            5: 5,
            80: 80
        }],
        58: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t.streamingFormats = {
                    "rtmp/mp4": "MP4",
                    "rtmp/flv": "FLV"
                }, t.streamFromParts = function(t, e) {
                    return t + "&" + e
                }, t.streamToParts = function(t) {
                    var e = {
                        connection: "",
                        stream: ""
                    };
                    if (!t) return e;
                    var o = t.search(/&(?!\w+=)/),
                        n = void 0;
                    return o !== -1 ? n = o + 1 : (o = n = t.lastIndexOf("/") + 1, 0 === o && (o = n = t.length)), e.connection = t.substring(0, o), e.stream = t.substring(n, t.length), e
                }, t.isStreamingType = function(e) {
                    return e in t.streamingFormats
                }, t.RTMP_RE = /^rtmp[set]?:\/\//i, t.isStreamingSrc = function(e) {
                    return t.RTMP_RE.test(e)
                }, t.rtmpSourceHandler = {}, t.rtmpSourceHandler.canPlayType = function(e) {
                    return t.isStreamingType(e) ? "maybe" : ""
                }, t.rtmpSourceHandler.canHandleSource = function(e, o) {
                    var n = t.rtmpSourceHandler.canPlayType(e.type);
                    return n ? n : t.isStreamingSrc(e.src) ? "maybe" : ""
                }, t.rtmpSourceHandler.handleSource = function(e, o, n) {
                    var r = t.streamToParts(e.src);
                    o.setRtmpConnection(r.connection), o.setRtmpStream(r.stream)
                }, t.registerSourceHandler(t.rtmpSourceHandler), t
            }
            o.__esModule = !0, o["default"] = n
        }, {}],
        59: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t) {
                var e = t.charAt(0).toUpperCase() + t.slice(1);
                E["set" + e] = function(e) {
                    return this.el_.vjs_setProperty(t, e)
                }
            }

            function u(t) {
                E[t] = function() {
                    return this.el_.vjs_getProperty(t)
                }
            }
            o.__esModule = !0;
            for (var c = t(62), p = r(c), f = t(80), d = n(f), h = t(90), v = n(h), y = t(88), g = t(58), b = r(g), A = t(5), m = r(A), j = t(93), w = r(j), _ = t(136), k = r(_), x = w["default"].navigator, T = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return o.source && r.ready(function() {
                            this.setSource(o.source)
                        }, !0), o.startTime && r.ready(function() {
                            this.load(), this.play(), this.currentTime(o.startTime)
                        }, !0), w["default"].videojs = w["default"].videojs || {}, w["default"].videojs.Flash = w["default"].videojs.Flash || {}, w["default"].videojs.Flash.onReady = e.onReady, w["default"].videojs.Flash.onEvent = e.onEvent, w["default"].videojs.Flash.onError = e.onError, r.on("seeked", function() {
                            this.lastSeekTarget_ = void 0
                        }), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var t = this.options_;
                        if (!t.swf) {
                            var o = "5.1.0";
                            t.swf = "//vjs.zencdn.net/swf/" + o + "/video-js.swf"
                        }
                        var n = t.techId,
                            r = (0, k["default"])({
                                readyFunction: "videojs.Flash.onReady",
                                eventProxyFunction: "videojs.Flash.onEvent",
                                errorEventProxyFunction: "videojs.Flash.onError",
                                autoplay: t.autoplay,
                                preload: t.preload,
                                loop: t.loop,
                                muted: t.muted
                            }, t.flashVars),
                            i = (0, k["default"])({
                                wmode: "opaque",
                                bgcolor: "#000000"
                            }, t.params),
                            s = (0, k["default"])({
                                id: n,
                                name: n,
                                "class": "vjs-tech"
                            }, t.attributes);
                        return this.el_ = e.embed(t.swf, r, i, s), this.el_.tech = this, this.el_
                    }, e.prototype.play = function() {
                        this.ended() && this.setCurrentTime(0), this.el_.vjs_play()
                    }, e.prototype.pause = function() {
                        this.el_.vjs_pause()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.currentSrc() : this.setSrc(t)
                    }, e.prototype.setSrc = function(t) {
                        var e = this;
                        t = v.getAbsoluteURL(t), this.el_.vjs_src(t), this.autoplay() && this.setTimeout(function() {
                            return e.play()
                        }, 0)
                    }, e.prototype.seeking = function() {
                        return void 0 !== this.lastSeekTarget_
                    }, e.prototype.setCurrentTime = function(e) {
                        var o = this.seekable();
                        o.length && (e = e > o.start(0) ? e : o.start(0), e = e < o.end(o.length - 1) ? e : o.end(o.length - 1), this.lastSeekTarget_ = e, this.trigger("seeking"), this.el_.vjs_setProperty("currentTime", e), t.prototype.setCurrentTime.call(this))
                    }, e.prototype.currentTime = function(t) {
                        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.vjs_getProperty("currentSrc")
                    }, e.prototype.duration = function o() {
                        if (0 === this.readyState()) return NaN;
                        var o = this.el_.vjs_getProperty("duration");
                        return o >= 0 ? o : 1 / 0
                    }, e.prototype.load = function() {
                        this.el_.vjs_load()
                    }, e.prototype.poster = function() {
                        this.el_.vjs_getProperty("poster")
                    }, e.prototype.setPoster = function() {}, e.prototype.seekable = function() {
                        var t = this.duration();
                        return 0 === t ? (0, y.createTimeRange)() : (0, y.createTimeRange)(0, t)
                    }, e.prototype.buffered = function() {
                        var t = this.el_.vjs_getProperty("buffered");
                        return 0 === t.length ? (0, y.createTimeRange)() : (0, y.createTimeRange)(t[0][0], t[0][1])
                    }, e.prototype.supportsFullScreen = function() {
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        return !1
                    }, e
                }(p["default"]), E = T.prototype, C = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","), S = "networkState,readyState,initialTime,startOffsetTime,paused,ended,videoWidth,videoHeight".split(","), O = 0; O < C.length; O++) u(C[O]), l(C[O]);
            for (var B = 0; B < S.length; B++) u(S[B]);
            T.isSupported = function() {
                return T.version()[0] >= 10
            }, p["default"].withSourceHandlers(T), T.nativeSourceHandler = {}, T.nativeSourceHandler.canPlayType = function(t) {
                return t in T.formats ? "maybe" : ""
            }, T.nativeSourceHandler.canHandleSource = function(t, e) {
                function o(t) {
                    var e = v.getFileExtension(t);
                    return e ? "video/" + e : ""
                }
                var n = void 0;
                return n = t.type ? t.type.replace(/;.*/, "").toLowerCase() : o(t.src), T.nativeSourceHandler.canPlayType(n)
            }, T.nativeSourceHandler.handleSource = function(t, e, o) {
                e.setSrc(t.src)
            }, T.nativeSourceHandler.dispose = function() {}, T.registerSourceHandler(T.nativeSourceHandler), T.formats = {
                "video/flv": "FLV",
                "video/x-flv": "FLV",
                "video/mp4": "MP4",
                "video/m4v": "MP4"
            }, T.onReady = function(t) {
                var e = d.getEl(t),
                    o = e && e.tech;
                o && o.el() && T.checkReady(o)
            }, T.checkReady = function(t) {
                t.el() && (t.el().vjs_getProperty ? t.triggerReady() : this.setTimeout(function() {
                    T.checkReady(t)
                }, 50))
            }, T.onEvent = function(t, e) {
                var o = d.getEl(t).tech;
                o.trigger(e, Array.prototype.slice.call(arguments, 2))
            }, T.onError = function(t, e) {
                var o = d.getEl(t).tech;
                return "srcnotfound" === e ? o.error(4) : void o.error("FLASH: " + e)
            }, T.version = function() {
                var t = "0,0,0";
                try {
                    t = new w["default"].ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
                } catch (e) {
                    try {
                        x.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (x.plugins["Shockwave Flash 2.0"] || x.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
                    } catch (o) {}
                }
                return t.split(",")
            }, T.embed = function(t, e, o, n) {
                var r = T.getEmbedCode(t, e, o, n),
                    i = d.createEl("div", {
                        innerHTML: r
                    }).childNodes[0];
                return i
            }, T.getEmbedCode = function(t, e, o, n) {
                var r = '<object type="application/x-shockwave-flash" ',
                    i = "",
                    s = "",
                    a = "";
                return e && Object.getOwnPropertyNames(e).forEach(function(t) {
                    i += t + "=" + e[t] + "&amp;"
                }), o = (0, k["default"])({
                    movie: t,
                    flashvars: i,
                    allowScriptAccess: "always",
                    allowNetworking: "all"
                }, o), Object.getOwnPropertyNames(o).forEach(function(t) {
                    s += '<param name="' + t + '" value="' + o[t] + '" />'
                }), n = (0, k["default"])({
                    data: t,
                    width: "100%",
                    height: "100%"
                }, n), Object.getOwnPropertyNames(n).forEach(function(t) {
                    a += t + '="' + n[t] + '" '
                }), "" + r + a + ">" + s + "</object>"
            }, (0, b["default"])(T), m["default"].registerComponent("Flash", T), p["default"].registerTech("Flash", T), o["default"] = T
        }, {
            136: 136,
            5: 5,
            58: 58,
            62: 62,
            80: 80,
            88: 88,
            90: 90,
            93: 93
        }],
        60: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                return t.raw = e, t
            }

            function s(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function a(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function l(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                c = i(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
                p = t(62),
                f = r(p),
                d = t(5),
                h = r(d),
                v = t(80),
                y = n(v),
                g = t(90),
                b = n(g),
                A = t(82),
                m = n(A),
                j = t(85),
                w = r(j),
                _ = t(146),
                k = r(_),
                x = t(78),
                T = n(x),
                E = t(92),
                C = r(E),
                S = t(93),
                O = r(S),
                B = t(136),
                P = r(B),
                M = t(86),
                I = r(M),
                R = t(89),
                D = r(R),
                N = function(t) {
                    function e(o, n) {
                        s(this, e);
                        var r = a(this, t.call(this, o, n)),
                            i = o.source,
                            l = !1;
                        if (i && (r.el_.currentSrc !== i.src || o.tag && 3 === o.tag.initNetworkState_) ? r.setSource(i) : r.handleLateInit_(r.el_), r.el_.hasChildNodes()) {
                            for (var u = r.el_.childNodes, p = u.length, f = []; p--;) {
                                var d = u[p],
                                    h = d.nodeName.toLowerCase();
                                "track" === h && (r.featuresNativeTextTracks ? (r.remoteTextTrackEls().addTrackElement_(d), r.remoteTextTracks().addTrack_(d.track), l || r.el_.hasAttribute("crossorigin") || !b.isCrossOrigin(d.src) || (l = !0)) : f.push(d))
                            }
                            for (var v = 0; v < f.length; v++) r.el_.removeChild(f[v])
                        }
                        var y = ["audio", "video"];
                        return y.forEach(function(t) {
                            var e = r.el()[t + "Tracks"],
                                o = r[t + "Tracks"](),
                                n = (0, D["default"])(t);
                            r["featuresNative" + n + "Tracks"] && e && e.addEventListener && (r["handle" + n + "TrackChange_"] = function(t) {
                                o.trigger({
                                    type: "change",
                                    target: o,
                                    currentTarget: o,
                                    srcElement: o
                                })
                            }, r["handle" + n + "TrackAdd_"] = function(t) {
                                return o.addTrack(t.track)
                            }, r["handle" + n + "TrackRemove_"] = function(t) {
                                return o.removeTrack(t.track)
                            }, e.addEventListener("change", r["handle" + n + "TrackChange_"]), e.addEventListener("addtrack", r["handle" + n + "TrackAdd_"]), e.addEventListener("removetrack", r["handle" + n + "TrackRemove_"]), r["removeOld" + n + "Tracks_"] = function(t) {
                                return r.removeOldTracks_(o, e)
                            }, r.on("loadstart", r["removeOld" + n + "Tracks_"]))
                        }), r.featuresNativeTextTracks && (l && w["default"].warn((0, k["default"])(c)), r.handleTextTrackChange_ = m.bind(r, r.handleTextTrackChange), r.handleTextTrackAdd_ = m.bind(r, r.handleTextTrackAdd), r.handleTextTrackRemove_ = m.bind(r, r.handleTextTrackRemove), r.proxyNativeTextTracks_()), (T.TOUCH_ENABLED || T.IS_IPHONE || T.IS_NATIVE_ANDROID) && o.nativeControlsForTouch === !0 && r.setControls(!0), r.proxyWebkitFullscreen_(), r.triggerReady(), r
                    }
                    return l(e, t), e.prototype.dispose = function() {
                        var o = this;
                        ["audio", "video", "text"].forEach(function(t) {
                            var e = (0, D["default"])(t),
                                n = o.el_[t + "Tracks"];
                            n && n.removeEventListener && (n.removeEventListener("change", o["handle" + e + "TrackChange_"]), n.removeEventListener("addtrack", o["handle" + e + "TrackAdd_"]), n.removeEventListener("removetrack", o["handle" + e + "TrackRemove_"])), n && o.off("loadstart", o["removeOld" + e + "Tracks_"])
                        }), e.disposeMediaElement(this.el_), t.prototype.dispose.call(this)
                    }, e.prototype.createEl = function() {
                        var t = this.options_.tag;
                        if (!t || this.movingMediaElementInDOM === !1) {
                            if (t) {
                                var o = t.cloneNode(!0);
                                t.parentNode.insertBefore(o, t), e.disposeMediaElement(t), t = o
                            } else {
                                t = C["default"].createElement("video");
                                var n = this.options_.tag && y.getElAttributes(this.options_.tag),
                                    r = (0, I["default"])({}, n);
                                T.TOUCH_ENABLED && this.options_.nativeControlsForTouch === !0 || delete r.controls, y.setElAttributes(t, (0, P["default"])(r, {
                                    id: this.options_.techId,
                                    "class": "vjs-tech"
                                }))
                            }
                            t.playerId = this.options_.playerId
                        }
                        for (var i = ["autoplay", "preload", "loop", "muted"], s = i.length - 1; s >= 0; s--) {
                            var a = i[s],
                                l = {};
                            "undefined" != typeof this.options_[a] && (l[a] = this.options_[a]), y.setElAttributes(t, l)
                        }
                        return t
                    }, e.prototype.handleLateInit_ = function(t) {
                        var e = this;
                        if (0 !== t.networkState && 3 !== t.networkState) {
                            if (0 === t.readyState) {
                                var o = function() {
                                    var t = !1,
                                        o = function() {
                                            t = !0
                                        };
                                    e.on("loadstart", o);
                                    var n = function() {
                                        t || this.trigger("loadstart")
                                    };
                                    return e.on("loadedmetadata", n), e.ready(function() {
                                        this.off("loadstart", o), this.off("loadedmetadata", n), t || this.trigger("loadstart")
                                    }), {
                                        v: void 0
                                    }
                                }();
                                if ("object" === ("undefined" == typeof o ? "undefined" : u(o))) return o.v
                            }
                            var n = ["loadstart"];
                            n.push("loadedmetadata"), t.readyState >= 2 && n.push("loadeddata"), t.readyState >= 3 && n.push("canplay"), t.readyState >= 4 && n.push("canplaythrough"), this.ready(function() {
                                n.forEach(function(t) {
                                    this.trigger(t)
                                }, this)
                            })
                        }
                    }, e.prototype.proxyNativeTextTracks_ = function() {
                        var t = this.el().textTracks;
                        if (t) {
                            for (var e = 0; e < t.length; e++) this.textTracks().addTrack_(t[e]);
                            t.addEventListener && (t.addEventListener("change", this.handleTextTrackChange_), t.addEventListener("addtrack", this.handleTextTrackAdd_), t.addEventListener("removetrack", this.handleTextTrackRemove_)), this.on("loadstart", this.removeOldTextTracks_)
                        }
                    }, e.prototype.handleTextTrackChange = function(t) {
                        var e = this.textTracks();
                        this.textTracks().trigger({
                            type: "change",
                            target: e,
                            currentTarget: e,
                            srcElement: e
                        })
                    }, e.prototype.handleTextTrackAdd = function(t) {
                        this.textTracks().addTrack_(t.track)
                    }, e.prototype.handleTextTrackRemove = function(t) {
                        this.textTracks().removeTrack_(t.track)
                    }, e.prototype.removeOldTracks_ = function(t, e) {
                        var o = [];
                        if (e) {
                            for (var n = 0; n < t.length; n++) {
                                for (var r = t[n], i = !1, s = 0; s < e.length; s++)
                                    if (e[s] === r) {
                                        i = !0;
                                        break
                                    }
                                i || o.push(r)
                            }
                            for (var a = 0; a < o.length; a++) {
                                var l = o[a];
                                t.removeTrack_(l)
                            }
                        }
                    }, e.prototype.removeOldTextTracks_ = function() {
                        var t = this.textTracks(),
                            e = this.el().textTracks;
                        this.removeOldTracks_(t, e)
                    }, e.prototype.play = function() {
                        var t = this.el_.play();
                        void 0 !== t && "function" == typeof t.then && t.then(null, function(t) {})
                    }, e.prototype.setCurrentTime = function(t) {
                        try {
                            this.el_.currentTime = t
                        } catch (e) {
                            (0, w["default"])(e, "Video is not ready. (Video.js)")
                        }
                    }, e.prototype.duration = function() {
                        return this.el_.duration || 0
                    }, e.prototype.width = function() {
                        return this.el_.offsetWidth
                    }, e.prototype.height = function() {
                        return this.el_.offsetHeight
                    }, e.prototype.proxyWebkitFullscreen_ = function() {
                        var t = this;
                        if ("webkitDisplayingFullscreen" in this.el_) {
                            var e = function() {
                                    this.trigger("fullscreenchange", {
                                        isFullscreen: !1
                                    })
                                },
                                o = function() {
                                    this.one("webkitendfullscreen", e), this.trigger("fullscreenchange", {
                                        isFullscreen: !0
                                    })
                                };
                            this.on("webkitbeginfullscreen", o), this.on("dispose", function() {
                                t.off("webkitbeginfullscreen", o), t.off("webkitendfullscreen", e)
                            })
                        }
                    }, e.prototype.supportsFullScreen = function() {
                        if ("function" == typeof this.el_.webkitEnterFullScreen) {
                            var t = O["default"].navigator && O["default"].navigator.userAgent || "";
                            if (/Android/.test(t) || !/Chrome|Mac OS X 10.5/.test(t)) return !0
                        }
                        return !1
                    }, e.prototype.enterFullScreen = function() {
                        var t = this.el_;
                        t.paused && t.networkState <= t.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function() {
                            t.pause(), t.webkitEnterFullScreen()
                        }, 0)) : t.webkitEnterFullScreen()
                    }, e.prototype.exitFullScreen = function() {
                        this.el_.webkitExitFullScreen()
                    }, e.prototype.src = function(t) {
                        return void 0 === t ? this.el_.src : void this.setSrc(t)
                    }, e.prototype.reset = function() {
                        e.resetMediaElement(this.el_)
                    }, e.prototype.currentSrc = function() {
                        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
                    }, e.prototype.setControls = function(t) {
                        this.el_.controls = !!t
                    }, e.prototype.addTextTrack = function(e, o, n) {
                        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, o, n) : t.prototype.addTextTrack.call(this, e, o, n)
                    }, e.prototype.addRemoteTextTrack = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (!this.featuresNativeTextTracks) return t.prototype.addRemoteTextTrack.call(this, e);
                        var o = C["default"].createElement("track");
                        return e.kind && (o.kind = e.kind), e.label && (o.label = e.label), (e.language || e.srclang) && (o.srclang = e.language || e.srclang), e["default"] && (o["default"] = e["default"]), e.id && (o.id = e.id), e.src && (o.src = e.src), this.el().appendChild(o), this.remoteTextTrackEls().addTrackElement_(o), this.remoteTextTracks().addTrack_(o.track), o
                    }, e.prototype.removeRemoteTextTrack = function(e) {
                        if (!this.featuresNativeTextTracks) return t.prototype.removeRemoteTextTrack.call(this, e);
                        var o = this.remoteTextTrackEls().getTrackElementByTrack_(e);
                        this.remoteTextTrackEls().removeTrackElement_(o), this.remoteTextTracks().removeTrack_(e);
                        for (var n = this.$$("track"), r = n.length; r--;) e !== n[r] && e !== n[r].track || this.el().removeChild(n[r])
                    }, e
                }(f["default"]);
            N.TEST_VID = C["default"].createElement("video");
            var F = C["default"].createElement("track");
            F.kind = "captions", F.srclang = "en", F.label = "English", N.TEST_VID.appendChild(F), N.isSupported = function() {
                try {
                    N.TEST_VID.volume = .5
                } catch (t) {
                    return !1
                }
                return !!N.TEST_VID.canPlayType
            }, N.canControlVolume = function() {
                try {
                    var t = N.TEST_VID.volume;
                    return N.TEST_VID.volume = t / 2 + .1, t !== N.TEST_VID.volume
                } catch (e) {
                    return !1
                }
            }, N.canControlPlaybackRate = function() {
                if (T.IS_ANDROID && T.IS_CHROME) return !1;
                try {
                    var t = N.TEST_VID.playbackRate;
                    return N.TEST_VID.playbackRate = t / 2 + .1, t !== N.TEST_VID.playbackRate
                } catch (e) {
                    return !1
                }
            }, N.supportsNativeTextTracks = function() {
                var t = void 0;
                return t = !!N.TEST_VID.textTracks, t && N.TEST_VID.textTracks.length > 0 && (t = "number" != typeof N.TEST_VID.textTracks[0].mode), t && T.IS_FIREFOX && (t = !1), !t || "onremovetrack" in N.TEST_VID.textTracks || (t = !1), t
            }, N.supportsNativeVideoTracks = function() {
                var t = !!N.TEST_VID.videoTracks;
                return t
            }, N.supportsNativeAudioTracks = function() {
                var t = !!N.TEST_VID.audioTracks;
                return t
            }, N.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "volumechange"], N.prototype.featuresVolumeControl = N.canControlVolume(), N.prototype.featuresPlaybackRate = N.canControlPlaybackRate(), N.prototype.movingMediaElementInDOM = !T.IS_IOS, N.prototype.featuresFullscreenResize = !0, N.prototype.featuresProgressEvents = !0, N.prototype.featuresTimeupdateEvents = !0, N.prototype.featuresNativeTextTracks = N.supportsNativeTextTracks(), N.prototype.featuresNativeVideoTracks = N.supportsNativeVideoTracks(), N.prototype.featuresNativeAudioTracks = N.supportsNativeAudioTracks();
            var L = void 0,
                Q = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
                z = /^video\/mp4/i;
            N.patchCanPlayType = function() {
                T.ANDROID_VERSION >= 4 && !T.IS_FIREFOX && (L || (L = N.TEST_VID.constructor.prototype.canPlayType), N.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && Q.test(t) ? "maybe" : L.call(this, t)
                }), T.IS_OLD_ANDROID && (L || (L = N.TEST_VID.constructor.prototype.canPlayType), N.TEST_VID.constructor.prototype.canPlayType = function(t) {
                    return t && z.test(t) ? "maybe" : L.call(this, t)
                })
            }, N.unpatchCanPlayType = function() {
                var t = N.TEST_VID.constructor.prototype.canPlayType;
                return N.TEST_VID.constructor.prototype.canPlayType = L, L = null, t
            }, N.patchCanPlayType(), N.disposeMediaElement = function(t) {
                if (t) {
                    for (t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes();) t.removeChild(t.firstChild);
                    t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                        try {
                            t.load()
                        } catch (e) {}
                    }()
                }
            }, N.resetMediaElement = function(t) {
                if (t) {
                    for (var e = t.querySelectorAll("source"), o = e.length; o--;) t.removeChild(e[o]);
                    t.removeAttribute("src"), "function" == typeof t.load && ! function() {
                        try {
                            t.load()
                        } catch (e) {}
                    }()
                }
            }, ["paused", "currentTime", "buffered", "volume", "muted", "poster", "preload", "autoplay", "controls", "loop", "error", "seeking", "seekable", "ended", "defaultMuted", "playbackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function(t) {
                N.prototype[t] = function() {
                    return this.el_[t]
                }
            }), ["volume", "muted", "src", "poster", "preload", "autoplay", "loop", "playbackRate"].forEach(function(t) {
                N.prototype["set" + (0, D["default"])(t)] = function(e) {
                    this.el_[t] = e
                }
            }), ["pause", "load"].forEach(function(t) {
                N.prototype[t] = function() {
                    return this.el_[t]()
                }
            }), f["default"].withSourceHandlers(N), N.nativeSourceHandler = {}, N.nativeSourceHandler.canPlayType = function(t) {
                try {
                    return N.TEST_VID.canPlayType(t)
                } catch (e) {
                    return ""
                }
            }, N.nativeSourceHandler.canHandleSource = function(t, e) {
                if (t.type) return N.nativeSourceHandler.canPlayType(t.type);
                if (t.src) {
                    var o = b.getFileExtension(t.src);
                    return N.nativeSourceHandler.canPlayType("video/" + o)
                }
                return ""
            }, N.nativeSourceHandler.handleSource = function(t, e, o) {
                e.setSrc(t.src)
            }, N.nativeSourceHandler.dispose = function() {}, N.registerSourceHandler(N.nativeSourceHandler), h["default"].registerComponent("Html5", N), f["default"].registerTech("Html5", N), o["default"] = N
        }, {
            136: 136,
            146: 146,
            5: 5,
            62: 62,
            78: 78,
            80: 80,
            82: 82,
            85: 85,
            86: 86,
            89: 89,
            90: 90,
            92: 92,
            93: 93
        }],
        61: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function s(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var a = t(5),
                l = n(a),
                u = t(62),
                c = n(u),
                p = t(89),
                f = n(p),
                d = function(t) {
                    function e(o, n, s) {
                        r(this, e);
                        var a = i(this, t.call(this, o, n, s));
                        if (n.playerOptions.sources && 0 !== n.playerOptions.sources.length) o.src(n.playerOptions.sources);
                        else
                            for (var u = 0, p = n.playerOptions.techOrder; u < p.length; u++) {
                                var d = (0, f["default"])(p[u]),
                                    h = c["default"].getTech(d);
                                if (d || (h = l["default"].getComponent(d)), h && h.isSupported()) {
                                    o.loadTech_(d);
                                    break
                                }
                            }
                        return a
                    }
                    return s(e, t), e
                }(l["default"]);
            l["default"].registerComponent("MediaLoader", d), o["default"] = d
        }, {
            5: 5,
            62: 62,
            89: 89
        }],
        62: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e, o, n) {
                var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                    i = t.textTracks();
                r.kind = e, o && (r.label = o), n && (r.language = n), r.tech = t;
                var s = new b["default"](r);
                return i.addTrack_(s), s
            }
            o.__esModule = !0;
            var u = t(5),
                c = r(u),
                p = t(66),
                f = r(p),
                d = t(65),
                h = r(d),
                v = t(86),
                y = r(v),
                g = t(72),
                b = r(g),
                A = t(70),
                m = r(A),
                j = t(76),
                w = r(j),
                _ = t(63),
                k = r(_),
                x = t(82),
                T = n(x),
                E = t(85),
                C = r(E),
                S = t(88),
                O = t(79),
                B = t(46),
                P = r(B),
                M = t(93),
                I = r(M),
                R = t(92),
                D = r(R),
                N = function(t) {
                    function e() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {};
                        i(this, e), o.reportTouchActivity = !1;
                        var r = s(this, t.call(this, null, o, n));
                        return r.hasStarted_ = !1, r.on("playing", function() {
                            this.hasStarted_ = !0
                        }), r.on("loadstart", function() {
                            this.hasStarted_ = !1
                        }), r.textTracks_ = o.textTracks, r.videoTracks_ = o.videoTracks, r.audioTracks_ = o.audioTracks, r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), o.nativeCaptions !== !1 && o.nativeTextTracks !== !1 || (r.featuresNativeTextTracks = !1), r.featuresNativeTextTracks || r.on("ready", r.emulateTextTracks), r.initTextTrackListeners(), r.initTrackListeners(), r.emitTapEvents(), r
                    }
                    return a(e, t), e.prototype.manualProgressOn = function() {
                        this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
                    }, e.prototype.manualProgressOff = function() {
                        this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
                    }, e.prototype.trackProgress = function() {
                        this.stopTrackingProgress(), this.progressInterval = this.setInterval(T.bind(this, function() {
                            var t = this.bufferedPercent();
                            this.bufferedPercent_ !== t && this.trigger("progress"), this.bufferedPercent_ = t, 1 === t && this.stopTrackingProgress()
                        }), 500)
                    }, e.prototype.onDurationChange = function() {
                        this.duration_ = this.duration()
                    }, e.prototype.buffered = function() {
                        return (0, S.createTimeRange)(0, 0)
                    }, e.prototype.bufferedPercent = function() {
                        return (0, O.bufferedPercent)(this.buffered(), this.duration_)
                    }, e.prototype.stopTrackingProgress = function() {
                        this.clearInterval(this.progressInterval)
                    }, e.prototype.manualTimeUpdatesOn = function() {
                        this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.manualTimeUpdatesOff = function() {
                        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
                    }, e.prototype.trackCurrentTime = function() {
                        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function() {
                            this.trigger({
                                type: "timeupdate",
                                target: this,
                                manuallyTriggered: !0
                            })
                        }, 250)
                    }, e.prototype.stopTrackingCurrentTime = function() {
                        this.clearInterval(this.currentTimeInterval), this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.dispose = function() {
                        this.clearTracks(["audio", "video", "text"]), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
                    }, e.prototype.clearTracks = function(t) {
                        var e = this;
                        t = [].concat(t), t.forEach(function(t) {
                            for (var o = e[t + "Tracks"]() || [], n = o.length; n--;) {
                                var r = o[n];
                                "text" === t && e.removeRemoteTextTrack(r), o.removeTrack_(r)
                            }
                        })
                    }, e.prototype.reset = function() {}, e.prototype.error = function(t) {
                        return void 0 !== t && (this.error_ = new P["default"](t), this.trigger("error")), this.error_
                    }, e.prototype.played = function() {
                        return this.hasStarted_ ? (0, S.createTimeRange)(0, 0) : (0, S.createTimeRange)()
                    }, e.prototype.setCurrentTime = function() {
                        this.manualTimeUpdates && this.trigger({
                            type: "timeupdate",
                            target: this,
                            manuallyTriggered: !0
                        })
                    }, e.prototype.initTextTrackListeners = function() {
                        var t = T.bind(this, function() {
                                this.trigger("texttrackchange")
                            }),
                            e = this.textTracks();
                        e && (e.addEventListener("removetrack", t), e.addEventListener("addtrack", t), this.on("dispose", T.bind(this, function() {
                            e.removeEventListener("removetrack", t), e.removeEventListener("addtrack", t)
                        })))
                    }, e.prototype.initTrackListeners = function() {
                        var t = this,
                            e = ["video", "audio"];
                        e.forEach(function(e) {
                            var o = function() {
                                    t.trigger(e + "trackchange")
                                },
                                n = t[e + "Tracks"]();
                            n.addEventListener("removetrack", o), n.addEventListener("addtrack", o), t.on("dispose", function() {
                                n.removeEventListener("removetrack", o), n.removeEventListener("addtrack", o)
                            })
                        })
                    }, e.prototype.emulateTextTracks = function() {
                        var t = this,
                            e = this.textTracks();
                        if (e) {
                            I["default"].WebVTT || null === this.el().parentNode || void 0 === this.el().parentNode || ! function() {
                                var e = D["default"].createElement("script");
                                e.src = t.options_["vtt.js"] || "https://cdn.rawgit.com/gkatsev/vtt.js/vjs-v0.12.1/dist/vtt.min.js", e.onload = function() {
                                    t.trigger("vttjsloaded")
                                }, e.onerror = function() {
                                    t.trigger("vttjserror")
                                }, t.on("dispose", function() {
                                    e.onload = null, e.onerror = null
                                }), I["default"].WebVTT = !0, t.el().parentNode.appendChild(e)
                            }();
                            var o = function() {
                                    return t.trigger("texttrackchange")
                                },
                                n = function() {
                                    o();
                                    for (var t = 0; t < e.length; t++) {
                                        var n = e[t];
                                        n.removeEventListener("cuechange", o), "showing" === n.mode && n.addEventListener("cuechange", o)
                                    }
                                };
                            n(), e.addEventListener("change", n), this.on("dispose", function() {
                                e.removeEventListener("change", n)
                            })
                        }
                    }, e.prototype.videoTracks = function() {
                        return this.videoTracks_ = this.videoTracks_ || new w["default"], this.videoTracks_
                    }, e.prototype.audioTracks = function() {
                        return this.audioTracks_ = this.audioTracks_ || new k["default"], this.audioTracks_
                    }, e.prototype.textTracks = function() {
                        return this.textTracks_ = this.textTracks_ || new m["default"], this.textTracks_
                    }, e.prototype.remoteTextTracks = function() {
                        return this.remoteTextTracks_ = this.remoteTextTracks_ || new m["default"], this.remoteTextTracks_
                    }, e.prototype.remoteTextTrackEls = function() {
                        return this.remoteTextTrackEls_ = this.remoteTextTrackEls_ || new h["default"], this.remoteTextTrackEls_
                    }, e.prototype.addTextTrack = function(t, e, o) {
                        if (!t) throw new Error("TextTrack kind is required but was not provided");
                        return l(this, t, e, o)
                    }, e.prototype.addRemoteTextTrack = function(t) {
                        var e = (0, y["default"])(t, {
                                tech: this
                            }),
                            o = new f["default"](e);
                        return this.remoteTextTrackEls().addTrackElement_(o), this.remoteTextTracks().addTrack_(o.track), this.textTracks().addTrack_(o.track), o
                    }, e.prototype.removeRemoteTextTrack = function(t) {
                        this.textTracks().removeTrack_(t);
                        var e = this.remoteTextTrackEls().getTrackElementByTrack_(t);
                        this.remoteTextTrackEls().removeTrackElement_(e), this.remoteTextTracks().removeTrack_(t)
                    }, e.prototype.setPoster = function() {}, e.prototype.canPlayType = function() {
                        return ""
                    }, e.isTech = function(t) {
                        return t.prototype instanceof e || t instanceof e || t === e
                    }, e.registerTech = function(t, o) {
                        if (e.techs_ || (e.techs_ = {}), !e.isTech(o)) throw new Error("Tech " + t + " must be a Tech");
                        return e.techs_[t] = o, o
                    }, e.getTech = function(t) {
                        return e.techs_ && e.techs_[t] ? e.techs_[t] : I["default"] && I["default"].videojs && I["default"].videojs[t] ? (C["default"].warn("The " + t + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), I["default"].videojs[t]) : void 0
                    }, e
                }(c["default"]);
            N.prototype.textTracks_, N.prototype.audioTracks_, N.prototype.videoTracks_, N.prototype.featuresVolumeControl = !0, N.prototype.featuresFullscreenResize = !1, N.prototype.featuresPlaybackRate = !1, N.prototype.featuresProgressEvents = !1, N.prototype.featuresTimeupdateEvents = !1, N.prototype.featuresNativeTextTracks = !1, N.withSourceHandlers = function(t) {
                t.registerSourceHandler = function(e, o) {
                    var n = t.sourceHandlers;
                    n || (n = t.sourceHandlers = []), void 0 === o && (o = n.length), n.splice(o, 0, e)
                }, t.canPlayType = function(e) {
                    for (var o = t.sourceHandlers || [], n = void 0, r = 0; r < o.length; r++)
                        if (n = o[r].canPlayType(e)) return n;
                    return ""
                }, t.selectSourceHandler = function(e, o) {
                    for (var n = t.sourceHandlers || [], r = void 0, i = 0; i < n.length; i++)
                        if (r = n[i].canHandleSource(e, o)) return n[i];
                    return null
                }, t.canPlaySource = function(e, o) {
                    var n = t.selectSourceHandler(e, o);
                    return n ? n.canHandleSource(e, o) : ""
                };
                var e = ["seekable", "duration"];
                e.forEach(function(t) {
                    var e = this[t];
                    "function" == typeof e && (this[t] = function() {
                        return this.sourceHandler_ && this.sourceHandler_[t] ? this.sourceHandler_[t].apply(this.sourceHandler_, arguments) : e.apply(this, arguments)
                    })
                }, t.prototype), t.prototype.setSource = function(e) {
                    var o = t.selectSourceHandler(e, this.options_);
                    return o || (t.nativeSourceHandler ? o = t.nativeSourceHandler : C["default"].error("No source hander found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), o !== t.nativeSourceHandler && (this.currentSource_ = e, this.off(this.el_, "loadstart", t.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", t.prototype.successiveLoadStartListener_), this.one(this.el_, "loadstart", t.prototype.firstLoadStartListener_)), this.sourceHandler_ = o.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler), this
                }, t.prototype.firstLoadStartListener_ = function() {
                    this.one(this.el_, "loadstart", t.prototype.successiveLoadStartListener_)
                }, t.prototype.successiveLoadStartListener_ = function() {
                    this.currentSource_ = null, this.disposeSourceHandler(), this.one(this.el_, "loadstart", t.prototype.successiveLoadStartListener_)
                }, t.prototype.disposeSourceHandler = function() {
                    this.sourceHandler_ && this.sourceHandler_.dispose && (this.off(this.el_, "loadstart", t.prototype.firstLoadStartListener_), this.off(this.el_, "loadstart", t.prototype.successiveLoadStartListener_), this.sourceHandler_.dispose(), this.sourceHandler_ = null)
                }
            }, c["default"].registerComponent("Tech", N), c["default"].registerComponent("MediaTechController", N), N.registerTech("Tech", N), o["default"] = N
        }, {
            46: 46,
            5: 5,
            63: 63,
            65: 65,
            66: 66,
            70: 70,
            72: 72,
            76: 76,
            79: 79,
            82: 82,
            85: 85,
            86: 86,
            88: 88,
            92: 92,
            93: 93
        }],
        63: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(74),
                u = r(l),
                c = t(78),
                p = n(c),
                f = t(92),
                d = r(f),
                h = function(t, e) {
                    for (var o = 0; o < t.length; o++) e.id !== t[o].id && (t[o].enabled = !1)
                },
                v = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, e);
                        for (var a = void 0, l = r.length - 1; l >= 0; l--)
                            if (r[l].enabled) {
                                h(r, r[l]);
                                break
                            }
                        if (p.IS_IE8) {
                            a = d["default"].createElement("custom");
                            for (var c in u["default"].prototype) "constructor" !== c && (a[c] = u["default"].prototype[c]);
                            for (var f in e.prototype) "constructor" !== f && (a[f] = e.prototype[f])
                        }
                        return a = o = s(this, t.call(this, r, a)), a.changing_ = !1, n = a, s(o, n)
                    }
                    return a(e, t), e.prototype.addTrack_ = function(e) {
                        var o = this;
                        e.enabled && h(this, e), t.prototype.addTrack_.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function() {
                            o.changing_ || (o.changing_ = !0, h(o, e), o.changing_ = !1, o.trigger("change"))
                        })
                    }, e.prototype.addTrack = function(t) {
                        this.addTrack_(t)
                    }, e.prototype.removeTrack = function(e) {
                        t.prototype.removeTrack_.call(this, e)
                    }, e
                }(u["default"]);
            o["default"] = v
        }, {
            74: 74,
            78: 78,
            92: 92
        }],
        64: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(73),
                u = t(75),
                c = r(u),
                p = t(86),
                f = r(p),
                d = t(78),
                h = n(d),
                v = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e);
                        var a = (0, f["default"])(r, {
                                kind: l.AudioTrackKind[r.kind] || ""
                            }),
                            u = o = s(this, t.call(this, a)),
                            c = !1;
                        if (h.IS_IE8)
                            for (var p in e.prototype) "constructor" !== p && (u[p] = e.prototype[p]);
                        return Object.defineProperty(u, "enabled", {
                            get: function() {
                                return c
                            },
                            set: function(t) {
                                "boolean" == typeof t && t !== c && (c = t, this.trigger("enabledchange"))
                            }
                        }), a.enabled && (u.enabled = a.enabled), u.loaded_ = !0, n = u, s(o, n)
                    }
                    return a(e, t), e
                }(c["default"]);
            o["default"] = v
        }, {
            73: 73,
            75: 75,
            78: 78,
            86: 86
        }],
        65: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t(78),
                a = r(s),
                l = t(92),
                u = n(l),
                c = function() {
                    function t() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, t);
                        var o = this;
                        if (a.IS_IE8) {
                            o = u["default"].createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (o[n] = t.prototype[n])
                        }
                        o.trackElements_ = [], Object.defineProperty(o, "length", {
                            get: function() {
                                return this.trackElements_.length
                            }
                        });
                        for (var r = 0, s = e.length; r < s; r++) o.addTrackElement_(e[r]);
                        if (a.IS_IE8) return o
                    }
                    return t.prototype.addTrackElement_ = function(t) {
                        this.trackElements_.push(t)
                    }, t.prototype.getTrackElementByTrack_ = function(t) {
                        for (var e = void 0, o = 0, n = this.trackElements_.length; o < n; o++)
                            if (t === this.trackElements_[o].track) {
                                e = this.trackElements_[o];
                                break
                            }
                        return e
                    }, t.prototype.removeTrackElement_ = function(t) {
                        for (var e = 0, o = this.trackElements_.length; e < o; e++)
                            if (t === this.trackElements_[e]) {
                                this.trackElements_.splice(e, 1);
                                break
                            }
                    }, t
                }();
            o["default"] = c
        }, {
            78: 78,
            92: 92
        }],
        66: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(78),
                u = r(l),
                c = t(92),
                p = n(c),
                f = t(42),
                d = n(f),
                h = t(72),
                v = n(h),
                y = 0,
                g = 1,
                b = 2,
                A = 3,
                m = function(t) {
                    function e() {
                        var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e);
                        var n = s(this, t.call(this)),
                            r = void 0,
                            a = n;
                        if (u.IS_IE8) {
                            a = p["default"].createElement("custom");
                            for (var l in e.prototype) "constructor" !== l && (a[l] = e.prototype[l])
                        }
                        var c = new v["default"](o);
                        if (a.kind = c.kind, a.src = c.src, a.srclang = c.language, a.label = c.label, a["default"] = c["default"], Object.defineProperty(a, "readyState", {
                                get: function() {
                                    return r
                                }
                            }), Object.defineProperty(a, "track", {
                                get: function() {
                                    return c
                                }
                            }), r = y, c.addEventListener("loadeddata", function() {
                                r = b, a.trigger({
                                    type: "load",
                                    target: a
                                })
                            }), u.IS_IE8) {
                            var f;
                            return f = a, s(n, f)
                        }
                        return n
                    }
                    return a(e, t), e
                }(d["default"]);
            m.prototype.allowedEvents_ = {
                load: "load"
            }, m.NONE = y, m.LOADING = g, m.LOADED = b, m.ERROR = A, o["default"] = m
        }, {
            42: 42,
            72: 72,
            78: 78,
            92: 92
        }],
        67: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            o.__esModule = !0;
            var s = t(78),
                a = r(s),
                l = t(92),
                u = n(l),
                c = function() {
                    function t(e) {
                        i(this, t);
                        var o = this;
                        if (a.IS_IE8) {
                            o = u["default"].createElement("custom");
                            for (var n in t.prototype) "constructor" !== n && (o[n] = t.prototype[n])
                        }
                        if (t.prototype.setCues_.call(o, e), Object.defineProperty(o, "length", {
                                get: function() {
                                    return this.length_
                                }
                            }), a.IS_IE8) return o
                    }
                    return t.prototype.setCues_ = function(t) {
                        var e = this.length || 0,
                            o = 0,
                            n = t.length;
                        this.cues_ = t, this.length_ = t.length;
                        var r = function(t) {
                            "" + t in this || Object.defineProperty(this, "" + t, {
                                get: function() {
                                    return this.cues_[t]
                                }
                            })
                        };
                        if (e < n)
                            for (o = e; o < n; o++) r.call(this, o)
                    }, t.prototype.getCueById = function(t) {
                        for (var e = null, o = 0, n = this.length; o < n; o++) {
                            var r = this[o];
                            if (r.id === t) {
                                e = r;
                                break
                            }
                        }
                        return e
                    }, t
                }();
            o["default"] = c
        }, {
            78: 78,
            92: 92
        }],
        68: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e) {
                return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
            }

            function u(t, e, o) {
                try {
                    t.style[e] = o
                } catch (n) {
                    return
                }
            }
            o.__esModule = !0;
            var c = t(5),
                p = r(c),
                f = t(82),
                d = n(f),
                h = t(93),
                v = r(h),
                y = "#222",
                g = "#ccc",
                b = {
                    monospace: "monospace",
                    sansSerif: "sans-serif",
                    serif: "serif",
                    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
                    monospaceSerif: '"Courier New", monospace',
                    proportionalSansSerif: "sans-serif",
                    proportionalSerif: "serif",
                    casual: '"Comic Sans MS", Impact, fantasy',
                    script: '"Monotype Corsiva", cursive',
                    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
                },
                A = function(t) {
                    function e(o, n, r) {
                        i(this, e);
                        var a = s(this, t.call(this, o, n, r));
                        return o.on("loadstart", d.bind(a, a.toggleDisplay)), o.on("texttrackchange", d.bind(a, a.updateDisplay)), o.ready(d.bind(a, function() {
                            if (o.tech_ && o.tech_.featuresNativeTextTracks) return void this.hide();
                            o.on("fullscreenchange", d.bind(this, this.updateDisplay));
                            for (var t = this.options_.playerOptions.tracks || [], e = 0; e < t.length; e++) this.player_.addRemoteTextTrack(t[e]);
                            var n = {
                                    captions: 1,
                                    subtitles: 1
                                },
                                r = this.player_.textTracks(),
                                i = void 0,
                                s = void 0;
                            if (r) {
                                for (var a = 0; a < r.length; a++) {
                                    var l = r[a];
                                    l["default"] && ("descriptions" !== l.kind || i ? l.kind in n && !s && (s = l) : i = l)
                                }
                                s ? s.mode = "showing" : i && (i.mode = "showing")
                            }
                        })), a
                    }
                    return a(e, t), e.prototype.toggleDisplay = function() {
                        this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
                    }, e.prototype.createEl = function() {
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-text-track-display"
                        }, {
                            "aria-live": "assertive",
                            "aria-atomic": "true"
                        })
                    }, e.prototype.clearDisplay = function() {
                        "function" == typeof v["default"].WebVTT && v["default"].WebVTT.processCues(v["default"], [], this.el_)
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.textTracks();
                        if (this.clearDisplay(), t) {
                            for (var e = null, o = null, n = t.length; n--;) {
                                var r = t[n];
                                "showing" === r.mode && ("descriptions" === r.kind ? e = r : o = r)
                            }
                            o ? this.updateForTrack(o) : e && this.updateForTrack(e)
                        }
                    }, e.prototype.updateForTrack = function(t) {
                        if ("function" == typeof v["default"].WebVTT && t.activeCues) {
                            for (var e = this.player_.textTrackSettings.getValues(), o = [], n = 0; n < t.activeCues.length; n++) o.push(t.activeCues[n]);
                            v["default"].WebVTT.processCues(v["default"], o, this.el_);
                            for (var r = o.length; r--;) {
                                var i = o[r];
                                if (i) {
                                    var s = i.displayState;
                                    if (e.color && (s.firstChild.style.color = e.color), e.textOpacity && u(s.firstChild, "color", l(e.color || "#fff", e.textOpacity)), e.backgroundColor && (s.firstChild.style.backgroundColor = e.backgroundColor), e.backgroundOpacity && u(s.firstChild, "backgroundColor", l(e.backgroundColor || "#000", e.backgroundOpacity)), e.windowColor && (e.windowOpacity ? u(s, "backgroundColor", l(e.windowColor, e.windowOpacity)) : s.style.backgroundColor = e.windowColor), e.edgeStyle && ("dropshadow" === e.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px " + y + ", 2px 2px 4px " + y + ", 2px 2px 5px " + y : "raised" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + y + ", 2px 2px " + y + ", 3px 3px " + y : "depressed" === e.edgeStyle ? s.firstChild.style.textShadow = "1px 1px " + g + ", 0 1px " + g + ", -1px -1px " + y + ", 0 -1px " + y : "uniform" === e.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px " + y + ", 0 0 4px " + y + ", 0 0 4px " + y + ", 0 0 4px " + y)), e.fontPercent && 1 !== e.fontPercent) {
                                        var a = v["default"].parseFloat(s.style.fontSize);
                                        s.style.fontSize = a * e.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
                                    }
                                    e.fontFamily && "default" !== e.fontFamily && ("small-caps" === e.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = b[e.fontFamily])
                                }
                            }
                        }
                    }, e
                }(p["default"]);
            p["default"].registerComponent("TextTrackDisplay", A), o["default"] = A
        }, {
            5: 5,
            82: 82,
            93: 93
        }],
        69: [function(t, e, o) {
            "use strict";
            o.__esModule = !0;
            var n = function(t) {
                    var e = ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function(e, o, n) {
                        return t[o] && (e[o] = t[o]), e
                    }, {
                        cues: t.cues && Array.prototype.map.call(t.cues, function(t) {
                            return {
                                startTime: t.startTime,
                                endTime: t.endTime,
                                text: t.text,
                                id: t.id
                            }
                        })
                    });
                    return e
                },
                r = function(t) {
                    var e = t.$$("track"),
                        o = Array.prototype.map.call(e, function(t) {
                            return t.track
                        }),
                        r = Array.prototype.map.call(e, function(t) {
                            var e = n(t.track);
                            return t.src && (e.src = t.src), e
                        });
                    return r.concat(Array.prototype.filter.call(t.textTracks(), function(t) {
                        return o.indexOf(t) === -1
                    }).map(n))
                },
                i = function(t, e) {
                    return t.forEach(function(t) {
                        var o = e.addRemoteTextTrack(t).track;
                        !t.src && t.cues && t.cues.forEach(function(t) {
                            return o.addCue(t)
                        })
                    }), e.textTracks()
                };
            o["default"] = {
                textTracksToJson: r,
                jsonToTextTracks: i,
                trackToJson_: n
            }
        }, {}],
        70: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(74),
                u = r(l),
                c = t(82),
                p = n(c),
                f = t(78),
                d = n(f),
                h = t(92),
                v = r(h),
                y = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, e);
                        var a = void 0;
                        if (d.IS_IE8) {
                            a = v["default"].createElement("custom");
                            for (var l in u["default"].prototype) "constructor" !== l && (a[l] = u["default"].prototype[l]);
                            for (var c in e.prototype) "constructor" !== c && (a[c] = e.prototype[c])
                        }
                        return a = o = s(this, t.call(this, r, a)), n = a, s(o, n)
                    }
                    return a(e, t), e.prototype.addTrack_ = function(e) {
                        t.prototype.addTrack_.call(this, e), e.addEventListener("modechange", p.bind(this, function() {
                            this.trigger("change")
                        }))
                    }, e.prototype.removeTrack_ = function(t) {
                        for (var e = void 0, o = 0, n = this.length; o < n; o++)
                            if (this[o] === t) {
                                e = this[o], e.off && e.off(), this.tracks_.splice(o, 1);
                                break
                            }
                        e && this.trigger({
                            track: e,
                            type: "removetrack"
                        })
                    }, e.prototype.getTrackById = function(t) {
                        for (var e = null, o = 0, n = this.length; o < n; o++) {
                            var r = this[o];
                            if (r.id === t) {
                                e = r;
                                break
                            }
                        }
                        return e
                    }, e
                }(u["default"]);
            o["default"] = y
        }, {
            74: 74,
            78: 78,
            82: 82,
            92: 92
        }],
        71: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }

            function l(t, e, o) {
                var n = '\n    <div role="document">\n      <div role="heading" aria-level="1" id="' + e + '" class="vjs-control-text">Captions Settings Dialog</div>\n      <div id="' + o + '" class="vjs-control-text">Beginning of dialog window. Escape will cancel and close the window.</div>\n      <div class="vjs-tracksettings">\n        <div class="vjs-tracksettings-colors">\n          <fieldset class="vjs-fg-color vjs-tracksetting">\n            <legend>Text</legend>\n            <label class="vjs-label" for="captions-foreground-color-' + t + '">Color</label>\n            <select id="captions-foreground-color-' + t + '">\n              <option value="#FFF" selected>White</option>\n              <option value="#000">Black</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-text-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-foreground-opacity-' + t + '">Transparency</label>\n              <select id="captions-foreground-opacity-' + t + '">\n                <option value="1" selected>Opaque</option>\n                <option value="0.5">Semi-Opaque</option>\n              </select>\n            </span>\n          </fieldset>\n          <fieldset class="vjs-bg-color vjs-tracksetting">\n            <legend>Background</legend>\n            <label class="vjs-label" for="captions-background-color-' + t + '">Color</label>\n            <select id="captions-background-color-' + t + '">\n              <option value="#000" selected>Black</option>\n              <option value="#FFF">White</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-bg-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-background-opacity-' + t + '">Transparency</label>\n              <select id="captions-background-opacity-' + t + '">\n                <option value="1" selected>Opaque</option>\n                <option value="0.5">Semi-Transparent</option>\n                <option value="0">Transparent</option>\n              </select>\n            </span>\n          </fieldset>\n          <fieldset class="window-color vjs-tracksetting">\n            <legend>Window</legend>\n            <label class="vjs-label" for="captions-window-color-' + t + '">Color</label>\n            <select id="captions-window-color-' + t + '">\n              <option value="#000" selected>Black</option>\n              <option value="#FFF">White</option>\n              <option value="#F00">Red</option>\n              <option value="#0F0">Green</option>\n              <option value="#00F">Blue</option>\n              <option value="#FF0">Yellow</option>\n              <option value="#F0F">Magenta</option>\n              <option value="#0FF">Cyan</option>\n            </select>\n            <span class="vjs-window-opacity vjs-opacity">\n              <label class="vjs-label" for="captions-window-opacity-' + t + '">Transparency</label>\n              <select id="captions-window-opacity-' + t + '">\n                <option value="0" selected>Transparent</option>\n                <option value="0.5">Semi-Transparent</option>\n                <option value="1">Opaque</option>\n              </select>\n            </span>\n          </fieldset>\n        </div> <!-- vjs-tracksettings-colors -->\n        <div class="vjs-tracksettings-font">\n          <div class="vjs-font-percent vjs-tracksetting">\n            <label class="vjs-label" for="captions-font-size-' + t + '">Font Size</label>\n            <select id="captions-font-size-' + t + '">\n              <option value="0.50">50%</option>\n              <option value="0.75">75%</option>\n              <option value="1.00" selected>100%</option>\n              <option value="1.25">125%</option>\n              <option value="1.50">150%</option>\n              <option value="1.75">175%</option>\n              <option value="2.00">200%</option>\n              <option value="3.00">300%</option>\n              <option value="4.00">400%</option>\n            </select>\n          </div>\n          <div class="vjs-edge-style vjs-tracksetting">\n            <label class="vjs-label" for="captions-edge-style-' + t + '">Text Edge Style</label>\n            <select id="captions-edge-style-' + t + '">\n              <option value="none" selected>None</option>\n              <option value="raised">Raised</option>\n              <option value="depressed">Depressed</option>\n              <option value="uniform">Uniform</option>\n              <option value="dropshadow">Dropshadow</option>\n            </select>\n          </div>\n          <div class="vjs-font-family vjs-tracksetting">\n            <label class="vjs-label" for="captions-font-family-' + t + '">Font Family</label>\n            <select id="captions-font-family-' + t + '">\n              <option value="proportionalSansSerif" selected>Proportional Sans-Serif</option>\n              <option value="monospaceSansSerif">Monospace Sans-Serif</option>\n              <option value="proportionalSerif">Proportional Serif</option>\n              <option value="monospaceSerif">Monospace Serif</option>\n              <option value="casual">Casual</option>\n              <option value="script">Script</option>\n              <option value="small-caps">Small Caps</option>\n            </select>\n          </div>\n        </div> <!-- vjs-tracksettings-font -->\n        <div class="vjs-tracksettings-controls">\n          <button class="vjs-default-button">Defaults</button>\n          <button class="vjs-done-button">Done</button>\n        </div>\n      </div> <!-- vjs-tracksettings -->\n    </div> <!--  role="document" -->\n  ';
                return n
            }

            function u(t) {
                var e = void 0;
                return t.selectedOptions ? e = t.selectedOptions[0] : t.options && (e = t.options[t.options.selectedIndex]), e.value
            }

            function c(t, e) {
                if (e) {
                    var o = void 0;
                    for (o = 0; o < t.options.length; o++) {
                        var n = t.options[o];
                        if (n.value === e) break
                    }
                    t.selectedIndex = o
                }
            }
            o.__esModule = !0;
            var p = t(5),
                f = r(p),
                d = t(81),
                h = n(d),
                v = t(82),
                y = n(v),
                g = t(85),
                b = r(g),
                A = t(145),
                m = r(A),
                j = t(93),
                w = r(j),
                _ = function(t) {
                    function e(o, n) {
                        i(this, e);
                        var r = s(this, t.call(this, o, n));
                        return r.hide(), void 0 === n.persistTextTrackSettings && (r.options_.persistTextTrackSettings = r.options_.playerOptions.persistTextTrackSettings), h.on(r.$(".vjs-done-button"), "click", y.bind(r, function() {
                            this.saveSettings(), this.hide()
                        })), h.on(r.$(".vjs-default-button"), "click", y.bind(r, function() {
                            this.$(".vjs-fg-color > select").selectedIndex = 0, this.$(".vjs-bg-color > select").selectedIndex = 0,
                                this.$(".window-color > select").selectedIndex = 0, this.$(".vjs-text-opacity > select").selectedIndex = 0, this.$(".vjs-bg-opacity > select").selectedIndex = 0, this.$(".vjs-window-opacity > select").selectedIndex = 0, this.$(".vjs-edge-style select").selectedIndex = 0, this.$(".vjs-font-family select").selectedIndex = 0, this.$(".vjs-font-percent select").selectedIndex = 2, this.updateDisplay()
                        })), h.on(r.$(".vjs-fg-color > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-bg-color > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".window-color > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-text-opacity > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-bg-opacity > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-window-opacity > select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-font-percent select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-edge-style select"), "change", y.bind(r, r.updateDisplay)), h.on(r.$(".vjs-font-family select"), "change", y.bind(r, r.updateDisplay)), r.options_.persistTextTrackSettings && r.restoreSettings(), r
                    }
                    return a(e, t), e.prototype.createEl = function() {
                        var e = this.id_,
                            o = "TTsettingsDialogLabel-" + e,
                            n = "TTsettingsDialogDescription-" + e;
                        return t.prototype.createEl.call(this, "div", {
                            className: "vjs-caption-settings vjs-modal-overlay",
                            innerHTML: l(e, o, n),
                            tabIndex: -1
                        }, {
                            role: "dialog",
                            "aria-labelledby": o,
                            "aria-describedby": n
                        })
                    }, e.prototype.getValues = function() {
                        var t = u(this.$(".vjs-edge-style select")),
                            e = u(this.$(".vjs-font-family select")),
                            o = u(this.$(".vjs-fg-color > select")),
                            n = u(this.$(".vjs-text-opacity > select")),
                            r = u(this.$(".vjs-bg-color > select")),
                            i = u(this.$(".vjs-bg-opacity > select")),
                            s = u(this.$(".window-color > select")),
                            a = u(this.$(".vjs-window-opacity > select")),
                            l = w["default"].parseFloat(u(this.$(".vjs-font-percent > select"))),
                            c = {
                                fontPercent: l,
                                fontFamily: e,
                                textOpacity: n,
                                windowColor: s,
                                windowOpacity: a,
                                backgroundOpacity: i,
                                edgeStyle: t,
                                color: o,
                                backgroundColor: r
                            };
                        for (var p in c)("" === c[p] || "none" === c[p] || "fontPercent" === p && 1 === c[p]) && delete c[p];
                        return c
                    }, e.prototype.setValues = function(t) {
                        c(this.$(".vjs-edge-style select"), t.edgeStyle), c(this.$(".vjs-font-family select"), t.fontFamily), c(this.$(".vjs-fg-color > select"), t.color), c(this.$(".vjs-text-opacity > select"), t.textOpacity), c(this.$(".vjs-bg-color > select"), t.backgroundColor), c(this.$(".vjs-bg-opacity > select"), t.backgroundOpacity), c(this.$(".window-color > select"), t.windowColor), c(this.$(".vjs-window-opacity > select"), t.windowOpacity);
                        var e = t.fontPercent;
                        e && (e = e.toFixed(2)), c(this.$(".vjs-font-percent > select"), e)
                    }, e.prototype.restoreSettings = function() {
                        var t = void 0,
                            e = void 0;
                        try {
                            var o = (0, m["default"])(w["default"].localStorage.getItem("vjs-text-track-settings"));
                            t = o[0], e = o[1], t && b["default"].error(t)
                        } catch (n) {
                            b["default"].warn(n)
                        }
                        e && this.setValues(e)
                    }, e.prototype.saveSettings = function() {
                        if (this.options_.persistTextTrackSettings) {
                            var t = this.getValues();
                            try {
                                Object.getOwnPropertyNames(t).length > 0 ? w["default"].localStorage.setItem("vjs-text-track-settings", JSON.stringify(t)) : w["default"].localStorage.removeItem("vjs-text-track-settings")
                            } catch (e) {
                                b["default"].warn(e)
                            }
                        }
                    }, e.prototype.updateDisplay = function() {
                        var t = this.player_.getChild("textTrackDisplay");
                        t && t.updateDisplay()
                    }, e
                }(f["default"]);
            f["default"].registerComponent("TextTrackSettings", _), o["default"] = _
        }, {
            145: 145,
            5: 5,
            81: 81,
            82: 82,
            85: 85,
            93: 93
        }],
        72: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(67),
                u = r(l),
                c = t(82),
                p = n(c),
                f = t(73),
                d = t(85),
                h = r(d),
                v = t(93),
                y = r(v),
                g = t(75),
                b = r(g),
                A = t(90),
                m = t(147),
                j = r(m),
                w = t(86),
                _ = r(w),
                k = t(78),
                x = n(k),
                T = function(t, e) {
                    var o = new y["default"].WebVTT.Parser(y["default"], y["default"].vttjs, y["default"].WebVTT.StringDecoder()),
                        n = [];
                    o.oncue = function(t) {
                        e.addCue(t)
                    }, o.onparsingerror = function(t) {
                        n.push(t)
                    }, o.onflush = function() {
                        e.trigger({
                            type: "loadeddata",
                            target: e
                        })
                    }, o.parse(t), n.length > 0 && (y["default"].console && y["default"].console.groupCollapsed && y["default"].console.groupCollapsed("Text Track parsing errors for " + e.src), n.forEach(function(t) {
                        return h["default"].error(t)
                    }), y["default"].console && y["default"].console.groupEnd && y["default"].console.groupEnd()), o.flush()
                },
                E = function(t, e) {
                    var o = {
                            uri: t
                        },
                        n = (0, A.isCrossOrigin)(t);
                    n && (o.cors = n), (0, j["default"])(o, p.bind(this, function(t, o, n) {
                        return t ? h["default"].error(t, o) : (e.loaded_ = !0, void("function" != typeof y["default"].WebVTT ? e.tech_ && ! function() {
                            var t = function() {
                                return T(n, e)
                            };
                            e.tech_.on("vttjsloaded", t), e.tech_.on("vttjserror", function() {
                                h["default"].error("vttjs failed to load, stopping trying to process " + e.src), e.tech_.off("vttjsloaded", t)
                            })
                        }() : T(n, e)))
                    }))
                },
                C = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (i(this, e), !r.tech) throw new Error("A tech was not provided.");
                        var a = (0, _["default"])(r, {
                                kind: f.TextTrackKind[r.kind] || "subtitles",
                                language: r.language || r.srclang || ""
                            }),
                            l = f.TextTrackMode[a.mode] || "disabled",
                            c = a["default"];
                        "metadata" !== a.kind && "chapters" !== a.kind || (l = "hidden");
                        var d = o = s(this, t.call(this, a));
                        if (d.tech_ = a.tech, x.IS_IE8)
                            for (var h in e.prototype) "constructor" !== h && (d[h] = e.prototype[h]);
                        d.cues_ = [], d.activeCues_ = [];
                        var v = new u["default"](d.cues_),
                            y = new u["default"](d.activeCues_),
                            g = !1,
                            b = p.bind(d, function() {
                                this.activeCues, g && (this.trigger("cuechange"), g = !1)
                            });
                        return "disabled" !== l && d.tech_.on("timeupdate", b), Object.defineProperty(d, "default", {
                            get: function() {
                                return c
                            },
                            set: function() {}
                        }), Object.defineProperty(d, "mode", {
                            get: function() {
                                return l
                            },
                            set: function(t) {
                                f.TextTrackMode[t] && (l = t, "showing" === l && this.tech_.on("timeupdate", b), this.trigger("modechange"))
                            }
                        }), Object.defineProperty(d, "cues", {
                            get: function() {
                                return this.loaded_ ? v : null
                            },
                            set: function() {}
                        }), Object.defineProperty(d, "activeCues", {
                            get: function() {
                                if (!this.loaded_) return null;
                                if (0 === this.cues.length) return y;
                                for (var t = this.tech_.currentTime(), e = [], o = 0, n = this.cues.length; o < n; o++) {
                                    var r = this.cues[o];
                                    r.startTime <= t && r.endTime >= t ? e.push(r) : r.startTime === r.endTime && r.startTime <= t && r.startTime + .5 >= t && e.push(r)
                                }
                                if (g = !1, e.length !== this.activeCues_.length) g = !0;
                                else
                                    for (var i = 0; i < e.length; i++) this.activeCues_.indexOf(e[i]) === -1 && (g = !0);
                                return this.activeCues_ = e, y.setCues_(this.activeCues_), y
                            },
                            set: function() {}
                        }), a.src ? (d.src = a.src, E(a.src, d)) : d.loaded_ = !0, n = d, s(o, n)
                    }
                    return a(e, t), e.prototype.addCue = function(t) {
                        var e = this.tech_.textTracks();
                        if (e)
                            for (var o = 0; o < e.length; o++) e[o] !== this && e[o].removeCue(t);
                        this.cues_.push(t), this.cues.setCues_(this.cues_)
                    }, e.prototype.removeCue = function(t) {
                        for (var e = !1, o = 0, n = this.cues_.length; o < n; o++) {
                            var r = this.cues_[o];
                            r === t && (this.cues_.splice(o, 1), e = !0)
                        }
                        e && this.cues.setCues_(this.cues_)
                    }, e
                }(b["default"]);
            C.prototype.allowedEvents_ = {
                cuechange: "cuechange"
            }, o["default"] = C
        }, {
            147: 147,
            67: 67,
            73: 73,
            75: 75,
            78: 78,
            82: 82,
            85: 85,
            86: 86,
            90: 90,
            93: 93
        }],
        73: [function(t, e, o) {
            "use strict";
            o.__esModule = !0;
            o.VideoTrackKind = {
                alternative: "alternative",
                captions: "captions",
                main: "main",
                sign: "sign",
                subtitles: "subtitles",
                commentary: "commentary"
            }, o.AudioTrackKind = {
                alternative: "alternative",
                descriptions: "descriptions",
                main: "main",
                "main-desc": "main-desc",
                translation: "translation",
                commentary: "commentary"
            }, o.TextTrackKind = {
                subtitles: "subtitles",
                captions: "captions",
                descriptions: "descriptions",
                chapters: "chapters",
                metadata: "metadata"
            }, o.TextTrackMode = {
                disabled: "disabled",
                hidden: "hidden",
                showing: "showing"
            }
        }, {}],
        74: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(42),
                u = r(l),
                c = t(78),
                p = n(c),
                f = t(92),
                d = r(f),
                h = function(t) {
                    function e() {
                        var o, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i(this, e);
                        var a = s(this, t.call(this));
                        if (!r && (r = a, p.IS_IE8)) {
                            r = d["default"].createElement("custom");
                            for (var l in e.prototype) "constructor" !== l && (r[l] = e.prototype[l])
                        }
                        r.tracks_ = [], Object.defineProperty(r, "length", {
                            get: function() {
                                return this.tracks_.length
                            }
                        });
                        for (var u = 0; u < n.length; u++) r.addTrack_(n[u]);
                        return o = r, s(a, o)
                    }
                    return a(e, t), e.prototype.addTrack_ = function(t) {
                        var e = this.tracks_.length;
                        "" + e in this || Object.defineProperty(this, e, {
                            get: function() {
                                return this.tracks_[e]
                            }
                        }), this.tracks_.indexOf(t) === -1 && (this.tracks_.push(t), this.trigger({
                            track: t,
                            type: "addtrack"
                        }))
                    }, e.prototype.removeTrack_ = function(t) {
                        for (var e = void 0, o = 0, n = this.length; o < n; o++)
                            if (this[o] === t) {
                                e = this[o], e.off && e.off(), this.tracks_.splice(o, 1);
                                break
                            }
                        e && this.trigger({
                            track: e,
                            type: "removetrack"
                        })
                    }, e.prototype.getTrackById = function(t) {
                        for (var e = null, o = 0, n = this.length; o < n; o++) {
                            var r = this[o];
                            if (r.id === t) {
                                e = r;
                                break
                            }
                        }
                        return e
                    }, e
                }(u["default"]);
            h.prototype.allowedEvents_ = {
                change: "change",
                addtrack: "addtrack",
                removetrack: "removetrack"
            };
            for (var v in h.prototype.allowedEvents_) h.prototype["on" + v] = null;
            o["default"] = h
        }, {
            42: 42,
            78: 78,
            92: 92
        }],
        75: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(78),
                u = r(l),
                c = t(92),
                p = n(c),
                f = t(84),
                d = r(f),
                h = t(42),
                v = n(h),
                y = function(t) {
                    function e() {
                        var o, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e);
                        var r = s(this, t.call(this)),
                            a = r;
                        if (u.IS_IE8) {
                            a = p["default"].createElement("custom");
                            for (var l in e.prototype) "constructor" !== l && (a[l] = e.prototype[l])
                        }
                        var c = {
                                id: n.id || "vjs_track_" + d.newGUID(),
                                kind: n.kind || "",
                                label: n.label || "",
                                language: n.language || ""
                            },
                            f = function(t) {
                                Object.defineProperty(a, t, {
                                    get: function() {
                                        return c[t]
                                    },
                                    set: function() {}
                                })
                            };
                        for (var h in c) f(h);
                        return o = a, s(r, o)
                    }
                    return a(e, t), e
                }(v["default"]);
            o["default"] = y
        }, {
            42: 42,
            78: 78,
            84: 84,
            92: 92
        }],
        76: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(74),
                u = r(l),
                c = t(78),
                p = n(c),
                f = t(92),
                d = r(f),
                h = function(t, e) {
                    for (var o = 0; o < t.length; o++) e.id !== t[o].id && (t[o].selected = !1)
                },
                v = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        i(this, e);
                        for (var a = void 0, l = r.length - 1; l >= 0; l--)
                            if (r[l].selected) {
                                h(r, r[l]);
                                break
                            }
                        if (p.IS_IE8) {
                            a = d["default"].createElement("custom");
                            for (var c in u["default"].prototype) "constructor" !== c && (a[c] = u["default"].prototype[c]);
                            for (var f in e.prototype) "constructor" !== f && (a[f] = e.prototype[f])
                        }
                        return a = o = s(this, t.call(this, r, a)), a.changing_ = !1, Object.defineProperty(a, "selectedIndex", {
                            get: function() {
                                for (var t = 0; t < this.length; t++)
                                    if (this[t].selected) return t;
                                return -1
                            },
                            set: function() {}
                        }), n = a, s(o, n)
                    }
                    return a(e, t), e.prototype.addTrack_ = function(e) {
                        var o = this;
                        e.selected && h(this, e), t.prototype.addTrack_.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function() {
                            o.changing_ || (o.changing_ = !0, h(o, e), o.changing_ = !1, o.trigger("change"))
                        })
                    }, e.prototype.addTrack = function(t) {
                        this.addTrack_(t)
                    }, e.prototype.removeTrack = function(e) {
                        t.prototype.removeTrack_.call(this, e)
                    }, e
                }(u["default"]);
            o["default"] = v
        }, {
            74: 74,
            78: 78,
            92: 92
        }],
        77: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function s(t, e) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || "object" != typeof e && "function" != typeof e ? t : e
            }

            function a(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            o.__esModule = !0;
            var l = t(73),
                u = t(75),
                c = r(u),
                p = t(86),
                f = r(p),
                d = t(78),
                h = n(d),
                v = function(t) {
                    function e() {
                        var o, n, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        i(this, e);
                        var a = (0, f["default"])(r, {
                                kind: l.VideoTrackKind[r.kind] || ""
                            }),
                            u = o = s(this, t.call(this, a)),
                            c = !1;
                        if (h.IS_IE8)
                            for (var p in e.prototype) "constructor" !== p && (u[p] = e.prototype[p]);
                        return Object.defineProperty(u, "selected", {
                            get: function() {
                                return c
                            },
                            set: function(t) {
                                "boolean" == typeof t && t !== c && (c = t, this.trigger("selectedchange"))
                            }
                        }), a.selected && (u.selected = a.selected), n = u, s(o, n)
                    }
                    return a(e, t), e
                }(c["default"]);
            o["default"] = v
        }, {
            73: 73,
            75: 75,
            78: 78,
            86: 86
        }],
        78: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0, o.BACKGROUND_SIZE_SUPPORTED = o.TOUCH_ENABLED = o.IE_VERSION = o.IS_IE8 = o.IS_CHROME = o.IS_EDGE = o.IS_FIREFOX = o.IS_NATIVE_ANDROID = o.IS_OLD_ANDROID = o.ANDROID_VERSION = o.IS_ANDROID = o.IOS_VERSION = o.IS_IOS = o.IS_IPOD = o.IS_IPHONE = o.IS_IPAD = void 0;
            var r = t(92),
                i = n(r),
                s = t(93),
                a = n(s),
                l = a["default"].navigator && a["default"].navigator.userAgent || "",
                u = /AppleWebKit\/([\d.]+)/i.exec(l),
                c = u ? parseFloat(u.pop()) : null,
                p = o.IS_IPAD = /iPad/i.test(l),
                f = o.IS_IPHONE = /iPhone/i.test(l) && !p,
                d = o.IS_IPOD = /iPod/i.test(l),
                h = (o.IS_IOS = f || p || d, o.IOS_VERSION = function() {
                    var t = l.match(/OS (\d+)_/i);
                    return t && t[1] ? t[1] : null
                }(), o.IS_ANDROID = /Android/i.test(l)),
                v = o.ANDROID_VERSION = function() {
                    var t = l.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
                    if (!t) return null;
                    var e = t[1] && parseFloat(t[1]),
                        o = t[2] && parseFloat(t[2]);
                    return e && o ? parseFloat(t[1] + "." + t[2]) : e ? e : null
                }(),
                y = (o.IS_OLD_ANDROID = h && /webkit/i.test(l) && v < 2.3, o.IS_NATIVE_ANDROID = h && v < 5 && c < 537, o.IS_FIREFOX = /Firefox/i.test(l), o.IS_EDGE = /Edge/i.test(l));
            o.IS_CHROME = !y && /Chrome/i.test(l), o.IS_IE8 = /MSIE\s8\.0/.test(l), o.IE_VERSION = function(t) {
                return t && parseFloat(t[1])
            }(/MSIE\s(\d+)\.\d/.exec(l)), o.TOUCH_ENABLED = !!("ontouchstart" in a["default"] || a["default"].DocumentTouch && i["default"] instanceof a["default"].DocumentTouch), o.BACKGROUND_SIZE_SUPPORTED = "backgroundSize" in i["default"].createElement("video").style
        }, {
            92: 92,
            93: 93
        }],
        79: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                var o = 0,
                    n = void 0,
                    i = void 0;
                if (!e) return 0;
                t && t.length || (t = (0, r.createTimeRange)(0, 0));
                for (var s = 0; s < t.length; s++) n = t.start(s), i = t.end(s), i > e && (i = e), o += i - n;
                return o / e
            }
            o.__esModule = !0, o.bufferedPercent = n;
            var r = t(88)
        }, {
            88: 88
        }],
        80: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function r(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function i(t, e) {
                return t.raw = e, t
            }

            function s(t) {
                return "string" == typeof t && /\S/.test(t)
            }

            function a(t) {
                if (/\s/.test(t)) throw new Error("class has illegal whitespace characters")
            }

            function l(t) {
                return new RegExp("(^|\\s)" + t + "($|\\s)")
            }

            function u(t) {
                return !!t && "object" === ("undefined" == typeof t ? "undefined" : M(t)) && 1 === t.nodeType
            }

            function c(t) {
                return function(e, o) {
                    if (!s(e)) return D["default"][t](null);
                    s(o) && (o = D["default"].querySelector(o));
                    var n = u(o) ? o : D["default"];
                    return n[t] && n[t](e)
                }
            }

            function p(t) {
                return 0 === t.indexOf("#") && (t = t.slice(1)), D["default"].getElementById(t)
            }

            function f() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "div",
                    e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = D["default"].createElement(t);
                return Object.getOwnPropertyNames(e).forEach(function(t) {
                    var o = e[t];
                    t.indexOf("aria-") !== -1 || "role" === t || "type" === t ? (V["default"].warn((0, H["default"])(I, t, o)), n.setAttribute(t, o)) : n[t] = o
                }), Object.getOwnPropertyNames(o).forEach(function(t) {
                    n.setAttribute(t, o[t])
                }), n
            }

            function d(t, e) {
                "undefined" == typeof t.textContent ? t.innerText = e : t.textContent = e
            }

            function h(t, e) {
                e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
            }

            function v(t) {
                var e = t[G];
                return e || (e = t[G] = Q.newGUID()), Y[e] || (Y[e] = {}), Y[e]
            }

            function y(t) {
                var e = t[G];
                return !!e && !!Object.getOwnPropertyNames(Y[e]).length
            }

            function g(t) {
                var e = t[G];
                if (e) {
                    delete Y[e];
                    try {
                        delete t[G]
                    } catch (o) {
                        t.removeAttribute ? t.removeAttribute(G) : t[G] = null
                    }
                }
            }

            function b(t, e) {
                return a(e), t.classList ? t.classList.contains(e) : l(e).test(t.className)
            }

            function A(t, e) {
                return t.classList ? t.classList.add(e) : b(t, e) || (t.className = (t.className + " " + e).trim()), t
            }

            function m(t, e) {
                return t.classList ? t.classList.remove(e) : (a(e), t.className = t.className.split(/\s+/).filter(function(t) {
                    return t !== e
                }).join(" ")), t
            }

            function j(t, e, o) {
                var n = b(t, e);
                if ("function" == typeof o && (o = o(t, e)), "boolean" != typeof o && (o = !n), o !== n) return o ? A(t, e) : m(t, e), t
            }

            function w(t, e) {
                Object.getOwnPropertyNames(e).forEach(function(o) {
                    var n = e[o];
                    null === n || "undefined" == typeof n || n === !1 ? t.removeAttribute(o) : t.setAttribute(o, n === !0 ? "" : n)
                })
            }

            function _(t) {
                var e = {},
                    o = ",autoplay,controls,loop,muted,default,";
                if (t && t.attributes && t.attributes.length > 0)
                    for (var n = t.attributes, r = n.length - 1; r >= 0; r--) {
                        var i = n[r].name,
                            s = n[r].value;
                        "boolean" != typeof t[i] && o.indexOf("," + i + ",") === -1 || (s = null !== s), e[i] = s
                    }
                return e
            }

            function k() {
                D["default"].body.focus(), D["default"].onselectstart = function() {
                    return !1
                }
            }

            function x() {
                D["default"].onselectstart = function() {
                    return !0
                }
            }

            function T(t) {
                var e = void 0;
                if (t.getBoundingClientRect && t.parentNode && (e = t.getBoundingClientRect()), !e) return {
                    left: 0,
                    top: 0
                };
                var o = D["default"].documentElement,
                    n = D["default"].body,
                    r = o.clientLeft || n.clientLeft || 0,
                    i = F["default"].pageXOffset || n.scrollLeft,
                    s = e.left + i - r,
                    a = o.clientTop || n.clientTop || 0,
                    l = F["default"].pageYOffset || n.scrollTop,
                    u = e.top + l - a;
                return {
                    left: Math.round(s),
                    top: Math.round(u)
                }
            }

            function E(t, e) {
                var o = {},
                    n = T(t),
                    r = t.offsetWidth,
                    i = t.offsetHeight,
                    s = n.top,
                    a = n.left,
                    l = e.pageY,
                    u = e.pageX;
                return e.changedTouches && (u = e.changedTouches[0].pageX, l = e.changedTouches[0].pageY), o.y = Math.max(0, Math.min(1, (s - l + i) / i)), o.x = Math.max(0, Math.min(1, (u - a) / r)), o
            }

            function C(t) {
                return !!t && "object" === ("undefined" == typeof t ? "undefined" : M(t)) && 3 === t.nodeType
            }

            function S(t) {
                for (; t.firstChild;) t.removeChild(t.firstChild);
                return t
            }

            function O(t) {
                return "function" == typeof t && (t = t()), (Array.isArray(t) ? t : [t]).map(function(t) {
                    return "function" == typeof t && (t = t()), u(t) || C(t) ? t : "string" == typeof t && /\S/.test(t) ? D["default"].createTextNode(t) : void 0
                }).filter(function(t) {
                    return t
                })
            }

            function B(t, e) {
                return O(e).forEach(function(e) {
                    return t.appendChild(e)
                }), t
            }

            function P(t, e) {
                return B(S(t), e)
            }
            o.__esModule = !0, o.$$ = o.$ = void 0;
            var M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                I = i(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);
            o.isEl = u, o.getEl = p, o.createEl = f, o.textContent = d, o.insertElFirst = h, o.getElData = v, o.hasElData = y, o.removeElData = g, o.hasElClass = b, o.addElClass = A, o.removeElClass = m, o.toggleElClass = j, o.setElAttributes = w, o.getElAttributes = _, o.blockTextSelection = k, o.unblockTextSelection = x, o.findElPosition = T, o.getPointerPosition = E, o.isTextNode = C, o.emptyEl = S, o.normalizeContent = O, o.appendContent = B, o.insertContent = P;
            var R = t(92),
                D = r(R),
                N = t(93),
                F = r(N),
                L = t(84),
                Q = n(L),
                z = t(85),
                V = r(z),
                U = t(146),
                H = r(U),
                Y = {},
                G = "vdata" + (new Date).getTime();
            o.$ = c("querySelector"), o.$$ = c("querySelectorAll")
        }, {
            146: 146,
            84: 84,
            85: 85,
            92: 92,
            93: 93
        }],
        81: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t, e) {
                var o = d.getElData(t);
                0 === o.handlers[e].length && (delete o.handlers[e], t.removeEventListener ? t.removeEventListener(e, o.dispatcher, !1) : t.detachEvent && t.detachEvent("on" + e, o.dispatcher)), Object.getOwnPropertyNames(o.handlers).length <= 0 && (delete o.handlers, delete o.dispatcher, delete o.disabled), 0 === Object.getOwnPropertyNames(o).length && d.removeElData(t)
            }

            function s(t, e, o, n) {
                o.forEach(function(o) {
                    t(e, o, n)
                })
            }

            function a(t) {
                function e() {
                    return !0
                }

                function o() {
                    return !1
                }
                return t && t.isPropagationStopped || ! function() {
                    var n = t || A["default"].event;
                    t = {};
                    for (var r in n) "layerX" !== r && "layerY" !== r && "keyLocation" !== r && "webkitMovementX" !== r && "webkitMovementY" !== r && ("returnValue" === r && n.preventDefault || (t[r] = n[r]));
                    if (t.target || (t.target = t.srcElement || j["default"]), t.relatedTarget || (t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement), t.preventDefault = function() {
                            n.preventDefault && n.preventDefault(), t.returnValue = !1, n.returnValue = !1, t.defaultPrevented = !0
                        }, t.defaultPrevented = !1, t.stopPropagation = function() {
                            n.stopPropagation && n.stopPropagation(), t.cancelBubble = !0, n.cancelBubble = !0, t.isPropagationStopped = e
                        }, t.isPropagationStopped = o, t.stopImmediatePropagation = function() {
                            n.stopImmediatePropagation && n.stopImmediatePropagation(), t.isImmediatePropagationStopped = e, t.stopPropagation()
                        }, t.isImmediatePropagationStopped = o, null !== t.clientX && void 0 !== t.clientX) {
                        var i = j["default"].documentElement,
                            s = j["default"].body;
                        t.pageX = t.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), t.pageY = t.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)
                    }
                    t.which = t.charCode || t.keyCode, null !== t.button && void 0 !== t.button && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
                }(), t
            }

            function l(t, e, o) {
                if (Array.isArray(e)) return s(l, t, e, o);
                var n = d.getElData(t);
                n.handlers || (n.handlers = {}), n.handlers[e] || (n.handlers[e] = []), o.guid || (o.guid = v.newGUID()), n.handlers[e].push(o), n.dispatcher || (n.disabled = !1, n.dispatcher = function(e, o) {
                    if (!n.disabled) {
                        e = a(e);
                        var r = n.handlers[e.type];
                        if (r)
                            for (var i = r.slice(0), s = 0, l = i.length; s < l && !e.isImmediatePropagationStopped(); s++) try {
                                i[s].call(t, e, o)
                            } catch (u) {
                                g["default"].error(u)
                            }
                    }
                }), 1 === n.handlers[e].length && (t.addEventListener ? t.addEventListener(e, n.dispatcher, !1) : t.attachEvent && t.attachEvent("on" + e, n.dispatcher))
            }

            function u(t, e, o) {
                if (d.hasElData(t)) {
                    var n = d.getElData(t);
                    if (n.handlers) {
                        if (Array.isArray(e)) return s(u, t, e, o);
                        var r = function(e) {
                            n.handlers[e] = [], i(t, e)
                        };
                        if (e) {
                            var a = n.handlers[e];
                            if (a) {
                                if (!o) return void r(e);
                                if (o.guid)
                                    for (var l = 0; l < a.length; l++) a[l].guid === o.guid && a.splice(l--, 1);
                                i(t, e)
                            }
                        } else
                            for (var c in n.handlers) r(c)
                    }
                }
            }

            function c(t, e, o) {
                var n = d.hasElData(t) ? d.getElData(t) : {},
                    r = t.parentNode || t.ownerDocument;
                if ("string" == typeof e && (e = {
                        type: e,
                        target: t
                    }), e = a(e), n.dispatcher && n.dispatcher.call(t, e, o), r && !e.isPropagationStopped() && e.bubbles === !0) c.call(null, r, e, o);
                else if (!r && !e.defaultPrevented) {
                    var i = d.getElData(e.target);
                    e.target[e.type] && (i.disabled = !0, "function" == typeof e.target[e.type] && e.target[e.type](), i.disabled = !1)
                }
                return !e.defaultPrevented
            }

            function p(t, e, o) {
                if (Array.isArray(e)) return s(p, t, e, o);
                var n = function r() {
                    u(t, e, r), o.apply(this, arguments)
                };
                n.guid = o.guid = o.guid || v.newGUID(), l(t, e, n)
            }
            o.__esModule = !0, o.fixEvent = a, o.on = l, o.off = u, o.trigger = c, o.one = p;
            var f = t(80),
                d = r(f),
                h = t(84),
                v = r(h),
                y = t(85),
                g = n(y),
                b = t(93),
                A = n(b),
                m = t(92),
                j = n(m)
        }, {
            80: 80,
            84: 84,
            85: 85,
            92: 92,
            93: 93
        }],
        82: [function(t, e, o) {
            "use strict";
            o.__esModule = !0, o.bind = void 0;
            var n = t(84);
            o.bind = function(t, e, o) {
                e.guid || (e.guid = (0, n.newGUID)());
                var r = function() {
                    return e.apply(t, arguments)
                };
                return r.guid = o ? o + "_" + e.guid : e.guid, r
            }
        }, {
            84: 84
        }],
        83: [function(t, e, o) {
            "use strict";

            function n(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                t = t < 0 ? 0 : t;
                var o = Math.floor(t % 60),
                    n = Math.floor(t / 60 % 60),
                    r = Math.floor(t / 3600),
                    i = Math.floor(e / 60 % 60),
                    s = Math.floor(e / 3600);
                return (isNaN(t) || t === 1 / 0) && (r = n = o = "-"), r = r > 0 || s > 0 ? r + ":" : "", n = ((r || i >= 10) && n < 10 ? "0" + n : n) + ":", o = o < 10 ? "0" + o : o, r + n + o
            }
            o.__esModule = !0, o["default"] = n
        }, {}],
        84: [function(t, e, o) {
            "use strict";

            function n() {
                return r++
            }
            o.__esModule = !0, o.newGUID = n;
            var r = 1
        }, {}],
        85: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0, o.logByType = void 0;
            var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                i = t(93),
                s = n(i),
                a = t(78),
                l = void 0,
                u = o.logByType = function(t, e) {
                    var o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !!a.IE_VERSION && a.IE_VERSION < 11;
                    "log" !== t && e.unshift(t.toUpperCase() + ":"), l.history.push(e), e.unshift("VIDEOJS:");
                    var n = s["default"].console && s["default"].console[t];
                    n && (o && (e = e.map(function(t) {
                        if (t && "object" === ("undefined" == typeof t ? "undefined" : r(t)) || Array.isArray(t)) try {
                            return JSON.stringify(t)
                        } catch (e) {
                            return String(t)
                        }
                        return String(t)
                    }).join(" ")), n.apply ? n[Array.isArray(e) ? "apply" : "call"](s["default"].console, e) : n(e))
                };
            l = function() {
                for (var t = arguments.length, e = Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                u("log", e)
            }, l.history = [], l.error = function() {
                for (var t = arguments.length, e = Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                return u("error", e)
            }, l.warn = function() {
                for (var t = arguments.length, e = Array(t), o = 0; o < t; o++) e[o] = arguments[o];
                return u("warn", e)
            }, o["default"] = l
        }, {
            78: 78,
            93: 93
        }],
        86: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t) {
                return !!t && "object" === ("undefined" == typeof t ? "undefined" : a(t)) && "[object Object]" === t.toString() && t.constructor === Object
            }

            function i(t, e) {
                return r(e) ? r(t) ? void 0 : s(e) : e
            }

            function s() {
                var t = Array.prototype.slice.call(arguments);
                return t.unshift({}), t.push(i), u["default"].apply(null, t), t[0]
            }
            o.__esModule = !0;
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            };
            o["default"] = s;
            var l = t(131),
                u = n(l)
        }, {
            131: 131
        }],
        87: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0, o.setTextContent = o.createStyleElement = void 0;
            var r = t(92),
                i = n(r);
            o.createStyleElement = function(t) {
                var e = i["default"].createElement("style");
                return e.className = t, e
            }, o.setTextContent = function(t, e) {
                t.styleSheet ? t.styleSheet.cssText = e : t.textContent = e
            }
        }, {
            92: 92
        }],
        88: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e, o) {
                if (e < 0 || e > o) throw new Error("Failed to execute '" + t + "' on 'TimeRanges': The index provided (" + e + ") is greater than or equal to the maximum bound (" + o + ").")
            }

            function i(t, e, o, n) {
                return void 0 === n && (u["default"].warn("DEPRECATED: Function '" + t + "' on 'TimeRanges' called without an index argument."), n = 0), r(t, n, o.length - 1), o[n][e]
            }

            function s(t) {
                return void 0 === t || 0 === t.length ? {
                    length: 0,
                    start: function() {
                        throw new Error("This TimeRanges object is empty")
                    },
                    end: function() {
                        throw new Error("This TimeRanges object is empty")
                    }
                } : {
                    length: t.length,
                    start: i.bind(null, "start", 0, t),
                    end: i.bind(null, "end", 1, t)
                }
            }

            function a(t, e) {
                return Array.isArray(t) ? s(t) : void 0 === t || void 0 === e ? s() : s([
                    [t, e]
                ])
            }
            o.__esModule = !0, o.createTimeRange = void 0, o.createTimeRanges = a;
            var l = t(85),
                u = n(l);
            o.createTimeRange = a
        }, {
            85: 85
        }],
        89: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            o.__esModule = !0, o["default"] = n
        }, {}],
        90: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            o.__esModule = !0, o.isCrossOrigin = o.getFileExtension = o.getAbsoluteURL = o.parseUrl = void 0;
            var r = t(92),
                i = n(r),
                s = t(93),
                a = n(s),
                l = o.parseUrl = function(t) {
                    var e = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"],
                        o = i["default"].createElement("a");
                    o.href = t;
                    var n = "" === o.host && "file:" !== o.protocol,
                        r = void 0;
                    n && (r = i["default"].createElement("div"), r.innerHTML = '<a href="' + t + '"></a>', o = r.firstChild, r.setAttribute("style", "display:none; position:absolute;"), i["default"].body.appendChild(r));
                    for (var s = {}, a = 0; a < e.length; a++) s[e[a]] = o[e[a]];
                    return "http:" === s.protocol && (s.host = s.host.replace(/:80$/, "")), "https:" === s.protocol && (s.host = s.host.replace(/:443$/, "")), n && i["default"].body.removeChild(r), s
                };
            o.getAbsoluteURL = function(t) {
                if (!t.match(/^https?:\/\//)) {
                    var e = i["default"].createElement("div");
                    e.innerHTML = '<a href="' + t + '">x</a>', t = e.firstChild.href
                }
                return t
            }, o.getFileExtension = function(t) {
                if ("string" == typeof t) {
                    var e = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i,
                        o = e.exec(t);
                    if (o) return o.pop().toLowerCase()
                }
                return ""
            }, o.isCrossOrigin = function(t) {
                var e = a["default"].location,
                    o = l(t),
                    n = ":" === o.protocol ? e.protocol : o.protocol,
                    r = n + o.host !== e.protocol + e.host;
                return r
            }
        }, {
            92: 92,
            93: 93
        }],
        91: [function(e, o, n) {
            "use strict";

            function r(t) {
                if (t && t.__esModule) return t;
                var e = {};
                if (null != t)
                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e["default"] = t, e
            }

            function i(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function s(t, e, o) {
                var n = void 0;
                if ("string" == typeof t) {
                    if (0 === t.indexOf("#") && (t = t.slice(1)), s.getPlayers()[t]) return e && Q["default"].warn('Player "' + t + '" is already initialised. Options will not be applied.'), o && s.getPlayers()[t].ready(o), s.getPlayers()[t];
                    n = V.getEl(t)
                } else n = t;
                if (!n || !n.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
                return n.player || _["default"].players[n.playerId] || new _["default"](n, e, o)
            }
            n.__esModule = !0;
            var a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                },
                l = e(93),
                u = i(l),
                c = e(92),
                p = i(c),
                f = e(56),
                d = r(f),
                h = e(87),
                v = r(h),
                y = e(5),
                g = i(y),
                b = e(42),
                A = i(b),
                m = e(81),
                j = r(m),
                w = e(51),
                _ = i(w),
                k = e(52),
                x = i(k),
                T = e(86),
                E = i(T),
                C = e(82),
                S = r(C),
                O = e(72),
                B = i(O),
                P = e(64),
                M = i(P),
                I = e(77),
                R = i(I),
                D = e(88),
                N = e(83),
                F = i(N),
                L = e(85),
                Q = i(L),
                z = e(80),
                V = r(z),
                U = e(78),
                H = r(U),
                Y = e(90),
                G = r(Y),
                W = e(43),
                X = i(W),
                J = e(131),
                K = i(J),
                Z = e(147),
                q = i(Z),
                $ = e(62),
                tt = i($);
            if ("undefined" == typeof HTMLVideoElement && u["default"].document && u["default"].document.createElement && (p["default"].createElement("video"), p["default"].createElement("audio"), p["default"].createElement("track")), u["default"].VIDEOJS_NO_DYNAMIC_STYLE !== !0) {
                var et = V.$(".vjs-styles-defaults");
                if (!et) {
                    et = v.createStyleElement("vjs-styles-defaults");
                    var ot = V.$("head");
                    ot && ot.insertBefore(et, ot.firstChild), v.setTextContent(et, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
                }
            }
            d.autoSetupTimeout(1, s), s.VERSION = "5.12.6", s.options = _["default"].prototype.options_, s.getPlayers = function() {
                return _["default"].players
            }, s.players = _["default"].players, s.getComponent = g["default"].getComponent, s.registerComponent = function(t, e) {
                tt["default"].isTech(e) && Q["default"].warn("The " + t + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), g["default"].registerComponent.call(g["default"], t, e)
            }, s.getTech = tt["default"].getTech, s.registerTech = tt["default"].registerTech, s.browser = H, s.TOUCH_ENABLED = H.TOUCH_ENABLED, s.extend = X["default"], s.mergeOptions = E["default"], s.bind = S.bind, s.plugin = x["default"], s.addLanguage = function(t, e) {
                var o;
                return t = ("" + t).toLowerCase(), (0, K["default"])(s.options.languages, (o = {}, o[t] = e, o))[t]
            }, s.log = Q["default"], s.createTimeRange = s.createTimeRanges = D.createTimeRanges, s.formatTime = F["default"], s.parseUrl = G.parseUrl, s.isCrossOrigin = G.isCrossOrigin, s.EventTarget = A["default"], s.on = j.on, s.one = j.one, s.off = j.off, s.trigger = j.trigger, s.xhr = q["default"], s.TextTrack = B["default"], s.AudioTrack = M["default"], s.VideoTrack = R["default"], s.isEl = V.isEl, s.isTextNode = V.isTextNode, s.createEl = V.createEl, s.hasClass = V.hasElClass, s.addClass = V.addElClass, s.removeClass = V.removeElClass, s.toggleClass = V.toggleElClass, s.setAttributes = V.setElAttributes, s.getAttributes = V.getElAttributes, s.emptyEl = V.emptyEl, s.appendContent = V.appendContent, s.insertContent = V.insertContent, "function" == typeof t && t.amd ? t("videojs", [], function() {
                return s
            }) : "object" === ("undefined" == typeof n ? "undefined" : a(n)) && "object" === ("undefined" == typeof o ? "undefined" : a(o)) && (o.exports = s), n["default"] = s
        }, {
            131: 131,
            147: 147,
            42: 42,
            43: 43,
            5: 5,
            51: 51,
            52: 52,
            56: 56,
            62: 62,
            64: 64,
            72: 72,
            77: 77,
            78: 78,
            80: 80,
            81: 81,
            82: 82,
            83: 83,
            85: 85,
            86: 86,
            87: 87,
            88: 88,
            90: 90,
            92: 92,
            93: 93
        }],
        92: [function(t, e, o) {
            (function(o) {
                var n = "undefined" != typeof o ? o : "undefined" != typeof window ? window : {},
                    r = t(94);
                if ("undefined" != typeof document) e.exports = document;
                else {
                    var i = n["__GLOBAL_DOCUMENT_CACHE@4"];
                    i || (i = n["__GLOBAL_DOCUMENT_CACHE@4"] = r), e.exports = i
                }
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            94: 94
        }],
        93: [function(t, e, o) {
            (function(t) {
                "undefined" != typeof window ? e.exports = window : "undefined" != typeof t ? e.exports = t : "undefined" != typeof self ? e.exports = self : e.exports = {}
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        94: [function(t, e, o) {}, {}],
        95: [function(t, e, o) {
            var n = t(111),
                r = n(Date, "now"),
                i = r || function() {
                    return (new Date).getTime()
                };
            e.exports = i
        }, {
            111: 111
        }],
        96: [function(t, e, o) {
            function n(t, e, o) {
                function n() {
                    g && clearTimeout(g), d && clearTimeout(d), A = 0, d = g = b = void 0
                }

                function l(e, o) {
                    o && clearTimeout(o), d = g = b = void 0, e && (A = i(), h = t.apply(y, f), g || d || (f = y = void 0))
                }

                function u() {
                    var t = e - (i() - v);
                    t <= 0 || t > e ? l(b, d) : g = setTimeout(u, t)
                }

                function c() {
                    l(j, g)
                }

                function p() {
                    if (f = arguments, v = i(), y = this, b = j && (g || !w), m === !1) var o = w && !g;
                    else {
                        d || w || (A = v);
                        var n = m - (v - A),
                            r = n <= 0 || n > m;
                        r ? (d && (d = clearTimeout(d)), A = v, h = t.apply(y, f)) : d || (d = setTimeout(c, n))
                    }
                    return r && g ? g = clearTimeout(g) : g || e === m || (g = setTimeout(u, e)), o && (r = !0, h = t.apply(y, f)), !r || g || d || (f = y = void 0), h
                }
                var f, d, h, v, y, g, b, A = 0,
                    m = !1,
                    j = !0;
                if ("function" != typeof t) throw new TypeError(s);
                if (e = e < 0 ? 0 : +e || 0, o === !0) {
                    var w = !0;
                    j = !1
                } else r(o) && (w = !!o.leading, m = "maxWait" in o && a(+o.maxWait || 0, e), j = "trailing" in o ? !!o.trailing : j);
                return p.cancel = n, p
            }
            var r = t(124),
                i = t(95),
                s = "Expected a function",
                a = Math.max;
            e.exports = n
        }, {
            124: 124,
            95: 95
        }],
        97: [function(t, e, o) {
            function n(t, e) {
                if ("function" != typeof t) throw new TypeError(r);
                return e = i(void 0 === e ? t.length - 1 : +e || 0, 0),
                    function() {
                        for (var o = arguments, n = -1, r = i(o.length - e, 0), s = Array(r); ++n < r;) s[n] = o[e + n];
                        switch (e) {
                            case 0:
                                return t.call(this, s);
                            case 1:
                                return t.call(this, o[0], s);
                            case 2:
                                return t.call(this, o[0], o[1], s)
                        }
                        var a = Array(e + 1);
                        for (n = -1; ++n < e;) a[n] = o[n];
                        return a[e] = s, t.apply(this, a)
                    }
            }
            var r = "Expected a function",
                i = Math.max;
            e.exports = n
        }, {}],
        98: [function(t, e, o) {
            function n(t, e, o) {
                var n = !0,
                    a = !0;
                if ("function" != typeof t) throw new TypeError(s);
                return o === !1 ? n = !1 : i(o) && (n = "leading" in o ? !!o.leading : n, a = "trailing" in o ? !!o.trailing : a), r(t, e, {
                    leading: n,
                    maxWait: +e,
                    trailing: a
                })
            }
            var r = t(96),
                i = t(124),
                s = "Expected a function";
            e.exports = n
        }, {
            124: 124,
            96: 96
        }],
        99: [function(t, e, o) {
            function n(t, e) {
                var o = -1,
                    n = t.length;
                for (e || (e = Array(n)); ++o < n;) e[o] = t[o];
                return e
            }
            e.exports = n
        }, {}],
        100: [function(t, e, o) {
            function n(t, e) {
                for (var o = -1, n = t.length; ++o < n && e(t[o], o, t) !== !1;);
                return t
            }
            e.exports = n
        }, {}],
        101: [function(t, e, o) {
            function n(t, e, o) {
                o || (o = {});
                for (var n = -1, r = e.length; ++n < r;) {
                    var i = e[n];
                    o[i] = t[i]
                }
                return o
            }
            e.exports = n
        }, {}],
        102: [function(t, e, o) {
            var n = t(109),
                r = n();
            e.exports = r
        }, {
            109: 109
        }],
        103: [function(t, e, o) {
            function n(t, e) {
                return r(t, e, i)
            }
            var r = t(102),
                i = t(130);
            e.exports = n
        }, {
            102: 102,
            130: 130
        }],
        104: [function(t, e, o) {
            function n(t, e, o, f, d) {
                if (!l(t)) return t;
                var h = a(e) && (s(e) || c(e)),
                    v = h ? void 0 : p(e);
                return r(v || e, function(r, s) {
                    if (v && (s = r, r = e[s]), u(r)) f || (f = []), d || (d = []), i(t, e, s, n, o, f, d);
                    else {
                        var a = t[s],
                            l = o ? o(a, r, s, t, e) : void 0,
                            c = void 0 === l;
                        c && (l = r), void 0 === l && (!h || s in t) || !c && (l === l ? l === a : a !== a) || (t[s] = l)
                    }
                }), t
            }
            var r = t(100),
                i = t(105),
                s = t(121),
                a = t(112),
                l = t(124),
                u = t(117),
                c = t(127),
                p = t(129);
            e.exports = n
        }, {
            100: 100,
            105: 105,
            112: 112,
            117: 117,
            121: 121,
            124: 124,
            127: 127,
            129: 129
        }],
        105: [function(t, e, o) {
            function n(t, e, o, n, p, f, d) {
                for (var h = f.length, v = e[o]; h--;)
                    if (f[h] == v) return void(t[o] = d[h]);
                var y = t[o],
                    g = p ? p(y, v, o, t, e) : void 0,
                    b = void 0 === g;
                b && (g = v, a(v) && (s(v) || u(v)) ? g = s(y) ? y : a(y) ? r(y) : [] : l(v) || i(v) ? g = i(y) ? c(y) : l(y) ? y : {} : b = !1), f.push(v), d.push(g), b ? t[o] = n(g, v, p, f, d) : (g === g ? g !== y : y === y) && (t[o] = g)
            }
            var r = t(99),
                i = t(120),
                s = t(121),
                a = t(112),
                l = t(125),
                u = t(127),
                c = t(128);
            e.exports = n
        }, {
            112: 112,
            120: 120,
            121: 121,
            125: 125,
            127: 127,
            128: 128,
            99: 99
        }],
        106: [function(t, e, o) {
            function n(t) {
                return function(e) {
                    return null == e ? void 0 : r(e)[t]
                }
            }
            var r = t(119);
            e.exports = n
        }, {
            119: 119
        }],
        107: [function(t, e, o) {
            function n(t, e, o) {
                if ("function" != typeof t) return r;
                if (void 0 === e) return t;
                switch (o) {
                    case 1:
                        return function(o) {
                            return t.call(e, o)
                        };
                    case 3:
                        return function(o, n, r) {
                            return t.call(e, o, n, r)
                        };
                    case 4:
                        return function(o, n, r, i) {
                            return t.call(e, o, n, r, i)
                        };
                    case 5:
                        return function(o, n, r, i, s) {
                            return t.call(e, o, n, r, i, s)
                        }
                }
                return function() {
                    return t.apply(e, arguments)
                }
            }
            var r = t(133);
            e.exports = n
        }, {
            133: 133
        }],
        108: [function(t, e, o) {
            function n(t) {
                return s(function(e, o) {
                    var n = -1,
                        s = null == e ? 0 : o.length,
                        a = s > 2 ? o[s - 2] : void 0,
                        l = s > 2 ? o[2] : void 0,
                        u = s > 1 ? o[s - 1] : void 0;
                    for ("function" == typeof a ? (a = r(a, u, 5), s -= 2) : (a = "function" == typeof u ? u : void 0, s -= a ? 1 : 0), l && i(o[0], o[1], l) && (a = s < 3 ? void 0 : a, s = 1); ++n < s;) {
                        var c = o[n];
                        c && t(e, c, a)
                    }
                    return e
                })
            }
            var r = t(107),
                i = t(115),
                s = t(97);
            e.exports = n
        }, {
            107: 107,
            115: 115,
            97: 97
        }],
        109: [function(t, e, o) {
            function n(t) {
                return function(e, o, n) {
                    for (var i = r(e), s = n(e), a = s.length, l = t ? a : -1; t ? l-- : ++l < a;) {
                        var u = s[l];
                        if (o(i[u], u, i) === !1) break
                    }
                    return e
                }
            }
            var r = t(119);
            e.exports = n
        }, {
            119: 119
        }],
        110: [function(t, e, o) {
            var n = t(106),
                r = n("length");
            e.exports = r
        }, {
            106: 106
        }],
        111: [function(t, e, o) {
            function n(t, e) {
                var o = null == t ? void 0 : t[e];
                return r(o) ? o : void 0
            }
            var r = t(123);
            e.exports = n
        }, {
            123: 123
        }],
        112: [function(t, e, o) {
            function n(t) {
                return null != t && i(r(t))
            }
            var r = t(110),
                i = t(116);
            e.exports = n
        }, {
            110: 110,
            116: 116
        }],
        113: [function(t, e, o) {
            var n = function() {
                try {
                    Object({
                        toString: 0
                    } + "")
                } catch (t) {
                    return function() {
                        return !1
                    }
                }
                return function(t) {
                    return "function" != typeof t.toString && "string" == typeof(t + "")
                }
            }();
            e.exports = n
        }, {}],
        114: [function(t, e, o) {
            function n(t, e) {
                return t = "number" == typeof t || r.test(t) ? +t : -1, e = null == e ? i : e, t > -1 && t % 1 == 0 && t < e
            }
            var r = /^\d+$/,
                i = 9007199254740991;
            e.exports = n
        }, {}],
        115: [function(t, e, o) {
            function n(t, e, o) {
                if (!s(o)) return !1;
                var n = typeof e;
                if ("number" == n ? r(o) && i(e, o.length) : "string" == n && e in o) {
                    var a = o[e];
                    return t === t ? t === a : a !== a
                }
                return !1
            }
            var r = t(112),
                i = t(114),
                s = t(124);
            e.exports = n
        }, {
            112: 112,
            114: 114,
            124: 124
        }],
        116: [function(t, e, o) {
            function n(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= r
            }
            var r = 9007199254740991;
            e.exports = n
        }, {}],
        117: [function(t, e, o) {
            function n(t) {
                return !!t && "object" == typeof t
            }
            e.exports = n
        }, {}],
        118: [function(t, e, o) {
            function n(t) {
                for (var e = u(t), o = e.length, n = o && t.length, c = !!n && a(n) && (i(t) || r(t) || l(t)), f = -1, d = []; ++f < o;) {
                    var h = e[f];
                    (c && s(h, n) || p.call(t, h)) && d.push(h)
                }
                return d
            }
            var r = t(120),
                i = t(121),
                s = t(114),
                a = t(116),
                l = t(126),
                u = t(130),
                c = Object.prototype,
                p = c.hasOwnProperty;
            e.exports = n
        }, {
            114: 114,
            116: 116,
            120: 120,
            121: 121,
            126: 126,
            130: 130
        }],
        119: [function(t, e, o) {
            function n(t) {
                if (s.unindexedChars && i(t)) {
                    for (var e = -1, o = t.length, n = Object(t); ++e < o;) n[e] = t.charAt(e);
                    return n
                }
                return r(t) ? t : Object(t)
            }
            var r = t(124),
                i = t(126),
                s = t(132);
            e.exports = n
        }, {
            124: 124,
            126: 126,
            132: 132
        }],
        120: [function(t, e, o) {
            function n(t) {
                return i(t) && r(t) && a.call(t, "callee") && !l.call(t, "callee")
            }
            var r = t(112),
                i = t(117),
                s = Object.prototype,
                a = s.hasOwnProperty,
                l = s.propertyIsEnumerable;
            e.exports = n
        }, {
            112: 112,
            117: 117
        }],
        121: [function(t, e, o) {
            var n = t(111),
                r = t(116),
                i = t(117),
                s = "[object Array]",
                a = Object.prototype,
                l = a.toString,
                u = n(Array, "isArray"),
                c = u || function(t) {
                    return i(t) && r(t.length) && l.call(t) == s
                };
            e.exports = c
        }, {
            111: 111,
            116: 116,
            117: 117
        }],
        122: [function(t, e, o) {
            function n(t) {
                return r(t) && a.call(t) == i
            }
            var r = t(124),
                i = "[object Function]",
                s = Object.prototype,
                a = s.toString;
            e.exports = n
        }, {
            124: 124
        }],
        123: [function(t, e, o) {
            function n(t) {
                return null != t && (r(t) ? p.test(u.call(t)) : s(t) && (i(t) ? p : a).test(t))
            }
            var r = t(122),
                i = t(113),
                s = t(117),
                a = /^\[object .+?Constructor\]$/,
                l = Object.prototype,
                u = Function.prototype.toString,
                c = l.hasOwnProperty,
                p = RegExp("^" + u.call(c).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = n
        }, {
            113: 113,
            117: 117,
            122: 122
        }],
        124: [function(t, e, o) {
            function n(t) {
                var e = typeof t;
                return !!t && ("object" == e || "function" == e)
            }
            e.exports = n
        }, {}],
        125: [function(t, e, o) {
            function n(t) {
                var e;
                if (!a(t) || f.call(t) != u || s(t) || i(t) || !p.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
                var o;
                return l.ownLast ? (r(t, function(t, e, n) {
                    return o = p.call(n, e), !1
                }), o !== !1) : (r(t, function(t, e) {
                    o = e
                }), void 0 === o || p.call(t, o))
            }
            var r = t(103),
                i = t(120),
                s = t(113),
                a = t(117),
                l = t(132),
                u = "[object Object]",
                c = Object.prototype,
                p = c.hasOwnProperty,
                f = c.toString;
            e.exports = n
        }, {
            103: 103,
            113: 113,
            117: 117,
            120: 120,
            132: 132
        }],
        126: [function(t, e, o) {
            function n(t) {
                return "string" == typeof t || r(t) && a.call(t) == i
            }
            var r = t(117),
                i = "[object String]",
                s = Object.prototype,
                a = s.toString;
            e.exports = n
        }, {
            117: 117
        }],
        127: [function(t, e, o) {
            function n(t) {
                return i(t) && r(t.length) && !!S[B.call(t)]
            }
            var r = t(116),
                i = t(117),
                s = "[object Arguments]",
                a = "[object Array]",
                l = "[object Boolean]",
                u = "[object Date]",
                c = "[object Error]",
                p = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                h = "[object Object]",
                v = "[object RegExp]",
                y = "[object Set]",
                g = "[object String]",
                b = "[object WeakMap]",
                A = "[object ArrayBuffer]",
                m = "[object Float32Array]",
                j = "[object Float64Array]",
                w = "[object Int8Array]",
                _ = "[object Int16Array]",
                k = "[object Int32Array]",
                x = "[object Uint8Array]",
                T = "[object Uint8ClampedArray]",
                E = "[object Uint16Array]",
                C = "[object Uint32Array]",
                S = {};
            S[m] = S[j] = S[w] = S[_] = S[k] = S[x] = S[T] = S[E] = S[C] = !0, S[s] = S[a] = S[A] = S[l] = S[u] = S[c] = S[p] = S[f] = S[d] = S[h] = S[v] = S[y] = S[g] = S[b] = !1;
            var O = Object.prototype,
                B = O.toString;
            e.exports = n
        }, {
            116: 116,
            117: 117
        }],
        128: [function(t, e, o) {
            function n(t) {
                return r(t, i(t))
            }
            var r = t(101),
                i = t(130);
            e.exports = n
        }, {
            101: 101,
            130: 130
        }],
        129: [function(t, e, o) {
            var n = t(111),
                r = t(112),
                i = t(124),
                s = t(118),
                a = t(132),
                l = n(Object, "keys"),
                u = l ? function(t) {
                    var e = null == t ? void 0 : t.constructor;
                    return "function" == typeof e && e.prototype === t || ("function" == typeof t ? a.enumPrototypes : r(t)) ? s(t) : i(t) ? l(t) : []
                } : s;
            e.exports = u
        }, {
            111: 111,
            112: 112,
            118: 118,
            124: 124,
            132: 132
        }],
        130: [function(t, e, o) {
            function n(t) {
                if (null == t) return [];
                c(t) || (t = Object(t));
                var e = t.length;
                e = e && u(e) && (s(t) || i(t) || p(t)) && e || 0;
                for (var o = t.constructor, n = -1, r = a(o) && o.prototype || k, d = r === t, h = Array(e), v = e > 0, g = f.enumErrorProps && (t === _ || t instanceof Error), b = f.enumPrototypes && a(t); ++n < e;) h[n] = n + "";
                for (var m in t) b && "prototype" == m || g && ("message" == m || "name" == m) || v && l(m, e) || "constructor" == m && (d || !T.call(t, m)) || h.push(m);
                if (f.nonEnumShadows && t !== k) {
                    var S = t === x ? j : t === _ ? y : E.call(t),
                        O = C[S] || C[A];
                    for (S == A && (r = k), e = w.length; e--;) {
                        m = w[e];
                        var B = O[m];
                        d && B || (B ? !T.call(t, m) : t[m] === r[m]) || h.push(m)
                    }
                }
                return h
            }
            var r = t(100),
                i = t(120),
                s = t(121),
                a = t(122),
                l = t(114),
                u = t(116),
                c = t(124),
                p = t(126),
                f = t(132),
                d = "[object Array]",
                h = "[object Boolean]",
                v = "[object Date]",
                y = "[object Error]",
                g = "[object Function]",
                b = "[object Number]",
                A = "[object Object]",
                m = "[object RegExp]",
                j = "[object String]",
                w = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
                _ = Error.prototype,
                k = Object.prototype,
                x = String.prototype,
                T = k.hasOwnProperty,
                E = k.toString,
                C = {};
            C[d] = C[v] = C[b] = {
                constructor: !0,
                toLocaleString: !0,
                toString: !0,
                valueOf: !0
            }, C[h] = C[j] = {
                constructor: !0,
                toString: !0,
                valueOf: !0
            }, C[y] = C[g] = C[m] = {
                constructor: !0,
                toString: !0
            }, C[A] = {
                constructor: !0
            }, r(w, function(t) {
                for (var e in C)
                    if (T.call(C, e)) {
                        var o = C[e];
                        o[t] = T.call(o, t)
                    }
            }), e.exports = n
        }, {
            100: 100,
            114: 114,
            116: 116,
            120: 120,
            121: 121,
            122: 122,
            124: 124,
            126: 126,
            132: 132
        }],
        131: [function(t, e, o) {
            var n = t(104),
                r = t(108),
                i = r(n);
            e.exports = i
        }, {
            104: 104,
            108: 108
        }],
        132: [function(t, e, o) {
            var n = Array.prototype,
                r = Error.prototype,
                i = Object.prototype,
                s = i.propertyIsEnumerable,
                a = n.splice,
                l = {};
            ! function(t) {
                var e = function() {
                        this.x = t
                    },
                    o = {
                        0: t,
                        length: t
                    },
                    n = [];
                e.prototype = {
                    valueOf: t,
                    y: t
                };
                for (var i in new e) n.push(i);
                l.enumErrorProps = s.call(r, "message") || s.call(r, "name"), l.enumPrototypes = s.call(e, "prototype"), l.nonEnumShadows = !/valueOf/.test(n), l.ownLast = "x" != n[0], l.spliceObjects = (a.call(o, 0, 1), !o[0]), l.unindexedChars = "x" [0] + Object("x")[0] != "xx"
            }(1, 0), e.exports = l
        }, {}],
        133: [function(t, e, o) {
            function n(t) {
                return t
            }
            e.exports = n
        }, {}],
        134: [function(t, e, o) {
            "use strict";
            var n = t(141);
            e.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    e = Symbol("test"),
                    o = Object(e);
                if ("string" == typeof e) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                if ("[object Symbol]" !== Object.prototype.toString.call(o)) return !1;
                var r = 42;
                t[e] = r;
                for (e in t) return !1;
                if (0 !== n(t).length) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length) return !1;
                if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var i = Object.getOwnPropertySymbols(t);
                if (1 !== i.length || i[0] !== e) return !1;
                if (!Object.prototype.propertyIsEnumerable.call(t, e)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var s = Object.getOwnPropertyDescriptor(t, e);
                    if (s.value !== r || s.enumerable !== !0) return !1
                }
                return !0
            }
        }, {
            141: 141
        }],
        135: [function(t, e, o) {
            "use strict";
            var n = t(141),
                r = t(140),
                i = function(t) {
                    return "undefined" != typeof t && null !== t
                },
                s = t(134)(),
                a = Object,
                l = r.call(Function.call, Array.prototype.push),
                u = r.call(Function.call, Object.prototype.propertyIsEnumerable),
                c = s ? Object.getOwnPropertySymbols : null;
            e.exports = function(t, e) {
                if (!i(t)) throw new TypeError("target must be an object");
                var o, r, p, f, d, h, v, y = a(t);
                for (o = 1; o < arguments.length; ++o) {
                    r = a(arguments[o]), f = n(r);
                    var g = s && (Object.getOwnPropertySymbols || c);
                    if (g)
                        for (d = g(r), p = 0; p < d.length; ++p) v = d[p], u(r, v) && l(f, v);
                    for (p = 0; p < f.length; ++p) v = f[p], h = r[v], u(r, v) && (y[v] = h)
                }
                return y
            }
        }, {
            134: 134,
            140: 140,
            141: 141
        }],
        136: [function(t, e, o) {
            "use strict";
            var n = t(137),
                r = t(135),
                i = t(143),
                s = t(144),
                a = i();
            n(a, {
                implementation: r,
                getPolyfill: i,
                shim: s
            }), e.exports = a
        }, {
            135: 135,
            137: 137,
            143: 143,
            144: 144
        }],
        137: [function(t, e, o) {
            "use strict";
            var n = t(141),
                r = t(138),
                i = "function" == typeof Symbol && "symbol" == typeof Symbol(),
                s = Object.prototype.toString,
                a = function(t) {
                    return "function" == typeof t && "[object Function]" === s.call(t)
                },
                l = function() {
                    var t = {};
                    try {
                        Object.defineProperty(t, "x", {
                            enumerable: !1,
                            value: t
                        });
                        for (var e in t) return !1;
                        return t.x === t
                    } catch (o) {
                        return !1
                    }
                },
                u = Object.defineProperty && l(),
                c = function(t, e, o, n) {
                    (!(e in t) || a(n) && n()) && (u ? Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: o,
                        writable: !0
                    }) : t[e] = o)
                },
                p = function(t, e) {
                    var o = arguments.length > 2 ? arguments[2] : {},
                        s = n(e);
                    i && (s = s.concat(Object.getOwnPropertySymbols(e))), r(s, function(n) {
                        c(t, n, e[n], o[n])
                    })
                };
            p.supportsDescriptors = !!u, e.exports = p
        }, {
            138: 138,
            141: 141
        }],
        138: [function(t, e, o) {
            var n = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString;
            e.exports = function(t, e, o) {
                if ("[object Function]" !== r.call(e)) throw new TypeError("iterator must be a function");
                var i = t.length;
                if (i === +i)
                    for (var s = 0; s < i; s++) e.call(o, t[s], s, t);
                else
                    for (var a in t) n.call(t, a) && e.call(o, t[a], a, t)
            }
        }, {}],
        139: [function(t, e, o) {
            var n = "Function.prototype.bind called on incompatible ",
                r = Array.prototype.slice,
                i = Object.prototype.toString,
                s = "[object Function]";
            e.exports = function(t) {
                var e = this;
                if ("function" != typeof e || i.call(e) !== s) throw new TypeError(n + e);
                for (var o, a = r.call(arguments, 1), l = function() {
                        if (this instanceof o) {
                            var n = e.apply(this, a.concat(r.call(arguments)));
                            return Object(n) === n ? n : this
                        }
                        return e.apply(t, a.concat(r.call(arguments)))
                    }, u = Math.max(0, e.length - a.length), c = [], p = 0; p < u; p++) c.push("$" + p);
                if (o = Function("binder", "return function (" + c.join(",") + "){ return binder.apply(this,arguments); }")(l), e.prototype) {
                    var f = function() {};
                    f.prototype = e.prototype, o.prototype = new f, f.prototype = null
                }
                return o
            }
        }, {}],
        140: [function(t, e, o) {
            var n = t(139);
            e.exports = Function.prototype.bind || n
        }, {
            139: 139
        }],
        141: [function(t, e, o) {
            "use strict";
            var n = Object.prototype.hasOwnProperty,
                r = Object.prototype.toString,
                i = Array.prototype.slice,
                s = t(142),
                a = Object.prototype.propertyIsEnumerable,
                l = !a.call({
                    toString: null
                }, "toString"),
                u = a.call(function() {}, "prototype"),
                c = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                p = function(t) {
                    var e = t.constructor;
                    return e && e.prototype === t
                },
                f = {
                    $console: !0,
                    $external: !0,
                    $frame: !0,
                    $frameElement: !0,
                    $frames: !0,
                    $innerHeight: !0,
                    $innerWidth: !0,
                    $outerHeight: !0,
                    $outerWidth: !0,
                    $pageXOffset: !0,
                    $pageYOffset: !0,
                    $parent: !0,
                    $scrollLeft: !0,
                    $scrollTop: !0,
                    $scrollX: !0,
                    $scrollY: !0,
                    $self: !0,
                    $webkitIndexedDB: !0,
                    $webkitStorageInfo: !0,
                    $window: !0
                },
                d = function() {
                    if ("undefined" == typeof window) return !1;
                    for (var t in window) try {
                        if (!f["$" + t] && n.call(window, t) && null !== window[t] && "object" == typeof window[t]) try {
                            p(window[t])
                        } catch (e) {
                            return !0
                        }
                    } catch (e) {
                        return !0
                    }
                    return !1
                }(),
                h = function(t) {
                    if ("undefined" == typeof window || !d) return p(t);
                    try {
                        return p(t)
                    } catch (e) {
                        return !1
                    }
                },
                v = function(t) {
                    var e = null !== t && "object" == typeof t,
                        o = "[object Function]" === r.call(t),
                        i = s(t),
                        a = e && "[object String]" === r.call(t),
                        p = [];
                    if (!e && !o && !i) throw new TypeError("Object.keys called on a non-object");
                    var f = u && o;
                    if (a && t.length > 0 && !n.call(t, 0))
                        for (var d = 0; d < t.length; ++d) p.push(String(d));
                    if (i && t.length > 0)
                        for (var v = 0; v < t.length; ++v) p.push(String(v));
                    else
                        for (var y in t) f && "prototype" === y || !n.call(t, y) || p.push(String(y));
                    if (l)
                        for (var g = h(t), b = 0; b < c.length; ++b) g && "constructor" === c[b] || !n.call(t, c[b]) || p.push(c[b]);
                    return p
                };
            v.shim = function() {
                if (Object.keys) {
                    var t = function() {
                        return 2 === (Object.keys(arguments) || "").length
                    }(1, 2);
                    if (!t) {
                        var e = Object.keys;
                        Object.keys = function(t) {
                            return e(s(t) ? i.call(t) : t)
                        }
                    }
                } else Object.keys = v;
                return Object.keys || v
            }, e.exports = v
        }, {
            142: 142
        }],
        142: [function(t, e, o) {
            "use strict";
            var n = Object.prototype.toString;
            e.exports = function(t) {
                var e = n.call(t),
                    o = "[object Arguments]" === e;
                return o || (o = "[object Array]" !== e && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && "[object Function]" === n.call(t.callee)), o
            }
        }, {}],
        143: [function(t, e, o) {
            "use strict";
            var n = t(135),
                r = function() {
                    if (!Object.assign) return !1;
                    for (var t = "abcdefghijklmnopqrst", e = t.split(""), o = {}, n = 0; n < e.length; ++n) o[e[n]] = e[n];
                    var r = Object.assign({}, o),
                        i = "";
                    for (var s in r) i += s;
                    return t !== i
                },
                i = function() {
                    if (!Object.assign || !Object.preventExtensions) return !1;
                    var t = Object.preventExtensions({
                        1: 2
                    });
                    try {
                        Object.assign(t, "xy")
                    } catch (e) {
                        return "y" === t[1]
                    }
                    return !1
                };
            e.exports = function() {
                return Object.assign ? r() ? n : i() ? n : Object.assign : n
            }
        }, {
            135: 135
        }],
        144: [function(t, e, o) {
            "use strict";
            var n = t(137),
                r = t(143);
            e.exports = function() {
                var t = r();
                return n(Object, {
                    assign: t
                }, {
                    assign: function() {
                        return Object.assign !== t
                    }
                }), t
            }
        }, {
            137: 137,
            143: 143
        }],
        145: [function(t, e, o) {
            function n(t, e) {
                var o, n = null;
                try {
                    o = JSON.parse(t, e)
                } catch (r) {
                    n = r
                }
                return [n, o]
            }
            e.exports = n
        }, {}],
        146: [function(t, e, o) {
            function n(t) {
                return t.replace(/\n\r?\s*/g, "")
            }
            e.exports = function(t) {
                for (var e = "", o = 0; o < arguments.length; o++) e += n(t[o]) + (arguments[o + 1] || "");
                return e
            }
        }, {}],
        147: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                for (var o = 0; o < t.length; o++) e(t[o])
            }

            function r(t) {
                for (var e in t)
                    if (t.hasOwnProperty(e)) return !1;
                return !0
            }

            function i(t, e, o) {
                var n = t;
                return p(e) ? (o = e, "string" == typeof t && (n = {
                    uri: t
                })) : n = d(e, {
                    uri: t
                }), n.callback = o, n
            }

            function s(t, e, o) {
                return e = i(t, e, o), a(e)
            }

            function a(t) {
                function e() {
                    4 === u.readyState && i()
                }

                function o() {
                    var t = void 0;
                    if (u.response ? t = u.response : "text" !== u.responseType && u.responseType || (t = u.responseText || u.responseXML), m) try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    return t
                }

                function n(t) {
                    clearTimeout(h), t instanceof Error || (t = new Error("" + (t || "Unknown XMLHttpRequest Error"))), t.statusCode = 0, a(t, l)
                }

                function i() {
                    if (!d) {
                        var e;
                        clearTimeout(h), e = t.useXDR && void 0 === u.status ? 200 : 1223 === u.status ? 204 : u.status;
                        var n = l,
                            r = null;
                        0 !== e ? (n = {
                            body: o(),
                            statusCode: e,
                            method: y,
                            headers: {},
                            url: v,
                            rawRequest: u
                        }, u.getAllResponseHeaders && (n.headers = f(u.getAllResponseHeaders()))) : r = new Error("Internal XMLHttpRequest Error"), a(r, n, n.body)
                    }
                }
                var a = t.callback;
                if ("undefined" == typeof a) throw new Error("callback argument missing");
                a = c(a);
                var l = {
                        body: void 0,
                        headers: {},
                        statusCode: 0,
                        method: y,
                        url: v,
                        rawRequest: u
                    },
                    u = t.xhr || null;
                u || (u = t.cors || t.useXDR ? new s.XDomainRequest : new s.XMLHttpRequest);
                var p, d, h, v = u.url = t.uri || t.url,
                    y = u.method = t.method || "GET",
                    g = t.body || t.data || null,
                    b = u.headers = t.headers || {},
                    A = !!t.sync,
                    m = !1;
                if ("json" in t && (m = !0, b.accept || b.Accept || (b.Accept = "application/json"), "GET" !== y && "HEAD" !== y && (b["content-type"] || b["Content-Type"] || (b["Content-Type"] = "application/json"), g = JSON.stringify(t.json))), u.onreadystatechange = e, u.onload = i, u.onerror = n, u.onprogress = function() {}, u.ontimeout = n, u.open(y, v, !A, t.username, t.password), A || (u.withCredentials = !!t.withCredentials), !A && t.timeout > 0 && (h = setTimeout(function() {
                        d = !0, u.abort("timeout");
                        var t = new Error("XMLHttpRequest timeout");
                        t.code = "ETIMEDOUT", n(t)
                    }, t.timeout)), u.setRequestHeader)
                    for (p in b) b.hasOwnProperty(p) && u.setRequestHeader(p, b[p]);
                else if (t.headers && !r(t.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
                return "responseType" in t && (u.responseType = t.responseType), "beforeSend" in t && "function" == typeof t.beforeSend && t.beforeSend(u), u.send(g), u
            }

            function l() {}
            var u = t(93),
                c = t(149),
                p = t(148),
                f = t(152),
                d = t(153);
            e.exports = s, s.XMLHttpRequest = u.XMLHttpRequest || l, s.XDomainRequest = "withCredentials" in new s.XMLHttpRequest ? s.XMLHttpRequest : u.XDomainRequest, n(["get", "put", "post", "patch", "head", "delete"], function(t) {
                s["delete" === t ? "del" : t] = function(e, o, n) {
                    return o = i(e, o, n), o.method = t.toUpperCase(), a(o)
                }
            })
        }, {
            148: 148,
            149: 149,
            152: 152,
            153: 153,
            93: 93
        }],
        148: [function(t, e, o) {
            function n(t) {
                var e = r.call(t);
                return "[object Function]" === e || "function" == typeof t && "[object RegExp]" !== e || "undefined" != typeof window && (t === window.setTimeout || t === window.alert || t === window.confirm || t === window.prompt)
            }
            e.exports = n;
            var r = Object.prototype.toString
        }, {}],
        149: [function(t, e, o) {
            function n(t) {
                var e = !1;
                return function() {
                    if (!e) return e = !0, t.apply(this, arguments)
                }
            }
            e.exports = n, n.proto = n(function() {
                Object.defineProperty(Function.prototype, "once", {
                    value: function() {
                        return n(this)
                    },
                    configurable: !0
                })
            })
        }, {}],
        150: [function(t, e, o) {
            function n(t, e, o) {
                if (!a(e)) throw new TypeError("iterator must be a function");
                arguments.length < 3 && (o = this), "[object Array]" === l.call(t) ? r(t, e, o) : "string" == typeof t ? i(t, e, o) : s(t, e, o)
            }

            function r(t, e, o) {
                for (var n = 0, r = t.length; n < r; n++) u.call(t, n) && e.call(o, t[n], n, t)
            }

            function i(t, e, o) {
                for (var n = 0, r = t.length; n < r; n++) e.call(o, t.charAt(n), n, t)
            }

            function s(t, e, o) {
                for (var n in t) u.call(t, n) && e.call(o, t[n], n, t)
            }
            var a = t(148);
            e.exports = n;
            var l = Object.prototype.toString,
                u = Object.prototype.hasOwnProperty
        }, {
            148: 148
        }],
        151: [function(t, e, o) {
            function n(t) {
                return t.replace(/^\s*|\s*$/g, "")
            }
            o = e.exports = n, o.left = function(t) {
                return t.replace(/^\s*/, "")
            }, o.right = function(t) {
                return t.replace(/\s*$/, "")
            }
        }, {}],
        152: [function(t, e, o) {
            var n = t(151),
                r = t(150),
                i = function(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
            e.exports = function(t) {
                if (!t) return {};
                var e = {};
                return r(n(t).split("\n"), function(t) {
                    var o = t.indexOf(":"),
                        r = n(t.slice(0, o)).toLowerCase(),
                        s = n(t.slice(o + 1));
                    "undefined" == typeof e[r] ? e[r] = s : i(e[r]) ? e[r].push(s) : e[r] = [e[r], s]
                }), e
            }
        }, {
            150: 150,
            151: 151
        }],
        153: [function(t, e, o) {
            function n() {
                for (var t = {}, e = 0; e < arguments.length; e++) {
                    var o = arguments[e];
                    for (var n in o) r.call(o, n) && (t[n] = o[n])
                }
                return t
            }
            e.exports = n;
            var r = Object.prototype.hasOwnProperty
        }, {}]
    }, {}, [91])(91)
}),
function(t) {
    var e = t.vttjs = {},
        o = e.VTTCue,
        n = e.VTTRegion,
        r = t.VTTCue,
        i = t.VTTRegion;
    e.shim = function() {
        e.VTTCue = o, e.VTTRegion = n
    }, e.restore = function() {
        e.VTTCue = r, e.VTTRegion = i
    }
}(this),
function(t, e) {
    function o(t) {
        if ("string" != typeof t) return !1;
        var e = a[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function n(t) {
        if ("string" != typeof t) return !1;
        var e = l[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function r(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = arguments[e];
            for (var n in o) t[n] = o[n]
        }
        return t
    }

    function i(t, e, i) {
        var a = this,
            l = /MSIE\s8\.0/.test(navigator.userAgent),
            u = {};
        l ? a = document.createElement("custom") : u.enumerable = !0, a.hasBeenReset = !1;
        var c = "",
            p = !1,
            f = t,
            d = e,
            h = i,
            v = null,
            y = "",
            g = !0,
            b = "auto",
            A = "start",
            m = 50,
            j = "middle",
            w = 50,
            _ = "middle";
        if (Object.defineProperty(a, "id", r({}, u, {
                get: function() {
                    return c
                },
                set: function(t) {
                    c = "" + t
                }
            })), Object.defineProperty(a, "pauseOnExit", r({}, u, {
                get: function() {
                    return p
                },
                set: function(t) {
                    p = !!t
                }
            })), Object.defineProperty(a, "startTime", r({}, u, {
                get: function() {
                    return f
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
                    f = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "endTime", r({}, u, {
                get: function() {
                    return d
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
                    d = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "text", r({}, u, {
                get: function() {
                    return h
                },
                set: function(t) {
                    h = "" + t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "region", r({}, u, {
                get: function() {
                    return v
                },
                set: function(t) {
                    v = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "vertical", r({}, u, {
                get: function() {
                    return y
                },
                set: function(t) {
                    var e = o(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    y = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "snapToLines", r({}, u, {
                get: function() {
                    return g
                },
                set: function(t) {
                    g = !!t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "line", r({}, u, {
                get: function() {
                    return b
                },
                set: function(t) {
                    if ("number" != typeof t && t !== s) throw new SyntaxError("An invalid number or illegal string was specified.");
                    b = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "lineAlign", r({}, u, {
                get: function() {
                    return A
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    A = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "position", r({}, u, {
                get: function() {
                    return m
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Position must be between 0 and 100.");
                    m = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "positionAlign", r({}, u, {
                get: function() {
                    return j
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    j = e, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "size", r({}, u, {
                get: function() {
                    return w
                },
                set: function(t) {
                    if (t < 0 || t > 100) throw new Error("Size must be between 0 and 100.");
                    w = t, this.hasBeenReset = !0
                }
            })), Object.defineProperty(a, "align", r({}, u, {
                get: function() {
                    return _
                },
                set: function(t) {
                    var e = n(t);
                    if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
                    _ = e, this.hasBeenReset = !0
                }
            })), a.displayState = void 0, l) return a
    }
    var s = "auto",
        a = {
            "": !0,
            lr: !0,
            rl: !0
        },
        l = {
            start: !0,
            middle: !0,
            end: !0,
            left: !0,
            right: !0
        };
    i.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }, t.VTTCue = t.VTTCue || i, e.VTTCue = i
}(this, this.vttjs || {}),
function(t, e) {
    function o(t) {
        if ("string" != typeof t) return !1;
        var e = i[t.toLowerCase()];
        return !!e && t.toLowerCase()
    }

    function n(t) {
        return "number" == typeof t && t >= 0 && t <= 100
    }

    function r() {
        var t = 100,
            e = 3,
            r = 0,
            i = 100,
            s = 0,
            a = 100,
            l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!n(e)) throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t) throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return i
                },
                set: function(t) {
                    if (!n(t)) throw new Error("RegionAnchorX must be between 0 and 100.");
                    i = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!n(t)) throw new Error("RegionAnchorY must be between 0 and 100.");
                    r = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!n(t)) throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if (!n(t)) throw new Error("ViewportAnchorX must be between 0 and 100.");
                    s = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = o(t);
                    if (e === !1) throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e
                }
            }
        })
    }
    var i = {
        "": !0,
        up: !0
    };
    t.VTTRegion = t.VTTRegion || r, e.VTTRegion = r
}(this, this.vttjs || {}),
function(t) {
    function e(t, e) {
        this.name = "ParsingError", this.code = t.code, this.message = e || t.message
    }

    function o(t) {
        function e(t, e, o, n) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | o) + (0 | n) / 1e3
        }
        var o = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return o ? o[3] ? e(o[1], o[2], o[3].replace(":", ""), o[4]) : o[1] > 59 ? e(o[1], o[2], 0, o[4]) : e(0, o[1], o[2], o[4]) : null
    }

    function n() {
        this.values = h(null)
    }

    function r(t, e, o, n) {
        var r = n ? t.split(n) : [t];
        for (var i in r)
            if ("string" == typeof r[i]) {
                var s = r[i].split(o);
                if (2 === s.length) {
                    var a = s[0],
                        l = s[1];
                    e(a, l)
                }
            }
    }

    function i(t, i, s) {
        function a() {
            var n = o(t);
            if (null === n) throw new e(e.Errors.BadTimeStamp, "Malformed timestamp: " + c);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""), n
        }

        function l(t, e) {
            var o = new n;
            r(t, function(t, e) {
                switch (t) {
                    case "region":
                        for (var n = s.length - 1; n >= 0; n--)
                            if (s[n].id === e) {
                                o.set(t, s[n].region);
                                break
                            }
                        break;
                    case "vertical":
                        o.alt(t, e, ["rl", "lr"]);
                        break;
                    case "line":
                        var r = e.split(","),
                            i = r[0];
                        o.integer(t, i), o.percent(t, i) ? o.set("snapToLines", !1) : null, o.alt(t, i, ["auto"]), 2 === r.length && o.alt("lineAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case "position":
                        r = e.split(","), o.percent(t, r[0]), 2 === r.length && o.alt("positionAlign", r[1], ["start", "middle", "end"]);
                        break;
                    case "size":
                        o.percent(t, e);
                        break;
                    case "align":
                        o.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/), e.region = o.get("region", null), e.vertical = o.get("vertical", ""), e.line = o.get("line", "auto"), e.lineAlign = o.get("lineAlign", "start"), e.snapToLines = o.get("snapToLines", !0), e.size = o.get("size", 100), e.align = o.get("align", "middle"), e.position = o.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align), e.positionAlign = o.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }

        function u() {
            t = t.replace(/^\s+/, "")
        }
        var c = t;
        if (u(), i.startTime = a(), u(), "-->" !== t.substr(0, 3)) throw new e(e.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '-->'): " + c);
        t = t.substr(3), u(), i.endTime = a(), u(), l(t, i)
    }

    function s(t, e) {
        function n() {
            function t(t) {
                return e = e.substr(t.length), t
            }
            if (!e) return null;
            var o = e.match(/^([^<]*)(<[^>]+>?)?/);
            return t(o[1] ? o[1] : o[2])
        }

        function r(t) {
            return v[t]
        }

        function i(t) {
            for (; h = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) t = t.replace(h[0], r);
            return t
        }

        function s(t, e) {
            return !b[e.localName] || b[e.localName] === t.localName
        }

        function a(e, o) {
            var n = y[e];
            if (!n) return null;
            var r = t.document.createElement(n);
            r.localName = n;
            var i = g[e];
            return i && o && (r[i] = o.trim()), r
        }
        for (var l, u = t.document.createElement("div"), c = u, p = []; null !== (l = n());)
            if ("<" !== l[0]) c.appendChild(t.document.createTextNode(i(l)));
            else {
                if ("/" === l[1]) {
                    p.length && p[p.length - 1] === l.substr(2).replace(">", "") && (p.pop(), c = c.parentNode);
                    continue
                }
                var f, d = o(l.substr(1, l.length - 2));
                if (d) {
                    f = t.document.createProcessingInstruction("timestamp", d), c.appendChild(f);
                    continue
                }
                var h = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!h) continue;
                if (f = a(h[1], h[3]), !f) continue;
                if (!s(c, f)) continue;
                h[2] && (f.className = h[2].substr(1).replace(".", " ")), p.push(h[1]), c.appendChild(f), c = f
            }
        return u
    }

    function a(t) {
        function e(t, e) {
            for (var o = e.childNodes.length - 1; o >= 0; o--) t.push(e.childNodes[o])
        }

        function o(t) {
            if (!t || !t.length) return null;
            var n = t.pop(),
                r = n.textContent || n.innerText;
            if (r) {
                var i = r.match(/^.*(\n|\r)/);
                return i ? (t.length = 0, i[0]) : r
            }
            return "ruby" === n.tagName ? o(t) : n.childNodes ? (e(t, n), o(t)) : void 0
        }
        var n, r = [],
            i = "";
        if (!t || !t.childNodes) return "ltr";
        for (e(r, t); i = o(r);)
            for (var s = 0; s < i.length; s++) {
                n = i.charCodeAt(s);
                for (var a = 0; a < A.length; a++)
                    if (A[a] === n) return "rtl"
            }
        return "ltr"
    }

    function l(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100)) return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement) return -1;
        for (var e = t.track, o = e.textTrackList, n = 0, r = 0; r < o.length && o[r] !== e; r++) "showing" === o[r].mode && n++;
        return ++n * -1
    }

    function u() {}

    function c(t, e, o) {
        var n = /MSIE\s8\.0/.test(navigator.userAgent),
            r = "rgba(255, 255, 255, 1)",
            i = "rgba(0, 0, 0, 0.8)";
        n && (r = "rgb(255, 255, 255)", i = "rgb(0, 0, 0)"), u.call(this), this.cue = e, this.cueDiv = s(t, e.text);
        var l = {
            color: r,
            backgroundColor: i,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        n || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl", l.unicodeBidi = "plaintext"), this.applyStyles(l, this.cueDiv), this.div = t.document.createElement("div"), l = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: o.font,
            whiteSpace: "pre-line",
            position: "absolute"
        }, n || (l.direction = a(this.cueDiv), l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"), this.applyStyles(l), this.div.appendChild(this.cueDiv);
        var c = 0;
        switch (e.positionAlign) {
            case "start":
                c = e.position;
                break;
            case "middle":
                c = e.position - e.size / 2;
                break;
            case "end":
                c = e.position - e.size
        }
        "" === e.vertical ? this.applyStyles({
            left: this.formatStyle(c, "%"),
            width: this.formatStyle(e.size, "%")
        }) : this.applyStyles({
            top: this.formatStyle(c, "%"),
            height: this.formatStyle(e.size, "%")
        }), this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }

    function p(t) {
        var e, o, n, r, i = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            o = t.div.offsetHeight, n = t.div.offsetWidth, r = t.div.offsetTop;
            var s = (s = t.div.childNodes) && (s = s[0]) && s.getClientRects && s.getClientRects();
            t = t.div.getBoundingClientRect(), e = s ? Math.max(s[0] && s[0].height || 0, t.height / s.length) : 0
        }
        this.left = t.left, this.right = t.right, this.top = t.top || r, this.height = t.height || o, this.bottom = t.bottom || r + (t.height || o), this.width = t.width || n, this.lineHeight = void 0 !== e ? e : t.lineHeight, i && !this.lineHeight && (this.lineHeight = 13)
    }

    function f(t, e, o, n) {
        function r(t, e) {
            for (var r, i = new p(t), s = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(o, e[a]) || t.within(o) && t.overlapsAny(n);) t.move(e[a]);
                if (t.within(o)) return t;
                var l = t.intersectPercentage(o);
                s > l && (r = new p(t), s = l), t = new p(i)
            }
            return r || i
        }
        var i = new p(e),
            s = e.cue,
            a = l(s),
            u = [];
        if (s.snapToLines) {
            var c;
            switch (s.vertical) {
                case "":
                    u = ["+y", "-y"], c = "height";
                    break;
                case "rl":
                    u = ["+x", "-x"], c = "width";
                    break;
                case "lr":
                    u = ["-x", "+x"], c = "width"
            }
            var f = i.lineHeight,
                d = f * Math.round(a),
                h = o[c] + f,
                v = u[0];
            Math.abs(d) > h && (d = d < 0 ? -1 : 1, d *= Math.ceil(h / f) * f), a < 0 && (d += "" === s.vertical ? o.height : o.width, u = u.reverse()), i.move(v, d)
        } else {
            var y = i.lineHeight / o.height * 100;
            switch (s.lineAlign) {
                case "middle":
                    a -= y / 2;
                    break;
                case "end":
                    a -= y
            }
            switch (s.vertical) {
                case "":
                    e.applyStyles({
                        top: e.formatStyle(a, "%")
                    });
                    break;
                case "rl":
                    e.applyStyles({
                        left: e.formatStyle(a, "%")
                    });
                    break;
                case "lr":
                    e.applyStyles({
                        right: e.formatStyle(a, "%")
                    })
            }
            u = ["+y", "-x", "+x", "-y"], i = new p(e)
        }
        var g = r(i, u);
        e.move(g.toCSSCompatValues(o))
    }

    function d() {}
    var h = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e, new t
        }
    }();
    e.prototype = h(Error.prototype), e.prototype.constructor = e, e.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    }, n.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, o) {
            return o ? this.has(t) ? this.values[t] : e[o] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, o) {
            for (var n = 0; n < o.length; ++n)
                if (e === o[n]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            var o;
            return !!((o = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e), e >= 0 && e <= 100)) && (this.set(t, e), !0)
        }
    };
    var v = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&lrm;": "‎",
            "&rlm;": "‏",
            "&nbsp;": " "
        },
        y = {
            c: "span",
            i: "i",
            b: "b",
            u: "u",
            ruby: "ruby",
            rt: "rt",
            v: "span",
            lang: "span"
        },
        g = {
            v: "title",
            lang: "lang"
        },
        b = {
            rt: "ruby"
        },
        A = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    u.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var o in t) t.hasOwnProperty(o) && (e.style[o] = t[o])
    }, u.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }, c.prototype = h(u.prototype), c.prototype.constructor = c, p.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight, t) {
            case "+x":
                this.left += e, this.right += e;
                break;
            case "-x":
                this.left -= e, this.right -= e;
                break;
            case "+y":
                this.top += e, this.bottom += e;
                break;
            case "-y":
                this.top -= e, this.bottom -= e
        }
    }, p.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }, p.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e])) return !0;
        return !1
    }, p.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }, p.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
            case "+x":
                return this.left < t.left;
            case "-x":
                return this.right > t.right;
            case "+y":
                return this.top < t.top;
            case "-y":
                return this.bottom > t.bottom
        }
    }, p.prototype.intersectPercentage = function(t) {
        var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left)),
            o = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top)),
            n = e * o;
        return n / (this.height * this.width)
    }, p.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }, p.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0,
            o = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0,
            n = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
        var r = {
            left: t.left,
            right: t.right,
            top: t.top || n,
            height: t.height || e,
            bottom: t.bottom || n + (t.height || e),
            width: t.width || o
        };
        return r
    }, d.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t) return "";
                if ("string" != typeof t) throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }, d.convertCueToDOMTree = function(t, e) {
        return t && e ? s(t, e) : null
    };
    var m = .05,
        j = "sans-serif",
        w = "1.5%";
    d.processCues = function(t, e, o) {
        function n(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState) return !0;
            return !1
        }
        if (!t || !e || !o) return null;
        for (; o.firstChild;) o.removeChild(o.firstChild);
        var r = t.document.createElement("div");
        if (r.style.position = "absolute", r.style.left = "0", r.style.right = "0", r.style.top = "0", r.style.bottom = "0", r.style.margin = w, o.appendChild(r), n(e)) {
            var i = [],
                s = p.getSimpleBoxPosition(r),
                a = Math.round(s.height * m * 100) / 100,
                l = {
                    font: a + "px " + j
                };
            ! function() {
                for (var o, n, a = 0; a < e.length; a++) n = e[a], o = new c(t, n, l), r.appendChild(o.div), f(t, o, s, i), n.displayState = o.div, i.push(p.getSimpleBoxPosition(o))
            }()
        } else
            for (var u = 0; u < e.length; u++) r.appendChild(e[u].displayState)
    }, d.Parser = function(t, e, o) {
        o || (o = e, e = {}), e || (e = {}), this.window = t, this.vttjs = e, this.state = "INITIAL", this.buffer = "", this.decoder = o || new TextDecoder("utf8"), this.regionList = []
    }, d.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof e)) throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function o() {
                for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
                var o = t.substr(0, e);
                return "\r" === t[e] && ++e, "\n" === t[e] && ++e, l.buffer = t.substr(e), o
            }

            function s(t) {
                var e = new n;
                if (r(t, function(t, o) {
                        switch (t) {
                            case "id":
                                e.set(t, o);
                                break;
                            case "width":
                                e.percent(t, o);
                                break;
                            case "lines":
                                e.integer(t, o);
                                break;
                            case "regionanchor":
                            case "viewportanchor":
                                var r = o.split(",");
                                if (2 !== r.length) break;
                                var i = new n;
                                if (i.percent("x", r[0]), i.percent("y", r[1]), !i.has("x") || !i.has("y")) break;
                                e.set(t + "X", i.get("x")), e.set(t + "Y", i.get("y"));
                                break;
                            case "scroll":
                                e.alt(t, o, ["up"])
                        }
                    }, /=/, /\s/), e.has("id")) {
                    var o = new(l.vttjs.VTTRegion || l.window.VTTRegion);
                    o.width = e.get("width", 100), o.lines = e.get("lines", 3), o.regionAnchorX = e.get("regionanchorX", 0), o.regionAnchorY = e.get("regionanchorY", 100), o.viewportAnchorX = e.get("viewportanchorX", 0), o.viewportAnchorY = e.get("viewportanchorY", 100), o.scroll = e.get("scroll", ""), l.onregion && l.onregion(o), l.regionList.push({
                        id: e.get("id"),
                        region: o
                    })
                }
            }

            function a(t) {
                r(t, function(t, e) {
                    switch (t) {
                        case "Region":
                            s(e)
                    }
                }, /:/)
            }
            var l = this;
            t && (l.buffer += l.decoder.decode(t, {
                stream: !0
            }));
            try {
                var u;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    u = o();
                    var c = u.match(/^WEBVTT([ \t].*)?$/);
                    if (!c || !c[0]) throw new e(e.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var p = !1; l.buffer;) {
                    if (!/\r\n|\n/.test(l.buffer)) return this;
                    switch (p ? p = !1 : u = o(), l.state) {
                        case "HEADER":
                            /:/.test(u) ? a(u) : u || (l.state = "ID");
                            continue;
                        case "NOTE":
                            u || (l.state = "ID");
                            continue;
                        case "ID":
                            if (/^NOTE($|[ \t])/.test(u)) {
                                l.state = "NOTE";
                                break
                            }
                            if (!u) continue;
                            if (l.cue = new(l.vttjs.VTTCue || l.window.VTTCue)(0, 0, ""), l.state = "CUE", u.indexOf("-->") === -1) {
                                l.cue.id = u;
                                continue
                            }
                        case "CUE":
                            try {
                                i(u, l.cue, l.regionList)
                            } catch (f) {
                                l.reportOrThrowError(f), l.cue = null, l.state = "BADCUE";
                                continue
                            }
                            l.state = "CUETEXT";
                            continue;
                        case "CUETEXT":
                            var d = u.indexOf("-->") !== -1;
                            if (!u || d && (p = !0)) {
                                l.oncue && l.oncue(l.cue), l.cue = null, l.state = "ID";
                                continue
                            }
                            l.cue.text && (l.cue.text += "\n"), l.cue.text += u;
                            continue;
                        case "BADCUE":
                            u || (l.state = "ID");
                            continue
                    }
                }
            } catch (f) {
                l.reportOrThrowError(f), "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue), l.cue = null, l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new e(e.Errors.BadSignature)
            } catch (o) {
                t.reportOrThrowError(o)
            }
            return t.onflush && t.onflush(), this
        }
    }, t.WebVTT = d
}(this, this.vttjs || {}),
function(t, e) {
    "function" == typeof define && define.amd ? define([], e.bind(this, t, t.videojs)) : "undefined" != typeof module && module.exports ? module.exports = e(t, t.videojs) : e(t, t.videojs)
}(window, function(t, e) {
    "use strict";
    t.videojs_hotkeys = {
        version: "0.2.17"
    };
    var o = function(o) {
        function n(t) {
            return 32 === t.which || 179 === t.which
        }

        function r(t) {
            return 37 === t.which || 177 === t.which
        }

        function i(t) {
            return 39 === t.which || 176 === t.which
        }

        function s(t) {
            return 38 === t.which
        }

        function a(t) {
            return 40 === t.which
        }

        function l(t) {
            return 77 === t.which
        }

        function u(t) {
            return 70 === t.which
        }
        var c = this,
            p = c.el(),
            f = document,
            d = {
                volumeStep: .1,
                seekStep: 5,
                enableMute: !0,
                enableVolumeScroll: !0,
                enableFullscreen: !0,
                enableNumbers: !0,
                enableJogStyle: !1,
                alwaysCaptureHotkeys: !1,
                enableModifiersForNumbers: !0,
                playPauseKey: n,
                rewindKey: r,
                forwardKey: i,
                volumeUpKey: s,
                volumeDownKey: a,
                muteKey: l,
                fullscreenKey: u,
                customKeys: {}
            },
            h = 1,
            v = 2,
            y = 3,
            g = 4,
            b = 5,
            A = 6,
            m = 7,
            j = e.mergeOptions || e.util.mergeOptions;
        o = j(d, o || {});
        var w = o.volumeStep,
            _ = o.seekStep,
            k = o.enableMute,
            x = o.enableVolumeScroll,
            T = o.enableFullscreen,
            E = o.enableNumbers,
            C = o.enableJogStyle,
            S = o.alwaysCaptureHotkeys,
            O = o.enableModifiersForNumbers;
        p.hasAttribute("tabIndex") || p.setAttribute("tabIndex", "-1"), p.style.outline = "none", !S && c.options_.autoplay || c.one("play", function() {
            p.focus()
        }), c.on("play", function() {
            var t = p.querySelector(".iframeblocker");
            t && "" === t.style.display && (t.style.display = "block", t.style.bottom = "39px")
        });
        var B = function(t) {
                var e, n = t.which,
                    r = t.preventDefault;
                if (c.controls()) {
                    var i = f.activeElement;
                    if (S || i == p || i == p.querySelector(".vjs-tech") || i == p.querySelector(".vjs-control-bar") || i == p.querySelector(".iframeblocker")) switch (I(t, c)) {
                        case h:
                            r(), S && t.stopPropagation(), c.paused() ? c.play() : c.pause();
                            break;
                        case v:
                            r(), e = c.currentTime() - _, c.currentTime() <= _ && (e = 0), c.currentTime(e);
                            break;
                        case y:
                            r(), c.currentTime(c.currentTime() + _);
                            break;
                        case b:
                            r(), C ? (e = c.currentTime() - 1, c.currentTime() <= 1 && (e = 0), c.currentTime(e)) : c.volume(c.volume() - w);
                            break;
                        case g:
                            r(), C ? c.currentTime(c.currentTime() + 1) : c.volume(c.volume() + w);
                            break;
                        case A:
                            k && c.muted(!c.muted());
                            break;
                        case m:
                            T && (c.isFullscreen() ? c.exitFullscreen() : c.requestFullscreen());
                            break;
                        default:
                            if ((n > 47 && n < 59 || n > 95 && n < 106) && (O || !(t.metaKey || t.ctrlKey || t.altKey)) && E) {
                                var s = 48;
                                n > 95 && (s = 96);
                                var a = n - s;
                                r(), c.currentTime(c.duration() * a * .1)
                            }
                            for (var l in o.customKeys) {
                                var u = o.customKeys[l];
                                u && u.key && u.handler && u.key(t) && (r(), u.handler(c, o, t))
                            }
                    }
                }
            },
            P = function(t) {
                if (c.controls()) {
                    var e = t.relatedTarget || t.toElement || f.activeElement;
                    e != p && e != p.querySelector(".vjs-tech") && e != p.querySelector(".iframeblocker") || T && (c.isFullscreen() ? c.exitFullscreen() : c.requestFullscreen())
                }
            },
            M = function(e) {
                if (c.controls()) {
                    var o = e.relatedTarget || e.toElement || f.activeElement;
                    if ((S || o == p || o == p.querySelector(".vjs-tech") || o == p.querySelector(".iframeblocker") || o == p.querySelector(".vjs-control-bar")) && x) {
                        e = t.event || e;
                        var n = Math.max(-1, Math.min(1, e.wheelDelta || -e.detail));
                        e.preventDefault(), 1 == n ? c.volume(c.volume() + w) : n == -1 && c.volume(c.volume() - w)
                    }
                }
            },
            I = function(t, e) {
                return o.playPauseKey(t, e) ? h : o.rewindKey(t, e) ? v : o.forwardKey(t, e) ? y : o.volumeUpKey(t, e) ? g : o.volumeDownKey(t, e) ? b : o.muteKey(t, e) ? A : o.fullscreenKey(t, e) ? m : void 0
            };
        return c.on("keydown", B), c.on("dblclick", P), c.on("mousewheel", M), c.on("DOMMouseScroll", M), this
    };
    e.plugin("hotkeys", o)
}),
function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e(require("video.js")) : "function" == typeof define && define.amd ? define(["videojs"], function(o) {
        return t.Youtube = e(o)
    }) : t.Youtube = e(t.videojs)
}(this, function(t) {
    "use strict";

    function e() {
        YT.ready(function() {
            s.isApiReady = !0;
            for (var t = 0; t < s.apiReadyQueue.length; ++t) s.apiReadyQueue[t].initYTPlayer()
        })
    }

    function o(t, e) {
        var o = !1,
            n = document.createElement("script"),
            r = document.getElementsByTagName("script")[0];
        r.parentNode.insertBefore(n, r), n.onload = function() {
            o || (o = !0, e())
        }, n.onreadystatechange = function() {
            o || "complete" !== this.readyState && "loaded" !== this.readyState || (o = !0, e())
        }, n.src = t
    }

    function n() {
        var t = ".vjs-youtube .vjs-iframe-blocker { display: none; }.vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }.vjs-youtube .vjs-poster { background-size: cover; }.vjs-youtube-mobile .vjs-big-play-button { display: none; }",
            e = document.head || document.getElementsByTagName("head")[0],
            o = document.createElement("style");
        o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), e.appendChild(o)
    }
    var r = t.browser.IS_IOS || t.browser.IS_ANDROID,
        i = t.getTech("Tech"),
        s = t.extend(i, {
            constructor: function(t, n) {
                o("https://www.youtube.com/iframe_api", e), i.call(this, t, n), this.setPoster(t.poster), this.setSrc(this.options_.source, !0), this.setTimeout(function() {
                    this.el_ && (this.el_.parentNode.className += " vjs-youtube", r && (this.el_.parentNode.className += " vjs-youtube-mobile"), s.isApiReady ? this.initYTPlayer() : s.apiReadyQueue.push(this))
                }.bind(this))
            },
            dispose: function() {
                if (this.ytPlayer) this.ytPlayer.stopVideo && this.ytPlayer.stopVideo(), this.ytPlayer.destroy && this.ytPlayer.destroy();
                else {
                    var t = s.apiReadyQueue.indexOf(this);
                    t !== -1 && s.apiReadyQueue.splice(t, 1)
                }
                this.ytPlayer = null, this.el_.parentNode.className = this.el_.parentNode.className.replace(" vjs-youtube", "").replace(" vjs-youtube-mobile", ""), this.el_.parentNode.removeChild(this.el_), i.prototype.dispose.call(this)
            },
            createEl: function() {
                var t = document.createElement("div");
                t.setAttribute("id", this.options_.techId), t.setAttribute("style", "width:100%;height:100%;top:0;left:0;position:absolute"), t.setAttribute("class", "vjs-tech");
                var e = document.createElement("div");
                if (e.appendChild(t), !r && !this.options_.ytControls) {
                    var o = document.createElement("div");
                    o.setAttribute("class", "vjs-iframe-blocker"), o.setAttribute("style", "position:absolute;top:0;left:0;width:100%;height:100%"), o.onclick = function() {
                        this.pause()
                    }.bind(this), e.appendChild(o)
                }
                return e
            },
            initYTPlayer: function() {
                var t = {
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    showinfo: 0,
                    loop: this.options_.loop ? 1 : 0
                };
                if ("undefined" != typeof this.options_.autohide && (t.autohide = this.options_.autohide), "undefined" != typeof this.options_.cc_load_policy && (t.cc_load_policy = this.options_.cc_load_policy), "undefined" != typeof this.options_.ytControls && (t.controls = this.options_.ytControls), "undefined" != typeof this.options_.disablekb && (t.disablekb = this.options_.disablekb), "undefined" != typeof this.options_.end && (t.end = this.options_.end), "undefined" != typeof this.options_.color && (t.color = this.options_.color), t.controls ? "undefined" != typeof this.options_.fs && (t.fs = this.options_.fs) : t.fs = 0, "undefined" != typeof this.options_.end && (t.end = this.options_.end), "undefined" != typeof this.options_.hl ? t.hl = this.options_.hl : "undefined" != typeof this.options_.language && (t.hl = this.options_.language.substr(0, 2)), "undefined" != typeof this.options_.iv_load_policy && (t.iv_load_policy = this.options_.iv_load_policy), "undefined" != typeof this.options_.list ? t.list = this.options_.list : this.url && "undefined" != typeof this.url.listId && (t.list = this.url.listId), "undefined" != typeof this.options_.listType && (t.listType = this.options_.listType), "undefined" != typeof this.options_.modestbranding && (t.modestbranding = this.options_.modestbranding), "undefined" != typeof this.options_.playlist && (t.playlist = this.options_.playlist), "undefined" != typeof this.options_.playsinline && (t.playsinline = this.options_.playsinline), "undefined" != typeof this.options_.rel && (t.rel = this.options_.rel), "undefined" != typeof this.options_.showinfo && (t.showinfo = this.options_.showinfo), "undefined" != typeof this.options_.start && (t.start = this.options_.start), "undefined" != typeof this.options_.theme && (t.theme = this.options_.theme), "undefined" != typeof this.options_.customVars) {
                    var e = this.options_.customVars;
                    Object.keys(e).forEach(function(o) {
                        t[o] = e[o]
                    })
                }
                this.activeVideoId = this.url ? this.url.videoId : null, this.activeList = t.list, this.ytPlayer = new YT.Player(this.options_.techId, {
                    videoId: this.activeVideoId,
                    playerVars: t,
                    events: {
                        onReady: this.onPlayerReady.bind(this),
                        onPlaybackQualityChange: this.onPlayerPlaybackQualityChange.bind(this),
                        onPlaybackRateChange: this.onPlayerPlaybackRateChange.bind(this),
                        onStateChange: this.onPlayerStateChange.bind(this),
                        onVolumeChange: this.onPlayerVolumeChange.bind(this),
                        onError: this.onPlayerError.bind(this)
                    }
                })
            },
            onPlayerReady: function() {
                this.options_.muted && this.ytPlayer.mute();
                var t = this.ytPlayer.getAvailablePlaybackRates();
                t.length > 1 && (this.featuresPlaybackRate = !0), this.playerReady_ = !0, this.triggerReady(), this.playOnReady ? this.play() : this.cueOnReady && (this.cueVideoById_(this.url.videoId), this.activeVideoId = this.url.videoId)
            },
            onPlayerPlaybackQualityChange: function() {},
            onPlayerPlaybackRateChange: function() {
                this.trigger("ratechange")
            },
            onPlayerStateChange: function(t) {
                var e = t.data;
                if (e !== this.lastState && !this.errorNumber) switch (this.lastState = e, e) {
                    case -1:
                        this.trigger("loadstart"), this.trigger("loadedmetadata"), this.trigger("durationchange"), this.trigger("ratechange");
                        break;
                    case YT.PlayerState.ENDED:
                        this.trigger("ended");
                        break;
                    case YT.PlayerState.PLAYING:
                        this.trigger("timeupdate"), this.trigger("durationchange"), this.trigger("playing"), this.trigger("play"), this.isSeeking && this.onSeeked();
                        break;
                    case YT.PlayerState.PAUSED:
                        this.trigger("canplay"), this.isSeeking ? this.onSeeked() : this.trigger("pause");
                        break;
                    case YT.PlayerState.BUFFERING:
                        this.player_.trigger("timeupdate"), this.player_.trigger("waiting")
                }
            },
            onPlayerVolumeChange: function() {
                this.trigger("volumechange")
            },
            onPlayerError: function(t) {
                this.errorNumber = t.data, this.trigger("pause"), this.trigger("error")
            },
            error: function() {
                var t = 1e3 + this.errorNumber;
                switch (this.errorNumber) {
                    case 5:
                        return {
                            code: t,
                            message: "Error while trying to play the video"
                        };
                    case 2:
                    case 100:
                        return {
                            code: t,
                            message: "Unable to find the video"
                        };
                    case 101:
                    case 150:
                        return {
                            code: t,
                            message: "Playback on other Websites has been disabled by the video owner."
                        }
                }
                return {
                    code: t,
                    message: "YouTube unknown error (" + this.errorNumber + ")"
                }
            },
            loadVideoById_: function(t) {
                var e = {
                    videoId: t
                };
                this.options_.start && (e.startSeconds = this.options_.start), this.options_.end && (e.endEnd = this.options_.end), this.ytPlayer.loadVideoById(e)
            },
            cueVideoById_: function(t) {
                var e = {
                    videoId: t
                };
                this.options_.start && (e.startSeconds = this.options_.start), this.options_.end && (e.endEnd = this.options_.end), this.ytPlayer.cueVideoById(e)
            },
            src: function(t) {
                return t && this.setSrc({
                    src: t
                }), this.source;
            },
            poster: function() {
                return r ? null : this.poster_
            },
            setPoster: function(t) {
                this.poster_ = t
            },
            setSrc: function(t) {
                t && t.src && (delete this.errorNumber, this.source = t, this.url = s.parseUrl(t.src), this.options_.poster || this.url.videoId && (this.poster_ = "https://img.youtube.com/vi/" + this.url.videoId + "/0.jpg", this.trigger("posterchange"), this.checkHighResPoster()), this.options_.autoplay && !r ? this.isReady_ ? this.play() : this.playOnReady = !0 : this.activeVideoId !== this.url.videoId && (this.isReady_ ? (this.cueVideoById_(this.url.videoId), this.activeVideoId = this.url.videoId) : this.cueOnReady = !0))
            },
            autoplay: function() {
                return this.options_.autoplay
            },
            setAutoplay: function(t) {
                this.options_.autoplay = t
            },
            loop: function() {
                return this.options_.loop
            },
            setLoop: function(t) {
                this.options_.loop = t
            },
            play: function() {
                this.url && this.url.videoId && (this.wasPausedBeforeSeek = !1, this.isReady_ ? (this.url.listId && (this.activeList === this.url.listId ? this.ytPlayer.playVideo() : (this.ytPlayer.loadPlaylist(this.url.listId), this.activeList = this.url.listId)), this.activeVideoId === this.url.videoId ? this.ytPlayer.playVideo() : (this.loadVideoById_(this.url.videoId), this.activeVideoId = this.url.videoId)) : (this.trigger("waiting"), this.playOnReady = !0))
            },
            pause: function() {
                this.ytPlayer && this.ytPlayer.pauseVideo()
            },
            paused: function() {
                return !this.ytPlayer || this.lastState !== YT.PlayerState.PLAYING && this.lastState !== YT.PlayerState.BUFFERING
            },
            currentTime: function() {
                return this.ytPlayer ? this.ytPlayer.getCurrentTime() : 0
            },
            setCurrentTime: function(t) {
                this.lastState === YT.PlayerState.PAUSED && (this.timeBeforeSeek = this.currentTime()), this.isSeeking || (this.wasPausedBeforeSeek = this.paused()), this.ytPlayer.seekTo(t, !0), this.trigger("timeupdate"), this.trigger("seeking"), this.isSeeking = !0, this.lastState === YT.PlayerState.PAUSED && this.timeBeforeSeek !== t && (clearInterval(this.checkSeekedInPauseInterval), this.checkSeekedInPauseInterval = setInterval(function() {
                    this.lastState === YT.PlayerState.PAUSED && this.isSeeking ? this.currentTime() !== this.timeBeforeSeek && (this.trigger("timeupdate"), this.onSeeked()) : clearInterval(this.checkSeekedInPauseInterval)
                }.bind(this), 250))
            },
            seeking: function() {
                return this.isSeeking
            },
            seekable: function() {
                return this.ytPlayer ? t.createTimeRange(0, this.ytPlayer.getDuration()) : t.createTimeRange()
            },
            onSeeked: function() {
                clearInterval(this.checkSeekedInPauseInterval), this.isSeeking = !1, this.wasPausedBeforeSeek && this.pause(), this.trigger("seeked")
            },
            playbackRate: function() {
                return this.ytPlayer ? this.ytPlayer.getPlaybackRate() : 1
            },
            setPlaybackRate: function(t) {
                this.ytPlayer && this.ytPlayer.setPlaybackRate(t)
            },
            duration: function() {
                return this.ytPlayer ? this.ytPlayer.getDuration() : 0
            },
            currentSrc: function() {
                return this.source && this.source.src
            },
            ended: function() {
                return !!this.ytPlayer && this.lastState === YT.PlayerState.ENDED
            },
            volume: function() {
                return this.ytPlayer ? this.ytPlayer.getVolume() / 100 : 1
            },
            setVolume: function(t) {
                this.ytPlayer && this.ytPlayer.setVolume(100 * t)
            },
            muted: function() {
                return !!this.ytPlayer && this.ytPlayer.isMuted()
            },
            setMuted: function(t) {
                this.ytPlayer && (this.muted(!0), t ? this.ytPlayer.mute() : this.ytPlayer.unMute(), this.setTimeout(function() {
                    this.trigger("volumechange")
                }, 50))
            },
            buffered: function() {
                if (!this.ytPlayer || !this.ytPlayer.getVideoLoadedFraction) return t.createTimeRange();
                var e = this.ytPlayer.getVideoLoadedFraction() * this.ytPlayer.getDuration();
                return t.createTimeRange(0, e)
            },
            preload: function() {},
            load: function() {},
            reset: function() {},
            supportsFullScreen: function() {
                return !0
            },
            checkHighResPoster: function() {
                var t = "https://img.youtube.com/vi/" + this.url.videoId + "/maxresdefault.jpg";
                try {
                    var e = new Image;
                    e.onload = function() {
                        if ("naturalHeight" in e) {
                            if (e.naturalHeight <= 90 || e.naturalWidth <= 120) return
                        } else if (e.height <= 90 || e.width <= 120) return;
                        this.poster_ = t, this.trigger("posterchange")
                    }.bind(this), e.onerror = function() {}, e.src = t
                } catch (o) {}
            }
        });
    s.isSupported = function() {
        return !0
    }, s.canPlaySource = function(t) {
        return s.canPlayType(t.type)
    }, s.canPlayType = function(t) {
        return "video/youtube" === t
    }, s.parseUrl = function(t) {
        var e = {
                videoId: null
            },
            o = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,
            n = t.match(o);
        n && 11 === n[2].length && (e.videoId = n[2]);
        var r = /[?&]list=([^#\&\?]+)/;
        return n = t.match(r), n && n[1] && (e.listId = n[1]), e
    }, s.apiReadyQueue = [], "undefined" != typeof document && n(), "undefined" != typeof t.registerTech ? t.registerTech("Youtube", s) : t.registerComponent("Youtube", s)
}),
function(t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var e;
        e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this, e.videojsVimeo = t()
    }
}(function() {
    var t;
    return function e(t, o, n) {
        function r(s, a) {
            if (!o[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                t[s][0].call(c.exports, function(e) {
                    var o = t[s][1][e];
                    return r(o ? o : e)
                }, c, c.exports, e, t, o, n)
            }
            return o[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
        return r
    }({
        1: [function(e, o, n) {
            (function(e) {
                ! function(e, r) {
                    "object" == typeof n && "undefined" != typeof o ? o.exports = r() : "function" == typeof t && t.amd ? t(r) : (e.Vimeo = e.Vimeo || {}, e.Vimeo.Player = r())
                }(this, function() {
                    "use strict";

                    function o(t, e) {
                        return e = {
                            exports: {}
                        }, t(e, e.exports), e.exports
                    }

                    function n(t, e, o) {
                        var n = k.get(t.element) || {};
                        e in n || (n[e] = []), n[e].push(o), k.set(t.element, n)
                    }

                    function r(t, e) {
                        var o = k.get(t.element) || {};
                        return o[e] || []
                    }

                    function i(t, e, o) {
                        var n = k.get(t.element) || {};
                        if (!n[e]) return !0;
                        if (!o) return n[e] = [], k.set(t.element, n), !0;
                        var r = n[e].indexOf(o);
                        return r !== -1 && n[e].splice(r, 1), k.set(t.element, n), n[e] && 0 === n[e].length
                    }

                    function s(t, e) {
                        var o = k.get(t);
                        k.set(e, o), k["delete"](t)
                    }

                    function a(t, e) {
                        return 0 === t.indexOf(e.toLowerCase()) ? t : "" + e.toLowerCase() + t.substr(0, 1).toUpperCase() + t.substr(1)
                    }

                    function l(t) {
                        return t instanceof window.HTMLElement
                    }

                    function u(t) {
                        return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t
                    }

                    function c(t) {
                        return /^(https?:)?\/\/(player.)?vimeo.com(?=$|\/)/.test(t)
                    }

                    function p() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                            e = t.id,
                            o = t.url,
                            n = e || o;
                        if (!n) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
                        if (u(n)) return "https://vimeo.com/" + n;
                        if (c(n)) return n.replace("http:", "https:");
                        if (e) throw new TypeError("“" + e + "” is not a valid video id.");
                        throw new TypeError("“" + n + "” is not a vimeo.com url.")
                    }

                    function f(t) {
                        for (var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1], o = x, n = Array.isArray(o), r = 0, o = n ? o : o[Symbol.iterator]();;) {
                            var i;
                            if (n) {
                                if (r >= o.length) break;
                                i = o[r++]
                            } else {
                                if (r = o.next(), r.done) break;
                                i = r.value
                            }
                            var s = i,
                                a = t.getAttribute("data-vimeo-" + s);
                            (a || "" === a) && (e[s] = "" === a ? 1 : a)
                        }
                        return e
                    }

                    function d(t) {
                        var e = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                        return new Promise(function(o, n) {
                            if (!c(t)) throw new TypeError("“" + t + "” is not a vimeo.com url.");
                            var r = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(t);
                            for (var i in e) e.hasOwnProperty(i) && (r += "&" + i + "=" + encodeURIComponent(e[i]));
                            var s = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
                            s.open("GET", r, !0), s.onload = function() {
                                if (404 === s.status) return void n(new Error("“" + e + "” was not found."));
                                if (403 === s.status) return void n(new Error("“" + e + "” is not embeddable."));
                                try {
                                    var t = JSON.parse(s.responseText);
                                    o(t)
                                } catch (e) {
                                    n(e)
                                }
                            }, s.onerror = function() {
                                var t = s.status ? " (" + s.status + ")" : "";
                                n(new Error("There was an error fetching the embed code from Vimeo" + t + "."))
                            }, s.send()
                        })
                    }

                    function h(t, e) {
                        var o = t.html;
                        if (!e) throw new TypeError("An element must be provided");
                        if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
                        var n = document.createElement("div");
                        return n.innerHTML = o, e.appendChild(n.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
                    }

                    function v() {
                        var t = arguments.length <= 0 || void 0 === arguments[0] ? document : arguments[0],
                            e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
                            o = function(t) {
                                "console" in window && console.error && console.error("There was an error creating an embed: " + t)
                            },
                            n = function() {
                                if (i) {
                                    if (s >= r.length) return "break";
                                    a = r[s++]
                                } else {
                                    if (s = r.next(), s.done) return "break";
                                    a = s.value
                                }
                                var t = a;
                                try {
                                    if (null !== t.getAttribute("data-vimeo-defer")) return "continue";
                                    var e = f(t),
                                        n = p(e);
                                    d(n, e).then(function(e) {
                                        return h(e, t)
                                    })["catch"](o)
                                } catch (t) {
                                    o(t)
                                }
                            };
                        t: for (var r = e, i = Array.isArray(r), s = 0, r = i ? r : r[Symbol.iterator]();;) {
                            var a, l = n();
                            switch (l) {
                                case "break":
                                    break t;
                                case "continue":
                                    continue
                            }
                        }
                    }

                    function y(t) {
                        return "string" == typeof t && (t = JSON.parse(t)), t
                    }

                    function g(t, e, o) {
                        if (t.element.contentWindow && t.element.contentWindow.postMessage) {
                            var n = {
                                method: e
                            };
                            void 0 !== o && (n.value = o);
                            var r = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
                            r >= 8 && r < 10 && (n = JSON.stringify(n)), t.element.contentWindow.postMessage(n, t.origin)
                        }
                    }

                    function b(t, e) {
                        e = y(e);
                        var o = [],
                            n = void 0;
                        if (e.event) {
                            if ("error" === e.event)
                                for (var s = r(t, e.data.method), a = s, l = Array.isArray(a), u = 0, a = l ? a : a[Symbol.iterator]();;) {
                                    var c;
                                    if (l) {
                                        if (u >= a.length) break;
                                        c = a[u++]
                                    } else {
                                        if (u = a.next(), u.done) break;
                                        c = u.value
                                    }
                                    var p = c,
                                        f = new Error(e.data.message);
                                    f.name = e.data.name, p.reject(f), i(t, e.data.method, p)
                                }
                            o = r(t, "event:" + e.event), n = e.data
                        } else e.method && (o = r(t, e.method), n = e.value, i(t, e.method));
                        for (var d = o, h = Array.isArray(d), v = 0, d = h ? d : d[Symbol.iterator]();;) {
                            var g;
                            if (h) {
                                if (v >= d.length) break;
                                g = d[v++]
                            } else {
                                if (v = d.next(), v.done) break;
                                g = v.value
                            }
                            var b = g;
                            try {
                                if ("function" == typeof b) {
                                    b.call(t, n);
                                    continue
                                }
                                b.resolve(n)
                            } catch (t) {}
                        }
                    }
                    var A = "undefined" != typeof Array.prototype.indexOf,
                        m = "undefined" != typeof window.postMessage;
                    if (!A || !m) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
                    var j = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {},
                        w = (o(function(t, e) {
                            ! function(t) {
                                function e(t, e) {
                                    function n(t) {
                                        return this && this.constructor === n ? (this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, void(t && o.call(this, t))) : new n(t)
                                    }
                                    return e || A(t, "size", {
                                        get: y
                                    }), t.constructor = n, n.prototype = t, n
                                }

                                function o(t) {
                                    this.add ? t.forEach(this.add, this) : t.forEach(function(t) {
                                        this.set(t[0], t[1])
                                    }, this)
                                }

                                function n(t) {
                                    return this.has(t) && (this._keys.splice(b, 1), this._values.splice(b, 1), this._itp.forEach(function(t) {
                                        b < t[0] && t[0]--
                                    })), -1 < b
                                }

                                function r(t) {
                                    return this.has(t) ? this._values[b] : void 0
                                }

                                function i(t, e) {
                                    if (this.objectOnly && e !== Object(e)) throw new TypeError("Invalid value used as weak collection key");
                                    if (e != e || 0 === e)
                                        for (b = t.length; b-- && !m(t[b], e););
                                    else b = t.indexOf(e);
                                    return -1 < b
                                }

                                function s(t) {
                                    return i.call(this, this._values, t)
                                }

                                function a(t) {
                                    return i.call(this, this._keys, t)
                                }

                                function l(t, e) {
                                    return this.has(t) ? this._values[b] = e : this._values[this._keys.push(t) - 1] = e, this
                                }

                                function u(t) {
                                    return this.has(t) || this._values.push(t), this
                                }

                                function c() {
                                    (this._keys || 0).length = this._values.length = 0
                                }

                                function p() {
                                    return v(this._itp, this._keys)
                                }

                                function f() {
                                    return v(this._itp, this._values)
                                }

                                function d() {
                                    return v(this._itp, this._keys, this._values)
                                }

                                function h() {
                                    return v(this._itp, this._values, this._values)
                                }

                                function v(t, e, o) {
                                    var n = [0],
                                        r = !1;
                                    return t.push(n), {
                                        next: function() {
                                            var i, s = n[0];
                                            return !r && s < e.length ? (i = o ? [e[s], o[s]] : e[s], n[0]++) : (r = !0, t.splice(t.indexOf(n), 1)), {
                                                done: r,
                                                value: i
                                            }
                                        }
                                    }
                                }

                                function y() {
                                    return this._values.length
                                }

                                function g(t, e) {
                                    for (var o = this.entries();;) {
                                        var n = o.next();
                                        if (n.done) break;
                                        t.call(e, n.value[1], n.value[0], this)
                                    }
                                }
                                var b, A = Object.defineProperty,
                                    m = function(t, e) {
                                        return t === e || t !== t && e !== e
                                    };
                                "undefined" == typeof WeakMap && (t.WeakMap = e({
                                    "delete": n,
                                    clear: c,
                                    get: r,
                                    has: a,
                                    set: l
                                }, !0)), "undefined" != typeof Map && "function" == typeof(new Map).values && (new Map).values().next || (t.Map = e({
                                    "delete": n,
                                    has: a,
                                    get: r,
                                    set: l,
                                    keys: p,
                                    values: f,
                                    entries: d,
                                    forEach: g,
                                    clear: c
                                })), "undefined" != typeof Set && "function" == typeof(new Set).values && (new Set).values().next || (t.Set = e({
                                    has: s,
                                    add: u,
                                    "delete": n,
                                    clear: c,
                                    keys: f,
                                    values: f,
                                    entries: h,
                                    forEach: g
                                })), "undefined" == typeof WeakSet && (t.WeakSet = e({
                                    "delete": n,
                                    add: u,
                                    clear: c,
                                    has: s
                                }, !0))
                            }("undefined" != typeof e && "undefined" != typeof j ? j : window)
                        }), o(function(e) {
                            ! function(o, n, r) {
                                n[o] = n[o] || r(), "undefined" != typeof e && e.exports ? e.exports = n[o] : "function" == typeof t && t.amd && t(function() {
                                    return n[o]
                                })
                            }("Promise", "undefined" != typeof j ? j : j, function() {
                                function t(t, e) {
                                    f.add(t, e), p || (p = h(f.drain))
                                }

                                function e(t) {
                                    var e, o = typeof t;
                                    return null == t || "object" != o && "function" != o || (e = t.then), "function" == typeof e && e
                                }

                                function o() {
                                    for (var t = 0; t < this.chain.length; t++) n(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
                                    this.chain.length = 0
                                }

                                function n(t, o, n) {
                                    var r, i;
                                    try {
                                        o === !1 ? n.reject(t.msg) : (r = o === !0 ? t.msg : o.call(void 0, t.msg), r === n.promise ? n.reject(TypeError("Promise-chain cycle")) : (i = e(r)) ? i.call(r, n.resolve, n.reject) : n.resolve(r))
                                    } catch (t) {
                                        n.reject(t)
                                    }
                                }

                                function r(t) {
                                    var n, s = this;
                                    if (!s.triggered) {
                                        s.triggered = !0, s.def && (s = s.def);
                                        try {
                                            (n = e(t)) ? l(function() {
                                                var e = new a(s);
                                                try {
                                                    n.call(t, function() {
                                                        r.apply(e, arguments)
                                                    }, function() {
                                                        i.apply(e, arguments)
                                                    })
                                                } catch (o) {
                                                    i.call(e, o)
                                                }
                                            }): (s.msg = t, s.state = 1, s.chain.length > 0 && l(o, s))
                                        } catch (l) {
                                            i.call(new a(s), l)
                                        }
                                    }
                                }

                                function i(e) {
                                    var n = this;
                                    n.triggered || (n.triggered = !0, n.def && (n = n.def), n.msg = e, n.state = 2, n.chain.length > 0 && t(o, n))
                                }

                                function s(t, e, o, n) {
                                    for (var r = 0; r < e.length; r++) ! function(r) {
                                        t.resolve(e[r]).then(function(t) {
                                            o(r, t)
                                        }, n)
                                    }(r)
                                }

                                function a(t) {
                                    this.def = t, this.triggered = !1
                                }

                                function l(t) {
                                    this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
                                }

                                function u(t) {
                                    if ("function" != typeof t) throw TypeError("Not a function");
                                    if (0 !== this.__NPO__) throw TypeError("Not a promise");
                                    this.__NPO__ = 1;
                                    var e = new l(this);
                                    this.then = function(t, r) {
                                        var i = {
                                            success: "function" != typeof t || t,
                                            failure: "function" == typeof r && r
                                        };
                                        return i.promise = new this.constructor(function(t, e) {
                                            if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                                            i.resolve = t, i.reject = e
                                        }), e.chain.push(i), 0 !== e.state && n(o, e), i.promise
                                    }, this["catch"] = function(t) {
                                        return this.then(void 0, t)
                                    };
                                    try {
                                        t.call(void 0, function(t) {
                                            r.call(e, t)
                                        }, function(t) {
                                            i.call(e, t)
                                        })
                                    } catch (n) {
                                        i.call(e, n)
                                    }
                                }
                                var c, p, f, d = Object.prototype.toString,
                                    h = "undefined" != typeof setImmediate ? function(t) {
                                        return setImmediate(t)
                                    } : setTimeout;
                                try {
                                    Object.defineProperty({}, "x", {}), c = function(t, e, o, n) {
                                        return Object.defineProperty(t, e, {
                                            value: o,
                                            writable: !0,
                                            configurable: n !== !1
                                        })
                                    }
                                } catch (t) {
                                    c = function(t, e, o) {
                                        return t[e] = o, t
                                    }
                                }
                                f = function() {
                                    function t(t, e) {
                                        this.fn = t, this.self = e, this.next = void 0
                                    }
                                    var e, o, n;
                                    return {
                                        add: function(r, i) {
                                            n = new t(r, i), o ? o.next = n : e = n, o = n, n = void 0
                                        },
                                        drain: function() {
                                            var t = e;
                                            for (e = o = p = void 0; t;) t.fn.call(t.self), t = t.next
                                        }
                                    }
                                }();
                                var v = c({}, "constructor", u, !1);
                                return u.prototype = v, c(v, "__NPO__", 0, !1), c(u, "resolve", function(t) {
                                    var e = this;
                                    return t && "object" == typeof t && 1 === t.__NPO__ ? t : new e(function(e, o) {
                                        if ("function" != typeof e || "function" != typeof o) throw TypeError("Not a function");
                                        e(t)
                                    })
                                }), c(u, "reject", function(t) {
                                    return new this(function(e, o) {
                                        if ("function" != typeof e || "function" != typeof o) throw TypeError("Not a function");
                                        o(t)
                                    })
                                }), c(u, "all", function(t) {
                                    var e = this;
                                    return "[object Array]" != d.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e(function(o, n) {
                                        if ("function" != typeof o || "function" != typeof n) throw TypeError("Not a function");
                                        var r = t.length,
                                            i = Array(r),
                                            a = 0;
                                        s(e, t, function(t, e) {
                                            i[t] = e, ++a === r && o(i)
                                        }, n)
                                    })
                                }), c(u, "race", function(t) {
                                    var e = this;
                                    return "[object Array]" != d.call(t) ? e.reject(TypeError("Not an array")) : new e(function(o, n) {
                                        if ("function" != typeof o || "function" != typeof n) throw TypeError("Not a function");
                                        s(e, t, function(t, e) {
                                            o(e)
                                        }, n)
                                    })
                                }), u
                            })
                        })),
                        _ = w && "object" == typeof w && "default" in w ? w["default"] : w,
                        k = new WeakMap,
                        x = ["id", "url", "width", "maxwidth", "height", "maxheight", "portrait", "title", "byline", "color", "autoplay", "autopause", "loop", "responsive"],
                        T = function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        },
                        E = new WeakMap,
                        C = new WeakMap,
                        S = function() {
                            function t(e) {
                                var o = this,
                                    n = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                if (T(this, t), window.jQuery && e instanceof jQuery && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "string" == typeof e && (e = document.getElementById(e)), !l(e)) throw new TypeError("You must pass either a valid element or a valid id.");
                                if ("IFRAME" !== e.nodeName) {
                                    var r = e.querySelector("iframe");
                                    r && (e = r)
                                }
                                if ("IFRAME" === e.nodeName && !c(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
                                if (E.has(e)) return E.get(e);
                                this.element = e, this.origin = "*";
                                var i = new _(function(t, r) {
                                    var i = function(e) {
                                        if (c(e.origin) && o.element.contentWindow === e.source) {
                                            "*" === o.origin && (o.origin = e.origin);
                                            var n = y(e.data),
                                                r = "event" in n && "ready" === n.event,
                                                i = "method" in n && "ping" === n.method;
                                            return r || i ? (o.element.setAttribute("data-ready", "true"), void t()) : void b(o, n)
                                        }
                                    };
                                    if (window.addEventListener ? window.addEventListener("message", i, !1) : window.attachEvent && window.attachEvent("onmessage", i), "IFRAME" !== o.element.nodeName) {
                                        var a = f(e, n),
                                            l = p(a);
                                        d(l, a).then(function(t) {
                                            var n = h(t, e);
                                            return o.element = n, s(e, n), t
                                        })["catch"](function(t) {
                                            return r(t)
                                        })
                                    }
                                });
                                return C.set(this, i), E.set(this.element, this), "IFRAME" === this.element.nodeName && g(this, "ping"), this
                            }
                            return t.prototype.then = function(t) {
                                var e = arguments.length <= 1 || void 0 === arguments[1] ? function() {} : arguments[1];
                                return this.ready().then(t, e)
                            }, t.prototype.callMethod = function(t) {
                                var e = this,
                                    o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
                                return new _(function(r, i) {
                                    return e.ready().then(function() {
                                        n(e, t, {
                                            resolve: r,
                                            reject: i
                                        }), g(e, t, o)
                                    })
                                })
                            }, t.prototype.get = function(t) {
                                var e = this;
                                return new _(function(o, r) {
                                    return t = a(t, "get"), e.ready().then(function() {
                                        n(e, t, {
                                            resolve: o,
                                            reject: r
                                        }), g(e, t)
                                    })
                                })
                            }, t.prototype.set = function(t, e) {
                                var o = this;
                                return _.resolve(e).then(function(e) {
                                    if (t = a(t, "set"), void 0 === e || null === e) throw new TypeError("There must be a value to set.");
                                    return o.ready().then(function() {
                                        return new _(function(r, i) {
                                            n(o, t, {
                                                resolve: r,
                                                reject: i
                                            }), g(o, t, e)
                                        })
                                    })
                                })
                            }, t.prototype.on = function(t, e) {
                                if (!t) throw new TypeError("You must pass an event name.");
                                if (!e) throw new TypeError("You must pass a callback function.");
                                if ("function" != typeof e) throw new TypeError("The callback must be a function.");
                                var o = r(this, "event:" + t);
                                0 === o.length && this.callMethod("addEventListener", t)["catch"](function() {}), n(this, "event:" + t, e)
                            }, t.prototype.off = function(t, e) {
                                if (!t) throw new TypeError("You must pass an event name.");
                                if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
                                var o = i(this, "event:" + t, e);
                                o && this.callMethod("removeEventListener", t)["catch"](function(t) {})
                            }, t.prototype.loadVideo = function(t) {
                                return this.callMethod("loadVideo", t)
                            }, t.prototype.ready = function() {
                                var t = C.get(this);
                                return _.resolve(t)
                            }, t.prototype.enableTextTrack = function(t, e) {
                                if (!t) throw new TypeError("You must pass a language.");
                                return this.callMethod("enableTextTrack", {
                                    language: t,
                                    kind: e
                                })
                            }, t.prototype.disableTextTrack = function() {
                                return this.callMethod("disableTextTrack")
                            }, t.prototype.pause = function() {
                                return this.callMethod("pause")
                            }, t.prototype.play = function() {
                                return this.callMethod("play")
                            }, t.prototype.unload = function() {
                                return this.callMethod("unload")
                            }, t.prototype.getAutopause = function() {
                                return this.get("autopause")
                            }, t.prototype.setAutopause = function(t) {
                                return this.set("autopause", t)
                            }, t.prototype.getColor = function() {
                                return this.get("color")
                            }, t.prototype.setColor = function(t) {
                                return this.set("color", t)
                            }, t.prototype.getCurrentTime = function() {
                                return this.get("currentTime")
                            }, t.prototype.setCurrentTime = function(t) {
                                return this.set("currentTime", t)
                            }, t.prototype.getDuration = function() {
                                return this.get("duration")
                            }, t.prototype.getEnded = function() {
                                return this.get("ended")
                            }, t.prototype.getLoop = function() {
                                return this.get("loop")
                            }, t.prototype.setLoop = function(t) {
                                return this.set("loop", t)
                            }, t.prototype.getPaused = function() {
                                return this.get("paused")
                            }, t.prototype.getTextTracks = function() {
                                return this.get("textTracks")
                            }, t.prototype.getVideoEmbedCode = function() {
                                return this.get("videoEmbedCode")
                            }, t.prototype.getVideoId = function() {
                                return this.get("videoId")
                            }, t.prototype.getVideoTitle = function() {
                                return this.get("videoTitle")
                            }, t.prototype.getVideoWidth = function() {
                                return this.get("videoWidth")
                            }, t.prototype.getVideoHeight = function() {
                                return this.get("videoHeight")
                            }, t.prototype.getVideoUrl = function() {
                                return this.get("videoUrl")
                            }, t.prototype.getVolume = function() {
                                return this.get("volume")
                            }, t.prototype.setVolume = function(t) {
                                return this.set("volume", t)
                            }, t
                        }();
                    return v(), S
                })
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {}],
        2: [function(t, e, o) {
            (function(e) {
                "use strict";

                function n(t) {
                    return t && t.__esModule ? t : {
                        "default": t
                    }
                }

                function r(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }

                function i(t, e) {
                    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !e || "object" != typeof e && "function" != typeof e ? t : e
                }

                function s(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                }

                function a() {
                    if (!h) {
                        h = !0;
                        var t = "\n      .vjs-vimeo iframe {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n    ",
                            e = document.head || document.getElementsByTagName("head")[0],
                            o = document.createElement("style");
                        o.type = "text/css", o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t)), e.appendChild(o)
                    }
                }
                o.__esModule = !0;
                var l = "undefined" != typeof window ? window.videojs : "undefined" != typeof e ? e.videojs : null,
                    u = n(l),
                    c = t("@vimeo/player"),
                    p = n(c),
                    f = u["default"].getComponent("Component"),
                    d = u["default"].getComponent("Tech"),
                    h = !1,
                    v = function(t) {
                        function e(o, n) {
                            r(this, e);
                            var s = i(this, t.call(this, o, n));
                            return a(), s.setPoster(o.poster), s.initVimeoPlayer(), s
                        }
                        return s(e, t), e.prototype.initVimeoPlayer = function() {
                            var t = this,
                                e = {
                                    url: this.options_.source.src,
                                    byline: !1,
                                    portrait: !1,
                                    title: !1
                                };
                            this.options_.autoplay && (e.autoplay = !0), this.options_.height && (e.height = this.options_.height), this.options_.width && (e.width = this.options_.width), this.options_.maxheight && (e.maxheight = this.options_.maxheight), this.options_.maxwidth && (e.maxwidth = this.options_.maxwidth), this.options_.loop && (e.loop = this.options_.loop), this._player = new p["default"](this.el(), e), this.initVimeoState(), ["play", "pause", "ended", "timeupdate", "progress", "seeked"].forEach(function(e) {
                                t._player.on(e, function(o) {
                                    t._vimeoState.progress.duration != o.duration && t.trigger("durationchange"), t._vimeoState.progress = o, t.trigger(e)
                                })
                            }), this._player.on("pause", function() {
                                return t._vimeoState.playing = !1
                            }), this._player.on("play", function() {
                                t._vimeoState.playing = !0, t._vimeoState.ended = !1
                            }), this._player.on("ended", function() {
                                t._vimeoState.playing = !1, t._vimeoState.ended = !0
                            }), this._player.on("volumechange", function(e) {
                                return t._vimeoState.volume = e
                            }), this._player.on("error", function(e) {
                                return t.trigger("error", e)
                            }), this.triggerReady()
                        }, e.prototype.initVimeoState = function() {
                            var t = this._vimeoState = {
                                ended: !1,
                                playing: !1,
                                volume: 0,
                                progress: {
                                    seconds: 0,
                                    percent: 0,
                                    duration: 0
                                }
                            };
                            this._player.getCurrentTime().then(function(e) {
                                return t.progress.seconds = e
                            }), this._player.getDuration().then(function(e) {
                                return t.progress.duration = e
                            }), this._player.getPaused().then(function(e) {
                                return t.playing = !e
                            }), this._player.getVolume().then(function(e) {
                                return t.volume = e
                            })
                        }, e.prototype.createEl = function() {
                            var t = u["default"].createEl("div", {
                                id: this.options_.techId
                            });
                            return t.style.cssText = "width:100%;height:100%;top:0;left:0;position:absolute", t.className = "vjs-vimeo", t
                        }, e.prototype.controls = function() {
                            return !0
                        }, e.prototype.supportsFullScreen = function() {
                            return !0
                        }, e.prototype.src = function() {
                            return this.options_.source
                        }, e.prototype.currentSrc = function() {
                            return this.options_.source.src
                        }, e.prototype.currentTime = function() {
                            return this._vimeoState.progress.seconds
                        }, e.prototype.setCurrentTime = function(t) {
                            this._player.setCurrentTime(t)
                        }, e.prototype.volume = function() {
                            return this._vimeoState.volume
                        }, e.prototype.setVolume = function(t) {
                            return this._player.setVolume(volume)
                        }, e.prototype.duration = function() {
                            return this._vimeoState.progress.duration
                        }, e.prototype.buffered = function() {
                            var t = this._vimeoState.progress;
                            return u["default"].createTimeRange(0, t.percent * t.duration)
                        }, e.prototype.paused = function() {
                            return !this._vimeoState.playing
                        }, e.prototype.pause = function() {
                            this._player.pause()
                        }, e.prototype.play = function() {
                            this._player.play()
                        }, e.prototype.muted = function() {
                            return 0 === this._vimeoState.volume
                        }, e.prototype.ended = function() {
                            return this._vimeoState.ended
                        }, e
                    }(d);
                v.prototype.featuresTimeupdateEvents = !0, v.isSupported = function() {
                    return !0
                }, d.withSourceHandlers(v), v.nativeSourceHandler = {}, v.nativeSourceHandler.canPlayType = function(t) {
                    return "video/vimeo" === t ? "maybe" : ""
                }, v.nativeSourceHandler.canHandleSource = function(t) {
                    return t.type ? v.nativeSourceHandler.canPlayType(t.type) : t.src ? v.nativeSourceHandler.canPlayType(t.src) : ""
                }, v.nativeSourceHandler.handleSource = function(t, e) {
                    e.src(t.src)
                }, v.nativeSourceHandler.dispose = function() {}, v.registerSourceHandler(v.nativeSourceHandler), f.registerComponent("Vimeo", v), d.registerTech("Vimeo", v), v.VERSION = "0.0.1", o["default"] = v
            }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
        }, {
            "@vimeo/player": 1
        }]
    }, {}, [2])(2)
});
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var r = t,
                i = e,
                s = o;
            n = !1, null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, i);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            t = u, e = i, o = s, n = !0, a = u = void 0
        }
    },
    VjsLBButtonClose = videojs.getComponent("Button"),
    LightboxCloseButton = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o), this.on("click", this.closeClick), this.on("tap", this.closeClick)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "buildCSSClass",
            value: function() {
                return "vjs-lightbox-close-button vjs-button vjs-control"
            }
        }, {
            key: "closeClick",
            value: function() {
                afterglow.closeLightbox()
            }
        }]), e
    }(VjsLBButtonClose);
! function() {
    videojs.registerComponent("LightboxCloseButton", LightboxCloseButton)
}();
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var r = t,
                i = e,
                s = o;
            n = !1, null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, i);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            t = u, e = i, o = s, n = !0, a = u = void 0
        }
    },
    VjsButtonResBBase = videojs.getComponent("Button"),
    ResolutionSwitchingButton = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o), this.init()
        }
        return _inherits(e, t), _createClass(e, [{
            key: "buildCSSClass",
            value: function() {
                return "vjs-ag-res-button " + _get(Object.getPrototypeOf(e.prototype), "buildCSSClass", this).call(this)
            }
        }, {
            key: "init",
            value: function() {
                this.prepareSources(), this.setResolutionsNeededFromPlayer(), this.resolutionsNeeded && (this.switchSource(this.sources[0]), this.setCurrentResFromPlayer(), this.on("click", this.switchResolution), this.on("tap", this.switchResolution)), this.updateButton();
                var t = this;
                this.player_.on("ready", function() {
                    t.updateButton
                }), this.player_.on("play", function() {
                    t.updateButton
                })
            }
        }, {
            key: "prepareSources",
            value: function() {
                this.sources = this.getAbsoluteSources(), this.sourcesByType = videojs.reduce(this.sources, function(t, e, o) {
                    return (t[e.type] = t[e.type] || []).push(e), t
                }, {}, this.player_), this.typeAndTech = this.selectTypeAndTech(this.sources)
            }
        }, {
            key: "setCurrentResFromPlayer",
            value: function() {
                for (var t = this.player_.src(), e = this.sources, o = e.length - 1; o >= 0; o--) e[o].src == t && ("hd" !== e[o]["data-quality"] ? this.currentRes = "sd" : this.currentRes = "hd")
            }
        }, {
            key: "setResolutionsNeededFromPlayer",
            value: function() {
                if (this.resolutionsNeeded = !1, "object" == typeof this.typeAndTech) {
                    var t = this.typeAndTech.type;
                    if (void 0 !== this.sourcesByType[t] && this.sourcesByType[t].length > 1)
                        for (var e = this.sourcesByType[t].length - 1; e >= 0; e--)
                            if (void 0 !== this.sourcesByType[t][e]["data-quality"] || this.sourcesByType[t][e]["data-quality"] != this.currentRes) return void(this.resolutionsNeeded = !0)
                }
            }
        }, {
            key: "removeSources",
            value: function() {
                var t = this.player_.el_.getElementsByTagName("video")[0];
                if ("Html5" === this.player_.techName_ && t)
                    for (var e = t.getElementsByTagName("source"), o = 0; o < e.length; o++) t.removeChild(e[o])
            }
        }, {
            key: "getAbsoluteSources",
            value: function() {
                for (var t = this.player_.options_.sources, e = window.location.href.match(/(.*\/)/)[0], o = window.location.protocol, n = window.location.origin, r = t.length - 1; r >= 0; r--) {
                    var i = t[r].src;
                    if (void 0 !== i && "" !== i) {
                        if (i.search(/^\/\//) != -1) i = o + i;
                        else {
                            if (i.search(/:\/\//) != -1) continue;
                            i = i.search(/^\//) != -1 ? n + i : e + i
                        }
                        t[r].src = i
                    }
                }
                return t
            }
        }, {
            key: "getSourceForResolutionChange",
            value: function() {
                for (var t = this.typeAndTech.type, e = this.sourcesByType[t], o = e.length - 1; o >= 0; o--)
                    if ("hd" == this.currentRes) {
                        if (void 0 == e[o]["data-quality"] || "hd" !== e[o]["data-quality"]) return e[o]
                    } else if ("hd" == e[o]["data-quality"]) return e[o];
                return e[0]
            }
        }, {
            key: "switchResolution",
            value: function() {
                var t = this.getSourceForResolutionChange();
                this.switchSource(t)
            }
        }, {
            key: "stopStream",
            value: function() {
                switch (this.player_.techName_) {
                    case "Flash":
                        this.player_.tech_.el_.vjs_stop()
                }
            }
        }, {
            key: "selectSource",
            value: function(t) {
                this.removeSources();
                var e = this.sourcesByType,
                    o = this.selectTypeAndTech(t);
                return !!o && (this.options_.sourceResolutions = e[o.type], this.selectResolution(this.options_.sourceResolutions))
            }
        }, {
            key: "selectTypeAndTech",
            value: function(t) {
                for (var e, o, n = 0, r = this.player_.options_.techOrder; n < r.length; n++)
                    if (e = this.player_.techName_, o = window.videojs.getTech(e), o.isSupported())
                        for (var i = 0, s = t; i < s.length; i++) {
                            var a = s[i];
                            if (o.canPlaySource(a)) return {
                                type: a.type,
                                tech: e
                            }
                        }
            }
        }, {
            key: "selectResolution",
            value: function(t) {
                var e = 0,
                    o = !!window.localStorage,
                    n = e;
                if (o) {
                    var r = parseInt(window.localStorage.getItem("videojs_preferred_res"), 10);
                    isNaN(r) || (n = r)
                }
                var i = t.length - 1,
                    s = n > i ? i : n;
                return t[s]
            }
        }, {
            key: "switchSource",
            value: function(t) {
                if (this.player_.cache_.src === t.src) return this.player_.trigger("resolutionchange"), this.player_;
                var e = this.player_.currentTime(),
                    o = this.player_.paused();
                this.player_.pause(), this.stopStream(), "Html5" === this.player_.techName_ ? this.player_.src(t.src) : this.player_.loadTech(this.player_.techName_, {
                    src: t.src
                });
                var n = this;
                this.player_.ready(function() {
                    this.player_.one("loadeddata", videojs.bind(this.player_, function() {
                        this.player_.currentTime(e)
                    })), this.player_.trigger("resolutionchange"), o || (this.player_.load(), this.player_.play()), localStorage.setItem("videojs_preferred_res", parseInt(t.index, 10)), n.setCurrentResFromPlayer(), n.updateButton()
                })
            }
        }, {
            key: "updateButton",
            value: function() {
                var t = this.prepareButtonElement(this.el_);
                this.resolutionsNeeded ? t.removeClass("vjs-hidden") : t.addClass("vjs-hidden"), "hd" == this.currentRes ? t.addClass("vjs-ag-res-hd") : t.removeClass("vjs-ag-res-hd"), this.el_.blur()
            }
        }, {
            key: "prepareButtonElement",
            value: function(t) {
                return "function" != typeof t.addClass && (t.addClass = function(t) {
                    if (this.classList) this.classList.add(t);
                    else if (-1 == this.className.indexOf(t)) {
                        var e = this.className.split(" ");
                        e.push(t), this.className = e.join(" ")
                    }
                    return this
                }), "function" != typeof t.removeClass && (t.removeClass = function(t) {
                    if (this.classList) this.classList.remove(t);
                    else {
                        var e = this.className.split(" ");
                        e.splice(e.indexOf(t), 1), this.className = e.join(" ")
                    }
                    return this
                }), t
            }
        }]), e
    }(VjsButtonResBBase);
videojs.reduce = function(t, e, o, n) {
        if (t && 0 !== t.length) {
            for (var r = 0, i = t.length; r < i; r++) o = e.call(t, o, t[r], r);
            return o
        }
    },
    function() {
        videojs.registerComponent("ResolutionSwitchingButton", ResolutionSwitchingButton)
    }();
var _createClass = function() {
        function t(t, e) {
            for (var o = 0; o < e.length; o++) {
                var n = e[o];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
            }
        }
        return function(e, o, n) {
            return o && t(e.prototype, o), n && t(e, n), e
        }
    }(),
    _get = function(t, e, o) {
        for (var n = !0; n;) {
            var r = t,
                i = e,
                s = o;
            n = !1, null === r && (r = Function.prototype);
            var a = Object.getOwnPropertyDescriptor(r, i);
            if (void 0 !== a) {
                if ("value" in a) return a.value;
                var l = a.get;
                if (void 0 === l) return;
                return l.call(s)
            }
            var u = Object.getPrototypeOf(r);
            if (null === u) return;
            t = u, e = i, o = s, n = !0, a = u = void 0
        }
    },
    VjsComponent = videojs.getComponent("Component"),
    TopControlBar = function(t) {
        function e(t, o) {
            _classCallCheck(this, e), _get(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, o)
        }
        return _inherits(e, t), _createClass(e, [{
            key: "createEl",
            value: function() {
                return _get(Object.getPrototypeOf(e.prototype), "createEl", this).call(this, "div", {
                    className: "vjs-top-control-bar"
                })
            }
        }]), e
    }(VjsComponent);
TopControlBar.prototype.options_ = {
        loadEvent: "play",
        children: ["fullscreenToggle"]
    },
    function() {
        videojs.registerComponent("TopControlBar", TopControlBar)
    }(),
    function t(e, o, n) {
        function r(s, a) {
            if (!o[s]) {
                if (!e[s]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(s, !0);
                    if (i) return i(s, !0);
                    var u = new Error("Cannot find module '" + s + "'");
                    throw u.code = "MODULE_NOT_FOUND", u
                }
                var c = o[s] = {
                    exports: {}
                };
                e[s][0].call(c.exports, function(t) {
                    var o = e[s][1][t];
                    return r(o ? o : t)
                }, c, c.exports, t, e, o, n)
            }
            return o[s].exports
        }
        for (var i = "function" == typeof require && require, s = 0; s < n.length; s++) r(n[s]);
        return r
    }({
        1: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("./components/Player"),
                a = n(s),
                l = t("./components/Lightbox"),
                u = (n(l), t("./components/LightboxTrigger")),
                c = n(u),
                p = t("./components/Eventbus"),
                f = n(p),
                d = t("./lib/DOMElement"),
                h = n(d),
                v = function() {
                    function t() {
                        r(this, t), this.players = [], this.lightboxtriggers = [], this.eventbus = !1, this.afterinit = []
                    }
                    return i(t, [{
                        key: "init",
                        value: function() {
                            this.configureVideoJS(), this.prepareEventbus(), this.initVideoElements(), this.prepareLightboxVideos();
                            for (var t = 0; t < this.afterinit.length; t++) this.afterinit[t]();
                            this.afterinit = []
                        }
                    }, {
                        key: "initVideoElements",
                        value: function() {
                            for (var t = document.querySelectorAll("video.afterglow,video.sublime"), e = 0; e < t.length; e++) {
                                var o = new h["default"](t[e]),
                                    n = new a["default"](o);
                                n.init(), this.players.push(n)
                            }
                        }
                    }, {
                        key: "prepareLightboxVideos",
                        value: function() {
                            for (var t = document.querySelectorAll("a.afterglow,a.sublime"), e = 0; e < t.length; e++) {
                                var o = new c["default"](t[e]);
                                this.bindLightboxTriggerEvents(o), this.lightboxtriggers.push(o)
                            }
                        }
                    }, {
                        key: "prepareEventbus",
                        value: function() {
                            this.eventbus = !1, this.eventbus = new f["default"]
                        }
                    }, {
                        key: "on",
                        value: function(t, e, o) {
                            var n = this;
                            this.eventbus ? this.eventbus.subscribe(t, e, o) : this.afterinit.push(function() {
                                n.on(t, e, o)
                            })
                        }
                    }, {
                        key: "off",
                        value: function(t, e, o) {
                            var n = this;
                            this.eventbus ? this.eventbus.unsubscribe(t, e, o) : this.afterinit.push(function() {
                                n.off(t, e, o)
                            })
                        }
                    }, {
                        key: "bindLightboxTriggerEvents",
                        value: function(t) {
                            var e = this;
                            t.on("trigger", function() {
                                e.consolidatePlayers
                            }), t.on("close", function() {
                                e.consolidatePlayers()
                            })
                        }
                    }, {
                        key: "play",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--) this.players[e].id === t && this.players[e].getPlayer().play();
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--) this.lightboxtriggers[e].playerid === t && this.lightboxtriggers[e].trigger()
                        }
                    }, {
                        key: "getPlayer",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--)
                                if (this.players[e].id === t) return this.players[e].getPlayer();
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--)
                                if (this.lightboxtriggers[e].playerid === t) return this.lightboxtriggers[e].getPlayer();
                            return !1
                        }
                    }, {
                        key: "destroyPlayer",
                        value: function(t) {
                            for (var e = this.players.length - 1; e >= 0; e--)
                                if (this.players[e].id === t) return this.players[e].destroy(), this.players.splice(e, 1), !0;
                            for (var e = this.lightboxtriggers.length - 1; e >= 0; e--)
                                if (this.lightboxtriggers[e].playerid === t) return this.closeLightbox(), !0;
                            return !1
                        }
                    }, {
                        key: "closeLightbox",
                        value: function() {
                            for (var t = this.lightboxtriggers.length - 1; t >= 0; t--) this.lightboxtriggers[t].closeLightbox();
                            this.consolidatePlayers()
                        }
                    }, {
                        key: "consolidatePlayers",
                        value: function() {
                            for (var t = this.players.length - 1; t >= 0; t--) void 0 === this.players[t] || this.players[t].alive || (delete this.players[t], this.players = this.players.filter(function() {
                                return !0
                            }))
                        }
                    }, {
                        key: "configureVideoJS",
                        value: function() {
                            window.HELP_IMPROVE_VIDEOJS = !1
                        }
                    }]), t
                }();
            o["default"] = v, e.exports = o["default"]
        }, {
            "./components/Eventbus": 3,
            "./components/Lightbox": 4,
            "./components/LightboxTrigger": 5,
            "./components/Player": 6,
            "./lib/DOMElement": 7
        }],
        2: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("../lib/Util"),
                a = n(s),
                l = function() {
                    function t(e) {
                        var o = arguments.length <= 1 || void 0 === arguments[1] ? "afterglow" : arguments[1];
                        return r(this, t), this.init(e, o)
                    }
                    return i(t, [{
                        key: "init",
                        value: function(t) {
                            var e = arguments.length <= 1 || void 0 === arguments[1] ? "afterglow" : arguments[1];
                            if (void 0 == t) console.error("Please provide a proper video element to afterglow");
                            else {
                                this.videoelement = t, this.options = {}, this.skin = e, this.setDefaultOptions(), this.setSkinControls();
                                var o = new a["default"];
                                o.isYoutubePlayer(this.videoelement) && this.setYoutubeOptions(), o.isVimeoPlayer(this.videoelement) && this.setVimeoOptions()
                            }
                        }
                    }, {
                        key: "setDefaultOptions",
                        value: function() {
                            this.options.controls = !0, this.options.techOrder = ["Html5"], this.options.preload = this.getPlayerAttributeFromVideoElement("preload", "auto"), this.options.autoplay = this.getPlayerAttributeFromVideoElement("autoplay"), this.options.poster = this.getPlayerAttributeFromVideoElement("poster")
                        }
                    }, {
                        key: "getPlayerAttributeFromVideoElement",
                        value: function(t) {
                            var e = !(arguments.length <= 1 || void 0 === arguments[1]) && arguments[1];
                            return null !== this.videoelement.getAttribute("data-" + t) ? this.videoelement.getAttribute("data-" + t) : null !== this.videoelement.getAttribute(t) ? this.videoelement.getAttribute(t) : e
                        }
                    }, {
                        key: "setSkinControls",
                        value: function() {
                            var t = {
                                children: [{
                                    name: "currentTimeDisplay"
                                }, {
                                    name: "playToggle"
                                }, {
                                    name: "durationDisplay"
                                }, {
                                    name: "progressControl"
                                }, {
                                    name: "ResolutionSwitchingButton"
                                }, {
                                    name: "volumeMenuButton",
                                    inline: !0
                                }, {
                                    name: "subtitlesButton"
                                }, {
                                    name: "captionsButton"
                                }]
                            };
                            this.options.controlBar = t
                        }
                    }, {
                        key: "setYoutubeOptions",
                        value: function() {
                            this.options.showinfo = 0, this.options.techOrder = ["youtube"], this.options.sources = [{
                                type: "video/youtube",
                                src: "https://www.youtube.com/watch?v=" + this.getPlayerAttributeFromVideoElement("youtube-id")
                            }];
                            var t = new a["default"];
                            t.ie().actualVersion >= 8 && t.ie().actualVersion <= 11 ? this.options.youtube = {
                                ytControls: 2,
                                color: "white",
                                modestbranding: 1
                            } : this.options.youtube = {
                                iv_load_policy: 3,
                                modestbranding: 1
                            }
                        }
                    }, {
                        key: "setVimeoOptions",
                        value: function() {
                            this.options.techOrder = ["vimeo"], this.options.sources = [{
                                type: "video/vimeo",
                                src: "https://vimeo.com/" + this.getPlayerAttributeFromVideoElement("vimeo-id")
                            }]
                        }
                    }, {
                        key: "getSkinClass",
                        value: function() {
                            var t = "vjs-afterglow-skin";
                            "afterglow" !== this.skin && (t += " afterglow-skin-" + this.skin);
                            var e = new a["default"];
                            return 9 == e.ie().actualVersion && (t += " ie9-is-bad"), t
                        }
                    }]), t
                }();
            o["default"] = l, e.exports = o["default"]
        }, {
            "../lib/Util": 8
        }],
        3: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                i = function() {
                    function t() {
                        n(this, t), this.players = {}
                    }
                    return r(t, [{
                        key: "subscribe",
                        value: function(t, e, o) {
                            this.players[t] || (this.players[t] = {
                                listeners: {}
                            }), this.players[t].listeners[e] || (this.players[t].listeners[e] = []), this.players[t].listeners[e].push(o)
                        }
                    }, {
                        key: "unsubscribe",
                        value: function(t, e, o) {
                            if (this.players[t] && this.players[t].listeners[e] && this.players[t].listeners[e].indexOf(o) !== -1) {
                                var n = this.players[t].listeners[e].indexOf(o);
                                this.players[t].listeners[e].splice(n, 1)
                            } else console.error("afterglow could not unbind your event because the _callback was not bound")
                        }
                    }, {
                        key: "dispatch",
                        value: function(t, e) {
                            if (!this.players[t] || !this.players[t].listeners[e]) return !1;
                            for (var o = 0; o < this.players[t].listeners[e].length; o++) this.players[t].listeners[e][o]({
                                type: e,
                                playerid: t,
                                player: window.afterglow.getPlayer(t)
                            })
                        }
                    }]), t
                }();
            o["default"] = i, e.exports = o["default"]
        }, {}],
        4: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                a = function(t, e, o) {
                    for (var n = !0; n;) {
                        var r = t,
                            i = e,
                            s = o;
                        n = !1, null === r && (r = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(r, i);
                        if (void 0 !== a) {
                            if ("value" in a) return a.value;
                            var l = a.get;
                            if (void 0 === l) return;
                            return l.call(s)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        t = u, e = i, o = s, n = !0, a = u = void 0
                    }
                },
                l = t("./Player"),
                u = n(l),
                c = t("../lib/Util"),
                p = n(c),
                f = t("../lib/DOMElement"),
                d = n(f),
                h = t("../../../../vendor/Emitter/Emitter"),
                v = n(h),
                y = function(t) {
                    function e() {
                        r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, document.createElement("div")), this.addClass("afterglow-lightbox-wrapper"), this.build(), this.bindEmitter()
                    }
                    return i(e, t), s(e, [{
                        key: "build",
                        value: function() {
                            var t = this.buildCover(),
                                e = this.buildLightbox();
                            this.appendDomElement(t, "cover"), this.appendDomElement(e, "lightbox")
                        }
                    }, {
                        key: "buildCover",
                        value: function() {
                            var t = document.createElement("div");
                            return t = new d["default"](t), t.addClass("cover"), t
                        }
                    }, {
                        key: "buildLightbox",
                        value: function() {
                            var t = document.createElement("div");
                            return t = new d["default"](t), t.addClass("afterglow-lightbox"), t
                        }
                    }, {
                        key: "bindEmitter",
                        value: function() {
                            (0, v["default"])(this)
                        }
                    }, {
                        key: "passVideoElement",
                        value: function(t) {
                            this.playerid = t.getAttribute("id"), t = new d["default"](t), this.lightbox.appendDomElement(t, "videoelement"), this.lightbox.videoelement = t, this.lightbox.videoelement.setAttribute("autoplay", "autoplay"), this.player = new u["default"](this.lightbox.videoelement)
                        }
                    }, {
                        key: "launch",
                        value: function(t) {
                            var e = this,
                                o = new p["default"];
                            document.body.appendChild(this.node), this.player.init(function() {
                                o.isMobile() || e.player.videojs.paused() && (e.player.videojs.posterImage.show(), e.player.videojs.bigPlayButton.show()), "true" == e.lightbox.videoelement.getAttribute("data-autoclose") ? e.player.videojs.on("ended", function() {
                                    e.close()
                                }) : e.player.videojs.on("ended", function() {
                                    e.player.videojs.posterImage.show()
                                }), e.player.videojs.getChild("TopControlBar").addChild("LightboxCloseButton")
                            });
                            for (var n in window.videojs.getPlayers()) null !== window.videojs.getPlayers()[n] && window.videojs.getPlayers()[n].id_ !== this.playerid && window.videojs.getPlayers()[n].pause();
                            this.resize(), o.addEventListener(window, "resize", function() {
                                e.resize()
                            }), this.cover.bind("click", function() {
                                e.close()
                            }), o.addEventListener(window, "keyup", function(t) {
                                27 == t.keyCode && e.close()
                            }), "function" == typeof t && t(this)
                        }
                    }, {
                        key: "resize",
                        value: function() {
                            if (void 0 !== this.lightbox.videoelement) {
                                var t = this.lightbox.videoelement.getAttribute("data-ratio");
                                if ("false" == this.lightbox.videoelement.getAttribute("data-overscale")) var e = this.calculateLightboxSizes(t, parseInt(this.lightbox.videoelement.getAttribute("data-maxwidth")));
                                else var e = this.calculateLightboxSizes(t)
                            } else if (1 == document.querySelectorAll("div.afterglow-lightbox-wrapper .vjs-youtube").length) var o = document.querySelector("div.afterglow-lightbox-wrapper .vjs-youtube"),
                                t = o.getAttribute("data-ratio"),
                                e = this.calculateLightboxSizes(t);
                            this.node.style.width = e.width, this.node.style.height = e.height, this.lightbox.node.style.height = e.playerheight + "px", this.lightbox.node.style.width = e.playerwidth + "px", this.lightbox.node.style.top = e.playeroffsettop + "px", this.lightbox.node.style.left = e.playeroffsetleft + "px"
                        }
                    }, {
                        key: "calculateLightboxSizes",
                        value: function(t, e) {
                            var o = {};
                            return o.width = window.clientWidth || document.documentElement.clientWidth || document.body.clientWidth || window.innerWidth, o.height = window.clientHeight || document.documentElement.clientHeight || document.body.clientHeight || window.innerHeight, o.height / o.width > t ? ("undefined" != typeof e && e < .9 * o.width ? o.playerwidth = e : o.playerwidth = .9 * o.width, o.playerheight = o.playerwidth * t) : ("undefined" != typeof e && e < .92 * o.height / t ? o.playerheight = e * t : o.playerheight = .92 * o.height, o.playerwidth = o.playerheight / t), o.playeroffsettop = (o.height - o.playerheight) / 2, o.playeroffsetleft = (o.width - o.playerwidth) / 2, o
                        }
                    }, {
                        key: "close",
                        value: function() {
                            window.afterglow.eventbus.dispatch(this.player.id, "before-lightbox-close"), this.player.destroy(!0), this.node.parentNode.removeChild(this.node), this.emit("close")
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            if (void 0 !== this.player) return this.player.getPlayer()
                        }
                    }]), e
                }(d["default"]);
            o["default"] = y, e.exports = o["default"]
        }, {
            "../../../../vendor/Emitter/Emitter": 10,
            "../lib/DOMElement": 7,
            "../lib/Util": 8,
            "./Player": 6
        }],
        5: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function i(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var s = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                a = function(t, e, o) {
                    for (var n = !0; n;) {
                        var r = t,
                            i = e,
                            s = o;
                        n = !1, null === r && (r = Function.prototype);
                        var a = Object.getOwnPropertyDescriptor(r, i);
                        if (void 0 !== a) {
                            if ("value" in a) return a.value;
                            var l = a.get;
                            if (void 0 === l) return;
                            return l.call(s)
                        }
                        var u = Object.getPrototypeOf(r);
                        if (null === u) return;
                        t = u, e = i, o = s, n = !0, a = u = void 0
                    }
                },
                l = t("./Lightbox"),
                u = n(l),
                c = t("../../../../vendor/Emitter/Emitter"),
                p = n(c),
                f = t("../lib/DOMElement"),
                d = n(f),
                h = function(t) {
                    function e(t) {
                        r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.init()
                    }
                    return i(e, t), s(e, [{
                        key: "init",
                        value: function() {
                            this.playerid = this.node.getAttribute("href").replace("#", "");
                            var t = document.querySelector("#" + this.playerid);
                            this.videoelement = new d["default"](t), this.prepare(), (0, p["default"])(this)
                        }
                    }, {
                        key: "prepare",
                        value: function() {
                            var t = this;
                            this.videoelement.addClass("afterglow-lightboxplayer"), this.videoelement.setAttribute("data-autoresize", "fit"), this.bind("click", function(e) {
                                e.preventDefault(), t.trigger()
                            })
                        }
                    }, {
                        key: "trigger",
                        value: function() {
                            var t = this;
                            this.lightbox = new u["default"];
                            var e = this.videoelement.cloneNode(!0);
                            this.lightbox.passVideoElement(e), this.emit("trigger"), window.afterglow.eventbus.dispatch(this.playerid, "lightbox-launched"), this.lightbox.launch(), this.lightbox.on("close", function() {
                                window.afterglow.eventbus.dispatch(t.playerid, "lightbox-closed"), t.emit("close")
                            })
                        }
                    }, {
                        key: "closeLightbox",
                        value: function() {
                            void 0 != this.lightbox && (this.lightbox.close(), this.deleteLightbox())
                        }
                    }, {
                        key: "deleteLightbox",
                        value: function() {
                            void 0 != this.lightbox && delete this.lightbox
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            if (void 0 !== this.lightbox) return this.lightbox.getPlayer()
                        }
                    }]), e
                }(d["default"]);
            o["default"] = h, e.exports = o["default"]
        }, {
            "../../../../vendor/Emitter/Emitter": 10,
            "../lib/DOMElement": 7,
            "./Lightbox": 4
        }],
        6: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }

            function r(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var i = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                s = t("./Config"),
                a = n(s),
                l = t("../lib/Util"),
                u = n(l),
                c = function() {
                    function t(e) {
                        r(this, t), this.setup(e)
                    }
                    return i(t, [{
                        key: "setup",
                        value: function(t) {
                            this.videoelement = t, this.id = t.getAttribute("id"), this.config = new a["default"](t, this.getSkinName()), this.util = new u["default"], this.prepareVideoElement(), this.alive = !0
                        }
                    }, {
                        key: "prepareVideoElement",
                        value: function() {
                            this.applyDefaultClasses(), this.applyParameters(), this.util.isYoutubePlayer(this.videoelement) ? this.applyYoutubeClasses() : this.util.isVimeoPlayer(this.videoelement) && this.applyVimeoClasses()
                        }
                    }, {
                        key: "init",
                        value: function(t) {
                            var e = this.videoelement.node,
                                o = this.config.options,
                                n = window.videojs(e, o).ready(function() {
                                    var o = this;
                                    if (this.hotkeys({
                                            enableFullscreen: !0,
                                            enableNumbers: !1,
                                            enableVolumeScroll: !1
                                        }), null !== e.getAttribute("data-volume")) {
                                        var n = parseFloat(e.getAttribute("data-volume"));
                                        this.volume(n)
                                    }
                                    this.addChild("TopControlBar"), this.on("play", function() {
                                        window.afterglow.eventbus.dispatch(o.id(), "play");
                                        for (var t in window.videojs.getPlayers()) null !== window.videojs.getPlayers()[t] && window.videojs.getPlayers()[t].id_ !== o.id_ && window.videojs.getPlayers()[t].pause();
                                        o.el_.classList.contains("vjs-youtube-headstart") && ! function() {
                                            var t = o.el_;
                                            setTimeout(function() {
                                                t.classList.remove("vjs-youtube-headstart")
                                            }, 3e3)
                                        }()
                                    }), this.on("pause", function() {
                                        window.afterglow.eventbus.dispatch(o.id(), "paused")
                                    }), this.on("ended", function() {
                                        window.afterglow.eventbus.dispatch(o.id(), "ended")
                                    }), this.on("volumechange", function() {
                                        window.afterglow.eventbus.dispatch(o.id(), "volume-changed")
                                    }), this.on("fullscreenchange", function() {
                                        o.isFullscreen() ? window.afterglow.eventbus.dispatch(o.id(), "fullscreen-entered") : window.afterglow.eventbus.dispatch(o.id(), "fullscreen-left"), window.afterglow.eventbus.dispatch(o.id(), "fullscreen-changed")
                                    }), "function" == typeof t && t(this), window.afterglow.eventbus.dispatch(this.id(), "ready"), this.on("autoplay", function() {
                                        window.afterglow.eventbus.dispatch(o.id(), "play")
                                    })
                                });
                            this.videojs = n
                        }
                    }, {
                        key: "applyDefaultClasses",
                        value: function() {
                            var t = this;
                            this.videoelement.addClass("video-js"), this.videoelement.addClass("afterglow");
                            var e = this.config.getSkinClass().split(" ");
                            e.forEach(function(e) {
                                t.videoelement.addClass(e)
                            }), this.videoelement.removeClass("sublime");
                            var o = this.util.ie().actualVersion;
                            o >= 8 && o <= 11 && this.videoelement.addClass("vjs-IE")
                        }
                    }, {
                        key: "applyParameters",
                        value: function() {
                            if ("false" == this.videoelement.getAttribute("data-overscale") && this.videoelement.setAttribute("data-maxwidth", this.videoelement.getAttribute("width")), "none" != this.videoelement.getAttribute("data-autoresize") && "false" != this.videoelement.getAttribute("data-autoresize")) {
                                this.videoelement.addClass("vjs-responsive");
                                var t = this.calculateRatio();
                                this.videoelement.node.style.paddingTop = 100 * t + "%", this.videoelement.removeAttribute("height"), this.videoelement.removeAttribute("width"), this.videoelement.setAttribute("data-ratio", t)
                            }
                        }
                    }, {
                        key: "applyYoutubeClasses",
                        value: function() {
                            this.videoelement.addClass("vjs-youtube"), this.videoelement.addClass("vjs-youtube-headstart"), document.querySelector("video").controls && this.videoelement.addClass("vjs-using-native-controls"), /iPad|iPhone|iPod|iOS/.test(navigator.platform) && this.videoelement.addClass("vjs-iOS");
                            var t = this.util.ie().actualVersion;
                            t >= 8 && t <= 11 && this.videoelement.addClass("vjs-using-native-controls")
                        }
                    }, {
                        key: "applyVimeoClasses",
                        value: function() {
                            this.videoelement.addClass("vjs-vimeo")
                        }
                    }, {
                        key: "calculateRatio",
                        value: function() {
                            if (this.videoelement.getAttribute("data-ratio")) var t = this.videoelement.getAttribute("data-ratio");
                            else {
                                if (!this.videoelement.getAttribute("height") || !this.videoelement.getAttribute("width")) return console.error("Please provide witdh and height for your video element."), 0;
                                var t = this.videoelement.getAttribute("height") / this.videoelement.getAttribute("width")
                            }
                            return parseFloat(t)
                        }
                    }, {
                        key: "getSkinName",
                        value: function() {
                            return this.videoelement.getAttribute("data-skin") ? this.videoelement.getAttribute("data-skin") : "afterglow"
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.videojs.paused() || this.videojs.pause(), this.videojs.isFullscreen() && this.videojs.exitFullscreen(), this.videojs.dispose(), this.alive = !1
                        }
                    }, {
                        key: "getPlayer",
                        value: function() {
                            return this.videojs
                        }
                    }]), t
                }();
            o["default"] = c, e.exports = o["default"]
        }, {
            "../lib/Util": 8,
            "./Config": 2
        }],
        7: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                i = function() {
                    function t(e) {
                        n(this, t), this.node = e
                    }
                    return r(t, [{
                        key: "addClass",
                        value: function(t) {
                            return this.node.classList ? this.node.classList.add(t) : this.hasClass(t) || (this.node.className += " " + t), this
                        }
                    }, {
                        key: "removeClass",
                        value: function(t) {
                            if (this.node.classList) this.node.classList.remove(t);
                            else {
                                var e = this.node.className.split(" ");
                                e.splice(e.indexOf(t), 1), this.node.className = e.join(" ")
                            }
                            return this
                        }
                    }, {
                        key: "hasClass",
                        value: function(t) {
                            return this.node.classList ? this.node.classList.contains(t) : -1 < this.node.className.indexOf(t)
                        }
                    }, {
                        key: "bind",
                        value: function(t, e) {
                            for (var o = t.split(" "), n = 0, r = o.length; n < r; n++) this.node.addEventListener ? this.node.addEventListener(o[n], e, !1) : this.node.attachEvent && this.node.attachEvent("on" + o[n], e);
                            return this
                        }
                    }, {
                        key: "unbind",
                        value: function(t, e) {
                            for (var o = t.split(" "), n = 0, r = o.length; n < r; n++) this.node.removeEventListener && this.node.removeEventListener(o[n], e, !1), this.node.detachEvent && this.node.detachEvent("on" + o[n], e);
                            return this
                        }
                    }, {
                        key: "appendDomElement",
                        value: function(t, e) {
                            this[e] = t, this.appendChild(t.node)
                        }
                    }, {
                        key: "getAttribute",
                        value: function(t) {
                            return this.node.getAttribute(t)
                        }
                    }, {
                        key: "setAttribute",
                        value: function(t, e) {
                            return this.node.setAttribute(t, e)
                        }
                    }, {
                        key: "hasAttribute",
                        value: function(t) {
                            return this.node.hasAttribute(t)
                        }
                    }, {
                        key: "removeAttribute",
                        value: function(t) {
                            return this.node.removeAttribute(t)
                        }
                    }, {
                        key: "cloneNode",
                        value: function() {
                            var t = !(arguments.length <= 0 || void 0 === arguments[0]) && arguments[0];
                            return this.node.cloneNode(t)
                        }
                    }, {
                        key: "appendChild",
                        value: function(t) {
                            this.node.appendChild(t)
                        }
                    }]), t
                }();
            o["default"] = i, e.exports = o["default"]
        }, {}],
        8: [function(t, e, o) {
            "use strict";

            function n(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            Object.defineProperty(o, "__esModule", {
                value: !0
            });
            var r = function() {
                    function t(t, e) {
                        for (var o = 0; o < e.length; o++) {
                            var n = e[o];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                        }
                    }
                    return function(e, o, n) {
                        return o && t(e.prototype, o), n && t(e, n), e
                    }
                }(),
                i = function() {
                    function t() {
                        n(this, t)
                    }
                    return r(t, [{
                        key: "isYoutubePlayer",
                        value: function(t) {
                            return t.hasAttribute("data-youtube-id")
                        }
                    }, {
                        key: "loadYoutubeThumbnailUrl",
                        value: function(t) {
                            var e = "https://img.youtube.com/vi/" + t + "/maxresdefault.jpg";
                            return e
                        }
                    }, {
                        key: "isVimeoPlayer",
                        value: function(t) {
                            return t.hasAttribute("data-vimeo-id")
                        }
                    }, {
                        key: "isDailymotionPlayer",
                        value: function(t) {
                            return t.hasAttribute("data-dailymotion-id")
                        }
                    }, {
                        key: "ie",
                        value: function() {
                            var t, e, o, n, r;
                            return e = !1, n = {
                                5.5: "5.5",
                                5.6: "6",
                                5.7: "7",
                                5.8: "8",
                                9: "9",
                                10: "10"
                            }, r = new Function("/*@cc_on return @_jscript_version; @*/")(), void 0 !== r && (e = !0, o = n[r]), t = {
                                isTheBrowser: e,
                                actualVersion: o
                            }, e || window.navigator.userAgent.indexOf("Trident/7.0") > 0 && !/x64|x32/gi.test(window.navigator.userAgent) && (t = {
                                isTheBrowser: !0,
                                actualVersion: "11"
                            }), t
                        }
                    }, {
                        key: "isMobile",
                        value: function() {
                            var t = function() {
                                    return navigator.userAgent.match(/Android/i)
                                },
                                e = function() {
                                    return navigator.userAgent.match(/BlackBerry/i)
                                },
                                o = function() {
                                    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                                },
                                n = function() {
                                    return navigator.userAgent.match(/Opera Mini/i)
                                },
                                r = function() {
                                    return navigator.userAgent.match(/IEMobile/i)
                                };
                            return !!(t() || e() || o() || n() || r())
                        }
                    }, {
                        key: "merge_objects",
                        value: function(t, e) {
                            var o = {};
                            for (var n in t) o[n] = t[n];
                            for (var n in e) o[n] = e[n];
                            return o
                        }
                    }, {
                        key: "addEventListener",
                        value: function(t, e, o) {
                            null != t && "undefined" != typeof t && (t.addEventListener ? t.addEventListener(e, o, !1) : t.attachEvent ? t.attachEvent("on" + e, o) : t["on" + e] = o)
                        }
                    }]), t
                }();
            o["default"] = i, e.exports = o["default"]
        }, {}],
        9: [function(t, e, o) {
            "use strict";

            function n(t) {
                return t && t.__esModule ? t : {
                    "default": t
                }
            }
            var r = t("./afterglow/Afterglow"),
                i = n(r);
            window.afterglow = new i["default"], document.addEventListener("DOMContentLoaded", function() {
                window.afterglow.init()
            })
        }, {
            "./afterglow/Afterglow": 1
        }],
        10: [function(t, e, o) {
            "use strict";

            function n(t) {
                if (t) return r(t)
            }

            function r(t) {
                for (var e in n.prototype) t[e] = n.prototype[e];
                return t
            }
            e.exports = n, n.prototype.on = n.prototype.addEventListener = function(t, e) {
                return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this
            }, n.prototype.once = function(t, e) {
                function o() {
                    this.off(t, o), e.apply(this, arguments)
                }
                return o.fn = e, this.on(t, o), this
            }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                var o = this._callbacks["$" + t];
                if (!o) return this;
                if (1 == arguments.length) return delete this._callbacks["$" + t], this;
                for (var n, r = 0; r < o.length; r++)
                    if (n = o[r], n === e || n.fn === e) {
                        o.splice(r, 1);
                        break
                    }
                return this
            }, n.prototype.emit = function(t) {
                this._callbacks = this._callbacks || {};
                var e = [].slice.call(arguments, 1),
                    o = this._callbacks["$" + t];
                if (o) {
                    o = o.slice(0);
                    for (var n = 0, r = o.length; n < r; ++n) o[n].apply(this, e)
                }
                return this
            }, n.prototype.listeners = function(t) {
                return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || []
            }, n.prototype.hasListeners = function(t) {
                return !!this.listeners(t).length
            }
        }, {}]
    }, {}, [9]);


/*
 
 Slick Slider
 Version: 1.8.1
 */
/* global window, document, define, jQuery, setInterval, clearInterval */
! function(i) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], i) : "undefined" != typeof exports ? module.exports = i(require("jquery")) : i(jQuery)
}(function(i) {
    "use strict";
    var e = window.Slick || {};
    (e = function() {
        var e = 0;
        return function(t, o) {
            var s, n = this;
            n.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: i(t),
                appendDots: i(t),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: "50px",
                cssEase: "ease",
                customPaging: function(e, t) {
                    return i('<button type="button" />').text(t + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                focusOnChange: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: "ondemand",
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnFocus: !0,
                pauseOnDotsHover: !1,
                respondTo: "window",
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "",
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1e3
            }, n.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: !1,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                swiping: !1,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            }, i.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = i(t), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, s = i(t).data("slick") || {}, n.options = i.extend({}, n.defaults, o, s), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = i.proxy(n.autoPlay, n), n.autoPlayClear = i.proxy(n.autoPlayClear, n), n.autoPlayIterator = i.proxy(n.autoPlayIterator, n), n.changeSlide = i.proxy(n.changeSlide, n), n.clickHandler = i.proxy(n.clickHandler, n), n.selectHandler = i.proxy(n.selectHandler, n), n.setPosition = i.proxy(n.setPosition, n), n.swipeHandler = i.proxy(n.swipeHandler, n), n.dragHandler = i.proxy(n.dragHandler, n), n.keyHandler = i.proxy(n.keyHandler, n), n.instanceUid = e++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
        }
    }()).prototype.activateADA = function() {
        this.$slideTrack.find(".slick-active").attr({
            "aria-hidden": "false"
        }).find("a, input, button, select").attr({
            tabindex: "0"
        })
    }, e.prototype.addSlide = e.prototype.slickAdd = function(e, t, o) {
        var s = this;
        if ("boolean" == typeof t) o = t, t = null;
        else if (t < 0 || t >= s.slideCount) return !1;
        s.unload(), "number" == typeof t ? 0 === t && 0 === s.$slides.length ? i(e).appendTo(s.$slideTrack) : o ? i(e).insertBefore(s.$slides.eq(t)) : i(e).insertAfter(s.$slides.eq(t)) : !0 === o ? i(e).prependTo(s.$slideTrack) : i(e).appendTo(s.$slideTrack), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e)
        }), s.$slidesCache = s.$slides, s.reinit()
    }, e.prototype.animateHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.animate({
                height: e
            }, i.options.speed)
        }
    }, e.prototype.animateSlide = function(e, t) {
        var o = {},
            s = this;
        s.animateHeight(), !0 === s.options.rtl && !1 === s.options.vertical && (e = -e), !1 === s.transformsEnabled ? !1 === s.options.vertical ? s.$slideTrack.animate({
            left: e
        }, s.options.speed, s.options.easing, t) : s.$slideTrack.animate({
            top: e
        }, s.options.speed, s.options.easing, t) : !1 === s.cssTransitions ? (!0 === s.options.rtl && (s.currentLeft = -s.currentLeft), i({
            animStart: s.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: s.options.speed,
            easing: s.options.easing,
            step: function(i) {
                i = Math.ceil(i), !1 === s.options.vertical ? (o[s.animType] = "translate(" + i + "px, 0px)", s.$slideTrack.css(o)) : (o[s.animType] = "translate(0px," + i + "px)", s.$slideTrack.css(o))
            },
            complete: function() {
                t && t.call()
            }
        })) : (s.applyTransition(), e = Math.ceil(e), !1 === s.options.vertical ? o[s.animType] = "translate3d(" + e + "px, 0px, 0px)" : o[s.animType] = "translate3d(0px," + e + "px, 0px)", s.$slideTrack.css(o), t && setTimeout(function() {
            s.disableTransition(), t.call()
        }, s.options.speed))
    }, e.prototype.getNavTarget = function() {
        var e = this,
            t = e.options.asNavFor;
        return t && null !== t && (t = i(t).not(e.$slider)), t
    }, e.prototype.asNavFor = function(e) {
        var t = this.getNavTarget();
        null !== t && "object" == typeof t && t.each(function() {
            var t = i(this).slick("getSlick");
            t.unslicked || t.slideHandler(e, !0)
        })
    }, e.prototype.applyTransition = function(i) {
        var e = this,
            t = {};
        !1 === e.options.fade ? t[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : t[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.autoPlay = function() {
        var i = this;
        i.autoPlayClear(), i.slideCount > i.options.slidesToShow && (i.autoPlayTimer = setInterval(i.autoPlayIterator, i.options.autoplaySpeed))
    }, e.prototype.autoPlayClear = function() {
        var i = this;
        i.autoPlayTimer && clearInterval(i.autoPlayTimer)
    }, e.prototype.autoPlayIterator = function() {
        var i = this,
            e = i.currentSlide + i.options.slidesToScroll;
        i.paused || i.interrupted || i.focussed || (!1 === i.options.infinite && (1 === i.direction && i.currentSlide + 1 === i.slideCount - 1 ? i.direction = 0 : 0 === i.direction && (e = i.currentSlide - i.options.slidesToScroll, i.currentSlide - 1 == 0 && (i.direction = 1))), i.slideHandler(e))
    }, e.prototype.buildArrows = function() {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = i(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = i(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, e.prototype.buildDots = function() {
        var e, t, o = this;
        if (!0 === o.options.dots) {
            for (o.$slider.addClass("slick-dotted"), t = i("<ul />").addClass(o.options.dotsClass), e = 0; e <= o.getDotCount(); e += 1) t.append(i("<li />").append(o.options.customPaging.call(this, o, e)));
            o.$dots = t.appendTo(o.options.appendDots), o.$dots.find("li").first().addClass("slick-active")
        }
    }, e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
            i(t).attr("data-slick-index", e).data("originalStyling", i(t).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? i('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), i("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, e.prototype.buildRows = function() {
        var i, e, t, o, s, n, r, l = this;
        if (o = document.createDocumentFragment(), n = l.$slider.children(), l.options.rows > 1) {
            for (r = l.options.slidesPerRow * l.options.rows, s = Math.ceil(n.length / r), i = 0; i < s; i++) {
                var d = document.createElement("div");
                for (e = 0; e < l.options.rows; e++) {
                    var a = document.createElement("div");
                    for (t = 0; t < l.options.slidesPerRow; t++) {
                        var c = i * r + (e * l.options.slidesPerRow + t);
                        n.get(c) && a.appendChild(n.get(c))
                    }
                    d.appendChild(a)
                }
                o.appendChild(d)
            }
            l.$slider.empty().append(o), l.$slider.children().children().children().css({
                width: 100 / l.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, e.prototype.checkResponsive = function(e, t) {
        var o, s, n, r = this,
            l = !1,
            d = r.$slider.width(),
            a = window.innerWidth || i(window).width();
        if ("window" === r.respondTo ? n = a : "slider" === r.respondTo ? n = d : "min" === r.respondTo && (n = Math.min(a, d)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
            s = null;
            for (o in r.breakpoints) r.breakpoints.hasOwnProperty(o) && (!1 === r.originalSettings.mobileFirst ? n < r.breakpoints[o] && (s = r.breakpoints[o]) : n > r.breakpoints[o] && (s = r.breakpoints[o]));
            null !== s ? null !== r.activeBreakpoint ? (s !== r.activeBreakpoint || t) && (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : (r.activeBreakpoint = s, "unslick" === r.breakpointSettings[s] ? r.unslick(s) : (r.options = i.extend({}, r.originalSettings, r.breakpointSettings[s]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), l = s) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), l = s), e || !1 === l || r.$slider.trigger("breakpoint", [r, l])
        }
    }, e.prototype.changeSlide = function(e, t) {
        var o, s, n, r = this,
            l = i(e.currentTarget);
        switch (l.is("a") && e.preventDefault(), l.is("li") || (l = l.closest("li")), n = r.slideCount % r.options.slidesToScroll != 0, o = n ? 0 : (r.slideCount - r.currentSlide) % r.options.slidesToScroll, e.data.message) {
            case "previous":
                s = 0 === o ? r.options.slidesToScroll : r.options.slidesToShow - o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide - s, !1, t);
                break;
            case "next":
                s = 0 === o ? r.options.slidesToScroll : o, r.slideCount > r.options.slidesToShow && r.slideHandler(r.currentSlide + s, !1, t);
                break;
            case "index":
                var d = 0 === e.data.index ? 0 : e.data.index || l.index() * r.options.slidesToScroll;
                r.slideHandler(r.checkNavigable(d), !1, t), l.children().trigger("focus");
                break;
            default:
                return
        }
    }, e.prototype.checkNavigable = function(i) {
        var e, t;
        if (e = this.getNavigableIndexes(), t = 0, i > e[e.length - 1]) i = e[e.length - 1];
        else
            for (var o in e) {
                if (i < e[o]) {
                    i = t;
                    break
                }
                t = e[o]
            }
        return i
    }, e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (i("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", i.proxy(e.interrupt, e, !0)).off("mouseleave.slick", i.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), i(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().off("click.slick", e.selectHandler), i(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), i(window).off("resize.slick.slick-" + e.instanceUid, e.resize), i("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), i(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, e.prototype.cleanUpSlideEvents = function() {
        var e = this;
        e.$list.off("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.cleanUpRows = function() {
        var i, e = this;
        e.options.rows > 1 && ((i = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(i))
    }, e.prototype.clickHandler = function(i) {
        !1 === this.shouldClick && (i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault())
    }, e.prototype.destroy = function(e) {
        var t = this;
        t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), i(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
            i(this).attr("style", i(this).data("originalStyling"))
        }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
    }, e.prototype.disableTransition = function(i) {
        var e = this,
            t = {};
        t[e.transitionType] = "", !1 === e.options.fade ? e.$slideTrack.css(t) : e.$slides.eq(i).css(t)
    }, e.prototype.fadeSlide = function(i, e) {
        var t = this;
        !1 === t.cssTransitions ? (t.$slides.eq(i).css({
            zIndex: t.options.zIndex
        }), t.$slides.eq(i).animate({
            opacity: 1
        }, t.options.speed, t.options.easing, e)) : (t.applyTransition(i), t.$slides.eq(i).css({
            opacity: 1,
            zIndex: t.options.zIndex
        }), e && setTimeout(function() {
            t.disableTransition(i), e.call()
        }, t.options.speed))
    }, e.prototype.fadeSlideOut = function(i) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(i).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(i), e.$slides.eq(i).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, e.prototype.filterSlides = e.prototype.slickFilter = function(i) {
        var e = this;
        null !== i && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(i).appendTo(e.$slideTrack), e.reinit())
    }, e.prototype.focusHandler = function() {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function(t) {
            t.stopImmediatePropagation();
            var o = i(this);
            setTimeout(function() {
                e.options.pauseOnFocus && (e.focussed = o.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        return this.currentSlide
    }, e.prototype.getDotCount = function() {
        var i = this,
            e = 0,
            t = 0,
            o = 0;
        if (!0 === i.options.infinite)
            if (i.slideCount <= i.options.slidesToShow) ++o;
            else
                for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else if (!0 === i.options.centerMode) o = i.slideCount;
        else if (i.options.asNavFor)
            for (; e < i.slideCount;) ++o, e = t + i.options.slidesToScroll, t += i.options.slidesToScroll <= i.options.slidesToShow ? i.options.slidesToScroll : i.options.slidesToShow;
        else o = 1 + Math.ceil((i.slideCount - i.options.slidesToShow) / i.options.slidesToScroll);
        return o - 1
    }, e.prototype.getLeft = function(i) {
        var e, t, o, s, n = this,
            r = 0;
        return n.slideOffset = 0, t = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, s = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? s = -1.5 : 1 === n.options.slidesToShow && (s = -2)), r = t * n.options.slidesToShow * s), n.slideCount % n.options.slidesToScroll != 0 && i + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (i > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (i - n.slideCount)) * n.slideWidth * -1, r = (n.options.slidesToShow - (i - n.slideCount)) * t * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, r = n.slideCount % n.options.slidesToScroll * t * -1))) : i + n.options.slidesToShow > n.slideCount && (n.slideOffset = (i + n.options.slidesToShow - n.slideCount) * n.slideWidth, r = (i + n.options.slidesToShow - n.slideCount) * t), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, r = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? i * n.slideWidth * -1 + n.slideOffset : i * t * -1 + r, !0 === n.options.variableWidth && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, !0 === n.options.centerMode && (o = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(i) : n.$slideTrack.children(".slick-slide").eq(i + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? o[0] ? -1 * (n.$slideTrack.width() - o[0].offsetLeft - o.width()) : 0 : o[0] ? -1 * o[0].offsetLeft : 0, e += (n.$list.width() - o.outerWidth()) / 2)), e
    }, e.prototype.getOption = e.prototype.slickGetOption = function(i) {
        return this.options[i]
    }, e.prototype.getNavigableIndexes = function() {
        var i, e = this,
            t = 0,
            o = 0,
            s = [];
        for (!1 === e.options.infinite ? i = e.slideCount : (t = -1 * e.options.slidesToScroll, o = -1 * e.options.slidesToScroll, i = 2 * e.slideCount); t < i;) s.push(t), t = o + e.options.slidesToScroll, o += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return s
    }, e.prototype.getSlick = function() {
        return this
    }, e.prototype.getSlideCount = function() {
        var e, t, o = this;
        return t = !0 === o.options.centerMode ? o.slideWidth * Math.floor(o.options.slidesToShow / 2) : 0, !0 === o.options.swipeToSlide ? (o.$slideTrack.find(".slick-slide").each(function(s, n) {
            if (n.offsetLeft - t + i(n).outerWidth() / 2 > -1 * o.swipeLeft) return e = n, !1
        }), Math.abs(i(e).attr("data-slick-index") - o.currentSlide) || 1) : o.options.slidesToScroll
    }, e.prototype.goTo = e.prototype.slickGoTo = function(i, e) {
        this.changeSlide({
            data: {
                message: "index",
                index: parseInt(i)
            }
        }, e)
    }, e.prototype.init = function(e) {
        var t = this;
        i(t.$slider).hasClass("slick-initialized") || (i(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
    }, e.prototype.initADA = function() {
        var e = this,
            t = Math.ceil(e.slideCount / e.options.slidesToShow),
            o = e.getNavigableIndexes().filter(function(i) {
                return i >= 0 && i < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({
            tabindex: "-1"
        }), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t) {
            var s = o.indexOf(t);
            i(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + t,
                tabindex: -1
            }), -1 !== s && i(this).attr({
                "aria-describedby": "slick-slide-control" + e.instanceUid + s
            })
        }), e.$dots.attr("role", "tablist").find("li").each(function(s) {
            var n = o[s];
            i(this).attr({
                role: "presentation"
            }), i(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + s,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": s + 1 + " of " + t,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({
            "aria-selected": "true",
            tabindex: "0"
        }).end());
        for (var s = e.currentSlide, n = s + e.options.slidesToShow; s < n; s++) e.$slides.eq(s).attr("tabindex", 0);
        e.activateADA()
    }, e.prototype.initArrowEvents = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.off("click.slick").on("click.slick", {
            message: "previous"
        }, i.changeSlide), i.$nextArrow.off("click.slick").on("click.slick", {
            message: "next"
        }, i.changeSlide), !0 === i.options.accessibility && (i.$prevArrow.on("keydown.slick", i.keyHandler), i.$nextArrow.on("keydown.slick", i.keyHandler)))
    }, e.prototype.initDotEvents = function() {
        var e = this;
        !0 === e.options.dots && (i("li", e.$dots).on("click.slick", {
            message: "index"
        }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && i("li", e.$dots).on("mouseenter.slick", i.proxy(e.interrupt, e, !0)).on("mouseleave.slick", i.proxy(e.interrupt, e, !1))
    }, e.prototype.initSlideEvents = function() {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", i.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", i.proxy(e.interrupt, e, !1)))
    }, e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
            action: "start"
        }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
            action: "move"
        }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
            action: "end"
        }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), i(document).on(e.visibilityChange, i.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), i(window).on("orientationchange.slick.slick-" + e.instanceUid, i.proxy(e.orientationChange, e)), i(window).on("resize.slick.slick-" + e.instanceUid, i.proxy(e.resize, e)), i("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), i(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), i(e.setPosition)
    }, e.prototype.initUI = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.show(), i.$nextArrow.show()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.show()
    }, e.prototype.keyHandler = function(i) {
        var e = this;
        i.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === i.keyCode && !0 === e.options.accessibility ? e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "next" : "previous"
            }
        }) : 39 === i.keyCode && !0 === e.options.accessibility && e.changeSlide({
            data: {
                message: !0 === e.options.rtl ? "previous" : "next"
            }
        }))
    }, e.prototype.lazyLoad = function() {
        function e(e) {
            i("img[data-lazy]", e).each(function() {
                var e = i(this),
                    t = i(this).attr("data-lazy"),
                    o = i(this).attr("data-srcset"),
                    s = i(this).attr("data-sizes") || n.$slider.attr("data-sizes"),
                    r = document.createElement("img");
                r.onload = function() {
                    e.animate({
                        opacity: 0
                    }, 100, function() {
                        o && (e.attr("srcset", o), s && e.attr("sizes", s)), e.attr("src", t).animate({
                            opacity: 1
                        }, 200, function() {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, t])
                    })
                }, r.onerror = function() {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
                }, r.src = t
            })
        }
        var t, o, s, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? s = (o = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (o = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), s = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (o = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, s = Math.ceil(o + n.options.slidesToShow), !0 === n.options.fade && (o > 0 && o--, s <= n.slideCount && s++)), t = n.$slider.find(".slick-slide").slice(o, s), "anticipated" === n.options.lazyLoad)
            for (var r = o - 1, l = s, d = n.$slider.find(".slick-slide"), a = 0; a < n.options.slidesToScroll; a++) r < 0 && (r = n.slideCount - 1), t = (t = t.add(d.eq(r))).add(d.eq(l)), r--, l++;
        e(t), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, e.prototype.loadSlider = function() {
        var i = this;
        i.setPosition(), i.$slideTrack.css({
            opacity: 1
        }), i.$slider.removeClass("slick-loading"), i.initUI(), "progressive" === i.options.lazyLoad && i.progressiveLazyLoad()
    }, e.prototype.next = e.prototype.slickNext = function() {
        this.changeSlide({
            data: {
                message: "next"
            }
        })
    }, e.prototype.orientationChange = function() {
        var i = this;
        i.checkResponsive(), i.setPosition()
    }, e.prototype.pause = e.prototype.slickPause = function() {
        var i = this;
        i.autoPlayClear(), i.paused = !0
    }, e.prototype.play = e.prototype.slickPlay = function() {
        var i = this;
        i.autoPlay(), i.options.autoplay = !0, i.paused = !1, i.focussed = !1, i.interrupted = !1
    }, e.prototype.postSlide = function(e) {
        var t = this;
        t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.slideCount > t.options.slidesToShow && t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && (t.initADA(), t.options.focusOnChange && i(t.$slides.get(t.currentSlide)).attr("tabindex", 0).focus()))
    }, e.prototype.prev = e.prototype.slickPrev = function() {
        this.changeSlide({
            data: {
                message: "previous"
            }
        })
    }, e.prototype.preventDefault = function(i) {
        i.preventDefault()
    }, e.prototype.progressiveLazyLoad = function(e) {
        e = e || 1;
        var t, o, s, n, r, l = this,
            d = i("img[data-lazy]", l.$slider);
        d.length ? (t = d.first(), o = t.attr("data-lazy"), s = t.attr("data-srcset"), n = t.attr("data-sizes") || l.$slider.attr("data-sizes"), (r = document.createElement("img")).onload = function() {
            s && (t.attr("srcset", s), n && t.attr("sizes", n)), t.attr("src", o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === l.options.adaptiveHeight && l.setPosition(), l.$slider.trigger("lazyLoaded", [l, t, o]), l.progressiveLazyLoad()
        }, r.onerror = function() {
            e < 3 ? setTimeout(function() {
                l.progressiveLazyLoad(e + 1)
            }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), l.$slider.trigger("lazyLoadError", [l, t, o]), l.progressiveLazyLoad())
        }, r.src = o) : l.$slider.trigger("allImagesLoaded", [l])
    }, e.prototype.refresh = function(e) {
        var t, o, s = this;
        o = s.slideCount - s.options.slidesToShow, !s.options.infinite && s.currentSlide > o && (s.currentSlide = o), s.slideCount <= s.options.slidesToShow && (s.currentSlide = 0), t = s.currentSlide, s.destroy(!0), i.extend(s, s.initials, {
            currentSlide: t
        }), s.init(), e || s.changeSlide({
            data: {
                message: "index",
                index: t
            }
        }, !1)
    }, e.prototype.registerBreakpoints = function() {
        var e, t, o, s = this,
            n = s.options.responsive || null;
        if ("array" === i.type(n) && n.length) {
            s.respondTo = s.options.respondTo || "window";
            for (e in n)
                if (o = s.breakpoints.length - 1, n.hasOwnProperty(e)) {
                    for (t = n[e].breakpoint; o >= 0;) s.breakpoints[o] && s.breakpoints[o] === t && s.breakpoints.splice(o, 1), o--;
                    s.breakpoints.push(t), s.breakpointSettings[t] = n[e].settings
                }
            s.breakpoints.sort(function(i, e) {
                return s.options.mobileFirst ? i - e : e - i
            })
        }
    }, e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && i(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, e.prototype.resize = function() {
        var e = this;
        i(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
            e.windowWidth = i(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, e.prototype.removeSlide = e.prototype.slickRemove = function(i, e, t) {
        var o = this;
        if (i = "boolean" == typeof i ? !0 === (e = i) ? 0 : o.slideCount - 1 : !0 === e ? --i : i, o.slideCount < 1 || i < 0 || i > o.slideCount - 1) return !1;
        o.unload(), !0 === t ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(i).remove(), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slidesCache = o.$slides, o.reinit()
    }, e.prototype.setCSS = function(i) {
        var e, t, o = this,
            s = {};
        !0 === o.options.rtl && (i = -i), e = "left" == o.positionProp ? Math.ceil(i) + "px" : "0px", t = "top" == o.positionProp ? Math.ceil(i) + "px" : "0px", s[o.positionProp] = i, !1 === o.transformsEnabled ? o.$slideTrack.css(s) : (s = {}, !1 === o.cssTransitions ? (s[o.animType] = "translate(" + e + ", " + t + ")", o.$slideTrack.css(s)) : (s[o.animType] = "translate3d(" + e + ", " + t + ", 0px)", o.$slideTrack.css(s)))
    }, e.prototype.setDimensions = function() {
        var i = this;
        !1 === i.options.vertical ? !0 === i.options.centerMode && i.$list.css({
            padding: "0px " + i.options.centerPadding
        }) : (i.$list.height(i.$slides.first().outerHeight(!0) * i.options.slidesToShow), !0 === i.options.centerMode && i.$list.css({
            padding: i.options.centerPadding + " 0px"
        })), i.listWidth = i.$list.width(), i.listHeight = i.$list.height(), !1 === i.options.vertical && !1 === i.options.variableWidth ? (i.slideWidth = Math.ceil(i.listWidth / i.options.slidesToShow), i.$slideTrack.width(Math.ceil(i.slideWidth * i.$slideTrack.children(".slick-slide").length))) : !0 === i.options.variableWidth ? i.$slideTrack.width(5e3 * i.slideCount) : (i.slideWidth = Math.ceil(i.listWidth), i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0) * i.$slideTrack.children(".slick-slide").length)));
        var e = i.$slides.first().outerWidth(!0) - i.$slides.first().width();
        !1 === i.options.variableWidth && i.$slideTrack.children(".slick-slide").width(i.slideWidth - e)
    }, e.prototype.setFade = function() {
        var e, t = this;
        t.$slides.each(function(o, s) {
            e = t.slideWidth * o * -1, !0 === t.options.rtl ? i(s).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            }) : i(s).css({
                position: "relative",
                left: e,
                top: 0,
                zIndex: t.options.zIndex - 2,
                opacity: 0
            })
        }), t.$slides.eq(t.currentSlide).css({
            zIndex: t.options.zIndex - 1,
            opacity: 1
        })
    }, e.prototype.setHeight = function() {
        var i = this;
        if (1 === i.options.slidesToShow && !0 === i.options.adaptiveHeight && !1 === i.options.vertical) {
            var e = i.$slides.eq(i.currentSlide).outerHeight(!0);
            i.$list.css("height", e)
        }
    }, e.prototype.setOption = e.prototype.slickSetOption = function() {
        var e, t, o, s, n, r = this,
            l = !1;
        if ("object" === i.type(arguments[0]) ? (o = arguments[0], l = arguments[1], n = "multiple") : "string" === i.type(arguments[0]) && (o = arguments[0], s = arguments[1], l = arguments[2], "responsive" === arguments[0] && "array" === i.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) r.options[o] = s;
        else if ("multiple" === n) i.each(o, function(i, e) {
            r.options[i] = e
        });
        else if ("responsive" === n)
            for (t in s)
                if ("array" !== i.type(r.options.responsive)) r.options.responsive = [s[t]];
                else {
                    for (e = r.options.responsive.length - 1; e >= 0;) r.options.responsive[e].breakpoint === s[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                    r.options.responsive.push(s[t])
                }
        l && (r.unload(), r.reinit())
    }, e.prototype.setPosition = function() {
        var i = this;
        i.setDimensions(), i.setHeight(), !1 === i.options.fade ? i.setCSS(i.getLeft(i.currentSlide)) : i.setFade(), i.$slider.trigger("setPosition", [i])
    }, e.prototype.setProps = function() {
        var i = this,
            e = document.body.style;
        i.positionProp = !0 === i.options.vertical ? "top" : "left", "top" === i.positionProp ? i.$slider.addClass("slick-vertical") : i.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === i.options.useCSS && (i.cssTransitions = !0), i.options.fade && ("number" == typeof i.options.zIndex ? i.options.zIndex < 3 && (i.options.zIndex = 3) : i.options.zIndex = i.defaults.zIndex), void 0 !== e.OTransform && (i.animType = "OTransform", i.transformType = "-o-transform", i.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.MozTransform && (i.animType = "MozTransform", i.transformType = "-moz-transform", i.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (i.animType = !1)), void 0 !== e.webkitTransform && (i.animType = "webkitTransform", i.transformType = "-webkit-transform", i.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (i.animType = !1)), void 0 !== e.msTransform && (i.animType = "msTransform", i.transformType = "-ms-transform", i.transitionType = "msTransition", void 0 === e.msTransform && (i.animType = !1)), void 0 !== e.transform && !1 !== i.animType && (i.animType = "transform", i.transformType = "transform", i.transitionType = "transition"), i.transformsEnabled = i.options.useTransform && null !== i.animType && !1 !== i.animType
    }, e.prototype.setSlideClasses = function(i) {
        var e, t, o, s, n = this;
        if (t = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(i).addClass("slick-current"), !0 === n.options.centerMode) {
            var r = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (i >= e && i <= n.slideCount - 1 - e ? n.$slides.slice(i - e + r, i + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (o = n.options.slidesToShow + i, t.slice(o - e + 1 + r, o + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === i ? t.eq(t.length - 1 - n.options.slidesToShow).addClass("slick-center") : i === n.slideCount - 1 && t.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(i).addClass("slick-center")
        } else i >= 0 && i <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(i, i + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : t.length <= n.options.slidesToShow ? t.addClass("slick-active").attr("aria-hidden", "false") : (s = n.slideCount % n.options.slidesToShow, o = !0 === n.options.infinite ? n.options.slidesToShow + i : i, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - i < n.options.slidesToShow ? t.slice(o - (n.options.slidesToShow - s), o + s).addClass("slick-active").attr("aria-hidden", "false") : t.slice(o, o + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, e.prototype.setupInfinite = function() {
        var e, t, o, s = this;
        if (!0 === s.options.fade && (s.options.centerMode = !1), !0 === s.options.infinite && !1 === s.options.fade && (t = null, s.slideCount > s.options.slidesToShow)) {
            for (o = !0 === s.options.centerMode ? s.options.slidesToShow + 1 : s.options.slidesToShow, e = s.slideCount; e > s.slideCount - o; e -= 1) t = e - 1, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < o + s.slideCount; e += 1) t = e, i(s.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");
            s.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
                i(this).attr("id", "")
            })
        }
    }, e.prototype.interrupt = function(i) {
        var e = this;
        i || e.autoPlay(), e.interrupted = i
    }, e.prototype.selectHandler = function(e) {
        var t = this,
            o = i(e.target).is(".slick-slide") ? i(e.target) : i(e.target).parents(".slick-slide"),
            s = parseInt(o.attr("data-slick-index"));
        s || (s = 0), t.slideCount <= t.options.slidesToShow ? t.slideHandler(s, !1, !0) : t.slideHandler(s)
    }, e.prototype.slideHandler = function(i, e, t) {
        var o, s, n, r, l, d = null,
            a = this;
        if (e = e || !1, !(!0 === a.animating && !0 === a.options.waitForAnimate || !0 === a.options.fade && a.currentSlide === i))
            if (!1 === e && a.asNavFor(i), o = i, d = a.getLeft(o), r = a.getLeft(a.currentSlide), a.currentLeft = null === a.swipeLeft ? r : a.swipeLeft, !1 === a.options.infinite && !1 === a.options.centerMode && (i < 0 || i > a.getDotCount() * a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
                a.postSlide(o)
            }) : a.postSlide(o));
            else if (!1 === a.options.infinite && !0 === a.options.centerMode && (i < 0 || i > a.slideCount - a.options.slidesToScroll)) !1 === a.options.fade && (o = a.currentSlide, !0 !== t ? a.animateSlide(r, function() {
            a.postSlide(o)
        }) : a.postSlide(o));
        else {
            if (a.options.autoplay && clearInterval(a.autoPlayTimer), s = o < 0 ? a.slideCount % a.options.slidesToScroll != 0 ? a.slideCount - a.slideCount % a.options.slidesToScroll : a.slideCount + o : o >= a.slideCount ? a.slideCount % a.options.slidesToScroll != 0 ? 0 : o - a.slideCount : o, a.animating = !0, a.$slider.trigger("beforeChange", [a, a.currentSlide, s]), n = a.currentSlide, a.currentSlide = s, a.setSlideClasses(a.currentSlide), a.options.asNavFor && (l = (l = a.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(a.currentSlide), a.updateDots(), a.updateArrows(), !0 === a.options.fade) return !0 !== t ? (a.fadeSlideOut(n), a.fadeSlide(s, function() {
                a.postSlide(s)
            })) : a.postSlide(s), void a.animateHeight();
            !0 !== t ? a.animateSlide(d, function() {
                a.postSlide(s)
            }) : a.postSlide(s)
        }
    }, e.prototype.startLoad = function() {
        var i = this;
        !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && (i.$prevArrow.hide(), i.$nextArrow.hide()), !0 === i.options.dots && i.slideCount > i.options.slidesToShow && i.$dots.hide(), i.$slider.addClass("slick-loading")
    }, e.prototype.swipeDirection = function() {
        var i, e, t, o, s = this;
        return i = s.touchObject.startX - s.touchObject.curX, e = s.touchObject.startY - s.touchObject.curY, t = Math.atan2(e, i), (o = Math.round(180 * t / Math.PI)) < 0 && (o = 360 - Math.abs(o)), o <= 45 && o >= 0 ? !1 === s.options.rtl ? "left" : "right" : o <= 360 && o >= 315 ? !1 === s.options.rtl ? "left" : "right" : o >= 135 && o <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? o >= 35 && o <= 135 ? "down" : "up" : "vertical"
    }, e.prototype.swipeEnd = function(i) {
        var e, t, o = this;
        if (o.dragging = !1, o.swiping = !1, o.scrolling) return o.scrolling = !1, !1;
        if (o.interrupted = !1, o.shouldClick = !(o.touchObject.swipeLength > 10), void 0 === o.touchObject.curX) return !1;
        if (!0 === o.touchObject.edgeHit && o.$slider.trigger("edge", [o, o.swipeDirection()]), o.touchObject.swipeLength >= o.touchObject.minSwipe) {
            switch (t = o.swipeDirection()) {
                case "left":
                case "down":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide + o.getSlideCount()) : o.currentSlide + o.getSlideCount(), o.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = o.options.swipeToSlide ? o.checkNavigable(o.currentSlide - o.getSlideCount()) : o.currentSlide - o.getSlideCount(), o.currentDirection = 1
            }
            "vertical" != t && (o.slideHandler(e), o.touchObject = {}, o.$slider.trigger("swipe", [o, t]))
        } else o.touchObject.startX !== o.touchObject.curX && (o.slideHandler(o.currentSlide), o.touchObject = {})
    }, e.prototype.swipeHandler = function(i) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== i.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = i.originalEvent && void 0 !== i.originalEvent.touches ? i.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), i.data.action) {
            case "start":
                e.swipeStart(i);
                break;
            case "move":
                e.swipeMove(i);
                break;
            case "end":
                e.swipeEnd(i)
        }
    }, e.prototype.swipeMove = function(i) {
        var e, t, o, s, n, r, l = this;
        return n = void 0 !== i.originalEvent ? i.originalEvent.touches : null, !(!l.dragging || l.scrolling || n && 1 !== n.length) && (e = l.getLeft(l.currentSlide), l.touchObject.curX = void 0 !== n ? n[0].pageX : i.clientX, l.touchObject.curY = void 0 !== n ? n[0].pageY : i.clientY, l.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(l.touchObject.curX - l.touchObject.startX, 2))), r = Math.round(Math.sqrt(Math.pow(l.touchObject.curY - l.touchObject.startY, 2))), !l.options.verticalSwiping && !l.swiping && r > 4 ? (l.scrolling = !0, !1) : (!0 === l.options.verticalSwiping && (l.touchObject.swipeLength = r), t = l.swipeDirection(), void 0 !== i.originalEvent && l.touchObject.swipeLength > 4 && (l.swiping = !0, i.preventDefault()), s = (!1 === l.options.rtl ? 1 : -1) * (l.touchObject.curX > l.touchObject.startX ? 1 : -1), !0 === l.options.verticalSwiping && (s = l.touchObject.curY > l.touchObject.startY ? 1 : -1), o = l.touchObject.swipeLength, l.touchObject.edgeHit = !1, !1 === l.options.infinite && (0 === l.currentSlide && "right" === t || l.currentSlide >= l.getDotCount() && "left" === t) && (o = l.touchObject.swipeLength * l.options.edgeFriction, l.touchObject.edgeHit = !0), !1 === l.options.vertical ? l.swipeLeft = e + o * s : l.swipeLeft = e + o * (l.$list.height() / l.listWidth) * s, !0 === l.options.verticalSwiping && (l.swipeLeft = e + o * s), !0 !== l.options.fade && !1 !== l.options.touchMove && (!0 === l.animating ? (l.swipeLeft = null, !1) : void l.setCSS(l.swipeLeft))))
    }, e.prototype.swipeStart = function(i) {
        var e, t = this;
        if (t.interrupted = !0, 1 !== t.touchObject.fingerCount || t.slideCount <= t.options.slidesToShow) return t.touchObject = {}, !1;
        void 0 !== i.originalEvent && void 0 !== i.originalEvent.touches && (e = i.originalEvent.touches[0]), t.touchObject.startX = t.touchObject.curX = void 0 !== e ? e.pageX : i.clientX, t.touchObject.startY = t.touchObject.curY = void 0 !== e ? e.pageY : i.clientY, t.dragging = !0
    }, e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var i = this;
        null !== i.$slidesCache && (i.unload(), i.$slideTrack.children(this.options.slide).detach(), i.$slidesCache.appendTo(i.$slideTrack), i.reinit())
    }, e.prototype.unload = function() {
        var e = this;
        i(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, e.prototype.unslick = function(i) {
        var e = this;
        e.$slider.trigger("unslick", [e, i]), e.destroy()
    }, e.prototype.updateArrows = function() {
        var i = this;
        Math.floor(i.options.slidesToShow / 2), !0 === i.options.arrows && i.slideCount > i.options.slidesToShow && !i.options.infinite && (i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === i.currentSlide ? (i.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - i.options.slidesToShow && !1 === i.options.centerMode ? (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : i.currentSlide >= i.slideCount - 1 && !0 === i.options.centerMode && (i.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, e.prototype.updateDots = function() {
        var i = this;
        null !== i.$dots && (i.$dots.find("li").removeClass("slick-active").end(), i.$dots.find("li").eq(Math.floor(i.currentSlide / i.options.slidesToScroll)).addClass("slick-active"))
    }, e.prototype.visibility = function() {
        var i = this;
        i.options.autoplay && (document[i.hidden] ? i.interrupted = !0 : i.interrupted = !1)
    }, i.fn.slick = function() {
        var i, t, o = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            r = o.length;
        for (i = 0; i < r; i++)
            if ("object" == typeof s || void 0 === s ? o[i].slick = new e(o[i], s) : t = o[i].slick[s].apply(o[i].slick, n), void 0 !== t) return t;
        return o
    }
});




/*-----------------------------------
Magnific Popup - v1.1.0 - 2016-02-20
---------------------------------- */
! function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function(a) {
    var b, c, d, e, f, g, h = "Close",
        i = "BeforeClose",
        j = "AfterClose",
        k = "BeforeAppend",
        l = "MarkupParse",
        m = "Open",
        n = "Change",
        o = "mfp",
        p = "." + o,
        q = "mfp-ready",
        r = "mfp-removing",
        s = "mfp-prevent-close",
        t = function() {},
        u = !!window.jQuery,
        v = a(window),
        w = function(a, c) {
            b.ev.on(o + a + p, c)
        },
        x = function(b, c, d, e) {
            var f = document.createElement("div");
            return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
        },
        y = function(c, d) {
            b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
        },
        z = function(c) {
            return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
        },
        A = function() {
            a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
        },
        B = function() {
            var a = document.createElement("p").style,
                b = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== a.transition) return !0;
            for (; b.length;)
                if (b.pop() + "Transition" in a) return !0;
            return !1
        };
    t.prototype = {
        constructor: t,
        init: function() {
            var c = navigator.appVersion;
            b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
        },
        open: function(c) {
            var e;
            if (c.isObj === !1) {
                b.items = c.items.toArray(), b.index = 0;
                var g, h = c.items;
                for (e = 0; e < h.length; e++)
                    if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
                        b.index = e;
                        break
                    }
            } else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
            if (b.isOpen) return void b.updateItemHTML();
            b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
                b.close()
            }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a) {
                b._checkIfClose(a.target) && b.close()
            }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
            var i = a.magnificPopup.modules;
            for (e = 0; e < i.length; e++) {
                var j = i[e];
                j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
            }
            y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a, b, c, d) {
                c.close_replaceWith = z(d.type)
            }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
                overflow: b.st.overflowY,
                overflowX: "hidden",
                overflowY: b.st.overflowY
            }) : b.wrap.css({
                top: v.scrollTop(),
                position: "absolute"
            }), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
                height: d.height(),
                position: "absolute"
            }), b.st.enableEscapeKey && d.on("keyup" + p, function(a) {
                27 === a.keyCode && b.close()
            }), v.on("resize" + p, function() {
                b.updateSize()
            }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
            var k = b.wH = v.height(),
                n = {};
            if (b.fixedContentPos && b._hasScrollBar(k)) {
                var o = b._getScrollbarSize();
                o && (n.marginRight = o)
            }
            b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
            var r = b.st.mainClass;
            return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
                b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
            }, 16), b.isOpen = !0, b.updateSize(k), y(m), c
        },
        close: function() {
            b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
                b._close()
            }, b.st.removalDelay)) : b._close())
        },
        _close: function() {
            y(h);
            var c = r + " " + q + " ";
            if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
                var e = {
                    marginRight: ""
                };
                b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
            }
            d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
        },
        updateSize: function(a) {
            if (b.isIOS) {
                var c = document.documentElement.clientWidth / window.innerWidth,
                    d = window.innerHeight * c;
                b.wrap.css("height", d), b.wH = d
            } else b.wH = a || v.height();
            b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
        },
        updateItemHTML: function() {
            var c = b.items[b.index];
            b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
            var d = c.type;
            if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
                var f = b.st[d] ? b.st[d].markup : !1;
                y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
            }
            e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
            var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
            b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
        },
        appendContent: function(a, c) {
            b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
        },
        parseEl: function(c) {
            var d, e = b.items[c];
            if (e.tagName ? e = {
                    el: a(e)
                } : (d = e.type, e = {
                    data: e,
                    src: e.src
                }), e.el) {
                for (var f = b.types, g = 0; g < f.length; g++)
                    if (e.el.hasClass("mfp-" + f[g])) {
                        d = f[g];
                        break
                    }
                e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
            }
            return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
        },
        addGroup: function(a, c) {
            var d = function(d) {
                d.mfpEl = this, b._openClick(d, a, c)
            };
            c || (c = {});
            var e = "click.magnificPopup";
            c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
        },
        _openClick: function(c, d, e) {
            var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
            if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
                var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
                if (g)
                    if (a.isFunction(g)) {
                        if (!g.call(b)) return !0
                    } else if (v.width() < g) return !0;
                c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
            }
        },
        updateStatus: function(a, d) {
            if (b.preloader) {
                c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
                var e = {
                    status: a,
                    text: d
                };
                y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function(a) {
                    a.stopImmediatePropagation()
                }), b.container.addClass("mfp-s-" + a), c = a
            }
        },
        _checkIfClose: function(c) {
            if (!a(c).hasClass(s)) {
                var d = b.st.closeOnContentClick,
                    e = b.st.closeOnBgClick;
                if (d && e) return !0;
                if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
                if (c === b.content[0] || a.contains(b.content[0], c)) {
                    if (d) return !0
                } else if (e && a.contains(document, c)) return !0;
                return !1
            }
        },
        _addClassToMFP: function(a) {
            b.bgOverlay.addClass(a), b.wrap.addClass(a)
        },
        _removeClassFromMFP: function(a) {
            this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
        },
        _hasScrollBar: function(a) {
            return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
        },
        _setFocus: function() {
            (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
        },
        _onFocusIn: function(c) {
            return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
        },
        _parseMarkup: function(b, c, d) {
            var e;
            d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function(c, d) {
                if (void 0 === d || d === !1) return !0;
                if (e = c.split("_"), e.length > 1) {
                    var f = b.find(p + "-" + e[0]);
                    if (f.length > 0) {
                        var g = e[1];
                        "replaceWith" === g ? f[0] !== d[0] && f.replaceWith(d) : "img" === g ? f.is("img") ? f.attr("src", d) : f.replaceWith(a("<img>").attr("src", d).attr("class", f.attr("class"))) : f.attr(e[1], d)
                    }
                } else b.find(p + "-" + c).html(d)
            })
        },
        _getScrollbarSize: function() {
            if (void 0 === b.scrollbarSize) {
                var a = document.createElement("div");
                a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
            }
            return b.scrollbarSize
        }
    }, a.magnificPopup = {
        instance: null,
        proto: t.prototype,
        modules: [],
        open: function(b, c) {
            return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
        },
        close: function() {
            return a.magnificPopup.instance && a.magnificPopup.instance.close()
        },
        registerModule: function(b, c) {
            c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, a.fn.magnificPopup = function(c) {
        A();
        var d = a(this);
        if ("string" == typeof c)
            if ("open" === c) {
                var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
                    g = parseInt(arguments[1], 10) || 0;
                f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
                    mfpEl: e
                }, d, f)
            } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
        else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
        return d
    };
    var C, D, E, F = "inline",
        G = function() {
            E && (D.after(E.addClass(C)).detach(), E = null)
        };
    a.magnificPopup.registerModule(F, {
        options: {
            hiddenClass: "hide",
            markup: "",
            tNotFound: "Content not found"
        },
        proto: {
            initInline: function() {
                b.types.push(F), w(h + "." + F, function() {
                    G()
                })
            },
            getInline: function(c, d) {
                if (G(), c.src) {
                    var e = b.st.inline,
                        f = a(c.src);
                    if (f.length) {
                        var g = f[0].parentNode;
                        g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
                    } else b.updateStatus("error", e.tNotFound), f = a("<div>");
                    return c.inlineElement = f, f
                }
                return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
            }
        }
    });
    var H, I = "ajax",
        J = function() {
            H && a(document.body).removeClass(H)
        },
        K = function() {
            J(), b.req && b.req.abort()
        };
    a.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        },
        proto: {
            initAjax: function() {
                b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
            },
            getAjax: function(c) {
                H && a(document.body).addClass(H), b.updateStatus("loading");
                var d = a.extend({
                    url: c.src,
                    success: function(d, e, f) {
                        var g = {
                            data: d,
                            xhr: f
                        };
                        y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function() {
                            b.wrap.addClass(q)
                        }, 16), b.updateStatus("ready"), y("AjaxContentAdded")
                    },
                    error: function() {
                        J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
                    }
                }, b.st.ajax.settings);
                return b.req = a.ajax(d), ""
            }
        }
    });
    var L, M = function(c) {
        if (c.data && void 0 !== c.data.title) return c.data.title;
        var d = b.st.image.titleSrc;
        if (d) {
            if (a.isFunction(d)) return d.call(b, c);
            if (c.el) return c.el.attr(d) || ""
        }
        return ""
    };
    a.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        },
        proto: {
            initImage: function() {
                var c = b.st.image,
                    d = ".image";
                b.types.push("image"), w(m + d, function() {
                    "image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
                }), w(h + d, function() {
                    c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
                }), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
            },
            resizeImage: function() {
                var a = b.currItem;
                if (a && a.img && b.st.image.verticalFit) {
                    var c = 0;
                    b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
                }
            },
            _onImageHasSize: function(a) {
                a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
            },
            findImageSize: function(a) {
                var c = 0,
                    d = a.img[0],
                    e = function(f) {
                        L && clearInterval(L), L = setInterval(function() {
                            return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
                        }, f)
                    };
                e(1)
            },
            getImage: function(c, d) {
                var e = 0,
                    f = function() {
                        c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
                    },
                    g = function() {
                        c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
                    },
                    h = b.st.image,
                    i = d.find(".mfp-img");
                if (i.length) {
                    var j = document.createElement("img");
                    j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
                }
                return b._parseMarkup(d, {
                    title: M(c),
                    img_replaceWith: c.img
                }, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
            }
        }
    });
    var N, O = function() {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    a.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function(a) {
                return a.is("img") ? a : a.find("img")
            }
        },
        proto: {
            initZoom: function() {
                var a, c = b.st.zoom,
                    d = ".zoom";
                if (c.enabled && b.supportsTransition) {
                    var e, f, g = c.duration,
                        j = function(a) {
                            var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                                d = "all " + c.duration / 1e3 + "s " + c.easing,
                                e = {
                                    position: "fixed",
                                    zIndex: 9999,
                                    left: 0,
                                    top: 0,
                                    "-webkit-backface-visibility": "hidden"
                                },
                                f = "transition";
                            return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
                        },
                        k = function() {
                            b.content.css("visibility", "visible")
                        };
                    w("BuildControls" + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
                            f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function() {
                                f.css(b._getOffset(!0)), e = setTimeout(function() {
                                    k(), setTimeout(function() {
                                        f.remove(), a = f = null, y("ZoomAnimationEnded")
                                    }, 16)
                                }, g)
                            }, 16)
                        }
                    }), w(i + d, function() {
                        if (b._allowZoom()) {
                            if (clearTimeout(e), b.st.removalDelay = g, !a) {
                                if (a = b._getItemToZoom(), !a) return;
                                f = j(a)
                            }
                            f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function() {
                                f.css(b._getOffset())
                            }, 16)
                        }
                    }), w(h + d, function() {
                        b._allowZoom() && (k(), f && f.remove(), a = null)
                    })
                }
            },
            _allowZoom: function() {
                return "image" === b.currItem.type
            },
            _getItemToZoom: function() {
                return b.currItem.hasSize ? b.currItem.img : !1
            },
            _getOffset: function(c) {
                var d;
                d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
                var e = d.offset(),
                    f = parseInt(d.css("padding-top"), 10),
                    g = parseInt(d.css("padding-bottom"), 10);
                e.top -= a(window).scrollTop() - f;
                var h = {
                    width: d.width(),
                    height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
                };
                return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
            }
        }
    });
    var P = "iframe",
        Q = "//about:blank",
        R = function(a) {
            if (b.currTemplate[P]) {
                var c = b.currTemplate[P].find("iframe");
                c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
            }
        };
    a.magnificPopup.registerModule(P, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {
                    index: "youtube.com",
                    id: "v=",
                    src: "//www.youtube.com/embed/%id%?autoplay=1"
                },
                vimeo: {
                    index: "vimeo.com/",
                    id: "/",
                    src: "//player.vimeo.com/video/%id%?autoplay=1"
                },
                gmaps: {
                    index: "//maps.google.",
                    src: "%id%&output=embed"
                }
            }
        },
        proto: {
            initIframe: function() {
                b.types.push(P), w("BeforeChange", function(a, b, c) {
                    b !== c && (b === P ? R() : c === P && R(!0))
                }), w(h + "." + P, function() {
                    R()
                })
            },
            getIframe: function(c, d) {
                var e = c.src,
                    f = b.st.iframe;
                a.each(f.patterns, function() {
                    return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
                });
                var g = {};
                return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
            }
        }
    });
    var S = function(a) {
            var c = b.items.length;
            return a > c - 1 ? a - c : 0 > a ? c + a : a
        },
        T = function(a, b, c) {
            return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
        };
    a.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        },
        proto: {
            initGallery: function() {
                var c = b.st.gallery,
                    e = ".mfp-gallery";
                return b.direction = !0, c && c.enabled ? (f += " mfp-gallery", w(m + e, function() {
                    c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function() {
                        return b.items.length > 1 ? (b.next(), !1) : void 0
                    }), d.on("keydown" + e, function(a) {
                        37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                    })
                }), w("UpdateStatus" + e, function(a, c) {
                    c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
                }), w(l + e, function(a, d, e, f) {
                    var g = b.items.length;
                    e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
                }), w("BuildControls" + e, function() {
                    if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                        var d = c.arrowMarkup,
                            e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
                            f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s);
                        e.click(function() {
                            b.prev()
                        }), f.click(function() {
                            b.next()
                        }), b.container.append(e.add(f))
                    }
                }), w(n + e, function() {
                    b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
                        b.preloadNearbyImages(), b._preloadTimeout = null
                    }, 16)
                }), void w(h + e, function() {
                    d.off(e), b.wrap.off("click" + e), b.arrowRight = b.arrowLeft = null
                })) : !1
            },
            next: function() {
                b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
            },
            prev: function() {
                b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
            },
            goTo: function(a) {
                b.direction = a >= b.index, b.index = a, b.updateItemHTML()
            },
            preloadNearbyImages: function() {
                var a, c = b.st.gallery.preload,
                    d = Math.min(c[0], b.items.length),
                    e = Math.min(c[1], b.items.length);
                for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
                for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
            },
            _preloadItem: function(c) {
                if (c = S(c), !b.items[c].preloaded) {
                    var d = b.items[c];
                    d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
                        d.hasSize = !0
                    }).on("error.mfploader", function() {
                        d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
                    }).attr("src", d.src)), d.preloaded = !0
                }
            }
        }
    });
    var U = "retina";
    a.magnificPopup.registerModule(U, {
        options: {
            replaceSrc: function(a) {
                return a.src.replace(/\.\w+$/, function(a) {
                    return "@2x" + a
                })
            },
            ratio: 1
        },
        proto: {
            initRetina: function() {
                if (window.devicePixelRatio > 1) {
                    var a = b.st.retina,
                        c = a.ratio;
                    c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function(a, b) {
                        b.img.css({
                            "max-width": b.img[0].naturalWidth / c,
                            width: "100%"
                        })
                    }), w("ElementParse." + U, function(b, d) {
                        d.src = a.replaceSrc(d, c)
                    }))
                }
            }
        }
    }), A()
});

/*-------------------------------
   jquery.collapes.js
--------------------------------*/

(function($, exports) {

    // Constructor
    function Collapse(el, options) {
        options = options || {};
        var _this = this,
            query = options.query || "> :even";

        $.extend(_this, {
            $el: el,
            options: options,
            sections: [],
            isAccordion: options.accordion || false,
            db: options.persist ? jQueryCollapseStorage(el.get(0).id) : false
        });

        // Figure out what sections are open if storage is used
        _this.states = _this.db ? _this.db.read() : [];

        // For every pair of elements in given
        // element, create a section
        _this.$el.find(query).each(function() {
            new jQueryCollapseSection($(this), _this);
        });

        // Capute ALL the clicks!
        (function(scope) {
            _this.$el.on("click", "[data-collapse-summary] " + (scope.options.clickQuery || ""),
                $.proxy(_this.handleClick, scope));

            _this.$el.bind("toggle close open",
                $.proxy(_this.handleEvent, scope));

        }(_this));
    }

    Collapse.prototype = {
        handleClick: function(e, state) {
            e.preventDefault();
            state = state || "toggle";
            var sections = this.sections,
                l = sections.length;
            while (l--) {
                if ($.contains(sections[l].$summary[0], e.target)) {
                    sections[l][state]();
                    break;
                }
            }
        },
        handleEvent: function(e) {
            if (e.target == this.$el.get(0)) return this[e.type]();
            this.handleClick(e, e.type);
        },
        open: function(eq) {
            this._change("open", eq);
        },
        close: function(eq) {
            this._change("close", eq);
        },
        toggle: function(eq) {
            this._change("toggle", eq);
        },
        _change: function(action, eq) {
            if (isFinite(eq)) return this.sections[eq][action]();
            $.each(this.sections, function(i, section) {
                section[action]();
            });
        }
    };

    // Section constructor
    function Section($el, parent) {

        if (!parent.options.clickQuery) $el.wrapInner('<a href="#"/>');

        $.extend(this, {
            isOpen: false,
            $summary: $el.attr("data-collapse-summary", ""),
            $details: $el.next(),
            options: parent.options,
            parent: parent
        });
        parent.sections.push(this);

        // Check current state of section
        var state = parent.states[this._index()];

        if (state === 0) {
            this.close(true);
        } else if (this.$summary.is(".open") || state === 1) {
            this.open(true);
        } else {
            this.close(true);
        }
    }

    Section.prototype = {
        toggle: function() {
            this.isOpen ? this.close() : this.open();
        },
        close: function(bypass) {
            this._changeState("close", bypass);
        },
        open: function(bypass) {
            var _this = this;
            if (_this.options.accordion && !bypass) {
                $.each(_this.parent.sections, function(i, section) {
                    section.close();
                });
            }
            _this._changeState("open", bypass);
        },
        _index: function() {
            return $.inArray(this, this.parent.sections);
        },
        _changeState: function(state, bypass) {

            var _this = this;
            _this.isOpen = state == "open";
            if ($.isFunction(_this.options[state]) && !bypass) {
                _this.options[state].apply(_this.$details);
            } else {
                _this.$details[_this.isOpen ? "show" : "hide"]();
            }

            _this.$summary.toggleClass("open", state !== "close");
            _this.$details.attr("aria-hidden", state === "close");
            _this.$summary.attr("aria-expanded", state === "open");
            _this.$summary.trigger(state === "open" ? "opened" : "closed", _this);
            if (_this.parent.db) {
                _this.parent.db.write(_this._index(), _this.isOpen);
            }
        }
    };

    // Expose in jQuery API
    $.fn.extend({
        collapse: function(options, scan) {
            var nodes = (scan) ? $("body").find("[data-collapse]") : $(this);
            return nodes.each(function() {
                var settings = (scan) ? {} : options,
                    values = $(this).attr("data-collapse") || "";
                $.each(values.split(" "), function(i, v) {
                    if (v) settings[v] = true;
                });
                new Collapse($(this), settings);
            });
        }
    });

    //jQuery DOM Ready
    $(function() {
        $.fn.collapse(false, true);
    });

    // Expose constructor to
    // global namespace
    exports.jQueryCollapse = Collapse;
    exports.jQueryCollapseSection = Section;

})(window.jQuery, window);


/*-----------------------------------
    WOW js - v1.3.0 - 2016-10-04
------------------------------------ */
! function(a, b) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], b);
    else if ("undefined" != typeof exports) b(module, exports);
    else {
        var c = {
            exports: {}
        };
        b(c, c.exports), a.WOW = c.exports
    }
}(this, function(a, b) {
    "use strict";

    function c(a, b) {
        if (!(a instanceof b)) throw new TypeError("Cannot call a class as a function")
    }

    function d(a, b) {
        return b.indexOf(a) >= 0
    }

    function e(a, b) {
        for (var c in b)
            if (null == a[c]) {
                var d = b[c];
                a[c] = d
            }
        return a
    }

    function f(a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
    }

    function g(a) {
        var b = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            c = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            d = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            e = void 0;
        return null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e
    }

    function h(a, b) {
        null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) && a["on" + b]()
    }

    function i(a, b, c) {
        null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
    }

    function j(a, b, c) {
        null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
    }

    function k() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(b, "__esModule", {
        value: !0
    });
    var l, m, n = function() {
            function a(a, b) {
                for (var c = 0; c < b.length; c++) {
                    var d = b[c];
                    d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(a, d.key, d)
                }
            }
            return function(b, c, d) {
                return c && a(b.prototype, c), d && a(b, d), b
            }
        }(),
        o = window.WeakMap || window.MozWeakMap || function() {
            function a() {
                c(this, a), this.keys = [], this.values = []
            }
            return n(a, [{
                key: "get",
                value: function(a) {
                    for (var b = 0; b < this.keys.length; b++) {
                        var c = this.keys[b];
                        if (c === a) return this.values[b]
                    }
                }
            }, {
                key: "set",
                value: function(a, b) {
                    for (var c = 0; c < this.keys.length; c++) {
                        var d = this.keys[c];
                        if (d === a) return this.values[c] = b, this
                    }
                    return this.keys.push(a), this.values.push(b), this
                }
            }]), a
        }(),
        p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
            function a() {
                c(this, a), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return n(a, [{
                key: "observe",
                value: function() {}
            }]), a
        }(), l.notSupported = !0, m),
        q = window.getComputedStyle || function(a) {
            var b = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(c) {
                    "float" === c && (c = "styleFloat"), b.test(c) && c.replace(b, function(a, b) {
                        return b.toUpperCase()
                    });
                    var d = a.currentStyle;
                    return (null != d ? d[c] : void 0) || null
                }
            }
        },
        r = function() {
            function a() {
                var b = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                c(this, a), this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                }, this.animate = function() {
                    return "requestAnimationFrame" in window ? function(a) {
                        return window.requestAnimationFrame(a)
                    } : function(a) {
                        return a()
                    }
                }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = !0, this.config = e(b, this.defaults), null != b.scrollContainer && (this.config.scrollContainer = document.querySelector(b.scrollContainer)), this.animationNameCache = new o, this.wowEvent = g(this.config.boxClass)
            }
            return n(a, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var a = this;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (var b = 0; b < this.boxes.length; b++) {
                                var c = this.boxes[b];
                                this.applyStyle(c, !0)
                            }
                    if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
                        var d = new p(function(b) {
                            for (var c = 0; c < b.length; c++)
                                for (var d = b[c], e = 0; e < d.addedNodes.length; e++) {
                                    var f = d.addedNodes[e];
                                    a.doSync(f)
                                }
                        });
                        d.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    p.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(a) {
                    if ("undefined" != typeof a && null !== a || (a = this.element), 1 === a.nodeType) {
                        a = a.parentNode || a;
                        for (var b = a.querySelectorAll("." + this.config.boxClass), c = 0; c < b.length; c++) {
                            var e = b[c];
                            d(e, this.all) || (this.boxes.push(e), this.all.push(e), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0), this.scrolled = !0)
                        }
                    }
                }
            }, {
                key: "show",
                value: function(a) {
                    return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), h(a, this.wowEvent), this.config.resetAnimation && (i(a, "animationend", this.resetAnimation), i(a, "oanimationend", this.resetAnimation), i(a, "webkitAnimationEnd", this.resetAnimation), i(a, "MSAnimationEnd", this.resetAnimation)), a
                }
            }, {
                key: "applyStyle",
                value: function(a, b) {
                    var c = this,
                        d = a.getAttribute("data-wow-duration"),
                        e = a.getAttribute("data-wow-delay"),
                        f = a.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return c.customStyle(a, b, d, e, f)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var a = 0; a < this.boxes.length; a++) {
                        var b = this.boxes[a];
                        b.style.visibility = "visible"
                    }
                }
            }, {
                key: "resetAnimation",
                value: function(a) {
                    if (a.type.toLowerCase().indexOf("animationend") >= 0) {
                        var b = a.target || a.srcElement;
                        b.className = b.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(a, b, c, d, e) {
                    return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
                        animationDuration: c
                    }), d && this.vendorSet(a.style, {
                        animationDelay: d
                    }), e && this.vendorSet(a.style, {
                        animationIterationCount: e
                    }), this.vendorSet(a.style, {
                        animationName: b ? "none" : this.cachedAnimationName(a)
                    }), a
                }
            }, {
                key: "vendorSet",
                value: function(a, b) {
                    for (var c in b)
                        if (b.hasOwnProperty(c)) {
                            var d = b[c];
                            a["" + c] = d;
                            for (var e = 0; e < this.vendors.length; e++) {
                                var f = this.vendors[e];
                                a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = d
                            }
                        }
                }
            }, {
                key: "vendorCSS",
                value: function(a, b) {
                    for (var c = q(a), d = c.getPropertyCSSValue(b), e = 0; e < this.vendors.length; e++) {
                        var f = this.vendors[e];
                        d = d || c.getPropertyCSSValue("-" + f + "-" + b)
                    }
                    return d
                }
            }, {
                key: "animationName",
                value: function(a) {
                    var b = void 0;
                    try {
                        b = this.vendorCSS(a, "animation-name").cssText
                    } catch (c) {
                        b = q(a).getPropertyValue("animation-name")
                    }
                    return "none" === b ? "" : b
                }
            }, {
                key: "cacheAnimationName",
                value: function(a) {
                    return this.animationNameCache.set(a, this.animationName(a))
                }
            }, {
                key: "cachedAnimationName",
                value: function(a) {
                    return this.animationNameCache.get(a)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    if (this.scrolled) {
                        this.scrolled = !1;
                        for (var a = [], b = 0; b < this.boxes.length; b++) {
                            var c = this.boxes[b];
                            if (c) {
                                if (this.isVisible(c)) {
                                    this.show(c);
                                    continue
                                }
                                a.push(c)
                            }
                        }
                        this.boxes = a, this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(a) {
                    for (; void 0 === a.offsetTop;) a = a.parentNode;
                    for (var b = a.offsetTop; a.offsetParent;) a = a.offsetParent, b += a.offsetTop;
                    return b
                }
            }, {
                key: "isVisible",
                value: function(a) {
                    var b = a.getAttribute("data-wow-offset") || this.config.offset,
                        c = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        d = c + Math.min(this.element.clientHeight, k()) - b,
                        e = this.offsetTop(a),
                        f = e + a.clientHeight;
                    return d >= e && f >= c
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && f(navigator.userAgent)
                }
            }]), a
        }();
    b["default"] = r, a.exports = b["default"]
});


/*========== Odometer ==========*/
/*! odometer 0.4.6 */
(function() {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G = [].slice;
    q = '<span class="odometer-value"></span>', n = '<span class="odometer-ribbon"><span class="odometer-ribbon-inner">' + q + "</span></span>", d = '<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">' + n + "</span></span>", g = '<span class="odometer-formatting-mark"></span>', c = "(,ddd).dd", h = /^\(?([^)]*)\)?(?:(.)(d+))?$/, i = 30, f = 2e3, a = 20, j = 2, e = .5, k = 1e3 / i, b = 1e3 / a, o = "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", y = document.createElement("div").style, p = null != y.transition || null != y.webkitTransition || null != y.mozTransition || null != y.oTransition, w = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, l = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, s = function(a) {
        var b;
        return b = document.createElement("div"), b.innerHTML = a, b.children[0]
    }, v = function(a, b) {
        return a.className = a.className.replace(new RegExp("(^| )" + b.split(" ").join("|") + "( |$)", "gi"), " ")
    }, r = function(a, b) {
        return v(a, b), a.className += " " + b
    }, z = function(a, b) {
        var c;
        return null != document.createEvent ? (c = document.createEvent("HTMLEvents"), c.initEvent(b, !0, !0), a.dispatchEvent(c)) : void 0
    }, u = function() {
        var a, b;
        return null != (a = null != (b = window.performance) ? "function" == typeof b.now ? b.now() : void 0 : void 0) ? a : +new Date
    }, x = function(a, b) {
        return null == b && (b = 0), b ? (a *= Math.pow(10, b), a += .5, a = Math.floor(a), a /= Math.pow(10, b)) : Math.round(a)
    }, A = function(a) {
        return 0 > a ? Math.ceil(a) : Math.floor(a)
    }, t = function(a) {
        return a - x(a)
    }, C = !1, (B = function() {
        var a, b, c, d, e;
        if (!C && null != window.jQuery) {
            for (C = !0, d = ["html", "text"], e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(function(a) {
                var b;
                return b = window.jQuery.fn[a], window.jQuery.fn[a] = function(a) {
                    var c;
                    return null == a || null == (null != (c = this[0]) ? c.odometer : void 0) ? b.apply(this, arguments) : this[0].odometer.update(a)
                }
            }(a));
            return e
        }
    })(), setTimeout(B, 0), m = function() {
        function a(b) {
            var c, d, e, g, h, i, l, m, n, o, p = this;
            if (this.options = b, this.el = this.options.el, null != this.el.odometer) return this.el.odometer;
            this.el.odometer = this, m = a.options;
            for (d in m) g = m[d], null == this.options[d] && (this.options[d] = g);
            null == (h = this.options).duration && (h.duration = f), this.MAX_VALUES = this.options.duration / k / j | 0, this.resetFormat(), this.value = this.cleanValue(null != (n = this.options.value) ? n : ""), this.renderInside(), this.render();
            try {
                for (o = ["innerHTML", "innerText", "textContent"], i = 0, l = o.length; l > i; i++) e = o[i], null != this.el[e] && ! function(a) {
                    return Object.defineProperty(p.el, a, {
                        get: function() {
                            var b;
                            return "innerHTML" === a ? p.inside.outerHTML : null != (b = p.inside.innerText) ? b : p.inside.textContent
                        },
                        set: function(a) {
                            return p.update(a)
                        }
                    })
                }(e)
            } catch (q) {
                c = q, this.watchForMutations()
            }
        }
        return a.prototype.renderInside = function() {
            return this.inside = document.createElement("div"), this.inside.className = "odometer-inside", this.el.innerHTML = "", this.el.appendChild(this.inside)
        }, a.prototype.watchForMutations = function() {
            var a, b = this;
            if (null != l) try {
                return null == this.observer && (this.observer = new l(function() {
                    var a;
                    return a = b.el.innerText, b.renderInside(), b.render(b.value), b.update(a)
                })), this.watchMutations = !0, this.startWatchingMutations()
            } catch (c) {
                a = c
            }
        }, a.prototype.startWatchingMutations = function() {
            return this.watchMutations ? this.observer.observe(this.el, {
                childList: !0
            }) : void 0
        }, a.prototype.stopWatchingMutations = function() {
            var a;
            return null != (a = this.observer) ? a.disconnect() : void 0
        }, a.prototype.cleanValue = function(a) {
            var b;
            return "string" == typeof a && (a = a.replace(null != (b = this.format.radix) ? b : ".", "<radix>"), a = a.replace(/[.,]/g, ""), a = a.replace("<radix>", "."), a = parseFloat(a, 10) || 0), x(a, this.format.precision)
        }, a.prototype.bindTransitionEnd = function() {
            var a, b, c, d, e, f, g = this;
            if (!this.transitionEndBound) {
                for (this.transitionEndBound = !0, b = !1, e = o.split(" "), f = [], c = 0, d = e.length; d > c; c++) a = e[c], f.push(this.el.addEventListener(a, function() {
                    return b ? !0 : (b = !0, setTimeout(function() {
                        return g.render(), b = !1, z(g.el, "odometerdone")
                    }, 0), !0)
                }, !1));
                return f
            }
        }, a.prototype.resetFormat = function() {
            var a, b, d, e, f, g, i, j;
            if (a = null != (i = this.options.format) ? i : c, a || (a = "d"), d = h.exec(a), !d) throw new Error("Odometer: Unparsable digit format");
            return j = d.slice(1, 4), g = j[0], f = j[1], b = j[2], e = (null != b ? b.length : void 0) || 0, this.format = {
                repeating: g,
                radix: f,
                precision: e
            }
        }, a.prototype.render = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m;
            for (null == a && (a = this.value), this.stopWatchingMutations(), this.resetFormat(), this.inside.innerHTML = "", g = this.options.theme, b = this.el.className.split(" "), f = [], i = 0, k = b.length; k > i; i++) c = b[i], c.length && ((e = /^odometer-theme-(.+)$/.exec(c)) ? g = e[1] : /^odometer(-|$)/.test(c) || f.push(c));
            for (f.push("odometer"), p || f.push("odometer-no-transitions"), f.push(g ? "odometer-theme-" + g : "odometer-auto-theme"), this.el.className = f.join(" "), this.ribbons = {}, this.digits = [], h = !this.format.precision || !t(a) || !1, m = a.toString().split("").reverse(), j = 0, l = m.length; l > j; j++) d = m[j], "." === d && (h = !0), this.addDigit(d, h);
            return this.startWatchingMutations()
        }, a.prototype.update = function(a) {
            var b, c = this;
            return a = this.cleanValue(a), (b = a - this.value) ? (v(this.el, "odometer-animating-up odometer-animating-down odometer-animating"), b > 0 ? r(this.el, "odometer-animating-up") : r(this.el, "odometer-animating-down"), this.stopWatchingMutations(), this.animate(a), this.startWatchingMutations(), setTimeout(function() {
                return c.el.offsetHeight, r(c.el, "odometer-animating")
            }, 0), this.value = a) : void 0
        }, a.prototype.renderDigit = function() {
            return s(d)
        }, a.prototype.insertDigit = function(a, b) {
            return null != b ? this.inside.insertBefore(a, b) : this.inside.children.length ? this.inside.insertBefore(a, this.inside.children[0]) : this.inside.appendChild(a)
        }, a.prototype.addSpacer = function(a, b, c) {
            var d;
            return d = s(g), d.innerHTML = a, c && r(d, c), this.insertDigit(d, b)
        }, a.prototype.addDigit = function(a, b) {
            var c, d, e, f;
            if (null == b && (b = !0), "-" === a) return this.addSpacer(a, null, "odometer-negation-mark");
            if ("." === a) return this.addSpacer(null != (f = this.format.radix) ? f : ".", null, "odometer-radix-mark");
            if (b)
                for (e = !1;;) {
                    if (!this.format.repeating.length) {
                        if (e) throw new Error("Bad odometer format without digits");
                        this.resetFormat(), e = !0
                    }
                    if (c = this.format.repeating[this.format.repeating.length - 1], this.format.repeating = this.format.repeating.substring(0, this.format.repeating.length - 1), "d" === c) break;
                    this.addSpacer(c)
                }
            return d = this.renderDigit(), d.querySelector(".odometer-value").innerHTML = a, this.digits.push(d), this.insertDigit(d)
        }, a.prototype.animate = function(a) {
            return p && "count" !== this.options.animation ? this.animateSlide(a) : this.animateCount(a)
        }, a.prototype.animateCount = function(a) {
            var c, d, e, f, g, h = this;
            if (d = +a - this.value) return f = e = u(), c = this.value, (g = function() {
                var i, j, k;
                return u() - f > h.options.duration ? (h.value = a, h.render(), void z(h.el, "odometerdone")) : (i = u() - e, i > b && (e = u(), k = i / h.options.duration, j = d * k, c += j, h.render(Math.round(c))), null != w ? w(g) : setTimeout(g, b))
            })()
        }, a.prototype.getDigitCount = function() {
            var a, b, c, d, e, f;
            for (d = 1 <= arguments.length ? G.call(arguments, 0) : [], a = e = 0, f = d.length; f > e; a = ++e) c = d[a], d[a] = Math.abs(c);
            return b = Math.max.apply(Math, d), Math.ceil(Math.log(b + 1) / Math.log(10))
        }, a.prototype.getFractionalDigitCount = function() {
            var a, b, c, d, e, f, g;
            for (e = 1 <= arguments.length ? G.call(arguments, 0) : [], b = /^\-?\d*\.(\d*?)0*$/, a = f = 0, g = e.length; g > f; a = ++f) d = e[a], e[a] = d.toString(), c = b.exec(e[a]), e[a] = null == c ? 0 : c[1].length;
            return Math.max.apply(Math, e)
        }, a.prototype.resetDigits = function() {
            return this.digits = [], this.ribbons = [], this.inside.innerHTML = "", this.resetFormat()
        }, a.prototype.animateSlide = function(a) {
            var b, c, d, f, g, h, i, j, k, l, m, n, o, p, q, s, t, u, v, w, x, y, z, B, C, D, E;
            if (s = this.value, j = this.getFractionalDigitCount(s, a), j && (a *= Math.pow(10, j), s *= Math.pow(10, j)), d = a - s) {
                for (this.bindTransitionEnd(), f = this.getDigitCount(s, a), g = [], b = 0, m = v = 0; f >= 0 ? f > v : v > f; m = f >= 0 ? ++v : --v) {
                    if (t = A(s / Math.pow(10, f - m - 1)), i = A(a / Math.pow(10, f - m - 1)), h = i - t, Math.abs(h) > this.MAX_VALUES) {
                        for (l = [], n = h / (this.MAX_VALUES + this.MAX_VALUES * b * e), c = t; h > 0 && i > c || 0 > h && c > i;) l.push(Math.round(c)), c += n;
                        l[l.length - 1] !== i && l.push(i), b++
                    } else l = function() {
                        E = [];
                        for (var a = t; i >= t ? i >= a : a >= i; i >= t ? a++ : a--) E.push(a);
                        return E
                    }.apply(this);
                    for (m = w = 0, y = l.length; y > w; m = ++w) k = l[m], l[m] = Math.abs(k % 10);
                    g.push(l)
                }
                for (this.resetDigits(), D = g.reverse(), m = x = 0, z = D.length; z > x; m = ++x)
                    for (l = D[m], this.digits[m] || this.addDigit(" ", m >= j), null == (u = this.ribbons)[m] && (u[m] = this.digits[m].querySelector(".odometer-ribbon-inner")), this.ribbons[m].innerHTML = "", 0 > d && (l = l.reverse()), o = C = 0, B = l.length; B > C; o = ++C) k = l[o], q = document.createElement("div"), q.className = "odometer-value", q.innerHTML = k, this.ribbons[m].appendChild(q), o === l.length - 1 && r(q, "odometer-last-value"), 0 === o && r(q, "odometer-first-value");
                return 0 > t && this.addDigit("-"), p = this.inside.querySelector(".odometer-radix-mark"), null != p && p.parent.removeChild(p), j ? this.addSpacer(this.format.radix, this.digits[j - 1], "odometer-radix-mark") : void 0
            }
        }, a
    }(), m.options = null != (E = window.odometerOptions) ? E : {}, setTimeout(function() {
        var a, b, c, d, e;
        if (window.odometerOptions) {
            d = window.odometerOptions, e = [];
            for (a in d) b = d[a], e.push(null != (c = m.options)[a] ? (c = m.options)[a] : c[a] = b);
            return e
        }
    }, 0), m.init = function() {
        var a, b, c, d, e, f;
        if (null != document.querySelectorAll) {
            for (b = document.querySelectorAll(m.options.selector || ".odometer"), f = [], c = 0, d = b.length; d > c; c++) a = b[c], f.push(a.odometer = new m({
                el: a,
                value: null != (e = a.innerText) ? e : a.textContent
            }));
            return f
        }
    }, null != (null != (F = document.documentElement) ? F.doScroll : void 0) && null != document.createEventObject ? (D = document.onreadystatechange, document.onreadystatechange = function() {
        return "complete" === document.readyState && m.options.auto !== !1 && m.init(), null != D ? D.apply(this, arguments) : void 0
    }) : document.addEventListener("DOMContentLoaded", function() {
        return m.options.auto !== !1 ? m.init() : void 0
    }, !1), "function" == typeof define && define.amd ? define(["jquery"], function() {
        return m
    }) : typeof exports === !1 ? module.exports = m : window.Odometer = m
}).call(this);



/*------------------------------------
    scrollup js
--------------------------------------*/

! function(l, o, e) {
    "use strict";
    l.fn.scrollUp = function(o) {
        l.data(e.body, "scrollUp") || (l.data(e.body, "scrollUp", !0), l.fn.scrollUp.init(o))
    }, l.fn.scrollUp.init = function(r) {
        var s, t, c, i, n, a, d, p = l.fn.scrollUp.settings = l.extend({}, l.fn.scrollUp.defaults, r),
            f = !1;
        switch (d = p.scrollTrigger ? l(p.scrollTrigger) : l("<a/>", {
            id: p.scrollName,
            href: "#top"
        }), p.scrollTitle && d.attr("title", p.scrollTitle), d.appendTo("body"), p.scrollImg || p.scrollTrigger || d.html(p.scrollText), d.css({
            display: "none",
            position: "fixed",
            zIndex: p.zIndex
        }), p.activeOverlay && l("<div/>", {
            id: p.scrollName + "-active"
        }).css({
            position: "absolute",
            top: p.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + p.activeOverlay,
            zIndex: p.zIndex
        }).appendTo("body"), p.animation) {
            case "fade":
                s = "fadeIn", t = "fadeOut", c = p.animationSpeed;
                break;
            case "slide":
                s = "slideDown", t = "slideUp", c = p.animationSpeed;
                break;
            default:
                s = "show", t = "hide", c = 0
        }
        i = "top" === p.scrollFrom ? p.scrollDistance : l(e).height() - l(o).height() - p.scrollDistance, n = l(o).scroll(function() {
            l(o).scrollTop() > i ? f || (d[s](c), f = !0) : f && (d[t](c), f = !1)
        }), p.scrollTarget ? "number" == typeof p.scrollTarget ? a = p.scrollTarget : "string" == typeof p.scrollTarget && (a = Math.floor(l(p.scrollTarget).offset().top)) : a = 0, d.click(function(o) {
            o.preventDefault(), l("html, body").animate({
                scrollTop: a
            }, p.scrollSpeed, p.easingType)
        })
    }, l.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, l.fn.scrollUp.destroy = function(r) {
        l.removeData(e.body, "scrollUp"), l("#" + l.fn.scrollUp.settings.scrollName).remove(), l("#" + l.fn.scrollUp.settings.scrollName + "-active").remove(), l.fn.jquery.split(".")[1] >= 7 ? l(o).off("scroll", r) : l(o).unbind("scroll", r)
    }, l.scrollUp = l.fn.scrollUp
}(jQuery, window, document);