var FeatureViewer;
(() => {
    var t = {
            568: (t, e, n) => {
                n(755), n(662);
                n.g.jQuery = n(755), n(662), n(830), n(813), n(892);
                const r = n(228),
                    i = n(219),
                    o = n(788).NXUtils,
                    a = n(788).NXViewerUtils,
                    u = n(290);
                n(810).mixin(r.prototype), t.exports = {
                    createFeature: r,
                    Nextprot: i,
                    NXUtils: o,
                    NXViewerUtils: a,
                    nxFeatureViewer: u
                }
            },
            713: function(t, e) {
                ! function() {
                    var n = Array.prototype.forEach,
                        r = Object.prototype.hasOwnProperty,
                        i = Array.prototype.slice,
                        o = 0;
                    var a, u = {
                        keys: Object.keys || function(t) {
                            if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError("keys() called on a non-object");
                            var e, n = [];
                            for (e in t) t.hasOwnProperty(e) && (n[n.length] = e);
                            return n
                        },
                        uniqueId: function(t) {
                            var e = ++o + "";
                            return t ? t + e : e
                        },
                        has: function(t, e) {
                            return r.call(t, e)
                        },
                        each: function(t, e, r) {
                            if (null != t)
                                if (n && t.forEach === n) t.forEach(e, r);
                                else if (t.length === +t.length)
                                for (var i = 0, o = t.length; i < o; i++) e.call(r, t[i], i, t);
                            else
                                for (var a in t) this.has(t, a) && e.call(r, t[a], a, t)
                        },
                        once: function(t) {
                            var e, n = !1;
                            return function() {
                                return n || (n = !0, e = t.apply(this, arguments), t = null), e
                            }
                        }
                    };
                    a = {
                        on: function(t, e, n) {
                            return l(this, "on", t, [e, n]) && e ? (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
                                callback: e,
                                context: n,
                                ctx: n || this
                            }), this) : this
                        },
                        once: function(t, e, n) {
                            if (!l(this, "once", t, [e, n]) || !e) return this;
                            var r = this,
                                i = u.once((function() {
                                    r.off(t, i), e.apply(this, arguments)
                                }));
                            return i._callback = e, this.on(t, i, n)
                        },
                        off: function(t, e, n) {
                            var r, i, o, a, s, c, f, p;
                            if (!this._events || !l(this, "off", t, [e, n])) return this;
                            if (!t && !e && !n) return this._events = {}, this;
                            for (s = 0, c = (a = t ? [t] : u.keys(this._events)).length; s < c; s++)
                                if (t = a[s], o = this._events[t]) {
                                    if (this._events[t] = r = [], e || n)
                                        for (f = 0, p = o.length; f < p; f++) i = o[f], (e && e !== i.callback && e !== i.callback._callback || n && n !== i.context) && r.push(i);
                                    r.length || delete this._events[t]
                                } return this
                        },
                        trigger: function(t) {
                            if (!this._events) return this;
                            var e = i.call(arguments, 1);
                            if (!l(this, "trigger", t, e)) return this;
                            var n = this._events[t],
                                r = this._events.all;
                            return n && c(n, e), r && c(r, arguments), this
                        },
                        stopListening: function(t, e, n) {
                            var r = this._listeners;
                            if (!r) return this;
                            var i = !e && !n;
                            for (var o in "object" == typeof e && (n = this), t && ((r = {})[t._listenerId] = t), r) r[o].off(e, n, this), i && delete this._listeners[o];
                            return this
                        }
                    };
                    var s = /\s+/,
                        l = function(t, e, n, r) {
                            if (!n) return !0;
                            if ("object" == typeof n) {
                                for (var i in n) t[e].apply(t, [i, n[i]].concat(r));
                                return !1
                            }
                            if (s.test(n)) {
                                for (var o = n.split(s), a = 0, u = o.length; a < u; a++) t[e].apply(t, [o[a]].concat(r));
                                return !1
                            }
                            return !0
                        },
                        c = function(t, e) {
                            var n, r = -1,
                                i = t.length,
                                o = e[0],
                                a = e[1],
                                u = e[2];
                            switch (e.length) {
                                case 0:
                                    for (; ++r < i;)(n = t[r]).callback.call(n.ctx);
                                    return;
                                case 1:
                                    for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o);
                                    return;
                                case 2:
                                    for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a);
                                    return;
                                case 3:
                                    for (; ++r < i;)(n = t[r]).callback.call(n.ctx, o, a, u);
                                    return;
                                default:
                                    for (; ++r < i;)(n = t[r]).callback.apply(n.ctx, e)
                            }
                        };
                    u.each({
                        listenTo: "on",
                        listenToOnce: "once"
                    }, (function(t, e) {
                        a[e] = function(e, n, r) {
                            return (this._listeners || (this._listeners = {}))[e._listenerId || (e._listenerId = u.uniqueId("l"))] = e, "object" == typeof n && (r = this), e[t](n, r, this), this
                        }
                    })), a.bind = a.on, a.unbind = a.off, a.mixin = function(t) {
                        return u.each(["on", "once", "off", "trigger", "stopListening", "listenTo", "listenToOnce", "bind", "unbind"], (function(e) {
                            t[e] = this[e]
                        }), this), t
                    }, t.exports && (e = t.exports = a), e.BackboneEvents = a
                }()
            },
            979: (t, e, n) => {
                t.exports = n(713)
            },
            810: (t, e, n) => {
                var r = n(979);
                r.onAll = function(t, e) {
                    return this.on("all", t, e), this
                }, r.oldMixin = r.mixin, r.mixin = function(t) {
                    r.oldMixin(t);
                    for (var e = ["onAll"], n = 0; n < e.length; n++) {
                        var i = e[n];
                        t[i] = this[i]
                    }
                    return t
                }, t.exports = r
            },
            385: (t, e, n) => {
                "use strict";
                n.d(e, {
                    Z: () => i
                });
                const r = new Map,
                    i = {
                        set(t, e, n) {
                            r.has(t) || r.set(t, new Map);
                            const i = r.get(t);
                            i.has(e) || 0 === i.size ? i.set(e, n) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(i.keys())[0]}.`)
                        },
                        get: (t, e) => r.has(t) && r.get(t).get(e) || null,
                        remove(t, e) {
                            if (!r.has(t)) return;
                            const n = r.get(t);
                            n.delete(e), 0 === n.size && r.delete(t)
                        }
                    }
            },
            357: (t, e, n) => {
                "use strict";
                n.d(e, {
                    Z: () => r
                });
                const r = {
                    find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
                    findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
                    children: (t, e) => [].concat(...t.children).filter((t => t.matches(e))),
                    parents(t, e) {
                        const n = [];
                        let r = t.parentNode;
                        for (; r && r.nodeType === Node.ELEMENT_NODE && 3 !== r.nodeType;) r.matches(e) && n.push(r), r = r.parentNode;
                        return n
                    },
                    prev(t, e) {
                        let n = t.previousElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.previousElementSibling
                        }
                        return []
                    },
                    next(t, e) {
                        let n = t.nextElementSibling;
                        for (; n;) {
                            if (n.matches(e)) return [n];
                            n = n.nextElementSibling
                        }
                        return []
                    }
                }
            },
            813: (t, e, n) => {
                "use strict";
                n.r(e), n.d(e, {
                    default: () => h
                });
                var r = n(147),
                    i = n(385),
                    o = n(357),
                    a = n(830);
                const u = "bs.popover",
                    s = new RegExp("(^|\\s)bs-popover\\S+", "g"),
                    l = {
                        ...a.default.Default,
                        placement: "right",
                        offset: [0, 8],
                        trigger: "click",
                        content: "",
                        template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
                    },
                    c = {
                        ...a.default.DefaultType,
                        content: "(string|element|function)"
                    },
                    f = {
                        HIDE: "hide.bs.popover",
                        HIDDEN: "hidden.bs.popover",
                        SHOW: "show.bs.popover",
                        SHOWN: "shown.bs.popover",
                        INSERTED: "inserted.bs.popover",
                        CLICK: "click.bs.popover",
                        FOCUSIN: "focusin.bs.popover",
                        FOCUSOUT: "focusout.bs.popover",
                        MOUSEENTER: "mouseenter.bs.popover",
                        MOUSELEAVE: "mouseleave.bs.popover"
                    };
                class p extends a.default {
                    static get Default() {
                        return l
                    }
                    static get NAME() {
                        return "popover"
                    }
                    static get Event() {
                        return f
                    }
                    static get DefaultType() {
                        return c
                    }
                    isWithContent() {
                        return this.getTitle() || this._getContent()
                    }
                    setContent() {
                        const t = this.getTipElement();
                        this.setElementContent(o.Z.findOne(".popover-header", t), this.getTitle());
                        let e = this._getContent();
                        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(o.Z.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
                    }
                    _addAttachmentClass(t) {
                        this.getTipElement().classList.add(`bs-popover-${this.updateAttachment(t)}`)
                    }
                    _getContent() {
                        return this._element.getAttribute("data-bs-content") || this._config.content
                    }
                    _cleanTipClass() {
                        const t = this.getTipElement(),
                            e = t.getAttribute("class").match(s);
                        null !== e && e.length > 0 && e.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            let e = i.Z.get(this, u);
                            const n = "object" == typeof t ? t : null;
                            if ((e || !/dispose|hide/.test(t)) && (e || (e = new p(this, n), i.Z.set(this, u, e)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }(0, r.pF)(p);
                const h = p
            },
            830: (t, e, n) => {
                "use strict";
                n.r(e), n.d(e, {
                    default: () => _e
                });
                var r = {};
                n.r(r), n.d(r, {
                    afterMain: () => E,
                    afterRead: () => b,
                    afterWrite: () => T,
                    applyStyles: () => O,
                    arrow: () => K,
                    auto: () => s,
                    basePlacements: () => l,
                    beforeMain: () => w,
                    beforeRead: () => m,
                    beforeWrite: () => _,
                    bottom: () => o,
                    clippingParents: () => p,
                    computeStyles: () => tt,
                    createPopper: () => Dt,
                    createPopperBase: () => kt,
                    createPopperLite: () => Lt,
                    detectOverflow: () => yt,
                    end: () => f,
                    eventListeners: () => nt,
                    flip: () => mt,
                    hide: () => wt,
                    left: () => u,
                    main: () => M,
                    modifierPhases: () => S,
                    offset: () => Mt,
                    placements: () => y,
                    popper: () => d,
                    popperGenerator: () => Ct,
                    popperOffsets: () => Et,
                    preventOverflow: () => _t,
                    read: () => x,
                    reference: () => g,
                    right: () => a,
                    start: () => c,
                    top: () => i,
                    variationPlacements: () => v,
                    viewport: () => h,
                    write: () => A
                });
                var i = "top",
                    o = "bottom",
                    a = "right",
                    u = "left",
                    s = "auto",
                    l = [i, o, a, u],
                    c = "start",
                    f = "end",
                    p = "clippingParents",
                    h = "viewport",
                    d = "popper",
                    g = "reference",
                    v = l.reduce((function(t, e) {
                        return t.concat([e + "-" + c, e + "-" + f])
                    }), []),
                    y = [].concat(l, [s]).reduce((function(t, e) {
                        return t.concat([e, e + "-" + c, e + "-" + f])
                    }), []),
                    m = "beforeRead",
                    x = "read",
                    b = "afterRead",
                    w = "beforeMain",
                    M = "main",
                    E = "afterMain",
                    _ = "beforeWrite",
                    A = "write",
                    T = "afterWrite",
                    S = [m, x, b, w, M, E, _, A, T];

                function N(t) {
                    return t ? (t.nodeName || "").toLowerCase() : null
                }

                function C(t) {
                    if (null == t) return window;
                    if ("[object Window]" !== t.toString()) {
                        var e = t.ownerDocument;
                        return e && e.defaultView || window
                    }
                    return t
                }

                function k(t) {
                    return t instanceof C(t).Element || t instanceof Element
                }

                function D(t) {
                    return t instanceof C(t).HTMLElement || t instanceof HTMLElement
                }

                function L(t) {
                    return "undefined" != typeof ShadowRoot && (t instanceof C(t).ShadowRoot || t instanceof ShadowRoot)
                }
                const O = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(t) {
                        var e = t.state;
                        Object.keys(e.elements).forEach((function(t) {
                            var n = e.styles[t] || {},
                                r = e.attributes[t] || {},
                                i = e.elements[t];
                            D(i) && N(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(t) {
                                var e = r[t];
                                !1 === e ? i.removeAttribute(t) : i.setAttribute(t, !0 === e ? "" : e)
                            })))
                        }))
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = {
                                popper: {
                                    position: e.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(e.elements.popper.style, n.popper), e.styles = n, e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(e.elements).forEach((function(t) {
                                    var r = e.elements[t],
                                        i = e.attributes[t] || {},
                                        o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                            return t[e] = "", t
                                        }), {});
                                    D(r) && N(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(t) {
                                        r.removeAttribute(t)
                                    })))
                                }))
                            }
                    },
                    requires: ["computeStyles"]
                };

                function q(t) {
                    return t.split("-")[0]
                }

                function j(t) {
                    var e = t.getBoundingClientRect();
                    return {
                        width: e.width,
                        height: e.height,
                        top: e.top,
                        right: e.right,
                        bottom: e.bottom,
                        left: e.left,
                        x: e.left,
                        y: e.top
                    }
                }

                function P(t) {
                    var e = j(t),
                        n = t.offsetWidth,
                        r = t.offsetHeight;
                    return Math.abs(e.width - n) <= 1 && (n = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
                        x: t.offsetLeft,
                        y: t.offsetTop,
                        width: n,
                        height: r
                    }
                }

                function R(t, e) {
                    var n = e.getRootNode && e.getRootNode();
                    if (t.contains(e)) return !0;
                    if (n && L(n)) {
                        var r = e;
                        do {
                            if (r && t.isSameNode(r)) return !0;
                            r = r.parentNode || r.host
                        } while (r)
                    }
                    return !1
                }

                function z(t) {
                    return C(t).getComputedStyle(t)
                }

                function H(t) {
                    return ["table", "td", "th"].indexOf(N(t)) >= 0
                }

                function I(t) {
                    return ((k(t) ? t.ownerDocument : t.document) || window.document).documentElement
                }

                function F(t) {
                    return "html" === N(t) ? t : t.assignedSlot || t.parentNode || (L(t) ? t.host : null) || I(t)
                }

                function U(t) {
                    return D(t) && "fixed" !== z(t).position ? t.offsetParent : null
                }

                function B(t) {
                    for (var e = C(t), n = U(t); n && H(n) && "static" === z(n).position;) n = U(n);
                    return n && ("html" === N(n) || "body" === N(n) && "static" === z(n).position) ? e : n || function(t) {
                        var e = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                        if (-1 !== navigator.userAgent.indexOf("Trident") && D(t) && "fixed" === z(t).position) return null;
                        for (var n = F(t); D(n) && ["html", "body"].indexOf(N(n)) < 0;) {
                            var r = z(n);
                            if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || e && "filter" === r.willChange || e && r.filter && "none" !== r.filter) return n;
                            n = n.parentNode
                        }
                        return null
                    }(t) || e
                }

                function W(t) {
                    return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
                }
                var $ = Math.max,
                    V = Math.min,
                    X = Math.round;

                function Y(t, e, n) {
                    return $(t, V(e, n))
                }

                function Z(t) {
                    return Object.assign({}, {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    }, t)
                }

                function G(t, e) {
                    return e.reduce((function(e, n) {
                        return e[n] = t, e
                    }), {})
                }
                const K = {
                    name: "arrow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e, n = t.state,
                            r = t.name,
                            s = t.options,
                            c = n.elements.arrow,
                            f = n.modifiersData.popperOffsets,
                            p = q(n.placement),
                            h = W(p),
                            d = [u, a].indexOf(p) >= 0 ? "height" : "width";
                        if (c && f) {
                            var g = function(t, e) {
                                    return Z("number" != typeof(t = "function" == typeof t ? t(Object.assign({}, e.rects, {
                                        placement: e.placement
                                    })) : t) ? t : G(t, l))
                                }(s.padding, n),
                                v = P(c),
                                y = "y" === h ? i : u,
                                m = "y" === h ? o : a,
                                x = n.rects.reference[d] + n.rects.reference[h] - f[h] - n.rects.popper[d],
                                b = f[h] - n.rects.reference[h],
                                w = B(c),
                                M = w ? "y" === h ? w.clientHeight || 0 : w.clientWidth || 0 : 0,
                                E = x / 2 - b / 2,
                                _ = g[y],
                                A = M - v[d] - g[m],
                                T = M / 2 - v[d] / 2 + E,
                                S = Y(_, T, A),
                                N = h;
                            n.modifiersData[r] = ((e = {})[N] = S, e.centerOffset = S - T, e)
                        }
                    },
                    effect: function(t) {
                        var e = t.state,
                            n = t.options.element,
                            r = void 0 === n ? "[data-popper-arrow]" : n;
                        null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && R(e.elements.popper, r) && (e.elements.arrow = r)
                    },
                    requires: ["popperOffsets"],
                    requiresIfExists: ["preventOverflow"]
                };
                var Q = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

                function J(t) {
                    var e, n = t.popper,
                        r = t.popperRect,
                        s = t.placement,
                        l = t.offsets,
                        c = t.position,
                        f = t.gpuAcceleration,
                        p = t.adaptive,
                        h = t.roundOffsets,
                        d = !0 === h ? function(t) {
                            var e = t.x,
                                n = t.y,
                                r = window.devicePixelRatio || 1;
                            return {
                                x: X(X(e * r) / r) || 0,
                                y: X(X(n * r) / r) || 0
                            }
                        }(l) : "function" == typeof h ? h(l) : l,
                        g = d.x,
                        v = void 0 === g ? 0 : g,
                        y = d.y,
                        m = void 0 === y ? 0 : y,
                        x = l.hasOwnProperty("x"),
                        b = l.hasOwnProperty("y"),
                        w = u,
                        M = i,
                        E = window;
                    if (p) {
                        var _ = B(n),
                            A = "clientHeight",
                            T = "clientWidth";
                        _ === C(n) && "static" !== z(_ = I(n)).position && (A = "scrollHeight", T = "scrollWidth"), _ = _, s === i && (M = o, m -= _[A] - r.height, m *= f ? 1 : -1), s === u && (w = a, v -= _[T] - r.width, v *= f ? 1 : -1)
                    }
                    var S, N = Object.assign({
                        position: c
                    }, p && Q);
                    return f ? Object.assign({}, N, ((S = {})[M] = b ? "0" : "", S[w] = x ? "0" : "", S.transform = (E.devicePixelRatio || 1) < 2 ? "translate(" + v + "px, " + m + "px)" : "translate3d(" + v + "px, " + m + "px, 0)", S)) : Object.assign({}, N, ((e = {})[M] = b ? m + "px" : "", e[w] = x ? v + "px" : "", e.transform = "", e))
                }
                const tt = {
                    name: "computeStyles",
                    enabled: !0,
                    phase: "beforeWrite",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = n.gpuAcceleration,
                            i = void 0 === r || r,
                            o = n.adaptive,
                            a = void 0 === o || o,
                            u = n.roundOffsets,
                            s = void 0 === u || u,
                            l = {
                                placement: q(e.placement),
                                popper: e.elements.popper,
                                popperRect: e.rects.popper,
                                gpuAcceleration: i
                            };
                        null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, J(Object.assign({}, l, {
                            offsets: e.modifiersData.popperOffsets,
                            position: e.options.strategy,
                            adaptive: a,
                            roundOffsets: s
                        })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, J(Object.assign({}, l, {
                            offsets: e.modifiersData.arrow,
                            position: "absolute",
                            adaptive: !1,
                            roundOffsets: s
                        })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-placement": e.placement
                        })
                    },
                    data: {}
                };
                var et = {
                    passive: !0
                };
                const nt = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(t) {
                        var e = t.state,
                            n = t.instance,
                            r = t.options,
                            i = r.scroll,
                            o = void 0 === i || i,
                            a = r.resize,
                            u = void 0 === a || a,
                            s = C(e.elements.popper),
                            l = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                        return o && l.forEach((function(t) {
                                t.addEventListener("scroll", n.update, et)
                            })), u && s.addEventListener("resize", n.update, et),
                            function() {
                                o && l.forEach((function(t) {
                                    t.removeEventListener("scroll", n.update, et)
                                })), u && s.removeEventListener("resize", n.update, et)
                            }
                    },
                    data: {}
                };
                var rt = {
                    left: "right",
                    right: "left",
                    bottom: "top",
                    top: "bottom"
                };

                function it(t) {
                    return t.replace(/left|right|bottom|top/g, (function(t) {
                        return rt[t]
                    }))
                }
                var ot = {
                    start: "end",
                    end: "start"
                };

                function at(t) {
                    return t.replace(/start|end/g, (function(t) {
                        return ot[t]
                    }))
                }

                function ut(t) {
                    var e = C(t);
                    return {
                        scrollLeft: e.pageXOffset,
                        scrollTop: e.pageYOffset
                    }
                }

                function st(t) {
                    return j(I(t)).left + ut(t).scrollLeft
                }

                function lt(t) {
                    var e = z(t),
                        n = e.overflow,
                        r = e.overflowX,
                        i = e.overflowY;
                    return /auto|scroll|overlay|hidden/.test(n + i + r)
                }

                function ct(t) {
                    return ["html", "body", "#document"].indexOf(N(t)) >= 0 ? t.ownerDocument.body : D(t) && lt(t) ? t : ct(F(t))
                }

                function ft(t, e) {
                    var n;
                    void 0 === e && (e = []);
                    var r = ct(t),
                        i = r === (null == (n = t.ownerDocument) ? void 0 : n.body),
                        o = C(r),
                        a = i ? [o].concat(o.visualViewport || [], lt(r) ? r : []) : r,
                        u = e.concat(a);
                    return i ? u : u.concat(ft(F(a)))
                }

                function pt(t) {
                    return Object.assign({}, t, {
                        left: t.x,
                        top: t.y,
                        right: t.x + t.width,
                        bottom: t.y + t.height
                    })
                }

                function ht(t, e) {
                    return e === h ? pt(function(t) {
                        var e = C(t),
                            n = I(t),
                            r = e.visualViewport,
                            i = n.clientWidth,
                            o = n.clientHeight,
                            a = 0,
                            u = 0;
                        return r && (i = r.width, o = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (a = r.offsetLeft, u = r.offsetTop)), {
                            width: i,
                            height: o,
                            x: a + st(t),
                            y: u
                        }
                    }(t)) : D(e) ? function(t) {
                        var e = j(t);
                        return e.top = e.top + t.clientTop, e.left = e.left + t.clientLeft, e.bottom = e.top + t.clientHeight, e.right = e.left + t.clientWidth, e.width = t.clientWidth, e.height = t.clientHeight, e.x = e.left, e.y = e.top, e
                    }(e) : pt(function(t) {
                        var e, n = I(t),
                            r = ut(t),
                            i = null == (e = t.ownerDocument) ? void 0 : e.body,
                            o = $(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                            a = $(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                            u = -r.scrollLeft + st(t),
                            s = -r.scrollTop;
                        return "rtl" === z(i || n).direction && (u += $(n.clientWidth, i ? i.clientWidth : 0) - o), {
                            width: o,
                            height: a,
                            x: u,
                            y: s
                        }
                    }(I(t)))
                }

                function dt(t, e, n) {
                    var r = "clippingParents" === e ? function(t) {
                            var e = ft(F(t)),
                                n = ["absolute", "fixed"].indexOf(z(t).position) >= 0 && D(t) ? B(t) : t;
                            return k(n) ? e.filter((function(t) {
                                return k(t) && R(t, n) && "body" !== N(t)
                            })) : []
                        }(t) : [].concat(e),
                        i = [].concat(r, [n]),
                        o = i[0],
                        a = i.reduce((function(e, n) {
                            var r = ht(t, n);
                            return e.top = $(r.top, e.top), e.right = V(r.right, e.right), e.bottom = V(r.bottom, e.bottom), e.left = $(r.left, e.left), e
                        }), ht(t, o));
                    return a.width = a.right - a.left, a.height = a.bottom - a.top, a.x = a.left, a.y = a.top, a
                }

                function gt(t) {
                    return t.split("-")[1]
                }

                function vt(t) {
                    var e, n = t.reference,
                        r = t.element,
                        s = t.placement,
                        l = s ? q(s) : null,
                        p = s ? gt(s) : null,
                        h = n.x + n.width / 2 - r.width / 2,
                        d = n.y + n.height / 2 - r.height / 2;
                    switch (l) {
                        case i:
                            e = {
                                x: h,
                                y: n.y - r.height
                            };
                            break;
                        case o:
                            e = {
                                x: h,
                                y: n.y + n.height
                            };
                            break;
                        case a:
                            e = {
                                x: n.x + n.width,
                                y: d
                            };
                            break;
                        case u:
                            e = {
                                x: n.x - r.width,
                                y: d
                            };
                            break;
                        default:
                            e = {
                                x: n.x,
                                y: n.y
                            }
                    }
                    var g = l ? W(l) : null;
                    if (null != g) {
                        var v = "y" === g ? "height" : "width";
                        switch (p) {
                            case c:
                                e[g] = e[g] - (n[v] / 2 - r[v] / 2);
                                break;
                            case f:
                                e[g] = e[g] + (n[v] / 2 - r[v] / 2)
                        }
                    }
                    return e
                }

                function yt(t, e) {
                    void 0 === e && (e = {});
                    var n = e,
                        r = n.placement,
                        u = void 0 === r ? t.placement : r,
                        s = n.boundary,
                        c = void 0 === s ? p : s,
                        f = n.rootBoundary,
                        v = void 0 === f ? h : f,
                        y = n.elementContext,
                        m = void 0 === y ? d : y,
                        x = n.altBoundary,
                        b = void 0 !== x && x,
                        w = n.padding,
                        M = void 0 === w ? 0 : w,
                        E = Z("number" != typeof M ? M : G(M, l)),
                        _ = m === d ? g : d,
                        A = t.elements.reference,
                        T = t.rects.popper,
                        S = t.elements[b ? _ : m],
                        N = dt(k(S) ? S : S.contextElement || I(t.elements.popper), c, v),
                        C = j(A),
                        D = vt({
                            reference: C,
                            element: T,
                            strategy: "absolute",
                            placement: u
                        }),
                        L = pt(Object.assign({}, T, D)),
                        O = m === d ? L : C,
                        q = {
                            top: N.top - O.top + E.top,
                            bottom: O.bottom - N.bottom + E.bottom,
                            left: N.left - O.left + E.left,
                            right: O.right - N.right + E.right
                        },
                        P = t.modifiersData.offset;
                    if (m === d && P) {
                        var R = P[u];
                        Object.keys(q).forEach((function(t) {
                            var e = [a, o].indexOf(t) >= 0 ? 1 : -1,
                                n = [i, o].indexOf(t) >= 0 ? "y" : "x";
                            q[t] += R[n] * e
                        }))
                    }
                    return q
                }
                const mt = {
                    name: "flip",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = t.name;
                        if (!e.modifiersData[r]._skip) {
                            for (var f = n.mainAxis, p = void 0 === f || f, h = n.altAxis, d = void 0 === h || h, g = n.fallbackPlacements, m = n.padding, x = n.boundary, b = n.rootBoundary, w = n.altBoundary, M = n.flipVariations, E = void 0 === M || M, _ = n.allowedAutoPlacements, A = e.options.placement, T = q(A), S = g || (T === A || !E ? [it(A)] : function(t) {
                                    if (q(t) === s) return [];
                                    var e = it(t);
                                    return [at(t), e, at(e)]
                                }(A)), N = [A].concat(S).reduce((function(t, n) {
                                    return t.concat(q(n) === s ? function(t, e) {
                                        void 0 === e && (e = {});
                                        var n = e,
                                            r = n.placement,
                                            i = n.boundary,
                                            o = n.rootBoundary,
                                            a = n.padding,
                                            u = n.flipVariations,
                                            s = n.allowedAutoPlacements,
                                            c = void 0 === s ? y : s,
                                            f = gt(r),
                                            p = f ? u ? v : v.filter((function(t) {
                                                return gt(t) === f
                                            })) : l,
                                            h = p.filter((function(t) {
                                                return c.indexOf(t) >= 0
                                            }));
                                        0 === h.length && (h = p);
                                        var d = h.reduce((function(e, n) {
                                            return e[n] = yt(t, {
                                                placement: n,
                                                boundary: i,
                                                rootBoundary: o,
                                                padding: a
                                            })[q(n)], e
                                        }), {});
                                        return Object.keys(d).sort((function(t, e) {
                                            return d[t] - d[e]
                                        }))
                                    }(e, {
                                        placement: n,
                                        boundary: x,
                                        rootBoundary: b,
                                        padding: m,
                                        flipVariations: E,
                                        allowedAutoPlacements: _
                                    }) : n)
                                }), []), C = e.rects.reference, k = e.rects.popper, D = new Map, L = !0, O = N[0], j = 0; j < N.length; j++) {
                                var P = N[j],
                                    R = q(P),
                                    z = gt(P) === c,
                                    H = [i, o].indexOf(R) >= 0,
                                    I = H ? "width" : "height",
                                    F = yt(e, {
                                        placement: P,
                                        boundary: x,
                                        rootBoundary: b,
                                        altBoundary: w,
                                        padding: m
                                    }),
                                    U = H ? z ? a : u : z ? o : i;
                                C[I] > k[I] && (U = it(U));
                                var B = it(U),
                                    W = [];
                                if (p && W.push(F[R] <= 0), d && W.push(F[U] <= 0, F[B] <= 0), W.every((function(t) {
                                        return t
                                    }))) {
                                    O = P, L = !1;
                                    break
                                }
                                D.set(P, W)
                            }
                            if (L)
                                for (var $ = function(t) {
                                        var e = N.find((function(e) {
                                            var n = D.get(e);
                                            if (n) return n.slice(0, t).every((function(t) {
                                                return t
                                            }))
                                        }));
                                        if (e) return O = e, "break"
                                    }, V = E ? 3 : 1; V > 0; V--) {
                                    if ("break" === $(V)) break
                                }
                            e.placement !== O && (e.modifiersData[r]._skip = !0, e.placement = O, e.reset = !0)
                        }
                    },
                    requiresIfExists: ["offset"],
                    data: {
                        _skip: !1
                    }
                };

                function xt(t, e, n) {
                    return void 0 === n && (n = {
                        x: 0,
                        y: 0
                    }), {
                        top: t.top - e.height - n.y,
                        right: t.right - e.width + n.x,
                        bottom: t.bottom - e.height + n.y,
                        left: t.left - e.width - n.x
                    }
                }

                function bt(t) {
                    return [i, a, o, u].some((function(e) {
                        return t[e] >= 0
                    }))
                }
                const wt = {
                    name: "hide",
                    enabled: !0,
                    phase: "main",
                    requiresIfExists: ["preventOverflow"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.name,
                            r = e.rects.reference,
                            i = e.rects.popper,
                            o = e.modifiersData.preventOverflow,
                            a = yt(e, {
                                elementContext: "reference"
                            }),
                            u = yt(e, {
                                altBoundary: !0
                            }),
                            s = xt(a, r),
                            l = xt(u, i, o),
                            c = bt(s),
                            f = bt(l);
                        e.modifiersData[n] = {
                            referenceClippingOffsets: s,
                            popperEscapeOffsets: l,
                            isReferenceHidden: c,
                            hasPopperEscaped: f
                        }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                            "data-popper-reference-hidden": c,
                            "data-popper-escaped": f
                        })
                    }
                };
                const Mt = {
                    name: "offset",
                    enabled: !0,
                    phase: "main",
                    requires: ["popperOffsets"],
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = t.name,
                            o = n.offset,
                            s = void 0 === o ? [0, 0] : o,
                            l = y.reduce((function(t, n) {
                                return t[n] = function(t, e, n) {
                                    var r = q(t),
                                        o = [u, i].indexOf(r) >= 0 ? -1 : 1,
                                        s = "function" == typeof n ? n(Object.assign({}, e, {
                                            placement: t
                                        })) : n,
                                        l = s[0],
                                        c = s[1];
                                    return l = l || 0, c = (c || 0) * o, [u, a].indexOf(r) >= 0 ? {
                                        x: c,
                                        y: l
                                    } : {
                                        x: l,
                                        y: c
                                    }
                                }(n, e.rects, s), t
                            }), {}),
                            c = l[e.placement],
                            f = c.x,
                            p = c.y;
                        null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += f, e.modifiersData.popperOffsets.y += p), e.modifiersData[r] = l
                    }
                };
                const Et = {
                    name: "popperOffsets",
                    enabled: !0,
                    phase: "read",
                    fn: function(t) {
                        var e = t.state,
                            n = t.name;
                        e.modifiersData[n] = vt({
                            reference: e.rects.reference,
                            element: e.rects.popper,
                            strategy: "absolute",
                            placement: e.placement
                        })
                    },
                    data: {}
                };
                const _t = {
                    name: "preventOverflow",
                    enabled: !0,
                    phase: "main",
                    fn: function(t) {
                        var e = t.state,
                            n = t.options,
                            r = t.name,
                            s = n.mainAxis,
                            l = void 0 === s || s,
                            f = n.altAxis,
                            p = void 0 !== f && f,
                            h = n.boundary,
                            d = n.rootBoundary,
                            g = n.altBoundary,
                            v = n.padding,
                            y = n.tether,
                            m = void 0 === y || y,
                            x = n.tetherOffset,
                            b = void 0 === x ? 0 : x,
                            w = yt(e, {
                                boundary: h,
                                rootBoundary: d,
                                padding: v,
                                altBoundary: g
                            }),
                            M = q(e.placement),
                            E = gt(e.placement),
                            _ = !E,
                            A = W(M),
                            T = "x" === A ? "y" : "x",
                            S = e.modifiersData.popperOffsets,
                            N = e.rects.reference,
                            C = e.rects.popper,
                            k = "function" == typeof b ? b(Object.assign({}, e.rects, {
                                placement: e.placement
                            })) : b,
                            D = {
                                x: 0,
                                y: 0
                            };
                        if (S) {
                            if (l || p) {
                                var L = "y" === A ? i : u,
                                    O = "y" === A ? o : a,
                                    j = "y" === A ? "height" : "width",
                                    R = S[A],
                                    z = S[A] + w[L],
                                    H = S[A] - w[O],
                                    I = m ? -C[j] / 2 : 0,
                                    F = E === c ? N[j] : C[j],
                                    U = E === c ? -C[j] : -N[j],
                                    X = e.elements.arrow,
                                    Z = m && X ? P(X) : {
                                        width: 0,
                                        height: 0
                                    },
                                    G = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                        top: 0,
                                        right: 0,
                                        bottom: 0,
                                        left: 0
                                    },
                                    K = G[L],
                                    Q = G[O],
                                    J = Y(0, N[j], Z[j]),
                                    tt = _ ? N[j] / 2 - I - J - K - k : F - J - K - k,
                                    et = _ ? -N[j] / 2 + I + J + Q + k : U + J + Q + k,
                                    nt = e.elements.arrow && B(e.elements.arrow),
                                    rt = nt ? "y" === A ? nt.clientTop || 0 : nt.clientLeft || 0 : 0,
                                    it = e.modifiersData.offset ? e.modifiersData.offset[e.placement][A] : 0,
                                    ot = S[A] + tt - it - rt,
                                    at = S[A] + et - it;
                                if (l) {
                                    var ut = Y(m ? V(z, ot) : z, R, m ? $(H, at) : H);
                                    S[A] = ut, D[A] = ut - R
                                }
                                if (p) {
                                    var st = "x" === A ? i : u,
                                        lt = "x" === A ? o : a,
                                        ct = S[T],
                                        ft = ct + w[st],
                                        pt = ct - w[lt],
                                        ht = Y(m ? V(ft, ot) : ft, ct, m ? $(pt, at) : pt);
                                    S[T] = ht, D[T] = ht - ct
                                }
                            }
                            e.modifiersData[r] = D
                        }
                    },
                    requiresIfExists: ["offset"]
                };

                function At(t, e, n) {
                    void 0 === n && (n = !1);
                    var r, i, o = I(e),
                        a = j(t),
                        u = D(e),
                        s = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        l = {
                            x: 0,
                            y: 0
                        };
                    return (u || !u && !n) && (("body" !== N(e) || lt(o)) && (s = (r = e) !== C(r) && D(r) ? {
                        scrollLeft: (i = r).scrollLeft,
                        scrollTop: i.scrollTop
                    } : ut(r)), D(e) ? ((l = j(e)).x += e.clientLeft, l.y += e.clientTop) : o && (l.x = st(o))), {
                        x: a.left + s.scrollLeft - l.x,
                        y: a.top + s.scrollTop - l.y,
                        width: a.width,
                        height: a.height
                    }
                }

                function Tt(t) {
                    var e = new Map,
                        n = new Set,
                        r = [];

                    function i(t) {
                        n.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach((function(t) {
                            if (!n.has(t)) {
                                var r = e.get(t);
                                r && i(r)
                            }
                        })), r.push(t)
                    }
                    return t.forEach((function(t) {
                        e.set(t.name, t)
                    })), t.forEach((function(t) {
                        n.has(t.name) || i(t)
                    })), r
                }
                var St = {
                    placement: "bottom",
                    modifiers: [],
                    strategy: "absolute"
                };

                function Nt() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    return !e.some((function(t) {
                        return !(t && "function" == typeof t.getBoundingClientRect)
                    }))
                }

                function Ct(t) {
                    void 0 === t && (t = {});
                    var e = t,
                        n = e.defaultModifiers,
                        r = void 0 === n ? [] : n,
                        i = e.defaultOptions,
                        o = void 0 === i ? St : i;
                    return function(t, e, n) {
                        void 0 === n && (n = o);
                        var i, a, u = {
                                placement: "bottom",
                                orderedModifiers: [],
                                options: Object.assign({}, St, o),
                                modifiersData: {},
                                elements: {
                                    reference: t,
                                    popper: e
                                },
                                attributes: {},
                                styles: {}
                            },
                            s = [],
                            l = !1,
                            c = {
                                state: u,
                                setOptions: function(n) {
                                    f(), u.options = Object.assign({}, o, u.options, n), u.scrollParents = {
                                        reference: k(t) ? ft(t) : t.contextElement ? ft(t.contextElement) : [],
                                        popper: ft(e)
                                    };
                                    var i = function(t) {
                                        var e = Tt(t);
                                        return S.reduce((function(t, n) {
                                            return t.concat(e.filter((function(t) {
                                                return t.phase === n
                                            })))
                                        }), [])
                                    }(function(t) {
                                        var e = t.reduce((function(t, e) {
                                            var n = t[e.name];
                                            return t[e.name] = n ? Object.assign({}, n, e, {
                                                options: Object.assign({}, n.options, e.options),
                                                data: Object.assign({}, n.data, e.data)
                                            }) : e, t
                                        }), {});
                                        return Object.keys(e).map((function(t) {
                                            return e[t]
                                        }))
                                    }([].concat(r, u.options.modifiers)));
                                    return u.orderedModifiers = i.filter((function(t) {
                                        return t.enabled
                                    })), u.orderedModifiers.forEach((function(t) {
                                        var e = t.name,
                                            n = t.options,
                                            r = void 0 === n ? {} : n,
                                            i = t.effect;
                                        if ("function" == typeof i) {
                                            var o = i({
                                                    state: u,
                                                    name: e,
                                                    instance: c,
                                                    options: r
                                                }),
                                                a = function() {};
                                            s.push(o || a)
                                        }
                                    })), c.update()
                                },
                                forceUpdate: function() {
                                    if (!l) {
                                        var t = u.elements,
                                            e = t.reference,
                                            n = t.popper;
                                        if (Nt(e, n)) {
                                            u.rects = {
                                                reference: At(e, B(n), "fixed" === u.options.strategy),
                                                popper: P(n)
                                            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach((function(t) {
                                                return u.modifiersData[t.name] = Object.assign({}, t.data)
                                            }));
                                            for (var r = 0; r < u.orderedModifiers.length; r++)
                                                if (!0 !== u.reset) {
                                                    var i = u.orderedModifiers[r],
                                                        o = i.fn,
                                                        a = i.options,
                                                        s = void 0 === a ? {} : a,
                                                        f = i.name;
                                                    "function" == typeof o && (u = o({
                                                        state: u,
                                                        options: s,
                                                        name: f,
                                                        instance: c
                                                    }) || u)
                                                } else u.reset = !1, r = -1
                                        }
                                    }
                                },
                                update: (i = function() {
                                    return new Promise((function(t) {
                                        c.forceUpdate(), t(u)
                                    }))
                                }, function() {
                                    return a || (a = new Promise((function(t) {
                                        Promise.resolve().then((function() {
                                            a = void 0, t(i())
                                        }))
                                    }))), a
                                }),
                                destroy: function() {
                                    f(), l = !0
                                }
                            };
                        if (!Nt(t, e)) return c;

                        function f() {
                            s.forEach((function(t) {
                                return t()
                            })), s = []
                        }
                        return c.setOptions(n).then((function(t) {
                            !l && n.onFirstUpdate && n.onFirstUpdate(t)
                        })), c
                    }
                }
                var kt = Ct(),
                    Dt = Ct({
                        defaultModifiers: [nt, Et, tt, O, Mt, mt, _t, K, wt]
                    }),
                    Lt = Ct({
                        defaultModifiers: [nt, Et, tt, O]
                    }),
                    Ot = n(147);
                const qt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
                    jt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
                    Pt = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
                    Rt = (t, e) => {
                        const n = t.nodeName.toLowerCase();
                        if (e.includes(n)) return !qt.has(n) || Boolean(jt.test(t.nodeValue) || Pt.test(t.nodeValue));
                        const r = e.filter((t => t instanceof RegExp));
                        for (let t = 0, e = r.length; t < e; t++)
                            if (r[t].test(n)) return !0;
                        return !1
                    },
                    zt = {
                        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
                        a: ["target", "href", "title", "rel"],
                        area: [],
                        b: [],
                        br: [],
                        col: [],
                        code: [],
                        div: [],
                        em: [],
                        hr: [],
                        h1: [],
                        h2: [],
                        h3: [],
                        h4: [],
                        h5: [],
                        h6: [],
                        i: [],
                        img: ["src", "srcset", "alt", "title", "width", "height"],
                        li: [],
                        ol: [],
                        p: [],
                        pre: [],
                        s: [],
                        small: [],
                        span: [],
                        sub: [],
                        sup: [],
                        strong: [],
                        u: [],
                        ul: []
                    };

                function Ht(t, e, n) {
                    if (!t.length) return t;
                    if (n && "function" == typeof n) return n(t);
                    const r = (new window.DOMParser).parseFromString(t, "text/html"),
                        i = Object.keys(e),
                        o = [].concat(...r.body.querySelectorAll("*"));
                    for (let t = 0, n = o.length; t < n; t++) {
                        const n = o[t],
                            r = n.nodeName.toLowerCase();
                        if (!i.includes(r)) {
                            n.parentNode.removeChild(n);
                            continue
                        }
                        const a = [].concat(...n.attributes),
                            u = [].concat(e["*"] || [], e[r] || []);
                        a.forEach((t => {
                            Rt(t, u) || n.removeAttribute(t.nodeName)
                        }))
                    }
                    return r.body.innerHTML
                }
                var It = n(385);
                const Ft = /[^.]*(?=\..*)\.|.*/,
                    Ut = /\..*/,
                    Bt = /::\d+$/,
                    Wt = {};
                let $t = 1;
                const Vt = {
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    },
                    Xt = /^(mouseenter|mouseleave)/i,
                    Yt = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

                function Zt(t, e) {
                    return e && `${e}::${$t++}` || t.uidEvent || $t++
                }

                function Gt(t) {
                    const e = Zt(t);
                    return t.uidEvent = e, Wt[e] = Wt[e] || {}, Wt[e]
                }

                function Kt(t, e, n = null) {
                    const r = Object.keys(t);
                    for (let i = 0, o = r.length; i < o; i++) {
                        const o = t[r[i]];
                        if (o.originalHandler === e && o.delegationSelector === n) return o
                    }
                    return null
                }

                function Qt(t, e, n) {
                    const r = "string" == typeof e,
                        i = r ? n : e;
                    let o = ee(t);
                    return Yt.has(o) || (o = t), [r, i, o]
                }

                function Jt(t, e, n, r, i) {
                    if ("string" != typeof e || !t) return;
                    if (n || (n = r, r = null), Xt.test(e)) {
                        const t = t => function(e) {
                            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e)
                        };
                        r ? r = t(r) : n = t(n)
                    }
                    const [o, a, u] = Qt(e, n, r), s = Gt(t), l = s[u] || (s[u] = {}), c = Kt(l, a, o ? n : null);
                    if (c) return void(c.oneOff = c.oneOff && i);
                    const f = Zt(a, e.replace(Ft, "")),
                        p = o ? function(t, e, n) {
                            return function r(i) {
                                const o = t.querySelectorAll(e);
                                for (let {
                                        target: a
                                    } = i; a && a !== this; a = a.parentNode)
                                    for (let u = o.length; u--;)
                                        if (o[u] === a) return i.delegateTarget = a, r.oneOff && ne.off(t, i.type, e, n), n.apply(a, [i]);
                                return null
                            }
                        }(t, n, r) : function(t, e) {
                            return function n(r) {
                                return r.delegateTarget = t, n.oneOff && ne.off(t, r.type, e), e.apply(t, [r])
                            }
                        }(t, n);
                    p.delegationSelector = o ? n : null, p.originalHandler = a, p.oneOff = i, p.uidEvent = f, l[f] = p, t.addEventListener(u, p, o)
                }

                function te(t, e, n, r, i) {
                    const o = Kt(e[n], r, i);
                    o && (t.removeEventListener(n, o, Boolean(i)), delete e[n][o.uidEvent])
                }

                function ee(t) {
                    return t = t.replace(Ut, ""), Vt[t] || t
                }
                const ne = {
                        on(t, e, n, r) {
                            Jt(t, e, n, r, !1)
                        },
                        one(t, e, n, r) {
                            Jt(t, e, n, r, !0)
                        },
                        off(t, e, n, r) {
                            if ("string" != typeof e || !t) return;
                            const [i, o, a] = Qt(e, n, r), u = a !== e, s = Gt(t), l = e.startsWith(".");
                            if (void 0 !== o) {
                                if (!s || !s[a]) return;
                                return void te(t, s, a, o, i ? n : null)
                            }
                            l && Object.keys(s).forEach((n => {
                                ! function(t, e, n, r) {
                                    const i = e[n] || {};
                                    Object.keys(i).forEach((o => {
                                        if (o.includes(r)) {
                                            const r = i[o];
                                            te(t, e, n, r.originalHandler, r.delegationSelector)
                                        }
                                    }))
                                }(t, s, n, e.slice(1))
                            }));
                            const c = s[a] || {};
                            Object.keys(c).forEach((n => {
                                const r = n.replace(Bt, "");
                                if (!u || e.includes(r)) {
                                    const e = c[n];
                                    te(t, s, a, e.originalHandler, e.delegationSelector)
                                }
                            }))
                        },
                        trigger(t, e, n) {
                            if ("string" != typeof e || !t) return null;
                            const r = (0, Ot.KF)(),
                                i = ee(e),
                                o = e !== i,
                                a = Yt.has(i);
                            let u, s = !0,
                                l = !0,
                                c = !1,
                                f = null;
                            return o && r && (u = r.Event(e, n), r(t).trigger(u), s = !u.isPropagationStopped(), l = !u.isImmediatePropagationStopped(), c = u.isDefaultPrevented()), a ? (f = document.createEvent("HTMLEvents"), f.initEvent(i, s, !0)) : f = new CustomEvent(e, {
                                bubbles: s,
                                cancelable: !0
                            }), void 0 !== n && Object.keys(n).forEach((t => {
                                Object.defineProperty(f, t, {
                                    get: () => n[t]
                                })
                            })), c && f.preventDefault(), l && t.dispatchEvent(f), f.defaultPrevented && void 0 !== u && u.preventDefault(), f
                        }
                    },
                    re = ne;

                function ie(t) {
                    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
                }

                function oe(t) {
                    return t.replace(/[A-Z]/g, (t => `-${t.toLowerCase()}`))
                }
                const ae = {
                    setDataAttribute(t, e, n) {
                        t.setAttribute(`data-bs-${oe(e)}`, n)
                    },
                    removeDataAttribute(t, e) {
                        t.removeAttribute(`data-bs-${oe(e)}`)
                    },
                    getDataAttributes(t) {
                        if (!t) return {};
                        const e = {};
                        return Object.keys(t.dataset).filter((t => t.startsWith("bs"))).forEach((n => {
                            let r = n.replace(/^bs/, "");
                            r = r.charAt(0).toLowerCase() + r.slice(1, r.length), e[r] = ie(t.dataset[n])
                        })), e
                    },
                    getDataAttribute: (t, e) => ie(t.getAttribute(`data-bs-${oe(e)}`)),
                    offset(t) {
                        const e = t.getBoundingClientRect();
                        return {
                            top: e.top + document.body.scrollTop,
                            left: e.left + document.body.scrollLeft
                        }
                    },
                    position: t => ({
                        top: t.offsetTop,
                        left: t.offsetLeft
                    })
                };
                var ue = n(357);
                const se = class {
                        constructor(t) {
                            (t = (0, Ot.sb)(t)) && (this._element = t, It.Z.set(this._element, this.constructor.DATA_KEY, this))
                        }
                        dispose() {
                            It.Z.remove(this._element, this.constructor.DATA_KEY), re.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach((t => {
                                this[t] = null
                            }))
                        }
                        _queueCallback(t, e, n = !0) {
                            if (!n) return void(0, Ot.ht)(t);
                            const r = (0, Ot.AD)(e);
                            re.one(e, "transitionend", (() => (0, Ot.ht)(t))), (0, Ot.rW)(e, r)
                        }
                        static getInstance(t) {
                            return It.Z.get(t, this.DATA_KEY)
                        }
                        static get VERSION() {
                            return "5.0.1"
                        }
                        static get NAME() {
                            throw new Error('You have to implement the static method "NAME", for each component!')
                        }
                        static get DATA_KEY() {
                            return `bs.${this.NAME}`
                        }
                        static get EVENT_KEY() {
                            return `.${this.DATA_KEY}`
                        }
                    },
                    le = "tooltip",
                    ce = "bs.tooltip",
                    fe = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
                    pe = new Set(["sanitize", "allowList", "sanitizeFn"]),
                    he = {
                        animation: "boolean",
                        template: "string",
                        title: "(string|element|function)",
                        trigger: "string",
                        delay: "(number|object)",
                        html: "boolean",
                        selector: "(string|boolean)",
                        placement: "(string|function)",
                        offset: "(array|string|function)",
                        container: "(string|element|boolean)",
                        fallbackPlacements: "array",
                        boundary: "(string|element)",
                        customClass: "(string|function)",
                        sanitize: "boolean",
                        sanitizeFn: "(null|function)",
                        allowList: "object",
                        popperConfig: "(null|object|function)"
                    },
                    de = {
                        AUTO: "auto",
                        TOP: "top",
                        RIGHT: (0, Ot.dZ)() ? "left" : "right",
                        BOTTOM: "bottom",
                        LEFT: (0, Ot.dZ)() ? "right" : "left"
                    },
                    ge = {
                        animation: !0,
                        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                        trigger: "hover focus",
                        title: "",
                        delay: 0,
                        html: !1,
                        selector: !1,
                        placement: "top",
                        offset: [0, 0],
                        container: !1,
                        fallbackPlacements: ["top", "right", "bottom", "left"],
                        boundary: "clippingParents",
                        customClass: "",
                        sanitize: !0,
                        sanitizeFn: null,
                        allowList: zt,
                        popperConfig: null
                    },
                    ve = {
                        HIDE: "hide.bs.tooltip",
                        HIDDEN: "hidden.bs.tooltip",
                        SHOW: "show.bs.tooltip",
                        SHOWN: "shown.bs.tooltip",
                        INSERTED: "inserted.bs.tooltip",
                        CLICK: "click.bs.tooltip",
                        FOCUSIN: "focusin.bs.tooltip",
                        FOCUSOUT: "focusout.bs.tooltip",
                        MOUSEENTER: "mouseenter.bs.tooltip",
                        MOUSELEAVE: "mouseleave.bs.tooltip"
                    },
                    ye = "fade",
                    me = "show",
                    xe = "show",
                    be = "out",
                    we = "hover",
                    Me = "focus";
                class Ee extends se {
                    constructor(t, e) {
                        if (void 0 === r) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
                        super(t), this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this._config = this._getConfig(e), this.tip = null, this._setListeners()
                    }
                    static get Default() {
                        return ge
                    }
                    static get NAME() {
                        return le
                    }
                    static get Event() {
                        return ve
                    }
                    static get DefaultType() {
                        return he
                    }
                    enable() {
                        this._isEnabled = !0
                    }
                    disable() {
                        this._isEnabled = !1
                    }
                    toggleEnabled() {
                        this._isEnabled = !this._isEnabled
                    }
                    toggle(t) {
                        if (this._isEnabled)
                            if (t) {
                                const e = this._initializeOnDelegatedTarget(t);
                                e._activeTrigger.click = !e._activeTrigger.click, e._isWithActiveTrigger() ? e._enter(null, e) : e._leave(null, e)
                            } else {
                                if (this.getTipElement().classList.contains(me)) return void this._leave(null, this);
                                this._enter(null, this)
                            }
                    }
                    dispose() {
                        clearTimeout(this._timeout), re.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), super.dispose()
                    }
                    show() {
                        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
                        if (!this.isWithContent() || !this._isEnabled) return;
                        const t = re.trigger(this._element, this.constructor.Event.SHOW),
                            e = (0, Ot.L8)(this._element),
                            n = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
                        if (t.defaultPrevented || !n) return;
                        const r = this.getTipElement(),
                            i = (0, Ot.Kr)(this.constructor.NAME);
                        r.setAttribute("id", i), this._element.setAttribute("aria-describedby", i), this.setContent(), this._config.animation && r.classList.add(ye);
                        const o = "function" == typeof this._config.placement ? this._config.placement.call(this, r, this._element) : this._config.placement,
                            a = this._getAttachment(o);
                        this._addAttachmentClass(a);
                        const {
                            container: u
                        } = this._config;
                        It.Z.set(r, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (u.appendChild(r), re.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Dt(this._element, r, this._getPopperConfig(a)), r.classList.add(me);
                        const s = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
                        s && r.classList.add(...s.split(" ")), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => {
                            re.on(t, "mouseover", Ot.ZT)
                        }));
                        const l = this.tip.classList.contains(ye);
                        this._queueCallback((() => {
                            const t = this._hoverState;
                            this._hoverState = null, re.trigger(this._element, this.constructor.Event.SHOWN), t === be && this._leave(null, this)
                        }), this.tip, l)
                    }
                    hide() {
                        if (!this._popper) return;
                        const t = this.getTipElement();
                        if (re.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
                        t.classList.remove(me), "ontouchstart" in document.documentElement && [].concat(...document.body.children).forEach((t => re.off(t, "mouseover", Ot.ZT))), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
                        const e = this.tip.classList.contains(ye);
                        this._queueCallback((() => {
                            this._isWithActiveTrigger() || (this._hoverState !== xe && t.parentNode && t.parentNode.removeChild(t), this._cleanTipClass(), this._element.removeAttribute("aria-describedby"), re.trigger(this._element, this.constructor.Event.HIDDEN), this._popper && (this._popper.destroy(), this._popper = null))
                        }), this.tip, e), this._hoverState = ""
                    }
                    update() {
                        null !== this._popper && this._popper.update()
                    }
                    isWithContent() {
                        return Boolean(this.getTitle())
                    }
                    getTipElement() {
                        if (this.tip) return this.tip;
                        const t = document.createElement("div");
                        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip
                    }
                    setContent() {
                        const t = this.getTipElement();
                        this.setElementContent(ue.Z.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove(ye, me)
                    }
                    setElementContent(t, e) {
                        if (null !== t) return (0, Ot.kK)(e) ? (e = (0, Ot.sb)(e), void(this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this._config.html ? (this._config.sanitize && (e = Ht(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
                    }
                    getTitle() {
                        let t = this._element.getAttribute("data-bs-original-title");
                        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t
                    }
                    updateAttachment(t) {
                        return "right" === t ? "end" : "left" === t ? "start" : t
                    }
                    _initializeOnDelegatedTarget(t, e) {
                        const n = this.constructor.DATA_KEY;
                        return (e = e || It.Z.get(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), It.Z.set(t.delegateTarget, n, e)), e
                    }
                    _getOffset() {
                        const {
                            offset: t
                        } = this._config;
                        return "string" == typeof t ? t.split(",").map((t => Number.parseInt(t, 10))) : "function" == typeof t ? e => t(e, this._element) : t
                    }
                    _getPopperConfig(t) {
                        const e = {
                            placement: t,
                            modifiers: [{
                                name: "flip",
                                options: {
                                    fallbackPlacements: this._config.fallbackPlacements
                                }
                            }, {
                                name: "offset",
                                options: {
                                    offset: this._getOffset()
                                }
                            }, {
                                name: "preventOverflow",
                                options: {
                                    boundary: this._config.boundary
                                }
                            }, {
                                name: "arrow",
                                options: {
                                    element: `.${this.constructor.NAME}-arrow`
                                }
                            }, {
                                name: "onChange",
                                enabled: !0,
                                phase: "afterWrite",
                                fn: t => this._handlePopperPlacementChange(t)
                            }],
                            onFirstUpdate: t => {
                                t.options.placement !== t.placement && this._handlePopperPlacementChange(t)
                            }
                        };
                        return {
                            ...e,
                            ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
                        }
                    }
                    _addAttachmentClass(t) {
                        this.getTipElement().classList.add(`bs-tooltip-${this.updateAttachment(t)}`)
                    }
                    _getAttachment(t) {
                        return de[t.toUpperCase()]
                    }
                    _setListeners() {
                        this._config.trigger.split(" ").forEach((t => {
                            if ("click" === t) re.on(this._element, this.constructor.Event.CLICK, this._config.selector, (t => this.toggle(t)));
                            else if ("manual" !== t) {
                                const e = t === we ? this.constructor.Event.MOUSEENTER : this.constructor.Event.FOCUSIN,
                                    n = t === we ? this.constructor.Event.MOUSELEAVE : this.constructor.Event.FOCUSOUT;
                                re.on(this._element, e, this._config.selector, (t => this._enter(t))), re.on(this._element, n, this._config.selector, (t => this._leave(t)))
                            }
                        })), this._hideModalHandler = () => {
                            this._element && this.hide()
                        }, re.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = {
                            ...this._config,
                            trigger: "manual",
                            selector: ""
                        } : this._fixTitle()
                    }
                    _fixTitle() {
                        const t = this._element.getAttribute("title"),
                            e = typeof this._element.getAttribute("data-bs-original-title");
                        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""))
                    }
                    _enter(t, e) {
                        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? Me : we] = !0), e.getTipElement().classList.contains(me) || e._hoverState === xe ? e._hoverState = xe : (clearTimeout(e._timeout), e._hoverState = xe, e._config.delay && e._config.delay.show ? e._timeout = setTimeout((() => {
                            e._hoverState === xe && e.show()
                        }), e._config.delay.show) : e.show())
                    }
                    _leave(t, e) {
                        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? Me : we] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = be, e._config.delay && e._config.delay.hide ? e._timeout = setTimeout((() => {
                            e._hoverState === be && e.hide()
                        }), e._config.delay.hide) : e.hide())
                    }
                    _isWithActiveTrigger() {
                        for (const t in this._activeTrigger)
                            if (this._activeTrigger[t]) return !0;
                        return !1
                    }
                    _getConfig(t) {
                        const e = ae.getDataAttributes(this._element);
                        return Object.keys(e).forEach((t => {
                            pe.has(t) && delete e[t]
                        })), (t = {
                            ...this.constructor.Default,
                            ...e,
                            ..."object" == typeof t && t ? t : {}
                        }).container = !1 === t.container ? document.body : (0, Ot.sb)(t.container), "number" == typeof t.delay && (t.delay = {
                            show: t.delay,
                            hide: t.delay
                        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), (0, Ot.zE)(le, t, this.constructor.DefaultType), t.sanitize && (t.template = Ht(t.template, t.allowList, t.sanitizeFn)), t
                    }
                    _getDelegateConfig() {
                        const t = {};
                        if (this._config)
                            for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
                        return t
                    }
                    _cleanTipClass() {
                        const t = this.getTipElement(),
                            e = t.getAttribute("class").match(fe);
                        null !== e && e.length > 0 && e.map((t => t.trim())).forEach((e => t.classList.remove(e)))
                    }
                    _handlePopperPlacementChange(t) {
                        const {
                            state: e
                        } = t;
                        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)))
                    }
                    static jQueryInterface(t) {
                        return this.each((function() {
                            let e = It.Z.get(this, ce);
                            const n = "object" == typeof t && t;
                            if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ee(this, n)), "string" == typeof t)) {
                                if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
                                e[t]()
                            }
                        }))
                    }
                }(0, Ot.pF)(Ee);
                const _e = Ee
            },
            147: (t, e, n) => {
                "use strict";
                n.d(e, {
                    sb: () => s,
                    Kr: () => o,
                    AD: () => a,
                    kK: () => u,
                    rW: () => l,
                    zE: () => c,
                    L8: () => f,
                    ZT: () => p,
                    KF: () => h,
                    dZ: () => d,
                    pF: () => g,
                    ht: () => v
                });
                var r = n(357);
                const i = "transitionend",
                    o = t => {
                        do {
                            t += Math.floor(1e6 * Math.random())
                        } while (document.getElementById(t));
                        return t
                    },
                    a = t => {
                        if (!t) return 0;
                        let {
                            transitionDuration: e,
                            transitionDelay: n
                        } = window.getComputedStyle(t);
                        const r = Number.parseFloat(e),
                            i = Number.parseFloat(n);
                        return r || i ? (e = e.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(n))) : 0
                    },
                    u = t => !(!t || "object" != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
                    s = t => u(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? r.Z.findOne(t) : null,
                    l = (t, e) => {
                        let n = !1;
                        const r = e + 5;
                        t.addEventListener(i, (function e() {
                            n = !0, t.removeEventListener(i, e)
                        })), setTimeout((() => {
                            n || (t => {
                                t.dispatchEvent(new Event(i))
                            })(t)
                        }), r)
                    },
                    c = (t, e, n) => {
                        Object.keys(n).forEach((r => {
                            const i = n[r],
                                o = e[r],
                                a = o && u(o) ? "element" : null == (s = o) ? `${s}` : {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase();
                            var s;
                            if (!new RegExp(i).test(a)) throw new TypeError(`${t.toUpperCase()}: Option "${r}" provided type "${a}" but expected type "${i}".`)
                        }))
                    },
                    f = t => {
                        if (!document.documentElement.attachShadow) return null;
                        if ("function" == typeof t.getRootNode) {
                            const e = t.getRootNode();
                            return e instanceof ShadowRoot ? e : null
                        }
                        return t instanceof ShadowRoot ? t : t.parentNode ? f(t.parentNode) : null
                    },
                    p = () => {},
                    h = () => {
                        const {
                            jQuery: t
                        } = window;
                        return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null
                    },
                    d = () => "rtl" === document.documentElement.dir,
                    g = t => {
                        var e;
                        e = () => {
                            const e = h();
                            if (e) {
                                const n = t.NAME,
                                    r = e.fn[n];
                                e.fn[n] = t.jQueryInterface, e.fn[n].Constructor = t, e.fn[n].noConflict = () => (e.fn[n] = r, t.jQueryInterface)
                            }
                        }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e()
                    },
                    v = t => {
                        "function" == typeof t && t()
                    }
            },
            174: (t, e, n) => {
                "use strict";
                n.d(e, {
                    Z: () => o
                });
                var r = n(645),
                    i = n.n(r)()((function(t) {
                        return t[1]
                    }));
                i.push([t.id, '.variant{\r\n    stroke:rgba(0,255,154,0.6);\r\n    stroke-width:1px;\r\n}\r\n\r\na:focus {\r\n    outline:0 !important;\r\n}\r\n\r\n.active {\r\n    z-index: 1;\r\n}\r\n.brush .extent{\r\n    stroke: #fff;\r\n    fill-opacity: .125;\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n\r\n.point {\r\n    fill: #2f225d;\r\n    stroke: #afa2dc;\r\n}\r\n\r\n.selected {\r\n    fill: #afa2dc;\r\n    stroke: #2f225d;\r\n}\r\n\r\n.clear-button {\r\n    font: 14px sans-serif;\r\n    cursor: pointer;\r\n}\r\n\r\n.axis path,\r\n.axis line {\r\n    fill: none;\r\n    stroke: #000;\r\n    shape-rendering: crispEdges;\r\n}\r\n\r\n.axis {\r\n    font: 10px sans-serif;\r\n}\r\n.d3-tip {\r\n    line-height: 1;\r\n    font-weight: bold;\r\n    padding: 12px;\r\n/*    background: rgba(0, 0, 0, 0.8);*/\r\n    background: #eee;\r\n/*    color: #fff;*/\r\n    color: black;\r\n    border-radius: 2px;\r\n}\r\n\r\n/*Creates a small triangle extender for the tooltip - left*/\r\n.tooltip2:after {\r\n    box-sizing: border-box;\r\n    display: inline;\r\n    font-size: 10px;\r\n    width: 100%;\r\n    line-height: 1;\r\n    color: #eee;\r\n    content: "\\25BC";\r\n    position: absolute;\r\n    text-align: left;\r\n    margin: -1px 0 0 0;\r\n    bottom: -8px;\r\n    left: 10px;\r\n    z-index:11;\r\n}\r\n/*Creates a small triangle extender for the tooltip - left */\r\n.tooltip2:before {\r\n    box-sizing: border-box;\r\n    display: inline;\r\n    font-size: 10px;\r\n    width: 100%;\r\n    line-height: 1;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    content: "\\25BC";\r\n    position: absolute;\r\n    text-align: left;\r\n    margin: -1px 0 0 0;\r\n    bottom: -9px;\r\n    left: 10px;\r\n    z-index:10;\r\n}\r\n.tooltip3:after {\r\n    box-sizing: border-box;\r\n    display: inline;\r\n    font-size: 10px;\r\n    width: 100%;\r\n    line-height: 1;\r\n    color: #eee;\r\n    content: "\\25BC";\r\n    position: absolute;\r\n    text-align: right;\r\n    margin: -1px 0 0 0;\r\n    bottom: -8px;\r\n    right: 10px;\r\n    z-index:11;\r\n}\r\n.tooltip3:before {\r\n    box-sizing: border-box;\r\n    display: inline;\r\n    font-size: 10px;\r\n    width: 100%;\r\n    line-height: 1;\r\n    color: rgba(0, 0, 0, 0.6);\r\n    content: "\\25BC";\r\n    position: absolute;\r\n    text-align: right;\r\n    margin: -1px 0 0 0;\r\n    bottom: -9px;\r\n    right: 10px;\r\n    z-index:10;\r\n}\r\n\r\n.yaxis{\r\n    background-color:green;\r\n}\r\n\r\n.header-help{\r\n/*    color: #C50063;*/\r\n/*\r\n    color: #108D9F;\r\n    border-color:#0F8292;\r\n*/\r\n}\r\n.header-help .state{\r\n    min-width:26px;\r\n    display:inline-block;\r\n}\r\n\r\n.header-help:hover{\r\n/*    color: #98004C;*/\r\n/*    color: #0F8292;*/\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n}\r\n\r\n.header-help:focus{\r\n/*    color: #0F8292;*/\r\n}\r\n\r\n.popover-title{\r\n    text-align: center;\r\n/*    background-color: rgba(197, 0, 99, 0.1);*/\r\n}\r\n\r\n.label-as-badge {\r\n/*\r\n    border-radius: 1em;\r\n    font-size:0.7em;\r\n*/\r\n/*    background-color: #C50063;*/\r\n}\r\n\r\npath.domain {\r\n    fill:none;\r\n}\r\n\r\nrect{\r\n    rx:2;\r\n}\r\n', ""]);
                const o = i
            },
            645: t => {
                "use strict";
                t.exports = function(t) {
                    var e = [];
                    return e.toString = function() {
                        return this.map((function(e) {
                            var n = t(e);
                            return e[2] ? "@media ".concat(e[2], " {").concat(n, "}") : n
                        })).join("")
                    }, e.i = function(t, n, r) {
                        "string" == typeof t && (t = [
                            [null, t, ""]
                        ]);
                        var i = {};
                        if (r)
                            for (var o = 0; o < this.length; o++) {
                                var a = this[o][0];
                                null != a && (i[a] = !0)
                            }
                        for (var u = 0; u < t.length; u++) {
                            var s = [].concat(t[u]);
                            r && i[s[0]] || (n && (s[2] ? s[2] = "".concat(n, " and ").concat(s[2]) : s[2] = n), e.push(s))
                        }
                    }, e
                }
            },
            78: (t, e, n) => {
                var r, i;
                ! function() {
                    var o = {
                            version: "3.5.6"
                        },
                        a = [].slice,
                        u = function(t) {
                            return a.call(t)
                        },
                        s = this.document;

                    function l(t) {
                        return t && (t.ownerDocument || t.document || t).documentElement
                    }

                    function c(t) {
                        return t && (t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView)
                    }
                    if (s) try {
                        u(s.documentElement.childNodes)[0].nodeType
                    } catch (t) {
                        u = function(t) {
                            for (var e = t.length, n = new Array(e); e--;) n[e] = t[e];
                            return n
                        }
                    }
                    if (Date.now || (Date.now = function() {
                            return +new Date
                        }), s) try {
                        s.createElement("DIV").style.setProperty("opacity", 0, "")
                    } catch (t) {
                        var f = this.Element.prototype,
                            p = f.setAttribute,
                            h = f.setAttributeNS,
                            d = this.CSSStyleDeclaration.prototype,
                            g = d.setProperty;
                        f.setAttribute = function(t, e) {
                            p.call(this, t, e + "")
                        }, f.setAttributeNS = function(t, e, n) {
                            h.call(this, t, e, n + "")
                        }, d.setProperty = function(t, e, n) {
                            g.call(this, t, e + "", n)
                        }
                    }

                    function v(t, e) {
                        return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN
                    }

                    function y(t) {
                        return null === t ? NaN : +t
                    }

                    function m(t) {
                        return !isNaN(t)
                    }

                    function x(t) {
                        return {
                            left: function(e, n, r, i) {
                                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); r < i;) {
                                    var o = r + i >>> 1;
                                    t(e[o], n) < 0 ? r = o + 1 : i = o
                                }
                                return r
                            },
                            right: function(e, n, r, i) {
                                for (arguments.length < 3 && (r = 0), arguments.length < 4 && (i = e.length); r < i;) {
                                    var o = r + i >>> 1;
                                    t(e[o], n) > 0 ? i = o : r = o + 1
                                }
                                return r
                            }
                        }
                    }
                    o.ascending = v, o.descending = function(t, e) {
                        return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN
                    }, o.min = function(t, e) {
                        var n, r, i = -1,
                            o = t.length;
                        if (1 === arguments.length) {
                            for (; ++i < o;)
                                if (null != (r = t[i]) && r >= r) {
                                    n = r;
                                    break
                                } for (; ++i < o;) null != (r = t[i]) && n > r && (n = r)
                        } else {
                            for (; ++i < o;)
                                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                                    n = r;
                                    break
                                } for (; ++i < o;) null != (r = e.call(t, t[i], i)) && n > r && (n = r)
                        }
                        return n
                    }, o.max = function(t, e) {
                        var n, r, i = -1,
                            o = t.length;
                        if (1 === arguments.length) {
                            for (; ++i < o;)
                                if (null != (r = t[i]) && r >= r) {
                                    n = r;
                                    break
                                } for (; ++i < o;) null != (r = t[i]) && r > n && (n = r)
                        } else {
                            for (; ++i < o;)
                                if (null != (r = e.call(t, t[i], i)) && r >= r) {
                                    n = r;
                                    break
                                } for (; ++i < o;) null != (r = e.call(t, t[i], i)) && r > n && (n = r)
                        }
                        return n
                    }, o.extent = function(t, e) {
                        var n, r, i, o = -1,
                            a = t.length;
                        if (1 === arguments.length) {
                            for (; ++o < a;)
                                if (null != (r = t[o]) && r >= r) {
                                    n = i = r;
                                    break
                                } for (; ++o < a;) null != (r = t[o]) && (n > r && (n = r), i < r && (i = r))
                        } else {
                            for (; ++o < a;)
                                if (null != (r = e.call(t, t[o], o)) && r >= r) {
                                    n = i = r;
                                    break
                                } for (; ++o < a;) null != (r = e.call(t, t[o], o)) && (n > r && (n = r), i < r && (i = r))
                        }
                        return [n, i]
                    }, o.sum = function(t, e) {
                        var n, r = 0,
                            i = t.length,
                            o = -1;
                        if (1 === arguments.length)
                            for (; ++o < i;) m(n = +t[o]) && (r += n);
                        else
                            for (; ++o < i;) m(n = +e.call(t, t[o], o)) && (r += n);
                        return r
                    }, o.mean = function(t, e) {
                        var n, r = 0,
                            i = t.length,
                            o = -1,
                            a = i;
                        if (1 === arguments.length)
                            for (; ++o < i;) m(n = y(t[o])) ? r += n : --a;
                        else
                            for (; ++o < i;) m(n = y(e.call(t, t[o], o))) ? r += n : --a;
                        if (a) return r / a
                    }, o.quantile = function(t, e) {
                        var n = (t.length - 1) * e + 1,
                            r = Math.floor(n),
                            i = +t[r - 1],
                            o = n - r;
                        return o ? i + o * (t[r] - i) : i
                    }, o.median = function(t, e) {
                        var n, r = [],
                            i = t.length,
                            a = -1;
                        if (1 === arguments.length)
                            for (; ++a < i;) m(n = y(t[a])) && r.push(n);
                        else
                            for (; ++a < i;) m(n = y(e.call(t, t[a], a))) && r.push(n);
                        if (r.length) return o.quantile(r.sort(v), .5)
                    }, o.variance = function(t, e) {
                        var n, r, i = t.length,
                            o = 0,
                            a = 0,
                            u = -1,
                            s = 0;
                        if (1 === arguments.length)
                            for (; ++u < i;) m(n = y(t[u])) && (a += (r = n - o) * (n - (o += r / ++s)));
                        else
                            for (; ++u < i;) m(n = y(e.call(t, t[u], u))) && (a += (r = n - o) * (n - (o += r / ++s)));
                        if (s > 1) return a / (s - 1)
                    }, o.deviation = function() {
                        var t = o.variance.apply(this, arguments);
                        return t ? Math.sqrt(t) : t
                    };
                    var b = x(v);

                    function w(t) {
                        return t.length
                    }
                    o.bisectLeft = b.left, o.bisect = o.bisectRight = b.right, o.bisector = function(t) {
                        return x(1 === t.length ? function(e, n) {
                            return v(t(e), n)
                        } : t)
                    }, o.shuffle = function(t, e, n) {
                        (o = arguments.length) < 3 && (n = t.length, o < 2 && (e = 0));
                        for (var r, i, o = n - e; o;) i = Math.random() * o-- | 0, r = t[o + e], t[o + e] = t[i + e], t[i + e] = r;
                        return t
                    }, o.permute = function(t, e) {
                        for (var n = e.length, r = new Array(n); n--;) r[n] = t[e[n]];
                        return r
                    }, o.pairs = function(t) {
                        for (var e = 0, n = t.length - 1, r = t[0], i = new Array(n < 0 ? 0 : n); e < n;) i[e] = [r, r = t[++e]];
                        return i
                    }, o.zip = function() {
                        if (!(r = arguments.length)) return [];
                        for (var t = -1, e = o.min(arguments, w), n = new Array(e); ++t < e;)
                            for (var r, i = -1, a = n[t] = new Array(r); ++i < r;) a[i] = arguments[i][t];
                        return n
                    }, o.transpose = function(t) {
                        return o.zip.apply(o, t)
                    }, o.keys = function(t) {
                        var e = [];
                        for (var n in t) e.push(n);
                        return e
                    }, o.values = function(t) {
                        var e = [];
                        for (var n in t) e.push(t[n]);
                        return e
                    }, o.entries = function(t) {
                        var e = [];
                        for (var n in t) e.push({
                            key: n,
                            value: t[n]
                        });
                        return e
                    }, o.merge = function(t) {
                        for (var e, n, r, i = t.length, o = -1, a = 0; ++o < i;) a += t[o].length;
                        for (n = new Array(a); --i >= 0;)
                            for (e = (r = t[i]).length; --e >= 0;) n[--a] = r[e];
                        return n
                    };
                    var M = Math.abs;

                    function E(t) {
                        for (var e = 1; t * e % 1;) e *= 10;
                        return e
                    }

                    function _(t, e) {
                        for (var n in e) Object.defineProperty(t.prototype, n, {
                            value: e[n],
                            enumerable: !1
                        })
                    }

                    function A() {
                        this._ = Object.create(null)
                    }
                    o.range = function(t, e, n) {
                        if (arguments.length < 3 && (n = 1, arguments.length < 2 && (e = t, t = 0)), (e - t) / n == 1 / 0) throw new Error("infinite range");
                        var r, i = [],
                            o = E(M(n)),
                            a = -1;
                        if (t *= o, e *= o, (n *= o) < 0)
                            for (;
                                (r = t + n * ++a) > e;) i.push(r / o);
                        else
                            for (;
                                (r = t + n * ++a) < e;) i.push(r / o);
                        return i
                    }, o.map = function(t, e) {
                        var n = new A;
                        if (t instanceof A) t.forEach((function(t, e) {
                            n.set(t, e)
                        }));
                        else if (Array.isArray(t)) {
                            var r, i = -1,
                                o = t.length;
                            if (1 === arguments.length)
                                for (; ++i < o;) n.set(i, t[i]);
                            else
                                for (; ++i < o;) n.set(e.call(t, r = t[i], i), r)
                        } else
                            for (var a in t) n.set(a, t[a]);
                        return n
                    };

                    function T(t) {
                        return "__proto__" == (t += "") || "\0" === t[0] ? "\0" + t : t
                    }

                    function S(t) {
                        return "\0" === (t += "")[0] ? t.slice(1) : t
                    }

                    function N(t) {
                        return T(t) in this._
                    }

                    function C(t) {
                        return (t = T(t)) in this._ && delete this._[t]
                    }

                    function k() {
                        var t = [];
                        for (var e in this._) t.push(S(e));
                        return t
                    }

                    function D() {
                        var t = 0;
                        for (var e in this._) ++t;
                        return t
                    }

                    function L() {
                        for (var t in this._) return !1;
                        return !0
                    }

                    function O() {
                        this._ = Object.create(null)
                    }

                    function q(t) {
                        return t
                    }

                    function j(t, e, n) {
                        return function() {
                            var r = n.apply(e, arguments);
                            return r === e ? t : r
                        }
                    }

                    function P(t, e) {
                        if (e in t) return e;
                        e = e.charAt(0).toUpperCase() + e.slice(1);
                        for (var n = 0, r = R.length; n < r; ++n) {
                            var i = R[n] + e;
                            if (i in t) return i
                        }
                    }
                    _(A, {
                        has: N,
                        get: function(t) {
                            return this._[T(t)]
                        },
                        set: function(t, e) {
                            return this._[T(t)] = e
                        },
                        remove: C,
                        keys: k,
                        values: function() {
                            var t = [];
                            for (var e in this._) t.push(this._[e]);
                            return t
                        },
                        entries: function() {
                            var t = [];
                            for (var e in this._) t.push({
                                key: S(e),
                                value: this._[e]
                            });
                            return t
                        },
                        size: D,
                        empty: L,
                        forEach: function(t) {
                            for (var e in this._) t.call(this, S(e), this._[e])
                        }
                    }), o.nest = function() {
                        var t, e, n = {},
                            r = [],
                            i = [];

                        function a(i, o, u) {
                            if (u >= r.length) return e ? e.call(n, o) : t ? o.sort(t) : o;
                            for (var s, l, c, f, p = -1, h = o.length, d = r[u++], g = new A; ++p < h;)(f = g.get(s = d(l = o[p]))) ? f.push(l) : g.set(s, [l]);
                            return i ? (l = i(), c = function(t, e) {
                                l.set(t, a(i, e, u))
                            }) : (l = {}, c = function(t, e) {
                                l[t] = a(i, e, u)
                            }), g.forEach(c), l
                        }

                        function u(t, e) {
                            if (e >= r.length) return t;
                            var n = [],
                                o = i[e++];
                            return t.forEach((function(t, r) {
                                n.push({
                                    key: t,
                                    values: u(r, e)
                                })
                            })), o ? n.sort((function(t, e) {
                                return o(t.key, e.key)
                            })) : n
                        }
                        return n.map = function(t, e) {
                            return a(e, t, 0)
                        }, n.entries = function(t) {
                            return u(a(o.map, t, 0), 0)
                        }, n.key = function(t) {
                            return r.push(t), n
                        }, n.sortKeys = function(t) {
                            return i[r.length - 1] = t, n
                        }, n.sortValues = function(e) {
                            return t = e, n
                        }, n.rollup = function(t) {
                            return e = t, n
                        }, n
                    }, o.set = function(t) {
                        var e = new O;
                        if (t)
                            for (var n = 0, r = t.length; n < r; ++n) e.add(t[n]);
                        return e
                    }, _(O, {
                        has: N,
                        add: function(t) {
                            return this._[T(t += "")] = !0, t
                        },
                        remove: C,
                        values: k,
                        size: D,
                        empty: L,
                        forEach: function(t) {
                            for (var e in this._) t.call(this, S(e))
                        }
                    }), o.behavior = {}, o.rebind = function(t, e) {
                        for (var n, r = 1, i = arguments.length; ++r < i;) t[n = arguments[r]] = j(t, e, e[n]);
                        return t
                    };
                    var R = ["webkit", "ms", "moz", "Moz", "o", "O"];

                    function z() {}

                    function H() {}

                    function I(t) {
                        var e = [],
                            n = new A;

                        function r() {
                            for (var n, r = e, i = -1, o = r.length; ++i < o;)(n = r[i].on) && n.apply(this, arguments);
                            return t
                        }
                        return r.on = function(r, i) {
                            var o, a = n.get(r);
                            return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, o = e.indexOf(a)).concat(e.slice(o + 1)), n.remove(r)), i && e.push(n.set(r, {
                                on: i
                            })), t)
                        }, r
                    }

                    function F() {
                        o.event.preventDefault()
                    }

                    function U() {
                        for (var t, e = o.event; t = e.sourceEvent;) e = t;
                        return e
                    }

                    function B(t) {
                        for (var e = new H, n = 0, r = arguments.length; ++n < r;) e[arguments[n]] = I(e);
                        return e.of = function(n, r) {
                            return function(i) {
                                try {
                                    var a = i.sourceEvent = o.event;
                                    i.target = t, o.event = i, e[i.type].apply(n, r)
                                } finally {
                                    o.event = a
                                }
                            }
                        }, e
                    }
                    o.dispatch = function() {
                        for (var t = new H, e = -1, n = arguments.length; ++e < n;) t[arguments[e]] = I(t);
                        return t
                    }, H.prototype.on = function(t, e) {
                        var n = t.indexOf("."),
                            r = "";
                        if (n >= 0 && (r = t.slice(n + 1), t = t.slice(0, n)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, e);
                        if (2 === arguments.length) {
                            if (null == e)
                                for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                            return this
                        }
                    }, o.event = null, o.requote = function(t) {
                        return t.replace(W, "\\$&")
                    };
                    var W = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,
                        $ = {}.__proto__ ? function(t, e) {
                            t.__proto__ = e
                        } : function(t, e) {
                            for (var n in e) t[n] = e[n]
                        };

                    function V(t) {
                        return $(t, G), t
                    }
                    var X = function(t, e) {
                            return e.querySelector(t)
                        },
                        Y = function(t, e) {
                            return e.querySelectorAll(t)
                        },
                        Z = function(t, e) {
                            var n = t.matches || t[P(t, "matchesSelector")];
                            return (Z = function(t, e) {
                                return n.call(t, e)
                            })(t, e)
                        };
                    "function" == typeof Sizzle && (X = function(t, e) {
                        return Sizzle(t, e)[0] || null
                    }, Y = Sizzle, Z = Sizzle.matchesSelector), o.selection = function() {
                        return o.select(s.documentElement)
                    };
                    var G = o.selection.prototype = [];

                    function K(t) {
                        return "function" == typeof t ? t : function() {
                            return X(t, this)
                        }
                    }

                    function Q(t) {
                        return "function" == typeof t ? t : function() {
                            return Y(t, this)
                        }
                    }
                    G.select = function(t) {
                        var e, n, r, i, o = [];
                        t = K(t);
                        for (var a = -1, u = this.length; ++a < u;) {
                            o.push(e = []), e.parentNode = (r = this[a]).parentNode;
                            for (var s = -1, l = r.length; ++s < l;)(i = r[s]) ? (e.push(n = t.call(i, i.__data__, s, a)), n && "__data__" in i && (n.__data__ = i.__data__)) : e.push(null)
                        }
                        return V(o)
                    }, G.selectAll = function(t) {
                        var e, n, r = [];
                        t = Q(t);
                        for (var i = -1, o = this.length; ++i < o;)
                            for (var a = this[i], s = -1, l = a.length; ++s < l;)(n = a[s]) && (r.push(e = u(t.call(n, n.__data__, s, i))), e.parentNode = n);
                        return V(r)
                    };
                    var J = {
                        svg: "http://www.w3.org/2000/svg",
                        xhtml: "http://www.w3.org/1999/xhtml",
                        xlink: "http://www.w3.org/1999/xlink",
                        xml: "http://www.w3.org/XML/1998/namespace",
                        xmlns: "http://www.w3.org/2000/xmlns/"
                    };

                    function tt(t, e) {
                        return t = o.ns.qualify(t), null == e ? t.local ? function() {
                            this.removeAttributeNS(t.space, t.local)
                        } : function() {
                            this.removeAttribute(t)
                        } : "function" == typeof e ? t.local ? function() {
                            var n = e.apply(this, arguments);
                            null == n ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n)
                        } : function() {
                            var n = e.apply(this, arguments);
                            null == n ? this.removeAttribute(t) : this.setAttribute(t, n)
                        } : t.local ? function() {
                            this.setAttributeNS(t.space, t.local, e)
                        } : function() {
                            this.setAttribute(t, e)
                        }
                    }

                    function et(t) {
                        return t.trim().replace(/\s+/g, " ")
                    }

                    function nt(t) {
                        return new RegExp("(?:^|\\s+)" + o.requote(t) + "(?:\\s+|$)", "g")
                    }

                    function rt(t) {
                        return (t + "").trim().split(/^|\s+/)
                    }

                    function it(t, e) {
                        var n = (t = rt(t).map(ot)).length;
                        return "function" == typeof e ? function() {
                            for (var r = -1, i = e.apply(this, arguments); ++r < n;) t[r](this, i)
                        } : function() {
                            for (var r = -1; ++r < n;) t[r](this, e)
                        }
                    }

                    function ot(t) {
                        var e = nt(t);
                        return function(n, r) {
                            if (i = n.classList) return r ? i.add(t) : i.remove(t);
                            var i = n.getAttribute("class") || "";
                            r ? (e.lastIndex = 0, e.test(i) || n.setAttribute("class", et(i + " " + t))) : n.setAttribute("class", et(i.replace(e, " ")))
                        }
                    }

                    function at(t, e, n) {
                        return null == e ? function() {
                            this.style.removeProperty(t)
                        } : "function" == typeof e ? function() {
                            var r = e.apply(this, arguments);
                            null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, n)
                        } : function() {
                            this.style.setProperty(t, e, n)
                        }
                    }

                    function ut(t, e) {
                        return null == e ? function() {
                            delete this[t]
                        } : "function" == typeof e ? function() {
                            var n = e.apply(this, arguments);
                            null == n ? delete this[t] : this[t] = n
                        } : function() {
                            this[t] = e
                        }
                    }

                    function st(t) {
                        return "function" == typeof t ? t : (t = o.ns.qualify(t)).local ? function() {
                            return this.ownerDocument.createElementNS(t.space, t.local)
                        } : function() {
                            var e = this.ownerDocument,
                                n = this.namespaceURI;
                            return n ? e.createElementNS(n, t) : e.createElement(t)
                        }
                    }

                    function lt() {
                        var t = this.parentNode;
                        t && t.removeChild(this)
                    }

                    function ct(t) {
                        return {
                            __data__: t
                        }
                    }

                    function ft(t) {
                        return function() {
                            return Z(this, t)
                        }
                    }

                    function pt(t) {
                        return arguments.length || (t = v),
                            function(e, n) {
                                return e && n ? t(e.__data__, n.__data__) : !e - !n
                            }
                    }

                    function ht(t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            for (var i, o = t[n], a = 0, u = o.length; a < u; a++)(i = o[a]) && e(i, a, n);
                        return t
                    }

                    function dt(t) {
                        return $(t, gt), t
                    }
                    o.ns = {
                        prefix: J,
                        qualify: function(t) {
                            var e = t.indexOf(":"),
                                n = t;
                            return e >= 0 && (n = t.slice(0, e), t = t.slice(e + 1)), J.hasOwnProperty(n) ? {
                                space: J[n],
                                local: t
                            } : t
                        }
                    }, G.attr = function(t, e) {
                        if (arguments.length < 2) {
                            if ("string" == typeof t) {
                                var n = this.node();
                                return (t = o.ns.qualify(t)).local ? n.getAttributeNS(t.space, t.local) : n.getAttribute(t)
                            }
                            for (e in t) this.each(tt(e, t[e]));
                            return this
                        }
                        return this.each(tt(t, e))
                    }, G.classed = function(t, e) {
                        if (arguments.length < 2) {
                            if ("string" == typeof t) {
                                var n = this.node(),
                                    r = (t = rt(t)).length,
                                    i = -1;
                                if (e = n.classList) {
                                    for (; ++i < r;)
                                        if (!e.contains(t[i])) return !1
                                } else
                                    for (e = n.getAttribute("class"); ++i < r;)
                                        if (!nt(t[i]).test(e)) return !1;
                                return !0
                            }
                            for (e in t) this.each(it(e, t[e]));
                            return this
                        }
                        return this.each(it(t, e))
                    }, G.style = function(t, e, n) {
                        var r = arguments.length;
                        if (r < 3) {
                            if ("string" != typeof t) {
                                for (n in r < 2 && (e = ""), t) this.each(at(n, t[n], e));
                                return this
                            }
                            if (r < 2) {
                                var i = this.node();
                                return c(i).getComputedStyle(i, null).getPropertyValue(t)
                            }
                            n = ""
                        }
                        return this.each(at(t, e, n))
                    }, G.property = function(t, e) {
                        if (arguments.length < 2) {
                            if ("string" == typeof t) return this.node()[t];
                            for (e in t) this.each(ut(e, t[e]));
                            return this
                        }
                        return this.each(ut(t, e))
                    }, G.text = function(t) {
                        return arguments.length ? this.each("function" == typeof t ? function() {
                            var e = t.apply(this, arguments);
                            this.textContent = null == e ? "" : e
                        } : null == t ? function() {
                            this.textContent = ""
                        } : function() {
                            this.textContent = t
                        }) : this.node().textContent
                    }, G.html = function(t) {
                        return arguments.length ? this.each("function" == typeof t ? function() {
                            var e = t.apply(this, arguments);
                            this.innerHTML = null == e ? "" : e
                        } : null == t ? function() {
                            this.innerHTML = ""
                        } : function() {
                            this.innerHTML = t
                        }) : this.node().innerHTML
                    }, G.append = function(t) {
                        return t = st(t), this.select((function() {
                            return this.appendChild(t.apply(this, arguments))
                        }))
                    }, G.insert = function(t, e) {
                        return t = st(t), e = K(e), this.select((function() {
                            return this.insertBefore(t.apply(this, arguments), e.apply(this, arguments) || null)
                        }))
                    }, G.remove = function() {
                        return this.each(lt)
                    }, G.data = function(t, e) {
                        var n, r, i = -1,
                            o = this.length;
                        if (!arguments.length) {
                            for (t = new Array(o = (n = this[0]).length); ++i < o;)(r = n[i]) && (t[i] = r.__data__);
                            return t
                        }

                        function a(t, n) {
                            var r, i, o, a = t.length,
                                c = n.length,
                                f = Math.min(a, c),
                                p = new Array(c),
                                h = new Array(c),
                                d = new Array(a);
                            if (e) {
                                var g, v = new A,
                                    y = new Array(a);
                                for (r = -1; ++r < a;) v.has(g = e.call(i = t[r], i.__data__, r)) ? d[r] = i : v.set(g, i), y[r] = g;
                                for (r = -1; ++r < c;)(i = v.get(g = e.call(n, o = n[r], r))) ? !0 !== i && (p[r] = i, i.__data__ = o) : h[r] = ct(o), v.set(g, !0);
                                for (r = -1; ++r < a;) !0 !== v.get(y[r]) && (d[r] = t[r])
                            } else {
                                for (r = -1; ++r < f;) i = t[r], o = n[r], i ? (i.__data__ = o, p[r] = i) : h[r] = ct(o);
                                for (; r < c; ++r) h[r] = ct(n[r]);
                                for (; r < a; ++r) d[r] = t[r]
                            }
                            h.update = p, h.parentNode = p.parentNode = d.parentNode = t.parentNode, u.push(h), s.push(p), l.push(d)
                        }
                        var u = dt([]),
                            s = V([]),
                            l = V([]);
                        if ("function" == typeof t)
                            for (; ++i < o;) a(n = this[i], t.call(n, n.parentNode.__data__, i));
                        else
                            for (; ++i < o;) a(n = this[i], t);
                        return s.enter = function() {
                            return u
                        }, s.exit = function() {
                            return l
                        }, s
                    }, G.datum = function(t) {
                        return arguments.length ? this.property("__data__", t) : this.property("__data__")
                    }, G.filter = function(t) {
                        var e, n, r, i = [];
                        "function" != typeof t && (t = ft(t));
                        for (var o = 0, a = this.length; o < a; o++) {
                            i.push(e = []), e.parentNode = (n = this[o]).parentNode;
                            for (var u = 0, s = n.length; u < s; u++)(r = n[u]) && t.call(r, r.__data__, u, o) && e.push(r)
                        }
                        return V(i)
                    }, G.order = function() {
                        for (var t = -1, e = this.length; ++t < e;)
                            for (var n, r = this[t], i = r.length - 1, o = r[i]; --i >= 0;)(n = r[i]) && (o && o !== n.nextSibling && o.parentNode.insertBefore(n, o), o = n);
                        return this
                    }, G.sort = function(t) {
                        t = pt.apply(this, arguments);
                        for (var e = -1, n = this.length; ++e < n;) this[e].sort(t);
                        return this.order()
                    }, G.each = function(t) {
                        return ht(this, (function(e, n, r) {
                            t.call(e, e.__data__, n, r)
                        }))
                    }, G.call = function(t) {
                        var e = u(arguments);
                        return t.apply(e[0] = this, e), this
                    }, G.empty = function() {
                        return !this.node()
                    }, G.node = function() {
                        for (var t = 0, e = this.length; t < e; t++)
                            for (var n = this[t], r = 0, i = n.length; r < i; r++) {
                                var o = n[r];
                                if (o) return o
                            }
                        return null
                    }, G.size = function() {
                        var t = 0;
                        return ht(this, (function() {
                            ++t
                        })), t
                    };
                    var gt = [];

                    function vt(t) {
                        var e, n;
                        return function(r, i, o) {
                            var a, u = t[o].update,
                                s = u.length;
                            for (o != n && (n = o, e = 0), i >= e && (e = i + 1); !(a = u[e]) && ++e < s;);
                            return a
                        }
                    }

                    function yt(t, e, n) {
                        var r = "__on" + t,
                            i = t.indexOf("."),
                            a = xt;
                        i > 0 && (t = t.slice(0, i));
                        var s = mt.get(t);

                        function l() {
                            var e = this[r];
                            e && (this.removeEventListener(t, e, e.$), delete this[r])
                        }
                        return s && (t = s, a = bt), i ? e ? function() {
                            var i = a(e, u(arguments));
                            l.call(this), this.addEventListener(t, this[r] = i, i.$ = n), i._ = e
                        } : l : e ? z : function() {
                            var e, n = new RegExp("^__on([^.]+)" + o.requote(t) + "$");
                            for (var r in this)
                                if (e = r.match(n)) {
                                    var i = this[r];
                                    this.removeEventListener(e[1], i, i.$), delete this[r]
                                }
                        }
                    }
                    o.selection.enter = dt, o.selection.enter.prototype = gt, gt.append = G.append, gt.empty = G.empty, gt.node = G.node, gt.call = G.call, gt.size = G.size, gt.select = function(t) {
                        for (var e, n, r, i, o, a = [], u = -1, s = this.length; ++u < s;) {
                            r = (i = this[u]).update, a.push(e = []), e.parentNode = i.parentNode;
                            for (var l = -1, c = i.length; ++l < c;)(o = i[l]) ? (e.push(r[l] = n = t.call(i.parentNode, o.__data__, l, u)), n.__data__ = o.__data__) : e.push(null)
                        }
                        return V(a)
                    }, gt.insert = function(t, e) {
                        return arguments.length < 2 && (e = vt(this)), G.insert.call(this, t, e)
                    }, o.select = function(t) {
                        var e;
                        return "string" == typeof t ? (e = [X(t, s)]).parentNode = s.documentElement : (e = [t]).parentNode = l(t), V([e])
                    }, o.selectAll = function(t) {
                        var e;
                        return "string" == typeof t ? (e = u(Y(t, s))).parentNode = s.documentElement : (e = t).parentNode = null, V([e])
                    }, G.on = function(t, e, n) {
                        var r = arguments.length;
                        if (r < 3) {
                            if ("string" != typeof t) {
                                for (n in r < 2 && (e = !1), t) this.each(yt(n, t[n], e));
                                return this
                            }
                            if (r < 2) return (r = this.node()["__on" + t]) && r._;
                            n = !1
                        }
                        return this.each(yt(t, e, n))
                    };
                    var mt = o.map({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout"
                    });

                    function xt(t, e) {
                        return function(n) {
                            var r = o.event;
                            o.event = n, e[0] = this.__data__;
                            try {
                                t.apply(this, e)
                            } finally {
                                o.event = r
                            }
                        }
                    }

                    function bt(t, e) {
                        var n = xt(t, e);
                        return function(t) {
                            var e = this,
                                r = t.relatedTarget;
                            r && (r === e || 8 & r.compareDocumentPosition(e)) || n.call(e, t)
                        }
                    }
                    s && mt.forEach((function(t) {
                        "on" + t in s && mt.remove(t)
                    }));
                    var wt, Mt = 0;

                    function Et(t) {
                        var e = ".dragsuppress-" + ++Mt,
                            n = "click" + e,
                            r = o.select(c(t)).on("touchmove" + e, F).on("dragstart" + e, F).on("selectstart" + e, F);
                        if (null == wt && (wt = !("onselectstart" in t) && P(t.style, "userSelect")), wt) {
                            var i = l(t).style,
                                a = i[wt];
                            i[wt] = "none"
                        }
                        return function(t) {
                            if (r.on(e, null), wt && (i[wt] = a), t) {
                                var o = function() {
                                    r.on(n, null)
                                };
                                r.on(n, (function() {
                                    F(), o()
                                }), !0), setTimeout(o, 0)
                            }
                        }
                    }
                    o.mouse = function(t) {
                        return At(t, U())
                    };
                    var _t = this.navigator && /WebKit/.test(this.navigator.userAgent) ? -1 : 0;

                    function At(t, e) {
                        e.changedTouches && (e = e.changedTouches[0]);
                        var n = t.ownerSVGElement || t;
                        if (n.createSVGPoint) {
                            var r = n.createSVGPoint();
                            if (_t < 0) {
                                var i = c(t);
                                if (i.scrollX || i.scrollY) {
                                    var a = (n = o.select("body").append("svg").style({
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        margin: 0,
                                        padding: 0,
                                        border: "none"
                                    }, "important"))[0][0].getScreenCTM();
                                    _t = !(a.f || a.e), n.remove()
                                }
                            }
                            return _t ? (r.x = e.pageX, r.y = e.pageY) : (r.x = e.clientX, r.y = e.clientY), [(r = r.matrixTransform(t.getScreenCTM().inverse())).x, r.y]
                        }
                        var u = t.getBoundingClientRect();
                        return [e.clientX - u.left - t.clientLeft, e.clientY - u.top - t.clientTop]
                    }

                    function Tt() {
                        return o.event.changedTouches[0].identifier
                    }
                    o.touch = function(t, e, n) {
                        if (arguments.length < 3 && (n = e, e = U().changedTouches), e)
                            for (var r, i = 0, o = e.length; i < o; ++i)
                                if ((r = e[i]).identifier === n) return At(t, r)
                    }, o.behavior.drag = function() {
                        var t = B(i, "drag", "dragstart", "dragend"),
                            e = null,
                            n = a(z, o.mouse, c, "mousemove", "mouseup"),
                            r = a(Tt, o.touch, q, "touchmove", "touchend");

                        function i() {
                            this.on("mousedown.drag", n).on("touchstart.drag", r)
                        }

                        function a(n, r, i, a, u) {
                            return function() {
                                var s, l = this,
                                    c = o.event.target,
                                    f = l.parentNode,
                                    p = t.of(l, arguments),
                                    h = 0,
                                    d = n(),
                                    g = ".drag" + (null == d ? "" : "-" + d),
                                    v = o.select(i(c)).on(a + g, x).on(u + g, b),
                                    y = Et(c),
                                    m = r(f, d);

                                function x() {
                                    var t, e, n = r(f, d);
                                    n && (t = n[0] - m[0], e = n[1] - m[1], h |= t | e, m = n, p({
                                        type: "drag",
                                        x: n[0] + s[0],
                                        y: n[1] + s[1],
                                        dx: t,
                                        dy: e
                                    }))
                                }

                                function b() {
                                    r(f, d) && (v.on(a + g, null).on(u + g, null), y(h && o.event.target === c), p({
                                        type: "dragend"
                                    }))
                                }
                                s = e ? [(s = e.apply(l, arguments)).x - m[0], s.y - m[1]] : [0, 0], p({
                                    type: "dragstart"
                                })
                            }
                        }
                        return i.origin = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, o.rebind(i, t, "on")
                    }, o.touches = function(t, e) {
                        return arguments.length < 2 && (e = U().touches), e ? u(e).map((function(e) {
                            var n = At(t, e);
                            return n.identifier = e.identifier, n
                        })) : []
                    };
                    var St = 1e-6,
                        Nt = St * St,
                        Ct = Math.PI,
                        kt = 2 * Ct,
                        Dt = kt - St,
                        Lt = Ct / 2,
                        Ot = Ct / 180,
                        qt = 180 / Ct;

                    function jt(t) {
                        return t > 0 ? 1 : t < 0 ? -1 : 0
                    }

                    function Pt(t, e, n) {
                        return (e[0] - t[0]) * (n[1] - t[1]) - (e[1] - t[1]) * (n[0] - t[0])
                    }

                    function Rt(t) {
                        return t > 1 ? 0 : t < -1 ? Ct : Math.acos(t)
                    }

                    function zt(t) {
                        return t > 1 ? Lt : t < -1 ? -Lt : Math.asin(t)
                    }

                    function Ht(t) {
                        return ((t = Math.exp(t)) + 1 / t) / 2
                    }

                    function It(t) {
                        return (t = Math.sin(t / 2)) * t
                    }
                    var Ft = Math.SQRT2;
                    o.interpolateZoom = function(t, e) {
                        var n = t[0],
                            r = t[1],
                            i = t[2],
                            o = e[0],
                            a = e[1],
                            u = e[2],
                            s = o - n,
                            l = a - r,
                            c = s * s + l * l,
                            f = Math.sqrt(c),
                            p = (u * u - i * i + 4 * c) / (2 * i * 2 * f),
                            h = (u * u - i * i - 4 * c) / (2 * u * 2 * f),
                            d = Math.log(Math.sqrt(p * p + 1) - p),
                            g = Math.log(Math.sqrt(h * h + 1) - h) - d,
                            v = (g || Math.log(u / i)) / Ft;

                        function y(t) {
                            var e, o = t * v;
                            if (g) {
                                var a = Ht(d),
                                    u = i / (2 * f) * (a * (e = Ft * o + d, ((e = Math.exp(2 * e)) - 1) / (e + 1)) - function(t) {
                                        return ((t = Math.exp(t)) - 1 / t) / 2
                                    }(d));
                                return [n + u * s, r + u * l, i * a / Ht(Ft * o + d)]
                            }
                            return [n + t * s, r + t * l, i * Math.exp(Ft * o)]
                        }
                        return y.duration = 1e3 * v, y
                    }, o.behavior.zoom = function() {
                        var t, e, n, r, i, a, u, l, f, p = {
                                x: 0,
                                y: 0,
                                k: 1
                            },
                            h = [960, 500],
                            d = Wt,
                            g = 250,
                            v = 0,
                            y = "mousedown.zoom",
                            m = "mousemove.zoom",
                            x = "mouseup.zoom",
                            b = "touchstart.zoom",
                            w = B(M, "zoomstart", "zoom", "zoomend");

                        function M(t) {
                            t.on(y, D).on(Bt + ".zoom", O).on("dblclick.zoom", q).on(b, L)
                        }

                        function E(t) {
                            return [(t[0] - p.x) / p.k, (t[1] - p.y) / p.k]
                        }

                        function _(t) {
                            p.k = Math.max(d[0], Math.min(d[1], t))
                        }

                        function A(t, e) {
                            e = function(t) {
                                return [t[0] * p.k + p.x, t[1] * p.k + p.y]
                            }(e), p.x += t[0] - e[0], p.y += t[1] - e[1]
                        }

                        function T(t, n, r, i) {
                            t.__chart__ = {
                                x: p.x,
                                y: p.y,
                                k: p.k
                            }, _(Math.pow(2, i)), A(e = n, r), t = o.select(t), g > 0 && (t = t.transition().duration(g)), t.call(M.event)
                        }

                        function S() {
                            u && u.domain(a.range().map((function(t) {
                                return (t - p.x) / p.k
                            })).map(a.invert)), f && f.domain(l.range().map((function(t) {
                                return (t - p.y) / p.k
                            })).map(l.invert))
                        }

                        function N(t) {
                            v++ || t({
                                type: "zoomstart"
                            })
                        }

                        function C(t) {
                            S(), t({
                                type: "zoom",
                                scale: p.k,
                                translate: [p.x, p.y]
                            })
                        }

                        function k(t) {
                            --v || (t({
                                type: "zoomend"
                            }), e = null)
                        }

                        function D() {
                            var t = this,
                                e = o.event.target,
                                n = w.of(t, arguments),
                                r = 0,
                                i = o.select(c(t)).on(m, s).on(x, l),
                                a = E(o.mouse(t)),
                                u = Et(t);

                            function s() {
                                r = 1, A(o.mouse(t), a), C(n)
                            }

                            function l() {
                                i.on(m, null).on(x, null), u(r && o.event.target === e), k(n)
                            }
                            Lu.call(t), N(n)
                        }

                        function L() {
                            var t, e = this,
                                n = w.of(e, arguments),
                                r = {},
                                a = 0,
                                u = ".zoom-" + o.event.changedTouches[0].identifier,
                                s = "touchmove" + u,
                                l = "touchend" + u,
                                c = [],
                                f = o.select(e),
                                h = Et(e);

                            function d() {
                                var n = o.touches(e);
                                return t = p.k, n.forEach((function(t) {
                                    t.identifier in r && (r[t.identifier] = E(t))
                                })), n
                            }

                            function g() {
                                var t = o.event.target;
                                o.select(t).on(s, v).on(l, m), c.push(t);
                                for (var n = o.event.changedTouches, u = 0, f = n.length; u < f; ++u) r[n[u].identifier] = null;
                                var h = d(),
                                    g = Date.now();
                                if (1 === h.length) {
                                    if (g - i < 500) {
                                        var y = h[0];
                                        T(e, y, r[y.identifier], Math.floor(Math.log(p.k) / Math.LN2) + 1), F()
                                    }
                                    i = g
                                } else if (h.length > 1) {
                                    y = h[0];
                                    var x = h[1],
                                        b = y[0] - x[0],
                                        w = y[1] - x[1];
                                    a = b * b + w * w
                                }
                            }

                            function v() {
                                var u, s, l, c, f = o.touches(e);
                                Lu.call(e);
                                for (var p = 0, h = f.length; p < h; ++p, c = null)
                                    if (l = f[p], c = r[l.identifier]) {
                                        if (s) break;
                                        u = l, s = c
                                    } if (c) {
                                    var d = (d = l[0] - u[0]) * d + (d = l[1] - u[1]) * d,
                                        g = a && Math.sqrt(d / a);
                                    u = [(u[0] + l[0]) / 2, (u[1] + l[1]) / 2], s = [(s[0] + c[0]) / 2, (s[1] + c[1]) / 2], _(g * t)
                                }
                                i = null, A(u, s), C(n)
                            }

                            function m() {
                                if (o.event.touches.length) {
                                    for (var t = o.event.changedTouches, e = 0, i = t.length; e < i; ++e) delete r[t[e].identifier];
                                    for (var a in r) return void d()
                                }
                                o.selectAll(c).on(u, null), f.on(y, D).on(b, L), h(), k(n)
                            }
                            g(), N(n), f.on(y, null).on(b, g)
                        }

                        function O() {
                            var i = w.of(this, arguments);
                            r ? clearTimeout(r) : (Lu.call(this), t = E(e = n || o.mouse(this)), N(i)), r = setTimeout((function() {
                                r = null, k(i)
                            }), 50), F(), _(Math.pow(2, .002 * Ut()) * p.k), A(e, t), C(i)
                        }

                        function q() {
                            var t = o.mouse(this),
                                e = Math.log(p.k) / Math.LN2;
                            T(this, t, E(t), o.event.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1)
                        }
                        return Bt || (Bt = "onwheel" in s ? (Ut = function() {
                            return -o.event.deltaY * (o.event.deltaMode ? 120 : 1)
                        }, "wheel") : "onmousewheel" in s ? (Ut = function() {
                            return o.event.wheelDelta
                        }, "mousewheel") : (Ut = function() {
                            return -o.event.detail
                        }, "MozMousePixelScroll")), M.event = function(t) {
                            t.each((function() {
                                var t = w.of(this, arguments),
                                    n = p;
                                ju ? o.select(this).transition().each("start.zoom", (function() {
                                    p = this.__chart__ || {
                                        x: 0,
                                        y: 0,
                                        k: 1
                                    }, N(t)
                                })).tween("zoom:zoom", (function() {
                                    var r = h[0],
                                        i = h[1],
                                        a = e ? e[0] : r / 2,
                                        u = e ? e[1] : i / 2,
                                        s = o.interpolateZoom([(a - p.x) / p.k, (u - p.y) / p.k, r / p.k], [(a - n.x) / n.k, (u - n.y) / n.k, r / n.k]);
                                    return function(e) {
                                        var n = s(e),
                                            i = r / n[2];
                                        this.__chart__ = p = {
                                            x: a - n[0] * i,
                                            y: u - n[1] * i,
                                            k: i
                                        }, C(t)
                                    }
                                })).each("interrupt.zoom", (function() {
                                    k(t)
                                })).each("end.zoom", (function() {
                                    k(t)
                                })) : (this.__chart__ = p, N(t), C(t), k(t))
                            }))
                        }, M.translate = function(t) {
                            return arguments.length ? (p = {
                                x: +t[0],
                                y: +t[1],
                                k: p.k
                            }, S(), M) : [p.x, p.y]
                        }, M.scale = function(t) {
                            return arguments.length ? (p = {
                                x: p.x,
                                y: p.y,
                                k: +t
                            }, S(), M) : p.k
                        }, M.scaleExtent = function(t) {
                            return arguments.length ? (d = null == t ? Wt : [+t[0], +t[1]], M) : d
                        }, M.center = function(t) {
                            return arguments.length ? (n = t && [+t[0], +t[1]], M) : n
                        }, M.size = function(t) {
                            return arguments.length ? (h = t && [+t[0], +t[1]], M) : h
                        }, M.duration = function(t) {
                            return arguments.length ? (g = +t, M) : g
                        }, M.x = function(t) {
                            return arguments.length ? (u = t, a = t.copy(), p = {
                                x: 0,
                                y: 0,
                                k: 1
                            }, M) : u
                        }, M.y = function(t) {
                            return arguments.length ? (f = t, l = t.copy(), p = {
                                x: 0,
                                y: 0,
                                k: 1
                            }, M) : f
                        }, o.rebind(M, w, "on")
                    };
                    var Ut, Bt, Wt = [0, 1 / 0];

                    function $t() {}

                    function Vt(t, e, n) {
                        return this instanceof Vt ? (this.h = +t, this.s = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof Vt ? new Vt(t.h, t.s, t.l) : he("" + t, de, Vt) : new Vt(t, e, n)
                    }
                    o.color = $t, $t.prototype.toString = function() {
                        return this.rgb() + ""
                    }, o.hsl = Vt;
                    var Xt = Vt.prototype = new $t;

                    function Yt(t, e, n) {
                        var r, i;

                        function o(t) {
                            return Math.round(255 * function(t) {
                                return t > 360 ? t -= 360 : t < 0 && (t += 360), t < 60 ? r + (i - r) * t / 60 : t < 180 ? i : t < 240 ? r + (i - r) * (240 - t) / 60 : r
                            }(t))
                        }
                        return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, e = isNaN(e) || e < 0 ? 0 : e > 1 ? 1 : e, r = 2 * (n = n < 0 ? 0 : n > 1 ? 1 : n) - (i = n <= .5 ? n * (1 + e) : n + e - n * e), new se(o(t + 120), o(t), o(t - 120))
                    }

                    function Zt(t, e, n) {
                        return this instanceof Zt ? (this.h = +t, this.c = +e, void(this.l = +n)) : arguments.length < 2 ? t instanceof Zt ? new Zt(t.h, t.c, t.l) : ie(t instanceof Qt ? t.l : (t = ge((t = o.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new Zt(t, e, n)
                    }
                    Xt.brighter = function(t) {
                        return t = Math.pow(.7, arguments.length ? t : 1), new Vt(this.h, this.s, this.l / t)
                    }, Xt.darker = function(t) {
                        return t = Math.pow(.7, arguments.length ? t : 1), new Vt(this.h, this.s, t * this.l)
                    }, Xt.rgb = function() {
                        return Yt(this.h, this.s, this.l)
                    }, o.hcl = Zt;
                    var Gt = Zt.prototype = new $t;

                    function Kt(t, e, n) {
                        return isNaN(t) && (t = 0), isNaN(e) && (e = 0), new Qt(n, Math.cos(t *= Ot) * e, Math.sin(t) * e)
                    }

                    function Qt(t, e, n) {
                        return this instanceof Qt ? (this.l = +t, this.a = +e, void(this.b = +n)) : arguments.length < 2 ? t instanceof Qt ? new Qt(t.l, t.a, t.b) : t instanceof Zt ? Kt(t.h, t.c, t.l) : ge((t = se(t)).r, t.g, t.b) : new Qt(t, e, n)
                    }
                    Gt.brighter = function(t) {
                        return new Zt(this.h, this.c, Math.min(100, this.l + Jt * (arguments.length ? t : 1)))
                    }, Gt.darker = function(t) {
                        return new Zt(this.h, this.c, Math.max(0, this.l - Jt * (arguments.length ? t : 1)))
                    }, Gt.rgb = function() {
                        return Kt(this.h, this.c, this.l).rgb()
                    }, o.lab = Qt;
                    var Jt = 18,
                        te = .95047,
                        ee = 1.08883,
                        ne = Qt.prototype = new $t;

                    function re(t, e, n) {
                        var r = (t + 16) / 116,
                            i = r + e / 500,
                            o = r - n / 200;
                        return new se(ue(3.2404542 * (i = oe(i) * te) - 1.5371385 * (r = 1 * oe(r)) - .4985314 * (o = oe(o) * ee)), ue(-.969266 * i + 1.8760108 * r + .041556 * o), ue(.0556434 * i - .2040259 * r + 1.0572252 * o))
                    }

                    function ie(t, e, n) {
                        return t > 0 ? new Zt(Math.atan2(n, e) * qt, Math.sqrt(e * e + n * n), t) : new Zt(NaN, NaN, t)
                    }

                    function oe(t) {
                        return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
                    }

                    function ae(t) {
                        return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
                    }

                    function ue(t) {
                        return Math.round(255 * (t <= .00304 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
                    }

                    function se(t, e, n) {
                        return this instanceof se ? (this.r = ~~t, this.g = ~~e, void(this.b = ~~n)) : arguments.length < 2 ? t instanceof se ? new se(t.r, t.g, t.b) : he("" + t, se, Yt) : new se(t, e, n)
                    }

                    function le(t) {
                        return new se(t >> 16, t >> 8 & 255, 255 & t)
                    }

                    function ce(t) {
                        return le(t) + ""
                    }
                    ne.brighter = function(t) {
                        return new Qt(Math.min(100, this.l + Jt * (arguments.length ? t : 1)), this.a, this.b)
                    }, ne.darker = function(t) {
                        return new Qt(Math.max(0, this.l - Jt * (arguments.length ? t : 1)), this.a, this.b)
                    }, ne.rgb = function() {
                        return re(this.l, this.a, this.b)
                    }, o.rgb = se;
                    var fe = se.prototype = new $t;

                    function pe(t) {
                        return t < 16 ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
                    }

                    function he(t, e, n) {
                        t = t.toLowerCase();
                        var r, i, o, a = 0,
                            u = 0,
                            s = 0;
                        if (r = /([a-z]+)\((.*)\)/.exec(t)) switch (i = r[2].split(","), r[1]) {
                            case "hsl":
                                return n(parseFloat(i[0]), parseFloat(i[1]) / 100, parseFloat(i[2]) / 100);
                            case "rgb":
                                return e(ye(i[0]), ye(i[1]), ye(i[2]))
                        }
                        return (o = me.get(t)) ? e(o.r, o.g, o.b) : (null == t || "#" !== t.charAt(0) || isNaN(o = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & o) >> 4, a |= a >> 4, u = 240 & o, u |= u >> 4, s = 15 & o, s |= s << 4) : 7 === t.length && (a = (16711680 & o) >> 16, u = (65280 & o) >> 8, s = 255 & o)), e(a, u, s))
                    }

                    function de(t, e, n) {
                        var r, i, o = Math.min(t /= 255, e /= 255, n /= 255),
                            a = Math.max(t, e, n),
                            u = a - o,
                            s = (a + o) / 2;
                        return u ? (i = s < .5 ? u / (a + o) : u / (2 - a - o), r = t == a ? (e - n) / u + (e < n ? 6 : 0) : e == a ? (n - t) / u + 2 : (t - e) / u + 4, r *= 60) : (r = NaN, i = s > 0 && s < 1 ? 0 : r), new Vt(r, i, s)
                    }

                    function ge(t, e, n) {
                        var r = ae((.4124564 * (t = ve(t)) + .3575761 * (e = ve(e)) + .1804375 * (n = ve(n))) / te),
                            i = ae((.2126729 * t + .7151522 * e + .072175 * n) / 1);
                        return Qt(116 * i - 16, 500 * (r - i), 200 * (i - ae((.0193339 * t + .119192 * e + .9503041 * n) / ee)))
                    }

                    function ve(t) {
                        return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                    }

                    function ye(t) {
                        var e = parseFloat(t);
                        return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * e) : e
                    }
                    fe.brighter = function(t) {
                        t = Math.pow(.7, arguments.length ? t : 1);
                        var e = this.r,
                            n = this.g,
                            r = this.b,
                            i = 30;
                        return e || n || r ? (e && e < i && (e = i), n && n < i && (n = i), r && r < i && (r = i), new se(Math.min(255, e / t), Math.min(255, n / t), Math.min(255, r / t))) : new se(i, i, i)
                    }, fe.darker = function(t) {
                        return new se((t = Math.pow(.7, arguments.length ? t : 1)) * this.r, t * this.g, t * this.b)
                    }, fe.hsl = function() {
                        return de(this.r, this.g, this.b)
                    }, fe.toString = function() {
                        return "#" + pe(this.r) + pe(this.g) + pe(this.b)
                    };
                    var me = o.map({
                        aliceblue: 15792383,
                        antiquewhite: 16444375,
                        aqua: 65535,
                        aquamarine: 8388564,
                        azure: 15794175,
                        beige: 16119260,
                        bisque: 16770244,
                        black: 0,
                        blanchedalmond: 16772045,
                        blue: 255,
                        blueviolet: 9055202,
                        brown: 10824234,
                        burlywood: 14596231,
                        cadetblue: 6266528,
                        chartreuse: 8388352,
                        chocolate: 13789470,
                        coral: 16744272,
                        cornflowerblue: 6591981,
                        cornsilk: 16775388,
                        crimson: 14423100,
                        cyan: 65535,
                        darkblue: 139,
                        darkcyan: 35723,
                        darkgoldenrod: 12092939,
                        darkgray: 11119017,
                        darkgreen: 25600,
                        darkgrey: 11119017,
                        darkkhaki: 12433259,
                        darkmagenta: 9109643,
                        darkolivegreen: 5597999,
                        darkorange: 16747520,
                        darkorchid: 10040012,
                        darkred: 9109504,
                        darksalmon: 15308410,
                        darkseagreen: 9419919,
                        darkslateblue: 4734347,
                        darkslategray: 3100495,
                        darkslategrey: 3100495,
                        darkturquoise: 52945,
                        darkviolet: 9699539,
                        deeppink: 16716947,
                        deepskyblue: 49151,
                        dimgray: 6908265,
                        dimgrey: 6908265,
                        dodgerblue: 2003199,
                        firebrick: 11674146,
                        floralwhite: 16775920,
                        forestgreen: 2263842,
                        fuchsia: 16711935,
                        gainsboro: 14474460,
                        ghostwhite: 16316671,
                        gold: 16766720,
                        goldenrod: 14329120,
                        gray: 8421504,
                        green: 32768,
                        greenyellow: 11403055,
                        grey: 8421504,
                        honeydew: 15794160,
                        hotpink: 16738740,
                        indianred: 13458524,
                        indigo: 4915330,
                        ivory: 16777200,
                        khaki: 15787660,
                        lavender: 15132410,
                        lavenderblush: 16773365,
                        lawngreen: 8190976,
                        lemonchiffon: 16775885,
                        lightblue: 11393254,
                        lightcoral: 15761536,
                        lightcyan: 14745599,
                        lightgoldenrodyellow: 16448210,
                        lightgray: 13882323,
                        lightgreen: 9498256,
                        lightgrey: 13882323,
                        lightpink: 16758465,
                        lightsalmon: 16752762,
                        lightseagreen: 2142890,
                        lightskyblue: 8900346,
                        lightslategray: 7833753,
                        lightslategrey: 7833753,
                        lightsteelblue: 11584734,
                        lightyellow: 16777184,
                        lime: 65280,
                        limegreen: 3329330,
                        linen: 16445670,
                        magenta: 16711935,
                        maroon: 8388608,
                        mediumaquamarine: 6737322,
                        mediumblue: 205,
                        mediumorchid: 12211667,
                        mediumpurple: 9662683,
                        mediumseagreen: 3978097,
                        mediumslateblue: 8087790,
                        mediumspringgreen: 64154,
                        mediumturquoise: 4772300,
                        mediumvioletred: 13047173,
                        midnightblue: 1644912,
                        mintcream: 16121850,
                        mistyrose: 16770273,
                        moccasin: 16770229,
                        navajowhite: 16768685,
                        navy: 128,
                        oldlace: 16643558,
                        olive: 8421376,
                        olivedrab: 7048739,
                        orange: 16753920,
                        orangered: 16729344,
                        orchid: 14315734,
                        palegoldenrod: 15657130,
                        palegreen: 10025880,
                        paleturquoise: 11529966,
                        palevioletred: 14381203,
                        papayawhip: 16773077,
                        peachpuff: 16767673,
                        peru: 13468991,
                        pink: 16761035,
                        plum: 14524637,
                        powderblue: 11591910,
                        purple: 8388736,
                        rebeccapurple: 6697881,
                        red: 16711680,
                        rosybrown: 12357519,
                        royalblue: 4286945,
                        saddlebrown: 9127187,
                        salmon: 16416882,
                        sandybrown: 16032864,
                        seagreen: 3050327,
                        seashell: 16774638,
                        sienna: 10506797,
                        silver: 12632256,
                        skyblue: 8900331,
                        slateblue: 6970061,
                        slategray: 7372944,
                        slategrey: 7372944,
                        snow: 16775930,
                        springgreen: 65407,
                        steelblue: 4620980,
                        tan: 13808780,
                        teal: 32896,
                        thistle: 14204888,
                        tomato: 16737095,
                        turquoise: 4251856,
                        violet: 15631086,
                        wheat: 16113331,
                        white: 16777215,
                        whitesmoke: 16119285,
                        yellow: 16776960,
                        yellowgreen: 10145074
                    });

                    function xe(t) {
                        return "function" == typeof t ? t : function() {
                            return t
                        }
                    }

                    function be(t) {
                        return function(e, n, r) {
                            return 2 === arguments.length && "function" == typeof n && (r = n, n = null), we(e, n, t, r)
                        }
                    }

                    function we(t, e, n, r) {
                        var i = {},
                            a = o.dispatch("beforesend", "progress", "load", "error"),
                            s = {},
                            l = new XMLHttpRequest,
                            c = null;

                        function f() {
                            var t, e = l.status;
                            if (!e && function(t) {
                                    var e = t.responseType;
                                    return e && "text" !== e ? t.response : t.responseText
                                }(l) || e >= 200 && e < 300 || 304 === e) {
                                try {
                                    t = n.call(i, l)
                                } catch (t) {
                                    return void a.error.call(i, t)
                                }
                                a.load.call(i, t)
                            } else a.error.call(i, l)
                        }
                        return this.XDomainRequest && !("withCredentials" in l) && /^(http(s)?:)?\/\//.test(t) && (l = new XDomainRequest), "onload" in l ? l.onload = l.onerror = f : l.onreadystatechange = function() {
                            l.readyState > 3 && f()
                        }, l.onprogress = function(t) {
                            var e = o.event;
                            o.event = t;
                            try {
                                a.progress.call(i, l)
                            } finally {
                                o.event = e
                            }
                        }, i.header = function(t, e) {
                            return t = (t + "").toLowerCase(), arguments.length < 2 ? s[t] : (null == e ? delete s[t] : s[t] = e + "", i)
                        }, i.mimeType = function(t) {
                            return arguments.length ? (e = null == t ? null : t + "", i) : e
                        }, i.responseType = function(t) {
                            return arguments.length ? (c = t, i) : c
                        }, i.response = function(t) {
                            return n = t, i
                        }, ["get", "post"].forEach((function(t) {
                            i[t] = function() {
                                return i.send.apply(i, [t].concat(u(arguments)))
                            }
                        })), i.send = function(n, r, o) {
                            if (2 === arguments.length && "function" == typeof r && (o = r, r = null), l.open(n, t, !0), null == e || "accept" in s || (s.accept = e + ",*/*"), l.setRequestHeader)
                                for (var u in s) l.setRequestHeader(u, s[u]);
                            return null != e && l.overrideMimeType && l.overrideMimeType(e), null != c && (l.responseType = c), null != o && i.on("error", o).on("load", (function(t) {
                                o(null, t)
                            })), a.beforesend.call(i, l), l.send(null == r ? null : r), i
                        }, i.abort = function() {
                            return l.abort(), i
                        }, o.rebind(i, a, "on"), null == r ? i : i.get(function(t) {
                            return 1 === t.length ? function(e, n) {
                                t(null == e ? n : null)
                            } : t
                        }(r))
                    }
                    me.forEach((function(t, e) {
                        me.set(t, le(e))
                    })), o.functor = xe, o.xhr = be(q), o.dsv = function(t, e) {
                        var n = new RegExp('["' + t + "\n]"),
                            r = t.charCodeAt(0);

                        function i(t, n, r) {
                            arguments.length < 3 && (r = n, n = null);
                            var i = we(t, e, null == n ? o : a(n), r);
                            return i.row = function(t) {
                                return arguments.length ? i.response(null == (n = t) ? o : a(t)) : n
                            }, i
                        }

                        function o(t) {
                            return i.parse(t.responseText)
                        }

                        function a(t) {
                            return function(e) {
                                return i.parse(e.responseText, t)
                            }
                        }

                        function u(e) {
                            return e.map(s).join(t)
                        }

                        function s(t) {
                            return n.test(t) ? '"' + t.replace(/\"/g, '""') + '"' : t
                        }
                        return i.parse = function(t, e) {
                            var n;
                            return i.parseRows(t, (function(t, r) {
                                if (n) return n(t, r - 1);
                                var i = new Function("d", "return {" + t.map((function(t, e) {
                                    return JSON.stringify(t) + ": d[" + e + "]"
                                })).join(",") + "}");
                                n = e ? function(t, n) {
                                    return e(i(t), n)
                                } : i
                            }))
                        }, i.parseRows = function(t, e) {
                            var n, i, o = {},
                                a = {},
                                u = [],
                                s = t.length,
                                l = 0,
                                c = 0;

                            function f() {
                                if (l >= s) return a;
                                if (i) return i = !1, o;
                                var e = l;
                                if (34 === t.charCodeAt(e)) {
                                    for (var n = e; n++ < s;)
                                        if (34 === t.charCodeAt(n)) {
                                            if (34 !== t.charCodeAt(n + 1)) break;
                                            ++n
                                        } return l = n + 2, 13 === (u = t.charCodeAt(n + 1)) ? (i = !0, 10 === t.charCodeAt(n + 2) && ++l) : 10 === u && (i = !0), t.slice(e + 1, n).replace(/""/g, '"')
                                }
                                for (; l < s;) {
                                    var u, c = 1;
                                    if (10 === (u = t.charCodeAt(l++))) i = !0;
                                    else if (13 === u) i = !0, 10 === t.charCodeAt(l) && (++l, ++c);
                                    else if (u !== r) continue;
                                    return t.slice(e, l - c)
                                }
                                return t.slice(e)
                            }
                            for (;
                                (n = f()) !== a;) {
                                for (var p = []; n !== o && n !== a;) p.push(n), n = f();
                                e && null == (p = e(p, c++)) || u.push(p)
                            }
                            return u
                        }, i.format = function(e) {
                            if (Array.isArray(e[0])) return i.formatRows(e);
                            var n = new O,
                                r = [];
                            return e.forEach((function(t) {
                                for (var e in t) n.has(e) || r.push(n.add(e))
                            })), [r.map(s).join(t)].concat(e.map((function(e) {
                                return r.map((function(t) {
                                    return s(e[t])
                                })).join(t)
                            }))).join("\n")
                        }, i.formatRows = function(t) {
                            return t.map(u).join("\n")
                        }, i
                    }, o.csv = o.dsv(",", "text/csv"), o.tsv = o.dsv("\t", "text/tab-separated-values");
                    var Me, Ee, _e, Ae, Te, Se = this[P(this, "requestAnimationFrame")] || function(t) {
                        setTimeout(t, 17)
                    };

                    function Ne() {
                        var t = Ce(),
                            e = ke() - t;
                        e > 24 ? (isFinite(e) && (clearTimeout(Ae), Ae = setTimeout(Ne, e)), _e = 0) : (_e = 1, Se(Ne))
                    }

                    function Ce() {
                        var t = Date.now();
                        for (Te = Me; Te;) t >= Te.t && (Te.f = Te.c(t - Te.t)), Te = Te.n;
                        return t
                    }

                    function ke() {
                        for (var t, e = Me, n = 1 / 0; e;) e.f ? e = t ? t.n = e.n : Me = e.n : (e.t < n && (n = e.t), e = (t = e).n);
                        return Ee = t, n
                    }

                    function De(t, e) {
                        return e - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
                    }
                    o.timer = function(t, e, n) {
                        var r = arguments.length;
                        r < 2 && (e = 0), r < 3 && (n = Date.now());
                        var i = n + e,
                            o = {
                                c: t,
                                t: i,
                                f: !1,
                                n: null
                            };
                        Ee ? Ee.n = o : Me = o, Ee = o, _e || (Ae = clearTimeout(Ae), _e = 1, Se(Ne))
                    }, o.timer.flush = function() {
                        Ce(), ke()
                    }, o.round = function(t, e) {
                        return e ? Math.round(t * (e = Math.pow(10, e))) / e : Math.round(t)
                    };
                    var Le = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map((function(t, e) {
                        var n = Math.pow(10, 3 * M(8 - e));
                        return {
                            scale: e > 8 ? function(t) {
                                return t / n
                            } : function(t) {
                                return t * n
                            },
                            symbol: t
                        }
                    }));

                    function Oe(t) {
                        var e = t.decimal,
                            n = t.thousands,
                            r = t.grouping,
                            i = t.currency,
                            a = r && n ? function(t, e) {
                                for (var i = t.length, o = [], a = 0, u = r[0], s = 0; i > 0 && u > 0 && (s + u + 1 > e && (u = Math.max(1, e - s)), o.push(t.substring(i -= u, i + u)), !((s += u + 1) > e));) u = r[a = (a + 1) % r.length];
                                return o.reverse().join(n)
                            } : q;
                        return function(t) {
                            var n = qe.exec(t),
                                r = n[1] || " ",
                                u = n[2] || ">",
                                s = n[3] || "-",
                                l = n[4] || "",
                                c = n[5],
                                f = +n[6],
                                p = n[7],
                                h = n[8],
                                d = n[9],
                                g = 1,
                                v = "",
                                y = "",
                                m = !1,
                                x = !0;
                            switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === u) && (c = r = "0", u = "="), d) {
                                case "n":
                                    p = !0, d = "g";
                                    break;
                                case "%":
                                    g = 100, y = "%", d = "f";
                                    break;
                                case "p":
                                    g = 100, y = "%", d = "r";
                                    break;
                                case "b":
                                case "o":
                                case "x":
                                case "X":
                                    "#" === l && (v = "0" + d.toLowerCase());
                                case "c":
                                    x = !1;
                                case "d":
                                    m = !0, h = 0;
                                    break;
                                case "s":
                                    g = -1, d = "r"
                            }
                            "$" === l && (v = i[0], y = i[1]), "r" != d || h || (d = "g"), null != h && ("g" == d ? h = Math.max(1, Math.min(21, h)) : "e" != d && "f" != d || (h = Math.max(0, Math.min(20, h)))), d = je.get(d) || Pe;
                            var b = c && p;
                            return function(t) {
                                var n = y;
                                if (m && t % 1) return "";
                                var i = t < 0 || 0 === t && 1 / t < 0 ? (t = -t, "-") : "-" === s ? "" : s;
                                if (g < 0) {
                                    var l = o.formatPrefix(t, h);
                                    t = l.scale(t), n = l.symbol + y
                                } else t *= g;
                                var w, M, E = (t = d(t, h)).lastIndexOf(".");
                                if (E < 0) {
                                    var _ = x ? t.lastIndexOf("e") : -1;
                                    _ < 0 ? (w = t, M = "") : (w = t.substring(0, _), M = t.substring(_))
                                } else w = t.substring(0, E), M = e + t.substring(E + 1);
                                !c && p && (w = a(w, 1 / 0));
                                var A = v.length + w.length + M.length + (b ? 0 : i.length),
                                    T = A < f ? new Array(A = f - A + 1).join(r) : "";
                                return b && (w = a(T + w, T.length ? f - M.length : 1 / 0)), i += v, t = w + M, ("<" === u ? i + t + T : ">" === u ? T + i + t : "^" === u ? T.substring(0, A >>= 1) + i + t + T.substring(A) : i + (b ? t : T + t)) + n
                            }
                        }
                    }
                    o.formatPrefix = function(t, e) {
                        var n = 0;
                        return t && (t < 0 && (t *= -1), e && (t = o.round(t, De(t, e))), n = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), n = Math.max(-24, Math.min(24, 3 * Math.floor((n - 1) / 3)))), Le[8 + n / 3]
                    };
                    var qe = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                        je = o.map({
                            b: function(t) {
                                return t.toString(2)
                            },
                            c: function(t) {
                                return String.fromCharCode(t)
                            },
                            o: function(t) {
                                return t.toString(8)
                            },
                            x: function(t) {
                                return t.toString(16)
                            },
                            X: function(t) {
                                return t.toString(16).toUpperCase()
                            },
                            g: function(t, e) {
                                return t.toPrecision(e)
                            },
                            e: function(t, e) {
                                return t.toExponential(e)
                            },
                            f: function(t, e) {
                                return t.toFixed(e)
                            },
                            r: function(t, e) {
                                return (t = o.round(t, De(t, e))).toFixed(Math.max(0, Math.min(20, De(t * (1 + 1e-15), e))))
                            }
                        });

                    function Pe(t) {
                        return t + ""
                    }
                    var Re = o.time = {},
                        ze = Date;

                    function He() {
                        this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
                    }
                    He.prototype = {
                        getDate: function() {
                            return this._.getUTCDate()
                        },
                        getDay: function() {
                            return this._.getUTCDay()
                        },
                        getFullYear: function() {
                            return this._.getUTCFullYear()
                        },
                        getHours: function() {
                            return this._.getUTCHours()
                        },
                        getMilliseconds: function() {
                            return this._.getUTCMilliseconds()
                        },
                        getMinutes: function() {
                            return this._.getUTCMinutes()
                        },
                        getMonth: function() {
                            return this._.getUTCMonth()
                        },
                        getSeconds: function() {
                            return this._.getUTCSeconds()
                        },
                        getTime: function() {
                            return this._.getTime()
                        },
                        getTimezoneOffset: function() {
                            return 0
                        },
                        valueOf: function() {
                            return this._.valueOf()
                        },
                        setDate: function() {
                            Ie.setUTCDate.apply(this._, arguments)
                        },
                        setDay: function() {
                            Ie.setUTCDay.apply(this._, arguments)
                        },
                        setFullYear: function() {
                            Ie.setUTCFullYear.apply(this._, arguments)
                        },
                        setHours: function() {
                            Ie.setUTCHours.apply(this._, arguments)
                        },
                        setMilliseconds: function() {
                            Ie.setUTCMilliseconds.apply(this._, arguments)
                        },
                        setMinutes: function() {
                            Ie.setUTCMinutes.apply(this._, arguments)
                        },
                        setMonth: function() {
                            Ie.setUTCMonth.apply(this._, arguments)
                        },
                        setSeconds: function() {
                            Ie.setUTCSeconds.apply(this._, arguments)
                        },
                        setTime: function() {
                            Ie.setTime.apply(this._, arguments)
                        }
                    };
                    var Ie = Date.prototype;

                    function Fe(t, e, n) {
                        function r(e) {
                            var n = t(e),
                                r = o(n, 1);
                            return e - n < r - e ? n : r
                        }

                        function i(n) {
                            return e(n = t(new ze(n - 1)), 1), n
                        }

                        function o(t, n) {
                            return e(t = new ze(+t), n), t
                        }

                        function a(t, r, o) {
                            var a = i(t),
                                u = [];
                            if (o > 1)
                                for (; a < r;) n(a) % o || u.push(new Date(+a)), e(a, 1);
                            else
                                for (; a < r;) u.push(new Date(+a)), e(a, 1);
                            return u
                        }
                        t.floor = t, t.round = r, t.ceil = i, t.offset = o, t.range = a;
                        var u = t.utc = Ue(t);
                        return u.floor = u, u.round = Ue(r), u.ceil = Ue(i), u.offset = Ue(o), u.range = function(t, e, n) {
                            try {
                                ze = He;
                                var r = new He;
                                return r._ = t, a(r, e, n)
                            } finally {
                                ze = Date
                            }
                        }, t
                    }

                    function Ue(t) {
                        return function(e, n) {
                            try {
                                ze = He;
                                var r = new He;
                                return r._ = e, t(r, n)._
                            } finally {
                                ze = Date
                            }
                        }
                    }

                    function Be(t) {
                        var e = t.dateTime,
                            n = t.date,
                            r = t.time,
                            i = t.periods,
                            a = t.days,
                            u = t.shortDays,
                            s = t.months,
                            l = t.shortMonths;

                        function c(t) {
                            var e = t.length;

                            function n(n) {
                                for (var r, i, o, a = [], u = -1, s = 0; ++u < e;) 37 === t.charCodeAt(u) && (a.push(t.slice(s, u)), null != (i = We[r = t.charAt(++u)]) && (r = t.charAt(++u)), (o = w[r]) && (r = o(n, null == i ? "e" === r ? " " : "0" : i)), a.push(r), s = u + 1);
                                return a.push(t.slice(s, u)), a.join("")
                            }
                            return n.parse = function(e) {
                                var n = {
                                    y: 1900,
                                    m: 0,
                                    d: 1,
                                    H: 0,
                                    M: 0,
                                    S: 0,
                                    L: 0,
                                    Z: null
                                };
                                if (f(n, t, e, 0) != e.length) return null;
                                "p" in n && (n.H = n.H % 12 + 12 * n.p);
                                var r = null != n.Z && ze !== He,
                                    i = new(r ? He : ze);
                                return "j" in n ? i.setFullYear(n.y, 0, n.j) : "w" in n && ("W" in n || "U" in n) ? (i.setFullYear(n.y, 0, 1), i.setFullYear(n.y, 0, "W" in n ? (n.w + 6) % 7 + 7 * n.W - (i.getDay() + 5) % 7 : n.w + 7 * n.U - (i.getDay() + 6) % 7)) : i.setFullYear(n.y, n.m, n.d), i.setHours(n.H + (n.Z / 100 | 0), n.M + n.Z % 100, n.S, n.L), r ? i._ : i
                            }, n.toString = function() {
                                return t
                            }, n
                        }

                        function f(t, e, n, r) {
                            for (var i, o, a, u = 0, s = e.length, l = n.length; u < s;) {
                                if (r >= l) return -1;
                                if (37 === (i = e.charCodeAt(u++))) {
                                    if (a = e.charAt(u++), !(o = M[a in We ? e.charAt(u++) : a]) || (r = o(t, n, r)) < 0) return -1
                                } else if (i != n.charCodeAt(r++)) return -1
                            }
                            return r
                        }
                        c.utc = function(t) {
                            var e = c(t);

                            function n(t) {
                                try {
                                    var n = new(ze = He);
                                    return n._ = t, e(n)
                                } finally {
                                    ze = Date
                                }
                            }
                            return n.parse = function(t) {
                                try {
                                    ze = He;
                                    var n = e.parse(t);
                                    return n && n._
                                } finally {
                                    ze = Date
                                }
                            }, n.toString = e.toString, n
                        }, c.multi = c.utc.multi = pn;
                        var p = o.map(),
                            h = Ye(a),
                            d = Ze(a),
                            g = Ye(u),
                            v = Ze(u),
                            y = Ye(s),
                            m = Ze(s),
                            x = Ye(l),
                            b = Ze(l);
                        i.forEach((function(t, e) {
                            p.set(t.toLowerCase(), e)
                        }));
                        var w = {
                                a: function(t) {
                                    return u[t.getDay()]
                                },
                                A: function(t) {
                                    return a[t.getDay()]
                                },
                                b: function(t) {
                                    return l[t.getMonth()]
                                },
                                B: function(t) {
                                    return s[t.getMonth()]
                                },
                                c: c(e),
                                d: function(t, e) {
                                    return Xe(t.getDate(), e, 2)
                                },
                                e: function(t, e) {
                                    return Xe(t.getDate(), e, 2)
                                },
                                H: function(t, e) {
                                    return Xe(t.getHours(), e, 2)
                                },
                                I: function(t, e) {
                                    return Xe(t.getHours() % 12 || 12, e, 2)
                                },
                                j: function(t, e) {
                                    return Xe(1 + Re.dayOfYear(t), e, 3)
                                },
                                L: function(t, e) {
                                    return Xe(t.getMilliseconds(), e, 3)
                                },
                                m: function(t, e) {
                                    return Xe(t.getMonth() + 1, e, 2)
                                },
                                M: function(t, e) {
                                    return Xe(t.getMinutes(), e, 2)
                                },
                                p: function(t) {
                                    return i[+(t.getHours() >= 12)]
                                },
                                S: function(t, e) {
                                    return Xe(t.getSeconds(), e, 2)
                                },
                                U: function(t, e) {
                                    return Xe(Re.sundayOfYear(t), e, 2)
                                },
                                w: function(t) {
                                    return t.getDay()
                                },
                                W: function(t, e) {
                                    return Xe(Re.mondayOfYear(t), e, 2)
                                },
                                x: c(n),
                                X: c(r),
                                y: function(t, e) {
                                    return Xe(t.getFullYear() % 100, e, 2)
                                },
                                Y: function(t, e) {
                                    return Xe(t.getFullYear() % 1e4, e, 4)
                                },
                                Z: cn,
                                "%": function() {
                                    return "%"
                                }
                            },
                            M = {
                                a: function(t, e, n) {
                                    g.lastIndex = 0;
                                    var r = g.exec(e.slice(n));
                                    return r ? (t.w = v.get(r[0].toLowerCase()), n + r[0].length) : -1
                                },
                                A: function(t, e, n) {
                                    h.lastIndex = 0;
                                    var r = h.exec(e.slice(n));
                                    return r ? (t.w = d.get(r[0].toLowerCase()), n + r[0].length) : -1
                                },
                                b: function(t, e, n) {
                                    x.lastIndex = 0;
                                    var r = x.exec(e.slice(n));
                                    return r ? (t.m = b.get(r[0].toLowerCase()), n + r[0].length) : -1
                                },
                                B: function(t, e, n) {
                                    y.lastIndex = 0;
                                    var r = y.exec(e.slice(n));
                                    return r ? (t.m = m.get(r[0].toLowerCase()), n + r[0].length) : -1
                                },
                                c: function(t, e, n) {
                                    return f(t, w.c.toString(), e, n)
                                },
                                d: rn,
                                e: rn,
                                H: an,
                                I: an,
                                j: on,
                                L: ln,
                                m: nn,
                                M: un,
                                p: function(t, e, n) {
                                    var r = p.get(e.slice(n, n += 2).toLowerCase());
                                    return null == r ? -1 : (t.p = r, n)
                                },
                                S: sn,
                                U: Ke,
                                w: Ge,
                                W: Qe,
                                x: function(t, e, n) {
                                    return f(t, w.x.toString(), e, n)
                                },
                                X: function(t, e, n) {
                                    return f(t, w.X.toString(), e, n)
                                },
                                y: tn,
                                Y: Je,
                                Z: en,
                                "%": fn
                            };
                        return c
                    }
                    Re.year = Fe((function(t) {
                        return (t = Re.day(t)).setMonth(0, 1), t
                    }), (function(t, e) {
                        t.setFullYear(t.getFullYear() + e)
                    }), (function(t) {
                        return t.getFullYear()
                    })), Re.years = Re.year.range, Re.years.utc = Re.year.utc.range, Re.day = Fe((function(t) {
                        var e = new ze(2e3, 0);
                        return e.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), e
                    }), (function(t, e) {
                        t.setDate(t.getDate() + e)
                    }), (function(t) {
                        return t.getDate() - 1
                    })), Re.days = Re.day.range, Re.days.utc = Re.day.utc.range, Re.dayOfYear = function(t) {
                        var e = Re.year(t);
                        return Math.floor((t - e - 6e4 * (t.getTimezoneOffset() - e.getTimezoneOffset())) / 864e5)
                    }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach((function(t, e) {
                        e = 7 - e;
                        var n = Re[t] = Fe((function(t) {
                            return (t = Re.day(t)).setDate(t.getDate() - (t.getDay() + e) % 7), t
                        }), (function(t, e) {
                            t.setDate(t.getDate() + 7 * Math.floor(e))
                        }), (function(t) {
                            var n = Re.year(t).getDay();
                            return Math.floor((Re.dayOfYear(t) + (n + e) % 7) / 7) - (n !== e)
                        }));
                        Re[t + "s"] = n.range, Re[t + "s"].utc = n.utc.range, Re[t + "OfYear"] = function(t) {
                            var n = Re.year(t).getDay();
                            return Math.floor((Re.dayOfYear(t) + (n + e) % 7) / 7)
                        }
                    })), Re.week = Re.sunday, Re.weeks = Re.sunday.range, Re.weeks.utc = Re.sunday.utc.range, Re.weekOfYear = Re.sundayOfYear;
                    var We = {
                            "-": "",
                            _: " ",
                            0: "0"
                        },
                        $e = /^\s*\d+/,
                        Ve = /^%/;

                    function Xe(t, e, n) {
                        var r = t < 0 ? "-" : "",
                            i = (r ? -t : t) + "",
                            o = i.length;
                        return r + (o < n ? new Array(n - o + 1).join(e) + i : i)
                    }

                    function Ye(t) {
                        return new RegExp("^(?:" + t.map(o.requote).join("|") + ")", "i")
                    }

                    function Ze(t) {
                        for (var e = new A, n = -1, r = t.length; ++n < r;) e.set(t[n].toLowerCase(), n);
                        return e
                    }

                    function Ge(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 1));
                        return r ? (t.w = +r[0], n + r[0].length) : -1
                    }

                    function Ke(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n));
                        return r ? (t.U = +r[0], n + r[0].length) : -1
                    }

                    function Qe(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n));
                        return r ? (t.W = +r[0], n + r[0].length) : -1
                    }

                    function Je(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 4));
                        return r ? (t.y = +r[0], n + r[0].length) : -1
                    }

                    function tn(t, e, n) {
                        $e.lastIndex = 0;
                        var r, i = $e.exec(e.slice(n, n + 2));
                        return i ? (t.y = (r = +i[0]) + (r > 68 ? 1900 : 2e3), n + i[0].length) : -1
                    }

                    function en(t, e, n) {
                        return /^[+-]\d{4}$/.test(e = e.slice(n, n + 5)) ? (t.Z = -e, n + 5) : -1
                    }

                    function nn(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 2));
                        return r ? (t.m = r[0] - 1, n + r[0].length) : -1
                    }

                    function rn(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 2));
                        return r ? (t.d = +r[0], n + r[0].length) : -1
                    }

                    function on(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 3));
                        return r ? (t.j = +r[0], n + r[0].length) : -1
                    }

                    function an(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 2));
                        return r ? (t.H = +r[0], n + r[0].length) : -1
                    }

                    function un(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 2));
                        return r ? (t.M = +r[0], n + r[0].length) : -1
                    }

                    function sn(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 2));
                        return r ? (t.S = +r[0], n + r[0].length) : -1
                    }

                    function ln(t, e, n) {
                        $e.lastIndex = 0;
                        var r = $e.exec(e.slice(n, n + 3));
                        return r ? (t.L = +r[0], n + r[0].length) : -1
                    }

                    function cn(t) {
                        var e = t.getTimezoneOffset(),
                            n = e > 0 ? "-" : "+",
                            r = M(e) / 60 | 0,
                            i = M(e) % 60;
                        return n + Xe(r, "0", 2) + Xe(i, "0", 2)
                    }

                    function fn(t, e, n) {
                        Ve.lastIndex = 0;
                        var r = Ve.exec(e.slice(n, n + 1));
                        return r ? n + r[0].length : -1
                    }

                    function pn(t) {
                        for (var e = t.length, n = -1; ++n < e;) t[n][0] = this(t[n][0]);
                        return function(e) {
                            for (var n = 0, r = t[n]; !r[1](e);) r = t[++n];
                            return r[0](e)
                        }
                    }
                    o.locale = function(t) {
                        return {
                            numberFormat: Oe(t),
                            timeFormat: Be(t)
                        }
                    };
                    var hn = o.locale({
                        decimal: ".",
                        thousands: ",",
                        grouping: [3],
                        currency: ["$", ""],
                        dateTime: "%a %b %e %X %Y",
                        date: "%m/%d/%Y",
                        time: "%H:%M:%S",
                        periods: ["AM", "PM"],
                        days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                        shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                    });

                    function dn() {}
                    o.format = hn.numberFormat, o.geo = {}, dn.prototype = {
                        s: 0,
                        t: 0,
                        add: function(t) {
                            vn(t, this.t, gn), vn(gn.s, this.s, this), this.s ? this.t += gn.t : this.s = gn.t
                        },
                        reset: function() {
                            this.s = this.t = 0
                        },
                        valueOf: function() {
                            return this.s
                        }
                    };
                    var gn = new dn;

                    function vn(t, e, n) {
                        var r = n.s = t + e,
                            i = r - t,
                            o = r - i;
                        n.t = t - o + (e - i)
                    }

                    function yn(t, e) {
                        t && xn.hasOwnProperty(t.type) && xn[t.type](t, e)
                    }
                    o.geo.stream = function(t, e) {
                        t && mn.hasOwnProperty(t.type) ? mn[t.type](t, e) : yn(t, e)
                    };
                    var mn = {
                            Feature: function(t, e) {
                                yn(t.geometry, e)
                            },
                            FeatureCollection: function(t, e) {
                                for (var n = t.features, r = -1, i = n.length; ++r < i;) yn(n[r].geometry, e)
                            }
                        },
                        xn = {
                            Sphere: function(t, e) {
                                e.sphere()
                            },
                            Point: function(t, e) {
                                t = t.coordinates, e.point(t[0], t[1], t[2])
                            },
                            MultiPoint: function(t, e) {
                                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) t = n[r], e.point(t[0], t[1], t[2])
                            },
                            LineString: function(t, e) {
                                bn(t.coordinates, e, 0)
                            },
                            MultiLineString: function(t, e) {
                                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) bn(n[r], e, 0)
                            },
                            Polygon: function(t, e) {
                                wn(t.coordinates, e)
                            },
                            MultiPolygon: function(t, e) {
                                for (var n = t.coordinates, r = -1, i = n.length; ++r < i;) wn(n[r], e)
                            },
                            GeometryCollection: function(t, e) {
                                for (var n = t.geometries, r = -1, i = n.length; ++r < i;) yn(n[r], e)
                            }
                        };

                    function bn(t, e, n) {
                        var r, i = -1,
                            o = t.length - n;
                        for (e.lineStart(); ++i < o;) r = t[i], e.point(r[0], r[1], r[2]);
                        e.lineEnd()
                    }

                    function wn(t, e) {
                        var n = -1,
                            r = t.length;
                        for (e.polygonStart(); ++n < r;) bn(t[n], e, 1);
                        e.polygonEnd()
                    }
                    o.geo.area = function(t) {
                        return Mn = 0, o.geo.stream(t, jn), Mn
                    };
                    var Mn, En, _n, An, Tn, Sn, Nn, Cn, kn, Dn, Ln, On, qn = new dn,
                        jn = {
                            sphere: function() {
                                Mn += 4 * Ct
                            },
                            point: z,
                            lineStart: z,
                            lineEnd: z,
                            polygonStart: function() {
                                qn.reset(), jn.lineStart = Pn
                            },
                            polygonEnd: function() {
                                var t = 2 * qn;
                                Mn += t < 0 ? 4 * Ct + t : t, jn.lineStart = jn.lineEnd = jn.point = z
                            }
                        };

                    function Pn() {
                        var t, e, n, r, i;

                        function o(t, e) {
                            e = e * Ot / 2 + Ct / 4;
                            var o = (t *= Ot) - n,
                                a = o >= 0 ? 1 : -1,
                                u = a * o,
                                s = Math.cos(e),
                                l = Math.sin(e),
                                c = i * l,
                                f = r * s + c * Math.cos(u),
                                p = c * a * Math.sin(u);
                            qn.add(Math.atan2(p, f)), n = t, r = s, i = l
                        }
                        jn.point = function(a, u) {
                            jn.point = o, n = (t = a) * Ot, r = Math.cos(u = (e = u) * Ot / 2 + Ct / 4), i = Math.sin(u)
                        }, jn.lineEnd = function() {
                            o(t, e)
                        }
                    }

                    function Rn(t) {
                        var e = t[0],
                            n = t[1],
                            r = Math.cos(n);
                        return [r * Math.cos(e), r * Math.sin(e), Math.sin(n)]
                    }

                    function zn(t, e) {
                        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2]
                    }

                    function Hn(t, e) {
                        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]]
                    }

                    function In(t, e) {
                        t[0] += e[0], t[1] += e[1], t[2] += e[2]
                    }

                    function Fn(t, e) {
                        return [t[0] * e, t[1] * e, t[2] * e]
                    }

                    function Un(t) {
                        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
                        t[0] /= e, t[1] /= e, t[2] /= e
                    }

                    function Bn(t) {
                        return [Math.atan2(t[1], t[0]), zt(t[2])]
                    }

                    function Wn(t, e) {
                        return M(t[0] - e[0]) < St && M(t[1] - e[1]) < St
                    }
                    o.geo.bounds = function() {
                        var t, e, n, r, i, a, u, s, l, c, f, p = {
                            point: h,
                            lineStart: g,
                            lineEnd: v,
                            polygonStart: function() {
                                p.point = y, p.lineStart = m, p.lineEnd = x, l = 0, jn.polygonStart()
                            },
                            polygonEnd: function() {
                                jn.polygonEnd(), p.point = h, p.lineStart = g, p.lineEnd = v, qn < 0 ? (t = -(n = 180), e = -(r = 90)) : l > St ? r = 90 : l < -St && (e = -90), f[0] = t, f[1] = n
                            }
                        };

                        function h(i, o) {
                            c.push(f = [t = i, n = i]), o < e && (e = o), o > r && (r = o)
                        }

                        function d(o, a) {
                            var u = Rn([o * Ot, a * Ot]);
                            if (s) {
                                var l = Hn(s, u),
                                    c = Hn([l[1], -l[0], 0], l);
                                Un(c), c = Bn(c);
                                var f = o - i,
                                    p = f > 0 ? 1 : -1,
                                    d = c[0] * qt * p,
                                    g = M(f) > 180;
                                if (g ^ (p * i < d && d < p * o))(v = c[1] * qt) > r && (r = v);
                                else if (g ^ (p * i < (d = (d + 360) % 360 - 180) && d < p * o)) {
                                    var v;
                                    (v = -c[1] * qt) < e && (e = v)
                                } else a < e && (e = a), a > r && (r = a);
                                g ? o < i ? b(t, o) > b(t, n) && (n = o) : b(o, n) > b(t, n) && (t = o) : n >= t ? (o < t && (t = o), o > n && (n = o)) : o > i ? b(t, o) > b(t, n) && (n = o) : b(o, n) > b(t, n) && (t = o)
                            } else h(o, a);
                            s = u, i = o
                        }

                        function g() {
                            p.point = d
                        }

                        function v() {
                            f[0] = t, f[1] = n, p.point = h, s = null
                        }

                        function y(t, e) {
                            if (s) {
                                var n = t - i;
                                l += M(n) > 180 ? n + (n > 0 ? 360 : -360) : n
                            } else a = t, u = e;
                            jn.point(t, e), d(t, e)
                        }

                        function m() {
                            jn.lineStart()
                        }

                        function x() {
                            y(a, u), jn.lineEnd(), M(l) > St && (t = -(n = 180)), f[0] = t, f[1] = n, s = null
                        }

                        function b(t, e) {
                            return (e -= t) < 0 ? e + 360 : e
                        }

                        function w(t, e) {
                            return t[0] - e[0]
                        }

                        function E(t, e) {
                            return e[0] <= e[1] ? e[0] <= t && t <= e[1] : t < e[0] || e[1] < t
                        }
                        return function(i) {
                            if (r = n = -(t = e = 1 / 0), c = [], o.geo.stream(i, p), l = c.length) {
                                c.sort(w);
                                for (var a = 1, u = [g = c[0]]; a < l; ++a) E((h = c[a])[0], g) || E(h[1], g) ? (b(g[0], h[1]) > b(g[0], g[1]) && (g[1] = h[1]), b(h[0], g[1]) > b(g[0], g[1]) && (g[0] = h[0])) : u.push(g = h);
                                for (var s, l, h, d = -1 / 0, g = (a = 0, u[l = u.length - 1]); a <= l; g = h, ++a) h = u[a], (s = b(g[1], h[0])) > d && (d = s, t = h[0], n = g[1])
                            }
                            return c = f = null, t === 1 / 0 || e === 1 / 0 ? [
                                [NaN, NaN],
                                [NaN, NaN]
                            ] : [
                                [t, e],
                                [n, r]
                            ]
                        }
                    }(), o.geo.centroid = function(t) {
                        En = _n = An = Tn = Sn = Nn = Cn = kn = Dn = Ln = On = 0, o.geo.stream(t, $n);
                        var e = Dn,
                            n = Ln,
                            r = On,
                            i = e * e + n * n + r * r;
                        return i < Nt && (e = Nn, n = Cn, r = kn, _n < St && (e = An, n = Tn, r = Sn), (i = e * e + n * n + r * r) < Nt) ? [NaN, NaN] : [Math.atan2(n, e) * qt, zt(r / Math.sqrt(i)) * qt]
                    };
                    var $n = {
                        sphere: z,
                        point: Vn,
                        lineStart: Yn,
                        lineEnd: Zn,
                        polygonStart: function() {
                            $n.lineStart = Gn
                        },
                        polygonEnd: function() {
                            $n.lineStart = Yn
                        }
                    };

                    function Vn(t, e) {
                        t *= Ot;
                        var n = Math.cos(e *= Ot);
                        Xn(n * Math.cos(t), n * Math.sin(t), Math.sin(e))
                    }

                    function Xn(t, e, n) {
                        ++En, An += (t - An) / En, Tn += (e - Tn) / En, Sn += (n - Sn) / En
                    }

                    function Yn() {
                        var t, e, n;

                        function r(r, i) {
                            r *= Ot;
                            var o = Math.cos(i *= Ot),
                                a = o * Math.cos(r),
                                u = o * Math.sin(r),
                                s = Math.sin(i),
                                l = Math.atan2(Math.sqrt((l = e * s - n * u) * l + (l = n * a - t * s) * l + (l = t * u - e * a) * l), t * a + e * u + n * s);
                            _n += l, Nn += l * (t + (t = a)), Cn += l * (e + (e = u)), kn += l * (n + (n = s)), Xn(t, e, n)
                        }
                        $n.point = function(i, o) {
                            i *= Ot;
                            var a = Math.cos(o *= Ot);
                            t = a * Math.cos(i), e = a * Math.sin(i), n = Math.sin(o), $n.point = r, Xn(t, e, n)
                        }
                    }

                    function Zn() {
                        $n.point = Vn
                    }

                    function Gn() {
                        var t, e, n, r, i;

                        function o(t, e) {
                            t *= Ot;
                            var o = Math.cos(e *= Ot),
                                a = o * Math.cos(t),
                                u = o * Math.sin(t),
                                s = Math.sin(e),
                                l = r * s - i * u,
                                c = i * a - n * s,
                                f = n * u - r * a,
                                p = Math.sqrt(l * l + c * c + f * f),
                                h = n * a + r * u + i * s,
                                d = p && -Rt(h) / p,
                                g = Math.atan2(p, h);
                            Dn += d * l, Ln += d * c, On += d * f, _n += g, Nn += g * (n + (n = a)), Cn += g * (r + (r = u)), kn += g * (i + (i = s)), Xn(n, r, i)
                        }
                        $n.point = function(a, u) {
                            t = a, e = u, $n.point = o, a *= Ot;
                            var s = Math.cos(u *= Ot);
                            n = s * Math.cos(a), r = s * Math.sin(a), i = Math.sin(u), Xn(n, r, i)
                        }, $n.lineEnd = function() {
                            o(t, e), $n.lineEnd = Zn, $n.point = Vn
                        }
                    }

                    function Kn(t, e) {
                        function n(n, r) {
                            return n = t(n, r), e(n[0], n[1])
                        }
                        return t.invert && e.invert && (n.invert = function(n, r) {
                            return (n = e.invert(n, r)) && t.invert(n[0], n[1])
                        }), n
                    }

                    function Qn() {
                        return !0
                    }

                    function Jn(t, e, n, r, i) {
                        var o = [],
                            a = [];
                        if (t.forEach((function(t) {
                                if (!((e = t.length - 1) <= 0)) {
                                    var e, n = t[0],
                                        r = t[e];
                                    if (Wn(n, r)) {
                                        i.lineStart();
                                        for (var u = 0; u < e; ++u) i.point((n = t[u])[0], n[1]);
                                        i.lineEnd()
                                    } else {
                                        var s = new er(n, t, null, !0),
                                            l = new er(n, null, s, !1);
                                        s.o = l, o.push(s), a.push(l), s = new er(r, t, null, !1), l = new er(r, null, s, !0), s.o = l, o.push(s), a.push(l)
                                    }
                                }
                            })), a.sort(e), tr(o), tr(a), o.length) {
                            for (var u = 0, s = n, l = a.length; u < l; ++u) a[u].e = s = !s;
                            for (var c, f, p = o[0];;) {
                                for (var h = p, d = !0; h.v;)
                                    if ((h = h.n) === p) return;
                                c = h.z, i.lineStart();
                                do {
                                    if (h.v = h.o.v = !0, h.e) {
                                        if (d)
                                            for (u = 0, l = c.length; u < l; ++u) i.point((f = c[u])[0], f[1]);
                                        else r(h.x, h.n.x, 1, i);
                                        h = h.n
                                    } else {
                                        if (d)
                                            for (u = (c = h.p.z).length - 1; u >= 0; --u) i.point((f = c[u])[0], f[1]);
                                        else r(h.x, h.p.x, -1, i);
                                        h = h.p
                                    }
                                    c = (h = h.o).z, d = !d
                                } while (!h.v);
                                i.lineEnd()
                            }
                        }
                    }

                    function tr(t) {
                        if (e = t.length) {
                            for (var e, n, r = 0, i = t[0]; ++r < e;) i.n = n = t[r], n.p = i, i = n;
                            i.n = n = t[0], n.p = i
                        }
                    }

                    function er(t, e, n, r) {
                        this.x = t, this.z = e, this.o = n, this.e = r, this.v = !1, this.n = this.p = null
                    }

                    function nr(t, e, n, r) {
                        return function(i, a) {
                            var u, s = e(a),
                                l = i.invert(r[0], r[1]),
                                c = {
                                    point: f,
                                    lineStart: h,
                                    lineEnd: d,
                                    polygonStart: function() {
                                        c.point = b, c.lineStart = w, c.lineEnd = M, u = [], g = []
                                    },
                                    polygonEnd: function() {
                                        c.point = f, c.lineStart = h, c.lineEnd = d, u = o.merge(u);
                                        var t = function(t, e) {
                                            var n = t[0],
                                                r = t[1],
                                                i = [Math.sin(n), -Math.cos(n), 0],
                                                o = 0,
                                                a = 0;
                                            qn.reset();
                                            for (var u = 0, s = e.length; u < s; ++u) {
                                                var l = e[u],
                                                    c = l.length;
                                                if (c)
                                                    for (var f = l[0], p = f[0], h = f[1] / 2 + Ct / 4, d = Math.sin(h), g = Math.cos(h), v = 1;;) {
                                                        v === c && (v = 0);
                                                        var y = (t = l[v])[0],
                                                            m = t[1] / 2 + Ct / 4,
                                                            x = Math.sin(m),
                                                            b = Math.cos(m),
                                                            w = y - p,
                                                            M = w >= 0 ? 1 : -1,
                                                            E = M * w,
                                                            _ = E > Ct,
                                                            A = d * x;
                                                        if (qn.add(Math.atan2(A * M * Math.sin(E), g * b + A * Math.cos(E))), o += _ ? w + M * kt : w, _ ^ p >= n ^ y >= n) {
                                                            var T = Hn(Rn(f), Rn(t));
                                                            Un(T);
                                                            var S = Hn(i, T);
                                                            Un(S);
                                                            var N = (_ ^ w >= 0 ? -1 : 1) * zt(S[2]);
                                                            (r > N || r === N && (T[0] || T[1])) && (a += _ ^ w >= 0 ? 1 : -1)
                                                        }
                                                        if (!v++) break;
                                                        p = y, d = x, g = b, f = t
                                                    }
                                            }
                                            return (o < -St || o < St && qn < 0) ^ 1 & a
                                        }(l, g);
                                        u.length ? (x || (a.polygonStart(), x = !0), Jn(u, or, t, n, a)) : t && (x || (a.polygonStart(), x = !0), a.lineStart(), n(null, null, 1, a), a.lineEnd()), x && (a.polygonEnd(), x = !1), u = g = null
                                    },
                                    sphere: function() {
                                        a.polygonStart(), a.lineStart(), n(null, null, 1, a), a.lineEnd(), a.polygonEnd()
                                    }
                                };

                            function f(e, n) {
                                var r = i(e, n);
                                t(e = r[0], n = r[1]) && a.point(e, n)
                            }

                            function p(t, e) {
                                var n = i(t, e);
                                s.point(n[0], n[1])
                            }

                            function h() {
                                c.point = p, s.lineStart()
                            }

                            function d() {
                                c.point = f, s.lineEnd()
                            }
                            var g, v, y = ir(),
                                m = e(y),
                                x = !1;

                            function b(t, e) {
                                v.push([t, e]);
                                var n = i(t, e);
                                m.point(n[0], n[1])
                            }

                            function w() {
                                m.lineStart(), v = []
                            }

                            function M() {
                                b(v[0][0], v[0][1]), m.lineEnd();
                                var t, e = m.clean(),
                                    n = y.buffer(),
                                    r = n.length;
                                if (v.pop(), g.push(v), v = null, r)
                                    if (1 & e) {
                                        var i, o = -1;
                                        if ((r = (t = n[0]).length - 1) > 0) {
                                            for (x || (a.polygonStart(), x = !0), a.lineStart(); ++o < r;) a.point((i = t[o])[0], i[1]);
                                            a.lineEnd()
                                        }
                                    } else r > 1 && 2 & e && n.push(n.pop().concat(n.shift())), u.push(n.filter(rr))
                            }
                            return c
                        }
                    }

                    function rr(t) {
                        return t.length > 1
                    }

                    function ir() {
                        var t, e = [];
                        return {
                            lineStart: function() {
                                e.push(t = [])
                            },
                            point: function(e, n) {
                                t.push([e, n])
                            },
                            lineEnd: z,
                            buffer: function() {
                                var n = e;
                                return e = [], t = null, n
                            },
                            rejoin: function() {
                                e.length > 1 && e.push(e.pop().concat(e.shift()))
                            }
                        }
                    }

                    function or(t, e) {
                        return ((t = t.x)[0] < 0 ? t[1] - Lt - St : Lt - t[1]) - ((e = e.x)[0] < 0 ? e[1] - Lt - St : Lt - e[1])
                    }
                    var ar = nr(Qn, (function(t) {
                        var e, n = NaN,
                            r = NaN,
                            i = NaN;
                        return {
                            lineStart: function() {
                                t.lineStart(), e = 1
                            },
                            point: function(o, a) {
                                var u = o > 0 ? Ct : -Ct,
                                    s = M(o - n);
                                M(s - Ct) < St ? (t.point(n, r = (r + a) / 2 > 0 ? Lt : -Lt), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), t.point(o, r), e = 0) : i !== u && s >= Ct && (M(n - i) < St && (n -= i * St), M(o - u) < St && (o -= u * St), r = function(t, e, n, r) {
                                    var i, o, a = Math.sin(t - n);
                                    return M(a) > St ? Math.atan((Math.sin(e) * (o = Math.cos(r)) * Math.sin(n) - Math.sin(r) * (i = Math.cos(e)) * Math.sin(t)) / (i * o * a)) : (e + r) / 2
                                }(n, r, o, a), t.point(i, r), t.lineEnd(), t.lineStart(), t.point(u, r), e = 0), t.point(n = o, r = a), i = u
                            },
                            lineEnd: function() {
                                t.lineEnd(), n = r = NaN
                            },
                            clean: function() {
                                return 2 - e
                            }
                        }
                    }), (function(t, e, n, r) {
                        var i;
                        if (null == t) i = n * Lt, r.point(-Ct, i), r.point(0, i), r.point(Ct, i), r.point(Ct, 0), r.point(Ct, -i), r.point(0, -i), r.point(-Ct, -i), r.point(-Ct, 0), r.point(-Ct, i);
                        else if (M(t[0] - e[0]) > St) {
                            var o = t[0] < e[0] ? Ct : -Ct;
                            i = n * o / 2, r.point(-o, i), r.point(0, i), r.point(o, i)
                        } else r.point(e[0], e[1])
                    }), [-Ct, -Ct / 2]);

                    function ur(t) {
                        var e = Math.cos(t),
                            n = e > 0,
                            r = M(e) > St;
                        return nr(i, (function(t) {
                            var e, u, s, l, c;
                            return {
                                lineStart: function() {
                                    l = s = !1, c = 1
                                },
                                point: function(f, p) {
                                    var h, d = [f, p],
                                        g = i(f, p),
                                        v = n ? g ? 0 : a(f, p) : g ? a(f + (f < 0 ? Ct : -Ct), p) : 0;
                                    if (!e && (l = s = g) && t.lineStart(), g !== s && (h = o(e, d), (Wn(e, h) || Wn(d, h)) && (d[0] += St, d[1] += St, g = i(d[0], d[1]))), g !== s) c = 0, g ? (t.lineStart(), h = o(d, e), t.point(h[0], h[1])) : (h = o(e, d), t.point(h[0], h[1]), t.lineEnd()), e = h;
                                    else if (r && e && n ^ g) {
                                        var y;
                                        v & u || !(y = o(d, e, !0)) || (c = 0, n ? (t.lineStart(), t.point(y[0][0], y[0][1]), t.point(y[1][0], y[1][1]), t.lineEnd()) : (t.point(y[1][0], y[1][1]), t.lineEnd(), t.lineStart(), t.point(y[0][0], y[0][1])))
                                    }!g || e && Wn(e, d) || t.point(d[0], d[1]), e = d, s = g, u = v
                                },
                                lineEnd: function() {
                                    s && t.lineEnd(), e = null
                                },
                                clean: function() {
                                    return c | (l && s) << 1
                                }
                            }
                        }), Wr(t, 6 * Ot), n ? [0, -t] : [-Ct, t - Ct]);

                        function i(t, n) {
                            return Math.cos(t) * Math.cos(n) > e
                        }

                        function o(t, n, r) {
                            var i = [1, 0, 0],
                                o = Hn(Rn(t), Rn(n)),
                                a = zn(o, o),
                                u = o[0],
                                s = a - u * u;
                            if (!s) return !r && t;
                            var l = e * a / s,
                                c = -e * u / s,
                                f = Hn(i, o),
                                p = Fn(i, l);
                            In(p, Fn(o, c));
                            var h = f,
                                d = zn(p, h),
                                g = zn(h, h),
                                v = d * d - g * (zn(p, p) - 1);
                            if (!(v < 0)) {
                                var y = Math.sqrt(v),
                                    m = Fn(h, (-d - y) / g);
                                if (In(m, p), m = Bn(m), !r) return m;
                                var x, b = t[0],
                                    w = n[0],
                                    E = t[1],
                                    _ = n[1];
                                w < b && (x = b, b = w, w = x);
                                var A = w - b,
                                    T = M(A - Ct) < St;
                                if (!T && _ < E && (x = E, E = _, _ = x), T || A < St ? T ? E + _ > 0 ^ m[1] < (M(m[0] - b) < St ? E : _) : E <= m[1] && m[1] <= _ : A > Ct ^ (b <= m[0] && m[0] <= w)) {
                                    var S = Fn(h, (-d + y) / g);
                                    return In(S, p), [m, Bn(S)]
                                }
                            }
                        }

                        function a(e, r) {
                            var i = n ? t : Ct - t,
                                o = 0;
                            return e < -i ? o |= 1 : e > i && (o |= 2), r < -i ? o |= 4 : r > i && (o |= 8), o
                        }
                    }

                    function sr(t, e, n, r) {
                        return function(i) {
                            var o, a = i.a,
                                u = i.b,
                                s = a.x,
                                l = a.y,
                                c = 0,
                                f = 1,
                                p = u.x - s,
                                h = u.y - l;
                            if (o = t - s, p || !(o > 0)) {
                                if (o /= p, p < 0) {
                                    if (o < c) return;
                                    o < f && (f = o)
                                } else if (p > 0) {
                                    if (o > f) return;
                                    o > c && (c = o)
                                }
                                if (o = n - s, p || !(o < 0)) {
                                    if (o /= p, p < 0) {
                                        if (o > f) return;
                                        o > c && (c = o)
                                    } else if (p > 0) {
                                        if (o < c) return;
                                        o < f && (f = o)
                                    }
                                    if (o = e - l, h || !(o > 0)) {
                                        if (o /= h, h < 0) {
                                            if (o < c) return;
                                            o < f && (f = o)
                                        } else if (h > 0) {
                                            if (o > f) return;
                                            o > c && (c = o)
                                        }
                                        if (o = r - l, h || !(o < 0)) {
                                            if (o /= h, h < 0) {
                                                if (o > f) return;
                                                o > c && (c = o)
                                            } else if (h > 0) {
                                                if (o < c) return;
                                                o < f && (f = o)
                                            }
                                            return c > 0 && (i.a = {
                                                x: s + c * p,
                                                y: l + c * h
                                            }), f < 1 && (i.b = {
                                                x: s + f * p,
                                                y: l + f * h
                                            }), i
                                        }
                                    }
                                }
                            }
                        }
                    }
                    var lr = 1e9;

                    function cr(t, e, n, r) {
                        return function(s) {
                            var l, c, f, p, h, d, g, v, y, m, x, b = s,
                                w = ir(),
                                M = sr(t, e, n, r),
                                E = {
                                    point: T,
                                    lineStart: function() {
                                        E.point = S, c && c.push(f = []);
                                        m = !0, y = !1, g = v = NaN
                                    },
                                    lineEnd: function() {
                                        l && (S(p, h), d && y && w.rejoin(), l.push(w.buffer()));
                                        E.point = T, y && s.lineEnd()
                                    },
                                    polygonStart: function() {
                                        s = w, l = [], c = [], x = !0
                                    },
                                    polygonEnd: function() {
                                        s = b, l = o.merge(l);
                                        var e = function(t) {
                                                for (var e = 0, n = c.length, r = t[1], i = 0; i < n; ++i)
                                                    for (var o, a = 1, u = c[i], s = u.length, l = u[0]; a < s; ++a) o = u[a], l[1] <= r ? o[1] > r && Pt(l, o, t) > 0 && ++e : o[1] <= r && Pt(l, o, t) < 0 && --e, l = o;
                                                return 0 !== e
                                            }([t, r]),
                                            n = x && e,
                                            i = l.length;
                                        (n || i) && (s.polygonStart(), n && (s.lineStart(), _(null, null, 1, s), s.lineEnd()), i && Jn(l, a, e, _, s), s.polygonEnd()), l = c = f = null
                                    }
                                };

                            function _(o, a, s, l) {
                                var c = 0,
                                    f = 0;
                                if (null == o || (c = i(o, s)) !== (f = i(a, s)) || u(o, a) < 0 ^ s > 0)
                                    do {
                                        l.point(0 === c || 3 === c ? t : n, c > 1 ? r : e)
                                    } while ((c = (c + s + 4) % 4) !== f);
                                else l.point(a[0], a[1])
                            }

                            function A(i, o) {
                                return t <= i && i <= n && e <= o && o <= r
                            }

                            function T(t, e) {
                                A(t, e) && s.point(t, e)
                            }

                            function S(t, e) {
                                var n = A(t = Math.max(-1e9, Math.min(lr, t)), e = Math.max(-1e9, Math.min(lr, e)));
                                if (c && f.push([t, e]), m) p = t, h = e, d = n, m = !1, n && (s.lineStart(), s.point(t, e));
                                else if (n && y) s.point(t, e);
                                else {
                                    var r = {
                                        a: {
                                            x: g,
                                            y: v
                                        },
                                        b: {
                                            x: t,
                                            y: e
                                        }
                                    };
                                    M(r) ? (y || (s.lineStart(), s.point(r.a.x, r.a.y)), s.point(r.b.x, r.b.y), n || s.lineEnd(), x = !1) : n && (s.lineStart(), s.point(t, e), x = !1)
                                }
                                g = t, v = e, y = n
                            }
                            return E
                        };

                        function i(r, i) {
                            return M(r[0] - t) < St ? i > 0 ? 0 : 3 : M(r[0] - n) < St ? i > 0 ? 2 : 1 : M(r[1] - e) < St ? i > 0 ? 1 : 0 : i > 0 ? 3 : 2
                        }

                        function a(t, e) {
                            return u(t.x, e.x)
                        }

                        function u(t, e) {
                            var n = i(t, 1),
                                r = i(e, 1);
                            return n !== r ? n - r : 0 === n ? e[1] - t[1] : 1 === n ? t[0] - e[0] : 2 === n ? t[1] - e[1] : e[0] - t[0]
                        }
                    }

                    function fr(t) {
                        var e = 0,
                            n = Ct / 3,
                            r = Pr(t),
                            i = r(e, n);
                        return i.parallels = function(t) {
                            return arguments.length ? r(e = t[0] * Ct / 180, n = t[1] * Ct / 180) : [e / Ct * 180, n / Ct * 180]
                        }, i
                    }

                    function pr(t, e) {
                        var n = Math.sin(t),
                            r = (n + Math.sin(e)) / 2,
                            i = 1 + n * (2 * r - n),
                            o = Math.sqrt(i) / r;

                        function a(t, e) {
                            var n = Math.sqrt(i - 2 * r * Math.sin(e)) / r;
                            return [n * Math.sin(t *= r), o - n * Math.cos(t)]
                        }
                        return a.invert = function(t, e) {
                            var n = o - e;
                            return [Math.atan2(t, n) / r, zt((i - (t * t + n * n) * r * r) / (2 * r))]
                        }, a
                    }
                    o.geo.clipExtent = function() {
                        var t, e, n, r, i, o, a = {
                            stream: function(t) {
                                return i && (i.valid = !1), (i = o(t)).valid = !0, i
                            },
                            extent: function(u) {
                                return arguments.length ? (o = cr(t = +u[0][0], e = +u[0][1], n = +u[1][0], r = +u[1][1]), i && (i.valid = !1, i = null), a) : [
                                    [t, e],
                                    [n, r]
                                ]
                            }
                        };
                        return a.extent([
                            [0, 0],
                            [960, 500]
                        ])
                    }, (o.geo.conicEqualArea = function() {
                        return fr(pr)
                    }).raw = pr, o.geo.albers = function() {
                        return o.geo.conicEqualArea().rotate([96, 0]).center([-.6, 38.7]).parallels([29.5, 45.5]).scale(1070)
                    }, o.geo.albersUsa = function() {
                        var t, e, n, r, i = o.geo.albers(),
                            a = o.geo.conicEqualArea().rotate([154, 0]).center([-2, 58.5]).parallels([55, 65]),
                            u = o.geo.conicEqualArea().rotate([157, 0]).center([-3, 19.9]).parallels([8, 18]),
                            s = {
                                point: function(e, n) {
                                    t = [e, n]
                                }
                            };

                        function l(i) {
                            var o = i[0],
                                a = i[1];
                            return t = null, e(o, a), t || (n(o, a), t) || r(o, a), t
                        }
                        return l.invert = function(t) {
                            var e = i.scale(),
                                n = i.translate(),
                                r = (t[0] - n[0]) / e,
                                o = (t[1] - n[1]) / e;
                            return (o >= .12 && o < .234 && r >= -.425 && r < -.214 ? a : o >= .166 && o < .234 && r >= -.214 && r < -.115 ? u : i).invert(t)
                        }, l.stream = function(t) {
                            var e = i.stream(t),
                                n = a.stream(t),
                                r = u.stream(t);
                            return {
                                point: function(t, i) {
                                    e.point(t, i), n.point(t, i), r.point(t, i)
                                },
                                sphere: function() {
                                    e.sphere(), n.sphere(), r.sphere()
                                },
                                lineStart: function() {
                                    e.lineStart(), n.lineStart(), r.lineStart()
                                },
                                lineEnd: function() {
                                    e.lineEnd(), n.lineEnd(), r.lineEnd()
                                },
                                polygonStart: function() {
                                    e.polygonStart(), n.polygonStart(), r.polygonStart()
                                },
                                polygonEnd: function() {
                                    e.polygonEnd(), n.polygonEnd(), r.polygonEnd()
                                }
                            }
                        }, l.precision = function(t) {
                            return arguments.length ? (i.precision(t), a.precision(t), u.precision(t), l) : i.precision()
                        }, l.scale = function(t) {
                            return arguments.length ? (i.scale(t), a.scale(.35 * t), u.scale(t), l.translate(i.translate())) : i.scale()
                        }, l.translate = function(t) {
                            if (!arguments.length) return i.translate();
                            var o = i.scale(),
                                c = +t[0],
                                f = +t[1];
                            return e = i.translate(t).clipExtent([
                                [c - .455 * o, f - .238 * o],
                                [c + .455 * o, f + .238 * o]
                            ]).stream(s).point, n = a.translate([c - .307 * o, f + .201 * o]).clipExtent([
                                [c - .425 * o + St, f + .12 * o + St],
                                [c - .214 * o - St, f + .234 * o - St]
                            ]).stream(s).point, r = u.translate([c - .205 * o, f + .212 * o]).clipExtent([
                                [c - .214 * o + St, f + .166 * o + St],
                                [c - .115 * o - St, f + .234 * o - St]
                            ]).stream(s).point, l
                        }, l.scale(1070)
                    };
                    var hr, dr, gr, vr, yr, mr, xr = {
                        point: z,
                        lineStart: z,
                        lineEnd: z,
                        polygonStart: function() {
                            dr = 0, xr.lineStart = br
                        },
                        polygonEnd: function() {
                            xr.lineStart = xr.lineEnd = xr.point = z, hr += M(dr / 2)
                        }
                    };

                    function br() {
                        var t, e, n, r;

                        function i(t, e) {
                            dr += r * t - n * e, n = t, r = e
                        }
                        xr.point = function(o, a) {
                            xr.point = i, t = n = o, e = r = a
                        }, xr.lineEnd = function() {
                            i(t, e)
                        }
                    }
                    var wr = {
                        point: function(t, e) {
                            t < gr && (gr = t);
                            t > yr && (yr = t);
                            e < vr && (vr = e);
                            e > mr && (mr = e)
                        },
                        lineStart: z,
                        lineEnd: z,
                        polygonStart: z,
                        polygonEnd: z
                    };

                    function Mr() {
                        var t = Er(4.5),
                            e = [],
                            n = {
                                point: r,
                                lineStart: function() {
                                    n.point = i
                                },
                                lineEnd: a,
                                polygonStart: function() {
                                    n.lineEnd = u
                                },
                                polygonEnd: function() {
                                    n.lineEnd = a, n.point = r
                                },
                                pointRadius: function(e) {
                                    return t = Er(e), n
                                },
                                result: function() {
                                    if (e.length) {
                                        var t = e.join("");
                                        return e = [], t
                                    }
                                }
                            };

                        function r(n, r) {
                            e.push("M", n, ",", r, t)
                        }

                        function i(t, r) {
                            e.push("M", t, ",", r), n.point = o
                        }

                        function o(t, n) {
                            e.push("L", t, ",", n)
                        }

                        function a() {
                            n.point = r
                        }

                        function u() {
                            e.push("Z")
                        }
                        return n
                    }

                    function Er(t) {
                        return "m0," + t + "a" + t + "," + t + " 0 1,1 0," + -2 * t + "a" + t + "," + t + " 0 1,1 0," + 2 * t + "z"
                    }
                    var _r, Ar = {
                        point: Tr,
                        lineStart: Sr,
                        lineEnd: Nr,
                        polygonStart: function() {
                            Ar.lineStart = Cr
                        },
                        polygonEnd: function() {
                            Ar.point = Tr, Ar.lineStart = Sr, Ar.lineEnd = Nr
                        }
                    };

                    function Tr(t, e) {
                        An += t, Tn += e, ++Sn
                    }

                    function Sr() {
                        var t, e;

                        function n(n, r) {
                            var i = n - t,
                                o = r - e,
                                a = Math.sqrt(i * i + o * o);
                            Nn += a * (t + n) / 2, Cn += a * (e + r) / 2, kn += a, Tr(t = n, e = r)
                        }
                        Ar.point = function(r, i) {
                            Ar.point = n, Tr(t = r, e = i)
                        }
                    }

                    function Nr() {
                        Ar.point = Tr
                    }

                    function Cr() {
                        var t, e, n, r;

                        function i(t, e) {
                            var i = t - n,
                                o = e - r,
                                a = Math.sqrt(i * i + o * o);
                            Nn += a * (n + t) / 2, Cn += a * (r + e) / 2, kn += a, Dn += (a = r * t - n * e) * (n + t), Ln += a * (r + e), On += 3 * a, Tr(n = t, r = e)
                        }
                        Ar.point = function(o, a) {
                            Ar.point = i, Tr(t = n = o, e = r = a)
                        }, Ar.lineEnd = function() {
                            i(t, e)
                        }
                    }

                    function kr(t) {
                        var e = 4.5,
                            n = {
                                point: r,
                                lineStart: function() {
                                    n.point = i
                                },
                                lineEnd: a,
                                polygonStart: function() {
                                    n.lineEnd = u
                                },
                                polygonEnd: function() {
                                    n.lineEnd = a, n.point = r
                                },
                                pointRadius: function(t) {
                                    return e = t, n
                                },
                                result: z
                            };

                        function r(n, r) {
                            t.moveTo(n + e, r), t.arc(n, r, e, 0, kt)
                        }

                        function i(e, r) {
                            t.moveTo(e, r), n.point = o
                        }

                        function o(e, n) {
                            t.lineTo(e, n)
                        }

                        function a() {
                            n.point = r
                        }

                        function u() {
                            t.closePath()
                        }
                        return n
                    }

                    function Dr(t) {
                        var e = .5,
                            n = Math.cos(30 * Ot),
                            r = 16;

                        function i(t) {
                            return (r ? a : o)(t)
                        }

                        function o(e) {
                            return qr(e, (function(n, r) {
                                n = t(n, r), e.point(n[0], n[1])
                            }))
                        }

                        function a(e) {
                            var n, i, o, a, s, l, c, f, p, h, d, g, v = {
                                point: y,
                                lineStart: m,
                                lineEnd: b,
                                polygonStart: function() {
                                    e.polygonStart(), v.lineStart = w
                                },
                                polygonEnd: function() {
                                    e.polygonEnd(), v.lineStart = m
                                }
                            };

                            function y(n, r) {
                                n = t(n, r), e.point(n[0], n[1])
                            }

                            function m() {
                                f = NaN, v.point = x, e.lineStart()
                            }

                            function x(n, i) {
                                var o = Rn([n, i]),
                                    a = t(n, i);
                                u(f, p, c, h, d, g, f = a[0], p = a[1], c = n, h = o[0], d = o[1], g = o[2], r, e), e.point(f, p)
                            }

                            function b() {
                                v.point = y, e.lineEnd()
                            }

                            function w() {
                                m(), v.point = M, v.lineEnd = E
                            }

                            function M(t, e) {
                                x(n = t, e), i = f, o = p, a = h, s = d, l = g, v.point = x
                            }

                            function E() {
                                u(f, p, c, h, d, g, i, o, n, a, s, l, r, e), v.lineEnd = b, b()
                            }
                            return v
                        }

                        function u(r, i, o, a, s, l, c, f, p, h, d, g, v, y) {
                            var m = c - r,
                                x = f - i,
                                b = m * m + x * x;
                            if (b > 4 * e && v--) {
                                var w = a + h,
                                    E = s + d,
                                    _ = l + g,
                                    A = Math.sqrt(w * w + E * E + _ * _),
                                    T = Math.asin(_ /= A),
                                    S = M(M(_) - 1) < St || M(o - p) < St ? (o + p) / 2 : Math.atan2(E, w),
                                    N = t(S, T),
                                    C = N[0],
                                    k = N[1],
                                    D = C - r,
                                    L = k - i,
                                    O = x * D - m * L;
                                (O * O / b > e || M((m * D + x * L) / b - .5) > .3 || a * h + s * d + l * g < n) && (u(r, i, o, a, s, l, C, k, S, w /= A, E /= A, _, v, y), y.point(C, k), u(C, k, S, w, E, _, c, f, p, h, d, g, v, y))
                            }
                        }
                        return i.precision = function(t) {
                            return arguments.length ? (r = (e = t * t) > 0 && 16, i) : Math.sqrt(e)
                        }, i
                    }

                    function Lr(t) {
                        var e = Dr((function(e, n) {
                            return t([e * qt, n * qt])
                        }));
                        return function(t) {
                            return Rr(e(t))
                        }
                    }

                    function Or(t) {
                        this.stream = t
                    }

                    function qr(t, e) {
                        return {
                            point: e,
                            sphere: function() {
                                t.sphere()
                            },
                            lineStart: function() {
                                t.lineStart()
                            },
                            lineEnd: function() {
                                t.lineEnd()
                            },
                            polygonStart: function() {
                                t.polygonStart()
                            },
                            polygonEnd: function() {
                                t.polygonEnd()
                            }
                        }
                    }

                    function jr(t) {
                        return Pr((function() {
                            return t
                        }))()
                    }

                    function Pr(t) {
                        var e, n, r, i, a, u, s = Dr((function(t, n) {
                                return [(t = e(t, n))[0] * l + i, a - t[1] * l]
                            })),
                            l = 150,
                            c = 480,
                            f = 250,
                            p = 0,
                            h = 0,
                            d = 0,
                            g = 0,
                            v = 0,
                            y = ar,
                            m = q,
                            x = null,
                            b = null;

                        function w(t) {
                            return [(t = r(t[0] * Ot, t[1] * Ot))[0] * l + i, a - t[1] * l]
                        }

                        function M(t) {
                            return (t = r.invert((t[0] - i) / l, (a - t[1]) / l)) && [t[0] * qt, t[1] * qt]
                        }

                        function E() {
                            r = Kn(n = Ir(d, g, v), e);
                            var t = e(p, h);
                            return i = c - t[0] * l, a = f + t[1] * l, _()
                        }

                        function _() {
                            return u && (u.valid = !1, u = null), w
                        }
                        return w.stream = function(t) {
                                return u && (u.valid = !1), (u = Rr(y(n, s(m(t))))).valid = !0, u
                            }, w.clipAngle = function(t) {
                                return arguments.length ? (y = null == t ? (x = t, ar) : ur((x = +t) * Ot), _()) : x
                            }, w.clipExtent = function(t) {
                                return arguments.length ? (b = t, m = t ? cr(t[0][0], t[0][1], t[1][0], t[1][1]) : q, _()) : b
                            }, w.scale = function(t) {
                                return arguments.length ? (l = +t, E()) : l
                            }, w.translate = function(t) {
                                return arguments.length ? (c = +t[0], f = +t[1], E()) : [c, f]
                            }, w.center = function(t) {
                                return arguments.length ? (p = t[0] % 360 * Ot, h = t[1] % 360 * Ot, E()) : [p * qt, h * qt]
                            }, w.rotate = function(t) {
                                return arguments.length ? (d = t[0] % 360 * Ot, g = t[1] % 360 * Ot, v = t.length > 2 ? t[2] % 360 * Ot : 0, E()) : [d * qt, g * qt, v * qt]
                            }, o.rebind(w, s, "precision"),
                            function() {
                                return e = t.apply(this, arguments), w.invert = e.invert && M, E()
                            }
                    }

                    function Rr(t) {
                        return qr(t, (function(e, n) {
                            t.point(e * Ot, n * Ot)
                        }))
                    }

                    function zr(t, e) {
                        return [t, e]
                    }

                    function Hr(t, e) {
                        return [t > Ct ? t - kt : t < -Ct ? t + kt : t, e]
                    }

                    function Ir(t, e, n) {
                        return t ? e || n ? Kn(Ur(t), Br(e, n)) : Ur(t) : e || n ? Br(e, n) : Hr
                    }

                    function Fr(t) {
                        return function(e, n) {
                            return [(e += t) > Ct ? e - kt : e < -Ct ? e + kt : e, n]
                        }
                    }

                    function Ur(t) {
                        var e = Fr(t);
                        return e.invert = Fr(-t), e
                    }

                    function Br(t, e) {
                        var n = Math.cos(t),
                            r = Math.sin(t),
                            i = Math.cos(e),
                            o = Math.sin(e);

                        function a(t, e) {
                            var a = Math.cos(e),
                                u = Math.cos(t) * a,
                                s = Math.sin(t) * a,
                                l = Math.sin(e),
                                c = l * n + u * r;
                            return [Math.atan2(s * i - c * o, u * n - l * r), zt(c * i + s * o)]
                        }
                        return a.invert = function(t, e) {
                            var a = Math.cos(e),
                                u = Math.cos(t) * a,
                                s = Math.sin(t) * a,
                                l = Math.sin(e),
                                c = l * i - s * o;
                            return [Math.atan2(s * i + l * o, u * n + c * r), zt(c * n - u * r)]
                        }, a
                    }

                    function Wr(t, e) {
                        var n = Math.cos(t),
                            r = Math.sin(t);
                        return function(i, o, a, u) {
                            var s = a * e;
                            null != i ? (i = $r(n, i), o = $r(n, o), (a > 0 ? i < o : i > o) && (i += a * kt)) : (i = t + a * kt, o = t - .5 * s);
                            for (var l, c = i; a > 0 ? c > o : c < o; c -= s) u.point((l = Bn([n, -r * Math.cos(c), -r * Math.sin(c)]))[0], l[1])
                        }
                    }

                    function $r(t, e) {
                        var n = Rn(e);
                        n[0] -= t, Un(n);
                        var r = Rt(-n[1]);
                        return ((-n[2] < 0 ? -r : r) + 2 * Math.PI - St) % (2 * Math.PI)
                    }

                    function Vr(t, e, n) {
                        var r = o.range(t, e - St, n).concat(e);
                        return function(t) {
                            return r.map((function(e) {
                                return [t, e]
                            }))
                        }
                    }

                    function Xr(t, e, n) {
                        var r = o.range(t, e - St, n).concat(e);
                        return function(t) {
                            return r.map((function(e) {
                                return [e, t]
                            }))
                        }
                    }

                    function Yr(t) {
                        return t.source
                    }

                    function Zr(t) {
                        return t.target
                    }
                    o.geo.path = function() {
                        var t, e, n, r, i, a = 4.5;

                        function u(t) {
                            return t && ("function" == typeof a && r.pointRadius(+a.apply(this, arguments)), i && i.valid || (i = n(r)), o.geo.stream(t, i)), r.result()
                        }

                        function s() {
                            return i = null, u
                        }
                        return u.area = function(t) {
                            return hr = 0, o.geo.stream(t, n(xr)), hr
                        }, u.centroid = function(t) {
                            return An = Tn = Sn = Nn = Cn = kn = Dn = Ln = On = 0, o.geo.stream(t, n(Ar)), On ? [Dn / On, Ln / On] : kn ? [Nn / kn, Cn / kn] : Sn ? [An / Sn, Tn / Sn] : [NaN, NaN]
                        }, u.bounds = function(t) {
                            return yr = mr = -(gr = vr = 1 / 0), o.geo.stream(t, n(wr)), [
                                [gr, vr],
                                [yr, mr]
                            ]
                        }, u.projection = function(e) {
                            return arguments.length ? (n = (t = e) ? e.stream || Lr(e) : q, s()) : t
                        }, u.context = function(t) {
                            return arguments.length ? (r = null == (e = t) ? new Mr : new kr(t), "function" != typeof a && r.pointRadius(a), s()) : e
                        }, u.pointRadius = function(t) {
                            return arguments.length ? (a = "function" == typeof t ? t : (r.pointRadius(+t), +t), u) : a
                        }, u.projection(o.geo.albersUsa()).context(null)
                    }, o.geo.transform = function(t) {
                        return {
                            stream: function(e) {
                                var n = new Or(e);
                                for (var r in t) n[r] = t[r];
                                return n
                            }
                        }
                    }, Or.prototype = {
                        point: function(t, e) {
                            this.stream.point(t, e)
                        },
                        sphere: function() {
                            this.stream.sphere()
                        },
                        lineStart: function() {
                            this.stream.lineStart()
                        },
                        lineEnd: function() {
                            this.stream.lineEnd()
                        },
                        polygonStart: function() {
                            this.stream.polygonStart()
                        },
                        polygonEnd: function() {
                            this.stream.polygonEnd()
                        }
                    }, o.geo.projection = jr, o.geo.projectionMutator = Pr, (o.geo.equirectangular = function() {
                        return jr(zr)
                    }).raw = zr.invert = zr, o.geo.rotation = function(t) {
                        function e(e) {
                            return (e = t(e[0] * Ot, e[1] * Ot))[0] *= qt, e[1] *= qt, e
                        }
                        return t = Ir(t[0] % 360 * Ot, t[1] * Ot, t.length > 2 ? t[2] * Ot : 0), e.invert = function(e) {
                            return (e = t.invert(e[0] * Ot, e[1] * Ot))[0] *= qt, e[1] *= qt, e
                        }, e
                    }, Hr.invert = zr, o.geo.circle = function() {
                        var t, e, n = [0, 0],
                            r = 6;

                        function i() {
                            var t = "function" == typeof n ? n.apply(this, arguments) : n,
                                r = Ir(-t[0] * Ot, -t[1] * Ot, 0).invert,
                                i = [];
                            return e(null, null, 1, {
                                point: function(t, e) {
                                    i.push(t = r(t, e)), t[0] *= qt, t[1] *= qt
                                }
                            }), {
                                type: "Polygon",
                                coordinates: [i]
                            }
                        }
                        return i.origin = function(t) {
                            return arguments.length ? (n = t, i) : n
                        }, i.angle = function(n) {
                            return arguments.length ? (e = Wr((t = +n) * Ot, r * Ot), i) : t
                        }, i.precision = function(n) {
                            return arguments.length ? (e = Wr(t * Ot, (r = +n) * Ot), i) : r
                        }, i.angle(90)
                    }, o.geo.distance = function(t, e) {
                        var n, r = (e[0] - t[0]) * Ot,
                            i = t[1] * Ot,
                            o = e[1] * Ot,
                            a = Math.sin(r),
                            u = Math.cos(r),
                            s = Math.sin(i),
                            l = Math.cos(i),
                            c = Math.sin(o),
                            f = Math.cos(o);
                        return Math.atan2(Math.sqrt((n = f * a) * n + (n = l * c - s * f * u) * n), s * c + l * f * u)
                    }, o.geo.graticule = function() {
                        var t, e, n, r, i, a, u, s, l, c, f, p, h = 10,
                            d = h,
                            g = 90,
                            v = 360,
                            y = 2.5;

                        function m() {
                            return {
                                type: "MultiLineString",
                                coordinates: x()
                            }
                        }

                        function x() {
                            return o.range(Math.ceil(r / g) * g, n, g).map(f).concat(o.range(Math.ceil(s / v) * v, u, v).map(p)).concat(o.range(Math.ceil(e / h) * h, t, h).filter((function(t) {
                                return M(t % g) > St
                            })).map(l)).concat(o.range(Math.ceil(a / d) * d, i, d).filter((function(t) {
                                return M(t % v) > St
                            })).map(c))
                        }
                        return m.lines = function() {
                            return x().map((function(t) {
                                return {
                                    type: "LineString",
                                    coordinates: t
                                }
                            }))
                        }, m.outline = function() {
                            return {
                                type: "Polygon",
                                coordinates: [f(r).concat(p(u).slice(1), f(n).reverse().slice(1), p(s).reverse().slice(1))]
                            }
                        }, m.extent = function(t) {
                            return arguments.length ? m.majorExtent(t).minorExtent(t) : m.minorExtent()
                        }, m.majorExtent = function(t) {
                            return arguments.length ? (r = +t[0][0], n = +t[1][0], s = +t[0][1], u = +t[1][1], r > n && (t = r, r = n, n = t), s > u && (t = s, s = u, u = t), m.precision(y)) : [
                                [r, s],
                                [n, u]
                            ]
                        }, m.minorExtent = function(n) {
                            return arguments.length ? (e = +n[0][0], t = +n[1][0], a = +n[0][1], i = +n[1][1], e > t && (n = e, e = t, t = n), a > i && (n = a, a = i, i = n), m.precision(y)) : [
                                [e, a],
                                [t, i]
                            ]
                        }, m.step = function(t) {
                            return arguments.length ? m.majorStep(t).minorStep(t) : m.minorStep()
                        }, m.majorStep = function(t) {
                            return arguments.length ? (g = +t[0], v = +t[1], m) : [g, v]
                        }, m.minorStep = function(t) {
                            return arguments.length ? (h = +t[0], d = +t[1], m) : [h, d]
                        }, m.precision = function(o) {
                            return arguments.length ? (y = +o, l = Vr(a, i, 90), c = Xr(e, t, y), f = Vr(s, u, 90), p = Xr(r, n, y), m) : y
                        }, m.majorExtent([
                            [-180, -90 + St],
                            [180, 90 - St]
                        ]).minorExtent([
                            [-180, -80 - St],
                            [180, 80 + St]
                        ])
                    }, o.geo.greatArc = function() {
                        var t, e, n = Yr,
                            r = Zr;

                        function i() {
                            return {
                                type: "LineString",
                                coordinates: [t || n.apply(this, arguments), e || r.apply(this, arguments)]
                            }
                        }
                        return i.distance = function() {
                            return o.geo.distance(t || n.apply(this, arguments), e || r.apply(this, arguments))
                        }, i.source = function(e) {
                            return arguments.length ? (n = e, t = "function" == typeof e ? null : e, i) : n
                        }, i.target = function(t) {
                            return arguments.length ? (r = t, e = "function" == typeof t ? null : t, i) : r
                        }, i.precision = function() {
                            return arguments.length ? i : 0
                        }, i
                    }, o.geo.interpolate = function(t, e) {
                        return n = t[0] * Ot, r = t[1] * Ot, i = e[0] * Ot, o = e[1] * Ot, a = Math.cos(r), u = Math.sin(r), s = Math.cos(o), l = Math.sin(o), c = a * Math.cos(n), f = a * Math.sin(n), p = s * Math.cos(i), h = s * Math.sin(i), d = 2 * Math.asin(Math.sqrt(It(o - r) + a * s * It(i - n))), g = 1 / Math.sin(d), (v = d ? function(t) {
                            var e = Math.sin(t *= d) * g,
                                n = Math.sin(d - t) * g,
                                r = n * c + e * p,
                                i = n * f + e * h,
                                o = n * u + e * l;
                            return [Math.atan2(i, r) * qt, Math.atan2(o, Math.sqrt(r * r + i * i)) * qt]
                        } : function() {
                            return [n * qt, r * qt]
                        }).distance = d, v;
                        var n, r, i, o, a, u, s, l, c, f, p, h, d, g, v
                    }, o.geo.length = function(t) {
                        return _r = 0, o.geo.stream(t, Gr), _r
                    };
                    var Gr = {
                        sphere: z,
                        point: z,
                        lineStart: function() {
                            var t, e, n;

                            function r(r, i) {
                                var o = Math.sin(i *= Ot),
                                    a = Math.cos(i),
                                    u = M((r *= Ot) - t),
                                    s = Math.cos(u);
                                _r += Math.atan2(Math.sqrt((u = a * Math.sin(u)) * u + (u = n * o - e * a * s) * u), e * o + n * a * s), t = r, e = o, n = a
                            }
                            Gr.point = function(i, o) {
                                t = i * Ot, e = Math.sin(o *= Ot), n = Math.cos(o), Gr.point = r
                            }, Gr.lineEnd = function() {
                                Gr.point = Gr.lineEnd = z
                            }
                        },
                        lineEnd: z,
                        polygonStart: z,
                        polygonEnd: z
                    };

                    function Kr(t, e) {
                        function n(e, n) {
                            var r = Math.cos(e),
                                i = Math.cos(n),
                                o = t(r * i);
                            return [o * i * Math.sin(e), o * Math.sin(n)]
                        }
                        return n.invert = function(t, n) {
                            var r = Math.sqrt(t * t + n * n),
                                i = e(r),
                                o = Math.sin(i),
                                a = Math.cos(i);
                            return [Math.atan2(t * o, r * a), Math.asin(r && n * o / r)]
                        }, n
                    }
                    var Qr = Kr((function(t) {
                        return Math.sqrt(2 / (1 + t))
                    }), (function(t) {
                        return 2 * Math.asin(t / 2)
                    }));
                    (o.geo.azimuthalEqualArea = function() {
                        return jr(Qr)
                    }).raw = Qr;
                    var Jr = Kr((function(t) {
                        var e = Math.acos(t);
                        return e && e / Math.sin(e)
                    }), q);

                    function ti(t, e) {
                        var n = Math.cos(t),
                            r = function(t) {
                                return Math.tan(Ct / 4 + t / 2)
                            },
                            i = t === e ? Math.sin(t) : Math.log(n / Math.cos(e)) / Math.log(r(e) / r(t)),
                            o = n * Math.pow(r(t), i) / i;
                        if (!i) return ri;

                        function a(t, e) {
                            o > 0 ? e < -Lt + St && (e = -Lt + St) : e > Lt - St && (e = Lt - St);
                            var n = o / Math.pow(r(e), i);
                            return [n * Math.sin(i * t), o - n * Math.cos(i * t)]
                        }
                        return a.invert = function(t, e) {
                            var n = o - e,
                                r = jt(i) * Math.sqrt(t * t + n * n);
                            return [Math.atan2(t, n) / i, 2 * Math.atan(Math.pow(o / r, 1 / i)) - Lt]
                        }, a
                    }

                    function ei(t, e) {
                        var n = Math.cos(t),
                            r = t === e ? Math.sin(t) : (n - Math.cos(e)) / (e - t),
                            i = n / r + t;
                        if (M(r) < St) return zr;

                        function o(t, e) {
                            var n = i - e;
                            return [n * Math.sin(r * t), i - n * Math.cos(r * t)]
                        }
                        return o.invert = function(t, e) {
                            var n = i - e;
                            return [Math.atan2(t, n) / r, i - jt(r) * Math.sqrt(t * t + n * n)]
                        }, o
                    }(o.geo.azimuthalEquidistant = function() {
                        return jr(Jr)
                    }).raw = Jr, (o.geo.conicConformal = function() {
                        return fr(ti)
                    }).raw = ti, (o.geo.conicEquidistant = function() {
                        return fr(ei)
                    }).raw = ei;
                    var ni = Kr((function(t) {
                        return 1 / t
                    }), Math.atan);

                    function ri(t, e) {
                        return [t, Math.log(Math.tan(Ct / 4 + e / 2))]
                    }

                    function ii(t) {
                        var e, n = jr(t),
                            r = n.scale,
                            i = n.translate,
                            o = n.clipExtent;
                        return n.scale = function() {
                            var t = r.apply(n, arguments);
                            return t === n ? e ? n.clipExtent(null) : n : t
                        }, n.translate = function() {
                            var t = i.apply(n, arguments);
                            return t === n ? e ? n.clipExtent(null) : n : t
                        }, n.clipExtent = function(t) {
                            var a = o.apply(n, arguments);
                            if (a === n) {
                                if (e = null == t) {
                                    var u = Ct * r(),
                                        s = i();
                                    o([
                                        [s[0] - u, s[1] - u],
                                        [s[0] + u, s[1] + u]
                                    ])
                                }
                            } else e && (a = null);
                            return a
                        }, n.clipExtent(null)
                    }(o.geo.gnomonic = function() {
                        return jr(ni)
                    }).raw = ni, ri.invert = function(t, e) {
                        return [t, 2 * Math.atan(Math.exp(e)) - Lt]
                    }, (o.geo.mercator = function() {
                        return ii(ri)
                    }).raw = ri;
                    var oi = Kr((function() {
                        return 1
                    }), Math.asin);
                    (o.geo.orthographic = function() {
                        return jr(oi)
                    }).raw = oi;
                    var ai = Kr((function(t) {
                        return 1 / (1 + t)
                    }), (function(t) {
                        return 2 * Math.atan(t)
                    }));

                    function ui(t, e) {
                        return [Math.log(Math.tan(Ct / 4 + e / 2)), -t]
                    }

                    function si(t) {
                        return t[0]
                    }

                    function li(t) {
                        return t[1]
                    }

                    function ci(t) {
                        for (var e = t.length, n = [0, 1], r = 2, i = 2; i < e; i++) {
                            for (; r > 1 && Pt(t[n[r - 2]], t[n[r - 1]], t[i]) <= 0;) --r;
                            n[r++] = i
                        }
                        return n.slice(0, r)
                    }

                    function fi(t, e) {
                        return t[0] - e[0] || t[1] - e[1]
                    }(o.geo.stereographic = function() {
                        return jr(ai)
                    }).raw = ai, ui.invert = function(t, e) {
                        return [-e, 2 * Math.atan(Math.exp(t)) - Lt]
                    }, (o.geo.transverseMercator = function() {
                        var t = ii(ui),
                            e = t.center,
                            n = t.rotate;
                        return t.center = function(t) {
                            return t ? e([-t[1], t[0]]) : [(t = e())[1], -t[0]]
                        }, t.rotate = function(t) {
                            return t ? n([t[0], t[1], t.length > 2 ? t[2] + 90 : 90]) : [(t = n())[0], t[1], t[2] - 90]
                        }, n([0, 0, 90])
                    }).raw = ui, o.geom = {}, o.geom.hull = function(t) {
                        var e = si,
                            n = li;
                        if (arguments.length) return r(t);

                        function r(t) {
                            if (t.length < 3) return [];
                            var r, i = xe(e),
                                o = xe(n),
                                a = t.length,
                                u = [],
                                s = [];
                            for (r = 0; r < a; r++) u.push([+i.call(this, t[r], r), +o.call(this, t[r], r), r]);
                            for (u.sort(fi), r = 0; r < a; r++) s.push([u[r][0], -u[r][1]]);
                            var l = ci(u),
                                c = ci(s),
                                f = c[0] === l[0],
                                p = c[c.length - 1] === l[l.length - 1],
                                h = [];
                            for (r = l.length - 1; r >= 0; --r) h.push(t[u[l[r]][2]]);
                            for (r = +f; r < c.length - p; ++r) h.push(t[u[c[r]][2]]);
                            return h
                        }
                        return r.x = function(t) {
                            return arguments.length ? (e = t, r) : e
                        }, r.y = function(t) {
                            return arguments.length ? (n = t, r) : n
                        }, r
                    }, o.geom.polygon = function(t) {
                        return $(t, pi), t
                    };
                    var pi = o.geom.polygon.prototype = [];

                    function hi(t, e, n) {
                        return (n[0] - e[0]) * (t[1] - e[1]) < (n[1] - e[1]) * (t[0] - e[0])
                    }

                    function di(t, e, n, r) {
                        var i = t[0],
                            o = n[0],
                            a = e[0] - i,
                            u = r[0] - o,
                            s = t[1],
                            l = n[1],
                            c = e[1] - s,
                            f = r[1] - l,
                            p = (u * (s - l) - f * (i - o)) / (f * a - u * c);
                        return [i + p * a, s + p * c]
                    }

                    function gi(t) {
                        var e = t[0],
                            n = t[t.length - 1];
                        return !(e[0] - n[0] || e[1] - n[1])
                    }
                    pi.area = function() {
                        for (var t, e = -1, n = this.length, r = this[n - 1], i = 0; ++e < n;) t = r, r = this[e], i += t[1] * r[0] - t[0] * r[1];
                        return .5 * i
                    }, pi.centroid = function(t) {
                        var e, n, r = -1,
                            i = this.length,
                            o = 0,
                            a = 0,
                            u = this[i - 1];
                        for (arguments.length || (t = -1 / (6 * this.area())); ++r < i;) e = u, u = this[r], n = e[0] * u[1] - u[0] * e[1], o += (e[0] + u[0]) * n, a += (e[1] + u[1]) * n;
                        return [o * t, a * t]
                    }, pi.clip = function(t) {
                        for (var e, n, r, i, o, a, u = gi(t), s = -1, l = this.length - gi(this), c = this[l - 1]; ++s < l;) {
                            for (e = t.slice(), t.length = 0, i = this[s], o = e[(r = e.length - u) - 1], n = -1; ++n < r;) hi(a = e[n], c, i) ? (hi(o, c, i) || t.push(di(o, a, c, i)), t.push(a)) : hi(o, c, i) && t.push(di(o, a, c, i)), o = a;
                            u && t.push(t[0]), c = i
                        }
                        return t
                    };
                    var vi, yi, mi, xi, bi, wi = [],
                        Mi = [];

                    function Ei() {
                        Ui(this), this.edge = this.site = this.circle = null
                    }

                    function _i(t) {
                        var e = wi.pop() || new Ei;
                        return e.site = t, e
                    }

                    function Ai(t) {
                        qi(t), mi.remove(t), wi.push(t), Ui(t)
                    }

                    function Ti(t) {
                        var e = t.circle,
                            n = e.x,
                            r = e.cy,
                            i = {
                                x: n,
                                y: r
                            },
                            o = t.P,
                            a = t.N,
                            u = [t];
                        Ai(t);
                        for (var s = o; s.circle && M(n - s.circle.x) < St && M(r - s.circle.cy) < St;) o = s.P, u.unshift(s), Ai(s), s = o;
                        u.unshift(s), qi(s);
                        for (var l = a; l.circle && M(n - l.circle.x) < St && M(r - l.circle.cy) < St;) a = l.N, u.push(l), Ai(l), l = a;
                        u.push(l), qi(l);
                        var c, f = u.length;
                        for (c = 1; c < f; ++c) l = u[c], s = u[c - 1], Hi(l.edge, s.site, l.site, i);
                        s = u[0], (l = u[f - 1]).edge = Ri(s.site, l.site, null, i), Oi(s), Oi(l)
                    }

                    function Si(t) {
                        for (var e, n, r, i, o = t.x, a = t.y, u = mi._; u;)
                            if ((r = Ni(u, a) - o) > St) u = u.L;
                            else {
                                if (!((i = o - Ci(u, a)) > St)) {
                                    r > -St ? (e = u.P, n = u) : i > -St ? (e = u, n = u.N) : e = n = u;
                                    break
                                }
                                if (!u.R) {
                                    e = u;
                                    break
                                }
                                u = u.R
                            } var s = _i(t);
                        if (mi.insert(e, s), e || n) {
                            if (e === n) return qi(e), n = _i(e.site), mi.insert(s, n), s.edge = n.edge = Ri(e.site, s.site), Oi(e), void Oi(n);
                            if (n) {
                                qi(e), qi(n);
                                var l = e.site,
                                    c = l.x,
                                    f = l.y,
                                    p = t.x - c,
                                    h = t.y - f,
                                    d = n.site,
                                    g = d.x - c,
                                    v = d.y - f,
                                    y = 2 * (p * v - h * g),
                                    m = p * p + h * h,
                                    x = g * g + v * v,
                                    b = {
                                        x: (v * m - h * x) / y + c,
                                        y: (p * x - g * m) / y + f
                                    };
                                Hi(n.edge, l, d, b), s.edge = Ri(l, t, null, b), n.edge = Ri(t, d, null, b), Oi(e), Oi(n)
                            } else s.edge = Ri(e.site, s.site)
                        }
                    }

                    function Ni(t, e) {
                        var n = t.site,
                            r = n.x,
                            i = n.y,
                            o = i - e;
                        if (!o) return r;
                        var a = t.P;
                        if (!a) return -1 / 0;
                        var u = (n = a.site).x,
                            s = n.y,
                            l = s - e;
                        if (!l) return u;
                        var c = u - r,
                            f = 1 / o - 1 / l,
                            p = c / l;
                        return f ? (-p + Math.sqrt(p * p - 2 * f * (c * c / (-2 * l) - s + l / 2 + i - o / 2))) / f + r : (r + u) / 2
                    }

                    function Ci(t, e) {
                        var n = t.N;
                        if (n) return Ni(n, e);
                        var r = t.site;
                        return r.y === e ? r.x : 1 / 0
                    }

                    function ki(t) {
                        this.site = t, this.edges = []
                    }

                    function Di(t, e) {
                        return e.angle - t.angle
                    }

                    function Li() {
                        Ui(this), this.x = this.y = this.arc = this.site = this.cy = null
                    }

                    function Oi(t) {
                        var e = t.P,
                            n = t.N;
                        if (e && n) {
                            var r = e.site,
                                i = t.site,
                                o = n.site;
                            if (r !== o) {
                                var a = i.x,
                                    u = i.y,
                                    s = r.x - a,
                                    l = r.y - u,
                                    c = o.x - a,
                                    f = 2 * (s * (v = o.y - u) - l * c);
                                if (!(f >= -Nt)) {
                                    var p = s * s + l * l,
                                        h = c * c + v * v,
                                        d = (v * p - l * h) / f,
                                        g = (s * h - c * p) / f,
                                        v = g + u,
                                        y = Mi.pop() || new Li;
                                    y.arc = t, y.site = i, y.x = d + a, y.y = v + Math.sqrt(d * d + g * g), y.cy = v, t.circle = y;
                                    for (var m = null, x = bi._; x;)
                                        if (y.y < x.y || y.y === x.y && y.x <= x.x) {
                                            if (!x.L) {
                                                m = x.P;
                                                break
                                            }
                                            x = x.L
                                        } else {
                                            if (!x.R) {
                                                m = x;
                                                break
                                            }
                                            x = x.R
                                        } bi.insert(m, y), m || (xi = y)
                                }
                            }
                        }
                    }

                    function qi(t) {
                        var e = t.circle;
                        e && (e.P || (xi = e.N), bi.remove(e), Mi.push(e), Ui(e), t.circle = null)
                    }

                    function ji(t, e) {
                        var n = t.b;
                        if (n) return !0;
                        var r, i, o = t.a,
                            a = e[0][0],
                            u = e[1][0],
                            s = e[0][1],
                            l = e[1][1],
                            c = t.l,
                            f = t.r,
                            p = c.x,
                            h = c.y,
                            d = f.x,
                            g = f.y,
                            v = (p + d) / 2,
                            y = (h + g) / 2;
                        if (g === h) {
                            if (v < a || v >= u) return;
                            if (p > d) {
                                if (o) {
                                    if (o.y >= l) return
                                } else o = {
                                    x: v,
                                    y: s
                                };
                                n = {
                                    x: v,
                                    y: l
                                }
                            } else {
                                if (o) {
                                    if (o.y < s) return
                                } else o = {
                                    x: v,
                                    y: l
                                };
                                n = {
                                    x: v,
                                    y: s
                                }
                            }
                        } else if (i = y - (r = (p - d) / (g - h)) * v, r < -1 || r > 1)
                            if (p > d) {
                                if (o) {
                                    if (o.y >= l) return
                                } else o = {
                                    x: (s - i) / r,
                                    y: s
                                };
                                n = {
                                    x: (l - i) / r,
                                    y: l
                                }
                            } else {
                                if (o) {
                                    if (o.y < s) return
                                } else o = {
                                    x: (l - i) / r,
                                    y: l
                                };
                                n = {
                                    x: (s - i) / r,
                                    y: s
                                }
                            }
                        else if (h < g) {
                            if (o) {
                                if (o.x >= u) return
                            } else o = {
                                x: a,
                                y: r * a + i
                            };
                            n = {
                                x: u,
                                y: r * u + i
                            }
                        } else {
                            if (o) {
                                if (o.x < a) return
                            } else o = {
                                x: u,
                                y: r * u + i
                            };
                            n = {
                                x: a,
                                y: r * a + i
                            }
                        }
                        return t.a = o, t.b = n, !0
                    }

                    function Pi(t, e) {
                        this.l = t, this.r = e, this.a = this.b = null
                    }

                    function Ri(t, e, n, r) {
                        var i = new Pi(t, e);
                        return vi.push(i), n && Hi(i, t, e, n), r && Hi(i, e, t, r), yi[t.i].edges.push(new Ii(i, t, e)), yi[e.i].edges.push(new Ii(i, e, t)), i
                    }

                    function zi(t, e, n) {
                        var r = new Pi(t, null);
                        return r.a = e, r.b = n, vi.push(r), r
                    }

                    function Hi(t, e, n, r) {
                        t.a || t.b ? t.l === n ? t.b = r : t.a = r : (t.a = r, t.l = e, t.r = n)
                    }

                    function Ii(t, e, n) {
                        var r = t.a,
                            i = t.b;
                        this.edge = t, this.site = e, this.angle = n ? Math.atan2(n.y - e.y, n.x - e.x) : t.l === e ? Math.atan2(i.x - r.x, r.y - i.y) : Math.atan2(r.x - i.x, i.y - r.y)
                    }

                    function Fi() {
                        this._ = null
                    }

                    function Ui(t) {
                        t.U = t.C = t.L = t.R = t.P = t.N = null
                    }

                    function Bi(t, e) {
                        var n = e,
                            r = e.R,
                            i = n.U;
                        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.R = r.L, n.R && (n.R.U = n), r.L = n
                    }

                    function Wi(t, e) {
                        var n = e,
                            r = e.L,
                            i = n.U;
                        i ? i.L === n ? i.L = r : i.R = r : t._ = r, r.U = i, n.U = r, n.L = r.R, n.L && (n.L.U = n), r.R = n
                    }

                    function $i(t) {
                        for (; t.L;) t = t.L;
                        return t
                    }

                    function Vi(t, e) {
                        var n, r, i, o = t.sort(Xi).pop();
                        for (vi = [], yi = new Array(t.length), mi = new Fi, bi = new Fi;;)
                            if (i = xi, o && (!i || o.y < i.y || o.y === i.y && o.x < i.x)) o.x === n && o.y === r || (yi[o.i] = new ki(o), Si(o), n = o.x, r = o.y), o = t.pop();
                            else {
                                if (!i) break;
                                Ti(i.arc)
                            } e && (function(t) {
                            for (var e, n = vi, r = sr(t[0][0], t[0][1], t[1][0], t[1][1]), i = n.length; i--;)(!ji(e = n[i], t) || !r(e) || M(e.a.x - e.b.x) < St && M(e.a.y - e.b.y) < St) && (e.a = e.b = null, n.splice(i, 1))
                        }(e), function(t) {
                            for (var e, n, r, i, o, a, u, s, l, c, f = t[0][0], p = t[1][0], h = t[0][1], d = t[1][1], g = yi, v = g.length; v--;)
                                if ((o = g[v]) && o.prepare())
                                    for (s = (u = o.edges).length, a = 0; a < s;) r = (c = u[a].end()).x, i = c.y, e = (l = u[++a % s].start()).x, n = l.y, (M(r - e) > St || M(i - n) > St) && (u.splice(a, 0, new Ii(zi(o.site, c, M(r - f) < St && d - i > St ? {
                                        x: f,
                                        y: M(e - f) < St ? n : d
                                    } : M(i - d) < St && p - r > St ? {
                                        x: M(n - d) < St ? e : p,
                                        y: d
                                    } : M(r - p) < St && i - h > St ? {
                                        x: p,
                                        y: M(e - p) < St ? n : h
                                    } : M(i - h) < St && r - f > St ? {
                                        x: M(n - h) < St ? e : f,
                                        y: h
                                    } : null), o.site, null)), ++s)
                        }(e));
                        var a = {
                            cells: yi,
                            edges: vi
                        };
                        return mi = bi = vi = yi = null, a
                    }

                    function Xi(t, e) {
                        return e.y - t.y || e.x - t.x
                    }
                    ki.prototype.prepare = function() {
                        for (var t, e = this.edges, n = e.length; n--;)(t = e[n].edge).b && t.a || e.splice(n, 1);
                        return e.sort(Di), e.length
                    }, Ii.prototype = {
                        start: function() {
                            return this.edge.l === this.site ? this.edge.a : this.edge.b
                        },
                        end: function() {
                            return this.edge.l === this.site ? this.edge.b : this.edge.a
                        }
                    }, Fi.prototype = {
                        insert: function(t, e) {
                            var n, r, i;
                            if (t) {
                                if (e.P = t, e.N = t.N, t.N && (t.N.P = e), t.N = e, t.R) {
                                    for (t = t.R; t.L;) t = t.L;
                                    t.L = e
                                } else t.R = e;
                                n = t
                            } else this._ ? (t = $i(this._), e.P = null, e.N = t, t.P = t.L = e, n = t) : (e.P = e.N = null, this._ = e, n = null);
                            for (e.L = e.R = null, e.U = n, e.C = !0, t = e; n && n.C;) n === (r = n.U).L ? (i = r.R) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.R && (Bi(this, n), n = (t = n).U), n.C = !1, r.C = !0, Wi(this, r)) : (i = r.L) && i.C ? (n.C = i.C = !1, r.C = !0, t = r) : (t === n.L && (Wi(this, n), n = (t = n).U), n.C = !1, r.C = !0, Bi(this, r)), n = t.U;
                            this._.C = !1
                        },
                        remove: function(t) {
                            t.N && (t.N.P = t.P), t.P && (t.P.N = t.N), t.N = t.P = null;
                            var e, n, r, i = t.U,
                                o = t.L,
                                a = t.R;
                            if (n = o ? a ? $i(a) : o : a, i ? i.L === t ? i.L = n : i.R = n : this._ = n, o && a ? (r = n.C, n.C = t.C, n.L = o, o.U = n, n !== a ? (i = n.U, n.U = t.U, t = n.R, i.L = t, n.R = a, a.U = n) : (n.U = i, i = n, t = n.R)) : (r = t.C, t = n), t && (t.U = i), !r)
                                if (t && t.C) t.C = !1;
                                else {
                                    do {
                                        if (t === this._) break;
                                        if (t === i.L) {
                                            if ((e = i.R).C && (e.C = !1, i.C = !0, Bi(this, i), e = i.R), e.L && e.L.C || e.R && e.R.C) {
                                                e.R && e.R.C || (e.L.C = !1, e.C = !0, Wi(this, e), e = i.R), e.C = i.C, i.C = e.R.C = !1, Bi(this, i), t = this._;
                                                break
                                            }
                                        } else if ((e = i.L).C && (e.C = !1, i.C = !0, Wi(this, i), e = i.L), e.L && e.L.C || e.R && e.R.C) {
                                            e.L && e.L.C || (e.R.C = !1, e.C = !0, Bi(this, e), e = i.L), e.C = i.C, i.C = e.L.C = !1, Wi(this, i), t = this._;
                                            break
                                        }
                                        e.C = !0, t = i, i = i.U
                                    } while (!t.C);
                                    t && (t.C = !1)
                                }
                        }
                    }, o.geom.voronoi = function(t) {
                        var e = si,
                            n = li,
                            r = e,
                            i = n,
                            o = Yi;
                        if (t) return a(t);

                        function a(t) {
                            var e = new Array(t.length),
                                n = o[0][0],
                                r = o[0][1],
                                i = o[1][0],
                                a = o[1][1];
                            return Vi(u(t), o).cells.forEach((function(o, u) {
                                var s = o.edges,
                                    l = o.site;
                                (e[u] = s.length ? s.map((function(t) {
                                    var e = t.start();
                                    return [e.x, e.y]
                                })) : l.x >= n && l.x <= i && l.y >= r && l.y <= a ? [
                                    [n, a],
                                    [i, a],
                                    [i, r],
                                    [n, r]
                                ] : []).point = t[u]
                            })), e
                        }

                        function u(t) {
                            return t.map((function(t, e) {
                                return {
                                    x: Math.round(r(t, e) / St) * St,
                                    y: Math.round(i(t, e) / St) * St,
                                    i: e
                                }
                            }))
                        }
                        return a.links = function(t) {
                            return Vi(u(t)).edges.filter((function(t) {
                                return t.l && t.r
                            })).map((function(e) {
                                return {
                                    source: t[e.l.i],
                                    target: t[e.r.i]
                                }
                            }))
                        }, a.triangles = function(t) {
                            var e = [];
                            return Vi(u(t)).cells.forEach((function(n, r) {
                                for (var i, o, a, u, s = n.site, l = n.edges.sort(Di), c = -1, f = l.length, p = l[f - 1].edge, h = p.l === s ? p.r : p.l; ++c < f;) p, i = h, h = (p = l[c].edge).l === s ? p.r : p.l, r < i.i && r < h.i && (a = i, u = h, ((o = s).x - u.x) * (a.y - o.y) - (o.x - a.x) * (u.y - o.y) < 0) && e.push([t[r], t[i.i], t[h.i]])
                            })), e
                        }, a.x = function(t) {
                            return arguments.length ? (r = xe(e = t), a) : e
                        }, a.y = function(t) {
                            return arguments.length ? (i = xe(n = t), a) : n
                        }, a.clipExtent = function(t) {
                            return arguments.length ? (o = null == t ? Yi : t, a) : o === Yi ? null : o
                        }, a.size = function(t) {
                            return arguments.length ? a.clipExtent(t && [
                                [0, 0], t
                            ]) : o === Yi ? null : o && o[1]
                        }, a
                    };
                    var Yi = [
                        [-1e6, -1e6],
                        [1e6, 1e6]
                    ];

                    function Zi(t) {
                        return t.x
                    }

                    function Gi(t) {
                        return t.y
                    }

                    function Ki(t, e, n, r, i, o) {
                        if (!t(e, n, r, i, o)) {
                            var a = .5 * (n + i),
                                u = .5 * (r + o),
                                s = e.nodes;
                            s[0] && Ki(t, s[0], n, r, a, u), s[1] && Ki(t, s[1], a, r, i, u), s[2] && Ki(t, s[2], n, u, a, o), s[3] && Ki(t, s[3], a, u, i, o)
                        }
                    }

                    function Qi(t, e, n, r, i, o, a) {
                        var u, s = 1 / 0;
                        return function t(l, c, f, p, h) {
                            if (!(c > o || f > a || p < r || h < i)) {
                                if (d = l.point) {
                                    var d, g = e - l.x,
                                        v = n - l.y,
                                        y = g * g + v * v;
                                    if (y < s) {
                                        var m = Math.sqrt(s = y);
                                        r = e - m, i = n - m, o = e + m, a = n + m, u = d
                                    }
                                }
                                for (var x = l.nodes, b = .5 * (c + p), w = .5 * (f + h), M = (n >= w) << 1 | e >= b, E = M + 4; M < E; ++M)
                                    if (l = x[3 & M]) switch (3 & M) {
                                        case 0:
                                            t(l, c, f, b, w);
                                            break;
                                        case 1:
                                            t(l, b, f, p, w);
                                            break;
                                        case 2:
                                            t(l, c, w, b, h);
                                            break;
                                        case 3:
                                            t(l, b, w, p, h)
                                    }
                            }
                        }(t, r, i, o, a), u
                    }

                    function Ji(t, e) {
                        t = o.rgb(t), e = o.rgb(e);
                        var n = t.r,
                            r = t.g,
                            i = t.b,
                            a = e.r - n,
                            u = e.g - r,
                            s = e.b - i;
                        return function(t) {
                            return "#" + pe(Math.round(n + a * t)) + pe(Math.round(r + u * t)) + pe(Math.round(i + s * t))
                        }
                    }

                    function to(t, e) {
                        var n, r = {},
                            i = {};
                        for (n in t) n in e ? r[n] = oo(t[n], e[n]) : i[n] = t[n];
                        for (n in e) n in t || (i[n] = e[n]);
                        return function(t) {
                            for (n in r) i[n] = r[n](t);
                            return i
                        }
                    }

                    function eo(t, e) {
                        return t = +t, e = +e,
                            function(n) {
                                return t * (1 - n) + e * n
                            }
                    }

                    function no(t, e) {
                        var n, r, i, o = ro.lastIndex = io.lastIndex = 0,
                            a = -1,
                            u = [],
                            s = [];
                        for (t += "", e += "";
                            (n = ro.exec(t)) && (r = io.exec(e));)(i = r.index) > o && (i = e.slice(o, i), u[a] ? u[a] += i : u[++a] = i), (n = n[0]) === (r = r[0]) ? u[a] ? u[a] += r : u[++a] = r : (u[++a] = null, s.push({
                            i: a,
                            x: eo(n, r)
                        })), o = io.lastIndex;
                        return o < e.length && (i = e.slice(o), u[a] ? u[a] += i : u[++a] = i), u.length < 2 ? s[0] ? (e = s[0].x, function(t) {
                            return e(t) + ""
                        }) : function() {
                            return e
                        } : (e = s.length, function(t) {
                            for (var n, r = 0; r < e; ++r) u[(n = s[r]).i] = n.x(t);
                            return u.join("")
                        })
                    }
                    o.geom.delaunay = function(t) {
                        return o.geom.voronoi().triangles(t)
                    }, o.geom.quadtree = function(t, e, n, r, i) {
                        var o, a = si,
                            u = li;
                        if (o = arguments.length) return a = Zi, u = Gi, 3 === o && (i = n, r = e, n = e = 0), s(t);

                        function s(t) {
                            var s, l, c, f, p, h, d, g, v, y = xe(a),
                                m = xe(u);
                            if (null != e) h = e, d = n, g = r, v = i;
                            else if (g = v = -(h = d = 1 / 0), l = [], c = [], p = t.length, o)
                                for (f = 0; f < p; ++f)(s = t[f]).x < h && (h = s.x), s.y < d && (d = s.y), s.x > g && (g = s.x), s.y > v && (v = s.y), l.push(s.x), c.push(s.y);
                            else
                                for (f = 0; f < p; ++f) {
                                    var x = +y(s = t[f], f),
                                        b = +m(s, f);
                                    x < h && (h = x), b < d && (d = b), x > g && (g = x), b > v && (v = b), l.push(x), c.push(b)
                                }
                            var w = g - h,
                                E = v - d;

                            function _(t, e, n, r, i, o, a, u) {
                                if (!isNaN(n) && !isNaN(r))
                                    if (t.leaf) {
                                        var s = t.x,
                                            l = t.y;
                                        if (null != s)
                                            if (M(s - n) + M(l - r) < .01) A(t, e, n, r, i, o, a, u);
                                            else {
                                                var c = t.point;
                                                t.x = t.y = t.point = null, A(t, c, s, l, i, o, a, u), A(t, e, n, r, i, o, a, u)
                                            }
                                        else t.x = n, t.y = r, t.point = e
                                    } else A(t, e, n, r, i, o, a, u)
                            }

                            function A(t, e, n, r, i, o, a, u) {
                                var s = .5 * (i + a),
                                    l = .5 * (o + u),
                                    c = n >= s,
                                    f = r >= l,
                                    p = f << 1 | c;
                                t.leaf = !1, c ? i = s : a = s, f ? o = l : u = l, _(t = t.nodes[p] || (t.nodes[p] = {
                                    leaf: !0,
                                    nodes: [],
                                    point: null,
                                    x: null,
                                    y: null
                                }), e, n, r, i, o, a, u)
                            }
                            w > E ? v = d + w : g = h + E;
                            var T = {
                                leaf: !0,
                                nodes: [],
                                point: null,
                                x: null,
                                y: null,
                                add: function(t) {
                                    _(T, t, +y(t, ++f), +m(t, f), h, d, g, v)
                                },
                                visit: function(t) {
                                    Ki(t, T, h, d, g, v)
                                },
                                find: function(t) {
                                    return Qi(T, t[0], t[1], h, d, g, v)
                                }
                            };
                            if (f = -1, null == e) {
                                for (; ++f < p;) _(T, t[f], l[f], c[f], h, d, g, v);
                                --f
                            } else t.forEach(T.add);
                            return l = c = t = s = null, T
                        }
                        return s.x = function(t) {
                            return arguments.length ? (a = t, s) : a
                        }, s.y = function(t) {
                            return arguments.length ? (u = t, s) : u
                        }, s.extent = function(t) {
                            return arguments.length ? (null == t ? e = n = r = i = null : (e = +t[0][0], n = +t[0][1], r = +t[1][0], i = +t[1][1]), s) : null == e ? null : [
                                [e, n],
                                [r, i]
                            ]
                        }, s.size = function(t) {
                            return arguments.length ? (null == t ? e = n = r = i = null : (e = n = 0, r = +t[0], i = +t[1]), s) : null == e ? null : [r - e, i - n]
                        }, s
                    }, o.interpolateRgb = Ji, o.interpolateObject = to, o.interpolateNumber = eo, o.interpolateString = no;
                    var ro = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                        io = new RegExp(ro.source, "g");

                    function oo(t, e) {
                        for (var n, r = o.interpolators.length; --r >= 0 && !(n = o.interpolators[r](t, e)););
                        return n
                    }

                    function ao(t, e) {
                        var n, r = [],
                            i = [],
                            o = t.length,
                            a = e.length,
                            u = Math.min(t.length, e.length);
                        for (n = 0; n < u; ++n) r.push(oo(t[n], e[n]));
                        for (; n < o; ++n) i[n] = t[n];
                        for (; n < a; ++n) i[n] = e[n];
                        return function(t) {
                            for (n = 0; n < u; ++n) i[n] = r[n](t);
                            return i
                        }
                    }
                    o.interpolate = oo, o.interpolators = [function(t, e) {
                        var n = typeof e;
                        return ("string" === n ? me.has(e.toLowerCase()) || /^(#|rgb\(|hsl\()/i.test(e) ? Ji : no : e instanceof $t ? Ji : Array.isArray(e) ? ao : "object" === n && isNaN(e) ? to : eo)(t, e)
                    }], o.interpolateArray = ao;
                    var uo = function() {
                            return q
                        },
                        so = o.map({
                            linear: uo,
                            poly: function(t) {
                                return function(e) {
                                    return Math.pow(e, t)
                                }
                            },
                            quad: function() {
                                return ho
                            },
                            cubic: function() {
                                return go
                            },
                            sin: function() {
                                return yo
                            },
                            exp: function() {
                                return mo
                            },
                            circle: function() {
                                return xo
                            },
                            elastic: function(t, e) {
                                var n;
                                arguments.length < 2 && (e = .45);
                                arguments.length ? n = e / kt * Math.asin(1 / t) : (t = 1, n = e / 4);
                                return function(r) {
                                    return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - n) * kt / e)
                                }
                            },
                            back: function(t) {
                                t || (t = 1.70158);
                                return function(e) {
                                    return e * e * ((t + 1) * e - t)
                                }
                            },
                            bounce: function() {
                                return bo
                            }
                        }),
                        lo = o.map({
                            in: q,
                            out: fo,
                            "in-out": po,
                            "out-in": function(t) {
                                return po(fo(t))
                            }
                        });

                    function co(t) {
                        return function(e) {
                            return e <= 0 ? 0 : e >= 1 ? 1 : t(e)
                        }
                    }

                    function fo(t) {
                        return function(e) {
                            return 1 - t(1 - e)
                        }
                    }

                    function po(t) {
                        return function(e) {
                            return .5 * (e < .5 ? t(2 * e) : 2 - t(2 - 2 * e))
                        }
                    }

                    function ho(t) {
                        return t * t
                    }

                    function go(t) {
                        return t * t * t
                    }

                    function vo(t) {
                        if (t <= 0) return 0;
                        if (t >= 1) return 1;
                        var e = t * t,
                            n = e * t;
                        return 4 * (t < .5 ? n : 3 * (t - e) + n - .75)
                    }

                    function yo(t) {
                        return 1 - Math.cos(t * Lt)
                    }

                    function mo(t) {
                        return Math.pow(2, 10 * (t - 1))
                    }

                    function xo(t) {
                        return 1 - Math.sqrt(1 - t * t)
                    }

                    function bo(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }

                    function wo(t, e) {
                        return e -= t,
                            function(n) {
                                return Math.round(t + e * n)
                            }
                    }

                    function Mo(t) {
                        var e, n, r, i = [t.a, t.b],
                            o = [t.c, t.d],
                            a = _o(i),
                            u = Eo(i, o),
                            s = _o(((e = o)[0] += (r = -u) * (n = i)[0], e[1] += r * n[1], e)) || 0;
                        i[0] * o[1] < o[0] * i[1] && (i[0] *= -1, i[1] *= -1, a *= -1, u *= -1), this.rotate = (a ? Math.atan2(i[1], i[0]) : Math.atan2(-o[0], o[1])) * qt, this.translate = [t.e, t.f], this.scale = [a, s], this.skew = s ? Math.atan2(u, s) * qt : 0
                    }

                    function Eo(t, e) {
                        return t[0] * e[0] + t[1] * e[1]
                    }

                    function _o(t) {
                        var e = Math.sqrt(Eo(t, t));
                        return e && (t[0] /= e, t[1] /= e), e
                    }
                    o.ease = function(t) {
                        var e = t.indexOf("-"),
                            n = e >= 0 ? t.slice(0, e) : t,
                            r = e >= 0 ? t.slice(e + 1) : "in";
                        return n = so.get(n) || uo, co((r = lo.get(r) || q)(n.apply(null, a.call(arguments, 1))))
                    }, o.interpolateHcl = function(t, e) {
                        t = o.hcl(t), e = o.hcl(e);
                        var n = t.h,
                            r = t.c,
                            i = t.l,
                            a = e.h - n,
                            u = e.c - r,
                            s = e.l - i;
                        isNaN(u) && (u = 0, r = isNaN(r) ? e.c : r);
                        isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : a > 180 ? a -= 360 : a < -180 && (a += 360);
                        return function(t) {
                            return Kt(n + a * t, r + u * t, i + s * t) + ""
                        }
                    }, o.interpolateHsl = function(t, e) {
                        t = o.hsl(t), e = o.hsl(e);
                        var n = t.h,
                            r = t.s,
                            i = t.l,
                            a = e.h - n,
                            u = e.s - r,
                            s = e.l - i;
                        isNaN(u) && (u = 0, r = isNaN(r) ? e.s : r);
                        isNaN(a) ? (a = 0, n = isNaN(n) ? e.h : n) : a > 180 ? a -= 360 : a < -180 && (a += 360);
                        return function(t) {
                            return Yt(n + a * t, r + u * t, i + s * t) + ""
                        }
                    }, o.interpolateLab = function(t, e) {
                        t = o.lab(t), e = o.lab(e);
                        var n = t.l,
                            r = t.a,
                            i = t.b,
                            a = e.l - n,
                            u = e.a - r,
                            s = e.b - i;
                        return function(t) {
                            return re(n + a * t, r + u * t, i + s * t) + ""
                        }
                    }, o.interpolateRound = wo, o.transform = function(t) {
                        var e = s.createElementNS(o.ns.prefix.svg, "g");
                        return (o.transform = function(t) {
                            if (null != t) {
                                e.setAttribute("transform", t);
                                var n = e.transform.baseVal.consolidate()
                            }
                            return new Mo(n ? n.matrix : Ao)
                        })(t)
                    }, Mo.prototype.toString = function() {
                        return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
                    };
                    var Ao = {
                        a: 1,
                        b: 0,
                        c: 0,
                        d: 1,
                        e: 0,
                        f: 0
                    };

                    function To(t, e) {
                        var n, r = [],
                            i = [],
                            a = o.transform(t),
                            u = o.transform(e),
                            s = a.translate,
                            l = u.translate,
                            c = a.rotate,
                            f = u.rotate,
                            p = a.skew,
                            h = u.skew,
                            d = a.scale,
                            g = u.scale;
                        return s[0] != l[0] || s[1] != l[1] ? (r.push("translate(", null, ",", null, ")"), i.push({
                                i: 1,
                                x: eo(s[0], l[0])
                            }, {
                                i: 3,
                                x: eo(s[1], l[1])
                            })) : l[0] || l[1] ? r.push("translate(" + l + ")") : r.push(""), c != f ? (c - f > 180 ? f += 360 : f - c > 180 && (c += 360), i.push({
                                i: r.push(r.pop() + "rotate(", null, ")") - 2,
                                x: eo(c, f)
                            })) : f && r.push(r.pop() + "rotate(" + f + ")"), p != h ? i.push({
                                i: r.push(r.pop() + "skewX(", null, ")") - 2,
                                x: eo(p, h)
                            }) : h && r.push(r.pop() + "skewX(" + h + ")"), d[0] != g[0] || d[1] != g[1] ? (n = r.push(r.pop() + "scale(", null, ",", null, ")"), i.push({
                                i: n - 4,
                                x: eo(d[0], g[0])
                            }, {
                                i: n - 2,
                                x: eo(d[1], g[1])
                            })) : 1 == g[0] && 1 == g[1] || r.push(r.pop() + "scale(" + g + ")"), n = i.length,
                            function(t) {
                                for (var e, o = -1; ++o < n;) r[(e = i[o]).i] = e.x(t);
                                return r.join("")
                            }
                    }

                    function So(t, e) {
                        return e = (e -= t = +t) || 1 / e,
                            function(n) {
                                return (n - t) / e
                            }
                    }

                    function No(t, e) {
                        return e = (e -= t = +t) || 1 / e,
                            function(n) {
                                return Math.max(0, Math.min(1, (n - t) / e))
                            }
                    }

                    function Co(t) {
                        for (var e = t.source, n = t.target, r = function(t, e) {
                                if (t === e) return t;
                                var n = ko(t),
                                    r = ko(e),
                                    i = n.pop(),
                                    o = r.pop(),
                                    a = null;
                                for (; i === o;) a = i, i = n.pop(), o = r.pop();
                                return a
                            }(e, n), i = [e]; e !== r;) e = e.parent, i.push(e);
                        for (var o = i.length; n !== r;) i.splice(o, 0, n), n = n.parent;
                        return i
                    }

                    function ko(t) {
                        for (var e = [], n = t.parent; null != n;) e.push(t), t = n, n = n.parent;
                        return e.push(t), e
                    }

                    function Do(t) {
                        t.fixed |= 2
                    }

                    function Lo(t) {
                        t.fixed &= -7
                    }

                    function Oo(t) {
                        t.fixed |= 4, t.px = t.x, t.py = t.y
                    }

                    function qo(t) {
                        t.fixed &= -5
                    }

                    function jo(t, e, n) {
                        var r = 0,
                            i = 0;
                        if (t.charge = 0, !t.leaf)
                            for (var o, a = t.nodes, u = a.length, s = -1; ++s < u;) null != (o = a[s]) && (jo(o, e, n), t.charge += o.charge, r += o.charge * o.cx, i += o.charge * o.cy);
                        if (t.point) {
                            t.leaf || (t.point.x += Math.random() - .5, t.point.y += Math.random() - .5);
                            var l = e * n[t.point.index];
                            t.charge += t.pointCharge = l, r += l * t.point.x, i += l * t.point.y
                        }
                        t.cx = r / t.charge, t.cy = i / t.charge
                    }
                    o.interpolateTransform = To, o.layout = {}, o.layout.bundle = function() {
                        return function(t) {
                            for (var e = [], n = -1, r = t.length; ++n < r;) e.push(Co(t[n]));
                            return e
                        }
                    }, o.layout.chord = function() {
                        var t, e, n, r, i, a, u, s = {},
                            l = 0;

                        function c() {
                            var s, c, p, h, d, g = {},
                                v = [],
                                y = o.range(r),
                                m = [];
                            for (t = [], e = [], s = 0, h = -1; ++h < r;) {
                                for (c = 0, d = -1; ++d < r;) c += n[h][d];
                                v.push(c), m.push(o.range(r)), s += c
                            }
                            for (i && y.sort((function(t, e) {
                                    return i(v[t], v[e])
                                })), a && m.forEach((function(t, e) {
                                    t.sort((function(t, r) {
                                        return a(n[e][t], n[e][r])
                                    }))
                                })), s = (kt - l * r) / s, c = 0, h = -1; ++h < r;) {
                                for (p = c, d = -1; ++d < r;) {
                                    var x = y[h],
                                        b = m[x][d],
                                        w = n[x][b],
                                        M = c,
                                        E = c += w * s;
                                    g[x + "-" + b] = {
                                        index: x,
                                        subindex: b,
                                        startAngle: M,
                                        endAngle: E,
                                        value: w
                                    }
                                }
                                e[x] = {
                                    index: x,
                                    startAngle: p,
                                    endAngle: c,
                                    value: (c - p) / s
                                }, c += l
                            }
                            for (h = -1; ++h < r;)
                                for (d = h - 1; ++d < r;) {
                                    var _ = g[h + "-" + d],
                                        A = g[d + "-" + h];
                                    (_.value || A.value) && t.push(_.value < A.value ? {
                                        source: A,
                                        target: _
                                    } : {
                                        source: _,
                                        target: A
                                    })
                                }
                            u && f()
                        }

                        function f() {
                            t.sort((function(t, e) {
                                return u((t.source.value + t.target.value) / 2, (e.source.value + e.target.value) / 2)
                            }))
                        }
                        return s.matrix = function(i) {
                            return arguments.length ? (r = (n = i) && n.length, t = e = null, s) : n
                        }, s.padding = function(n) {
                            return arguments.length ? (l = n, t = e = null, s) : l
                        }, s.sortGroups = function(n) {
                            return arguments.length ? (i = n, t = e = null, s) : i
                        }, s.sortSubgroups = function(e) {
                            return arguments.length ? (a = e, t = null, s) : a
                        }, s.sortChords = function(e) {
                            return arguments.length ? (u = e, t && f(), s) : u
                        }, s.chords = function() {
                            return t || c(), t
                        }, s.groups = function() {
                            return e || c(), e
                        }, s
                    }, o.layout.force = function() {
                        var t, e, n, r, i, a = {},
                            u = o.dispatch("start", "tick", "end"),
                            s = [1, 1],
                            l = .9,
                            c = Po,
                            f = Ro,
                            p = -30,
                            h = zo,
                            d = .1,
                            g = .64,
                            v = [],
                            y = [];

                        function m(t) {
                            return function(e, n, r, i) {
                                if (e.point !== t) {
                                    var o = e.cx - t.x,
                                        a = e.cy - t.y,
                                        u = i - n,
                                        s = o * o + a * a;
                                    if (u * u / g < s) {
                                        if (s < h) {
                                            var l = e.charge / s;
                                            t.px -= o * l, t.py -= a * l
                                        }
                                        return !0
                                    }
                                    if (e.point && s && s < h) {
                                        l = e.pointCharge / s;
                                        t.px -= o * l, t.py -= a * l
                                    }
                                }
                                return !e.charge
                            }
                        }

                        function x(t) {
                            t.px = o.event.x, t.py = o.event.y, a.resume()
                        }
                        return a.tick = function() {
                            if ((e *= .99) < .005) return u.end({
                                type: "end",
                                alpha: e = 0
                            }), !0;
                            var t, a, c, f, h, g, x, b, w, M = v.length,
                                E = y.length;
                            for (a = 0; a < E; ++a) f = (c = y[a]).source, (g = (b = (h = c.target).x - f.x) * b + (w = h.y - f.y) * w) && (b *= g = e * r[a] * ((g = Math.sqrt(g)) - n[a]) / g, w *= g, h.x -= b * (x = f.weight / (h.weight + f.weight)), h.y -= w * x, f.x += b * (x = 1 - x), f.y += w * x);
                            if ((x = e * d) && (b = s[0] / 2, w = s[1] / 2, a = -1, x))
                                for (; ++a < M;)(c = v[a]).x += (b - c.x) * x, c.y += (w - c.y) * x;
                            if (p)
                                for (jo(t = o.geom.quadtree(v), e, i), a = -1; ++a < M;)(c = v[a]).fixed || t.visit(m(c));
                            for (a = -1; ++a < M;)(c = v[a]).fixed ? (c.x = c.px, c.y = c.py) : (c.x -= (c.px - (c.px = c.x)) * l, c.y -= (c.py - (c.py = c.y)) * l);
                            u.tick({
                                type: "tick",
                                alpha: e
                            })
                        }, a.nodes = function(t) {
                            return arguments.length ? (v = t, a) : v
                        }, a.links = function(t) {
                            return arguments.length ? (y = t, a) : y
                        }, a.size = function(t) {
                            return arguments.length ? (s = t, a) : s
                        }, a.linkDistance = function(t) {
                            return arguments.length ? (c = "function" == typeof t ? t : +t, a) : c
                        }, a.distance = a.linkDistance, a.linkStrength = function(t) {
                            return arguments.length ? (f = "function" == typeof t ? t : +t, a) : f
                        }, a.friction = function(t) {
                            return arguments.length ? (l = +t, a) : l
                        }, a.charge = function(t) {
                            return arguments.length ? (p = "function" == typeof t ? t : +t, a) : p
                        }, a.chargeDistance = function(t) {
                            return arguments.length ? (h = t * t, a) : Math.sqrt(h)
                        }, a.gravity = function(t) {
                            return arguments.length ? (d = +t, a) : d
                        }, a.theta = function(t) {
                            return arguments.length ? (g = t * t, a) : Math.sqrt(g)
                        }, a.alpha = function(t) {
                            return arguments.length ? (t = +t, e ? e = t > 0 ? t : 0 : t > 0 && (u.start({
                                type: "start",
                                alpha: e = t
                            }), o.timer(a.tick)), a) : e
                        }, a.start = function() {
                            var t, e, o, u = v.length,
                                l = y.length,
                                h = s[0],
                                d = s[1];
                            for (t = 0; t < u; ++t)(o = v[t]).index = t, o.weight = 0;
                            for (t = 0; t < l; ++t) "number" == typeof(o = y[t]).source && (o.source = v[o.source]), "number" == typeof o.target && (o.target = v[o.target]), ++o.source.weight, ++o.target.weight;
                            for (t = 0; t < u; ++t) o = v[t], isNaN(o.x) && (o.x = g("x", h)), isNaN(o.y) && (o.y = g("y", d)), isNaN(o.px) && (o.px = o.x), isNaN(o.py) && (o.py = o.y);
                            if (n = [], "function" == typeof c)
                                for (t = 0; t < l; ++t) n[t] = +c.call(this, y[t], t);
                            else
                                for (t = 0; t < l; ++t) n[t] = c;
                            if (r = [], "function" == typeof f)
                                for (t = 0; t < l; ++t) r[t] = +f.call(this, y[t], t);
                            else
                                for (t = 0; t < l; ++t) r[t] = f;
                            if (i = [], "function" == typeof p)
                                for (t = 0; t < u; ++t) i[t] = +p.call(this, v[t], t);
                            else
                                for (t = 0; t < u; ++t) i[t] = p;

                            function g(n, r) {
                                if (!e) {
                                    for (e = new Array(u), s = 0; s < u; ++s) e[s] = [];
                                    for (s = 0; s < l; ++s) {
                                        var i = y[s];
                                        e[i.source.index].push(i.target), e[i.target.index].push(i.source)
                                    }
                                }
                                for (var o, a = e[t], s = -1, c = a.length; ++s < c;)
                                    if (!isNaN(o = a[s][n])) return o;
                                return Math.random() * r
                            }
                            return a.resume()
                        }, a.resume = function() {
                            return a.alpha(.1)
                        }, a.stop = function() {
                            return a.alpha(0)
                        }, a.drag = function() {
                            if (t || (t = o.behavior.drag().origin(q).on("dragstart.force", Do).on("drag.force", x).on("dragend.force", Lo)), !arguments.length) return t;
                            this.on("mouseover.force", Oo).on("mouseout.force", qo).call(t)
                        }, o.rebind(a, u, "on")
                    };
                    var Po = 20,
                        Ro = 1,
                        zo = 1 / 0;

                    function Ho(t, e) {
                        return o.rebind(t, e, "sort", "children", "value"), t.nodes = t, t.links = $o, t
                    }

                    function Io(t, e) {
                        for (var n = [t]; null != (t = n.pop());)
                            if (e(t), (i = t.children) && (r = i.length))
                                for (var r, i; --r >= 0;) n.push(i[r])
                    }

                    function Fo(t, e) {
                        for (var n = [t], r = []; null != (t = n.pop());)
                            if (r.push(t), (o = t.children) && (i = o.length))
                                for (var i, o, a = -1; ++a < i;) n.push(o[a]);
                        for (; null != (t = r.pop());) e(t)
                    }

                    function Uo(t) {
                        return t.children
                    }

                    function Bo(t) {
                        return t.value
                    }

                    function Wo(t, e) {
                        return e.value - t.value
                    }

                    function $o(t) {
                        return o.merge(t.map((function(t) {
                            return (t.children || []).map((function(e) {
                                return {
                                    source: t,
                                    target: e
                                }
                            }))
                        })))
                    }
                    o.layout.hierarchy = function() {
                        var t = Wo,
                            e = Uo,
                            n = Bo;

                        function r(i) {
                            var o, a = [i],
                                u = [];
                            for (i.depth = 0; null != (o = a.pop());)
                                if (u.push(o), (l = e.call(r, o, o.depth)) && (s = l.length)) {
                                    for (var s, l, c; --s >= 0;) a.push(c = l[s]), c.parent = o, c.depth = o.depth + 1;
                                    n && (o.value = 0), o.children = l
                                } else n && (o.value = +n.call(r, o, o.depth) || 0), delete o.children;
                            return Fo(i, (function(e) {
                                var r, i;
                                t && (r = e.children) && r.sort(t), n && (i = e.parent) && (i.value += e.value)
                            })), u
                        }
                        return r.sort = function(e) {
                            return arguments.length ? (t = e, r) : t
                        }, r.children = function(t) {
                            return arguments.length ? (e = t, r) : e
                        }, r.value = function(t) {
                            return arguments.length ? (n = t, r) : n
                        }, r.revalue = function(t) {
                            return n && (Io(t, (function(t) {
                                t.children && (t.value = 0)
                            })), Fo(t, (function(t) {
                                var e;
                                t.children || (t.value = +n.call(r, t, t.depth) || 0), (e = t.parent) && (e.value += t.value)
                            }))), t
                        }, r
                    }, o.layout.partition = function() {
                        var t = o.layout.hierarchy(),
                            e = [1, 1];

                        function n(t, e, r, i) {
                            var o = t.children;
                            if (t.x = e, t.y = t.depth * i, t.dx = r, t.dy = i, o && (a = o.length)) {
                                var a, u, s, l = -1;
                                for (r = t.value ? r / t.value : 0; ++l < a;) n(u = o[l], e, s = u.value * r, i), e += s
                            }
                        }

                        function r(t) {
                            var e = t.children,
                                n = 0;
                            if (e && (i = e.length))
                                for (var i, o = -1; ++o < i;) n = Math.max(n, r(e[o]));
                            return 1 + n
                        }

                        function i(i, o) {
                            var a = t.call(this, i, o);
                            return n(a[0], 0, e[0], e[1] / r(a[0])), a
                        }
                        return i.size = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, Ho(i, t)
                    }, o.layout.pie = function() {
                        var t = Number,
                            e = Vo,
                            n = 0,
                            r = kt,
                            i = 0;

                        function a(u) {
                            var s, l = u.length,
                                c = u.map((function(e, n) {
                                    return +t.call(a, e, n)
                                })),
                                f = +("function" == typeof n ? n.apply(this, arguments) : n),
                                p = ("function" == typeof r ? r.apply(this, arguments) : r) - f,
                                h = Math.min(Math.abs(p) / l, +("function" == typeof i ? i.apply(this, arguments) : i)),
                                d = h * (p < 0 ? -1 : 1),
                                g = (p - l * d) / o.sum(c),
                                v = o.range(l),
                                y = [];
                            return null != e && v.sort(e === Vo ? function(t, e) {
                                return c[e] - c[t]
                            } : function(t, n) {
                                return e(u[t], u[n])
                            }), v.forEach((function(t) {
                                y[t] = {
                                    data: u[t],
                                    value: s = c[t],
                                    startAngle: f,
                                    endAngle: f += s * g + d,
                                    padAngle: h
                                }
                            })), y
                        }
                        return a.value = function(e) {
                            return arguments.length ? (t = e, a) : t
                        }, a.sort = function(t) {
                            return arguments.length ? (e = t, a) : e
                        }, a.startAngle = function(t) {
                            return arguments.length ? (n = t, a) : n
                        }, a.endAngle = function(t) {
                            return arguments.length ? (r = t, a) : r
                        }, a.padAngle = function(t) {
                            return arguments.length ? (i = t, a) : i
                        }, a
                    };
                    var Vo = {};

                    function Xo(t) {
                        return t.x
                    }

                    function Yo(t) {
                        return t.y
                    }

                    function Zo(t, e, n) {
                        t.y0 = e, t.y = n
                    }
                    o.layout.stack = function() {
                        var t = q,
                            e = Qo,
                            n = Jo,
                            r = Zo,
                            i = Xo,
                            a = Yo;

                        function u(s, l) {
                            if (!(h = s.length)) return s;
                            var c = s.map((function(e, n) {
                                    return t.call(u, e, n)
                                })),
                                f = c.map((function(t) {
                                    return t.map((function(t, e) {
                                        return [i.call(u, t, e), a.call(u, t, e)]
                                    }))
                                })),
                                p = e.call(u, f, l);
                            c = o.permute(c, p), f = o.permute(f, p);
                            var h, d, g, v, y = n.call(u, f, l),
                                m = c[0].length;
                            for (g = 0; g < m; ++g)
                                for (r.call(u, c[0][g], v = y[g], f[0][g][1]), d = 1; d < h; ++d) r.call(u, c[d][g], v += f[d - 1][g][1], f[d][g][1]);
                            return s
                        }
                        return u.values = function(e) {
                            return arguments.length ? (t = e, u) : t
                        }, u.order = function(t) {
                            return arguments.length ? (e = "function" == typeof t ? t : Go.get(t) || Qo, u) : e
                        }, u.offset = function(t) {
                            return arguments.length ? (n = "function" == typeof t ? t : Ko.get(t) || Jo, u) : n
                        }, u.x = function(t) {
                            return arguments.length ? (i = t, u) : i
                        }, u.y = function(t) {
                            return arguments.length ? (a = t, u) : a
                        }, u.out = function(t) {
                            return arguments.length ? (r = t, u) : r
                        }, u
                    };
                    var Go = o.map({
                            "inside-out": function(t) {
                                var e, n, r = t.length,
                                    i = t.map(ta),
                                    a = t.map(ea),
                                    u = o.range(r).sort((function(t, e) {
                                        return i[t] - i[e]
                                    })),
                                    s = 0,
                                    l = 0,
                                    c = [],
                                    f = [];
                                for (e = 0; e < r; ++e) n = u[e], s < l ? (s += a[n], c.push(n)) : (l += a[n], f.push(n));
                                return f.reverse().concat(c)
                            },
                            reverse: function(t) {
                                return o.range(t.length).reverse()
                            },
                            default: Qo
                        }),
                        Ko = o.map({
                            silhouette: function(t) {
                                var e, n, r, i = t.length,
                                    o = t[0].length,
                                    a = [],
                                    u = 0,
                                    s = [];
                                for (n = 0; n < o; ++n) {
                                    for (e = 0, r = 0; e < i; e++) r += t[e][n][1];
                                    r > u && (u = r), a.push(r)
                                }
                                for (n = 0; n < o; ++n) s[n] = (u - a[n]) / 2;
                                return s
                            },
                            wiggle: function(t) {
                                var e, n, r, i, o, a, u, s, l, c = t.length,
                                    f = t[0],
                                    p = f.length,
                                    h = [];
                                for (h[0] = s = l = 0, n = 1; n < p; ++n) {
                                    for (e = 0, i = 0; e < c; ++e) i += t[e][n][1];
                                    for (e = 0, o = 0, u = f[n][0] - f[n - 1][0]; e < c; ++e) {
                                        for (r = 0, a = (t[e][n][1] - t[e][n - 1][1]) / (2 * u); r < e; ++r) a += (t[r][n][1] - t[r][n - 1][1]) / u;
                                        o += a * t[e][n][1]
                                    }
                                    h[n] = s -= i ? o / i * u : 0, s < l && (l = s)
                                }
                                for (n = 0; n < p; ++n) h[n] -= l;
                                return h
                            },
                            expand: function(t) {
                                var e, n, r, i = t.length,
                                    o = t[0].length,
                                    a = 1 / i,
                                    u = [];
                                for (n = 0; n < o; ++n) {
                                    for (e = 0, r = 0; e < i; e++) r += t[e][n][1];
                                    if (r)
                                        for (e = 0; e < i; e++) t[e][n][1] /= r;
                                    else
                                        for (e = 0; e < i; e++) t[e][n][1] = a
                                }
                                for (n = 0; n < o; ++n) u[n] = 0;
                                return u
                            },
                            zero: Jo
                        });

                    function Qo(t) {
                        return o.range(t.length)
                    }

                    function Jo(t) {
                        for (var e = -1, n = t[0].length, r = []; ++e < n;) r[e] = 0;
                        return r
                    }

                    function ta(t) {
                        for (var e, n = 1, r = 0, i = t[0][1], o = t.length; n < o; ++n)(e = t[n][1]) > i && (r = n, i = e);
                        return r
                    }

                    function ea(t) {
                        return t.reduce(na, 0)
                    }

                    function na(t, e) {
                        return t + e[1]
                    }

                    function ra(t, e) {
                        return ia(t, Math.ceil(Math.log(e.length) / Math.LN2 + 1))
                    }

                    function ia(t, e) {
                        for (var n = -1, r = +t[0], i = (t[1] - r) / e, o = []; ++n <= e;) o[n] = i * n + r;
                        return o
                    }

                    function oa(t) {
                        return [o.min(t), o.max(t)]
                    }

                    function aa(t, e) {
                        return t.value - e.value
                    }

                    function ua(t, e) {
                        var n = t._pack_next;
                        t._pack_next = e, e._pack_prev = t, e._pack_next = n, n._pack_prev = e
                    }

                    function sa(t, e) {
                        t._pack_next = e, e._pack_prev = t
                    }

                    function la(t, e) {
                        var n = e.x - t.x,
                            r = e.y - t.y,
                            i = t.r + e.r;
                        return .999 * i * i > n * n + r * r
                    }

                    function ca(t) {
                        if ((e = t.children) && (s = e.length)) {
                            var e, n, r, i, o, a, u, s, l = 1 / 0,
                                c = -1 / 0,
                                f = 1 / 0,
                                p = -1 / 0;
                            if (e.forEach(fa), (n = e[0]).x = -n.r, n.y = 0, x(n), s > 1 && ((r = e[1]).x = r.r, r.y = 0, x(r), s > 2))
                                for (da(n, r, i = e[2]), x(i), ua(n, i), n._pack_prev = i, ua(i, r), r = n._pack_next, o = 3; o < s; o++) {
                                    da(n, r, i = e[o]);
                                    var h = 0,
                                        d = 1,
                                        g = 1;
                                    for (a = r._pack_next; a !== r; a = a._pack_next, d++)
                                        if (la(a, i)) {
                                            h = 1;
                                            break
                                        } if (1 == h)
                                        for (u = n._pack_prev; u !== a._pack_prev && !la(u, i); u = u._pack_prev, g++);
                                    h ? (d < g || d == g && r.r < n.r ? sa(n, r = a) : sa(n = u, r), o--) : (ua(n, i), r = i, x(i))
                                }
                            var v = (l + c) / 2,
                                y = (f + p) / 2,
                                m = 0;
                            for (o = 0; o < s; o++)(i = e[o]).x -= v, i.y -= y, m = Math.max(m, i.r + Math.sqrt(i.x * i.x + i.y * i.y));
                            t.r = m, e.forEach(pa)
                        }

                        function x(t) {
                            l = Math.min(t.x - t.r, l), c = Math.max(t.x + t.r, c), f = Math.min(t.y - t.r, f), p = Math.max(t.y + t.r, p)
                        }
                    }

                    function fa(t) {
                        t._pack_next = t._pack_prev = t
                    }

                    function pa(t) {
                        delete t._pack_next, delete t._pack_prev
                    }

                    function ha(t, e, n, r) {
                        var i = t.children;
                        if (t.x = e += r * t.x, t.y = n += r * t.y, t.r *= r, i)
                            for (var o = -1, a = i.length; ++o < a;) ha(i[o], e, n, r)
                    }

                    function da(t, e, n) {
                        var r = t.r + n.r,
                            i = e.x - t.x,
                            o = e.y - t.y;
                        if (r && (i || o)) {
                            var a = e.r + n.r,
                                u = i * i + o * o,
                                s = .5 + ((r *= r) - (a *= a)) / (2 * u),
                                l = Math.sqrt(Math.max(0, 2 * a * (r + u) - (r -= u) * r - a * a)) / (2 * u);
                            n.x = t.x + s * i + l * o, n.y = t.y + s * o - l * i
                        } else n.x = t.x + r, n.y = t.y
                    }

                    function ga(t, e) {
                        return t.parent == e.parent ? 1 : 2
                    }

                    function va(t) {
                        var e = t.children;
                        return e.length ? e[0] : t.t
                    }

                    function ya(t) {
                        var e, n = t.children;
                        return (e = n.length) ? n[e - 1] : t.t
                    }

                    function ma(t, e, n) {
                        var r = n / (e.i - t.i);
                        e.c -= r, e.s += n, t.c += r, e.z += n, e.m += n
                    }

                    function xa(t, e, n) {
                        return t.a.parent === e.parent ? t.a : n
                    }

                    function ba(t) {
                        var e = t.children;
                        return e && e.length ? ba(e[0]) : t
                    }

                    function wa(t) {
                        var e, n = t.children;
                        return n && (e = n.length) ? wa(n[e - 1]) : t
                    }

                    function Ma(t) {
                        return {
                            x: t.x,
                            y: t.y,
                            dx: t.dx,
                            dy: t.dy
                        }
                    }

                    function Ea(t, e) {
                        var n = t.x + e[3],
                            r = t.y + e[0],
                            i = t.dx - e[1] - e[3],
                            o = t.dy - e[0] - e[2];
                        return i < 0 && (n += i / 2, i = 0), o < 0 && (r += o / 2, o = 0), {
                            x: n,
                            y: r,
                            dx: i,
                            dy: o
                        }
                    }

                    function _a(t) {
                        var e = t[0],
                            n = t[t.length - 1];
                        return e < n ? [e, n] : [n, e]
                    }

                    function Aa(t) {
                        return t.rangeExtent ? t.rangeExtent() : _a(t.range())
                    }

                    function Ta(t, e, n, r) {
                        var i = n(t[0], t[1]),
                            o = r(e[0], e[1]);
                        return function(t) {
                            return o(i(t))
                        }
                    }

                    function Sa(t, e) {
                        var n, r = 0,
                            i = t.length - 1,
                            o = t[r],
                            a = t[i];
                        return a < o && (n = r, r = i, i = n, n = o, o = a, a = n), t[r] = e.floor(o), t[i] = e.ceil(a), t
                    }
                    o.layout.histogram = function() {
                        var t = !0,
                            e = Number,
                            n = oa,
                            r = ra;

                        function i(i, a) {
                            for (var u, s, l = [], c = i.map(e, this), f = n.call(this, c, a), p = r.call(this, f, c, a), h = (a = -1, c.length), d = p.length - 1, g = t ? 1 : 1 / h; ++a < d;)(u = l[a] = []).dx = p[a + 1] - (u.x = p[a]), u.y = 0;
                            if (d > 0)
                                for (a = -1; ++a < h;)(s = c[a]) >= f[0] && s <= f[1] && ((u = l[o.bisect(p, s, 1, d) - 1]).y += g, u.push(i[a]));
                            return l
                        }
                        return i.value = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, i.range = function(t) {
                            return arguments.length ? (n = xe(t), i) : n
                        }, i.bins = function(t) {
                            return arguments.length ? (r = "number" == typeof t ? function(e) {
                                return ia(e, t)
                            } : xe(t), i) : r
                        }, i.frequency = function(e) {
                            return arguments.length ? (t = !!e, i) : t
                        }, i
                    }, o.layout.pack = function() {
                        var t, e = o.layout.hierarchy().sort(aa),
                            n = 0,
                            r = [1, 1];

                        function i(i, o) {
                            var a = e.call(this, i, o),
                                u = a[0],
                                s = r[0],
                                l = r[1],
                                c = null == t ? Math.sqrt : "function" == typeof t ? t : function() {
                                    return t
                                };
                            if (u.x = u.y = 0, Fo(u, (function(t) {
                                    t.r = +c(t.value)
                                })), Fo(u, ca), n) {
                                var f = n * (t ? 1 : Math.max(2 * u.r / s, 2 * u.r / l)) / 2;
                                Fo(u, (function(t) {
                                    t.r += f
                                })), Fo(u, ca), Fo(u, (function(t) {
                                    t.r -= f
                                }))
                            }
                            return ha(u, s / 2, l / 2, t ? 1 : 1 / Math.max(2 * u.r / s, 2 * u.r / l)), a
                        }
                        return i.size = function(t) {
                            return arguments.length ? (r = t, i) : r
                        }, i.radius = function(e) {
                            return arguments.length ? (t = null == e || "function" == typeof e ? e : +e, i) : t
                        }, i.padding = function(t) {
                            return arguments.length ? (n = +t, i) : n
                        }, Ho(i, e)
                    }, o.layout.tree = function() {
                        var t = o.layout.hierarchy().sort(null).value(null),
                            e = ga,
                            n = [1, 1],
                            r = null;

                        function i(i, o) {
                            var l = t.call(this, i, o),
                                c = l[0],
                                f = function(t) {
                                    var e, n = {
                                            A: null,
                                            children: [t]
                                        },
                                        r = [n];
                                    for (; null != (e = r.pop());)
                                        for (var i, o = e.children, a = 0, u = o.length; a < u; ++a) r.push((o[a] = i = {
                                            _: o[a],
                                            parent: e,
                                            children: (i = o[a].children) && i.slice() || [],
                                            A: null,
                                            a: null,
                                            z: 0,
                                            m: 0,
                                            c: 0,
                                            s: 0,
                                            t: null,
                                            i: a
                                        }).a = i);
                                    return n.children[0]
                                }(c);
                            if (Fo(f, a), f.parent.m = -f.z, Io(f, u), r) Io(c, s);
                            else {
                                var p = c,
                                    h = c,
                                    d = c;
                                Io(c, (function(t) {
                                    t.x < p.x && (p = t), t.x > h.x && (h = t), t.depth > d.depth && (d = t)
                                }));
                                var g = e(p, h) / 2 - p.x,
                                    v = n[0] / (h.x + e(h, p) / 2 + g),
                                    y = n[1] / (d.depth || 1);
                                Io(c, (function(t) {
                                    t.x = (t.x + g) * v, t.y = t.depth * y
                                }))
                            }
                            return l
                        }

                        function a(t) {
                            var n = t.children,
                                r = t.parent.children,
                                i = t.i ? r[t.i - 1] : null;
                            if (n.length) {
                                ! function(t) {
                                    var e, n = 0,
                                        r = 0,
                                        i = t.children,
                                        o = i.length;
                                    for (; --o >= 0;)(e = i[o]).z += n, e.m += n, n += e.s + (r += e.c)
                                }(t);
                                var o = (n[0].z + n[n.length - 1].z) / 2;
                                i ? (t.z = i.z + e(t._, i._), t.m = t.z - o) : t.z = o
                            } else i && (t.z = i.z + e(t._, i._));
                            t.parent.A = function(t, n, r) {
                                if (n) {
                                    for (var i, o = t, a = t, u = n, s = o.parent.children[0], l = o.m, c = a.m, f = u.m, p = s.m; u = ya(u), o = va(o), u && o;) s = va(s), (a = ya(a)).a = t, (i = u.z + f - o.z - l + e(u._, o._)) > 0 && (ma(xa(u, t, r), t, i), l += i, c += i), f += u.m, l += o.m, p += s.m, c += a.m;
                                    u && !ya(a) && (a.t = u, a.m += f - c), o && !va(s) && (s.t = o, s.m += l - p, r = t)
                                }
                                return r
                            }(t, i, t.parent.A || r[0])
                        }

                        function u(t) {
                            t._.x = t.z + t.parent.m, t.m += t.parent.m
                        }

                        function s(t) {
                            t.x *= n[0], t.y = t.depth * n[1]
                        }
                        return i.separation = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, i.size = function(t) {
                            return arguments.length ? (r = null == (n = t) ? s : null, i) : r ? null : n
                        }, i.nodeSize = function(t) {
                            return arguments.length ? (r = null == (n = t) ? null : s, i) : r ? n : null
                        }, Ho(i, t)
                    }, o.layout.cluster = function() {
                        var t = o.layout.hierarchy().sort(null).value(null),
                            e = ga,
                            n = [1, 1],
                            r = !1;

                        function i(i, a) {
                            var u, s = t.call(this, i, a),
                                l = s[0],
                                c = 0;
                            Fo(l, (function(t) {
                                var n = t.children;
                                n && n.length ? (t.x = function(t) {
                                    return t.reduce((function(t, e) {
                                        return t + e.x
                                    }), 0) / t.length
                                }(n), t.y = function(t) {
                                    return 1 + o.max(t, (function(t) {
                                        return t.y
                                    }))
                                }(n)) : (t.x = u ? c += e(t, u) : 0, t.y = 0, u = t)
                            }));
                            var f = ba(l),
                                p = wa(l),
                                h = f.x - e(f, p) / 2,
                                d = p.x + e(p, f) / 2;
                            return Fo(l, r ? function(t) {
                                t.x = (t.x - l.x) * n[0], t.y = (l.y - t.y) * n[1]
                            } : function(t) {
                                t.x = (t.x - h) / (d - h) * n[0], t.y = (1 - (l.y ? t.y / l.y : 1)) * n[1]
                            }), s
                        }
                        return i.separation = function(t) {
                            return arguments.length ? (e = t, i) : e
                        }, i.size = function(t) {
                            return arguments.length ? (r = null == (n = t), i) : r ? null : n
                        }, i.nodeSize = function(t) {
                            return arguments.length ? (r = null != (n = t), i) : r ? n : null
                        }, Ho(i, t)
                    }, o.layout.treemap = function() {
                        var t, e = o.layout.hierarchy(),
                            n = Math.round,
                            r = [1, 1],
                            i = null,
                            a = Ma,
                            u = !1,
                            s = "squarify",
                            l = .5 * (1 + Math.sqrt(5));

                        function c(t, e) {
                            for (var n, r, i = -1, o = t.length; ++i < o;) r = (n = t[i]).value * (e < 0 ? 0 : e), n.area = isNaN(r) || r <= 0 ? 0 : r
                        }

                        function f(t) {
                            var e = t.children;
                            if (e && e.length) {
                                var n, r, i, o = a(t),
                                    u = [],
                                    l = e.slice(),
                                    p = 1 / 0,
                                    g = "slice" === s ? o.dx : "dice" === s ? o.dy : "slice-dice" === s ? 1 & t.depth ? o.dy : o.dx : Math.min(o.dx, o.dy);
                                for (c(l, o.dx * o.dy / t.value), u.area = 0;
                                    (i = l.length) > 0;) u.push(n = l[i - 1]), u.area += n.area, "squarify" !== s || (r = h(u, g)) <= p ? (l.pop(), p = r) : (u.area -= u.pop().area, d(u, g, o, !1), g = Math.min(o.dx, o.dy), u.length = u.area = 0, p = 1 / 0);
                                u.length && (d(u, g, o, !0), u.length = u.area = 0), e.forEach(f)
                            }
                        }

                        function p(t) {
                            var e = t.children;
                            if (e && e.length) {
                                var n, r = a(t),
                                    i = e.slice(),
                                    o = [];
                                for (c(i, r.dx * r.dy / t.value), o.area = 0; n = i.pop();) o.push(n), o.area += n.area, null != n.z && (d(o, n.z ? r.dx : r.dy, r, !i.length), o.length = o.area = 0);
                                e.forEach(p)
                            }
                        }

                        function h(t, e) {
                            for (var n, r = t.area, i = 0, o = 1 / 0, a = -1, u = t.length; ++a < u;)(n = t[a].area) && (n < o && (o = n), n > i && (i = n));
                            return e *= e, (r *= r) ? Math.max(e * i * l / r, r / (e * o * l)) : 1 / 0
                        }

                        function d(t, e, r, i) {
                            var o, a = -1,
                                u = t.length,
                                s = r.x,
                                l = r.y,
                                c = e ? n(t.area / e) : 0;
                            if (e == r.dx) {
                                for ((i || c > r.dy) && (c = r.dy); ++a < u;)(o = t[a]).x = s, o.y = l, o.dy = c, s += o.dx = Math.min(r.x + r.dx - s, c ? n(o.area / c) : 0);
                                o.z = !0, o.dx += r.x + r.dx - s, r.y += c, r.dy -= c
                            } else {
                                for ((i || c > r.dx) && (c = r.dx); ++a < u;)(o = t[a]).x = s, o.y = l, o.dx = c, l += o.dy = Math.min(r.y + r.dy - l, c ? n(o.area / c) : 0);
                                o.z = !1, o.dy += r.y + r.dy - l, r.x += c, r.dx -= c
                            }
                        }

                        function g(n) {
                            var i = t || e(n),
                                o = i[0];
                            return o.x = 0, o.y = 0, o.dx = r[0], o.dy = r[1], t && e.revalue(o), c([o], o.dx * o.dy / o.value), (t ? p : f)(o), u && (t = i), i
                        }
                        return g.size = function(t) {
                            return arguments.length ? (r = t, g) : r
                        }, g.padding = function(t) {
                            if (!arguments.length) return i;

                            function e(e) {
                                var n = t.call(g, e, e.depth);
                                return null == n ? Ma(e) : Ea(e, "number" == typeof n ? [n, n, n, n] : n)
                            }

                            function n(e) {
                                return Ea(e, t)
                            }
                            var r;
                            return a = null == (i = t) ? Ma : "function" == (r = typeof t) ? e : "number" === r ? (t = [t, t, t, t], n) : n, g
                        }, g.round = function(t) {
                            return arguments.length ? (n = t ? Math.round : Number, g) : n != Number
                        }, g.sticky = function(e) {
                            return arguments.length ? (u = e, t = null, g) : u
                        }, g.ratio = function(t) {
                            return arguments.length ? (l = t, g) : l
                        }, g.mode = function(t) {
                            return arguments.length ? (s = t + "", g) : s
                        }, Ho(g, e)
                    }, o.random = {
                        normal: function(t, e) {
                            var n = arguments.length;
                            return n < 2 && (e = 1), n < 1 && (t = 0),
                                function() {
                                    var n, r, i;
                                    do {
                                        i = (n = 2 * Math.random() - 1) * n + (r = 2 * Math.random() - 1) * r
                                    } while (!i || i > 1);
                                    return t + e * n * Math.sqrt(-2 * Math.log(i) / i)
                                }
                        },
                        logNormal: function() {
                            var t = o.random.normal.apply(o, arguments);
                            return function() {
                                return Math.exp(t())
                            }
                        },
                        bates: function(t) {
                            var e = o.random.irwinHall(t);
                            return function() {
                                return e() / t
                            }
                        },
                        irwinHall: function(t) {
                            return function() {
                                for (var e = 0, n = 0; n < t; n++) e += Math.random();
                                return e
                            }
                        }
                    }, o.scale = {};
                    var Na = {
                        floor: q,
                        ceil: q
                    };

                    function Ca(t, e, n, r) {
                        var i = [],
                            a = [],
                            u = 0,
                            s = Math.min(t.length, e.length) - 1;
                        for (t[s] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++u <= s;) i.push(n(t[u - 1], t[u])), a.push(r(e[u - 1], e[u]));
                        return function(e) {
                            var n = o.bisect(t, e, 1, s) - 1;
                            return a[n](i[n](e))
                        }
                    }

                    function ka(t, e, n, r) {
                        var i, o;

                        function a() {
                            var a = Math.min(t.length, e.length) > 2 ? Ca : Ta,
                                s = r ? No : So;
                            return i = a(t, e, s, n), o = a(e, t, s, oo), u
                        }

                        function u(t) {
                            return i(t)
                        }
                        return u.invert = function(t) {
                            return o(t)
                        }, u.domain = function(e) {
                            return arguments.length ? (t = e.map(Number), a()) : t
                        }, u.range = function(t) {
                            return arguments.length ? (e = t, a()) : e
                        }, u.rangeRound = function(t) {
                            return u.range(t).interpolate(wo)
                        }, u.clamp = function(t) {
                            return arguments.length ? (r = t, a()) : r
                        }, u.interpolate = function(t) {
                            return arguments.length ? (n = t, a()) : n
                        }, u.ticks = function(e) {
                            return qa(t, e)
                        }, u.tickFormat = function(e, n) {
                            return ja(t, e, n)
                        }, u.nice = function(e) {
                            return La(t, e), a()
                        }, u.copy = function() {
                            return ka(t, e, n, r)
                        }, a()
                    }

                    function Da(t, e) {
                        return o.rebind(t, e, "range", "rangeRound", "interpolate", "clamp")
                    }

                    function La(t, e) {
                        return Sa(t, (n = Oa(t, e)[2]) ? {
                            floor: function(t) {
                                return Math.floor(t / n) * n
                            },
                            ceil: function(t) {
                                return Math.ceil(t / n) * n
                            }
                        } : Na);
                        var n
                    }

                    function Oa(t, e) {
                        null == e && (e = 10);
                        var n = _a(t),
                            r = n[1] - n[0],
                            i = Math.pow(10, Math.floor(Math.log(r / e) / Math.LN10)),
                            o = e / r * i;
                        return o <= .15 ? i *= 10 : o <= .35 ? i *= 5 : o <= .75 && (i *= 2), n[0] = Math.ceil(n[0] / i) * i, n[1] = Math.floor(n[1] / i) * i + .5 * i, n[2] = i, n
                    }

                    function qa(t, e) {
                        return o.range.apply(o, Oa(t, e))
                    }

                    function ja(t, e, n) {
                        var r = Oa(t, e);
                        if (n) {
                            var i = qe.exec(n);
                            if (i.shift(), "s" === i[8]) {
                                var a = o.formatPrefix(Math.max(M(r[0]), M(r[1])));
                                return i[7] || (i[7] = "." + Ra(a.scale(r[2]))), i[8] = "f", n = o.format(i.join("")),
                                    function(t) {
                                        return n(a.scale(t)) + a.symbol
                                    }
                            }
                            i[7] || (i[7] = "." + function(t, e) {
                                var n = Ra(e[2]);
                                return t in Pa ? Math.abs(n - Ra(Math.max(M(e[0]), M(e[1])))) + +("e" !== t) : n - 2 * ("%" === t)
                            }(i[8], r)), n = i.join("")
                        } else n = ",." + Ra(r[2]) + "f";
                        return o.format(n)
                    }
                    o.scale.linear = function() {
                        return ka([0, 1], [0, 1], oo, !1)
                    };
                    var Pa = {
                        s: 1,
                        g: 1,
                        p: 1,
                        r: 1,
                        e: 1
                    };

                    function Ra(t) {
                        return -Math.floor(Math.log(t) / Math.LN10 + .01)
                    }

                    function za(t, e, n, r) {
                        function i(t) {
                            return (n ? Math.log(t < 0 ? 0 : t) : -Math.log(t > 0 ? 0 : -t)) / Math.log(e)
                        }

                        function a(t) {
                            return n ? Math.pow(e, t) : -Math.pow(e, -t)
                        }

                        function u(e) {
                            return t(i(e))
                        }
                        return u.invert = function(e) {
                            return a(t.invert(e))
                        }, u.domain = function(e) {
                            return arguments.length ? (n = e[0] >= 0, t.domain((r = e.map(Number)).map(i)), u) : r
                        }, u.base = function(n) {
                            return arguments.length ? (e = +n, t.domain(r.map(i)), u) : e
                        }, u.nice = function() {
                            var e = Sa(r.map(i), n ? Math : Ia);
                            return t.domain(e), r = e.map(a), u
                        }, u.ticks = function() {
                            var t = _a(r),
                                o = [],
                                u = t[0],
                                s = t[1],
                                l = Math.floor(i(u)),
                                c = Math.ceil(i(s)),
                                f = e % 1 ? 2 : e;
                            if (isFinite(c - l)) {
                                if (n) {
                                    for (; l < c; l++)
                                        for (var p = 1; p < f; p++) o.push(a(l) * p);
                                    o.push(a(l))
                                } else
                                    for (o.push(a(l)); l++ < c;)
                                        for (p = f - 1; p > 0; p--) o.push(a(l) * p);
                                for (l = 0; o[l] < u; l++);
                                for (c = o.length; o[c - 1] > s; c--);
                                o = o.slice(l, c)
                            }
                            return o
                        }, u.tickFormat = function(t, e) {
                            if (!arguments.length) return Ha;
                            arguments.length < 2 ? e = Ha : "function" != typeof e && (e = o.format(e));
                            var r, s = Math.max(.1, t / u.ticks().length),
                                l = n ? (r = 1e-12, Math.ceil) : (r = -1e-12, Math.floor);
                            return function(t) {
                                return t / a(l(i(t) + r)) <= s ? e(t) : ""
                            }
                        }, u.copy = function() {
                            return za(t.copy(), e, n, r)
                        }, Da(u, t)
                    }
                    o.scale.log = function() {
                        return za(o.scale.linear().domain([0, 1]), 10, !0, [1, 10])
                    };
                    var Ha = o.format(".0e"),
                        Ia = {
                            floor: function(t) {
                                return -Math.ceil(-t)
                            },
                            ceil: function(t) {
                                return -Math.floor(-t)
                            }
                        };

                    function Fa(t, e, n) {
                        var r = Ua(e),
                            i = Ua(1 / e);

                        function o(e) {
                            return t(r(e))
                        }
                        return o.invert = function(e) {
                            return i(t.invert(e))
                        }, o.domain = function(e) {
                            return arguments.length ? (t.domain((n = e.map(Number)).map(r)), o) : n
                        }, o.ticks = function(t) {
                            return qa(n, t)
                        }, o.tickFormat = function(t, e) {
                            return ja(n, t, e)
                        }, o.nice = function(t) {
                            return o.domain(La(n, t))
                        }, o.exponent = function(a) {
                            return arguments.length ? (r = Ua(e = a), i = Ua(1 / e), t.domain(n.map(r)), o) : e
                        }, o.copy = function() {
                            return Fa(t.copy(), e, n)
                        }, Da(o, t)
                    }

                    function Ua(t) {
                        return function(e) {
                            return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t)
                        }
                    }

                    function Ba(t, e) {
                        var n, r, i;

                        function a(i) {
                            return r[((n.get(i) || ("range" === e.t ? n.set(i, t.push(i)) : NaN)) - 1) % r.length]
                        }

                        function u(e, n) {
                            return o.range(t.length).map((function(t) {
                                return e + n * t
                            }))
                        }
                        return a.domain = function(r) {
                            if (!arguments.length) return t;
                            t = [], n = new A;
                            for (var i, o = -1, u = r.length; ++o < u;) n.has(i = r[o]) || n.set(i, t.push(i));
                            return a[e.t].apply(a, e.a)
                        }, a.range = function(t) {
                            return arguments.length ? (r = t, i = 0, e = {
                                t: "range",
                                a: arguments
                            }, a) : r
                        }, a.rangePoints = function(n, o) {
                            arguments.length < 2 && (o = 0);
                            var s = n[0],
                                l = n[1],
                                c = t.length < 2 ? (s = (s + l) / 2, 0) : (l - s) / (t.length - 1 + o);
                            return r = u(s + c * o / 2, c), i = 0, e = {
                                t: "rangePoints",
                                a: arguments
                            }, a
                        }, a.rangeRoundPoints = function(n, o) {
                            arguments.length < 2 && (o = 0);
                            var s = n[0],
                                l = n[1],
                                c = t.length < 2 ? (s = l = Math.round((s + l) / 2), 0) : (l - s) / (t.length - 1 + o) | 0;
                            return r = u(s + Math.round(c * o / 2 + (l - s - (t.length - 1 + o) * c) / 2), c), i = 0, e = {
                                t: "rangeRoundPoints",
                                a: arguments
                            }, a
                        }, a.rangeBands = function(n, o, s) {
                            arguments.length < 2 && (o = 0), arguments.length < 3 && (s = o);
                            var l = n[1] < n[0],
                                c = n[l - 0],
                                f = n[1 - l],
                                p = (f - c) / (t.length - o + 2 * s);
                            return r = u(c + p * s, p), l && r.reverse(), i = p * (1 - o), e = {
                                t: "rangeBands",
                                a: arguments
                            }, a
                        }, a.rangeRoundBands = function(n, o, s) {
                            arguments.length < 2 && (o = 0), arguments.length < 3 && (s = o);
                            var l = n[1] < n[0],
                                c = n[l - 0],
                                f = n[1 - l],
                                p = Math.floor((f - c) / (t.length - o + 2 * s));
                            return r = u(c + Math.round((f - c - (t.length - o) * p) / 2), p), l && r.reverse(), i = Math.round(p * (1 - o)), e = {
                                t: "rangeRoundBands",
                                a: arguments
                            }, a
                        }, a.rangeBand = function() {
                            return i
                        }, a.rangeExtent = function() {
                            return _a(e.a[0])
                        }, a.copy = function() {
                            return Ba(t, e)
                        }, a.domain(t)
                    }
                    o.scale.pow = function() {
                        return Fa(o.scale.linear(), 1, [0, 1])
                    }, o.scale.sqrt = function() {
                        return o.scale.pow().exponent(.5)
                    }, o.scale.ordinal = function() {
                        return Ba([], {
                            t: "range",
                            a: [
                                []
                            ]
                        })
                    }, o.scale.category10 = function() {
                        return o.scale.ordinal().range(Wa)
                    }, o.scale.category20 = function() {
                        return o.scale.ordinal().range($a)
                    }, o.scale.category20b = function() {
                        return o.scale.ordinal().range(Va)
                    }, o.scale.category20c = function() {
                        return o.scale.ordinal().range(Xa)
                    };
                    var Wa = [2062260, 16744206, 2924588, 14034728, 9725885, 9197131, 14907330, 8355711, 12369186, 1556175].map(ce),
                        $a = [2062260, 11454440, 16744206, 16759672, 2924588, 10018698, 14034728, 16750742, 9725885, 12955861, 9197131, 12885140, 14907330, 16234194, 8355711, 13092807, 12369186, 14408589, 1556175, 10410725].map(ce),
                        Va = [3750777, 5395619, 7040719, 10264286, 6519097, 9216594, 11915115, 13556636, 9202993, 12426809, 15186514, 15190932, 8666169, 11356490, 14049643, 15177372, 8077683, 10834324, 13528509, 14589654].map(ce),
                        Xa = [3244733, 7057110, 10406625, 13032431, 15095053, 16616764, 16625259, 16634018, 3253076, 7652470, 10607003, 13101504, 7695281, 10394312, 12369372, 14342891, 6513507, 9868950, 12434877, 14277081].map(ce);

                    function Ya(t, e) {
                        var n;

                        function r() {
                            var r = 0,
                                a = e.length;
                            for (n = []; ++r < a;) n[r - 1] = o.quantile(t, r / a);
                            return i
                        }

                        function i(t) {
                            if (!isNaN(t = +t)) return e[o.bisect(n, t)]
                        }
                        return i.domain = function(e) {
                            return arguments.length ? (t = e.map(y).filter(m).sort(v), r()) : t
                        }, i.range = function(t) {
                            return arguments.length ? (e = t, r()) : e
                        }, i.quantiles = function() {
                            return n
                        }, i.invertExtent = function(r) {
                            return (r = e.indexOf(r)) < 0 ? [NaN, NaN] : [r > 0 ? n[r - 1] : t[0], r < n.length ? n[r] : t[t.length - 1]]
                        }, i.copy = function() {
                            return Ya(t, e)
                        }, r()
                    }

                    function Za(t, e, n) {
                        var r, i;

                        function o(e) {
                            return n[Math.max(0, Math.min(i, Math.floor(r * (e - t))))]
                        }

                        function a() {
                            return r = n.length / (e - t), i = n.length - 1, o
                        }
                        return o.domain = function(n) {
                            return arguments.length ? (t = +n[0], e = +n[n.length - 1], a()) : [t, e]
                        }, o.range = function(t) {
                            return arguments.length ? (n = t, a()) : n
                        }, o.invertExtent = function(e) {
                            return [e = (e = n.indexOf(e)) < 0 ? NaN : e / r + t, e + 1 / r]
                        }, o.copy = function() {
                            return Za(t, e, n)
                        }, a()
                    }

                    function Ga(t, e) {
                        function n(n) {
                            if (n <= n) return e[o.bisect(t, n)]
                        }
                        return n.domain = function(e) {
                            return arguments.length ? (t = e, n) : t
                        }, n.range = function(t) {
                            return arguments.length ? (e = t, n) : e
                        }, n.invertExtent = function(n) {
                            return n = e.indexOf(n), [t[n - 1], t[n]]
                        }, n.copy = function() {
                            return Ga(t, e)
                        }, n
                    }

                    function Ka(t) {
                        function e(t) {
                            return +t
                        }
                        return e.invert = e, e.domain = e.range = function(n) {
                            return arguments.length ? (t = n.map(e), e) : t
                        }, e.ticks = function(e) {
                            return qa(t, e)
                        }, e.tickFormat = function(e, n) {
                            return ja(t, e, n)
                        }, e.copy = function() {
                            return Ka(t)
                        }, e
                    }

                    function Qa() {
                        return 0
                    }
                    o.scale.quantile = function() {
                        return Ya([], [])
                    }, o.scale.quantize = function() {
                        return Za(0, 1, [0, 1])
                    }, o.scale.threshold = function() {
                        return Ga([.5], [0, 1])
                    }, o.scale.identity = function() {
                        return Ka([0, 1])
                    }, o.svg = {}, o.svg.arc = function() {
                        var t = tu,
                            e = eu,
                            n = Qa,
                            r = Ja,
                            i = nu,
                            o = ru,
                            a = iu;

                        function u() {
                            var u = Math.max(0, +t.apply(this, arguments)),
                                l = Math.max(0, +e.apply(this, arguments)),
                                c = i.apply(this, arguments) - Lt,
                                f = o.apply(this, arguments) - Lt,
                                p = Math.abs(f - c),
                                h = c > f ? 0 : 1;
                            if (l < u && (d = l, l = u, u = d), p >= Dt) return s(l, h) + (u ? s(u, 1 - h) : "") + "Z";
                            var d, g, v, y, m, x, b, w, M, E, _, A, T = 0,
                                S = 0,
                                N = [];
                            if ((y = (+a.apply(this, arguments) || 0) / 2) && (v = r === Ja ? Math.sqrt(u * u + l * l) : +r.apply(this, arguments), h || (S *= -1), l && (S = zt(v / l * Math.sin(y))), u && (T = zt(v / u * Math.sin(y)))), l) {
                                m = l * Math.cos(c + S), x = l * Math.sin(c + S), b = l * Math.cos(f - S), w = l * Math.sin(f - S);
                                var C = Math.abs(f - c - 2 * S) <= Ct ? 0 : 1;
                                if (S && ou(m, x, b, w) === h ^ C) {
                                    var k = (c + f) / 2;
                                    m = l * Math.cos(k), x = l * Math.sin(k), b = w = null
                                }
                            } else m = x = 0;
                            if (u) {
                                M = u * Math.cos(f - T), E = u * Math.sin(f - T), _ = u * Math.cos(c + T), A = u * Math.sin(c + T);
                                var D = Math.abs(c - f + 2 * T) <= Ct ? 0 : 1;
                                if (T && ou(M, E, _, A) === 1 - h ^ D) {
                                    var L = (c + f) / 2;
                                    M = u * Math.cos(L), E = u * Math.sin(L), _ = A = null
                                }
                            } else M = E = 0;
                            if ((d = Math.min(Math.abs(l - u) / 2, +n.apply(this, arguments))) > .001) {
                                g = u < l ^ h ? 0 : 1;
                                var O = null == _ ? [M, E] : null == b ? [m, x] : di([m, x], [_, A], [b, w], [M, E]),
                                    q = m - O[0],
                                    j = x - O[1],
                                    P = b - O[0],
                                    R = w - O[1],
                                    z = 1 / Math.sin(Math.acos((q * P + j * R) / (Math.sqrt(q * q + j * j) * Math.sqrt(P * P + R * R))) / 2),
                                    H = Math.sqrt(O[0] * O[0] + O[1] * O[1]);
                                if (null != b) {
                                    var I = Math.min(d, (l - H) / (z + 1)),
                                        F = au(null == _ ? [M, E] : [_, A], [m, x], l, I, h),
                                        U = au([b, w], [M, E], l, I, h);
                                    d === I ? N.push("M", F[0], "A", I, ",", I, " 0 0,", g, " ", F[1], "A", l, ",", l, " 0 ", 1 - h ^ ou(F[1][0], F[1][1], U[1][0], U[1][1]), ",", h, " ", U[1], "A", I, ",", I, " 0 0,", g, " ", U[0]) : N.push("M", F[0], "A", I, ",", I, " 0 1,", g, " ", U[0])
                                } else N.push("M", m, ",", x);
                                if (null != _) {
                                    var B = Math.min(d, (u - H) / (z - 1)),
                                        W = au([m, x], [_, A], u, -B, h),
                                        $ = au([M, E], null == b ? [m, x] : [b, w], u, -B, h);
                                    d === B ? N.push("L", $[0], "A", B, ",", B, " 0 0,", g, " ", $[1], "A", u, ",", u, " 0 ", h ^ ou($[1][0], $[1][1], W[1][0], W[1][1]), ",", 1 - h, " ", W[1], "A", B, ",", B, " 0 0,", g, " ", W[0]) : N.push("L", $[0], "A", B, ",", B, " 0 0,", g, " ", W[0])
                                } else N.push("L", M, ",", E)
                            } else N.push("M", m, ",", x), null != b && N.push("A", l, ",", l, " 0 ", C, ",", h, " ", b, ",", w), N.push("L", M, ",", E), null != _ && N.push("A", u, ",", u, " 0 ", D, ",", 1 - h, " ", _, ",", A);
                            return N.push("Z"), N.join("")
                        }

                        function s(t, e) {
                            return "M0," + t + "A" + t + "," + t + " 0 1," + e + " 0," + -t + "A" + t + "," + t + " 0 1," + e + " 0," + t
                        }
                        return u.innerRadius = function(e) {
                            return arguments.length ? (t = xe(e), u) : t
                        }, u.outerRadius = function(t) {
                            return arguments.length ? (e = xe(t), u) : e
                        }, u.cornerRadius = function(t) {
                            return arguments.length ? (n = xe(t), u) : n
                        }, u.padRadius = function(t) {
                            return arguments.length ? (r = t == Ja ? Ja : xe(t), u) : r
                        }, u.startAngle = function(t) {
                            return arguments.length ? (i = xe(t), u) : i
                        }, u.endAngle = function(t) {
                            return arguments.length ? (o = xe(t), u) : o
                        }, u.padAngle = function(t) {
                            return arguments.length ? (a = xe(t), u) : a
                        }, u.centroid = function() {
                            var n = (+t.apply(this, arguments) + +e.apply(this, arguments)) / 2,
                                r = (+i.apply(this, arguments) + +o.apply(this, arguments)) / 2 - Lt;
                            return [Math.cos(r) * n, Math.sin(r) * n]
                        }, u
                    };
                    var Ja = "auto";

                    function tu(t) {
                        return t.innerRadius
                    }

                    function eu(t) {
                        return t.outerRadius
                    }

                    function nu(t) {
                        return t.startAngle
                    }

                    function ru(t) {
                        return t.endAngle
                    }

                    function iu(t) {
                        return t && t.padAngle
                    }

                    function ou(t, e, n, r) {
                        return (t - n) * e - (e - r) * t > 0 ? 0 : 1
                    }

                    function au(t, e, n, r, i) {
                        var o = t[0] - e[0],
                            a = t[1] - e[1],
                            u = (i ? r : -r) / Math.sqrt(o * o + a * a),
                            s = u * a,
                            l = -u * o,
                            c = t[0] + s,
                            f = t[1] + l,
                            p = e[0] + s,
                            h = e[1] + l,
                            d = (c + p) / 2,
                            g = (f + h) / 2,
                            v = p - c,
                            y = h - f,
                            m = v * v + y * y,
                            x = n - r,
                            b = c * h - p * f,
                            w = (y < 0 ? -1 : 1) * Math.sqrt(x * x * m - b * b),
                            M = (b * y - v * w) / m,
                            E = (-b * v - y * w) / m,
                            _ = (b * y + v * w) / m,
                            A = (-b * v + y * w) / m,
                            T = M - d,
                            S = E - g,
                            N = _ - d,
                            C = A - g;
                        return T * T + S * S > N * N + C * C && (M = _, E = A), [
                            [M - s, E - l],
                            [M * n / x, E * n / x]
                        ]
                    }

                    function uu(t) {
                        var e = si,
                            n = li,
                            r = Qn,
                            i = lu,
                            o = i.key,
                            a = .7;

                        function u(o) {
                            var u, s = [],
                                l = [],
                                c = -1,
                                f = o.length,
                                p = xe(e),
                                h = xe(n);

                            function d() {
                                s.push("M", i(t(l), a))
                            }
                            for (; ++c < f;) r.call(this, u = o[c], c) ? l.push([+p.call(this, u, c), +h.call(this, u, c)]) : l.length && (d(), l = []);
                            return l.length && d(), s.length ? s.join("") : null
                        }
                        return u.x = function(t) {
                            return arguments.length ? (e = t, u) : e
                        }, u.y = function(t) {
                            return arguments.length ? (n = t, u) : n
                        }, u.defined = function(t) {
                            return arguments.length ? (r = t, u) : r
                        }, u.interpolate = function(t) {
                            return arguments.length ? (o = "function" == typeof t ? i = t : (i = su.get(t) || lu).key, u) : o
                        }, u.tension = function(t) {
                            return arguments.length ? (a = t, u) : a
                        }, u
                    }
                    o.svg.line = function() {
                        return uu(q)
                    };
                    var su = o.map({
                        linear: lu,
                        "linear-closed": function(t) {
                            return lu(t) + "Z"
                        },
                        step: function(t) {
                            var e = 0,
                                n = t.length,
                                r = t[0],
                                i = [r[0], ",", r[1]];
                            for (; ++e < n;) i.push("H", (r[0] + (r = t[e])[0]) / 2, "V", r[1]);
                            n > 1 && i.push("H", r[0]);
                            return i.join("")
                        },
                        "step-before": cu,
                        "step-after": fu,
                        basis: du,
                        "basis-open": function(t) {
                            if (t.length < 4) return lu(t);
                            var e, n = [],
                                r = -1,
                                i = t.length,
                                o = [0],
                                a = [0];
                            for (; ++r < 3;) e = t[r], o.push(e[0]), a.push(e[1]);
                            n.push(gu(mu, o) + "," + gu(mu, a)), --r;
                            for (; ++r < i;) e = t[r], o.shift(), o.push(e[0]), a.shift(), a.push(e[1]), xu(n, o, a);
                            return n.join("")
                        },
                        "basis-closed": function(t) {
                            var e, n, r = -1,
                                i = t.length,
                                o = i + 4,
                                a = [],
                                u = [];
                            for (; ++r < 4;) n = t[r % i], a.push(n[0]), u.push(n[1]);
                            e = [gu(mu, a), ",", gu(mu, u)], --r;
                            for (; ++r < o;) n = t[r % i], a.shift(), a.push(n[0]), u.shift(), u.push(n[1]), xu(e, a, u);
                            return e.join("")
                        },
                        bundle: function(t, e) {
                            var n = t.length - 1;
                            if (n)
                                for (var r, i, o = t[0][0], a = t[0][1], u = t[n][0] - o, s = t[n][1] - a, l = -1; ++l <= n;) r = t[l], i = l / n, r[0] = e * r[0] + (1 - e) * (o + i * u), r[1] = e * r[1] + (1 - e) * (a + i * s);
                            return du(t)
                        },
                        cardinal: function(t, e) {
                            return t.length < 3 ? lu(t) : t[0] + pu(t, hu(t, e))
                        },
                        "cardinal-open": function(t, e) {
                            return t.length < 4 ? lu(t) : t[1] + pu(t.slice(1, -1), hu(t, e))
                        },
                        "cardinal-closed": function(t, e) {
                            return t.length < 3 ? lu(t) : t[0] + pu((t.push(t[0]), t), hu([t[t.length - 2]].concat(t, [t[1]]), e))
                        },
                        monotone: function(t) {
                            return t.length < 3 ? lu(t) : t[0] + pu(t, function(t) {
                                var e, n, r, i, o = [],
                                    a = function(t) {
                                        var e = 0,
                                            n = t.length - 1,
                                            r = [],
                                            i = t[0],
                                            o = t[1],
                                            a = r[0] = bu(i, o);
                                        for (; ++e < n;) r[e] = (a + (a = bu(i = o, o = t[e + 1]))) / 2;
                                        return r[e] = a, r
                                    }(t),
                                    u = -1,
                                    s = t.length - 1;
                                for (; ++u < s;) e = bu(t[u], t[u + 1]), M(e) < St ? a[u] = a[u + 1] = 0 : (i = (n = a[u] / e) * n + (r = a[u + 1] / e) * r) > 9 && (i = 3 * e / Math.sqrt(i), a[u] = i * n, a[u + 1] = i * r);
                                u = -1;
                                for (; ++u <= s;) i = (t[Math.min(s, u + 1)][0] - t[Math.max(0, u - 1)][0]) / (6 * (1 + a[u] * a[u])), o.push([i || 0, a[u] * i || 0]);
                                return o
                            }(t))
                        }
                    });

                    function lu(t) {
                        return t.join("L")
                    }

                    function cu(t) {
                        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("V", (r = t[e])[1], "H", r[0]);
                        return i.join("")
                    }

                    function fu(t) {
                        for (var e = 0, n = t.length, r = t[0], i = [r[0], ",", r[1]]; ++e < n;) i.push("H", (r = t[e])[0], "V", r[1]);
                        return i.join("")
                    }

                    function pu(t, e) {
                        if (e.length < 1 || t.length != e.length && t.length != e.length + 2) return lu(t);
                        var n = t.length != e.length,
                            r = "",
                            i = t[0],
                            o = t[1],
                            a = e[0],
                            u = a,
                            s = 1;
                        if (n && (r += "Q" + (o[0] - 2 * a[0] / 3) + "," + (o[1] - 2 * a[1] / 3) + "," + o[0] + "," + o[1], i = t[1], s = 2), e.length > 1) {
                            u = e[1], o = t[s], s++, r += "C" + (i[0] + a[0]) + "," + (i[1] + a[1]) + "," + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1];
                            for (var l = 2; l < e.length; l++, s++) o = t[s], u = e[l], r += "S" + (o[0] - u[0]) + "," + (o[1] - u[1]) + "," + o[0] + "," + o[1]
                        }
                        if (n) {
                            var c = t[s];
                            r += "Q" + (o[0] + 2 * u[0] / 3) + "," + (o[1] + 2 * u[1] / 3) + "," + c[0] + "," + c[1]
                        }
                        return r
                    }

                    function hu(t, e) {
                        for (var n, r = [], i = (1 - e) / 2, o = t[0], a = t[1], u = 1, s = t.length; ++u < s;) n = o, o = a, a = t[u], r.push([i * (a[0] - n[0]), i * (a[1] - n[1])]);
                        return r
                    }

                    function du(t) {
                        if (t.length < 3) return lu(t);
                        var e = 1,
                            n = t.length,
                            r = t[0],
                            i = r[0],
                            o = r[1],
                            a = [i, i, i, (r = t[1])[0]],
                            u = [o, o, o, r[1]],
                            s = [i, ",", o, "L", gu(mu, a), ",", gu(mu, u)];
                        for (t.push(t[n - 1]); ++e <= n;) r = t[e], a.shift(), a.push(r[0]), u.shift(), u.push(r[1]), xu(s, a, u);
                        return t.pop(), s.push("L", r), s.join("")
                    }

                    function gu(t, e) {
                        return t[0] * e[0] + t[1] * e[1] + t[2] * e[2] + t[3] * e[3]
                    }
                    su.forEach((function(t, e) {
                        e.key = t, e.closed = /-closed$/.test(t)
                    }));
                    var vu = [0, 2 / 3, 1 / 3, 0],
                        yu = [0, 1 / 3, 2 / 3, 0],
                        mu = [0, 1 / 6, 2 / 3, 1 / 6];

                    function xu(t, e, n) {
                        t.push("C", gu(vu, e), ",", gu(vu, n), ",", gu(yu, e), ",", gu(yu, n), ",", gu(mu, e), ",", gu(mu, n))
                    }

                    function bu(t, e) {
                        return (e[1] - t[1]) / (e[0] - t[0])
                    }

                    function wu(t) {
                        for (var e, n, r, i = -1, o = t.length; ++i < o;) n = (e = t[i])[0], r = e[1] - Lt, e[0] = n * Math.cos(r), e[1] = n * Math.sin(r);
                        return t
                    }

                    function Mu(t) {
                        var e = si,
                            n = si,
                            r = 0,
                            i = li,
                            o = Qn,
                            a = lu,
                            u = a.key,
                            s = a,
                            l = "L",
                            c = .7;

                        function f(u) {
                            var f, p, h, d = [],
                                g = [],
                                v = [],
                                y = -1,
                                m = u.length,
                                x = xe(e),
                                b = xe(r),
                                w = e === n ? function() {
                                    return p
                                } : xe(n),
                                M = r === i ? function() {
                                    return h
                                } : xe(i);

                            function E() {
                                d.push("M", a(t(v), c), l, s(t(g.reverse()), c), "Z")
                            }
                            for (; ++y < m;) o.call(this, f = u[y], y) ? (g.push([p = +x.call(this, f, y), h = +b.call(this, f, y)]), v.push([+w.call(this, f, y), +M.call(this, f, y)])) : g.length && (E(), g = [], v = []);
                            return g.length && E(), d.length ? d.join("") : null
                        }
                        return f.x = function(t) {
                            return arguments.length ? (e = n = t, f) : n
                        }, f.x0 = function(t) {
                            return arguments.length ? (e = t, f) : e
                        }, f.x1 = function(t) {
                            return arguments.length ? (n = t, f) : n
                        }, f.y = function(t) {
                            return arguments.length ? (r = i = t, f) : i
                        }, f.y0 = function(t) {
                            return arguments.length ? (r = t, f) : r
                        }, f.y1 = function(t) {
                            return arguments.length ? (i = t, f) : i
                        }, f.defined = function(t) {
                            return arguments.length ? (o = t, f) : o
                        }, f.interpolate = function(t) {
                            return arguments.length ? (u = "function" == typeof t ? a = t : (a = su.get(t) || lu).key, s = a.reverse || a, l = a.closed ? "M" : "L", f) : u
                        }, f.tension = function(t) {
                            return arguments.length ? (c = t, f) : c
                        }, f
                    }

                    function Eu(t) {
                        return t.radius
                    }

                    function _u(t) {
                        return [t.x, t.y]
                    }

                    function Au(t) {
                        return function() {
                            var e = t.apply(this, arguments),
                                n = e[0],
                                r = e[1] - Lt;
                            return [n * Math.cos(r), n * Math.sin(r)]
                        }
                    }

                    function Tu() {
                        return 64
                    }

                    function Su() {
                        return "circle"
                    }

                    function Nu(t) {
                        var e = Math.sqrt(t / Ct);
                        return "M0," + e + "A" + e + "," + e + " 0 1,1 0," + -e + "A" + e + "," + e + " 0 1,1 0," + e + "Z"
                    }
                    o.svg.line.radial = function() {
                        var t = uu(wu);
                        return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
                    }, cu.reverse = fu, fu.reverse = cu, o.svg.area = function() {
                        return Mu(q)
                    }, o.svg.area.radial = function() {
                        var t = Mu(wu);
                        return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
                    }, o.svg.chord = function() {
                        var t = Yr,
                            e = Zr,
                            n = Eu,
                            r = nu,
                            i = ru;

                        function o(n, r) {
                            var i, o, l = a(this, t, n, r),
                                c = a(this, e, n, r);
                            return "M" + l.p0 + u(l.r, l.p1, l.a1 - l.a0) + (o = c, ((i = l).a0 == o.a0 && i.a1 == o.a1 ? s(l.r, l.p1, l.r, l.p0) : s(l.r, l.p1, c.r, c.p0) + u(c.r, c.p1, c.a1 - c.a0) + s(c.r, c.p1, l.r, l.p0)) + "Z")
                        }

                        function a(t, e, o, a) {
                            var u = e.call(t, o, a),
                                s = n.call(t, u, a),
                                l = r.call(t, u, a) - Lt,
                                c = i.call(t, u, a) - Lt;
                            return {
                                r: s,
                                a0: l,
                                a1: c,
                                p0: [s * Math.cos(l), s * Math.sin(l)],
                                p1: [s * Math.cos(c), s * Math.sin(c)]
                            }
                        }

                        function u(t, e, n) {
                            return "A" + t + "," + t + " 0 " + +(n > Ct) + ",1 " + e
                        }

                        function s(t, e, n, r) {
                            return "Q 0,0 " + r
                        }
                        return o.radius = function(t) {
                            return arguments.length ? (n = xe(t), o) : n
                        }, o.source = function(e) {
                            return arguments.length ? (t = xe(e), o) : t
                        }, o.target = function(t) {
                            return arguments.length ? (e = xe(t), o) : e
                        }, o.startAngle = function(t) {
                            return arguments.length ? (r = xe(t), o) : r
                        }, o.endAngle = function(t) {
                            return arguments.length ? (i = xe(t), o) : i
                        }, o
                    }, o.svg.diagonal = function() {
                        var t = Yr,
                            e = Zr,
                            n = _u;

                        function r(r, i) {
                            var o = t.call(this, r, i),
                                a = e.call(this, r, i),
                                u = (o.y + a.y) / 2,
                                s = [o, {
                                    x: o.x,
                                    y: u
                                }, {
                                    x: a.x,
                                    y: u
                                }, a];
                            return "M" + (s = s.map(n))[0] + "C" + s[1] + " " + s[2] + " " + s[3]
                        }
                        return r.source = function(e) {
                            return arguments.length ? (t = xe(e), r) : t
                        }, r.target = function(t) {
                            return arguments.length ? (e = xe(t), r) : e
                        }, r.projection = function(t) {
                            return arguments.length ? (n = t, r) : n
                        }, r
                    }, o.svg.diagonal.radial = function() {
                        var t = o.svg.diagonal(),
                            e = _u,
                            n = t.projection;
                        return t.projection = function(t) {
                            return arguments.length ? n(Au(e = t)) : e
                        }, t
                    }, o.svg.symbol = function() {
                        var t = Su,
                            e = Tu;

                        function n(n, r) {
                            return (Cu.get(t.call(this, n, r)) || Nu)(e.call(this, n, r))
                        }
                        return n.type = function(e) {
                            return arguments.length ? (t = xe(e), n) : t
                        }, n.size = function(t) {
                            return arguments.length ? (e = xe(t), n) : e
                        }, n
                    };
                    var Cu = o.map({
                        circle: Nu,
                        cross: function(t) {
                            var e = Math.sqrt(t / 5) / 2;
                            return "M" + -3 * e + "," + -e + "H" + -e + "V" + -3 * e + "H" + e + "V" + -e + "H" + 3 * e + "V" + e + "H" + e + "V" + 3 * e + "H" + -e + "V" + e + "H" + -3 * e + "Z"
                        },
                        diamond: function(t) {
                            var e = Math.sqrt(t / (2 * Du)),
                                n = e * Du;
                            return "M0," + -e + "L" + n + ",0 0," + e + " " + -n + ",0Z"
                        },
                        square: function(t) {
                            var e = Math.sqrt(t) / 2;
                            return "M" + -e + "," + -e + "L" + e + "," + -e + " " + e + "," + e + " " + -e + "," + e + "Z"
                        },
                        "triangle-down": function(t) {
                            var e = Math.sqrt(t / ku),
                                n = e * ku / 2;
                            return "M0," + n + "L" + e + "," + -n + " " + -e + "," + -n + "Z"
                        },
                        "triangle-up": function(t) {
                            var e = Math.sqrt(t / ku),
                                n = e * ku / 2;
                            return "M0," + -n + "L" + e + "," + n + " " + -e + "," + n + "Z"
                        }
                    });
                    o.svg.symbolTypes = Cu.keys();
                    var ku = Math.sqrt(3),
                        Du = Math.tan(30 * Ot);
                    G.transition = function(t) {
                        for (var e, n, r = ju || ++zu, i = Fu(t), o = [], a = Pu || {
                                time: Date.now(),
                                ease: vo,
                                delay: 0,
                                duration: 250
                            }, u = -1, s = this.length; ++u < s;) {
                            o.push(e = []);
                            for (var l = this[u], c = -1, f = l.length; ++c < f;)(n = l[c]) && Uu(n, c, i, r, a), e.push(n)
                        }
                        return qu(o, i, r)
                    }, G.interrupt = function(t) {
                        return this.each(null == t ? Lu : Ou(Fu(t)))
                    };
                    var Lu = Ou(Fu());

                    function Ou(t) {
                        return function() {
                            var e, n;
                            (e = this[t]) && (n = e[e.active]) && (--e.count ? delete e[e.active] : delete this[t], e.active += .5, n.event && n.event.interrupt.call(this, this.__data__, n.index))
                        }
                    }

                    function qu(t, e, n) {
                        return $(t, Ru), t.namespace = e, t.id = n, t
                    }
                    var ju, Pu, Ru = [],
                        zu = 0;

                    function Hu(t, e, n, r) {
                        var i = t.id,
                            o = t.namespace;
                        return ht(t, "function" == typeof n ? function(t, a, u) {
                            t[o][i].tween.set(e, r(n.call(t, t.__data__, a, u)))
                        } : (n = r(n), function(t) {
                            t[o][i].tween.set(e, n)
                        }))
                    }

                    function Iu(t) {
                        return null == t && (t = ""),
                            function() {
                                this.textContent = t
                            }
                    }

                    function Fu(t) {
                        return null == t ? "__transition__" : "__transition_" + t + "__"
                    }

                    function Uu(t, e, n, r, i) {
                        var a = t[n] || (t[n] = {
                                active: 0,
                                count: 0
                            }),
                            u = a[r];
                        if (!u) {
                            var s = i.time;
                            u = a[r] = {
                                tween: new A,
                                time: s,
                                delay: i.delay,
                                duration: i.duration,
                                ease: i.ease,
                                index: e
                            }, i = null, ++a.count, o.timer((function(i) {
                                var l, c, f = u.delay,
                                    p = Te,
                                    h = [];
                                if (p.t = f + s, f <= i) return d(i - f);

                                function d(n) {
                                    if (a.active > r) return v();
                                    var i = a[a.active];
                                    i && (--a.count, delete a[a.active], i.event && i.event.interrupt.call(t, t.__data__, i.index)), a.active = r, u.event && u.event.start.call(t, t.__data__, e), u.tween.forEach((function(n, r) {
                                        (r = r.call(t, t.__data__, e)) && h.push(r)
                                    })), c = u.ease, l = u.duration, o.timer((function() {
                                        return p.c = g(n || 1) ? Qn : g, 1
                                    }), 0, s)
                                }

                                function g(n) {
                                    if (a.active !== r) return 1;
                                    for (var i = n / l, o = c(i), s = h.length; s > 0;) h[--s].call(t, o);
                                    return i >= 1 ? (u.event && u.event.end.call(t, t.__data__, e), v()) : void 0
                                }

                                function v() {
                                    return --a.count ? delete a[r] : delete t[n], 1
                                }
                                p.c = d
                            }), 0, s)
                        }
                    }
                    Ru.call = G.call, Ru.empty = G.empty, Ru.node = G.node, Ru.size = G.size, o.transition = function(t, e) {
                        return t && t.transition ? ju ? t.transition(e) : t : o.selection().transition(t)
                    }, o.transition.prototype = Ru, Ru.select = function(t) {
                        var e, n, r, i = this.id,
                            o = this.namespace,
                            a = [];
                        t = K(t);
                        for (var u = -1, s = this.length; ++u < s;) {
                            a.push(e = []);
                            for (var l = this[u], c = -1, f = l.length; ++c < f;)(r = l[c]) && (n = t.call(r, r.__data__, c, u)) ? ("__data__" in r && (n.__data__ = r.__data__), Uu(n, c, o, i, r[o][i]), e.push(n)) : e.push(null)
                        }
                        return qu(a, o, i)
                    }, Ru.selectAll = function(t) {
                        var e, n, r, i, o, a = this.id,
                            u = this.namespace,
                            s = [];
                        t = Q(t);
                        for (var l = -1, c = this.length; ++l < c;)
                            for (var f = this[l], p = -1, h = f.length; ++p < h;)
                                if (r = f[p]) {
                                    o = r[u][a], n = t.call(r, r.__data__, p, l), s.push(e = []);
                                    for (var d = -1, g = n.length; ++d < g;)(i = n[d]) && Uu(i, d, u, a, o), e.push(i)
                                } return qu(s, u, a)
                    }, Ru.filter = function(t) {
                        var e, n, r = [];
                        "function" != typeof t && (t = ft(t));
                        for (var i = 0, o = this.length; i < o; i++) {
                            r.push(e = []);
                            for (var a, u = 0, s = (a = this[i]).length; u < s; u++)(n = a[u]) && t.call(n, n.__data__, u, i) && e.push(n)
                        }
                        return qu(r, this.namespace, this.id)
                    }, Ru.tween = function(t, e) {
                        var n = this.id,
                            r = this.namespace;
                        return arguments.length < 2 ? this.node()[r][n].tween.get(t) : ht(this, null == e ? function(e) {
                            e[r][n].tween.remove(t)
                        } : function(i) {
                            i[r][n].tween.set(t, e)
                        })
                    }, Ru.attr = function(t, e) {
                        if (arguments.length < 2) {
                            for (e in t) this.attr(e, t[e]);
                            return this
                        }
                        var n = "transform" == t ? To : oo,
                            r = o.ns.qualify(t);

                        function i() {
                            this.removeAttribute(r)
                        }

                        function a() {
                            this.removeAttributeNS(r.space, r.local)
                        }

                        function u(t) {
                            return null == t ? i : (t += "", function() {
                                var e, i = this.getAttribute(r);
                                return i !== t && (e = n(i, t), function(t) {
                                    this.setAttribute(r, e(t))
                                })
                            })
                        }

                        function s(t) {
                            return null == t ? a : (t += "", function() {
                                var e, i = this.getAttributeNS(r.space, r.local);
                                return i !== t && (e = n(i, t), function(t) {
                                    this.setAttributeNS(r.space, r.local, e(t))
                                })
                            })
                        }
                        return Hu(this, "attr." + t, e, r.local ? s : u)
                    }, Ru.attrTween = function(t, e) {
                        var n = o.ns.qualify(t);
                        return this.tween("attr." + t, n.local ? function(t, r) {
                            var i = e.call(this, t, r, this.getAttributeNS(n.space, n.local));
                            return i && function(t) {
                                this.setAttributeNS(n.space, n.local, i(t))
                            }
                        } : function(t, r) {
                            var i = e.call(this, t, r, this.getAttribute(n));
                            return i && function(t) {
                                this.setAttribute(n, i(t))
                            }
                        })
                    }, Ru.style = function(t, e, n) {
                        var r = arguments.length;
                        if (r < 3) {
                            if ("string" != typeof t) {
                                for (n in r < 2 && (e = ""), t) this.style(n, t[n], e);
                                return this
                            }
                            n = ""
                        }

                        function i() {
                            this.style.removeProperty(t)
                        }

                        function o(e) {
                            return null == e ? i : (e += "", function() {
                                var r, i = c(this).getComputedStyle(this, null).getPropertyValue(t);
                                return i !== e && (r = oo(i, e), function(e) {
                                    this.style.setProperty(t, r(e), n)
                                })
                            })
                        }
                        return Hu(this, "style." + t, e, o)
                    }, Ru.styleTween = function(t, e, n) {
                        function r(r, i) {
                            var o = e.call(this, r, i, c(this).getComputedStyle(this, null).getPropertyValue(t));
                            return o && function(e) {
                                this.style.setProperty(t, o(e), n)
                            }
                        }
                        return arguments.length < 3 && (n = ""), this.tween("style." + t, r)
                    }, Ru.text = function(t) {
                        return Hu(this, "text", t, Iu)
                    }, Ru.remove = function() {
                        var t = this.namespace;
                        return this.each("end.transition", (function() {
                            var e;
                            this[t].count < 2 && (e = this.parentNode) && e.removeChild(this)
                        }))
                    }, Ru.ease = function(t) {
                        var e = this.id,
                            n = this.namespace;
                        return arguments.length < 1 ? this.node()[n][e].ease : ("function" != typeof t && (t = o.ease.apply(o, arguments)), ht(this, (function(r) {
                            r[n][e].ease = t
                        })))
                    }, Ru.delay = function(t) {
                        var e = this.id,
                            n = this.namespace;
                        return arguments.length < 1 ? this.node()[n][e].delay : ht(this, "function" == typeof t ? function(r, i, o) {
                            r[n][e].delay = +t.call(r, r.__data__, i, o)
                        } : (t = +t, function(r) {
                            r[n][e].delay = t
                        }))
                    }, Ru.duration = function(t) {
                        var e = this.id,
                            n = this.namespace;
                        return arguments.length < 1 ? this.node()[n][e].duration : ht(this, "function" == typeof t ? function(r, i, o) {
                            r[n][e].duration = Math.max(1, t.call(r, r.__data__, i, o))
                        } : (t = Math.max(1, t), function(r) {
                            r[n][e].duration = t
                        }))
                    }, Ru.each = function(t, e) {
                        var n = this.id,
                            r = this.namespace;
                        if (arguments.length < 2) {
                            var i = Pu,
                                a = ju;
                            try {
                                ju = n, ht(this, (function(e, i, o) {
                                    Pu = e[r][n], t.call(e, e.__data__, i, o)
                                }))
                            } finally {
                                Pu = i, ju = a
                            }
                        } else ht(this, (function(i) {
                            var a = i[r][n];
                            (a.event || (a.event = o.dispatch("start", "end", "interrupt"))).on(t, e)
                        }));
                        return this
                    }, Ru.transition = function() {
                        for (var t, e, n, r = this.id, i = ++zu, o = this.namespace, a = [], u = 0, s = this.length; u < s; u++) {
                            a.push(t = []);
                            for (var l, c = 0, f = (l = this[u]).length; c < f; c++)(e = l[c]) && Uu(e, c, o, i, {
                                time: (n = e[o][r]).time,
                                ease: n.ease,
                                delay: n.delay + n.duration,
                                duration: n.duration
                            }), t.push(e)
                        }
                        return qu(a, o, i)
                    }, o.svg.axis = function() {
                        var t, e = o.scale.linear(),
                            n = Bu,
                            r = 6,
                            i = 6,
                            a = 3,
                            u = [10],
                            s = null;

                        function l(l) {
                            l.each((function() {
                                var l, c = o.select(this),
                                    f = this.__chart__ || e,
                                    p = this.__chart__ = e.copy(),
                                    h = null == s ? p.ticks ? p.ticks.apply(p, u) : p.domain() : s,
                                    d = null == t ? p.tickFormat ? p.tickFormat.apply(p, u) : q : t,
                                    g = c.selectAll(".tick").data(h, p),
                                    v = g.enter().insert("g", ".domain").attr("class", "tick").style("opacity", St),
                                    y = o.transition(g.exit()).style("opacity", St).remove(),
                                    m = o.transition(g.order()).style("opacity", 1),
                                    x = Math.max(r, 0) + a,
                                    b = Aa(p),
                                    w = c.selectAll(".domain").data([0]),
                                    M = (w.enter().append("path").attr("class", "domain"), o.transition(w));
                                v.append("line"), v.append("text");
                                var E, _, A, T, S = v.select("line"),
                                    N = m.select("line"),
                                    C = g.select("text").text(d),
                                    k = v.select("text"),
                                    D = m.select("text"),
                                    L = "top" === n || "left" === n ? -1 : 1;
                                if ("bottom" === n || "top" === n ? (l = $u, E = "x", A = "y", _ = "x2", T = "y2", C.attr("dy", L < 0 ? "0em" : ".71em").style("text-anchor", "middle"), M.attr("d", "M" + b[0] + "," + L * i + "V0H" + b[1] + "V" + L * i)) : (l = Vu, E = "y", A = "x", _ = "y2", T = "x2", C.attr("dy", ".32em").style("text-anchor", L < 0 ? "end" : "start"), M.attr("d", "M" + L * i + "," + b[0] + "H0V" + b[1] + "H" + L * i)), S.attr(T, L * r), k.attr(A, L * x), N.attr(_, 0).attr(T, L * r), D.attr(E, 0).attr(A, L * x), p.rangeBand) {
                                    var O = p,
                                        j = O.rangeBand() / 2;
                                    f = p = function(t) {
                                        return O(t) + j
                                    }
                                } else f.rangeBand ? f = p : y.call(l, p, f);
                                v.call(l, f, p), m.call(l, p, p)
                            }))
                        }
                        return l.scale = function(t) {
                            return arguments.length ? (e = t, l) : e
                        }, l.orient = function(t) {
                            return arguments.length ? (n = t in Wu ? t + "" : Bu, l) : n
                        }, l.ticks = function() {
                            return arguments.length ? (u = arguments, l) : u
                        }, l.tickValues = function(t) {
                            return arguments.length ? (s = t, l) : s
                        }, l.tickFormat = function(e) {
                            return arguments.length ? (t = e, l) : t
                        }, l.tickSize = function(t) {
                            var e = arguments.length;
                            return e ? (r = +t, i = +arguments[e - 1], l) : r
                        }, l.innerTickSize = function(t) {
                            return arguments.length ? (r = +t, l) : r
                        }, l.outerTickSize = function(t) {
                            return arguments.length ? (i = +t, l) : i
                        }, l.tickPadding = function(t) {
                            return arguments.length ? (a = +t, l) : a
                        }, l.tickSubdivide = function() {
                            return arguments.length && l
                        }, l
                    };
                    var Bu = "bottom",
                        Wu = {
                            top: 1,
                            right: 1,
                            bottom: 1,
                            left: 1
                        };

                    function $u(t, e, n) {
                        t.attr("transform", (function(t) {
                            var r = e(t);
                            return "translate(" + (isFinite(r) ? r : n(t)) + ",0)"
                        }))
                    }

                    function Vu(t, e, n) {
                        t.attr("transform", (function(t) {
                            var r = e(t);
                            return "translate(0," + (isFinite(r) ? r : n(t)) + ")"
                        }))
                    }
                    o.svg.brush = function() {
                        var t, e, n = B(p, "brushstart", "brush", "brushend"),
                            r = null,
                            i = null,
                            a = [0, 0],
                            u = [0, 0],
                            s = !0,
                            l = !0,
                            f = Yu[0];

                        function p(t) {
                            t.each((function() {
                                var t = o.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", v).on("touchstart.brush", v),
                                    e = t.selectAll(".background").data([0]);
                                e.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), t.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                                var n = t.selectAll(".resize").data(f, q);
                                n.exit().remove(), n.enter().append("g").attr("class", (function(t) {
                                    return "resize " + t
                                })).style("cursor", (function(t) {
                                    return Xu[t]
                                })).append("rect").attr("x", (function(t) {
                                    return /[ew]$/.test(t) ? -3 : null
                                })).attr("y", (function(t) {
                                    return /^[ns]/.test(t) ? -3 : null
                                })).attr("width", 6).attr("height", 6).style("visibility", "hidden"), n.style("display", p.empty() ? "none" : null);
                                var a, u = o.transition(t),
                                    s = o.transition(e);
                                r && (a = Aa(r), s.attr("x", a[0]).attr("width", a[1] - a[0]), d(u)), i && (a = Aa(i), s.attr("y", a[0]).attr("height", a[1] - a[0]), g(u)), h(u)
                            }))
                        }

                        function h(t) {
                            t.selectAll(".resize").attr("transform", (function(t) {
                                return "translate(" + a[+/e$/.test(t)] + "," + u[+/^s/.test(t)] + ")"
                            }))
                        }

                        function d(t) {
                            t.select(".extent").attr("x", a[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", a[1] - a[0])
                        }

                        function g(t) {
                            t.select(".extent").attr("y", u[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", u[1] - u[0])
                        }

                        function v() {
                            var f, v, y = this,
                                m = o.select(o.event.target),
                                x = n.of(y, arguments),
                                b = o.select(y),
                                w = m.datum(),
                                M = !/^(n|s)$/.test(w) && r,
                                E = !/^(e|w)$/.test(w) && i,
                                _ = m.classed("extent"),
                                A = Et(y),
                                T = o.mouse(y),
                                S = o.select(c(y)).on("keydown.brush", k).on("keyup.brush", D);
                            if (o.event.changedTouches ? S.on("touchmove.brush", L).on("touchend.brush", q) : S.on("mousemove.brush", L).on("mouseup.brush", q), b.interrupt().selectAll("*").interrupt(), _) T[0] = a[0] - T[0], T[1] = u[0] - T[1];
                            else if (w) {
                                var N = +/w$/.test(w),
                                    C = +/^n/.test(w);
                                v = [a[1 - N] - T[0], u[1 - C] - T[1]], T[0] = a[N], T[1] = u[C]
                            } else o.event.altKey && (f = T.slice());

                            function k() {
                                32 == o.event.keyCode && (_ || (f = null, T[0] -= a[1], T[1] -= u[1], _ = 2), F())
                            }

                            function D() {
                                32 == o.event.keyCode && 2 == _ && (T[0] += a[1], T[1] += u[1], _ = 0, F())
                            }

                            function L() {
                                var t = o.mouse(y),
                                    e = !1;
                                v && (t[0] += v[0], t[1] += v[1]), _ || (o.event.altKey ? (f || (f = [(a[0] + a[1]) / 2, (u[0] + u[1]) / 2]), T[0] = a[+(t[0] < f[0])], T[1] = u[+(t[1] < f[1])]) : f = null), M && O(t, r, 0) && (d(b), e = !0), E && O(t, i, 1) && (g(b), e = !0), e && (h(b), x({
                                    type: "brush",
                                    mode: _ ? "move" : "resize"
                                }))
                            }

                            function O(n, r, i) {
                                var o, c, p = Aa(r),
                                    h = p[0],
                                    d = p[1],
                                    g = T[i],
                                    v = i ? u : a,
                                    y = v[1] - v[0];
                                if (_ && (h -= g, d -= y + g), o = (i ? l : s) ? Math.max(h, Math.min(d, n[i])) : n[i], _ ? c = (o += g) + y : (f && (g = Math.max(h, Math.min(d, 2 * f[i] - o))), g < o ? (c = o, o = g) : c = g), v[0] != o || v[1] != c) return i ? e = null : t = null, v[0] = o, v[1] = c, !0
                            }

                            function q() {
                                L(), b.style("pointer-events", "all").selectAll(".resize").style("display", p.empty() ? "none" : null), o.select("body").style("cursor", null), S.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), A(), x({
                                    type: "brushend"
                                })
                            }
                            b.style("pointer-events", "none").selectAll(".resize").style("display", null), o.select("body").style("cursor", m.style("cursor")), x({
                                type: "brushstart"
                            }), L()
                        }
                        return p.event = function(r) {
                            r.each((function() {
                                var r = n.of(this, arguments),
                                    i = {
                                        x: a,
                                        y: u,
                                        i: t,
                                        j: e
                                    },
                                    s = this.__chart__ || i;
                                this.__chart__ = i, ju ? o.select(this).transition().each("start.brush", (function() {
                                    t = s.i, e = s.j, a = s.x, u = s.y, r({
                                        type: "brushstart"
                                    })
                                })).tween("brush:brush", (function() {
                                    var n = ao(a, i.x),
                                        o = ao(u, i.y);
                                    return t = e = null,
                                        function(t) {
                                            a = i.x = n(t), u = i.y = o(t), r({
                                                type: "brush",
                                                mode: "resize"
                                            })
                                        }
                                })).each("end.brush", (function() {
                                    t = i.i, e = i.j, r({
                                        type: "brush",
                                        mode: "resize"
                                    }), r({
                                        type: "brushend"
                                    })
                                })) : (r({
                                    type: "brushstart"
                                }), r({
                                    type: "brush",
                                    mode: "resize"
                                }), r({
                                    type: "brushend"
                                }))
                            }))
                        }, p.x = function(t) {
                            return arguments.length ? (f = Yu[!(r = t) << 1 | !i], p) : r
                        }, p.y = function(t) {
                            return arguments.length ? (f = Yu[!r << 1 | !(i = t)], p) : i
                        }, p.clamp = function(t) {
                            return arguments.length ? (r && i ? (s = !!t[0], l = !!t[1]) : r ? s = !!t : i && (l = !!t), p) : r && i ? [s, l] : r ? s : i ? l : null
                        }, p.extent = function(n) {
                            var o, s, l, c, f;
                            return arguments.length ? (r && (o = n[0], s = n[1], i && (o = o[0], s = s[0]), t = [o, s], r.invert && (o = r(o), s = r(s)), s < o && (f = o, o = s, s = f), o == a[0] && s == a[1] || (a = [o, s])), i && (l = n[0], c = n[1], r && (l = l[1], c = c[1]), e = [l, c], i.invert && (l = i(l), c = i(c)), c < l && (f = l, l = c, c = f), l == u[0] && c == u[1] || (u = [l, c])), p) : (r && (t ? (o = t[0], s = t[1]) : (o = a[0], s = a[1], r.invert && (o = r.invert(o), s = r.invert(s)), s < o && (f = o, o = s, s = f))), i && (e ? (l = e[0], c = e[1]) : (l = u[0], c = u[1], i.invert && (l = i.invert(l), c = i.invert(c)), c < l && (f = l, l = c, c = f))), r && i ? [
                                [o, l],
                                [s, c]
                            ] : r ? [o, s] : i && [l, c])
                        }, p.clear = function() {
                            return p.empty() || (a = [0, 0], u = [0, 0], t = e = null), p
                        }, p.empty = function() {
                            return !!r && a[0] == a[1] || !!i && u[0] == u[1]
                        }, o.rebind(p, n, "on")
                    };
                    var Xu = {
                            n: "ns-resize",
                            e: "ew-resize",
                            s: "ns-resize",
                            w: "ew-resize",
                            nw: "nwse-resize",
                            ne: "nesw-resize",
                            se: "nwse-resize",
                            sw: "nesw-resize"
                        },
                        Yu = [
                            ["n", "e", "s", "w", "nw", "ne", "se", "sw"],
                            ["e", "w"],
                            ["n", "s"],
                            []
                        ],
                        Zu = Re.format = hn.timeFormat,
                        Gu = Zu.utc,
                        Ku = Gu("%Y-%m-%dT%H:%M:%S.%LZ");

                    function Qu(t) {
                        return t.toISOString()
                    }

                    function Ju(t, e, n) {
                        function r(e) {
                            return t(e)
                        }

                        function i(t, n) {
                            var r = (t[1] - t[0]) / n,
                                i = o.bisect(es, r);
                            return i == es.length ? [e.year, Oa(t.map((function(t) {
                                return t / 31536e6
                            })), n)[2]] : i ? e[r / es[i - 1] < es[i] / r ? i - 1 : i] : [is, Oa(t, n)[2]]
                        }
                        return r.invert = function(e) {
                            return ts(t.invert(e))
                        }, r.domain = function(e) {
                            return arguments.length ? (t.domain(e), r) : t.domain().map(ts)
                        }, r.nice = function(t, e) {
                            var n = r.domain(),
                                o = _a(n),
                                a = null == t ? i(o, 10) : "number" == typeof t && i(o, t);

                            function u(n) {
                                return !isNaN(n) && !t.range(n, ts(+n + 1), e).length
                            }
                            return a && (t = a[0], e = a[1]), r.domain(Sa(n, e > 1 ? {
                                floor: function(e) {
                                    for (; u(e = t.floor(e));) e = ts(e - 1);
                                    return e
                                },
                                ceil: function(e) {
                                    for (; u(e = t.ceil(e));) e = ts(+e + 1);
                                    return e
                                }
                            } : t))
                        }, r.ticks = function(t, e) {
                            var n = _a(r.domain()),
                                o = null == t ? i(n, 10) : "number" == typeof t ? i(n, t) : !t.range && [{
                                    range: t
                                }, e];
                            return o && (t = o[0], e = o[1]), t.range(n[0], ts(+n[1] + 1), e < 1 ? 1 : e)
                        }, r.tickFormat = function() {
                            return n
                        }, r.copy = function() {
                            return Ju(t.copy(), e, n)
                        }, Da(r, t)
                    }

                    function ts(t) {
                        return new Date(t)
                    }
                    Zu.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? Qu : Ku, Qu.parse = function(t) {
                        var e = new Date(t);
                        return isNaN(e) ? null : e
                    }, Qu.toString = Ku.toString, Re.second = Fe((function(t) {
                        return new ze(1e3 * Math.floor(t / 1e3))
                    }), (function(t, e) {
                        t.setTime(t.getTime() + 1e3 * Math.floor(e))
                    }), (function(t) {
                        return t.getSeconds()
                    })), Re.seconds = Re.second.range, Re.seconds.utc = Re.second.utc.range, Re.minute = Fe((function(t) {
                        return new ze(6e4 * Math.floor(t / 6e4))
                    }), (function(t, e) {
                        t.setTime(t.getTime() + 6e4 * Math.floor(e))
                    }), (function(t) {
                        return t.getMinutes()
                    })), Re.minutes = Re.minute.range, Re.minutes.utc = Re.minute.utc.range, Re.hour = Fe((function(t) {
                        var e = t.getTimezoneOffset() / 60;
                        return new ze(36e5 * (Math.floor(t / 36e5 - e) + e))
                    }), (function(t, e) {
                        t.setTime(t.getTime() + 36e5 * Math.floor(e))
                    }), (function(t) {
                        return t.getHours()
                    })), Re.hours = Re.hour.range, Re.hours.utc = Re.hour.utc.range, Re.month = Fe((function(t) {
                        return (t = Re.day(t)).setDate(1), t
                    }), (function(t, e) {
                        t.setMonth(t.getMonth() + e)
                    }), (function(t) {
                        return t.getMonth()
                    })), Re.months = Re.month.range, Re.months.utc = Re.month.utc.range;
                    var es = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                        ns = [
                            [Re.second, 1],
                            [Re.second, 5],
                            [Re.second, 15],
                            [Re.second, 30],
                            [Re.minute, 1],
                            [Re.minute, 5],
                            [Re.minute, 15],
                            [Re.minute, 30],
                            [Re.hour, 1],
                            [Re.hour, 3],
                            [Re.hour, 6],
                            [Re.hour, 12],
                            [Re.day, 1],
                            [Re.day, 2],
                            [Re.week, 1],
                            [Re.month, 1],
                            [Re.month, 3],
                            [Re.year, 1]
                        ],
                        rs = Zu.multi([
                            [".%L", function(t) {
                                return t.getMilliseconds()
                            }],
                            [":%S", function(t) {
                                return t.getSeconds()
                            }],
                            ["%I:%M", function(t) {
                                return t.getMinutes()
                            }],
                            ["%I %p", function(t) {
                                return t.getHours()
                            }],
                            ["%a %d", function(t) {
                                return t.getDay() && 1 != t.getDate()
                            }],
                            ["%b %d", function(t) {
                                return 1 != t.getDate()
                            }],
                            ["%B", function(t) {
                                return t.getMonth()
                            }],
                            ["%Y", Qn]
                        ]),
                        is = {
                            range: function(t, e, n) {
                                return o.range(Math.ceil(t / n) * n, +e, n).map(ts)
                            },
                            floor: q,
                            ceil: q
                        };
                    ns.year = Re.year, Re.scale = function() {
                        return Ju(o.scale.linear(), ns, rs)
                    };
                    var os = ns.map((function(t) {
                            return [t[0].utc, t[1]]
                        })),
                        as = Gu.multi([
                            [".%L", function(t) {
                                return t.getUTCMilliseconds()
                            }],
                            [":%S", function(t) {
                                return t.getUTCSeconds()
                            }],
                            ["%I:%M", function(t) {
                                return t.getUTCMinutes()
                            }],
                            ["%I %p", function(t) {
                                return t.getUTCHours()
                            }],
                            ["%a %d", function(t) {
                                return t.getUTCDay() && 1 != t.getUTCDate()
                            }],
                            ["%b %d", function(t) {
                                return 1 != t.getUTCDate()
                            }],
                            ["%B", function(t) {
                                return t.getUTCMonth()
                            }],
                            ["%Y", Qn]
                        ]);

                    function us(t) {
                        return JSON.parse(t.responseText)
                    }

                    function ss(t) {
                        var e = s.createRange();
                        return e.selectNode(s.body), e.createContextualFragment(t.responseText)
                    }
                    os.year = Re.year.utc, Re.scale.utc = function() {
                        return Ju(o.scale.linear(), os, as)
                    }, o.text = be((function(t) {
                        return t.responseText
                    })), o.json = function(t, e) {
                        return we(t, "application/json", us, e)
                    }, o.html = function(t, e) {
                        return we(t, "text/html", ss, e)
                    }, o.xml = be((function(t) {
                        return t.responseXML
                    })), void 0 === (i = "function" == typeof(r = o) ? r.call(e, n, e, t) : r) || (t.exports = i), this.d3 = o
                }()
            },
            662: (t, e, n) => {
                var r = {};
                "d3" in n.g && (r.d3 = n.g.d3), t.exports = n(78), "d3" in r ? n.g.d3 = r.d3 : delete n.g.d3
            },
            755: function(t, e) {
                var n;
                /*!
                 * jQuery JavaScript Library v3.6.0
                 * https://jquery.com/
                 *
                 * Includes Sizzle.js
                 * https://sizzlejs.com/
                 *
                 * Copyright OpenJS Foundation and other contributors
                 * Released under the MIT license
                 * https://jquery.org/license
                 *
                 * Date: 2021-03-02T17:08Z
                 */
                ! function(e, n) {
                    "use strict";
                    "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function(t) {
                        if (!t.document) throw new Error("jQuery requires a window with a document");
                        return n(t)
                    } : n(e)
                }("undefined" != typeof window ? window : this, (function(r, i) {
                    "use strict";
                    var o = [],
                        a = Object.getPrototypeOf,
                        u = o.slice,
                        s = o.flat ? function(t) {
                            return o.flat.call(t)
                        } : function(t) {
                            return o.concat.apply([], t)
                        },
                        l = o.push,
                        c = o.indexOf,
                        f = {},
                        p = f.toString,
                        h = f.hasOwnProperty,
                        d = h.toString,
                        g = d.call(Object),
                        v = {},
                        y = function(t) {
                            return "function" == typeof t && "number" != typeof t.nodeType && "function" != typeof t.item
                        },
                        m = function(t) {
                            return null != t && t === t.window
                        },
                        x = r.document,
                        b = {
                            type: !0,
                            src: !0,
                            nonce: !0,
                            noModule: !0
                        };

                    function w(t, e, n) {
                        var r, i, o = (n = n || x).createElement("script");
                        if (o.text = t, e)
                            for (r in b)(i = e[r] || e.getAttribute && e.getAttribute(r)) && o.setAttribute(r, i);
                        n.head.appendChild(o).parentNode.removeChild(o)
                    }

                    function M(t) {
                        return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? f[p.call(t)] || "object" : typeof t
                    }
                    var E = "3.6.0",
                        _ = function(t, e) {
                            return new _.fn.init(t, e)
                        };

                    function A(t) {
                        var e = !!t && "length" in t && t.length,
                            n = M(t);
                        return !y(t) && !m(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
                    }
                    _.fn = _.prototype = {
                        jquery: E,
                        constructor: _,
                        length: 0,
                        toArray: function() {
                            return u.call(this)
                        },
                        get: function(t) {
                            return null == t ? u.call(this) : t < 0 ? this[t + this.length] : this[t]
                        },
                        pushStack: function(t) {
                            var e = _.merge(this.constructor(), t);
                            return e.prevObject = this, e
                        },
                        each: function(t) {
                            return _.each(this, t)
                        },
                        map: function(t) {
                            return this.pushStack(_.map(this, (function(e, n) {
                                return t.call(e, n, e)
                            })))
                        },
                        slice: function() {
                            return this.pushStack(u.apply(this, arguments))
                        },
                        first: function() {
                            return this.eq(0)
                        },
                        last: function() {
                            return this.eq(-1)
                        },
                        even: function() {
                            return this.pushStack(_.grep(this, (function(t, e) {
                                return (e + 1) % 2
                            })))
                        },
                        odd: function() {
                            return this.pushStack(_.grep(this, (function(t, e) {
                                return e % 2
                            })))
                        },
                        eq: function(t) {
                            var e = this.length,
                                n = +t + (t < 0 ? e : 0);
                            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
                        },
                        end: function() {
                            return this.prevObject || this.constructor()
                        },
                        push: l,
                        sort: o.sort,
                        splice: o.splice
                    }, _.extend = _.fn.extend = function() {
                        var t, e, n, r, i, o, a = arguments[0] || {},
                            u = 1,
                            s = arguments.length,
                            l = !1;
                        for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || y(a) || (a = {}), u === s && (a = this, u--); u < s; u++)
                            if (null != (t = arguments[u]))
                                for (e in t) r = t[e], "__proto__" !== e && a !== r && (l && r && (_.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[e], o = i && !Array.isArray(n) ? [] : i || _.isPlainObject(n) ? n : {}, i = !1, a[e] = _.extend(l, o, r)) : void 0 !== r && (a[e] = r));
                        return a
                    }, _.extend({
                        expando: "jQuery" + (E + Math.random()).replace(/\D/g, ""),
                        isReady: !0,
                        error: function(t) {
                            throw new Error(t)
                        },
                        noop: function() {},
                        isPlainObject: function(t) {
                            var e, n;
                            return !(!t || "[object Object]" !== p.call(t)) && (!(e = a(t)) || "function" == typeof(n = h.call(e, "constructor") && e.constructor) && d.call(n) === g)
                        },
                        isEmptyObject: function(t) {
                            var e;
                            for (e in t) return !1;
                            return !0
                        },
                        globalEval: function(t, e, n) {
                            w(t, {
                                nonce: e && e.nonce
                            }, n)
                        },
                        each: function(t, e) {
                            var n, r = 0;
                            if (A(t))
                                for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                            else
                                for (r in t)
                                    if (!1 === e.call(t[r], r, t[r])) break;
                            return t
                        },
                        makeArray: function(t, e) {
                            var n = e || [];
                            return null != t && (A(Object(t)) ? _.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
                        },
                        inArray: function(t, e, n) {
                            return null == e ? -1 : c.call(e, t, n)
                        },
                        merge: function(t, e) {
                            for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r];
                            return t.length = i, t
                        },
                        grep: function(t, e, n) {
                            for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) !== a && r.push(t[i]);
                            return r
                        },
                        map: function(t, e, n) {
                            var r, i, o = 0,
                                a = [];
                            if (A(t))
                                for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
                            else
                                for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                            return s(a)
                        },
                        guid: 1,
                        support: v
                    }), "function" == typeof Symbol && (_.fn[Symbol.iterator] = o[Symbol.iterator]), _.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(t, e) {
                        f["[object " + e + "]"] = e.toLowerCase()
                    }));
                    var T =
                        /*!
                         * Sizzle CSS Selector Engine v2.3.6
                         * https://sizzlejs.com/
                         *
                         * Copyright JS Foundation and other contributors
                         * Released under the MIT license
                         * https://js.foundation/
                         *
                         * Date: 2021-02-16
                         */
                        function(t) {
                            var e, n, r, i, o, a, u, s, l, c, f, p, h, d, g, v, y, m, x, b = "sizzle" + 1 * new Date,
                                w = t.document,
                                M = 0,
                                E = 0,
                                _ = st(),
                                A = st(),
                                T = st(),
                                S = st(),
                                N = function(t, e) {
                                    return t === e && (f = !0), 0
                                },
                                C = {}.hasOwnProperty,
                                k = [],
                                D = k.pop,
                                L = k.push,
                                O = k.push,
                                q = k.slice,
                                j = function(t, e) {
                                    for (var n = 0, r = t.length; n < r; n++)
                                        if (t[n] === e) return n;
                                    return -1
                                },
                                P = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                                R = "[\\x20\\t\\r\\n\\f]",
                                z = "(?:\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
                                H = "\\[[\\x20\\t\\r\\n\\f]*(" + z + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + R + "*\\]",
                                I = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
                                F = new RegExp(R + "+", "g"),
                                U = new RegExp("^[\\x20\\t\\r\\n\\f]+|((?:^|[^\\\\])(?:\\\\.)*)[\\x20\\t\\r\\n\\f]+$", "g"),
                                B = new RegExp("^[\\x20\\t\\r\\n\\f]*,[\\x20\\t\\r\\n\\f]*"),
                                W = new RegExp("^[\\x20\\t\\r\\n\\f]*([>+~]|[\\x20\\t\\r\\n\\f])[\\x20\\t\\r\\n\\f]*"),
                                $ = new RegExp(R + "|>"),
                                V = new RegExp(I),
                                X = new RegExp("^" + z + "$"),
                                Y = {
                                    ID: new RegExp("^#(" + z + ")"),
                                    CLASS: new RegExp("^\\.(" + z + ")"),
                                    TAG: new RegExp("^(" + z + "|[*])"),
                                    ATTR: new RegExp("^" + H),
                                    PSEUDO: new RegExp("^" + I),
                                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)", "i"),
                                    bool: new RegExp("^(?:" + P + ")$", "i"),
                                    needsContext: new RegExp("^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)", "i")
                                },
                                Z = /HTML$/i,
                                G = /^(?:input|select|textarea|button)$/i,
                                K = /^h\d$/i,
                                Q = /^[^{]+\{\s*\[native \w/,
                                J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                                tt = /[+~]/,
                                et = new RegExp("\\\\[\\da-fA-F]{1,6}[\\x20\\t\\r\\n\\f]?|\\\\([^\\r\\n\\f])", "g"),
                                nt = function(t, e) {
                                    var n = "0x" + t.slice(1) - 65536;
                                    return e || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
                                },
                                rt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                                it = function(t, e) {
                                    return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                                },
                                ot = function() {
                                    p()
                                },
                                at = bt((function(t) {
                                    return !0 === t.disabled && "fieldset" === t.nodeName.toLowerCase()
                                }), {
                                    dir: "parentNode",
                                    next: "legend"
                                });
                            try {
                                O.apply(k = q.call(w.childNodes), w.childNodes), k[w.childNodes.length].nodeType
                            } catch (t) {
                                O = {
                                    apply: k.length ? function(t, e) {
                                        L.apply(t, q.call(e))
                                    } : function(t, e) {
                                        for (var n = t.length, r = 0; t[n++] = e[r++];);
                                        t.length = n - 1
                                    }
                                }
                            }

                            function ut(t, e, r, i) {
                                var o, u, l, c, f, d, y, m = e && e.ownerDocument,
                                    w = e ? e.nodeType : 9;
                                if (r = r || [], "string" != typeof t || !t || 1 !== w && 9 !== w && 11 !== w) return r;
                                if (!i && (p(e), e = e || h, g)) {
                                    if (11 !== w && (f = J.exec(t)))
                                        if (o = f[1]) {
                                            if (9 === w) {
                                                if (!(l = e.getElementById(o))) return r;
                                                if (l.id === o) return r.push(l), r
                                            } else if (m && (l = m.getElementById(o)) && x(e, l) && l.id === o) return r.push(l), r
                                        } else {
                                            if (f[2]) return O.apply(r, e.getElementsByTagName(t)), r;
                                            if ((o = f[3]) && n.getElementsByClassName && e.getElementsByClassName) return O.apply(r, e.getElementsByClassName(o)), r
                                        } if (n.qsa && !S[t + " "] && (!v || !v.test(t)) && (1 !== w || "object" !== e.nodeName.toLowerCase())) {
                                        if (y = t, m = e, 1 === w && ($.test(t) || W.test(t))) {
                                            for ((m = tt.test(t) && yt(e.parentNode) || e) === e && n.scope || ((c = e.getAttribute("id")) ? c = c.replace(rt, it) : e.setAttribute("id", c = b)), u = (d = a(t)).length; u--;) d[u] = (c ? "#" + c : ":scope") + " " + xt(d[u]);
                                            y = d.join(",")
                                        }
                                        try {
                                            return O.apply(r, m.querySelectorAll(y)), r
                                        } catch (e) {
                                            S(t, !0)
                                        } finally {
                                            c === b && e.removeAttribute("id")
                                        }
                                    }
                                }
                                return s(t.replace(U, "$1"), e, r, i)
                            }

                            function st() {
                                var t = [];
                                return function e(n, i) {
                                    return t.push(n + " ") > r.cacheLength && delete e[t.shift()], e[n + " "] = i
                                }
                            }

                            function lt(t) {
                                return t[b] = !0, t
                            }

                            function ct(t) {
                                var e = h.createElement("fieldset");
                                try {
                                    return !!t(e)
                                } catch (t) {
                                    return !1
                                } finally {
                                    e.parentNode && e.parentNode.removeChild(e), e = null
                                }
                            }

                            function ft(t, e) {
                                for (var n = t.split("|"), i = n.length; i--;) r.attrHandle[n[i]] = e
                            }

                            function pt(t, e) {
                                var n = e && t,
                                    r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                                if (r) return r;
                                if (n)
                                    for (; n = n.nextSibling;)
                                        if (n === e) return -1;
                                return t ? 1 : -1
                            }

                            function ht(t) {
                                return function(e) {
                                    return "input" === e.nodeName.toLowerCase() && e.type === t
                                }
                            }

                            function dt(t) {
                                return function(e) {
                                    var n = e.nodeName.toLowerCase();
                                    return ("input" === n || "button" === n) && e.type === t
                                }
                            }

                            function gt(t) {
                                return function(e) {
                                    return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && at(e) === t : e.disabled === t : "label" in e && e.disabled === t
                                }
                            }

                            function vt(t) {
                                return lt((function(e) {
                                    return e = +e, lt((function(n, r) {
                                        for (var i, o = t([], n.length, e), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                                    }))
                                }))
                            }

                            function yt(t) {
                                return t && void 0 !== t.getElementsByTagName && t
                            }
                            for (e in n = ut.support = {}, o = ut.isXML = function(t) {
                                    var e = t && t.namespaceURI,
                                        n = t && (t.ownerDocument || t).documentElement;
                                    return !Z.test(e || n && n.nodeName || "HTML")
                                }, p = ut.setDocument = function(t) {
                                    var e, i, a = t ? t.ownerDocument || t : w;
                                    return a != h && 9 === a.nodeType && a.documentElement ? (d = (h = a).documentElement, g = !o(h), w != h && (i = h.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ot, !1) : i.attachEvent && i.attachEvent("onunload", ot)), n.scope = ct((function(t) {
                                        return d.appendChild(t).appendChild(h.createElement("div")), void 0 !== t.querySelectorAll && !t.querySelectorAll(":scope fieldset div").length
                                    })), n.attributes = ct((function(t) {
                                        return t.className = "i", !t.getAttribute("className")
                                    })), n.getElementsByTagName = ct((function(t) {
                                        return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length
                                    })), n.getElementsByClassName = Q.test(h.getElementsByClassName), n.getById = ct((function(t) {
                                        return d.appendChild(t).id = b, !h.getElementsByName || !h.getElementsByName(b).length
                                    })), n.getById ? (r.filter.ID = function(t) {
                                        var e = t.replace(et, nt);
                                        return function(t) {
                                            return t.getAttribute("id") === e
                                        }
                                    }, r.find.ID = function(t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var n = e.getElementById(t);
                                            return n ? [n] : []
                                        }
                                    }) : (r.filter.ID = function(t) {
                                        var e = t.replace(et, nt);
                                        return function(t) {
                                            var n = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                            return n && n.value === e
                                        }
                                    }, r.find.ID = function(t, e) {
                                        if (void 0 !== e.getElementById && g) {
                                            var n, r, i, o = e.getElementById(t);
                                            if (o) {
                                                if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
                                                for (i = e.getElementsByName(t), r = 0; o = i[r++];)
                                                    if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
                                            }
                                            return []
                                        }
                                    }), r.find.TAG = n.getElementsByTagName ? function(t, e) {
                                        return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : n.qsa ? e.querySelectorAll(t) : void 0
                                    } : function(t, e) {
                                        var n, r = [],
                                            i = 0,
                                            o = e.getElementsByTagName(t);
                                        if ("*" === t) {
                                            for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                                            return r
                                        }
                                        return o
                                    }, r.find.CLASS = n.getElementsByClassName && function(t, e) {
                                        if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t)
                                    }, y = [], v = [], (n.qsa = Q.test(h.querySelectorAll)) && (ct((function(t) {
                                        var e;
                                        d.appendChild(t).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll("[selected]").length || v.push("\\[[\\x20\\t\\r\\n\\f]*(?:value|" + P + ")"), t.querySelectorAll("[id~=" + b + "-]").length || v.push("~="), (e = h.createElement("input")).setAttribute("name", ""), t.appendChild(e), t.querySelectorAll("[name='']").length || v.push("\\[[\\x20\\t\\r\\n\\f]*name[\\x20\\t\\r\\n\\f]*=[\\x20\\t\\r\\n\\f]*(?:''|\"\")"), t.querySelectorAll(":checked").length || v.push(":checked"), t.querySelectorAll("a#" + b + "+*").length || v.push(".#.+[+~]"), t.querySelectorAll("\\\f"), v.push("[\\r\\n\\f]")
                                    })), ct((function(t) {
                                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                        var e = h.createElement("input");
                                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && v.push("name[\\x20\\t\\r\\n\\f]*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), d.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), v.push(",.*:")
                                    }))), (n.matchesSelector = Q.test(m = d.matches || d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ct((function(t) {
                                        n.disconnectedMatch = m.call(t, "*"), m.call(t, "[s!='']:x"), y.push("!=", I)
                                    })), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), e = Q.test(d.compareDocumentPosition), x = e || Q.test(d.contains) ? function(t, e) {
                                        var n = 9 === t.nodeType ? t.documentElement : t,
                                            r = e && e.parentNode;
                                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                                    } : function(t, e) {
                                        if (e)
                                            for (; e = e.parentNode;)
                                                if (e === t) return !0;
                                        return !1
                                    }, N = e ? function(t, e) {
                                        if (t === e) return f = !0, 0;
                                        var r = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                        return r || (1 & (r = (t.ownerDocument || t) == (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !n.sortDetached && e.compareDocumentPosition(t) === r ? t == h || t.ownerDocument == w && x(w, t) ? -1 : e == h || e.ownerDocument == w && x(w, e) ? 1 : c ? j(c, t) - j(c, e) : 0 : 4 & r ? -1 : 1)
                                    } : function(t, e) {
                                        if (t === e) return f = !0, 0;
                                        var n, r = 0,
                                            i = t.parentNode,
                                            o = e.parentNode,
                                            a = [t],
                                            u = [e];
                                        if (!i || !o) return t == h ? -1 : e == h ? 1 : i ? -1 : o ? 1 : c ? j(c, t) - j(c, e) : 0;
                                        if (i === o) return pt(t, e);
                                        for (n = t; n = n.parentNode;) a.unshift(n);
                                        for (n = e; n = n.parentNode;) u.unshift(n);
                                        for (; a[r] === u[r];) r++;
                                        return r ? pt(a[r], u[r]) : a[r] == w ? -1 : u[r] == w ? 1 : 0
                                    }, h) : h
                                }, ut.matches = function(t, e) {
                                    return ut(t, null, null, e)
                                }, ut.matchesSelector = function(t, e) {
                                    if (p(t), n.matchesSelector && g && !S[e + " "] && (!y || !y.test(e)) && (!v || !v.test(e))) try {
                                        var r = m.call(t, e);
                                        if (r || n.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
                                    } catch (t) {
                                        S(e, !0)
                                    }
                                    return ut(e, h, null, [t]).length > 0
                                }, ut.contains = function(t, e) {
                                    return (t.ownerDocument || t) != h && p(t), x(t, e)
                                }, ut.attr = function(t, e) {
                                    (t.ownerDocument || t) != h && p(t);
                                    var i = r.attrHandle[e.toLowerCase()],
                                        o = i && C.call(r.attrHandle, e.toLowerCase()) ? i(t, e, !g) : void 0;
                                    return void 0 !== o ? o : n.attributes || !g ? t.getAttribute(e) : (o = t.getAttributeNode(e)) && o.specified ? o.value : null
                                }, ut.escape = function(t) {
                                    return (t + "").replace(rt, it)
                                }, ut.error = function(t) {
                                    throw new Error("Syntax error, unrecognized expression: " + t)
                                }, ut.uniqueSort = function(t) {
                                    var e, r = [],
                                        i = 0,
                                        o = 0;
                                    if (f = !n.detectDuplicates, c = !n.sortStable && t.slice(0), t.sort(N), f) {
                                        for (; e = t[o++];) e === t[o] && (i = r.push(o));
                                        for (; i--;) t.splice(r[i], 1)
                                    }
                                    return c = null, t
                                }, i = ut.getText = function(t) {
                                    var e, n = "",
                                        r = 0,
                                        o = t.nodeType;
                                    if (o) {
                                        if (1 === o || 9 === o || 11 === o) {
                                            if ("string" == typeof t.textContent) return t.textContent;
                                            for (t = t.firstChild; t; t = t.nextSibling) n += i(t)
                                        } else if (3 === o || 4 === o) return t.nodeValue
                                    } else
                                        for (; e = t[r++];) n += i(e);
                                    return n
                                }, (r = ut.selectors = {
                                    cacheLength: 50,
                                    createPseudo: lt,
                                    match: Y,
                                    attrHandle: {},
                                    find: {},
                                    relative: {
                                        ">": {
                                            dir: "parentNode",
                                            first: !0
                                        },
                                        " ": {
                                            dir: "parentNode"
                                        },
                                        "+": {
                                            dir: "previousSibling",
                                            first: !0
                                        },
                                        "~": {
                                            dir: "previousSibling"
                                        }
                                    },
                                    preFilter: {
                                        ATTR: function(t) {
                                            return t[1] = t[1].replace(et, nt), t[3] = (t[3] || t[4] || t[5] || "").replace(et, nt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                                        },
                                        CHILD: function(t) {
                                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ut.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ut.error(t[0]), t
                                        },
                                        PSEUDO: function(t) {
                                            var e, n = !t[6] && t[2];
                                            return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = a(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                                        }
                                    },
                                    filter: {
                                        TAG: function(t) {
                                            var e = t.replace(et, nt).toLowerCase();
                                            return "*" === t ? function() {
                                                return !0
                                            } : function(t) {
                                                return t.nodeName && t.nodeName.toLowerCase() === e
                                            }
                                        },
                                        CLASS: function(t) {
                                            var e = _[t + " "];
                                            return e || (e = new RegExp("(^|[\\x20\\t\\r\\n\\f])" + t + "(" + R + "|$)")) && _(t, (function(t) {
                                                return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                                            }))
                                        },
                                        ATTR: function(t, e, n) {
                                            return function(r) {
                                                var i = ut.attr(r, t);
                                                return null == i ? "!=" === e : !e || (i += "", "=" === e ? i === n : "!=" === e ? i !== n : "^=" === e ? n && 0 === i.indexOf(n) : "*=" === e ? n && i.indexOf(n) > -1 : "$=" === e ? n && i.slice(-n.length) === n : "~=" === e ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1 : "|=" === e && (i === n || i.slice(0, n.length + 1) === n + "-"))
                                            }
                                        },
                                        CHILD: function(t, e, n, r, i) {
                                            var o = "nth" !== t.slice(0, 3),
                                                a = "last" !== t.slice(-4),
                                                u = "of-type" === e;
                                            return 1 === r && 0 === i ? function(t) {
                                                return !!t.parentNode
                                            } : function(e, n, s) {
                                                var l, c, f, p, h, d, g = o !== a ? "nextSibling" : "previousSibling",
                                                    v = e.parentNode,
                                                    y = u && e.nodeName.toLowerCase(),
                                                    m = !s && !u,
                                                    x = !1;
                                                if (v) {
                                                    if (o) {
                                                        for (; g;) {
                                                            for (p = e; p = p[g];)
                                                                if (u ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                                            d = g = "only" === t && !d && "nextSibling"
                                                        }
                                                        return !0
                                                    }
                                                    if (d = [a ? v.firstChild : v.lastChild], a && m) {
                                                        for (x = (h = (l = (c = (f = (p = v)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] || [])[0] === M && l[1]) && l[2], p = h && v.childNodes[h]; p = ++h && p && p[g] || (x = h = 0) || d.pop();)
                                                            if (1 === p.nodeType && ++x && p === e) {
                                                                c[t] = [M, h, x];
                                                                break
                                                            }
                                                    } else if (m && (x = h = (l = (c = (f = (p = e)[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] || [])[0] === M && l[1]), !1 === x)
                                                        for (;
                                                            (p = ++h && p && p[g] || (x = h = 0) || d.pop()) && ((u ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++x || (m && ((c = (f = p[b] || (p[b] = {}))[p.uniqueID] || (f[p.uniqueID] = {}))[t] = [M, x]), p !== e)););
                                                    return (x -= i) === r || x % r == 0 && x / r >= 0
                                                }
                                            }
                                        },
                                        PSEUDO: function(t, e) {
                                            var n, i = r.pseudos[t] || r.setFilters[t.toLowerCase()] || ut.error("unsupported pseudo: " + t);
                                            return i[b] ? i(e) : i.length > 1 ? (n = [t, t, "", e], r.setFilters.hasOwnProperty(t.toLowerCase()) ? lt((function(t, n) {
                                                for (var r, o = i(t, e), a = o.length; a--;) t[r = j(t, o[a])] = !(n[r] = o[a])
                                            })) : function(t) {
                                                return i(t, 0, n)
                                            }) : i
                                        }
                                    },
                                    pseudos: {
                                        not: lt((function(t) {
                                            var e = [],
                                                n = [],
                                                r = u(t.replace(U, "$1"));
                                            return r[b] ? lt((function(t, e, n, i) {
                                                for (var o, a = r(t, null, i, []), u = t.length; u--;)(o = a[u]) && (t[u] = !(e[u] = o))
                                            })) : function(t, i, o) {
                                                return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                                            }
                                        })),
                                        has: lt((function(t) {
                                            return function(e) {
                                                return ut(t, e).length > 0
                                            }
                                        })),
                                        contains: lt((function(t) {
                                            return t = t.replace(et, nt),
                                                function(e) {
                                                    return (e.textContent || i(e)).indexOf(t) > -1
                                                }
                                        })),
                                        lang: lt((function(t) {
                                            return X.test(t || "") || ut.error("unsupported lang: " + t), t = t.replace(et, nt).toLowerCase(),
                                                function(e) {
                                                    var n;
                                                    do {
                                                        if (n = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                                    return !1
                                                }
                                        })),
                                        target: function(e) {
                                            var n = t.location && t.location.hash;
                                            return n && n.slice(1) === e.id
                                        },
                                        root: function(t) {
                                            return t === d
                                        },
                                        focus: function(t) {
                                            return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                                        },
                                        enabled: gt(!1),
                                        disabled: gt(!0),
                                        checked: function(t) {
                                            var e = t.nodeName.toLowerCase();
                                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                                        },
                                        selected: function(t) {
                                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                                        },
                                        empty: function(t) {
                                            for (t = t.firstChild; t; t = t.nextSibling)
                                                if (t.nodeType < 6) return !1;
                                            return !0
                                        },
                                        parent: function(t) {
                                            return !r.pseudos.empty(t)
                                        },
                                        header: function(t) {
                                            return K.test(t.nodeName)
                                        },
                                        input: function(t) {
                                            return G.test(t.nodeName)
                                        },
                                        button: function(t) {
                                            var e = t.nodeName.toLowerCase();
                                            return "input" === e && "button" === t.type || "button" === e
                                        },
                                        text: function(t) {
                                            var e;
                                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                                        },
                                        first: vt((function() {
                                            return [0]
                                        })),
                                        last: vt((function(t, e) {
                                            return [e - 1]
                                        })),
                                        eq: vt((function(t, e, n) {
                                            return [n < 0 ? n + e : n]
                                        })),
                                        even: vt((function(t, e) {
                                            for (var n = 0; n < e; n += 2) t.push(n);
                                            return t
                                        })),
                                        odd: vt((function(t, e) {
                                            for (var n = 1; n < e; n += 2) t.push(n);
                                            return t
                                        })),
                                        lt: vt((function(t, e, n) {
                                            for (var r = n < 0 ? n + e : n > e ? e : n; --r >= 0;) t.push(r);
                                            return t
                                        })),
                                        gt: vt((function(t, e, n) {
                                            for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r);
                                            return t
                                        }))
                                    }
                                }).pseudos.nth = r.pseudos.eq, {
                                    radio: !0,
                                    checkbox: !0,
                                    file: !0,
                                    password: !0,
                                    image: !0
                                }) r.pseudos[e] = ht(e);
                            for (e in {
                                    submit: !0,
                                    reset: !0
                                }) r.pseudos[e] = dt(e);

                            function mt() {}

                            function xt(t) {
                                for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value;
                                return r
                            }

                            function bt(t, e, n) {
                                var r = e.dir,
                                    i = e.next,
                                    o = i || r,
                                    a = n && "parentNode" === o,
                                    u = E++;
                                return e.first ? function(e, n, i) {
                                    for (; e = e[r];)
                                        if (1 === e.nodeType || a) return t(e, n, i);
                                    return !1
                                } : function(e, n, s) {
                                    var l, c, f, p = [M, u];
                                    if (s) {
                                        for (; e = e[r];)
                                            if ((1 === e.nodeType || a) && t(e, n, s)) return !0
                                    } else
                                        for (; e = e[r];)
                                            if (1 === e.nodeType || a)
                                                if (c = (f = e[b] || (e[b] = {}))[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e;
                                                else {
                                                    if ((l = c[o]) && l[0] === M && l[1] === u) return p[2] = l[2];
                                                    if (c[o] = p, p[2] = t(e, n, s)) return !0
                                                } return !1
                                }
                            }

                            function wt(t) {
                                return t.length > 1 ? function(e, n, r) {
                                    for (var i = t.length; i--;)
                                        if (!t[i](e, n, r)) return !1;
                                    return !0
                                } : t[0]
                            }

                            function Mt(t, e, n, r, i) {
                                for (var o, a = [], u = 0, s = t.length, l = null != e; u < s; u++)(o = t[u]) && (n && !n(o, r, i) || (a.push(o), l && e.push(u)));
                                return a
                            }

                            function Et(t, e, n, r, i, o) {
                                return r && !r[b] && (r = Et(r)), i && !i[b] && (i = Et(i, o)), lt((function(o, a, u, s) {
                                    var l, c, f, p = [],
                                        h = [],
                                        d = a.length,
                                        g = o || function(t, e, n) {
                                            for (var r = 0, i = e.length; r < i; r++) ut(t, e[r], n);
                                            return n
                                        }(e || "*", u.nodeType ? [u] : u, []),
                                        v = !t || !o && e ? g : Mt(g, p, t, u, s),
                                        y = n ? i || (o ? t : d || r) ? [] : a : v;
                                    if (n && n(v, y, u, s), r)
                                        for (l = Mt(y, h), r(l, [], u, s), c = l.length; c--;)(f = l[c]) && (y[h[c]] = !(v[h[c]] = f));
                                    if (o) {
                                        if (i || t) {
                                            if (i) {
                                                for (l = [], c = y.length; c--;)(f = y[c]) && l.push(v[c] = f);
                                                i(null, y = [], l, s)
                                            }
                                            for (c = y.length; c--;)(f = y[c]) && (l = i ? j(o, f) : p[c]) > -1 && (o[l] = !(a[l] = f))
                                        }
                                    } else y = Mt(y === a ? y.splice(d, y.length) : y), i ? i(null, a, y, s) : O.apply(a, y)
                                }))
                            }

                            function _t(t) {
                                for (var e, n, i, o = t.length, a = r.relative[t[0].type], u = a || r.relative[" "], s = a ? 1 : 0, c = bt((function(t) {
                                        return t === e
                                    }), u, !0), f = bt((function(t) {
                                        return j(e, t) > -1
                                    }), u, !0), p = [function(t, n, r) {
                                        var i = !a && (r || n !== l) || ((e = n).nodeType ? c(t, n, r) : f(t, n, r));
                                        return e = null, i
                                    }]; s < o; s++)
                                    if (n = r.relative[t[s].type]) p = [bt(wt(p), n)];
                                    else {
                                        if ((n = r.filter[t[s].type].apply(null, t[s].matches))[b]) {
                                            for (i = ++s; i < o && !r.relative[t[i].type]; i++);
                                            return Et(s > 1 && wt(p), s > 1 && xt(t.slice(0, s - 1).concat({
                                                value: " " === t[s - 2].type ? "*" : ""
                                            })).replace(U, "$1"), n, s < i && _t(t.slice(s, i)), i < o && _t(t = t.slice(i)), i < o && xt(t))
                                        }
                                        p.push(n)
                                    } return wt(p)
                            }
                            return mt.prototype = r.filters = r.pseudos, r.setFilters = new mt, a = ut.tokenize = function(t, e) {
                                var n, i, o, a, u, s, l, c = A[t + " "];
                                if (c) return e ? 0 : c.slice(0);
                                for (u = t, s = [], l = r.preFilter; u;) {
                                    for (a in n && !(i = B.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), n = !1, (i = W.exec(u)) && (n = i.shift(), o.push({
                                            value: n,
                                            type: i[0].replace(U, " ")
                                        }), u = u.slice(n.length)), r.filter) !(i = Y[a].exec(u)) || l[a] && !(i = l[a](i)) || (n = i.shift(), o.push({
                                        value: n,
                                        type: a,
                                        matches: i
                                    }), u = u.slice(n.length));
                                    if (!n) break
                                }
                                return e ? u.length : u ? ut.error(t) : A(t, s).slice(0)
                            }, u = ut.compile = function(t, e) {
                                var n, i = [],
                                    o = [],
                                    u = T[t + " "];
                                if (!u) {
                                    for (e || (e = a(t)), n = e.length; n--;)(u = _t(e[n]))[b] ? i.push(u) : o.push(u);
                                    (u = T(t, function(t, e) {
                                        var n = e.length > 0,
                                            i = t.length > 0,
                                            o = function(o, a, u, s, c) {
                                                var f, d, v, y = 0,
                                                    m = "0",
                                                    x = o && [],
                                                    b = [],
                                                    w = l,
                                                    E = o || i && r.find.TAG("*", c),
                                                    _ = M += null == w ? 1 : Math.random() || .1,
                                                    A = E.length;
                                                for (c && (l = a == h || a || c); m !== A && null != (f = E[m]); m++) {
                                                    if (i && f) {
                                                        for (d = 0, a || f.ownerDocument == h || (p(f), u = !g); v = t[d++];)
                                                            if (v(f, a || h, u)) {
                                                                s.push(f);
                                                                break
                                                            } c && (M = _)
                                                    }
                                                    n && ((f = !v && f) && y--, o && x.push(f))
                                                }
                                                if (y += m, n && m !== y) {
                                                    for (d = 0; v = e[d++];) v(x, b, a, u);
                                                    if (o) {
                                                        if (y > 0)
                                                            for (; m--;) x[m] || b[m] || (b[m] = D.call(s));
                                                        b = Mt(b)
                                                    }
                                                    O.apply(s, b), c && !o && b.length > 0 && y + e.length > 1 && ut.uniqueSort(s)
                                                }
                                                return c && (M = _, l = w), x
                                            };
                                        return n ? lt(o) : o
                                    }(o, i))).selector = t
                                }
                                return u
                            }, s = ut.select = function(t, e, n, i) {
                                var o, s, l, c, f, p = "function" == typeof t && t,
                                    h = !i && a(t = p.selector || t);
                                if (n = n || [], 1 === h.length) {
                                    if ((s = h[0] = h[0].slice(0)).length > 2 && "ID" === (l = s[0]).type && 9 === e.nodeType && g && r.relative[s[1].type]) {
                                        if (!(e = (r.find.ID(l.matches[0].replace(et, nt), e) || [])[0])) return n;
                                        p && (e = e.parentNode), t = t.slice(s.shift().value.length)
                                    }
                                    for (o = Y.needsContext.test(t) ? 0 : s.length; o-- && (l = s[o], !r.relative[c = l.type]);)
                                        if ((f = r.find[c]) && (i = f(l.matches[0].replace(et, nt), tt.test(s[0].type) && yt(e.parentNode) || e))) {
                                            if (s.splice(o, 1), !(t = i.length && xt(s))) return O.apply(n, i), n;
                                            break
                                        }
                                }
                                return (p || u(t, h))(i, e, !g, n, !e || tt.test(t) && yt(e.parentNode) || e), n
                            }, n.sortStable = b.split("").sort(N).join("") === b, n.detectDuplicates = !!f, p(), n.sortDetached = ct((function(t) {
                                return 1 & t.compareDocumentPosition(h.createElement("fieldset"))
                            })), ct((function(t) {
                                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                            })) || ft("type|href|height|width", (function(t, e, n) {
                                if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                            })), n.attributes && ct((function(t) {
                                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                            })) || ft("value", (function(t, e, n) {
                                if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
                            })), ct((function(t) {
                                return null == t.getAttribute("disabled")
                            })) || ft(P, (function(t, e, n) {
                                var r;
                                if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                            })), ut
                        }(r);
                    _.find = T, _.expr = T.selectors, _.expr[":"] = _.expr.pseudos, _.uniqueSort = _.unique = T.uniqueSort, _.text = T.getText, _.isXMLDoc = T.isXML, _.contains = T.contains, _.escapeSelector = T.escape;
                    var S = function(t, e, n) {
                            for (var r = [], i = void 0 !== n;
                                (t = t[e]) && 9 !== t.nodeType;)
                                if (1 === t.nodeType) {
                                    if (i && _(t).is(n)) break;
                                    r.push(t)
                                } return r
                        },
                        N = function(t, e) {
                            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
                            return n
                        },
                        C = _.expr.match.needsContext;

                    function k(t, e) {
                        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                    }
                    var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

                    function L(t, e, n) {
                        return y(e) ? _.grep(t, (function(t, r) {
                            return !!e.call(t, r, t) !== n
                        })) : e.nodeType ? _.grep(t, (function(t) {
                            return t === e !== n
                        })) : "string" != typeof e ? _.grep(t, (function(t) {
                            return c.call(e, t) > -1 !== n
                        })) : _.filter(e, t, n)
                    }
                    _.filter = function(t, e, n) {
                        var r = e[0];
                        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? _.find.matchesSelector(r, t) ? [r] : [] : _.find.matches(t, _.grep(e, (function(t) {
                            return 1 === t.nodeType
                        })))
                    }, _.fn.extend({
                        find: function(t) {
                            var e, n, r = this.length,
                                i = this;
                            if ("string" != typeof t) return this.pushStack(_(t).filter((function() {
                                for (e = 0; e < r; e++)
                                    if (_.contains(i[e], this)) return !0
                            })));
                            for (n = this.pushStack([]), e = 0; e < r; e++) _.find(t, i[e], n);
                            return r > 1 ? _.uniqueSort(n) : n
                        },
                        filter: function(t) {
                            return this.pushStack(L(this, t || [], !1))
                        },
                        not: function(t) {
                            return this.pushStack(L(this, t || [], !0))
                        },
                        is: function(t) {
                            return !!L(this, "string" == typeof t && C.test(t) ? _(t) : t || [], !1).length
                        }
                    });
                    var O, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                    (_.fn.init = function(t, e, n) {
                        var r, i;
                        if (!t) return this;
                        if (n = n || O, "string" == typeof t) {
                            if (!(r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : q.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                            if (r[1]) {
                                if (e = e instanceof _ ? e[0] : e, _.merge(this, _.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : x, !0)), D.test(r[1]) && _.isPlainObject(e))
                                    for (r in e) y(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                                return this
                            }
                            return (i = x.getElementById(r[2])) && (this[0] = i, this.length = 1), this
                        }
                        return t.nodeType ? (this[0] = t, this.length = 1, this) : y(t) ? void 0 !== n.ready ? n.ready(t) : t(_) : _.makeArray(t, this)
                    }).prototype = _.fn, O = _(x);
                    var j = /^(?:parents|prev(?:Until|All))/,
                        P = {
                            children: !0,
                            contents: !0,
                            next: !0,
                            prev: !0
                        };

                    function R(t, e) {
                        for (;
                            (t = t[e]) && 1 !== t.nodeType;);
                        return t
                    }
                    _.fn.extend({
                        has: function(t) {
                            var e = _(t, this),
                                n = e.length;
                            return this.filter((function() {
                                for (var t = 0; t < n; t++)
                                    if (_.contains(this, e[t])) return !0
                            }))
                        },
                        closest: function(t, e) {
                            var n, r = 0,
                                i = this.length,
                                o = [],
                                a = "string" != typeof t && _(t);
                            if (!C.test(t))
                                for (; r < i; r++)
                                    for (n = this[r]; n && n !== e; n = n.parentNode)
                                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && _.find.matchesSelector(n, t))) {
                                            o.push(n);
                                            break
                                        } return this.pushStack(o.length > 1 ? _.uniqueSort(o) : o)
                        },
                        index: function(t) {
                            return t ? "string" == typeof t ? c.call(_(t), this[0]) : c.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
                        },
                        add: function(t, e) {
                            return this.pushStack(_.uniqueSort(_.merge(this.get(), _(t, e))))
                        },
                        addBack: function(t) {
                            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
                        }
                    }), _.each({
                        parent: function(t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null
                        },
                        parents: function(t) {
                            return S(t, "parentNode")
                        },
                        parentsUntil: function(t, e, n) {
                            return S(t, "parentNode", n)
                        },
                        next: function(t) {
                            return R(t, "nextSibling")
                        },
                        prev: function(t) {
                            return R(t, "previousSibling")
                        },
                        nextAll: function(t) {
                            return S(t, "nextSibling")
                        },
                        prevAll: function(t) {
                            return S(t, "previousSibling")
                        },
                        nextUntil: function(t, e, n) {
                            return S(t, "nextSibling", n)
                        },
                        prevUntil: function(t, e, n) {
                            return S(t, "previousSibling", n)
                        },
                        siblings: function(t) {
                            return N((t.parentNode || {}).firstChild, t)
                        },
                        children: function(t) {
                            return N(t.firstChild)
                        },
                        contents: function(t) {
                            return null != t.contentDocument && a(t.contentDocument) ? t.contentDocument : (k(t, "template") && (t = t.content || t), _.merge([], t.childNodes))
                        }
                    }, (function(t, e) {
                        _.fn[t] = function(n, r) {
                            var i = _.map(this, e, n);
                            return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = _.filter(r, i)), this.length > 1 && (P[t] || _.uniqueSort(i), j.test(t) && i.reverse()), this.pushStack(i)
                        }
                    }));
                    var z = /[^\x20\t\r\n\f]+/g;

                    function H(t) {
                        return t
                    }

                    function I(t) {
                        throw t
                    }

                    function F(t, e, n, r) {
                        var i;
                        try {
                            t && y(i = t.promise) ? i.call(t).done(e).fail(n) : t && y(i = t.then) ? i.call(t, e, n) : e.apply(void 0, [t].slice(r))
                        } catch (t) {
                            n.apply(void 0, [t])
                        }
                    }
                    _.Callbacks = function(t) {
                        t = "string" == typeof t ? function(t) {
                            var e = {};
                            return _.each(t.match(z) || [], (function(t, n) {
                                e[n] = !0
                            })), e
                        }(t) : _.extend({}, t);
                        var e, n, r, i, o = [],
                            a = [],
                            u = -1,
                            s = function() {
                                for (i = i || t.once, r = e = !0; a.length; u = -1)
                                    for (n = a.shift(); ++u < o.length;) !1 === o[u].apply(n[0], n[1]) && t.stopOnFalse && (u = o.length, n = !1);
                                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
                            },
                            l = {
                                add: function() {
                                    return o && (n && !e && (u = o.length - 1, a.push(n)), function e(n) {
                                        _.each(n, (function(n, r) {
                                            y(r) ? t.unique && l.has(r) || o.push(r) : r && r.length && "string" !== M(r) && e(r)
                                        }))
                                    }(arguments), n && !e && s()), this
                                },
                                remove: function() {
                                    return _.each(arguments, (function(t, e) {
                                        for (var n;
                                            (n = _.inArray(e, o, n)) > -1;) o.splice(n, 1), n <= u && u--
                                    })), this
                                },
                                has: function(t) {
                                    return t ? _.inArray(t, o) > -1 : o.length > 0
                                },
                                empty: function() {
                                    return o && (o = []), this
                                },
                                disable: function() {
                                    return i = a = [], o = n = "", this
                                },
                                disabled: function() {
                                    return !o
                                },
                                lock: function() {
                                    return i = a = [], n || e || (o = n = ""), this
                                },
                                locked: function() {
                                    return !!i
                                },
                                fireWith: function(t, n) {
                                    return i || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || s()), this
                                },
                                fire: function() {
                                    return l.fireWith(this, arguments), this
                                },
                                fired: function() {
                                    return !!r
                                }
                            };
                        return l
                    }, _.extend({
                        Deferred: function(t) {
                            var e = [
                                    ["notify", "progress", _.Callbacks("memory"), _.Callbacks("memory"), 2],
                                    ["resolve", "done", _.Callbacks("once memory"), _.Callbacks("once memory"), 0, "resolved"],
                                    ["reject", "fail", _.Callbacks("once memory"), _.Callbacks("once memory"), 1, "rejected"]
                                ],
                                n = "pending",
                                i = {
                                    state: function() {
                                        return n
                                    },
                                    always: function() {
                                        return o.done(arguments).fail(arguments), this
                                    },
                                    catch: function(t) {
                                        return i.then(null, t)
                                    },
                                    pipe: function() {
                                        var t = arguments;
                                        return _.Deferred((function(n) {
                                            _.each(e, (function(e, r) {
                                                var i = y(t[r[4]]) && t[r[4]];
                                                o[r[1]]((function() {
                                                    var t = i && i.apply(this, arguments);
                                                    t && y(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments)
                                                }))
                                            })), t = null
                                        })).promise()
                                    },
                                    then: function(t, n, i) {
                                        var o = 0;

                                        function a(t, e, n, i) {
                                            return function() {
                                                var u = this,
                                                    s = arguments,
                                                    l = function() {
                                                        var r, l;
                                                        if (!(t < o)) {
                                                            if ((r = n.apply(u, s)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                            l = r && ("object" == typeof r || "function" == typeof r) && r.then, y(l) ? i ? l.call(r, a(o, e, H, i), a(o, e, I, i)) : (o++, l.call(r, a(o, e, H, i), a(o, e, I, i), a(o, e, H, e.notifyWith))) : (n !== H && (u = void 0, s = [r]), (i || e.resolveWith)(u, s))
                                                        }
                                                    },
                                                    c = i ? l : function() {
                                                        try {
                                                            l()
                                                        } catch (r) {
                                                            _.Deferred.exceptionHook && _.Deferred.exceptionHook(r, c.stackTrace), t + 1 >= o && (n !== I && (u = void 0, s = [r]), e.rejectWith(u, s))
                                                        }
                                                    };
                                                t ? c() : (_.Deferred.getStackHook && (c.stackTrace = _.Deferred.getStackHook()), r.setTimeout(c))
                                            }
                                        }
                                        return _.Deferred((function(r) {
                                            e[0][3].add(a(0, r, y(i) ? i : H, r.notifyWith)), e[1][3].add(a(0, r, y(t) ? t : H)), e[2][3].add(a(0, r, y(n) ? n : I))
                                        })).promise()
                                    },
                                    promise: function(t) {
                                        return null != t ? _.extend(t, i) : i
                                    }
                                },
                                o = {};
                            return _.each(e, (function(t, r) {
                                var a = r[2],
                                    u = r[5];
                                i[r[1]] = a.add, u && a.add((function() {
                                    n = u
                                }), e[3 - t][2].disable, e[3 - t][3].disable, e[0][2].lock, e[0][3].lock), a.add(r[3].fire), o[r[0]] = function() {
                                    return o[r[0] + "With"](this === o ? void 0 : this, arguments), this
                                }, o[r[0] + "With"] = a.fireWith
                            })), i.promise(o), t && t.call(o, o), o
                        },
                        when: function(t) {
                            var e = arguments.length,
                                n = e,
                                r = Array(n),
                                i = u.call(arguments),
                                o = _.Deferred(),
                                a = function(t) {
                                    return function(n) {
                                        r[t] = this, i[t] = arguments.length > 1 ? u.call(arguments) : n, --e || o.resolveWith(r, i)
                                    }
                                };
                            if (e <= 1 && (F(t, o.done(a(n)).resolve, o.reject, !e), "pending" === o.state() || y(i[n] && i[n].then))) return o.then();
                            for (; n--;) F(i[n], a(n), o.reject);
                            return o.promise()
                        }
                    });
                    var U = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                    _.Deferred.exceptionHook = function(t, e) {
                        r.console && r.console.warn && t && U.test(t.name) && r.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
                    }, _.readyException = function(t) {
                        r.setTimeout((function() {
                            throw t
                        }))
                    };
                    var B = _.Deferred();

                    function W() {
                        x.removeEventListener("DOMContentLoaded", W), r.removeEventListener("load", W), _.ready()
                    }
                    _.fn.ready = function(t) {
                        return B.then(t).catch((function(t) {
                            _.readyException(t)
                        })), this
                    }, _.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(t) {
                            (!0 === t ? --_.readyWait : _.isReady) || (_.isReady = !0, !0 !== t && --_.readyWait > 0 || B.resolveWith(x, [_]))
                        }
                    }), _.ready.then = B.then, "complete" === x.readyState || "loading" !== x.readyState && !x.documentElement.doScroll ? r.setTimeout(_.ready) : (x.addEventListener("DOMContentLoaded", W), r.addEventListener("load", W));
                    var $ = function(t, e, n, r, i, o, a) {
                            var u = 0,
                                s = t.length,
                                l = null == n;
                            if ("object" === M(n))
                                for (u in i = !0, n) $(t, e, u, n[u], !0, o, a);
                            else if (void 0 !== r && (i = !0, y(r) || (a = !0), l && (a ? (e.call(t, r), e = null) : (l = e, e = function(t, e, n) {
                                    return l.call(_(t), n)
                                })), e))
                                for (; u < s; u++) e(t[u], n, a ? r : r.call(t[u], u, e(t[u], n)));
                            return i ? t : l ? e.call(t) : s ? e(t[0], n) : o
                        },
                        V = /^-ms-/,
                        X = /-([a-z])/g;

                    function Y(t, e) {
                        return e.toUpperCase()
                    }

                    function Z(t) {
                        return t.replace(V, "ms-").replace(X, Y)
                    }
                    var G = function(t) {
                        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
                    };

                    function K() {
                        this.expando = _.expando + K.uid++
                    }
                    K.uid = 1, K.prototype = {
                        cache: function(t) {
                            var e = t[this.expando];
                            return e || (e = {}, G(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                                value: e,
                                configurable: !0
                            }))), e
                        },
                        set: function(t, e, n) {
                            var r, i = this.cache(t);
                            if ("string" == typeof e) i[Z(e)] = n;
                            else
                                for (r in e) i[Z(r)] = e[r];
                            return i
                        },
                        get: function(t, e) {
                            return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Z(e)]
                        },
                        access: function(t, e, n) {
                            return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
                        },
                        remove: function(t, e) {
                            var n, r = t[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== e) {
                                    n = (e = Array.isArray(e) ? e.map(Z) : (e = Z(e)) in r ? [e] : e.match(z) || []).length;
                                    for (; n--;) delete r[e[n]]
                                }(void 0 === e || _.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                            }
                        },
                        hasData: function(t) {
                            var e = t[this.expando];
                            return void 0 !== e && !_.isEmptyObject(e)
                        }
                    };
                    var Q = new K,
                        J = new K,
                        tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                        et = /[A-Z]/g;

                    function nt(t, e, n) {
                        var r;
                        if (void 0 === n && 1 === t.nodeType)
                            if (r = "data-" + e.replace(et, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(r))) {
                                try {
                                    n = function(t) {
                                        return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t)
                                    }(n)
                                } catch (t) {}
                                J.set(t, e, n)
                            } else n = void 0;
                        return n
                    }
                    _.extend({
                        hasData: function(t) {
                            return J.hasData(t) || Q.hasData(t)
                        },
                        data: function(t, e, n) {
                            return J.access(t, e, n)
                        },
                        removeData: function(t, e) {
                            J.remove(t, e)
                        },
                        _data: function(t, e, n) {
                            return Q.access(t, e, n)
                        },
                        _removeData: function(t, e) {
                            Q.remove(t, e)
                        }
                    }), _.fn.extend({
                        data: function(t, e) {
                            var n, r, i, o = this[0],
                                a = o && o.attributes;
                            if (void 0 === t) {
                                if (this.length && (i = J.get(o), 1 === o.nodeType && !Q.get(o, "hasDataAttrs"))) {
                                    for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = Z(r.slice(5)), nt(o, r, i[r]));
                                    Q.set(o, "hasDataAttrs", !0)
                                }
                                return i
                            }
                            return "object" == typeof t ? this.each((function() {
                                J.set(this, t)
                            })) : $(this, (function(e) {
                                var n;
                                if (o && void 0 === e) return void 0 !== (n = J.get(o, t)) || void 0 !== (n = nt(o, t)) ? n : void 0;
                                this.each((function() {
                                    J.set(this, t, e)
                                }))
                            }), null, e, arguments.length > 1, null, !0)
                        },
                        removeData: function(t) {
                            return this.each((function() {
                                J.remove(this, t)
                            }))
                        }
                    }), _.extend({
                        queue: function(t, e, n) {
                            var r;
                            if (t) return e = (e || "fx") + "queue", r = Q.get(t, e), n && (!r || Array.isArray(n) ? r = Q.access(t, e, _.makeArray(n)) : r.push(n)), r || []
                        },
                        dequeue: function(t, e) {
                            e = e || "fx";
                            var n = _.queue(t, e),
                                r = n.length,
                                i = n.shift(),
                                o = _._queueHooks(t, e);
                            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, (function() {
                                _.dequeue(t, e)
                            }), o)), !r && o && o.empty.fire()
                        },
                        _queueHooks: function(t, e) {
                            var n = e + "queueHooks";
                            return Q.get(t, n) || Q.access(t, n, {
                                empty: _.Callbacks("once memory").add((function() {
                                    Q.remove(t, [e + "queue", n])
                                }))
                            })
                        }
                    }), _.fn.extend({
                        queue: function(t, e) {
                            var n = 2;
                            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? _.queue(this[0], t) : void 0 === e ? this : this.each((function() {
                                var n = _.queue(this, t, e);
                                _._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && _.dequeue(this, t)
                            }))
                        },
                        dequeue: function(t) {
                            return this.each((function() {
                                _.dequeue(this, t)
                            }))
                        },
                        clearQueue: function(t) {
                            return this.queue(t || "fx", [])
                        },
                        promise: function(t, e) {
                            var n, r = 1,
                                i = _.Deferred(),
                                o = this,
                                a = this.length,
                                u = function() {
                                    --r || i.resolveWith(o, [o])
                                };
                            for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = Q.get(o[a], t + "queueHooks")) && n.empty && (r++, n.empty.add(u));
                            return u(), i.promise(e)
                        }
                    });
                    var rt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                        it = new RegExp("^(?:([+-])=|)(" + rt + ")([a-z%]*)$", "i"),
                        ot = ["Top", "Right", "Bottom", "Left"],
                        at = x.documentElement,
                        ut = function(t) {
                            return _.contains(t.ownerDocument, t)
                        },
                        st = {
                            composed: !0
                        };
                    at.getRootNode && (ut = function(t) {
                        return _.contains(t.ownerDocument, t) || t.getRootNode(st) === t.ownerDocument
                    });
                    var lt = function(t, e) {
                        return "none" === (t = e || t).style.display || "" === t.style.display && ut(t) && "none" === _.css(t, "display")
                    };

                    function ct(t, e, n, r) {
                        var i, o, a = 20,
                            u = r ? function() {
                                return r.cur()
                            } : function() {
                                return _.css(t, e, "")
                            },
                            s = u(),
                            l = n && n[3] || (_.cssNumber[e] ? "" : "px"),
                            c = t.nodeType && (_.cssNumber[e] || "px" !== l && +s) && it.exec(_.css(t, e));
                        if (c && c[3] !== l) {
                            for (s /= 2, l = l || c[3], c = +s || 1; a--;) _.style(t, e, c + l), (1 - o) * (1 - (o = u() / s || .5)) <= 0 && (a = 0), c /= o;
                            c *= 2, _.style(t, e, c + l), n = n || []
                        }
                        return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
                    }
                    var ft = {};

                    function pt(t) {
                        var e, n = t.ownerDocument,
                            r = t.nodeName,
                            i = ft[r];
                        return i || (e = n.body.appendChild(n.createElement(r)), i = _.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), ft[r] = i, i)
                    }

                    function ht(t, e) {
                        for (var n, r, i = [], o = 0, a = t.length; o < a; o++)(r = t[o]).style && (n = r.style.display, e ? ("none" === n && (i[o] = Q.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && lt(r) && (i[o] = pt(r))) : "none" !== n && (i[o] = "none", Q.set(r, "display", n)));
                        for (o = 0; o < a; o++) null != i[o] && (t[o].style.display = i[o]);
                        return t
                    }
                    _.fn.extend({
                        show: function() {
                            return ht(this, !0)
                        },
                        hide: function() {
                            return ht(this)
                        },
                        toggle: function(t) {
                            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each((function() {
                                lt(this) ? _(this).show() : _(this).hide()
                            }))
                        }
                    });
                    var dt, gt, vt = /^(?:checkbox|radio)$/i,
                        yt = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                        mt = /^$|^module$|\/(?:java|ecma)script/i;
                    dt = x.createDocumentFragment().appendChild(x.createElement("div")), (gt = x.createElement("input")).setAttribute("type", "radio"), gt.setAttribute("checked", "checked"), gt.setAttribute("name", "t"), dt.appendChild(gt), v.checkClone = dt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.innerHTML = "<textarea>x</textarea>", v.noCloneChecked = !!dt.cloneNode(!0).lastChild.defaultValue, dt.innerHTML = "<option></option>", v.option = !!dt.lastChild;
                    var xt = {
                        thead: [1, "<table>", "</table>"],
                        col: [2, "<table><colgroup>", "</colgroup></table>"],
                        tr: [2, "<table><tbody>", "</tbody></table>"],
                        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                        _default: [0, "", ""]
                    };

                    function bt(t, e) {
                        var n;
                        return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && k(t, e) ? _.merge([t], n) : n
                    }

                    function wt(t, e) {
                        for (var n = 0, r = t.length; n < r; n++) Q.set(t[n], "globalEval", !e || Q.get(e[n], "globalEval"))
                    }
                    xt.tbody = xt.tfoot = xt.colgroup = xt.caption = xt.thead, xt.th = xt.td, v.option || (xt.optgroup = xt.option = [1, "<select multiple='multiple'>", "</select>"]);
                    var Mt = /<|&#?\w+;/;

                    function Et(t, e, n, r, i) {
                        for (var o, a, u, s, l, c, f = e.createDocumentFragment(), p = [], h = 0, d = t.length; h < d; h++)
                            if ((o = t[h]) || 0 === o)
                                if ("object" === M(o)) _.merge(p, o.nodeType ? [o] : o);
                                else if (Mt.test(o)) {
                            for (a = a || f.appendChild(e.createElement("div")), u = (yt.exec(o) || ["", ""])[1].toLowerCase(), s = xt[u] || xt._default, a.innerHTML = s[1] + _.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
                            _.merge(p, a.childNodes), (a = f.firstChild).textContent = ""
                        } else p.push(e.createTextNode(o));
                        for (f.textContent = "", h = 0; o = p[h++];)
                            if (r && _.inArray(o, r) > -1) i && i.push(o);
                            else if (l = ut(o), a = bt(f.appendChild(o), "script"), l && wt(a), n)
                            for (c = 0; o = a[c++];) mt.test(o.type || "") && n.push(o);
                        return f
                    }
                    var _t = /^([^.]*)(?:\.(.+)|)/;

                    function At() {
                        return !0
                    }

                    function Tt() {
                        return !1
                    }

                    function St(t, e) {
                        return t === function() {
                            try {
                                return x.activeElement
                            } catch (t) {}
                        }() == ("focus" === e)
                    }

                    function Nt(t, e, n, r, i, o) {
                        var a, u;
                        if ("object" == typeof e) {
                            for (u in "string" != typeof n && (r = r || n, n = void 0), e) Nt(t, u, n, r, e[u], o);
                            return t
                        }
                        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = Tt;
                        else if (!i) return t;
                        return 1 === o && (a = i, (i = function(t) {
                            return _().off(t), a.apply(this, arguments)
                        }).guid = a.guid || (a.guid = _.guid++)), t.each((function() {
                            _.event.add(this, e, i, r, n)
                        }))
                    }

                    function Ct(t, e, n) {
                        n ? (Q.set(t, e, !1), _.event.add(t, e, {
                            namespace: !1,
                            handler: function(t) {
                                var r, i, o = Q.get(this, e);
                                if (1 & t.isTrigger && this[e]) {
                                    if (o.length)(_.event.special[e] || {}).delegateType && t.stopPropagation();
                                    else if (o = u.call(arguments), Q.set(this, e, o), r = n(this, e), this[e](), o !== (i = Q.get(this, e)) || r ? Q.set(this, e, !1) : i = {}, o !== i) return t.stopImmediatePropagation(), t.preventDefault(), i && i.value
                                } else o.length && (Q.set(this, e, {
                                    value: _.event.trigger(_.extend(o[0], _.Event.prototype), o.slice(1), this)
                                }), t.stopImmediatePropagation())
                            }
                        })) : void 0 === Q.get(t, e) && _.event.add(t, e, At)
                    }
                    _.event = {
                        global: {},
                        add: function(t, e, n, r, i) {
                            var o, a, u, s, l, c, f, p, h, d, g, v = Q.get(t);
                            if (G(t))
                                for (n.handler && (n = (o = n).handler, i = o.selector), i && _.find.matchesSelector(at, i), n.guid || (n.guid = _.guid++), (s = v.events) || (s = v.events = Object.create(null)), (a = v.handle) || (a = v.handle = function(e) {
                                        return void 0 !== _ && _.event.triggered !== e.type ? _.event.dispatch.apply(t, arguments) : void 0
                                    }), l = (e = (e || "").match(z) || [""]).length; l--;) h = g = (u = _t.exec(e[l]) || [])[1], d = (u[2] || "").split(".").sort(), h && (f = _.event.special[h] || {}, h = (i ? f.delegateType : f.bindType) || h, f = _.event.special[h] || {}, c = _.extend({
                                    type: h,
                                    origType: g,
                                    data: r,
                                    handler: n,
                                    guid: n.guid,
                                    selector: i,
                                    needsContext: i && _.expr.match.needsContext.test(i),
                                    namespace: d.join(".")
                                }, o), (p = s[h]) || ((p = s[h] = []).delegateCount = 0, f.setup && !1 !== f.setup.call(t, r, d, a) || t.addEventListener && t.addEventListener(h, a)), f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, c) : p.push(c), _.event.global[h] = !0)
                        },
                        remove: function(t, e, n, r, i) {
                            var o, a, u, s, l, c, f, p, h, d, g, v = Q.hasData(t) && Q.get(t);
                            if (v && (s = v.events)) {
                                for (l = (e = (e || "").match(z) || [""]).length; l--;)
                                    if (h = g = (u = _t.exec(e[l]) || [])[1], d = (u[2] || "").split(".").sort(), h) {
                                        for (f = _.event.special[h] || {}, p = s[h = (r ? f.delegateType : f.bindType) || h] || [], u = u[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(t, c));
                                        a && !p.length && (f.teardown && !1 !== f.teardown.call(t, d, v.handle) || _.removeEvent(t, h, v.handle), delete s[h])
                                    } else
                                        for (h in s) _.event.remove(t, h + e[l], n, r, !0);
                                _.isEmptyObject(s) && Q.remove(t, "handle events")
                            }
                        },
                        dispatch: function(t) {
                            var e, n, r, i, o, a, u = new Array(arguments.length),
                                s = _.event.fix(t),
                                l = (Q.get(this, "events") || Object.create(null))[s.type] || [],
                                c = _.event.special[s.type] || {};
                            for (u[0] = s, e = 1; e < arguments.length; e++) u[e] = arguments[e];
                            if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
                                for (a = _.event.handlers.call(this, s, l), e = 0;
                                    (i = a[e++]) && !s.isPropagationStopped();)
                                    for (s.currentTarget = i.elem, n = 0;
                                        (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !1 !== o.namespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((_.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                                return c.postDispatch && c.postDispatch.call(this, s), s.result
                            }
                        },
                        handlers: function(t, e) {
                            var n, r, i, o, a, u = [],
                                s = e.delegateCount,
                                l = t.target;
                            if (s && l.nodeType && !("click" === t.type && t.button >= 1))
                                for (; l !== this; l = l.parentNode || this)
                                    if (1 === l.nodeType && ("click" !== t.type || !0 !== l.disabled)) {
                                        for (o = [], a = {}, n = 0; n < s; n++) void 0 === a[i = (r = e[n]).selector + " "] && (a[i] = r.needsContext ? _(i, this).index(l) > -1 : _.find(i, this, null, [l]).length), a[i] && o.push(r);
                                        o.length && u.push({
                                            elem: l,
                                            handlers: o
                                        })
                                    } return l = this, s < e.length && u.push({
                                elem: l,
                                handlers: e.slice(s)
                            }), u
                        },
                        addProp: function(t, e) {
                            Object.defineProperty(_.Event.prototype, t, {
                                enumerable: !0,
                                configurable: !0,
                                get: y(e) ? function() {
                                    if (this.originalEvent) return e(this.originalEvent)
                                } : function() {
                                    if (this.originalEvent) return this.originalEvent[t]
                                },
                                set: function(e) {
                                    Object.defineProperty(this, t, {
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0,
                                        value: e
                                    })
                                }
                            })
                        },
                        fix: function(t) {
                            return t[_.expando] ? t : new _.Event(t)
                        },
                        special: {
                            load: {
                                noBubble: !0
                            },
                            click: {
                                setup: function(t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && k(e, "input") && Ct(e, "click", At), !1
                                },
                                trigger: function(t) {
                                    var e = this || t;
                                    return vt.test(e.type) && e.click && k(e, "input") && Ct(e, "click"), !0
                                },
                                _default: function(t) {
                                    var e = t.target;
                                    return vt.test(e.type) && e.click && k(e, "input") && Q.get(e, "click") || k(e, "a")
                                }
                            },
                            beforeunload: {
                                postDispatch: function(t) {
                                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                                }
                            }
                        }
                    }, _.removeEvent = function(t, e, n) {
                        t.removeEventListener && t.removeEventListener(e, n)
                    }, _.Event = function(t, e) {
                        if (!(this instanceof _.Event)) return new _.Event(t, e);
                        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? At : Tt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && _.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[_.expando] = !0
                    }, _.Event.prototype = {
                        constructor: _.Event,
                        isDefaultPrevented: Tt,
                        isPropagationStopped: Tt,
                        isImmediatePropagationStopped: Tt,
                        isSimulated: !1,
                        preventDefault: function() {
                            var t = this.originalEvent;
                            this.isDefaultPrevented = At, t && !this.isSimulated && t.preventDefault()
                        },
                        stopPropagation: function() {
                            var t = this.originalEvent;
                            this.isPropagationStopped = At, t && !this.isSimulated && t.stopPropagation()
                        },
                        stopImmediatePropagation: function() {
                            var t = this.originalEvent;
                            this.isImmediatePropagationStopped = At, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                        }
                    }, _.each({
                        altKey: !0,
                        bubbles: !0,
                        cancelable: !0,
                        changedTouches: !0,
                        ctrlKey: !0,
                        detail: !0,
                        eventPhase: !0,
                        metaKey: !0,
                        pageX: !0,
                        pageY: !0,
                        shiftKey: !0,
                        view: !0,
                        char: !0,
                        code: !0,
                        charCode: !0,
                        key: !0,
                        keyCode: !0,
                        button: !0,
                        buttons: !0,
                        clientX: !0,
                        clientY: !0,
                        offsetX: !0,
                        offsetY: !0,
                        pointerId: !0,
                        pointerType: !0,
                        screenX: !0,
                        screenY: !0,
                        targetTouches: !0,
                        toElement: !0,
                        touches: !0,
                        which: !0
                    }, _.event.addProp), _.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        _.event.special[t] = {
                            setup: function() {
                                return Ct(this, t, St), !1
                            },
                            trigger: function() {
                                return Ct(this, t), !0
                            },
                            _default: function() {
                                return !0
                            },
                            delegateType: e
                        }
                    })), _.each({
                        mouseenter: "mouseover",
                        mouseleave: "mouseout",
                        pointerenter: "pointerover",
                        pointerleave: "pointerout"
                    }, (function(t, e) {
                        _.event.special[t] = {
                            delegateType: e,
                            bindType: e,
                            handle: function(t) {
                                var n, r = this,
                                    i = t.relatedTarget,
                                    o = t.handleObj;
                                return i && (i === r || _.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                            }
                        }
                    })), _.fn.extend({
                        on: function(t, e, n, r) {
                            return Nt(this, t, e, n, r)
                        },
                        one: function(t, e, n, r) {
                            return Nt(this, t, e, n, r, 1)
                        },
                        off: function(t, e, n) {
                            var r, i;
                            if (t && t.preventDefault && t.handleObj) return r = t.handleObj, _(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                            if ("object" == typeof t) {
                                for (i in t) this.off(i, e, t[i]);
                                return this
                            }
                            return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = Tt), this.each((function() {
                                _.event.remove(this, t, n, e)
                            }))
                        }
                    });
                    var kt = /<script|<style|<link/i,
                        Dt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                        Lt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

                    function Ot(t, e) {
                        return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && _(t).children("tbody")[0] || t
                    }

                    function qt(t) {
                        return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
                    }

                    function jt(t) {
                        return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
                    }

                    function Pt(t, e) {
                        var n, r, i, o, a, u;
                        if (1 === e.nodeType) {
                            if (Q.hasData(t) && (u = Q.get(t).events))
                                for (i in Q.remove(e, "handle events"), u)
                                    for (n = 0, r = u[i].length; n < r; n++) _.event.add(e, i, u[i][n]);
                            J.hasData(t) && (o = J.access(t), a = _.extend({}, o), J.set(e, a))
                        }
                    }

                    function Rt(t, e) {
                        var n = e.nodeName.toLowerCase();
                        "input" === n && vt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
                    }

                    function zt(t, e, n, r) {
                        e = s(e);
                        var i, o, a, u, l, c, f = 0,
                            p = t.length,
                            h = p - 1,
                            d = e[0],
                            g = y(d);
                        if (g || p > 1 && "string" == typeof d && !v.checkClone && Dt.test(d)) return t.each((function(i) {
                            var o = t.eq(i);
                            g && (e[0] = d.call(this, i, o.html())), zt(o, e, n, r)
                        }));
                        if (p && (o = (i = Et(e, t[0].ownerDocument, !1, t, r)).firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                            for (u = (a = _.map(bt(i, "script"), qt)).length; f < p; f++) l = i, f !== h && (l = _.clone(l, !0, !0), u && _.merge(a, bt(l, "script"))), n.call(t[f], l, f);
                            if (u)
                                for (c = a[a.length - 1].ownerDocument, _.map(a, jt), f = 0; f < u; f++) l = a[f], mt.test(l.type || "") && !Q.access(l, "globalEval") && _.contains(c, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? _._evalUrl && !l.noModule && _._evalUrl(l.src, {
                                    nonce: l.nonce || l.getAttribute("nonce")
                                }, c) : w(l.textContent.replace(Lt, ""), l, c))
                        }
                        return t
                    }

                    function Ht(t, e, n) {
                        for (var r, i = e ? _.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || _.cleanData(bt(r)), r.parentNode && (n && ut(r) && wt(bt(r, "script")), r.parentNode.removeChild(r));
                        return t
                    }
                    _.extend({
                        htmlPrefilter: function(t) {
                            return t
                        },
                        clone: function(t, e, n) {
                            var r, i, o, a, u = t.cloneNode(!0),
                                s = ut(t);
                            if (!(v.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || _.isXMLDoc(t)))
                                for (a = bt(u), r = 0, i = (o = bt(t)).length; r < i; r++) Rt(o[r], a[r]);
                            if (e)
                                if (n)
                                    for (o = o || bt(t), a = a || bt(u), r = 0, i = o.length; r < i; r++) Pt(o[r], a[r]);
                                else Pt(t, u);
                            return (a = bt(u, "script")).length > 0 && wt(a, !s && bt(t, "script")), u
                        },
                        cleanData: function(t) {
                            for (var e, n, r, i = _.event.special, o = 0; void 0 !== (n = t[o]); o++)
                                if (G(n)) {
                                    if (e = n[Q.expando]) {
                                        if (e.events)
                                            for (r in e.events) i[r] ? _.event.remove(n, r) : _.removeEvent(n, r, e.handle);
                                        n[Q.expando] = void 0
                                    }
                                    n[J.expando] && (n[J.expando] = void 0)
                                }
                        }
                    }), _.fn.extend({
                        detach: function(t) {
                            return Ht(this, t, !0)
                        },
                        remove: function(t) {
                            return Ht(this, t)
                        },
                        text: function(t) {
                            return $(this, (function(t) {
                                return void 0 === t ? _.text(this) : this.empty().each((function() {
                                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                                }))
                            }), null, t, arguments.length)
                        },
                        append: function() {
                            return zt(this, arguments, (function(t) {
                                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
                            }))
                        },
                        prepend: function() {
                            return zt(this, arguments, (function(t) {
                                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                    var e = Ot(this, t);
                                    e.insertBefore(t, e.firstChild)
                                }
                            }))
                        },
                        before: function() {
                            return zt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this)
                            }))
                        },
                        after: function() {
                            return zt(this, arguments, (function(t) {
                                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                            }))
                        },
                        empty: function() {
                            for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (_.cleanData(bt(t, !1)), t.textContent = "");
                            return this
                        },
                        clone: function(t, e) {
                            return t = null != t && t, e = null == e ? t : e, this.map((function() {
                                return _.clone(this, t, e)
                            }))
                        },
                        html: function(t) {
                            return $(this, (function(t) {
                                var e = this[0] || {},
                                    n = 0,
                                    r = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !kt.test(t) && !xt[(yt.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = _.htmlPrefilter(t);
                                    try {
                                        for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (_.cleanData(bt(e, !1)), e.innerHTML = t);
                                        e = 0
                                    } catch (t) {}
                                }
                                e && this.empty().append(t)
                            }), null, t, arguments.length)
                        },
                        replaceWith: function() {
                            var t = [];
                            return zt(this, arguments, (function(e) {
                                var n = this.parentNode;
                                _.inArray(this, t) < 0 && (_.cleanData(bt(this)), n && n.replaceChild(e, this))
                            }), t)
                        }
                    }), _.each({
                        appendTo: "append",
                        prependTo: "prepend",
                        insertBefore: "before",
                        insertAfter: "after",
                        replaceAll: "replaceWith"
                    }, (function(t, e) {
                        _.fn[t] = function(t) {
                            for (var n, r = [], i = _(t), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), _(i[a])[e](n), l.apply(r, n.get());
                            return this.pushStack(r)
                        }
                    }));
                    var It = new RegExp("^(" + rt + ")(?!px)[a-z%]+$", "i"),
                        Ft = function(t) {
                            var e = t.ownerDocument.defaultView;
                            return e && e.opener || (e = r), e.getComputedStyle(t)
                        },
                        Ut = function(t, e, n) {
                            var r, i, o = {};
                            for (i in e) o[i] = t.style[i], t.style[i] = e[i];
                            for (i in r = n.call(t), e) t.style[i] = o[i];
                            return r
                        },
                        Bt = new RegExp(ot.join("|"), "i");

                    function Wt(t, e, n) {
                        var r, i, o, a, u = t.style;
                        return (n = n || Ft(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || ut(t) || (a = _.style(t, e)), !v.pixelBoxStyles() && It.test(a) && Bt.test(e) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
                    }

                    function $t(t, e) {
                        return {
                            get: function() {
                                if (!t()) return (this.get = e).apply(this, arguments);
                                delete this.get
                            }
                        }
                    }! function() {
                        function t() {
                            if (c) {
                                l.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", c.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", at.appendChild(l).appendChild(c);
                                var t = r.getComputedStyle(c);
                                n = "1%" !== t.top, s = 12 === e(t.marginLeft), c.style.right = "60%", a = 36 === e(t.right), i = 36 === e(t.width), c.style.position = "absolute", o = 12 === e(c.offsetWidth / 3), at.removeChild(l), c = null
                            }
                        }

                        function e(t) {
                            return Math.round(parseFloat(t))
                        }
                        var n, i, o, a, u, s, l = x.createElement("div"),
                            c = x.createElement("div");
                        c.style && (c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", v.clearCloneStyle = "content-box" === c.style.backgroundClip, _.extend(v, {
                            boxSizingReliable: function() {
                                return t(), i
                            },
                            pixelBoxStyles: function() {
                                return t(), a
                            },
                            pixelPosition: function() {
                                return t(), n
                            },
                            reliableMarginLeft: function() {
                                return t(), s
                            },
                            scrollboxSize: function() {
                                return t(), o
                            },
                            reliableTrDimensions: function() {
                                var t, e, n, i;
                                return null == u && (t = x.createElement("table"), e = x.createElement("tr"), n = x.createElement("div"), t.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", e.style.cssText = "border:1px solid", e.style.height = "1px", n.style.height = "9px", n.style.display = "block", at.appendChild(t).appendChild(e).appendChild(n), i = r.getComputedStyle(e), u = parseInt(i.height, 10) + parseInt(i.borderTopWidth, 10) + parseInt(i.borderBottomWidth, 10) === e.offsetHeight, at.removeChild(t)), u
                            }
                        }))
                    }();
                    var Vt = ["Webkit", "Moz", "ms"],
                        Xt = x.createElement("div").style,
                        Yt = {};

                    function Zt(t) {
                        var e = _.cssProps[t] || Yt[t];
                        return e || (t in Xt ? t : Yt[t] = function(t) {
                            for (var e = t[0].toUpperCase() + t.slice(1), n = Vt.length; n--;)
                                if ((t = Vt[n] + e) in Xt) return t
                        }(t) || t)
                    }
                    var Gt = /^(none|table(?!-c[ea]).+)/,
                        Kt = /^--/,
                        Qt = {
                            position: "absolute",
                            visibility: "hidden",
                            display: "block"
                        },
                        Jt = {
                            letterSpacing: "0",
                            fontWeight: "400"
                        };

                    function te(t, e, n) {
                        var r = it.exec(e);
                        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
                    }

                    function ee(t, e, n, r, i, o) {
                        var a = "width" === e ? 1 : 0,
                            u = 0,
                            s = 0;
                        if (n === (r ? "border" : "content")) return 0;
                        for (; a < 4; a += 2) "margin" === n && (s += _.css(t, n + ot[a], !0, i)), r ? ("content" === n && (s -= _.css(t, "padding" + ot[a], !0, i)), "margin" !== n && (s -= _.css(t, "border" + ot[a] + "Width", !0, i))) : (s += _.css(t, "padding" + ot[a], !0, i), "padding" !== n ? s += _.css(t, "border" + ot[a] + "Width", !0, i) : u += _.css(t, "border" + ot[a] + "Width", !0, i));
                        return !r && o >= 0 && (s += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - s - u - .5)) || 0), s
                    }

                    function ne(t, e, n) {
                        var r = Ft(t),
                            i = (!v.boxSizingReliable() || n) && "border-box" === _.css(t, "boxSizing", !1, r),
                            o = i,
                            a = Wt(t, e, r),
                            u = "offset" + e[0].toUpperCase() + e.slice(1);
                        if (It.test(a)) {
                            if (!n) return a;
                            a = "auto"
                        }
                        return (!v.boxSizingReliable() && i || !v.reliableTrDimensions() && k(t, "tr") || "auto" === a || !parseFloat(a) && "inline" === _.css(t, "display", !1, r)) && t.getClientRects().length && (i = "border-box" === _.css(t, "boxSizing", !1, r), (o = u in t) && (a = t[u])), (a = parseFloat(a) || 0) + ee(t, e, n || (i ? "border" : "content"), o, r, a) + "px"
                    }

                    function re(t, e, n, r, i) {
                        return new re.prototype.init(t, e, n, r, i)
                    }
                    _.extend({
                        cssHooks: {
                            opacity: {
                                get: function(t, e) {
                                    if (e) {
                                        var n = Wt(t, "opacity");
                                        return "" === n ? "1" : n
                                    }
                                }
                            }
                        },
                        cssNumber: {
                            animationIterationCount: !0,
                            columnCount: !0,
                            fillOpacity: !0,
                            flexGrow: !0,
                            flexShrink: !0,
                            fontWeight: !0,
                            gridArea: !0,
                            gridColumn: !0,
                            gridColumnEnd: !0,
                            gridColumnStart: !0,
                            gridRow: !0,
                            gridRowEnd: !0,
                            gridRowStart: !0,
                            lineHeight: !0,
                            opacity: !0,
                            order: !0,
                            orphans: !0,
                            widows: !0,
                            zIndex: !0,
                            zoom: !0
                        },
                        cssProps: {},
                        style: function(t, e, n, r) {
                            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                                var i, o, a, u = Z(e),
                                    s = Kt.test(e),
                                    l = t.style;
                                if (s || (e = Zt(u)), a = _.cssHooks[e] || _.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : l[e];
                                "string" === (o = typeof n) && (i = it.exec(n)) && i[1] && (n = ct(t, e, i), o = "number"), null != n && n == n && ("number" !== o || s || (n += i && i[3] || (_.cssNumber[u] ? "" : "px")), v.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (s ? l.setProperty(e, n) : l[e] = n))
                            }
                        },
                        css: function(t, e, n, r) {
                            var i, o, a, u = Z(e);
                            return Kt.test(e) || (e = Zt(u)), (a = _.cssHooks[e] || _.cssHooks[u]) && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = Wt(t, e, r)), "normal" === i && e in Jt && (i = Jt[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
                        }
                    }), _.each(["height", "width"], (function(t, e) {
                        _.cssHooks[e] = {
                            get: function(t, n, r) {
                                if (n) return !Gt.test(_.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? ne(t, e, r) : Ut(t, Qt, (function() {
                                    return ne(t, e, r)
                                }))
                            },
                            set: function(t, n, r) {
                                var i, o = Ft(t),
                                    a = !v.scrollboxSize() && "absolute" === o.position,
                                    u = (a || r) && "border-box" === _.css(t, "boxSizing", !1, o),
                                    s = r ? ee(t, e, r, u, o) : 0;
                                return u && a && (s -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(o[e]) - ee(t, e, "border", !1, o) - .5)), s && (i = it.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = _.css(t, e)), te(0, n, s)
                            }
                        }
                    })), _.cssHooks.marginLeft = $t(v.reliableMarginLeft, (function(t, e) {
                        if (e) return (parseFloat(Wt(t, "marginLeft")) || t.getBoundingClientRect().left - Ut(t, {
                            marginLeft: 0
                        }, (function() {
                            return t.getBoundingClientRect().left
                        }))) + "px"
                    })), _.each({
                        margin: "",
                        padding: "",
                        border: "Width"
                    }, (function(t, e) {
                        _.cssHooks[t + e] = {
                            expand: function(n) {
                                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[t + ot[r] + e] = o[r] || o[r - 2] || o[0];
                                return i
                            }
                        }, "margin" !== t && (_.cssHooks[t + e].set = te)
                    })), _.fn.extend({
                        css: function(t, e) {
                            return $(this, (function(t, e, n) {
                                var r, i, o = {},
                                    a = 0;
                                if (Array.isArray(e)) {
                                    for (r = Ft(t), i = e.length; a < i; a++) o[e[a]] = _.css(t, e[a], !1, r);
                                    return o
                                }
                                return void 0 !== n ? _.style(t, e, n) : _.css(t, e)
                            }), t, e, arguments.length > 1)
                        }
                    }), _.Tween = re, re.prototype = {
                        constructor: re,
                        init: function(t, e, n, r, i, o) {
                            this.elem = t, this.prop = n, this.easing = i || _.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (_.cssNumber[n] ? "" : "px")
                        },
                        cur: function() {
                            var t = re.propHooks[this.prop];
                            return t && t.get ? t.get(this) : re.propHooks._default.get(this)
                        },
                        run: function(t) {
                            var e, n = re.propHooks[this.prop];
                            return this.options.duration ? this.pos = e = _.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : re.propHooks._default.set(this), this
                        }
                    }, re.prototype.init.prototype = re.prototype, re.propHooks = {
                        _default: {
                            get: function(t) {
                                var e;
                                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = _.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                            },
                            set: function(t) {
                                _.fx.step[t.prop] ? _.fx.step[t.prop](t) : 1 !== t.elem.nodeType || !_.cssHooks[t.prop] && null == t.elem.style[Zt(t.prop)] ? t.elem[t.prop] = t.now : _.style(t.elem, t.prop, t.now + t.unit)
                            }
                        }
                    }, re.propHooks.scrollTop = re.propHooks.scrollLeft = {
                        set: function(t) {
                            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
                        }
                    }, _.easing = {
                        linear: function(t) {
                            return t
                        },
                        swing: function(t) {
                            return .5 - Math.cos(t * Math.PI) / 2
                        },
                        _default: "swing"
                    }, _.fx = re.prototype.init, _.fx.step = {};
                    var ie, oe, ae = /^(?:toggle|show|hide)$/,
                        ue = /queueHooks$/;

                    function se() {
                        oe && (!1 === x.hidden && r.requestAnimationFrame ? r.requestAnimationFrame(se) : r.setTimeout(se, _.fx.interval), _.fx.tick())
                    }

                    function le() {
                        return r.setTimeout((function() {
                            ie = void 0
                        })), ie = Date.now()
                    }

                    function ce(t, e) {
                        var n, r = 0,
                            i = {
                                height: t
                            };
                        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = ot[r])] = i["padding" + n] = t;
                        return e && (i.opacity = i.width = t), i
                    }

                    function fe(t, e, n) {
                        for (var r, i = (pe.tweeners[e] || []).concat(pe.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                            if (r = i[o].call(n, e, t)) return r
                    }

                    function pe(t, e, n) {
                        var r, i, o = 0,
                            a = pe.prefilters.length,
                            u = _.Deferred().always((function() {
                                delete s.elem
                            })),
                            s = function() {
                                if (i) return !1;
                                for (var e = ie || le(), n = Math.max(0, l.startTime + l.duration - e), r = 1 - (n / l.duration || 0), o = 0, a = l.tweens.length; o < a; o++) l.tweens[o].run(r);
                                return u.notifyWith(t, [l, r, n]), r < 1 && a ? n : (a || u.notifyWith(t, [l, 1, 0]), u.resolveWith(t, [l]), !1)
                            },
                            l = u.promise({
                                elem: t,
                                props: _.extend({}, e),
                                opts: _.extend(!0, {
                                    specialEasing: {},
                                    easing: _.easing._default
                                }, n),
                                originalProperties: e,
                                originalOptions: n,
                                startTime: ie || le(),
                                duration: n.duration,
                                tweens: [],
                                createTween: function(e, n) {
                                    var r = _.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                                    return l.tweens.push(r), r
                                },
                                stop: function(e) {
                                    var n = 0,
                                        r = e ? l.tweens.length : 0;
                                    if (i) return this;
                                    for (i = !0; n < r; n++) l.tweens[n].run(1);
                                    return e ? (u.notifyWith(t, [l, 1, 0]), u.resolveWith(t, [l, e])) : u.rejectWith(t, [l, e]), this
                                }
                            }),
                            c = l.props;
                        for (! function(t, e) {
                                var n, r, i, o, a;
                                for (n in t)
                                    if (i = e[r = Z(n)], o = t[n], Array.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), (a = _.cssHooks[r]) && "expand" in a)
                                        for (n in o = a.expand(o), delete t[r], o) n in t || (t[n] = o[n], e[n] = i);
                                    else e[r] = i
                            }(c, l.opts.specialEasing); o < a; o++)
                            if (r = pe.prefilters[o].call(l, t, c, l.opts)) return y(r.stop) && (_._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r;
                        return _.map(c, fe, l), y(l.opts.start) && l.opts.start.call(t, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), _.fx.timer(_.extend(s, {
                            elem: t,
                            anim: l,
                            queue: l.opts.queue
                        })), l
                    }
                    _.Animation = _.extend(pe, {
                            tweeners: {
                                "*": [function(t, e) {
                                    var n = this.createTween(t, e);
                                    return ct(n.elem, t, it.exec(e), n), n
                                }]
                            },
                            tweener: function(t, e) {
                                y(t) ? (e = t, t = ["*"]) : t = t.match(z);
                                for (var n, r = 0, i = t.length; r < i; r++) n = t[r], pe.tweeners[n] = pe.tweeners[n] || [], pe.tweeners[n].unshift(e)
                            },
                            prefilters: [function(t, e, n) {
                                var r, i, o, a, u, s, l, c, f = "width" in e || "height" in e,
                                    p = this,
                                    h = {},
                                    d = t.style,
                                    g = t.nodeType && lt(t),
                                    v = Q.get(t, "fxshow");
                                for (r in n.queue || (null == (a = _._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, u = a.empty.fire, a.empty.fire = function() {
                                        a.unqueued || u()
                                    }), a.unqueued++, p.always((function() {
                                        p.always((function() {
                                            a.unqueued--, _.queue(t, "fx").length || a.empty.fire()
                                        }))
                                    }))), e)
                                    if (i = e[r], ae.test(i)) {
                                        if (delete e[r], o = o || "toggle" === i, i === (g ? "hide" : "show")) {
                                            if ("show" !== i || !v || void 0 === v[r]) continue;
                                            g = !0
                                        }
                                        h[r] = v && v[r] || _.style(t, r)
                                    } if ((s = !_.isEmptyObject(e)) || !_.isEmptyObject(h))
                                    for (r in f && 1 === t.nodeType && (n.overflow = [d.overflow, d.overflowX, d.overflowY], null == (l = v && v.display) && (l = Q.get(t, "display")), "none" === (c = _.css(t, "display")) && (l ? c = l : (ht([t], !0), l = t.style.display || l, c = _.css(t, "display"), ht([t]))), ("inline" === c || "inline-block" === c && null != l) && "none" === _.css(t, "float") && (s || (p.done((function() {
                                            d.display = l
                                        })), null == l && (c = d.display, l = "none" === c ? "" : c)), d.display = "inline-block")), n.overflow && (d.overflow = "hidden", p.always((function() {
                                            d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2]
                                        }))), s = !1, h) s || (v ? "hidden" in v && (g = v.hidden) : v = Q.access(t, "fxshow", {
                                        display: l
                                    }), o && (v.hidden = !g), g && ht([t], !0), p.done((function() {
                                        for (r in g || ht([t]), Q.remove(t, "fxshow"), h) _.style(t, r, h[r])
                                    }))), s = fe(g ? v[r] : 0, r, p), r in v || (v[r] = s.start, g && (s.end = s.start, s.start = 0))
                            }],
                            prefilter: function(t, e) {
                                e ? pe.prefilters.unshift(t) : pe.prefilters.push(t)
                            }
                        }), _.speed = function(t, e, n) {
                            var r = t && "object" == typeof t ? _.extend({}, t) : {
                                complete: n || !n && e || y(t) && t,
                                duration: t,
                                easing: n && e || e && !y(e) && e
                            };
                            return _.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in _.fx.speeds ? r.duration = _.fx.speeds[r.duration] : r.duration = _.fx.speeds._default), null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function() {
                                y(r.old) && r.old.call(this), r.queue && _.dequeue(this, r.queue)
                            }, r
                        }, _.fn.extend({
                            fadeTo: function(t, e, n, r) {
                                return this.filter(lt).css("opacity", 0).show().end().animate({
                                    opacity: e
                                }, t, n, r)
                            },
                            animate: function(t, e, n, r) {
                                var i = _.isEmptyObject(t),
                                    o = _.speed(e, n, r),
                                    a = function() {
                                        var e = pe(this, _.extend({}, t), o);
                                        (i || Q.get(this, "finish")) && e.stop(!0)
                                    };
                                return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
                            },
                            stop: function(t, e, n) {
                                var r = function(t) {
                                    var e = t.stop;
                                    delete t.stop, e(n)
                                };
                                return "string" != typeof t && (n = e, e = t, t = void 0), e && this.queue(t || "fx", []), this.each((function() {
                                    var e = !0,
                                        i = null != t && t + "queueHooks",
                                        o = _.timers,
                                        a = Q.get(this);
                                    if (i) a[i] && a[i].stop && r(a[i]);
                                    else
                                        for (i in a) a[i] && a[i].stop && ue.test(i) && r(a[i]);
                                    for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                                    !e && n || _.dequeue(this, t)
                                }))
                            },
                            finish: function(t) {
                                return !1 !== t && (t = t || "fx"), this.each((function() {
                                    var e, n = Q.get(this),
                                        r = n[t + "queue"],
                                        i = n[t + "queueHooks"],
                                        o = _.timers,
                                        a = r ? r.length : 0;
                                    for (n.finish = !0, _.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                                    for (e = 0; e < a; e++) r[e] && r[e].finish && r[e].finish.call(this);
                                    delete n.finish
                                }))
                            }
                        }), _.each(["toggle", "show", "hide"], (function(t, e) {
                            var n = _.fn[e];
                            _.fn[e] = function(t, r, i) {
                                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(ce(e, !0), t, r, i)
                            }
                        })), _.each({
                            slideDown: ce("show"),
                            slideUp: ce("hide"),
                            slideToggle: ce("toggle"),
                            fadeIn: {
                                opacity: "show"
                            },
                            fadeOut: {
                                opacity: "hide"
                            },
                            fadeToggle: {
                                opacity: "toggle"
                            }
                        }, (function(t, e) {
                            _.fn[t] = function(t, n, r) {
                                return this.animate(e, t, n, r)
                            }
                        })), _.timers = [], _.fx.tick = function() {
                            var t, e = 0,
                                n = _.timers;
                            for (ie = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
                            n.length || _.fx.stop(), ie = void 0
                        }, _.fx.timer = function(t) {
                            _.timers.push(t), _.fx.start()
                        }, _.fx.interval = 13, _.fx.start = function() {
                            oe || (oe = !0, se())
                        }, _.fx.stop = function() {
                            oe = null
                        }, _.fx.speeds = {
                            slow: 600,
                            fast: 200,
                            _default: 400
                        }, _.fn.delay = function(t, e) {
                            return t = _.fx && _.fx.speeds[t] || t, e = e || "fx", this.queue(e, (function(e, n) {
                                var i = r.setTimeout(e, t);
                                n.stop = function() {
                                    r.clearTimeout(i)
                                }
                            }))
                        },
                        function() {
                            var t = x.createElement("input"),
                                e = x.createElement("select").appendChild(x.createElement("option"));
                            t.type = "checkbox", v.checkOn = "" !== t.value, v.optSelected = e.selected, (t = x.createElement("input")).value = "t", t.type = "radio", v.radioValue = "t" === t.value
                        }();
                    var he, de = _.expr.attrHandle;
                    _.fn.extend({
                        attr: function(t, e) {
                            return $(this, _.attr, t, e, arguments.length > 1)
                        },
                        removeAttr: function(t) {
                            return this.each((function() {
                                _.removeAttr(this, t)
                            }))
                        }
                    }), _.extend({
                        attr: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? _.prop(t, e, n) : (1 === o && _.isXMLDoc(t) || (i = _.attrHooks[e.toLowerCase()] || (_.expr.match.bool.test(e) ? he : void 0)), void 0 !== n ? null === n ? void _.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = _.find.attr(t, e)) ? void 0 : r)
                        },
                        attrHooks: {
                            type: {
                                set: function(t, e) {
                                    if (!v.radioValue && "radio" === e && k(t, "input")) {
                                        var n = t.value;
                                        return t.setAttribute("type", e), n && (t.value = n), e
                                    }
                                }
                            }
                        },
                        removeAttr: function(t, e) {
                            var n, r = 0,
                                i = e && e.match(z);
                            if (i && 1 === t.nodeType)
                                for (; n = i[r++];) t.removeAttribute(n)
                        }
                    }), he = {
                        set: function(t, e, n) {
                            return !1 === e ? _.removeAttr(t, n) : t.setAttribute(n, n), n
                        }
                    }, _.each(_.expr.match.bool.source.match(/\w+/g), (function(t, e) {
                        var n = de[e] || _.find.attr;
                        de[e] = function(t, e, r) {
                            var i, o, a = e.toLowerCase();
                            return r || (o = de[a], de[a] = i, i = null != n(t, e, r) ? a : null, de[a] = o), i
                        }
                    }));
                    var ge = /^(?:input|select|textarea|button)$/i,
                        ve = /^(?:a|area)$/i;

                    function ye(t) {
                        return (t.match(z) || []).join(" ")
                    }

                    function me(t) {
                        return t.getAttribute && t.getAttribute("class") || ""
                    }

                    function xe(t) {
                        return Array.isArray(t) ? t : "string" == typeof t && t.match(z) || []
                    }
                    _.fn.extend({
                        prop: function(t, e) {
                            return $(this, _.prop, t, e, arguments.length > 1)
                        },
                        removeProp: function(t) {
                            return this.each((function() {
                                delete this[_.propFix[t] || t]
                            }))
                        }
                    }), _.extend({
                        prop: function(t, e, n) {
                            var r, i, o = t.nodeType;
                            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && _.isXMLDoc(t) || (e = _.propFix[e] || e, i = _.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(t) {
                                    var e = _.find.attr(t, "tabindex");
                                    return e ? parseInt(e, 10) : ge.test(t.nodeName) || ve.test(t.nodeName) && t.href ? 0 : -1
                                }
                            }
                        },
                        propFix: {
                            for: "htmlFor",
                            class: "className"
                        }
                    }), v.optSelected || (_.propHooks.selected = {
                        get: function(t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null
                        },
                        set: function(t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                        }
                    }), _.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], (function() {
                        _.propFix[this.toLowerCase()] = this
                    })), _.fn.extend({
                        addClass: function(t) {
                            var e, n, r, i, o, a, u, s = 0;
                            if (y(t)) return this.each((function(e) {
                                _(this).addClass(t.call(this, e, me(this)))
                            }));
                            if ((e = xe(t)).length)
                                for (; n = this[s++];)
                                    if (i = me(n), r = 1 === n.nodeType && " " + ye(i) + " ") {
                                        for (a = 0; o = e[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                        i !== (u = ye(r)) && n.setAttribute("class", u)
                                    } return this
                        },
                        removeClass: function(t) {
                            var e, n, r, i, o, a, u, s = 0;
                            if (y(t)) return this.each((function(e) {
                                _(this).removeClass(t.call(this, e, me(this)))
                            }));
                            if (!arguments.length) return this.attr("class", "");
                            if ((e = xe(t)).length)
                                for (; n = this[s++];)
                                    if (i = me(n), r = 1 === n.nodeType && " " + ye(i) + " ") {
                                        for (a = 0; o = e[a++];)
                                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                                        i !== (u = ye(r)) && n.setAttribute("class", u)
                                    } return this
                        },
                        toggleClass: function(t, e) {
                            var n = typeof t,
                                r = "string" === n || Array.isArray(t);
                            return "boolean" == typeof e && r ? e ? this.addClass(t) : this.removeClass(t) : y(t) ? this.each((function(n) {
                                _(this).toggleClass(t.call(this, n, me(this), e), e)
                            })) : this.each((function() {
                                var e, i, o, a;
                                if (r)
                                    for (i = 0, o = _(this), a = xe(t); e = a[i++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                                else void 0 !== t && "boolean" !== n || ((e = me(this)) && Q.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : Q.get(this, "__className__") || ""))
                            }))
                        },
                        hasClass: function(t) {
                            var e, n, r = 0;
                            for (e = " " + t + " "; n = this[r++];)
                                if (1 === n.nodeType && (" " + ye(me(n)) + " ").indexOf(e) > -1) return !0;
                            return !1
                        }
                    });
                    var be = /\r/g;
                    _.fn.extend({
                        val: function(t) {
                            var e, n, r, i = this[0];
                            return arguments.length ? (r = y(t), this.each((function(n) {
                                var i;
                                1 === this.nodeType && (null == (i = r ? t.call(this, n, _(this).val()) : t) ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = _.map(i, (function(t) {
                                    return null == t ? "" : t + ""
                                }))), (e = _.valHooks[this.type] || _.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                            }))) : i ? (e = _.valHooks[i.type] || _.valHooks[i.nodeName.toLowerCase()]) && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : "string" == typeof(n = i.value) ? n.replace(be, "") : null == n ? "" : n : void 0
                        }
                    }), _.extend({
                        valHooks: {
                            option: {
                                get: function(t) {
                                    var e = _.find.attr(t, "value");
                                    return null != e ? e : ye(_.text(t))
                                }
                            },
                            select: {
                                get: function(t) {
                                    var e, n, r, i = t.options,
                                        o = t.selectedIndex,
                                        a = "select-one" === t.type,
                                        u = a ? null : [],
                                        s = a ? o + 1 : i.length;
                                    for (r = o < 0 ? s : a ? o : 0; r < s; r++)
                                        if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
                                            if (e = _(n).val(), a) return e;
                                            u.push(e)
                                        } return u
                                },
                                set: function(t, e) {
                                    for (var n, r, i = t.options, o = _.makeArray(e), a = i.length; a--;)((r = i[a]).selected = _.inArray(_.valHooks.option.get(r), o) > -1) && (n = !0);
                                    return n || (t.selectedIndex = -1), o
                                }
                            }
                        }
                    }), _.each(["radio", "checkbox"], (function() {
                        _.valHooks[this] = {
                            set: function(t, e) {
                                if (Array.isArray(e)) return t.checked = _.inArray(_(t).val(), e) > -1
                            }
                        }, v.checkOn || (_.valHooks[this].get = function(t) {
                            return null === t.getAttribute("value") ? "on" : t.value
                        })
                    })), v.focusin = "onfocusin" in r;
                    var we = /^(?:focusinfocus|focusoutblur)$/,
                        Me = function(t) {
                            t.stopPropagation()
                        };
                    _.extend(_.event, {
                        trigger: function(t, e, n, i) {
                            var o, a, u, s, l, c, f, p, d = [n || x],
                                g = h.call(t, "type") ? t.type : t,
                                v = h.call(t, "namespace") ? t.namespace.split(".") : [];
                            if (a = p = u = n = n || x, 3 !== n.nodeType && 8 !== n.nodeType && !we.test(g + _.event.triggered) && (g.indexOf(".") > -1 && (v = g.split("."), g = v.shift(), v.sort()), l = g.indexOf(":") < 0 && "on" + g, (t = t[_.expando] ? t : new _.Event(g, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = v.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : _.makeArray(e, [t]), f = _.event.special[g] || {}, i || !f.trigger || !1 !== f.trigger.apply(n, e))) {
                                if (!i && !f.noBubble && !m(n)) {
                                    for (s = f.delegateType || g, we.test(s + g) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                                    u === (n.ownerDocument || x) && d.push(u.defaultView || u.parentWindow || r)
                                }
                                for (o = 0;
                                    (a = d[o++]) && !t.isPropagationStopped();) p = a, t.type = o > 1 ? s : f.bindType || g, (c = (Q.get(a, "events") || Object.create(null))[t.type] && Q.get(a, "handle")) && c.apply(a, e), (c = l && a[l]) && c.apply && G(a) && (t.result = c.apply(a, e), !1 === t.result && t.preventDefault());
                                return t.type = g, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), e) || !G(n) || l && y(n[g]) && !m(n) && ((u = n[l]) && (n[l] = null), _.event.triggered = g, t.isPropagationStopped() && p.addEventListener(g, Me), n[g](), t.isPropagationStopped() && p.removeEventListener(g, Me), _.event.triggered = void 0, u && (n[l] = u)), t.result
                            }
                        },
                        simulate: function(t, e, n) {
                            var r = _.extend(new _.Event, n, {
                                type: t,
                                isSimulated: !0
                            });
                            _.event.trigger(r, null, e)
                        }
                    }), _.fn.extend({
                        trigger: function(t, e) {
                            return this.each((function() {
                                _.event.trigger(t, e, this)
                            }))
                        },
                        triggerHandler: function(t, e) {
                            var n = this[0];
                            if (n) return _.event.trigger(t, e, n, !0)
                        }
                    }), v.focusin || _.each({
                        focus: "focusin",
                        blur: "focusout"
                    }, (function(t, e) {
                        var n = function(t) {
                            _.event.simulate(e, t.target, _.event.fix(t))
                        };
                        _.event.special[e] = {
                            setup: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = Q.access(r, e);
                                i || r.addEventListener(t, n, !0), Q.access(r, e, (i || 0) + 1)
                            },
                            teardown: function() {
                                var r = this.ownerDocument || this.document || this,
                                    i = Q.access(r, e) - 1;
                                i ? Q.access(r, e, i) : (r.removeEventListener(t, n, !0), Q.remove(r, e))
                            }
                        }
                    }));
                    var Ee = r.location,
                        _e = {
                            guid: Date.now()
                        },
                        Ae = /\?/;
                    _.parseXML = function(t) {
                        var e, n;
                        if (!t || "string" != typeof t) return null;
                        try {
                            e = (new r.DOMParser).parseFromString(t, "text/xml")
                        } catch (t) {}
                        return n = e && e.getElementsByTagName("parsererror")[0], e && !n || _.error("Invalid XML: " + (n ? _.map(n.childNodes, (function(t) {
                            return t.textContent
                        })).join("\n") : t)), e
                    };
                    var Te = /\[\]$/,
                        Se = /\r?\n/g,
                        Ne = /^(?:submit|button|image|reset|file)$/i,
                        Ce = /^(?:input|select|textarea|keygen)/i;

                    function ke(t, e, n, r) {
                        var i;
                        if (Array.isArray(e)) _.each(e, (function(e, i) {
                            n || Te.test(t) ? r(t, i) : ke(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
                        }));
                        else if (n || "object" !== M(e)) r(t, e);
                        else
                            for (i in e) ke(t + "[" + i + "]", e[i], n, r)
                    }
                    _.param = function(t, e) {
                        var n, r = [],
                            i = function(t, e) {
                                var n = y(e) ? e() : e;
                                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                            };
                        if (null == t) return "";
                        if (Array.isArray(t) || t.jquery && !_.isPlainObject(t)) _.each(t, (function() {
                            i(this.name, this.value)
                        }));
                        else
                            for (n in t) ke(n, t[n], e, i);
                        return r.join("&")
                    }, _.fn.extend({
                        serialize: function() {
                            return _.param(this.serializeArray())
                        },
                        serializeArray: function() {
                            return this.map((function() {
                                var t = _.prop(this, "elements");
                                return t ? _.makeArray(t) : this
                            })).filter((function() {
                                var t = this.type;
                                return this.name && !_(this).is(":disabled") && Ce.test(this.nodeName) && !Ne.test(t) && (this.checked || !vt.test(t))
                            })).map((function(t, e) {
                                var n = _(this).val();
                                return null == n ? null : Array.isArray(n) ? _.map(n, (function(t) {
                                    return {
                                        name: e.name,
                                        value: t.replace(Se, "\r\n")
                                    }
                                })) : {
                                    name: e.name,
                                    value: n.replace(Se, "\r\n")
                                }
                            })).get()
                        }
                    });
                    var De = /%20/g,
                        Le = /#.*$/,
                        Oe = /([?&])_=[^&]*/,
                        qe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                        je = /^(?:GET|HEAD)$/,
                        Pe = /^\/\//,
                        Re = {},
                        ze = {},
                        He = "*/".concat("*"),
                        Ie = x.createElement("a");

                    function Fe(t) {
                        return function(e, n) {
                            "string" != typeof e && (n = e, e = "*");
                            var r, i = 0,
                                o = e.toLowerCase().match(z) || [];
                            if (y(n))
                                for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
                        }
                    }

                    function Ue(t, e, n, r) {
                        var i = {},
                            o = t === ze;

                        function a(u) {
                            var s;
                            return i[u] = !0, _.each(t[u] || [], (function(t, u) {
                                var l = u(e, n, r);
                                return "string" != typeof l || o || i[l] ? o ? !(s = l) : void 0 : (e.dataTypes.unshift(l), a(l), !1)
                            })), s
                        }
                        return a(e.dataTypes[0]) || !i["*"] && a("*")
                    }

                    function Be(t, e) {
                        var n, r, i = _.ajaxSettings.flatOptions || {};
                        for (n in e) void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
                        return r && _.extend(!0, t, r), t
                    }
                    Ie.href = Ee.href, _.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: Ee.href,
                            type: "GET",
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ee.protocol),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                            accepts: {
                                "*": He,
                                text: "text/plain",
                                html: "text/html",
                                xml: "application/xml, text/xml",
                                json: "application/json, text/javascript"
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: "responseXML",
                                text: "responseText",
                                json: "responseJSON"
                            },
                            converters: {
                                "* text": String,
                                "text html": !0,
                                "text json": JSON.parse,
                                "text xml": _.parseXML
                            },
                            flatOptions: {
                                url: !0,
                                context: !0
                            }
                        },
                        ajaxSetup: function(t, e) {
                            return e ? Be(Be(t, _.ajaxSettings), e) : Be(_.ajaxSettings, t)
                        },
                        ajaxPrefilter: Fe(Re),
                        ajaxTransport: Fe(ze),
                        ajax: function(t, e) {
                            "object" == typeof t && (e = t, t = void 0), e = e || {};
                            var n, i, o, a, u, s, l, c, f, p, h = _.ajaxSetup({}, e),
                                d = h.context || h,
                                g = h.context && (d.nodeType || d.jquery) ? _(d) : _.event,
                                v = _.Deferred(),
                                y = _.Callbacks("once memory"),
                                m = h.statusCode || {},
                                b = {},
                                w = {},
                                M = "canceled",
                                E = {
                                    readyState: 0,
                                    getResponseHeader: function(t) {
                                        var e;
                                        if (l) {
                                            if (!a)
                                                for (a = {}; e = qe.exec(o);) a[e[1].toLowerCase() + " "] = (a[e[1].toLowerCase() + " "] || []).concat(e[2]);
                                            e = a[t.toLowerCase() + " "]
                                        }
                                        return null == e ? null : e.join(", ")
                                    },
                                    getAllResponseHeaders: function() {
                                        return l ? o : null
                                    },
                                    setRequestHeader: function(t, e) {
                                        return null == l && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, b[t] = e), this
                                    },
                                    overrideMimeType: function(t) {
                                        return null == l && (h.mimeType = t), this
                                    },
                                    statusCode: function(t) {
                                        var e;
                                        if (t)
                                            if (l) E.always(t[E.status]);
                                            else
                                                for (e in t) m[e] = [m[e], t[e]];
                                        return this
                                    },
                                    abort: function(t) {
                                        var e = t || M;
                                        return n && n.abort(e), A(0, e), this
                                    }
                                };
                            if (v.promise(E), h.url = ((t || h.url || Ee.href) + "").replace(Pe, Ee.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(z) || [""], null == h.crossDomain) {
                                s = x.createElement("a");
                                try {
                                    s.href = h.url, s.href = s.href, h.crossDomain = Ie.protocol + "//" + Ie.host != s.protocol + "//" + s.host
                                } catch (t) {
                                    h.crossDomain = !0
                                }
                            }
                            if (h.data && h.processData && "string" != typeof h.data && (h.data = _.param(h.data, h.traditional)), Ue(Re, h, e, E), l) return E;
                            for (f in (c = _.event && h.global) && 0 == _.active++ && _.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !je.test(h.type), i = h.url.replace(Le, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(De, "+")) : (p = h.url.slice(i.length), h.data && (h.processData || "string" == typeof h.data) && (i += (Ae.test(i) ? "&" : "?") + h.data, delete h.data), !1 === h.cache && (i = i.replace(Oe, "$1"), p = (Ae.test(i) ? "&" : "?") + "_=" + _e.guid++ + p), h.url = i + p), h.ifModified && (_.lastModified[i] && E.setRequestHeader("If-Modified-Since", _.lastModified[i]), _.etag[i] && E.setRequestHeader("If-None-Match", _.etag[i])), (h.data && h.hasContent && !1 !== h.contentType || e.contentType) && E.setRequestHeader("Content-Type", h.contentType), E.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + He + "; q=0.01" : "") : h.accepts["*"]), h.headers) E.setRequestHeader(f, h.headers[f]);
                            if (h.beforeSend && (!1 === h.beforeSend.call(d, E, h) || l)) return E.abort();
                            if (M = "abort", y.add(h.complete), E.done(h.success), E.fail(h.error), n = Ue(ze, h, e, E)) {
                                if (E.readyState = 1, c && g.trigger("ajaxSend", [E, h]), l) return E;
                                h.async && h.timeout > 0 && (u = r.setTimeout((function() {
                                    E.abort("timeout")
                                }), h.timeout));
                                try {
                                    l = !1, n.send(b, A)
                                } catch (t) {
                                    if (l) throw t;
                                    A(-1, t)
                                }
                            } else A(-1, "No Transport");

                            function A(t, e, a, s) {
                                var f, p, x, b, w, M = e;
                                l || (l = !0, u && r.clearTimeout(u), n = void 0, o = s || "", E.readyState = t > 0 ? 4 : 0, f = t >= 200 && t < 300 || 304 === t, a && (b = function(t, e, n) {
                                    for (var r, i, o, a, u = t.contents, s = t.dataTypes;
                                        "*" === s[0];) s.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
                                    if (r)
                                        for (i in u)
                                            if (u[i] && u[i].test(r)) {
                                                s.unshift(i);
                                                break
                                            } if (s[0] in n) o = s[0];
                                    else {
                                        for (i in n) {
                                            if (!s[0] || t.converters[i + " " + s[0]]) {
                                                o = i;
                                                break
                                            }
                                            a || (a = i)
                                        }
                                        o = o || a
                                    }
                                    if (o) return o !== s[0] && s.unshift(o), n[o]
                                }(h, E, a)), !f && _.inArray("script", h.dataTypes) > -1 && _.inArray("json", h.dataTypes) < 0 && (h.converters["text script"] = function() {}), b = function(t, e, n, r) {
                                    var i, o, a, u, s, l = {},
                                        c = t.dataTypes.slice();
                                    if (c[1])
                                        for (a in t.converters) l[a.toLowerCase()] = t.converters[a];
                                    for (o = c.shift(); o;)
                                        if (t.responseFields[o] && (n[t.responseFields[o]] = e), !s && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), s = o, o = c.shift())
                                            if ("*" === o) o = s;
                                            else if ("*" !== s && s !== o) {
                                        if (!(a = l[s + " " + o] || l["* " + o]))
                                            for (i in l)
                                                if ((u = i.split(" "))[1] === o && (a = l[s + " " + u[0]] || l["* " + u[0]])) {
                                                    !0 === a ? a = l[i] : !0 !== l[i] && (o = u[0], c.unshift(u[1]));
                                                    break
                                                } if (!0 !== a)
                                            if (a && t.throws) e = a(e);
                                            else try {
                                                e = a(e)
                                            } catch (t) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? t : "No conversion from " + s + " to " + o
                                                }
                                            }
                                    }
                                    return {
                                        state: "success",
                                        data: e
                                    }
                                }(h, b, E, f), f ? (h.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (_.lastModified[i] = w), (w = E.getResponseHeader("etag")) && (_.etag[i] = w)), 204 === t || "HEAD" === h.type ? M = "nocontent" : 304 === t ? M = "notmodified" : (M = b.state, p = b.data, f = !(x = b.error))) : (x = M, !t && M || (M = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || M) + "", f ? v.resolveWith(d, [p, M, E]) : v.rejectWith(d, [E, M, x]), E.statusCode(m), m = void 0, c && g.trigger(f ? "ajaxSuccess" : "ajaxError", [E, h, f ? p : x]), y.fireWith(d, [E, M]), c && (g.trigger("ajaxComplete", [E, h]), --_.active || _.event.trigger("ajaxStop")))
                            }
                            return E
                        },
                        getJSON: function(t, e, n) {
                            return _.get(t, e, n, "json")
                        },
                        getScript: function(t, e) {
                            return _.get(t, void 0, e, "script")
                        }
                    }), _.each(["get", "post"], (function(t, e) {
                        _[e] = function(t, n, r, i) {
                            return y(n) && (i = i || r, r = n, n = void 0), _.ajax(_.extend({
                                url: t,
                                type: e,
                                dataType: i,
                                data: n,
                                success: r
                            }, _.isPlainObject(t) && t))
                        }
                    })), _.ajaxPrefilter((function(t) {
                        var e;
                        for (e in t.headers) "content-type" === e.toLowerCase() && (t.contentType = t.headers[e] || "")
                    })), _._evalUrl = function(t, e, n) {
                        return _.ajax({
                            url: t,
                            type: "GET",
                            dataType: "script",
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: {
                                "text script": function() {}
                            },
                            dataFilter: function(t) {
                                _.globalEval(t, e, n)
                            }
                        })
                    }, _.fn.extend({
                        wrapAll: function(t) {
                            var e;
                            return this[0] && (y(t) && (t = t.call(this[0])), e = _(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map((function() {
                                for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                                return t
                            })).append(this)), this
                        },
                        wrapInner: function(t) {
                            return y(t) ? this.each((function(e) {
                                _(this).wrapInner(t.call(this, e))
                            })) : this.each((function() {
                                var e = _(this),
                                    n = e.contents();
                                n.length ? n.wrapAll(t) : e.append(t)
                            }))
                        },
                        wrap: function(t) {
                            var e = y(t);
                            return this.each((function(n) {
                                _(this).wrapAll(e ? t.call(this, n) : t)
                            }))
                        },
                        unwrap: function(t) {
                            return this.parent(t).not("body").each((function() {
                                _(this).replaceWith(this.childNodes)
                            })), this
                        }
                    }), _.expr.pseudos.hidden = function(t) {
                        return !_.expr.pseudos.visible(t)
                    }, _.expr.pseudos.visible = function(t) {
                        return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
                    }, _.ajaxSettings.xhr = function() {
                        try {
                            return new r.XMLHttpRequest
                        } catch (t) {}
                    };
                    var We = {
                            0: 200,
                            1223: 204
                        },
                        $e = _.ajaxSettings.xhr();
                    v.cors = !!$e && "withCredentials" in $e, v.ajax = $e = !!$e, _.ajaxTransport((function(t) {
                        var e, n;
                        if (v.cors || $e && !t.crossDomain) return {
                            send: function(i, o) {
                                var a, u = t.xhr();
                                if (u.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                                    for (a in t.xhrFields) u[a] = t.xhrFields[a];
                                for (a in t.mimeType && u.overrideMimeType && u.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) u.setRequestHeader(a, i[a]);
                                e = function(t) {
                                    return function() {
                                        e && (e = n = u.onload = u.onerror = u.onabort = u.ontimeout = u.onreadystatechange = null, "abort" === t ? u.abort() : "error" === t ? "number" != typeof u.status ? o(0, "error") : o(u.status, u.statusText) : o(We[u.status] || u.status, u.statusText, "text" !== (u.responseType || "text") || "string" != typeof u.responseText ? {
                                            binary: u.response
                                        } : {
                                            text: u.responseText
                                        }, u.getAllResponseHeaders()))
                                    }
                                }, u.onload = e(), n = u.onerror = u.ontimeout = e("error"), void 0 !== u.onabort ? u.onabort = n : u.onreadystatechange = function() {
                                    4 === u.readyState && r.setTimeout((function() {
                                        e && n()
                                    }))
                                }, e = e("abort");
                                try {
                                    u.send(t.hasContent && t.data || null)
                                } catch (t) {
                                    if (e) throw t
                                }
                            },
                            abort: function() {
                                e && e()
                            }
                        }
                    })), _.ajaxPrefilter((function(t) {
                        t.crossDomain && (t.contents.script = !1)
                    })), _.ajaxSetup({
                        accepts: {
                            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
                        },
                        contents: {
                            script: /\b(?:java|ecma)script\b/
                        },
                        converters: {
                            "text script": function(t) {
                                return _.globalEval(t), t
                            }
                        }
                    }), _.ajaxPrefilter("script", (function(t) {
                        void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
                    })), _.ajaxTransport("script", (function(t) {
                        var e, n;
                        if (t.crossDomain || t.scriptAttrs) return {
                            send: function(r, i) {
                                e = _("<script>").attr(t.scriptAttrs || {}).prop({
                                    charset: t.scriptCharset,
                                    src: t.url
                                }).on("load error", n = function(t) {
                                    e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                                }), x.head.appendChild(e[0])
                            },
                            abort: function() {
                                n && n()
                            }
                        }
                    }));
                    var Ve, Xe = [],
                        Ye = /(=)\?(?=&|$)|\?\?/;
                    _.ajaxSetup({
                        jsonp: "callback",
                        jsonpCallback: function() {
                            var t = Xe.pop() || _.expando + "_" + _e.guid++;
                            return this[t] = !0, t
                        }
                    }), _.ajaxPrefilter("json jsonp", (function(t, e, n) {
                        var i, o, a, u = !1 !== t.jsonp && (Ye.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(t.data) && "data");
                        if (u || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, u ? t[u] = t[u].replace(Ye, "$1" + i) : !1 !== t.jsonp && (t.url += (Ae.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
                            return a || _.error(i + " was not called"), a[0]
                        }, t.dataTypes[0] = "json", o = r[i], r[i] = function() {
                            a = arguments
                        }, n.always((function() {
                            void 0 === o ? _(r).removeProp(i) : r[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Xe.push(i)), a && y(o) && o(a[0]), a = o = void 0
                        })), "script"
                    })), v.createHTMLDocument = ((Ve = x.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ve.childNodes.length), _.parseHTML = function(t, e, n) {
                        return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (v.createHTMLDocument ? ((r = (e = x.implementation.createHTMLDocument("")).createElement("base")).href = x.location.href, e.head.appendChild(r)) : e = x), o = !n && [], (i = D.exec(t)) ? [e.createElement(i[1])] : (i = Et([t], e, o), o && o.length && _(o).remove(), _.merge([], i.childNodes)));
                        var r, i, o
                    }, _.fn.load = function(t, e, n) {
                        var r, i, o, a = this,
                            u = t.indexOf(" ");
                        return u > -1 && (r = ye(t.slice(u)), t = t.slice(0, u)), y(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && _.ajax({
                            url: t,
                            type: i || "GET",
                            dataType: "html",
                            data: e
                        }).done((function(t) {
                            o = arguments, a.html(r ? _("<div>").append(_.parseHTML(t)).find(r) : t)
                        })).always(n && function(t, e) {
                            a.each((function() {
                                n.apply(this, o || [t.responseText, e, t])
                            }))
                        }), this
                    }, _.expr.pseudos.animated = function(t) {
                        return _.grep(_.timers, (function(e) {
                            return t === e.elem
                        })).length
                    }, _.offset = {
                        setOffset: function(t, e, n) {
                            var r, i, o, a, u, s, l = _.css(t, "position"),
                                c = _(t),
                                f = {};
                            "static" === l && (t.style.position = "relative"), u = c.offset(), o = _.css(t, "top"), s = _.css(t, "left"), ("absolute" === l || "fixed" === l) && (o + s).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), y(e) && (e = e.call(t, n, _.extend({}, u))), null != e.top && (f.top = e.top - u.top + a), null != e.left && (f.left = e.left - u.left + i), "using" in e ? e.using.call(t, f) : c.css(f)
                        }
                    }, _.fn.extend({
                        offset: function(t) {
                            if (arguments.length) return void 0 === t ? this : this.each((function(e) {
                                _.offset.setOffset(this, t, e)
                            }));
                            var e, n, r = this[0];
                            return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(), n = r.ownerDocument.defaultView, {
                                top: e.top + n.pageYOffset,
                                left: e.left + n.pageXOffset
                            }) : {
                                top: 0,
                                left: 0
                            } : void 0
                        },
                        position: function() {
                            if (this[0]) {
                                var t, e, n, r = this[0],
                                    i = {
                                        top: 0,
                                        left: 0
                                    };
                                if ("fixed" === _.css(r, "position")) e = r.getBoundingClientRect();
                                else {
                                    for (e = this.offset(), n = r.ownerDocument, t = r.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === _.css(t, "position");) t = t.parentNode;
                                    t && t !== r && 1 === t.nodeType && ((i = _(t).offset()).top += _.css(t, "borderTopWidth", !0), i.left += _.css(t, "borderLeftWidth", !0))
                                }
                                return {
                                    top: e.top - i.top - _.css(r, "marginTop", !0),
                                    left: e.left - i.left - _.css(r, "marginLeft", !0)
                                }
                            }
                        },
                        offsetParent: function() {
                            return this.map((function() {
                                for (var t = this.offsetParent; t && "static" === _.css(t, "position");) t = t.offsetParent;
                                return t || at
                            }))
                        }
                    }), _.each({
                        scrollLeft: "pageXOffset",
                        scrollTop: "pageYOffset"
                    }, (function(t, e) {
                        var n = "pageYOffset" === e;
                        _.fn[t] = function(r) {
                            return $(this, (function(t, r, i) {
                                var o;
                                if (m(t) ? o = t : 9 === t.nodeType && (o = t.defaultView), void 0 === i) return o ? o[e] : t[r];
                                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i
                            }), t, r, arguments.length)
                        }
                    })), _.each(["top", "left"], (function(t, e) {
                        _.cssHooks[e] = $t(v.pixelPosition, (function(t, n) {
                            if (n) return n = Wt(t, e), It.test(n) ? _(t).position()[e] + "px" : n
                        }))
                    })), _.each({
                        Height: "height",
                        Width: "width"
                    }, (function(t, e) {
                        _.each({
                            padding: "inner" + t,
                            content: e,
                            "": "outer" + t
                        }, (function(n, r) {
                            _.fn[r] = function(i, o) {
                                var a = arguments.length && (n || "boolean" != typeof i),
                                    u = n || (!0 === i || !0 === o ? "margin" : "border");
                                return $(this, (function(e, n, i) {
                                    var o;
                                    return m(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? _.css(e, n, u) : _.style(e, n, i, u)
                                }), e, a ? i : void 0, a)
                            }
                        }))
                    })), _.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], (function(t, e) {
                        _.fn[e] = function(t) {
                            return this.on(e, t)
                        }
                    })), _.fn.extend({
                        bind: function(t, e, n) {
                            return this.on(t, null, e, n)
                        },
                        unbind: function(t, e) {
                            return this.off(t, null, e)
                        },
                        delegate: function(t, e, n, r) {
                            return this.on(e, t, n, r)
                        },
                        undelegate: function(t, e, n) {
                            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
                        },
                        hover: function(t, e) {
                            return this.mouseenter(t).mouseleave(e || t)
                        }
                    }), _.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), (function(t, e) {
                        _.fn[e] = function(t, n) {
                            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
                        }
                    }));
                    var Ze = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                    _.proxy = function(t, e) {
                        var n, r, i;
                        if ("string" == typeof e && (n = t[e], e = t, t = n), y(t)) return r = u.call(arguments, 2), (i = function() {
                            return t.apply(e || this, r.concat(u.call(arguments)))
                        }).guid = t.guid = t.guid || _.guid++, i
                    }, _.holdReady = function(t) {
                        t ? _.readyWait++ : _.ready(!0)
                    }, _.isArray = Array.isArray, _.parseJSON = JSON.parse, _.nodeName = k, _.isFunction = y, _.isWindow = m, _.camelCase = Z, _.type = M, _.now = Date.now, _.isNumeric = function(t) {
                        var e = _.type(t);
                        return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
                    }, _.trim = function(t) {
                        return null == t ? "" : (t + "").replace(Ze, "")
                    }, void 0 === (n = function() {
                        return _
                    }.apply(e, [])) || (t.exports = n);
                    var Ge = r.jQuery,
                        Ke = r.$;
                    return _.noConflict = function(t) {
                        return r.$ === _ && (r.$ = Ke), t && r.jQuery === _ && (r.jQuery = Ge), _
                    }, void 0 === i && (r.jQuery = r.$ = _), _
                }))
            },
            219: function(t, e, n) {
                var r = n(755);
                ! function(t) {
                    "use strict";
                    void 0 === t.Nextprot && (t.Nextprot = {}),
                        function() {
                            var n = function(t) {
                                t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                                var e = new RegExp("[\\?&]" + t + "=([^&#]*)").exec(location.search);
                                return null === e ? "" : decodeURIComponent(e[1].replace(/\+/g, " "))
                            };

                            function i(t, e, n) {
                                var r = new RegExp("(" + e + "=)[a-zA-Z0-9_]+", "ig");
                                return null !== t.match(r) ? t.replace(r, "$1" + n) : t + (-1 !== t.indexOf("?") ? "&" : "?") + e + "=" + n
                            }
                            var o = function(t) {
                                    return "NX_" !== t.substring(0, 3) && (t = "NX_" + t), t
                                },
                                a = n("env") || "pro",
                                u = "https://api.nextprot.org";
                            "pro" !== a && (u = "http://" + a + "-api.nextprot.org");
                            var s = u + "/sparql",
                                l = null,
                                c = null;

                            function f(t) {
                                var e = t;
                                return e = i(e, "clientInfo", c), e = i(e, "applicationName", l), Promise.resolve(r.getJSON(e))
                            }
                            var p = function(t, e) {
                                    var r = o(t || n("nxentry") || "NX_P01308"),
                                        i = u + "/entry/" + r;
                                    return e && (i += "/" + e), f(i)
                                },
                                h = function(t, e) {
                                    if (l = t, c = e, !t) throw "Please provide some application name  ex:  new Nextprot.Client('demo application for visualizing peptides', clientInformation);";
                                    if (!e) throw "Please provide some client information ex:  new Nextprot.Client(applicationName, 'Calipho SIB at Geneva');"
                                };
                            h.prototype.setApiBaseUrl = function(t) {
                                s = (u = t) + "/sparql"
                            }, h.prototype.setSparqlEndpoint = function(t) {
                                s = t
                            }, h.prototype.getEnvironment = function() {
                                return n("env") || "pro"
                            }, h.prototype.getApiBaseUrl = function() {
                                return u
                            }, h.prototype.getEntryName = function() {
                                return o(n("nxentry") || "NX_P01308")
                            }, h.prototype.getInputOption = function() {
                                return n("inputOption") || ""
                            }, h.prototype.changeEntry = function(t) {
                                var e = i(window.location.href, "nxentry", t.value);
                                window.location.href = e
                            }, h.prototype.getEntryforPeptide = function(t) {
                                return function(t, e) {
                                    return f(u + "/entries/search/peptide?peptide=" + t + "&modeIL=" + e)
                                }(t, "true").then((function(t) {
                                    return t
                                }))
                            };
                            var d, g = function(t) {
                                var e = "";
                                return t.map((function(t) {
                                    e += t + "\n"
                                })), e
                            };
                            h.prototype.getSparqlPrefixes = function() {
                                return d = d || f(u + "/sparql-prefixes").then(g)
                            }, h.prototype.executeSparql = function(t, e) {
                                return this.getSparqlPrefixes().then((function(n) {
                                    return f(s + "?output=json&query=" + encodeURIComponent(void 0 === e || e ? n + t : t))
                                }))
                            }, h.prototype.getEntryProperties = function(t) {
                                return p(t, "accession").then((function(t) {
                                    return t.entry.properties
                                }))
                            }, h.prototype.getProteinOverview = function(t) {
                                return p(t, "overview").then((function(t) {
                                    return t.entry.overview
                                }))
                            }, h.prototype.getProteinSequence = function(t) {
                                return p(t, "isoform").then((function(t) {
                                    return t.entry.isoforms
                                }))
                            }, h.prototype.getXrefs = function(t) {
                                return p(t, "xref").then((function(t) {
                                    return t.entry.xrefs
                                }))
                            }, h.prototype.getAnnotationsByCategory = function(t, e) {
                                return p(t, e).then((function(t) {
                                    return function(t) {
                                        var e = {},
                                            n = {};
                                        return t.entry.publications.forEach((function(t) {
                                            e[t.md5] = t
                                        })), t.entry.xrefs.forEach((function(t) {
                                            n[t.dbXrefId] = t
                                        })), {
                                            annot: t.entry.annotations,
                                            publi: e,
                                            xrefs: n
                                        }
                                    }(t)
                                }))
                            }, h.prototype.getEntry = function(t, e) {
                                return p(t, e).then((function(t) {
                                    return t.entry
                                }))
                            }, h.prototype.getEntryProperties = function(t) {
                                return p(t, "accession").then((function(t) {
                                    return t.entry.properties
                                }))
                            }, h.prototype.getIsoformMapping = function(t) {
                                return p(t, "isoform/mapping").then((function(t) {
                                    return t
                                }))
                            }, h.prototype.getGenomicMappings = function(t) {
                                return p(t, "genomic-mapping").then((function(t) {
                                    return t.entry.genomicMappings
                                }))
                            }, h.prototype.getPeptide = function(t) {
                                return console.warn("getPeptide is deprecated. use getAnnotationsByCategory(entry, 'peptide-mapping') instead "), p(t, "peptide-mapping").then((function(t) {
                                    return t.entry.peptideMappings
                                }))
                            }, h.prototype.getSrmPeptide = function(t) {
                                return console.warn("getSrmPeptide is deprecated. use getAnnotationsByCategory(entry, 'srm-peptide-mapping') instead "), p(t, "srm-peptide-mapping").then((function(t) {
                                    return t.entry.srmPeptideMappings
                                }))
                            }, h.prototype.getAntibody = function(t) {
                                return p(t, "antibody").then((function(t) {
                                    return t.entry.antibodyMappings
                                }))
                            }, e.Client = h, t.Nextprot.Client = h
                        }()
                }(this)
            },
            788: (t, e, n) => {
                var r = n(755),
                    i = {
                        checkIsoformMatch: function(t, e) {
                            return t.endsWith("-" + e)
                        },
                        getIsoforms: function(t) {
                            return t && t.length > 1 ? (t.sort(i.sortIsoformNames), t.forEach((function(t) {
                                console.log(t), t.synonyms && t.synonyms.length > 1 && t.synonyms.sort(i.sortByAlphabet)
                            })), t) : null
                        },
                        getORFNames: function(t) {
                            var e = [];
                            return "ORF" === t.category && e.push({
                                name: t.name
                            }), t.synonyms && t.synonyms.forEach((function(t) {
                                "ORF" === t.category && e.push({
                                    name: t.name
                                })
                            })), e.length && e.sort(i.sortByAlphabet), e
                        },
                        getSynonyms: function(t) {
                            var e = {};
                            for (var n in t && t.forEach((function(t) {
                                    e.hasOwnProperty(t.qualifier) ? e[t.qualifier].push(t.name) : e[t.qualifier] = [t.name]
                                })), e) e[n].sort(i.sortByAlphabet);
                            return e
                        },
                        sortSynonyms: function(t, e) {
                            e = e;
                            if ("string" != typeof(t = t)) t = t.name, e = e.name;
                            return t.length === e.length ? t.toLowerCase() > e.toLowerCase() : e.toLowerCase().length - t.toLowerCase().length
                        },
                        sortIsoformNames: function(t, e) {
                            if (parseInt(t.name.replace("Iso", "").replace(" ", ""))) {
                                var n = parseInt(t.name.replace("Iso", "").replace(" ", "")),
                                    r = parseInt(e.name.replace("Iso", "").replace(" ", ""));
                                return n > r ? 1 : n < r ? -1 : 0
                            }
                            return t.name > e.name
                        },
                        sortByAlphabet: function(t, e) {
                            return (t = "string" == typeof t ? t : t.name ? t.name : null) < (e = "string" == typeof e ? e : e.name ? e.name : null) ? -1 : t > e ? 1 : 0
                        },
                        getRecommendedName: function(t) {
                            var e = "";
                            return "gene name" === t.category && !0 === t.main && (e = t.name), e
                        },
                        getAlternativeNames: function(t) {
                            var e = [];
                            return t && t.forEach((function(t) {
                                var n = !1,
                                    r = "name" === t.type ? "Alternative name" : t.type;
                                for (var o in e) e[o].type === r && (e[o].names.push({
                                    name: t.name,
                                    synonyms: i.getSynonyms(t.synonyms)
                                }), n = !0);
                                n || e.push({
                                    type: r,
                                    names: [{
                                        name: t.name,
                                        synonyms: i.getSynonyms(t.synonyms)
                                    }]
                                })
                            })), e.map((function(t) {
                                t.names.sort(i.sortByAlphabet)
                            })), e.forEach((function(t) {
                                "Alternative name" === t.type && t.names.length > 1 && (t.type = "Alternative names")
                            })), e
                        },
                        getMainSynonym: function(t) {
                            var e, n = t.filter((function(t) {
                                return "full" === t.qualifier
                            }));
                            if (n.length) {
                                var r = n.sort((function(t, e) {
                                    return e.name.length - t.name.length
                                }))[0];
                                e = {
                                    name: r.name,
                                    synonym: r.synonyms ? r.synonyms.sort(i.sortByAlphabet)[0].name : null
                                }
                            }
                            return e
                        },
                        getMainShort: function(t) {
                            return "h" === t[t.length - 1].charAt(0) && t[t.length - 2] ? t[t.length - 2] : t[t.length - 1]
                        },
                        getFamily: function(t, e) {
                            return "Superfamily" === t.level && (e.superfamily = {
                                name: t.name,
                                accession: t.accession
                            }), "Family" === t.level && (e.family = {
                                name: t.name,
                                accession: t.accession
                            }), "Subfamily" === t.level && (e.subfamily = {
                                name: t.name,
                                accession: t.accession
                            }), t.parent && i.getFamily(t.parent, e), e
                        },
                        getProteinExistence: function(t) {
                            var e = t.split("_").join(" ").toLowerCase();
                            switch (mainSentence = "Entry whose protein(s) existence is ", based = "based on ", e) {
                                case "uncertain":
                                case "inferred from homology":
                                    return mainSentence + e;
                                default:
                                    return mainSentence + based + e
                            }
                        },
                        getSequenceForIsoform: function(t, e) {
                            var n = null;
                            return "number" == typeof e ? t.forEach((function(t) {
                                t.uniqueName.endsWith("-" + e) && (n = t.sequence)
                            })) : t.forEach((function(t) {
                                if (t.uniqueName === e) return t.sequence
                            })), n
                        },
                        getLinkForFeature: function(t, e, n) {
                            return "Peptide" !== n && "SRM Peptide" !== n ? "antibody" === n ? "<a href='" + t + "'>" + e + "</a>" : t ? "<a href='" + ("http://www.nextprot.org/db/term/" + t) + "'>" + e + "</a>" : "publication" === n ? "<a href='" + ("http://www.nextprot.org/db/publication/" + t) + "'>" + e + "</a>" : e || "" : e ? "<a href='" + ("https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas/GetPeptide?searchWithinThis=Peptide+Name&searchForThis=" + e + ";organism_name=Human") + "'>" + e + "</a>" : void 0
                        },
                        getDescription: function(t, e) {
                            if ("Peptide" === e || "SRM Peptide" === e) {
                                for (var n in t.evidences)
                                    if ("PeptideAtlas" === t.evidences[n].resourceDb || "SRMAtlas" === t.evidences[n].resourceDb) return t.evidences[n].resourceAccession;
                                return ""
                            }
                            return t.description
                        },
                        getEvidenceCodeName: function(t, e) {
                            return "Peptide" === e ? "EXP" : t.evidenceCodeName
                        },
                        getAssignedBy: function(t) {
                            return "Uniprot" === t ? "UniprotKB" : t.startsWith("MD") || t.startsWith("PM") ? "neXtProt" : t
                        },
                        getProteotypicity: function(t) {
                            if (t) {
                                var e = !0;
                                return t.forEach((function(t) {
                                    "is proteotypic" === t.name && "N" === t.value && (e = !1)
                                })), e
                            }
                            return !0
                        },
                        convertMappingsToIsoformMap: function(t, e, n) {
                            var o = r.extend([], t),
                                a = !1;
                            t.hasOwnProperty("annot") && (a = !0, o = r.extend([], t.annot));
                            var u = {};
                            for (var s in o.forEach((function(o) {
                                    if (o.hasOwnProperty("targetingIsoformsMap")) {
                                        for (var s in o.targetingIsoformsMap)
                                            if (o.targetingIsoformsMap.hasOwnProperty(s)) {
                                                var l = o.targetingIsoformsMap[s].firstPosition,
                                                    c = o.targetingIsoformsMap[s].lastPosition,
                                                    f = i.getDescription(o, e),
                                                    p = i.getLinkForFeature(o.cvTermAccessionCode, f, e),
                                                    h = "GOLD" !== o.qualityQualifier ? o.qualityQualifier.toLowerCase() : "",
                                                    d = i.getProteotypicity(o.properties),
                                                    g = o.evidences.map((function(n) {
                                                        var r = null,
                                                            o = null;
                                                        return a ? (t.publi[n.publicationMD5] && (r = n.publicationMD5), t.xrefs[n.resourceId] && (o = t.xrefs[n.resourceId]), {
                                                            evidenceCodeName: i.getEvidenceCodeName(n, e),
                                                            assignedBy: i.getAssignedBy(n.assignedBy),
                                                            resourceDb: n.resourceDb,
                                                            externalDb: "UniProt" !== n.resourceDb,
                                                            publicationMD5: n.publicationMD5,
                                                            title: r ? i.getLinkForFeature(t.publi[r].publicationId, t.publi[r].title, "publication") : "",
                                                            authors: r ? t.publi[r].authors.map((function(t) {
                                                                return {
                                                                    lastName: t.lastName,
                                                                    initials: t.initials
                                                                }
                                                            })) : [],
                                                            journal: r && t.publi[r].cvJournal ? t.publi[r].cvJournal.name : "",
                                                            volume: r ? t.publi[r].volume : "",
                                                            year: r ? t.publi[r].publicationYear : "",
                                                            firstPage: r ? t.publi[r].firstPage : "",
                                                            lastPage: r ? "" === t.publi[r].lastPage ? t.publi[r].firstPage : t.publi[r].lastPage : "",
                                                            pubId: r ? t.publi[r].publicationId : "",
                                                            abstract: r ? t.publi[r].abstractText : "",
                                                            dbXrefs: r ? t.publi[r].dbXrefs.map((function(t) {
                                                                return {
                                                                    name: "DOI" === t.databaseName ? "Full Text" : t.databaseName,
                                                                    url: t.resolvedUrl,
                                                                    accession: t.accession
                                                                }
                                                            })) : [],
                                                            crossRef: o ? {
                                                                dbName: o.databaseName,
                                                                name: o.accession,
                                                                url: o.resolvedUrl
                                                            } : null
                                                        }) : {
                                                            evidenceCodeName: i.getEvidenceCodeName(n, e),
                                                            assignedBy: i.getAssignedBy(n.assignedBy),
                                                            publicationMD5: n.publicationMD5,
                                                            title: "",
                                                            authors: [],
                                                            journal: "",
                                                            volume: "",
                                                            abstract: ""
                                                        }
                                                    })),
                                                    v = !1;
                                                if (o.hasOwnProperty("variant") && !r.isEmptyObject(o.variant) && (p = "<span style='color:#00C500'>" + o.variant.original + " → " + o.variant.variant + "</span>", f = '<span style="color:#00C500">' + o.variant.original + " → " + o.variant.variant + "</span>  ", v = !0, o.description)) {
                                                    var y = /\[(.*?)\]/g.exec(o.description),
                                                        m = o.description;
                                                    if (y) {
                                                        var x = y[1].split(":");
                                                        m = o.description.replace(/(\[.*?\])/g, i.getLinkForFeature(x[2], x[0]))
                                                    }
                                                    p += " ; " + m
                                                }
                                                u[s] || (u[s] = []), u[s].push({
                                                    start: l,
                                                    end: c,
                                                    length: c - l + 1,
                                                    id: e.replace(/\s/g, "") + "_" + l.toString() + "_" + c.toString(),
                                                    description: f,
                                                    quality: h,
                                                    proteotypicity: d,
                                                    category: e,
                                                    group: n,
                                                    link: p,
                                                    evidenceLength: g.length,
                                                    source: g,
                                                    variant: v
                                                })
                                            }
                                    } else if (o.hasOwnProperty("isoformSpecificity"))
                                        for (var s in o.isoformSpecificity)
                                            if (o.isoformSpecificity.hasOwnProperty(s))
                                                for (var b = 0; b < o.isoformSpecificity[s].positions.length; b++) {
                                                    l = o.isoformSpecificity[s].positions[b].first, c = o.isoformSpecificity[s].positions[b].second, f = "", p = "", g = [];
                                                    if (o.hasOwnProperty("evidences") && (g = o.evidences.map((function(t) {
                                                            return {
                                                                evidenceCodeName: t.evidenceCodeName,
                                                                assignedBy: t.assignedBy,
                                                                publicationMD5: t.publicationMD5
                                                            }
                                                        }))), o.hasOwnProperty("xrefs")) f = o.xrefs[0].accession, p = i.getLinkForFeature(o.xrefs[0].resolvedUrl, f, "antibody");
                                                    else
                                                        for (ev in f = o.evidences[0].accession, o.evidences)
                                                            if ("PeptideAtlas" === o.evidences[ev].databaseName || "SRMAtlas" === o.evidences[ev].databaseName) {
                                                                f = o.evidences[ev].accession, p = i.getLinkForFeature(f, f, "peptide");
                                                                break
                                                            } u[s] || (u[s] = []), u[s].push({
                                                        start: l,
                                                        end: c,
                                                        length: c - l,
                                                        id: e.replace(/\s/g, "") + "_" + l.toString() + "_" + c.toString(),
                                                        description: f,
                                                        category: e,
                                                        group: n,
                                                        link: p,
                                                        evidenceLength: g.length,
                                                        source: g
                                                    })
                                                }
                                })), u) u[s].sort((function(t, e) {
                                return t.start === e.start ? t.length === e.length ? e.id > t.id : e.length - t.length : null === t.end ? 1 : t.start - e.start
                            }));
                            return u
                        },
                        convertPublications: function(t, e) {
                            for (var n in t) e[t[n].md5] = {
                                title: t[n].title,
                                author: t[n].authors.map((function(t) {
                                    return {
                                        lastName: t.lastName,
                                        initials: t.initials
                                    }
                                })),
                                journal: t[n].cvJournal.name,
                                volume: t[n].volume,
                                abstract: t[n].abstractText
                            }
                        },
                        convertExonsMappingsToIsoformMap: function(t) {
                            return t.map((function(t) {
                                return {
                                    uniqueName: t.uniqueName,
                                    isoMainName: t.isoMainName,
                                    mapping: t.positionsOfIsoformOnReferencedGene.map((function(t) {
                                        return {
                                            start: t.key,
                                            end: t.value
                                        }
                                    }))
                                }
                            }))
                        }
                    },
                    o = {
                        convertNXAnnotations: function(t, e) {
                            if (!t) return "Cannot load this";
                            var n = {};
                            for (name in t) {
                                var i = r.extend({}, e);
                                i.data = t[name].map((function(t) {
                                    return {
                                        x: t.start,
                                        y: t.end,
                                        id: t.id,
                                        category: t.category,
                                        description: t.description
                                    }
                                })), n[name] = i
                            }
                            return n
                        }
                    };
                "object" == typeof t.exports && (t.exports = {
                    NXUtils: i,
                    NXViewerUtils: o
                })
            },
            892: (t, e, n) => {
                "use strict";
                n.r(e), n.d(e, {
                    default: () => u
                });
                var r = n(379),
                    i = n.n(r),
                    o = n(174),
                    a = {
                        insert: "head",
                        singleton: !1
                    };
                i()(o.Z, a);
                const u = o.Z.locals || {}
            },
            379: (t, e, n) => {
                "use strict";
                var r, i = function() {
                        return void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r
                    },
                    o = function() {
                        var t = {};
                        return function(e) {
                            if (void 0 === t[e]) {
                                var n = document.querySelector(e);
                                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                    n = n.contentDocument.head
                                } catch (t) {
                                    n = null
                                }
                                t[e] = n
                            }
                            return t[e]
                        }
                    }(),
                    a = [];

                function u(t) {
                    for (var e = -1, n = 0; n < a.length; n++)
                        if (a[n].identifier === t) {
                            e = n;
                            break
                        } return e
                }

                function s(t, e) {
                    for (var n = {}, r = [], i = 0; i < t.length; i++) {
                        var o = t[i],
                            s = e.base ? o[0] + e.base : o[0],
                            l = n[s] || 0,
                            c = "".concat(s, " ").concat(l);
                        n[s] = l + 1;
                        var f = u(c),
                            p = {
                                css: o[1],
                                media: o[2],
                                sourceMap: o[3]
                            }; - 1 !== f ? (a[f].references++, a[f].updater(p)) : a.push({
                            identifier: c,
                            updater: v(p, e),
                            references: 1
                        }), r.push(c)
                    }
                    return r
                }

                function l(t) {
                    var e = document.createElement("style"),
                        r = t.attributes || {};
                    if (void 0 === r.nonce) {
                        var i = n.nc;
                        i && (r.nonce = i)
                    }
                    if (Object.keys(r).forEach((function(t) {
                            e.setAttribute(t, r[t])
                        })), "function" == typeof t.insert) t.insert(e);
                    else {
                        var a = o(t.insert || "head");
                        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                        a.appendChild(e)
                    }
                    return e
                }
                var c, f = (c = [], function(t, e) {
                    return c[t] = e, c.filter(Boolean).join("\n")
                });

                function p(t, e, n, r) {
                    var i = n ? "" : r.media ? "@media ".concat(r.media, " {").concat(r.css, "}") : r.css;
                    if (t.styleSheet) t.styleSheet.cssText = f(e, i);
                    else {
                        var o = document.createTextNode(i),
                            a = t.childNodes;
                        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
                    }
                }

                function h(t, e, n) {
                    var r = n.css,
                        i = n.media,
                        o = n.sourceMap;
                    if (i ? t.setAttribute("media", i) : t.removeAttribute("media"), o && "undefined" != typeof btoa && (r += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), t.styleSheet) t.styleSheet.cssText = r;
                    else {
                        for (; t.firstChild;) t.removeChild(t.firstChild);
                        t.appendChild(document.createTextNode(r))
                    }
                }
                var d = null,
                    g = 0;

                function v(t, e) {
                    var n, r, i;
                    if (e.singleton) {
                        var o = g++;
                        n = d || (d = l(e)), r = p.bind(null, n, o, !1), i = p.bind(null, n, o, !0)
                    } else n = l(e), r = h.bind(null, n, e), i = function() {
                        ! function(t) {
                            if (null === t.parentNode) return !1;
                            t.parentNode.removeChild(t)
                        }(n)
                    };
                    return r(t),
                        function(e) {
                            if (e) {
                                if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
                                r(t = e)
                            } else i()
                        }
                }
                t.exports = function(t, e) {
                    (e = e || {}).singleton || "boolean" == typeof e.singleton || (e.singleton = i());
                    var n = s(t = t || [], e);
                    return function(t) {
                        if (t = t || [], "[object Array]" === Object.prototype.toString.call(t)) {
                            for (var r = 0; r < n.length; r++) {
                                var i = u(n[r]);
                                a[i].references--
                            }
                            for (var o = s(t, e), l = 0; l < n.length; l++) {
                                var c = u(n[l]);
                                0 === a[c].references && (a[c].updater(), a.splice(c, 1))
                            }
                            n = o
                        }
                    }
                }
            },
            228: (t, e, n) => {
                var r = n(662),
                    i = n(755);
                "object" == typeof t.exports && (t.exports = function(t, e, n) {
                    var o = this;
                    this.events = {
                        FEATURE_SELECTED_EVENT: "feature-viewer-position-selected",
                        FEATURE_DESELECTED_EVENT: "feature-viewer-position-deselected",
                        ZOOM_EVENT: "feature-viewer-zoom-altered"
                    }, e = e;
                    var a, u = document.getElementById(e.substring(1)),
                        s = (t = t, Number.isInteger(t) ? t : null),
                        l = s | t.length,
                        c = [],
                        f = {
                            showSequence: !1,
                            brushActive: !1,
                            verticalLine: !1,
                            dottedSequence: !0
                        },
                        p = {
                            start: 1,
                            end: l
                        };
                    n && n.offset && (p = n.offset).start < 1 && (p.start = 1, console.warn("WARNING ! offset.start should be > 0. Thus, it has been reset to 1."));
                    var h, d, g, v, y = 0,
                        m = [],
                        x = 20,
                        b = 0,
                        w = 0,
                        M = 50,
                        E = {
                            length: p.end - p.start,
                            start: p.start,
                            end: p.end
                        },
                        _ = {},
                        A = !0;

                    function T(t, e) {
                        _ !== {} && r.select(_.id).style("fill", _.originalColor), "path" !== e.type && "line" !== e.type && (_ = {
                            id: t,
                            originalColor: r.select(t).style("fill") || e.color
                        }, r.select(t).style("fill", "orangered"))
                    }
                    r.select(e).style("position", "relative").style("padding", "0px").style("z-index", "2");
                    var S = 10,
                        N = 20,
                        C = 20,
                        k = 110,
                        D = i(e).width() - k - N - 17,
                        L = 600 - S - C,
                        O = r.scale.linear().domain([p.start, p.end]).range([5, D - 5]),
                        q = r.scale.linear().domain([0, D]).range([p.start, p.end]);

                    function j(t, e) {
                        for (var n = t - 110, r = "", i = 0; i < e.length; i++)
                            if (O(e[i].x) < n && O(e[i + 1].x) > n) {
                                r = n - O(e[i].x) < O(e[i + 1].x) - n ? e[i] : e[i + 1];
                                break
                            } return r
                    }
                    r.helper = {}, r.helper.tooltip = function(t) {
                        var u, s, l = r.select(e).node(),
                            c = n.tooltipColor ? n.tooltipColor : "orangered";

                        function p(n) {
                            n.on("mouseover.tooltip", (function(n, i) {
                                r.select("body").selectAll("div.tooltip").remove();
                                var o = r.mouse(l),
                                    a = o[0] > D;
                                if (a ? u = r.select(e).append("div").attr("class", "tooltip3") : (u = r.select(e).append("div").attr("class", "tooltip2")).style({
                                        left: o[0] - 15 + "px"
                                    }), u.style({
                                        bottom: l.offsetHeight - o[1] + 16 + "px",
                                        "background-color": "#eee",
                                        width: "auto",
                                        "max-width": "170px",
                                        height: "auto",
                                        "max-height": "68px",
                                        padding: "5px",
                                        font: "10px sans-serif",
                                        "text-align": "center",
                                        position: "absolute",
                                        "z-index": 45,
                                        "box-shadow": "0 1px 2px 0 #656565"
                                    }), "path" === t.type) {
                                    var s = '<p style="margin:2px;font-weight:700;color:' + c + '">' + n[0].x + "&#x256d;&#x256e;" + n[1].x + "</p>";
                                    if (n.description) var f = '<p style="margin:2px;color:' + c + ';font-size:9px">' + n.description + "</p>";
                                    else f = ""
                                } else if ("line" === t.type) {
                                    var p = j(o[0], n);
                                    p.description ? (s = '<p style="margin:2px;font-weight:700;color:' + c + '">' + p.x + " : <span> " + p.y + "</span></p>", f = '<p style="margin:2px;color:' + c + ';font-size:9px">' + p.description + "</p>") : (s = '<p style="margin:2px;color:' + c + '">position : <span id="tLineX">' + p.x + "</span></p>", f = '<p style="margin:2px;color:' + c + '">count : <span id="tLineC">' + p.y + "</span></p>")
                                } else "unique" === t.type || n.x === n.y ? (s = '<p style="margin:2px;font-weight:700;color:' + c + '">' + n.x + "</p>", f = n.description ? '<p style="margin:2px;color:' + c + ';font-size:9px">' + n.description + "</p>" : "") : (s = '<p style="margin:2px;font-weight:700;color:' + c + '">' + n.x + " - " + n.y + "</p>", f = n.description ? '<p style="margin:2px;color:' + c + ';font-size:9px">' + n.description + "</p>" : "");
                                u.html(s + f), a && u.style({
                                    left: o[0] + 10 - u.node().getBoundingClientRect().width + "px"
                                })
                            })).on("mousemove.tooltip", (function(e, n) {
                                if ("line" === t.type) {
                                    var i = j((s = r.mouse(l))[0], e);
                                    if (i.description) var o = '<p style="margin:2px;color:' + c + '">' + i.x + " : <span> " + i.y + "</span></p>",
                                        a = '<p style="margin:2px;color:' + c + ';font-size:9px">' + i.description + "</p>";
                                    else o = '<p style="margin:2px;color:' + c + '">position : <span id="tLineX">' + i.x + "</span></p>", a = '<p style="margin:2px;color:' + c + '">count : <span id="tLineC">' + i.y + "</span></p>";
                                    u.html(o + a)
                                }
                                var s;
                                void 0 !== u && ((s = r.mouse(l))[0] > D ? (u.attr("class", "tooltip3"), u.style({
                                    left: s[0] + 10 - u.node().getBoundingClientRect().width + "px",
                                    bottom: l.offsetHeight - s[1] + 16 + "px"
                                })) : (u.attr("class", "tooltip2"), u.style({
                                    left: s[0] - 15 + "px",
                                    bottom: l.offsetHeight - s[1] + 16 + "px"
                                })))
                            })).on("mouseout.tooltip", (function(t, e) {
                                u.remove()
                            })).on("click", (function(n, u) {
                                var c, p, h, g, v;
                                if ("text" === this.nodeName) {
                                    var y = "#" + this.previousSibling.id;
                                    "#" !== y.nodeName && T(y, t)
                                } else T(this, t);
                                var m = f.brushActive ? r.select(".background").attr("width") : d.node().getBBox().width;
                                if (r.select("body").selectAll("div.selectedRect").remove(), s = r.select(e).append("div").attr("class", "selectedRect"), "path" === t.type ? (c = n[0].x, p = n[1].x) : "line" === t.type ? (c = (v = j(r.mouse(l)[0], n)).x - .5, p = v.x + .5) : "unique" === t.type || n.x === n.y ? (c = n.x - .4, p = n.y + .4) : (c = n.x, p = n.y), O(c) < 0 && O(p) > m ? (h = k, g = parseInt(m) + 5) : O(c) < 0 ? (h = k, g = O(p)) : O(p) > m ? (h = O(c) + k, g = parseInt(m) - O(c), g += 5) : (h = O(c) + k, g = O(p) - O(c)), s.style({
                                        left: h + "px",
                                        top: i(e + " .svgHeader").length ? "60px" : "10px",
                                        "background-color": "rgba(0, 0, 0, 0.2)",
                                        width: g + "px",
                                        height: x + 50 + "px",
                                        position: "absolute",
                                        "z-index": -1,
                                        "box-shadow": "0 1px 2px 0 #656565"
                                    }), CustomEvent) {
                                    var b = new CustomEvent(o.events.FEATURE_SELECTED_EVENT, {
                                        detail: {
                                            start: "path" === t.type ? n[0].x : "line" === t.type ? v.x : n.x,
                                            end: "path" === t.type ? n[1].x : "line" === t.type ? v.y : n.y,
                                            id: "path" === t.type ? n[0].id : "line" === t.type ? v.id : n.id,
                                            description: "path" === t.type ? n[0].description : "line" === t.type ? v.description : n.description
                                        }
                                    });
                                    a.dispatchEvent(b)
                                } else console.warn("CustomEvent is not defined....");
                                o.trigger && o.trigger(o.events.FEATURE_SELECTED_EVENT, {
                                    start: "path" === t.type ? n[0].x : "line" === t.type ? v.x : n.x,
                                    end: "path" === t.type ? n[1].x : "line" === t.type ? v.y : n.y,
                                    id: "path" === t.type ? n[0].id : "line" === t.type ? v.id : n.id,
                                    description: "path" === t.type ? n[0].description : "line" === t.type ? v.description : n.description
                                })
                            }))
                        }
                        return p.attr = function(t) {
                            return arguments.length ? (attrs = t, this) : attrs
                        }, p.style = function(t) {
                            return arguments.length ? (styles = t, this) : styles
                        }, p
                    };
                    var P = function(t) {
                            return O(t.x)
                        },
                        R = function(t) {
                            return D / t > 5
                        },
                        z = function(t) {
                            return O(t.y) - O(t.x)
                        };

                    function H(t) {
                        return t.x === t.y ? O(t.x - .4) : O(t.x)
                    }

                    function I(t) {
                        return t.x === t.y ? O(t.x + .4) - O(t.x - .4) < 2 ? 2 : O(t.x + .4) - O(t.x - .4) : O(t.y) - O(t.x)
                    }

                    function F(t) {
                        var e = [];
                        return t.forEach((function(t) {
                            if (e === []) e.push(t.y), t.level = 0;
                            else {
                                for (var n = !1, r = 0; r < e.length; r++)
                                    if (t.x > e[r]) {
                                        n = !0, t.level = r, e[r] = t.y;
                                        break
                                    }! 1 === n && (e.push(t.y), t.level = e.length - 1)
                            }
                        })), e.length
                    }
                    this.onFeatureSelected = function(t) {
                        a.addEventListener(o.events.FEATURE_SELECTED_EVENT, t)
                    }, this.onFeatureDeselected = function(t) {
                        a.addEventListener(o.events.FEATURE_DESELECTED_EVENT, t)
                    }, this.onZoom = function(t) {
                        a.addEventListener(o.events.ZOOM_EVENT, t)
                    };
                    var U = r.svg.line().interpolate("step-before").x((function(t) {
                            return O(t.x)
                        })).y((function(t) {
                            return 10 * -t.y + y
                        })),
                        B = r.svg.line().x((function(t) {
                            return O(t.x)
                        })).y((function(t) {
                            return 10 * W(-t.y) + y
                        })),
                        W = r.scale.linear().domain([0, -30]).range([0, -20]),
                        $ = r.svg.line().interpolate("linear").x((function(t) {
                            return O(t.x)
                        })).y((function(t) {
                            return t.y + 6
                        })),
                        V = r.svg.axis().scale(O).tickFormat(r.format("d")).orient("bottom");

                    function X(t, e, n) {
                        if ("number" != typeof t || t < -1 || t > 1 || "string" != typeof e || "r" != e[0] && "#" != e[0] || "string" != typeof n && void 0 !== n) return null;
                        this.sbcRip || (this.sbcRip = function(t) {
                            var e = t.length,
                                n = new Object;
                            if (e > 9) {
                                if ((t = t.split(",")).length < 3 || t.length > 4) return null;
                                n[0] = r(t[0].slice(4)), n[1] = r(t[1]), n[2] = r(t[2]), n[3] = t[3] ? parseFloat(t[3]) : -1
                            } else {
                                if (8 == e || 6 == e || e < 4) return null;
                                e < 6 && (t = "#" + t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + (e > 4 ? t[4] + "" + t[4] : "")), t = r(t.slice(1), 16), n[0] = t >> 16 & 255, n[1] = t >> 8 & 255, n[2] = 255 & t, n[3] = 9 == e || 5 == e ? i((t >> 24 & 255) / 255 * 1e4) / 1e4 : -1
                            }
                            return n
                        });
                        var r = parseInt,
                            i = Math.round,
                            o = e.length > 9,
                            a = (o = "string" == typeof n ? n.length > 9 || "c" == n && !o : o, t < 0),
                            u = (t = a ? -1 * t : t, n = n && "c" != n ? n : a ? "#000000" : "#FFFFFF", sbcRip(e)),
                            s = sbcRip(n);
                        return u && s ? o ? "rgb(" + i((s[0] - u[0]) * t + u[0]) + "," + i((s[1] - u[1]) * t + u[1]) + "," + i((s[2] - u[2]) * t + u[2]) + (u[3] < 0 && s[3] < 0 ? ")" : "," + (u[3] > -1 && s[3] > -1 ? i(1e4 * ((s[3] - u[3]) * t + u[3])) / 1e4 : s[3] < 0 ? u[3] : s[3]) + ")") : "#" + (4294967296 + 16777216 * (u[3] > -1 && s[3] > -1 ? i(255 * ((s[3] - u[3]) * t + u[3])) : s[3] > -1 ? i(255 * s[3]) : u[3] > -1 ? i(255 * u[3]) : 255) + 65536 * i((s[0] - u[0]) * t + u[0]) + 256 * i((s[1] - u[1]) * t + u[1]) + i((s[2] - u[2]) * t + u[2])).toString(16).slice(u[3] > -1 || s[3] > -1 ? 1 : 3) : null
                    }

                    function Y(t) {
                        h.attr("height", t + 60 + "px"), h.select("clippath rect").attr("height", t + 60 + "px")
                    }
                    var Z = r.scale.ordinal().domain([0, m.length]).rangeRoundBands([0, 500], .1);

                    function G() {
                        (v = g.selectAll(".yaxis").data(m).enter().append("g")).append("polygon").attr("class", (function(t) {
                            return t.filter ? t.filter.split(" ").join("_") + "Arrow" : "Arrow"
                        })).style("stroke", "").style("fill", "#DFD5D3").attr("points", (function(t) {
                            return k - 105 + "," + (t.y - 3) + ", " + (k - 105) + "," + (t.y + 12) + ", " + (k - 15) + "," + (t.y + 12) + ", " + (k - 7) + "," + (t.y + 4.5) + ", " + (k - 15) + "," + (t.y - 3)
                        })), v.append("text").attr("class", "yaxis").attr("text-anchor", "start").attr("x", (function() {
                            return k - 102
                        })).attr("y", (function(t) {
                            return t.y + 8
                        })).text((function(t) {
                            return t.title
                        }))
                    }

                    function K(t) {
                        t.on("mousedown", (function() {
                            brush_elm = h.select(".brush").node(), new_click_event = new Event("mousedown"), new_click_event.pageX = r.event.pageX, new_click_event.clientX = r.event.clientX, new_click_event.pageY = r.event.pageY, new_click_event.clientY = r.event.clientY, brush_elm && brush_elm.dispatchEvent(new_click_event)
                        }))
                    }
                    r.svg.axis().scale(Z).tickValues(m).tickFormat((function(t) {
                        return t
                    })).orient("left");
                    var Q = function(t) {
                            t.data.sort((function(t, e) {
                                return t.x - e.x
                            }));
                            var e = F(t.data);
                            t.data = t.data.map((function(t) {
                                return [{
                                    x: t.x,
                                    y: 0,
                                    id: t.id,
                                    description: t.description,
                                    color: t.color
                                }, {
                                    x: t.y,
                                    y: t.level + 1,
                                    id: t.id
                                }, {
                                    x: t.y,
                                    y: 0,
                                    id: t.id
                                }]
                            })), y = 10 * e + 5, t.height = 10 * e + 5
                        },
                        J = function(t) {
                            t.height || (t.height = 10);
                            var e = parseInt(t.height),
                                n = 0;
                            for (var r in t.data) {
                                t.data[r].sort((function(t, e) {
                                    return t.x - e.x
                                })), 0 !== t.data[r][0].y && t.data[r].unshift({
                                    x: t.data[r][0].x - 1,
                                    y: 0
                                }), 0 !== t.data[r][t.data[r].length - 1].y && t.data[r].push({
                                    x: t.data[r][t.data[r].length - 1].x + 1,
                                    y: 0
                                });
                                var i = Math.max.apply(Math, t.data[r].map((function(t) {
                                    return Math.abs(t.y)
                                })));
                                n = i > n ? i : n, t.data[r] = [t.data[r].map((function(t) {
                                    return {
                                        x: t.x,
                                        y: t.y,
                                        id: t.id,
                                        description: t.description
                                    }
                                }))]
                            }
                            W.range([0, -e]).domain([0, -n]), y = 10 * e + 5, t.level = n, t.shift = 10 * e + 5
                        },
                        tt = function(t) {
                            t.data.sort((function(t, e) {
                                return t.x - e.x
                            })), b = F(t.data), y = 10 * b + 5
                        },
                        et = {
                            typeIdentifier: function(t) {
                                if ("rect" === t.type) tt(t), m.push({
                                    title: t.name,
                                    y: x,
                                    filter: t.filter
                                }), et.rectangle(t, x);
                                else if ("text" === t.type) et.sequence(t.data, x), m.push({
                                    title: t.name,
                                    y: x,
                                    filter: t.filter
                                }), O.range([5, D - 5]);
                                else if ("unique" === t.type) et.unique(t, x), m.push({
                                    title: t.name,
                                    y: x,
                                    filter: t.filter
                                });
                                else if ("multipleRect" === t.type) tt(t), et.multipleRect(t, x, b), m.push({
                                    title: t.name,
                                    y: x,
                                    filter: t.filter
                                }), x += 10 * (b - 1);
                                else if ("path" === t.type) Q(t), et.path(t, x), x += y, m.push({
                                    title: t.name,
                                    y: x - 10,
                                    filter: t.filter
                                });
                                else if ("line" === t.type) {
                                    Array.isArray(t.data[0]) || (t.data = [t.data]), Array.isArray(t.color) || (t.color = [t.color]);
                                    var e = !1;
                                    t.data.forEach((function(t) {
                                        t.filter((function(t) {
                                            return t.y < 0
                                        })).length && (e = !0)
                                    })), J(t), et.line(t, x), x += y, m.push({
                                        title: t.name,
                                        y: x - 10,
                                        filter: t.filter
                                    }), x += e ? y - 5 : 0
                                }
                            },
                            sequence: function(t, e, n) {
                                n || (n = 0), d.append("g").attr("class", "seqGroup").selectAll(".AA").data(t).enter().append("text").attr("clip-path", "url(#clip)").attr("class", "AA").attr("text-anchor", "middle").attr("x", (function(t, e) {
                                    return O.range([5, D - 5])(e + n)
                                })).attr("y", e).attr("font-size", "10px").attr("font-family", "monospace").text((function(t, e) {
                                    return t
                                }))
                            },
                            sequenceLine: function() {
                                f.dottedSequence && d.selectAll(".sequenceLine").data([
                                    [{
                                        x: 1,
                                        y: 12
                                    }, {
                                        x: l,
                                        y: 12
                                    }]
                                ]).enter().append("path").attr("clip-path", "url(#clip)").attr("d", $).attr("class", "sequenceLine").style("z-index", "0").style("stroke", "black").style("stroke-dasharray", "1,3").style("stroke-width", "1px").style("stroke-opacity", 0).transition().duration(500).style("stroke-opacity", 1)
                            },
                            rectangle: function(t, e) {
                                t.height || (t.height = 12);
                                for (var n = t.height, i = n + n / 3, o = n / 2 - 6, a = d.append("g").attr("class", "rectangle").attr("transform", "translate(0," + e + ")"), u = [], s = 0; s < b; s++) u.push([{
                                    x: 1,
                                    y: s * i + o
                                }, {
                                    x: l,
                                    y: s * i + o
                                }]);
                                a.selectAll(".line" + t.className).data(u).enter().append("path").attr("d", $).attr("class", (function() {
                                    return "line" + t.className
                                })).style("z-index", "0").style("stroke", t.color).style("stroke-width", "1px");
                                var c = a.selectAll("." + t.className + "Group").data(t.data).enter().append("g").attr("class", t.className + "Group").attr("transform", (function(t) {
                                    return "translate(" + H(t) + ",0)"
                                }));
                                c.append("rect").attr("class", "element " + t.className).attr("id", (function(t) {
                                    return "f" + t.id
                                })).attr("y", (function(t) {
                                    return t.level * i
                                })).attr("width", I).attr("height", n).style("fill", (function(e) {
                                    return e.color || t.color
                                })).style("z-index", "13").call(r.helper.tooltip(t)), c.append("text").attr("class", "element " + t.className + "Text").attr("y", (function(t) {
                                    return t.level * i + n / 2
                                })).attr("dy", "0.35em").style("font-size", "10px").text((function(t) {
                                    return t.description
                                })).style("fill", "black").style("z-index", "15").style("visibility", (function(t) {
                                    return t.description && O(t.y) - O(t.x) > 8 * t.description.length && n > 11 ? "visible" : "hidden"
                                })).call(r.helper.tooltip(t)), K(c);
                                var f = n > 12 ? n - 6 : 0;
                                x += b < 2 ? f : (b - 1) * i + f
                            },
                            unique: function(t, e) {
                                var n = d.append("g").attr("class", "uniquePosition").attr("transform", "translate(0," + e + ")"),
                                    i = [];
                                i.push([{
                                    x: 1,
                                    y: 0
                                }, {
                                    x: l,
                                    y: 0
                                }]), n.selectAll(".line" + t.className).data(i).enter().append("path").attr("clip-path", "url(#clip)").attr("d", $).attr("class", "line" + t.className).style("z-index", "0").style("stroke", t.color).style("stroke-width", "1px"), n.selectAll("." + t.className).data(t.data).enter().append("rect").attr("clip-path", "url(#clip)").attr("class", "element " + t.className).attr("id", (function(t) {
                                    return "f" + t.id
                                })).attr("x", (function(t) {
                                    return O(t.x - .4)
                                })).attr("width", (function(t) {
                                    return O(t.x + .4) - O(t.x - .4) < 2 ? 2 : O(t.x + .4) - O(t.x - .4)
                                })).attr("height", 12).style("fill", (function(e) {
                                    return e.color || t.color
                                })).style("z-index", "3").call(r.helper.tooltip(t)), K(n)
                            },
                            path: function(t, e) {
                                var n = d.append("g").attr("class", "pathing").attr("transform", "translate(0," + e + ")"),
                                    i = [];
                                i.push([{
                                    x: 1,
                                    y: 0
                                }, {
                                    x: l,
                                    y: 0
                                }]), n.selectAll(".line" + t.className).data(i).enter().append("path").attr("clip-path", "url(#clip)").attr("d", U).attr("class", "line" + t.className).style("z-index", "0").style("stroke", t.color).style("stroke-width", "1px"), n.selectAll("." + t.className).data(t.data).enter().append("path").attr("clip-path", "url(#clip)").attr("class", "element " + t.className).attr("id", (function(t) {
                                    return "f" + t[0].id
                                })).attr("d", U).style("fill", "none").style("stroke", (function(e) {
                                    return e[0].color || t.color
                                })).style("z-index", "3").style("stroke-width", "2px").call(r.helper.tooltip(t)), K(n)
                            },
                            line: function(t, e) {
                                t.interpolation || (t.interpolation = "monotone"), void 0 === t.fill && (t.fill = !0);
                                var n = d.append("g").attr("class", "lining").attr("transform", "translate(0," + e + ")"),
                                    i = [];
                                i.push([{
                                    x: 1,
                                    y: 0
                                }, {
                                    x: l,
                                    y: 0
                                }]), n.selectAll(".line" + t.className).data(i).enter().append("path").attr("clip-path", "url(#clip)").attr("d", U).attr("class", "line" + t.className).style("z-index", "0").style("stroke", "black").style("stroke-width", "1px"), t.data.forEach((function(e, i, o) {
                                    n.selectAll("." + t.className + i).data(e).enter().append("path").attr("clip-path", "url(#clip)").attr("class", "element " + t.className + " " + t.className + i).attr("d", B.interpolate(t.interpolation)).style("fill", t.fill ? X(.6, t.color[i]) || X(.6, "#000") : "none").style("stroke", t.color[i] || "#000").style("z-index", "3").style("stroke-width", "2px").call(r.helper.tooltip(t))
                                })), K(n)
                            },
                            multipleRect: function(t, e, n) {
                                for (var i = d.append("g").attr("class", "multipleRects").attr("transform", "translate(0," + e + ")"), o = 0; o < n; o++) i.append("path").attr("d", $([{
                                    x: 1,
                                    y: 10 * o - 2
                                }, {
                                    x: l,
                                    y: 10 * o - 2
                                }])).attr("class", (function() {
                                    return "line" + t.className
                                })).style("z-index", "0").style("stroke", t.color).style("stroke-width", "1px");
                                i.selectAll("." + t.className).data(t.data).enter().append("rect").attr("clip-path", "url(#clip)").attr("class", "element " + t.className).attr("id", (function(t) {
                                    return "f" + t.id
                                })).attr("x", P).attr("y", (function(t) {
                                    return 10 * t.level
                                })).attr("width", z).attr("height", 8).style("fill", (function(e) {
                                    return e.color || t.color
                                })).style("z-index", "13").call(r.helper.tooltip(t)), K(i)
                            }
                        };
                    this.showFilteredFeature = function(t, e, n) {
                        g.selectAll("." + t + "Arrow");
                        var r = k - 105,
                            i = k - 7,
                            o = h.append("linearGradient").attr("y1", "0").attr("y2", "0").attr("x1", r).attr("x2", i).attr("id", "gradient").attr("spreadMethod", "pad").attr("gradientUnits", "userSpaceOnUse");
                        o.append("stop").attr("offset", "0.3").attr("stop-color", "#DFD5D3").attr("stop-opacity", 1), o.append("stop").attr("offset", "1").attr("stop-opacity", 1).attr("stop-color", "#DFD5D3").attr("stop-color", e);
                        var a = "url(#gradient)",
                            u = "url(#dropshadow)";
                        n && (a = "url(" + n + "#gradient)", u = "url(" + n + "#dropshadow)"), g.selectAll("." + t + "Arrow").style("fill", a).style("stroke", "").attr("filter", u).attr("points", (function(t) {
                            return k - 105 + "," + (t.y - 3) + ", " + (k - 105) + "," + (t.y + 12) + ", " + (k - 10) + "," + (t.y + 12) + ", " + (k - 2) + "," + (t.y + 4.5) + ", " + (k - 10) + "," + (t.y - 3)
                        }))
                    }, this.hideFilteredFeature = function(t) {
                        g.selectAll("." + t + "Arrow").style("fill", "rgba(95,46,38,0.2)").attr("filter", "").attr("points", (function(t) {
                            return k - 105 + "," + (t.y - 3) + ", " + (k - 105) + "," + (t.y + 12) + ", " + (k - 15) + "," + (t.y + 12) + ", " + (k - 7) + "," + (t.y + 4.5) + ", " + (k - 15) + "," + (t.y - 3)
                        }))
                    };
                    var nt = function(t) {
                            d.selectAll(".line" + t.className).attr("d", $.x((function(t) {
                                return O(t.x)
                            }))), A ? (transit1 = d.selectAll("." + t.className + "Group").transition().duration(500), transit2 = d.selectAll("." + t.className).transition().duration(500)) : (transit1 = d.selectAll("." + t.className + "Group"), transit2 = d.selectAll("." + t.className)), transit1.attr("transform", (function(t) {
                                return "translate(" + H(t) + ",0)"
                            })), transit2.attr("width", I), d.selectAll("." + t.className + "Text").style("visibility", (function(e) {
                                return e.description && O(e.y) - O(e.x) > 8 * e.description.length && t.height > 11 ? "visible" : "hidden"
                            }))
                        },
                        rt = function(t) {
                            d.selectAll("." + t.className).attr("x", (function(t) {
                                return O(t.x)
                            })).attr("width", (function(t) {
                                return O(t.y) - O(t.x)
                            }))
                        },
                        it = function(t) {
                            d.selectAll(".line" + t.className).attr("d", $.x((function(t) {
                                return O(t.x)
                            }))), (A ? d.selectAll("." + t.className).transition().duration(500) : d.selectAll("." + t.className)).attr("x", (function(t) {
                                return O(t.x - .4)
                            })).attr("width", (function(t) {
                                return O(t.x + .4) - O(t.x - .4) < 2 ? 2 : O(t.x + .4) - O(t.x - .4)
                            }))
                        },
                        ot = function(t) {
                            d.selectAll(".line" + t.className).attr("d", U.x((function(t) {
                                return O(t.x)
                            })).y((function(e) {
                                return 10 * -e.y + t.height
                            }))), (A ? d.selectAll("." + t.className).transition().duration(500) : d.selectAll("." + t.className)).attr("d", U.y((function(e) {
                                return 10 * -e.y + t.height
                            })))
                        },
                        at = function(t) {
                            W.range([0, -t.height]).domain([0, -t.level]), d.selectAll(".line" + t.className).attr("d", B.y((function(e) {
                                return 10 * W(-e.y) + t.shift
                            }))), (A ? d.selectAll("." + t.className).transition().duration(500) : d.selectAll("." + t.className)).attr("d", B.y((function(e) {
                                return 10 * W(-e.y) + t.shift
                            })).interpolate(t.interpolation))
                        },
                        ut = function(t, e) {
                            (A ? d.selectAll("." + t.className).transition().duration(500) : d.selectAll("." + t.className)).attr("x", (function(t, n) {
                                return O(n + e)
                            }))
                        },
                        st = r.svg.brush().x(O).on("brushend", lt);

                    function lt() {
                        if (r.select(e).selectAll("div.selectedRect").remove(), 0 !== Object.keys(_).length && _.constructor === Object) {
                            if (r.select(_.id).style("fill", _.originalColor), _ = {}, CustomEvent) {
                                var n = new CustomEvent(o.events.FEATURE_DESELECTED_EVENT, {
                                    detail: {
                                        info: "feature-deselected"
                                    }
                                });
                                a.dispatchEvent(n)
                            } else console.warn("CustomEvent is not defined....");
                            o.trigger && o.trigger(o.events.FEATURE_DESELECTED_EVENT, {
                                info: "feature-deselected"
                            })
                        }
                        var u = st.extent(),
                            h = Math.abs(u[0] - u[1]);
                        if (u[0] < u[1]) var g = parseInt(u[0] - 1),
                            v = parseInt(u[1] + 1);
                        else g = parseInt(u[1] + 1), v = parseInt(u[0] - 1);
                        var y = R(h);
                        if (!st.empty() && h > M) {
                            E.length = h;
                            var m = (l / h).toFixed(1);
                            i(e + " .zoomUnit").text(m.toString()), f.showSequence && !s && y && d.selectAll(".AA").empty() && (E = {
                                length: h,
                                start: g,
                                end: v
                            }, w = g, d.selectAll(".sequenceLine").remove(), et.sequence(t.substring(g - 1, v), 20, w - 1)), O.domain(u), q.range(u);
                            var x = w || p.start;
                            pt(c, x), ht(), CustomEvent && a.dispatchEvent(new CustomEvent(o.events.ZOOM_EVENT, {
                                detail: {
                                    start: g,
                                    end: v,
                                    zoom: m
                                }
                            })), o.trigger && o.trigger(o.events.ZOOM_EVENT, {
                                start: g,
                                end: v,
                                zoom: m
                            }), r.select(e).selectAll(".brush").call(st.clear())
                        } else r.select(e).selectAll(".brush").call(st.clear())
                    }
                    this.zoom = function(t, e) {
                        E.start < t && E.end > e || d.selectAll(".seqGroup").remove(), st.extent([t, e]), lt()
                    }, this.resetZoom = function(t, e) {
                        ft()
                    };
                    var ct = function() {
                        ! function() {
                            D = i(e).width() - k - N - 17, r.select(e + " svg").attr("width", D + k + N), r.select(e + " #clip>rect").attr("width", D), f.brushActive && r.select(e + " .background").attr("width", D), r.select(e).selectAll(".brush").call(st.clear());
                            var n = R(E.length);
                            f.showSequence && !s && (!1 !== n || d.selectAll(".AA").empty() ? !0 === n && d.selectAll(".AA").empty() && (d.selectAll(".sequenceLine").remove(), et.sequence(t.substring(E.start - 1, E.end), 20, E.start - 1)) : (d.selectAll(".seqGroup").remove(), et.sequenceLine())), O.range([5, D - 5]), q.domain([0, D]), pt(c, E.start), ht()
                        }()
                    };

                    function ft() {
                        i(".zoomUnit").text("1"), O.domain([p.start, p.end]), q.range([p.start, p.end]);
                        var n = R(p.end - p.start);
                        f.showSequence && !s && (!1 !== n || d.selectAll(".AA").empty() ? E.length === l || !0 !== n || d.selectAll(".AA").empty() || (d.selectAll(".seqGroup").remove(), et.sequence(t.substring(p.start - 1, p.end), 20, p.start)) : (d.selectAll(".seqGroup").remove(), et.sequenceLine())), E = {
                            length: p.end - p.start,
                            start: p.start,
                            end: p.end
                        }, w = 0, pt(c, p.start), ht(), CustomEvent && a.dispatchEvent(new CustomEvent(o.events.ZOOM_EVENT, {
                            detail: {
                                start: 1,
                                end: t.length,
                                zoom: 1
                            }
                        })), o.trigger && o.trigger(o.events.ZOOM_EVENT, {
                            start: 1,
                            end: t.length,
                            zoom: 1
                        }), r.select(e).selectAll(".brush").call(st.clear())
                    }

                    function pt(t, e) {
                        t.forEach((function(t) {
                            "rect" === t.type ? nt(t) : "multipleRect" === t.type ? rt(t) : "unique" === t.type ? it(t) : "path" === t.type ? ot(t) : "line" === t.type ? at(t) : "text" === t.type && ut(t, e)
                        }))
                    }

                    function ht() {
                        d.transition().duration(500).select(".x.axis").call(V)
                    }
                    i(window).on("resize", ct), this.addRectSelection = function(t) {
                            var n, i, o, a, u = r.select(t),
                                s = u.data(),
                                l = f.brushActive ? r.select(".background").attr("width") : d.node().getBBox().width;
                            r.select("body").selectAll("div.selectedRect").remove(), T(t, {
                                type: u[0][0].tagName,
                                color: u.style("fill")
                            });
                            var c = r.select(e).append("div").attr("class", "selectedRect");
                            3 === s[0].length ? (n = s[0][0].x, i = s[0][1].x) : s[0].x === s[0].y ? (n = s[0].x - .5, i = s[0].y + .5) : (n = s[0].x, i = s[0].y), O(n) < 0 ? (o = k, a = O(i)) : O(i) > l ? (o = O(n) + k, a = l - O(n)) : (o = O(n) + k, a = O(i) - O(n)), c.style({
                                left: o + "px",
                                top: "60px",
                                "background-color": "rgba(0, 0, 0, 0.2)",
                                width: a + "px",
                                height: x + 50 + "px",
                                position: "absolute",
                                "z-index": -1,
                                "box-shadow": "0 1px 2px 0 #656565"
                            })
                        },
                        function(e, n) {
                            if (void 0 === n && (n = {
                                    showAxis: !1,
                                    showSequence: !1,
                                    brushActive: !1,
                                    verticalLine: !1,
                                    toolbar: !1,
                                    bubbleHelp: !1,
                                    unit: "units",
                                    zoomMax: 50
                                }), i.fn.popover || (n.bubbleHelp = !1, console.warn("The bubble help requires tooltip and popover bootstrap js libraries. The feature viewer will continue to work, but without the info bubble")), n.zoomMax && (M = n.zoomMax), n.unit || (n.unit = "units"), n.animation && (A = n.animation), !0 === n.toolbar) {
                                var o = i(e + " .svgHeader").length ? r.select(e + " .svgHeader") : r.select(e).append("div").attr("class", "svgHeader");
                                if (!i(e + " .header-position").length) {
                                    var l = o.append("div").attr("class", "header-position").style("display", "inline-block").style("margin", "15px 10px 0px").style("padding", "0px").style("line-height", "32px");
                                    l.append("div").attr("class", "position-label").style("padding", "0px 5px").style("display", "inline-block").style("padding", "0px").style("font-weight", "700").text("Position  :  "), l.append("div").style("display", "inline-block").style("padding", "0px").style("padding-left", "5px").append("div").style("min-width", "50px").attr("id", "zoomPosition").text("0")
                                }
                                i(e + " .header-zoom").length || ((v = o.append("div").attr("class", "header-zoom").style("display", "inline-block").style("margin", "15px 0px 0px").style("padding", "0px").style("line-height", "32px")).append("div").attr("class", "zoom-label").style("padding", "0px 5px").style("display", "inline-block").style("padding", "0px").style("font-weight", "700").text("Zoom : "), v.append("div").style("display", "inline-block").style("padding", "0px").append("div").style("min-width", "50px").style("padding-left", "5px").append("span").text("x ").append("span").attr("class", "zoomUnit").text("1"));
                                var v = i(e + " .header-zoom").length ? r.select(e + " .header-zoom") : o;
                                if (!0 === n.bubbleHelp && !i(e + " .header-help").length) {
                                    var y = "<div><strong>To zoom in :</strong> Left click to select area of interest</div><div><strong>To zoom out :</strong> Right click to reset the scale</div><div><strong>Zoom max  :</strong> Limited to <strong>" + M.toString() + " " + n.unit + "</strong></div>";
                                    v.append("div").style("display", "inline-block").style("margin", "0px").style("margin-right", "5px").style("padding", "0px").append("a").attr("type", "button").attr("class", "header-help").attr("data-toggle", "popover").attr("data-placement", "auto left").attr("title", "Help").attr("data-content", y).style("font-size", "14px").append("span").attr("class", "label label-as-badge label-info").style("font-weight", "500").style("border-radius", "3px").style("box-shadow", "inset 0px 0px 4px rgba(0,0,0,0.10)").style("color", "#fff").html("<span class='state'>Show</span> help"), i((function() {
                                        i('[data-toggle="popover"]').popover({
                                            html: !0
                                        }), i(e + " .header-help").on("hide.bs.popover", (function() {
                                            i(this).find(".state").text("Show")
                                        })), i(e + " .header-help").on("show.bs.popover", (function() {
                                            i(this).find(".state").text("Hide")
                                        }))
                                    }))
                                }
                            }
                            h = r.select(e).append("svg").attr("width", D + k + N).attr("height", L + S + C).style("z-index", "2").on("contextmenu", (function(t, e) {
                                r.event.preventDefault(), ft()
                            })), a = u.getElementsByTagName("svg")[0];
                            var b = (d = h.append("g").attr("transform", "translate(" + k + "," + S + ")")).append("defs");
                            b.append("clipPath").attr("id", "clip").append("rect").attr("width", D).attr("height", L);
                            var w = b.append("filter").attr("id", "dropshadow").attr("height", "200%");
                            w.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 3).attr("result", "blur"), w.append("feOffset").attr("in", "blur").attr("dx", -2).attr("dy", 2).attr("result", "offsetBlur");
                            var E, _, T = w.append("feMerge");
                            T.append("feMergeNode").attr("in", "offsetBlur"), T.append("feMergeNode").attr("in", "SourceGraphic"), d.on("mousemove", (function() {
                                var o = f.brushActive ? r.mouse(r.select(".background").node()) : r.mouse(d.node()),
                                    a = Math.round(q(o[0]));
                                n.positionWithoutLetter || (a += t[a - 1] || ""), i(e + " #zoomPosition").text(a)
                            })), void 0 !== n.dottedSequence && (f.dottedSequence = n.dottedSequence), n.showSequence && !s && (f.showSequence = !0, R(p.end - p.start) ? et.sequence(t.substring(p.start - 1, p.end), x, p.start) : et.sequenceLine(), c.push({
                                data: t,
                                name: "Sequence",
                                className: "AA",
                                color: "black",
                                type: "text"
                            }), m.push({
                                title: "Sequence",
                                y: x - 8
                            })), n.showAxis && (E = x, d.append("g").attr("class", "x axis Xaxis").attr("transform", "translate(0," + (E + 20) + ")").call(V)), g = h.append("g").attr("class", "pro axis").attr("transform", "translate(0," + S + ")"), G(), n.brushActive && (f.brushActive = !0, d.append("g").attr("class", "brush").call(st).selectAll("rect").attr("height", x + 50)), n.verticalLine && (f.verticalLine = !0, _ = r.select(".chart").append("div").attr("class", "Vline").style("position", "absolute").style("z-index", "19").style("width", "1px").style("height", x + 50 + "px").style("top", "30px").style("background", "#000"), r.select(".chart").on("mousemove.Vline", (function() {
                                mousex = r.mouse(this)[0] - 2, _.style("left", mousex + "px")
                            }))), Y(x)
                        }(e, n), this.addFeature = function(t) {
                            var e;
                            x += 20, c.push(t), et.typeIdentifier(t), G(), e = x, d.selectAll(".Xaxis").attr("transform", "translate(0," + (e + 20) + ")"), Y(x), f.brushActive && d.selectAll(".brush rect").attr("height", x + 50), f.verticalLine && r.selectAll(".Vline").style("height", x + 50 + "px"), r.selectAll(".element")[0].length > 1500 && (A = !1)
                        }, this.clearInstance = function() {
                            i(window).off("resize", ct), h = null, a = null, d = null, v = null, g = null, c = null, sbcRip = null, r.helper = {}
                        }
                })
            },
            290: (t, e, n) => {
                var r = n(755);
                const i = n(228),
                    o = (n(219), n(788).NXUtils),
                    a = n(788).NXViewerUtils;

                function u(t, e, n) {
                    featuresForViewer = [];
                    for (var r = 0; r < t.length; r++) {
                        var i = o.convertMappingsToIsoformMap(t[r], e[r].name, e[r].filter),
                            u = a.convertNXAnnotations(i, e[r]);
                        featuresForViewer.push(u)
                    }
                    return featuresForViewer
                }

                function s(t, e) {
                    var n = this;
                    return new Promise((function(i, o) {
                        Promise.all(function(t, e, n) {
                            var r = [];
                            for (var i in e) switch (e[i]) {
                                case "sequence":
                                    r.push(t.getProteinSequence(n));
                                    break;
                                case "antibody":
                                    r.push(t.getAntibody(n));
                                    break;
                                case "isoform-mapping":
                                    r.push(t.getIsoformMapping(n));
                                    break;
                                default:
                                    r.push(t.getAnnotationsByCategory(n, e[i]))
                            }
                            return r
                        }(n.nxClient, t, n.entry)).then((function(t) {
                            ! function(t, e) {
                                for (var n = e.isoform, i = 0; i < t.length; i++)
                                    if (0 !== Object.keys(t[i]).length && t[i].hasOwnProperty(n)) {
                                        var o = r.extend({}, t[i][n]);
                                        e.addFeature(o)
                                    }
                            }(u(t, e), n), i(n)
                        })).catch((function(t) {
                            console.log("Argh, broken: " + t.message), console.log("Error at line : " + t.stack)
                        }))
                    }))
                }
                "object" == typeof t.exports && (t.exports = function(t, e, n, r) {
                    return t, new Promise((function(o, a) {
                        var u, l = e;
                        if (e.startsWith("NX_")) {
                            var c = l.split("-")[1] ? l : l.split("-")[0] + "-1",
                                f = l.split("-")[0];
                            t.getProteinSequence(f).then((function(e) {
                                var a = e.filter((function(t) {
                                    return t.uniqueName === c
                                }))[0].sequence;
                                i.prototype.isoform = c, i.prototype.entry = f, i.prototype.nxClient = t, i.prototype.addNxFeature = s, u = new i(a, n, r), o(u)
                            }))
                        }
                    }))
                })
            }
        },
        e = {};

    function n(r) {
        var i = e[r];
        if (void 0 !== i) return i.exports;
        var o = e[r] = {
            id: r,
            exports: {}
        };
        return t[r].call(o.exports, o, o.exports, n), o.exports
    }
    n.n = t => {
        var e = t && t.__esModule ? () => t.default : () => t;
        return n.d(e, {
            a: e
        }), e
    }, n.d = (t, e) => {
        for (var r in e) n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
            enumerable: !0,
            get: e[r]
        })
    }, n.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window) return window
        }
    }(), n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    };
    var r = n(568);
    FeatureViewer = r
})();