"use strict";

function q(a) {
    throw a;
}

function y(a, b, c) {
    4 !== b.length && q(new sjcl.exception.invalid("invalid aes block size"));
    var d = a.a[c], e = b[0] ^ d[0], f = b[c ? 3 : 1] ^ d[1], g = b[2] ^ d[2];
    b = b[c ? 1 : 3] ^ d[3];
    var h, i, j, k, l = d.length / 4 - 2, m = 4, n = [ 0, 0, 0, 0 ];
    h = a.j[c], a = h[0];
    var o = h[1], p = h[2], r = h[3], s = h[4];
    for (k = 0; l > k; k++) h = a[e >>> 24] ^ o[255 & f >> 16] ^ p[255 & g >> 8] ^ r[255 & b] ^ d[m], 
    i = a[f >>> 24] ^ o[255 & g >> 16] ^ p[255 & b >> 8] ^ r[255 & e] ^ d[m + 1], j = a[g >>> 24] ^ o[255 & b >> 16] ^ p[255 & e >> 8] ^ r[255 & f] ^ d[m + 2], 
    b = a[b >>> 24] ^ o[255 & e >> 16] ^ p[255 & f >> 8] ^ r[255 & g] ^ d[m + 3], m += 4, 
    e = h, f = i, g = j;
    for (k = 0; 4 > k; k++) n[c ? 3 & -k : k] = s[e >>> 24] << 24 ^ s[255 & f >> 16] << 16 ^ s[255 & g >> 8] << 8 ^ s[255 & b] ^ d[m++], 
    h = e, e = f, f = g, g = b, b = h;
    return n;
}

function z(a, b) {
    var c, d, e, f = b.slice(0), g = a.q, h = a.a, i = g[0], j = g[1], k = g[2], l = g[3], m = g[4], n = g[5], o = g[6], p = g[7];
    for (c = 0; 64 > c; c++) 16 > c ? d = f[c] : (d = f[15 & c + 1], e = f[15 & c + 14], 
    d = f[15 & c] = 0 | (d >>> 7 ^ d >>> 18 ^ d >>> 3 ^ d << 25 ^ d << 14) + (e >>> 17 ^ e >>> 19 ^ e >>> 10 ^ e << 15 ^ e << 13) + f[15 & c] + f[15 & c + 9]), 
    d = d + p + (m >>> 6 ^ m >>> 11 ^ m >>> 25 ^ m << 26 ^ m << 21 ^ m << 7) + (o ^ m & (n ^ o)) + h[c], 
    p = o, o = n, n = m, m = 0 | l + d, l = k, k = j, j = i, i = 0 | d + (j & k ^ l & (j ^ k)) + (j >>> 2 ^ j >>> 13 ^ j >>> 22 ^ j << 30 ^ j << 19 ^ j << 10);
    g[0] = 0 | g[0] + i, g[1] = 0 | g[1] + j, g[2] = 0 | g[2] + k, g[3] = 0 | g[3] + l, 
    g[4] = 0 | g[4] + m, g[5] = 0 | g[5] + n, g[6] = 0 | g[6] + o, g[7] = 0 | g[7] + p;
}

function C(a, b) {
    var c, d = sjcl.random.z[a], e = [];
    for (c in d) d.hasOwnProperty(c) && e.push(d[c]);
    for (c = 0; c < e.length; c++) e[c](b);
}

function A(a) {
    a.a = B(a).concat(B(a)), a.A = new sjcl.cipher.aes(a.a);
}

function B(a) {
    for (var b = 0; 4 > b && (a.e[b] = 0 | a.e[b] + 1, !a.e[b]); b++) ;
    return a.A.encrypt(a.e);
}

if (function(a, b) {
    function c(a) {
        var b = a.length, c = kb.type(a);
        return kb.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || "function" !== c && (0 === b || "number" == typeof b && b > 0 && b - 1 in a);
    }
    function d(a) {
        var b = zb[a] = {};
        return kb.each(a.match(mb) || [], function(a, c) {
            b[c] = !0;
        }), b;
    }
    function e(a, c, d, e) {
        if (kb.acceptData(a)) {
            var f, g, h = kb.expando, i = a.nodeType, j = i ? kb.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || d !== b || "string" != typeof c) return k || (k = i ? a[h] = bb.pop() || kb.guid++ : h), 
            j[k] || (j[k] = i ? {} : {
                toJSON: kb.noop
            }), ("object" == typeof c || "function" == typeof c) && (e ? j[k] = kb.extend(j[k], c) : j[k].data = kb.extend(j[k].data, c)), 
            g = j[k], e || (g.data || (g.data = {}), g = g.data), d !== b && (g[kb.camelCase(c)] = d), 
            "string" == typeof c ? (f = g[c], null == f && (f = g[kb.camelCase(c)])) : f = g, 
            f;
        }
    }
    function f(a, b, c) {
        if (kb.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? kb.cache : a, i = f ? a[kb.expando] : kb.expando;
            if (g[i]) {
                if (b && (d = c ? g[i] : g[i].data)) {
                    kb.isArray(b) ? b = b.concat(kb.map(b, kb.camelCase)) : b in d ? b = [ b ] : (b = kb.camelCase(b), 
                    b = b in d ? [ b ] : b.split(" ")), e = b.length;
                    for (;e--; ) delete d[b[e]];
                    if (c ? !h(d) : !kb.isEmptyObject(d)) return;
                }
                (c || (delete g[i].data, h(g[i]))) && (f ? kb.cleanData([ a ], !0) : kb.support.deleteExpando || g != g.window ? delete g[i] : g[i] = null);
            }
        }
    }
    function g(a, c, d) {
        if (d === b && 1 === a.nodeType) {
            var e = "data-" + c.replace(Bb, "-$1").toLowerCase();
            if (d = a.getAttribute(e), "string" == typeof d) {
                try {
                    d = "true" === d ? !0 : "false" === d ? !1 : "null" === d ? null : +d + "" === d ? +d : Ab.test(d) ? kb.parseJSON(d) : d;
                } catch (f) {}
                kb.data(a, c, d);
            } else d = b;
        }
        return d;
    }
    function h(a) {
        var b;
        for (b in a) if (("data" !== b || !kb.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0;
    }
    function i() {
        return !0;
    }
    function j() {
        return !1;
    }
    function k() {
        try {
            return Y.activeElement;
        } catch (a) {}
    }
    function l(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a;
    }
    function m(a, b, c) {
        if (kb.isFunction(b)) return kb.grep(a, function(a, d) {
            return !!b.call(a, d, a) !== c;
        });
        if (b.nodeType) return kb.grep(a, function(a) {
            return a === b !== c;
        });
        if ("string" == typeof b) {
            if (Qb.test(b)) return kb.filter(b, a, c);
            b = kb.filter(b, a);
        }
        return kb.grep(a, function(a) {
            return kb.inArray(a, b) >= 0 !== c;
        });
    }
    function n(a) {
        var b = Ub.split("|"), c = a.createDocumentFragment();
        if (c.createElement) for (;b.length; ) c.createElement(b.pop());
        return c;
    }
    function o(a, b) {
        return kb.nodeName(a, "table") && kb.nodeName(1 === b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a;
    }
    function p(a) {
        return a.type = (null !== kb.find.attr(a, "type")) + "/" + a.type, a;
    }
    function q(a) {
        var b = ec.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a;
    }
    function r(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++) kb._data(c, "globalEval", !b || kb._data(b[d], "globalEval"));
    }
    function s(a, b) {
        if (1 === b.nodeType && kb.hasData(a)) {
            var c, d, e, f = kb._data(a), g = kb._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h) for (d = 0, e = h[c].length; e > d; d++) kb.event.add(b, c, h[c][d]);
            }
            g.data && (g.data = kb.extend({}, g.data));
        }
    }
    function t(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !kb.support.noCloneEvent && b[kb.expando]) {
                e = kb._data(b);
                for (d in e.events) kb.removeEvent(b, d, e.handle);
                b.removeAttribute(kb.expando);
            }
            "script" === c && b.text !== a.text ? (p(b).text = a.text, q(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), 
            kb.support.html5Clone && a.innerHTML && !kb.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && bc.test(a.type) ? (b.defaultChecked = b.checked = a.checked, 
            b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue);
        }
    }
    function u(a, c) {
        var d, e, f = 0, g = typeof a.getElementsByTagName !== W ? a.getElementsByTagName(c || "*") : typeof a.querySelectorAll !== W ? a.querySelectorAll(c || "*") : b;
        if (!g) for (g = [], d = a.childNodes || a; null != (e = d[f]); f++) !c || kb.nodeName(e, c) ? g.push(e) : kb.merge(g, u(e, c));
        return c === b || c && kb.nodeName(a, c) ? kb.merge([ a ], g) : g;
    }
    function v(a) {
        bc.test(a.type) && (a.defaultChecked = a.checked);
    }
    function w(a, b) {
        if (b in a) return b;
        for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = yc.length; e--; ) if (b = yc[e] + c, 
        b in a) return b;
        return d;
    }
    function x(a, b) {
        return a = b || a, "none" === kb.css(a, "display") || !kb.contains(a.ownerDocument, a);
    }
    function y(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = kb._data(d, "olddisplay"), 
        c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && x(d) && (f[g] = kb._data(d, "olddisplay", C(d.nodeName)))) : f[g] || (e = x(d), 
        (c && "none" !== c || !e) && kb._data(d, "olddisplay", e ? c : kb.css(d, "display"))));
        for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a;
    }
    function z(a, b, c) {
        var d = rc.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b;
    }
    function A(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += kb.css(a, c + xc[f], !0, e)), 
        d ? ("content" === c && (g -= kb.css(a, "padding" + xc[f], !0, e)), "margin" !== c && (g -= kb.css(a, "border" + xc[f] + "Width", !0, e))) : (g += kb.css(a, "padding" + xc[f], !0, e), 
        "padding" !== c && (g += kb.css(a, "border" + xc[f] + "Width", !0, e)));
        return g;
    }
    function B(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = kc(a), g = kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = lc(a, b, f), (0 > e || null == e) && (e = a.style[b]), sc.test(e)) return e;
            d = g && (kb.support.boxSizingReliable || e === a.style[b]), e = parseFloat(e) || 0;
        }
        return e + A(a, b, c || (g ? "border" : "content"), d, f) + "px";
    }
    function C(a) {
        var b = Y, c = uc[a];
        return c || (c = D(a, b), "none" !== c && c || (jc = (jc || kb("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(b.documentElement), 
        b = (jc[0].contentWindow || jc[0].contentDocument).document, b.write("<!doctype html><html><body>"), 
        b.close(), c = D(a, b), jc.detach()), uc[a] = c), c;
    }
    function D(a, b) {
        var c = kb(b.createElement(a)).appendTo(b.body), d = kb.css(c[0], "display");
        return c.remove(), d;
    }
    function E(a, b, c, d) {
        var e;
        if (kb.isArray(b)) kb.each(b, function(b, e) {
            c || Ac.test(a) ? d(a, e) : E(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d);
        }); else if (c || "object" !== kb.type(b)) d(a, b); else for (e in b) E(a + "[" + e + "]", b[e], c, d);
    }
    function F(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(mb) || [];
            if (kb.isFunction(c)) for (;d = f[e++]; ) "+" === d[0] ? (d = d.slice(1) || "*", 
            (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
        };
    }
    function G(a, c, d, e) {
        function f(i) {
            var j;
            return g[i] = !0, kb.each(a[i] || [], function(a, i) {
                var k = i(c, d, e);
                return "string" != typeof k || h || g[k] ? h ? !(j = k) : b : (c.dataTypes.unshift(k), 
                f(k), !1);
            }), j;
        }
        var g = {}, h = a === Rc;
        return f(c.dataTypes[0]) || !g["*"] && f("*");
    }
    function H(a, c) {
        var d, e, f = kb.ajaxSettings.flatOptions || {};
        for (e in c) c[e] !== b && ((f[e] ? a : d || (d = {}))[e] = c[e]);
        return d && kb.extend(!0, a, d), a;
    }
    function I(a, c, d) {
        for (var e, f, g, h, i = a.contents, j = a.dataTypes; "*" === j[0]; ) j.shift(), 
        f === b && (f = a.mimeType || c.getResponseHeader("Content-Type"));
        if (f) for (h in i) if (i[h] && i[h].test(f)) {
            j.unshift(h);
            break;
        }
        if (j[0] in d) g = j[0]; else {
            for (h in d) {
                if (!j[0] || a.converters[h + " " + j[0]]) {
                    g = h;
                    break;
                }
                e || (e = h);
            }
            g = g || e;
        }
        return g ? (g !== j[0] && j.unshift(g), d[g]) : b;
    }
    function J(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1]) for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        for (f = k.shift(); f; ) if (a.responseFields[f] && (c[a.responseFields[f]] = b), 
        !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break;
            }
            if (g !== !0) if (g && a["throws"]) b = g(b); else try {
                b = g(b);
            } catch (l) {
                return {
                    state: "parsererror",
                    error: g ? l : "No conversion from " + i + " to " + f
                };
            }
        }
        return {
            state: "success",
            data: b
        };
    }
    function K() {
        try {
            return new a.XMLHttpRequest();
        } catch (b) {}
    }
    function L() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP");
        } catch (b) {}
    }
    function M() {
        return setTimeout(function() {
            $c = b;
        }), $c = kb.now();
    }
    function N(a, b, c) {
        for (var d, e = (ed[b] || []).concat(ed["*"]), f = 0, g = e.length; g > f; f++) if (d = e[f].call(c, b, a)) return d;
    }
    function O(a, b, c) {
        var d, e, f = 0, g = dd.length, h = kb.Deferred().always(function() {
            delete i.elem;
        }), i = function() {
            if (e) return !1;
            for (var b = $c || M(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
            return h.notifyWith(a, [ j, f, c ]), 1 > f && i ? c : (h.resolveWith(a, [ j ]), 
            !1);
        }, j = h.promise({
            elem: a,
            props: kb.extend({}, b),
            opts: kb.extend(!0, {
                specialEasing: {}
            }, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $c || M(),
            duration: c.duration,
            tweens: [],
            createTween: function(b, c) {
                var d = kb.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d;
            },
            stop: function(b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e) return this;
                for (e = !0; d > c; c++) j.tweens[c].run(1);
                return b ? h.resolveWith(a, [ j, b ]) : h.rejectWith(a, [ j, b ]), this;
            }
        }), k = j.props;
        for (P(k, j.opts.specialEasing); g > f; f++) if (d = dd[f].call(j, a, k, j.opts)) return d;
        return kb.map(k, N, j), kb.isFunction(j.opts.start) && j.opts.start.call(a, j), 
        kb.fx.timer(kb.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
    }
    function P(a, b) {
        var c, d, e, f, g;
        for (c in a) if (d = kb.camelCase(c), e = b[d], f = a[c], kb.isArray(f) && (e = f[1], 
        f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = kb.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f) c in a || (a[c] = f[c], b[c] = e);
        } else b[d] = e;
    }
    function Q(a, b, c) {
        var d, e, f, g, h, i, j = this, k = {}, l = a.style, m = a.nodeType && x(a), n = kb._data(a, "fxshow");
        c.queue || (h = kb._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, 
        i = h.empty.fire, h.empty.fire = function() {
            h.unqueued || i();
        }), h.unqueued++, j.always(function() {
            j.always(function() {
                h.unqueued--, kb.queue(a, "fx").length || h.empty.fire();
            });
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [ l.overflow, l.overflowX, l.overflowY ], 
        "inline" === kb.css(a, "display") && "none" === kb.css(a, "float") && (kb.support.inlineBlockNeedsLayout && "inline" !== C(a.nodeName) ? l.zoom = 1 : l.display = "inline-block")), 
        c.overflow && (l.overflow = "hidden", kb.support.shrinkWrapBlocks || j.always(function() {
            l.overflow = c.overflow[0], l.overflowX = c.overflow[1], l.overflowY = c.overflow[2];
        }));
        for (d in b) if (e = b[d], ad.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (m ? "hide" : "show")) continue;
            k[d] = n && n[d] || kb.style(a, d);
        }
        if (!kb.isEmptyObject(k)) {
            n ? "hidden" in n && (m = n.hidden) : n = kb._data(a, "fxshow", {}), f && (n.hidden = !m), 
            m ? kb(a).show() : j.done(function() {
                kb(a).hide();
            }), j.done(function() {
                var b;
                kb._removeData(a, "fxshow");
                for (b in k) kb.style(a, b, k[b]);
            });
            for (d in k) g = N(m ? n[d] : 0, d, j), d in n || (n[d] = g.start, m && (g.end = g.start, 
            g.start = "width" === d || "height" === d ? 1 : 0));
        }
    }
    function R(a, b, c, d, e) {
        return new R.prototype.init(a, b, c, d, e);
    }
    function S(a, b) {
        var c, d = {
            height: a
        }, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = xc[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d;
    }
    function T(a) {
        return kb.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1;
    }
    var U, V, W = typeof b, X = a.location, Y = a.document, Z = Y.documentElement, $ = a.jQuery, _ = a.$, ab = {}, bb = [], cb = "1.10.2", db = bb.concat, eb = bb.push, fb = bb.slice, gb = bb.indexOf, hb = ab.toString, ib = ab.hasOwnProperty, jb = cb.trim, kb = function(a, b) {
        return new kb.fn.init(a, b, V);
    }, lb = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, mb = /\S+/g, nb = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ob = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, pb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, qb = /^[\],:{}\s]*$/, rb = /(?:^|:|,)(?:\s*\[)+/g, sb = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, tb = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, ub = /^-ms-/, vb = /-([\da-z])/gi, wb = function(a, b) {
        return b.toUpperCase();
    }, xb = function(a) {
        (Y.addEventListener || "load" === a.type || "complete" === Y.readyState) && (yb(), 
        kb.ready());
    }, yb = function() {
        Y.addEventListener ? (Y.removeEventListener("DOMContentLoaded", xb, !1), a.removeEventListener("load", xb, !1)) : (Y.detachEvent("onreadystatechange", xb), 
        a.detachEvent("onload", xb));
    };
    kb.fn = kb.prototype = {
        jquery: cb,
        constructor: kb,
        init: function(a, c, d) {
            var e, f;
            if (!a) return this;
            if ("string" == typeof a) {
                if (e = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [ null, a, null ] : ob.exec(a), 
                !e || !e[1] && c) return !c || c.jquery ? (c || d).find(a) : this.constructor(c).find(a);
                if (e[1]) {
                    if (c = c instanceof kb ? c[0] : c, kb.merge(this, kb.parseHTML(e[1], c && c.nodeType ? c.ownerDocument || c : Y, !0)), 
                    pb.test(e[1]) && kb.isPlainObject(c)) for (e in c) kb.isFunction(this[e]) ? this[e](c[e]) : this.attr(e, c[e]);
                    return this;
                }
                if (f = Y.getElementById(e[2]), f && f.parentNode) {
                    if (f.id !== e[2]) return d.find(a);
                    this.length = 1, this[0] = f;
                }
                return this.context = Y, this.selector = a, this;
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : kb.isFunction(a) ? d.ready(a) : (a.selector !== b && (this.selector = a.selector, 
            this.context = a.context), kb.makeArray(a, this));
        },
        selector: "",
        length: 0,
        toArray: function() {
            return fb.call(this);
        },
        get: function(a) {
            return null == a ? this.toArray() : 0 > a ? this[this.length + a] : this[a];
        },
        pushStack: function(a) {
            var b = kb.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b;
        },
        each: function(a, b) {
            return kb.each(this, a, b);
        },
        ready: function(a) {
            return kb.ready.promise().done(a), this;
        },
        slice: function() {
            return this.pushStack(fb.apply(this, arguments));
        },
        first: function() {
            return this.eq(0);
        },
        last: function() {
            return this.eq(-1);
        },
        eq: function(a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [ this[c] ] : []);
        },
        map: function(a) {
            return this.pushStack(kb.map(this, function(b, c) {
                return a.call(b, c, b);
            }));
        },
        end: function() {
            return this.prevObject || this.constructor(null);
        },
        push: eb,
        sort: [].sort,
        splice: [].splice
    }, kb.fn.init.prototype = kb.fn, kb.extend = kb.fn.extend = function() {
        var a, c, d, e, f, g, h = arguments[0] || {}, i = 1, j = arguments.length, k = !1;
        for ("boolean" == typeof h && (k = h, h = arguments[1] || {}, i = 2), "object" == typeof h || kb.isFunction(h) || (h = {}), 
        j === i && (h = this, --i); j > i; i++) if (null != (f = arguments[i])) for (e in f) a = h[e], 
        d = f[e], h !== d && (k && d && (kb.isPlainObject(d) || (c = kb.isArray(d))) ? (c ? (c = !1, 
        g = a && kb.isArray(a) ? a : []) : g = a && kb.isPlainObject(a) ? a : {}, h[e] = kb.extend(k, g, d)) : d !== b && (h[e] = d));
        return h;
    }, kb.extend({
        expando: "jQuery" + (cb + Math.random()).replace(/\D/g, ""),
        noConflict: function(b) {
            return a.$ === kb && (a.$ = _), b && a.jQuery === kb && (a.jQuery = $), kb;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) {
            a ? kb.readyWait++ : kb.ready(!0);
        },
        ready: function(a) {
            if (a === !0 ? !--kb.readyWait : !kb.isReady) {
                if (!Y.body) return setTimeout(kb.ready);
                kb.isReady = !0, a !== !0 && --kb.readyWait > 0 || (U.resolveWith(Y, [ kb ]), kb.fn.trigger && kb(Y).trigger("ready").off("ready"));
            }
        },
        isFunction: function(a) {
            return "function" === kb.type(a);
        },
        isArray: Array.isArray || function(a) {
            return "array" === kb.type(a);
        },
        isWindow: function(a) {
            return null != a && a == a.window;
        },
        isNumeric: function(a) {
            return !isNaN(parseFloat(a)) && isFinite(a);
        },
        type: function(a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? ab[hb.call(a)] || "object" : typeof a;
        },
        isPlainObject: function(a) {
            var c;
            if (!a || "object" !== kb.type(a) || a.nodeType || kb.isWindow(a)) return !1;
            try {
                if (a.constructor && !ib.call(a, "constructor") && !ib.call(a.constructor.prototype, "isPrototypeOf")) return !1;
            } catch (d) {
                return !1;
            }
            if (kb.support.ownLast) for (c in a) return ib.call(a, c);
            for (c in a) ;
            return c === b || ib.call(a, c);
        },
        isEmptyObject: function(a) {
            var b;
            for (b in a) return !1;
            return !0;
        },
        error: function(a) {
            throw Error(a);
        },
        parseHTML: function(a, b, c) {
            if (!a || "string" != typeof a) return null;
            "boolean" == typeof b && (c = b, b = !1), b = b || Y;
            var d = pb.exec(a), e = !c && [];
            return d ? [ b.createElement(d[1]) ] : (d = kb.buildFragment([ a ], b, e), e && kb(e).remove(), 
            kb.merge([], d.childNodes));
        },
        parseJSON: function(c) {
            return a.JSON && a.JSON.parse ? a.JSON.parse(c) : null === c ? c : "string" == typeof c && (c = kb.trim(c), 
            c && qb.test(c.replace(sb, "@").replace(tb, "]").replace(rb, ""))) ? Function("return " + c)() : (kb.error("Invalid JSON: " + c), 
            b);
        },
        parseXML: function(c) {
            var d, e;
            if (!c || "string" != typeof c) return null;
            try {
                a.DOMParser ? (e = new DOMParser(), d = e.parseFromString(c, "text/xml")) : (d = new ActiveXObject("Microsoft.XMLDOM"), 
                d.async = "false", d.loadXML(c));
            } catch (f) {
                d = b;
            }
            return d && d.documentElement && !d.getElementsByTagName("parsererror").length || kb.error("Invalid XML: " + c), 
            d;
        },
        noop: function() {},
        globalEval: function(b) {
            b && kb.trim(b) && (a.execScript || function(b) {
                a.eval.call(a, b);
            })(b);
        },
        camelCase: function(a) {
            return a.replace(ub, "ms-").replace(vb, wb);
        },
        nodeName: function(a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
        },
        each: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a);
            if (d) {
                if (h) for (;g > f && (e = b.apply(a[f], d), e !== !1); f++) ; else for (f in a) if (e = b.apply(a[f], d), 
                e === !1) break;
            } else if (h) for (;g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++) ; else for (f in a) if (e = b.call(a[f], f, a[f]), 
            e === !1) break;
            return a;
        },
        trim: jb && !jb.call("﻿ ") ? function(a) {
            return null == a ? "" : jb.call(a);
        } : function(a) {
            return null == a ? "" : (a + "").replace(nb, "");
        },
        makeArray: function(a, b) {
            var d = b || [];
            return null != a && (c(Object(a)) ? kb.merge(d, "string" == typeof a ? [ a ] : a) : eb.call(d, a)), 
            d;
        },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (gb) return gb.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++) if (c in b && b[c] === a) return c;
            }
            return -1;
        },
        merge: function(a, c) {
            var d = c.length, e = a.length, f = 0;
            if ("number" == typeof d) for (;d > f; f++) a[e++] = c[f]; else for (;c[f] !== b; ) a[e++] = c[f++];
            return a.length = e, a;
        },
        grep: function(a, b, c) {
            var d, e = [], f = 0, g = a.length;
            for (c = !!c; g > f; f++) d = !!b(a[f], f), c !== d && e.push(a[f]);
            return e;
        },
        map: function(a, b, d) {
            var e, f = 0, g = a.length, h = c(a), i = [];
            if (h) for (;g > f; f++) e = b(a[f], f, d), null != e && (i[i.length] = e); else for (f in a) e = b(a[f], f, d), 
            null != e && (i[i.length] = e);
            return db.apply([], i);
        },
        guid: 1,
        proxy: function(a, c) {
            var d, e, f;
            return "string" == typeof c && (f = a[c], c = a, a = f), kb.isFunction(a) ? (d = fb.call(arguments, 2), 
            e = function() {
                return a.apply(c || this, d.concat(fb.call(arguments)));
            }, e.guid = a.guid = a.guid || kb.guid++, e) : b;
        },
        access: function(a, c, d, e, f, g, h) {
            var i = 0, j = a.length, k = null == d;
            if ("object" === kb.type(d)) {
                f = !0;
                for (i in d) kb.access(a, c, i, d[i], !0, g, h);
            } else if (e !== b && (f = !0, kb.isFunction(e) || (h = !0), k && (h ? (c.call(a, e), 
            c = null) : (k = c, c = function(a, b, c) {
                return k.call(kb(a), c);
            })), c)) for (;j > i; i++) c(a[i], d, h ? e : e.call(a[i], i, c(a[i], d)));
            return f ? a : k ? c.call(a) : j ? c(a[0], d) : g;
        },
        now: function() {
            return new Date().getTime();
        },
        swap: function(a, b, c, d) {
            var e, f, g = {};
            for (f in b) g[f] = a.style[f], a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b) a.style[f] = g[f];
            return e;
        }
    }), kb.ready.promise = function(b) {
        if (!U) if (U = kb.Deferred(), "complete" === Y.readyState) setTimeout(kb.ready); else if (Y.addEventListener) Y.addEventListener("DOMContentLoaded", xb, !1), 
        a.addEventListener("load", xb, !1); else {
            Y.attachEvent("onreadystatechange", xb), a.attachEvent("onload", xb);
            var c = !1;
            try {
                c = null == a.frameElement && Y.documentElement;
            } catch (d) {}
            c && c.doScroll && function e() {
                if (!kb.isReady) {
                    try {
                        c.doScroll("left");
                    } catch (a) {
                        return setTimeout(e, 50);
                    }
                    yb(), kb.ready();
                }
            }();
        }
        return U.promise(b);
    }, kb.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
        ab["[object " + b + "]"] = b.toLowerCase();
    }), V = kb(Y), function(a, b) {
        function c(a, b, c, d) {
            var e, f, g, h, i, j, k, l, o, p;
            if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
            if (1 !== (h = b.nodeType) && 9 !== h) return [];
            if (I && !d) {
                if (e = tb.exec(a)) if (g = e[1]) {
                    if (9 === h) {
                        if (f = b.getElementById(g), !f || !f.parentNode) return c;
                        if (f.id === g) return c.push(f), c;
                    } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), 
                    c;
                } else {
                    if (e[2]) return ab.apply(c, b.getElementsByTagName(a)), c;
                    if ((g = e[3]) && x.getElementsByClassName && b.getElementsByClassName) return ab.apply(c, b.getElementsByClassName(g)), 
                    c;
                }
                if (x.qsa && (!J || !J.test(a))) {
                    if (l = k = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
                        for (j = m(a), (k = b.getAttribute("id")) ? l = k.replace(wb, "\\$&") : b.setAttribute("id", l), 
                        l = "[id='" + l + "'] ", i = j.length; i--; ) j[i] = l + n(j[i]);
                        o = nb.test(a) && b.parentNode || b, p = j.join(",");
                    }
                    if (p) try {
                        return ab.apply(c, o.querySelectorAll(p)), c;
                    } catch (q) {} finally {
                        k || b.removeAttribute("id");
                    }
                }
            }
            return v(a.replace(jb, "$1"), b, c, d);
        }
        function d() {
            function a(c, d) {
                return b.push(c += " ") > z.cacheLength && delete a[b.shift()], a[c] = d;
            }
            var b = [];
            return a;
        }
        function e(a) {
            return a[N] = !0, a;
        }
        function f(a) {
            var b = G.createElement("div");
            try {
                return !!a(b);
            } catch (c) {
                return !1;
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null;
            }
        }
        function g(a, b) {
            for (var c = a.split("|"), d = a.length; d--; ) z.attrHandle[c[d]] = b;
        }
        function h(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || X) - (~a.sourceIndex || X);
            if (d) return d;
            if (c) for (;c = c.nextSibling; ) if (c === b) return -1;
            return a ? 1 : -1;
        }
        function i(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a;
            };
        }
        function j(a) {
            return function(b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a;
            };
        }
        function k(a) {
            return e(function(b) {
                return b = +b, e(function(c, d) {
                    for (var e, f = a([], c.length, b), g = f.length; g--; ) c[e = f[g]] && (c[e] = !(d[e] = c[e]));
                });
            });
        }
        function l() {}
        function m(a, b) {
            var d, e, f, g, h, i, j, k = S[a + " "];
            if (k) return b ? 0 : k.slice(0);
            for (h = a, i = [], j = z.preFilter; h; ) {
                (!d || (e = lb.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), 
                d = !1, (e = mb.exec(h)) && (d = e.shift(), f.push({
                    value: d,
                    type: e[0].replace(jb, " ")
                }), h = h.slice(d.length));
                for (g in z.filter) !(e = rb[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), 
                f.push({
                    value: d,
                    type: g,
                    matches: e
                }), h = h.slice(d.length));
                if (!d) break;
            }
            return b ? h.length : h ? c.error(a) : S(a, i).slice(0);
        }
        function n(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
            return d;
        }
        function o(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = Q++;
            return b.first ? function(b, c, f) {
                for (;b = b[d]; ) if (1 === b.nodeType || e) return a(b, c, f);
            } : function(b, c, g) {
                var h, i, j, k = P + " " + f;
                if (g) {
                    for (;b = b[d]; ) if ((1 === b.nodeType || e) && a(b, c, g)) return !0;
                } else for (;b = b[d]; ) if (1 === b.nodeType || e) if (j = b[N] || (b[N] = {}), 
                (i = j[d]) && i[0] === k) {
                    if ((h = i[1]) === !0 || h === y) return h === !0;
                } else if (i = j[d] = [ k ], i[1] = a(b, c, g) || y, i[1] === !0) return !0;
            };
        }
        function p(a) {
            return a.length > 1 ? function(b, c, d) {
                for (var e = a.length; e--; ) if (!a[e](b, c, d)) return !1;
                return !0;
            } : a[0];
        }
        function q(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) (f = a[h]) && (!c || c(f, d, e)) && (g.push(f), 
            j && b.push(h));
            return g;
        }
        function r(a, b, c, d, f, g) {
            return d && !d[N] && (d = r(d)), f && !f[N] && (f = r(f, g)), e(function(e, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = e || u(b || "*", h.nodeType ? [ h ] : h, []), r = !a || !e && b ? p : q(p, m, a, h, i), s = c ? f || (e ? a : o || d) ? [] : g : r;
                if (c && c(r, s, h, i), d) for (j = q(s, n), d(j, [], h, i), k = j.length; k--; ) (l = j[k]) && (s[n[k]] = !(r[n[k]] = l));
                if (e) {
                    if (f || a) {
                        if (f) {
                            for (j = [], k = s.length; k--; ) (l = s[k]) && j.push(r[k] = l);
                            f(null, s = [], j, i);
                        }
                        for (k = s.length; k--; ) (l = s[k]) && (j = f ? cb.call(e, l) : m[k]) > -1 && (e[j] = !(g[j] = l));
                    }
                } else s = q(s === g ? s.splice(o, s.length) : s), f ? f(null, g, s, i) : ab.apply(g, s);
            });
        }
        function s(a) {
            for (var b, c, d, e = a.length, f = z.relative[a[0].type], g = f || z.relative[" "], h = f ? 1 : 0, i = o(function(a) {
                return a === b;
            }, g, !0), j = o(function(a) {
                return cb.call(b, a) > -1;
            }, g, !0), k = [ function(a, c, d) {
                return !f && (d || c !== D) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
            } ]; e > h; h++) if (c = z.relative[a[h].type]) k = [ o(p(k), c) ]; else {
                if (c = z.filter[a[h].type].apply(null, a[h].matches), c[N]) {
                    for (d = ++h; e > d && !z.relative[a[d].type]; d++) ;
                    return r(h > 1 && p(k), h > 1 && n(a.slice(0, h - 1).concat({
                        value: " " === a[h - 2].type ? "*" : ""
                    })).replace(jb, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && n(a));
                }
                k.push(c);
            }
            return p(k);
        }
        function t(a, b) {
            var d = 0, f = b.length > 0, g = a.length > 0, h = function(e, h, i, j, k) {
                var l, m, n, o = [], p = 0, r = "0", s = e && [], t = null != k, u = D, v = e || g && z.find.TAG("*", k && h.parentNode || h), w = P += null == u ? 1 : Math.random() || .1;
                for (t && (D = h !== G && h, y = d); null != (l = v[r]); r++) {
                    if (g && l) {
                        for (m = 0; n = a[m++]; ) if (n(l, h, i)) {
                            j.push(l);
                            break;
                        }
                        t && (P = w, y = ++d);
                    }
                    f && ((l = !n && l) && p--, e && s.push(l));
                }
                if (p += r, f && r !== p) {
                    for (m = 0; n = b[m++]; ) n(s, o, h, i);
                    if (e) {
                        if (p > 0) for (;r--; ) s[r] || o[r] || (o[r] = $.call(j));
                        o = q(o);
                    }
                    ab.apply(j, o), t && !e && o.length > 0 && p + b.length > 1 && c.uniqueSort(j);
                }
                return t && (P = w, D = u), s;
            };
            return f ? e(h) : h;
        }
        function u(a, b, d) {
            for (var e = 0, f = b.length; f > e; e++) c(a, b[e], d);
            return d;
        }
        function v(a, b, c, d) {
            var e, f, g, h, i, j = m(a);
            if (!d && 1 === j.length) {
                if (f = j[0] = j[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && x.getById && 9 === b.nodeType && I && z.relative[f[1].type]) {
                    if (b = (z.find.ID(g.matches[0].replace(xb, yb), b) || [])[0], !b) return c;
                    a = a.slice(f.shift().value.length);
                }
                for (e = rb.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !z.relative[h = g.type]); ) if ((i = z.find[h]) && (d = i(g.matches[0].replace(xb, yb), nb.test(f[0].type) && b.parentNode || b))) {
                    if (f.splice(e, 1), a = d.length && n(f), !a) return ab.apply(c, d), c;
                    break;
                }
            }
            return C(a, j)(d, b, !I, c, nb.test(a)), c;
        }
        var w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date(), O = a.document, P = 0, Q = 0, R = d(), S = d(), T = d(), U = !1, V = function(a, b) {
            return a === b ? (U = !0, 0) : 0;
        }, W = typeof b, X = 1 << 31, Y = {}.hasOwnProperty, Z = [], $ = Z.pop, _ = Z.push, ab = Z.push, bb = Z.slice, cb = Z.indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++) if (this[b] === a) return b;
            return -1;
        }, db = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", eb = "[\\x20\\t\\r\\n\\f]", fb = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", gb = fb.replace("w", "w#"), hb = "\\[" + eb + "*(" + fb + ")" + eb + "*(?:([*^$|!~]?=)" + eb + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + gb + ")|)|)" + eb + "*\\]", ib = ":(" + fb + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + hb.replace(3, 8) + ")*)|.*)\\)|)", jb = RegExp("^" + eb + "+|((?:^|[^\\\\])(?:\\\\.)*)" + eb + "+$", "g"), lb = RegExp("^" + eb + "*," + eb + "*"), mb = RegExp("^" + eb + "*([>+~]|" + eb + ")" + eb + "*"), nb = RegExp(eb + "*[+~]"), ob = RegExp("=" + eb + "*([^\\]'\"]*)" + eb + "*\\]", "g"), pb = RegExp(ib), qb = RegExp("^" + gb + "$"), rb = {
            ID: RegExp("^#(" + fb + ")"),
            CLASS: RegExp("^\\.(" + fb + ")"),
            TAG: RegExp("^(" + fb.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + hb),
            PSEUDO: RegExp("^" + ib),
            CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + eb + "*(even|odd|(([+-]|)(\\d*)n|)" + eb + "*(?:([+-]|)" + eb + "*(\\d+)|))" + eb + "*\\)|)", "i"),
            bool: RegExp("^(?:" + db + ")$", "i"),
            needsContext: RegExp("^" + eb + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + eb + "*((?:-\\d)?\\d*)" + eb + "*\\)|)(?=[^-]|$)", "i")
        }, sb = /^[^{]+\{\s*\[native \w/, tb = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ub = /^(?:input|select|textarea|button)$/i, vb = /^h\d$/i, wb = /'|\\/g, xb = RegExp("\\\\([\\da-f]{1,6}" + eb + "?|(" + eb + ")|.)", "ig"), yb = function(a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(55296 | d >> 10, 56320 | 1023 & d);
        };
        try {
            ab.apply(Z = bb.call(O.childNodes), O.childNodes), Z[O.childNodes.length].nodeType;
        } catch (zb) {
            ab = {
                apply: Z.length ? function(a, b) {
                    _.apply(a, bb.call(b));
                } : function(a, b) {
                    for (var c = a.length, d = 0; a[c++] = b[d++]; ) ;
                    a.length = c - 1;
                }
            };
        }
        B = c.isXML = function(a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1;
        }, x = c.support = {}, F = c.setDocument = function(a) {
            var c = a ? a.ownerDocument || a : O, d = c.defaultView;
            return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, 
            I = !B(c), d && d.attachEvent && d !== d.top && d.attachEvent("onbeforeunload", function() {
                F();
            }), x.attributes = f(function(a) {
                return a.className = "i", !a.getAttribute("className");
            }), x.getElementsByTagName = f(function(a) {
                return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length;
            }), x.getElementsByClassName = f(function(a) {
                return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 
                2 === a.getElementsByClassName("i").length;
            }), x.getById = f(function(a) {
                return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length;
            }), x.getById ? (z.find.ID = function(a, b) {
                if (typeof b.getElementById !== W && I) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [ c ] : [];
                }
            }, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    return a.getAttribute("id") === b;
                };
            }) : (delete z.find.ID, z.filter.ID = function(a) {
                var b = a.replace(xb, yb);
                return function(a) {
                    var c = typeof a.getAttributeNode !== W && a.getAttributeNode("id");
                    return c && c.value === b;
                };
            }), z.find.TAG = x.getElementsByTagName ? function(a, c) {
                return typeof c.getElementsByTagName !== W ? c.getElementsByTagName(a) : b;
            } : function(a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    for (;c = f[e++]; ) 1 === c.nodeType && d.push(c);
                    return d;
                }
                return f;
            }, z.find.CLASS = x.getElementsByClassName && function(a, c) {
                return typeof c.getElementsByClassName !== W && I ? c.getElementsByClassName(a) : b;
            }, K = [], J = [], (x.qsa = sb.test(c.querySelectorAll)) && (f(function(a) {
                a.innerHTML = "<select><option selected=''></option></select>", a.querySelectorAll("[selected]").length || J.push("\\[" + eb + "*(?:value|" + db + ")"), 
                a.querySelectorAll(":checked").length || J.push(":checked");
            }), f(function(a) {
                var b = c.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("t", ""), a.querySelectorAll("[t^='']").length && J.push("[*^$]=" + eb + "*(?:''|\"\")"), 
                a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), 
                J.push(",.*:");
            })), (x.matchesSelector = sb.test(L = H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && f(function(a) {
                x.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ib);
            }), J = J.length && RegExp(J.join("|")), K = K.length && RegExp(K.join("|")), M = sb.test(H.contains) || H.compareDocumentPosition ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
            } : function(a, b) {
                if (b) for (;b = b.parentNode; ) if (b === a) return !0;
                return !1;
            }, V = H.compareDocumentPosition ? function(a, b) {
                if (a === b) return U = !0, 0;
                var d = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition(b);
                return d ? 1 & d || !x.sortDetached && b.compareDocumentPosition(a) === d ? a === c || M(O, a) ? -1 : b === c || M(O, b) ? 1 : E ? cb.call(E, a) - cb.call(E, b) : 0 : 4 & d ? -1 : 1 : a.compareDocumentPosition ? -1 : 1;
            } : function(a, b) {
                var d, e = 0, f = a.parentNode, g = b.parentNode, i = [ a ], j = [ b ];
                if (a === b) return U = !0, 0;
                if (!f || !g) return a === c ? -1 : b === c ? 1 : f ? -1 : g ? 1 : E ? cb.call(E, a) - cb.call(E, b) : 0;
                if (f === g) return h(a, b);
                for (d = a; d = d.parentNode; ) i.unshift(d);
                for (d = b; d = d.parentNode; ) j.unshift(d);
                for (;i[e] === j[e]; ) e++;
                return e ? h(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0;
            }, c) : G;
        }, c.matches = function(a, b) {
            return c(a, null, null, b);
        }, c.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== G && F(a), b = b.replace(ob, "='$1']"), !(!x.matchesSelector || !I || K && K.test(b) || J && J.test(b))) try {
                var d = L.call(a, b);
                if (d || x.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
            } catch (e) {}
            return c(b, G, null, [ a ]).length > 0;
        }, c.contains = function(a, b) {
            return (a.ownerDocument || a) !== G && F(a), M(a, b);
        }, c.attr = function(a, c) {
            (a.ownerDocument || a) !== G && F(a);
            var d = z.attrHandle[c.toLowerCase()], e = d && Y.call(z.attrHandle, c.toLowerCase()) ? d(a, c, !I) : b;
            return e === b ? x.attributes || !I ? a.getAttribute(c) : (e = a.getAttributeNode(c)) && e.specified ? e.value : null : e;
        }, c.error = function(a) {
            throw Error("Syntax error, unrecognized expression: " + a);
        }, c.uniqueSort = function(a) {
            var b, c = [], d = 0, e = 0;
            if (U = !x.detectDuplicates, E = !x.sortStable && a.slice(0), a.sort(V), U) {
                for (;b = a[e++]; ) b === a[e] && (d = c.push(e));
                for (;d--; ) a.splice(c[d], 1);
            }
            return a;
        }, A = c.getText = function(a) {
            var b, c = "", d = 0, e = a.nodeType;
            if (e) {
                if (1 === e || 9 === e || 11 === e) {
                    if ("string" == typeof a.textContent) return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling) c += A(a);
                } else if (3 === e || 4 === e) return a.nodeValue;
            } else for (;b = a[d]; d++) c += A(b);
            return c;
        }, z = c.selectors = {
            cacheLength: 50,
            createPseudo: e,
            match: rb,
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
                ATTR: function(a) {
                    return a[1] = a[1].replace(xb, yb), a[3] = (a[4] || a[5] || "").replace(xb, yb), 
                    "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
                },
                CHILD: function(a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || c.error(a[0]), 
                    a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && c.error(a[0]), 
                    a;
                },
                PSEUDO: function(a) {
                    var c, d = !a[5] && a[2];
                    return rb.CHILD.test(a[0]) ? null : (a[3] && a[4] !== b ? a[2] = a[4] : d && pb.test(d) && (c = m(d, !0)) && (c = d.indexOf(")", d.length - c) - d.length) && (a[0] = a[0].slice(0, c), 
                    a[2] = d.slice(0, c)), a.slice(0, 3));
                }
            },
            filter: {
                TAG: function(a) {
                    var b = a.replace(xb, yb).toLowerCase();
                    return "*" === a ? function() {
                        return !0;
                    } : function(a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b;
                    };
                },
                CLASS: function(a) {
                    var b = R[a + " "];
                    return b || (b = RegExp("(^|" + eb + ")" + a + "(" + eb + "|$)")) && R(a, function(a) {
                        return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== W && a.getAttribute("class") || "");
                    });
                },
                ATTR: function(a, b, d) {
                    return function(e) {
                        var f = c.attr(e, a);
                        return null == f ? "!=" === b : b ? (f += "", "=" === b ? f === d : "!=" === b ? f !== d : "^=" === b ? d && 0 === f.indexOf(d) : "*=" === b ? d && f.indexOf(d) > -1 : "$=" === b ? d && f.slice(-d.length) === d : "~=" === b ? (" " + f + " ").indexOf(d) > -1 : "|=" === b ? f === d || f.slice(0, d.length + 1) === d + "-" : !1) : !0;
                    };
                },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) {
                        return !!a.parentNode;
                    } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                for (;p; ) {
                                    for (l = b; l = l[p]; ) if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling";
                                }
                                return !0;
                            }
                            if (o = [ g ? q.firstChild : q.lastChild ], g && s) {
                                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], 
                                l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop(); ) if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [ P, n, m ];
                                    break;
                                }
                            } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1]; else for (;(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [ P, m ]), 
                            l !== b)); ) ;
                            return m -= e, m === d || 0 === m % d && m / d >= 0;
                        }
                    };
                },
                PSEUDO: function(a, b) {
                    var d, f = z.pseudos[a] || z.setFilters[a.toLowerCase()] || c.error("unsupported pseudo: " + a);
                    return f[N] ? f(b) : f.length > 1 ? (d = [ a, a, "", b ], z.setFilters.hasOwnProperty(a.toLowerCase()) ? e(function(a, c) {
                        for (var d, e = f(a, b), g = e.length; g--; ) d = cb.call(a, e[g]), a[d] = !(c[d] = e[g]);
                    }) : function(a) {
                        return f(a, 0, d);
                    }) : f;
                }
            },
            pseudos: {
                not: e(function(a) {
                    var b = [], c = [], d = C(a.replace(jb, "$1"));
                    return d[N] ? e(function(a, b, c, e) {
                        for (var f, g = d(a, null, e, []), h = a.length; h--; ) (f = g[h]) && (a[h] = !(b[h] = f));
                    }) : function(a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop();
                    };
                }),
                has: e(function(a) {
                    return function(b) {
                        return c(a, b).length > 0;
                    };
                }),
                contains: e(function(a) {
                    return function(b) {
                        return (b.textContent || b.innerText || A(b)).indexOf(a) > -1;
                    };
                }),
                lang: e(function(a) {
                    return qb.test(a || "") || c.error("unsupported lang: " + a), a = a.replace(xb, yb).toLowerCase(), 
                    function(b) {
                        var c;
                        do if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), 
                        c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1;
                    };
                }),
                target: function(b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id;
                },
                root: function(a) {
                    return a === H;
                },
                focus: function(a) {
                    return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
                },
                enabled: function(a) {
                    return a.disabled === !1;
                },
                disabled: function(a) {
                    return a.disabled === !0;
                },
                checked: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected;
                },
                selected: function(a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
                },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling) if (a.nodeName > "@" || 3 === a.nodeType || 4 === a.nodeType) return !1;
                    return !0;
                },
                parent: function(a) {
                    return !z.pseudos.empty(a);
                },
                header: function(a) {
                    return vb.test(a.nodeName);
                },
                input: function(a) {
                    return ub.test(a.nodeName);
                },
                button: function(a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b;
                },
                text: function(a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || b.toLowerCase() === a.type);
                },
                first: k(function() {
                    return [ 0 ];
                }),
                last: k(function(a, b) {
                    return [ b - 1 ];
                }),
                eq: k(function(a, b, c) {
                    return [ 0 > c ? c + b : c ];
                }),
                even: k(function(a, b) {
                    for (var c = 0; b > c; c += 2) a.push(c);
                    return a;
                }),
                odd: k(function(a, b) {
                    for (var c = 1; b > c; c += 2) a.push(c);
                    return a;
                }),
                lt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0; ) a.push(d);
                    return a;
                }),
                gt: k(function(a, b, c) {
                    for (var d = 0 > c ? c + b : c; b > ++d; ) a.push(d);
                    return a;
                })
            }
        }, z.pseudos.nth = z.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) z.pseudos[w] = i(w);
        for (w in {
            submit: !0,
            reset: !0
        }) z.pseudos[w] = j(w);
        l.prototype = z.filters = z.pseudos, z.setFilters = new l(), C = c.compile = function(a, b) {
            var c, d = [], e = [], f = T[a + " "];
            if (!f) {
                for (b || (b = m(a)), c = b.length; c--; ) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
                f = T(a, t(e, d));
            }
            return f;
        }, x.sortStable = N.split("").sort(V).join("") === N, x.detectDuplicates = U, F(), 
        x.sortDetached = f(function(a) {
            return 1 & a.compareDocumentPosition(G.createElement("div"));
        }), f(function(a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
        }) || g("type|href|height|width", function(a, c, d) {
            return d ? b : a.getAttribute(c, "type" === c.toLowerCase() ? 1 : 2);
        }), x.attributes && f(function(a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
        }) || g("value", function(a, c, d) {
            return d || "input" !== a.nodeName.toLowerCase() ? b : a.defaultValue;
        }), f(function(a) {
            return null == a.getAttribute("disabled");
        }) || g(db, function(a, c, d) {
            var e;
            return d ? b : (e = a.getAttributeNode(c)) && e.specified ? e.value : a[c] === !0 ? c.toLowerCase() : null;
        }), kb.find = c, kb.expr = c.selectors, kb.expr[":"] = kb.expr.pseudos, kb.unique = c.uniqueSort, 
        kb.text = c.getText, kb.isXMLDoc = c.isXML, kb.contains = c.contains;
    }(a);
    var zb = {};
    kb.Callbacks = function(a) {
        a = "string" == typeof a ? zb[a] || d(a) : kb.extend({}, a);
        var c, e, f, g, h, i, j = [], k = !a.once && [], l = function(b) {
            for (e = a.memory && b, f = !0, h = i || 0, i = 0, g = j.length, c = !0; j && g > h; h++) if (j[h].apply(b[0], b[1]) === !1 && a.stopOnFalse) {
                e = !1;
                break;
            }
            c = !1, j && (k ? k.length && l(k.shift()) : e ? j = [] : m.disable());
        }, m = {
            add: function() {
                if (j) {
                    var b = j.length;
                    !function d(b) {
                        kb.each(b, function(b, c) {
                            var e = kb.type(c);
                            "function" === e ? a.unique && m.has(c) || j.push(c) : c && c.length && "string" !== e && d(c);
                        });
                    }(arguments), c ? g = j.length : e && (i = b, l(e));
                }
                return this;
            },
            remove: function() {
                return j && kb.each(arguments, function(a, b) {
                    for (var d; (d = kb.inArray(b, j, d)) > -1; ) j.splice(d, 1), c && (g >= d && g--, 
                    h >= d && h--);
                }), this;
            },
            has: function(a) {
                return a ? kb.inArray(a, j) > -1 : !(!j || !j.length);
            },
            empty: function() {
                return j = [], g = 0, this;
            },
            disable: function() {
                return j = k = e = b, this;
            },
            disabled: function() {
                return !j;
            },
            lock: function() {
                return k = b, e || m.disable(), this;
            },
            locked: function() {
                return !k;
            },
            fireWith: function(a, b) {
                return !j || f && !k || (b = b || [], b = [ a, b.slice ? b.slice() : b ], c ? k.push(b) : l(b)), 
                this;
            },
            fire: function() {
                return m.fireWith(this, arguments), this;
            },
            fired: function() {
                return !!f;
            }
        };
        return m;
    }, kb.extend({
        Deferred: function(a) {
            var b = [ [ "resolve", "done", kb.Callbacks("once memory"), "resolved" ], [ "reject", "fail", kb.Callbacks("once memory"), "rejected" ], [ "notify", "progress", kb.Callbacks("memory") ] ], c = "pending", d = {
                state: function() {
                    return c;
                },
                always: function() {
                    return e.done(arguments).fail(arguments), this;
                },
                then: function() {
                    var a = arguments;
                    return kb.Deferred(function(c) {
                        kb.each(b, function(b, f) {
                            var g = f[0], h = kb.isFunction(a[b]) && a[b];
                            e[f[1]](function() {
                                var a = h && h.apply(this, arguments);
                                a && kb.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[g + "With"](this === d ? c.promise() : this, h ? [ a ] : arguments);
                            });
                        }), a = null;
                    }).promise();
                },
                promise: function(a) {
                    return null != a ? kb.extend(a, d) : d;
                }
            }, e = {};
            return d.pipe = d.then, kb.each(b, function(a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function() {
                    c = h;
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this;
                }, e[f[0] + "With"] = g.fireWith;
            }), d.promise(e), a && a.call(e, e), e;
        },
        when: function(a) {
            var b, c, d, e = 0, f = fb.call(arguments), g = f.length, h = 1 !== g || a && kb.isFunction(a.promise) ? g : 0, i = 1 === h ? a : kb.Deferred(), j = function(a, c, d) {
                return function(e) {
                    c[a] = this, d[a] = arguments.length > 1 ? fb.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d);
                };
            };
            if (g > 1) for (b = Array(g), c = Array(g), d = Array(g); g > e; e++) f[e] && kb.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
            return h || i.resolveWith(d, f), i.promise();
        }
    }), kb.support = function(b) {
        var c, d, e, f, g, h, i, j, k, l = Y.createElement("div");
        if (l.setAttribute("className", "t"), l.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", 
        c = l.getElementsByTagName("*") || [], d = l.getElementsByTagName("a")[0], !d || !d.style || !c.length) return b;
        f = Y.createElement("select"), h = f.appendChild(Y.createElement("option")), e = l.getElementsByTagName("input")[0], 
        d.style.cssText = "top:1px;float:left;opacity:.5", b.getSetAttribute = "t" !== l.className, 
        b.leadingWhitespace = 3 === l.firstChild.nodeType, b.tbody = !l.getElementsByTagName("tbody").length, 
        b.htmlSerialize = !!l.getElementsByTagName("link").length, b.style = /top/.test(d.getAttribute("style")), 
        b.hrefNormalized = "/a" === d.getAttribute("href"), b.opacity = /^0.5/.test(d.style.opacity), 
        b.cssFloat = !!d.style.cssFloat, b.checkOn = !!e.value, b.optSelected = h.selected, 
        b.enctype = !!Y.createElement("form").enctype, b.html5Clone = "<:nav></:nav>" !== Y.createElement("nav").cloneNode(!0).outerHTML, 
        b.inlineBlockNeedsLayout = !1, b.shrinkWrapBlocks = !1, b.pixelPosition = !1, b.deleteExpando = !0, 
        b.noCloneEvent = !0, b.reliableMarginRight = !0, b.boxSizingReliable = !0, e.checked = !0, 
        b.noCloneChecked = e.cloneNode(!0).checked, f.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete l.test;
        } catch (m) {
            b.deleteExpando = !1;
        }
        e = Y.createElement("input"), e.setAttribute("value", ""), b.input = "" === e.getAttribute("value"), 
        e.value = "t", e.setAttribute("type", "radio"), b.radioValue = "t" === e.value, 
        e.setAttribute("checked", "t"), e.setAttribute("name", "t"), g = Y.createDocumentFragment(), 
        g.appendChild(e), b.appendChecked = e.checked, b.checkClone = g.cloneNode(!0).cloneNode(!0).lastChild.checked, 
        l.attachEvent && (l.attachEvent("onclick", function() {
            b.noCloneEvent = !1;
        }), l.cloneNode(!0).click());
        for (k in {
            submit: !0,
            change: !0,
            focusin: !0
        }) l.setAttribute(i = "on" + k, "t"), b[k + "Bubbles"] = i in a || l.attributes[i].expando === !1;
        l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", 
        b.clearCloneStyle = "content-box" === l.style.backgroundClip;
        for (k in kb(b)) break;
        return b.ownLast = "0" !== k, kb(function() {
            var c, d, e, f = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", g = Y.getElementsByTagName("body")[0];
            g && (c = Y.createElement("div"), c.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", 
            g.appendChild(c).appendChild(l), l.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", 
            e = l.getElementsByTagName("td"), e[0].style.cssText = "padding:0;margin:0;border:0;display:none", 
            j = 0 === e[0].offsetHeight, e[0].style.display = "", e[1].style.display = "none", 
            b.reliableHiddenOffsets = j && 0 === e[0].offsetHeight, l.innerHTML = "", l.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", 
            kb.swap(g, null != g.style.zoom ? {
                zoom: 1
            } : {}, function() {
                b.boxSizing = 4 === l.offsetWidth;
            }), a.getComputedStyle && (b.pixelPosition = "1%" !== (a.getComputedStyle(l, null) || {}).top, 
            b.boxSizingReliable = "4px" === (a.getComputedStyle(l, null) || {
                width: "4px"
            }).width, d = l.appendChild(Y.createElement("div")), d.style.cssText = l.style.cssText = f, 
            d.style.marginRight = d.style.width = "0", l.style.width = "1px", b.reliableMarginRight = !parseFloat((a.getComputedStyle(d, null) || {}).marginRight)), 
            typeof l.style.zoom !== W && (l.innerHTML = "", l.style.cssText = f + "width:1px;padding:1px;display:inline;zoom:1", 
            b.inlineBlockNeedsLayout = 3 === l.offsetWidth, l.style.display = "block", l.innerHTML = "<div></div>", 
            l.firstChild.style.width = "5px", b.shrinkWrapBlocks = 3 !== l.offsetWidth, b.inlineBlockNeedsLayout && (g.style.zoom = 1)), 
            g.removeChild(c), c = l = e = d = null);
        }), c = f = g = h = d = e = null, b;
    }({});
    var Ab = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, Bb = /([A-Z])/g;
    kb.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(a) {
            return a = a.nodeType ? kb.cache[a[kb.expando]] : a[kb.expando], !!a && !h(a);
        },
        data: function(a, b, c) {
            return e(a, b, c);
        },
        removeData: function(a, b) {
            return f(a, b);
        },
        _data: function(a, b, c) {
            return e(a, b, c, !0);
        },
        _removeData: function(a, b) {
            return f(a, b, !0);
        },
        acceptData: function(a) {
            if (a.nodeType && 1 !== a.nodeType && 9 !== a.nodeType) return !1;
            var b = a.nodeName && kb.noData[a.nodeName.toLowerCase()];
            return !b || b !== !0 && a.getAttribute("classid") === b;
        }
    }), kb.fn.extend({
        data: function(a, c) {
            var d, e, f = null, h = 0, i = this[0];
            if (a === b) {
                if (this.length && (f = kb.data(i), 1 === i.nodeType && !kb._data(i, "parsedAttrs"))) {
                    for (d = i.attributes; d.length > h; h++) e = d[h].name, 0 === e.indexOf("data-") && (e = kb.camelCase(e.slice(5)), 
                    g(i, e, f[e]));
                    kb._data(i, "parsedAttrs", !0);
                }
                return f;
            }
            return "object" == typeof a ? this.each(function() {
                kb.data(this, a);
            }) : arguments.length > 1 ? this.each(function() {
                kb.data(this, a, c);
            }) : i ? g(i, a, kb.data(i, a)) : null;
        },
        removeData: function(a) {
            return this.each(function() {
                kb.removeData(this, a);
            });
        }
    }), kb.extend({
        queue: function(a, c, d) {
            var e;
            return a ? (c = (c || "fx") + "queue", e = kb._data(a, c), d && (!e || kb.isArray(d) ? e = kb._data(a, c, kb.makeArray(d)) : e.push(d)), 
            e || []) : b;
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = kb.queue(a, b), d = c.length, e = c.shift(), f = kb._queueHooks(a, b), g = function() {
                kb.dequeue(a, b);
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), 
            delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
        },
        _queueHooks: function(a, b) {
            var c = b + "queueHooks";
            return kb._data(a, c) || kb._data(a, c, {
                empty: kb.Callbacks("once memory").add(function() {
                    kb._removeData(a, b + "queue"), kb._removeData(a, c);
                })
            });
        }
    }), kb.fn.extend({
        queue: function(a, c) {
            var d = 2;
            return "string" != typeof a && (c = a, a = "fx", d--), d > arguments.length ? kb.queue(this[0], a) : c === b ? this : this.each(function() {
                var b = kb.queue(this, a, c);
                kb._queueHooks(this, a), "fx" === a && "inprogress" !== b[0] && kb.dequeue(this, a);
            });
        },
        dequeue: function(a) {
            return this.each(function() {
                kb.dequeue(this, a);
            });
        },
        delay: function(a, b) {
            return a = kb.fx ? kb.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d);
                };
            });
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", []);
        },
        promise: function(a, c) {
            var d, e = 1, f = kb.Deferred(), g = this, h = this.length, i = function() {
                --e || f.resolveWith(g, [ g ]);
            };
            for ("string" != typeof a && (c = a, a = b), a = a || "fx"; h--; ) d = kb._data(g[h], a + "queueHooks"), 
            d && d.empty && (e++, d.empty.add(i));
            return i(), f.promise(c);
        }
    });
    var Cb, Db, Eb = /[\t\r\n\f]/g, Fb = /\r/g, Gb = /^(?:input|select|textarea|button|object)$/i, Hb = /^(?:a|area)$/i, Ib = /^(?:checked|selected)$/i, Jb = kb.support.getSetAttribute, Kb = kb.support.input;
    kb.fn.extend({
        attr: function(a, b) {
            return kb.access(this, kb.attr, a, b, arguments.length > 1);
        },
        removeAttr: function(a) {
            return this.each(function() {
                kb.removeAttr(this, a);
            });
        },
        prop: function(a, b) {
            return kb.access(this, kb.prop, a, b, arguments.length > 1);
        },
        removeProp: function(a) {
            return a = kb.propFix[a] || a, this.each(function() {
                try {
                    this[a] = b, delete this[a];
                } catch (c) {}
            });
        },
        addClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).addClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : " ")) {
                for (f = 0; e = b[f++]; ) 0 > d.indexOf(" " + e + " ") && (d += e + " ");
                c.className = kb.trim(d);
            }
            return this;
        },
        removeClass: function(a) {
            var b, c, d, e, f, g = 0, h = this.length, i = 0 === arguments.length || "string" == typeof a && a;
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).removeClass(a.call(this, b, this.className));
            });
            if (i) for (b = (a || "").match(mb) || []; h > g; g++) if (c = this[g], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Eb, " ") : "")) {
                for (f = 0; e = b[f++]; ) for (;d.indexOf(" " + e + " ") >= 0; ) d = d.replace(" " + e + " ", " ");
                c.className = a ? kb.trim(d) : "";
            }
            return this;
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : kb.isFunction(a) ? this.each(function(c) {
                kb(this).toggleClass(a.call(this, c, this.className, b), b);
            }) : this.each(function() {
                if ("string" === c) for (var b, d = 0, e = kb(this), f = a.match(mb) || []; b = f[d++]; ) e.hasClass(b) ? e.removeClass(b) : e.addClass(b); else (c === W || "boolean" === c) && (this.className && kb._data(this, "__className__", this.className), 
                this.className = this.className || a === !1 ? "" : kb._data(this, "__className__") || "");
            });
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++) if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Eb, " ").indexOf(b) >= 0) return !0;
            return !1;
        },
        val: function(a) {
            var c, d, e, f = this[0];
            return arguments.length ? (e = kb.isFunction(a), this.each(function(c) {
                var f;
                1 === this.nodeType && (f = e ? a.call(this, c, kb(this).val()) : a, null == f ? f = "" : "number" == typeof f ? f += "" : kb.isArray(f) && (f = kb.map(f, function(a) {
                    return null == a ? "" : a + "";
                })), d = kb.valHooks[this.type] || kb.valHooks[this.nodeName.toLowerCase()], d && "set" in d && d.set(this, f, "value") !== b || (this.value = f));
            })) : f ? (d = kb.valHooks[f.type] || kb.valHooks[f.nodeName.toLowerCase()], d && "get" in d && (c = d.get(f, "value")) !== b ? c : (c = f.value, 
            "string" == typeof c ? c.replace(Fb, "") : null == c ? "" : c)) : void 0;
        }
    }), kb.extend({
        valHooks: {
            option: {
                get: function(a) {
                    var b = kb.find.attr(a, "value");
                    return null != b ? b : a.text;
                }
            },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) if (c = d[i], 
                    !(!c.selected && i !== e || (kb.support.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && kb.nodeName(c.parentNode, "optgroup"))) {
                        if (b = kb(c).val(), f) return b;
                        g.push(b);
                    }
                    return g;
                },
                set: function(a, b) {
                    for (var c, d, e = a.options, f = kb.makeArray(b), g = e.length; g--; ) d = e[g], 
                    (d.selected = kb.inArray(kb(d).val(), f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f;
                }
            }
        },
        attr: function(a, c, d) {
            var e, f, g = a.nodeType;
            return a && 3 !== g && 8 !== g && 2 !== g ? typeof a.getAttribute === W ? kb.prop(a, c, d) : (1 === g && kb.isXMLDoc(a) || (c = c.toLowerCase(), 
            e = kb.attrHooks[c] || (kb.expr.match.bool.test(c) ? Db : Cb)), d === b ? e && "get" in e && null !== (f = e.get(a, c)) ? f : (f = kb.find.attr(a, c), 
            null == f ? b : f) : null !== d ? e && "set" in e && (f = e.set(a, d, c)) !== b ? f : (a.setAttribute(c, d + ""), 
            d) : (kb.removeAttr(a, c), b)) : void 0;
        },
        removeAttr: function(a, b) {
            var c, d, e = 0, f = b && b.match(mb);
            if (f && 1 === a.nodeType) for (;c = f[e++]; ) d = kb.propFix[c] || c, kb.expr.match.bool.test(c) ? Kb && Jb || !Ib.test(c) ? a[d] = !1 : a[kb.camelCase("default-" + c)] = a[d] = !1 : kb.attr(a, c, ""), 
            a.removeAttribute(Jb ? c : d);
        },
        attrHooks: {
            type: {
                set: function(a, b) {
                    if (!kb.support.radioValue && "radio" === b && kb.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b;
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(a, c, d) {
            var e, f, g, h = a.nodeType;
            return a && 3 !== h && 8 !== h && 2 !== h ? (g = 1 !== h || !kb.isXMLDoc(a), g && (c = kb.propFix[c] || c, 
            f = kb.propHooks[c]), d !== b ? f && "set" in f && (e = f.set(a, d, c)) !== b ? e : a[c] = d : f && "get" in f && null !== (e = f.get(a, c)) ? e : a[c]) : void 0;
        },
        propHooks: {
            tabIndex: {
                get: function(a) {
                    var b = kb.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : Gb.test(a.nodeName) || Hb.test(a.nodeName) && a.href ? 0 : -1;
                }
            }
        }
    }), Db = {
        set: function(a, b, c) {
            return b === !1 ? kb.removeAttr(a, c) : Kb && Jb || !Ib.test(c) ? a.setAttribute(!Jb && kb.propFix[c] || c, c) : a[kb.camelCase("default-" + c)] = a[c] = !0, 
            c;
        }
    }, kb.each(kb.expr.match.bool.source.match(/\w+/g), function(a, c) {
        var d = kb.expr.attrHandle[c] || kb.find.attr;
        kb.expr.attrHandle[c] = Kb && Jb || !Ib.test(c) ? function(a, c, e) {
            var f = kb.expr.attrHandle[c], g = e ? b : (kb.expr.attrHandle[c] = b) != d(a, c, e) ? c.toLowerCase() : null;
            return kb.expr.attrHandle[c] = f, g;
        } : function(a, c, d) {
            return d ? b : a[kb.camelCase("default-" + c)] ? c.toLowerCase() : null;
        };
    }), Kb && Jb || (kb.attrHooks.value = {
        set: function(a, c, d) {
            return kb.nodeName(a, "input") ? (a.defaultValue = c, b) : Cb && Cb.set(a, c, d);
        }
    }), Jb || (Cb = {
        set: function(a, c, d) {
            var e = a.getAttributeNode(d);
            return e || a.setAttributeNode(e = a.ownerDocument.createAttribute(d)), e.value = c += "", 
            "value" === d || c === a.getAttribute(d) ? c : b;
        }
    }, kb.expr.attrHandle.id = kb.expr.attrHandle.name = kb.expr.attrHandle.coords = function(a, c, d) {
        var e;
        return d ? b : (e = a.getAttributeNode(c)) && "" !== e.value ? e.value : null;
    }, kb.valHooks.button = {
        get: function(a, c) {
            var d = a.getAttributeNode(c);
            return d && d.specified ? d.value : b;
        },
        set: Cb.set
    }, kb.attrHooks.contenteditable = {
        set: function(a, b, c) {
            Cb.set(a, "" === b ? !1 : b, c);
        }
    }, kb.each([ "width", "height" ], function(a, c) {
        kb.attrHooks[c] = {
            set: function(a, d) {
                return "" === d ? (a.setAttribute(c, "auto"), d) : b;
            }
        };
    })), kb.support.hrefNormalized || kb.each([ "href", "src" ], function(a, b) {
        kb.propHooks[b] = {
            get: function(a) {
                return a.getAttribute(b, 4);
            }
        };
    }), kb.support.style || (kb.attrHooks.style = {
        get: function(a) {
            return a.style.cssText || b;
        },
        set: function(a, b) {
            return a.style.cssText = b + "";
        }
    }), kb.support.optSelected || (kb.propHooks.selected = {
        get: function(a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
        }
    }), kb.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], function() {
        kb.propFix[this.toLowerCase()] = this;
    }), kb.support.enctype || (kb.propFix.enctype = "encoding"), kb.each([ "radio", "checkbox" ], function() {
        kb.valHooks[this] = {
            set: function(a, c) {
                return kb.isArray(c) ? a.checked = kb.inArray(kb(a).val(), c) >= 0 : b;
            }
        }, kb.support.checkOn || (kb.valHooks[this].get = function(a) {
            return null === a.getAttribute("value") ? "on" : a.value;
        });
    });
    var Lb = /^(?:input|select|textarea)$/i, Mb = /^key/, Nb = /^(?:mouse|contextmenu)|click/, Ob = /^(?:focusinfocus|focusoutblur)$/, Pb = /^([^.]*)(?:\.(.+)|)$/;
    kb.event = {
        global: {},
        add: function(a, c, d, e, f) {
            var g, h, i, j, k, l, m, n, o, p, q, r = kb._data(a);
            if (r) {
                for (d.handler && (j = d, d = j.handler, f = j.selector), d.guid || (d.guid = kb.guid++), 
                (h = r.events) || (h = r.events = {}), (l = r.handle) || (l = r.handle = function(a) {
                    return typeof kb === W || a && kb.event.triggered === a.type ? b : kb.event.dispatch.apply(l.elem, arguments);
                }, l.elem = a), c = (c || "").match(mb) || [ "" ], i = c.length; i--; ) g = Pb.exec(c[i]) || [], 
                o = q = g[1], p = (g[2] || "").split(".").sort(), o && (k = kb.event.special[o] || {}, 
                o = (f ? k.delegateType : k.bindType) || o, k = kb.event.special[o] || {}, m = kb.extend({
                    type: o,
                    origType: q,
                    data: e,
                    handler: d,
                    guid: d.guid,
                    selector: f,
                    needsContext: f && kb.expr.match.needsContext.test(f),
                    namespace: p.join(".")
                }, j), (n = h[o]) || (n = h[o] = [], n.delegateCount = 0, k.setup && k.setup.call(a, e, p, l) !== !1 || (a.addEventListener ? a.addEventListener(o, l, !1) : a.attachEvent && a.attachEvent("on" + o, l))), 
                k.add && (k.add.call(a, m), m.handler.guid || (m.handler.guid = d.guid)), f ? n.splice(n.delegateCount++, 0, m) : n.push(m), 
                kb.event.global[o] = !0);
                a = null;
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, n, o, p, q = kb.hasData(a) && kb._data(a);
            if (q && (k = q.events)) {
                for (b = (b || "").match(mb) || [ "" ], j = b.length; j--; ) if (h = Pb.exec(b[j]) || [], 
                n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
                    for (l = kb.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, 
                    m = k[n] || [], h = h[2] && RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), 
                    i = f = m.length; f--; ) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), 
                    g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || kb.removeEvent(a, n, q.handle), 
                    delete k[n]);
                } else for (n in k) kb.event.remove(a, n + b[j], c, d, !0);
                kb.isEmptyObject(k) && (delete q.handle, kb._removeData(a, "events"));
            }
        },
        trigger: function(c, d, e, f) {
            var g, h, i, j, k, l, m, n = [ e || Y ], o = ib.call(c, "type") ? c.type : c, p = ib.call(c, "namespace") ? c.namespace.split(".") : [];
            if (i = l = e = e || Y, 3 !== e.nodeType && 8 !== e.nodeType && !Ob.test(o + kb.event.triggered) && (o.indexOf(".") >= 0 && (p = o.split("."), 
            o = p.shift(), p.sort()), h = 0 > o.indexOf(":") && "on" + o, c = c[kb.expando] ? c : new kb.Event(o, "object" == typeof c && c), 
            c.isTrigger = f ? 2 : 3, c.namespace = p.join("."), c.namespace_re = c.namespace ? RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, 
            c.result = b, c.target || (c.target = e), d = null == d ? [ c ] : kb.makeArray(d, [ c ]), 
            k = kb.event.special[o] || {}, f || !k.trigger || k.trigger.apply(e, d) !== !1)) {
                if (!f && !k.noBubble && !kb.isWindow(e)) {
                    for (j = k.delegateType || o, Ob.test(j + o) || (i = i.parentNode); i; i = i.parentNode) n.push(i), 
                    l = i;
                    l === (e.ownerDocument || Y) && n.push(l.defaultView || l.parentWindow || a);
                }
                for (m = 0; (i = n[m++]) && !c.isPropagationStopped(); ) c.type = m > 1 ? j : k.bindType || o, 
                g = (kb._data(i, "events") || {})[c.type] && kb._data(i, "handle"), g && g.apply(i, d), 
                g = h && i[h], g && kb.acceptData(i) && g.apply && g.apply(i, d) === !1 && c.preventDefault();
                if (c.type = o, !f && !c.isDefaultPrevented() && (!k._default || k._default.apply(n.pop(), d) === !1) && kb.acceptData(e) && h && e[o] && !kb.isWindow(e)) {
                    l = e[h], l && (e[h] = null), kb.event.triggered = o;
                    try {
                        e[o]();
                    } catch (q) {}
                    kb.event.triggered = b, l && (e[h] = l);
                }
                return c.result;
            }
        },
        dispatch: function(a) {
            a = kb.event.fix(a);
            var c, d, e, f, g, h = [], i = fb.call(arguments), j = (kb._data(this, "events") || {})[a.type] || [], k = kb.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                for (h = kb.event.handlers.call(this, a, j), c = 0; (f = h[c++]) && !a.isPropagationStopped(); ) for (a.currentTarget = f.elem, 
                g = 0; (e = f.handlers[g++]) && !a.isImmediatePropagationStopped(); ) (!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, 
                a.data = e.data, d = ((kb.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), 
                d !== b && (a.result = d) === !1 && (a.preventDefault(), a.stopPropagation()));
                return k.postDispatch && k.postDispatch.call(this, a), a.result;
            }
        },
        handlers: function(a, c) {
            var d, e, f, g, h = [], i = c.delegateCount, j = a.target;
            if (i && j.nodeType && (!a.button || "click" !== a.type)) for (;j != this; j = j.parentNode || this) if (1 === j.nodeType && (j.disabled !== !0 || "click" !== a.type)) {
                for (f = [], g = 0; i > g; g++) e = c[g], d = e.selector + " ", f[d] === b && (f[d] = e.needsContext ? kb(d, this).index(j) >= 0 : kb.find(d, this, null, [ j ]).length), 
                f[d] && f.push(e);
                f.length && h.push({
                    elem: j,
                    handlers: f
                });
            }
            return c.length > i && h.push({
                elem: this,
                handlers: c.slice(i)
            }), h;
        },
        fix: function(a) {
            if (a[kb.expando]) return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            for (g || (this.fixHooks[e] = g = Nb.test(e) ? this.mouseHooks : Mb.test(e) ? this.keyHooks : {}), 
            d = g.props ? this.props.concat(g.props) : this.props, a = new kb.Event(f), b = d.length; b--; ) c = d[b], 
            a[c] = f[c];
            return a.target || (a.target = f.srcElement || Y), 3 === a.target.nodeType && (a.target = a.target.parentNode), 
            a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a;
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), 
                a;
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, c) {
                var d, e, f, g = c.button, h = c.fromElement;
                return null == a.pageX && null != c.clientX && (e = a.target.ownerDocument || Y, 
                f = e.documentElement, d = e.body, a.pageX = c.clientX + (f && f.scrollLeft || d && d.scrollLeft || 0) - (f && f.clientLeft || d && d.clientLeft || 0), 
                a.pageY = c.clientY + (f && f.scrollTop || d && d.scrollTop || 0) - (f && f.clientTop || d && d.clientTop || 0)), 
                !a.relatedTarget && h && (a.relatedTarget = h === a.target ? c.toElement : h), a.which || g === b || (a.which = 1 & g ? 1 : 2 & g ? 3 : 4 & g ? 2 : 0), 
                a;
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== k() && this.focus) try {
                        return this.focus(), !1;
                    } catch (a) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === k() && this.blur ? (this.blur(), !1) : b;
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return kb.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), 
                    !1) : b;
                },
                _default: function(a) {
                    return kb.nodeName(a.target, "a");
                }
            },
            beforeunload: {
                postDispatch: function(a) {
                    a.result !== b && (a.originalEvent.returnValue = a.result);
                }
            }
        },
        simulate: function(a, b, c, d) {
            var e = kb.extend(new kb.Event(), c, {
                type: a,
                isSimulated: !0,
                originalEvent: {}
            });
            d ? kb.event.trigger(e, null, b) : kb.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault();
        }
    }, kb.removeEvent = Y.removeEventListener ? function(a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1);
    } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === W && (a[d] = null), a.detachEvent(d, c));
    }, kb.Event = function(a, c) {
        return this instanceof kb.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, 
        this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? i : j) : this.type = a, 
        c && kb.extend(this, c), this.timeStamp = a && a.timeStamp || kb.now(), this[kb.expando] = !0, 
        b) : new kb.Event(a, c);
    }, kb.Event.prototype = {
        isDefaultPrevented: j,
        isPropagationStopped: j,
        isImmediatePropagationStopped: j,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = i, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1);
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = i, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0);
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = i, this.stopPropagation();
        }
    }, kb.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function(a, b) {
        kb.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !kb.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), 
                a.type = b), c;
            }
        };
    }), kb.support.submitBubbles || (kb.event.special.submit = {
        setup: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.add(this, "click._submit keypress._submit", function(a) {
                var c = a.target, d = kb.nodeName(c, "input") || kb.nodeName(c, "button") ? c.form : b;
                d && !kb._data(d, "submitBubbles") && (kb.event.add(d, "submit._submit", function(a) {
                    a._submit_bubble = !0;
                }), kb._data(d, "submitBubbles", !0));
            }), b);
        },
        postDispatch: function(a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && kb.event.simulate("submit", this.parentNode, a, !0));
        },
        teardown: function() {
            return kb.nodeName(this, "form") ? !1 : (kb.event.remove(this, "._submit"), b);
        }
    }), kb.support.changeBubbles || (kb.event.special.change = {
        setup: function() {
            return Lb.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (kb.event.add(this, "propertychange._change", function(a) {
                "checked" === a.originalEvent.propertyName && (this._just_changed = !0);
            }), kb.event.add(this, "click._change", function(a) {
                this._just_changed && !a.isTrigger && (this._just_changed = !1), kb.event.simulate("change", this, a, !0);
            })), !1) : (kb.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                Lb.test(b.nodeName) && !kb._data(b, "changeBubbles") && (kb.event.add(b, "change._change", function(a) {
                    !this.parentNode || a.isSimulated || a.isTrigger || kb.event.simulate("change", this.parentNode, a, !0);
                }), kb._data(b, "changeBubbles", !0));
            }), b);
        },
        handle: function(a) {
            var c = a.target;
            return this !== c || a.isSimulated || a.isTrigger || "radio" !== c.type && "checkbox" !== c.type ? a.handleObj.handler.apply(this, arguments) : b;
        },
        teardown: function() {
            return kb.event.remove(this, "._change"), !Lb.test(this.nodeName);
        }
    }), kb.support.focusinBubbles || kb.each({
        focus: "focusin",
        blur: "focusout"
    }, function(a, b) {
        var c = 0, d = function(a) {
            kb.event.simulate(b, a.target, kb.event.fix(a), !0);
        };
        kb.event.special[b] = {
            setup: function() {
                0 === c++ && Y.addEventListener(a, d, !0);
            },
            teardown: function() {
                0 === --c && Y.removeEventListener(a, d, !0);
            }
        };
    }), kb.fn.extend({
        on: function(a, c, d, e, f) {
            var g, h;
            if ("object" == typeof a) {
                "string" != typeof c && (d = d || c, c = b);
                for (g in a) this.on(g, c, d, a[g], f);
                return this;
            }
            if (null == d && null == e ? (e = c, d = c = b) : null == e && ("string" == typeof c ? (e = d, 
            d = b) : (e = d, d = c, c = b)), e === !1) e = j; else if (!e) return this;
            return 1 === f && (h = e, e = function(a) {
                return kb().off(a), h.apply(this, arguments);
            }, e.guid = h.guid || (h.guid = kb.guid++)), this.each(function() {
                kb.event.add(this, a, e, d, c);
            });
        },
        one: function(a, b, c, d) {
            return this.on(a, b, c, d, 1);
        },
        off: function(a, c, d) {
            var e, f;
            if (a && a.preventDefault && a.handleObj) return e = a.handleObj, kb(a.delegateTarget).off(e.namespace ? e.origType + "." + e.namespace : e.origType, e.selector, e.handler), 
            this;
            if ("object" == typeof a) {
                for (f in a) this.off(f, c, a[f]);
                return this;
            }
            return (c === !1 || "function" == typeof c) && (d = c, c = b), d === !1 && (d = j), 
            this.each(function() {
                kb.event.remove(this, a, d, c);
            });
        },
        trigger: function(a, b) {
            return this.each(function() {
                kb.event.trigger(a, b, this);
            });
        },
        triggerHandler: function(a, c) {
            var d = this[0];
            return d ? kb.event.trigger(a, c, d, !0) : b;
        }
    });
    var Qb = /^.[^:#\[\.,]*$/, Rb = /^(?:parents|prev(?:Until|All))/, Sb = kb.expr.match.needsContext, Tb = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    kb.fn.extend({
        find: function(a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a) return this.pushStack(kb(a).filter(function() {
                for (b = 0; e > b; b++) if (kb.contains(d[b], this)) return !0;
            }));
            for (b = 0; e > b; b++) kb.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? kb.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, 
            c;
        },
        has: function(a) {
            var b, c = kb(a, this), d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++) if (kb.contains(this, c[b])) return !0;
            });
        },
        not: function(a) {
            return this.pushStack(m(this, a || [], !0));
        },
        filter: function(a) {
            return this.pushStack(m(this, a || [], !1));
        },
        is: function(a) {
            return !!m(this, "string" == typeof a && Sb.test(a) ? kb(a) : a || [], !1).length;
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = Sb.test(a) || "string" != typeof a ? kb(a, b || this.context) : 0; e > d; d++) for (c = this[d]; c && c !== b; c = c.parentNode) if (11 > c.nodeType && (g ? g.index(c) > -1 : 1 === c.nodeType && kb.find.matchesSelector(c, a))) {
                c = f.push(c);
                break;
            }
            return this.pushStack(f.length > 1 ? kb.unique(f) : f);
        },
        index: function(a) {
            return a ? "string" == typeof a ? kb.inArray(this[0], kb(a)) : kb.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        },
        add: function(a, b) {
            var c = "string" == typeof a ? kb(a, b) : kb.makeArray(a && a.nodeType ? [ a ] : a), d = kb.merge(this.get(), c);
            return this.pushStack(kb.unique(d));
        },
        addBack: function(a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
        }
    }), kb.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null;
        },
        parents: function(a) {
            return kb.dir(a, "parentNode");
        },
        parentsUntil: function(a, b, c) {
            return kb.dir(a, "parentNode", c);
        },
        next: function(a) {
            return l(a, "nextSibling");
        },
        prev: function(a) {
            return l(a, "previousSibling");
        },
        nextAll: function(a) {
            return kb.dir(a, "nextSibling");
        },
        prevAll: function(a) {
            return kb.dir(a, "previousSibling");
        },
        nextUntil: function(a, b, c) {
            return kb.dir(a, "nextSibling", c);
        },
        prevUntil: function(a, b, c) {
            return kb.dir(a, "previousSibling", c);
        },
        siblings: function(a) {
            return kb.sibling((a.parentNode || {}).firstChild, a);
        },
        children: function(a) {
            return kb.sibling(a.firstChild);
        },
        contents: function(a) {
            return kb.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : kb.merge([], a.childNodes);
        }
    }, function(a, b) {
        kb.fn[a] = function(c, d) {
            var e = kb.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = kb.filter(d, e)), 
            this.length > 1 && (Tb[a] || (e = kb.unique(e)), Rb.test(a) && (e = e.reverse())), 
            this.pushStack(e);
        };
    }), kb.extend({
        filter: function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? kb.find.matchesSelector(d, a) ? [ d ] : [] : kb.find.matches(a, kb.grep(b, function(a) {
                return 1 === a.nodeType;
            }));
        },
        dir: function(a, c, d) {
            for (var e = [], f = a[c]; f && 9 !== f.nodeType && (d === b || 1 !== f.nodeType || !kb(f).is(d)); ) 1 === f.nodeType && e.push(f), 
            f = f[c];
            return e;
        },
        sibling: function(a, b) {
            for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
            return c;
        }
    });
    var Ub = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", Vb = / jQuery\d+="(?:null|\d+)"/g, Wb = RegExp("<(?:" + Ub + ")[\\s/>]", "i"), Xb = /^\s+/, Yb = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, Zb = /<([\w:]+)/, $b = /<tbody/i, _b = /<|&#?\w+;/, ac = /<(?:script|style|link)/i, bc = /^(?:checkbox|radio)$/i, cc = /checked\s*(?:[^=]|=\s*.checked.)/i, dc = /^$|\/(?:java|ecma)script/i, ec = /^true\/(.*)/, fc = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, gc = {
        option: [ 1, "<select multiple='multiple'>", "</select>" ],
        legend: [ 1, "<fieldset>", "</fieldset>" ],
        area: [ 1, "<map>", "</map>" ],
        param: [ 1, "<object>", "</object>" ],
        thead: [ 1, "<table>", "</table>" ],
        tr: [ 2, "<table><tbody>", "</tbody></table>" ],
        col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
        td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
        _default: kb.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
    }, hc = n(Y), ic = hc.appendChild(Y.createElement("div"));
    gc.optgroup = gc.option, gc.tbody = gc.tfoot = gc.colgroup = gc.caption = gc.thead, 
    gc.th = gc.td, kb.fn.extend({
        text: function(a) {
            return kb.access(this, function(a) {
                return a === b ? kb.text(this) : this.empty().append((this[0] && this[0].ownerDocument || Y).createTextNode(a));
            }, null, a, arguments.length);
        },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.appendChild(a);
                }
            });
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = o(this, a);
                    b.insertBefore(a, b.firstChild);
                }
            });
        },
        before: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this);
            });
        },
        after: function() {
            return this.domManip(arguments, function(a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
            });
        },
        remove: function(a, b) {
            for (var c, d = a ? kb.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || kb.cleanData(u(c)), 
            c.parentNode && (b && kb.contains(c.ownerDocument, c) && r(u(c, "script")), c.parentNode.removeChild(c));
            return this;
        },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                for (1 === a.nodeType && kb.cleanData(u(a, !1)); a.firstChild; ) a.removeChild(a.firstChild);
                a.options && kb.nodeName(a, "select") && (a.options.length = 0);
            }
            return this;
        },
        clone: function(a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() {
                return kb.clone(this, a, b);
            });
        },
        html: function(a) {
            return kb.access(this, function(a) {
                var c = this[0] || {}, d = 0, e = this.length;
                if (a === b) return 1 === c.nodeType ? c.innerHTML.replace(Vb, "") : b;
                if (!("string" != typeof a || ac.test(a) || !kb.support.htmlSerialize && Wb.test(a) || !kb.support.leadingWhitespace && Xb.test(a) || gc[(Zb.exec(a) || [ "", "" ])[1].toLowerCase()])) {
                    a = a.replace(Yb, "<$1></$2>");
                    try {
                        for (;e > d; d++) c = this[d] || {}, 1 === c.nodeType && (kb.cleanData(u(c, !1)), 
                        c.innerHTML = a);
                        c = 0;
                    } catch (f) {}
                }
                c && this.empty().append(a);
            }, null, a, arguments.length);
        },
        replaceWith: function() {
            var a = kb.map(this, function(a) {
                return [ a.nextSibling, a.parentNode ];
            }), b = 0;
            return this.domManip(arguments, function(c) {
                var d = a[b++], e = a[b++];
                e && (d && d.parentNode !== e && (d = this.nextSibling), kb(this).remove(), e.insertBefore(c, d));
            }, !0), b ? this : this.remove();
        },
        detach: function(a) {
            return this.remove(a, !0);
        },
        domManip: function(a, b, c) {
            a = db.apply([], a);
            var d, e, f, g, h, i, j = 0, k = this.length, l = this, m = k - 1, n = a[0], o = kb.isFunction(n);
            if (o || !(1 >= k || "string" != typeof n || kb.support.checkClone) && cc.test(n)) return this.each(function(d) {
                var e = l.eq(d);
                o && (a[0] = n.call(this, d, e.html())), e.domManip(a, b, c);
            });
            if (k && (i = kb.buildFragment(a, this[0].ownerDocument, !1, !c && this), d = i.firstChild, 
            1 === i.childNodes.length && (i = d), d)) {
                for (g = kb.map(u(i, "script"), p), f = g.length; k > j; j++) e = i, j !== m && (e = kb.clone(e, !0, !0), 
                f && kb.merge(g, u(e, "script"))), b.call(this[j], e, j);
                if (f) for (h = g[g.length - 1].ownerDocument, kb.map(g, q), j = 0; f > j; j++) e = g[j], 
                dc.test(e.type || "") && !kb._data(e, "globalEval") && kb.contains(h, e) && (e.src ? kb._evalUrl(e.src) : kb.globalEval((e.text || e.textContent || e.innerHTML || "").replace(fc, "")));
                i = d = null;
            }
            return this;
        }
    }), kb.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(a, b) {
        kb.fn[a] = function(a) {
            for (var c, d = 0, e = [], f = kb(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), 
            kb(f[d])[b](c), eb.apply(e, c.get());
            return this.pushStack(e);
        };
    }), kb.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = kb.contains(a.ownerDocument, a);
            if (kb.support.html5Clone || kb.isXMLDoc(a) || !Wb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ic.innerHTML = a.outerHTML, 
            ic.removeChild(f = ic.firstChild)), !(kb.support.noCloneEvent && kb.support.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || kb.isXMLDoc(a))) for (d = u(f), 
            h = u(a), g = 0; null != (e = h[g]); ++g) d[g] && t(e, d[g]);
            if (b) if (c) for (h = h || u(a), d = d || u(f), g = 0; null != (e = h[g]); g++) s(e, d[g]); else s(a, f);
            return d = u(f, "script"), d.length > 0 && r(d, !i && u(a, "script")), d = h = e = null, 
            f;
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, k, l = a.length, m = n(b), o = [], p = 0; l > p; p++) if (f = a[p], 
            f || 0 === f) if ("object" === kb.type(f)) kb.merge(o, f.nodeType ? [ f ] : f); else if (_b.test(f)) {
                for (h = h || m.appendChild(b.createElement("div")), i = (Zb.exec(f) || [ "", "" ])[1].toLowerCase(), 
                k = gc[i] || gc._default, h.innerHTML = k[1] + f.replace(Yb, "<$1></$2>") + k[2], 
                e = k[0]; e--; ) h = h.lastChild;
                if (!kb.support.leadingWhitespace && Xb.test(f) && o.push(b.createTextNode(Xb.exec(f)[0])), 
                !kb.support.tbody) for (f = "table" !== i || $b.test(f) ? "<table>" !== k[1] || $b.test(f) ? 0 : h : h.firstChild, 
                e = f && f.childNodes.length; e--; ) kb.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
                for (kb.merge(o, h.childNodes), h.textContent = ""; h.firstChild; ) h.removeChild(h.firstChild);
                h = m.lastChild;
            } else o.push(b.createTextNode(f));
            for (h && m.removeChild(h), kb.support.appendChecked || kb.grep(u(o, "input"), v), 
            p = 0; f = o[p++]; ) if ((!d || -1 === kb.inArray(f, d)) && (g = kb.contains(f.ownerDocument, f), 
            h = u(m.appendChild(f), "script"), g && r(h), c)) for (e = 0; f = h[e++]; ) dc.test(f.type || "") && c.push(f);
            return h = null, m;
        },
        cleanData: function(a, b) {
            for (var c, d, e, f, g = 0, h = kb.expando, i = kb.cache, j = kb.support.deleteExpando, k = kb.event.special; null != (c = a[g]); g++) if ((b || kb.acceptData(c)) && (e = c[h], 
            f = e && i[e])) {
                if (f.events) for (d in f.events) k[d] ? kb.event.remove(c, d) : kb.removeEvent(c, d, f.handle);
                i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== W ? c.removeAttribute(h) : c[h] = null, 
                bb.push(e));
            }
        },
        _evalUrl: function(a) {
            return kb.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            });
        }
    }), kb.fn.extend({
        wrapAll: function(a) {
            if (kb.isFunction(a)) return this.each(function(b) {
                kb(this).wrapAll(a.call(this, b));
            });
            if (this[0]) {
                var b = kb(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
                    for (var a = this; a.firstChild && 1 === a.firstChild.nodeType; ) a = a.firstChild;
                    return a;
                }).append(this);
            }
            return this;
        },
        wrapInner: function(a) {
            return kb.isFunction(a) ? this.each(function(b) {
                kb(this).wrapInner(a.call(this, b));
            }) : this.each(function() {
                var b = kb(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a);
            });
        },
        wrap: function(a) {
            var b = kb.isFunction(a);
            return this.each(function(c) {
                kb(this).wrapAll(b ? a.call(this, c) : a);
            });
        },
        unwrap: function() {
            return this.parent().each(function() {
                kb.nodeName(this, "body") || kb(this).replaceWith(this.childNodes);
            }).end();
        }
    });
    var jc, kc, lc, mc = /alpha\([^)]*\)/i, nc = /opacity\s*=\s*([^)]*)/, oc = /^(top|right|bottom|left)$/, pc = /^(none|table(?!-c[ea]).+)/, qc = /^margin/, rc = RegExp("^(" + lb + ")(.*)$", "i"), sc = RegExp("^(" + lb + ")(?!px)[a-z%]+$", "i"), tc = RegExp("^([+-])=(" + lb + ")", "i"), uc = {
        BODY: "block"
    }, vc = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, wc = {
        letterSpacing: 0,
        fontWeight: 400
    }, xc = [ "Top", "Right", "Bottom", "Left" ], yc = [ "Webkit", "O", "Moz", "ms" ];
    kb.fn.extend({
        css: function(a, c) {
            return kb.access(this, function(a, c, d) {
                var e, f, g = {}, h = 0;
                if (kb.isArray(c)) {
                    for (f = kc(a), e = c.length; e > h; h++) g[c[h]] = kb.css(a, c[h], !1, f);
                    return g;
                }
                return d !== b ? kb.style(a, c, d) : kb.css(a, c);
            }, a, c, arguments.length > 1);
        },
        show: function() {
            return y(this, !0);
        },
        hide: function() {
            return y(this);
        },
        toggle: function(a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                x(this) ? kb(this).show() : kb(this).hide();
            });
        }
    }), kb.extend({
        cssHooks: {
            opacity: {
                get: function(a, b) {
                    if (b) {
                        var c = lc(a, "opacity");
                        return "" === c ? "1" : c;
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": kb.support.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(a, c, d, e) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var f, g, h, i = kb.camelCase(c), j = a.style;
                if (c = kb.cssProps[i] || (kb.cssProps[i] = w(j, i)), h = kb.cssHooks[c] || kb.cssHooks[i], 
                d === b) return h && "get" in h && (f = h.get(a, !1, e)) !== b ? f : j[c];
                if (g = typeof d, "string" === g && (f = tc.exec(d)) && (d = (f[1] + 1) * f[2] + parseFloat(kb.css(a, c)), 
                g = "number"), !(null == d || "number" === g && isNaN(d) || ("number" !== g || kb.cssNumber[i] || (d += "px"), 
                kb.support.clearCloneStyle || "" !== d || 0 !== c.indexOf("background") || (j[c] = "inherit"), 
                h && "set" in h && (d = h.set(a, d, e)) === b))) try {
                    j[c] = d;
                } catch (k) {}
            }
        },
        css: function(a, c, d, e) {
            var f, g, h, i = kb.camelCase(c);
            return c = kb.cssProps[i] || (kb.cssProps[i] = w(a.style, i)), h = kb.cssHooks[c] || kb.cssHooks[i], 
            h && "get" in h && (g = h.get(a, !0, d)), g === b && (g = lc(a, c, e)), "normal" === g && c in wc && (g = wc[c]), 
            "" === d || d ? (f = parseFloat(g), d === !0 || kb.isNumeric(f) ? f || 0 : g) : g;
        }
    }), a.getComputedStyle ? (kc = function(b) {
        return a.getComputedStyle(b, null);
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a), i = h ? h.getPropertyValue(c) || h[c] : b, j = a.style;
        return h && ("" !== i || kb.contains(a.ownerDocument, a) || (i = kb.style(a, c)), 
        sc.test(i) && qc.test(c) && (e = j.width, f = j.minWidth, g = j.maxWidth, j.minWidth = j.maxWidth = j.width = i, 
        i = h.width, j.width = e, j.minWidth = f, j.maxWidth = g)), i;
    }) : Y.documentElement.currentStyle && (kc = function(a) {
        return a.currentStyle;
    }, lc = function(a, c, d) {
        var e, f, g, h = d || kc(a), i = h ? h[c] : b, j = a.style;
        return null == i && j && j[c] && (i = j[c]), sc.test(i) && !oc.test(c) && (e = j.left, 
        f = a.runtimeStyle, g = f && f.left, g && (f.left = a.currentStyle.left), j.left = "fontSize" === c ? "1em" : i, 
        i = j.pixelLeft + "px", j.left = e, g && (f.left = g)), "" === i ? "auto" : i;
    }), kb.each([ "height", "width" ], function(a, c) {
        kb.cssHooks[c] = {
            get: function(a, d, e) {
                return d ? 0 === a.offsetWidth && pc.test(kb.css(a, "display")) ? kb.swap(a, vc, function() {
                    return B(a, c, e);
                }) : B(a, c, e) : b;
            },
            set: function(a, b, d) {
                var e = d && kc(a);
                return z(a, b, d ? A(a, c, d, kb.support.boxSizing && "border-box" === kb.css(a, "boxSizing", !1, e), e) : 0);
            }
        };
    }), kb.support.opacity || (kb.cssHooks.opacity = {
        get: function(a, b) {
            return nc.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "";
        },
        set: function(a, b) {
            var c = a.style, d = a.currentStyle, e = kb.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === kb.trim(f.replace(mc, "")) && c.removeAttribute && (c.removeAttribute("filter"), 
            "" === b || d && !d.filter) || (c.filter = mc.test(f) ? f.replace(mc, e) : f + " " + e);
        }
    }), kb(function() {
        kb.support.reliableMarginRight || (kb.cssHooks.marginRight = {
            get: function(a, c) {
                return c ? kb.swap(a, {
                    display: "inline-block"
                }, lc, [ a, "marginRight" ]) : b;
            }
        }), !kb.support.pixelPosition && kb.fn.position && kb.each([ "top", "left" ], function(a, c) {
            kb.cssHooks[c] = {
                get: function(a, d) {
                    return d ? (d = lc(a, c), sc.test(d) ? kb(a).position()[c] + "px" : d) : b;
                }
            };
        });
    }), kb.expr && kb.expr.filters && (kb.expr.filters.hidden = function(a) {
        return 0 >= a.offsetWidth && 0 >= a.offsetHeight || !kb.support.reliableHiddenOffsets && "none" === (a.style && a.style.display || kb.css(a, "display"));
    }, kb.expr.filters.visible = function(a) {
        return !kb.expr.filters.hidden(a);
    }), kb.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(a, b) {
        kb.cssHooks[a + b] = {
            expand: function(c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [ c ]; 4 > d; d++) e[a + xc[d] + b] = f[d] || f[d - 2] || f[0];
                return e;
            }
        }, qc.test(a) || (kb.cssHooks[a + b].set = z);
    });
    var zc = /%20/g, Ac = /\[\]$/, Bc = /\r?\n/g, Cc = /^(?:submit|button|image|reset|file)$/i, Dc = /^(?:input|select|textarea|keygen)/i;
    kb.fn.extend({
        serialize: function() {
            return kb.param(this.serializeArray());
        },
        serializeArray: function() {
            return this.map(function() {
                var a = kb.prop(this, "elements");
                return a ? kb.makeArray(a) : this;
            }).filter(function() {
                var a = this.type;
                return this.name && !kb(this).is(":disabled") && Dc.test(this.nodeName) && !Cc.test(a) && (this.checked || !bc.test(a));
            }).map(function(a, b) {
                var c = kb(this).val();
                return null == c ? null : kb.isArray(c) ? kb.map(c, function(a) {
                    return {
                        name: b.name,
                        value: a.replace(Bc, "\r\n")
                    };
                }) : {
                    name: b.name,
                    value: c.replace(Bc, "\r\n")
                };
            }).get();
        }
    }), kb.param = function(a, c) {
        var d, e = [], f = function(a, b) {
            b = kb.isFunction(b) ? b() : null == b ? "" : b, e[e.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b);
        };
        if (c === b && (c = kb.ajaxSettings && kb.ajaxSettings.traditional), kb.isArray(a) || a.jquery && !kb.isPlainObject(a)) kb.each(a, function() {
            f(this.name, this.value);
        }); else for (d in a) E(d, a[d], c, f);
        return e.join("&").replace(zc, "+");
    }, kb.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
        kb.fn[b] = function(a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
        };
    }), kb.fn.extend({
        hover: function(a, b) {
            return this.mouseenter(a).mouseleave(b || a);
        },
        bind: function(a, b, c) {
            return this.on(a, null, b, c);
        },
        unbind: function(a, b) {
            return this.off(a, null, b);
        },
        delegate: function(a, b, c, d) {
            return this.on(b, a, c, d);
        },
        undelegate: function(a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
        }
    });
    var Ec, Fc, Gc = kb.now(), Hc = /\?/, Ic = /#.*$/, Jc = /([?&])_=[^&]*/, Kc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Lc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Mc = /^(?:GET|HEAD)$/, Nc = /^\/\//, Oc = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Pc = kb.fn.load, Qc = {}, Rc = {}, Sc = "*/".concat("*");
    try {
        Fc = X.href;
    } catch (Tc) {
        Fc = Y.createElement("a"), Fc.href = "", Fc = Fc.href;
    }
    Ec = Oc.exec(Fc.toLowerCase()) || [], kb.fn.load = function(a, c, d) {
        if ("string" != typeof a && Pc) return Pc.apply(this, arguments);
        var e, f, g, h = this, i = a.indexOf(" ");
        return i >= 0 && (e = a.slice(i, a.length), a = a.slice(0, i)), kb.isFunction(c) ? (d = c, 
        c = b) : c && "object" == typeof c && (g = "POST"), h.length > 0 && kb.ajax({
            url: a,
            type: g,
            dataType: "html",
            data: c
        }).done(function(a) {
            f = arguments, h.html(e ? kb("<div>").append(kb.parseHTML(a)).find(e) : a);
        }).complete(d && function(a, b) {
            h.each(d, f || [ a.responseText, b, a ]);
        }), this;
    }, kb.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function(a, b) {
        kb.fn[b] = function(a) {
            return this.on(b, a);
        };
    }), kb.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Fc,
            type: "GET",
            isLocal: Lc.test(Ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Sc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": kb.parseJSON,
                "text xml": kb.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(a, b) {
            return b ? H(H(a, kb.ajaxSettings), b) : H(kb.ajaxSettings, a);
        },
        ajaxPrefilter: F(Qc),
        ajaxTransport: F(Rc),
        ajax: function(a, c) {
            function d(a, c, d, e) {
                var f, l, s, t, v, x = c;
                2 !== u && (u = 2, i && clearTimeout(i), k = b, h = e || "", w.readyState = a > 0 ? 4 : 0, 
                f = a >= 200 && 300 > a || 304 === a, d && (t = I(m, w, d)), t = J(m, t, w, f), 
                f ? (m.ifModified && (v = w.getResponseHeader("Last-Modified"), v && (kb.lastModified[g] = v), 
                v = w.getResponseHeader("etag"), v && (kb.etag[g] = v)), 204 === a || "HEAD" === m.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = t.state, 
                l = t.data, s = t.error, f = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), 
                w.status = a, w.statusText = (c || x) + "", f ? p.resolveWith(n, [ l, x, w ]) : p.rejectWith(n, [ w, x, s ]), 
                w.statusCode(r), r = b, j && o.trigger(f ? "ajaxSuccess" : "ajaxError", [ w, m, f ? l : s ]), 
                q.fireWith(n, [ w, x ]), j && (o.trigger("ajaxComplete", [ w, m ]), --kb.active || kb.event.trigger("ajaxStop")));
            }
            "object" == typeof a && (c = a, a = b), c = c || {};
            var e, f, g, h, i, j, k, l, m = kb.ajaxSetup({}, c), n = m.context || m, o = m.context && (n.nodeType || n.jquery) ? kb(n) : kb.event, p = kb.Deferred(), q = kb.Callbacks("once memory"), r = m.statusCode || {}, s = {}, t = {}, u = 0, v = "canceled", w = {
                readyState: 0,
                getResponseHeader: function(a) {
                    var b;
                    if (2 === u) {
                        if (!l) for (l = {}; b = Kc.exec(h); ) l[b[1].toLowerCase()] = b[2];
                        b = l[a.toLowerCase()];
                    }
                    return null == b ? null : b;
                },
                getAllResponseHeaders: function() {
                    return 2 === u ? h : null;
                },
                setRequestHeader: function(a, b) {
                    var c = a.toLowerCase();
                    return u || (a = t[c] = t[c] || a, s[a] = b), this;
                },
                overrideMimeType: function(a) {
                    return u || (m.mimeType = a), this;
                },
                statusCode: function(a) {
                    var b;
                    if (a) if (2 > u) for (b in a) r[b] = [ r[b], a[b] ]; else w.always(a[w.status]);
                    return this;
                },
                abort: function(a) {
                    var b = a || v;
                    return k && k.abort(b), d(0, b), this;
                }
            };
            if (p.promise(w).complete = q.add, w.success = w.done, w.error = w.fail, m.url = ((a || m.url || Fc) + "").replace(Ic, "").replace(Nc, Ec[1] + "//"), 
            m.type = c.method || c.type || m.method || m.type, m.dataTypes = kb.trim(m.dataType || "*").toLowerCase().match(mb) || [ "" ], 
            null == m.crossDomain && (e = Oc.exec(m.url.toLowerCase()), m.crossDomain = !(!e || e[1] === Ec[1] && e[2] === Ec[2] && (e[3] || ("http:" === e[1] ? "80" : "443")) === (Ec[3] || ("http:" === Ec[1] ? "80" : "443")))), 
            m.data && m.processData && "string" != typeof m.data && (m.data = kb.param(m.data, m.traditional)), 
            G(Qc, m, c, w), 2 === u) return w;
            j = m.global, j && 0 === kb.active++ && kb.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), 
            m.hasContent = !Mc.test(m.type), g = m.url, m.hasContent || (m.data && (g = m.url += (Hc.test(g) ? "&" : "?") + m.data, 
            delete m.data), m.cache === !1 && (m.url = Jc.test(g) ? g.replace(Jc, "$1_=" + Gc++) : g + (Hc.test(g) ? "&" : "?") + "_=" + Gc++)), 
            m.ifModified && (kb.lastModified[g] && w.setRequestHeader("If-Modified-Since", kb.lastModified[g]), 
            kb.etag[g] && w.setRequestHeader("If-None-Match", kb.etag[g])), (m.data && m.hasContent && m.contentType !== !1 || c.contentType) && w.setRequestHeader("Content-Type", m.contentType), 
            w.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Sc + "; q=0.01" : "") : m.accepts["*"]);
            for (f in m.headers) w.setRequestHeader(f, m.headers[f]);
            if (m.beforeSend && (m.beforeSend.call(n, w, m) === !1 || 2 === u)) return w.abort();
            v = "abort";
            for (f in {
                success: 1,
                error: 1,
                complete: 1
            }) w[f](m[f]);
            if (k = G(Rc, m, c, w)) {
                w.readyState = 1, j && o.trigger("ajaxSend", [ w, m ]), m.async && m.timeout > 0 && (i = setTimeout(function() {
                    w.abort("timeout");
                }, m.timeout));
                try {
                    u = 1, k.send(s, d);
                } catch (x) {
                    if (!(2 > u)) throw x;
                    d(-1, x);
                }
            } else d(-1, "No Transport");
            return w;
        },
        getJSON: function(a, b, c) {
            return kb.get(a, b, c, "json");
        },
        getScript: function(a, c) {
            return kb.get(a, b, c, "script");
        }
    }), kb.each([ "get", "post" ], function(a, c) {
        kb[c] = function(a, d, e, f) {
            return kb.isFunction(d) && (f = f || e, e = d, d = b), kb.ajax({
                url: a,
                type: c,
                dataType: f,
                data: d,
                success: e
            });
        };
    }), kb.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(a) {
                return kb.globalEval(a), a;
            }
        }
    }), kb.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1);
    }), kb.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var c, d = Y.head || kb("head")[0] || Y.documentElement;
            return {
                send: function(b, e) {
                    c = Y.createElement("script"), c.async = !0, a.scriptCharset && (c.charset = a.scriptCharset), 
                    c.src = a.url, c.onload = c.onreadystatechange = function(a, b) {
                        (b || !c.readyState || /loaded|complete/.test(c.readyState)) && (c.onload = c.onreadystatechange = null, 
                        c.parentNode && c.parentNode.removeChild(c), c = null, b || e(200, "success"));
                    }, d.insertBefore(c, d.firstChild);
                },
                abort: function() {
                    c && c.onload(b, !0);
                }
            };
        }
    });
    var Uc = [], Vc = /(=)\?(?=&|$)|\?\?/;
    kb.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var a = Uc.pop() || kb.expando + "_" + Gc++;
            return this[a] = !0, a;
        }
    }), kb.ajaxPrefilter("json jsonp", function(c, d, e) {
        var f, g, h, i = c.jsonp !== !1 && (Vc.test(c.url) ? "url" : "string" == typeof c.data && !(c.contentType || "").indexOf("application/x-www-form-urlencoded") && Vc.test(c.data) && "data");
        return i || "jsonp" === c.dataTypes[0] ? (f = c.jsonpCallback = kb.isFunction(c.jsonpCallback) ? c.jsonpCallback() : c.jsonpCallback, 
        i ? c[i] = c[i].replace(Vc, "$1" + f) : c.jsonp !== !1 && (c.url += (Hc.test(c.url) ? "&" : "?") + c.jsonp + "=" + f), 
        c.converters["script json"] = function() {
            return h || kb.error(f + " was not called"), h[0];
        }, c.dataTypes[0] = "json", g = a[f], a[f] = function() {
            h = arguments;
        }, e.always(function() {
            a[f] = g, c[f] && (c.jsonpCallback = d.jsonpCallback, Uc.push(f)), h && kb.isFunction(g) && g(h[0]), 
            h = g = b;
        }), "script") : b;
    });
    var Wc, Xc, Yc = 0, Zc = a.ActiveXObject && function() {
        var a;
        for (a in Wc) Wc[a](b, !0);
    };
    kb.ajaxSettings.xhr = a.ActiveXObject ? function() {
        return !this.isLocal && K() || L();
    } : K, Xc = kb.ajaxSettings.xhr(), kb.support.cors = !!Xc && "withCredentials" in Xc, 
    Xc = kb.support.ajax = !!Xc, Xc && kb.ajaxTransport(function(c) {
        if (!c.crossDomain || kb.support.cors) {
            var d;
            return {
                send: function(e, f) {
                    var g, h, i = c.xhr();
                    if (c.username ? i.open(c.type, c.url, c.async, c.username, c.password) : i.open(c.type, c.url, c.async), 
                    c.xhrFields) for (h in c.xhrFields) i[h] = c.xhrFields[h];
                    c.mimeType && i.overrideMimeType && i.overrideMimeType(c.mimeType), c.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (h in e) i.setRequestHeader(h, e[h]);
                    } catch (j) {}
                    i.send(c.hasContent && c.data || null), d = function(a, e) {
                        var h, j, k, l;
                        try {
                            if (d && (e || 4 === i.readyState)) if (d = b, g && (i.onreadystatechange = kb.noop, 
                            Zc && delete Wc[g]), e) 4 !== i.readyState && i.abort(); else {
                                l = {}, h = i.status, j = i.getAllResponseHeaders(), "string" == typeof i.responseText && (l.text = i.responseText);
                                try {
                                    k = i.statusText;
                                } catch (m) {
                                    k = "";
                                }
                                h || !c.isLocal || c.crossDomain ? 1223 === h && (h = 204) : h = l.text ? 200 : 404;
                            }
                        } catch (n) {
                            e || f(-1, n);
                        }
                        l && f(h, k, l, j);
                    }, c.async ? 4 === i.readyState ? setTimeout(d) : (g = ++Yc, Zc && (Wc || (Wc = {}, 
                    kb(a).unload(Zc)), Wc[g] = d), i.onreadystatechange = d) : d();
                },
                abort: function() {
                    d && d(b, !0);
                }
            };
        }
    });
    var $c, _c, ad = /^(?:toggle|show|hide)$/, bd = RegExp("^(?:([+-])=|)(" + lb + ")([a-z%]*)$", "i"), cd = /queueHooks$/, dd = [ Q ], ed = {
        "*": [ function(a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bd.exec(b), f = e && e[3] || (kb.cssNumber[a] ? "" : "px"), g = (kb.cssNumber[a] || "px" !== f && +d) && bd.exec(kb.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, kb.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i);
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), 
            c;
        } ]
    };
    kb.Animation = kb.extend(O, {
        tweener: function(a, b) {
            kb.isFunction(a) ? (b = a, a = [ "*" ]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ed[c] = ed[c] || [], ed[c].unshift(b);
        },
        prefilter: function(a, b) {
            b ? dd.unshift(a) : dd.push(a);
        }
    }), kb.Tween = R, R.prototype = {
        constructor: R,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), 
            this.end = d, this.unit = f || (kb.cssNumber[c] ? "" : "px");
        },
        cur: function() {
            var a = R.propHooks[this.prop];
            return a && a.get ? a.get(this) : R.propHooks._default.get(this);
        },
        run: function(a) {
            var b, c = R.propHooks[this.prop];
            return this.pos = b = this.options.duration ? kb.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, 
            this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), 
            c && c.set ? c.set(this) : R.propHooks._default.set(this), this;
        }
    }, R.prototype.init.prototype = R.prototype, R.propHooks = {
        _default: {
            get: function(a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = kb.css(a.elem, a.prop, ""), 
                b && "auto" !== b ? b : 0) : a.elem[a.prop];
            },
            set: function(a) {
                kb.fx.step[a.prop] ? kb.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[kb.cssProps[a.prop]] || kb.cssHooks[a.prop]) ? kb.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now;
            }
        }
    }, R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
        }
    }, kb.each([ "toggle", "show", "hide" ], function(a, b) {
        var c = kb.fn[b];
        kb.fn[b] = function(a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(S(b, !0), a, d, e);
        };
    }), kb.fn.extend({
        fadeTo: function(a, b, c, d) {
            return this.filter(x).css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d);
        },
        animate: function(a, b, c, d) {
            var e = kb.isEmptyObject(a), f = kb.speed(b, c, d), g = function() {
                var b = O(this, kb.extend({}, a), f);
                (e || kb._data(this, "finish")) && b.stop(!0);
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
        },
        stop: function(a, c, d) {
            var e = function(a) {
                var b = a.stop;
                delete a.stop, b(d);
            };
            return "string" != typeof a && (d = c, c = a, a = b), c && a !== !1 && this.queue(a || "fx", []), 
            this.each(function() {
                var b = !0, c = null != a && a + "queueHooks", f = kb.timers, g = kb._data(this);
                if (c) g[c] && g[c].stop && e(g[c]); else for (c in g) g[c] && g[c].stop && cd.test(c) && e(g[c]);
                for (c = f.length; c--; ) f[c].elem !== this || null != a && f[c].queue !== a || (f[c].anim.stop(d), 
                b = !1, f.splice(c, 1));
                (b || !d) && kb.dequeue(this, a);
            });
        },
        finish: function(a) {
            return a !== !1 && (a = a || "fx"), this.each(function() {
                var b, c = kb._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = kb.timers, g = d ? d.length : 0;
                for (c.finish = !0, kb.queue(this, a, []), e && e.stop && e.stop.call(this, !0), 
                b = f.length; b--; ) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), 
                f.splice(b, 1));
                for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish;
            });
        }
    }), kb.each({
        slideDown: S("show"),
        slideUp: S("hide"),
        slideToggle: S("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        kb.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d);
        };
    }), kb.speed = function(a, b, c) {
        var d = a && "object" == typeof a ? kb.extend({}, a) : {
            complete: c || !c && b || kb.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !kb.isFunction(b) && b
        };
        return d.duration = kb.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in kb.fx.speeds ? kb.fx.speeds[d.duration] : kb.fx.speeds._default, 
        (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
            kb.isFunction(d.old) && d.old.call(this), d.queue && kb.dequeue(this, d.queue);
        }, d;
    }, kb.easing = {
        linear: function(a) {
            return a;
        },
        swing: function(a) {
            return .5 - Math.cos(a * Math.PI) / 2;
        }
    }, kb.timers = [], kb.fx = R.prototype.init, kb.fx.tick = function() {
        var a, c = kb.timers, d = 0;
        for ($c = kb.now(); c.length > d; d++) a = c[d], a() || c[d] !== a || c.splice(d--, 1);
        c.length || kb.fx.stop(), $c = b;
    }, kb.fx.timer = function(a) {
        a() && kb.timers.push(a) && kb.fx.start();
    }, kb.fx.interval = 13, kb.fx.start = function() {
        _c || (_c = setInterval(kb.fx.tick, kb.fx.interval));
    }, kb.fx.stop = function() {
        clearInterval(_c), _c = null;
    }, kb.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, kb.fx.step = {}, kb.expr && kb.expr.filters && (kb.expr.filters.animated = function(a) {
        return kb.grep(kb.timers, function(b) {
            return a === b.elem;
        }).length;
    }), kb.fn.offset = function(a) {
        if (arguments.length) return a === b ? this : this.each(function(b) {
            kb.offset.setOffset(this, a, b);
        });
        var c, d, e = {
            top: 0,
            left: 0
        }, f = this[0], g = f && f.ownerDocument;
        return g ? (c = g.documentElement, kb.contains(c, f) ? (typeof f.getBoundingClientRect !== W && (e = f.getBoundingClientRect()), 
        d = T(g), {
            top: e.top + (d.pageYOffset || c.scrollTop) - (c.clientTop || 0),
            left: e.left + (d.pageXOffset || c.scrollLeft) - (c.clientLeft || 0)
        }) : e) : void 0;
    }, kb.offset = {
        setOffset: function(a, b, c) {
            var d = kb.css(a, "position");
            "static" === d && (a.style.position = "relative");
            var e, f, g = kb(a), h = g.offset(), i = kb.css(a, "top"), j = kb.css(a, "left"), k = ("absolute" === d || "fixed" === d) && kb.inArray("auto", [ i, j ]) > -1, l = {}, m = {};
            k ? (m = g.position(), e = m.top, f = m.left) : (e = parseFloat(i) || 0, f = parseFloat(j) || 0), 
            kb.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (l.top = b.top - h.top + e), 
            null != b.left && (l.left = b.left - h.left + f), "using" in b ? b.using.call(a, l) : g.css(l);
        }
    }, kb.fn.extend({
        position: function() {
            if (this[0]) {
                var a, b, c = {
                    top: 0,
                    left: 0
                }, d = this[0];
                return "fixed" === kb.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), 
                b = this.offset(), kb.nodeName(a[0], "html") || (c = a.offset()), c.top += kb.css(a[0], "borderTopWidth", !0), 
                c.left += kb.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - kb.css(d, "marginTop", !0),
                    left: b.left - c.left - kb.css(d, "marginLeft", !0)
                };
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var a = this.offsetParent || Z; a && !kb.nodeName(a, "html") && "static" === kb.css(a, "position"); ) a = a.offsetParent;
                return a || Z;
            });
        }
    }), kb.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(a, c) {
        var d = /Y/.test(c);
        kb.fn[a] = function(e) {
            return kb.access(this, function(a, e, f) {
                var g = T(a);
                return f === b ? g ? c in g ? g[c] : g.document.documentElement[e] : a[e] : (g ? g.scrollTo(d ? kb(g).scrollLeft() : f, d ? f : kb(g).scrollTop()) : a[e] = f, 
                b);
            }, a, e, arguments.length, null);
        };
    }), kb.each({
        Height: "height",
        Width: "width"
    }, function(a, c) {
        kb.each({
            padding: "inner" + a,
            content: c,
            "": "outer" + a
        }, function(d, e) {
            kb.fn[e] = function(e, f) {
                var g = arguments.length && (d || "boolean" != typeof e), h = d || (e === !0 || f === !0 ? "margin" : "border");
                return kb.access(this, function(c, d, e) {
                    var f;
                    return kb.isWindow(c) ? c.document.documentElement["client" + a] : 9 === c.nodeType ? (f = c.documentElement, 
                    Math.max(c.body["scroll" + a], f["scroll" + a], c.body["offset" + a], f["offset" + a], f["client" + a])) : e === b ? kb.css(c, d, h) : kb.style(c, d, e, h);
                }, c, g ? e : b, g, null);
            };
        });
    }), kb.fn.size = function() {
        return this.length;
    }, kb.fn.andSelf = kb.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = kb : (a.jQuery = a.$ = kb, 
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return kb;
    }));
}(window), !jQuery) throw new Error("Bootstrap requires jQuery");

+function(a) {
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b) if (void 0 !== a.style[c]) return {
            end: b[c]
        };
    }
    a.fn.emulateTransitionEnd = function(b) {
        var c = !1, d = this;
        a(this).one(a.support.transition.end, function() {
            c = !0;
        });
        var e = function() {
            c || a(d).trigger(a.support.transition.end);
        };
        return setTimeout(e, b), this;
    }, a(function() {
        a.support.transition = b();
    });
}(window.jQuery), +function(a) {
    var b = '[data-dismiss="alert"]', c = function(c) {
        a(c).on("click", b, this.close);
    };
    c.prototype.close = function(b) {
        function c() {
            f.trigger("closed.bs.alert").remove();
        }
        var d = a(this), e = d.attr("data-target");
        e || (e = d.attr("href"), e = e && e.replace(/.*(?=#[^\s]*$)/, ""));
        var f = a(e);
        b && b.preventDefault(), f.length || (f = d.hasClass("alert") ? d : d.parent()), 
        f.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (f.removeClass("in"), 
        a.support.transition && f.hasClass("fade") ? f.one(a.support.transition.end, c).emulateTransitionEnd(150) : c());
    };
    var d = a.fn.alert;
    a.fn.alert = function(b) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.alert");
            e || d.data("bs.alert", e = new c(this)), "string" == typeof b && e[b].call(d);
        });
    }, a.fn.alert.Constructor = c, a.fn.alert.noConflict = function() {
        return a.fn.alert = d, this;
    }, a(document).on("click.bs.alert.data-api", b, c.prototype.close);
}(window.jQuery), +function(a) {
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d);
    };
    b.DEFAULTS = {
        loadingText: "loading..."
    }, b.prototype.setState = function(a) {
        var b = "disabled", c = this.$element, d = c.is("input") ? "val" : "html", e = c.data();
        a += "Text", e.resetText || c.data("resetText", c[d]()), c[d](e[a] || this.options[a]), 
        setTimeout(function() {
            "loadingText" == a ? c.addClass(b).attr(b, b) : c.removeClass(b).removeAttr(b);
        }, 0);
    }, b.prototype.toggle = function() {
        var a = this.$element.closest('[data-toggle="buttons"]');
        if (a.length) {
            var b = this.$element.find("input").prop("checked", !this.$element.hasClass("active")).trigger("change");
            "radio" === b.prop("type") && a.find(".active").removeClass("active");
        }
        this.$element.toggleClass("active");
    };
    var c = a.fn.button;
    a.fn.button = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof c && c;
            e || d.data("bs.button", e = new b(this, f)), "toggle" == c ? e.toggle() : c && e.setState(c);
        });
    }, a.fn.button.Constructor = b, a.fn.button.noConflict = function() {
        return a.fn.button = c, this;
    }, a(document).on("click.bs.button.data-api", "[data-toggle^=button]", function(b) {
        var c = a(b.target);
        c.hasClass("btn") || (c = c.closest(".btn")), c.button("toggle"), b.preventDefault();
    });
}(window.jQuery), +function(a) {
    var b = function(b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), 
        this.options = c, this.paused = this.sliding = this.interval = this.$active = this.$items = null, 
        "hover" == this.options.pause && this.$element.on("mouseenter", a.proxy(this.pause, this)).on("mouseleave", a.proxy(this.cycle, this));
    };
    b.DEFAULTS = {
        interval: 5e3,
        pause: "hover"
    }, b.prototype.cycle = function(b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), 
        this;
    }, b.prototype.getActiveIndex = function() {
        return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(), 
        this.$items.index(this.$active);
    }, b.prototype.to = function(b) {
        var c = this, d = this.getActiveIndex();
        return b > this.$items.length - 1 || 0 > b ? void 0 : this.sliding ? this.$element.one("slid", function() {
            c.to(b);
        }) : d == b ? this.pause().cycle() : this.slide(b > d ? "next" : "prev", a(this.$items[b]));
    }, b.prototype.pause = function(b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition.end && (this.$element.trigger(a.support.transition.end), 
        this.cycle(!0)), this.interval = clearInterval(this.interval), this;
    }, b.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next");
    }, b.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev");
    }, b.prototype.slide = function(b, c) {
        var d = this.$element.find(".item.active"), e = c || d[b](), f = this.interval, g = "next" == b ? "left" : "right", h = "next" == b ? "first" : "last", i = this;
        this.sliding = !0, f && this.pause(), e = e.length ? e : this.$element.find(".item")[h]();
        var j = a.Event("slide.bs.carousel", {
            relatedTarget: e[0],
            direction: g
        });
        if (!e.hasClass("active")) {
            if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), 
            this.$element.one("slid", function() {
                var b = a(i.$indicators.children()[i.getActiveIndex()]);
                b && b.addClass("active");
            })), a.support.transition && this.$element.hasClass("slide")) {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                e.addClass(b), e[0].offsetWidth, d.addClass(g), e.addClass(g), d.one(a.support.transition.end, function() {
                    e.removeClass([ b, g ].join(" ")).addClass("active"), d.removeClass([ "active", g ].join(" ")), 
                    i.sliding = !1, setTimeout(function() {
                        i.$element.trigger("slid");
                    }, 0);
                }).emulateTransitionEnd(600);
            } else {
                if (this.$element.trigger(j), j.isDefaultPrevented()) return;
                d.removeClass("active"), e.addClass("active"), this.sliding = !1, this.$element.trigger("slid");
            }
            return f && this.cycle(), this;
        }
    };
    var c = a.fn.carousel;
    a.fn.carousel = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c), g = "string" == typeof c ? c : f.slide;
            e || d.data("bs.carousel", e = new b(this, f)), "number" == typeof c ? e.to(c) : g ? e[g]() : f.interval && e.pause().cycle();
        });
    }, a.fn.carousel.Constructor = b, a.fn.carousel.noConflict = function() {
        return a.fn.carousel = c, this;
    }, a(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function(b) {
        var c, d = a(this), e = a(d.attr("data-target") || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "")), f = a.extend({}, e.data(), d.data()), g = d.attr("data-slide-to");
        g && (f.interval = !1), e.carousel(f), (g = d.attr("data-slide-to")) && e.data("bs.carousel").to(g), 
        b.preventDefault();
    }), a(window).on("load", function() {
        a('[data-ride="carousel"]').each(function() {
            var b = a(this);
            b.carousel(b.data());
        });
    });
}(window.jQuery), +function(a) {
    var b = function(c, d) {
        this.$element = a(c), this.options = a.extend({}, b.DEFAULTS, d), this.transitioning = null, 
        this.options.parent && (this.$parent = a(this.options.parent)), this.options.toggle && this.toggle();
    };
    b.DEFAULTS = {
        toggle: !0
    }, b.prototype.dimension = function() {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height";
    }, b.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b = a.Event("show.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.$parent && this.$parent.find("> .accordion-group > .in");
                if (c && c.length) {
                    var d = c.data("bs.collapse");
                    if (d && d.transitioning) return;
                    c.collapse("hide"), d || c.data("bs.collapse", null);
                }
                var e = this.dimension();
                this.$element.removeClass("collapse").addClass("collapsing")[e](0), this.transitioning = 1;
                var f = function() {
                    this.$element.removeClass("collapsing").addClass("in")[e]("auto"), this.transitioning = 0, 
                    this.$element.trigger("shown.bs.collapse");
                };
                if (!a.support.transition) return f.call(this);
                var g = a.camelCase([ "scroll", e ].join("-"));
                this.$element.one(a.support.transition.end, a.proxy(f, this)).emulateTransitionEnd(350)[e](this.$element[0][g]);
            }
        }
    }, b.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), 
                this.transitioning = 1;
                var d = function() {
                    this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse");
                };
                return a.support.transition ? (this.$element[c](0).one(a.support.transition.end, a.proxy(d, this)).emulateTransitionEnd(350), 
                void 0) : d.call(this);
            }
        }
    }, b.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
    };
    var c = a.fn.collapse;
    a.fn.collapse = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.collapse"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.collapse", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.collapse.Constructor = b, a.fn.collapse.noConflict = function() {
        return a.fn.collapse = c, this;
    }, a(document).on("click.bs.collapse.data-api", "[data-toggle=collapse]", function(b) {
        var c, d = a(this), e = d.attr("data-target") || b.preventDefault() || (c = d.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, ""), f = a(e), g = f.data("bs.collapse"), h = g ? "toggle" : d.data(), i = d.attr("data-parent"), j = i && a(i);
        g && g.transitioning || (j && j.find("[data-toggle=collapse][data-parent=" + i + "]").not(d).addClass("collapsed"), 
        d[f.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), f.collapse(h);
    });
}(window.jQuery), +function(a) {
    function b() {
        a(d).remove(), a(e).each(function(b) {
            var d = c(a(this));
            d.hasClass("open") && (d.trigger(b = a.Event("hide.bs.dropdown")), b.isDefaultPrevented() || d.removeClass("open").trigger("hidden.bs.dropdown"));
        });
    }
    function c(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent();
    }
    var d = ".dropdown-backdrop", e = "[data-toggle=dropdown]", f = function(b) {
        a(b).on("click.bs.dropdown", this.toggle);
    };
    f.prototype.toggle = function(d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = c(e), g = f.hasClass("open");
            if (b(), !g) {
                if ("ontouchstart" in document.documentElement && a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click", b), 
                f.trigger(d = a.Event("show.bs.dropdown")), d.isDefaultPrevented()) return;
                f.toggleClass("open").trigger("shown.bs.dropdown");
            }
            return e.focus(), !1;
        }
    }, f.prototype.keydown = function(b) {
        if (/(38|40|27)/.test(b.keyCode)) {
            var d = a(this);
            if (b.preventDefault(), b.stopPropagation(), !d.is(".disabled, :disabled")) {
                var f = c(d), g = f.hasClass("open");
                if (!g || g && 27 == b.keyCode) return 27 == b.which && f.find(e).focus(), d.click();
                var h = a("[role=menu] li:not(.divider):visible a", f);
                if (h.length) {
                    var i = h.index(h.filter(":focus"));
                    38 == b.keyCode && i > 0 && i--, 40 == b.keyCode && i < h.length - 1 && i++, ~i || (i = 0), 
                    h.eq(i).focus();
                }
            }
        }
    };
    var g = a.fn.dropdown;
    a.fn.dropdown = function(b) {
        return this.each(function() {
            var c = a(this), d = c.data("dropdown");
            d || c.data("dropdown", d = new f(this)), "string" == typeof b && d[b].call(c);
        });
    }, a.fn.dropdown.Constructor = f, a.fn.dropdown.noConflict = function() {
        return a.fn.dropdown = g, this;
    }, a(document).on("click.bs.dropdown.data-api", b).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
        a.stopPropagation();
    }).on("click.bs.dropdown.data-api", e, f.prototype.toggle).on("keydown.bs.dropdown.data-api", e + ", [role=menu]", f.prototype.keydown);
}(window.jQuery), +function(a) {
    var b = function(b, c) {
        this.options = c, this.$element = a(b).on("click.dismiss.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), 
        this.$backdrop = this.isShown = null, this.options.remote && this.$element.find(".modal-body").load(this.options.remote);
    };
    b.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, b.prototype.toggle = function() {
        return this[this.isShown ? "hide" : "show"]();
    }, b.prototype.show = function() {
        var b = this, c = a.Event("show.bs.modal");
        this.$element.trigger(c), this.isShown || c.isDefaultPrevented() || (this.isShown = !0, 
        this.escape(), this.backdrop(function() {
            var c = a.support.transition && b.$element.hasClass("fade");
            b.$element.parent().length || b.$element.appendTo(document.body), b.$element.show(), 
            c && b.$element[0].offsetWidth, b.$element.addClass("in").attr("aria-hidden", !1), 
            b.enforceFocus(), c ? b.$element.one(a.support.transition.end, function() {
                b.$element.focus().trigger("shown.bs.modal");
            }).emulateTransitionEnd(300) : b.$element.focus().trigger("shown.bs.modal");
        }));
    }, b.prototype.hide = function(b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), 
        this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), a(document).off("focusin.bs.modal"), 
        this.$element.removeClass("in").attr("aria-hidden", !0), a.support.transition && this.$element.hasClass("fade") ? this.$element.one(a.support.transition.end, a.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal());
    }, b.prototype.enforceFocus = function() {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.focus();
        }, this));
    }, b.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", a.proxy(function(a) {
            27 == a.which && this.hide();
        }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal");
    }, b.prototype.hideModal = function() {
        var a = this;
        this.$element.hide(), this.backdrop(function() {
            a.removeBackdrop(), a.$element.trigger("hidden.bs.modal");
        });
    }, b.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null;
    }, b.prototype.backdrop = function(b) {
        var c = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var d = a.support.transition && c;
            if (this.$backdrop = a('<div class="modal-backdrop ' + c + '" />').appendTo(document.body), 
            this.$element.on("click", a.proxy(function(a) {
                a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this));
            }, this)), d && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
            d ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b();
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(a.support.transition.end, b).emulateTransitionEnd(150) : b()) : b && b();
    };
    var c = a.fn.modal;
    a.fn.modal = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.modal"), f = a.extend({}, b.DEFAULTS, d.data(), "object" == typeof c && c);
            e || d.data("bs.modal", e = new b(this, f)), "string" == typeof c ? e[c]() : f.show && e.show();
        });
    }, a.fn.modal.Constructor = b, a.fn.modal.noConflict = function() {
        return a.fn.modal = c, this;
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(b) {
        var c = a(this), d = c.attr("href"), e = a(c.attr("data-target") || d && d.replace(/.*(?=#[^\s]+$)/, "")), f = e.data("modal") ? "toggle" : a.extend({
            remote: !/#/.test(d) && d
        }, e.data(), c.data());
        b.preventDefault(), e.modal(f).one("hide", function() {
            c.is(":visible") && c.focus();
        });
    }), a(function() {
        var b = a(document.body).on("shown.bs.modal", ".modal", function() {
            b.addClass("modal-open");
        }).on("hidden.bs.modal", ".modal", function() {
            b.removeClass("modal-open");
        });
    });
}(window.jQuery), +function(a) {
    var b = function(a, b) {
        this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, 
        this.init("tooltip", a, b);
    };
    b.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    }, b.prototype.init = function(b, c, d) {
        this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d);
        for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focus", i = "hover" == g ? "mouseleave" : "blur";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), 
                this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this));
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle();
    }, b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.getOptions = function(b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b;
    }, b.prototype.enter = function(b) {
        var c = this.getDefaults(), d = {};
        this._options && a.each(this._options, function(a, b) {
            c[a] != b && (d[a] = b);
        });
        var e = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](d).data("bs." + this.type);
        return clearTimeout(e.timeout), e.options.delay && e.options.delay.show ? (e.hoverState = "in", 
        e.timeout = setTimeout(function() {
            "in" == e.hoverState && e.show();
        }, e.options.delay.show), void 0) : e.show();
    }, b.prototype.leave = function(b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget)[this.type](this._options).data("bs." + this.type);
        return clearTimeout(c.timeout), c.options.delay && c.options.delay.hide ? (c.hoverState = "out", 
        c.timeout = setTimeout(function() {
            "out" == c.hoverState && c.hide();
        }, c.options.delay.hide), void 0) : c.hide();
    }, b.prototype.show = function() {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(b), b.isDefaultPrevented()) return;
            var c = this.tip();
            this.setContent(), this.options.animation && c.addClass("fade");
            var d = "function" == typeof this.options.placement ? this.options.placement.call(this, c[0], this.$element[0]) : this.options.placement, e = /\s?auto?\s?/i, f = e.test(d);
            f && (d = d.replace(e, "") || "top"), c.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(d), this.options.container ? c.appendTo(this.options.container) : c.insertAfter(this.$element);
            var g = this.getPosition(), h = c[0].offsetWidth, i = c[0].offsetHeight;
            if (f) {
                var j = this.$element.parent(), k = d, l = document.documentElement.scrollTop || document.body.scrollTop, m = "body" == this.options.container ? window.innerWidth : j.outerWidth(), n = "body" == this.options.container ? window.innerHeight : j.outerHeight(), o = "body" == this.options.container ? 0 : j.offset().left;
                d = "bottom" == d && g.top + g.height + i - l > n ? "top" : "top" == d && g.top - l - i < 0 ? "bottom" : "right" == d && g.right + h > m ? "left" : "left" == d && g.left - h < o ? "right" : d, 
                c.removeClass(k).addClass(d);
            }
            var p = this.getCalcuatedOffset(d, g, h, i);
            this.applyPlacement(p, d), this.$element.trigger("shown.bs." + this.type);
        }
    }, b.prototype.applyPlacement = function(a, b) {
        var c, d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), a.top = a.top + g, a.left = a.left + h, 
        d.offset(a).addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        if ("top" == b && j != f && (c = !0, a.top = a.top + f - j), /bottom|top/.test(b)) {
            var k = 0;
            a.left < 0 && (k = -2 * a.left, a.left = 0, d.offset(a), i = d[0].offsetWidth, j = d[0].offsetHeight), 
            this.replaceArrow(k - e + i, i, "left");
        } else this.replaceArrow(j - f, j, "top");
        c && d.offset(a);
    }, b.prototype.replaceArrow = function(a, b, c) {
        this.arrow().css(c, a ? 50 * (1 - a / b) + "%" : "");
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right");
    }, b.prototype.hide = function() {
        function b() {
            c.detach();
        }
        var c = this.tip(), d = a.Event("hide.bs." + this.type);
        return this.$element.trigger(d), d.isDefaultPrevented() ? void 0 : (c.removeClass("in"), 
        a.support.transition && this.$tip.hasClass("fade") ? c.one(a.support.transition.end, b).emulateTransitionEnd(150) : b(), 
        this.$element.trigger("hidden.bs." + this.type), this);
    }, b.prototype.fixTitle = function() {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "");
    }, b.prototype.hasContent = function() {
        return this.getTitle();
    }, b.prototype.getPosition = function() {
        var b = this.$element[0];
        return a.extend({}, "function" == typeof b.getBoundingClientRect ? b.getBoundingClientRect() : {
            width: b.offsetWidth,
            height: b.offsetHeight
        }, this.$element.offset());
    }, b.prototype.getCalcuatedOffset = function(a, b, c, d) {
        return "bottom" == a ? {
            top: b.top + b.height,
            left: b.left + b.width / 2 - c / 2
        } : "top" == a ? {
            top: b.top - d,
            left: b.left + b.width / 2 - c / 2
        } : "left" == a ? {
            top: b.top + b.height / 2 - d / 2,
            left: b.left - c
        } : {
            top: b.top + b.height / 2 - d / 2,
            left: b.left + b.width
        };
    }, b.prototype.getTitle = function() {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title);
    }, b.prototype.tip = function() {
        return this.$tip = this.$tip || a(this.options.template);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow");
    }, b.prototype.validate = function() {
        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null);
    }, b.prototype.enable = function() {
        this.enabled = !0;
    }, b.prototype.disable = function() {
        this.enabled = !1;
    }, b.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled;
    }, b.prototype.toggle = function(b) {
        var c = b ? a(b.currentTarget)[this.type](this._options).data("bs." + this.type) : this;
        c.tip().hasClass("in") ? c.leave(c) : c.enter(c);
    }, b.prototype.destroy = function() {
        this.hide().$element.off("." + this.type).removeData("bs." + this.type);
    };
    var c = a.fn.tooltip;
    a.fn.tooltip = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof c && c;
            e || d.data("bs.tooltip", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.tooltip.Constructor = b, a.fn.tooltip.noConflict = function() {
        return a.fn.tooltip = c, this;
    };
}(window.jQuery), +function(a) {
    var b = function(a, b) {
        this.init("popover", a, b);
    };
    if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
    b.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), b.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), b.prototype.constructor = b, 
    b.prototype.getDefaults = function() {
        return b.DEFAULTS;
    }, b.prototype.setContent = function() {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content")[this.options.html ? "html" : "text"](c), 
        a.removeClass("fade top bottom left right in"), "" === a.find(".popover-title").html() && a.find(".popover-title").hide();
    }, b.prototype.hasContent = function() {
        return this.getTitle() || this.getContent();
    }, b.prototype.getContent = function() {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content);
    }, b.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow");
    }, b.prototype.tip = function() {
        return this.$tip || (this.$tip = a(this.options.template)), this.$tip;
    };
    var c = a.fn.popover;
    a.fn.popover = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof c && c;
            e || d.data("bs.popover", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.popover.Constructor = b, a.fn.popover.noConflict = function() {
        return a.fn.popover = c, this;
    };
}(window.jQuery), +function(a) {
    function b(c, d) {
        var e, f = a.proxy(this.process, this);
        this.$element = a(c).is("body") ? a(window) : a(c), this.$body = a("body"), this.$scrollElement = this.$element.on("scroll.bs.scroll-spy.data-api", f), 
        this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || (e = a(c).attr("href")) && e.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", 
        this.offsets = a([]), this.targets = a([]), this.activeTarget = null, this.refresh(), 
        this.process();
    }
    b.DEFAULTS = {
        offset: 10
    }, b.prototype.refresh = function() {
        var b = this.$element[0] == window ? "offset" : "position";
        this.offsets = a([]), this.targets = a([]);
        var c = this;
        this.$body.find(this.selector).map(function() {
            var d = a(this), e = d.data("target") || d.attr("href"), f = /^#\w/.test(e) && a(e);
            return f && f.length && [ [ f[b]().top + (!a.isWindow(c.$scrollElement.get(0)) && c.$scrollElement.scrollTop()), e ] ] || null;
        }).sort(function(a, b) {
            return a[0] - b[0];
        }).each(function() {
            c.offsets.push(this[0]), c.targets.push(this[1]);
        });
    }, b.prototype.process = function() {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, d = c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (b >= d) return g != (a = f.last()[0]) && this.activate(a);
        for (a = e.length; a--; ) g != f[a] && b >= e[a] && (!e[a + 1] || b <= e[a + 1]) && this.activate(f[a]);
    }, b.prototype.activate = function(b) {
        this.activeTarget = b, a(this.selector).parents(".active").removeClass("active");
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), 
        d.trigger("activate");
    };
    var c = a.fn.scrollspy;
    a.fn.scrollspy = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function() {
        return a.fn.scrollspy = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="scroll"]').each(function() {
            var b = a(this);
            b.scrollspy(b.data());
        });
    });
}(window.jQuery), +function(a) {
    var b = function(b) {
        this.element = a(b);
    };
    b.prototype.show = function() {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.attr("data-target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a")[0], f = a.Event("show.bs.tab", {
                relatedTarget: e
            });
            if (b.trigger(f), !f.isDefaultPrevented()) {
                var g = a(d);
                this.activate(b.parent("li"), c), this.activate(g, g.parent(), function() {
                    b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e
                    });
                });
            }
        }
    }, b.prototype.activate = function(b, c, d) {
        function e() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), 
            b.addClass("active"), g ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), 
            b.parent(".dropdown-menu") && b.closest("li.dropdown").addClass("active"), d && d();
        }
        var f = c.find("> .active"), g = d && a.support.transition && f.hasClass("fade");
        g ? f.one(a.support.transition.end, e).emulateTransitionEnd(150) : e(), f.removeClass("in");
    };
    var c = a.fn.tab;
    a.fn.tab = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new b(this)), "string" == typeof c && e[c]();
        });
    }, a.fn.tab.Constructor = b, a.fn.tab.noConflict = function() {
        return a.fn.tab = c, this;
    }, a(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(b) {
        b.preventDefault(), a(this).tab("show");
    });
}(window.jQuery), +function(a) {
    var b = function(c, d) {
        this.options = a.extend({}, b.DEFAULTS, d), this.$window = a(window).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), 
        this.$element = a(c), this.affixed = this.unpin = null, this.checkPosition();
    };
    b.RESET = "affix affix-top affix-bottom", b.DEFAULTS = {
        offset: 0
    }, b.prototype.checkPositionWithEventLoop = function() {
        setTimeout(a.proxy(this.checkPosition, this), 1);
    }, b.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var c = a(document).height(), d = this.$window.scrollTop(), e = this.$element.offset(), f = this.options.offset, g = f.top, h = f.bottom;
            "object" != typeof f && (h = g = f), "function" == typeof g && (g = f.top()), "function" == typeof h && (h = f.bottom());
            var i = null != this.unpin && d + this.unpin <= e.top ? !1 : null != h && e.top + this.$element.height() >= c - h ? "bottom" : null != g && g >= d ? "top" : !1;
            this.affixed !== i && (this.unpin && this.$element.css("top", ""), this.affixed = i, 
            this.unpin = "bottom" == i ? e.top - d : null, this.$element.removeClass(b.RESET).addClass("affix" + (i ? "-" + i : "")), 
            "bottom" == i && this.$element.offset({
                top: document.body.offsetHeight - h - this.$element.height()
            }));
        }
    };
    var c = a.fn.affix;
    a.fn.affix = function(c) {
        return this.each(function() {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof c && c;
            e || d.data("bs.affix", e = new b(this, f)), "string" == typeof c && e[c]();
        });
    }, a.fn.affix.Constructor = b, a.fn.affix.noConflict = function() {
        return a.fn.affix = c, this;
    }, a(window).on("load", function() {
        a('[data-spy="affix"]').each(function() {
            var b = a(this), c = b.data();
            c.offset = c.offset || {}, c.offsetBottom && (c.offset.bottom = c.offsetBottom), 
            c.offsetTop && (c.offset.top = c.offsetTop), b.affix(c);
        });
    });
}(window.jQuery), function() {
    var a = this, b = a._, c = {}, d = Array.prototype, e = Object.prototype, f = Function.prototype, g = d.push, h = d.slice, i = d.concat, j = e.toString, k = e.hasOwnProperty, l = d.forEach, m = d.map, n = d.reduce, o = d.reduceRight, p = d.filter, q = d.every, r = d.some, s = d.indexOf, t = d.lastIndexOf, u = Array.isArray, v = Object.keys, w = f.bind, x = function(a) {
        return a instanceof x ? a : this instanceof x ? (this._wrapped = a, void 0) : new x(a);
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), 
    exports._ = x) : a._ = x, x.VERSION = "1.4.4";
    var y = x.each = x.forEach = function(a, b, d) {
        if (null != a) if (l && a.forEach === l) a.forEach(b, d); else if (a.length === +a.length) {
            for (var e = 0, f = a.length; f > e; e++) if (b.call(d, a[e], e, a) === c) return;
        } else for (var g in a) if (x.has(a, g) && b.call(d, a[g], g, a) === c) return;
    };
    x.map = x.collect = function(a, b, c) {
        var d = [];
        return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
            d[d.length] = b.call(c, a, e, f);
        }), d);
    };
    var z = "Reduce of empty array with no initial value";
    x.reduce = x.foldl = x.inject = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), 
        e ? a.reduce(b, c) : a.reduce(b);
        if (y(a, function(a, f, g) {
            e ? c = b.call(d, c, a, f, g) : (c = a, e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.reduceRight = x.foldr = function(a, b, c, d) {
        var e = arguments.length > 2;
        if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), 
        e ? a.reduceRight(b, c) : a.reduceRight(b);
        var f = a.length;
        if (f !== +f) {
            var g = x.keys(a);
            f = g.length;
        }
        if (y(a, function(h, i, j) {
            i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0);
        }), !e) throw new TypeError(z);
        return c;
    }, x.find = x.detect = function(a, b, c) {
        var d;
        return A(a, function(a, e, f) {
            return b.call(c, a, e, f) ? (d = a, !0) : void 0;
        }), d;
    }, x.filter = x.select = function(a, b, c) {
        var d = [];
        return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
            b.call(c, a, e, f) && (d[d.length] = a);
        }), d);
    }, x.reject = function(a, b, c) {
        return x.filter(a, function(a, d, e) {
            return !b.call(c, a, d, e);
        }, c);
    }, x.every = x.all = function(a, b, d) {
        b || (b = x.identity);
        var e = !0;
        return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
            return (e = e && b.call(d, a, f, g)) ? void 0 : c;
        }), !!e);
    };
    var A = x.some = x.any = function(a, b, d) {
        b || (b = x.identity);
        var e = !1;
        return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
            return e || (e = b.call(d, a, f, g)) ? c : void 0;
        }), !!e);
    };
    x.contains = x.include = function(a, b) {
        return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
            return a === b;
        });
    }, x.invoke = function(a, b) {
        var c = h.call(arguments, 2), d = x.isFunction(b);
        return x.map(a, function(a) {
            return (d ? b : a[b]).apply(a, c);
        });
    }, x.pluck = function(a, b) {
        return x.map(a, function(a) {
            return a[b];
        });
    }, x.where = function(a, b, c) {
        return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function(a) {
            for (var c in b) if (b[c] !== a[c]) return !1;
            return !0;
        });
    }, x.findWhere = function(a, b) {
        return x.where(a, b, !0);
    }, x.max = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
        if (!b && x.isEmpty(a)) return -1/0;
        var d = {
            computed: -1/0,
            value: -1/0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g >= d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.min = function(a, b, c) {
        if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
        if (!b && x.isEmpty(a)) return 1/0;
        var d = {
            computed: 1/0,
            value: 1/0
        };
        return y(a, function(a, e, f) {
            var g = b ? b.call(c, a, e, f) : a;
            g < d.computed && (d = {
                value: a,
                computed: g
            });
        }), d.value;
    }, x.shuffle = function(a) {
        var b, c = 0, d = [];
        return y(a, function(a) {
            b = x.random(c++), d[c - 1] = d[b], d[b] = a;
        }), d;
    };
    var B = function(a) {
        return x.isFunction(a) ? a : function(b) {
            return b[a];
        };
    };
    x.sortBy = function(a, b, c) {
        var d = B(b);
        return x.pluck(x.map(a, function(a, b, e) {
            return {
                value: a,
                index: b,
                criteria: d.call(c, a, b, e)
            };
        }).sort(function(a, b) {
            var c = a.criteria, d = b.criteria;
            if (c !== d) {
                if (c > d || void 0 === c) return 1;
                if (d > c || void 0 === d) return -1;
            }
            return a.index < b.index ? -1 : 1;
        }), "value");
    };
    var C = function(a, b, c, d) {
        var e = {}, f = B(b || x.identity);
        return y(a, function(b, g) {
            var h = f.call(c, b, g, a);
            d(e, h, b);
        }), e;
    };
    x.groupBy = function(a, b, c) {
        return C(a, b, c, function(a, b, c) {
            (x.has(a, b) ? a[b] : a[b] = []).push(c);
        });
    }, x.countBy = function(a, b, c) {
        return C(a, b, c, function(a, b) {
            x.has(a, b) || (a[b] = 0), a[b]++;
        });
    }, x.sortedIndex = function(a, b, c, d) {
        c = null == c ? x.identity : B(c);
        for (var e = c.call(d, b), f = 0, g = a.length; g > f; ) {
            var h = f + g >>> 1;
            c.call(d, a[h]) < e ? f = h + 1 : g = h;
        }
        return f;
    }, x.toArray = function(a) {
        return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : [];
    }, x.size = function(a) {
        return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length;
    }, x.first = x.head = x.take = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b);
    }, x.initial = function(a, b, c) {
        return h.call(a, 0, a.length - (null == b || c ? 1 : b));
    }, x.last = function(a, b, c) {
        return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0));
    }, x.rest = x.tail = x.drop = function(a, b, c) {
        return h.call(a, null == b || c ? 1 : b);
    }, x.compact = function(a) {
        return x.filter(a, x.identity);
    };
    var D = function(a, b, c) {
        return y(a, function(a) {
            x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a);
        }), c;
    };
    x.flatten = function(a, b) {
        return D(a, b, []);
    }, x.without = function(a) {
        return x.difference(a, h.call(arguments, 1));
    }, x.uniq = x.unique = function(a, b, c, d) {
        x.isFunction(b) && (d = c, c = b, b = !1);
        var e = c ? x.map(a, c, d) : a, f = [], g = [];
        return y(e, function(c, d) {
            (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]));
        }), f;
    }, x.union = function() {
        return x.uniq(i.apply(d, arguments));
    }, x.intersection = function(a) {
        var b = h.call(arguments, 1);
        return x.filter(x.uniq(a), function(a) {
            return x.every(b, function(b) {
                return x.indexOf(b, a) >= 0;
            });
        });
    }, x.difference = function(a) {
        var b = i.apply(d, h.call(arguments, 1));
        return x.filter(a, function(a) {
            return !x.contains(b, a);
        });
    }, x.zip = function() {
        for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
        return c;
    }, x.object = function(a, b) {
        if (null == a) return {};
        for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
        return c;
    }, x.indexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = 0, e = a.length;
        if (c) {
            if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
            d = 0 > c ? Math.max(0, e + c) : c;
        }
        if (s && a.indexOf === s) return a.indexOf(b, c);
        for (;e > d; d++) if (a[d] === b) return d;
        return -1;
    }, x.lastIndexOf = function(a, b, c) {
        if (null == a) return -1;
        var d = null != c;
        if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
        for (var e = d ? c : a.length; e--; ) if (a[e] === b) return e;
        return -1;
    }, x.range = function(a, b, c) {
        arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
        for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e; ) f[e++] = a, 
        a += c;
        return f;
    }, x.bind = function(a, b) {
        if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
        var c = h.call(arguments, 2);
        return function() {
            return a.apply(b, c.concat(h.call(arguments)));
        };
    }, x.partial = function(a) {
        var b = h.call(arguments, 1);
        return function() {
            return a.apply(this, b.concat(h.call(arguments)));
        };
    }, x.bindAll = function(a) {
        var b = h.call(arguments, 1);
        return 0 === b.length && (b = x.functions(a)), y(b, function(b) {
            a[b] = x.bind(a[b], a);
        }), a;
    }, x.memoize = function(a, b) {
        var c = {};
        return b || (b = x.identity), function() {
            var d = b.apply(this, arguments);
            return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments);
        };
    }, x.delay = function(a, b) {
        var c = h.call(arguments, 2);
        return setTimeout(function() {
            return a.apply(null, c);
        }, b);
    }, x.defer = function(a) {
        return x.delay.apply(x, [ a, 1 ].concat(h.call(arguments, 1)));
    }, x.throttle = function(a, b) {
        var c, d, e, f, g = 0, h = function() {
            g = new Date(), e = null, f = a.apply(c, d);
        };
        return function() {
            var i = new Date(), j = b - (i - g);
            return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), 
            f;
        };
    }, x.debounce = function(a, b, c) {
        var d, e;
        return function() {
            var f = this, g = arguments, h = function() {
                d = null, c || (e = a.apply(f, g));
            }, i = c && !d;
            return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e;
        };
    }, x.once = function(a) {
        var b, c = !1;
        return function() {
            return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b);
        };
    }, x.wrap = function(a, b) {
        return function() {
            var c = [ a ];
            return g.apply(c, arguments), b.apply(this, c);
        };
    }, x.compose = function() {
        var a = arguments;
        return function() {
            for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [ a[c].apply(this, b) ];
            return b[0];
        };
    }, x.after = function(a, b) {
        return 0 >= a ? b() : function() {
            return --a < 1 ? b.apply(this, arguments) : void 0;
        };
    }, x.keys = v || function(a) {
        if (a !== Object(a)) throw new TypeError("Invalid object");
        var b = [];
        for (var c in a) x.has(a, c) && (b[b.length] = c);
        return b;
    }, x.values = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push(a[c]);
        return b;
    }, x.pairs = function(a) {
        var b = [];
        for (var c in a) x.has(a, c) && b.push([ c, a[c] ]);
        return b;
    }, x.invert = function(a) {
        var b = {};
        for (var c in a) x.has(a, c) && (b[a[c]] = c);
        return b;
    }, x.functions = x.methods = function(a) {
        var b = [];
        for (var c in a) x.isFunction(a[c]) && b.push(c);
        return b.sort();
    }, x.extend = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) a[c] = b[c];
        }), a;
    }, x.pick = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        return y(c, function(c) {
            c in a && (b[c] = a[c]);
        }), b;
    }, x.omit = function(a) {
        var b = {}, c = i.apply(d, h.call(arguments, 1));
        for (var e in a) x.contains(c, e) || (b[e] = a[e]);
        return b;
    }, x.defaults = function(a) {
        return y(h.call(arguments, 1), function(b) {
            if (b) for (var c in b) null == a[c] && (a[c] = b[c]);
        }), a;
    }, x.clone = function(a) {
        return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a;
    }, x.tap = function(a, b) {
        return b(a), a;
    };
    var E = function(a, b, c, d) {
        if (a === b) return 0 !== a || 1 / a == 1 / b;
        if (null == a || null == b) return a === b;
        a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
        var e = j.call(a);
        if (e != j.call(b)) return !1;
        switch (e) {
          case "[object String]":
            return a == String(b);

          case "[object Number]":
            return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;

          case "[object Date]":
          case "[object Boolean]":
            return +a == +b;

          case "[object RegExp]":
            return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase;
        }
        if ("object" != typeof a || "object" != typeof b) return !1;
        for (var f = c.length; f--; ) if (c[f] == a) return d[f] == b;
        c.push(a), d.push(b);
        var g = 0, h = !0;
        if ("[object Array]" == e) {
            if (g = a.length, h = g == b.length) for (;g-- && (h = E(a[g], b[g], c, d)); ) ;
        } else {
            var i = a.constructor, k = b.constructor;
            if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
            for (var l in a) if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d)))) break;
            if (h) {
                for (l in b) if (x.has(b, l) && !g--) break;
                h = !g;
            }
        }
        return c.pop(), d.pop(), h;
    };
    x.isEqual = function(a, b) {
        return E(a, b, [], []);
    }, x.isEmpty = function(a) {
        if (null == a) return !0;
        if (x.isArray(a) || x.isString(a)) return 0 === a.length;
        for (var b in a) if (x.has(a, b)) return !1;
        return !0;
    }, x.isElement = function(a) {
        return !(!a || 1 !== a.nodeType);
    }, x.isArray = u || function(a) {
        return "[object Array]" == j.call(a);
    }, x.isObject = function(a) {
        return a === Object(a);
    }, y([ "Arguments", "Function", "String", "Number", "Date", "RegExp" ], function(a) {
        x["is" + a] = function(b) {
            return j.call(b) == "[object " + a + "]";
        };
    }), x.isArguments(arguments) || (x.isArguments = function(a) {
        return !(!a || !x.has(a, "callee"));
    }), "function" != typeof /./ && (x.isFunction = function(a) {
        return "function" == typeof a;
    }), x.isFinite = function(a) {
        return isFinite(a) && !isNaN(parseFloat(a));
    }, x.isNaN = function(a) {
        return x.isNumber(a) && a != +a;
    }, x.isBoolean = function(a) {
        return a === !0 || a === !1 || "[object Boolean]" == j.call(a);
    }, x.isNull = function(a) {
        return null === a;
    }, x.isUndefined = function(a) {
        return void 0 === a;
    }, x.has = function(a, b) {
        return k.call(a, b);
    }, x.noConflict = function() {
        return a._ = b, this;
    }, x.identity = function(a) {
        return a;
    }, x.times = function(a, b, c) {
        for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
        return d;
    }, x.random = function(a, b) {
        return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1));
    };
    var F = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "/": "&#x2F;"
        }
    };
    F.unescape = x.invert(F.escape);
    var G = {
        escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")
    };
    x.each([ "escape", "unescape" ], function(a) {
        x[a] = function(b) {
            return null == b ? "" : ("" + b).replace(G[a], function(b) {
                return F[a][b];
            });
        };
    }), x.result = function(a, b) {
        if (null == a) return null;
        var c = a[b];
        return x.isFunction(c) ? c.call(a) : c;
    }, x.mixin = function(a) {
        y(x.functions(a), function(b) {
            var c = x[b] = a[b];
            x.prototype[b] = function() {
                var a = [ this._wrapped ];
                return g.apply(a, arguments), L.call(this, c.apply(x, a));
            };
        });
    };
    var H = 0;
    x.uniqueId = function(a) {
        var b = ++H + "";
        return a ? a + b : b;
    }, x.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var I = /(.)^/, J = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "	": "t",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }, K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    x.template = function(a, b, c) {
        var d;
        c = x.defaults({}, c, x.templateSettings);
        var e = new RegExp([ (c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source ].join("|") + "|$", "g"), f = 0, g = "__p+='";
        a.replace(e, function(b, c, d, e, h) {
            return g += a.slice(f, h).replace(K, function(a) {
                return "\\" + J[a];
            }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), 
            e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b;
        }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
        try {
            d = new Function(c.variable || "obj", "_", g);
        } catch (h) {
            throw h.source = g, h;
        }
        if (b) return d(b, x);
        var i = function(a) {
            return d.call(this, a, x);
        };
        return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i;
    }, x.chain = function(a) {
        return x(a).chain();
    };
    var L = function(a) {
        return this._chain ? x(a).chain() : a;
    };
    x.mixin(x), y([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            var c = this._wrapped;
            return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], 
            L.call(this, c);
        };
    }), y([ "concat", "join", "slice" ], function(a) {
        var b = d[a];
        x.prototype[a] = function() {
            return L.call(this, b.apply(this._wrapped, arguments));
        };
    }), x.extend(x.prototype, {
        chain: function() {
            return this._chain = !0, this;
        },
        value: function() {
            return this._wrapped;
        }
    });
}.call(this);

var PasswordStrength = function() {
    var a = /\d.*?\d.*?\d/, b = /[!@#$%^&*?_~].*?[!@#$%^&*?_~]/, c = /([a-z].*[A-Z])|([A-Z].*[a-z])/, d = /[!@#\$%^&*?_~]/;
    this.username = null, this.password = null, this.score = 0, this.status = null, 
    this.test = function() {
        return this.score = 0, this.containInvalidMatches() ? this.status = "invalid" : (this.score += this.scoreFor("password_size"), 
        this.score += this.scoreFor("numbers"), this.score += this.scoreFor("symbols"), 
        this.score += this.scoreFor("uppercase_lowercase"), this.score += this.scoreFor("numbers_chars"), 
        this.score += this.scoreFor("numbers_symbols"), this.score += this.scoreFor("symbols_chars"), 
        this.score += this.scoreFor("only_chars"), this.score += this.scoreFor("only_numbers"), 
        this.score += this.scoreFor("username"), this.score += this.scoreFor("sequences"), 
        this.score += this.scoreFor("repetitions"), this.score < 0 && (this.score = 0), 
        this.score > 100 && (this.score = 100), this.score < 35 && (this.status = "weak"), 
        this.score >= 35 && this.score < 70 && (this.status = "good"), this.score >= 70 && (this.status = "strong")), 
        this.score;
    }, this.scoreFor = function(e) {
        switch (score = 0, e) {
          case "password_size":
            score = this.password.length < 10 ? -100 : 4 * this.password.length;
            break;

          case "numbers":
            this.password.match(a) && (score = 5);
            break;

          case "symbols":
            this.password.match(b) && (score = 5);
            break;

          case "uppercase_lowercase":
            this.password.match(c) && (score = 10);
            break;

          case "numbers_chars":
            this.password.match(/[a-z]/i) && this.password.match(/[0-9]/) && (score = 15);
            break;

          case "numbers_symbols":
            this.password.match(/[0-9]/) && this.password.match(d) && (score = 15);
            break;

          case "symbols_chars":
            this.password.match(/[a-z]/i) && this.password.match(d) && (score = 15);
            break;

          case "only_chars":
            this.password.match(/^[a-z]+$/i) && (score = -15);
            break;

          case "only_numbers":
            this.password.match(/^\d+$/i) && (score = -15);
            break;

          case "username":
            this.password == this.username ? score = -100 : -1 != this.password.indexOf(this.username) && (score = -15);
            break;

          case "sequences":
            score += -15 * this.sequences(this.password), score += -15 * this.sequences(this.reversed(this.password));
            break;

          case "repetitions":
            score += -(4 * this.repetitions(this.password, 2)), score += -(3 * this.repetitions(this.password, 3)), 
            score += -(2 * this.repetitions(this.password, 4));
        }
        return score;
    }, this.isGood = function() {
        return "good" == this.status;
    }, this.isWeak = function() {
        return "weak" == this.status;
    }, this.isStrong = function() {
        return "strong" == this.status;
    }, this.isInvalid = function() {
        return "invalid" == this.status;
    }, this.isValid = function(a) {
        return "strong" == a ? this.isStrong() : "good" == a ? this.isStrong() || this.isGood() : !this.containInvalidMatches();
    }, this.containInvalidMatches = function() {
        return this.exclude ? this.exclude.test ? this.exclude.test(this.password.toString()) : !1 : !1;
    }, this.sequences = function(a) {
        for (var b, c, d = 0, e = 0, f = [], g = a.length, h = 0; g > h; h++) c = a.charCodeAt(h), 
        b = f[f.length - 1], f.push(c), b && (c == b + 1 || b == c ? e += 1 : e = 0), 2 == e && (d += 1);
        return d;
    }, this.repetitions = function(a, b) {
        for (var c, d, e, f = 0, g = {}, h = a.length, i = 0; h > i; i++) if (c = a.substr(i, b), 
        d = 0, e = a, !(g[c] || c.length < b)) {
            for (g[c] = !0; -1 != (i = e.indexOf(c)); ) d += 1, e = e.substr(i + 1);
            d > 1 && (f += 1);
        }
        return f;
    }, this.reversed = function(a) {
        for (var b = "", c = a.length, d = c - 1; d >= 0; d--) b += a.charAt(d);
        return b;
    };
};

PasswordStrength.test = function(a, b) {
    return strength = new PasswordStrength(), strength.username = a, strength.password = b, 
    strength.test(), strength;
}, function(a) {
    a.strength = function(b, c, d, e) {
        "function" == typeof d ? (e = d, d = {}) : d || (d = {});
        var f = a(b), g = a(c), h = new PasswordStrength();
        h.exclude = d.exclude, e = e || a.strength.callback;
        var i = function() {
            h.username = a(f).val(), 0 == a(f).length && (h.username = b), h.password = a(g).val(), 
            0 == a(g).length && (h.password = c), h.test(), e(f, g, h);
        };
        a(f).keydown(i), a(f).keyup(i), a(g).keydown(i), a(g).keyup(i);
    }, a.extend(a.strength, {
        callback: function(b, c, d) {
            var e = a(c).next("img.strength");
            e.length || (a(c).after("<img class='strength'>"), e = a("img.strength")), a(e).removeClass("weak").removeClass("good").removeClass("strong").addClass(d.status).attr("src", a.strength[d.status + "Image"]);
        },
        weakImage: "/images/weak.png",
        goodImage: "/images/good.png",
        strongImage: "/images/strong.png"
    });
}(jQuery);

var t = void 0, u = !1, sjcl = {
    cipher: {},
    hash: {},
    keyexchange: {},
    mode: {},
    misc: {},
    codec: {},
    exception: {
        corrupt: function(a) {
            this.toString = function() {
                return "CORRUPT: " + this.message;
            }, this.message = a;
        },
        invalid: function(a) {
            this.toString = function() {
                return "INVALID: " + this.message;
            }, this.message = a;
        },
        bug: function(a) {
            this.toString = function() {
                return "BUG: " + this.message;
            }, this.message = a;
        },
        notReady: function(a) {
            this.toString = function() {
                return "NOT READY: " + this.message;
            }, this.message = a;
        }
    }
};

"undefined" != typeof module && module.exports && (module.exports = sjcl), sjcl.cipher.aes = function(a) {
    this.j[0][0][0] || this.D();
    var b, c, d, e, f = this.j[0][4], g = this.j[1];
    b = a.length;
    var h = 1;
    for (4 !== b && 6 !== b && 8 !== b && q(new sjcl.exception.invalid("invalid aes key size")), 
    this.a = [ d = a.slice(0), e = [] ], a = b; 4 * b + 28 > a; a++) c = d[a - 1], (0 === a % b || 8 === b && 4 === a % b) && (c = f[c >>> 24] << 24 ^ f[255 & c >> 16] << 16 ^ f[255 & c >> 8] << 8 ^ f[255 & c], 
    0 === a % b && (c = c << 8 ^ c >>> 24 ^ h << 24, h = h << 1 ^ 283 * (h >> 7))), 
    d[a] = d[a - b] ^ c;
    for (b = 0; a; b++, a--) c = d[3 & b ? a : a - 4], e[b] = 4 >= a || 4 > b ? c : g[0][f[c >>> 24]] ^ g[1][f[255 & c >> 16]] ^ g[2][f[255 & c >> 8]] ^ g[3][f[255 & c]];
}, sjcl.cipher.aes.prototype = {
    encrypt: function(a) {
        return y(this, a, 0);
    },
    decrypt: function(a) {
        return y(this, a, 1);
    },
    j: [ [ [], [], [], [], [] ], [ [], [], [], [], [] ] ],
    D: function() {
        var a, b, c, d, e, f, g, h = this.j[0], i = this.j[1], j = h[4], k = i[4], l = [], m = [];
        for (a = 0; 256 > a; a++) m[(l[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
        for (b = c = 0; !j[b]; b ^= d || 1, c = m[c] || 1) for (f = c ^ c << 1 ^ c << 2 ^ c << 3 ^ c << 4, 
        f = 99 ^ (f >> 8 ^ 255 & f), j[b] = f, k[f] = b, e = l[a = l[d = l[b]]], g = 16843009 * e ^ 65537 * a ^ 257 * d ^ 16843008 * b, 
        e = 257 * l[f] ^ 16843008 * f, a = 0; 4 > a; a++) h[a][b] = e = e << 24 ^ e >>> 8, 
        i[a][f] = g = g << 24 ^ g >>> 8;
        for (a = 0; 5 > a; a++) h[a] = h[a].slice(0), i[a] = i[a].slice(0);
    }
}, sjcl.bitArray = {
    bitSlice: function(a, b, c) {
        return a = sjcl.bitArray.O(a.slice(b / 32), 32 - (31 & b)).slice(1), c === t ? a : sjcl.bitArray.clamp(a, c - b);
    },
    extract: function(a, b, c) {
        var d = Math.floor(31 & -b - c);
        return (-32 & (b + c - 1 ^ b) ? a[0 | b / 32] << 32 - d ^ a[0 | b / 32 + 1] >>> d : a[0 | b / 32] >>> d) & (1 << c) - 1;
    },
    concat: function(a, b) {
        if (0 === a.length || 0 === b.length) return a.concat(b);
        var c = a[a.length - 1], d = sjcl.bitArray.getPartial(c);
        return 32 === d ? a.concat(b) : sjcl.bitArray.O(b, d, 0 | c, a.slice(0, a.length - 1));
    },
    bitLength: function(a) {
        var b = a.length;
        return 0 === b ? 0 : 32 * (b - 1) + sjcl.bitArray.getPartial(a[b - 1]);
    },
    clamp: function(a, b) {
        if (32 * a.length < b) return a;
        a = a.slice(0, Math.ceil(b / 32));
        var c = a.length;
        return b &= 31, c > 0 && b && (a[c - 1] = sjcl.bitArray.partial(b, a[c - 1] & 2147483648 >> b - 1, 1)), 
        a;
    },
    partial: function(a, b, c) {
        return 32 === a ? b : (c ? 0 | b : b << 32 - a) + 1099511627776 * a;
    },
    getPartial: function(a) {
        return Math.round(a / 1099511627776) || 32;
    },
    equal: function(a, b) {
        if (sjcl.bitArray.bitLength(a) !== sjcl.bitArray.bitLength(b)) return u;
        var c, d = 0;
        for (c = 0; c < a.length; c++) d |= a[c] ^ b[c];
        return 0 === d;
    },
    O: function(a, b, c, d) {
        var e;
        for (e = 0, d === t && (d = []); b >= 32; b -= 32) d.push(c), c = 0;
        if (0 === b) return d.concat(a);
        for (e = 0; e < a.length; e++) d.push(c | a[e] >>> b), c = a[e] << 32 - b;
        return e = a.length ? a[a.length - 1] : 0, a = sjcl.bitArray.getPartial(e), d.push(sjcl.bitArray.partial(31 & b + a, b + a > 32 ? c : d.pop(), 1)), 
        d;
    },
    k: function(a, b) {
        return [ a[0] ^ b[0], a[1] ^ b[1], a[2] ^ b[2], a[3] ^ b[3] ];
    }
}, sjcl.codec.utf8String = {
    fromBits: function(a) {
        var b, c, d = "", e = sjcl.bitArray.bitLength(a);
        for (b = 0; e / 8 > b; b++) 0 === (3 & b) && (c = a[b / 4]), d += String.fromCharCode(c >>> 24), 
        c <<= 8;
        return decodeURIComponent(escape(d));
    },
    toBits: function(a) {
        a = unescape(encodeURIComponent(a));
        var b, c = [], d = 0;
        for (b = 0; b < a.length; b++) d = d << 8 | a.charCodeAt(b), 3 === (3 & b) && (c.push(d), 
        d = 0);
        return 3 & b && c.push(sjcl.bitArray.partial(8 * (3 & b), d)), c;
    }
}, sjcl.codec.hex = {
    fromBits: function(a) {
        var b, c = "";
        for (b = 0; b < a.length; b++) c += ((0 | a[b]) + 0xf00000000000).toString(16).substr(4);
        return c.substr(0, sjcl.bitArray.bitLength(a) / 4);
    },
    toBits: function(a) {
        var b, c, d = [];
        for (a = a.replace(/\s|0x/g, ""), c = a.length, a += "00000000", b = 0; b < a.length; b += 8) d.push(0 ^ parseInt(a.substr(b, 8), 16));
        return sjcl.bitArray.clamp(d, 4 * c);
    }
}, sjcl.codec.base64 = {
    I: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
    fromBits: function(a, b, c) {
        var d = "", e = 0, f = sjcl.codec.base64.I, g = 0, h = sjcl.bitArray.bitLength(a);
        for (c && (f = f.substr(0, 62) + "-_"), c = 0; 6 * d.length < h; ) d += f.charAt((g ^ a[c] >>> e) >>> 26), 
        6 > e ? (g = a[c] << 6 - e, e += 26, c++) : (g <<= 6, e -= 6);
        for (;3 & d.length && !b; ) d += "=";
        return d;
    },
    toBits: function(a, b) {
        a = a.replace(/\s|=/g, "");
        var c, d, e = [], f = 0, g = sjcl.codec.base64.I, h = 0;
        for (b && (g = g.substr(0, 62) + "-_"), c = 0; c < a.length; c++) d = g.indexOf(a.charAt(c)), 
        0 > d && q(new sjcl.exception.invalid("this isn't base64!")), f > 26 ? (f -= 26, 
        e.push(h ^ d >>> f), h = d << 32 - f) : (f += 6, h ^= d << 32 - f);
        return 56 & f && e.push(sjcl.bitArray.partial(56 & f, h, 1)), e;
    }
}, sjcl.codec.base64url = {
    fromBits: function(a) {
        return sjcl.codec.base64.fromBits(a, 1, 1);
    },
    toBits: function(a) {
        return sjcl.codec.base64.toBits(a, 1);
    }
}, sjcl.hash.sha256 = function(a) {
    this.a[0] || this.D(), a ? (this.q = a.q.slice(0), this.m = a.m.slice(0), this.g = a.g) : this.reset();
}, sjcl.hash.sha256.hash = function(a) {
    return new sjcl.hash.sha256().update(a).finalize();
}, sjcl.hash.sha256.prototype = {
    blockSize: 512,
    reset: function() {
        return this.q = this.M.slice(0), this.m = [], this.g = 0, this;
    },
    update: function(a) {
        "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a));
        var b, c = this.m = sjcl.bitArray.concat(this.m, a);
        for (b = this.g, a = this.g = b + sjcl.bitArray.bitLength(a), b = -512 & 512 + b; a >= b; b += 512) z(this, c.splice(0, 16));
        return this;
    },
    finalize: function() {
        var a, b = this.m, c = this.q, b = sjcl.bitArray.concat(b, [ sjcl.bitArray.partial(1, 1) ]);
        for (a = b.length + 2; 15 & a; a++) b.push(0);
        for (b.push(Math.floor(this.g / 4294967296)), b.push(0 | this.g); b.length; ) z(this, b.splice(0, 16));
        return this.reset(), c;
    },
    M: [],
    a: [],
    D: function() {
        function a(a) {
            return 0 | 4294967296 * (a - Math.floor(a));
        }
        var b, c = 0, d = 2;
        a: for (;64 > c; d++) {
            for (b = 2; d >= b * b; b++) if (0 === d % b) continue a;
            8 > c && (this.M[c] = a(Math.pow(d, .5))), this.a[c] = a(Math.pow(d, 1 / 3)), c++;
        }
    }
}, sjcl.mode.ccm = {
    name: "ccm",
    encrypt: function(a, b, c, d, e) {
        var f, g = b.slice(0), h = sjcl.bitArray, i = h.bitLength(c) / 8, j = h.bitLength(g) / 8;
        for (e = e || 64, d = d || [], 7 > i && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), 
        f = 2; 4 > f && j >>> 8 * f; f++) ;
        return 15 - i > f && (f = 15 - i), c = h.clamp(c, 8 * (15 - f)), b = sjcl.mode.ccm.K(a, b, c, d, e, f), 
        g = sjcl.mode.ccm.n(a, g, c, b, e, f), h.concat(g.data, g.tag);
    },
    decrypt: function(a, b, c, d, e) {
        e = e || 64, d = d || [];
        var f = sjcl.bitArray, g = f.bitLength(c) / 8, h = f.bitLength(b), i = f.clamp(b, h - e), j = f.bitSlice(b, h - e), h = (h - e) / 8;
        for (7 > g && q(new sjcl.exception.invalid("ccm: iv must be at least 7 bytes")), 
        b = 2; 4 > b && h >>> 8 * b; b++) ;
        return 15 - g > b && (b = 15 - g), c = f.clamp(c, 8 * (15 - b)), i = sjcl.mode.ccm.n(a, i, c, j, e, b), 
        a = sjcl.mode.ccm.K(a, i.data, c, d, e, b), f.equal(i.tag, a) || q(new sjcl.exception.corrupt("ccm: tag doesn't match")), 
        i.data;
    },
    K: function(a, b, c, d, e, f) {
        var g = [], h = sjcl.bitArray, i = h.k;
        if (e /= 8, (e % 2 || 4 > e || e > 16) && q(new sjcl.exception.invalid("ccm: invalid tag length")), 
        (4294967295 < d.length || 4294967295 < b.length) && q(new sjcl.exception.bug("ccm: can't deal with 4GiB or more data")), 
        f = [ h.partial(8, (d.length ? 64 : 0) | e - 2 << 2 | f - 1) ], f = h.concat(f, c), 
        f[3] |= h.bitLength(b) / 8, f = a.encrypt(f), d.length) for (c = h.bitLength(d) / 8, 
        65279 >= c ? g = [ h.partial(16, c) ] : 4294967295 >= c && (g = h.concat([ h.partial(16, 65534) ], [ c ])), 
        g = h.concat(g, d), d = 0; d < g.length; d += 4) f = a.encrypt(i(f, g.slice(d, d + 4).concat([ 0, 0, 0 ])));
        for (d = 0; d < b.length; d += 4) f = a.encrypt(i(f, b.slice(d, d + 4).concat([ 0, 0, 0 ])));
        return h.clamp(f, 8 * e);
    },
    n: function(a, b, c, d, e, f) {
        var g, h = sjcl.bitArray;
        g = h.k;
        var i = b.length, j = h.bitLength(b);
        if (c = h.concat([ h.partial(8, f - 1) ], c).concat([ 0, 0, 0 ]).slice(0, 4), d = h.bitSlice(g(d, a.encrypt(c)), 0, e), 
        !i) return {
            tag: d,
            data: []
        };
        for (g = 0; i > g; g += 4) c[3]++, e = a.encrypt(c), b[g] ^= e[0], b[g + 1] ^= e[1], 
        b[g + 2] ^= e[2], b[g + 3] ^= e[3];
        return {
            tag: d,
            data: h.clamp(b, j)
        };
    }
}, sjcl.mode.ocb2 = {
    name: "ocb2",
    encrypt: function(a, b, c, d, e, f) {
        128 !== sjcl.bitArray.bitLength(c) && q(new sjcl.exception.invalid("ocb iv must be 128 bits"));
        var g, h = sjcl.mode.ocb2.G, i = sjcl.bitArray, j = i.k, k = [ 0, 0, 0, 0 ];
        c = h(a.encrypt(c));
        var l, m = [];
        for (d = d || [], e = e || 64, g = 0; g + 4 < b.length; g += 4) l = b.slice(g, g + 4), 
        k = j(k, l), m = m.concat(j(c, a.encrypt(j(c, l)))), c = h(c);
        return l = b.slice(g), b = i.bitLength(l), g = a.encrypt(j(c, [ 0, 0, 0, b ])), 
        l = i.clamp(j(l.concat([ 0, 0, 0 ]), g), b), k = j(k, j(l.concat([ 0, 0, 0 ]), g)), 
        k = a.encrypt(j(k, j(c, h(c)))), d.length && (k = j(k, f ? d : sjcl.mode.ocb2.pmac(a, d))), 
        m.concat(i.concat(l, i.clamp(k, e)));
    },
    decrypt: function(a, b, c, d, e, f) {
        128 !== sjcl.bitArray.bitLength(c) && q(new sjcl.exception.invalid("ocb iv must be 128 bits")), 
        e = e || 64;
        var g, h, i = sjcl.mode.ocb2.G, j = sjcl.bitArray, k = j.k, l = [ 0, 0, 0, 0 ], m = i(a.encrypt(c)), n = sjcl.bitArray.bitLength(b) - e, o = [];
        for (d = d || [], c = 0; n / 32 > c + 4; c += 4) g = k(m, a.decrypt(k(m, b.slice(c, c + 4)))), 
        l = k(l, g), o = o.concat(g), m = i(m);
        return h = n - 32 * c, g = a.encrypt(k(m, [ 0, 0, 0, h ])), g = k(g, j.clamp(b.slice(c), h).concat([ 0, 0, 0 ])), 
        l = k(l, g), l = a.encrypt(k(l, k(m, i(m)))), d.length && (l = k(l, f ? d : sjcl.mode.ocb2.pmac(a, d))), 
        j.equal(j.clamp(l, e), j.bitSlice(b, n)) || q(new sjcl.exception.corrupt("ocb: tag doesn't match")), 
        o.concat(j.clamp(g, h));
    },
    pmac: function(a, b) {
        var c, d = sjcl.mode.ocb2.G, e = sjcl.bitArray, f = e.k, g = [ 0, 0, 0, 0 ], h = a.encrypt([ 0, 0, 0, 0 ]), h = f(h, d(d(h)));
        for (c = 0; c + 4 < b.length; c += 4) h = d(h), g = f(g, a.encrypt(f(h, b.slice(c, c + 4))));
        return c = b.slice(c), 128 > e.bitLength(c) && (h = f(h, d(h)), c = e.concat(c, [ -2147483648, 0, 0, 0 ])), 
        g = f(g, c), a.encrypt(f(d(f(h, d(h))), g));
    },
    G: function(a) {
        return [ a[0] << 1 ^ a[1] >>> 31, a[1] << 1 ^ a[2] >>> 31, a[2] << 1 ^ a[3] >>> 31, a[3] << 1 ^ 135 * (a[0] >>> 31) ];
    }
}, sjcl.mode.gcm = {
    name: "gcm",
    encrypt: function(a, b, c, d, e) {
        var f = b.slice(0);
        return b = sjcl.bitArray, d = d || [], a = sjcl.mode.gcm.n(!0, a, f, d, c, e || 128), 
        b.concat(a.data, a.tag);
    },
    decrypt: function(a, b, c, d, e) {
        var f = b.slice(0), g = sjcl.bitArray, h = g.bitLength(f);
        return e = e || 128, d = d || [], h >= e ? (b = g.bitSlice(f, h - e), f = g.bitSlice(f, 0, h - e)) : (b = f, 
        f = []), a = sjcl.mode.gcm.n(u, a, f, d, c, e), g.equal(a.tag, b) || q(new sjcl.exception.corrupt("gcm: tag doesn't match")), 
        a.data;
    },
    U: function(a, b) {
        var c, d, e, f, g, h = sjcl.bitArray.k;
        for (e = [ 0, 0, 0, 0 ], f = b.slice(0), c = 0; 128 > c; c++) {
            for ((d = 0 !== (a[Math.floor(c / 32)] & 1 << 31 - c % 32)) && (e = h(e, f)), g = 0 !== (1 & f[3]), 
            d = 3; d > 0; d--) f[d] = f[d] >>> 1 | (1 & f[d - 1]) << 31;
            f[0] >>>= 1, g && (f[0] ^= -520093696);
        }
        return e;
    },
    f: function(a, b, c) {
        var d, e = c.length;
        for (b = b.slice(0), d = 0; e > d; d += 4) b[0] ^= 4294967295 & c[d], b[1] ^= 4294967295 & c[d + 1], 
        b[2] ^= 4294967295 & c[d + 2], b[3] ^= 4294967295 & c[d + 3], b = sjcl.mode.gcm.U(b, a);
        return b;
    },
    n: function(a, b, c, d, e, f) {
        var g, h, i, j, k, l, m, n, o = sjcl.bitArray;
        for (l = c.length, m = o.bitLength(c), n = o.bitLength(d), h = o.bitLength(e), g = b.encrypt([ 0, 0, 0, 0 ]), 
        96 === h ? (e = e.slice(0), e = o.concat(e, [ 1 ])) : (e = sjcl.mode.gcm.f(g, [ 0, 0, 0, 0 ], e), 
        e = sjcl.mode.gcm.f(g, e, [ 0, 0, Math.floor(h / 4294967296), 4294967295 & h ])), 
        h = sjcl.mode.gcm.f(g, [ 0, 0, 0, 0 ], d), k = e.slice(0), d = h.slice(0), a || (d = sjcl.mode.gcm.f(g, h, c)), 
        j = 0; l > j; j += 4) k[3]++, i = b.encrypt(k), c[j] ^= i[0], c[j + 1] ^= i[1], 
        c[j + 2] ^= i[2], c[j + 3] ^= i[3];
        return c = o.clamp(c, m), a && (d = sjcl.mode.gcm.f(g, h, c)), a = [ Math.floor(n / 4294967296), 4294967295 & n, Math.floor(m / 4294967296), 4294967295 & m ], 
        d = sjcl.mode.gcm.f(g, d, a), i = b.encrypt(e), d[0] ^= i[0], d[1] ^= i[1], d[2] ^= i[2], 
        d[3] ^= i[3], {
            tag: o.bitSlice(d, 0, f),
            data: c
        };
    }
}, sjcl.misc.hmac = function(a, b) {
    this.L = b = b || sjcl.hash.sha256;
    var c, d = [ [], [] ], e = b.prototype.blockSize / 32;
    for (this.o = [ new b(), new b() ], a.length > e && (a = b.hash(a)), c = 0; e > c; c++) d[0][c] = 909522486 ^ a[c], 
    d[1][c] = 1549556828 ^ a[c];
    this.o[0].update(d[0]), this.o[1].update(d[1]);
}, sjcl.misc.hmac.prototype.encrypt = sjcl.misc.hmac.prototype.mac = function(a) {
    return a = new this.L(this.o[0]).update(a).finalize(), new this.L(this.o[1]).update(a).finalize();
}, sjcl.misc.pbkdf2 = function(a, b, c, d, e) {
    c = c || 1e3, (0 > d || 0 > c) && q(sjcl.exception.invalid("invalid params to pbkdf2")), 
    "string" == typeof a && (a = sjcl.codec.utf8String.toBits(a)), e = e || sjcl.misc.hmac, 
    a = new e(a);
    var f, g, h, i, j = [], k = sjcl.bitArray;
    for (i = 1; 32 * j.length < (d || 1); i++) {
        for (e = f = a.encrypt(k.concat(b, [ i ])), g = 1; c > g; g++) for (f = a.encrypt(f), 
        h = 0; h < f.length; h++) e[h] ^= f[h];
        j = j.concat(e);
    }
    return d && (j = k.clamp(j, d)), j;
}, sjcl.prng = function(a) {
    this.b = [ new sjcl.hash.sha256() ], this.h = [ 0 ], this.F = 0, this.t = {}, this.C = 0, 
    this.J = {}, this.N = this.c = this.i = this.T = 0, this.a = [ 0, 0, 0, 0, 0, 0, 0, 0 ], 
    this.e = [ 0, 0, 0, 0 ], this.A = t, this.B = a, this.p = u, this.z = {
        progress: {},
        seeded: {}
    }, this.l = this.S = 0, this.u = 1, this.w = 2, this.Q = 65536, this.H = [ 0, 48, 64, 96, 128, 192, 256, 384, 512, 768, 1024 ], 
    this.R = 3e4, this.P = 80;
}, sjcl.prng.prototype = {
    randomWords: function(a, b) {
        var c, d = [];
        c = this.isReady(b);
        var e;
        if (c === this.l && q(new sjcl.exception.notReady("generator isn't seeded")), c & this.w) {
            c = !(c & this.u), e = [];
            var f, g = 0;
            for (this.N = e[0] = new Date().valueOf() + this.R, f = 0; 16 > f; f++) e.push(0 | 4294967296 * Math.random());
            for (f = 0; f < this.b.length && (e = e.concat(this.b[f].finalize()), g += this.h[f], 
            this.h[f] = 0, !(!c && this.F & 1 << f)); f++) ;
            for (this.F >= 1 << this.b.length && (this.b.push(new sjcl.hash.sha256()), this.h.push(0)), 
            this.c -= g, g > this.i && (this.i = g), this.F++, this.a = sjcl.hash.sha256.hash(this.a.concat(e)), 
            this.A = new sjcl.cipher.aes(this.a), c = 0; 4 > c && (this.e[c] = 0 | this.e[c] + 1, 
            !this.e[c]); c++) ;
        }
        for (c = 0; a > c; c += 4) 0 === (c + 1) % this.Q && A(this), e = B(this), d.push(e[0], e[1], e[2], e[3]);
        return A(this), d.slice(0, a);
    },
    setDefaultParanoia: function(a) {
        this.B = a;
    },
    addEntropy: function(a, b, c) {
        c = c || "user";
        var d, e, f = new Date().valueOf(), g = this.t[c], h = this.isReady(), i = 0;
        switch (d = this.J[c], d === t && (d = this.J[c] = this.T++), g === t && (g = this.t[c] = 0), 
        this.t[c] = (this.t[c] + 1) % this.b.length, typeof a) {
          case "number":
            b === t && (b = 1), this.b[g].update([ d, this.C++, 1, b, f, 1, 0 | a ]);
            break;

          case "object":
            if (c = Object.prototype.toString.call(a), "[object Uint32Array]" === c) {
                for (e = [], c = 0; c < a.length; c++) e.push(a[c]);
                a = e;
            } else for ("[object Array]" !== c && (i = 1), c = 0; c < a.length && !i; c++) "number" != typeof a[c] && (i = 1);
            if (!i) {
                if (b === t) for (c = b = 0; c < a.length; c++) for (e = a[c]; e > 0; ) b++, e >>>= 1;
                this.b[g].update([ d, this.C++, 2, b, f, a.length ].concat(a));
            }
            break;

          case "string":
            b === t && (b = a.length), this.b[g].update([ d, this.C++, 3, b, f, a.length ]), 
            this.b[g].update(a);
            break;

          default:
            i = 1;
        }
        i && q(new sjcl.exception.bug("random: addEntropy only supports number, array of numbers or string")), 
        this.h[g] += b, this.c += b, h === this.l && (this.isReady() !== this.l && C("seeded", Math.max(this.i, this.c)), 
        C("progress", this.getProgress()));
    },
    isReady: function(a) {
        return a = this.H[a !== t ? a : this.B], this.i && this.i >= a ? this.h[0] > this.P && new Date().valueOf() > this.N ? this.w | this.u : this.u : this.c >= a ? this.w | this.l : this.l;
    },
    getProgress: function(a) {
        return a = this.H[a ? a : this.B], this.i >= a ? 1 : this.c > a ? 1 : this.c / a;
    },
    startCollectors: function() {
        this.p || (window.addEventListener ? (window.addEventListener("load", this.r, u), 
        window.addEventListener("mousemove", this.s, u)) : document.attachEvent ? (document.attachEvent("onload", this.r), 
        document.attachEvent("onmousemove", this.s)) : q(new sjcl.exception.bug("can't attach event")), 
        this.p = !0);
    },
    stopCollectors: function() {
        this.p && (window.removeEventListener ? (window.removeEventListener("load", this.r, u), 
        window.removeEventListener("mousemove", this.s, u)) : window.detachEvent && (window.detachEvent("onload", this.r), 
        window.detachEvent("onmousemove", this.s)), this.p = u);
    },
    addEventListener: function(a, b) {
        this.z[a][this.S++] = b;
    },
    removeEventListener: function(a, b) {
        var c, d, e = this.z[a], f = [];
        for (d in e) e.hasOwnProperty(d) && e[d] === b && f.push(d);
        for (c = 0; c < f.length; c++) d = f[c], delete e[d];
    },
    s: function(a) {
        sjcl.random.addEntropy([ a.x || a.clientX || a.offsetX || 0, a.y || a.clientY || a.offsetY || 0 ], 2, "mouse");
    },
    r: function() {
        sjcl.random.addEntropy(new Date().valueOf(), 2, "loadtime");
    }
}, sjcl.random = new sjcl.prng(6);

try {
    var D = new Uint32Array(32);
    crypto.getRandomValues(D), sjcl.random.addEntropy(D, 1024, "crypto['getRandomValues']");
} catch (E) {}

sjcl.json = {
    defaults: {
        v: 1,
        iter: 1e3,
        ks: 128,
        ts: 64,
        mode: "ccm",
        adata: "",
        cipher: "aes"
    },
    encrypt: function(a, b, c, d) {
        c = c || {}, d = d || {};
        var e, f = sjcl.json, g = f.d({
            iv: sjcl.random.randomWords(4, 0)
        }, f.defaults);
        return f.d(g, c), c = g.adata, "string" == typeof g.salt && (g.salt = sjcl.codec.base64.toBits(g.salt)), 
        "string" == typeof g.iv && (g.iv = sjcl.codec.base64.toBits(g.iv)), (!sjcl.mode[g.mode] || !sjcl.cipher[g.cipher] || "string" == typeof a && 100 >= g.iter || 64 !== g.ts && 96 !== g.ts && 128 !== g.ts || 128 !== g.ks && 192 !== g.ks && 256 !== g.ks || 2 > g.iv.length || 4 < g.iv.length) && q(new sjcl.exception.invalid("json encrypt: invalid parameters")), 
        "string" == typeof a ? (e = sjcl.misc.cachedPbkdf2(a, g), a = e.key.slice(0, g.ks / 32), 
        g.salt = e.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.publicKey && (e = a.kem(), 
        g.kemtag = e.tag, a = e.key.slice(0, g.ks / 32)), "string" == typeof b && (b = sjcl.codec.utf8String.toBits(b)), 
        "string" == typeof c && (c = sjcl.codec.utf8String.toBits(c)), e = new sjcl.cipher[g.cipher](a), 
        f.d(d, g), d.key = a, g.ct = sjcl.mode[g.mode].encrypt(e, b, g.iv, c, g.ts), f.encode(g);
    },
    decrypt: function(a, b, c, d) {
        c = c || {}, d = d || {};
        var e = sjcl.json;
        b = e.d(e.d(e.d({}, e.defaults), e.decode(b)), c, !0);
        var f;
        return c = b.adata, "string" == typeof b.salt && (b.salt = sjcl.codec.base64.toBits(b.salt)), 
        "string" == typeof b.iv && (b.iv = sjcl.codec.base64.toBits(b.iv)), (!sjcl.mode[b.mode] || !sjcl.cipher[b.cipher] || "string" == typeof a && 100 >= b.iter || 64 !== b.ts && 96 !== b.ts && 128 !== b.ts || 128 !== b.ks && 192 !== b.ks && 256 !== b.ks || !b.iv || 2 > b.iv.length || 4 < b.iv.length) && q(new sjcl.exception.invalid("json decrypt: invalid parameters")), 
        "string" == typeof a ? (f = sjcl.misc.cachedPbkdf2(a, b), a = f.key.slice(0, b.ks / 32), 
        b.salt = f.salt) : sjcl.ecc && a instanceof sjcl.ecc.elGamal.secretKey && (a = a.unkem(sjcl.codec.base64.toBits(b.kemtag)).slice(0, b.ks / 32)), 
        "string" == typeof c && (c = sjcl.codec.utf8String.toBits(c)), f = new sjcl.cipher[b.cipher](a), 
        c = sjcl.mode[b.mode].decrypt(f, b.ct, b.iv, c, b.ts), e.d(d, b), d.key = a, sjcl.codec.utf8String.fromBits(c);
    },
    encode: function(a) {
        var b, c = "{", d = "";
        for (b in a) if (a.hasOwnProperty(b)) switch (b.match(/^[a-z0-9]+$/i) || q(new sjcl.exception.invalid("json encode: invalid property name")), 
        c += d + '"' + b + '":', d = ",", typeof a[b]) {
          case "number":
          case "boolean":
            c += a[b];
            break;

          case "string":
            c += '"' + escape(a[b]) + '"';
            break;

          case "object":
            c += '"' + sjcl.codec.base64.fromBits(a[b], 0) + '"';
            break;

          default:
            q(new sjcl.exception.bug("json encode: unsupported type"));
        }
        return c + "}";
    },
    decode: function(a) {
        a = a.replace(/\s/g, ""), a.match(/^\{.*\}$/) || q(new sjcl.exception.invalid("json decode: this isn't json!")), 
        a = a.replace(/^\{|\}$/g, "").split(/,/);
        var b, c, d = {};
        for (b = 0; b < a.length; b++) (c = a[b].match(/^(?:(["']?)([a-z][a-z0-9]*)\1):(?:(\d+)|"([a-z0-9+\/%*_.@=\-]*)")$/i)) || q(new sjcl.exception.invalid("json decode: this isn't json!")), 
        d[c[2]] = c[3] ? parseInt(c[3], 10) : c[2].match(/^(ct|salt|iv)$/) ? sjcl.codec.base64.toBits(c[4]) : unescape(c[4]);
        return d;
    },
    d: function(a, b, c) {
        if (a === t && (a = {}), b === t) return a;
        for (var d in b) b.hasOwnProperty(d) && (c && a[d] !== t && a[d] !== b[d] && q(new sjcl.exception.invalid("required parameter overridden")), 
        a[d] = b[d]);
        return a;
    },
    X: function(a, b) {
        var c, d = {};
        for (c in a) a.hasOwnProperty(c) && a[c] !== b[c] && (d[c] = a[c]);
        return d;
    },
    W: function(a, b) {
        var c, d = {};
        for (c = 0; c < b.length; c++) a[b[c]] !== t && (d[b[c]] = a[b[c]]);
        return d;
    }
}, sjcl.encrypt = sjcl.json.encrypt, sjcl.decrypt = sjcl.json.decrypt, sjcl.misc.V = {}, 
sjcl.misc.cachedPbkdf2 = function(a, b) {
    var c, d = sjcl.misc.V;
    return b = b || {}, c = b.iter || 1e3, d = d[a] = d[a] || {}, c = d[c] = d[c] || {
        firstSalt: b.salt && b.salt.length ? b.salt.slice(0) : sjcl.random.randomWords(2, 0)
    }, d = b.salt === t ? c.firstSalt : b.salt, c[d] = c[d] || sjcl.misc.pbkdf2(a, d, b.iter), 
    {
        key: c[d].slice(0),
        salt: d.slice(0)
    };
}, function(a) {
    function b(a, b) {
        var c = .1;
        return a >= b && b * (1 + c) >= a ? b : a;
    }
    var c = {
        ago: "Ago",
        from: "",
        now: "Just Now",
        minute: "Minute",
        minutes: "Minutes",
        hour: "Hour",
        hours: "Hours",
        day: "Day",
        days: "Days",
        week: "Week",
        weeks: "Weeks",
        month: "Month",
        months: "Months",
        year: "Year",
        years: "Years"
    }, d = [ [ 60, c.now ], [ 3600, c.minute, c.minutes, 60 ], [ 86400, c.hour, c.hours, 3600 ], [ 604800, c.day, c.days, 86400 ], [ 2628e3, c.week, c.weeks, 604800 ], [ 31536e3, c.month, c.months, 2628e3 ], [ 1/0, c.year, c.years, 31536e3 ] ];
    a.humaneDate = function(a, e) {
        if (a) {
            var f, g = "string" == typeof a, a = g ? new Date(("" + a).replace(/-/g, "/").replace(/T|(?:\.\d+)?Z/g, " ")) : a, e = e || new Date(), h = (e - a + 6e4 * (e.getTimezoneOffset() - (g ? 0 : a.getTimezoneOffset()))) / 1e3;
            0 > h ? (h = Math.abs(h), f = c.from ? " " + c.from : "") : f = c.ago ? " " + c.ago : "";
            for (var i = 0, j = d[0]; d[i]; j = d[++i]) if (h < j[0]) {
                if (0 === i) return j[1];
                var k = Math.ceil(b(h, j[3]) / j[3]);
                return k + " " + (1 != k ? j[2] : j[1]) + (i > 0 ? f : "");
            }
        }
    }, "undefined" != typeof jQuery && (jQuery.fn.humaneDates = function(a) {
        var b = jQuery.extend({
            lowercase: !1
        }, a);
        return this.each(function() {
            var a = jQuery(this), c = a.attr("datetime") || a.attr("title");
            c = humaneDate(c), c && b.lowercase && (c = c.toLowerCase()), c && a.html() != c && a.html(c);
        });
    });
}(this);

var Path = {
    version: "0.8.4",
    map: function(a) {
        return Path.routes.defined.hasOwnProperty(a) ? Path.routes.defined[a] : new Path.core.route(a);
    },
    root: function(a) {
        Path.routes.root = a;
    },
    rescue: function(a) {
        Path.routes.rescue = a;
    },
    history: {
        initial: {},
        pushState: function(a, b, c) {
            Path.history.supported ? Path.dispatch(c) && history.pushState(a, b, c) : Path.history.fallback && (window.location.hash = "#" + c);
        },
        popState: function() {
            var a = !Path.history.initial.popped && location.href == Path.history.initial.URL;
            Path.history.initial.popped = !0, a || Path.dispatch(document.location.pathname);
        },
        listen: function(a) {
            if (Path.history.supported = !(!window.history || !window.history.pushState), Path.history.fallback = a, 
            Path.history.supported) Path.history.initial.popped = "state" in window.history, 
            Path.history.initial.URL = location.href, window.onpopstate = Path.history.popState; else if (Path.history.fallback) {
                for (route in Path.routes.defined) "#" != route.charAt(0) && (Path.routes.defined["#" + route] = Path.routes.defined[route], 
                Path.routes.defined["#" + route].path = "#" + route);
                Path.listen();
            }
        }
    },
    match: function(a, b) {
        var c, d, e, f, g, h = {}, i = null;
        for (i in Path.routes.defined) if (null !== i && void 0 !== i) for (i = Path.routes.defined[i], 
        c = i.partition(), f = 0; f < c.length; f++) {
            if (d = c[f], g = a, d.search(/:/) > 0) for (e = 0; e < d.split("/").length; e++) e < g.split("/").length && ":" === d.split("/")[e].charAt(0) && (h[d.split("/")[e].replace(/:/, "")] = g.split("/")[e], 
            g = g.replace(g.split("/")[e], d.split("/")[e]));
            if (d === g) return b && (i.params = h), i;
        }
        return null;
    },
    dispatch: function(a) {
        var b, c;
        if (Path.routes.current !== a) {
            if (Path.routes.previous = Path.routes.current, Path.routes.current = a, c = Path.match(a, !0), 
            Path.routes.previous && (b = Path.match(Path.routes.previous), null !== b && null !== b.do_exit && b.do_exit()), 
            null !== c) return c.run(), !0;
            null !== Path.routes.rescue && Path.routes.rescue();
        }
    },
    listen: function() {
        var a = function() {
            Path.dispatch(location.hash);
        };
        "" === location.hash && null !== Path.routes.root && (location.hash = Path.routes.root), 
        "onhashchange" in window && (!document.documentMode || document.documentMode >= 8) ? window.onhashchange = a : setInterval(a, 50), 
        "" !== location.hash && Path.dispatch(location.hash);
    },
    core: {
        route: function(a) {
            this.path = a, this.action = null, this.do_enter = [], this.do_exit = null, this.params = {}, 
            Path.routes.defined[a] = this;
        }
    },
    routes: {
        current: null,
        root: null,
        rescue: null,
        previous: null,
        defined: {}
    }
};

Path.core.route.prototype = {
    to: function(a) {
        return this.action = a, this;
    },
    enter: function(a) {
        return a instanceof Array ? this.do_enter = this.do_enter.concat(a) : this.do_enter.push(a), 
        this;
    },
    exit: function(a) {
        return this.do_exit = a, this;
    },
    partition: function() {
        for (var a, b, c = [], d = [], e = /\(([^}]+?)\)/g; a = e.exec(this.path); ) c.push(a[1]);
        for (d.push(this.path.split("(")[0]), b = 0; b < c.length; b++) d.push(d[d.length - 1] + c[b]);
        return d;
    },
    run: function() {
        var a, b, c = !1;
        if (Path.routes.defined[this.path].hasOwnProperty("do_enter") && Path.routes.defined[this.path].do_enter.length > 0) for (a = 0; a < Path.routes.defined[this.path].do_enter.length; a++) if (b = Path.routes.defined[this.path].do_enter[a](), 
        b === !1) {
            c = !0;
            break;
        }
        c || Path.routes.defined[this.path].action();
    }
};

var saveAs = saveAs || navigator.msSaveOrOpenBlob && navigator.msSaveOrOpenBlob.bind(navigator) || function(a) {
    var b = a.document, c = function() {
        return a.URL || a.webkitURL || a;
    }, d = a.URL || a.webkitURL || a, e = b.createElementNS("http://www.w3.org/1999/xhtml", "a"), f = !a.externalHost && "download" in e, g = function(c) {
        var d = b.createEvent("MouseEvents");
        d.initMouseEvent("click", !0, !1, a, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), c.dispatchEvent(d);
    }, h = a.webkitRequestFileSystem, i = a.requestFileSystem || h || a.mozRequestFileSystem, j = function(b) {
        (a.setImmediate || a.setTimeout)(function() {
            throw b;
        }, 0);
    }, k = "application/octet-stream", l = 0, m = [], n = function() {
        for (var a = m.length; a--; ) {
            var b = m[a];
            "string" == typeof b ? d.revokeObjectURL(b) : b.remove();
        }
        m.length = 0;
    }, o = function(a, b, c) {
        b = [].concat(b);
        for (var d = b.length; d--; ) {
            var e = a["on" + b[d]];
            if ("function" == typeof e) try {
                e.call(a, c || a);
            } catch (f) {
                j(f);
            }
        }
    }, p = function(b, d) {
        var j, n, p, q = this, r = b.type, s = !1, t = function() {
            var a = c().createObjectURL(b);
            return m.push(a), a;
        }, u = function() {
            o(q, "writestart progress write writeend".split(" "));
        }, v = function() {
            (s || !j) && (j = t(b)), n ? n.location.href = j : window.open(j, "_blank"), q.readyState = q.DONE, 
            u();
        }, w = function(a) {
            return function() {
                return q.readyState !== q.DONE ? a.apply(this, arguments) : void 0;
            };
        }, x = {
            create: !0,
            exclusive: !1
        };
        return q.readyState = q.INIT, d || (d = "download"), f ? (j = t(b), e.href = j, 
        e.download = d, g(e), q.readyState = q.DONE, u(), void 0) : (a.chrome && r && r !== k && (p = b.slice || b.webkitSlice, 
        b = p.call(b, 0, b.size, k), s = !0), h && "download" !== d && (d += ".download"), 
        (r === k || h) && (n = a), i ? (l += b.size, i(a.TEMPORARY, l, w(function(a) {
            a.root.getDirectory("saved", x, w(function(a) {
                var c = function() {
                    a.getFile(d, x, w(function(a) {
                        a.createWriter(w(function(c) {
                            c.onwriteend = function(b) {
                                n.location.href = a.toURL(), m.push(a), q.readyState = q.DONE, o(q, "writeend", b);
                            }, c.onerror = function() {
                                var a = c.error;
                                a.code !== a.ABORT_ERR && v();
                            }, "writestart progress write abort".split(" ").forEach(function(a) {
                                c["on" + a] = q["on" + a];
                            }), c.write(b), q.abort = function() {
                                c.abort(), q.readyState = q.DONE;
                            }, q.readyState = q.WRITING;
                        }), v);
                    }), v);
                };
                a.getFile(d, {
                    create: !1
                }, w(function(a) {
                    a.remove(), c();
                }), w(function(a) {
                    a.code === a.NOT_FOUND_ERR ? c() : v();
                }));
            }), v);
        }), v), void 0) : (v(), void 0));
    }, q = p.prototype, r = function(a, b) {
        return new p(a, b);
    };
    return q.abort = function() {
        var a = this;
        a.readyState = a.DONE, o(a, "abort");
    }, q.readyState = q.INIT = 0, q.WRITING = 1, q.DONE = 2, q.error = q.onwritestart = q.onprogress = q.onwrite = q.onabort = q.onerror = q.onwriteend = null, 
    a.addEventListener("unload", n, !1), r;
}(self);

"undefined" != typeof module && (module.exports = saveAs);

var coinpunk = {};

$.ajax("../config.json", {
    async: !1,
    complete: function(a) {
        coinpunk.config = a.responseJSON;
    }
}), coinpunk.Database = function() {
    this.coinpunkCurrencyName = "coinpunkCurrency", this.walletKeyName = "coinpunkWalletKey", 
    this.walletIdName = "coinpunkWalletId", this.storage = sessionStorage, this.local;
}, coinpunk.Database.prototype.setCurrency = function(a) {
    return localStorage.setItem(this.coinpunkCurrencyName, a);
}, coinpunk.Database.prototype.getCurrency = function() {
    return localStorage.getItem(this.coinpunkCurrencyName);
}, coinpunk.Database.prototype.setSuccessMessage = function(a) {
    return localStorage.setItem("successMessage", a);
}, coinpunk.Database.prototype.getSuccessMessage = function() {
    var a = localStorage.getItem("successMessage");
    return localStorage.removeItem("successMessage"), a;
}, coinpunk.Database.prototype.set = function(a, b) {
    this.storage.setItem(this.walletKeyName, a), this.storage.setItem(this.walletIdName, b);
}, coinpunk.Database.prototype.reset = function() {
    this.storage.removeItem(this.walletKeyName), this.storage.removeItem(this.walletIdName);
}, coinpunk.Database.prototype.loggedIn = function() {
    return this.getWalletKey() && this.getWalletId() ? !0 : !1;
}, coinpunk.Database.prototype.getWalletKey = function() {
    return this.storage.getItem(this.walletKeyName);
}, coinpunk.Database.prototype.getWalletId = function() {
    return this.storage.getItem(this.walletIdName);
}, coinpunk.database = new coinpunk.Database(), coinpunk.Wallet = function(a, b) {
    this.network = coinpunk.config.network || "prod", this.walletKey = a, this.walletId = b, 
    this.defaultIterations = 1e3, this.serverKey = void 0, this.transactions = [];
    var c = [];
    this.loadPayloadWithLogin = function(a, b, c) {
        return this.createWalletKey(a, b), this.loadPayload(c), !0;
    }, this.loadPayload = function(a) {
        var b = JSON.parse(sjcl.decrypt(this.walletKey, a));
        return c = b.keyPairs, this.transactions = b.transactions || [], !0;
    }, this.createNewAddress = function(a, b) {
        var d = new Bitcoin.ECKey(), e = {
            key: d.getExportedPrivateKey(this.network),
            publicKey: Bitcoin.convert.bytesToHex(d.getPubKeyHash()),
            address: d.getBitcoinAddress(this.network).toString(),
            isChange: b || !1
        };
        return a && (e.name = a), c.push(e), e.address;
    }, this.getAddressName = function() {
        for (var a = 0; a < c.length; a++) if (c[a].address == c[a].address) return c[a].name;
    }, this.addresses = function() {
        for (var a = [], b = 0; b < c.length; b++) a.push({
            address: c[b].address,
            name: c[b].name,
            isChange: c[b].isChange
        });
        return a;
    }, this.receiveAddressHashes = function() {
        for (var a = [], b = 0; b < c.length; b++) 1 != c[b].isChange && a.push(c[b].address);
        return a;
    }, this.addressHashes = function() {
        for (var a = this.addresses(), b = [], c = 0; c < a.length; c++) b.push(a[c].address);
        return b;
    }, this.createServerKey = function() {
        return this.serverKey = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(this.walletKey, this.walletId, this.defaultIterations)), 
        this.serverKey;
    }, this.createWalletKey = function(a, b) {
        return this.walletKey = sjcl.codec.base64.fromBits(sjcl.misc.pbkdf2(b, a, this.defaultIterations)), 
        this.walletId = a, this.createServerKey(), this.walletKey;
    }, this.encryptPayload = function() {
        var a = {
            keyPairs: c,
            transactions: this.transactions
        };
        return sjcl.encrypt(this.walletKey, JSON.stringify(a));
    }, this.storeCredentials = function() {
        coinpunk.database.set(this.walletKey, this.walletId);
    }, this.setUnspentTxs = function(a) {
        this.unspentTxs = a;
    }, this.unspentBalance = function() {
        for (var a = 0, b = 0; b < this.unspentTxs.length; b++) a += this.unspentTxs[b].amount;
        return a;
    }, this.createSend = function(a, b, d, e) {
        var f = Bitcoin.util.parseValue(a);
        if (f == Bitcoin.BigInteger.ZERO) throw "spend amount must be greater than zero";
        if (!e) throw "change address was not provided";
        var g, h = Bitcoin.util.parseValue(b || "0"), i = Bitcoin.BigInteger.ZERO.add(f).add(h), j = new Bitcoin.Address(d, this.network), k = new Bitcoin.Transaction(), l = [], m = Bitcoin.BigInteger.ZERO;
        for (g = 0; g < this.unspentTxs.length && (l.push(this.unspentTxs[g]), m = m.add(new Bitcoin.BigInteger(this.unspentTxs[g].amountSatoshiString)), 
        !(m.compareTo(i) > -1)); g++) ;
        if (m.compareTo(i) < 0) throw "you do not have enough bitcoins to send this amount";
        for (g = 0; g < l.length; g++) k.addInput({
            hash: l[g].txid
        }, l[g].vout);
        k.addOutput(j, f);
        var n = m.subtract(i);
        n.equals(Bitcoin.BigInteger.ZERO) || k.addOutput(e, n);
        var o = 1;
        for (g = 0; g < l.length; g++) for (var p = new Bitcoin.Script(Bitcoin.convert.hexToBytes(l[g].scriptPubKey)), q = k.hashTransactionForSignature(p, g, o), r = p.simpleOutHash(), s = 0; s < c.length; s++) {
            var t = new Bitcoin.Key(c[s].key);
            if (_.isEqual(t.getPubKeyHash(), r)) {
                var u = t.sign(q);
                u.push(parseInt(o, 10)), k.ins[g].script = Bitcoin.Script.createInputScript(u, t.getPub());
                break;
            }
        }
        this.transactions.push({
            hash: Bitcoin.convert.bytesToHex(k.getHash()),
            address: d,
            amount: Bitcoin.util.formatValue(i),
            fee: Bitcoin.util.formatValue(h),
            created: new Date().getTime()
        });
        var v = Bitcoin.convert.bytesToHex(k.serialize());
        return v;
    }, a && b && this.createServerKey();
}, coinpunk.Controller = function() {}, coinpunk.Controller.prototype.template = function(a, b, c, d) {
    $.get("views/" + b + ".html", function(b) {
        $("#" + a).html(_.template(b, c, {
            variable: "data"
        })), d && d(a);
    });
}, coinpunk.Controller.prototype.friendlyTimeString = function(a) {
    var b = new Date(1e3 * a);
    return b.toLocaleString();
}, coinpunk.Controller.prototype.updateExchangeRates = function(a) {
    coinpunk.pricing.getLatest(function(b, c) {
        $("#balanceExchange").text(" ≈ " + parseFloat(b * $("#balance").text()).toFixed(2) + " " + c), 
        $("#exchangePrice").html("1 BTC ≈ " + b + " " + c + '<br><small><a href="http://bitcoincharts.com" target="_blank">Bitcoin Charts</a></small>'), 
        $("#" + a + " .exchangePrice").remove();
        for (var d = $("#" + a + " .addExchangePrice"), e = 0; e < d.length; e++) $(d[e]).append('<span class="exchangePrice"><small>' + ($(d[e]).text().split(" ")[0] * b).toFixed(2) + " " + c + "</small></span>");
    });
}, coinpunk.Controller.prototype.minimumSendConfirmations = 1, coinpunk.Controller.prototype.minimumStrongSendConfirmations = 6, 
coinpunk.controllers = {}, coinpunk.controllers.accounts = {
    passwordStrength: {
        enabled: !1,
        enable: function() {
            this.enabled !== !0 && (this.enabled = !0, $.strength("#email", "#password", function(a, b, c) {
                $("#progressBar").css("width", c.score + "%");
                var d = c.status.charAt(0).toUpperCase() + c.status.slice(1);
                $("#passwordStrengthStatus").text(d);
            }));
        }
    },
    signin: function() {
        var a = $("#walletId").val(), b = $("#password").val(), c = $("#errors");
        c.addClass("hidden"), c.html(""), coinpunk.wallet = new coinpunk.Wallet(), coinpunk.wallet.createWalletKey(a, b), 
        coinpunk.wallet.encryptPayload(), $.get("/api/wallet", {
            serverKey: coinpunk.wallet.serverKey
        }, function(a) {
            "error" == a.result ? (c.removeClass("hidden"), c.html(a.message)) : (c.addClass("hidden"), 
            coinpunk.wallet.loadPayload(a.wallet), coinpunk.wallet.storeCredentials(), coinpunk.router.route("dashboard"));
        });
    },
    disableSubmitButton: function() {
        var a = $("#createAccountButton");
        a.attr("disabled", "disabled"), a.removeClass("btn-success"), a.text("Creating account, please wait..");
    },
    enableSubmitButton: function() {
        var a = $("#createAccountButton");
        a.removeAttr("disabled"), a.addClass("btn-success"), a.text("Create Account");
    },
    create: function() {
        var a = $("#email").val(), b = $("#password").val(), c = $("#password_confirm").val(), d = [];
        null === /.+@.+\..+/.exec(a) && d.push("Email is not valid."), "" === b && d.push("Password cannot be blank."), 
        b != c && d.push("Passwords do not match.");
        var e = $("#errors");
        if (d.length > 0) {
            e.html("");
            for (var f = 0; f < d.length; f++) e.html(e.html() + d[f] + "<br>");
            $("#errors").removeClass("hidden");
        } else {
            $("#errors").addClass("hidden"), this.disableSubmitButton(), coinpunk.wallet = new coinpunk.Wallet();
            var g = coinpunk.wallet.createNewAddress("Default");
            coinpunk.wallet.createWalletKey(a, b);
            var h = coinpunk.wallet.encryptPayload(), i = this;
            $.ajax({
                type: "POST",
                url: "/api/wallet",
                data: {
                    serverKey: coinpunk.wallet.serverKey,
                    wallet: h,
                    email: a,
                    address: g
                },
                dataType: "json",
                success: function(a) {
                    if ("ok" == a.result) coinpunk.wallet.storeCredentials(), coinpunk.router.route("dashboard"); else if ("exists" == a.result) coinpunk.wallet.loadPayload(a.wallet), 
                    coinpunk.wallet.storeCredentials(), coinpunk.router.route("dashboard"); else {
                        e.html("");
                        for (var b = 0; b < a.messages.length; b++) e.html(e.html() + a.messages[b] + "<br>");
                        $("#errors").removeClass("hidden"), i.enableSubmitButton();
                    }
                }
            });
        }
    }
}, coinpunk.controllers.Dashboard = function() {}, coinpunk.controllers.Dashboard.prototype = new coinpunk.Controller(), 
coinpunk.controllers.Dashboard.prototype.index = function() {
    var a = 0, b = this;
    coinpunk.router.render("view", "dashboard"), $.get("/api/dashboard", {
        serverKey: coinpunk.wallet.serverKey,
        addresses: coinpunk.wallet.addressHashes(),
        receiveAddresses: coinpunk.wallet.receiveAddressHashes()
    }, function(c) {
        $("#balance").text(c.balance);
        var d = b.filterTransactions(c.transactions, "receive");
        b.filterTransactions(c.transactions, "send");
        var e = [];
        for (a = 0; a < coinpunk.wallet.transactions.length; a++) e.push(coinpunk.wallet.transactions[a].hash);
        $.get("/api/tx/details", {
            txHashes: e
        }, function(c) {
            var d = coinpunk.wallet.transactions.reverse();
            for (a = 0; a < d.length; a++) for (var e = 0; e < c.length; e++) d[a].hash == c[e].hash && (d[a].confirmations = c[e].confirmations);
            b.template("sentTransactions", "dashboard/sent", {
                tx: d
            }, function(a) {
                $("#" + a + " [rel='tooltip']").tooltip(), b.updateExchangeRates(a);
            });
        }), b.template("receivedTransactions", "dashboard/received", {
            category: "Received",
            tx: d
        }, function(a) {
            b.updateExchangeRates("receivedTransactions"), $("#" + a + " [rel='tooltip']").tooltip();
        }), b.template("addresses", "dashboard/addresses", {
            addresses: coinpunk.wallet.addresses()
        });
    });
}, coinpunk.controllers.Dashboard.prototype.updateExchangeRates = function(a) {
    coinpunk.pricing.getLatest(function(b, c) {
        $("#balanceExchange").text(" ≈ " + parseFloat(b * $("#balance").text()).toFixed(2) + " " + c), 
        $("#exchangePrice").html("1 BTC ≈ " + b + " " + c + '<br><small><a href="http://bitcoincharts.com" target="_blank">Bitcoin Charts</a></small>'), 
        $("#" + a + " .exchangePrice").remove();
        for (var d = $("#" + a + " .addExchangePrice"), e = 0; e < d.length; e++) $(d[e]).append('<span class="exchangePrice pull-right"><small>' + ($(d[e]).text().split(" ")[0] * b).toFixed(2) + " " + c + "</small></span>");
    });
}, coinpunk.controllers.Dashboard.prototype.filterTransactions = function(a, b) {
    for (var c = [], d = 0; d < a.length; d++) a[d].category == b && c.push(a[d]);
    return c.reverse();
}, coinpunk.controllers.dashboard = new coinpunk.controllers.Dashboard(), coinpunk.controllers.Tx = function() {}, 
coinpunk.controllers.Tx.prototype = new coinpunk.Controller(), coinpunk.controllers.Tx.prototype.details = function(a) {
    $.get("/api/tx/details", {
        txHashes: [ a ]
    }, function(a) {
        console.log(a), coinpunk.router.render("view", "tx/details", {
            tx: a[0]
        }, function(a) {
            $("#" + a + " [rel='tooltip']").tooltip();
        });
    });
}, coinpunk.controllers.Tx.prototype.send = function() {
    var a = this;
    $.get("/api/tx/unspent", {
        addresses: coinpunk.wallet.addressHashes()
    }, function(b) {
        coinpunk.wallet.setUnspentTxs(b.unspentTxs), coinpunk.router.render("view", "tx/send", b, function(b) {
            a.updateExchangeRates(b, !1), $("#" + b + " [rel='tooltip']").tooltip();
        });
    });
}, coinpunk.controllers.Tx.prototype.create = function() {
    var a = this, b = $("#sendButton");
    b.addClass("disabled");
    var c = $("#createSendForm #address").val(), d = $("#createSendForm #amount").val(), e = [], f = $("#errors");
    if (f.addClass("hidden"), f.html(""), "" == c) e.push("You cannot have a blank sending address."); else try {
        new Bitcoin.Address(c, coinpunk.config.network);
    } catch (g) {
        e.push("The provided bitcoin address is not valid.");
    }
    return "" == d || 0 == parseFloat(d) ? e.push("You must have a valid amount to send.") : null === /^[0-9]+$|^[0-9]+\.[0-9]+$|^\.[0-9]+$/.exec(d) && e.push("You must have a valid amount to send."), 
    e.length > 0 ? (this.displayErrors(e, f), b.removeClass("disabled"), void 0) : ($.get("/api/tx/unspent", {
        addresses: coinpunk.wallet.addressHashes()
    }, function(g) {
        if (g.amount < d) return e.push("Cannot spend more bitcoins than you currently have."), 
        a.displayErrors(e, f), b.removeClass("disabled"), void 0;
        var h = coinpunk.wallet.createNewAddress("change", !0), i = coinpunk.wallet.createSend(d, "0", c, h), j = coinpunk.wallet.encryptPayload();
        $.ajax({
            type: "POST",
            url: "/api/wallet",
            data: {
                serverKey: coinpunk.wallet.serverKey,
                wallet: j,
                override: !0,
                address: h
            },
            dataType: "json",
            success: function() {
                $.post("/api/tx/send", {
                    tx: i
                }, function() {
                    coinpunk.database.setSuccessMessage("Sent " + d + " BTC to " + c + "."), coinpunk.router.route("dashboard");
                });
            }
        });
    }), void 0);
}, coinpunk.controllers.Tx.prototype.displayErrors = function(a, b) {
    if (a.length > 0) {
        b.removeClass("hidden");
        for (var c = 0; c < a.length; c++) $("#errors").html($("#errors").html() + a[c] + "<br>");
    } else ;
}, coinpunk.controllers.tx = new coinpunk.controllers.Tx(), coinpunk.router = Path, 
coinpunk.router.render = function(a, b, c, d) {
    $.get("views/header.html", function(a) {
        $("#header").html(_.template(a, c, {
            variable: "data"
        }));
    }), $.get("views/" + b + ".html", function(b) {
        $("#" + a).html(_.template(b, c, {
            variable: "data"
        })), d && d(a);
    });
}, coinpunk.router.route = function(a) {
    window.location.href = "#/" + a;
}, coinpunk.router.initWallet = function() {
    return coinpunk.wallet ? coinpunk.wallet : (coinpunk.wallet = new coinpunk.Wallet(coinpunk.database.getWalletKey(), coinpunk.database.getWalletId()), 
    $.ajax({
        url: "/api/wallet",
        async: !1,
        data: {
            serverKey: coinpunk.wallet.serverKey
        },
        success: function(a) {
            coinpunk.wallet.loadPayload(a.wallet);
        }
    }), void 0);
}, coinpunk.router.requireSignin = function() {
    return coinpunk.database.loggedIn() ? (coinpunk.wallet || coinpunk.router.initWallet(), 
    !0) : (coinpunk.router.route("signin"), !1);
}, coinpunk.router.map("#/backup").to(function() {
    coinpunk.router.initWallet(), coinpunk.router.render("view", "backup");
}), coinpunk.router.map("#/backup/download").to(function() {
    coinpunk.router.initWallet();
    var a = coinpunk.wallet.encryptPayload(), b = new Blob([ a ], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(b, "coinpunk-wallet.txt"), coinpunk.router.route("backup");
}), coinpunk.router.map("#/signup").to(function() {
    coinpunk.router.render("view", "signup");
}), coinpunk.router.map("#/signin").to(function() {
    coinpunk.database.loggedIn() ? coinpunk.router.route("dashboard") : coinpunk.router.render("view", "signin");
}), coinpunk.router.map("#/signout").to(function() {
    return coinpunk.router.requireSignin() ? (coinpunk.wallet = null, coinpunk.database.reset(), 
    coinpunk.router.route("signin"), void 0) : !1;
}), coinpunk.router.map("#/dashboard").to(function() {
    return coinpunk.router.requireSignin() ? (coinpunk.router.initWallet(), coinpunk.controllers.dashboard.index(), 
    void 0) : !1;
}), coinpunk.router.map("#/tx/details/:txid").to(function() {
    return coinpunk.router.requireSignin() ? (coinpunk.controllers.tx.details(this.params.txid), 
    void 0) : !1;
}), coinpunk.router.map("#/tx/send").to(function() {
    return coinpunk.router.requireSignin() ? (coinpunk.router.initWallet(), coinpunk.controllers.tx.send(), 
    void 0) : !1;
}), coinpunk.router.map("#/").to(function() {
    coinpunk.router.route("dashboard");
}), coinpunk.router.root("#/"), coinpunk.router.listen(), coinpunk.pricing = {
    cacheTimeout: 3600,
    pricesApiUrl: "/api/weighted_prices",
    defaultCurrency: "USD",
    getLatest: function(a) {
        var b = this;
        this.getCurrency(), !b.cachedResponse || !b.cachedResponseTime || new Date().getTime() / 1e3 - b.cachedResponseTime > b.cacheTimeout ? $.get(this.pricesApiUrl, function(c) {
            b.cachedResponse = JSON.parse(c), b.cachedResponseTime = new Date().getTime() / 1e3, 
            b.runCallback(a);
        }) : this.runCallback(a);
    },
    getCurrency: function() {
        return coinpunk.database.getCurrency() || this.defaultCurrency;
    },
    runCallback: function(a) {
        var b = this.getCurrency();
        a(this.cachedResponse[b]["24h"], b);
    }
};