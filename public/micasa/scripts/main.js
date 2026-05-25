! function (t) {
  function e(r) {
    if (i[r]) return i[r].exports;
    var s = i[r] = {
      i: r,
      l: !1,
      exports: {}
    };
    return t[r].call(s.exports, s, s.exports, e), s.l = !0, s.exports
  }
  var i = {};
  e.m = t, e.c = i, e.d = function (t, i, r) {
    e.o(t, i) || Object.defineProperty(t, i, {
      configurable: !1,
      enumerable: !0,
      get: r
    })
  }, e.n = function (t) {
    var i = t && t.__esModule ? function () {
      return t.default
    } : function () {
      return t
    };
    return e.d(i, "a", i), i
  }, e.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "/app/themes/micasa/dist/", e(e.s = 8)
}([function (t, e) {
  t.exports = jQuery
}, function (t, e) {
  var i;
  i = function () {
    return this
  }();
  try {
    i = i || Function("return this")() || (0, eval)("this")
  } catch (t) {
    "object" == typeof window && (i = window)
  }
  t.exports = i
}, function (t, e) {
  function i(t) {
    var e = typeof t;
    return null != t && ("object" == e || "function" == e)
  }
  t.exports = i
}, function (module, exports, __webpack_require__) {
  var __WEBPACK_AMD_DEFINE_RESULT__;
  ! function (t, e) {
    void 0 !== (__WEBPACK_AMD_DEFINE_RESULT__ = function () {
      return e(t)
    }.call(exports, __webpack_require__, exports, module)) && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)
  }(window || {}, function (window) {
    function ProjectInterface() {
      return {}
    }

    function roundValues(t) {
      bm_rnd = t ? Math.round : function (t) {
        return t
      }
    }

    function roundTo2Decimals(t) {
      return Math.round(1e4 * t) / 1e4
    }

    function roundTo3Decimals(t) {
      return Math.round(100 * t) / 100
    }

    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = t.style.webkitTransformStyle = t.style.mozTransformStyle = "preserve-3d"
    }

    function styleUnselectableDiv(t) {
      t.style.userSelect = "none", t.style.MozUserSelect = "none", t.style.webkitUserSelect = "none", t.style.oUserSelect = "none"
    }

    function BMEnterFrameEvent(t, e, i, r) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1
    }

    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1
    }

    function BMCompleteLoopEvent(t, e, i, r) {
      this.type = t, this.currentLoop = e, this.totalLoops = i, this.direction = r < 0 ? -1 : 1
    }

    function BMSegmentStartEvent(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i
    }

    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e
    }

    function _addEventListener(t, e) {
      return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e),
        function () {
          this.removeEventListener(t, e)
        }.bind(this)
    }

    function _removeEventListener(t, e) {
      if (e) {
        if (this._cbs[t]) {
          for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
          this._cbs[t].length || (this._cbs[t] = null)
        }
      } else this._cbs[t] = null
    }

    function _triggerEvent(t, e) {
      if (this._cbs[t])
        for (var i = this._cbs[t].length, r = 0; r < i; r++) this._cbs[t][r](e)
    }

    function randomString(t, e) {
      void 0 === e && (e = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");
      var i, r = "";
      for (i = t; i > 0; --i) r += e[Math.round(Math.random() * (e.length - 1))];
      return r
    }

    function HSVtoRGB(t, e, i) {
      var r, s, n, a, o, l, h, p;
      switch (1 === arguments.length && (e = t.s, i = t.v, t = t.h), a = Math.floor(6 * t), o = 6 * t - a, l = i * (1 - e), h = i * (1 - o * e), p = i * (1 - (1 - o) * e), a % 6) {
        case 0:
          r = i, s = p, n = l;
          break;
        case 1:
          r = h, s = i, n = l;
          break;
        case 2:
          r = l, s = i, n = p;
          break;
        case 3:
          r = l, s = h, n = i;
          break;
        case 4:
          r = p, s = l, n = i;
          break;
        case 5:
          r = i, s = l, n = h
      }
      return [r, s, n]
    }

    function RGBtoHSV(t, e, i) {
      1 === arguments.length && (e = t.g, i = t.b, t = t.r);
      var r, s = Math.max(t, e, i),
        n = Math.min(t, e, i),
        a = s - n,
        o = 0 === s ? 0 : a / s,
        l = s / 255;
      switch (s) {
        case n:
          r = 0;
          break;
        case t:
          r = e - i + a * (e < i ? 6 : 0), r /= 6 * a;
          break;
        case e:
          r = i - t + 2 * a, r /= 6 * a;
          break;
        case i:
          r = t - e + 4 * a, r /= 6 * a
      }
      return [r, o, l]
    }

    function addSaturationToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2])
    }

    function addBrightnessToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2])
    }

    function addHueToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2])
    }

    function componentToHex(t) {
      var e = t.toString(16);
      return 1 == e.length ? "0" + e : e
    }

    function fillToRgba(t, e) {
      if (!cachedColors[t]) {
        var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
        cachedColors[t] = parseInt(i[1], 16) + "," + parseInt(i[2], 16) + "," + parseInt(i[3], 16)
      }
      return "rgba(" + cachedColors[t] + "," + e + ")"
    }

    function RenderedFrame(t, e) {
      this.tr = t, this.o = e
    }

    function iterateDynamicProperties(t) {
      var e, i = this.dynamicProperties;
      for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(t)
    }

    function reversePath(t) {
      var e, i, r = [],
        s = [],
        n = [],
        a = {},
        o = 0;
      t.c && (r[0] = t.o[0], s[0] = t.i[0], n[0] = t.v[0], o = 1), i = t.i.length;
      var l = i - 1;
      for (e = o; e < i; e += 1) r.push(t.o[l]), s.push(t.i[l]), n.push(t.v[l]), l -= 1;
      return a.i = r, a.o = s, a.v = n, a
    }

    function Matrix() {}

    function createElement(t, e, i) {
      if (!e) {
        var r = Object.create(t.prototype, i),
          s = {};
        return r && "[object Function]" === s.toString.call(r.init) && r.init(), r
      }
      e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.prototype._parent = t.prototype
    }

    function extendPrototype(t, e) {
      for (var i in t.prototype) t.prototype.hasOwnProperty(i) && (e.prototype[i] = t.prototype[i])
    }

    function bezFunction() {
      function t(t, e, i, r, s, n) {
        var a = t * r + e * s + i * n - s * r - n * t - i * e;
        return a > -1e-4 && a < 1e-4
      }

      function e(e, i, r, s, n, a, o, l, h) {
        if (0 === r && 0 === a && 0 === h) return t(e, i, s, n, o, l);
        var p, c = Math.sqrt(Math.pow(s - e, 2) + Math.pow(n - i, 2) + Math.pow(a - r, 2)),
          d = Math.sqrt(Math.pow(o - e, 2) + Math.pow(l - i, 2) + Math.pow(h - r, 2)),
          u = Math.sqrt(Math.pow(o - s, 2) + Math.pow(l - n, 2) + Math.pow(h - a, 2));
        return (p = c > d ? c > u ? c - d - u : u - d - c : u > d ? u - d - c : d - c - u) > -1e-4 && p < 1e-4
      }

      function i(t) {
        var e, i = t.c,
          r = t.v,
          s = t.o,
          n = t.i,
          a = t._length,
          o = [],
          l = 0;
        for (e = 0; e < a - 1; e += 1) o[e] = h(r[e], r[e + 1], s[e], n[e + 1]), l += o[e].addedLength;
        return i && (o[e] = h(r[e], r[0], s[e], n[0]), l += o[e].addedLength), {
          lengths: o,
          totalLength: l
        }
      }

      function r(t) {
        this.segmentLength = 0, this.points = new Array(t)
      }

      function s(t, e) {
        this.partialLength = t, this.point = e
      }

      function n(t, e) {
        var i = e.segments,
          r = i.length,
          s = bm_floor((r - 1) * t),
          n = t * e.addedLength,
          a = 0;
        if (n == i[s].l) return i[s].p;
        for (var o = i[s].l > n ? -1 : 1, l = !0; l;) i[s].l <= n && i[s + 1].l > n ? (a = (n - i[s].l) / (i[s + 1].l - i[s].l), l = !1) : s += o, (s < 0 || s >= r - 1) && (l = !1);
        return i[s].p + (i[s + 1].p - i[s].p) * a
      }

      function a() {
        this.pt1 = new Array(2), this.pt2 = new Array(2), this.pt3 = new Array(2), this.pt4 = new Array(2)
      }

      function o(t, e, i, r, s, a) {
        var o = n(s, a),
          l = 1 - o;
        return [Math.round(1e3 * (l * l * l * t[0] + (o * l * l + l * o * l + l * l * o) * i[0] + (o * o * l + l * o * o + o * l * o) * r[0] + o * o * o * e[0])) / 1e3, Math.round(1e3 * (l * l * l * t[1] + (o * l * l + l * o * l + l * l * o) * i[1] + (o * o * l + l * o * o + o * l * o) * r[1] + o * o * o * e[1])) / 1e3]
      }

      function l(t, e, i, r, s, o, l) {
        var h = new a;
        s = s < 0 ? 0 : s > 1 ? 1 : s;
        var p = n(s, l);
        o = o > 1 ? 1 : o;
        var c, d = n(o, l),
          u = t.length,
          f = 1 - p,
          m = 1 - d;
        for (c = 0; c < u; c += 1) h.pt1[c] = Math.round(1e3 * (f * f * f * t[c] + (p * f * f + f * p * f + f * f * p) * i[c] + (p * p * f + f * p * p + p * f * p) * r[c] + p * p * p * e[c])) / 1e3, h.pt3[c] = Math.round(1e3 * (f * f * m * t[c] + (p * f * m + f * p * m + f * f * d) * i[c] + (p * p * m + f * p * d + p * f * d) * r[c] + p * p * d * e[c])) / 1e3, h.pt4[c] = Math.round(1e3 * (f * m * m * t[c] + (p * m * m + f * d * m + f * m * d) * i[c] + (p * d * m + f * d * d + p * m * d) * r[c] + p * d * d * e[c])) / 1e3, h.pt2[c] = Math.round(1e3 * (m * m * m * t[c] + (d * m * m + m * d * m + m * m * d) * i[c] + (d * d * m + m * d * d + d * m * d) * r[c] + d * d * d * e[c])) / 1e3;
        return h
      }
      var h = (Math, function () {
          function t(t, e) {
            this.l = t, this.p = e
          }
          return function (e, i, r, s) {
            var n, a, o, l, h, p, c = defaultCurveSegments,
              d = 0,
              u = [],
              f = [],
              m = {
                addedLength: 0,
                segments: []
              };
            for (o = r.length, n = 0; n < c; n += 1) {
              for (h = n / (c - 1), p = 0, a = 0; a < o; a += 1) l = bm_pow(1 - h, 3) * e[a] + 3 * bm_pow(1 - h, 2) * h * r[a] + 3 * (1 - h) * bm_pow(h, 2) * s[a] + bm_pow(h, 3) * i[a], u[a] = l, null !== f[a] && (p += bm_pow(u[a] - f[a], 2)), f[a] = u[a];
              p && (p = bm_sqrt(p), d += p), m.segments.push(new t(d, h))
            }
            return m.addedLength = d, m
          }
        }()),
        p = function () {
          var e = {};
          return function (i) {
            var n = i.s,
              a = i.e,
              o = i.to,
              l = i.ti,
              h = (n.join("_") + "_" + a.join("_") + "_" + o.join("_") + "_" + l.join("_")).replace(/\./g, "p");
            if (e[h]) return void(i.bezierData = e[h]);
            var p, c, d, u, f, m, g, v = defaultCurveSegments,
              y = 0,
              _ = null;
            2 === n.length && (n[0] != a[0] || n[1] != a[1]) && t(n[0], n[1], a[0], a[1], n[0] + o[0], n[1] + o[1]) && t(n[0], n[1], a[0], a[1], a[0] + l[0], a[1] + l[1]) && (v = 2);
            var b = new r(v);
            for (d = o.length, p = 0; p < v; p += 1) {
              for (g = new Array(d), f = p / (v - 1), m = 0, c = 0; c < d; c += 1) u = bm_pow(1 - f, 3) * n[c] + 3 * bm_pow(1 - f, 2) * f * (n[c] + o[c]) + 3 * (1 - f) * bm_pow(f, 2) * (a[c] + l[c]) + bm_pow(f, 3) * a[c], g[c] = u, null !== _ && (m += bm_pow(g[c] - _[c], 2));
              m = bm_sqrt(m), y += m, b.points[p] = new s(m, g), _ = g
            }
            b.segmentLength = y, i.bezierData = b, e[h] = b
          }
        }();
      return {
        getBezierLength: h,
        getSegmentsLength: i,
        getNewSegment: l,
        getPointInSegment: o,
        buildBezierData: p,
        pointOnLine2D: t,
        pointOnLine3D: e
      }
    }

    function dataFunctionManager() {
      function t(s, n, o) {
        var l, h, p, c, d, u, f = s.length;
        for (h = 0; h < f; h += 1)
          if ("ks" in (l = s[h]) && !l.completed) {
            if (l.completed = !0, l.tt && (s[h - 1].td = l.tt), [], -1, l.hasMask) {
              var m = l.masksProperties;
              for (c = m.length, p = 0; p < c; p += 1)
                if (m[p].pt.k.i) r(m[p].pt.k);
                else
                  for (u = m[p].pt.k.length, d = 0; d < u; d += 1) m[p].pt.k[d].s && r(m[p].pt.k[d].s[0]), m[p].pt.k[d].e && r(m[p].pt.k[d].e[0])
            }
            0 === l.ty ? (l.layers = e(l.refId, n), t(l.layers, n, o)) : 4 === l.ty ? i(l.shapes) : 5 == l.ty && a(l, o)
          }
      }

      function e(t, e) {
        for (var i = 0, r = e.length; i < r;) {
          if (e[i].id === t) return e[i].layers.__used ? JSON.parse(JSON.stringify(e[i].layers)) : (e[i].layers.__used = !0, e[i].layers);
          i += 1
        }
      }

      function i(t) {
        var e, s, n, a = t.length;
        for (e = a - 1; e >= 0; e -= 1)
          if ("sh" == t[e].ty) {
            if (t[e].ks.k.i) r(t[e].ks.k);
            else
              for (n = t[e].ks.k.length, s = 0; s < n; s += 1) t[e].ks.k[s].s && r(t[e].ks.k[s].s[0]), t[e].ks.k[s].e && r(t[e].ks.k[s].e[0]);
            !0
          } else "gr" == t[e].ty && i(t[e].it)
      }

      function r(t) {
        var e, i = t.i.length;
        for (e = 0; e < i; e += 1) t.i[e][0] += t.v[e][0], t.i[e][1] += t.v[e][1], t.o[e][0] += t.v[e][0], t.o[e][1] += t.v[e][1]
      }

      function s(t, e) {
        var i = e ? e.split(".") : [100, 100, 100];
        return t[0] > i[0] || !(i[0] > t[0]) && (t[1] > i[1] || !(i[1] > t[1]) && (t[2] > i[2] || !(i[2] > t[2]) && void 0))
      }

      function n(e, i) {
        e.__complete || (h(e), o(e), l(e), p(e), t(e.layers, e.assets, i), e.__complete = !0)
      }

      function a(t, e) {
        0 !== t.t.a.length || "m" in t.t.p || (t.singleShape = !0)
      }
      var o = function () {
          function t(t) {
            var e = t.t.d;
            t.t.d = {
              k: [{
                s: e,
                t: 0
              }]
            }
          }

          function e(e) {
            var i, r = e.length;
            for (i = 0; i < r; i += 1) 5 === e[i].ty && t(e[i])
          }
          var i = [4, 4, 14];
          return function (t) {
            if (s(i, t.v) && (e(t.layers), t.assets)) {
              var r, n = t.assets.length;
              for (r = 0; r < n; r += 1) t.assets[r].layers && e(t.assets[r].layers)
            }
          }
        }(),
        l = function () {
          var t = [4, 7, 99];
          return function (e) {
            if (e.chars && !s(t, e.v)) {
              var i, n, a, o, l, h = e.chars.length;
              for (i = 0; i < h; i += 1)
                if (e.chars[i].data && e.chars[i].data.shapes)
                  for (l = e.chars[i].data.shapes[0].it, a = l.length, n = 0; n < a; n += 1) o = l[n].ks.k, o.__converted || (r(l[n].ks.k), o.__converted = !0)
            }
          }
        }(),
        h = function () {
          function t(e) {
            var i, r, s, n = e.length;
            for (i = 0; i < n; i += 1)
              if ("gr" === e[i].ty) t(e[i].it);
              else if ("fl" === e[i].ty || "st" === e[i].ty)
              if (e[i].c.k && e[i].c.k[0].i)
                for (s = e[i].c.k.length, r = 0; r < s; r += 1) e[i].c.k[r].s && (e[i].c.k[r].s[0] /= 255, e[i].c.k[r].s[1] /= 255, e[i].c.k[r].s[2] /= 255, e[i].c.k[r].s[3] /= 255), e[i].c.k[r].e && (e[i].c.k[r].e[0] /= 255, e[i].c.k[r].e[1] /= 255, e[i].c.k[r].e[2] /= 255, e[i].c.k[r].e[3] /= 255);
              else e[i].c.k[0] /= 255, e[i].c.k[1] /= 255, e[i].c.k[2] /= 255, e[i].c.k[3] /= 255
          }

          function e(e) {
            var i, r = e.length;
            for (i = 0; i < r; i += 1) 4 === e[i].ty && t(e[i].shapes)
          }
          var i = [4, 1, 9];
          return function (t) {
            if (s(i, t.v) && (e(t.layers), t.assets)) {
              var r, n = t.assets.length;
              for (r = 0; r < n; r += 1) t.assets[r].layers && e(t.assets[r].layers)
            }
          }
        }(),
        p = function () {
          function t(e) {
            var i, r, s, n = e.length;
            for (i = n - 1; i >= 0; i -= 1)
              if ("sh" == e[i].ty) {
                if (e[i].ks.k.i) e[i].ks.k.c = e[i].closed;
                else
                  for (s = e[i].ks.k.length, r = 0; r < s; r += 1) e[i].ks.k[r].s && (e[i].ks.k[r].s[0].c = e[i].closed), e[i].ks.k[r].e && (e[i].ks.k[r].e[0].c = e[i].closed);
                !0
              } else "gr" == e[i].ty && t(e[i].it)
          }

          function e(e) {
            var i, r, s, n, a, o, l = e.length;
            for (r = 0; r < l; r += 1) {
              if (i = e[r], i.hasMask) {
                var h = i.masksProperties;
                for (n = h.length, s = 0; s < n; s += 1)
                  if (h[s].pt.k.i) h[s].pt.k.c = h[s].cl;
                  else
                    for (o = h[s].pt.k.length, a = 0; a < o; a += 1) h[s].pt.k[a].s && (h[s].pt.k[a].s[0].c = h[s].cl), h[s].pt.k[a].e && (h[s].pt.k[a].e[0].c = h[s].cl)
              }
              4 === i.ty && t(i.shapes)
            }
          }
          var i = [4, 4, 18];
          return function (t) {
            if (s(i, t.v) && (e(t.layers), t.assets)) {
              var r, n = t.assets.length;
              for (r = 0; r < n; r += 1) t.assets[r].layers && e(t.assets[r].layers)
            }
          }
        }(),
        c = {};
      return c.completeData = n, c
    }

    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = Array.apply(null, {
        length: this._maxLength
      }), this.o = Array.apply(null, {
        length: this._maxLength
      }), this.i = Array.apply(null, {
        length: this._maxLength
      })
    }

    function ShapeModifier() {}

    function TrimModifier() {}

    function RoundCornersModifier() {}

    function RepeaterModifier() {}

    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = Array.apply(null, {
        length: this._maxLength
      })
    }

    function TextAnimatorProperty(t, e, i) {
      this.mdf = !1, this._firstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._dynamicProperties = [], this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = Array.apply(null, {
        length: this._textData.a.length
      }), this._pathData = {}, this._moreOptions = {
        alignment: {}
      }, this.renderedLetters = [], this.lettersChangedFlag = !1
    }

    function LetterProps(t, e, i, r, s, n) {
      this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = s, this.p = n, this.mdf = {
        o: !0,
        sw: !!e,
        sc: !!i,
        fc: !!r,
        m: !0,
        p: !0
      }
    }

    function TextProperty(t, e, i) {
      this._frameId = -99999, this.pv = "", this.v = "", this.kf = !1, this.firstFrame = !0, this.mdf = !0, this.data = e, this.elem = t, this.keysIndex = -1, this.currentData = {
        ascent: 0,
        boxWidth: [0, 0],
        f: "",
        fStyle: "",
        fWeight: "",
        fc: "",
        j: "",
        justifyOffset: "",
        l: [],
        lh: 0,
        lineWidths: [],
        ls: "",
        of: "",
        s: "",
        sc: "",
        sw: 0,
        t: 0,
        tr: 0,
        fillColorAnim: !1,
        strokeColorAnim: !1,
        strokeWidthAnim: !1,
        yOffset: 0,
        __complete: !1
      }, this.searchProperty() ? i.push(this) : this.getValue(!0)
    }

    function BaseRenderer() {}

    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
        frameNum: -1
      }, this.renderConfig = {
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        progressiveLoad: e && e.progressiveLoad || !1,
        hideOnTransparent: !e || !1 !== e.hideOnTransparent,
        viewBoxOnly: e && e.viewBoxOnly || !1,
        className: e && e.className || ""
      }, this.globalData.renderConfig = this.renderConfig, this.elements = [], this.pendingElements = [], this.destroyed = !1
    }

    function MaskElement(t, e, i) {
      this.dynamicProperties = [], this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties, this.viewData = Array.apply(null, {
        length: this.masksProperties.length
      }), this.maskElement = null, this.firstFrame = !0;
      var r, s, n, a, o, l, h, p, c = this.globalData.defs,
        d = this.masksProperties.length,
        u = this.masksProperties,
        f = 0,
        m = [],
        g = randomString(10),
        v = "clipPath",
        y = "clip-path";
      for (r = 0; r < d; r++)
        if (("a" !== u[r].mode && "n" !== u[r].mode || u[r].inv || 100 !== u[r].o.k) && (v = "mask", y = "mask"), "s" != u[r].mode && "i" != u[r].mode || 0 != f ? o = null : (o = document.createElementNS(svgNS, "rect"), o.setAttribute("fill", "#ffffff"), o.setAttribute("width", this.element.comp.data.w), o.setAttribute("height", this.element.comp.data.h), m.push(o)), s = document.createElementNS(svgNS, "path"), "n" != u[r].mode) {
          if (f += 1, "s" == u[r].mode ? s.setAttribute("fill", "#000000") : s.setAttribute("fill", "#ffffff"), s.setAttribute("clip-rule", "nonzero"), 0 !== u[r].x.k) {
            v = "mask", y = "mask", p = PropertyFactory.getProp(this.element, u[r].x, 0, null, this.dynamicProperties);
            var _ = "fi_" + randomString(10);
            l = document.createElementNS(svgNS, "filter"), l.setAttribute("id", _), h = document.createElementNS(svgNS, "feMorphology"), h.setAttribute("operator", "dilate"), h.setAttribute("in", "SourceGraphic"), h.setAttribute("radius", "0"), l.appendChild(h), c.appendChild(l), "s" == u[r].mode ? s.setAttribute("stroke", "#000000") : s.setAttribute("stroke", "#ffffff")
          } else h = null, p = null;
          if (this.storedData[r] = {
              elem: s,
              x: p,
              expan: h,
              lastPath: "",
              lastOperator: "",
              filterId: _,
              lastRadius: 0
            }, "i" == u[r].mode) {
            a = m.length;
            var b = document.createElementNS(svgNS, "g");
            for (n = 0; n < a; n += 1) b.appendChild(m[n]);
            var T = document.createElementNS(svgNS, "mask");
            T.setAttribute("mask-type", "alpha"), T.setAttribute("id", g + "_" + f), T.appendChild(s), c.appendChild(T), b.setAttribute("mask", "url(" + locationHref + "#" + g + "_" + f + ")"), m.length = 0, m.push(b)
          } else m.push(s);
          u[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = {
            elem: s,
            lastPath: "",
            op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.dynamicProperties),
            prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3, this.dynamicProperties, null)
          }, o && (this.viewData[r].invRect = o), this.viewData[r].prop.k || this.drawPath(u[r], this.viewData[r].prop.v, this.viewData[r])
        } else this.viewData[r] = {
          op: PropertyFactory.getProp(this.element, u[r].o, 0, .01, this.dynamicProperties),
          prop: ShapePropertyFactory.getShapeProp(this.element, u[r], 3, this.dynamicProperties, null),
          elem: s
        }, c.appendChild(s);
      for (this.maskElement = document.createElementNS(svgNS, v), d = m.length, r = 0; r < d; r += 1) this.maskElement.appendChild(m[r]);
      this.maskElement.setAttribute("id", g), f > 0 && this.element.maskedElement.setAttribute(y, "url(" + locationHref + "#" + g + ")"), c.appendChild(this.maskElement)
    }

    function BaseElement() {}

    function SVGBaseElement(t, e, i, r, s) {
      this.globalData = i, this.comp = r, this.data = t, this.matteElement = null, this.transformedElement = null, this.isTransparent = !1, this.parentContainer = e, this.layerId = s ? s.layerId : "ly_" + randomString(10), this.placeholder = s, this._sizeChanged = !1, this.init()
    }

    function IShapeElement(t, e, i, r, s) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, i, r, s)
    }

    function ITextElement(t, e, i, r) {}

    function SVGTextElement(t, e, i, r, s) {
      this.textSpans = [], this.renderType = "svg", this._parent.constructor.call(this, t, e, i, r, s)
    }

    function SVGTintFilter(t, e) {
      this.filterManager = e;
      var i = document.createElementNS(svgNS, "feColorMatrix");
      if (i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i), i = document.createElementNS(svgNS, "feColorMatrix"), i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), i.setAttribute("result", "f2"), t.appendChild(i), this.matrixFilter = i, 100 !== e.effectElements[2].p.v || e.effectElements[2].p.k) {
        var r = document.createElementNS(svgNS, "feMerge");
        t.appendChild(r);
        var s;
        s = document.createElementNS(svgNS, "feMergeNode"), s.setAttribute("in", "SourceGraphic"), r.appendChild(s), s = document.createElementNS(svgNS, "feMergeNode"), s.setAttribute("in", "f2"), r.appendChild(s)
      }
    }

    function SVGFillFilter(t, e) {
      this.filterManager = e;
      var i = document.createElementNS(svgNS, "feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "sRGB"), i.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), t.appendChild(i), this.matrixFilter = i
    }

    function SVGStrokeEffect(t, e) {
      this.initialized = !1, this.filterManager = e, this.elem = t, this.paths = []
    }

    function SVGTritoneFilter(t, e) {
      this.filterManager = e;
      var i = document.createElementNS(svgNS, "feColorMatrix");
      i.setAttribute("type", "matrix"), i.setAttribute("color-interpolation-filters", "linearRGB"), i.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), i.setAttribute("result", "f1"), t.appendChild(i);
      var r = document.createElementNS(svgNS, "feComponentTransfer");
      r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.matrixFilter = r;
      var s = document.createElementNS(svgNS, "feFuncR");
      s.setAttribute("type", "table"), r.appendChild(s), this.feFuncR = s;
      var n = document.createElementNS(svgNS, "feFuncG");
      n.setAttribute("type", "table"), r.appendChild(n), this.feFuncG = n;
      var a = document.createElementNS(svgNS, "feFuncB");
      a.setAttribute("type", "table"), r.appendChild(a), this.feFuncB = a
    }

    function SVGProLevelsFilter(t, e) {
      this.filterManager = e;
      var i = this.filterManager.effectElements,
        r = document.createElementNS(svgNS, "feComponentTransfer");
      (i[9].p.k || 0 !== i[9].p.v || i[10].p.k || 1 !== i[10].p.v || i[11].p.k || 1 !== i[11].p.v || i[12].p.k || 0 !== i[12].p.v || i[13].p.k || 1 !== i[13].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", r)), (i[16].p.k || 0 !== i[16].p.v || i[17].p.k || 1 !== i[17].p.v || i[18].p.k || 1 !== i[18].p.v || i[19].p.k || 0 !== i[19].p.v || i[20].p.k || 1 !== i[20].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", r)), (i[23].p.k || 0 !== i[23].p.v || i[24].p.k || 1 !== i[24].p.v || i[25].p.k || 1 !== i[25].p.v || i[26].p.k || 0 !== i[26].p.v || i[27].p.k || 1 !== i[27].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", r)), (i[30].p.k || 0 !== i[30].p.v || i[31].p.k || 1 !== i[31].p.v || i[32].p.k || 1 !== i[32].p.v || i[33].p.k || 0 !== i[33].p.v || i[34].p.k || 1 !== i[34].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", r)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), r = document.createElementNS(svgNS, "feComponentTransfer")), (i[2].p.k || 0 !== i[2].p.v || i[3].p.k || 1 !== i[3].p.v || i[4].p.k || 1 !== i[4].p.v || i[5].p.k || 0 !== i[5].p.v || i[6].p.k || 1 !== i[6].p.v) && (r.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(r), this.feFuncRComposed = this.createFeFunc("feFuncR", r), this.feFuncGComposed = this.createFeFunc("feFuncG", r), this.feFuncBComposed = this.createFeFunc("feFuncB", r))
    }

    function SVGDropShadowEffect(t, e) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "400%"), t.setAttribute("height", "400%"), this.filterManager = e;
      var i = document.createElementNS(svgNS, "feGaussianBlur");
      i.setAttribute("in", "SourceAlpha"), i.setAttribute("result", "drop_shadow_1"), i.setAttribute("stdDeviation", "0"), this.feGaussianBlur = i, t.appendChild(i);
      var r = document.createElementNS(svgNS, "feOffset");
      r.setAttribute("dx", "25"), r.setAttribute("dy", "0"), r.setAttribute("in", "drop_shadow_1"), r.setAttribute("result", "drop_shadow_2"), this.feOffset = r, t.appendChild(r);
      var s = document.createElementNS(svgNS, "feFlood");
      s.setAttribute("flood-color", "#00ff00"), s.setAttribute("flood-opacity", "1"), s.setAttribute("result", "drop_shadow_3"), this.feFlood = s, t.appendChild(s);
      var n = document.createElementNS(svgNS, "feComposite");
      n.setAttribute("in", "drop_shadow_3"), n.setAttribute("in2", "drop_shadow_2"), n.setAttribute("operator", "in"), n.setAttribute("result", "drop_shadow_4"), t.appendChild(n);
      var a = document.createElementNS(svgNS, "feMerge");
      t.appendChild(a);
      var o;
      o = document.createElementNS(svgNS, "feMergeNode"), a.appendChild(o), o = document.createElementNS(svgNS, "feMergeNode"), o.setAttribute("in", "SourceGraphic"), this.feMergeNode = o, this.feMerge = a, this.originalNodeAdded = !1, a.appendChild(o)
    }

    function SVGMatte3Effect(t, e, i) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = document.createElementNS(svgNS, "g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement
    }

    function SVGEffects(t) {
      var e, i = t.data.ef.length,
        r = randomString(10),
        s = filtersFactory.createFilter(r),
        n = 0;
      this.filters = [];
      var a;
      for (e = 0; e < i; e += 1) 20 === t.data.ef[e].ty ? (n += 1, a = new SVGTintFilter(s, t.effects.effectElements[e]), this.filters.push(a)) : 21 === t.data.ef[e].ty ? (n += 1, a = new SVGFillFilter(s, t.effects.effectElements[e]), this.filters.push(a)) : 22 === t.data.ef[e].ty ? (a = new SVGStrokeEffect(t, t.effects.effectElements[e]), this.filters.push(a)) : 23 === t.data.ef[e].ty ? (n += 1, a = new SVGTritoneFilter(s, t.effects.effectElements[e]), this.filters.push(a)) : 24 === t.data.ef[e].ty ? (n += 1, a = new SVGProLevelsFilter(s, t.effects.effectElements[e]), this.filters.push(a)) : 25 === t.data.ef[e].ty ? (n += 1, a = new SVGDropShadowEffect(s, t.effects.effectElements[e]), this.filters.push(a)) : 28 === t.data.ef[e].ty && (a = new SVGMatte3Effect(s, t.effects.effectElements[e], t), this.filters.push(a));
      n && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + locationHref + "#" + r + ")"))
    }

    function ICompElement(t, e, i, r, s) {
      this._parent.constructor.call(this, t, e, i, r, s), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? Array.apply(null, {
        length: this.layers.length
      }) : [], this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties)), this.data.xt ? (this.layerElement = document.createElementNS(svgNS, "g"), this.buildAllItems()) : i.progressiveLoad || this.buildAllItems()
    }

    function IImageElement(t, e, i, r, s) {
      this.assetData = i.getAssetData(t.refId), this._parent.constructor.call(this, t, e, i, r, s)
    }

    function ISolidElement(t, e, i, r, s) {
      this._parent.constructor.call(this, t, e, i, r, s)
    }

    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = {
        clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
        context: e && e.context || null,
        progressiveLoad: e && e.progressiveLoad || !1,
        preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet",
        className: e && e.className || ""
      }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
        frameNum: -1
      }, this.contextData = {
        saved: Array.apply(null, {
          length: 15
        }),
        savedOp: Array.apply(null, {
          length: 15
        }),
        cArrPos: 0,
        cTr: new Matrix,
        cO: 1
      };
      var i;
      for (i = 0; i < 15; i += 1) this.contextData.saved[i] = Array.apply(null, {
        length: 16
      });
      this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1
    }

    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.globalData = {
        frameNum: -1
      }, this.renderConfig = {
        className: e && e.className || ""
      }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0
    }

    function CVBaseElement(t, e, i) {
      this.globalData = i, this.data = t, this.comp = e, this.canvasContext = i.canvasContext, this.init()
    }

    function CVCompElement(t, e, i) {
      this._parent.constructor.call(this, t, e, i);
      var r = {};
      for (var s in i) i.hasOwnProperty(s) && (r[s] = i[s]);
      r.renderer = this, r.compHeight = this.data.h, r.compWidth = this.data.w, this.renderConfig = {
        clearCanvas: !0
      }, this.contextData = {
        saved: Array.apply(null, {
          length: 15
        }),
        savedOp: Array.apply(null, {
          length: 15
        }),
        cArrPos: 0,
        cTr: new Matrix,
        cO: 1
      }, this.completeLayers = !1;
      var n;
      for (n = 0; n < 15; n += 1) this.contextData.saved[n] = Array.apply(null, {
        length: 16
      });
      this.transformMat = new Matrix, this.parentGlobalData = this.globalData;
      var a = document.createElement("canvas");
      r.canvasContext = a.getContext("2d"), this.canvasContext = r.canvasContext, a.width = this.data.w, a.height = this.data.h, this.canvas = a, this.globalData = r, this.layers = t.layers, this.pendingElements = [], this.elements = Array.apply(null, {
        length: this.layers.length
      }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties)), !this.data.xt && i.progressiveLoad || this.buildAllItems()
    }

    function CVImageElement(t, e, i) {
      this.assetData = i.getAssetData(t.refId), this._parent.constructor.call(this, t, e, i), this.globalData.addPendingElement()
    }

    function CVMaskElement(t, e) {
      this.data = t, this.element = e, this.dynamicProperties = [], this.masksProperties = this.data.masksProperties, this.viewData = Array.apply(null, {
        length: this.masksProperties.length
      });
      var i, r = this.masksProperties.length;
      for (i = 0; i < r; i++) this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3, this.dynamicProperties, null)
    }

    function CVShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, i)
    }

    function CVSolidElement(t, e, i) {
      this._parent.constructor.call(this, t, e, i)
    }

    function CVTextElement(t, e, i) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
        fill: "rgba(0,0,0,0)",
        stroke: "rgba(0,0,0,0)",
        sWidth: 0,
        fValue: ""
      }, this._parent.constructor.call(this, t, e, i)
    }

    function HBaseElement(t, e, i, r, s) {
      this.globalData = i, this.comp = r, this.data = t, this.matteElement = null, this.parentContainer = e, this.layerId = s ? s.layerId : "ly_" + randomString(10), this.placeholder = s, this.init()
    }

    function HSolidElement(t, e, i, r, s) {
      this._parent.constructor.call(this, t, e, i, r, s)
    }

    function HCompElement(t, e, i, r, s) {
      this._parent.constructor.call(this, t, e, i, r, s), this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = Array.apply(null, {
        length: this.layers.length
      }), this.data.tm && (this.tm = PropertyFactory.getProp(this, this.data.tm, 0, i.frameRate, this.dynamicProperties)), this.data.hasMask && (this.supports3d = !1), this.data.xt && (this.layerElement = document.createElement("div")), this.buildAllItems()
    }

    function HShapeElement(t, e, i, r, s) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this._parent.constructor.call(this, t, e, i, r, s), this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }
    }

    function HTextElement(t, e, i, r, s) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = {
        x: 999999,
        y: -999999,
        h: 0,
        w: 0
      }, this.renderType = "svg", this.isMasked = !1, this._parent.constructor.call(this, t, e, i, r, s)
    }

    function HImageElement(t, e, i, r, s) {
      this.assetData = i.getAssetData(t.refId), this._parent.constructor.call(this, t, e, i, r, s)
    }

    function HCameraElement(t, e, i, r, s) {
      this._parent.constructor.call(this, t, e, i, r, s);
      var n = PropertyFactory.getProp;
      if (this.pe = n(this, t.pe, 0, 0, this.dynamicProperties), t.ks.p.s ? (this.px = n(this, t.ks.p.x, 1, 0, this.dynamicProperties), this.py = n(this, t.ks.p.y, 1, 0, this.dynamicProperties), this.pz = n(this, t.ks.p.z, 1, 0, this.dynamicProperties)) : this.p = n(this, t.ks.p, 1, 0, this.dynamicProperties), t.ks.a && (this.a = n(this, t.ks.a, 1, 0, this.dynamicProperties)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var a, o = t.ks.or.k.length;
        for (a = 0; a < o; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null
      }
      this.or = n(this, t.ks.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0, this.rx = n(this, t.ks.rx, 0, degToRads, this.dynamicProperties), this.ry = n(this, t.ks.ry, 0, degToRads, this.dynamicProperties), this.rz = n(this, t.ks.rz, 0, degToRads, this.dynamicProperties), this.mat = new Matrix
    }

    function SliderEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function AngleEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function ColorEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
    }

    function PointEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i)
    }

    function LayerIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function MaskIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function CheckboxEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i)
    }

    function NoValueEffect() {
      this.p = {}
    }

    function EffectsManager(t, e, i) {
      var r = t.ef;
      this.effectElements = [];
      var s, n, a = r.length;
      for (s = 0; s < a; s++) n = new GroupEffect(r[s], e, i), this.effectElements.push(n)
    }

    function GroupEffect(t, e, i) {
      this.dynamicProperties = [], this.init(t, e, this.dynamicProperties), this.dynamicProperties.length && i.push(this)
    }

    function setLocationHref(t) {
      locationHref = t
    }

    function play(t) {
      animationManager.play(t)
    }

    function pause(t) {
      animationManager.pause(t)
    }

    function togglePause(t) {
      animationManager.togglePause(t)
    }

    function setSpeed(t, e) {
      animationManager.setSpeed(t, e)
    }

    function setDirection(t, e) {
      animationManager.setDirection(t, e)
    }

    function stop(t) {
      animationManager.stop(t)
    }

    function moveFrame(t) {
      animationManager.moveFrame(t)
    }

    function searchAnimations() {
      !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
    }

    function registerAnimation(t) {
      return animationManager.registerAnimation(t)
    }

    function resize() {
      animationManager.resize()
    }

    function start() {
      animationManager.start()
    }

    function goToAndStop(t, e, i) {
      animationManager.goToAndStop(t, e, i)
    }

    function setSubframeRendering(t) {
      subframeEnabled = t
    }

    function loadAnimation(t) {
      return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t)
    }

    function destroy(t) {
      return animationManager.destroy(t)
    }

    function setQuality(t) {
      if ("string" == typeof t) switch (t) {
        case "high":
          defaultCurveSegments = 200;
          break;
        case "medium":
          defaultCurveSegments = 50;
          break;
        case "low":
          defaultCurveSegments = 10
      } else !isNaN(t) && t > 1 && (defaultCurveSegments = t);
      roundValues(!(defaultCurveSegments >= 50))
    }

    function inBrowser() {
      return "undefined" != typeof navigator
    }

    function installPlugin(t, e) {
      "expressions" === t && (expressionsPlugin = e)
    }

    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix
      }
    }

    function checkReady() {
      "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
    }

    function getQueryVariable(t) {
      for (var e = queryString.split("&"), i = 0; i < e.length; i++) {
        var r = e[i].split("=");
        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1])
      }
    }
    var svgNS = "http://www.w3.org/2000/svg",
      locationHref = "",
      subframeEnabled = !0,
      expressionsPlugin, isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
      cachedColors = {},
      bm_rounder = Math.round,
      bm_rnd, bm_pow = Math.pow,
      bm_sqrt = Math.sqrt,
      bm_abs = Math.abs,
      bm_floor = Math.floor,
      bm_max = Math.max,
      bm_min = Math.min,
      blitter = 10,
      BMMath = {};
    ! function () {
      var t, e = Object.getOwnPropertyNames(Math),
        i = e.length;
      for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]]
    }(), BMMath.random = Math.random, BMMath.abs = function (t) {
      if ("object" == typeof t && t.length) {
        var e, i = Array.apply(null, {
            length: t.length
          }),
          r = t.length;
        for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
        return i
      }
      return Math.abs(t)
    };
    var defaultCurveSegments = 150,
      degToRads = Math.PI / 180,
      roundCorner = .5519;
    roundValues(!1);
    var rgbToHex = function () {
        var t, e, i = [];
        for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = 1 == e.length ? "0" + e : e;
        return function (t, e, r) {
          return t < 0 && (t = 0), e < 0 && (e = 0), r < 0 && (r = 0), "#" + i[t] + i[e] + i[r]
        }
      }(),
      fillColorToString = function () {
        var t = [];
        return function (e, i) {
          return void 0 !== i && (e[3] = i), t[e[0]] || (t[e[0]] = {}), t[e[0]][e[1]] || (t[e[0]][e[1]] = {}), t[e[0]][e[1]][e[2]] || (t[e[0]][e[1]][e[2]] = {}), t[e[0]][e[1]][e[2]][e[3]] || (t[e[0]][e[1]][e[2]][e[3]] = "rgba(" + e.join(",") + ")"), t[e[0]][e[1]][e[2]][e[3]]
        }
      }(),
      Matrix = function () {
        function t() {
          return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
        }

        function e(t) {
          if (0 === t) return this;
          var e = Math.cos(t),
            i = Math.sin(t);
          return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function i(t) {
          if (0 === t) return this;
          var e = Math.cos(t),
            i = Math.sin(t);
          return this._t(1, 0, 0, 0, 0, e, -i, 0, 0, i, e, 0, 0, 0, 0, 1)
        }

        function r(t) {
          if (0 === t) return this;
          var e = Math.cos(t),
            i = Math.sin(t);
          return this._t(e, 0, i, 0, 0, 1, 0, 0, -i, 0, e, 0, 0, 0, 0, 1)
        }

        function s(t) {
          if (0 === t) return this;
          var e = Math.cos(t),
            i = Math.sin(t);
          return this._t(e, -i, 0, 0, i, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function n(t, e) {
          return this._t(1, e, t, 1, 0, 0)
        }

        function a(t, e) {
          return this.shear(Math.tan(t), Math.tan(e))
        }

        function o(t, e) {
          var i = Math.cos(e),
            r = Math.sin(e);
          return this._t(i, r, 0, 0, -r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, Math.tan(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -r, 0, 0, r, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
        }

        function l(t, e, i) {
          return i = isNaN(i) ? 1 : i, 1 == t && 1 == e && 1 == i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1)
        }

        function h(t, e, i, r, s, n, a, o, l, h, p, c, d, u, f, m) {
          return this.props[0] = t, this.props[1] = e, this.props[2] = i, this.props[3] = r, this.props[4] = s, this.props[5] = n, this.props[6] = a, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = p, this.props[11] = c, this.props[12] = d, this.props[13] = u, this.props[14] = f, this.props[15] = m, this
        }

        function p(t, e, i) {
          return i = i || 0, 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this
        }

        function c(t, e, i, r, s, n, a, o, l, h, p, c, d, u, f, m) {
          if (1 === t && 0 === e && 0 === i && 0 === r && 0 === s && 1 === n && 0 === a && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c) return 0 === d && 0 === u && 0 === f || (this.props[12] = this.props[12] * t + this.props[13] * s + this.props[14] * l + this.props[15] * d, this.props[13] = this.props[12] * e + this.props[13] * n + this.props[14] * h + this.props[15] * u, this.props[14] = this.props[12] * i + this.props[13] * a + this.props[14] * p + this.props[15] * f, this.props[15] = this.props[12] * r + this.props[13] * o + this.props[14] * c + this.props[15] * m), this._identityCalculated = !1, this;
          var g = this.props[0],
            v = this.props[1],
            y = this.props[2],
            _ = this.props[3],
            b = this.props[4],
            T = this.props[5],
            E = this.props[6],
            w = this.props[7],
            x = this.props[8],
            S = this.props[9],
            C = this.props[10],
            P = this.props[11],
            A = this.props[12],
            k = this.props[13],
            D = this.props[14],
            M = this.props[15];
          return this.props[0] = g * t + v * s + y * l + _ * d, this.props[1] = g * e + v * n + y * h + _ * u, this.props[2] = g * i + v * a + y * p + _ * f, this.props[3] = g * r + v * o + y * c + _ * m, this.props[4] = b * t + T * s + E * l + w * d, this.props[5] = b * e + T * n + E * h + w * u, this.props[6] = b * i + T * a + E * p + w * f, this.props[7] = b * r + T * o + E * c + w * m, this.props[8] = x * t + S * s + C * l + P * d, this.props[9] = x * e + S * n + C * h + P * u, this.props[10] = x * i + S * a + C * p + P * f, this.props[11] = x * r + S * o + C * c + P * m, this.props[12] = A * t + k * s + D * l + M * d, this.props[13] = A * e + k * n + D * h + M * u, this.props[14] = A * i + k * a + D * p + M * f, this.props[15] = A * r + k * o + D * c + M * m, this._identityCalculated = !1, this
        }

        function d() {
          return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
        }

        function u(t) {
          var e;
          for (e = 0; e < 16; e += 1) t.props[e] = this.props[e]
        }

        function f(t) {
          var e;
          for (e = 0; e < 16; e += 1) this.props[e] = t[e]
        }

        function m(t, e, i) {
          return {
            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
          }
        }

        function g(t, e, i) {
          return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12]
        }

        function v(t, e, i) {
          return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13]
        }

        function y(t, e, i) {
          return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]
        }

        function _(t) {
          var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            i = this.props[5] / e,
            r = -this.props[1] / e,
            s = -this.props[4] / e,
            n = this.props[0] / e,
            a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
            o = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e;
          return [t[0] * i + t[1] * s + a, t[0] * r + t[1] * n + o, 0]
        }

        function b(t) {
          var e, i = t.length,
            r = [];
          for (e = 0; e < i; e += 1) r[e] = _(t[e]);
          return r
        }

        function T(t, e, i, r) {
          if (r && 2 === r) {
            var s = point_pool.newPoint();
            return s[0] = t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], s[1] = t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], s
          }
          return [t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12], t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13], t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14]]
        }

        function E(t, e) {
          return this.isIdentity() ? t + "," + e : bm_rnd(t * this.props[0] + e * this.props[4] + this.props[12]) + "," + bm_rnd(t * this.props[1] + e * this.props[5] + this.props[13])
        }

        function w() {
          return [this.props[0], this.props[1], this.props[2], this.props[3], this.props[4], this.props[5], this.props[6], this.props[7], this.props[8], this.props[9], this.props[10], this.props[11], this.props[12], this.props[13], this.props[14], this.props[15]]
        }

        function x() {
          return isSafari ? "matrix3d(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[2]) + "," + roundTo2Decimals(this.props[3]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[6]) + "," + roundTo2Decimals(this.props[7]) + "," + roundTo2Decimals(this.props[8]) + "," + roundTo2Decimals(this.props[9]) + "," + roundTo2Decimals(this.props[10]) + "," + roundTo2Decimals(this.props[11]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + "," + roundTo2Decimals(this.props[14]) + "," + roundTo2Decimals(this.props[15]) + ")" : (this.cssParts[1] = this.props.join(","), this.cssParts.join(""))
        }

        function S() {
          return "matrix(" + roundTo2Decimals(this.props[0]) + "," + roundTo2Decimals(this.props[1]) + "," + roundTo2Decimals(this.props[4]) + "," + roundTo2Decimals(this.props[5]) + "," + roundTo2Decimals(this.props[12]) + "," + roundTo2Decimals(this.props[13]) + ")"
        }

        function C() {
          return "" + this.toArray()
        }
        return function () {
          this.reset = t, this.rotate = e, this.rotateX = i, this.rotateY = r, this.rotateZ = s, this.skew = a, this.skewFromAxis = o, this.shear = n, this.scale = l, this.setTransform = h, this.translate = p, this.transform = c, this.applyToPoint = m, this.applyToX = g, this.applyToY = v, this.applyToZ = y, this.applyToPointArray = T, this.applyToPointStringified = E, this.toArray = w, this.toCSS = x, this.to2dCSS = S, this.toString = C, this.clone = u, this.cloneFromProps = f, this.inversePoints = b, this.inversePoint = _, this._t = this.transform, this.isIdentity = d, this._identity = !0, this._identityCalculated = !1, this.props = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], this.cssParts = ["matrix3d(", "", ")"]
        }
      }();
    ! function (t, e) {
      function i(i, h, p) {
        var v = [];
        h = 1 == h ? {
          entropy: !0
        } : h || {};
        var y = a(n(h.entropy ? [i, l(t)] : null == i ? o() : i, 3), v),
          _ = new r(v),
          b = function () {
            for (var t = _.g(d), e = f, i = 0; t < m;) t = (t + i) * c, e *= c, i = _.g(1);
            for (; t >= g;) t /= 2, e /= 2, i >>>= 1;
            return (t + i) / e
          };
        return b.int32 = function () {
          return 0 | _.g(4)
        }, b.quick = function () {
          return _.g(4) / 4294967296
        }, b.double = b, a(l(_.S), t), (h.pass || p || function (t, i, r, n) {
          return n && (n.S && s(n, _), t.state = function () {
            return s(_, {})
          }), r ? (e[u] = t, i) : t
        })(b, y, "global" in h ? h.global : this == e, h.state)
      }

      function r(t) {
        var e, i = t.length,
          r = this,
          s = 0,
          n = r.i = r.j = 0,
          a = r.S = [];
        for (i || (t = [i++]); s < c;) a[s] = s++;
        for (s = 0; s < c; s++) a[s] = a[n = v & n + t[s % i] + (e = a[s])], a[n] = e;
        (r.g = function (t) {
          for (var e, i = 0, s = r.i, n = r.j, a = r.S; t--;) e = a[s = v & s + 1], i = i * c + a[v & (a[s] = a[n = v & n + e]) + (a[n] = e)];
          return r.i = s, r.j = n, i
        })(c)
      }

      function s(t, e) {
        return e.i = t.i, e.j = t.j, e.S = t.S.slice(), e
      }

      function n(t, e) {
        var i, r = [],
          s = typeof t;
        if (e && "object" == s)
          for (i in t) try {
            r.push(n(t[i], e - 1))
          } catch (t) {}
        return r.length ? r : "string" == s ? t : t + "\0"
      }

      function a(t, e) {
        for (var i, r = t + "", s = 0; s < r.length;) e[v & s] = v & (i ^= 19 * e[v & s]) + r.charCodeAt(s++);
        return l(e)
      }

      function o() {
        try {
          if (h) return l(h.randomBytes(c));
          var e = new Uint8Array(c);
          return (p.crypto || p.msCrypto).getRandomValues(e), l(e)
        } catch (e) {
          var i = p.navigator,
            r = i && i.plugins;
          return [+new Date, p, r, p.screen, l(t)]
        }
      }

      function l(t) {
        return String.fromCharCode.apply(0, t)
      }
      var h, p = this,
        c = 256,
        d = 6,
        u = "random",
        f = e.pow(c, d),
        m = e.pow(2, 52),
        g = 2 * m,
        v = c - 1;
      e["seed" + u] = i, a(e.random(), t)
    }([], BMMath);
    var BezierFactory = function () {
      function t(t, e, i, r, s) {
        var n = s || ("bez_" + t + "_" + e + "_" + i + "_" + r).replace(/\./g, "p");
        if (p[n]) return p[n];
        var a = new l([t, e, i, r]);
        return p[n] = a, a
      }

      function e(t, e) {
        return 1 - 3 * e + 3 * t
      }

      function i(t, e) {
        return 3 * e - 6 * t
      }

      function r(t) {
        return 3 * t
      }

      function s(t, s, n) {
        return ((e(s, n) * t + i(s, n)) * t + r(s)) * t
      }

      function n(t, s, n) {
        return 3 * e(s, n) * t * t + 2 * i(s, n) * t + r(s)
      }

      function a(t, e, i, r, n) {
        var a, o, l = 0;
        do {
          o = e + (i - e) / 2, a = s(o, r, n) - t, a > 0 ? i = o : e = o
        } while (Math.abs(a) > d && ++l < u);
        return o
      }

      function o(t, e, i, r) {
        for (var a = 0; a < c; ++a) {
          var o = n(e, i, r);
          if (0 === o) return e;
          e -= (s(e, i, r) - t) / o
        }
        return e
      }

      function l(t) {
        this._p = t, this._mSampleValues = g ? new Float32Array(f) : new Array(f), this._precomputed = !1, this.get = this.get.bind(this)
      }
      var h = {};
      h.getBezierEasing = t;
      var p = {},
        c = 4,
        d = 1e-7,
        u = 10,
        f = 11,
        m = 1 / (f - 1),
        g = "function" == typeof Float32Array;
      return l.prototype = {
        get: function (t) {
          var e = this._p[0],
            i = this._p[1],
            r = this._p[2],
            n = this._p[3];
          return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : s(this._getTForX(t), i, n)
        },
        _precompute: function () {
          var t = this._p[0],
            e = this._p[1],
            i = this._p[2],
            r = this._p[3];
          this._precomputed = !0, t === e && i === r || this._calcSampleValues()
        },
        _calcSampleValues: function () {
          for (var t = this._p[0], e = this._p[2], i = 0; i < f; ++i) this._mSampleValues[i] = s(i * m, t, e)
        },
        _getTForX: function (t) {
          for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, s = 0, l = 1, h = f - 1; l !== h && r[l] <= t; ++l) s += m;
          --l;
          var p = (t - r[l]) / (r[l + 1] - r[l]),
            c = s + p * m,
            d = n(c, e, i);
          return d >= .001 ? o(t, c, e, i) : 0 === d ? c : a(t, s, s + m, e, i)
        }
      }, h
    }();
    ! function () {
      for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i) window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame || (window.requestAnimationFrame = function (e, i) {
        var r = (new Date).getTime(),
          s = Math.max(0, 16 - (r - t)),
          n = setTimeout(function () {
            e(r + s)
          }, s);
        return t = r + s, n
      }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
      })
    }();
    var bez = bezFunction(),
      dataManager = dataFunctionManager(),
      FontManager = function () {
        function t(t, e) {
          var i = document.createElement("span");
          i.style.fontFamily = e;
          var r = document.createElement("span");
          r.innerHTML = "giItT1WQy@!-/#", i.style.position = "absolute", i.style.left = "-10000px", i.style.top = "-10000px", i.style.fontSize = "300px", i.style.fontVariant = "normal", i.style.fontStyle = "normal", i.style.fontWeight = "normal", i.style.letterSpacing = "0", i.appendChild(r), document.body.appendChild(i);
          var s = r.offsetWidth;
          return r.style.fontFamily = t + ", " + e, {
            node: r,
            w: s,
            parent: i
          }
        }

        function e() {
          var t, i, r, s = this.fonts.length,
            n = s;
          for (t = 0; t < s; t += 1)
            if (this.fonts[t].loaded) n -= 1;
            else if ("t" === this.fonts[t].fOrigin || 2 === this.fonts[t].origin) {
            if (window.Typekit && window.Typekit.load && 0 === this.typekitLoaded) {
              this.typekitLoaded = 1;
              try {
                window.Typekit.load({
                  async: !0,
                  active: function () {
                    this.typekitLoaded = 2
                  }.bind(this)
                })
              } catch (t) {}
            }
            2 === this.typekitLoaded && (this.fonts[t].loaded = !0)
          } else "n" === this.fonts[t].fOrigin || 0 === this.fonts[t].origin ? this.fonts[t].loaded = !0 : (i = this.fonts[t].monoCase.node, r = this.fonts[t].monoCase.w, i.offsetWidth !== r ? (n -= 1, this.fonts[t].loaded = !0) : (i = this.fonts[t].sansCase.node, r = this.fonts[t].sansCase.w, i.offsetWidth !== r && (n -= 1, this.fonts[t].loaded = !0)), this.fonts[t].loaded && (this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent), this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));
          0 !== n && Date.now() - this.initTime < l ? setTimeout(e.bind(this), 20) : setTimeout(function () {
            this.loaded = !0
          }.bind(this), 0)
        }

        function i(t, e) {
          var i = document.createElementNS(svgNS, "text");
          i.style.fontSize = "100px", i.style.fontFamily = e.fFamily, i.textContent = "1", e.fClass ? (i.style.fontFamily = "inherit", i.className = e.fClass) : i.style.fontFamily = e.fFamily, t.appendChild(i);
          var r = document.createElement("canvas").getContext("2d");
          return r.font = "100px " + e.fFamily, r
        }

        function r(r, s) {
          if (!r) return void(this.loaded = !0);
          if (this.chars) return this.loaded = !0, void(this.fonts = r.list);
          var n, a = r.list,
            o = a.length;
          for (n = 0; n < o; n += 1) {
            if (a[n].loaded = !1, a[n].monoCase = t(a[n].fFamily, "monospace"), a[n].sansCase = t(a[n].fFamily, "sans-serif"), a[n].fPath) {
              if ("p" === a[n].fOrigin || 3 === a[n].origin) {
                var l = document.createElement("style");
                l.type = "text/css", l.innerHTML = "@font-face {font-family: " + a[n].fFamily + "; font-style: normal; src: url('" + a[n].fPath + "');}", s.appendChild(l)
              } else if ("g" === a[n].fOrigin || 1 === a[n].origin) {
                var h = document.createElement("link");
                h.type = "text/css", h.rel = "stylesheet", h.href = a[n].fPath, s.appendChild(h)
              } else if ("t" === a[n].fOrigin || 2 === a[n].origin) {
                var p = document.createElement("script");
                p.setAttribute("src", a[n].fPath), s.appendChild(p)
              }
            } else a[n].loaded = !0;
            a[n].helper = i(s, a[n]), this.fonts.push(a[n])
          }
          e.bind(this)()
        }

        function s(t) {
          if (t) {
            this.chars || (this.chars = []);
            var e, i, r, s = t.length,
              n = this.chars.length;
            for (e = 0; e < s; e += 1) {
              for (i = 0, r = !1; i < n;) this.chars[i].style === t[e].style && this.chars[i].fFamily === t[e].fFamily && this.chars[i].ch === t[e].ch && (r = !0), i += 1;
              r || (this.chars.push(t[e]), n += 1)
            }
          }
        }

        function n(t, e, i) {
          for (var r = 0, s = this.chars.length; r < s;) {
            if (this.chars[r].ch === t && this.chars[r].style === e && this.chars[r].fFamily === i) return this.chars[r];
            r += 1
          }
        }

        function a(t, e, i) {
          return this.getFontByName(e).helper.measureText(t).width * i / 100
        }

        function o(t) {
          for (var e = 0, i = this.fonts.length; e < i;) {
            if (this.fonts[e].fName === t) return this.fonts[e];
            e += 1
          }
          return "sans-serif"
        }
        var l = 5e3,
          h = function () {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.loaded = !1, this.initTime = Date.now()
          };
        return h.prototype.addChars = s, h.prototype.addFonts = r, h.prototype.getCharData = n, h.prototype.getFontByName = o, h.prototype.measureText = a, h
      }(),
      PropertyFactory = function () {
        function t(t, e, i, r) {
          var s, n = this.offsetTime;
          i.constructor === Array && (s = Array.apply(null, {
            length: i.length
          }));
          for (var a, o, l = e, h = this.keyframes.length - 1, p = !0; p;) {
            if (a = this.keyframes[l], o = this.keyframes[l + 1], l == h - 1 && t >= o.t - n) {
              a.h && (a = o), e = 0;
              break
            }
            if (o.t - n > t) {
              e = l;
              break
            }
            l < h - 1 ? l += 1 : (e = 0, p = !1)
          }
          var c, d, u, f, m, g;
          if (a.to) {
            a.bezierData || bez.buildBezierData(a);
            var v = a.bezierData;
            if (t >= o.t - n || t < a.t - n) {
              var y = t >= o.t - n ? v.points.length - 1 : 0;
              for (d = v.points[y].point.length, c = 0; c < d; c += 1) s[c] = v.points[y].point[c];
              r._lastBezierData = null
            } else {
              a.__fnct ? g = a.__fnct : (g = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, a.__fnct = g), u = g((t - (a.t - n)) / (o.t - n - (a.t - n)));
              var _, b = v.segmentLength * u,
                T = r.lastFrame < t && r._lastBezierData === v ? r._lastAddedLength : 0;
              for (m = r.lastFrame < t && r._lastBezierData === v ? r._lastPoint : 0, p = !0, f = v.points.length; p;) {
                if (T += v.points[m].partialLength, 0 === b || 0 === u || m == v.points.length - 1) {
                  for (d = v.points[m].point.length, c = 0; c < d; c += 1) s[c] = v.points[m].point[c];
                  break
                }
                if (b >= T && b < T + v.points[m + 1].partialLength) {
                  for (_ = (b - T) / v.points[m + 1].partialLength, d = v.points[m].point.length, c = 0; c < d; c += 1) s[c] = v.points[m].point[c] + (v.points[m + 1].point[c] - v.points[m].point[c]) * _;
                  break
                }
                m < f - 1 ? m += 1 : p = !1
              }
              r._lastPoint = m, r._lastAddedLength = T - v.points[m].partialLength, r._lastBezierData = v
            }
          } else {
            var E, w, x, S, C;
            for (h = a.s.length, l = 0; l < h; l += 1) {
              if (1 !== a.h && (t >= o.t - n ? u = 1 : t < a.t - n ? u = 0 : (a.o.x.constructor === Array ? (a.__fnct || (a.__fnct = []), a.__fnct[l] ? g = a.__fnct[l] : (E = a.o.x[l] || a.o.x[0], w = a.o.y[l] || a.o.y[0], x = a.i.x[l] || a.i.x[0], S = a.i.y[l] || a.i.y[0], g = BezierFactory.getBezierEasing(E, w, x, S).get, a.__fnct[l] = g)) : a.__fnct ? g = a.__fnct : (E = a.o.x, w = a.o.y, x = a.i.x, S = a.i.y, g = BezierFactory.getBezierEasing(E, w, x, S).get, a.__fnct = g), u = g((t - (a.t - n)) / (o.t - n - (a.t - n))))), this.sh && 1 !== a.h) {
                var P = a.s[l],
                  A = a.e[l];
                P - A < -180 ? P += 360 : P - A > 180 && (P -= 360), C = P + (A - P) * u
              } else C = 1 === a.h ? a.s[l] : a.s[l] + (a.e[l] - a.s[l]) * u;
              1 === h ? s = C : s[l] = C
            }
          }
          return {
            value: s,
            iterationIndex: e
          }
        }

        function e() {
          if (this.elem.globalData.frameId !== this.frameId) {
            this.mdf = !1;
            var t = this.comp.renderedFrame - this.offsetTime,
              e = this.keyframes[0].t - this.offsetTime,
              i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (!(t === this._caching.lastFrame || this._caching.lastFrame !== p && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
              var r = this._caching.lastFrame < t ? this._caching.lastIndex : 0,
                s = this.interpolateValue(t, r, this.pv, this._caching);
              if (this._caching.lastIndex = s.iterationIndex, this.pv.constructor === Array)
                for (r = 0; r < this.v.length;) this.pv[r] = s.value[r], this.v[r] = this.mult ? this.pv[r] * this.mult : this.pv[r], this.lastPValue[r] !== this.pv[r] && (this.mdf = !0, this.lastPValue[r] = this.pv[r]), r += 1;
              else this.pv = s.value, this.v = this.mult ? this.pv * this.mult : this.pv, this.lastPValue != this.pv && (this.mdf = !0, this.lastPValue = this.pv)
            }
            this._caching.lastFrame = t, this.frameId = this.elem.globalData.frameId
          }
        }

        function i() {}

        function r(t, e, r) {
          this.mult = r, this.v = r ? e.k * r : e.k, this.pv = e.k, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.getValue = i
        }

        function s(t, e, r) {
          this.mult = r, this.data = e, this.mdf = !1, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1, this.v = Array.apply(null, {
            length: e.k.length
          }), this.pv = Array.apply(null, {
            length: e.k.length
          }), this.lastValue = Array.apply(null, {
            length: e.k.length
          });
          var s = Array.apply(null, {
            length: e.k.length
          });
          this.vel = s.map(function () {
            return 0
          });
          var n, a = e.k.length;
          for (n = 0; n < a; n += 1) this.v[n] = r ? e.k[n] * r : e.k[n], this.pv[n] = e.k[n];
          this.getValue = i
        }

        function n(i, r, s) {
          this.keyframes = r.k, this.offsetTime = i.data.st, this.lastValue = -99999, this.lastPValue = -99999, this.frameId = -1, this._caching = {
            lastFrame: p,
            lastIndex: 0
          }, this.k = !0, this.kf = !0, this.data = r, this.mult = s, this.elem = i, this.comp = i.comp, this.v = s ? r.k[0].s[0] * s : r.k[0].s[0], this.pv = r.k[0].s[0], this.getValue = e, this.interpolateValue = t
        }

        function a(i, r, s) {
          var n, a, o, l, h, c = r.k.length;
          for (n = 0; n < c - 1; n += 1) r.k[n].to && r.k[n].s && r.k[n].e && (a = r.k[n].s, o = r.k[n].e, l = r.k[n].to, h = r.k[n].ti, (2 === a.length && (a[0] !== o[0] || a[1] !== o[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], a[0] + l[0], a[1] + l[1]) && bez.pointOnLine2D(a[0], a[1], o[0], o[1], o[0] + h[0], o[1] + h[1]) || 3 === a.length && (a[0] !== o[0] || a[1] !== o[1] || a[2] !== o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], a[0] + l[0], a[1] + l[1], a[2] + l[2]) && bez.pointOnLine3D(a[0], a[1], a[2], o[0], o[1], o[2], o[0] + h[0], o[1] + h[1], o[2] + h[2])) && (r.k[n].to = null, r.k[n].ti = null));
          this.keyframes = r.k, this.offsetTime = i.data.st, this.k = !0, this.kf = !0, this.mult = s, this.elem = i, this.comp = i.comp, this._caching = {
            lastFrame: p,
            lastIndex: 0
          }, this.getValue = e, this.interpolateValue = t, this.frameId = -1, this.v = Array.apply(null, {
            length: r.k[0].s.length
          }), this.pv = Array.apply(null, {
            length: r.k[0].s.length
          }), this.lastValue = Array.apply(null, {
            length: r.k[0].s.length
          }), this.lastPValue = Array.apply(null, {
            length: r.k[0].s.length
          })
        }

        function o(t, e, i, o, l) {
          var h;
          if (2 === i) h = new c(t, e, l);
          else if (0 === e.a) h = 0 === i ? new r(t, e, o) : new s(t, e, o);
          else if (1 === e.a) h = 0 === i ? new n(t, e, o) : new a(t, e, o);
          else if (e.k.length)
            if ("number" == typeof e.k[0]) h = new s(t, e, o);
            else switch (i) {
              case 0:
                h = new n(t, e, o);
                break;
              case 1:
                h = new a(t, e, o)
            } else h = new r(t, e, o);
          return h.k && l.push(h), h
        }

        function l(t, e, i, r) {
          return new u(t, e, i, r)
        }

        function h(t, e, i) {
          return new f(t, e, i)
        }
        var p = -999999,
          c = function () {
            function t() {
              return this.p ? ExpressionValue(this.p) : [this.px.v, this.py.v, this.pz ? this.pz.v : 0]
            }

            function e() {
              return ExpressionValue(this.px)
            }

            function i() {
              return ExpressionValue(this.py)
            }

            function r() {
              return ExpressionValue(this.a)
            }

            function s() {
              return ExpressionValue(this.or)
            }

            function n() {
              return this.r ? ExpressionValue(this.r, 1 / degToRads) : ExpressionValue(this.rz, 1 / degToRads)
            }

            function a() {
              return ExpressionValue(this.s, 100)
            }

            function o() {
              return ExpressionValue(this.o, 100)
            }

            function l() {
              return ExpressionValue(this.sk)
            }

            function h() {
              return ExpressionValue(this.sa)
            }

            function p(t) {
              var e, i = this.dynamicProperties.length;
              for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
              this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            }

            function c() {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.mdf = !1;
                var t, e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                if (this.mdf) {
                  if (this.v.reset(), this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented && this.p.keyframes && this.p.getValueAtTime) {
                    var i, r;
                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime(this.p.keyframes[0].t / this.elem.globalData.frameRate, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / this.elem.globalData.frameRate, 0), r = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .01) / this.elem.globalData.frameRate, 0)) : (i = this.p.pv, r = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / this.elem.globalData.frameRate, this.p.offsetTime)), this.v.rotate(-Math.atan2(i[1] - r[1], i[0] - r[0]))
                  }
                  this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            }

            function d() {
              this.inverted = !0, this.iv = new Matrix, this.k || (this.data.p.s ? this.iv.translate(this.px.v, this.py.v, -this.pz.v) : this.iv.translate(this.p.v[0], this.p.v[1], -this.p.v[2]), this.r ? this.iv.rotate(-this.r.v) : this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.s && this.iv.scale(this.s.v[0], this.s.v[1], 1), this.a && this.iv.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]))
            }

            function u() {}
            return function (f, m, g) {
              this.elem = f, this.frameId = -1, this.type = "transform", this.dynamicProperties = [], this.mdf = !1, this.data = m, this.getValue = c, this.applyToMatrix = p, this.setInverted = d, this.autoOrient = u, this.v = new Matrix, m.p.s ? (this.px = PropertyFactory.getProp(f, m.p.x, 0, 0, this.dynamicProperties), this.py = PropertyFactory.getProp(f, m.p.y, 0, 0, this.dynamicProperties), m.p.z && (this.pz = PropertyFactory.getProp(f, m.p.z, 0, 0, this.dynamicProperties))) : this.p = PropertyFactory.getProp(f, m.p, 1, 0, this.dynamicProperties), m.r ? this.r = PropertyFactory.getProp(f, m.r, 0, degToRads, this.dynamicProperties) : m.rx && (this.rx = PropertyFactory.getProp(f, m.rx, 0, degToRads, this.dynamicProperties), this.ry = PropertyFactory.getProp(f, m.ry, 0, degToRads, this.dynamicProperties), this.rz = PropertyFactory.getProp(f, m.rz, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(f, m.or, 1, degToRads, this.dynamicProperties), this.or.sh = !0), m.sk && (this.sk = PropertyFactory.getProp(f, m.sk, 0, degToRads, this.dynamicProperties), this.sa = PropertyFactory.getProp(f, m.sa, 0, degToRads, this.dynamicProperties)), m.a && (this.a = PropertyFactory.getProp(f, m.a, 1, 0, this.dynamicProperties)), m.s && (this.s = PropertyFactory.getProp(f, m.s, 1, .01, this.dynamicProperties)), m.o ? this.o = PropertyFactory.getProp(f, m.o, 0, .01, this.dynamicProperties) : this.o = {
                mdf: !1,
                v: 1
              }, this.dynamicProperties.length ? g.push(this) : (this.a && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r ? this.v.rotate(-this.r.v) : this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? m.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])), Object.defineProperty(this, "position", {
                get: t
              }), Object.defineProperty(this, "xPosition", {
                get: e
              }), Object.defineProperty(this, "yPosition", {
                get: i
              }), Object.defineProperty(this, "orientation", {
                get: s
              }), Object.defineProperty(this, "anchorPoint", {
                get: r
              }), Object.defineProperty(this, "rotation", {
                get: n
              }), Object.defineProperty(this, "scale", {
                get: a
              }), Object.defineProperty(this, "opacity", {
                get: o
              }), Object.defineProperty(this, "skew", {
                get: l
              }), Object.defineProperty(this, "skewAxis", {
                get: h
              })
            }
          }(),
          d = function () {
            function t(t) {
              if (this.prop.getValue(), this.cmdf = !1, this.omdf = !1, this.prop.mdf || t) {
                var e, i, r, s = 4 * this.data.p;
                for (e = 0; e < s; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this.cmdf = !0);
                if (this.o.length)
                  for (s = this.prop.v.length, e = 4 * this.data.p; e < s; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this.omdf = !0)
              }
            }

            function e(e, i, r) {
              this.prop = o(e, i.k, 1, null, []), this.data = i, this.k = this.prop.k, this.c = Array.apply(null, {
                length: 4 * i.p
              });
              var s = i.k.k[0].s ? i.k.k[0].s.length - 4 * i.p : i.k.k.length - 4 * i.p;
              this.o = Array.apply(null, {
                length: s
              }), this.cmdf = !1, this.omdf = !1, this.getValue = t, this.prop.k && r.push(this), this.getValue(!0)
            }
            return function (t, i, r) {
              return new e(t, i, r)
            }
          }(),
          u = function () {
            function t(t) {
              var e = 0,
                i = this.dataProps.length;
              if (this.elem.globalData.frameId !== this.frameId || t) {
                for (this.mdf = !1, this.frameId = this.elem.globalData.frameId; e < i;) {
                  if (this.dataProps[e].p.mdf) {
                    this.mdf = !0;
                    break
                  }
                  e += 1
                }
                if (this.mdf || t)
                  for ("svg" === this.renderer && (this.dasharray = ""), e = 0; e < i; e += 1) "o" != this.dataProps[e].n ? "svg" === this.renderer ? this.dasharray += " " + this.dataProps[e].p.v : this.dasharray[e] = this.dataProps[e].p.v : this.dashoffset = this.dataProps[e].p.v
              }
            }
            return function (e, i, r, s) {
              this.elem = e, this.frameId = -1, this.dataProps = new Array(i.length), this.renderer = r, this.mdf = !1, this.k = !1, "svg" === this.renderer ? this.dasharray = "" : this.dasharray = new Array(i.length - 1), this.dashoffset = 0;
              var n, a, o = i.length;
              for (n = 0; n < o; n += 1) a = PropertyFactory.getProp(e, i[n].v, 0, 0, s), this.k = !!a.k || this.k, this.dataProps[n] = {
                n: i[n].n,
                p: a
              };
              this.getValue = t, this.k ? s.push(this) : this.getValue(!0)
            }
          }(),
          f = function () {
            function t(t) {
              if (this.mdf = t || !1, this.dynamicProperties.length) {
                var e, i = this.dynamicProperties.length;
                for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
              }
              var r = this.elem.textProperty.currentData ? this.elem.textProperty.currentData.l.length : 0;
              t && 2 === this.data.r && (this.e.v = r);
              var s = 2 === this.data.r ? 1 : 100 / r,
                n = this.o.v / s,
                a = this.s.v / s + n,
                o = this.e.v / s + n;
              if (a > o) {
                var l = a;
                a = o, o = l
              }
              this.finalS = a, this.finalE = o
            }

            function e(t) {
              var e = BezierFactory.getBezierEasing(this.ne.v / 100, 0, 1 - this.xe.v / 100, 1).get,
                n = 0,
                a = this.finalS,
                o = this.finalE,
                l = this.data.sh;
              if (2 == l) n = o === a ? t >= o ? 1 : 0 : i(0, r(.5 / (o - a) + (t - a) / (o - a), 1)), n = e(n);
              else if (3 == l) n = o === a ? t >= o ? 0 : 1 : 1 - i(0, r(.5 / (o - a) + (t - a) / (o - a), 1)), n = e(n);
              else if (4 == l) o === a ? n = 0 : (n = i(0, r(.5 / (o - a) + (t - a) / (o - a), 1)), n < .5 ? n *= 2 : n = 1 - 2 * (n - .5)), n = e(n);
              else if (5 == l) {
                if (o === a) n = 0;
                else {
                  var h = o - a;
                  t = r(i(0, t + .5 - a), o - a);
                  var p = -h / 2 + t,
                    c = h / 2;
                  n = Math.sqrt(1 - p * p / (c * c))
                }
                n = e(n)
              } else 6 == l ? (o === a ? n = 0 : (t = r(i(0, t + .5 - a), o - a), n = (1 + Math.cos(Math.PI + 2 * Math.PI * t / (o - a))) / 2), n = e(n)) : (t >= s(a) && (n = t - a < 0 ? 1 - (a - t) : i(0, r(o - t, 1))), n = e(n));
              return n * this.a.v
            }
            var i = Math.max,
              r = Math.min,
              s = Math.floor;
            return function (i, r, s) {
              this.mdf = !1, this.k = !1, this.data = r, this.dynamicProperties = [], this.getValue = t, this.getMult = e, this.elem = i, this.comp = i.comp, this.finalS = 0, this.finalE = 0, this.s = PropertyFactory.getProp(i, r.s || {
                k: 0
              }, 0, 0, this.dynamicProperties), this.e = "e" in r ? PropertyFactory.getProp(i, r.e, 0, 0, this.dynamicProperties) : {
                v: 100
              }, this.o = PropertyFactory.getProp(i, r.o || {
                k: 0
              }, 0, 0, this.dynamicProperties), this.xe = PropertyFactory.getProp(i, r.xe || {
                k: 0
              }, 0, 0, this.dynamicProperties), this.ne = PropertyFactory.getProp(i, r.ne || {
                k: 0
              }, 0, 0, this.dynamicProperties), this.a = PropertyFactory.getProp(i, r.a, 0, .01, this.dynamicProperties), this.dynamicProperties.length ? s.push(this) : this.getValue()
            }
          }();
        return {
          getProp: o,
          getDashProp: l,
          getTextSelectorProp: h,
          getGradientProp: d
        }
      }();
    ShapePath.prototype.setPathData = function (t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e;) this.v[i] = point_pool.newPoint(), this.o[i] = point_pool.newPoint(), this.i[i] = point_pool.newPoint(), i += 1
    }, ShapePath.prototype.setLength = function (t) {
      for (; this._maxLength < t;) this.doubleArrayLength();
      this._length = t
    }, ShapePath.prototype.doubleArrayLength = function () {
      this.v = this.v.concat(Array.apply(null, {
        length: this._maxLength
      })), this.i = this.i.concat(Array.apply(null, {
        length: this._maxLength
      })), this.o = this.o.concat(Array.apply(null, {
        length: this._maxLength
      })), this._maxLength *= 2
    }, ShapePath.prototype.setXYAt = function (t, e, i, r, s) {
      var n;
      switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o
      }(!n[r] || n[r] && !s) && (n[r] = point_pool.newPoint()), n[r][0] = t, n[r][1] = e
    }, ShapePath.prototype.setTripleAt = function (t, e, i, r, s, n, a, o) {
      this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(s, n, "i", a, o)
    };
    var ShapePropertyFactory = function () {
        function t(t, e, i, r) {
          var s, n, a;
          if (t < this.keyframes[0].t - this.offsetTime) s = this.keyframes[0].s[0], a = !0, e = 0;
          else if (t >= this.keyframes[this.keyframes.length - 1].t - this.offsetTime) s = 1 === this.keyframes[this.keyframes.length - 2].h ? this.keyframes[this.keyframes.length - 1].s[0] : this.keyframes[this.keyframes.length - 2].e[0], a = !0;
          else {
            for (var o, l, h, p, c, d, u = e, f = this.keyframes.length - 1, m = !0; m && (o = this.keyframes[u], l = this.keyframes[u + 1], !(l.t - this.offsetTime > t));) u < f - 1 ? u += 1 : m = !1;
            a = 1 === o.h, e = u;
            var g;
            if (!a) {
              if (t >= l.t - this.offsetTime) g = 1;
              else if (t < o.t - this.offsetTime) g = 0;
              else {
                var v;
                o.__fnct ? v = o.__fnct : (v = BezierFactory.getBezierEasing(o.o.x, o.o.y, o.i.x, o.i.y).get, o.__fnct = v), g = v((t - (o.t - this.offsetTime)) / (l.t - this.offsetTime - (o.t - this.offsetTime)))
              }
              n = o.e[0]
            }
            s = o.s[0]
          }
          p = i._length, d = s.i[0].length;
          var y, _ = !1;
          for (h = 0; h < p; h += 1)
            for (c = 0; c < d; c += 1) a ? (y = s.i[h][c], i.i[h][c] !== y && (i.i[h][c] = y, r && (this.pv.i[h][c] = y), _ = !0), y = s.o[h][c], i.o[h][c] !== y && (i.o[h][c] = y, r && (this.pv.o[h][c] = y), _ = !0), y = s.v[h][c], i.v[h][c] !== y && (i.v[h][c] = y, r && (this.pv.v[h][c] = y), _ = !0)) : (y = s.i[h][c] + (n.i[h][c] - s.i[h][c]) * g, i.i[h][c] !== y && (i.i[h][c] = y, r && (this.pv.i[h][c] = y), _ = !0), y = s.o[h][c] + (n.o[h][c] - s.o[h][c]) * g, i.o[h][c] !== y && (i.o[h][c] = y, r && (this.pv.o[h][c] = y), _ = !0), y = s.v[h][c] + (n.v[h][c] - s.v[h][c]) * g, i.v[h][c] !== y && (i.v[h][c] = y, r && (this.pv.v[h][c] = y), _ = !0));
          return _ && (i.c = s.c), {
            iterationIndex: e,
            hasModified: _
          }
        }

        function e() {
          if (this.elem.globalData.frameId !== this.frameId) {
            this.mdf = !1;
            var t = this.comp.renderedFrame - this.offsetTime,
              e = this.keyframes[0].t - this.offsetTime,
              i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
            if (this.lastFrame === h || !(this.lastFrame < e && t < e || this.lastFrame > i && t > i)) {
              var r = this.lastFrame < t ? this._lastIndex : 0,
                s = this.interpolateShape(t, r, this.v, !0);
              this._lastIndex = s.iterationIndex, this.mdf = s.hasModified, s.hasModified && (this.paths = this.localShapeCollection)
            }
            this.lastFrame = t, this.frameId = this.elem.globalData.frameId
          }
        }

        function i() {
          return this.v
        }

        function r() {
          this.paths = this.localShapeCollection, this.k || (this.mdf = !1)
        }

        function s(t, e, i) {
          this.__shapeObject = 1, this.comp = t.comp, this.k = !1, this.mdf = !1;
          var s = 3 === i ? e.pt.k : e.ks.k;
          this.v = shape_pool.clone(s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = r
        }

        function n(t, e, i) {
          this.__shapeObject = 1, this.comp = t.comp, this.elem = t, this.offsetTime = t.data.st, this._lastIndex = 0, this.keyframes = 3 === i ? e.pt.k : e.ks.k, this.k = !0, this.kf = !0;
          var s = this.keyframes[0].s[0].i.length;
          this.keyframes[0].s[0].i[0].length;
          this.v = shape_pool.newShape(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shape_pool.clone(this.v), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = h, this.reset = r
        }

        function a(t, e, i, r) {
          var a;
          if (3 === i || 4 === i) {
            var o = 3 === i ? e.pt : e.ks,
              l = o.k;
            a = 1 === o.a || l.length ? new n(t, e, i) : new s(t, e, i)
          } else 5 === i ? a = new d(t, e) : 6 === i ? a = new p(t, e) : 7 === i && (a = new c(t, e));
          return a.k && r.push(a), a
        }

        function o() {
          return s
        }

        function l() {
          return n
        }
        var h = -999999;
        s.prototype.interpolateShape = t, s.prototype.getValue = i, n.prototype.getValue = e, n.prototype.interpolateShape = t;
        var p = function () {
            function t() {
              var t = this.p.v[0],
                e = this.p.v[1],
                r = this.s.v[0] / 2,
                s = this.s.v[1] / 2;
              3 !== this.d ? (this.v.v[0][0] = t, this.v.v[0][1] = e - s, this.v.v[1][0] = t + r, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + s, this.v.v[3][0] = t - r, this.v.v[3][1] = e, this.v.i[0][0] = t - r * i, this.v.i[0][1] = e - s, this.v.i[1][0] = t + r, this.v.i[1][1] = e - s * i, this.v.i[2][0] = t + r * i, this.v.i[2][1] = e + s, this.v.i[3][0] = t - r, this.v.i[3][1] = e + s * i, this.v.o[0][0] = t + r * i, this.v.o[0][1] = e - s, this.v.o[1][0] = t + r, this.v.o[1][1] = e + s * i, this.v.o[2][0] = t - r * i, this.v.o[2][1] = e + s, this.v.o[3][0] = t - r, this.v.o[3][1] = e - s * i) : (this.v.v[0][0] = t, this.v.v[0][1] = e - s, this.v.v[1][0] = t - r, this.v.v[1][1] = e, this.v.v[2][0] = t, this.v.v[2][1] = e + s, this.v.v[3][0] = t + r, this.v.v[3][1] = e, this.v.i[0][0] = t + r * i, this.v.i[0][1] = e - s, this.v.i[1][0] = t - r, this.v.i[1][1] = e - s * i, this.v.i[2][0] = t - r * i, this.v.i[2][1] = e + s, this.v.i[3][0] = t + r, this.v.i[3][1] = e + s * i, this.v.o[0][0] = t - r * i, this.v.o[0][1] = e - s, this.v.o[1][0] = t - r, this.v.o[1][1] = e + s * i, this.v.o[2][0] = t + r * i, this.v.o[2][1] = e + s, this.v.o[3][0] = t + r, this.v.o[3][1] = e - s * i)
            }

            function e(t) {
              var e, i = this.dynamicProperties.length;
              if (this.elem.globalData.frameId !== this.frameId) {
                for (this.mdf = !1, this.frameId = this.elem.globalData.frameId, e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                this.mdf && this.convertEllToPath()
              }
            }
            var i = roundCorner;
            return function (i, s) {
              this.v = shape_pool.newShape(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = s.d, this.dynamicProperties = [], this.elem = i, this.comp = i.comp, this.frameId = -1, this.mdf = !1, this.getValue = e, this.convertEllToPath = t, this.reset = r, this.p = PropertyFactory.getProp(i, s.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(i, s.s, 1, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertEllToPath()
            }
          }(),
          c = function () {
            function t() {
              var t, e = Math.floor(this.pt.v),
                i = 2 * Math.PI / e,
                r = this.or.v,
                s = this.os.v,
                n = 2 * Math.PI * r / (4 * e),
                a = -Math.PI / 2,
                o = 3 === this.data.d ? -1 : 1;
              for (a += this.r.v, this.v._length = 0, t = 0; t < e; t += 1) {
                var l = r * Math.cos(a),
                  h = r * Math.sin(a),
                  p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                  c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - p * n * s * o, h - c * n * s * o, l + p * n * s * o, h + c * n * s * o, t, !0), a += i * o
              }
              this.paths.length = 0, this.paths[0] = this.v
            }

            function e() {
              var t, e, i, r, s = 2 * Math.floor(this.pt.v),
                n = 2 * Math.PI / s,
                a = !0,
                o = this.or.v,
                l = this.ir.v,
                h = this.os.v,
                p = this.is.v,
                c = 2 * Math.PI * o / (2 * s),
                d = 2 * Math.PI * l / (2 * s),
                u = -Math.PI / 2;
              u += this.r.v;
              var f = 3 === this.data.d ? -1 : 1;
              for (this.v._length = 0, t = 0; t < s; t += 1) {
                e = a ? o : l, i = a ? h : p, r = a ? c : d;
                var m = e * Math.cos(u),
                  g = e * Math.sin(u),
                  v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                  y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * r * i * f, g - y * r * i * f, m + v * r * i * f, g + y * r * i * f, t, !0), a = !a, u += n * f
              }
            }

            function i() {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                var t, e = this.dynamicProperties.length;
                for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t].mdf && (this.mdf = !0);
                this.mdf && this.convertToPath()
              }
            }
            return function (s, n) {
              this.v = shape_pool.newShape(), this.v.setPathData(!0, 0), this.elem = s, this.comp = s.comp, this.data = n, this.frameId = -1, this.d = n.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = i, this.reset = r, 1 === n.sy ? (this.ir = PropertyFactory.getProp(s, n.ir, 0, 0, this.dynamicProperties), this.is = PropertyFactory.getProp(s, n.is, 0, .01, this.dynamicProperties), this.convertToPath = e) : this.convertToPath = t, this.pt = PropertyFactory.getProp(s, n.pt, 0, 0, this.dynamicProperties), this.p = PropertyFactory.getProp(s, n.p, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(s, n.r, 0, degToRads, this.dynamicProperties), this.or = PropertyFactory.getProp(s, n.or, 0, 0, this.dynamicProperties), this.os = PropertyFactory.getProp(s, n.os, 0, .01, this.dynamicProperties), this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : this.convertToPath()
            }
          }(),
          d = function () {
            function t(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                this.mdf = !1, this.frameId = this.elem.globalData.frameId;
                var e, i = this.dynamicProperties.length;
                for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.mdf = !0);
                this.mdf && this.convertRectToPath()
              }
            }

            function e() {
              var t = this.p.v[0],
                e = this.p.v[1],
                i = this.s.v[0] / 2,
                r = this.s.v[1] / 2,
                s = bm_min(i, r, this.r.v),
                n = s * (1 - roundCorner);
              this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + s, t + i, e - r + n, 0, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - n, t + i, e + r - s, 1, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e + r, t + i - s, e + r, t + i - n, e + r, 2, !0), this.v.setTripleAt(t - i + s, e + r, t - i + n, e + r, t - i + s, e + r, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - s, t - i, e + r - n, 4, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + n, t - i, e - r + s, 5, !0), this.v.setTripleAt(t - i + s, e - r, t - i + s, e - r, t - i + n, e - r, 6, !0), this.v.setTripleAt(t + i - s, e - r, t + i - n, e - r, t + i - s, e - r, 7, !0)) : (this.v.setTripleAt(t - i, e + r, t - i + n, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + n, t - i, e - r, 3))) : (this.v.setTripleAt(t + i, e - r + s, t + i, e - r + n, t + i, e - r + s, 0, !0), 0 !== s ? (this.v.setTripleAt(t + i - s, e - r, t + i - s, e - r, t + i - n, e - r, 1, !0), this.v.setTripleAt(t - i + s, e - r, t - i + n, e - r, t - i + s, e - r, 2, !0), this.v.setTripleAt(t - i, e - r + s, t - i, e - r + s, t - i, e - r + n, 3, !0), this.v.setTripleAt(t - i, e + r - s, t - i, e + r - n, t - i, e + r - s, 4, !0), this.v.setTripleAt(t - i + s, e + r, t - i + s, e + r, t - i + n, e + r, 5, !0), this.v.setTripleAt(t + i - s, e + r, t + i - n, e + r, t + i - s, e + r, 6, !0), this.v.setTripleAt(t + i, e + r - s, t + i, e + r - s, t + i, e + r - n, 7, !0)) : (this.v.setTripleAt(t - i, e - r, t - i + n, e - r, t - i, e - r, 1, !0), this.v.setTripleAt(t - i, e + r, t - i, e + r - n, t - i, e + r, 2, !0), this.v.setTripleAt(t + i, e + r, t + i - n, e + r, t + i, e + r, 3, !0)))
            }
            return function (i, s) {
              this.v = shape_pool.newShape(), this.v.c = !0, this.localShapeCollection = shapeCollection_pool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = i, this.comp = i.comp, this.frameId = -1, this.d = s.d, this.dynamicProperties = [], this.mdf = !1, this.getValue = t, this.convertRectToPath = e, this.reset = r, this.p = PropertyFactory.getProp(i, s.p, 1, 0, this.dynamicProperties), this.s = PropertyFactory.getProp(i, s.s, 1, 0, this.dynamicProperties), this.r = PropertyFactory.getProp(i, s.r, 0, 0, this.dynamicProperties), this.dynamicProperties.length ? this.k = !0 : this.convertRectToPath()
            }
          }(),
          u = {};
        return u.getShapeProp = a, u.getConstructorFunction = o, u.getKeyframedConstructorFunction = l, u
      }(),
      ShapeModifiers = function () {
        function t(t, e) {
          r[t] || (r[t] = e)
        }

        function e(t, e, i, s) {
          return new r[t](e, i, s)
        }
        var i = {},
          r = {};
        return i.registerModifier = t, i.getModifier = e, i
      }();
    ShapeModifier.prototype.initModifierProperties = function () {}, ShapeModifier.prototype.addShapeToModifier = function () {}, ShapeModifier.prototype.addShape = function (t) {
      this.closed || (this.shapes.push({
        shape: t.sh,
        data: t,
        localShapeCollection: shapeCollection_pool.newShapeCollection()
      }), this.addShapeToModifier(t.sh))
    }, ShapeModifier.prototype.init = function (t, e, i) {
      this.elem = t, this.frameId = -1, this.shapes = [], this.dynamicProperties = [], this.mdf = !1, this.closed = !1, this.k = !1, this.comp = t.comp, this.initModifierProperties(t, e), this.dynamicProperties.length ? (this.k = !0, i.push(this)) : this.getValue(!0)
    }, extendPrototype(ShapeModifier, TrimModifier), TrimModifier.prototype.processKeys = function (t) {
      if (this.elem.globalData.frameId !== this.frameId || t) {
        this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
        var e, i = this.dynamicProperties.length;
        for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0);
        if (this.mdf || t) {
          var r = this.o.v % 360 / 360;
          r < 0 && (r += 1);
          var s = this.s.v + r,
            n = this.e.v + r;
          if (s > n) {
            var a = s;
            s = n, n = a
          }
          this.sValue = s, this.eValue = n, this.oValue = r
        }
      }
    }, TrimModifier.prototype.initModifierProperties = function (t, e) {
      this.sValue = 0, this.eValue = 0, this.oValue = 0, this.getValue = this.processKeys, this.s = PropertyFactory.getProp(t, e.s, 0, .01, this.dynamicProperties), this.e = PropertyFactory.getProp(t, e.e, 0, .01, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this.dynamicProperties), this.m = e.m, this.dynamicProperties.length || this.getValue(!0)
    }, TrimModifier.prototype.calculateShapeEdges = function (t, e, i, r, s) {
      var n = [];
      e <= 1 ? n.push({
        s: t,
        e: e
      }) : t >= 1 ? n.push({
        s: t - 1,
        e: e - 1
      }) : (n.push({
        s: t,
        e: 1
      }), n.push({
        s: 0,
        e: e - 1
      }));
      var a, o, l = [],
        h = n.length;
      for (a = 0; a < h; a += 1)
        if (o = n[a], o.e * s < r || o.s * s > r + i);
        else {
          var p, c;
          p = o.s * s <= r ? 0 : (o.s * s - r) / i, c = o.e * s >= r + i ? 1 : (o.e * s - r) / i, l.push([p, c])
        } return l.length || l.push([0, 0]), l
    }, TrimModifier.prototype.processShapes = function (t) {
      var e, i, r, s, n, a, o, l = this.shapes.length,
        h = this.sValue,
        p = this.eValue,
        c = 0;
      if (p === h)
        for (i = 0; i < l; i += 1) this.shapes[i].localShapeCollection.releaseShapes(), this.shapes[i].shape.mdf = !0, this.shapes[i].shape.paths = this.shapes[i].localShapeCollection;
      else if (1 === p && 0 === h || 0 === p && 1 === h) {
        if (this.mdf)
          for (i = 0; i < l; i += 1) this.shapes[i].shape.mdf = !0
      } else {
        var d, u, f = [];
        for (i = 0; i < l; i += 1)
          if (d = this.shapes[i], d.shape.mdf || this.mdf || t || 2 === this.m) {
            if (e = d.shape.paths, s = e._length, o = 0, !d.shape.mdf && d.pathsData) o = d.totalShapeLength;
            else {
              for (n = [], r = 0; r < s; r += 1) a = bez.getSegmentsLength(e.shapes[r]), n.push(a), o += a.totalLength;
              d.totalShapeLength = o, d.pathsData = n
            }
            c += o, d.shape.mdf = !0
          } else d.shape.paths = d.localShapeCollection;
        var r, s, m = h,
          g = p,
          v = 0;
        for (i = l - 1; i >= 0; i -= 1)
          if (d = this.shapes[i], d.shape.mdf) {
            if (u = d.localShapeCollection, u.releaseShapes(), 2 === this.m && l > 1) {
              var y = this.calculateShapeEdges(h, p, d.totalShapeLength, v, c);
              v += d.totalShapeLength
            } else y = [
              [m, g]
            ];
            for (s = y.length, r = 0; r < s; r += 1) {
              m = y[r][0], g = y[r][1], f.length = 0, g <= 1 ? f.push({
                s: d.totalShapeLength * m,
                e: d.totalShapeLength * g
              }) : m >= 1 ? f.push({
                s: d.totalShapeLength * (m - 1),
                e: d.totalShapeLength * (g - 1)
              }) : (f.push({
                s: d.totalShapeLength * m,
                e: d.totalShapeLength
              }), f.push({
                s: 0,
                e: d.totalShapeLength * (g - 1)
              }));
              var _ = this.addShapes(d, f[0]);
              if (f[0].s !== f[0].e) {
                if (f.length > 1)
                  if (d.shape.v.c) {
                    var b = _.pop();
                    this.addPaths(_, u), _ = this.addShapes(d, f[1], b)
                  } else this.addPaths(_, u), _ = this.addShapes(d, f[1]);
                this.addPaths(_, u)
              }
            }
            d.shape.paths = u
          }
      }
      this.dynamicProperties.length || (this.mdf = !1)
    }, TrimModifier.prototype.addPaths = function (t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) e.addShape(t[i])
    }, TrimModifier.prototype.addSegment = function (t, e, i, r, s, n, a) {
      s.setXYAt(e[0], e[1], "o", n), s.setXYAt(i[0], i[1], "i", n + 1), a && s.setXYAt(t[0], t[1], "v", n), s.setXYAt(r[0], r[1], "v", n + 1)
    }, TrimModifier.prototype.addShapes = function (t, e, i) {
      var r, s, n, a, o, l, h, p, c = t.pathsData,
        d = t.shape.paths.shapes,
        u = t.shape.paths._length,
        f = 0,
        m = [],
        g = !0;
      for (i ? (o = i._length, p = i._length) : (i = shape_pool.newShape(), o = 0, p = 0), m.push(i), r = 0; r < u; r += 1) {
        for (l = c[r].lengths, i.c = d[r].c, n = d[r].c ? l.length : l.length + 1, s = 1; s < n; s += 1)
          if (a = l[s - 1], f + a.addedLength < e.s) f += a.addedLength, i.c = !1;
          else {
            if (f > e.e) {
              i.c = !1;
              break
            }
            e.s <= f && e.e >= f + a.addedLength ? (this.addSegment(d[r].v[s - 1], d[r].o[s - 1], d[r].i[s], d[r].v[s], i, o, g), g = !1) : (h = bez.getNewSegment(d[r].v[s - 1], d[r].v[s], d[r].o[s - 1], d[r].i[s], (e.s - f) / a.addedLength, (e.e - f) / a.addedLength, l[s - 1]), this.addSegment(h.pt1, h.pt3, h.pt4, h.pt2, i, o, g), g = !1, i.c = !1), f += a.addedLength, o += 1
          } if (d[r].c) {
          if (a = l[s - 1], f <= e.e) {
            var v = l[s - 1].addedLength;
            e.s <= f && e.e >= f + v ? (this.addSegment(d[r].v[s - 1], d[r].o[s - 1], d[r].i[0], d[r].v[0], i, o, g), g = !1) : (h = bez.getNewSegment(d[r].v[s - 1], d[r].v[0], d[r].o[s - 1], d[r].i[0], (e.s - f) / v, (e.e - f) / v, l[s - 1]), this.addSegment(h.pt1, h.pt3, h.pt4, h.pt2, i, o, g), g = !1, i.c = !1)
          } else i.c = !1;
          f += a.addedLength, o += 1
        }
        if (i._length && (i.setXYAt(i.v[p][0], i.v[p][1], "i", p), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), f > e.e) break;
        r < u - 1 && (i = shape_pool.newShape(), g = !0, m.push(i), o = 0)
      }
      return m
    }, ShapeModifiers.registerModifier("tm", TrimModifier), extendPrototype(ShapeModifier, RoundCornersModifier), RoundCornersModifier.prototype.processKeys = function (t) {
      if (this.elem.globalData.frameId !== this.frameId || t) {
        this.mdf = !!t, this.frameId = this.elem.globalData.frameId;
        var e, i = this.dynamicProperties.length;
        for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
      }
    }, RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this.dynamicProperties), this.dynamicProperties.length || this.getValue(!0)
    }, RoundCornersModifier.prototype.processPath = function (t, e) {
      var i = shape_pool.newShape();
      i.c = t.c;
      var r, s, n, a, o, l, h, p, c, d, u, f, m, g = t._length,
        v = 0;
      for (r = 0; r < g; r += 1) s = t.v[r], a = t.o[r], n = t.i[r], s[0] === a[0] && s[1] === a[1] && s[0] === n[0] && s[1] === n[1] ? 0 !== r && r !== g - 1 || t.c ? (o = 0 === r ? t.v[g - 1] : t.v[r - 1], l = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), h = l ? Math.min(l / 2, e) / l : 0, p = f = s[0] + (o[0] - s[0]) * h, c = m = s[1] - (s[1] - o[1]) * h, d = p - (p - s[0]) * roundCorner, u = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, d, u, f, m, v), v += 1, o = r === g - 1 ? t.v[0] : t.v[r + 1], l = Math.sqrt(Math.pow(s[0] - o[0], 2) + Math.pow(s[1] - o[1], 2)), h = l ? Math.min(l / 2, e) / l : 0, p = d = s[0] + (o[0] - s[0]) * h, c = u = s[1] + (o[1] - s[1]) * h, f = p - (p - s[0]) * roundCorner, m = c - (c - s[1]) * roundCorner, i.setTripleAt(p, c, d, u, f, m, v), v += 1) : (i.setTripleAt(s[0], s[1], a[0], a[1], n[0], n[1], v), v += 1) : (i.setTripleAt(t.v[r][0], t.v[r][1], t.o[r][0], t.o[r][1], t.i[r][0], t.i[r][1], v), v += 1);
      return i
    }, RoundCornersModifier.prototype.processShapes = function (t) {
      var e, i, r, s, n = this.shapes.length,
        a = this.rd.v;
      if (0 !== a) {
        var o, l;
        for (i = 0; i < n; i += 1) {
          if (o = this.shapes[i], o.shape.paths, l = o.localShapeCollection, o.shape.mdf || this.mdf || t)
            for (l.releaseShapes(), o.shape.mdf = !0, e = o.shape.paths.shapes, s = o.shape.paths._length, r = 0; r < s; r += 1) l.addShape(this.processPath(e[r], a));
          o.shape.paths = o.localShapeCollection
        }
      }
      this.dynamicProperties.length || (this.mdf = !1)
    }, ShapeModifiers.registerModifier("rd", RoundCornersModifier), RepeaterModifier.prototype.processKeys = function (t) {
      if (this.elem.globalData.frameId !== this.frameId || t) {
        this.mdf = !!t;
        var e, i = this.dynamicProperties.length;
        for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.mdf = !0)
      }
    }, RepeaterModifier.prototype.initModifierProperties = function (t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this.dynamicProperties), this.o = PropertyFactory.getProp(t, e.o, 0, null, this.dynamicProperties), this.tr = PropertyFactory.getProp(t, e.tr, 2, null, this.dynamicProperties), this.data = e, this.dynamicProperties.length || this.getValue(!0), this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
    }, RepeaterModifier.prototype.applyTransforms = function (t, e, i, r, s, n) {
      var a = n ? -1 : 1,
        o = r.s.v[0] + (1 - r.s.v[0]) * (1 - s),
        l = r.s.v[1] + (1 - r.s.v[1]) * (1 - s);
      t.translate(r.p.v[0] * a * s, r.p.v[1] * a * s, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * a * s), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / o : o, n ? 1 / l : l), i.translate(r.a.v[0], r.a.v[1], r.a.v[2])
    }, RepeaterModifier.prototype.init = function (t, e, i, r, s) {
      this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.dynamicProperties = [], this.frameId = -1, this.initModifierProperties(t, e[i]);
      for (var n = 0; i > 0;) i -= 1, this._elements.unshift(e[i]), n += 1;
      this.dynamicProperties.length ? (this.k = !0, s.push(this)) : this.getValue(!0)
    }, RepeaterModifier.prototype.resetElements = function (t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = !1, "gr" === t[e].ty && this.resetElements(t[e].it)
    }, RepeaterModifier.prototype.cloneElements = function (t) {
      var e = (t.length, JSON.parse(JSON.stringify(t)));
      return this.resetElements(e), e
    }, RepeaterModifier.prototype.changeGroupRender = function (t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) t[i]._render = e, "gr" === t[i].ty && this.changeGroupRender(t[i].it, e)
    }, RepeaterModifier.prototype.processShapes = function (t) {
      if (this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.dynamicProperties.length || t || (this.mdf = !1), this.mdf)) {
        var e = Math.ceil(this.c.v);
        if (this._groups.length < e) {
          for (; this._groups.length < e;) {
            var i = {
              it: this.cloneElements(this._elements),
              ty: "gr"
            };
            i.it.push({
              a: {
                a: 0,
                ix: 1,
                k: [0, 0]
              },
              nm: "Transform",
              o: {
                a: 0,
                ix: 7,
                k: 100
              },
              p: {
                a: 0,
                ix: 2,
                k: [0, 0]
              },
              r: {
                a: 0,
                ix: 6,
                k: 0
              },
              s: {
                a: 0,
                ix: 3,
                k: [100, 100]
              },
              sa: {
                a: 0,
                ix: 5,
                k: 0
              },
              sk: {
                a: 0,
                ix: 4,
                k: 0
              },
              ty: "tr"
            }), this.arr.splice(0, 0, i), this._groups.splice(0, 0, i), this._currentCopies += 1
          }
          this.elem.reloadShapes()
        }
        var r, s, n = 0;
        for (r = 0; r <= this._groups.length - 1; r += 1) s = n < e, this._groups[r]._render = s, this.changeGroupRender(this._groups[r].it, s), n += 1;
        this._currentCopies = e, this.elem.firstFrame = !0;
        var a = this.o.v,
          o = a % 1,
          l = a > 0 ? Math.floor(a) : Math.ceil(a),
          h = (this.tr.v.props, this.pMatrix.props),
          p = this.rMatrix.props,
          c = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var d = 0;
        if (a > 0) {
          for (; d < l;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), d += 1;
          o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, o, !1), d += o)
        } else if (a < 0) {
          for (; d > l;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), d -= 1;
          o && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -o, !0), d -= o)
        }
        r = 1 === this.data.m ? 0 : this._currentCopies - 1;
        var u = 1 === this.data.m ? 1 : -1;
        for (n = this._currentCopies; n;) {
          if (0 !== d) {
            (0 !== r && 1 === u || r !== this._currentCopies - 1 && -1 === u) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), this.matrix.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15]);
            var f, m = this.elemsData[r].it,
              g = m[m.length - 1].transform.mProps.v.props,
              v = g.length;
            for (f = 0; f < v; f += 1) g[f] = this.matrix.props[f];
            this.matrix.reset()
          } else {
            this.matrix.reset();
            var f, m = this.elemsData[r].it,
              g = m[m.length - 1].transform.mProps.v.props,
              v = g.length;
            for (f = 0; f < v; f += 1) g[f] = this.matrix.props[f]
          }
          d += 1, n -= 1, r += u
        }
      }
    }, RepeaterModifier.prototype.addShape = function () {}, ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeCollection.prototype.addShape = function (t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(Array.apply(null, {
        length: this._maxLength
      })), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1
    }, ShapeCollection.prototype.releaseShapes = function () {
      var t;
      for (t = 0; t < this._length; t += 1) shape_pool.release(this.shapes[t]);
      this._length = 0
    };
    var ImagePreloader = function () {
        function t() {
          this.loadedAssets += 1, this.loadedAssets === this.totalImages && a && a(null)
        }

        function e(t) {
          var e = "";
          if (this.assetsPath) {
            var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
          } else e = this.path, e += t.u ? t.u : "", e += t.p;
          return e
        }

        function i(e) {
          var i = document.createElement("img");
          i.addEventListener("load", t.bind(this), !1), i.addEventListener("error", t.bind(this), !1), i.src = e
        }

        function r(t, r) {
          a = r, this.totalAssets = t.length;
          var s;
          for (s = 0; s < this.totalAssets; s += 1) t[s].layers || (i.bind(this)(e.bind(this)(t[s])), this.totalImages += 1)
        }

        function s(t) {
          this.path = t || ""
        }

        function n(t) {
          this.assetsPath = t || ""
        }
        var a;
        return function () {
          this.loadAssets = r, this.setAssetsPath = n, this.setPath = s, this.assetsPath = "", this.path = "", this.totalAssets = 0, this.totalImages = 0, this.loadedAssets = 0
        }
      }(),
      featureSupport = function () {
        var t = {
          maskType: !0
        };
        return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), t
      }(),
      filtersFactory = function () {
        function t(t) {
          var e = document.createElementNS(svgNS, "filter");
          return e.setAttribute("id", t), e.setAttribute("filterUnits", "objectBoundingBox"), e.setAttribute("x", "0%"), e.setAttribute("y", "0%"), e.setAttribute("width", "100%"), e.setAttribute("height", "100%"), e
        }

        function e() {
          var t = document.createElementNS(svgNS, "feColorMatrix");
          return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t
        }
        var i = {};
        return i.createFilter = t, i.createAlphaToLuminanceFilter = e, i
      }();
    TextAnimatorProperty.prototype.searchProperties = function (t) {
      var e, i, r, s = this._textData.a.length,
        n = PropertyFactory.getProp;
      for (e = 0; e < s; e += 1) r = this._textData.a[e], i = {
        a: {},
        s: {}
      }, "r" in r.a && (i.a.r = n(this._elem, r.a.r, 0, degToRads, this._dynamicProperties)), "rx" in r.a && (i.a.rx = n(this._elem, r.a.rx, 0, degToRads, this._dynamicProperties)), "ry" in r.a && (i.a.ry = n(this._elem, r.a.ry, 0, degToRads, this._dynamicProperties)), "sk" in r.a && (i.a.sk = n(this._elem, r.a.sk, 0, degToRads, this._dynamicProperties)), "sa" in r.a && (i.a.sa = n(this._elem, r.a.sa, 0, degToRads, this._dynamicProperties)), "s" in r.a && (i.a.s = n(this._elem, r.a.s, 1, .01, this._dynamicProperties)), "a" in r.a && (i.a.a = n(this._elem, r.a.a, 1, 0, this._dynamicProperties)), "o" in r.a && (i.a.o = n(this._elem, r.a.o, 0, .01, this._dynamicProperties)), "p" in r.a && (i.a.p = n(this._elem, r.a.p, 1, 0, this._dynamicProperties)), "sw" in r.a && (i.a.sw = n(this._elem, r.a.sw, 0, 0, this._dynamicProperties)), "sc" in r.a && (i.a.sc = n(this._elem, r.a.sc, 1, 0, this._dynamicProperties)), "fc" in r.a && (i.a.fc = n(this._elem, r.a.fc, 1, 0, this._dynamicProperties)), "fh" in r.a && (i.a.fh = n(this._elem, r.a.fh, 0, 0, this._dynamicProperties)), "fs" in r.a && (i.a.fs = n(this._elem, r.a.fs, 0, .01, this._dynamicProperties)), "fb" in r.a && (i.a.fb = n(this._elem, r.a.fb, 0, .01, this._dynamicProperties)), "t" in r.a && (i.a.t = n(this._elem, r.a.t, 0, 0, this._dynamicProperties)), i.s = PropertyFactory.getTextSelectorProp(this._elem, r.s, this._dynamicProperties), i.s.t = r.s.t, this._animatorsData[e] = i;
      this._textData.p && "m" in this._textData.p ? (this._pathData = {
        f: n(this._elem, this._textData.p.f, 0, 0, this._dynamicProperties),
        l: n(this._elem, this._textData.p.l, 0, 0, this._dynamicProperties),
        r: this._textData.p.r,
        m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
      }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = n(this._elem, this._textData.m.a, 1, 0, this._dynamicProperties), this._dynamicProperties.length && t.push(this)
    }, TextAnimatorProperty.prototype.getMeasures = function (t, e) {
      if (this.lettersChangedFlag = e, this.mdf || this._firstFrame || e || this._hasMaskedPath && this._pathData.m.mdf) {
        this._firstFrame = !1;
        var i, r, s, n, a = this._moreOptions.alignment.v,
          o = this._animatorsData,
          l = this._textData,
          h = this.mHelper,
          p = this._renderType,
          c = this.renderedLetters.length,
          d = (this.data, t.l);
        if (this._hasMaskedPath) {
          var u = this._pathData.m;
          if (!this._pathData.n || this._pathData.mdf) {
            var f = u.v;
            this._pathData.r && (f = reversePath(f));
            var m = {
              tLength: 0,
              segments: []
            };
            n = f._length - 1;
            var g, v = 0;
            for (s = 0; s < n; s += 1) g = {
              s: f.v[s],
              e: f.v[s + 1],
              to: [f.o[s][0] - f.v[s][0], f.o[s][1] - f.v[s][1]],
              ti: [f.i[s + 1][0] - f.v[s + 1][0], f.i[s + 1][1] - f.v[s + 1][1]]
            }, bez.buildBezierData(g), m.tLength += g.bezierData.segmentLength, m.segments.push(g), v += g.bezierData.segmentLength;
            s = n, u.v.c && (g = {
              s: f.v[s],
              e: f.v[0],
              to: [f.o[s][0] - f.v[s][0], f.o[s][1] - f.v[s][1]],
              ti: [f.i[0][0] - f.v[0][0], f.i[0][1] - f.v[0][1]]
            }, bez.buildBezierData(g), m.tLength += g.bezierData.segmentLength, m.segments.push(g), v += g.bezierData.segmentLength), this._pathData.pi = m
          }
          var y, _, b, m = this._pathData.pi,
            T = this._pathData.f.v,
            E = 0,
            w = 1,
            x = 0,
            S = !0,
            C = m.segments;
          if (T < 0 && u.v.c)
            for (m.tLength < Math.abs(T) && (T = -Math.abs(T) % m.tLength), E = C.length - 1, b = C[E].bezierData.points, w = b.length - 1; T < 0;) T += b[w].partialLength, (w -= 1) < 0 && (E -= 1, b = C[E].bezierData.points, w = b.length - 1);
          b = C[E].bezierData.points, _ = b[w - 1], y = b[w];
          var P, A, k = y.partialLength
        }
        n = d.length, i = 0, r = 0;
        var D, M, I, O, F, R = 1.2 * t.s * .714,
          N = !0;
        if (O = o.length, e)
          for (I = 0; I < O; I += 1) M = o[I].s, M.getValue(!0);
        var L, V, B, z, H, j, G, W, $, X, Y, U, q, K = -1,
          Q = T,
          Z = E,
          J = w,
          tt = -1,
          et = 0,
          it = "",
          rt = this.defaultPropsArray;
        for (s = 0; s < n; s += 1) {
          if (h.reset(), H = 1, d[s].n) i = 0, r += t.yOffset, r += N ? 1 : 0, T = Q, N = !1, et = 0, this._hasMaskedPath && (E = Z, w = J, b = C[E].bezierData.points, _ = b[w - 1], y = b[w], k = y.partialLength, x = 0), q = X = U = it = "", rt = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (tt !== d[s].line) {
                switch (t.j) {
                  case 1:
                    T += v - t.lineWidths[d[s].line];
                    break;
                  case 2:
                    T += (v - t.lineWidths[d[s].line]) / 2
                }
                tt = d[s].line
              }
              K !== d[s].ind && (d[K] && (T += d[K].extra), T += d[s].an / 2, K = d[s].ind), T += a[0] * d[s].an / 200;
              var st = 0;
              for (I = 0; I < O; I += 1) D = o[I].a, "p" in D && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), L.length ? st += D.p.v[0] * L[0] : st += D.p.v[0] * L), "a" in D && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), L.length ? st += D.a.v[0] * L[0] : st += D.a.v[0] * L);
              for (S = !0; S;) x + k >= T + st || !b ? (P = (T + st - x) / y.partialLength, B = _.point[0] + (y.point[0] - _.point[0]) * P, z = _.point[1] + (y.point[1] - _.point[1]) * P, h.translate(-a[0] * d[s].an / 200, -a[1] * R / 100), S = !1) : b && (x += y.partialLength, w += 1, w >= b.length && (w = 0, E += 1, C[E] ? b = C[E].bezierData.points : u.v.c ? (w = 0, E = 0, b = C[E].bezierData.points) : (x -= y.partialLength, b = null)), b && (_ = y, y = b[w], k = y.partialLength));
              V = d[s].an / 2 - d[s].add, h.translate(-V, 0, 0)
            } else V = d[s].an / 2 - d[s].add, h.translate(-V, 0, 0), h.translate(-a[0] * d[s].an / 200, -a[1] * R / 100, 0);
            for (et += d[s].l / 2, I = 0; I < O; I += 1) "t" in (D = o[I].a) && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), this._hasMaskedPath ? L.length ? T += D.t * L[0] : T += D.t * L : L.length ? i += D.t.v * L[0] : i += D.t.v * L);
            for (et += d[s].l / 2, t.strokeWidthAnim && (G = t.sw || 0), t.strokeColorAnim && (j = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (W = [t.fc[0], t.fc[1], t.fc[2]]), I = 0; I < O; I += 1) "a" in (D = o[I].a) && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), L.length ? h.translate(-D.a.v[0] * L[0], -D.a.v[1] * L[1], D.a.v[2] * L[2]) : h.translate(-D.a.v[0] * L, -D.a.v[1] * L, D.a.v[2] * L));
            for (I = 0; I < O; I += 1) "s" in (D = o[I].a) && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), L.length ? h.scale(1 + (D.s.v[0] - 1) * L[0], 1 + (D.s.v[1] - 1) * L[1], 1) : h.scale(1 + (D.s.v[0] - 1) * L, 1 + (D.s.v[1] - 1) * L, 1));
            for (I = 0; I < O; I += 1) {
              if (D = o[I].a, M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), "sk" in D && (L.length ? h.skewFromAxis(-D.sk.v * L[0], D.sa.v * L[1]) : h.skewFromAxis(-D.sk.v * L, D.sa.v * L)), "r" in D && (L.length ? h.rotateZ(-D.r.v * L[2]) : h.rotateZ(-D.r.v * L)), "ry" in D && (L.length ? h.rotateY(D.ry.v * L[1]) : h.rotateY(D.ry.v * L)), "rx" in D && (L.length ? h.rotateX(D.rx.v * L[0]) : h.rotateX(D.rx.v * L)), "o" in D && (L.length ? H += (D.o.v * L[0] - H) * L[0] : H += (D.o.v * L - H) * L), t.strokeWidthAnim && "sw" in D && (L.length ? G += D.sw.v * L[0] : G += D.sw.v * L), t.strokeColorAnim && "sc" in D)
                for ($ = 0; $ < 3; $ += 1) L.length ? j[$] = j[$] + (D.sc.v[$] - j[$]) * L[0] : j[$] = j[$] + (D.sc.v[$] - j[$]) * L;
              if (t.fillColorAnim && t.fc) {
                if ("fc" in D)
                  for ($ = 0; $ < 3; $ += 1) L.length ? W[$] = W[$] + (D.fc.v[$] - W[$]) * L[0] : W[$] = W[$] + (D.fc.v[$] - W[$]) * L;
                "fh" in D && (W = L.length ? addHueToRGB(W, D.fh.v * L[0]) : addHueToRGB(W, D.fh.v * L)), "fs" in D && (W = L.length ? addSaturationToRGB(W, D.fs.v * L[0]) : addSaturationToRGB(W, D.fs.v * L)), "fb" in D && (W = L.length ? addBrightnessToRGB(W, D.fb.v * L[0]) : addBrightnessToRGB(W, D.fb.v * L))
              }
            }
            for (I = 0; I < O; I += 1) "p" in (D = o[I].a) && (M = o[I].s, L = M.getMult(d[s].anIndexes[I], l.a[I].s.totalChars), this._hasMaskedPath ? L.length ? h.translate(0, D.p.v[1] * L[0], -D.p.v[2] * L[1]) : h.translate(0, D.p.v[1] * L, -D.p.v[2] * L) : L.length ? h.translate(D.p.v[0] * L[0], D.p.v[1] * L[1], -D.p.v[2] * L[2]) : h.translate(D.p.v[0] * L, D.p.v[1] * L, -D.p.v[2] * L));
            if (t.strokeWidthAnim && (X = G < 0 ? 0 : G), t.strokeColorAnim && (Y = "rgb(" + Math.round(255 * j[0]) + "," + Math.round(255 * j[1]) + "," + Math.round(255 * j[2]) + ")"), t.fillColorAnim && t.fc && (U = "rgb(" + Math.round(255 * W[0]) + "," + Math.round(255 * W[1]) + "," + Math.round(255 * W[2]) + ")"), this._hasMaskedPath) {
              if (h.translate(0, -t.ls), h.translate(0, a[1] * R / 100 + r, 0), l.p.p) {
                A = (y.point[1] - _.point[1]) / (y.point[0] - _.point[0]);
                var nt = 180 * Math.atan(A) / Math.PI;
                y.point[0] < _.point[0] && (nt += 180), h.rotate(-nt * Math.PI / 180)
              }
              h.translate(B, z, 0), T -= a[0] * d[s].an / 200, d[s + 1] && K !== d[s + 1].ind && (T += d[s].an / 2, T += t.tr / 1e3 * t.s)
            } else {
              switch (h.translate(i, r, 0), t.ps && h.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  h.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[d[s].line]), 0, 0);
                  break;
                case 2:
                  h.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[d[s].line]) / 2, 0, 0)
              }
              h.translate(0, -t.ls), h.translate(V, 0, 0), h.translate(a[0] * d[s].an / 200, a[1] * R / 100, 0), i += d[s].l + t.tr / 1e3 * t.s
            }
            "html" === p ? it = h.toCSS() : "svg" === p ? it = h.to2dCSS() : rt = [h.props[0], h.props[1], h.props[2], h.props[3], h.props[4], h.props[5], h.props[6], h.props[7], h.props[8], h.props[9], h.props[10], h.props[11], h.props[12], h.props[13], h.props[14], h.props[15]], q = H
          }
          c <= s ? (F = new LetterProps(q, X, Y, U, it, rt), this.renderedLetters.push(F), c += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[s], this.lettersChangedFlag = F.update(q, X, Y, U, it, rt) || this.lettersChangedFlag)
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function () {
      if (this._elem.globalData.frameId !== this._frameId) {
        this._frameId = this._elem.globalData.frameId;
        var t, e = this._dynamicProperties.length;
        for (this.mdf = !1, t = 0; t < e; t += 1) this._dynamicProperties[t].getValue(), this.mdf = this._dynamicProperties[t].mdf || this.mdf
      }
    }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], LetterProps.prototype.update = function (t, e, i, r, s, n) {
      this.mdf.o = !1, this.mdf.sw = !1, this.mdf.sc = !1, this.mdf.fc = !1, this.mdf.m = !1, this.mdf.p = !1;
      var a = !1;
      return this.o !== t && (this.o = t, this.mdf.o = !0, a = !0), this.sw !== e && (this.sw = e, this.mdf.sw = !0, a = !0), this.sc !== i && (this.sc = i, this.mdf.sc = !0, a = !0), this.fc !== r && (this.fc = r, this.mdf.fc = !0, a = !0), this.m !== s && (this.m = s, this.mdf.m = !0, a = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this.mdf.p = !0, a = !0), a
    }, TextProperty.prototype.setCurrentData = function (t) {
      var e = this.currentData;
      e.ascent = t.ascent, e.boxWidth = t.boxWidth ? t.boxWidth : e.boxWidth, e.f = t.f, e.fStyle = t.fStyle, e.fWeight = t.fWeight, e.fc = t.fc, e.j = t.j, e.justifyOffset = t.justifyOffset, e.l = t.l, e.lh = t.lh, e.lineWidths = t.lineWidths, e.ls = t.ls, e.of = t.of, e.s = t.s, e.sc = t.sc, e.sw = t.sw, e.t = t.t, e.tr = t.tr, e.fillColorAnim = t.fillColorAnim || e.fillColorAnim, e.strokeColorAnim = t.strokeColorAnim || e.strokeColorAnim, e.strokeWidthAnim = t.strokeWidthAnim || e.strokeWidthAnim, e.yOffset = t.yOffset, e.__complete = !1
    }, TextProperty.prototype.searchProperty = function () {
      return this.kf = this.data.d.k.length > 1, this.kf
    }, TextProperty.prototype.getValue = function () {
      this.mdf = !1;
      var t = this.elem.globalData.frameId;
      if (t !== this._frameId && this.kf || this.firstFrame) {
        for (var e, i = this.data.d.k, r = 0, s = i.length; r <= s - 1 && (e = i[r].s, !(r === s - 1 || i[r + 1].t > t));) r += 1;
        this.keysIndex !== r && (e.__complete || this.completeTextData(e), this.setCurrentData(e), this.mdf = !this.firstFrame, this.pv = this.v = this.currentData.t, this.keysIndex = r), this._frameId = t
      }
    }, TextProperty.prototype.completeTextData = function (t) {
      t.__complete = !0;
      var e, i, r, s, n, a, o, l = this.elem.globalData.fontManager,
        h = this.data,
        p = [],
        c = 0,
        d = h.m.g,
        u = 0,
        f = 0,
        m = 0,
        g = [],
        v = 0,
        y = 0,
        _ = l.getFontByName(t.f),
        b = 0,
        T = _.fStyle.split(" "),
        E = "normal",
        w = "normal";
      i = T.length;
      for (e = 0; e < i; e += 1) switch (T[e].toLowerCase()) {
        case "italic":
          w = "italic";
          break;
        case "bold":
          E = "700";
          break;
        case "black":
          E = "900";
          break;
        case "medium":
          E = "500";
          break;
        case "regular":
        case "normal":
          E = "400";
        case "light":
        case "thin":
          E = "200"
      }
      t.fWeight = E, t.fStyle = w, i = t.t.length;
      var x = t.tr / 1e3 * t.s;
      if (t.sz) {
        var S = t.sz[0],
          C = -1;
        for (e = 0; e < i; e += 1) r = !1, " " === t.t.charAt(e) ? C = e : 13 === t.t.charCodeAt(e) && (v = 0, r = !0), l.chars ? (o = l.getCharData(t.t.charAt(e), _.fStyle, _.fFamily), b = r ? 0 : o.w * t.s / 100) : b = l.measureText(t.t.charAt(e), t.f, t.s), v + b > S && " " !== t.t.charAt(e) ? (-1 === C ? i += 1 : e = C, t.t = t.t.substr(0, e) + "\r" + t.t.substr(e === C ? e + 1 : e), C = -1, v = 0) : (v += b, v += x);
        i = t.t.length
      }
      v = -x, b = 0;
      var P, A = 0;
      for (e = 0; e < i; e += 1)
        if (r = !1, P = t.t.charAt(e), " " === P ? s = " " : 13 === P.charCodeAt(0) ? (A = 0, g.push(v), y = v > y ? v : y, v = -2 * x, s = "", r = !0, m += 1) : s = t.t.charAt(e), l.chars ? (o = l.getCharData(P, _.fStyle, l.getFontByName(t.f).fFamily), b = r ? 0 : o.w * t.s / 100) : b = l.measureText(s, t.f, t.s), " " === P ? A += b + x : (v += b + x + A, A = 0), p.push({
            l: b,
            an: b,
            add: u,
            n: r,
            anIndexes: [],
            val: s,
            line: m
          }), 2 == d) {
          if (u += b, "" == s || " " == s || e == i - 1) {
            for ("" != s && " " != s || (u -= b); f <= e;) p[f].an = u, p[f].ind = c, p[f].extra = b, f += 1;
            c += 1, u = 0
          }
        } else if (3 == d) {
        if (u += b, "" == s || e == i - 1) {
          for ("" == s && (u -= b); f <= e;) p[f].an = u, p[f].ind = c, p[f].extra = b, f += 1;
          u = 0, c += 1
        }
      } else p[c].ind = c, p[c].extra = 0, c += 1;
      if (t.l = p, y = v > y ? v : y, g.push(v), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = y, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0
      }
      t.lineWidths = g;
      var k, D, M = h.a;
      a = M.length;
      var I, O, F = [];
      for (n = 0; n < a; n += 1) {
        for (k = M[n], k.a.sc && (t.strokeColorAnim = !0), k.a.sw && (t.strokeWidthAnim = !0), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (t.fillColorAnim = !0), O = 0, I = k.s.b, e = 0; e < i; e += 1) D = p[e], D.anIndexes[n] = O, (1 == I && "" != D.val || 2 == I && "" != D.val && " " != D.val || 3 == I && (D.n || " " == D.val || e == i - 1) || 4 == I && (D.n || e == i - 1)) && (1 === k.s.rn && F.push(O), O += 1);
        h.a[n].s.totalChars = O;
        var R, N = -1;
        if (1 === k.s.rn)
          for (e = 0; e < i; e += 1) D = p[e], N != D.anIndexes[n] && (N = D.anIndexes[n], R = F.splice(Math.floor(Math.random() * F.length), 1)[0]), D.anIndexes[n] = R
      }
      t.yOffset = t.lh || 1.2 * t.s, t.ls = t.ls || 0, t.ascent = _.ascent * t.s / 100
    }, TextProperty.prototype.updateDocumentData = function (t, e) {
      e = void 0 === e ? this.keysIndex : e;
      var i = this.data.d.k[e].s;
      i.__complete = !1, i.t = t.t, this.keysIndex = -1, this.firstFrame = !0, this.getValue()
    };
    var pooling = function () {
        function t(t) {
          return t.concat(Array.apply(null, {
            length: t.length
          }))
        }
        return {
          double: t
        }
      }(),
      point_pool = function () {
        function t() {
          var t;
          return r ? (r -= 1, t = n[r]) : t = [.1, .1], t
        }

        function e(t) {
          r === s && (n = pooling.double(n), s *= 2), n[r] = t, r += 1
        }
        var i = {
            newPoint: t,
            release: e
          },
          r = 0,
          s = 8,
          n = Array.apply(null, {
            length: s
          });
        return i
      }(),
      shape_pool = function () {
        function t() {
          var t;
          return n ? (n -= 1, t = o[n]) : t = new ShapePath, t
        }

        function e(t) {
          n === a && (o = pooling.double(o), a *= 2);
          var e, i = t._length;
          for (e = 0; e < i; e += 1) point_pool.release(t.v[e]), point_pool.release(t.i[e]), point_pool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
          t._length = 0, t.c = !1, o[n] = t, n += 1
        }

        function i(t, i) {
          for (; i--;) e(t[i])
        }

        function r(e, i) {
          var r, s = void 0 === e._length ? e.v.length : e._length,
            n = t();
          n.setLength(s), n.c = e.c;
          var a;
          for (r = 0; r < s; r += 1) i ? (a = i.applyToPointArray(e.v[r][0], e.v[r][1], 0, 2), n.setXYAt(a[0], a[1], "v", r), point_pool.release(a), a = i.applyToPointArray(e.o[r][0], e.o[r][1], 0, 2), n.setXYAt(a[0], a[1], "o", r), point_pool.release(a), a = i.applyToPointArray(e.i[r][0], e.i[r][1], 0, 2), n.setXYAt(a[0], a[1], "i", r), point_pool.release(a)) : n.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], r);
          return n
        }
        var s = {
            clone: r,
            newShape: t,
            release: e,
            releaseArray: i
          },
          n = 0,
          a = 4,
          o = Array.apply(null, {
            length: a
          });
        return s
      }(),
      shapeCollection_pool = function () {
        function t() {
          var t;
          return s ? (s -= 1, t = a[s]) : t = new ShapeCollection, t
        }

        function e(t) {
          var e, i = t._length;
          for (e = 0; e < i; e += 1) shape_pool.release(t.shapes[e]);
          t._length = 0, s === n && (a = pooling.double(a), n *= 2), a[s] = t, s += 1
        }

        function i(t, i) {
          e(t), s === n && (a = pooling.double(a), n *= 2), a[s] = t, s += 1
        }
        var r = {
            newShapeCollection: t,
            release: e,
            clone: i
          },
          s = 0,
          n = 4,
          a = Array.apply(null, {
            length: n
          });
        return r
      }();
    BaseRenderer.prototype.checkLayers = function (t) {
      var e, i, r = this.layers.length;
      for (this.completeLayers = !0, e = r - 1; e >= 0; e--) this.elements[e] || (i = this.layers[e], i.ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements()
    }, BaseRenderer.prototype.createItem = function (t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 13:
          return this.createCamera(t);
        case 99:
          return null
      }
      return this.createBase(t)
    }, BaseRenderer.prototype.createCamera = function () {
      throw new Error("You're using a 3d camera. Try the html renderer.")
    }, BaseRenderer.prototype.buildAllItems = function () {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements()
    }, BaseRenderer.prototype.includeLayers = function (t) {
      this.completeLayers = !1;
      var e, i, r = t.length,
        s = this.layers.length;
      for (e = 0; e < r; e += 1)
        for (i = 0; i < s;) {
          if (this.layers[i].id == t[e].id) {
            this.layers[i] = t[e];
            break
          }
          i += 1
        }
    }, BaseRenderer.prototype.setProjectInterface = function (t) {
      this.globalData.projectInterface = t
    }, BaseRenderer.prototype.initItems = function () {
      this.globalData.progressiveLoad || this.buildAllItems()
    }, BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
      i = i || [];
      for (var r = this.elements, s = this.layers, n = 0, a = s.length; n < a;) s[n].ind == e && (r[n] && !0 !== r[n] ? void 0 !== s[n].parent ? (i.push(r[n]), r[n]._isParent = !0, this.buildElementParenting(t, s[n].parent, i)) : (i.push(r[n]), r[n]._isParent = !0, t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1
    }, BaseRenderer.prototype.addPendingElement = function (t) {
      this.pendingElements.push(t)
    }, extendPrototype(BaseRenderer, SVGRenderer), SVGRenderer.prototype.createBase = function (t) {
      return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createShape = function (t) {
      return new IShapeElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createText = function (t) {
      return new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createImage = function (t) {
      return new IImageElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createComp = function (t) {
      return new ICompElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.createSolid = function (t) {
      return new ISolidElement(t, this.layerElement, this.globalData, this)
    }, SVGRenderer.prototype.configAnimation = function (t) {
      this.layerElement = document.createElementNS(svgNS, "svg"), this.layerElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.layerElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.layerElement.setAttribute("width", t.w), this.layerElement.setAttribute("height", t.h), this.layerElement.style.width = "100%", this.layerElement.style.height = "100%"), this.renderConfig.className && this.layerElement.setAttribute("class", this.renderConfig.className), this.layerElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.layerElement);
      var e = document.createElementNS(svgNS, "defs");
      this.globalData.defs = e, this.layerElement.appendChild(e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.frameId = 0, this.globalData.nm = t.nm, this.globalData.compSize = {
        w: t.w,
        h: t.h
      }, this.data = t, this.globalData.frameRate = t.fr;
      var i = document.createElementNS(svgNS, "clipPath"),
        r = document.createElementNS(svgNS, "rect");
      r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
      var s = "animationMask_" + randomString(10);
      i.setAttribute("id", s), i.appendChild(r);
      var n = document.createElementNS(svgNS, "g");
      n.setAttribute("clip-path", "url(" + locationHref + "#" + s + ")"), this.layerElement.appendChild(n), e.appendChild(i), this.layerElement = n, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.elements = Array.apply(null, {
        length: t.layers.length
      })
    }, SVGRenderer.prototype.destroy = function () {
      this.animationItem.wrapper.innerHTML = "", this.layerElement = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t++) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, SVGRenderer.prototype.updateContainerSize = function () {}, SVGRenderer.prototype.buildItem = function (t) {
      var e = this.elements;
      if (!e[t] && 99 != this.layers[t].ty) {
        e[t] = !0;
        var i = this.createItem(this.layers[t]);
        e[t] = i, expressionsPlugin && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt && (this.elements[t - 1] && !0 !== this.elements[t - 1] ? i.setMatte(e[t - 1].layerId) : (this.buildItem(t - 1), this.addPendingElement(i)))
      }
    }, SVGRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt)
          for (var e = 0, i = this.elements.length; e < i;) {
            if (this.elements[e] === t) {
              t.setMatte(this.elements[e - 1].layerId);
              break
            }
            e += 1
          }
      }
    }, SVGRenderer.prototype.renderFrame = function (t) {
      if (this.renderedFrame != t && !this.destroyed) {
        null === t ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t;
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        for (e = i - 1; e >= 0; e--)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
      }
    }, SVGRenderer.prototype.appendElementInPos = function (t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var r, s = 0; s < e;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement() && (r = this.elements[s].getBaseElement()), s += 1;
        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i)
      }
    }, SVGRenderer.prototype.hide = function () {
      this.layerElement.style.display = "none"
    }, SVGRenderer.prototype.show = function () {
      this.layerElement.style.display = "block"
    }, SVGRenderer.prototype.searchExtraCompositions = function (t) {
      var e, i = t.length,
        r = document.createElementNS(svgNS, "g");
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e], r, this.globalData.comp, null);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
        }
    }, MaskElement.prototype.getMaskProperty = function (t) {
      return this.viewData[t].prop
    }, MaskElement.prototype.prepareFrame = function () {
      var t, e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue()
    }, MaskElement.prototype.renderFrame = function (t) {
      var e, i = this.masksProperties.length;
      for (e = 0; e < i; e++)
        if ((this.viewData[e].prop.mdf || this.firstFrame) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op.mdf || this.firstFrame) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), "n" !== this.masksProperties[e].mode && (this.viewData[e].invRect && (this.element.finalTransform.mProp.mdf || this.firstFrame) && (this.viewData[e].invRect.setAttribute("x", -t.props[12]), this.viewData[e].invRect.setAttribute("y", -t.props[13])), this.storedData[e].x && (this.storedData[e].x.mdf || this.firstFrame))) {
          var r = this.storedData[e].expan;
          this.storedData[e].x.v < 0 ? ("erode" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + locationHref + "#" + this.storedData[e].filterId + ")")), r.setAttribute("radius", -this.storedData[e].x.v)) : ("dilate" !== this.storedData[e].lastOperator && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v))
        } this.firstFrame = !1
    }, MaskElement.prototype.getMaskelement = function () {
      return this.maskElement
    }, MaskElement.prototype.createLayerSolidPath = function () {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " "
    }, MaskElement.prototype.drawPath = function (t, e, i) {
      var r, s, n = " M" + e.v[0][0] + "," + e.v[0][1];
      for (s = e._length, r = 1; r < s; r += 1) n += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[r][0]) + "," + bm_rnd(e.i[r][1]) + " " + bm_rnd(e.v[r][0]) + "," + bm_rnd(e.v[r][1]);
      e.c && s > 1 && (n += " C" + bm_rnd(e.o[r - 1][0]) + "," + bm_rnd(e.o[r - 1][1]) + " " + bm_rnd(e.i[0][0]) + "," + bm_rnd(e.i[0][1]) + " " + bm_rnd(e.v[0][0]) + "," + bm_rnd(e.v[0][1])), i.lastPath !== n && (i.elem && (e.c ? t.inv ? i.elem.setAttribute("d", this.solidPath + n) : i.elem.setAttribute("d", n) : i.elem.setAttribute("d", "")), i.lastPath = n)
    }, MaskElement.prototype.destroy = function () {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
    }, BaseElement.prototype.checkMasks = function () {
      if (!this.data.hasMask) return !1;
      for (var t = 0, e = this.data.masksProperties.length; t < e;) {
        if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
        t += 1
      }
      return !1
    }, BaseElement.prototype.checkParenting = function () {
      void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent)
    }, BaseElement.prototype.prepareFrame = function (t) {
      this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? !0 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !0, this.firstFrame = !0, this.data.hasMask && (this.maskManager.firstFrame = !0)) : !1 !== this.isVisible && (this.elemMdf = !0, this.globalData.mdf = !0, this.isVisible = !1);
      var e, i = this.dynamicProperties.length;
      for (e = 0; e < i; e += 1)(this.isVisible || this._isParent && "transform" === this.dynamicProperties[e].type) && (this.dynamicProperties[e].getValue(), this.dynamicProperties[e].mdf && (this.elemMdf = !0, this.globalData.mdf = !0));
      return this.data.hasMask && this.isVisible && this.maskManager.prepareFrame(t * this.data.sr), this.currentFrameNum = t * this.data.sr, this.isVisible
    }, BaseElement.prototype.globalToLocal = function (t) {
      var e = [];
      e.push(this.finalTransform);
      for (var i = !0, r = this.comp; i;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), r = r.comp) : i = !1;
      var s, n, a = e.length;
      for (s = 0; s < a; s += 1) n = e[s].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
      return t
    }, BaseElement.prototype.initExpressions = function () {
      this.layerInterface = LayerExpressionInterface(this), this.data.hasMask && this.layerInterface.registerMaskInterface(this.maskManager);
      var t = EffectsExpressionInterface.createEffectsInterface(this, this.layerInterface);
      this.layerInterface.registerEffectsInterface(t), 0 === this.data.ty || this.data.xt ? this.compInterface = CompExpressionInterface(this) : 4 === this.data.ty ? this.layerInterface.shapeInterface = ShapeExpressionInterface.createShapeInterface(this.shapesData, this.itemsData, this.layerInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = TextExpressionInterface(this))
    }, BaseElement.prototype.setBlendMode = function () {
      var t = "";
      switch (this.data.bm) {
        case 1:
          t = "multiply";
          break;
        case 2:
          t = "screen";
          break;
        case 3:
          t = "overlay";
          break;
        case 4:
          t = "darken";
          break;
        case 5:
          t = "lighten";
          break;
        case 6:
          t = "color-dodge";
          break;
        case 7:
          t = "color-burn";
          break;
        case 8:
          t = "hard-light";
          break;
        case 9:
          t = "soft-light";
          break;
        case 10:
          t = "difference";
          break;
        case 11:
          t = "exclusion";
          break;
        case 12:
          t = "hue";
          break;
        case 13:
          t = "saturation";
          break;
        case 14:
          t = "color";
          break;
        case 15:
          t = "luminosity"
      }(this.baseElement || this.layerElement).style["mix-blend-mode"] = t
    }, BaseElement.prototype.init = function () {
      this.data.sr || (this.data.sr = 1), this.dynamicProperties = this.dynamicProperties || [], this.data.ef && (this.effects = new EffectsManager(this.data, this, this.dynamicProperties)), this.hidden = !1, this.firstFrame = !0, this.isVisible = !1, this._isParent = !1, this.currentFrameNum = -99999, this.lastNum = -99999, this.data.ks && (this.finalTransform = {
        mProp: PropertyFactory.getProp(this, this.data.ks, 2, null, this.dynamicProperties),
        matMdf: !1,
        opMdf: !1,
        mat: new Matrix,
        opacity: 1
      }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.finalTransform.op = this.finalTransform.mProp.o, this.transform = this.finalTransform.mProp, 11 !== this.data.ty && this.createElements(), this.data.hasMask && this.addMasks(this.data)), this.elemMdf = !1
    }, BaseElement.prototype.getType = function () {
      return this.type
    }, BaseElement.prototype.resetHierarchy = function () {
      this.hierarchy ? this.hierarchy.length = 0 : this.hierarchy = []
    }, BaseElement.prototype.getHierarchy = function () {
      return this.hierarchy || (this.hierarchy = []), this.hierarchy
    }, BaseElement.prototype.setHierarchy = function (t) {
      this.hierarchy = t
    }, BaseElement.prototype.getLayerSize = function () {
      return 5 === this.data.ty ? {
        w: this.data.textData.width,
        h: this.data.textData.height
      } : {
        w: this.data.width,
        h: this.data.height
      }
    }, BaseElement.prototype.hide = function () {}, BaseElement.prototype.sourceRectAtTime = function () {
      return {
        top: 0,
        left: 0,
        width: 100,
        height: 100
      }
    }, BaseElement.prototype.mHelper = new Matrix, createElement(BaseElement, SVGBaseElement), SVGBaseElement.prototype.createElements = function () {
      this.layerElement = document.createElementNS(svgNS, "g"), this.transformedElement = this.layerElement, this.data.hasMask && (this.maskedElement = this.layerElement);
      var t = null;
      if (this.data.td) {
        if (3 == this.data.td || 1 == this.data.td) {
          var e = document.createElementNS(svgNS, "mask");
          if (e.setAttribute("id", this.layerId), e.setAttribute("mask-type", 3 == this.data.td ? "luminance" : "alpha"), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e), !featureSupport.maskType && 1 == this.data.td) {
            e.setAttribute("mask-type", "luminance");
            var i = randomString(10),
              r = filtersFactory.createFilter(i);
            this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            var s = document.createElementNS(svgNS, "g");
            s.appendChild(this.layerElement), t = s, e.appendChild(s), s.setAttribute("filter", "url(" + locationHref + "#" + i + ")")
          }
        } else if (2 == this.data.td) {
          var n = document.createElementNS(svgNS, "mask");
          n.setAttribute("id", this.layerId), n.setAttribute("mask-type", "alpha");
          var a = document.createElementNS(svgNS, "g");
          n.appendChild(a);
          var i = randomString(10),
            r = filtersFactory.createFilter(i),
            o = document.createElementNS(svgNS, "feColorMatrix");
          o.setAttribute("type", "matrix"), o.setAttribute("color-interpolation-filters", "sRGB"), o.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"), r.appendChild(o), this.globalData.defs.appendChild(r);
          var l = document.createElementNS(svgNS, "rect");
          if (l.setAttribute("width", this.comp.data.w), l.setAttribute("height", this.comp.data.h), l.setAttribute("x", "0"), l.setAttribute("y", "0"), l.setAttribute("fill", "#ffffff"), l.setAttribute("opacity", "0"), a.setAttribute("filter", "url(" + locationHref + "#" + i + ")"), a.appendChild(l), a.appendChild(this.layerElement), t = a, !featureSupport.maskType) {
            n.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter());
            var s = document.createElementNS(svgNS, "g");
            a.appendChild(l), s.appendChild(this.layerElement), t = s, a.appendChild(s)
          }
          this.globalData.defs.appendChild(n)
        }
      } else(this.data.hasMask || this.data.tt) && this.data.tt ? (this.matteElement = document.createElementNS(svgNS, "g"), this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (!this.data.ln && !this.data.cl || 4 !== this.data.ty && 0 !== this.data.ty || (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)), 0 === this.data.ty) {
        var h = document.createElementNS(svgNS, "clipPath"),
          p = document.createElementNS(svgNS, "path");
        p.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var c = "cp_" + randomString(8);
        if (h.setAttribute("id", c), h.appendChild(p), this.globalData.defs.appendChild(h), this.checkMasks()) {
          var d = document.createElementNS(svgNS, "g");
          d.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")"), d.appendChild(this.layerElement), this.transformedElement = d, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
        } else this.layerElement.setAttribute("clip-path", "url(" + locationHref + "#" + c + ")")
      }
      0 !== this.data.bm && this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.data.ef && (this.effectsManager = new SVGEffects(this)), this.checkParenting()
    }, SVGBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, SVGBaseElement.prototype.renderFrame = function (t) {
      if (3 === this.data.ty || this.data.hd || !this.isVisible) return !1;
      this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.firstFrame || this.finalTransform.op.mdf, this.finalTransform.matMdf = this.firstFrame || this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
      var e, i = this.finalTransform.mat;
      if (this.hierarchy) {
        var r = 0,
          s = this.hierarchy.length;
        if (!this.finalTransform.matMdf)
          for (; r < s;) {
            if (this.hierarchy[r].finalTransform.mProp.mdf) {
              this.finalTransform.matMdf = !0;
              break
            }
            r += 1
          }
        if (this.finalTransform.matMdf)
          for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), r = 0; r < s; r += 1) e = this.hierarchy[r].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
      } else this.isVisible && (i = this.finalTransform.mProp.v);
      return this.finalTransform.matMdf && this.layerElement && this.transformedElement.setAttribute("transform", i.to2dCSS()), this.finalTransform.opMdf && this.layerElement && (this.finalTransform.op.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.hidden && this.isTransparent && (this.isTransparent = !1, this.show()), this.transformedElement.setAttribute("opacity", this.finalTransform.op.v)), this.data.hasMask && this.maskManager.renderFrame(i), this.effectsManager && this.effectsManager.renderFrame(this.firstFrame), this.isVisible
    }, SVGBaseElement.prototype.destroy = function () {
      this.layerElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && this.maskManager.destroy()
    }, SVGBaseElement.prototype.getBaseElement = function () {
      return this.baseElement
    }, SVGBaseElement.prototype.addMasks = function (t) {
      this.maskManager = new MaskElement(t, this, this.globalData)
    }, SVGBaseElement.prototype.setMatte = function (t) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + locationHref + "#" + t + ")")
    }, SVGBaseElement.prototype.hide = function () {
      this.hidden || (this.layerElement.style.display = "none", this.hidden = !0)
    }, SVGBaseElement.prototype.show = function () {
      this.isVisible && !this.isTransparent && (this.hidden = !1, this.layerElement.style.display = "block")
    }, createElement(SVGBaseElement, IShapeElement), IShapeElement.prototype.identityMatrix = new Matrix, IShapeElement.prototype.lcEnum = {
      1: "butt",
      2: "round",
      3: "square"
    }, IShapeElement.prototype.ljEnum = {
      1: "miter",
      2: "round",
      3: "butt"
    }, IShapeElement.prototype.searchProcessedElement = function (t) {
      for (var e = this.processedElements.length; e;)
        if (e -= 1, this.processedElements[e].elem === t) return this.processedElements[e].pos;
      return 0
    }, IShapeElement.prototype.addProcessedElement = function (t, e) {
      for (var i = this.processedElements.length; i;)
        if (i -= 1, this.processedElements[i].elem === t) {
          this.processedElements[i].pos = e;
          break
        } 0 === i && this.processedElements.push({
        elem: t,
        pos: e
      })
    }, IShapeElement.prototype.buildExpressionInterface = function () {}, IShapeElement.prototype.createElements = function () {
      this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), this.data.hd && !this.data.td || styleUnselectableDiv(this.layerElement)
    }, IShapeElement.prototype.setGradientData = function (t, e, i) {
      var r, s = "gr_" + randomString(10);
      r = 1 === e.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", s), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
      var n, a, o, l = [];
      for (o = 4 * e.g.p, a = 0; a < o; a += 4) n = document.createElementNS(svgNS, "stop"), r.appendChild(n), l.push(n);
      t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(#" + s + ")"), this.globalData.defs.appendChild(r), i.gf = r, i.cst = l
    }, IShapeElement.prototype.setGradientOpacity = function (t, e, i) {
      if (t.g.k.k[0].s && t.g.k.k[0].s.length > 4 * t.g.p || t.g.k.k.length > 4 * t.g.p) {
        var r, s, n, a, o = document.createElementNS(svgNS, "mask"),
          l = document.createElementNS(svgNS, "path");
        o.appendChild(l);
        var h = "op_" + randomString(10),
          p = "mk_" + randomString(10);
        o.setAttribute("id", p), r = 1 === t.t ? document.createElementNS(svgNS, "linearGradient") : document.createElementNS(svgNS, "radialGradient"), r.setAttribute("id", h), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var c = [];
        for (n = 4 * t.g.p; n < a; n += 2) s = document.createElementNS(svgNS, "stop"), s.setAttribute("stop-color", "rgb(255,255,255)"), r.appendChild(s), c.push(s);
        return l.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(#" + h + ")"), this.globalData.defs.appendChild(r), this.globalData.defs.appendChild(o), e.of = r, e.ost = c, i.msElem = l, p
      }
    }, IShapeElement.prototype.createStyleElement = function (t, e, i) {
      var r = {},
        s = {
          data: t,
          type: t.ty,
          d: "",
          ld: "",
          lvl: e,
          mdf: !1,
          closed: !1
        },
        n = document.createElementNS(svgNS, "path");
      if (r.o = PropertyFactory.getProp(this, t.o, 0, .01, i), ("st" == t.ty || "gs" == t.ty) && (n.setAttribute("stroke-linecap", this.lcEnum[t.lc] || "round"), n.setAttribute("stroke-linejoin", this.ljEnum[t.lj] || "round"), n.setAttribute("fill-opacity", "0"), 1 == t.lj && n.setAttribute("stroke-miterlimit", t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, i), t.d)) {
        var a = PropertyFactory.getDashProp(this, t.d, "svg", i);
        a.k || (n.setAttribute("stroke-dasharray", a.dasharray), n.setAttribute("stroke-dashoffset", a.dashoffset)), r.d = a
      }
      if ("fl" == t.ty || "st" == t.ty) r.c = PropertyFactory.getProp(this, t.c, 1, 255, i);
      else {
        r.g = PropertyFactory.getGradientProp(this, t.g, i), 2 == t.t && (r.h = PropertyFactory.getProp(this, t.h, 0, .01, i), r.a = PropertyFactory.getProp(this, t.a, 0, degToRads, i)), r.s = PropertyFactory.getProp(this, t.s, 1, null, i), r.e = PropertyFactory.getProp(this, t.e, 1, null, i), this.setGradientData(n, t, r, s);
        var o = this.setGradientOpacity(t, r, s);
        o && n.setAttribute("mask", "url(#" + o + ")")
      }
      return r.elem = n, 2 === t.r && n.setAttribute("fill-rule", "evenodd"), t.ln && n.setAttribute("id", t.ln), t.cl && n.setAttribute("class", t.cl), s.pElem = n, this.stylesList.push(s), r.style = s, r
    }, IShapeElement.prototype.createGroupElement = function (t) {
      var e = {
          it: [],
          prevViewData: []
        },
        i = document.createElementNS(svgNS, "g");
      return e.gr = i, t.ln && e.gr.setAttribute("id", t.ln), e
    }, IShapeElement.prototype.createTransformElement = function (t, e) {
      return {
        transform: {
          op: PropertyFactory.getProp(this, t.o, 0, .01, e),
          mProps: PropertyFactory.getProp(this, t, 2, null, e)
        },
        elements: []
      }
    }, IShapeElement.prototype.createShapeElement = function (t, e, i, r) {
      var s = {
          elements: [],
          caches: [],
          styles: [],
          transformers: e,
          lStr: ""
        },
        n = 4;
      return "rc" == t.ty ? n = 5 : "el" == t.ty ? n = 6 : "sr" == t.ty && (n = 7), s.sh = ShapePropertyFactory.getShapeProp(this, t, n, r), s.lvl = i, this.shapes.push(s.sh), this.addShapeToModifiers(s), s
    };
    var cont = 0;
    IShapeElement.prototype.setElementStyles = function () {
      var t, e = this.stylesList.length,
        i = [];
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || i.push(this.stylesList[t]);
      return i
    }, IShapeElement.prototype.reloadShapes = function () {
      this.firstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0);
      var t, e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers()
    }, IShapeElement.prototype.searchShapes = function (t, e, i, r, s, n, a, o) {
      var l, h, p, c, d, u, f = [].concat(a),
        m = t.length - 1,
        g = [],
        v = [];
      for (l = m; l >= 0; l -= 1) {
        if (u = this.searchProcessedElement(t[l]), u ? e[l] = i[u - 1] : t[l]._render = o, "fl" == t[l].ty || "st" == t[l].ty || "gf" == t[l].ty || "gs" == t[l].ty) u ? e[l].style.closed = !1 : e[l] = this.createStyleElement(t[l], n, s), t[l]._render && r.appendChild(e[l].elem), g.push(e[l].style);
        else if ("gr" == t[l].ty) {
          if (u)
            for (p = e[l].it.length, h = 0; h < p; h += 1) e[l].prevViewData[h] = e[l].it[h];
          else e[l] = this.createGroupElement(t[l]);
          this.searchShapes(t[l].it, e[l].it, e[l].prevViewData, e[l].gr, s, n + 1, f, o), t[l]._render && r.appendChild(e[l].gr)
        } else "tr" == t[l].ty ? (u || (e[l] = this.createTransformElement(t[l], s)), c = e[l].transform, f.push(c)) : "sh" == t[l].ty || "rc" == t[l].ty || "el" == t[l].ty || "sr" == t[l].ty ? (u || (e[l] = this.createShapeElement(t[l], f, n, s)), e[l].elements = this.setElementStyles()) : "tm" == t[l].ty || "rd" == t[l].ty || "ms" == t[l].ty ? (u ? (d = e[l], d.closed = !1) : (d = ShapeModifiers.getModifier(t[l].ty), d.init(this, t[l], s), e[l] = d, this.shapeModifiers.push(d)), v.push(d)) : "rp" == t[l].ty && (u ? (d = e[l], d.closed = !0) : (d = ShapeModifiers.getModifier(t[l].ty), e[l] = d, d.init(this, t, l, e, s), this.shapeModifiers.push(d), o = !1), v.push(d));
        this.addProcessedElement(t[l], l + 1)
      }
      for (m = g.length, l = 0; l < m; l += 1) g[l].closed = !0;
      for (m = v.length, l = 0; l < m; l += 1) v[l].closed = !0
    }, IShapeElement.prototype.addShapeToModifiers = function (t) {
      var e, i = this.shapeModifiers.length;
      for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t)
    }, IShapeElement.prototype.renderModifiers = function () {
      if (this.shapeModifiers.length) {
        var t, e = this.shapes.length;
        for (t = 0; t < e; t += 1) this.shapes[t].reset();
        for (e = this.shapeModifiers.length, t = e - 1; t >= 0; t -= 1) this.shapeModifiers[t].processShapes(this.firstFrame)
      }
    }, IShapeElement.prototype.renderFrame = function (t) {
      if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
      this.hidden && (this.layerElement.style.display = "block", this.hidden = !1), this.renderModifiers();
      var e, i = this.stylesList.length;
      for (e = 0; e < i; e += 1) this.stylesList[e].d = "", this.stylesList[e].mdf = !1;
      for (this.renderShape(this.shapesData, this.itemsData, null), e = 0; e < i; e += 1) "0" === this.stylesList[e].ld && (this.stylesList[e].ld = "1", this.stylesList[e].pElem.style.display = "block"), (this.stylesList[e].mdf || this.firstFrame) && (this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].msElem && this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d));
      this.firstFrame && (this.firstFrame = !1)
    }, IShapeElement.prototype.hide = function () {
      if (!this.hidden) {
        this.layerElement.style.display = "none";
        var t, e = this.stylesList.length;
        for (t = e - 1; t >= 0; t -= 1) "0" !== this.stylesList[t].ld && (this.stylesList[t].ld = "0", this.stylesList[t].pElem.style.display = "none", this.stylesList[t].pElem.parentNode && (this.stylesList[t].parent = this.stylesList[t].pElem.parentNode));
        this.hidden = !0
      }
    }, IShapeElement.prototype.renderShape = function (t, e, i) {
      var r, s, n = t.length - 1;
      for (r = n; r >= 0; r -= 1) s = t[r].ty, "tr" == s ? ((this.firstFrame || e[r].transform.op.mdf && i) && i.setAttribute("opacity", e[r].transform.op.v), (this.firstFrame || e[r].transform.mProps.mdf && i) && i.setAttribute("transform", e[r].transform.mProps.v.to2dCSS())) : "sh" == s || "el" == s || "rc" == s || "sr" == s ? this.renderPath(t[r], e[r]) : "fl" == s ? this.renderFill(t[r], e[r]) : "gf" == s ? this.renderGradient(t[r], e[r]) : "gs" == s ? (this.renderGradient(t[r], e[r]), this.renderStroke(t[r], e[r])) : "st" == s ? this.renderStroke(t[r], e[r]) : "gr" == s && this.renderShape(t[r].it, e[r].it, e[r].gr)
    }, IShapeElement.prototype.buildShapeString = function (t, e, i, r) {
      var s, n = "";
      for (s = 1; s < e; s += 1) 1 === s && (n += " M" + r.applyToPointStringified(t.v[0][0], t.v[0][1])), n += " C" + r.applyToPointStringified(t.o[s - 1][0], t.o[s - 1][1]) + " " + r.applyToPointStringified(t.i[s][0], t.i[s][1]) + " " + r.applyToPointStringified(t.v[s][0], t.v[s][1]);
      return 1 === e && (n += " M" + r.applyToPointStringified(t.v[0][0], t.v[0][1])), i && e && (n += " C" + r.applyToPointStringified(t.o[s - 1][0], t.o[s - 1][1]) + " " + r.applyToPointStringified(t.i[0][0], t.i[0][1]) + " " + r.applyToPointStringified(t.v[0][0], t.v[0][1]), n += "z"), n
    }, IShapeElement.prototype.renderPath = function (t, e) {
      var i, r, s, n, a, o, l = e.elements.length,
        h = e.lvl;
      if (t._render)
        for (o = 0; o < l; o += 1)
          if (e.elements[o].data._render) {
            n = e.sh.mdf || this.firstFrame, s = "M0 0";
            var p = e.sh.paths;
            if (r = p._length, e.elements[o].lvl < h) {
              for (var c, d = this.mHelper.reset(), u = h - e.elements[o].lvl, f = e.transformers.length - 1; u > 0;) n = e.transformers[f].mProps.mdf || n, c = e.transformers[f].mProps.v.props, d.transform(c[0], c[1], c[2], c[3], c[4], c[5], c[6], c[7], c[8], c[9], c[10], c[11], c[12], c[13], c[14], c[15]), u--, f--;
              if (n) {
                for (i = 0; i < r; i += 1)(a = p.shapes[i]) && a._length && (s += this.buildShapeString(a, a._length, a.c, d));
                e.caches[o] = s
              } else s = e.caches[o]
            } else if (n) {
              for (i = 0; i < r; i += 1)(a = p.shapes[i]) && a._length && (s += this.buildShapeString(a, a._length, a.c, this.identityMatrix));
              e.caches[o] = s
            } else s = e.caches[o];
            e.elements[o].d += s, e.elements[o].mdf = n || e.elements[o].mdf
          } else e.elements[o].mdf = !0
    }, IShapeElement.prototype.renderFill = function (t, e) {
      var i = e.style;
      (e.c.mdf || this.firstFrame) && i.pElem.setAttribute("fill", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && i.pElem.setAttribute("fill-opacity", e.o.v)
    }, IShapeElement.prototype.renderGradient = function (t, e) {
      var i = e.gf,
        r = e.of,
        s = e.s.v,
        n = e.e.v;
      if (e.o.mdf || this.firstFrame) {
        var a = "gf" === t.ty ? "fill-opacity" : "stroke-opacity";
        e.elem.setAttribute(a, e.o.v)
      }
      if (e.s.mdf || this.firstFrame) {
        var o = 1 === t.t ? "x1" : "cx",
          l = "x1" === o ? "y1" : "cy";
        i.setAttribute(o, s[0]), i.setAttribute(l, s[1]), r && (r.setAttribute(o, s[0]), r.setAttribute(l, s[1]))
      }
      var h, p, c, d;
      if (e.g.cmdf || this.firstFrame) {
        h = e.cst;
        var u = e.g.c;
        for (c = h.length, p = 0; p < c; p += 1) d = h[p], d.setAttribute("offset", u[4 * p] + "%"), d.setAttribute("stop-color", "rgb(" + u[4 * p + 1] + "," + u[4 * p + 2] + "," + u[4 * p + 3] + ")")
      }
      if (r && (e.g.omdf || this.firstFrame)) {
        h = e.ost;
        var f = e.g.o;
        for (c = h.length, p = 0; p < c; p += 1) d = h[p], d.setAttribute("offset", f[2 * p] + "%"), d.setAttribute("stop-opacity", f[2 * p + 1])
      }
      if (1 === t.t)(e.e.mdf || this.firstFrame) && (i.setAttribute("x2", n[0]), i.setAttribute("y2", n[1]), r && (r.setAttribute("x2", n[0]), r.setAttribute("y2", n[1])));
      else {
        var m;
        if ((e.s.mdf || e.e.mdf || this.firstFrame) && (m = Math.sqrt(Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2)), i.setAttribute("r", m), r && r.setAttribute("r", m)), e.e.mdf || e.h.mdf || e.a.mdf || this.firstFrame) {
          m || (m = Math.sqrt(Math.pow(s[0] - n[0], 2) + Math.pow(s[1] - n[1], 2)));
          var g = Math.atan2(n[1] - s[1], n[0] - s[0]),
            v = e.h.v >= 1 ? .99 : e.h.v <= -1 ? -.99 : e.h.v,
            y = m * v,
            _ = Math.cos(g + e.a.v) * y + s[0],
            b = Math.sin(g + e.a.v) * y + s[1];
          i.setAttribute("fx", _), i.setAttribute("fy", b), r && (r.setAttribute("fx", _), r.setAttribute("fy", b))
        }
      }
    }, IShapeElement.prototype.renderStroke = function (t, e) {
      var i = e.style,
        r = e.d;
      r && r.k && (r.mdf || this.firstFrame) && (i.pElem.setAttribute("stroke-dasharray", r.dasharray), i.pElem.setAttribute("stroke-dashoffset", r.dashoffset)), e.c && (e.c.mdf || this.firstFrame) && i.pElem.setAttribute("stroke", "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || this.firstFrame) && i.pElem.setAttribute("stroke-opacity", e.o.v), (e.w.mdf || this.firstFrame) && (i.pElem.setAttribute("stroke-width", e.w.v), i.msElem && i.msElem.setAttribute("stroke-width", e.w.v))
    }, IShapeElement.prototype.destroy = function () {
      this._parent.destroy.call(this._parent), this.shapeData = null, this.itemsData = null, this.parentContainer = null, this.placeholder = null
    }, ITextElement.prototype.init = function () {
      this.lettersChangedFlag = !0, this.dynamicProperties = this.dynamicProperties || [], this.textAnimator = new TextAnimatorProperty(this.data.t, this.renderType, this), this.textProperty = new TextProperty(this, this.data.t, this.dynamicProperties), this._parent.init.call(this), this.textAnimator.searchProperties(this.dynamicProperties)
    }, ITextElement.prototype.prepareFrame = function (t) {
      this._parent.prepareFrame.call(this, t), (this.textProperty.mdf || this.textProperty.firstFrame) && (this.buildNewText(), this.textProperty.firstFrame = !1)
    }, ITextElement.prototype.createPathShape = function (t, e) {
      var i, r, s = e.length,
        n = "";
      for (i = 0; i < s; i += 1) r = e[i].ks.k, n += this.buildShapeString(r, r.i.length, !0, t);
      return n
    }, ITextElement.prototype.updateDocumentData = function (t, e) {
      this.textProperty.updateDocumentData(t, e)
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, r, s) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0)
      }
      e.translate(r, s, 0)
    }, ITextElement.prototype.buildColor = function (t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")"
    }, ITextElement.prototype.buildShapeString = IShapeElement.prototype.buildShapeString, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function () {
      this._parent.destroy.call(this._parent)
    }, createElement(SVGBaseElement, SVGTextElement), extendPrototype(ITextElement, SVGTextElement), SVGTextElement.prototype.createElements = function () {
      this._parent.createElements.call(this), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = document.createElementNS(svgNS, "text"))
    }, SVGTextElement.prototype.buildNewText = function () {
      var t, e, i = this.textProperty.currentData;
      this.renderedLetters = Array.apply(null, {
        length: i ? i.l.length : 0
      }), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.s);
      var r = this.globalData.fontManager.getFontByName(i.f);
      if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
      else {
        this.layerElement.setAttribute("font-family", r.fFamily);
        var s = i.fWeight,
          n = i.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", s)
      }
      var a = i.l || [],
        o = this.globalData.fontManager.chars;
      if (e = a.length) {
        var l, h, p = this.mHelper,
          c = "",
          d = this.data.singleShape,
          u = 0,
          f = 0,
          m = !0,
          g = i.tr / 1e3 * i.s;
        if (d && !o) {
          var v = this.textContainer,
            y = "";
          switch (i.j) {
            case 1:
              y = "end";
              break;
            case 2:
              y = "middle";
              break;
            case 2:
              y = "start"
          }
          v.setAttribute("text-anchor", y), v.setAttribute("letter-spacing", g);
          var _ = i.t.split(String.fromCharCode(13));
          e = _.length;
          var f = i.ps ? i.ps[1] + i.ascent : 0;
          for (t = 0; t < e; t += 1) l = this.textSpans[t] || document.createElementNS(svgNS, "tspan"), l.textContent = _[t], l.setAttribute("x", 0), l.setAttribute("y", f), l.style.display = "inherit", v.appendChild(l), this.textSpans[t] = l, f += i.lh;
          this.layerElement.appendChild(v)
        } else {
          var b, T, E = this.textSpans.length;
          for (t = 0; t < e; t += 1) o && d && 0 !== t || (l = E > t ? this.textSpans[t] : document.createElementNS(svgNS, o ? "path" : "text"), E <= t && (l.setAttribute("stroke-linecap", "butt"), l.setAttribute("stroke-linejoin", "round"), l.setAttribute("stroke-miterlimit", "4"), this.textSpans[t] = l, this.layerElement.appendChild(l)), l.style.display = "inherit"), p.reset(), o ? (p.scale(i.s / 100, i.s / 100), d && (a[t].n && (u = -g, f += i.yOffset, f += m ? 1 : 0, m = !1), this.applyTextPropertiesToMatrix(i, p, a[t].line, u, f), u += a[t].l || 0, u += g), T = this.globalData.fontManager.getCharData(i.t.charAt(t), r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily), b = T && T.data || {}, h = b.shapes ? b.shapes[0].it : [], d ? c += this.createPathShape(p, h) : l.setAttribute("d", this.createPathShape(p, h))) : (l.textContent = a[t].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
          d && l.setAttribute("d", c)
        }
        for (; t < this.textSpans.length;) this.textSpans[t].style.display = "none", t += 1;
        this._sizeChanged = !0
      }
    }, SVGTextElement.prototype.sourceRectAtTime = function (t) {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderLetters(), this._sizeChanged) {
        this._sizeChanged = !1;
        var e = this.layerElement.getBBox();
        this.bbox = {
          top: e.y,
          left: e.x,
          width: e.width,
          height: e.height
        }
      }
      return this.bbox
    }, SVGTextElement.prototype.renderLetters = function () {
      if (!this.data.singleShape && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        this._sizeChanged = !0;
        var t, e, i = this.textAnimator.renderedLetters,
          r = this.textProperty.currentData.l;
        e = r.length;
        var s, n;
        for (t = 0; t < e; t += 1) r[t].n || (s = i[t], n = this.textSpans[t], s.mdf.m && n.setAttribute("transform", s.m), s.mdf.o && n.setAttribute("opacity", s.o), s.mdf.sw && n.setAttribute("stroke-width", s.sw), s.mdf.sc && n.setAttribute("stroke", s.sc), s.mdf.fc && n.setAttribute("fill", s.fc))
      }
    }, SVGTextElement.prototype.renderFrame = function (t) {
      if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
      this.hidden && this.show(), this.firstFrame && (this.firstFrame = !1), this.renderLetters()
    }, SVGTintFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager.mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          i = this.filterManager.effectElements[1].p.v,
          r = this.filterManager.effectElements[2].p.v / 100;
        this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 " + r + " 0")
      }
    }, SVGFillFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager.mdf) {
        var e = this.filterManager.effectElements[2].p.v,
          i = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0")
      }
    }, SVGStrokeEffect.prototype.initialize = function () {
      var t, e, i, r, s = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (1 === this.filterManager.effectElements[1].p.v ? (r = this.elem.maskManager.masksProperties.length, i = 0) : (i = this.filterManager.effectElements[0].p.v - 1, r = i + 1), e = document.createElementNS(svgNS, "g"), e.setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1), i; i < r; i += 1) t = document.createElementNS(svgNS, "path"), e.appendChild(t), this.paths.push({
        p: t,
        m: i
      });
      if (3 === this.filterManager.effectElements[10].p.v) {
        var n = document.createElementNS(svgNS, "mask"),
          a = "stms_" + randomString(10);
        n.setAttribute("id", a), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
        var o = document.createElementNS(svgNS, "g");
        o.setAttribute("mask", "url(" + locationHref + "#" + a + ")"), s[0] && o.appendChild(s[0]), this.elem.layerElement.appendChild(o), this.masker = n, e.setAttribute("stroke", "#fff")
      } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
        if (2 === this.filterManager.effectElements[10].p.v)
          for (var s = this.elem.layerElement.children || this.elem.layerElement.childNodes; s.length;) this.elem.layerElement.removeChild(s[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff")
      }
      this.initialized = !0, this.pathMasker = e
    }, SVGStrokeEffect.prototype.renderFrame = function (t) {
      this.initialized || this.initialize();
      var e, i, r, s = this.paths.length;
      for (e = 0; e < s; e += 1)
        if (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager.mdf || i.prop.mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p.mdf || this.filterManager.effectElements[4].p.mdf || this.filterManager.effectElements[7].p.mdf || this.filterManager.effectElements[8].p.mdf || i.prop.mdf) {
          var n;
          if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
            var a = Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              o = Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v) / 100,
              l = r.getTotalLength();
            n = "0 0 0 " + l * a + " ";
            var h, p = l * (o - a),
              c = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100,
              d = Math.floor(p / c);
            for (h = 0; h < d; h += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100 + " ";
            n += "0 " + 10 * l + " 0 0"
          } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v / 100;
          r.setAttribute("stroke-dasharray", n)
        } if ((t || this.filterManager.effectElements[4].p.mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p.mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (t || this.filterManager.effectElements[3].p.mdf)) {
        var u = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bm_floor(255 * u[0]) + "," + bm_floor(255 * u[1]) + "," + bm_floor(255 * u[2]) + ")")
      }
    }, SVGTritoneFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager.mdf) {
        var e = this.filterManager.effectElements[0].p.v,
          i = this.filterManager.effectElements[1].p.v,
          r = this.filterManager.effectElements[2].p.v,
          s = r[0] + " " + i[0] + " " + e[0],
          n = r[1] + " " + i[1] + " " + e[1],
          a = r[2] + " " + i[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", s), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", a)
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
      var i = document.createElementNS(svgNS, t);
      return i.setAttribute("type", "table"), e.appendChild(i), i
    }, SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, r, s) {
      for (var n, a, o = 0, l = Math.min(t, e), h = Math.max(t, e), p = Array.call(null, {
          length: 256
        }), c = 0, d = s - r, u = e - t; o <= 256;) n = o / 256, a = n <= l ? u < 0 ? s : r : n >= h ? u < 0 ? r : s : r + d * Math.pow((n - t) / u, 1 / i), p[c++] = a, o += 256 / 255;
      return p.join(" ")
    }, SVGProLevelsFilter.prototype.renderFrame = function (t) {
      if (t || this.filterManager.mdf) {
        var e, i = this.filterManager.effectElements;
        this.feFuncRComposed && (t || i[2].p.mdf || i[3].p.mdf || i[4].p.mdf || i[5].p.mdf || i[6].p.mdf) && (e = this.getTableValue(i[2].p.v, i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[9].p.mdf || i[10].p.mdf || i[11].p.mdf || i[12].p.mdf || i[13].p.mdf) && (e = this.getTableValue(i[9].p.v, i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[16].p.mdf || i[17].p.mdf || i[18].p.mdf || i[19].p.mdf || i[20].p.mdf) && (e = this.getTableValue(i[16].p.v, i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[23].p.mdf || i[24].p.mdf || i[25].p.mdf || i[26].p.mdf || i[27].p.mdf) && (e = this.getTableValue(i[23].p.v, i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[30].p.mdf || i[31].p.mdf || i[32].p.mdf || i[33].p.mdf || i[34].p.mdf) && (e = this.getTableValue(i[30].p.v, i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v), this.feFuncA.setAttribute("tableValues", e))
      }
    }, SVGDropShadowEffect.prototype.renderFrame = function (t) {
      if (t || this.filterManager.mdf) {
        if ((t || this.filterManager.effectElements[4].p.mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p.mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])))
        }
        if ((t || this.filterManager.effectElements[1].p.mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p.mdf || this.filterManager.effectElements[3].p.mdf) {
          var i = this.filterManager.effectElements[3].p.v,
            r = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
            s = i * Math.cos(r),
            n = i * Math.sin(r);
          this.feOffset.setAttribute("dx", s), this.feOffset.setAttribute("dy", n)
        }
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
      var i = document.createElementNS(svgNS, "mask");
      i.setAttribute("id", e.layerId), i.setAttribute("mask-type", "alpha"), i.appendChild(e.layerElement), t.setMatte(e.layerId), e.data.hd = !1, t.globalData.defs.appendChild(i)
    }, SVGMatte3Effect.prototype.initialize = function () {
      for (var t = this.filterManager.effectElements[0].p.v, e = 0, i = this.elem.comp.elements.length; e < i;) this.elem.comp.elements[e].data.ind === t && this.setElementAsMask(this.elem, this.elem.comp.elements[e]), e += 1;
      this.initialized = !0
    }, SVGMatte3Effect.prototype.renderFrame = function () {
      this.initialized || this.initialize()
    }, SVGEffects.prototype.renderFrame = function (t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t)
    }, createElement(SVGBaseElement, ICompElement), ICompElement.prototype.hide = function () {
      if (!this.hidden) {
        this._parent.hide.call(this);
        var t, e = this.elements.length;
        for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].hide()
      }
    }, ICompElement.prototype.prepareFrame = function (t) {
      if (this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
        if (this.tm) {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e
        } else this.renderedFrame = t / this.data.sr;
        var i, r = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st)
      }
    }, ICompElement.prototype.renderFrame = function (t) {
      var e, i = this._parent.renderFrame.call(this, t),
        r = this.layers.length;
      if (!1 === i) return void this.hide();
      for (this.hidden && this.show(), e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      this.firstFrame && (this.firstFrame = !1)
    }, ICompElement.prototype.setElements = function (t) {
      this.elements = t
    }, ICompElement.prototype.getElements = function () {
      return this.elements
    }, ICompElement.prototype.destroy = function () {
      this._parent.destroy.call(this._parent);
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy()
    }, ICompElement.prototype.checkLayers = SVGRenderer.prototype.checkLayers, ICompElement.prototype.buildItem = SVGRenderer.prototype.buildItem, ICompElement.prototype.buildAllItems = SVGRenderer.prototype.buildAllItems, ICompElement.prototype.buildElementParenting = SVGRenderer.prototype.buildElementParenting, ICompElement.prototype.createItem = SVGRenderer.prototype.createItem, ICompElement.prototype.createImage = SVGRenderer.prototype.createImage, ICompElement.prototype.createComp = SVGRenderer.prototype.createComp, ICompElement.prototype.createSolid = SVGRenderer.prototype.createSolid, ICompElement.prototype.createShape = SVGRenderer.prototype.createShape, ICompElement.prototype.createText = SVGRenderer.prototype.createText, ICompElement.prototype.createBase = SVGRenderer.prototype.createBase, ICompElement.prototype.appendElementInPos = SVGRenderer.prototype.appendElementInPos, ICompElement.prototype.checkPendingElements = SVGRenderer.prototype.checkPendingElements, ICompElement.prototype.addPendingElement = SVGRenderer.prototype.addPendingElement, createElement(SVGBaseElement, IImageElement), IImageElement.prototype.createElements = function () {
      var t = this.globalData.getAssetsPath(this.assetData);
      this._parent.createElements.call(this), this.innerElem = document.createElementNS(svgNS, "image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", "xMidYMid slice"), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.maskedElement = this.innerElem, this.layerElement.appendChild(this.innerElem), this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, IImageElement.prototype.renderFrame = function (t) {
      if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
      this.hidden && this.show(), this.firstFrame && (this.firstFrame = !1)
    }, IImageElement.prototype.destroy = function () {
      this._parent.destroy.call(this._parent), this.innerElem = null
    }, createElement(SVGBaseElement, ISolidElement), ISolidElement.prototype.createElements = function () {
      this._parent.createElements.call(this);
      var t = document.createElementNS(svgNS, "rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t), this.innerElem = t, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl)
    }, ISolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, ISolidElement.prototype.destroy = IImageElement.prototype.destroy;
    var animationManager = function () {
        function t(t) {
          for (var e = 0, i = t.target; e < x;) E[e].animation === i && (E.splice(e, 1), e -= 1, x -= 1, i.isPaused || r()), e += 1
        }

        function e(t, e) {
          if (!t) return null;
          for (var i = 0; i < x;) {
            if (E[i].elem == t && null !== E[i].elem) return E[i].animation;
            i += 1
          }
          var r = new AnimationItem;
          return s(r, t), r.setData(t, e), r
        }

        function i() {
          C += 1, b()
        }

        function r() {
          0 === (C -= 1) && (S = !0)
        }

        function s(e, s) {
          e.addEventListener("destroy", t), e.addEventListener("_active", i), e.addEventListener("_idle", r), E.push({
            elem: s,
            animation: e
          }), x += 1
        }

        function n(t) {
          var e = new AnimationItem;
          return s(e, null), e.setParams(t), e
        }

        function a(t, e) {
          var i;
          for (i = 0; i < x; i += 1) E[i].animation.setSpeed(t, e)
        }

        function o(t, e) {
          var i;
          for (i = 0; i < x; i += 1) E[i].animation.setDirection(t, e)
        }

        function l(t) {
          var e;
          for (e = 0; e < x; e += 1) E[e].animation.play(t)
        }

        function h(t, e) {
          w = Date.now();
          var i;
          for (i = 0; i < x; i += 1) E[i].animation.moveFrame(t, e)
        }

        function p(t) {
          var e, i = t - w;
          for (e = 0; e < x; e += 1) E[e].animation.advanceTime(i);
          w = t, S || window.requestAnimationFrame(p)
        }

        function c(t) {
          w = t, window.requestAnimationFrame(p)
        }

        function d(t) {
          var e;
          for (e = 0; e < x; e += 1) E[e].animation.pause(t)
        }

        function u(t, e, i) {
          var r;
          for (r = 0; r < x; r += 1) E[r].animation.goToAndStop(t, e, i)
        }

        function f(t) {
          var e;
          for (e = 0; e < x; e += 1) E[e].animation.stop(t)
        }

        function m(t) {
          var e;
          for (e = 0; e < x; e += 1) E[e].animation.togglePause(t)
        }

        function g(t) {
          var e;
          for (e = x - 1; e >= 0; e -= 1) E[e].animation.destroy(t)
        }

        function v(t, i, r) {
          var s, n = document.getElementsByClassName("bodymovin"),
            a = n.length;
          for (s = 0; s < a; s += 1) r && n[s].setAttribute("data-bm-type", r), e(n[s], t);
          if (i && 0 === a) {
            r || (r = "svg");
            var o = document.getElementsByTagName("body")[0];
            o.innerHTML = "";
            var l = document.createElement("div");
            l.style.width = "100%", l.style.height = "100%", l.setAttribute("data-bm-type", r), o.appendChild(l), e(l, t)
          }
        }

        function y() {
          var t;
          for (t = 0; t < x; t += 1) E[t].animation.resize()
        }

        function _() {
          window.requestAnimationFrame(c)
        }

        function b() {
          S && (S = !1, window.requestAnimationFrame(c))
        }
        var T = {},
          E = [],
          w = 0,
          x = 0,
          S = !0,
          C = 0;
        return setTimeout(_, 0), T.registerAnimation = e, T.loadAnimation = n, T.setSpeed = a, T.setDirection = o, T.play = l, T.moveFrame = h, T.pause = d, T.stop = f, T.togglePause = m, T.searchAnimations = v, T.resize = y, T.start = _, T.goToAndStop = u, T.destroy = g, T
      }(),
      AnimationItem = function () {
        this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.pendingElements = 0, this.playCount = 0, this.prerenderFramesFlag = !0, this.animationData = {}, this.layers = [], this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = randomString(10), this.scaleMode = "fit", this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.subframeEnabled = subframeEnabled, this.segments = [], this.pendingSegment = !1, this._idle = !0, this.projectInterface = ProjectInterface()
      };
    AnimationItem.prototype.setParams = function (t) {
      var e = this;
      t.context && (this.context = t.context), (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var i = t.animType ? t.animType : t.renderer ? t.renderer : "svg";
      switch (i) {
        case "canvas":
          this.renderer = new CanvasRenderer(this, t.rendererSettings);
          break;
        case "svg":
          this.renderer = new SVGRenderer(this, t.rendererSettings);
          break;
        case "hybrid":
        case "html":
        default:
          this.renderer = new HybridRenderer(this, t.rendererSettings)
      }
      if (this.renderer.setProjectInterface(this.projectInterface), this.animType = i, "" === t.loop || null === t.loop || (!1 === t.loop ? this.loop = !1 : !0 === t.loop ? this.loop = !0 : this.loop = parseInt(t.loop)), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.prerenderFramesFlag = !("prerender" in t) || t.prerender, this.autoloadSegments = !t.hasOwnProperty("autoloadSegments") || t.autoloadSegments, t.animationData) e.configAnimation(t.animationData);
      else if (t.path) {
        "json" != t.path.substr(-4) && ("/" != t.path.substr(-1, 1) && (t.path += "/"), t.path += "data.json");
        var r = new XMLHttpRequest; - 1 != t.path.lastIndexOf("\\") ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.assetsPath = t.assetsPath, this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), r.open("GET", t.path, !0), r.send(), r.onreadystatechange = function () {
          if (4 == r.readyState)
            if (200 == r.status) e.configAnimation(JSON.parse(r.responseText));
            else try {
              var t = JSON.parse(r.responseText);
              e.configAnimation(t)
            } catch (t) {}
        }
      }
    }, AnimationItem.prototype.setData = function (t, e) {
      var i = {
          wrapper: t,
          animationData: e ? "object" == typeof e ? e : JSON.parse(e) : null
        },
        r = t.attributes;
      i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : "canvas";
      var s = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
      "" === s || (i.loop = "false" !== s && ("true" === s || parseInt(s)));
      var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
      i.autoplay = "false" !== n, i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", "false" === (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") && (i.prerender = !1), this.setParams(i)
    }, AnimationItem.prototype.includeLayers = function (t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip), this.animationData.tf = this.totalFrames);
      var e, i, r = this.animationData.layers,
        s = r.length,
        n = t.layers,
        a = n.length;
      for (i = 0; i < a; i += 1)
        for (e = 0; e < s;) {
          if (r[e].id == n[i].id) {
            r[e] = n[i];
            break
          }
          e += 1
        }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets)
        for (s = t.assets.length, e = 0; e < s; e += 1) this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = !1, dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.renderer.includeLayers(t.layers), expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.renderFrame(null), this.loadNextSegment()
    }, AnimationItem.prototype.loadNextSegment = function () {
      var t = this.animationData.segments;
      if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.animationData.tf);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = new XMLHttpRequest,
        r = this,
        s = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, i.open("GET", s, !0), i.send(), i.onreadystatechange = function () {
        if (4 == i.readyState)
          if (200 == i.status) r.includeLayers(JSON.parse(i.responseText));
          else try {
            var t = JSON.parse(i.responseText);
            r.includeLayers(t)
          } catch (t) {}
      }
    }, AnimationItem.prototype.loadSegments = function () {
      this.animationData.segments || (this.timeCompleted = this.animationData.tf), this.loadNextSegment()
    }, AnimationItem.prototype.configAnimation = function (t) {
      var e = this;
      this.renderer && this.renderer.destroyed || (this.animationData = t, this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.animationData.tf = this.totalFrames, this.renderer.configAnimation(t), t.assets || (t.assets = []), t.comps && (t.assets = t.assets.concat(t.comps), t.comps = null), this.renderer.searchExtraCompositions(t.assets), this.layers = this.animationData.layers, this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.firstFrame = Math.round(this.animationData.ip), this.frameMult = this.animationData.fr / 1e3, this.trigger("config_ready"), this.imagePreloader = new ImagePreloader, this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(t.assets, function (t) {
        t || e.trigger("loaded_images")
      }), this.loadSegments(), this.updaFrameModifier(), this.renderer.globalData.fontManager ? this.waitForFontsLoaded() : (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()))
    }, AnimationItem.prototype.waitForFontsLoaded = function () {
      function t() {
        this.renderer.globalData.fontManager.loaded ? (dataManager.completeData(this.animationData, this.renderer.globalData.fontManager), this.checkLoaded()) : setTimeout(t.bind(this), 20)
      }
      return function () {
        t.bind(this)()
      }
    }(), AnimationItem.prototype.addPendingElement = function () {
      this.pendingElements += 1
    }, AnimationItem.prototype.elementLoaded = function () {
      this.pendingElements--, this.checkLoaded()
    }, AnimationItem.prototype.checkLoaded = function () {
      0 === this.pendingElements && (expressionsPlugin && expressionsPlugin.initExpressions(this), this.renderer.initItems(), setTimeout(function () {
        this.trigger("DOMLoaded")
      }.bind(this), 0), this.isLoaded = !0, this.gotoFrame(), this.autoplay && this.play())
    }, AnimationItem.prototype.resize = function () {
      this.renderer.updateContainerSize()
    }, AnimationItem.prototype.setSubframe = function (t) {
      this.subframeEnabled = !!t
    }, AnimationItem.prototype.gotoFrame = function () {
      this.subframeEnabled ? this.currentFrame = this.currentRawFrame : this.currentFrame = Math.floor(this.currentRawFrame), this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame()
    }, AnimationItem.prototype.renderFrame = function () {
      !1 !== this.isLoaded && this.renderer.renderFrame(this.currentFrame + this.firstFrame)
    }, AnimationItem.prototype.play = function (t) {
      t && this.name != t || !0 === this.isPaused && (this.isPaused = !1, this._idle && (this._idle = !1, this.trigger("_active")))
    }, AnimationItem.prototype.pause = function (t) {
      t && this.name != t || !1 === this.isPaused && (this.isPaused = !0, this.pendingSegment || (this._idle = !0, this.trigger("_idle")))
    }, AnimationItem.prototype.togglePause = function (t) {
      t && this.name != t || (!0 === this.isPaused ? this.play() : this.pause())
    }, AnimationItem.prototype.stop = function (t) {
      t && this.name != t || (this.pause(), this.currentFrame = this.currentRawFrame = 0, this.playCount = 0, this.gotoFrame())
    }, AnimationItem.prototype.goToAndStop = function (t, e, i) {
      i && this.name != i || (e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause())
    }, AnimationItem.prototype.goToAndPlay = function (t, e, i) {
      this.goToAndStop(t, e, i), this.play()
    }, AnimationItem.prototype.advanceTime = function (t) {
      if (this.pendingSegment) return this.pendingSegment = !1, this.adjustSegment(this.segments.shift()), void(this.isPaused && this.play());
      !0 !== this.isPaused && !1 !== this.isLoaded && this.setCurrentRawFrameValue(this.currentRawFrame + t * this.frameModifier)
    }, AnimationItem.prototype.updateAnimation = function (t) {
      this.setCurrentRawFrameValue(this.totalFrames * t)
    }, AnimationItem.prototype.moveFrame = function (t, e) {
      e && this.name != e || this.setCurrentRawFrameValue(this.currentRawFrame + t)
    }, AnimationItem.prototype.adjustSegment = function (t) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - .01)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.firstFrame = t[0], this.setCurrentRawFrameValue(0)), this.trigger("segmentStart")
    }, AnimationItem.prototype.setSegment = function (t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t - .01)), this.firstFrame = t, this.totalFrames = e - t, -1 !== i && this.goToAndStop(i, !0)
    }, AnimationItem.prototype.playSegments = function (t, e) {
      if ("object" == typeof t[0]) {
        var i, r = t.length;
        for (i = 0; i < r; i += 1) this.segments.push(t[i])
      } else this.segments.push(t);
      e && this.adjustSegment(this.segments.shift()), this.isPaused && this.play()
    }, AnimationItem.prototype.resetSegments = function (t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip * this.frameRate, Math.floor(this.animationData.op - this.animationData.ip + this.animationData.ip * this.frameRate)]), t && this.adjustSegment(this.segments.shift())
    }, AnimationItem.prototype.checkSegments = function () {
      this.segments.length && (this.pendingSegment = !0)
    }, AnimationItem.prototype.remove = function (t) {
      t && this.name != t || this.renderer.destroy()
    }, AnimationItem.prototype.destroy = function (t) {
      t && this.name != t || this.renderer && this.renderer.destroyed || (this.renderer.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = this.onLoopComplete = this.onComplete = this.onSegmentStart = this.onDestroy = null)
    }, AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
      if (this.currentRawFrame = t, this.currentRawFrame >= this.totalFrames) {
        if (this.checkSegments(), !1 === this.loop) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
        if (this.trigger("loopComplete"), this.playCount += 1, !0 !== this.loop && this.playCount == this.loop || this.pendingSegment) return this.currentRawFrame = this.totalFrames - .01, this.gotoFrame(), this.pause(), void this.trigger("complete");
        this.currentRawFrame = this.currentRawFrame % this.totalFrames
      } else if (this.currentRawFrame < 0) return this.checkSegments(), this.playCount -= 1, this.playCount < 0 && (this.playCount = 0), !1 === this.loop || this.pendingSegment ? (this.currentRawFrame = 0, this.gotoFrame(), this.pause(), void this.trigger("complete")) : (this.trigger("loopComplete"), this.currentRawFrame = (this.totalFrames + this.currentRawFrame) % this.totalFrames, void this.gotoFrame());
      this.gotoFrame()
    }, AnimationItem.prototype.setSpeed = function (t) {
      this.playSpeed = t, this.updaFrameModifier()
    }, AnimationItem.prototype.setDirection = function (t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier()
    }, AnimationItem.prototype.updaFrameModifier = function () {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection
    }, AnimationItem.prototype.getPath = function () {
      return this.path
    }, AnimationItem.prototype.getAssetsPath = function (t) {
      var e = "";
      if (this.assetsPath) {
        var i = t.p; - 1 !== i.indexOf("images/") && (i = i.split("/")[1]), e = this.assetsPath + i
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e
    }, AnimationItem.prototype.getAssetData = function (t) {
      for (var e = 0, i = this.assets.length; e < i;) {
        if (t == this.assets[e].id) return this.assets[e];
        e += 1
      }
    }, AnimationItem.prototype.hide = function () {
      this.renderer.hide()
    }, AnimationItem.prototype.show = function () {
      this.renderer.show()
    }, AnimationItem.prototype.getAssets = function () {
      return this.assets
    }, AnimationItem.prototype.trigger = function (t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult));
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t)
      }
      "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this))
    }, AnimationItem.prototype.addEventListener = _addEventListener, AnimationItem.prototype.removeEventListener = _removeEventListener, AnimationItem.prototype.triggerEvent = _triggerEvent, extendPrototype(BaseRenderer, CanvasRenderer), CanvasRenderer.prototype.createBase = function (t) {
      return new CVBaseElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createShape = function (t) {
      return new CVShapeElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createText = function (t) {
      return new CVTextElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createImage = function (t) {
      return new CVImageElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createComp = function (t) {
      return new CVCompElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.createSolid = function (t) {
      return new CVSolidElement(t, this, this.globalData)
    }, CanvasRenderer.prototype.ctxTransform = function (t) {
      if (1 !== t[0] || 0 !== t[1] || 0 !== t[4] || 1 !== t[5] || 0 !== t[12] || 0 !== t[13]) {
        if (!this.renderConfig.clearCanvas) return void this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        this.transformMat.cloneFromProps(t), this.transformMat.transform(this.contextData.cTr.props[0], this.contextData.cTr.props[1], this.contextData.cTr.props[2], this.contextData.cTr.props[3], this.contextData.cTr.props[4], this.contextData.cTr.props[5], this.contextData.cTr.props[6], this.contextData.cTr.props[7], this.contextData.cTr.props[8], this.contextData.cTr.props[9], this.contextData.cTr.props[10], this.contextData.cTr.props[11], this.contextData.cTr.props[12], this.contextData.cTr.props[13], this.contextData.cTr.props[14], this.contextData.cTr.props[15]), this.contextData.cTr.cloneFromProps(this.transformMat.props);
        var e = this.contextData.cTr.props;
        this.canvasContext.setTransform(e[0], e[1], e[4], e[5], e[12], e[13])
      }
    }, CanvasRenderer.prototype.ctxOpacity = function (t) {
      if (1 !== t) {
        if (!this.renderConfig.clearCanvas) return void(this.canvasContext.globalAlpha *= t < 0 ? 0 : t);
        this.contextData.cO *= t < 0 ? 0 : t, this.canvasContext.globalAlpha = this.contextData.cO
      }
    }, CanvasRenderer.prototype.reset = function () {
      if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
      this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
    }, CanvasRenderer.prototype.save = function (t) {
      if (!this.renderConfig.clearCanvas) return void this.canvasContext.save();
      t && this.canvasContext.save();
      var e = this.contextData.cTr.props;
      null !== this.contextData.saved[this.contextData.cArrPos] && void 0 !== this.contextData.saved[this.contextData.cArrPos] || (this.contextData.saved[this.contextData.cArrPos] = new Array(16));
      var i, r = this.contextData.saved[this.contextData.cArrPos];
      for (i = 0; i < 16; i += 1) r[i] = e[i];
      this.contextData.savedOp[this.contextData.cArrPos] = this.contextData.cO, this.contextData.cArrPos += 1
    }, CanvasRenderer.prototype.restore = function (t) {
      if (!this.renderConfig.clearCanvas) return void this.canvasContext.restore();
      t && this.canvasContext.restore(), this.contextData.cArrPos -= 1;
      var e, i = this.contextData.saved[this.contextData.cArrPos],
        r = this.contextData.cTr.props;
      for (e = 0; e < 16; e += 1) r[e] = i[e];
      this.canvasContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), i = this.contextData.savedOp[this.contextData.cArrPos], this.contextData.cO = i, this.canvasContext.globalAlpha = i
    }, CanvasRenderer.prototype.configAnimation = function (t) {
      this.animationItem.wrapper ? (this.animationItem.container = document.createElement("canvas"), this.animationItem.container.style.width = "100%", this.animationItem.container.style.height = "100%", this.animationItem.container.style.transformOrigin = this.animationItem.container.style.mozTransformOrigin = this.animationItem.container.style.webkitTransformOrigin = this.animationItem.container.style["-webkit-transform"] = "0px 0px 0px", this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className)) : this.canvasContext = this.renderConfig.context, this.data = t, this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.totalFrames = Math.floor(t.tf), this.globalData.compWidth = t.w, this.globalData.compHeight = t.h, this.globalData.frameRate = t.fr, this.globalData.frameId = 0, this.globalData.compSize = {
        w: t.w,
        h: t.h
      }, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.layers = t.layers, this.transformCanvas = {}, this.transformCanvas.w = t.w, this.transformCanvas.h = t.h, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, document.body), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.addPendingElement = this.animationItem.addPendingElement.bind(this.animationItem), this.globalData.transformCanvas = this.transformCanvas, this.elements = Array.apply(null, {
        length: t.layers.length
      }), this.updateContainerSize()
    }, CanvasRenderer.prototype.updateContainerSize = function () {
      var t, e;
      this.animationItem.wrapper && this.animationItem.container ? (t = this.animationItem.wrapper.offsetWidth, e = this.animationItem.wrapper.offsetHeight, this.animationItem.container.setAttribute("width", t * this.renderConfig.dpr), this.animationItem.container.setAttribute("height", e * this.renderConfig.dpr)) : (t = this.canvasContext.canvas.width * this.renderConfig.dpr, e = this.canvasContext.canvas.height * this.renderConfig.dpr);
      var i, r;
      if (-1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
        var s = this.renderConfig.preserveAspectRatio.split(" "),
          n = s[1] || "meet",
          a = s[0] || "xMidYMid",
          o = a.substr(0, 4),
          l = a.substr(4);
        i = t / e, r = this.transformCanvas.w / this.transformCanvas.h, r > i && "meet" === n || r < i && "slice" === n ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = t / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === o && (r < i && "meet" === n || r > i && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === o && (r < i && "meet" === n || r > i && "slice" === n) ? (t - this.transformCanvas.w * (e / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === l && (r > i && "meet" === n || r < i && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === l && (r > i && "meet" === n || r < i && "slice" === n) ? (e - this.transformCanvas.h * (t / this.transformCanvas.w)) * this.renderConfig.dpr : 0
      } else "none" == this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = t / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = e / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1];
      var h, p = this.elements.length;
      for (h = 0; h < p; h += 1) this.elements[h] && 0 === this.elements[h].data.ty && this.elements[h].resize(this.globalData.transformCanvas)
    }, CanvasRenderer.prototype.destroy = function () {
      this.renderConfig.clearCanvas && (this.animationItem.wrapper.innerHTML = "");
      var t, e = this.layers ? this.layers.length : 0;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
    }, CanvasRenderer.prototype.renderFrame = function (t) {
      if (!(this.renderedFrame == t && !0 === this.renderConfig.clearCanvas || this.destroyed || null === t)) {
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem.firstFrame, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, !0 === this.renderConfig.clearCanvas ? (this.reset(), this.canvasContext.save(), this.canvasContext.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)) : this.save(), this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip();
        var e, i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = 0; e < i; e++)(this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        for (e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        !0 !== this.renderConfig.clearCanvas ? this.restore() : this.canvasContext.restore()
      }
    }, CanvasRenderer.prototype.buildItem = function (t) {
      var e = this.elements;
      if (!e[t] && 99 != this.layers[t].ty) {
        var i = this.createItem(this.layers[t], this, this.globalData);
        e[t] = i, i.initExpressions(), 0 === this.layers[t].ty && i.resize(this.globalData.transformCanvas)
      }
    }, CanvasRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        this.pendingElements.pop().checkParenting()
      }
    }, CanvasRenderer.prototype.hide = function () {
      this.animationItem.container.style.display = "none"
    }, CanvasRenderer.prototype.show = function () {
      this.animationItem.container.style.display = "block"
    }, CanvasRenderer.prototype.searchExtraCompositions = function (t) {
      var e, i = t.length;
      document.createElementNS(svgNS, "g");
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var r = this.createComp(t[e], this.globalData.comp, this.globalData);
          r.initExpressions(), this.globalData.projectInterface.registerComposition(r)
        }
    }, extendPrototype(BaseRenderer, HybridRenderer), HybridRenderer.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRenderer.prototype.checkPendingElements = function () {
      for (; this.pendingElements.length;) {
        this.pendingElements.pop().checkParenting()
      }
    }, HybridRenderer.prototype.appendElementInPos = function (t, e) {
      var i = t.getBaseElement();
      if (i) {
        var r = this.layers[e];
        if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
        else {
          for (var s, n, a = 0; a < e;) this.elements[a] && !0 !== this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a], s = this.layers[a].ddd ? this.getThreeDContainerByPos(a) : n.getBaseElement()), a += 1;
          s ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, s) : r.ddd && this.supports3d || this.layerElement.appendChild(i)
        }
      }
    }, HybridRenderer.prototype.createBase = function (t) {
      return new SVGBaseElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createShape = function (t) {
      return this.supports3d ? new HShapeElement(t, this.layerElement, this.globalData, this) : new IShapeElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createText = function (t) {
      return this.supports3d ? new HTextElement(t, this.layerElement, this.globalData, this) : new SVGTextElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createCamera = function (t) {
      return this.camera = new HCameraElement(t, this.layerElement, this.globalData, this), this.camera
    }, HybridRenderer.prototype.createImage = function (t) {
      return this.supports3d ? new HImageElement(t, this.layerElement, this.globalData, this) : new IImageElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createComp = function (t) {
      return this.supports3d ? new HCompElement(t, this.layerElement, this.globalData, this) : new ICompElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.createSolid = function (t) {
      return this.supports3d ? new HSolidElement(t, this.layerElement, this.globalData, this) : new ISolidElement(t, this.layerElement, this.globalData, this)
    }, HybridRenderer.prototype.getThreeDContainerByPos = function (t) {
      for (var e = 0, i = this.threeDElements.length; e < i;) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1
      }
    }, HybridRenderer.prototype.createThreeDContainer = function (t) {
      var e = document.createElement("div");
      styleDiv(e), e.style.width = this.globalData.compSize.w + "px", e.style.height = this.globalData.compSize.h + "px", e.style.transformOrigin = e.style.mozTransformOrigin = e.style.webkitTransformOrigin = "50% 50%";
      var i = document.createElement("div");
      styleDiv(i), i.style.transform = i.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)", e.appendChild(i), this.resizerElem.appendChild(e);
      var r = {
        container: i,
        perspectiveElem: e,
        startPos: t,
        endPos: t
      };
      return this.threeDElements.push(r), r
    }, HybridRenderer.prototype.build3dContainers = function () {
      var t, e, i = this.layers.length;
      for (t = 0; t < i; t += 1) this.layers[t].ddd ? (e || (e = this.createThreeDContainer(t)), e.endPos = Math.max(e.endPos, t)) : e = null
    }, HybridRenderer.prototype.addTo3dContainer = function (t, e) {
      for (var i = 0, r = this.threeDElements.length; i < r;) {
        if (e <= this.threeDElements[i].endPos) {
          for (var s, n = this.threeDElements[i].startPos; n < e;) this.elements[n] && this.elements[n].getBaseElement && (s = this.elements[n].getBaseElement()), n += 1;
          s ? this.threeDElements[i].container.insertBefore(t, s) : this.threeDElements[i].container.appendChild(t);
          break
        }
        i += 1
      }
    }, HybridRenderer.prototype.configAnimation = function (t) {
      var e = document.createElement("div"),
        i = this.animationItem.wrapper;
      e.style.width = t.w + "px", e.style.height = t.h + "px", this.resizerElem = e, styleDiv(e), e.style.transformStyle = e.style.webkitTransformStyle = e.style.mozTransformStyle = "flat", this.renderConfig.className && i.setAttribute("class", this.renderConfig.className), i.appendChild(e), e.style.overflow = "hidden";
      var r = document.createElementNS(svgNS, "svg");
      r.setAttribute("width", "1"), r.setAttribute("height", "1"), styleDiv(r), this.resizerElem.appendChild(r);
      var s = document.createElementNS(svgNS, "defs");
      r.appendChild(s), this.globalData.defs = s, this.data = t, this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.elementLoaded = this.animationItem.elementLoaded.bind(this.animationItem), this.globalData.frameId = 0, this.globalData.compSize = {
        w: t.w,
        h: t.h
      }, this.globalData.frameRate = t.fr, this.layers = t.layers, this.globalData.fontManager = new FontManager, this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, r), this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
    }, HybridRenderer.prototype.destroy = function () {
      this.animationItem.wrapper.innerHTML = "", this.animationItem.container = null, this.globalData.defs = null;
      var t, e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t++) this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null
    }, HybridRenderer.prototype.updateContainerSize = function () {
      var t, e, i, r, s = this.animationItem.wrapper.offsetWidth,
        n = this.animationItem.wrapper.offsetHeight,
        a = s / n,
        o = this.globalData.compSize.w / this.globalData.compSize.h;
      o > a ? (t = s / this.globalData.compSize.w, e = s / this.globalData.compSize.w, i = 0, r = (n - this.globalData.compSize.h * (s / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (s - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, r = 0), this.resizerElem.style.transform = this.resizerElem.style.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)"
    }, HybridRenderer.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRenderer.prototype.hide = function () {
      this.resizerElem.style.display = "none"
    }, HybridRenderer.prototype.show = function () {
      this.resizerElem.style.display = "block"
    }, HybridRenderer.prototype.initItems = function () {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w,
          i = this.globalData.compSize.h,
          r = this.threeDElements.length;
        for (t = 0; t < r; t += 1) this.threeDElements[t].perspectiveElem.style.perspective = this.threeDElements[t].perspectiveElem.style.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px"
      }
    }, HybridRenderer.prototype.searchExtraCompositions = function (t) {
      var e, i = t.length,
        r = document.createElement("div");
      for (e = 0; e < i; e += 1)
        if (t[e].xt) {
          var s = this.createComp(t[e], r, this.globalData.comp, null);
          s.initExpressions(), this.globalData.projectInterface.registerComposition(s)
        }
    }, createElement(BaseElement, CVBaseElement), CVBaseElement.prototype.createElements = function () {
      this.checkParenting()
    }, CVBaseElement.prototype.checkBlendMode = function (t) {
      if (t.blendMode !== this.data.bm) {
        t.blendMode = this.data.bm;
        var e = "";
        switch (this.data.bm) {
          case 0:
            e = "normal";
            break;
          case 1:
            e = "multiply";
            break;
          case 2:
            e = "screen";
            break;
          case 3:
            e = "overlay";
            break;
          case 4:
            e = "darken";
            break;
          case 5:
            e = "lighten";
            break;
          case 6:
            e = "color-dodge";
            break;
          case 7:
            e = "color-burn";
            break;
          case 8:
            e = "hard-light";
            break;
          case 9:
            e = "soft-light";
            break;
          case 10:
            e = "difference";
            break;
          case 11:
            e = "exclusion";
            break;
          case 12:
            e = "hue";
            break;
          case 13:
            e = "saturation";
            break;
          case 14:
            e = "color";
            break;
          case 15:
            e = "luminosity"
        }
        t.canvasContext.globalCompositeOperation = e
      }
    }, CVBaseElement.prototype.renderFrame = function (t) {
      if (3 === this.data.ty) return !1;
      if (this.checkBlendMode(0 === this.data.ty ? this.parentGlobalData : this.globalData), !this.isVisible) return this.isVisible;
      this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v;
      var e, i = this.finalTransform.mat;
      if (this.hierarchy) {
        var r, s = this.hierarchy.length;
        for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), r = 0; r < s; r += 1) this.finalTransform.matMdf = !!this.hierarchy[r].finalTransform.mProp.mdf || this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
      } else t ? (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e)) : i.cloneFromProps(this.finalTransform.mProp.v.props);
      return t && (e = t.mat.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15]), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.data.hasMask && (this.globalData.renderer.save(!0), this.maskManager.renderFrame(0 === this.data.ty ? null : i)), this.data.hd && (this.isVisible = !1), this.isVisible
    }, CVBaseElement.prototype.addMasks = function (t) {
      this.maskManager = new CVMaskElement(t, this, this.globalData)
    }, CVBaseElement.prototype.destroy = function () {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager && this.maskManager.destroy()
    }, CVBaseElement.prototype.mHelper = new Matrix, createElement(CVBaseElement, CVCompElement), CVCompElement.prototype.ctxTransform = CanvasRenderer.prototype.ctxTransform, CVCompElement.prototype.ctxOpacity = CanvasRenderer.prototype.ctxOpacity, CVCompElement.prototype.save = CanvasRenderer.prototype.save, CVCompElement.prototype.restore = CanvasRenderer.prototype.restore, CVCompElement.prototype.reset = function () {
      this.contextData.cArrPos = 0, this.contextData.cTr.reset(), this.contextData.cO = 1
    }, CVCompElement.prototype.resize = function (t) {
      var e = Math.max(t.sx, t.sy);
      this.canvas.width = this.data.w * e, this.canvas.height = this.data.h * e, this.transformCanvas = {
        sc: e,
        w: this.data.w * e,
        h: this.data.h * e,
        props: [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]
      };
      var i, r = this.elements.length;
      for (i = 0; i < r; i += 1) this.elements[i] && 0 === this.elements[i].data.ty && this.elements[i].resize(t)
    }, CVCompElement.prototype.prepareFrame = function (t) {
      if (this.globalData.frameId = this.parentGlobalData.frameId, this.globalData.mdf = !1, this._parent.prepareFrame.call(this, t), !1 !== this.isVisible || this.data.xt) {
        var e = t;
        this.tm && (e = this.tm.v) === this.data.op && (e = this.data.op - 1), this.renderedFrame = e / this.data.sr;
        var i, r = this.elements.length;
        for (this.completeLayers || this.checkLayers(t), i = 0; i < r; i += 1)(this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(e / this.data.sr - this.layers[i].st), 0 === this.elements[i].data.ty && this.elements[i].globalData.mdf && (this.globalData.mdf = !0));
        this.globalData.mdf && !this.data.xt && (this.canvasContext.clearRect(0, 0, this.data.w, this.data.h), this.ctxTransform(this.transformCanvas.props))
      }
    }, CVCompElement.prototype.renderFrame = function (t) {
      if (!1 !== this._parent.renderFrame.call(this, t)) {
        if (this.globalData.mdf) {
          var e, i = this.layers.length;
          for (e = i - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }
        this.data.hasMask && this.globalData.renderer.restore(!0), this.firstFrame && (this.firstFrame = !1), this.parentGlobalData.renderer.save(), this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props), this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity), this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas, 0, 0, this.data.w, this.data.h), this.parentGlobalData.renderer.restore(), this.globalData.mdf && this.reset()
      }
    }, CVCompElement.prototype.setElements = function (t) {
      this.elements = t
    }, CVCompElement.prototype.getElements = function () {
      return this.elements
    }, CVCompElement.prototype.destroy = function () {
      var t, e = this.layers.length;
      for (t = e - 1; t >= 0; t -= 1) this.elements[t].destroy();
      this.layers = null, this.elements = null, this._parent.destroy.call(this._parent)
    }, CVCompElement.prototype.checkLayers = CanvasRenderer.prototype.checkLayers, CVCompElement.prototype.buildItem = CanvasRenderer.prototype.buildItem, CVCompElement.prototype.checkPendingElements = CanvasRenderer.prototype.checkPendingElements, CVCompElement.prototype.addPendingElement = CanvasRenderer.prototype.addPendingElement, CVCompElement.prototype.buildAllItems = CanvasRenderer.prototype.buildAllItems, CVCompElement.prototype.createItem = CanvasRenderer.prototype.createItem, CVCompElement.prototype.createImage = CanvasRenderer.prototype.createImage, CVCompElement.prototype.createComp = CanvasRenderer.prototype.createComp, CVCompElement.prototype.createSolid = CanvasRenderer.prototype.createSolid, CVCompElement.prototype.createShape = CanvasRenderer.prototype.createShape, CVCompElement.prototype.createText = CanvasRenderer.prototype.createText, CVCompElement.prototype.createBase = CanvasRenderer.prototype.createBase, CVCompElement.prototype.buildElementParenting = CanvasRenderer.prototype.buildElementParenting, createElement(CVBaseElement, CVImageElement), CVImageElement.prototype.createElements = function () {
      var t = function () {
          if (this.globalData.elementLoaded(), this.assetData.w !== this.img.width || this.assetData.h !== this.img.height) {
            var t = document.createElement("canvas");
            t.width = this.assetData.w, t.height = this.assetData.h;
            var e, i, r = t.getContext("2d"),
              s = this.img.width,
              n = this.img.height,
              a = s / n,
              o = this.assetData.w / this.assetData.h;
            a > o ? (i = n, e = i * o) : (e = s, i = e / o), r.drawImage(this.img, (s - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t
          }
        }.bind(this),
        e = function () {
          this.failed = !0, this.globalData.elementLoaded()
        }.bind(this);
      this.img = new Image, this.img.addEventListener("load", t, !1), this.img.addEventListener("error", e, !1);
      var i = this.globalData.getAssetsPath(this.assetData);
      this.img.src = i, this._parent.createElements.call(this)
    }, CVImageElement.prototype.renderFrame = function (t) {
      if (!this.failed && !1 !== this._parent.renderFrame.call(this, t)) {
        var e = this.canvasContext;
        this.globalData.renderer.save();
        var i = this.finalTransform.mat.props;
        this.globalData.renderer.ctxTransform(i), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.drawImage(this.img, 0, 0), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
      }
    }, CVImageElement.prototype.destroy = function () {
      this.img = null, this._parent.destroy.call(this._parent)
    }, CVMaskElement.prototype.prepareFrame = function (t) {
      var e, i = this.dynamicProperties.length;
      for (e = 0; e < i; e += 1) this.dynamicProperties[e].getValue(t), this.dynamicProperties[e].mdf && (this.element.globalData.mdf = !0)
    }, CVMaskElement.prototype.renderFrame = function (t) {
      var e, i, r, s, n, a = this.element.canvasContext,
        o = this.data.masksProperties.length,
        l = !1;
      for (e = 0; e < o; e++)
        if ("n" !== this.masksProperties[e].mode) {
          !1 === l && (a.beginPath(), l = !0), this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compWidth, 0), a.lineTo(this.element.globalData.compWidth, this.element.globalData.compHeight), a.lineTo(0, this.element.globalData.compHeight), a.lineTo(0, 0)), n = this.viewData[e].v, i = t ? t.applyToPointArray(n.v[0][0], n.v[0][1], 0) : n.v[0], a.moveTo(i[0], i[1]);
          var h, p = n._length;
          for (h = 1; h < p; h++) i = t ? t.applyToPointArray(n.o[h - 1][0], n.o[h - 1][1], 0) : n.o[h - 1], r = t ? t.applyToPointArray(n.i[h][0], n.i[h][1], 0) : n.i[h], s = t ? t.applyToPointArray(n.v[h][0], n.v[h][1], 0) : n.v[h], a.bezierCurveTo(i[0], i[1], r[0], r[1], s[0], s[1]);
          i = t ? t.applyToPointArray(n.o[h - 1][0], n.o[h - 1][1], 0) : n.o[h - 1], r = t ? t.applyToPointArray(n.i[0][0], n.i[0][1], 0) : n.i[0], s = t ? t.applyToPointArray(n.v[0][0], n.v[0][1], 0) : n.v[0], a.bezierCurveTo(i[0], i[1], r[0], r[1], s[0], s[1])
        } l && a.clip()
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function () {
      this.element = null
    }, createElement(CVBaseElement, CVShapeElement), CVShapeElement.prototype.transformHelper = {
      opacity: 1,
      mat: new Matrix,
      matMdf: !1,
      opMdf: !1
    }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createElements = function () {
      this._parent.createElements.call(this), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0)
    }, CVShapeElement.prototype.createStyleElement = function (t, e) {
      var i = {
          data: t,
          type: t.ty,
          elements: []
        },
        r = {};
      if ("fl" != t.ty && "st" != t.ty || (r.c = PropertyFactory.getProp(this, t.c, 1, 255, e), r.c.k || (i.co = "rgb(" + bm_floor(r.c.v[0]) + "," + bm_floor(r.c.v[1]) + "," + bm_floor(r.c.v[2]) + ")")), r.o = PropertyFactory.getProp(this, t.o, 0, .01, e), "st" == t.ty) {
        if (i.lc = this.lcEnum[t.lc] || "round", i.lj = this.ljEnum[t.lj] || "round", 1 == t.lj && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, e), r.w.k || (i.wi = r.w.v), t.d) {
          var s = PropertyFactory.getDashProp(this, t.d, "canvas", e);
          r.d = s, r.d.k || (i.da = r.d.dasharray, i.do = r.d.dashoffset)
        }
      } else i.r = 2 === t.r ? "evenodd" : "nonzero";
      return this.stylesList.push(i), r.style = i, r
    }, CVShapeElement.prototype.createGroupElement = function (t) {
      return {
        it: [],
        prevViewData: []
      }
    }, CVShapeElement.prototype.createTransformElement = function (t, e) {
      return {
        transform: {
          mat: new Matrix,
          opacity: 1,
          matMdf: !1,
          opMdf: !1,
          op: PropertyFactory.getProp(this, t.o, 0, .01, e),
          mProps: PropertyFactory.getProp(this, t, 2, null, e)
        },
        elements: []
      }
    }, CVShapeElement.prototype.createShapeElement = function (t, e) {
      var i = {
          nodes: [],
          trNodes: [],
          tr: [0, 0, 0, 0, 0, 0]
        },
        r = 4;
      "rc" == t.ty ? r = 5 : "el" == t.ty ? r = 6 : "sr" == t.ty && (r = 7), i.sh = ShapePropertyFactory.getShapeProp(this, t, r, e), this.shapes.push(i.sh), this.addShapeToModifiers(i), jLen = this.stylesList.length;
      var s = !1,
        n = !1;
      for (j = 0; j < jLen; j += 1) this.stylesList[j].closed || (this.stylesList[j].elements.push(i), "st" === this.stylesList[j].type ? s = !0 : n = !0);
      return i.st = s, i.fl = n, i
    }, CVShapeElement.prototype.reloadShapes = function () {
      this.firstFrame = !0;
      var t, e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.dynamicProperties, !0);
      var t, e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers()
    }, CVShapeElement.prototype.searchShapes = function (t, e, i, r, s) {
      var n, a, o, l, h = t.length - 1,
        p = [],
        c = [];
      for (n = h; n >= 0; n -= 1) {
        if (l = this.searchProcessedElement(t[n]), l ? e[n] = i[l - 1] : t[n]._render = s, "fl" == t[n].ty || "st" == t[n].ty) l ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], r), p.push(e[n].style);
        else if ("gr" == t[n].ty) {
          if (l)
            for (o = e[n].it.length, a = 0; a < o; a += 1) e[n].prevViewData[a] = e[n].it[a];
          else e[n] = this.createGroupElement(t[n]);
          this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, r, s)
        } else if ("tr" == t[n].ty) l || (e[n] = this.createTransformElement(t[n], r));
        else if ("sh" == t[n].ty || "rc" == t[n].ty || "el" == t[n].ty || "sr" == t[n].ty) l || (e[n] = this.createShapeElement(t[n], r));
        else if ("tm" == t[n].ty || "rd" == t[n].ty) {
          if (l) d = e[n], d.closed = !1;
          else {
            var d = ShapeModifiers.getModifier(t[n].ty);
            d.init(this, t[n], r), e[n] = d, this.shapeModifiers.push(d)
          }
          c.push(d)
        } else "rp" == t[n].ty && (l ? (d = e[n], d.closed = !0) : (d = ShapeModifiers.getModifier(t[n].ty), e[n] = d, d.init(this, t, n, e, r), this.shapeModifiers.push(d), s = !1), c.push(d));
        this.addProcessedElement(t[n], n + 1)
      }
      for (h = p.length, n = 0; n < h; n += 1) p[n].closed = !0;
      for (h = c.length, n = 0; n < h; n += 1) c[n].closed = !0
    }, CVShapeElement.prototype.addShapeToModifiers = IShapeElement.prototype.addShapeToModifiers, CVShapeElement.prototype.renderModifiers = IShapeElement.prototype.renderModifiers, CVShapeElement.prototype.lcEnum = IShapeElement.prototype.lcEnum, CVShapeElement.prototype.ljEnum = IShapeElement.prototype.ljEnum, CVShapeElement.prototype.searchProcessedElement = IShapeElement.prototype.searchProcessedElement, CVShapeElement.prototype.addProcessedElement = IShapeElement.prototype.addProcessedElement, CVShapeElement.prototype.renderFrame = function (t) {
      !1 !== this._parent.renderFrame.call(this, t) && (this.transformHelper.mat.reset(), this.transformHelper.opacity = this.finalTransform.opacity, this.transformHelper.matMdf = !1, this.transformHelper.opMdf = this.finalTransform.opMdf, this.renderModifiers(), this.renderShape(this.transformHelper, null, null, !0), this.data.hasMask && this.globalData.renderer.restore(!0))
    }, CVShapeElement.prototype.renderShape = function (t, e, i, r) {
      var s, n;
      if (!e)
        for (e = this.shapesData, n = this.stylesList.length, s = 0; s < n; s += 1) this.stylesList[s].d = "", this.stylesList[s].mdf = !1;
      i || (i = this.itemsData), n = e.length - 1;
      var a, o;
      for (a = t, s = n; s >= 0; s -= 1)
        if ("tr" == e[s].ty) {
          a = i[s].transform;
          var l = i[s].transform.mProps.v.props;
          if (a.matMdf = a.mProps.mdf, a.opMdf = a.op.mdf, o = a.mat, o.cloneFromProps(l), t) {
            var h = t.mat.props;
            a.opacity = t.opacity, a.opacity *= i[s].transform.op.v, a.matMdf = !!t.matMdf || a.matMdf, a.opMdf = !!t.opMdf || a.opMdf, o.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], h[12], h[13], h[14], h[15])
          } else a.opacity = a.op.o
        } else "sh" == e[s].ty || "el" == e[s].ty || "rc" == e[s].ty || "sr" == e[s].ty ? this.renderPath(e[s], i[s], a) : "fl" == e[s].ty ? this.renderFill(e[s], i[s], a) : "st" == e[s].ty ? this.renderStroke(e[s], i[s], a) : "gr" == e[s].ty ? this.renderShape(a, e[s].it, i[s].it) : e[s].ty;
      if (r) {
        n = this.stylesList.length;
        var p, c, d, u, f, m, g, v = this.globalData.renderer,
          y = this.globalData.canvasContext;
        for (v.save(), v.ctxTransform(this.finalTransform.mat.props), s = 0; s < n; s += 1)
          if (("st" !== (g = this.stylesList[s].type) || 0 !== this.stylesList[s].wi) && this.stylesList[s].data._render) {
            for (v.save(), f = this.stylesList[s].elements, "st" === g ? (y.strokeStyle = this.stylesList[s].co, y.lineWidth = this.stylesList[s].wi, y.lineCap = this.stylesList[s].lc, y.lineJoin = this.stylesList[s].lj, y.miterLimit = this.stylesList[s].ml || 0) : y.fillStyle = this.stylesList[s].co, v.ctxOpacity(this.stylesList[s].coOp), "st" !== g && y.beginPath(), c = f.length, p = 0; p < c; p += 1) {
              for ("st" === g && (y.beginPath(), this.stylesList[s].da ? (y.setLineDash(this.stylesList[s].da), y.lineDashOffset = this.stylesList[s].do, this.globalData.isDashed = !0) : this.globalData.isDashed && (y.setLineDash(this.dashResetter), this.globalData.isDashed = !1)), m = f[p].trNodes, u = m.length, d = 0; d < u; d += 1) "m" == m[d].t ? y.moveTo(m[d].p[0], m[d].p[1]) : "c" == m[d].t ? y.bezierCurveTo(m[d].p1[0], m[d].p1[1], m[d].p2[0], m[d].p2[1], m[d].p3[0], m[d].p3[1]) : y.closePath();
              "st" === g && y.stroke()
            }
            "st" !== g && y.fill(this.stylesList[s].r), v.restore()
          } v.restore(), this.firstFrame && (this.firstFrame = !1)
      }
    }, CVShapeElement.prototype.renderPath = function (t, e, i) {
      var r, s, n, a;
      if (i.matMdf || e.sh.mdf || this.firstFrame) {
        var o = e.sh.paths,
          l = i.mat;
        a = o._length;
        var h = e.trNodes;
        for (h.length = 0, n = 0; n < a; n += 1) {
          var p = o.shapes[n];
          if (p && p.v) {
            for (r = p._length, s = 1; s < r; s += 1) 1 == s && h.push({
              t: "m",
              p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), h.push({
              t: "c",
              p1: l.applyToPointArray(p.o[s - 1][0], p.o[s - 1][1], 0),
              p2: l.applyToPointArray(p.i[s][0], p.i[s][1], 0),
              p3: l.applyToPointArray(p.v[s][0], p.v[s][1], 0)
            });
            1 == r && h.push({
              t: "m",
              p: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), p.c && r && (h.push({
              t: "c",
              p1: l.applyToPointArray(p.o[s - 1][0], p.o[s - 1][1], 0),
              p2: l.applyToPointArray(p.i[0][0], p.i[0][1], 0),
              p3: l.applyToPointArray(p.v[0][0], p.v[0][1], 0)
            }), h.push({
              t: "z"
            })), e.lStr = h
          }
        }
        if (e.st)
          for (s = 0; s < 16; s += 1) e.tr[s] = i.mat.props[s];
        e.trNodes = h
      }
    }, CVShapeElement.prototype.renderFill = function (t, e, i) {
      var r = e.style;
      (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && (r.coOp = e.o.v * i.opacity)
    }, CVShapeElement.prototype.renderStroke = function (t, e, i) {
      var r = e.style,
        s = e.d;
      s && (s.mdf || this.firstFrame) && (r.da = s.dasharray, r.do = s.dashoffset), (e.c.mdf || this.firstFrame) && (r.co = "rgb(" + bm_floor(e.c.v[0]) + "," + bm_floor(e.c.v[1]) + "," + bm_floor(e.c.v[2]) + ")"), (e.o.mdf || i.opMdf || this.firstFrame) && (r.coOp = e.o.v * i.opacity), (e.w.mdf || this.firstFrame) && (r.wi = e.w.v)
    }, CVShapeElement.prototype.destroy = function () {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemData.length = 0, this._parent.destroy.call(this._parent)
    }, createElement(CVBaseElement, CVSolidElement), CVSolidElement.prototype.renderFrame = function (t) {
      if (!1 !== this._parent.renderFrame.call(this, t)) {
        var e = this.canvasContext;
        this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(this.finalTransform.mat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.fillStyle = this.data.sc, e.fillRect(0, 0, this.data.sw, this.data.sh), this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
      }
    }, createElement(CVBaseElement, CVTextElement), extendPrototype(ITextElement, CVTextElement), CVTextElement.prototype.tHelper = document.createElement("canvas").getContext("2d"), CVTextElement.prototype.createElements = function () {
      this._parent.createElements.call(this)
    }, CVTextElement.prototype.buildNewText = function () {
      var t = this.textProperty.currentData;
      this.renderedLetters = Array.apply(null, {
        length: t.l ? t.l.length : 0
      });
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var i = !1;
      t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var r, s, n = this.globalData.fontManager.getFontByName(t.f),
        a = t.l,
        o = this.mHelper;
      this.stroke = i, this.values.fValue = t.s + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, s = t.t.length;
      var l, h, p, c, d, u, f, m, g, v, y = this.data.singleShape,
        _ = t.tr / 1e3 * t.s,
        b = 0,
        T = 0,
        E = !0,
        w = 0;
      for (r = 0; r < s; r += 1) {
        for (l = this.globalData.fontManager.getCharData(t.t.charAt(r), n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily), h = l && l.data || {}, o.reset(), y && a[r].n && (b = -_, T += t.yOffset, T += E ? 1 : 0, E = !1), d = h.shapes ? h.shapes[0].it : [], f = d.length, o.scale(t.s / 100, t.s / 100), y && this.applyTextPropertiesToMatrix(t, o, a[r].line, b, T), g = Array.apply(null, {
            length: f
          }), u = 0; u < f; u += 1) {
          for (c = d[u].ks.k.i.length, m = d[u].ks.k, v = [], p = 1; p < c; p += 1) 1 == p && v.push(o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), v.push(o.applyToX(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToY(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToX(m.i[p][0], m.i[p][1], 0), o.applyToY(m.i[p][0], m.i[p][1], 0), o.applyToX(m.v[p][0], m.v[p][1], 0), o.applyToY(m.v[p][0], m.v[p][1], 0));
          v.push(o.applyToX(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToY(m.o[p - 1][0], m.o[p - 1][1], 0), o.applyToX(m.i[0][0], m.i[0][1], 0), o.applyToY(m.i[0][0], m.i[0][1], 0), o.applyToX(m.v[0][0], m.v[0][1], 0), o.applyToY(m.v[0][0], m.v[0][1], 0)), g[u] = v
        }
        y && (b += a[r].l, b += _), this.textSpans[w] ? this.textSpans[w].elem = g : this.textSpans[w] = {
          elem: g
        }, w += 1
      }
    }, CVTextElement.prototype.renderFrame = function (t) {
      if (!1 !== this._parent.renderFrame.call(this, t)) {
        var e = this.canvasContext,
          i = this.finalTransform.mat.props;
        this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(i), this.globalData.renderer.ctxOpacity(this.finalTransform.opacity), e.font = this.values.fValue, e.lineCap = "butt", e.lineJoin = "miter", e.miterLimit = 4, this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
        var r, s, n, a, o, l, h = this.textAnimator.renderedLetters,
          p = this.textProperty.currentData.l;
        s = p.length;
        var c, d, u, f = null,
          m = null,
          g = null;
        for (r = 0; r < s; r += 1)
          if (!p[r].n) {
            if (c = h[r], c && (this.globalData.renderer.save(), this.globalData.renderer.ctxTransform(c.p), this.globalData.renderer.ctxOpacity(c.o)), this.fill) {
              for (c && c.fc ? f !== c.fc && (f = c.fc, e.fillStyle = c.fc) : f !== this.values.fill && (f = this.values.fill, e.fillStyle = this.values.fill), d = this.textSpans[r].elem, a = d.length, this.globalData.canvasContext.beginPath(), n = 0; n < a; n += 1)
                for (u = d[n], l = u.length, this.globalData.canvasContext.moveTo(u[0], u[1]), o = 2; o < l; o += 6) this.globalData.canvasContext.bezierCurveTo(u[o], u[o + 1], u[o + 2], u[o + 3], u[o + 4], u[o + 5]);
              this.globalData.canvasContext.closePath(), this.globalData.canvasContext.fill()
            }
            if (this.stroke) {
              for (c && c.sw ? g !== c.sw && (g = c.sw, e.lineWidth = c.sw) : g !== this.values.sWidth && (g = this.values.sWidth, e.lineWidth = this.values.sWidth), c && c.sc ? m !== c.sc && (m = c.sc, e.strokeStyle = c.sc) : m !== this.values.stroke && (m = this.values.stroke, e.strokeStyle = this.values.stroke), d = this.textSpans[r].elem, a = d.length, this.globalData.canvasContext.beginPath(), n = 0; n < a; n += 1)
                for (u = d[n], l = u.length, this.globalData.canvasContext.moveTo(u[0], u[1]), o = 2; o < l; o += 6) this.globalData.canvasContext.bezierCurveTo(u[o], u[o + 1], u[o + 2], u[o + 3], u[o + 4], u[o + 5]);
              this.globalData.canvasContext.closePath(), this.globalData.canvasContext.stroke()
            }
            c && this.globalData.renderer.restore()
          } this.globalData.renderer.restore(this.data.hasMask), this.firstFrame && (this.firstFrame = !1)
      }
    }, createElement(BaseElement, HBaseElement), HBaseElement.prototype.checkBlendMode = function () {}, HBaseElement.prototype.setBlendMode = BaseElement.prototype.setBlendMode, HBaseElement.prototype.getBaseElement = function () {
      return this.baseElement
    }, HBaseElement.prototype.createElements = function () {
      this.data.hasMask ? (this.layerElement = document.createElementNS(svgNS, "svg"), styleDiv(this.layerElement), this.baseElement = this.layerElement, this.maskedElement = this.layerElement) : this.layerElement = this.parentContainer, this.transformedElement = this.layerElement, !this.data.ln || 4 !== this.data.ty && 0 !== this.data.ty || (this.layerElement === this.parentContainer && (this.layerElement = document.createElementNS(svgNS, "g"), this.baseElement = this.layerElement), this.layerElement.setAttribute("id", this.data.ln)), this.setBlendMode(), this.layerElement !== this.parentContainer && (this.placeholder = null), this.checkParenting()
    }, HBaseElement.prototype.renderFrame = function (t) {
      if (3 === this.data.ty) return !1;
      if (this.currentFrameNum === this.lastNum || !this.isVisible) return this.isVisible;
      this.lastNum = this.currentFrameNum, this.finalTransform.opMdf = this.finalTransform.op.mdf, this.finalTransform.matMdf = this.finalTransform.mProp.mdf, this.finalTransform.opacity = this.finalTransform.op.v, this.firstFrame && (this.finalTransform.opMdf = !0, this.finalTransform.matMdf = !0);
      var e, i = this.finalTransform.mat;
      if (this.hierarchy) {
        var r, s = this.hierarchy.length;
        for (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e), r = 0; r < s; r += 1) this.finalTransform.matMdf = !!this.hierarchy[r].finalTransform.mProp.mdf || this.finalTransform.matMdf, e = this.hierarchy[r].finalTransform.mProp.v.props, i.transform(e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9], e[10], e[11], e[12], e[13], e[14], e[15])
      } else this.isVisible && this.finalTransform.matMdf && (t ? (e = this.finalTransform.mProp.v.props, i.cloneFromProps(e)) : i.cloneFromProps(this.finalTransform.mProp.v.props));
      return this.data.hasMask && this.maskManager.renderFrame(i), t && (e = t.mat.props, i.cloneFromProps(e), this.finalTransform.opacity *= t.opacity, this.finalTransform.opMdf = !!t.opMdf || this.finalTransform.opMdf, this.finalTransform.matMdf = !!t.matMdf || this.finalTransform.matMdf), this.finalTransform.matMdf && (this.transformedElement.style.transform = this.transformedElement.style.webkitTransform = i.toCSS(), this.finalMat = i), this.finalTransform.opMdf && (this.transformedElement.style.opacity = this.finalTransform.opacity), this.isVisible
    }, HBaseElement.prototype.destroy = function () {
      this.layerElement = null, this.transformedElement = null, this.parentContainer = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
    }, HBaseElement.prototype.getDomElement = function () {
      return this.layerElement
    }, HBaseElement.prototype.addMasks = function (t) {
      this.maskManager = new MaskElement(t, this, this.globalData)
    }, HBaseElement.prototype.hide = function () {}, HBaseElement.prototype.setMatte = function () {}, HBaseElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, createElement(HBaseElement, HSolidElement), HSolidElement.prototype.createElements = function () {
      var t = document.createElement("div");
      styleDiv(t);
      var e = document.createElementNS(svgNS, "svg");
      styleDiv(e), e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), t.appendChild(e), this.layerElement = t, this.transformedElement = t, this.baseElement = t, this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), 0 !== this.data.bm && this.setBlendMode();
      var i = document.createElementNS(svgNS, "rect");
      i.setAttribute("width", this.data.sw), i.setAttribute("height", this.data.sh), i.setAttribute("fill", this.data.sc), e.appendChild(i), this.data.hasMask && (this.maskedElement = i), this.checkParenting()
    }, HSolidElement.prototype.hide = SVGBaseElement.prototype.hide, HSolidElement.prototype.show = SVGBaseElement.prototype.show, HSolidElement.prototype.renderFrame = IImageElement.prototype.renderFrame, HSolidElement.prototype.destroy = IImageElement.prototype.destroy, createElement(HBaseElement, HCompElement), HCompElement.prototype.createElements = function () {
      var t = document.createElement("div");
      if (styleDiv(t), this.data.ln && t.setAttribute("id", this.data.ln), t.style.clip = "rect(0px, " + this.data.w + "px, " + this.data.h + "px, 0px)", this.data.hasMask) {
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e), e.setAttribute("width", this.data.w), e.setAttribute("height", this.data.h);
        var i = document.createElementNS(svgNS, "g");
        e.appendChild(i), t.appendChild(e), this.maskedElement = i, this.baseElement = t, this.layerElement = i, this.transformedElement = t
      } else this.layerElement = t, this.baseElement = this.layerElement, this.transformedElement = t;
      this.checkParenting()
    }, HCompElement.prototype.hide = ICompElement.prototype.hide, HCompElement.prototype.prepareFrame = ICompElement.prototype.prepareFrame, HCompElement.prototype.setElements = ICompElement.prototype.setElements, HCompElement.prototype.getElements = ICompElement.prototype.getElements, HCompElement.prototype.destroy = ICompElement.prototype.destroy, HCompElement.prototype.renderFrame = function (t) {
      var e, i = this._parent.renderFrame.call(this, t),
        r = this.layers.length;
      if (!1 === i) return void this.hide();
      for (this.hidden = !1, e = 0; e < r; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      this.firstFrame && (this.firstFrame = !1)
    }, HCompElement.prototype.checkLayers = BaseRenderer.prototype.checkLayers, HCompElement.prototype.buildItem = HybridRenderer.prototype.buildItem, HCompElement.prototype.checkPendingElements = HybridRenderer.prototype.checkPendingElements, HCompElement.prototype.addPendingElement = HybridRenderer.prototype.addPendingElement, HCompElement.prototype.buildAllItems = BaseRenderer.prototype.buildAllItems, HCompElement.prototype.createItem = HybridRenderer.prototype.createItem, HCompElement.prototype.buildElementParenting = HybridRenderer.prototype.buildElementParenting, HCompElement.prototype.createImage = HybridRenderer.prototype.createImage, HCompElement.prototype.createComp = HybridRenderer.prototype.createComp, HCompElement.prototype.createSolid = HybridRenderer.prototype.createSolid, HCompElement.prototype.createShape = HybridRenderer.prototype.createShape, HCompElement.prototype.createText = HybridRenderer.prototype.createText, HCompElement.prototype.createBase = HybridRenderer.prototype.createBase, HCompElement.prototype.appendElementInPos = HybridRenderer.prototype.appendElementInPos, createElement(HBaseElement, HShapeElement);
    var parent = HShapeElement.prototype._parent;
    extendPrototype(IShapeElement, HShapeElement), HShapeElement.prototype._parent = parent, HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderFrame, HShapeElement.prototype.createElements = function () {
      var t = document.createElement("div");
      styleDiv(t);
      var e = document.createElementNS(svgNS, "svg");
      styleDiv(e);
      var i = this.comp.data ? this.comp.data : this.globalData.compSize;
      if (e.setAttribute("width", i.w), e.setAttribute("height", i.h), this.data.hasMask) {
        var r = document.createElementNS(svgNS, "g");
        t.appendChild(e), e.appendChild(r), this.maskedElement = r, this.layerElement = r, this.shapesContainer = r
      } else t.appendChild(e), this.layerElement = e, this.shapesContainer = document.createElementNS(svgNS, "g"), this.layerElement.appendChild(this.shapesContainer);
      this.data.hd || (this.baseElement = t), this.innerElem = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, this.dynamicProperties, 0, [], !0), this.buildExpressionInterface(), this.layerElement = t, this.transformedElement = t, this.shapeCont = e, 0 !== this.data.bm && this.setBlendMode(), this.checkParenting()
    }, HShapeElement.prototype.renderFrame = function (t) {
      var e = this.firstFrame;
      if (this._renderShapeFrame(), this.isVisible && (this.elemMdf || e)) {
        var i = this.shapeCont.getBBox(),
          r = !1;
        this.currentBBox.w !== i.width && (this.currentBBox.w = i.width, this.shapeCont.setAttribute("width", i.width), r = !0), this.currentBBox.h !== i.height && (this.currentBBox.h = i.height, this.shapeCont.setAttribute("height", i.height), r = !0), (r || this.currentBBox.x !== i.x || this.currentBBox.y !== i.y) && (this.currentBBox.w = i.width, this.currentBBox.h = i.height, this.currentBBox.x = i.x, this.currentBBox.y = i.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.shapeCont.style.transform = this.shapeCont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
      }
    }, createElement(HBaseElement, HTextElement), extendPrototype(ITextElement, HTextElement), HTextElement.prototype.createElements = function () {
      this.isMasked = this.checkMasks();
      var t = document.createElement("div");
      if (styleDiv(t), this.layerElement = t, this.transformedElement = t, this.isMasked) {
        this.renderType = "svg";
        var e = document.createElementNS(svgNS, "svg");
        styleDiv(e), this.cont = e, this.compW = this.comp.data.w, this.compH = this.comp.data.h, e.setAttribute("width", this.compW), e.setAttribute("height", this.compH);
        var i = document.createElementNS(svgNS, "g");
        e.appendChild(i), t.appendChild(e), this.maskedElement = i, this.innerElem = i
      } else this.renderType = "html", this.innerElem = t;
      this.baseElement = t, this.checkParenting()
    }, HTextElement.prototype.buildNewText = function () {
      var t = this.textProperty.currentData;
      this.renderedLetters = Array.apply(null, {
        length: this.textProperty.currentData.l ? this.textProperty.currentData.l.length : 0
      });
      var e = this.innerElem.style;
      e.color = e.fill = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)", t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var i = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars)
        if (e.fontSize = t.s + "px", e.lineHeight = t.s + "px", i.fClass) this.innerElem.className = i.fClass;
        else {
          e.fontFamily = i.fFamily;
          var r = t.fWeight,
            s = t.fStyle;
          e.fontStyle = s, e.fontWeight = r
        } var n, a, o = t.l;
      a = o.length;
      var l, h, p, c, d = this.mHelper,
        u = "",
        f = 0;
      for (n = 0; n < a; n += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[f] ? l = this.textPaths[f] : (l = document.createElementNS(svgNS, "path"), l.setAttribute("stroke-linecap", "butt"), l.setAttribute("stroke-linejoin", "round"), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[f] ? (h = this.textSpans[f], p = h.children[0]) : (h = document.createElement("div"), p = document.createElementNS(svgNS, "svg"), p.appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[f] ? this.textPaths[f] : document.createElementNS(svgNS, "text") : this.textSpans[f] ? (h = this.textSpans[f], l = this.textPaths[f]) : (h = document.createElement("span"), styleDiv(h), l = document.createElement("span"), styleDiv(l), h.appendChild(l)), this.globalData.fontManager.chars) {
          var m, g = this.globalData.fontManager.getCharData(t.t.charAt(n), i.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (m = g ? g.data : null, d.reset(), m && m.shapes && (c = m.shapes[0].it, d.scale(t.s / 100, t.s / 100), u = this.createPathShape(d, c), l.setAttribute("d", u)), this.isMasked) this.innerElem.appendChild(l);
          else if (this.innerElem.appendChild(h), m && m.shapes) {
            document.body.appendChild(p);
            var v = p.getBBox();
            p.setAttribute("width", v.width + 2), p.setAttribute("height", v.height + 2), p.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2)), p.style.transform = p.style.webkitTransform = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)", o[n].yOffset = v.y - 1, h.appendChild(p)
          } else p.setAttribute("width", 1), p.setAttribute("height", 1)
        } else l.textContent = o[n].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked ? this.innerElem.appendChild(l) : (this.innerElem.appendChild(h), l.style.transform = l.style.webkitTransform = "translate3d(0," + -t.s / 1.2 + "px,0)");
        this.isMasked ? this.textSpans[f] = l : this.textSpans[f] = h, this.textSpans[f].style.display = "block", this.textPaths[f] = l, f += 1
      }
      for (; f < this.textSpans.length;) this.textSpans[f].style.display = "none", f += 1
    }, HTextElement.prototype.hide = SVGTextElement.prototype.hide, HTextElement.prototype.renderFrame = function (t) {
      if (!1 === this._parent.renderFrame.call(this, t)) return void this.hide();
      if (this.hidden && (this.hidden = !1, this.innerElem.style.display = "block", this.layerElement.style.display = "block"), this.data.singleShape) {
        if (!this.firstFrame && !this.lettersChangedFlag) return;
        this.isMasked && this.finalTransform.matMdf && (this.cont.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)")
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var e, i, r = 0,
          s = this.textAnimator.renderedLetters,
          n = this.textProperty.currentData.l;
        i = n.length;
        var a, o, l;
        for (e = 0; e < i; e += 1) n[e].n ? r += 1 : (o = this.textSpans[e], l = this.textPaths[e], a = s[r], r += 1, this.isMasked ? o.setAttribute("transform", a.m) : o.style.transform = o.style.webkitTransform = a.m, o.style.opacity = a.o, a.sw && l.setAttribute("stroke-width", a.sw), a.sc && l.setAttribute("stroke", a.sc), a.fc && (l.setAttribute("fill", a.fc), l.style.color = a.fc));
        if (this.isVisible && (this.elemMdf || this.firstFrame) && this.innerElem.getBBox) {
          var h = this.innerElem.getBBox();
          this.currentBBox.w !== h.width && (this.currentBBox.w = h.width, this.cont.setAttribute("width", h.width)), this.currentBBox.h !== h.height && (this.currentBBox.h = h.height, this.cont.setAttribute("height", h.height));
          this.currentBBox.w === h.width + 2 && this.currentBBox.h === h.height + 2 && this.currentBBox.x === h.x - 1 && this.currentBBox.y === h.y - 1 || (this.currentBBox.w = h.width + 2, this.currentBBox.h = h.height + 2, this.currentBBox.x = h.x - 1, this.currentBBox.y = h.y - 1, this.cont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), this.cont.style.transform = this.cont.style.webkitTransform = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)")
        }
        this.firstFrame && (this.firstFrame = !1)
      }
    }, createElement(HBaseElement, HImageElement), HImageElement.prototype.createElements = function () {
      var t = this.globalData.getAssetsPath(this.assetData),
        e = new Image;
      if (this.data.hasMask) {
        var i = document.createElement("div");
        styleDiv(i);
        var r = document.createElementNS(svgNS, "svg");
        styleDiv(r), r.setAttribute("width", this.assetData.w), r.setAttribute("height", this.assetData.h), i.appendChild(r), this.imageElem = document.createElementNS(svgNS, "image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), r.appendChild(this.imageElem), this.layerElement = i, this.transformedElement = i, this.baseElement = i, this.innerElem = i, this.maskedElement = this.imageElem
      } else styleDiv(e), this.layerElement = e, this.baseElement = e, this.innerElem = e, this.transformedElement = e;
      e.src = t, this.data.ln && this.innerElem.setAttribute("id", this.data.ln), this.checkParenting()
    }, HImageElement.prototype.show = HSolidElement.prototype.show, HImageElement.prototype.hide = HSolidElement.prototype.hide, HImageElement.prototype.renderFrame = HSolidElement.prototype.renderFrame, HImageElement.prototype.destroy = HSolidElement.prototype.destroy, createElement(HBaseElement, HCameraElement), HCameraElement.prototype.setup = function () {
      var t, e, i = this.comp.threeDElements.length;
      for (t = 0; t < i; t += 1) e = this.comp.threeDElements[t], e.perspectiveElem.style.perspective = e.perspectiveElem.style.webkitPerspective = this.pe.v + "px", e.container.style.transformOrigin = e.container.style.mozTransformOrigin = e.container.style.webkitTransformOrigin = "0px 0px 0px", e.perspectiveElem.style.transform = e.perspectiveElem.style.webkitTransform = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"
    }, HCameraElement.prototype.createElements = function () {}, HCameraElement.prototype.hide = function () {}, HCameraElement.prototype.renderFrame = function () {
      var t, e, i = this.firstFrame;
      if (this.hierarchy)
        for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = !!this.hierarchy[t].finalTransform.mProp.mdf || i;
      if (i || this.p && this.p.mdf || this.px && (this.px.mdf || this.py.mdf || this.pz.mdf) || this.rx.mdf || this.ry.mdf || this.rz.mdf || this.or.mdf || this.a && this.a.mdf) {
        if (this.mat.reset(), this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var r = [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]],
            s = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2) + Math.pow(r[2], 2)),
            n = [r[0] / s, r[1] / s, r[2] / s],
            a = Math.sqrt(n[2] * n[2] + n[0] * n[0]),
            o = Math.atan2(n[1], a),
            l = Math.atan2(n[0], -n[2]);
          this.mat.rotateY(l).rotateX(-o)
        }
        if (this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v), this.hierarchy) {
          var h;
          for (e = this.hierarchy.length, t = 0; t < e; t += 1) h = this.hierarchy[t].finalTransform.mProp.iv.props, this.mat.transform(h[0], h[1], h[2], h[3], h[4], h[5], h[6], h[7], h[8], h[9], h[10], h[11], -h[12], -h[13], h[14], h[15])
        }
        e = this.comp.threeDElements.length;
        var p;
        for (t = 0; t < e; t += 1) p = this.comp.threeDElements[t], p.container.style.transform = p.container.style.webkitTransform = this.mat.toCSS()
      }
      this.firstFrame = !1
    }, HCameraElement.prototype.destroy = function () {};
    var Expressions = function () {
      function t(t) {
        t.renderer.compInterface = CompExpressionInterface(t.renderer), t.renderer.globalData.projectInterface.registerComposition(t.renderer)
      }
      var e = {};
      return e.initExpressions = t, e
    }();
    expressionsPlugin = Expressions,
      function () {
        function t() {
          return this.pv
        }

        function e(t, e, i) {
          if (!this.k || !this.keyframes) return this.pv;
          var r = this.comp.renderedFrame,
            s = this.keyframes,
            n = s[s.length - 1].t;
          if (r <= n) return this.pv;
          var a, o;
          i ? (a = e ? Math.abs(n - elem.comp.globalData.frameRate * e) : Math.max(0, n - this.elem.data.ip), o = n - a) : ((!e || e > s.length - 1) && (e = s.length - 1), o = s[s.length - 1 - e].t, a = n - o);
          var l, h, p, c = this.offsetTime || 0;
          if ("pingpong" === t.toLowerCase()) {
            if (Math.floor((r - o) / a) % 2 != 0) return this.getValueAtTime((a - (r - o) % a + o - c) / this.comp.globalData.frameRate, 0)
          } else {
            if ("offset" === t) {
              var d = this.getValueAtTime(o / this.comp.globalData.frameRate, 0),
                u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime(((r - o) % a + o) / this.comp.globalData.frameRate, 0),
                m = Math.floor((r - o) / a);
              if (this.pv.length) {
                for (p = new Array(d.length), h = p.length, l = 0; l < h; l += 1) p[l] = (u[l] - d[l]) * m + f[l];
                return p
              }
              return (u - d) * m + f
            }
            if ("continue" === t) {
              var g = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                v = this.getValueAtTime((n - .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (p = new Array(g.length), h = p.length, l = 0; l < h; l += 1) p[l] = g[l] + (g[l] - v[l]) * ((r - n) / this.comp.globalData.frameRate) / 5e-4;
                return p
              }
              return g + (r - n) / .001 * (g - v)
            }
          }
          return this.getValueAtTime(((r - o) % a + o - c) / this.comp.globalData.frameRate, 0)
        }

        function i(t, e, i) {
          if (!this.k) return this.pv;
          var r = time * elem.comp.globalData.frameRate,
            s = this.keyframes,
            n = s[0].t,
            a = this.offsetTime || 0;
          if (r >= n) return this.pv;
          var o, l;
          i ? (o = e ? Math.abs(elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - n), l = n + o) : ((!e || e > s.length - 1) && (e = s.length - 1), l = s[e].t, o = l - n);
          var h, p, c;
          if ("pingpong" === t) {
            if (Math.floor((n - r) / o) % 2 == 0) return this.getValueAtTime(((n - r) % o + n - a) / this.comp.globalData.frameRate, 0)
          } else {
            if ("offset" === t) {
              var d = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                u = this.getValueAtTime(l / this.comp.globalData.frameRate, 0),
                f = this.getValueAtTime((o - (n - r) % o + n) / this.comp.globalData.frameRate, 0),
                m = Math.floor((n - r) / o) + 1;
              if (this.pv.length) {
                for (c = new Array(d.length), p = c.length, h = 0; h < p; h += 1) c[h] = f[h] - (u[h] - d[h]) * m;
                return c
              }
              return f - (u - d) * m
            }
            if ("continue" === t) {
              var g = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                v = this.getValueAtTime((n + .001) / this.comp.globalData.frameRate, 0);
              if (this.pv.length) {
                for (c = new Array(g.length), p = c.length, h = 0; h < p; h += 1) c[h] = g[h] + (g[h] - v[h]) * (n - r) / .001;
                return c
              }
              return g + (g - v) * (n - r) / .001
            }
          }
          return this.getValueAtTime((o - (n - r) % o + n - a) / this.comp.globalData.frameRate, 0)
        }

        function r(t) {
          if (this._cachingAtTime || (this._cachingAtTime = {
              lastValue: -99999,
              lastIndex: 0
            }), t !== this._cachingAtTime.lastFrame) {
            t *= this.elem.globalData.frameRate, t -= this.offsetTime;
            var e = this._caching.lastFrame < t ? this._caching.lastIndex : 0,
              i = this.interpolateValue(t, e, this.pv, this._cachingAtTime);
            this._cachingAtTime.lastIndex = i.iterationIndex, this._cachingAtTime.value = i.value, this._cachingAtTime.lastFrame = t
          }
          return this._cachingAtTime.value
        }

        function s(t) {
          if (void 0 !== this.vel) return this.vel;
          var e, i = this.getValueAtTime(t),
            r = this.getValueAtTime(t + -.01);
          if (i.length) {
            e = Array.apply(null, {
              length: i.length
            });
            var s;
            for (s = 0; s < i.length; s += 1) e[s] = (r[s] - i[s]) / -.01
          } else e = (r - i) / -.01;
          return e
        }

        function n(t) {
          this.propertyGroup = t
        }

        function a(t, e, i) {
          e.x && (i.k = !0, i.x = !0, i.getValue && (i.getPreValue = i.getValue), i.getValue = ExpressionManager.initiateExpression.bind(i)(t, e, i))
        }

        function o(t) {
          console.log("time:", t)
        }

        function l(t) {}

        function h(t) {
          if (this._shapeValueAtTime || (this._lastIndexAtTime = 0, this._lastTimeAtTime = -999999, this._shapeValueAtTime = shape_pool.clone(this.pv)), t !== this._lastTimeAtTime) {
            this._lastTimeAtTime = t, t *= this.elem.globalData.frameRate;
            var e = this.interpolateShape(t, this._lastIndexAtTime, this._shapeValueAtTime, !1);
            this._lastIndexAtTime = e.iterationIndex
          }
          return this._shapeValueAtTime
        }
        var p = function () {
            function e(t, e) {
              return this.textIndex = t + 1, this.textTotal = e, this.getValue(), this.v
            }
            return function (i, o) {
              this.pv = 1, this.comp = i.comp, this.elem = i, this.mult = .01, this.type = "textSelector", this.textTotal = o.totalChars, this.selectorValue = 100, this.lastValue = [1, 1, 1], a.bind(this)(i, o, this), this.getMult = e, this.getVelocityAtTime = s, this.kf ? this.getValueAtTime = r.bind(this) : this.getValueAtTime = t.bind(this), this.setGroupProperty = n
            }
          }(),
          c = PropertyFactory.getProp;
        PropertyFactory.getProp = function (h, p, d, u, f) {
          var m = c(h, p, d, u, f);
          2 === d ? m.dynamicProperties.length ? m.getValueAtTime = o.bind(m) : m.getValueAtTime = l.bind(m) : m.kf ? m.getValueAtTime = r.bind(m) : m.getValueAtTime = t.bind(m), m.setGroupProperty = n, m.loopOut = e, m.loopIn = i, m.getVelocityAtTime = s, m.numKeys = 1 === p.a ? p.k.length : 0;
          var g = m.k;
          return void 0 !== p.ix && Object.defineProperty(m, "propertyIndex", {
            get: function () {
              return p.ix
            }
          }), a(h, p, m), !g && m.x && f.push(m), m
        };
        var d = ShapePropertyFactory.getConstructorFunction(),
          u = ShapePropertyFactory.getKeyframedConstructorFunction();
        d.prototype.vertices = function (t, e) {
          var i = this.v;
          void 0 !== e && (i = this.getValueAtTime(e, 0));
          var r, s = i._length,
            n = i[t],
            a = i.v,
            o = Array.apply(null, {
              length: s
            });
          for (r = 0; r < s; r += 1) o[r] = "i" === t || "o" === t ? [n[r][0] - a[r][0], n[r][1] - a[r][1]] : [n[r][0], n[r][1]];
          return o
        }, d.prototype.points = function (t) {
          return this.vertices("v", t)
        }, d.prototype.inTangents = function (t) {
          return this.vertices("i", t)
        }, d.prototype.outTangents = function (t) {
          return this.vertices("o", t)
        }, d.prototype.isClosed = function () {
          return this.v.c
        }, d.prototype.pointOnPath = function (t, e) {
          var i = this.v;
          void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
          for (var r = this._segmentsLength, s = r.lengths, n = r.totalLength * t, a = 0, o = s.length, l = 0; a < o;) {
            if (l + s[a].addedLength > n) {
              s[a].segments;
              var h = a,
                p = i.c && a === o - 1 ? 0 : a + 1,
                c = (n - l) / s[a].addedLength,
                d = bez.getPointInSegment(i.v[h], i.v[p], i.o[h], i.i[p], c, s[a]);
              break
            }
            l += s[a].addedLength, a += 1
          }
          return d || (d = i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]), d
        }, d.prototype.vectorOnPath = function (t, e, i) {
          t = 1 == t ? this.v.c ? 0 : .999 : t;
          var r = this.pointOnPath(t, e),
            s = this.pointOnPath(t + .001, e),
            n = s[0] - r[0],
            a = s[1] - r[1],
            o = Math.sqrt(Math.pow(n, 2) + Math.pow(a, 2));
          return "tangent" === i ? [n / o, a / o] : [-a / o, n / o]
        }, d.prototype.tangentOnPath = function (t, e) {
          return this.vectorOnPath(t, e, "tangent")
        }, d.prototype.normalOnPath = function (t, e) {
          return this.vectorOnPath(t, e, "normal")
        }, d.prototype.setGroupProperty = n, d.prototype.getValueAtTime = t, u.prototype.vertices = d.prototype.vertices, u.prototype.points = d.prototype.points, u.prototype.inTangents = d.prototype.inTangents, u.prototype.outTangents = d.prototype.outTangents, u.prototype.isClosed = d.prototype.isClosed, u.prototype.pointOnPath = d.prototype.pointOnPath, u.prototype.vectorOnPath = d.prototype.vectorOnPath, u.prototype.tangentOnPath = d.prototype.tangentOnPath, u.prototype.normalOnPath = d.prototype.normalOnPath, u.prototype.setGroupProperty = d.prototype.setGroupProperty, u.prototype.getValueAtTime = h;
        var f = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, i, r, s) {
          var n = f(t, e, i, r, s),
            o = n.k;
          return void 0 !== e.ix && Object.defineProperty(n, "propertyIndex", {
            get: function () {
              return e.ix
            }
          }), 3 === i ? a(t, e.pt, n) : 4 === i && a(t, e.ks, n), !o && n.x && r.push(n), n
        };
        var m = PropertyFactory.getTextSelectorProp;
        PropertyFactory.getTextSelectorProp = function (t, e, i) {
          return 1 === e.t ? new p(t, e, i) : m(t, e, i)
        }
      }(),
      function () {
        function t() {
          return !!this.data.d.x && (this.comp = this.elem.comp, this.getValue && (this.getPreValue = this.getValue), this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.getValue = this.getExpressionValue, !0)
        }
        TextProperty.prototype.searchProperty = function () {
          return this.kf = this.searchExpressions() || this.data.d.k.length > 1, this.kf
        }, TextProperty.prototype.getExpressionValue = function (t) {
          this.calculateExpression(), this.mdf && (this.currentData.t = this.v.toString(), this.completeTextData(this.currentData))
        }, TextProperty.prototype.searchExpressions = t
      }();
    var ExpressionManager = function () {
        function duplicatePropertyValue(t, e) {
          if (e = e || 1, "number" == typeof t || t instanceof Number) return t * e;
          if (t.i) return JSON.parse(JSON.stringify(t));
          var i, r = Array.apply(null, {
              length: t.length
            }),
            s = t.length;
          for (i = 0; i < s; i += 1) r[i] = t[i] * e;
          return r
        }

        function shapesEqual(t, e) {
          if (t._length !== e._length || t.c !== e.c) return !1;
          var i, r = t._length;
          for (i = 0; i < r; i += 1)
            if (t.v[i][0] !== e.v[i][0] || t.v[i][1] !== e.v[i][1] || t.o[i][0] !== e.o[i][0] || t.o[i][1] !== e.o[i][1] || t.i[i][0] !== e.i[i][0] || t.i[i][1] !== e.i[i][1]) return !1;
          return !0
        }

        function $bm_neg(t) {
          var e = typeof t;
          if ("number" === e || "boolean" === e || t instanceof Number) return -t;
          if (t.constructor === Array) {
            var i, r = t.length,
              s = [];
            for (i = 0; i < r; i += 1) s[i] = -t[i];
            return s
          }
        }

        function sum(t, e) {
          var i = typeof t,
            r = typeof e;
          if ("string" === i || "string" === r) return t + e;
          if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t + e;
          if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t[0] = t[0] + e, t;
          if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) return e[0] = t + e[0], e;
          if (t.constructor === Array && e.constructor === Array) {
            for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || e[s] instanceof Number) ? o[s] = t[s] + e[s] : o[s] = void 0 == e[s] ? t[s] : t[s] || e[s], s += 1;
            return o
          }
          return 0
        }

        function sub(t, e) {
          var i = typeof t,
            r = typeof e;
          if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return "string" === i && (t = parseInt(t)), "string" === r && (e = parseInt(e)), t - e;
          if (t.constructor === Array && ("number" === r || "boolean" === r || "string" === r || e instanceof Number)) return t[0] = t[0] - e, t;
          if (("number" === i || "boolean" === i || "string" === i || t instanceof Number) && e.constructor === Array) return e[0] = t - e[0], e;
          if (t.constructor === Array && e.constructor === Array) {
            for (var s = 0, n = t.length, a = e.length, o = []; s < n || s < a;)("number" == typeof t[s] || t[s] instanceof Number) && ("number" == typeof e[s] || (e[s], Number), !0) ? o[s] = t[s] - e[s] : o[s] = void 0 == e[s] ? t[s] : t[s] || e[s], s += 1;
            return o
          }
          return 0
        }

        function mul(t, e) {
          var i, r = typeof t,
            s = typeof e;
          if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) return t * e;
          var n, a;
          if (t.constructor === Array && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) {
            for (a = t.length, i = Array.apply(null, {
                length: a
              }), n = 0; n < a; n += 1) i[n] = t[n] * e;
            return i
          }
          if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) {
            for (a = e.length, i = Array.apply(null, {
                length: a
              }), n = 0; n < a; n += 1) i[n] = t * e[n];
            return i
          }
          return 0
        }

        function div(t, e) {
          var i, r = typeof t,
            s = typeof e;
          if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) return t / e;
          var n, a;
          if (t.constructor === Array && ("number" === s || "boolean" === s || "string" === s || e instanceof Number)) {
            for (a = t.length, i = Array.apply(null, {
                length: a
              }), n = 0; n < a; n += 1) i[n] = t[n] / e;
            return i
          }
          if (("number" === r || "boolean" === r || "string" === r || t instanceof Number) && e.constructor === Array) {
            for (a = e.length, i = Array.apply(null, {
                length: a
              }), n = 0; n < a; n += 1) i[n] = t / e[n];
            return i
          }
          return 0
        }

        function mod(t, e) {
          return "string" == typeof t && (t = parseInt(t)), "string" == typeof e && (e = parseInt(e)), t % e
        }

        function clamp(t, e, i) {
          if (e > i) {
            var r = i;
            i = e, e = r
          }
          return Math.min(Math.max(t, e), i)
        }

        function radiansToDegrees(t) {
          return t / degToRads
        }

        function degreesToRadians(t) {
          return t * degToRads
        }

        function length(t, e) {
          if ("number" == typeof t || t instanceof Number) return e = e || 0, Math.abs(t - e);
          e || (e = helperLengthArray);
          var i, r = Math.min(t.length, e.length),
            s = 0;
          for (i = 0; i < r; i += 1) s += Math.pow(e[i] - t[i], 2);
          return Math.sqrt(s)
        }

        function normalize(t) {
          return div(t, length(t))
        }

        function rgbToHsl(t) {
          var e, i, r = t[0],
            s = t[1],
            n = t[2],
            a = Math.max(r, s, n),
            o = Math.min(r, s, n),
            l = (a + o) / 2;
          if (a == o) e = i = 0;
          else {
            var h = a - o;
            switch (i = l > .5 ? h / (2 - a - o) : h / (a + o), a) {
              case r:
                e = (s - n) / h + (s < n ? 6 : 0);
                break;
              case s:
                e = (n - r) / h + 2;
                break;
              case n:
                e = (r - s) / h + 4
            }
            e /= 6
          }
          return [e, i, l, t[3]]
        }

        function hslToRgb(t) {
          function e(t, e, i) {
            return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t
          }
          var i, r, s, n = t[0],
            a = t[1],
            o = t[2];
          if (0 == a) i = r = s = o;
          else {
            var l = o < .5 ? o * (1 + a) : o + a - o * a,
              h = 2 * o - l;
            i = e(h, l, n + 1 / 3), r = e(h, l, n), s = e(h, l, n - 1 / 3)
          }
          return [i, r, s, t[3]]
        }

        function linear(t, e, i, r, s) {
          if (void 0 === r || void 0 === s) return linear(t, 0, 1, e, i);
          if (t <= e) return r;
          if (t >= i) return s;
          var n = i === e ? 0 : (t - e) / (i - e);
          if (!r.length) return r + (s - r) * n;
          var a, o = r.length,
            l = Array.apply(null, {
              length: o
            });
          for (a = 0; a < o; a += 1) l[a] = r[a] + (s[a] - r[a]) * n;
          return l
        }

        function random(t, e) {
          if (void 0 === e && (void 0 === t ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
            var i, r = e.length;
            t || (t = Array.apply(null, {
              length: r
            }));
            var s = Array.apply(null, {
                length: r
              }),
              n = BMMath.random();
            for (i = 0; i < r; i += 1) s[i] = t[i] + n * (e[i] - t[i]);
            return s
          }
          return void 0 === t && (t = 0), t + BMMath.random() * (e - t)
        }

        function createPath(t, e, r, s) {
          e = e && e.length ? e : t, r = r && r.length ? r : t;
          var n = shape_pool.newShape(),
            a = t.length;
          for (n.setPathData(s, a), i = 0; i < a; i += 1) n.setTripleAt(t[i][0], t[i][1], r[i][0] + t[i][0], r[i][1] + t[i][1], e[i][0] + t[i][0], e[i][1] + t[i][1], i, !0);
          return n
        }

        function initiateExpression(elem, data, property) {
          function lookAt(t, e) {
            var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]],
              r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
            return [-Math.atan2(i[1], i[2]) / degToRads, r, 0]
          }

          function easeOut(t, e, i) {
            return -(i - e) * t * (t - 2) + e
          }

          function nearestKey(t) {
            var e, i, r, s = data.k.length;
            if (data.k.length && "number" != typeof data.k[0])
              if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
              else {
                for (e = 0; e < s - 1; e += 1) {
                  if (t === data.k[e].t) {
                    i = e + 1, r = data.k[e].t;
                    break
                  }
                  if (t > data.k[e].t && t < data.k[e + 1].t) {
                    t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                    break
                  }
                } - 1 === i && (i = e + 1, r = data.k[e].t)
              }
            else i = 0, r = 0;
            var n = {};
            return n.index = i, n.time = r / elem.comp.globalData.frameRate, n
          }

          function key(t) {
            var e, i, r;
            if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
            t -= 1, e = {
              time: data.k[t].t / elem.comp.globalData.frameRate
            };
            var s;
            for (s = t !== data.k.length - 1 || data.k[t].h ? data.k[t].s : data.k[t - 1].e, r = s.length, i = 0; i < r; i += 1) e[i] = s[i];
            return e
          }

          function framesToTime(t, e) {
            return e || (e = elem.comp.globalData.frameRate), t / e
          }

          function timeToFrames(t, e) {
            return t || 0 === t || (t = time), e || (e = elem.comp.globalData.frameRate), t * e
          }

          function seedRandom(t) {
            BMMath.seedrandom(randSeed + t)
          }

          function sourceRectAtTime() {
            return elem.sourceRectAtTime()
          }

          function executeExpression() {
            if (_needsRandom && seedRandom(randSeed), this.frameExpressionId !== elem.globalData.frameId || "textSelector" === this.type) {
              if (this.lock) return this.v = duplicatePropertyValue(this.pv, this.mult), !0;
              "textSelector" === this.type && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), anchorPoint = transform.anchorPoint), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), hasParent = !(!elem.hierarchy || !elem.hierarchy.length), hasParent && !parent && (parent = elem.hierarchy[0].layerInterface), this.lock = !0, this.getPreValue && this.getPreValue(), value = this.pv, time = this.comp.renderedFrame / this.comp.globalData.frameRate, needsVelocity && (velocity = velocityAtTime(time)), bindedFn(), this.frameExpressionId = elem.globalData.frameId;
              var t, e;
              if (this.mult)
                if ("number" == typeof this.v || this.v instanceof Number || this.v instanceof String || "string" == typeof this.v) this.v *= this.mult;
                else if (1 === this.v.length) this.v = this.v[0] * this.mult;
              else
                for (e = this.v.length, value === this.v && (this.v = 2 === e ? [value[0], value[1]] : [value[0], value[1], value[2]]), t = 0; t < e; t += 1) this.v[t] *= this.mult;
              if (1 === this.v.length && (this.v = this.v[0]), "number" == typeof this.v || this.v instanceof Number || this.v instanceof String || "string" == typeof this.v) this.lastValue !== this.v && (this.lastValue = this.v, this.mdf = !0);
              else if (this.v._length) shapesEqual(this.v, this.localShapeCollection.shapes[0]) || (this.mdf = !0, this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(shape_pool.clone(this.v)));
              else
                for (e = this.v.length, t = 0; t < e; t += 1) this.v[t] !== this.lastValue[t] && (this.lastValue[t] = this.v[t], this.mdf = !0);
              this.lock = !1
            }
          }
          var val = data.x,
            needsVelocity = /velocity(?![\w\d])/.test(val),
            _needsRandom = -1 !== val.indexOf("random"),
            elemType = elem.data.ty,
            transform, content, effect, thisComp = elem.comp,
            thisProperty = property;
          elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate;
          var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
            outPoint = elem.data.op / elem.comp.globalData.frameRate,
            width = elem.data.sw ? elem.data.sw : 0,
            height = elem.data.sh ? elem.data.sh : 0,
            loopIn, loop_in, loopOut, loop_out, toWorld, fromWorld, fromComp, fromCompToSurface, anchorPoint, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, fn = new Function,
            fn = eval("[function(){" + val + ";if($bm_rt.__shapeObject){this.v=shape_pool.clone($bm_rt.v);}else{this.v=$bm_rt;}}]")[0],
            bindedFn = fn.bind(this),
            numKeys = property.kf ? data.k.length : 0,
            wiggle = function (t, e) {
              var i, r, s = this.pv.length ? this.pv.length : 1,
                n = Array.apply(null, {
                  len: s
                });
              for (r = 0; r < s; r += 1) n[r] = 0;
              t = 5;
              var a = Math.floor(time * t);
              for (i = 0, r = 0; i < a;) {
                for (r = 0; r < s; r += 1) n[r] += -e + 2 * e * BMMath.random();
                i += 1
              }
              var o = time * t,
                l = o - Math.floor(o),
                h = Array.apply({
                  length: s
                });
              if (s > 1) {
                for (r = 0; r < s; r += 1) h[r] = this.pv[r] + n[r] + (-e + 2 * e * BMMath.random()) * l;
                return h
              }
              return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * l
            }.bind(this);
          thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut);
          var loopInDuration = function (t, e) {
              return loopIn(t, e, !0)
            }.bind(this),
            loopOutDuration = function (t, e) {
              return loopOut(t, e, !0)
            }.bind(this);
          this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
          var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
            time, velocity, value, textIndex, textTotal, selectorValue, index = elem.data.ind,
            hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
            parent, randSeed = Math.floor(1e6 * Math.random());
          return executeExpression
        }
        var ob = {},
          Math = BMMath,
          window = null,
          document = null,
          add = sum,
          radians_to_degrees = radiansToDegrees,
          degrees_to_radians = radiansToDegrees,
          helperLengthArray = [0, 0, 0, 0, 0, 0];
        return ob.initiateExpression = initiateExpression, ob
      }(),
      ShapeExpressionInterface = function () {
        function t(t, e, i) {
          return f(t, e, i)
        }

        function e(t, e, i) {
          return g(t, e, i)
        }

        function i(t, e, i) {
          return v(t, e, i)
        }

        function r(t, e, i) {
          return y(t, e, i)
        }

        function s(t, e, i) {
          return _(t, e, i)
        }

        function n(t, e, i) {
          return b(t, e, i)
        }

        function a(t, e, i) {
          return T(t, e, i)
        }

        function o(t, e, i) {
          return E(t, e, i)
        }

        function l(t, e, i) {
          return w(t, e, i)
        }

        function h(t, e, i) {
          return x(t, e, i)
        }

        function p(t, e, i) {
          return S(t, e, i)
        }

        function c(t, e, i) {
          return C(t, e, i)
        }

        function d(t, e, i) {
          var r, s = [],
            n = t ? t.length : 0;
          for (r = 0; r < n; r += 1) "gr" == t[r].ty ? s.push(ShapeExpressionInterface.createGroupInterface(t[r], e[r], i)) : "fl" == t[r].ty ? s.push(ShapeExpressionInterface.createFillInterface(t[r], e[r], i)) : "st" == t[r].ty ? s.push(ShapeExpressionInterface.createStrokeInterface(t[r], e[r], i)) : "tm" == t[r].ty ? s.push(ShapeExpressionInterface.createTrimInterface(t[r], e[r], i)) : "tr" == t[r].ty || ("el" == t[r].ty ? s.push(ShapeExpressionInterface.createEllipseInterface(t[r], e[r], i)) : "sr" == t[r].ty ? s.push(ShapeExpressionInterface.createStarInterface(t[r], e[r], i)) : "sh" == t[r].ty ? s.push(ShapeExpressionInterface.createPathInterface(t[r], e[r], i)) : "rc" == t[r].ty ? s.push(ShapeExpressionInterface.createRectInterface(t[r], e[r], i)) : "rd" == t[r].ty ? s.push(ShapeExpressionInterface.createRoundedInterface(t[r], e[r], i)) : "rp" == t[r].ty && s.push(ShapeExpressionInterface.createRepatearInterface(t[r], e[r], i)));
          return s
        }
        var u = {
            createShapeInterface: t,
            createGroupInterface: e,
            createTrimInterface: s,
            createStrokeInterface: r,
            createTransformInterface: n,
            createEllipseInterface: a,
            createStarInterface: o,
            createRectInterface: l,
            createRoundedInterface: h,
            createRepatearInterface: p,
            createPathInterface: c,
            createFillInterface: i
          },
          f = function () {
            return function (t, e, i) {
              function r(t) {
                if ("number" == typeof t) return s[t - 1];
                for (var e = 0, i = s.length; e < i;) {
                  if (s[e]._name === t) return s[e];
                  e += 1
                }
              }
              var s;
              return r.propertyGroup = i, s = d(t, e, r), r
            }
          }(),
          m = function () {
            return function (t, e, i) {
              var r, s = function (t) {
                for (var e = 0, i = r.length; e < i;) {
                  if (r[e]._name === t || r[e].mn === t || r[e].propertyIndex === t || r[e].ix === t || r[e].ind === t) return r[e];
                  e += 1
                }
                if ("number" == typeof t) return r[t - 1]
              };
              return s.propertyGroup = function (t) {
                return 1 === t ? s : i(t - 1)
              }, r = d(t.it, e.it, s.propertyGroup), s.numProperties = r.length, s.propertyIndex = t.cix, s
            }
          }(),
          g = function () {
            return function (t, e, i) {
              var r = function (t) {
                switch (t) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return r.content;
                  case "ADBE Vector Transform Group":
                  case 3:
                  default:
                    return r.transform
                }
              };
              r.propertyGroup = function (t) {
                return 1 === t ? r : i(t - 1)
              };
              var s = m(t, e, r.propertyGroup),
                n = ShapeExpressionInterface.createTransformInterface(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup);
              return r.content = s, r.transform = n, Object.defineProperty(r, "_name", {
                get: function () {
                  return t.nm
                }
              }), r.numProperties = t.np, r.propertyIndex = t.ix, r.nm = t.nm, r.mn = t.mn, r
            }
          }(),
          v = function () {
            return function (t, e, i) {
              function r(t) {
                return "Color" === t || "color" === t ? r.color : "Opacity" === t || "opacity" === t ? r.opacity : void 0
              }
              return Object.defineProperty(r, "color", {
                get: function () {
                  return ExpressionValue(e.c, 1 / e.c.mult, "color")
                }
              }), Object.defineProperty(r, "opacity", {
                get: function () {
                  return ExpressionValue(e.o, 100)
                }
              }), Object.defineProperty(r, "_name", {
                value: t.nm
              }), Object.defineProperty(r, "mn", {
                value: t.mn
              }), e.c.setGroupProperty(i), e.o.setGroupProperty(i), r
            }
          }(),
          y = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 === t ? u : i(t - 1)
              }

              function s(t) {
                return 1 === t ? l : r(t - 1)
              }

              function n(t) {
                return "Color" === t || "color" === t ? n.color : "Opacity" === t || "opacity" === t ? n.opacity : "Stroke Width" === t || "stroke width" === t ? n.strokeWidth : void 0
              }
              var a, o = t.d ? t.d.length : 0,
                l = {};
              for (a = 0; a < o; a += 1) ! function (i) {
                Object.defineProperty(l, t.d[i].nm, {
                  get: function () {
                    return ExpressionValue(e.d.dataProps[i].p)
                  }
                })
              }(a), e.d.dataProps[a].p.setGroupProperty(s);
              return Object.defineProperty(n, "color", {
                get: function () {
                  return ExpressionValue(e.c, 1 / e.c.mult, "color")
                }
              }), Object.defineProperty(n, "opacity", {
                get: function () {
                  return ExpressionValue(e.o, 100)
                }
              }), Object.defineProperty(n, "strokeWidth", {
                get: function () {
                  return ExpressionValue(e.w)
                }
              }), Object.defineProperty(n, "dash", {
                get: function () {
                  return l
                }
              }), Object.defineProperty(n, "_name", {
                value: t.nm
              }), Object.defineProperty(n, "mn", {
                value: t.mn
              }), e.c.setGroupProperty(r), e.o.setGroupProperty(r), e.w.setGroupProperty(r), n
            }
          }(),
          _ = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return e === t.e.ix || "End" === e || "end" === e ? s.end : e === t.s.ix ? s.start : e === t.o.ix ? s.offset : void 0
              }
              return s.propertyIndex = t.ix, e.s.setGroupProperty(r), e.e.setGroupProperty(r), e.o.setGroupProperty(r), s.propertyIndex = t.ix, Object.defineProperty(s, "start", {
                get: function () {
                  return ExpressionValue(e.s, 1 / e.s.mult)
                }
              }), Object.defineProperty(s, "end", {
                get: function () {
                  return ExpressionValue(e.e, 1 / e.e.mult)
                }
              }), Object.defineProperty(s, "offset", {
                get: function () {
                  return ExpressionValue(e.o)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          b = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return t.a.ix === e ? s.anchorPoint : t.o.ix === e ? s.opacity : t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.s.ix === e ? s.scale : t.sk && t.sk.ix === e ? s.skew : t.sa && t.sa.ix === e ? s.skewAxis : "Opacity" === e ? s.opacity : "Position" === e ? s.position : "Anchor Point" === e ? s.anchorPoint : "Scale" === e ? s.scale : "Rotation" === e || "ADBE Vector Rotation" === e ? s.rotation : "Skew" === e ? s.skew : "Skew Axis" === e ? s.skewAxis : void 0
              }
              e.transform.mProps.o.setGroupProperty(r), e.transform.mProps.p.setGroupProperty(r), e.transform.mProps.a.setGroupProperty(r), e.transform.mProps.s.setGroupProperty(r), e.transform.mProps.r.setGroupProperty(r), e.transform.mProps.sk && (e.transform.mProps.sk.setGroupProperty(r), e.transform.mProps.sa.setGroupProperty(r)), e.transform.op.setGroupProperty(r), Object.defineProperty(s, "opacity", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.o, 1 / e.transform.mProps.o.mult)
                }
              }), Object.defineProperty(s, "position", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.p)
                }
              }), Object.defineProperty(s, "anchorPoint", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.a)
                }
              });
              return Object.defineProperty(s, "scale", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.s, 1 / e.transform.mProps.s.mult)
                }
              }), Object.defineProperty(s, "rotation", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.r, 1 / e.transform.mProps.r.mult)
                }
              }), Object.defineProperty(s, "skew", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.sk)
                }
              }), Object.defineProperty(s, "skewAxis", {
                get: function () {
                  return ExpressionValue(e.transform.mProps.sa)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.ty = "tr", s.mn = t.mn, s
            }
          }(),
          T = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return t.p.ix === e ? s.position : t.s.ix === e ? s.size : void 0
              }
              s.propertyIndex = t.ix;
              var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return n.s.setGroupProperty(r), n.p.setGroupProperty(r), Object.defineProperty(s, "size", {
                get: function () {
                  return ExpressionValue(n.s)
                }
              }), Object.defineProperty(s, "position", {
                get: function () {
                  return ExpressionValue(n.p)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          E = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return t.p.ix === e ? s.position : t.r.ix === e ? s.rotation : t.pt.ix === e ? s.points : t.or.ix === e || "ADBE Vector Star Outer Radius" === e ? s.outerRadius : t.os.ix === e ? s.outerRoundness : !t.ir || t.ir.ix !== e && "ADBE Vector Star Inner Radius" !== e ? t.is && t.is.ix === e ? s.innerRoundness : void 0 : s.innerRadius
              }
              var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return s.propertyIndex = t.ix, n.or.setGroupProperty(r), n.os.setGroupProperty(r), n.pt.setGroupProperty(r), n.p.setGroupProperty(r), n.r.setGroupProperty(r), t.ir && (n.ir.setGroupProperty(r), n.is.setGroupProperty(r)), Object.defineProperty(s, "position", {
                get: function () {
                  return ExpressionValue(n.p)
                }
              }), Object.defineProperty(s, "rotation", {
                get: function () {
                  return ExpressionValue(n.r, 1 / n.r.mult)
                }
              }), Object.defineProperty(s, "points", {
                get: function () {
                  return ExpressionValue(n.pt)
                }
              }), Object.defineProperty(s, "outerRadius", {
                get: function () {
                  return ExpressionValue(n.or)
                }
              }), Object.defineProperty(s, "outerRoundness", {
                get: function () {
                  return ExpressionValue(n.os)
                }
              }), Object.defineProperty(s, "innerRadius", {
                get: function () {
                  return n.ir ? ExpressionValue(n.ir) : 0
                }
              }), Object.defineProperty(s, "innerRoundness", {
                get: function () {
                  return n.is ? ExpressionValue(n.is, 1 / n.is.mult) : 0
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          w = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return t.p.ix === e ? s.position : t.r.ix === e ? s.roundness : t.s.ix === e || "Size" === e ? s.size : void 0
              }
              var n = "tm" === e.sh.ty ? e.sh.prop : e.sh;
              return s.propertyIndex = t.ix, n.p.setGroupProperty(r), n.s.setGroupProperty(r), n.r.setGroupProperty(r), Object.defineProperty(s, "position", {
                get: function () {
                  return ExpressionValue(n.p)
                }
              }), Object.defineProperty(s, "roundness", {
                get: function () {
                  return ExpressionValue(n.r)
                }
              }), Object.defineProperty(s, "size", {
                get: function () {
                  return ExpressionValue(n.s)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          x = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                if (t.r.ix === e || "Round Corners 1" === e) return s.radius
              }
              var n = e;
              return s.propertyIndex = t.ix, n.rd.setGroupProperty(r), Object.defineProperty(s, "radius", {
                get: function () {
                  return ExpressionValue(n.rd)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          S = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(e) {
                return t.c.ix === e || "Copies" === e ? s.copies : t.o.ix === e || "Offset" === e ? s.offset : void 0
              }
              var n = e;
              return s.propertyIndex = t.ix, n.c.setGroupProperty(r), n.o.setGroupProperty(r), Object.defineProperty(s, "copies", {
                get: function () {
                  return ExpressionValue(n.c)
                }
              }), Object.defineProperty(s, "offset", {
                get: function () {
                  return ExpressionValue(n.o)
                }
              }), Object.defineProperty(s, "_name", {
                get: function () {
                  return t.nm
                }
              }), s.mn = t.mn, s
            }
          }(),
          C = function () {
            return function (t, e, i) {
              function r(t) {
                return 1 == t ? s : i(--t)
              }

              function s(t) {
                if ("Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t) return s.path
              }
              var n = e.sh;
              return n.setGroupProperty(r), Object.defineProperty(s, "path", {
                get: function () {
                  return n.k && n.getValue(), n
                }
              }), Object.defineProperty(s, "shape", {
                get: function () {
                  return n.k && n.getValue(), n
                }
              }), Object.defineProperty(s, "_name", {
                value: t.nm
              }), Object.defineProperty(s, "ix", {
                value: t.ix
              }), Object.defineProperty(s, "mn", {
                value: t.mn
              }), s
            }
          }();
        return u
      }(),
      TextExpressionInterface = function () {
        return function (t) {
          function e() {}
          var i;
          return Object.defineProperty(e, "sourceText", {
            get: function () {
              var e = t.textProperty.currentData.t;
              return void 0 !== t.textProperty.currentData.t && (t.textProperty.currentData.t = void 0, i = new String(e), i.value = e || new String(e)), i
            }
          }), e
        }
      }(),
      LayerExpressionInterface = function () {
        function t(t, e) {
          var i = new Matrix;
          i.reset();
          var r;
          if (r = this._elem.finalTransform.mProp, r.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {
            var s, n = this._elem.hierarchy.length;
            for (s = 0; s < n; s += 1) this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);
            return i.applyToPointArray(t[0], t[1], t[2] || 0)
          }
          return i.applyToPointArray(t[0], t[1], t[2] || 0)
        }

        function e(t, e) {
          var i = new Matrix;
          i.reset();
          var r;
          if (r = this._elem.finalTransform.mProp, r.applyToMatrix(i), this._elem.hierarchy && this._elem.hierarchy.length) {
            var s, n = this._elem.hierarchy.length;
            for (s = 0; s < n; s += 1) this._elem.hierarchy[s].finalTransform.mProp.applyToMatrix(i);
            return i.inversePoint(t)
          }
          return i.inversePoint(t)
        }

        function i(t) {
          var e = new Matrix;
          if (e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length) {
            var i, r = this._elem.hierarchy.length;
            for (i = 0; i < r; i += 1) this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(e);
            return e.inversePoint(t)
          }
          return e.inversePoint(t)
        }
        return function (r) {
          function s(t) {
            a.mask = new MaskManagerInterface(t, r)
          }

          function n(t) {
            a.effect = t
          }

          function a(t) {
            switch (t) {
              case "ADBE Root Vectors Group":
              case "Contents":
              case 2:
                return a.shapeInterface;
              case 1:
              case 6:
              case "Transform":
              case "transform":
              case "ADBE Transform Group":
                return o;
              case 4:
              case "ADBE Effect Parade":
                return a.effect
            }
          }
          var o = TransformExpressionInterface(r.transform);
          return a.toWorld = t, a.fromWorld = e, a.toComp = t, a.fromComp = i, a.sourceRectAtTime = r.sourceRectAtTime.bind(r), a._elem = r, Object.defineProperty(a, "hasParent", {
            get: function () {
              return !!r.hierarchy
            }
          }), Object.defineProperty(a, "parent", {
            get: function () {
              return r.hierarchy[0].layerInterface
            }
          }), Object.defineProperty(a, "rotation", {
            get: function () {
              return o.rotation
            }
          }), Object.defineProperty(a, "scale", {
            get: function () {
              return o.scale
            }
          }), Object.defineProperty(a, "position", {
            get: function () {
              return o.position
            }
          }), Object.defineProperty(a, "anchorPoint", {
            get: function () {
              return o.anchorPoint
            }
          }), Object.defineProperty(a, "transform", {
            get: function () {
              return o
            }
          }), Object.defineProperty(a, "width", {
            get: function () {
              return 0 === r.data.ty ? r.data.w : 100
            }
          }), Object.defineProperty(a, "height", {
            get: function () {
              return 0 === r.data.ty ? r.data.h : 100
            }
          }), Object.defineProperty(a, "source", {
            get: function () {
              return r.data.refId
            }
          }), Object.defineProperty(a, "index", {
            get: function () {
              return r.data.ind
            }
          }), Object.defineProperty(a, "_name", {
            value: r.data.nm
          }), Object.defineProperty(a, "content", {
            get: function () {
              return a.shapeInterface
            }
          }), Object.defineProperty(a, "active", {
            get: function () {
              return r.isVisible
            }
          }), Object.defineProperty(a, "text", {
            get: function () {
              return a.textInterface
            }
          }), a.registerMaskInterface = s, a.registerEffectsInterface = n, a
        }
      }(),
      CompExpressionInterface = function () {
        return function (t) {
          function e(e) {
            for (var i = 0, r = t.layers.length; i < r;) {
              if (t.layers[i].nm === e || t.layers[i].ind === e) return t.elements[i].layerInterface;
              i += 1
            }
            return {
              active: !1
            }
          }
          return Object.defineProperty(e, "_name", {
            value: t.data.nm
          }), e.layer = e, e.pixelAspect = 1, e.height = t.globalData.compSize.h, e.width = t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e
        }
      }(),
      TransformExpressionInterface = function () {
        return function (t) {
          function e(i) {
            switch (i) {
              case "scale":
              case "Scale":
              case "ADBE Scale":
              case 6:
                return e.scale;
              case "rotation":
              case "Rotation":
              case "ADBE Rotation":
              case "ADBE Rotate Z":
              case 10:
                return e.rotation;
              case "position":
              case "Position":
              case "ADBE Position":
              case 2:
                return t.position;
              case "anchorPoint":
              case "AnchorPoint":
              case "Anchor Point":
              case "ADBE AnchorPoint":
              case 1:
                return e.anchorPoint;
              case "opacity":
              case "Opacity":
              case 11:
                return e.opacity
            }
          }
          return Object.defineProperty(e, "rotation", {
            get: function () {
              return t.rotation
            }
          }), Object.defineProperty(e, "scale", {
            get: function () {
              return t.scale
            }
          }), Object.defineProperty(e, "position", {
            get: function () {
              return t.position
            }
          }), Object.defineProperty(e, "xPosition", {
            get: function () {
              return t.xPosition
            }
          }), Object.defineProperty(e, "yPosition", {
            get: function () {
              return t.yPosition
            }
          }), Object.defineProperty(e, "anchorPoint", {
            get: function () {
              return t.anchorPoint
            }
          }), Object.defineProperty(e, "opacity", {
            get: function () {
              return t.opacity
            }
          }), Object.defineProperty(e, "skew", {
            get: function () {
              return t.skew
            }
          }), Object.defineProperty(e, "skewAxis", {
            get: function () {
              return t.skewAxis
            }
          }), e
        }
      }(),
      ProjectInterface = function () {
        function t(t) {
          this.compositions.push(t)
        }
        return function () {
          function e(t) {
            for (var e = 0, i = this.compositions.length; e < i;) {
              if (this.compositions[e].data && this.compositions[e].data.nm === t) return this.compositions[e].prepareFrame && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
              e += 1
            }
          }
          return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e
        }
      }(),
      EffectsExpressionInterface = function () {
        function t(t, i) {
          if (t.effects) {
            var r, s = [],
              n = t.data.ef,
              a = t.effects.effectElements.length;
            for (r = 0; r < a; r += 1) s.push(e(n[r], t.effects.effectElements[r], i, t));
            return function (e) {
              for (var i = t.data.ef, r = 0, n = i.length; r < n;) {
                if (e === i[r].nm || e === i[r].mn || e === i[r].ix) return s[r];
                r += 1
              }
            }
          }
        }

        function e(t, r, s, n) {
          function a(t) {
            return 1 === t ? p : s(t - 1)
          }
          var o, l = [],
            h = t.ef.length;
          for (o = 0; o < h; o += 1) 5 === t.ef[o].ty ? l.push(e(t.ef[o], r.effectElements[o], r.effectElements[o].propertyGroup, n)) : l.push(i(r.effectElements[o], t.ef[o].ty, n, a));
          var p = function (e) {
            for (var i = t.ef, r = 0, s = i.length; r < s;) {
              if (e === i[r].nm || e === i[r].mn || e === i[r].ix) return 5 === i[r].ty ? l[r] : l[r]();
              r += 1
            }
            return l[0]()
          };
          return p.propertyGroup = a, "ADBE Color Control" === t.mn && Object.defineProperty(p, "color", {
            get: function () {
              return l[0]()
            }
          }), Object.defineProperty(p, "numProperties", {
            get: function () {
              return t.np
            }
          }), p.active = 0 !== t.en, p
        }

        function i(t, e, i, r) {
          function s() {
            return 10 === e ? i.comp.compInterface(t.p.v) : ExpressionValue(t.p)
          }
          return t.p.setGroupProperty && t.p.setGroupProperty(r), s
        }
        return {
          createEffectsInterface: t
        }
      }(),
      MaskManagerInterface = function () {
        function t(t, e) {
          this._mask = t, this._data = e
        }
        return Object.defineProperty(t.prototype, "maskPath", {
            get: function () {
              return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
            }
          }),
          function (e, i) {
            var r, s = Array.apply(null, {
                length: e.viewData.length
              }),
              n = e.viewData.length;
            for (r = 0; r < n; r += 1) s[r] = new t(e.viewData[r], e.masksProperties[r]);
            return function (t) {
              for (r = 0; r < n;) {
                if (e.masksProperties[r].nm === t) return s[r];
                r += 1
              }
            }
          }
      }(),
      ExpressionValue = function () {
        return function (t, e, i) {
          var r;
          t.k && t.getValue();
          var s, n, a;
          if (i) {
            if ("color" === i) {
              for (n = 4, r = Array.apply(null, {
                  length: n
                }), a = Array.apply(null, {
                  length: n
                }), s = 0; s < n; s += 1) r[s] = a[s] = e && s < 3 ? t.v[s] * e : 1;
              r.value = a
            }
          } else if ("number" == typeof t.v || t.v instanceof Number) r = e ? new Number(t.v * e) : new Number(t.v), r.value = e ? t.v * e : t.v;
          else {
            for (n = t.v.length, r = Array.apply(null, {
                length: n
              }), a = Array.apply(null, {
                length: n
              }), s = 0; s < n; s += 1) r[s] = a[s] = e ? t.v[s] * e : t.v[s];
            r.value = a
          }
          return r.numKeys = t.keyframes ? t.keyframes.length : 0, r.key = function (e) {
            return r.numKeys ? t.keyframes[e - 1].t : 0
          }, r.valueAtTime = t.getValueAtTime, r.propertyGroup = t.propertyGroup, r
        }
      }();
    GroupEffect.prototype.getValue = function () {
      this.mdf = !1;
      var t, e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.mdf = !!this.dynamicProperties[t].mdf || this.mdf
    }, GroupEffect.prototype.init = function (t, e, i) {
      this.data = t, this.mdf = !1, this.effectElements = [];
      var r, s, n = this.data.ef.length,
        a = this.data.ef;
      for (r = 0; r < n; r += 1) switch (a[r].ty) {
        case 0:
          s = new SliderEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 1:
          s = new AngleEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 2:
          s = new ColorEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 3:
          s = new PointEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 4:
        case 7:
          s = new CheckboxEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 10:
          s = new LayerIndexEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 11:
          s = new MaskIndexEffect(a[r], e, i), this.effectElements.push(s);
          break;
        case 5:
          s = new EffectsManager(a[r], e, i), this.effectElements.push(s);
          break;
        case 6:
          s = new NoValueEffect(a[r], e, i), this.effectElements.push(s)
      }
    };
    var bodymovinjs = {};
    bodymovinjs.play = play, bodymovinjs.pause = pause, bodymovinjs.setLocationHref = setLocationHref, bodymovinjs.togglePause = togglePause, bodymovinjs.setSpeed = setSpeed, bodymovinjs.setDirection = setDirection, bodymovinjs.stop = stop, bodymovinjs.moveFrame = moveFrame, bodymovinjs.searchAnimations = searchAnimations, bodymovinjs.registerAnimation = registerAnimation, bodymovinjs.loadAnimation = loadAnimation, bodymovinjs.setSubframeRendering = setSubframeRendering, bodymovinjs.resize = resize, bodymovinjs.start = start, bodymovinjs.goToAndStop = goToAndStop, bodymovinjs.destroy = destroy, bodymovinjs.setQuality = setQuality, bodymovinjs.inBrowser = inBrowser, bodymovinjs.installPlugin = installPlugin, bodymovinjs.__getFactory = getFactory, bodymovinjs.version = "4.13.0";
    var standalone = "__[STANDALONE]__",
      animationData = "__[ANIMATIONDATA]__",
      renderer = "";
    if (standalone) {
      var scripts = document.getElementsByTagName("script"),
        index = scripts.length - 1,
        myScript = scripts[index] || {
          src: ""
        },
        queryString = myScript.src.replace(/^[^\?]+\??/, "");
      renderer = getQueryVariable("renderer")
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    return bodymovinjs
  })
}, function (t, e, i) {
  var r = i(19),
    s = "object" == typeof self && self && self.Object === Object && self,
    n = r || s || Function("return this")();
  t.exports = n
}, function (t, e, i) {
  var r = i(4),
    s = r.Symbol;
  t.exports = s
}, function (t, e, i) {
  "use strict";
  (function (t, i, r, s) {
    function n(t, e) {
      return 0 === t.indexOf(e.toLowerCase()) ? t : "" + e.toLowerCase() + t.substr(0, 1).toUpperCase() + t.substr(1)
    }

    function a(t) {
      return t instanceof window.HTMLElement
    }

    function o(t) {
      return !isNaN(parseFloat(t)) && isFinite(t) && Math.floor(t) == t
    }

    function l(t) {
      return /^(https?:)?\/\/((player|www).)?vimeo.com(?=$|\/)/.test(t)
    }

    function h() {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        e = t.id,
        i = t.url,
        r = e || i;
      if (!r) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
      if (o(r)) return "https://vimeo.com/" + r;
      if (l(r)) return r.replace("http:", "https:");
      if (e) throw new TypeError("“" + e + "” is not a valid video id.");
      throw new TypeError("“" + r + "” is not a vimeo.com url.")
    }

    function p(t, e) {
      return e = {
        exports: {}
      }, t(e, e.exports), e.exports
    }

    function c(t, e, i) {
      var r = A.get(t.element) || {};
      e in r || (r[e] = []), r[e].push(i), A.set(t.element, r)
    }

    function d(t, e) {
      return (A.get(t.element) || {})[e] || []
    }

    function u(t, e, i) {
      var r = A.get(t.element) || {};
      if (!r[e]) return !0;
      if (!i) return r[e] = [], A.set(t.element, r), !0;
      var s = r[e].indexOf(i);
      return -1 !== s && r[e].splice(s, 1), A.set(t.element, r), r[e] && 0 === r[e].length
    }

    function f(t, e) {
      var i = d(t, e);
      if (i.length < 1) return !1;
      var r = i.shift();
      return u(t, e, r), r
    }

    function m(t, e) {
      var i = A.get(t);
      A.set(e, i), A.delete(t)
    }

    function g(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return k.reduce(function (e, i) {
        var r = t.getAttribute("data-vimeo-" + i);
        return (r || "" === r) && (e[i] = "" === r ? 1 : r), e
      }, e)
    }

    function v(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return new Promise(function (i, r) {
        if (!l(t)) throw new TypeError("“" + t + "” is not a vimeo.com url.");
        var s = "https://vimeo.com/api/oembed.json?url=" + encodeURIComponent(t);
        for (var n in e) e.hasOwnProperty(n) && (s += "&" + n + "=" + encodeURIComponent(e[n]));
        var a = "XDomainRequest" in window ? new XDomainRequest : new XMLHttpRequest;
        a.open("GET", s, !0), a.onload = function () {
          if (404 === a.status) return void r(new Error("“" + t + "” was not found."));
          if (403 === a.status) return void r(new Error("“" + t + "” is not embeddable."));
          try {
            var e = JSON.parse(a.responseText);
            i(e)
          } catch (t) {
            r(t)
          }
        }, a.onerror = function () {
          var t = a.status ? " (" + a.status + ")" : "";
          r(new Error("There was an error fetching the embed code from Vimeo" + t + "."))
        }, a.send()
      })
    }

    function y(t, e) {
      var i = t.html;
      if (!e) throw new TypeError("An element must be provided");
      if (null !== e.getAttribute("data-vimeo-initialized")) return e.querySelector("iframe");
      var r = document.createElement("div");
      return r.innerHTML = i, e.appendChild(r.firstChild), e.setAttribute("data-vimeo-initialized", "true"), e.querySelector("iframe")
    }

    function _(t) {
      return "string" == typeof t && (t = JSON.parse(t)), t
    }

    function b(t, e, i) {
      if (t.element.contentWindow && t.element.contentWindow.postMessage) {
        var r = {
          method: e
        };
        void 0 !== i && (r.value = i);
        var s = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
        s >= 8 && s < 10 && (r = JSON.stringify(r)), t.element.contentWindow.postMessage(r, t.origin)
      }
    }

    function T(t, e) {
      e = _(e);
      var i = [],
        r = void 0;
      if (e.event) {
        if ("error" === e.event) {
          d(t, e.data.method).forEach(function (i) {
            var r = new Error(e.data.message);
            r.name = e.data.name, i.reject(r), u(t, e.data.method, i)
          })
        }
        i = d(t, "event:" + e.event), r = e.data
      } else if (e.method) {
        var s = f(t, e.method);
        s && (i.push(s), r = e.value)
      }
      i.forEach(function (e) {
        try {
          if ("function" == typeof e) return void e.call(t, r);
          e.resolve(r)
        } catch (t) {}
      })
    }

    function E(t, e) {
      if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    } /*! @vimeo/player v2.6.1 | (c) 2018 Vimeo | MIT License | https://github.com/vimeo/player.js */
    var w = void 0 !== t && "[object global]" === {}.toString.call(t),
      x = void 0 !== Array.prototype.indexOf,
      S = "undefined" != typeof window && void 0 !== window.postMessage;
    if (!(w || x && S)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
    var C = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {},
      P = (p(function (t, e) {
        ! function (t) {
          function e(t, e) {
            function r(t) {
              if (!this || this.constructor !== r) return new r(t);
              this._keys = [], this._values = [], this._itp = [], this.objectOnly = e, t && i.call(this, t)
            }
            return e || _(t, "size", {
              get: g
            }), t.constructor = r, r.prototype = t, r
          }

          function i(t) {
            this.add ? t.forEach(this.add, this) : t.forEach(function (t) {
              this.set(t[0], t[1])
            }, this)
          }

          function r(t) {
            return this.has(t) && (this._keys.splice(y, 1), this._values.splice(y, 1), this._itp.forEach(function (t) {
              y < t[0] && t[0]--
            })), -1 < y
          }

          function s(t) {
            return this.has(t) ? this._values[y] : void 0
          }

          function n(t, e) {
            if (this.objectOnly && e !== Object(e)) throw new TypeError("Invalid value used as weak collection key");
            if (e != e || 0 === e)
              for (y = t.length; y-- && !b(t[y], e););
            else y = t.indexOf(e);
            return -1 < y
          }

          function a(t) {
            return n.call(this, this._values, t)
          }

          function o(t) {
            return n.call(this, this._keys, t)
          }

          function l(t, e) {
            return this.has(t) ? this._values[y] = e : this._values[this._keys.push(t) - 1] = e, this
          }

          function h(t) {
            return this.has(t) || this._values.push(t), this
          }

          function p() {
            (this._keys || 0).length = this._values.length = 0
          }

          function c() {
            return m(this._itp, this._keys)
          }

          function d() {
            return m(this._itp, this._values)
          }

          function u() {
            return m(this._itp, this._keys, this._values)
          }

          function f() {
            return m(this._itp, this._values, this._values)
          }

          function m(t, e, i) {
            var r = [0],
              s = !1;
            return t.push(r), {
              next: function () {
                var n, a = r[0];
                return !s && a < e.length ? (n = i ? [e[a], i[a]] : e[a], r[0]++) : (s = !0, t.splice(t.indexOf(r), 1)), {
                  done: s,
                  value: n
                }
              }
            }
          }

          function g() {
            return this._values.length
          }

          function v(t, e) {
            for (var i = this.entries();;) {
              var r = i.next();
              if (r.done) break;
              t.call(e, r.value[1], r.value[0], this)
            }
          }
          var y, _ = Object.defineProperty,
            b = function (t, e) {
              return t === e || t !== t && e !== e
            };
          "undefined" == typeof WeakMap && (t.WeakMap = e({
            delete: r,
            clear: p,
            get: s,
            has: o,
            set: l
          }, !0)), "undefined" != typeof Map && "function" == typeof (new Map).values && (new Map).values().next || (t.Map = e({
            delete: r,
            has: o,
            get: s,
            set: l,
            keys: c,
            values: d,
            entries: u,
            forEach: v,
            clear: p
          })), "undefined" != typeof Set && "function" == typeof (new Set).values && (new Set).values().next || (t.Set = e({
            has: a,
            add: h,
            delete: r,
            clear: p,
            keys: d,
            values: d,
            entries: f,
            forEach: v
          })), "undefined" == typeof WeakSet && (t.WeakSet = e({
            delete: r,
            add: h,
            clear: p,
            has: a
          }, !0))
        }(void 0 !== C ? C : window)
      }), p(function (t) {
        var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
          return typeof t
        } : function (t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        };
        /*! Native Promise Only
            v0.8.1 (c) Kyle Simpson
            MIT License: http://getify.mit-license.org
        */
        ! function (e, i, r) {
          i[e] = i[e] || r(), t.exports && (t.exports = i[e])
        }("Promise", C, function () {
          function t(t, e) {
            f.add(t, e), u || (u = g(f.drain))
          }

          function r(t) {
            var i, r = void 0 === t ? "undefined" : e(t);
            return null == t || "object" != r && "function" != r || (i = t.then), "function" == typeof i && i
          }

          function s() {
            for (var t = 0; t < this.chain.length; t++) n(this, 1 === this.state ? this.chain[t].success : this.chain[t].failure, this.chain[t]);
            this.chain.length = 0
          }

          function n(t, e, i) {
            var s, n;
            try {
              !1 === e ? i.reject(t.msg) : (s = !0 === e ? t.msg : e.call(void 0, t.msg), s === i.promise ? i.reject(TypeError("Promise-chain cycle")) : (n = r(s)) ? n.call(s, i.resolve, i.reject) : i.resolve(s))
            } catch (t) {
              i.reject(t)
            }
          }

          function a(e) {
            var i, n = this;
            if (!n.triggered) {
              n.triggered = !0, n.def && (n = n.def);
              try {
                (i = r(e)) ? t(function () {
                  var t = new h(n);
                  try {
                    i.call(e, function () {
                      a.apply(t, arguments)
                    }, function () {
                      o.apply(t, arguments)
                    })
                  } catch (e) {
                    o.call(t, e)
                  }
                }): (n.msg = e, n.state = 1, n.chain.length > 0 && t(s, n))
              } catch (t) {
                o.call(new h(n), t)
              }
            }
          }

          function o(e) {
            var i = this;
            i.triggered || (i.triggered = !0, i.def && (i = i.def), i.msg = e, i.state = 2, i.chain.length > 0 && t(s, i))
          }

          function l(t, e, i, r) {
            for (var s = 0; s < e.length; s++) ! function (s) {
              t.resolve(e[s]).then(function (t) {
                i(s, t)
              }, r)
            }(s)
          }

          function h(t) {
            this.def = t, this.triggered = !1
          }

          function p(t) {
            this.promise = t, this.state = 0, this.triggered = !1, this.chain = [], this.msg = void 0
          }

          function c(e) {
            if ("function" != typeof e) throw TypeError("Not a function");
            if (0 !== this.__NPO__) throw TypeError("Not a promise");
            this.__NPO__ = 1;
            var i = new p(this);
            this.then = function (e, r) {
              var n = {
                success: "function" != typeof e || e,
                failure: "function" == typeof r && r
              };
              return n.promise = new this.constructor(function (t, e) {
                if ("function" != typeof t || "function" != typeof e) throw TypeError("Not a function");
                n.resolve = t, n.reject = e
              }), i.chain.push(n), 0 !== i.state && t(s, i), n.promise
            }, this.catch = function (t) {
              return this.then(void 0, t)
            };
            try {
              e.call(void 0, function (t) {
                a.call(i, t)
              }, function (t) {
                o.call(i, t)
              })
            } catch (t) {
              o.call(i, t)
            }
          }
          var d, u, f, m = Object.prototype.toString,
            g = void 0 !== i ? function (t) {
              return i(t)
            } : setTimeout;
          try {
            Object.defineProperty({}, "x", {}), d = function (t, e, i, r) {
              return Object.defineProperty(t, e, {
                value: i,
                writable: !0,
                configurable: !1 !== r
              })
            }
          } catch (t) {
            d = function (t, e, i) {
              return t[e] = i, t
            }
          }
          f = function () {
            function t(t, e) {
              this.fn = t, this.self = e, this.next = void 0
            }
            var e, i, r;
            return {
              add: function (s, n) {
                r = new t(s, n), i ? i.next = r : e = r, i = r, r = void 0
              },
              drain: function () {
                var t = e;
                for (e = i = u = void 0; t;) t.fn.call(t.self), t = t.next
              }
            }
          }();
          var v = d({}, "constructor", c, !1);
          return c.prototype = v, d(v, "__NPO__", 0, !1), d(c, "resolve", function (t) {
            var i = this;
            return t && "object" == (void 0 === t ? "undefined" : e(t)) && 1 === t.__NPO__ ? t : new i(function (e, i) {
              if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
              e(t)
            })
          }), d(c, "reject", function (t) {
            return new this(function (e, i) {
              if ("function" != typeof e || "function" != typeof i) throw TypeError("Not a function");
              i(t)
            })
          }), d(c, "all", function (t) {
            var e = this;
            return "[object Array]" != m.call(t) ? e.reject(TypeError("Not an array")) : 0 === t.length ? e.resolve([]) : new e(function (i, r) {
              if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
              var s = t.length,
                n = Array(s),
                a = 0;
              l(e, t, function (t, e) {
                n[t] = e, ++a === s && i(n)
              }, r)
            })
          }), d(c, "race", function (t) {
            var e = this;
            return "[object Array]" != m.call(t) ? e.reject(TypeError("Not an array")) : new e(function (i, r) {
              if ("function" != typeof i || "function" != typeof r) throw TypeError("Not a function");
              l(e, t, function (t, e) {
                i(e)
              }, r)
            })
          }), c
        })
      })),
      A = new WeakMap,
      k = ["autopause", "autoplay", "background", "byline", "color", "height", "id", "loop", "maxheight", "maxwidth", "muted", "playsinline", "portrait", "responsive", "speed", "title", "transparent", "url", "width"],
      D = function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var r = e[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
          }
        }
        return function (e, i, r) {
          return i && t(e.prototype, i), r && t(e, r), e
        }
      }(),
      M = new WeakMap,
      I = new WeakMap,
      O = function () {
        function t(e) {
          var i = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (E(this, t), r && e instanceof s && (e.length > 1 && window.console && console.warn && console.warn("A jQuery object with multiple elements was passed, using the first element."), e = e[0]), "undefined" != typeof document && "string" == typeof e && (e = document.getElementById(e)), !a(e)) throw new TypeError("You must pass either a valid element or a valid id.");
          if ("IFRAME" !== e.nodeName) {
            var o = e.querySelector("iframe");
            o && (e = o)
          }
          if ("IFRAME" === e.nodeName && !l(e.getAttribute("src") || "")) throw new Error("The player element passed isn’t a Vimeo embed.");
          if (M.has(e)) return M.get(e);
          this.element = e, this.origin = "*";
          var p = new P(function (t, r) {
            var s = function (e) {
              if (l(e.origin) && i.element.contentWindow === e.source) {
                "*" === i.origin && (i.origin = e.origin);
                var r = _(e.data),
                  s = "event" in r && "ready" === r.event,
                  n = "method" in r && "ping" === r.method;
                if (s || n) return i.element.setAttribute("data-ready", "true"), void t();
                T(i, r)
              }
            };
            if (window.addEventListener ? window.addEventListener("message", s, !1) : window.attachEvent && window.attachEvent("onmessage", s), "IFRAME" !== i.element.nodeName) {
              var a = g(e, n);
              v(h(a), a).then(function (t) {
                var r = y(t, e);
                return i.element = r, i._originalElement = e, m(e, r), M.set(i.element, i), t
              }).catch(function (t) {
                return r(t)
              })
            }
          });
          return I.set(this, p), M.set(this.element, this), "IFRAME" === this.element.nodeName && b(this, "ping"), this
        }
        return D(t, [{
          key: "callMethod",
          value: function (t) {
            var e = this,
              i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return new P(function (r, s) {
              return e.ready().then(function () {
                c(e, t, {
                  resolve: r,
                  reject: s
                }), b(e, t, i)
              }).catch(function (t) {
                s(t)
              })
            })
          }
        }, {
          key: "get",
          value: function (t) {
            var e = this;
            return new P(function (i, r) {
              return t = n(t, "get"), e.ready().then(function () {
                c(e, t, {
                  resolve: i,
                  reject: r
                }), b(e, t)
              })
            })
          }
        }, {
          key: "set",
          value: function (t, e) {
            var i = this;
            return P.resolve(e).then(function (e) {
              if (t = n(t, "set"), void 0 === e || null === e) throw new TypeError("There must be a value to set.");
              return i.ready().then(function () {
                return new P(function (r, s) {
                  c(i, t, {
                    resolve: r,
                    reject: s
                  }), b(i, t, e)
                })
              })
            })
          }
        }, {
          key: "on",
          value: function (t, e) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (!e) throw new TypeError("You must pass a callback function.");
            if ("function" != typeof e) throw new TypeError("The callback must be a function.");
            0 === d(this, "event:" + t).length && this.callMethod("addEventListener", t).catch(function () {}), c(this, "event:" + t, e)
          }
        }, {
          key: "off",
          value: function (t, e) {
            if (!t) throw new TypeError("You must pass an event name.");
            if (e && "function" != typeof e) throw new TypeError("The callback must be a function.");
            u(this, "event:" + t, e) && this.callMethod("removeEventListener", t).catch(function (t) {})
          }
        }, {
          key: "loadVideo",
          value: function (t) {
            return this.callMethod("loadVideo", t)
          }
        }, {
          key: "ready",
          value: function () {
            var t = I.get(this) || new P(function (t, e) {
              e("Unknown player. Probably unloaded.")
            });
            return P.resolve(t)
          }
        }, {
          key: "addCuePoint",
          value: function (t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return this.callMethod("addCuePoint", {
              time: t,
              data: e
            })
          }
        }, {
          key: "removeCuePoint",
          value: function (t) {
            return this.callMethod("removeCuePoint", t)
          }
        }, {
          key: "enableTextTrack",
          value: function (t, e) {
            if (!t) throw new TypeError("You must pass a language.");
            return this.callMethod("enableTextTrack", {
              language: t,
              kind: e
            })
          }
        }, {
          key: "disableTextTrack",
          value: function () {
            return this.callMethod("disableTextTrack")
          }
        }, {
          key: "pause",
          value: function () {
            return this.callMethod("pause")
          }
        }, {
          key: "play",
          value: function () {
            return this.callMethod("play")
          }
        }, {
          key: "unload",
          value: function () {
            return this.callMethod("unload")
          }
        }, {
          key: "destroy",
          value: function () {
            var t = this;
            return new P(function (e) {
              I.delete(t), M.delete(t.element), t._originalElement && (M.delete(t._originalElement), t._originalElement.removeAttribute("data-vimeo-initialized")), t.element && "IFRAME" === t.element.nodeName && t.element.remove(), e()
            })
          }
        }, {
          key: "getAutopause",
          value: function () {
            return this.get("autopause")
          }
        }, {
          key: "setAutopause",
          value: function (t) {
            return this.set("autopause", t)
          }
        }, {
          key: "getColor",
          value: function () {
            return this.get("color")
          }
        }, {
          key: "setColor",
          value: function (t) {
            return this.set("color", t)
          }
        }, {
          key: "getCuePoints",
          value: function () {
            return this.get("cuePoints")
          }
        }, {
          key: "getCurrentTime",
          value: function () {
            return this.get("currentTime")
          }
        }, {
          key: "setCurrentTime",
          value: function (t) {
            return this.set("currentTime", t)
          }
        }, {
          key: "getDuration",
          value: function () {
            return this.get("duration")
          }
        }, {
          key: "getEnded",
          value: function () {
            return this.get("ended")
          }
        }, {
          key: "getLoop",
          value: function () {
            return this.get("loop")
          }
        }, {
          key: "setLoop",
          value: function (t) {
            return this.set("loop", t)
          }
        }, {
          key: "getPaused",
          value: function () {
            return this.get("paused")
          }
        }, {
          key: "getPlaybackRate",
          value: function () {
            return this.get("playbackRate")
          }
        }, {
          key: "setPlaybackRate",
          value: function (t) {
            return this.set("playbackRate", t)
          }
        }, {
          key: "getTextTracks",
          value: function () {
            return this.get("textTracks")
          }
        }, {
          key: "getVideoEmbedCode",
          value: function () {
            return this.get("videoEmbedCode")
          }
        }, {
          key: "getVideoId",
          value: function () {
            return this.get("videoId")
          }
        }, {
          key: "getVideoTitle",
          value: function () {
            return this.get("videoTitle")
          }
        }, {
          key: "getVideoWidth",
          value: function () {
            return this.get("videoWidth")
          }
        }, {
          key: "getVideoHeight",
          value: function () {
            return this.get("videoHeight")
          }
        }, {
          key: "getVideoUrl",
          value: function () {
            return this.get("videoUrl")
          }
        }, {
          key: "getVolume",
          value: function () {
            return this.get("volume")
          }
        }, {
          key: "setVolume",
          value: function (t) {
            return this.set("volume", t)
          }
        }]), t
      }();
    w || !window.Vimeo || window.Vimeo.Player || (function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        e = [].slice.call(t.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),
        i = function (t) {
          "console" in window && console.error && console.error("There was an error creating an embed: " + t)
        };
      e.forEach(function (t) {
        try {
          if (null !== t.getAttribute("data-vimeo-defer")) return;
          var e = g(t);
          v(h(e), e).then(function (e) {
            return y(e, t)
          }).catch(i)
        } catch (t) {
          i(t)
        }
      })
    }(), function () {
      var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document,
        e = function (e) {
          if (l(e.origin) && e.data && "spacechange" === e.data.event)
            for (var i = t.querySelectorAll("iframe"), r = 0; r < i.length; r++)
              if (i[r].contentWindow === e.source) {
                var s = i[r].parentElement;
                s.style.paddingBottom = e.data.data[0].bottom + "px";
                break
              }
        };
      window.addEventListener ? window.addEventListener("message", e, !1) : window.attachEvent && window.attachEvent("onmessage", e)
    }()), e.a = O
  }).call(e, i(1), i(27).setImmediate, i(0), i(0))
}, function (t, e, i) {
  (function (i) {
    var r, s;
    /*!
     * VERSION: 1.20.4
     * DATE: 2018-02-15
     * UPDATES AND DOCS AT: http://greensock.com
     *
     * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
     * This work is subject to the terms at http://greensock.com/standard-license or for
     * Club GreenSock members, the software agreement that was issued with your membership.
     * 
     * @author: Jack Doyle, jack@greensock.com
     */
    ! function (i, n) {
      "use strict";
      var a = {},
        o = i.document,
        l = i.GreenSockGlobals = i.GreenSockGlobals || i;
      if (!l.TweenLite) {
        var h, p, c, d, u, f = function (t) {
            var e, i = t.split("."),
              r = l;
            for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
            return r
          },
          m = f("com.greensock"),
          g = function (t) {
            var e, i = [],
              r = t.length;
            for (e = 0; e !== r; i.push(t[e++]));
            return i
          },
          v = function () {},
          y = function () {
            var t = Object.prototype.toString,
              e = t.call([]);
            return function (i) {
              return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
            }
          }(),
          _ = {},
          b = function (i, n, o, h) {
            this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = o;
            var p = [];
            this.check = function (c) {
              for (var d, u, m, g, v = n.length, y = v; --v > -1;)(d = _[n[v]] || new b(n[v], [])).gsClass ? (p[v] = d.gsClass, y--) : c && d.sc.push(this);
              if (0 === y && o) {
                if (u = ("com.greensock." + i).split("."), m = u.pop(), g = f(u.join("."))[m] = this.gsClass = o.apply(o, p), h)
                  if (l[m] = a[m] = g, void 0 !== t && t.exports)
                    if ("TweenLite" === i) {
                      t.exports = a.TweenLite = g;
                      for (v in a) g[v] = a[v]
                    } else a.TweenLite && (a.TweenLite[m] = g);
                else r = [], void 0 !== (s = function () {
                  return g
                }.apply(e, r)) && (t.exports = s);
                for (v = 0; v < this.sc.length; v++) this.sc[v].check()
              }
            }, this.check(!0)
          },
          T = i._gsDefine = function (t, e, i, r) {
            return new b(t, e, i, r)
          },
          E = m._class = function (t, e, i) {
            return e = e || function () {}, T(t, [], function () {
              return e
            }, i), e
          };
        T.globals = l;
        var w = [0, 0, 1, 1],
          x = E("easing.Ease", function (t, e, i, r) {
            this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? w.concat(e) : w
          }, !0),
          S = x.map = {},
          C = x.register = function (t, e, i, r) {
            for (var s, n, a, o, l = e.split(","), h = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
              for (n = l[h], s = r ? E("easing." + n, null, !0) : m.easing[n] || {}, a = p.length; --a > -1;) o = p[a], S[n + "." + o] = S[o + n] = s[o] = t.getRatio ? t : t[o] || new t
          };
        for (c = x.prototype, c._calcEnd = !1, c.getRatio = function (t) {
            if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
            var e = this._type,
              i = this._power,
              r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
            return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
          }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], p = h.length; --p > -1;) c = h[p] + ",Power" + p, C(new x(null, null, 1, p), c, "easeOut", !0), C(new x(null, null, 2, p), c, "easeIn" + (0 === p ? ",easeNone" : "")), C(new x(null, null, 3, p), c, "easeInOut");
        S.linear = m.easing.Linear.easeIn, S.swing = m.easing.Quad.easeInOut;
        var P = E("events.EventDispatcher", function (t) {
          this._listeners = {}, this._eventTarget = t || this
        });
        c = P.prototype, c.addEventListener = function (t, e, i, r, s) {
          s = s || 0;
          var n, a, o = this._listeners[t],
            l = 0;
          for (this !== d || u || d.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) n = o[a], n.c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < s && (l = a + 1);
          o.splice(l, 0, {
            c: e,
            s: i,
            up: r,
            pr: s
          })
        }, c.removeEventListener = function (t, e) {
          var i, r = this._listeners[t];
          if (r)
            for (i = r.length; --i > -1;)
              if (r[i].c === e) return void r.splice(i, 1)
        }, c.dispatchEvent = function (t) {
          var e, i, r, s = this._listeners[t];
          if (s)
            for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(r = s[e]) && (r.up ? r.c.call(r.s || i, {
              type: t,
              target: i
            }) : r.c.call(r.s || i))
        };
        var A = i.requestAnimationFrame,
          k = i.cancelAnimationFrame,
          D = Date.now || function () {
            return (new Date).getTime()
          },
          M = D();
        for (h = ["ms", "moz", "webkit", "o"], p = h.length; --p > -1 && !A;) A = i[h[p] + "RequestAnimationFrame"], k = i[h[p] + "CancelAnimationFrame"] || i[h[p] + "CancelRequestAnimationFrame"];
        E("Ticker", function (t, e) {
          var i, r, s, n, a, l = this,
            h = D(),
            p = !(!1 === e || !A) && "auto",
            c = 500,
            f = 33,
            m = function (t) {
              var e, o, p = D() - M;
              p > c && (h += p - f), M += p, l.time = (M - h) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= n ? .004 : n - e), o = !0), !0 !== t && (s = r(m)), o && l.dispatchEvent("tick")
            };
          P.call(l), l.time = l.frame = 0, l.tick = function () {
            m(!0)
          }, l.lagSmoothing = function (t, e) {
            if (!arguments.length) return c < 1e10;
            c = t || 1e10, f = Math.min(e, c, 0)
          }, l.sleep = function () {
            null != s && (p && k ? k(s) : clearTimeout(s), r = v, s = null, l === d && (u = !1))
          }, l.wake = function (t) {
            null !== s ? l.sleep() : t ? h += -M + (M = D()) : l.frame > 10 && (M = D() - c + 5), r = 0 === i ? v : p && A ? A : function (t) {
              return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
            }, l === d && (u = !0), m(2)
          }, l.fps = function (t) {
            if (!arguments.length) return i;
            i = t, n = 1 / (i || 60), a = this.time + n, l.wake()
          }, l.useRAF = function (t) {
            if (!arguments.length) return p;
            l.sleep(), p = t, l.fps(i)
          }, l.fps(t), setTimeout(function () {
            "auto" === p && l.frame < 5 && "hidden" !== (o || {}).visibilityState && l.useRAF(!1)
          }, 1500)
        }), c = m.Ticker.prototype = new m.events.EventDispatcher, c.constructor = m.Ticker;
        var I = E("core.Animation", function (t, e) {
          if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
            u || d.wake();
            var i = this.vars.useFrames ? Q : Z;
            i.add(this, i._time), this.vars.paused && this.paused(!0)
          }
        });
        d = I.ticker = new m.Ticker, c = I.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
        var O = function () {
          u && D() - M > 2e3 && ("hidden" !== (o || {}).visibilityState || !d.lagSmoothing()) && d.wake();
          var t = setTimeout(O, 2e3);
          t.unref && t.unref()
        };
        O(), c.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
        }, c.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0)
        }, c.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1)
        }, c.seek = function (t, e) {
          return this.totalTime(Number(t), !1 !== e)
        }, c.restart = function (t, e) {
          return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
        }, c.reverse = function (t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
        }, c.render = function (t, e, i) {}, c.invalidate = function () {
          return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
        }, c.isActive = function () {
          var t, e = this._timeline,
            i = this._startTime;
          return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
        }, c._enabled = function (t, e) {
          return u || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
        }, c._kill = function (t, e) {
          return this._enabled(!1, !1)
        }, c.kill = function (t, e) {
          return this._kill(t, e), this
        }, c._uncache = function (t) {
          for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
          return this
        }, c._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
          return i
        }, c._callback = function (t) {
          var e = this.vars,
            i = e[t],
            r = e[t + "Params"],
            s = e[t + "Scope"] || e.callbackScope || this;
          switch (r ? r.length : 0) {
            case 0:
              i.call(s);
              break;
            case 1:
              i.call(s, r[0]);
              break;
            case 2:
              i.call(s, r[0], r[1]);
              break;
            default:
              i.apply(s, r)
          }
        }, c.eventCallback = function (t, e, i, r) {
          if ("on" === (t || "").substr(0, 2)) {
            var s = this.vars;
            if (1 === arguments.length) return s[t];
            null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
          }
          return this
        }, c.delay = function (t) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
        }, c.duration = function (t) {
          return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
        }, c.totalDuration = function (t) {
          return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
        }, c.time = function (t, e) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
        }, c.totalTime = function (t, e, i) {
          if (u || d.wake(), !arguments.length) return this._totalTime;
          if (this._timeline) {
            if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
              this._dirty && this.totalDuration();
              var r = this._totalDuration,
                s = this._timeline;
              if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
            }
            this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (V.length && tt(), this.render(t, e, !1), V.length && tt())
          }
          return this
        }, c.progress = c.totalProgress = function (t, e) {
          var i = this.duration();
          return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
        }, c.startTime = function (t) {
          return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
        }, c.endTime = function (t) {
          return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
        }, c.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          var e, i;
          for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
          return this
        }, c.reversed = function (t) {
          return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
        }, c.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e, i, r = this._timeline;
          return t != this._paused && r && (u || t || d.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
        };
        var F = E("core.SimpleTimeline", function (t) {
          I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
        });
        c = F.prototype = new I, c.constructor = F, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function (t, e, i, r) {
          var s, n;
          if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
            for (n = t._startTime; s && s._startTime > n;) s = s._prev;
          return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
        }, c._remove = function (t, e) {
          return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
        }, c.render = function (t, e, i) {
          var r, s = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; s;) r = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r
        }, c.rawTime = function () {
          return u || d.wake(), this._totalTime
        };
        var R = E("TweenLite", function (t, e, r) {
            if (I.call(this, e, r), this.render = R.prototype.render, null == t) throw "Cannot tween a null target.";
            this.target = t = "string" != typeof t ? t : R.selector(t) || t;
            var s, n, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
              l = this.vars.overwrite;
            if (this._overwrite = l = null == l ? K[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (o || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
              for (this._targets = a = g(t), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) n = a[s], n ? "string" != typeof n ? n.length && n !== i && n[0] && (n[0] === i || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(g(n))) : (this._siblings[s] = et(n, this, !1), 1 === l && this._siblings[s].length > 1 && rt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = R.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
            else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && rt(t, this, null, 1, this._siblings);
            (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
          }, !0),
          N = function (t) {
            return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
          },
          L = function (t, e) {
            var i, r = {};
            for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (r[i] = t[i], delete t[i]);
            t.css = r
          };
        c = R.prototype = new I, c.constructor = R, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, R.version = "1.20.4", R.defaultEase = c._ease = new x(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = d, R.autoSleep = 120, R.lagSmoothing = function (t, e) {
          d.lagSmoothing(t, e)
        }, R.selector = i.$ || i.jQuery || function (t) {
          var e = i.$ || i.jQuery;
          return e ? (R.selector = e, e(t)) : void 0 === o ? t : o.querySelectorAll ? o.querySelectorAll(t) : o.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
        };
        var V = [],
          B = {},
          z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          H = /[\+-]=-?[\.\d]/,
          j = function (t) {
            for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
          },
          G = function (t, e, i, r) {
            var s, n, a, o, l, h, p, c = [],
              d = 0,
              u = "",
              f = 0;
            for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(z) || [], n = e.match(z) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), l = n.length, o = 0; o < l; o++) p = n[o], h = e.substr(d, e.indexOf(p, d) - d), u += h || !o ? h : ",", d += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), p === s[o] || s.length <= o ? u += p : (u && (c.push(u), u = ""), a = parseFloat(s[o]), c.push(a), c._firstPT = {
              _next: c._firstPT,
              t: c,
              p: c.length - 1,
              s: a,
              c: ("=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * parseFloat(p.substr(2)) : parseFloat(p) - a) || 0,
              f: 0,
              m: f && f < 4 ? Math.round : 0
            }), d += p.length;
            return u += e.substr(d), u && c.push(u), c.setRatio = j, H.test(e) && (c.end = null), c
          },
          W = function (t, e, i, r, s, n, a, o, l) {
            "function" == typeof r && (r = r(l || 0, t));
            var h, p = typeof t[e],
              c = "function" !== p ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
              d = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
              u = "string" == typeof r && "=" === r.charAt(1),
              f = {
                t: t,
                p: e,
                s: d,
                f: "function" === p,
                pg: 0,
                n: s || e,
                m: n ? "function" == typeof n ? n : Math.round : 0,
                pr: 0,
                c: u ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - d || 0
              };
            if (("number" != typeof d || "number" != typeof r && !u) && (a || isNaN(d) || !u && isNaN(r) || "boolean" == typeof d || "boolean" == typeof r ? (f.fp = a, h = G(d, u ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, o || R.defaultStringFilter, f), f = {
                t: h,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 2,
                pg: 0,
                n: s || e,
                pr: 0,
                m: 0
              }) : (f.s = parseFloat(d), u || (f.c = parseFloat(r) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
          },
          $ = R._internals = {
            isArray: y,
            isSelector: N,
            lazyTweens: V,
            blobDif: G
          },
          X = R._plugins = {},
          Y = $.tweenLookup = {},
          U = 0,
          q = $.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
            yoyoEase: 1
          },
          K = {
            none: 0,
            all: 1,
            auto: 2,
            concurrent: 3,
            allOnStart: 4,
            preexisting: 5,
            true: 1,
            false: 0
          },
          Q = I._rootFramesTimeline = new F,
          Z = I._rootTimeline = new F,
          J = 30,
          tt = $.lazyRender = function () {
            var t, e = V.length;
            for (B = {}; --e > -1;)(t = V[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
            V.length = 0
          };
        Z._startTime = d.time, Q._startTime = d.frame, Z._active = Q._active = !0, setTimeout(tt, 1), I._updateRoot = R.render = function () {
          var t, e, i;
          if (V.length && tt(), Z.render((d.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((d.frame - Q._startTime) * Q._timeScale, !1, !1), V.length && tt(), d.frame >= J) {
            J = d.frame + (parseInt(R.autoSleep, 10) || 120);
            for (i in Y) {
              for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
              0 === e.length && delete Y[i]
            }
            if ((!(i = Z._first) || i._paused) && R.autoSleep && !Q._first && 1 === d._listeners.tick.length) {
              for (; i && i._paused;) i = i._next;
              i || d.sleep()
            }
          }
        }, d.addEventListener("tick", I._updateRoot);
        var et = function (t, e, i) {
            var r, s, n = t._gsTweenID;
            if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                target: t,
                tweens: []
              }), e && (r = Y[n].tweens, r[s = r.length] = e, i))
              for (; --s > -1;) r[s] === e && r.splice(s, 1);
            return Y[n].tweens
          },
          it = function (t, e, i, r) {
            var s, n, a = t.vars.onOverwrite;
            return a && (s = a(t, e, i, r)), a = R.onOverwrite, a && (n = a(t, e, i, r)), !1 !== s && !1 !== n
          },
          rt = function (t, e, i, r, s) {
            var n, a, o, l;
            if (1 === r || r >= 4) {
              for (l = s.length, n = 0; n < l; n++)
                if ((o = s[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                else if (5 === r) break;
              return a
            }
            var h, p = e._startTime + 1e-10,
              c = [],
              d = 0,
              u = 0 === e._duration;
            for (n = s.length; --n > -1;)(o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || st(e, 0, u), 0 === st(o, h, u) && (c[d++] = o)) : o._startTime <= p && o._startTime + o.totalDuration() / o._timeScale > p && ((u || !o._initted) && p - o._startTime <= 2e-10 || (c[d++] = o)));
            for (n = d; --n > -1;)
              if (o = c[n], 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted) {
                if (2 !== r && !it(o, e)) continue;
                o._enabled(!1, !1) && (a = !0)
              } return a
          },
          st = function (t, e, i) {
            for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
              if (n += r._startTime, s *= r._timeScale, r._paused) return -100;
              r = r._timeline
            }
            return n /= s, n > e ? n - e : i && n === e || !t._initted && n - e < 2e-10 ? 1e-10 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-10 ? 0 : n - e - 1e-10
          };
        c._init = function () {
          var t, e, i, r, s, n, a = this.vars,
            o = this._overwrittenProps,
            l = this._duration,
            h = !!a.immediateRender,
            p = a.ease;
          if (a.startAt) {
            this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
            for (r in a.startAt) s[r] = a.startAt[r];
            if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = R.to(this.target, 0, s), h)
              if (this._time > 0) this._startAt = null;
              else if (0 !== l) return
          } else if (a.runBackwards && 0 !== l)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
            else {
              0 !== this._time && (h = !1), i = {};
              for (r in a) q[r] && "autoCSS" !== r || (i[r] = a[r]);
              if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = R.to(this.target, 0, i), h) {
                if (0 === this._time) return
              } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            } if (this._ease = p = p ? p instanceof x ? p : "function" == typeof p ? new x(p, a.easeParams) : S[p] || R.defaultEase : R.defaultEase, a.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
            for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
          else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
          if (e && R._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
            for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
          this._onUpdate = a.onUpdate, this._initted = !0
        }, c._initProps = function (t, e, r, s, n) {
          var a, o, l, h, p, c;
          if (null == t) return !1;
          B[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && X.css && !1 !== this.vars.autoCSS && L(this.vars, t);
          for (a in this.vars)
            if (c = this.vars[a], q[a]) c && (c instanceof Array || c.push && y(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
            else if (X[a] && (h = new X[a])._onInitTween(t, this.vars[a], this, n)) {
            for (this._firstPT = p = {
                _next: this._firstPT,
                t: h,
                p: "setRatio",
                s: 0,
                c: 1,
                f: 1,
                n: a,
                pg: 1,
                pr: h._priority,
                m: 0
              }, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] = this._firstPT;
            (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), p._next && (p._next._prev = p)
          } else e[a] = W.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter, n);
          return s && this._kill(s, t) ? this._initProps(t, e, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && rt(t, this, e, this._overwrite, r) ? (this._kill(e, t), this._initProps(t, e, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), l)
        }, c.render = function (t, e, i) {
          var r, s, n, a, o = this._time,
            l = this._duration,
            h = this._rawPrevTime;
          if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10);
          else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
          else if (this._totalTime = this._time = t, this._easeType) {
            var p = t / l,
              c = this._easeType,
              d = this._easePower;
            (1 === c || 3 === c && p >= .5) && (p = 1 - p), 3 === c && (p *= 2), 1 === d ? p *= p : 2 === d ? p *= p * p : 3 === d ? p *= p * p * p : 4 === d && (p *= p * p * p * p), this.ratio = 1 === c ? 1 - p : 2 === c ? p : t / l < .5 ? p / 2 : 1 - p / 2
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== o || i) {
            if (!this._initted) {
              if (this._init(), !this._initted || this._gc) return;
              if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, V.push(this), void(this._lazy = [t, e]);
              this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
            this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)))
          }
        }, c._kill = function (t, e, i) {
          if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
          e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
          var r, s, n, a, o, l, h, p, c, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
          if ((y(e) || N(e)) && "number" != typeof e[0])
            for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (l = !0);
          else {
            if (this._targets) {
              for (r = this._targets.length; --r > -1;)
                if (e === this._targets[r]) {
                  o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                  break
                }
            } else {
              if (e !== this.target) return !1;
              o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
            }
            if (o) {
              if (h = t || o, p = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                for (n in h) o[n] && (c || (c = []), c.push(n));
                if ((c || !t) && !it(this, i, e, c)) return !1
              }
              for (n in h)(a = o[n]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), p && (s[n] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return l
        }, c.invalidate = function () {
          return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
        }, c._enabled = function (t, e) {
          if (u || d.wake(), t && this._gc) {
            var i, r = this._targets;
            if (r)
              for (i = r.length; --i > -1;) this._siblings[i] = et(r[i], this, !0);
            else this._siblings = et(this.target, this, !0)
          }
          return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
        }, R.to = function (t, e, i) {
          return new R(t, e, i)
        }, R.from = function (t, e, i) {
          return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
        }, R.fromTo = function (t, e, i, r) {
          return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new R(t, e, r)
        }, R.delayedCall = function (t, e, i, r, s) {
          return new R(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: r,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: s,
            overwrite: 0
          })
        }, R.set = function (t, e) {
          return new R(t, 0, e)
        }, R.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : R.selector(t) || t;
          var i, r, s, n;
          if ((y(t) || N(t)) && "number" != typeof t[0]) {
            for (i = t.length, r = []; --i > -1;) r = r.concat(R.getTweensOf(t[i], e));
            for (i = r.length; --i > -1;)
              for (n = r[i], s = i; --s > -1;) n === r[s] && r.splice(i, 1)
          } else if (t._gsTweenID)
            for (r = et(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
          return r || []
        }, R.killTweensOf = R.killDelayedCallsTo = function (t, e, i) {
          "object" == typeof e && (i = e, e = !1);
          for (var r = R.getTweensOf(t, e), s = r.length; --s > -1;) r[s]._kill(i, t)
        };
        var nt = E("plugins.TweenPlugin", function (t, e) {
          this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
        }, !0);
        if (c = nt.prototype, nt.version = "1.19.0", nt.API = 2, c._firstPT = null, c._addTween = W, c.setRatio = j, c._kill = function (t) {
            var e, i = this._overwriteProps,
              r = this._firstPT;
            if (null != t[this._propName]) this._overwriteProps = [];
            else
              for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
            for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
            return !1
          }, c._mod = c._roundProps = function (t) {
            for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
          }, R._onPluginEvent = function (t, e) {
            var i, r, s, n, a, o = e._firstPT;
            if ("_onInitAllProps" === t) {
              for (; o;) {
                for (a = o._next, r = s; r && r.pr > o.pr;) r = r._next;
                (o._prev = r ? r._prev : n) ? o._prev._next = o: s = o, (o._next = r) ? r._prev = o : n = o, o = a
              }
              o = e._firstPT = s
            }
            for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
            return i
          }, nt.activate = function (t) {
            for (var e = t.length; --e > -1;) t[e].API === nt.API && (X[(new t[e])._propName] = t[e]);
            return !0
          }, T.plugin = function (t) {
            if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
            var e, i = t.propName,
              r = t.priority || 0,
              s = t.overwriteProps,
              n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
              },
              a = E("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                nt.call(this, i, r), this._overwriteProps = s || []
              }, !0 === t.global),
              o = a.prototype = new nt(i);
            o.constructor = a, a.API = t.API;
            for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
            return a.version = t.version, nt.activate([a]), a
          }, h = i._gsQueue) {
          for (p = 0; p < h.length; p++) h[p]();
          for (c in _) _[c].func || i.console.log("GSAP encountered missing dependency: " + c)
        }
        u = !1
      }
    }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
  }).call(e, i(1))
}, function (t, e, i) {
  i(9), t.exports = i(39)
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
    }),
    function (t) {
      var e = i(0),
        r = (i.n(e), i(10), i(13)),
        s = i(15),
        n = i(26),
        a = i(33),
        o = i(34),
        l = i(35),
        h = i(37),
        p = i(38),
        c = new r.a({
          common: s.a,
          home: n.a,
          info: a.a,
          lab: o.a,
          archive: l.a,
          news: h.a,
          single: p.a
        });
      t(document).ready(function () {
        return c.loadEvents()
      })
    }.call(e, i(0))
}, function (t, e, i) {
  "use strict";
  var r = i(11);
  i.n(r)
}, function (t, e, i) {
  /*!
   * Bootstrap v4.1.0 (https://getbootstrap.com/)
   * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
   * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
   */
  ! function (t, r) {
    r(e, i(0), i(12))
  }(0, function (t, e, i) {
    "use strict";

    function r(t, e) {
      for (var i = 0; i < e.length; i++) {
        var r = e[i];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }

    function s(t, e, i) {
      return e && r(t.prototype, e), i && r(t, i), t
    }

    function n(t, e, i) {
      return e in t ? Object.defineProperty(t, e, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[e] = i, t
    }

    function a(t) {
      for (var e = arguments, i = 1; i < arguments.length; i++) {
        var r = null != e[i] ? e[i] : {},
          s = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(r).filter(function (t) {
          return Object.getOwnPropertyDescriptor(r, t).enumerable
        }))), s.forEach(function (e) {
          n(t, e, r[e])
        })
      }
      return t
    }

    function o(t, e) {
      t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e
    }
    e = e && e.hasOwnProperty("default") ? e.default : e, i = i && i.hasOwnProperty("default") ? i.default : i;
    var l = function (t) {
        function e(t) {
          return {}.toString.call(t).match(/\s([a-z]+)/i)[1].toLowerCase()
        }

        function i() {
          return {
            bindType: s,
            delegateType: s,
            handle: function (e) {
              if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
            }
          }
        }

        function r(e) {
          var i = this,
            r = !1;
          return t(this).one(n.TRANSITION_END, function () {
            r = !0
          }), setTimeout(function () {
            r || n.triggerTransitionEnd(i)
          }, e), this
        }
        var s = "transitionend",
          n = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
              do {
                t += ~~(1e6 * Math.random())
              } while (document.getElementById(t));
              return t
            },
            getSelectorFromElement: function (e) {
              var i = e.getAttribute("data-target");
              i && "#" !== i || (i = e.getAttribute("href") || "");
              try {
                return t(document).find(i).length > 0 ? i : null
              } catch (t) {
                return null
              }
            },
            getTransitionDurationFromElement: function (e) {
              if (!e) return 0;
              var i = t(e).css("transition-duration");
              return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0
            },
            reflow: function (t) {
              return t.offsetHeight
            },
            triggerTransitionEnd: function (e) {
              t(e).trigger(s)
            },
            supportsTransitionEnd: function () {
              return Boolean(s)
            },
            isElement: function (t) {
              return (t[0] || t).nodeType
            },
            typeCheckConfig: function (t, i, r) {
              for (var s in r)
                if (Object.prototype.hasOwnProperty.call(r, s)) {
                  var a = r[s],
                    o = i[s],
                    l = o && n.isElement(o) ? "element" : e(o);
                  if (!new RegExp(a).test(l)) throw new Error(t.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + a + '".')
                }
            }
          };
        return function () {
          t.fn.emulateTransitionEnd = r, t.event.special[n.TRANSITION_END] = i()
        }(), n
      }(e),
      h = function (t) {
        var e = "alert",
          i = t.fn[e],
          r = {
            DISMISS: '[data-dismiss="alert"]'
          },
          n = {
            CLOSE: "close.bs.alert",
            CLOSED: "closed.bs.alert",
            CLICK_DATA_API: "click.bs.alert.data-api"
          },
          a = {
            ALERT: "alert",
            FADE: "fade",
            SHOW: "show"
          },
          o = function () {
            function e(t) {
              this._element = t
            }
            var i = e.prototype;
            return i.close = function (t) {
              t = t || this._element;
              var e = this._getRootElement(t);
              this._triggerCloseEvent(e).isDefaultPrevented() || this._removeElement(e)
            }, i.dispose = function () {
              t.removeData(this._element, "bs.alert"), this._element = null
            }, i._getRootElement = function (e) {
              var i = l.getSelectorFromElement(e),
                r = !1;
              return i && (r = t(i)[0]), r || (r = t(e).closest("." + a.ALERT)[0]), r
            }, i._triggerCloseEvent = function (e) {
              var i = t.Event(n.CLOSE);
              return t(e).trigger(i), i
            }, i._removeElement = function (e) {
              var i = this;
              if (t(e).removeClass(a.SHOW), !t(e).hasClass(a.FADE)) return void this._destroyElement(e);
              var r = l.getTransitionDurationFromElement(e);
              t(e).one(l.TRANSITION_END, function (t) {
                return i._destroyElement(e, t)
              }).emulateTransitionEnd(r)
            }, i._destroyElement = function (e) {
              t(e).detach().trigger(n.CLOSED).remove()
            }, e._jQueryInterface = function (i) {
              return this.each(function () {
                var r = t(this),
                  s = r.data("bs.alert");
                s || (s = new e(this), r.data("bs.alert", s)), "close" === i && s[i](this)
              })
            }, e._handleDismiss = function (t) {
              return function (e) {
                e && e.preventDefault(), t.close(this)
              }
            }, s(e, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }]), e
          }();
        return t(document).on(n.CLICK_DATA_API, r.DISMISS, o._handleDismiss(new o)), t.fn[e] = o._jQueryInterface, t.fn[e].Constructor = o, t.fn[e].noConflict = function () {
          return t.fn[e] = i, o._jQueryInterface
        }, o
      }(e),
      p = function (t) {
        var e = "button",
          i = t.fn[e],
          r = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
          },
          n = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: "input",
            ACTIVE: ".active",
            BUTTON: ".btn"
          },
          a = {
            CLICK_DATA_API: "click.bs.button.data-api",
            FOCUS_BLUR_DATA_API: "focus.bs.button.data-api blur.bs.button.data-api"
          },
          o = function () {
            function e(t) {
              this._element = t
            }
            var i = e.prototype;
            return i.toggle = function () {
              var e = !0,
                i = !0,
                s = t(this._element).closest(n.DATA_TOGGLE)[0];
              if (s) {
                var a = t(this._element).find(n.INPUT)[0];
                if (a) {
                  if ("radio" === a.type)
                    if (a.checked && t(this._element).hasClass(r.ACTIVE)) e = !1;
                    else {
                      var o = t(s).find(n.ACTIVE)[0];
                      o && t(o).removeClass(r.ACTIVE)
                    } if (e) {
                    if (a.hasAttribute("disabled") || s.hasAttribute("disabled") || a.classList.contains("disabled") || s.classList.contains("disabled")) return;
                    a.checked = !t(this._element).hasClass(r.ACTIVE), t(a).trigger("change")
                  }
                  a.focus(), i = !1
                }
              }
              i && this._element.setAttribute("aria-pressed", !t(this._element).hasClass(r.ACTIVE)), e && t(this._element).toggleClass(r.ACTIVE)
            }, i.dispose = function () {
              t.removeData(this._element, "bs.button"), this._element = null
            }, e._jQueryInterface = function (i) {
              return this.each(function () {
                var r = t(this).data("bs.button");
                r || (r = new e(this), t(this).data("bs.button", r)), "toggle" === i && r[i]()
              })
            }, s(e, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }]), e
          }();
        return t(document).on(a.CLICK_DATA_API, n.DATA_TOGGLE_CARROT, function (e) {
          e.preventDefault();
          var i = e.target;
          t(i).hasClass(r.BUTTON) || (i = t(i).closest(n.BUTTON)), o._jQueryInterface.call(t(i), "toggle")
        }).on(a.FOCUS_BLUR_DATA_API, n.DATA_TOGGLE_CARROT, function (e) {
          var i = t(e.target).closest(n.BUTTON)[0];
          t(i).toggleClass(r.FOCUS, /^focus(in)?$/.test(e.type))
        }), t.fn[e] = o._jQueryInterface, t.fn[e].Constructor = o, t.fn[e].noConflict = function () {
          return t.fn[e] = i, o._jQueryInterface
        }, o
      }(e),
      c = function (t) {
        var e = "carousel",
          i = "bs.carousel",
          r = "." + i,
          n = t.fn[e],
          o = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
          },
          h = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
          },
          p = {
            NEXT: "next",
            PREV: "prev",
            LEFT: "left",
            RIGHT: "right"
          },
          c = {
            SLIDE: "slide" + r,
            SLID: "slid" + r,
            KEYDOWN: "keydown" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r,
            TOUCHEND: "touchend" + r,
            LOAD_DATA_API: "load.bs.carousel.data-api",
            CLICK_DATA_API: "click.bs.carousel.data-api"
          },
          d = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item"
          },
          u = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
          },
          f = function () {
            function n(e, i) {
              this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = t(e)[0], this._indicatorsElement = t(this._element).find(u.INDICATORS)[0], this._addEventListeners()
            }
            var f = n.prototype;
            return f.next = function () {
              this._isSliding || this._slide(p.NEXT)
            }, f.nextWhenVisible = function () {
              !document.hidden && t(this._element).is(":visible") && "hidden" !== t(this._element).css("visibility") && this.next()
            }, f.prev = function () {
              this._isSliding || this._slide(p.PREV)
            }, f.pause = function (e) {
              e || (this._isPaused = !0), t(this._element).find(u.NEXT_PREV)[0] && (l.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, f.cycle = function (t) {
              t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, f.to = function (e) {
              var i = this;
              this._activeElement = t(this._element).find(u.ACTIVE_ITEM)[0];
              var r = this._getItemIndex(this._activeElement);
              if (!(e > this._items.length - 1 || e < 0)) {
                if (this._isSliding) return void t(this._element).one(c.SLID, function () {
                  return i.to(e)
                });
                if (r === e) return this.pause(), void this.cycle();
                var s = e > r ? p.NEXT : p.PREV;
                this._slide(s, this._items[e])
              }
            }, f.dispose = function () {
              t(this._element).off(r), t.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, f._getConfig = function (t) {
              return t = a({}, o, t), l.typeCheckConfig(e, t, h), t
            }, f._addEventListeners = function () {
              var e = this;
              this._config.keyboard && t(this._element).on(c.KEYDOWN, function (t) {
                return e._keydown(t)
              }), "hover" === this._config.pause && (t(this._element).on(c.MOUSEENTER, function (t) {
                return e.pause(t)
              }).on(c.MOUSELEAVE, function (t) {
                return e.cycle(t)
              }), "ontouchstart" in document.documentElement && t(this._element).on(c.TOUCHEND, function () {
                e.pause(), e.touchTimeout && clearTimeout(e.touchTimeout), e.touchTimeout = setTimeout(function (t) {
                  return e.cycle(t)
                }, 500 + e._config.interval)
              }))
            }, f._keydown = function (t) {
              if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev();
                  break;
                case 39:
                  t.preventDefault(), this.next()
              }
            }, f._getItemIndex = function (e) {
              return this._items = t.makeArray(t(e).parent().find(u.ITEM)), this._items.indexOf(e)
            }, f._getItemByDirection = function (t, e) {
              var i = t === p.NEXT,
                r = t === p.PREV,
                s = this._getItemIndex(e),
                n = this._items.length - 1;
              if ((r && 0 === s || i && s === n) && !this._config.wrap) return e;
              var a = t === p.PREV ? -1 : 1,
                o = (s + a) % this._items.length;
              return -1 === o ? this._items[this._items.length - 1] : this._items[o]
            }, f._triggerSlideEvent = function (e, i) {
              var r = this._getItemIndex(e),
                s = this._getItemIndex(t(this._element).find(u.ACTIVE_ITEM)[0]),
                n = t.Event(c.SLIDE, {
                  relatedTarget: e,
                  direction: i,
                  from: s,
                  to: r
                });
              return t(this._element).trigger(n), n
            }, f._setActiveIndicatorElement = function (e) {
              if (this._indicatorsElement) {
                t(this._indicatorsElement).find(u.ACTIVE).removeClass(d.ACTIVE);
                var i = this._indicatorsElement.children[this._getItemIndex(e)];
                i && t(i).addClass(d.ACTIVE)
              }
            }, f._slide = function (e, i) {
              var r, s, n, a = this,
                o = t(this._element).find(u.ACTIVE_ITEM)[0],
                h = this._getItemIndex(o),
                f = i || o && this._getItemByDirection(e, o),
                m = this._getItemIndex(f),
                g = Boolean(this._interval);
              if (e === p.NEXT ? (r = d.LEFT, s = d.NEXT, n = p.LEFT) : (r = d.RIGHT, s = d.PREV, n = p.RIGHT), f && t(f).hasClass(d.ACTIVE)) return void(this._isSliding = !1);
              if (!this._triggerSlideEvent(f, n).isDefaultPrevented() && o && f) {
                this._isSliding = !0, g && this.pause(), this._setActiveIndicatorElement(f);
                var v = t.Event(c.SLID, {
                  relatedTarget: f,
                  direction: n,
                  from: h,
                  to: m
                });
                if (t(this._element).hasClass(d.SLIDE)) {
                  t(f).addClass(s), l.reflow(f), t(o).addClass(r), t(f).addClass(r);
                  var y = l.getTransitionDurationFromElement(o);
                  t(o).one(l.TRANSITION_END, function () {
                    t(f).removeClass(r + " " + s).addClass(d.ACTIVE), t(o).removeClass(d.ACTIVE + " " + s + " " + r), a._isSliding = !1, setTimeout(function () {
                      return t(a._element).trigger(v)
                    }, 0)
                  }).emulateTransitionEnd(y)
                } else t(o).removeClass(d.ACTIVE), t(f).addClass(d.ACTIVE), this._isSliding = !1, t(this._element).trigger(v);
                g && this.cycle()
              }
            }, n._jQueryInterface = function (e) {
              return this.each(function () {
                var r = t(this).data(i),
                  s = a({}, o, t(this).data());
                "object" == typeof e && (s = a({}, s, e));
                var l = "string" == typeof e ? e : s.slide;
                if (r || (r = new n(this, s), t(this).data(i, r)), "number" == typeof e) r.to(e);
                else if ("string" == typeof l) {
                  if (void 0 === r[l]) throw new TypeError('No method named "' + l + '"');
                  r[l]()
                } else s.interval && (r.pause(), r.cycle())
              })
            }, n._dataApiClickHandler = function (e) {
              var r = l.getSelectorFromElement(this);
              if (r) {
                var s = t(r)[0];
                if (s && t(s).hasClass(d.CAROUSEL)) {
                  var o = a({}, t(s).data(), t(this).data()),
                    h = this.getAttribute("data-slide-to");
                  h && (o.interval = !1), n._jQueryInterface.call(t(s), o), h && t(s).data(i).to(h), e.preventDefault()
                }
              }
            }, s(n, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return o
              }
            }]), n
          }();
        return t(document).on(c.CLICK_DATA_API, u.DATA_SLIDE, f._dataApiClickHandler), t(window).on(c.LOAD_DATA_API, function () {
          t(u.DATA_RIDE).each(function () {
            var e = t(this);
            f._jQueryInterface.call(e, e.data())
          })
        }), t.fn[e] = f._jQueryInterface, t.fn[e].Constructor = f, t.fn[e].noConflict = function () {
          return t.fn[e] = n, f._jQueryInterface
        }, f
      }(e),
      d = function (t) {
        var e = "collapse",
          i = "bs.collapse",
          r = t.fn[e],
          n = {
            toggle: !0,
            parent: ""
          },
          o = {
            toggle: "boolean",
            parent: "(string|element)"
          },
          h = {
            SHOW: "show.bs.collapse",
            SHOWN: "shown.bs.collapse",
            HIDE: "hide.bs.collapse",
            HIDDEN: "hidden.bs.collapse",
            CLICK_DATA_API: "click.bs.collapse.data-api"
          },
          p = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
          },
          c = {
            WIDTH: "width",
            HEIGHT: "height"
          },
          d = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
          },
          u = function () {
            function r(e, i) {
              var r = this;
              this._isTransitioning = !1, this._element = e, this._config = this._getConfig(i), this._triggerArray = t.makeArray(t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'));
              for (var s = t(d.DATA_TOGGLE), n = 0; n < s.length; n++) {
                var a = s[n],
                  o = l.getSelectorFromElement(a);
                null !== o && t(o).filter(e).length > 0 && (r._selector = o, r._triggerArray.push(a))
              }
              this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
            }
            var u = r.prototype;
            return u.toggle = function () {
              t(this._element).hasClass(p.SHOW) ? this.hide() : this.show()
            }, u.show = function () {
              var e = this;
              if (!this._isTransitioning && !t(this._element).hasClass(p.SHOW)) {
                var s, n;
                if (this._parent && (s = t.makeArray(t(this._parent).find(d.ACTIVES).filter('[data-parent="' + this._config.parent + '"]')), 0 === s.length && (s = null)), !(s && (n = t(s).not(this._selector).data(i)) && n._isTransitioning)) {
                  var a = t.Event(h.SHOW);
                  if (t(this._element).trigger(a), !a.isDefaultPrevented()) {
                    s && (r._jQueryInterface.call(t(s).not(this._selector), "hide"), n || t(s).data(i, null));
                    var o = this._getDimension();
                    t(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING), this._element.style[o] = 0, this._triggerArray.length > 0 && t(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", !0), this.setTransitioning(!0);
                    var c = function () {
                        t(e._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.SHOW), e._element.style[o] = "", e.setTransitioning(!1), t(e._element).trigger(h.SHOWN)
                      },
                      u = o[0].toUpperCase() + o.slice(1),
                      f = "scroll" + u,
                      m = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, c).emulateTransitionEnd(m), this._element.style[o] = this._element[f] + "px"
                  }
                }
              }
            }, u.hide = function () {
              var e = this,
                i = this;
              if (!this._isTransitioning && t(this._element).hasClass(p.SHOW)) {
                var r = t.Event(h.HIDE);
                if (t(this._element).trigger(r), !r.isDefaultPrevented()) {
                  var s = this._getDimension();
                  if (this._element.style[s] = this._element.getBoundingClientRect()[s] + "px", l.reflow(this._element), t(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.SHOW), this._triggerArray.length > 0)
                    for (var n = 0; n < this._triggerArray.length; n++) {
                      var a = e._triggerArray[n],
                        o = l.getSelectorFromElement(a);
                      if (null !== o) {
                        var c = t(o);
                        c.hasClass(p.SHOW) || t(a).addClass(p.COLLAPSED).attr("aria-expanded", !1)
                      }
                    }
                  this.setTransitioning(!0);
                  var d = function () {
                    i.setTransitioning(!1), t(i._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(h.HIDDEN)
                  };
                  this._element.style[s] = "";
                  var u = l.getTransitionDurationFromElement(this._element);
                  t(this._element).one(l.TRANSITION_END, d).emulateTransitionEnd(u)
                }
              }
            }, u.setTransitioning = function (t) {
              this._isTransitioning = t
            }, u.dispose = function () {
              t.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, u._getConfig = function (t) {
              return t = a({}, n, t), t.toggle = Boolean(t.toggle), l.typeCheckConfig(e, t, o), t
            }, u._getDimension = function () {
              return t(this._element).hasClass(c.WIDTH) ? c.WIDTH : c.HEIGHT
            }, u._getParent = function () {
              var e = this,
                i = null;
              l.isElement(this._config.parent) ? (i = this._config.parent, void 0 !== this._config.parent.jquery && (i = this._config.parent[0])) : i = t(this._config.parent)[0];
              var s = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
              return t(i).find(s).each(function (t, i) {
                e._addAriaAndCollapsedClass(r._getTargetFromElement(i), [i])
              }), i
            }, u._addAriaAndCollapsedClass = function (e, i) {
              if (e) {
                var r = t(e).hasClass(p.SHOW);
                i.length > 0 && t(i).toggleClass(p.COLLAPSED, !r).attr("aria-expanded", r)
              }
            }, r._getTargetFromElement = function (e) {
              var i = l.getSelectorFromElement(e);
              return i ? t(i)[0] : null
            }, r._jQueryInterface = function (e) {
              return this.each(function () {
                var s = t(this),
                  o = s.data(i),
                  l = a({}, n, s.data(), "object" == typeof e && e);
                if (!o && l.toggle && /show|hide/.test(e) && (l.toggle = !1), o || (o = new r(this, l), s.data(i, o)), "string" == typeof e) {
                  if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                  o[e]()
                }
              })
            }, s(r, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return n
              }
            }]), r
          }();
        return t(document).on(h.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
          "A" === e.currentTarget.tagName && e.preventDefault();
          var r = t(this),
            s = l.getSelectorFromElement(this);
          t(s).each(function () {
            var e = t(this),
              s = e.data(i),
              n = s ? "toggle" : r.data();
            u._jQueryInterface.call(e, n)
          })
        }), t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
          return t.fn[e] = r, u._jQueryInterface
        }, u
      }(e),
      u = function (t) {
        var e = "dropdown",
          r = "bs.dropdown",
          n = "." + r,
          o = t.fn[e],
          h = new RegExp("38|40|27"),
          p = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK: "click" + n,
            CLICK_DATA_API: "click.bs.dropdown.data-api",
            KEYDOWN_DATA_API: "keydown.bs.dropdown.data-api",
            KEYUP_DATA_API: "keyup.bs.dropdown.data-api"
          },
          c = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
          },
          d = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
          },
          u = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
          },
          f = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
          },
          m = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
          },
          g = function () {
            function o(t, e) {
              this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
            }
            var g = o.prototype;
            return g.toggle = function () {
              if (!this._element.disabled && !t(this._element).hasClass(c.DISABLED)) {
                var e = o._getParentFromElement(this._element),
                  r = t(this._menu).hasClass(c.SHOW);
                if (o._clearMenus(), !r) {
                  var s = {
                      relatedTarget: this._element
                    },
                    n = t.Event(p.SHOW, s);
                  if (t(e).trigger(n), !n.isDefaultPrevented()) {
                    if (!this._inNavbar) {
                      if (void 0 === i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                      var a = this._element;
                      "parent" === this._config.reference ? a = e : l.isElement(this._config.reference) && (a = this._config.reference, void 0 !== this._config.reference.jquery && (a = this._config.reference[0])), "scrollParent" !== this._config.boundary && t(e).addClass(c.POSITION_STATIC), this._popper = new i(a, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === t(e).closest(d.NAVBAR_NAV).length && t(document.body).children().on("mouseover", null, t.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), t(this._menu).toggleClass(c.SHOW), t(e).toggleClass(c.SHOW).trigger(t.Event(p.SHOWN, s))
                  }
                }
              }
            }, g.dispose = function () {
              t.removeData(this._element, r), t(this._element).off(n), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, g.update = function () {
              this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, g._addEventListeners = function () {
              var e = this;
              t(this._element).on(p.CLICK, function (t) {
                t.preventDefault(), t.stopPropagation(), e.toggle()
              })
            }, g._getConfig = function (i) {
              return i = a({}, this.constructor.Default, t(this._element).data(), i), l.typeCheckConfig(e, i, this.constructor.DefaultType), i
            }, g._getMenuElement = function () {
              if (!this._menu) {
                var e = o._getParentFromElement(this._element);
                this._menu = t(e).find(d.MENU)[0]
              }
              return this._menu
            }, g._getPlacement = function () {
              var e = t(this._element).parent(),
                i = u.BOTTOM;
              return e.hasClass(c.DROPUP) ? (i = u.TOP, t(this._menu).hasClass(c.MENURIGHT) && (i = u.TOPEND)) : e.hasClass(c.DROPRIGHT) ? i = u.RIGHT : e.hasClass(c.DROPLEFT) ? i = u.LEFT : t(this._menu).hasClass(c.MENURIGHT) && (i = u.BOTTOMEND), i
            }, g._detectNavbar = function () {
              return t(this._element).closest(".navbar").length > 0
            }, g._getPopperConfig = function () {
              var t = this,
                e = {};
              "function" == typeof this._config.offset ? e.fn = function (e) {
                return e.offsets = a({}, e.offsets, t._config.offset(e.offsets) || {}), e
              } : e.offset = this._config.offset;
              var i = {
                placement: this._getPlacement(),
                modifiers: {
                  offset: e,
                  flip: {
                    enabled: this._config.flip
                  },
                  preventOverflow: {
                    boundariesElement: this._config.boundary
                  }
                }
              };
              return "static" === this._config.display && (i.modifiers.applyStyle = {
                enabled: !1
              }), i
            }, o._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data(r),
                  s = "object" == typeof e ? e : null;
                if (i || (i = new o(this, s), t(this).data(r, i)), "string" == typeof e) {
                  if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                  i[e]()
                }
              })
            }, o._clearMenus = function (e) {
              if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                for (var i = t.makeArray(t(d.DATA_TOGGLE)), s = 0; s < i.length; s++) {
                  var n = o._getParentFromElement(i[s]),
                    a = t(i[s]).data(r),
                    l = {
                      relatedTarget: i[s]
                    };
                  if (a) {
                    var h = a._menu;
                    if (t(n).hasClass(c.SHOW) && !(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && t.contains(n, e.target))) {
                      var u = t.Event(p.HIDE, l);
                      t(n).trigger(u), u.isDefaultPrevented() || ("ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), i[s].setAttribute("aria-expanded", "false"), t(h).removeClass(c.SHOW), t(n).removeClass(c.SHOW).trigger(t.Event(p.HIDDEN, l)))
                    }
                  }
                }
            }, o._getParentFromElement = function (e) {
              var i, r = l.getSelectorFromElement(e);
              return r && (i = t(r)[0]), i || e.parentNode
            }, o._dataApiKeydownHandler = function (e) {
              if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || t(e.target).closest(d.MENU).length)) : h.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !t(this).hasClass(c.DISABLED))) {
                var i = o._getParentFromElement(this),
                  r = t(i).hasClass(c.SHOW);
                if (!r && (27 !== e.which || 32 !== e.which) || r && (27 === e.which || 32 === e.which)) {
                  if (27 === e.which) {
                    var s = t(i).find(d.DATA_TOGGLE)[0];
                    t(s).trigger("focus")
                  }
                  return void t(this).trigger("click")
                }
                var n = t(i).find(d.VISIBLE_ITEMS).get();
                if (0 !== n.length) {
                  var a = n.indexOf(e.target);
                  38 === e.which && a > 0 && a--, 40 === e.which && a < n.length - 1 && a++, a < 0 && (a = 0), n[a].focus()
                }
              }
            }, s(o, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return f
              }
            }, {
              key: "DefaultType",
              get: function () {
                return m
              }
            }]), o
          }();
        return t(document).on(p.KEYDOWN_DATA_API, d.DATA_TOGGLE, g._dataApiKeydownHandler).on(p.KEYDOWN_DATA_API, d.MENU, g._dataApiKeydownHandler).on(p.CLICK_DATA_API + " " + p.KEYUP_DATA_API, g._clearMenus).on(p.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
          e.preventDefault(), e.stopPropagation(), g._jQueryInterface.call(t(this), "toggle")
        }).on(p.CLICK_DATA_API, d.FORM_CHILD, function (t) {
          t.stopPropagation()
        }), t.fn[e] = g._jQueryInterface, t.fn[e].Constructor = g, t.fn[e].noConflict = function () {
          return t.fn[e] = o, g._jQueryInterface
        }, g
      }(e),
      f = function (t) {
        var e = "modal",
          i = ".bs.modal",
          r = t.fn[e],
          n = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
          },
          o = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
          },
          h = {
            HIDE: "hide.bs.modal",
            HIDDEN: "hidden.bs.modal",
            SHOW: "show.bs.modal",
            SHOWN: "shown.bs.modal",
            FOCUSIN: "focusin.bs.modal",
            RESIZE: "resize.bs.modal",
            CLICK_DISMISS: "click.dismiss.bs.modal",
            KEYDOWN_DISMISS: "keydown.dismiss.bs.modal",
            MOUSEUP_DISMISS: "mouseup.dismiss.bs.modal",
            MOUSEDOWN_DISMISS: "mousedown.dismiss.bs.modal",
            CLICK_DATA_API: "click.bs.modal.data-api"
          },
          p = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
          },
          c = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top",
            NAVBAR_TOGGLER: ".navbar-toggler"
          },
          d = function () {
            function r(e, i) {
              this._config = this._getConfig(i), this._element = e, this._dialog = t(e).find(c.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._scrollbarWidth = 0
            }
            var d = r.prototype;
            return d.toggle = function (t) {
              return this._isShown ? this.hide() : this.show(t)
            }, d.show = function (e) {
              var i = this;
              if (!this._isTransitioning && !this._isShown) {
                t(this._element).hasClass(p.FADE) && (this._isTransitioning = !0);
                var r = t.Event(h.SHOW, {
                  relatedTarget: e
                });
                t(this._element).trigger(r), this._isShown || r.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), t(document.body).addClass(p.OPEN), this._setEscapeEvent(), this._setResizeEvent(), t(this._element).on(h.CLICK_DISMISS, c.DATA_DISMISS, function (t) {
                  return i.hide(t)
                }), t(this._dialog).on(h.MOUSEDOWN_DISMISS, function () {
                  t(i._element).one(h.MOUSEUP_DISMISS, function (e) {
                    t(e.target).is(i._element) && (i._ignoreBackdropClick = !0)
                  })
                }), this._showBackdrop(function () {
                  return i._showElement(e)
                }))
              }
            }, d.hide = function (e) {
              var i = this;
              if (e && e.preventDefault(), !this._isTransitioning && this._isShown) {
                var r = t.Event(h.HIDE);
                if (t(this._element).trigger(r), this._isShown && !r.isDefaultPrevented()) {
                  this._isShown = !1;
                  var s = t(this._element).hasClass(p.FADE);
                  if (s && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), t(document).off(h.FOCUSIN), t(this._element).removeClass(p.SHOW), t(this._element).off(h.CLICK_DISMISS), t(this._dialog).off(h.MOUSEDOWN_DISMISS), s) {
                    var n = l.getTransitionDurationFromElement(this._element);
                    t(this._element).one(l.TRANSITION_END, function (t) {
                      return i._hideModal(t)
                    }).emulateTransitionEnd(n)
                  } else this._hideModal()
                }
              }
            }, d.dispose = function () {
              t.removeData(this._element, "bs.modal"), t(window, document, this._element, this._backdrop).off(i), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
            }, d.handleUpdate = function () {
              this._adjustDialog()
            }, d._getConfig = function (t) {
              return t = a({}, n, t), l.typeCheckConfig(e, t, o), t
            }, d._showElement = function (e) {
              var i = this,
                r = t(this._element).hasClass(p.FADE);
              this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, r && l.reflow(this._element), t(this._element).addClass(p.SHOW), this._config.focus && this._enforceFocus();
              var s = t.Event(h.SHOWN, {
                  relatedTarget: e
                }),
                n = function () {
                  i._config.focus && i._element.focus(), i._isTransitioning = !1, t(i._element).trigger(s)
                };
              if (r) {
                var a = l.getTransitionDurationFromElement(this._element);
                t(this._dialog).one(l.TRANSITION_END, n).emulateTransitionEnd(a)
              } else n()
            }, d._enforceFocus = function () {
              var e = this;
              t(document).off(h.FOCUSIN).on(h.FOCUSIN, function (i) {
                document !== i.target && e._element !== i.target && 0 === t(e._element).has(i.target).length && e._element.focus()
              })
            }, d._setEscapeEvent = function () {
              var e = this;
              this._isShown && this._config.keyboard ? t(this._element).on(h.KEYDOWN_DISMISS, function (t) {
                27 === t.which && (t.preventDefault(), e.hide())
              }) : this._isShown || t(this._element).off(h.KEYDOWN_DISMISS)
            }, d._setResizeEvent = function () {
              var e = this;
              this._isShown ? t(window).on(h.RESIZE, function (t) {
                return e.handleUpdate(t)
              }) : t(window).off(h.RESIZE)
            }, d._hideModal = function () {
              var e = this;
              this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                t(document.body).removeClass(p.OPEN), e._resetAdjustments(), e._resetScrollbar(), t(e._element).trigger(h.HIDDEN)
              })
            }, d._removeBackdrop = function () {
              this._backdrop && (t(this._backdrop).remove(), this._backdrop = null)
            }, d._showBackdrop = function (e) {
              var i = this,
                r = t(this._element).hasClass(p.FADE) ? p.FADE : "";
              if (this._isShown && this._config.backdrop) {
                if (this._backdrop = document.createElement("div"), this._backdrop.className = p.BACKDROP, r && t(this._backdrop).addClass(r), t(this._backdrop).appendTo(document.body), t(this._element).on(h.CLICK_DISMISS, function (t) {
                    if (i._ignoreBackdropClick) return void(i._ignoreBackdropClick = !1);
                    t.target === t.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                  }), r && l.reflow(this._backdrop), t(this._backdrop).addClass(p.SHOW), !e) return;
                if (!r) return void e();
                var s = l.getTransitionDurationFromElement(this._backdrop);
                t(this._backdrop).one(l.TRANSITION_END, e).emulateTransitionEnd(s)
              } else if (!this._isShown && this._backdrop) {
                t(this._backdrop).removeClass(p.SHOW);
                var n = function () {
                  i._removeBackdrop(), e && e()
                };
                if (t(this._element).hasClass(p.FADE)) {
                  var a = l.getTransitionDurationFromElement(this._backdrop);
                  t(this._backdrop).one(l.TRANSITION_END, n).emulateTransitionEnd(a)
                } else n()
              } else e && e()
            }, d._adjustDialog = function () {
              var t = this._element.scrollHeight > document.documentElement.clientHeight;
              !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, d._resetAdjustments = function () {
              this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, d._checkScrollbar = function () {
              var t = document.body.getBoundingClientRect();
              this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, d._setScrollbar = function () {
              var e = this;
              if (this._isBodyOverflowing) {
                t(c.FIXED_CONTENT).each(function (i, r) {
                  var s = t(r)[0].style.paddingRight,
                    n = t(r).css("padding-right");
                  t(r).data("padding-right", s).css("padding-right", parseFloat(n) + e._scrollbarWidth + "px")
                }), t(c.STICKY_CONTENT).each(function (i, r) {
                  var s = t(r)[0].style.marginRight,
                    n = t(r).css("margin-right");
                  t(r).data("margin-right", s).css("margin-right", parseFloat(n) - e._scrollbarWidth + "px")
                }), t(c.NAVBAR_TOGGLER).each(function (i, r) {
                  var s = t(r)[0].style.marginRight,
                    n = t(r).css("margin-right");
                  t(r).data("margin-right", s).css("margin-right", parseFloat(n) + e._scrollbarWidth + "px")
                });
                var i = document.body.style.paddingRight,
                  r = t(document.body).css("padding-right");
                t(document.body).data("padding-right", i).css("padding-right", parseFloat(r) + this._scrollbarWidth + "px")
              }
            }, d._resetScrollbar = function () {
              t(c.FIXED_CONTENT).each(function (e, i) {
                var r = t(i).data("padding-right");
                void 0 !== r && t(i).css("padding-right", r).removeData("padding-right")
              }), t(c.STICKY_CONTENT + ", " + c.NAVBAR_TOGGLER).each(function (e, i) {
                var r = t(i).data("margin-right");
                void 0 !== r && t(i).css("margin-right", r).removeData("margin-right")
              });
              var e = t(document.body).data("padding-right");
              void 0 !== e && t(document.body).css("padding-right", e).removeData("padding-right")
            }, d._getScrollbarWidth = function () {
              var t = document.createElement("div");
              t.className = p.SCROLLBAR_MEASURER, document.body.appendChild(t);
              var e = t.getBoundingClientRect().width - t.clientWidth;
              return document.body.removeChild(t), e
            }, r._jQueryInterface = function (e, i) {
              return this.each(function () {
                var s = t(this).data("bs.modal"),
                  n = a({}, r.Default, t(this).data(), "object" == typeof e && e);
                if (s || (s = new r(this, n), t(this).data("bs.modal", s)), "string" == typeof e) {
                  if (void 0 === s[e]) throw new TypeError('No method named "' + e + '"');
                  s[e](i)
                } else n.show && s.show(i)
              })
            }, s(r, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return n
              }
            }]), r
          }();
        return t(document).on(h.CLICK_DATA_API, c.DATA_TOGGLE, function (e) {
          var i, r = this,
            s = l.getSelectorFromElement(this);
          s && (i = t(s)[0]);
          var n = t(i).data("bs.modal") ? "toggle" : a({}, t(i).data(), t(this).data());
          "A" !== this.tagName && "AREA" !== this.tagName || e.preventDefault();
          var o = t(i).one(h.SHOW, function (e) {
            e.isDefaultPrevented() || o.one(h.HIDDEN, function () {
              t(r).is(":visible") && r.focus()
            })
          });
          d._jQueryInterface.call(t(i), n, this)
        }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
          return t.fn[e] = r, d._jQueryInterface
        }, d
      }(e),
      m = function (t) {
        var e = "tooltip",
          r = ".bs.tooltip",
          n = t.fn[e],
          o = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
          h = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
          },
          p = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
          },
          c = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
          },
          d = {
            SHOW: "show",
            OUT: "out"
          },
          u = {
            HIDE: "hide" + r,
            HIDDEN: "hidden" + r,
            SHOW: "show" + r,
            SHOWN: "shown" + r,
            INSERTED: "inserted" + r,
            CLICK: "click" + r,
            FOCUSIN: "focusin" + r,
            FOCUSOUT: "focusout" + r,
            MOUSEENTER: "mouseenter" + r,
            MOUSELEAVE: "mouseleave" + r
          },
          f = {
            FADE: "fade",
            SHOW: "show"
          },
          m = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
          },
          g = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
          },
          v = function () {
            function n(t, e) {
              if (void 0 === i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
              this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners()
            }
            var v = n.prototype;
            return v.enable = function () {
              this._isEnabled = !0
            }, v.disable = function () {
              this._isEnabled = !1
            }, v.toggleEnabled = function () {
              this._isEnabled = !this._isEnabled
            }, v.toggle = function (e) {
              if (this._isEnabled)
                if (e) {
                  var i = this.constructor.DATA_KEY,
                    r = t(e.currentTarget).data(i);
                  r || (r = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(i, r)), r._activeTrigger.click = !r._activeTrigger.click, r._isWithActiveTrigger() ? r._enter(null, r) : r._leave(null, r)
                } else {
                  if (t(this.getTipElement()).hasClass(f.SHOW)) return void this._leave(null, this);
                  this._enter(null, this)
                }
            }, v.dispose = function () {
              clearTimeout(this._timeout), t.removeData(this.element, this.constructor.DATA_KEY), t(this.element).off(this.constructor.EVENT_KEY), t(this.element).closest(".modal").off("hide.bs.modal"), this.tip && t(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, v.show = function () {
              var e = this;
              if ("none" === t(this.element).css("display")) throw new Error("Please use show on visible elements");
              var r = t.Event(this.constructor.Event.SHOW);
              if (this.isWithContent() && this._isEnabled) {
                t(this.element).trigger(r);
                var s = t.contains(this.element.ownerDocument.documentElement, this.element);
                if (r.isDefaultPrevented() || !s) return;
                var n = this.getTipElement(),
                  a = l.getUID(this.constructor.NAME);
                n.setAttribute("id", a), this.element.setAttribute("aria-describedby", a), this.setContent(), this.config.animation && t(n).addClass(f.FADE);
                var o = "function" == typeof this.config.placement ? this.config.placement.call(this, n, this.element) : this.config.placement,
                  h = this._getAttachment(o);
                this.addAttachmentClass(h);
                var p = !1 === this.config.container ? document.body : t(this.config.container);
                t(n).data(this.constructor.DATA_KEY, this), t.contains(this.element.ownerDocument.documentElement, this.tip) || t(n).appendTo(p), t(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, n, {
                  placement: h,
                  modifiers: {
                    offset: {
                      offset: this.config.offset
                    },
                    flip: {
                      behavior: this.config.fallbackPlacement
                    },
                    arrow: {
                      element: m.ARROW
                    },
                    preventOverflow: {
                      boundariesElement: this.config.boundary
                    }
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement && e._handlePopperPlacementChange(t)
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t)
                  }
                }), t(n).addClass(f.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().on("mouseover", null, t.noop);
                var c = function () {
                  e.config.animation && e._fixTransition();
                  var i = e._hoverState;
                  e._hoverState = null, t(e.element).trigger(e.constructor.Event.SHOWN), i === d.OUT && e._leave(null, e)
                };
                if (t(this.tip).hasClass(f.FADE)) {
                  var u = l.getTransitionDurationFromElement(this.tip);
                  t(this.tip).one(l.TRANSITION_END, c).emulateTransitionEnd(u)
                } else c()
              }
            }, v.hide = function (e) {
              var i = this,
                r = this.getTipElement(),
                s = t.Event(this.constructor.Event.HIDE),
                n = function () {
                  i._hoverState !== d.SHOW && r.parentNode && r.parentNode.removeChild(r), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), t(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), e && e()
                };
              if (t(this.element).trigger(s), !s.isDefaultPrevented()) {
                if (t(r).removeClass(f.SHOW), "ontouchstart" in document.documentElement && t(document.body).children().off("mouseover", null, t.noop), this._activeTrigger[g.CLICK] = !1, this._activeTrigger[g.FOCUS] = !1, this._activeTrigger[g.HOVER] = !1, t(this.tip).hasClass(f.FADE)) {
                  var a = l.getTransitionDurationFromElement(r);
                  t(r).one(l.TRANSITION_END, n).emulateTransitionEnd(a)
                } else n();
                this._hoverState = ""
              }
            }, v.update = function () {
              null !== this._popper && this._popper.scheduleUpdate()
            }, v.isWithContent = function () {
              return Boolean(this.getTitle())
            }, v.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-tooltip-" + e)
            }, v.getTipElement = function () {
              return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, v.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(m.TOOLTIP_INNER), this.getTitle()), e.removeClass(f.FADE + " " + f.SHOW)
            }, v.setElementContent = function (e, i) {
              var r = this.config.html;
              "object" == typeof i && (i.nodeType || i.jquery) ? r ? t(i).parent().is(e) || e.empty().append(i) : e.text(t(i).text()) : e[r ? "html" : "text"](i)
            }, v.getTitle = function () {
              var t = this.element.getAttribute("data-original-title");
              return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, v._getAttachment = function (t) {
              return p[t.toUpperCase()]
            }, v._setListeners = function () {
              var e = this;
              this.config.trigger.split(" ").forEach(function (i) {
                if ("click" === i) t(e.element).on(e.constructor.Event.CLICK, e.config.selector, function (t) {
                  return e.toggle(t)
                });
                else if (i !== g.MANUAL) {
                  var r = i === g.HOVER ? e.constructor.Event.MOUSEENTER : e.constructor.Event.FOCUSIN,
                    s = i === g.HOVER ? e.constructor.Event.MOUSELEAVE : e.constructor.Event.FOCUSOUT;
                  t(e.element).on(r, e.config.selector, function (t) {
                    return e._enter(t)
                  }).on(s, e.config.selector, function (t) {
                    return e._leave(t)
                  })
                }
                t(e.element).closest(".modal").on("hide.bs.modal", function () {
                  return e.hide()
                })
              }), this.config.selector ? this.config = a({}, this.config, {
                trigger: "manual",
                selector: ""
              }) : this._fixTitle()
            }, v._fixTitle = function () {
              var t = typeof this.element.getAttribute("data-original-title");
              (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, v._enter = function (e, i) {
              var r = this.constructor.DATA_KEY;
              return i = i || t(e.currentTarget).data(r), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, i)), e && (i._activeTrigger["focusin" === e.type ? g.FOCUS : g.HOVER] = !0), t(i.getTipElement()).hasClass(f.SHOW) || i._hoverState === d.SHOW ? void(i._hoverState = d.SHOW) : (clearTimeout(i._timeout), i._hoverState = d.SHOW, i.config.delay && i.config.delay.show ? void(i._timeout = setTimeout(function () {
                i._hoverState === d.SHOW && i.show()
              }, i.config.delay.show)) : void i.show())
            }, v._leave = function (e, i) {
              var r = this.constructor.DATA_KEY;
              if (i = i || t(e.currentTarget).data(r), i || (i = new this.constructor(e.currentTarget, this._getDelegateConfig()), t(e.currentTarget).data(r, i)), e && (i._activeTrigger["focusout" === e.type ? g.FOCUS : g.HOVER] = !1), !i._isWithActiveTrigger()) {
                if (clearTimeout(i._timeout), i._hoverState = d.OUT, !i.config.delay || !i.config.delay.hide) return void i.hide();
                i._timeout = setTimeout(function () {
                  i._hoverState === d.OUT && i.hide()
                }, i.config.delay.hide)
              }
            }, v._isWithActiveTrigger = function () {
              var t = this;
              for (var e in t._activeTrigger)
                if (t._activeTrigger[e]) return !0;
              return !1
            }, v._getConfig = function (i) {
              return i = a({}, this.constructor.Default, t(this.element).data(), i), "number" == typeof i.delay && (i.delay = {
                show: i.delay,
                hide: i.delay
              }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), l.typeCheckConfig(e, i, this.constructor.DefaultType), i
            }, v._getDelegateConfig = function () {
              var t = this,
                e = {};
              if (this.config)
                for (var i in t.config) t.constructor.Default[i] !== t.config[i] && (e[i] = t.config[i]);
              return e
            }, v._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                i = e.attr("class").match(o);
              null !== i && i.length > 0 && e.removeClass(i.join(""))
            }, v._handlePopperPlacementChange = function (t) {
              this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, v._fixTransition = function () {
              var e = this.getTipElement(),
                i = this.config.animation;
              null === e.getAttribute("x-placement") && (t(e).removeClass(f.FADE), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
            }, n._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data("bs.tooltip"),
                  r = "object" == typeof e && e;
                if ((i || !/dispose|hide/.test(e)) && (i || (i = new n(this, r), t(this).data("bs.tooltip", i)), "string" == typeof e)) {
                  if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                  i[e]()
                }
              })
            }, s(n, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return c
              }
            }, {
              key: "NAME",
              get: function () {
                return e
              }
            }, {
              key: "DATA_KEY",
              get: function () {
                return "bs.tooltip"
              }
            }, {
              key: "Event",
              get: function () {
                return u
              }
            }, {
              key: "EVENT_KEY",
              get: function () {
                return r
              }
            }, {
              key: "DefaultType",
              get: function () {
                return h
              }
            }]), n
          }();
        return t.fn[e] = v._jQueryInterface, t.fn[e].Constructor = v, t.fn[e].noConflict = function () {
          return t.fn[e] = n, v._jQueryInterface
        }, v
      }(e),
      g = function (t) {
        var e = "popover",
          i = ".bs.popover",
          r = t.fn[e],
          n = new RegExp("(^|\\s)bs-popover\\S+", "g"),
          l = a({}, m.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
          }),
          h = a({}, m.DefaultType, {
            content: "(string|element|function)"
          }),
          p = {
            FADE: "fade",
            SHOW: "show"
          },
          c = {
            TITLE: ".popover-header",
            CONTENT: ".popover-body"
          },
          d = {
            HIDE: "hide" + i,
            HIDDEN: "hidden" + i,
            SHOW: "show" + i,
            SHOWN: "shown" + i,
            INSERTED: "inserted" + i,
            CLICK: "click" + i,
            FOCUSIN: "focusin" + i,
            FOCUSOUT: "focusout" + i,
            MOUSEENTER: "mouseenter" + i,
            MOUSELEAVE: "mouseleave" + i
          },
          u = function (r) {
            function a() {
              return r.apply(this, arguments) || this
            }
            o(a, r);
            var u = a.prototype;
            return u.isWithContent = function () {
              return this.getTitle() || this._getContent()
            }, u.addAttachmentClass = function (e) {
              t(this.getTipElement()).addClass("bs-popover-" + e)
            }, u.getTipElement = function () {
              return this.tip = this.tip || t(this.config.template)[0], this.tip
            }, u.setContent = function () {
              var e = t(this.getTipElement());
              this.setElementContent(e.find(c.TITLE), this.getTitle());
              var i = this._getContent();
              "function" == typeof i && (i = i.call(this.element)), this.setElementContent(e.find(c.CONTENT), i), e.removeClass(p.FADE + " " + p.SHOW)
            }, u._getContent = function () {
              return this.element.getAttribute("data-content") || this.config.content
            }, u._cleanTipClass = function () {
              var e = t(this.getTipElement()),
                i = e.attr("class").match(n);
              null !== i && i.length > 0 && e.removeClass(i.join(""))
            }, a._jQueryInterface = function (e) {
              return this.each(function () {
                var i = t(this).data("bs.popover"),
                  r = "object" == typeof e ? e : null;
                if ((i || !/destroy|hide/.test(e)) && (i || (i = new a(this, r), t(this).data("bs.popover", i)), "string" == typeof e)) {
                  if (void 0 === i[e]) throw new TypeError('No method named "' + e + '"');
                  i[e]()
                }
              })
            }, s(a, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return l
              }
            }, {
              key: "NAME",
              get: function () {
                return e
              }
            }, {
              key: "DATA_KEY",
              get: function () {
                return "bs.popover"
              }
            }, {
              key: "Event",
              get: function () {
                return d
              }
            }, {
              key: "EVENT_KEY",
              get: function () {
                return i
              }
            }, {
              key: "DefaultType",
              get: function () {
                return h
              }
            }]), a
          }(m);
        return t.fn[e] = u._jQueryInterface, t.fn[e].Constructor = u, t.fn[e].noConflict = function () {
          return t.fn[e] = r, u._jQueryInterface
        }, u
      }(e),
      v = function (t) {
        var e = "scrollspy",
          i = t.fn[e],
          r = {
            offset: 10,
            method: "auto",
            target: ""
          },
          n = {
            offset: "number",
            method: "string",
            target: "(string|element)"
          },
          o = {
            ACTIVATE: "activate.bs.scrollspy",
            SCROLL: "scroll.bs.scrollspy",
            LOAD_DATA_API: "load.bs.scrollspy.data-api"
          },
          h = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
          },
          p = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
          },
          c = {
            OFFSET: "offset",
            POSITION: "position"
          },
          d = function () {
            function i(e, i) {
              var r = this;
              this._element = e, this._scrollElement = "BODY" === e.tagName ? window : e, this._config = this._getConfig(i), this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.LIST_ITEMS + "," + this._config.target + " " + p.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, t(this._scrollElement).on(o.SCROLL, function (t) {
                return r._process(t)
              }), this.refresh(), this._process()
            }
            var d = i.prototype;
            return d.refresh = function () {
              var e = this,
                i = this._scrollElement === this._scrollElement.window ? c.OFFSET : c.POSITION,
                r = "auto" === this._config.method ? i : this._config.method,
                s = r === c.POSITION ? this._getScrollTop() : 0;
              this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), t.makeArray(t(this._selector)).map(function (e) {
                var i, n = l.getSelectorFromElement(e);
                if (n && (i = t(n)[0]), i) {
                  var a = i.getBoundingClientRect();
                  if (a.width || a.height) return [t(i)[r]().top + s, n]
                }
                return null
              }).filter(function (t) {
                return t
              }).sort(function (t, e) {
                return t[0] - e[0]
              }).forEach(function (t) {
                e._offsets.push(t[0]), e._targets.push(t[1])
              })
            }, d.dispose = function () {
              t.removeData(this._element, "bs.scrollspy"), t(this._scrollElement).off(".bs.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, d._getConfig = function (i) {
              if (i = a({}, r, i), "string" != typeof i.target) {
                var s = t(i.target).attr("id");
                s || (s = l.getUID(e), t(i.target).attr("id", s)), i.target = "#" + s
              }
              return l.typeCheckConfig(e, i, n), i
            }, d._getScrollTop = function () {
              return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, d._getScrollHeight = function () {
              return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, d._getOffsetHeight = function () {
              return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, d._process = function () {
              var t = this,
                e = this._getScrollTop() + this._config.offset,
                i = this._getScrollHeight(),
                r = this._config.offset + i - this._getOffsetHeight();
              if (this._scrollHeight !== i && this.refresh(), e >= r) {
                var s = this._targets[this._targets.length - 1];
                return void(this._activeTarget !== s && this._activate(s))
              }
              if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
              for (var n = this._offsets.length; n--;) {
                t._activeTarget !== t._targets[n] && e >= t._offsets[n] && (void 0 === t._offsets[n + 1] || e < t._offsets[n + 1]) && t._activate(t._targets[n])
              }
            }, d._activate = function (e) {
              this._activeTarget = e, this._clear();
              var i = this._selector.split(",");
              i = i.map(function (t) {
                return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
              });
              var r = t(i.join(","));
              r.hasClass(h.DROPDOWN_ITEM) ? (r.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(h.ACTIVE), r.addClass(h.ACTIVE)) : (r.addClass(h.ACTIVE), r.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS + ", " + p.LIST_ITEMS).addClass(h.ACTIVE), r.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(h.ACTIVE)), t(this._scrollElement).trigger(o.ACTIVATE, {
                relatedTarget: e
              })
            }, d._clear = function () {
              t(this._selector).filter(p.ACTIVE).removeClass(h.ACTIVE)
            }, i._jQueryInterface = function (e) {
              return this.each(function () {
                var r = t(this).data("bs.scrollspy"),
                  s = "object" == typeof e && e;
                if (r || (r = new i(this, s), t(this).data("bs.scrollspy", r)), "string" == typeof e) {
                  if (void 0 === r[e]) throw new TypeError('No method named "' + e + '"');
                  r[e]()
                }
              })
            }, s(i, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }, {
              key: "Default",
              get: function () {
                return r
              }
            }]), i
          }();
        return t(window).on(o.LOAD_DATA_API, function () {
          for (var e = t.makeArray(t(p.DATA_SPY)), i = e.length; i--;) {
            var r = t(e[i]);
            d._jQueryInterface.call(r, r.data())
          }
        }), t.fn[e] = d._jQueryInterface, t.fn[e].Constructor = d, t.fn[e].noConflict = function () {
          return t.fn[e] = i, d._jQueryInterface
        }, d
      }(e),
      y = function (t) {
        var e = t.fn.tab,
          i = {
            HIDE: "hide.bs.tab",
            HIDDEN: "hidden.bs.tab",
            SHOW: "show.bs.tab",
            SHOWN: "shown.bs.tab",
            CLICK_DATA_API: "click.bs.tab.data-api"
          },
          r = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
          },
          n = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
          },
          a = function () {
            function e(t) {
              this._element = t
            }
            var a = e.prototype;
            return a.show = function () {
              var e = this;
              if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && t(this._element).hasClass(r.ACTIVE) || t(this._element).hasClass(r.DISABLED))) {
                var s, a, o = t(this._element).closest(n.NAV_LIST_GROUP)[0],
                  h = l.getSelectorFromElement(this._element);
                if (o) {
                  var p = "UL" === o.nodeName ? n.ACTIVE_UL : n.ACTIVE;
                  a = t.makeArray(t(o).find(p)), a = a[a.length - 1]
                }
                var c = t.Event(i.HIDE, {
                    relatedTarget: this._element
                  }),
                  d = t.Event(i.SHOW, {
                    relatedTarget: a
                  });
                if (a && t(a).trigger(c), t(this._element).trigger(d), !d.isDefaultPrevented() && !c.isDefaultPrevented()) {
                  h && (s = t(h)[0]), this._activate(this._element, o);
                  var u = function () {
                    var r = t.Event(i.HIDDEN, {
                        relatedTarget: e._element
                      }),
                      s = t.Event(i.SHOWN, {
                        relatedTarget: a
                      });
                    t(a).trigger(r), t(e._element).trigger(s)
                  };
                  s ? this._activate(s, s.parentNode, u) : u()
                }
              }
            }, a.dispose = function () {
              t.removeData(this._element, "bs.tab"), this._element = null
            }, a._activate = function (e, i, s) {
              var a, o = this;
              a = "UL" === i.nodeName ? t(i).find(n.ACTIVE_UL) : t(i).children(n.ACTIVE);
              var h = a[0],
                p = s && h && t(h).hasClass(r.FADE),
                c = function () {
                  return o._transitionComplete(e, h, s)
                };
              if (h && p) {
                var d = l.getTransitionDurationFromElement(h);
                t(h).one(l.TRANSITION_END, c).emulateTransitionEnd(d)
              } else c()
            }, a._transitionComplete = function (e, i, s) {
              if (i) {
                t(i).removeClass(r.SHOW + " " + r.ACTIVE);
                var a = t(i.parentNode).find(n.DROPDOWN_ACTIVE_CHILD)[0];
                a && t(a).removeClass(r.ACTIVE), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
              }
              if (t(e).addClass(r.ACTIVE), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), l.reflow(e), t(e).addClass(r.SHOW), e.parentNode && t(e.parentNode).hasClass(r.DROPDOWN_MENU)) {
                var o = t(e).closest(n.DROPDOWN)[0];
                o && t(o).find(n.DROPDOWN_TOGGLE).addClass(r.ACTIVE), e.setAttribute("aria-expanded", !0)
              }
              s && s()
            }, e._jQueryInterface = function (i) {
              return this.each(function () {
                var r = t(this),
                  s = r.data("bs.tab");
                if (s || (s = new e(this), r.data("bs.tab", s)), "string" == typeof i) {
                  if (void 0 === s[i]) throw new TypeError('No method named "' + i + '"');
                  s[i]()
                }
              })
            }, s(e, null, [{
              key: "VERSION",
              get: function () {
                return "4.1.0"
              }
            }]), e
          }();
        return t(document).on(i.CLICK_DATA_API, n.DATA_TOGGLE, function (e) {
          e.preventDefault(), a._jQueryInterface.call(t(this), "show")
        }), t.fn.tab = a._jQueryInterface, t.fn.tab.Constructor = a, t.fn.tab.noConflict = function () {
          return t.fn.tab = e, a._jQueryInterface
        }, a
      }(e);
    ! function (t) {
      if (void 0 === t) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
      var e = t.fn.jquery.split(" ")[0].split(".");
      if (e[0] < 2 && e[1] < 9 || 1 === e[0] && 9 === e[1] && e[2] < 1 || e[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(e), t.Util = l, t.Alert = h, t.Button = p, t.Carousel = c, t.Collapse = d, t.Dropdown = u, t.Modal = f, t.Popover = g, t.Scrollspy = v, t.Tab = y, t.Tooltip = m, Object.defineProperty(t, "__esModule", {
      value: !0
    })
  })
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
      value: !0
    }),
    function (t) {
      function i(t) {
        var e = !1,
          i = 0,
          r = document.createElement("span");
        return new MutationObserver(function () {
            t(), e = !1
          }).observe(r, {
            attributes: !0
          }),
          function () {
            e || (e = !0, r.setAttribute("x-index", i), i += 1)
          }
      }

      function r(t) {
        var e = !1;
        return function () {
          e || (e = !0, setTimeout(function () {
            e = !1, t()
          }, ht))
        }
      }

      function s(t) {
        var e = {};
        return t && "[object Function]" === e.toString.call(t)
      }

      function n(t, e) {
        if (1 !== t.nodeType) return [];
        var i = window.getComputedStyle(t, null);
        return e ? i[e] : i
      }

      function a(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
      }

      function o(t) {
        if (!t || -1 !== ["HTML", "BODY", "#document"].indexOf(t.nodeName)) return window.document.body;
        var e = n(t),
          i = e.overflow,
          r = e.overflowX;
        return /(auto|scroll)/.test(i + e.overflowY + r) ? t : o(a(t))
      }

      function l(t) {
        var e = t && t.offsetParent,
          i = e && e.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TD", "TABLE"].indexOf(e.nodeName) && "static" === n(e, "position") ? l(e) : e : window.document.documentElement
      }

      function h(t) {
        var e = t.nodeName;
        return "BODY" !== e && ("HTML" === e || l(t.firstElementChild) === t)
      }

      function p(t) {
        return null !== t.parentNode ? p(t.parentNode) : t
      }

      function c(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return window.document.documentElement;
        var i = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
          r = i ? t : e,
          s = i ? e : t,
          n = document.createRange();
        n.setStart(r, 0), n.setEnd(s, 0);
        var a = n.commonAncestorContainer;
        if (t !== a && e !== a || r.contains(s)) return h(a) ? a : l(a);
        var o = p(t);
        return o.host ? c(o.host, e) : c(t, p(e).host)
      }

      function d(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
          i = "top" === e ? "scrollTop" : "scrollLeft",
          r = t.nodeName;
        if ("BODY" === r || "HTML" === r) {
          var s = window.document.documentElement;
          return (window.document.scrollingElement || s)[i]
        }
        return t[i]
      }

      function u(t, e) {
        var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          r = d(e, "top"),
          s = d(e, "left"),
          n = i ? -1 : 1;
        return t.top += r * n, t.bottom += r * n, t.left += s * n, t.right += s * n, t
      }

      function f(t, e) {
        var i = "x" === e ? "Left" : "Top",
          r = "Left" === i ? "Right" : "Bottom";
        return +t["border" + i + "Width"].split("px")[0] + +t["border" + r + "Width"].split("px")[0]
      }

      function m(t, e, i, r) {
        return Math.max(e["offset" + t], i["client" + t], i["offset" + t], ft() ? i["offset" + t] + r["margin" + ("Height" === t ? "Top" : "Left")] + r["margin" + ("Height" === t ? "Bottom" : "Right")] : 0)
      }

      function g() {
        var t = window.document.body,
          e = window.document.documentElement,
          i = ft() && window.getComputedStyle(e);
        return {
          height: m("Height", t, e, i),
          width: m("Width", t, e, i)
        }
      }

      function v(t) {
        return yt({}, t, {
          right: t.left + t.width,
          bottom: t.top + t.height
        })
      }

      function y(t) {
        var e = {};
        if (ft()) try {
          e = t.getBoundingClientRect();
          var i = d(t, "top"),
            r = d(t, "left");
          e.top += i, e.left += r, e.bottom += i, e.right += r
        } catch (t) {} else e = t.getBoundingClientRect();
        var s = {
            left: e.left,
            top: e.top,
            width: e.right - e.left,
            height: e.bottom - e.top
          },
          a = "HTML" === t.nodeName ? g() : {},
          o = a.width || t.clientWidth || s.right - s.left,
          l = a.height || t.clientHeight || s.bottom - s.top,
          h = t.offsetWidth - o,
          p = t.offsetHeight - l;
        if (h || p) {
          var c = n(t);
          h -= f(c, "x"), p -= f(c, "y"), s.width -= h, s.height -= p
        }
        return v(s)
      }

      function _(t, e) {
        var i = ft(),
          r = "HTML" === e.nodeName,
          s = y(t),
          a = y(e),
          l = o(t),
          h = n(e),
          p = +h.borderTopWidth.split("px")[0],
          c = +h.borderLeftWidth.split("px")[0],
          d = v({
            top: s.top - a.top - p,
            left: s.left - a.left - c,
            width: s.width,
            height: s.height
          });
        if (d.marginTop = 0, d.marginLeft = 0, !i && r) {
          var f = +h.marginTop.split("px")[0],
            m = +h.marginLeft.split("px")[0];
          d.top -= p - f, d.bottom -= p - f, d.left -= c - m, d.right -= c - m, d.marginTop = f, d.marginLeft = m
        }
        return (i ? e.contains(l) : e === l && "BODY" !== l.nodeName) && (d = u(d, e)), d
      }

      function b(t) {
        var e = window.document.documentElement,
          i = _(t, e),
          r = Math.max(e.clientWidth, window.innerWidth || 0),
          s = Math.max(e.clientHeight, window.innerHeight || 0),
          n = d(e),
          a = d(e, "left");
        return v({
          top: n - i.top + i.marginTop,
          left: a - i.left + i.marginLeft,
          width: r,
          height: s
        })
      }

      function T(t) {
        var e = t.nodeName;
        return "BODY" !== e && "HTML" !== e && ("fixed" === n(t, "position") || T(a(t)))
      }

      function E(t, e, i, r) {
        var s = {
            top: 0,
            left: 0
          },
          n = c(t, e);
        if ("viewport" === r) s = b(n);
        else {
          var l = void 0;
          "scrollParent" === r ? (l = o(a(t)), "BODY" === l.nodeName && (l = window.document.documentElement)) : l = "window" === r ? window.document.documentElement : r;
          var h = _(l, n);
          if ("HTML" !== l.nodeName || T(n)) s = h;
          else {
            var p = g(),
              d = p.height,
              u = p.width;
            s.top += h.top - h.marginTop, s.bottom = d + h.top, s.left += h.left - h.marginLeft, s.right = u + h.left
          }
        }
        return s.left += i, s.top += i, s.right -= i, s.bottom -= i, s
      }

      function w(t) {
        return t.width * t.height
      }

      function x(t, e, i, r, s) {
        var n = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var a = E(i, r, n, s),
          o = {
            top: {
              width: a.width,
              height: e.top - a.top
            },
            right: {
              width: a.right - e.right,
              height: a.height
            },
            bottom: {
              width: a.width,
              height: a.bottom - e.bottom
            },
            left: {
              width: e.left - a.left,
              height: a.height
            }
          },
          l = Object.keys(o).map(function (t) {
            return yt({
              key: t
            }, o[t], {
              area: w(o[t])
            })
          }).sort(function (t, e) {
            return e.area - t.area
          }),
          h = l.filter(function (t) {
            var e = t.width,
              r = t.height;
            return e >= i.clientWidth && r >= i.clientHeight
          }),
          p = h.length > 0 ? h[0].key : l[0].key,
          c = t.split("-")[1];
        return p + (c ? "-" + c : "")
      }

      function S(t, e, i) {
        return _(i, c(e, i))
      }

      function C(t) {
        var e = window.getComputedStyle(t),
          i = parseFloat(e.marginTop) + parseFloat(e.marginBottom),
          r = parseFloat(e.marginLeft) + parseFloat(e.marginRight);
        return {
          width: t.offsetWidth + r,
          height: t.offsetHeight + i
        }
      }

      function P(t) {
        var e = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function (t) {
          return e[t]
        })
      }

      function A(t, e, i) {
        i = i.split("-")[0];
        var r = C(t),
          s = {
            width: r.width,
            height: r.height
          },
          n = -1 !== ["right", "left"].indexOf(i),
          a = n ? "top" : "left",
          o = n ? "left" : "top",
          l = n ? "height" : "width",
          h = n ? "width" : "height";
        return s[a] = e[a] + e[l] / 2 - r[l] / 2, s[o] = i === o ? e[o] - r[h] : e[P(o)], s
      }

      function k(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
      }

      function D(t, e, i) {
        if (Array.prototype.findIndex) return t.findIndex(function (t) {
          return t[e] === i
        });
        var r = k(t, function (t) {
          return t[e] === i
        });
        return t.indexOf(r)
      }

      function M(t, e, i) {
        return (void 0 === i ? t : t.slice(0, D(t, "name", i))).forEach(function (t) {
          t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
          var i = t.function || t.fn;
          t.enabled && s(i) && (e.offsets.popper = v(e.offsets.popper), e.offsets.reference = v(e.offsets.reference), e = i(e, t))
        }), e
      }

      function I() {
        if (!this.state.isDestroyed) {
          var t = {
            instance: this,
            styles: {},
            attributes: {},
            flipped: !1,
            offsets: {}
          };
          t.offsets.reference = S(this.state, this.popper, this.reference), t.placement = x(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.offsets.popper = A(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = "absolute", t = M(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
        }
      }

      function O(t, e) {
        return t.some(function (t) {
          var i = t.name;
          return t.enabled && i === e
        })
      }

      function F(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], i = t.charAt(0).toUpperCase() + t.slice(1), r = 0; r < e.length - 1; r++) {
          var s = e[r],
            n = s ? "" + s + i : t;
          if (void 0 !== window.document.body.style[n]) return n
        }
        return null
      }

      function R() {
        return this.state.isDestroyed = !0, O(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[F("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
      }

      function N(t, e, i, r) {
        var s = "BODY" === t.nodeName,
          n = s ? window : t;
        n.addEventListener(e, i, {
          passive: !0
        }), s || N(o(n.parentNode), e, i, r), r.push(n)
      }

      function L(t, e, i, r) {
        i.updateBound = r, window.addEventListener("resize", i.updateBound, {
          passive: !0
        });
        var s = o(t);
        return N(s, "scroll", i.updateBound, i.scrollParents), i.scrollElement = s, i.eventsEnabled = !0, i
      }

      function V() {
        this.state.eventsEnabled || (this.state = L(this.reference, this.options, this.state, this.scheduleUpdate))
      }

      function B(t, e) {
        return window.removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function (t) {
          t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e
      }

      function z() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = B(this.reference, this.state))
      }

      function H(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
      }

      function j(t, e) {
        Object.keys(e).forEach(function (i) {
          var r = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && H(e[i]) && (r = "px"), t.style[i] = e[i] + r
        })
      }

      function G(t, e) {
        Object.keys(e).forEach(function (i) {
          !1 !== e[i] ? t.setAttribute(i, e[i]) : t.removeAttribute(i)
        })
      }

      function W(t) {
        return j(t.instance.popper, t.styles), G(t.instance.popper, t.attributes), t.offsets.arrow && j(t.arrowElement, t.offsets.arrow), t
      }

      function $(t, e, i, r, s) {
        var n = S(s, e, t),
          a = x(i.placement, n, e, t, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
        return e.setAttribute("x-placement", a), j(e, {
          position: "absolute"
        }), i
      }

      function X(t, e) {
        var i = e.x,
          r = e.y,
          s = t.offsets.popper,
          n = k(t.instance.modifiers, function (t) {
            return "applyStyle" === t.name
          }).gpuAcceleration;
        void 0 !== n && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
        var a = void 0 !== n ? n : e.gpuAcceleration,
          o = l(t.instance.popper),
          h = y(o),
          p = {
            position: s.position
          },
          c = {
            left: Math.floor(s.left),
            top: Math.floor(s.top),
            bottom: Math.floor(s.bottom),
            right: Math.floor(s.right)
          },
          d = "bottom" === i ? "top" : "bottom",
          u = "right" === r ? "left" : "right",
          f = F("transform"),
          m = void 0,
          g = void 0;
        if (g = "bottom" === d ? -h.height + c.bottom : c.top, m = "right" === u ? -h.width + c.right : c.left, a && f) p[f] = "translate3d(" + m + "px, " + g + "px, 0)", p[d] = 0, p[u] = 0, p.willChange = "transform";
        else {
          var v = "bottom" === d ? -1 : 1,
            _ = "right" === u ? -1 : 1;
          p[d] = g * v, p[u] = m * _, p.willChange = d + ", " + u
        }
        var b = {
          "x-placement": t.placement
        };
        return t.attributes = yt({}, b, t.attributes), t.styles = yt({}, p, t.styles), t
      }

      function Y(t, e, i) {
        var r = k(t, function (t) {
            return t.name === e
          }),
          s = !!r && t.some(function (t) {
            return t.name === i && t.enabled && t.order < r.order
          });
        if (!s) {
          var n = "`" + e + "`",
            a = "`" + i + "`";
          console.warn(a + " modifier is required by " + n + " modifier in order to work, be sure to include it before " + n + "!")
        }
        return s
      }

      function U(t, e) {
        if (!Y(t.instance.modifiers, "arrow", "keepTogether")) return t;
        var i = e.element;
        if ("string" == typeof i) {
          if (!(i = t.instance.popper.querySelector(i))) return t
        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
        var r = t.placement.split("-")[0],
          s = t.offsets,
          n = s.popper,
          a = s.reference,
          o = -1 !== ["left", "right"].indexOf(r),
          l = o ? "height" : "width",
          h = o ? "top" : "left",
          p = o ? "left" : "top",
          c = o ? "bottom" : "right",
          d = C(i)[l];
        a[c] - d < n[h] && (t.offsets.popper[h] -= n[h] - (a[c] - d)), a[h] + d > n[c] && (t.offsets.popper[h] += a[h] + d - n[c]);
        var u = a[h] + a[l] / 2 - d / 2,
          f = u - v(t.offsets.popper)[h];
        return f = Math.max(Math.min(n[l] - d, f), 0), t.arrowElement = i, t.offsets.arrow = {}, t.offsets.arrow[h] = Math.round(f), t.offsets.arrow[p] = "", t
      }

      function q(t) {
        return "end" === t ? "start" : "start" === t ? "end" : t
      }

      function K(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = bt.indexOf(t),
          r = bt.slice(i + 1).concat(bt.slice(0, i));
        return e ? r.reverse() : r
      }

      function Q(t, e) {
        if (O(t.instance.modifiers, "inner")) return t;
        if (t.flipped && t.placement === t.originalPlacement) return t;
        var i = E(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement),
          r = t.placement.split("-")[0],
          s = P(r),
          n = t.placement.split("-")[1] || "",
          a = [];
        switch (e.behavior) {
          case Tt.FLIP:
            a = [r, s];
            break;
          case Tt.CLOCKWISE:
            a = K(r);
            break;
          case Tt.COUNTERCLOCKWISE:
            a = K(r, !0);
            break;
          default:
            a = e.behavior
        }
        return a.forEach(function (o, l) {
          if (r !== o || a.length === l + 1) return t;
          r = t.placement.split("-")[0], s = P(r);
          var h = t.offsets.popper,
            p = t.offsets.reference,
            c = Math.floor,
            d = "left" === r && c(h.right) > c(p.left) || "right" === r && c(h.left) < c(p.right) || "top" === r && c(h.bottom) > c(p.top) || "bottom" === r && c(h.top) < c(p.bottom),
            u = c(h.left) < c(i.left),
            f = c(h.right) > c(i.right),
            m = c(h.top) < c(i.top),
            g = c(h.bottom) > c(i.bottom),
            v = "left" === r && u || "right" === r && f || "top" === r && m || "bottom" === r && g,
            y = -1 !== ["top", "bottom"].indexOf(r),
            _ = !!e.flipVariations && (y && "start" === n && u || y && "end" === n && f || !y && "start" === n && m || !y && "end" === n && g);
          (d || v || _) && (t.flipped = !0, (d || v) && (r = a[l + 1]), _ && (n = q(n)), t.placement = r + (n ? "-" + n : ""), t.offsets.popper = yt({}, t.offsets.popper, A(t.instance.popper, t.offsets.reference, t.placement)), t = M(t.instance.modifiers, t, "flip"))
        }), t
      }

      function Z(t) {
        var e = t.offsets,
          i = e.popper,
          r = e.reference,
          s = t.placement.split("-")[0],
          n = Math.floor,
          a = -1 !== ["top", "bottom"].indexOf(s),
          o = a ? "right" : "bottom",
          l = a ? "left" : "top",
          h = a ? "width" : "height";
        return i[o] < n(r[l]) && (t.offsets.popper[l] = n(r[l]) - i[h]), i[l] > n(r[o]) && (t.offsets.popper[l] = n(r[o])), t
      }

      function J(t, e, i, r) {
        var s = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
          n = +s[1],
          a = s[2];
        if (!n) return t;
        if (0 === a.indexOf("%")) {
          var o = void 0;
          switch (a) {
            case "%p":
              o = i;
              break;
            case "%":
            case "%r":
            default:
              o = r
          }
          return v(o)[e] / 100 * n
        }
        if ("vh" === a || "vw" === a) {
          return ("vh" === a ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * n
        }
        return n
      }

      function tt(t, e, i, r) {
        var s = [0, 0],
          n = -1 !== ["right", "left"].indexOf(r),
          a = t.split(/(\+|\-)/).map(function (t) {
            return t.trim()
          }),
          o = a.indexOf(k(a, function (t) {
            return -1 !== t.search(/,|\s/)
          }));
        a[o] && -1 === a[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
          h = -1 !== o ? [a.slice(0, o).concat([a[o].split(l)[0]]), [a[o].split(l)[1]].concat(a.slice(o + 1))] : [a];
        return h = h.map(function (t, r) {
          var s = (1 === r ? !n : n) ? "height" : "width",
            a = !1;
          return t.reduce(function (t, e) {
            return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, a = !0, t) : a ? (t[t.length - 1] += e, a = !1, t) : t.concat(e)
          }, []).map(function (t) {
            return J(t, s, e, i)
          })
        }), h.forEach(function (t, e) {
          t.forEach(function (i, r) {
            H(i) && (s[e] += i * ("-" === t[r - 1] ? -1 : 1))
          })
        }), s
      }

      function et(t, e) {
        var i = e.offset,
          r = t.placement,
          s = t.offsets,
          n = s.popper,
          a = s.reference,
          o = r.split("-")[0],
          l = void 0;
        return l = H(+i) ? [+i, 0] : tt(i, n, a, o), "left" === o ? (n.top += l[0], n.left -= l[1]) : "right" === o ? (n.top += l[0], n.left += l[1]) : "top" === o ? (n.left += l[0], n.top -= l[1]) : "bottom" === o && (n.left += l[0], n.top += l[1]), t.popper = n, t
      }

      function it(t, e) {
        var i = e.boundariesElement || l(t.instance.popper);
        t.instance.reference === i && (i = l(i));
        var r = E(t.instance.popper, t.instance.reference, e.padding, i);
        e.boundaries = r;
        var s = e.priority,
          n = t.offsets.popper,
          a = {
            primary: function (t) {
              var i = n[t];
              return n[t] < r[t] && !e.escapeWithReference && (i = Math.max(n[t], r[t])), vt({}, t, i)
            },
            secondary: function (t) {
              var i = "right" === t ? "left" : "top",
                s = n[i];
              return n[t] > r[t] && !e.escapeWithReference && (s = Math.min(n[i], r[t] - ("right" === t ? n.width : n.height))), vt({}, i, s)
            }
          };
        return s.forEach(function (t) {
          var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
          n = yt({}, n, a[e](t))
        }), t.offsets.popper = n, t
      }

      function rt(t) {
        var e = t.placement,
          i = e.split("-")[0],
          r = e.split("-")[1];
        if (r) {
          var s = t.offsets,
            n = s.reference,
            a = s.popper,
            o = -1 !== ["bottom", "top"].indexOf(i),
            l = o ? "left" : "top",
            h = o ? "width" : "height",
            p = {
              start: vt({}, l, n[l]),
              end: vt({}, l, n[l] + n[h] - a[h])
            };
          t.offsets.popper = yt({}, a, p[r])
        }
        return t
      }

      function st(t) {
        if (!Y(t.instance.modifiers, "hide", "preventOverflow")) return t;
        var e = t.offsets.reference,
          i = k(t.instance.modifiers, function (t) {
            return "preventOverflow" === t.name
          }).boundaries;
        if (e.bottom < i.top || e.left > i.right || e.top > i.bottom || e.right < i.left) {
          if (!0 === t.hide) return t;
          t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
        } else {
          if (!1 === t.hide) return t;
          t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
        }
        return t
      }

      function nt(t) {
        var e = t.placement,
          i = e.split("-")[0],
          r = t.offsets,
          s = r.popper,
          n = r.reference,
          a = -1 !== ["left", "right"].indexOf(i),
          o = -1 === ["top", "left"].indexOf(i);
        return s[a ? "left" : "top"] = n[e] - (o ? s[a ? "width" : "height"] : 0), t.placement = P(e), t.offsets.popper = v(s), t
      }
      for (var at = ["native code", "[object MutationObserverConstructor]"], ot = "undefined" != typeof window, lt = ["Edge", "Trident", "Firefox"], ht = 0, pt = 0; pt < lt.length; pt += 1)
        if (ot && navigator.userAgent.indexOf(lt[pt]) >= 0) {
          ht = 1;
          break
        } var ct = ot && function (t) {
          return at.some(function (e) {
            return (t || "").toString().indexOf(e) > -1
          })
        }(window.MutationObserver),
        dt = ct ? i : r,
        ut = void 0,
        ft = function () {
          return void 0 === ut && (ut = -1 !== navigator.appVersion.indexOf("MSIE 10")), ut
        },
        mt = function (t, e) {
          if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        gt = function () {
          function t(t, e) {
            for (var i = 0; i < e.length; i++) {
              var r = e[i];
              r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
            }
          }
          return function (e, i, r) {
            return i && t(e.prototype, i), r && t(e, r), e
          }
        }(),
        vt = function (t, e, i) {
          return e in t ? Object.defineProperty(t, e, {
            value: i,
            enumerable: !0,
            configurable: !0,
            writable: !0
          }) : t[e] = i, t
        },
        yt = Object.assign || function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (t[r] = i[r])
          }
          return t
        },
        _t = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        bt = _t.slice(3),
        Tt = {
          FLIP: "flip",
          CLOCKWISE: "clockwise",
          COUNTERCLOCKWISE: "counterclockwise"
        },
        Et = {
          shift: {
            order: 100,
            enabled: !0,
            fn: rt
          },
          offset: {
            order: 200,
            enabled: !0,
            fn: et,
            offset: 0
          },
          preventOverflow: {
            order: 300,
            enabled: !0,
            fn: it,
            priority: ["left", "right", "top", "bottom"],
            padding: 5,
            boundariesElement: "scrollParent"
          },
          keepTogether: {
            order: 400,
            enabled: !0,
            fn: Z
          },
          arrow: {
            order: 500,
            enabled: !0,
            fn: U,
            element: "[x-arrow]"
          },
          flip: {
            order: 600,
            enabled: !0,
            fn: Q,
            behavior: "flip",
            padding: 5,
            boundariesElement: "viewport"
          },
          inner: {
            order: 700,
            enabled: !1,
            fn: nt
          },
          hide: {
            order: 800,
            enabled: !0,
            fn: st
          },
          computeStyle: {
            order: 850,
            enabled: !0,
            fn: X,
            gpuAcceleration: !0,
            x: "bottom",
            y: "right"
          },
          applyStyle: {
            order: 900,
            enabled: !0,
            fn: W,
            onLoad: $,
            gpuAcceleration: void 0
          }
        },
        wt = {
          placement: "bottom",
          eventsEnabled: !0,
          removeOnDestroy: !1,
          onCreate: function () {},
          onUpdate: function () {},
          modifiers: Et
        },
        xt = function () {
          function t(e, i) {
            var r = this,
              n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            mt(this, t), this.scheduleUpdate = function () {
              return requestAnimationFrame(r.update)
            }, this.update = dt(this.update.bind(this)), this.options = yt({}, t.Defaults, n), this.state = {
              isDestroyed: !1,
              isCreated: !1,
              scrollParents: []
            }, this.reference = e.jquery ? e[0] : e, this.popper = i.jquery ? i[0] : i, this.options.modifiers = {}, Object.keys(yt({}, t.Defaults.modifiers, n.modifiers)).forEach(function (e) {
              r.options.modifiers[e] = yt({}, t.Defaults.modifiers[e] || {}, n.modifiers ? n.modifiers[e] : {})
            }), this.modifiers = Object.keys(this.options.modifiers).map(function (t) {
              return yt({
                name: t
              }, r.options.modifiers[t])
            }).sort(function (t, e) {
              return t.order - e.order
            }), this.modifiers.forEach(function (t) {
              t.enabled && s(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
            }), this.update();
            var a = this.options.eventsEnabled;
            a && this.enableEventListeners(), this.state.eventsEnabled = a
          }
          return gt(t, [{
            key: "update",
            value: function () {
              return I.call(this)
            }
          }, {
            key: "destroy",
            value: function () {
              return R.call(this)
            }
          }, {
            key: "enableEventListeners",
            value: function () {
              return V.call(this)
            }
          }, {
            key: "disableEventListeners",
            value: function () {
              return z.call(this)
            }
          }]), t
        }();
      xt.Utils = ("undefined" != typeof window ? window : t).PopperUtils, xt.placements = _t, xt.Defaults = wt, e.default = xt
    }.call(e, i(1))
}, function (t, e, i) {
  "use strict";
  var r = i(14),
    s = function (t) {
      this.routes = t
    };
  s.prototype.fire = function (t, e, i) {
    void 0 === e && (e = "init"), "" !== t && this.routes[t] && "function" == typeof this.routes[t][e] && this.routes[t][e](i)
  }, s.prototype.loadEvents = function () {
    var t = this;
    this.fire("common"), document.body.className.toLowerCase().replace(/-/g, "_").split(/\s+/).map(r.a).forEach(function (e) {
      t.fire(e), t.fire(e, "finalize")
    }), this.fire("common", "finalize")
  }, e.a = s
}, function (t, e, i) {
  "use strict";
  e.a = function (t) {
    return "" + t.charAt(0).toLowerCase() + t.replace(/[\W_]/g, "|").split("|").map(function (t) {
      return "" + t.charAt(0).toUpperCase() + t.slice(1)
    }).join("").slice(1)
  }
}, function (t, e, i) {
  "use strict";
  (function (t) {
    var r = i(3),
      s = i.n(r),
      n = i(16),
      a = i.n(n);
    e.a = {
      init: function () {
        function e() {
          t(window).scrollTop() > h ? t(".navbar").hasClass("transparent") && (t(".navbar").removeClass("transparent"), n.destroy(), n = i(c), n.play()) : t(".navbar").hasClass("transparent") || (t(".navbar").addClass("transparent"), n.destroy(), n = i(d), n.play())
        }

        function i(t) {
          return s.a.loadAnimation({
            container: p,
            path: t,
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            name: "Small Logo",
            rendererSettings: {
              progressiveLoad: !0
            }
          })
        }

        function r() {
          var e = t(window).scrollTop() + u - f;
          t(".scroll-reveal:not(.scroll-reveal-show)").each(function () {
            if (t(this).offset().top < e) {
              t(this).addClass("scroll-reveal-show");
              var i = t(this);
              setTimeout(function () {
                i.addClass("display-none")
              }, 1e3)
            }
          })
        }
        t("body").addClass("loaded"), "ontouchstart" in document.documentElement ? t("body").addClass("touch") : t("body").addClass("no-touch"), t("#mobile-nav-toggle").click(function () {
          t("#mobile-overlay").removeClass("display-none"), setTimeout(function () {
            t("#mobile-overlay").removeClass("hide")
          }, 100)
        }), t("#mobile-overlay-close").click(function () {
          t("#mobile-overlay").addClass("hide"), setTimeout(function () {
            t("#mobile-overlay").addClass("display-none")
          }, 300)
        });
        var n, o = t("#navbar"),
          l = o.hasClass("transparent"),
          h = 80,
          p = document.getElementById("navbar-brand"),
          c = "",
          d = "";
        l ? (t(window).on("scroll", a()(function () {
          e()
        })), n = i(d)) : n = i(c), setTimeout(function () {
          n.play()
        }, 200), p.addEventListener("mouseover", function () {
          n.isPaused && n.goToAndPlay(0)
        });
        var u = t(window).height(),
          f = 50;
        t(window).bind("resizeEnd", function () {
          u = t(window).height()
        }), t(window).on("scroll", a()(function () {
          r()
        })), setTimeout(function () {
          r()
        }, 500)
      },
      finalize: function () {}
    }
  }).call(e, i(0))
}, function (t, e, i) {
  function r(t, e, i) {
    var r = !0,
      o = !0;
    if ("function" != typeof t) throw new TypeError(a);
    return n(i) && (r = "leading" in i ? !!i.leading : r, o = "trailing" in i ? !!i.trailing : o), s(t, e, {
      leading: r,
      maxWait: e,
      trailing: o
    })
  }
  var s = i(17),
    n = i(2),
    a = "Expected a function";
  t.exports = r
}, function (t, e, i) {
  function r(t, e, i) {
    function r(e) {
      var i = y,
        r = _;
      return y = _ = void 0, x = e, T = t.apply(r, i)
    }

    function p(t) {
      return x = t, E = setTimeout(u, e), S ? r(t) : T
    }

    function c(t) {
      var i = t - w,
        r = t - x,
        s = e - i;
      return C ? h(s, b - r) : s
    }

    function d(t) {
      var i = t - w,
        r = t - x;
      return void 0 === w || i >= e || i < 0 || C && r >= b
    }

    function u() {
      var t = n();
      if (d(t)) return f(t);
      E = setTimeout(u, c(t))
    }

    function f(t) {
      return E = void 0, P && y ? r(t) : (y = _ = void 0, T)
    }

    function m() {
      void 0 !== E && clearTimeout(E), x = 0, y = w = _ = E = void 0
    }

    function g() {
      return void 0 === E ? T : f(n())
    }

    function v() {
      var t = n(),
        i = d(t);
      if (y = arguments, _ = this, w = t, i) {
        if (void 0 === E) return p(w);
        if (C) return E = setTimeout(u, e), r(w)
      }
      return void 0 === E && (E = setTimeout(u, e)), T
    }
    var y, _, b, T, E, w, x = 0,
      S = !1,
      C = !1,
      P = !0;
    if ("function" != typeof t) throw new TypeError(o);
    return e = a(e) || 0, s(i) && (S = !!i.leading, C = "maxWait" in i, b = C ? l(a(i.maxWait) || 0, e) : b, P = "trailing" in i ? !!i.trailing : P), v.cancel = m, v.flush = g, v
  }
  var s = i(2),
    n = i(18),
    a = i(20),
    o = "Expected a function",
    l = Math.max,
    h = Math.min;
  t.exports = r
}, function (t, e, i) {
  var r = i(4),
    s = function () {
      return r.Date.now()
    };
  t.exports = s
}, function (t, e, i) {
  (function (e) {
    var i = "object" == typeof e && e && e.Object === Object && e;
    t.exports = i
  }).call(e, i(1))
}, function (t, e, i) {
  function r(t) {
    if ("number" == typeof t) return t;
    if (n(t)) return a;
    if (s(t)) {
      var e = "function" == typeof t.valueOf ? t.valueOf() : t;
      t = s(e) ? e + "" : e
    }
    if ("string" != typeof t) return 0 === t ? t : +t;
    t = t.replace(o, "");
    var i = h.test(t);
    return i || p.test(t) ? c(t.slice(2), i ? 2 : 8) : l.test(t) ? a : +t
  }
  var s = i(2),
    n = i(21),
    a = NaN,
    o = /^\s+|\s+$/g,
    l = /^[-+]0x[0-9a-f]+$/i,
    h = /^0b[01]+$/i,
    p = /^0o[0-7]+$/i,
    c = parseInt;
  t.exports = r
}, function (t, e, i) {
  function r(t) {
    return "symbol" == typeof t || n(t) && s(t) == a
  }
  var s = i(22),
    n = i(25),
    a = "[object Symbol]";
  t.exports = r
}, function (t, e, i) {
  function r(t) {
    return null == t ? void 0 === t ? l : o : h && h in Object(t) ? n(t) : a(t)
  }
  var s = i(5),
    n = i(23),
    a = i(24),
    o = "[object Null]",
    l = "[object Undefined]",
    h = s ? s.toStringTag : void 0;
  t.exports = r
}, function (t, e, i) {
  function r(t) {
    var e = a.call(t, l),
      i = t[l];
    try {
      t[l] = void 0;
      var r = !0
    } catch (t) {}
    var s = o.call(t);
    return r && (e ? t[l] = i : delete t[l]), s
  }
  var s = i(5),
    n = Object.prototype,
    a = n.hasOwnProperty,
    o = n.toString,
    l = s ? s.toStringTag : void 0;
  t.exports = r
}, function (t, e) {
  function i(t) {
    return s.call(t)
  }
  var r = Object.prototype,
    s = r.toString;
  t.exports = i
}, function (t, e) {
  function i(t) {
    return null != t && "object" == typeof t
  }
  t.exports = i
}, function (t, e, i) {
  "use strict";
  (function (t) {
    var r = i(6),
      s = i(3),
      n = i.n(s),
      a = i(30),
      o = (i.n(a), i(31)),
      l = (i.n(o), i(32)),
      h = i.n(l);
    e.a = {
      init: function () {
        t(document).ready(function () {
          var e = t(".hero-iframe"),
            i = t(".hero-cover"),
            s = t(".hero-large");
          if (t(window).outerWidth() || h.a.iOS()) {
            e.attr({
              src: e.attr("data-src")
            }).removeAttr("data-src");
            new r.a(e).setCurrentTime(0)
          } else s.css("height", window.outerHeight), i.css("background-image", "url(" + i.attr("data-src") + ")").removeAttr("data-src");
          var o = n.a.loadAnimation({
            container: document.getElementById("logo-animation"),
            path: "",
            renderer: "svg",
            loop: !1,
            autoplay: !1,
            name: "Main Logo"
          });
          setTimeout(function () {
            o.play()
          }, 1500);
          var l = document.getElementById("navbar"),
            p = document.getElementsByClassName("header")[0],
            c = p.offsetHeight;
          window.onscroll = function () {
            c = p.offsetHeight, window.pageYOffset >= c ? (l.classList.add("sticky"), o.play()) : l.classList.remove("sticky")
          }, window.matchMedia("(min-width: 992px)").matches && (t(".videoPresent").each(function () {
            var e = t(this).find("source");
            e.attr("src", e.data("src")).removeAttr("data-src"), t(this).load()
          }), t(".work-card").hover(function () {
            t("video", this).get(0).play()
          }, function () {
            t("video", this).get(0).pause()
          }));
          var d = t(".arrow"),
            u = t(".work-link");
          t(u).add(d).click(function (t) {
            a.TweenLite.to(window, .7, {
              scrollTo: {
                y: "#navbar",
                ease: a.Power2.easeInOut
              }
            }), t.preventDefault()
          }), t(".arrow img").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
            t(this).parent().removeClass("arrow-animate")
          }), t(d).on("mouseenter", function () {
            t(this).addClass("arrow-animate")
          })
        })
      },
      finalize: function () {}
    }
  }).call(e, i(0))
}, function (t, e, i) {
  (function (t) {
    function r(t, e) {
      this._id = t, this._clearFn = e
    }
    var s = void 0 !== t && t || "undefined" != typeof self && self || window,
      n = Function.prototype.apply;
    e.setTimeout = function () {
      return new r(n.call(setTimeout, s, arguments), clearTimeout)
    }, e.setInterval = function () {
      return new r(n.call(setInterval, s, arguments), clearInterval)
    }, e.clearTimeout = e.clearInterval = function (t) {
      t && t.close()
    }, r.prototype.unref = r.prototype.ref = function () {}, r.prototype.close = function () {
      this._clearFn.call(s, this._id)
    }, e.enroll = function (t, e) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = e
    }, e.unenroll = function (t) {
      clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
    }, e._unrefActive = e.active = function (t) {
      clearTimeout(t._idleTimeoutId);
      var e = t._idleTimeout;
      e >= 0 && (t._idleTimeoutId = setTimeout(function () {
        t._onTimeout && t._onTimeout()
      }, e))
    }, i(28), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t && t.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t && t.clearImmediate || this && this.clearImmediate
  }).call(e, i(1))
}, function (t, e, i) {
  (function (t, e) {
    ! function (t, i) {
      "use strict";

      function r(t) {
        "function" != typeof t && (t = new Function("" + t));
        for (var e = new Array(arguments.length - 1), i = 0; i < e.length; i++) e[i] = arguments[i + 1];
        var r = {
          callback: t,
          args: e
        };
        return h[l] = r, o(l), l++
      }

      function s(t) {
        delete h[t]
      }

      function n(t) {
        var e = t.callback,
          r = t.args;
        switch (r.length) {
          case 0:
            e();
            break;
          case 1:
            e(r[0]);
            break;
          case 2:
            e(r[0], r[1]);
            break;
          case 3:
            e(r[0], r[1], r[2]);
            break;
          default:
            e.apply(i, r)
        }
      }

      function a(t) {
        if (p) setTimeout(a, 0, t);
        else {
          var e = h[t];
          if (e) {
            p = !0;
            try {
              n(e)
            } finally {
              s(t), p = !1
            }
          }
        }
      }
      if (!t.setImmediate) {
        var o, l = 1,
          h = {},
          p = !1,
          c = t.document,
          d = Object.getPrototypeOf && Object.getPrototypeOf(t);
        d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
          o = function (t) {
            e.nextTick(function () {
              a(t)
            })
          }
        }() : function () {
          if (t.postMessage && !t.importScripts) {
            var e = !0,
              i = t.onmessage;
            return t.onmessage = function () {
              e = !1
            }, t.postMessage("", "*"), t.onmessage = i, e
          }
        }() ? function () {
          var e = "setImmediate$" + Math.random() + "$",
            i = function (i) {
              i.source === t && "string" == typeof i.data && 0 === i.data.indexOf(e) && a(+i.data.slice(e.length))
            };
          t.addEventListener ? t.addEventListener("message", i, !1) : t.attachEvent("onmessage", i), o = function (i) {
            t.postMessage(e + i, "*")
          }
        }() : t.MessageChannel ? function () {
          var t = new MessageChannel;
          t.port1.onmessage = function (t) {
            a(t.data)
          }, o = function (e) {
            t.port2.postMessage(e)
          }
        }() : c && "onreadystatechange" in c.createElement("script") ? function () {
          var t = c.documentElement;
          o = function (e) {
            var i = c.createElement("script");
            i.onreadystatechange = function () {
              a(e), i.onreadystatechange = null, t.removeChild(i), i = null
            }, t.appendChild(i)
          }
        }() : function () {
          o = function (t) {
            setTimeout(a, 0, t)
          }
        }(), d.setImmediate = r, d.clearImmediate = s
      }
    }("undefined" == typeof self ? void 0 === t ? this : t : self)
  }).call(e, i(1), i(29))
}, function (t, e) {
  function i() {
    throw new Error("setTimeout has not been defined")
  }

  function r() {
    throw new Error("clearTimeout has not been defined")
  }

  function s(t) {
    if (p === setTimeout) return setTimeout(t, 0);
    if ((p === i || !p) && setTimeout) return p = setTimeout, setTimeout(t, 0);
    try {
      return p(t, 0)
    } catch (e) {
      try {
        return p.call(null, t, 0)
      } catch (e) {
        return p.call(this, t, 0)
      }
    }
  }

  function n(t) {
    if (c === clearTimeout) return clearTimeout(t);
    if ((c === r || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t);
    try {
      return c(t)
    } catch (e) {
      try {
        return c.call(null, t)
      } catch (e) {
        return c.call(this, t)
      }
    }
  }

  function a() {
    m && u && (m = !1, u.length ? f = u.concat(f) : g = -1, f.length && o())
  }

  function o() {
    if (!m) {
      var t = s(a);
      m = !0;
      for (var e = f.length; e;) {
        for (u = f, f = []; ++g < e;) u && u[g].run();
        g = -1, e = f.length
      }
      u = null, m = !1, n(t)
    }
  }

  function l(t, e) {
    this.fun = t, this.array = e
  }

  function h() {}
  var p, c, d = t.exports = {};
  ! function () {
    try {
      p = "function" == typeof setTimeout ? setTimeout : i
    } catch (t) {
      p = i
    }
    try {
      c = "function" == typeof clearTimeout ? clearTimeout : r
    } catch (t) {
      c = r
    }
  }();
  var u, f = [],
    m = !1,
    g = -1;
  d.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)
      for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
    f.push(new l(t, e)), 1 !== f.length || m || s(o)
  }, l.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, d.title = "browser", d.browser = !0, d.env = {}, d.argv = [], d.version = "", d.versions = {}, d.on = h, d.addListener = h, d.once = h, d.off = h, d.removeListener = h, d.removeAllListeners = h, d.emit = h, d.prependListener = h, d.prependOnceListener = h, d.listeners = function (t) {
    return []
  }, d.binding = function (t) {
    throw new Error("process.binding is not supported")
  }, d.cwd = function () {
    return "/"
  }, d.chdir = function (t) {
    throw new Error("process.chdir is not supported")
  }, d.umask = function () {
    return 0
  }
}, function (t, e, i) {
  (function (i) {
    var r, s, n = void 0 !== t && t.exports && void 0 !== i ? i : this || window;
    (n._gsQueue || (n._gsQueue = [])).push(function () {
        "use strict";
        n._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var r = function (t) {
                var e, i = [],
                  r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
              },
              s = function (t, e, i) {
                var r, s, n = t.cycle;
                for (r in n) s = n[r], t[r] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                delete t.cycle
              },
              n = function (t, e, r) {
                i.call(this, t, e, r), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = n.prototype.render
              },
              a = i._internals,
              o = a.isSelector,
              l = a.isArray,
              h = n.prototype = i.to({}, .1, {}),
              p = [];
            n.version = "1.20.4", h.constructor = n, h.kill()._gc = !1, n.killTweensOf = n.killDelayedCallsTo = i.killTweensOf, n.getTweensOf = i.getTweensOf, n.lagSmoothing = i.lagSmoothing, n.ticker = i.ticker, n.render = i.render, h.invalidate = function () {
              return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
            }, h.updateTo = function (t, e) {
              var r, s = this.ratio,
                n = this.vars.immediateRender || t.immediateRender;
              e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
              for (r in t) this.vars[r] = t[r];
              if (this._initted || n)
                if (e) this._initted = !1, n && this.render(0, !0, !0);
                else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
              } else if (this._initted = !1, this._init(), this._time > 0 || n)
                for (var o, l = 1 / (1 - s), h = this._firstPT; h;) o = h.s + h.c, h.c *= l, h.s = o - h.c, h = h._next;
              return this
            }, h.render = function (t, e, r) {
              this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
              var s, n, o, l, h, p, c, d, u, f = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._time,
                g = this._totalTime,
                v = this._cycle,
                y = this._duration,
                _ = this._rawPrevTime;
              if (t >= f - 1e-7 && t >= 0 ? (this._totalTime = f, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (s = !0, n = "onComplete", r = r || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0), (_ < 0 || t <= 0 && t >= -1e-7 || 1e-10 === _ && "isPause" !== this.data) && _ !== t && (r = !0, _ > 1e-10 && (n = "onReverseComplete")), this._rawPrevTime = d = !e || t || _ === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== g || 0 === y && _ > 0) && (n = "onReverseComplete", s = this._reversed), t < 0 && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || r) && (_ >= 0 && (r = !0), this._rawPrevTime = d = !e || t || _ === t ? t : 1e-10)), this._initted || (r = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (u = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== u || this._initted ? this._yoyoEase = u = !0 === u ? this._ease : u instanceof Ease ? u : Ease.map[u] : (u = this.vars.ease, this._yoyoEase = u = u ? u instanceof Ease ? u : "function" == typeof u ? new Ease(u, this.vars.easeParams) : Ease.map[u] || i.defaultEase : i.defaultEase)), this.ratio = u ? 1 - u.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !u ? (h = this._time / y, p = this._easeType, c = this._easePower, (1 === p || 3 === p && h >= .5) && (h = 1 - h), 3 === p && (h *= 2), 1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h), 1 === p ? this.ratio = 1 - h : 2 === p ? this.ratio = h : this._time / y < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : u || (this.ratio = this._ease.getRatio(this._time / y))), m === this._time && !r && v === this._cycle) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
              if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!r && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = m, this._totalTime = g, this._rawPrevTime = _, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                !this._time || s || u ? s && this._ease._calcEnd && !u && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
              }
              for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0), 0 === g && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, r) : n || (n = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== y || e || this._callback("onStart"))), o = this._firstPT; o;) o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s, o = o._next;
              this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, r), e || (this._totalTime !== g || n) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), n && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, r), s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[n] && this._callback(n), 0 === y && 1e-10 === this._rawPrevTime && 1e-10 !== d && (this._rawPrevTime = 0)))
            }, n.to = function (t, e, i) {
              return new n(t, e, i)
            }, n.from = function (t, e, i) {
              return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new n(t, e, i)
            }, n.fromTo = function (t, e, i, r) {
              return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new n(t, e, r)
            }, n.staggerTo = n.allTo = function (t, e, a, h, c, d, u) {
              h = h || 0;
              var f, m, g, v, y = 0,
                _ = [],
                b = function () {
                  a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), c.apply(u || a.callbackScope || this, d || p)
                },
                T = a.cycle,
                E = a.startAt && a.startAt.cycle;
              for (l(t) || ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t))), t = t || [], h < 0 && (t = r(t), t.reverse(), h *= -1), f = t.length - 1, g = 0; g <= f; g++) {
                m = {};
                for (v in a) m[v] = a[v];
                if (T && (s(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), E) {
                  E = m.startAt = {};
                  for (v in a.startAt) E[v] = a.startAt[v];
                  s(m.startAt, t, g)
                }
                m.delay = y + (m.delay || 0), g === f && c && (m.onComplete = b), _[g] = new n(t[g], e, m), y += h
              }
              return _
            }, n.staggerFrom = n.allFrom = function (t, e, i, r, s, a, o) {
              return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, n.staggerTo(t, e, i, r, s, a, o)
            }, n.staggerFromTo = n.allFromTo = function (t, e, i, r, s, a, o, l) {
              return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, n.staggerTo(t, e, r, s, a, o, l)
            }, n.delayedCall = function (t, e, i, r, s) {
              return new n(e, 0, {
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                useFrames: s,
                overwrite: 0
              })
            }, n.set = function (t, e) {
              return new n(t, 0, e)
            }, n.isTweening = function (t) {
              return i.getTweensOf(t, !0).length > 0
            };
            var c = function (t, e) {
                for (var r = [], s = 0, n = t._first; n;) n instanceof i ? r[s++] = n : (e && (r[s++] = n), r = r.concat(c(n, e)), s = r.length), n = n._next;
                return r
              },
              d = n.getAllTweens = function (e) {
                return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
              };
            n.killAll = function (t, i, r, s) {
              null == i && (i = !0), null == r && (r = !0);
              var n, a, o, l = d(0 != s),
                h = l.length,
                p = i && r && s;
              for (o = 0; o < h; o++) a = l[o], (p || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
            }, n.killChildTweensOf = function (t, e) {
              if (null != t) {
                var s, h, p, c, d, u = a.tweenLookup;
                if ("string" == typeof t && (t = i.selector(t) || t), o(t) && (t = r(t)), l(t))
                  for (c = t.length; --c > -1;) n.killChildTweensOf(t[c], e);
                else {
                  s = [];
                  for (p in u)
                    for (h = u[p].target.parentNode; h;) h === t && (s = s.concat(u[p].tweens)), h = h.parentNode;
                  for (d = s.length, c = 0; c < d; c++) e && s[c].totalTime(s[c].totalDuration()), s[c]._enabled(!1, !1)
                }
              }
            };
            var u = function (t, i, r, s) {
              i = !1 !== i, r = !1 !== r, s = !1 !== s;
              for (var n, a, o = d(s), l = i && r && s, h = o.length; --h > -1;) a = o[h], (l || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && a.paused(t)
            };
            return n.pauseAll = function (t, e, i) {
              u(!0, t, e, i)
            }, n.resumeAll = function (t, e, i) {
              u(!1, t, e, i)
            }, n.globalTimeScale = function (e) {
              var r = t._rootTimeline,
                s = i.ticker.time;
              return arguments.length ? (e = e || 1e-10, r._startTime = s - (s - r._startTime) * r._timeScale / e, r = t._rootFramesTimeline, s = i.ticker.frame, r._startTime = s - (s - r._startTime) * r._timeScale / e, r._timeScale = t._rootTimeline._timeScale = e, e) : r._timeScale
            }, h.progress = function (t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
            }, h.totalProgress = function (t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
            }, h.time = function (t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, h.duration = function (e) {
              return arguments.length ? t.prototype.duration.call(this, e) : this._duration
            }, h.totalDuration = function (t) {
              return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
            }, h.repeat = function (t) {
              return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, h.repeatDelay = function (t) {
              return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, h.yoyo = function (t) {
              return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, n
          }, !0), n._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) {
            var r = function (t) {
                e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                var i, r, s = this.vars;
                for (r in s) i = s[r], l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
                l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
              },
              s = i._internals,
              a = r._internals = {},
              o = s.isSelector,
              l = s.isArray,
              h = s.lazyTweens,
              p = s.lazyRender,
              c = n._gsDefine.globals,
              d = function (t) {
                var e, i = {};
                for (e in t) i[e] = t[e];
                return i
              },
              u = function (t, e, i) {
                var r, s, n = t.cycle;
                for (r in n) s = n[r], t[r] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                delete t.cycle
              },
              f = a.pauseCallback = function () {},
              m = function (t) {
                var e, i = [],
                  r = t.length;
                for (e = 0; e !== r; i.push(t[e++]));
                return i
              },
              g = r.prototype = new e;
            return r.version = "1.20.4", g.constructor = r, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function (t, e, r, s) {
              var n = r.repeat && c.TweenMax || i;
              return e ? this.add(new n(t, e, r), s) : this.set(t, r, s)
            }, g.from = function (t, e, r, s) {
              return this.add((r.repeat && c.TweenMax || i).from(t, e, r), s)
            }, g.fromTo = function (t, e, r, s, n) {
              var a = s.repeat && c.TweenMax || i;
              return e ? this.add(a.fromTo(t, e, r, s), n) : this.set(t, s, n)
            }, g.staggerTo = function (t, e, s, n, a, l, h, p) {
              var c, f, g = new r({
                  onComplete: l,
                  onCompleteParams: h,
                  callbackScope: p,
                  smoothChildTiming: this.smoothChildTiming
                }),
                v = s.cycle;
              for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], o(t) && (t = m(t)), n = n || 0, n < 0 && (t = m(t), t.reverse(), n *= -1), f = 0; f < t.length; f++) c = d(s), c.startAt && (c.startAt = d(c.startAt), c.startAt.cycle && u(c.startAt, t, f)), v && (u(c, t, f), null != c.duration && (e = c.duration, delete c.duration)), g.to(t[f], e, c, f * n);
              return this.add(g, a)
            }, g.staggerFrom = function (t, e, i, r, s, n, a, o) {
              return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, r, s, n, a, o)
            }, g.staggerFromTo = function (t, e, i, r, s, n, a, o, l) {
              return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, r, s, n, a, o, l)
            }, g.call = function (t, e, r, s) {
              return this.add(i.delayedCall(0, t, e, r), s)
            }, g.set = function (t, e, r) {
              return r = this._parseTimeOrLabel(r, 0, !0), null == e.immediateRender && (e.immediateRender = r === this._time && !this._paused), this.add(new i(t, 0, e), r)
            }, r.exportRoot = function (t, e) {
              t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0);
              var s, n, a, o, l = new r(t),
                h = l._timeline;
              for (null == e && (e = !0), h._remove(l, !0), l._startTime = 0, l._rawPrevTime = l._time = l._totalTime = h._time, a = h._first; a;) o = a._next, e && a instanceof i && a.target === a.vars.onComplete || (n = a._startTime - a._delay, n < 0 && (s = 1), l.add(a, n)), a = o;
              return h.add(l, 0), s && l.totalDuration(), l
            }, g.add = function (s, n, a, o) {
              var h, p, c, d, u, f;
              if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)), !(s instanceof t)) {
                if (s instanceof Array || s && s.push && l(s)) {
                  for (a = a || "normal", o = o || 0, h = n, p = s.length, c = 0; c < p; c++) l(d = s[c]) && (d = new r({
                    tweens: d
                  })), this.add(d, h), "string" != typeof d && "function" != typeof d && ("sequence" === a ? h = d._startTime + d.totalDuration() / d._timeScale : "start" === a && (d._startTime -= d.delay())), h += o;
                  return this._uncache(!0)
                }
                if ("string" == typeof s) return this.addLabel(s, n);
                if ("function" != typeof s) throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                s = i.delayedCall(0, s)
              }
              if (e.prototype.add.call(this, s, n), s._time && s.render((this.rawTime() - s._startTime) * s._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                for (u = this, f = u.rawTime() > s._startTime; u._timeline;) f && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1), u = u._timeline;
              return this
            }, g.remove = function (e) {
              if (e instanceof t) {
                this._remove(e, !1);
                var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
              }
              if (e instanceof Array || e && e.push && l(e)) {
                for (var r = e.length; --r > -1;) this.remove(e[r]);
                return this
              }
              return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
            }, g._remove = function (t, i) {
              return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
            }, g.append = function (t, e) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
            }, g.insert = g.insertMultiple = function (t, e, i, r) {
              return this.add(t, e || 0, i, r)
            }, g.appendMultiple = function (t, e, i, r) {
              return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
            }, g.addLabel = function (t, e) {
              return this._labels[t] = this._parseTimeOrLabel(e), this
            }, g.addPause = function (t, e, r, s) {
              var n = i.delayedCall(0, f, r, s || this);
              return n.vars.onComplete = n.vars.onReverseComplete = e, n.data = "isPause", this._hasPause = !0, this.add(n, t)
            }, g.removeLabel = function (t) {
              return delete this._labels[t], this
            }, g.getLabelTime = function (t) {
              return null != this._labels[t] ? this._labels[t] : -1
            }, g._parseTimeOrLabel = function (e, i, r, s) {
              var n, a;
              if (s instanceof t && s.timeline === this) this.remove(s);
              else if (s && (s instanceof Array || s.push && l(s)))
                for (a = s.length; --a > -1;) s[a] instanceof t && s[a].timeline === this && this.remove(s[a]);
              if (n = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - n : 0, r);
              if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = n);
              else {
                if (-1 === (a = e.indexOf("="))) return null == this._labels[e] ? r ? this._labels[e] = n + i : i : this._labels[e] + i;
                i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)), e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : n
              }
              return Number(e) + i
            }, g.seek = function (t, e) {
              return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
            }, g.stop = function () {
              return this.paused(!0)
            }, g.gotoAndPlay = function (t, e) {
              return this.play(t, e)
            }, g.gotoAndStop = function (t, e) {
              return this.pause(t, e)
            }, g.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var r, s, n, a, o, l, c, d = this._time,
                u = this._dirty ? this.totalDuration() : this._totalDuration,
                f = this._startTime,
                m = this._timeScale,
                g = this._paused;
              if (d !== this._time && (t += this._time - d), t >= u - 1e-7 && t >= 0) this._totalTime = this._time = u, this._reversed || this._hasPausedChild() || (s = !0, a = "onComplete", o = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (o = !0, this._rawPrevTime > 1e-10 && (a = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = u + 1e-4;
              else if (t < 1e-7)
                if (this._totalTime = this._time = 0, (0 !== d || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0, a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (o = !0), this._rawPrevTime = t;
                else {
                  if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                    for (r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                  t = 0, this._initted || (o = !0)
                }
              else {
                if (this._hasPause && !this._forcingPlayhead && !e) {
                  if (t >= d)
                    for (r = this._first; r && r._startTime <= t && !l;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r), r = r._next;
                  else
                    for (r = this._last; r && r._startTime >= t && !l;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (l = r), r = r._prev;
                  l && (this._time = t = l._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                }
                this._totalTime = this._time = this._rawPrevTime = t
              }
              if (this._time !== d && this._first || i || o || l) {
                if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== d && t > 0 && (this._active = !0), 0 === d && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= d)
                  for (r = this._first; r && (n = r._next, c === this._time && (!this._paused || g));)(r._active || r._startTime <= c && !r._paused && !r._gc) && (l === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n;
                else
                  for (r = this._last; r && (n = r._prev, c === this._time && (!this._paused || g));) {
                    if (r._active || r._startTime <= d && !r._paused && !r._gc) {
                      if (l === r) {
                        for (l = r._prev; l && l.endTime() > this._time;) l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i), l = l._prev;
                        l = null, this.pause()
                      }
                      r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                    }
                    r = n
                  }
                this._onUpdate && (e || (h.length && p(), this._callback("onUpdate"))), a && (this._gc || f !== this._startTime && m === this._timeScale || (0 === this._time || u >= this.totalDuration()) && (s && (h.length && p(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[a] && this._callback(a)))
              }
            }, g._hasPausedChild = function () {
              for (var t = this._first; t;) {
                if (t._paused || t instanceof r && t._hasPausedChild()) return !0;
                t = t._next
              }
              return !1
            }, g.getChildren = function (t, e, r, s) {
              s = s || -9999999999;
              for (var n = [], a = this._first, o = 0; a;) a._startTime < s || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== r && (n[o++] = a), !1 !== t && (n = n.concat(a.getChildren(!0, e, r)), o = n.length))), a = a._next;
              return n
            }, g.getTweensOf = function (t, e) {
              var r, s, n = this._gc,
                a = [],
                o = 0;
              for (n && this._enabled(!0, !0), r = i.getTweensOf(t), s = r.length; --s > -1;)(r[s].timeline === this || e && this._contains(r[s])) && (a[o++] = r[s]);
              return n && this._enabled(!1, !0), a
            }, g.recent = function () {
              return this._recent
            }, g._contains = function (t) {
              for (var e = t.timeline; e;) {
                if (e === this) return !0;
                e = e.timeline
              }
              return !1
            }, g.shiftChildren = function (t, e, i) {
              i = i || 0;
              for (var r, s = this._first, n = this._labels; s;) s._startTime >= i && (s._startTime += t), s = s._next;
              if (e)
                for (r in n) n[r] >= i && (n[r] += t);
              return this._uncache(!0)
            }, g._kill = function (t, e) {
              if (!t && !e) return this._enabled(!1, !1);
              for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1;) i[r]._kill(t, e) && (s = !0);
              return s
            }, g.clear = function (t) {
              var e = this.getChildren(!1, !0, !0),
                i = e.length;
              for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
              return !1 !== t && (this._labels = {}), this._uncache(!0)
            }, g.invalidate = function () {
              for (var e = this._first; e;) e.invalidate(), e = e._next;
              return t.prototype.invalidate.call(this)
            }, g._enabled = function (t, i) {
              if (t === this._gc)
                for (var r = this._first; r;) r._enabled(t, !0), r = r._next;
              return e.prototype._enabled.call(this, t, i)
            }, g.totalTime = function (e, i, r) {
              this._forcingPlayhead = !0;
              var s = t.prototype.totalTime.apply(this, arguments);
              return this._forcingPlayhead = !1, s
            }, g.duration = function (t) {
              return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
            }, g.totalDuration = function (t) {
              if (!arguments.length) {
                if (this._dirty) {
                  for (var e, i, r = 0, s = this._last, n = 999999999999; s;) e = s._prev, s._dirty && s.totalDuration(), s._startTime > n && this._sortChildren && !s._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(s, s._startTime - s._delay), this._calculatingDuration = 0) : n = s._startTime, s._startTime < 0 && !s._paused && (r -= s._startTime, this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale, this._time -= s._startTime, this._totalTime -= s._startTime, this._rawPrevTime -= s._startTime), this.shiftChildren(-s._startTime, !1, -9999999999), n = 0), i = s._startTime + s._totalDuration / s._timeScale, i > r && (r = i), s = e;
                  this._duration = this._totalDuration = r, this._dirty = !1
                }
                return this._totalDuration
              }
              return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
            }, g.paused = function (e) {
              if (!e)
                for (var i = this._first, r = this._time; i;) i._startTime === r && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
              return t.prototype.paused.apply(this, arguments)
            }, g.usesFrames = function () {
              for (var e = this._timeline; e._timeline;) e = e._timeline;
              return e === t._rootFramesTimeline
            }, g.rawTime = function (t) {
              return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
            }, r
          }, !0), n._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) {
            var r = function (e) {
                t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
              },
              s = e._internals,
              a = s.lazyTweens,
              o = s.lazyRender,
              l = n._gsDefine.globals,
              h = new i(null, null, 1, 0),
              p = r.prototype = new t;
            return p.constructor = r, p.kill()._gc = !1, r.version = "1.20.4", p.invalidate = function () {
              return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
            }, p.addCallback = function (t, i, r, s) {
              return this.add(e.delayedCall(0, t, r, s), i)
            }, p.removeCallback = function (t, e) {
              if (t)
                if (null == e) this._kill(null, t);
                else
                  for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1;) i[r]._startTime === s && i[r]._enabled(!1, !1);
              return this
            }, p.removePause = function (e) {
              return this.removeCallback(t._internals.pauseCallback, e)
            }, p.tweenTo = function (t, i) {
              i = i || {};
              var r, s, n, a = {
                  ease: h,
                  useFrames: this.usesFrames(),
                  immediateRender: !1,
                  lazy: !1
                },
                o = i.repeat && l.TweenMax || e;
              for (s in i) a[s] = i[s];
              return a.time = this._parseTimeOrLabel(t), r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, n = new o(this, r, a), a.onStart = function () {
                n.target.paused(!0), n.vars.time === n.target.time() || r !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || [])
              }, n
            }, p.tweenFromTo = function (t, e, i) {
              i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              }, i.immediateRender = !1 !== i.immediateRender;
              var r = this.tweenTo(e, i);
              return r.isFromTo = 1, r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
            }, p.render = function (t, e, i) {
              this._gc && this._enabled(!0, !1);
              var r, s, n, l, h, p, c, d, u = this._time,
                f = this._dirty ? this.totalDuration() : this._totalDuration,
                m = this._duration,
                g = this._totalTime,
                v = this._startTime,
                y = this._timeScale,
                _ = this._rawPrevTime,
                b = this._paused,
                T = this._cycle;
              if (u !== this._time && (t += this._time - u), t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || _ < 0 || 1e-10 === _) && _ !== t && this._first && (h = !0, _ > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = m, t = m + 1e-4);
              else if (t < 1e-7)
                if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== u || 0 === m && 1e-10 !== _ && (_ > 0 || t < 0 && _ >= 0) && !this._locked) && (l = "onReverseComplete", s = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0, l = "onReverseComplete") : _ >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                else {
                  if (this._rawPrevTime = m || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && s)
                    for (r = this._first; r && 0 === r._startTime;) r._duration || (s = !1), r = r._next;
                  t = 0, this._initted || (h = !0)
                }
              else if (0 === m && _ < 0 && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (p = m + this._repeatDelay, this._cycle = this._totalTime / p >> 0, 0 !== this._cycle && this._cycle === this._totalTime / p && g <= t && this._cycle--, this._time = this._totalTime - this._cycle * p, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, t = m + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                if ((t = this._time) >= u || this._repeat && T !== this._cycle)
                  for (r = this._first; r && r._startTime <= t && !c;) r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (c = r), r = r._next;
                else
                  for (r = this._last; r && r._startTime >= t && !c;) r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (c = r), r = r._prev;
                c && c._startTime < m && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
              }
              if (this._cycle !== T && !this._locked) {
                var E = this._yoyo && 0 != (1 & T),
                  w = E === (this._yoyo && 0 != (1 & this._cycle)),
                  x = this._totalTime,
                  S = this._cycle,
                  C = this._rawPrevTime,
                  P = this._time;
                if (this._totalTime = T * m, this._cycle < T ? E = !E : this._totalTime += m, this._time = u, this._rawPrevTime = 0 === m ? _ - 1e-4 : _, this._cycle = T, this._locked = !0, u = E ? 0 : m, this.render(u, e, 0 === m), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), u !== this._time) return;
                if (w && (this._cycle = T, this._locked = !0, u = E ? m + 1e-4 : -1e-4, this.render(u, !0, !1)), this._locked = !1, this._paused && !b) return;
                this._time = P, this._totalTime = x, this._cycle = S, this._rawPrevTime = C
              }
              if (!(this._time !== u && this._first || i || h || c)) return void(g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
              if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (d = this._time) >= u)
                for (r = this._first; r && (n = r._next, d === this._time && (!this._paused || b));)(r._active || r._startTime <= this._time && !r._paused && !r._gc) && (c === r && this.pause(), r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n;
              else
                for (r = this._last; r && (n = r._prev, d === this._time && (!this._paused || b));) {
                  if (r._active || r._startTime <= u && !r._paused && !r._gc) {
                    if (c === r) {
                      for (c = r._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                      c = null, this.pause()
                    }
                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                  }
                  r = n
                }
              this._onUpdate && (e || (a.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
            }, p.getActive = function (t, e, i) {
              null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
              var r, s, n = [],
                a = this.getChildren(t, e, i),
                o = 0,
                l = a.length;
              for (r = 0; r < l; r++) s = a[r], s.isActive() && (n[o++] = s);
              return n
            }, p.getLabelAfter = function (t) {
              t || 0 !== t && (t = this._time);
              var e, i = this.getLabelsArray(),
                r = i.length;
              for (e = 0; e < r; e++)
                if (i[e].time > t) return i[e].name;
              return null
            }, p.getLabelBefore = function (t) {
              null == t && (t = this._time);
              for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                if (e[i].time < t) return e[i].name;
              return null
            }, p.getLabelsArray = function () {
              var t, e = [],
                i = 0;
              for (t in this._labels) e[i++] = {
                time: this._labels[t],
                name: t
              };
              return e.sort(function (t, e) {
                return t.time - e.time
              }), e
            }, p.invalidate = function () {
              return this._locked = !1, t.prototype.invalidate.call(this)
            }, p.progress = function (t, e) {
              return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
            }, p.totalProgress = function (t, e) {
              return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
            }, p.totalDuration = function (e) {
              return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
            }, p.time = function (t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
            }, p.repeat = function (t) {
              return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
            }, p.repeatDelay = function (t) {
              return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
            }, p.yoyo = function (t) {
              return arguments.length ? (this._yoyo = t, this) : this._yoyo
            }, p.currentLabel = function (t) {
              return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
            }, r
          }, !0),
          function () {
            var t = 180 / Math.PI,
              e = [],
              i = [],
              r = [],
              s = {},
              a = n._gsDefine.globals,
              o = function (t, e, i, r) {
                i === r && (i = r - (r - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = r, this.da = r - t, this.ca = i - t, this.ba = e - t
              },
              l = function (t, e, i, r) {
                var s = {
                    a: t
                  },
                  n = {},
                  a = {},
                  o = {
                    c: r
                  },
                  l = (t + e) / 2,
                  h = (e + i) / 2,
                  p = (i + r) / 2,
                  c = (l + h) / 2,
                  d = (h + p) / 2,
                  u = (d - c) / 8;
                return s.b = l + (t - l) / 4, n.b = c + u, s.c = n.a = (s.b + n.b) / 2, n.c = a.a = (c + d) / 2, a.b = d - u, o.b = p + (r - p) / 4, a.c = o.a = (a.b + o.b) / 2, [s, n, a, o]
              },
              h = function (t, s, n, a, o) {
                var h, p, c, d, u, f, m, g, v, y, _, b, T, E = t.length - 1,
                  w = 0,
                  x = t[0].a;
                for (h = 0; h < E; h++) u = t[w], p = u.a, c = u.d, d = t[w + 1].d, o ? (_ = e[h], b = i[h], T = (b + _) * s * .25 / (a ? .5 : r[h] || .5), f = c - (c - p) * (a ? .5 * s : 0 !== _ ? T / _ : 0), m = c + (d - c) * (a ? .5 * s : 0 !== b ? T / b : 0), g = c - (f + ((m - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : (f = c - (c - p) * s * .5, m = c + (d - c) * s * .5, g = c - (f + m) / 2), f += g, m += g, u.c = v = f, u.b = 0 !== h ? x : x = u.a + .6 * (u.c - u.a), u.da = c - p, u.ca = v - p, u.ba = x - p, n ? (y = l(p, x, v, c), t.splice(w, 1, y[0], y[1], y[2], y[3]), w += 4) : w++, x = m;
                u = t[w], u.b = x, u.c = x + .4 * (u.d - x), u.da = u.d - u.a, u.ca = u.c - u.a, u.ba = x - u.a, n && (y = l(u.a, x, u.c, u.d), t.splice(w, 1, y[0], y[1], y[2], y[3]))
              },
              p = function (t, r, s, n) {
                var a, l, h, p, c, d, u = [];
                if (n)
                  for (t = [n].concat(t), l = t.length; --l > -1;) "string" == typeof (d = t[l][r]) && "=" === d.charAt(1) && (t[l][r] = n[r] + Number(d.charAt(0) + d.substr(2)));
                if ((a = t.length - 2) < 0) return u[0] = new o(t[0][r], 0, 0, t[0][r]), u;
                for (l = 0; l < a; l++) h = t[l][r], p = t[l + 1][r], u[l] = new o(h, 0, 0, p), s && (c = t[l + 2][r], e[l] = (e[l] || 0) + (p - h) * (p - h), i[l] = (i[l] || 0) + (c - p) * (c - p));
                return u[l] = new o(t[l][r], 0, 0, t[l + 1][r]), u
              },
              c = function (t, n, a, o, l, c) {
                var d, u, f, m, g, v, y, _, b = {},
                  T = [],
                  E = c || t[0];
                l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == n && (n = 1);
                for (u in t[0]) T.push(u);
                if (t.length > 1) {
                  for (_ = t[t.length - 1], y = !0, d = T.length; --d > -1;)
                    if (u = T[d], Math.abs(E[u] - _[u]) > .05) {
                      y = !1;
                      break
                    } y && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3])
                }
                for (e.length = i.length = r.length = 0, d = T.length; --d > -1;) u = T[d], s[u] = -1 !== l.indexOf("," + u + ","), b[u] = p(t, u, s[u], c);
                for (d = e.length; --d > -1;) e[d] = Math.sqrt(e[d]), i[d] = Math.sqrt(i[d]);
                if (!o) {
                  for (d = T.length; --d > -1;)
                    if (s[u])
                      for (f = b[T[d]], v = f.length - 1, m = 0; m < v; m++) g = f[m + 1].da / i[m] + f[m].da / e[m] || 0, r[m] = (r[m] || 0) + g * g;
                  for (d = r.length; --d > -1;) r[d] = Math.sqrt(r[d])
                }
                for (d = T.length, m = a ? 4 : 1; --d > -1;) u = T[d], f = b[u], h(f, n, a, o, s[u]), y && (f.splice(0, m), f.splice(f.length - m, m));
                return b
              },
              d = function (t, e, i) {
                e = e || "soft";
                var r, s, n, a, l, h, p, c, d, u, f, m = {},
                  g = "cubic" === e ? 3 : 2,
                  v = "soft" === e,
                  y = [];
                if (v && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                for (d in t[0]) y.push(d);
                for (h = y.length; --h > -1;) {
                  for (d = y[h], m[d] = l = [], u = 0, c = t.length, p = 0; p < c; p++) r = null == i ? t[p][d] : "string" == typeof (f = t[p][d]) && "=" === f.charAt(1) ? i[d] + Number(f.charAt(0) + f.substr(2)) : Number(f), v && p > 1 && p < c - 1 && (l[u++] = (r + l[u - 2]) / 2), l[u++] = r;
                  for (c = u - g + 1, u = 0, p = 0; p < c; p += g) r = l[p], s = l[p + 1], n = l[p + 2], a = 2 === g ? 0 : l[p + 3], l[u++] = f = 3 === g ? new o(r, s, n, a) : new o(r, (2 * s + r) / 3, (2 * s + n) / 3, n);
                  l.length = u
                }
                return m
              },
              u = function (t, e, i) {
                for (var r, s, n, a, o, l, h, p, c, d, u, f = 1 / i, m = t.length; --m > -1;)
                  for (d = t[m], n = d.a, a = d.d - n, o = d.c - n, l = d.b - n, r = s = 0, p = 1; p <= i; p++) h = f * p, c = 1 - h, r = s - (s = (h * h * a + 3 * c * (h * o + c * l)) * h), u = m * i + p - 1, e[u] = (e[u] || 0) + r * r
              },
              f = function (t, e) {
                e = e >> 0 || 6;
                var i, r, s, n, a = [],
                  o = [],
                  l = 0,
                  h = 0,
                  p = e - 1,
                  c = [],
                  d = [];
                for (i in t) u(t[i], a, e);
                for (s = a.length, r = 0; r < s; r++) l += Math.sqrt(a[r]), n = r % e, d[n] = l, n === p && (h += l, n = r / e >> 0, c[n] = d, o[n] = h, l = 0, d = []);
                return {
                  length: h,
                  lengths: o,
                  segments: c
                }
              },
              m = n._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.8",
                API: 2,
                global: !0,
                init: function (t, e, i) {
                  this._target = t, e instanceof Array && (e = {
                    values: e
                  }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                  var r, s, n, a, o, l = e.values || [],
                    h = {},
                    p = l[0],
                    u = e.autoRotate || i.vars.orientToBezier;
                  this._autoRotate = u ? u instanceof Array ? u : [
                    ["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]
                  ] : null;
                  for (r in p) this._props.push(r);
                  for (n = this._props.length; --n > -1;) r = this._props[n], this._overwriteProps.push(r), s = this._func[r] = "function" == typeof t[r], h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]), o || h[r] !== l[0][r] && (o = h);
                  if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : d(l, e.type, h), this._segCount = this._beziers[r].length, this._timeRes) {
                    var m = f(this._beziers, this._timeRes);
                    this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                  }
                  if (u = this._autoRotate)
                    for (this._initialRotations = [], u[0] instanceof Array || (this._autoRotate = u = [u]), n = u.length; --n > -1;) {
                      for (a = 0; a < 3; a++) r = u[n][a], this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                      r = u[n][2], this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0, this._overwriteProps.push(r)
                    }
                  return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                },
                set: function (e) {
                  var i, r, s, n, a, o, l, h, p, c, d = this._segCount,
                    u = this._func,
                    f = this._target,
                    m = e !== this._startRatio;
                  if (this._timeRes) {
                    if (p = this._lengths, c = this._curSeg, e *= this._length, s = this._li, e > this._l2 && s < d - 1) {
                      for (h = d - 1; s < h && (this._l2 = p[++s]) <= e;);
                      this._l1 = p[s - 1], this._li = s, this._curSeg = c = this._segments[s], this._s2 = c[this._s1 = this._si = 0]
                    } else if (e < this._l1 && s > 0) {
                      for (; s > 0 && (this._l1 = p[--s]) >= e;);
                      0 === s && e < this._l1 ? this._l1 = 0 : s++, this._l2 = p[s], this._li = s, this._curSeg = c = this._segments[s], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si]
                    }
                    if (i = s, e -= this._l1, s = this._si, e > this._s2 && s < c.length - 1) {
                      for (h = c.length - 1; s < h && (this._s2 = c[++s]) <= e;);
                      this._s1 = c[s - 1], this._si = s
                    } else if (e < this._s1 && s > 0) {
                      for (; s > 0 && (this._s1 = c[--s]) >= e;);
                      0 === s && e < this._s1 ? this._s1 = 0 : s++, this._s2 = c[s], this._si = s
                    }
                    o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                  } else i = e < 0 ? 0 : e >= 1 ? d - 1 : d * e >> 0, o = (e - i * (1 / d)) * d;
                  for (r = 1 - o, s = this._props.length; --s > -1;) n = this._props[s], a = this._beziers[n][i], l = (o * o * a.da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a, this._mod[n] && (l = this._mod[n](l, f)), u[n] ? f[n](l) : f[n] = l;
                  if (this._autoRotate) {
                    var g, v, y, _, b, T, E, w = this._autoRotate;
                    for (s = w.length; --s > -1;) n = w[s][2], T = w[s][3] || 0, E = !0 === w[s][4] ? 1 : t, a = this._beziers[w[s][0]], g = this._beziers[w[s][1]], a && g && (a = a[i], g = g[i], v = a.a + (a.b - a.a) * o, _ = a.b + (a.c - a.b) * o, v += (_ - v) * o, _ += (a.c + (a.d - a.c) * o - _) * o, y = g.a + (g.b - g.a) * o, b = g.b + (g.c - g.b) * o, y += (b - y) * o, b += (g.c + (g.d - g.c) * o - b) * o, l = m ? Math.atan2(b - y, _ - v) * E + T : this._initialRotations[s], this._mod[n] && (l = this._mod[n](l, f)), u[n] ? f[n](l) : f[n] = l)
                  }
                }
              }),
              g = m.prototype;
            m.bezierThrough = c, m.cubicToQuadratic = l, m._autoCSS = !0, m.quadraticToCubic = function (t, e, i) {
              return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
            }, m._cssRegister = function () {
              var t = a.CSSPlugin;
              if (t) {
                var e = t._internals,
                  i = e._parseToProxy,
                  r = e._setPluginRatio,
                  s = e.CSSPropTween;
                e._registerComplexSpecialProp("bezier", {
                  parser: function (t, e, n, a, o, l) {
                    e instanceof Array && (e = {
                      values: e
                    }), l = new m;
                    var h, p, c, d = e.values,
                      u = d.length - 1,
                      f = [],
                      g = {};
                    if (u < 0) return o;
                    for (h = 0; h <= u; h++) c = i(t, d[h], a, o, l, u !== h), f[h] = c.end;
                    for (p in e) g[p] = e[p];
                    return g.values = f, o = new s(t, "bezier", 0, 0, c.pt, 2), o.data = c, o.plugin = l, o.setRatio = r, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != c.end.left ? [
                      ["left", "top", "rotation", h, !1]
                    ] : null != c.end.x && [
                      ["x", "y", "rotation", h, !1]
                    ]), g.autoRotate && (a._transform || a._enableTransforms(!1), c.autoRotate = a._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, a._overwriteProps.push("rotation")), l._onInitTween(c.proxy, g, a._tween), o
                  }
                })
              }
            }, g._mod = function (t) {
              for (var e, i = this._overwriteProps, r = i.length; --r > -1;)(e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
            }, g._kill = function (t) {
              var e, i, r = this._props;
              for (e in this._beziers)
                if (e in t)
                  for (delete this._beziers[e], delete this._func[e], i = r.length; --i > -1;) r[i] === e && r.splice(i, 1);
              if (r = this._autoRotate)
                for (i = r.length; --i > -1;) t[r[i][2]] && r.splice(i, 1);
              return this._super._kill.call(this, t)
            }
          }(), n._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) {
            var i, r, s, a, o = function () {
                t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
              },
              l = n._gsDefine.globals,
              h = {},
              p = o.prototype = new t("css");
            p.constructor = o, o.version = "1.20.4", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, p = "px", o.suffixMap = {
              top: p,
              right: p,
              bottom: p,
              left: p,
              width: p,
              height: p,
              fontSize: p,
              padding: p,
              margin: p,
              perspective: p,
              lineHeight: ""
            };
            var c, d, u, f, m, g, v, y, _ = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
              b = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
              T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
              E = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
              w = /(?:\d|\-|\+|=|#|\.)*/g,
              x = /opacity *= *([^)]*)/i,
              S = /opacity:([^;]*)/i,
              C = /alpha\(opacity *=.+?\)/i,
              P = /^(rgb|hsl)/,
              A = /([A-Z])/g,
              k = /-([a-z])/gi,
              D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
              M = function (t, e) {
                return e.toUpperCase()
              },
              I = /(?:Left|Right|Width)/i,
              O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
              F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
              R = /,(?=[^\)]*(?:\(|$))/gi,
              N = /[\s,\(]/i,
              L = Math.PI / 180,
              V = 180 / Math.PI,
              B = {},
              z = {
                style: {}
              },
              H = n.document || {
                createElement: function () {
                  return z
                }
              },
              j = function (t, e) {
                return H.createElementNS ? H.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : H.createElement(t)
              },
              G = j("div"),
              W = j("img"),
              $ = o._internals = {
                _specialProps: h
              },
              X = (n.navigator || {}).userAgent || "",
              Y = function () {
                var t = X.indexOf("Android"),
                  e = j("a");
                return u = -1 !== X.indexOf("Safari") && -1 === X.indexOf("Chrome") && (-1 === t || parseFloat(X.substr(t + 8, 2)) > 3), m = u && parseFloat(X.substr(X.indexOf("Version/") + 8, 2)) < 6, f = -1 !== X.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(X) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(X)) && (g = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
              }(),
              U = function (t) {
                return x.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
              },
              q = function (t) {
                n.console && console.log(t)
              },
              K = "",
              Q = "",
              Z = function (t, e) {
                e = e || G;
                var i, r, s = e.style;
                if (void 0 !== s[t]) return t;
                for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], r = 5; --r > -1 && void 0 === s[i[r] + t];);
                return r >= 0 ? (Q = 3 === r ? "ms" : i[r], K = "-" + Q.toLowerCase() + "-", Q + t) : null
              },
              J = H.defaultView ? H.defaultView.getComputedStyle : function () {},
              tt = o.getStyle = function (t, e, i, r, s) {
                var n;
                return Y || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || J(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(A, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]), null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : U(t)
              },
              et = $.convertToPixels = function (t, i, r, s, n) {
                if ("px" === s || !s && "lineHeight" !== i) return r;
                if ("auto" === s || !r) return 0;
                var a, l, h, p = I.test(i),
                  c = t,
                  d = G.style,
                  u = r < 0,
                  f = 1 === r;
                if (u && (r = -r), f && (r *= 100), "lineHeight" !== i || s)
                  if ("%" === s && -1 !== i.indexOf("border")) a = r / 100 * (p ? t.clientWidth : t.clientHeight);
                  else {
                    if (d.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s) d[p ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                    else {
                      if (c = t.parentNode || H.body, -1 !== tt(c, "display").indexOf("flex") && (d.position = "absolute"), l = c._gsCache, h = e.ticker.frame, l && p && l.time === h) return l.width * r / 100;
                      d[p ? "width" : "height"] = r + s
                    }
                    c.appendChild(G), a = parseFloat(G[p ? "offsetWidth" : "offsetHeight"]), c.removeChild(G), p && "%" === s && !1 !== o.cacheWidths && (l = c._gsCache = c._gsCache || {}, l.time = h, l.width = a / r * 100), 0 !== a || n || (a = et(t, i, r, s, !0))
                  }
                else l = J(t).lineHeight, t.style.lineHeight = r, a = parseFloat(J(t).lineHeight), t.style.lineHeight = l;
                return f && (a /= 100), u ? -a : a
              },
              it = $.calculateOffset = function (t, e, i) {
                if ("absolute" !== tt(t, "position", i)) return 0;
                var r = "left" === e ? "Left" : "Top",
                  s = tt(t, "margin" + r, i);
                return t["offset" + r] - (et(t, e, parseFloat(s), s.replace(w, "")) || 0)
              },
              rt = function (t, e) {
                var i, r, s, n = {};
                if (e = e || J(t, null))
                  if (i = e.length)
                    for (; --i > -1;) s = e[i], -1 !== s.indexOf("-transform") && Dt !== s || (n[s.replace(k, M)] = e.getPropertyValue(s));
                  else
                    for (i in e) - 1 !== i.indexOf("Transform") && kt !== i || (n[i] = e[i]);
                else if (e = t.currentStyle || t.style)
                  for (i in e) "string" == typeof i && void 0 === n[i] && (n[i.replace(k, M)] = e[i]);
                return Y || (n.opacity = U(t)), r = Wt(t, e, !1), n.rotation = r.rotation, n.skewX = r.skewX, n.scaleX = r.scaleX, n.scaleY = r.scaleY, n.x = r.x, n.y = r.y, It && (n.z = r.z, n.rotationX = r.rotationX, n.rotationY = r.rotationY, n.scaleZ = r.scaleZ), n.filters && delete n.filters, n
              },
              st = function (t, e, i, r, s) {
                var n, a, o, l = {},
                  h = t.style;
                for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(E, "") ? n : 0 : it(t, a), void 0 !== h[a] && (o = new _t(h, a, h[a], o))));
                if (r)
                  for (a in r) "className" !== a && (l[a] = r[a]);
                return {
                  difs: l,
                  firstMPT: o
                }
              },
              nt = {
                width: ["Left", "Right"],
                height: ["Top", "Bottom"]
              },
              at = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
              ot = function (t, e, i) {
                if ("svg" === (t.nodeName + "").toLowerCase()) return (i || J(t))[e] || 0;
                if (t.getCTM && Ht(t)) return t.getBBox()[e] || 0;
                var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                  s = nt[e],
                  n = s.length;
                for (i = i || J(t, null); --n > -1;) r -= parseFloat(tt(t, "padding" + s[n], i, !0)) || 0, r -= parseFloat(tt(t, "border" + s[n] + "Width", i, !0)) || 0;
                return r
              },
              lt = function (t, e) {
                if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                null != t && "" !== t || (t = "0 0");
                var i, r = t.split(" "),
                  s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0],
                  n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                if (r.length > 3 && !e) {
                  for (r = t.split(", ").join(",").split(","), t = [], i = 0; i < r.length; i++) t.push(lt(r[i]));
                  return t.join(",")
                }
                return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"), ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"), t = s + " " + n + (r.length > 2 ? " " + r[2] : ""), e && (e.oxp = -1 !== s.indexOf("%"), e.oyp = -1 !== n.indexOf("%"), e.oxr = "=" === s.charAt(1), e.oyr = "=" === n.charAt(1), e.ox = parseFloat(s.replace(E, "")), e.oy = parseFloat(n.replace(E, "")), e.v = t), e || t
              },
              ht = function (t, e) {
                return "function" == typeof t && (t = t(y, v)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
              },
              pt = function (t, e) {
                return "function" == typeof t && (t = t(y, v)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
              },
              ct = function (t, e, i, r) {
                var s, n, a, o, l;
                return "function" == typeof t && (t = t(y, v)), null == t ? o = e : "number" == typeof t ? o = t : (s = 360, n = t.split("_"), l = "=" === t.charAt(1), a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(n[0].substr(2)) : parseFloat(n[0])) * (-1 === t.indexOf("rad") ? 1 : V) - (l ? 0 : e), n.length && (r && (r[i] = e + a), -1 !== t.indexOf("short") && (a %= s) !== a % (s / 2) && (a = a < 0 ? a + s : a - s), -1 !== t.indexOf("_cw") && a < 0 ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : -1 !== t.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)), o = e + a), o < 1e-6 && o > -1e-6 && (o = 0), o
              },
              dt = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0]
              },
              ut = function (t, e, i) {
                return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
              },
              ft = o.parseColor = function (t, e) {
                var i, r, s, n, a, o, l, h, p, c, d;
                if (t)
                  if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                  else {
                    if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), dt[t]) i = dt[t];
                    else if ("#" === t.charAt(0)) 4 === t.length && (r = t.charAt(1), s = t.charAt(2), n = t.charAt(3), t = "#" + r + r + s + s + n + n), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                    else if ("hsl" === t.substr(0, 3))
                      if (i = d = t.match(_), e) {
                        if (-1 !== t.indexOf("=")) return t.match(b)
                      } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, l = Number(i[2]) / 100, s = l <= .5 ? l * (o + 1) : l + o - l * o, r = 2 * l - s, i.length > 3 && (i[3] = Number(i[3])), i[0] = ut(a + 1 / 3, r, s), i[1] = ut(a, r, s), i[2] = ut(a - 1 / 3, r, s);
                    else i = t.match(_) || dt.transparent;
                    i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                  }
                else i = dt.black;
                return e && !d && (r = i[0] / 255, s = i[1] / 255, n = i[2] / 255, h = Math.max(r, s, n), p = Math.min(r, s, n), l = (h + p) / 2, h === p ? a = o = 0 : (c = h - p, o = l > .5 ? c / (2 - h - p) : c / (h + p), a = h === r ? (s - n) / c + (s < n ? 6 : 0) : h === s ? (n - r) / c + 2 : (r - s) / c + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
              },
              mt = function (t, e) {
                var i, r, s, n = t.match(gt) || [],
                  a = 0,
                  o = "";
                if (!n.length) return t;
                for (i = 0; i < n.length; i++) r = n[i], s = t.substr(a, t.indexOf(r, a) - a), a += s.length + r.length, r = ft(r, e), 3 === r.length && r.push(1), o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                return o + t.substr(a)
              },
              gt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
            for (p in dt) gt += "|" + p + "\\b";
            gt = new RegExp(gt + ")", "gi"), o.colorStringFilter = function (t) {
              var e, i = t[0] + " " + t[1];
              gt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = mt(t[0], e), t[1] = mt(t[1], e)), gt.lastIndex = 0
            }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
            var vt = function (t, e, i, r) {
                if (null == t) return function (t) {
                  return t
                };
                var s, n = e ? (t.match(gt) || [""])[0] : "",
                  a = t.split(n).join("").match(T) || [],
                  o = t.substr(0, t.indexOf(a[0])),
                  l = ")" === t.charAt(t.length - 1) ? ")" : "",
                  h = -1 !== t.indexOf(" ") ? " " : ",",
                  p = a.length,
                  c = p > 0 ? a[0].replace(_, "") : "";
                return p ? s = e ? function (t) {
                  var e, d, u, f;
                  if ("number" == typeof t) t += c;
                  else if (r && R.test(t)) {
                    for (f = t.replace(R, "|").split("|"), u = 0; u < f.length; u++) f[u] = s(f[u]);
                    return f.join(",")
                  }
                  if (e = (t.match(gt) || [n])[0], d = t.split(e).join("").match(T) || [], u = d.length, p > u--)
                    for (; ++u < p;) d[u] = i ? d[(u - 1) / 2 | 0] : a[u];
                  return o + d.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                } : function (t) {
                  var e, n, d;
                  if ("number" == typeof t) t += c;
                  else if (r && R.test(t)) {
                    for (n = t.replace(R, "|").split("|"), d = 0; d < n.length; d++) n[d] = s(n[d]);
                    return n.join(",")
                  }
                  if (e = t.match(T) || [], d = e.length, p > d--)
                    for (; ++d < p;) e[d] = i ? e[(d - 1) / 2 | 0] : a[d];
                  return o + e.join(h) + l
                } : function (t) {
                  return t
                }
              },
              yt = function (t) {
                return t = t.split(","),
                  function (e, i, r, s, n, a, o) {
                    var l, h = (i + "").split(" ");
                    for (o = {}, l = 0; l < 4; l++) o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                    return s.parse(e, o, n, a)
                  }
              },
              _t = ($._setPluginRatio = function (t) {
                this.plugin.setRatio(t);
                for (var e, i, r, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l;) e = o[l.v], l.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation), 1 === t || 0 === t)
                  for (l = a.firstMPT, n = 1 === t ? "e" : "b"; l;) {
                    if (i = l.t, i.type) {
                      if (1 === i.type) {
                        for (s = i.xs0 + i.s + i.xs1, r = 1; r < i.l; r++) s += i["xn" + r] + i["xs" + (r + 1)];
                        i[n] = s
                      }
                    } else i[n] = i.s + i.xs0;
                    l = l._next
                  }
              }, function (t, e, i, r, s) {
                this.t = t, this.p = e, this.v = i, this.r = s, r && (r._prev = this, this._next = r)
              }),
              bt = ($._parseToProxy = function (t, e, i, r, s, n) {
                var a, o, l, h, p, c = r,
                  d = {},
                  u = {},
                  f = i._transform,
                  m = B;
                for (i._transform = null, B = e, r = p = i.parse(t, e, r, s), B = m, n && (i._transform = f, c && (c._prev = null, c._prev && (c._prev._next = null))); r && r !== c;) {
                  if (r.type <= 1 && (o = r.p, u[o] = r.s + r.c, d[o] = r.s, n || (h = new _t(r, "s", o, h, r.r), r.c = 0), 1 === r.type))
                    for (a = r.l; --a > 0;) l = "xn" + a, o = r.p + "_" + l, u[o] = r.data[l], d[o] = r[l], n || (h = new _t(r, l, o, h, r.rxp[l]));
                  r = r._next
                }
                return {
                  proxy: d,
                  end: u,
                  firstMPT: h,
                  pt: p
                }
              }, $.CSSPropTween = function (t, e, r, s, n, o, l, h, p, c, d) {
                this.t = t, this.p = e, this.s = r, this.c = s, this.n = l || e, t instanceof bt || a.push(this.n), this.r = h, this.type = o || 0, p && (this.pr = p, i = !0), this.b = void 0 === c ? r : c, this.e = void 0 === d ? r + s : d, n && (this._next = n, n._prev = this)
              }),
              Tt = function (t, e, i, r, s, n) {
                var a = new bt(t, e, i, r - i, s, -1, n);
                return a.b = i, a.e = a.xs0 = r, a
              },
              Et = o.parseComplex = function (t, e, i, r, s, n, a, l, h, p) {
                i = i || n || "", "function" == typeof r && (r = r(y, v)), a = new bt(t, e, 0, 0, a, p ? 2 : 1, null, !1, l, i, r), r += "", s && gt.test(r + i) && (r = [i, r], o.colorStringFilter(r), i = r[0], r = r[1]);
                var d, u, f, m, g, T, E, w, x, S, C, P, A, k = i.split(", ").join(",").split(" "),
                  D = r.split(", ").join(",").split(" "),
                  M = k.length,
                  I = !1 !== c;
                for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (k = k.join(" ").replace(R, ", ").split(" "), D = D.join(" ").replace(R, ", ").split(" ")) : (k = k.join(" ").split(",").join(", ").split(" "), D = D.join(" ").split(",").join(", ").split(" ")), M = k.length), M !== D.length && (k = (n || "").split(" "), M = k.length), a.plugin = h, a.setRatio = p, gt.lastIndex = 0, d = 0; d < M; d++)
                  if (m = k[d], g = D[d], (w = parseFloat(m)) || 0 === w) a.appendXtra("", w, ht(g, w), g.replace(b, ""), I && -1 !== g.indexOf("px"), !0);
                  else if (s && gt.test(m)) P = g.indexOf(")") + 1, P = ")" + (P ? g.substr(P) : ""), A = -1 !== g.indexOf("hsl") && Y, S = g, m = ft(m, A), g = ft(g, A), x = m.length + g.length > 6, x && !Y && 0 === g[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(D[d]).join("transparent")) : (Y || (x = !1), A ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (x ? "hsla(" : "hsl("), m[0], ht(g[0], m[0]), ",", !1, !0).appendXtra("", m[1], ht(g[1], m[1]), "%,", !1).appendXtra("", m[2], ht(g[2], m[2]), x ? "%," : "%" + P, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (x ? "rgba(" : "rgb("), m[0], g[0] - m[0], ",", !0, !0).appendXtra("", m[1], g[1] - m[1], ",", !0).appendXtra("", m[2], g[2] - m[2], x ? "," : P, !0), x && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (g.length < 4 ? 1 : g[3]) - m, P, !1))), gt.lastIndex = 0;
                else if (T = m.match(_)) {
                  if (!(E = g.match(b)) || E.length !== T.length) return a;
                  for (f = 0, u = 0; u < T.length; u++) C = T[u], S = m.indexOf(C, f), a.appendXtra(m.substr(f, S - f), Number(C), ht(E[u], C), "", I && "px" === m.substr(S + C.length, 2), 0 === u), f = S + C.length;
                  a["xs" + a.l] += m.substr(f)
                } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + g : g;
                if (-1 !== r.indexOf("=") && a.data) {
                  for (P = a.xs0 + a.data.s, d = 1; d < a.l; d++) P += a["xs" + d] + a.data["xn" + d];
                  a.e = P + a["xs" + d]
                }
                return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
              },
              wt = 9;
            for (p = bt.prototype, p.l = p.pr = 0; --wt > 0;) p["xn" + wt] = 0, p["xs" + wt] = "";
            p.xs0 = "", p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null, p.appendXtra = function (t, e, i, r, s, n) {
              var a = this,
                o = a.l;
              return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = r || "", o > 0 ? (a.data["xn" + o] = e + i, a.rxp["xn" + o] = s, a["xn" + o] = e, a.plugin || (a.xfirst = new bt(a, "xn" + o, e, i, a.xfirst || a, 0, a.n, s, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
                s: e + i
              }, a.rxp = {}, a.s = e, a.c = i, a.r = s, a)) : (a["xs" + o] += e + (r || ""), a)
            };
            var xt = function (t, e) {
                e = e || {}, this.p = e.prefix ? Z(t) || t : t, h[t] = h[this.p] = this, this.format = e.formatter || vt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
              },
              St = $._registerComplexSpecialProp = function (t, e, i) {
                "object" != typeof e && (e = {
                  parser: i
                });
                var r, s = t.split(","),
                  n = e.defaultValue;
                for (i = i || [n], r = 0; r < s.length; r++) e.prefix = 0 === r && e.prefix, e.defaultValue = i[r] || n, new xt(s[r], e)
              },
              Ct = $._registerPluginProp = function (t) {
                if (!h[t]) {
                  var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                  St(t, {
                    parser: function (t, i, r, s, n, a, o) {
                      var p = l.com.greensock.plugins[e];
                      return p ? (p._cssRegister(), h[r].parse(t, i, r, s, n, a, o)) : (q("Error: " + e + " js file not loaded."), n)
                    }
                  })
                }
              };
            p = xt.prototype, p.parseComplex = function (t, e, i, r, s, n) {
              var a, o, l, h, p, c, d = this.keyword;
              if (this.multi && (R.test(i) || R.test(e) ? (o = e.replace(R, "|").split("|"), l = i.replace(R, "|").split("|")) : d && (o = [e], l = [i])), l) {
                for (h = l.length > o.length ? l.length : o.length, a = 0; a < h; a++) e = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, d && (p = e.indexOf(d), c = i.indexOf(d), p !== c && (-1 === c ? o[a] = o[a].split(d).join("") : -1 === p && (o[a] += " " + d)));
                e = o.join(", "), i = l.join(", ")
              }
              return Et(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
            }, p.parse = function (t, e, i, r, n, a, o) {
              return this.parseComplex(t.style, this.format(tt(t, this.p, s, !1, this.dflt)), this.format(e), n, a)
            }, o.registerSpecialProp = function (t, e, i) {
              St(t, {
                parser: function (t, r, s, n, a, o, l) {
                  var h = new bt(t, s, 0, 0, a, 2, s, !1, i);
                  return h.plugin = o, h.setRatio = e(t, r, n._tween, s), h
                },
                priority: i
              })
            }, o.useSVGTransformAttr = !0;
            var Pt, At = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
              kt = Z("transform"),
              Dt = K + "transform",
              Mt = Z("transformOrigin"),
              It = null !== Z("perspective"),
              Ot = $.Transform = function () {
                this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !It) && (o.defaultForce3D || "auto")
              },
              Ft = n.SVGElement,
              Rt = function (t, e, i) {
                var r, s = H.createElementNS("http://www.w3.org/2000/svg", t),
                  n = /([a-z])([A-Z])/g;
                for (r in i) s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                return e.appendChild(s), s
              },
              Nt = H.documentElement || {},
              Lt = function () {
                var t, e, i, r = g || /Android/i.test(X) && !n.chrome;
                return H.createElementNS && !r && (t = Rt("svg", Nt), e = Rt("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100
                }), i = e.getBoundingClientRect().width, e.style[Mt] = "50% 50%", e.style[kt] = "scaleX(0.5)", r = i === e.getBoundingClientRect().width && !(f && It), Nt.removeChild(t)), r
              }(),
              Vt = function (t, e, i, r, s, n) {
                var a, l, h, p, c, d, u, f, m, g, v, y, _, b, T = t._gsTransform,
                  E = Gt(t, !0);
                T && (_ = T.xOrigin, b = T.yOrigin), (!r || (a = r.split(" ")).length < 2) && (u = t.getBBox(), 0 === u.x && 0 === u.y && u.width + u.height === 0 && (u = {
                  x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                  y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                  width: 0,
                  height: 0
                }), e = lt(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * u.width : parseFloat(e[0])) + u.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * u.height : parseFloat(e[1])) + u.y]), i.xOrigin = p = parseFloat(a[0]), i.yOrigin = c = parseFloat(a[1]), r && E !== jt && (d = E[0], u = E[1], f = E[2], m = E[3], g = E[4], v = E[5], (y = d * m - u * f) && (l = p * (m / y) + c * (-f / y) + (f * v - m * g) / y, h = p * (-u / y) + c * (d / y) - (d * v - u * g) / y, p = i.xOrigin = a[0] = l, c = i.yOrigin = a[1] = h)), T && (n && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = p - _, h = c - b, T.xOffset += l * E[0] + h * E[2] - l, T.yOffset += l * E[1] + h * E[3] - h) : T.xOffset = T.yOffset = 0), n || t.setAttribute("data-svg-origin", a.join(" "))
              },
              Bt = function (t) {
                var e, i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                  r = this.parentNode,
                  s = this.nextSibling,
                  n = this.style.cssText;
                if (Nt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                  e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt
                } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                return s ? r.insertBefore(this, s) : r.appendChild(this), Nt.removeChild(i), this.style.cssText = n, e
              },
              zt = function (t) {
                try {
                  return t.getBBox()
                } catch (e) {
                  return Bt.call(t, !0)
                }
              },
              Ht = function (t) {
                return !(!Ft || !t.getCTM || t.parentNode && !t.ownerSVGElement || !zt(t))
              },
              jt = [1, 0, 0, 1, 0, 0],
              Gt = function (t, e) {
                var i, r, s, n, a, o, l = t._gsTransform || new Ot,
                  h = t.style;
                if (kt ? r = tt(t, Dt, null, !0) : t.currentStyle && (r = t.currentStyle.filter.match(O), r = r && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, !kt || !(o = !J(t) || "none" === J(t).display) && t.parentNode || (o && (n = h.display, h.display = "block"), t.parentNode || (a = 1, Nt.appendChild(t)), r = tt(t, Dt, null, !0), i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r, n ? h.display = n : o && Ut(h, "display"), a && Nt.removeChild(t)), (l.svg || t.getCTM && Ht(t)) && (i && -1 !== (h[kt] + "").indexOf("matrix") && (r = h[kt], i = 0), s = t.getAttribute("transform"), i && s && (s = t.transform.baseVal.consolidate().matrix, r = "matrix(" + s.a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")", i = 0)), i) return jt;
                for (s = (r || "").match(_) || [], wt = s.length; --wt > -1;) n = Number(s[wt]), s[wt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
              },
              Wt = $.getTransform = function (t, i, r, s) {
                if (t._gsTransform && r && !s) return t._gsTransform;
                var n, a, l, h, p, c, d = r ? t._gsTransform || new Ot : new Ot,
                  u = d.scaleX < 0,
                  f = It ? parseFloat(tt(t, Mt, i, !1, "0 0 0").split(" ")[2]) || d.zOrigin || 0 : 0,
                  m = parseFloat(o.defaultTransformPerspective) || 0;
                if (d.svg = !(!t.getCTM || !Ht(t)), d.svg && (Vt(t, tt(t, Mt, i, !1, "50% 50%") + "", d, t.getAttribute("data-svg-origin")), Pt = o.useSVGTransformAttr || Lt), (n = Gt(t)) !== jt) {
                  if (16 === n.length) {
                    var g, v, y, _, b, T = n[0],
                      E = n[1],
                      w = n[2],
                      x = n[3],
                      S = n[4],
                      C = n[5],
                      P = n[6],
                      A = n[7],
                      k = n[8],
                      D = n[9],
                      M = n[10],
                      I = n[12],
                      O = n[13],
                      F = n[14],
                      R = n[11],
                      N = Math.atan2(P, M);
                    d.zOrigin && (F = -d.zOrigin, I = k * F - n[12], O = D * F - n[13], F = M * F + d.zOrigin - n[14]), d.rotationX = N * V, N && (_ = Math.cos(-N), b = Math.sin(-N), g = S * _ + k * b, v = C * _ + D * b, y = P * _ + M * b, k = S * -b + k * _, D = C * -b + D * _, M = P * -b + M * _, R = A * -b + R * _, S = g, C = v, P = y), N = Math.atan2(-w, M), d.rotationY = N * V, N && (_ = Math.cos(-N), b = Math.sin(-N), g = T * _ - k * b, v = E * _ - D * b, y = w * _ - M * b, D = E * b + D * _, M = w * b + M * _, R = x * b + R * _, T = g, E = v, w = y), N = Math.atan2(E, T), d.rotation = N * V, N && (_ = Math.cos(N), b = Math.sin(N), g = T * _ + E * b, v = S * _ + C * b, y = k * _ + D * b, E = E * _ - T * b, C = C * _ - S * b, D = D * _ - k * b, T = g, S = v, k = y), d.rotationX && Math.abs(d.rotationX) + Math.abs(d.rotation) > 359.9 && (d.rotationX = d.rotation = 0, d.rotationY = 180 - d.rotationY), N = Math.atan2(S, C), d.scaleX = (1e5 * Math.sqrt(T * T + E * E + w * w) + .5 | 0) / 1e5, d.scaleY = (1e5 * Math.sqrt(C * C + P * P) + .5 | 0) / 1e5, d.scaleZ = (1e5 * Math.sqrt(k * k + D * D + M * M) + .5 | 0) / 1e5, T /= d.scaleX, S /= d.scaleY, E /= d.scaleX, C /= d.scaleY, Math.abs(N) > 2e-5 ? (d.skewX = N * V, S = 0, "simple" !== d.skewType && (d.scaleY *= 1 / Math.cos(N))) : d.skewX = 0, d.perspective = R ? 1 / (R < 0 ? -R : R) : 0, d.x = I, d.y = O, d.z = F, d.svg && (d.x -= d.xOrigin - (d.xOrigin * T - d.yOrigin * S), d.y -= d.yOrigin - (d.yOrigin * E - d.xOrigin * C))
                  } else if (!It || s || !n.length || d.x !== n[4] || d.y !== n[5] || !d.rotationX && !d.rotationY) {
                    var L = n.length >= 6,
                      B = L ? n[0] : 1,
                      z = n[1] || 0,
                      H = n[2] || 0,
                      j = L ? n[3] : 1;
                    d.x = n[4] || 0, d.y = n[5] || 0, l = Math.sqrt(B * B + z * z), h = Math.sqrt(j * j + H * H), p = B || z ? Math.atan2(z, B) * V : d.rotation || 0, c = H || j ? Math.atan2(H, j) * V + p : d.skewX || 0, d.scaleX = l, d.scaleY = h, d.rotation = p, d.skewX = c, It && (d.rotationX = d.rotationY = d.z = 0, d.perspective = m, d.scaleZ = 1), d.svg && (d.x -= d.xOrigin - (d.xOrigin * B + d.yOrigin * H), d.y -= d.yOrigin - (d.xOrigin * z + d.yOrigin * j))
                  }
                  Math.abs(d.skewX) > 90 && Math.abs(d.skewX) < 270 && (u ? (d.scaleX *= -1, d.skewX += d.rotation <= 0 ? 180 : -180, d.rotation += d.rotation <= 0 ? 180 : -180) : (d.scaleY *= -1, d.skewX += d.skewX <= 0 ? 180 : -180)), d.zOrigin = f;
                  for (a in d) d[a] < 2e-5 && d[a] > -2e-5 && (d[a] = 0)
                }
                return r && (t._gsTransform = d, d.svg && (Pt && t.style[kt] ? e.delayedCall(.001, function () {
                  Ut(t.style, kt)
                }) : !Pt && t.getAttribute("transform") && e.delayedCall(.001, function () {
                  t.removeAttribute("transform")
                }))), d
              },
              $t = function (t) {
                var e, i, r = this.data,
                  s = -r.rotation * L,
                  n = s + r.skewX * L,
                  a = (Math.cos(s) * r.scaleX * 1e5 | 0) / 1e5,
                  o = (Math.sin(s) * r.scaleX * 1e5 | 0) / 1e5,
                  l = (Math.sin(n) * -r.scaleY * 1e5 | 0) / 1e5,
                  h = (Math.cos(n) * r.scaleY * 1e5 | 0) / 1e5,
                  p = this.t.style,
                  c = this.t.currentStyle;
                if (c) {
                  i = o, o = -l, l = -i, e = c.filter, p.filter = "";
                  var d, u, f = this.t.offsetWidth,
                    m = this.t.offsetHeight,
                    v = "absolute" !== c.position,
                    y = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h,
                    _ = r.x + f * r.xPercent / 100,
                    b = r.y + m * r.yPercent / 100;
                  if (null != r.ox && (d = (r.oxp ? f * r.ox * .01 : r.ox) - f / 2, u = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2, _ += d - (d * a + u * o), b += u - (d * l + u * h)), v ? (d = f / 2, u = m / 2, y += ", Dx=" + (d - (d * a + u * o) + _) + ", Dy=" + (u - (d * l + u * h) + b) + ")") : y += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? p.filter = e.replace(F, y) : p.filter = y + " " + e, 0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (v && -1 === y.indexOf("Dx=0, Dy=0") || x.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && p.removeAttribute("filter")), !v) {
                    var T, E, S, C = g < 8 ? 1 : -1;
                    for (d = r.ieOffsetX || 0, u = r.ieOffsetY || 0, r.ieOffsetX = Math.round((f - ((a < 0 ? -a : a) * f + (o < 0 ? -o : o) * m)) / 2 + _), r.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * f)) / 2 + b), wt = 0; wt < 4; wt++) E = at[wt], T = c[E], i = -1 !== T.indexOf("px") ? parseFloat(T) : et(this.t, E, parseFloat(T), T.replace(w, "")) || 0, S = i !== r[E] ? wt < 2 ? -r.ieOffsetX : -r.ieOffsetY : wt < 2 ? d - r.ieOffsetX : u - r.ieOffsetY, p[E] = (r[E] = Math.round(i - S * (0 === wt || 2 === wt ? 1 : C))) + "px"
                  }
                }
              },
              Xt = $.set3DTransformRatio = $.setTransformRatio = function (t) {
                var e, i, r, s, n, a, o, l, h, p, c, d, u, m, g, v, y, _, b, T, E, w, x, S = this.data,
                  C = this.t.style,
                  P = S.rotation,
                  A = S.rotationX,
                  k = S.rotationY,
                  D = S.scaleX,
                  M = S.scaleY,
                  I = S.scaleZ,
                  O = S.x,
                  F = S.y,
                  R = S.z,
                  N = S.svg,
                  V = S.perspective,
                  B = S.force3D,
                  z = S.skewY,
                  H = S.skewX;
                if (z && (H += z, P += z), ((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !R && !V && !k && !A && 1 === I || Pt && N || !It) return void(P || H || N ? (P *= L, w = H * L, x = 1e5, i = Math.cos(P) * D, n = Math.sin(P) * D, r = Math.sin(P - w) * -M, a = Math.cos(P - w) * M, w && "simple" === S.skewType && (e = Math.tan(w - z * L), e = Math.sqrt(1 + e * e), r *= e, a *= e, z && (e = Math.tan(z * L), e = Math.sqrt(1 + e * e), i *= e, n *= e)), N && (O += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, F += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset, Pt && (S.xPercent || S.yPercent) && (g = this.t.getBBox(), O += .01 * S.xPercent * g.width, F += .01 * S.yPercent * g.height), g = 1e-6, O < g && O > -g && (O = 0), F < g && F > -g && (F = 0)), b = (i * x | 0) / x + "," + (n * x | 0) / x + "," + (r * x | 0) / x + "," + (a * x | 0) / x + "," + O + "," + F + ")", N && Pt ? this.t.setAttribute("transform", "matrix(" + b) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + b) : C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + D + ",0,0," + M + "," + O + "," + F + ")");
                if (f && (g = 1e-4, D < g && D > -g && (D = I = 2e-5), M < g && M > -g && (M = I = 2e-5), !V || S.z || S.rotationX || S.rotationY || (V = 0)), P || H) P *= L, v = i = Math.cos(P), y = n = Math.sin(P), H && (P -= H * L, v = Math.cos(P), y = Math.sin(P), "simple" === S.skewType && (e = Math.tan((H - z) * L), e = Math.sqrt(1 + e * e), v *= e, y *= e, S.skewY && (e = Math.tan(z * L), e = Math.sqrt(1 + e * e), i *= e, n *= e))), r = -y, a = v;
                else {
                  if (!(k || A || 1 !== I || V || N)) return void(C[kt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + O + "px," + F + "px," + R + "px)" + (1 !== D || 1 !== M ? " scale(" + D + "," + M + ")" : ""));
                  i = a = 1, r = n = 0
                }
                p = 1, s = o = l = h = c = d = 0, u = V ? -1 / V : 0, m = S.zOrigin, g = 1e-6, T = ",", E = "0", P = k * L, P && (v = Math.cos(P), y = Math.sin(P), l = -y, c = u * -y, s = i * y, o = n * y, p = v, u *= v, i *= v, n *= v), P = A * L, P && (v = Math.cos(P), y = Math.sin(P), e = r * v + s * y, _ = a * v + o * y, h = p * y, d = u * y, s = r * -y + s * v, o = a * -y + o * v, p *= v, u *= v, r = e, a = _), 1 !== I && (s *= I, o *= I, p *= I, u *= I), 1 !== M && (r *= M, a *= M, h *= M, d *= M), 1 !== D && (i *= D, n *= D, l *= D, c *= D), (m || N) && (m && (O += s * -m, F += o * -m, R += p * -m + m), N && (O += S.xOrigin - (S.xOrigin * i + S.yOrigin * r) + S.xOffset, F += S.yOrigin - (S.xOrigin * n + S.yOrigin * a) + S.yOffset), O < g && O > -g && (O = E), F < g && F > -g && (F = E), R < g && R > -g && (R = 0)), b = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", b += (i < g && i > -g ? E : i) + T + (n < g && n > -g ? E : n) + T + (l < g && l > -g ? E : l), b += T + (c < g && c > -g ? E : c) + T + (r < g && r > -g ? E : r) + T + (a < g && a > -g ? E : a), A || k || 1 !== I ? (b += T + (h < g && h > -g ? E : h) + T + (d < g && d > -g ? E : d) + T + (s < g && s > -g ? E : s), b += T + (o < g && o > -g ? E : o) + T + (p < g && p > -g ? E : p) + T + (u < g && u > -g ? E : u) + T) : b += ",0,0,0,0,1,0,", b += O + T + F + T + R + T + (V ? 1 + -R / V : 1) + ")", C[kt] = b
              };
            p = Ot.prototype, p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0, p.scaleX = p.scaleY = p.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
              parser: function (t, e, i, r, n, a, l) {
                if (r._lastParsedTransform === l) return n;
                r._lastParsedTransform = l;
                var h, p = l.scale && "function" == typeof l.scale ? l.scale : 0;
                "function" == typeof l[i] && (h = l[i], l[i] = e), p && (l.scale = p(y, t));
                var c, d, u, f, m, g, _, b, T, E = t._gsTransform,
                  w = t.style,
                  x = At.length,
                  S = l,
                  C = {},
                  P = Wt(t, s, !0, S.parseTransform),
                  A = S.transform && ("function" == typeof S.transform ? S.transform(y, v) : S.transform);
                if (P.skewType = S.skewType || P.skewType || o.defaultSkewType, r._transform = P, A && "string" == typeof A && kt) d = G.style, d[kt] = A, d.display = "block", d.position = "absolute", H.body.appendChild(G), c = Wt(G, null, !1), "simple" === P.skewType && (c.scaleY *= Math.cos(c.skewX * L)), P.svg && (g = P.xOrigin, _ = P.yOrigin, c.x -= P.xOffset, c.y -= P.yOffset, (S.transformOrigin || S.svgOrigin) && (A = {}, Vt(t, lt(S.transformOrigin), A, S.svgOrigin, S.smoothOrigin, !0), g = A.xOrigin, _ = A.yOrigin, c.x -= A.xOffset - P.xOffset, c.y -= A.yOffset - P.yOffset), (g || _) && (b = Gt(G, !0), c.x -= g - (g * b[0] + _ * b[2]), c.y -= _ - (g * b[1] + _ * b[3]))), H.body.removeChild(G), c.perspective || (c.perspective = P.perspective), null != S.xPercent && (c.xPercent = pt(S.xPercent, P.xPercent)), null != S.yPercent && (c.yPercent = pt(S.yPercent, P.yPercent));
                else if ("object" == typeof S) {
                  if (c = {
                      scaleX: pt(null != S.scaleX ? S.scaleX : S.scale, P.scaleX),
                      scaleY: pt(null != S.scaleY ? S.scaleY : S.scale, P.scaleY),
                      scaleZ: pt(S.scaleZ, P.scaleZ),
                      x: pt(S.x, P.x),
                      y: pt(S.y, P.y),
                      z: pt(S.z, P.z),
                      xPercent: pt(S.xPercent, P.xPercent),
                      yPercent: pt(S.yPercent, P.yPercent),
                      perspective: pt(S.transformPerspective, P.perspective)
                    }, null != (m = S.directionalRotation))
                    if ("object" == typeof m)
                      for (d in m) S[d] = m[d];
                    else S.rotation = m;
                  "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = pt(S.x, P.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = pt(S.y, P.yPercent)), c.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : P.rotation, P.rotation, "rotation", C), It && (c.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : P.rotationX || 0, P.rotationX, "rotationX", C), c.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : P.rotationY || 0, P.rotationY, "rotationY", C)), c.skewX = ct(S.skewX, P.skewX), c.skewY = ct(S.skewY, P.skewY)
                }
                for (It && null != S.force3D && (P.force3D = S.force3D, f = !0), u = P.force3D || P.z || P.rotationX || P.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, u || null == S.scale || (c.scaleZ = 1); --x > -1;) T = At[x], ((A = c[T] - P[T]) > 1e-6 || A < -1e-6 || null != S[T] || null != B[T]) && (f = !0, n = new bt(P, T, P[T], A, n), T in C && (n.e = C[T]), n.xs0 = 0, n.plugin = a, r._overwriteProps.push(n.n));
                return A = S.transformOrigin, P.svg && (A || S.svgOrigin) && (g = P.xOffset, _ = P.yOffset, Vt(t, lt(A), c, S.svgOrigin, S.smoothOrigin), n = Tt(P, "xOrigin", (E ? P : c).xOrigin, c.xOrigin, n, "transformOrigin"), n = Tt(P, "yOrigin", (E ? P : c).yOrigin, c.yOrigin, n, "transformOrigin"), g === P.xOffset && _ === P.yOffset || (n = Tt(P, "xOffset", E ? g : P.xOffset, P.xOffset, n, "transformOrigin"), n = Tt(P, "yOffset", E ? _ : P.yOffset, P.yOffset, n, "transformOrigin")), A = "0px 0px"), (A || It && u && P.zOrigin) && (kt ? (f = !0, T = Mt, A = (A || tt(t, T, s, !1, "50% 50%")) + "", n = new bt(w, T, 0, 0, n, -1, "transformOrigin"), n.b = w[T], n.plugin = a, It ? (d = P.zOrigin, A = A.split(" "), P.zOrigin = (A.length > 2 && (0 === d || "0px" !== A[2]) ? parseFloat(A[2]) : d) || 0, n.xs0 = n.e = A[0] + " " + (A[1] || "50%") + " 0px", n = new bt(P, "zOrigin", 0, 0, n, -1, n.n), n.b = d, n.xs0 = n.e = P.zOrigin) : n.xs0 = n.e = A) : lt(A + "", P)), f && (r._transformType = P.svg && Pt || !u && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), p && (l.scale = p), n
              },
              prefix: !0
            }), St("boxShadow", {
              defaultValue: "0px 0px 0px 0px #999",
              prefix: !0,
              color: !0,
              multi: !0,
              keyword: "inset"
            }), St("borderRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, n, a, o) {
                e = this.format(e);
                var l, h, p, c, d, u, f, m, g, v, y, _, b, T, E, w, x = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                  S = t.style;
                for (g = parseFloat(t.offsetWidth), v = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < x.length; h++) this.p.indexOf("border") && (x[h] = Z(x[h])), d = c = tt(t, x[h], s, !1, "0px"), -1 !== d.indexOf(" ") && (c = d.split(" "), d = c[0], c = c[1]), u = p = l[h], f = parseFloat(d), _ = d.substr((f + "").length), b = "=" === u.charAt(1), b ? (m = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), m *= parseFloat(u), y = u.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(u), y = u.substr((m + "").length)), "" === y && (y = r[i] || _), y !== _ && (T = et(t, "borderLeft", f, _), E = et(t, "borderTop", f, _), "%" === y ? (d = T / g * 100 + "%", c = E / v * 100 + "%") : "em" === y ? (w = et(t, "borderLeft", 1, "em"), d = T / w + "em", c = E / w + "em") : (d = T + "px", c = E + "px"), b && (u = parseFloat(d) + m + y, p = parseFloat(c) + m + y)), a = Et(S, x[h], d + " " + c, u + " " + p, !1, "0px", a);
                return a
              },
              prefix: !0,
              formatter: vt("0px 0px 0px 0px", !1, !0)
            }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (t, e, i, r, n, a) {
                return Et(t.style, i, this.format(tt(t, i, s, !1, "0px 0px")), this.format(e), !1, "0px", n)
              },
              prefix: !0,
              formatter: vt("0px 0px", !1, !0)
            }), St("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (t, e, i, r, n, a) {
                var o, l, h, p, c, d, u = "background-position",
                  f = s || J(t, null),
                  m = this.format((f ? g ? f.getPropertyValue(u + "-x") + " " + f.getPropertyValue(u + "-y") : f.getPropertyValue(u) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                  v = this.format(e);
                if (-1 !== m.indexOf("%") != (-1 !== v.indexOf("%")) && v.split(",").length < 2 && (d = tt(t, "backgroundImage").replace(D, "")) && "none" !== d) {
                  for (o = m.split(" "), l = v.split(" "), W.setAttribute("src", d), h = 2; --h > -1;) m = o[h], (p = -1 !== m.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (c = 0 === h ? t.offsetWidth - W.width : t.offsetHeight - W.height, o[h] = p ? parseFloat(m) / 100 * c + "px" : parseFloat(m) / c * 100 + "%");
                  m = o.join(" ")
                }
                return this.parseComplex(t.style, m, v, n, a)
              },
              formatter: lt
            }), St("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (t) {
                return t += "", lt(-1 === t.indexOf(" ") ? t + " " + t : t)
              }
            }), St("perspective", {
              defaultValue: "0px",
              prefix: !0
            }), St("perspectiveOrigin", {
              defaultValue: "50% 50%",
              prefix: !0
            }), St("transformStyle", {
              prefix: !0
            }), St("backfaceVisibility", {
              prefix: !0
            }), St("userSelect", {
              prefix: !0
            }), St("margin", {
              parser: yt("marginTop,marginRight,marginBottom,marginLeft")
            }), St("padding", {
              parser: yt("paddingTop,paddingRight,paddingBottom,paddingLeft")
            }), St("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (t, e, i, r, n, a) {
                var o, l, h;
                return g < 9 ? (l = t.currentStyle, h = g < 8 ? " " : ",", o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, s, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, o, e, n, a)
              }
            }), St("textShadow", {
              defaultValue: "0px 0px 0px #999",
              color: !0,
              multi: !0
            }), St("autoRound,strictUnits", {
              parser: function (t, e, i, r, s) {
                return s
              }
            }), St("border", {
              defaultValue: "0px solid #000",
              parser: function (t, e, i, r, n, a) {
                var o = tt(t, "borderTopWidth", s, !1, "0px"),
                  l = this.format(e).split(" "),
                  h = l[0].replace(w, "");
                return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", s, !1, "solid") + " " + tt(t, "borderTopColor", s, !1, "#000")), l.join(" "), n, a)
              },
              color: !0,
              formatter: function (t) {
                var e = t.split(" ");
                return e[0] + " " + (e[1] || "solid") + " " + (t.match(gt) || ["#000"])[0]
              }
            }), St("borderWidth", {
              parser: yt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
            }), St("float,cssFloat,styleFloat", {
              parser: function (t, e, i, r, s, n) {
                var a = t.style,
                  o = "cssFloat" in a ? "cssFloat" : "styleFloat";
                return new bt(a, o, 0, 0, s, -1, i, !1, 0, a[o], e)
              }
            });
            var Yt = function (t) {
              var e, i = this.t,
                r = i.filter || tt(this.data, "filter") || "",
                s = this.s + this.c * t | 0;
              100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = r.replace(C, ""), e = !0)), e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"), -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(x, "opacity=" + s))
            };
            St("opacity,alpha,autoAlpha", {
              defaultValue: "1",
              parser: function (t, e, i, r, n, a) {
                var o = parseFloat(tt(t, "opacity", s, !1, "1")),
                  l = t.style,
                  h = "autoAlpha" === i;
                return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o), h && 1 === o && "hidden" === tt(t, "visibility", s) && 0 !== e && (o = 0), Y ? n = new bt(l, "opacity", o, e - o, n) : (n = new bt(l, "opacity", 100 * o, 100 * (e - o), n), n.xn1 = h ? 1 : 0, l.zoom = 1, n.type = 2, n.b = "alpha(opacity=" + n.s + ")", n.e = "alpha(opacity=" + (n.s + n.c) + ")", n.data = t, n.plugin = a, n.setRatio = Yt), h && (n = new bt(l, "visibility", 0, 0, n, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), n.xs0 = "inherit", r._overwriteProps.push(n.n), r._overwriteProps.push(i)), n
              }
            });
            var Ut = function (t, e) {
                e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(A, "-$1").toLowerCase())) : t.removeAttribute(e))
              },
              qt = function (t) {
                if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                  this.t.setAttribute("class", 0 === t ? this.b : this.e);
                  for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ut(i, e.p), e = e._next;
                  1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
              };
            St("className", {
              parser: function (t, e, r, n, a, o, l) {
                var h, p, c, d, u, f = t.getAttribute("class") || "",
                  m = t.style.cssText;
                if (a = n._classNamePT = new bt(t, r, 0, 0, a, 2), a.setRatio = qt, a.pr = -11, i = !0, a.b = f, p = rt(t, s), c = t._gsClassPT) {
                  for (d = {}, u = c.data; u;) d[u.p] = 1, u = u._next;
                  c.setRatio(1)
                }
                return t._gsClassPT = a, a.e = "=" !== e.charAt(1) ? e : f.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", a.e), h = st(t, p, rt(t), l, d), t.setAttribute("class", f), a.data = h.firstMPT, t.style.cssText = m, a = a.xfirst = n.parse(t, h.difs, a, o)
              }
            });
            var Kt = function (t) {
              if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var e, i, r, s, n, a = this.t.style,
                  o = h.transform.parse;
                if ("all" === this.e) a.cssText = "", s = !0;
                else
                  for (e = this.e.split(" ").join("").split(","), r = e.length; --r > -1;) i = e[r], h[i] && (h[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Mt : h[i].p), Ut(a, i);
                s && (Ut(a, kt), (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
              }
            };
            for (St("clearProps", {
                parser: function (t, e, r, s, n) {
                  return n = new bt(t, r, 0, 0, n, 2), n.setRatio = Kt, n.e = e, n.pr = -10, n.data = s._tween, i = !0, n
                }
              }), p = "bezier,throwProps,physicsProps,physics2D".split(","), wt = p.length; wt--;) Ct(p[wt]);
            p = o.prototype, p._firstPT = p._lastParsedTransform = p._transform = null, p._onInitTween = function (t, e, n, l) {
              if (!t.nodeType) return !1;
              this._target = v = t, this._tween = n, this._vars = e, y = l, c = e.autoRound, i = !1, r = e.suffixMap || o.suffixMap, s = J(t, ""), a = this._overwriteProps;
              var p, f, g, _, b, T, E, w, x, C = t.style;
              if (d && "" === C.zIndex && ("auto" !== (p = tt(t, "zIndex", s)) && "" !== p || this._addLazySet(C, "zIndex", 0)), "string" == typeof e && (_ = C.cssText, p = rt(t, s), C.cssText = _ + ";" + e, p = st(t, p, rt(t)).difs, !Y && S.test(e) && (p.opacity = parseFloat(RegExp.$1)), e = p, C.cssText = _), e.className ? this._firstPT = f = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = f = this.parse(t, e, null), this._transformType) {
                for (x = 3 === this._transformType, kt ? u && (d = !0, "" === C.zIndex && ("auto" !== (E = tt(t, "zIndex", s)) && "" !== E || this._addLazySet(C, "zIndex", 0)), m && this._addLazySet(C, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (x ? "visible" : "hidden"))) : C.zoom = 1, g = f; g && g._next;) g = g._next;
                w = new bt(t, "transform", 0, 0, null, 2), this._linkCSSP(w, null, g), w.setRatio = kt ? Xt : $t, w.data = this._transform || Wt(t, s, !0), w.tween = n, w.pr = -1, a.pop()
              }
              if (i) {
                for (; f;) {
                  for (T = f._next, g = _; g && g.pr > f.pr;) g = g._next;
                  (f._prev = g ? g._prev : b) ? f._prev._next = f: _ = f, (f._next = g) ? g._prev = f : b = f, f = T
                }
                this._firstPT = _
              }
              return !0
            }, p.parse = function (t, e, i, n) {
              var a, o, l, p, d, u, f, m, g, _, b = t.style;
              for (a in e) {
                if (u = e[a], "function" == typeof u && (u = u(y, v)), o = h[a]) i = o.parse(t, u, a, this, i, n, e);
                else {
                  if ("--" === a.substr(0, 2)) {
                    this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", u + "", a, !1, a);
                    continue
                  }
                  d = tt(t, a, s) + "", g = "string" == typeof u, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && P.test(u) ? (g || (u = ft(u), u = (u.length > 3 ? "rgba(" : "rgb(") + u.join(",") + ")"), i = Et(b, a, d, u, !0, "transparent", i, 0, n)) : g && N.test(u) ? i = Et(b, a, d, u, !0, null, i, 0, n) : (l = parseFloat(d), f = l || 0 === l ? d.substr((l + "").length) : "", "" !== d && "auto" !== d || ("width" === a || "height" === a ? (l = ot(t, a, s), f = "px") : "left" === a || "top" === a ? (l = it(t, a, s), f = "px") : (l = "opacity" !== a ? 0 : 1, f = "")), _ = g && "=" === u.charAt(1), _ ? (p = parseInt(u.charAt(0) + "1", 10), u = u.substr(2), p *= parseFloat(u), m = u.replace(w, "")) : (p = parseFloat(u), m = g ? u.replace(w, "") : ""), "" === m && (m = a in r ? r[a] : f), u = p || 0 === p ? (_ ? p + l : p) + m : e[a], f !== m && ("" === m && "lineHeight" !== a || (p || 0 === p) && l && (l = et(t, a, l, f), "%" === m ? (l /= et(t, a, 100, "%") / 100, !0 !== e.strictUnits && (d = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= et(t, a, 1, m) : "px" !== m && (p = et(t, a, p, m), m = "px"), _ && (p || 0 === p) && (u = p + l + m))), _ && (p += l), !l && 0 !== l || !p && 0 !== p ? void 0 !== b[a] && (u || u + "" != "NaN" && null != u) ? (i = new bt(b, a, p || l || 0, 0, i, -1, a, !1, 0, d, u), i.xs0 = "none" !== u || "display" !== a && -1 === a.indexOf("Style") ? u : d) : q("invalid " + a + " tween value: " + e[a]) : (i = new bt(b, a, l, p - l, i, 0, a, !1 !== c && ("px" === m || "zIndex" === a), 0, d, u), i.xs0 = m))
                }
                n && i && !i.plugin && (i.plugin = n)
              }
              return i
            }, p.setRatio = function (t) {
              var e, i, r, s = this._firstPT;
              if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                  for (; s;) {
                    if (e = s.c * t + s.s, s.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), s.type)
                      if (1 === s.type)
                        if (2 === (r = s.l)) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                        else if (3 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                    else if (4 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                    else if (5 === r) s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                    else {
                      for (i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                      s.t[s.p] = i
                    } else -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                    else s.t[s.p] = e + s.xs0;
                    s = s._next
                  } else
                    for (; s;) 2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t), s = s._next;
                else
                  for (; s;) {
                    if (2 !== s.type)
                      if (s.r && -1 !== s.type)
                        if (e = Math.round(s.s + s.c), s.type) {
                          if (1 === s.type) {
                            for (r = s.l, i = s.xs0 + e + s.xs1, r = 1; r < s.l; r++) i += s["xn" + r] + s["xs" + (r + 1)];
                            s.t[s.p] = i
                          }
                        } else s.t[s.p] = e + s.xs0;
                    else s.t[s.p] = s.e;
                    else s.setRatio(t);
                    s = s._next
                  }
            }, p._enableTransforms = function (t) {
              this._transform = this._transform || Wt(this._target, s, !0), this._transformType = this._transform.svg && Pt || !t && 3 !== this._transformType ? 2 : 3
            };
            var Qt = function (t) {
              this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
            };
            p._addLazySet = function (t, e, i) {
              var r = this._firstPT = new bt(t, e, 0, 0, this._firstPT, 2);
              r.e = i, r.setRatio = Qt, r.data = this
            }, p._linkCSSP = function (t, e, i, r) {
              return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, r = !0), i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
            }, p._mod = function (t) {
              for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
            }, p._kill = function (e) {
              var i, r, s, n = e;
              if (e.autoAlpha || e.alpha) {
                n = {};
                for (r in e) n[r] = e[r];
                n.opacity = 1, n.autoAlpha && (n.visibility = 1)
              }
              for (e.className && (i = this._classNamePT) && (s = i.xfirst, s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, s._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e), r = i.plugin), i = i._next;
              return t.prototype._kill.call(this, n)
            };
            var Zt = function (t, e, i) {
              var r, s, n, a;
              if (t.slice)
                for (s = t.length; --s > -1;) Zt(t[s], e, i);
              else
                for (r = t.childNodes, s = r.length; --s > -1;) n = r[s], a = n.type, n.style && (e.push(rt(n)), i && i.push(n)), 1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || Zt(n, e, i)
            };
            return o.cascadeTo = function (t, i, r) {
              var s, n, a, o, l = e.to(t, i, r),
                h = [l],
                p = [],
                c = [],
                d = [],
                u = e._internals.reservedProps;
              for (t = l._targets || l.target, Zt(t, p, d), l.render(i, !0, !0), Zt(t, c), l.render(0, !0, !0), l._enabled(!0), s = d.length; --s > -1;)
                if (n = st(d[s], p[s], c[s]), n.firstMPT) {
                  n = n.difs;
                  for (a in r) u[a] && (n[a] = r[a]);
                  o = {};
                  for (a in n) o[a] = p[s][a];
                  h.push(e.fromTo(d[s], i, o, n))
                } return h
            }, t.activate([o]), o
          }, !0),
          function () {
            var t = n._gsDefine.plugin({
                propName: "roundProps",
                version: "1.6.0",
                priority: -1,
                API: 2,
                init: function (t, e, i) {
                  return this._tween = i, !0
                }
              }),
              e = function (t) {
                for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
              },
              i = t.prototype;
            i._onInitAllProps = function () {
              for (var t, i, r, s = this._tween, n = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), a = n.length, o = {}, l = s._propLookup.roundProps; --a > -1;) o[n[a]] = Math.round;
              for (a = n.length; --a > -1;)
                for (t = n[a], i = s._firstPT; i;) r = i._next, i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), r && (r._prev = i._prev), i._prev ? i._prev._next = r : s._firstPT === i && (s._firstPT = r), i._next = i._prev = null, s._propLookup[t] = l)), i = r;
              return !1
            }, i._add = function (t, e, i, r) {
              this._addTween(t, e, i, i + r, e, Math.round), this._overwriteProps.push(e)
            }
          }(),
          function () {
            n._gsDefine.plugin({
              propName: "attr",
              API: 2,
              version: "0.6.1",
              init: function (t, e, i, r) {
                var s, n;
                if ("function" != typeof t.setAttribute) return !1;
                for (s in e) n = e[s], "function" == typeof n && (n = n(r, t)), this._addTween(t, "setAttribute", t.getAttribute(s) + "", n + "", s, !1, s), this._overwriteProps.push(s);
                return !0
              }
            })
          }(), n._gsDefine.plugin({
            propName: "directionalRotation",
            version: "0.3.1",
            API: 2,
            init: function (t, e, i, r) {
              "object" != typeof e && (e = {
                rotation: e
              }), this.finals = {};
              var s, n, a, o, l, h, p = !0 === e.useRadians ? 2 * Math.PI : 360;
              for (s in e) "useRadians" !== s && (o = e[s], "function" == typeof o && (o = o(r, t)), h = (o + "").split("_"), n = h[0], a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()), o = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0, l = o - a, h.length && (n = h.join("_"), -1 !== n.indexOf("short") && (l %= p) !== l % (p / 2) && (l = l < 0 ? l + p : l - p), -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * p) % p - (l / p | 0) * p : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * p) % p - (l / p | 0) * p)), (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, a, a + l, s), this._overwriteProps.push(s)));
              return !0
            },
            set: function (t) {
              var e;
              if (1 !== t) this._super.setRatio.call(this, t);
              else
                for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
            }
          })._autoCSS = !0, n._gsDefine("easing.Back", ["easing.Ease"], function (t) {
            var e, i, r, s, a = n.GreenSockGlobals || n,
              o = a.com.greensock,
              l = 2 * Math.PI,
              h = Math.PI / 2,
              p = o._class,
              c = function (e, i) {
                var r = p("easing." + e, function () {}, !0),
                  s = r.prototype = new t;
                return s.constructor = r, s.getRatio = i, r
              },
              d = t.register || function () {},
              u = function (t, e, i, r, s) {
                var n = p("easing." + t, {
                  easeOut: new e,
                  easeIn: new i,
                  easeInOut: new r
                }, !0);
                return d(n, t), n
              },
              f = function (t, e, i) {
                this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
              },
              m = function (e, i) {
                var r = p("easing." + e, function (t) {
                    this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                  }, !0),
                  s = r.prototype = new t;
                return s.constructor = r, s.getRatio = i, s.config = function (t) {
                  return new r(t)
                }, r
              },
              g = u("Back", m("BackOut", function (t) {
                return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
              }), m("BackIn", function (t) {
                return t * t * ((this._p1 + 1) * t - this._p1)
              }), m("BackInOut", function (t) {
                return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
              })),
              v = p("easing.SlowMo", function (t, e, i) {
                e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
              }, !0),
              y = v.prototype = new t;
            return y.constructor = v, y.getRatio = function (t) {
              var e = t + (.5 - t) * this._p;
              return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }, v.ease = new v(.7, .7), y.config = v.config = function (t, e, i) {
              return new v(t, e, i)
            }, e = p("easing.SteppedEase", function (t, e) {
              t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
            }, !0), y = e.prototype = new t, y.constructor = e, y.getRatio = function (t) {
              return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
            }, y.config = e.config = function (t, i) {
              return new e(t, i)
            }, i = p("easing.ExpoScaleEase", function (t, e, i) {
              this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i
            }, !0), y = i.prototype = new t, y.constructor = i, y.getRatio = function (t) {
              return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }, y.config = i.config = function (t, e, r) {
              return new i(t, e, r)
            }, r = p("easing.RoughEase", function (e) {
              e = e || {};
              for (var i, r, s, n, a, o, l = e.taper || "none", h = [], p = 0, c = 0 | (e.points || 20), d = c, u = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, v = "number" == typeof e.strength ? .4 * e.strength : .4; --d > -1;) i = u ? Math.random() : 1 / c * d, r = g ? g.getRatio(i) : i, "none" === l ? s = v : "out" === l ? (n = 1 - i, s = n * n * v) : "in" === l ? s = i * i * v : i < .5 ? (n = 2 * i, s = n * n * .5 * v) : (n = 2 * (1 - i), s = n * n * .5 * v), u ? r += Math.random() * s - .5 * s : d % 2 ? r += .5 * s : r -= .5 * s, m && (r > 1 ? r = 1 : r < 0 && (r = 0)), h[p++] = {
                x: i,
                y: r
              };
              for (h.sort(function (t, e) {
                  return t.x - e.x
                }), o = new f(1, 1, null), d = c; --d > -1;) a = h[d], o = new f(a.x, a.y, o);
              this._prev = new f(0, 0, 0 !== o.t ? o : o.next)
            }, !0), y = r.prototype = new t, y.constructor = r, y.getRatio = function (t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t;) e = e.next;
                e = e.prev
              } else
                for (; e.prev && t <= e.t;) e = e.prev;
              return this._prev = e, e.v + (t - e.t) / e.gap * e.c
            }, y.config = function (t) {
              return new r(t)
            }, r.ease = new r, u("Bounce", c("BounceOut", function (t) {
              return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }), c("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
            }), c("BounceInOut", function (t) {
              var e = t < .5;
              return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
            })), u("Circ", c("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t)
            }), c("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1)
            }), c("CircInOut", function (t) {
              return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            })), s = function (e, i, r) {
              var s = p("easing." + e, function (t, e) {
                  this._p1 = t >= 1 ? t : 1, this._p2 = (e || r) / (t < 1 ? t : 1), this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0), this._p2 = l / this._p2
                }, !0),
                n = s.prototype = new t;
              return n.constructor = s, n.getRatio = i, n.config = function (t, e) {
                return new s(t, e)
              }, s
            }, u("Elastic", s("ElasticOut", function (t) {
              return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
            }, .3), s("ElasticIn", function (t) {
              return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
            }, .3), s("ElasticInOut", function (t) {
              return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
            }, .45)), u("Expo", c("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t)
            }), c("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - .001
            }), c("ExpoInOut", function (t) {
              return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
            })), u("Sine", c("SineOut", function (t) {
              return Math.sin(t * h)
            }), c("SineIn", function (t) {
              return 1 - Math.cos(t * h)
            }), c("SineInOut", function (t) {
              return -.5 * (Math.cos(Math.PI * t) - 1)
            })), p("easing.EaseLookup", {
              find: function (e) {
                return t.map[e]
              }
            }, !0), d(a.SlowMo, "SlowMo", "ease,"), d(r, "RoughEase", "ease,"), d(e, "SteppedEase", "ease,"), g
          }, !0)
      }), n._gsDefine && n._gsQueue.pop()(),
      function (i, n) {
        "use strict";
        var a = {},
          o = i.document,
          l = i.GreenSockGlobals = i.GreenSockGlobals || i;
        if (!l.TweenLite) {
          var h, p, c, d, u, f = function (t) {
              var e, i = t.split("."),
                r = l;
              for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
              return r
            },
            m = f("com.greensock"),
            g = function (t) {
              var e, i = [],
                r = t.length;
              for (e = 0; e !== r; i.push(t[e++]));
              return i
            },
            v = function () {},
            y = function () {
              var t = Object.prototype.toString,
                e = t.call([]);
              return function (i) {
                return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
              }
            }(),
            _ = {},
            b = function (i, n, o, h) {
              this.sc = _[i] ? _[i].sc : [], _[i] = this, this.gsClass = null, this.func = o;
              var p = [];
              this.check = function (c) {
                for (var d, u, m, g, v = n.length, y = v; --v > -1;)(d = _[n[v]] || new b(n[v], [])).gsClass ? (p[v] = d.gsClass, y--) : c && d.sc.push(this);
                if (0 === y && o) {
                  if (u = ("com.greensock." + i).split("."), m = u.pop(), g = f(u.join("."))[m] = this.gsClass = o.apply(o, p), h)
                    if (l[m] = a[m] = g, void 0 !== t && t.exports)
                      if ("TweenMax" === i) {
                        t.exports = a.TweenMax = g;
                        for (v in a) g[v] = a[v]
                      } else a.TweenMax && (a.TweenMax[m] = g);
                  else r = [], void 0 !== (s = function () {
                    return g
                  }.apply(e, r)) && (t.exports = s);
                  for (v = 0; v < this.sc.length; v++) this.sc[v].check()
                }
              }, this.check(!0)
            },
            T = i._gsDefine = function (t, e, i, r) {
              return new b(t, e, i, r)
            },
            E = m._class = function (t, e, i) {
              return e = e || function () {}, T(t, [], function () {
                return e
              }, i), e
            };
          T.globals = l;
          var w = [0, 0, 1, 1],
            x = E("easing.Ease", function (t, e, i, r) {
              this._func = t, this._type = i || 0, this._power = r || 0, this._params = e ? w.concat(e) : w
            }, !0),
            S = x.map = {},
            C = x.register = function (t, e, i, r) {
              for (var s, n, a, o, l = e.split(","), h = l.length, p = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                for (n = l[h], s = r ? E("easing." + n, null, !0) : m.easing[n] || {}, a = p.length; --a > -1;) o = p[a], S[n + "." + o] = S[o + n] = s[o] = t.getRatio ? t : t[o] || new t
            };
          for (c = x.prototype, c._calcEnd = !1, c.getRatio = function (t) {
              if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
              var e = this._type,
                i = this._power,
                r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
              return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r), 1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
            }, h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], p = h.length; --p > -1;) c = h[p] + ",Power" + p, C(new x(null, null, 1, p), c, "easeOut", !0), C(new x(null, null, 2, p), c, "easeIn" + (0 === p ? ",easeNone" : "")), C(new x(null, null, 3, p), c, "easeInOut");
          S.linear = m.easing.Linear.easeIn, S.swing = m.easing.Quad.easeInOut;
          var P = E("events.EventDispatcher", function (t) {
            this._listeners = {}, this._eventTarget = t || this
          });
          c = P.prototype, c.addEventListener = function (t, e, i, r, s) {
            s = s || 0;
            var n, a, o = this._listeners[t],
              l = 0;
            for (this !== d || u || d.wake(), null == o && (this._listeners[t] = o = []), a = o.length; --a > -1;) n = o[a], n.c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < s && (l = a + 1);
            o.splice(l, 0, {
              c: e,
              s: i,
              up: r,
              pr: s
            })
          }, c.removeEventListener = function (t, e) {
            var i, r = this._listeners[t];
            if (r)
              for (i = r.length; --i > -1;)
                if (r[i].c === e) return void r.splice(i, 1)
          }, c.dispatchEvent = function (t) {
            var e, i, r, s = this._listeners[t];
            if (s)
              for (e = s.length, e > 1 && (s = s.slice(0)), i = this._eventTarget; --e > -1;)(r = s[e]) && (r.up ? r.c.call(r.s || i, {
                type: t,
                target: i
              }) : r.c.call(r.s || i))
          };
          var A = i.requestAnimationFrame,
            k = i.cancelAnimationFrame,
            D = Date.now || function () {
              return (new Date).getTime()
            },
            M = D();
          for (h = ["ms", "moz", "webkit", "o"], p = h.length; --p > -1 && !A;) A = i[h[p] + "RequestAnimationFrame"], k = i[h[p] + "CancelAnimationFrame"] || i[h[p] + "CancelRequestAnimationFrame"];
          E("Ticker", function (t, e) {
            var i, r, s, n, a, l = this,
              h = D(),
              p = !(!1 === e || !A) && "auto",
              c = 500,
              f = 33,
              m = function (t) {
                var e, o, p = D() - M;
                p > c && (h += p - f), M += p, l.time = (M - h) / 1e3, e = l.time - a, (!i || e > 0 || !0 === t) && (l.frame++, a += e + (e >= n ? .004 : n - e), o = !0), !0 !== t && (s = r(m)), o && l.dispatchEvent("tick")
              };
            P.call(l), l.time = l.frame = 0, l.tick = function () {
              m(!0)
            }, l.lagSmoothing = function (t, e) {
              if (!arguments.length) return c < 1e10;
              c = t || 1e10, f = Math.min(e, c, 0)
            }, l.sleep = function () {
              null != s && (p && k ? k(s) : clearTimeout(s), r = v, s = null, l === d && (u = !1))
            }, l.wake = function (t) {
              null !== s ? l.sleep() : t ? h += -M + (M = D()) : l.frame > 10 && (M = D() - c + 5), r = 0 === i ? v : p && A ? A : function (t) {
                return setTimeout(t, 1e3 * (a - l.time) + 1 | 0)
              }, l === d && (u = !0), m(2)
            }, l.fps = function (t) {
              if (!arguments.length) return i;
              i = t, n = 1 / (i || 60), a = this.time + n, l.wake()
            }, l.useRAF = function (t) {
              if (!arguments.length) return p;
              l.sleep(), p = t, l.fps(i)
            }, l.fps(t), setTimeout(function () {
              "auto" === p && l.frame < 5 && "hidden" !== (o || {}).visibilityState && l.useRAF(!1)
            }, 1500)
          }), c = m.Ticker.prototype = new m.events.EventDispatcher, c.constructor = m.Ticker;
          var I = E("core.Animation", function (t, e) {
            if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, Z) {
              u || d.wake();
              var i = this.vars.useFrames ? Q : Z;
              i.add(this, i._time), this.vars.paused && this.paused(!0)
            }
          });
          d = I.ticker = new m.Ticker, c = I.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1;
          var O = function () {
            u && D() - M > 2e3 && ("hidden" !== (o || {}).visibilityState || !d.lagSmoothing()) && d.wake();
            var t = setTimeout(O, 2e3);
            t.unref && t.unref()
          };
          O(), c.play = function (t, e) {
            return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
          }, c.pause = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!0)
          }, c.resume = function (t, e) {
            return null != t && this.seek(t, e), this.paused(!1)
          }, c.seek = function (t, e) {
            return this.totalTime(Number(t), !1 !== e)
          }, c.restart = function (t, e) {
            return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
          }, c.reverse = function (t, e) {
            return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
          }, c.render = function (t, e, i) {}, c.invalidate = function () {
            return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this
          }, c.isActive = function () {
            var t, e = this._timeline,
              i = this._startTime;
            return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
          }, c._enabled = function (t, e) {
            return u || d.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
          }, c._kill = function (t, e) {
            return this._enabled(!1, !1)
          }, c.kill = function (t, e) {
            return this._kill(t, e), this
          }, c._uncache = function (t) {
            for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
            return this
          }, c._swapSelfInParams = function (t) {
            for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
            return i
          }, c._callback = function (t) {
            var e = this.vars,
              i = e[t],
              r = e[t + "Params"],
              s = e[t + "Scope"] || e.callbackScope || this;
            switch (r ? r.length : 0) {
              case 0:
                i.call(s);
                break;
              case 1:
                i.call(s, r[0]);
                break;
              case 2:
                i.call(s, r[0], r[1]);
                break;
              default:
                i.apply(s, r)
            }
          }, c.eventCallback = function (t, e, i, r) {
            if ("on" === (t || "").substr(0, 2)) {
              var s = this.vars;
              if (1 === arguments.length) return s[t];
              null == e ? delete s[t] : (s[t] = e, s[t + "Params"] = y(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, s[t + "Scope"] = r), "onUpdate" === t && (this._onUpdate = e)
            }
            return this
          }, c.delay = function (t) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
          }, c.duration = function (t) {
            return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
          }, c.totalDuration = function (t) {
            return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
          }, c.time = function (t, e) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
          }, c.totalTime = function (t, e, i) {
            if (u || d.wake(), !arguments.length) return this._totalTime;
            if (this._timeline) {
              if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                this._dirty && this.totalDuration();
                var r = this._totalDuration,
                  s = this._timeline;
                if (t > r && !i && (t = r), this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale, s._dirty || this._uncache(!1), s._timeline)
                  for (; s._timeline;) s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0), s = s._timeline
              }
              this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (V.length && tt(), this.render(t, e, !1), V.length && tt())
            }
            return this
          }, c.progress = c.totalProgress = function (t, e) {
            var i = this.duration();
            return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
          }, c.startTime = function (t) {
            return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
          }, c.endTime = function (t) {
            return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          }, c.timeScale = function (t) {
            if (!arguments.length) return this._timeScale;
            var e, i;
            for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;) i._dirty = !0, i.totalDuration(), i = i.timeline;
            return this
          }, c.reversed = function (t) {
            return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
          }, c.paused = function (t) {
            if (!arguments.length) return this._paused;
            var e, i, r = this._timeline;
            return t != this._paused && r && (u || t || d.wake(), e = r.rawTime(), i = e - this._pauseTime, !t && r.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
          };
          var F = E("core.SimpleTimeline", function (t) {
            I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
          });
          c = F.prototype = new I, c.constructor = F, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function (t, e, i, r) {
            var s, n;
            if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), s = this._last, this._sortChildren)
              for (n = t._startTime; s && s._startTime > n;) s = s._prev;
            return s ? (t._next = s._next, s._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = s, this._recent = t, this._timeline && this._uncache(!0), this
          }, c._remove = function (t, e) {
            return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
          }, c.render = function (t, e, i) {
            var r, s = this._first;
            for (this._totalTime = this._time = this._rawPrevTime = t; s;) r = s._next, (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)), s = r
          }, c.rawTime = function () {
            return u || d.wake(), this._totalTime
          };
          var R = E("TweenLite", function (t, e, r) {
              if (I.call(this, e, r), this.render = R.prototype.render, null == t) throw "Cannot tween a null target.";
              this.target = t = "string" != typeof t ? t : R.selector(t) || t;
              var s, n, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType),
                l = this.vars.overwrite;
              if (this._overwrite = l = null == l ? K[R.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l], (o || t instanceof Array || t.push && y(t)) && "number" != typeof t[0])
                for (this._targets = a = g(t), this._propLookup = [], this._siblings = [], s = 0; s < a.length; s++) n = a[s], n ? "string" != typeof n ? n.length && n !== i && n[0] && (n[0] === i || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1), this._targets = a = a.concat(g(n))) : (this._siblings[s] = et(n, this, !1), 1 === l && this._siblings[s].length > 1 && rt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = R.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
              else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === l && this._siblings.length > 1 && rt(t, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
            }, !0),
            N = function (t) {
              return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
            },
            L = function (t, e) {
              var i, r = {};
              for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (r[i] = t[i], delete t[i]);
              t.css = r
            };
          c = R.prototype = new I, c.constructor = R, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, R.version = "1.20.4", R.defaultEase = c._ease = new x(null, null, 1, 1), R.defaultOverwrite = "auto", R.ticker = d, R.autoSleep = 120, R.lagSmoothing = function (t, e) {
            d.lagSmoothing(t, e)
          }, R.selector = i.$ || i.jQuery || function (t) {
            var e = i.$ || i.jQuery;
            return e ? (R.selector = e, e(t)) : void 0 === o ? t : o.querySelectorAll ? o.querySelectorAll(t) : o.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
          };
          var V = [],
            B = {},
            z = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
            H = /[\+-]=-?[\.\d]/,
            j = function (t) {
              for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
            },
            G = function (t, e, i, r) {
              var s, n, a, o, l, h, p, c = [],
                d = 0,
                u = "",
                f = 0;
              for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, s = t.match(z) || [], n = e.match(z) || [], r && (r._next = null, r.blob = 1, c._firstPT = c._applyPT = r), l = n.length, o = 0; o < l; o++) p = n[o], h = e.substr(d, e.indexOf(p, d) - d), u += h || !o ? h : ",", d += h.length, f ? f = (f + 1) % 5 : "rgba(" === h.substr(-5) && (f = 1), p === s[o] || s.length <= o ? u += p : (u && (c.push(u), u = ""), a = parseFloat(s[o]), c.push(a), c._firstPT = {
                _next: c._firstPT,
                t: c,
                p: c.length - 1,
                s: a,
                c: ("=" === p.charAt(1) ? parseInt(p.charAt(0) + "1", 10) * parseFloat(p.substr(2)) : parseFloat(p) - a) || 0,
                f: 0,
                m: f && f < 4 ? Math.round : 0
              }), d += p.length;
              return u += e.substr(d), u && c.push(u), c.setRatio = j, H.test(e) && (c.end = null), c
            },
            W = function (t, e, i, r, s, n, a, o, l) {
              "function" == typeof r && (r = r(l || 0, t));
              var h, p = typeof t[e],
                c = "function" !== p ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                d = "get" !== i ? i : c ? a ? t[c](a) : t[c]() : t[e],
                u = "string" == typeof r && "=" === r.charAt(1),
                f = {
                  t: t,
                  p: e,
                  s: d,
                  f: "function" === p,
                  pg: 0,
                  n: s || e,
                  m: n ? "function" == typeof n ? n : Math.round : 0,
                  pr: 0,
                  c: u ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - d || 0
                };
              if (("number" != typeof d || "number" != typeof r && !u) && (a || isNaN(d) || !u && isNaN(r) || "boolean" == typeof d || "boolean" == typeof r ? (f.fp = a, h = G(d, u ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, o || R.defaultStringFilter, f), f = {
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: s || e,
                  pr: 0,
                  m: 0
                }) : (f.s = parseFloat(d), u || (f.c = parseFloat(r) - f.s || 0))), f.c) return (f._next = this._firstPT) && (f._next._prev = f), this._firstPT = f, f
            },
            $ = R._internals = {
              isArray: y,
              isSelector: N,
              lazyTweens: V,
              blobDif: G
            },
            X = R._plugins = {},
            Y = $.tweenLookup = {},
            U = 0,
            q = $.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1
            },
            K = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            },
            Q = I._rootFramesTimeline = new F,
            Z = I._rootTimeline = new F,
            J = 30,
            tt = $.lazyRender = function () {
              var t, e = V.length;
              for (B = {}; --e > -1;)(t = V[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
              V.length = 0
            };
          Z._startTime = d.time, Q._startTime = d.frame, Z._active = Q._active = !0, setTimeout(tt, 1), I._updateRoot = R.render = function () {
            var t, e, i;
            if (V.length && tt(), Z.render((d.time - Z._startTime) * Z._timeScale, !1, !1), Q.render((d.frame - Q._startTime) * Q._timeScale, !1, !1), V.length && tt(), d.frame >= J) {
              J = d.frame + (parseInt(R.autoSleep, 10) || 120);
              for (i in Y) {
                for (e = Y[i].tweens, t = e.length; --t > -1;) e[t]._gc && e.splice(t, 1);
                0 === e.length && delete Y[i]
              }
              if ((!(i = Z._first) || i._paused) && R.autoSleep && !Q._first && 1 === d._listeners.tick.length) {
                for (; i && i._paused;) i = i._next;
                i || d.sleep()
              }
            }
          }, d.addEventListener("tick", I._updateRoot);
          var et = function (t, e, i) {
              var r, s, n = t._gsTweenID;
              if (Y[n || (t._gsTweenID = n = "t" + U++)] || (Y[n] = {
                  target: t,
                  tweens: []
                }), e && (r = Y[n].tweens, r[s = r.length] = e, i))
                for (; --s > -1;) r[s] === e && r.splice(s, 1);
              return Y[n].tweens
            },
            it = function (t, e, i, r) {
              var s, n, a = t.vars.onOverwrite;
              return a && (s = a(t, e, i, r)), a = R.onOverwrite, a && (n = a(t, e, i, r)), !1 !== s && !1 !== n
            },
            rt = function (t, e, i, r, s) {
              var n, a, o, l;
              if (1 === r || r >= 4) {
                for (l = s.length, n = 0; n < l; n++)
                  if ((o = s[n]) !== e) o._gc || o._kill(null, t, e) && (a = !0);
                  else if (5 === r) break;
                return a
              }
              var h, p = e._startTime + 1e-10,
                c = [],
                d = 0,
                u = 0 === e._duration;
              for (n = s.length; --n > -1;)(o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || st(e, 0, u), 0 === st(o, h, u) && (c[d++] = o)) : o._startTime <= p && o._startTime + o.totalDuration() / o._timeScale > p && ((u || !o._initted) && p - o._startTime <= 2e-10 || (c[d++] = o)));
              for (n = d; --n > -1;)
                if (o = c[n], 2 === r && o._kill(i, t, e) && (a = !0), 2 !== r || !o._firstPT && o._initted) {
                  if (2 !== r && !it(o, e)) continue;
                  o._enabled(!1, !1) && (a = !0)
                } return a
            },
            st = function (t, e, i) {
              for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline;) {
                if (n += r._startTime, s *= r._timeScale, r._paused) return -100;
                r = r._timeline
              }
              return n /= s, n > e ? n - e : i && n === e || !t._initted && n - e < 2e-10 ? 1e-10 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-10 ? 0 : n - e - 1e-10
            };
          c._init = function () {
            var t, e, i, r, s, n, a = this.vars,
              o = this._overwrittenProps,
              l = this._duration,
              h = !!a.immediateRender,
              p = a.ease;
            if (a.startAt) {
              this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), s = {};
              for (r in a.startAt) s[r] = a.startAt[r];
              if (s.data = "isStart", s.overwrite = !1, s.immediateRender = !0, s.lazy = h && !1 !== a.lazy, s.startAt = s.delay = null, s.onUpdate = a.onUpdate, s.onUpdateParams = a.onUpdateParams, s.onUpdateScope = a.onUpdateScope || a.callbackScope || this, this._startAt = R.to(this.target, 0, s), h)
                if (this._time > 0) this._startAt = null;
                else if (0 !== l) return
            } else if (a.runBackwards && 0 !== l)
              if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
              else {
                0 !== this._time && (h = !1), i = {};
                for (r in a) q[r] && "autoCSS" !== r || (i[r] = a[r]);
                if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== a.lazy, i.immediateRender = h, this._startAt = R.to(this.target, 0, i), h) {
                  if (0 === this._time) return
                } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
              } if (this._ease = p = p ? p instanceof x ? p : "function" == typeof p ? new x(p, a.easeParams) : S[p] || R.defaultEase : R.defaultEase, a.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, a.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
              for (n = this._targets.length, t = 0; t < n; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && R._onPluginEvent("_onInitAllProps", this), o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), a.runBackwards)
              for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
            this._onUpdate = a.onUpdate, this._initted = !0
          }, c._initProps = function (t, e, r, s, n) {
            var a, o, l, h, p, c;
            if (null == t) return !1;
            B[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && X.css && !1 !== this.vars.autoCSS && L(this.vars, t);
            for (a in this.vars)
              if (c = this.vars[a], q[a]) c && (c instanceof Array || c.push && y(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[a] = c = this._swapSelfInParams(c, this));
              else if (X[a] && (h = new X[a])._onInitTween(t, this.vars[a], this, n)) {
              for (this._firstPT = p = {
                  _next: this._firstPT,
                  t: h,
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 1,
                  n: a,
                  pg: 1,
                  pr: h._priority,
                  m: 0
                }, o = h._overwriteProps.length; --o > -1;) e[h._overwriteProps[o]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), p._next && (p._next._prev = p)
            } else e[a] = W.call(this, t, a, "get", c, a, 0, null, this.vars.stringFilter, n);
            return s && this._kill(s, t) ? this._initProps(t, e, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && rt(t, this, e, this._overwrite, r) ? (this._kill(e, t), this._initProps(t, e, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), l)
          }, c.render = function (t, e, i) {
            var r, s, n, a, o = this._time,
              l = this._duration,
              h = this._rawPrevTime;
            if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (r = !0, s = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (h < 0 || t <= 0 && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10);
            else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
            else if (this._totalTime = this._time = t, this._easeType) {
              var p = t / l,
                c = this._easeType,
                d = this._easePower;
              (1 === c || 3 === c && p >= .5) && (p = 1 - p), 3 === c && (p *= 2), 1 === d ? p *= p : 2 === d ? p *= p * p : 3 === d ? p *= p * p * p : 4 === d && (p *= p * p * p * p), this.ratio = 1 === c ? 1 - p : 2 === c ? p : t / l < .5 ? p / 2 : 1 - p / 2
            } else this.ratio = this._ease.getRatio(t / l);
            if (this._time !== o || i) {
              if (!this._initted) {
                if (this._init(), !this._initted || this._gc) return;
                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = h, V.push(this), void(this._lazy = [t, e]);
                this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0), 0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))), n = this._firstPT; n;) n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s, n = n._next;
              this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== o || r || i) && this._callback("onUpdate")), s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== a && (this._rawPrevTime = 0)))
            }
          }, c._kill = function (t, e, i) {
            if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
            e = "string" != typeof e ? e || this._targets || this.target : R.selector(e) || e;
            var r, s, n, a, o, l, h, p, c, d = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
            if ((y(e) || N(e)) && "number" != typeof e[0])
              for (r = e.length; --r > -1;) this._kill(t, e[r], i) && (l = !0);
            else {
              if (this._targets) {
                for (r = this._targets.length; --r > -1;)
                  if (e === this._targets[r]) {
                    o = this._propLookup[r] || {}, this._overwrittenProps = this._overwrittenProps || [], s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                    break
                  }
              } else {
                if (e !== this.target) return !1;
                o = this._propLookup, s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
              }
              if (o) {
                if (h = t || o, p = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill), i && (R.onOverwrite || this.vars.onOverwrite)) {
                  for (n in h) o[n] && (c || (c = []), c.push(n));
                  if ((c || !t) && !it(this, i, e, c)) return !1
                }
                for (n in h)(a = o[n]) && (d && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(h) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[n]), p && (s[n] = 1);
                !this._firstPT && this._initted && this._enabled(!1, !1)
              }
            }
            return l
          }, c.invalidate = function () {
            return this._notifyPluginsOfEnabled && R._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
          }, c._enabled = function (t, e) {
            if (u || d.wake(), t && this._gc) {
              var i, r = this._targets;
              if (r)
                for (i = r.length; --i > -1;) this._siblings[i] = et(r[i], this, !0);
              else this._siblings = et(this.target, this, !0)
            }
            return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && R._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          }, R.to = function (t, e, i) {
            return new R(t, e, i)
          }, R.from = function (t, e, i) {
            return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new R(t, e, i)
          }, R.fromTo = function (t, e, i, r) {
            return r.startAt = i, r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender, new R(t, e, r)
          }, R.delayedCall = function (t, e, i, r, s) {
            return new R(e, 0, {
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: r,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              lazy: !1,
              useFrames: s,
              overwrite: 0
            })
          }, R.set = function (t, e) {
            return new R(t, 0, e)
          }, R.getTweensOf = function (t, e) {
            if (null == t) return [];
            t = "string" != typeof t ? t : R.selector(t) || t;
            var i, r, s, n;
            if ((y(t) || N(t)) && "number" != typeof t[0]) {
              for (i = t.length, r = []; --i > -1;) r = r.concat(R.getTweensOf(t[i], e));
              for (i = r.length; --i > -1;)
                for (n = r[i], s = i; --s > -1;) n === r[s] && r.splice(i, 1)
            } else if (t._gsTweenID)
              for (r = et(t).concat(), i = r.length; --i > -1;)(r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
            return r || []
          }, R.killTweensOf = R.killDelayedCallsTo = function (t, e, i) {
            "object" == typeof e && (i = e, e = !1);
            for (var r = R.getTweensOf(t, e), s = r.length; --s > -1;) r[s]._kill(i, t)
          };
          var nt = E("plugins.TweenPlugin", function (t, e) {
            this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = nt.prototype
          }, !0);
          if (c = nt.prototype, nt.version = "1.19.0", nt.API = 2, c._firstPT = null, c._addTween = W, c.setRatio = j, c._kill = function (t) {
              var e, i = this._overwriteProps,
                r = this._firstPT;
              if (null != t[this._propName]) this._overwriteProps = [];
              else
                for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
              for (; r;) null != t[r.n] && (r._next && (r._next._prev = r._prev), r._prev ? (r._prev._next = r._next, r._prev = null) : this._firstPT === r && (this._firstPT = r._next)), r = r._next;
              return !1
            }, c._mod = c._roundProps = function (t) {
              for (var e, i = this._firstPT; i;) e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
            }, R._onPluginEvent = function (t, e) {
              var i, r, s, n, a, o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o;) {
                  for (a = o._next, r = s; r && r.pr > o.pr;) r = r._next;
                  (o._prev = r ? r._prev : n) ? o._prev._next = o: s = o, (o._next = r) ? r._prev = o : n = o, o = a
                }
                o = e._firstPT = s
              }
              for (; o;) o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0), o = o._next;
              return i
            }, nt.activate = function (t) {
              for (var e = t.length; --e > -1;) t[e].API === nt.API && (X[(new t[e])._propName] = t[e]);
              return !0
            }, T.plugin = function (t) {
              if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
              var e, i = t.propName,
                r = t.priority || 0,
                s = t.overwriteProps,
                n = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                },
                a = E("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () {
                  nt.call(this, i, r), this._overwriteProps = s || []
                }, !0 === t.global),
                o = a.prototype = new nt(i);
              o.constructor = a, a.API = t.API;
              for (e in n) "function" == typeof t[e] && (o[n[e]] = t[e]);
              return a.version = t.version, nt.activate([a]), a
            }, h = i._gsQueue) {
            for (p = 0; p < h.length; p++) h[p]();
            for (c in _) _[c].func || i.console.log("GSAP encountered missing dependency: " + c)
          }
          u = !1
        }
      }(void 0 !== t && t.exports && void 0 !== i ? i : this || window)
  }).call(e, i(1))
}, function (t, e, i) {
  (function (r) {
    var s, n, a, o = void 0 !== t && t.exports && void 0 !== r ? r : this || window;
    (o._gsQueue || (o._gsQueue = [])).push(function () {
        "use strict";
        var t = (o.document || {}).documentElement,
          e = o,
          i = function (i, r) {
            var s = "x" === r ? "Width" : "Height",
              n = "scroll" + s,
              a = "client" + s,
              o = document.body;
            return i === e || i === t || i === o ? Math.max(t[n], o[n]) - (e["inner" + s] || t[a] || o[a]) : i[n] - i["offset" + s]
          },
          r = function (t) {
            return "string" == typeof t && (t = TweenLite.selector(t)), t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]), t === e || t.nodeType && t.style ? t : null
          },
          s = function (i, r) {
            var s = "scroll" + ("x" === r ? "Left" : "Top");
            return i === e && (null != i.pageXOffset ? s = "page" + r.toUpperCase() + "Offset" : i = null != t[s] ? t : document.body),
              function () {
                return i[s]
              }
          },
          n = function (i, n) {
            var a = r(i).getBoundingClientRect(),
              o = !n || n === e || n === document.body,
              l = (o ? t : n).getBoundingClientRect(),
              h = {
                x: a.left - l.left,
                y: a.top - l.top
              };
            return !o && n && (h.x += s(n, "x")(), h.y += s(n, "y")()), h
          },
          a = function (t, e, r) {
            var s = typeof t;
            return isNaN(t) ? "number" === s || "string" === s && "=" === t.charAt(1) ? t : "max" === t ? i(e, r) : Math.min(i(e, r), n(t, e)[r]) : parseFloat(t)
          },
          l = o._gsDefine.plugin({
            propName: "scrollTo",
            API: 2,
            global: !0,
            version: "1.9.0",
            init: function (t, i, r) {
              return this._wdw = t === e, this._target = t, this._tween = r, "object" != typeof i ? (i = {
                y: i
              }, "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                y: i,
                x: i
              }), this.vars = i, this._autoKill = !1 !== i.autoKill, this.getX = s(t, "x"), this.getY = s(t, "y"), this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != i.x ? (this._addTween(this, "x", this.x, a(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != i.y ? (this._addTween(this, "y", this.y, a(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
            },
            set: function (t) {
              this._super.setRatio.call(this, t);
              var r = this._wdw || !this.skipX ? this.getX() : this.xPrev,
                s = this._wdw || !this.skipY ? this.getY() : this.yPrev,
                n = s - this.yPrev,
                a = r - this.xPrev,
                o = l.autoKillThreshold;
              this.x < 0 && (this.x = 0), this.y < 0 && (this.y = 0), this._autoKill && (!this.skipX && (a > o || a < -o) && r < i(this._target, "x") && (this.skipX = !0), !this.skipY && (n > o || n < -o) && s < i(this._target, "y") && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? e.scrollTo(this.skipX ? r : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
            }
          }),
          h = l.prototype;
        l.max = i, l.getOffset = n, l.buildGetter = s, l.autoKillThreshold = 7, h._kill = function (t) {
          return t.scrollTo_x && (this.skipX = !0), t.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, t)
        }
      }), o._gsDefine && o._gsQueue.pop()(),
      function (r) {
        "use strict";
        var l = function () {
          return (o.GreenSockGlobals || o).ScrollToPlugin
        };
        void 0 !== t && t.exports ? (i(7), t.exports = l()) : (n = [i(7)], s = l, void 0 !== (a = "function" == typeof s ? s.apply(e, n) : s) && (t.exports = a))
      }()
  }).call(e, i(1))
}, function (t, e, i) {
  "use strict";
  Object.defineProperty(e, "__esModule", {
    value: !0
  });
  var r = {
    getUserAgent: function () {
      return navigator.userAgent
    },
    Android: function () {
      return /Android/i.test(r.getUserAgent()) && !r.Windows()
    },
    BlackBerry: function () {
      return /BlackBerry|BB10|PlayBook/i.test(r.getUserAgent())
    },
    iPhone: function () {
      return /iPhone/i.test(r.getUserAgent()) && !r.iPad() && !r.Windows()
    },
    iPod: function () {
      return /iPod/i.test(r.getUserAgent())
    },
    iPad: function () {
      return /iPad/i.test(r.getUserAgent())
    },
    iOS: function () {
      return r.iPad() || r.iPod() || r.iPhone()
    },
    Opera: function () {
      return /Opera Mini/i.test(r.getUserAgent())
    },
    Windows: function () {
      return /Windows Phone|IEMobile|WPDesktop/i.test(r.getUserAgent())
    },
    KindleFire: function () {
      return /Kindle Fire|Silk|KFAPWA|KFSOWI|KFJWA|KFJWI|KFAPWI|KFAPWI|KFOT|KFTT|KFTHWI|KFTHWA|KFASWI|KFTBWI|KFMEWI|KFFOWI|KFSAWA|KFSAWI|KFARWI/i.test(r.getUserAgent())
    },
    any: function () {
      return r.Android() || r.BlackBerry() || r.iOS() || r.Opera() || r.Windows()
    }
  };
  e.default = r
}, function (t, e, i) {
  "use strict";
  e.a = {
    init: function () {}
  }
}, function (t, e, i) {
  "use strict";
  (function (t) {
    e.a = {
      init: function () {
        t(document).ready(function () {
          window.matchMedia("(min-width: 992px)").matches && t(".videoPresent").each(function () {
            var e = t(this).find("source");
            e.attr("src", e.data("src")).removeAttr("data-src"), t(this).load()
          })
        })
      }
    }
  }).call(e, i(0))
}, function (t, e, i) {
  "use strict";
  (function (t) {
    var r = i(36),
      s = i.n(r);
    e.a = {
      init: function () {
        t(document).ready(function () {
          window.matchMedia("(min-width: 992px)").matches && t(".videoPresent").each(function () {
            var e = t(this).find("source");
            e.attr("src", e.data("src")).removeAttr("data-src"), t(this).load()
          });
          var e = new s.a(".swiper-container", {
            cssWidthAndHeight: !0,
            slidesPerView: 1,
            visibilityFullFit: !0,
            autoResize: !1,
            loop: !0,
            observer: !0,
            observeParents: !0,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            }
          });
          t("#gallery-modal").on("show.bs.modal", function (i) {
            var r, s = t(i.relatedTarget).data("carousel-items");
            s.forEach(function (t) {
              r = t.video ? '<video loop="true" muted="true" preload="auto" class="videoPresent" poster="' + t.image + '" autoplay><source src="' + t.video + '" type="video/mp4"></video>' : '<img src="' + t.image + '">', e.appendSlide('<div class="swiper-slide">' + r + "</div>")
            })
          }), t("#gallery-modal").on("hidden.bs.modal", function () {
            e.removeAllSlides()
          })
        })
      }
    }
  }).call(e, i(0))
}, function (t, e, i) {
  ! function (e, i) {
    t.exports = i()
  }(0, function () {
    "use strict";

    function t(t, e) {
      var i = [],
        r = 0;
      if (t && !e && t instanceof Rt) return t;
      if (t)
        if ("string" == typeof t) {
          var s, n, a = t.trim();
          if (a.indexOf("<") >= 0 && a.indexOf(">") >= 0) {
            var o = "div";
            for (0 === a.indexOf("<li") && (o = "ul"), 0 === a.indexOf("<tr") && (o = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (o = "tr"), 0 === a.indexOf("<tbody") && (o = "table"), 0 === a.indexOf("<option") && (o = "select"), n = Ot.createElement(o), n.innerHTML = a, r = 0; r < n.childNodes.length; r += 1) i.push(n.childNodes[r])
          } else
            for (s = e || "#" !== t[0] || t.match(/[ .<>:~]/) ? (e || Ot).querySelectorAll(t.trim()) : [Ot.getElementById(t.trim().split("#")[1])], r = 0; r < s.length; r += 1) s[r] && i.push(s[r])
        } else if (t.nodeType || t === Ft || t === Ot) i.push(t);
      else if (t.length > 0 && t[0].nodeType)
        for (r = 0; r < t.length; r += 1) i.push(t[r]);
      return new Rt(i)
    }

    function e(t) {
      for (var e = [], i = 0; i < t.length; i += 1) - 1 === e.indexOf(t[i]) && e.push(t[i]);
      return e
    }

    function i(t) {
      if (void 0 === t) return this;
      for (var e = t.split(" "), i = 0; i < e.length; i += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.add(e[i]);
      return this
    }

    function r(t) {
      for (var e = t.split(" "), i = 0; i < e.length; i += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.remove(e[i]);
      return this
    }

    function s(t) {
      return !!this[0] && this[0].classList.contains(t)
    }

    function n(t) {
      for (var e = t.split(" "), i = 0; i < e.length; i += 1)
        for (var r = 0; r < this.length; r += 1) void 0 !== this[r] && void 0 !== this[r].classList && this[r].classList.toggle(e[i]);
      return this
    }

    function a(t, e) {
      var i = arguments; {
        if (1 !== arguments.length || "string" != typeof t) {
          for (var r = 0; r < this.length; r += 1)
            if (2 === i.length) this[r].setAttribute(t, e);
            else
              for (var s in t) this[r][s] = t[s], this[r].setAttribute(s, t[s]);
          return this
        }
        if (this[0]) return this[0].getAttribute(t)
      }
    }

    function o(t) {
      for (var e = 0; e < this.length; e += 1) this[e].removeAttribute(t);
      return this
    }

    function l(t, e) {
      var i; {
        if (void 0 !== e) {
          for (var r = 0; r < this.length; r += 1) i = this[r], i.dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[t] = e;
          return this
        }
        if (i = this[0]) {
          if (i.dom7ElementDataStorage && t in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[t];
          var s = i.getAttribute("data-" + t);
          if (s) return s;
          return
        }
      }
    }

    function h(t) {
      for (var e = 0; e < this.length; e += 1) {
        var i = this[e].style;
        i.webkitTransform = t, i.transform = t
      }
      return this
    }

    function p(t) {
      "string" != typeof t && (t += "ms");
      for (var e = 0; e < this.length; e += 1) {
        var i = this[e].style;
        i.webkitTransitionDuration = t, i.transitionDuration = t
      }
      return this
    }

    function c() {
      function e(e) {
        var i = e.target;
        if (i) {
          var r = e.target.dom7EventData || [];
          if (r.indexOf(e) < 0 && r.unshift(e), t(i).is(o)) l.apply(i, r);
          else
            for (var s = t(i).parents(), n = 0; n < s.length; n += 1) t(s[n]).is(o) && l.apply(s[n], r)
        }
      }

      function i(t) {
        var e = t && t.target ? t.target.dom7EventData || [] : [];
        e.indexOf(t) < 0 && e.unshift(t), l.apply(this, e)
      }
      for (var r, s = [], n = arguments.length; n--;) s[n] = arguments[n];
      var a = s[0],
        o = s[1],
        l = s[2],
        h = s[3];
      "function" == typeof s[1] && (r = s, a = r[0], l = r[1], h = r[2], o = void 0), h || (h = !1);
      for (var p, c = a.split(" "), d = 0; d < this.length; d += 1) {
        var u = this[d];
        if (o)
          for (p = 0; p < c.length; p += 1) {
            var f = c[p];
            u.dom7LiveListeners || (u.dom7LiveListeners = {}), u.dom7LiveListeners[f] || (u.dom7LiveListeners[f] = []), u.dom7LiveListeners[f].push({
              listener: l,
              proxyListener: e
            }), u.addEventListener(f, e, h)
          } else
            for (p = 0; p < c.length; p += 1) {
              var m = c[p];
              u.dom7Listeners || (u.dom7Listeners = {}), u.dom7Listeners[m] || (u.dom7Listeners[m] = []), u.dom7Listeners[m].push({
                listener: l,
                proxyListener: i
              }), u.addEventListener(m, i, h)
            }
      }
      return this
    }

    function d() {
      for (var t, e = [], i = arguments.length; i--;) e[i] = arguments[i];
      var r = e[0],
        s = e[1],
        n = e[2],
        a = e[3];
      "function" == typeof e[1] && (t = e, r = t[0], n = t[1], a = t[2], s = void 0), a || (a = !1);
      for (var o = r.split(" "), l = 0; l < o.length; l += 1)
        for (var h = o[l], p = 0; p < this.length; p += 1) {
          var c = this[p],
            d = void 0;
          if (!s && c.dom7Listeners ? d = c.dom7Listeners[h] : s && c.dom7LiveListeners && (d = c.dom7LiveListeners[h]), d && d.length)
            for (var u = d.length - 1; u >= 0; u -= 1) {
              var f = d[u];
              n && f.listener === n ? (c.removeEventListener(h, f.proxyListener, a), d.splice(u, 1)) : n && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === n ? (c.removeEventListener(h, f.proxyListener, a), d.splice(u, 1)) : n || (c.removeEventListener(h, f.proxyListener, a), d.splice(u, 1))
            }
        }
      return this
    }

    function u() {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      for (var i = t[0].split(" "), r = t[1], s = 0; s < i.length; s += 1)
        for (var n = i[s], a = 0; a < this.length; a += 1) {
          var o = this[a],
            l = void 0;
          try {
            l = new Ft.CustomEvent(n, {
              detail: r,
              bubbles: !0,
              cancelable: !0
            })
          } catch (t) {
            l = Ot.createEvent("Event"), l.initEvent(n, !0, !0), l.detail = r
          }
          o.dom7EventData = t.filter(function (t, e) {
            return e > 0
          }), o.dispatchEvent(l), o.dom7EventData = [], delete o.dom7EventData
        }
      return this
    }

    function f(t) {
      function e(n) {
        if (n.target === this)
          for (t.call(this, n), i = 0; i < r.length; i += 1) s.off(r[i], e)
      }
      var i, r = ["webkitTransitionEnd", "transitionend"],
        s = this;
      if (t)
        for (i = 0; i < r.length; i += 1) s.on(r[i], e);
      return this
    }

    function m(t) {
      if (this.length > 0) {
        if (t) {
          var e = this.styles();
          return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
        }
        return this[0].offsetWidth
      }
      return null
    }

    function g(t) {
      if (this.length > 0) {
        if (t) {
          var e = this.styles();
          return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
        }
        return this[0].offsetHeight
      }
      return null
    }

    function v() {
      if (this.length > 0) {
        var t = this[0],
          e = t.getBoundingClientRect(),
          i = Ot.body,
          r = t.clientTop || i.clientTop || 0,
          s = t.clientLeft || i.clientLeft || 0,
          n = t === Ft ? Ft.scrollY : t.scrollTop,
          a = t === Ft ? Ft.scrollX : t.scrollLeft;
        return {
          top: e.top + n - r,
          left: e.left + a - s
        }
      }
      return null
    }

    function y() {
      return this[0] ? Ft.getComputedStyle(this[0], null) : {}
    }

    function _(t, e) {
      var i;
      if (1 === arguments.length) {
        if ("string" != typeof t) {
          for (i = 0; i < this.length; i += 1)
            for (var r in t) this[i].style[r] = t[r];
          return this
        }
        if (this[0]) return Ft.getComputedStyle(this[0], null).getPropertyValue(t)
      }
      if (2 === arguments.length && "string" == typeof t) {
        for (i = 0; i < this.length; i += 1) this[i].style[t] = e;
        return this
      }
      return this
    }

    function b(t) {
      if (!t) return this;
      for (var e = 0; e < this.length; e += 1)
        if (!1 === t.call(this[e], e, this[e])) return this;
      return this
    }

    function T(t) {
      if (void 0 === t) return this[0] ? this[0].innerHTML : void 0;
      for (var e = 0; e < this.length; e += 1) this[e].innerHTML = t;
      return this
    }

    function E(t) {
      if (void 0 === t) return this[0] ? this[0].textContent.trim() : null;
      for (var e = 0; e < this.length; e += 1) this[e].textContent = t;
      return this
    }

    function w(e) {
      var i, r, s = this[0];
      if (!s || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (s.matches) return s.matches(e);
        if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
        if (s.msMatchesSelector) return s.msMatchesSelector(e);
        for (i = t(e), r = 0; r < i.length; r += 1)
          if (i[r] === s) return !0;
        return !1
      }
      if (e === Ot) return s === Ot;
      if (e === Ft) return s === Ft;
      if (e.nodeType || e instanceof Rt) {
        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
          if (i[r] === s) return !0;
        return !1
      }
      return !1
    }

    function x() {
      var t, e = this[0];
      if (e) {
        for (t = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && (t += 1);
        return t
      }
    }

    function S(t) {
      if (void 0 === t) return this;
      var e, i = this.length;
      return t > i - 1 ? new Rt([]) : t < 0 ? (e = i + t, new Rt(e < 0 ? [] : [this[e]])) : new Rt([this[t]])
    }

    function C() {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      for (var i, r = 0; r < t.length; r += 1) {
        i = t[r];
        for (var s = 0; s < this.length; s += 1)
          if ("string" == typeof i) {
            var n = Ot.createElement("div");
            for (n.innerHTML = i; n.firstChild;) this[s].appendChild(n.firstChild)
          } else if (i instanceof Rt)
          for (var a = 0; a < i.length; a += 1) this[s].appendChild(i[a]);
        else this[s].appendChild(i)
      }
      return this
    }

    function P(t) {
      var e, i;
      for (e = 0; e < this.length; e += 1)
        if ("string" == typeof t) {
          var r = Ot.createElement("div");
          for (r.innerHTML = t, i = r.childNodes.length - 1; i >= 0; i -= 1) this[e].insertBefore(r.childNodes[i], this[e].childNodes[0])
        } else if (t instanceof Rt)
        for (i = 0; i < t.length; i += 1) this[e].insertBefore(t[i], this[e].childNodes[0]);
      else this[e].insertBefore(t, this[e].childNodes[0]);
      return this
    }

    function A(e) {
      return new Rt(this.length > 0 ? e ? this[0].nextElementSibling && t(this[0].nextElementSibling).is(e) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
    }

    function k(e) {
      var i = [],
        r = this[0];
      if (!r) return new Rt([]);
      for (; r.nextElementSibling;) {
        var s = r.nextElementSibling;
        e ? t(s).is(e) && i.push(s) : i.push(s), r = s
      }
      return new Rt(i)
    }

    function D(e) {
      if (this.length > 0) {
        var i = this[0];
        return new Rt(e ? i.previousElementSibling && t(i.previousElementSibling).is(e) ? [i.previousElementSibling] : [] : i.previousElementSibling ? [i.previousElementSibling] : [])
      }
      return new Rt([])
    }

    function M(e) {
      var i = [],
        r = this[0];
      if (!r) return new Rt([]);
      for (; r.previousElementSibling;) {
        var s = r.previousElementSibling;
        e ? t(s).is(e) && i.push(s) : i.push(s), r = s
      }
      return new Rt(i)
    }

    function I(i) {
      for (var r = [], s = 0; s < this.length; s += 1) null !== this[s].parentNode && (i ? t(this[s].parentNode).is(i) && r.push(this[s].parentNode) : r.push(this[s].parentNode));
      return t(e(r))
    }

    function O(i) {
      for (var r = [], s = 0; s < this.length; s += 1)
        for (var n = this[s].parentNode; n;) i ? t(n).is(i) && r.push(n) : r.push(n), n = n.parentNode;
      return t(e(r))
    }

    function F(t) {
      var e = this;
      return void 0 === t ? new Rt([]) : (e.is(t) || (e = e.parents(t).eq(0)), e)
    }

    function R(t) {
      for (var e = [], i = 0; i < this.length; i += 1)
        for (var r = this[i].querySelectorAll(t), s = 0; s < r.length; s += 1) e.push(r[s]);
      return new Rt(e)
    }

    function N(i) {
      for (var r = [], s = 0; s < this.length; s += 1)
        for (var n = this[s].childNodes, a = 0; a < n.length; a += 1) i ? 1 === n[a].nodeType && t(n[a]).is(i) && r.push(n[a]) : 1 === n[a].nodeType && r.push(n[a]);
      return new Rt(e(r))
    }

    function L() {
      for (var t = 0; t < this.length; t += 1) this[t].parentNode && this[t].parentNode.removeChild(this[t]);
      return this
    }

    function V() {
      for (var e = [], i = arguments.length; i--;) e[i] = arguments[i];
      var r, s, n = this;
      for (r = 0; r < e.length; r += 1) {
        var a = t(e[r]);
        for (s = 0; s < a.length; s += 1) n[n.length] = a[s], n.length += 1
      }
      return n
    }

    function B() {
      var t, e, i = this,
        r = i.$el;
      t = void 0 !== i.params.width ? i.params.width : r[0].clientWidth, e = void 0 !== i.params.height ? i.params.height : r[0].clientHeight, 0 === t && i.isHorizontal() || 0 === e && i.isVertical() || (t = t - parseInt(r.css("padding-left"), 10) - parseInt(r.css("padding-right"), 10), e = e - parseInt(r.css("padding-top"), 10) - parseInt(r.css("padding-bottom"), 10), Lt.extend(i, {
        width: t,
        height: e,
        size: i.isHorizontal() ? t : e
      }))
    }

    function z() {
      var t = this,
        e = t.params,
        i = t.$wrapperEl,
        r = t.size,
        s = t.rtlTranslate,
        n = t.wrongRTL,
        a = t.virtual && e.virtual.enabled,
        o = a ? t.virtual.slides.length : t.slides.length,
        l = i.children("." + t.params.slideClass),
        h = a ? t.virtual.slides.length : l.length,
        p = [],
        c = [],
        d = [],
        u = e.slidesOffsetBefore;
      "function" == typeof u && (u = e.slidesOffsetBefore.call(t));
      var f = e.slidesOffsetAfter;
      "function" == typeof f && (f = e.slidesOffsetAfter.call(t));
      var m = t.snapGrid.length,
        g = t.snapGrid.length,
        v = e.spaceBetween,
        y = -u,
        _ = 0,
        b = 0;
      if (void 0 !== r) {
        "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * r), t.virtualSize = -v, s ? l.css({
          marginLeft: "",
          marginTop: ""
        }) : l.css({
          marginRight: "",
          marginBottom: ""
        });
        var T;
        e.slidesPerColumn > 1 && (T = Math.floor(h / e.slidesPerColumn) === h / t.params.slidesPerColumn ? h : Math.ceil(h / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (T = Math.max(T, e.slidesPerView * e.slidesPerColumn)));
        for (var E, w = e.slidesPerColumn, x = T / w, S = Math.floor(h / e.slidesPerColumn), C = 0; C < h; C += 1) {
          E = 0;
          var P = l.eq(C);
          if (e.slidesPerColumn > 1) {
            var A = void 0,
              k = void 0,
              D = void 0;
            "column" === e.slidesPerColumnFill ? (k = Math.floor(C / w), D = C - k * w, (k > S || k === S && D === w - 1) && (D += 1) >= w && (D = 0, k += 1), A = k + D * T / w, P.css({
              "-webkit-box-ordinal-group": A,
              "-moz-box-ordinal-group": A,
              "-ms-flex-order": A,
              "-webkit-order": A,
              order: A
            })) : (D = Math.floor(C / x), k = C - D * x), P.css("margin-" + (t.isHorizontal() ? "top" : "left"), 0 !== D && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", k).attr("data-swiper-row", D)
          }
          if ("none" !== P.css("display")) {
            if ("auto" === e.slidesPerView) {
              var M = Ft.getComputedStyle(P[0], null),
                I = P[0].style.transform,
                O = P[0].style.webkitTransform;
              if (I && (P[0].style.transform = "none"), O && (P[0].style.webkitTransform = "none"), e.roundLengths) E = t.isHorizontal() ? P.outerWidth(!0) : P.outerHeight(!0);
              else if (t.isHorizontal()) {
                var F = parseFloat(M.getPropertyValue("width")),
                  R = parseFloat(M.getPropertyValue("padding-left")),
                  N = parseFloat(M.getPropertyValue("padding-right")),
                  L = parseFloat(M.getPropertyValue("margin-left")),
                  V = parseFloat(M.getPropertyValue("margin-right")),
                  B = M.getPropertyValue("box-sizing");
                E = B && "border-box" === B ? F + L + V : F + R + N + L + V
              } else {
                var z = parseFloat(M.getPropertyValue("height")),
                  H = parseFloat(M.getPropertyValue("padding-top")),
                  j = parseFloat(M.getPropertyValue("padding-bottom")),
                  G = parseFloat(M.getPropertyValue("margin-top")),
                  W = parseFloat(M.getPropertyValue("margin-bottom")),
                  $ = M.getPropertyValue("box-sizing");
                E = $ && "border-box" === $ ? z + G + W : z + H + j + G + W
              }
              I && (P[0].style.transform = I), O && (P[0].style.webkitTransform = O), e.roundLengths && (E = Math.floor(E))
            } else E = (r - (e.slidesPerView - 1) * v) / e.slidesPerView, e.roundLengths && (E = Math.floor(E)), l[C] && (t.isHorizontal() ? l[C].style.width = E + "px" : l[C].style.height = E + "px");
            l[C] && (l[C].swiperSlideSize = E), d.push(E), e.centeredSlides ? (y = y + E / 2 + _ / 2 + v, 0 === _ && 0 !== C && (y = y - r / 2 - v), 0 === C && (y = y - r / 2 - v), Math.abs(y) < .001 && (y = 0), e.roundLengths && (y = Math.floor(y)), b % e.slidesPerGroup == 0 && p.push(y), c.push(y)) : (e.roundLengths && (y = Math.floor(y)), b % e.slidesPerGroup == 0 && p.push(y), c.push(y), y = y + E + v), t.virtualSize += E + v, _ = E, b += 1
          }
        }
        t.virtualSize = Math.max(t.virtualSize, r) + f;
        var X;
        if (s && n && ("slide" === e.effect || "coverflow" === e.effect) && i.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }), Vt.flexbox && !e.setWrapperSize || (t.isHorizontal() ? i.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }) : i.css({
            height: t.virtualSize + e.spaceBetween + "px"
          })), e.slidesPerColumn > 1 && (t.virtualSize = (E + e.spaceBetween) * T, t.virtualSize = Math.ceil(t.virtualSize / e.slidesPerColumn) - e.spaceBetween, t.isHorizontal() ? i.css({
            width: t.virtualSize + e.spaceBetween + "px"
          }) : i.css({
            height: t.virtualSize + e.spaceBetween + "px"
          }), e.centeredSlides)) {
          X = [];
          for (var Y = 0; Y < p.length; Y += 1) {
            var U = p[Y];
            e.roundLengths && (U = Math.floor(U)), p[Y] < t.virtualSize + p[0] && X.push(U)
          }
          p = X
        }
        if (!e.centeredSlides) {
          X = [];
          for (var q = 0; q < p.length; q += 1) {
            var K = p[q];
            e.roundLengths && (K = Math.floor(K)), p[q] <= t.virtualSize - r && X.push(K)
          }
          p = X, Math.floor(t.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 && p.push(t.virtualSize - r)
        }
        if (0 === p.length && (p = [0]), 0 !== e.spaceBetween && (t.isHorizontal() ? s ? l.css({
            marginLeft: v + "px"
          }) : l.css({
            marginRight: v + "px"
          }) : l.css({
            marginBottom: v + "px"
          })), e.centerInsufficientSlides) {
          var Q = 0;
          if (d.forEach(function (t) {
              Q += t + (e.spaceBetween ? e.spaceBetween : 0)
            }), (Q -= e.spaceBetween) < r) {
            var Z = (r - Q) / 2;
            p.forEach(function (t, e) {
              p[e] = t - Z
            }), c.forEach(function (t, e) {
              c[e] = t + Z
            })
          }
        }
        Lt.extend(t, {
          slides: l,
          snapGrid: p,
          slidesGrid: c,
          slidesSizesGrid: d
        }), h !== o && t.emit("slidesLengthChange"), p.length !== m && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), c.length !== g && t.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && t.updateSlidesOffset()
      }
    }

    function H(t) {
      var e, i = this,
        r = [],
        s = 0;
      if ("number" == typeof t ? i.setTransition(t) : !0 === t && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
        for (e = 0; e < Math.ceil(i.params.slidesPerView); e += 1) {
          var n = i.activeIndex + e;
          if (n > i.slides.length) break;
          r.push(i.slides.eq(n)[0])
        } else r.push(i.slides.eq(i.activeIndex)[0]);
      for (e = 0; e < r.length; e += 1)
        if (void 0 !== r[e]) {
          var a = r[e].offsetHeight;
          s = a > s ? a : s
        } s && i.$wrapperEl.css("height", s + "px")
    }

    function j() {
      for (var t = this, e = t.slides, i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop
    }

    function G(e) {
      void 0 === e && (e = this && this.translate || 0);
      var i = this,
        r = i.params,
        s = i.slides,
        n = i.rtlTranslate;
      if (0 !== s.length) {
        void 0 === s[0].swiperSlideOffset && i.updateSlidesOffset();
        var a = -e;
        n && (a = e), s.removeClass(r.slideVisibleClass), i.visibleSlidesIndexes = [], i.visibleSlides = [];
        for (var o = 0; o < s.length; o += 1) {
          var l = s[o],
            h = (a + (r.centeredSlides ? i.minTranslate() : 0) - l.swiperSlideOffset) / (l.swiperSlideSize + r.spaceBetween);
          if (r.watchSlidesVisibility) {
            var p = -(a - l.swiperSlideOffset),
              c = p + i.slidesSizesGrid[o];
            (p >= 0 && p < i.size || c > 0 && c <= i.size || p <= 0 && c >= i.size) && (i.visibleSlides.push(l), i.visibleSlidesIndexes.push(o), s.eq(o).addClass(r.slideVisibleClass))
          }
          l.progress = n ? -h : h
        }
        i.visibleSlides = t(i.visibleSlides)
      }
    }

    function W(t) {
      void 0 === t && (t = this && this.translate || 0);
      var e = this,
        i = e.params,
        r = e.maxTranslate() - e.minTranslate(),
        s = e.progress,
        n = e.isBeginning,
        a = e.isEnd,
        o = n,
        l = a;
      0 === r ? (s = 0, n = !0, a = !0) : (s = (t - e.minTranslate()) / r, n = s <= 0, a = s >= 1), Lt.extend(e, {
        progress: s,
        isBeginning: n,
        isEnd: a
      }), (i.watchSlidesProgress || i.watchSlidesVisibility) && e.updateSlidesProgress(t), n && !o && e.emit("reachBeginning toEdge"), a && !l && e.emit("reachEnd toEdge"), (o && !n || l && !a) && e.emit("fromEdge"), e.emit("progress", s)
    }

    function $() {
      var t = this,
        e = t.slides,
        i = t.params,
        r = t.$wrapperEl,
        s = t.activeIndex,
        n = t.realIndex,
        a = t.virtual && i.virtual.enabled;
      e.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass);
      var o;
      o = a ? t.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + s + '"]') : e.eq(s), o.addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + n + '"]').addClass(i.slideDuplicateActiveClass));
      var l = o.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = e.eq(0), l.addClass(i.slideNextClass));
      var h = o.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === h.length && (h = e.eq(-1), h.addClass(i.slidePrevClass)), i.loop && (l.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), h.hasClass(i.slideDuplicateClass) ? r.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : r.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + h.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
    }

    function X(t) {
      var e, i = this,
        r = i.rtlTranslate ? i.translate : -i.translate,
        s = i.slidesGrid,
        n = i.snapGrid,
        a = i.params,
        o = i.activeIndex,
        l = i.realIndex,
        h = i.snapIndex,
        p = t;
      if (void 0 === p) {
        for (var c = 0; c < s.length; c += 1) void 0 !== s[c + 1] ? r >= s[c] && r < s[c + 1] - (s[c + 1] - s[c]) / 2 ? p = c : r >= s[c] && r < s[c + 1] && (p = c + 1) : r >= s[c] && (p = c);
        a.normalizeSlideIndex && (p < 0 || void 0 === p) && (p = 0)
      }
      if (e = n.indexOf(r) >= 0 ? n.indexOf(r) : Math.floor(p / a.slidesPerGroup), e >= n.length && (e = n.length - 1), p === o) return void(e !== h && (i.snapIndex = e, i.emit("snapIndexChange")));
      var d = parseInt(i.slides.eq(p).attr("data-swiper-slide-index") || p, 10);
      Lt.extend(i, {
        snapIndex: e,
        realIndex: d,
        previousIndex: o,
        activeIndex: p
      }), i.emit("activeIndexChange"), i.emit("snapIndexChange"), l !== d && i.emit("realIndexChange"), i.emit("slideChange")
    }

    function Y(e) {
      var i = this,
        r = i.params,
        s = t(e.target).closest("." + r.slideClass)[0],
        n = !1;
      if (s)
        for (var a = 0; a < i.slides.length; a += 1) i.slides[a] === s && (n = !0);
      if (!s || !n) return i.clickedSlide = void 0, void(i.clickedIndex = void 0);
      i.clickedSlide = s, i.virtual && i.params.virtual.enabled ? i.clickedIndex = parseInt(t(s).attr("data-swiper-slide-index"), 10) : i.clickedIndex = t(s).index(), r.slideToClickedSlide && void 0 !== i.clickedIndex && i.clickedIndex !== i.activeIndex && i.slideToClickedSlide()
    }

    function U(t) {
      void 0 === t && (t = this.isHorizontal() ? "x" : "y");
      var e = this,
        i = e.params,
        r = e.rtlTranslate,
        s = e.translate,
        n = e.$wrapperEl;
      if (i.virtualTranslate) return r ? -s : s;
      var a = Lt.getTranslate(n[0], t);
      return r && (a = -a), a || 0
    }

    function q(t, e) {
      var i = this,
        r = i.rtlTranslate,
        s = i.params,
        n = i.$wrapperEl,
        a = i.progress,
        o = 0,
        l = 0;
      i.isHorizontal() ? o = r ? -t : t : l = t, s.roundLengths && (o = Math.floor(o), l = Math.floor(l)), s.virtualTranslate || (Vt.transforms3d ? n.transform("translate3d(" + o + "px, " + l + "px, 0px)") : n.transform("translate(" + o + "px, " + l + "px)")), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? o : l;
      var h, p = i.maxTranslate() - i.minTranslate();
      h = 0 === p ? 0 : (t - i.minTranslate()) / p, h !== a && i.updateProgress(t), i.emit("setTranslate", i.translate, e)
    }

    function K() {
      return -this.snapGrid[0]
    }

    function Q() {
      return -this.snapGrid[this.snapGrid.length - 1]
    }

    function Z(t, e) {
      var i = this;
      i.$wrapperEl.transition(t), i.emit("setTransition", t, e)
    }

    function J(t, e) {
      void 0 === t && (t = !0);
      var i = this,
        r = i.activeIndex,
        s = i.params,
        n = i.previousIndex;
      s.autoHeight && i.updateAutoHeight();
      var a = e;
      if (a || (a = r > n ? "next" : r < n ? "prev" : "reset"), i.emit("transitionStart"), t && r !== n) {
        if ("reset" === a) return void i.emit("slideResetTransitionStart");
        i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart")
      }
    }

    function tt(t, e) {
      void 0 === t && (t = !0);
      var i = this,
        r = i.activeIndex,
        s = i.previousIndex;
      i.animating = !1, i.setTransition(0);
      var n = e;
      if (n || (n = r > s ? "next" : r < s ? "prev" : "reset"), i.emit("transitionEnd"), t && r !== s) {
        if ("reset" === n) return void i.emit("slideResetTransitionEnd");
        i.emit("slideChangeTransitionEnd"), "next" === n ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd")
      }
    }

    function et(t, e, i, r) {
      void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
      var s = this,
        n = t;
      n < 0 && (n = 0);
      var a = s.params,
        o = s.snapGrid,
        l = s.slidesGrid,
        h = s.previousIndex,
        p = s.activeIndex,
        c = s.rtlTranslate;
      if (s.animating && a.preventInteractionOnTransition) return !1;
      var d = Math.floor(n / a.slidesPerGroup);
      d >= o.length && (d = o.length - 1), (p || a.initialSlide || 0) === (h || 0) && i && s.emit("beforeSlideChangeStart");
      var u = -o[d];
      if (s.updateProgress(u), a.normalizeSlideIndex)
        for (var f = 0; f < l.length; f += 1) - Math.floor(100 * u) >= Math.floor(100 * l[f]) && (n = f);
      if (s.initialized && n !== p) {
        if (!s.allowSlideNext && u < s.translate && u < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && u > s.translate && u > s.maxTranslate() && (p || 0) !== n) return !1
      }
      var m;
      return m = n > p ? "next" : n < p ? "prev" : "reset", c && -u === s.translate || !c && u === s.translate ? (s.updateActiveIndex(n), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(u), "reset" !== m && (s.transitionStart(i, m), s.transitionEnd(i, m)), !1) : (0 !== e && Vt.transition ? (s.setTransition(e), s.setTranslate(u), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, r), s.transitionStart(i, m), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (t) {
        s && !s.destroyed && t.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, m))
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(u), s.updateActiveIndex(n), s.updateSlidesClasses(), s.emit("beforeTransitionStart", e, r), s.transitionStart(i, m), s.transitionEnd(i, m)), !0)
    }

    function it(t, e, i, r) {
      void 0 === t && (t = 0), void 0 === e && (e = this.params.speed), void 0 === i && (i = !0);
      var s = this,
        n = t;
      return s.params.loop && (n += s.loopedSlides), s.slideTo(n, e, i, r)
    }

    function rt(t, e, i) {
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      var r = this,
        s = r.params,
        n = r.animating;
      return s.loop ? !n && (r.loopFix(), r._clientLeft = r.$wrapperEl[0].clientLeft, r.slideTo(r.activeIndex + s.slidesPerGroup, t, e, i)) : r.slideTo(r.activeIndex + s.slidesPerGroup, t, e, i)
    }

    function st(t, e, i) {
      function r(t) {
        return t < 0 ? -Math.floor(Math.abs(t)) : Math.floor(t)
      }
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      var s = this,
        n = s.params,
        a = s.animating,
        o = s.snapGrid,
        l = s.slidesGrid,
        h = s.rtlTranslate;
      if (n.loop) {
        if (a) return !1;
        s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft
      }
      var p, c = h ? s.translate : -s.translate,
        d = r(c),
        u = o.map(function (t) {
          return r(t)
        }),
        f = (l.map(function (t) {
          return r(t)
        }), o[u.indexOf(d)], o[u.indexOf(d) - 1]);
      return void 0 !== f && (p = l.indexOf(f)) < 0 && (p = s.activeIndex - 1), s.slideTo(p, t, e, i)
    }

    function nt(t, e, i) {
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      var r = this;
      return r.slideTo(r.activeIndex, t, e, i)
    }

    function at(t, e, i) {
      void 0 === t && (t = this.params.speed), void 0 === e && (e = !0);
      var r = this,
        s = r.activeIndex,
        n = Math.floor(s / r.params.slidesPerGroup);
      if (n < r.snapGrid.length - 1) {
        var a = r.rtlTranslate ? r.translate : -r.translate,
          o = r.snapGrid[n];
        a - o > (r.snapGrid[n + 1] - o) / 2 && (s = r.params.slidesPerGroup)
      }
      return r.slideTo(s, t, e, i)
    }

    function ot() {
      var e, i = this,
        r = i.params,
        s = i.$wrapperEl,
        n = "auto" === r.slidesPerView ? i.slidesPerViewDynamic() : r.slidesPerView,
        a = i.clickedIndex;
      if (r.loop) {
        if (i.animating) return;
        e = parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10), r.centeredSlides ? a < i.loopedSlides - n / 2 || a > i.slides.length - i.loopedSlides + n / 2 ? (i.loopFix(), a = s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + r.slideDuplicateClass + ")").eq(0).index(), Lt.nextTick(function () {
          i.slideTo(a)
        })) : i.slideTo(a) : a > i.slides.length - n ? (i.loopFix(), a = s.children("." + r.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + r.slideDuplicateClass + ")").eq(0).index(), Lt.nextTick(function () {
          i.slideTo(a)
        })) : i.slideTo(a)
      } else i.slideTo(a)
    }

    function lt() {
      var e = this,
        i = e.params,
        r = e.$wrapperEl;
      r.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
      var s = r.children("." + i.slideClass);
      if (i.loopFillGroupWithBlank) {
        var n = i.slidesPerGroup - s.length % i.slidesPerGroup;
        if (n !== i.slidesPerGroup) {
          for (var a = 0; a < n; a += 1) {
            var o = t(Ot.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
            r.append(o)
          }
          s = r.children("." + i.slideClass)
        }
      }
      "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = s.length), e.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
      var l = [],
        h = [];
      s.each(function (i, r) {
        var n = t(r);
        i < e.loopedSlides && h.push(r), i < s.length && i >= s.length - e.loopedSlides && l.push(r), n.attr("data-swiper-slide-index", i)
      });
      for (var p = 0; p < h.length; p += 1) r.append(t(h[p].cloneNode(!0)).addClass(i.slideDuplicateClass));
      for (var c = l.length - 1; c >= 0; c -= 1) r.prepend(t(l[c].cloneNode(!0)).addClass(i.slideDuplicateClass))
    }

    function ht() {
      var t, e = this,
        i = e.params,
        r = e.activeIndex,
        s = e.slides,
        n = e.loopedSlides,
        a = e.allowSlidePrev,
        o = e.allowSlideNext,
        l = e.snapGrid,
        h = e.rtlTranslate;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var p = -l[r],
        c = p - e.getTranslate();
      if (r < n) {
        t = s.length - 3 * n + r, t += n;
        e.slideTo(t, 0, !1, !0) && 0 !== c && e.setTranslate((h ? -e.translate : e.translate) - c)
      } else if ("auto" === i.slidesPerView && r >= 2 * n || r >= s.length - n) {
        t = -s.length + r + n, t += n;
        var d = e.slideTo(t, 0, !1, !0);
        d && 0 !== c && e.setTranslate((h ? -e.translate : e.translate) - c)
      }
      e.allowSlidePrev = a, e.allowSlideNext = o
    }

    function pt() {
      var t = this,
        e = t.$wrapperEl,
        i = t.params,
        r = t.slides;
      e.children("." + i.slideClass + "." + i.slideDuplicateClass + ",." + i.slideClass + "." + i.slideBlankClass).remove(), r.removeAttr("data-swiper-slide-index")
    }

    function ct(t) {
      var e = this;
      if (!(Vt.touch || !e.params.simulateTouch || e.params.watchOverflow && e.isLocked)) {
        var i = e.el;
        i.style.cursor = "move", i.style.cursor = t ? "-webkit-grabbing" : "-webkit-grab", i.style.cursor = t ? "-moz-grabbin" : "-moz-grab", i.style.cursor = t ? "grabbing" : "grab"
      }
    }

    function dt() {
      var t = this;
      Vt.touch || t.params.watchOverflow && t.isLocked || (t.el.style.cursor = "")
    }

    function ut(t) {
      var e = this,
        i = e.$wrapperEl,
        r = e.params;
      if (r.loop && e.loopDestroy(), "object" == typeof t && "length" in t)
        for (var s = 0; s < t.length; s += 1) t[s] && i.append(t[s]);
      else i.append(t);
      r.loop && e.loopCreate(), r.observer && Vt.observer || e.update()
    }

    function ft(t) {
      var e = this,
        i = e.params,
        r = e.$wrapperEl,
        s = e.activeIndex;
      i.loop && e.loopDestroy();
      var n = s + 1;
      if ("object" == typeof t && "length" in t) {
        for (var a = 0; a < t.length; a += 1) t[a] && r.prepend(t[a]);
        n = s + t.length
      } else r.prepend(t);
      i.loop && e.loopCreate(), i.observer && Vt.observer || e.update(), e.slideTo(n, 0, !1)
    }

    function mt(t, e) {
      var i = this,
        r = i.$wrapperEl,
        s = i.params,
        n = i.activeIndex,
        a = n;
      s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = r.children("." + s.slideClass));
      var o = i.slides.length;
      if (t <= 0) return void i.prependSlide(e);
      if (t >= o) return void i.appendSlide(e);
      for (var l = a > t ? a + 1 : a, h = [], p = o - 1; p >= t; p -= 1) {
        var c = i.slides.eq(p);
        c.remove(), h.unshift(c)
      }
      if ("object" == typeof e && "length" in e) {
        for (var d = 0; d < e.length; d += 1) e[d] && r.append(e[d]);
        l = a > t ? a + e.length : a
      } else r.append(e);
      for (var u = 0; u < h.length; u += 1) r.append(h[u]);
      s.loop && i.loopCreate(), s.observer && Vt.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
    }

    function gt(t) {
      var e = this,
        i = e.params,
        r = e.$wrapperEl,
        s = e.activeIndex,
        n = s;
      i.loop && (n -= e.loopedSlides, e.loopDestroy(), e.slides = r.children("." + i.slideClass));
      var a, o = n;
      if ("object" == typeof t && "length" in t) {
        for (var l = 0; l < t.length; l += 1) a = t[l], e.slides[a] && e.slides.eq(a).remove(), a < o && (o -= 1);
        o = Math.max(o, 0)
      } else a = t, e.slides[a] && e.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);
      i.loop && e.loopCreate(), i.observer && Vt.observer || e.update(), i.loop ? e.slideTo(o + e.loopedSlides, 0, !1) : e.slideTo(o, 0, !1)
    }

    function vt() {
      for (var t = this, e = [], i = 0; i < t.slides.length; i += 1) e.push(i);
      t.removeSlide(e)
    }

    function yt(e) {
      var i = this,
        r = i.touchEventsData,
        s = i.params,
        n = i.touches;
      if (!i.animating || !s.preventInteractionOnTransition) {
        var a = e;
        if (a.originalEvent && (a = a.originalEvent), r.isTouchEvent = "touchstart" === a.type, (r.isTouchEvent || !("which" in a) || 3 !== a.which) && !(!r.isTouchEvent && "button" in a && a.button > 0 || r.isTouched && r.isMoved)) {
          if (s.noSwiping && t(a.target).closest(s.noSwipingSelector ? s.noSwipingSelector : "." + s.noSwipingClass)[0]) return void(i.allowClick = !0);
          if (!s.swipeHandler || t(a).closest(s.swipeHandler)[0]) {
            n.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, n.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
            var o = n.currentX,
              l = n.currentY,
              h = s.edgeSwipeDetection || s.iOSEdgeSwipeDetection,
              p = s.edgeSwipeThreshold || s.iOSEdgeSwipeThreshold;
            if (!h || !(o <= p || o >= Ft.screen.width - p)) {
              if (Lt.extend(r, {
                  isTouched: !0,
                  isMoved: !1,
                  allowTouchCallbacks: !0,
                  isScrolling: void 0,
                  startMoving: void 0
                }), n.startX = o, n.startY = l, r.touchStartTime = Lt.now(), i.allowClick = !0, i.updateSize(), i.swipeDirection = void 0, s.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== a.type) {
                var c = !0;
                t(a.target).is(r.formElements) && (c = !1), Ot.activeElement && t(Ot.activeElement).is(r.formElements) && Ot.activeElement !== a.target && Ot.activeElement.blur();
                var d = c && i.allowTouchMove && s.touchStartPreventDefault;
                (s.touchStartForcePreventDefault || d) && a.preventDefault()
              }
              i.emit("touchStart", a)
            }
          }
        }
      }
    }

    function _t(e) {
      var i = this,
        r = i.touchEventsData,
        s = i.params,
        n = i.touches,
        a = i.rtlTranslate,
        o = e;
      if (o.originalEvent && (o = o.originalEvent), !r.isTouched) return void(r.startMoving && r.isScrolling && i.emit("touchMoveOpposite", o));
      if (!r.isTouchEvent || "mousemove" !== o.type) {
        var l = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
          h = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
        if (o.preventedByNestedSwiper) return n.startX = l, void(n.startY = h);
        if (!i.allowTouchMove) return i.allowClick = !1, void(r.isTouched && (Lt.extend(n, {
          startX: l,
          startY: h,
          currentX: l,
          currentY: h
        }), r.touchStartTime = Lt.now()));
        if (r.isTouchEvent && s.touchReleaseOnEdges && !s.loop)
          if (i.isVertical()) {
            if (h < n.startY && i.translate <= i.maxTranslate() || h > n.startY && i.translate >= i.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
          } else if (l < n.startX && i.translate <= i.maxTranslate() || l > n.startX && i.translate >= i.minTranslate()) return;
        if (r.isTouchEvent && Ot.activeElement && o.target === Ot.activeElement && t(o.target).is(r.formElements)) return r.isMoved = !0, void(i.allowClick = !1);
        if (r.allowTouchCallbacks && i.emit("touchMove", o), !(o.targetTouches && o.targetTouches.length > 1)) {
          n.currentX = l, n.currentY = h;
          var p = n.currentX - n.startX,
            c = n.currentY - n.startY;
          if (!(i.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(c, 2)) < i.params.threshold)) {
            if (void 0 === r.isScrolling) {
              var d;
              i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : p * p + c * c >= 25 && (d = 180 * Math.atan2(Math.abs(c), Math.abs(p)) / Math.PI, r.isScrolling = i.isHorizontal() ? d > s.touchAngle : 90 - d > s.touchAngle)
            }
            if (r.isScrolling && i.emit("touchMoveOpposite", o), void 0 === r.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (r.startMoving = !0)), r.isScrolling) return void(r.isTouched = !1);
            if (r.startMoving) {
              i.allowClick = !1, o.preventDefault(), s.touchMoveStopPropagation && !s.nested && o.stopPropagation(), r.isMoved || (s.loop && i.loopFix(), r.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), r.allowMomentumBounce = !1, !s.grabCursor || !0 !== i.allowSlideNext && !0 !== i.allowSlidePrev || i.setGrabCursor(!0), i.emit("sliderFirstMove", o)), i.emit("sliderMove", o), r.isMoved = !0;
              var u = i.isHorizontal() ? p : c;
              n.diff = u, u *= s.touchRatio, a && (u = -u), i.swipeDirection = u > 0 ? "prev" : "next", r.currentTranslate = u + r.startTranslate;
              var f = !0,
                m = s.resistanceRatio;
              if (s.touchReleaseOnEdges && (m = 0), u > 0 && r.currentTranslate > i.minTranslate() ? (f = !1, s.resistance && (r.currentTranslate = i.minTranslate() - 1 + Math.pow(-i.minTranslate() + r.startTranslate + u, m))) : u < 0 && r.currentTranslate < i.maxTranslate() && (f = !1, s.resistance && (r.currentTranslate = i.maxTranslate() + 1 - Math.pow(i.maxTranslate() - r.startTranslate - u, m))), f && (o.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.threshold > 0) {
                if (!(Math.abs(u) > s.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                if (!r.allowThresholdMove) return r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, void(n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
              }
              s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (i.updateActiveIndex(), i.updateSlidesClasses()), s.freeMode && (0 === r.velocities.length && r.velocities.push({
                position: n[i.isHorizontal() ? "startX" : "startY"],
                time: r.touchStartTime
              }), r.velocities.push({
                position: n[i.isHorizontal() ? "currentX" : "currentY"],
                time: Lt.now()
              })), i.updateProgress(r.currentTranslate), i.setTranslate(r.currentTranslate))
            }
          }
        }
      }
    }

    function bt(t) {
      var e = this,
        i = e.touchEventsData,
        r = e.params,
        s = e.touches,
        n = e.rtlTranslate,
        a = e.$wrapperEl,
        o = e.slidesGrid,
        l = e.snapGrid,
        h = t;
      if (h.originalEvent && (h = h.originalEvent), i.allowTouchCallbacks && e.emit("touchEnd", h), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && r.grabCursor && e.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
      r.grabCursor && i.isMoved && i.isTouched && (!0 === e.allowSlideNext || !0 === e.allowSlidePrev) && e.setGrabCursor(!1);
      var p = Lt.now(),
        c = p - i.touchStartTime;
      if (e.allowClick && (e.updateClickedSlide(h), e.emit("tap", h), c < 300 && p - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = Lt.nextTick(function () {
          e && !e.destroyed && e.emit("click", h)
        }, 300)), c < 300 && p - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), e.emit("doubleTap", h))), i.lastClickTime = Lt.now(), Lt.nextTick(function () {
          e.destroyed || (e.allowClick = !0)
        }), !i.isTouched || !i.isMoved || !e.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
      i.isTouched = !1, i.isMoved = !1, i.startMoving = !1;
      var d;
      if (d = r.followFinger ? n ? e.translate : -e.translate : -i.currentTranslate, r.freeMode) {
        if (d < -e.minTranslate()) return void e.slideTo(e.activeIndex);
        if (d > -e.maxTranslate()) return void(e.slides.length < l.length ? e.slideTo(l.length - 1) : e.slideTo(e.slides.length - 1));
        if (r.freeModeMomentum) {
          if (i.velocities.length > 1) {
            var u = i.velocities.pop(),
              f = i.velocities.pop(),
              m = u.position - f.position,
              g = u.time - f.time;
            e.velocity = m / g, e.velocity /= 2, Math.abs(e.velocity) < r.freeModeMinimumVelocity && (e.velocity = 0), (g > 150 || Lt.now() - u.time > 300) && (e.velocity = 0)
          } else e.velocity = 0;
          e.velocity *= r.freeModeMomentumVelocityRatio, i.velocities.length = 0;
          var v = 1e3 * r.freeModeMomentumRatio,
            y = e.velocity * v,
            _ = e.translate + y;
          n && (_ = -_);
          var b, T, E = !1,
            w = 20 * Math.abs(e.velocity) * r.freeModeMomentumBounceRatio;
          if (_ < e.maxTranslate()) r.freeModeMomentumBounce ? (_ + e.maxTranslate() < -w && (_ = e.maxTranslate() - w), b = e.maxTranslate(), E = !0, i.allowMomentumBounce = !0) : _ = e.maxTranslate(), r.loop && r.centeredSlides && (T = !0);
          else if (_ > e.minTranslate()) r.freeModeMomentumBounce ? (_ - e.minTranslate() > w && (_ = e.minTranslate() + w), b = e.minTranslate(), E = !0, i.allowMomentumBounce = !0) : _ = e.minTranslate(), r.loop && r.centeredSlides && (T = !0);
          else if (r.freeModeSticky) {
            for (var x, S = 0; S < l.length; S += 1)
              if (l[S] > -_) {
                x = S;
                break
              } _ = Math.abs(l[x] - _) < Math.abs(l[x - 1] - _) || "next" === e.swipeDirection ? l[x] : l[x - 1], _ = -_
          }
          if (T && e.once("transitionEnd", function () {
              e.loopFix()
            }), 0 !== e.velocity) v = n ? Math.abs((-_ - e.translate) / e.velocity) : Math.abs((_ - e.translate) / e.velocity);
          else if (r.freeModeSticky) return void e.slideToClosest();
          r.freeModeMomentumBounce && E ? (e.updateProgress(b), e.setTransition(v), e.setTranslate(_), e.transitionStart(!0, e.swipeDirection), e.animating = !0, a.transitionEnd(function () {
            e && !e.destroyed && i.allowMomentumBounce && (e.emit("momentumBounce"), e.setTransition(r.speed), e.setTranslate(b), a.transitionEnd(function () {
              e && !e.destroyed && e.transitionEnd()
            }))
          })) : e.velocity ? (e.updateProgress(_), e.setTransition(v), e.setTranslate(_), e.transitionStart(!0, e.swipeDirection), e.animating || (e.animating = !0, a.transitionEnd(function () {
            e && !e.destroyed && e.transitionEnd()
          }))) : e.updateProgress(_), e.updateActiveIndex(), e.updateSlidesClasses()
        } else if (r.freeModeSticky) return void e.slideToClosest();
        return void((!r.freeModeMomentum || c >= r.longSwipesMs) && (e.updateProgress(), e.updateActiveIndex(), e.updateSlidesClasses()))
      }
      for (var C = 0, P = e.slidesSizesGrid[0], A = 0; A < o.length; A += r.slidesPerGroup) void 0 !== o[A + r.slidesPerGroup] ? d >= o[A] && d < o[A + r.slidesPerGroup] && (C = A, P = o[A + r.slidesPerGroup] - o[A]) : d >= o[A] && (C = A, P = o[o.length - 1] - o[o.length - 2]);
      var k = (d - o[C]) / P;
      if (c > r.longSwipesMs) {
        if (!r.longSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection && (k >= r.longSwipesRatio ? e.slideTo(C + r.slidesPerGroup) : e.slideTo(C)), "prev" === e.swipeDirection && (k > 1 - r.longSwipesRatio ? e.slideTo(C + r.slidesPerGroup) : e.slideTo(C))
      } else {
        if (!r.shortSwipes) return void e.slideTo(e.activeIndex);
        "next" === e.swipeDirection && e.slideTo(C + r.slidesPerGroup), "prev" === e.swipeDirection && e.slideTo(C)
      }
    }

    function Tt() {
      var t = this,
        e = t.params,
        i = t.el;
      if (!i || 0 !== i.offsetWidth) {
        e.breakpoints && t.setBreakpoint();
        var r = t.allowSlideNext,
          s = t.allowSlidePrev,
          n = t.snapGrid;
        if (t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), e.freeMode) {
          var a = Math.min(Math.max(t.translate, t.maxTranslate()), t.minTranslate());
          t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses(), e.autoHeight && t.updateAutoHeight()
        } else t.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0);
        t.allowSlidePrev = s, t.allowSlideNext = r, t.params.watchOverflow && n !== t.snapGrid && t.checkOverflow()
      }
    }

    function Et(t) {
      var e = this;
      e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation()))
    }

    function wt() {
      var t = this,
        e = t.params,
        i = t.touchEvents,
        r = t.el,
        s = t.wrapperEl;
      t.onTouchStart = yt.bind(t), t.onTouchMove = _t.bind(t), t.onTouchEnd = bt.bind(t), t.onClick = Et.bind(t);
      var n = "container" === e.touchEventsTarget ? r : s,
        a = !!e.nested;
      if (Vt.touch || !Vt.pointerEvents && !Vt.prefixedPointerEvents) {
        if (Vt.touch) {
          var o = !("touchstart" !== i.start || !Vt.passiveListener || !e.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          n.addEventListener(i.start, t.onTouchStart, o), n.addEventListener(i.move, t.onTouchMove, Vt.passiveListener ? {
            passive: !1,
            capture: a
          } : a), n.addEventListener(i.end, t.onTouchEnd, o)
        }(e.simulateTouch && !qt.ios && !qt.android || e.simulateTouch && !Vt.touch && qt.ios) && (n.addEventListener("mousedown", t.onTouchStart, !1), Ot.addEventListener("mousemove", t.onTouchMove, a), Ot.addEventListener("mouseup", t.onTouchEnd, !1))
      } else n.addEventListener(i.start, t.onTouchStart, !1), Ot.addEventListener(i.move, t.onTouchMove, a), Ot.addEventListener(i.end, t.onTouchEnd, !1);
      (e.preventClicks || e.preventClicksPropagation) && n.addEventListener("click", t.onClick, !0), t.on(qt.ios || qt.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Tt, !0)
    }

    function xt() {
      var t = this,
        e = t.params,
        i = t.touchEvents,
        r = t.el,
        s = t.wrapperEl,
        n = "container" === e.touchEventsTarget ? r : s,
        a = !!e.nested;
      if (Vt.touch || !Vt.pointerEvents && !Vt.prefixedPointerEvents) {
        if (Vt.touch) {
          var o = !("onTouchStart" !== i.start || !Vt.passiveListener || !e.passiveListeners) && {
            passive: !0,
            capture: !1
          };
          n.removeEventListener(i.start, t.onTouchStart, o), n.removeEventListener(i.move, t.onTouchMove, a), n.removeEventListener(i.end, t.onTouchEnd, o)
        }(e.simulateTouch && !qt.ios && !qt.android || e.simulateTouch && !Vt.touch && qt.ios) && (n.removeEventListener("mousedown", t.onTouchStart, !1), Ot.removeEventListener("mousemove", t.onTouchMove, a), Ot.removeEventListener("mouseup", t.onTouchEnd, !1))
      } else n.removeEventListener(i.start, t.onTouchStart, !1), Ot.removeEventListener(i.move, t.onTouchMove, a), Ot.removeEventListener(i.end, t.onTouchEnd, !1);
      (e.preventClicks || e.preventClicksPropagation) && n.removeEventListener("click", t.onClick, !0), t.off(qt.ios || qt.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", Tt)
    }

    function St() {
      var t = this,
        e = t.activeIndex,
        i = t.initialized,
        r = t.loopedSlides;
      void 0 === r && (r = 0);
      var s = t.params,
        n = s.breakpoints;
      if (n && (!n || 0 !== Object.keys(n).length)) {
        var a = t.getBreakpoint(n);
        if (a && t.currentBreakpoint !== a) {
          var o = a in n ? n[a] : void 0;
          o && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (t) {
            var e = o[t];
            void 0 !== e && (o[t] = "slidesPerView" !== t || "AUTO" !== e && "auto" !== e ? "slidesPerView" === t ? parseFloat(e) : parseInt(e, 10) : "auto")
          });
          var l = o || t.originalParams,
            h = l.direction && l.direction !== s.direction,
            p = s.loop && (l.slidesPerView !== s.slidesPerView || h);
          h && i && t.changeDirection(), Lt.extend(t.params, l), Lt.extend(t, {
            allowTouchMove: t.params.allowTouchMove,
            allowSlideNext: t.params.allowSlideNext,
            allowSlidePrev: t.params.allowSlidePrev
          }), t.currentBreakpoint = a, p && i && (t.loopDestroy(), t.loopCreate(), t.updateSlides(), t.slideTo(e - r + t.loopedSlides, 0, !1)), t.emit("breakpoint", l)
        }
      }
    }

    function Ct(t) {
      var e = this;
      if (t) {
        var i = !1,
          r = [];
        Object.keys(t).forEach(function (t) {
          r.push(t)
        }), r.sort(function (t, e) {
          return parseInt(t, 10) - parseInt(e, 10)
        });
        for (var s = 0; s < r.length; s += 1) {
          var n = r[s];
          e.params.breakpointsInverse ? n <= Ft.innerWidth && (i = n) : n >= Ft.innerWidth && !i && (i = n)
        }
        return i || "max"
      }
    }

    function Pt() {
      var t = this,
        e = t.classNames,
        i = t.params,
        r = t.rtl,
        s = t.$el,
        n = [];
      n.push("initialized"), n.push(i.direction), i.freeMode && n.push("free-mode"), Vt.flexbox || n.push("no-flexbox"), i.autoHeight && n.push("autoheight"), r && n.push("rtl"), i.slidesPerColumn > 1 && n.push("multirow"), qt.android && n.push("android"), qt.ios && n.push("ios"), (Bt.isIE || Bt.isEdge) && (Vt.pointerEvents || Vt.prefixedPointerEvents) && n.push("wp8-" + i.direction), n.forEach(function (t) {
        e.push(i.containerModifierClass + t)
      }), s.addClass(e.join(" "))
    }

    function At() {
      var t = this,
        e = t.$el,
        i = t.classNames;
      e.removeClass(i.join(" "))
    }

    function kt(t, e, i, r, s, n) {
      function a() {
        n && n()
      }
      var o;
      t.complete && s ? a() : e ? (o = new Ft.Image, o.onload = a, o.onerror = a, r && (o.sizes = r), i && (o.srcset = i), e && (o.src = e)) : a()
    }

    function Dt() {
      function t() {
        void 0 !== e && null !== e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
      }
      var e = this;
      e.imagesToLoad = e.$el.find("img");
      for (var i = 0; i < e.imagesToLoad.length; i += 1) {
        var r = e.imagesToLoad[i];
        e.loadImage(r, r.currentSrc || r.getAttribute("src"), r.srcset || r.getAttribute("srcset"), r.sizes || r.getAttribute("sizes"), !0, t)
      }
    }

    function Mt() {
      var t = this,
        e = t.isLocked;
      t.isLocked = 1 === t.snapGrid.length, t.allowSlideNext = !t.isLocked, t.allowSlidePrev = !t.isLocked, e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock"), e && e !== t.isLocked && (t.isEnd = !1, t.navigation.update())
    }

    function It() {
      var t = "onwheel" in Ot;
      if (!t) {
        var e = Ot.createElement("div");
        e.setAttribute("onwheel", "return;"), t = "function" == typeof e.onwheel
      }
      return !t && Ot.implementation && Ot.implementation.hasFeature && !0 !== Ot.implementation.hasFeature("", "") && (t = Ot.implementation.hasFeature("Events.wheel", "3.0")), t
    }
    var Ot = "undefined" == typeof document ? {
        body: {},
        addEventListener: function () {},
        removeEventListener: function () {},
        activeElement: {
          blur: function () {},
          nodeName: ""
        },
        querySelector: function () {
          return null
        },
        querySelectorAll: function () {
          return []
        },
        getElementById: function () {
          return null
        },
        createEvent: function () {
          return {
            initEvent: function () {}
          }
        },
        createElement: function () {
          return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute: function () {},
            getElementsByTagName: function () {
              return []
            }
          }
        },
        location: {
          hash: ""
        }
      } : document,
      Ft = "undefined" == typeof window ? {
        document: Ot,
        navigator: {
          userAgent: ""
        },
        location: {},
        history: {},
        CustomEvent: function () {
          return this
        },
        addEventListener: function () {},
        removeEventListener: function () {},
        getComputedStyle: function () {
          return {
            getPropertyValue: function () {
              return ""
            }
          }
        },
        Image: function () {},
        Date: function () {},
        screen: {},
        setTimeout: function () {},
        clearTimeout: function () {}
      } : window,
      Rt = function (t) {
        for (var e = this, i = 0; i < t.length; i += 1) e[i] = t[i];
        return e.length = t.length, this
      };
    t.fn = Rt.prototype, t.Class = Rt, t.Dom7 = Rt;
    var Nt = {
      addClass: i,
      removeClass: r,
      hasClass: s,
      toggleClass: n,
      attr: a,
      removeAttr: o,
      data: l,
      transform: h,
      transition: p,
      on: c,
      off: d,
      trigger: u,
      transitionEnd: f,
      outerWidth: m,
      outerHeight: g,
      offset: v,
      css: _,
      each: b,
      html: T,
      text: E,
      is: w,
      index: x,
      eq: S,
      append: C,
      prepend: P,
      next: A,
      nextAll: k,
      prev: D,
      prevAll: M,
      parent: I,
      parents: O,
      closest: F,
      find: R,
      children: N,
      remove: L,
      add: V,
      styles: y
    };
    Object.keys(Nt).forEach(function (e) {
      t.fn[e] = Nt[e]
    });
    var Lt = {
        deleteProps: function (t) {
          var e = t;
          Object.keys(e).forEach(function (t) {
            try {
              e[t] = null
            } catch (t) {}
            try {
              delete e[t]
            } catch (t) {}
          })
        },
        nextTick: function (t, e) {
          return void 0 === e && (e = 0), setTimeout(t, e)
        },
        now: function () {
          return Date.now()
        },
        getTranslate: function (t, e) {
          void 0 === e && (e = "x");
          var i, r, s, n = Ft.getComputedStyle(t, null);
          return Ft.WebKitCSSMatrix ? (r = n.transform || n.webkitTransform, r.split(",").length > 6 && (r = r.split(", ").map(function (t) {
            return t.replace(",", ".")
          }).join(", ")), s = new Ft.WebKitCSSMatrix("none" === r ? "" : r)) : (s = n.MozTransform || n.OTransform || n.MsTransform || n.msTransform || n.transform || n.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = s.toString().split(",")), "x" === e && (r = Ft.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === e && (r = Ft.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), r || 0
        },
        parseUrlQuery: function (t) {
          var e, i, r, s, n = {},
            a = t || Ft.location.href;
          if ("string" == typeof a && a.length)
            for (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "", i = a.split("&").filter(function (t) {
                return "" !== t
              }), s = i.length, e = 0; e < s; e += 1) r = i[e].replace(/#\S+/g, "").split("="), n[decodeURIComponent(r[0])] = void 0 === r[1] ? void 0 : decodeURIComponent(r[1]) || "";
          return n
        },
        isObject: function (t) {
          return "object" == typeof t && null !== t && t.constructor && t.constructor === Object
        },
        extend: function () {
          for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
          for (var i = Object(t[0]), r = 1; r < t.length; r += 1) {
            var s = t[r];
            if (void 0 !== s && null !== s)
              for (var n = Object.keys(Object(s)), a = 0, o = n.length; a < o; a += 1) {
                var l = n[a],
                  h = Object.getOwnPropertyDescriptor(s, l);
                void 0 !== h && h.enumerable && (Lt.isObject(i[l]) && Lt.isObject(s[l]) ? Lt.extend(i[l], s[l]) : !Lt.isObject(i[l]) && Lt.isObject(s[l]) ? (i[l] = {}, Lt.extend(i[l], s[l])) : i[l] = s[l])
              }
          }
          return i
        }
      },
      Vt = function () {
        var t = Ot.createElement("div");
        return {
          touch: Ft.Modernizr && !0 === Ft.Modernizr.touch || function () {
            return !!(Ft.navigator.maxTouchPoints > 0 || "ontouchstart" in Ft || Ft.DocumentTouch && Ot instanceof Ft.DocumentTouch)
          }(),
          pointerEvents: !!(Ft.navigator.pointerEnabled || Ft.PointerEvent || "maxTouchPoints" in Ft.navigator && Ft.navigator.maxTouchPoints > 0),
          prefixedPointerEvents: !!Ft.navigator.msPointerEnabled,
          transition: function () {
            var e = t.style;
            return "transition" in e || "webkitTransition" in e || "MozTransition" in e
          }(),
          transforms3d: Ft.Modernizr && !0 === Ft.Modernizr.csstransforms3d || function () {
            var e = t.style;
            return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
          }(),
          flexbox: function () {
            for (var e = t.style, i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), r = 0; r < i.length; r += 1)
              if (i[r] in e) return !0;
            return !1
          }(),
          observer: function () {
            return "MutationObserver" in Ft || "WebkitMutationObserver" in Ft
          }(),
          passiveListener: function () {
            var t = !1;
            try {
              var e = Object.defineProperty({}, "passive", {
                get: function () {
                  t = !0
                }
              });
              Ft.addEventListener("testPassiveListener", null, e)
            } catch (t) {}
            return t
          }(),
          gestures: function () {
            return "ongesturestart" in Ft
          }()
        }
      }(),
      Bt = function () {
        return {
          isIE: !!Ft.navigator.userAgent.match(/Trident/g) || !!Ft.navigator.userAgent.match(/MSIE/g),
          isEdge: !!Ft.navigator.userAgent.match(/Edge/g),
          isSafari: function () {
            var t = Ft.navigator.userAgent.toLowerCase();
            return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
          }(),
          isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(Ft.navigator.userAgent)
        }
      }(),
      zt = function (t) {
        void 0 === t && (t = {});
        var e = this;
        e.params = t, e.eventsListeners = {}, e.params && e.params.on && Object.keys(e.params.on).forEach(function (t) {
          e.on(t, e.params.on[t])
        })
      },
      Ht = {
        components: {
          configurable: !0
        }
      };
    zt.prototype.on = function (t, e, i) {
      var r = this;
      if ("function" != typeof e) return r;
      var s = i ? "unshift" : "push";
      return t.split(" ").forEach(function (t) {
        r.eventsListeners[t] || (r.eventsListeners[t] = []), r.eventsListeners[t][s](e)
      }), r
    }, zt.prototype.once = function (t, e, i) {
      function r() {
        for (var i = [], n = arguments.length; n--;) i[n] = arguments[n];
        e.apply(s, i), s.off(t, r), r.f7proxy && delete r.f7proxy
      }
      var s = this;
      return "function" != typeof e ? s : (r.f7proxy = e, s.on(t, r, i))
    }, zt.prototype.off = function (t, e) {
      var i = this;
      return i.eventsListeners ? (t.split(" ").forEach(function (t) {
        void 0 === e ? i.eventsListeners[t] = [] : i.eventsListeners[t] && i.eventsListeners[t].length && i.eventsListeners[t].forEach(function (r, s) {
          (r === e || r.f7proxy && r.f7proxy === e) && i.eventsListeners[t].splice(s, 1)
        })
      }), i) : i
    }, zt.prototype.emit = function () {
      for (var t = [], e = arguments.length; e--;) t[e] = arguments[e];
      var i = this;
      if (!i.eventsListeners) return i;
      var r, s, n;
      return "string" == typeof t[0] || Array.isArray(t[0]) ? (r = t[0], s = t.slice(1, t.length), n = i) : (r = t[0].events, s = t[0].data, n = t[0].context || i), (Array.isArray(r) ? r : r.split(" ")).forEach(function (t) {
        if (i.eventsListeners && i.eventsListeners[t]) {
          var e = [];
          i.eventsListeners[t].forEach(function (t) {
            e.push(t)
          }), e.forEach(function (t) {
            t.apply(n, s)
          })
        }
      }), i
    }, zt.prototype.useModulesParams = function (t) {
      var e = this;
      e.modules && Object.keys(e.modules).forEach(function (i) {
        var r = e.modules[i];
        r.params && Lt.extend(t, r.params)
      })
    }, zt.prototype.useModules = function (t) {
      void 0 === t && (t = {});
      var e = this;
      e.modules && Object.keys(e.modules).forEach(function (i) {
        var r = e.modules[i],
          s = t[i] || {};
        r.instance && Object.keys(r.instance).forEach(function (t) {
          var i = r.instance[t];
          e[t] = "function" == typeof i ? i.bind(e) : i
        }), r.on && e.on && Object.keys(r.on).forEach(function (t) {
          e.on(t, r.on[t])
        }), r.create && r.create.bind(e)(s)
      })
    }, Ht.components.set = function (t) {
      var e = this;
      e.use && e.use(t)
    }, zt.installModule = function (t) {
      for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
      var r = this;
      r.prototype.modules || (r.prototype.modules = {});
      var s = t.name || Object.keys(r.prototype.modules).length + "_" + Lt.now();
      return r.prototype.modules[s] = t, t.proto && Object.keys(t.proto).forEach(function (e) {
        r.prototype[e] = t.proto[e]
      }), t.static && Object.keys(t.static).forEach(function (e) {
        r[e] = t.static[e]
      }), t.install && t.install.apply(r, e), r
    }, zt.use = function (t) {
      for (var e = [], i = arguments.length - 1; i-- > 0;) e[i] = arguments[i + 1];
      var r = this;
      return Array.isArray(t) ? (t.forEach(function (t) {
        return r.installModule(t)
      }), r) : r.installModule.apply(r, [t].concat(e))
    }, Object.defineProperties(zt, Ht);
    var jt = {
        updateSize: B,
        updateSlides: z,
        updateAutoHeight: H,
        updateSlidesOffset: j,
        updateSlidesProgress: G,
        updateProgress: W,
        updateSlidesClasses: $,
        updateActiveIndex: X,
        updateClickedSlide: Y
      },
      Gt = {
        getTranslate: U,
        setTranslate: q,
        minTranslate: K,
        maxTranslate: Q
      },
      Wt = {
        setTransition: Z,
        transitionStart: J,
        transitionEnd: tt
      },
      $t = {
        slideTo: et,
        slideToLoop: it,
        slideNext: rt,
        slidePrev: st,
        slideReset: nt,
        slideToClosest: at,
        slideToClickedSlide: ot
      },
      Xt = {
        loopCreate: lt,
        loopFix: ht,
        loopDestroy: pt
      },
      Yt = {
        setGrabCursor: ct,
        unsetGrabCursor: dt
      },
      Ut = {
        appendSlide: ut,
        prependSlide: ft,
        addSlide: mt,
        removeSlide: gt,
        removeAllSlides: vt
      },
      qt = function () {
        var t = Ft.navigator.userAgent,
          e = {
            ios: !1,
            android: !1,
            androidChrome: !1,
            desktop: !1,
            windows: !1,
            iphone: !1,
            ipod: !1,
            ipad: !1,
            cordova: Ft.cordova || Ft.phonegap,
            phonegap: Ft.cordova || Ft.phonegap
          },
          i = t.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
          r = t.match(/(Android);?[\s\/]+([\d.]+)?/),
          s = t.match(/(iPad).*OS\s([\d_]+)/),
          n = t.match(/(iPod)(.*OS\s([\d_]+))?/),
          a = !s && t.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
        if (i && (e.os = "windows", e.osVersion = i[2], e.windows = !0), r && !i && (e.os = "android", e.osVersion = r[2], e.android = !0, e.androidChrome = t.toLowerCase().indexOf("chrome") >= 0), (s || a || n) && (e.os = "ios", e.ios = !0), a && !n && (e.osVersion = a[2].replace(/_/g, "."), e.iphone = !0), s && (e.osVersion = s[2].replace(/_/g, "."), e.ipad = !0), n && (e.osVersion = n[3] ? n[3].replace(/_/g, ".") : null, e.iphone = !0), e.ios && e.osVersion && t.indexOf("Version/") >= 0 && "10" === e.osVersion.split(".")[0] && (e.osVersion = t.toLowerCase().split("version/")[1].split(" ")[0]), e.desktop = !(e.os || e.android || e.webView), e.webView = (a || s || n) && t.match(/.*AppleWebKit(?!.*Safari)/i), e.os && "ios" === e.os) {
          var o = e.osVersion.split("."),
            l = Ot.querySelector('meta[name="viewport"]');
          e.minimalUi = !e.webView && (n || a) && (1 * o[0] == 7 ? 1 * o[1] >= 1 : 1 * o[0] > 7) && l && l.getAttribute("content").indexOf("minimal-ui") >= 0
        }
        return e.pixelRatio = Ft.devicePixelRatio || 1, e
      }(),
      Kt = {
        attachEvents: wt,
        detachEvents: xt
      },
      Qt = {
        setBreakpoint: St,
        getBreakpoint: Ct
      },
      Zt = {
        addClasses: Pt,
        removeClasses: At
      },
      Jt = {
        loadImage: kt,
        preloadImages: Dt
      },
      te = {
        checkOverflow: Mt
      },
      ee = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "container",
        initialSlide: 0,
        speed: 300,
        preventInteractionOnTransition: !1,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        freeMode: !1,
        freeModeMomentum: !0,
        freeModeMomentumRatio: 1,
        freeModeMomentumBounce: !0,
        freeModeMomentumBounceRatio: 1,
        freeModeMomentumVelocityRatio: 1,
        freeModeSticky: !1,
        freeModeMinimumVelocity: .02,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsInverse: !1,
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: "column",
        slidesPerGroup: 1,
        centeredSlides: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !1,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !0,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        watchSlidesVisibility: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        containerModifierClass: "swiper-container-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0
      },
      ie = {
        update: jt,
        translate: Gt,
        transition: Wt,
        slide: $t,
        loop: Xt,
        grabCursor: Yt,
        manipulation: Ut,
        events: Kt,
        breakpoints: Qt,
        checkOverflow: te,
        classes: Zt,
        images: Jt
      },
      re = {},
      se = function (e) {
        function i() {
          for (var r, s = [], n = arguments.length; n--;) s[n] = arguments[n];
          var a, o;
          1 === s.length && s[0].constructor && s[0].constructor === Object ? o = s[0] : (r = s, a = r[0], o = r[1]), o || (o = {}), o = Lt.extend({}, o), a && !o.el && (o.el = a), e.call(this, o), Object.keys(ie).forEach(function (t) {
            Object.keys(ie[t]).forEach(function (e) {
              i.prototype[e] || (i.prototype[e] = ie[t][e])
            })
          });
          var l = this;
          void 0 === l.modules && (l.modules = {}), Object.keys(l.modules).forEach(function (t) {
            var e = l.modules[t];
            if (e.params) {
              var i = Object.keys(e.params)[0],
                r = e.params[i];
              if ("object" != typeof r || null === r) return;
              if (!(i in o && "enabled" in r)) return;
              !0 === o[i] && (o[i] = {
                enabled: !0
              }), "object" != typeof o[i] || "enabled" in o[i] || (o[i].enabled = !0), o[i] || (o[i] = {
                enabled: !1
              })
            }
          });
          var h = Lt.extend({}, ee);
          l.useModulesParams(h), l.params = Lt.extend({}, h, re, o), l.originalParams = Lt.extend({}, l.params), l.passedParams = Lt.extend({}, o), l.$ = t;
          var p = t(l.params.el);
          if (a = p[0]) {
            if (p.length > 1) {
              var c = [];
              return p.each(function (t, e) {
                var r = Lt.extend({}, o, {
                  el: e
                });
                c.push(new i(r))
              }), c
            }
            a.swiper = l, p.data("swiper", l);
            var d = p.children("." + l.params.wrapperClass);
            return Lt.extend(l, {
              $el: p,
              el: a,
              $wrapperEl: d,
              wrapperEl: d[0],
              classNames: [],
              slides: t(),
              slidesGrid: [],
              snapGrid: [],
              slidesSizesGrid: [],
              isHorizontal: function () {
                return "horizontal" === l.params.direction
              },
              isVertical: function () {
                return "vertical" === l.params.direction
              },
              rtl: "rtl" === a.dir.toLowerCase() || "rtl" === p.css("direction"),
              rtlTranslate: "horizontal" === l.params.direction && ("rtl" === a.dir.toLowerCase() || "rtl" === p.css("direction")),
              wrongRTL: "-webkit-box" === d.css("display"),
              activeIndex: 0,
              realIndex: 0,
              isBeginning: !0,
              isEnd: !1,
              translate: 0,
              previousTranslate: 0,
              progress: 0,
              velocity: 0,
              animating: !1,
              allowSlideNext: l.params.allowSlideNext,
              allowSlidePrev: l.params.allowSlidePrev,
              touchEvents: function () {
                var t = ["touchstart", "touchmove", "touchend"],
                  e = ["mousedown", "mousemove", "mouseup"];
                return Vt.pointerEvents ? e = ["pointerdown", "pointermove", "pointerup"] : Vt.prefixedPointerEvents && (e = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), l.touchEventsTouch = {
                  start: t[0],
                  move: t[1],
                  end: t[2]
                }, l.touchEventsDesktop = {
                  start: e[0],
                  move: e[1],
                  end: e[2]
                }, Vt.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
              }(),
              touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                formElements: "input, select, option, textarea, button, video",
                lastClickTime: Lt.now(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                isTouchEvent: void 0,
                startMoving: void 0
              },
              allowClick: !0,
              allowTouchMove: l.params.allowTouchMove,
              touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
              },
              imagesToLoad: [],
              imagesLoaded: 0
            }), l.useModules(), l.params.init && l.init(), l
          }
        }
        e && (i.__proto__ = e), i.prototype = Object.create(e && e.prototype), i.prototype.constructor = i;
        var r = {
          extendedDefaults: {
            configurable: !0
          },
          defaults: {
            configurable: !0
          },
          Class: {
            configurable: !0
          },
          $: {
            configurable: !0
          }
        };
        return i.prototype.slidesPerViewDynamic = function () {
          var t = this,
            e = t.params,
            i = t.slides,
            r = t.slidesGrid,
            s = t.size,
            n = t.activeIndex,
            a = 1;
          if (e.centeredSlides) {
            for (var o, l = i[n].swiperSlideSize, h = n + 1; h < i.length; h += 1) i[h] && !o && (l += i[h].swiperSlideSize, a += 1, l > s && (o = !0));
            for (var p = n - 1; p >= 0; p -= 1) i[p] && !o && (l += i[p].swiperSlideSize, a += 1, l > s && (o = !0))
          } else
            for (var c = n + 1; c < i.length; c += 1) r[c] - r[n] < s && (a += 1);
          return a
        }, i.prototype.update = function () {
          function t() {
            var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          var e = this;
          if (e && !e.destroyed) {
            var i = e.snapGrid,
              r = e.params;
            r.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();
            e.params.freeMode ? (t(), e.params.autoHeight && e.updateAutoHeight()) : (("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || t(), r.watchOverflow && i !== e.snapGrid && e.checkOverflow(), e.emit("update")
          }
        }, i.prototype.changeDirection = function (t, e) {
          void 0 === e && (e = !0);
          var i = this,
            r = i.params.direction;
          return t || (t = "horizontal" === r ? "vertical" : "horizontal"), t === r || "horizontal" !== t && "vertical" !== t ? i : ("vertical" === r && (i.$el.removeClass(i.params.containerModifierClass + "vertical wp8-vertical").addClass("" + i.params.containerModifierClass + t), (Bt.isIE || Bt.isEdge) && (Vt.pointerEvents || Vt.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + t)), "horizontal" === r && (i.$el.removeClass(i.params.containerModifierClass + "horizontal wp8-horizontal").addClass("" + i.params.containerModifierClass + t), (Bt.isIE || Bt.isEdge) && (Vt.pointerEvents || Vt.prefixedPointerEvents) && i.$el.addClass(i.params.containerModifierClass + "wp8-" + t)), i.params.direction = t, i.slides.each(function (e, i) {
            "vertical" === t ? i.style.width = "" : i.style.height = ""
          }), i.emit("changeDirection"), e && i.update(), i)
        }, i.prototype.init = function () {
          var t = this;
          t.initialized || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit), t.attachEvents(), t.initialized = !0, t.emit("init"))
        }, i.prototype.destroy = function (t, e) {
          void 0 === t && (t = !0), void 0 === e && (e = !0);
          var i = this,
            r = i.params,
            s = i.$el,
            n = i.$wrapperEl,
            a = i.slides;
          return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), e && (i.removeClasses(), s.removeAttr("style"), n.removeAttr("style"), a && a.length && a.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (t) {
            i.off(t)
          }), !1 !== t && (i.$el[0].swiper = null, i.$el.data("swiper", null), Lt.deleteProps(i)), i.destroyed = !0, null)
        }, i.extendDefaults = function (t) {
          Lt.extend(re, t)
        }, r.extendedDefaults.get = function () {
          return re
        }, r.defaults.get = function () {
          return ee
        }, r.Class.get = function () {
          return e
        }, r.$.get = function () {
          return t
        }, Object.defineProperties(i, r), i
      }(zt),
      ne = {
        name: "device",
        proto: {
          device: qt
        },
        static: {
          device: qt
        }
      },
      ae = {
        name: "support",
        proto: {
          support: Vt
        },
        static: {
          support: Vt
        }
      },
      oe = {
        name: "browser",
        proto: {
          browser: Bt
        },
        static: {
          browser: Bt
        }
      },
      le = {
        name: "resize",
        create: function () {
          var t = this;
          Lt.extend(t, {
            resize: {
              resizeHandler: function () {
                t && !t.destroyed && t.initialized && (t.emit("beforeResize"), t.emit("resize"))
              },
              orientationChangeHandler: function () {
                t && !t.destroyed && t.initialized && t.emit("orientationchange")
              }
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            Ft.addEventListener("resize", t.resize.resizeHandler), Ft.addEventListener("orientationchange", t.resize.orientationChangeHandler)
          },
          destroy: function () {
            var t = this;
            Ft.removeEventListener("resize", t.resize.resizeHandler), Ft.removeEventListener("orientationchange", t.resize.orientationChangeHandler)
          }
        }
      },
      he = {
        func: Ft.MutationObserver || Ft.WebkitMutationObserver,
        attach: function (t, e) {
          void 0 === e && (e = {});
          var i = this,
            r = he.func,
            s = new r(function (t) {
              if (1 === t.length) return void i.emit("observerUpdate", t[0]);
              var e = function () {
                i.emit("observerUpdate", t[0])
              };
              Ft.requestAnimationFrame ? Ft.requestAnimationFrame(e) : Ft.setTimeout(e, 0)
            });
          s.observe(t, {
            attributes: void 0 === e.attributes || e.attributes,
            childList: void 0 === e.childList || e.childList,
            characterData: void 0 === e.characterData || e.characterData
          }), i.observer.observers.push(s)
        },
        init: function () {
          var t = this;
          if (Vt.observer && t.params.observer) {
            if (t.params.observeParents)
              for (var e = t.$el.parents(), i = 0; i < e.length; i += 1) t.observer.attach(e[i]);
            t.observer.attach(t.$el[0], {
              childList: t.params.observeSlideChildren
            }), t.observer.attach(t.$wrapperEl[0], {
              attributes: !1
            })
          }
        },
        destroy: function () {
          var t = this;
          t.observer.observers.forEach(function (t) {
            t.disconnect()
          }), t.observer.observers = []
        }
      },
      pe = {
        name: "observer",
        params: {
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            observer: {
              init: he.init.bind(t),
              attach: he.attach.bind(t),
              destroy: he.destroy.bind(t),
              observers: []
            }
          })
        },
        on: {
          init: function () {
            this.observer.init()
          },
          destroy: function () {
            this.observer.destroy()
          }
        }
      },
      ce = {
        update: function (t) {
          function e() {
            i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
          }
          var i = this,
            r = i.params,
            s = r.slidesPerView,
            n = r.slidesPerGroup,
            a = r.centeredSlides,
            o = i.params.virtual,
            l = o.addSlidesBefore,
            h = o.addSlidesAfter,
            p = i.virtual,
            c = p.from,
            d = p.to,
            u = p.slides,
            f = p.slidesGrid,
            m = p.renderSlide,
            g = p.offset;
          i.updateActiveIndex();
          var v, y = i.activeIndex || 0;
          v = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top";
          var _, b;
          a ? (_ = Math.floor(s / 2) + n + l, b = Math.floor(s / 2) + n + h) : (_ = s + (n - 1) + l, b = n + h);
          var T = Math.max((y || 0) - b, 0),
            E = Math.min((y || 0) + _, u.length - 1),
            w = (i.slidesGrid[T] || 0) - (i.slidesGrid[0] || 0);
          if (Lt.extend(i.virtual, {
              from: T,
              to: E,
              offset: w,
              slidesGrid: i.slidesGrid
            }), c === T && d === E && !t) return i.slidesGrid !== f && w !== g && i.slides.css(v, w + "px"), void i.updateProgress();
          if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
            offset: w,
            from: T,
            to: E,
            slides: function () {
              for (var t = [], e = T; e <= E; e += 1) t.push(u[e]);
              return t
            }()
          }), void e();
          var x = [],
            S = [];
          if (t) i.$wrapperEl.find("." + i.params.slideClass).remove();
          else
            for (var C = c; C <= d; C += 1)(C < T || C > E) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
          for (var P = 0; P < u.length; P += 1) P >= T && P <= E && (void 0 === d || t ? S.push(P) : (P > d && S.push(P), P < c && x.push(P)));
          S.forEach(function (t) {
            i.$wrapperEl.append(m(u[t], t))
          }), x.sort(function (t, e) {
            return e - t
          }).forEach(function (t) {
            i.$wrapperEl.prepend(m(u[t], t))
          }), i.$wrapperEl.children(".swiper-slide").css(v, w + "px"), e()
        },
        renderSlide: function (e, i) {
          var r = this,
            s = r.params.virtual;
          if (s.cache && r.virtual.cache[i]) return r.virtual.cache[i];
          var n = t(s.renderSlide ? s.renderSlide.call(r, e, i) : '<div class="' + r.params.slideClass + '" data-swiper-slide-index="' + i + '">' + e + "</div>");
          return n.attr("data-swiper-slide-index") || n.attr("data-swiper-slide-index", i), s.cache && (r.virtual.cache[i] = n), n
        },
        appendSlide: function (t) {
          var e = this;
          if ("object" == typeof t && "length" in t)
            for (var i = 0; i < t.length; i += 1) t[i] && e.virtual.slides.push(t[i]);
          else e.virtual.slides.push(t);
          e.virtual.update(!0)
        },
        prependSlide: function (t) {
          var e = this,
            i = e.activeIndex,
            r = i + 1,
            s = 1;
          if (Array.isArray(t)) {
            for (var n = 0; n < t.length; n += 1) t[n] && e.virtual.slides.unshift(t[n]);
            r = i + t.length, s = t.length
          } else e.virtual.slides.unshift(t);
          if (e.params.virtual.cache) {
            var a = e.virtual.cache,
              o = {};
            Object.keys(a).forEach(function (t) {
              o[parseInt(t, 10) + s] = a[t]
            }), e.virtual.cache = o
          }
          e.virtual.update(!0), e.slideTo(r, 0)
        },
        removeSlide: function (t) {
          var e = this;
          if (void 0 !== t && null !== t) {
            var i = e.activeIndex;
            if (Array.isArray(t))
              for (var r = t.length - 1; r >= 0; r -= 1) e.virtual.slides.splice(t[r], 1), e.params.virtual.cache && delete e.virtual.cache[t[r]], t[r] < i && (i -= 1), i = Math.max(i, 0);
            else e.virtual.slides.splice(t, 1), e.params.virtual.cache && delete e.virtual.cache[t], t < i && (i -= 1), i = Math.max(i, 0);
            e.virtual.update(!0), e.slideTo(i, 0)
          }
        },
        removeAllSlides: function () {
          var t = this;
          t.virtual.slides = [], t.params.virtual.cache && (t.virtual.cache = {}), t.virtual.update(!0), t.slideTo(0, 0)
        }
      },
      de = {
        name: "virtual",
        params: {
          virtual: {
            enabled: !1,
            slides: [],
            cache: !0,
            renderSlide: null,
            renderExternal: null,
            addSlidesBefore: 0,
            addSlidesAfter: 0
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            virtual: {
              update: ce.update.bind(t),
              appendSlide: ce.appendSlide.bind(t),
              prependSlide: ce.prependSlide.bind(t),
              removeSlide: ce.removeSlide.bind(t),
              removeAllSlides: ce.removeAllSlides.bind(t),
              renderSlide: ce.renderSlide.bind(t),
              slides: t.params.virtual.slides,
              cache: {}
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            if (t.params.virtual.enabled) {
              t.classNames.push(t.params.containerModifierClass + "virtual");
              var e = {
                watchSlidesProgress: !0
              };
              Lt.extend(t.params, e), Lt.extend(t.originalParams, e), t.params.initialSlide || t.virtual.update()
            }
          },
          setTranslate: function () {
            var t = this;
            t.params.virtual.enabled && t.virtual.update()
          }
        }
      },
      ue = {
        handle: function (t) {
          var e = this,
            i = e.rtlTranslate,
            r = t;
          r.originalEvent && (r = r.originalEvent);
          var s = r.keyCode || r.charCode;
          if (!e.allowSlideNext && (e.isHorizontal() && 39 === s || e.isVertical() && 40 === s)) return !1;
          if (!e.allowSlidePrev && (e.isHorizontal() && 37 === s || e.isVertical() && 38 === s)) return !1;
          if (!(r.shiftKey || r.altKey || r.ctrlKey || r.metaKey || Ot.activeElement && Ot.activeElement.nodeName && ("input" === Ot.activeElement.nodeName.toLowerCase() || "textarea" === Ot.activeElement.nodeName.toLowerCase()))) {
            if (e.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
              var n = !1;
              if (e.$el.parents("." + e.params.slideClass).length > 0 && 0 === e.$el.parents("." + e.params.slideActiveClass).length) return;
              var a = Ft.innerWidth,
                o = Ft.innerHeight,
                l = e.$el.offset();
              i && (l.left -= e.$el[0].scrollLeft);
              for (var h = [
                  [l.left, l.top],
                  [l.left + e.width, l.top],
                  [l.left, l.top + e.height],
                  [l.left + e.width, l.top + e.height]
                ], p = 0; p < h.length; p += 1) {
                var c = h[p];
                c[0] >= 0 && c[0] <= a && c[1] >= 0 && c[1] <= o && (n = !0)
              }
              if (!n) return
            }
            e.isHorizontal() ? (37 !== s && 39 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), (39 === s && !i || 37 === s && i) && e.slideNext(), (37 === s && !i || 39 === s && i) && e.slidePrev()) : (38 !== s && 40 !== s || (r.preventDefault ? r.preventDefault() : r.returnValue = !1), 40 === s && e.slideNext(), 38 === s && e.slidePrev()), e.emit("keyPress", s)
          }
        },
        enable: function () {
          var e = this;
          e.keyboard.enabled || (t(Ot).on("keydown", e.keyboard.handle), e.keyboard.enabled = !0)
        },
        disable: function () {
          var e = this;
          e.keyboard.enabled && (t(Ot).off("keydown", e.keyboard.handle), e.keyboard.enabled = !1)
        }
      },
      fe = {
        name: "keyboard",
        params: {
          keyboard: {
            enabled: !1,
            onlyInViewport: !0
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            keyboard: {
              enabled: !1,
              enable: ue.enable.bind(t),
              disable: ue.disable.bind(t),
              handle: ue.handle.bind(t)
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.keyboard.enabled && t.keyboard.enable()
          },
          destroy: function () {
            var t = this;
            t.keyboard.enabled && t.keyboard.disable()
          }
        }
      },
      me = {
        lastScrollTime: Lt.now(),
        event: function () {
          return Ft.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : It() ? "wheel" : "mousewheel"
        }(),
        normalize: function (t) {
          var e = 0,
            i = 0,
            r = 0,
            s = 0;
          return "detail" in t && (i = t.detail), "wheelDelta" in t && (i = -t.wheelDelta / 120), "wheelDeltaY" in t && (i = -t.wheelDeltaY / 120), "wheelDeltaX" in t && (e = -t.wheelDeltaX / 120), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (e = i, i = 0), r = 10 * e, s = 10 * i, "deltaY" in t && (s = t.deltaY), "deltaX" in t && (r = t.deltaX), (r || s) && t.deltaMode && (1 === t.deltaMode ? (r *= 40, s *= 40) : (r *= 800, s *= 800)), r && !e && (e = r < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
            spinX: e,
            spinY: i,
            pixelX: r,
            pixelY: s
          }
        },
        handleMouseEnter: function () {
          this.mouseEntered = !0
        },
        handleMouseLeave: function () {
          this.mouseEntered = !1
        },
        handle: function (t) {
          var e = t,
            i = this,
            r = i.params.mousewheel;
          if (!i.mouseEntered && !r.releaseOnEdges) return !0;
          e.originalEvent && (e = e.originalEvent);
          var s = 0,
            n = i.rtlTranslate ? -1 : 1,
            a = me.normalize(e);
          if (r.forceToAxis)
            if (i.isHorizontal()) {
              if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
              s = a.pixelX * n
            } else {
              if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
              s = a.pixelY
            }
          else s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * n : -a.pixelY;
          if (0 === s) return !0;
          if (r.invert && (s = -s), i.params.freeMode) {
            i.params.loop && i.loopFix();
            var o = i.getTranslate() + s * r.sensitivity,
              l = i.isBeginning,
              h = i.isEnd;
            if (o >= i.minTranslate() && (o = i.minTranslate()), o <= i.maxTranslate() && (o = i.maxTranslate()), i.setTransition(0), i.setTranslate(o), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!l && i.isBeginning || !h && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = Lt.nextTick(function () {
                i.slideToClosest()
              }, 300)), i.emit("scroll", e), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), o === i.minTranslate() || o === i.maxTranslate()) return !0
          } else {
            if (Lt.now() - i.mousewheel.lastScrollTime > 60)
              if (s < 0)
                if (i.isEnd && !i.params.loop || i.animating) {
                  if (r.releaseOnEdges) return !0
                } else i.slideNext(), i.emit("scroll", e);
            else if (i.isBeginning && !i.params.loop || i.animating) {
              if (r.releaseOnEdges) return !0
            } else i.slidePrev(), i.emit("scroll", e);
            i.mousewheel.lastScrollTime = (new Ft.Date).getTime()
          }
          return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
        },
        enable: function () {
          var e = this;
          if (!me.event) return !1;
          if (e.mousewheel.enabled) return !1;
          var i = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (i = t(e.params.mousewheel.eventsTarged)), i.on("mouseenter", e.mousewheel.handleMouseEnter), i.on("mouseleave", e.mousewheel.handleMouseLeave), i.on(me.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0
        },
        disable: function () {
          var e = this;
          if (!me.event) return !1;
          if (!e.mousewheel.enabled) return !1;
          var i = e.$el;
          return "container" !== e.params.mousewheel.eventsTarged && (i = t(e.params.mousewheel.eventsTarged)), i.off(me.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0
        }
      },
      ge = {
        name: "mousewheel",
        params: {
          mousewheel: {
            enabled: !1,
            releaseOnEdges: !1,
            invert: !1,
            forceToAxis: !1,
            sensitivity: 1,
            eventsTarged: "container"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            mousewheel: {
              enabled: !1,
              enable: me.enable.bind(t),
              disable: me.disable.bind(t),
              handle: me.handle.bind(t),
              handleMouseEnter: me.handleMouseEnter.bind(t),
              handleMouseLeave: me.handleMouseLeave.bind(t),
              lastScrollTime: Lt.now()
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.mousewheel.enabled && t.mousewheel.enable()
          },
          destroy: function () {
            var t = this;
            t.mousewheel.enabled && t.mousewheel.disable()
          }
        }
      },
      ve = {
        update: function () {
          var t = this,
            e = t.params.navigation;
          if (!t.params.loop) {
            var i = t.navigation,
              r = i.$nextEl,
              s = i.$prevEl;
            s && s.length > 0 && (t.isBeginning ? s.addClass(e.disabledClass) : s.removeClass(e.disabledClass), s[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass)), r && r.length > 0 && (t.isEnd ? r.addClass(e.disabledClass) : r.removeClass(e.disabledClass), r[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](e.lockClass))
          }
        },
        onPrevClick: function (t) {
          var e = this;
          t.preventDefault(), e.isBeginning && !e.params.loop || e.slidePrev()
        },
        onNextClick: function (t) {
          var e = this;
          t.preventDefault(), e.isEnd && !e.params.loop || e.slideNext()
        },
        init: function () {
          var e = this,
            i = e.params.navigation;
          if (i.nextEl || i.prevEl) {
            var r, s;
            i.nextEl && (r = t(i.nextEl), e.params.uniqueNavElements && "string" == typeof i.nextEl && r.length > 1 && 1 === e.$el.find(i.nextEl).length && (r = e.$el.find(i.nextEl))), i.prevEl && (s = t(i.prevEl), e.params.uniqueNavElements && "string" == typeof i.prevEl && s.length > 1 && 1 === e.$el.find(i.prevEl).length && (s = e.$el.find(i.prevEl))), r && r.length > 0 && r.on("click", e.navigation.onNextClick), s && s.length > 0 && s.on("click", e.navigation.onPrevClick), Lt.extend(e.navigation, {
              $nextEl: r,
              nextEl: r && r[0],
              $prevEl: s,
              prevEl: s && s[0]
            })
          }
        },
        destroy: function () {
          var t = this,
            e = t.navigation,
            i = e.$nextEl,
            r = e.$prevEl;
          i && i.length && (i.off("click", t.navigation.onNextClick), i.removeClass(t.params.navigation.disabledClass)), r && r.length && (r.off("click", t.navigation.onPrevClick), r.removeClass(t.params.navigation.disabledClass))
        }
      },
      ye = {
        name: "navigation",
        params: {
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            navigation: {
              init: ve.init.bind(t),
              update: ve.update.bind(t),
              destroy: ve.destroy.bind(t),
              onNextClick: ve.onNextClick.bind(t),
              onPrevClick: ve.onPrevClick.bind(t)
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.navigation.init(), t.navigation.update()
          },
          toEdge: function () {
            this.navigation.update()
          },
          fromEdge: function () {
            this.navigation.update()
          },
          destroy: function () {
            this.navigation.destroy()
          },
          click: function (e) {
            var i = this,
              r = i.navigation,
              s = r.$nextEl,
              n = r.$prevEl;
            if (i.params.navigation.hideOnClick && !t(e.target).is(n) && !t(e.target).is(s)) {
              var a;
              s ? a = s.hasClass(i.params.navigation.hiddenClass) : n && (a = n.hasClass(i.params.navigation.hiddenClass)), !0 === a ? i.emit("navigationShow", i) : i.emit("navigationHide", i), s && s.toggleClass(i.params.navigation.hiddenClass), n && n.toggleClass(i.params.navigation.hiddenClass)
            }
          }
        }
      },
      _e = {
        update: function () {
          var e = this,
            i = e.rtl,
            r = e.params.pagination;
          if (r.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
            var s, n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
              a = e.pagination.$el,
              o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (s = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup), s > n - 1 - 2 * e.loopedSlides && (s -= n - 2 * e.loopedSlides), s > o - 1 && (s -= o), s < 0 && "bullets" !== e.params.paginationType && (s = o + s)) : s = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === r.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
              var l, h, p, c = e.pagination.bullets;
              if (r.dynamicBullets && (e.pagination.bulletSize = c.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (r.dynamicMainBullets + 4) + "px"), r.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += s - e.previousIndex, e.pagination.dynamicBulletIndex > r.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = r.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), l = s - e.pagination.dynamicBulletIndex, h = l + (Math.min(c.length, r.dynamicMainBullets) - 1), p = (h + l) / 2), c.removeClass(r.bulletActiveClass + " " + r.bulletActiveClass + "-next " + r.bulletActiveClass + "-next-next " + r.bulletActiveClass + "-prev " + r.bulletActiveClass + "-prev-prev " + r.bulletActiveClass + "-main"), a.length > 1) c.each(function (e, i) {
                var n = t(i),
                  a = n.index();
                a === s && n.addClass(r.bulletActiveClass), r.dynamicBullets && (a >= l && a <= h && n.addClass(r.bulletActiveClass + "-main"), a === l && n.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), a === h && n.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next"))
              });
              else {
                if (c.eq(s).addClass(r.bulletActiveClass), r.dynamicBullets) {
                  for (var d = c.eq(l), u = c.eq(h), f = l; f <= h; f += 1) c.eq(f).addClass(r.bulletActiveClass + "-main");
                  d.prev().addClass(r.bulletActiveClass + "-prev").prev().addClass(r.bulletActiveClass + "-prev-prev"), u.next().addClass(r.bulletActiveClass + "-next").next().addClass(r.bulletActiveClass + "-next-next")
                }
              }
              if (r.dynamicBullets) {
                var m = Math.min(c.length, r.dynamicMainBullets + 4),
                  g = (e.pagination.bulletSize * m - e.pagination.bulletSize) / 2 - p * e.pagination.bulletSize,
                  v = i ? "right" : "left";
                c.css(e.isHorizontal() ? v : "top", g + "px")
              }
            }
            if ("fraction" === r.type && (a.find("." + r.currentClass).text(r.formatFractionCurrent(s + 1)), a.find("." + r.totalClass).text(r.formatFractionTotal(o))), "progressbar" === r.type) {
              var y;
              y = r.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
              var _ = (s + 1) / o,
                b = 1,
                T = 1;
              "horizontal" === y ? b = _ : T = _, a.find("." + r.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + b + ") scaleY(" + T + ")").transition(e.params.speed)
            }
            "custom" === r.type && r.renderCustom ? (a.html(r.renderCustom(e, s + 1, o)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](r.lockClass)
          }
        },
        render: function () {
          var t = this,
            e = t.params.pagination;
          if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
            var i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
              r = t.pagination.$el,
              s = "";
            if ("bullets" === e.type) {
              for (var n = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length, a = 0; a < n; a += 1) e.renderBullet ? s += e.renderBullet.call(t, a, e.bulletClass) : s += "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
              r.html(s), t.pagination.bullets = r.find("." + e.bulletClass)
            }
            "fraction" === e.type && (s = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', r.html(s)), "progressbar" === e.type && (s = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', r.html(s)), "custom" !== e.type && t.emit("paginationRender", t.pagination.$el[0])
          }
        },
        init: function () {
          var e = this,
            i = e.params.pagination;
          if (i.el) {
            var r = t(i.el);
            0 !== r.length && (e.params.uniqueNavElements && "string" == typeof i.el && r.length > 1 && 1 === e.$el.find(i.el).length && (r = e.$el.find(i.el)), "bullets" === i.type && i.clickable && r.addClass(i.clickableClass), r.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && (r.addClass("" + i.modifierClass + i.type + "-dynamic"), e.pagination.dynamicBulletIndex = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && r.addClass(i.progressbarOppositeClass), i.clickable && r.on("click", "." + i.bulletClass, function (i) {
              i.preventDefault();
              var r = t(this).index() * e.params.slidesPerGroup;
              e.params.loop && (r += e.loopedSlides), e.slideTo(r)
            }), Lt.extend(e.pagination, {
              $el: r,
              el: r[0]
            }))
          }
        },
        destroy: function () {
          var t = this,
            e = t.params.pagination;
          if (e.el && t.pagination.el && t.pagination.$el && 0 !== t.pagination.$el.length) {
            var i = t.pagination.$el;
            i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), t.pagination.bullets && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", "." + e.bulletClass)
          }
        }
      },
      be = {
        name: "pagination",
        params: {
          pagination: {
            el: null,
            bulletElement: "span",
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: "bullets",
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: function (t) {
              return t
            },
            formatFractionTotal: function (t) {
              return t
            },
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
            modifierClass: "swiper-pagination-",
            currentClass: "swiper-pagination-current",
            totalClass: "swiper-pagination-total",
            hiddenClass: "swiper-pagination-hidden",
            progressbarFillClass: "swiper-pagination-progressbar-fill",
            progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
            clickableClass: "swiper-pagination-clickable",
            lockClass: "swiper-pagination-lock"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            pagination: {
              init: _e.init.bind(t),
              render: _e.render.bind(t),
              update: _e.update.bind(t),
              destroy: _e.destroy.bind(t),
              dynamicBulletIndex: 0
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.pagination.init(), t.pagination.render(), t.pagination.update()
          },
          activeIndexChange: function () {
            var t = this;
            t.params.loop ? t.pagination.update() : void 0 === t.snapIndex && t.pagination.update()
          },
          snapIndexChange: function () {
            var t = this;
            t.params.loop || t.pagination.update()
          },
          slidesLengthChange: function () {
            var t = this;
            t.params.loop && (t.pagination.render(), t.pagination.update())
          },
          snapGridLengthChange: function () {
            var t = this;
            t.params.loop || (t.pagination.render(), t.pagination.update())
          },
          destroy: function () {
            this.pagination.destroy()
          },
          click: function (e) {
            var i = this;
            if (i.params.pagination.el && i.params.pagination.hideOnClick && i.pagination.$el.length > 0 && !t(e.target).hasClass(i.params.pagination.bulletClass)) {
              !0 === i.pagination.$el.hasClass(i.params.pagination.hiddenClass) ? i.emit("paginationShow", i) : i.emit("paginationHide", i), i.pagination.$el.toggleClass(i.params.pagination.hiddenClass)
            }
          }
        }
      },
      Te = {
        setTranslate: function () {
          var t = this;
          if (t.params.scrollbar.el && t.scrollbar.el) {
            var e = t.scrollbar,
              i = t.rtlTranslate,
              r = t.progress,
              s = e.dragSize,
              n = e.trackSize,
              a = e.$dragEl,
              o = e.$el,
              l = t.params.scrollbar,
              h = s,
              p = (n - s) * r;
            i ? (p = -p, p > 0 ? (h = s - p, p = 0) : -p + s > n && (h = n + p)) : p < 0 ? (h = s + p, p = 0) : p + s > n && (h = n - p), t.isHorizontal() ? (Vt.transforms3d ? a.transform("translate3d(" + p + "px, 0, 0)") : a.transform("translateX(" + p + "px)"), a[0].style.width = h + "px") : (Vt.transforms3d ? a.transform("translate3d(0px, " + p + "px, 0)") : a.transform("translateY(" + p + "px)"), a[0].style.height = h + "px"), l.hide && (clearTimeout(t.scrollbar.timeout), o[0].style.opacity = 1, t.scrollbar.timeout = setTimeout(function () {
              o[0].style.opacity = 0, o.transition(400)
            }, 1e3))
          }
        },
        setTransition: function (t) {
          var e = this;
          e.params.scrollbar.el && e.scrollbar.el && e.scrollbar.$dragEl.transition(t)
        },
        updateSize: function () {
          var t = this;
          if (t.params.scrollbar.el && t.scrollbar.el) {
            var e = t.scrollbar,
              i = e.$dragEl,
              r = e.$el;
            i[0].style.width = "", i[0].style.height = "";
            var s, n = t.isHorizontal() ? r[0].offsetWidth : r[0].offsetHeight,
              a = t.size / t.virtualSize,
              o = a * (n / t.size);
            s = "auto" === t.params.scrollbar.dragSize ? n * a : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i[0].style.width = s + "px" : i[0].style.height = s + "px", r[0].style.display = a >= 1 ? "none" : "", t.params.scrollbar.hide && (r[0].style.opacity = 0), Lt.extend(e, {
              trackSize: n,
              divider: a,
              moveDivider: o,
              dragSize: s
            }), e.$el[t.params.watchOverflow && t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
          }
        },
        setDragPosition: function (t) {
          var e, i = this,
            r = i.scrollbar,
            s = i.rtlTranslate,
            n = r.$el,
            a = r.dragSize,
            o = r.trackSize;
          e = i.isHorizontal() ? "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX || t.clientX : "touchstart" === t.type || "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY || t.clientY;
          var l;
          l = (e - n.offset()[i.isHorizontal() ? "left" : "top"] - a / 2) / (o - a), l = Math.max(Math.min(l, 1), 0), s && (l = 1 - l);
          var h = i.minTranslate() + (i.maxTranslate() - i.minTranslate()) * l;
          i.updateProgress(h), i.setTranslate(h), i.updateActiveIndex(), i.updateSlidesClasses()
        },
        onDragStart: function (t) {
          var e = this,
            i = e.params.scrollbar,
            r = e.scrollbar,
            s = e.$wrapperEl,
            n = r.$el,
            a = r.$dragEl;
          e.scrollbar.isTouched = !0, t.preventDefault(), t.stopPropagation(), s.transition(100), a.transition(100), r.setDragPosition(t), clearTimeout(e.scrollbar.dragTimeout), n.transition(0), i.hide && n.css("opacity", 1), e.emit("scrollbarDragStart", t)
        },
        onDragMove: function (t) {
          var e = this,
            i = e.scrollbar,
            r = e.$wrapperEl,
            s = i.$el,
            n = i.$dragEl;
          e.scrollbar.isTouched && (t.preventDefault ? t.preventDefault() : t.returnValue = !1, i.setDragPosition(t), r.transition(0), s.transition(0), n.transition(0), e.emit("scrollbarDragMove", t))
        },
        onDragEnd: function (t) {
          var e = this,
            i = e.params.scrollbar,
            r = e.scrollbar,
            s = r.$el;
          e.scrollbar.isTouched && (e.scrollbar.isTouched = !1, i.hide && (clearTimeout(e.scrollbar.dragTimeout), e.scrollbar.dragTimeout = Lt.nextTick(function () {
            s.css("opacity", 0), s.transition(400)
          }, 1e3)), e.emit("scrollbarDragEnd", t), i.snapOnRelease && e.slideToClosest())
        },
        enableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var e = t.scrollbar,
              i = t.touchEventsTouch,
              r = t.touchEventsDesktop,
              s = t.params,
              n = e.$el,
              a = n[0],
              o = !(!Vt.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              l = !(!Vt.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            Vt.touch ? (a.addEventListener(i.start, t.scrollbar.onDragStart, o), a.addEventListener(i.move, t.scrollbar.onDragMove, o), a.addEventListener(i.end, t.scrollbar.onDragEnd, l)) : (a.addEventListener(r.start, t.scrollbar.onDragStart, o), Ot.addEventListener(r.move, t.scrollbar.onDragMove, o), Ot.addEventListener(r.end, t.scrollbar.onDragEnd, l))
          }
        },
        disableDraggable: function () {
          var t = this;
          if (t.params.scrollbar.el) {
            var e = t.scrollbar,
              i = t.touchEventsTouch,
              r = t.touchEventsDesktop,
              s = t.params,
              n = e.$el,
              a = n[0],
              o = !(!Vt.passiveListener || !s.passiveListeners) && {
                passive: !1,
                capture: !1
              },
              l = !(!Vt.passiveListener || !s.passiveListeners) && {
                passive: !0,
                capture: !1
              };
            Vt.touch ? (a.removeEventListener(i.start, t.scrollbar.onDragStart, o), a.removeEventListener(i.move, t.scrollbar.onDragMove, o), a.removeEventListener(i.end, t.scrollbar.onDragEnd, l)) : (a.removeEventListener(r.start, t.scrollbar.onDragStart, o), Ot.removeEventListener(r.move, t.scrollbar.onDragMove, o), Ot.removeEventListener(r.end, t.scrollbar.onDragEnd, l))
          }
        },
        init: function () {
          var e = this;
          if (e.params.scrollbar.el) {
            var i = e.scrollbar,
              r = e.$el,
              s = e.params.scrollbar,
              n = t(s.el);
            e.params.uniqueNavElements && "string" == typeof s.el && n.length > 1 && 1 === r.find(s.el).length && (n = r.find(s.el));
            var a = n.find("." + e.params.scrollbar.dragClass);
            0 === a.length && (a = t('<div class="' + e.params.scrollbar.dragClass + '"></div>'), n.append(a)), Lt.extend(i, {
              $el: n,
              el: n[0],
              $dragEl: a,
              dragEl: a[0]
            }), s.draggable && i.enableDraggable()
          }
        },
        destroy: function () {
          this.scrollbar.disableDraggable()
        }
      },
      Ee = {
        name: "scrollbar",
        params: {
          scrollbar: {
            el: null,
            dragSize: "auto",
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: "swiper-scrollbar-lock",
            dragClass: "swiper-scrollbar-drag"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            scrollbar: {
              init: Te.init.bind(t),
              destroy: Te.destroy.bind(t),
              updateSize: Te.updateSize.bind(t),
              setTranslate: Te.setTranslate.bind(t),
              setTransition: Te.setTransition.bind(t),
              enableDraggable: Te.enableDraggable.bind(t),
              disableDraggable: Te.disableDraggable.bind(t),
              setDragPosition: Te.setDragPosition.bind(t),
              onDragStart: Te.onDragStart.bind(t),
              onDragMove: Te.onDragMove.bind(t),
              onDragEnd: Te.onDragEnd.bind(t),
              isTouched: !1,
              timeout: null,
              dragTimeout: null
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.scrollbar.init(), t.scrollbar.updateSize(), t.scrollbar.setTranslate()
          },
          update: function () {
            this.scrollbar.updateSize()
          },
          resize: function () {
            this.scrollbar.updateSize()
          },
          observerUpdate: function () {
            this.scrollbar.updateSize()
          },
          setTranslate: function () {
            this.scrollbar.setTranslate()
          },
          setTransition: function (t) {
            this.scrollbar.setTransition(t)
          },
          destroy: function () {
            this.scrollbar.destroy()
          }
        }
      },
      we = {
        setTransform: function (e, i) {
          var r = this,
            s = r.rtl,
            n = t(e),
            a = s ? -1 : 1,
            o = n.attr("data-swiper-parallax") || "0",
            l = n.attr("data-swiper-parallax-x"),
            h = n.attr("data-swiper-parallax-y"),
            p = n.attr("data-swiper-parallax-scale"),
            c = n.attr("data-swiper-parallax-opacity");
          if (l || h ? (l = l || "0", h = h || "0") : r.isHorizontal() ? (l = o, h = "0") : (h = o, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i * a + "%" : l * i * a + "px", h = h.indexOf("%") >= 0 ? parseInt(h, 10) * i + "%" : h * i + "px", void 0 !== c && null !== c) {
            var d = c - (c - 1) * (1 - Math.abs(i));
            n[0].style.opacity = d
          }
          if (void 0 === p || null === p) n.transform("translate3d(" + l + ", " + h + ", 0px)");
          else {
            var u = p - (p - 1) * (1 - Math.abs(i));
            n.transform("translate3d(" + l + ", " + h + ", 0px) scale(" + u + ")")
          }
        },
        setTranslate: function () {
          var e = this,
            i = e.$el,
            r = e.slides,
            s = e.progress,
            n = e.snapGrid;
          i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
            e.parallax.setTransform(i, s)
          }), r.each(function (i, r) {
            var a = r.progress;
            e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(i / 2) - s * (n.length - 1)), a = Math.min(Math.max(a, -1), 1), t(r).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
              e.parallax.setTransform(i, a)
            })
          })
        },
        setTransition: function (e) {
          void 0 === e && (e = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (i, r) {
            var s = t(r),
              n = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
            0 === e && (n = 0), s.transition(n)
          })
        }
      },
      xe = {
        name: "parallax",
        params: {
          parallax: {
            enabled: !1
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            parallax: {
              setTransform: we.setTransform.bind(t),
              setTranslate: we.setTranslate.bind(t),
              setTransition: we.setTransition.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
          },
          init: function () {
            var t = this;
            t.params.parallax.enabled && t.parallax.setTranslate()
          },
          setTranslate: function () {
            var t = this;
            t.params.parallax.enabled && t.parallax.setTranslate()
          },
          setTransition: function (t) {
            var e = this;
            e.params.parallax.enabled && e.parallax.setTransition(t)
          }
        }
      },
      Se = {
        getDistanceBetweenTouches: function (t) {
          if (t.targetTouches.length < 2) return 1;
          var e = t.targetTouches[0].pageX,
            i = t.targetTouches[0].pageY,
            r = t.targetTouches[1].pageX,
            s = t.targetTouches[1].pageY;
          return Math.sqrt(Math.pow(r - e, 2) + Math.pow(s - i, 2))
        },
        onGestureStart: function (e) {
          var i = this,
            r = i.params.zoom,
            s = i.zoom,
            n = s.gesture;
          if (s.fakeGestureTouched = !1, s.fakeGestureMoved = !1, !Vt.gestures) {
            if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
            s.fakeGestureTouched = !0, n.scaleStart = Se.getDistanceBetweenTouches(e)
          }
          if (!(n.$slideEl && n.$slideEl.length || (n.$slideEl = t(e.target).closest(".swiper-slide"), 0 === n.$slideEl.length && (n.$slideEl = i.slides.eq(i.activeIndex)), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + r.containerClass), n.maxRatio = n.$imageWrapEl.attr("data-swiper-zoom") || r.maxRatio, 0 !== n.$imageWrapEl.length))) return void(n.$imageEl = void 0);
          n.$imageEl.transition(0), i.zoom.isScaling = !0
        },
        onGestureChange: function (t) {
          var e = this,
            i = e.params.zoom,
            r = e.zoom,
            s = r.gesture;
          if (!Vt.gestures) {
            if ("touchmove" !== t.type || "touchmove" === t.type && t.targetTouches.length < 2) return;
            r.fakeGestureMoved = !0, s.scaleMove = Se.getDistanceBetweenTouches(t)
          }
          s.$imageEl && 0 !== s.$imageEl.length && (Vt.gestures ? r.scale = t.scale * r.currentScale : r.scale = s.scaleMove / s.scaleStart * r.currentScale, r.scale > s.maxRatio && (r.scale = s.maxRatio - 1 + Math.pow(r.scale - s.maxRatio + 1, .5)), r.scale < i.minRatio && (r.scale = i.minRatio + 1 - Math.pow(i.minRatio - r.scale + 1, .5)), s.$imageEl.transform("translate3d(0,0,0) scale(" + r.scale + ")"))
        },
        onGestureEnd: function (t) {
          var e = this,
            i = e.params.zoom,
            r = e.zoom,
            s = r.gesture;
          if (!Vt.gestures) {
            if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
            if ("touchend" !== t.type || "touchend" === t.type && t.changedTouches.length < 2 && !qt.android) return;
            r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
          }
          s.$imageEl && 0 !== s.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, s.maxRatio), i.minRatio), s.$imageEl.transition(e.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (s.$slideEl = void 0))
        },
        onTouchStart: function (t) {
          var e = this,
            i = e.zoom,
            r = i.gesture,
            s = i.image;
          r.$imageEl && 0 !== r.$imageEl.length && (s.isTouched || (qt.android && t.preventDefault(), s.isTouched = !0, s.touchesStart.x = "touchstart" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesStart.y = "touchstart" === t.type ? t.targetTouches[0].pageY : t.pageY))
        },
        onTouchMove: function (t) {
          var e = this,
            i = e.zoom,
            r = i.gesture,
            s = i.image,
            n = i.velocity;
          if (r.$imageEl && 0 !== r.$imageEl.length && (e.allowClick = !1, s.isTouched && r.$slideEl)) {
            s.isMoved || (s.width = r.$imageEl[0].offsetWidth, s.height = r.$imageEl[0].offsetHeight, s.startX = Lt.getTranslate(r.$imageWrapEl[0], "x") || 0, s.startY = Lt.getTranslate(r.$imageWrapEl[0], "y") || 0, r.slideWidth = r.$slideEl[0].offsetWidth, r.slideHeight = r.$slideEl[0].offsetHeight, r.$imageWrapEl.transition(0), e.rtl && (s.startX = -s.startX, s.startY = -s.startY));
            var a = s.width * i.scale,
              o = s.height * i.scale;
            if (!(a < r.slideWidth && o < r.slideHeight)) {
              if (s.minX = Math.min(r.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(r.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === t.type ? t.targetTouches[0].pageX : t.pageX, s.touchesCurrent.y = "touchmove" === t.type ? t.targetTouches[0].pageY : t.pageY, !s.isMoved && !i.isScaling) {
                if (e.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void(s.isTouched = !1);
                if (!e.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void(s.isTouched = !1)
              }
              t.preventDefault(), t.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = s.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = s.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (s.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (s.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(s.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(s.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = s.touchesCurrent.x, n.prevPositionY = s.touchesCurrent.y, n.prevTime = Date.now(), r.$imageWrapEl.transform("translate3d(" + s.currentX + "px, " + s.currentY + "px,0)")
            }
          }
        },
        onTouchEnd: function () {
          var t = this,
            e = t.zoom,
            i = e.gesture,
            r = e.image,
            s = e.velocity;
          if (i.$imageEl && 0 !== i.$imageEl.length) {
            if (!r.isTouched || !r.isMoved) return r.isTouched = !1, void(r.isMoved = !1);
            r.isTouched = !1, r.isMoved = !1;
            var n = 300,
              a = 300,
              o = s.x * n,
              l = r.currentX + o,
              h = s.y * a,
              p = r.currentY + h;
            0 !== s.x && (n = Math.abs((l - r.currentX) / s.x)), 0 !== s.y && (a = Math.abs((p - r.currentY) / s.y));
            var c = Math.max(n, a);
            r.currentX = l, r.currentY = p;
            var d = r.width * e.scale,
              u = r.height * e.scale;
            r.minX = Math.min(i.slideWidth / 2 - d / 2, 0), r.maxX = -r.minX, r.minY = Math.min(i.slideHeight / 2 - u / 2, 0), r.maxY = -r.minY, r.currentX = Math.max(Math.min(r.currentX, r.maxX), r.minX), r.currentY = Math.max(Math.min(r.currentY, r.maxY), r.minY), i.$imageWrapEl.transition(c).transform("translate3d(" + r.currentX + "px, " + r.currentY + "px,0)")
          }
        },
        onTransitionEnd: function () {
          var t = this,
            e = t.zoom,
            i = e.gesture;
          i.$slideEl && t.previousIndex !== t.activeIndex && (i.$imageEl.transform("translate3d(0,0,0) scale(1)"), i.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, i.$slideEl = void 0, i.$imageEl = void 0, i.$imageWrapEl = void 0)
        },
        toggle: function (t) {
          var e = this,
            i = e.zoom;
          i.scale && 1 !== i.scale ? i.out() : i.in(t)
        },
        in: function (e) {
          var i = this,
            r = i.zoom,
            s = i.params.zoom,
            n = r.gesture,
            a = r.image;
          if (n.$slideEl || (n.$slideEl = i.clickedSlide ? t(i.clickedSlide) : i.slides.eq(i.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + s.containerClass)), n.$imageEl && 0 !== n.$imageEl.length) {
            n.$slideEl.addClass("" + s.zoomedSlideClass);
            var o, l, h, p, c, d, u, f, m, g, v, y, _, b, T, E, w, x;
            void 0 === a.touchesStart.x && e ? (o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (o = a.touchesStart.x, l = a.touchesStart.y), r.scale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, r.currentScale = n.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, e ? (w = n.$slideEl[0].offsetWidth, x = n.$slideEl[0].offsetHeight, h = n.$slideEl.offset().left, p = n.$slideEl.offset().top, c = h + w / 2 - o, d = p + x / 2 - l, m = n.$imageEl[0].offsetWidth, g = n.$imageEl[0].offsetHeight, v = m * r.scale, y = g * r.scale, _ = Math.min(w / 2 - v / 2, 0), b = Math.min(x / 2 - y / 2, 0), T = -_, E = -b, u = c * r.scale, f = d * r.scale, u < _ && (u = _), u > T && (u = T), f < b && (f = b), f > E && (f = E)) : (u = 0, f = 0), n.$imageWrapEl.transition(300).transform("translate3d(" + u + "px, " + f + "px,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + r.scale + ")")
          }
        },
        out: function () {
          var e = this,
            i = e.zoom,
            r = e.params.zoom,
            s = i.gesture;
          s.$slideEl || (s.$slideEl = e.clickedSlide ? t(e.clickedSlide) : e.slides.eq(e.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent("." + r.containerClass)), s.$imageEl && 0 !== s.$imageEl.length && (i.scale = 1, i.currentScale = 1, s.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), s.$slideEl.removeClass("" + r.zoomedSlideClass), s.$slideEl = void 0)
        },
        enable: function () {
          var t = this,
            e = t.zoom;
          if (!e.enabled) {
            e.enabled = !0;
            var i = !("touchstart" !== t.touchEvents.start || !Vt.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            Vt.gestures ? (t.$wrapperEl.on("gesturestart", ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.on("gesturechange", ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.on("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.on(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.on(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)), t.$wrapperEl.on(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
          }
        },
        disable: function () {
          var t = this,
            e = t.zoom;
          if (e.enabled) {
            t.zoom.enabled = !1;
            var i = !("touchstart" !== t.touchEvents.start || !Vt.passiveListener || !t.params.passiveListeners) && {
              passive: !0,
              capture: !1
            };
            Vt.gestures ? (t.$wrapperEl.off("gesturestart", ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.off("gesturechange", ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.off("gestureend", ".swiper-slide", e.onGestureEnd, i)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, ".swiper-slide", e.onGestureStart, i), t.$wrapperEl.off(t.touchEvents.move, ".swiper-slide", e.onGestureChange, i), t.$wrapperEl.off(t.touchEvents.end, ".swiper-slide", e.onGestureEnd, i)), t.$wrapperEl.off(t.touchEvents.move, "." + t.params.zoom.containerClass, e.onTouchMove)
          }
        }
      },
      Ce = {
        name: "zoom",
        params: {
          zoom: {
            enabled: !1,
            maxRatio: 3,
            minRatio: 1,
            toggle: !0,
            containerClass: "swiper-zoom-container",
            zoomedSlideClass: "swiper-slide-zoomed"
          }
        },
        create: function () {
          var t = this,
            e = {
              enabled: !1,
              scale: 1,
              currentScale: 1,
              isScaling: !1,
              gesture: {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
              },
              image: {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
              },
              velocity: {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
              }
            };
          "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
            e[i] = Se[i].bind(t)
          }), Lt.extend(t, {
            zoom: e
          });
          var i = 1;
          Object.defineProperty(t.zoom, "scale", {
            get: function () {
              return i
            },
            set: function (e) {
              if (i !== e) {
                var r = t.zoom.gesture.$imageEl ? t.zoom.gesture.$imageEl[0] : void 0,
                  s = t.zoom.gesture.$slideEl ? t.zoom.gesture.$slideEl[0] : void 0;
                t.emit("zoomChange", e, r, s)
              }
              i = e
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.zoom.enabled && t.zoom.enable()
          },
          destroy: function () {
            this.zoom.disable()
          },
          touchStart: function (t) {
            var e = this;
            e.zoom.enabled && e.zoom.onTouchStart(t)
          },
          touchEnd: function (t) {
            var e = this;
            e.zoom.enabled && e.zoom.onTouchEnd(t)
          },
          doubleTap: function (t) {
            var e = this;
            e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
          },
          transitionEnd: function () {
            var t = this;
            t.zoom.enabled && t.params.zoom.enabled && t.zoom.onTransitionEnd()
          }
        }
      },
      Pe = {
        loadInSlide: function (e, i) {
          void 0 === i && (i = !0);
          var r = this,
            s = r.params.lazy;
          if (void 0 !== e && 0 !== r.slides.length) {
            var n = r.virtual && r.params.virtual.enabled,
              a = n ? r.$wrapperEl.children("." + r.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : r.slides.eq(e),
              o = a.find("." + s.elementClass + ":not(." + s.loadedClass + "):not(." + s.loadingClass + ")");
            !a.hasClass(s.elementClass) || a.hasClass(s.loadedClass) || a.hasClass(s.loadingClass) || (o = o.add(a[0])), 0 !== o.length && o.each(function (e, n) {
              var o = t(n);
              o.addClass(s.loadingClass);
              var l = o.attr("data-background"),
                h = o.attr("data-src"),
                p = o.attr("data-srcset"),
                c = o.attr("data-sizes");
              r.loadImage(o[0], h || l, p, c, !1, function () {
                if (void 0 !== r && null !== r && r && (!r || r.params) && !r.destroyed) {
                  if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (p && (o.attr("srcset", p), o.removeAttr("data-srcset")), c && (o.attr("sizes", c), o.removeAttr("data-sizes")), h && (o.attr("src", h), o.removeAttr("data-src"))), o.addClass(s.loadedClass).removeClass(s.loadingClass), a.find("." + s.preloaderClass).remove(), r.params.loop && i) {
                    var t = a.attr("data-swiper-slide-index");
                    if (a.hasClass(r.params.slideDuplicateClass)) {
                      var e = r.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + r.params.slideDuplicateClass + ")");
                      r.lazy.loadInSlide(e.index(), !1)
                    } else {
                      var n = r.$wrapperEl.children("." + r.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                      r.lazy.loadInSlide(n.index(), !1)
                    }
                  }
                  r.emit("lazyImageReady", a[0], o[0])
                }
              }), r.emit("lazyImageLoad", a[0], o[0])
            })
          }
        },
        load: function () {
          function e(t) {
            if (l) {
              if (s.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]').length) return !0
            } else if (a[t]) return !0;
            return !1
          }

          function i(e) {
            return l ? t(e).attr("data-swiper-slide-index") : t(e).index()
          }
          var r = this,
            s = r.$wrapperEl,
            n = r.params,
            a = r.slides,
            o = r.activeIndex,
            l = r.virtual && n.virtual.enabled,
            h = n.lazy,
            p = n.slidesPerView;
          if ("auto" === p && (p = 0), r.lazy.initialImageLoaded || (r.lazy.initialImageLoaded = !0), r.params.watchSlidesVisibility) s.children("." + n.slideVisibleClass).each(function (e, i) {
            var s = l ? t(i).attr("data-swiper-slide-index") : t(i).index();
            r.lazy.loadInSlide(s)
          });
          else if (p > 1)
            for (var c = o; c < o + p; c += 1) e(c) && r.lazy.loadInSlide(c);
          else r.lazy.loadInSlide(o);
          if (h.loadPrevNext)
            if (p > 1 || h.loadPrevNextAmount && h.loadPrevNextAmount > 1) {
              for (var d = h.loadPrevNextAmount, u = p, f = Math.min(o + u + Math.max(d, u), a.length), m = Math.max(o - Math.max(u, d), 0), g = o + p; g < f; g += 1) e(g) && r.lazy.loadInSlide(g);
              for (var v = m; v < o; v += 1) e(v) && r.lazy.loadInSlide(v)
            } else {
              var y = s.children("." + n.slideNextClass);
              y.length > 0 && r.lazy.loadInSlide(i(y));
              var _ = s.children("." + n.slidePrevClass);
              _.length > 0 && r.lazy.loadInSlide(i(_))
            }
        }
      },
      Ae = {
        name: "lazy",
        params: {
          lazy: {
            enabled: !1,
            loadPrevNext: !1,
            loadPrevNextAmount: 1,
            loadOnTransitionStart: !1,
            elementClass: "swiper-lazy",
            loadingClass: "swiper-lazy-loading",
            loadedClass: "swiper-lazy-loaded",
            preloaderClass: "swiper-lazy-preloader"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            lazy: {
              initialImageLoaded: !1,
              load: Pe.load.bind(t),
              loadInSlide: Pe.loadInSlide.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
          },
          init: function () {
            var t = this;
            t.params.lazy.enabled && !t.params.loop && 0 === t.params.initialSlide && t.lazy.load()
          },
          scroll: function () {
            var t = this;
            t.params.freeMode && !t.params.freeModeSticky && t.lazy.load()
          },
          resize: function () {
            var t = this;
            t.params.lazy.enabled && t.lazy.load()
          },
          scrollbarDragMove: function () {
            var t = this;
            t.params.lazy.enabled && t.lazy.load()
          },
          transitionStart: function () {
            var t = this;
            t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !t.lazy.initialImageLoaded) && t.lazy.load()
          },
          transitionEnd: function () {
            var t = this;
            t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && t.lazy.load()
          }
        }
      },
      ke = {
        LinearSpline: function (t, e) {
          var i = function () {
            var t, e, i;
            return function (r, s) {
              for (e = -1, t = r.length; t - e > 1;) i = t + e >> 1, r[i] <= s ? e = i : t = i;
              return t
            }
          }();
          this.x = t, this.y = e, this.lastIndex = t.length - 1;
          var r, s;
          return this.interpolate = function (t) {
            return t ? (s = i(this.x, t), r = s - 1, (t - this.x[r]) * (this.y[s] - this.y[r]) / (this.x[s] - this.x[r]) + this.y[r]) : 0
          }, this
        },
        getInterpolateFunction: function (t) {
          var e = this;
          e.controller.spline || (e.controller.spline = e.params.loop ? new ke.LinearSpline(e.slidesGrid, t.slidesGrid) : new ke.LinearSpline(e.snapGrid, t.snapGrid))
        },
        setTranslate: function (t, e) {
          function i(t) {
            var e = n.rtlTranslate ? -n.translate : n.translate;
            "slide" === n.params.controller.by && (n.controller.getInterpolateFunction(t), s = -n.controller.spline.interpolate(-e)), s && "container" !== n.params.controller.by || (r = (t.maxTranslate() - t.minTranslate()) / (n.maxTranslate() - n.minTranslate()), s = (e - n.minTranslate()) * r + t.minTranslate()), n.params.controller.inverse && (s = t.maxTranslate() - s), t.updateProgress(s), t.setTranslate(s, n), t.updateActiveIndex(), t.updateSlidesClasses()
          }
          var r, s, n = this,
            a = n.controller.control;
          if (Array.isArray(a))
            for (var o = 0; o < a.length; o += 1) a[o] !== e && a[o] instanceof se && i(a[o]);
          else a instanceof se && e !== a && i(a)
        },
        setTransition: function (t, e) {
          function i(e) {
            e.setTransition(t, s), 0 !== t && (e.transitionStart(), e.params.autoHeight && Lt.nextTick(function () {
              e.updateAutoHeight()
            }), e.$wrapperEl.transitionEnd(function () {
              n && (e.params.loop && "slide" === s.params.controller.by && e.loopFix(), e.transitionEnd())
            }))
          }
          var r, s = this,
            n = s.controller.control;
          if (Array.isArray(n))
            for (r = 0; r < n.length; r += 1) n[r] !== e && n[r] instanceof se && i(n[r]);
          else n instanceof se && e !== n && i(n)
        }
      },
      De = {
        name: "controller",
        params: {
          controller: {
            control: void 0,
            inverse: !1,
            by: "slide"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            controller: {
              control: t.params.controller.control,
              getInterpolateFunction: ke.getInterpolateFunction.bind(t),
              setTranslate: ke.setTranslate.bind(t),
              setTransition: ke.setTransition.bind(t)
            }
          })
        },
        on: {
          update: function () {
            var t = this;
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
          },
          resize: function () {
            var t = this;
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
          },
          observerUpdate: function () {
            var t = this;
            t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
          },
          setTranslate: function (t, e) {
            var i = this;
            i.controller.control && i.controller.setTranslate(t, e)
          },
          setTransition: function (t, e) {
            var i = this;
            i.controller.control && i.controller.setTransition(t, e)
          }
        }
      },
      Me = {
        makeElFocusable: function (t) {
          return t.attr("tabIndex", "0"), t
        },
        addElRole: function (t, e) {
          return t.attr("role", e), t
        },
        addElLabel: function (t, e) {
          return t.attr("aria-label", e), t
        },
        disableEl: function (t) {
          return t.attr("aria-disabled", !0), t
        },
        enableEl: function (t) {
          return t.attr("aria-disabled", !1), t
        },
        onEnterKey: function (e) {
          var i = this,
            r = i.params.a11y;
          if (13 === e.keyCode) {
            var s = t(e.target);
            i.navigation && i.navigation.$nextEl && s.is(i.navigation.$nextEl) && (i.isEnd && !i.params.loop || i.slideNext(), i.isEnd ? i.a11y.notify(r.lastSlideMessage) : i.a11y.notify(r.nextSlideMessage)), i.navigation && i.navigation.$prevEl && s.is(i.navigation.$prevEl) && (i.isBeginning && !i.params.loop || i.slidePrev(), i.isBeginning ? i.a11y.notify(r.firstSlideMessage) : i.a11y.notify(r.prevSlideMessage)), i.pagination && s.is("." + i.params.pagination.bulletClass) && s[0].click()
          }
        },
        notify: function (t) {
          var e = this,
            i = e.a11y.liveRegion;
          0 !== i.length && (i.html(""), i.html(t))
        },
        updateNavigation: function () {
          var t = this;
          if (!t.params.loop) {
            var e = t.navigation,
              i = e.$nextEl,
              r = e.$prevEl;
            r && r.length > 0 && (t.isBeginning ? t.a11y.disableEl(r) : t.a11y.enableEl(r)), i && i.length > 0 && (t.isEnd ? t.a11y.disableEl(i) : t.a11y.enableEl(i))
          }
        },
        updatePagination: function () {
          var e = this,
            i = e.params.a11y;
          e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (r, s) {
            var n = t(s);
            e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, i.paginationBulletMessage.replace(/{{index}}/, n.index() + 1))
          })
        },
        init: function () {
          var t = this;
          t.$el.append(t.a11y.liveRegion);
          var e, i, r = t.params.a11y;
          t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && (t.a11y.makeElFocusable(e), t.a11y.addElRole(e, "button"), t.a11y.addElLabel(e, r.nextSlideMessage), e.on("keydown", t.a11y.onEnterKey)), i && (t.a11y.makeElFocusable(i), t.a11y.addElRole(i, "button"), t.a11y.addElLabel(i, r.prevSlideMessage), i.on("keydown", t.a11y.onEnterKey)), t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.on("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
        },
        destroy: function () {
          var t = this;
          t.a11y.liveRegion && t.a11y.liveRegion.length > 0 && t.a11y.liveRegion.remove();
          var e, i;
          t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && e.off("keydown", t.a11y.onEnterKey), i && i.off("keydown", t.a11y.onEnterKey), t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.$el.off("keydown", "." + t.params.pagination.bulletClass, t.a11y.onEnterKey)
        }
      },
      Ie = {
        name: "a11y",
        params: {
          a11y: {
            enabled: !0,
            notificationClass: "swiper-notification",
            prevSlideMessage: "Previous slide",
            nextSlideMessage: "Next slide",
            firstSlideMessage: "This is the first slide",
            lastSlideMessage: "This is the last slide",
            paginationBulletMessage: "Go to slide {{index}}"
          }
        },
        create: function () {
          var e = this;
          Lt.extend(e, {
            a11y: {
              liveRegion: t('<span class="' + e.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
            }
          }), Object.keys(Me).forEach(function (t) {
            e.a11y[t] = Me[t].bind(e)
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.a11y.enabled && (t.a11y.init(), t.a11y.updateNavigation())
          },
          toEdge: function () {
            var t = this;
            t.params.a11y.enabled && t.a11y.updateNavigation()
          },
          fromEdge: function () {
            var t = this;
            t.params.a11y.enabled && t.a11y.updateNavigation()
          },
          paginationUpdate: function () {
            var t = this;
            t.params.a11y.enabled && t.a11y.updatePagination()
          },
          destroy: function () {
            var t = this;
            t.params.a11y.enabled && t.a11y.destroy()
          }
        }
      },
      Oe = {
        init: function () {
          var t = this;
          if (t.params.history) {
            if (!Ft.history || !Ft.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
            var e = t.history;
            e.initialized = !0, e.paths = Oe.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, t.params.runCallbacksOnInit), t.params.history.replaceState || Ft.addEventListener("popstate", t.history.setHistoryPopState))
          }
        },
        destroy: function () {
          var t = this;
          t.params.history.replaceState || Ft.removeEventListener("popstate", t.history.setHistoryPopState)
        },
        setHistoryPopState: function () {
          var t = this;
          t.history.paths = Oe.getPathValues(), t.history.scrollToSlide(t.params.speed, t.history.paths.value, !1)
        },
        getPathValues: function () {
          var t = Ft.location.pathname.slice(1).split("/").filter(function (t) {
              return "" !== t
            }),
            e = t.length;
          return {
            key: t[e - 2],
            value: t[e - 1]
          }
        },
        setHistory: function (t, e) {
          var i = this;
          if (i.history.initialized && i.params.history.enabled) {
            var r = i.slides.eq(e),
              s = Oe.slugify(r.attr("data-history"));
            Ft.location.pathname.includes(t) || (s = t + "/" + s);
            var n = Ft.history.state;
            n && n.value === s || (i.params.history.replaceState ? Ft.history.replaceState({
              value: s
            }, null, s) : Ft.history.pushState({
              value: s
            }, null, s))
          }
        },
        slugify: function (t) {
          return t.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
        },
        scrollToSlide: function (t, e, i) {
          var r = this;
          if (e)
            for (var s = 0, n = r.slides.length; s < n; s += 1) {
              var a = r.slides.eq(s),
                o = Oe.slugify(a.attr("data-history"));
              if (o === e && !a.hasClass(r.params.slideDuplicateClass)) {
                var l = a.index();
                r.slideTo(l, t, i)
              }
            } else r.slideTo(0, t, i)
        }
      },
      Fe = {
        name: "history",
        params: {
          history: {
            enabled: !1,
            replaceState: !1,
            key: "slides"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            history: {
              init: Oe.init.bind(t),
              setHistory: Oe.setHistory.bind(t),
              setHistoryPopState: Oe.setHistoryPopState.bind(t),
              scrollToSlide: Oe.scrollToSlide.bind(t),
              destroy: Oe.destroy.bind(t)
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.history.enabled && t.history.init()
          },
          destroy: function () {
            var t = this;
            t.params.history.enabled && t.history.destroy()
          },
          transitionEnd: function () {
            var t = this;
            t.history.initialized && t.history.setHistory(t.params.history.key, t.activeIndex)
          }
        }
      },
      Re = {
        onHashCange: function () {
          var t = this,
            e = Ot.location.hash.replace("#", "");
          if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
            var i = t.$wrapperEl.children("." + t.params.slideClass + '[data-hash="' + e + '"]').index();
            if (void 0 === i) return;
            t.slideTo(i)
          }
        },
        setHash: function () {
          var t = this;
          if (t.hashNavigation.initialized && t.params.hashNavigation.enabled)
            if (t.params.hashNavigation.replaceState && Ft.history && Ft.history.replaceState) Ft.history.replaceState(null, null, "#" + t.slides.eq(t.activeIndex).attr("data-hash") || "");
            else {
              var e = t.slides.eq(t.activeIndex),
                i = e.attr("data-hash") || e.attr("data-history");
              Ot.location.hash = i || ""
            }
        },
        init: function () {
          var e = this;
          if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
            e.hashNavigation.initialized = !0;
            var i = Ot.location.hash.replace("#", "");
            if (i)
              for (var r = 0, s = e.slides.length; r < s; r += 1) {
                var n = e.slides.eq(r),
                  a = n.attr("data-hash") || n.attr("data-history");
                if (a === i && !n.hasClass(e.params.slideDuplicateClass)) {
                  var o = n.index();
                  e.slideTo(o, 0, e.params.runCallbacksOnInit, !0)
                }
              }
            e.params.hashNavigation.watchState && t(Ft).on("hashchange", e.hashNavigation.onHashCange)
          }
        },
        destroy: function () {
          var e = this;
          e.params.hashNavigation.watchState && t(Ft).off("hashchange", e.hashNavigation.onHashCange)
        }
      },
      Ne = {
        name: "hash-navigation",
        params: {
          hashNavigation: {
            enabled: !1,
            replaceState: !1,
            watchState: !1
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            hashNavigation: {
              initialized: !1,
              init: Re.init.bind(t),
              destroy: Re.destroy.bind(t),
              setHash: Re.setHash.bind(t),
              onHashCange: Re.onHashCange.bind(t)
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.hashNavigation.enabled && t.hashNavigation.init()
          },
          destroy: function () {
            var t = this;
            t.params.hashNavigation.enabled && t.hashNavigation.destroy()
          },
          transitionEnd: function () {
            var t = this;
            t.hashNavigation.initialized && t.hashNavigation.setHash()
          }
        }
      },
      Le = {
        run: function () {
          var t = this,
            e = t.slides.eq(t.activeIndex),
            i = t.params.autoplay.delay;
          e.attr("data-swiper-autoplay") && (i = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), t.autoplay.timeout = Lt.nextTick(function () {
            t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (t.slideNext(t.params.speed, !0, !0), t.emit("autoplay"))
          }, i)
        },
        start: function () {
          var t = this;
          return void 0 === t.autoplay.timeout && (!t.autoplay.running && (t.autoplay.running = !0, t.emit("autoplayStart"), t.autoplay.run(), !0))
        },
        stop: function () {
          var t = this;
          return !!t.autoplay.running && (void 0 !== t.autoplay.timeout && (t.autoplay.timeout && (clearTimeout(t.autoplay.timeout), t.autoplay.timeout = void 0), t.autoplay.running = !1, t.emit("autoplayStop"), !0))
        },
        pause: function (t) {
          var e = this;
          e.autoplay.running && (e.autoplay.paused || (e.autoplay.timeout && clearTimeout(e.autoplay.timeout), e.autoplay.paused = !0, 0 !== t && e.params.autoplay.waitForTransition ? (e.$wrapperEl[0].addEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].addEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd)) : (e.autoplay.paused = !1, e.autoplay.run())))
        }
      },
      Ve = {
        name: "autoplay",
        params: {
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            autoplay: {
              running: !1,
              paused: !1,
              run: Le.run.bind(t),
              start: Le.start.bind(t),
              stop: Le.stop.bind(t),
              pause: Le.pause.bind(t),
              onTransitionEnd: function (e) {
                t && !t.destroyed && t.$wrapperEl && e.target === this && (t.$wrapperEl[0].removeEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].removeEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
              }
            }
          })
        },
        on: {
          init: function () {
            var t = this;
            t.params.autoplay.enabled && t.autoplay.start()
          },
          beforeTransitionStart: function (t, e) {
            var i = this;
            i.autoplay.running && (e || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : i.autoplay.stop())
          },
          sliderFirstMove: function () {
            var t = this;
            t.autoplay.running && (t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause())
          },
          destroy: function () {
            var t = this;
            t.autoplay.running && t.autoplay.stop()
          }
        }
      },
      Be = {
        setTranslate: function () {
          for (var t = this, e = t.slides, i = 0; i < e.length; i += 1) {
            var r = t.slides.eq(i),
              s = r[0].swiperSlideOffset,
              n = -s;
            t.params.virtualTranslate || (n -= t.translate);
            var a = 0;
            t.isHorizontal() || (a = n, n = 0);
            var o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(r[0].progress), 0) : 1 + Math.min(Math.max(r[0].progress, -1), 0);
            r.css({
              opacity: o
            }).transform("translate3d(" + n + "px, " + a + "px, 0px)")
          }
        },
        setTransition: function (t) {
          var e = this,
            i = e.slides,
            r = e.$wrapperEl;
          if (i.transition(t), e.params.virtualTranslate && 0 !== t) {
            var s = !1;
            i.transitionEnd(function () {
              if (!s && e && !e.destroyed) {
                s = !0, e.animating = !1;
                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) r.trigger(t[i])
              }
            })
          }
        }
      },
      ze = {
        name: "effect-fade",
        params: {
          fadeEffect: {
            crossFade: !1
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            fadeEffect: {
              setTranslate: Be.setTranslate.bind(t),
              setTransition: Be.setTransition.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            if ("fade" === t.params.effect) {
              t.classNames.push(t.params.containerModifierClass + "fade");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              Lt.extend(t.params, e), Lt.extend(t.originalParams, e)
            }
          },
          setTranslate: function () {
            var t = this;
            "fade" === t.params.effect && t.fadeEffect.setTranslate()
          },
          setTransition: function (t) {
            var e = this;
            "fade" === e.params.effect && e.fadeEffect.setTransition(t)
          }
        }
      },
      He = {
        setTranslate: function () {
          var e, i = this,
            r = i.$el,
            s = i.$wrapperEl,
            n = i.slides,
            a = i.width,
            o = i.height,
            l = i.rtlTranslate,
            h = i.size,
            p = i.params.cubeEffect,
            c = i.isHorizontal(),
            d = i.virtual && i.params.virtual.enabled,
            u = 0;
          p.shadow && (c ? (e = s.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), s.append(e)), e.css({
            height: a + "px"
          })) : (e = r.find(".swiper-cube-shadow"), 0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'), r.append(e))));
          for (var f = 0; f < n.length; f += 1) {
            var m = n.eq(f),
              g = f;
            d && (g = parseInt(m.attr("data-swiper-slide-index"), 10));
            var v = 90 * g,
              y = Math.floor(v / 360);
            l && (v = -v, y = Math.floor(-v / 360));
            var _ = Math.max(Math.min(m[0].progress, 1), -1),
              b = 0,
              T = 0,
              E = 0;
            g % 4 == 0 ? (b = 4 * -y * h, E = 0) : (g - 1) % 4 == 0 ? (b = 0, E = 4 * -y * h) : (g - 2) % 4 == 0 ? (b = h + 4 * y * h, E = h) : (g - 3) % 4 == 0 && (b = -h, E = 3 * h + 4 * h * y), l && (b = -b), c || (T = b, b = 0);
            var w = "rotateX(" + (c ? 0 : -v) + "deg) rotateY(" + (c ? v : 0) + "deg) translate3d(" + b + "px, " + T + "px, " + E + "px)";
            if (_ <= 1 && _ > -1 && (u = 90 * g + 90 * _, l && (u = 90 * -g - 90 * _)), m.transform(w), p.slideShadows) {
              var x = c ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                S = c ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
              0 === x.length && (x = t('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), m.append(x)), 0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), m.append(S)), x.length && (x[0].style.opacity = Math.max(-_, 0)), S.length && (S[0].style.opacity = Math.max(_, 0))
            }
          }
          if (s.css({
              "-webkit-transform-origin": "50% 50% -" + h / 2 + "px",
              "-moz-transform-origin": "50% 50% -" + h / 2 + "px",
              "-ms-transform-origin": "50% 50% -" + h / 2 + "px",
              "transform-origin": "50% 50% -" + h / 2 + "px"
            }), p.shadow)
            if (c) e.transform("translate3d(0px, " + (a / 2 + p.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + p.shadowScale + ")");
            else {
              var C = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
                P = 1.5 - (Math.sin(2 * C * Math.PI / 360) / 2 + Math.cos(2 * C * Math.PI / 360) / 2),
                A = p.shadowScale,
                k = p.shadowScale / P,
                D = p.shadowOffset;
              e.transform("scale3d(" + A + ", 1, " + k + ") translate3d(0px, " + (o / 2 + D) + "px, " + -o / 2 / k + "px) rotateX(-90deg)")
            } var M = Bt.isSafari || Bt.isUiWebView ? -h / 2 : 0;
          s.transform("translate3d(0px,0," + M + "px) rotateX(" + (i.isHorizontal() ? 0 : u) + "deg) rotateY(" + (i.isHorizontal() ? -u : 0) + "deg)")
        },
        setTransition: function (t) {
          var e = this,
            i = e.$el;
          e.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.cubeEffect.shadow && !e.isHorizontal() && i.find(".swiper-cube-shadow").transition(t)
        }
      },
      je = {
        name: "effect-cube",
        params: {
          cubeEffect: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: .94
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            cubeEffect: {
              setTranslate: He.setTranslate.bind(t),
              setTransition: He.setTransition.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            if ("cube" === t.params.effect) {
              t.classNames.push(t.params.containerModifierClass + "cube"), t.classNames.push(t.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                resistanceRatio: 0,
                spaceBetween: 0,
                centeredSlides: !1,
                virtualTranslate: !0
              };
              Lt.extend(t.params, e), Lt.extend(t.originalParams, e)
            }
          },
          setTranslate: function () {
            var t = this;
            "cube" === t.params.effect && t.cubeEffect.setTranslate()
          },
          setTransition: function (t) {
            var e = this;
            "cube" === e.params.effect && e.cubeEffect.setTransition(t)
          }
        }
      },
      Ge = {
        setTranslate: function () {
          for (var e = this, i = e.slides, r = e.rtlTranslate, s = 0; s < i.length; s += 1) {
            var n = i.eq(s),
              a = n[0].progress;
            e.params.flipEffect.limitRotation && (a = Math.max(Math.min(n[0].progress, 1), -1));
            var o = n[0].swiperSlideOffset,
              l = -180 * a,
              h = l,
              p = 0,
              c = -o,
              d = 0;
            if (e.isHorizontal() ? r && (h = -h) : (d = c, c = 0, p = -h, h = 0), n[0].style.zIndex = -Math.abs(Math.round(a)) + i.length, e.params.flipEffect.slideShadows) {
              var u = e.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                f = e.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
              0 === u.length && (u = t('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "left" : "top") + '"></div>'), n.append(u)), 0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (e.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(f)), u.length && (u[0].style.opacity = Math.max(-a, 0)), f.length && (f[0].style.opacity = Math.max(a, 0))
            }
            n.transform("translate3d(" + c + "px, " + d + "px, 0px) rotateX(" + p + "deg) rotateY(" + h + "deg)")
          }
        },
        setTransition: function (t) {
          var e = this,
            i = e.slides,
            r = e.activeIndex,
            s = e.$wrapperEl;
          if (i.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t), e.params.virtualTranslate && 0 !== t) {
            var n = !1;
            i.eq(r).transitionEnd(function () {
              if (!n && e && !e.destroyed) {
                n = !0, e.animating = !1;
                for (var t = ["webkitTransitionEnd", "transitionend"], i = 0; i < t.length; i += 1) s.trigger(t[i])
              }
            })
          }
        }
      },
      We = {
        name: "effect-flip",
        params: {
          flipEffect: {
            slideShadows: !0,
            limitRotation: !0
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            flipEffect: {
              setTranslate: Ge.setTranslate.bind(t),
              setTransition: Ge.setTransition.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            if ("flip" === t.params.effect) {
              t.classNames.push(t.params.containerModifierClass + "flip"), t.classNames.push(t.params.containerModifierClass + "3d");
              var e = {
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !0
              };
              Lt.extend(t.params, e), Lt.extend(t.originalParams, e)
            }
          },
          setTranslate: function () {
            var t = this;
            "flip" === t.params.effect && t.flipEffect.setTranslate()
          },
          setTransition: function (t) {
            var e = this;
            "flip" === e.params.effect && e.flipEffect.setTransition(t)
          }
        }
      },
      $e = {
        setTranslate: function () {
          for (var e = this, i = e.width, r = e.height, s = e.slides, n = e.$wrapperEl, a = e.slidesSizesGrid, o = e.params.coverflowEffect, l = e.isHorizontal(), h = e.translate, p = l ? i / 2 - h : r / 2 - h, c = l ? o.rotate : -o.rotate, d = o.depth, u = 0, f = s.length; u < f; u += 1) {
            var m = s.eq(u),
              g = a[u],
              v = m[0].swiperSlideOffset,
              y = (p - v - g / 2) / g * o.modifier,
              _ = l ? c * y : 0,
              b = l ? 0 : c * y,
              T = -d * Math.abs(y),
              E = l ? 0 : o.stretch * y,
              w = l ? o.stretch * y : 0;
            Math.abs(w) < .001 && (w = 0), Math.abs(E) < .001 && (E = 0), Math.abs(T) < .001 && (T = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(b) < .001 && (b = 0);
            var x = "translate3d(" + w + "px," + E + "px," + T + "px)  rotateX(" + b + "deg) rotateY(" + _ + "deg)";
            if (m.transform(x), m[0].style.zIndex = 1 - Math.abs(Math.round(y)), o.slideShadows) {
              var S = l ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                C = l ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
              0 === S.length && (S = t('<div class="swiper-slide-shadow-' + (l ? "left" : "top") + '"></div>'), m.append(S)), 0 === C.length && (C = t('<div class="swiper-slide-shadow-' + (l ? "right" : "bottom") + '"></div>'), m.append(C)), S.length && (S[0].style.opacity = y > 0 ? y : 0), C.length && (C[0].style.opacity = -y > 0 ? -y : 0)
            }
          }
          if (Vt.pointerEvents || Vt.prefixedPointerEvents) {
            n[0].style.perspectiveOrigin = p + "px 50%"
          }
        },
        setTransition: function (t) {
          this.slides.transition(t).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(t)
        }
      },
      Xe = {
        name: "effect-coverflow",
        params: {
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            coverflowEffect: {
              setTranslate: $e.setTranslate.bind(t),
              setTransition: $e.setTransition.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this;
            "coverflow" === t.params.effect && (t.classNames.push(t.params.containerModifierClass + "coverflow"), t.classNames.push(t.params.containerModifierClass + "3d"), t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
          },
          setTranslate: function () {
            var t = this;
            "coverflow" === t.params.effect && t.coverflowEffect.setTranslate()
          },
          setTransition: function (t) {
            var e = this;
            "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
          }
        }
      },
      Ye = {
        init: function () {
          var t = this,
            e = t.params,
            i = e.thumbs,
            r = t.constructor;
          i.swiper instanceof r ? (t.thumbs.swiper = i.swiper, Lt.extend(t.thumbs.swiper.originalParams, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          }), Lt.extend(t.thumbs.swiper.params, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })) : Lt.isObject(i.swiper) && (t.thumbs.swiper = new r(Lt.extend({}, i.swiper, {
            watchSlidesVisibility: !0,
            watchSlidesProgress: !0,
            slideToClickedSlide: !1
          })), t.thumbs.swiperCreated = !0), t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", t.thumbs.onThumbClick)
        },
        onThumbClick: function () {
          var e = this,
            i = e.thumbs.swiper;
          if (i) {
            var r = i.clickedIndex,
              s = i.clickedSlide;
            if (!(s && t(s).hasClass(e.params.thumbs.slideThumbActiveClass) || void 0 === r || null === r)) {
              var n;
              if (n = i.params.loop ? parseInt(t(i.clickedSlide).attr("data-swiper-slide-index"), 10) : r, e.params.loop) {
                var a = e.activeIndex;
                e.slides.eq(a).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, a = e.activeIndex);
                var o = e.slides.eq(a).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(),
                  l = e.slides.eq(a).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index();
                n = void 0 === o ? l : void 0 === l ? o : l - a < a - o ? l : o
              }
              e.slideTo(n)
            }
          }
        },
        update: function (t) {
          var e = this,
            i = e.thumbs.swiper;
          if (i) {
            var r = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;
            if (e.realIndex !== i.realIndex) {
              var s, n = i.activeIndex;
              if (i.params.loop) {
                i.slides.eq(n).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, n = i.activeIndex);
                var a = i.slides.eq(n).prevAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index(),
                  o = i.slides.eq(n).nextAll('[data-swiper-slide-index="' + e.realIndex + '"]').eq(0).index();
                s = void 0 === a ? o : void 0 === o ? a : o - n == n - a ? n : o - n < n - a ? o : a
              } else s = e.realIndex;
              i.visibleSlidesIndexes.indexOf(s) < 0 && (i.params.centeredSlides ? s = s > n ? s - Math.floor(r / 2) + 1 : s + Math.floor(r / 2) - 1 : s > n && (s = s - r + 1), i.slideTo(s, t ? 0 : void 0))
            }
            var l = 1,
              h = e.params.thumbs.slideThumbActiveClass;
            if (e.params.slidesPerView > 1 && !e.params.centeredSlides && (l = e.params.slidesPerView), i.slides.removeClass(h), i.params.loop)
              for (var p = 0; p < l; p += 1) i.$wrapperEl.children('[data-swiper-slide-index="' + (e.realIndex + p) + '"]').addClass(h);
            else
              for (var c = 0; c < l; c += 1) i.slides.eq(e.realIndex + c).addClass(h)
          }
        }
      },
      Ue = {
        name: "thumbs",
        params: {
          thumbs: {
            swiper: null,
            slideThumbActiveClass: "swiper-slide-thumb-active",
            thumbsContainerClass: "swiper-container-thumbs"
          }
        },
        create: function () {
          var t = this;
          Lt.extend(t, {
            thumbs: {
              swiper: null,
              init: Ye.init.bind(t),
              update: Ye.update.bind(t),
              onThumbClick: Ye.onThumbClick.bind(t)
            }
          })
        },
        on: {
          beforeInit: function () {
            var t = this,
              e = t.params,
              i = e.thumbs;
            i && i.swiper && (t.thumbs.init(), t.thumbs.update(!0))
          },
          slideChange: function () {
            var t = this;
            t.thumbs.swiper && t.thumbs.update()
          },
          update: function () {
            var t = this;
            t.thumbs.swiper && t.thumbs.update()
          },
          resize: function () {
            var t = this;
            t.thumbs.swiper && t.thumbs.update()
          },
          observerUpdate: function () {
            var t = this;
            t.thumbs.swiper && t.thumbs.update()
          },
          setTransition: function (t) {
            var e = this,
              i = e.thumbs.swiper;
            i && i.setTransition(t)
          },
          beforeDestroy: function () {
            var t = this,
              e = t.thumbs.swiper;
            e && t.thumbs.swiperCreated && e && e.destroy()
          }
        }
      },
      qe = [ne, ae, oe, le, pe, de, fe, ge, ye, be, Ee, xe, Ce, Ae, De, Ie, Fe, Ne, Ve, ze, je, We, Xe, Ue];
    return void 0 === se.use && (se.use = se.Class.use, se.installModule = se.Class.installModule), se.use(qe), se
  })
}, function (t, e, i) {
  "use strict";
  (function (t) {
    e.a = {
      init: function () {
        t(document).on({
          mouseenter: function () {
            t("#news-" + t(this).attr("data-index")).addClass("over")
          },
          mouseleave: function () {
            t("#news-" + t(this).attr("data-index")).removeClass("over")
          }
        }, ".readmore")
      },
      finalize: function () {}
    }
  }).call(e, i(0))
}, function (t, e, i) {
  "use strict";
  (function (t) {
    var r = i(6);
    e.a = {
      init: function () {
        t(document).ready(function () {
          function e() {
            t(window).scrollTop() > i ? t(".navbar").removeClass("transparent") : t(".navbar").addClass("transparent")
          }
          var i = 80;
          t(window).on("scroll", function () {
            e()
          }), setTimeout(function () {
            e()
          }, 100), window.matchMedia("(min-width: 992px)").matches && (t(".videoPresent").each(function () {
            var e = t(this).find("source");
            e.attr("src", e.data("src")).removeAttr("data-src"), t(this).load()
          }), t(".work-card:not(.work-card--loop)").hover(function () {
            t("video", this).get(0).play()
          }, function () {
            t("video", this).get(0).pause()
          })), t("#credits-collapse").on("hide.bs.collapse", function () {
            t(".credits-nav").text("Show full credits")
          }), t("#credits-collapse").on("show.bs.collapse", function () {
            t(".credits-nav").text("Hide full credits")
          });
          var s = t("#video-modal iframe");
          if (s.length) {
            var n = new r.a(s),
              a = !1;
            n.on("play", function () {
              a = !0
            }), n.on("pause", function () {
              a = !1
            }), t(".modal-header .close").click(function () {
              a && n.pause()
            })
          }
        })
      },
      finalize: function () {}
    }
  }).call(e, i(0))
}, function (t, e) {}]);

