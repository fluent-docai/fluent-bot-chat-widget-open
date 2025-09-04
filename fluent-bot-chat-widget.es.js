var gc = Object.defineProperty, mc = Object.defineProperties;
var _c = Object.getOwnPropertyDescriptors;
var _i = Object.getOwnPropertySymbols;
var xc = Object.prototype.hasOwnProperty, Ec = Object.prototype.propertyIsEnumerable;
var Kt = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), yc = (e) => {
  throw TypeError(e);
};
var Zn = (e, t, u) => t in e ? gc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, ce = (e, t) => {
  for (var u in t || (t = {}))
    xc.call(t, u) && Zn(e, u, t[u]);
  if (_i)
    for (var u of _i(t))
      Ec.call(t, u) && Zn(e, u, t[u]);
  return e;
}, we = (e, t) => mc(e, _c(t));
var kt = (e, t, u) => Zn(e, typeof t != "symbol" ? t + "" : t, u);
var ge = (e, t, u) => new Promise((n, r) => {
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
}), zt = function(e, t) {
  this[0] = e, this[1] = t;
}, Wn = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof zt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[Kt("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, Vn = (e) => {
  var t = e[Kt("asyncIterator")], u = !1, n, r = {};
  return t == null ? (t = e[Kt("iterator")](), n = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), n = (i) => r[i] = (o) => {
    if (u) {
      if (u = !1, i === "throw") throw o;
      return o;
    }
    return u = !0, {
      done: !1,
      value: new zt(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || yc("Object expected"), s(a);
      }), 1)
    };
  }), r[Kt("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, xi = (e, t, u) => (t = e[Kt("asyncIterator")]) ? t.call(e) : (e = e[Kt("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var Dr = Array.isArray, vc = Array.prototype.indexOf, Tr = Array.from, vo = Object.defineProperty, Rt = Object.getOwnPropertyDescriptor, ko = Object.getOwnPropertyDescriptors, kc = Object.prototype, wc = Array.prototype, Rr = Object.getPrototypeOf, Ei = Object.isExtensible;
function pu(e) {
  return typeof e == "function";
}
const Nt = () => {
};
function Ac(e) {
  return e();
}
function Eu(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const Je = 2, wo = 4, xn = 8, Nr = 16, Et = 32, iu = 64, rn = 128, Me = 256, on = 512, Re = 1024, _t = 2048, Zt = 4096, mt = 8192, En = 16384, Cc = 32768, Ou = 65536, Sc = 1 << 17, Dc = 1 << 19, Ao = 1 << 20, hr = 1 << 21, Ot = Symbol("$state"), Co = Symbol("legacy props"), Tc = Symbol("");
function So(e) {
  return e === this.v;
}
function Do(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !Do(e, this.v);
}
function Rc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Nc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Fc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ic(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Lc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Bc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let ou = !1;
function Pc() {
  ou = !0;
}
const Fr = 1, Ir = 2, To = 4, zc = 8, Uc = 16, $c = 1, qc = 2, Ro = 4, Hc = 8, jc = 16, Gc = 2, Se = Symbol(), Zc = "http://www.w3.org/1999/xhtml", Wc = "http://www.w3.org/2000/svg";
function No(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ue = null;
function yi(e) {
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
  }), Br(() => {
    n.d = !0;
  });
}
function au(e) {
  const t = ue;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = V, n = J;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          Ft(i.effect), at(i.reaction), Pr(i.fn);
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
function Fu() {
  return !ou || ue !== null && ue.l === null;
}
function Ut(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = Rr(e);
  if (t !== kc && t !== wc)
    return e;
  var u = /* @__PURE__ */ new Map(), n = Dr(e), r = /* @__PURE__ */ ze(0), i = J, o = (s) => {
    var a = J;
    at(i);
    var c = s();
    return at(a), c;
  };
  return n && u.set("length", /* @__PURE__ */ ze(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Mc();
        var l = u.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ ze(c.value)), u.set(a, l)) : he(
          l,
          o(() => Ut(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = u.get(a);
        if (c === void 0)
          a in s && (u.set(
            a,
            o(() => /* @__PURE__ */ ze(Se))
          ), Kn(r));
        else {
          if (n && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              u.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && he(l, f);
          }
          he(c, Se), Kn(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === Ot)
          return e;
        var l = u.get(a), f = a in s;
        if (l === void 0 && (!f || (p = Rt(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ ze(Ut(f ? s[a] : Se))), u.set(a, l)), l !== void 0) {
          var h = P(l);
          return h === Se ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = u.get(a);
          l && (c.value = P(l));
        } else if (c === void 0) {
          var f = u.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Se)
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
        var c = u.get(a), l = c !== void 0 && c.v !== Se || Reflect.has(s, a);
        if (c !== void 0 || V !== null && (!l || (h = Rt(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ ze(l ? Ut(s[a]) : Se)), u.set(a, c));
          var f = P(c);
          if (f === Se)
            return !1;
        }
        return l;
      },
      set(s, a, c, l) {
        var y;
        var f = u.get(a), h = a in s;
        if (n && a === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var d = u.get(p + "");
            d !== void 0 ? he(d, Se) : p in s && (d = o(() => /* @__PURE__ */ ze(Se)), u.set(p + "", d));
          }
        f === void 0 ? (!h || (y = Rt(s, a)) != null && y.writable) && (f = o(() => /* @__PURE__ */ ze(void 0)), he(
          f,
          o(() => Ut(c))
        ), u.set(a, f)) : (h = f.v !== Se, he(
          f,
          o(() => Ut(c))
        ));
        var m = Reflect.getOwnPropertyDescriptor(s, a);
        if (m != null && m.set && m.set.call(l, c), !h) {
          if (n && typeof a == "string") {
            var g = (
              /** @type {Source<number>} */
              u.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= g.v && he(g, k + 1);
          }
          Kn(r);
        }
        return !0;
      },
      ownKeys(s) {
        P(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = u.get(f);
          return h === void 0 || h.v !== Se;
        });
        for (var [c, l] of u)
          l.v !== Se && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Lc();
      }
    }
  );
}
function Kn(e, t = 1) {
  he(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  var t = Je | _t, u = J !== null && (J.f & Je) !== 0 ? (
    /** @type {Derived} */
    J
  ) : null;
  return V === null || u !== null && (u.f & Me) !== 0 ? t |= Me : V.f |= Ao, {
    ctx: ue,
    deps: null,
    effects: null,
    equals: So,
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
function Ve(e) {
  const t = /* @__PURE__ */ eu(e);
  return Wo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  const t = /* @__PURE__ */ eu(e);
  return t.equals = Or, t;
}
function Oo(e) {
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
function Vc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & Je) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Fo(e) {
  var t, u = V;
  Ft(Vc(e));
  try {
    Oo(e), t = Yo(e);
  } finally {
    Ft(u);
  }
  return t;
}
function Io(e) {
  var t = Fo(e), u = (Dt || (e.f & Me) !== 0) && e.deps !== null ? Zt : Re;
  Ye(e, u), e.equals(t) || (e.v = t, e.wv = Ko());
}
const yu = /* @__PURE__ */ new Map();
function tu(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: So,
    rv: 0,
    wv: 0
  };
  return u;
}
// @__NO_SIDE_EFFECTS__
function ze(e, t) {
  const u = tu(e);
  return Wo(u), u;
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t = !1) {
  var n, r;
  const u = tu(e);
  return t || (u.equals = Or), ou && ue !== null && ue.l !== null && ((r = (n = ue.l).s) != null ? r : n.s = []).push(u), u;
}
function he(e, t, u = !1) {
  J !== null && !it && Fu() && (J.f & (Je | Nr)) !== 0 && !(Ce != null && Ce.includes(e)) && Bc();
  let n = u ? Ut(t) : t;
  return pr(e, n);
}
function pr(e, t) {
  if (!e.equals(t)) {
    var u = e.v;
    Lu ? yu.set(e, t) : yu.set(e, u), e.v = t, (e.f & Je) !== 0 && ((e.f & _t) !== 0 && Fo(
      /** @type {Derived} */
      e
    ), Ye(e, (e.f & Me) === 0 ? Re : Zt)), e.wv = Ko(), Mo(e, _t), Fu() && V !== null && (V.f & Re) !== 0 && (V.f & (Et | iu)) === 0 && (Pe === null ? n0([e]) : Pe.push(e));
  }
  return t;
}
function vi(e, t = 1) {
  var u = P(e), n = t === 1 ? u++ : u--;
  return he(e, u), n;
}
function Mo(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Fu(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & _t) === 0 && (!n && o === V || (Ye(o, t), (s & (Re | Me)) !== 0 && ((s & Je) !== 0 ? Mo(
        /** @type {Derived} */
        o,
        Zt
      ) : wn(
        /** @type {Effect} */
        o
      ))));
    }
}
let Kc = !1;
var ki, Lo, Bo, Po;
function Jc() {
  if (ki === void 0) {
    ki = window, Lo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, u = Text.prototype;
    Bo = Rt(t, "firstChild").get, Po = Rt(t, "nextSibling").get, Ei(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ei(u) && (u.__t = void 0);
  }
}
function yn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function gt(e) {
  return Bo.call(e);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return Po.call(e);
}
function re(e, t) {
  return /* @__PURE__ */ gt(e);
}
function je(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ gt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ vn(u) : u;
  }
}
function Ke(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ vn(n);
  return n;
}
function Yc(e) {
  e.textContent = "";
}
function zo(e) {
  V === null && J === null && Oc(), J !== null && (J.f & Me) !== 0 && V === null && Nc(), Lu && Rc();
}
function Xc(e, t) {
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
      $r(i), i.f |= Cc;
    } catch (c) {
      throw xt(i), c;
    }
  else t !== null && wn(i);
  var o = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Ao | rn)) === 0;
  if (!o && n && (r !== null && Xc(i, r), J !== null && (J.f & Je) !== 0)) {
    var s = (
      /** @type {Derived} */
      J
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function Br(e) {
  const t = cu(xn, null, !1);
  return Ye(t, Re), t.teardown = e, t;
}
function vu(e) {
  var r;
  zo();
  var t = V !== null && (V.f & Et) !== 0 && ue !== null && !ue.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      ue
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: V,
      reaction: J
    });
  } else {
    var n = Pr(e);
    return n;
  }
}
function Qc(e) {
  return zo(), zr(e);
}
function e0(e) {
  const t = cu(iu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? uu(t, () => {
      xt(t), n(void 0);
    }) : (xt(t), n(void 0));
  });
}
function Pr(e) {
  return cu(wo, e, !1);
}
function zr(e) {
  return cu(xn, e, !0);
}
function Ie(e, t = [], u = eu) {
  const n = t.map(u);
  return Iu(() => e(...n.map(P)));
}
function Iu(e, t = 0) {
  return cu(xn | Nr | t, e, !0);
}
function jt(e, t = !0) {
  return cu(xn | Et, e, !0, t);
}
function Uo(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Lu, n = J;
    Ai(!0), at(null);
    try {
      t.call(null);
    } finally {
      Ai(u), at(n);
    }
  }
}
function $o(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    (u.f & iu) !== 0 ? u.parent = null : xt(u, t), u = n;
  }
}
function t0(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & Et) === 0 && xt(t), t = u;
  }
}
function xt(e, t = !0) {
  var u = !1;
  (t || (e.f & Dc) !== 0) && e.nodes_start !== null && (qo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), u = !0), $o(e, t && !u), ln(e, 0), Ye(e, En);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Uo(e);
  var r = e.parent;
  r !== null && r.first !== null && Ho(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function qo(e, t) {
  for (; e !== null; ) {
    var u = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ vn(e)
    );
    e.remove(), e = u;
  }
}
function Ho(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function uu(e, t) {
  var u = [];
  Ur(e, u, !0), jo(u, () => {
    xt(e), t && t();
  });
}
function jo(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Ur(e, t, u) {
  if ((e.f & mt) === 0) {
    if (e.f ^= mt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ou) !== 0 || (n.f & Et) !== 0;
      Ur(n, t, i ? u : !1), n = r;
    }
  }
}
function ku(e) {
  Go(e, !0);
}
function Go(e, t) {
  if ((e.f & mt) !== 0) {
    e.f ^= mt, (e.f & Re) === 0 && (e.f ^= Re), Bu(e) && (Ye(e, _t), wn(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & Ou) !== 0 || (u.f & Et) !== 0;
      Go(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let wu = [], br = [];
function Zo() {
  var e = wu;
  wu = [], Eu(e);
}
function u0() {
  var e = br;
  br = [], Eu(e);
}
function Mu(e) {
  wu.length === 0 && queueMicrotask(Zo), wu.push(e);
}
function wi() {
  wu.length > 0 && Zo(), br.length > 0 && u0();
}
let en = !1, sn = !1, an = null, qt = !1, Lu = !1;
function Ai(e) {
  Lu = e;
}
let xu = [];
let J = null, it = !1;
function at(e) {
  J = e;
}
let V = null;
function Ft(e) {
  V = e;
}
let Ce = null;
function Wo(e) {
  J !== null && J.f & hr && (Ce === null ? Ce = [e] : Ce.push(e));
}
let Ae = null, Fe = 0, Pe = null;
function n0(e) {
  Pe = e;
}
let Vo = 1, cn = 0, Dt = !1;
function Ko() {
  return ++Vo;
}
function Bu(e) {
  var f, h;
  var t = e.f;
  if ((t & _t) !== 0)
    return !0;
  if ((t & Zt) !== 0) {
    var u = e.deps, n = (t & Me) !== 0;
    if (u !== null) {
      var r, i, o = (t & on) !== 0, s = n && V !== null && !Dt, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= on), s && l !== null && (l.f & Me) === 0 && (c.f ^= Me);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Bu(
          /** @type {Derived} */
          i
        ) && Io(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || V !== null && !Dt) && Ye(e, Re);
  }
  return !1;
}
function r0(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & rn) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= rn;
      }
    u = u.parent;
  }
  throw en = !1, e;
}
function Ci(e) {
  return (e.f & En) === 0 && (e.parent === null || (e.parent.f & rn) === 0);
}
function kn(e, t, u, n) {
  if (en) {
    if (u === null && (en = !1), Ci(t))
      throw e;
    return;
  }
  if (u !== null && (en = !0), r0(e, t), Ci(t))
    throw e;
}
function Jo(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      Ce != null && Ce.includes(e) || ((i.f & Je) !== 0 ? Jo(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? Ye(i, _t) : (i.f & Re) !== 0 && Ye(i, Zt), wn(
        /** @type {Effect} */
        i
      )));
    }
}
function Yo(e) {
  var p, d;
  var t = Ae, u = Fe, n = Pe, r = J, i = Dt, o = Ce, s = ue, a = it, c = e.f;
  Ae = /** @type {null | Value[]} */
  null, Fe = 0, Pe = null, Dt = (c & Me) !== 0 && (it || !qt || J === null), J = (c & (Et | iu)) === 0 ? e : null, Ce = null, yi(e.ctx), it = !1, cn++, e.f |= hr;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Ae !== null) {
      var h;
      if (ln(e, Fe), f !== null && Fe > 0)
        for (f.length = Fe + Ae.length, h = 0; h < Ae.length; h++)
          f[Fe + h] = Ae[h];
      else
        e.deps = f = Ae;
      if (!Dt)
        for (h = Fe; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Fe < f.length && (ln(e, Fe), f.length = Fe);
    if (Fu() && Pe !== null && !it && f !== null && (e.f & (Je | Zt | _t)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Pe.length; h++)
        Jo(
          Pe[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (cn++, Pe !== null && (n === null ? n = Pe : n.push(.../** @type {Source[]} */
    Pe))), l;
  } finally {
    Ae = t, Fe = u, Pe = n, J = r, Dt = i, Ce = o, yi(s), it = a, e.f ^= hr;
  }
}
function i0(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = vc.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & Je) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ae === null || !Ae.includes(t)) && (Ye(t, Zt), (t.f & (Me | on)) === 0 && (t.f ^= on), Oo(
    /** @type {Derived} **/
    t
  ), ln(
    /** @type {Derived} **/
    t,
    0
  ));
}
function ln(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      i0(e, u[n]);
}
function $r(e) {
  var t = e.f;
  if ((t & En) === 0) {
    Ye(e, Re);
    var u = V, n = ue, r = qt;
    V = e, qt = !0;
    try {
      (t & Nr) !== 0 ? t0(e) : $o(e), Uo(e);
      var i = Yo(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Vo;
      var o = e.deps, s;
    } catch (a) {
      kn(a, e, u, n || e.ctx);
    } finally {
      qt = r, V = u;
    }
  }
}
function o0() {
  try {
    Fc();
  } catch (e) {
    if (an !== null)
      kn(e, an, null);
    else
      throw e;
  }
}
function Xo() {
  var e = qt;
  try {
    var t = 0;
    for (qt = !0; xu.length > 0; ) {
      t++ > 1e3 && o0();
      var u = xu, n = u.length;
      xu = [];
      for (var r = 0; r < n; r++) {
        var i = a0(u[r]);
        s0(i);
      }
      yu.clear();
    }
  } finally {
    sn = !1, qt = e, an = null;
  }
}
function s0(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (En | mt)) === 0)
        try {
          Bu(n) && ($r(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ho(n) : n.fn = null));
        } catch (r) {
          kn(r, n, null, n.ctx);
        }
    }
}
function wn(e) {
  sn || (sn = !0, queueMicrotask(Xo));
  for (var t = an = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (iu | Et)) !== 0) {
      if ((u & Re) === 0) return;
      t.f ^= Re;
    }
  }
  xu.push(t);
}
function a0(e) {
  for (var t = [], u = e; u !== null; ) {
    var n = u.f, r = (n & (Et | iu)) !== 0, i = r && (n & Re) !== 0;
    if (!i && (n & mt) === 0) {
      if ((n & wo) !== 0)
        t.push(u);
      else if (r)
        u.f ^= Re;
      else
        try {
          Bu(u) && $r(u);
        } catch (a) {
          kn(a, u, null, u.ctx);
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
function c0(e) {
  var t;
  for (wi(); xu.length > 0; )
    sn = !0, Xo(), wi();
  return (
    /** @type {T} */
    t
  );
}
function l0() {
  return ge(this, null, function* () {
    yield Promise.resolve(), c0();
  });
}
function P(e) {
  var t = e.f, u = (t & Je) !== 0;
  if (J !== null && !it) {
    if (!(Ce != null && Ce.includes(e))) {
      var n = J.deps;
      e.rv < cn && (e.rv = cn, Ae === null && n !== null && n[Fe] === e ? Fe++ : Ae === null ? Ae = [e] : (!Dt || !Ae.includes(e)) && Ae.push(e));
    }
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Me) === 0 && (r.f ^= Me);
  }
  return u && (r = /** @type {Derived} */
  e, Bu(r) && Io(r)), Lu && yu.has(e) ? yu.get(e) : e.v;
}
function It(e) {
  var t = it;
  try {
    return it = !0, e();
  } finally {
    it = t;
  }
}
const f0 = -7169;
function Ye(e, t) {
  e.f = e.f & f0 | t;
}
function d0(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ot in e)
      gr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && Ot in u && gr(u);
      }
  }
}
function gr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        gr(e[n], t);
      } catch (r) {
      }
    const u = Rr(e);
    if (u !== Object.prototype && u !== Array.prototype && u !== Map.prototype && u !== Set.prototype && u !== Date.prototype) {
      const n = ko(u);
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
function h0(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const p0 = [
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
function b0(e) {
  return p0.includes(e);
}
const g0 = {
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
function m0(e) {
  var t;
  return e = e.toLowerCase(), (t = g0[e]) != null ? t : e;
}
const _0 = ["touchstart", "touchmove"];
function x0(e) {
  return _0.includes(e);
}
function E0(e, t) {
  if (t) {
    const u = document.body;
    e.autofocus = !0, Mu(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let Si = !1;
function y0() {
  Si || (Si = !0, document.addEventListener(
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
function Qo(e) {
  var t = J, u = V;
  at(null), Ft(null);
  try {
    return e();
  } finally {
    at(t), Ft(u);
  }
}
function v0(e, t, u, n = u) {
  e.addEventListener(t, () => Qo(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), y0();
}
const es = /* @__PURE__ */ new Set(), mr = /* @__PURE__ */ new Set();
function ts(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || _u.call(t, i), !i.cancelBubble)
      return Qo(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mu(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Di(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = ts(e, t, u, i);
  (t === document.body || t === window || t === document) && Br(() => {
    t.removeEventListener(e, o, i);
  });
}
function An(e) {
  for (var t = 0; t < e.length; t++)
    es.add(e[t]);
  for (var u of mr)
    u(e);
}
function _u(e) {
  var y;
  var t = this, u = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((y = e.composedPath) == null ? void 0 : y.call(e)) || [], i = (
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
    vo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || u;
      }
    });
    var l = J, f = V;
    at(null), Ft(null);
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
            if (Dr(m)) {
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
      e.__root = t, delete e.currentTarget, at(l), Ft(f);
    }
  }
}
function qr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Pu(e, t) {
  var u = (
    /** @type {Effect} */
    V
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Be(e, t) {
  var u = (t & Gc) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = qr(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ gt(n));
    var i = (
      /** @type {TemplateNode} */
      u || Lo ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Pu(i, i), i;
  };
}
// @__NO_SIDE_EFFECTS__
function k0(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        qr(r)
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
    return Pu(a, a), a;
  };
}
function Ge() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = yn();
  return e.append(t, u), Pu(t, u), e;
}
function Q(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function fn(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function Ti(e, t) {
  return w0(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function w0(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  Jc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = x0(p);
        t.addEventListener(p, _u, { passive: d });
        var m = Jt.get(p);
        m === void 0 ? (document.addEventListener(p, _u, { passive: d }), Jt.set(p, 1)) : Jt.set(p, m + 1);
      }
    }
  };
  a(Tr(es)), mr.add(a);
  var c = void 0, l = e0(() => {
    var f = u != null ? u : t.appendChild(yn());
    return jt(() => {
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
      mr.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return A0.set(c, l), c;
}
let A0 = /* @__PURE__ */ new WeakMap();
function rt(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = Se, a = u > 0 ? Ou : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? ku(i) : p && (i = jt(() => p(r))), o && uu(o, () => {
      o = null;
    })) : (o ? ku(o) : p && (o = jt(() => p(r, [u + 1, n]))), i && uu(i, () => {
      i = null;
    })));
  };
  Iu(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function C0(e, t) {
  return t;
}
function S0(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Ur(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    Yc(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), wt(e, t[0].prev, t[i - 1].next);
  }
  jo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), wt(e, l.prev, l.next)), xt(l.e, !s);
    }
  });
}
function us(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & To) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(yn());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Mr(() => {
    var p = u();
    return Dr(p) ? p : p == null ? [] : Tr(p);
  });
  Iu(() => {
    var p = P(h), d = p.length;
    f && d === 0 || (f = d === 0, D0(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? ku(l) : l = jt(() => i(o)) : l !== null && uu(l, () => {
      l = null;
    })), P(h));
  });
}
function D0(e, t, u, n, r, i, o) {
  var N, L, K, pe;
  var s = (r & zc) !== 0, a = (r & (Fr | Ir)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, m, g = [], k = [], y, x, _, E;
  if (s)
    for (E = 0; E < c; E += 1)
      y = e[E], x = i(y, E), _ = l.get(x), _ !== void 0 && ((N = _.a) == null || N.measure(), (m != null ? m : m = /* @__PURE__ */ new Set()).add(_));
  for (E = 0; E < c; E += 1) {
    if (y = e[E], x = i(y, E), _ = l.get(x), _ === void 0) {
      var C = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = R0(
        C,
        t,
        d,
        d === null ? t.first : d.next,
        y,
        x,
        E,
        n,
        r,
        o
      ), l.set(x, d), g = [], k = [], h = d.next;
      continue;
    }
    if (a && T0(_, y, E, r), (_.e.f & mt) !== 0 && (ku(_.e), s && ((L = _.a) == null || L.unfix(), (m != null ? m : m = /* @__PURE__ */ new Set()).delete(_))), _ !== h) {
      if (p !== void 0 && p.has(_)) {
        if (g.length < k.length) {
          var R = k[0], D;
          d = R.prev;
          var B = g[0], Z = g[g.length - 1];
          for (D = 0; D < g.length; D += 1)
            Ri(g[D], R, u);
          for (D = 0; D < k.length; D += 1)
            p.delete(k[D]);
          wt(t, B.prev, Z.next), wt(t, d, B), wt(t, Z, R), h = R, d = Z, E -= 1, g = [], k = [];
        } else
          p.delete(_), Ri(_, h, u), wt(t, _.prev, _.next), wt(t, _, d === null ? t.first : d.next), wt(t, d, _), d = _;
        continue;
      }
      for (g = [], k = []; h !== null && h.k !== x; )
        (h.e.f & mt) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      _ = h;
    }
    g.push(_), d = _, h = _.next;
  }
  if (h !== null || p !== void 0) {
    for (var ne = p === void 0 ? [] : Tr(p); h !== null; )
      (h.e.f & mt) === 0 && ne.push(h), h = h.next;
    var le = ne.length;
    if (le > 0) {
      var te = (r & To) !== 0 && c === 0 ? u : null;
      if (s) {
        for (E = 0; E < le; E += 1)
          (K = ne[E].a) == null || K.measure();
        for (E = 0; E < le; E += 1)
          (pe = ne[E].a) == null || pe.fix();
      }
      S0(t, ne, te, l);
    }
  }
  s && Mu(() => {
    var H;
    if (m !== void 0)
      for (_ of m)
        (H = _.a) == null || H.apply();
  }), V.first = t.first && t.first.e, V.last = d && d.e;
}
function T0(e, t, u, n) {
  (n & Fr) !== 0 && pr(e.v, t), (n & Ir) !== 0 ? pr(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function R0(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & Fr) !== 0, f = (a & Uc) === 0, h = l ? f ? /* @__PURE__ */ Lr(r) : tu(r) : r, p = (a & Ir) === 0 ? o : tu(o), d = {
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
    return d.e = jt(() => s(e, h, p, c), Kc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Ri(e, t, u) {
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
      /* @__PURE__ */ vn(i)
    );
    r.before(i), i = o;
  }
}
function wt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function N0(e, t, u = !1, n = !1, r = !1) {
  var i = e, o = "";
  Ie(() => {
    var l;
    var s = (
      /** @type {Effect} */
      V
    );
    if (o !== (o = (l = t()) != null ? l : "") && (s.nodes_start !== null && (qo(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "")) {
      var a = o + "";
      u ? a = `<svg>${a}</svg>` : n && (a = `<math>${a}</math>`);
      var c = qr(a);
      if ((u || n) && (c = /** @type {Element} */
      /* @__PURE__ */ gt(c)), Pu(
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
function Xe(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function O0(e, t, u) {
  var n = e, r, i;
  Iu(() => {
    r !== (r = t()) && (i && (uu(i), i = null), r && (i = jt(() => u(n, r))));
  }, Ou);
}
function F0(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  Iu(() => {
    const f = t() || null;
    var h = Wc;
    f !== o && (l && (f === null ? uu(l, () => {
      l = null, s = null;
    }) : f === s ? ku(l) : xt(l)), f && f !== s && (l = jt(() => {
      if (a = document.createElementNS(h, f), Pu(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(yn())
        );
        n(a, p);
      }
      V.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, Ou);
}
function Cn(e, t) {
  Mu(() => {
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
function ns(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = ns(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function I0() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = ns(e)) && (n && (n += " "), n += t);
  return n;
}
function M0(e) {
  return typeof e == "object" ? I0(e) : e != null ? e : "";
}
const Ni = [...` 	
\r\f \v\uFEFF`];
function L0(e, t, u) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), u) {
    for (var r in u)
      if (u[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var i = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || Ni.includes(n[o - 1])) && (s === n.length || Ni.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Oi(e, t = !1) {
  var u = t ? " !important;" : ";", n = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (n += " " + r + ": " + i + u);
  }
  return n;
}
function Jn(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function B0(e, t) {
  if (t) {
    var u = "", n, r;
    if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      n && a.push(...Object.keys(n).map(Jn)), r && a.push(...Object.keys(r).map(Jn));
      var c = 0, l = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === m - 1) {
            if (l !== -1) {
              var p = Jn(e.substring(c, l).trim());
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
    return n && (u += Oi(n)), r && (u += Oi(r, !0)), u = u.trim(), u === "" ? null : u;
  }
  return e == null ? null : String(e);
}
function At(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u || o === void 0) {
    var s = L0(u, n, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  } else if (i && r !== i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
function Yn(e, t = {}, u, n) {
  for (var r in u) {
    var i = u[r];
    t[r] !== i && (u[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, n));
  }
}
function Au(e, t, u, n) {
  var r = e.__style;
  if (r !== t) {
    var i = B0(t, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else n && (Array.isArray(n) ? (Yn(e, u == null ? void 0 : u[0], n[0]), Yn(e, u == null ? void 0 : u[1], n[1], "important")) : Yn(e, u, n));
  return n;
}
const bu = Symbol("class"), gu = Symbol("style"), rs = Symbol("is custom element"), is = Symbol("is html");
function P0(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Cu(e, t, u, n) {
  var r = os(e);
  r[t] !== (r[t] = u) && (t === "loading" && (e[Tc] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && ss(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function Fi(e, t, u, n, r = !1) {
  var y;
  var i = os(e), o = i[rs], s = !i[is], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in u || (u[l] = null);
  u.class ? u.class = M0(u.class) : u[bu] && (u.class = null), u[gu] && ((y = u.style) != null || (u.style = null));
  var f = ss(e);
  for (const x in u) {
    let _ = u[x];
    if (c && x === "value" && _ == null) {
      e.value = e.__value = "", a[x] = _;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      At(e, h, _, n, t == null ? void 0 : t[bu], u[bu]), a[x] = _, a[bu] = u[bu];
      continue;
    }
    if (x === "style") {
      Au(e, _, t == null ? void 0 : t[gu], u[gu]), a[x] = _, a[gu] = u[gu];
      continue;
    }
    var p = a[x];
    if (_ !== p) {
      a[x] = _;
      var d = x[0] + x[1];
      if (d !== "$$")
        if (d === "on") {
          const E = {}, C = "$$" + x;
          let R = x.slice(2);
          var m = b0(R);
          if (h0(R) && (R = R.slice(0, -7), E.capture = !0), !m && p) {
            if (_ != null) continue;
            e.removeEventListener(R, a[C], E), a[C] = null;
          }
          if (_ != null)
            if (m)
              e[`__${R}`] = _, An([R]);
            else {
              let D = function(B) {
                a[x].call(this, B);
              };
              a[C] = ts(R, e, D, E);
            }
          else m && (e[`__${R}`] = void 0);
        } else if (x === "style")
          Cu(e, x, _);
        else if (x === "autofocus")
          E0(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!o && (x === "__value" || x === "value" && _ != null))
          e.value = e.__value = _;
        else if (x === "selected" && c)
          P0(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var g = x;
          s || (g = m0(g));
          var k = g === "defaultValue" || g === "defaultChecked";
          if (_ == null && !o && !k)
            if (i[x] = null, g === "value" || g === "checked") {
              let E = (
                /** @type {HTMLInputElement} */
                e
              );
              const C = t === void 0;
              if (g === "value") {
                let R = E.defaultValue;
                E.removeAttribute(g), E.defaultValue = R, E.value = E.__value = C ? R : null;
              } else {
                let R = E.defaultChecked;
                E.removeAttribute(g), E.defaultChecked = R, E.checked = C ? R : !1;
              }
            } else
              e.removeAttribute(x);
          else k || f.includes(g) && (o || typeof _ != "string") ? e[g] = _ : typeof _ != "function" && Cu(e, g, _);
        }
    }
  }
  return a;
}
function os(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [rs]: e.nodeName.includes("-"),
      [is]: e.namespaceURI === Zc
    }
  );
}
var Ii = /* @__PURE__ */ new Map();
function ss(e) {
  var t = Ii.get(e.nodeName);
  if (t) return t;
  Ii.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = ko(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = Rr(n);
  }
  return t;
}
function z0(e, t, u = t) {
  var n = Fu();
  v0(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Xn(e) ? Qn(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  It(t) == null && e.value && u(Xn(e) ? Qn(e.value) : e.value), zr(() => {
    var r = t();
    Xn(e) && r === Qn(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function Xn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Qn(e) {
  return e === "" ? null : +e;
}
function Mi(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function er(e = {}, t, u, n) {
  return Pr(() => {
    var r, i;
    return zr(() => {
      r = i, i = [], It(() => {
        e !== u(...i) && (t(e, ...i), r && Mi(u(...r), e) && t(null, ...r));
      });
    }), () => {
      Mu(() => {
        i && Mi(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function U0(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ue
  ), u = t.l.u;
  if (!u) return;
  let n = () => d0(t.s);
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
    n = () => P(o);
  }
  u.b.length && Qc(() => {
    Li(t, n), Eu(u.b);
  }), vu(() => {
    const r = It(() => u.m.map(Ac));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && vu(() => {
    Li(t, n), Eu(u.a);
  });
}
function Li(e, t) {
  if (e.l.s)
    for (const u of e.l.s) P(u);
  t();
}
function Hr(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), Nt;
  const n = It(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Yt = [];
function $0(e, t) {
  return {
    subscribe: as(e, t).subscribe
  };
}
function as(e, t = Nt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Do(e, s) && (e = s, u)) {
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
function q0(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return $0(u, (o, s) => {
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
      (d, m) => Hr(
        d,
        (g) => {
          c[m] = g, l &= ~(1 << m), a && h();
        },
        () => {
          l |= 1 << m;
        }
      )
    );
    return a = !0, h(), function() {
      Eu(p), f(), a = !1;
    };
  });
}
function cs(e) {
  let t;
  return Hr(e, (u) => t = u)(), t;
}
let Yu = !1, _r = Symbol();
function H0(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ Lr(void 0),
    unsubscribe: Nt
  };
  if (n.store !== e && !(_r in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = Nt;
    else {
      var r = !0;
      n.unsubscribe = Hr(e, (o) => {
        r ? n.source.v = o : he(n.source, o);
      }), r = !1;
    }
  return e && _r in u ? cs(e) : P(n.source);
}
function j0() {
  const e = {};
  function t() {
    Br(() => {
      for (var u in e)
        e[u].unsubscribe();
      vo(e, _r, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function G0(e) {
  var t = Yu;
  try {
    return Yu = !1, [e(), Yu];
  } finally {
    Yu = t;
  }
}
const Z0 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return P(e.version), t in e.special ? e.special[t]() : e.props[t];
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
      Ro
    )), e.special[t](u), vi(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), vi(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function $e(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: tu(0) }, Z0);
}
const W0 = {
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
    if (t === Ot || t === Co) return !1;
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
  return new Proxy({ props: e }, W0);
}
function Bi(e) {
  var t, u;
  return (u = (t = e.ctx) == null ? void 0 : t.d) != null ? u : !1;
}
function bt(e, t, u, n) {
  var C, R;
  var r = (u & $c) !== 0, i = !ou || (u & qc) !== 0, o = (u & Hc) !== 0, s = (u & jc) !== 0, a = !1, c;
  o ? [c, a] = G0(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Ot in e || Co in e, f = o && ((R = (C = Rt(e, t)) == null ? void 0 : C.set) != null ? R : l && t in e && ((D) => e[t] = D)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, m = () => (d = !0, p && (p = !1, s ? h = It(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && Ic(), c = m(), f && f(c));
  var g;
  if (i)
    g = () => {
      var D = (
        /** @type {V} */
        e[t]
      );
      return D === void 0 ? m() : (p = !0, d = !1, D);
    };
  else {
    var k = (r ? eu : Mr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Sc, g = () => {
      var D = P(k);
      return D !== void 0 && (h = /** @type {V} */
      void 0), D === void 0 ? h : D;
    };
  }
  if ((u & Ro) === 0)
    return g;
  if (f) {
    var y = e.$$legacy;
    return function(D, B) {
      return arguments.length > 0 ? ((!i || !B || y || a) && f(B ? g() : D), D) : g();
    };
  }
  var x = !1, _ = /* @__PURE__ */ Lr(c), E = /* @__PURE__ */ eu(() => {
    var D = g(), B = P(_);
    return x ? (x = !1, B) : _.v = D;
  });
  return o && P(E), r || (E.equals = Or), function(D, B) {
    if (arguments.length > 0) {
      const Z = B ? P(E) : i && o ? Ut(D) : D;
      if (!E.equals(Z)) {
        if (x = !0, he(_, Z), d && h !== void 0 && (h = Z), Bi(E))
          return D;
        It(() => P(E));
      }
      return D;
    }
    return Bi(E) ? E.v : P(E);
  };
}
function jr(e) {
  ue === null && No(), ou && ue.l !== null ? K0(ue).m.push(e) : vu(() => {
    const t = It(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function V0(e) {
  ue === null && No(), jr(() => () => It(e));
}
function K0(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const J0 = "5";
var xo, Eo, yo;
typeof window != "undefined" && ((yo = (Eo = (xo = window.__svelte) != null ? xo : window.__svelte = {}).v) != null ? yo : Eo.v = /* @__PURE__ */ new Set()).add(J0);
function ls(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Y0 } = Object.prototype, { getPrototypeOf: Gr } = Object, { iterator: Sn, toStringTag: fs } = Symbol, Dn = /* @__PURE__ */ ((e) => (t) => {
  const u = Y0.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Qe = (e) => (e = e.toLowerCase(), (t) => Dn(t) === e), Tn = (e) => (t) => typeof t === e, { isArray: lu } = Array, Su = Tn("undefined");
function X0(e) {
  return e !== null && !Su(e) && e.constructor !== null && !Su(e.constructor) && De(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ds = Qe("ArrayBuffer");
function Q0(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ds(e.buffer), t;
}
const el = Tn("string"), De = Tn("function"), hs = Tn("number"), Rn = (e) => e !== null && typeof e == "object", tl = (e) => e === !0 || e === !1, tn = (e) => {
  if (Dn(e) !== "object")
    return !1;
  const t = Gr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(fs in e) && !(Sn in e);
}, ul = Qe("Date"), nl = Qe("File"), rl = Qe("Blob"), il = Qe("FileList"), ol = (e) => Rn(e) && De(e.pipe), sl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || De(e.append) && ((t = Dn(e)) === "formdata" || // detect form-data instance
  t === "object" && De(e.toString) && e.toString() === "[object FormData]"));
}, al = Qe("URLSearchParams"), [cl, ll, fl, dl] = ["ReadableStream", "Request", "Response", "Headers"].map(Qe), hl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function zu(e, t, { allOwnKeys: u = !1 } = {}) {
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
function ps(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const $t = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, bs = (e) => !Su(e) && e !== $t;
function xr() {
  const { caseless: e } = bs(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && ps(t, r) || r;
    tn(t[i]) && tn(n) ? t[i] = xr(t[i], n) : tn(n) ? t[i] = xr({}, n) : lu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && zu(arguments[n], u);
  return t;
}
const pl = (e, t, u, { allOwnKeys: n } = {}) => (zu(t, (r, i) => {
  u && De(r) ? e[i] = ls(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), bl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gl = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, ml = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && Gr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, _l = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, xl = (e) => {
  if (!e) return null;
  if (lu(e)) return e;
  let t = e.length;
  if (!hs(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, El = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Gr(Uint8Array)), yl = (e, t) => {
  const n = (e && e[Sn]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, vl = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, kl = Qe("HTMLFormElement"), wl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), Pi = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), Al = Qe("RegExp"), gs = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  zu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, Cl = (e) => {
  gs(e, (t, u) => {
    if (De(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (De(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, Sl = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return lu(e) ? n(e) : n(String(e).split(t)), u;
}, Dl = () => {
}, Tl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function Rl(e) {
  return !!(e && De(e.append) && e[fs] === "FormData" && e[Sn]);
}
const Nl = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (Rn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = lu(n) ? [] : {};
        return zu(n, (o, s) => {
          const a = u(o, r + 1);
          !Su(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, Ol = Qe("AsyncFunction"), Fl = (e) => e && (Rn(e) || De(e)) && De(e.then) && De(e.catch), ms = ((e, t) => e ? setImmediate : t ? ((u, n) => ($t.addEventListener("message", ({ source: r, data: i }) => {
  r === $t && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), $t.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  De($t.postMessage)
), Il = typeof queueMicrotask != "undefined" ? queueMicrotask.bind($t) : typeof process != "undefined" && process.nextTick || ms, Ml = (e) => e != null && De(e[Sn]), v = {
  isArray: lu,
  isArrayBuffer: ds,
  isBuffer: X0,
  isFormData: sl,
  isArrayBufferView: Q0,
  isString: el,
  isNumber: hs,
  isBoolean: tl,
  isObject: Rn,
  isPlainObject: tn,
  isReadableStream: cl,
  isRequest: ll,
  isResponse: fl,
  isHeaders: dl,
  isUndefined: Su,
  isDate: ul,
  isFile: nl,
  isBlob: rl,
  isRegExp: Al,
  isFunction: De,
  isStream: ol,
  isURLSearchParams: al,
  isTypedArray: El,
  isFileList: il,
  forEach: zu,
  merge: xr,
  extend: pl,
  trim: hl,
  stripBOM: bl,
  inherits: gl,
  toFlatObject: ml,
  kindOf: Dn,
  kindOfTest: Qe,
  endsWith: _l,
  toArray: xl,
  forEachEntry: yl,
  matchAll: vl,
  isHTMLForm: kl,
  hasOwnProperty: Pi,
  hasOwnProp: Pi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gs,
  freezeMethods: Cl,
  toObjectSet: Sl,
  toCamelCase: wl,
  noop: Dl,
  toFiniteNumber: Tl,
  findKey: ps,
  global: $t,
  isContextDefined: bs,
  isSpecCompliantForm: Rl,
  toJSONObject: Nl,
  isAsyncFn: Ol,
  isThenable: Fl,
  setImmediate: ms,
  asap: Il,
  isIterable: Ml
};
function q(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
v.inherits(q, Error, {
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
      config: v.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const _s = q.prototype, xs = {};
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
  xs[e] = { value: e };
});
Object.defineProperties(q, xs);
Object.defineProperty(_s, "isAxiosError", { value: !0 });
q.from = (e, t, u, n, r, i) => {
  const o = Object.create(_s);
  return v.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), q.call(o, e.message, t, u, n, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Ll = null;
function Er(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function Es(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zi(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = Es(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function Bl(e) {
  return v.isArray(e) && !e.some(Er);
}
const Pl = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Nn(e, t, u) {
  if (!v.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = v.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(m, g) {
    return !v.isUndefined(g[m]);
  });
  const n = u.metaTokens, r = u.visitor || l, i = u.dots, o = u.indexes, a = (u.Blob || typeof Blob != "undefined" && Blob) && v.isSpecCompliantForm(t);
  if (!v.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (v.isDate(d))
      return d.toISOString();
    if (!a && v.isBlob(d))
      throw new q("Blob is not supported. Use a Buffer instead.");
    return v.isArrayBuffer(d) || v.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, m, g) {
    let k = d;
    if (d && !g && typeof d == "object") {
      if (v.endsWith(m, "{}"))
        m = n ? m : m.slice(0, -2), d = JSON.stringify(d);
      else if (v.isArray(d) && Bl(d) || (v.isFileList(d) || v.endsWith(m, "[]")) && (k = v.toArray(d)))
        return m = Es(m), k.forEach(function(x, _) {
          !(v.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? zi([m], _, i) : o === null ? m : m + "[]",
            c(x)
          );
        }), !1;
    }
    return Er(d) ? !0 : (t.append(zi(g, m, i), c(d)), !1);
  }
  const f = [], h = Object.assign(Pl, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Er
  });
  function p(d, m) {
    if (!v.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), v.forEach(d, function(k, y) {
        (!(v.isUndefined(k) || k === null) && r.call(
          t,
          k,
          v.isString(y) ? y.trim() : y,
          m,
          h
        )) === !0 && p(k, m ? m.concat(y) : [y]);
      }), f.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function Ui(e) {
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
function Zr(e, t) {
  this._pairs = [], e && Nn(e, this, t);
}
const ys = Zr.prototype;
ys.append = function(t, u) {
  this._pairs.push([t, u]);
};
ys.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, Ui);
  } : Ui;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function zl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function vs(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || zl;
  v.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = v.isURLSearchParams(t) ? t.toString() : new Zr(t, u).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class $i {
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
    v.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ks = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ul = typeof URLSearchParams != "undefined" ? URLSearchParams : Zr, $l = typeof FormData != "undefined" ? FormData : null, ql = typeof Blob != "undefined" ? Blob : null, Hl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ul,
    FormData: $l,
    Blob: ql
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Wr = typeof window != "undefined" && typeof document != "undefined", yr = typeof navigator == "object" && navigator || void 0, jl = Wr && (!yr || ["ReactNative", "NativeScript", "NS"].indexOf(yr.product) < 0), Gl = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Zl = Wr && window.location.href || "http://localhost", Wl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Wr,
  hasStandardBrowserEnv: jl,
  hasStandardBrowserWebWorkerEnv: Gl,
  navigator: yr,
  origin: Zl
}, Symbol.toStringTag, { value: "Module" })), ve = ce(ce({}, Wl), Hl);
function Vl(e, t) {
  return Nn(e, new ve.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return ve.isNode && v.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kl(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Jl(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let i;
  for (n = 0; n < r; n++)
    i = u[n], t[i] = e[i];
  return t;
}
function ws(e) {
  function t(u, n, r, i) {
    let o = u[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= u.length;
    return o = !o && v.isArray(r) ? r.length : o, a ? (v.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !v.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && v.isArray(r[o]) && (r[o] = Jl(r[o])), !s);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const u = {};
    return v.forEachEntry(e, (n, r) => {
      t(Kl(n), r, u, 0);
    }), u;
  }
  return null;
}
function Yl(e, t, u) {
  if (v.isString(e))
    try {
      return (t || JSON.parse)(e), v.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const Uu = {
  transitional: ks,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, i = v.isObject(t);
    if (i && v.isHTMLForm(t) && (t = new FormData(t)), v.isFormData(t))
      return r ? JSON.stringify(ws(t)) : t;
    if (v.isArrayBuffer(t) || v.isBuffer(t) || v.isStream(t) || v.isFile(t) || v.isBlob(t) || v.isReadableStream(t))
      return t;
    if (v.isArrayBufferView(t))
      return t.buffer;
    if (v.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return Vl(t, this.formSerializer).toString();
      if ((s = v.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return Nn(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), Yl(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || Uu.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (v.isResponse(t) || v.isReadableStream(t))
      return t;
    if (t && v.isString(t) && (n && !this.responseType || r)) {
      const o = !(u && u.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? q.from(s, q.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: ve.classes.FormData,
    Blob: ve.classes.Blob
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
v.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Uu.headers[e] = {};
});
const Xl = v.toObjectSet([
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
]), Ql = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && Xl[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, qi = Symbol("internals");
function mu(e) {
  return e && String(e).trim().toLowerCase();
}
function un(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(un) : String(e);
}
function ef(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const tf = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function tr(e, t, u, n, r) {
  if (v.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!v.isString(t)) {
    if (v.isString(n))
      return t.indexOf(n) !== -1;
    if (v.isRegExp(n))
      return n.test(t);
  }
}
function uf(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function nf(e, t) {
  const u = v.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + u, {
      value: function(r, i, o) {
        return this[n].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let Te = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = mu(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = v.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = un(s));
    }
    const o = (s, a) => v.forEach(s, (c, l) => i(c, l, a));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (v.isString(t) && (t = t.trim()) && !tf(t))
      o(Ql(t), u);
    else if (v.isObject(t) && v.isIterable(t)) {
      let s = {}, a, c;
      for (const l of t) {
        if (!v.isArray(l))
          throw TypeError("Object iterator must return a key-value pair");
        s[c = l[0]] = (a = s[c]) ? v.isArray(a) ? [...a, l[1]] : [a, l[1]] : l[1];
      }
      o(s, u);
    } else
      t != null && i(u, t, n);
    return this;
  }
  get(t, u) {
    if (t = mu(t), t) {
      const n = v.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return ef(r);
        if (v.isFunction(u))
          return u.call(this, r, n);
        if (v.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = mu(t), t) {
      const n = v.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || tr(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = mu(o), o) {
        const s = v.findKey(n, o);
        s && (!u || tr(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return v.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const i = u[n];
      (!t || tr(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return v.forEach(this, (r, i) => {
      const o = v.findKey(n, i);
      if (o) {
        u[o] = un(r), delete u[i];
        return;
      }
      const s = t ? uf(i) : String(i).trim();
      s !== i && delete u[i], u[s] = un(r), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const u = /* @__PURE__ */ Object.create(null);
    return v.forEach(this, (n, r) => {
      n != null && n !== !1 && (u[r] = t && v.isArray(n) ? n.join(", ") : n);
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
    const n = (this[qi] = this[qi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = mu(o);
      n[s] || (nf(r, o), n[s] = !0);
    }
    return v.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Te.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(Te.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
v.freezeMethods(Te);
function ur(e, t) {
  const u = this || Uu, n = t || u, r = Te.from(n.headers);
  let i = n.data;
  return v.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function As(e) {
  return !!(e && e.__CANCEL__);
}
function fu(e, t, u) {
  q.call(this, e == null ? "canceled" : e, q.ERR_CANCELED, t, u), this.name = "CanceledError";
}
v.inherits(fu, q, {
  __CANCEL__: !0
});
function Cs(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new q(
    "Request failed with status code " + u.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function rf(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function of(e, t) {
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
function sf(e, t) {
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
const dn = (e, t, u = 3) => {
  let n = 0;
  const r = of(50, 250);
  return sf((i) => {
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
}, Hi = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, ji = (e) => (...t) => v.asap(() => e(...t)), af = ve.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, ve.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(ve.origin),
  ve.navigator && /(msie|trident)/i.test(ve.navigator.userAgent)
) : () => !0, cf = ve.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, u, n, r, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      v.isNumber(u) && o.push("expires=" + new Date(u).toGMTString()), v.isString(n) && o.push("path=" + n), v.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function lf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function ff(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ss(e, t, u) {
  let n = !lf(t);
  return e && (n || u == !1) ? ff(e, t) : t;
}
const Gi = (e) => e instanceof Te ? ce({}, e) : e;
function Gt(e, t) {
  t = t || {};
  const u = {};
  function n(c, l, f, h) {
    return v.isPlainObject(c) && v.isPlainObject(l) ? v.merge.call({ caseless: h }, c, l) : v.isPlainObject(l) ? v.merge({}, l) : v.isArray(l) ? l.slice() : l;
  }
  function r(c, l, f, h) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(c))
        return n(void 0, c, f, h);
    } else return n(c, l, f, h);
  }
  function i(c, l) {
    if (!v.isUndefined(l))
      return n(void 0, l);
  }
  function o(c, l) {
    if (v.isUndefined(l)) {
      if (!v.isUndefined(c))
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
    headers: (c, l, f) => r(Gi(c), Gi(l), f, !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    v.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const Ds = (e) => {
  const t = Gt({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = Te.from(o), t.url = vs(Ss(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (v.isFormData(u)) {
    if (ve.hasStandardBrowserEnv || ve.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ve.hasStandardBrowserEnv && (n && v.isFunction(n) && (n = n(t)), n || n !== !1 && af(t.url))) {
    const c = r && i && cf.read(i);
    c && o.set(r, c);
  }
  return t;
}, df = typeof XMLHttpRequest != "undefined", hf = df && function(e) {
  return new Promise(function(u, n) {
    const r = Ds(e);
    let i = r.data;
    const o = Te.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function m() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function k() {
      if (!g)
        return;
      const x = Te.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), E = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      Cs(function(R) {
        u(R), m();
      }, function(R) {
        n(R), m();
      }, E), g = null;
    }
    "onloadend" in g ? g.onloadend = k : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, g.onabort = function() {
      g && (n(new q("Request aborted", q.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new q("Network Error", q.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let _ = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const E = r.transitional || ks;
      r.timeoutErrorMessage && (_ = r.timeoutErrorMessage), n(new q(
        _,
        E.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && v.forEach(o.toJSON(), function(_, E) {
      g.setRequestHeader(E, _);
    }), v.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), s && s !== "json" && (g.responseType = r.responseType), c && ([h, d] = dn(c, !0), g.addEventListener("progress", h)), a && g.upload && ([f, p] = dn(a), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (x) => {
      g && (n(!x || x.type ? new fu(null, e, g) : x), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const y = rf(r.url);
    if (y && ve.protocols.indexOf(y) === -1) {
      n(new q("Unsupported protocol " + y + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, pf = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof q ? l : new fu(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new q(`timeout ${t} of ms exceeded`, q.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: a } = n;
    return a.unsubscribe = () => v.asap(s), a;
  }
}, bf = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, gf = function(e, t) {
  return Wn(this, null, function* () {
    try {
      for (var u = xi(mf(e)), n, r, i; n = !(r = yield new zt(u.next())).done; n = !1) {
        const o = r.value;
        yield* Vn(bf(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        n && (r = u.return) && (yield new zt(r.call(u)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, mf = function(e) {
  return Wn(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* Vn(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: u, value: n } = yield new zt(t.read());
        if (u)
          break;
        yield n;
      }
    } finally {
      yield new zt(t.cancel());
    }
  });
}, Zi = (e, t, u, n) => {
  const r = gf(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    pull(c) {
      return ge(this, null, function* () {
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
}, On = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ts = On && typeof ReadableStream == "function", _f = On && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => ge(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), Rs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, xf = Ts && Rs(() => {
  let e = !1;
  const t = new Request(ve.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Wi = 64 * 1024, vr = Ts && Rs(() => v.isReadableStream(new Response("").body)), hn = {
  stream: vr && ((e) => e.body)
};
On && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !hn[t] && (hn[t] = v.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Ef = (e) => ge(null, null, function* () {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (yield new Request(ve.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (yield _f(e)).byteLength;
}), yf = (e, t) => ge(null, null, function* () {
  const u = v.toFiniteNumber(e.getContentLength());
  return u == null ? Ef(t) : u;
}), vf = On && ((e) => ge(null, null, function* () {
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
  } = Ds(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = pf([r, i && i.toAbortSignal()], o), d;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (a && xf && u !== "get" && u !== "head" && (g = yield yf(l, n)) !== 0) {
      let E = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (v.isFormData(n) && (C = E.headers.get("content-type")) && l.setContentType(C), E.body) {
        const [R, D] = Hi(
          g,
          dn(ji(a))
        );
        n = Zi(E.body, Wi, R, D);
      }
    }
    v.isString(f) || (f = f ? "include" : "omit");
    const k = "credentials" in Request.prototype;
    d = new Request(t, we(ce({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: k ? f : void 0
    }));
    let y = yield fetch(d);
    const x = vr && (c === "stream" || c === "response");
    if (vr && (s || x && m)) {
      const E = {};
      ["status", "statusText", "headers"].forEach((B) => {
        E[B] = y[B];
      });
      const C = v.toFiniteNumber(y.headers.get("content-length")), [R, D] = s && Hi(
        C,
        dn(ji(s), !0)
      ) || [];
      y = new Response(
        Zi(y.body, Wi, R, () => {
          D && D(), m && m();
        }),
        E
      );
    }
    c = c || "text";
    let _ = yield hn[v.findKey(hn, c) || "text"](y, e);
    return !x && m && m(), yield new Promise((E, C) => {
      Cs(E, C, {
        data: _,
        headers: Te.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: d
      });
    });
  } catch (k) {
    throw m && m(), k && k.name === "TypeError" && /Load failed|fetch/i.test(k.message) ? Object.assign(
      new q("Network Error", q.ERR_NETWORK, e, d),
      {
        cause: k.cause || k
      }
    ) : q.from(k, k && k.code, e, d);
  }
})), kr = {
  http: Ll,
  xhr: hf,
  fetch: vf
};
v.forEach(kr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (u) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Vi = (e) => `- ${e}`, kf = (e) => v.isFunction(e) || e === null || e === !1, Ns = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !kf(u) && (n = kr[(o = String(u)).toLowerCase()], n === void 0))
        throw new q(`Unknown adapter '${o}'`);
      if (n)
        break;
      r[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Vi).join(`
`) : " " + Vi(i[0]) : "as no adapter specified";
      throw new q(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: kr
};
function nr(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fu(null, e);
}
function Ki(e) {
  return nr(e), e.headers = Te.from(e.headers), e.data = ur.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ns.getAdapter(e.adapter || Uu.adapter)(e).then(function(n) {
    return nr(e), n.data = ur.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Te.from(n.headers), n;
  }, function(n) {
    return As(n) || (nr(e), n && n.response && (n.response.data = ur.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Te.from(n.response.headers))), Promise.reject(n);
  });
}
const Os = "1.9.0", Fn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ji = {};
Fn.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + Os + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new q(
        r(o, " has been removed" + (u ? " in " + u : "")),
        q.ERR_DEPRECATED
      );
    return u && !Ji[o] && (Ji[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
Fn.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function wf(e, t, u) {
  if (typeof e != "object")
    throw new q("options must be an object", q.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new q("option " + i + " must be " + a, q.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new q("Unknown option " + i, q.ERR_BAD_OPTION);
  }
}
const nn = {
  assertOptions: wf,
  validators: Fn
}, nt = nn.validators;
let Ht = class {
  constructor(t) {
    this.defaults = t || {}, this.interceptors = {
      request: new $i(),
      response: new $i()
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
    return ge(this, null, function* () {
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
    n !== void 0 && nn.assertOptions(n, {
      silentJSONParsing: nt.transitional(nt.boolean),
      forcedJSONParsing: nt.transitional(nt.boolean),
      clarifyTimeoutError: nt.transitional(nt.boolean)
    }, !1), r != null && (v.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : nn.assertOptions(r, {
      encode: nt.function,
      serialize: nt.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), nn.assertOptions(u, {
      baseUrl: nt.spelling("baseURL"),
      withXsrfToken: nt.spelling("withXSRFToken")
    }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
    let o = i && v.merge(
      i.common,
      i[u.method]
    );
    i && v.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), u.headers = Te.concat(o, i);
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
      const d = [Ki.bind(this), void 0];
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
      l = Ki.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Gt(this.defaults, t);
    const u = Ss(t.baseURL, t.url, t.allowAbsoluteUrls);
    return vs(u, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function(t) {
  Ht.prototype[t] = function(u, n) {
    return this.request(Gt(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
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
  Ht.prototype[t] = u(), Ht.prototype[t + "Form"] = u(!0);
});
let Af = class Fs {
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
      token: new Fs(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Cf(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function Sf(e) {
  return v.isObject(e) && e.isAxiosError === !0;
}
const wr = {
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
Object.entries(wr).forEach(([e, t]) => {
  wr[t] = e;
});
function Is(e) {
  const t = new Ht(e), u = ls(Ht.prototype.request, t);
  return v.extend(u, Ht.prototype, t, { allOwnKeys: !0 }), v.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return Is(Gt(e, r));
  }, u;
}
const ie = Is(Uu);
ie.Axios = Ht;
ie.CanceledError = fu;
ie.CancelToken = Af;
ie.isCancel = As;
ie.VERSION = Os;
ie.toFormData = Nn;
ie.AxiosError = q;
ie.Cancel = ie.CanceledError;
ie.all = function(t) {
  return Promise.all(t);
};
ie.spread = Cf;
ie.isAxiosError = Sf;
ie.mergeConfig = Gt;
ie.AxiosHeaders = Te;
ie.formToJSON = (e) => ws(v.isHTMLForm(e) ? new FormData(e) : e);
ie.getAdapter = Ns.getAdapter;
ie.HttpStatusCode = wr;
ie.default = ie;
const {
  Axios: Sp,
  AxiosError: Dp,
  CanceledError: Tp,
  isCancel: Rp,
  CancelToken: Np,
  VERSION: Op,
  all: Fp,
  Cancel: Ip,
  isAxiosError: Mp,
  spread: Lp,
  toFormData: Bp,
  AxiosHeaders: Pp,
  HttpStatusCode: zp,
  formToJSON: Up,
  getAdapter: $p,
  mergeConfig: qp
} = ie, Df = ie.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), Ms = ie.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), Tf = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null,
  hasMore: !0,
  currentPage: 1
}, Ue = as(Tf);
q0(
  Ue,
  (e) => e.messages.map((t) => we(ce({}, t), {
    message: t.message
  }))
);
const Rf = (e, t) => ge(null, null, function* () {
  const u = localStorage.getItem("userId"), n = t.bot_id;
  if (t.custom_prompt, !u || !n)
    throw new Error("User ID and Bot ID are required");
  const r = cs(Ue);
  let i = "", o = "";
  Ue.update((s) => we(ce({}, s), {
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
      bot_id: n,
      prompt: e,
      stream: !0
    };
    s && (a.conversation_id = r.currentChatId), yield Ms.post("/chat/completion", a, {
      responseType: "text",
      headers: {
        Accept: "text/event-stream"
      },
      onDownloadProgress: (c) => {
        var d, m;
        const l = ((m = (d = c.event) == null ? void 0 : d.target) == null ? void 0 : m.responseText) || "";
        if (!l || l === i) return;
        const f = l.slice(i.length);
        i = l;
        const h = f.split(`
`);
        let p = "";
        for (const g of h)
          if (g) {
            if (g.startsWith("event:")) {
              p = g.replace("event:", "").trim();
              continue;
            }
            if (g.startsWith("data:")) {
              const k = g.replace("data:", "");
              if (p === "message")
                k.trim() === "<|>" ? Ue.update((y) => {
                  const x = {
                    id: Date.now().toString(),
                    chatId: y.currentChatId || "",
                    role: "ai",
                    message: o,
                    created_at: (/* @__PURE__ */ new Date()).toISOString()
                  };
                  return we(ce({}, y), {
                    messages: y.messages.map((_) => _.id === "streaming" ? x : _),
                    isLoading: !1
                  });
                }) : k && (o += k, Ue.update((y) => we(ce({}, y), {
                  messages: y.messages.map((x) => x.id === "streaming" ? we(ce({}, x), { message: o }) : x)
                })));
              else if (p === "conversation_id") {
                const y = k.trim();
                localStorage.setItem("currentChatId", y), Ue.update((x) => we(ce({}, x), {
                  currentChatId: y,
                  messages: x.messages.map((_) => _.chatId ? _ : we(ce({}, _), { chatId: y }))
                }));
              }
            }
          }
      }
    });
  } catch (s) {
    throw console.error("Error sending message:", s), Ue.update((a) => we(ce({}, a), {
      isLoading: !1
    })), s;
  }
}), Ls = (e, t = 1, u = 10) => ge(null, null, function* () {
  var n, r, i, o, s, a, c, l;
  try {
    const f = yield Ms.get(`/chat/${e}/messages`, {
      params: {
        page: t,
        page_size: u
      }
    }), p = (((n = f.data) == null ? void 0 : n.messages) || []).map((g, k) => {
      var y, x, _, E, C;
      return {
        id: ((y = g.id) != null ? y : `${Date.now()}-${k}`).toString(),
        chatId: e,
        role: ((x = g.role) != null ? x : g.type) === "human" ? "human" : "ai",
        message: (E = (_ = g.message) != null ? _ : g.content) != null ? E : "",
        created_at: (C = g.created_at) != null ? C : (/* @__PURE__ */ new Date()).toISOString()
      };
    }).sort((g, k) => {
      const y = new Date(g.created_at).getTime(), x = new Date(k.created_at).getTime();
      return y - x;
    }), d = (a = (r = f.data) == null ? void 0 : r.total) != null ? a : (s = (o = (i = f.data) == null ? void 0 : i.pagination) == null ? void 0 : o.total) != null ? s : 0, m = (l = (c = f.data) == null ? void 0 : c.has_next) != null ? l : d ? t * u < d : !1;
    Ue.update((g) => we(ce({}, g), {
      messages: t === 1 ? p : [...p, ...g.messages],
      hasMore: !!m,
      currentPage: t,
      currentChatId: e
    })), localStorage.setItem("currentChatId", e);
  } catch (f) {
    console.error("Error loading chat history:", f), Ue.update((h) => we(ce({}, h), {
      error: "Failed to load chat history"
    }));
  }
});
Pc();
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
const Nf = {
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
var Of = /* @__PURE__ */ k0("<svg><!><!></svg>");
function lt(e, t) {
  const u = $e(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = $e(u, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  su(t, !1);
  let r = bt(t, "name", 8, void 0), i = bt(t, "color", 8, "currentColor"), o = bt(t, "size", 8, 24), s = bt(t, "strokeWidth", 8, 2), a = bt(t, "absoluteStrokeWidth", 8, !1), c = bt(t, "iconNode", 24, () => []);
  const l = (...m) => m.filter((g, k, y) => !!g && y.indexOf(g) === k).join(" ");
  U0();
  var f = Of();
  let h;
  var p = re(f);
  us(p, 1, c, C0, (m, g) => {
    let k = () => P(g)[0], y = () => P(g)[1];
    var x = Ge(), _ = je(x);
    F0(_, k, !0, (E, C) => {
      let R;
      Ie(() => R = Fi(E, R, ce({}, y())));
    }), Q(m, x);
  });
  var d = Ke(p);
  Xe(d, t, "default", {}), Ie(
    (m, g) => h = Fi(f, h, we(ce(ce({}, Nf), n), {
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
    Mr
  ), Q(e, f), au();
}
function Bs(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ps(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function zs(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Us(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function $s(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function qs(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function pn(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Hs(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ff(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function js(e, t) {
  const u = $e(t, [
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
      var o = Ge(), s = je(o);
      Xe(s, t, "default", {}), Q(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const Yi = {};
function If(e) {
  let t = Yi[e];
  if (t)
    return t;
  t = Yi[e] = [];
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
  const u = If(t);
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
const Xi = {};
function Mf(e) {
  let t = Xi[e];
  if (t)
    return t;
  t = Xi[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function $u(e, t, u) {
  typeof t != "string" && (u = t, t = $u.defaultChars), typeof u == "undefined" && (u = !0);
  const n = Mf(t);
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
$u.defaultChars = ";/?:@&=+$,-_.!~*'()#";
$u.componentChars = "-_.!~*'()";
function Vr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function bn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Lf = /^([a-z0-9.+-]+:)/i, Bf = /:[0-9]*$/, Pf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, zf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Uf = ["{", "}", "|", "\\", "^", "`"].concat(zf), $f = ["'"].concat(Uf), Qi = ["%", "/", "?", ";", "#"].concat($f), eo = ["/", "?", "#"], qf = 255, to = /^[+a-z0-9A-Z_-]{0,63}$/, Hf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, uo = {
  javascript: !0,
  "javascript:": !0
}, no = {
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
function Kr(e, t) {
  if (e && e instanceof bn) return e;
  const u = new bn();
  return u.parse(e, t), u;
}
bn.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Pf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Lf.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && uo[o]) && (i = i.substr(2), this.slashes = !0)), !uo[o] && (r || o && !no[o])) {
    let c = -1;
    for (let d = 0; d < eo.length; d++)
      n = i.indexOf(eo[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < Qi.length; d++)
      n = i.indexOf(Qi[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let m = 0, g = d.length; m < g; m++) {
        const k = d[m];
        if (k && !k.match(to)) {
          let y = "";
          for (let x = 0, _ = k.length; x < _; x++)
            k.charCodeAt(x) > 127 ? y += "x" : y += k[x];
          if (!y.match(to)) {
            const x = d.slice(0, m), _ = d.slice(m + 1), E = k.match(Hf);
            E && (x.push(E[1]), _.unshift(E[2])), _.length && (i = _.join(".") + i), this.hostname = x.join(".");
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
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), no[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
bn.prototype.parseHost = function(e) {
  let t = Bf.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: nu,
  encode: $u,
  format: Vr,
  parse: Kr
}, Symbol.toStringTag, { value: "Module" })), Gs = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Zs = /[\0-\x1F\x7F-\x9F]/, Gf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Jr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Ws = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Vs = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Gs,
  Cc: Zs,
  Cf: Gf,
  P: Jr,
  S: Ws,
  Z: Vs
}, Symbol.toStringTag, { value: "Module" })), Wf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Vf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var rr;
const Kf = /* @__PURE__ */ new Map([
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
]), Jf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (rr = String.fromCodePoint) !== null && rr !== void 0 ? rr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Yf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Kf.get(e)) !== null && t !== void 0 ? t : e;
}
var _e;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(_e || (_e = {}));
const Xf = 32;
var Tt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Tt || (Tt = {}));
function Ar(e) {
  return e >= _e.ZERO && e <= _e.NINE;
}
function Qf(e) {
  return e >= _e.UPPER_A && e <= _e.UPPER_F || e >= _e.LOWER_A && e <= _e.LOWER_F;
}
function ed(e) {
  return e >= _e.UPPER_A && e <= _e.UPPER_Z || e >= _e.LOWER_A && e <= _e.LOWER_Z || Ar(e);
}
function td(e) {
  return e === _e.EQUALS || ed(e);
}
var me;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(me || (me = {}));
var St;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(St || (St = {}));
class ud {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = me.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = St.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = me.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case me.EntityStart:
        return t.charCodeAt(u) === _e.NUM ? (this.state = me.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = me.NamedEntity, this.stateNamedEntity(t, u));
      case me.NumericStart:
        return this.stateNumericStart(t, u);
      case me.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case me.NumericHex:
        return this.stateNumericHex(t, u);
      case me.NamedEntity:
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | Xf) === _e.LOWER_X ? (this.state = me.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = me.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (Ar(r) || Qf(r))
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
      if (Ar(r))
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
    if (t === _e.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === St.Strict)
      return 0;
    return this.emitCodePoint(Yf(this.result), this.consumed), this.errors && (t !== _e.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
      if (this.treeIndex = nd(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === St.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        td(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & Tt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === _e.SEMI)
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
      case me.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== St.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case me.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case me.NumericHex:
        return this.emitNumericEntity(0, 3);
      case me.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case me.EntityStart:
        return 0;
    }
  }
}
function Ks(e) {
  let t = "";
  const u = new ud(e, (n) => t += Jf(n));
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
function nd(e, t, u, n) {
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
const rd = Ks(Wf);
Ks(Vf);
function Js(e, t = St.Legacy) {
  return rd(e, t);
}
function id(e) {
  return Object.prototype.toString.call(e);
}
function Yr(e) {
  return id(e) === "[object String]";
}
const od = Object.prototype.hasOwnProperty;
function sd(e, t) {
  return od.call(e, t);
}
function In(e) {
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
function Ys(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function Xr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function gn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const Xs = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, ad = /&([a-z#][a-z0-9]{1,31});/gi, cd = new RegExp(Xs.source + "|" + ad.source, "gi"), ld = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function fd(e, t) {
  if (t.charCodeAt(0) === 35 && ld.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Xr(n) ? gn(n) : e;
  }
  const u = Js(e);
  return u !== e ? u : e;
}
function dd(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Xs, "$1");
}
function ru(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(cd, function(t, u, n) {
    return u || fd(t, n);
  });
}
const hd = /[&<>"]/, pd = /[&<>"]/g, bd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function gd(e) {
  return bd[e];
}
function Mt(e) {
  return hd.test(e) ? e.replace(pd, gd) : e;
}
const md = /[.?*+^$[\]\\(){}|-]/g;
function _d(e) {
  return e.replace(md, "\\$&");
}
function ee(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Du(e) {
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
function Tu(e) {
  return Jr.test(e) || Ws.test(e);
}
function Ru(e) {
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
function Mn(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const xd = { mdurl: jf, ucmicro: Zf }, Ed = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Ys,
  assign: In,
  escapeHtml: Mt,
  escapeRE: _d,
  fromCodePoint: gn,
  has: sd,
  isMdAsciiPunct: Ru,
  isPunctChar: Tu,
  isSpace: ee,
  isString: Yr,
  isValidEntityCode: Xr,
  isWhiteSpace: Du,
  lib: xd,
  normalizeReference: Mn,
  unescapeAll: ru,
  unescapeMd: dd
}, Symbol.toStringTag, { value: "Module" }));
function yd(e, t, u) {
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
function vd(e, t, u) {
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
function kd(e, t, u, n) {
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
const wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: vd,
  parseLinkLabel: yd,
  parseLinkTitle: kd
}, Symbol.toStringTag, { value: "Module" })), ft = {};
ft.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + Mt(i.content) + "</code>";
};
ft.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + Mt(e[t].content) + `</code></pre>
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
  if (u.highlight ? c = u.highlight(i.content, s, a) || Mt(i.content) : c = Mt(i.content), c.indexOf("<pre") === 0)
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
  return Mt(e[t].content);
};
ft.html_block = function(e, t) {
  return e[t].content;
};
ft.html_inline = function(e, t) {
  return e[t].content;
};
function du() {
  this.rules = In({}, ft);
}
du.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + Mt(t.attrs[u][0]) + '="' + Mt(t.attrs[u][1]) + '"';
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
function Ne() {
  this.__rules__ = [], this.__cache__ = null;
}
Ne.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Ne.prototype.__compile__ = function() {
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
Ne.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
Ne.prototype.before = function(e, t, u, n) {
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
Ne.prototype.after = function(e, t, u, n) {
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
Ne.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Ne.prototype.enable = function(e, t) {
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
Ne.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Ne.prototype.disable = function(e, t) {
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
Ne.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function et(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
et.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
et.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
et.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
et.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
et.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function Qs(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
Qs.prototype.Token = et;
const Ad = /\r\n?|\n/g, Cd = /\0/g;
function Sd(e) {
  let t;
  t = e.src.replace(Ad, `
`), t = t.replace(Cd, "�"), e.src = t;
}
function Dd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Td(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Rd(e) {
  return /^<a[>\s]/i.test(e);
}
function Nd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Od(e) {
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
        if (s.type === "html_inline" && (Rd(s.content) && i > 0 && i--, Nd(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
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
              const E = new e.Token("text", "", 0);
              E.content = a.slice(h, k), E.level = f, l.push(E);
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
          t[u].children = r = Ys(r, o, l);
        }
      }
    }
}
const ea = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Fd = /\((c|tm|r)\)/i, Id = /\((c|tm|r)\)/ig, Md = {
  c: "©",
  r: "®",
  tm: "™"
};
function Ld(e, t) {
  return Md[t.toLowerCase()];
}
function Bd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Id, Ld)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Pd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && ea.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function zd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Fd.test(e.tokens[t].content) && Bd(e.tokens[t].children), ea.test(e.tokens[t].content) && Pd(e.tokens[t].children));
}
const Ud = /['"]/, ro = /['"]/g, io = "’";
function Xu(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function $d(e, t) {
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
        ro.lastIndex = a;
        const l = ro.exec(s);
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
        const g = Ru(d) || Tu(String.fromCharCode(d)), k = Ru(m) || Tu(String.fromCharCode(m)), y = Du(d), x = Du(m);
        if (x ? f = !1 : k && (y || g || (f = !1)), y ? h = !1 : g && (x || k || (h = !1)), m === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = g, h = k), !f && !h) {
          p && (i.content = Xu(i.content, l.index, io));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let _ = n[u];
            if (n[u].level < o)
              break;
            if (_.single === p && n[u].level === o) {
              _ = n[u];
              let E, C;
              p ? (E = t.md.options.quotes[2], C = t.md.options.quotes[3]) : (E = t.md.options.quotes[0], C = t.md.options.quotes[1]), i.content = Xu(i.content, l.index, C), e[_.token].content = Xu(
                e[_.token].content,
                _.pos,
                E
              ), a += C.length - 1, _.token === r && (a += E.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = Xu(i.content, l.index, io));
      }
  }
}
function qd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Ud.test(e.tokens[t].content) || $d(e.tokens[t].children, e);
}
function Hd(e) {
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
const ir = [
  ["normalize", Sd],
  ["block", Dd],
  ["inline", Td],
  ["linkify", Od],
  ["replacements", zd],
  ["smartquotes", qd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Hd]
];
function Qr() {
  this.ruler = new Ne();
  for (let e = 0; e < ir.length; e++)
    this.ruler.push(ir[e][0], ir[e][1]);
}
Qr.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
Qr.prototype.State = Qs;
function dt(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (ee(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
dt.prototype.push = function(e, t, u) {
  const n = new et(e, t, u);
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
    if (!ee(n))
      break;
  }
  return t;
};
dt.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!ee(this.src.charCodeAt(--t)))
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
      if (ee(h))
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
dt.prototype.Token = et;
const jd = 65536;
function or(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function oo(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), i = !1, o = 0, s = "";
  for (; n < u; )
    r === 124 && (i ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), i = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(o)), t;
}
function Gd(e, t, u, n) {
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
  if (s !== 124 && s !== 45 && s !== 58 && !ee(s) || o === 45 && ee(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const _ = e.src.charCodeAt(i);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !ee(_))
      return !1;
    i++;
  }
  let a = or(e, t + 1), c = a.split("|");
  const l = [];
  for (let _ = 0; _ < c.length; _++) {
    const E = c[_].trim();
    if (!E) {
      if (_ === 0 || _ === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(E))
      return !1;
    E.charCodeAt(E.length - 1) === 58 ? l.push(E.charCodeAt(0) === 58 ? "center" : "right") : E.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = or(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = oo(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
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
  const k = e.push("tr_open", "tr", 1);
  k.map = [t, t + 1];
  for (let _ = 0; _ < c.length; _++) {
    const E = e.push("th_open", "th", 1);
    l[_] && (E.attrs = [["style", "text-align:" + l[_]]]);
    const C = e.push("inline", "", 0);
    C.content = c[_].trim(), C.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let y, x = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let _ = !1;
    for (let C = 0, R = p.length; C < R; C++)
      if (p[C](e, r, u, !0)) {
        _ = !0;
        break;
      }
    if (_ || (a = or(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = oo(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), x += f - c.length, x > jd))
      break;
    if (r === t + 2) {
      const C = e.push("tbody_open", "tbody", 1);
      C.map = y = [t + 2, 0];
    }
    const E = e.push("tr_open", "tr", 1);
    E.map = [r, r + 1];
    for (let C = 0; C < f; C++) {
      const R = e.push("td_open", "td", 1);
      l[C] && (R.attrs = [["style", "text-align:" + l[C]]]);
      const D = e.push("inline", "", 0);
      D.content = c[C] ? c[C].trim() : "", D.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return y && (e.push("tbody_close", "tbody", -1), y[1] = r), e.push("table_close", "table", -1), m[1] = r, e.parentType = h, e.line = r, !0;
}
function Zd(e, t, u) {
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
function Wd(e, t, u, n) {
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
function Vd(e, t, u, n) {
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
    const x = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !x) {
      let E = e.sCount[d] + 1, C, R;
      e.src.charCodeAt(r) === 32 ? (r++, E++, R = !1, C = !0) : e.src.charCodeAt(r) === 9 ? (C = !0, (e.bsCount[d] + E) % 4 === 3 ? (r++, E++, R = !1) : R = !0) : C = !1;
      let D = E;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const B = e.src.charCodeAt(r);
        if (ee(B))
          B === 9 ? D += 4 - (D + e.bsCount[d] + (R ? 1 : 0)) % 4 : D++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (C ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = D - E, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let _ = !1;
    for (let E = 0, C = f.length; E < C; E++)
      if (f[E](e, d, u, !0)) {
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
function Kd(e, t, u, n) {
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
    if (c !== o && !ee(c))
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
function so(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!ee(i))
      return -1;
  }
  return n;
}
function ao(e, t) {
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
  return r < n && (i = e.src.charCodeAt(r), !ee(i)) ? -1 : r;
}
function Jd(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Yd(e, t, u, n) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = ao(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = so(e, a)) >= 0)
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
  let k = !1;
  const y = e.md.block.ruler.getRules("list"), x = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const _ = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let E = _;
    for (; i < r; ) {
      const L = e.src.charCodeAt(i);
      if (L === 9)
        E += 4 - (E + e.bsCount[a]) % 4;
      else if (L === 32)
        E++;
      else
        break;
      i++;
    }
    const C = i;
    let R;
    C >= r ? R = 1 : R = E - _, R > 4 && (R = 1);
    const D = _ + R;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const B = [a, 0];
    s.map = B, f && (s.info = e.src.slice(o, p - 1));
    const Z = e.tight, ne = e.tShift[a], le = e.sCount[a], te = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = D, e.tight = !0, e.tShift[a] = C - e.bMarks[a], e.sCount[a] = E, C >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || k) && (c = !1), k = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = te, e.tShift[a] = ne, e.sCount[a] = le, e.tight = Z, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, B[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let N = !1;
    for (let L = 0, K = y.length; L < K; L++)
      if (y[L](e, a, u, !0)) {
        N = !0;
        break;
      }
    if (N)
      break;
    if (f) {
      if (p = ao(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = so(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), g[1] = a, e.line = a, e.parentType = x, c && Jd(e, m), !0;
}
function Xd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(y) {
    const x = e.lineMax;
    if (y >= x || e.isEmpty(y))
      return null;
    let _ = !1;
    if (e.sCount[y] - e.blkIndent > 3 && (_ = !0), e.sCount[y] < 0 && (_ = !0), !_) {
      const R = e.md.block.ruler.getRules("reference"), D = e.parentType;
      e.parentType = "reference";
      let B = !1;
      for (let Z = 0, ne = R.length; Z < ne; Z++)
        if (R[Z](e, y, x, !0)) {
          B = !0;
          break;
        }
      if (e.parentType = D, B)
        return null;
    }
    const E = e.bMarks[y] + e.tShift[y], C = e.eMarks[y];
    return e.src.slice(E, C + 1);
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
    } else if (!ee(y)) break;
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
    } else if (!ee(y)) break;
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
    if (!ee(y))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && g)
    for (g = "", r = h, o = p; r < i; ) {
      const y = a.charCodeAt(r);
      if (!ee(y))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const k = Mn(a.slice(1, c));
  return k ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[k] == "undefined" && (e.env.references[k] = { title: g, href: f }), e.line = o), !0) : !1;
}
const Qd = [
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
], e1 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t1 = "[^\"'=<>`\\x00-\\x20]+", u1 = "'[^']*'", n1 = '"[^"]*"', r1 = "(?:" + t1 + "|" + u1 + "|" + n1 + ")", i1 = "(?:\\s+" + e1 + "(?:\\s*=\\s*" + r1 + ")?)", ta = "<[A-Za-z][A-Za-z0-9\\-]*" + i1 + "*\\s*\\/?>", ua = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", o1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", s1 = "<[?][\\s\\S]*?[?]>", a1 = "<![A-Za-z][^>]*>", c1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", l1 = new RegExp("^(?:" + ta + "|" + ua + "|" + o1 + "|" + s1 + "|" + a1 + "|" + c1 + ")"), f1 = new RegExp("^(?:" + ta + "|" + ua + ")"), Xt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Qd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(f1.source + "\\s*$"), /^$/, !1]
];
function d1(e, t, u, n) {
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
function h1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !ee(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && ee(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function p1(e, t, u) {
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
function b1(e, t, u) {
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
const Qu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Gd, ["paragraph", "reference"]],
  ["code", Zd],
  ["fence", Wd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Vd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Kd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Yd, ["paragraph", "reference", "blockquote"]],
  ["reference", Xd],
  ["html_block", d1, ["paragraph", "reference", "blockquote"]],
  ["heading", h1, ["paragraph", "reference", "blockquote"]],
  ["lheading", p1],
  ["paragraph", b1]
];
function Ln() {
  this.ruler = new Ne();
  for (let e = 0; e < Qu.length; e++)
    this.ruler.push(Qu[e][0], Qu[e][1], { alt: (Qu[e][2] || []).slice() });
}
Ln.prototype.tokenize = function(e, t, u) {
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
Ln.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
Ln.prototype.State = dt;
function qu(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
qu.prototype.pushPending = function() {
  const e = new et("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
qu.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new et(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
qu.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = Ru(r) || Tu(String.fromCharCode(r)), c = Ru(s) || Tu(String.fromCharCode(s)), l = Du(r), f = Du(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
qu.prototype.Token = et;
function g1(e) {
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
function m1(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !g1(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const _1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function x1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(_1);
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
function E1(e, t) {
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
  for (u++; u < r && ee(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const ei = [];
for (let e = 0; e < 256; e++)
  ei.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  ei[e.charCodeAt(0)] = 1;
});
function y1(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!ee(r)); )
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
    r < 256 && ei[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function v1(e, t) {
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
function k1(e, t) {
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
function co(e, t) {
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
function w1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  co(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && co(e, t[n].delimiters);
}
const na = {
  tokenize: k1,
  postProcess: w1
};
function A1(e, t) {
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
function lo(e, t) {
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
function C1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  lo(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && lo(e, t[n].delimiters);
}
const ra = {
  tokenize: A1,
  postProcess: C1
};
function S1(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!ee(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!ee(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!ee(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[Mn(n)], !i)
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
function D1(e, t) {
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!ee(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!ee(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!ee(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[Mn(r)], !o)
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
    const g = e.push("image", "img", 0), k = [["src", l], ["alt", ""]];
    g.attrs = k, g.children = m, g.content = n, a && k.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const T1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, R1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function N1(e, t) {
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
  if (R1.test(i)) {
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
  if (T1.test(i)) {
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
function O1(e) {
  return /^<a[>\s]/i.test(e);
}
function F1(e) {
  return /^<\/a\s*>/i.test(e);
}
function I1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function M1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !I1(r))
    return !1;
  const i = e.src.slice(n).match(l1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], O1(o.content) && e.linkLevel++, F1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const L1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, B1 = /^&([a-z][a-z0-9]{1,31});/i;
function P1(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const i = e.src.slice(u).match(L1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = Xr(o) ? gn(o) : gn(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(B1);
    if (i) {
      const o = Js(i[0]);
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
function fo(e) {
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
function z1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  fo(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && fo(t[n].delimiters);
}
function U1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const sr = [
  ["text", m1],
  ["linkify", x1],
  ["newline", E1],
  ["escape", y1],
  ["backticks", v1],
  ["strikethrough", na.tokenize],
  ["emphasis", ra.tokenize],
  ["link", S1],
  ["image", D1],
  ["autolink", N1],
  ["html_inline", M1],
  ["entity", P1]
], ar = [
  ["balance_pairs", z1],
  ["strikethrough", na.postProcess],
  ["emphasis", ra.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", U1]
];
function Hu() {
  this.ruler = new Ne();
  for (let e = 0; e < sr.length; e++)
    this.ruler.push(sr[e][0], sr[e][1]);
  this.ruler2 = new Ne();
  for (let e = 0; e < ar.length; e++)
    this.ruler2.push(ar[e][0], ar[e][1]);
}
Hu.prototype.skipToken = function(e) {
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
Hu.prototype.tokenize = function(e) {
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
Hu.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
Hu.prototype.State = qu;
function $1(e) {
  const t = {};
  e = e || {}, t.src_Any = Gs.source, t.src_Cc = Zs.source, t.src_Z = Vs.source, t.src_P = Jr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Cr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function Bn(e) {
  return Object.prototype.toString.call(e);
}
function q1(e) {
  return Bn(e) === "[object String]";
}
function H1(e) {
  return Bn(e) === "[object Object]";
}
function j1(e) {
  return Bn(e) === "[object RegExp]";
}
function ho(e) {
  return Bn(e) === "[object Function]";
}
function G1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ia = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function Z1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || ia.hasOwnProperty(u);
  }, !1);
}
const W1 = {
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
}, V1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", K1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function J1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Y1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function po() {
  return function(e, t) {
    t.normalize(e);
  };
}
function mn(e) {
  const t = e.re = $1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(V1), u.push(t.src_xn), t.src_tlds = u.join("|");
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
    if (e.__compiled__[s] = c, H1(a)) {
      j1(a.validate) ? c.validate = Y1(a.validate) : ho(a.validate) ? c.validate = a.validate : i(s, a), ho(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = po();
      return;
    }
    if (q1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: po() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(G1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), J1(e);
}
function X1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function Sr(e, t) {
  const u = new X1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Le(e, t) {
  if (!(this instanceof Le))
    return new Le(e, t);
  t || Z1(e) && (t = e, e = {}), this.__opts__ = Cr({}, ia, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Cr({}, W1, e), this.__compiled__ = {}, this.__tlds__ = K1, this.__tlds_replaced__ = !1, this.re = {}, mn(this);
}
Le.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, mn(this), this;
};
Le.prototype.set = function(t) {
  return this.__opts__ = Cr(this.__opts__, t), this;
};
Le.prototype.test = function(t) {
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
Le.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Le.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
Le.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Sr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(Sr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Le.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, Sr(this, 0)) : null;
};
Le.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), mn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, mn(this), this);
};
Le.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Le.prototype.onCompile = function() {
};
const Qt = 2147483647, ot = 36, ti = 1, Nu = 26, Q1 = 38, eh = 700, oa = 72, sa = 128, aa = "-", th = /^xn--/, uh = /[^\0-\x7F]/, nh = /[\x2E\u3002\uFF0E\uFF61]/g, rh = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, cr = ot - ti, st = Math.floor, lr = String.fromCharCode;
function Ct(e) {
  throw new RangeError(rh[e]);
}
function ih(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function ca(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(nh, ".");
  const r = e.split("."), i = ih(r, t).join(".");
  return n + i;
}
function la(e) {
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
const oh = (e) => String.fromCodePoint(...e), sh = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : ot;
}, bo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, fa = function(e, t, u) {
  let n = 0;
  for (e = u ? st(e / eh) : e >> 1, e += st(e / t); e > cr * Nu >> 1; n += ot)
    e = st(e / cr);
  return st(n + (cr + 1) * e / (e + Q1));
}, da = function(e) {
  const t = [], u = e.length;
  let n = 0, r = sa, i = oa, o = e.lastIndexOf(aa);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && Ct("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = ot; ; f += ot) {
      s >= u && Ct("invalid-input");
      const h = sh(e.charCodeAt(s++));
      h >= ot && Ct("invalid-input"), h > st((Qt - n) / l) && Ct("overflow"), n += h * l;
      const p = f <= i ? ti : f >= i + Nu ? Nu : f - i;
      if (h < p)
        break;
      const d = ot - p;
      l > st(Qt / d) && Ct("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = fa(n - a, c, a == 0), st(n / c) > Qt - r && Ct("overflow"), r += st(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, ha = function(e) {
  const t = [];
  e = la(e);
  const u = e.length;
  let n = sa, r = 0, i = oa;
  for (const a of e)
    a < 128 && t.push(lr(a));
  const o = t.length;
  let s = o;
  for (o && t.push(aa); s < u; ) {
    let a = Qt;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > st((Qt - r) / c) && Ct("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > Qt && Ct("overflow"), l === n) {
        let f = r;
        for (let h = ot; ; h += ot) {
          const p = h <= i ? ti : h >= i + Nu ? Nu : h - i;
          if (f < p)
            break;
          const d = f - p, m = ot - p;
          t.push(
            lr(bo(p + d % m, 0))
          ), f = st(d / m);
        }
        t.push(lr(bo(f, 0))), i = fa(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, ah = function(e) {
  return ca(e, function(t) {
    return th.test(t) ? da(t.slice(4).toLowerCase()) : t;
  });
}, ch = function(e) {
  return ca(e, function(t) {
    return uh.test(t) ? "xn--" + ha(t) : t;
  });
}, pa = {
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
    decode: la,
    encode: oh
  },
  decode: da,
  encode: ha,
  toASCII: ch,
  toUnicode: ah
}, lh = {
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
}, fh = {
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
}, dh = {
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
}, hh = {
  default: lh,
  zero: fh,
  commonmark: dh
}, ph = /^(vbscript|javascript|file|data):/, bh = /^data:image\/(gif|png|jpeg|webp);/;
function gh(e) {
  const t = e.trim().toLowerCase();
  return ph.test(t) ? bh.test(t) : !0;
}
const ba = ["http:", "https:", "mailto:"];
function mh(e) {
  const t = Kr(e, !0);
  if (t.hostname && (!t.protocol || ba.indexOf(t.protocol) >= 0))
    try {
      t.hostname = pa.toASCII(t.hostname);
    } catch (u) {
    }
  return $u(Vr(t));
}
function _h(e) {
  const t = Kr(e, !0);
  if (t.hostname && (!t.protocol || ba.indexOf(t.protocol) >= 0))
    try {
      t.hostname = pa.toUnicode(t.hostname);
    } catch (u) {
    }
  return nu(Vr(t), nu.defaultChars + "%");
}
function qe(e, t) {
  if (!(this instanceof qe))
    return new qe(e, t);
  t || Yr(e) || (t = e || {}, e = "default"), this.inline = new Hu(), this.block = new Ln(), this.core = new Qr(), this.renderer = new du(), this.linkify = new Le(), this.validateLink = gh, this.normalizeLink = mh, this.normalizeLinkText = _h, this.utils = Ed, this.helpers = In({}, wd), this.options = {}, this.configure(e), t && this.set(t);
}
qe.prototype.set = function(e) {
  return In(this.options, e), this;
};
qe.prototype.configure = function(e) {
  const t = this;
  if (Yr(e)) {
    const u = e;
    if (e = hh[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
qe.prototype.enable = function(e, t) {
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
qe.prototype.disable = function(e, t) {
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
qe.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
qe.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
qe.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
qe.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
qe.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function xh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fr, go;
function Eh() {
  if (go) return fr;
  go = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((w) => {
      const S = b[w], U = typeof S;
      (U === "object" || U === "function") && !Object.isFrozen(S) && e(S);
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
  function u(b) {
    return b.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function n(b, ...w) {
    const S = /* @__PURE__ */ Object.create(null);
    for (const U in b)
      S[U] = b[U];
    return w.forEach(function(U) {
      for (const oe in U)
        S[oe] = U[oe];
    }), /** @type {T} */
    S;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: w }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const S = b.split(".");
      return [
        `${w}${S.shift()}`,
        ...S.map((U, oe) => `${U}${"_".repeat(oe + 1)}`)
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
    constructor(w, S) {
      this.buffer = "", this.classPrefix = S.classPrefix, w.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(w) {
      this.buffer += u(w);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(w) {
      if (!i(w)) return;
      const S = o(
        w.scope,
        { prefix: this.classPrefix }
      );
      this.span(S);
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
      const S = a({ scope: w });
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
    walk(w) {
      return this.constructor._walk(w, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(w, S) {
      return typeof S == "string" ? w.addText(S) : S.children && (w.openNode(S), S.children.forEach((U) => this._walk(w, U)), w.closeNode(S)), w;
    }
    /**
     * @param {Node} node
     */
    static _collapse(w) {
      typeof w != "string" && w.children && (w.children.every((S) => typeof S == "string") ? w.children = [w.children.join("")] : w.children.forEach((S) => {
        c._collapse(S);
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
    __addSublanguage(w, S) {
      const U = w.root;
      S && (U.scope = `language:${S}`), this.add(U);
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
    const w = b[b.length - 1];
    return typeof w == "object" && w.constructor === Object ? (b.splice(b.length - 1, 1), w) : {};
  }
  function k(...b) {
    return "(" + (g(b).capture ? "" : "?:") + b.map((U) => f(U)).join("|") + ")";
  }
  function y(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function x(b, w) {
    const S = b && b.exec(w);
    return S && S.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function E(b, { joinWith: w }) {
    let S = 0;
    return b.map((U) => {
      S += 1;
      const oe = S;
      let se = f(U), F = "";
      for (; se.length > 0; ) {
        const O = _.exec(se);
        if (!O) {
          F += se;
          break;
        }
        F += se.substring(0, O.index), se = se.substring(O.index + O[0].length), O[0][0] === "\\" && O[1] ? F += "\\" + String(Number(O[1]) + oe) : (F += O[0], O[0] === "(" && S++);
      }
      return F;
    }).map((U) => `(${U})`).join(w);
  }
  const C = /\b\B/, R = "[a-zA-Z]\\w*", D = "[a-zA-Z_]\\w*", B = "\\b\\d+(\\.\\d+)?", Z = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ne = "\\b(0b[01]+)", le = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", te = (b = {}) => {
    const w = /^#![ ]*\//;
    return b.binary && (b.begin = m(
      w,
      /.*\b/,
      b.binary,
      /\b.*/
    )), n({
      scope: "meta",
      begin: w,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (S, U) => {
        S.index !== 0 && U.ignoreMatch();
      }
    }, b);
  }, N = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, L = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [N]
  }, K = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [N]
  }, pe = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, H = function(b, w, S = {}) {
    const U = n(
      {
        scope: "comment",
        begin: b,
        end: w,
        contains: []
      },
      S
    );
    U.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const oe = k(
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
    return U.contains.push(
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
          oe,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), U;
  }, fe = H("//", "$"), ke = H("/\\*", "\\*/"), Ze = H("#", "$"), ht = {
    scope: "number",
    begin: B,
    relevance: 0
  }, Lt = {
    scope: "number",
    begin: Z,
    relevance: 0
  }, Sa = {
    scope: "number",
    begin: ne,
    relevance: 0
  }, Da = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      N,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [N]
      }
    ]
  }, Ta = {
    scope: "title",
    begin: R,
    relevance: 0
  }, Ra = {
    scope: "title",
    begin: D,
    relevance: 0
  }, Na = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + D,
    relevance: 0
  };
  var ju = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: L,
    BACKSLASH_ESCAPE: N,
    BINARY_NUMBER_MODE: Sa,
    BINARY_NUMBER_RE: ne,
    COMMENT: H,
    C_BLOCK_COMMENT_MODE: ke,
    C_LINE_COMMENT_MODE: fe,
    C_NUMBER_MODE: Lt,
    C_NUMBER_RE: Z,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (w, S) => {
            S.data._beginMatch = w[1];
          },
          /** @type {ModeCallback} */
          "on:end": (w, S) => {
            S.data._beginMatch !== w[1] && S.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Ze,
    IDENT_RE: R,
    MATCH_NOTHING_RE: C,
    METHOD_GUARD: Na,
    NUMBER_MODE: ht,
    NUMBER_RE: B,
    PHRASAL_WORDS_MODE: pe,
    QUOTE_STRING_MODE: K,
    REGEXP_MODE: Da,
    RE_STARTERS_RE: le,
    SHEBANG: te,
    TITLE_MODE: Ta,
    UNDERSCORE_IDENT_RE: D,
    UNDERSCORE_TITLE_MODE: Ra
  });
  function Oa(b, w) {
    b.input[b.index - 1] === "." && w.ignoreMatch();
  }
  function Fa(b, w) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function Ia(b, w) {
    w && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = Oa, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Ma(b, w) {
    Array.isArray(b.illegal) && (b.illegal = k(...b.illegal));
  }
  function La(b, w) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function Ba(b, w) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Pa = (b, w) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const S = Object.assign({}, b);
    Object.keys(b).forEach((U) => {
      delete b[U];
    }), b.keywords = S.keywords, b.begin = m(S.beforeMatch, h(S.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(S, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete S.beforeMatch;
  }, za = [
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
  ], Ua = "keyword";
  function ui(b, w, S = Ua) {
    const U = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? oe(S, b.split(" ")) : Array.isArray(b) ? oe(S, b) : Object.keys(b).forEach(function(se) {
      Object.assign(
        U,
        ui(b[se], w, se)
      );
    }), U;
    function oe(se, F) {
      w && (F = F.map((O) => O.toLowerCase())), F.forEach(function(O) {
        const z = O.split("|");
        U[z[0]] = [se, $a(z[0], z[1])];
      });
    }
  }
  function $a(b, w) {
    return w ? Number(w) : qa(b) ? 0 : 1;
  }
  function qa(b) {
    return za.includes(b.toLowerCase());
  }
  const ni = {}, Bt = (b) => {
    console.error(b);
  }, ri = (b, ...w) => {
    console.log(`WARN: ${b}`, ...w);
  }, Wt = (b, w) => {
    ni[`${b}/${w}`] || (console.log(`Deprecated as of ${b}. ${w}`), ni[`${b}/${w}`] = !0);
  }, Gu = new Error();
  function ii(b, w, { key: S }) {
    let U = 0;
    const oe = b[S], se = {}, F = {};
    for (let O = 1; O <= w.length; O++)
      F[O + U] = oe[O], se[O + U] = !0, U += y(w[O - 1]);
    b[S] = F, b[S]._emit = se, b[S]._multi = !0;
  }
  function Ha(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw Bt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Gu;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw Bt("beginScope must be object"), Gu;
      ii(b, b.begin, { key: "beginScope" }), b.begin = E(b.begin, { joinWith: "" });
    }
  }
  function ja(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw Bt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Gu;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw Bt("endScope must be object"), Gu;
      ii(b, b.end, { key: "endScope" }), b.end = E(b.end, { joinWith: "" });
    }
  }
  function Ga(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function Za(b) {
    Ga(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Ha(b), ja(b);
  }
  function Wa(b) {
    function w(F, O) {
      return new RegExp(
        f(F),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (O ? "g" : "")
      );
    }
    class S {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(O, z) {
        z.position = this.position++, this.matchIndexes[this.matchAt] = z, this.regexes.push([z, O]), this.matchAt += y(O) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const O = this.regexes.map((z) => z[1]);
        this.matcherRe = w(E(O, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(O) {
        this.matcherRe.lastIndex = this.lastIndex;
        const z = this.matcherRe.exec(O);
        if (!z)
          return null;
        const be = z.findIndex((hu, Un) => Un > 0 && hu !== void 0), ae = this.matchIndexes[be];
        return z.splice(0, be), Object.assign(z, ae);
      }
    }
    class U {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(O) {
        if (this.multiRegexes[O]) return this.multiRegexes[O];
        const z = new S();
        return this.rules.slice(O).forEach(([be, ae]) => z.addRule(be, ae)), z.compile(), this.multiRegexes[O] = z, z;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(O, z) {
        this.rules.push([O, z]), z.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(O) {
        const z = this.getMatcher(this.regexIndex);
        z.lastIndex = this.lastIndex;
        let be = z.exec(O);
        if (this.resumingScanAtSamePosition() && !(be && be.index === this.lastIndex)) {
          const ae = this.getMatcher(0);
          ae.lastIndex = this.lastIndex + 1, be = ae.exec(O);
        }
        return be && (this.regexIndex += be.position + 1, this.regexIndex === this.count && this.considerAll()), be;
      }
    }
    function oe(F) {
      const O = new U();
      return F.contains.forEach((z) => O.addRule(z.begin, { rule: z, type: "begin" })), F.terminatorEnd && O.addRule(F.terminatorEnd, { type: "end" }), F.illegal && O.addRule(F.illegal, { type: "illegal" }), O;
    }
    function se(F, O) {
      const z = (
        /** @type CompiledMode */
        F
      );
      if (F.isCompiled) return z;
      [
        Fa,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        La,
        Za,
        Pa
      ].forEach((ae) => ae(F, O)), b.compilerExtensions.forEach((ae) => ae(F, O)), F.__beforeBegin = null, [
        Ia,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Ma,
        // default to 1 relevance if not specified
        Ba
      ].forEach((ae) => ae(F, O)), F.isCompiled = !0;
      let be = null;
      return typeof F.keywords == "object" && F.keywords.$pattern && (F.keywords = Object.assign({}, F.keywords), be = F.keywords.$pattern, delete F.keywords.$pattern), be = be || /\w+/, F.keywords && (F.keywords = ui(F.keywords, b.case_insensitive)), z.keywordPatternRe = w(be, !0), O && (F.begin || (F.begin = /\B|\b/), z.beginRe = w(z.begin), !F.end && !F.endsWithParent && (F.end = /\B|\b/), F.end && (z.endRe = w(z.end)), z.terminatorEnd = f(z.end) || "", F.endsWithParent && O.terminatorEnd && (z.terminatorEnd += (F.end ? "|" : "") + O.terminatorEnd)), F.illegal && (z.illegalRe = w(
        /** @type {RegExp | string} */
        F.illegal
      )), F.contains || (F.contains = []), F.contains = [].concat(...F.contains.map(function(ae) {
        return Va(ae === "self" ? F : ae);
      })), F.contains.forEach(function(ae) {
        se(
          /** @type Mode */
          ae,
          z
        );
      }), F.starts && se(F.starts, O), z.matcher = oe(z), z;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), se(
      /** @type Mode */
      b
    );
  }
  function oi(b) {
    return b ? b.endsWithParent || oi(b.starts) : !1;
  }
  function Va(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(w) {
      return n(b, { variants: null }, w);
    })), b.cachedVariants ? b.cachedVariants : oi(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var Ka = "11.11.1";
  class Ja extends Error {
    constructor(w, S) {
      super(w), this.name = "HTMLInjectionError", this.html = S;
    }
  }
  const zn = u, si = n, ai = Symbol("nomatch"), Ya = 7, ci = function(b) {
    const w = /* @__PURE__ */ Object.create(null), S = /* @__PURE__ */ Object.create(null), U = [];
    let oe = !0;
    const se = "Could not find the language '{}', did you forget to load/include a language module?", F = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function z(A) {
      return O.noHighlightRe.test(A);
    }
    function be(A) {
      let M = A.className + " ";
      M += A.parentNode ? A.parentNode.className : "";
      const G = O.languageDetectRe.exec(M);
      if (G) {
        const Y = yt(G[1]);
        return Y || (ri(se.replace("{}", G[1])), ri("Falling back to no-highlight mode for this block.", A)), Y ? G[1] : "no-highlight";
      }
      return M.split(/\s+/).find((Y) => z(Y) || yt(Y));
    }
    function ae(A, M, G) {
      let Y = "", de = "";
      typeof M == "object" ? (Y = A, G = M.ignoreIllegals, de = M.language) : (Wt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Wt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), de = A, Y = M), G === void 0 && (G = !0);
      const We = {
        code: Y,
        language: de
      };
      Wu("before:highlight", We);
      const vt = We.result ? We.result : hu(We.language, We.code, G);
      return vt.code = We.code, Wu("after:highlight", vt), vt;
    }
    function hu(A, M, G, Y) {
      const de = /* @__PURE__ */ Object.create(null);
      function We(T, I) {
        return T.keywords[I];
      }
      function vt() {
        if (!$.keywords) {
          xe.addText(X);
          return;
        }
        let T = 0;
        $.keywordPatternRe.lastIndex = 0;
        let I = $.keywordPatternRe.exec(X), j = "";
        for (; I; ) {
          j += X.substring(T, I.index);
          const W = ut.case_insensitive ? I[0].toLowerCase() : I[0], ye = We($, W);
          if (ye) {
            const [pt, pc] = ye;
            if (xe.addText(j), j = "", de[W] = (de[W] || 0) + 1, de[W] <= Ya && (Ju += pc), pt.startsWith("_"))
              j += I[0];
            else {
              const bc = ut.classNameAliases[pt] || pt;
              tt(I[0], bc);
            }
          } else
            j += I[0];
          T = $.keywordPatternRe.lastIndex, I = $.keywordPatternRe.exec(X);
        }
        j += X.substring(T), xe.addText(j);
      }
      function Vu() {
        if (X === "") return;
        let T = null;
        if (typeof $.subLanguage == "string") {
          if (!w[$.subLanguage]) {
            xe.addText(X);
            return;
          }
          T = hu($.subLanguage, X, !0, mi[$.subLanguage]), mi[$.subLanguage] = /** @type {CompiledMode} */
          T._top;
        } else
          T = $n(X, $.subLanguage.length ? $.subLanguage : null);
        $.relevance > 0 && (Ju += T.relevance), xe.__addSublanguage(T._emitter, T.language);
      }
      function Oe() {
        $.subLanguage != null ? Vu() : vt(), X = "";
      }
      function tt(T, I) {
        T !== "" && (xe.startScope(I), xe.addText(T), xe.endScope());
      }
      function hi(T, I) {
        let j = 1;
        const W = I.length - 1;
        for (; j <= W; ) {
          if (!T._emit[j]) {
            j++;
            continue;
          }
          const ye = ut.classNameAliases[T[j]] || T[j], pt = I[j];
          ye ? tt(pt, ye) : (X = pt, vt(), X = ""), j++;
        }
      }
      function pi(T, I) {
        return T.scope && typeof T.scope == "string" && xe.openNode(ut.classNameAliases[T.scope] || T.scope), T.beginScope && (T.beginScope._wrap ? (tt(X, ut.classNameAliases[T.beginScope._wrap] || T.beginScope._wrap), X = "") : T.beginScope._multi && (hi(T.beginScope, I), X = "")), $ = Object.create(T, { parent: { value: $ } }), $;
      }
      function bi(T, I, j) {
        let W = x(T.endRe, j);
        if (W) {
          if (T["on:end"]) {
            const ye = new t(T);
            T["on:end"](I, ye), ye.isMatchIgnored && (W = !1);
          }
          if (W) {
            for (; T.endsParent && T.parent; )
              T = T.parent;
            return T;
          }
        }
        if (T.endsWithParent)
          return bi(T.parent, I, j);
      }
      function cc(T) {
        return $.matcher.regexIndex === 0 ? (X += T[0], 1) : (Gn = !0, 0);
      }
      function lc(T) {
        const I = T[0], j = T.rule, W = new t(j), ye = [j.__beforeBegin, j["on:begin"]];
        for (const pt of ye)
          if (pt && (pt(T, W), W.isMatchIgnored))
            return cc(I);
        return j.skip ? X += I : (j.excludeBegin && (X += I), Oe(), !j.returnBegin && !j.excludeBegin && (X = I)), pi(j, T), j.returnBegin ? 0 : I.length;
      }
      function fc(T) {
        const I = T[0], j = M.substring(T.index), W = bi($, T, j);
        if (!W)
          return ai;
        const ye = $;
        $.endScope && $.endScope._wrap ? (Oe(), tt(I, $.endScope._wrap)) : $.endScope && $.endScope._multi ? (Oe(), hi($.endScope, T)) : ye.skip ? X += I : (ye.returnEnd || ye.excludeEnd || (X += I), Oe(), ye.excludeEnd && (X = I));
        do
          $.scope && xe.closeNode(), !$.skip && !$.subLanguage && (Ju += $.relevance), $ = $.parent;
        while ($ !== W.parent);
        return W.starts && pi(W.starts, T), ye.returnEnd ? 0 : I.length;
      }
      function dc() {
        const T = [];
        for (let I = $; I !== ut; I = I.parent)
          I.scope && T.unshift(I.scope);
        T.forEach((I) => xe.openNode(I));
      }
      let Ku = {};
      function gi(T, I) {
        const j = I && I[0];
        if (X += T, j == null)
          return Oe(), 0;
        if (Ku.type === "begin" && I.type === "end" && Ku.index === I.index && j === "") {
          if (X += M.slice(I.index, I.index + 1), !oe) {
            const W = new Error(`0 width match regex (${A})`);
            throw W.languageName = A, W.badRule = Ku.rule, W;
          }
          return 1;
        }
        if (Ku = I, I.type === "begin")
          return lc(I);
        if (I.type === "illegal" && !G) {
          const W = new Error('Illegal lexeme "' + j + '" for mode "' + ($.scope || "<unnamed>") + '"');
          throw W.mode = $, W;
        } else if (I.type === "end") {
          const W = fc(I);
          if (W !== ai)
            return W;
        }
        if (I.type === "illegal" && j === "")
          return X += `
`, 1;
        if (jn > 1e5 && jn > I.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return X += j, j.length;
      }
      const ut = yt(A);
      if (!ut)
        throw Bt(se.replace("{}", A)), new Error('Unknown language: "' + A + '"');
      const hc = Wa(ut);
      let Hn = "", $ = Y || hc;
      const mi = {}, xe = new O.__emitter(O);
      dc();
      let X = "", Ju = 0, Pt = 0, jn = 0, Gn = !1;
      try {
        if (ut.__emitTokens)
          ut.__emitTokens(M, xe);
        else {
          for ($.matcher.considerAll(); ; ) {
            jn++, Gn ? Gn = !1 : $.matcher.considerAll(), $.matcher.lastIndex = Pt;
            const T = $.matcher.exec(M);
            if (!T) break;
            const I = M.substring(Pt, T.index), j = gi(I, T);
            Pt = T.index + j;
          }
          gi(M.substring(Pt));
        }
        return xe.finalize(), Hn = xe.toHTML(), {
          language: A,
          value: Hn,
          relevance: Ju,
          illegal: !1,
          _emitter: xe,
          _top: $
        };
      } catch (T) {
        if (T.message && T.message.includes("Illegal"))
          return {
            language: A,
            value: zn(M),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: T.message,
              index: Pt,
              context: M.slice(Pt - 100, Pt + 100),
              mode: T.mode,
              resultSoFar: Hn
            },
            _emitter: xe
          };
        if (oe)
          return {
            language: A,
            value: zn(M),
            illegal: !1,
            relevance: 0,
            errorRaised: T,
            _emitter: xe,
            _top: $
          };
        throw T;
      }
    }
    function Un(A) {
      const M = {
        value: zn(A),
        illegal: !1,
        relevance: 0,
        _top: F,
        _emitter: new O.__emitter(O)
      };
      return M._emitter.addText(A), M;
    }
    function $n(A, M) {
      M = M || O.languages || Object.keys(w);
      const G = Un(A), Y = M.filter(yt).filter(di).map(
        (Oe) => hu(Oe, A, !1)
      );
      Y.unshift(G);
      const de = Y.sort((Oe, tt) => {
        if (Oe.relevance !== tt.relevance) return tt.relevance - Oe.relevance;
        if (Oe.language && tt.language) {
          if (yt(Oe.language).supersetOf === tt.language)
            return 1;
          if (yt(tt.language).supersetOf === Oe.language)
            return -1;
        }
        return 0;
      }), [We, vt] = de, Vu = We;
      return Vu.secondBest = vt, Vu;
    }
    function Xa(A, M, G) {
      const Y = M && S[M] || G;
      A.classList.add("hljs"), A.classList.add(`language-${Y}`);
    }
    function qn(A) {
      let M = null;
      const G = be(A);
      if (z(G)) return;
      if (Wu(
        "before:highlightElement",
        { el: A, language: G }
      ), A.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", A);
        return;
      }
      if (A.children.length > 0 && (O.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(A)), O.throwUnescapedHTML))
        throw new Ja(
          "One of your code blocks includes unescaped HTML.",
          A.innerHTML
        );
      M = A;
      const Y = M.textContent, de = G ? ae(Y, { language: G, ignoreIllegals: !0 }) : $n(Y);
      A.innerHTML = de.value, A.dataset.highlighted = "yes", Xa(A, G, de.language), A.result = {
        language: de.language,
        // TODO: remove with version 11.0
        re: de.relevance,
        relevance: de.relevance
      }, de.secondBest && (A.secondBest = {
        language: de.secondBest.language,
        relevance: de.secondBest.relevance
      }), Wu("after:highlightElement", { el: A, result: de, text: Y });
    }
    function Qa(A) {
      O = si(O, A);
    }
    const ec = () => {
      Zu(), Wt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function tc() {
      Zu(), Wt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let li = !1;
    function Zu() {
      function A() {
        Zu();
      }
      if (document.readyState === "loading") {
        li || window.addEventListener("DOMContentLoaded", A, !1), li = !0;
        return;
      }
      document.querySelectorAll(O.cssSelector).forEach(qn);
    }
    function uc(A, M) {
      let G = null;
      try {
        G = M(b);
      } catch (Y) {
        if (Bt("Language definition for '{}' could not be registered.".replace("{}", A)), oe)
          Bt(Y);
        else
          throw Y;
        G = F;
      }
      G.name || (G.name = A), w[A] = G, G.rawDefinition = M.bind(null, b), G.aliases && fi(G.aliases, { languageName: A });
    }
    function nc(A) {
      delete w[A];
      for (const M of Object.keys(S))
        S[M] === A && delete S[M];
    }
    function rc() {
      return Object.keys(w);
    }
    function yt(A) {
      return A = (A || "").toLowerCase(), w[A] || w[S[A]];
    }
    function fi(A, { languageName: M }) {
      typeof A == "string" && (A = [A]), A.forEach((G) => {
        S[G.toLowerCase()] = M;
      });
    }
    function di(A) {
      const M = yt(A);
      return M && !M.disableAutodetect;
    }
    function ic(A) {
      A["before:highlightBlock"] && !A["before:highlightElement"] && (A["before:highlightElement"] = (M) => {
        A["before:highlightBlock"](
          Object.assign({ block: M.el }, M)
        );
      }), A["after:highlightBlock"] && !A["after:highlightElement"] && (A["after:highlightElement"] = (M) => {
        A["after:highlightBlock"](
          Object.assign({ block: M.el }, M)
        );
      });
    }
    function oc(A) {
      ic(A), U.push(A);
    }
    function sc(A) {
      const M = U.indexOf(A);
      M !== -1 && U.splice(M, 1);
    }
    function Wu(A, M) {
      const G = A;
      U.forEach(function(Y) {
        Y[G] && Y[G](M);
      });
    }
    function ac(A) {
      return Wt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Wt("10.7.0", "Please use highlightElement now."), qn(A);
    }
    Object.assign(b, {
      highlight: ae,
      highlightAuto: $n,
      highlightAll: Zu,
      highlightElement: qn,
      // TODO: Remove with v12 API
      highlightBlock: ac,
      configure: Qa,
      initHighlighting: ec,
      initHighlightingOnLoad: tc,
      registerLanguage: uc,
      unregisterLanguage: nc,
      listLanguages: rc,
      getLanguage: yt,
      registerAliases: fi,
      autoDetection: di,
      inherit: si,
      addPlugin: oc,
      removePlugin: sc
    }), b.debugMode = function() {
      oe = !1;
    }, b.safeMode = function() {
      oe = !0;
    }, b.versionString = Ka, b.regex = {
      concat: m,
      lookahead: h,
      either: k,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const A in ju)
      typeof ju[A] == "object" && e(ju[A]);
    return Object.assign(b, ju), b;
  }, Vt = ci({});
  return Vt.newInstance = () => ci({}), fr = Vt, Vt.HighlightJS = Vt, Vt.default = Vt, fr;
}
var yh = /* @__PURE__ */ Eh();
const He = /* @__PURE__ */ xh(yh), mo = "[A-Za-z$_][0-9A-Za-z$_]*", vh = [
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
], kh = [
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
], wh = [
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
], Ah = [].concat(
  _a,
  ga,
  ma
);
function Ch(e) {
  const t = e.regex, u = (H, { after: fe }) => {
    const ke = "</" + H[0].slice(1);
    return H.input.indexOf(ke, fe) !== -1;
  }, n = mo, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, fe) => {
      const ke = H[0].length + H.index, Ze = H.input[ke];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ze === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ze === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      Ze === ">" && (u(H, { after: ke }) || fe.ignoreMatch());
      let ht;
      const Lt = H.input.substring(ke);
      if (ht = Lt.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((ht = Lt.match(/^\s+extends\s+/)) && ht.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: mo,
    keyword: vh,
    literal: kh,
    built_in: Ah,
    "variable.language": wh
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
  const _ = [].concat(y, h.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(_)
    }
  ]), C = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: E
  }, R = {
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
  }, B = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, Z = {
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
    contains: [C],
    illegal: /%/
  }, ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function le(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const te = {
    match: t.concat(
      /\b/,
      le([
        ..._a,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, N = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, L = {
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
      C
    ]
  }, K = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", pe = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(K)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      C
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: D },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      B,
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
      D,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      pe,
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
            begin: K,
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
      Z,
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
          C,
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      N,
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
        contains: [C]
      },
      te,
      ne,
      R,
      L,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const _n = "[A-Za-z$_][0-9A-Za-z$_]*", xa = [
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
], Ea = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], ya = [
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
], va = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], ka = [
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
], wa = [
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
], Aa = [].concat(
  ka,
  ya,
  va
);
function Sh(e) {
  const t = e.regex, u = (H, { after: fe }) => {
    const ke = "</" + H[0].slice(1);
    return H.input.indexOf(ke, fe) !== -1;
  }, n = _n, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (H, fe) => {
      const ke = H[0].length + H.index, Ze = H.input[ke];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ze === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ze === ","
      ) {
        fe.ignoreMatch();
        return;
      }
      Ze === ">" && (u(H, { after: ke }) || fe.ignoreMatch());
      let ht;
      const Lt = H.input.substring(ke);
      if (ht = Lt.match(/^\s*=/)) {
        fe.ignoreMatch();
        return;
      }
      if ((ht = Lt.match(/^\s+extends\s+/)) && ht.index === 0) {
        fe.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: _n,
    keyword: xa,
    literal: Ea,
    built_in: Aa,
    "variable.language": wa
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
  const _ = [].concat(y, h.contains), E = _.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(_)
    }
  ]), C = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: s,
    contains: E
  }, R = {
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
        ...ya,
        ...va
      ]
    }
  }, B = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, Z = {
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
    contains: [C],
    illegal: /%/
  }, ne = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function le(H) {
    return t.concat("(?!", H.join("|"), ")");
  }
  const te = {
    match: t.concat(
      /\b/,
      le([
        ...ka,
        "super",
        "import"
      ].map((H) => `${H}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, N = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, L = {
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
      C
    ]
  }, K = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", pe = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(K)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      C
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: s,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: E, CLASS_REFERENCE: D },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      B,
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
      D,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      pe,
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
            begin: K,
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
      Z,
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
          C,
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      N,
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
        contains: [C]
      },
      te,
      ne,
      R,
      L,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Dh(e) {
  const t = e.regex, u = Sh(e), n = _n, r = [
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
    $pattern: _n,
    keyword: xa.concat(a),
    literal: Ea,
    built_in: Aa.concat(r),
    "variable.language": wa
  }, l = {
    className: "meta",
    begin: "@" + n
  }, f = (m, g, k) => {
    const y = m.contains.findIndex((x) => x.label === g);
    if (y === -1)
      throw new Error("can not find mode to replace");
    m.contains.splice(y, 1, k);
  };
  Object.assign(u.keywords, c), u.exports.PARAMS_CONTAINS.push(l);
  const h = u.contains.find((m) => m.scope === "attr"), p = Object.assign(
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
  const d = u.contains.find((m) => m.label === "func.def");
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
function Th(e) {
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
  }, h = "[0-9](_?[0-9])*", p = `(\\b(${h}))?\\.(${h})|\\b(${h})\\.`, d = `\\b|${n.join("|")}`, m = {
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
  }, g = {
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
  }, k = {
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
          m,
          f,
          e.HASH_COMMENT_MODE
        ]
      }
    ]
  };
  return c.contains = [
    f,
    m,
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
      m,
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
      g,
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
        contains: [k]
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
          m,
          k,
          f
        ]
      }
    ]
  };
}
function Rh(e) {
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
  }, m = [
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
  ], g = [
    "true",
    "false"
  ], k = { match: /(\/[a-z._-]+)+/ }, y = [
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
  ], x = [
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
  ], _ = [
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
  ], E = [
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
      keyword: m,
      literal: g,
      built_in: [
        ...y,
        ...x,
        // Shell modifiers
        "set",
        "shopt",
        ..._,
        ...E
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
      k,
      s,
      a,
      c,
      l,
      u
    ]
  };
}
function Nh(e) {
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
function Ca(e) {
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
const Oh = (e) => ({
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
}), Fh = [
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
], Ih = [
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
], Mh = [
  ...Fh,
  ...Ih
], Lh = [
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
].sort().reverse(), Bh = [
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
].sort().reverse(), Ph = [
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
].sort().reverse(), zh = [
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
function Uh(e) {
  const t = e.regex, u = Oh(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
          { begin: ":(" + Bh.join("|") + ")" },
          { begin: ":(:)?(" + Ph.join("|") + ")" }
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
        begin: "\\b(" + zh.join("|") + ")\\b"
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
              attribute: Lh.join(" ")
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
        begin: "\\b(" + Mh.join("|") + ")\\b"
      }
    ]
  };
}
function $h(e) {
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
function qh(e) {
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
    "on:begin": (N, L) => {
      L.data._beginMatch = N[1] || N[2];
    },
    "on:end": (N, L) => {
      L.data._beginMatch !== N[1] && L.ignoreMatch();
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
    literal: ((N) => {
      const L = [];
      return N.forEach((K) => {
        L.push(K), K.toLowerCase() === K ? L.push(K.toUpperCase()) : L.push(K.toLowerCase());
      }), L;
    })(g),
    built_in: y
  }, E = (N) => N.map((L) => L.replace(/\|\d+$/, "")), C = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", E(y).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, R = t.concat(n, "\\b(?!\\()"), D = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        R
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
        R
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
  ] }, B = {
    scope: "attr",
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, Z = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: _,
    contains: [
      B,
      o,
      D,
      e.C_BLOCK_COMMENT_MODE,
      d,
      m,
      C
    ]
  }, ne = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", E(k).join("\\b|"), "|", E(y).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [Z]
  };
  Z.contains.push(ne);
  const le = [
    B,
    D,
    e.C_BLOCK_COMMENT_MODE,
    d,
    m,
    C
  ], te = {
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
          ...le
        ]
      },
      ...le,
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
      te,
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
      ne,
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
      C,
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
              te,
              o,
              D,
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
He.registerLanguage("javascript", Ch);
He.registerLanguage("typescript", Dh);
He.registerLanguage("python", Th);
He.registerLanguage("bash", Rh);
He.registerLanguage("json", Nh);
He.registerLanguage("xml", Ca);
He.registerLanguage("html", Ca);
He.registerLanguage("css", Uh);
He.registerLanguage("markdown", $h);
He.registerLanguage("php", qh);
const Pn = new qe({
  html: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, t) {
    if (t && He.getLanguage(t))
      try {
        return He.highlight(e, { language: t }).value;
      } catch (u) {
      }
    return "";
  }
});
Pn.renderer.rules.fence = function(e, t) {
  const u = e[t];
  return `<pre><code class="hljs language-${u.info.trim()}">${u.content}</code></pre>`;
};
Pn.renderer.rules.code_inline = function(e, t) {
  return `<code class="inline-code">${e[t].content}</code>`;
};
Pn.renderer.rules.link_open = function(e, t) {
  var i;
  return `<a href="${((i = (e[t].attrs || []).find(([o]) => o === "href")) == null ? void 0 : i[1]) || ""}" target="_blank" rel="noopener noreferrer" class="markdown-link">`;
};
function Hh(e) {
  return Pn.render(e);
}
var jh = /* @__PURE__ */ Be('<span class="svelte-eh54ff">U</span>'), Gh = /* @__PURE__ */ Be('<img alt="Bot Icon" class="avatar-image svelte-eh54ff">'), Zh = /* @__PURE__ */ Be("<div><!></div>"), Wh = /* @__PURE__ */ Be('<div class="message-text svelte-eh54ff"> </div>'), Vh = /* @__PURE__ */ Be('<div class="thinking svelte-eh54ff"><span class="svelte-eh54ff">Thinking</span> <div class="dots-container svelte-eh54ff"><span class="dot svelte-eh54ff"></span> <span class="dot svelte-eh54ff"></span> <span class="dot svelte-eh54ff"></span></div></div>'), Kh = /* @__PURE__ */ Be("<div><!></div>"), Jh = /* @__PURE__ */ Be('<div><div><!> <div class="bubble-container svelte-eh54ff"><div><!></div> <div> </div></div></div></div>');
const Yh = {
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
function Xh(e, t) {
  su(t, !0), Cn(e, Yh);
  const u = bt(t, "isStreaming", 3, !1), n = bt(t, "hasStarted", 3, !1), r = {
    MessageSquare: pn,
    MessageSquareMore: qs,
    Monitor: Hs,
    LifeBuoy: Us,
    HelpCircle: Bs,
    Menu: $s,
    Info: zs,
    FileText: Ps
  }, i = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), o = /* @__PURE__ */ Ve(() => !i && t.botIcon && r[t.botIcon] ? r[t.botIcon] : pn), s = (_) => _.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), a = /* @__PURE__ */ Ve(() => t.type === "bot" ? Hh(t.content) : t.content);
  var c = Jh(), l = re(c), f = re(l);
  {
    var h = (_) => {
      var E = Zh(), C = re(E);
      {
        var R = (B) => {
          var Z = jh();
          Q(B, Z);
        }, D = (B, Z) => {
          {
            var ne = (te) => {
              var N = Gh();
              Ie(() => Cu(N, "src", t.botIcon)), Q(te, N);
            }, le = (te, N) => {
              {
                var L = (K) => {
                  var pe = Ge(), H = je(pe);
                  O0(H, () => P(o), (fe, ke) => {
                    ke(fe, { size: 20, strokeWidth: 2, color: "white" });
                  }), Q(K, pe);
                };
                rt(
                  te,
                  (K) => {
                    P(o) && K(L);
                  },
                  N
                );
              }
            };
            rt(
              B,
              (te) => {
                i ? te(ne) : te(le, !1);
              },
              Z
            );
          }
        };
        rt(C, (B) => {
          t.type === "user" ? B(R) : B(D, !1);
        });
      }
      Ie(() => {
        var B;
        At(E, 1, `avatar ${i && t.type === "bot" ? "icon-url" : ""}`, "svelte-eh54ff"), Au(E, `background-color: ${(B = t.type === "user" || i ? "transparent" : t.colorHex) != null ? B : ""}`);
      }), Q(_, E);
    };
    rt(f, (_) => {
      t.botIcon && (t.type === "user" || t.type === "bot") && _(h);
    });
  }
  var p = Ke(f, 2), d = re(p), m = re(d);
  {
    var g = (_) => {
      var E = Wh(), C = re(E);
      Ie(() => fn(C, t.content)), Q(_, E);
    }, k = (_, E) => {
      {
        var C = (D) => {
          var B = Vh();
          Q(D, B);
        }, R = (D) => {
          var B = Kh(), Z = re(B);
          N0(Z, () => P(a)), Ie(() => At(B, 1, `markdown-content ${u() ? "typing-animation" : ""}`, "svelte-eh54ff")), Q(D, B);
        };
        rt(
          _,
          (D) => {
            u() && !n() ? D(C) : D(R, !1);
          },
          E
        );
      }
    };
    rt(m, (_) => {
      t.type === "user" ? _(g) : _(k, !1);
    });
  }
  var y = Ke(d, 2), x = re(y);
  Ie(
    (_) => {
      var E;
      At(c, 1, `message-container ${t.type === "user" ? "user-message" : "bot-message"}`, "svelte-eh54ff"), At(l, 1, `message-content ${t.type === "user" ? "user-content" : "bot-content"}`, "svelte-eh54ff"), At(d, 1, `message-bubble ${t.type === "user" ? "user-bubble" : "bot-bubble"} ${u() ? "streaming" : ""}`, "svelte-eh54ff"), Au(d, `--message-color: ${(E = t.type === "user" ? t.lighterColorHex : "white") != null ? E : ""}; --text-color: ${t.type === "user" ? "white" : "#1f2937"}`), At(y, 1, `timestamp ${t.type === "user" ? "user-timestamp" : "bot-timestamp"}`, "svelte-eh54ff"), fn(x, _);
    },
    [() => s(t.timestamp)]
  ), Q(e, c), au();
}
var Qh = /* @__PURE__ */ Be('<div class="loading-more svelte-srk2u0"><div class="loading-spinner svelte-srk2u0"></div> <span>Loading previous messages...</span></div>'), ep = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, tp = /* @__PURE__ */ Be('<div class="chat-container svelte-srk2u0"><div class="messages-container svelte-srk2u0"><!> <!> <div class="bottom-anchor"></div></div> <form class="input-container svelte-srk2u0"><textarea placeholder="Type your message..." class="message-input svelte-srk2u0" rows="1"></textarea></form></div>');
const up = {
  hash: "svelte-srk2u0",
  code: `.chat-container.svelte-srk2u0 {height:100%;display:flex;flex-direction:column;overflow:hidden;}.messages-container.svelte-srk2u0 {flex:1;overflow-y:auto;padding:0.75rem 0.75rem 0;background-color:#f9fafb;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.input-container.svelte-srk2u0 {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:white;padding:0.75rem;width:100%;box-sizing:border-box;position:relative;}.message-input.svelte-srk2u0 {width:100%;padding:0.5rem 0.75rem;border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-srk2u0:focus {outline:none;border-color:#3b82f6;}.message-input.svelte-srk2u0:disabled {background-color:#f9fafb;cursor:not-allowed;}.loading-more.svelte-srk2u0 {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-srk2u0 {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-srk2u0-spin 1s linear infinite;}

  @keyframes svelte-srk2u0-spin {
    to {
      transform: rotate(360deg);
    }
  }`
};
function np(e, t) {
  su(t, !0), Cn(e, up);
  const [u, n] = j0(), r = () => H0(Ue, "$chatStore", u);
  let i = /* @__PURE__ */ ze(""), o, s, a = /* @__PURE__ */ ze(!1), c = /* @__PURE__ */ ze(!0), l = /* @__PURE__ */ ze(!1), f, h = /* @__PURE__ */ Ve(() => r().messages), p = /* @__PURE__ */ Ve(() => r().isLoading), d = /* @__PURE__ */ Ve(() => r().hasMore), m = /* @__PURE__ */ Ve(() => r().currentChatId), g = /* @__PURE__ */ Ve(() => () => {
    var pe, H;
    const N = P(h).length;
    if (N === 0) return "";
    const L = P(h)[N - 1], K = ((pe = L == null ? void 0 : L.message) != null ? pe : "").length;
    return `${(H = L == null ? void 0 : L.id) != null ? H : ""}:${K}`;
  });
  const k = () => {
    if (!o) return !0;
    const N = 80, { scrollTop: L, scrollHeight: K, clientHeight: pe } = o;
    return K - (L + pe) <= N;
  }, y = (N = !1) => {
    if (!o) return;
    if (f) {
      f.scrollIntoView({
        behavior: N ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const L = o.scrollHeight;
    N ? o.scrollTo({ top: L, behavior: "smooth" }) : o.scrollTop = L;
  }, x = () => ge(null, null, function* () {
    if (!o || (P(l) && he(c, k(), !0), P(a) || !P(d))) return;
    const { scrollTop: N } = o;
    N === 0 && P(m) && (he(a, !0), yield Ls(P(m), r().currentPage + 1), he(a, !1));
  });
  jr(() => {
    requestAnimationFrame(() => y(!1));
    const N = new ResizeObserver(() => {
      P(c) && y(!1);
    });
    o && N.observe(o), V0(() => {
      N.disconnect();
    });
  });
  const _ = () => {
    if (s) {
      s.style.height = "auto";
      const L = Math.min(s.scrollHeight, 120);
      s.style.height = `${L}px`;
    }
  };
  vu(() => {
    _();
  }), vu(() => {
    const N = P(h).length;
    if (P(g), !P(l) && N > 0) {
      l0().then(() => {
        requestAnimationFrame(() => {
          y(!1), he(c, !0), he(l, !0);
        });
      });
      return;
    }
    P(c) && requestAnimationFrame(() => y(!1));
  });
  const E = () => ge(null, null, function* () {
    if (!P(i).trim()) return;
    const N = P(i);
    he(i, ""), _(), he(c, !0), yield Rf(N, t.settings);
  });
  var C = tp(), R = re(C), D = re(R);
  {
    var B = (N) => {
      var L = Qh();
      Q(N, L);
    };
    rt(D, (N) => {
      P(a) && N(B);
    });
  }
  var Z = Ke(D, 2);
  us(Z, 17, () => P(h), (N) => N.id, (N, L) => {
    const K = /* @__PURE__ */ Ve(() => P(L).role === "human" ? "user" : "bot"), pe = /* @__PURE__ */ Ve(() => new Date(P(L).created_at)), H = /* @__PURE__ */ Ve(() => P(L).id === "streaming"), fe = /* @__PURE__ */ Ve(() => P(L).id === "streaming" && P(L).message.length > 0);
    Xh(N, {
      get content() {
        return P(L).message;
      },
      get type() {
        return P(K);
      },
      get timestamp() {
        return P(pe);
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
        return P(H);
      },
      get hasStarted() {
        return P(fe);
      }
    });
  });
  var ne = Ke(Z, 2);
  er(ne, (N) => f = N, () => f), er(R, (N) => o = N, () => o);
  var le = Ke(R, 2), te = re(le);
  te.__input = _, te.__keydown = [ep, E], er(te, (N) => s = N, () => s), Ie(() => te.disabled = P(p)), Di("scroll", R, x), Di("submit", le, (N) => {
    N.preventDefault(), E();
  }), z0(te, () => P(i), (N) => he(i, N)), Q(e, C), au(), n();
}
An(["input", "keydown"]);
const Ee = [];
for (let e = 0; e < 256; ++e)
  Ee.push((e + 256).toString(16).slice(1));
function rp(e, t = 0) {
  return (Ee[e[t + 0]] + Ee[e[t + 1]] + Ee[e[t + 2]] + Ee[e[t + 3]] + "-" + Ee[e[t + 4]] + Ee[e[t + 5]] + "-" + Ee[e[t + 6]] + Ee[e[t + 7]] + "-" + Ee[e[t + 8]] + Ee[e[t + 9]] + "-" + Ee[e[t + 10]] + Ee[e[t + 11]] + Ee[e[t + 12]] + Ee[e[t + 13]] + Ee[e[t + 14]] + Ee[e[t + 15]]).toLowerCase();
}
let dr;
const ip = new Uint8Array(16);
function op() {
  if (!dr) {
    if (typeof crypto == "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    dr = crypto.getRandomValues.bind(crypto);
  }
  return dr(ip);
}
const sp = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), _o = { randomUUID: sp };
function ap(e, t, u) {
  var r, i, o;
  if (_o.randomUUID && !e)
    return _o.randomUUID();
  e = e || {};
  const n = (o = (i = e.random) != null ? i : (r = e.rng) == null ? void 0 : r.call(e)) != null ? o : op();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, rp(n);
}
class cp {
  constructor(t) {
    kt(this, "settings");
    this.settings = t;
  }
  initialize() {
    return ge(this, null, function* () {
      yield this.initializeUserId(), yield this.initializeChat();
    });
  }
  initializeUserId() {
    return ge(this, null, function* () {
      if (!localStorage.getItem("userId")) {
        const u = ap();
        localStorage.setItem("userId", u);
      }
    });
  }
  initializeChat() {
    return ge(this, null, function* () {
      const t = localStorage.getItem("currentChatId");
      t ? yield Ls(t) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && Ue.update((t) => we(ce({}, t), {
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
    Ue.update((t) => we(ce({}, t), {
      messages: [],
      filters: {
        sources: [],
        dateRange: null
      }
    })), localStorage.removeItem("currentChatId"), this.settings.first_message && this.addInitialMessage();
  }
}
const lp = (e, t) => {
  t.resetChat();
}, fp = () => {
  const e = new CustomEvent("close-widget");
  document.dispatchEvent(e);
};
var dp = /* @__PURE__ */ Be('<main class="svelte-88yc6i"><header class="main-header svelte-88yc6i"><div class="title svelte-88yc6i"> </div> <div class="button-group svelte-88yc6i"><button class="icon-button svelte-88yc6i" aria-label="Refresh chat"><!></button> <button class="icon-button mobile-only svelte-88yc6i" aria-label="Close chat"><!></button></div></header> <div class="content svelte-88yc6i"><!></div></main>');
const hp = {
  hash: "svelte-88yc6i",
  code: `main.svelte-88yc6i {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-88yc6i {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.main-header.svelte-88yc6i {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.title.svelte-88yc6i {font-size:1.125rem;font-weight:600;line-height:1.25;}.button-group.svelte-88yc6i {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-88yc6i {padding:0.5rem;border-radius:9999px;background:transparent;border:none;color:white;cursor:pointer;}.icon-button.svelte-88yc6i:hover {background-color:rgba(255, 255, 255, 0.1);}.content.svelte-88yc6i {flex:1;overflow:hidden;}.mobile-only.svelte-88yc6i {display:none;}

  @media screen and (max-width: 640px) {.mobile-only.svelte-88yc6i {display:block;}
  }`
};
function pp(e, t) {
  su(t, !0), Cn(e, hp);
  const u = new cp(t.settings);
  jr(() => ge(null, null, function* () {
    yield u.initialize();
  }));
  var n = dp(), r = re(n), i = re(r), o = re(i), s = Ke(i, 2), a = re(s);
  a.__click = [lp, u];
  var c = re(a);
  Ff(c, { class: "icon" });
  var l = Ke(a, 2);
  l.__click = [fp];
  var f = re(l);
  js(f, { class: "icon" });
  var h = Ke(r, 2), p = re(h);
  np(p, {
    get settings() {
      return t.settings;
    }
  }), Ie(() => {
    var d;
    Au(r, `background-color: ${(d = t.settings.color_hex) != null ? d : ""};`), fn(o, t.settings.bot_name);
  }), Q(e, n), au();
}
An(["click"]);
const bp = "html,body{height:100%;margin:0;overflow:hidden}";
var gp = /* @__PURE__ */ Be('<span class="button-text svelte-sql7dr"> </span>'), mp = /* @__PURE__ */ Be('<img alt="Chat Icon" class="icon-image svelte-sql7dr">'), _p = /* @__PURE__ */ Be('<button id="chat-button"><!> <div class="chat-icon svelte-sql7dr"><!></div> <div class="close-icon svelte-sql7dr"><!></div></button>');
const xp = {
  hash: "svelte-sql7dr",
  code: `#chat-button.svelte-sql7dr {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;z-index:10000;}#chat-button.with-text.svelte-sql7dr {padding:0 1.25rem;border-radius:100px;}#chat-button.with-icon-url.svelte-sql7dr {padding:0.5rem;}#chat-button.svelte-sql7dr:hover {background-color:var(--hover-color) !important;transform:translateY(-1px);}#chat-button.active.svelte-sql7dr {filter:brightness(0.9);}.chat-icon.svelte-sql7dr,
  .close-icon.svelte-sql7dr {display:flex;align-items:center;transition:transform 0.3s ease;}.button-text.svelte-sql7dr {font-size:0.875rem;font-weight:500;white-space:nowrap;}.close-icon.svelte-sql7dr {display:none;}#chat-button.active.svelte-sql7dr .chat-icon:where(.svelte-sql7dr) {display:none;}#chat-button.active.svelte-sql7dr .close-icon:where(.svelte-sql7dr) {display:flex;}.icon-image.svelte-sql7dr {width:100%;height:100%;max-width:2.5rem;max-height:2.5rem;object-fit:contain;}`
};
function Ep(e, t) {
  su(t, !0), Cn(e, xp);
  const u = {
    MessageSquare: pn,
    MessageSquareMore: qs,
    Monitor: Hs,
    LifeBuoy: Us,
    HelpCircle: Bs,
    Menu: $s,
    Info: zs,
    FileText: Ps
  }, n = t.buttonIcon && (t.buttonIcon.startsWith("http://") || t.buttonIcon.startsWith("https://")), r = n ? null : u[t.buttonIcon] || pn;
  var i = _p();
  i.__click = function(...m) {
    var g;
    (g = t.onToggle) == null || g.apply(this, m);
  };
  let o;
  var s = re(i);
  {
    var a = (m) => {
      var g = gp(), k = re(g);
      Ie(() => fn(k, t.buttonText)), Q(m, g);
    };
    rt(s, (m) => {
      t.showButtonText && m(a);
    });
  }
  var c = Ke(s, 2), l = re(c);
  {
    var f = (m) => {
      var g = mp();
      Ie(() => Cu(g, "src", t.buttonIcon)), Q(m, g);
    }, h = (m, g) => {
      {
        var k = (y) => {
          r(y, { size: 24, strokeWidth: 2 });
        };
        rt(
          m,
          (y) => {
            r && y(k);
          },
          g
        );
      }
    };
    rt(l, (m) => {
      n ? m(f) : m(h, !1);
    });
  }
  var p = Ke(c, 2), d = re(p);
  js(d, { size: 24, strokeWidth: 2 }), Ie(
    (m) => {
      var g, k;
      Cu(i, "aria-label", t.isOpen ? "Close chat" : "Open chat"), Au(i, `background-color: ${(g = t.colorHex) != null ? g : ""}; --hover-color: ${(k = t.lighterColorHex) != null ? k : ""}`), o = At(i, 1, "svelte-sql7dr", null, o, m);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText,
        "with-icon-url": n
      })
    ]
  ), Q(e, i), au();
}
An(["click"]);
class yp {
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
    return ge(this, null, function* () {
      try {
        return (yield Df.get(`/api/bots/${t}/widget-settings`)).data.data;
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

            ${bp}
        `, t;
  }
  initialize(t) {
    return ge(this, null, function* () {
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
      }), Ti(pp, {
        target: r,
        props: {
          settings: this.settings
        }
      }), this.fluid || Ti(Ep, {
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
const vp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), Hp = (e, t = !1) => {
  vp() || new yp(e, t);
};
export {
  yp as FluentBotChatWidget,
  Hp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
