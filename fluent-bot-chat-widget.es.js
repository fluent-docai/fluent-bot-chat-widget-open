var oc = Object.defineProperty, sc = Object.defineProperties;
var ac = Object.getOwnPropertyDescriptors;
var wi = Object.getOwnPropertySymbols;
var cc = Object.prototype.hasOwnProperty, lc = Object.prototype.propertyIsEnumerable;
var sn = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), fc = (e) => {
  throw TypeError(e);
};
var Xu = (e, t, n) => t in e ? oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ce = (e, t) => {
  for (var n in t || (t = {}))
    cc.call(t, n) && Xu(e, n, t[n]);
  if (wi)
    for (var n of wi(t))
      lc.call(t, n) && Xu(e, n, t[n]);
  return e;
}, Ce = (e, t) => sc(e, ac(t));
var tt = (e, t, n) => Xu(e, typeof t != "symbol" ? t + "" : t, n);
var ve = (e, t, n) => new Promise((u, r) => {
  var i = (a) => {
    try {
      s(n.next(a));
    } catch (c) {
      r(c);
    }
  }, o = (a) => {
    try {
      s(n.throw(a));
    } catch (c) {
      r(c);
    }
  }, s = (a) => a.done ? u(a.value) : Promise.resolve(a.value).then(i, o);
  s((n = n.apply(e, t)).next());
}), Gt = function(e, t) {
  this[0] = e, this[1] = t;
}, Qu = (e, t, n) => {
  var u = (o, s, a, c) => {
    try {
      var l = n[o](s), f = (s = l.value) instanceof Gt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? u(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => u("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => u(o, s, a, c)), i = {};
  return n = n.apply(e, t), i[sn("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, er = (e) => {
  var t = e[sn("asyncIterator")], n = !1, u, r = {};
  return t == null ? (t = e[sn("iterator")](), u = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), u = (i) => r[i] = (o) => {
    if (n) {
      if (n = !1, i === "throw") throw o;
      return o;
    }
    return n = !0, {
      done: !1,
      value: new Gt(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || fc("Object expected"), s(a);
      }), 1)
    };
  }), r[sn("iterator")] = () => r, u("next"), "throw" in t ? u("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && u("return"), r;
}, Ai = (e, t, n) => (t = e[sn("asyncIterator")]) ? t.call(e) : (e = e[sn("iterator")](), t = {}, n = (u, r) => (r = e[u]) && (t[u] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), n("next"), n("return"), t);
var Ir = Array.isArray, dc = Array.prototype.indexOf, Lr = Array.from, To = Object.defineProperty, jt = Object.getOwnPropertyDescriptor, Fo = Object.getOwnPropertyDescriptors, hc = Object.prototype, pc = Array.prototype, Br = Object.getPrototypeOf, Ci = Object.isExtensible;
function Sn(e) {
  return typeof e == "function";
}
const fn = () => {
};
function bc(e) {
  return e();
}
function hu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ft = 2, Ro = 4, Cu = 8, zr = 16, Ot = 32, xn = 64, pu = 128, Ye = 256, bu = 512, We = 1024, Ft = 2048, un = 4096, Tt = 8192, Du = 16384, gc = 32768, Un = 65536, mc = 1 << 17, _c = 1 << 19, Oo = 1 << 20, xr = 1 << 21, Ut = Symbol("$state"), No = Symbol("legacy props"), xc = Symbol("");
function Mo(e) {
  return e === this.v;
}
function Io(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Pr(e) {
  return !Io(e, this.v);
}
function vc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function yc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ec(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function kc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function wc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ac() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Cc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Dc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let vn = !1;
function Sc() {
  vn = !0;
}
const qr = 1, jr = 2, Lo = 4, Tc = 8, Fc = 16, Rc = 1, Oc = 2, Bo = 4, Nc = 8, Mc = 16, Ic = 1, Lc = 2, je = Symbol(), Bc = "http://www.w3.org/1999/xhtml", zc = "http://www.w3.org/2000/svg";
function Pc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ae = null;
function Di(e) {
  ae = e;
}
function yn(e, t = !1, n) {
  var u = ae = {
    p: ae,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  vn && !t && (ae.l = {
    s: null,
    u: null,
    r1: [],
    r2: pn(!1)
  }), Hr(() => {
    u.d = !0;
  });
}
function En(e) {
  const t = ae;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var n = ee, u = ne;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          $t(i.effect), Et(i.reaction), Wr(i.fn);
        }
      } finally {
        $t(n), Et(u);
      }
    }
    ae = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function $n() {
  return !vn || ae !== null && ae.l === null;
}
function Zt(e) {
  if (typeof e != "object" || e === null || Ut in e)
    return e;
  const t = Br(e);
  if (t !== hc && t !== pc)
    return e;
  var n = /* @__PURE__ */ new Map(), u = Ir(e), r = /* @__PURE__ */ Re(0), i = ne, o = (s) => {
    var a = ne;
    Et(i);
    var c = s();
    return Et(a), c;
  };
  return u && n.set("length", /* @__PURE__ */ Re(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ac();
        var l = n.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ Re(c.value)), n.set(a, l)) : te(
          l,
          o(() => Zt(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = n.get(a);
        if (c === void 0)
          a in s && (n.set(
            a,
            o(() => /* @__PURE__ */ Re(je))
          ), tr(r));
        else {
          if (u && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              n.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && te(l, f);
          }
          te(c, je), tr(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === Ut)
          return e;
        var l = n.get(a), f = a in s;
        if (l === void 0 && (!f || (p = jt(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ Re(Zt(f ? s[a] : je))), n.set(a, l)), l !== void 0) {
          var h = S(l);
          return h === je ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = n.get(a);
          l && (c.value = S(l));
        } else if (c === void 0) {
          var f = n.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== je)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return c;
      },
      has(s, a) {
        var h;
        if (a === Ut)
          return !0;
        var c = n.get(a), l = c !== void 0 && c.v !== je || Reflect.has(s, a);
        if (c !== void 0 || ee !== null && (!l || (h = jt(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ Re(l ? Zt(s[a]) : je)), n.set(a, c));
          var f = S(c);
          if (f === je)
            return !1;
        }
        return l;
      },
      set(s, a, c, l) {
        var y;
        var f = n.get(a), h = a in s;
        if (u && a === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var d = n.get(p + "");
            d !== void 0 ? te(d, je) : p in s && (d = o(() => /* @__PURE__ */ Re(je)), n.set(p + "", d));
          }
        f === void 0 ? (!h || (y = jt(s, a)) != null && y.writable) && (f = o(() => /* @__PURE__ */ Re(void 0)), te(
          f,
          o(() => Zt(c))
        ), n.set(a, f)) : (h = f.v !== je, te(
          f,
          o(() => Zt(c))
        ));
        var m = Reflect.getOwnPropertyDescriptor(s, a);
        if (m != null && m.set && m.set.call(l, c), !h) {
          if (u && typeof a == "string") {
            var g = (
              /** @type {Source<number>} */
              n.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= g.v && te(g, k + 1);
          }
          tr(r);
        }
        return !0;
      },
      ownKeys(s) {
        S(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== je;
        });
        for (var [c, l] of n)
          l.v !== je && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Cc();
      }
    }
  );
}
function tr(e, t = 1) {
  te(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function hn(e) {
  var t = ft | Ft, n = ne !== null && (ne.f & ft) !== 0 ? (
    /** @type {Derived} */
    ne
  ) : null;
  return ee === null || n !== null && (n.f & Ye) !== 0 ? t |= Ye : ee.f |= Oo, {
    ctx: ae,
    deps: null,
    effects: null,
    equals: Mo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: n != null ? n : ee
  };
}
// @__NO_SIDE_EFFECTS__
function Ue(e) {
  const t = /* @__PURE__ */ hn(e);
  return Qo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  const t = /* @__PURE__ */ hn(e);
  return t.equals = Pr, t;
}
function zo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      Rt(
        /** @type {Effect} */
        t[n]
      );
  }
}
function qc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ft) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Po(e) {
  var t, n = ee;
  $t(qc(e));
  try {
    zo(e), t = us(e);
  } finally {
    $t(n);
  }
  return t;
}
function qo(e) {
  var t = Po(e), n = (Pt || (e.f & Ye) !== 0) && e.deps !== null ? un : We;
  dt(e, n), e.equals(t) || (e.v = t, e.wv = ts());
}
const Mn = /* @__PURE__ */ new Map();
function pn(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Mo,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function Re(e, t) {
  const n = pn(e);
  return Qo(n), n;
}
// @__NO_SIDE_EFFECTS__
function $r(e, t = !1) {
  var u, r;
  const n = pn(e);
  return t || (n.equals = Pr), vn && ae !== null && ae.l !== null && ((r = (u = ae.l).s) != null ? r : u.s = []).push(n), n;
}
function te(e, t, n = !1) {
  ne !== null && !_t && $n() && (ne.f & (ft | zr)) !== 0 && !(ze != null && ze.includes(e)) && Dc();
  let u = n ? Zt(t) : t;
  return vr(e, u);
}
function vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    Vn ? Mn.set(e, t) : Mn.set(e, n), e.v = t, (e.f & ft) !== 0 && ((e.f & Ft) !== 0 && Po(
      /** @type {Derived} */
      e
    ), dt(e, (e.f & Ye) === 0 ? We : un)), e.wv = ts(), jo(e, Ft), $n() && ee !== null && (ee.f & We) !== 0 && (ee.f & (Ot | xn)) === 0 && (nt === null ? Kc([e]) : nt.push(e));
  }
  return t;
}
function Si(e, t = 1) {
  var n = S(e), u = t === 1 ? n++ : n--;
  return te(e, n), u;
}
function jo(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var u = $n(), r = n.length, i = 0; i < r; i++) {
      var o = n[i], s = o.f;
      (s & Ft) === 0 && (!u && o === ee || (dt(o, t), (s & (We | Ye)) !== 0 && ((s & ft) !== 0 ? jo(
        /** @type {Derived} */
        o,
        un
      ) : Ru(
        /** @type {Effect} */
        o
      ))));
    }
}
let jc = !1;
var Ti, Uo, $o, Ho;
function Uc() {
  if (Ti === void 0) {
    Ti = window, Uo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    $o = jt(t, "firstChild").get, Ho = jt(t, "nextSibling").get, Ci(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ci(n) && (n.__t = void 0);
  }
}
function Su(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return $o.call(e);
}
// @__NO_SIDE_EFFECTS__
function Tu(e) {
  return Ho.call(e);
}
function J(e, t) {
  return /* @__PURE__ */ xt(e);
}
function _e(e, t) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ xt(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Tu(n) : n;
  }
}
function Ee(e, t = 1, n = !1) {
  let u = e;
  for (; t--; )
    u = /** @type {TemplateNode} */
    /* @__PURE__ */ Tu(u);
  return u;
}
function $c(e) {
  e.textContent = "";
}
function Wo(e) {
  ee === null && ne === null && Ec(), ne !== null && (ne.f & Ye) !== 0 && ee === null && yc(), Vn && vc();
}
function Hc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function kn(e, t, n, u = !0) {
  var a;
  var r = ee, i = {
    ctx: ae,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ft,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (n)
    try {
      Zr(i), i.f |= gc;
    } catch (c) {
      throw Rt(i), c;
    }
  else t !== null && Ru(i);
  var o = n && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Oo | pu)) === 0;
  if (!o && u && (r !== null && Hc(i, r), ne !== null && (ne.f & ft) !== 0)) {
    var s = (
      /** @type {Derived} */
      ne
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function Hr(e) {
  const t = kn(Cu, null, !1);
  return dt(t, We), t.teardown = e, t;
}
function Qt(e) {
  var r;
  Wo();
  var t = ee !== null && (ee.f & Ot) !== 0 && ae !== null && !ae.m;
  if (t) {
    var n = (
      /** @type {ComponentContext} */
      ae
    );
    ((r = n.e) != null ? r : n.e = []).push({
      fn: e,
      effect: ee,
      reaction: ne
    });
  } else {
    var u = Wr(e);
    return u;
  }
}
function Wc(e) {
  return Wo(), Vr(e);
}
function Vc(e) {
  const t = kn(xn, e, !0);
  return (n = {}) => new Promise((u) => {
    n.outro ? bn(t, () => {
      Rt(t), u(void 0);
    }) : (Rt(t), u(void 0));
  });
}
function Wr(e) {
  return kn(Ro, e, !1);
}
function Vr(e) {
  return kn(Cu, e, !0);
}
function pe(e, t = [], n = hn) {
  const u = t.map(n);
  return Hn(() => e(...u.map(S)));
}
function Hn(e, t = 0) {
  return kn(Cu | zr | t, e, !0);
}
function en(e, t = !0) {
  return kn(Cu | Ot, e, !0, t);
}
function Vo(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = Vn, u = ne;
    Ri(!0), Et(null);
    try {
      t.call(null);
    } finally {
      Ri(n), Et(u);
    }
  }
}
function Go(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    var u = n.next;
    (n.f & xn) !== 0 ? n.parent = null : Rt(n, t), n = u;
  }
}
function Gc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ot) === 0 && Rt(t), t = n;
  }
}
function Rt(e, t = !0) {
  var n = !1;
  (t || (e.f & _c) !== 0) && e.nodes_start !== null && (Zo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), Go(e, t && !n), xu(e, 0), dt(e, Du);
  var u = e.transitions;
  if (u !== null)
    for (const i of u)
      i.stop();
  Vo(e);
  var r = e.parent;
  r !== null && r.first !== null && Ko(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Zo(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Tu(e)
    );
    e.remove(), e = n;
  }
}
function Ko(e) {
  var t = e.parent, n = e.prev, u = e.next;
  n !== null && (n.next = u), u !== null && (u.prev = n), t !== null && (t.first === e && (t.first = u), t.last === e && (t.last = n));
}
function bn(e, t) {
  var n = [];
  Gr(e, n, !0), Jo(n, () => {
    Rt(e), t && t();
  });
}
function Jo(e, t) {
  var n = e.length;
  if (n > 0) {
    var u = () => --n || t();
    for (var r of e)
      r.out(u);
  } else
    t();
}
function Gr(e, t, n) {
  if ((e.f & Tt) === 0) {
    if (e.f ^= Tt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var u = e.first; u !== null; ) {
      var r = u.next, i = (u.f & Un) !== 0 || (u.f & Ot) !== 0;
      Gr(u, t, i ? n : !1), u = r;
    }
  }
}
function In(e) {
  Yo(e, !0);
}
function Yo(e, t) {
  if ((e.f & Tt) !== 0) {
    e.f ^= Tt, (e.f & We) === 0 && (e.f ^= We), Gn(e) && (dt(e, Ft), Ru(e));
    for (var n = e.first; n !== null; ) {
      var u = n.next, r = (n.f & Un) !== 0 || (n.f & Ot) !== 0;
      Yo(n, r ? t : !1), n = u;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Ln = [], yr = [];
function Xo() {
  var e = Ln;
  Ln = [], hu(e);
}
function Zc() {
  var e = yr;
  yr = [], hu(e);
}
function Wn(e) {
  Ln.length === 0 && queueMicrotask(Xo), Ln.push(e);
}
function Fi() {
  Ln.length > 0 && Xo(), yr.length > 0 && Zc();
}
let au = !1, gu = !1, mu = null, Yt = !1, Vn = !1;
function Ri(e) {
  Vn = e;
}
let Nn = [];
let ne = null, _t = !1;
function Et(e) {
  ne = e;
}
let ee = null;
function $t(e) {
  ee = e;
}
let ze = null;
function Qo(e) {
  ne !== null && ne.f & xr && (ze === null ? ze = [e] : ze.push(e));
}
let Be = null, Je = 0, nt = null;
function Kc(e) {
  nt = e;
}
let es = 1, _u = 0, Pt = !1;
function ts() {
  return ++es;
}
function Gn(e) {
  var f, h;
  var t = e.f;
  if ((t & Ft) !== 0)
    return !0;
  if ((t & un) !== 0) {
    var n = e.deps, u = (t & Ye) !== 0;
    if (n !== null) {
      var r, i, o = (t & bu) !== 0, s = u && ee !== null && !Pt, a = n.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = n[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= bu), s && l !== null && (l.f & Ye) === 0 && (c.f ^= Ye);
      }
      for (r = 0; r < a; r++)
        if (i = n[r], Gn(
          /** @type {Derived} */
          i
        ) && qo(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!u || ee !== null && !Pt) && dt(e, We);
  }
  return !1;
}
function Jc(e, t) {
  for (var n = t; n !== null; ) {
    if ((n.f & pu) !== 0)
      try {
        n.fn(e);
        return;
      } catch (u) {
        n.f ^= pu;
      }
    n = n.parent;
  }
  throw au = !1, e;
}
function Oi(e) {
  return (e.f & Du) === 0 && (e.parent === null || (e.parent.f & pu) === 0);
}
function Fu(e, t, n, u) {
  if (au) {
    if (n === null && (au = !1), Oi(t))
      throw e;
    return;
  }
  if (n !== null && (au = !0), Jc(e, t), Oi(t))
    throw e;
}
function ns(e, t, n = !0) {
  var u = e.reactions;
  if (u !== null)
    for (var r = 0; r < u.length; r++) {
      var i = u[r];
      ze != null && ze.includes(e) || ((i.f & ft) !== 0 ? ns(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (n ? dt(i, Ft) : (i.f & We) !== 0 && dt(i, un), Ru(
        /** @type {Effect} */
        i
      )));
    }
}
function us(e) {
  var p, d;
  var t = Be, n = Je, u = nt, r = ne, i = Pt, o = ze, s = ae, a = _t, c = e.f;
  Be = /** @type {null | Value[]} */
  null, Je = 0, nt = null, Pt = (c & Ye) !== 0 && (_t || !Yt || ne === null), ne = (c & (Ot | xn)) === 0 ? e : null, ze = null, Di(e.ctx), _t = !1, _u++, e.f |= xr;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Be !== null) {
      var h;
      if (xu(e, Je), f !== null && Je > 0)
        for (f.length = Je + Be.length, h = 0; h < Be.length; h++)
          f[Je + h] = Be[h];
      else
        e.deps = f = Be;
      if (!Pt)
        for (h = Je; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Je < f.length && (xu(e, Je), f.length = Je);
    if ($n() && nt !== null && !_t && f !== null && (e.f & (ft | un | Ft)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      nt.length; h++)
        ns(
          nt[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (_u++, nt !== null && (u === null ? u = nt : u.push(.../** @type {Source[]} */
    nt))), l;
  } finally {
    Be = t, Je = n, nt = u, ne = r, Pt = i, ze = o, Di(s), _t = a, e.f ^= xr;
  }
}
function Yc(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var u = dc.call(n, e);
    if (u !== -1) {
      var r = n.length - 1;
      r === 0 ? n = t.reactions = null : (n[u] = n[r], n.pop());
    }
  }
  n === null && (t.f & ft) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Be === null || !Be.includes(t)) && (dt(t, un), (t.f & (Ye | bu)) === 0 && (t.f ^= bu), zo(
    /** @type {Derived} **/
    t
  ), xu(
    /** @type {Derived} **/
    t,
    0
  ));
}
function xu(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var u = t; u < n.length; u++)
      Yc(e, n[u]);
}
function Zr(e) {
  var t = e.f;
  if ((t & Du) === 0) {
    dt(e, We);
    var n = ee, u = ae, r = Yt;
    ee = e, Yt = !0;
    try {
      (t & zr) !== 0 ? Gc(e) : Go(e), Vo(e);
      var i = us(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = es;
      var o = e.deps, s;
    } catch (a) {
      Fu(a, e, n, u || e.ctx);
    } finally {
      Yt = r, ee = n;
    }
  }
}
function Xc() {
  try {
    kc();
  } catch (e) {
    if (mu !== null)
      Fu(e, mu, null);
    else
      throw e;
  }
}
function rs() {
  var e = Yt;
  try {
    var t = 0;
    for (Yt = !0; Nn.length > 0; ) {
      t++ > 1e3 && Xc();
      var n = Nn, u = n.length;
      Nn = [];
      for (var r = 0; r < u; r++) {
        var i = el(n[r]);
        Qc(i);
      }
      Mn.clear();
    }
  } finally {
    gu = !1, Yt = e, mu = null;
  }
}
function Qc(e) {
  var t = e.length;
  if (t !== 0)
    for (var n = 0; n < t; n++) {
      var u = e[n];
      if ((u.f & (Du | Tt)) === 0)
        try {
          Gn(u) && (Zr(u), u.deps === null && u.first === null && u.nodes_start === null && (u.teardown === null ? Ko(u) : u.fn = null));
        } catch (r) {
          Fu(r, u, null, u.ctx);
        }
    }
}
function Ru(e) {
  gu || (gu = !0, queueMicrotask(rs));
  for (var t = mu = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if ((n & (xn | Ot)) !== 0) {
      if ((n & We) === 0) return;
      t.f ^= We;
    }
  }
  Nn.push(t);
}
function el(e) {
  for (var t = [], n = e; n !== null; ) {
    var u = n.f, r = (u & (Ot | xn)) !== 0, i = r && (u & We) !== 0;
    if (!i && (u & Tt) === 0) {
      if ((u & Ro) !== 0)
        t.push(n);
      else if (r)
        n.f ^= We;
      else
        try {
          Gn(n) && Zr(n);
        } catch (a) {
          Fu(a, n, null, n.ctx);
        }
      var o = n.first;
      if (o !== null) {
        n = o;
        continue;
      }
    }
    var s = n.parent;
    for (n = n.next; n === null && s !== null; )
      n = s.next, s = s.parent;
  }
  return t;
}
function tl(e) {
  var t;
  for (Fi(); Nn.length > 0; )
    gu = !0, rs(), Fi();
  return (
    /** @type {T} */
    t
  );
}
function nl() {
  return ve(this, null, function* () {
    yield Promise.resolve(), tl();
  });
}
function S(e) {
  var t = e.f, n = (t & ft) !== 0;
  if (ne !== null && !_t) {
    if (!(ze != null && ze.includes(e))) {
      var u = ne.deps;
      e.rv < _u && (e.rv = _u, Be === null && u !== null && u[Je] === e ? Je++ : Be === null ? Be = [e] : (!Pt || !Be.includes(e)) && Be.push(e));
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Ye) === 0 && (r.f ^= Ye);
  }
  return n && (r = /** @type {Derived} */
  e, Gn(r) && qo(r)), Vn && Mn.has(e) ? Mn.get(e) : e.v;
}
function tn(e) {
  var t = _t;
  try {
    return _t = !0, e();
  } finally {
    _t = t;
  }
}
const ul = -7169;
function dt(e, t) {
  e.f = e.f & ul | t;
}
function rl(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ut in e)
      Er(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && Ut in n && Er(n);
      }
  }
}
function Er(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let u in e)
      try {
        Er(e[u], t);
      } catch (r) {
      }
    const n = Br(e);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const u = Fo(n);
      for (let r in u) {
        const i = u[r].get;
        if (i)
          try {
            i.call(e);
          } catch (o) {
          }
      }
    }
  }
}
function il(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ol = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function sl(e) {
  return ol.includes(e);
}
const al = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function cl(e) {
  var t;
  return e = e.toLowerCase(), (t = al[e]) != null ? t : e;
}
const ll = ["touchstart", "touchmove"];
function fl(e) {
  return ll.includes(e);
}
function dl(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Wn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let Ni = !1;
function hl() {
  Ni || (Ni = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const n of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = n.__on_r) == null || t.call(n);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function is(e) {
  var t = ne, n = ee;
  Et(null), $t(null);
  try {
    return e();
  } finally {
    Et(t), $t(n);
  }
}
function pl(e, t, n, u = n) {
  e.addEventListener(t, () => is(n));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), u(!0);
  } : e.__on_r = () => u(!0), hl();
}
const os = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function ss(e, t, n, u = {}) {
  function r(i) {
    if (u.capture || On.call(t, i), !i.cancelBubble)
      return is(() => n == null ? void 0 : n.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Wn(() => {
    t.addEventListener(e, r, u);
  }) : t.addEventListener(e, r, u), r;
}
function Mi(e, t, n, u, r) {
  var i = { capture: u, passive: r }, o = ss(e, t, n, i);
  (t === document.body || t === window || t === document) && Hr(() => {
    t.removeEventListener(e, o, i);
  });
}
function Ou(e) {
  for (var t = 0; t < e.length; t++)
    os.add(e[t]);
  for (var n of kr)
    n(e);
}
function On(e) {
  var y;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), u = e.type, r = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], i = (
    /** @type {null | Element} */
    r[0] || e.target
  ), o = 0, s = e.__root;
  if (s) {
    var a = r.indexOf(s);
    if (a !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var c = r.indexOf(t);
    if (c === -1)
      return;
    a <= c && (o = a);
  }
  if (i = /** @type {Element} */
  r[o] || e.target, i !== t) {
    To(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var l = ne, f = ee;
    Et(null), $t(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i["__" + u];
          if (m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Ir(m)) {
              var [g, ...k] = m;
              g.apply(i, [e, ...k]);
            } else
              m.call(i, e);
        } catch (x) {
          h ? p.push(x) : h = x;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let x of p)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Et(l), $t(f);
    }
  }
}
function Kr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function gn(e, t) {
  var n = (
    /** @type {Effect} */
    ee
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  var n = (t & Ic) !== 0, u = (t & Lc) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Kr(i ? e : "<!>" + e), n || (r = /** @type {Node} */
    /* @__PURE__ */ xt(r)));
    var o = (
      /** @type {TemplateNode} */
      u || Uo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (n) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      gn(s, a);
    } else
      gn(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function bl(e, t, n = "svg") {
  var u = !e.startsWith("<!>"), r = `<${n}>${u ? e : "<!>" + e}</${n}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        Kr(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ xt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ xt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return gn(a, a), a;
  };
}
function Se() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Su();
  return e.append(t, n), gn(t, n), e;
}
function W(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Kt(e, t) {
  var u;
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== ((u = e.__t) != null ? u : e.__t = e.nodeValue) && (e.__t = n, e.nodeValue = n + "");
}
function nr(e, t) {
  return gl(e, t);
}
const an = /* @__PURE__ */ new Map();
function gl(e, { target: t, anchor: n, props: u = {}, events: r, context: i, intro: o = !0 }) {
  Uc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = fl(p);
        t.addEventListener(p, On, { passive: d });
        var m = an.get(p);
        m === void 0 ? (document.addEventListener(p, On, { passive: d }), an.set(p, 1)) : an.set(p, m + 1);
      }
    }
  };
  a(Lr(os)), kr.add(a);
  var c = void 0, l = Vc(() => {
    var f = n != null ? n : t.appendChild(Su());
    return en(() => {
      if (i) {
        yn({});
        var h = (
          /** @type {ComponentContext} */
          ae
        );
        h.c = i;
      }
      r && (u.$$events = r), c = e(f, u) || {}, i && En();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, On);
        var p = (
          /** @type {number} */
          an.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, On), an.delete(h)) : an.set(h, p);
      }
      kr.delete(a), f !== n && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return ml.set(c, l), c;
}
let ml = /* @__PURE__ */ new WeakMap();
function Oe(e, t, [n, u] = [0, 0]) {
  var r = e, i = null, o = null, s = je, a = n > 0 ? Un : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? In(i) : p && (i = en(() => p(r))), o && bn(o, () => {
      o = null;
    })) : (o ? In(o) : p && (o = en(() => p(r, [n + 1, u]))), i && bn(i, () => {
      i = null;
    })));
  };
  Hn(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function Jr(e, t) {
  return t;
}
function _l(e, t, n, u) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Gr(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && n !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    $c(a), a.append(
      /** @type {Element} */
      n
    ), u.clear(), Lt(e, t[0].prev, t[i - 1].next);
  }
  Jo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (u.delete(l.k), Lt(e, l.prev, l.next)), Rt(l.e, !s);
    }
  });
}
function vu(e, t, n, u, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & Lo) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(Su());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Ur(() => {
    var p = n();
    return Ir(p) ? p : p == null ? [] : Lr(p);
  });
  Hn(() => {
    var p = S(h), d = p.length;
    f && d === 0 || (f = d === 0, xl(p, s, o, r, t, u, n), i !== null && (d === 0 ? l ? In(l) : l = en(() => i(o)) : l !== null && bn(l, () => {
      l = null;
    })), S(h));
  });
}
function xl(e, t, n, u, r, i, o) {
  var U, H, se, we;
  var s = (r & Tc) !== 0, a = (r & (qr | jr)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, m, g = [], k = [], y, x, _, v;
  if (s)
    for (v = 0; v < c; v += 1)
      y = e[v], x = i(y, v), _ = l.get(x), _ !== void 0 && ((U = _.a) == null || U.measure(), (m != null ? m : m = /* @__PURE__ */ new Set()).add(_));
  for (v = 0; v < c; v += 1) {
    if (y = e[v], x = i(y, v), _ = l.get(x), _ === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : n;
      d = yl(
        A,
        t,
        d,
        d === null ? t.first : d.next,
        y,
        x,
        v,
        u,
        r,
        o
      ), l.set(x, d), g = [], k = [], h = d.next;
      continue;
    }
    if (a && vl(_, y, v, r), (_.e.f & Tt) !== 0 && (In(_.e), s && ((H = _.a) == null || H.unfix(), (m != null ? m : m = /* @__PURE__ */ new Set()).delete(_))), _ !== h) {
      if (p !== void 0 && p.has(_)) {
        if (g.length < k.length) {
          var D = k[0], R;
          d = D.prev;
          var O = g[0], z = g[g.length - 1];
          for (R = 0; R < g.length; R += 1)
            Ii(g[R], D, n);
          for (R = 0; R < k.length; R += 1)
            p.delete(k[R]);
          Lt(t, O.prev, z.next), Lt(t, d, O), Lt(t, z, D), h = D, d = z, v -= 1, g = [], k = [];
        } else
          p.delete(_), Ii(_, h, n), Lt(t, _.prev, _.next), Lt(t, _, d === null ? t.first : d.next), Lt(t, d, _), d = _;
        continue;
      }
      for (g = [], k = []; h !== null && h.k !== x; )
        (h.e.f & Tt) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      _ = h;
    }
    g.push(_), d = _, h = _.next;
  }
  if (h !== null || p !== void 0) {
    for (var Z = p === void 0 ? [] : Lr(p); h !== null; )
      (h.e.f & Tt) === 0 && Z.push(h), h = h.next;
    var oe = Z.length;
    if (oe > 0) {
      var G = (r & Lo) !== 0 && c === 0 ? n : null;
      if (s) {
        for (v = 0; v < oe; v += 1)
          (se = Z[v].a) == null || se.measure();
        for (v = 0; v < oe; v += 1)
          (we = Z[v].a) == null || we.fix();
      }
      _l(t, Z, G, l);
    }
  }
  s && Wn(() => {
    var Y;
    if (m !== void 0)
      for (_ of m)
        (Y = _.a) == null || Y.apply();
  }), ee.first = t.first && t.first.e, ee.last = d && d.e;
}
function vl(e, t, n, u) {
  (u & qr) !== 0 && vr(e.v, t), (u & jr) !== 0 ? vr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function yl(e, t, n, u, r, i, o, s, a, c) {
  var l = (a & qr) !== 0, f = (a & Fc) === 0, h = l ? f ? /* @__PURE__ */ $r(r) : pn(r) : r, p = (a & jr) === 0 ? o : pn(o), d = {
    i: p,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: u
  };
  try {
    return d.e = en(() => s(e, h, p, c), jc), d.e.prev = n && n.e, d.e.next = u && u.e, n === null ? t.first = d : (n.next = d, n.e.next = d.e), u !== null && (u.prev = d, u.e.prev = d.e), d;
  } finally {
  }
}
function Ii(e, t, n) {
  for (var u = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : n, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== u; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Tu(i)
    );
    r.before(i), i = o;
  }
}
function Lt(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function El(e, t, n = !1, u = !1, r = !1) {
  var i = e, o = "";
  pe(() => {
    var l;
    var s = (
      /** @type {Effect} */
      ee
    );
    if (o !== (o = (l = t()) != null ? l : "") && (s.nodes_start !== null && (Zo(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "")) {
      var a = o + "";
      n ? a = `<svg>${a}</svg>` : u && (a = `<math>${a}</math>`);
      var c = Kr(a);
      if ((n || u) && (c = /** @type {Element} */
      /* @__PURE__ */ xt(c)), gn(
        /** @type {TemplateNode} */
        /* @__PURE__ */ xt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), n || u)
        for (; /* @__PURE__ */ xt(c); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ xt(c)
          );
      else
        i.before(c);
    }
  });
}
function Pe(e, t, n, u, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[n], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => u : u);
}
function as(e, t, n) {
  var u = e, r, i;
  Hn(() => {
    r !== (r = t()) && (i && (bn(i), i = null), r && (i = en(() => n(u, r))));
  }, Un);
}
function kl(e, t, n, u, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  Hn(() => {
    const f = t() || null;
    var h = zc;
    f !== o && (l && (f === null ? bn(l, () => {
      l = null, s = null;
    }) : f === s ? In(l) : Rt(l)), f && f !== s && (l = en(() => {
      if (a = document.createElementNS(h, f), gn(a, a), u) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(Su())
        );
        u(a, p);
      }
      ee.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, Un);
}
function Nu(e, t) {
  Wn(() => {
    var r;
    var n = e.getRootNode(), u = (
      /** @type {ShadowRoot} */
      n.host ? (
        /** @type {ShadowRoot} */
        n
      ) : (
        /** @type {Document} */
        (r = n.head) != null ? r : (
          /** @type {Document} */
          n.ownerDocument.head
        )
      )
    );
    if (!u.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, u.appendChild(i);
    }
  });
}
function cs(e) {
  var t, n, u = "";
  if (typeof e == "string" || typeof e == "number") u += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (n = cs(e[t])) && (u && (u += " "), u += n);
  } else for (n in e) e[n] && (u && (u += " "), u += n);
  return u;
}
function wl() {
  for (var e, t, n = 0, u = "", r = arguments.length; n < r; n++) (e = arguments[n]) && (t = cs(e)) && (u && (u += " "), u += t);
  return u;
}
function Al(e) {
  return typeof e == "object" ? wl(e) : e != null ? e : "";
}
const Li = [...` 	
\r\f \v\uFEFF`];
function Cl(e, t, n) {
  var u = e == null ? "" : "" + e;
  if (t && (u = u ? u + " " + t : t), n) {
    for (var r in n)
      if (n[r])
        u = u ? u + " " + r : r;
      else if (u.length)
        for (var i = r.length, o = 0; (o = u.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || Li.includes(u[o - 1])) && (s === u.length || Li.includes(u[s])) ? u = (o === 0 ? "" : u.substring(0, o)) + u.substring(s + 1) : o = s;
        }
  }
  return u === "" ? null : u;
}
function Bi(e, t = !1) {
  var n = t ? " !important;" : ";", u = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (u += " " + r + ": " + i + n);
  }
  return u;
}
function ur(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function Dl(e, t) {
  if (t) {
    var n = "", u, r;
    if (Array.isArray(t) ? (u = t[0], r = t[1]) : u = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      u && a.push(...Object.keys(u).map(ur)), r && a.push(...Object.keys(r).map(ur));
      var c = 0, l = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === m - 1) {
            if (l !== -1) {
              var p = ur(e.substring(c, l).trim());
              if (!a.includes(p)) {
                h !== ";" && f++;
                var d = e.substring(c, f).trim();
                n += " " + d + ";";
              }
            }
            c = f + 1, l = -1;
          }
        }
      }
    }
    return u && (n += Bi(u)), r && (n += Bi(r, !0)), n = n.trim(), n === "" ? null : n;
  }
  return e == null ? null : String(e);
}
function St(e, t, n, u, r, i) {
  var o = e.__className;
  if (o !== n || o === void 0) {
    var s = Cl(n, u, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = n;
  } else if (i && r !== i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
function rr(e, t = {}, n, u) {
  for (var r in n) {
    var i = n[r];
    t[r] !== i && (n[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, u));
  }
}
function ct(e, t, n, u) {
  var r = e.__style;
  if (r !== t) {
    var i = Dl(t, u);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else u && (Array.isArray(u) ? (rr(e, n == null ? void 0 : n[0], u[0]), rr(e, n == null ? void 0 : n[1], u[1], "important")) : rr(e, n, u));
  return u;
}
const Tn = Symbol("class"), Fn = Symbol("style"), ls = Symbol("is custom element"), fs = Symbol("is html");
function Sl(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function rt(e, t, n, u) {
  var r = ds(e);
  r[t] !== (r[t] = n) && (t === "loading" && (e[xc] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && hs(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function zi(e, t, n, u, r = !1) {
  var y;
  var i = ds(e), o = i[ls], s = !i[fs], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in n || (n[l] = null);
  n.class ? n.class = Al(n.class) : n[Tn] && (n.class = null), n[Fn] && ((y = n.style) != null || (n.style = null));
  var f = hs(e);
  for (const x in n) {
    let _ = n[x];
    if (c && x === "value" && _ == null) {
      e.value = e.__value = "", a[x] = _;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      St(e, h, _, u, t == null ? void 0 : t[Tn], n[Tn]), a[x] = _, a[Tn] = n[Tn];
      continue;
    }
    if (x === "style") {
      ct(e, _, t == null ? void 0 : t[Fn], n[Fn]), a[x] = _, a[Fn] = n[Fn];
      continue;
    }
    var p = a[x];
    if (_ !== p) {
      a[x] = _;
      var d = x[0] + x[1];
      if (d !== "$$")
        if (d === "on") {
          const v = {}, A = "$$" + x;
          let D = x.slice(2);
          var m = sl(D);
          if (il(D) && (D = D.slice(0, -7), v.capture = !0), !m && p) {
            if (_ != null) continue;
            e.removeEventListener(D, a[A], v), a[A] = null;
          }
          if (_ != null)
            if (m)
              e[`__${D}`] = _, Ou([D]);
            else {
              let R = function(O) {
                a[x].call(this, O);
              };
              a[A] = ss(D, e, R, v);
            }
          else m && (e[`__${D}`] = void 0);
        } else if (x === "style")
          rt(e, x, _);
        else if (x === "autofocus")
          dl(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!o && (x === "__value" || x === "value" && _ != null))
          e.value = e.__value = _;
        else if (x === "selected" && c)
          Sl(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var g = x;
          s || (g = cl(g));
          var k = g === "defaultValue" || g === "defaultChecked";
          if (_ == null && !o && !k)
            if (i[x] = null, g === "value" || g === "checked") {
              let v = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (g === "value") {
                let D = v.defaultValue;
                v.removeAttribute(g), v.defaultValue = D, v.value = v.__value = A ? D : null;
              } else {
                let D = v.defaultChecked;
                v.removeAttribute(g), v.defaultChecked = D, v.checked = A ? D : !1;
              }
            } else
              e.removeAttribute(x);
          else k || f.includes(g) && (o || typeof _ != "string") ? e[g] = _ : typeof _ != "function" && rt(e, g, _);
        }
    }
  }
  return a;
}
function ds(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [ls]: e.nodeName.includes("-"),
      [fs]: e.namespaceURI === Bc
    }
  );
}
var Pi = /* @__PURE__ */ new Map();
function hs(e) {
  var t = Pi.get(e.nodeName);
  if (t) return t;
  Pi.set(e.nodeName, t = []);
  for (var n, u = e, r = Element.prototype; r !== u; ) {
    n = Fo(u);
    for (var i in n)
      n[i].set && t.push(i);
    u = Br(u);
  }
  return t;
}
function Tl(e, t, n = t) {
  var u = $n();
  pl(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = ir(e) ? or(i) : i, n(i), u && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  tn(t) == null && e.value && n(ir(e) ? or(e.value) : e.value), Vr(() => {
    var r = t();
    ir(e) && r === or(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function ir(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function or(e) {
  return e === "" ? null : +e;
}
function qi(e, t) {
  return e === t || (e == null ? void 0 : e[Ut]) === t;
}
function cu(e = {}, t, n, u) {
  return Wr(() => {
    var r, i;
    return Vr(() => {
      r = i, i = [], tn(() => {
        e !== n(...i) && (t(e, ...i), r && qi(n(...r), e) && t(null, ...r));
      });
    }), () => {
      Wn(() => {
        i && qi(n(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Fl(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ae
  ), n = t.l.u;
  if (!n) return;
  let u = () => rl(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ hn(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== i[c] && (i[c] = a[c], s = !0);
      return s && r++, r;
    });
    u = () => S(o);
  }
  n.b.length && Wc(() => {
    ji(t, u), hu(n.b);
  }), Qt(() => {
    const r = tn(() => n.m.map(bc));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), n.a.length && Qt(() => {
    ji(t, u), hu(n.a);
  });
}
function ji(e, t) {
  if (e.l.s)
    for (const n of e.l.s) S(n);
  t();
}
function ps(e, t, n) {
  if (e == null)
    return t(void 0), fn;
  const u = tn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return u.unsubscribe ? () => u.unsubscribe() : u;
}
const cn = [];
function Rl(e, t = fn) {
  let n = null;
  const u = /* @__PURE__ */ new Set();
  function r(s) {
    if (Io(e, s) && (e = s, n)) {
      const a = !cn.length;
      for (const c of u)
        c[1](), cn.push(c, e);
      if (a) {
        for (let c = 0; c < cn.length; c += 2)
          cn[c][0](cn[c + 1]);
        cn.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = fn) {
    const c = [s, a];
    return u.add(c), u.size === 1 && (n = t(r, i) || fn), s(
      /** @type {T} */
      e
    ), () => {
      u.delete(c), u.size === 0 && n && (n(), n = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function bs(e) {
  let t;
  return ps(e, (n) => t = n)(), t;
}
let iu = !1, wr = Symbol();
function Ol(e, t, n) {
  var i;
  const u = (i = n[t]) != null ? i : n[t] = {
    store: null,
    source: /* @__PURE__ */ $r(void 0),
    unsubscribe: fn
  };
  if (u.store !== e && !(wr in n))
    if (u.unsubscribe(), u.store = e != null ? e : null, e == null)
      u.source.v = void 0, u.unsubscribe = fn;
    else {
      var r = !0;
      u.unsubscribe = ps(e, (o) => {
        r ? u.source.v = o : te(u.source, o);
      }), r = !1;
    }
  return e && wr in n ? bs(e) : S(u.source);
}
function Nl() {
  const e = {};
  function t() {
    Hr(() => {
      for (var n in e)
        e[n].unsubscribe();
      To(e, wr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Ml(e) {
  var t = iu;
  try {
    return iu = !1, [e(), iu];
  } finally {
    iu = t;
  }
}
const Il = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return e.props[t];
  },
  set(e, t) {
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
// @__NO_SIDE_EFFECTS__
function Ll(e, t, n) {
  return new Proxy(
    { props: e, exclude: t },
    Il
  );
}
const Bl = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return S(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, n) {
    return t in e.special || (e.special[t] = at(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Bo
    )), e.special[t](n), Si(e.version), !0;
  },
  getOwnPropertyDescriptor(e, t) {
    if (!e.exclude.includes(t) && t in e.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: e.props[t]
      };
  },
  deleteProperty(e, t) {
    return e.exclude.includes(t) || (e.exclude.push(t), Si(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Ie(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: pn(0) }, Bl);
}
const zl = {
  get(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let u = e.props[n];
      if (Sn(u) && (u = u()), typeof u == "object" && u !== null && t in u) return u[t];
    }
  },
  set(e, t, n) {
    let u = e.props.length;
    for (; u--; ) {
      let r = e.props[u];
      Sn(r) && (r = r());
      const i = jt(r, t);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let u = e.props[n];
      if (Sn(u) && (u = u()), typeof u == "object" && u !== null && t in u) {
        const r = jt(u, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Ut || t === No) return !1;
    for (let n of e.props)
      if (Sn(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props) {
      Sn(n) && (n = n());
      for (const u in n)
        t.includes(u) || t.push(u);
    }
    return t;
  }
};
function Ge(...e) {
  return new Proxy({ props: e }, zl);
}
function Ui(e) {
  var t, n;
  return (n = (t = e.ctx) == null ? void 0 : t.d) != null ? n : !1;
}
function at(e, t, n, u) {
  var A, D;
  var r = (n & Rc) !== 0, i = !vn || (n & Oc) !== 0, o = (n & Nc) !== 0, s = (n & Mc) !== 0, a = !1, c;
  o ? [c, a] = Ml(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Ut in e || No in e, f = o && ((D = (A = jt(e, t)) == null ? void 0 : A.set) != null ? D : l && t in e && ((R) => e[t] = R)) || void 0, h = (
    /** @type {V} */
    u
  ), p = !0, d = !1, m = () => (d = !0, p && (p = !1, s ? h = tn(
    /** @type {() => V} */
    u
  ) : h = /** @type {V} */
  u), h);
  c === void 0 && u !== void 0 && (f && i && wc(), c = m(), f && f(c));
  var g;
  if (i)
    g = () => {
      var R = (
        /** @type {V} */
        e[t]
      );
      return R === void 0 ? m() : (p = !0, d = !1, R);
    };
  else {
    var k = (r ? hn : Ur)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= mc, g = () => {
      var R = S(k);
      return R !== void 0 && (h = /** @type {V} */
      void 0), R === void 0 ? h : R;
    };
  }
  if ((n & Bo) === 0)
    return g;
  if (f) {
    var y = e.$$legacy;
    return function(R, O) {
      return arguments.length > 0 ? ((!i || !O || y || a) && f(O ? g() : R), R) : g();
    };
  }
  var x = !1, _ = /* @__PURE__ */ $r(c), v = /* @__PURE__ */ hn(() => {
    var R = g(), O = S(_);
    return x ? (x = !1, O) : _.v = R;
  });
  return o && S(v), r || (v.equals = Pr), function(R, O) {
    if (arguments.length > 0) {
      const z = O ? S(v) : i && o ? Zt(R) : R;
      if (!v.equals(z)) {
        if (x = !0, te(_, z), d && h !== void 0 && (h = z), Ui(v))
          return R;
        tn(() => S(v));
      }
      return R;
    }
    return Ui(v) ? v.v : S(v);
  };
}
function gs(e) {
  ae === null && Pc(), vn && ae.l !== null ? Pl(ae).m.push(e) : Qt(() => {
    const t = tn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Pl(e) {
  var n;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (n = t.u) != null ? n : t.u = { a: [], b: [], m: [] };
}
const ql = "5";
var Co, Do, So;
typeof window != "undefined" && ((So = (Do = (Co = window.__svelte) != null ? Co : window.__svelte = {}).v) != null ? So : Do.v = /* @__PURE__ */ new Set()).add(ql);
function ms(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: jl } = Object.prototype, { getPrototypeOf: Yr } = Object, { iterator: Mu, toStringTag: _s } = Symbol, Iu = /* @__PURE__ */ ((e) => (t) => {
  const n = jl.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ht = (e) => (e = e.toLowerCase(), (t) => Iu(t) === e), Lu = (e) => (t) => typeof t === e, { isArray: wn } = Array, Bn = Lu("undefined");
function Ul(e) {
  return e !== null && !Bn(e) && e.constructor !== null && !Bn(e.constructor) && $e(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xs = ht("ArrayBuffer");
function $l(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xs(e.buffer), t;
}
const Hl = Lu("string"), $e = Lu("function"), vs = Lu("number"), Bu = (e) => e !== null && typeof e == "object", Wl = (e) => e === !0 || e === !1, lu = (e) => {
  if (Iu(e) !== "object")
    return !1;
  const t = Yr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(_s in e) && !(Mu in e);
}, Vl = ht("Date"), Gl = ht("File"), Zl = ht("Blob"), Kl = ht("FileList"), Jl = (e) => Bu(e) && $e(e.pipe), Yl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || $e(e.append) && ((t = Iu(e)) === "formdata" || // detect form-data instance
  t === "object" && $e(e.toString) && e.toString() === "[object FormData]"));
}, Xl = ht("URLSearchParams"), [Ql, e0, t0, n0] = ["ReadableStream", "Request", "Response", "Headers"].map(ht), u0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Zn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let u, r;
  if (typeof e != "object" && (e = [e]), wn(e))
    for (u = 0, r = e.length; u < r; u++)
      t.call(null, e[u], u, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (u = 0; u < o; u++)
      s = i[u], t.call(null, e[s], s, e);
  }
}
function ys(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let u = n.length, r;
  for (; u-- > 0; )
    if (r = n[u], t === r.toLowerCase())
      return r;
  return null;
}
const Jt = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, Es = (e) => !Bn(e) && e !== Jt;
function Ar() {
  const { caseless: e } = Es(this) && this || {}, t = {}, n = (u, r) => {
    const i = e && ys(t, r) || r;
    lu(t[i]) && lu(u) ? t[i] = Ar(t[i], u) : lu(u) ? t[i] = Ar({}, u) : wn(u) ? t[i] = u.slice() : t[i] = u;
  };
  for (let u = 0, r = arguments.length; u < r; u++)
    arguments[u] && Zn(arguments[u], n);
  return t;
}
const r0 = (e, t, n, { allOwnKeys: u } = {}) => (Zn(t, (r, i) => {
  n && $e(r) ? e[i] = ms(r, n) : e[i] = r;
}, { allOwnKeys: u }), e), i0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), o0 = (e, t, n, u) => {
  e.prototype = Object.create(t.prototype, u), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, s0 = (e, t, n, u) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!u || u(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = n !== !1 && Yr(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, a0 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const u = e.indexOf(t, n);
  return u !== -1 && u === n;
}, c0 = (e) => {
  if (!e) return null;
  if (wn(e)) return e;
  let t = e.length;
  if (!vs(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, l0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Yr(Uint8Array)), f0 = (e, t) => {
  const u = (e && e[Mu]).call(e);
  let r;
  for (; (r = u.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, d0 = (e, t) => {
  let n;
  const u = [];
  for (; (n = e.exec(t)) !== null; )
    u.push(n);
  return u;
}, h0 = ht("HTMLFormElement"), p0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, u, r) {
    return u.toUpperCase() + r;
  }
), $i = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), b0 = ht("RegExp"), ks = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), u = {};
  Zn(n, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (u[i] = o || r);
  }), Object.defineProperties(e, u);
}, g0 = (e) => {
  ks(e, (t, n) => {
    if ($e(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const u = e[n];
    if ($e(u)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, m0 = (e, t) => {
  const n = {}, u = (r) => {
    r.forEach((i) => {
      n[i] = !0;
    });
  };
  return wn(e) ? u(e) : u(String(e).split(t)), n;
}, _0 = () => {
}, x0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function v0(e) {
  return !!(e && $e(e.append) && e[_s] === "FormData" && e[Mu]);
}
const y0 = (e) => {
  const t = new Array(10), n = (u, r) => {
    if (Bu(u)) {
      if (t.indexOf(u) >= 0)
        return;
      if (!("toJSON" in u)) {
        t[r] = u;
        const i = wn(u) ? [] : {};
        return Zn(u, (o, s) => {
          const a = n(o, r + 1);
          !Bn(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return u;
  };
  return n(e, 0);
}, E0 = ht("AsyncFunction"), k0 = (e) => e && (Bu(e) || $e(e)) && $e(e.then) && $e(e.catch), ws = ((e, t) => e ? setImmediate : t ? ((n, u) => (Jt.addEventListener("message", ({ source: r, data: i }) => {
  r === Jt && i === n && u.length && u.shift()();
}, !1), (r) => {
  u.push(r), Jt.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  $e(Jt.postMessage)
), w0 = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Jt) : typeof process != "undefined" && process.nextTick || ws, A0 = (e) => e != null && $e(e[Mu]), E = {
  isArray: wn,
  isArrayBuffer: xs,
  isBuffer: Ul,
  isFormData: Yl,
  isArrayBufferView: $l,
  isString: Hl,
  isNumber: vs,
  isBoolean: Wl,
  isObject: Bu,
  isPlainObject: lu,
  isReadableStream: Ql,
  isRequest: e0,
  isResponse: t0,
  isHeaders: n0,
  isUndefined: Bn,
  isDate: Vl,
  isFile: Gl,
  isBlob: Zl,
  isRegExp: b0,
  isFunction: $e,
  isStream: Jl,
  isURLSearchParams: Xl,
  isTypedArray: l0,
  isFileList: Kl,
  forEach: Zn,
  merge: Ar,
  extend: r0,
  trim: u0,
  stripBOM: i0,
  inherits: o0,
  toFlatObject: s0,
  kindOf: Iu,
  kindOfTest: ht,
  endsWith: a0,
  toArray: c0,
  forEachEntry: f0,
  matchAll: d0,
  isHTMLForm: h0,
  hasOwnProperty: $i,
  hasOwnProp: $i,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ks,
  freezeMethods: g0,
  toObjectSet: m0,
  toCamelCase: p0,
  noop: _0,
  toFiniteNumber: x0,
  findKey: ys,
  global: Jt,
  isContextDefined: Es,
  isSpecCompliantForm: v0,
  toJSONObject: y0,
  isAsyncFn: E0,
  isThenable: k0,
  setImmediate: ws,
  asap: w0,
  isIterable: A0
};
function $(e, t, n, u, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), u && (this.request = u), r && (this.response = r, this.status = r.status ? r.status : null);
}
E.inherits($, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: E.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const As = $.prototype, Cs = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  Cs[e] = { value: e };
});
Object.defineProperties($, Cs);
Object.defineProperty(As, "isAxiosError", { value: !0 });
$.from = (e, t, n, u, r, i) => {
  const o = Object.create(As);
  return E.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), $.call(o, e.message, t, n, u, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const C0 = null;
function Cr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Ds(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hi(e, t, n) {
  return e ? e.concat(t).map(function(r, i) {
    return r = Ds(r), !n && i ? "[" + r + "]" : r;
  }).join(n ? "." : "") : t;
}
function D0(e) {
  return E.isArray(e) && !e.some(Cr);
}
const S0 = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function zu(e, t, n) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = E.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !E.isUndefined(g[m]);
  });
  const u = n.metaTokens, r = n.visitor || l, i = n.dots, o = n.indexes, a = (n.Blob || typeof Blob != "undefined" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (E.isDate(d))
      return d.toISOString();
    if (!a && E.isBlob(d))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(d) || E.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, g) {
    let k = d;
    if (d && !g && typeof d == "object") {
      if (E.endsWith(m, "{}"))
        m = u ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (E.isArray(d) && D0(d) || (E.isFileList(d) || E.endsWith(m, "[]")) && (k = E.toArray(d)))
        return m = Ds(m), k.forEach(function(x, _) {
          !(E.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Hi([m], _, i) : o === null ? m : m + "[]",
            c(x)
          );
        }), !1;
    }
    return Cr(d) ? !0 : (t.append(Hi(g, m, i), c(d)), !1);
  }
  const f = [], h = Object.assign(S0, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Cr
  });
  function p(d, m) {
    if (!E.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), E.forEach(d, function(k, y) {
        (!(E.isUndefined(k) || k === null) && r.call(
          t,
          k,
          E.isString(y) ? y.trim() : y,
          m,
          h
        )) === !0 && p(k, m ? m.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Wi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(u) {
    return t[u];
  });
}
function Xr(e, t) {
  this._pairs = [], e && zu(e, this, t);
}
const Ss = Xr.prototype;
Ss.append = function(t, n) {
  this._pairs.push([t, n]);
};
Ss.toString = function(t) {
  const n = t ? function(u) {
    return t.call(this, u, Wi);
  } : Wi;
  return this._pairs.map(function(r) {
    return n(r[0]) + "=" + n(r[1]);
  }, "").join("&");
};
function T0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ts(e, t, n) {
  if (!t)
    return e;
  const u = n && n.encode || T0;
  E.isFunction(n) && (n = {
    serialize: n
  });
  const r = n && n.serialize;
  let i;
  if (r ? i = r(t, n) : i = E.isURLSearchParams(t) ? t.toString() : new Xr(t, n).toString(u), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vi {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, u) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: u ? u.synchronous : !1,
      runWhen: u ? u.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    E.forEach(this.handlers, function(u) {
      u !== null && t(u);
    });
  }
}
const Fs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, F0 = typeof URLSearchParams != "undefined" ? URLSearchParams : Xr, R0 = typeof FormData != "undefined" ? FormData : null, O0 = typeof Blob != "undefined" ? Blob : null, N0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: F0,
    FormData: R0,
    Blob: O0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qr = typeof window != "undefined" && typeof document != "undefined", Dr = typeof navigator == "object" && navigator || void 0, M0 = Qr && (!Dr || ["ReactNative", "NativeScript", "NS"].indexOf(Dr.product) < 0), I0 = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", L0 = Qr && window.location.href || "http://localhost", B0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qr,
  hasStandardBrowserEnv: M0,
  hasStandardBrowserWebWorkerEnv: I0,
  navigator: Dr,
  origin: L0
}, Symbol.toStringTag, { value: "Module" })), Ne = ce(ce({}, B0), N0);
function z0(e, t) {
  return zu(e, new Ne.classes.URLSearchParams(), Object.assign({
    visitor: function(n, u, r, i) {
      return Ne.isNode && E.isBuffer(n) ? (this.append(u, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function P0(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function q0(e) {
  const t = {}, n = Object.keys(e);
  let u;
  const r = n.length;
  let i;
  for (u = 0; u < r; u++)
    i = n[u], t[i] = e[i];
  return t;
}
function Rs(e) {
  function t(n, u, r, i) {
    let o = n[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= n.length;
    return o = !o && E.isArray(r) ? r.length : o, a ? (E.hasOwnProp(r, o) ? r[o] = [r[o], u] : r[o] = u, !s) : ((!r[o] || !E.isObject(r[o])) && (r[o] = []), t(n, u, r[o], i) && E.isArray(r[o]) && (r[o] = q0(r[o])), !s);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const n = {};
    return E.forEachEntry(e, (u, r) => {
      t(P0(u), r, n, 0);
    }), n;
  }
  return null;
}
function j0(e, t, n) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (u) {
      if (u.name !== "SyntaxError")
        throw u;
    }
  return (n || JSON.stringify)(e);
}
const Kn = {
  transitional: Fs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const u = n.getContentType() || "", r = u.indexOf("application/json") > -1, i = E.isObject(t);
    if (i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return r ? JSON.stringify(Rs(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (u.indexOf("application/x-www-form-urlencoded") > -1)
        return z0(t, this.formSerializer).toString();
      if ((s = E.isFileList(t)) || u.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return zu(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (n.setContentType("application/json", !1), j0(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Kn.transitional, u = n && n.forcedJSONParsing, r = this.responseType === "json";
    if (E.isResponse(t) || E.isReadableStream(t))
      return t;
    if (t && E.isString(t) && (u && !this.responseType || r)) {
      const o = !(n && n.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? $.from(s, $.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Ne.classes.FormData,
    Blob: Ne.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
E.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Kn.headers[e] = {};
});
const U0 = E.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), $0 = (e) => {
  const t = {};
  let n, u, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), n = o.substring(0, r).trim().toLowerCase(), u = o.substring(r + 1).trim(), !(!n || t[n] && U0[n]) && (n === "set-cookie" ? t[n] ? t[n].push(u) : t[n] = [u] : t[n] = t[n] ? t[n] + ", " + u : u);
  }), t;
}, Gi = Symbol("internals");
function Rn(e) {
  return e && String(e).trim().toLowerCase();
}
function fu(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(fu) : String(e);
}
function H0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let u;
  for (; u = n.exec(e); )
    t[u[1]] = u[2];
  return t;
}
const W0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function sr(e, t, n, u, r) {
  if (E.isFunction(u))
    return u.call(this, t, n);
  if (r && (t = n), !!E.isString(t)) {
    if (E.isString(u))
      return t.indexOf(u) !== -1;
    if (E.isRegExp(u))
      return u.test(t);
  }
}
function V0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, u) => n.toUpperCase() + u);
}
function G0(e, t) {
  const n = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((u) => {
    Object.defineProperty(e, u + n, {
      value: function(r, i, o) {
        return this[u].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let He = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, u) {
    const r = this;
    function i(s, a, c) {
      const l = Rn(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = E.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = fu(s));
    }
    const o = (s, a) => E.forEach(s, (c, l) => i(c, l, a));
    if (E.isPlainObject(t) || t instanceof this.constructor)
      o(t, n);
    else if (E.isString(t) && (t = t.trim()) && !W0(t))
      o($0(t), n);
    else if (E.isObject(t) && E.isIterable(t)) {
      let s = {}, a, c;
      for (const l of t) {
        if (!E.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = l[0]] = (a = s[c]) ? E.isArray(a) ? [...a, l[1]] : [a, l[1]] : l[1];
      }
      o(s, n);
    } else
      t != null && i(n, t, u);
    return this;
  }
  get(t, n) {
    if (t = Rn(t), t) {
      const u = E.findKey(this, t);
      if (u) {
        const r = this[u];
        if (!n)
          return r;
        if (n === !0)
          return H0(r);
        if (E.isFunction(n))
          return n.call(this, r, u);
        if (E.isRegExp(n))
          return n.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Rn(t), t) {
      const u = E.findKey(this, t);
      return !!(u && this[u] !== void 0 && (!n || sr(this, this[u], u, n)));
    }
    return !1;
  }
  delete(t, n) {
    const u = this;
    let r = !1;
    function i(o) {
      if (o = Rn(o), o) {
        const s = E.findKey(u, o);
        s && (!n || sr(u, u[s], s, n)) && (delete u[s], r = !0);
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const n = Object.keys(this);
    let u = n.length, r = !1;
    for (; u--; ) {
      const i = n[u];
      (!t || sr(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const n = this, u = {};
    return E.forEach(this, (r, i) => {
      const o = E.findKey(u, i);
      if (o) {
        n[o] = fu(r), delete n[i];
        return;
      }
      const s = t ? V0(i) : String(i).trim();
      s !== i && delete n[i], n[s] = fu(r), u[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (u, r) => {
      u != null && u !== !1 && (n[r] = t && E.isArray(u) ? u.join(", ") : u);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const u = new this(t);
    return n.forEach((r) => u.set(r)), u;
  }
  static accessor(t) {
    const u = (this[Gi] = this[Gi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = Rn(o);
      u[s] || (G0(r, o), u[s] = !0);
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
He.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(He.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(u) {
      this[n] = u;
    }
  };
});
E.freezeMethods(He);
function ar(e, t) {
  const n = this || Kn, u = t || n, r = He.from(u.headers);
  let i = u.data;
  return E.forEach(e, function(s) {
    i = s.call(n, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Os(e) {
  return !!(e && e.__CANCEL__);
}
function An(e, t, n) {
  $.call(this, e == null ? "canceled" : e, $.ERR_CANCELED, t, n), this.name = "CanceledError";
}
E.inherits(An, $, {
  __CANCEL__: !0
});
function Ns(e, t, n) {
  const u = n.config.validateStatus;
  !n.status || !u || u(n.status) ? e(n) : t(new $(
    "Request failed with status code " + n.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Z0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function K0(e, t) {
  e = e || 10;
  const n = new Array(e), u = new Array(e);
  let r = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), l = u[i];
    o || (o = c), n[r] = a, u[r] = c;
    let f = i, h = 0;
    for (; f !== r; )
      h += n[f++], f = f % e;
    if (r = (r + 1) % e, r === i && (i = (i + 1) % e), c - o < t)
      return;
    const p = l && c - l;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function J0(e, t) {
  let n = 0, u = 1e3 / t, r, i;
  const o = (c, l = Date.now()) => {
    n = l, r = null, i && (clearTimeout(i), i = null), e.apply(null, c);
  };
  return [(...c) => {
    const l = Date.now(), f = l - n;
    f >= u ? o(c, l) : (r = c, i || (i = setTimeout(() => {
      i = null, o(r);
    }, u - f)));
  }, () => r && o(r)];
}
const yu = (e, t, n = 3) => {
  let u = 0;
  const r = K0(50, 250);
  return J0((i) => {
    const o = i.loaded, s = i.lengthComputable ? i.total : void 0, a = o - u, c = r(a), l = o <= s;
    u = o;
    const f = {
      loaded: o,
      total: s,
      progress: s ? o / s : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && s && l ? (s - o) / c : void 0,
      event: i,
      lengthComputable: s != null,
      [t ? "download" : "upload"]: !0
    };
    e(f);
  }, n);
}, Zi = (e, t) => {
  const n = e != null;
  return [(u) => t[0]({
    lengthComputable: n,
    total: e,
    loaded: u
  }), t[1]];
}, Ki = (e) => (...t) => E.asap(() => e(...t)), Y0 = Ne.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (n) => (n = new URL(n, Ne.origin), e.protocol === n.protocol && e.host === n.host && (t || e.port === n.port)))(
  new URL(Ne.origin),
  Ne.navigator && /(msie|trident)/i.test(Ne.navigator.userAgent)
) : () => !0, X0 = Ne.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, u, r, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      E.isNumber(n) && o.push("expires=" + new Date(n).toGMTString()), E.isString(u) && o.push("path=" + u), E.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Q0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ef(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ms(e, t, n) {
  let u = !Q0(t);
  return e && (u || n == !1) ? ef(e, t) : t;
}
const Ji = (e) => e instanceof He ? ce({}, e) : e;
function nn(e, t) {
  t = t || {};
  const n = {};
  function u(c, l, f, h) {
    return E.isPlainObject(c) && E.isPlainObject(l) ? E.merge.call({ caseless: h }, c, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function r(c, l, f, h) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(c))
        return u(void 0, c, f, h);
    } else return u(c, l, f, h);
  }
  function i(c, l) {
    if (!E.isUndefined(l))
      return u(void 0, l);
  }
  function o(c, l) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(c))
        return u(void 0, c);
    } else return u(void 0, l);
  }
  function s(c, l, f) {
    if (f in t)
      return u(c, l);
    if (f in e)
      return u(void 0, c);
  }
  const a = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: s,
    headers: (c, l, f) => r(Ji(c), Ji(l), f, !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    E.isUndefined(h) && f !== s || (n[l] = h);
  }), n;
}
const Is = (e) => {
  const t = nn({}, e);
  let { data: n, withXSRFToken: u, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = He.from(o), t.url = Ts(Ms(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (E.isFormData(n)) {
    if (Ne.hasStandardBrowserEnv || Ne.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Ne.hasStandardBrowserEnv && (u && E.isFunction(u) && (u = u(t)), u || u !== !1 && Y0(t.url))) {
    const c = r && i && X0.read(i);
    c && o.set(r, c);
  }
  return t;
}, tf = typeof XMLHttpRequest != "undefined", nf = tf && function(e) {
  return new Promise(function(n, u) {
    const r = Is(e);
    let i = r.data;
    const o = He.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function m() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function k() {
      if (!g)
        return;
      const x = He.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), v = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      Ns(function(D) {
        n(D), m();
      }, function(D) {
        u(D), m();
      }, v), g = null;
    }
    "onloadend" in g ? g.onloadend = k : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, g.onabort = function() {
      g && (u(new $("Request aborted", $.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      u(new $("Network Error", $.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let _ = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const v = r.transitional || Fs;
      r.timeoutErrorMessage && (_ = r.timeoutErrorMessage), u(new $(
        _,
        v.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && E.forEach(o.toJSON(), function(_, v) {
      g.setRequestHeader(v, _);
    }), E.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), s && s !== "json" && (g.responseType = r.responseType), c && ([h, d] = yu(c, !0), g.addEventListener("progress", h)), a && g.upload && ([f, p] = yu(a), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (x) => {
      g && (u(!x || x.type ? new An(null, e, g) : x), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const y = Z0(r.url);
    if (y && Ne.protocols.indexOf(y) === -1) {
      u(new $("Unsupported protocol " + y + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, uf = (e, t) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (t || n) {
    let u = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        u.abort(l instanceof $ ? l : new An(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new $(`timeout ${t} of ms exceeded`, $.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: a } = u;
    return a.unsubscribe = () => E.asap(s), a;
  }
}, rf = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let u = 0, r;
  for (; u < n; )
    r = u + t, yield e.slice(u, r), u = r;
}, of = function(e, t) {
  return Qu(this, null, function* () {
    try {
      for (var n = Ai(sf(e)), u, r, i; u = !(r = yield new Gt(n.next())).done; u = !1) {
        const o = r.value;
        yield* er(rf(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        u && (r = n.return) && (yield new Gt(r.call(n)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, sf = function(e) {
  return Qu(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* er(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: n, value: u } = yield new Gt(t.read());
        if (n)
          break;
        yield u;
      }
    } finally {
      yield new Gt(t.cancel());
    }
  });
}, Yi = (e, t, n, u) => {
  const r = of(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, u && u(c));
  };
  return new ReadableStream({
    pull(c) {
      return ve(this, null, function* () {
        try {
          const { done: l, value: f } = yield r.next();
          if (l) {
            s(), c.close();
            return;
          }
          let h = f.byteLength;
          if (n) {
            let p = i += h;
            n(p);
          }
          c.enqueue(new Uint8Array(f));
        } catch (l) {
          throw s(l), l;
        }
      });
    },
    cancel(c) {
      return s(c), r.return();
    }
  }, {
    highWaterMark: 2
  });
}, Pu = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ls = Pu && typeof ReadableStream == "function", af = Pu && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => ve(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), Bs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (n) {
    return !1;
  }
}, cf = Ls && Bs(() => {
  let e = !1;
  const t = new Request(Ne.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Xi = 64 * 1024, Sr = Ls && Bs(() => E.isReadableStream(new Response("").body)), Eu = {
  stream: Sr && ((e) => e.body)
};
Pu && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Eu[t] && (Eu[t] = E.isFunction(e[t]) ? (n) => n[t]() : (n, u) => {
      throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, u);
    });
  });
})(new Response());
const lf = (e) => ve(null, null, function* () {
  if (e == null)
    return 0;
  if (E.isBlob(e))
    return e.size;
  if (E.isSpecCompliantForm(e))
    return (yield new Request(Ne.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(e) || E.isArrayBuffer(e))
    return e.byteLength;
  if (E.isURLSearchParams(e) && (e = e + ""), E.isString(e))
    return (yield af(e)).byteLength;
}), ff = (e, t) => ve(null, null, function* () {
  const n = E.toFiniteNumber(e.getContentLength());
  return n == null ? lf(t) : n;
}), df = Pu && ((e) => ve(null, null, function* () {
  let {
    url: t,
    method: n,
    data: u,
    signal: r,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: a,
    responseType: c,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = Is(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = uf([r, i && i.toAbortSignal()], o), d;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (a && cf && n !== "get" && n !== "head" && (g = yield ff(l, u)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: u,
        duplex: "half"
      }), A;
      if (E.isFormData(u) && (A = v.headers.get("content-type")) && l.setContentType(A), v.body) {
        const [D, R] = Zi(
          g,
          yu(Ki(a))
        );
        u = Yi(v.body, Xi, D, R);
      }
    }
    E.isString(f) || (f = f ? "include" : "omit");
    const k = "credentials" in Request.prototype;
    d = new Request(t, Ce(ce({}, h), {
      signal: p,
      method: n.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: u,
      duplex: "half",
      credentials: k ? f : void 0
    }));
    let y = yield fetch(d);
    const x = Sr && (c === "stream" || c === "response");
    if (Sr && (s || x && m)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((O) => {
        v[O] = y[O];
      });
      const A = E.toFiniteNumber(y.headers.get("content-length")), [D, R] = s && Zi(
        A,
        yu(Ki(s), !0)
      ) || [];
      y = new Response(
        Yi(y.body, Xi, D, () => {
          R && R(), m && m();
        }),
        v
      );
    }
    c = c || "text";
    let _ = yield Eu[E.findKey(Eu, c) || "text"](y, e);
    return !x && m && m(), yield new Promise((v, A) => {
      Ns(v, A, {
        data: _,
        headers: He.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: d
      });
    });
  } catch (k) {
    throw m && m(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
      new $("Network Error", $.ERR_NETWORK, e, d),
      {
        cause: k.cause || k
      }
    ) : $.from(k, k && k.code, e, d);
  }
})), Tr = {
  http: C0,
  xhr: nf,
  fetch: df
};
E.forEach(Tr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (n) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qi = (e) => `- ${e}`, hf = (e) => E.isFunction(e) || e === null || e === !1, zs = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, u;
    const r = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let o;
      if (u = n, !hf(n) && (u = Tr[(o = String(n)).toLowerCase()], u === void 0))
        throw new $(`Unknown adapter '${o}'`);
      if (u)
        break;
      r[o || "#" + i] = u;
    }
    if (!u) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Qi).join(`
`) : " " + Qi(i[0]) : "as no adapter specified";
      throw new $(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return u;
  },
  adapters: Tr
};
function cr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new An(null, e);
}
function eo(e) {
  return cr(e), e.headers = He.from(e.headers), e.data = ar.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), zs.getAdapter(e.adapter || Kn.adapter)(e).then(function(u) {
    return cr(e), u.data = ar.call(
      e,
      e.transformResponse,
      u
    ), u.headers = He.from(u.headers), u;
  }, function(u) {
    return Os(u) || (cr(e), u && u.response && (u.response.data = ar.call(
      e,
      e.transformResponse,
      u.response
    ), u.response.headers = He.from(u.response.headers))), Promise.reject(u);
  });
}
const Ps = "1.9.0", qu = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  qu[e] = function(u) {
    return typeof u === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const to = {};
qu.transitional = function(t, n, u) {
  function r(i, o) {
    return "[Axios v" + Ps + "] Transitional option '" + i + "'" + o + (u ? ". " + u : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new $(
        r(o, " has been removed" + (n ? " in " + n : "")),
        $.ERR_DEPRECATED
      );
    return n && !to[o] && (to[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
qu.spelling = function(t) {
  return (n, u) => (console.warn(`${u} is likely a misspelling of ${t}`), !0);
};
function pf(e, t, n) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const u = Object.keys(e);
  let r = u.length;
  for (; r-- > 0; ) {
    const i = u[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new $("option " + i + " must be " + a, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const du = {
  assertOptions: pf,
  validators: qu
}, mt = du.validators;
let Xt = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Vi(),
      response: new Vi()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, n) {
    return ve(this, null, function* () {
      try {
        return yield this._request(t, n);
      } catch (u) {
        if (u instanceof Error) {
          let r = {};
          Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
          const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
          try {
            u.stack ? i && !String(u.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (u.stack += `
` + i) : u.stack = i;
          } catch (o) {
          }
        }
        throw u;
      }
    });
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = nn(this.defaults, n);
    const { transitional: u, paramsSerializer: r, headers: i } = n;
    u !== void 0 && du.assertOptions(u, {
      silentJSONParsing: mt.transitional(mt.boolean),
      forcedJSONParsing: mt.transitional(mt.boolean),
      clarifyTimeoutError: mt.transitional(mt.boolean)
    }, !1), r != null && (E.isFunction(r) ? n.paramsSerializer = {
      serialize: r
    } : du.assertOptions(r, {
      encode: mt.function,
      serialize: mt.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), du.assertOptions(n, {
      baseUrl: mt.spelling("baseURL"),
      withXsrfToken: mt.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let o = i && E.merge(
      i.common,
      i[n.method]
    );
    i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), n.headers = He.concat(o, i);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(n) === !1 || (a = a && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, h;
    if (!a) {
      const d = [eo.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, c), h = d.length, l = Promise.resolve(n); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = s.length;
    let p = n;
    for (f = 0; f < h; ) {
      const d = s[f++], m = s[f++];
      try {
        p = d(p);
      } catch (g) {
        m.call(this, g);
        break;
      }
    }
    try {
      l = eo.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = nn(this.defaults, t);
    const n = Ms(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ts(n, t.params, t.paramsSerializer);
  }
};
E.forEach(["delete", "get", "head", "options"], function(t) {
  Xt.prototype[t] = function(n, u) {
    return this.request(nn(u || {}, {
      method: t,
      url: n,
      data: (u || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function n(u) {
    return function(i, o, s) {
      return this.request(nn(s || {}, {
        method: t,
        headers: u ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Xt.prototype[t] = n(), Xt.prototype[t + "Form"] = n(!0);
});
let bf = class qs {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const u = this;
    this.promise.then((r) => {
      if (!u._listeners) return;
      let i = u._listeners.length;
      for (; i-- > 0; )
        u._listeners[i](r);
      u._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((s) => {
        u.subscribe(s), i = s;
      }).then(r);
      return o.cancel = function() {
        u.unsubscribe(i);
      }, o;
    }, t(function(i, o, s) {
      u.reason || (u.reason = new An(i, o, s), n(u.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), n = (u) => {
      t.abort(u);
    };
    return this.subscribe(n), t.signal.unsubscribe = () => this.unsubscribe(n), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new qs(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function gf(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function mf(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const Fr = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Fr).forEach(([e, t]) => {
  Fr[t] = e;
});
function js(e) {
  const t = new Xt(e), n = ms(Xt.prototype.request, t);
  return E.extend(n, Xt.prototype, t, { allOwnKeys: !0 }), E.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(r) {
    return js(nn(e, r));
  }, n;
}
const le = js(Kn);
le.Axios = Xt;
le.CanceledError = An;
le.CancelToken = bf;
le.isCancel = Os;
le.VERSION = Ps;
le.toFormData = zu;
le.AxiosError = $;
le.Cancel = le.CanceledError;
le.all = function(t) {
  return Promise.all(t);
};
le.spread = gf;
le.isAxiosError = mf;
le.mergeConfig = nn;
le.AxiosHeaders = He;
le.formToJSON = (e) => Rs(E.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = zs.getAdapter;
le.HttpStatusCode = Fr;
le.default = le;
const {
  Axios: Np,
  AxiosError: Mp,
  CanceledError: Ip,
  isCancel: Lp,
  CancelToken: Bp,
  VERSION: zp,
  all: Pp,
  Cancel: qp,
  isAxiosError: jp,
  spread: Up,
  toFormData: $p,
  AxiosHeaders: Hp,
  HttpStatusCode: Wp,
  formToJSON: Vp,
  getAdapter: Gp,
  mergeConfig: Zp
} = le, _f = le.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), xf = le.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), vf = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null,
  hasMore: !0,
  currentPage: 1
}, ut = Rl(vf), yf = (e, t) => ve(null, null, function* () {
  var o;
  const n = localStorage.getItem("userId"), u = t.bot_id;
  if (!n || !u)
    throw new Error("User ID and Bot ID are required");
  const r = bs(ut);
  let i = "";
  ut.update((s) => Ce(ce({}, s), {
    messages: [
      ...s.messages,
      {
        id: Date.now().toString(),
        chatId: s.currentChatId || "",
        role: "human",
        message: e,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "streaming",
        chatId: s.currentChatId || "",
        role: "ai",
        message: "",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    isLoading: !0
  }));
  try {
    const s = !!r.currentChatId && r.messages.length > 0, a = {
      bot_id: u,
      prompt: e,
      stream: !0,
      source: "widget"
    };
    s && (a.conversation_id = r.currentChatId);
    const l = yield fetch("https://beta.fluentbot.ai/ai/chat/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(a)
    });
    if (!l.ok || !l.body)
      throw new Error(`Request failed: ${l.status} ${l.statusText}`);
    const f = l.body.getReader(), h = new TextDecoder();
    let p = "", d = "", m = [];
    const g = () => {
      if (!d && m.length === 0) return;
      const k = m.join(`
`), y = d || "message";
      if (y === "message")
        k && k.length > 0 && (i += k, ut.update((x) => Ce(ce({}, x), {
          messages: x.messages.map((_) => _.id === "streaming" ? Ce(ce({}, _), { message: i }) : _)
        })));
      else if (y === "sources")
        try {
          const x = JSON.parse(k);
          Array.isArray(x) && ut.update((_) => Ce(ce({}, _), {
            messages: _.messages.map((v) => v.id === "streaming" ? Ce(ce({}, v), { sources: x }) : v)
          }));
        } catch (x) {
        }
      else if (y === "conversation_id") {
        const x = k.trim();
        localStorage.setItem("currentChatId", x), ut.update((_) => Ce(ce({}, _), {
          currentChatId: x,
          messages: _.messages.map((v) => v.chatId ? v : Ce(ce({}, v), { chatId: x }))
        }));
      }
      d = "", m = [];
    };
    for (; ; ) {
      const { value: k, done: y } = yield f.read();
      if (y) break;
      p += h.decode(k, { stream: !0 });
      const x = p.split(/\r?\n/);
      p = (o = x.pop()) != null ? o : "";
      for (const _ of x)
        _.startsWith("event:") ? (g(), d = _.slice(6).trim()) : _.startsWith("data:") ? m.push(_.slice(5)) : _.trim() === "" && g();
    }
    if (p.length > 0) {
      const k = p.trimEnd();
      if (k) {
        const y = k.split(/\r?\n/);
        for (const x of y)
          x.startsWith("event:") ? (g(), d = x.slice(6).trim()) : x.startsWith("data:") && m.push(x.slice(5));
      }
    }
    g(), ut.update((k) => {
      const y = k.messages.find((_) => _.id === "streaming");
      if (!y)
        return Ce(ce({}, k), { isLoading: !1 });
      const x = {
        id: Date.now().toString(),
        chatId: k.currentChatId || "",
        role: "ai",
        message: i,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        // carry over any sources captured during streaming
        sources: y.sources || void 0
      };
      return Ce(ce({}, k), {
        messages: k.messages.map((_) => _.id === "streaming" ? x : _),
        isLoading: !1
      });
    });
  } catch (s) {
    throw console.error("Error sending message:", s), ut.update((a) => Ce(ce({}, a), {
      isLoading: !1
    })), s;
  }
}), Us = (e, t = 1, n = 10) => ve(null, null, function* () {
  var u, r, i, o, s, a, c, l;
  try {
    const f = yield xf.get(`/chat/${e}/messages`, {
      params: {
        page: t,
        page_size: n
      }
    }), p = (((u = f.data) == null ? void 0 : u.messages) || []).map((g, k) => {
      var y, x, _, v, A;
      return {
        id: ((y = g.id) != null ? y : `${Date.now()}-${k}`).toString(),
        chatId: e,
        role: ((x = g.role) != null ? x : g.type) === "human" ? "human" : "ai",
        message: (v = (_ = g.message) != null ? _ : g.content) != null ? v : "",
        created_at: (A = g.created_at) != null ? A : (/* @__PURE__ */ new Date()).toISOString(),
        // pass through sources if backend returned them
        sources: Array.isArray(g.sources) ? g.sources : void 0
      };
    }).sort((g, k) => {
      const y = new Date(g.created_at).getTime(), x = new Date(k.created_at).getTime();
      return y - x;
    }), d = (a = (r = f.data) == null ? void 0 : r.total) != null ? a : (s = (o = (i = f.data) == null ? void 0 : i.pagination) == null ? void 0 : o.total) != null ? s : 0, m = (l = (c = f.data) == null ? void 0 : c.has_next) != null ? l : d ? t * n < d : !1;
    ut.update((g) => Ce(ce({}, g), {
      messages: t === 1 ? p : [...p, ...g.messages],
      hasMore: !!m,
      currentPage: t,
      currentChatId: e
    })), localStorage.setItem("currentChatId", e);
  } catch (f) {
    console.error("Error loading chat history:", f), ut.update((h) => Ce(ce({}, h), {
      error: "Failed to load chat history"
    }));
  }
});
Sc();
/**
 * @license lucide-svelte v0.503.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */
const Ef = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
var kf = /* @__PURE__ */ bl("<svg><!><!></svg>");
function Ze(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), u = Ie(n, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  yn(t, !1);
  let r = at(t, "name", 8, void 0), i = at(t, "color", 8, "currentColor"), o = at(t, "size", 8, 24), s = at(t, "strokeWidth", 8, 2), a = at(t, "absoluteStrokeWidth", 8, !1), c = at(t, "iconNode", 24, () => []);
  const l = (...m) => m.filter((g, k, y) => !!g && y.indexOf(g) === k).join(" ");
  Fl();
  var f = kf();
  let h;
  var p = J(f);
  vu(p, 1, c, Jr, (m, g) => {
    let k = () => S(g)[0], y = () => S(g)[1];
    var x = Se(), _ = _e(x);
    kl(_, k, !0, (v, A) => {
      let D;
      pe(() => D = zi(v, D, ce({}, y())));
    }), W(m, x);
  });
  var d = Ee(p);
  Pe(d, t, "default", {}), pe(
    (m, g) => h = zi(f, h, Ce(ce(ce({}, Ef), u), {
      width: o(),
      height: o(),
      stroke: i(),
      "stroke-width": m,
      class: g
    })),
    [
      () => a() ? Number(s()) * 24 / Number(o()) : s(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", n.class)
    ],
    Ur
  ), W(e, f), En();
}
function $s(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "bot-message-square" }, () => n, {
    iconNode: [
      ["path", { d: "M12 6V2H8" }],
      [
        "path",
        {
          d: "m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z"
        }
      ],
      ["path", { d: "M2 12h2" }],
      ["path", { d: "M9 11v2" }],
      ["path", { d: "M15 11v2" }],
      ["path", { d: "M20 12h2" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Rr(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "bot" }, () => n, {
    iconNode: [
      ["path", { d: "M12 8V4H8" }],
      [
        "rect",
        {
          width: "16",
          height: "12",
          x: "4",
          y: "8",
          rx: "2"
        }
      ],
      ["path", { d: "M2 14h2" }],
      ["path", { d: "M20 14h2" }],
      ["path", { d: "M15 13v2" }],
      ["path", { d: "M9 13v2" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function wf(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "maximize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Af(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "message-circle-more" }, () => n, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ],
      ["path", { d: "M8 12h.01" }],
      ["path", { d: "M12 12h.01" }],
      ["path", { d: "M16 12h.01" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Cf(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "message-circle" }, () => n, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Df(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "message-square-more" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "M8 10h.01" }],
      ["path", { d: "M12 10h.01" }],
      ["path", { d: "M16 10h.01" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Sf(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "messages-square" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z"
        }
      ],
      [
        "path",
        {
          d: "M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function no(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "message-square" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Tf(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "minimize" }, () => n, {
    iconNode: [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ff(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "send" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"
        }
      ],
      ["path", { d: "m21.854 2.147-10.94 10.939" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Hs(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "sparkle" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ws(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "sparkles" }, () => n, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ],
      ["path", { d: "M20 3v4" }],
      ["path", { d: "M22 5h-4" }],
      ["path", { d: "M4 17v2" }],
      ["path", { d: "M5 18H3" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Rf(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "trash-2" }, () => n, {
    iconNode: [
      ["path", { d: "M3 6h18" }],
      [
        "path",
        { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" }
      ],
      [
        "path",
        { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" }
      ],
      [
        "line",
        {
          x1: "10",
          x2: "10",
          y1: "11",
          y2: "17"
        }
      ],
      [
        "line",
        {
          x1: "14",
          x2: "14",
          y1: "11",
          y2: "17"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Vs(e, t) {
  const n = Ie(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ze(e, Ge({ name: "x" }, () => n, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = Se(), s = _e(o);
      Pe(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const uo = {};
function Of(e) {
  let t = uo[e];
  if (t)
    return t;
  t = uo[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    t.push(u);
  }
  for (let n = 0; n < e.length; n++) {
    const u = e.charCodeAt(n);
    t[u] = "%" + ("0" + u.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function mn(e, t) {
  typeof t != "string" && (t = mn.defaultChars);
  const n = Of(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(u) {
    let r = "";
    for (let i = 0, o = u.length; i < o; i += 3) {
      const s = parseInt(u.slice(i + 1, i + 3), 16);
      if (s < 128) {
        r += n[s];
        continue;
      }
      if ((s & 224) === 192 && i + 3 < o) {
        const a = parseInt(u.slice(i + 4, i + 6), 16);
        if ((a & 192) === 128) {
          const c = s << 6 & 1984 | a & 63;
          c < 128 ? r += "��" : r += String.fromCharCode(c), i += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && i + 6 < o) {
        const a = parseInt(u.slice(i + 4, i + 6), 16), c = parseInt(u.slice(i + 7, i + 9), 16);
        if ((a & 192) === 128 && (c & 192) === 128) {
          const l = s << 12 & 61440 | a << 6 & 4032 | c & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? r += "���" : r += String.fromCharCode(l), i += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && i + 9 < o) {
        const a = parseInt(u.slice(i + 4, i + 6), 16), c = parseInt(u.slice(i + 7, i + 9), 16), l = parseInt(u.slice(i + 10, i + 12), 16);
        if ((a & 192) === 128 && (c & 192) === 128 && (l & 192) === 128) {
          let f = s << 18 & 1835008 | a << 12 & 258048 | c << 6 & 4032 | l & 63;
          f < 65536 || f > 1114111 ? r += "����" : (f -= 65536, r += String.fromCharCode(55296 + (f >> 10), 56320 + (f & 1023))), i += 9;
          continue;
        }
      }
      r += "�";
    }
    return r;
  });
}
mn.defaultChars = ";/?:@&=+$,#";
mn.componentChars = "";
const ro = {};
function Nf(e) {
  let t = ro[e];
  if (t)
    return t;
  t = ro[e] = [];
  for (let n = 0; n < 128; n++) {
    const u = String.fromCharCode(n);
    /^[0-9a-z]$/i.test(u) ? t.push(u) : t.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  }
  for (let n = 0; n < e.length; n++)
    t[e.charCodeAt(n)] = e[n];
  return t;
}
function Jn(e, t, n) {
  typeof t != "string" && (n = t, t = Jn.defaultChars), typeof n == "undefined" && (n = !0);
  const u = Nf(t);
  let r = "";
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e.charCodeAt(i);
    if (n && s === 37 && i + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) {
      r += e.slice(i, i + 3), i += 2;
      continue;
    }
    if (s < 128) {
      r += u[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && i + 1 < o) {
        const a = e.charCodeAt(i + 1);
        if (a >= 56320 && a <= 57343) {
          r += encodeURIComponent(e[i] + e[i + 1]), i++;
          continue;
        }
      }
      r += "%EF%BF%BD";
      continue;
    }
    r += encodeURIComponent(e[i]);
  }
  return r;
}
Jn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Jn.componentChars = "-_.!~*'()";
function ei(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function ku() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Mf = /^([a-z0-9.+-]+:)/i, If = /:[0-9]*$/, Lf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Bf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], zf = ["{", "}", "|", "\\", "^", "`"].concat(Bf), Pf = ["'"].concat(zf), io = ["%", "/", "?", ";", "#"].concat(Pf), oo = ["/", "?", "#"], qf = 255, so = /^[+a-z0-9A-Z_-]{0,63}$/, jf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ao = {
  javascript: !0,
  "javascript:": !0
}, co = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function ti(e, t) {
  if (e && e instanceof ku) return e;
  const n = new ku();
  return n.parse(e, t), n;
}
ku.prototype.parse = function(e, t) {
  let n, u, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Lf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Mf.exec(i);
  if (o && (o = o[0], n = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && ao[o]) && (i = i.substr(2), this.slashes = !0)), !ao[o] && (r || o && !co[o])) {
    let c = -1;
    for (let d = 0; d < oo.length; d++)
      u = i.indexOf(oo[d]), u !== -1 && (c === -1 || u < c) && (c = u);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < io.length; d++)
      u = i.indexOf(io[d]), u !== -1 && (c === -1 || u < c) && (c = u);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let m = 0, g = d.length; m < g; m++) {
        const k = d[m];
        if (k && !k.match(so)) {
          let y = "";
          for (let x = 0, _ = k.length; x < _; x++)
            k.charCodeAt(x) > 127 ? y += "x" : y += k[x];
          if (!y.match(so)) {
            const x = d.slice(0, m), _ = d.slice(m + 1), v = k.match(jf);
            v && (x.push(v[1]), _.unshift(v[2])), _.length && (i = _.join(".") + i), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > qf && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = i.indexOf("#");
  s !== -1 && (this.hash = i.substr(s), i = i.slice(0, s));
  const a = i.indexOf("?");
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), co[n] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
ku.prototype.parseHost = function(e) {
  let t = If.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: mn,
  encode: Jn,
  format: ei,
  parse: ti
}, Symbol.toStringTag, { value: "Module" })), Gs = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Zs = /[\0-\x1F\x7F-\x9F]/, $f = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, ni = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Ks = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Js = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Gs,
  Cc: Zs,
  Cf: $f,
  P: ni,
  S: Ks,
  Z: Js
}, Symbol.toStringTag, { value: "Module" })), Wf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Vf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var lr;
const Gf = /* @__PURE__ */ new Map([
  [0, 65533],
  // C1 Unicode control character reference replacements
  [128, 8364],
  [130, 8218],
  [131, 402],
  [132, 8222],
  [133, 8230],
  [134, 8224],
  [135, 8225],
  [136, 710],
  [137, 8240],
  [138, 352],
  [139, 8249],
  [140, 338],
  [142, 381],
  [145, 8216],
  [146, 8217],
  [147, 8220],
  [148, 8221],
  [149, 8226],
  [150, 8211],
  [151, 8212],
  [152, 732],
  [153, 8482],
  [154, 353],
  [155, 8250],
  [156, 339],
  [158, 382],
  [159, 376]
]), Zf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (lr = String.fromCodePoint) !== null && lr !== void 0 ? lr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Kf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Gf.get(e)) !== null && t !== void 0 ? t : e;
}
var ke;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(ke || (ke = {}));
const Jf = 32;
var qt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(qt || (qt = {}));
function Or(e) {
  return e >= ke.ZERO && e <= ke.NINE;
}
function Yf(e) {
  return e >= ke.UPPER_A && e <= ke.UPPER_F || e >= ke.LOWER_A && e <= ke.LOWER_F;
}
function Xf(e) {
  return e >= ke.UPPER_A && e <= ke.UPPER_Z || e >= ke.LOWER_A && e <= ke.LOWER_Z || Or(e);
}
function Qf(e) {
  return e === ke.EQUALS || Xf(e);
}
var ye;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(ye || (ye = {}));
var zt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(zt || (zt = {}));
class ed {
  constructor(t, n, u) {
    this.decodeTree = t, this.emitCodePoint = n, this.errors = u, this.state = ye.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = zt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = ye.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
  }
  /**
   * Write an entity to the decoder. This can be called multiple times with partial entities.
   * If the entity is incomplete, the decoder will return -1.
   *
   * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
   * entity is incomplete, and resume when the next string is written.
   *
   * @param string The string containing the entity (or a continuation of the entity).
   * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  write(t, n) {
    switch (this.state) {
      case ye.EntityStart:
        return t.charCodeAt(n) === ke.NUM ? (this.state = ye.NumericStart, this.consumed += 1, this.stateNumericStart(t, n + 1)) : (this.state = ye.NamedEntity, this.stateNamedEntity(t, n));
      case ye.NumericStart:
        return this.stateNumericStart(t, n);
      case ye.NumericDecimal:
        return this.stateNumericDecimal(t, n);
      case ye.NumericHex:
        return this.stateNumericHex(t, n);
      case ye.NamedEntity:
        return this.stateNamedEntity(t, n);
    }
  }
  /**
   * Switches between the numeric decimal and hexadecimal states.
   *
   * Equivalent to the `Numeric character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericStart(t, n) {
    return n >= t.length ? -1 : (t.charCodeAt(n) | Jf) === ke.LOWER_X ? (this.state = ye.NumericHex, this.consumed += 1, this.stateNumericHex(t, n + 1)) : (this.state = ye.NumericDecimal, this.stateNumericDecimal(t, n));
  }
  addToNumericResult(t, n, u, r) {
    if (n !== u) {
      const i = u - n;
      this.result = this.result * Math.pow(r, i) + parseInt(t.substr(n, i), r), this.consumed += i;
    }
  }
  /**
   * Parses a hexadecimal numeric entity.
   *
   * Equivalent to the `Hexademical character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericHex(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (Or(r) || Yf(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(t, u, n, 16), -1;
  }
  /**
   * Parses a decimal numeric entity.
   *
   * Equivalent to the `Decimal character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNumericDecimal(t, n) {
    const u = n;
    for (; n < t.length; ) {
      const r = t.charCodeAt(n);
      if (Or(r))
        n += 1;
      else
        return this.addToNumericResult(t, u, n, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(t, u, n, 10), -1;
  }
  /**
   * Validate and emit a numeric entity.
   *
   * Implements the logic from the `Hexademical character reference start
   * state` and `Numeric character reference end state` in the HTML spec.
   *
   * @param lastCp The last code point of the entity. Used to see if the
   *               entity was terminated with a semicolon.
   * @param expectedLength The minimum number of characters that should be
   *                       consumed. Used to validate that at least one digit
   *                       was consumed.
   * @returns The number of characters that were consumed.
   */
  emitNumericEntity(t, n) {
    var u;
    if (this.consumed <= n)
      return (u = this.errors) === null || u === void 0 || u.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === ke.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === zt.Strict)
      return 0;
    return this.emitCodePoint(Kf(this.result), this.consumed), this.errors && (t !== ke.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
  }
  /**
   * Parses a named entity.
   *
   * Equivalent to the `Named character reference state` in the HTML spec.
   *
   * @param str The string containing the entity (or a continuation of the entity).
   * @param offset The current offset.
   * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
   */
  stateNamedEntity(t, n) {
    const { decodeTree: u } = this;
    let r = u[this.treeIndex], i = (r & qt.VALUE_LENGTH) >> 14;
    for (; n < t.length; n++, this.excess++) {
      const o = t.charCodeAt(n);
      if (this.treeIndex = td(u, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === zt.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        Qf(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = u[this.treeIndex], i = (r & qt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === ke.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== zt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
      }
    }
    return -1;
  }
  /**
   * Emit a named entity that was not terminated with a semicolon.
   *
   * @returns The number of characters consumed.
   */
  emitNotTerminatedNamedEntity() {
    var t;
    const { result: n, decodeTree: u } = this, r = (u[n] & qt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(n, r, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
  }
  /**
   * Emit a named entity.
   *
   * @param result The index of the entity in the decode tree.
   * @param valueLength The number of bytes in the entity.
   * @param consumed The number of characters consumed.
   *
   * @returns The number of characters consumed.
   */
  emitNamedEntityData(t, n, u) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(n === 1 ? r[t] & ~qt.VALUE_LENGTH : r[t + 1], u), n === 3 && this.emitCodePoint(r[t + 2], u), u;
  }
  /**
   * Signal to the parser that the end of the input was reached.
   *
   * Remaining data will be emitted and relevant errors will be produced.
   *
   * @returns The number of characters consumed.
   */
  end() {
    var t;
    switch (this.state) {
      case ye.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== zt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case ye.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case ye.NumericHex:
        return this.emitNumericEntity(0, 3);
      case ye.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case ye.EntityStart:
        return 0;
    }
  }
}
function Ys(e) {
  let t = "";
  const n = new ed(e, (u) => t += Zf(u));
  return function(r, i) {
    let o = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      t += r.slice(o, s), n.startEntity(i);
      const c = n.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (c < 0) {
        o = s + n.end();
        break;
      }
      o = s + c, s = c === 0 ? o + 1 : o;
    }
    const a = t + r.slice(o);
    return t = "", a;
  };
}
function td(e, t, n, u) {
  const r = (t & qt.BRANCH_LENGTH) >> 7, i = t & qt.JUMP_TABLE;
  if (r === 0)
    return i !== 0 && u === i ? n : -1;
  if (i) {
    const a = u - i;
    return a < 0 || a >= r ? -1 : e[n + a] - 1;
  }
  let o = n, s = o + r - 1;
  for (; o <= s; ) {
    const a = o + s >>> 1, c = e[a];
    if (c < u)
      o = a + 1;
    else if (c > u)
      s = a - 1;
    else
      return e[a + r];
  }
  return -1;
}
const nd = Ys(Wf);
Ys(Vf);
function Xs(e, t = zt.Legacy) {
  return nd(e, t);
}
function ud(e) {
  return Object.prototype.toString.call(e);
}
function ui(e) {
  return ud(e) === "[object String]";
}
const rd = Object.prototype.hasOwnProperty;
function id(e, t) {
  return rd.call(e, t);
}
function ju(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    if (n) {
      if (typeof n != "object")
        throw new TypeError(n + "must be object");
      Object.keys(n).forEach(function(u) {
        e[u] = n[u];
      });
    }
  }), e;
}
function Qs(e, t, n) {
  return [].concat(e.slice(0, t), n, e.slice(t + 1));
}
function ri(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function wu(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), n = 56320 + (e & 1023);
    return String.fromCharCode(t, n);
  }
  return String.fromCharCode(e);
}
const ea = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, od = /&([a-z#][a-z0-9]{1,31});/gi, sd = new RegExp(ea.source + "|" + od.source, "gi"), ad = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function cd(e, t) {
  if (t.charCodeAt(0) === 35 && ad.test(t)) {
    const u = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return ri(u) ? wu(u) : e;
  }
  const n = Xs(e);
  return n !== e ? n : e;
}
function ld(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ea, "$1");
}
function _n(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(sd, function(t, n, u) {
    return n || cd(t, u);
  });
}
const fd = /[&<>"]/, dd = /[&<>"]/g, hd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function pd(e) {
  return hd[e];
}
function Ht(e) {
  return fd.test(e) ? e.replace(dd, pd) : e;
}
const bd = /[.?*+^$[\]\\(){}|-]/g;
function gd(e) {
  return e.replace(bd, "\\$&");
}
function ie(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function zn(e) {
  if (e >= 8192 && e <= 8202)
    return !0;
  switch (e) {
    case 9:
    // \t
    case 10:
    // \n
    case 11:
    // \v
    case 12:
    // \f
    case 13:
    // \r
    case 32:
    case 160:
    case 5760:
    case 8239:
    case 8287:
    case 12288:
      return !0;
  }
  return !1;
}
function Pn(e) {
  return ni.test(e) || Ks.test(e);
}
function qn(e) {
  switch (e) {
    case 33:
    case 34:
    case 35:
    case 36:
    case 37:
    case 38:
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
    case 45:
    case 46:
    case 47:
    case 58:
    case 59:
    case 60:
    case 61:
    case 62:
    case 63:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 124:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function Uu(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const md = { mdurl: Uf, ucmicro: Hf }, _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Qs,
  assign: ju,
  escapeHtml: Ht,
  escapeRE: gd,
  fromCodePoint: wu,
  has: id,
  isMdAsciiPunct: qn,
  isPunctChar: Pn,
  isSpace: ie,
  isString: ui,
  isValidEntityCode: ri,
  isWhiteSpace: zn,
  lib: md,
  normalizeReference: Uu,
  unescapeAll: _n,
  unescapeMd: ld
}, Symbol.toStringTag, { value: "Module" }));
function xd(e, t, n) {
  let u, r, i, o;
  const s = e.posMax, a = e.pos;
  for (e.pos = t + 1, u = 1; e.pos < s; ) {
    if (i = e.src.charCodeAt(e.pos), i === 93 && (u--, u === 0)) {
      r = !0;
      break;
    }
    if (o = e.pos, e.md.inline.skipToken(e), i === 91) {
      if (o === e.pos - 1)
        u++;
      else if (n)
        return e.pos = a, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = a, c;
}
function vd(e, t, n) {
  let u, r = t;
  const i = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < n; ) {
      if (u = e.charCodeAt(r), u === 10 || u === 60)
        return i;
      if (u === 62)
        return i.pos = r + 1, i.str = _n(e.slice(t + 1, r)), i.ok = !0, i;
      if (u === 92 && r + 1 < n) {
        r += 2;
        continue;
      }
      r++;
    }
    return i;
  }
  let o = 0;
  for (; r < n && (u = e.charCodeAt(r), !(u === 32 || u < 32 || u === 127)); ) {
    if (u === 92 && r + 1 < n) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (u === 40 && (o++, o > 32))
      return i;
    if (u === 41) {
      if (o === 0)
        break;
      o--;
    }
    r++;
  }
  return t === r || o !== 0 || (i.str = _n(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function yd(e, t, n, u) {
  let r, i = t;
  const o = {
    // if `true`, this is a valid link title
    ok: !1,
    // if `true`, this link can be continued on the next line
    can_continue: !1,
    // if `ok`, it's the position of the first character after the closing marker
    pos: 0,
    // if `ok`, it's the unescaped title
    str: "",
    // expected closing marker character code
    marker: 0
  };
  if (u)
    o.str = u.str, o.marker = u.marker;
  else {
    if (i >= n)
      return o;
    let s = e.charCodeAt(i);
    if (s !== 34 && s !== 39 && s !== 40)
      return o;
    t++, i++, s === 40 && (s = 41), o.marker = s;
  }
  for (; i < n; ) {
    if (r = e.charCodeAt(i), r === o.marker)
      return o.pos = i + 1, o.str += _n(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < n && i++, i++;
  }
  return o.can_continue = !0, o.str += _n(e.slice(t, i)), o;
}
const Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: vd,
  parseLinkLabel: xd,
  parseLinkTitle: yd
}, Symbol.toStringTag, { value: "Module" })), kt = {};
kt.code_inline = function(e, t, n, u, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + Ht(i.content) + "</code>";
};
kt.code_block = function(e, t, n, u, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + Ht(e[t].content) + `</code></pre>
`;
};
kt.fence = function(e, t, n, u, r) {
  const i = e[t], o = i.info ? _n(i.info).trim() : "";
  let s = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    s = l[0], a = l.slice(2).join("");
  }
  let c;
  if (n.highlight ? c = n.highlight(i.content, s, a) || Ht(i.content) : c = Ht(i.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (o) {
    const l = i.attrIndex("class"), f = i.attrs ? i.attrs.slice() : [];
    l < 0 ? f.push(["class", n.langPrefix + s]) : (f[l] = f[l].slice(), f[l][1] += " " + n.langPrefix + s);
    const h = {
      attrs: f
    };
    return `<pre><code${r.renderAttrs(h)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(i)}>${c}</code></pre>
`;
};
kt.image = function(e, t, n, u, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, n, u), r.renderToken(e, t, n);
};
kt.hardbreak = function(e, t, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
kt.softbreak = function(e, t, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
kt.text = function(e, t) {
  return Ht(e[t].content);
};
kt.html_block = function(e, t) {
  return e[t].content;
};
kt.html_inline = function(e, t) {
  return e[t].content;
};
function Cn() {
  this.rules = ju({}, kt);
}
Cn.prototype.renderAttrs = function(t) {
  let n, u, r;
  if (!t.attrs)
    return "";
  for (r = "", n = 0, u = t.attrs.length; n < u; n++)
    r += " " + Ht(t.attrs[n][0]) + '="' + Ht(t.attrs[n][1]) + '"';
  return r;
};
Cn.prototype.renderToken = function(t, n, u) {
  const r = t[n];
  let i = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && n && t[n - 1].hidden && (i += `
`), i += (r.nesting === -1 ? "</" : "<") + r.tag, i += this.renderAttrs(r), r.nesting === 0 && u.xhtmlOut && (i += " /");
  let o = !1;
  if (r.block && (o = !0, r.nesting === 1 && n + 1 < t.length)) {
    const s = t[n + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (o = !1);
  }
  return i += o ? `>
` : ">", i;
};
Cn.prototype.renderInline = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? u += r[s](e, i, t, n, this) : u += this.renderToken(e, i, t);
  }
  return u;
};
Cn.prototype.renderInlineAsText = function(e, t, n) {
  let u = "";
  for (let r = 0, i = e.length; r < i; r++)
    switch (e[r].type) {
      case "text":
        u += e[r].content;
        break;
      case "image":
        u += this.renderInlineAsText(e[r].children, t, n);
        break;
      case "html_inline":
      case "html_block":
        u += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        u += `
`;
        break;
    }
  return u;
};
Cn.prototype.render = function(e, t, n) {
  let u = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    s === "inline" ? u += this.renderInline(e[i].children, t, n) : typeof r[s] != "undefined" ? u += r[s](e, i, t, n, this) : u += this.renderToken(e, i, t, n);
  }
  return u;
};
function Ve() {
  this.__rules__ = [], this.__cache__ = null;
}
Ve.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Ve.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(u) {
      t.indexOf(u) < 0 && t.push(u);
    });
  }), e.__cache__ = {}, t.forEach(function(n) {
    e.__cache__[n] = [], e.__rules__.forEach(function(u) {
      u.enabled && (n && u.alt.indexOf(n) < 0 || e.__cache__[n].push(u.fn));
    });
  });
};
Ve.prototype.at = function(e, t, n) {
  const u = this.__find__(e), r = n || {};
  if (u === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[u].fn = t, this.__rules__[u].alt = r.alt || [], this.__cache__ = null;
};
Ve.prototype.before = function(e, t, n, u) {
  const r = this.__find__(e), i = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: i.alt || []
  }), this.__cache__ = null;
};
Ve.prototype.after = function(e, t, n, u) {
  const r = this.__find__(e), i = u || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: t,
    enabled: !0,
    fn: n,
    alt: i.alt || []
  }), this.__cache__ = null;
};
Ve.prototype.push = function(e, t, n) {
  const u = n || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: u.alt || []
  }), this.__cache__ = null;
};
Ve.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !0, n.push(u);
  }, this), this.__cache__ = null, n;
};
Ve.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(e, t);
};
Ve.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const n = [];
  return e.forEach(function(u) {
    const r = this.__find__(u);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + u);
    }
    this.__rules__[r].enabled = !1, n.push(u);
  }, this), this.__cache__ = null, n;
};
Ve.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function pt(e, t, n) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
pt.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const n = this.attrs;
  for (let u = 0, r = n.length; u < r; u++)
    if (n[u][0] === t)
      return u;
  return -1;
};
pt.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
pt.prototype.attrSet = function(t, n) {
  const u = this.attrIndex(t), r = [t, n];
  u < 0 ? this.attrPush(r) : this.attrs[u] = r;
};
pt.prototype.attrGet = function(t) {
  const n = this.attrIndex(t);
  let u = null;
  return n >= 0 && (u = this.attrs[n][1]), u;
};
pt.prototype.attrJoin = function(t, n) {
  const u = this.attrIndex(t);
  u < 0 ? this.attrPush([t, n]) : this.attrs[u][1] = this.attrs[u][1] + " " + n;
};
function ta(e, t, n) {
  this.src = e, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ta.prototype.Token = pt;
const kd = /\r\n?|\n/g, wd = /\0/g;
function Ad(e) {
  let t;
  t = e.src.replace(kd, `
`), t = t.replace(wd, "�"), e.src = t;
}
function Cd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Dd(e) {
  const t = e.tokens;
  for (let n = 0, u = t.length; n < u; n++) {
    const r = t[n];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Sd(e) {
  return /^<a[>\s]/i.test(e);
}
function Td(e) {
  return /^<\/a\s*>/i.test(e);
}
function Fd(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let n = 0, u = t.length; n < u; n++) {
      if (t[n].type !== "inline" || !e.md.linkify.pretest(t[n].content))
        continue;
      let r = t[n].children, i = 0;
      for (let o = r.length - 1; o >= 0; o--) {
        const s = r[o];
        if (s.type === "link_close") {
          for (o--; r[o].level !== s.level && r[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (s.type === "html_inline" && (Sd(s.content) && i > 0 && i--, Td(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const l = [];
          let f = s.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let p = 0; p < c.length; p++) {
            const d = c[p].url, m = e.md.normalizeLink(d);
            if (!e.md.validateLink(m))
              continue;
            let g = c[p].text;
            c[p].schema ? c[p].schema === "mailto:" && !/^mailto:/i.test(g) ? g = e.md.normalizeLinkText("mailto:" + g).replace(/^mailto:/, "") : g = e.md.normalizeLinkText(g) : g = e.md.normalizeLinkText("http://" + g).replace(/^http:\/\//, "");
            const k = c[p].index;
            if (k > h) {
              const v = new e.Token("text", "", 0);
              v.content = a.slice(h, k), v.level = f, l.push(v);
            }
            const y = new e.Token("link_open", "a", 1);
            y.attrs = [["href", m]], y.level = f++, y.markup = "linkify", y.info = "auto", l.push(y);
            const x = new e.Token("text", "", 0);
            x.content = g, x.level = f, l.push(x);
            const _ = new e.Token("link_close", "a", -1);
            _.level = --f, _.markup = "linkify", _.info = "auto", l.push(_), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[n].children = r = Qs(r, o, l);
        }
      }
    }
}
const na = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Rd = /\((c|tm|r)\)/i, Od = /\((c|tm|r)\)/ig, Nd = {
  c: "©",
  r: "®",
  tm: "™"
};
function Md(e, t) {
  return Nd[t.toLowerCase()];
}
function Id(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && (u.content = u.content.replace(Od, Md)), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function Ld(e) {
  let t = 0;
  for (let n = e.length - 1; n >= 0; n--) {
    const u = e[n];
    u.type === "text" && !t && na.test(u.content) && (u.content = u.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), u.type === "link_open" && u.info === "auto" && t--, u.type === "link_close" && u.info === "auto" && t++;
  }
}
function Bd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Rd.test(e.tokens[t].content) && Id(e.tokens[t].children), na.test(e.tokens[t].content) && Ld(e.tokens[t].children));
}
const zd = /['"]/, lo = /['"]/g, fo = "’";
function ou(e, t, n) {
  return e.slice(0, t) + n + e.slice(t + 1);
}
function Pd(e, t) {
  let n;
  const u = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = e[r].level;
    for (n = u.length - 1; n >= 0 && !(u[n].level <= o); n--)
      ;
    if (u.length = n + 1, i.type !== "text")
      continue;
    let s = i.content, a = 0, c = s.length;
    e:
      for (; a < c; ) {
        lo.lastIndex = a;
        const l = lo.exec(s);
        if (!l)
          break;
        let f = !0, h = !0;
        a = l.index + 1;
        const p = l[0] === "'";
        let d = 32;
        if (l.index - 1 >= 0)
          d = s.charCodeAt(l.index - 1);
        else
          for (n = r - 1; n >= 0 && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n--)
            if (e[n].content) {
              d = e[n].content.charCodeAt(e[n].content.length - 1);
              break;
            }
        let m = 32;
        if (a < c)
          m = s.charCodeAt(a);
        else
          for (n = r + 1; n < e.length && !(e[n].type === "softbreak" || e[n].type === "hardbreak"); n++)
            if (e[n].content) {
              m = e[n].content.charCodeAt(0);
              break;
            }
        const g = qn(d) || Pn(String.fromCharCode(d)), k = qn(m) || Pn(String.fromCharCode(m)), y = zn(d), x = zn(m);
        if (x ? f = !1 : k && (y || g || (f = !1)), y ? h = !1 : g && (x || k || (h = !1)), m === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = g, h = k), !f && !h) {
          p && (i.content = ou(i.content, l.index, fo));
          continue;
        }
        if (h)
          for (n = u.length - 1; n >= 0; n--) {
            let _ = u[n];
            if (u[n].level < o)
              break;
            if (_.single === p && u[n].level === o) {
              _ = u[n];
              let v, A;
              p ? (v = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (v = t.md.options.quotes[0], A = t.md.options.quotes[1]), i.content = ou(i.content, l.index, A), e[_.token].content = ou(
                e[_.token].content,
                _.pos,
                v
              ), a += A.length - 1, _.token === r && (a += v.length - 1), s = i.content, c = s.length, u.length = n;
              continue e;
            }
          }
        f ? u.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = ou(i.content, l.index, fo));
      }
  }
}
function qd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !zd.test(e.tokens[t].content) || Pd(e.tokens[t].children, e);
}
function jd(e) {
  let t, n;
  const u = e.tokens, r = u.length;
  for (let i = 0; i < r; i++) {
    if (u[i].type !== "inline") continue;
    const o = u[i].children, s = o.length;
    for (t = 0; t < s; t++)
      o[t].type === "text_special" && (o[t].type = "text");
    for (t = n = 0; t < s; t++)
      o[t].type === "text" && t + 1 < s && o[t + 1].type === "text" ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== n && (o[n] = o[t]), n++);
    t !== n && (o.length = n);
  }
}
const fr = [
  ["normalize", Ad],
  ["block", Cd],
  ["inline", Dd],
  ["linkify", Fd],
  ["replacements", Bd],
  ["smartquotes", qd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", jd]
];
function ii() {
  this.ruler = new Ve();
  for (let e = 0; e < fr.length; e++)
    this.ruler.push(fr[e][0], fr[e][1]);
}
ii.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let n = 0, u = t.length; n < u; n++)
    t[n](e);
};
ii.prototype.State = ta;
function wt(e, t, n, u) {
  this.src = e, this.md = t, this.env = n, this.tokens = u, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (ie(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
wt.prototype.push = function(e, t, n) {
  const u = new pt(e, t, n);
  return u.block = !0, n < 0 && this.level--, u.level = this.level, n > 0 && this.level++, this.tokens.push(u), u;
};
wt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
wt.prototype.skipEmptyLines = function(t) {
  for (let n = this.lineMax; t < n && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
wt.prototype.skipSpaces = function(t) {
  for (let n = this.src.length; t < n; t++) {
    const u = this.src.charCodeAt(t);
    if (!ie(u))
      break;
  }
  return t;
};
wt.prototype.skipSpacesBack = function(t, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (!ie(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
wt.prototype.skipChars = function(t, n) {
  for (let u = this.src.length; t < u && this.src.charCodeAt(t) === n; t++)
    ;
  return t;
};
wt.prototype.skipCharsBack = function(t, n, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (n !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
wt.prototype.getLines = function(t, n, u, r) {
  if (t >= n)
    return "";
  const i = new Array(n - t);
  for (let o = 0, s = t; s < n; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < n || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < u; ) {
      const h = this.src.charCodeAt(l);
      if (ie(h))
        h === 9 ? a += 4 - (a + this.bsCount[s]) % 4 : a++;
      else if (l - c < this.tShift[s])
        a++;
      else
        break;
      l++;
    }
    a > u ? i[o] = new Array(a - u + 1).join(" ") + this.src.slice(l, f) : i[o] = this.src.slice(l, f);
  }
  return i.join("");
};
wt.prototype.Token = pt;
const Ud = 65536;
function dr(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  return e.src.slice(n, u);
}
function ho(e) {
  const t = [], n = e.length;
  let u = 0, r = e.charCodeAt(u), i = !1, o = 0, s = "";
  for (; u < n; )
    r === 124 && (i ? (s += e.substring(o, u - 1), o = u) : (t.push(s + e.substring(o, u)), s = "", o = u + 1)), i = r === 92, u++, r = e.charCodeAt(u);
  return t.push(s + e.substring(o)), t;
}
function $d(e, t, n, u) {
  if (t + 2 > n)
    return !1;
  let r = t + 1;
  if (e.sCount[r] < e.blkIndent || e.sCount[r] - e.blkIndent >= 4)
    return !1;
  let i = e.bMarks[r] + e.tShift[r];
  if (i >= e.eMarks[r])
    return !1;
  const o = e.src.charCodeAt(i++);
  if (o !== 124 && o !== 45 && o !== 58 || i >= e.eMarks[r])
    return !1;
  const s = e.src.charCodeAt(i++);
  if (s !== 124 && s !== 45 && s !== 58 && !ie(s) || o === 45 && ie(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const _ = e.src.charCodeAt(i);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !ie(_))
      return !1;
    i++;
  }
  let a = dr(e, t + 1), c = a.split("|");
  const l = [];
  for (let _ = 0; _ < c.length; _++) {
    const v = c[_].trim();
    if (!v) {
      if (_ === 0 || _ === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(v))
      return !1;
    v.charCodeAt(v.length - 1) === 58 ? l.push(v.charCodeAt(0) === 58 ? "center" : "right") : v.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = dr(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = ho(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (u)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const p = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), m = [t, 0];
  d.map = m;
  const g = e.push("thead_open", "thead", 1);
  g.map = [t, t + 1];
  const k = e.push("tr_open", "tr", 1);
  k.map = [t, t + 1];
  for (let _ = 0; _ < c.length; _++) {
    const v = e.push("th_open", "th", 1);
    l[_] && (v.attrs = [["style", "text-align:" + l[_]]]);
    const A = e.push("inline", "", 0);
    A.content = c[_].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let y, x = 0;
  for (r = t + 2; r < n && !(e.sCount[r] < e.blkIndent); r++) {
    let _ = !1;
    for (let A = 0, D = p.length; A < D; A++)
      if (p[A](e, r, n, !0)) {
        _ = !0;
        break;
      }
    if (_ || (a = dr(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = ho(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), x += f - c.length, x > Ud))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = y = [t + 2, 0];
    }
    const v = e.push("tr_open", "tr", 1);
    v.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const D = e.push("td_open", "td", 1);
      l[A] && (D.attrs = [["style", "text-align:" + l[A]]]);
      const R = e.push("inline", "", 0);
      R.content = c[A] ? c[A].trim() : "", R.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return y && (e.push("tbody_close", "tbody", -1), y[1] = r), e.push("table_close", "table", -1), m[1] = r, e.parentType = h, e.line = r, !0;
}
function Hd(e, t, n) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let u = t + 1, r = u;
  for (; u < n; ) {
    if (e.isEmpty(u)) {
      u++;
      continue;
    }
    if (e.sCount[u] - e.blkIndent >= 4) {
      u++, r = u;
      continue;
    }
    break;
  }
  e.line = r;
  const i = e.push("code_block", "code", 0);
  return i.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, i.map = [t, e.line], !0;
}
function Wd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || r + 3 > i)
    return !1;
  const o = e.src.charCodeAt(r);
  if (o !== 126 && o !== 96)
    return !1;
  let s = r;
  r = e.skipChars(r, o);
  let a = r - s;
  if (a < 3)
    return !1;
  const c = e.src.slice(s, r), l = e.src.slice(r, i);
  if (o === 96 && l.indexOf(String.fromCharCode(o)) >= 0)
    return !1;
  if (u)
    return !0;
  let f = t, h = !1;
  for (; f++, !(f >= n || (r = s = e.bMarks[f] + e.tShift[f], i = e.eMarks[f], r < i && e.sCount[f] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === o && !(e.sCount[f] - e.blkIndent >= 4) && (r = e.skipChars(r, o), !(r - s < a) && (r = e.skipSpaces(r), !(r < i)))) {
      h = !0;
      break;
    }
  a = e.sCount[t], e.line = f + (h ? 1 : 0);
  const p = e.push("fence", "code", 0);
  return p.info = l, p.content = e.getLines(t + 1, f, a, !0), p.markup = c, p.map = [t, e.line], !0;
}
function Vd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  const o = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (u)
    return !0;
  const s = [], a = [], c = [], l = [], f = e.md.block.ruler.getRules("blockquote"), h = e.parentType;
  e.parentType = "blockquote";
  let p = !1, d;
  for (d = t; d < n; d++) {
    const x = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !x) {
      let v = e.sCount[d] + 1, A, D;
      e.src.charCodeAt(r) === 32 ? (r++, v++, D = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[d] + v) % 4 === 3 ? (r++, v++, D = !1) : D = !0) : A = !1;
      let R = v;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const O = e.src.charCodeAt(r);
        if (ie(O))
          O === 9 ? R += 4 - (R + e.bsCount[d] + (D ? 1 : 0)) % 4 : R++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (A ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = R - v, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let _ = !1;
    for (let v = 0, A = f.length; v < A; v++)
      if (f[v](e, d, n, !0)) {
        _ = !0;
        break;
      }
    if (_) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const m = e.blkIndent;
  e.blkIndent = 0;
  const g = e.push("blockquote_open", "blockquote", 1);
  g.markup = ">";
  const k = [t, 0];
  g.map = k, e.md.block.tokenize(e, t, d);
  const y = e.push("blockquote_close", "blockquote", -1);
  y.markup = ">", e.lineMax = o, e.parentType = h, k[1] = e.line;
  for (let x = 0; x < l.length; x++)
    e.bMarks[x + t] = s[x], e.tShift[x + t] = l[x], e.sCount[x + t] = c[x], e.bsCount[x + t] = a[x];
  return e.blkIndent = m, !0;
}
function Gd(e, t, n, u) {
  const r = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let i = e.bMarks[t] + e.tShift[t];
  const o = e.src.charCodeAt(i++);
  if (o !== 42 && o !== 45 && o !== 95)
    return !1;
  let s = 1;
  for (; i < r; ) {
    const c = e.src.charCodeAt(i++);
    if (c !== o && !ie(c))
      return !1;
    c === o && s++;
  }
  if (s < 3)
    return !1;
  if (u)
    return !0;
  e.line = t + 1;
  const a = e.push("hr", "hr", 0);
  return a.map = [t, e.line], a.markup = Array(s + 1).join(String.fromCharCode(o)), !0;
}
function po(e, t) {
  const n = e.eMarks[t];
  let u = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(u++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (u < n) {
    const i = e.src.charCodeAt(u);
    if (!ie(i))
      return -1;
  }
  return u;
}
function bo(e, t) {
  const n = e.bMarks[t] + e.tShift[t], u = e.eMarks[t];
  let r = n;
  if (r + 1 >= u)
    return -1;
  let i = e.src.charCodeAt(r++);
  if (i < 48 || i > 57)
    return -1;
  for (; ; ) {
    if (r >= u)
      return -1;
    if (i = e.src.charCodeAt(r++), i >= 48 && i <= 57) {
      if (r - n >= 10)
        return -1;
      continue;
    }
    if (i === 41 || i === 46)
      break;
    return -1;
  }
  return r < u && (i = e.src.charCodeAt(r), !ie(i)) ? -1 : r;
}
function Zd(e, t) {
  const n = e.level + 2;
  for (let u = t + 2, r = e.tokens.length - 2; u < r; u++)
    e.tokens[u].level === n && e.tokens[u].type === "paragraph_open" && (e.tokens[u + 2].hidden = !0, e.tokens[u].hidden = !0, u += 2);
}
function Kd(e, t, n, u) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  u && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = bo(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = po(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(p) >= e.eMarks[a])
    return !1;
  if (u)
    return !0;
  const d = e.src.charCodeAt(p - 1), m = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const g = [a, 0];
  s.map = g, s.markup = String.fromCharCode(d);
  let k = !1;
  const y = e.md.block.ruler.getRules("list"), x = e.parentType;
  for (e.parentType = "list"; a < n; ) {
    i = p, r = e.eMarks[a];
    const _ = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let v = _;
    for (; i < r; ) {
      const H = e.src.charCodeAt(i);
      if (H === 9)
        v += 4 - (v + e.bsCount[a]) % 4;
      else if (H === 32)
        v++;
      else
        break;
      i++;
    }
    const A = i;
    let D;
    A >= r ? D = 1 : D = v - _, D > 4 && (D = 1);
    const R = _ + D;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const O = [a, 0];
    s.map = O, f && (s.info = e.src.slice(o, p - 1));
    const z = e.tight, Z = e.tShift[a], oe = e.sCount[a], G = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = R, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = v, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, n) : e.md.block.tokenize(e, a, n, !0), (!e.tight || k) && (c = !1), k = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = G, e.tShift[a] = Z, e.sCount[a] = oe, e.tight = z, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, O[1] = a, a >= n || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let U = !1;
    for (let H = 0, se = y.length; H < se; H++)
      if (y[H](e, a, n, !0)) {
        U = !0;
        break;
      }
    if (U)
      break;
    if (f) {
      if (p = bo(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = po(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), g[1] = a, e.line = a, e.parentType = x, c && Zd(e, m), !0;
}
function Jd(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(y) {
    const x = e.lineMax;
    if (y >= x || e.isEmpty(y))
      return null;
    let _ = !1;
    if (e.sCount[y] - e.blkIndent > 3 && (_ = !0), e.sCount[y] < 0 && (_ = !0), !_) {
      const D = e.md.block.ruler.getRules("reference"), R = e.parentType;
      e.parentType = "reference";
      let O = !1;
      for (let z = 0, Z = D.length; z < Z; z++)
        if (D[z](e, y, x, !0)) {
          O = !0;
          break;
        }
      if (e.parentType = R, O)
        return null;
    }
    const v = e.bMarks[y] + e.tShift[y], A = e.eMarks[y];
    return e.src.slice(v, A + 1);
  }
  let a = e.src.slice(r, i + 1);
  i = a.length;
  let c = -1;
  for (r = 1; r < i; r++) {
    const y = a.charCodeAt(r);
    if (y === 91)
      return !1;
    if (y === 93) {
      c = r;
      break;
    } else if (y === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (y === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const y = a.charCodeAt(r);
    if (y === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (!ie(y)) break;
  }
  const l = e.md.helpers.parseLinkDestination(a, r, i);
  if (!l.ok)
    return !1;
  const f = e.md.normalizeLink(l.str);
  if (!e.md.validateLink(f))
    return !1;
  r = l.pos;
  const h = r, p = o, d = r;
  for (; r < i; r++) {
    const y = a.charCodeAt(r);
    if (y === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (!ie(y)) break;
  }
  let m = e.md.helpers.parseLinkTitle(a, r, i);
  for (; m.can_continue; ) {
    const y = s(o);
    if (y === null) break;
    a += y, r = i, i = a.length, o++, m = e.md.helpers.parseLinkTitle(a, r, i, m);
  }
  let g;
  for (r < i && d !== r && m.ok ? (g = m.str, r = m.pos) : (g = "", r = h, o = p); r < i; ) {
    const y = a.charCodeAt(r);
    if (!ie(y))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && g)
    for (g = "", r = h, o = p; r < i; ) {
      const y = a.charCodeAt(r);
      if (!ie(y))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const k = Uu(a.slice(1, c));
  return k ? (u || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[k] == "undefined" && (e.env.references[k] = { title: g, href: f }), e.line = o), !0) : !1;
}
const Yd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Xd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Qd = "[^\"'=<>`\\x00-\\x20]+", e1 = "'[^']*'", t1 = '"[^"]*"', n1 = "(?:" + Qd + "|" + e1 + "|" + t1 + ")", u1 = "(?:\\s+" + Xd + "(?:\\s*=\\s*" + n1 + ")?)", ua = "<[A-Za-z][A-Za-z0-9\\-]*" + u1 + "*\\s*\\/?>", ra = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", r1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", i1 = "<[?][\\s\\S]*?[?]>", o1 = "<![A-Za-z][^>]*>", s1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", a1 = new RegExp("^(?:" + ua + "|" + ra + "|" + r1 + "|" + i1 + "|" + o1 + "|" + s1 + ")"), c1 = new RegExp("^(?:" + ua + "|" + ra + ")"), ln = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Yd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(c1.source + "\\s*$"), /^$/, !1]
];
function l1(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), s = 0;
  for (; s < ln.length && !ln[s][0].test(o); s++)
    ;
  if (s === ln.length)
    return !1;
  if (u)
    return ln[s][2];
  let a = t + 1;
  if (!ln[s][1].test(o)) {
    for (; a < n && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), ln[s][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function f1(e, t, n, u) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !ie(o))
    return !1;
  if (u)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && ie(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function d1(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let i = 0, o, s = t + 1;
  for (; s < n && !e.isEmpty(s); s++) {
    if (e.sCount[s] - e.blkIndent > 3)
      continue;
    if (e.sCount[s] >= e.blkIndent) {
      let p = e.bMarks[s] + e.tShift[s];
      const d = e.eMarks[s];
      if (p < d && (o = e.src.charCodeAt(p), (o === 45 || o === 61) && (p = e.skipChars(p, o), p = e.skipSpaces(p), p >= d))) {
        i = o === 61 ? 1 : 2;
        break;
      }
    }
    if (e.sCount[s] < 0)
      continue;
    let h = !1;
    for (let p = 0, d = u.length; p < d; p++)
      if (u[p](e, s, n, !0)) {
        h = !0;
        break;
      }
    if (h)
      break;
  }
  if (!i)
    return !1;
  const a = e.getLines(t, s, e.blkIndent, !1).trim();
  e.line = s + 1;
  const c = e.push("heading_open", "h" + String(i), 1);
  c.markup = String.fromCharCode(o), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = a, l.map = [t, e.line - 1], l.children = [];
  const f = e.push("heading_close", "h" + String(i), -1);
  return f.markup = String.fromCharCode(o), e.parentType = r, !0;
}
function h1(e, t, n) {
  const u = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let i = t + 1;
  for (e.parentType = "paragraph"; i < n && !e.isEmpty(i); i++) {
    if (e.sCount[i] - e.blkIndent > 3 || e.sCount[i] < 0)
      continue;
    let c = !1;
    for (let l = 0, f = u.length; l < f; l++)
      if (u[l](e, i, n, !0)) {
        c = !0;
        break;
      }
    if (c)
      break;
  }
  const o = e.getLines(t, i, e.blkIndent, !1).trim();
  e.line = i;
  const s = e.push("paragraph_open", "p", 1);
  s.map = [t, e.line];
  const a = e.push("inline", "", 0);
  return a.content = o, a.map = [t, e.line], a.children = [], e.push("paragraph_close", "p", -1), e.parentType = r, !0;
}
const su = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", $d, ["paragraph", "reference"]],
  ["code", Hd],
  ["fence", Wd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Vd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Gd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Kd, ["paragraph", "reference", "blockquote"]],
  ["reference", Jd],
  ["html_block", l1, ["paragraph", "reference", "blockquote"]],
  ["heading", f1, ["paragraph", "reference", "blockquote"]],
  ["lheading", d1],
  ["paragraph", h1]
];
function $u() {
  this.ruler = new Ve();
  for (let e = 0; e < su.length; e++)
    this.ruler.push(su[e][0], su[e][1], { alt: (su[e][2] || []).slice() });
}
$u.prototype.tokenize = function(e, t, n) {
  const u = this.ruler.getRules(""), r = u.length, i = e.md.options.maxNesting;
  let o = t, s = !1;
  for (; o < n && (e.line = o = e.skipEmptyLines(o), !(o >= n || e.sCount[o] < e.blkIndent)); ) {
    if (e.level >= i) {
      e.line = n;
      break;
    }
    const a = e.line;
    let c = !1;
    for (let l = 0; l < r; l++)
      if (c = u[l](e, o, n, !1), c) {
        if (a >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), o = e.line, o < n && e.isEmpty(o) && (s = !0, o++, e.line = o);
  }
};
$u.prototype.parse = function(e, t, n, u) {
  if (!e)
    return;
  const r = new this.State(e, t, n, u);
  this.tokenize(r, r.line, r.lineMax);
};
$u.prototype.State = wt;
function Yn(e, t, n, u) {
  this.src = e, this.env = n, this.md = t, this.tokens = u, this.tokens_meta = Array(u.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Yn.prototype.pushPending = function() {
  const e = new pt("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Yn.prototype.push = function(e, t, n) {
  this.pending && this.pushPending();
  const u = new pt(e, t, n);
  let r = null;
  return n < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), u.level = this.level, n > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(u), this.tokens_meta.push(r), u;
};
Yn.prototype.scanDelims = function(e, t) {
  const n = this.posMax, u = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < n && this.src.charCodeAt(i) === u; )
    i++;
  const o = i - e, s = i < n ? this.src.charCodeAt(i) : 32, a = qn(r) || Pn(String.fromCharCode(r)), c = qn(s) || Pn(String.fromCharCode(s)), l = zn(r), f = zn(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
Yn.prototype.Token = pt;
function p1(e) {
  switch (e) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
function b1(e, t) {
  let n = e.pos;
  for (; n < e.posMax && !p1(e.src.charCodeAt(n)); )
    n++;
  return n === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, n)), e.pos = n, !0);
}
const g1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function m1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const n = e.pos, u = e.posMax;
  if (n + 3 > u || e.src.charCodeAt(n) !== 58 || e.src.charCodeAt(n + 1) !== 47 || e.src.charCodeAt(n + 2) !== 47) return !1;
  const r = e.pending.match(g1);
  if (!r) return !1;
  const i = r[1], o = e.md.linkify.matchAtStart(e.src.slice(n - i.length));
  if (!o) return !1;
  let s = o.url;
  if (s.length <= i.length) return !1;
  s = s.replace(/\*+$/, "");
  const a = e.md.normalizeLink(s);
  if (!e.md.validateLink(a)) return !1;
  if (!t) {
    e.pending = e.pending.slice(0, -i.length);
    const c = e.push("link_open", "a", 1);
    c.attrs = [["href", a]], c.markup = "linkify", c.info = "auto";
    const l = e.push("text", "", 0);
    l.content = e.md.normalizeLinkText(s);
    const f = e.push("link_close", "a", -1);
    f.markup = "linkify", f.info = "auto";
  }
  return e.pos += s.length - i.length, !0;
}
function _1(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 10)
    return !1;
  const u = e.pending.length - 1, r = e.posMax;
  if (!t)
    if (u >= 0 && e.pending.charCodeAt(u) === 32)
      if (u >= 1 && e.pending.charCodeAt(u - 1) === 32) {
        let i = u - 1;
        for (; i >= 1 && e.pending.charCodeAt(i - 1) === 32; ) i--;
        e.pending = e.pending.slice(0, i), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (n++; n < r && ie(e.src.charCodeAt(n)); )
    n++;
  return e.pos = n, !0;
}
const oi = [];
for (let e = 0; e < 256; e++)
  oi.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  oi[e.charCodeAt(0)] = 1;
});
function x1(e, t) {
  let n = e.pos;
  const u = e.posMax;
  if (e.src.charCodeAt(n) !== 92 || (n++, n >= u)) return !1;
  let r = e.src.charCodeAt(n);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), n++; n < u && (r = e.src.charCodeAt(n), !!ie(r)); )
      n++;
    return e.pos = n, !0;
  }
  let i = e.src[n];
  if (r >= 55296 && r <= 56319 && n + 1 < u) {
    const s = e.src.charCodeAt(n + 1);
    s >= 56320 && s <= 57343 && (i += e.src[n + 1], n++);
  }
  const o = "\\" + i;
  if (!t) {
    const s = e.push("text_special", "", 0);
    r < 256 && oi[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = n + 1, !0;
}
function v1(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 96)
    return !1;
  const r = n;
  n++;
  const i = e.posMax;
  for (; n < i && e.src.charCodeAt(n) === 96; )
    n++;
  const o = e.src.slice(r, n), s = o.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return t || (e.pending += o), e.pos += s, !0;
  let a = n, c;
  for (; (c = e.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < i && e.src.charCodeAt(a) === 96; )
      a++;
    const l = a - c;
    if (l === s) {
      if (!t) {
        const f = e.push("code_inline", "code", 0);
        f.markup = o, f.content = e.src.slice(n, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = a, !0;
    }
    e.backticks[l] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += o), e.pos += s, !0;
}
function y1(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let i = r.length;
  const o = String.fromCharCode(u);
  if (i < 2)
    return !1;
  let s;
  i % 2 && (s = e.push("text", "", 0), s.content = o, i--);
  for (let a = 0; a < i; a += 2)
    s = e.push("text", "", 0), s.content = o + o, e.delimiters.push({
      marker: u,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function go(e, t) {
  let n;
  const u = [], r = t.length;
  for (let i = 0; i < r; i++) {
    const o = t[i];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const s = t[o.end];
    n = e.tokens[o.token], n.type = "s_open", n.tag = "s", n.nesting = 1, n.markup = "~~", n.content = "", n = e.tokens[s.token], n.type = "s_close", n.tag = "s", n.nesting = -1, n.markup = "~~", n.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && u.push(s.token - 1);
  }
  for (; u.length; ) {
    const i = u.pop();
    let o = i + 1;
    for (; o < e.tokens.length && e.tokens[o].type === "s_close"; )
      o++;
    o--, i !== o && (n = e.tokens[o], e.tokens[o] = e.tokens[i], e.tokens[i] = n);
  }
}
function E1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  go(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && go(e, t[u].delimiters);
}
const ia = {
  tokenize: y1,
  postProcess: E1
};
function k1(e, t) {
  const n = e.pos, u = e.src.charCodeAt(n);
  if (t || u !== 95 && u !== 42)
    return !1;
  const r = e.scanDelims(e.pos, u === 42);
  for (let i = 0; i < r.length; i++) {
    const o = e.push("text", "", 0);
    o.content = String.fromCharCode(u), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: u,
      // Total length of these series of delimiters.
      //
      length: r.length,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: r.can_open,
      close: r.can_close
    });
  }
  return e.pos += r.length, !0;
}
function mo(e, t) {
  const n = t.length;
  for (let u = n - 1; u >= 0; u--) {
    const r = t[u];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const i = t[r.end], o = u > 0 && t[u - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[u - 1].marker === r.marker && t[u - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === i.token + 1, s = String.fromCharCode(r.marker), a = e.tokens[r.token];
    a.type = o ? "strong_open" : "em_open", a.tag = o ? "strong" : "em", a.nesting = 1, a.markup = o ? s + s : s, a.content = "";
    const c = e.tokens[i.token];
    c.type = o ? "strong_close" : "em_close", c.tag = o ? "strong" : "em", c.nesting = -1, c.markup = o ? s + s : s, c.content = "", o && (e.tokens[t[u - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", u--);
  }
}
function w1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  mo(e, e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && mo(e, t[u].delimiters);
}
const oa = {
  tokenize: k1,
  postProcess: w1
};
function A1(e, t) {
  let n, u, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (n = e.src.charCodeAt(d), !(!ie(n) && n !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (n = e.src.charCodeAt(d), !(!ie(n) && n !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (n = e.src.charCodeAt(d), !(!ie(n) && n !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? u = e.src.slice(a, d++) : d = p + 1) : d = p + 1, u || (u = e.src.slice(h, p)), i = e.env.references[Uu(u)], !i)
      return e.pos = l, !1;
    o = i.href, s = i.title;
  }
  if (!t) {
    e.pos = h, e.posMax = p;
    const m = e.push("link_open", "a", 1), g = [["href", o]];
    m.attrs = g, s && g.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = f, !0;
}
function C1(e, t) {
  let n, u, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (n = e.src.charCodeAt(i), !(!ie(n) && n !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (n = e.src.charCodeAt(i), !(!ie(n) && n !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (n = e.src.charCodeAt(i), !(!ie(n) && n !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[Uu(r)], !o)
      return e.pos = f, !1;
    l = o.href, a = o.title;
  }
  if (!t) {
    u = e.src.slice(p, d);
    const m = [];
    e.md.inline.parse(
      u,
      e.md,
      e.env,
      m
    );
    const g = e.push("image", "img", 0), k = [["src", l], ["alt", ""]];
    g.attrs = k, g.children = m, g.content = u, a && k.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const D1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, S1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function T1(e, t) {
  let n = e.pos;
  if (e.src.charCodeAt(n) !== 60)
    return !1;
  const u = e.pos, r = e.posMax;
  for (; ; ) {
    if (++n >= r) return !1;
    const o = e.src.charCodeAt(n);
    if (o === 60) return !1;
    if (o === 62) break;
  }
  const i = e.src.slice(u + 1, n);
  if (S1.test(i)) {
    const o = e.md.normalizeLink(i);
    if (!e.md.validateLink(o))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(i);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += i.length + 2, !0;
  }
  if (D1.test(i)) {
    const o = e.md.normalizeLink("mailto:" + i);
    if (!e.md.validateLink(o))
      return !1;
    if (!t) {
      const s = e.push("link_open", "a", 1);
      s.attrs = [["href", o]], s.markup = "autolink", s.info = "auto";
      const a = e.push("text", "", 0);
      a.content = e.md.normalizeLinkText(i);
      const c = e.push("link_close", "a", -1);
      c.markup = "autolink", c.info = "auto";
    }
    return e.pos += i.length + 2, !0;
  }
  return !1;
}
function F1(e) {
  return /^<a[>\s]/i.test(e);
}
function R1(e) {
  return /^<\/a\s*>/i.test(e);
}
function O1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function N1(e, t) {
  if (!e.md.options.html)
    return !1;
  const n = e.posMax, u = e.pos;
  if (e.src.charCodeAt(u) !== 60 || u + 2 >= n)
    return !1;
  const r = e.src.charCodeAt(u + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !O1(r))
    return !1;
  const i = e.src.slice(u).match(a1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], F1(o.content) && e.linkLevel++, R1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const M1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, I1 = /^&([a-z][a-z0-9]{1,31});/i;
function L1(e, t) {
  const n = e.pos, u = e.posMax;
  if (e.src.charCodeAt(n) !== 38 || n + 1 >= u) return !1;
  if (e.src.charCodeAt(n + 1) === 35) {
    const i = e.src.slice(n).match(M1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = ri(o) ? wu(o) : wu(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(n).match(I1);
    if (i) {
      const o = Xs(i[0]);
      if (o !== i[0]) {
        if (!t) {
          const s = e.push("text_special", "", 0);
          s.content = o, s.markup = i[0], s.info = "entity";
        }
        return e.pos += i[0].length, !0;
      }
    }
  }
  return !1;
}
function _o(e) {
  const t = {}, n = e.length;
  if (!n) return;
  let u = 0, r = -2;
  const i = [];
  for (let o = 0; o < n; o++) {
    const s = e[o];
    if (i.push(0), (e[u].marker !== s.marker || r !== s.token - 1) && (u = o), r = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let c = u - i[u] - 1, l = c;
    for (; c > a; c -= i[c] + 1) {
      const f = e[c];
      if (f.marker === s.marker && f.open && f.end < 0) {
        let h = !1;
        if ((f.close || s.open) && (f.length + s.length) % 3 === 0 && (f.length % 3 !== 0 || s.length % 3 !== 0) && (h = !0), !h) {
          const p = c > 0 && !e[c - 1].open ? i[c - 1] + 1 : 0;
          i[o] = o - c + p, i[c] = p, s.open = !1, f.end = o, f.close = !1, l = -1, r = -2;
          break;
        }
      }
    }
    l !== -1 && (t[s.marker][(s.open ? 3 : 0) + (s.length || 0) % 3] = l);
  }
}
function B1(e) {
  const t = e.tokens_meta, n = e.tokens_meta.length;
  _o(e.delimiters);
  for (let u = 0; u < n; u++)
    t[u] && t[u].delimiters && _o(t[u].delimiters);
}
function z1(e) {
  let t, n, u = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = n = 0; t < i; t++)
    r[t].nesting < 0 && u--, r[t].level = u, r[t].nesting > 0 && u++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== n && (r[n] = r[t]), n++);
  t !== n && (r.length = n);
}
const hr = [
  ["text", b1],
  ["linkify", m1],
  ["newline", _1],
  ["escape", x1],
  ["backticks", v1],
  ["strikethrough", ia.tokenize],
  ["emphasis", oa.tokenize],
  ["link", A1],
  ["image", C1],
  ["autolink", T1],
  ["html_inline", N1],
  ["entity", L1]
], pr = [
  ["balance_pairs", B1],
  ["strikethrough", ia.postProcess],
  ["emphasis", oa.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", z1]
];
function Xn() {
  this.ruler = new Ve();
  for (let e = 0; e < hr.length; e++)
    this.ruler.push(hr[e][0], hr[e][1]);
  this.ruler2 = new Ve();
  for (let e = 0; e < pr.length; e++)
    this.ruler2.push(pr[e][0], pr[e][1]);
}
Xn.prototype.skipToken = function(e) {
  const t = e.pos, n = this.ruler.getRules(""), u = n.length, r = e.md.options.maxNesting, i = e.cache;
  if (typeof i[t] != "undefined") {
    e.pos = i[t];
    return;
  }
  let o = !1;
  if (e.level < r) {
    for (let s = 0; s < u; s++)
      if (e.level++, o = n[s](e, !0), e.level--, o) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  o || e.pos++, i[t] = e.pos;
};
Xn.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), n = t.length, u = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < u; ) {
    const i = e.pos;
    let o = !1;
    if (e.level < r) {
      for (let s = 0; s < n; s++)
        if (o = t[s](e, !1), o) {
          if (i >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (e.pos >= u)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
Xn.prototype.parse = function(e, t, n, u) {
  const r = new this.State(e, t, n, u);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
Xn.prototype.State = Yn;
function P1(e) {
  const t = {};
  e = e || {}, t.src_Any = Gs.source, t.src_Cc = Zs.source, t.src_Z = Js.source, t.src_P = ni.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const n = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + n + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + n + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Nr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(n) {
    n && Object.keys(n).forEach(function(u) {
      e[u] = n[u];
    });
  }), e;
}
function Hu(e) {
  return Object.prototype.toString.call(e);
}
function q1(e) {
  return Hu(e) === "[object String]";
}
function j1(e) {
  return Hu(e) === "[object Object]";
}
function U1(e) {
  return Hu(e) === "[object RegExp]";
}
function xo(e) {
  return Hu(e) === "[object Function]";
}
function $1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const sa = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function H1(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t || sa.hasOwnProperty(n);
  }, !1);
}
const W1 = {
  "http:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(u) ? u.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(u) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : u.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, n) {
      const u = e.slice(t);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(u) ? u.match(n.re.mailto)[0].length : 0;
    }
  }
}, V1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", G1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Z1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function K1(e) {
  return function(t, n) {
    const u = t.slice(n);
    return e.test(u) ? u.match(e)[0].length : 0;
  };
}
function vo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Au(e) {
  const t = e.re = P1(e.__opts__), n = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || n.push(V1), n.push(t.src_xn), t.src_tlds = n.join("|");
  function u(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(u(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(u(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(u(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(u(t.tpl_host_fuzzy_test), "i");
  const r = [];
  e.__compiled__ = {};
  function i(s, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + s + '": ' + a);
  }
  Object.keys(e.__schemas__).forEach(function(s) {
    const a = e.__schemas__[s];
    if (a === null)
      return;
    const c = { validate: null, link: null };
    if (e.__compiled__[s] = c, j1(a)) {
      U1(a.validate) ? c.validate = K1(a.validate) : xo(a.validate) ? c.validate = a.validate : i(s, a), xo(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = vo();
      return;
    }
    if (q1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: vo() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map($1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Z1(e);
}
function J1(e, t) {
  const n = e.__index__, u = e.__last_index__, r = e.__text_cache__.slice(n, u);
  this.schema = e.__schema__.toLowerCase(), this.index = n + t, this.lastIndex = u + t, this.raw = r, this.text = r, this.url = r;
}
function Mr(e, t) {
  const n = new J1(e, t);
  return e.__compiled__[n.schema].normalize(n, e), n;
}
function Xe(e, t) {
  if (!(this instanceof Xe))
    return new Xe(e, t);
  t || H1(e) && (t = e, e = {}), this.__opts__ = Nr({}, sa, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Nr({}, W1, e), this.__compiled__ = {}, this.__tlds__ = G1, this.__tlds_replaced__ = !1, this.re = {}, Au(this);
}
Xe.prototype.add = function(t, n) {
  return this.__schemas__[t] = n, Au(this), this;
};
Xe.prototype.set = function(t) {
  return this.__opts__ = Nr(this.__opts__, t), this;
};
Xe.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let n, u, r, i, o, s, a, c, l;
  if (this.re.schema_test.test(t)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (n = a.exec(t)) !== null; )
      if (i = this.testSchemaAt(t, n[2], a.lastIndex), i) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (u = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = u.index + u[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = u.index + u[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = t.indexOf("@"), l >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (o = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = s))), this.__index__ >= 0;
};
Xe.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Xe.prototype.testSchemaAt = function(t, n, u) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(t, u, this) : 0;
};
Xe.prototype.match = function(t) {
  const n = [];
  let u = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (n.push(Mr(this, u)), u = this.__last_index__);
  let r = u ? t.slice(u) : t;
  for (; this.test(r); )
    n.push(Mr(this, u)), r = r.slice(this.__last_index__), u += this.__last_index__;
  return n.length ? n : null;
};
Xe.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const n = this.re.schema_at_start.exec(t);
  if (!n) return null;
  const u = this.testSchemaAt(t, n[2], n[0].length);
  return u ? (this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + u, Mr(this, 0)) : null;
};
Xe.prototype.tlds = function(t, n) {
  return t = Array.isArray(t) ? t : [t], n ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(u, r, i) {
    return u !== i[r - 1];
  }).reverse(), Au(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Au(this), this);
};
Xe.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Xe.prototype.onCompile = function() {
};
const dn = 2147483647, vt = 36, si = 1, jn = 26, Y1 = 38, X1 = 700, aa = 72, ca = 128, la = "-", Q1 = /^xn--/, eh = /[^\0-\x7F]/, th = /[\x2E\u3002\uFF0E\uFF61]/g, nh = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, br = vt - si, yt = Math.floor, gr = String.fromCharCode;
function Bt(e) {
  throw new RangeError(nh[e]);
}
function uh(e, t) {
  const n = [];
  let u = e.length;
  for (; u--; )
    n[u] = t(e[u]);
  return n;
}
function fa(e, t) {
  const n = e.split("@");
  let u = "";
  n.length > 1 && (u = n[0] + "@", e = n[1]), e = e.replace(th, ".");
  const r = e.split("."), i = uh(r, t).join(".");
  return u + i;
}
function da(e) {
  const t = [];
  let n = 0;
  const u = e.length;
  for (; n < u; ) {
    const r = e.charCodeAt(n++);
    if (r >= 55296 && r <= 56319 && n < u) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i & 1023) + 65536) : (t.push(r), n--);
    } else
      t.push(r);
  }
  return t;
}
const rh = (e) => String.fromCodePoint(...e), ih = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : vt;
}, yo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, ha = function(e, t, n) {
  let u = 0;
  for (e = n ? yt(e / X1) : e >> 1, e += yt(e / t); e > br * jn >> 1; u += vt)
    e = yt(e / br);
  return yt(u + (br + 1) * e / (e + Y1));
}, pa = function(e) {
  const t = [], n = e.length;
  let u = 0, r = ca, i = aa, o = e.lastIndexOf(la);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && Bt("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < n; ) {
    const a = u;
    for (let l = 1, f = vt; ; f += vt) {
      s >= n && Bt("invalid-input");
      const h = ih(e.charCodeAt(s++));
      h >= vt && Bt("invalid-input"), h > yt((dn - u) / l) && Bt("overflow"), u += h * l;
      const p = f <= i ? si : f >= i + jn ? jn : f - i;
      if (h < p)
        break;
      const d = vt - p;
      l > yt(dn / d) && Bt("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = ha(u - a, c, a == 0), yt(u / c) > dn - r && Bt("overflow"), r += yt(u / c), u %= c, t.splice(u++, 0, r);
  }
  return String.fromCodePoint(...t);
}, ba = function(e) {
  const t = [];
  e = da(e);
  const n = e.length;
  let u = ca, r = 0, i = aa;
  for (const a of e)
    a < 128 && t.push(gr(a));
  const o = t.length;
  let s = o;
  for (o && t.push(la); s < n; ) {
    let a = dn;
    for (const l of e)
      l >= u && l < a && (a = l);
    const c = s + 1;
    a - u > yt((dn - r) / c) && Bt("overflow"), r += (a - u) * c, u = a;
    for (const l of e)
      if (l < u && ++r > dn && Bt("overflow"), l === u) {
        let f = r;
        for (let h = vt; ; h += vt) {
          const p = h <= i ? si : h >= i + jn ? jn : h - i;
          if (f < p)
            break;
          const d = f - p, m = vt - p;
          t.push(
            gr(yo(p + d % m, 0))
          ), f = yt(d / m);
        }
        t.push(gr(yo(f, 0))), i = ha(r, c, s === o), r = 0, ++s;
      }
    ++r, ++u;
  }
  return t.join("");
}, oh = function(e) {
  return fa(e, function(t) {
    return Q1.test(t) ? pa(t.slice(4).toLowerCase()) : t;
  });
}, sh = function(e) {
  return fa(e, function(t) {
    return eh.test(t) ? "xn--" + ba(t) : t;
  });
}, ga = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.3.1",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: da,
    encode: rh
  },
  decode: pa,
  encode: ba,
  toASCII: sh,
  toUnicode: oh
}, ah = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 100
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, ch = {
  options: {
    // Enable HTML tags in source
    html: !1,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !1,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, lh = {
  options: {
    // Enable HTML tags in source
    html: !0,
    // Use '/' to close single tags (<br />)
    xhtmlOut: !0,
    // Convert '\n' in paragraphs into <br>
    breaks: !1,
    // CSS language prefix for fenced blocks
    langPrefix: "language-",
    // autoconvert URL-like texts to links
    linkify: !1,
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    // Internal protection, recursion limit
    maxNesting: 20
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, fh = {
  default: ah,
  zero: ch,
  commonmark: lh
}, dh = /^(vbscript|javascript|file|data):/, hh = /^data:image\/(gif|png|jpeg|webp);/;
function ph(e) {
  const t = e.trim().toLowerCase();
  return dh.test(t) ? hh.test(t) : !0;
}
const ma = ["http:", "https:", "mailto:"];
function bh(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ma.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ga.toASCII(t.hostname);
    } catch (n) {
    }
  return Jn(ei(t));
}
function gh(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ma.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ga.toUnicode(t.hostname);
    } catch (n) {
    }
  return mn(ei(t), mn.defaultChars + "%");
}
function it(e, t) {
  if (!(this instanceof it))
    return new it(e, t);
  t || ui(e) || (t = e || {}, e = "default"), this.inline = new Xn(), this.block = new $u(), this.core = new ii(), this.renderer = new Cn(), this.linkify = new Xe(), this.validateLink = ph, this.normalizeLink = bh, this.normalizeLinkText = gh, this.utils = _d, this.helpers = ju({}, Ed), this.options = {}, this.configure(e), t && this.set(t);
}
it.prototype.set = function(e) {
  return ju(this.options, e), this;
};
it.prototype.configure = function(e) {
  const t = this;
  if (ui(e)) {
    const n = e;
    if (e = fh[n], !e)
      throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(n) {
    e.components[n].rules && t[n].ruler.enableOnly(e.components[n].rules), e.components[n].rules2 && t[n].ruler2.enableOnly(e.components[n].rules2);
  }), this;
};
it.prototype.enable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.enable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + u);
  return this;
};
it.prototype.disable = function(e, t) {
  let n = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    n = n.concat(this[r].ruler.disable(e, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(e, !0));
  const u = e.filter(function(r) {
    return n.indexOf(r) < 0;
  });
  if (u.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + u);
  return this;
};
it.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
it.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const n = new this.core.State(e, this, t);
  return this.core.process(n), n.tokens;
};
it.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
it.prototype.parseInline = function(e, t) {
  const n = new this.core.State(e, this, t);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
it.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function mh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mr, Eo;
function _h() {
  if (Eo) return mr;
  Eo = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((w) => {
      const T = b[w], q = typeof T;
      (q === "object" || q === "function") && !Object.isFrozen(T) && e(T);
    }), b;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(w) {
      w.data === void 0 && (w.data = {}), this.data = w.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function u(b, ...w) {
    const T = /* @__PURE__ */ Object.create(null);
    for (const q in b)
      T[q] = b[q];
    return w.forEach(function(q) {
      for (const de in q)
        T[de] = q[de];
    }), /** @type {T} */
    T;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: w }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const T = b.split(".");
      return [
        `${w}${T.shift()}`,
        ...T.map((q, de) => `${q}${"_".repeat(de + 1)}`)
      ].join(" ");
    }
    return `${w}${b}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(w, T) {
      this.buffer = "", this.classPrefix = T.classPrefix, w.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(w) {
      this.buffer += n(w);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(w) {
      if (!i(w)) return;
      const T = o(
        w.scope,
        { prefix: this.classPrefix }
      );
      this.span(T);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(w) {
      i(w) && (this.buffer += r);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(w) {
      this.buffer += `<span class="${w}">`;
    }
  }
  const a = (b = {}) => {
    const w = { children: [] };
    return Object.assign(w, b), w;
  };
  class c {
    constructor() {
      this.rootNode = a(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(w) {
      this.top.children.push(w);
    }
    /** @param {string} scope */
    openNode(w) {
      const T = a({ scope: w });
      this.add(T), this.stack.push(T);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(w) {
      return this.constructor._walk(w, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(w, T) {
      return typeof T == "string" ? w.addText(T) : T.children && (w.openNode(T), T.children.forEach((q) => this._walk(w, q)), w.closeNode(T)), w;
    }
    /**
     * @param {Node} node
     */
    static _collapse(w) {
      typeof w != "string" && w.children && (w.children.every((T) => typeof T == "string") ? w.children = [w.children.join("")] : w.children.forEach((T) => {
        c._collapse(T);
      }));
    }
  }
  class l extends c {
    /**
     * @param {*} options
     */
    constructor(w) {
      super(), this.options = w;
    }
    /**
     * @param {string} text
     */
    addText(w) {
      w !== "" && this.add(w);
    }
    /** @param {string} scope */
    startScope(w) {
      this.openNode(w);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(w, T) {
      const q = w.root;
      T && (q.scope = `language:${T}`), this.add(q);
    }
    toHTML() {
      return new s(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function f(b) {
    return b ? typeof b == "string" ? b : b.source : null;
  }
  function h(b) {
    return m("(?=", b, ")");
  }
  function p(b) {
    return m("(?:", b, ")*");
  }
  function d(b) {
    return m("(?:", b, ")?");
  }
  function m(...b) {
    return b.map((T) => f(T)).join("");
  }
  function g(b) {
    const w = b[b.length - 1];
    return typeof w == "object" && w.constructor === Object ? (b.splice(b.length - 1, 1), w) : {};
  }
  function k(...b) {
    return "(" + (g(b).capture ? "" : "?:") + b.map((q) => f(q)).join("|") + ")";
  }
  function y(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function x(b, w) {
    const T = b && b.exec(w);
    return T && T.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function v(b, { joinWith: w }) {
    let T = 0;
    return b.map((q) => {
      T += 1;
      const de = T;
      let he = f(q), M = "";
      for (; he.length > 0; ) {
        const N = _.exec(he);
        if (!N) {
          M += he;
          break;
        }
        M += he.substring(0, N.index), he = he.substring(N.index + N[0].length), N[0][0] === "\\" && N[1] ? M += "\\" + String(Number(N[1]) + de) : (M += N[0], N[0] === "(" && T++);
      }
      return M;
    }).map((q) => `(${q})`).join(w);
  }
  const A = /\b\B/, D = "[a-zA-Z]\\w*", R = "[a-zA-Z_]\\w*", O = "\\b\\d+(\\.\\d+)?", z = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", Z = "\\b(0b[01]+)", oe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", G = (b = {}) => {
    const w = /^#![ ]*\//;
    return b.binary && (b.begin = m(
      w,
      /.*\b/,
      b.binary,
      /\b.*/
    )), u({
      scope: "meta",
      begin: w,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (T, q) => {
        T.index !== 0 && q.ignoreMatch();
      }
    }, b);
  }, U = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, H = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [U]
  }, se = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [U]
  }, we = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, Y = function(b, w, T = {}) {
    const q = u(
      {
        scope: "comment",
        begin: b,
        end: w,
        contains: []
      },
      T
    );
    q.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const de = k(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return q.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: m(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          de,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), q;
  }, ge = Y("//", "$"), qe = Y("/\\*", "\\*/"), Qe = Y("#", "$"), At = {
    scope: "number",
    begin: O,
    relevance: 0
  }, I = {
    scope: "number",
    begin: z,
    relevance: 0
  }, X = {
    scope: "number",
    begin: Z,
    relevance: 0
  }, Te = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      U,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [U]
      }
    ]
  }, et = {
    scope: "title",
    begin: D,
    relevance: 0
  }, Nt = {
    scope: "title",
    begin: R,
    relevance: 0
  }, Le = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + R,
    relevance: 0
  };
  var ot = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: H,
    BACKSLASH_ESCAPE: U,
    BINARY_NUMBER_MODE: X,
    BINARY_NUMBER_RE: Z,
    COMMENT: Y,
    C_BLOCK_COMMENT_MODE: qe,
    C_LINE_COMMENT_MODE: ge,
    C_NUMBER_MODE: I,
    C_NUMBER_RE: z,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (w, T) => {
            T.data._beginMatch = w[1];
          },
          /** @type {ModeCallback} */
          "on:end": (w, T) => {
            T.data._beginMatch !== w[1] && T.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Qe,
    IDENT_RE: D,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Le,
    NUMBER_MODE: At,
    NUMBER_RE: O,
    PHRASAL_WORDS_MODE: we,
    QUOTE_STRING_MODE: se,
    REGEXP_MODE: Te,
    RE_STARTERS_RE: oe,
    SHEBANG: G,
    TITLE_MODE: et,
    UNDERSCORE_IDENT_RE: R,
    UNDERSCORE_TITLE_MODE: Nt
  });
  function Ea(b, w) {
    b.input[b.index - 1] === "." && w.ignoreMatch();
  }
  function ka(b, w) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function wa(b, w) {
    w && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = Ea, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Aa(b, w) {
    Array.isArray(b.illegal) && (b.illegal = k(...b.illegal));
  }
  function Ca(b, w) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function Da(b, w) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Sa = (b, w) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const T = Object.assign({}, b);
    Object.keys(b).forEach((q) => {
      delete b[q];
    }), b.keywords = T.keywords, b.begin = m(T.beforeMatch, h(T.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(T, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete T.beforeMatch;
  }, Ta = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Fa = "keyword";
  function ai(b, w, T = Fa) {
    const q = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? de(T, b.split(" ")) : Array.isArray(b) ? de(T, b) : Object.keys(b).forEach(function(he) {
      Object.assign(
        q,
        ai(b[he], w, he)
      );
    }), q;
    function de(he, M) {
      w && (M = M.map((N) => N.toLowerCase())), M.forEach(function(N) {
        const P = N.split("|");
        q[P[0]] = [he, Ra(P[0], P[1])];
      });
    }
  }
  function Ra(b, w) {
    return w ? Number(w) : Oa(b) ? 0 : 1;
  }
  function Oa(b) {
    return Ta.includes(b.toLowerCase());
  }
  const ci = {}, Wt = (b) => {
    console.error(b);
  }, li = (b, ...w) => {
    console.log(`WARN: ${b}`, ...w);
  }, rn = (b, w) => {
    ci[`${b}/${w}`] || (console.log(`Deprecated as of ${b}. ${w}`), ci[`${b}/${w}`] = !0);
  }, Qn = new Error();
  function fi(b, w, { key: T }) {
    let q = 0;
    const de = b[T], he = {}, M = {};
    for (let N = 1; N <= w.length; N++)
      M[N + q] = de[N], he[N + q] = !0, q += y(w[N - 1]);
    b[T] = M, b[T]._emit = he, b[T]._multi = !0;
  }
  function Na(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw Wt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Qn;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw Wt("beginScope must be object"), Qn;
      fi(b, b.begin, { key: "beginScope" }), b.begin = v(b.begin, { joinWith: "" });
    }
  }
  function Ma(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw Wt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Qn;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw Wt("endScope must be object"), Qn;
      fi(b, b.end, { key: "endScope" }), b.end = v(b.end, { joinWith: "" });
    }
  }
  function Ia(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function La(b) {
    Ia(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Na(b), Ma(b);
  }
  function Ba(b) {
    function w(M, N) {
      return new RegExp(
        f(M),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (N ? "g" : "")
      );
    }
    class T {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(N, P) {
        P.position = this.position++, this.matchIndexes[this.matchAt] = P, this.regexes.push([P, N]), this.matchAt += y(N) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const N = this.regexes.map((P) => P[1]);
        this.matcherRe = w(v(N, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(N) {
        this.matcherRe.lastIndex = this.lastIndex;
        const P = this.matcherRe.exec(N);
        if (!P)
          return null;
        const xe = P.findIndex((Dn, Vu) => Vu > 0 && Dn !== void 0), be = this.matchIndexes[xe];
        return P.splice(0, xe), Object.assign(P, be);
      }
    }
    class q {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(N) {
        if (this.multiRegexes[N]) return this.multiRegexes[N];
        const P = new T();
        return this.rules.slice(N).forEach(([xe, be]) => P.addRule(xe, be)), P.compile(), this.multiRegexes[N] = P, P;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(N, P) {
        this.rules.push([N, P]), P.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(N) {
        const P = this.getMatcher(this.regexIndex);
        P.lastIndex = this.lastIndex;
        let xe = P.exec(N);
        if (this.resumingScanAtSamePosition() && !(xe && xe.index === this.lastIndex)) {
          const be = this.getMatcher(0);
          be.lastIndex = this.lastIndex + 1, xe = be.exec(N);
        }
        return xe && (this.regexIndex += xe.position + 1, this.regexIndex === this.count && this.considerAll()), xe;
      }
    }
    function de(M) {
      const N = new q();
      return M.contains.forEach((P) => N.addRule(P.begin, { rule: P, type: "begin" })), M.terminatorEnd && N.addRule(M.terminatorEnd, { type: "end" }), M.illegal && N.addRule(M.illegal, { type: "illegal" }), N;
    }
    function he(M, N) {
      const P = (
        /** @type CompiledMode */
        M
      );
      if (M.isCompiled) return P;
      [
        ka,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ca,
        La,
        Sa
      ].forEach((be) => be(M, N)), b.compilerExtensions.forEach((be) => be(M, N)), M.__beforeBegin = null, [
        wa,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Aa,
        // default to 1 relevance if not specified
        Da
      ].forEach((be) => be(M, N)), M.isCompiled = !0;
      let xe = null;
      return typeof M.keywords == "object" && M.keywords.$pattern && (M.keywords = Object.assign({}, M.keywords), xe = M.keywords.$pattern, delete M.keywords.$pattern), xe = xe || /\w+/, M.keywords && (M.keywords = ai(M.keywords, b.case_insensitive)), P.keywordPatternRe = w(xe, !0), N && (M.begin || (M.begin = /\B|\b/), P.beginRe = w(P.begin), !M.end && !M.endsWithParent && (M.end = /\B|\b/), M.end && (P.endRe = w(P.end)), P.terminatorEnd = f(P.end) || "", M.endsWithParent && N.terminatorEnd && (P.terminatorEnd += (M.end ? "|" : "") + N.terminatorEnd)), M.illegal && (P.illegalRe = w(
        /** @type {RegExp | string} */
        M.illegal
      )), M.contains || (M.contains = []), M.contains = [].concat(...M.contains.map(function(be) {
        return za(be === "self" ? M : be);
      })), M.contains.forEach(function(be) {
        he(
          /** @type Mode */
          be,
          P
        );
      }), M.starts && he(M.starts, N), P.matcher = de(P), P;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = u(b.classNameAliases || {}), he(
      /** @type Mode */
      b
    );
  }
  function di(b) {
    return b ? b.endsWithParent || di(b.starts) : !1;
  }
  function za(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(w) {
      return u(b, { variants: null }, w);
    })), b.cachedVariants ? b.cachedVariants : di(b) ? u(b, { starts: b.starts ? u(b.starts) : null }) : Object.isFrozen(b) ? u(b) : b;
  }
  var Pa = "11.11.1";
  class qa extends Error {
    constructor(w, T) {
      super(w), this.name = "HTMLInjectionError", this.html = T;
    }
  }
  const Wu = n, hi = u, pi = Symbol("nomatch"), ja = 7, bi = function(b) {
    const w = /* @__PURE__ */ Object.create(null), T = /* @__PURE__ */ Object.create(null), q = [];
    let de = !0;
    const he = "Could not find the language '{}', did you forget to load/include a language module?", M = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let N = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: l
    };
    function P(C) {
      return N.noHighlightRe.test(C);
    }
    function xe(C) {
      let B = C.className + " ";
      B += C.parentNode ? C.parentNode.className : "";
      const K = N.languageDetectRe.exec(B);
      if (K) {
        const ue = Mt(K[1]);
        return ue || (li(he.replace("{}", K[1])), li("Falling back to no-highlight mode for this block.", C)), ue ? K[1] : "no-highlight";
      }
      return B.split(/\s+/).find((ue) => P(ue) || Mt(ue));
    }
    function be(C, B, K) {
      let ue = "", me = "";
      typeof B == "object" ? (ue = C, K = B.ignoreIllegals, me = B.language) : (rn("10.7.0", "highlight(lang, code, ...args) has been deprecated."), rn("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), me = C, ue = B), K === void 0 && (K = !0);
      const st = {
        code: ue,
        language: me
      };
      tu("before:highlight", st);
      const It = st.result ? st.result : Dn(st.language, st.code, K);
      return It.code = st.code, tu("after:highlight", It), It;
    }
    function Dn(C, B, K, ue) {
      const me = /* @__PURE__ */ Object.create(null);
      function st(F, L) {
        return F.keywords[L];
      }
      function It() {
        if (!j.keywords) {
          Ae.addText(re);
          return;
        }
        let F = 0;
        j.keywordPatternRe.lastIndex = 0;
        let L = j.keywordPatternRe.exec(re), V = "";
        for (; L; ) {
          V += re.substring(F, L.index);
          const Q = gt.case_insensitive ? L[0].toLowerCase() : L[0], Fe = st(j, Q);
          if (Fe) {
            const [Dt, rc] = Fe;
            if (Ae.addText(V), V = "", me[Q] = (me[Q] || 0) + 1, me[Q] <= ja && (ru += rc), Dt.startsWith("_"))
              V += L[0];
            else {
              const ic = gt.classNameAliases[Dt] || Dt;
              bt(L[0], ic);
            }
          } else
            V += L[0];
          F = j.keywordPatternRe.lastIndex, L = j.keywordPatternRe.exec(re);
        }
        V += re.substring(F), Ae.addText(V);
      }
      function nu() {
        if (re === "") return;
        let F = null;
        if (typeof j.subLanguage == "string") {
          if (!w[j.subLanguage]) {
            Ae.addText(re);
            return;
          }
          F = Dn(j.subLanguage, re, !0, ki[j.subLanguage]), ki[j.subLanguage] = /** @type {CompiledMode} */
          F._top;
        } else
          F = Gu(re, j.subLanguage.length ? j.subLanguage : null);
        j.relevance > 0 && (ru += F.relevance), Ae.__addSublanguage(F._emitter, F.language);
      }
      function Ke() {
        j.subLanguage != null ? nu() : It(), re = "";
      }
      function bt(F, L) {
        F !== "" && (Ae.startScope(L), Ae.addText(F), Ae.endScope());
      }
      function xi(F, L) {
        let V = 1;
        const Q = L.length - 1;
        for (; V <= Q; ) {
          if (!F._emit[V]) {
            V++;
            continue;
          }
          const Fe = gt.classNameAliases[F[V]] || F[V], Dt = L[V];
          Fe ? bt(Dt, Fe) : (re = Dt, It(), re = ""), V++;
        }
      }
      function vi(F, L) {
        return F.scope && typeof F.scope == "string" && Ae.openNode(gt.classNameAliases[F.scope] || F.scope), F.beginScope && (F.beginScope._wrap ? (bt(re, gt.classNameAliases[F.beginScope._wrap] || F.beginScope._wrap), re = "") : F.beginScope._multi && (xi(F.beginScope, L), re = "")), j = Object.create(F, { parent: { value: j } }), j;
      }
      function yi(F, L, V) {
        let Q = x(F.endRe, V);
        if (Q) {
          if (F["on:end"]) {
            const Fe = new t(F);
            F["on:end"](L, Fe), Fe.isMatchIgnored && (Q = !1);
          }
          if (Q) {
            for (; F.endsParent && F.parent; )
              F = F.parent;
            return F;
          }
        }
        if (F.endsWithParent)
          return yi(F.parent, L, V);
      }
      function Qa(F) {
        return j.matcher.regexIndex === 0 ? (re += F[0], 1) : (Yu = !0, 0);
      }
      function ec(F) {
        const L = F[0], V = F.rule, Q = new t(V), Fe = [V.__beforeBegin, V["on:begin"]];
        for (const Dt of Fe)
          if (Dt && (Dt(F, Q), Q.isMatchIgnored))
            return Qa(L);
        return V.skip ? re += L : (V.excludeBegin && (re += L), Ke(), !V.returnBegin && !V.excludeBegin && (re = L)), vi(V, F), V.returnBegin ? 0 : L.length;
      }
      function tc(F) {
        const L = F[0], V = B.substring(F.index), Q = yi(j, F, V);
        if (!Q)
          return pi;
        const Fe = j;
        j.endScope && j.endScope._wrap ? (Ke(), bt(L, j.endScope._wrap)) : j.endScope && j.endScope._multi ? (Ke(), xi(j.endScope, F)) : Fe.skip ? re += L : (Fe.returnEnd || Fe.excludeEnd || (re += L), Ke(), Fe.excludeEnd && (re = L));
        do
          j.scope && Ae.closeNode(), !j.skip && !j.subLanguage && (ru += j.relevance), j = j.parent;
        while (j !== Q.parent);
        return Q.starts && vi(Q.starts, F), Fe.returnEnd ? 0 : L.length;
      }
      function nc() {
        const F = [];
        for (let L = j; L !== gt; L = L.parent)
          L.scope && F.unshift(L.scope);
        F.forEach((L) => Ae.openNode(L));
      }
      let uu = {};
      function Ei(F, L) {
        const V = L && L[0];
        if (re += F, V == null)
          return Ke(), 0;
        if (uu.type === "begin" && L.type === "end" && uu.index === L.index && V === "") {
          if (re += B.slice(L.index, L.index + 1), !de) {
            const Q = new Error(`0 width match regex (${C})`);
            throw Q.languageName = C, Q.badRule = uu.rule, Q;
          }
          return 1;
        }
        if (uu = L, L.type === "begin")
          return ec(L);
        if (L.type === "illegal" && !K) {
          const Q = new Error('Illegal lexeme "' + V + '" for mode "' + (j.scope || "<unnamed>") + '"');
          throw Q.mode = j, Q;
        } else if (L.type === "end") {
          const Q = tc(L);
          if (Q !== pi)
            return Q;
        }
        if (L.type === "illegal" && V === "")
          return re += `
`, 1;
        if (Ju > 1e5 && Ju > L.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return re += V, V.length;
      }
      const gt = Mt(C);
      if (!gt)
        throw Wt(he.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const uc = Ba(gt);
      let Ku = "", j = ue || uc;
      const ki = {}, Ae = new N.__emitter(N);
      nc();
      let re = "", ru = 0, Vt = 0, Ju = 0, Yu = !1;
      try {
        if (gt.__emitTokens)
          gt.__emitTokens(B, Ae);
        else {
          for (j.matcher.considerAll(); ; ) {
            Ju++, Yu ? Yu = !1 : j.matcher.considerAll(), j.matcher.lastIndex = Vt;
            const F = j.matcher.exec(B);
            if (!F) break;
            const L = B.substring(Vt, F.index), V = Ei(L, F);
            Vt = F.index + V;
          }
          Ei(B.substring(Vt));
        }
        return Ae.finalize(), Ku = Ae.toHTML(), {
          language: C,
          value: Ku,
          relevance: ru,
          illegal: !1,
          _emitter: Ae,
          _top: j
        };
      } catch (F) {
        if (F.message && F.message.includes("Illegal"))
          return {
            language: C,
            value: Wu(B),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: F.message,
              index: Vt,
              context: B.slice(Vt - 100, Vt + 100),
              mode: F.mode,
              resultSoFar: Ku
            },
            _emitter: Ae
          };
        if (de)
          return {
            language: C,
            value: Wu(B),
            illegal: !1,
            relevance: 0,
            errorRaised: F,
            _emitter: Ae,
            _top: j
          };
        throw F;
      }
    }
    function Vu(C) {
      const B = {
        value: Wu(C),
        illegal: !1,
        relevance: 0,
        _top: M,
        _emitter: new N.__emitter(N)
      };
      return B._emitter.addText(C), B;
    }
    function Gu(C, B) {
      B = B || N.languages || Object.keys(w);
      const K = Vu(C), ue = B.filter(Mt).filter(_i).map(
        (Ke) => Dn(Ke, C, !1)
      );
      ue.unshift(K);
      const me = ue.sort((Ke, bt) => {
        if (Ke.relevance !== bt.relevance) return bt.relevance - Ke.relevance;
        if (Ke.language && bt.language) {
          if (Mt(Ke.language).supersetOf === bt.language)
            return 1;
          if (Mt(bt.language).supersetOf === Ke.language)
            return -1;
        }
        return 0;
      }), [st, It] = me, nu = st;
      return nu.secondBest = It, nu;
    }
    function Ua(C, B, K) {
      const ue = B && T[B] || K;
      C.classList.add("hljs"), C.classList.add(`language-${ue}`);
    }
    function Zu(C) {
      let B = null;
      const K = xe(C);
      if (P(K)) return;
      if (tu(
        "before:highlightElement",
        { el: C, language: K }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (N.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), N.throwUnescapedHTML))
        throw new qa(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      B = C;
      const ue = B.textContent, me = K ? be(ue, { language: K, ignoreIllegals: !0 }) : Gu(ue);
      C.innerHTML = me.value, C.dataset.highlighted = "yes", Ua(C, K, me.language), C.result = {
        language: me.language,
        // TODO: remove with version 11.0
        re: me.relevance,
        relevance: me.relevance
      }, me.secondBest && (C.secondBest = {
        language: me.secondBest.language,
        relevance: me.secondBest.relevance
      }), tu("after:highlightElement", { el: C, result: me, text: ue });
    }
    function $a(C) {
      N = hi(N, C);
    }
    const Ha = () => {
      eu(), rn("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Wa() {
      eu(), rn("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let gi = !1;
    function eu() {
      function C() {
        eu();
      }
      if (document.readyState === "loading") {
        gi || window.addEventListener("DOMContentLoaded", C, !1), gi = !0;
        return;
      }
      document.querySelectorAll(N.cssSelector).forEach(Zu);
    }
    function Va(C, B) {
      let K = null;
      try {
        K = B(b);
      } catch (ue) {
        if (Wt("Language definition for '{}' could not be registered.".replace("{}", C)), de)
          Wt(ue);
        else
          throw ue;
        K = M;
      }
      K.name || (K.name = C), w[C] = K, K.rawDefinition = B.bind(null, b), K.aliases && mi(K.aliases, { languageName: C });
    }
    function Ga(C) {
      delete w[C];
      for (const B of Object.keys(T))
        T[B] === C && delete T[B];
    }
    function Za() {
      return Object.keys(w);
    }
    function Mt(C) {
      return C = (C || "").toLowerCase(), w[C] || w[T[C]];
    }
    function mi(C, { languageName: B }) {
      typeof C == "string" && (C = [C]), C.forEach((K) => {
        T[K.toLowerCase()] = B;
      });
    }
    function _i(C) {
      const B = Mt(C);
      return B && !B.disableAutodetect;
    }
    function Ka(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (B) => {
        C["before:highlightBlock"](
          Object.assign({ block: B.el }, B)
        );
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (B) => {
        C["after:highlightBlock"](
          Object.assign({ block: B.el }, B)
        );
      });
    }
    function Ja(C) {
      Ka(C), q.push(C);
    }
    function Ya(C) {
      const B = q.indexOf(C);
      B !== -1 && q.splice(B, 1);
    }
    function tu(C, B) {
      const K = C;
      q.forEach(function(ue) {
        ue[K] && ue[K](B);
      });
    }
    function Xa(C) {
      return rn("10.7.0", "highlightBlock will be removed entirely in v12.0"), rn("10.7.0", "Please use highlightElement now."), Zu(C);
    }
    Object.assign(b, {
      highlight: be,
      highlightAuto: Gu,
      highlightAll: eu,
      highlightElement: Zu,
      // TODO: Remove with v12 API
      highlightBlock: Xa,
      configure: $a,
      initHighlighting: Ha,
      initHighlightingOnLoad: Wa,
      registerLanguage: Va,
      unregisterLanguage: Ga,
      listLanguages: Za,
      getLanguage: Mt,
      registerAliases: mi,
      autoDetection: _i,
      inherit: hi,
      addPlugin: Ja,
      removePlugin: Ya
    }), b.debugMode = function() {
      de = !1;
    }, b.safeMode = function() {
      de = !0;
    }, b.versionString = Pa, b.regex = {
      concat: m,
      lookahead: h,
      either: k,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const C in ot)
      typeof ot[C] == "object" && e(ot[C]);
    return Object.assign(b, ot), b;
  }, on = bi({});
  return on.newInstance = () => bi({}), mr = on, on.HighlightJS = on, on.default = on, mr;
}
var xh = /* @__PURE__ */ _h();
const Me = /* @__PURE__ */ mh(xh), ko = "[A-Za-z$_][0-9A-Za-z$_]*", vh = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], yh = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], _a = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], xa = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], va = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Eh = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], kh = [].concat(
  va,
  _a,
  xa
);
function wh(e) {
  const t = e.regex, n = (Y, { after: ge }) => {
    const qe = "</" + Y[0].slice(1);
    return Y.input.indexOf(qe, ge) !== -1;
  }, u = ko, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Y, ge) => {
      const qe = Y[0].length + Y.index, Qe = Y.input[qe];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Qe === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Qe === ","
      ) {
        ge.ignoreMatch();
        return;
      }
      Qe === ">" && (n(Y, { after: qe }) || ge.ignoreMatch());
      let At;
      const I = Y.input.substring(qe);
      if (At = I.match(/^\s*=/)) {
        ge.ignoreMatch();
        return;
      }
      if ((At = I.match(/^\s+extends\s+/)) && At.index === 0) {
        ge.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: ko,
    keyword: vh,
    literal: yh,
    built_in: kh,
    "variable.language": Eh
  }, a = "[0-9](_?[0-9])*", c = `\\.(${a})`, l = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", f = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${l})((${c})|\\.)?|(${c}))[eE][+-]?(${a})\\b` },
      { begin: `\\b(${l})\\b((${c})\\b|\\.)?|(${c})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, h = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: s,
    contains: []
    // defined later
  }, p = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        h
      ],
      subLanguage: "xml"
    }
  }, d = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        h
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        h
      ],
      subLanguage: "graphql"
    }
  }, g = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      h
    ]
  }, y = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: u + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, x = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    m,
    g,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = x.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(x)
  });
  const _ = [].concat(y, h.contains), v = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(_)
    }
  ]), A = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: v
  }, D = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          u,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(u, "(", t.concat(/\./, u), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          u
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, R = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ..._a,
        ...xa
      ]
    }
  }, O = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, z = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          u,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [A],
    illegal: /%/
  }, Z = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function oe(Y) {
    return t.concat("(?!", Y.join("|"), ")");
  }
  const G = {
    match: t.concat(
      /\b/,
      oe([
        ...va,
        "super",
        "import"
      ].map((Y) => `${Y}\\s*\\(`)),
      u,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, U = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(u, /(?![0-9A-Za-z$_(])/)
    )),
    end: u,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, H = {
    match: [
      /get|set/,
      /\s+/,
      u,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      A
    ]
  }, se = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", we = {
    match: [
      /const|var|let/,
      /\s+/,
      u,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(se)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      A
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: v, CLASS_REFERENCE: R },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      O,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      m,
      g,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      R,
      {
        scope: "attr",
        match: u + t.lookahead(":"),
        relevance: 0
      },
      we,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: se,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: s,
                    contains: v
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: r.begin, end: r.end },
              { match: i },
              {
                begin: o.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": o.isTrulyOpeningTag,
                end: o.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: o.begin,
                end: o.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      z,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          A,
          e.inherit(e.TITLE_MODE, { begin: u, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      U,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + u,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      G,
      Z,
      D,
      H,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Ah(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, n = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, u = [
    "true",
    "false",
    "null"
  ], r = {
    scope: "literal",
    beginKeywords: u.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: u
    },
    contains: [
      t,
      n,
      e.QUOTE_STRING_MODE,
      r,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function ya(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), u = /[\p{L}0-9._:-]+/u, r = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, i = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, o = e.inherit(i, {
    begin: /\(/,
    end: /\)/
  }), s = e.inherit(e.APOS_STRING_MODE, { className: "string" }), a = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), c = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: u,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [r]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [r]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          i,
          a,
          s,
          o,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  i,
                  o,
                  a,
                  s
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      r,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              a
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [c],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [c],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: c
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
const Ch = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Dh = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], Sh = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Th = [
  ...Dh,
  ...Sh
], Fh = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Rh = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Oh = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Nh = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function Mh(e) {
  const t = e.regex, n = Ch(e), u = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      u,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + o,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Rh.join("|") + ")" },
          { begin: ":(:)?(" + Oh.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Nh.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...s,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...s,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: i
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: r,
              attribute: Fh.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Th.join("|") + ")\\b"
      }
    ]
  };
}
function Ih(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, u = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, r = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, i = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, o = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, s = /[A-Za-z][A-Za-z0-9+.-]*/, a = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, s, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, c = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, l = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, f = e.inherit(c, { contains: [] }), h = e.inherit(l, { contains: [] });
  c.contains.push(h), l.contains.push(f);
  let p = [
    n,
    a
  ];
  return [
    c,
    l,
    f,
    h
  ].forEach((k) => {
    k.contains = k.contains.concat(p);
  }), p = p.concat(c, l), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: p
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: p
              }
            ]
          }
        ]
      },
      n,
      i,
      c,
      l,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: p,
        end: "$"
      },
      r,
      u,
      a,
      o,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
function Lh(e) {
  const t = e.regex, n = /(?![A-Za-z0-9])(?![$])/, u = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    n
  ), r = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    n
  ), i = t.concat(
    /[A-Z]+/,
    n
  ), o = {
    scope: "variable",
    match: "\\$+" + u
  }, s = {
    scope: "meta",
    variants: [
      { begin: /<\?php/, relevance: 10 },
      // boost for obvious PHP
      { begin: /<\?=/ },
      // less relevant per PSR-1 which says not to use short-tags
      { begin: /<\?/, relevance: 0.1 },
      { begin: /\?>/ }
      // end php tag
    ]
  }, a = {
    scope: "subst",
    variants: [
      { begin: /\$\w+/ },
      {
        begin: /\{\$/,
        end: /\}/
      }
    ]
  }, c = e.inherit(e.APOS_STRING_MODE, { illegal: null }), l = e.inherit(e.QUOTE_STRING_MODE, {
    illegal: null,
    contains: e.QUOTE_STRING_MODE.contains.concat(a)
  }), f = {
    begin: /<<<[ \t]*(?:(\w+)|"(\w+)")\n/,
    end: /[ \t]*(\w+)\b/,
    contains: e.QUOTE_STRING_MODE.contains.concat(a),
    "on:begin": (U, H) => {
      H.data._beginMatch = U[1] || U[2];
    },
    "on:end": (U, H) => {
      H.data._beginMatch !== U[1] && H.ignoreMatch();
    }
  }, h = e.END_SAME_AS_BEGIN({
    begin: /<<<[ \t]*'(\w+)'\n/,
    end: /[ \t]*(\w+)\b/
  }), p = `[ 	
]`, d = {
    scope: "string",
    variants: [
      l,
      c,
      f,
      h
    ]
  }, m = {
    scope: "number",
    variants: [
      { begin: "\\b0[bB][01]+(?:_[01]+)*\\b" },
      // Binary w/ underscore support
      { begin: "\\b0[oO][0-7]+(?:_[0-7]+)*\\b" },
      // Octals w/ underscore support
      { begin: "\\b0[xX][\\da-fA-F]+(?:_[\\da-fA-F]+)*\\b" },
      // Hex w/ underscore support
      // Decimals w/ underscore support, with optional fragments and scientific exponent (e) suffix.
      { begin: "(?:\\b\\d+(?:_\\d+)*(\\.(?:\\d+(?:_\\d+)*))?|\\B\\.\\d+)(?:[eE][+-]?\\d+)?" }
    ],
    relevance: 0
  }, g = [
    "false",
    "null",
    "true"
  ], k = [
    // Magic constants:
    // <https://www.php.net/manual/en/language.constants.predefined.php>
    "__CLASS__",
    "__DIR__",
    "__FILE__",
    "__FUNCTION__",
    "__COMPILER_HALT_OFFSET__",
    "__LINE__",
    "__METHOD__",
    "__NAMESPACE__",
    "__TRAIT__",
    // Function that look like language construct or language construct that look like function:
    // List of keywords that may not require parenthesis
    "die",
    "echo",
    "exit",
    "include",
    "include_once",
    "print",
    "require",
    "require_once",
    // These are not language construct (function) but operate on the currently-executing function and can access the current symbol table
    // 'compact extract func_get_arg func_get_args func_num_args get_called_class get_parent_class ' +
    // Other keywords:
    // <https://www.php.net/manual/en/reserved.php>
    // <https://www.php.net/manual/en/language.types.type-juggling.php>
    "array",
    "abstract",
    "and",
    "as",
    "binary",
    "bool",
    "boolean",
    "break",
    "callable",
    "case",
    "catch",
    "class",
    "clone",
    "const",
    "continue",
    "declare",
    "default",
    "do",
    "double",
    "else",
    "elseif",
    "empty",
    "enddeclare",
    "endfor",
    "endforeach",
    "endif",
    "endswitch",
    "endwhile",
    "enum",
    "eval",
    "extends",
    "final",
    "finally",
    "float",
    "for",
    "foreach",
    "from",
    "global",
    "goto",
    "if",
    "implements",
    "instanceof",
    "insteadof",
    "int",
    "integer",
    "interface",
    "isset",
    "iterable",
    "list",
    "match|0",
    "mixed",
    "new",
    "never",
    "object",
    "or",
    "private",
    "protected",
    "public",
    "readonly",
    "real",
    "return",
    "string",
    "switch",
    "throw",
    "trait",
    "try",
    "unset",
    "use",
    "var",
    "void",
    "while",
    "xor",
    "yield"
  ], y = [
    // Standard PHP library:
    // <https://www.php.net/manual/en/book.spl.php>
    "Error|0",
    "AppendIterator",
    "ArgumentCountError",
    "ArithmeticError",
    "ArrayIterator",
    "ArrayObject",
    "AssertionError",
    "BadFunctionCallException",
    "BadMethodCallException",
    "CachingIterator",
    "CallbackFilterIterator",
    "CompileError",
    "Countable",
    "DirectoryIterator",
    "DivisionByZeroError",
    "DomainException",
    "EmptyIterator",
    "ErrorException",
    "Exception",
    "FilesystemIterator",
    "FilterIterator",
    "GlobIterator",
    "InfiniteIterator",
    "InvalidArgumentException",
    "IteratorIterator",
    "LengthException",
    "LimitIterator",
    "LogicException",
    "MultipleIterator",
    "NoRewindIterator",
    "OutOfBoundsException",
    "OutOfRangeException",
    "OuterIterator",
    "OverflowException",
    "ParentIterator",
    "ParseError",
    "RangeException",
    "RecursiveArrayIterator",
    "RecursiveCachingIterator",
    "RecursiveCallbackFilterIterator",
    "RecursiveDirectoryIterator",
    "RecursiveFilterIterator",
    "RecursiveIterator",
    "RecursiveIteratorIterator",
    "RecursiveRegexIterator",
    "RecursiveTreeIterator",
    "RegexIterator",
    "RuntimeException",
    "SeekableIterator",
    "SplDoublyLinkedList",
    "SplFileInfo",
    "SplFileObject",
    "SplFixedArray",
    "SplHeap",
    "SplMaxHeap",
    "SplMinHeap",
    "SplObjectStorage",
    "SplObserver",
    "SplPriorityQueue",
    "SplQueue",
    "SplStack",
    "SplSubject",
    "SplTempFileObject",
    "TypeError",
    "UnderflowException",
    "UnexpectedValueException",
    "UnhandledMatchError",
    // Reserved interfaces:
    // <https://www.php.net/manual/en/reserved.interfaces.php>
    "ArrayAccess",
    "BackedEnum",
    "Closure",
    "Fiber",
    "Generator",
    "Iterator",
    "IteratorAggregate",
    "Serializable",
    "Stringable",
    "Throwable",
    "Traversable",
    "UnitEnum",
    "WeakReference",
    "WeakMap",
    // Reserved classes:
    // <https://www.php.net/manual/en/reserved.classes.php>
    "Directory",
    "__PHP_Incomplete_Class",
    "parent",
    "php_user_filter",
    "self",
    "static",
    "stdClass"
  ], _ = {
    keyword: k,
    literal: ((U) => {
      const H = [];
      return U.forEach((se) => {
        H.push(se), se.toLowerCase() === se ? H.push(se.toUpperCase()) : H.push(se.toLowerCase());
      }), H;
    })(g),
    built_in: y
  }, v = (U) => U.map((H) => H.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", v(y).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, D = t.concat(u, "\\b(?!\\()"), R = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        D
      ],
      scope: { 2: "variable.constant" }
    },
    {
      match: [
        /::/,
        /class/
      ],
      scope: { 2: "variable.language" }
    },
    {
      match: [
        r,
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        D
      ],
      scope: {
        1: "title.class",
        3: "variable.constant"
      }
    },
    {
      match: [
        r,
        t.concat(
          "::",
          t.lookahead(/(?!class\b)/)
        )
      ],
      scope: { 1: "title.class" }
    },
    {
      match: [
        r,
        /::/,
        /class/
      ],
      scope: {
        1: "title.class",
        3: "variable.language"
      }
    }
  ] }, O = {
    scope: "attr",
    match: t.concat(u, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, z = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: _,
    contains: [
      O,
      o,
      R,
      e.C_BLOCK_COMMENT_MODE,
      d,
      m,
      A
    ]
  }, Z = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", v(k).join("\\b|"), "|", v(y).join("\\b|"), "\\b)"),
      u,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [z]
  };
  z.contains.push(Z);
  const oe = [
    O,
    R,
    e.C_BLOCK_COMMENT_MODE,
    d,
    m,
    A
  ], G = {
    begin: t.concat(
      /#\[\s*\\?/,
      t.either(
        r,
        i
      )
    ),
    beginScope: "meta",
    end: /]/,
    endScope: "meta",
    keywords: {
      literal: g,
      keyword: [
        "new",
        "array"
      ]
    },
    contains: [
      {
        begin: /\[/,
        end: /]/,
        keywords: {
          literal: g,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...oe
        ]
      },
      ...oe,
      {
        scope: "meta",
        variants: [
          { match: r },
          { match: i }
        ]
      }
    ]
  };
  return {
    case_insensitive: !1,
    keywords: _,
    contains: [
      G,
      e.HASH_COMMENT_MODE,
      e.COMMENT("//", "$"),
      e.COMMENT(
        "/\\*",
        "\\*/",
        { contains: [
          {
            scope: "doctag",
            match: "@[A-Za-z]+"
          }
        ] }
      ),
      {
        match: /__halt_compiler\(\);/,
        keywords: "__halt_compiler",
        starts: {
          scope: "comment",
          end: e.MATCH_NOTHING_RE,
          contains: [
            {
              match: /\?>/,
              scope: "meta",
              endsParent: !0
            }
          ]
        }
      },
      s,
      {
        scope: "variable.language",
        match: /\$this\b/
      },
      o,
      Z,
      R,
      {
        match: [
          /const/,
          /\s/,
          u
        ],
        scope: {
          1: "keyword",
          3: "variable.constant"
        }
      },
      A,
      {
        scope: "function",
        relevance: 0,
        beginKeywords: "fn function",
        end: /[;{]/,
        excludeEnd: !0,
        illegal: "[$%\\[]",
        contains: [
          { beginKeywords: "use" },
          e.UNDERSCORE_TITLE_MODE,
          {
            begin: "=>",
            // No markup, just a relevance booster
            endsParent: !0
          },
          {
            scope: "params",
            begin: "\\(",
            end: "\\)",
            excludeBegin: !0,
            excludeEnd: !0,
            keywords: _,
            contains: [
              "self",
              G,
              o,
              R,
              e.C_BLOCK_COMMENT_MODE,
              d,
              m
            ]
          }
        ]
      },
      {
        scope: "class",
        variants: [
          {
            beginKeywords: "enum",
            illegal: /[($"]/
          },
          {
            beginKeywords: "class interface trait",
            illegal: /[:($"]/
          }
        ],
        relevance: 0,
        end: /\{/,
        excludeEnd: !0,
        contains: [
          { beginKeywords: "extends implements" },
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      // both use and namespace still use "old style" rules (vs multi-match)
      // because the namespace name can include `\` and we still want each
      // element to be treated as its own *individual* title
      {
        beginKeywords: "namespace",
        relevance: 0,
        end: ";",
        illegal: /[.']/,
        contains: [e.inherit(e.UNDERSCORE_TITLE_MODE, { scope: "title.class" })]
      },
      {
        beginKeywords: "use",
        relevance: 0,
        end: ";",
        contains: [
          // TODO: title.function vs title.class
          {
            match: /\b(as|const|function)\b/,
            scope: "keyword"
          },
          // TODO: could be title.class or title.function
          e.UNDERSCORE_TITLE_MODE
        ]
      },
      d,
      m
    ]
  };
}
function Bh(e) {
  const t = e.regex, n = e.COMMENT("--", "$"), u = {
    scope: "string",
    variants: [
      {
        begin: /'/,
        end: /'/,
        contains: [{ match: /''/ }]
      }
    ]
  }, r = {
    begin: /"/,
    end: /"/,
    contains: [{ match: /""/ }]
  }, i = [
    "true",
    "false",
    // Not sure it's correct to call NULL literal, and clauses like IS [NOT] NULL look strange that way.
    // "null",
    "unknown"
  ], o = [
    "double precision",
    "large object",
    "with timezone",
    "without timezone"
  ], s = [
    "bigint",
    "binary",
    "blob",
    "boolean",
    "char",
    "character",
    "clob",
    "date",
    "dec",
    "decfloat",
    "decimal",
    "float",
    "int",
    "integer",
    "interval",
    "nchar",
    "nclob",
    "national",
    "numeric",
    "real",
    "row",
    "smallint",
    "time",
    "timestamp",
    "varchar",
    "varying",
    // modifier (character varying)
    "varbinary"
  ], a = [
    "add",
    "asc",
    "collation",
    "desc",
    "final",
    "first",
    "last",
    "view"
  ], c = [
    "abs",
    "acos",
    "all",
    "allocate",
    "alter",
    "and",
    "any",
    "are",
    "array",
    "array_agg",
    "array_max_cardinality",
    "as",
    "asensitive",
    "asin",
    "asymmetric",
    "at",
    "atan",
    "atomic",
    "authorization",
    "avg",
    "begin",
    "begin_frame",
    "begin_partition",
    "between",
    "bigint",
    "binary",
    "blob",
    "boolean",
    "both",
    "by",
    "call",
    "called",
    "cardinality",
    "cascaded",
    "case",
    "cast",
    "ceil",
    "ceiling",
    "char",
    "char_length",
    "character",
    "character_length",
    "check",
    "classifier",
    "clob",
    "close",
    "coalesce",
    "collate",
    "collect",
    "column",
    "commit",
    "condition",
    "connect",
    "constraint",
    "contains",
    "convert",
    "copy",
    "corr",
    "corresponding",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "create",
    "cross",
    "cube",
    "cume_dist",
    "current",
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_row",
    "current_schema",
    "current_time",
    "current_timestamp",
    "current_path",
    "current_role",
    "current_transform_group_for_type",
    "current_user",
    "cursor",
    "cycle",
    "date",
    "day",
    "deallocate",
    "dec",
    "decimal",
    "decfloat",
    "declare",
    "default",
    "define",
    "delete",
    "dense_rank",
    "deref",
    "describe",
    "deterministic",
    "disconnect",
    "distinct",
    "double",
    "drop",
    "dynamic",
    "each",
    "element",
    "else",
    "empty",
    "end",
    "end_frame",
    "end_partition",
    "end-exec",
    "equals",
    "escape",
    "every",
    "except",
    "exec",
    "execute",
    "exists",
    "exp",
    "external",
    "extract",
    "false",
    "fetch",
    "filter",
    "first_value",
    "float",
    "floor",
    "for",
    "foreign",
    "frame_row",
    "free",
    "from",
    "full",
    "function",
    "fusion",
    "get",
    "global",
    "grant",
    "group",
    "grouping",
    "groups",
    "having",
    "hold",
    "hour",
    "identity",
    "in",
    "indicator",
    "initial",
    "inner",
    "inout",
    "insensitive",
    "insert",
    "int",
    "integer",
    "intersect",
    "intersection",
    "interval",
    "into",
    "is",
    "join",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "language",
    "large",
    "last_value",
    "lateral",
    "lead",
    "leading",
    "left",
    "like",
    "like_regex",
    "listagg",
    "ln",
    "local",
    "localtime",
    "localtimestamp",
    "log",
    "log10",
    "lower",
    "match",
    "match_number",
    "match_recognize",
    "matches",
    "max",
    "member",
    "merge",
    "method",
    "min",
    "minute",
    "mod",
    "modifies",
    "module",
    "month",
    "multiset",
    "national",
    "natural",
    "nchar",
    "nclob",
    "new",
    "no",
    "none",
    "normalize",
    "not",
    "nth_value",
    "ntile",
    "null",
    "nullif",
    "numeric",
    "octet_length",
    "occurrences_regex",
    "of",
    "offset",
    "old",
    "omit",
    "on",
    "one",
    "only",
    "open",
    "or",
    "order",
    "out",
    "outer",
    "over",
    "overlaps",
    "overlay",
    "parameter",
    "partition",
    "pattern",
    "per",
    "percent",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "period",
    "portion",
    "position",
    "position_regex",
    "power",
    "precedes",
    "precision",
    "prepare",
    "primary",
    "procedure",
    "ptf",
    "range",
    "rank",
    "reads",
    "real",
    "recursive",
    "ref",
    "references",
    "referencing",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "release",
    "result",
    "return",
    "returns",
    "revoke",
    "right",
    "rollback",
    "rollup",
    "row",
    "row_number",
    "rows",
    "running",
    "savepoint",
    "scope",
    "scroll",
    "search",
    "second",
    "seek",
    "select",
    "sensitive",
    "session_user",
    "set",
    "show",
    "similar",
    "sin",
    "sinh",
    "skip",
    "smallint",
    "some",
    "specific",
    "specifictype",
    "sql",
    "sqlexception",
    "sqlstate",
    "sqlwarning",
    "sqrt",
    "start",
    "static",
    "stddev_pop",
    "stddev_samp",
    "submultiset",
    "subset",
    "substring",
    "substring_regex",
    "succeeds",
    "sum",
    "symmetric",
    "system",
    "system_time",
    "system_user",
    "table",
    "tablesample",
    "tan",
    "tanh",
    "then",
    "time",
    "timestamp",
    "timezone_hour",
    "timezone_minute",
    "to",
    "trailing",
    "translate",
    "translate_regex",
    "translation",
    "treat",
    "trigger",
    "trim",
    "trim_array",
    "true",
    "truncate",
    "uescape",
    "union",
    "unique",
    "unknown",
    "unnest",
    "update",
    "upper",
    "user",
    "using",
    "value",
    "values",
    "value_of",
    "var_pop",
    "var_samp",
    "varbinary",
    "varchar",
    "varying",
    "versioning",
    "when",
    "whenever",
    "where",
    "width_bucket",
    "window",
    "with",
    "within",
    "without",
    "year"
  ], l = [
    "abs",
    "acos",
    "array_agg",
    "asin",
    "atan",
    "avg",
    "cast",
    "ceil",
    "ceiling",
    "coalesce",
    "corr",
    "cos",
    "cosh",
    "count",
    "covar_pop",
    "covar_samp",
    "cume_dist",
    "dense_rank",
    "deref",
    "element",
    "exp",
    "extract",
    "first_value",
    "floor",
    "json_array",
    "json_arrayagg",
    "json_exists",
    "json_object",
    "json_objectagg",
    "json_query",
    "json_table",
    "json_table_primitive",
    "json_value",
    "lag",
    "last_value",
    "lead",
    "listagg",
    "ln",
    "log",
    "log10",
    "lower",
    "max",
    "min",
    "mod",
    "nth_value",
    "ntile",
    "nullif",
    "percent_rank",
    "percentile_cont",
    "percentile_disc",
    "position",
    "position_regex",
    "power",
    "rank",
    "regr_avgx",
    "regr_avgy",
    "regr_count",
    "regr_intercept",
    "regr_r2",
    "regr_slope",
    "regr_sxx",
    "regr_sxy",
    "regr_syy",
    "row_number",
    "sin",
    "sinh",
    "sqrt",
    "stddev_pop",
    "stddev_samp",
    "substring",
    "substring_regex",
    "sum",
    "tan",
    "tanh",
    "translate",
    "translate_regex",
    "treat",
    "trim",
    "trim_array",
    "unnest",
    "upper",
    "value_of",
    "var_pop",
    "var_samp",
    "width_bucket"
  ], f = [
    "current_catalog",
    "current_date",
    "current_default_transform_group",
    "current_path",
    "current_role",
    "current_schema",
    "current_transform_group_for_type",
    "current_user",
    "session_user",
    "system_time",
    "system_user",
    "current_time",
    "localtime",
    "current_timestamp",
    "localtimestamp"
  ], h = [
    "create table",
    "insert into",
    "primary key",
    "foreign key",
    "not null",
    "alter table",
    "add constraint",
    "grouping sets",
    "on overflow",
    "character set",
    "respect nulls",
    "ignore nulls",
    "nulls first",
    "nulls last",
    "depth first",
    "breadth first"
  ], p = l, d = [
    ...c,
    ...a
  ].filter((v) => !l.includes(v)), m = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, g = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, k = {
    match: t.concat(/\b/, t.either(...p), /\s*\(/),
    relevance: 0,
    keywords: { built_in: p }
  };
  function y(v) {
    return t.concat(
      /\b/,
      t.either(...v.map((A) => A.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const x = {
    scope: "keyword",
    match: y(h),
    relevance: 0
  };
  function _(v, {
    exceptions: A,
    when: D
  } = {}) {
    const R = D;
    return A = A || [], v.map((O) => O.match(/\|\d+$/) || A.includes(O) ? O : R(O) ? `${O}|0` : O);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: _(d, { when: (v) => v.length < 3 }),
      literal: i,
      type: s,
      built_in: f
    },
    contains: [
      {
        scope: "type",
        match: y(o)
      },
      x,
      k,
      m,
      u,
      r,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      n,
      g
    ]
  };
}
Me.registerLanguage("javascript", wh);
Me.registerLanguage("json", Ah);
Me.registerLanguage("xml", ya);
Me.registerLanguage("html", ya);
Me.registerLanguage("css", Mh);
Me.registerLanguage("markdown", Ih);
Me.registerLanguage("php", Lh);
Me.registerLanguage("sql", Bh);
const lt = new it({
  html: !1,
  linkify: !0,
  typographer: !0,
  langPrefix: "language-",
  highlight: function(e, t) {
    try {
      return t && Me.getLanguage(t) ? Me.highlight(e, {
        language: t,
        ignoreIllegals: !0
      }).value : Me.highlightAuto(e, Me.listLanguages()).value;
    } catch (n) {
      return lt.utils.escapeHtml(e);
    }
  }
});
lt.enable(["table", "strikethrough"]);
lt.renderer.rules.code_inline = function(e, t) {
  const n = e[t];
  return `<code class="md-inline-code">${lt.utils.escapeHtml(n.content)}</code>`;
};
lt.renderer.rules.fence = function(e, t) {
  const n = e[t], u = n.info ? n.info.trim() : "", r = n.content || "", i = u.split(/\s+/g)[0] || "";
  let o = "", s = "plaintext";
  try {
    if (i && Me.getLanguage(i))
      s = i, o = Me.highlight(r, {
        language: i,
        ignoreIllegals: !0
      }).value;
    else {
      const c = Me.highlightAuto(r, Me.listLanguages());
      s = c.language || "plaintext", o = c.value;
    }
  } catch (c) {
    o = lt.utils.escapeHtml(r), s = "plaintext";
  }
  const a = lt.utils.escapeHtml(r);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${s}</span><button type="button" class="copy-code" data-code="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${s}">${o}</code></pre></div>`;
};
lt.renderer.rules.link_open = function(e, t) {
  const n = e[t], u = n.attrIndex("href");
  if (u >= 0) {
    const r = n.attrs[u][1];
    n.attrs[u][1] = lt.utils.escapeHtml(r);
  }
  return n.attrIndex("target") < 0 && n.attrPush(["target", "_blank"]), n.attrIndex("rel") < 0 && n.attrPush(["rel", "noopener noreferrer"]), lt.renderer.renderToken(e, t, {});
};
function zh(e) {
  return e ? lt.render(e) : "";
}
var Ph = /* @__PURE__ */ fe('<img alt="Bot Icon" class="avatar-image svelte-nb7ni2">'), qh = /* @__PURE__ */ fe("<div><!></div>"), jh = /* @__PURE__ */ fe('<div class="text svelte-nb7ni2"> </div>'), Uh = /* @__PURE__ */ fe('<div class="thinking svelte-nb7ni2"><span class="svelte-nb7ni2">Thinking</span> <div class="dots-container svelte-nb7ni2"><span class="dot svelte-nb7ni2"></span> <span class="dot svelte-nb7ni2"></span> <span class="dot svelte-nb7ni2"></span></div></div>'), $h = /* @__PURE__ */ fe('<a target="_blank" rel="noopener noreferrer" class="svelte-nb7ni2"> </a>'), Hh = /* @__PURE__ */ fe('<span class="svelte-nb7ni2"> </span>'), Wh = /* @__PURE__ */ fe('<li class="source-item svelte-nb7ni2"><!></li>'), Vh = /* @__PURE__ */ fe('<div class="sources-block svelte-nb7ni2"><div class="sources-title svelte-nb7ni2">Sources</div> <ul class="sources-list svelte-nb7ni2"></ul></div>'), Gh = /* @__PURE__ */ fe("<div><!></div> <!>", 1), Zh = /* @__PURE__ */ fe('<div><div><!> <div><div><!></div> <div><span class="timestamp svelte-nb7ni2"> </span></div></div></div></div>');
const Kh = {
  hash: "svelte-nb7ni2",
  code: `.message-container.svelte-nb7ni2 {display:flex;padding:0.25rem 0;}.user-message.svelte-nb7ni2 {justify-content:flex-end;}.bot-message.svelte-nb7ni2 {justify-content:flex-start;}.message-content.svelte-nb7ni2 {display:flex;align-items:flex-start;gap:0.25rem;max-width:85%;}.user-content.svelte-nb7ni2 {flex-direction:row-reverse;}.bot-content.svelte-nb7ni2 {flex-direction:row;}

  /* Match WidgetView preview: square avatar with rounded-md corners (size-8 equivalent) */.avatar.svelte-nb7ni2 {width:2rem; /* size-8 */height:2rem; /* size-8 */border-radius:0.5rem; /* rounded-md */border-top-right-radius:0.15rem;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);overflow:hidden;}.avatar.icon-url.svelte-nb7ni2 {background-color:transparent;overflow:hidden;}.avatar-image.svelte-nb7ni2 {width:100%;height:100%;object-fit:cover;display:block;}

  /* New flex-based body */.message-body.svelte-nb7ni2 {display:flex;flex-direction:column;align-items:flex-start;gap:2px;max-width:100%;}.user-body.svelte-nb7ni2 {align-items:flex-end;}.bot-body.svelte-nb7ni2 {align-items:flex-start;}.bubble.svelte-nb7ni2 {padding:0.5rem;border-radius:0.5rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);line-height:1.5;display:inline-flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);max-width:85%; /* reduce message width to fit better in smaller widget */position:relative;
    /* 0.92rem ≈ 14.7px -> use 15px */font-size:15px;}.user-bubble.svelte-nb7ni2 {border-top-right-radius:0.15rem;}.bot-bubble.svelte-nb7ni2 {border-top-left-radius:0.15rem;}.text.svelte-nb7ni2 {white-space:pre-wrap;word-break:break-word;margin:0;padding:0;}.markdown.svelte-nb7ni2 {width:100%;}.meta-row.svelte-nb7ni2 {display:flex;width:100%;
    /* Reserve space for the timestamp so revealing it doesn't shift layout */min-height:10px; /* reserve approx line-height of timestamp */align-items:center;opacity:0;
    /* keep it in flow (visibility on/off only affects hit-testing), don't change height */visibility:visible;transition:opacity 120ms ease;}.user-meta.svelte-nb7ni2 {justify-content:flex-end;}.bot-meta.svelte-nb7ni2 {justify-content:flex-start;}.timestamp.svelte-nb7ni2 {font-size:0.625rem;line-height:1;color:#6b7280;}

  /* Reveal timestamp (meta row) on hover/focus within the message body without affecting layout */.message-body.svelte-nb7ni2:hover .meta-row:where(.svelte-nb7ni2),
  .message-body.svelte-nb7ni2:focus-within .meta-row:where(.svelte-nb7ni2) {opacity:1;}

  /* keep a small gap between bubble and meta-row while preserving reserved space */.meta-row.svelte-nb7ni2 {margin-top:2px;}

  @keyframes svelte-nb7ni2-bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
      opacity: 0.3;
    }
    40% {
      transform: scale(1);
      opacity: 1;
    }
  }

  /* Global styles for markdown content to mirror Messages.vue */.message-markdown {
    /* Match user message font size (0.92rem ≈ 15px) */font-size:15px;line-height:1.625; /* leading-relaxed */color:#525866; /* match Messages.vue */word-break:break-word; /* break-words */width:100%;min-width:0;}.message-markdown h1 {font-weight:600; /* font-semibold */font-size:20px; /* 1.25rem */margin:0.75rem 0 0.5rem 0;}.message-markdown h2 {font-weight:600;font-size:18px; /* 1.125rem */margin:0.75rem 0 0.5rem 0;}.message-markdown h3 {font-weight:600;font-size:16px; /* 1rem */margin:0.75rem 0 0.5rem 0;}.message-markdown p {margin:0;padding:0;color:inherit;}.message-markdown p + p {margin-top:0.75rem;}.message-markdown ul,
  .message-markdown ol {margin:0.75rem 0;padding-left:1.25rem;}.message-markdown ul {list-style:disc;}.message-markdown ol {list-style:decimal;}.message-markdown li + li {margin-top:0.25rem;}.message-markdown blockquote {border-left:4px solid #cbd5e1; /* border-slate-300 */padding-left:0.75rem; /* pl-3 */background-color:#f8fafc; /* bg-slate-50 */border-radius:0.25rem; /* rounded */color:#6b7280;}.message-markdown table {width:100%;font-size:15px; /* 0.95rem ≈ 15.2px */display:block; /* make scrollable if overflow */overflow-x:auto;border-collapse:collapse;}.message-markdown th,
  .message-markdown td {border:1px solid #e5e7eb; /* border-slate-200 */padding:0.375rem 0.5rem;}.message-markdown th {background-color:#f1f5f9;font-weight:600;}.message-markdown hr {margin:1rem 0;border:none;border-top:1px solid #e5e7eb;}.message-markdown a {word-break:break-all;color:#2563eb;text-decoration:none;}.message-markdown a:hover {text-decoration:underline;}.message-markdown code {word-break:break-word; /* break-words */white-space:pre-wrap; /* whitespace-pre-wrap */}
  /* Plain CSS for markdown code UI (not nested) */.message-markdown .md-inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;
    /* 0.875em of parent (~15px) ≈ 13px */font-size:13px;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-nb7ni2 {
    animation: svelte-nb7ni2-pulse 2s infinite ease-in-out;}
  @keyframes svelte-nb7ni2-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-nb7ni2 {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.sources-block.svelte-nb7ni2 {border-top:1px solid #e5e7eb;margin-top:8px;padding-top:6px;}.sources-title.svelte-nb7ni2 {font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#374151;margin-bottom:4px;}.sources-list.svelte-nb7ni2 {list-style:disc;padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:2px;}.source-item.svelte-nb7ni2 a:where(.svelte-nb7ni2) {font-size:11px;color:#2563eb;text-decoration:none;word-break:break-all;}.source-item.svelte-nb7ni2 a:where(.svelte-nb7ni2):hover {text-decoration:underline;}.dots-container.svelte-nb7ni2 {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-nb7ni2 {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-nb7ni2-bounce 1.4s infinite ease-in-out both;}.dot.svelte-nb7ni2:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-nb7ni2:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-nb7ni2 {
    animation: svelte-nb7ni2-typing 0.5s ease-in-out;}
  @keyframes svelte-nb7ni2-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
};
function Jh(e, t) {
  yn(t, !0), Nu(e, Kh);
  const n = at(t, "isStreaming", 3, !1), u = at(t, "hasStarted", 3, !1), r = at(t, "sources", 19, () => []), i = at(t, "showSources", 3, !0), o = { Bot: Rr, BotMessageSquare: $s, Sparkle: Hs, Sparkles: Ws }, s = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), a = /* @__PURE__ */ Ue(() => !s && t.botIcon && o[t.botIcon] ? o[t.botIcon] : Rr), c = (O) => O.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), l = /* @__PURE__ */ Ue(() => t.type === "bot" ? zh(t.content) : t.content);
  function f(O) {
    var H, se;
    const z = O.target, Z = (H = z == null ? void 0 : z.closest) == null ? void 0 : H.call(z, ".copy-code");
    if (!Z) return;
    const oe = Z.getAttribute("data-code") || "", G = Z.querySelector(".copy-label"), U = G ? G.textContent : "";
    (se = navigator == null ? void 0 : navigator.clipboard) != null && se.writeText && navigator.clipboard.writeText(oe).then(() => {
      G && (G.textContent = "Copied"), setTimeout(
        () => {
          G && (G.textContent = U || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      G && (G.textContent = "Failed"), setTimeout(
        () => {
          G && (G.textContent = U || "Copy Code");
        },
        1500
      );
    });
  }
  let h = /* @__PURE__ */ Re(null);
  Qt(() => {
    const O = S(h);
    if (!O) return;
    const z = (Z) => f(Z);
    return O.addEventListener("click", z), () => {
      O.removeEventListener("click", z);
    };
  });
  var p = Zh(), d = J(p), m = J(d);
  {
    var g = (O) => {
      var z = qh();
      St(z, 1, `avatar ${s ? "icon-url" : ""}`, "svelte-nb7ni2");
      var Z = J(z);
      {
        var oe = (U) => {
          var H = Ph();
          pe(() => rt(H, "src", t.botIcon)), W(U, H);
        }, G = (U, H) => {
          {
            var se = (we) => {
              var Y = Se(), ge = _e(Y);
              as(ge, () => S(a), (qe, Qe) => {
                Qe(qe, { size: 20, strokeWidth: 2, color: "white" });
              }), W(we, Y);
            };
            Oe(
              U,
              (we) => {
                S(a) && we(se);
              },
              H
            );
          }
        };
        Oe(Z, (U) => {
          s ? U(oe) : U(G, !1);
        });
      }
      pe(() => {
        var U;
        return ct(z, `background-color: ${(U = s ? "transparent" : t.colorHex) != null ? U : ""}`);
      }), W(O, z);
    };
    Oe(m, (O) => {
      t.type === "bot" && t.botIcon && O(g);
    });
  }
  var k = Ee(m, 2), y = J(k), x = J(y);
  {
    var _ = (O) => {
      var z = jh(), Z = J(z);
      pe(() => Kt(Z, t.content)), W(O, z);
    }, v = (O, z) => {
      {
        var Z = (G) => {
          var U = Uh();
          W(G, U);
        }, oe = (G) => {
          var U = Gh(), H = _e(U), se = J(H);
          El(se, () => S(l)), cu(H, (ge) => te(h, ge), () => S(h));
          var we = Ee(H, 2);
          {
            var Y = (ge) => {
              var qe = Vh(), Qe = Ee(J(qe), 2);
              vu(Qe, 21, r, Jr, (At, I) => {
                var X = Wh(), Te = J(X);
                {
                  var et = (Le) => {
                    var Ct = $h(), ot = J(Ct);
                    pe(() => {
                      rt(Ct, "href", S(I).source), Kt(ot, S(I).title || S(I).source);
                    }), W(Le, Ct);
                  }, Nt = (Le) => {
                    var Ct = Hh(), ot = J(Ct);
                    pe(() => Kt(ot, S(I).title || "Untitled")), W(Le, Ct);
                  };
                  Oe(Te, (Le) => {
                    S(I).source ? Le(et) : Le(Nt, !1);
                  });
                }
                pe(() => rt(X, "title", S(I).source || "")), W(At, X);
              }), W(ge, qe);
            };
            Oe(we, (ge) => {
              i() && r() && r().length > 0 && ge(Y);
            });
          }
          pe(() => St(H, 1, `message-markdown markdown ${n() ? "typing-animation" : ""}`, "svelte-nb7ni2")), W(G, U);
        };
        Oe(
          O,
          (G) => {
            n() && !u() ? G(Z) : G(oe, !1);
          },
          z
        );
      }
    };
    Oe(x, (O) => {
      t.type === "user" ? O(_) : O(v, !1);
    });
  }
  var A = Ee(y, 2), D = J(A), R = J(D);
  pe(
    (O) => {
      var z, Z, oe, G;
      St(p, 1, `message-container ${t.type === "user" ? "user-message" : "bot-message"}`, "svelte-nb7ni2"), St(d, 1, `message-content ${t.type === "user" ? "user-content" : "bot-content"}`, "svelte-nb7ni2"), St(k, 1, `message-body ${(z = t.type) != null ? z : ""}-body`, "svelte-nb7ni2"), St(y, 1, `bubble ${(Z = t.type) != null ? Z : ""}-bubble ${n() ? "streaming" : ""}`, "svelte-nb7ni2"), ct(y, `--message-color: ${(oe = t.type === "user" ? t.lighterColorHex : "white") != null ? oe : ""}; --text-color: ${t.type === "user" ? "white" : "#1f2937"}`), St(A, 1, `meta-row ${(G = t.type) != null ? G : ""}-meta`, "svelte-nb7ni2"), Kt(R, O);
    },
    [() => c(t.timestamp)]
  ), W(e, p), En();
}
var Yh = /* @__PURE__ */ fe('<div class="loading-more svelte-559mhq"><div class="loading-spinner svelte-559mhq"></div> <span>Loading previous messages...</span></div>'), Xh = (e, t, n) => t(S(n)), Qh = /* @__PURE__ */ fe('<button type="button" class="quick-question svelte-559mhq"> </button>'), ep = /* @__PURE__ */ fe('<div class="quick-questions svelte-559mhq"><!> <div class="ai-disclaimer svelte-559mhq">Responses are generated using AI and may contain mistakes.</div></div>'), tp = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, np = /* @__PURE__ */ fe('<div class="branding svelte-559mhq">Powered by <a target="_blank" rel="noopener noreferrer" class="branding-link svelte-559mhq"></a></div>'), up = /* @__PURE__ */ fe('<div class="chat-container svelte-559mhq"><div class="messages-container svelte-559mhq"><!> <!> <div class="bottom-anchor"></div></div> <!> <form class="input-container svelte-559mhq"><textarea placeholder="What do you want to know?" class="message-input svelte-559mhq" rows="1"></textarea> <button type="submit" class="send-button svelte-559mhq" aria-label="Send message" title="Send"><!></button></form> <!></div>');
const rp = {
  hash: "svelte-559mhq",
  code: `.chat-container.svelte-559mhq {height:100%;display:flex;flex-direction:column;overflow:hidden;}.messages-container.svelte-559mhq {flex:1;overflow-y:auto;
    /* Reduced horizontal padding (was 0.75rem) to tighten message list */padding:0.5rem 0.5rem;background-color:#f7f7f7;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.quick-questions.svelte-559mhq {background-color:#f7f7f7;padding:0.25rem 0.75rem 0.5rem 0.75rem;display:flex;flex-direction:column;gap:0.15rem;}.quick-question.svelte-559mhq {background:transparent;border:none;padding:2px 0;text-align:left;font-size:0.7rem; /* ~11px similar to vue preview */font-weight:500;line-height:1.35;color:var(--theme-color, #3b82f6);cursor:pointer;white-space:normal;word-break:break-word;}.quick-question.svelte-559mhq:hover,
  .quick-question.svelte-559mhq:focus-visible {text-decoration:underline;outline:none;}.input-container.svelte-559mhq {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:#f7f7f7;padding:0.25rem;width:100%;box-sizing:border-box;position:relative;}.message-input.svelte-559mhq {width:100%;padding:0.5rem 2.25rem 0.5rem 0.5rem; /* add right padding for send button */border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-559mhq:focus {outline:none;border-color:var(--theme-color);}.message-input.svelte-559mhq:disabled {background-color:#f9fafb;cursor:not-allowed;}.send-button.svelte-559mhq {position:absolute;right:0.25rem;top:50%;transform:translateY(-50%);width:2rem;height:2rem;border:none;display:flex;align-items:center;justify-content:center;color:var(--theme-color);background:transparent;cursor:pointer;transition:background-color 0.15s ease,
      transform 0.15s ease,
      opacity 0.15s ease;}

  /* Hover effect removed as requested */.send-button.svelte-559mhq:disabled {opacity:0.5;cursor:not-allowed;}.loading-more.svelte-559mhq {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-559mhq {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-559mhq-spin 1s linear infinite;}

  @keyframes svelte-559mhq-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Branding line below the input */.branding.svelte-559mhq {text-align:center;color:black; /* slate-400 */font-size:11px;margin:0.1rem 0 0.1rem 0;}.branding-link.svelte-559mhq {font-weight:600;color:var(--theme-color, #3b82f6);text-decoration:none;margin-left:0.25rem;font-size:inherit;display:inline-block;}

  /* Small muted disclaimer under quick questions */.ai-disclaimer.svelte-559mhq {font-size:0.7rem; /* ~11px */color:#6b7280; /* slate-500 */text-align:center;margin-top:0.15rem;}`
};
function ip(e, t) {
  yn(t, !0), Nu(e, rp);
  const [n, u] = Nl(), r = () => Ol(ut, "$chatStore", n), i = "fluentBot", o = "https://beta.fluentbot.ai";
  let s = /* @__PURE__ */ Re(""), a, c, l = /* @__PURE__ */ Re(!1), f = /* @__PURE__ */ Re(!0), h = /* @__PURE__ */ Re(!1), p, d = /* @__PURE__ */ Ue(() => r().messages), m = /* @__PURE__ */ Ue(() => r().isLoading), g = /* @__PURE__ */ Ue(() => r().hasMore), k = /* @__PURE__ */ Ue(() => r().currentChatId);
  const y = /* @__PURE__ */ Ue(() => S(d).some((I) => I.role === "human")), x = () => {
    if (!a) return !0;
    const I = 80, { scrollTop: X, scrollHeight: Te, clientHeight: et } = a;
    return Te - (X + et) <= I;
  }, _ = (I = !1) => {
    if (!a) return;
    if (p) {
      p.scrollIntoView({
        behavior: I ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const X = a.scrollHeight;
    I ? a.scrollTo({ top: X, behavior: "smooth" }) : a.scrollTop = X;
  }, v = () => ve(null, null, function* () {
    if (!a || (S(h) && te(f, x(), !0), S(l) || !S(g))) return;
    const { scrollTop: I } = a;
    I === 0 && S(k) && (te(l, !0), yield Us(S(k), r().currentPage + 1), te(l, !1));
  });
  gs(() => {
    requestAnimationFrame(() => _(!1));
    const I = new ResizeObserver(() => {
      S(f) && _(!1);
    });
    return a && I.observe(a), () => {
      I.disconnect();
    };
  });
  const A = () => {
    if (c) {
      c.style.height = "auto";
      const X = Math.min(c.scrollHeight, 120);
      c.style.height = `${X}px`;
    }
  };
  Qt(() => {
    A();
  }), Qt(() => {
    const I = S(d).length;
    if (!S(h) && I > 0) {
      nl().then(() => {
        requestAnimationFrame(() => {
          _(!1), te(f, !0), te(h, !0);
        });
      });
      return;
    }
    S(f) && requestAnimationFrame(() => _(!1));
  });
  const D = () => ve(null, null, function* () {
    if (!S(s).trim()) return;
    const I = S(s);
    te(s, ""), A(), te(f, !0), yield yf(I, t.settings);
  }), R = (I) => {
    I && (te(s, I, !0), D());
  };
  var O = up(), z = J(O), Z = J(z);
  {
    var oe = (I) => {
      var X = Yh();
      W(I, X);
    };
    Oe(Z, (I) => {
      S(l) && I(oe);
    });
  }
  var G = Ee(Z, 2);
  vu(G, 17, () => S(d), (I) => I.id, (I, X) => {
    const Te = /* @__PURE__ */ Ue(() => S(X).role === "human" ? "user" : "bot"), et = /* @__PURE__ */ Ue(() => new Date(S(X).created_at)), Nt = /* @__PURE__ */ Ue(() => S(X).id === "streaming"), Le = /* @__PURE__ */ Ue(() => S(X).id === "streaming" && S(X).message.length > 0);
    Jh(I, {
      get content() {
        return S(X).message;
      },
      get type() {
        return S(Te);
      },
      get timestamp() {
        return S(et);
      },
      get botIcon() {
        return t.settings.bot_icon;
      },
      get colorHex() {
        return t.settings.color_hex;
      },
      get lighterColorHex() {
        return t.settings.lighter_color_hex;
      },
      get isStreaming() {
        return S(Nt);
      },
      get hasStarted() {
        return S(Le);
      },
      get sources() {
        return S(X).sources;
      },
      get showSources() {
        return t.settings.show_sources;
      }
    });
  });
  var U = Ee(G, 2);
  cu(U, (I) => p = I, () => p), cu(z, (I) => a = I, () => a);
  var H = Ee(z, 2);
  {
    var se = (I) => {
      var X = ep(), Te = J(X);
      vu(Te, 17, () => t.settings.quick_questions.slice(0, 3), Jr, (et, Nt) => {
        var Le = Qh();
        Le.__click = [Xh, R, Nt];
        var Ct = J(Le);
        pe(() => {
          var ot;
          ct(Le, `--theme-color: ${(ot = t.settings.color_hex) != null ? ot : ""}`), Kt(Ct, S(Nt));
        }), W(et, Le);
      }), W(I, X);
    };
    Oe(H, (I) => {
      !S(y) && t.settings.quick_questions && t.settings.quick_questions.length && I(se);
    });
  }
  var we = Ee(H, 2), Y = J(we);
  Y.__input = A, Y.__keydown = [tp, D], cu(Y, (I) => c = I, () => c);
  var ge = Ee(Y, 2), qe = J(ge);
  Ff(qe, { size: 18, strokeWidth: 2 });
  var Qe = Ee(we, 2);
  {
    var At = (I) => {
      var X = np(), Te = Ee(J(X));
      rt(Te, "href", o), Te.textContent = i, pe(() => {
        var et;
        return ct(Te, `color: ${(et = t.settings.color_hex) != null ? et : ""}`);
      }), W(I, X);
    };
    Oe(Qe, (I) => {
      t.settings.show_branding && I(At);
    });
  }
  pe(
    (I) => {
      var X, Te;
      ct(we, `--theme-color: ${(X = t.settings.color_hex) != null ? X : ""}; --hover-color: ${(Te = t.settings.lighter_color_hex) != null ? Te : ""}`), Y.disabled = S(m), ge.disabled = I;
    },
    [
      () => S(m) || !S(s).trim()
    ]
  ), Mi("scroll", z, v), Mi("submit", we, (I) => {
    I.preventDefault(), D();
  }), Tl(Y, () => S(s), (I) => te(s, I)), W(e, O), En(), u();
}
Ou(["click", "input", "keydown"]);
const De = [];
for (let e = 0; e < 256; ++e)
  De.push((e + 256).toString(16).slice(1));
function op(e, t = 0) {
  return (De[e[t + 0]] + De[e[t + 1]] + De[e[t + 2]] + De[e[t + 3]] + "-" + De[e[t + 4]] + De[e[t + 5]] + "-" + De[e[t + 6]] + De[e[t + 7]] + "-" + De[e[t + 8]] + De[e[t + 9]] + "-" + De[e[t + 10]] + De[e[t + 11]] + De[e[t + 12]] + De[e[t + 13]] + De[e[t + 14]] + De[e[t + 15]]).toLowerCase();
}
let _r;
const sp = new Uint8Array(16);
function ap() {
  if (!_r) {
    if (typeof crypto == "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    _r = crypto.getRandomValues.bind(crypto);
  }
  return _r(sp);
}
const cp = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), wo = { randomUUID: cp };
function lp(e, t, n) {
  var r, i, o;
  if (wo.randomUUID && !e)
    return wo.randomUUID();
  e = e || {};
  const u = (o = (i = e.random) != null ? i : (r = e.rng) == null ? void 0 : r.call(e)) != null ? o : ap();
  if (u.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return u[6] = u[6] & 15 | 64, u[8] = u[8] & 63 | 128, op(u);
}
class fp {
  constructor(t) {
    tt(this, "settings");
    this.settings = t;
  }
  initialize() {
    return ve(this, null, function* () {
      yield this.initializeUserId(), yield this.initializeChat();
    });
  }
  initializeUserId() {
    return ve(this, null, function* () {
      if (!localStorage.getItem("userId")) {
        const n = lp();
        localStorage.setItem("userId", n);
      }
    });
  }
  initializeChat() {
    return ve(this, null, function* () {
      const t = localStorage.getItem("currentChatId");
      t ? yield Us(t) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && ut.update((t) => Ce(ce({}, t), {
      messages: [
        {
          id: Date.now().toString(),
          chatId: "",
          role: "ai",
          message: this.settings.first_message,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    }));
  }
  resetChat() {
    ut.update((t) => Ce(ce({}, t), {
      messages: []
    })), localStorage.removeItem("currentChatId"), this.settings.first_message && this.addInitialMessage();
  }
}
const dp = (e, t) => {
  t.resetChat();
}, hp = (e, t) => {
  if (S(t)) {
    const n = new CustomEvent("minimize-widget");
    document.dispatchEvent(n), te(t, !1);
  } else {
    const n = new CustomEvent("maximize-widget");
    document.dispatchEvent(n), te(t, !0);
  }
};
var pp = /* @__PURE__ */ fe('<img class="logo" loading="lazy" decoding="async">'), bp = () => document.dispatchEvent(new CustomEvent("close-widget")), gp = /* @__PURE__ */ fe('<main class="svelte-1j68u5g"><header class="main-header svelte-1j68u5g"><div class="brand svelte-1j68u5g"><!> <div class="title svelte-1j68u5g"> </div></div> <div class="button-group svelte-1j68u5g"><button class="icon-button close-mobile svelte-1j68u5g" aria-label="Close chat"><!></button> <button class="icon-button svelte-1j68u5g"><!></button> <button class="icon-button reset-mobile svelte-1j68u5g" aria-label="Reset chat"><!></button></div></header> <div class="content svelte-1j68u5g"><!></div></main>');
const mp = {
  hash: "svelte-1j68u5g",
  code: `main.svelte-1j68u5g {height:100vh;display:flex;flex-direction:column;background-color:#f7f7f7; /* gray-50 */overflow:hidden; /* preserve container rounded-corner clipping */}header.svelte-1j68u5g {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.main-header.svelte-1j68u5g {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;position:relative; /* ensure tooltips appear above content */z-index:2;}.brand.svelte-1j68u5g {display:flex;align-items:center;gap:0.5rem;min-width:0; /* allow children to truncate */}.title.svelte-1j68u5g {font-size:1.125rem;font-weight:600;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}.button-group.svelte-1j68u5g {margin-left:auto;display:flex;gap:0.5rem;}

  /* Close button only shown on small / fullscreen views */.close-mobile.svelte-1j68u5g {display:none !important; /* default hidden on large screens */}

  /* Ensure regular controls are visible on large screens */.button-group.svelte-1j68u5g .icon-button:where(.svelte-1j68u5g) {display:inline-flex;}

  @media screen and (max-width: 640px) {.close-mobile.svelte-1j68u5g {display:inline-flex !important;}

    /* hide regular maximize/minimize controls on mobile to reduce clutter (keep reset visible) */.button-group.svelte-1j68u5g .icon-button:where(.svelte-1j68u5g):not(.close-mobile):not(.reset-mobile) {display:none !important;}

    /* Show reset on mobile and put it left of the close button */.reset-mobile.svelte-1j68u5g {display:inline-flex !important;order:0;margin-right:0.5rem;}.close-mobile.svelte-1j68u5g {order:1;}
  }.icon-button.svelte-1j68u5g {background:transparent;border:none;color:white;cursor:pointer;position:relative; /* enable tooltip positioning */display:inline-flex;align-items:center;justify-content:center;}

  /* Custom tooltip using aria-label as content */.icon-button.svelte-1j68u5g::after {content:attr(aria-label);position:absolute;top:calc(
      100% + 8px
    ); /* place tooltip below to avoid clipping by container */left:50%;transform:translateX(-50%);background-color:rgba(17, 24, 39, 0.95); /* near-black */color:#fff;padding:6px 8px; /* padding as requested */border-radius:6px; /* rounded corners as requested */font-size:12px;line-height:1;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 150ms ease,
      transform 150ms ease;z-index:1000;}.icon-button.svelte-1j68u5g:hover::after,
  .icon-button.svelte-1j68u5g:focus-visible::after {opacity:1;transform:translateX(-50%) translateY(2px); /* slight downward nudge */}

  /* Keep the right-most tooltip inside the container by aligning it to the right edge of the button */.button-group.svelte-1j68u5g .icon-button:where(.svelte-1j68u5g):last-child::after {left:auto;right:0;transform:translateY(2px);}.content.svelte-1j68u5g {flex:1;overflow:hidden; /* keep scrolling content masked while tooltips can overflow from header */}`
};
function _p(e, t) {
  yn(t, !0), Nu(e, mp);
  const n = new fp(t.settings);
  let u = /* @__PURE__ */ Re(!1);
  gs(() => ve(null, null, function* () {
    yield n.initialize();
  }));
  var r = gp(), i = J(r), o = J(i), s = J(o);
  {
    var a = (A) => {
      var D = pp();
      pe(() => {
        rt(D, "src", t.settings.header_logo), rt(D, "alt", t.settings.title_text ? t.settings.title_text + " logo" : "Logo");
      }), W(A, D);
    };
    Oe(s, (A) => {
      t.settings.header_logo && A(a);
    });
  }
  var c = Ee(s, 2), l = J(c), f = Ee(o, 2), h = J(f);
  h.__click = [bp];
  var p = J(h);
  Vs(p, { size: 16 });
  var d = Ee(h, 2);
  d.__click = [hp, u];
  var m = J(d);
  {
    var g = (A) => {
      Tf(A, { size: 16 });
    }, k = (A) => {
      wf(A, { size: 16 });
    };
    Oe(m, (A) => {
      S(u) ? A(g) : A(k, !1);
    });
  }
  var y = Ee(d, 2);
  y.__click = [dp, n];
  var x = J(y);
  Rf(x, { size: 16 });
  var _ = Ee(i, 2), v = J(_);
  ip(v, {
    get settings() {
      return t.settings;
    }
  }), pe(() => {
    var A;
    ct(i, `background-color: ${(A = t.settings.color_hex) != null ? A : ""};`), rt(c, "title", t.settings.title_text), Kt(l, t.settings.title_text), rt(d, "aria-label", S(u) ? "Collapse chat" : "Expand chat");
  }), W(e, r), En();
}
Ou(["click"]);
const xp = "html,body{height:100%;margin:0;overflow:hidden}", vp = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var yp = (e, t, n) => {
  var u;
  (u = n.onToggle) == null || u.call(n);
}, Ep = /* @__PURE__ */ fe('<div class="close-icon svelte-7lnkn6"><!></div>'), kp = /* @__PURE__ */ fe('<img alt="Chat Icon" class="icon-image svelte-7lnkn6">'), wp = /* @__PURE__ */ fe('<span class="button-text svelte-7lnkn6"> </span>'), Ap = /* @__PURE__ */ fe('<div class="chat-icon svelte-7lnkn6"><!></div> <!>', 1), Cp = /* @__PURE__ */ fe('<button id="chat-button"><!></button>');
const Dp = {
  hash: "svelte-7lnkn6",
  code: `#chat-button.svelte-7lnkn6 {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    /* Animate size/padding/gap changes when breakpoints change */transition:min-width 180ms ease,
      height 180ms ease,
      padding 180ms ease,
      gap 180ms ease,
      border-radius 180ms ease;z-index:10000;}#chat-button.with-text.svelte-7lnkn6 {padding:0 1.25rem;border-radius:100px;}.button-text.svelte-7lnkn6 {
    /* Responsive text: clamp(min, fluid, max) so it scales smoothly between viewports */
    /* min 14px, fluid around viewport width, max 18px for large screens */font-size:18px;white-space:nowrap;transition:font-size 180ms ease;}

  /* icon wrappers get a scale variable so we can animate size changes smoothly */.chat-icon.svelte-7lnkn6,
  .close-icon.svelte-7lnkn6 {display:flex;align-items:center;justify-content:center;transition:transform 180ms ease;transform-origin:center;
    /* default scale is 1; set inline via style attribute when needed */}

  /* image transition for smooth width/height change */.icon-image.svelte-7lnkn6 {transition:width 180ms ease,
      height 180ms ease;display:block;}#chat-button.svelte-7lnkn6:hover {transform:translateY(-1px);}

  /* Tablet and below: ensure text is reduced for mid-size screens and reduce button size */
  @media (max-width: 1024px) {.button-text.svelte-7lnkn6 {font-size:16px;}

    /* make the button slightly smaller on tablet and laptop widths */#chat-button.svelte-7lnkn6 {min-width:3rem;height:3rem;padding:0 0.6rem;border-radius:50%;}#chat-button.with-text.svelte-7lnkn6 {padding:0 0.6rem;}
  }

  /* Mobile: reduce button size and typography to fit smaller screens */
  @media (max-width: 480px) {#chat-button.svelte-7lnkn6 {min-width:2.6rem;height:2.6rem;padding:0 0.5rem;gap:6px;border-radius:9px;}#chat-button.with-text.svelte-7lnkn6 {padding:0 0.5rem;}.button-text.svelte-7lnkn6 {font-size:13px;}
  }

  /* Very small screens: make the button even more compact */
  @media (max-width: 360px) {#chat-button.svelte-7lnkn6 {min-width:2.4rem;height:2.4rem;padding:0 0.5rem;border-radius:8px;}

    /* hide text to preserve space */#chat-button.with-text.svelte-7lnkn6 .button-text:where(.svelte-7lnkn6) {display:none;}
  }`
};
function Ao(e, t) {
  yn(t, !0), Nu(e, Dp);
  const n = /* @__PURE__ */ Ll(t, ["$$slots", "$$events", "$$legacy"]), u = {
    MessageSquare: no,
    MessageSquareMore: Df,
    MessageCircle: Cf,
    MessageCircleMore: Af,
    MessagesSquare: Sf,
    Bot: Rr,
    BotMessageSquare: $s,
    Sparkle: Hs,
    Sparkles: Ws
  }, r = /* @__PURE__ */ Ue(() => !!t.buttonIcon && t.buttonIcon.startsWith("https://")), i = /* @__PURE__ */ Ue(() => S(r) ? null : u[t.buttonIcon || "MessageSquare"] || no);
  let o = /* @__PURE__ */ Re(24), s = /* @__PURE__ */ Re(1);
  function a() {
    try {
      const d = typeof window != "undefined" ? window.innerWidth : 9999;
      d <= 480 ? te(o, 18) : d <= 1024 ? te(o, 20) : te(o, 24), te(s, S(o) / 24);
    } catch (d) {
      te(o, 24);
    }
  }
  a(), typeof window != "undefined" && (window.addEventListener("resize", a), Qt(() => () => window.removeEventListener("resize", a)));
  var c = Cp();
  c.__click = [yp, n, t];
  let l;
  var f = J(c);
  {
    var h = (d) => {
      var m = Ep(), g = J(m);
      const k = /* @__PURE__ */ Ue(() => S(o) + 4);
      Vs(g, {
        get size() {
          return S(k);
        },
        strokeWidth: 2
      }), pe(() => {
        var y;
        return ct(m, `--icon-scale: ${(y = S(s)) != null ? y : ""}; transform: scale(var(--icon-scale));`);
      }), W(d, m);
    }, p = (d) => {
      var m = Ap(), g = _e(m), k = J(g);
      {
        var y = (A) => {
          var D = kp();
          pe(() => {
            var R, O;
            rt(D, "src", t.buttonIcon), ct(D, `width: ${(R = S(o)) != null ? R : ""}px; height: ${(O = S(o)) != null ? O : ""}px;`);
          }), W(A, D);
        }, x = (A, D) => {
          {
            var R = (O) => {
              var z = Se(), Z = _e(z);
              as(Z, () => S(i), (oe, G) => {
                G(oe, {
                  get size() {
                    return S(o);
                  },
                  strokeWidth: 2
                });
              }), W(O, z);
            };
            Oe(
              A,
              (O) => {
                S(i) && O(R);
              },
              D
            );
          }
        };
        Oe(k, (A) => {
          S(r) ? A(y) : A(x, !1);
        });
      }
      var _ = Ee(g, 2);
      {
        var v = (A) => {
          var D = wp(), R = J(D);
          pe(() => Kt(R, t.buttonText)), W(A, D);
        };
        Oe(_, (A) => {
          t.showButtonText && !t.isOpen && A(v);
        });
      }
      pe(() => {
        var A;
        return ct(g, `--icon-scale: ${(A = S(s)) != null ? A : ""}; transform: scale(var(--icon-scale));`);
      }), W(d, m);
    };
    Oe(f, (d) => {
      t.isOpen ? d(h) : d(p, !1);
    });
  }
  pe(
    (d) => {
      var m;
      rt(c, "aria-label", t.isOpen ? "Close chat" : "Open chat"), ct(c, `background-color: ${(m = t.colorHex) != null ? m : ""};`), l = St(c, 1, "svelte-7lnkn6", null, l, d);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText && !t.isOpen,
        "with-icon-url": S(r)
      })
    ]
  ), W(e, c), En();
}
Ou(["click"]);
class Sp {
  constructor(t) {
    tt(this, "container", null);
    tt(this, "buttonContainer", null);
    tt(this, "isOpen", !1);
    tt(this, "isMaximized", !1);
    tt(this, "clickHandler");
    tt(this, "maximizeHandler");
    tt(this, "minimizeHandler");
    tt(this, "closeHandler");
    tt(this, "settings", null);
    tt(this, "chatButtonInstance", null);
    this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.initialize(t);
  }
  fetchSettings(t) {
    return ve(this, null, function* () {
      try {
        return (yield _f.get(`/api/bots/${t}/widget-settings`)).data.data;
      } catch (n) {
        return console.error("Error fetching widget settings:", n), null;
      }
    });
  }
  handleClickOutside(t) {
    !t.composedPath().some(
      (r) => r === this.container || r === this.buttonContainer || r instanceof HTMLElement && (r.closest("#fluent-bot-chat-widget") === this.container || // Treat clicks on the chat button as inside
      r.closest("#chat-button") !== null)
    ) && this.isOpen && this.toggleWidget();
  }
  toggleWidget() {
    var t, n, u, r, i;
    if (this.isOpen, this.isOpen = !this.isOpen, this.container && (this.isOpen ? (this.container.style.display = "flex", setTimeout(() => {
      this.container.style.opacity = "1", this.container.style.transform = "translateY(0) scale(1)";
    }, 0)) : (this.container.style.opacity = "0", this.container.style.transform = "translateY(20px) scale(0.95)", setTimeout(() => {
      this.container.style.display = "none";
    }, 600))), this.chatButtonInstance)
      if (typeof this.chatButtonInstance.update == "function")
        this.chatButtonInstance.update({ isOpen: this.isOpen });
      else {
        try {
          typeof this.chatButtonInstance.destroy == "function" && this.chatButtonInstance.destroy();
        } catch (o) {
        }
        if (this.chatButtonInstance = null, this.buttonContainer) {
          try {
            this.buttonContainer.innerHTML = "";
          } catch (s) {
          }
          const o = {
            target: this.buttonContainer,
            props: {
              isOpen: this.isOpen,
              onToggle: () => this.toggleWidget(),
              buttonIcon: (t = this.settings) == null ? void 0 : t.button_icon,
              showButtonText: (n = this.settings) == null ? void 0 : n.show_button_text,
              buttonText: (u = this.settings) == null ? void 0 : u.button_text,
              colorHex: (r = this.settings) == null ? void 0 : r.color_hex,
              lighterColorHex: (i = this.settings) == null ? void 0 : i.lighter_color_hex
            }
          };
          this.chatButtonInstance = nr(Ao, o);
        }
      }
  }
  createStyles() {
    const t = document.createElement("style");
    return t.textContent = `
            :host {
                position: fixed;
                bottom: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
            }

            :host(.align-right) {
                right: 20px;
                align-items: flex-end;
            }

            :host(.align-left) {
                left: 20px;
                align-items: flex-start;
            }

            #fluent-bot-chat-widget {
                width: 20vw;
                min-width: 400px;
                height: 55vh;
                min-height: 600px;
                overflow: hidden;
                display: none;
                flex-direction: column;
                position: relative;
                border-radius: 0.5rem;
                box-shadow: 
                    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                transform-origin: bottom;
                transition: opacity 0.7s ease,
                            transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
                            width 0.7s ease,
                            height 0.7s ease,
                            max-height 0.7s ease;
                will-change: width, height, transform, opacity;
                font-family: inherit;
            }

            :host(.align-right) #fluent-bot-chat-widget {
                transform-origin: bottom right;
            }

            :host(.align-left) #fluent-bot-chat-widget {
                transform-origin: bottom left;
            }

            /* Maximized state */
            #fluent-bot-chat-widget.maximized {
                width: 55vw;
                height: 85vh;
                max-height: 85vh;
                animation: fb-maximize-pop 1s cubic-bezier(0.34, 1.56, 0.64, 1);
            }

            @keyframes fb-maximize-pop {
                0% { transform: translateY(0) scale(1); }
                60% { transform: translateY(0) scale(1.012); }
                100% { transform: translateY(0) scale(1); }
            }

            

            /* Mobile and small device styles */
            @media screen and (max-width: 640px) {
                :host {
                    bottom: 0;
                    left: 0 !important;
                    right: 0 !important;
                    width: 100%;
                    height: 100%;
                    align-items: stretch !important;
                }

                #fluent-bot-chat-widget {
                    width: 100%;
                    height: 100%;
                    max-height: 100%;
                    margin: 0;
                    border-radius: 0;
                    transform: translateY(100%);
                }

                :host(.align-right) #fluent-bot-chat-widget,
                :host(.align-left) #fluent-bot-chat-widget {
                    transform-origin: bottom;
                }

                #fluent-bot-chat-widget[style*="display: flex"] {
                    transform: translateY(0) !important;
                }

                /* Hide chat button when widget is open on mobile */
                #fluent-bot-chat-widget[style*="display: flex"] ~ #chat-button-container {
                    display: none;
                }

                /* Reset chat button container position when widget is closed */
                #chat-button-container {
                    position: fixed;
                    bottom: 20px;
                    z-index: 9999;
                }

                :host(.align-right) #chat-button-container {
                    right: 20px;
                }

                :host(.align-left) #chat-button-container {
                    left: 20px;
                }

                /* Ignore maximized on small screens - always take full screen */
                #fluent-bot-chat-widget.maximized {
                    width: 100%;
                    height: 100%;
                    max-height: 100%;
                }
            }

            ${vp}
            ${xp}
        `, t;
  }
  initialize(t) {
    return ve(this, null, function* () {
      if (this.settings = yield this.fetchSettings(t), !this.settings) {
        console.warn("No widget settings found, widget will not be initialized");
        return;
      }
      const n = document.createElement("div");
      n.id = "fluent-bot-chat-widget-container", n.classList.add(`align-${this.settings.button_alignment}`);
      const u = n.attachShadow({ mode: "open" }), r = document.createElement("div");
      r.id = "fluent-bot-chat-widget";
      const i = document.createElement("div");
      i.id = "chat-button-container", u.appendChild(this.createStyles()), u.appendChild(r), u.appendChild(i), document.body.appendChild(n), this.container = r, this.buttonContainer = i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), nr(_p, {
        target: r,
        props: {
          // settings now includes optional header_logo
          settings: this.settings
        }
      });
      const o = {
        target: i,
        props: {
          isOpen: this.isOpen,
          onToggle: () => this.toggleWidget(),
          buttonIcon: this.settings.button_icon,
          showButtonText: this.settings.show_button_text,
          buttonText: this.settings.button_text,
          colorHex: this.settings.color_hex,
          lighterColorHex: this.settings.lighter_color_hex
        }
      };
      this.chatButtonInstance = nr(Ao, o);
    });
  }
  maximizeWidget() {
    !this.container || this.isMaximized || (this.isMaximized = !0, this.container.classList.add("maximized"));
  }
  minimizeWidget() {
    !this.container || !this.isMaximized || (this.isMaximized = !1, this.container.classList.remove("maximized"));
  }
  destroy() {
    if (this.container) {
      const t = this.container.closest(
        "#fluent-bot-chat-widget-container"
      );
      t && t.remove();
    }
    this.chatButtonInstance && typeof this.chatButtonInstance.destroy == "function" && (this.chatButtonInstance.destroy(), this.chatButtonInstance = null), document.removeEventListener("click", this.clickHandler, !0), document.removeEventListener("close-widget", this.closeHandler), document.removeEventListener("maximize-widget", this.maximizeHandler), document.removeEventListener("minimize-widget", this.minimizeHandler);
  }
}
const Tp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), Kp = (e) => {
  Tp() || new Sp(e);
};
export {
  Sp as FluentBotChatWidget,
  Kp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
