var fc = Object.defineProperty, dc = Object.defineProperties;
var hc = Object.getOwnPropertyDescriptors;
var bi = Object.getOwnPropertySymbols;
var pc = Object.prototype.hasOwnProperty, bc = Object.prototype.propertyIsEnumerable;
var Kt = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), gc = (e) => {
  throw TypeError(e);
};
var Gn = (e, t, u) => t in e ? fc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, le = (e, t) => {
  for (var u in t || (t = {}))
    pc.call(t, u) && Gn(e, u, t[u]);
  if (bi)
    for (var u of bi(t))
      bc.call(t, u) && Gn(e, u, t[u]);
  return e;
}, Ae = (e, t) => dc(e, hc(t));
var kt = (e, t, u) => Gn(e, typeof t != "symbol" ? t + "" : t, u);
var me = (e, t, u) => new Promise((n, r) => {
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
}), Pt = function(e, t) {
  this[0] = e, this[1] = t;
}, Zn = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof Pt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[Kt("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, Wn = (e) => {
  var t = e[Kt("asyncIterator")], u = !1, n, r = {};
  return t == null ? (t = e[Kt("iterator")](), n = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), n = (i) => r[i] = (o) => {
    if (u) {
      if (u = !1, i === "throw") throw o;
      return o;
    }
    return u = !0, {
      done: !1,
      value: new Pt(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || gc("Object expected"), s(a);
      }), 1)
    };
  }), r[Kt("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, gi = (e, t, u) => (t = e[Kt("asyncIterator")]) ? t.call(e) : (e = e[Kt("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var Cr = Array.isArray, mc = Array.prototype.indexOf, Sr = Array.from, xo = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, Eo = Object.getOwnPropertyDescriptors, _c = Object.prototype, xc = Array.prototype, Dr = Object.getPrototypeOf, mi = Object.isExtensible;
function pu(e) {
  return typeof e == "function";
}
const Nt = () => {
};
function Ec(e) {
  return e();
}
function tn(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Ze = 2, yo = 4, _n = 8, Tr = 16, Et = 32, iu = 64, un = 128, Ie = 256, nn = 512, Te = 1024, _t = 2048, Zt = 4096, mt = 8192, xn = 16384, yc = 32768, Du = 65536, vc = 1 << 17, kc = 1 << 19, vo = 1 << 20, fr = 1 << 21, Ot = Symbol("$state"), ko = Symbol("legacy props"), wc = Symbol("");
function wo(e) {
  return e === this.v;
}
function Ao(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Rr(e) {
  return !Ao(e, this.v);
}
function Ac(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Sc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Dc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Tc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Rc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Nc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Oc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ou = !1;
function Fc() {
  ou = !0;
}
const Nr = 1, Or = 2, Co = 4, Ic = 8, Mc = 16, Lc = 1, Bc = 2, So = 4, Pc = 8, zc = 16, Uc = 2, Ce = Symbol(), $c = "http://www.w3.org/1999/xhtml", qc = "http://www.w3.org/2000/svg";
function Hc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ue = null;
function _i(e) {
  ue = e;
}
function su(e, t = !1, u) {
  var n = ue = {
    p: ue,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  ou && !t && (ue.l = {
    s: null,
    u: null,
    r1: [],
    r2: tu(!1)
  }), Mr(() => {
    n.d = !0;
  });
}
function au(e) {
  const t = ue;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = V, n = K;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          Ft(i.effect), at(i.reaction), Lr(i.fn);
        }
      } finally {
        Ft(u), at(n);
      }
    }
    ue = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Tu() {
  return !ou || ue !== null && ue.l === null;
}
function zt(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = Dr(e);
  if (t !== _c && t !== xc)
    return e;
  var u = /* @__PURE__ */ new Map(), n = Cr(e), r = /* @__PURE__ */ tt(0), i = K, o = (s) => {
    var a = K;
    at(i);
    var c = s();
    return at(a), c;
  };
  return n && u.set("length", /* @__PURE__ */ tt(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Rc();
        var l = u.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ tt(c.value)), u.set(a, l)) : ke(
          l,
          o(() => zt(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = u.get(a);
        if (c === void 0)
          a in s && (u.set(
            a,
            o(() => /* @__PURE__ */ tt(Ce))
          ), Vn(r));
        else {
          if (n && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              u.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && ke(l, f);
          }
          ke(c, Ce), Vn(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === Ot)
          return e;
        var l = u.get(a), f = a in s;
        if (l === void 0 && (!f || (p = Rt(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ tt(zt(f ? s[a] : Ce))), u.set(a, l)), l !== void 0) {
          var h = z(l);
          return h === Ce ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = u.get(a);
          l && (c.value = z(l));
        } else if (c === void 0) {
          var f = u.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Ce)
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
        if (a === Ot)
          return !0;
        var c = u.get(a), l = c !== void 0 && c.v !== Ce || Reflect.has(s, a);
        if (c !== void 0 || V !== null && (!l || (h = Rt(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ tt(l ? zt(s[a]) : Ce)), u.set(a, c));
          var f = z(c);
          if (f === Ce)
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
            d !== void 0 ? ke(d, Ce) : p in s && (d = o(() => /* @__PURE__ */ tt(Ce)), u.set(p + "", d));
          }
        f === void 0 ? (!h || (v = Rt(s, a)) != null && v.writable) && (f = o(() => /* @__PURE__ */ tt(void 0)), ke(
          f,
          o(() => zt(c))
        ), u.set(a, f)) : (h = f.v !== Ce, ke(
          f,
          o(() => zt(c))
        ));
        var g = Reflect.getOwnPropertyDescriptor(s, a);
        if (g != null && g.set && g.set.call(l, c), !h) {
          if (n && typeof a == "string") {
            var m = (
              /** @type {Source<number>} */
              u.get("length")
            ), w = Number(a);
            Number.isInteger(w) && w >= m.v && ke(m, w + 1);
          }
          Vn(r);
        }
        return !0;
      },
      ownKeys(s) {
        z(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = u.get(f);
          return h === void 0 || h.v !== Ce;
        });
        for (var [c, l] of u)
          l.v !== Ce && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Nc();
      }
    }
  );
}
function Vn(e, t = 1) {
  ke(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  var t = Ze | _t, u = K !== null && (K.f & Ze) !== 0 ? (
    /** @type {Derived} */
    K
  ) : null;
  return V === null || u !== null && (u.f & Ie) !== 0 ? t |= Ie : V.f |= vo, {
    ctx: ue,
    deps: null,
    effects: null,
    equals: wo,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: u != null ? u : V
  };
}
// @__NO_SIDE_EFFECTS__
function et(e) {
  const t = /* @__PURE__ */ eu(e);
  return qo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Fr(e) {
  const t = /* @__PURE__ */ eu(e);
  return t.equals = Rr, t;
}
function Do(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      xt(
        /** @type {Effect} */
        t[u]
      );
  }
}
function jc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Ze) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function To(e) {
  var t, u = V;
  Ft(jc(e));
  try {
    Do(e), t = Zo(e);
  } finally {
    Ft(u);
  }
  return t;
}
function Ro(e) {
  var t = To(e), u = (Dt || (e.f & Ie) !== 0) && e.deps !== null ? Zt : Te;
  We(e, u), e.equals(t) || (e.v = t, e.wv = jo());
}
const xu = /* @__PURE__ */ new Map();
function tu(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: wo,
    rv: 0,
    wv: 0
  };
  return u;
}
// @__NO_SIDE_EFFECTS__
function tt(e, t) {
  const u = tu(e);
  return qo(u), u;
}
// @__NO_SIDE_EFFECTS__
function Ir(e, t = !1) {
  var n, r;
  const u = tu(e);
  return t || (u.equals = Rr), ou && ue !== null && ue.l !== null && ((r = (n = ue.l).s) != null ? r : n.s = []).push(u), u;
}
function ke(e, t, u = !1) {
  K !== null && !nt && Tu() && (K.f & (Ze | Tr)) !== 0 && !(we != null && we.includes(e)) && Oc();
  let n = u ? zt(t) : t;
  return dr(e, n);
}
function dr(e, t) {
  if (!e.equals(t)) {
    var u = e.v;
    Ou ? xu.set(e, t) : xu.set(e, u), e.v = t, (e.f & Ze) !== 0 && ((e.f & _t) !== 0 && To(
      /** @type {Derived} */
      e
    ), We(e, (e.f & Ie) === 0 ? Te : Zt)), e.wv = jo(), No(e, _t), Tu() && V !== null && (V.f & Te) !== 0 && (V.f & (Et | iu)) === 0 && (Be === null ? Qc([e]) : Be.push(e));
  }
  return t;
}
function xi(e, t = 1) {
  var u = z(e), n = t === 1 ? u++ : u--;
  return ke(e, u), n;
}
function No(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Tu(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & _t) === 0 && (!n && o === V || (We(o, t), (s & (Te | Ie)) !== 0 && ((s & Ze) !== 0 ? No(
        /** @type {Derived} */
        o,
        Zt
      ) : kn(
        /** @type {Effect} */
        o
      ))));
    }
}
let Gc = !1;
var Ei, Oo, Fo, Io;
function Zc() {
  if (Ei === void 0) {
    Ei = window, Oo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, u = Text.prototype;
    Fo = Rt(t, "firstChild").get, Io = Rt(t, "nextSibling").get, mi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), mi(u) && (u.__t = void 0);
  }
}
function En(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return Fo.call(e);
}
// @__NO_SIDE_EFFECTS__
function yn(e) {
  return Io.call(e);
}
function te(e, t) {
  return /* @__PURE__ */ gt(e);
}
function $e(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ yn(u) : u;
  }
}
function st(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ yn(n);
  return n;
}
function Wc(e) {
  e.textContent = "";
}
function Mo(e) {
  V === null && K === null && Sc(), K !== null && (K.f & Ie) !== 0 && V === null && Cc(), Ou && Ac();
}
function Vc(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function cu(e, t, u, n = !0) {
  var a;
  var r = V, i = {
    ctx: ue,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | _t,
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
      zr(i), i.f |= yc;
    } catch (c) {
      throw xt(i), c;
    }
  else t !== null && kn(i);
  var o = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (vo | un)) === 0;
  if (!o && n && (r !== null && Vc(i, r), K !== null && (K.f & Ze) !== 0)) {
    var s = (
      /** @type {Derived} */
      K
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function Mr(e) {
  const t = cu(_n, null, !1);
  return We(t, Te), t.teardown = e, t;
}
function rn(e) {
  var r;
  Mo();
  var t = V !== null && (V.f & Et) !== 0 && ue !== null && !ue.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      ue
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: V,
      reaction: K
    });
  } else {
    var n = Lr(e);
    return n;
  }
}
function Kc(e) {
  return Mo(), Br(e);
}
function Jc(e) {
  const t = cu(iu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? uu(t, () => {
      xt(t), n(void 0);
    }) : (xt(t), n(void 0));
  });
}
function Lr(e) {
  return cu(yo, e, !1);
}
function Br(e) {
  return cu(_n, e, !0);
}
function Fe(e, t = [], u = eu) {
  const n = t.map(u);
  return Ru(() => e(...n.map(z)));
}
function Ru(e, t = 0) {
  return cu(_n | Tr | t, e, !0);
}
function Ht(e, t = !0) {
  return cu(_n | Et, e, !0, t);
}
function Lo(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Ou, n = K;
    yi(!0), at(null);
    try {
      t.call(null);
    } finally {
      yi(u), at(n);
    }
  }
}
function Bo(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    (u.f & iu) !== 0 ? u.parent = null : xt(u, t), u = n;
  }
}
function Yc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & Et) === 0 && xt(t), t = u;
  }
}
function xt(e, t = !0) {
  var u = !1;
  (t || (e.f & kc) !== 0) && e.nodes_start !== null && (Po(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), u = !0), Bo(e, t && !u), cn(e, 0), We(e, xn);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Lo(e);
  var r = e.parent;
  r !== null && r.first !== null && zo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Po(e, t) {
  for (; e !== null; ) {
    var u = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ yn(e)
    );
    e.remove(), e = u;
  }
}
function zo(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function uu(e, t) {
  var u = [];
  Pr(e, u, !0), Uo(u, () => {
    xt(e), t && t();
  });
}
function Uo(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Pr(e, t, u) {
  if ((e.f & mt) === 0) {
    if (e.f ^= mt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Du) !== 0 || (n.f & Et) !== 0;
      Pr(n, t, i ? u : !1), n = r;
    }
  }
}
function Eu(e) {
  $o(e, !0);
}
function $o(e, t) {
  if ((e.f & mt) !== 0) {
    e.f ^= mt, (e.f & Te) === 0 && (e.f ^= Te), Fu(e) && (We(e, _t), kn(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & Du) !== 0 || (u.f & Et) !== 0;
      $o(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let on = [];
function Xc() {
  var e = on;
  on = [], tn(e);
}
function Nu(e) {
  on.length === 0 && queueMicrotask(Xc), on.push(e);
}
let Ju = !1, hr = !1, sn = null, $t = !1, Ou = !1;
function yi(e) {
  Ou = e;
}
let Yu = [];
let K = null, nt = !1;
function at(e) {
  K = e;
}
let V = null;
function Ft(e) {
  V = e;
}
let we = null;
function qo(e) {
  K !== null && K.f & fr && (we === null ? we = [e] : we.push(e));
}
let ve = null, Oe = 0, Be = null;
function Qc(e) {
  Be = e;
}
let Ho = 1, an = 0, Dt = !1;
function jo() {
  return ++Ho;
}
function Fu(e) {
  var f, h;
  var t = e.f;
  if ((t & _t) !== 0)
    return !0;
  if ((t & Zt) !== 0) {
    var u = e.deps, n = (t & Ie) !== 0;
    if (u !== null) {
      var r, i, o = (t & nn) !== 0, s = n && V !== null && !Dt, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= nn), s && l !== null && (l.f & Ie) === 0 && (c.f ^= Ie);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Fu(
          /** @type {Derived} */
          i
        ) && Ro(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || V !== null && !Dt) && We(e, Te);
  }
  return !1;
}
function e0(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & un) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= un;
      }
    u = u.parent;
  }
  throw Ju = !1, e;
}
function vi(e) {
  return (e.f & xn) === 0 && (e.parent === null || (e.parent.f & un) === 0);
}
function vn(e, t, u, n) {
  if (Ju) {
    if (u === null && (Ju = !1), vi(t))
      throw e;
    return;
  }
  if (u !== null && (Ju = !0), e0(e, t), vi(t))
    throw e;
}
function Go(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      we != null && we.includes(e) || ((i.f & Ze) !== 0 ? Go(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? We(i, _t) : (i.f & Te) !== 0 && We(i, Zt), kn(
        /** @type {Effect} */
        i
      )));
    }
}
function Zo(e) {
  var p, d;
  var t = ve, u = Oe, n = Be, r = K, i = Dt, o = we, s = ue, a = nt, c = e.f;
  ve = /** @type {null | Value[]} */
  null, Oe = 0, Be = null, Dt = (c & Ie) !== 0 && (nt || !$t || K === null), K = (c & (Et | iu)) === 0 ? e : null, we = null, _i(e.ctx), nt = !1, an++, e.f |= fr;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (ve !== null) {
      var h;
      if (cn(e, Oe), f !== null && Oe > 0)
        for (f.length = Oe + ve.length, h = 0; h < ve.length; h++)
          f[Oe + h] = ve[h];
      else
        e.deps = f = ve;
      if (!Dt)
        for (h = Oe; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Oe < f.length && (cn(e, Oe), f.length = Oe);
    if (Tu() && Be !== null && !nt && f !== null && (e.f & (Ze | Zt | _t)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Be.length; h++)
        Go(
          Be[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (an++, Be !== null && (n === null ? n = Be : n.push(.../** @type {Source[]} */
    Be))), l;
  } finally {
    ve = t, Oe = u, Be = n, K = r, Dt = i, we = o, _i(s), nt = a, e.f ^= fr;
  }
}
function t0(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = mc.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & Ze) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ve === null || !ve.includes(t)) && (We(t, Zt), (t.f & (Ie | nn)) === 0 && (t.f ^= nn), Do(
    /** @type {Derived} **/
    t
  ), cn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function cn(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      t0(e, u[n]);
}
function zr(e) {
  var t = e.f;
  if ((t & xn) === 0) {
    We(e, Te);
    var u = V, n = ue, r = $t;
    V = e, $t = !0;
    try {
      (t & Tr) !== 0 ? Yc(e) : Bo(e), Lo(e);
      var i = Zo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Ho;
      var o = e.deps, s;
    } catch (a) {
      vn(a, e, u, n || e.ctx);
    } finally {
      $t = r, V = u;
    }
  }
}
function u0() {
  try {
    Dc();
  } catch (e) {
    if (sn !== null)
      vn(e, sn, null);
    else
      throw e;
  }
}
function n0() {
  var e = $t;
  try {
    var t = 0;
    for ($t = !0; Yu.length > 0; ) {
      t++ > 1e3 && u0();
      var u = Yu, n = u.length;
      Yu = [];
      for (var r = 0; r < n; r++) {
        var i = i0(u[r]);
        r0(i);
      }
      xu.clear();
    }
  } finally {
    hr = !1, $t = e, sn = null;
  }
}
function r0(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (xn | mt)) === 0)
        try {
          Fu(n) && (zr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? zo(n) : n.fn = null));
        } catch (r) {
          vn(r, n, null, n.ctx);
        }
    }
}
function kn(e) {
  hr || (hr = !0, queueMicrotask(n0));
  for (var t = sn = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (iu | Et)) !== 0) {
      if ((u & Te) === 0) return;
      t.f ^= Te;
    }
  }
  Yu.push(t);
}
function i0(e) {
  for (var t = [], u = e; u !== null; ) {
    var n = u.f, r = (n & (Et | iu)) !== 0, i = r && (n & Te) !== 0;
    if (!i && (n & mt) === 0) {
      if ((n & yo) !== 0)
        t.push(u);
      else if (r)
        u.f ^= Te;
      else
        try {
          Fu(u) && zr(u);
        } catch (a) {
          vn(a, u, null, u.ctx);
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
function z(e) {
  var t = e.f, u = (t & Ze) !== 0;
  if (K !== null && !nt) {
    if (!(we != null && we.includes(e))) {
      var n = K.deps;
      e.rv < an && (e.rv = an, ve === null && n !== null && n[Oe] === e ? Oe++ : ve === null ? ve = [e] : (!Dt || !ve.includes(e)) && ve.push(e));
    }
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Ie) === 0 && (r.f ^= Ie);
  }
  return u && (r = /** @type {Derived} */
  e, Fu(r) && Ro(r)), Ou && xu.has(e) ? xu.get(e) : e.v;
}
function jt(e) {
  var t = nt;
  try {
    return nt = !0, e();
  } finally {
    nt = t;
  }
}
const o0 = -7169;
function We(e, t) {
  e.f = e.f & o0 | t;
}
function s0(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ot in e)
      pr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && Ot in u && pr(u);
      }
  }
}
function pr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        pr(e[n], t);
      } catch (r) {
      }
    const u = Dr(e);
    if (u !== Object.prototype && u !== Array.prototype && u !== Map.prototype && u !== Set.prototype && u !== Date.prototype) {
      const n = Eo(u);
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
function a0(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const c0 = [
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
function l0(e) {
  return c0.includes(e);
}
const f0 = {
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
function d0(e) {
  var t;
  return e = e.toLowerCase(), (t = f0[e]) != null ? t : e;
}
const h0 = ["touchstart", "touchmove"];
function p0(e) {
  return h0.includes(e);
}
function b0(e, t) {
  if (t) {
    const u = document.body;
    e.autofocus = !0, Nu(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let ki = !1;
function g0() {
  ki || (ki = !0, document.addEventListener(
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
function Wo(e) {
  var t = K, u = V;
  at(null), Ft(null);
  try {
    return e();
  } finally {
    at(t), Ft(u);
  }
}
function m0(e, t, u, n = u) {
  e.addEventListener(t, () => Wo(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), g0();
}
const Vo = /* @__PURE__ */ new Set(), br = /* @__PURE__ */ new Set();
function Ko(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || _u.call(t, i), !i.cancelBubble)
      return Wo(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Nu(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function wi(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = Ko(e, t, u, i);
  (t === document.body || t === window || t === document) && Mr(() => {
    t.removeEventListener(e, o, i);
  });
}
function wn(e) {
  for (var t = 0; t < e.length; t++)
    Vo.add(e[t]);
  for (var u of br)
    u(e);
}
function _u(e) {
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
    xo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || u;
      }
    });
    var l = K, f = V;
    at(null), Ft(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + n];
          if (g != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Cr(g)) {
              var [m, ...w] = g;
              m.apply(i, [e, ...w]);
            } else
              g.call(i, e);
        } catch (E) {
          h ? p.push(E) : h = E;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let E of p)
          queueMicrotask(() => {
            throw E;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, at(l), Ft(f);
    }
  }
}
function Ur(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Iu(e, t) {
  var u = (
    /** @type {Effect} */
    V
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Le(e, t) {
  var u = (t & Uc) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Ur(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ gt(n));
    var i = (
      /** @type {TemplateNode} */
      u || Oo ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Iu(i, i), i;
  };
}
// @__NO_SIDE_EFFECTS__
function _0(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        Ur(r)
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
    return Iu(a, a), a;
  };
}
function qe() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = En();
  return e.append(t, u), Iu(t, u), e;
}
function X(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function ln(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function Ai(e, t) {
  return x0(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function x0(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  Zc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = p0(p);
        t.addEventListener(p, _u, { passive: d });
        var g = Jt.get(p);
        g === void 0 ? (document.addEventListener(p, _u, { passive: d }), Jt.set(p, 1)) : Jt.set(p, g + 1);
      }
    }
  };
  a(Sr(Vo)), br.add(a);
  var c = void 0, l = Jc(() => {
    var f = u != null ? u : t.appendChild(En());
    return Ht(() => {
      if (i) {
        su({});
        var h = (
          /** @type {ComponentContext} */
          ue
        );
        h.c = i;
      }
      r && (n.$$events = r), c = e(f, n) || {}, i && au();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, _u);
        var p = (
          /** @type {number} */
          Jt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, _u), Jt.delete(h)) : Jt.set(h, p);
      }
      br.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return E0.set(c, l), c;
}
let E0 = /* @__PURE__ */ new WeakMap();
function ut(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = Ce, a = u > 0 ? Du : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? Eu(i) : p && (i = Ht(() => p(r))), o && uu(o, () => {
      o = null;
    })) : (o ? Eu(o) : p && (o = Ht(() => p(r, [u + 1, n]))), i && uu(i, () => {
      i = null;
    })));
  };
  Ru(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function y0(e, t) {
  return t;
}
function v0(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Pr(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    Wc(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), wt(e, t[0].prev, t[i - 1].next);
  }
  Uo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), wt(e, l.prev, l.next)), xt(l.e, !s);
    }
  });
}
function Jo(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & Co) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(En());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Fr(() => {
    var p = u();
    return Cr(p) ? p : p == null ? [] : Sr(p);
  });
  Ru(() => {
    var p = z(h), d = p.length;
    f && d === 0 || (f = d === 0, k0(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? Eu(l) : l = Ht(() => i(o)) : l !== null && uu(l, () => {
      l = null;
    })), z(h));
  });
}
function k0(e, t, u, n, r, i, o) {
  var G, Z, ne, He;
  var s = (r & Ic) !== 0, a = (r & (Nr | Or)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, g, m = [], w = [], v, E, x, _;
  if (s)
    for (_ = 0; _ < c; _ += 1)
      v = e[_], E = i(v, _), x = l.get(E), x !== void 0 && ((G = x.a) == null || G.measure(), (g != null ? g : g = /* @__PURE__ */ new Set()).add(x));
  for (_ = 0; _ < c; _ += 1) {
    if (v = e[_], E = i(v, _), x = l.get(E), x === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = A0(
        A,
        t,
        d,
        d === null ? t.first : d.next,
        v,
        E,
        _,
        n,
        r,
        o
      ), l.set(E, d), m = [], w = [], h = d.next;
      continue;
    }
    if (a && w0(x, v, _, r), (x.e.f & mt) !== 0 && (Eu(x.e), s && ((Z = x.a) == null || Z.unfix(), (g != null ? g : g = /* @__PURE__ */ new Set()).delete(x))), x !== h) {
      if (p !== void 0 && p.has(x)) {
        if (m.length < w.length) {
          var C = w[0], D;
          d = C.prev;
          var M = m[0], j = m[m.length - 1];
          for (D = 0; D < m.length; D += 1)
            Ci(m[D], C, u);
          for (D = 0; D < w.length; D += 1)
            p.delete(w[D]);
          wt(t, M.prev, j.next), wt(t, d, M), wt(t, j, C), h = C, d = j, _ -= 1, m = [], w = [];
        } else
          p.delete(x), Ci(x, h, u), wt(t, x.prev, x.next), wt(t, x, d === null ? t.first : d.next), wt(t, d, x), d = x;
        continue;
      }
      for (m = [], w = []; h !== null && h.k !== E; )
        (h.e.f & mt) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), w.push(h), h = h.next;
      if (h === null)
        continue;
      x = h;
    }
    m.push(x), d = x, h = x.next;
  }
  if (h !== null || p !== void 0) {
    for (var ee = p === void 0 ? [] : Sr(p); h !== null; )
      (h.e.f & mt) === 0 && ee.push(h), h = h.next;
    var fe = ee.length;
    if (fe > 0) {
      var ae = (r & Co) !== 0 && c === 0 ? u : null;
      if (s) {
        for (_ = 0; _ < fe; _ += 1)
          (ne = ee[_].a) == null || ne.measure();
        for (_ = 0; _ < fe; _ += 1)
          (He = ee[_].a) == null || He.fix();
      }
      v0(t, ee, ae, l);
    }
  }
  s && Nu(() => {
    var q;
    if (g !== void 0)
      for (x of g)
        (q = x.a) == null || q.apply();
  }), V.first = t.first && t.first.e, V.last = d && d.e;
}
function w0(e, t, u, n) {
  (n & Nr) !== 0 && dr(e.v, t), (n & Or) !== 0 ? dr(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function A0(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & Nr) !== 0, f = (a & Mc) === 0, h = l ? f ? /* @__PURE__ */ Ir(r) : tu(r) : r, p = (a & Or) === 0 ? o : tu(o), d = {
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
    return d.e = Ht(() => s(e, h, p, c), Gc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Ci(e, t, u) {
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
      /* @__PURE__ */ yn(i)
    );
    r.before(i), i = o;
  }
}
function wt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function C0(e, t, u = !1, n = !1, r = !1) {
  var i = e, o = "";
  Fe(() => {
    var l;
    var s = (
      /** @type {Effect} */
      V
    );
    if (o !== (o = (l = t()) != null ? l : "") && (s.nodes_start !== null && (Po(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "")) {
      var a = o + "";
      u ? a = `<svg>${a}</svg>` : n && (a = `<math>${a}</math>`);
      var c = Ur(a);
      if ((u || n) && (c = /** @type {Element} */
      /* @__PURE__ */ gt(c)), Iu(
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
function Ve(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function S0(e, t, u) {
  var n = e, r, i;
  Ru(() => {
    r !== (r = t()) && (i && (uu(i), i = null), r && (i = Ht(() => u(n, r))));
  }, Du);
}
function D0(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  Ru(() => {
    const f = t() || null;
    var h = qc;
    f !== o && (l && (f === null ? uu(l, () => {
      l = null, s = null;
    }) : f === s ? Eu(l) : xt(l)), f && f !== s && (l = Ht(() => {
      if (a = document.createElementNS(h, f), Iu(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(En())
        );
        n(a, p);
      }
      V.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, Du);
}
function An(e, t) {
  Nu(() => {
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
function Yo(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = Yo(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function T0() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = Yo(e)) && (n && (n += " "), n += t);
  return n;
}
function R0(e) {
  return typeof e == "object" ? T0(e) : e != null ? e : "";
}
const Si = [...` 	
\r\f \v\uFEFF`];
function N0(e, t, u) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), u) {
    for (var r in u)
      if (u[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var i = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || Si.includes(n[o - 1])) && (s === n.length || Si.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Di(e, t = !1) {
  var u = t ? " !important;" : ";", n = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (n += " " + r + ": " + i + u);
  }
  return n;
}
function Kn(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function O0(e, t) {
  if (t) {
    var u = "", n, r;
    if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      n && a.push(...Object.keys(n).map(Kn)), r && a.push(...Object.keys(r).map(Kn));
      var c = 0, l = -1;
      const g = e.length;
      for (var f = 0; f < g; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === g - 1) {
            if (l !== -1) {
              var p = Kn(e.substring(c, l).trim());
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
    return n && (u += Di(n)), r && (u += Di(r, !0)), u = u.trim(), u === "" ? null : u;
  }
  return e == null ? null : String(e);
}
function At(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u || o === void 0) {
    var s = N0(u, n, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  } else if (i && r !== i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
function Jn(e, t = {}, u, n) {
  for (var r in u) {
    var i = u[r];
    t[r] !== i && (u[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, n));
  }
}
function yu(e, t, u, n) {
  var r = e.__style;
  if (r !== t) {
    var i = O0(t, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else n && (Array.isArray(n) ? (Jn(e, u == null ? void 0 : u[0], n[0]), Jn(e, u == null ? void 0 : u[1], n[1], "important")) : Jn(e, u, n));
  return n;
}
const bu = Symbol("class"), gu = Symbol("style"), Xo = Symbol("is custom element"), Qo = Symbol("is html");
function F0(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function vu(e, t, u, n) {
  var r = es(e);
  r[t] !== (r[t] = u) && (t === "loading" && (e[wc] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && ts(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function Ti(e, t, u, n, r = !1) {
  var v;
  var i = es(e), o = i[Xo], s = !i[Qo], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in u || (u[l] = null);
  u.class ? u.class = R0(u.class) : u[bu] && (u.class = null), u[gu] && ((v = u.style) != null || (u.style = null));
  var f = ts(e);
  for (const E in u) {
    let x = u[E];
    if (c && E === "value" && x == null) {
      e.value = e.__value = "", a[E] = x;
      continue;
    }
    if (E === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      At(e, h, x, n, t == null ? void 0 : t[bu], u[bu]), a[E] = x, a[bu] = u[bu];
      continue;
    }
    if (E === "style") {
      yu(e, x, t == null ? void 0 : t[gu], u[gu]), a[E] = x, a[gu] = u[gu];
      continue;
    }
    var p = a[E];
    if (x !== p) {
      a[E] = x;
      var d = E[0] + E[1];
      if (d !== "$$")
        if (d === "on") {
          const _ = {}, A = "$$" + E;
          let C = E.slice(2);
          var g = l0(C);
          if (a0(C) && (C = C.slice(0, -7), _.capture = !0), !g && p) {
            if (x != null) continue;
            e.removeEventListener(C, a[A], _), a[A] = null;
          }
          if (x != null)
            if (g)
              e[`__${C}`] = x, wn([C]);
            else {
              let D = function(M) {
                a[E].call(this, M);
              };
              a[A] = Ko(C, e, D, _);
            }
          else g && (e[`__${C}`] = void 0);
        } else if (E === "style")
          vu(e, E, x);
        else if (E === "autofocus")
          b0(
            /** @type {HTMLElement} */
            e,
            !!x
          );
        else if (!o && (E === "__value" || E === "value" && x != null))
          e.value = e.__value = x;
        else if (E === "selected" && c)
          F0(
            /** @type {HTMLOptionElement} */
            e,
            x
          );
        else {
          var m = E;
          s || (m = d0(m));
          var w = m === "defaultValue" || m === "defaultChecked";
          if (x == null && !o && !w)
            if (i[E] = null, m === "value" || m === "checked") {
              let _ = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (m === "value") {
                let C = _.defaultValue;
                _.removeAttribute(m), _.defaultValue = C, _.value = _.__value = A ? C : null;
              } else {
                let C = _.defaultChecked;
                _.removeAttribute(m), _.defaultChecked = C, _.checked = A ? C : !1;
              }
            } else
              e.removeAttribute(E);
          else w || f.includes(m) && (o || typeof x != "string") ? e[m] = x : typeof x != "function" && vu(e, m, x);
        }
    }
  }
  return a;
}
function es(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [Xo]: e.nodeName.includes("-"),
      [Qo]: e.namespaceURI === $c
    }
  );
}
var Ri = /* @__PURE__ */ new Map();
function ts(e) {
  var t = Ri.get(e.nodeName);
  if (t) return t;
  Ri.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = Eo(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = Dr(n);
  }
  return t;
}
function I0(e, t, u = t) {
  var n = Tu();
  m0(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Yn(e) ? Xn(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  jt(t) == null && e.value && u(Yn(e) ? Xn(e.value) : e.value), Br(() => {
    var r = t();
    Yn(e) && r === Xn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function Yn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Xn(e) {
  return e === "" ? null : +e;
}
function Ni(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function Oi(e = {}, t, u, n) {
  return Lr(() => {
    var r, i;
    return Br(() => {
      r = i, i = [], jt(() => {
        e !== u(...i) && (t(e, ...i), r && Ni(u(...r), e) && t(null, ...r));
      });
    }), () => {
      Nu(() => {
        i && Ni(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function M0(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ue
  ), u = t.l.u;
  if (!u) return;
  let n = () => s0(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ eu(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== i[c] && (i[c] = a[c], s = !0);
      return s && r++, r;
    });
    n = () => z(o);
  }
  u.b.length && Kc(() => {
    Fi(t, n), tn(u.b);
  }), rn(() => {
    const r = jt(() => u.m.map(Ec));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && rn(() => {
    Fi(t, n), tn(u.a);
  });
}
function Fi(e, t) {
  if (e.l.s)
    for (const u of e.l.s) z(u);
  t();
}
function $r(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), Nt;
  const n = jt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Yt = [];
function L0(e, t) {
  return {
    subscribe: us(e, t).subscribe
  };
}
function us(e, t = Nt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Ao(e, s) && (e = s, u)) {
      const a = !Yt.length;
      for (const c of n)
        c[1](), Yt.push(c, e);
      if (a) {
        for (let c = 0; c < Yt.length; c += 2)
          Yt[c][0](Yt[c + 1]);
        Yt.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = Nt) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (u = t(r, i) || Nt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function B0(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return L0(u, (o, s) => {
    let a = !1;
    const c = [];
    let l = 0, f = Nt;
    const h = () => {
      if (l)
        return;
      f();
      const d = t(n ? c[0] : c, o, s);
      i ? o(d) : f = typeof d == "function" ? d : Nt;
    }, p = r.map(
      (d, g) => $r(
        d,
        (m) => {
          c[g] = m, l &= ~(1 << g), a && h();
        },
        () => {
          l |= 1 << g;
        }
      )
    );
    return a = !0, h(), function() {
      tn(p), f(), a = !1;
    };
  });
}
function ns(e) {
  let t;
  return $r(e, (u) => t = u)(), t;
}
let Wu = !1, gr = Symbol();
function P0(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ Ir(void 0),
    unsubscribe: Nt
  };
  if (n.store !== e && !(gr in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = Nt;
    else {
      var r = !0;
      n.unsubscribe = $r(e, (o) => {
        r ? n.source.v = o : ke(n.source, o);
      }), r = !1;
    }
  return e && gr in u ? ns(e) : z(n.source);
}
function z0() {
  const e = {};
  function t() {
    Mr(() => {
      for (var u in e)
        e[u].unsubscribe();
      xo(e, gr, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function U0(e) {
  var t = Wu;
  try {
    return Wu = !1, [e(), Wu];
  } finally {
    Wu = t;
  }
}
const $0 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return z(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, u) {
    return t in e.special || (e.special[t] = bt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      So
    )), e.special[t](u), xi(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), xi(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Pe(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: tu(0) }, $0);
}
const q0 = {
  get(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (pu(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, u) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      pu(r) && (r = r());
      const i = Rt(r, t);
      if (i && i.set)
        return i.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (pu(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = Rt(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Ot || t === ko) return !1;
    for (let u of e.props)
      if (pu(u) && (u = u()), u != null && t in u) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let u of e.props) {
      pu(u) && (u = u());
      for (const n in u)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function ct(...e) {
  return new Proxy({ props: e }, q0);
}
function Ii(e) {
  var t, u;
  return (u = (t = e.ctx) == null ? void 0 : t.d) != null ? u : !1;
}
function bt(e, t, u, n) {
  var A, C;
  var r = (u & Lc) !== 0, i = !ou || (u & Bc) !== 0, o = (u & Pc) !== 0, s = (u & zc) !== 0, a = !1, c;
  o ? [c, a] = U0(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Ot in e || ko in e, f = o && ((C = (A = Rt(e, t)) == null ? void 0 : A.set) != null ? C : l && t in e && ((D) => e[t] = D)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, g = () => (d = !0, p && (p = !1, s ? h = jt(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && Tc(), c = g(), f && f(c));
  var m;
  if (i)
    m = () => {
      var D = (
        /** @type {V} */
        e[t]
      );
      return D === void 0 ? g() : (p = !0, d = !1, D);
    };
  else {
    var w = (r ? eu : Fr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    w.f |= vc, m = () => {
      var D = z(w);
      return D !== void 0 && (h = /** @type {V} */
      void 0), D === void 0 ? h : D;
    };
  }
  if ((u & So) === 0)
    return m;
  if (f) {
    var v = e.$$legacy;
    return function(D, M) {
      return arguments.length > 0 ? ((!i || !M || v || a) && f(M ? m() : D), D) : m();
    };
  }
  var E = !1, x = /* @__PURE__ */ Ir(c), _ = /* @__PURE__ */ eu(() => {
    var D = m(), M = z(x);
    return E ? (E = !1, M) : x.v = D;
  });
  return o && z(_), r || (_.equals = Rr), function(D, M) {
    if (arguments.length > 0) {
      const j = M ? z(_) : i && o ? zt(D) : D;
      if (!_.equals(j)) {
        if (E = !0, ke(x, j), d && h !== void 0 && (h = j), Ii(_))
          return D;
        jt(() => z(_));
      }
      return D;
    }
    return Ii(_) ? _.v : z(_);
  };
}
function rs(e) {
  ue === null && Hc(), ou && ue.l !== null ? H0(ue).m.push(e) : rn(() => {
    const t = jt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function H0(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const j0 = "5";
var go, mo, _o;
typeof window != "undefined" && ((_o = (mo = (go = window.__svelte) != null ? go : window.__svelte = {}).v) != null ? _o : mo.v = /* @__PURE__ */ new Set()).add(j0);
function is(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: G0 } = Object.prototype, { getPrototypeOf: qr } = Object, { iterator: Cn, toStringTag: os } = Symbol, Sn = /* @__PURE__ */ ((e) => (t) => {
  const u = G0.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ke = (e) => (e = e.toLowerCase(), (t) => Sn(t) === e), Dn = (e) => (t) => typeof t === e, { isArray: lu } = Array, ku = Dn("undefined");
function Z0(e) {
  return e !== null && !ku(e) && e.constructor !== null && !ku(e.constructor) && Se(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ss = Ke("ArrayBuffer");
function W0(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ss(e.buffer), t;
}
const V0 = Dn("string"), Se = Dn("function"), as = Dn("number"), Tn = (e) => e !== null && typeof e == "object", K0 = (e) => e === !0 || e === !1, Xu = (e) => {
  if (Sn(e) !== "object")
    return !1;
  const t = qr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(os in e) && !(Cn in e);
}, J0 = Ke("Date"), Y0 = Ke("File"), X0 = Ke("Blob"), Q0 = Ke("FileList"), el = (e) => Tn(e) && Se(e.pipe), tl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Se(e.append) && ((t = Sn(e)) === "formdata" || // detect form-data instance
  t === "object" && Se(e.toString) && e.toString() === "[object FormData]"));
}, ul = Ke("URLSearchParams"), [nl, rl, il, ol] = ["ReadableStream", "Request", "Response", "Headers"].map(Ke), sl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Mu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), lu(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const i = u ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function cs(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const Ut = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, ls = (e) => !ku(e) && e !== Ut;
function mr() {
  const { caseless: e } = ls(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && cs(t, r) || r;
    Xu(t[i]) && Xu(n) ? t[i] = mr(t[i], n) : Xu(n) ? t[i] = mr({}, n) : lu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Mu(arguments[n], u);
  return t;
}
const al = (e, t, u, { allOwnKeys: n } = {}) => (Mu(t, (r, i) => {
  u && Se(r) ? e[i] = is(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), cl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), ll = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, fl = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && qr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, dl = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, hl = (e) => {
  if (!e) return null;
  if (lu(e)) return e;
  let t = e.length;
  if (!as(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, pl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && qr(Uint8Array)), bl = (e, t) => {
  const n = (e && e[Cn]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, gl = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, ml = Ke("HTMLFormElement"), _l = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), Mi = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), xl = Ke("RegExp"), fs = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  Mu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, El = (e) => {
  fs(e, (t, u) => {
    if (Se(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (Se(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, yl = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return lu(e) ? n(e) : n(String(e).split(t)), u;
}, vl = () => {
}, kl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function wl(e) {
  return !!(e && Se(e.append) && e[os] === "FormData" && e[Cn]);
}
const Al = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (Tn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = lu(n) ? [] : {};
        return Mu(n, (o, s) => {
          const a = u(o, r + 1);
          !ku(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, Cl = Ke("AsyncFunction"), Sl = (e) => e && (Tn(e) || Se(e)) && Se(e.then) && Se(e.catch), ds = ((e, t) => e ? setImmediate : t ? ((u, n) => (Ut.addEventListener("message", ({ source: r, data: i }) => {
  r === Ut && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), Ut.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  Se(Ut.postMessage)
), Dl = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Ut) : typeof process != "undefined" && process.nextTick || ds, Tl = (e) => e != null && Se(e[Cn]), y = {
  isArray: lu,
  isArrayBuffer: ss,
  isBuffer: Z0,
  isFormData: tl,
  isArrayBufferView: W0,
  isString: V0,
  isNumber: as,
  isBoolean: K0,
  isObject: Tn,
  isPlainObject: Xu,
  isReadableStream: nl,
  isRequest: rl,
  isResponse: il,
  isHeaders: ol,
  isUndefined: ku,
  isDate: J0,
  isFile: Y0,
  isBlob: X0,
  isRegExp: xl,
  isFunction: Se,
  isStream: el,
  isURLSearchParams: ul,
  isTypedArray: pl,
  isFileList: Q0,
  forEach: Mu,
  merge: mr,
  extend: al,
  trim: sl,
  stripBOM: cl,
  inherits: ll,
  toFlatObject: fl,
  kindOf: Sn,
  kindOfTest: Ke,
  endsWith: dl,
  toArray: hl,
  forEachEntry: bl,
  matchAll: gl,
  isHTMLForm: ml,
  hasOwnProperty: Mi,
  hasOwnProp: Mi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: fs,
  freezeMethods: El,
  toObjectSet: yl,
  toCamelCase: _l,
  noop: vl,
  toFiniteNumber: kl,
  findKey: cs,
  global: Ut,
  isContextDefined: ls,
  isSpecCompliantForm: wl,
  toJSONObject: Al,
  isAsyncFn: Cl,
  isThenable: Sl,
  setImmediate: ds,
  asap: Dl,
  isIterable: Tl
};
function U(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
y.inherits(U, Error, {
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
const hs = U.prototype, ps = {};
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
  ps[e] = { value: e };
});
Object.defineProperties(U, ps);
Object.defineProperty(hs, "isAxiosError", { value: !0 });
U.from = (e, t, u, n, r, i) => {
  const o = Object.create(hs);
  return y.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), U.call(o, e.message, t, u, n, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Rl = null;
function _r(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function bs(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Li(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = bs(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function Nl(e) {
  return y.isArray(e) && !e.some(_r);
}
const Ol = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Rn(e, t, u) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = y.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, m) {
    return !y.isUndefined(m[g]);
  });
  const n = u.metaTokens, r = u.visitor || l, i = u.dots, o = u.indexes, a = (u.Blob || typeof Blob != "undefined" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (y.isDate(d))
      return d.toISOString();
    if (!a && y.isBlob(d))
      throw new U("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(d) || y.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, g, m) {
    let w = d;
    if (d && !m && typeof d == "object") {
      if (y.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (y.isArray(d) && Nl(d) || (y.isFileList(d) || y.endsWith(g, "[]")) && (w = y.toArray(d)))
        return g = bs(g), w.forEach(function(E, x) {
          !(y.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Li([g], x, i) : o === null ? g : g + "[]",
            c(E)
          );
        }), !1;
    }
    return _r(d) ? !0 : (t.append(Li(m, g, i), c(d)), !1);
  }
  const f = [], h = Object.assign(Ol, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: _r
  });
  function p(d, g) {
    if (!y.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), y.forEach(d, function(w, v) {
        (!(y.isUndefined(w) || w === null) && r.call(
          t,
          w,
          y.isString(v) ? v.trim() : v,
          g,
          h
        )) === !0 && p(w, g ? g.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!y.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Bi(e) {
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
function Hr(e, t) {
  this._pairs = [], e && Rn(e, this, t);
}
const gs = Hr.prototype;
gs.append = function(t, u) {
  this._pairs.push([t, u]);
};
gs.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, Bi);
  } : Bi;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function Fl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ms(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || Fl;
  y.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = y.isURLSearchParams(t) ? t.toString() : new Hr(t, u).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Pi {
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
const _s = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Il = typeof URLSearchParams != "undefined" ? URLSearchParams : Hr, Ml = typeof FormData != "undefined" ? FormData : null, Ll = typeof Blob != "undefined" ? Blob : null, Bl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Il,
    FormData: Ml,
    Blob: Ll
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, jr = typeof window != "undefined" && typeof document != "undefined", xr = typeof navigator == "object" && navigator || void 0, Pl = jr && (!xr || ["ReactNative", "NativeScript", "NS"].indexOf(xr.product) < 0), zl = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Ul = jr && window.location.href || "http://localhost", $l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: jr,
  hasStandardBrowserEnv: Pl,
  hasStandardBrowserWebWorkerEnv: zl,
  navigator: xr,
  origin: Ul
}, Symbol.toStringTag, { value: "Module" })), Ee = le(le({}, $l), Bl);
function ql(e, t) {
  return Rn(e, new Ee.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return Ee.isNode && y.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Hl(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jl(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let i;
  for (n = 0; n < r; n++)
    i = u[n], t[i] = e[i];
  return t;
}
function xs(e) {
  function t(u, n, r, i) {
    let o = u[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= u.length;
    return o = !o && y.isArray(r) ? r.length : o, a ? (y.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !y.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && y.isArray(r[o]) && (r[o] = jl(r[o])), !s);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const u = {};
    return y.forEachEntry(e, (n, r) => {
      t(Hl(n), r, u, 0);
    }), u;
  }
  return null;
}
function Gl(e, t, u) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const Lu = {
  transitional: _s,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, i = y.isObject(t);
    if (i && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return r ? JSON.stringify(xs(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ql(t, this.formSerializer).toString();
      if ((s = y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Rn(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), Gl(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || Lu.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (y.isResponse(t) || y.isReadableStream(t))
      return t;
    if (t && y.isString(t) && (n && !this.responseType || r)) {
      const o = !(u && u.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? U.from(s, U.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Ee.classes.FormData,
    Blob: Ee.classes.Blob
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
  Lu.headers[e] = {};
});
const Zl = y.toObjectSet([
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
]), Wl = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && Zl[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, zi = Symbol("internals");
function mu(e) {
  return e && String(e).trim().toLowerCase();
}
function Qu(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(Qu) : String(e);
}
function Vl(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Kl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Qn(e, t, u, n, r) {
  if (y.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!y.isString(t)) {
    if (y.isString(n))
      return t.indexOf(n) !== -1;
    if (y.isRegExp(n))
      return n.test(t);
  }
}
function Jl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function Yl(e, t) {
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
let De = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = mu(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Qu(s));
    }
    const o = (s, a) => y.forEach(s, (c, l) => i(c, l, a));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (y.isString(t) && (t = t.trim()) && !Kl(t))
      o(Wl(t), u);
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
    if (t = mu(t), t) {
      const n = y.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return Vl(r);
        if (y.isFunction(u))
          return u.call(this, r, n);
        if (y.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = mu(t), t) {
      const n = y.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || Qn(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = mu(o), o) {
        const s = y.findKey(n, o);
        s && (!u || Qn(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return y.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const i = u[n];
      (!t || Qn(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return y.forEach(this, (r, i) => {
      const o = y.findKey(n, i);
      if (o) {
        u[o] = Qu(r), delete u[i];
        return;
      }
      const s = t ? Jl(i) : String(i).trim();
      s !== i && delete u[i], u[s] = Qu(r), n[s] = !0;
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
    const n = (this[zi] = this[zi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = mu(o);
      n[s] || (Yl(r, o), n[s] = !0);
    }
    return y.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
De.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(De.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
y.freezeMethods(De);
function er(e, t) {
  const u = this || Lu, n = t || u, r = De.from(n.headers);
  let i = n.data;
  return y.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Es(e) {
  return !!(e && e.__CANCEL__);
}
function fu(e, t, u) {
  U.call(this, e == null ? "canceled" : e, U.ERR_CANCELED, t, u), this.name = "CanceledError";
}
y.inherits(fu, U, {
  __CANCEL__: !0
});
function ys(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new U(
    "Request failed with status code " + u.status,
    [U.ERR_BAD_REQUEST, U.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function Xl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Ql(e, t) {
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
function ef(e, t) {
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
const fn = (e, t, u = 3) => {
  let n = 0;
  const r = Ql(50, 250);
  return ef((i) => {
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
}, Ui = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, $i = (e) => (...t) => y.asap(() => e(...t)), tf = Ee.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, Ee.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(Ee.origin),
  Ee.navigator && /(msie|trident)/i.test(Ee.navigator.userAgent)
) : () => !0, uf = Ee.hasStandardBrowserEnv ? (
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
function nf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function rf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vs(e, t, u) {
  let n = !nf(t);
  return e && (n || u == !1) ? rf(e, t) : t;
}
const qi = (e) => e instanceof De ? le({}, e) : e;
function Gt(e, t) {
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
    headers: (c, l, f) => r(qi(c), qi(l), f, !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    y.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const ks = (e) => {
  const t = Gt({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = De.from(o), t.url = ms(vs(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (y.isFormData(u)) {
    if (Ee.hasStandardBrowserEnv || Ee.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (Ee.hasStandardBrowserEnv && (n && y.isFunction(n) && (n = n(t)), n || n !== !1 && tf(t.url))) {
    const c = r && i && uf.read(i);
    c && o.set(r, c);
  }
  return t;
}, of = typeof XMLHttpRequest != "undefined", sf = of && function(e) {
  return new Promise(function(u, n) {
    const r = ks(e);
    let i = r.data;
    const o = De.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function g() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function w() {
      if (!m)
        return;
      const E = De.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), _ = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: E,
        config: e,
        request: m
      };
      ys(function(C) {
        u(C), g();
      }, function(C) {
        n(C), g();
      }, _), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (n(new U("Request aborted", U.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new U("Network Error", U.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let x = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const _ = r.transitional || _s;
      r.timeoutErrorMessage && (x = r.timeoutErrorMessage), n(new U(
        x,
        _.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && y.forEach(o.toJSON(), function(x, _) {
      m.setRequestHeader(_, x);
    }), y.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), s && s !== "json" && (m.responseType = r.responseType), c && ([h, d] = fn(c, !0), m.addEventListener("progress", h)), a && m.upload && ([f, p] = fn(a), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (E) => {
      m && (n(!E || E.type ? new fu(null, e, m) : E), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const v = Xl(r.url);
    if (v && Ee.protocols.indexOf(v) === -1) {
      n(new U("Unsupported protocol " + v + ":", U.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, af = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof U ? l : new fu(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new U(`timeout ${t} of ms exceeded`, U.ETIMEDOUT));
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
}, cf = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, lf = function(e, t) {
  return Zn(this, null, function* () {
    try {
      for (var u = gi(ff(e)), n, r, i; n = !(r = yield new Pt(u.next())).done; n = !1) {
        const o = r.value;
        yield* Wn(cf(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        n && (r = u.return) && (yield new Pt(r.call(u)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, ff = function(e) {
  return Zn(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* Wn(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: u, value: n } = yield new Pt(t.read());
        if (u)
          break;
        yield n;
      }
    } finally {
      yield new Pt(t.cancel());
    }
  });
}, Hi = (e, t, u, n) => {
  const r = lf(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    pull(c) {
      return me(this, null, function* () {
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
}, Nn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ws = Nn && typeof ReadableStream == "function", df = Nn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => me(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), As = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, hf = ws && As(() => {
  let e = !1;
  const t = new Request(Ee.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), ji = 64 * 1024, Er = ws && As(() => y.isReadableStream(new Response("").body)), dn = {
  stream: Er && ((e) => e.body)
};
Nn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !dn[t] && (dn[t] = y.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new U(`Response type '${t}' is not supported`, U.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const pf = (e) => me(null, null, function* () {
  if (e == null)
    return 0;
  if (y.isBlob(e))
    return e.size;
  if (y.isSpecCompliantForm(e))
    return (yield new Request(Ee.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (y.isArrayBufferView(e) || y.isArrayBuffer(e))
    return e.byteLength;
  if (y.isURLSearchParams(e) && (e = e + ""), y.isString(e))
    return (yield df(e)).byteLength;
}), bf = (e, t) => me(null, null, function* () {
  const u = y.toFiniteNumber(e.getContentLength());
  return u == null ? pf(t) : u;
}), gf = Nn && ((e) => me(null, null, function* () {
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
  } = ks(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = af([r, i && i.toAbortSignal()], o), d;
  const g = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (a && hf && u !== "get" && u !== "head" && (m = yield bf(l, n)) !== 0) {
      let _ = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), A;
      if (y.isFormData(n) && (A = _.headers.get("content-type")) && l.setContentType(A), _.body) {
        const [C, D] = Ui(
          m,
          fn($i(a))
        );
        n = Hi(_.body, ji, C, D);
      }
    }
    y.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    d = new Request(t, Ae(le({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: w ? f : void 0
    }));
    let v = yield fetch(d);
    const E = Er && (c === "stream" || c === "response");
    if (Er && (s || E && g)) {
      const _ = {};
      ["status", "statusText", "headers"].forEach((M) => {
        _[M] = v[M];
      });
      const A = y.toFiniteNumber(v.headers.get("content-length")), [C, D] = s && Ui(
        A,
        fn($i(s), !0)
      ) || [];
      v = new Response(
        Hi(v.body, ji, C, () => {
          D && D(), g && g();
        }),
        _
      );
    }
    c = c || "text";
    let x = yield dn[y.findKey(dn, c) || "text"](v, e);
    return !E && g && g(), yield new Promise((_, A) => {
      ys(_, A, {
        data: x,
        headers: De.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (w) {
    throw g && g(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new U("Network Error", U.ERR_NETWORK, e, d),
      {
        cause: w.cause || w
      }
    ) : U.from(w, w && w.code, e, d);
  }
})), yr = {
  http: Rl,
  xhr: sf,
  fetch: gf
};
y.forEach(yr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (u) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Gi = (e) => `- ${e}`, mf = (e) => y.isFunction(e) || e === null || e === !1, Cs = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !mf(u) && (n = yr[(o = String(u)).toLowerCase()], n === void 0))
        throw new U(`Unknown adapter '${o}'`);
      if (n)
        break;
      r[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Gi).join(`
`) : " " + Gi(i[0]) : "as no adapter specified";
      throw new U(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: yr
};
function tr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fu(null, e);
}
function Zi(e) {
  return tr(e), e.headers = De.from(e.headers), e.data = er.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Cs.getAdapter(e.adapter || Lu.adapter)(e).then(function(n) {
    return tr(e), n.data = er.call(
      e,
      e.transformResponse,
      n
    ), n.headers = De.from(n.headers), n;
  }, function(n) {
    return Es(n) || (tr(e), n && n.response && (n.response.data = er.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = De.from(n.response.headers))), Promise.reject(n);
  });
}
const Ss = "1.9.0", On = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  On[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Wi = {};
On.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + Ss + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new U(
        r(o, " has been removed" + (u ? " in " + u : "")),
        U.ERR_DEPRECATED
      );
    return u && !Wi[o] && (Wi[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
On.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function _f(e, t, u) {
  if (typeof e != "object")
    throw new U("options must be an object", U.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new U("option " + i + " must be " + a, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new U("Unknown option " + i, U.ERR_BAD_OPTION);
  }
}
const en = {
  assertOptions: _f,
  validators: On
}, Qe = en.validators;
let qt = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new Pi(),
      response: new Pi()
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
    return me(this, null, function* () {
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
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = Gt(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: i } = u;
    n !== void 0 && en.assertOptions(n, {
      silentJSONParsing: Qe.transitional(Qe.boolean),
      forcedJSONParsing: Qe.transitional(Qe.boolean),
      clarifyTimeoutError: Qe.transitional(Qe.boolean)
    }, !1), r != null && (y.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : en.assertOptions(r, {
      encode: Qe.function,
      serialize: Qe.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), en.assertOptions(u, {
      baseUrl: Qe.spelling("baseURL"),
      withXsrfToken: Qe.spelling("withXSRFToken")
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
    ), u.headers = De.concat(o, i);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(u) === !1 || (a = a && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let l, f = 0, h;
    if (!a) {
      const d = [Zi.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, c), h = d.length, l = Promise.resolve(u); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = s.length;
    let p = u;
    for (f = 0; f < h; ) {
      const d = s[f++], g = s[f++];
      try {
        p = d(p);
      } catch (m) {
        g.call(this, m);
        break;
      }
    }
    try {
      l = Zi.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Gt(this.defaults, t);
    const u = vs(t.baseURL, t.url, t.allowAbsoluteUrls);
    return ms(u, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
  qt.prototype[t] = function(u, n) {
    return this.request(Gt(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(i, o, s) {
      return this.request(Gt(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  qt.prototype[t] = u(), qt.prototype[t + "Form"] = u(!0);
});
let xf = class Ds {
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
      n.reason || (n.reason = new fu(i, o, s), u(n.reason));
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
      token: new Ds(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Ef(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function yf(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const vr = {
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
Object.entries(vr).forEach(([e, t]) => {
  vr[t] = e;
});
function Ts(e) {
  const t = new qt(e), u = is(qt.prototype.request, t);
  return y.extend(u, qt.prototype, t, { allOwnKeys: !0 }), y.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return Ts(Gt(e, r));
  }, u;
}
const re = Ts(Lu);
re.Axios = qt;
re.CanceledError = fu;
re.CancelToken = xf;
re.isCancel = Es;
re.VERSION = Ss;
re.toFormData = Rn;
re.AxiosError = U;
re.Cancel = re.CanceledError;
re.all = function(t) {
  return Promise.all(t);
};
re.spread = Ef;
re.isAxiosError = yf;
re.mergeConfig = Gt;
re.AxiosHeaders = De;
re.formToJSON = (e) => xs(y.isHTMLForm(e) ? new FormData(e) : e);
re.getAdapter = Cs.getAdapter;
re.HttpStatusCode = vr;
re.default = re;
const {
  Axios: yp,
  AxiosError: vp,
  CanceledError: kp,
  isCancel: wp,
  CancelToken: Ap,
  VERSION: Cp,
  all: Sp,
  Cancel: Dp,
  isAxiosError: Tp,
  spread: Rp,
  toFormData: Np,
  AxiosHeaders: Op,
  HttpStatusCode: Fp,
  formToJSON: Ip,
  getAdapter: Mp,
  mergeConfig: Lp
} = re, vf = re.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), Rs = re.create({
  baseURL: "https://fluent-ai-backend.jewel-e68.workers.dev/fluent-bot",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), kf = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null,
  hasMore: !0,
  currentPage: 1
}, rt = us(kf);
B0(
  rt,
  (e) => e.messages.map((t) => Ae(le({}, t), {
    message: t.message
  }))
);
const wf = (e, t) => me(null, null, function* () {
  const u = localStorage.getItem("userId"), n = t.team_id, r = t.bot_id, i = t.custom_prompt;
  if (!u || !n || !r)
    throw new Error("User ID, Fluent Bot User ID, and Bot ID are required");
  let o = "", s = "";
  rt.update((a) => Ae(le({}, a), {
    messages: [
      ...a.messages,
      {
        id: Date.now().toString(),
        chatId: a.currentChatId || "",
        role: "human",
        message: e,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "streaming",
        chatId: a.currentChatId || "",
        role: "ai",
        message: "",
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    isLoading: !0
  }));
  try {
    const a = {
      message: e,
      userId: u,
      teamId: n,
      botId: r,
      customPrompt: i,
      chatId: ns(rt).currentChatId || void 0
    };
    yield Rs.post("/chat", a, {
      responseType: "text",
      headers: {
        Accept: "text/event-stream"
      },
      onDownloadProgress: (c) => {
        var g, m;
        const l = ((m = (g = c.event) == null ? void 0 : g.target) == null ? void 0 : m.responseText) || "";
        if (!l || l === o) return;
        const f = l.slice(o.length);
        o = l;
        const h = f.split(`
`);
        let p = "", d = "";
        for (const w of h) {
          if (w.startsWith("event:")) {
            p = w.replace("event:", "").trim();
            continue;
          }
          if (w.startsWith("data:")) {
            if (d = w.replace("data:", "").trim(), !d) continue;
            try {
              const v = JSON.parse(d);
              rt.update((E) => {
                if (!E.messages.find((_) => _.id === "streaming")) return E;
                if (p === "ai-response")
                  return s += v, Ae(le({}, E), {
                    messages: E.messages.map(
                      (_) => _.id === "streaming" ? Ae(le({}, _), {
                        message: s
                      }) : _
                    )
                  });
                if (p === "chat-id" && "chatId" in v) {
                  const _ = v.chatId;
                  return localStorage.setItem("currentChatId", _), Ae(le({}, E), {
                    currentChatId: _
                  });
                }
                if (p === "done" && "done" in v && v.done) {
                  const _ = {
                    id: Date.now().toString(),
                    chatId: E.currentChatId || "",
                    role: "ai",
                    message: s,
                    created_at: (/* @__PURE__ */ new Date()).toISOString()
                  };
                  return Ae(le({}, E), {
                    messages: E.messages.map(
                      (A) => A.id === "streaming" ? _ : A
                    ),
                    isLoading: !1
                  });
                }
                if ("error" in v)
                  throw new Error(v.error);
                return E;
              });
            } catch (v) {
              if (console.error("Error parsing SSE data:", v), v instanceof Error && v.message !== "Error parsing SSE data:")
                throw v;
            }
          }
        }
      }
    });
  } catch (a) {
    throw console.error("Error sending message:", a), rt.update((c) => Ae(le({}, c), {
      isLoading: !1
    })), a;
  }
}), Ns = (e, t = 1, u = 10) => me(null, null, function* () {
  try {
    const n = yield Rs.get(`/chats/${e}/messages`, {
      params: {
        page: t,
        limit: u,
        sort: "desc"
      }
    }), r = n.data.messages.reverse();
    rt.update((i) => Ae(le({}, i), {
      messages: t === 1 ? r : [...r, ...i.messages],
      hasMore: n.data.pagination.page < n.data.pagination.totalPages,
      currentPage: t,
      currentChatId: e
    })), localStorage.setItem("currentChatId", e);
  } catch (n) {
    console.error("Error loading chat history:", n), rt.update((r) => Ae(le({}, r), {
      error: "Failed to load chat history"
    }));
  }
});
Fc();
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
const Af = {
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
var Cf = /* @__PURE__ */ _0("<svg><!><!></svg>");
function lt(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = Pe(u, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  su(t, !1);
  let r = bt(t, "name", 8, void 0), i = bt(t, "color", 8, "currentColor"), o = bt(t, "size", 8, 24), s = bt(t, "strokeWidth", 8, 2), a = bt(t, "absoluteStrokeWidth", 8, !1), c = bt(t, "iconNode", 24, () => []);
  const l = (...g) => g.filter((m, w, v) => !!m && v.indexOf(m) === w).join(" ");
  M0();
  var f = Cf();
  let h;
  var p = te(f);
  Jo(p, 1, c, y0, (g, m) => {
    let w = () => z(m)[0], v = () => z(m)[1];
    var E = qe(), x = $e(E);
    D0(x, w, !0, (_, A) => {
      let C;
      Fe(() => C = Ti(_, C, le({}, v())));
    }), X(g, E);
  });
  var d = st(p);
  Ve(d, t, "default", {}), Fe(
    (g, m) => h = Ti(f, h, Ae(le(le({}, Af), n), {
      width: o(),
      height: o(),
      stroke: i(),
      "stroke-width": g,
      class: m
    })),
    [
      () => a() ? Number(s()) * 24 / Number(o()) : s(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", u.class)
    ],
    Fr
  ), X(e, f), au();
}
function Os(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "circle-help" }, () => u, {
    iconNode: [
      [
        "circle",
        { cx: "12", cy: "12", r: "10" }
      ],
      [
        "path",
        { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }
      ],
      ["path", { d: "M12 17h.01" }]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Fs(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "file-text" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"
        }
      ],
      ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4" }],
      ["path", { d: "M10 9H8" }],
      ["path", { d: "M16 13H8" }],
      ["path", { d: "M16 17H8" }]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Is(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "info" }, () => u, {
    iconNode: [
      [
        "circle",
        { cx: "12", cy: "12", r: "10" }
      ],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ms(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "life-buoy" }, () => u, {
    iconNode: [
      [
        "circle",
        { cx: "12", cy: "12", r: "10" }
      ],
      ["path", { d: "m4.93 4.93 4.24 4.24" }],
      ["path", { d: "m14.83 9.17 4.24-4.24" }],
      ["path", { d: "m14.83 14.83 4.24 4.24" }],
      ["path", { d: "m9.17 14.83-4.24 4.24" }],
      [
        "circle",
        { cx: "12", cy: "12", r: "4" }
      ]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ls(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "menu" }, () => u, {
    iconNode: [
      [
        "line",
        {
          x1: "4",
          x2: "20",
          y1: "12",
          y2: "12"
        }
      ],
      [
        "line",
        { x1: "4", x2: "20", y1: "6", y2: "6" }
      ],
      [
        "line",
        {
          x1: "4",
          x2: "20",
          y1: "18",
          y2: "18"
        }
      ]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Bs(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "message-square-more" }, () => u, {
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
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function hn(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "message-square" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ps(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "monitor" }, () => u, {
    iconNode: [
      [
        "rect",
        {
          width: "20",
          height: "14",
          x: "2",
          y: "3",
          rx: "2"
        }
      ],
      [
        "line",
        {
          x1: "8",
          x2: "16",
          y1: "21",
          y2: "21"
        }
      ],
      [
        "line",
        {
          x1: "12",
          x2: "12",
          y1: "17",
          y2: "21"
        }
      ]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Sf(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "refresh-cw" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"
        }
      ],
      ["path", { d: "M21 3v5h-5" }],
      [
        "path",
        {
          d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"
        }
      ],
      ["path", { d: "M8 16H3v5" }]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function zs(e, t) {
  const u = Pe(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, ct({ name: "x" }, () => u, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = qe(), s = $e(o);
      Ve(s, t, "default", {}), X(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const Vi = {};
function Df(e) {
  let t = Vi[e];
  if (t)
    return t;
  t = Vi[e] = [];
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
function nu(e, t) {
  typeof t != "string" && (t = nu.defaultChars);
  const u = Df(t);
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
nu.defaultChars = ";/?:@&=+$,#";
nu.componentChars = "";
const Ki = {};
function Tf(e) {
  let t = Ki[e];
  if (t)
    return t;
  t = Ki[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function Bu(e, t, u) {
  typeof t != "string" && (u = t, t = Bu.defaultChars), typeof u == "undefined" && (u = !0);
  const n = Tf(t);
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
Bu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Bu.componentChars = "-_.!~*'()";
function Gr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function pn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Rf = /^([a-z0-9.+-]+:)/i, Nf = /:[0-9]*$/, Of = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Ff = ["<", ">", '"', "`", " ", "\r", `
`, "	"], If = ["{", "}", "|", "\\", "^", "`"].concat(Ff), Mf = ["'"].concat(If), Ji = ["%", "/", "?", ";", "#"].concat(Mf), Yi = ["/", "?", "#"], Lf = 255, Xi = /^[+a-z0-9A-Z_-]{0,63}$/, Bf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Qi = {
  javascript: !0,
  "javascript:": !0
}, eo = {
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
function Zr(e, t) {
  if (e && e instanceof pn) return e;
  const u = new pn();
  return u.parse(e, t), u;
}
pn.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Of.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Rf.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && Qi[o]) && (i = i.substr(2), this.slashes = !0)), !Qi[o] && (r || o && !eo[o])) {
    let c = -1;
    for (let d = 0; d < Yi.length; d++)
      n = i.indexOf(Yi[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < Ji.length; d++)
      n = i.indexOf(Ji[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let g = 0, m = d.length; g < m; g++) {
        const w = d[g];
        if (w && !w.match(Xi)) {
          let v = "";
          for (let E = 0, x = w.length; E < x; E++)
            w.charCodeAt(E) > 127 ? v += "x" : v += w[E];
          if (!v.match(Xi)) {
            const E = d.slice(0, g), x = d.slice(g + 1), _ = w.match(Bf);
            _ && (E.push(_[1]), x.unshift(_[2])), x.length && (i = x.join(".") + i), this.hostname = E.join(".");
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
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), eo[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
pn.prototype.parseHost = function(e) {
  let t = Nf.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Pf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: nu,
  encode: Bu,
  format: Gr,
  parse: Zr
}, Symbol.toStringTag, { value: "Module" })), Us = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, $s = /[\0-\x1F\x7F-\x9F]/, zf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Wr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, qs = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Hs = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Uf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Us,
  Cc: $s,
  Cf: zf,
  P: Wr,
  S: qs,
  Z: Hs
}, Symbol.toStringTag, { value: "Module" })), $f = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), qf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var ur;
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
]), jf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (ur = String.fromCodePoint) !== null && ur !== void 0 ? ur : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Gf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Hf.get(e)) !== null && t !== void 0 ? t : e;
}
var pe;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(pe || (pe = {}));
const Zf = 32;
var Tt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Tt || (Tt = {}));
function kr(e) {
  return e >= pe.ZERO && e <= pe.NINE;
}
function Wf(e) {
  return e >= pe.UPPER_A && e <= pe.UPPER_F || e >= pe.LOWER_A && e <= pe.LOWER_F;
}
function Vf(e) {
  return e >= pe.UPPER_A && e <= pe.UPPER_Z || e >= pe.LOWER_A && e <= pe.LOWER_Z || kr(e);
}
function Kf(e) {
  return e === pe.EQUALS || Vf(e);
}
var he;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(he || (he = {}));
var St;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(St || (St = {}));
class Jf {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = he.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = St.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = he.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case he.EntityStart:
        return t.charCodeAt(u) === pe.NUM ? (this.state = he.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = he.NamedEntity, this.stateNamedEntity(t, u));
      case he.NumericStart:
        return this.stateNumericStart(t, u);
      case he.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case he.NumericHex:
        return this.stateNumericHex(t, u);
      case he.NamedEntity:
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | Zf) === pe.LOWER_X ? (this.state = he.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = he.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (kr(r) || Wf(r))
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
      if (kr(r))
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
    if (t === pe.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === St.Strict)
      return 0;
    return this.emitCodePoint(Gf(this.result), this.consumed), this.errors && (t !== pe.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
    let r = n[this.treeIndex], i = (r & Tt.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const o = t.charCodeAt(u);
      if (this.treeIndex = Yf(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === St.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        Kf(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & Tt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === pe.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== St.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    const { result: u, decodeTree: n } = this, r = (n[u] & Tt.VALUE_LENGTH) >> 14;
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
    return this.emitCodePoint(u === 1 ? r[t] & ~Tt.VALUE_LENGTH : r[t + 1], n), u === 3 && this.emitCodePoint(r[t + 2], n), n;
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
      case he.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== St.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case he.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case he.NumericHex:
        return this.emitNumericEntity(0, 3);
      case he.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case he.EntityStart:
        return 0;
    }
  }
}
function js(e) {
  let t = "";
  const u = new Jf(e, (n) => t += jf(n));
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
function Yf(e, t, u, n) {
  const r = (t & Tt.BRANCH_LENGTH) >> 7, i = t & Tt.JUMP_TABLE;
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
const Xf = js($f);
js(qf);
function Gs(e, t = St.Legacy) {
  return Xf(e, t);
}
function Qf(e) {
  return Object.prototype.toString.call(e);
}
function Vr(e) {
  return Qf(e) === "[object String]";
}
const ed = Object.prototype.hasOwnProperty;
function td(e, t) {
  return ed.call(e, t);
}
function Fn(e) {
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
function Zs(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function Kr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function bn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const Ws = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, ud = /&([a-z#][a-z0-9]{1,31});/gi, nd = new RegExp(Ws.source + "|" + ud.source, "gi"), rd = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function id(e, t) {
  if (t.charCodeAt(0) === 35 && rd.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Kr(n) ? bn(n) : e;
  }
  const u = Gs(e);
  return u !== e ? u : e;
}
function od(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Ws, "$1");
}
function ru(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(nd, function(t, u, n) {
    return u || id(t, n);
  });
}
const sd = /[&<>"]/, ad = /[&<>"]/g, cd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function ld(e) {
  return cd[e];
}
function It(e) {
  return sd.test(e) ? e.replace(ad, ld) : e;
}
const fd = /[.?*+^$[\]\\(){}|-]/g;
function dd(e) {
  return e.replace(fd, "\\$&");
}
function Q(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function wu(e) {
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
function Au(e) {
  return Wr.test(e) || qs.test(e);
}
function Cu(e) {
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
function In(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const hd = { mdurl: Pf, ucmicro: Uf }, pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Zs,
  assign: Fn,
  escapeHtml: It,
  escapeRE: dd,
  fromCodePoint: bn,
  has: td,
  isMdAsciiPunct: Cu,
  isPunctChar: Au,
  isSpace: Q,
  isString: Vr,
  isValidEntityCode: Kr,
  isWhiteSpace: wu,
  lib: hd,
  normalizeReference: In,
  unescapeAll: ru,
  unescapeMd: od
}, Symbol.toStringTag, { value: "Module" }));
function bd(e, t, u) {
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
function gd(e, t, u) {
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
        return i.pos = r + 1, i.str = ru(e.slice(t + 1, r)), i.ok = !0, i;
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
  return t === r || o !== 0 || (i.str = ru(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function md(e, t, u, n) {
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
      return o.pos = i + 1, o.str += ru(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < u && i++, i++;
  }
  return o.can_continue = !0, o.str += ru(e.slice(t, i)), o;
}
const _d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: gd,
  parseLinkLabel: bd,
  parseLinkTitle: md
}, Symbol.toStringTag, { value: "Module" })), ft = {};
ft.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + It(i.content) + "</code>";
};
ft.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + It(e[t].content) + `</code></pre>
`;
};
ft.fence = function(e, t, u, n, r) {
  const i = e[t], o = i.info ? ru(i.info).trim() : "";
  let s = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    s = l[0], a = l.slice(2).join("");
  }
  let c;
  if (u.highlight ? c = u.highlight(i.content, s, a) || It(i.content) : c = It(i.content), c.indexOf("<pre") === 0)
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
ft.image = function(e, t, u, n, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, u, n), r.renderToken(e, t, u);
};
ft.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
ft.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
ft.text = function(e, t) {
  return It(e[t].content);
};
ft.html_block = function(e, t) {
  return e[t].content;
};
ft.html_inline = function(e, t) {
  return e[t].content;
};
function du() {
  this.rules = Fn({}, ft);
}
du.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + It(t.attrs[u][0]) + '="' + It(t.attrs[u][1]) + '"';
  return r;
};
du.prototype.renderToken = function(t, u, n) {
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
du.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t);
  }
  return n;
};
du.prototype.renderInlineAsText = function(e, t, u) {
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
du.prototype.render = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    s === "inline" ? n += this.renderInline(e[i].children, t, u) : typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t, u);
  }
  return n;
};
function Re() {
  this.__rules__ = [], this.__cache__ = null;
}
Re.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Re.prototype.__compile__ = function() {
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
Re.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
Re.prototype.before = function(e, t, u, n) {
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
Re.prototype.after = function(e, t, u, n) {
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
Re.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Re.prototype.enable = function(e, t) {
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
Re.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Re.prototype.disable = function(e, t) {
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
Re.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function Je(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Je.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
Je.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
Je.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
Je.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
Je.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function Vs(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
Vs.prototype.Token = Je;
const xd = /\r\n?|\n/g, Ed = /\0/g;
function yd(e) {
  let t;
  t = e.src.replace(xd, `
`), t = t.replace(Ed, "�"), e.src = t;
}
function vd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function kd(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function wd(e) {
  return /^<a[>\s]/i.test(e);
}
function Ad(e) {
  return /^<\/a\s*>/i.test(e);
}
function Cd(e) {
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
        if (s.type === "html_inline" && (wd(s.content) && i > 0 && i--, Ad(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const l = [];
          let f = s.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let p = 0; p < c.length; p++) {
            const d = c[p].url, g = e.md.normalizeLink(d);
            if (!e.md.validateLink(g))
              continue;
            let m = c[p].text;
            c[p].schema ? c[p].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
            const w = c[p].index;
            if (w > h) {
              const _ = new e.Token("text", "", 0);
              _.content = a.slice(h, w), _.level = f, l.push(_);
            }
            const v = new e.Token("link_open", "a", 1);
            v.attrs = [["href", g]], v.level = f++, v.markup = "linkify", v.info = "auto", l.push(v);
            const E = new e.Token("text", "", 0);
            E.content = m, E.level = f, l.push(E);
            const x = new e.Token("link_close", "a", -1);
            x.level = --f, x.markup = "linkify", x.info = "auto", l.push(x), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[u].children = r = Zs(r, o, l);
        }
      }
    }
}
const Ks = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Sd = /\((c|tm|r)\)/i, Dd = /\((c|tm|r)\)/ig, Td = {
  c: "©",
  r: "®",
  tm: "™"
};
function Rd(e, t) {
  return Td[t.toLowerCase()];
}
function Nd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Dd, Rd)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Od(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && Ks.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Fd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Sd.test(e.tokens[t].content) && Nd(e.tokens[t].children), Ks.test(e.tokens[t].content) && Od(e.tokens[t].children));
}
const Id = /['"]/, to = /['"]/g, uo = "’";
function Vu(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function Md(e, t) {
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
        to.lastIndex = a;
        const l = to.exec(s);
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
        let g = 32;
        if (a < c)
          g = s.charCodeAt(a);
        else
          for (u = r + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              g = e[u].content.charCodeAt(0);
              break;
            }
        const m = Cu(d) || Au(String.fromCharCode(d)), w = Cu(g) || Au(String.fromCharCode(g)), v = wu(d), E = wu(g);
        if (E ? f = !1 : w && (v || m || (f = !1)), v ? h = !1 : m && (E || w || (h = !1)), g === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = m, h = w), !f && !h) {
          p && (i.content = Vu(i.content, l.index, uo));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let x = n[u];
            if (n[u].level < o)
              break;
            if (x.single === p && n[u].level === o) {
              x = n[u];
              let _, A;
              p ? (_ = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (_ = t.md.options.quotes[0], A = t.md.options.quotes[1]), i.content = Vu(i.content, l.index, A), e[x.token].content = Vu(
                e[x.token].content,
                x.pos,
                _
              ), a += A.length - 1, x.token === r && (a += _.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = Vu(i.content, l.index, uo));
      }
  }
}
function Ld(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Id.test(e.tokens[t].content) || Md(e.tokens[t].children, e);
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
const nr = [
  ["normalize", yd],
  ["block", vd],
  ["inline", kd],
  ["linkify", Cd],
  ["replacements", Fd],
  ["smartquotes", Ld],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Bd]
];
function Jr() {
  this.ruler = new Re();
  for (let e = 0; e < nr.length; e++)
    this.ruler.push(nr[e][0], nr[e][1]);
}
Jr.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
Jr.prototype.State = Vs;
function dt(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (Q(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
dt.prototype.push = function(e, t, u) {
  const n = new Je(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
dt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
dt.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
dt.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!Q(n))
      break;
  }
  return t;
};
dt.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!Q(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
dt.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
dt.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
dt.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const i = new Array(u - t);
  for (let o = 0, s = t; s < u; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < u || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < n; ) {
      const h = this.src.charCodeAt(l);
      if (Q(h))
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
dt.prototype.Token = Je;
const Pd = 65536;
function rr(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function no(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), i = !1, o = 0, s = "";
  for (; n < u; )
    r === 124 && (i ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), i = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(o)), t;
}
function zd(e, t, u, n) {
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
  if (s !== 124 && s !== 45 && s !== 58 && !Q(s) || o === 45 && Q(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const x = e.src.charCodeAt(i);
    if (x !== 124 && x !== 45 && x !== 58 && !Q(x))
      return !1;
    i++;
  }
  let a = rr(e, t + 1), c = a.split("|");
  const l = [];
  for (let x = 0; x < c.length; x++) {
    const _ = c[x].trim();
    if (!_) {
      if (x === 0 || x === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(_))
      return !1;
    _.charCodeAt(_.length - 1) === 58 ? l.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = rr(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = no(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (n)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const p = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), g = [t, 0];
  d.map = g;
  const m = e.push("thead_open", "thead", 1);
  m.map = [t, t + 1];
  const w = e.push("tr_open", "tr", 1);
  w.map = [t, t + 1];
  for (let x = 0; x < c.length; x++) {
    const _ = e.push("th_open", "th", 1);
    l[x] && (_.attrs = [["style", "text-align:" + l[x]]]);
    const A = e.push("inline", "", 0);
    A.content = c[x].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let v, E = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let x = !1;
    for (let A = 0, C = p.length; A < C; A++)
      if (p[A](e, r, u, !0)) {
        x = !0;
        break;
      }
    if (x || (a = rr(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = no(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), E += f - c.length, E > Pd))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = v = [t + 2, 0];
    }
    const _ = e.push("tr_open", "tr", 1);
    _.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const C = e.push("td_open", "td", 1);
      l[A] && (C.attrs = [["style", "text-align:" + l[A]]]);
      const D = e.push("inline", "", 0);
      D.content = c[A] ? c[A].trim() : "", D.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return v && (e.push("tbody_close", "tbody", -1), v[1] = r), e.push("table_close", "table", -1), g[1] = r, e.parentType = h, e.line = r, !0;
}
function Ud(e, t, u) {
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
function $d(e, t, u, n) {
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
function qd(e, t, u, n) {
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
    const E = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !E) {
      let _ = e.sCount[d] + 1, A, C;
      e.src.charCodeAt(r) === 32 ? (r++, _++, C = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[d] + _) % 4 === 3 ? (r++, _++, C = !1) : C = !0) : A = !1;
      let D = _;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const M = e.src.charCodeAt(r);
        if (Q(M))
          M === 9 ? D += 4 - (D + e.bsCount[d] + (C ? 1 : 0)) % 4 : D++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (A ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = D - _, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let x = !1;
    for (let _ = 0, A = f.length; _ < A; _++)
      if (f[_](e, d, u, !0)) {
        x = !0;
        break;
      }
    if (x) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const g = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const w = [t, 0];
  m.map = w, e.md.block.tokenize(e, t, d);
  const v = e.push("blockquote_close", "blockquote", -1);
  v.markup = ">", e.lineMax = o, e.parentType = h, w[1] = e.line;
  for (let E = 0; E < l.length; E++)
    e.bMarks[E + t] = s[E], e.tShift[E + t] = l[E], e.sCount[E + t] = c[E], e.bsCount[E + t] = a[E];
  return e.blkIndent = g, !0;
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
    if (c !== o && !Q(c))
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
function ro(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!Q(i))
      return -1;
  }
  return n;
}
function io(e, t) {
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
  return r < n && (i = e.src.charCodeAt(r), !Q(i)) ? -1 : r;
}
function jd(e, t) {
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
  if ((p = io(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = ro(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(p) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(p - 1), g = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const m = [a, 0];
  s.map = m, s.markup = String.fromCharCode(d);
  let w = !1;
  const v = e.md.block.ruler.getRules("list"), E = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const x = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let _ = x;
    for (; i < r; ) {
      const Z = e.src.charCodeAt(i);
      if (Z === 9)
        _ += 4 - (_ + e.bsCount[a]) % 4;
      else if (Z === 32)
        _++;
      else
        break;
      i++;
    }
    const A = i;
    let C;
    A >= r ? C = 1 : C = _ - x, C > 4 && (C = 1);
    const D = x + C;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const M = [a, 0];
    s.map = M, f && (s.info = e.src.slice(o, p - 1));
    const j = e.tight, ee = e.tShift[a], fe = e.sCount[a], ae = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = D, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = _, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || w) && (c = !1), w = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = ae, e.tShift[a] = ee, e.sCount[a] = fe, e.tight = j, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, M[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let G = !1;
    for (let Z = 0, ne = v.length; Z < ne; Z++)
      if (v[Z](e, a, u, !0)) {
        G = !0;
        break;
      }
    if (G)
      break;
    if (f) {
      if (p = io(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = ro(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), m[1] = a, e.line = a, e.parentType = E, c && jd(e, g), !0;
}
function Zd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(v) {
    const E = e.lineMax;
    if (v >= E || e.isEmpty(v))
      return null;
    let x = !1;
    if (e.sCount[v] - e.blkIndent > 3 && (x = !0), e.sCount[v] < 0 && (x = !0), !x) {
      const C = e.md.block.ruler.getRules("reference"), D = e.parentType;
      e.parentType = "reference";
      let M = !1;
      for (let j = 0, ee = C.length; j < ee; j++)
        if (C[j](e, v, E, !0)) {
          M = !0;
          break;
        }
      if (e.parentType = D, M)
        return null;
    }
    const _ = e.bMarks[v] + e.tShift[v], A = e.eMarks[v];
    return e.src.slice(_, A + 1);
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
      const E = s(o);
      E !== null && (a += E, i = a.length, o++);
    } else if (v === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const E = s(o);
      E !== null && (a += E, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const v = a.charCodeAt(r);
    if (v === 10) {
      const E = s(o);
      E !== null && (a += E, i = a.length, o++);
    } else if (!Q(v)) break;
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
      const E = s(o);
      E !== null && (a += E, i = a.length, o++);
    } else if (!Q(v)) break;
  }
  let g = e.md.helpers.parseLinkTitle(a, r, i);
  for (; g.can_continue; ) {
    const v = s(o);
    if (v === null) break;
    a += v, r = i, i = a.length, o++, g = e.md.helpers.parseLinkTitle(a, r, i, g);
  }
  let m;
  for (r < i && d !== r && g.ok ? (m = g.str, r = g.pos) : (m = "", r = h, o = p); r < i; ) {
    const v = a.charCodeAt(r);
    if (!Q(v))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && m)
    for (m = "", r = h, o = p; r < i; ) {
      const v = a.charCodeAt(r);
      if (!Q(v))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const w = In(a.slice(1, c));
  return w ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[w] == "undefined" && (e.env.references[w] = { title: m, href: f }), e.line = o), !0) : !1;
}
const Wd = [
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
], Vd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Kd = "[^\"'=<>`\\x00-\\x20]+", Jd = "'[^']*'", Yd = '"[^"]*"', Xd = "(?:" + Kd + "|" + Jd + "|" + Yd + ")", Qd = "(?:\\s+" + Vd + "(?:\\s*=\\s*" + Xd + ")?)", Js = "<[A-Za-z][A-Za-z0-9\\-]*" + Qd + "*\\s*\\/?>", Ys = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", e1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", t1 = "<[?][\\s\\S]*?[?]>", u1 = "<![A-Za-z][^>]*>", n1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", r1 = new RegExp("^(?:" + Js + "|" + Ys + "|" + e1 + "|" + t1 + "|" + u1 + "|" + n1 + ")"), i1 = new RegExp("^(?:" + Js + "|" + Ys + ")"), Xt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Wd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(i1.source + "\\s*$"), /^$/, !1]
];
function o1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), s = 0;
  for (; s < Xt.length && !Xt[s][0].test(o); s++)
    ;
  if (s === Xt.length)
    return !1;
  if (n)
    return Xt[s][2];
  let a = t + 1;
  if (!Xt[s][1].test(o)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), Xt[s][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function s1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !Q(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && Q(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function a1(e, t, u) {
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
function c1(e, t, u) {
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
const Ku = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", zd, ["paragraph", "reference"]],
  ["code", Ud],
  ["fence", $d, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", qd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Hd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Gd, ["paragraph", "reference", "blockquote"]],
  ["reference", Zd],
  ["html_block", o1, ["paragraph", "reference", "blockquote"]],
  ["heading", s1, ["paragraph", "reference", "blockquote"]],
  ["lheading", a1],
  ["paragraph", c1]
];
function Mn() {
  this.ruler = new Re();
  for (let e = 0; e < Ku.length; e++)
    this.ruler.push(Ku[e][0], Ku[e][1], { alt: (Ku[e][2] || []).slice() });
}
Mn.prototype.tokenize = function(e, t, u) {
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
Mn.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
Mn.prototype.State = dt;
function Pu(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Pu.prototype.pushPending = function() {
  const e = new Je("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Pu.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new Je(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
Pu.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = Cu(r) || Au(String.fromCharCode(r)), c = Cu(s) || Au(String.fromCharCode(s)), l = wu(r), f = wu(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
Pu.prototype.Token = Je;
function l1(e) {
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
function f1(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !l1(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const d1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function h1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(d1);
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
function p1(e, t) {
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
  for (u++; u < r && Q(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const Yr = [];
for (let e = 0; e < 256; e++)
  Yr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Yr[e.charCodeAt(0)] = 1;
});
function b1(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!Q(r)); )
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
    r < 256 && Yr[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function g1(e, t) {
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
function m1(e, t) {
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
function oo(e, t) {
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
function _1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  oo(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && oo(e, t[n].delimiters);
}
const Xs = {
  tokenize: m1,
  postProcess: _1
};
function x1(e, t) {
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
function so(e, t) {
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
function E1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  so(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && so(e, t[n].delimiters);
}
const Qs = {
  tokenize: x1,
  postProcess: E1
};
function y1(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!Q(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!Q(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!Q(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[In(n)], !i)
      return e.pos = l, !1;
    o = i.href, s = i.title;
  }
  if (!t) {
    e.pos = h, e.posMax = p;
    const g = e.push("link_open", "a", 1), m = [["href", o]];
    g.attrs = m, s && m.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = f, !0;
}
function v1(e, t) {
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!Q(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!Q(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!Q(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[In(r)], !o)
      return e.pos = f, !1;
    l = o.href, a = o.title;
  }
  if (!t) {
    n = e.src.slice(p, d);
    const g = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      g
    );
    const m = e.push("image", "img", 0), w = [["src", l], ["alt", ""]];
    m.attrs = w, m.children = g, m.content = n, a && w.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const k1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, w1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function A1(e, t) {
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
  if (w1.test(i)) {
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
  if (k1.test(i)) {
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
function C1(e) {
  return /^<a[>\s]/i.test(e);
}
function S1(e) {
  return /^<\/a\s*>/i.test(e);
}
function D1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function T1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !D1(r))
    return !1;
  const i = e.src.slice(n).match(r1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], C1(o.content) && e.linkLevel++, S1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const R1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, N1 = /^&([a-z][a-z0-9]{1,31});/i;
function O1(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const i = e.src.slice(u).match(R1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = Kr(o) ? bn(o) : bn(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(N1);
    if (i) {
      const o = Gs(i[0]);
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
function ao(e) {
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
function F1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  ao(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && ao(t[n].delimiters);
}
function I1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const ir = [
  ["text", f1],
  ["linkify", h1],
  ["newline", p1],
  ["escape", b1],
  ["backticks", g1],
  ["strikethrough", Xs.tokenize],
  ["emphasis", Qs.tokenize],
  ["link", y1],
  ["image", v1],
  ["autolink", A1],
  ["html_inline", T1],
  ["entity", O1]
], or = [
  ["balance_pairs", F1],
  ["strikethrough", Xs.postProcess],
  ["emphasis", Qs.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", I1]
];
function zu() {
  this.ruler = new Re();
  for (let e = 0; e < ir.length; e++)
    this.ruler.push(ir[e][0], ir[e][1]);
  this.ruler2 = new Re();
  for (let e = 0; e < or.length; e++)
    this.ruler2.push(or[e][0], or[e][1]);
}
zu.prototype.skipToken = function(e) {
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
zu.prototype.tokenize = function(e) {
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
zu.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
zu.prototype.State = Pu;
function M1(e) {
  const t = {};
  e = e || {}, t.src_Any = Us.source, t.src_Cc = $s.source, t.src_Z = Hs.source, t.src_P = Wr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function wr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function Ln(e) {
  return Object.prototype.toString.call(e);
}
function L1(e) {
  return Ln(e) === "[object String]";
}
function B1(e) {
  return Ln(e) === "[object Object]";
}
function P1(e) {
  return Ln(e) === "[object RegExp]";
}
function co(e) {
  return Ln(e) === "[object Function]";
}
function z1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ea = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function U1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || ea.hasOwnProperty(u);
  }, !1);
}
const $1 = {
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
}, q1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", H1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function j1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function G1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function lo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function gn(e) {
  const t = e.re = M1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(q1), u.push(t.src_xn), t.src_tlds = u.join("|");
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
      P1(a.validate) ? c.validate = G1(a.validate) : co(a.validate) ? c.validate = a.validate : i(s, a), co(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = lo();
      return;
    }
    if (L1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: lo() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(z1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), j1(e);
}
function Z1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function Ar(e, t) {
  const u = new Z1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Me(e, t) {
  if (!(this instanceof Me))
    return new Me(e, t);
  t || U1(e) && (t = e, e = {}), this.__opts__ = wr({}, ea, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = wr({}, $1, e), this.__compiled__ = {}, this.__tlds__ = H1, this.__tlds_replaced__ = !1, this.re = {}, gn(this);
}
Me.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, gn(this), this;
};
Me.prototype.set = function(t) {
  return this.__opts__ = wr(this.__opts__, t), this;
};
Me.prototype.test = function(t) {
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
Me.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Me.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
Me.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Ar(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(Ar(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Me.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, Ar(this, 0)) : null;
};
Me.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), gn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, gn(this), this);
};
Me.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Me.prototype.onCompile = function() {
};
const Qt = 2147483647, it = 36, Xr = 1, Su = 26, W1 = 38, V1 = 700, ta = 72, ua = 128, na = "-", K1 = /^xn--/, J1 = /[^\0-\x7F]/, Y1 = /[\x2E\u3002\uFF0E\uFF61]/g, X1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, sr = it - Xr, ot = Math.floor, ar = String.fromCharCode;
function Ct(e) {
  throw new RangeError(X1[e]);
}
function Q1(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function ra(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(Y1, ".");
  const r = e.split("."), i = Q1(r, t).join(".");
  return n + i;
}
function ia(e) {
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
const eh = (e) => String.fromCodePoint(...e), th = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : it;
}, fo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, oa = function(e, t, u) {
  let n = 0;
  for (e = u ? ot(e / V1) : e >> 1, e += ot(e / t); e > sr * Su >> 1; n += it)
    e = ot(e / sr);
  return ot(n + (sr + 1) * e / (e + W1));
}, sa = function(e) {
  const t = [], u = e.length;
  let n = 0, r = ua, i = ta, o = e.lastIndexOf(na);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && Ct("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = it; ; f += it) {
      s >= u && Ct("invalid-input");
      const h = th(e.charCodeAt(s++));
      h >= it && Ct("invalid-input"), h > ot((Qt - n) / l) && Ct("overflow"), n += h * l;
      const p = f <= i ? Xr : f >= i + Su ? Su : f - i;
      if (h < p)
        break;
      const d = it - p;
      l > ot(Qt / d) && Ct("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = oa(n - a, c, a == 0), ot(n / c) > Qt - r && Ct("overflow"), r += ot(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, aa = function(e) {
  const t = [];
  e = ia(e);
  const u = e.length;
  let n = ua, r = 0, i = ta;
  for (const a of e)
    a < 128 && t.push(ar(a));
  const o = t.length;
  let s = o;
  for (o && t.push(na); s < u; ) {
    let a = Qt;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > ot((Qt - r) / c) && Ct("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > Qt && Ct("overflow"), l === n) {
        let f = r;
        for (let h = it; ; h += it) {
          const p = h <= i ? Xr : h >= i + Su ? Su : h - i;
          if (f < p)
            break;
          const d = f - p, g = it - p;
          t.push(
            ar(fo(p + d % g, 0))
          ), f = ot(d / g);
        }
        t.push(ar(fo(f, 0))), i = oa(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, uh = function(e) {
  return ra(e, function(t) {
    return K1.test(t) ? sa(t.slice(4).toLowerCase()) : t;
  });
}, nh = function(e) {
  return ra(e, function(t) {
    return J1.test(t) ? "xn--" + aa(t) : t;
  });
}, ca = {
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
    decode: ia,
    encode: eh
  },
  decode: sa,
  encode: aa,
  toASCII: nh,
  toUnicode: uh
}, rh = {
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
}, oh = {
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
}, sh = {
  default: rh,
  zero: ih,
  commonmark: oh
}, ah = /^(vbscript|javascript|file|data):/, ch = /^data:image\/(gif|png|jpeg|webp);/;
function lh(e) {
  const t = e.trim().toLowerCase();
  return ah.test(t) ? ch.test(t) : !0;
}
const la = ["http:", "https:", "mailto:"];
function fh(e) {
  const t = Zr(e, !0);
  if (t.hostname && (!t.protocol || la.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ca.toASCII(t.hostname);
    } catch (u) {
    }
  return Bu(Gr(t));
}
function dh(e) {
  const t = Zr(e, !0);
  if (t.hostname && (!t.protocol || la.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ca.toUnicode(t.hostname);
    } catch (u) {
    }
  return nu(Gr(t), nu.defaultChars + "%");
}
function ze(e, t) {
  if (!(this instanceof ze))
    return new ze(e, t);
  t || Vr(e) || (t = e || {}, e = "default"), this.inline = new zu(), this.block = new Mn(), this.core = new Jr(), this.renderer = new du(), this.linkify = new Me(), this.validateLink = lh, this.normalizeLink = fh, this.normalizeLinkText = dh, this.utils = pd, this.helpers = Fn({}, _d), this.options = {}, this.configure(e), t && this.set(t);
}
ze.prototype.set = function(e) {
  return Fn(this.options, e), this;
};
ze.prototype.configure = function(e) {
  const t = this;
  if (Vr(e)) {
    const u = e;
    if (e = sh[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
ze.prototype.enable = function(e, t) {
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
ze.prototype.disable = function(e, t) {
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
ze.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
ze.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
ze.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
ze.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
ze.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function hh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var cr, ho;
function ph() {
  if (ho) return cr;
  ho = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((k) => {
      const T = b[k], B = typeof T;
      (B === "object" || B === "function") && !Object.isFrozen(T) && e(T);
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
    const T = /* @__PURE__ */ Object.create(null);
    for (const B in b)
      T[B] = b[B];
    return k.forEach(function(B) {
      for (const ie in B)
        T[ie] = B[ie];
    }), /** @type {T} */
    T;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: k }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const T = b.split(".");
      return [
        `${k}${T.shift()}`,
        ...T.map((B, ie) => `${B}${"_".repeat(ie + 1)}`)
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
    constructor(k, T) {
      this.buffer = "", this.classPrefix = T.classPrefix, k.walk(this);
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
      const T = o(
        k.scope,
        { prefix: this.classPrefix }
      );
      this.span(T);
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
      const T = a({ scope: k });
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
    walk(k) {
      return this.constructor._walk(k, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(k, T) {
      return typeof T == "string" ? k.addText(T) : T.children && (k.openNode(T), T.children.forEach((B) => this._walk(k, B)), k.closeNode(T)), k;
    }
    /**
     * @param {Node} node
     */
    static _collapse(k) {
      typeof k != "string" && k.children && (k.children.every((T) => typeof T == "string") ? k.children = [k.children.join("")] : k.children.forEach((T) => {
        c._collapse(T);
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
    __addSublanguage(k, T) {
      const B = k.root;
      T && (B.scope = `language:${T}`), this.add(B);
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
    return g("(?=", b, ")");
  }
  function p(b) {
    return g("(?:", b, ")*");
  }
  function d(b) {
    return g("(?:", b, ")?");
  }
  function g(...b) {
    return b.map((T) => f(T)).join("");
  }
  function m(b) {
    const k = b[b.length - 1];
    return typeof k == "object" && k.constructor === Object ? (b.splice(b.length - 1, 1), k) : {};
  }
  function w(...b) {
    return "(" + (m(b).capture ? "" : "?:") + b.map((B) => f(B)).join("|") + ")";
  }
  function v(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function E(b, k) {
    const T = b && b.exec(k);
    return T && T.index === 0;
  }
  const x = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function _(b, { joinWith: k }) {
    let T = 0;
    return b.map((B) => {
      T += 1;
      const ie = T;
      let oe = f(B), O = "";
      for (; oe.length > 0; ) {
        const N = x.exec(oe);
        if (!N) {
          O += oe;
          break;
        }
        O += oe.substring(0, N.index), oe = oe.substring(N.index + N[0].length), N[0][0] === "\\" && N[1] ? O += "\\" + String(Number(N[1]) + ie) : (O += N[0], N[0] === "(" && T++);
      }
      return O;
    }).map((B) => `(${B})`).join(k);
  }
  const A = /\b\B/, C = "[a-zA-Z]\\w*", D = "[a-zA-Z_]\\w*", M = "\\b\\d+(\\.\\d+)?", j = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ee = "\\b(0b[01]+)", fe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", ae = (b = {}) => {
    const k = /^#![ ]*\//;
    return b.binary && (b.begin = g(
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
      "on:begin": (T, B) => {
        T.index !== 0 && B.ignoreMatch();
      }
    }, b);
  }, G = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, Z = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [G]
  }, ne = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [G]
  }, He = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, q = function(b, k, T = {}) {
    const B = n(
      {
        scope: "comment",
        begin: b,
        end: k,
        contains: []
      },
      T
    );
    B.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const ie = w(
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
    return B.contains.push(
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
        begin: g(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          ie,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), B;
  }, be = q("//", "$"), ye = q("/\\*", "\\*/"), je = q("#", "$"), ht = {
    scope: "number",
    begin: M,
    relevance: 0
  }, Mt = {
    scope: "number",
    begin: j,
    relevance: 0
  }, va = {
    scope: "number",
    begin: ee,
    relevance: 0
  }, ka = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      G,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [G]
      }
    ]
  }, wa = {
    scope: "title",
    begin: C,
    relevance: 0
  }, Aa = {
    scope: "title",
    begin: D,
    relevance: 0
  }, Ca = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + D,
    relevance: 0
  };
  var Uu = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: Z,
    BACKSLASH_ESCAPE: G,
    BINARY_NUMBER_MODE: va,
    BINARY_NUMBER_RE: ee,
    COMMENT: q,
    C_BLOCK_COMMENT_MODE: ye,
    C_LINE_COMMENT_MODE: be,
    C_NUMBER_MODE: Mt,
    C_NUMBER_RE: j,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (k, T) => {
            T.data._beginMatch = k[1];
          },
          /** @type {ModeCallback} */
          "on:end": (k, T) => {
            T.data._beginMatch !== k[1] && T.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: je,
    IDENT_RE: C,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Ca,
    NUMBER_MODE: ht,
    NUMBER_RE: M,
    PHRASAL_WORDS_MODE: He,
    QUOTE_STRING_MODE: ne,
    REGEXP_MODE: ka,
    RE_STARTERS_RE: fe,
    SHEBANG: ae,
    TITLE_MODE: wa,
    UNDERSCORE_IDENT_RE: D,
    UNDERSCORE_TITLE_MODE: Aa
  });
  function Sa(b, k) {
    b.input[b.index - 1] === "." && k.ignoreMatch();
  }
  function Da(b, k) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function Ta(b, k) {
    k && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = Sa, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Ra(b, k) {
    Array.isArray(b.illegal) && (b.illegal = w(...b.illegal));
  }
  function Na(b, k) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function Oa(b, k) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Fa = (b, k) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const T = Object.assign({}, b);
    Object.keys(b).forEach((B) => {
      delete b[B];
    }), b.keywords = T.keywords, b.begin = g(T.beforeMatch, h(T.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(T, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete T.beforeMatch;
  }, Ia = [
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
  ], Ma = "keyword";
  function Qr(b, k, T = Ma) {
    const B = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? ie(T, b.split(" ")) : Array.isArray(b) ? ie(T, b) : Object.keys(b).forEach(function(oe) {
      Object.assign(
        B,
        Qr(b[oe], k, oe)
      );
    }), B;
    function ie(oe, O) {
      k && (O = O.map((N) => N.toLowerCase())), O.forEach(function(N) {
        const L = N.split("|");
        B[L[0]] = [oe, La(L[0], L[1])];
      });
    }
  }
  function La(b, k) {
    return k ? Number(k) : Ba(b) ? 0 : 1;
  }
  function Ba(b) {
    return Ia.includes(b.toLowerCase());
  }
  const ei = {}, Lt = (b) => {
    console.error(b);
  }, ti = (b, ...k) => {
    console.log(`WARN: ${b}`, ...k);
  }, Wt = (b, k) => {
    ei[`${b}/${k}`] || (console.log(`Deprecated as of ${b}. ${k}`), ei[`${b}/${k}`] = !0);
  }, $u = new Error();
  function ui(b, k, { key: T }) {
    let B = 0;
    const ie = b[T], oe = {}, O = {};
    for (let N = 1; N <= k.length; N++)
      O[N + B] = ie[N], oe[N + B] = !0, B += v(k[N - 1]);
    b[T] = O, b[T]._emit = oe, b[T]._multi = !0;
  }
  function Pa(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw Lt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), $u;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw Lt("beginScope must be object"), $u;
      ui(b, b.begin, { key: "beginScope" }), b.begin = _(b.begin, { joinWith: "" });
    }
  }
  function za(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw Lt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), $u;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw Lt("endScope must be object"), $u;
      ui(b, b.end, { key: "endScope" }), b.end = _(b.end, { joinWith: "" });
    }
  }
  function Ua(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function $a(b) {
    Ua(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Pa(b), za(b);
  }
  function qa(b) {
    function k(O, N) {
      return new RegExp(
        f(O),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (N ? "g" : "")
      );
    }
    class T {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(N, L) {
        L.position = this.position++, this.matchIndexes[this.matchAt] = L, this.regexes.push([L, N]), this.matchAt += v(N) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const N = this.regexes.map((L) => L[1]);
        this.matcherRe = k(_(N, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(N) {
        this.matcherRe.lastIndex = this.lastIndex;
        const L = this.matcherRe.exec(N);
        if (!L)
          return null;
        const de = L.findIndex((hu, zn) => zn > 0 && hu !== void 0), se = this.matchIndexes[de];
        return L.splice(0, de), Object.assign(L, se);
      }
    }
    class B {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(N) {
        if (this.multiRegexes[N]) return this.multiRegexes[N];
        const L = new T();
        return this.rules.slice(N).forEach(([de, se]) => L.addRule(de, se)), L.compile(), this.multiRegexes[N] = L, L;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(N, L) {
        this.rules.push([N, L]), L.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(N) {
        const L = this.getMatcher(this.regexIndex);
        L.lastIndex = this.lastIndex;
        let de = L.exec(N);
        if (this.resumingScanAtSamePosition() && !(de && de.index === this.lastIndex)) {
          const se = this.getMatcher(0);
          se.lastIndex = this.lastIndex + 1, de = se.exec(N);
        }
        return de && (this.regexIndex += de.position + 1, this.regexIndex === this.count && this.considerAll()), de;
      }
    }
    function ie(O) {
      const N = new B();
      return O.contains.forEach((L) => N.addRule(L.begin, { rule: L, type: "begin" })), O.terminatorEnd && N.addRule(O.terminatorEnd, { type: "end" }), O.illegal && N.addRule(O.illegal, { type: "illegal" }), N;
    }
    function oe(O, N) {
      const L = (
        /** @type CompiledMode */
        O
      );
      if (O.isCompiled) return L;
      [
        Da,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Na,
        $a,
        Fa
      ].forEach((se) => se(O, N)), b.compilerExtensions.forEach((se) => se(O, N)), O.__beforeBegin = null, [
        Ta,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Ra,
        // default to 1 relevance if not specified
        Oa
      ].forEach((se) => se(O, N)), O.isCompiled = !0;
      let de = null;
      return typeof O.keywords == "object" && O.keywords.$pattern && (O.keywords = Object.assign({}, O.keywords), de = O.keywords.$pattern, delete O.keywords.$pattern), de = de || /\w+/, O.keywords && (O.keywords = Qr(O.keywords, b.case_insensitive)), L.keywordPatternRe = k(de, !0), N && (O.begin || (O.begin = /\B|\b/), L.beginRe = k(L.begin), !O.end && !O.endsWithParent && (O.end = /\B|\b/), O.end && (L.endRe = k(L.end)), L.terminatorEnd = f(L.end) || "", O.endsWithParent && N.terminatorEnd && (L.terminatorEnd += (O.end ? "|" : "") + N.terminatorEnd)), O.illegal && (L.illegalRe = k(
        /** @type {RegExp | string} */
        O.illegal
      )), O.contains || (O.contains = []), O.contains = [].concat(...O.contains.map(function(se) {
        return Ha(se === "self" ? O : se);
      })), O.contains.forEach(function(se) {
        oe(
          /** @type Mode */
          se,
          L
        );
      }), O.starts && oe(O.starts, N), L.matcher = ie(L), L;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), oe(
      /** @type Mode */
      b
    );
  }
  function ni(b) {
    return b ? b.endsWithParent || ni(b.starts) : !1;
  }
  function Ha(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(k) {
      return n(b, { variants: null }, k);
    })), b.cachedVariants ? b.cachedVariants : ni(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var ja = "11.11.1";
  class Ga extends Error {
    constructor(k, T) {
      super(k), this.name = "HTMLInjectionError", this.html = T;
    }
  }
  const Pn = u, ri = n, ii = Symbol("nomatch"), Za = 7, oi = function(b) {
    const k = /* @__PURE__ */ Object.create(null), T = /* @__PURE__ */ Object.create(null), B = [];
    let ie = !0;
    const oe = "Could not find the language '{}', did you forget to load/include a language module?", O = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function L(S) {
      return N.noHighlightRe.test(S);
    }
    function de(S) {
      let I = S.className + " ";
      I += S.parentNode ? S.parentNode.className : "";
      const H = N.languageDetectRe.exec(I);
      if (H) {
        const J = yt(H[1]);
        return J || (ti(oe.replace("{}", H[1])), ti("Falling back to no-highlight mode for this block.", S)), J ? H[1] : "no-highlight";
      }
      return I.split(/\s+/).find((J) => L(J) || yt(J));
    }
    function se(S, I, H) {
      let J = "", ce = "";
      typeof I == "object" ? (J = S, H = I.ignoreIllegals, ce = I.language) : (Wt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Wt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ce = S, J = I), H === void 0 && (H = !0);
      const Ge = {
        code: J,
        language: ce
      };
      Hu("before:highlight", Ge);
      const vt = Ge.result ? Ge.result : hu(Ge.language, Ge.code, H);
      return vt.code = Ge.code, Hu("after:highlight", vt), vt;
    }
    function hu(S, I, H, J) {
      const ce = /* @__PURE__ */ Object.create(null);
      function Ge(R, F) {
        return R.keywords[F];
      }
      function vt() {
        if (!P.keywords) {
          ge.addText(Y);
          return;
        }
        let R = 0;
        P.keywordPatternRe.lastIndex = 0;
        let F = P.keywordPatternRe.exec(Y), $ = "";
        for (; F; ) {
          $ += Y.substring(R, F.index);
          const W = Xe.case_insensitive ? F[0].toLowerCase() : F[0], xe = Ge(P, W);
          if (xe) {
            const [pt, cc] = xe;
            if (ge.addText($), $ = "", ce[W] = (ce[W] || 0) + 1, ce[W] <= Za && (Zu += cc), pt.startsWith("_"))
              $ += F[0];
            else {
              const lc = Xe.classNameAliases[pt] || pt;
              Ye(F[0], lc);
            }
          } else
            $ += F[0];
          R = P.keywordPatternRe.lastIndex, F = P.keywordPatternRe.exec(Y);
        }
        $ += Y.substring(R), ge.addText($);
      }
      function ju() {
        if (Y === "") return;
        let R = null;
        if (typeof P.subLanguage == "string") {
          if (!k[P.subLanguage]) {
            ge.addText(Y);
            return;
          }
          R = hu(P.subLanguage, Y, !0, pi[P.subLanguage]), pi[P.subLanguage] = /** @type {CompiledMode} */
          R._top;
        } else
          R = Un(Y, P.subLanguage.length ? P.subLanguage : null);
        P.relevance > 0 && (Zu += R.relevance), ge.__addSublanguage(R._emitter, R.language);
      }
      function Ne() {
        P.subLanguage != null ? ju() : vt(), Y = "";
      }
      function Ye(R, F) {
        R !== "" && (ge.startScope(F), ge.addText(R), ge.endScope());
      }
      function li(R, F) {
        let $ = 1;
        const W = F.length - 1;
        for (; $ <= W; ) {
          if (!R._emit[$]) {
            $++;
            continue;
          }
          const xe = Xe.classNameAliases[R[$]] || R[$], pt = F[$];
          xe ? Ye(pt, xe) : (Y = pt, vt(), Y = ""), $++;
        }
      }
      function fi(R, F) {
        return R.scope && typeof R.scope == "string" && ge.openNode(Xe.classNameAliases[R.scope] || R.scope), R.beginScope && (R.beginScope._wrap ? (Ye(Y, Xe.classNameAliases[R.beginScope._wrap] || R.beginScope._wrap), Y = "") : R.beginScope._multi && (li(R.beginScope, F), Y = "")), P = Object.create(R, { parent: { value: P } }), P;
      }
      function di(R, F, $) {
        let W = E(R.endRe, $);
        if (W) {
          if (R["on:end"]) {
            const xe = new t(R);
            R["on:end"](F, xe), xe.isMatchIgnored && (W = !1);
          }
          if (W) {
            for (; R.endsParent && R.parent; )
              R = R.parent;
            return R;
          }
        }
        if (R.endsWithParent)
          return di(R.parent, F, $);
      }
      function rc(R) {
        return P.matcher.regexIndex === 0 ? (Y += R[0], 1) : (jn = !0, 0);
      }
      function ic(R) {
        const F = R[0], $ = R.rule, W = new t($), xe = [$.__beforeBegin, $["on:begin"]];
        for (const pt of xe)
          if (pt && (pt(R, W), W.isMatchIgnored))
            return rc(F);
        return $.skip ? Y += F : ($.excludeBegin && (Y += F), Ne(), !$.returnBegin && !$.excludeBegin && (Y = F)), fi($, R), $.returnBegin ? 0 : F.length;
      }
      function oc(R) {
        const F = R[0], $ = I.substring(R.index), W = di(P, R, $);
        if (!W)
          return ii;
        const xe = P;
        P.endScope && P.endScope._wrap ? (Ne(), Ye(F, P.endScope._wrap)) : P.endScope && P.endScope._multi ? (Ne(), li(P.endScope, R)) : xe.skip ? Y += F : (xe.returnEnd || xe.excludeEnd || (Y += F), Ne(), xe.excludeEnd && (Y = F));
        do
          P.scope && ge.closeNode(), !P.skip && !P.subLanguage && (Zu += P.relevance), P = P.parent;
        while (P !== W.parent);
        return W.starts && fi(W.starts, R), xe.returnEnd ? 0 : F.length;
      }
      function sc() {
        const R = [];
        for (let F = P; F !== Xe; F = F.parent)
          F.scope && R.unshift(F.scope);
        R.forEach((F) => ge.openNode(F));
      }
      let Gu = {};
      function hi(R, F) {
        const $ = F && F[0];
        if (Y += R, $ == null)
          return Ne(), 0;
        if (Gu.type === "begin" && F.type === "end" && Gu.index === F.index && $ === "") {
          if (Y += I.slice(F.index, F.index + 1), !ie) {
            const W = new Error(`0 width match regex (${S})`);
            throw W.languageName = S, W.badRule = Gu.rule, W;
          }
          return 1;
        }
        if (Gu = F, F.type === "begin")
          return ic(F);
        if (F.type === "illegal" && !H) {
          const W = new Error('Illegal lexeme "' + $ + '" for mode "' + (P.scope || "<unnamed>") + '"');
          throw W.mode = P, W;
        } else if (F.type === "end") {
          const W = oc(F);
          if (W !== ii)
            return W;
        }
        if (F.type === "illegal" && $ === "")
          return Y += `
`, 1;
        if (Hn > 1e5 && Hn > F.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return Y += $, $.length;
      }
      const Xe = yt(S);
      if (!Xe)
        throw Lt(oe.replace("{}", S)), new Error('Unknown language: "' + S + '"');
      const ac = qa(Xe);
      let qn = "", P = J || ac;
      const pi = {}, ge = new N.__emitter(N);
      sc();
      let Y = "", Zu = 0, Bt = 0, Hn = 0, jn = !1;
      try {
        if (Xe.__emitTokens)
          Xe.__emitTokens(I, ge);
        else {
          for (P.matcher.considerAll(); ; ) {
            Hn++, jn ? jn = !1 : P.matcher.considerAll(), P.matcher.lastIndex = Bt;
            const R = P.matcher.exec(I);
            if (!R) break;
            const F = I.substring(Bt, R.index), $ = hi(F, R);
            Bt = R.index + $;
          }
          hi(I.substring(Bt));
        }
        return ge.finalize(), qn = ge.toHTML(), {
          language: S,
          value: qn,
          relevance: Zu,
          illegal: !1,
          _emitter: ge,
          _top: P
        };
      } catch (R) {
        if (R.message && R.message.includes("Illegal"))
          return {
            language: S,
            value: Pn(I),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: R.message,
              index: Bt,
              context: I.slice(Bt - 100, Bt + 100),
              mode: R.mode,
              resultSoFar: qn
            },
            _emitter: ge
          };
        if (ie)
          return {
            language: S,
            value: Pn(I),
            illegal: !1,
            relevance: 0,
            errorRaised: R,
            _emitter: ge,
            _top: P
          };
        throw R;
      }
    }
    function zn(S) {
      const I = {
        value: Pn(S),
        illegal: !1,
        relevance: 0,
        _top: O,
        _emitter: new N.__emitter(N)
      };
      return I._emitter.addText(S), I;
    }
    function Un(S, I) {
      I = I || N.languages || Object.keys(k);
      const H = zn(S), J = I.filter(yt).filter(ci).map(
        (Ne) => hu(Ne, S, !1)
      );
      J.unshift(H);
      const ce = J.sort((Ne, Ye) => {
        if (Ne.relevance !== Ye.relevance) return Ye.relevance - Ne.relevance;
        if (Ne.language && Ye.language) {
          if (yt(Ne.language).supersetOf === Ye.language)
            return 1;
          if (yt(Ye.language).supersetOf === Ne.language)
            return -1;
        }
        return 0;
      }), [Ge, vt] = ce, ju = Ge;
      return ju.secondBest = vt, ju;
    }
    function Wa(S, I, H) {
      const J = I && T[I] || H;
      S.classList.add("hljs"), S.classList.add(`language-${J}`);
    }
    function $n(S) {
      let I = null;
      const H = de(S);
      if (L(H)) return;
      if (Hu(
        "before:highlightElement",
        { el: S, language: H }
      ), S.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", S);
        return;
      }
      if (S.children.length > 0 && (N.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(S)), N.throwUnescapedHTML))
        throw new Ga(
          "One of your code blocks includes unescaped HTML.",
          S.innerHTML
        );
      I = S;
      const J = I.textContent, ce = H ? se(J, { language: H, ignoreIllegals: !0 }) : Un(J);
      S.innerHTML = ce.value, S.dataset.highlighted = "yes", Wa(S, H, ce.language), S.result = {
        language: ce.language,
        // TODO: remove with version 11.0
        re: ce.relevance,
        relevance: ce.relevance
      }, ce.secondBest && (S.secondBest = {
        language: ce.secondBest.language,
        relevance: ce.secondBest.relevance
      }), Hu("after:highlightElement", { el: S, result: ce, text: J });
    }
    function Va(S) {
      N = ri(N, S);
    }
    const Ka = () => {
      qu(), Wt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ja() {
      qu(), Wt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let si = !1;
    function qu() {
      function S() {
        qu();
      }
      if (document.readyState === "loading") {
        si || window.addEventListener("DOMContentLoaded", S, !1), si = !0;
        return;
      }
      document.querySelectorAll(N.cssSelector).forEach($n);
    }
    function Ya(S, I) {
      let H = null;
      try {
        H = I(b);
      } catch (J) {
        if (Lt("Language definition for '{}' could not be registered.".replace("{}", S)), ie)
          Lt(J);
        else
          throw J;
        H = O;
      }
      H.name || (H.name = S), k[S] = H, H.rawDefinition = I.bind(null, b), H.aliases && ai(H.aliases, { languageName: S });
    }
    function Xa(S) {
      delete k[S];
      for (const I of Object.keys(T))
        T[I] === S && delete T[I];
    }
    function Qa() {
      return Object.keys(k);
    }
    function yt(S) {
      return S = (S || "").toLowerCase(), k[S] || k[T[S]];
    }
    function ai(S, { languageName: I }) {
      typeof S == "string" && (S = [S]), S.forEach((H) => {
        T[H.toLowerCase()] = I;
      });
    }
    function ci(S) {
      const I = yt(S);
      return I && !I.disableAutodetect;
    }
    function ec(S) {
      S["before:highlightBlock"] && !S["before:highlightElement"] && (S["before:highlightElement"] = (I) => {
        S["before:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      }), S["after:highlightBlock"] && !S["after:highlightElement"] && (S["after:highlightElement"] = (I) => {
        S["after:highlightBlock"](
          Object.assign({ block: I.el }, I)
        );
      });
    }
    function tc(S) {
      ec(S), B.push(S);
    }
    function uc(S) {
      const I = B.indexOf(S);
      I !== -1 && B.splice(I, 1);
    }
    function Hu(S, I) {
      const H = S;
      B.forEach(function(J) {
        J[H] && J[H](I);
      });
    }
    function nc(S) {
      return Wt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Wt("10.7.0", "Please use highlightElement now."), $n(S);
    }
    Object.assign(b, {
      highlight: se,
      highlightAuto: Un,
      highlightAll: qu,
      highlightElement: $n,
      // TODO: Remove with v12 API
      highlightBlock: nc,
      configure: Va,
      initHighlighting: Ka,
      initHighlightingOnLoad: Ja,
      registerLanguage: Ya,
      unregisterLanguage: Xa,
      listLanguages: Qa,
      getLanguage: yt,
      registerAliases: ai,
      autoDetection: ci,
      inherit: ri,
      addPlugin: tc,
      removePlugin: uc
    }), b.debugMode = function() {
      ie = !1;
    }, b.safeMode = function() {
      ie = !0;
    }, b.versionString = ja, b.regex = {
      concat: g,
      lookahead: h,
      either: w,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const S in Uu)
      typeof Uu[S] == "object" && e(Uu[S]);
    return Object.assign(b, Uu), b;
  }, Vt = oi({});
  return Vt.newInstance = () => oi({}), cr = Vt, Vt.HighlightJS = Vt, Vt.default = Vt, cr;
}
var bh = /* @__PURE__ */ ph();
const Ue = /* @__PURE__ */ hh(bh), po = "[A-Za-z$_][0-9A-Za-z$_]*", gh = [
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
], mh = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], fa = [
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
], da = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], ha = [
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
], _h = [
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
], xh = [].concat(
  ha,
  fa,
  da
);
function Eh(e) {
  const t = e.regex, u = (q, { after: be }) => {
    const ye = "</" + q[0].slice(1);
    return q.input.indexOf(ye, be) !== -1;
  }, n = po, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, be) => {
      const ye = q[0].length + q.index, je = q.input[ye];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        je === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        je === ","
      ) {
        be.ignoreMatch();
        return;
      }
      je === ">" && (u(q, { after: ye }) || be.ignoreMatch());
      let ht;
      const Mt = q.input.substring(ye);
      if (ht = Mt.match(/^\s*=/)) {
        be.ignoreMatch();
        return;
      }
      if ((ht = Mt.match(/^\s+extends\s+/)) && ht.index === 0) {
        be.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: po,
    keyword: gh,
    literal: mh,
    built_in: xh,
    "variable.language": _h
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
  }, g = {
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
  }, m = {
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
  }, E = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    g,
    m,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = E.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(E)
  });
  const x = [].concat(v, h.contains), _ = x.concat([
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
    contains: _
  }, C = {
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
  }, D = {
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
        ...fa,
        ...da
      ]
    }
  }, M = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, j = {
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
  }, ee = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function fe(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const ae = {
    match: t.concat(
      /\b/,
      fe([
        ...ha,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Z = {
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
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", He = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(ne)
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
    exports: { PARAMS_CONTAINS: _, CLASS_REFERENCE: D },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      M,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      g,
      m,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      D,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      He,
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
            begin: ne,
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
                    contains: _
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
      j,
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
      G,
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
      ae,
      ee,
      C,
      Z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const mn = "[A-Za-z$_][0-9A-Za-z$_]*", pa = [
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
], ba = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ga = [
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
], ma = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], _a = [
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
], xa = [
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
], Ea = [].concat(
  _a,
  ga,
  ma
);
function yh(e) {
  const t = e.regex, u = (q, { after: be }) => {
    const ye = "</" + q[0].slice(1);
    return q.input.indexOf(ye, be) !== -1;
  }, n = mn, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (q, be) => {
      const ye = q[0].length + q.index, je = q.input[ye];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        je === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        je === ","
      ) {
        be.ignoreMatch();
        return;
      }
      je === ">" && (u(q, { after: ye }) || be.ignoreMatch());
      let ht;
      const Mt = q.input.substring(ye);
      if (ht = Mt.match(/^\s*=/)) {
        be.ignoreMatch();
        return;
      }
      if ((ht = Mt.match(/^\s+extends\s+/)) && ht.index === 0) {
        be.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: mn,
    keyword: pa,
    literal: ba,
    built_in: Ea,
    "variable.language": xa
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
  }, g = {
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
  }, m = {
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
  }, E = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    g,
    m,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = E.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(E)
  });
  const x = [].concat(v, h.contains), _ = x.concat([
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
    contains: _
  }, C = {
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
  }, D = {
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
        ...ga,
        ...ma
      ]
    }
  }, M = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, j = {
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
  }, ee = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function fe(q) {
    return t.concat("(?!", q.join("|"), ")");
  }
  const ae = {
    match: t.concat(
      /\b/,
      fe([
        ..._a,
        "super",
        "import"
      ].map((q) => `${q}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, G = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Z = {
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
  }, ne = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", He = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(ne)
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
    exports: { PARAMS_CONTAINS: _, CLASS_REFERENCE: D },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      M,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      g,
      m,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      D,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      He,
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
            begin: ne,
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
                    contains: _
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
      j,
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
      G,
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
      ae,
      ee,
      C,
      Z,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function vh(e) {
  const t = e.regex, u = yh(e), n = mn, r = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], i = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, o = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: r
    },
    contains: [u.exports.CLASS_REFERENCE]
  }, s = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, a = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], c = {
    $pattern: mn,
    keyword: pa.concat(a),
    literal: ba,
    built_in: Ea.concat(r),
    "variable.language": xa
  }, l = {
    className: "meta",
    begin: "@" + n
  }, f = (g, m, w) => {
    const v = g.contains.findIndex((E) => E.label === m);
    if (v === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(v, 1, w);
  };
  Object.assign(u.keywords, c), u.exports.PARAMS_CONTAINS.push(l);
  const h = u.contains.find((g) => g.scope === "attr"), p = Object.assign(
    {},
    h,
    { match: t.concat(n, t.lookahead(/\s*\?:/)) }
  );
  u.exports.PARAMS_CONTAINS.push([
    u.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    h,
    // highlight the params key
    p
    // Added for optional property assignment highlighting
  ]), u.contains = u.contains.concat([
    l,
    i,
    o,
    p
    // Added for optional property assignment highlighting
  ]), f(u, "shebang", e.SHEBANG()), f(u, "use_strict", s);
  const d = u.contains.find((g) => g.label === "func.def");
  return d.relevance = 0, Object.assign(u, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), u;
}
function kh(e) {
  const t = e.regex, u = new RegExp("[\\p{XID_Start}_]\\p{XID_Continue}*", "u"), n = [
    "and",
    "as",
    "assert",
    "async",
    "await",
    "break",
    "case",
    "class",
    "continue",
    "def",
    "del",
    "elif",
    "else",
    "except",
    "finally",
    "for",
    "from",
    "global",
    "if",
    "import",
    "in",
    "is",
    "lambda",
    "match",
    "nonlocal|10",
    "not",
    "or",
    "pass",
    "raise",
    "return",
    "try",
    "while",
    "with",
    "yield"
  ], s = {
    $pattern: /[A-Za-z]\w+|__\w+__/,
    keyword: n,
    built_in: [
      "__import__",
      "abs",
      "all",
      "any",
      "ascii",
      "bin",
      "bool",
      "breakpoint",
      "bytearray",
      "bytes",
      "callable",
      "chr",
      "classmethod",
      "compile",
      "complex",
      "delattr",
      "dict",
      "dir",
      "divmod",
      "enumerate",
      "eval",
      "exec",
      "filter",
      "float",
      "format",
      "frozenset",
      "getattr",
      "globals",
      "hasattr",
      "hash",
      "help",
      "hex",
      "id",
      "input",
      "int",
      "isinstance",
      "issubclass",
      "iter",
      "len",
      "list",
      "locals",
      "map",
      "max",
      "memoryview",
      "min",
      "next",
      "object",
      "oct",
      "open",
      "ord",
      "pow",
      "print",
      "property",
      "range",
      "repr",
      "reversed",
      "round",
      "set",
      "setattr",
      "slice",
      "sorted",
      "staticmethod",
      "str",
      "sum",
      "super",
      "tuple",
      "type",
      "vars",
      "zip"
    ],
    literal: [
      "__debug__",
      "Ellipsis",
      "False",
      "None",
      "NotImplemented",
      "True"
    ],
    type: [
      "Any",
      "Callable",
      "Coroutine",
      "Dict",
      "List",
      "Literal",
      "Generic",
      "Optional",
      "Sequence",
      "Set",
      "Tuple",
      "Type",
      "Union"
    ]
  }, a = {
    className: "meta",
    begin: /^(>>>|\.\.\.) /
  }, c = {
    className: "subst",
    begin: /\{/,
    end: /\}/,
    keywords: s,
    illegal: /#/
  }, l = {
    begin: /\{\{/,
    relevance: 0
  }, f = {
    className: "string",
    contains: [e.BACKSLASH_ESCAPE],
    variants: [
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([uU]|[bB]|[rR]|[bB][rR]|[rR][bB])?"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a
        ],
        relevance: 10
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'''/,
        end: /'''/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          l,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"""/,
        end: /"""/,
        contains: [
          e.BACKSLASH_ESCAPE,
          a,
          l,
          c
        ]
      },
      {
        begin: /([uU]|[rR])'/,
        end: /'/,
        relevance: 10
      },
      {
        begin: /([uU]|[rR])"/,
        end: /"/,
        relevance: 10
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])'/,
        end: /'/
      },
      {
        begin: /([bB]|[bB][rR]|[rR][bB])"/,
        end: /"/
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])'/,
        end: /'/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          c
        ]
      },
      {
        begin: /([fF][rR]|[rR][fF]|[fF])"/,
        end: /"/,
        contains: [
          e.BACKSLASH_ESCAPE,
          l,
          c
        ]
      },
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  }, h = "[0-9](_?[0-9])*", p = `(\\b(${h}))?\\.(${h})|\\b(${h})\\.`, d = `\\b|${n.join("|")}`, g = {
    className: "number",
    relevance: 0,
    variants: [
      // exponentfloat, pointfloat
      // https://docs.python.org/3.9/reference/lexical_analysis.html#floating-point-literals
      // optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      // Note: no leading \b because floats can start with a decimal point
      // and we don't want to mishandle e.g. `fn(.5)`,
      // no trailing \b for pointfloat because it can end with a decimal point
      // and we don't want to mishandle e.g. `0..hex()`; this should be safe
      // because both MUST contain a decimal point and so cannot be confused with
      // the interior part of an identifier
      {
        begin: `(\\b(${h})|(${p}))[eE][+-]?(${h})[jJ]?(?=${d})`
      },
      {
        begin: `(${p})[jJ]?`
      },
      // decinteger, bininteger, octinteger, hexinteger
      // https://docs.python.org/3.9/reference/lexical_analysis.html#integer-literals
      // optionally "long" in Python 2
      // https://docs.python.org/2.7/reference/lexical_analysis.html#integer-and-long-integer-literals
      // decinteger is optionally imaginary
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b([1-9](_?[0-9])*|0+(_?0)*)[lLjJ]?(?=${d})`
      },
      {
        begin: `\\b0[bB](_?[01])+[lL]?(?=${d})`
      },
      {
        begin: `\\b0[oO](_?[0-7])+[lL]?(?=${d})`
      },
      {
        begin: `\\b0[xX](_?[0-9a-fA-F])+[lL]?(?=${d})`
      },
      // imagnumber (digitpart-based)
      // https://docs.python.org/3.9/reference/lexical_analysis.html#imaginary-literals
      {
        begin: `\\b(${h})[jJ](?=${d})`
      }
    ]
  }, m = {
    className: "comment",
    begin: t.lookahead(/# type:/),
    end: /$/,
    keywords: s,
    contains: [
      {
        // prevent keywords from coloring `type`
        begin: /# type:/
      },
      // comment within a datatype comment includes no keywords
      {
        begin: /#/,
        end: /\b\B/,
        endsWithParent: !0
      }
    ]
  }, w = {
    className: "params",
    variants: [
      // Exclude params in functions without params
      {
        className: "",
        begin: /\(\s*\)/,
        skip: !0
      },
      {
        begin: /\(/,
        end: /\)/,
        excludeBegin: !0,
        excludeEnd: !0,
        keywords: s,
        contains: [
          "self",
          a,
          g,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    f,
    g,
    a
  ], {
    name: "Python",
    aliases: [
      "py",
      "gyp",
      "ipython"
    ],
    unicodeRegex: !0,
    keywords: s,
    illegal: /(<\/|\?)|=>/,
    contains: [
      a,
      g,
      {
        // very common convention
        scope: "variable.language",
        match: /\bself\b/
      },
      {
        // eat "if" prior to string so that it won't accidentally be
        // labeled as an f-string
        beginKeywords: "if",
        relevance: 0
      },
      { match: /\bor\b/, scope: "keyword" },
      f,
      m,
      e.HASH_COMMENT_MODE,
      {
        match: [
          /\bdef/,
          /\s+/,
          u
        ],
        scope: {
          1: "keyword",
          3: "title.function"
        },
        contains: [w]
      },
      {
        variants: [
          {
            match: [
              /\bclass/,
              /\s+/,
              u,
              /\s*/,
              /\(\s*/,
              u,
              /\s*\)/
            ]
          },
          {
            match: [
              /\bclass/,
              /\s+/,
              u
            ]
          }
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          6: "title.class.inherited"
        }
      },
      {
        className: "meta",
        begin: /^[\t ]*@/,
        end: /(?=#)|$/,
        contains: [
          g,
          w,
          f
        ]
      }
    ]
  };
}
function wh(e) {
  const t = e.regex, u = {}, n = {
    begin: /\$\{/,
    end: /\}/,
    contains: [
      "self",
      {
        begin: /:-/,
        contains: [u]
      }
      // default values
    ]
  };
  Object.assign(u, {
    className: "variable",
    variants: [
      { begin: t.concat(
        /\$[\w\d#@][\w\d_]*/,
        // negative look-ahead tries to avoid matching patterns that are not
        // Perl at all like $ident$, @ident@, etc.
        "(?![\\w\\d])(?![$])"
      ) },
      n
    ]
  });
  const r = {
    className: "subst",
    begin: /\$\(/,
    end: /\)/,
    contains: [e.BACKSLASH_ESCAPE]
  }, i = e.inherit(
    e.COMMENT(),
    {
      match: [
        /(^|\s)/,
        /#.*$/
      ],
      scope: {
        2: "comment"
      }
    }
  ), o = {
    begin: /<<-?\s*(?=\w+)/,
    starts: { contains: [
      e.END_SAME_AS_BEGIN({
        begin: /(\w+)/,
        end: /(\w+)/,
        className: "string"
      })
    ] }
  }, s = {
    className: "string",
    begin: /"/,
    end: /"/,
    contains: [
      e.BACKSLASH_ESCAPE,
      u,
      r
    ]
  };
  r.contains.push(s);
  const a = {
    match: /\\"/
  }, c = {
    className: "string",
    begin: /'/,
    end: /'/
  }, l = {
    match: /\\'/
  }, f = {
    begin: /\$?\(\(/,
    end: /\)\)/,
    contains: [
      {
        begin: /\d+#[0-9a-f]+/,
        className: "number"
      },
      e.NUMBER_MODE,
      u
    ]
  }, h = [
    "fish",
    "bash",
    "zsh",
    "sh",
    "csh",
    "ksh",
    "tcsh",
    "dash",
    "scsh"
  ], p = e.SHEBANG({
    binary: `(${h.join("|")})`,
    relevance: 10
  }), d = {
    className: "function",
    begin: /\w[\w\d_]*\s*\(\s*\)\s*\{/,
    returnBegin: !0,
    contains: [e.inherit(e.TITLE_MODE, { begin: /\w[\w\d_]*/ })],
    relevance: 0
  }, g = [
    "if",
    "then",
    "else",
    "elif",
    "fi",
    "time",
    "for",
    "while",
    "until",
    "in",
    "do",
    "done",
    "case",
    "esac",
    "coproc",
    "function",
    "select"
  ], m = [
    "true",
    "false"
  ], w = { match: /(\/[a-z._-]+)+/ }, v = [
    "break",
    "cd",
    "continue",
    "eval",
    "exec",
    "exit",
    "export",
    "getopts",
    "hash",
    "pwd",
    "readonly",
    "return",
    "shift",
    "test",
    "times",
    "trap",
    "umask",
    "unset"
  ], E = [
    "alias",
    "bind",
    "builtin",
    "caller",
    "command",
    "declare",
    "echo",
    "enable",
    "help",
    "let",
    "local",
    "logout",
    "mapfile",
    "printf",
    "read",
    "readarray",
    "source",
    "sudo",
    "type",
    "typeset",
    "ulimit",
    "unalias"
  ], x = [
    "autoload",
    "bg",
    "bindkey",
    "bye",
    "cap",
    "chdir",
    "clone",
    "comparguments",
    "compcall",
    "compctl",
    "compdescribe",
    "compfiles",
    "compgroups",
    "compquote",
    "comptags",
    "comptry",
    "compvalues",
    "dirs",
    "disable",
    "disown",
    "echotc",
    "echoti",
    "emulate",
    "fc",
    "fg",
    "float",
    "functions",
    "getcap",
    "getln",
    "history",
    "integer",
    "jobs",
    "kill",
    "limit",
    "log",
    "noglob",
    "popd",
    "print",
    "pushd",
    "pushln",
    "rehash",
    "sched",
    "setcap",
    "setopt",
    "stat",
    "suspend",
    "ttyctl",
    "unfunction",
    "unhash",
    "unlimit",
    "unsetopt",
    "vared",
    "wait",
    "whence",
    "where",
    "which",
    "zcompile",
    "zformat",
    "zftp",
    "zle",
    "zmodload",
    "zparseopts",
    "zprof",
    "zpty",
    "zregexparse",
    "zsocket",
    "zstyle",
    "ztcp"
  ], _ = [
    "chcon",
    "chgrp",
    "chown",
    "chmod",
    "cp",
    "dd",
    "df",
    "dir",
    "dircolors",
    "ln",
    "ls",
    "mkdir",
    "mkfifo",
    "mknod",
    "mktemp",
    "mv",
    "realpath",
    "rm",
    "rmdir",
    "shred",
    "sync",
    "touch",
    "truncate",
    "vdir",
    "b2sum",
    "base32",
    "base64",
    "cat",
    "cksum",
    "comm",
    "csplit",
    "cut",
    "expand",
    "fmt",
    "fold",
    "head",
    "join",
    "md5sum",
    "nl",
    "numfmt",
    "od",
    "paste",
    "ptx",
    "pr",
    "sha1sum",
    "sha224sum",
    "sha256sum",
    "sha384sum",
    "sha512sum",
    "shuf",
    "sort",
    "split",
    "sum",
    "tac",
    "tail",
    "tr",
    "tsort",
    "unexpand",
    "uniq",
    "wc",
    "arch",
    "basename",
    "chroot",
    "date",
    "dirname",
    "du",
    "echo",
    "env",
    "expr",
    "factor",
    // "false", // keyword literal already
    "groups",
    "hostid",
    "id",
    "link",
    "logname",
    "nice",
    "nohup",
    "nproc",
    "pathchk",
    "pinky",
    "printenv",
    "printf",
    "pwd",
    "readlink",
    "runcon",
    "seq",
    "sleep",
    "stat",
    "stdbuf",
    "stty",
    "tee",
    "test",
    "timeout",
    // "true", // keyword literal already
    "tty",
    "uname",
    "unlink",
    "uptime",
    "users",
    "who",
    "whoami",
    "yes"
  ];
  return {
    name: "Bash",
    aliases: [
      "sh",
      "zsh"
    ],
    keywords: {
      $pattern: /\b[a-z][a-z0-9._-]+\b/,
      keyword: g,
      literal: m,
      built_in: [
        ...v,
        ...E,
        // Shell modifiers
        "set",
        "shopt",
        ...x,
        ..._
      ]
    },
    contains: [
      p,
      // to catch known shells and boost relevancy
      e.SHEBANG(),
      // to catch unknown shells but still highlight the shebang
      d,
      f,
      i,
      o,
      w,
      s,
      a,
      c,
      l,
      u
    ]
  };
}
function Ah(e) {
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
function ya(e) {
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
}), Sh = [
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
], Dh = [
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
  ...Sh,
  ...Dh
], Rh = [
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
].sort().reverse(), Nh = [
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
function Ih(e) {
  const t = e.regex, u = Ch(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
          { begin: ":(" + Nh.join("|") + ")" },
          { begin: ":(:)?(" + Oh.join("|") + ")" }
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
              attribute: Rh.join(" ")
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
        begin: "\\b(" + Th.join("|") + ")\\b"
      }
    ]
  };
}
function Mh(e) {
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
function Lh(e) {
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
    "on:begin": (G, Z) => {
      Z.data._beginMatch = G[1] || G[2];
    },
    "on:end": (G, Z) => {
      Z.data._beginMatch !== G[1] && Z.ignoreMatch();
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
  }, g = {
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
  }, m = [
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
    literal: ((G) => {
      const Z = [];
      return G.forEach((ne) => {
        Z.push(ne), ne.toLowerCase() === ne ? Z.push(ne.toUpperCase()) : Z.push(ne.toLowerCase());
      }), Z;
    })(m),
    built_in: v
  }, _ = (G) => G.map((Z) => Z.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", _(v).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, C = t.concat(n, "\\b(?!\\()"), D = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        C
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
        C
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
  ] }, M = {
    scope: "attr",
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, j = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: x,
    contains: [
      M,
      o,
      D,
      e.C_BLOCK_COMMENT_MODE,
      d,
      g,
      A
    ]
  }, ee = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", _(w).join("\\b|"), "|", _(v).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [j]
  };
  j.contains.push(ee);
  const fe = [
    M,
    D,
    e.C_BLOCK_COMMENT_MODE,
    d,
    g,
    A
  ], ae = {
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
      literal: m,
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
          literal: m,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...fe
        ]
      },
      ...fe,
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
      ae,
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
      ee,
      D,
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
              ae,
              o,
              D,
              e.C_BLOCK_COMMENT_MODE,
              d,
              g
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
      g
    ]
  };
}
Ue.registerLanguage("javascript", Eh);
Ue.registerLanguage("typescript", vh);
Ue.registerLanguage("python", kh);
Ue.registerLanguage("bash", wh);
Ue.registerLanguage("json", Ah);
Ue.registerLanguage("xml", ya);
Ue.registerLanguage("html", ya);
Ue.registerLanguage("css", Ih);
Ue.registerLanguage("markdown", Mh);
Ue.registerLanguage("php", Lh);
const Bn = new ze({
  html: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, t) {
    if (t && Ue.getLanguage(t))
      try {
        return Ue.highlight(e, { language: t }).value;
      } catch (u) {
      }
    return "";
  }
});
Bn.renderer.rules.fence = function(e, t, u, n, r) {
  const i = e[t];
  return `<pre><code class="hljs language-${i.info.trim()}">${i.content}</code></pre>`;
};
Bn.renderer.rules.code_inline = function(e, t, u, n, r) {
  return `<code class="inline-code">${e[t].content}</code>`;
};
Bn.renderer.rules.link_open = function(e, t, u, n, r) {
  var a;
  return `<a href="${((a = (e[t].attrs || []).find(([c]) => c === "href")) == null ? void 0 : a[1]) || ""}" target="_blank" rel="noopener noreferrer" class="markdown-link">`;
};
function Bh(e) {
  return Bn.render(e);
}
var Ph = /* @__PURE__ */ Le('<span class="svelte-eh54ff">U</span>'), zh = /* @__PURE__ */ Le('<img alt="Bot Icon" class="avatar-image svelte-eh54ff">'), Uh = /* @__PURE__ */ Le("<div><!></div>"), $h = /* @__PURE__ */ Le('<div class="message-text svelte-eh54ff"> </div>'), qh = /* @__PURE__ */ Le('<div class="thinking svelte-eh54ff"><span class="svelte-eh54ff">Thinking</span> <div class="dots-container svelte-eh54ff"><span class="dot svelte-eh54ff"></span> <span class="dot svelte-eh54ff"></span> <span class="dot svelte-eh54ff"></span></div></div>'), Hh = /* @__PURE__ */ Le("<div><!></div>"), jh = /* @__PURE__ */ Le('<div><div><!> <div class="bubble-container svelte-eh54ff"><div><!></div> <div> </div></div></div></div>');
const Gh = {
  hash: "svelte-eh54ff",
  code: `.message-container.svelte-eh54ff {display:flex;padding:0 0.5rem;}.user-message.svelte-eh54ff {justify-content:flex-end;}.bot-message.svelte-eh54ff {justify-content:flex-start;}.message-content.svelte-eh54ff {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.user-content.svelte-eh54ff {flex-direction:row-reverse;}.bot-content.svelte-eh54ff {flex-direction:row;}.avatar.svelte-eh54ff {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);}.avatar.icon-url.svelte-eh54ff {background-color:transparent;overflow:hidden;}.avatar-image.svelte-eh54ff {width:100%;height:100%;object-fit:contain;}.bubble-container.svelte-eh54ff {max-width:100%;}.message-bubble.svelte-eh54ff {padding:0.625rem 0.875rem;border-radius:1.25rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);position:relative;line-height:1.5;display:flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);}.user-bubble.svelte-eh54ff {border-top-right-radius:0.25rem;}.bot-bubble.svelte-eh54ff {border-top-left-radius:0.25rem;border:1px solid #e5e7eb;}.message-text.svelte-eh54ff {white-space:pre-wrap;word-break:break-word;font-size:0.95rem;margin:0;padding:0;}

  @keyframes svelte-eh54ff-bounce {
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
  }.timestamp.svelte-eh54ff {font-size:0.75rem;color:#6b7280; /* text-gray-500 */margin-top:0.25rem;}.user-timestamp.svelte-eh54ff {text-align:right;}.bot-timestamp.svelte-eh54ff {text-align:left;}

  /* Global styles for markdown content */.markdown-content {font-size:0.95rem;line-height:1.5;color:inherit;margin:0;padding:0;}.markdown-content p {margin:0;padding:0;color:inherit;}.markdown-content p + p {margin-top:0.75rem;}.markdown-content pre {margin:0.75rem 0;padding:0.75rem;border-radius:0.5rem;background-color:#f8fafc !important;overflow-x:auto;border:1px solid #e5e7eb;}.markdown-content pre code {color:#1f2937; /* text-gray-800 */font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code.inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;font-size:0.875em;color:#dc2626;border:1px solid #e5e7eb;}.markdown-content ul,
  .markdown-content ol {margin:0.75rem 0;padding-left:1.5rem;}.markdown-content li {margin-bottom:0.5rem;}.markdown-content a {color:#2563eb;text-decoration:none;cursor:pointer;}.markdown-content a:hover {text-decoration:underline;}.markdown-content blockquote {margin:0.75rem 0;padding-left:1rem;border-left:4px solid #e5e7eb;color:#6b7280;}.streaming.svelte-eh54ff {
    animation: svelte-eh54ff-pulse 2s infinite ease-in-out;}

  @keyframes svelte-eh54ff-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-eh54ff {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.dots-container.svelte-eh54ff {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-eh54ff {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-eh54ff-bounce 1.4s infinite ease-in-out both;}.dot.svelte-eh54ff:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-eh54ff:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-eh54ff {
    animation: svelte-eh54ff-typing 0.5s ease-in-out;}

  @keyframes svelte-eh54ff-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
};
function Zh(e, t) {
  su(t, !0), An(e, Gh);
  const u = bt(t, "isStreaming", 3, !1), n = bt(t, "hasStarted", 3, !1), r = {
    MessageSquare: hn,
    MessageSquareMore: Bs,
    Monitor: Ps,
    LifeBuoy: Ms,
    HelpCircle: Os,
    Menu: Ls,
    Info: Is,
    FileText: Fs
  }, i = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), o = /* @__PURE__ */ et(() => !i && t.botIcon && r[t.botIcon] ? r[t.botIcon] : hn), s = (x) => x.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), a = /* @__PURE__ */ et(() => t.type === "bot" ? Bh(t.content) : t.content);
  var c = jh(), l = te(c), f = te(l);
  {
    var h = (x) => {
      var _ = Uh(), A = te(_);
      {
        var C = (M) => {
          var j = Ph();
          X(M, j);
        }, D = (M, j) => {
          {
            var ee = (ae) => {
              var G = zh();
              Fe(() => vu(G, "src", t.botIcon)), X(ae, G);
            }, fe = (ae, G) => {
              {
                var Z = (ne) => {
                  var He = qe(), q = $e(He);
                  S0(q, () => z(o), (be, ye) => {
                    ye(be, { size: 20, strokeWidth: 2, color: "white" });
                  }), X(ne, He);
                };
                ut(
                  ae,
                  (ne) => {
                    z(o) && ne(Z);
                  },
                  G
                );
              }
            };
            ut(
              M,
              (ae) => {
                i ? ae(ee) : ae(fe, !1);
              },
              j
            );
          }
        };
        ut(A, (M) => {
          t.type === "user" ? M(C) : M(D, !1);
        });
      }
      Fe(() => {
        var M;
        At(_, 1, `avatar ${i && t.type === "bot" ? "icon-url" : ""}`, "svelte-eh54ff"), yu(_, `background-color: ${(M = t.type === "user" || i ? "transparent" : t.colorHex) != null ? M : ""}`);
      }), X(x, _);
    };
    ut(f, (x) => {
      t.botIcon && (t.type === "user" || t.type === "bot") && x(h);
    });
  }
  var p = st(f, 2), d = te(p), g = te(d);
  {
    var m = (x) => {
      var _ = $h(), A = te(_);
      Fe(() => ln(A, t.content)), X(x, _);
    }, w = (x, _) => {
      {
        var A = (D) => {
          var M = qh();
          X(D, M);
        }, C = (D) => {
          var M = Hh(), j = te(M);
          C0(j, () => z(a)), Fe(() => At(M, 1, `markdown-content ${u() ? "typing-animation" : ""}`, "svelte-eh54ff")), X(D, M);
        };
        ut(
          x,
          (D) => {
            u() && !n() ? D(A) : D(C, !1);
          },
          _
        );
      }
    };
    ut(g, (x) => {
      t.type === "user" ? x(m) : x(w, !1);
    });
  }
  var v = st(d, 2), E = te(v);
  Fe(
    (x) => {
      var _;
      At(c, 1, `message-container ${t.type === "user" ? "user-message" : "bot-message"}`, "svelte-eh54ff"), At(l, 1, `message-content ${t.type === "user" ? "user-content" : "bot-content"}`, "svelte-eh54ff"), At(d, 1, `message-bubble ${t.type === "user" ? "user-bubble" : "bot-bubble"} ${u() ? "streaming" : ""}`, "svelte-eh54ff"), yu(d, `--message-color: ${(_ = t.type === "user" ? t.lighterColorHex : "white") != null ? _ : ""}; --text-color: ${t.type === "user" ? "white" : "#1f2937"}`), At(v, 1, `timestamp ${t.type === "user" ? "user-timestamp" : "bot-timestamp"}`, "svelte-eh54ff"), ln(E, x);
    },
    [() => s(t.timestamp)]
  ), X(e, c), au();
}
var Wh = /* @__PURE__ */ Le('<div class="loading-more svelte-srk2u0"><div class="loading-spinner svelte-srk2u0"></div> <span>Loading previous messages...</span></div>'), Vh = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, Kh = /* @__PURE__ */ Le('<div class="chat-container svelte-srk2u0"><div class="messages-container svelte-srk2u0"><!> <!></div> <form class="input-container svelte-srk2u0"><textarea placeholder="Type your message..." class="message-input svelte-srk2u0" rows="1"></textarea></form></div>');
const Jh = {
  hash: "svelte-srk2u0",
  code: `.chat-container.svelte-srk2u0 {height:100%;display:flex;flex-direction:column;overflow:hidden;}.messages-container.svelte-srk2u0 {flex:1;overflow-y:auto;padding:0.75rem 0.75rem 0;background-color:#f9fafb;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.input-container.svelte-srk2u0 {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:white;padding:0.75rem;width:100%;box-sizing:border-box;position:relative;}.message-input.svelte-srk2u0 {width:100%;padding:0.5rem 0.75rem;border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-srk2u0:focus {outline:none;border-color:#3b82f6;}.message-input.svelte-srk2u0:disabled {background-color:#f9fafb;cursor:not-allowed;}.loading-more.svelte-srk2u0 {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-srk2u0 {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-srk2u0-spin 1s linear infinite;}

  @keyframes svelte-srk2u0-spin {
    to {
      transform: rotate(360deg);
    }
  }`
};
function Yh(e, t) {
  su(t, !0), An(e, Jh);
  const [u, n] = z0(), r = () => P0(rt, "$chatStore", u);
  let i = /* @__PURE__ */ tt(""), o, s, a = /* @__PURE__ */ tt(!1), c = /* @__PURE__ */ et(() => r().messages), l = /* @__PURE__ */ et(() => r().isLoading), f = /* @__PURE__ */ et(() => r().hasMore), h = /* @__PURE__ */ et(() => r().currentChatId);
  const p = () => me(null, null, function* () {
    if (!o || z(a) || !z(f)) return;
    const { scrollTop: C } = o;
    C === 0 && z(h) && (ke(a, !0), yield Ns(z(h), r().currentPage + 1), ke(a, !1));
  });
  rs(() => {
  });
  const d = () => {
    if (s) {
      s.style.height = "auto";
      const D = Math.min(s.scrollHeight, 120);
      s.style.height = `${D}px`;
    }
  };
  rn(() => {
    d();
  });
  const g = () => me(null, null, function* () {
    if (!z(i).trim()) return;
    const C = z(i);
    ke(i, ""), d(), yield wf(C, t.settings);
  });
  var m = Kh(), w = te(m), v = te(w);
  {
    var E = (C) => {
      var D = Wh();
      X(C, D);
    };
    ut(v, (C) => {
      z(a) && C(E);
    });
  }
  var x = st(v, 2);
  Jo(x, 17, () => z(c), (C) => C.id, (C, D) => {
    const M = /* @__PURE__ */ et(() => z(D).role === "human" ? "user" : "bot"), j = /* @__PURE__ */ et(() => new Date(z(D).created_at)), ee = /* @__PURE__ */ et(() => z(D).id === "streaming"), fe = /* @__PURE__ */ et(() => z(D).id === "streaming" && z(D).message.length > 0);
    Zh(C, {
      get content() {
        return z(D).message;
      },
      get type() {
        return z(M);
      },
      get timestamp() {
        return z(j);
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
        return z(ee);
      },
      get hasStarted() {
        return z(fe);
      }
    });
  }), Oi(w, (C) => o = C, () => o);
  var _ = st(w, 2), A = te(_);
  A.__input = d, A.__keydown = [Vh, g], Oi(A, (C) => s = C, () => s), Fe(() => A.disabled = z(l)), wi("scroll", w, p), wi("submit", _, (C) => {
    C.preventDefault(), g();
  }), I0(A, () => z(i), (C) => ke(i, C)), X(e, m), au(), n();
}
wn(["input", "keydown"]);
const _e = [];
for (let e = 0; e < 256; ++e)
  _e.push((e + 256).toString(16).slice(1));
function Xh(e, t = 0) {
  return (_e[e[t + 0]] + _e[e[t + 1]] + _e[e[t + 2]] + _e[e[t + 3]] + "-" + _e[e[t + 4]] + _e[e[t + 5]] + "-" + _e[e[t + 6]] + _e[e[t + 7]] + "-" + _e[e[t + 8]] + _e[e[t + 9]] + "-" + _e[e[t + 10]] + _e[e[t + 11]] + _e[e[t + 12]] + _e[e[t + 13]] + _e[e[t + 14]] + _e[e[t + 15]]).toLowerCase();
}
let lr;
const Qh = new Uint8Array(16);
function ep() {
  if (!lr) {
    if (typeof crypto == "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    lr = crypto.getRandomValues.bind(crypto);
  }
  return lr(Qh);
}
const tp = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), bo = { randomUUID: tp };
function up(e, t, u) {
  var r, i, o;
  if (bo.randomUUID && !e)
    return bo.randomUUID();
  e = e || {};
  const n = (o = (i = e.random) != null ? i : (r = e.rng) == null ? void 0 : r.call(e)) != null ? o : ep();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Xh(n);
}
class np {
  constructor(t) {
    kt(this, "settings");
    this.settings = t;
  }
  initialize() {
    return me(this, null, function* () {
      yield this.initializeUserId(), yield this.initializeChat();
    });
  }
  initializeUserId() {
    return me(this, null, function* () {
      if (!localStorage.getItem("userId")) {
        const u = up();
        localStorage.setItem("userId", u);
      }
    });
  }
  initializeChat() {
    return me(this, null, function* () {
      const t = localStorage.getItem("currentChatId");
      t ? yield Ns(t) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && rt.update((t) => Ae(le({}, t), {
      messages: [
        {
          id: Date.now().toString(),
          chatId: "",
          role: "ai",
          message: this.settings.first_message,
          formattedMessage: this.settings.first_message,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    }));
  }
  resetChat() {
    rt.update((t) => Ae(le({}, t), {
      messages: [],
      filters: {
        sources: [],
        dateRange: null
      }
    })), localStorage.removeItem("currentChatId"), this.settings.first_message && this.addInitialMessage();
  }
}
const rp = (e, t) => {
  t.resetChat();
}, ip = () => {
  const e = new CustomEvent("close-widget");
  document.dispatchEvent(e);
};
var op = /* @__PURE__ */ Le('<main class="svelte-88yc6i"><header class="main-header svelte-88yc6i"><div class="title svelte-88yc6i"> </div> <div class="button-group svelte-88yc6i"><button class="icon-button svelte-88yc6i" aria-label="Refresh chat"><!></button> <button class="icon-button mobile-only svelte-88yc6i" aria-label="Close chat"><!></button></div></header> <div class="content svelte-88yc6i"><!></div></main>');
const sp = {
  hash: "svelte-88yc6i",
  code: `main.svelte-88yc6i {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-88yc6i {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.main-header.svelte-88yc6i {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.title.svelte-88yc6i {font-size:1.125rem;font-weight:600;line-height:1.25;}.button-group.svelte-88yc6i {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-88yc6i {padding:0.5rem;border-radius:9999px;background:transparent;border:none;color:white;cursor:pointer;}.icon-button.svelte-88yc6i:hover {background-color:rgba(255, 255, 255, 0.1);}.content.svelte-88yc6i {flex:1;overflow:hidden;}.mobile-only.svelte-88yc6i {display:none;}

  @media screen and (max-width: 640px) {.mobile-only.svelte-88yc6i {display:block;}
  }`
};
function ap(e, t) {
  su(t, !0), An(e, sp);
  const u = new np(t.settings);
  rs(() => me(null, null, function* () {
    yield u.initialize();
  }));
  var n = op(), r = te(n), i = te(r), o = te(i), s = st(i, 2), a = te(s);
  a.__click = [rp, u];
  var c = te(a);
  Sf(c, { class: "icon" });
  var l = st(a, 2);
  l.__click = [ip];
  var f = te(l);
  zs(f, { class: "icon" });
  var h = st(r, 2), p = te(h);
  Yh(p, {
    get settings() {
      return t.settings;
    }
  }), Fe(() => {
    var d;
    yu(r, `background-color: ${(d = t.settings.color_hex) != null ? d : ""};`), ln(o, t.settings.bot_name);
  }), X(e, n), au();
}
wn(["click"]);
const cp = "html,body{height:100%;margin:0;overflow:hidden}";
var lp = /* @__PURE__ */ Le('<span class="button-text svelte-sql7dr"> </span>'), fp = /* @__PURE__ */ Le('<img alt="Chat Icon" class="icon-image svelte-sql7dr">'), dp = /* @__PURE__ */ Le('<button id="chat-button"><!> <div class="chat-icon svelte-sql7dr"><!></div> <div class="close-icon svelte-sql7dr"><!></div></button>');
const hp = {
  hash: "svelte-sql7dr",
  code: `#chat-button.svelte-sql7dr {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;z-index:10000;}#chat-button.with-text.svelte-sql7dr {padding:0 1.25rem;border-radius:100px;}#chat-button.with-icon-url.svelte-sql7dr {padding:0.5rem;}#chat-button.svelte-sql7dr:hover {background-color:var(--hover-color) !important;transform:translateY(-1px);}#chat-button.active.svelte-sql7dr {filter:brightness(0.9);}.chat-icon.svelte-sql7dr,
  .close-icon.svelte-sql7dr {display:flex;align-items:center;transition:transform 0.3s ease;}.button-text.svelte-sql7dr {font-size:0.875rem;font-weight:500;white-space:nowrap;}.close-icon.svelte-sql7dr {display:none;}#chat-button.active.svelte-sql7dr .chat-icon:where(.svelte-sql7dr) {display:none;}#chat-button.active.svelte-sql7dr .close-icon:where(.svelte-sql7dr) {display:flex;}.icon-image.svelte-sql7dr {width:100%;height:100%;max-width:2.5rem;max-height:2.5rem;object-fit:contain;}`
};
function pp(e, t) {
  su(t, !0), An(e, hp);
  const u = {
    MessageSquare: hn,
    MessageSquareMore: Bs,
    Monitor: Ps,
    LifeBuoy: Ms,
    HelpCircle: Os,
    Menu: Ls,
    Info: Is,
    FileText: Fs
  }, n = t.buttonIcon && (t.buttonIcon.startsWith("http://") || t.buttonIcon.startsWith("https://")), r = n ? null : u[t.buttonIcon] || hn;
  var i = dp();
  i.__click = function(...g) {
    var m;
    (m = t.onToggle) == null || m.apply(this, g);
  };
  let o;
  var s = te(i);
  {
    var a = (g) => {
      var m = lp(), w = te(m);
      Fe(() => ln(w, t.buttonText)), X(g, m);
    };
    ut(s, (g) => {
      t.showButtonText && g(a);
    });
  }
  var c = st(s, 2), l = te(c);
  {
    var f = (g) => {
      var m = fp();
      Fe(() => vu(m, "src", t.buttonIcon)), X(g, m);
    }, h = (g, m) => {
      {
        var w = (v) => {
          r(v, { size: 24, strokeWidth: 2 });
        };
        ut(
          g,
          (v) => {
            r && v(w);
          },
          m
        );
      }
    };
    ut(l, (g) => {
      n ? g(f) : g(h, !1);
    });
  }
  var p = st(c, 2), d = te(p);
  zs(d, { size: 24, strokeWidth: 2 }), Fe(
    (g) => {
      var m, w;
      vu(i, "aria-label", t.isOpen ? "Close chat" : "Open chat"), yu(i, `background-color: ${(m = t.colorHex) != null ? m : ""}; --hover-color: ${(w = t.lighterColorHex) != null ? w : ""}`), o = At(i, 1, "svelte-sql7dr", null, o, g);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText,
        "with-icon-url": n
      })
    ]
  ), X(e, i), au();
}
wn(["click"]);
class bp {
  constructor(t, u = !1) {
    kt(this, "container", null);
    kt(this, "buttonContainer", null);
    kt(this, "isOpen", !1);
    kt(this, "clickHandler");
    kt(this, "settings", null);
    kt(this, "fluid", !1);
    this.clickHandler = this.handleClickOutside.bind(this), this.fluid = u, this.initialize(t);
  }
  fetchSettings(t) {
    return me(this, null, function* () {
      try {
        return (yield vf.get(`/api/bots/${t}/widget-settings`)).data.data;
      } catch (u) {
        return console.error("Error fetching widget settings:", u), null;
      }
    });
  }
  handleClickOutside(t) {
    !t.composedPath().some(
      (r) => r === this.container || r === this.buttonContainer || r instanceof HTMLElement && (r.closest("#fluent-bot-chat-widget") === this.container || r.closest("#chat-button") === this.buttonContainer)
    ) && this.isOpen && this.toggleWidget();
  }
  toggleWidget() {
    this.isOpen = !this.isOpen, this.container && (this.isOpen ? (this.container.style.display = "flex", setTimeout(() => {
      this.container.style.opacity = "1", this.container.style.transform = "translateY(0) scale(1)";
    }, 0)) : (this.container.style.opacity = "0", this.container.style.transform = "translateY(20px) scale(0.95)", setTimeout(() => {
      this.container.style.display = "none";
    }, 300)));
  }
  createStyles() {
    const t = document.createElement("style");
    return t.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            
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

            :host(.fluid) {
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                width: 100%;
                height: 100%;
                align-items: center;
                justify-content: center;
            }

            #fluent-bot-chat-widget {
                width: 400px;
                height: 600px;
                max-height: calc(100vh - 100px);
                overflow: visible;
                display: none;
                flex-direction: column;
                position: relative;
                background: white;
                border-radius: 1rem;
                box-shadow: 
                    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                transform-origin: bottom;
                transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                overflow: hidden;
            }

            :host(.fluid) #fluent-bot-chat-widget {
                width: 100%;
                height: 100%;
                max-height: 100%;
                margin: 0;
                border-radius: 0;
                transform: translateY(0) scale(0.95);
            }

            :host(.align-right) #fluent-bot-chat-widget {
                transform-origin: bottom right;
            }

            :host(.align-left) #fluent-bot-chat-widget {
                transform-origin: bottom left;
            }

            :host(.fluid) #fluent-bot-chat-widget {
                transform-origin: center;
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
            }

            ${cp}
        `, t;
  }
  initialize(t) {
    return me(this, null, function* () {
      if (this.settings = yield this.fetchSettings(t), !this.settings) {
        console.warn("No widget settings found, widget will not be initialized");
        return;
      }
      const u = document.createElement("div");
      u.id = "fluent-bot-chat-widget-container", u.classList.add(`align-${this.settings.button_alignment}`), this.fluid && (u.classList.add("fluid"), this.isOpen = !0);
      const n = u.attachShadow({ mode: "open" }), r = document.createElement("div");
      r.id = "fluent-bot-chat-widget";
      const i = document.createElement("div");
      i.id = "chat-button-container", n.appendChild(this.createStyles()), n.appendChild(r), this.fluid || n.appendChild(i), document.body.appendChild(u), this.container = r, this.buttonContainer = this.fluid ? null : i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", () => {
        this.isOpen && this.toggleWidget();
      }), Ai(ap, {
        target: r,
        props: {
          settings: this.settings
        }
      }), this.fluid || Ai(pp, {
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
      }), this.fluid && this.container && (this.container.style.display = "flex", this.container.style.opacity = "1", this.container.style.transform = "translateY(0) scale(1)");
    });
  }
  destroy() {
    if (this.container) {
      const t = this.container.closest(
        "#fluent-bot-chat-widget-container"
      );
      t && t.remove();
    }
    document.removeEventListener("click", this.clickHandler, !0);
  }
}
const gp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), Bp = (e, t = !1) => {
  gp() || new bp(e, t);
};
export {
  bp as FluentBotChatWidget,
  Bp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
