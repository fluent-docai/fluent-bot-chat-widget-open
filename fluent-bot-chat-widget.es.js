var sc = Object.defineProperty, ac = Object.defineProperties;
var cc = Object.getOwnPropertyDescriptors;
var mi = Object.getOwnPropertySymbols;
var lc = Object.prototype.hasOwnProperty, fc = Object.prototype.propertyIsEnumerable;
var Kt = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), dc = (e) => {
  throw TypeError(e);
};
var Gn = (e, t, u) => t in e ? sc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, fe = (e, t) => {
  for (var u in t || (t = {}))
    lc.call(t, u) && Gn(e, u, t[u]);
  if (mi)
    for (var u of mi(t))
      fc.call(t, u) && Gn(e, u, t[u]);
  return e;
}, Ee = (e, t) => ac(e, cc(t));
var Ve = (e, t, u) => Gn(e, typeof t != "symbol" ? t + "" : t, u);
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
}, Vn = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof zt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[Kt("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, Zn = (e) => {
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
        a instanceof Object || dc("Object expected"), s(a);
      }), 1)
    };
  }), r[Kt("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, _i = (e, t, u) => (t = e[Kt("asyncIterator")]) ? t.call(e) : (e = e[Kt("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var Sr = Array.isArray, hc = Array.prototype.indexOf, Tr = Array.from, vo = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, Eo = Object.getOwnPropertyDescriptors, pc = Object.prototype, bc = Array.prototype, Fr = Object.getPrototypeOf, xi = Object.isExtensible;
function mu(e) {
  return typeof e == "function";
}
const Rt = () => {
};
function gc(e) {
  return e();
}
function ku(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const tt = 2, ko = 4, yn = 8, Rr = 16, vt = 32, au = 64, sn = 128, $e = 256, an = 512, Le = 1024, xt = 2048, Gt = 4096, _t = 8192, vn = 16384, mc = 32768, Ou = 65536, _c = 1 << 17, xc = 1 << 19, wo = 1 << 20, hr = 1 << 21, Ot = Symbol("$state"), Co = Symbol("legacy props"), yc = Symbol("");
function Ao(e) {
  return e === this.v;
}
function Do(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Or(e) {
  return !Do(e, this.v);
}
function vc(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ec() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function kc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function wc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Cc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Ac() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Dc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Sc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let cu = !1;
function Tc() {
  cu = !0;
}
const Nr = 1, Ir = 2, So = 4, Fc = 8, Rc = 16, Oc = 1, Nc = 2, To = 4, Ic = 8, Mc = 16, Lc = 2, Oe = Symbol(), Bc = "http://www.w3.org/1999/xhtml", zc = "http://www.w3.org/2000/svg";
function Pc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let oe = null;
function yi(e) {
  oe = e;
}
function lu(e, t = !1, u) {
  var n = oe = {
    p: oe,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  cu && !t && (oe.l = {
    s: null,
    u: null,
    r1: [],
    r2: tu(!1)
  }), Br(() => {
    n.d = !0;
  });
}
function fu(e) {
  const t = oe;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = X, n = Q;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          Nt(i.effect), dt(i.reaction), zr(i.fn);
        }
      } finally {
        Nt(u), dt(n);
      }
    }
    oe = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Nu() {
  return !cu || oe !== null && oe.l === null;
}
function Pt(e) {
  if (typeof e != "object" || e === null || Ot in e)
    return e;
  const t = Fr(e);
  if (t !== pc && t !== bc)
    return e;
  var u = /* @__PURE__ */ new Map(), n = Sr(e), r = /* @__PURE__ */ Ne(0), i = Q, o = (s) => {
    var a = Q;
    dt(i);
    var c = s();
    return dt(a), c;
  };
  return n && u.set("length", /* @__PURE__ */ Ne(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ac();
        var l = u.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ Ne(c.value)), u.set(a, l)) : se(
          l,
          o(() => Pt(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = u.get(a);
        if (c === void 0)
          a in s && (u.set(
            a,
            o(() => /* @__PURE__ */ Ne(Oe))
          ), Kn(r));
        else {
          if (n && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              u.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && se(l, f);
          }
          se(c, Oe), Kn(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === Ot)
          return e;
        var l = u.get(a), f = a in s;
        if (l === void 0 && (!f || (p = Ft(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ Ne(Pt(f ? s[a] : Oe))), u.set(a, l)), l !== void 0) {
          var h = O(l);
          return h === Oe ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = u.get(a);
          l && (c.value = O(l));
        } else if (c === void 0) {
          var f = u.get(a), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Oe)
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
        var c = u.get(a), l = c !== void 0 && c.v !== Oe || Reflect.has(s, a);
        if (c !== void 0 || X !== null && (!l || (h = Ft(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ Ne(l ? Pt(s[a]) : Oe)), u.set(a, c));
          var f = O(c);
          if (f === Oe)
            return !1;
        }
        return l;
      },
      set(s, a, c, l) {
        var E;
        var f = u.get(a), h = a in s;
        if (n && a === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var d = u.get(p + "");
            d !== void 0 ? se(d, Oe) : p in s && (d = o(() => /* @__PURE__ */ Ne(Oe)), u.set(p + "", d));
          }
        f === void 0 ? (!h || (E = Ft(s, a)) != null && E.writable) && (f = o(() => /* @__PURE__ */ Ne(void 0)), se(
          f,
          o(() => Pt(c))
        ), u.set(a, f)) : (h = f.v !== Oe, se(
          f,
          o(() => Pt(c))
        ));
        var m = Reflect.getOwnPropertyDescriptor(s, a);
        if (m != null && m.set && m.set.call(l, c), !h) {
          if (n && typeof a == "string") {
            var g = (
              /** @type {Source<number>} */
              u.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= g.v && se(g, k + 1);
          }
          Kn(r);
        }
        return !0;
      },
      ownKeys(s) {
        O(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = u.get(f);
          return h === void 0 || h.v !== Oe;
        });
        for (var [c, l] of u)
          l.v !== Oe && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Dc();
      }
    }
  );
}
function Kn(e, t = 1) {
  se(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function eu(e) {
  var t = tt | xt, u = Q !== null && (Q.f & tt) !== 0 ? (
    /** @type {Derived} */
    Q
  ) : null;
  return X === null || u !== null && (u.f & $e) !== 0 ? t |= $e : X.f |= wo, {
    ctx: oe,
    deps: null,
    effects: null,
    equals: Ao,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: u != null ? u : X
  };
}
// @__NO_SIDE_EFFECTS__
function je(e) {
  const t = /* @__PURE__ */ eu(e);
  return Wo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Mr(e) {
  const t = /* @__PURE__ */ eu(e);
  return t.equals = Or, t;
}
function Fo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      yt(
        /** @type {Effect} */
        t[u]
      );
  }
}
function Uc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & tt) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Ro(e) {
  var t, u = X;
  Nt(Uc(e));
  try {
    Fo(e), t = Ko(e);
  } finally {
    Nt(u);
  }
  return t;
}
function Oo(e) {
  var t = Ro(e), u = (St || (e.f & $e) !== 0) && e.deps !== null ? Gt : Le;
  ut(e, u), e.equals(t) || (e.v = t, e.wv = Vo());
}
const wu = /* @__PURE__ */ new Map();
function tu(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ao,
    rv: 0,
    wv: 0
  };
  return u;
}
// @__NO_SIDE_EFFECTS__
function Ne(e, t) {
  const u = tu(e);
  return Wo(u), u;
}
// @__NO_SIDE_EFFECTS__
function Lr(e, t = !1) {
  var n, r;
  const u = tu(e);
  return t || (u.equals = Or), cu && oe !== null && oe.l !== null && ((r = (n = oe.l).s) != null ? r : n.s = []).push(u), u;
}
function se(e, t, u = !1) {
  Q !== null && !ct && Nu() && (Q.f & (tt | Rr)) !== 0 && !(Se != null && Se.includes(e)) && Sc();
  let n = u ? Pt(t) : t;
  return pr(e, n);
}
function pr(e, t) {
  if (!e.equals(t)) {
    var u = e.v;
    Lu ? wu.set(e, t) : wu.set(e, u), e.v = t, (e.f & tt) !== 0 && ((e.f & xt) !== 0 && Ro(
      /** @type {Derived} */
      e
    ), ut(e, (e.f & $e) === 0 ? Le : Gt)), e.wv = Vo(), No(e, xt), Nu() && X !== null && (X.f & Le) !== 0 && (X.f & (vt | au)) === 0 && (Ze === null ? Kc([e]) : Ze.push(e));
  }
  return t;
}
function vi(e, t = 1) {
  var u = O(e), n = t === 1 ? u++ : u--;
  return se(e, u), n;
}
function No(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Nu(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & xt) === 0 && (!n && o === X || (ut(o, t), (s & (Le | $e)) !== 0 && ((s & tt) !== 0 ? No(
        /** @type {Derived} */
        o,
        Gt
      ) : Cn(
        /** @type {Effect} */
        o
      ))));
    }
}
let jc = !1;
var Ei, Io, Mo, Lo;
function qc() {
  if (Ei === void 0) {
    Ei = window, Io = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, u = Text.prototype;
    Mo = Ft(t, "firstChild").get, Lo = Ft(t, "nextSibling").get, xi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), xi(u) && (u.__t = void 0);
  }
}
function En(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function mt(e) {
  return Mo.call(e);
}
// @__NO_SIDE_EFFECTS__
function kn(e) {
  return Lo.call(e);
}
function ie(e, t) {
  return /* @__PURE__ */ mt(e);
}
function Ce(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ mt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ kn(u) : u;
  }
}
function Qe(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ kn(n);
  return n;
}
function $c(e) {
  e.textContent = "";
}
function Bo(e) {
  X === null && Q === null && kc(), Q !== null && (Q.f & $e) !== 0 && X === null && Ec(), Lu && vc();
}
function Hc(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function du(e, t, u, n = !0) {
  var a;
  var r = X, i = {
    ctx: oe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | xt,
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
      jr(i), i.f |= mc;
    } catch (c) {
      throw yt(i), c;
    }
  else t !== null && Cn(i);
  var o = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (wo | sn)) === 0;
  if (!o && n && (r !== null && Hc(i, r), Q !== null && (Q.f & tt) !== 0)) {
    var s = (
      /** @type {Derived} */
      Q
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function Br(e) {
  const t = du(yn, null, !1);
  return ut(t, Le), t.teardown = e, t;
}
function uu(e) {
  var r;
  Bo();
  var t = X !== null && (X.f & vt) !== 0 && oe !== null && !oe.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      oe
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: X,
      reaction: Q
    });
  } else {
    var n = zr(e);
    return n;
  }
}
function Wc(e) {
  return Bo(), Pr(e);
}
function Gc(e) {
  const t = du(au, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? nu(t, () => {
      yt(t), n(void 0);
    }) : (yt(t), n(void 0));
  });
}
function zr(e) {
  return du(ko, e, !1);
}
function Pr(e) {
  return du(yn, e, !0);
}
function qe(e, t = [], u = eu) {
  const n = t.map(u);
  return Iu(() => e(...n.map(O)));
}
function Iu(e, t = 0) {
  return du(yn | Rr | t, e, !0);
}
function $t(e, t = !0) {
  return du(yn | vt, e, !0, t);
}
function zo(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Lu, n = Q;
    wi(!0), dt(null);
    try {
      t.call(null);
    } finally {
      wi(u), dt(n);
    }
  }
}
function Po(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    (u.f & au) !== 0 ? u.parent = null : yt(u, t), u = n;
  }
}
function Vc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & vt) === 0 && yt(t), t = u;
  }
}
function yt(e, t = !0) {
  var u = !1;
  (t || (e.f & xc) !== 0) && e.nodes_start !== null && (Uo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), u = !0), Po(e, t && !u), dn(e, 0), ut(e, vn);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  zo(e);
  var r = e.parent;
  r !== null && r.first !== null && jo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Uo(e, t) {
  for (; e !== null; ) {
    var u = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ kn(e)
    );
    e.remove(), e = u;
  }
}
function jo(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function nu(e, t) {
  var u = [];
  Ur(e, u, !0), qo(u, () => {
    yt(e), t && t();
  });
}
function qo(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function Ur(e, t, u) {
  if ((e.f & _t) === 0) {
    if (e.f ^= _t, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & Ou) !== 0 || (n.f & vt) !== 0;
      Ur(n, t, i ? u : !1), n = r;
    }
  }
}
function Cu(e) {
  $o(e, !0);
}
function $o(e, t) {
  if ((e.f & _t) !== 0) {
    e.f ^= _t, (e.f & Le) === 0 && (e.f ^= Le), Bu(e) && (ut(e, xt), Cn(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & Ou) !== 0 || (u.f & vt) !== 0;
      $o(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Au = [], br = [];
function Ho() {
  var e = Au;
  Au = [], ku(e);
}
function Zc() {
  var e = br;
  br = [], ku(e);
}
function Mu(e) {
  Au.length === 0 && queueMicrotask(Ho), Au.push(e);
}
function ki() {
  Au.length > 0 && Ho(), br.length > 0 && Zc();
}
let tn = !1, cn = !1, ln = null, jt = !1, Lu = !1;
function wi(e) {
  Lu = e;
}
let Eu = [];
let Q = null, ct = !1;
function dt(e) {
  Q = e;
}
let X = null;
function Nt(e) {
  X = e;
}
let Se = null;
function Wo(e) {
  Q !== null && Q.f & hr && (Se === null ? Se = [e] : Se.push(e));
}
let De = null, Ue = 0, Ze = null;
function Kc(e) {
  Ze = e;
}
let Go = 1, fn = 0, St = !1;
function Vo() {
  return ++Go;
}
function Bu(e) {
  var f, h;
  var t = e.f;
  if ((t & xt) !== 0)
    return !0;
  if ((t & Gt) !== 0) {
    var u = e.deps, n = (t & $e) !== 0;
    if (u !== null) {
      var r, i, o = (t & an) !== 0, s = n && X !== null && !St, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= an), s && l !== null && (l.f & $e) === 0 && (c.f ^= $e);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Bu(
          /** @type {Derived} */
          i
        ) && Oo(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || X !== null && !St) && ut(e, Le);
  }
  return !1;
}
function Jc(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & sn) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= sn;
      }
    u = u.parent;
  }
  throw tn = !1, e;
}
function Ci(e) {
  return (e.f & vn) === 0 && (e.parent === null || (e.parent.f & sn) === 0);
}
function wn(e, t, u, n) {
  if (tn) {
    if (u === null && (tn = !1), Ci(t))
      throw e;
    return;
  }
  if (u !== null && (tn = !0), Jc(e, t), Ci(t))
    throw e;
}
function Zo(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      Se != null && Se.includes(e) || ((i.f & tt) !== 0 ? Zo(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? ut(i, xt) : (i.f & Le) !== 0 && ut(i, Gt), Cn(
        /** @type {Effect} */
        i
      )));
    }
}
function Ko(e) {
  var p, d;
  var t = De, u = Ue, n = Ze, r = Q, i = St, o = Se, s = oe, a = ct, c = e.f;
  De = /** @type {null | Value[]} */
  null, Ue = 0, Ze = null, St = (c & $e) !== 0 && (ct || !jt || Q === null), Q = (c & (vt | au)) === 0 ? e : null, Se = null, yi(e.ctx), ct = !1, fn++, e.f |= hr;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (De !== null) {
      var h;
      if (dn(e, Ue), f !== null && Ue > 0)
        for (f.length = Ue + De.length, h = 0; h < De.length; h++)
          f[Ue + h] = De[h];
      else
        e.deps = f = De;
      if (!St)
        for (h = Ue; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Ue < f.length && (dn(e, Ue), f.length = Ue);
    if (Nu() && Ze !== null && !ct && f !== null && (e.f & (tt | Gt | xt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Ze.length; h++)
        Zo(
          Ze[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (fn++, Ze !== null && (n === null ? n = Ze : n.push(.../** @type {Source[]} */
    Ze))), l;
  } finally {
    De = t, Ue = u, Ze = n, Q = r, St = i, Se = o, yi(s), ct = a, e.f ^= hr;
  }
}
function Xc(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = hc.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & tt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (De === null || !De.includes(t)) && (ut(t, Gt), (t.f & ($e | an)) === 0 && (t.f ^= an), Fo(
    /** @type {Derived} **/
    t
  ), dn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function dn(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      Xc(e, u[n]);
}
function jr(e) {
  var t = e.f;
  if ((t & vn) === 0) {
    ut(e, Le);
    var u = X, n = oe, r = jt;
    X = e, jt = !0;
    try {
      (t & Rr) !== 0 ? Vc(e) : Po(e), zo(e);
      var i = Ko(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = Go;
      var o = e.deps, s;
    } catch (a) {
      wn(a, e, u, n || e.ctx);
    } finally {
      jt = r, X = u;
    }
  }
}
function Yc() {
  try {
    wc();
  } catch (e) {
    if (ln !== null)
      wn(e, ln, null);
    else
      throw e;
  }
}
function Jo() {
  var e = jt;
  try {
    var t = 0;
    for (jt = !0; Eu.length > 0; ) {
      t++ > 1e3 && Yc();
      var u = Eu, n = u.length;
      Eu = [];
      for (var r = 0; r < n; r++) {
        var i = e0(u[r]);
        Qc(i);
      }
      wu.clear();
    }
  } finally {
    cn = !1, jt = e, ln = null;
  }
}
function Qc(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (vn | _t)) === 0)
        try {
          Bu(n) && (jr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? jo(n) : n.fn = null));
        } catch (r) {
          wn(r, n, null, n.ctx);
        }
    }
}
function Cn(e) {
  cn || (cn = !0, queueMicrotask(Jo));
  for (var t = ln = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (au | vt)) !== 0) {
      if ((u & Le) === 0) return;
      t.f ^= Le;
    }
  }
  Eu.push(t);
}
function e0(e) {
  for (var t = [], u = e; u !== null; ) {
    var n = u.f, r = (n & (vt | au)) !== 0, i = r && (n & Le) !== 0;
    if (!i && (n & _t) === 0) {
      if ((n & ko) !== 0)
        t.push(u);
      else if (r)
        u.f ^= Le;
      else
        try {
          Bu(u) && jr(u);
        } catch (a) {
          wn(a, u, null, u.ctx);
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
function t0(e) {
  var t;
  for (ki(); Eu.length > 0; )
    cn = !0, Jo(), ki();
  return (
    /** @type {T} */
    t
  );
}
function u0() {
  return ge(this, null, function* () {
    yield Promise.resolve(), t0();
  });
}
function O(e) {
  var t = e.f, u = (t & tt) !== 0;
  if (Q !== null && !ct) {
    if (!(Se != null && Se.includes(e))) {
      var n = Q.deps;
      e.rv < fn && (e.rv = fn, De === null && n !== null && n[Ue] === e ? Ue++ : De === null ? De = [e] : (!St || !De.includes(e)) && De.push(e));
    }
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & $e) === 0 && (r.f ^= $e);
  }
  return u && (r = /** @type {Derived} */
  e, Bu(r) && Oo(r)), Lu && wu.has(e) ? wu.get(e) : e.v;
}
function Ht(e) {
  var t = ct;
  try {
    return ct = !0, e();
  } finally {
    ct = t;
  }
}
const n0 = -7169;
function ut(e, t) {
  e.f = e.f & n0 | t;
}
function r0(e) {
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
    const u = Fr(e);
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
function i0(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const o0 = [
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
function s0(e) {
  return o0.includes(e);
}
const a0 = {
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
function c0(e) {
  var t;
  return e = e.toLowerCase(), (t = a0[e]) != null ? t : e;
}
const l0 = ["touchstart", "touchmove"];
function f0(e) {
  return l0.includes(e);
}
function d0(e, t) {
  if (t) {
    const u = document.body;
    e.autofocus = !0, Mu(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let Ai = !1;
function h0() {
  Ai || (Ai = !0, document.addEventListener(
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
function Xo(e) {
  var t = Q, u = X;
  dt(null), Nt(null);
  try {
    return e();
  } finally {
    dt(t), Nt(u);
  }
}
function p0(e, t, u, n = u) {
  e.addEventListener(t, () => Xo(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), h0();
}
const Yo = /* @__PURE__ */ new Set(), mr = /* @__PURE__ */ new Set();
function Qo(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || vu.call(t, i), !i.cancelBubble)
      return Xo(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Mu(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Di(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = Qo(e, t, u, i);
  (t === document.body || t === window || t === document) && Br(() => {
    t.removeEventListener(e, o, i);
  });
}
function An(e) {
  for (var t = 0; t < e.length; t++)
    Yo.add(e[t]);
  for (var u of mr)
    u(e);
}
function vu(e) {
  var E;
  var t = this, u = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, r = ((E = e.composedPath) == null ? void 0 : E.call(e)) || [], i = (
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
    var l = Q, f = X;
    dt(null), Nt(null);
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
            if (Sr(m)) {
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
      e.__root = t, delete e.currentTarget, dt(l), Nt(f);
    }
  }
}
function qr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function zu(e, t) {
  var u = (
    /** @type {Effect} */
    X
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function Fe(e, t) {
  var u = (t & Lc) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = qr(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ mt(n));
    var i = (
      /** @type {TemplateNode} */
      u || Io ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return zu(i, i), i;
  };
}
// @__NO_SIDE_EFFECTS__
function b0(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        qr(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ mt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ mt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return zu(a, a), a;
  };
}
function Ae() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = En();
  return e.append(t, u), zu(t, u), e;
}
function K(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function hn(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function Jn(e, t) {
  return g0(e, t);
}
const Jt = /* @__PURE__ */ new Map();
function g0(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  qc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = f0(p);
        t.addEventListener(p, vu, { passive: d });
        var m = Jt.get(p);
        m === void 0 ? (document.addEventListener(p, vu, { passive: d }), Jt.set(p, 1)) : Jt.set(p, m + 1);
      }
    }
  };
  a(Tr(Yo)), mr.add(a);
  var c = void 0, l = Gc(() => {
    var f = u != null ? u : t.appendChild(En());
    return $t(() => {
      if (i) {
        lu({});
        var h = (
          /** @type {ComponentContext} */
          oe
        );
        h.c = i;
      }
      r && (n.$$events = r), c = e(f, n) || {}, i && fu();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, vu);
        var p = (
          /** @type {number} */
          Jt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, vu), Jt.delete(h)) : Jt.set(h, p);
      }
      mr.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return m0.set(c, l), c;
}
let m0 = /* @__PURE__ */ new WeakMap();
function Ke(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = Oe, a = u > 0 ? Ou : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? Cu(i) : p && (i = $t(() => p(r))), o && nu(o, () => {
      o = null;
    })) : (o ? Cu(o) : p && (o = $t(() => p(r, [u + 1, n]))), i && nu(i, () => {
      i = null;
    })));
  };
  Iu(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function _0(e, t) {
  return t;
}
function x0(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Ur(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    $c(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), wt(e, t[0].prev, t[i - 1].next);
  }
  qo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), wt(e, l.prev, l.next)), yt(l.e, !s);
    }
  });
}
function es(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & So) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(En());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Mr(() => {
    var p = u();
    return Sr(p) ? p : p == null ? [] : Tr(p);
  });
  Iu(() => {
    var p = O(h), d = p.length;
    f && d === 0 || (f = d === 0, y0(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? Cu(l) : l = $t(() => i(o)) : l !== null && nu(l, () => {
      l = null;
    })), O(h));
  });
}
function y0(e, t, u, n, r, i, o) {
  var Y, G, I, V;
  var s = (r & Fc) !== 0, a = (r & (Nr | Ir)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, m, g = [], k = [], E, x, _, y;
  if (s)
    for (y = 0; y < c; y += 1)
      E = e[y], x = i(E, y), _ = l.get(x), _ !== void 0 && ((Y = _.a) == null || Y.measure(), (m != null ? m : m = /* @__PURE__ */ new Set()).add(_));
  for (y = 0; y < c; y += 1) {
    if (E = e[y], x = i(E, y), _ = l.get(x), _ === void 0) {
      var C = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = E0(
        C,
        t,
        d,
        d === null ? t.first : d.next,
        E,
        x,
        y,
        n,
        r,
        o
      ), l.set(x, d), g = [], k = [], h = d.next;
      continue;
    }
    if (a && v0(_, E, y, r), (_.e.f & _t) !== 0 && (Cu(_.e), s && ((G = _.a) == null || G.unfix(), (m != null ? m : m = /* @__PURE__ */ new Set()).delete(_))), _ !== h) {
      if (p !== void 0 && p.has(_)) {
        if (g.length < k.length) {
          var A = k[0], S;
          d = A.prev;
          var B = g[0], P = g[g.length - 1];
          for (S = 0; S < g.length; S += 1)
            Si(g[S], A, u);
          for (S = 0; S < k.length; S += 1)
            p.delete(k[S]);
          wt(t, B.prev, P.next), wt(t, d, B), wt(t, P, A), h = A, d = P, y -= 1, g = [], k = [];
        } else
          p.delete(_), Si(_, h, u), wt(t, _.prev, _.next), wt(t, _, d === null ? t.first : d.next), wt(t, d, _), d = _;
        continue;
      }
      for (g = [], k = []; h !== null && h.k !== x; )
        (h.e.f & _t) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      _ = h;
    }
    g.push(_), d = _, h = _.next;
  }
  if (h !== null || p !== void 0) {
    for (var $ = p === void 0 ? [] : Tr(p); h !== null; )
      (h.e.f & _t) === 0 && $.push(h), h = h.next;
    var ne = $.length;
    if (ne > 0) {
      var re = (r & So) !== 0 && c === 0 ? u : null;
      if (s) {
        for (y = 0; y < ne; y += 1)
          (I = $[y].a) == null || I.measure();
        for (y = 0; y < ne; y += 1)
          (V = $[y].a) == null || V.fix();
      }
      x0(t, $, re, l);
    }
  }
  s && Mu(() => {
    var Z;
    if (m !== void 0)
      for (_ of m)
        (Z = _.a) == null || Z.apply();
  }), X.first = t.first && t.first.e, X.last = d && d.e;
}
function v0(e, t, u, n) {
  (n & Nr) !== 0 && pr(e.v, t), (n & Ir) !== 0 ? pr(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function E0(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & Nr) !== 0, f = (a & Rc) === 0, h = l ? f ? /* @__PURE__ */ Lr(r) : tu(r) : r, p = (a & Ir) === 0 ? o : tu(o), d = {
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
    return d.e = $t(() => s(e, h, p, c), jc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Si(e, t, u) {
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
      /* @__PURE__ */ kn(i)
    );
    r.before(i), i = o;
  }
}
function wt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function k0(e, t, u = !1, n = !1, r = !1) {
  var i = e, o = "";
  qe(() => {
    var l;
    var s = (
      /** @type {Effect} */
      X
    );
    if (o !== (o = (l = t()) != null ? l : "") && (s.nodes_start !== null && (Uo(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "")) {
      var a = o + "";
      u ? a = `<svg>${a}</svg>` : n && (a = `<math>${a}</math>`);
      var c = qr(a);
      if ((u || n) && (c = /** @type {Element} */
      /* @__PURE__ */ mt(c)), zu(
        /** @type {TemplateNode} */
        /* @__PURE__ */ mt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), u || n)
        for (; /* @__PURE__ */ mt(c); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ mt(c)
          );
      else
        i.before(c);
    }
  });
}
function ze(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function ts(e, t, u) {
  var n = e, r, i;
  Iu(() => {
    r !== (r = t()) && (i && (nu(i), i = null), r && (i = $t(() => u(n, r))));
  }, Ou);
}
function w0(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  Iu(() => {
    const f = t() || null;
    var h = zc;
    f !== o && (l && (f === null ? nu(l, () => {
      l = null, s = null;
    }) : f === s ? Cu(l) : yt(l)), f && f !== s && (l = $t(() => {
      if (a = document.createElementNS(h, f), zu(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(En())
        );
        n(a, p);
      }
      X.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, Ou);
}
function Dn(e, t) {
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
function us(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = us(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function C0() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = us(e)) && (n && (n += " "), n += t);
  return n;
}
function A0(e) {
  return typeof e == "object" ? C0(e) : e != null ? e : "";
}
const Ti = [...` 	
\r\f \v\uFEFF`];
function D0(e, t, u) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), u) {
    for (var r in u)
      if (u[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var i = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || Ti.includes(n[o - 1])) && (s === n.length || Ti.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Fi(e, t = !1) {
  var u = t ? " !important;" : ";", n = "";
  for (var r in e) {
    var i = e[r];
    i != null && i !== "" && (n += " " + r + ": " + i + u);
  }
  return n;
}
function Xn(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function S0(e, t) {
  if (t) {
    var u = "", n, r;
    if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      n && a.push(...Object.keys(n).map(Xn)), r && a.push(...Object.keys(r).map(Xn));
      var c = 0, l = -1;
      const m = e.length;
      for (var f = 0; f < m; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === m - 1) {
            if (l !== -1) {
              var p = Xn(e.substring(c, l).trim());
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
    return n && (u += Fi(n)), r && (u += Fi(r, !0)), u = u.trim(), u === "" ? null : u;
  }
  return e == null ? null : String(e);
}
function Ct(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u || o === void 0) {
    var s = D0(u, n, i);
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
function ru(e, t, u, n) {
  var r = e.__style;
  if (r !== t) {
    var i = S0(t, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else n && (Array.isArray(n) ? (Yn(e, u == null ? void 0 : u[0], n[0]), Yn(e, u == null ? void 0 : u[1], n[1], "important")) : Yn(e, u, n));
  return n;
}
const _u = Symbol("class"), xu = Symbol("style"), ns = Symbol("is custom element"), rs = Symbol("is html");
function T0(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function iu(e, t, u, n) {
  var r = is(e);
  r[t] !== (r[t] = u) && (t === "loading" && (e[yc] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && os(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function Ri(e, t, u, n, r = !1) {
  var E;
  var i = is(e), o = i[ns], s = !i[rs], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in u || (u[l] = null);
  u.class ? u.class = A0(u.class) : u[_u] && (u.class = null), u[xu] && ((E = u.style) != null || (u.style = null));
  var f = os(e);
  for (const x in u) {
    let _ = u[x];
    if (c && x === "value" && _ == null) {
      e.value = e.__value = "", a[x] = _;
      continue;
    }
    if (x === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Ct(e, h, _, n, t == null ? void 0 : t[_u], u[_u]), a[x] = _, a[_u] = u[_u];
      continue;
    }
    if (x === "style") {
      ru(e, _, t == null ? void 0 : t[xu], u[xu]), a[x] = _, a[xu] = u[xu];
      continue;
    }
    var p = a[x];
    if (_ !== p) {
      a[x] = _;
      var d = x[0] + x[1];
      if (d !== "$$")
        if (d === "on") {
          const y = {}, C = "$$" + x;
          let A = x.slice(2);
          var m = s0(A);
          if (i0(A) && (A = A.slice(0, -7), y.capture = !0), !m && p) {
            if (_ != null) continue;
            e.removeEventListener(A, a[C], y), a[C] = null;
          }
          if (_ != null)
            if (m)
              e[`__${A}`] = _, An([A]);
            else {
              let S = function(B) {
                a[x].call(this, B);
              };
              a[C] = Qo(A, e, S, y);
            }
          else m && (e[`__${A}`] = void 0);
        } else if (x === "style")
          iu(e, x, _);
        else if (x === "autofocus")
          d0(
            /** @type {HTMLElement} */
            e,
            !!_
          );
        else if (!o && (x === "__value" || x === "value" && _ != null))
          e.value = e.__value = _;
        else if (x === "selected" && c)
          T0(
            /** @type {HTMLOptionElement} */
            e,
            _
          );
        else {
          var g = x;
          s || (g = c0(g));
          var k = g === "defaultValue" || g === "defaultChecked";
          if (_ == null && !o && !k)
            if (i[x] = null, g === "value" || g === "checked") {
              let y = (
                /** @type {HTMLInputElement} */
                e
              );
              const C = t === void 0;
              if (g === "value") {
                let A = y.defaultValue;
                y.removeAttribute(g), y.defaultValue = A, y.value = y.__value = C ? A : null;
              } else {
                let A = y.defaultChecked;
                y.removeAttribute(g), y.defaultChecked = A, y.checked = C ? A : !1;
              }
            } else
              e.removeAttribute(x);
          else k || f.includes(g) && (o || typeof _ != "string") ? e[g] = _ : typeof _ != "function" && iu(e, g, _);
        }
    }
  }
  return a;
}
function is(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [ns]: e.nodeName.includes("-"),
      [rs]: e.namespaceURI === Bc
    }
  );
}
var Oi = /* @__PURE__ */ new Map();
function os(e) {
  var t = Oi.get(e.nodeName);
  if (t) return t;
  Oi.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = Eo(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = Fr(n);
  }
  return t;
}
function F0(e, t, u = t) {
  var n = Nu();
  p0(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = Qn(e) ? er(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ht(t) == null && e.value && u(Qn(e) ? er(e.value) : e.value), Pr(() => {
    var r = t();
    Qn(e) && r === er(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function Qn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function er(e) {
  return e === "" ? null : +e;
}
function Ni(e, t) {
  return e === t || (e == null ? void 0 : e[Ot]) === t;
}
function un(e = {}, t, u, n) {
  return zr(() => {
    var r, i;
    return Pr(() => {
      r = i, i = [], Ht(() => {
        e !== u(...i) && (t(e, ...i), r && Ni(u(...r), e) && t(null, ...r));
      });
    }), () => {
      Mu(() => {
        i && Ni(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function R0(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    oe
  ), u = t.l.u;
  if (!u) return;
  let n = () => r0(t.s);
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
    n = () => O(o);
  }
  u.b.length && Wc(() => {
    Ii(t, n), ku(u.b);
  }), uu(() => {
    const r = Ht(() => u.m.map(gc));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && uu(() => {
    Ii(t, n), ku(u.a);
  });
}
function Ii(e, t) {
  if (e.l.s)
    for (const u of e.l.s) O(u);
  t();
}
function $r(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), Rt;
  const n = Ht(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Xt = [];
function O0(e, t) {
  return {
    subscribe: ss(e, t).subscribe
  };
}
function ss(e, t = Rt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Do(e, s) && (e = s, u)) {
      const a = !Xt.length;
      for (const c of n)
        c[1](), Xt.push(c, e);
      if (a) {
        for (let c = 0; c < Xt.length; c += 2)
          Xt[c][0](Xt[c + 1]);
        Xt.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = Rt) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (u = t(r, i) || Rt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function N0(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return O0(u, (o, s) => {
    let a = !1;
    const c = [];
    let l = 0, f = Rt;
    const h = () => {
      if (l)
        return;
      f();
      const d = t(n ? c[0] : c, o, s);
      i ? o(d) : f = typeof d == "function" ? d : Rt;
    }, p = r.map(
      (d, m) => $r(
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
      ku(p), f(), a = !1;
    };
  });
}
function as(e) {
  let t;
  return $r(e, (u) => t = u)(), t;
}
let Yu = !1, _r = Symbol();
function I0(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ Lr(void 0),
    unsubscribe: Rt
  };
  if (n.store !== e && !(_r in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = Rt;
    else {
      var r = !0;
      n.unsubscribe = $r(e, (o) => {
        r ? n.source.v = o : se(n.source, o);
      }), r = !1;
    }
  return e && _r in u ? as(e) : O(n.source);
}
function M0() {
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
function L0(e) {
  var t = Yu;
  try {
    return Yu = !1, [e(), Yu];
  } finally {
    Yu = t;
  }
}
const B0 = {
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
function z0(e, t, u) {
  return new Proxy(
    { props: e, exclude: t },
    B0
  );
}
const P0 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return O(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, u) {
    return t in e.special || (e.special[t] = gt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      To
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
function Te(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: tu(0) }, P0);
}
const U0 = {
  get(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (mu(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, u) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      mu(r) && (r = r());
      const i = Ft(r, t);
      if (i && i.set)
        return i.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (mu(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = Ft(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Ot || t === Co) return !1;
    for (let u of e.props)
      if (mu(u) && (u = u()), u != null && t in u) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let u of e.props) {
      mu(u) && (u = u());
      for (const n in u)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function We(...e) {
  return new Proxy({ props: e }, U0);
}
function Mi(e) {
  var t, u;
  return (u = (t = e.ctx) == null ? void 0 : t.d) != null ? u : !1;
}
function gt(e, t, u, n) {
  var C, A;
  var r = (u & Oc) !== 0, i = !cu || (u & Nc) !== 0, o = (u & Ic) !== 0, s = (u & Mc) !== 0, a = !1, c;
  o ? [c, a] = L0(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Ot in e || Co in e, f = o && ((A = (C = Ft(e, t)) == null ? void 0 : C.set) != null ? A : l && t in e && ((S) => e[t] = S)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, m = () => (d = !0, p && (p = !1, s ? h = Ht(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && Cc(), c = m(), f && f(c));
  var g;
  if (i)
    g = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? m() : (p = !0, d = !1, S);
    };
  else {
    var k = (r ? eu : Mr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= _c, g = () => {
      var S = O(k);
      return S !== void 0 && (h = /** @type {V} */
      void 0), S === void 0 ? h : S;
    };
  }
  if ((u & To) === 0)
    return g;
  if (f) {
    var E = e.$$legacy;
    return function(S, B) {
      return arguments.length > 0 ? ((!i || !B || E || a) && f(B ? g() : S), S) : g();
    };
  }
  var x = !1, _ = /* @__PURE__ */ Lr(c), y = /* @__PURE__ */ eu(() => {
    var S = g(), B = O(_);
    return x ? (x = !1, B) : _.v = S;
  });
  return o && O(y), r || (y.equals = Or), function(S, B) {
    if (arguments.length > 0) {
      const P = B ? O(y) : i && o ? Pt(S) : S;
      if (!y.equals(P)) {
        if (x = !0, se(_, P), d && h !== void 0 && (h = P), Mi(y))
          return S;
        Ht(() => O(y));
      }
      return S;
    }
    return Mi(y) ? y.v : O(y);
  };
}
function cs(e) {
  oe === null && Pc(), cu && oe.l !== null ? j0(oe).m.push(e) : uu(() => {
    const t = Ht(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function j0(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const q0 = "5";
var _o, xo, yo;
typeof window != "undefined" && ((yo = (xo = (_o = window.__svelte) != null ? _o : window.__svelte = {}).v) != null ? yo : xo.v = /* @__PURE__ */ new Set()).add(q0);
function ls(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: $0 } = Object.prototype, { getPrototypeOf: Hr } = Object, { iterator: Sn, toStringTag: fs } = Symbol, Tn = /* @__PURE__ */ ((e) => (t) => {
  const u = $0.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), nt = (e) => (e = e.toLowerCase(), (t) => Tn(t) === e), Fn = (e) => (t) => typeof t === e, { isArray: hu } = Array, Du = Fn("undefined");
function H0(e) {
  return e !== null && !Du(e) && e.constructor !== null && !Du(e.constructor) && Ie(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ds = nt("ArrayBuffer");
function W0(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ds(e.buffer), t;
}
const G0 = Fn("string"), Ie = Fn("function"), hs = Fn("number"), Rn = (e) => e !== null && typeof e == "object", V0 = (e) => e === !0 || e === !1, nn = (e) => {
  if (Tn(e) !== "object")
    return !1;
  const t = Hr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(fs in e) && !(Sn in e);
}, Z0 = nt("Date"), K0 = nt("File"), J0 = nt("Blob"), X0 = nt("FileList"), Y0 = (e) => Rn(e) && Ie(e.pipe), Q0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ie(e.append) && ((t = Tn(e)) === "formdata" || // detect form-data instance
  t === "object" && Ie(e.toString) && e.toString() === "[object FormData]"));
}, el = nt("URLSearchParams"), [tl, ul, nl, rl] = ["ReadableStream", "Request", "Response", "Headers"].map(nt), il = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Pu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), hu(e))
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
const Ut = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, bs = (e) => !Du(e) && e !== Ut;
function xr() {
  const { caseless: e } = bs(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && ps(t, r) || r;
    nn(t[i]) && nn(n) ? t[i] = xr(t[i], n) : nn(n) ? t[i] = xr({}, n) : hu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Pu(arguments[n], u);
  return t;
}
const ol = (e, t, u, { allOwnKeys: n } = {}) => (Pu(t, (r, i) => {
  u && Ie(r) ? e[i] = ls(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), sl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), al = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, cl = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && Hr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, ll = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, fl = (e) => {
  if (!e) return null;
  if (hu(e)) return e;
  let t = e.length;
  if (!hs(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, dl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Hr(Uint8Array)), hl = (e, t) => {
  const n = (e && e[Sn]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, pl = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, bl = nt("HTMLFormElement"), gl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), Li = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), ml = nt("RegExp"), gs = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  Pu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, _l = (e) => {
  gs(e, (t, u) => {
    if (Ie(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (Ie(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, xl = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return hu(e) ? n(e) : n(String(e).split(t)), u;
}, yl = () => {
}, vl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function El(e) {
  return !!(e && Ie(e.append) && e[fs] === "FormData" && e[Sn]);
}
const kl = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (Rn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = hu(n) ? [] : {};
        return Pu(n, (o, s) => {
          const a = u(o, r + 1);
          !Du(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, wl = nt("AsyncFunction"), Cl = (e) => e && (Rn(e) || Ie(e)) && Ie(e.then) && Ie(e.catch), ms = ((e, t) => e ? setImmediate : t ? ((u, n) => (Ut.addEventListener("message", ({ source: r, data: i }) => {
  r === Ut && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), Ut.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  Ie(Ut.postMessage)
), Al = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Ut) : typeof process != "undefined" && process.nextTick || ms, Dl = (e) => e != null && Ie(e[Sn]), v = {
  isArray: hu,
  isArrayBuffer: ds,
  isBuffer: H0,
  isFormData: Q0,
  isArrayBufferView: W0,
  isString: G0,
  isNumber: hs,
  isBoolean: V0,
  isObject: Rn,
  isPlainObject: nn,
  isReadableStream: tl,
  isRequest: ul,
  isResponse: nl,
  isHeaders: rl,
  isUndefined: Du,
  isDate: Z0,
  isFile: K0,
  isBlob: J0,
  isRegExp: ml,
  isFunction: Ie,
  isStream: Y0,
  isURLSearchParams: el,
  isTypedArray: dl,
  isFileList: X0,
  forEach: Pu,
  merge: xr,
  extend: ol,
  trim: il,
  stripBOM: sl,
  inherits: al,
  toFlatObject: cl,
  kindOf: Tn,
  kindOfTest: nt,
  endsWith: ll,
  toArray: fl,
  forEachEntry: hl,
  matchAll: pl,
  isHTMLForm: bl,
  hasOwnProperty: Li,
  hasOwnProp: Li,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: gs,
  freezeMethods: _l,
  toObjectSet: xl,
  toCamelCase: gl,
  noop: yl,
  toFiniteNumber: vl,
  findKey: ps,
  global: Ut,
  isContextDefined: bs,
  isSpecCompliantForm: El,
  toJSONObject: kl,
  isAsyncFn: wl,
  isThenable: Cl,
  setImmediate: ms,
  asap: Al,
  isIterable: Dl
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
const Sl = null;
function yr(e) {
  return v.isPlainObject(e) || v.isArray(e);
}
function ys(e) {
  return v.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Bi(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = ys(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function Tl(e) {
  return v.isArray(e) && !e.some(yr);
}
const Fl = v.toFlatObject(v, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function On(e, t, u) {
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
      else if (v.isArray(d) && Tl(d) || (v.isFileList(d) || v.endsWith(m, "[]")) && (k = v.toArray(d)))
        return m = ys(m), k.forEach(function(x, _) {
          !(v.isUndefined(x) || x === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Bi([m], _, i) : o === null ? m : m + "[]",
            c(x)
          );
        }), !1;
    }
    return yr(d) ? !0 : (t.append(Bi(g, m, i), c(d)), !1);
  }
  const f = [], h = Object.assign(Fl, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: yr
  });
  function p(d, m) {
    if (!v.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + m.join("."));
      f.push(d), v.forEach(d, function(k, E) {
        (!(v.isUndefined(k) || k === null) && r.call(
          t,
          k,
          v.isString(E) ? E.trim() : E,
          m,
          h
        )) === !0 && p(k, m ? m.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!v.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function zi(e) {
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
function Wr(e, t) {
  this._pairs = [], e && On(e, this, t);
}
const vs = Wr.prototype;
vs.append = function(t, u) {
  this._pairs.push([t, u]);
};
vs.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, zi);
  } : zi;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function Rl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Es(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || Rl;
  v.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = v.isURLSearchParams(t) ? t.toString() : new Wr(t, u).toString(n), i) {
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
    v.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const ks = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Ol = typeof URLSearchParams != "undefined" ? URLSearchParams : Wr, Nl = typeof FormData != "undefined" ? FormData : null, Il = typeof Blob != "undefined" ? Blob : null, Ml = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Ol,
    FormData: Nl,
    Blob: Il
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Gr = typeof window != "undefined" && typeof document != "undefined", vr = typeof navigator == "object" && navigator || void 0, Ll = Gr && (!vr || ["ReactNative", "NativeScript", "NS"].indexOf(vr.product) < 0), Bl = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", zl = Gr && window.location.href || "http://localhost", Pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Gr,
  hasStandardBrowserEnv: Ll,
  hasStandardBrowserWebWorkerEnv: Bl,
  navigator: vr,
  origin: zl
}, Symbol.toStringTag, { value: "Module" })), ke = fe(fe({}, Pl), Ml);
function Ul(e, t) {
  return On(e, new ke.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return ke.isNode && v.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function jl(e) {
  return v.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ql(e) {
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
    return o = !o && v.isArray(r) ? r.length : o, a ? (v.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !v.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && v.isArray(r[o]) && (r[o] = ql(r[o])), !s);
  }
  if (v.isFormData(e) && v.isFunction(e.entries)) {
    const u = {};
    return v.forEachEntry(e, (n, r) => {
      t(jl(n), r, u, 0);
    }), u;
  }
  return null;
}
function $l(e, t, u) {
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
        return Ul(t, this.formSerializer).toString();
      if ((s = v.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return On(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), $l(t)) : t;
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
    FormData: ke.classes.FormData,
    Blob: ke.classes.Blob
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
const Hl = v.toObjectSet([
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
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && Hl[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, Ui = Symbol("internals");
function yu(e) {
  return e && String(e).trim().toLowerCase();
}
function rn(e) {
  return e === !1 || e == null ? e : v.isArray(e) ? e.map(rn) : String(e);
}
function Gl(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Vl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function Zl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function Kl(e, t) {
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
let Me = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = yu(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = v.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = rn(s));
    }
    const o = (s, a) => v.forEach(s, (c, l) => i(c, l, a));
    if (v.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (v.isString(t) && (t = t.trim()) && !Vl(t))
      o(Wl(t), u);
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
    if (t = yu(t), t) {
      const n = v.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return Gl(r);
        if (v.isFunction(u))
          return u.call(this, r, n);
        if (v.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = yu(t), t) {
      const n = v.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || tr(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = yu(o), o) {
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
        u[o] = rn(r), delete u[i];
        return;
      }
      const s = t ? Zl(i) : String(i).trim();
      s !== i && delete u[i], u[s] = rn(r), n[s] = !0;
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
    const n = (this[Ui] = this[Ui] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = yu(o);
      n[s] || (Kl(r, o), n[s] = !0);
    }
    return v.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Me.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
v.reduceDescriptors(Me.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
v.freezeMethods(Me);
function ur(e, t) {
  const u = this || Uu, n = t || u, r = Me.from(n.headers);
  let i = n.data;
  return v.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Cs(e) {
  return !!(e && e.__CANCEL__);
}
function pu(e, t, u) {
  q.call(this, e == null ? "canceled" : e, q.ERR_CANCELED, t, u), this.name = "CanceledError";
}
v.inherits(pu, q, {
  __CANCEL__: !0
});
function As(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new q(
    "Request failed with status code " + u.status,
    [q.ERR_BAD_REQUEST, q.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function Jl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Xl(e, t) {
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
function Yl(e, t) {
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
const pn = (e, t, u = 3) => {
  let n = 0;
  const r = Xl(50, 250);
  return Yl((i) => {
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
}, ji = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, qi = (e) => (...t) => v.asap(() => e(...t)), Ql = ke.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, ke.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(ke.origin),
  ke.navigator && /(msie|trident)/i.test(ke.navigator.userAgent)
) : () => !0, ef = ke.hasStandardBrowserEnv ? (
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
function tf(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function uf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ds(e, t, u) {
  let n = !tf(t);
  return e && (n || u == !1) ? uf(e, t) : t;
}
const $i = (e) => e instanceof Me ? fe({}, e) : e;
function Wt(e, t) {
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
    headers: (c, l, f) => r($i(c), $i(l), f, !0)
  };
  return v.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    v.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const Ss = (e) => {
  const t = Wt({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = Me.from(o), t.url = Es(Ds(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (v.isFormData(u)) {
    if (ke.hasStandardBrowserEnv || ke.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (ke.hasStandardBrowserEnv && (n && v.isFunction(n) && (n = n(t)), n || n !== !1 && Ql(t.url))) {
    const c = r && i && ef.read(i);
    c && o.set(r, c);
  }
  return t;
}, nf = typeof XMLHttpRequest != "undefined", rf = nf && function(e) {
  return new Promise(function(u, n) {
    const r = Ss(e);
    let i = r.data;
    const o = Me.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function m() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let g = new XMLHttpRequest();
    g.open(r.method.toUpperCase(), r.url, !0), g.timeout = r.timeout;
    function k() {
      if (!g)
        return;
      const x = Me.from(
        "getAllResponseHeaders" in g && g.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? g.responseText : g.response,
        status: g.status,
        statusText: g.statusText,
        headers: x,
        config: e,
        request: g
      };
      As(function(A) {
        u(A), m();
      }, function(A) {
        n(A), m();
      }, y), g = null;
    }
    "onloadend" in g ? g.onloadend = k : g.onreadystatechange = function() {
      !g || g.readyState !== 4 || g.status === 0 && !(g.responseURL && g.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, g.onabort = function() {
      g && (n(new q("Request aborted", q.ECONNABORTED, e, g)), g = null);
    }, g.onerror = function() {
      n(new q("Network Error", q.ERR_NETWORK, e, g)), g = null;
    }, g.ontimeout = function() {
      let _ = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const y = r.transitional || ks;
      r.timeoutErrorMessage && (_ = r.timeoutErrorMessage), n(new q(
        _,
        y.clarifyTimeoutError ? q.ETIMEDOUT : q.ECONNABORTED,
        e,
        g
      )), g = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in g && v.forEach(o.toJSON(), function(_, y) {
      g.setRequestHeader(y, _);
    }), v.isUndefined(r.withCredentials) || (g.withCredentials = !!r.withCredentials), s && s !== "json" && (g.responseType = r.responseType), c && ([h, d] = pn(c, !0), g.addEventListener("progress", h)), a && g.upload && ([f, p] = pn(a), g.upload.addEventListener("progress", f), g.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (x) => {
      g && (n(!x || x.type ? new pu(null, e, g) : x), g.abort(), g = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const E = Jl(r.url);
    if (E && ke.protocols.indexOf(E) === -1) {
      n(new q("Unsupported protocol " + E + ":", q.ERR_BAD_REQUEST, e));
      return;
    }
    g.send(i || null);
  });
}, of = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof q ? l : new pu(l instanceof Error ? l.message : l));
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
}, sf = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, af = function(e, t) {
  return Vn(this, null, function* () {
    try {
      for (var u = _i(cf(e)), n, r, i; n = !(r = yield new zt(u.next())).done; n = !1) {
        const o = r.value;
        yield* Zn(sf(o, t));
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
}, cf = function(e) {
  return Vn(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* Zn(e);
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
}, Hi = (e, t, u, n) => {
  const r = af(e, t);
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
}, Nn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Ts = Nn && typeof ReadableStream == "function", lf = Nn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => ge(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), Fs = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, ff = Ts && Fs(() => {
  let e = !1;
  const t = new Request(ke.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Wi = 64 * 1024, Er = Ts && Fs(() => v.isReadableStream(new Response("").body)), bn = {
  stream: Er && ((e) => e.body)
};
Nn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !bn[t] && (bn[t] = v.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new q(`Response type '${t}' is not supported`, q.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const df = (e) => ge(null, null, function* () {
  if (e == null)
    return 0;
  if (v.isBlob(e))
    return e.size;
  if (v.isSpecCompliantForm(e))
    return (yield new Request(ke.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (v.isArrayBufferView(e) || v.isArrayBuffer(e))
    return e.byteLength;
  if (v.isURLSearchParams(e) && (e = e + ""), v.isString(e))
    return (yield lf(e)).byteLength;
}), hf = (e, t) => ge(null, null, function* () {
  const u = v.toFiniteNumber(e.getContentLength());
  return u == null ? df(t) : u;
}), pf = Nn && ((e) => ge(null, null, function* () {
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
  } = Ss(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = of([r, i && i.toAbortSignal()], o), d;
  const m = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let g;
  try {
    if (a && ff && u !== "get" && u !== "head" && (g = yield hf(l, n)) !== 0) {
      let y = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), C;
      if (v.isFormData(n) && (C = y.headers.get("content-type")) && l.setContentType(C), y.body) {
        const [A, S] = ji(
          g,
          pn(qi(a))
        );
        n = Hi(y.body, Wi, A, S);
      }
    }
    v.isString(f) || (f = f ? "include" : "omit");
    const k = "credentials" in Request.prototype;
    d = new Request(t, Ee(fe({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: k ? f : void 0
    }));
    let E = yield fetch(d);
    const x = Er && (c === "stream" || c === "response");
    if (Er && (s || x && m)) {
      const y = {};
      ["status", "statusText", "headers"].forEach((B) => {
        y[B] = E[B];
      });
      const C = v.toFiniteNumber(E.headers.get("content-length")), [A, S] = s && ji(
        C,
        pn(qi(s), !0)
      ) || [];
      E = new Response(
        Hi(E.body, Wi, A, () => {
          S && S(), m && m();
        }),
        y
      );
    }
    c = c || "text";
    let _ = yield bn[v.findKey(bn, c) || "text"](E, e);
    return !x && m && m(), yield new Promise((y, C) => {
      As(y, C, {
        data: _,
        headers: Me.from(E.headers),
        status: E.status,
        statusText: E.statusText,
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
  http: Sl,
  xhr: rf,
  fetch: pf
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
const Gi = (e) => `- ${e}`, bf = (e) => v.isFunction(e) || e === null || e === !1, Rs = {
  getAdapter: (e) => {
    e = v.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !bf(u) && (n = kr[(o = String(u)).toLowerCase()], n === void 0))
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
` + i.map(Gi).join(`
`) : " " + Gi(i[0]) : "as no adapter specified";
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
    throw new pu(null, e);
}
function Vi(e) {
  return nr(e), e.headers = Me.from(e.headers), e.data = ur.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Rs.getAdapter(e.adapter || Uu.adapter)(e).then(function(n) {
    return nr(e), n.data = ur.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Me.from(n.headers), n;
  }, function(n) {
    return Cs(n) || (nr(e), n && n.response && (n.response.data = ur.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Me.from(n.response.headers))), Promise.reject(n);
  });
}
const Os = "1.9.0", In = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  In[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Zi = {};
In.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + Os + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new q(
        r(o, " has been removed" + (u ? " in " + u : "")),
        q.ERR_DEPRECATED
      );
    return u && !Zi[o] && (Zi[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
In.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function gf(e, t, u) {
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
const on = {
  assertOptions: gf,
  validators: In
}, at = on.validators;
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
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = Wt(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: i } = u;
    n !== void 0 && on.assertOptions(n, {
      silentJSONParsing: at.transitional(at.boolean),
      forcedJSONParsing: at.transitional(at.boolean),
      clarifyTimeoutError: at.transitional(at.boolean)
    }, !1), r != null && (v.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : on.assertOptions(r, {
      encode: at.function,
      serialize: at.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), on.assertOptions(u, {
      baseUrl: at.spelling("baseURL"),
      withXsrfToken: at.spelling("withXSRFToken")
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
    ), u.headers = Me.concat(o, i);
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
      const d = [Vi.bind(this), void 0];
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
      l = Vi.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Wt(this.defaults, t);
    const u = Ds(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Es(u, t.params, t.paramsSerializer);
  }
};
v.forEach(["delete", "get", "head", "options"], function(t) {
  qt.prototype[t] = function(u, n) {
    return this.request(Wt(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
v.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(i, o, s) {
      return this.request(Wt(s || {}, {
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
let mf = class Ns {
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
      n.reason || (n.reason = new pu(i, o, s), u(n.reason));
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
      token: new Ns(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function _f(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function xf(e) {
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
  const t = new qt(e), u = ls(qt.prototype.request, t);
  return v.extend(u, qt.prototype, t, { allOwnKeys: !0 }), v.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return Is(Wt(e, r));
  }, u;
}
const ae = Is(Uu);
ae.Axios = qt;
ae.CanceledError = pu;
ae.CancelToken = mf;
ae.isCancel = Cs;
ae.VERSION = Os;
ae.toFormData = On;
ae.AxiosError = q;
ae.Cancel = ae.CanceledError;
ae.all = function(t) {
  return Promise.all(t);
};
ae.spread = _f;
ae.isAxiosError = xf;
ae.mergeConfig = Wt;
ae.AxiosHeaders = Me;
ae.formToJSON = (e) => ws(v.isHTMLForm(e) ? new FormData(e) : e);
ae.getAdapter = Rs.getAdapter;
ae.HttpStatusCode = wr;
ae.default = ae;
const {
  Axios: wp,
  AxiosError: Cp,
  CanceledError: Ap,
  isCancel: Dp,
  CancelToken: Sp,
  VERSION: Tp,
  all: Fp,
  Cancel: Rp,
  isAxiosError: Op,
  spread: Np,
  toFormData: Ip,
  AxiosHeaders: Mp,
  HttpStatusCode: Lp,
  formToJSON: Bp,
  getAdapter: zp,
  mergeConfig: Pp
} = ae, yf = ae.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), vf = ae.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), Ef = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null,
  hasMore: !0,
  currentPage: 1
}, Je = ss(Ef);
N0(
  Je,
  (e) => e.messages.map((t) => Ee(fe({}, t), {
    message: t.message
  }))
);
const kf = (e, t) => ge(null, null, function* () {
  var o;
  const u = localStorage.getItem("userId"), n = t.bot_id;
  if (!u || !n)
    throw new Error("User ID and Bot ID are required");
  const r = as(Je);
  let i = "";
  Je.update((s) => Ee(fe({}, s), {
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
`), E = d || "message";
      if (E === "message")
        k && k.length > 0 && (i += k, Je.update((x) => Ee(fe({}, x), {
          messages: x.messages.map((_) => _.id === "streaming" ? Ee(fe({}, _), { message: i }) : _)
        })));
      else if (E === "conversation_id") {
        const x = k.trim();
        localStorage.setItem("currentChatId", x), Je.update((_) => Ee(fe({}, _), {
          currentChatId: x,
          messages: _.messages.map((y) => y.chatId ? y : Ee(fe({}, y), { chatId: x }))
        }));
      }
      d = "", m = [];
    };
    for (; ; ) {
      const { value: k, done: E } = yield f.read();
      if (E) break;
      p += h.decode(k, { stream: !0 });
      const x = p.split(/\r?\n/);
      p = (o = x.pop()) != null ? o : "";
      for (const _ of x)
        _.startsWith("event:") ? (g(), d = _.slice(6).trim()) : _.startsWith("data:") ? m.push(_.slice(5)) : _.trim() === "" && g();
    }
    if (p.length > 0) {
      const k = p.trimEnd();
      if (k) {
        const E = k.split(/\r?\n/);
        for (const x of E)
          x.startsWith("event:") ? (g(), d = x.slice(6).trim()) : x.startsWith("data:") && m.push(x.slice(5));
      }
    }
    g(), Je.update((k) => {
      if (!k.messages.some((_) => _.id === "streaming"))
        return Ee(fe({}, k), { isLoading: !1 });
      const x = {
        id: Date.now().toString(),
        chatId: k.currentChatId || "",
        role: "ai",
        message: i,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      };
      return Ee(fe({}, k), {
        messages: k.messages.map((_) => _.id === "streaming" ? x : _),
        isLoading: !1
      });
    });
  } catch (s) {
    throw console.error("Error sending message:", s), Je.update((a) => Ee(fe({}, a), {
      isLoading: !1
    })), s;
  }
}), Ms = (e, t = 1, u = 10) => ge(null, null, function* () {
  var n, r, i, o, s, a, c, l;
  try {
    const f = yield vf.get(`/chat/${e}/messages`, {
      params: {
        page: t,
        page_size: u
      }
    }), p = (((n = f.data) == null ? void 0 : n.messages) || []).map((g, k) => {
      var E, x, _, y, C;
      return {
        id: ((E = g.id) != null ? E : `${Date.now()}-${k}`).toString(),
        chatId: e,
        role: ((x = g.role) != null ? x : g.type) === "human" ? "human" : "ai",
        message: (y = (_ = g.message) != null ? _ : g.content) != null ? y : "",
        created_at: (C = g.created_at) != null ? C : (/* @__PURE__ */ new Date()).toISOString()
      };
    }).sort((g, k) => {
      const E = new Date(g.created_at).getTime(), x = new Date(k.created_at).getTime();
      return E - x;
    }), d = (a = (r = f.data) == null ? void 0 : r.total) != null ? a : (s = (o = (i = f.data) == null ? void 0 : i.pagination) == null ? void 0 : o.total) != null ? s : 0, m = (l = (c = f.data) == null ? void 0 : c.has_next) != null ? l : d ? t * u < d : !1;
    Je.update((g) => Ee(fe({}, g), {
      messages: t === 1 ? p : [...p, ...g.messages],
      hasMore: !!m,
      currentPage: t,
      currentChatId: e
    })), localStorage.setItem("currentChatId", e);
  } catch (f) {
    console.error("Error loading chat history:", f), Je.update((h) => Ee(fe({}, h), {
      error: "Failed to load chat history"
    }));
  }
});
Tc();
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
const wf = {
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
var Cf = /* @__PURE__ */ b0("<svg><!><!></svg>");
function Ge(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = Te(u, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  lu(t, !1);
  let r = gt(t, "name", 8, void 0), i = gt(t, "color", 8, "currentColor"), o = gt(t, "size", 8, 24), s = gt(t, "strokeWidth", 8, 2), a = gt(t, "absoluteStrokeWidth", 8, !1), c = gt(t, "iconNode", 24, () => []);
  const l = (...m) => m.filter((g, k, E) => !!g && E.indexOf(g) === k).join(" ");
  R0();
  var f = Cf();
  let h;
  var p = ie(f);
  es(p, 1, c, _0, (m, g) => {
    let k = () => O(g)[0], E = () => O(g)[1];
    var x = Ae(), _ = Ce(x);
    w0(_, k, !0, (y, C) => {
      let A;
      qe(() => A = Ri(y, A, fe({}, E())));
    }), K(m, x);
  });
  var d = Qe(p);
  ze(d, t, "default", {}), qe(
    (m, g) => h = Ri(f, h, Ee(fe(fe({}, wf), n), {
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
  ), K(e, f), fu();
}
function Ls(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "circle-help" }, () => u, {
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Bs(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "file-text" }, () => u, {
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function zs(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "info" }, () => u, {
    iconNode: [
      [
        "circle",
        { cx: "12", cy: "12", r: "10" }
      ],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }]
    ],
    children: (r, i) => {
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ps(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "life-buoy" }, () => u, {
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Af(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Us(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "menu" }, () => u, {
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function js(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Df(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "message-square-x" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ],
      ["path", { d: "m14.5 7.5-5 5" }],
      ["path", { d: "m9.5 7.5 5 5" }]
    ],
    children: (r, i) => {
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function gn(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Sf(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function qs(e, t) {
  const u = Te(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ge(e, We({ name: "monitor" }, () => u, {
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Tf(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ff(e, t) {
  const u = Te(t, [
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
      var o = Ae(), s = Ce(o);
      ze(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const Ki = {};
function Rf(e) {
  let t = Ki[e];
  if (t)
    return t;
  t = Ki[e] = [];
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
function ou(e, t) {
  typeof t != "string" && (t = ou.defaultChars);
  const u = Rf(t);
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
ou.defaultChars = ";/?:@&=+$,#";
ou.componentChars = "";
const Ji = {};
function Of(e) {
  let t = Ji[e];
  if (t)
    return t;
  t = Ji[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function ju(e, t, u) {
  typeof t != "string" && (u = t, t = ju.defaultChars), typeof u == "undefined" && (u = !0);
  const n = Of(t);
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
ju.defaultChars = ";/?:@&=+$,-_.!~*'()#";
ju.componentChars = "-_.!~*'()";
function Vr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function mn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Nf = /^([a-z0-9.+-]+:)/i, If = /:[0-9]*$/, Mf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Lf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Bf = ["{", "}", "|", "\\", "^", "`"].concat(Lf), zf = ["'"].concat(Bf), Xi = ["%", "/", "?", ";", "#"].concat(zf), Yi = ["/", "?", "#"], Pf = 255, Qi = /^[+a-z0-9A-Z_-]{0,63}$/, Uf = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, eo = {
  javascript: !0,
  "javascript:": !0
}, to = {
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
  if (e && e instanceof mn) return e;
  const u = new mn();
  return u.parse(e, t), u;
}
mn.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Mf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Nf.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && eo[o]) && (i = i.substr(2), this.slashes = !0)), !eo[o] && (r || o && !to[o])) {
    let c = -1;
    for (let d = 0; d < Yi.length; d++)
      n = i.indexOf(Yi[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < Xi.length; d++)
      n = i.indexOf(Xi[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let m = 0, g = d.length; m < g; m++) {
        const k = d[m];
        if (k && !k.match(Qi)) {
          let E = "";
          for (let x = 0, _ = k.length; x < _; x++)
            k.charCodeAt(x) > 127 ? E += "x" : E += k[x];
          if (!E.match(Qi)) {
            const x = d.slice(0, m), _ = d.slice(m + 1), y = k.match(Uf);
            y && (x.push(y[1]), _.unshift(y[2])), _.length && (i = _.join(".") + i), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Pf && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = i.indexOf("#");
  s !== -1 && (this.hash = i.substr(s), i = i.slice(0, s));
  const a = i.indexOf("?");
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), to[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
mn.prototype.parseHost = function(e) {
  let t = If.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const jf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: ou,
  encode: ju,
  format: Vr,
  parse: Zr
}, Symbol.toStringTag, { value: "Module" })), $s = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Hs = /[\0-\x1F\x7F-\x9F]/, qf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Kr = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Ws = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Gs = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, $f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: $s,
  Cc: Hs,
  Cf: qf,
  P: Kr,
  S: Ws,
  Z: Gs
}, Symbol.toStringTag, { value: "Module" })), Hf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Wf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var rr;
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
]), Vf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (rr = String.fromCodePoint) !== null && rr !== void 0 ? rr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Zf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Gf.get(e)) !== null && t !== void 0 ? t : e;
}
var _e;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(_e || (_e = {}));
const Kf = 32;
var Tt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(Tt || (Tt = {}));
function Cr(e) {
  return e >= _e.ZERO && e <= _e.NINE;
}
function Jf(e) {
  return e >= _e.UPPER_A && e <= _e.UPPER_F || e >= _e.LOWER_A && e <= _e.LOWER_F;
}
function Xf(e) {
  return e >= _e.UPPER_A && e <= _e.UPPER_Z || e >= _e.LOWER_A && e <= _e.LOWER_Z || Cr(e);
}
function Yf(e) {
  return e === _e.EQUALS || Xf(e);
}
var me;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(me || (me = {}));
var Dt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Dt || (Dt = {}));
class Qf {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = me.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Dt.Strict;
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | Kf) === _e.LOWER_X ? (this.state = me.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = me.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (Cr(r) || Jf(r))
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
      if (Cr(r))
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
    else if (this.decodeMode === Dt.Strict)
      return 0;
    return this.emitCodePoint(Zf(this.result), this.consumed), this.errors && (t !== _e.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
      if (this.treeIndex = ed(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Dt.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        Yf(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & Tt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === _e.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== Dt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
        return this.result !== 0 && (this.decodeMode !== Dt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
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
function Vs(e) {
  let t = "";
  const u = new Qf(e, (n) => t += Vf(n));
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
function ed(e, t, u, n) {
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
const td = Vs(Hf);
Vs(Wf);
function Zs(e, t = Dt.Legacy) {
  return td(e, t);
}
function ud(e) {
  return Object.prototype.toString.call(e);
}
function Jr(e) {
  return ud(e) === "[object String]";
}
const nd = Object.prototype.hasOwnProperty;
function rd(e, t) {
  return nd.call(e, t);
}
function Mn(e) {
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
function Ks(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function Xr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function _n(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const Js = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, id = /&([a-z#][a-z0-9]{1,31});/gi, od = new RegExp(Js.source + "|" + id.source, "gi"), sd = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function ad(e, t) {
  if (t.charCodeAt(0) === 35 && sd.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return Xr(n) ? _n(n) : e;
  }
  const u = Zs(e);
  return u !== e ? u : e;
}
function cd(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(Js, "$1");
}
function su(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(od, function(t, u, n) {
    return u || ad(t, n);
  });
}
const ld = /[&<>"]/, fd = /[&<>"]/g, dd = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function hd(e) {
  return dd[e];
}
function It(e) {
  return ld.test(e) ? e.replace(fd, hd) : e;
}
const pd = /[.?*+^$[\]\\(){}|-]/g;
function bd(e) {
  return e.replace(pd, "\\$&");
}
function ue(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function Su(e) {
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
  return Kr.test(e) || Ws.test(e);
}
function Fu(e) {
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
function Ln(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const gd = { mdurl: jf, ucmicro: $f }, md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Ks,
  assign: Mn,
  escapeHtml: It,
  escapeRE: bd,
  fromCodePoint: _n,
  has: rd,
  isMdAsciiPunct: Fu,
  isPunctChar: Tu,
  isSpace: ue,
  isString: Jr,
  isValidEntityCode: Xr,
  isWhiteSpace: Su,
  lib: gd,
  normalizeReference: Ln,
  unescapeAll: su,
  unescapeMd: cd
}, Symbol.toStringTag, { value: "Module" }));
function _d(e, t, u) {
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
function xd(e, t, u) {
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
        return i.pos = r + 1, i.str = su(e.slice(t + 1, r)), i.ok = !0, i;
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
  return t === r || o !== 0 || (i.str = su(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function yd(e, t, u, n) {
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
      return o.pos = i + 1, o.str += su(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < u && i++, i++;
  }
  return o.can_continue = !0, o.str += su(e.slice(t, i)), o;
}
const vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: xd,
  parseLinkLabel: _d,
  parseLinkTitle: yd
}, Symbol.toStringTag, { value: "Module" })), ht = {};
ht.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + It(i.content) + "</code>";
};
ht.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + It(e[t].content) + `</code></pre>
`;
};
ht.fence = function(e, t, u, n, r) {
  const i = e[t], o = i.info ? su(i.info).trim() : "";
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
ht.image = function(e, t, u, n, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, u, n), r.renderToken(e, t, u);
};
ht.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
ht.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
ht.text = function(e, t) {
  return It(e[t].content);
};
ht.html_block = function(e, t) {
  return e[t].content;
};
ht.html_inline = function(e, t) {
  return e[t].content;
};
function bu() {
  this.rules = Mn({}, ht);
}
bu.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + It(t.attrs[u][0]) + '="' + It(t.attrs[u][1]) + '"';
  return r;
};
bu.prototype.renderToken = function(t, u, n) {
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
bu.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t);
  }
  return n;
};
bu.prototype.renderInlineAsText = function(e, t, u) {
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
bu.prototype.render = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    s === "inline" ? n += this.renderInline(e[i].children, t, u) : typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t, u);
  }
  return n;
};
function Be() {
  this.__rules__ = [], this.__cache__ = null;
}
Be.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Be.prototype.__compile__ = function() {
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
Be.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
Be.prototype.before = function(e, t, u, n) {
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
Be.prototype.after = function(e, t, u, n) {
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
Be.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Be.prototype.enable = function(e, t) {
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
Be.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Be.prototype.disable = function(e, t) {
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
Be.prototype.getRules = function(e) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[e] || [];
};
function rt(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
rt.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
rt.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
rt.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
rt.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
rt.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function Xs(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
Xs.prototype.Token = rt;
const Ed = /\r\n?|\n/g, kd = /\0/g;
function wd(e) {
  let t;
  t = e.src.replace(Ed, `
`), t = t.replace(kd, "�"), e.src = t;
}
function Cd(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Ad(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Dd(e) {
  return /^<a[>\s]/i.test(e);
}
function Sd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Td(e) {
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
        if (s.type === "html_inline" && (Dd(s.content) && i > 0 && i--, Sd(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
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
              const y = new e.Token("text", "", 0);
              y.content = a.slice(h, k), y.level = f, l.push(y);
            }
            const E = new e.Token("link_open", "a", 1);
            E.attrs = [["href", m]], E.level = f++, E.markup = "linkify", E.info = "auto", l.push(E);
            const x = new e.Token("text", "", 0);
            x.content = g, x.level = f, l.push(x);
            const _ = new e.Token("link_close", "a", -1);
            _.level = --f, _.markup = "linkify", _.info = "auto", l.push(_), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[u].children = r = Ks(r, o, l);
        }
      }
    }
}
const Ys = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Fd = /\((c|tm|r)\)/i, Rd = /\((c|tm|r)\)/ig, Od = {
  c: "©",
  r: "®",
  tm: "™"
};
function Nd(e, t) {
  return Od[t.toLowerCase()];
}
function Id(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Rd, Nd)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Md(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && Ys.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Ld(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Fd.test(e.tokens[t].content) && Id(e.tokens[t].children), Ys.test(e.tokens[t].content) && Md(e.tokens[t].children));
}
const Bd = /['"]/, uo = /['"]/g, no = "’";
function Qu(e, t, u) {
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
        uo.lastIndex = a;
        const l = uo.exec(s);
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
        const g = Fu(d) || Tu(String.fromCharCode(d)), k = Fu(m) || Tu(String.fromCharCode(m)), E = Su(d), x = Su(m);
        if (x ? f = !1 : k && (E || g || (f = !1)), E ? h = !1 : g && (x || k || (h = !1)), m === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = g, h = k), !f && !h) {
          p && (i.content = Qu(i.content, l.index, no));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let _ = n[u];
            if (n[u].level < o)
              break;
            if (_.single === p && n[u].level === o) {
              _ = n[u];
              let y, C;
              p ? (y = t.md.options.quotes[2], C = t.md.options.quotes[3]) : (y = t.md.options.quotes[0], C = t.md.options.quotes[1]), i.content = Qu(i.content, l.index, C), e[_.token].content = Qu(
                e[_.token].content,
                _.pos,
                y
              ), a += C.length - 1, _.token === r && (a += y.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = Qu(i.content, l.index, no));
      }
  }
}
function Pd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !Bd.test(e.tokens[t].content) || zd(e.tokens[t].children, e);
}
function Ud(e) {
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
  ["normalize", wd],
  ["block", Cd],
  ["inline", Ad],
  ["linkify", Td],
  ["replacements", Ld],
  ["smartquotes", Pd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", Ud]
];
function Yr() {
  this.ruler = new Be();
  for (let e = 0; e < ir.length; e++)
    this.ruler.push(ir[e][0], ir[e][1]);
}
Yr.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
Yr.prototype.State = Xs;
function pt(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (ue(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
pt.prototype.push = function(e, t, u) {
  const n = new rt(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
pt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
pt.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
pt.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!ue(n))
      break;
  }
  return t;
};
pt.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!ue(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
pt.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
pt.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
pt.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const i = new Array(u - t);
  for (let o = 0, s = t; s < u; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < u || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < n; ) {
      const h = this.src.charCodeAt(l);
      if (ue(h))
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
pt.prototype.Token = rt;
const jd = 65536;
function or(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function ro(e) {
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
  if (s !== 124 && s !== 45 && s !== 58 && !ue(s) || o === 45 && ue(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const _ = e.src.charCodeAt(i);
    if (_ !== 124 && _ !== 45 && _ !== 58 && !ue(_))
      return !1;
    i++;
  }
  let a = or(e, t + 1), c = a.split("|");
  const l = [];
  for (let _ = 0; _ < c.length; _++) {
    const y = c[_].trim();
    if (!y) {
      if (_ === 0 || _ === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(y))
      return !1;
    y.charCodeAt(y.length - 1) === 58 ? l.push(y.charCodeAt(0) === 58 ? "center" : "right") : y.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = or(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = ro(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
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
    const y = e.push("th_open", "th", 1);
    l[_] && (y.attrs = [["style", "text-align:" + l[_]]]);
    const C = e.push("inline", "", 0);
    C.content = c[_].trim(), C.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let E, x = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let _ = !1;
    for (let C = 0, A = p.length; C < A; C++)
      if (p[C](e, r, u, !0)) {
        _ = !0;
        break;
      }
    if (_ || (a = or(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = ro(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), x += f - c.length, x > jd))
      break;
    if (r === t + 2) {
      const C = e.push("tbody_open", "tbody", 1);
      C.map = E = [t + 2, 0];
    }
    const y = e.push("tr_open", "tr", 1);
    y.map = [r, r + 1];
    for (let C = 0; C < f; C++) {
      const A = e.push("td_open", "td", 1);
      l[C] && (A.attrs = [["style", "text-align:" + l[C]]]);
      const S = e.push("inline", "", 0);
      S.content = c[C] ? c[C].trim() : "", S.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return E && (e.push("tbody_close", "tbody", -1), E[1] = r), e.push("table_close", "table", -1), m[1] = r, e.parentType = h, e.line = r, !0;
}
function $d(e, t, u) {
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
function Hd(e, t, u, n) {
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
function Wd(e, t, u, n) {
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
      let y = e.sCount[d] + 1, C, A;
      e.src.charCodeAt(r) === 32 ? (r++, y++, A = !1, C = !0) : e.src.charCodeAt(r) === 9 ? (C = !0, (e.bsCount[d] + y) % 4 === 3 ? (r++, y++, A = !1) : A = !0) : C = !1;
      let S = y;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const B = e.src.charCodeAt(r);
        if (ue(B))
          B === 9 ? S += 4 - (S + e.bsCount[d] + (A ? 1 : 0)) % 4 : S++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (C ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = S - y, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let _ = !1;
    for (let y = 0, C = f.length; y < C; y++)
      if (f[y](e, d, u, !0)) {
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
  const E = e.push("blockquote_close", "blockquote", -1);
  E.markup = ">", e.lineMax = o, e.parentType = h, k[1] = e.line;
  for (let x = 0; x < l.length; x++)
    e.bMarks[x + t] = s[x], e.tShift[x + t] = l[x], e.sCount[x + t] = c[x], e.bsCount[x + t] = a[x];
  return e.blkIndent = m, !0;
}
function Gd(e, t, u, n) {
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
    if (c !== o && !ue(c))
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
function io(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!ue(i))
      return -1;
  }
  return n;
}
function oo(e, t) {
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
  return r < n && (i = e.src.charCodeAt(r), !ue(i)) ? -1 : r;
}
function Vd(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Zd(e, t, u, n) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = oo(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = io(e, a)) >= 0)
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
  const E = e.md.block.ruler.getRules("list"), x = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const _ = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let y = _;
    for (; i < r; ) {
      const G = e.src.charCodeAt(i);
      if (G === 9)
        y += 4 - (y + e.bsCount[a]) % 4;
      else if (G === 32)
        y++;
      else
        break;
      i++;
    }
    const C = i;
    let A;
    C >= r ? A = 1 : A = y - _, A > 4 && (A = 1);
    const S = _ + A;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const B = [a, 0];
    s.map = B, f && (s.info = e.src.slice(o, p - 1));
    const P = e.tight, $ = e.tShift[a], ne = e.sCount[a], re = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = S, e.tight = !0, e.tShift[a] = C - e.bMarks[a], e.sCount[a] = y, C >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || k) && (c = !1), k = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = re, e.tShift[a] = $, e.sCount[a] = ne, e.tight = P, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, B[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let Y = !1;
    for (let G = 0, I = E.length; G < I; G++)
      if (E[G](e, a, u, !0)) {
        Y = !0;
        break;
      }
    if (Y)
      break;
    if (f) {
      if (p = oo(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = io(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), g[1] = a, e.line = a, e.parentType = x, c && Vd(e, m), !0;
}
function Kd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(E) {
    const x = e.lineMax;
    if (E >= x || e.isEmpty(E))
      return null;
    let _ = !1;
    if (e.sCount[E] - e.blkIndent > 3 && (_ = !0), e.sCount[E] < 0 && (_ = !0), !_) {
      const A = e.md.block.ruler.getRules("reference"), S = e.parentType;
      e.parentType = "reference";
      let B = !1;
      for (let P = 0, $ = A.length; P < $; P++)
        if (A[P](e, E, x, !0)) {
          B = !0;
          break;
        }
      if (e.parentType = S, B)
        return null;
    }
    const y = e.bMarks[E] + e.tShift[E], C = e.eMarks[E];
    return e.src.slice(y, C + 1);
  }
  let a = e.src.slice(r, i + 1);
  i = a.length;
  let c = -1;
  for (r = 1; r < i; r++) {
    const E = a.charCodeAt(r);
    if (E === 91)
      return !1;
    if (E === 93) {
      c = r;
      break;
    } else if (E === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (E === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const E = a.charCodeAt(r);
    if (E === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (!ue(E)) break;
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
    const E = a.charCodeAt(r);
    if (E === 10) {
      const x = s(o);
      x !== null && (a += x, i = a.length, o++);
    } else if (!ue(E)) break;
  }
  let m = e.md.helpers.parseLinkTitle(a, r, i);
  for (; m.can_continue; ) {
    const E = s(o);
    if (E === null) break;
    a += E, r = i, i = a.length, o++, m = e.md.helpers.parseLinkTitle(a, r, i, m);
  }
  let g;
  for (r < i && d !== r && m.ok ? (g = m.str, r = m.pos) : (g = "", r = h, o = p); r < i; ) {
    const E = a.charCodeAt(r);
    if (!ue(E))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && g)
    for (g = "", r = h, o = p; r < i; ) {
      const E = a.charCodeAt(r);
      if (!ue(E))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const k = Ln(a.slice(1, c));
  return k ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[k] == "undefined" && (e.env.references[k] = { title: g, href: f }), e.line = o), !0) : !1;
}
const Jd = [
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
], Xd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Yd = "[^\"'=<>`\\x00-\\x20]+", Qd = "'[^']*'", e1 = '"[^"]*"', t1 = "(?:" + Yd + "|" + Qd + "|" + e1 + ")", u1 = "(?:\\s+" + Xd + "(?:\\s*=\\s*" + t1 + ")?)", Qs = "<[A-Za-z][A-Za-z0-9\\-]*" + u1 + "*\\s*\\/?>", ea = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", n1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", r1 = "<[?][\\s\\S]*?[?]>", i1 = "<![A-Za-z][^>]*>", o1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", s1 = new RegExp("^(?:" + Qs + "|" + ea + "|" + n1 + "|" + r1 + "|" + i1 + "|" + o1 + ")"), a1 = new RegExp("^(?:" + Qs + "|" + ea + ")"), Yt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Jd.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(a1.source + "\\s*$"), /^$/, !1]
];
function c1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), s = 0;
  for (; s < Yt.length && !Yt[s][0].test(o); s++)
    ;
  if (s === Yt.length)
    return !1;
  if (n)
    return Yt[s][2];
  let a = t + 1;
  if (!Yt[s][1].test(o)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), Yt[s][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function l1(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !ue(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && ue(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function f1(e, t, u) {
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
function d1(e, t, u) {
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
const en = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", qd, ["paragraph", "reference"]],
  ["code", $d],
  ["fence", Hd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Wd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Gd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Zd, ["paragraph", "reference", "blockquote"]],
  ["reference", Kd],
  ["html_block", c1, ["paragraph", "reference", "blockquote"]],
  ["heading", l1, ["paragraph", "reference", "blockquote"]],
  ["lheading", f1],
  ["paragraph", d1]
];
function Bn() {
  this.ruler = new Be();
  for (let e = 0; e < en.length; e++)
    this.ruler.push(en[e][0], en[e][1], { alt: (en[e][2] || []).slice() });
}
Bn.prototype.tokenize = function(e, t, u) {
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
Bn.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
Bn.prototype.State = pt;
function qu(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
qu.prototype.pushPending = function() {
  const e = new rt("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
qu.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new rt(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
qu.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = Fu(r) || Tu(String.fromCharCode(r)), c = Fu(s) || Tu(String.fromCharCode(s)), l = Su(r), f = Su(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
qu.prototype.Token = rt;
function h1(e) {
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
function p1(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !h1(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const b1 = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function g1(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(b1);
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
function m1(e, t) {
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
  for (u++; u < r && ue(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const Qr = [];
for (let e = 0; e < 256; e++)
  Qr.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  Qr[e.charCodeAt(0)] = 1;
});
function _1(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!ue(r)); )
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
    r < 256 && Qr[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function x1(e, t) {
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
function y1(e, t) {
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
function so(e, t) {
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
function v1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  so(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && so(e, t[n].delimiters);
}
const ta = {
  tokenize: y1,
  postProcess: v1
};
function E1(e, t) {
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
function ao(e, t) {
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
function k1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  ao(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && ao(e, t[n].delimiters);
}
const ua = {
  tokenize: E1,
  postProcess: k1
};
function w1(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!ue(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!ue(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!ue(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[Ln(n)], !i)
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
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!ue(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!ue(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!ue(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[Ln(r)], !o)
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
const A1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, D1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function S1(e, t) {
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
  if (D1.test(i)) {
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
  if (A1.test(i)) {
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
function T1(e) {
  return /^<a[>\s]/i.test(e);
}
function F1(e) {
  return /^<\/a\s*>/i.test(e);
}
function R1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function O1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !R1(r))
    return !1;
  const i = e.src.slice(n).match(s1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], T1(o.content) && e.linkLevel++, F1(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const N1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, I1 = /^&([a-z][a-z0-9]{1,31});/i;
function M1(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const i = e.src.slice(u).match(N1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = Xr(o) ? _n(o) : _n(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(I1);
    if (i) {
      const o = Zs(i[0]);
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
function co(e) {
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
function L1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  co(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && co(t[n].delimiters);
}
function B1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const sr = [
  ["text", p1],
  ["linkify", g1],
  ["newline", m1],
  ["escape", _1],
  ["backticks", x1],
  ["strikethrough", ta.tokenize],
  ["emphasis", ua.tokenize],
  ["link", w1],
  ["image", C1],
  ["autolink", S1],
  ["html_inline", O1],
  ["entity", M1]
], ar = [
  ["balance_pairs", L1],
  ["strikethrough", ta.postProcess],
  ["emphasis", ua.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", B1]
];
function $u() {
  this.ruler = new Be();
  for (let e = 0; e < sr.length; e++)
    this.ruler.push(sr[e][0], sr[e][1]);
  this.ruler2 = new Be();
  for (let e = 0; e < ar.length; e++)
    this.ruler2.push(ar[e][0], ar[e][1]);
}
$u.prototype.skipToken = function(e) {
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
$u.prototype.tokenize = function(e) {
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
$u.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
$u.prototype.State = qu;
function z1(e) {
  const t = {};
  e = e || {}, t.src_Any = $s.source, t.src_Cc = Hs.source, t.src_Z = Gs.source, t.src_P = Kr.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Ar(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function zn(e) {
  return Object.prototype.toString.call(e);
}
function P1(e) {
  return zn(e) === "[object String]";
}
function U1(e) {
  return zn(e) === "[object Object]";
}
function j1(e) {
  return zn(e) === "[object RegExp]";
}
function lo(e) {
  return zn(e) === "[object Function]";
}
function q1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const na = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function $1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || na.hasOwnProperty(u);
  }, !1);
}
const H1 = {
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
}, W1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", G1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function V1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function Z1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function fo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function xn(e) {
  const t = e.re = z1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(W1), u.push(t.src_xn), t.src_tlds = u.join("|");
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
    if (e.__compiled__[s] = c, U1(a)) {
      j1(a.validate) ? c.validate = Z1(a.validate) : lo(a.validate) ? c.validate = a.validate : i(s, a), lo(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = fo();
      return;
    }
    if (P1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: fo() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(q1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), V1(e);
}
function K1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function Dr(e, t) {
  const u = new K1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function He(e, t) {
  if (!(this instanceof He))
    return new He(e, t);
  t || $1(e) && (t = e, e = {}), this.__opts__ = Ar({}, na, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Ar({}, H1, e), this.__compiled__ = {}, this.__tlds__ = G1, this.__tlds_replaced__ = !1, this.re = {}, xn(this);
}
He.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, xn(this), this;
};
He.prototype.set = function(t) {
  return this.__opts__ = Ar(this.__opts__, t), this;
};
He.prototype.test = function(t) {
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
He.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
He.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
He.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Dr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(Dr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
He.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, Dr(this, 0)) : null;
};
He.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), xn(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, xn(this), this);
};
He.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
He.prototype.onCompile = function() {
};
const Qt = 2147483647, lt = 36, ei = 1, Ru = 26, J1 = 38, X1 = 700, ra = 72, ia = 128, oa = "-", Y1 = /^xn--/, Q1 = /[^\0-\x7F]/, eh = /[\x2E\u3002\uFF0E\uFF61]/g, th = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, cr = lt - ei, ft = Math.floor, lr = String.fromCharCode;
function At(e) {
  throw new RangeError(th[e]);
}
function uh(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function sa(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(eh, ".");
  const r = e.split("."), i = uh(r, t).join(".");
  return n + i;
}
function aa(e) {
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
const nh = (e) => String.fromCodePoint(...e), rh = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : lt;
}, ho = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, ca = function(e, t, u) {
  let n = 0;
  for (e = u ? ft(e / X1) : e >> 1, e += ft(e / t); e > cr * Ru >> 1; n += lt)
    e = ft(e / cr);
  return ft(n + (cr + 1) * e / (e + J1));
}, la = function(e) {
  const t = [], u = e.length;
  let n = 0, r = ia, i = ra, o = e.lastIndexOf(oa);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && At("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = lt; ; f += lt) {
      s >= u && At("invalid-input");
      const h = rh(e.charCodeAt(s++));
      h >= lt && At("invalid-input"), h > ft((Qt - n) / l) && At("overflow"), n += h * l;
      const p = f <= i ? ei : f >= i + Ru ? Ru : f - i;
      if (h < p)
        break;
      const d = lt - p;
      l > ft(Qt / d) && At("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = ca(n - a, c, a == 0), ft(n / c) > Qt - r && At("overflow"), r += ft(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, fa = function(e) {
  const t = [];
  e = aa(e);
  const u = e.length;
  let n = ia, r = 0, i = ra;
  for (const a of e)
    a < 128 && t.push(lr(a));
  const o = t.length;
  let s = o;
  for (o && t.push(oa); s < u; ) {
    let a = Qt;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > ft((Qt - r) / c) && At("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > Qt && At("overflow"), l === n) {
        let f = r;
        for (let h = lt; ; h += lt) {
          const p = h <= i ? ei : h >= i + Ru ? Ru : h - i;
          if (f < p)
            break;
          const d = f - p, m = lt - p;
          t.push(
            lr(ho(p + d % m, 0))
          ), f = ft(d / m);
        }
        t.push(lr(ho(f, 0))), i = ca(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, ih = function(e) {
  return sa(e, function(t) {
    return Y1.test(t) ? la(t.slice(4).toLowerCase()) : t;
  });
}, oh = function(e) {
  return sa(e, function(t) {
    return Q1.test(t) ? "xn--" + fa(t) : t;
  });
}, da = {
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
    decode: aa,
    encode: nh
  },
  decode: la,
  encode: fa,
  toASCII: oh,
  toUnicode: ih
}, sh = {
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
}, ch = {
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
}, lh = {
  default: sh,
  zero: ah,
  commonmark: ch
}, fh = /^(vbscript|javascript|file|data):/, dh = /^data:image\/(gif|png|jpeg|webp);/;
function hh(e) {
  const t = e.trim().toLowerCase();
  return fh.test(t) ? dh.test(t) : !0;
}
const ha = ["http:", "https:", "mailto:"];
function ph(e) {
  const t = Zr(e, !0);
  if (t.hostname && (!t.protocol || ha.indexOf(t.protocol) >= 0))
    try {
      t.hostname = da.toASCII(t.hostname);
    } catch (u) {
    }
  return ju(Vr(t));
}
function bh(e) {
  const t = Zr(e, !0);
  if (t.hostname && (!t.protocol || ha.indexOf(t.protocol) >= 0))
    try {
      t.hostname = da.toUnicode(t.hostname);
    } catch (u) {
    }
  return ou(Vr(t), ou.defaultChars + "%");
}
function Xe(e, t) {
  if (!(this instanceof Xe))
    return new Xe(e, t);
  t || Jr(e) || (t = e || {}, e = "default"), this.inline = new $u(), this.block = new Bn(), this.core = new Yr(), this.renderer = new bu(), this.linkify = new He(), this.validateLink = hh, this.normalizeLink = ph, this.normalizeLinkText = bh, this.utils = md, this.helpers = Mn({}, vd), this.options = {}, this.configure(e), t && this.set(t);
}
Xe.prototype.set = function(e) {
  return Mn(this.options, e), this;
};
Xe.prototype.configure = function(e) {
  const t = this;
  if (Jr(e)) {
    const u = e;
    if (e = lh[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
Xe.prototype.enable = function(e, t) {
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
Xe.prototype.disable = function(e, t) {
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
Xe.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Xe.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
Xe.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Xe.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
Xe.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function gh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fr, po;
function mh() {
  if (po) return fr;
  po = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((w) => {
      const T = b[w], U = typeof T;
      (U === "object" || U === "function") && !Object.isFrozen(T) && e(T);
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
    const T = /* @__PURE__ */ Object.create(null);
    for (const U in b)
      T[U] = b[U];
    return w.forEach(function(U) {
      for (const ce in U)
        T[ce] = U[ce];
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
        ...T.map((U, ce) => `${U}${"_".repeat(ce + 1)}`)
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
      this.buffer += u(w);
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
      return typeof T == "string" ? w.addText(T) : T.children && (w.openNode(T), T.children.forEach((U) => this._walk(w, U)), w.closeNode(T)), w;
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
      const U = w.root;
      T && (U.scope = `language:${T}`), this.add(U);
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
    return "(" + (g(b).capture ? "" : "?:") + b.map((U) => f(U)).join("|") + ")";
  }
  function E(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function x(b, w) {
    const T = b && b.exec(w);
    return T && T.index === 0;
  }
  const _ = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function y(b, { joinWith: w }) {
    let T = 0;
    return b.map((U) => {
      T += 1;
      const ce = T;
      let le = f(U), N = "";
      for (; le.length > 0; ) {
        const R = _.exec(le);
        if (!R) {
          N += le;
          break;
        }
        N += le.substring(0, R.index), le = le.substring(R.index + R[0].length), R[0][0] === "\\" && R[1] ? N += "\\" + String(Number(R[1]) + ce) : (N += R[0], R[0] === "(" && T++);
      }
      return N;
    }).map((U) => `(${U})`).join(w);
  }
  const C = /\b\B/, A = "[a-zA-Z]\\w*", S = "[a-zA-Z_]\\w*", B = "\\b\\d+(\\.\\d+)?", P = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", $ = "\\b(0b[01]+)", ne = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", re = (b = {}) => {
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
      "on:begin": (T, U) => {
        T.index !== 0 && U.ignoreMatch();
      }
    }, b);
  }, Y = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, G = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [Y]
  }, I = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [Y]
  }, V = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, Z = function(b, w, T = {}) {
    const U = n(
      {
        scope: "comment",
        begin: b,
        end: w,
        contains: []
      },
      T
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
    const ce = k(
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
          ce,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), U;
  }, pe = Z("//", "$"), Re = Z("/\\*", "\\*/"), it = Z("#", "$"), Mt = {
    scope: "number",
    begin: B,
    relevance: 0
  }, Hu = {
    scope: "number",
    begin: P,
    relevance: 0
  }, _a = {
    scope: "number",
    begin: $,
    relevance: 0
  }, xa = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      Y,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Y]
      }
    ]
  }, ya = {
    scope: "title",
    begin: A,
    relevance: 0
  }, va = {
    scope: "title",
    begin: S,
    relevance: 0
  }, Ea = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + S,
    relevance: 0
  };
  var Wu = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: G,
    BACKSLASH_ESCAPE: Y,
    BINARY_NUMBER_MODE: _a,
    BINARY_NUMBER_RE: $,
    COMMENT: Z,
    C_BLOCK_COMMENT_MODE: Re,
    C_LINE_COMMENT_MODE: pe,
    C_NUMBER_MODE: Hu,
    C_NUMBER_RE: P,
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
    HASH_COMMENT_MODE: it,
    IDENT_RE: A,
    MATCH_NOTHING_RE: C,
    METHOD_GUARD: Ea,
    NUMBER_MODE: Mt,
    NUMBER_RE: B,
    PHRASAL_WORDS_MODE: V,
    QUOTE_STRING_MODE: I,
    REGEXP_MODE: xa,
    RE_STARTERS_RE: ne,
    SHEBANG: re,
    TITLE_MODE: ya,
    UNDERSCORE_IDENT_RE: S,
    UNDERSCORE_TITLE_MODE: va
  });
  function ka(b, w) {
    b.input[b.index - 1] === "." && w.ignoreMatch();
  }
  function wa(b, w) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function Ca(b, w) {
    w && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = ka, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Aa(b, w) {
    Array.isArray(b.illegal) && (b.illegal = k(...b.illegal));
  }
  function Da(b, w) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function Sa(b, w) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Ta = (b, w) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const T = Object.assign({}, b);
    Object.keys(b).forEach((U) => {
      delete b[U];
    }), b.keywords = T.keywords, b.begin = m(T.beforeMatch, h(T.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(T, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete T.beforeMatch;
  }, Fa = [
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
  ], Ra = "keyword";
  function ti(b, w, T = Ra) {
    const U = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? ce(T, b.split(" ")) : Array.isArray(b) ? ce(T, b) : Object.keys(b).forEach(function(le) {
      Object.assign(
        U,
        ti(b[le], w, le)
      );
    }), U;
    function ce(le, N) {
      w && (N = N.map((R) => R.toLowerCase())), N.forEach(function(R) {
        const z = R.split("|");
        U[z[0]] = [le, Oa(z[0], z[1])];
      });
    }
  }
  function Oa(b, w) {
    return w ? Number(w) : Na(b) ? 0 : 1;
  }
  function Na(b) {
    return Fa.includes(b.toLowerCase());
  }
  const ui = {}, Lt = (b) => {
    console.error(b);
  }, ni = (b, ...w) => {
    console.log(`WARN: ${b}`, ...w);
  }, Vt = (b, w) => {
    ui[`${b}/${w}`] || (console.log(`Deprecated as of ${b}. ${w}`), ui[`${b}/${w}`] = !0);
  }, Gu = new Error();
  function ri(b, w, { key: T }) {
    let U = 0;
    const ce = b[T], le = {}, N = {};
    for (let R = 1; R <= w.length; R++)
      N[R + U] = ce[R], le[R + U] = !0, U += E(w[R - 1]);
    b[T] = N, b[T]._emit = le, b[T]._multi = !0;
  }
  function Ia(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw Lt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Gu;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw Lt("beginScope must be object"), Gu;
      ri(b, b.begin, { key: "beginScope" }), b.begin = y(b.begin, { joinWith: "" });
    }
  }
  function Ma(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw Lt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Gu;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw Lt("endScope must be object"), Gu;
      ri(b, b.end, { key: "endScope" }), b.end = y(b.end, { joinWith: "" });
    }
  }
  function La(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function Ba(b) {
    La(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), Ia(b), Ma(b);
  }
  function za(b) {
    function w(N, R) {
      return new RegExp(
        f(N),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (R ? "g" : "")
      );
    }
    class T {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(R, z) {
        z.position = this.position++, this.matchIndexes[this.matchAt] = z, this.regexes.push([z, R]), this.matchAt += E(R) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const R = this.regexes.map((z) => z[1]);
        this.matcherRe = w(y(R, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(R) {
        this.matcherRe.lastIndex = this.lastIndex;
        const z = this.matcherRe.exec(R);
        if (!z)
          return null;
        const be = z.findIndex((gu, Un) => Un > 0 && gu !== void 0), de = this.matchIndexes[be];
        return z.splice(0, be), Object.assign(z, de);
      }
    }
    class U {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(R) {
        if (this.multiRegexes[R]) return this.multiRegexes[R];
        const z = new T();
        return this.rules.slice(R).forEach(([be, de]) => z.addRule(be, de)), z.compile(), this.multiRegexes[R] = z, z;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(R, z) {
        this.rules.push([R, z]), z.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(R) {
        const z = this.getMatcher(this.regexIndex);
        z.lastIndex = this.lastIndex;
        let be = z.exec(R);
        if (this.resumingScanAtSamePosition() && !(be && be.index === this.lastIndex)) {
          const de = this.getMatcher(0);
          de.lastIndex = this.lastIndex + 1, be = de.exec(R);
        }
        return be && (this.regexIndex += be.position + 1, this.regexIndex === this.count && this.considerAll()), be;
      }
    }
    function ce(N) {
      const R = new U();
      return N.contains.forEach((z) => R.addRule(z.begin, { rule: z, type: "begin" })), N.terminatorEnd && R.addRule(N.terminatorEnd, { type: "end" }), N.illegal && R.addRule(N.illegal, { type: "illegal" }), R;
    }
    function le(N, R) {
      const z = (
        /** @type CompiledMode */
        N
      );
      if (N.isCompiled) return z;
      [
        wa,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Da,
        Ba,
        Ta
      ].forEach((de) => de(N, R)), b.compilerExtensions.forEach((de) => de(N, R)), N.__beforeBegin = null, [
        Ca,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Aa,
        // default to 1 relevance if not specified
        Sa
      ].forEach((de) => de(N, R)), N.isCompiled = !0;
      let be = null;
      return typeof N.keywords == "object" && N.keywords.$pattern && (N.keywords = Object.assign({}, N.keywords), be = N.keywords.$pattern, delete N.keywords.$pattern), be = be || /\w+/, N.keywords && (N.keywords = ti(N.keywords, b.case_insensitive)), z.keywordPatternRe = w(be, !0), R && (N.begin || (N.begin = /\B|\b/), z.beginRe = w(z.begin), !N.end && !N.endsWithParent && (N.end = /\B|\b/), N.end && (z.endRe = w(z.end)), z.terminatorEnd = f(z.end) || "", N.endsWithParent && R.terminatorEnd && (z.terminatorEnd += (N.end ? "|" : "") + R.terminatorEnd)), N.illegal && (z.illegalRe = w(
        /** @type {RegExp | string} */
        N.illegal
      )), N.contains || (N.contains = []), N.contains = [].concat(...N.contains.map(function(de) {
        return Pa(de === "self" ? N : de);
      })), N.contains.forEach(function(de) {
        le(
          /** @type Mode */
          de,
          z
        );
      }), N.starts && le(N.starts, R), z.matcher = ce(z), z;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), le(
      /** @type Mode */
      b
    );
  }
  function ii(b) {
    return b ? b.endsWithParent || ii(b.starts) : !1;
  }
  function Pa(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(w) {
      return n(b, { variants: null }, w);
    })), b.cachedVariants ? b.cachedVariants : ii(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var Ua = "11.11.1";
  class ja extends Error {
    constructor(w, T) {
      super(w), this.name = "HTMLInjectionError", this.html = T;
    }
  }
  const Pn = u, oi = n, si = Symbol("nomatch"), qa = 7, ai = function(b) {
    const w = /* @__PURE__ */ Object.create(null), T = /* @__PURE__ */ Object.create(null), U = [];
    let ce = !0;
    const le = "Could not find the language '{}', did you forget to load/include a language module?", N = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let R = {
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
    function z(D) {
      return R.noHighlightRe.test(D);
    }
    function be(D) {
      let L = D.className + " ";
      L += D.parentNode ? D.parentNode.className : "";
      const W = R.languageDetectRe.exec(L);
      if (W) {
        const ee = Et(W[1]);
        return ee || (ni(le.replace("{}", W[1])), ni("Falling back to no-highlight mode for this block.", D)), ee ? W[1] : "no-highlight";
      }
      return L.split(/\s+/).find((ee) => z(ee) || Et(ee));
    }
    function de(D, L, W) {
      let ee = "", he = "";
      typeof L == "object" ? (ee = D, W = L.ignoreIllegals, he = L.language) : (Vt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Vt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), he = D, ee = L), W === void 0 && (W = !0);
      const Ye = {
        code: ee,
        language: he
      };
      Zu("before:highlight", Ye);
      const kt = Ye.result ? Ye.result : gu(Ye.language, Ye.code, W);
      return kt.code = Ye.code, Zu("after:highlight", kt), kt;
    }
    function gu(D, L, W, ee) {
      const he = /* @__PURE__ */ Object.create(null);
      function Ye(F, M) {
        return F.keywords[M];
      }
      function kt() {
        if (!j.keywords) {
          xe.addText(te);
          return;
        }
        let F = 0;
        j.keywordPatternRe.lastIndex = 0;
        let M = j.keywordPatternRe.exec(te), H = "";
        for (; M; ) {
          H += te.substring(F, M.index);
          const J = st.case_insensitive ? M[0].toLowerCase() : M[0], ve = Ye(j, J);
          if (ve) {
            const [bt, ic] = ve;
            if (xe.addText(H), H = "", he[J] = (he[J] || 0) + 1, he[J] <= qa && (Xu += ic), bt.startsWith("_"))
              H += M[0];
            else {
              const oc = st.classNameAliases[bt] || bt;
              ot(M[0], oc);
            }
          } else
            H += M[0];
          F = j.keywordPatternRe.lastIndex, M = j.keywordPatternRe.exec(te);
        }
        H += te.substring(F), xe.addText(H);
      }
      function Ku() {
        if (te === "") return;
        let F = null;
        if (typeof j.subLanguage == "string") {
          if (!w[j.subLanguage]) {
            xe.addText(te);
            return;
          }
          F = gu(j.subLanguage, te, !0, gi[j.subLanguage]), gi[j.subLanguage] = /** @type {CompiledMode} */
          F._top;
        } else
          F = jn(te, j.subLanguage.length ? j.subLanguage : null);
        j.relevance > 0 && (Xu += F.relevance), xe.__addSublanguage(F._emitter, F.language);
      }
      function Pe() {
        j.subLanguage != null ? Ku() : kt(), te = "";
      }
      function ot(F, M) {
        F !== "" && (xe.startScope(M), xe.addText(F), xe.endScope());
      }
      function di(F, M) {
        let H = 1;
        const J = M.length - 1;
        for (; H <= J; ) {
          if (!F._emit[H]) {
            H++;
            continue;
          }
          const ve = st.classNameAliases[F[H]] || F[H], bt = M[H];
          ve ? ot(bt, ve) : (te = bt, kt(), te = ""), H++;
        }
      }
      function hi(F, M) {
        return F.scope && typeof F.scope == "string" && xe.openNode(st.classNameAliases[F.scope] || F.scope), F.beginScope && (F.beginScope._wrap ? (ot(te, st.classNameAliases[F.beginScope._wrap] || F.beginScope._wrap), te = "") : F.beginScope._multi && (di(F.beginScope, M), te = "")), j = Object.create(F, { parent: { value: j } }), j;
      }
      function pi(F, M, H) {
        let J = x(F.endRe, H);
        if (J) {
          if (F["on:end"]) {
            const ve = new t(F);
            F["on:end"](M, ve), ve.isMatchIgnored && (J = !1);
          }
          if (J) {
            for (; F.endsParent && F.parent; )
              F = F.parent;
            return F;
          }
        }
        if (F.endsWithParent)
          return pi(F.parent, M, H);
      }
      function ec(F) {
        return j.matcher.regexIndex === 0 ? (te += F[0], 1) : (Wn = !0, 0);
      }
      function tc(F) {
        const M = F[0], H = F.rule, J = new t(H), ve = [H.__beforeBegin, H["on:begin"]];
        for (const bt of ve)
          if (bt && (bt(F, J), J.isMatchIgnored))
            return ec(M);
        return H.skip ? te += M : (H.excludeBegin && (te += M), Pe(), !H.returnBegin && !H.excludeBegin && (te = M)), hi(H, F), H.returnBegin ? 0 : M.length;
      }
      function uc(F) {
        const M = F[0], H = L.substring(F.index), J = pi(j, F, H);
        if (!J)
          return si;
        const ve = j;
        j.endScope && j.endScope._wrap ? (Pe(), ot(M, j.endScope._wrap)) : j.endScope && j.endScope._multi ? (Pe(), di(j.endScope, F)) : ve.skip ? te += M : (ve.returnEnd || ve.excludeEnd || (te += M), Pe(), ve.excludeEnd && (te = M));
        do
          j.scope && xe.closeNode(), !j.skip && !j.subLanguage && (Xu += j.relevance), j = j.parent;
        while (j !== J.parent);
        return J.starts && hi(J.starts, F), ve.returnEnd ? 0 : M.length;
      }
      function nc() {
        const F = [];
        for (let M = j; M !== st; M = M.parent)
          M.scope && F.unshift(M.scope);
        F.forEach((M) => xe.openNode(M));
      }
      let Ju = {};
      function bi(F, M) {
        const H = M && M[0];
        if (te += F, H == null)
          return Pe(), 0;
        if (Ju.type === "begin" && M.type === "end" && Ju.index === M.index && H === "") {
          if (te += L.slice(M.index, M.index + 1), !ce) {
            const J = new Error(`0 width match regex (${D})`);
            throw J.languageName = D, J.badRule = Ju.rule, J;
          }
          return 1;
        }
        if (Ju = M, M.type === "begin")
          return tc(M);
        if (M.type === "illegal" && !W) {
          const J = new Error('Illegal lexeme "' + H + '" for mode "' + (j.scope || "<unnamed>") + '"');
          throw J.mode = j, J;
        } else if (M.type === "end") {
          const J = uc(M);
          if (J !== si)
            return J;
        }
        if (M.type === "illegal" && H === "")
          return te += `
`, 1;
        if (Hn > 1e5 && Hn > M.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return te += H, H.length;
      }
      const st = Et(D);
      if (!st)
        throw Lt(le.replace("{}", D)), new Error('Unknown language: "' + D + '"');
      const rc = za(st);
      let $n = "", j = ee || rc;
      const gi = {}, xe = new R.__emitter(R);
      nc();
      let te = "", Xu = 0, Bt = 0, Hn = 0, Wn = !1;
      try {
        if (st.__emitTokens)
          st.__emitTokens(L, xe);
        else {
          for (j.matcher.considerAll(); ; ) {
            Hn++, Wn ? Wn = !1 : j.matcher.considerAll(), j.matcher.lastIndex = Bt;
            const F = j.matcher.exec(L);
            if (!F) break;
            const M = L.substring(Bt, F.index), H = bi(M, F);
            Bt = F.index + H;
          }
          bi(L.substring(Bt));
        }
        return xe.finalize(), $n = xe.toHTML(), {
          language: D,
          value: $n,
          relevance: Xu,
          illegal: !1,
          _emitter: xe,
          _top: j
        };
      } catch (F) {
        if (F.message && F.message.includes("Illegal"))
          return {
            language: D,
            value: Pn(L),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: F.message,
              index: Bt,
              context: L.slice(Bt - 100, Bt + 100),
              mode: F.mode,
              resultSoFar: $n
            },
            _emitter: xe
          };
        if (ce)
          return {
            language: D,
            value: Pn(L),
            illegal: !1,
            relevance: 0,
            errorRaised: F,
            _emitter: xe,
            _top: j
          };
        throw F;
      }
    }
    function Un(D) {
      const L = {
        value: Pn(D),
        illegal: !1,
        relevance: 0,
        _top: N,
        _emitter: new R.__emitter(R)
      };
      return L._emitter.addText(D), L;
    }
    function jn(D, L) {
      L = L || R.languages || Object.keys(w);
      const W = Un(D), ee = L.filter(Et).filter(fi).map(
        (Pe) => gu(Pe, D, !1)
      );
      ee.unshift(W);
      const he = ee.sort((Pe, ot) => {
        if (Pe.relevance !== ot.relevance) return ot.relevance - Pe.relevance;
        if (Pe.language && ot.language) {
          if (Et(Pe.language).supersetOf === ot.language)
            return 1;
          if (Et(ot.language).supersetOf === Pe.language)
            return -1;
        }
        return 0;
      }), [Ye, kt] = he, Ku = Ye;
      return Ku.secondBest = kt, Ku;
    }
    function $a(D, L, W) {
      const ee = L && T[L] || W;
      D.classList.add("hljs"), D.classList.add(`language-${ee}`);
    }
    function qn(D) {
      let L = null;
      const W = be(D);
      if (z(W)) return;
      if (Zu(
        "before:highlightElement",
        { el: D, language: W }
      ), D.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", D);
        return;
      }
      if (D.children.length > 0 && (R.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(D)), R.throwUnescapedHTML))
        throw new ja(
          "One of your code blocks includes unescaped HTML.",
          D.innerHTML
        );
      L = D;
      const ee = L.textContent, he = W ? de(ee, { language: W, ignoreIllegals: !0 }) : jn(ee);
      D.innerHTML = he.value, D.dataset.highlighted = "yes", $a(D, W, he.language), D.result = {
        language: he.language,
        // TODO: remove with version 11.0
        re: he.relevance,
        relevance: he.relevance
      }, he.secondBest && (D.secondBest = {
        language: he.secondBest.language,
        relevance: he.secondBest.relevance
      }), Zu("after:highlightElement", { el: D, result: he, text: ee });
    }
    function Ha(D) {
      R = oi(R, D);
    }
    const Wa = () => {
      Vu(), Vt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Ga() {
      Vu(), Vt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let ci = !1;
    function Vu() {
      function D() {
        Vu();
      }
      if (document.readyState === "loading") {
        ci || window.addEventListener("DOMContentLoaded", D, !1), ci = !0;
        return;
      }
      document.querySelectorAll(R.cssSelector).forEach(qn);
    }
    function Va(D, L) {
      let W = null;
      try {
        W = L(b);
      } catch (ee) {
        if (Lt("Language definition for '{}' could not be registered.".replace("{}", D)), ce)
          Lt(ee);
        else
          throw ee;
        W = N;
      }
      W.name || (W.name = D), w[D] = W, W.rawDefinition = L.bind(null, b), W.aliases && li(W.aliases, { languageName: D });
    }
    function Za(D) {
      delete w[D];
      for (const L of Object.keys(T))
        T[L] === D && delete T[L];
    }
    function Ka() {
      return Object.keys(w);
    }
    function Et(D) {
      return D = (D || "").toLowerCase(), w[D] || w[T[D]];
    }
    function li(D, { languageName: L }) {
      typeof D == "string" && (D = [D]), D.forEach((W) => {
        T[W.toLowerCase()] = L;
      });
    }
    function fi(D) {
      const L = Et(D);
      return L && !L.disableAutodetect;
    }
    function Ja(D) {
      D["before:highlightBlock"] && !D["before:highlightElement"] && (D["before:highlightElement"] = (L) => {
        D["before:highlightBlock"](
          Object.assign({ block: L.el }, L)
        );
      }), D["after:highlightBlock"] && !D["after:highlightElement"] && (D["after:highlightElement"] = (L) => {
        D["after:highlightBlock"](
          Object.assign({ block: L.el }, L)
        );
      });
    }
    function Xa(D) {
      Ja(D), U.push(D);
    }
    function Ya(D) {
      const L = U.indexOf(D);
      L !== -1 && U.splice(L, 1);
    }
    function Zu(D, L) {
      const W = D;
      U.forEach(function(ee) {
        ee[W] && ee[W](L);
      });
    }
    function Qa(D) {
      return Vt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Vt("10.7.0", "Please use highlightElement now."), qn(D);
    }
    Object.assign(b, {
      highlight: de,
      highlightAuto: jn,
      highlightAll: Vu,
      highlightElement: qn,
      // TODO: Remove with v12 API
      highlightBlock: Qa,
      configure: Ha,
      initHighlighting: Wa,
      initHighlightingOnLoad: Ga,
      registerLanguage: Va,
      unregisterLanguage: Za,
      listLanguages: Ka,
      getLanguage: Et,
      registerAliases: li,
      autoDetection: fi,
      inherit: oi,
      addPlugin: Xa,
      removePlugin: Ya
    }), b.debugMode = function() {
      ce = !1;
    }, b.safeMode = function() {
      ce = !0;
    }, b.versionString = Ua, b.regex = {
      concat: m,
      lookahead: h,
      either: k,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const D in Wu)
      typeof Wu[D] == "object" && e(Wu[D]);
    return Object.assign(b, Wu), b;
  }, Zt = ai({});
  return Zt.newInstance = () => ai({}), fr = Zt, Zt.HighlightJS = Zt, Zt.default = Zt, fr;
}
var _h = /* @__PURE__ */ mh();
const we = /* @__PURE__ */ gh(_h), bo = "[A-Za-z$_][0-9A-Za-z$_]*", xh = [
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
], pa = [
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
], ba = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], ga = [
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
], vh = [
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
], Eh = [].concat(
  ga,
  pa,
  ba
);
function kh(e) {
  const t = e.regex, u = (Z, { after: pe }) => {
    const Re = "</" + Z[0].slice(1);
    return Z.input.indexOf(Re, pe) !== -1;
  }, n = bo, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (Z, pe) => {
      const Re = Z[0].length + Z.index, it = Z.input[Re];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        it === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        it === ","
      ) {
        pe.ignoreMatch();
        return;
      }
      it === ">" && (u(Z, { after: Re }) || pe.ignoreMatch());
      let Mt;
      const Hu = Z.input.substring(Re);
      if (Mt = Hu.match(/^\s*=/)) {
        pe.ignoreMatch();
        return;
      }
      if ((Mt = Hu.match(/^\s+extends\s+/)) && Mt.index === 0) {
        pe.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: bo,
    keyword: xh,
    literal: yh,
    built_in: Eh,
    "variable.language": vh
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
  }, E = {
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
  const _ = [].concat(E, h.contains), y = _.concat([
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
    contains: y
  }, A = {
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
  }, S = {
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
        ...pa,
        ...ba
      ]
    }
  }, B = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, P = {
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
  }, $ = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ne(Z) {
    return t.concat("(?!", Z.join("|"), ")");
  }
  const re = {
    match: t.concat(
      /\b/,
      ne([
        ...ga,
        "super",
        "import"
      ].map((Z) => `${Z}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Y = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, G = {
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
  }, I = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", V = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(I)
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
    exports: { PARAMS_CONTAINS: y, CLASS_REFERENCE: S },
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
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      S,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      V,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          E,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: I,
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
                    contains: y
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
      P,
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
      Y,
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
      re,
      $,
      A,
      G,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function wh(e) {
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
function ma(e) {
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
}), Ah = [
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
], Sh = [
  ...Ah,
  ...Dh
], Th = [
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
].sort().reverse(), Fh = [
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
].sort().reverse(), Rh = [
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
].sort().reverse(), Oh = [
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
function Nh(e) {
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
          { begin: ":(" + Fh.join("|") + ")" },
          { begin: ":(:)?(" + Rh.join("|") + ")" }
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
        begin: "\\b(" + Oh.join("|") + ")\\b"
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
              attribute: Th.join(" ")
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
        begin: "\\b(" + Sh.join("|") + ")\\b"
      }
    ]
  };
}
function Ih(e) {
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
function Mh(e) {
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
    "on:begin": (Y, G) => {
      G.data._beginMatch = Y[1] || Y[2];
    },
    "on:end": (Y, G) => {
      G.data._beginMatch !== Y[1] && G.ignoreMatch();
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
  ], E = [
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
    literal: ((Y) => {
      const G = [];
      return Y.forEach((I) => {
        G.push(I), I.toLowerCase() === I ? G.push(I.toUpperCase()) : G.push(I.toLowerCase());
      }), G;
    })(g),
    built_in: E
  }, y = (Y) => Y.map((G) => G.replace(/\|\d+$/, "")), C = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", y(E).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, A = t.concat(n, "\\b(?!\\()"), S = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        A
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
        A
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
  }, P = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: _,
    contains: [
      B,
      o,
      S,
      e.C_BLOCK_COMMENT_MODE,
      d,
      m,
      C
    ]
  }, $ = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", y(k).join("\\b|"), "|", y(E).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [P]
  };
  P.contains.push($);
  const ne = [
    B,
    S,
    e.C_BLOCK_COMMENT_MODE,
    d,
    m,
    C
  ], re = {
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
          ...ne
        ]
      },
      ...ne,
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
      re,
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
      $,
      S,
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
              re,
              o,
              S,
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
function Lh(e) {
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
  ].filter((y) => !l.includes(y)), m = {
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
  function E(y) {
    return t.concat(
      /\b/,
      t.either(...y.map((C) => C.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const x = {
    scope: "keyword",
    match: E(h),
    relevance: 0
  };
  function _(y, {
    exceptions: C,
    when: A
  } = {}) {
    const S = A;
    return C = C || [], y.map((B) => B.match(/\|\d+$/) || C.includes(B) ? B : S(B) ? `${B}|0` : B);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: _(d, { when: (y) => y.length < 3 }),
      literal: i,
      type: s,
      built_in: f
    },
    contains: [
      {
        scope: "type",
        match: E(o)
      },
      x,
      k,
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
we.registerLanguage("javascript", kh);
we.registerLanguage("json", wh);
we.registerLanguage("xml", ma);
we.registerLanguage("html", ma);
we.registerLanguage("css", Nh);
we.registerLanguage("markdown", Ih);
we.registerLanguage("php", Mh);
we.registerLanguage("sql", Lh);
const et = new Xe({
  html: !1,
  linkify: !0,
  typographer: !0,
  langPrefix: "language-",
  highlight: function(e, t) {
    try {
      return t && we.getLanguage(t) ? we.highlight(e, {
        language: t,
        ignoreIllegals: !0
      }).value : we.highlightAuto(e, we.listLanguages()).value;
    } catch (u) {
      return et.utils.escapeHtml(e);
    }
  }
});
et.enable(["table", "strikethrough"]);
et.renderer.rules.code_inline = function(e, t) {
  const u = e[t];
  return `<code class="md-inline-code">${et.utils.escapeHtml(u.content)}</code>`;
};
et.renderer.rules.fence = function(e, t) {
  const u = e[t], n = u.info ? u.info.trim() : "", r = u.content || "", i = n.split(/\s+/g)[0] || "";
  let o = "", s = "plaintext";
  try {
    if (i && we.getLanguage(i))
      s = i, o = we.highlight(r, {
        language: i,
        ignoreIllegals: !0
      }).value;
    else {
      const c = we.highlightAuto(r, we.listLanguages());
      s = c.language || "plaintext", o = c.value;
    }
  } catch (c) {
    o = et.utils.escapeHtml(r), s = "plaintext";
  }
  const a = et.utils.escapeHtml(r);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${s}</span><button type="button" class="copy-code" data-code="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${s}">${o}</code></pre></div>`;
};
et.renderer.rules.link_open = function(e, t) {
  const u = e[t], n = u.attrIndex("href");
  if (n >= 0) {
    const r = u.attrs[n][1];
    u.attrs[n][1] = et.utils.escapeHtml(r);
  }
  return u.attrIndex("target") < 0 && u.attrPush(["target", "_blank"]), u.attrIndex("rel") < 0 && u.attrPush(["rel", "noopener noreferrer"]), et.renderer.renderToken(e, t, {});
};
function Bh(e) {
  return e ? et.render(e) : "";
}
var zh = /* @__PURE__ */ Fe('<span class="svelte-h2txyd">U</span>'), Ph = /* @__PURE__ */ Fe('<img alt="Bot Icon" class="avatar-image svelte-h2txyd">'), Uh = /* @__PURE__ */ Fe("<div><!></div>"), jh = /* @__PURE__ */ Fe('<div class="message-text svelte-h2txyd"> </div>'), qh = /* @__PURE__ */ Fe('<div class="thinking svelte-h2txyd"><span class="svelte-h2txyd">Thinking</span> <div class="dots-container svelte-h2txyd"><span class="dot svelte-h2txyd"></span> <span class="dot svelte-h2txyd"></span> <span class="dot svelte-h2txyd"></span></div></div>'), $h = /* @__PURE__ */ Fe("<div><!></div>"), Hh = /* @__PURE__ */ Fe('<div><div><!> <div class="bubble-container svelte-h2txyd"><div><!></div> <div> </div></div></div></div>');
const Wh = {
  hash: "svelte-h2txyd",
  code: `.message-container.svelte-h2txyd {display:flex;padding:0 0.5rem;}.user-message.svelte-h2txyd {justify-content:flex-end;}.bot-message.svelte-h2txyd {justify-content:flex-start;}.message-content.svelte-h2txyd {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.user-content.svelte-h2txyd {flex-direction:row-reverse;}.bot-content.svelte-h2txyd {flex-direction:row;}.avatar.svelte-h2txyd {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);}.avatar.icon-url.svelte-h2txyd {background-color:transparent;overflow:hidden;}.avatar-image.svelte-h2txyd {width:100%;height:100%;object-fit:contain;}.bubble-container.svelte-h2txyd {max-width:100%;}.message-bubble.svelte-h2txyd {padding:0.625rem 0.875rem;border-radius:1.25rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);position:relative;line-height:1.5;display:flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);}.user-bubble.svelte-h2txyd {border-top-right-radius:0.25rem;}.bot-bubble.svelte-h2txyd {border-top-left-radius:0.25rem;border:1px solid #e5e7eb;}.message-text.svelte-h2txyd {white-space:pre-wrap;word-break:break-word;font-size:0.95rem;margin:0;padding:0;}

  @keyframes svelte-h2txyd-bounce {
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
  }.timestamp.svelte-h2txyd {font-size:0.75rem;color:#6b7280;margin-top:0.25rem;}.user-timestamp.svelte-h2txyd {text-align:right;}.bot-timestamp.svelte-h2txyd {text-align:left;}

  /* Global styles for markdown content to mirror Messages.vue */.message-markdown {font-size:1rem; /* text-base */line-height:1.625; /* leading-relaxed */color:#525866; /* match Messages.vue */word-break:break-word; /* break-words */width:100%;min-width:0;}.message-markdown h1 {font-weight:600; /* font-semibold */font-size:1.25rem; /* text-xl */margin:0.75rem 0 0.5rem 0;}.message-markdown h2 {font-weight:600;font-size:1.125rem;margin:0.75rem 0 0.5rem 0;}.message-markdown h3 {font-weight:600;font-size:1rem;margin:0.75rem 0 0.5rem 0;}.message-markdown p {margin:0;padding:0;color:inherit;}.message-markdown p + p {margin-top:0.75rem;}.message-markdown ul,
  .message-markdown ol {margin:0.75rem 0;padding-left:1.25rem;}.message-markdown ul {list-style:disc;}.message-markdown ol {list-style:decimal;}.message-markdown li + li {margin-top:0.25rem;}.message-markdown blockquote {border-left:4px solid #cbd5e1; /* border-slate-300 */padding-left:0.75rem; /* pl-3 */background-color:#f8fafc; /* bg-slate-50 */border-radius:0.25rem; /* rounded */color:#6b7280;}.message-markdown table {width:100%;font-size:0.95rem; /* text-sm approximation */display:block; /* make scrollable if overflow */overflow-x:auto;border-collapse:collapse;}.message-markdown th,
  .message-markdown td {border:1px solid #e5e7eb; /* border-slate-200 */padding:0.375rem 0.5rem;}.message-markdown th {background-color:#f1f5f9;font-weight:600;}.message-markdown hr {margin:1rem 0;border:none;border-top:1px solid #e5e7eb;}.message-markdown a {word-break:break-all;color:#2563eb;text-decoration:none;}.message-markdown a:hover {text-decoration:underline;}.message-markdown code {word-break:break-word; /* break-words */white-space:pre-wrap; /* whitespace-pre-wrap */}
  /* Plain CSS for markdown code UI (not nested) */.message-markdown .md-inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;font-size:0.875em;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-h2txyd {
    animation: svelte-h2txyd-pulse 2s infinite ease-in-out;}
  @keyframes svelte-h2txyd-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-h2txyd {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.dots-container.svelte-h2txyd {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-h2txyd {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-h2txyd-bounce 1.4s infinite ease-in-out both;}.dot.svelte-h2txyd:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-h2txyd:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-h2txyd {
    animation: svelte-h2txyd-typing 0.5s ease-in-out;}
  @keyframes svelte-h2txyd-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
};
function Gh(e, t) {
  lu(t, !0), Dn(e, Wh);
  const u = gt(t, "isStreaming", 3, !1), n = gt(t, "hasStarted", 3, !1), r = {
    MessageSquare: gn,
    MessageSquareMore: js,
    Monitor: qs,
    LifeBuoy: Ps,
    HelpCircle: Ls,
    Menu: Us,
    Info: zs,
    FileText: Bs
  }, i = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), o = /* @__PURE__ */ je(() => !i && t.botIcon && r[t.botIcon] ? r[t.botIcon] : gn), s = (C) => C.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), a = /* @__PURE__ */ je(() => t.type === "bot" ? Bh(t.content) : t.content);
  function c(C) {
    var ne, re;
    const A = C.target, S = (ne = A == null ? void 0 : A.closest) == null ? void 0 : ne.call(A, ".copy-code");
    if (!S) return;
    const B = S.getAttribute("data-code") || "", P = S.querySelector(".copy-label"), $ = P ? P.textContent : "";
    (re = navigator == null ? void 0 : navigator.clipboard) != null && re.writeText && navigator.clipboard.writeText(B).then(() => {
      P && (P.textContent = "Copied"), setTimeout(
        () => {
          P && (P.textContent = $ || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      P && (P.textContent = "Failed"), setTimeout(
        () => {
          P && (P.textContent = $ || "Copy Code");
        },
        1500
      );
    });
  }
  let l = /* @__PURE__ */ Ne(null);
  uu(() => {
    const C = O(l);
    if (!C) return;
    const A = (S) => c(S);
    return C.addEventListener("click", A), () => {
      C.removeEventListener("click", A);
    };
  });
  var f = Hh(), h = ie(f), p = ie(h);
  {
    var d = (C) => {
      var A = Uh(), S = ie(A);
      {
        var B = ($) => {
          var ne = zh();
          K($, ne);
        }, P = ($, ne) => {
          {
            var re = (G) => {
              var I = Ph();
              qe(() => iu(I, "src", t.botIcon)), K(G, I);
            }, Y = (G, I) => {
              {
                var V = (Z) => {
                  var pe = Ae(), Re = Ce(pe);
                  ts(Re, () => O(o), (it, Mt) => {
                    Mt(it, { size: 20, strokeWidth: 2, color: "white" });
                  }), K(Z, pe);
                };
                Ke(
                  G,
                  (Z) => {
                    O(o) && Z(V);
                  },
                  I
                );
              }
            };
            Ke(
              $,
              (G) => {
                i ? G(re) : G(Y, !1);
              },
              ne
            );
          }
        };
        Ke(S, ($) => {
          t.type === "user" ? $(B) : $(P, !1);
        });
      }
      qe(() => {
        var $;
        Ct(A, 1, `avatar ${i && t.type === "bot" ? "icon-url" : ""}`, "svelte-h2txyd"), ru(A, `background-color: ${($ = t.type === "user" || i ? "transparent" : t.colorHex) != null ? $ : ""}`);
      }), K(C, A);
    };
    Ke(p, (C) => {
      t.botIcon && (t.type === "user" || t.type === "bot") && C(d);
    });
  }
  var m = Qe(p, 2), g = ie(m), k = ie(g);
  {
    var E = (C) => {
      var A = jh(), S = ie(A);
      qe(() => hn(S, t.content)), K(C, A);
    }, x = (C, A) => {
      {
        var S = (P) => {
          var $ = qh();
          K(P, $);
        }, B = (P) => {
          var $ = $h(), ne = ie($);
          k0(ne, () => O(a)), un($, (re) => se(l, re), () => O(l)), qe(() => Ct($, 1, `message-markdown ${u() ? "typing-animation" : ""}`, "svelte-h2txyd")), K(P, $);
        };
        Ke(
          C,
          (P) => {
            u() && !n() ? P(S) : P(B, !1);
          },
          A
        );
      }
    };
    Ke(k, (C) => {
      t.type === "user" ? C(E) : C(x, !1);
    });
  }
  var _ = Qe(g, 2), y = ie(_);
  qe(
    (C) => {
      var A;
      Ct(f, 1, `message-container ${t.type === "user" ? "user-message" : "bot-message"}`, "svelte-h2txyd"), Ct(h, 1, `message-content ${t.type === "user" ? "user-content" : "bot-content"}`, "svelte-h2txyd"), Ct(g, 1, `message-bubble ${t.type === "user" ? "user-bubble" : "bot-bubble"} ${u() ? "streaming" : ""}`, "svelte-h2txyd"), ru(g, `--message-color: ${(A = t.type === "user" ? t.lighterColorHex : "white") != null ? A : ""}; --text-color: ${t.type === "user" ? "white" : "#1f2937"}`), Ct(_, 1, `timestamp ${t.type === "user" ? "user-timestamp" : "bot-timestamp"}`, "svelte-h2txyd"), hn(y, C);
    },
    [() => s(t.timestamp)]
  ), K(e, f), fu();
}
var Vh = /* @__PURE__ */ Fe('<div class="loading-more svelte-1p2kpvz"><div class="loading-spinner svelte-1p2kpvz"></div> <span>Loading previous messages...</span></div>'), Zh = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, Kh = /* @__PURE__ */ Fe('<div class="chat-container svelte-1p2kpvz"><div class="messages-container svelte-1p2kpvz"><!> <!> <div class="bottom-anchor"></div></div> <form class="input-container svelte-1p2kpvz"><textarea placeholder="Type your message..." class="message-input svelte-1p2kpvz" rows="1"></textarea> <button type="submit" class="send-button svelte-1p2kpvz" aria-label="Send message" title="Send"><!></button></form></div>');
const Jh = {
  hash: "svelte-1p2kpvz",
  code: `.chat-container.svelte-1p2kpvz {height:100%;display:flex;flex-direction:column;overflow:hidden;}.messages-container.svelte-1p2kpvz {flex:1;overflow-y:auto;padding:0.75rem 0.75rem 0;background-color:#f9fafb;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.input-container.svelte-1p2kpvz {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:white;padding:0.75rem;width:100%;box-sizing:border-box;position:relative;}.message-input.svelte-1p2kpvz {width:100%;padding:0.5rem 3.25rem 0.5rem 0.75rem; /* add right padding for send button */border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-1p2kpvz:focus {outline:none;border-color:var(--theme-color);}.message-input.svelte-1p2kpvz:disabled {background-color:#f9fafb;cursor:not-allowed;}.send-button.svelte-1p2kpvz {position:absolute;right:1rem;top:50%;transform:translateY(-50%);width:2rem;height:2rem;border:none;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:var(--theme-color);background:transparent;cursor:pointer;transition:background-color 0.15s ease,
      transform 0.15s ease,
      opacity 0.15s ease;}

  /* Hover effect removed as requested */.send-button.svelte-1p2kpvz:disabled {opacity:0.5;cursor:not-allowed;}.loading-more.svelte-1p2kpvz {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-1p2kpvz {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-1p2kpvz-spin 1s linear infinite;}

  @keyframes svelte-1p2kpvz-spin {
    to {
      transform: rotate(360deg);
    }
  }`
};
function Xh(e, t) {
  lu(t, !0), Dn(e, Jh);
  const [u, n] = M0(), r = () => I0(Je, "$chatStore", u);
  let i = /* @__PURE__ */ Ne(""), o, s, a = /* @__PURE__ */ Ne(!1), c = /* @__PURE__ */ Ne(!0), l = /* @__PURE__ */ Ne(!1), f, h = /* @__PURE__ */ je(() => r().messages), p = /* @__PURE__ */ je(() => r().isLoading), d = /* @__PURE__ */ je(() => r().hasMore), m = /* @__PURE__ */ je(() => r().currentChatId), g = /* @__PURE__ */ je(() => () => {
    var pe, Re;
    const I = O(h).length;
    if (I === 0) return "";
    const V = O(h)[I - 1], Z = ((pe = V == null ? void 0 : V.message) != null ? pe : "").length;
    return `${(Re = V == null ? void 0 : V.id) != null ? Re : ""}:${Z}`;
  });
  const k = () => {
    if (!o) return !0;
    const I = 80, { scrollTop: V, scrollHeight: Z, clientHeight: pe } = o;
    return Z - (V + pe) <= I;
  }, E = (I = !1) => {
    if (!o) return;
    if (f) {
      f.scrollIntoView({
        behavior: I ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const V = o.scrollHeight;
    I ? o.scrollTo({ top: V, behavior: "smooth" }) : o.scrollTop = V;
  }, x = () => ge(null, null, function* () {
    if (!o || (O(l) && se(c, k(), !0), O(a) || !O(d))) return;
    const { scrollTop: I } = o;
    I === 0 && O(m) && (se(a, !0), yield Ms(O(m), r().currentPage + 1), se(a, !1));
  });
  cs(() => {
    requestAnimationFrame(() => E(!1));
    const I = new ResizeObserver(() => {
      O(c) && E(!1);
    });
    return o && I.observe(o), () => {
      I.disconnect();
    };
  });
  const _ = () => {
    if (s) {
      s.style.height = "auto";
      const V = Math.min(s.scrollHeight, 120);
      s.style.height = `${V}px`;
    }
  };
  uu(() => {
    _();
  }), uu(() => {
    const I = O(h).length;
    if (O(g), !O(l) && I > 0) {
      u0().then(() => {
        requestAnimationFrame(() => {
          E(!1), se(c, !0), se(l, !0);
        });
      });
      return;
    }
    O(c) && requestAnimationFrame(() => E(!1));
  });
  const y = () => ge(null, null, function* () {
    if (!O(i).trim()) return;
    const I = O(i);
    se(i, ""), _(), se(c, !0), yield kf(I, t.settings);
  });
  var C = Kh(), A = ie(C), S = ie(A);
  {
    var B = (I) => {
      var V = Vh();
      K(I, V);
    };
    Ke(S, (I) => {
      O(a) && I(B);
    });
  }
  var P = Qe(S, 2);
  es(P, 17, () => O(h), (I) => I.id, (I, V) => {
    const Z = /* @__PURE__ */ je(() => O(V).role === "human" ? "user" : "bot"), pe = /* @__PURE__ */ je(() => new Date(O(V).created_at)), Re = /* @__PURE__ */ je(() => O(V).id === "streaming"), it = /* @__PURE__ */ je(() => O(V).id === "streaming" && O(V).message.length > 0);
    Gh(I, {
      get content() {
        return O(V).message;
      },
      get type() {
        return O(Z);
      },
      get timestamp() {
        return O(pe);
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
        return O(Re);
      },
      get hasStarted() {
        return O(it);
      }
    });
  });
  var $ = Qe(P, 2);
  un($, (I) => f = I, () => f), un(A, (I) => o = I, () => o);
  var ne = Qe(A, 2), re = ie(ne);
  re.__input = _, re.__keydown = [Zh, y], un(re, (I) => s = I, () => s);
  var Y = Qe(re, 2), G = ie(Y);
  Tf(G, { size: 18, strokeWidth: 2 }), qe(
    (I) => {
      var V, Z;
      ru(ne, `--theme-color: ${(V = t.settings.color_hex) != null ? V : ""}; --hover-color: ${(Z = t.settings.lighter_color_hex) != null ? Z : ""}`), re.disabled = O(p), Y.disabled = I;
    },
    [
      () => O(p) || !O(i).trim()
    ]
  ), Di("scroll", A, x), Di("submit", ne, (I) => {
    I.preventDefault(), y();
  }), F0(re, () => O(i), (I) => se(i, I)), K(e, C), fu(), n();
}
An(["input", "keydown"]);
const ye = [];
for (let e = 0; e < 256; ++e)
  ye.push((e + 256).toString(16).slice(1));
function Yh(e, t = 0) {
  return (ye[e[t + 0]] + ye[e[t + 1]] + ye[e[t + 2]] + ye[e[t + 3]] + "-" + ye[e[t + 4]] + ye[e[t + 5]] + "-" + ye[e[t + 6]] + ye[e[t + 7]] + "-" + ye[e[t + 8]] + ye[e[t + 9]] + "-" + ye[e[t + 10]] + ye[e[t + 11]] + ye[e[t + 12]] + ye[e[t + 13]] + ye[e[t + 14]] + ye[e[t + 15]]).toLowerCase();
}
let dr;
const Qh = new Uint8Array(16);
function ep() {
  if (!dr) {
    if (typeof crypto == "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    dr = crypto.getRandomValues.bind(crypto);
  }
  return dr(Qh);
}
const tp = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), go = { randomUUID: tp };
function up(e, t, u) {
  var r, i, o;
  if (go.randomUUID && !e)
    return go.randomUUID();
  e = e || {};
  const n = (o = (i = e.random) != null ? i : (r = e.rng) == null ? void 0 : r.call(e)) != null ? o : ep();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, Yh(n);
}
class np {
  constructor(t) {
    Ve(this, "settings");
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
        const u = up();
        localStorage.setItem("userId", u);
      }
    });
  }
  initializeChat() {
    return ge(this, null, function* () {
      const t = localStorage.getItem("currentChatId");
      t ? yield Ms(t) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && Je.update((t) => Ee(fe({}, t), {
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
    Je.update((t) => Ee(fe({}, t), {
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
}, ip = (e, t) => {
  if (O(t)) {
    const u = new CustomEvent("minimize-widget");
    document.dispatchEvent(u), se(t, !1);
  } else {
    const u = new CustomEvent("maximize-widget");
    document.dispatchEvent(u), se(t, !0);
  }
};
var op = /* @__PURE__ */ Fe('<main class="svelte-1mu7jyk"><header class="main-header svelte-1mu7jyk"><div class="title svelte-1mu7jyk"> </div> <div class="button-group svelte-1mu7jyk"><button class="icon-button svelte-1mu7jyk"><!></button> <button class="icon-button svelte-1mu7jyk" aria-label="Refresh chat"><!></button></div></header> <div class="content svelte-1mu7jyk"><!></div></main>');
const sp = {
  hash: "svelte-1mu7jyk",
  code: `main.svelte-1mu7jyk {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-1mu7jyk {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.main-header.svelte-1mu7jyk {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.title.svelte-1mu7jyk {font-size:1.125rem;font-weight:600;line-height:1.25;}.button-group.svelte-1mu7jyk {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-1mu7jyk {background:transparent;border:none;color:white;cursor:pointer;}.content.svelte-1mu7jyk {flex:1;overflow:hidden;}

  @media screen and (max-width: 640px) {
  }`
};
function ap(e, t) {
  lu(t, !0), Dn(e, sp);
  const u = new np(t.settings);
  let n = /* @__PURE__ */ Ne(!1);
  cs(() => ge(null, null, function* () {
    yield u.initialize();
  }));
  var r = op(), i = ie(r), o = ie(i), s = ie(o), a = Qe(o, 2), c = ie(a);
  c.__click = [ip, n];
  var l = ie(c);
  {
    var f = (k) => {
      Sf(k, {});
    }, h = (k) => {
      Af(k, {});
    };
    Ke(l, (k) => {
      O(n) ? k(f) : k(h, !1);
    });
  }
  var p = Qe(c, 2);
  p.__click = [rp, u];
  var d = ie(p);
  Df(d, {});
  var m = Qe(i, 2), g = ie(m);
  Xh(g, {
    get settings() {
      return t.settings;
    }
  }), qe(() => {
    var k;
    ru(i, `background-color: ${(k = t.settings.color_hex) != null ? k : ""};`), hn(s, t.settings.title_text), iu(c, "aria-label", O(n) ? "Minimize chat" : "Maximize chat");
  }), K(e, r), fu();
}
An(["click"]);
const cp = "html,body{height:100%;margin:0;overflow:hidden}", lp = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var fp = (e, t, u) => {
  var n;
  (n = u.onToggle) == null || n.call(u);
}, dp = /* @__PURE__ */ Fe('<span class="button-text svelte-1soff1s"> </span>'), hp = /* @__PURE__ */ Fe('<div class="close-icon svelte-1soff1s"><!></div>'), pp = /* @__PURE__ */ Fe('<img alt="Chat Icon" class="icon-image svelte-1soff1s">'), bp = /* @__PURE__ */ Fe('<div class="chat-icon svelte-1soff1s"><!></div>'), gp = /* @__PURE__ */ Fe('<button id="chat-button"><!> <!></button>');
const mp = {
  hash: "svelte-1soff1s",
  code: `#chat-button.svelte-1soff1s {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;z-index:10000;}#chat-button.with-text.svelte-1soff1s {padding:0 1.25rem;border-radius:100px;}#chat-button.with-icon-url.svelte-1soff1s {padding:0.5rem;}#chat-button.svelte-1soff1s:hover {background-color:var(--hover-color) !important;transform:translateY(-1px);}#chat-button.active.svelte-1soff1s {filter:brightness(0.9);}.chat-icon.svelte-1soff1s,
  .close-icon.svelte-1soff1s {display:flex;align-items:center;transition:transform 0.3s ease;}.button-text.svelte-1soff1s {font-size:0.875rem;font-weight:500;white-space:nowrap;}

  /* Icon visibility is now controlled by template conditionals */.icon-image.svelte-1soff1s {width:100%;height:100%;max-width:2.5rem;max-height:2.5rem;object-fit:contain;}`
};
function mo(e, t) {
  lu(t, !0), Dn(e, mp);
  const u = /* @__PURE__ */ z0(t, ["$$slots", "$$events", "$$legacy"]), n = {
    MessageSquare: gn,
    MessageSquareMore: js,
    Monitor: qs,
    LifeBuoy: Ps,
    HelpCircle: Ls,
    Menu: Us,
    Info: zs,
    FileText: Bs
  }, r = /* @__PURE__ */ je(() => !!t.buttonIcon && (t.buttonIcon.startsWith("http://") || t.buttonIcon.startsWith("https://"))), i = /* @__PURE__ */ je(() => O(r) ? null : n[t.buttonIcon || "MessageSquare"] || gn);
  var o = gp();
  o.__click = [fp, u, t];
  let s;
  var a = ie(o);
  {
    var c = (p) => {
      var d = dp(), m = ie(d);
      qe(() => hn(m, t.buttonText)), K(p, d);
    };
    Ke(a, (p) => {
      t.showButtonText && p(c);
    });
  }
  var l = Qe(a, 2);
  {
    var f = (p) => {
      var d = hp(), m = ie(d);
      Ff(m, { size: 24, strokeWidth: 2 }), K(p, d);
    }, h = (p) => {
      var d = bp(), m = ie(d);
      {
        var g = (E) => {
          var x = pp();
          qe(() => iu(x, "src", t.buttonIcon)), K(E, x);
        }, k = (E, x) => {
          {
            var _ = (y) => {
              var C = Ae(), A = Ce(C);
              ts(A, () => O(i), (S, B) => {
                B(S, { size: 24, strokeWidth: 2 });
              }), K(y, C);
            };
            Ke(
              E,
              (y) => {
                O(i) && y(_);
              },
              x
            );
          }
        };
        Ke(m, (E) => {
          O(r) ? E(g) : E(k, !1);
        });
      }
      K(p, d);
    };
    Ke(l, (p) => {
      t.isOpen ? p(f) : p(h, !1);
    });
  }
  qe(
    (p) => {
      var d, m;
      iu(o, "aria-label", t.isOpen ? "Close chat" : "Open chat"), ru(o, `background-color: ${(d = t.colorHex) != null ? d : ""}; --hover-color: ${(m = t.lighterColorHex) != null ? m : ""}`), s = Ct(o, 1, "svelte-1soff1s", null, s, p);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText,
        "with-icon-url": O(r)
      })
    ]
  ), K(e, o), fu();
}
An(["click"]);
class _p {
  constructor(t) {
    Ve(this, "container", null);
    Ve(this, "buttonContainer", null);
    Ve(this, "isOpen", !1);
    Ve(this, "isMaximized", !1);
    Ve(this, "clickHandler");
    Ve(this, "maximizeHandler");
    Ve(this, "minimizeHandler");
    Ve(this, "closeHandler");
    Ve(this, "settings", null);
    Ve(this, "chatButtonInstance", null);
    this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.initialize(t);
  }
  fetchSettings(t) {
    return ge(this, null, function* () {
      try {
        return (yield yf.get(`/api/bots/${t}/widget-settings`)).data.data;
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
    }, 300))), this.chatButtonInstance)
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
          this.chatButtonInstance = Jn(mo, o);
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
                height: 90vh;
                max-height: 90vh;
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

            ${lp}
            ${cp}
        `, t;
  }
  initialize(t) {
    return ge(this, null, function* () {
      if (this.settings = yield this.fetchSettings(t), !this.settings) {
        console.warn("No widget settings found, widget will not be initialized");
        return;
      }
      const u = document.createElement("div");
      u.id = "fluent-bot-chat-widget-container", u.classList.add(`align-${this.settings.button_alignment}`);
      const n = u.attachShadow({ mode: "open" }), r = document.createElement("div");
      r.id = "fluent-bot-chat-widget";
      const i = document.createElement("div");
      i.id = "chat-button-container", n.appendChild(this.createStyles()), n.appendChild(r), n.appendChild(i), document.body.appendChild(u), this.container = r, this.buttonContainer = i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), Jn(ap, {
        target: r,
        props: {
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
      this.chatButtonInstance = Jn(mo, o);
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
const xp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), Up = (e) => {
  xp() || new _p(e);
};
export {
  _p as FluentBotChatWidget,
  Up as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
