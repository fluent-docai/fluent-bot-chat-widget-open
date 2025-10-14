var nc = Object.defineProperty, rc = Object.defineProperties;
var ic = Object.getOwnPropertyDescriptors;
var wi = Object.getOwnPropertySymbols;
var oc = Object.prototype.hasOwnProperty, sc = Object.prototype.propertyIsEnumerable;
var ru = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ac = (e) => {
  throw TypeError(e);
};
var Qn = (e, t, u) => t in e ? nc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, be = (e, t) => {
  for (var u in t || (t = {}))
    oc.call(t, u) && Qn(e, u, t[u]);
  if (wi)
    for (var u of wi(t))
      sc.call(t, u) && Qn(e, u, t[u]);
  return e;
}, Se = (e, t) => rc(e, ic(t));
var Xe = (e, t, u) => Qn(e, typeof t != "symbol" ? t + "" : t, u);
var Ce = (e, t, u) => new Promise((n, r) => {
  var i = (a) => {
    try {
      s(u.next(a));
    } catch (c) {
      r(c);
    }
  }, o = (a) => {
    try {
      s(u.throw(a));
    } catch (c) {
      r(c);
    }
  }, s = (a) => a.done ? n(a.value) : Promise.resolve(a.value).then(i, o);
  s((u = u.apply(e, t)).next());
}), Wt = function(e, t) {
  this[0] = e, this[1] = t;
}, er = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof Wt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[ru("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, tr = (e) => {
  var t = e[ru("asyncIterator")], u = !1, n, r = {};
  return t == null ? (t = e[ru("iterator")](), n = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), n = (i) => r[i] = (o) => {
    if (u) {
      if (u = !1, i === "throw") throw o;
      return o;
    }
    return u = !0, {
      done: !1,
      value: new Wt(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || ac("Object expected"), s(a);
      }), 1)
    };
  }), r[ru("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, Ai = (e, t, u) => (t = e[ru("asyncIterator")]) ? t.call(e) : (e = e[ru("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var Ir = Array.isArray, cc = Array.prototype.indexOf, zr = Array.from, To = Object.defineProperty, Pt = Object.getOwnPropertyDescriptor, Fo = Object.getOwnPropertyDescriptors, lc = Object.prototype, fc = Array.prototype, Lr = Object.getPrototypeOf, Ci = Object.isExtensible;
function Du(e) {
  return typeof e == "function";
}
const au = () => {
};
function dc(e) {
  return e();
}
function pn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const st = 2, Ro = 4, Dn = 8, Br = 16, St = 32, mu = 64, bn = 128, Je = 256, gn = 512, $e = 1024, Ct = 2048, tu = 4096, At = 8192, Sn = 16384, hc = 32768, ju = 65536, pc = 1 << 17, bc = 1 << 19, Oo = 1 << 20, xr = 1 << 21, qt = Symbol("$state"), No = Symbol("legacy props"), gc = Symbol("");
function Mo(e) {
  return e === this.v;
}
function Io(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Pr(e) {
  return !Io(e, this.v);
}
function mc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _c() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function xc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function vc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function yc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ec() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function kc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function wc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let _u = !1;
function Ac() {
  _u = !0;
}
const qr = 1, jr = 2, zo = 4, Cc = 8, Dc = 16, Sc = 1, Tc = 2, Lo = 4, Fc = 8, Rc = 16, Oc = 1, Nc = 2, qe = Symbol(), Mc = "http://www.w3.org/1999/xhtml", Ic = "http://www.w3.org/2000/svg";
function zc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ce = null;
function Di(e) {
  ce = e;
}
function xu(e, t = !1, u) {
  var n = ce = {
    p: ce,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  _u && !t && (ce.l = {
    s: null,
    u: null,
    r1: [],
    r2: du(!1)
  }), Hr(() => {
    n.d = !0;
  });
}
function vu(e) {
  const t = ce;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = ee, n = ne;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          jt(i.effect), xt(i.reaction), Wr(i.fn);
        }
      } finally {
        jt(u), xt(n);
      }
    }
    ce = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Uu() {
  return !_u || ce !== null && ce.l === null;
}
function Vt(e) {
  if (typeof e != "object" || e === null || qt in e)
    return e;
  const t = Lr(e);
  if (t !== lc && t !== fc)
    return e;
  var u = /* @__PURE__ */ new Map(), n = Ir(e), r = /* @__PURE__ */ Te(0), i = ne, o = (s) => {
    var a = ne;
    xt(i);
    var c = s();
    return xt(a), c;
  };
  return n && u.set("length", /* @__PURE__ */ Te(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ec();
        var l = u.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ Te(c.value)), u.set(a, l)) : te(
          l,
          o(() => Vt(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = u.get(a);
        if (c === void 0)
          a in s && (u.set(
            a,
            o(() => /* @__PURE__ */ Te(qe))
          ), ur(r));
        else {
          if (n && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              u.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && te(l, f);
          }
          te(c, qe), ur(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === qt)
          return e;
        var l = u.get(a), f = a in s;
        if (l === void 0 && (!f || (p = Pt(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ Te(Vt(f ? s[a] : qe))), u.set(a, l)), l !== void 0) {
          var h = R(l);
          return h === qe ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = u.get(a);
          l && (c.value = R(l));
        } else if (c === void 0) {
          var f = u.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== qe)
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
        if (a === qt)
          return !0;
        var c = u.get(a), l = c !== void 0 && c.v !== qe || Reflect.has(s, a);
        if (c !== void 0 || ee !== null && (!l || (h = Pt(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ Te(l ? Vt(s[a]) : qe)), u.set(a, c));
          var f = R(c);
          if (f === qe)
            return !1;
        }
        return l;
      },
      set(s, a, c, l) {
        var v;
        var f = u.get(a), h = a in s;
        if (n && a === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var d = u.get(p + "");
            d !== void 0 ? te(d, qe) : p in s && (d = o(() => /* @__PURE__ */ Te(qe)), u.set(p + "", d));
          }
        f === void 0 ? (!h || (v = Pt(s, a)) != null && v.writable) && (f = o(() => /* @__PURE__ */ Te(void 0)), te(
          f,
          o(() => Vt(c))
        ), u.set(a, f)) : (h = f.v !== qe, te(
          f,
          o(() => Vt(c))
        ));
        var m = Reflect.getOwnPropertyDescriptor(s, a);
        if (m != null && m.set && m.set.call(l, c), !h) {
          if (n && typeof a == "string") {
            var g = (
              /** @type {Source<number>} */
              u.get("length")
            ), w = Number(a);
            Number.isInteger(w) && w >= g.v && te(g, w + 1);
          }
          ur(r);
        }
        return !0;
      },
      ownKeys(s) {
        R(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = u.get(f);
          return h === void 0 || h.v !== qe;
        });
        for (var [c, l] of u)
          l.v !== qe && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        kc();
      }
    }
  );
}
function ur(e, t = 1) {
  te(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function fu(e) {
  var t = st | Ct, u = ne !== null && (ne.f & st) !== 0 ? (
    /** @type {Derived} */
    ne
  ) : null;
  return ee === null || u !== null && (u.f & Je) !== 0 ? t |= Je : ee.f |= Oo, {
    ctx: ce,
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
    parent: u != null ? u : ee
  };
}
// @__NO_SIDE_EFFECTS__
function It(e) {
  const t = /* @__PURE__ */ fu(e);
  return Qo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  const t = /* @__PURE__ */ fu(e);
  return t.equals = Pr, t;
}
function Bo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      Dt(
        /** @type {Effect} */
        t[u]
      );
  }
}
function Lc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & st) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Po(e) {
  var t, u = ee;
  jt(Lc(e));
  try {
    Bo(e), t = ns(e);
  } finally {
    jt(u);
  }
  return t;
}
function qo(e) {
  var t = Po(e), u = (Lt || (e.f & Je) !== 0) && e.deps !== null ? tu : $e;
  at(e, u), e.equals(t) || (e.v = t, e.wv = ts());
}
const Nu = /* @__PURE__ */ new Map();
function du(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Mo,
    rv: 0,
    wv: 0
  };
  return u;
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  const u = du(e);
  return Qo(u), u;
}
// @__NO_SIDE_EFFECTS__
function $r(e, t = !1) {
  var n, r;
  const u = du(e);
  return t || (u.equals = Pr), _u && ce !== null && ce.l !== null && ((r = (n = ce.l).s) != null ? r : n.s = []).push(u), u;
}
function te(e, t, u = !1) {
  ne !== null && !bt && Uu() && (ne.f & (st | Br)) !== 0 && !(ze != null && ze.includes(e)) && wc();
  let n = u ? Vt(t) : t;
  return vr(e, n);
}
function vr(e, t) {
  if (!e.equals(t)) {
    var u = e.v;
    Wu ? Nu.set(e, t) : Nu.set(e, u), e.v = t, (e.f & st) !== 0 && ((e.f & Ct) !== 0 && Po(
      /** @type {Derived} */
      e
    ), at(e, (e.f & Je) === 0 ? $e : tu)), e.wv = ts(), jo(e, Ct), Uu() && ee !== null && (ee.f & $e) !== 0 && (ee.f & (St | mu)) === 0 && (Qe === null ? Gc([e]) : Qe.push(e));
  }
  return t;
}
function Si(e, t = 1) {
  var u = R(e), n = t === 1 ? u++ : u--;
  return te(e, u), n;
}
function jo(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Uu(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & Ct) === 0 && (!n && o === ee || (at(o, t), (s & ($e | Je)) !== 0 && ((s & st) !== 0 ? jo(
        /** @type {Derived} */
        o,
        tu
      ) : On(
        /** @type {Effect} */
        o
      ))));
    }
}
let Bc = !1;
var Ti, Uo, $o, Ho;
function Pc() {
  if (Ti === void 0) {
    Ti = window, Uo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, u = Text.prototype;
    $o = Pt(t, "firstChild").get, Ho = Pt(t, "nextSibling").get, Ci(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ci(u) && (u.__t = void 0);
  }
}
function Tn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return $o.call(e);
}
// @__NO_SIDE_EFFECTS__
function Fn(e) {
  return Ho.call(e);
}
function J(e, t) {
  return /* @__PURE__ */ gt(e);
}
function ke(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ Fn(u) : u;
  }
}
function ye(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Fn(n);
  return n;
}
function qc(e) {
  e.textContent = "";
}
function Wo(e) {
  ee === null && ne === null && xc(), ne !== null && (ne.f & Je) !== 0 && ee === null && _c(), Wu && mc();
}
function jc(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function yu(e, t, u, n = !0) {
  var a;
  var r = ee, i = {
    ctx: ce,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Ct,
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
  if (u)
    try {
      Zr(i), i.f |= hc;
    } catch (c) {
      throw Dt(i), c;
    }
  else t !== null && On(i);
  var o = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Oo | bn)) === 0;
  if (!o && n && (r !== null && jc(i, r), ne !== null && (ne.f & st) !== 0)) {
    var s = (
      /** @type {Derived} */
      ne
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function Hr(e) {
  const t = yu(Dn, null, !1);
  return at(t, $e), t.teardown = e, t;
}
function Yt(e) {
  var r;
  Wo();
  var t = ee !== null && (ee.f & St) !== 0 && ce !== null && !ce.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      ce
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: ee,
      reaction: ne
    });
  } else {
    var n = Wr(e);
    return n;
  }
}
function Uc(e) {
  return Wo(), Gr(e);
}
function $c(e) {
  const t = yu(mu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? hu(t, () => {
      Dt(t), n(void 0);
    }) : (Dt(t), n(void 0));
  });
}
function Wr(e) {
  return yu(Ro, e, !1);
}
function Gr(e) {
  return yu(Dn, e, !0);
}
function _e(e, t = [], u = fu) {
  const n = t.map(u);
  return $u(() => e(...n.map(R)));
}
function $u(e, t = 0) {
  return yu(Dn | Br | t, e, !0);
}
function Xt(e, t = !0) {
  return yu(Dn | St, e, !0, t);
}
function Go(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Wu, n = ne;
    Ri(!0), xt(null);
    try {
      t.call(null);
    } finally {
      Ri(u), xt(n);
    }
  }
}
function Vo(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    (u.f & mu) !== 0 ? u.parent = null : Dt(u, t), u = n;
  }
}
function Hc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & St) === 0 && Dt(t), t = u;
  }
}
function Dt(e, t = !0) {
  var u = !1;
  (t || (e.f & bc) !== 0) && e.nodes_start !== null && (Zo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), u = !0), Vo(e, t && !u), vn(e, 0), at(e, Sn);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Go(e);
  var r = e.parent;
  r !== null && r.first !== null && Ko(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Zo(e, t) {
  for (; e !== null; ) {
    var u = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Fn(e)
    );
    e.remove(), e = u;
  }
}
function Ko(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function hu(e, t) {
  var u = [];
  Vr(e, u, !0), Jo(u, () => {
    Dt(e), t && t();
  });
}
function Jo(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Vr(e, t, u) {
  if ((e.f & At) === 0) {
    if (e.f ^= At, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & ju) !== 0 || (n.f & St) !== 0;
      Vr(n, t, i ? u : !1), n = r;
    }
  }
}
function Mu(e) {
  Yo(e, !0);
}
function Yo(e, t) {
  if ((e.f & At) !== 0) {
    e.f ^= At, (e.f & $e) === 0 && (e.f ^= $e), Gu(e) && (at(e, Ct), On(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & ju) !== 0 || (u.f & St) !== 0;
      Yo(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Iu = [], yr = [];
function Xo() {
  var e = Iu;
  Iu = [], pn(e);
}
function Wc() {
  var e = yr;
  yr = [], pn(e);
}
function Hu(e) {
  Iu.length === 0 && queueMicrotask(Xo), Iu.push(e);
}
function Fi() {
  Iu.length > 0 && Xo(), yr.length > 0 && Wc();
}
let cn = !1, mn = !1, _n = null, Kt = !1, Wu = !1;
function Ri(e) {
  Wu = e;
}
let Ou = [];
let ne = null, bt = !1;
function xt(e) {
  ne = e;
}
let ee = null;
function jt(e) {
  ee = e;
}
let ze = null;
function Qo(e) {
  ne !== null && ne.f & xr && (ze === null ? ze = [e] : ze.push(e));
}
let Ie = null, Ke = 0, Qe = null;
function Gc(e) {
  Qe = e;
}
let es = 1, xn = 0, Lt = !1;
function ts() {
  return ++es;
}
function Gu(e) {
  var f, h;
  var t = e.f;
  if ((t & Ct) !== 0)
    return !0;
  if ((t & tu) !== 0) {
    var u = e.deps, n = (t & Je) !== 0;
    if (u !== null) {
      var r, i, o = (t & gn) !== 0, s = n && ee !== null && !Lt, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= gn), s && l !== null && (l.f & Je) === 0 && (c.f ^= Je);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Gu(
          /** @type {Derived} */
          i
        ) && qo(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || ee !== null && !Lt) && at(e, $e);
  }
  return !1;
}
function Vc(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & bn) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= bn;
      }
    u = u.parent;
  }
  throw cn = !1, e;
}
function Oi(e) {
  return (e.f & Sn) === 0 && (e.parent === null || (e.parent.f & bn) === 0);
}
function Rn(e, t, u, n) {
  if (cn) {
    if (u === null && (cn = !1), Oi(t))
      throw e;
    return;
  }
  if (u !== null && (cn = !0), Vc(e, t), Oi(t))
    throw e;
}
function us(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      ze != null && ze.includes(e) || ((i.f & st) !== 0 ? us(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? at(i, Ct) : (i.f & $e) !== 0 && at(i, tu), On(
        /** @type {Effect} */
        i
      )));
    }
}
function ns(e) {
  var p, d;
  var t = Ie, u = Ke, n = Qe, r = ne, i = Lt, o = ze, s = ce, a = bt, c = e.f;
  Ie = /** @type {null | Value[]} */
  null, Ke = 0, Qe = null, Lt = (c & Je) !== 0 && (bt || !Kt || ne === null), ne = (c & (St | mu)) === 0 ? e : null, ze = null, Di(e.ctx), bt = !1, xn++, e.f |= xr;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Ie !== null) {
      var h;
      if (vn(e, Ke), f !== null && Ke > 0)
        for (f.length = Ke + Ie.length, h = 0; h < Ie.length; h++)
          f[Ke + h] = Ie[h];
      else
        e.deps = f = Ie;
      if (!Lt)
        for (h = Ke; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Ke < f.length && (vn(e, Ke), f.length = Ke);
    if (Uu() && Qe !== null && !bt && f !== null && (e.f & (st | tu | Ct)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Qe.length; h++)
        us(
          Qe[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (xn++, Qe !== null && (n === null ? n = Qe : n.push(.../** @type {Source[]} */
    Qe))), l;
  } finally {
    Ie = t, Ke = u, Qe = n, ne = r, Lt = i, ze = o, Di(s), bt = a, e.f ^= xr;
  }
}
function Zc(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = cc.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & st) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ie === null || !Ie.includes(t)) && (at(t, tu), (t.f & (Je | gn)) === 0 && (t.f ^= gn), Bo(
    /** @type {Derived} **/
    t
  ), vn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function vn(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      Zc(e, u[n]);
}
function Zr(e) {
  var t = e.f;
  if ((t & Sn) === 0) {
    at(e, $e);
    var u = ee, n = ce, r = Kt;
    ee = e, Kt = !0;
    try {
      (t & Br) !== 0 ? Hc(e) : Vo(e), Go(e);
      var i = ns(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = es;
      var o = e.deps, s;
    } catch (a) {
      Rn(a, e, u, n || e.ctx);
    } finally {
      Kt = r, ee = u;
    }
  }
}
function Kc() {
  try {
    vc();
  } catch (e) {
    if (_n !== null)
      Rn(e, _n, null);
    else
      throw e;
  }
}
function rs() {
  var e = Kt;
  try {
    var t = 0;
    for (Kt = !0; Ou.length > 0; ) {
      t++ > 1e3 && Kc();
      var u = Ou, n = u.length;
      Ou = [];
      for (var r = 0; r < n; r++) {
        var i = Yc(u[r]);
        Jc(i);
      }
      Nu.clear();
    }
  } finally {
    mn = !1, Kt = e, _n = null;
  }
}
function Jc(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (Sn | At)) === 0)
        try {
          Gu(n) && (Zr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ko(n) : n.fn = null));
        } catch (r) {
          Rn(r, n, null, n.ctx);
        }
    }
}
function On(e) {
  mn || (mn = !0, queueMicrotask(rs));
  for (var t = _n = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (mu | St)) !== 0) {
      if ((u & $e) === 0) return;
      t.f ^= $e;
    }
  }
  Ou.push(t);
}
function Yc(e) {
  for (var t = [], u = e; u !== null; ) {
    var n = u.f, r = (n & (St | mu)) !== 0, i = r && (n & $e) !== 0;
    if (!i && (n & At) === 0) {
      if ((n & Ro) !== 0)
        t.push(u);
      else if (r)
        u.f ^= $e;
      else
        try {
          Gu(u) && Zr(u);
        } catch (a) {
          Rn(a, u, null, u.ctx);
        }
      var o = u.first;
      if (o !== null) {
        u = o;
        continue;
      }
    }
    var s = u.parent;
    for (u = u.next; u === null && s !== null; )
      u = s.next, s = s.parent;
  }
  return t;
}
function Xc(e) {
  var t;
  for (Fi(); Ou.length > 0; )
    mn = !0, rs(), Fi();
  return (
    /** @type {T} */
    t
  );
}
function Ni() {
  return Ce(this, null, function* () {
    yield Promise.resolve(), Xc();
  });
}
function R(e) {
  var t = e.f, u = (t & st) !== 0;
  if (ne !== null && !bt) {
    if (!(ze != null && ze.includes(e))) {
      var n = ne.deps;
      e.rv < xn && (e.rv = xn, Ie === null && n !== null && n[Ke] === e ? Ke++ : Ie === null ? Ie = [e] : (!Lt || !Ie.includes(e)) && Ie.push(e));
    }
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Je) === 0 && (r.f ^= Je);
  }
  return u && (r = /** @type {Derived} */
  e, Gu(r) && qo(r)), Wu && Nu.has(e) ? Nu.get(e) : e.v;
}
function Qt(e) {
  var t = bt;
  try {
    return bt = !0, e();
  } finally {
    bt = t;
  }
}
const Qc = -7169;
function at(e, t) {
  e.f = e.f & Qc | t;
}
function el(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (qt in e)
      Er(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && qt in u && Er(u);
      }
  }
}
function Er(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        Er(e[n], t);
      } catch (r) {
      }
    const u = Lr(e);
    if (u !== Object.prototype && u !== Array.prototype && u !== Map.prototype && u !== Set.prototype && u !== Date.prototype) {
      const n = Fo(u);
      for (let r in n) {
        const i = n[r].get;
        if (i)
          try {
            i.call(e);
          } catch (o) {
          }
      }
    }
  }
}
function tl(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const ul = [
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
function nl(e) {
  return ul.includes(e);
}
const rl = {
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
function il(e) {
  var t;
  return e = e.toLowerCase(), (t = rl[e]) != null ? t : e;
}
const ol = ["touchstart", "touchmove"];
function sl(e) {
  return ol.includes(e);
}
function al(e, t) {
  if (t) {
    const u = document.body;
    e.autofocus = !0, Hu(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let Mi = !1;
function cl() {
  Mi || (Mi = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        var t;
        if (!e.defaultPrevented)
          for (
            const u of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            (t = u.__on_r) == null || t.call(u);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function is(e) {
  var t = ne, u = ee;
  xt(null), jt(null);
  try {
    return e();
  } finally {
    xt(t), jt(u);
  }
}
function ll(e, t, u, n = u) {
  e.addEventListener(t, () => is(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), cl();
}
const os = /* @__PURE__ */ new Set(), kr = /* @__PURE__ */ new Set();
function ss(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || Ru.call(t, i), !i.cancelBubble)
      return is(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Hu(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Ii(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = ss(e, t, u, i);
  (t === document.body || t === window || t === document) && Hr(() => {
    t.removeEventListener(e, o, i);
  });
}
function Nn(e) {
  for (var t = 0; t < e.length; t++)
    os.add(e[t]);
  for (var u of kr)
    u(e);
}
function Ru(e) {
  var v;
  var t = this, u = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((v = e.composedPath) == null ? void 0 : v.call(e)) || [], i = (
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
        return i || u;
      }
    });
    var l = ne, f = ee;
    xt(null), jt(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var m = i["__" + n];
          if (m != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Ir(m)) {
              var [g, ...w] = m;
              g.apply(i, [e, ...w]);
            } else
              m.call(i, e);
        } catch (_) {
          h ? p.push(_) : h = _;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let _ of p)
          queueMicrotask(() => {
            throw _;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, xt(l), jt(f);
    }
  }
}
function Kr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function pu(e, t) {
  var u = (
    /** @type {Effect} */
    ee
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function fe(e, t) {
  var u = (t & Oc) !== 0, n = (t & Nc) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Kr(i ? e : "<!>" + e), u || (r = /** @type {Node} */
    /* @__PURE__ */ gt(r)));
    var o = (
      /** @type {TemplateNode} */
      n || Uo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (u) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      pu(s, a);
    } else
      pu(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function fl(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        Kr(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ gt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ gt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return pu(a, a), a;
  };
}
function Me() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = Tn();
  return e.append(t, u), pu(t, u), e;
}
function W(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function cu(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function nr(e, t) {
  return dl(e, t);
}
const iu = /* @__PURE__ */ new Map();
function dl(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  Pc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = sl(p);
        t.addEventListener(p, Ru, { passive: d });
        var m = iu.get(p);
        m === void 0 ? (document.addEventListener(p, Ru, { passive: d }), iu.set(p, 1)) : iu.set(p, m + 1);
      }
    }
  };
  a(zr(os)), kr.add(a);
  var c = void 0, l = $c(() => {
    var f = u != null ? u : t.appendChild(Tn());
    return Xt(() => {
      if (i) {
        xu({});
        var h = (
          /** @type {ComponentContext} */
          ce
        );
        h.c = i;
      }
      r && (n.$$events = r), c = e(f, n) || {}, i && vu();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, Ru);
        var p = (
          /** @type {number} */
          iu.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Ru), iu.delete(h)) : iu.set(h, p);
      }
      kr.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return hl.set(c, l), c;
}
let hl = /* @__PURE__ */ new WeakMap();
function Fe(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = qe, a = u > 0 ? ju : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? Mu(i) : p && (i = Xt(() => p(r))), o && hu(o, () => {
      o = null;
    })) : (o ? Mu(o) : p && (o = Xt(() => p(r, [u + 1, n]))), i && hu(i, () => {
      i = null;
    })));
  };
  $u(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function Jr(e, t) {
  return t;
}
function pl(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Vr(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    qc(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), Nt(e, t[0].prev, t[i - 1].next);
  }
  Jo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), Nt(e, l.prev, l.next)), Dt(l.e, !s);
    }
  });
}
function yn(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & zo) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(Tn());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Ur(() => {
    var p = u();
    return Ir(p) ? p : p == null ? [] : zr(p);
  });
  $u(() => {
    var p = R(h), d = p.length;
    f && d === 0 || (f = d === 0, bl(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? Mu(l) : l = Xt(() => i(o)) : l !== null && hu(l, () => {
      l = null;
    })), R(h));
  });
}
function bl(e, t, u, n, r, i, o) {
  var X, B, V, ae;
  var s = (r & Cc) !== 0, a = (r & (qr | jr)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, m, g = [], w = [], v, _, x, E;
  if (s)
    for (E = 0; E < c; E += 1)
      v = e[E], _ = i(v, E), x = l.get(_), x !== void 0 && ((X = x.a) == null || X.measure(), (m != null ? m : m = /* @__PURE__ */ new Set()).add(x));
  for (E = 0; E < c; E += 1) {
    if (v = e[E], _ = i(v, E), x = l.get(_), x === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = ml(
        A,
        t,
        d,
        d === null ? t.first : d.next,
        v,
        _,
        E,
        n,
        r,
        o
      ), l.set(_, d), g = [], w = [], h = d.next;
      continue;
    }
    if (a && gl(x, v, E, r), (x.e.f & At) !== 0 && (Mu(x.e), s && ((B = x.a) == null || B.unfix(), (m != null ? m : m = /* @__PURE__ */ new Set()).delete(x))), x !== h) {
      if (p !== void 0 && p.has(x)) {
        if (g.length < w.length) {
          var D = w[0], F;
          d = D.prev;
          var L = g[0], Y = g[g.length - 1];
          for (F = 0; F < g.length; F += 1)
            zi(g[F], D, u);
          for (F = 0; F < w.length; F += 1)
            p.delete(w[F]);
          Nt(t, L.prev, Y.next), Nt(t, d, L), Nt(t, Y, D), h = D, d = Y, E -= 1, g = [], w = [];
        } else
          p.delete(x), zi(x, h, u), Nt(t, x.prev, x.next), Nt(t, x, d === null ? t.first : d.next), Nt(t, d, x), d = x;
        continue;
      }
      for (g = [], w = []; h !== null && h.k !== _; )
        (h.e.f & At) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), w.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    g.push(x), d = x, h = x.next;
  }
  if (h !== null || p !== void 0) {
    for (var j = p === void 0 ? [] : zr(p); h !== null; )
      (h.e.f & At) === 0 && j.push(h), h = h.next;
    var G = j.length;
    if (G > 0) {
      var se = (r & zo) !== 0 && c === 0 ? u : null;
      if (s) {
        for (E = 0; E < G; E += 1)
          (V = j[E].a) == null || V.measure();
        for (E = 0; E < G; E += 1)
          (ae = j[E].a) == null || ae.fix();
      }
      pl(t, j, se, l);
    }
  }
  s && Hu(() => {
    var K;
    if (m !== void 0)
      for (x of m)
        (K = x.a) == null || K.apply();
  }), ee.first = t.first && t.first.e, ee.last = d && d.e;
}
function gl(e, t, u, n) {
  (n & qr) !== 0 && vr(e.v, t), (n & jr) !== 0 ? vr(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function ml(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & qr) !== 0, f = (a & Dc) === 0, h = l ? f ? /* @__PURE__ */ $r(r) : du(r) : r, p = (a & jr) === 0 ? o : du(o), d = {
    i: p,
    v: h,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: u,
    next: n
  };
  try {
    return d.e = Xt(() => s(e, h, p, c), Bc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function zi(e, t, u) {
  for (var n = e.next ? (
    /** @type {TemplateNode} */
    e.next.e.nodes_start
  ) : u, r = t ? (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ) : u, i = (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ); i !== n; ) {
    var o = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Fn(i)
    );
    r.before(i), i = o;
  }
}
function Nt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function _l(e, t, u = !1, n = !1, r = !1) {
  var i = e, o = "";
  _e(() => {
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
      u ? a = `<svg>${a}</svg>` : n && (a = `<math>${a}</math>`);
      var c = Kr(a);
      if ((u || n) && (c = /** @type {Element} */
      /* @__PURE__ */ gt(c)), pu(
        /** @type {TemplateNode} */
        /* @__PURE__ */ gt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), u || n)
        for (; /* @__PURE__ */ gt(c); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ gt(c)
          );
      else
        i.before(c);
    }
  });
}
function Le(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function xl(e, t, u) {
  var n = e, r, i;
  $u(() => {
    r !== (r = t()) && (i && (hu(i), i = null), r && (i = Xt(() => u(n, r))));
  }, ju);
}
function vl(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  $u(() => {
    const f = t() || null;
    var h = Ic;
    f !== o && (l && (f === null ? hu(l, () => {
      l = null, s = null;
    }) : f === s ? Mu(l) : Dt(l)), f && f !== s && (l = Xt(() => {
      if (a = document.createElementNS(h, f), pu(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(Tn())
        );
        n(a, p);
      }
      ee.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, ju);
}
function Mn(e, t) {
  Hu(() => {
    var r;
    var u = e.getRootNode(), n = (
      /** @type {ShadowRoot} */
      u.host ? (
        /** @type {ShadowRoot} */
        u
      ) : (
        /** @type {Document} */
        (r = u.head) != null ? r : (
          /** @type {Document} */
          u.ownerDocument.head
        )
      )
    );
    if (!n.querySelector("#" + t.hash)) {
      const i = document.createElement("style");
      i.id = t.hash, i.textContent = t.code, n.appendChild(i);
    }
  });
}
function as(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = as(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function yl() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = as(e)) && (n && (n += " "), n += t);
  return n;
}
function El(e) {
  return typeof e == "object" ? yl(e) : e != null ? e : "";
}
const Li = [...` 	
\r\f \v\uFEFF`];
function kl(e, t, u) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), u) {
    for (var r in u)
      if (u[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var i = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || Li.includes(n[o - 1])) && (s === n.length || Li.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Bi(e, t = !1) {
  var u = t ? " !important;" : ";", n = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (n += " " + r + ": " + i + u);
  }
  return n;
}
function rr(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function wl(e, t) {
  if (t) {
    var u = "", n, r;
    if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      n && a.push(...Object.keys(n).map(rr)), r && a.push(...Object.keys(r).map(rr));
      var c = 0, l = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === m - 1) {
            if (l !== -1) {
              var p = rr(e.substring(c, l).trim());
              if (!a.includes(p)) {
                h !== ";" && f++;
                var d = e.substring(c, f).trim();
                u += " " + d + ";";
              }
            }
            c = f + 1, l = -1;
          }
        }
      }
    }
    return n && (u += Bi(n)), r && (u += Bi(r, !0)), u = u.trim(), u === "" ? null : u;
  }
  return e == null ? null : String(e);
}
function wt(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u || o === void 0) {
    var s = kl(u, n, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  } else if (i && r !== i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
function ir(e, t = {}, u, n) {
  for (var r in u) {
    var i = u[r];
    t[r] !== i && (u[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, n));
  }
}
function it(e, t, u, n) {
  var r = e.__style;
  if (r !== t) {
    var i = wl(t, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else n && (Array.isArray(n) ? (ir(e, u == null ? void 0 : u[0], n[0]), ir(e, u == null ? void 0 : u[1], n[1], "important")) : ir(e, u, n));
  return n;
}
const Su = Symbol("class"), Tu = Symbol("style"), cs = Symbol("is custom element"), ls = Symbol("is html");
function Al(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function tt(e, t, u, n) {
  var r = fs(e);
  r[t] !== (r[t] = u) && (t === "loading" && (e[gc] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && ds(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function Pi(e, t, u, n, r = !1) {
  var v;
  var i = fs(e), o = i[cs], s = !i[ls], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in u || (u[l] = null);
  u.class ? u.class = El(u.class) : u[Su] && (u.class = null), u[Tu] && ((v = u.style) != null || (u.style = null));
  var f = ds(e);
  for (const _ in u) {
    let x = u[_];
    if (c && _ === "value" && x == null) {
      e.value = e.__value = "", a[_] = x;
      continue;
    }
    if (_ === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      wt(e, h, x, n, t == null ? void 0 : t[Su], u[Su]), a[_] = x, a[Su] = u[Su];
      continue;
    }
    if (_ === "style") {
      it(e, x, t == null ? void 0 : t[Tu], u[Tu]), a[_] = x, a[Tu] = u[Tu];
      continue;
    }
    var p = a[_];
    if (x !== p) {
      a[_] = x;
      var d = _[0] + _[1];
      if (d !== "$$")
        if (d === "on") {
          const E = {}, A = "$$" + _;
          let D = _.slice(2);
          var m = nl(D);
          if (tl(D) && (D = D.slice(0, -7), E.capture = !0), !m && p) {
            if (x != null) continue;
            e.removeEventListener(D, a[A], E), a[A] = null;
          }
          if (x != null)
            if (m)
              e[`__${D}`] = x, Nn([D]);
            else {
              let F = function(L) {
                a[_].call(this, L);
              };
              a[A] = ss(D, e, F, E);
            }
          else m && (e[`__${D}`] = void 0);
        } else if (_ === "style")
          tt(e, _, x);
        else if (_ === "autofocus")
          al(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!o && (_ === "__value" || _ === "value" && x != null))
          e.value = e.__value = x;
        else if (_ === "selected" && c)
          Al(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var g = _;
          s || (g = il(g));
          var w = g === "defaultValue" || g === "defaultChecked";
          if (x == null && !o && !w)
            if (i[_] = null, g === "value" || g === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (g === "value") {
                let D = E.defaultValue;
                E.removeAttribute(g), E.defaultValue = D, E.value = E.__value = A ? D : null;
              } else {
                let D = E.defaultChecked;
                E.removeAttribute(g), E.defaultChecked = D, E.checked = A ? D : !1;
              }
            } else
              e.removeAttribute(_);
          else w || f.includes(g) && (o || typeof x != "string") ? e[g] = x : typeof x != "function" && tt(e, g, x);
        }
    }
  }
  return a;
}
function fs(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [cs]: e.nodeName.includes("-"),
      [ls]: e.namespaceURI === Mc
    }
  );
}
var qi = /* @__PURE__ */ new Map();
function ds(e) {
  var t = qi.get(e.nodeName);
  if (t) return t;
  qi.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = Fo(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = Lr(n);
  }
  return t;
}
function Cl(e, t, u = t) {
  var n = Uu();
  ll(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = or(e) ? sr(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qt(t) == null && e.value && u(or(e) ? sr(e.value) : e.value), Gr(() => {
    var r = t();
    or(e) && r === sr(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function or(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function sr(e) {
  return e === "" ? null : +e;
}
function ji(e, t) {
  return e === t || (e == null ? void 0 : e[qt]) === t;
}
function ln(e = {}, t, u, n) {
  return Wr(() => {
    var r, i;
    return Gr(() => {
      r = i, i = [], Qt(() => {
        e !== u(...i) && (t(e, ...i), r && ji(u(...r), e) && t(null, ...r));
      });
    }), () => {
      Hu(() => {
        i && ji(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function Dl(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ce
  ), u = t.l.u;
  if (!u) return;
  let n = () => el(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ fu(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== i[c] && (i[c] = a[c], s = !0);
      return s && r++, r;
    });
    n = () => R(o);
  }
  u.b.length && Uc(() => {
    Ui(t, n), pn(u.b);
  }), Yt(() => {
    const r = Qt(() => u.m.map(dc));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && Yt(() => {
    Ui(t, n), pn(u.a);
  });
}
function Ui(e, t) {
  if (e.l.s)
    for (const u of e.l.s) R(u);
  t();
}
function hs(e, t, u) {
  if (e == null)
    return t(void 0), au;
  const n = Qt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const ou = [];
function Sl(e, t = au) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Io(e, s) && (e = s, u)) {
      const a = !ou.length;
      for (const c of n)
        c[1](), ou.push(c, e);
      if (a) {
        for (let c = 0; c < ou.length; c += 2)
          ou[c][0](ou[c + 1]);
        ou.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = au) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (u = t(r, i) || au), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function ps(e) {
  let t;
  return hs(e, (u) => t = u)(), t;
}
let on = !1, wr = Symbol();
function Tl(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ $r(void 0),
    unsubscribe: au
  };
  if (n.store !== e && !(wr in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = au;
    else {
      var r = !0;
      n.unsubscribe = hs(e, (o) => {
        r ? n.source.v = o : te(n.source, o);
      }), r = !1;
    }
  return e && wr in u ? ps(e) : R(n.source);
}
function Fl() {
  const e = {};
  function t() {
    Hr(() => {
      for (var u in e)
        e[u].unsubscribe();
      To(e, wr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function Rl(e) {
  var t = on;
  try {
    return on = !1, [e(), on];
  } finally {
    on = t;
  }
}
const Ol = {
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
function Nl(e, t, u) {
  return new Proxy(
    { props: e, exclude: t },
    Ol
  );
}
const Ml = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return R(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, u) {
    return t in e.special || (e.special[t] = Gt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Lo
    )), e.special[t](u), Si(e.version), !0;
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
function Ne(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: du(0) }, Ml);
}
const Il = {
  get(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (Du(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, u) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      Du(r) && (r = r());
      const i = Pt(r, t);
      if (i && i.set)
        return i.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (Du(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = Pt(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === qt || t === No) return !1;
    for (let u of e.props)
      if (Du(u) && (u = u()), u != null && t in u) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let u of e.props) {
      Du(u) && (u = u());
      for (const n in u)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function We(...e) {
  return new Proxy({ props: e }, Il);
}
function $i(e) {
  var t, u;
  return (u = (t = e.ctx) == null ? void 0 : t.d) != null ? u : !1;
}
function Gt(e, t, u, n) {
  var A, D;
  var r = (u & Sc) !== 0, i = !_u || (u & Tc) !== 0, o = (u & Fc) !== 0, s = (u & Rc) !== 0, a = !1, c;
  o ? [c, a] = Rl(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = qt in e || No in e, f = o && ((D = (A = Pt(e, t)) == null ? void 0 : A.set) != null ? D : l && t in e && ((F) => e[t] = F)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, m = () => (d = !0, p && (p = !1, s ? h = Qt(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && yc(), c = m(), f && f(c));
  var g;
  if (i)
    g = () => {
      var F = (
        /** @type {V} */
        e[t]
      );
      return F === void 0 ? m() : (p = !0, d = !1, F);
    };
  else {
    var w = (r ? fu : Ur)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    w.f |= pc, g = () => {
      var F = R(w);
      return F !== void 0 && (h = /** @type {V} */
      void 0), F === void 0 ? h : F;
    };
  }
  if ((u & Lo) === 0)
    return g;
  if (f) {
    var v = e.$$legacy;
    return function(F, L) {
      return arguments.length > 0 ? ((!i || !L || v || a) && f(L ? g() : F), F) : g();
    };
  }
  var _ = !1, x = /* @__PURE__ */ $r(c), E = /* @__PURE__ */ fu(() => {
    var F = g(), L = R(x);
    return _ ? (_ = !1, L) : x.v = F;
  });
  return o && R(E), r || (E.equals = Pr), function(F, L) {
    if (arguments.length > 0) {
      const Y = L ? R(E) : i && o ? Vt(F) : F;
      if (!E.equals(Y)) {
        if (_ = !0, te(x, Y), d && h !== void 0 && (h = Y), $i(E))
          return F;
        Qt(() => R(E));
      }
      return F;
    }
    return $i(E) ? E.v : R(E);
  };
}
function bs(e) {
  ce === null && zc(), _u && ce.l !== null ? zl(ce).m.push(e) : Yt(() => {
    const t = Qt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function zl(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const Ll = "5";
var Co, Do, So;
typeof window != "undefined" && ((So = (Do = (Co = window.__svelte) != null ? Co : window.__svelte = {}).v) != null ? So : Do.v = /* @__PURE__ */ new Set()).add(Ll);
function gs(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Bl } = Object.prototype, { getPrototypeOf: Yr } = Object, { iterator: In, toStringTag: ms } = Symbol, zn = /* @__PURE__ */ ((e) => (t) => {
  const u = Bl.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ct = (e) => (e = e.toLowerCase(), (t) => zn(t) === e), Ln = (e) => (t) => typeof t === e, { isArray: Eu } = Array, zu = Ln("undefined");
function Pl(e) {
  return e !== null && !zu(e) && e.constructor !== null && !zu(e.constructor) && je(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _s = ct("ArrayBuffer");
function ql(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _s(e.buffer), t;
}
const jl = Ln("string"), je = Ln("function"), xs = Ln("number"), Bn = (e) => e !== null && typeof e == "object", Ul = (e) => e === !0 || e === !1, fn = (e) => {
  if (zn(e) !== "object")
    return !1;
  const t = Yr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(ms in e) && !(In in e);
}, $l = ct("Date"), Hl = ct("File"), Wl = ct("Blob"), Gl = ct("FileList"), Vl = (e) => Bn(e) && je(e.pipe), Zl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || je(e.append) && ((t = zn(e)) === "formdata" || // detect form-data instance
  t === "object" && je(e.toString) && e.toString() === "[object FormData]"));
}, Kl = ct("URLSearchParams"), [Jl, Yl, Xl, Ql] = ["ReadableStream", "Request", "Response", "Headers"].map(ct), e0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), Eu(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const i = u ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function vs(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const Zt = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, ys = (e) => !zu(e) && e !== Zt;
function Ar() {
  const { caseless: e } = ys(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && vs(t, r) || r;
    fn(t[i]) && fn(n) ? t[i] = Ar(t[i], n) : fn(n) ? t[i] = Ar({}, n) : Eu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Vu(arguments[n], u);
  return t;
}
const t0 = (e, t, u, { allOwnKeys: n } = {}) => (Vu(t, (r, i) => {
  u && je(r) ? e[i] = gs(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), u0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), n0 = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, r0 = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && Yr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, i0 = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, o0 = (e) => {
  if (!e) return null;
  if (Eu(e)) return e;
  let t = e.length;
  if (!xs(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, s0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Yr(Uint8Array)), a0 = (e, t) => {
  const n = (e && e[In]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, c0 = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, l0 = ct("HTMLFormElement"), f0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), Hi = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), d0 = ct("RegExp"), Es = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  Vu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, h0 = (e) => {
  Es(e, (t, u) => {
    if (je(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (je(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, p0 = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return Eu(e) ? n(e) : n(String(e).split(t)), u;
}, b0 = () => {
}, g0 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function m0(e) {
  return !!(e && je(e.append) && e[ms] === "FormData" && e[In]);
}
const _0 = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (Bn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = Eu(n) ? [] : {};
        return Vu(n, (o, s) => {
          const a = u(o, r + 1);
          !zu(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, x0 = ct("AsyncFunction"), v0 = (e) => e && (Bn(e) || je(e)) && je(e.then) && je(e.catch), ks = ((e, t) => e ? setImmediate : t ? ((u, n) => (Zt.addEventListener("message", ({ source: r, data: i }) => {
  r === Zt && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), Zt.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  je(Zt.postMessage)
), y0 = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Zt) : typeof process != "undefined" && process.nextTick || ks, E0 = (e) => e != null && je(e[In]), y = {
  isArray: Eu,
  isArrayBuffer: _s,
  isBuffer: Pl,
  isFormData: Zl,
  isArrayBufferView: ql,
  isString: jl,
  isNumber: xs,
  isBoolean: Ul,
  isObject: Bn,
  isPlainObject: fn,
  isReadableStream: Jl,
  isRequest: Yl,
  isResponse: Xl,
  isHeaders: Ql,
  isUndefined: zu,
  isDate: $l,
  isFile: Hl,
  isBlob: Wl,
  isRegExp: d0,
  isFunction: je,
  isStream: Vl,
  isURLSearchParams: Kl,
  isTypedArray: s0,
  isFileList: Gl,
  forEach: Vu,
  merge: Ar,
  extend: t0,
  trim: e0,
  stripBOM: u0,
  inherits: n0,
  toFlatObject: r0,
  kindOf: zn,
  kindOfTest: ct,
  endsWith: i0,
  toArray: o0,
  forEachEntry: a0,
  matchAll: c0,
  isHTMLForm: l0,
  hasOwnProperty: Hi,
  hasOwnProp: Hi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Es,
  freezeMethods: h0,
  toObjectSet: p0,
  toCamelCase: f0,
  noop: b0,
  toFiniteNumber: g0,
  findKey: vs,
  global: Zt,
  isContextDefined: ys,
  isSpecCompliantForm: m0,
  toJSONObject: _0,
  isAsyncFn: x0,
  isThenable: v0,
  setImmediate: ks,
  asap: y0,
  isIterable: E0
};
function $(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
y.inherits($, Error, {
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
      config: y.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const ws = $.prototype, As = {};
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
  As[e] = { value: e };
});
Object.defineProperties($, As);
Object.defineProperty(ws, "isAxiosError", { value: !0 });
$.from = (e, t, u, n, r, i) => {
  const o = Object.create(ws);
  return y.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), $.call(o, e.message, t, u, n, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const k0 = null;
function Cr(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Cs(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Wi(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = Cs(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function w0(e) {
  return y.isArray(e) && !e.some(Cr);
}
const A0 = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Pn(e, t, u) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = y.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !y.isUndefined(g[m]);
  });
  const n = u.metaTokens, r = u.visitor || l, i = u.dots, o = u.indexes, a = (u.Blob || typeof Blob != "undefined" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (y.isDate(d))
      return d.toISOString();
    if (!a && y.isBlob(d))
      throw new $("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(d) || y.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, g) {
    let w = d;
    if (d && !g && typeof d == "object") {
      if (y.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (y.isArray(d) && w0(d) || (y.isFileList(d) || y.endsWith(m, "[]")) && (w = y.toArray(d)))
        return m = Cs(m), w.forEach(function(_, x) {
          !(y.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Wi([m], x, i) : o === null ? m : m + "[]",
            c(_)
          );
        }), !1;
    }
    return Cr(d) ? !0 : (t.append(Wi(g, m, i), c(d)), !1);
  }
  const f = [], h = Object.assign(A0, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Cr
  });
  function p(d, m) {
    if (!y.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), y.forEach(d, function(w, v) {
        (!(y.isUndefined(w) || w === null) && r.call(
          t,
          w,
          y.isString(v) ? v.trim() : v,
          m,
          h
        )) === !0 && p(w, m ? m.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Gi(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Xr(e, t) {
  this._pairs = [], e && Pn(e, this, t);
}
const Ds = Xr.prototype;
Ds.append = function(t, u) {
  this._pairs.push([t, u]);
};
Ds.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, Gi);
  } : Gi;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function C0(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ss(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || C0;
  y.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = y.isURLSearchParams(t) ? t.toString() : new Xr(t, u).toString(n), i) {
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
  use(t, u, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: u,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
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
    y.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Ts = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, D0 = typeof URLSearchParams != "undefined" ? URLSearchParams : Xr, S0 = typeof FormData != "undefined" ? FormData : null, T0 = typeof Blob != "undefined" ? Blob : null, F0 = {
  isBrowser: !0,
  classes: {
    URLSearchParams: D0,
    FormData: S0,
    Blob: T0
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qr = typeof window != "undefined" && typeof document != "undefined", Dr = typeof navigator == "object" && navigator || void 0, R0 = Qr && (!Dr || ["ReactNative", "NativeScript", "NS"].indexOf(Dr.product) < 0), O0 = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", N0 = Qr && window.location.href || "http://localhost", M0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qr,
  hasStandardBrowserEnv: R0,
  hasStandardBrowserWebWorkerEnv: O0,
  navigator: Dr,
  origin: N0
}, Symbol.toStringTag, { value: "Module" })), Re = be(be({}, M0), F0);
function I0(e, t) {
  return Pn(e, new Re.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return Re.isNode && y.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function z0(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function L0(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let i;
  for (n = 0; n < r; n++)
    i = u[n], t[i] = e[i];
  return t;
}
function Fs(e) {
  function t(u, n, r, i) {
    let o = u[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= u.length;
    return o = !o && y.isArray(r) ? r.length : o, a ? (y.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !y.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && y.isArray(r[o]) && (r[o] = L0(r[o])), !s);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const u = {};
    return y.forEachEntry(e, (n, r) => {
      t(z0(n), r, u, 0);
    }), u;
  }
  return null;
}
function B0(e, t, u) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const Zu = {
  transitional: Ts,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, i = y.isObject(t);
    if (i && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return r ? JSON.stringify(Fs(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return I0(t, this.formSerializer).toString();
      if ((s = y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Pn(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), B0(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || Zu.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (y.isResponse(t) || y.isReadableStream(t))
      return t;
    if (t && y.isString(t) && (n && !this.responseType || r)) {
      const o = !(u && u.silentJSONParsing) && r;
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
    FormData: Re.classes.FormData,
    Blob: Re.classes.Blob
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
y.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Zu.headers[e] = {};
});
const P0 = y.toObjectSet([
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
]), q0 = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && P0[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, Zi = Symbol("internals");
function Fu(e) {
  return e && String(e).trim().toLowerCase();
}
function dn(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(dn) : String(e);
}
function j0(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const U0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ar(e, t, u, n, r) {
  if (y.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!y.isString(t)) {
    if (y.isString(n))
      return t.indexOf(n) !== -1;
    if (y.isRegExp(n))
      return n.test(t);
  }
}
function $0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function H0(e, t) {
  const u = y.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + u, {
      value: function(r, i, o) {
        return this[n].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let Ue = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = Fu(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = dn(s));
    }
    const o = (s, a) => y.forEach(s, (c, l) => i(c, l, a));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (y.isString(t) && (t = t.trim()) && !U0(t))
      o(q0(t), u);
    else if (y.isObject(t) && y.isIterable(t)) {
      let s = {}, a, c;
      for (const l of t) {
        if (!y.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = l[0]] = (a = s[c]) ? y.isArray(a) ? [...a, l[1]] : [a, l[1]] : l[1];
      }
      o(s, u);
    } else
      t != null && i(u, t, n);
    return this;
  }
  get(t, u) {
    if (t = Fu(t), t) {
      const n = y.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return j0(r);
        if (y.isFunction(u))
          return u.call(this, r, n);
        if (y.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = Fu(t), t) {
      const n = y.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || ar(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = Fu(o), o) {
        const s = y.findKey(n, o);
        s && (!u || ar(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return y.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const i = u[n];
      (!t || ar(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return y.forEach(this, (r, i) => {
      const o = y.findKey(n, i);
      if (o) {
        u[o] = dn(r), delete u[i];
        return;
      }
      const s = t ? $0(i) : String(i).trim();
      s !== i && delete u[i], u[s] = dn(r), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const u = /* @__PURE__ */ Object.create(null);
    return y.forEach(this, (n, r) => {
      n != null && n !== !1 && (u[r] = t && y.isArray(n) ? n.join(", ") : n);
    }), u;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, u]) => t + ": " + u).join(`
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
  static concat(t, ...u) {
    const n = new this(t);
    return u.forEach((r) => n.set(r)), n;
  }
  static accessor(t) {
    const n = (this[Zi] = this[Zi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = Fu(o);
      n[s] || (H0(r, o), n[s] = !0);
    }
    return y.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Ue.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(Ue.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
y.freezeMethods(Ue);
function cr(e, t) {
  const u = this || Zu, n = t || u, r = Ue.from(n.headers);
  let i = n.data;
  return y.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Rs(e) {
  return !!(e && e.__CANCEL__);
}
function ku(e, t, u) {
  $.call(this, e == null ? "canceled" : e, $.ERR_CANCELED, t, u), this.name = "CanceledError";
}
y.inherits(ku, $, {
  __CANCEL__: !0
});
function Os(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new $(
    "Request failed with status code " + u.status,
    [$.ERR_BAD_REQUEST, $.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function W0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function G0(e, t) {
  e = e || 10;
  const u = new Array(e), n = new Array(e);
  let r = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(a) {
    const c = Date.now(), l = n[i];
    o || (o = c), u[r] = a, n[r] = c;
    let f = i, h = 0;
    for (; f !== r; )
      h += u[f++], f = f % e;
    if (r = (r + 1) % e, r === i && (i = (i + 1) % e), c - o < t)
      return;
    const p = l && c - l;
    return p ? Math.round(h * 1e3 / p) : void 0;
  };
}
function V0(e, t) {
  let u = 0, n = 1e3 / t, r, i;
  const o = (c, l = Date.now()) => {
    u = l, r = null, i && (clearTimeout(i), i = null), e.apply(null, c);
  };
  return [(...c) => {
    const l = Date.now(), f = l - u;
    f >= n ? o(c, l) : (r = c, i || (i = setTimeout(() => {
      i = null, o(r);
    }, n - f)));
  }, () => r && o(r)];
}
const En = (e, t, u = 3) => {
  let n = 0;
  const r = G0(50, 250);
  return V0((i) => {
    const o = i.loaded, s = i.lengthComputable ? i.total : void 0, a = o - n, c = r(a), l = o <= s;
    n = o;
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
  }, u);
}, Ki = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, Ji = (e) => (...t) => y.asap(() => e(...t)), Z0 = Re.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, Re.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(Re.origin),
  Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
) : () => !0, K0 = Re.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, u, n, r, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      y.isNumber(u) && o.push("expires=" + new Date(u).toGMTString()), y.isString(n) && o.push("path=" + n), y.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function J0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Y0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ns(e, t, u) {
  let n = !J0(t);
  return e && (n || u == !1) ? Y0(e, t) : t;
}
const Yi = (e) => e instanceof Ue ? be({}, e) : e;
function eu(e, t) {
  t = t || {};
  const u = {};
  function n(c, l, f, h) {
    return y.isPlainObject(c) && y.isPlainObject(l) ? y.merge.call({ caseless: h }, c, l) : y.isPlainObject(l) ? y.merge({}, l) : y.isArray(l) ? l.slice() : l;
  }
  function r(c, l, f, h) {
    if (y.isUndefined(l)) {
      if (!y.isUndefined(c))
        return n(void 0, c, f, h);
    } else return n(c, l, f, h);
  }
  function i(c, l) {
    if (!y.isUndefined(l))
      return n(void 0, l);
  }
  function o(c, l) {
    if (y.isUndefined(l)) {
      if (!y.isUndefined(c))
        return n(void 0, c);
    } else return n(void 0, l);
  }
  function s(c, l, f) {
    if (f in t)
      return n(c, l);
    if (f in e)
      return n(void 0, c);
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
    headers: (c, l, f) => r(Yi(c), Yi(l), f, !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    y.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const Ms = (e) => {
  const t = eu({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = Ue.from(o), t.url = Ss(Ns(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (y.isFormData(u)) {
    if (Re.hasStandardBrowserEnv || Re.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Re.hasStandardBrowserEnv && (n && y.isFunction(n) && (n = n(t)), n || n !== !1 && Z0(t.url))) {
    const c = r && i && K0.read(i);
    c && o.set(r, c);
  }
  return t;
}, X0 = typeof XMLHttpRequest != "undefined", Q0 = X0 && function(e) {
  return new Promise(function(u, n) {
    const r = Ms(e);
    let i = r.data;
    const o = Ue.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function m() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function w() {
      if (!g)
        return;
      const _ = Ue.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: _,
        config: e,
        request: g
      };
      Os(function(D) {
        u(D), m();
      }, function(D) {
        n(D), m();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = w : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, g.onabort = function() {
      g && (n(new $("Request aborted", $.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new $("Network Error", $.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let x = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const E = r.transitional || Ts;
      r.timeoutErrorMessage && (x = r.timeoutErrorMessage), n(new $(
        x,
        E.clarifyTimeoutError ? $.ETIMEDOUT : $.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && y.forEach(o.toJSON(), function(x, E) {
      g.setRequestHeader(E, x);
    }), y.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), s && s !== "json" && (g.responseType = r.responseType), c && ([h, d] = En(c, !0), g.addEventListener("progress", h)), a && g.upload && ([f, p] = En(a), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (_) => {
      g && (n(!_ || _.type ? new ku(null, e, g) : _), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const v = W0(r.url);
    if (v && Re.protocols.indexOf(v) === -1) {
      n(new $("Unsupported protocol " + v + ":", $.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, ef = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof $ ? l : new ku(l instanceof Error ? l.message : l));
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
    const { signal: a } = n;
    return a.unsubscribe = () => y.asap(s), a;
  }
}, tf = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, uf = function(e, t) {
  return er(this, null, function* () {
    try {
      for (var u = Ai(nf(e)), n, r, i; n = !(r = yield new Wt(u.next())).done; n = !1) {
        const o = r.value;
        yield* tr(tf(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        n && (r = u.return) && (yield new Wt(r.call(u)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, nf = function(e) {
  return er(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* tr(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: u, value: n } = yield new Wt(t.read());
        if (u)
          break;
        yield n;
      }
    } finally {
      yield new Wt(t.cancel());
    }
  });
}, Xi = (e, t, u, n) => {
  const r = uf(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    pull(c) {
      return Ce(this, null, function* () {
        try {
          const { done: l, value: f } = yield r.next();
          if (l) {
            s(), c.close();
            return;
          }
          let h = f.byteLength;
          if (u) {
            let p = i += h;
            u(p);
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
}, qn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Is = qn && typeof ReadableStream == "function", rf = qn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => Ce(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), zs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, of = Is && zs(() => {
  let e = !1;
  const t = new Request(Re.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Qi = 64 * 1024, Sr = Is && zs(() => y.isReadableStream(new Response("").body)), kn = {
  stream: Sr && ((e) => e.body)
};
qn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !kn[t] && (kn[t] = y.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new $(`Response type '${t}' is not supported`, $.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const sf = (e) => Ce(null, null, function* () {
  if (e == null)
    return 0;
  if (y.isBlob(e))
    return e.size;
  if (y.isSpecCompliantForm(e))
    return (yield new Request(Re.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (y.isArrayBufferView(e) || y.isArrayBuffer(e))
    return e.byteLength;
  if (y.isURLSearchParams(e) && (e = e + ""), y.isString(e))
    return (yield rf(e)).byteLength;
}), af = (e, t) => Ce(null, null, function* () {
  const u = y.toFiniteNumber(e.getContentLength());
  return u == null ? sf(t) : u;
}), cf = qn && ((e) => Ce(null, null, function* () {
  let {
    url: t,
    method: u,
    data: n,
    signal: r,
    cancelToken: i,
    timeout: o,
    onDownloadProgress: s,
    onUploadProgress: a,
    responseType: c,
    headers: l,
    withCredentials: f = "same-origin",
    fetchOptions: h
  } = Ms(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = ef([r, i && i.toAbortSignal()], o), d;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (a && of && u !== "get" && u !== "head" && (g = yield af(l, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), A;
      if (y.isFormData(n) && (A = E.headers.get("content-type")) && l.setContentType(A), E.body) {
        const [D, F] = Ki(
          g,
          En(Ji(a))
        );
        n = Xi(E.body, Qi, D, F);
      }
    }
    y.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    d = new Request(t, Se(be({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: w ? f : void 0
    }));
    let v = yield fetch(d);
    const _ = Sr && (c === "stream" || c === "response");
    if (Sr && (s || _ && m)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((L) => {
        E[L] = v[L];
      });
      const A = y.toFiniteNumber(v.headers.get("content-length")), [D, F] = s && Ki(
        A,
        En(Ji(s), !0)
      ) || [];
      v = new Response(
        Xi(v.body, Qi, D, () => {
          F && F(), m && m();
        }),
        E
      );
    }
    c = c || "text";
    let x = yield kn[y.findKey(kn, c) || "text"](v, e);
    return !_ && m && m(), yield new Promise((E, A) => {
      Os(E, A, {
        data: x,
        headers: Ue.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (w) {
    throw m && m(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new $("Network Error", $.ERR_NETWORK, e, d),
      {
        cause: w.cause || w
      }
    ) : $.from(w, w && w.code, e, d);
  }
})), Tr = {
  http: k0,
  xhr: Q0,
  fetch: cf
};
y.forEach(Tr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (u) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const eo = (e) => `- ${e}`, lf = (e) => y.isFunction(e) || e === null || e === !1, Ls = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !lf(u) && (n = Tr[(o = String(u)).toLowerCase()], n === void 0))
        throw new $(`Unknown adapter '${o}'`);
      if (n)
        break;
      r[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(eo).join(`
`) : " " + eo(i[0]) : "as no adapter specified";
      throw new $(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Tr
};
function lr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ku(null, e);
}
function to(e) {
  return lr(e), e.headers = Ue.from(e.headers), e.data = cr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ls.getAdapter(e.adapter || Zu.adapter)(e).then(function(n) {
    return lr(e), n.data = cr.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ue.from(n.headers), n;
  }, function(n) {
    return Rs(n) || (lr(e), n && n.response && (n.response.data = cr.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ue.from(n.response.headers))), Promise.reject(n);
  });
}
const Bs = "1.9.0", jn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  jn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const uo = {};
jn.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + Bs + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new $(
        r(o, " has been removed" + (u ? " in " + u : "")),
        $.ERR_DEPRECATED
      );
    return u && !uo[o] && (uo[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
jn.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function ff(e, t, u) {
  if (typeof e != "object")
    throw new $("options must be an object", $.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new $("option " + i + " must be " + a, $.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new $("Unknown option " + i, $.ERR_BAD_OPTION);
  }
}
const hn = {
  assertOptions: ff,
  validators: jn
}, pt = hn.validators;
let Jt = class {
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
  request(t, u) {
    return Ce(this, null, function* () {
      try {
        return yield this._request(t, u);
      } catch (n) {
        if (n instanceof Error) {
          let r = {};
          Error.captureStackTrace ? Error.captureStackTrace(r) : r = new Error();
          const i = r.stack ? r.stack.replace(/^.+\n/, "") : "";
          try {
            n.stack ? i && !String(n.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (n.stack += `
` + i) : n.stack = i;
          } catch (o) {
          }
        }
        throw n;
      }
    });
  }
  _request(t, u) {
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = eu(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: i } = u;
    n !== void 0 && hn.assertOptions(n, {
      silentJSONParsing: pt.transitional(pt.boolean),
      forcedJSONParsing: pt.transitional(pt.boolean),
      clarifyTimeoutError: pt.transitional(pt.boolean)
    }, !1), r != null && (y.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : hn.assertOptions(r, {
      encode: pt.function,
      serialize: pt.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), hn.assertOptions(u, {
      baseUrl: pt.spelling("baseURL"),
      withXsrfToken: pt.spelling("withXSRFToken")
    }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
    let o = i && y.merge(
      i.common,
      i[u.method]
    );
    i && y.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), u.headers = Ue.concat(o, i);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(m) {
      typeof m.runWhen == "function" && m.runWhen(u) === !1 || (a = a && m.synchronous, s.unshift(m.fulfilled, m.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(m) {
      c.push(m.fulfilled, m.rejected);
    });
    let l, f = 0, h;
    if (!a) {
      const d = [to.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, c), h = d.length, l = Promise.resolve(u); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = s.length;
    let p = u;
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
      l = to.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = eu(this.defaults, t);
    const u = Ns(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ss(u, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
  Jt.prototype[t] = function(u, n) {
    return this.request(eu(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(i, o, s) {
      return this.request(eu(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Jt.prototype[t] = u(), Jt.prototype[t + "Form"] = u(!0);
});
let df = class Ps {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let u;
    this.promise = new Promise(function(i) {
      u = i;
    });
    const n = this;
    this.promise.then((r) => {
      if (!n._listeners) return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](r);
      n._listeners = null;
    }), this.promise.then = (r) => {
      let i;
      const o = new Promise((s) => {
        n.subscribe(s), i = s;
      }).then(r);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, s) {
      n.reason || (n.reason = new ku(i, o, s), u(n.reason));
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
    const u = this._listeners.indexOf(t);
    u !== -1 && this._listeners.splice(u, 1);
  }
  toAbortSignal() {
    const t = new AbortController(), u = (n) => {
      t.abort(n);
    };
    return this.subscribe(u), t.signal.unsubscribe = () => this.unsubscribe(u), t.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new Ps(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function hf(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function pf(e) {
  return y.isObject(e) && e.isAxiosError === !0;
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
function qs(e) {
  const t = new Jt(e), u = gs(Jt.prototype.request, t);
  return y.extend(u, Jt.prototype, t, { allOwnKeys: !0 }), y.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return qs(eu(e, r));
  }, u;
}
const le = qs(Zu);
le.Axios = Jt;
le.CanceledError = ku;
le.CancelToken = df;
le.isCancel = Rs;
le.VERSION = Bs;
le.toFormData = Pn;
le.AxiosError = $;
le.Cancel = le.CanceledError;
le.all = function(t) {
  return Promise.all(t);
};
le.spread = hf;
le.isAxiosError = pf;
le.mergeConfig = eu;
le.AxiosHeaders = Ue;
le.formToJSON = (e) => Fs(y.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = Ls.getAdapter;
le.HttpStatusCode = Fr;
le.default = le;
const {
  Axios: Ap,
  AxiosError: Cp,
  CanceledError: Dp,
  isCancel: Sp,
  CancelToken: Tp,
  VERSION: Fp,
  all: Rp,
  Cancel: Op,
  isAxiosError: Np,
  spread: Mp,
  toFormData: Ip,
  AxiosHeaders: zp,
  HttpStatusCode: Lp,
  formToJSON: Bp,
  getAdapter: Pp,
  mergeConfig: qp
} = le, bf = le.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), gf = le.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), mf = {
  messages: [],
  isLoading: !1,
  conversation_id: null,
  error: null,
  hasMore: !0,
  nextCursor: null
}, et = Sl(mf), _f = (e, t) => Ce(null, null, function* () {
  var i;
  const u = t.bot_id;
  if (!u)
    throw new Error("Bot ID is required");
  const n = ps(et);
  let r = "";
  et.update((o) => Se(be({}, o), {
    messages: [
      ...o.messages,
      {
        role: "human",
        content: e,
        timestamp: /* @__PURE__ */ new Date()
      },
      {
        role: "ai",
        content: "",
        timestamp: /* @__PURE__ */ new Date(),
        isStreaming: !0
      }
    ],
    isLoading: !0
  }));
  try {
    const o = !!n.conversation_id && n.messages.length > 0, s = {
      bot_id: u,
      prompt: e,
      stream: !0,
      source: "widget"
    };
    o && (s.conversation_id = n.conversation_id);
    const c = yield fetch("https://beta.fluentbot.ai/ai/chat/completion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "text/event-stream",
        "Cache-Control": "no-cache"
      },
      body: JSON.stringify(s)
    });
    if (!c.ok || !c.body)
      throw new Error(`Request failed: ${c.status} ${c.statusText}`);
    const l = c.body.getReader(), f = new TextDecoder();
    let h = "", p = "", d = [];
    const m = () => {
      if (!p && d.length === 0) return;
      const g = d.join(`
`), w = p || "message";
      if (w === "message")
        g && g.length > 0 && (r += g, et.update((v) => Se(be({}, v), {
          messages: v.messages.map((_) => _.isStreaming ? Se(be({}, _), { content: r }) : _)
        })));
      else if (w === "sources")
        try {
          const v = JSON.parse(g);
          Array.isArray(v) && et.update((_) => Se(be({}, _), {
            messages: _.messages.map((x) => x.isStreaming ? Se(be({}, x), { sources: v }) : x)
          }));
        } catch (v) {
        }
      else if (w === "conversation_id") {
        const v = g.trim();
        localStorage.setItem("conversation_id", v), et.update((_) => Se(be({}, _), {
          conversation_id: v
        }));
      }
      p = "", d = [];
    };
    for (; ; ) {
      const { value: g, done: w } = yield l.read();
      if (w) break;
      h += f.decode(g, { stream: !0 });
      const v = h.split(/\r?\n/);
      h = (i = v.pop()) != null ? i : "";
      for (const _ of v)
        _.startsWith("event:") ? (m(), p = _.slice(6).trim()) : _.startsWith("data:") ? d.push(_.slice(5)) : _.trim() === "" && m();
    }
    if (h.length > 0) {
      const g = h.trimEnd();
      if (g) {
        const w = g.split(/\r?\n/);
        for (const v of w)
          v.startsWith("event:") ? (m(), p = v.slice(6).trim()) : v.startsWith("data:") && d.push(v.slice(5));
      }
    }
    m(), et.update((g) => {
      const w = g.messages.find((_) => _.isStreaming);
      if (!w)
        return Se(be({}, g), { isLoading: !1 });
      const v = {
        role: "ai",
        content: r,
        timestamp: /* @__PURE__ */ new Date(),
        sources: w.sources || void 0
      };
      return Se(be({}, g), {
        messages: g.messages.map((_) => _.isStreaming ? v : _),
        isLoading: !1
      });
    });
  } catch (o) {
    throw console.error("Error sending message:", o), et.update((s) => Se(be({}, s), {
      isLoading: !1
    })), o;
  }
}), js = (e, t = 20, u = null) => Ce(null, null, function* () {
  var n, r, i, o, s;
  try {
    const a = yield gf.get(`/chat/${e}/messages`, {
      params: {
        limit: t,
        cursor: u
      }
    }), c = a.data.messages.reverse(), l = (o = (i = (n = a.data) == null ? void 0 : n.meta) != null ? i : (r = a.data) == null ? void 0 : r.pagination) != null ? o : {}, f = (s = l == null ? void 0 : l.next_cursor) != null ? s : null, h = !!(l != null && l.has_more);
    et.update((p) => Se(be({}, p), {
      messages: u ? [...c, ...p.messages] : c,
      hasMore: h,
      nextCursor: f,
      conversation_id: e
    })), localStorage.setItem("conversation_id", e);
  } catch (a) {
    console.error("Error loading chat history:", a), et.update((c) => Se(be({}, c), {
      error: "Failed to load chat history"
    }));
  }
});
Ac();
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
const xf = {
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
var vf = /* @__PURE__ */ fl("<svg><!><!></svg>");
function Ge(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = Ne(u, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  xu(t, !1);
  let r = Gt(t, "name", 8, void 0), i = Gt(t, "color", 8, "currentColor"), o = Gt(t, "size", 8, 24), s = Gt(t, "strokeWidth", 8, 2), a = Gt(t, "absoluteStrokeWidth", 8, !1), c = Gt(t, "iconNode", 24, () => []);
  const l = (...m) => m.filter((g, w, v) => !!g && v.indexOf(g) === w).join(" ");
  Dl();
  var f = vf();
  let h;
  var p = J(f);
  yn(p, 1, c, Jr, (m, g) => {
    let w = () => R(g)[0], v = () => R(g)[1];
    var _ = Me(), x = ke(_);
    vl(x, w, !0, (E, A) => {
      let D;
      _e(() => D = Pi(E, D, be({}, v())));
    }), W(m, _);
  });
  var d = ye(p);
  Le(d, t, "default", {}), _e(
    (m, g) => h = Pi(f, h, Se(be(be({}, xf), n), {
      width: o(),
      height: o(),
      stroke: i(),
      "stroke-width": m,
      class: g
    })),
    [
      () => a() ? Number(s()) * 24 / Number(o()) : s(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", u.class)
    ],
    Ur
  ), W(e, f), vu();
}
function Us(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "bot-message-square" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Rr(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "bot" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function yf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "maximize" }, () => u, {
    iconNode: [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ef(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "message-circle-more" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function kf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "message-circle" }, () => u, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function wf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "message-square-more" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Af(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "messages-square" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function no(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "message-square" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Cf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "minimize" }, () => u, {
    iconNode: [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Df(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "send" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function $s(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "sparkle" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Hs(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "sparkles" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Sf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "trash-2" }, () => u, {
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
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ws(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "x" }, () => u, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = Me(), s = ke(o);
      Le(s, t, "default", {}), W(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const ro = {};
function Tf(e) {
  let t = ro[e];
  if (t)
    return t;
  t = ro[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    t.push(n);
  }
  for (let u = 0; u < e.length; u++) {
    const n = e.charCodeAt(u);
    t[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  }
  return t;
}
function bu(e, t) {
  typeof t != "string" && (t = bu.defaultChars);
  const u = Tf(t);
  return e.replace(/(%[a-f0-9]{2})+/gi, function(n) {
    let r = "";
    for (let i = 0, o = n.length; i < o; i += 3) {
      const s = parseInt(n.slice(i + 1, i + 3), 16);
      if (s < 128) {
        r += u[s];
        continue;
      }
      if ((s & 224) === 192 && i + 3 < o) {
        const a = parseInt(n.slice(i + 4, i + 6), 16);
        if ((a & 192) === 128) {
          const c = s << 6 & 1984 | a & 63;
          c < 128 ? r += "��" : r += String.fromCharCode(c), i += 3;
          continue;
        }
      }
      if ((s & 240) === 224 && i + 6 < o) {
        const a = parseInt(n.slice(i + 4, i + 6), 16), c = parseInt(n.slice(i + 7, i + 9), 16);
        if ((a & 192) === 128 && (c & 192) === 128) {
          const l = s << 12 & 61440 | a << 6 & 4032 | c & 63;
          l < 2048 || l >= 55296 && l <= 57343 ? r += "���" : r += String.fromCharCode(l), i += 6;
          continue;
        }
      }
      if ((s & 248) === 240 && i + 9 < o) {
        const a = parseInt(n.slice(i + 4, i + 6), 16), c = parseInt(n.slice(i + 7, i + 9), 16), l = parseInt(n.slice(i + 10, i + 12), 16);
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
bu.defaultChars = ";/?:@&=+$,#";
bu.componentChars = "";
const io = {};
function Ff(e) {
  let t = io[e];
  if (t)
    return t;
  t = io[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function Ku(e, t, u) {
  typeof t != "string" && (u = t, t = Ku.defaultChars), typeof u == "undefined" && (u = !0);
  const n = Ff(t);
  let r = "";
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e.charCodeAt(i);
    if (u && s === 37 && i + 2 < o && /^[0-9a-f]{2}$/i.test(e.slice(i + 1, i + 3))) {
      r += e.slice(i, i + 3), i += 2;
      continue;
    }
    if (s < 128) {
      r += n[s];
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
Ku.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Ku.componentChars = "-_.!~*'()";
function ei(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function wn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Rf = /^([a-z0-9.+-]+:)/i, Of = /:[0-9]*$/, Nf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Mf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], If = ["{", "}", "|", "\\", "^", "`"].concat(Mf), zf = ["'"].concat(If), oo = ["%", "/", "?", ";", "#"].concat(zf), so = ["/", "?", "#"], Lf = 255, ao = /^[+a-z0-9A-Z_-]{0,63}$/, Bf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, co = {
  javascript: !0,
  "javascript:": !0
}, lo = {
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
  if (e && e instanceof wn) return e;
  const u = new wn();
  return u.parse(e, t), u;
}
wn.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Nf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Rf.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && co[o]) && (i = i.substr(2), this.slashes = !0)), !co[o] && (r || o && !lo[o])) {
    let c = -1;
    for (let d = 0; d < so.length; d++)
      n = i.indexOf(so[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < oo.length; d++)
      n = i.indexOf(oo[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let m = 0, g = d.length; m < g; m++) {
        const w = d[m];
        if (w && !w.match(ao)) {
          let v = "";
          for (let _ = 0, x = w.length; _ < x; _++)
            w.charCodeAt(_) > 127 ? v += "x" : v += w[_];
          if (!v.match(ao)) {
            const _ = d.slice(0, m), x = d.slice(m + 1), E = w.match(Bf);
            E && (_.push(E[1]), x.unshift(E[2])), x.length && (i = x.join(".") + i), this.hostname = _.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Lf && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = i.indexOf("#");
  s !== -1 && (this.hash = i.substr(s), i = i.slice(0, s));
  const a = i.indexOf("?");
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), lo[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
wn.prototype.parseHost = function(e) {
  let t = Of.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: bu,
  encode: Ku,
  format: ei,
  parse: ti
}, Symbol.toStringTag, { value: "Module" })), Gs = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Vs = /[\0-\x1F\x7F-\x9F]/, qf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, ui = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Zs = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Ks = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Gs,
  Cc: Vs,
  Cf: qf,
  P: ui,
  S: Zs,
  Z: Ks
}, Symbol.toStringTag, { value: "Module" })), Uf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), $f = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var fr;
const Hf = /* @__PURE__ */ new Map([
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
]), Wf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (fr = String.fromCodePoint) !== null && fr !== void 0 ? fr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Gf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Hf.get(e)) !== null && t !== void 0 ? t : e;
}
var Ee;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(Ee || (Ee = {}));
const Vf = 32;
var Bt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Bt || (Bt = {}));
function Or(e) {
  return e >= Ee.ZERO && e <= Ee.NINE;
}
function Zf(e) {
  return e >= Ee.UPPER_A && e <= Ee.UPPER_F || e >= Ee.LOWER_A && e <= Ee.LOWER_F;
}
function Kf(e) {
  return e >= Ee.UPPER_A && e <= Ee.UPPER_Z || e >= Ee.LOWER_A && e <= Ee.LOWER_Z || Or(e);
}
function Jf(e) {
  return e === Ee.EQUALS || Kf(e);
}
var ve;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(ve || (ve = {}));
var zt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(zt || (zt = {}));
class Yf {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = ve.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = zt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = ve.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
  write(t, u) {
    switch (this.state) {
      case ve.EntityStart:
        return t.charCodeAt(u) === Ee.NUM ? (this.state = ve.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = ve.NamedEntity, this.stateNamedEntity(t, u));
      case ve.NumericStart:
        return this.stateNumericStart(t, u);
      case ve.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case ve.NumericHex:
        return this.stateNumericHex(t, u);
      case ve.NamedEntity:
        return this.stateNamedEntity(t, u);
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
  stateNumericStart(t, u) {
    return u >= t.length ? -1 : (t.charCodeAt(u) | Vf) === Ee.LOWER_X ? (this.state = ve.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = ve.NumericDecimal, this.stateNumericDecimal(t, u));
  }
  addToNumericResult(t, u, n, r) {
    if (u !== n) {
      const i = n - u;
      this.result = this.result * Math.pow(r, i) + parseInt(t.substr(u, i), r), this.consumed += i;
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
  stateNumericHex(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const r = t.charCodeAt(u);
      if (Or(r) || Zf(r))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 16), this.emitNumericEntity(r, 3);
    }
    return this.addToNumericResult(t, n, u, 16), -1;
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
  stateNumericDecimal(t, u) {
    const n = u;
    for (; u < t.length; ) {
      const r = t.charCodeAt(u);
      if (Or(r))
        u += 1;
      else
        return this.addToNumericResult(t, n, u, 10), this.emitNumericEntity(r, 2);
    }
    return this.addToNumericResult(t, n, u, 10), -1;
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
  emitNumericEntity(t, u) {
    var n;
    if (this.consumed <= u)
      return (n = this.errors) === null || n === void 0 || n.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
    if (t === Ee.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === zt.Strict)
      return 0;
    return this.emitCodePoint(Gf(this.result), this.consumed), this.errors && (t !== Ee.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
  stateNamedEntity(t, u) {
    const { decodeTree: n } = this;
    let r = n[this.treeIndex], i = (r & Bt.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const o = t.charCodeAt(u);
      if (this.treeIndex = Xf(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === zt.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        Jf(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & Bt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === Ee.SEMI)
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
    const { result: u, decodeTree: n } = this, r = (n[u] & Bt.VALUE_LENGTH) >> 14;
    return this.emitNamedEntityData(u, r, this.consumed), (t = this.errors) === null || t === void 0 || t.missingSemicolonAfterCharacterReference(), this.consumed;
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
  emitNamedEntityData(t, u, n) {
    const { decodeTree: r } = this;
    return this.emitCodePoint(u === 1 ? r[t] & ~Bt.VALUE_LENGTH : r[t + 1], n), u === 3 && this.emitCodePoint(r[t + 2], n), n;
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
      case ve.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== zt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case ve.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case ve.NumericHex:
        return this.emitNumericEntity(0, 3);
      case ve.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case ve.EntityStart:
        return 0;
    }
  }
}
function Js(e) {
  let t = "";
  const u = new Yf(e, (n) => t += Wf(n));
  return function(r, i) {
    let o = 0, s = 0;
    for (; (s = r.indexOf("&", s)) >= 0; ) {
      t += r.slice(o, s), u.startEntity(i);
      const c = u.write(
        r,
        // Skip the "&"
        s + 1
      );
      if (c < 0) {
        o = s + u.end();
        break;
      }
      o = s + c, s = c === 0 ? o + 1 : o;
    }
    const a = t + r.slice(o);
    return t = "", a;
  };
}
function Xf(e, t, u, n) {
  const r = (t & Bt.BRANCH_LENGTH) >> 7, i = t & Bt.JUMP_TABLE;
  if (r === 0)
    return i !== 0 && n === i ? u : -1;
  if (i) {
    const a = n - i;
    return a < 0 || a >= r ? -1 : e[u + a] - 1;
  }
  let o = u, s = o + r - 1;
  for (; o <= s; ) {
    const a = o + s >>> 1, c = e[a];
    if (c < n)
      o = a + 1;
    else if (c > n)
      s = a - 1;
    else
      return e[a + r];
  }
  return -1;
}
const Qf = Js(Uf);
Js($f);
function Ys(e, t = zt.Legacy) {
  return Qf(e, t);
}
function ed(e) {
  return Object.prototype.toString.call(e);
}
function ni(e) {
  return ed(e) === "[object String]";
}
const td = Object.prototype.hasOwnProperty;
function ud(e, t) {
  return td.call(e, t);
}
function Un(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    if (u) {
      if (typeof u != "object")
        throw new TypeError(u + "must be object");
      Object.keys(u).forEach(function(n) {
        e[n] = u[n];
      });
    }
  }), e;
}
function Xs(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function ri(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function An(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const Qs = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, nd = /&([a-z#][a-z0-9]{1,31});/gi, rd = new RegExp(Qs.source + "|" + nd.source, "gi"), id = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function od(e, t) {
  if (t.charCodeAt(0) === 35 && id.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return ri(n) ? An(n) : e;
  }
  const u = Ys(e);
  return u !== e ? u : e;
}
function sd(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Qs, "$1");
}
function gu(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(rd, function(t, u, n) {
    return u || od(t, n);
  });
}
const ad = /[&<>"]/, cd = /[&<>"]/g, ld = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function fd(e) {
  return ld[e];
}
function Ut(e) {
  return ad.test(e) ? e.replace(cd, fd) : e;
}
const dd = /[.?*+^$[\]\\(){}|-]/g;
function hd(e) {
  return e.replace(dd, "\\$&");
}
function oe(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Lu(e) {
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
function Bu(e) {
  return ui.test(e) || Zs.test(e);
}
function Pu(e) {
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
function $n(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const pd = { mdurl: Pf, ucmicro: jf }, bd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Xs,
  assign: Un,
  escapeHtml: Ut,
  escapeRE: hd,
  fromCodePoint: An,
  has: ud,
  isMdAsciiPunct: Pu,
  isPunctChar: Bu,
  isSpace: oe,
  isString: ni,
  isValidEntityCode: ri,
  isWhiteSpace: Lu,
  lib: pd,
  normalizeReference: $n,
  unescapeAll: gu,
  unescapeMd: sd
}, Symbol.toStringTag, { value: "Module" }));
function gd(e, t, u) {
  let n, r, i, o;
  const s = e.posMax, a = e.pos;
  for (e.pos = t + 1, n = 1; e.pos < s; ) {
    if (i = e.src.charCodeAt(e.pos), i === 93 && (n--, n === 0)) {
      r = !0;
      break;
    }
    if (o = e.pos, e.md.inline.skipToken(e), i === 91) {
      if (o === e.pos - 1)
        n++;
      else if (u)
        return e.pos = a, -1;
    }
  }
  let c = -1;
  return r && (c = e.pos), e.pos = a, c;
}
function md(e, t, u) {
  let n, r = t;
  const i = {
    ok: !1,
    pos: 0,
    str: ""
  };
  if (e.charCodeAt(r) === 60) {
    for (r++; r < u; ) {
      if (n = e.charCodeAt(r), n === 10 || n === 60)
        return i;
      if (n === 62)
        return i.pos = r + 1, i.str = gu(e.slice(t + 1, r)), i.ok = !0, i;
      if (n === 92 && r + 1 < u) {
        r += 2;
        continue;
      }
      r++;
    }
    return i;
  }
  let o = 0;
  for (; r < u && (n = e.charCodeAt(r), !(n === 32 || n < 32 || n === 127)); ) {
    if (n === 92 && r + 1 < u) {
      if (e.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (n === 40 && (o++, o > 32))
      return i;
    if (n === 41) {
      if (o === 0)
        break;
      o--;
    }
    r++;
  }
  return t === r || o !== 0 || (i.str = gu(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function _d(e, t, u, n) {
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
  if (n)
    o.str = n.str, o.marker = n.marker;
  else {
    if (i >= u)
      return o;
    let s = e.charCodeAt(i);
    if (s !== 34 && s !== 39 && s !== 40)
      return o;
    t++, i++, s === 40 && (s = 41), o.marker = s;
  }
  for (; i < u; ) {
    if (r = e.charCodeAt(i), r === o.marker)
      return o.pos = i + 1, o.str += gu(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < u && i++, i++;
  }
  return o.can_continue = !0, o.str += gu(e.slice(t, i)), o;
}
const xd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: md,
  parseLinkLabel: gd,
  parseLinkTitle: _d
}, Symbol.toStringTag, { value: "Module" })), vt = {};
vt.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + Ut(i.content) + "</code>";
};
vt.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + Ut(e[t].content) + `</code></pre>
`;
};
vt.fence = function(e, t, u, n, r) {
  const i = e[t], o = i.info ? gu(i.info).trim() : "";
  let s = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    s = l[0], a = l.slice(2).join("");
  }
  let c;
  if (u.highlight ? c = u.highlight(i.content, s, a) || Ut(i.content) : c = Ut(i.content), c.indexOf("<pre") === 0)
    return c + `
`;
  if (o) {
    const l = i.attrIndex("class"), f = i.attrs ? i.attrs.slice() : [];
    l < 0 ? f.push(["class", u.langPrefix + s]) : (f[l] = f[l].slice(), f[l][1] += " " + u.langPrefix + s);
    const h = {
      attrs: f
    };
    return `<pre><code${r.renderAttrs(h)}>${c}</code></pre>
`;
  }
  return `<pre><code${r.renderAttrs(i)}>${c}</code></pre>
`;
};
vt.image = function(e, t, u, n, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, u, n), r.renderToken(e, t, u);
};
vt.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
vt.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
vt.text = function(e, t) {
  return Ut(e[t].content);
};
vt.html_block = function(e, t) {
  return e[t].content;
};
vt.html_inline = function(e, t) {
  return e[t].content;
};
function wu() {
  this.rules = Un({}, vt);
}
wu.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + Ut(t.attrs[u][0]) + '="' + Ut(t.attrs[u][1]) + '"';
  return r;
};
wu.prototype.renderToken = function(t, u, n) {
  const r = t[u];
  let i = "";
  if (r.hidden)
    return "";
  r.block && r.nesting !== -1 && u && t[u - 1].hidden && (i += `
`), i += (r.nesting === -1 ? "</" : "<") + r.tag, i += this.renderAttrs(r), r.nesting === 0 && n.xhtmlOut && (i += " /");
  let o = !1;
  if (r.block && (o = !0, r.nesting === 1 && u + 1 < t.length)) {
    const s = t[u + 1];
    (s.type === "inline" || s.hidden || s.nesting === -1 && s.tag === r.tag) && (o = !1);
  }
  return i += o ? `>
` : ">", i;
};
wu.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t);
  }
  return n;
};
wu.prototype.renderInlineAsText = function(e, t, u) {
  let n = "";
  for (let r = 0, i = e.length; r < i; r++)
    switch (e[r].type) {
      case "text":
        n += e[r].content;
        break;
      case "image":
        n += this.renderInlineAsText(e[r].children, t, u);
        break;
      case "html_inline":
      case "html_block":
        n += e[r].content;
        break;
      case "softbreak":
      case "hardbreak":
        n += `
`;
        break;
    }
  return n;
};
wu.prototype.render = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    s === "inline" ? n += this.renderInline(e[i].children, t, u) : typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t, u);
  }
  return n;
};
function He() {
  this.__rules__ = [], this.__cache__ = null;
}
He.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
He.prototype.__compile__ = function() {
  const e = this, t = [""];
  e.__rules__.forEach(function(u) {
    u.enabled && u.alt.forEach(function(n) {
      t.indexOf(n) < 0 && t.push(n);
    });
  }), e.__cache__ = {}, t.forEach(function(u) {
    e.__cache__[u] = [], e.__rules__.forEach(function(n) {
      n.enabled && (u && n.alt.indexOf(u) < 0 || e.__cache__[u].push(n.fn));
    });
  });
};
He.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
He.prototype.before = function(e, t, u, n) {
  const r = this.__find__(e), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: i.alt || []
  }), this.__cache__ = null;
};
He.prototype.after = function(e, t, u, n) {
  const r = this.__find__(e), i = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__.splice(r + 1, 0, {
    name: t,
    enabled: !0,
    fn: u,
    alt: i.alt || []
  }), this.__cache__ = null;
};
He.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
He.prototype.enable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !0, u.push(n);
  }, this), this.__cache__ = null, u;
};
He.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
He.prototype.disable = function(e, t) {
  Array.isArray(e) || (e = [e]);
  const u = [];
  return e.forEach(function(n) {
    const r = this.__find__(n);
    if (r < 0) {
      if (t)
        return;
      throw new Error("Rules manager: invalid rule name " + n);
    }
    this.__rules__[r].enabled = !1, u.push(n);
  }, this), this.__cache__ = null, u;
};
He.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function lt(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
lt.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
lt.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
lt.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
lt.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
lt.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function ea(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ea.prototype.Token = lt;
const vd = /\r\n?|\n/g, yd = /\0/g;
function Ed(e) {
  let t;
  t = e.src.replace(vd, `
`), t = t.replace(yd, "�"), e.src = t;
}
function kd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function wd(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Ad(e) {
  return /^<a[>\s]/i.test(e);
}
function Cd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Dd(e) {
  const t = e.tokens;
  if (e.md.options.linkify)
    for (let u = 0, n = t.length; u < n; u++) {
      if (t[u].type !== "inline" || !e.md.linkify.pretest(t[u].content))
        continue;
      let r = t[u].children, i = 0;
      for (let o = r.length - 1; o >= 0; o--) {
        const s = r[o];
        if (s.type === "link_close") {
          for (o--; r[o].level !== s.level && r[o].type !== "link_open"; )
            o--;
          continue;
        }
        if (s.type === "html_inline" && (Ad(s.content) && i > 0 && i--, Cd(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
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
            const w = c[p].index;
            if (w > h) {
              const E = new e.Token("text", "", 0);
              E.content = a.slice(h, w), E.level = f, l.push(E);
            }
            const v = new e.Token("link_open", "a", 1);
            v.attrs = [["href", m]], v.level = f++, v.markup = "linkify", v.info = "auto", l.push(v);
            const _ = new e.Token("text", "", 0);
            _.content = g, _.level = f, l.push(_);
            const x = new e.Token("link_close", "a", -1);
            x.level = --f, x.markup = "linkify", x.info = "auto", l.push(x), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[u].children = r = Xs(r, o, l);
        }
      }
    }
}
const ta = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Sd = /\((c|tm|r)\)/i, Td = /\((c|tm|r)\)/ig, Fd = {
  c: "©",
  r: "®",
  tm: "™"
};
function Rd(e, t) {
  return Fd[t.toLowerCase()];
}
function Od(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Td, Rd)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Nd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && ta.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Md(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Sd.test(e.tokens[t].content) && Od(e.tokens[t].children), ta.test(e.tokens[t].content) && Nd(e.tokens[t].children));
}
const Id = /['"]/, fo = /['"]/g, ho = "’";
function sn(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function zd(e, t) {
  let u;
  const n = [];
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = e[r].level;
    for (u = n.length - 1; u >= 0 && !(n[u].level <= o); u--)
      ;
    if (n.length = u + 1, i.type !== "text")
      continue;
    let s = i.content, a = 0, c = s.length;
    e:
      for (; a < c; ) {
        fo.lastIndex = a;
        const l = fo.exec(s);
        if (!l)
          break;
        let f = !0, h = !0;
        a = l.index + 1;
        const p = l[0] === "'";
        let d = 32;
        if (l.index - 1 >= 0)
          d = s.charCodeAt(l.index - 1);
        else
          for (u = r - 1; u >= 0 && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u--)
            if (e[u].content) {
              d = e[u].content.charCodeAt(e[u].content.length - 1);
              break;
            }
        let m = 32;
        if (a < c)
          m = s.charCodeAt(a);
        else
          for (u = r + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              m = e[u].content.charCodeAt(0);
              break;
            }
        const g = Pu(d) || Bu(String.fromCharCode(d)), w = Pu(m) || Bu(String.fromCharCode(m)), v = Lu(d), _ = Lu(m);
        if (_ ? f = !1 : w && (v || g || (f = !1)), v ? h = !1 : g && (_ || w || (h = !1)), m === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = g, h = w), !f && !h) {
          p && (i.content = sn(i.content, l.index, ho));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let x = n[u];
            if (n[u].level < o)
              break;
            if (x.single === p && n[u].level === o) {
              x = n[u];
              let E, A;
              p ? (E = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (E = t.md.options.quotes[0], A = t.md.options.quotes[1]), i.content = sn(i.content, l.index, A), e[x.token].content = sn(
                e[x.token].content,
                x.pos,
                E
              ), a += A.length - 1, x.token === r && (a += E.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = sn(i.content, l.index, ho));
      }
  }
}
function Ld(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Id.test(e.tokens[t].content) || zd(e.tokens[t].children, e);
}
function Bd(e) {
  let t, u;
  const n = e.tokens, r = n.length;
  for (let i = 0; i < r; i++) {
    if (n[i].type !== "inline") continue;
    const o = n[i].children, s = o.length;
    for (t = 0; t < s; t++)
      o[t].type === "text_special" && (o[t].type = "text");
    for (t = u = 0; t < s; t++)
      o[t].type === "text" && t + 1 < s && o[t + 1].type === "text" ? o[t + 1].content = o[t].content + o[t + 1].content : (t !== u && (o[u] = o[t]), u++);
    t !== u && (o.length = u);
  }
}
const dr = [
  ["normalize", Ed],
  ["block", kd],
  ["inline", wd],
  ["linkify", Dd],
  ["replacements", Md],
  ["smartquotes", Ld],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Bd]
];
function ii() {
  this.ruler = new He();
  for (let e = 0; e < dr.length; e++)
    this.ruler.push(dr[e][0], dr[e][1]);
}
ii.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
ii.prototype.State = ea;
function yt(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (oe(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
yt.prototype.push = function(e, t, u) {
  const n = new lt(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
yt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
yt.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
yt.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!oe(n))
      break;
  }
  return t;
};
yt.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!oe(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
yt.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
yt.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
yt.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const i = new Array(u - t);
  for (let o = 0, s = t; s < u; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < u || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < n; ) {
      const h = this.src.charCodeAt(l);
      if (oe(h))
        h === 9 ? a += 4 - (a + this.bsCount[s]) % 4 : a++;
      else if (l - c < this.tShift[s])
        a++;
      else
        break;
      l++;
    }
    a > n ? i[o] = new Array(a - n + 1).join(" ") + this.src.slice(l, f) : i[o] = this.src.slice(l, f);
  }
  return i.join("");
};
yt.prototype.Token = lt;
const Pd = 65536;
function hr(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function po(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), i = !1, o = 0, s = "";
  for (; n < u; )
    r === 124 && (i ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), i = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(o)), t;
}
function qd(e, t, u, n) {
  if (t + 2 > u)
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
  if (s !== 124 && s !== 45 && s !== 58 && !oe(s) || o === 45 && oe(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const x = e.src.charCodeAt(i);
    if (x !== 124 && x !== 45 && x !== 58 && !oe(x))
      return !1;
    i++;
  }
  let a = hr(e, t + 1), c = a.split("|");
  const l = [];
  for (let x = 0; x < c.length; x++) {
    const E = c[x].trim();
    if (!E) {
      if (x === 0 || x === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(E))
      return !1;
    E.charCodeAt(E.length - 1) === 58 ? l.push(E.charCodeAt(0) === 58 ? "center" : "right") : E.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = hr(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = po(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (n)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const p = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), m = [t, 0];
  d.map = m;
  const g = e.push("thead_open", "thead", 1);
  g.map = [t, t + 1];
  const w = e.push("tr_open", "tr", 1);
  w.map = [t, t + 1];
  for (let x = 0; x < c.length; x++) {
    const E = e.push("th_open", "th", 1);
    l[x] && (E.attrs = [["style", "text-align:" + l[x]]]);
    const A = e.push("inline", "", 0);
    A.content = c[x].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let v, _ = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let x = !1;
    for (let A = 0, D = p.length; A < D; A++)
      if (p[A](e, r, u, !0)) {
        x = !0;
        break;
      }
    if (x || (a = hr(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = po(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), _ += f - c.length, _ > Pd))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = v = [t + 2, 0];
    }
    const E = e.push("tr_open", "tr", 1);
    E.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const D = e.push("td_open", "td", 1);
      l[A] && (D.attrs = [["style", "text-align:" + l[A]]]);
      const F = e.push("inline", "", 0);
      F.content = c[A] ? c[A].trim() : "", F.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return v && (e.push("tbody_close", "tbody", -1), v[1] = r), e.push("table_close", "table", -1), m[1] = r, e.parentType = h, e.line = r, !0;
}
function jd(e, t, u) {
  if (e.sCount[t] - e.blkIndent < 4)
    return !1;
  let n = t + 1, r = n;
  for (; n < u; ) {
    if (e.isEmpty(n)) {
      n++;
      continue;
    }
    if (e.sCount[n] - e.blkIndent >= 4) {
      n++, r = n;
      continue;
    }
    break;
  }
  e.line = r;
  const i = e.push("code_block", "code", 0);
  return i.content = e.getLines(t, r, 4 + e.blkIndent, !1) + `
`, i.map = [t, e.line], !0;
}
function Ud(e, t, u, n) {
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
  if (n)
    return !0;
  let f = t, h = !1;
  for (; f++, !(f >= u || (r = s = e.bMarks[f] + e.tShift[f], i = e.eMarks[f], r < i && e.sCount[f] < e.blkIndent)); )
    if (e.src.charCodeAt(r) === o && !(e.sCount[f] - e.blkIndent >= 4) && (r = e.skipChars(r, o), !(r - s < a) && (r = e.skipSpaces(r), !(r < i)))) {
      h = !0;
      break;
    }
  a = e.sCount[t], e.line = f + (h ? 1 : 0);
  const p = e.push("fence", "code", 0);
  return p.info = l, p.content = e.getLines(t + 1, f, a, !0), p.markup = c, p.map = [t, e.line], !0;
}
function $d(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  const o = e.lineMax;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 62)
    return !1;
  if (n)
    return !0;
  const s = [], a = [], c = [], l = [], f = e.md.block.ruler.getRules("blockquote"), h = e.parentType;
  e.parentType = "blockquote";
  let p = !1, d;
  for (d = t; d < u; d++) {
    const _ = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !_) {
      let E = e.sCount[d] + 1, A, D;
      e.src.charCodeAt(r) === 32 ? (r++, E++, D = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[d] + E) % 4 === 3 ? (r++, E++, D = !1) : D = !0) : A = !1;
      let F = E;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const L = e.src.charCodeAt(r);
        if (oe(L))
          L === 9 ? F += 4 - (F + e.bsCount[d] + (D ? 1 : 0)) % 4 : F++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (A ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = F - E, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let x = !1;
    for (let E = 0, A = f.length; E < A; E++)
      if (f[E](e, d, u, !0)) {
        x = !0;
        break;
      }
    if (x) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const m = e.blkIndent;
  e.blkIndent = 0;
  const g = e.push("blockquote_open", "blockquote", 1);
  g.markup = ">";
  const w = [t, 0];
  g.map = w, e.md.block.tokenize(e, t, d);
  const v = e.push("blockquote_close", "blockquote", -1);
  v.markup = ">", e.lineMax = o, e.parentType = h, w[1] = e.line;
  for (let _ = 0; _ < l.length; _++)
    e.bMarks[_ + t] = s[_], e.tShift[_ + t] = l[_], e.sCount[_ + t] = c[_], e.bsCount[_ + t] = a[_];
  return e.blkIndent = m, !0;
}
function Hd(e, t, u, n) {
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
    if (c !== o && !oe(c))
      return !1;
    c === o && s++;
  }
  if (s < 3)
    return !1;
  if (n)
    return !0;
  e.line = t + 1;
  const a = e.push("hr", "hr", 0);
  return a.map = [t, e.line], a.markup = Array(s + 1).join(String.fromCharCode(o)), !0;
}
function bo(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!oe(i))
      return -1;
  }
  return n;
}
function go(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  let r = u;
  if (r + 1 >= n)
    return -1;
  let i = e.src.charCodeAt(r++);
  if (i < 48 || i > 57)
    return -1;
  for (; ; ) {
    if (r >= n)
      return -1;
    if (i = e.src.charCodeAt(r++), i >= 48 && i <= 57) {
      if (r - u >= 10)
        return -1;
      continue;
    }
    if (i === 41 || i === 46)
      break;
    return -1;
  }
  return r < n && (i = e.src.charCodeAt(r), !oe(i)) ? -1 : r;
}
function Wd(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Gd(e, t, u, n) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = go(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = bo(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(p) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(p - 1), m = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const g = [a, 0];
  s.map = g, s.markup = String.fromCharCode(d);
  let w = !1;
  const v = e.md.block.ruler.getRules("list"), _ = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const x = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let E = x;
    for (; i < r; ) {
      const B = e.src.charCodeAt(i);
      if (B === 9)
        E += 4 - (E + e.bsCount[a]) % 4;
      else if (B === 32)
        E++;
      else
        break;
      i++;
    }
    const A = i;
    let D;
    A >= r ? D = 1 : D = E - x, D > 4 && (D = 1);
    const F = x + D;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const L = [a, 0];
    s.map = L, f && (s.info = e.src.slice(o, p - 1));
    const Y = e.tight, j = e.tShift[a], G = e.sCount[a], se = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = F, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = E, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || w) && (c = !1), w = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = se, e.tShift[a] = j, e.sCount[a] = G, e.tight = Y, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, L[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let X = !1;
    for (let B = 0, V = v.length; B < V; B++)
      if (v[B](e, a, u, !0)) {
        X = !0;
        break;
      }
    if (X)
      break;
    if (f) {
      if (p = go(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = bo(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), g[1] = a, e.line = a, e.parentType = _, c && Wd(e, m), !0;
}
function Vd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(v) {
    const _ = e.lineMax;
    if (v >= _ || e.isEmpty(v))
      return null;
    let x = !1;
    if (e.sCount[v] - e.blkIndent > 3 && (x = !0), e.sCount[v] < 0 && (x = !0), !x) {
      const D = e.md.block.ruler.getRules("reference"), F = e.parentType;
      e.parentType = "reference";
      let L = !1;
      for (let Y = 0, j = D.length; Y < j; Y++)
        if (D[Y](e, v, _, !0)) {
          L = !0;
          break;
        }
      if (e.parentType = F, L)
        return null;
    }
    const E = e.bMarks[v] + e.tShift[v], A = e.eMarks[v];
    return e.src.slice(E, A + 1);
  }
  let a = e.src.slice(r, i + 1);
  i = a.length;
  let c = -1;
  for (r = 1; r < i; r++) {
    const v = a.charCodeAt(r);
    if (v === 91)
      return !1;
    if (v === 93) {
      c = r;
      break;
    } else if (v === 10) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (v === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const v = a.charCodeAt(r);
    if (v === 10) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (!oe(v)) break;
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
    const v = a.charCodeAt(r);
    if (v === 10) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (!oe(v)) break;
  }
  let m = e.md.helpers.parseLinkTitle(a, r, i);
  for (; m.can_continue; ) {
    const v = s(o);
    if (v === null) break;
    a += v, r = i, i = a.length, o++, m = e.md.helpers.parseLinkTitle(a, r, i, m);
  }
  let g;
  for (r < i && d !== r && m.ok ? (g = m.str, r = m.pos) : (g = "", r = h, o = p); r < i; ) {
    const v = a.charCodeAt(r);
    if (!oe(v))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && g)
    for (g = "", r = h, o = p; r < i; ) {
      const v = a.charCodeAt(r);
      if (!oe(v))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const w = $n(a.slice(1, c));
  return w ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[w] == "undefined" && (e.env.references[w] = { title: g, href: f }), e.line = o), !0) : !1;
}
const Zd = [
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
], Kd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Jd = "[^\"'=<>`\\x00-\\x20]+", Yd = "'[^']*'", Xd = '"[^"]*"', Qd = "(?:" + Jd + "|" + Yd + "|" + Xd + ")", e1 = "(?:\\s+" + Kd + "(?:\\s*=\\s*" + Qd + ")?)", ua = "<[A-Za-z][A-Za-z0-9\\-]*" + e1 + "*\\s*\\/?>", na = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", t1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", u1 = "<[?][\\s\\S]*?[?]>", n1 = "<![A-Za-z][^>]*>", r1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", i1 = new RegExp("^(?:" + ua + "|" + na + "|" + t1 + "|" + u1 + "|" + n1 + "|" + r1 + ")"), o1 = new RegExp("^(?:" + ua + "|" + na + ")"), su = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Zd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(o1.source + "\\s*$"), /^$/, !1]
];
function s1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), s = 0;
  for (; s < su.length && !su[s][0].test(o); s++)
    ;
  if (s === su.length)
    return !1;
  if (n)
    return su[s][2];
  let a = t + 1;
  if (!su[s][1].test(o)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), su[s][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function a1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !oe(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && oe(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function c1(e, t, u) {
  const n = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  const r = e.parentType;
  e.parentType = "paragraph";
  let i = 0, o, s = t + 1;
  for (; s < u && !e.isEmpty(s); s++) {
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
    for (let p = 0, d = n.length; p < d; p++)
      if (n[p](e, s, u, !0)) {
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
function l1(e, t, u) {
  const n = e.md.block.ruler.getRules("paragraph"), r = e.parentType;
  let i = t + 1;
  for (e.parentType = "paragraph"; i < u && !e.isEmpty(i); i++) {
    if (e.sCount[i] - e.blkIndent > 3 || e.sCount[i] < 0)
      continue;
    let c = !1;
    for (let l = 0, f = n.length; l < f; l++)
      if (n[l](e, i, u, !0)) {
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
const an = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", qd, ["paragraph", "reference"]],
  ["code", jd],
  ["fence", Ud, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", $d, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Hd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Gd, ["paragraph", "reference", "blockquote"]],
  ["reference", Vd],
  ["html_block", s1, ["paragraph", "reference", "blockquote"]],
  ["heading", a1, ["paragraph", "reference", "blockquote"]],
  ["lheading", c1],
  ["paragraph", l1]
];
function Hn() {
  this.ruler = new He();
  for (let e = 0; e < an.length; e++)
    this.ruler.push(an[e][0], an[e][1], { alt: (an[e][2] || []).slice() });
}
Hn.prototype.tokenize = function(e, t, u) {
  const n = this.ruler.getRules(""), r = n.length, i = e.md.options.maxNesting;
  let o = t, s = !1;
  for (; o < u && (e.line = o = e.skipEmptyLines(o), !(o >= u || e.sCount[o] < e.blkIndent)); ) {
    if (e.level >= i) {
      e.line = u;
      break;
    }
    const a = e.line;
    let c = !1;
    for (let l = 0; l < r; l++)
      if (c = n[l](e, o, u, !1), c) {
        if (a >= e.line)
          throw new Error("block rule didn't increment state.line");
        break;
      }
    if (!c) throw new Error("none of the block rules matched");
    e.tight = !s, e.isEmpty(e.line - 1) && (s = !0), o = e.line, o < u && e.isEmpty(o) && (s = !0, o++, e.line = o);
  }
};
Hn.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
Hn.prototype.State = yt;
function Ju(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Ju.prototype.pushPending = function() {
  const e = new lt("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Ju.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new lt(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
Ju.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = Pu(r) || Bu(String.fromCharCode(r)), c = Pu(s) || Bu(String.fromCharCode(s)), l = Lu(r), f = Lu(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
Ju.prototype.Token = lt;
function f1(e) {
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
function d1(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !f1(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const h1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function p1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(h1);
  if (!r) return !1;
  const i = r[1], o = e.md.linkify.matchAtStart(e.src.slice(u - i.length));
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
function b1(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 10)
    return !1;
  const n = e.pending.length - 1, r = e.posMax;
  if (!t)
    if (n >= 0 && e.pending.charCodeAt(n) === 32)
      if (n >= 1 && e.pending.charCodeAt(n - 1) === 32) {
        let i = n - 1;
        for (; i >= 1 && e.pending.charCodeAt(i - 1) === 32; ) i--;
        e.pending = e.pending.slice(0, i), e.push("hardbreak", "br", 0);
      } else
        e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0);
    else
      e.push("softbreak", "br", 0);
  for (u++; u < r && oe(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const oi = [];
for (let e = 0; e < 256; e++)
  oi.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  oi[e.charCodeAt(0)] = 1;
});
function g1(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!oe(r)); )
      u++;
    return e.pos = u, !0;
  }
  let i = e.src[u];
  if (r >= 55296 && r <= 56319 && u + 1 < n) {
    const s = e.src.charCodeAt(u + 1);
    s >= 56320 && s <= 57343 && (i += e.src[u + 1], u++);
  }
  const o = "\\" + i;
  if (!t) {
    const s = e.push("text_special", "", 0);
    r < 256 && oi[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function m1(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 96)
    return !1;
  const r = u;
  u++;
  const i = e.posMax;
  for (; u < i && e.src.charCodeAt(u) === 96; )
    u++;
  const o = e.src.slice(r, u), s = o.length;
  if (e.backticksScanned && (e.backticks[s] || 0) <= r)
    return t || (e.pending += o), e.pos += s, !0;
  let a = u, c;
  for (; (c = e.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < i && e.src.charCodeAt(a) === 96; )
      a++;
    const l = a - c;
    if (l === s) {
      if (!t) {
        const f = e.push("code_inline", "code", 0);
        f.markup = o, f.content = e.src.slice(u, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1");
      }
      return e.pos = a, !0;
    }
    e.backticks[l] = c;
  }
  return e.backticksScanned = !0, t || (e.pending += o), e.pos += s, !0;
}
function _1(e, t) {
  const u = e.pos, n = e.src.charCodeAt(u);
  if (t || n !== 126)
    return !1;
  const r = e.scanDelims(e.pos, !0);
  let i = r.length;
  const o = String.fromCharCode(n);
  if (i < 2)
    return !1;
  let s;
  i % 2 && (s = e.push("text", "", 0), s.content = o, i--);
  for (let a = 0; a < i; a += 2)
    s = e.push("text", "", 0), s.content = o + o, e.delimiters.push({
      marker: n,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: e.tokens.length - 1,
      end: -1,
      open: r.can_open,
      close: r.can_close
    });
  return e.pos += r.length, !0;
}
function mo(e, t) {
  let u;
  const n = [], r = t.length;
  for (let i = 0; i < r; i++) {
    const o = t[i];
    if (o.marker !== 126 || o.end === -1)
      continue;
    const s = t[o.end];
    u = e.tokens[o.token], u.type = "s_open", u.tag = "s", u.nesting = 1, u.markup = "~~", u.content = "", u = e.tokens[s.token], u.type = "s_close", u.tag = "s", u.nesting = -1, u.markup = "~~", u.content = "", e.tokens[s.token - 1].type === "text" && e.tokens[s.token - 1].content === "~" && n.push(s.token - 1);
  }
  for (; n.length; ) {
    const i = n.pop();
    let o = i + 1;
    for (; o < e.tokens.length && e.tokens[o].type === "s_close"; )
      o++;
    o--, i !== o && (u = e.tokens[o], e.tokens[o] = e.tokens[i], e.tokens[i] = u);
  }
}
function x1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  mo(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && mo(e, t[n].delimiters);
}
const ra = {
  tokenize: _1,
  postProcess: x1
};
function v1(e, t) {
  const u = e.pos, n = e.src.charCodeAt(u);
  if (t || n !== 95 && n !== 42)
    return !1;
  const r = e.scanDelims(e.pos, n === 42);
  for (let i = 0; i < r.length; i++) {
    const o = e.push("text", "", 0);
    o.content = String.fromCharCode(n), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: n,
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
function _o(e, t) {
  const u = t.length;
  for (let n = u - 1; n >= 0; n--) {
    const r = t[n];
    if (r.marker !== 95 && r.marker !== 42 || r.end === -1)
      continue;
    const i = t[r.end], o = n > 0 && t[n - 1].end === r.end + 1 && // check that first two markers match and adjacent
    t[n - 1].marker === r.marker && t[n - 1].token === r.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    t[r.end + 1].token === i.token + 1, s = String.fromCharCode(r.marker), a = e.tokens[r.token];
    a.type = o ? "strong_open" : "em_open", a.tag = o ? "strong" : "em", a.nesting = 1, a.markup = o ? s + s : s, a.content = "";
    const c = e.tokens[i.token];
    c.type = o ? "strong_close" : "em_close", c.tag = o ? "strong" : "em", c.nesting = -1, c.markup = o ? s + s : s, c.content = "", o && (e.tokens[t[n - 1].token].content = "", e.tokens[t[r.end + 1].token].content = "", n--);
  }
}
function y1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  _o(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && _o(e, t[n].delimiters);
}
const ia = {
  tokenize: v1,
  postProcess: y1
};
function E1(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!oe(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!oe(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!oe(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[$n(n)], !i)
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
function k1(e, t) {
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!oe(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!oe(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!oe(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[$n(r)], !o)
      return e.pos = f, !1;
    l = o.href, a = o.title;
  }
  if (!t) {
    n = e.src.slice(p, d);
    const m = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      m
    );
    const g = e.push("image", "img", 0), w = [["src", l], ["alt", ""]];
    g.attrs = w, g.children = m, g.content = n, a && w.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const w1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, A1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function C1(e, t) {
  let u = e.pos;
  if (e.src.charCodeAt(u) !== 60)
    return !1;
  const n = e.pos, r = e.posMax;
  for (; ; ) {
    if (++u >= r) return !1;
    const o = e.src.charCodeAt(u);
    if (o === 60) return !1;
    if (o === 62) break;
  }
  const i = e.src.slice(n + 1, u);
  if (A1.test(i)) {
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
  if (w1.test(i)) {
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
function D1(e) {
  return /^<a[>\s]/i.test(e);
}
function S1(e) {
  return /^<\/a\s*>/i.test(e);
}
function T1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function F1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !T1(r))
    return !1;
  const i = e.src.slice(n).match(i1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], D1(o.content) && e.linkLevel++, S1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const R1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, O1 = /^&([a-z][a-z0-9]{1,31});/i;
function N1(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const i = e.src.slice(u).match(R1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = ri(o) ? An(o) : An(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(O1);
    if (i) {
      const o = Ys(i[0]);
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
function xo(e) {
  const t = {}, u = e.length;
  if (!u) return;
  let n = 0, r = -2;
  const i = [];
  for (let o = 0; o < u; o++) {
    const s = e[o];
    if (i.push(0), (e[n].marker !== s.marker || r !== s.token - 1) && (n = o), r = s.token, s.length = s.length || 0, !s.close) continue;
    t.hasOwnProperty(s.marker) || (t[s.marker] = [-1, -1, -1, -1, -1, -1]);
    const a = t[s.marker][(s.open ? 3 : 0) + s.length % 3];
    let c = n - i[n] - 1, l = c;
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
function M1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  xo(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && xo(t[n].delimiters);
}
function I1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const pr = [
  ["text", d1],
  ["linkify", p1],
  ["newline", b1],
  ["escape", g1],
  ["backticks", m1],
  ["strikethrough", ra.tokenize],
  ["emphasis", ia.tokenize],
  ["link", E1],
  ["image", k1],
  ["autolink", C1],
  ["html_inline", F1],
  ["entity", N1]
], br = [
  ["balance_pairs", M1],
  ["strikethrough", ra.postProcess],
  ["emphasis", ia.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", I1]
];
function Yu() {
  this.ruler = new He();
  for (let e = 0; e < pr.length; e++)
    this.ruler.push(pr[e][0], pr[e][1]);
  this.ruler2 = new He();
  for (let e = 0; e < br.length; e++)
    this.ruler2.push(br[e][0], br[e][1]);
}
Yu.prototype.skipToken = function(e) {
  const t = e.pos, u = this.ruler.getRules(""), n = u.length, r = e.md.options.maxNesting, i = e.cache;
  if (typeof i[t] != "undefined") {
    e.pos = i[t];
    return;
  }
  let o = !1;
  if (e.level < r) {
    for (let s = 0; s < n; s++)
      if (e.level++, o = u[s](e, !0), e.level--, o) {
        if (t >= e.pos)
          throw new Error("inline rule didn't increment state.pos");
        break;
      }
  } else
    e.pos = e.posMax;
  o || e.pos++, i[t] = e.pos;
};
Yu.prototype.tokenize = function(e) {
  const t = this.ruler.getRules(""), u = t.length, n = e.posMax, r = e.md.options.maxNesting;
  for (; e.pos < n; ) {
    const i = e.pos;
    let o = !1;
    if (e.level < r) {
      for (let s = 0; s < u; s++)
        if (o = t[s](e, !1), o) {
          if (i >= e.pos)
            throw new Error("inline rule didn't increment state.pos");
          break;
        }
    }
    if (o) {
      if (e.pos >= n)
        break;
      continue;
    }
    e.pending += e.src[e.pos++];
  }
  e.pending && e.pushPending();
};
Yu.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
Yu.prototype.State = Ju;
function z1(e) {
  const t = {};
  e = e || {}, t.src_Any = Gs.source, t.src_Cc = Vs.source, t.src_Z = Ks.source, t.src_P = ui.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Nr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function Wn(e) {
  return Object.prototype.toString.call(e);
}
function L1(e) {
  return Wn(e) === "[object String]";
}
function B1(e) {
  return Wn(e) === "[object Object]";
}
function P1(e) {
  return Wn(e) === "[object RegExp]";
}
function vo(e) {
  return Wn(e) === "[object Function]";
}
function q1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const oa = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function j1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || oa.hasOwnProperty(u);
  }, !1);
}
const U1 = {
  "http:": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.http || (u.re.http = new RegExp(
        "^\\/\\/" + u.re.src_auth + u.re.src_host_port_strict + u.re.src_path,
        "i"
      )), u.re.http.test(n) ? n.match(u.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.no_http || (u.re.no_http = new RegExp(
        "^" + u.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + u.re.src_domain + ")\\.)+" + u.re.src_domain_root + ")" + u.re.src_port + u.re.src_host_terminator + u.re.src_path,
        "i"
      )), u.re.no_http.test(n) ? t >= 3 && e[t - 3] === ":" || t >= 3 && e[t - 3] === "/" ? 0 : n.match(u.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(e, t, u) {
      const n = e.slice(t);
      return u.re.mailto || (u.re.mailto = new RegExp(
        "^" + u.re.src_email_name + "@" + u.re.src_host_strict,
        "i"
      )), u.re.mailto.test(n) ? n.match(u.re.mailto)[0].length : 0;
    }
  }
}, $1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", H1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function W1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function G1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function yo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function Cn(e) {
  const t = e.re = z1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push($1), u.push(t.src_xn), t.src_tlds = u.join("|");
  function n(s) {
    return s.replace("%TLDS%", t.src_tlds);
  }
  t.email_fuzzy = RegExp(n(t.tpl_email_fuzzy), "i"), t.link_fuzzy = RegExp(n(t.tpl_link_fuzzy), "i"), t.link_no_ip_fuzzy = RegExp(n(t.tpl_link_no_ip_fuzzy), "i"), t.host_fuzzy_test = RegExp(n(t.tpl_host_fuzzy_test), "i");
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
    if (e.__compiled__[s] = c, B1(a)) {
      P1(a.validate) ? c.validate = G1(a.validate) : vo(a.validate) ? c.validate = a.validate : i(s, a), vo(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = yo();
      return;
    }
    if (L1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: yo() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(q1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), W1(e);
}
function V1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function Mr(e, t) {
  const u = new V1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Ye(e, t) {
  if (!(this instanceof Ye))
    return new Ye(e, t);
  t || j1(e) && (t = e, e = {}), this.__opts__ = Nr({}, oa, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Nr({}, U1, e), this.__compiled__ = {}, this.__tlds__ = H1, this.__tlds_replaced__ = !1, this.re = {}, Cn(this);
}
Ye.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, Cn(this), this;
};
Ye.prototype.set = function(t) {
  return this.__opts__ = Nr(this.__opts__, t), this;
};
Ye.prototype.test = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length)
    return !1;
  let u, n, r, i, o, s, a, c, l;
  if (this.re.schema_test.test(t)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (u = a.exec(t)) !== null; )
      if (i = this.testSchemaAt(t, u[2], a.lastIndex), i) {
        this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + i;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (c = t.search(this.re.host_fuzzy_test), c >= 0 && (this.__index__ < 0 || c < this.__index__) && (n = t.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (o = n.index + n[1].length, (this.__index__ < 0 || o < this.__index__) && (this.__schema__ = "", this.__index__ = o, this.__last_index__ = n.index + n[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = t.indexOf("@"), l >= 0 && (r = t.match(this.re.email_fuzzy)) !== null && (o = r.index + r[1].length, s = r.index + r[0].length, (this.__index__ < 0 || o < this.__index__ || o === this.__index__ && s > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = o, this.__last_index__ = s))), this.__index__ >= 0;
};
Ye.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Ye.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
Ye.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Mr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(Mr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Ye.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, Mr(this, 0)) : null;
};
Ye.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), Cn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, Cn(this), this);
};
Ye.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Ye.prototype.onCompile = function() {
};
const lu = 2147483647, mt = 36, si = 1, qu = 26, Z1 = 38, K1 = 700, sa = 72, aa = 128, ca = "-", J1 = /^xn--/, Y1 = /[^\0-\x7F]/, X1 = /[\x2E\u3002\uFF0E\uFF61]/g, Q1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, gr = mt - si, _t = Math.floor, mr = String.fromCharCode;
function Mt(e) {
  throw new RangeError(Q1[e]);
}
function eh(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function la(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(X1, ".");
  const r = e.split("."), i = eh(r, t).join(".");
  return n + i;
}
function fa(e) {
  const t = [];
  let u = 0;
  const n = e.length;
  for (; u < n; ) {
    const r = e.charCodeAt(u++);
    if (r >= 55296 && r <= 56319 && u < n) {
      const i = e.charCodeAt(u++);
      (i & 64512) == 56320 ? t.push(((r & 1023) << 10) + (i & 1023) + 65536) : (t.push(r), u--);
    } else
      t.push(r);
  }
  return t;
}
const th = (e) => String.fromCodePoint(...e), uh = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : mt;
}, Eo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, da = function(e, t, u) {
  let n = 0;
  for (e = u ? _t(e / K1) : e >> 1, e += _t(e / t); e > gr * qu >> 1; n += mt)
    e = _t(e / gr);
  return _t(n + (gr + 1) * e / (e + Z1));
}, ha = function(e) {
  const t = [], u = e.length;
  let n = 0, r = aa, i = sa, o = e.lastIndexOf(ca);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && Mt("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = mt; ; f += mt) {
      s >= u && Mt("invalid-input");
      const h = uh(e.charCodeAt(s++));
      h >= mt && Mt("invalid-input"), h > _t((lu - n) / l) && Mt("overflow"), n += h * l;
      const p = f <= i ? si : f >= i + qu ? qu : f - i;
      if (h < p)
        break;
      const d = mt - p;
      l > _t(lu / d) && Mt("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = da(n - a, c, a == 0), _t(n / c) > lu - r && Mt("overflow"), r += _t(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, pa = function(e) {
  const t = [];
  e = fa(e);
  const u = e.length;
  let n = aa, r = 0, i = sa;
  for (const a of e)
    a < 128 && t.push(mr(a));
  const o = t.length;
  let s = o;
  for (o && t.push(ca); s < u; ) {
    let a = lu;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > _t((lu - r) / c) && Mt("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > lu && Mt("overflow"), l === n) {
        let f = r;
        for (let h = mt; ; h += mt) {
          const p = h <= i ? si : h >= i + qu ? qu : h - i;
          if (f < p)
            break;
          const d = f - p, m = mt - p;
          t.push(
            mr(Eo(p + d % m, 0))
          ), f = _t(d / m);
        }
        t.push(mr(Eo(f, 0))), i = da(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, nh = function(e) {
  return la(e, function(t) {
    return J1.test(t) ? ha(t.slice(4).toLowerCase()) : t;
  });
}, rh = function(e) {
  return la(e, function(t) {
    return Y1.test(t) ? "xn--" + pa(t) : t;
  });
}, ba = {
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
    decode: fa,
    encode: th
  },
  decode: ha,
  encode: pa,
  toASCII: rh,
  toUnicode: nh
}, ih = {
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
}, oh = {
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
}, sh = {
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
}, ah = {
  default: ih,
  zero: oh,
  commonmark: sh
}, ch = /^(vbscript|javascript|file|data):/, lh = /^data:image\/(gif|png|jpeg|webp);/;
function fh(e) {
  const t = e.trim().toLowerCase();
  return ch.test(t) ? lh.test(t) : !0;
}
const ga = ["http:", "https:", "mailto:"];
function dh(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ga.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ba.toASCII(t.hostname);
    } catch (u) {
    }
  return Ku(ei(t));
}
function hh(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ga.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ba.toUnicode(t.hostname);
    } catch (u) {
    }
  return bu(ei(t), bu.defaultChars + "%");
}
function ut(e, t) {
  if (!(this instanceof ut))
    return new ut(e, t);
  t || ni(e) || (t = e || {}, e = "default"), this.inline = new Yu(), this.block = new Hn(), this.core = new ii(), this.renderer = new wu(), this.linkify = new Ye(), this.validateLink = fh, this.normalizeLink = dh, this.normalizeLinkText = hh, this.utils = bd, this.helpers = Un({}, xd), this.options = {}, this.configure(e), t && this.set(t);
}
ut.prototype.set = function(e) {
  return Un(this.options, e), this;
};
ut.prototype.configure = function(e) {
  const t = this;
  if (ni(e)) {
    const u = e;
    if (e = ah[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
ut.prototype.enable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    u = u.concat(this[r].ruler.enable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.enable(e, !0));
  const n = e.filter(function(r) {
    return u.indexOf(r) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + n);
  return this;
};
ut.prototype.disable = function(e, t) {
  let u = [];
  Array.isArray(e) || (e = [e]), ["core", "block", "inline"].forEach(function(r) {
    u = u.concat(this[r].ruler.disable(e, !0));
  }, this), u = u.concat(this.inline.ruler2.disable(e, !0));
  const n = e.filter(function(r) {
    return u.indexOf(r) < 0;
  });
  if (n.length && !t)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + n);
  return this;
};
ut.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
ut.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
ut.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
ut.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
ut.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function ph(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _r, ko;
function bh() {
  if (ko) return _r;
  ko = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((k) => {
      const S = b[k], q = typeof S;
      (q === "object" || q === "function") && !Object.isFrozen(S) && e(S);
    }), b;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(k) {
      k.data === void 0 && (k.data = {}), this.data = k.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function u(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(b, ...k) {
    const S = /* @__PURE__ */ Object.create(null);
    for (const q in b)
      S[q] = b[q];
    return k.forEach(function(q) {
      for (const he in q)
        S[he] = q[he];
    }), /** @type {T} */
    S;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: k }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const S = b.split(".");
      return [
        `${k}${S.shift()}`,
        ...S.map((q, he) => `${q}${"_".repeat(he + 1)}`)
      ].join(" ");
    }
    return `${k}${b}`;
  };
  class s {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(k, S) {
      this.buffer = "", this.classPrefix = S.classPrefix, k.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(k) {
      this.buffer += u(k);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(k) {
      if (!i(k)) return;
      const S = o(
        k.scope,
        { prefix: this.classPrefix }
      );
      this.span(S);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(k) {
      i(k) && (this.buffer += r);
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
    span(k) {
      this.buffer += `<span class="${k}">`;
    }
  }
  const a = (b = {}) => {
    const k = { children: [] };
    return Object.assign(k, b), k;
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
    add(k) {
      this.top.children.push(k);
    }
    /** @param {string} scope */
    openNode(k) {
      const S = a({ scope: k });
      this.add(S), this.stack.push(S);
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
    walk(k) {
      return this.constructor._walk(k, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(k, S) {
      return typeof S == "string" ? k.addText(S) : S.children && (k.openNode(S), S.children.forEach((q) => this._walk(k, q)), k.closeNode(S)), k;
    }
    /**
     * @param {Node} node
     */
    static _collapse(k) {
      typeof k != "string" && k.children && (k.children.every((S) => typeof S == "string") ? k.children = [k.children.join("")] : k.children.forEach((S) => {
        c._collapse(S);
      }));
    }
  }
  class l extends c {
    /**
     * @param {*} options
     */
    constructor(k) {
      super(), this.options = k;
    }
    /**
     * @param {string} text
     */
    addText(k) {
      k !== "" && this.add(k);
    }
    /** @param {string} scope */
    startScope(k) {
      this.openNode(k);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(k, S) {
      const q = k.root;
      S && (q.scope = `language:${S}`), this.add(q);
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
    return b.map((S) => f(S)).join("");
  }
  function g(b) {
    const k = b[b.length - 1];
    return typeof k == "object" && k.constructor === Object ? (b.splice(b.length - 1, 1), k) : {};
  }
  function w(...b) {
    return "(" + (g(b).capture ? "" : "?:") + b.map((q) => f(q)).join("|") + ")";
  }
  function v(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function _(b, k) {
    const S = b && b.exec(k);
    return S && S.index === 0;
  }
  const x = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(b, { joinWith: k }) {
    let S = 0;
    return b.map((q) => {
      S += 1;
      const he = S;
      let pe = f(q), N = "";
      for (; pe.length > 0; ) {
        const O = x.exec(pe);
        if (!O) {
          N += pe;
          break;
        }
        N += pe.substring(0, O.index), pe = pe.substring(O.index + O[0].length), O[0][0] === "\\" && O[1] ? N += "\\" + String(Number(O[1]) + he) : (N += O[0], O[0] === "(" && S++);
      }
      return N;
    }).map((q) => `(${q})`).join(k);
  }
  const A = /\b\B/, D = "[a-zA-Z]\\w*", F = "[a-zA-Z_]\\w*", L = "\\b\\d+(\\.\\d+)?", Y = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", j = "\\b(0b[01]+)", G = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", se = (b = {}) => {
    const k = /^#![ ]*\//;
    return b.binary && (b.begin = m(
      k,
      /.*\b/,
      b.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: k,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (S, q) => {
        S.index !== 0 && q.ignoreMatch();
      }
    }, b);
  }, X = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, B = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [X]
  }, V = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [X]
  }, ae = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, K = function(b, k, S = {}) {
    const q = n(
      {
        scope: "comment",
        begin: b,
        end: k,
        contains: []
      },
      S
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
    const he = w(
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
          he,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), q;
  }, we = K("//", "$"), nt = K("/\\*", "\\*/"), Be = K("#", "$"), ft = {
    scope: "number",
    begin: L,
    relevance: 0
  }, I = {
    scope: "number",
    begin: Y,
    relevance: 0
  }, ue = {
    scope: "number",
    begin: j,
    relevance: 0
  }, de = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      X,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [X]
      }
    ]
  }, Ve = {
    scope: "title",
    begin: D,
    relevance: 0
  }, Et = {
    scope: "title",
    begin: F,
    relevance: 0
  }, Tt = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + F,
    relevance: 0
  };
  var Pe = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: B,
    BACKSLASH_ESCAPE: X,
    BINARY_NUMBER_MODE: ue,
    BINARY_NUMBER_RE: j,
    COMMENT: K,
    C_BLOCK_COMMENT_MODE: nt,
    C_LINE_COMMENT_MODE: we,
    C_NUMBER_MODE: I,
    C_NUMBER_RE: Y,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (k, S) => {
            S.data._beginMatch = k[1];
          },
          /** @type {ModeCallback} */
          "on:end": (k, S) => {
            S.data._beginMatch !== k[1] && S.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Be,
    IDENT_RE: D,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Tt,
    NUMBER_MODE: ft,
    NUMBER_RE: L,
    PHRASAL_WORDS_MODE: ae,
    QUOTE_STRING_MODE: V,
    REGEXP_MODE: de,
    RE_STARTERS_RE: G,
    SHEBANG: se,
    TITLE_MODE: Ve,
    UNDERSCORE_IDENT_RE: F,
    UNDERSCORE_TITLE_MODE: Et
  });
  function Ft(b, k) {
    b.input[b.index - 1] === "." && k.ignoreMatch();
  }
  function Au(b, k) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function ya(b, k) {
    k && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = Ft, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Ea(b, k) {
    Array.isArray(b.illegal) && (b.illegal = w(...b.illegal));
  }
  function ka(b, k) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function wa(b, k) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Aa = (b, k) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const S = Object.assign({}, b);
    Object.keys(b).forEach((q) => {
      delete b[q];
    }), b.keywords = S.keywords, b.begin = m(S.beforeMatch, h(S.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(S, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete S.beforeMatch;
  }, Ca = [
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
  ], Da = "keyword";
  function ai(b, k, S = Da) {
    const q = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? he(S, b.split(" ")) : Array.isArray(b) ? he(S, b) : Object.keys(b).forEach(function(pe) {
      Object.assign(
        q,
        ai(b[pe], k, pe)
      );
    }), q;
    function he(pe, N) {
      k && (N = N.map((O) => O.toLowerCase())), N.forEach(function(O) {
        const P = O.split("|");
        q[P[0]] = [pe, Sa(P[0], P[1])];
      });
    }
  }
  function Sa(b, k) {
    return k ? Number(k) : Ta(b) ? 0 : 1;
  }
  function Ta(b) {
    return Ca.includes(b.toLowerCase());
  }
  const ci = {}, $t = (b) => {
    console.error(b);
  }, li = (b, ...k) => {
    console.log(`WARN: ${b}`, ...k);
  }, uu = (b, k) => {
    ci[`${b}/${k}`] || (console.log(`Deprecated as of ${b}. ${k}`), ci[`${b}/${k}`] = !0);
  }, Qu = new Error();
  function fi(b, k, { key: S }) {
    let q = 0;
    const he = b[S], pe = {}, N = {};
    for (let O = 1; O <= k.length; O++)
      N[O + q] = he[O], pe[O + q] = !0, q += v(k[O - 1]);
    b[S] = N, b[S]._emit = pe, b[S]._multi = !0;
  }
  function Fa(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw $t("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Qu;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw $t("beginScope must be object"), Qu;
      fi(b, b.begin, { key: "beginScope" }), b.begin = E(b.begin, { joinWith: "" });
    }
  }
  function Ra(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw $t("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Qu;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw $t("endScope must be object"), Qu;
      fi(b, b.end, { key: "endScope" }), b.end = E(b.end, { joinWith: "" });
    }
  }
  function Oa(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function Na(b) {
    Oa(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Fa(b), Ra(b);
  }
  function Ma(b) {
    function k(N, O) {
      return new RegExp(
        f(N),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (O ? "g" : "")
      );
    }
    class S {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(O, P) {
        P.position = this.position++, this.matchIndexes[this.matchAt] = P, this.regexes.push([P, O]), this.matchAt += v(O) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const O = this.regexes.map((P) => P[1]);
        this.matcherRe = k(E(O, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(O) {
        this.matcherRe.lastIndex = this.lastIndex;
        const P = this.matcherRe.exec(O);
        if (!P)
          return null;
        const xe = P.findIndex((Cu, Vn) => Vn > 0 && Cu !== void 0), ge = this.matchIndexes[xe];
        return P.splice(0, xe), Object.assign(P, ge);
      }
    }
    class q {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(O) {
        if (this.multiRegexes[O]) return this.multiRegexes[O];
        const P = new S();
        return this.rules.slice(O).forEach(([xe, ge]) => P.addRule(xe, ge)), P.compile(), this.multiRegexes[O] = P, P;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(O, P) {
        this.rules.push([O, P]), P.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(O) {
        const P = this.getMatcher(this.regexIndex);
        P.lastIndex = this.lastIndex;
        let xe = P.exec(O);
        if (this.resumingScanAtSamePosition() && !(xe && xe.index === this.lastIndex)) {
          const ge = this.getMatcher(0);
          ge.lastIndex = this.lastIndex + 1, xe = ge.exec(O);
        }
        return xe && (this.regexIndex += xe.position + 1, this.regexIndex === this.count && this.considerAll()), xe;
      }
    }
    function he(N) {
      const O = new q();
      return N.contains.forEach((P) => O.addRule(P.begin, { rule: P, type: "begin" })), N.terminatorEnd && O.addRule(N.terminatorEnd, { type: "end" }), N.illegal && O.addRule(N.illegal, { type: "illegal" }), O;
    }
    function pe(N, O) {
      const P = (
        /** @type CompiledMode */
        N
      );
      if (N.isCompiled) return P;
      [
        Au,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        ka,
        Na,
        Aa
      ].forEach((ge) => ge(N, O)), b.compilerExtensions.forEach((ge) => ge(N, O)), N.__beforeBegin = null, [
        ya,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Ea,
        // default to 1 relevance if not specified
        wa
      ].forEach((ge) => ge(N, O)), N.isCompiled = !0;
      let xe = null;
      return typeof N.keywords == "object" && N.keywords.$pattern && (N.keywords = Object.assign({}, N.keywords), xe = N.keywords.$pattern, delete N.keywords.$pattern), xe = xe || /\w+/, N.keywords && (N.keywords = ai(N.keywords, b.case_insensitive)), P.keywordPatternRe = k(xe, !0), O && (N.begin || (N.begin = /\B|\b/), P.beginRe = k(P.begin), !N.end && !N.endsWithParent && (N.end = /\B|\b/), N.end && (P.endRe = k(P.end)), P.terminatorEnd = f(P.end) || "", N.endsWithParent && O.terminatorEnd && (P.terminatorEnd += (N.end ? "|" : "") + O.terminatorEnd)), N.illegal && (P.illegalRe = k(
        /** @type {RegExp | string} */
        N.illegal
      )), N.contains || (N.contains = []), N.contains = [].concat(...N.contains.map(function(ge) {
        return Ia(ge === "self" ? N : ge);
      })), N.contains.forEach(function(ge) {
        pe(
          /** @type Mode */
          ge,
          P
        );
      }), N.starts && pe(N.starts, O), P.matcher = he(P), P;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), pe(
      /** @type Mode */
      b
    );
  }
  function di(b) {
    return b ? b.endsWithParent || di(b.starts) : !1;
  }
  function Ia(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(k) {
      return n(b, { variants: null }, k);
    })), b.cachedVariants ? b.cachedVariants : di(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var za = "11.11.1";
  class La extends Error {
    constructor(k, S) {
      super(k), this.name = "HTMLInjectionError", this.html = S;
    }
  }
  const Gn = u, hi = n, pi = Symbol("nomatch"), Ba = 7, bi = function(b) {
    const k = /* @__PURE__ */ Object.create(null), S = /* @__PURE__ */ Object.create(null), q = [];
    let he = !0;
    const pe = "Could not find the language '{}', did you forget to load/include a language module?", N = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let O = {
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
      return O.noHighlightRe.test(C);
    }
    function xe(C) {
      let z = C.className + " ";
      z += C.parentNode ? C.parentNode.className : "";
      const Z = O.languageDetectRe.exec(z);
      if (Z) {
        const re = Rt(Z[1]);
        return re || (li(pe.replace("{}", Z[1])), li("Falling back to no-highlight mode for this block.", C)), re ? Z[1] : "no-highlight";
      }
      return z.split(/\s+/).find((re) => P(re) || Rt(re));
    }
    function ge(C, z, Z) {
      let re = "", me = "";
      typeof z == "object" ? (re = C, Z = z.ignoreIllegals, me = z.language) : (uu("10.7.0", "highlight(lang, code, ...args) has been deprecated."), uu("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), me = C, re = z), Z === void 0 && (Z = !0);
      const rt = {
        code: re,
        language: me
      };
      tn("before:highlight", rt);
      const Ot = rt.result ? rt.result : Cu(rt.language, rt.code, Z);
      return Ot.code = rt.code, tn("after:highlight", Ot), Ot;
    }
    function Cu(C, z, Z, re) {
      const me = /* @__PURE__ */ Object.create(null);
      function rt(T, M) {
        return T.keywords[M];
      }
      function Ot() {
        if (!U.keywords) {
          Ae.addText(ie);
          return;
        }
        let T = 0;
        U.keywordPatternRe.lastIndex = 0;
        let M = U.keywordPatternRe.exec(ie), H = "";
        for (; M; ) {
          H += ie.substring(T, M.index);
          const Q = ht.case_insensitive ? M[0].toLowerCase() : M[0], De = rt(U, Q);
          if (De) {
            const [kt, tc] = De;
            if (Ae.addText(H), H = "", me[Q] = (me[Q] || 0) + 1, me[Q] <= Ba && (rn += tc), kt.startsWith("_"))
              H += M[0];
            else {
              const uc = ht.classNameAliases[kt] || kt;
              dt(M[0], uc);
            }
          } else
            H += M[0];
          T = U.keywordPatternRe.lastIndex, M = U.keywordPatternRe.exec(ie);
        }
        H += ie.substring(T), Ae.addText(H);
      }
      function un() {
        if (ie === "") return;
        let T = null;
        if (typeof U.subLanguage == "string") {
          if (!k[U.subLanguage]) {
            Ae.addText(ie);
            return;
          }
          T = Cu(U.subLanguage, ie, !0, ki[U.subLanguage]), ki[U.subLanguage] = /** @type {CompiledMode} */
          T._top;
        } else
          T = Zn(ie, U.subLanguage.length ? U.subLanguage : null);
        U.relevance > 0 && (rn += T.relevance), Ae.__addSublanguage(T._emitter, T.language);
      }
      function Ze() {
        U.subLanguage != null ? un() : Ot(), ie = "";
      }
      function dt(T, M) {
        T !== "" && (Ae.startScope(M), Ae.addText(T), Ae.endScope());
      }
      function xi(T, M) {
        let H = 1;
        const Q = M.length - 1;
        for (; H <= Q; ) {
          if (!T._emit[H]) {
            H++;
            continue;
          }
          const De = ht.classNameAliases[T[H]] || T[H], kt = M[H];
          De ? dt(kt, De) : (ie = kt, Ot(), ie = ""), H++;
        }
      }
      function vi(T, M) {
        return T.scope && typeof T.scope == "string" && Ae.openNode(ht.classNameAliases[T.scope] || T.scope), T.beginScope && (T.beginScope._wrap ? (dt(ie, ht.classNameAliases[T.beginScope._wrap] || T.beginScope._wrap), ie = "") : T.beginScope._multi && (xi(T.beginScope, M), ie = "")), U = Object.create(T, { parent: { value: U } }), U;
      }
      function yi(T, M, H) {
        let Q = _(T.endRe, H);
        if (Q) {
          if (T["on:end"]) {
            const De = new t(T);
            T["on:end"](M, De), De.isMatchIgnored && (Q = !1);
          }
          if (Q) {
            for (; T.endsParent && T.parent; )
              T = T.parent;
            return T;
          }
        }
        if (T.endsWithParent)
          return yi(T.parent, M, H);
      }
      function Ja(T) {
        return U.matcher.regexIndex === 0 ? (ie += T[0], 1) : (Xn = !0, 0);
      }
      function Ya(T) {
        const M = T[0], H = T.rule, Q = new t(H), De = [H.__beforeBegin, H["on:begin"]];
        for (const kt of De)
          if (kt && (kt(T, Q), Q.isMatchIgnored))
            return Ja(M);
        return H.skip ? ie += M : (H.excludeBegin && (ie += M), Ze(), !H.returnBegin && !H.excludeBegin && (ie = M)), vi(H, T), H.returnBegin ? 0 : M.length;
      }
      function Xa(T) {
        const M = T[0], H = z.substring(T.index), Q = yi(U, T, H);
        if (!Q)
          return pi;
        const De = U;
        U.endScope && U.endScope._wrap ? (Ze(), dt(M, U.endScope._wrap)) : U.endScope && U.endScope._multi ? (Ze(), xi(U.endScope, T)) : De.skip ? ie += M : (De.returnEnd || De.excludeEnd || (ie += M), Ze(), De.excludeEnd && (ie = M));
        do
          U.scope && Ae.closeNode(), !U.skip && !U.subLanguage && (rn += U.relevance), U = U.parent;
        while (U !== Q.parent);
        return Q.starts && vi(Q.starts, T), De.returnEnd ? 0 : M.length;
      }
      function Qa() {
        const T = [];
        for (let M = U; M !== ht; M = M.parent)
          M.scope && T.unshift(M.scope);
        T.forEach((M) => Ae.openNode(M));
      }
      let nn = {};
      function Ei(T, M) {
        const H = M && M[0];
        if (ie += T, H == null)
          return Ze(), 0;
        if (nn.type === "begin" && M.type === "end" && nn.index === M.index && H === "") {
          if (ie += z.slice(M.index, M.index + 1), !he) {
            const Q = new Error(`0 width match regex (${C})`);
            throw Q.languageName = C, Q.badRule = nn.rule, Q;
          }
          return 1;
        }
        if (nn = M, M.type === "begin")
          return Ya(M);
        if (M.type === "illegal" && !Z) {
          const Q = new Error('Illegal lexeme "' + H + '" for mode "' + (U.scope || "<unnamed>") + '"');
          throw Q.mode = U, Q;
        } else if (M.type === "end") {
          const Q = Xa(M);
          if (Q !== pi)
            return Q;
        }
        if (M.type === "illegal" && H === "")
          return ie += `
`, 1;
        if (Yn > 1e5 && Yn > M.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ie += H, H.length;
      }
      const ht = Rt(C);
      if (!ht)
        throw $t(pe.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const ec = Ma(ht);
      let Jn = "", U = re || ec;
      const ki = {}, Ae = new O.__emitter(O);
      Qa();
      let ie = "", rn = 0, Ht = 0, Yn = 0, Xn = !1;
      try {
        if (ht.__emitTokens)
          ht.__emitTokens(z, Ae);
        else {
          for (U.matcher.considerAll(); ; ) {
            Yn++, Xn ? Xn = !1 : U.matcher.considerAll(), U.matcher.lastIndex = Ht;
            const T = U.matcher.exec(z);
            if (!T) break;
            const M = z.substring(Ht, T.index), H = Ei(M, T);
            Ht = T.index + H;
          }
          Ei(z.substring(Ht));
        }
        return Ae.finalize(), Jn = Ae.toHTML(), {
          language: C,
          value: Jn,
          relevance: rn,
          illegal: !1,
          _emitter: Ae,
          _top: U
        };
      } catch (T) {
        if (T.message && T.message.includes("Illegal"))
          return {
            language: C,
            value: Gn(z),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: T.message,
              index: Ht,
              context: z.slice(Ht - 100, Ht + 100),
              mode: T.mode,
              resultSoFar: Jn
            },
            _emitter: Ae
          };
        if (he)
          return {
            language: C,
            value: Gn(z),
            illegal: !1,
            relevance: 0,
            errorRaised: T,
            _emitter: Ae,
            _top: U
          };
        throw T;
      }
    }
    function Vn(C) {
      const z = {
        value: Gn(C),
        illegal: !1,
        relevance: 0,
        _top: N,
        _emitter: new O.__emitter(O)
      };
      return z._emitter.addText(C), z;
    }
    function Zn(C, z) {
      z = z || O.languages || Object.keys(k);
      const Z = Vn(C), re = z.filter(Rt).filter(_i).map(
        (Ze) => Cu(Ze, C, !1)
      );
      re.unshift(Z);
      const me = re.sort((Ze, dt) => {
        if (Ze.relevance !== dt.relevance) return dt.relevance - Ze.relevance;
        if (Ze.language && dt.language) {
          if (Rt(Ze.language).supersetOf === dt.language)
            return 1;
          if (Rt(dt.language).supersetOf === Ze.language)
            return -1;
        }
        return 0;
      }), [rt, Ot] = me, un = rt;
      return un.secondBest = Ot, un;
    }
    function Pa(C, z, Z) {
      const re = z && S[z] || Z;
      C.classList.add("hljs"), C.classList.add(`language-${re}`);
    }
    function Kn(C) {
      let z = null;
      const Z = xe(C);
      if (P(Z)) return;
      if (tn(
        "before:highlightElement",
        { el: C, language: Z }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (O.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), O.throwUnescapedHTML))
        throw new La(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      z = C;
      const re = z.textContent, me = Z ? ge(re, { language: Z, ignoreIllegals: !0 }) : Zn(re);
      C.innerHTML = me.value, C.dataset.highlighted = "yes", Pa(C, Z, me.language), C.result = {
        language: me.language,
        // TODO: remove with version 11.0
        re: me.relevance,
        relevance: me.relevance
      }, me.secondBest && (C.secondBest = {
        language: me.secondBest.language,
        relevance: me.secondBest.relevance
      }), tn("after:highlightElement", { el: C, result: me, text: re });
    }
    function qa(C) {
      O = hi(O, C);
    }
    const ja = () => {
      en(), uu("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ua() {
      en(), uu("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let gi = !1;
    function en() {
      function C() {
        en();
      }
      if (document.readyState === "loading") {
        gi || window.addEventListener("DOMContentLoaded", C, !1), gi = !0;
        return;
      }
      document.querySelectorAll(O.cssSelector).forEach(Kn);
    }
    function $a(C, z) {
      let Z = null;
      try {
        Z = z(b);
      } catch (re) {
        if ($t("Language definition for '{}' could not be registered.".replace("{}", C)), he)
          $t(re);
        else
          throw re;
        Z = N;
      }
      Z.name || (Z.name = C), k[C] = Z, Z.rawDefinition = z.bind(null, b), Z.aliases && mi(Z.aliases, { languageName: C });
    }
    function Ha(C) {
      delete k[C];
      for (const z of Object.keys(S))
        S[z] === C && delete S[z];
    }
    function Wa() {
      return Object.keys(k);
    }
    function Rt(C) {
      return C = (C || "").toLowerCase(), k[C] || k[S[C]];
    }
    function mi(C, { languageName: z }) {
      typeof C == "string" && (C = [C]), C.forEach((Z) => {
        S[Z.toLowerCase()] = z;
      });
    }
    function _i(C) {
      const z = Rt(C);
      return z && !z.disableAutodetect;
    }
    function Ga(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (z) => {
        C["before:highlightBlock"](
          Object.assign({ block: z.el }, z)
        );
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (z) => {
        C["after:highlightBlock"](
          Object.assign({ block: z.el }, z)
        );
      });
    }
    function Va(C) {
      Ga(C), q.push(C);
    }
    function Za(C) {
      const z = q.indexOf(C);
      z !== -1 && q.splice(z, 1);
    }
    function tn(C, z) {
      const Z = C;
      q.forEach(function(re) {
        re[Z] && re[Z](z);
      });
    }
    function Ka(C) {
      return uu("10.7.0", "highlightBlock will be removed entirely in v12.0"), uu("10.7.0", "Please use highlightElement now."), Kn(C);
    }
    Object.assign(b, {
      highlight: ge,
      highlightAuto: Zn,
      highlightAll: en,
      highlightElement: Kn,
      // TODO: Remove with v12 API
      highlightBlock: Ka,
      configure: qa,
      initHighlighting: ja,
      initHighlightingOnLoad: Ua,
      registerLanguage: $a,
      unregisterLanguage: Ha,
      listLanguages: Wa,
      getLanguage: Rt,
      registerAliases: mi,
      autoDetection: _i,
      inherit: hi,
      addPlugin: Va,
      removePlugin: Za
    }), b.debugMode = function() {
      he = !1;
    }, b.safeMode = function() {
      he = !0;
    }, b.versionString = za, b.regex = {
      concat: m,
      lookahead: h,
      either: w,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const C in Pe)
      typeof Pe[C] == "object" && e(Pe[C]);
    return Object.assign(b, Pe), b;
  }, nu = bi({});
  return nu.newInstance = () => bi({}), _r = nu, nu.HighlightJS = nu, nu.default = nu, _r;
}
var gh = /* @__PURE__ */ bh();
const Oe = /* @__PURE__ */ ph(gh), wo = "[A-Za-z$_][0-9A-Za-z$_]*", mh = [
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
], _h = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ma = [
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
], _a = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], xa = [
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
], xh = [
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
], vh = [].concat(
  xa,
  ma,
  _a
);
function yh(e) {
  const t = e.regex, u = (K, { after: we }) => {
    const nt = "</" + K[0].slice(1);
    return K.input.indexOf(nt, we) !== -1;
  }, n = wo, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (K, we) => {
      const nt = K[0].length + K.index, Be = K.input[nt];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Be === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Be === ","
      ) {
        we.ignoreMatch();
        return;
      }
      Be === ">" && (u(K, { after: nt }) || we.ignoreMatch());
      let ft;
      const I = K.input.substring(nt);
      if (ft = I.match(/^\s*=/)) {
        we.ignoreMatch();
        return;
      }
      if ((ft = I.match(/^\s+extends\s+/)) && ft.index === 0) {
        we.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: wo,
    keyword: mh,
    literal: _h,
    built_in: vh,
    "variable.language": xh
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
  }, v = {
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
                  begin: n + "(?=\\s*(-)|$)",
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
  }, _ = [
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
  h.contains = _.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(_)
  });
  const x = [].concat(v, h.contains), E = x.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(x)
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
    contains: E
  }, D = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          n,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(n, "(", t.concat(/\./, n), ")*")
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
          n
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, F = {
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
        ...ma,
        ..._a
      ]
    }
  }, L = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, Y = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          n,
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
  }, j = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function G(K) {
    return t.concat("(?!", K.join("|"), ")");
  }
  const se = {
    match: t.concat(
      /\b/,
      G([
        ...xa,
        "super",
        "import"
      ].map((K) => `${K}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, X = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, B = {
    match: [
      /get|set/,
      /\s+/,
      n,
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
  }, V = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", ae = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(V)
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
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: F },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      L,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      m,
      g,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      F,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      ae,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          v,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: V,
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
                    contains: E
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
      Y,
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
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      X,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + n,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [A]
      },
      se,
      j,
      D,
      B,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Eh(e) {
  const t = {
    className: "attr",
    begin: /"(\\.|[^\\"\r\n])*"(?=\s*:)/,
    relevance: 1.01
  }, u = {
    match: /[{}[\],:]/,
    className: "punctuation",
    relevance: 0
  }, n = [
    "true",
    "false",
    "null"
  ], r = {
    scope: "literal",
    beginKeywords: n.join(" ")
  };
  return {
    name: "JSON",
    aliases: ["jsonc"],
    keywords: {
      literal: n
    },
    contains: [
      t,
      u,
      e.QUOTE_STRING_MODE,
      r,
      e.C_NUMBER_MODE,
      e.C_LINE_COMMENT_MODE,
      e.C_BLOCK_COMMENT_MODE
    ],
    illegal: "\\S"
  };
}
function va(e) {
  const t = e.regex, u = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), n = /[\p{L}0-9._:-]+/u, r = {
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
        begin: n,
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
            u,
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
            begin: u,
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
            u,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: u,
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
const kh = (e) => ({
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
}), wh = [
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
], Ah = [
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
], Ch = [
  ...wh,
  ...Ah
], Dh = [
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
].sort().reverse(), Sh = [
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
].sort().reverse(), Th = [
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
].sort().reverse(), Fh = [
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
function Rh(e) {
  const t = e.regex, u = kh(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
      u.BLOCK_COMMENT,
      n,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      u.CSS_NUMBER_MODE,
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
      u.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Sh.join("|") + ")" },
          { begin: ":(:)?(" + Th.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      u.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Fh.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          u.BLOCK_COMMENT,
          u.HEXCOLOR,
          u.IMPORTANT,
          u.CSS_NUMBER_MODE,
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
          u.FUNCTION_DISPATCH
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
              attribute: Dh.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...s,
              u.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Ch.join("|") + ")\\b"
      }
    ]
  };
}
function Oh(e) {
  const t = e.regex, u = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, n = {
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
    u,
    a
  ];
  return [
    c,
    l,
    f,
    h
  ].forEach((w) => {
    w.contains = w.contains.concat(p);
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
      u,
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
      n,
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
function Nh(e) {
  const t = e.regex, u = /(?![A-Za-z0-9])(?![$])/, n = t.concat(
    /[a-zA-Z_\x7f-\xff][a-zA-Z0-9_\x7f-\xff]*/,
    u
  ), r = t.concat(
    /(\\?[A-Z][a-z0-9_\x7f-\xff]+|\\?[A-Z]+(?=[A-Z][a-z0-9_\x7f-\xff])){1,}/,
    u
  ), i = t.concat(
    /[A-Z]+/,
    u
  ), o = {
    scope: "variable",
    match: "\\$+" + n
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
    "on:begin": (X, B) => {
      B.data._beginMatch = X[1] || X[2];
    },
    "on:end": (X, B) => {
      B.data._beginMatch !== X[1] && B.ignoreMatch();
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
  ], w = [
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
  ], v = [
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
  ], x = {
    keyword: w,
    literal: ((X) => {
      const B = [];
      return X.forEach((V) => {
        B.push(V), V.toLowerCase() === V ? B.push(V.toUpperCase()) : B.push(V.toLowerCase());
      }), B;
    })(g),
    built_in: v
  }, E = (X) => X.map((B) => B.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", E(v).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, D = t.concat(n, "\\b(?!\\()"), F = { variants: [
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
  ] }, L = {
    scope: "attr",
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, Y = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: x,
    contains: [
      L,
      o,
      F,
      e.C_BLOCK_COMMENT_MODE,
      d,
      m,
      A
    ]
  }, j = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", E(w).join("\\b|"), "|", E(v).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [Y]
  };
  Y.contains.push(j);
  const G = [
    L,
    F,
    e.C_BLOCK_COMMENT_MODE,
    d,
    m,
    A
  ], se = {
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
          ...G
        ]
      },
      ...G,
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
    keywords: x,
    contains: [
      se,
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
      j,
      F,
      {
        match: [
          /const/,
          /\s/,
          n
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
            keywords: x,
            contains: [
              "self",
              se,
              o,
              F,
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
function Mh(e) {
  const t = e.regex, u = e.COMMENT("--", "$"), n = {
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
  ].filter((E) => !l.includes(E)), m = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, g = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, w = {
    match: t.concat(/\b/, t.either(...p), /\s*\(/),
    relevance: 0,
    keywords: { built_in: p }
  };
  function v(E) {
    return t.concat(
      /\b/,
      t.either(...E.map((A) => A.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const _ = {
    scope: "keyword",
    match: v(h),
    relevance: 0
  };
  function x(E, {
    exceptions: A,
    when: D
  } = {}) {
    const F = D;
    return A = A || [], E.map((L) => L.match(/\|\d+$/) || A.includes(L) ? L : F(L) ? `${L}|0` : L);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: x(d, { when: (E) => E.length < 3 }),
      literal: i,
      type: s,
      built_in: f
    },
    contains: [
      {
        scope: "type",
        match: v(o)
      },
      _,
      w,
      m,
      n,
      r,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      u,
      g
    ]
  };
}
Oe.registerLanguage("javascript", yh);
Oe.registerLanguage("json", Eh);
Oe.registerLanguage("xml", va);
Oe.registerLanguage("html", va);
Oe.registerLanguage("css", Rh);
Oe.registerLanguage("markdown", Oh);
Oe.registerLanguage("php", Nh);
Oe.registerLanguage("sql", Mh);
const ot = new ut({
  html: !1,
  linkify: !0,
  typographer: !0,
  langPrefix: "language-",
  highlight: function(e, t) {
    try {
      return t && Oe.getLanguage(t) ? Oe.highlight(e, {
        language: t,
        ignoreIllegals: !0
      }).value : Oe.highlightAuto(e, Oe.listLanguages()).value;
    } catch (u) {
      return ot.utils.escapeHtml(e);
    }
  }
});
ot.enable(["table", "strikethrough"]);
ot.renderer.rules.code_inline = function(e, t) {
  const u = e[t];
  return `<code class="md-inline-code">${ot.utils.escapeHtml(u.content)}</code>`;
};
ot.renderer.rules.fence = function(e, t) {
  const u = e[t], n = u.info ? u.info.trim() : "", r = u.content || "", i = n.split(/\s+/g)[0] || "";
  let o = "", s = "plaintext";
  try {
    if (i && Oe.getLanguage(i))
      s = i, o = Oe.highlight(r, {
        language: i,
        ignoreIllegals: !0
      }).value;
    else {
      const c = Oe.highlightAuto(r, Oe.listLanguages());
      s = c.language || "plaintext", o = c.value;
    }
  } catch (c) {
    o = ot.utils.escapeHtml(r), s = "plaintext";
  }
  const a = ot.utils.escapeHtml(r);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${s}</span><button type="button" class="copy-code" data-code="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${s}">${o}</code></pre></div>`;
};
ot.renderer.rules.link_open = function(e, t) {
  const u = e[t], n = u.attrIndex("href");
  if (n >= 0) {
    const r = u.attrs[n][1];
    u.attrs[n][1] = ot.utils.escapeHtml(r);
  }
  return u.attrIndex("target") < 0 && u.attrPush(["target", "_blank"]), u.attrIndex("rel") < 0 && u.attrPush(["rel", "noopener noreferrer"]), ot.renderer.renderToken(e, t, {});
};
function Ih(e) {
  return e ? ot.render(e) : "";
}
var zh = /* @__PURE__ */ fe('<img alt="Bot Icon" class="avatar-image svelte-1syzkch">'), Lh = /* @__PURE__ */ fe("<div><!></div>"), Bh = /* @__PURE__ */ fe('<div class="text svelte-1syzkch"></div>'), Ph = /* @__PURE__ */ fe('<div class="thinking svelte-1syzkch"><span class="svelte-1syzkch">Thinking</span> <div class="dots-container svelte-1syzkch"><span class="dot svelte-1syzkch"></span> <span class="dot svelte-1syzkch"></span> <span class="dot svelte-1syzkch"></span></div></div>'), qh = /* @__PURE__ */ fe('<a target="_blank" rel="noopener noreferrer" class="svelte-1syzkch"> </a>'), jh = /* @__PURE__ */ fe('<span class="svelte-1syzkch"> </span>'), Uh = /* @__PURE__ */ fe('<li class="source-item svelte-1syzkch"><!></li>'), $h = /* @__PURE__ */ fe('<div class="sources-block svelte-1syzkch"><div class="sources-title svelte-1syzkch">Sources</div> <ul class="sources-list svelte-1syzkch"></ul></div>'), Hh = /* @__PURE__ */ fe("<div><!></div> <!>", 1), Wh = /* @__PURE__ */ fe('<div><div><!> <div><div><!></div> <div><span class="timestamp svelte-1syzkch"> </span></div></div></div></div>');
const Gh = {
  hash: "svelte-1syzkch",
  code: `.message-container.svelte-1syzkch {display:flex;padding:0.25rem 0;}.human-message.svelte-1syzkch {justify-content:flex-end;}.ai-message.svelte-1syzkch {justify-content:flex-start;}.message-content.svelte-1syzkch {display:flex;align-items:flex-start;gap:0.25rem;max-width:85%;}.human-content.svelte-1syzkch {flex-direction:row-reverse;}.ai-content.svelte-1syzkch {flex-direction:row;}

  /* Match WidgetView preview: square avatar with rounded-md corners (size-8 equivalent) */.avatar.svelte-1syzkch {width:2rem; /* size-8 */height:2rem; /* size-8 */border-radius:0.5rem; /* rounded-md */border-top-right-radius:0.15rem;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);overflow:hidden;}.avatar.icon-url.svelte-1syzkch {background-color:transparent;overflow:hidden;}.avatar-image.svelte-1syzkch {width:100%;height:100%;object-fit:cover;display:block;}

  /* New flex-based body */.message-body.svelte-1syzkch {display:flex;flex-direction:column;align-items:flex-start;gap:2px;max-width:100%;}.human-body.svelte-1syzkch {align-items:flex-end;}.ai-body.svelte-1syzkch {align-items:flex-start;}.bubble.svelte-1syzkch {padding:0.5rem;border-radius:0.5rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);line-height:1.5;display:inline-flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);max-width:85%; /* reduce message width to fit better in smaller widget */position:relative;
    /* 0.92rem ≈ 14.7px -> use 15px */font-size:15px;}.human-bubble.svelte-1syzkch {border-top-right-radius:0.15rem;}.ai-bubble.svelte-1syzkch {border-top-left-radius:0.15rem;}.text.svelte-1syzkch {white-space:pre-wrap;word-break:break-word;margin:0;padding:0;}.markdown.svelte-1syzkch {width:100%;}.meta-row.svelte-1syzkch {display:flex;width:100%;
    /* Reserve space for the timestamp so revealing it doesn't shift layout */min-height:10px; /* reserve approx line-height of timestamp */align-items:center;opacity:0;
    /* keep it in flow (visibility on/off only affects hit-testing), don't change height */visibility:visible;transition:opacity 120ms ease;}.human-meta.svelte-1syzkch {justify-content:flex-end;}.ai-meta.svelte-1syzkch {justify-content:flex-start;}.timestamp.svelte-1syzkch {font-size:0.625rem;line-height:1;color:#6b7280;}

  /* Reveal timestamp (meta row) on hover/focus within the message body without affecting layout */.message-body.svelte-1syzkch:hover .meta-row:where(.svelte-1syzkch),
  .message-body.svelte-1syzkch:focus-within .meta-row:where(.svelte-1syzkch) {opacity:1;}

  /* keep a small gap between bubble and meta-row while preserving reserved space */.meta-row.svelte-1syzkch {margin-top:2px;}

  @keyframes svelte-1syzkch-bounce {
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
    /* 0.875em of parent (~15px) ≈ 13px */font-size:13px;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-1syzkch {
    animation: svelte-1syzkch-pulse 2s infinite ease-in-out;}
  @keyframes svelte-1syzkch-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-1syzkch {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.sources-block.svelte-1syzkch {border-top:1px solid #e5e7eb;margin-top:8px;padding-top:6px;}.sources-title.svelte-1syzkch {font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#374151;margin-bottom:4px;}.sources-list.svelte-1syzkch {list-style:disc;padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:2px;}.source-item.svelte-1syzkch a:where(.svelte-1syzkch) {font-size:11px;color:#2563eb;text-decoration:none;word-break:break-all;}.source-item.svelte-1syzkch a:where(.svelte-1syzkch):hover {text-decoration:underline;}.dots-container.svelte-1syzkch {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-1syzkch {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-1syzkch-bounce 1.4s infinite ease-in-out both;}.dot.svelte-1syzkch:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-1syzkch:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-1syzkch {
    animation: svelte-1syzkch-typing 0.5s ease-in-out;}
  @keyframes svelte-1syzkch-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
};
function Vh(e, t) {
  xu(t, !0), Mn(e, Gh);
  const u = t.message.content, n = t.message.role, r = t.message.timestamp, i = !!t.message.isStreaming, o = i && u.length > 0, s = t.message.sources, a = { Bot: Rr, BotMessageSquare: Us, Sparkle: $s, Sparkles: Hs }, c = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), l = !c && t.botIcon && a[t.botIcon] ? a[t.botIcon] : Rr, f = (j) => j.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), h = n === "ai" ? Ih(u) : u;
  function p(j) {
    var ae, K;
    const G = j.target, se = (ae = G == null ? void 0 : G.closest) == null ? void 0 : ae.call(G, ".copy-code");
    if (!se) return;
    const X = se.getAttribute("data-code") || "", B = se.querySelector(".copy-label"), V = B ? B.textContent : "";
    (K = navigator == null ? void 0 : navigator.clipboard) != null && K.writeText && navigator.clipboard.writeText(X).then(() => {
      B && (B.textContent = "Copied"), setTimeout(
        () => {
          B && (B.textContent = V || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      B && (B.textContent = "Failed"), setTimeout(
        () => {
          B && (B.textContent = V || "Copy Code");
        },
        1500
      );
    });
  }
  let d = /* @__PURE__ */ Te(null);
  Yt(() => {
    const j = R(d);
    if (!j) return;
    const G = (se) => p(se);
    return j.addEventListener("click", G), () => {
      j.removeEventListener("click", G);
    };
  });
  var m = Wh();
  wt(m, 1, `message-container ${n === "human" ? "human-message" : "ai-message"}`, "svelte-1syzkch");
  var g = J(m);
  wt(g, 1, `message-content ${n === "human" ? "human-content" : "ai-content"}`, "svelte-1syzkch");
  var w = J(g);
  {
    var v = (j) => {
      var G = Lh();
      wt(G, 1, `avatar ${c ? "icon-url" : ""}`, "svelte-1syzkch");
      var se = J(G);
      {
        var X = (V) => {
          var ae = zh();
          _e(() => tt(ae, "src", t.botIcon)), W(V, ae);
        }, B = (V, ae) => {
          {
            var K = (we) => {
              l(we, { size: 20, strokeWidth: 2, color: "white" });
            };
            Fe(
              V,
              (we) => {
                l && we(K);
              },
              ae
            );
          }
        };
        Fe(se, (V) => {
          c ? V(X) : V(B, !1);
        });
      }
      _e(() => {
        var V;
        return it(G, `background-color: ${(V = c ? "transparent" : t.colorHex) != null ? V : ""}`);
      }), W(j, G);
    };
    Fe(w, (j) => {
      n === "ai" && t.botIcon && j(v);
    });
  }
  var _ = ye(w, 2);
  wt(_, 1, `message-body ${n != null ? n : ""}-body`, "svelte-1syzkch");
  var x = J(_);
  wt(x, 1, `bubble ${n != null ? n : ""}-bubble ${i ? "streaming" : ""}`, "svelte-1syzkch");
  var E = J(x);
  {
    var A = (j) => {
      var G = Bh();
      G.textContent = u, W(j, G);
    }, D = (j, G) => {
      {
        var se = (B) => {
          var V = Ph();
          W(B, V);
        }, X = (B) => {
          var V = Hh(), ae = ke(V);
          wt(ae, 1, `message-markdown markdown ${i ? "typing-animation" : ""}`, "svelte-1syzkch");
          var K = J(ae);
          _l(K, () => h), ln(ae, (Be) => te(d, Be), () => R(d));
          var we = ye(ae, 2);
          {
            var nt = (Be) => {
              var ft = $h(), I = ye(J(ft), 2);
              yn(I, 21, () => s, Jr, (ue, de) => {
                var Ve = Uh(), Et = J(Ve);
                {
                  var Tt = (Pe) => {
                    var Ft = qh(), Au = J(Ft);
                    _e(() => {
                      tt(Ft, "href", R(de).source), cu(Au, R(de).title || R(de).source);
                    }), W(Pe, Ft);
                  }, Xu = (Pe) => {
                    var Ft = jh(), Au = J(Ft);
                    _e(() => cu(Au, R(de).title || "Untitled")), W(Pe, Ft);
                  };
                  Fe(Et, (Pe) => {
                    R(de).source ? Pe(Tt) : Pe(Xu, !1);
                  });
                }
                _e(() => tt(Ve, "title", R(de).source || "")), W(ue, Ve);
              }), W(Be, ft);
            };
            Fe(we, (Be) => {
              t.showSources && s && s.length > 0 && Be(nt);
            });
          }
          W(B, V);
        };
        Fe(
          j,
          (B) => {
            i && !o ? B(se) : B(X, !1);
          },
          G
        );
      }
    };
    Fe(E, (j) => {
      n === "human" ? j(A) : j(D, !1);
    });
  }
  var F = ye(x, 2);
  wt(F, 1, `meta-row ${n != null ? n : ""}-meta`, "svelte-1syzkch");
  var L = J(F), Y = J(L);
  _e(
    (j) => {
      var G;
      it(x, `--message-color: ${(G = n === "human" ? t.lighterColorHex : "white") != null ? G : ""}; --text-color: ${n === "human" ? "white" : "#1f2937"}`), cu(Y, j);
    },
    [() => f(r)]
  ), W(e, m), vu();
}
var Zh = /* @__PURE__ */ fe('<div class="loading-more svelte-559mhq"><div class="loading-spinner svelte-559mhq"></div> <span>Loading previous messages...</span></div>'), Kh = (e, t, u) => t(R(u)), Jh = /* @__PURE__ */ fe('<button type="button" class="quick-question svelte-559mhq"> </button>'), Yh = /* @__PURE__ */ fe('<div class="quick-questions svelte-559mhq"><!> <div class="ai-disclaimer svelte-559mhq">Responses are generated using AI and may contain mistakes.</div></div>'), Xh = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, Qh = /* @__PURE__ */ fe('<div class="branding svelte-559mhq">Powered by <a target="_blank" rel="noopener noreferrer" class="branding-link svelte-559mhq"></a></div>'), ep = /* @__PURE__ */ fe('<div class="chat-container svelte-559mhq"><div class="messages-container svelte-559mhq"><!> <!> <div class="bottom-anchor"></div></div> <!> <form class="input-container svelte-559mhq"><textarea placeholder="What do you want to know?" class="message-input svelte-559mhq" rows="1"></textarea> <button type="submit" class="send-button svelte-559mhq" aria-label="Send message" title="Send"><!></button></form> <!></div>');
const tp = {
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
function up(e, t) {
  xu(t, !0), Mn(e, tp);
  const [u, n] = Fl(), r = () => Tl(et, "$chatStore", u), i = "fluentBot", o = "https://beta.fluentbot.ai";
  let s = /* @__PURE__ */ Te(""), a, c, l = /* @__PURE__ */ Te(!1), f = /* @__PURE__ */ Te(!0), h = /* @__PURE__ */ Te(!1), p, d = /* @__PURE__ */ It(() => r().messages), m = /* @__PURE__ */ It(() => r().isLoading), g = /* @__PURE__ */ It(() => r().hasMore), w = /* @__PURE__ */ It(() => r().conversation_id);
  const v = /* @__PURE__ */ It(() => R(d).some((I) => I.role === "human")), _ = () => {
    if (!a) return !0;
    const I = 80, { scrollTop: ue, scrollHeight: de, clientHeight: Ve } = a;
    return de - (ue + Ve) <= I;
  }, x = (I = !1) => {
    if (!a) return;
    if (p) {
      p.scrollIntoView({
        behavior: I ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const ue = a.scrollHeight;
    I ? a.scrollTo({ top: ue, behavior: "smooth" }) : a.scrollTop = ue;
  }, E = () => Ce(null, null, function* () {
    if (!a || (R(h) && te(f, _(), !0), R(l) || !R(g))) return;
    const { scrollTop: I } = a;
    if (I === 0 && R(w)) {
      te(l, !0);
      const ue = a.scrollHeight, de = a.scrollTop;
      yield js(R(w), 20, r().nextCursor), yield Ni();
      const Et = a.scrollHeight - ue;
      Et > 0 && (a.scrollTop = de + Et), te(l, !1);
    }
  });
  bs(() => {
    requestAnimationFrame(() => x(!1));
    const I = new ResizeObserver(() => {
      R(f) && x(!1);
    });
    return a && I.observe(a), () => {
      I.disconnect();
    };
  });
  const A = () => {
    if (c) {
      c.style.height = "auto";
      const ue = Math.min(c.scrollHeight, 120);
      c.style.height = `${ue}px`;
    }
  };
  Yt(() => {
    A();
  }), Yt(() => {
    const I = R(d).length;
    if (!R(h) && I > 0) {
      Ni().then(() => {
        requestAnimationFrame(() => {
          x(!1), te(f, !0), te(h, !0);
        });
      });
      return;
    }
    R(f) && requestAnimationFrame(() => x(!1));
  });
  const D = () => Ce(null, null, function* () {
    if (!R(s).trim()) return;
    const I = R(s);
    te(s, ""), A(), te(f, !0), yield _f(I, t.settings);
  }), F = (I) => {
    I && (te(s, I, !0), D());
  };
  var L = ep(), Y = J(L), j = J(Y);
  {
    var G = (I) => {
      var ue = Zh();
      W(I, ue);
    };
    Fe(j, (I) => {
      R(l) && I(G);
    });
  }
  var se = ye(j, 2);
  yn(se, 19, () => R(d), (I, ue) => I.timestamp + "-" + ue, (I, ue) => {
    Vh(I, {
      get message() {
        return R(ue);
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
      get showSources() {
        return t.settings.show_sources;
      }
    });
  });
  var X = ye(se, 2);
  ln(X, (I) => p = I, () => p), ln(Y, (I) => a = I, () => a);
  var B = ye(Y, 2);
  {
    var V = (I) => {
      var ue = Yh(), de = J(ue);
      yn(de, 17, () => t.settings.quick_questions.slice(0, 3), Jr, (Ve, Et) => {
        var Tt = Jh();
        Tt.__click = [Kh, F, Et];
        var Xu = J(Tt);
        _e(() => {
          var Pe;
          it(Tt, `--theme-color: ${(Pe = t.settings.color_hex) != null ? Pe : ""}`), cu(Xu, R(Et));
        }), W(Ve, Tt);
      }), W(I, ue);
    };
    Fe(B, (I) => {
      !R(v) && t.settings.quick_questions && t.settings.quick_questions.length && I(V);
    });
  }
  var ae = ye(B, 2), K = J(ae);
  K.__input = A, K.__keydown = [Xh, D], ln(K, (I) => c = I, () => c);
  var we = ye(K, 2), nt = J(we);
  Df(nt, { size: 18, strokeWidth: 2 });
  var Be = ye(ae, 2);
  {
    var ft = (I) => {
      var ue = Qh(), de = ye(J(ue));
      tt(de, "href", o), de.textContent = i, _e(() => {
        var Ve;
        return it(de, `color: ${(Ve = t.settings.color_hex) != null ? Ve : ""}`);
      }), W(I, ue);
    };
    Fe(Be, (I) => {
      t.settings.show_branding && I(ft);
    });
  }
  _e(
    (I) => {
      var ue, de;
      it(ae, `--theme-color: ${(ue = t.settings.color_hex) != null ? ue : ""}; --hover-color: ${(de = t.settings.lighter_color_hex) != null ? de : ""}`), K.disabled = R(m), we.disabled = I;
    },
    [
      () => R(m) || !R(s).trim()
    ]
  ), Ii("scroll", Y, E), Ii("submit", ae, (I) => {
    I.preventDefault(), D();
  }), Cl(K, () => R(s), (I) => te(s, I)), W(e, L), vu(), n();
}
Nn(["click", "input", "keydown"]);
class np {
  constructor(t) {
    Xe(this, "settings");
    this.settings = t;
  }
  initialize() {
    return Ce(this, null, function* () {
      yield this.initializeChat();
    });
  }
  initializeChat() {
    return Ce(this, null, function* () {
      const t = "currentChatId", u = "conversation_id";
      let n = localStorage.getItem(u);
      if (!n) {
        const r = localStorage.getItem(t);
        r && (n = r, localStorage.setItem(u, r));
      }
      n ? yield js(n, 20, null) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && et.update((t) => Se(be({}, t), {
      messages: [
        {
          role: "ai",
          content: this.settings.first_message,
          timestamp: /* @__PURE__ */ new Date()
        }
      ]
    }));
  }
  resetChat() {
    et.update((t) => Se(be({}, t), {
      messages: []
    })), localStorage.removeItem("conversation_id"), this.settings.first_message && this.addInitialMessage();
  }
}
const rp = (e, t) => {
  t.resetChat();
}, ip = (e, t) => {
  if (R(t)) {
    const u = new CustomEvent("minimize-widget");
    document.dispatchEvent(u), te(t, !1);
  } else {
    const u = new CustomEvent("maximize-widget");
    document.dispatchEvent(u), te(t, !0);
  }
};
var op = /* @__PURE__ */ fe('<img class="logo" loading="lazy" decoding="async">'), sp = () => document.dispatchEvent(new CustomEvent("close-widget")), ap = /* @__PURE__ */ fe('<main class="svelte-1j68u5g"><header class="main-header svelte-1j68u5g"><div class="brand svelte-1j68u5g"><!> <div class="title svelte-1j68u5g"> </div></div> <div class="button-group svelte-1j68u5g"><button class="icon-button close-mobile svelte-1j68u5g" aria-label="Close chat"><!></button> <button class="icon-button svelte-1j68u5g"><!></button> <button class="icon-button reset-mobile svelte-1j68u5g" aria-label="Reset chat"><!></button></div></header> <div class="content svelte-1j68u5g"><!></div></main>');
const cp = {
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
function lp(e, t) {
  xu(t, !0), Mn(e, cp);
  const u = new np(t.settings);
  let n = /* @__PURE__ */ Te(!1);
  bs(() => Ce(null, null, function* () {
    yield u.initialize();
  }));
  var r = ap(), i = J(r), o = J(i), s = J(o);
  {
    var a = (A) => {
      var D = op();
      _e(() => {
        tt(D, "src", t.settings.header_logo), tt(D, "alt", t.settings.title_text ? t.settings.title_text + " logo" : "Logo");
      }), W(A, D);
    };
    Fe(s, (A) => {
      t.settings.header_logo && A(a);
    });
  }
  var c = ye(s, 2), l = J(c), f = ye(o, 2), h = J(f);
  h.__click = [sp];
  var p = J(h);
  Ws(p, { size: 16 });
  var d = ye(h, 2);
  d.__click = [ip, n];
  var m = J(d);
  {
    var g = (A) => {
      Cf(A, { size: 16 });
    }, w = (A) => {
      yf(A, { size: 16 });
    };
    Fe(m, (A) => {
      R(n) ? A(g) : A(w, !1);
    });
  }
  var v = ye(d, 2);
  v.__click = [rp, u];
  var _ = J(v);
  Sf(_, { size: 16 });
  var x = ye(i, 2), E = J(x);
  up(E, {
    get settings() {
      return t.settings;
    }
  }), _e(() => {
    var A;
    it(i, `background-color: ${(A = t.settings.color_hex) != null ? A : ""};`), tt(c, "title", t.settings.title_text), cu(l, t.settings.title_text), tt(d, "aria-label", R(n) ? "Collapse chat" : "Expand chat");
  }), W(e, r), vu();
}
Nn(["click"]);
const fp = "html,body{height:100%;margin:0;overflow:hidden}", dp = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var hp = (e, t, u) => {
  var n;
  (n = u.onToggle) == null || n.call(u);
}, pp = /* @__PURE__ */ fe('<div class="close-icon svelte-7lnkn6"><!></div>'), bp = /* @__PURE__ */ fe('<img alt="Chat Icon" class="icon-image svelte-7lnkn6">'), gp = /* @__PURE__ */ fe('<span class="button-text svelte-7lnkn6"> </span>'), mp = /* @__PURE__ */ fe('<div class="chat-icon svelte-7lnkn6"><!></div> <!>', 1), _p = /* @__PURE__ */ fe('<button id="chat-button"><!></button>');
const xp = {
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
  xu(t, !0), Mn(e, xp);
  const u = /* @__PURE__ */ Nl(t, ["$$slots", "$$events", "$$legacy"]), n = {
    MessageSquare: no,
    MessageSquareMore: wf,
    MessageCircle: kf,
    MessageCircleMore: Ef,
    MessagesSquare: Af,
    Bot: Rr,
    BotMessageSquare: Us,
    Sparkle: $s,
    Sparkles: Hs
  }, r = /* @__PURE__ */ It(() => !!t.buttonIcon && t.buttonIcon.startsWith("https://")), i = /* @__PURE__ */ It(() => R(r) ? null : n[t.buttonIcon || "MessageSquare"] || no);
  let o = /* @__PURE__ */ Te(24), s = /* @__PURE__ */ Te(1);
  function a() {
    try {
      const d = typeof window != "undefined" ? window.innerWidth : 9999;
      d <= 480 ? te(o, 18) : d <= 1024 ? te(o, 20) : te(o, 24), te(s, R(o) / 24);
    } catch (d) {
      te(o, 24);
    }
  }
  a(), typeof window != "undefined" && (window.addEventListener("resize", a), Yt(() => () => window.removeEventListener("resize", a)));
  var c = _p();
  c.__click = [hp, u, t];
  let l;
  var f = J(c);
  {
    var h = (d) => {
      var m = pp(), g = J(m);
      const w = /* @__PURE__ */ It(() => R(o) + 4);
      Ws(g, {
        get size() {
          return R(w);
        },
        strokeWidth: 2
      }), _e(() => {
        var v;
        return it(m, `--icon-scale: ${(v = R(s)) != null ? v : ""}; transform: scale(var(--icon-scale));`);
      }), W(d, m);
    }, p = (d) => {
      var m = mp(), g = ke(m), w = J(g);
      {
        var v = (A) => {
          var D = bp();
          _e(() => {
            var F, L;
            tt(D, "src", t.buttonIcon), it(D, `width: ${(F = R(o)) != null ? F : ""}px; height: ${(L = R(o)) != null ? L : ""}px;`);
          }), W(A, D);
        }, _ = (A, D) => {
          {
            var F = (L) => {
              var Y = Me(), j = ke(Y);
              xl(j, () => R(i), (G, se) => {
                se(G, {
                  get size() {
                    return R(o);
                  },
                  strokeWidth: 2
                });
              }), W(L, Y);
            };
            Fe(
              A,
              (L) => {
                R(i) && L(F);
              },
              D
            );
          }
        };
        Fe(w, (A) => {
          R(r) ? A(v) : A(_, !1);
        });
      }
      var x = ye(g, 2);
      {
        var E = (A) => {
          var D = gp(), F = J(D);
          _e(() => cu(F, t.buttonText)), W(A, D);
        };
        Fe(x, (A) => {
          t.showButtonText && !t.isOpen && A(E);
        });
      }
      _e(() => {
        var A;
        return it(g, `--icon-scale: ${(A = R(s)) != null ? A : ""}; transform: scale(var(--icon-scale));`);
      }), W(d, m);
    };
    Fe(f, (d) => {
      t.isOpen ? d(h) : d(p, !1);
    });
  }
  _e(
    (d) => {
      var m;
      tt(c, "aria-label", t.isOpen ? "Close chat" : "Open chat"), it(c, `background-color: ${(m = t.colorHex) != null ? m : ""};`), l = wt(c, 1, "svelte-7lnkn6", null, l, d);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText && !t.isOpen,
        "with-icon-url": R(r)
      })
    ]
  ), W(e, c), vu();
}
Nn(["click"]);
class vp {
  constructor(t) {
    Xe(this, "container", null);
    Xe(this, "buttonContainer", null);
    Xe(this, "isOpen", !1);
    Xe(this, "isMaximized", !1);
    Xe(this, "clickHandler");
    Xe(this, "maximizeHandler");
    Xe(this, "minimizeHandler");
    Xe(this, "closeHandler");
    Xe(this, "settings", null);
    Xe(this, "chatButtonInstance", null);
    this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.initialize(t);
  }
  fetchSettings(t) {
    return Ce(this, null, function* () {
      try {
        return (yield bf.get(`/api/bots/${t}/widget-settings`)).data.data;
      } catch (u) {
        return console.error("Error fetching widget settings:", u), null;
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
    var t, u, n, r, i;
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
              showButtonText: (u = this.settings) == null ? void 0 : u.show_button_text,
              buttonText: (n = this.settings) == null ? void 0 : n.button_text,
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

            ${dp}
            ${fp}
        `, t;
  }
  initialize(t) {
    return Ce(this, null, function* () {
      if (this.settings = yield this.fetchSettings(t), !this.settings) {
        console.warn("No widget settings found, widget will not be initialized");
        return;
      }
      const u = document.createElement("div");
      u.id = "fluent-bot-chat-widget-container", u.classList.add(`align-${this.settings.button_alignment}`);
      const n = u.attachShadow({ mode: "open" }), r = document.createElement("div");
      r.id = "fluent-bot-chat-widget";
      const i = document.createElement("div");
      i.id = "chat-button-container", n.appendChild(this.createStyles()), n.appendChild(r), n.appendChild(i), document.body.appendChild(u), this.container = r, this.buttonContainer = i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), nr(lp, {
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
const yp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), jp = (e) => {
  yp() || new vp(e);
};
export {
  vp as FluentBotChatWidget,
  jp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
