var oc = Object.defineProperty, sc = Object.defineProperties;
var ac = Object.getOwnPropertyDescriptors;
var ki = Object.getOwnPropertySymbols;
var cc = Object.prototype.hasOwnProperty, lc = Object.prototype.propertyIsEnumerable;
var tu = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), fc = (e) => {
  throw TypeError(e);
};
var Xn = (e, t, u) => t in e ? oc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, se = (e, t) => {
  for (var u in t || (t = {}))
    cc.call(t, u) && Xn(e, u, t[u]);
  if (ki)
    for (var u of ki(t))
      lc.call(t, u) && Xn(e, u, t[u]);
  return e;
}, ye = (e, t) => sc(e, ac(t));
var Qe = (e, t, u) => Xn(e, typeof t != "symbol" ? t + "" : t, u);
var Ee = (e, t, u) => new Promise((n, r) => {
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
}), Ht = function(e, t) {
  this[0] = e, this[1] = t;
}, Yn = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof Ht, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[tu("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, Qn = (e) => {
  var t = e[tu("asyncIterator")], u = !1, n, r = {};
  return t == null ? (t = e[tu("iterator")](), n = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), n = (i) => r[i] = (o) => {
    if (u) {
      if (u = !1, i === "throw") throw o;
      return o;
    }
    return u = !0, {
      done: !1,
      value: new Ht(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || fc("Object expected"), s(a);
      }), 1)
    };
  }), r[tu("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, Ai = (e, t, u) => (t = e[tu("asyncIterator")]) ? t.call(e) : (e = e[tu("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var Mr = Array.isArray, dc = Array.prototype.indexOf, Ir = Array.from, To = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, Fo = Object.getOwnPropertyDescriptors, hc = Object.prototype, pc = Array.prototype, Lr = Object.getPrototypeOf, Ci = Object.isExtensible;
function Au(e) {
  return typeof e == "function";
}
const Bt = () => {
};
function bc(e) {
  return e();
}
function Ru(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const ot = 2, Ro = 4, wn = 8, Br = 16, Ct = 32, bu = 64, dn = 128, Xe = 256, hn = 512, $e = 1024, kt = 2048, Yt = 4096, wt = 8192, kn = 16384, gc = 32768, zu = 65536, mc = 1 << 17, _c = 1 << 19, Oo = 1 << 20, _r = 1 << 21, Pt = Symbol("$state"), No = Symbol("legacy props"), xc = Symbol("");
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
function wc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function kc(e) {
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
let gu = !1;
function Sc() {
  gu = !0;
}
const jr = 1, zr = 2, Lo = 4, Tc = 8, Fc = 16, Rc = 1, Oc = 2, Bo = 4, Nc = 8, Mc = 16, Ic = 1, Lc = 2, je = Symbol(), Bc = "http://www.w3.org/1999/xhtml", Pc = "http://www.w3.org/2000/svg";
function jc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ae = null;
function Di(e) {
  ae = e;
}
function mu(e, t = !1, u) {
  var n = ae = {
    p: ae,
    c: null,
    d: !1,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  };
  gu && !t && (ae.l = {
    s: null,
    u: null,
    r1: [],
    r2: au(!1)
  }), $r(() => {
    n.d = !0;
  });
}
function _u(e) {
  const t = ae;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = Q, n = te;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          jt(i.effect), _t(i.reaction), Hr(i.fn);
        }
      } finally {
        jt(u), _t(n);
      }
    }
    ae = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Uu() {
  return !gu || ae !== null && ae.l === null;
}
function Wt(e) {
  if (typeof e != "object" || e === null || Pt in e)
    return e;
  const t = Lr(e);
  if (t !== hc && t !== pc)
    return e;
  var u = /* @__PURE__ */ new Map(), n = Mr(e), r = /* @__PURE__ */ ze(0), i = te, o = (s) => {
    var a = te;
    _t(i);
    var c = s();
    return _t(a), c;
  };
  return n && u.set("length", /* @__PURE__ */ ze(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(s, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ac();
        var l = u.get(a);
        return l === void 0 ? (l = o(() => /* @__PURE__ */ ze(c.value)), u.set(a, l)) : ce(
          l,
          o(() => Wt(c.value))
        ), !0;
      },
      deleteProperty(s, a) {
        var c = u.get(a);
        if (c === void 0)
          a in s && (u.set(
            a,
            o(() => /* @__PURE__ */ ze(je))
          ), er(r));
        else {
          if (n && typeof a == "string") {
            var l = (
              /** @type {Source<number>} */
              u.get("length")
            ), f = Number(a);
            Number.isInteger(f) && f < l.v && ce(l, f);
          }
          ce(c, je), er(r);
        }
        return !0;
      },
      get(s, a, c) {
        var p;
        if (a === Pt)
          return e;
        var l = u.get(a), f = a in s;
        if (l === void 0 && (!f || (p = Lt(s, a)) != null && p.writable) && (l = o(() => /* @__PURE__ */ ze(Wt(f ? s[a] : je))), u.set(a, l)), l !== void 0) {
          var h = F(l);
          return h === je ? void 0 : h;
        }
        return Reflect.get(s, a, c);
      },
      getOwnPropertyDescriptor(s, a) {
        var c = Reflect.getOwnPropertyDescriptor(s, a);
        if (c && "value" in c) {
          var l = u.get(a);
          l && (c.value = F(l));
        } else if (c === void 0) {
          var f = u.get(a), h = f == null ? void 0 : f.v;
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
        if (a === Pt)
          return !0;
        var c = u.get(a), l = c !== void 0 && c.v !== je || Reflect.has(s, a);
        if (c !== void 0 || Q !== null && (!l || (h = Lt(s, a)) != null && h.writable)) {
          c === void 0 && (c = o(() => /* @__PURE__ */ ze(l ? Wt(s[a]) : je)), u.set(a, c));
          var f = F(c);
          if (f === je)
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
            d !== void 0 ? ce(d, je) : p in s && (d = o(() => /* @__PURE__ */ ze(je)), u.set(p + "", d));
          }
        f === void 0 ? (!h || (E = Lt(s, a)) != null && E.writable) && (f = o(() => /* @__PURE__ */ ze(void 0)), ce(
          f,
          o(() => Wt(c))
        ), u.set(a, f)) : (h = f.v !== je, ce(
          f,
          o(() => Wt(c))
        ));
        var x = Reflect.getOwnPropertyDescriptor(s, a);
        if (x != null && x.set && x.set.call(l, c), !h) {
          if (n && typeof a == "string") {
            var m = (
              /** @type {Source<number>} */
              u.get("length")
            ), w = Number(a);
            Number.isInteger(w) && w >= m.v && ce(m, w + 1);
          }
          er(r);
        }
        return !0;
      },
      ownKeys(s) {
        F(r);
        var a = Reflect.ownKeys(s).filter((f) => {
          var h = u.get(f);
          return h === void 0 || h.v !== je;
        });
        for (var [c, l] of u)
          l.v !== je && !(c in s) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Cc();
      }
    }
  );
}
function er(e, t = 1) {
  ce(e, e.v + t);
}
// @__NO_SIDE_EFFECTS__
function su(e) {
  var t = ot | kt, u = te !== null && (te.f & ot) !== 0 ? (
    /** @type {Derived} */
    te
  ) : null;
  return Q === null || u !== null && (u.f & Xe) !== 0 ? t |= Xe : Q.f |= Oo, {
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
    parent: u != null ? u : Q
  };
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  const t = /* @__PURE__ */ su(e);
  return Qo(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ur(e) {
  const t = /* @__PURE__ */ su(e);
  return t.equals = Pr, t;
}
function Po(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      At(
        /** @type {Effect} */
        t[u]
      );
  }
}
function zc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & ot) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function jo(e) {
  var t, u = Q;
  jt(zc(e));
  try {
    Po(e), t = ns(e);
  } finally {
    jt(u);
  }
  return t;
}
function zo(e) {
  var t = jo(e), u = (Mt || (e.f & Xe) !== 0) && e.deps !== null ? Yt : $e;
  st(e, u), e.equals(t) || (e.v = t, e.wv = ts());
}
const Ou = /* @__PURE__ */ new Map();
function au(e, t) {
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
function ze(e, t) {
  const u = au(e);
  return Qo(u), u;
}
// @__NO_SIDE_EFFECTS__
function qr(e, t = !1) {
  var n, r;
  const u = au(e);
  return t || (u.equals = Pr), gu && ae !== null && ae.l !== null && ((r = (n = ae.l).s) != null ? r : n.s = []).push(u), u;
}
function ce(e, t, u = !1) {
  te !== null && !pt && Uu() && (te.f & (ot | Br)) !== 0 && !(Le != null && Le.includes(e)) && Dc();
  let n = u ? Wt(t) : t;
  return xr(e, n);
}
function xr(e, t) {
  if (!e.equals(t)) {
    var u = e.v;
    Hu ? Ou.set(e, t) : Ou.set(e, u), e.v = t, (e.f & ot) !== 0 && ((e.f & kt) !== 0 && jo(
      /** @type {Derived} */
      e
    ), st(e, (e.f & Xe) === 0 ? $e : Yt)), e.wv = ts(), Uo(e, kt), Uu() && Q !== null && (Q.f & $e) !== 0 && (Q.f & (Ct | bu)) === 0 && (et === null ? Kc([e]) : et.push(e));
  }
  return t;
}
function Si(e, t = 1) {
  var u = F(e), n = t === 1 ? u++ : u--;
  return ce(e, u), n;
}
function Uo(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Uu(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & kt) === 0 && (!n && o === Q || (st(o, t), (s & ($e | Xe)) !== 0 && ((s & ot) !== 0 ? Uo(
        /** @type {Derived} */
        o,
        Yt
      ) : Sn(
        /** @type {Effect} */
        o
      ))));
    }
}
let Uc = !1;
var Ti, qo, $o, Ho;
function qc() {
  if (Ti === void 0) {
    Ti = window, qo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, u = Text.prototype;
    $o = Lt(t, "firstChild").get, Ho = Lt(t, "nextSibling").get, Ci(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Ci(u) && (u.__t = void 0);
  }
}
function An(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function bt(e) {
  return $o.call(e);
}
// @__NO_SIDE_EFFECTS__
function Cn(e) {
  return Ho.call(e);
}
function X(e, t) {
  return /* @__PURE__ */ bt(e);
}
function me(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ bt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ Cn(u) : u;
  }
}
function Fe(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Cn(n);
  return n;
}
function $c(e) {
  e.textContent = "";
}
function Wo(e) {
  Q === null && te === null && Ec(), te !== null && (te.f & Xe) !== 0 && Q === null && yc(), Hu && vc();
}
function Hc(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function xu(e, t, u, n = !0) {
  var a;
  var r = Q, i = {
    ctx: ae,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | kt,
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
      Gr(i), i.f |= gc;
    } catch (c) {
      throw At(i), c;
    }
  else t !== null && Sn(i);
  var o = u && i.deps === null && i.first === null && i.nodes_start === null && i.teardown === null && (i.f & (Oo | dn)) === 0;
  if (!o && n && (r !== null && Hc(i, r), te !== null && (te.f & ot) !== 0)) {
    var s = (
      /** @type {Derived} */
      te
    );
    ((a = s.effects) != null ? a : s.effects = []).push(i);
  }
  return i;
}
function $r(e) {
  const t = xu(wn, null, !1);
  return st(t, $e), t.teardown = e, t;
}
function cu(e) {
  var r;
  Wo();
  var t = Q !== null && (Q.f & Ct) !== 0 && ae !== null && !ae.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      ae
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: Q,
      reaction: te
    });
  } else {
    var n = Hr(e);
    return n;
  }
}
function Wc(e) {
  return Wo(), Wr(e);
}
function Vc(e) {
  const t = xu(bu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? lu(t, () => {
      At(t), n(void 0);
    }) : (At(t), n(void 0));
  });
}
function Hr(e) {
  return xu(Ro, e, !1);
}
function Wr(e) {
  return xu(wn, e, !0);
}
function De(e, t = [], u = su) {
  const n = t.map(u);
  return qu(() => e(...n.map(F)));
}
function qu(e, t = 0) {
  return xu(wn | Br | t, e, !0);
}
function Kt(e, t = !0) {
  return xu(wn | Ct, e, !0, t);
}
function Vo(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Hu, n = te;
    Ri(!0), _t(null);
    try {
      t.call(null);
    } finally {
      Ri(u), _t(n);
    }
  }
}
function Go(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    (u.f & bu) !== 0 ? u.parent = null : At(u, t), u = n;
  }
}
function Gc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & Ct) === 0 && At(t), t = u;
  }
}
function At(e, t = !0) {
  var u = !1;
  (t || (e.f & _c) !== 0) && e.nodes_start !== null && (Zo(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), u = !0), Go(e, t && !u), mn(e, 0), st(e, kn);
  var n = e.transitions;
  if (n !== null)
    for (const i of n)
      i.stop();
  Vo(e);
  var r = e.parent;
  r !== null && r.first !== null && Ko(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function Zo(e, t) {
  for (; e !== null; ) {
    var u = e === t ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Cn(e)
    );
    e.remove(), e = u;
  }
}
function Ko(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function lu(e, t) {
  var u = [];
  Vr(e, u, !0), Jo(u, () => {
    At(e), t && t();
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
  if ((e.f & wt) === 0) {
    if (e.f ^= wt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & zu) !== 0 || (n.f & Ct) !== 0;
      Vr(n, t, i ? u : !1), n = r;
    }
  }
}
function Nu(e) {
  Xo(e, !0);
}
function Xo(e, t) {
  if ((e.f & wt) !== 0) {
    e.f ^= wt, (e.f & $e) === 0 && (e.f ^= $e), Wu(e) && (st(e, kt), Sn(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & zu) !== 0 || (u.f & Ct) !== 0;
      Xo(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Mu = [], vr = [];
function Yo() {
  var e = Mu;
  Mu = [], Ru(e);
}
function Zc() {
  var e = vr;
  vr = [], Ru(e);
}
function $u(e) {
  Mu.length === 0 && queueMicrotask(Yo), Mu.push(e);
}
function Fi() {
  Mu.length > 0 && Yo(), vr.length > 0 && Zc();
}
let sn = !1, pn = !1, bn = null, Gt = !1, Hu = !1;
function Ri(e) {
  Hu = e;
}
let Fu = [];
let te = null, pt = !1;
function _t(e) {
  te = e;
}
let Q = null;
function jt(e) {
  Q = e;
}
let Le = null;
function Qo(e) {
  te !== null && te.f & _r && (Le === null ? Le = [e] : Le.push(e));
}
let Me = null, Ze = 0, et = null;
function Kc(e) {
  et = e;
}
let es = 1, gn = 0, Mt = !1;
function ts() {
  return ++es;
}
function Wu(e) {
  var f, h;
  var t = e.f;
  if ((t & kt) !== 0)
    return !0;
  if ((t & Yt) !== 0) {
    var u = e.deps, n = (t & Xe) !== 0;
    if (u !== null) {
      var r, i, o = (t & hn) !== 0, s = n && Q !== null && !Mt, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= hn), s && l !== null && (l.f & Xe) === 0 && (c.f ^= Xe);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Wu(
          /** @type {Derived} */
          i
        ) && zo(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || Q !== null && !Mt) && st(e, $e);
  }
  return !1;
}
function Jc(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & dn) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= dn;
      }
    u = u.parent;
  }
  throw sn = !1, e;
}
function Oi(e) {
  return (e.f & kn) === 0 && (e.parent === null || (e.parent.f & dn) === 0);
}
function Dn(e, t, u, n) {
  if (sn) {
    if (u === null && (sn = !1), Oi(t))
      throw e;
    return;
  }
  if (u !== null && (sn = !0), Jc(e, t), Oi(t))
    throw e;
}
function us(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      Le != null && Le.includes(e) || ((i.f & ot) !== 0 ? us(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? st(i, kt) : (i.f & $e) !== 0 && st(i, Yt), Sn(
        /** @type {Effect} */
        i
      )));
    }
}
function ns(e) {
  var p, d;
  var t = Me, u = Ze, n = et, r = te, i = Mt, o = Le, s = ae, a = pt, c = e.f;
  Me = /** @type {null | Value[]} */
  null, Ze = 0, et = null, Mt = (c & Xe) !== 0 && (pt || !Gt || te === null), te = (c & (Ct | bu)) === 0 ? e : null, Le = null, Di(e.ctx), pt = !1, gn++, e.f |= _r;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Me !== null) {
      var h;
      if (mn(e, Ze), f !== null && Ze > 0)
        for (f.length = Ze + Me.length, h = 0; h < Me.length; h++)
          f[Ze + h] = Me[h];
      else
        e.deps = f = Me;
      if (!Mt)
        for (h = Ze; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Ze < f.length && (mn(e, Ze), f.length = Ze);
    if (Uu() && et !== null && !pt && f !== null && (e.f & (ot | Yt | kt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      et.length; h++)
        us(
          et[h],
          /** @type {Effect} */
          e
        );
    return r !== null && r !== e && (gn++, et !== null && (n === null ? n = et : n.push(.../** @type {Source[]} */
    et))), l;
  } finally {
    Me = t, Ze = u, et = n, te = r, Mt = i, Le = o, Di(s), pt = a, e.f ^= _r;
  }
}
function Xc(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = dc.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & ot) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !Me.includes(t)) && (st(t, Yt), (t.f & (Xe | hn)) === 0 && (t.f ^= hn), Po(
    /** @type {Derived} **/
    t
  ), mn(
    /** @type {Derived} **/
    t,
    0
  ));
}
function mn(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      Xc(e, u[n]);
}
function Gr(e) {
  var t = e.f;
  if ((t & kn) === 0) {
    st(e, $e);
    var u = Q, n = ae, r = Gt;
    Q = e, Gt = !0;
    try {
      (t & Br) !== 0 ? Gc(e) : Go(e), Vo(e);
      var i = ns(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = es;
      var o = e.deps, s;
    } catch (a) {
      Dn(a, e, u, n || e.ctx);
    } finally {
      Gt = r, Q = u;
    }
  }
}
function Yc() {
  try {
    wc();
  } catch (e) {
    if (bn !== null)
      Dn(e, bn, null);
    else
      throw e;
  }
}
function rs() {
  var e = Gt;
  try {
    var t = 0;
    for (Gt = !0; Fu.length > 0; ) {
      t++ > 1e3 && Yc();
      var u = Fu, n = u.length;
      Fu = [];
      for (var r = 0; r < n; r++) {
        var i = e0(u[r]);
        Qc(i);
      }
      Ou.clear();
    }
  } finally {
    pn = !1, Gt = e, bn = null;
  }
}
function Qc(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (kn | wt)) === 0)
        try {
          Wu(n) && (Gr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? Ko(n) : n.fn = null));
        } catch (r) {
          Dn(r, n, null, n.ctx);
        }
    }
}
function Sn(e) {
  pn || (pn = !0, queueMicrotask(rs));
  for (var t = bn = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (bu | Ct)) !== 0) {
      if ((u & $e) === 0) return;
      t.f ^= $e;
    }
  }
  Fu.push(t);
}
function e0(e) {
  for (var t = [], u = e; u !== null; ) {
    var n = u.f, r = (n & (Ct | bu)) !== 0, i = r && (n & $e) !== 0;
    if (!i && (n & wt) === 0) {
      if ((n & Ro) !== 0)
        t.push(u);
      else if (r)
        u.f ^= $e;
      else
        try {
          Wu(u) && Gr(u);
        } catch (a) {
          Dn(a, u, null, u.ctx);
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
  for (Fi(); Fu.length > 0; )
    pn = !0, rs(), Fi();
  return (
    /** @type {T} */
    t
  );
}
function u0() {
  return Ee(this, null, function* () {
    yield Promise.resolve(), t0();
  });
}
function F(e) {
  var t = e.f, u = (t & ot) !== 0;
  if (te !== null && !pt) {
    if (!(Le != null && Le.includes(e))) {
      var n = te.deps;
      e.rv < gn && (e.rv = gn, Me === null && n !== null && n[Ze] === e ? Ze++ : Me === null ? Me = [e] : (!Mt || !Me.includes(e)) && Me.push(e));
    }
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Xe) === 0 && (r.f ^= Xe);
  }
  return u && (r = /** @type {Derived} */
  e, Wu(r) && zo(r)), Hu && Ou.has(e) ? Ou.get(e) : e.v;
}
function Jt(e) {
  var t = pt;
  try {
    return pt = !0, e();
  } finally {
    pt = t;
  }
}
const n0 = -7169;
function st(e, t) {
  e.f = e.f & n0 | t;
}
function r0(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Pt in e)
      yr(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && Pt in u && yr(u);
      }
  }
}
function yr(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        yr(e[n], t);
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
    e.autofocus = !0, $u(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let Ni = !1;
function h0() {
  Ni || (Ni = !0, document.addEventListener(
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
  var t = te, u = Q;
  _t(null), jt(null);
  try {
    return e();
  } finally {
    _t(t), jt(u);
  }
}
function p0(e, t, u, n = u) {
  e.addEventListener(t, () => is(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), h0();
}
const os = /* @__PURE__ */ new Set(), Er = /* @__PURE__ */ new Set();
function ss(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || Tu.call(t, i), !i.cancelBubble)
      return is(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? $u(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Mi(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = ss(e, t, u, i);
  (t === document.body || t === window || t === document) && $r(() => {
    t.removeEventListener(e, o, i);
  });
}
function Tn(e) {
  for (var t = 0; t < e.length; t++)
    os.add(e[t]);
  for (var u of Er)
    u(e);
}
function Tu(e) {
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
    To(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || u;
      }
    });
    var l = te, f = Q;
    _t(null), jt(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var x = i["__" + n];
          if (x != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (Mr(x)) {
              var [m, ...w] = x;
              m.apply(i, [e, ...w]);
            } else
              x.call(i, e);
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
      e.__root = t, delete e.currentTarget, _t(l), jt(f);
    }
  }
}
function Zr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function fu(e, t) {
  var u = (
    /** @type {Effect} */
    Q
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  var u = (t & Ic) !== 0, n = (t & Lc) !== 0, r, i = !e.startsWith("<!>");
  return () => {
    r === void 0 && (r = Zr(i ? e : "<!>" + e), u || (r = /** @type {Node} */
    /* @__PURE__ */ bt(r)));
    var o = (
      /** @type {TemplateNode} */
      n || qo ? document.importNode(r, !0) : r.cloneNode(!0)
    );
    if (u) {
      var s = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      fu(s, a);
    } else
      fu(o, o);
    return o;
  };
}
// @__NO_SIDE_EFFECTS__
function b0(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        Zr(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ bt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ bt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return fu(a, a), a;
  };
}
function Se() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = An();
  return e.append(t, u), fu(t, u), e;
}
function G(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function iu(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function tr(e, t) {
  return g0(e, t);
}
const uu = /* @__PURE__ */ new Map();
function g0(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  qc();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = f0(p);
        t.addEventListener(p, Tu, { passive: d });
        var x = uu.get(p);
        x === void 0 ? (document.addEventListener(p, Tu, { passive: d }), uu.set(p, 1)) : uu.set(p, x + 1);
      }
    }
  };
  a(Ir(os)), Er.add(a);
  var c = void 0, l = Vc(() => {
    var f = u != null ? u : t.appendChild(An());
    return Kt(() => {
      if (i) {
        mu({});
        var h = (
          /** @type {ComponentContext} */
          ae
        );
        h.c = i;
      }
      r && (n.$$events = r), c = e(f, n) || {}, i && _u();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, Tu);
        var p = (
          /** @type {number} */
          uu.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, Tu), uu.delete(h)) : uu.set(h, p);
      }
      Er.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return m0.set(c, l), c;
}
let m0 = /* @__PURE__ */ new WeakMap();
function Ie(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = je, a = u > 0 ? zu : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? Nu(i) : p && (i = Kt(() => p(r))), o && lu(o, () => {
      o = null;
    })) : (o ? Nu(o) : p && (o = Kt(() => p(r, [u + 1, n]))), i && lu(i, () => {
      i = null;
    })));
  };
  qu(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function as(e, t) {
  return t;
}
function _0(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    Vr(t[o].e, r, !0);
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
    ), n.clear(), Rt(e, t[0].prev, t[i - 1].next);
  }
  Jo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), Rt(e, l.prev, l.next)), At(l.e, !s);
    }
  });
}
function Kr(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & Lo) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(An());
  }
  var l = null, f = !1, h = /* @__PURE__ */ Ur(() => {
    var p = u();
    return Mr(p) ? p : p == null ? [] : Ir(p);
  });
  qu(() => {
    var p = F(h), d = p.length;
    f && d === 0 || (f = d === 0, x0(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? Nu(l) : l = Kt(() => i(o)) : l !== null && lu(l, () => {
      l = null;
    })), F(h));
  });
}
function x0(e, t, u, n, r, i, o) {
  var z, U, ie, Pe;
  var s = (r & Tc) !== 0, a = (r & (jr | zr)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, x, m = [], w = [], E, _, g, v;
  if (s)
    for (v = 0; v < c; v += 1)
      E = e[v], _ = i(E, v), g = l.get(_), g !== void 0 && ((z = g.a) == null || z.measure(), (x != null ? x : x = /* @__PURE__ */ new Set()).add(g));
  for (v = 0; v < c; v += 1) {
    if (E = e[v], _ = i(E, v), g = l.get(_), g === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = y0(
        A,
        t,
        d,
        d === null ? t.first : d.next,
        E,
        _,
        v,
        n,
        r,
        o
      ), l.set(_, d), m = [], w = [], h = d.next;
      continue;
    }
    if (a && v0(g, E, v, r), (g.e.f & wt) !== 0 && (Nu(g.e), s && ((U = g.a) == null || U.unfix(), (x != null ? x : x = /* @__PURE__ */ new Set()).delete(g))), g !== h) {
      if (p !== void 0 && p.has(g)) {
        if (m.length < w.length) {
          var T = w[0], R;
          d = T.prev;
          var O = m[0], P = m[m.length - 1];
          for (R = 0; R < m.length; R += 1)
            Ii(m[R], T, u);
          for (R = 0; R < w.length; R += 1)
            p.delete(w[R]);
          Rt(t, O.prev, P.next), Rt(t, d, O), Rt(t, P, T), h = T, d = P, v -= 1, m = [], w = [];
        } else
          p.delete(g), Ii(g, h, u), Rt(t, g.prev, g.next), Rt(t, g, d === null ? t.first : d.next), Rt(t, d, g), d = g;
        continue;
      }
      for (m = [], w = []; h !== null && h.k !== _; )
        (h.e.f & wt) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), w.push(h), h = h.next;
      if (h === null)
        continue;
      g = h;
    }
    m.push(g), d = g, h = g.next;
  }
  if (h !== null || p !== void 0) {
    for (var J = p === void 0 ? [] : Ir(p); h !== null; )
      (h.e.f & wt) === 0 && J.push(h), h = h.next;
    var oe = J.length;
    if (oe > 0) {
      var Z = (r & Lo) !== 0 && c === 0 ? u : null;
      if (s) {
        for (v = 0; v < oe; v += 1)
          (ie = J[v].a) == null || ie.measure();
        for (v = 0; v < oe; v += 1)
          (Pe = J[v].a) == null || Pe.fix();
      }
      _0(t, J, Z, l);
    }
  }
  s && $u(() => {
    var ee;
    if (x !== void 0)
      for (g of x)
        (ee = g.a) == null || ee.apply();
  }), Q.first = t.first && t.first.e, Q.last = d && d.e;
}
function v0(e, t, u, n) {
  (n & jr) !== 0 && xr(e.v, t), (n & zr) !== 0 ? xr(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function y0(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & jr) !== 0, f = (a & Fc) === 0, h = l ? f ? /* @__PURE__ */ qr(r) : au(r) : r, p = (a & zr) === 0 ? o : au(o), d = {
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
    return d.e = Kt(() => s(e, h, p, c), Uc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function Ii(e, t, u) {
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
      /* @__PURE__ */ Cn(i)
    );
    r.before(i), i = o;
  }
}
function Rt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function E0(e, t, u = !1, n = !1, r = !1) {
  var i = e, o = "";
  De(() => {
    var l;
    var s = (
      /** @type {Effect} */
      Q
    );
    if (o !== (o = (l = t()) != null ? l : "") && (s.nodes_start !== null && (Zo(
      s.nodes_start,
      /** @type {TemplateNode} */
      s.nodes_end
    ), s.nodes_start = s.nodes_end = null), o !== "")) {
      var a = o + "";
      u ? a = `<svg>${a}</svg>` : n && (a = `<math>${a}</math>`);
      var c = Zr(a);
      if ((u || n) && (c = /** @type {Element} */
      /* @__PURE__ */ bt(c)), fu(
        /** @type {TemplateNode} */
        /* @__PURE__ */ bt(c),
        /** @type {TemplateNode} */
        c.lastChild
      ), u || n)
        for (; /* @__PURE__ */ bt(c); )
          i.before(
            /** @type {Node} */
            /* @__PURE__ */ bt(c)
          );
      else
        i.before(c);
    }
  });
}
function Be(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function cs(e, t, u) {
  var n = e, r, i;
  qu(() => {
    r !== (r = t()) && (i && (lu(i), i = null), r && (i = Kt(() => u(n, r))));
  }, zu);
}
function w0(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  qu(() => {
    const f = t() || null;
    var h = Pc;
    f !== o && (l && (f === null ? lu(l, () => {
      l = null, s = null;
    }) : f === s ? Nu(l) : At(l)), f && f !== s && (l = Kt(() => {
      if (a = document.createElementNS(h, f), fu(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(An())
        );
        n(a, p);
      }
      Q.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, zu);
}
function Fn(e, t) {
  $u(() => {
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
function ls(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = ls(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function k0() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = ls(e)) && (n && (n += " "), n += t);
  return n;
}
function A0(e) {
  return typeof e == "object" ? k0(e) : e != null ? e : "";
}
const Li = [...` 	
\r\f \v\uFEFF`];
function C0(e, t, u) {
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
function ur(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function D0(e, t) {
  if (t) {
    var u = "", n, r;
    if (Array.isArray(t) ? (n = t[0], r = t[1]) : n = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, o = 0, s = !1, a = [];
      n && a.push(...Object.keys(n).map(ur)), r && a.push(...Object.keys(r).map(ur));
      var c = 0, l = -1;
      const x = e.length;
      for (var f = 0; f < x; f++) {
        var h = e[f];
        if (s ? h === "/" && e[f - 1] === "*" && (s = !1) : i ? i === h && (i = !1) : h === "/" && e[f + 1] === "*" ? s = !0 : h === '"' || h === "'" ? i = h : h === "(" ? o++ : h === ")" && o--, !s && i === !1 && o === 0) {
          if (h === ":" && l === -1)
            l = f;
          else if (h === ";" || f === x - 1) {
            if (l !== -1) {
              var p = ur(e.substring(c, l).trim());
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
function Et(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u || o === void 0) {
    var s = C0(u, n, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  } else if (i && r !== i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
function nr(e, t = {}, u, n) {
  for (var r in u) {
    var i = u[r];
    t[r] !== i && (u[r] == null ? e.style.removeProperty(r) : e.style.setProperty(r, i, n));
  }
}
function du(e, t, u, n) {
  var r = e.__style;
  if (r !== t) {
    var i = D0(t, n);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e.__style = t;
  } else n && (Array.isArray(n) ? (nr(e, u == null ? void 0 : u[0], n[0]), nr(e, u == null ? void 0 : u[1], n[1], "important")) : nr(e, u, n));
  return n;
}
const Cu = Symbol("class"), Du = Symbol("style"), fs = Symbol("is custom element"), ds = Symbol("is html");
function S0(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function tt(e, t, u, n) {
  var r = hs(e);
  r[t] !== (r[t] = u) && (t === "loading" && (e[xc] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && ps(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function Pi(e, t, u, n, r = !1) {
  var E;
  var i = hs(e), o = i[fs], s = !i[ds], a = t || {}, c = e.tagName === "OPTION";
  for (var l in t)
    l in u || (u[l] = null);
  u.class ? u.class = A0(u.class) : u[Cu] && (u.class = null), u[Du] && ((E = u.style) != null || (u.style = null));
  var f = ps(e);
  for (const _ in u) {
    let g = u[_];
    if (c && _ === "value" && g == null) {
      e.value = e.__value = "", a[_] = g;
      continue;
    }
    if (_ === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Et(e, h, g, n, t == null ? void 0 : t[Cu], u[Cu]), a[_] = g, a[Cu] = u[Cu];
      continue;
    }
    if (_ === "style") {
      du(e, g, t == null ? void 0 : t[Du], u[Du]), a[_] = g, a[Du] = u[Du];
      continue;
    }
    var p = a[_];
    if (g !== p) {
      a[_] = g;
      var d = _[0] + _[1];
      if (d !== "$$")
        if (d === "on") {
          const v = {}, A = "$$" + _;
          let T = _.slice(2);
          var x = s0(T);
          if (i0(T) && (T = T.slice(0, -7), v.capture = !0), !x && p) {
            if (g != null) continue;
            e.removeEventListener(T, a[A], v), a[A] = null;
          }
          if (g != null)
            if (x)
              e[`__${T}`] = g, Tn([T]);
            else {
              let R = function(O) {
                a[_].call(this, O);
              };
              a[A] = ss(T, e, R, v);
            }
          else x && (e[`__${T}`] = void 0);
        } else if (_ === "style")
          tt(e, _, g);
        else if (_ === "autofocus")
          d0(
            /** @type {HTMLElement} */
            e,
            !!g
          );
        else if (!o && (_ === "__value" || _ === "value" && g != null))
          e.value = e.__value = g;
        else if (_ === "selected" && c)
          S0(
            /** @type {HTMLOptionElement} */
            e,
            g
          );
        else {
          var m = _;
          s || (m = c0(m));
          var w = m === "defaultValue" || m === "defaultChecked";
          if (g == null && !o && !w)
            if (i[_] = null, m === "value" || m === "checked") {
              let v = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (m === "value") {
                let T = v.defaultValue;
                v.removeAttribute(m), v.defaultValue = T, v.value = v.__value = A ? T : null;
              } else {
                let T = v.defaultChecked;
                v.removeAttribute(m), v.defaultChecked = T, v.checked = A ? T : !1;
              }
            } else
              e.removeAttribute(_);
          else w || f.includes(m) && (o || typeof g != "string") ? e[m] = g : typeof g != "function" && tt(e, m, g);
        }
    }
  }
  return a;
}
function hs(e) {
  var t;
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    (t = e.__attributes) != null ? t : e.__attributes = {
      [fs]: e.nodeName.includes("-"),
      [ds]: e.namespaceURI === Bc
    }
  );
}
var ji = /* @__PURE__ */ new Map();
function ps(e) {
  var t = ji.get(e.nodeName);
  if (t) return t;
  ji.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = Fo(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = Lr(n);
  }
  return t;
}
function T0(e, t, u = t) {
  var n = Uu();
  p0(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = rr(e) ? ir(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Jt(t) == null && e.value && u(rr(e) ? ir(e.value) : e.value), Wr(() => {
    var r = t();
    rr(e) && r === ir(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function rr(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function ir(e) {
  return e === "" ? null : +e;
}
function zi(e, t) {
  return e === t || (e == null ? void 0 : e[Pt]) === t;
}
function an(e = {}, t, u, n) {
  return Hr(() => {
    var r, i;
    return Wr(() => {
      r = i, i = [], Jt(() => {
        e !== u(...i) && (t(e, ...i), r && zi(u(...r), e) && t(null, ...r));
      });
    }), () => {
      $u(() => {
        i && zi(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function F0(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ae
  ), u = t.l.u;
  if (!u) return;
  let n = () => r0(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ su(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== i[c] && (i[c] = a[c], s = !0);
      return s && r++, r;
    });
    n = () => F(o);
  }
  u.b.length && Wc(() => {
    Ui(t, n), Ru(u.b);
  }), cu(() => {
    const r = Jt(() => u.m.map(bc));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && cu(() => {
    Ui(t, n), Ru(u.a);
  });
}
function Ui(e, t) {
  if (e.l.s)
    for (const u of e.l.s) F(u);
  t();
}
function Jr(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), Bt;
  const n = Jt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const nu = [];
function R0(e, t) {
  return {
    subscribe: bs(e, t).subscribe
  };
}
function bs(e, t = Bt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (Io(e, s) && (e = s, u)) {
      const a = !nu.length;
      for (const c of n)
        c[1](), nu.push(c, e);
      if (a) {
        for (let c = 0; c < nu.length; c += 2)
          nu[c][0](nu[c + 1]);
        nu.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = Bt) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (u = t(r, i) || Bt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function O0(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return R0(u, (o, s) => {
    let a = !1;
    const c = [];
    let l = 0, f = Bt;
    const h = () => {
      if (l)
        return;
      f();
      const d = t(n ? c[0] : c, o, s);
      i ? o(d) : f = typeof d == "function" ? d : Bt;
    }, p = r.map(
      (d, x) => Jr(
        d,
        (m) => {
          c[x] = m, l &= ~(1 << x), a && h();
        },
        () => {
          l |= 1 << x;
        }
      )
    );
    return a = !0, h(), function() {
      Ru(p), f(), a = !1;
    };
  });
}
function gs(e) {
  let t;
  return Jr(e, (u) => t = u)(), t;
}
let nn = !1, wr = Symbol();
function N0(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ qr(void 0),
    unsubscribe: Bt
  };
  if (n.store !== e && !(wr in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = Bt;
    else {
      var r = !0;
      n.unsubscribe = Jr(e, (o) => {
        r ? n.source.v = o : ce(n.source, o);
      }), r = !1;
    }
  return e && wr in u ? gs(e) : F(n.source);
}
function M0() {
  const e = {};
  function t() {
    $r(() => {
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
function I0(e) {
  var t = nn;
  try {
    return nn = !1, [e(), nn];
  } finally {
    nn = t;
  }
}
const L0 = {
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
function B0(e, t, u) {
  return new Proxy(
    { props: e, exclude: t },
    L0
  );
}
const P0 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return F(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, u) {
    return t in e.special || (e.special[t] = rt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      Bo
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
  return new Proxy({ props: e, exclude: t, special: {}, version: au(0) }, P0);
}
const j0 = {
  get(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (Au(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, u) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      Au(r) && (r = r());
      const i = Lt(r, t);
      if (i && i.set)
        return i.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (Au(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = Lt(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === Pt || t === No) return !1;
    for (let u of e.props)
      if (Au(u) && (u = u()), u != null && t in u) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let u of e.props) {
      Au(u) && (u = u());
      for (const n in u)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function We(...e) {
  return new Proxy({ props: e }, j0);
}
function qi(e) {
  var t, u;
  return (u = (t = e.ctx) == null ? void 0 : t.d) != null ? u : !1;
}
function rt(e, t, u, n) {
  var A, T;
  var r = (u & Rc) !== 0, i = !gu || (u & Oc) !== 0, o = (u & Nc) !== 0, s = (u & Mc) !== 0, a = !1, c;
  o ? [c, a] = I0(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = Pt in e || No in e, f = o && ((T = (A = Lt(e, t)) == null ? void 0 : A.set) != null ? T : l && t in e && ((R) => e[t] = R)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, x = () => (d = !0, p && (p = !1, s ? h = Jt(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && kc(), c = x(), f && f(c));
  var m;
  if (i)
    m = () => {
      var R = (
        /** @type {V} */
        e[t]
      );
      return R === void 0 ? x() : (p = !0, d = !1, R);
    };
  else {
    var w = (r ? su : Ur)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    w.f |= mc, m = () => {
      var R = F(w);
      return R !== void 0 && (h = /** @type {V} */
      void 0), R === void 0 ? h : R;
    };
  }
  if ((u & Bo) === 0)
    return m;
  if (f) {
    var E = e.$$legacy;
    return function(R, O) {
      return arguments.length > 0 ? ((!i || !O || E || a) && f(O ? m() : R), R) : m();
    };
  }
  var _ = !1, g = /* @__PURE__ */ qr(c), v = /* @__PURE__ */ su(() => {
    var R = m(), O = F(g);
    return _ ? (_ = !1, O) : g.v = R;
  });
  return o && F(v), r || (v.equals = Pr), function(R, O) {
    if (arguments.length > 0) {
      const P = O ? F(v) : i && o ? Wt(R) : R;
      if (!v.equals(P)) {
        if (_ = !0, ce(g, P), d && h !== void 0 && (h = P), qi(v))
          return R;
        Jt(() => F(v));
      }
      return R;
    }
    return qi(v) ? v.v : F(v);
  };
}
function ms(e) {
  ae === null && jc(), gu && ae.l !== null ? z0(ae).m.push(e) : cu(() => {
    const t = Jt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function z0(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const U0 = "5";
var Co, Do, So;
typeof window != "undefined" && ((So = (Do = (Co = window.__svelte) != null ? Co : window.__svelte = {}).v) != null ? So : Do.v = /* @__PURE__ */ new Set()).add(U0);
function _s(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: q0 } = Object.prototype, { getPrototypeOf: Xr } = Object, { iterator: Rn, toStringTag: xs } = Symbol, On = /* @__PURE__ */ ((e) => (t) => {
  const u = q0.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), at = (e) => (e = e.toLowerCase(), (t) => On(t) === e), Nn = (e) => (t) => typeof t === e, { isArray: vu } = Array, Iu = Nn("undefined");
function $0(e) {
  return e !== null && !Iu(e) && e.constructor !== null && !Iu(e.constructor) && Ue(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const vs = at("ArrayBuffer");
function H0(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && vs(e.buffer), t;
}
const W0 = Nn("string"), Ue = Nn("function"), ys = Nn("number"), Mn = (e) => e !== null && typeof e == "object", V0 = (e) => e === !0 || e === !1, cn = (e) => {
  if (On(e) !== "object")
    return !1;
  const t = Xr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(xs in e) && !(Rn in e);
}, G0 = at("Date"), Z0 = at("File"), K0 = at("Blob"), J0 = at("FileList"), X0 = (e) => Mn(e) && Ue(e.pipe), Y0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Ue(e.append) && ((t = On(e)) === "formdata" || // detect form-data instance
  t === "object" && Ue(e.toString) && e.toString() === "[object FormData]"));
}, Q0 = at("URLSearchParams"), [el, tl, ul, nl] = ["ReadableStream", "Request", "Response", "Headers"].map(at), rl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Vu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), vu(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const i = u ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function Es(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const Vt = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, ws = (e) => !Iu(e) && e !== Vt;
function kr() {
  const { caseless: e } = ws(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && Es(t, r) || r;
    cn(t[i]) && cn(n) ? t[i] = kr(t[i], n) : cn(n) ? t[i] = kr({}, n) : vu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Vu(arguments[n], u);
  return t;
}
const il = (e, t, u, { allOwnKeys: n } = {}) => (Vu(t, (r, i) => {
  u && Ue(r) ? e[i] = _s(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), ol = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), sl = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, al = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && Xr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, cl = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, ll = (e) => {
  if (!e) return null;
  if (vu(e)) return e;
  let t = e.length;
  if (!ys(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, fl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Xr(Uint8Array)), dl = (e, t) => {
  const n = (e && e[Rn]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, hl = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, pl = at("HTMLFormElement"), bl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), $i = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), gl = at("RegExp"), ks = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  Vu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, ml = (e) => {
  ks(e, (t, u) => {
    if (Ue(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (Ue(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, _l = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return vu(e) ? n(e) : n(String(e).split(t)), u;
}, xl = () => {
}, vl = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function yl(e) {
  return !!(e && Ue(e.append) && e[xs] === "FormData" && e[Rn]);
}
const El = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (Mn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = vu(n) ? [] : {};
        return Vu(n, (o, s) => {
          const a = u(o, r + 1);
          !Iu(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, wl = at("AsyncFunction"), kl = (e) => e && (Mn(e) || Ue(e)) && Ue(e.then) && Ue(e.catch), As = ((e, t) => e ? setImmediate : t ? ((u, n) => (Vt.addEventListener("message", ({ source: r, data: i }) => {
  r === Vt && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), Vt.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  Ue(Vt.postMessage)
), Al = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Vt) : typeof process != "undefined" && process.nextTick || As, Cl = (e) => e != null && Ue(e[Rn]), y = {
  isArray: vu,
  isArrayBuffer: vs,
  isBuffer: $0,
  isFormData: Y0,
  isArrayBufferView: H0,
  isString: W0,
  isNumber: ys,
  isBoolean: V0,
  isObject: Mn,
  isPlainObject: cn,
  isReadableStream: el,
  isRequest: tl,
  isResponse: ul,
  isHeaders: nl,
  isUndefined: Iu,
  isDate: G0,
  isFile: Z0,
  isBlob: K0,
  isRegExp: gl,
  isFunction: Ue,
  isStream: X0,
  isURLSearchParams: Q0,
  isTypedArray: fl,
  isFileList: J0,
  forEach: Vu,
  merge: kr,
  extend: il,
  trim: rl,
  stripBOM: ol,
  inherits: sl,
  toFlatObject: al,
  kindOf: On,
  kindOfTest: at,
  endsWith: cl,
  toArray: ll,
  forEachEntry: dl,
  matchAll: hl,
  isHTMLForm: pl,
  hasOwnProperty: $i,
  hasOwnProp: $i,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: ks,
  freezeMethods: ml,
  toObjectSet: _l,
  toCamelCase: bl,
  noop: xl,
  toFiniteNumber: vl,
  findKey: Es,
  global: Vt,
  isContextDefined: ws,
  isSpecCompliantForm: yl,
  toJSONObject: El,
  isAsyncFn: wl,
  isThenable: kl,
  setImmediate: As,
  asap: Al,
  isIterable: Cl
};
function H(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
y.inherits(H, Error, {
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
const Cs = H.prototype, Ds = {};
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
  Ds[e] = { value: e };
});
Object.defineProperties(H, Ds);
Object.defineProperty(Cs, "isAxiosError", { value: !0 });
H.from = (e, t, u, n, r, i) => {
  const o = Object.create(Cs);
  return y.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), H.call(o, e.message, t, u, n, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Dl = null;
function Ar(e) {
  return y.isPlainObject(e) || y.isArray(e);
}
function Ss(e) {
  return y.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Hi(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = Ss(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function Sl(e) {
  return y.isArray(e) && !e.some(Ar);
}
const Tl = y.toFlatObject(y, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function In(e, t, u) {
  if (!y.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = y.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, m) {
    return !y.isUndefined(m[x]);
  });
  const n = u.metaTokens, r = u.visitor || l, i = u.dots, o = u.indexes, a = (u.Blob || typeof Blob != "undefined" && Blob) && y.isSpecCompliantForm(t);
  if (!y.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (y.isDate(d))
      return d.toISOString();
    if (!a && y.isBlob(d))
      throw new H("Blob is not supported. Use a Buffer instead.");
    return y.isArrayBuffer(d) || y.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, x, m) {
    let w = d;
    if (d && !m && typeof d == "object") {
      if (y.endsWith(x, "{}"))
        x = n ? x : x.slice(0, -2), d = JSON.stringify(d);
      else if (y.isArray(d) && Sl(d) || (y.isFileList(d) || y.endsWith(x, "[]")) && (w = y.toArray(d)))
        return x = Ss(x), w.forEach(function(_, g) {
          !(y.isUndefined(_) || _ === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Hi([x], g, i) : o === null ? x : x + "[]",
            c(_)
          );
        }), !1;
    }
    return Ar(d) ? !0 : (t.append(Hi(m, x, i), c(d)), !1);
  }
  const f = [], h = Object.assign(Tl, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: Ar
  });
  function p(d, x) {
    if (!y.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      f.push(d), y.forEach(d, function(w, E) {
        (!(y.isUndefined(w) || w === null) && r.call(
          t,
          w,
          y.isString(E) ? E.trim() : E,
          x,
          h
        )) === !0 && p(w, x ? x.concat(E) : [E]);
      }), f.pop();
    }
  }
  if (!y.isObject(e))
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
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Yr(e, t) {
  this._pairs = [], e && In(e, this, t);
}
const Ts = Yr.prototype;
Ts.append = function(t, u) {
  this._pairs.push([t, u]);
};
Ts.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, Wi);
  } : Wi;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function Fl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Fs(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || Fl;
  y.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = y.isURLSearchParams(t) ? t.toString() : new Yr(t, u).toString(n), i) {
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
const Rs = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Rl = typeof URLSearchParams != "undefined" ? URLSearchParams : Yr, Ol = typeof FormData != "undefined" ? FormData : null, Nl = typeof Blob != "undefined" ? Blob : null, Ml = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Rl,
    FormData: Ol,
    Blob: Nl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Qr = typeof window != "undefined" && typeof document != "undefined", Cr = typeof navigator == "object" && navigator || void 0, Il = Qr && (!Cr || ["ReactNative", "NativeScript", "NS"].indexOf(Cr.product) < 0), Ll = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Bl = Qr && window.location.href || "http://localhost", Pl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Qr,
  hasStandardBrowserEnv: Il,
  hasStandardBrowserWebWorkerEnv: Ll,
  navigator: Cr,
  origin: Bl
}, Symbol.toStringTag, { value: "Module" })), Re = se(se({}, Pl), Ml);
function jl(e, t) {
  return In(e, new Re.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return Re.isNode && y.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function zl(e) {
  return y.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Ul(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let i;
  for (n = 0; n < r; n++)
    i = u[n], t[i] = e[i];
  return t;
}
function Os(e) {
  function t(u, n, r, i) {
    let o = u[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= u.length;
    return o = !o && y.isArray(r) ? r.length : o, a ? (y.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !y.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && y.isArray(r[o]) && (r[o] = Ul(r[o])), !s);
  }
  if (y.isFormData(e) && y.isFunction(e.entries)) {
    const u = {};
    return y.forEachEntry(e, (n, r) => {
      t(zl(n), r, u, 0);
    }), u;
  }
  return null;
}
function ql(e, t, u) {
  if (y.isString(e))
    try {
      return (t || JSON.parse)(e), y.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const Gu = {
  transitional: Rs,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, i = y.isObject(t);
    if (i && y.isHTMLForm(t) && (t = new FormData(t)), y.isFormData(t))
      return r ? JSON.stringify(Os(t)) : t;
    if (y.isArrayBuffer(t) || y.isBuffer(t) || y.isStream(t) || y.isFile(t) || y.isBlob(t) || y.isReadableStream(t))
      return t;
    if (y.isArrayBufferView(t))
      return t.buffer;
    if (y.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return jl(t, this.formSerializer).toString();
      if ((s = y.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return In(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), ql(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || Gu.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (y.isResponse(t) || y.isReadableStream(t))
      return t;
    if (t && y.isString(t) && (n && !this.responseType || r)) {
      const o = !(u && u.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? H.from(s, H.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
  Gu.headers[e] = {};
});
const $l = y.toObjectSet([
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
]), Hl = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && $l[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, Gi = Symbol("internals");
function Su(e) {
  return e && String(e).trim().toLowerCase();
}
function ln(e) {
  return e === !1 || e == null ? e : y.isArray(e) ? e.map(ln) : String(e);
}
function Wl(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Vl = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function or(e, t, u, n, r) {
  if (y.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!y.isString(t)) {
    if (y.isString(n))
      return t.indexOf(n) !== -1;
    if (y.isRegExp(n))
      return n.test(t);
  }
}
function Gl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function Zl(e, t) {
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
let qe = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = Su(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = y.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = ln(s));
    }
    const o = (s, a) => y.forEach(s, (c, l) => i(c, l, a));
    if (y.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (y.isString(t) && (t = t.trim()) && !Vl(t))
      o(Hl(t), u);
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
    if (t = Su(t), t) {
      const n = y.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return Wl(r);
        if (y.isFunction(u))
          return u.call(this, r, n);
        if (y.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = Su(t), t) {
      const n = y.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || or(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = Su(o), o) {
        const s = y.findKey(n, o);
        s && (!u || or(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return y.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const i = u[n];
      (!t || or(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return y.forEach(this, (r, i) => {
      const o = y.findKey(n, i);
      if (o) {
        u[o] = ln(r), delete u[i];
        return;
      }
      const s = t ? Gl(i) : String(i).trim();
      s !== i && delete u[i], u[s] = ln(r), n[s] = !0;
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
    const n = (this[Gi] = this[Gi] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = Su(o);
      n[s] || (Zl(r, o), n[s] = !0);
    }
    return y.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
qe.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
y.reduceDescriptors(qe.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
y.freezeMethods(qe);
function sr(e, t) {
  const u = this || Gu, n = t || u, r = qe.from(n.headers);
  let i = n.data;
  return y.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Ns(e) {
  return !!(e && e.__CANCEL__);
}
function yu(e, t, u) {
  H.call(this, e == null ? "canceled" : e, H.ERR_CANCELED, t, u), this.name = "CanceledError";
}
y.inherits(yu, H, {
  __CANCEL__: !0
});
function Ms(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new H(
    "Request failed with status code " + u.status,
    [H.ERR_BAD_REQUEST, H.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function Kl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Jl(e, t) {
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
function Xl(e, t) {
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
const _n = (e, t, u = 3) => {
  let n = 0;
  const r = Jl(50, 250);
  return Xl((i) => {
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
}, Zi = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, Ki = (e) => (...t) => y.asap(() => e(...t)), Yl = Re.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, Re.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(Re.origin),
  Re.navigator && /(msie|trident)/i.test(Re.navigator.userAgent)
) : () => !0, Ql = Re.hasStandardBrowserEnv ? (
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
function ef(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function tf(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Is(e, t, u) {
  let n = !ef(t);
  return e && (n || u == !1) ? tf(e, t) : t;
}
const Ji = (e) => e instanceof qe ? se({}, e) : e;
function Xt(e, t) {
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
    headers: (c, l, f) => r(Ji(c), Ji(l), f, !0)
  };
  return y.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    y.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const Ls = (e) => {
  const t = Xt({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = qe.from(o), t.url = Fs(Is(t.baseURL, t.url, t.allowAbsoluteUrls), e.params, e.paramsSerializer), s && o.set(
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
  if (Re.hasStandardBrowserEnv && (n && y.isFunction(n) && (n = n(t)), n || n !== !1 && Yl(t.url))) {
    const c = r && i && Ql.read(i);
    c && o.set(r, c);
  }
  return t;
}, uf = typeof XMLHttpRequest != "undefined", nf = uf && function(e) {
  return new Promise(function(u, n) {
    const r = Ls(e);
    let i = r.data;
    const o = qe.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function x() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let m = new XMLHttpRequest();
    m.open(r.method.toUpperCase(), r.url, !0), m.timeout = r.timeout;
    function w() {
      if (!m)
        return;
      const _ = qe.from(
        "getAllResponseHeaders" in m && m.getAllResponseHeaders()
      ), v = {
        data: !s || s === "text" || s === "json" ? m.responseText : m.response,
        status: m.status,
        statusText: m.statusText,
        headers: _,
        config: e,
        request: m
      };
      Ms(function(T) {
        u(T), x();
      }, function(T) {
        n(T), x();
      }, v), m = null;
    }
    "onloadend" in m ? m.onloadend = w : m.onreadystatechange = function() {
      !m || m.readyState !== 4 || m.status === 0 && !(m.responseURL && m.responseURL.indexOf("file:") === 0) || setTimeout(w);
    }, m.onabort = function() {
      m && (n(new H("Request aborted", H.ECONNABORTED, e, m)), m = null);
    }, m.onerror = function() {
      n(new H("Network Error", H.ERR_NETWORK, e, m)), m = null;
    }, m.ontimeout = function() {
      let g = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const v = r.transitional || Rs;
      r.timeoutErrorMessage && (g = r.timeoutErrorMessage), n(new H(
        g,
        v.clarifyTimeoutError ? H.ETIMEDOUT : H.ECONNABORTED,
        e,
        m
      )), m = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in m && y.forEach(o.toJSON(), function(g, v) {
      m.setRequestHeader(v, g);
    }), y.isUndefined(r.withCredentials) || (m.withCredentials = !!r.withCredentials), s && s !== "json" && (m.responseType = r.responseType), c && ([h, d] = _n(c, !0), m.addEventListener("progress", h)), a && m.upload && ([f, p] = _n(a), m.upload.addEventListener("progress", f), m.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (_) => {
      m && (n(!_ || _.type ? new yu(null, e, m) : _), m.abort(), m = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const E = Kl(r.url);
    if (E && Re.protocols.indexOf(E) === -1) {
      n(new H("Unsupported protocol " + E + ":", H.ERR_BAD_REQUEST, e));
      return;
    }
    m.send(i || null);
  });
}, rf = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof H ? l : new yu(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new H(`timeout ${t} of ms exceeded`, H.ETIMEDOUT));
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
}, of = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, sf = function(e, t) {
  return Yn(this, null, function* () {
    try {
      for (var u = Ai(af(e)), n, r, i; n = !(r = yield new Ht(u.next())).done; n = !1) {
        const o = r.value;
        yield* Qn(of(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        n && (r = u.return) && (yield new Ht(r.call(u)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, af = function(e) {
  return Yn(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* Qn(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: u, value: n } = yield new Ht(t.read());
        if (u)
          break;
        yield n;
      }
    } finally {
      yield new Ht(t.cancel());
    }
  });
}, Xi = (e, t, u, n) => {
  const r = sf(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    pull(c) {
      return Ee(this, null, function* () {
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
}, Ln = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", Bs = Ln && typeof ReadableStream == "function", cf = Ln && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => Ee(null, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), Ps = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, lf = Bs && Ps(() => {
  let e = !1;
  const t = new Request(Re.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Yi = 64 * 1024, Dr = Bs && Ps(() => y.isReadableStream(new Response("").body)), xn = {
  stream: Dr && ((e) => e.body)
};
Ln && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !xn[t] && (xn[t] = y.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new H(`Response type '${t}' is not supported`, H.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const ff = (e) => Ee(null, null, function* () {
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
    return (yield cf(e)).byteLength;
}), df = (e, t) => Ee(null, null, function* () {
  const u = y.toFiniteNumber(e.getContentLength());
  return u == null ? ff(t) : u;
}), hf = Ln && ((e) => Ee(null, null, function* () {
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
  } = Ls(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = rf([r, i && i.toAbortSignal()], o), d;
  const x = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let m;
  try {
    if (a && lf && u !== "get" && u !== "head" && (m = yield df(l, n)) !== 0) {
      let v = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), A;
      if (y.isFormData(n) && (A = v.headers.get("content-type")) && l.setContentType(A), v.body) {
        const [T, R] = Zi(
          m,
          _n(Ki(a))
        );
        n = Xi(v.body, Yi, T, R);
      }
    }
    y.isString(f) || (f = f ? "include" : "omit");
    const w = "credentials" in Request.prototype;
    d = new Request(t, ye(se({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: w ? f : void 0
    }));
    let E = yield fetch(d);
    const _ = Dr && (c === "stream" || c === "response");
    if (Dr && (s || _ && x)) {
      const v = {};
      ["status", "statusText", "headers"].forEach((O) => {
        v[O] = E[O];
      });
      const A = y.toFiniteNumber(E.headers.get("content-length")), [T, R] = s && Zi(
        A,
        _n(Ki(s), !0)
      ) || [];
      E = new Response(
        Xi(E.body, Yi, T, () => {
          R && R(), x && x();
        }),
        v
      );
    }
    c = c || "text";
    let g = yield xn[y.findKey(xn, c) || "text"](E, e);
    return !_ && x && x(), yield new Promise((v, A) => {
      Ms(v, A, {
        data: g,
        headers: qe.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: d
      });
    });
  } catch (w) {
    throw x && x(), w && w.name === "TypeError" && /Load failed|fetch/i.test(w.message) ? Object.assign(
      new H("Network Error", H.ERR_NETWORK, e, d),
      {
        cause: w.cause || w
      }
    ) : H.from(w, w && w.code, e, d);
  }
})), Sr = {
  http: Dl,
  xhr: nf,
  fetch: hf
};
y.forEach(Sr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (u) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Qi = (e) => `- ${e}`, pf = (e) => y.isFunction(e) || e === null || e === !1, js = {
  getAdapter: (e) => {
    e = y.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !pf(u) && (n = Sr[(o = String(u)).toLowerCase()], n === void 0))
        throw new H(`Unknown adapter '${o}'`);
      if (n)
        break;
      r[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Qi).join(`
`) : " " + Qi(i[0]) : "as no adapter specified";
      throw new H(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: Sr
};
function ar(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new yu(null, e);
}
function eo(e) {
  return ar(e), e.headers = qe.from(e.headers), e.data = sr.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), js.getAdapter(e.adapter || Gu.adapter)(e).then(function(n) {
    return ar(e), n.data = sr.call(
      e,
      e.transformResponse,
      n
    ), n.headers = qe.from(n.headers), n;
  }, function(n) {
    return Ns(n) || (ar(e), n && n.response && (n.response.data = sr.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = qe.from(n.response.headers))), Promise.reject(n);
  });
}
const zs = "1.9.0", Bn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const to = {};
Bn.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + zs + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new H(
        r(o, " has been removed" + (u ? " in " + u : "")),
        H.ERR_DEPRECATED
      );
    return u && !to[o] && (to[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
Bn.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function bf(e, t, u) {
  if (typeof e != "object")
    throw new H("options must be an object", H.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new H("option " + i + " must be " + a, H.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new H("Unknown option " + i, H.ERR_BAD_OPTION);
  }
}
const fn = {
  assertOptions: bf,
  validators: Bn
}, ht = fn.validators;
let Zt = class {
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
    return Ee(this, null, function* () {
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
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = Xt(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: i } = u;
    n !== void 0 && fn.assertOptions(n, {
      silentJSONParsing: ht.transitional(ht.boolean),
      forcedJSONParsing: ht.transitional(ht.boolean),
      clarifyTimeoutError: ht.transitional(ht.boolean)
    }, !1), r != null && (y.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : fn.assertOptions(r, {
      encode: ht.function,
      serialize: ht.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), fn.assertOptions(u, {
      baseUrl: ht.spelling("baseURL"),
      withXsrfToken: ht.spelling("withXSRFToken")
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
    ), u.headers = qe.concat(o, i);
    const s = [];
    let a = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(u) === !1 || (a = a && x.synchronous, s.unshift(x.fulfilled, x.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(x) {
      c.push(x.fulfilled, x.rejected);
    });
    let l, f = 0, h;
    if (!a) {
      const d = [eo.bind(this), void 0];
      for (d.unshift.apply(d, s), d.push.apply(d, c), h = d.length, l = Promise.resolve(u); f < h; )
        l = l.then(d[f++], d[f++]);
      return l;
    }
    h = s.length;
    let p = u;
    for (f = 0; f < h; ) {
      const d = s[f++], x = s[f++];
      try {
        p = d(p);
      } catch (m) {
        x.call(this, m);
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
    t = Xt(this.defaults, t);
    const u = Is(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Fs(u, t.params, t.paramsSerializer);
  }
};
y.forEach(["delete", "get", "head", "options"], function(t) {
  Zt.prototype[t] = function(u, n) {
    return this.request(Xt(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
y.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(i, o, s) {
      return this.request(Xt(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Zt.prototype[t] = u(), Zt.prototype[t + "Form"] = u(!0);
});
let gf = class Us {
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
      n.reason || (n.reason = new yu(i, o, s), u(n.reason));
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
      token: new Us(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function mf(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function _f(e) {
  return y.isObject(e) && e.isAxiosError === !0;
}
const Tr = {
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
Object.entries(Tr).forEach(([e, t]) => {
  Tr[t] = e;
});
function qs(e) {
  const t = new Zt(e), u = _s(Zt.prototype.request, t);
  return y.extend(u, Zt.prototype, t, { allOwnKeys: !0 }), y.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return qs(Xt(e, r));
  }, u;
}
const le = qs(Gu);
le.Axios = Zt;
le.CanceledError = yu;
le.CancelToken = gf;
le.isCancel = Ns;
le.VERSION = zs;
le.toFormData = In;
le.AxiosError = H;
le.Cancel = le.CanceledError;
le.all = function(t) {
  return Promise.all(t);
};
le.spread = mf;
le.isAxiosError = _f;
le.mergeConfig = Xt;
le.AxiosHeaders = qe;
le.formToJSON = (e) => Os(y.isHTMLForm(e) ? new FormData(e) : e);
le.getAdapter = js.getAdapter;
le.HttpStatusCode = Tr;
le.default = le;
const {
  Axios: Rp,
  AxiosError: Op,
  CanceledError: Np,
  isCancel: Mp,
  CancelToken: Ip,
  VERSION: Lp,
  all: Bp,
  Cancel: Pp,
  isAxiosError: jp,
  spread: zp,
  toFormData: Up,
  AxiosHeaders: qp,
  HttpStatusCode: $p,
  formToJSON: Hp,
  getAdapter: Wp,
  mergeConfig: Vp
} = le, xf = le.create({
  baseURL: "https://beta.fluentbot.ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), vf = le.create({
  baseURL: "https://beta.fluentbot.ai/ai",
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
}), yf = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null,
  hasMore: !0,
  currentPage: 1
}, Je = bs(yf);
O0(
  Je,
  (e) => e.messages.map((t) => ye(se({}, t), {
    message: t.message
  }))
);
const Ef = (e, t) => Ee(null, null, function* () {
  var o;
  const u = localStorage.getItem("userId"), n = t.bot_id;
  if (!u || !n)
    throw new Error("User ID and Bot ID are required");
  const r = gs(Je);
  let i = "";
  Je.update((s) => ye(se({}, s), {
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
    let p = "", d = "", x = [];
    const m = () => {
      if (!d && x.length === 0) return;
      const w = x.join(`
`), E = d || "message";
      if (E === "message")
        w && w.length > 0 && (i += w, Je.update((_) => ye(se({}, _), {
          messages: _.messages.map((g) => g.id === "streaming" ? ye(se({}, g), { message: i }) : g)
        })));
      else if (E === "sources")
        try {
          const _ = JSON.parse(w);
          Array.isArray(_) && Je.update((g) => ye(se({}, g), {
            messages: g.messages.map((v) => v.id === "streaming" ? ye(se({}, v), { sources: _ }) : v)
          }));
        } catch (_) {
        }
      else if (E === "conversation_id") {
        const _ = w.trim();
        localStorage.setItem("currentChatId", _), Je.update((g) => ye(se({}, g), {
          currentChatId: _,
          messages: g.messages.map((v) => v.chatId ? v : ye(se({}, v), { chatId: _ }))
        }));
      }
      d = "", x = [];
    };
    for (; ; ) {
      const { value: w, done: E } = yield f.read();
      if (E) break;
      p += h.decode(w, { stream: !0 });
      const _ = p.split(/\r?\n/);
      p = (o = _.pop()) != null ? o : "";
      for (const g of _)
        g.startsWith("event:") ? (m(), d = g.slice(6).trim()) : g.startsWith("data:") ? x.push(g.slice(5)) : g.trim() === "" && m();
    }
    if (p.length > 0) {
      const w = p.trimEnd();
      if (w) {
        const E = w.split(/\r?\n/);
        for (const _ of E)
          _.startsWith("event:") ? (m(), d = _.slice(6).trim()) : _.startsWith("data:") && x.push(_.slice(5));
      }
    }
    m(), Je.update((w) => {
      const E = w.messages.find((g) => g.id === "streaming");
      if (!E)
        return ye(se({}, w), { isLoading: !1 });
      const _ = {
        id: Date.now().toString(),
        chatId: w.currentChatId || "",
        role: "ai",
        message: i,
        created_at: (/* @__PURE__ */ new Date()).toISOString(),
        // carry over any sources captured during streaming
        sources: E.sources || void 0
      };
      return ye(se({}, w), {
        messages: w.messages.map((g) => g.id === "streaming" ? _ : g),
        isLoading: !1
      });
    });
  } catch (s) {
    throw console.error("Error sending message:", s), Je.update((a) => ye(se({}, a), {
      isLoading: !1
    })), s;
  }
}), $s = (e, t = 1, u = 10) => Ee(null, null, function* () {
  var n, r, i, o, s, a, c, l;
  try {
    const f = yield vf.get(`/chat/${e}/messages`, {
      params: {
        page: t,
        page_size: u
      }
    }), p = (((n = f.data) == null ? void 0 : n.messages) || []).map((m, w) => {
      var E, _, g, v, A;
      return {
        id: ((E = m.id) != null ? E : `${Date.now()}-${w}`).toString(),
        chatId: e,
        role: ((_ = m.role) != null ? _ : m.type) === "human" ? "human" : "ai",
        message: (v = (g = m.message) != null ? g : m.content) != null ? v : "",
        created_at: (A = m.created_at) != null ? A : (/* @__PURE__ */ new Date()).toISOString(),
        // pass through sources if backend returned them
        sources: Array.isArray(m.sources) ? m.sources : void 0
      };
    }).sort((m, w) => {
      const E = new Date(m.created_at).getTime(), _ = new Date(w.created_at).getTime();
      return E - _;
    }), d = (a = (r = f.data) == null ? void 0 : r.total) != null ? a : (s = (o = (i = f.data) == null ? void 0 : i.pagination) == null ? void 0 : o.total) != null ? s : 0, x = (l = (c = f.data) == null ? void 0 : c.has_next) != null ? l : d ? t * u < d : !1;
    Je.update((m) => ye(se({}, m), {
      messages: t === 1 ? p : [...p, ...m.messages],
      hasMore: !!x,
      currentPage: t,
      currentChatId: e
    })), localStorage.setItem("currentChatId", e);
  } catch (f) {
    console.error("Error loading chat history:", f), Je.update((h) => ye(se({}, h), {
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
var kf = /* @__PURE__ */ b0("<svg><!><!></svg>");
function Ve(e, t) {
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
  mu(t, !1);
  let r = rt(t, "name", 8, void 0), i = rt(t, "color", 8, "currentColor"), o = rt(t, "size", 8, 24), s = rt(t, "strokeWidth", 8, 2), a = rt(t, "absoluteStrokeWidth", 8, !1), c = rt(t, "iconNode", 24, () => []);
  const l = (...x) => x.filter((m, w, E) => !!m && E.indexOf(m) === w).join(" ");
  F0();
  var f = kf();
  let h;
  var p = X(f);
  Kr(p, 1, c, as, (x, m) => {
    let w = () => F(m)[0], E = () => F(m)[1];
    var _ = Se(), g = me(_);
    w0(g, w, !0, (v, A) => {
      let T;
      De(() => T = Pi(v, T, se({}, E())));
    }), G(x, _);
  });
  var d = Fe(p);
  Be(d, t, "default", {}), De(
    (x, m) => h = Pi(f, h, ye(se(se({}, wf), n), {
      width: o(),
      height: o(),
      stroke: i(),
      "stroke-width": x,
      class: m
    })),
    [
      () => a() ? Number(s()) * 24 / Number(o()) : s(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", u.class)
    ],
    Ur
  ), G(e, f), _u();
}
function Hs(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "bot-message-square" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Fr(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "bot" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
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
  Ve(e, We({ name: "maximize" }, () => u, {
    iconNode: [
      ["path", { d: "M8 3H5a2 2 0 0 0-2 2v3" }],
      ["path", { d: "M21 8V5a2 2 0 0 0-2-2h-3" }],
      ["path", { d: "M3 16v3a2 2 0 0 0 2 2h3" }],
      ["path", { d: "M16 21h3a2 2 0 0 0 2-2v-3" }]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
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
  Ve(e, We({ name: "message-circle-more" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
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
  Ve(e, We({ name: "message-circle" }, () => u, {
    iconNode: [
      [
        "path",
        { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z" }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
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
  Ve(e, We({ name: "message-square-more" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Tf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "messages-square" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function uo(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "message-square" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ff(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "minimize" }, () => u, {
    iconNode: [
      ["path", { d: "M8 3v3a2 2 0 0 1-2 2H3" }],
      ["path", { d: "M21 8h-3a2 2 0 0 1-2-2V3" }],
      ["path", { d: "M3 16h3a2 2 0 0 1 2 2v3" }],
      ["path", { d: "M16 21v-3a2 2 0 0 1 2-2h3" }]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Rf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "send" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
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
  Ve(e, We({ name: "sparkle" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Vs(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "sparkles" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Of(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "trash-2" }, () => u, {
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
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Nf(e, t) {
  const u = Ne(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  Ve(e, We({ name: "x" }, () => u, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = Se(), s = me(o);
      Be(s, t, "default", {}), G(r, o);
    },
    $$slots: { default: !0 }
  }));
}
const no = {};
function Mf(e) {
  let t = no[e];
  if (t)
    return t;
  t = no[e] = [];
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
function hu(e, t) {
  typeof t != "string" && (t = hu.defaultChars);
  const u = Mf(t);
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
hu.defaultChars = ";/?:@&=+$,#";
hu.componentChars = "";
const ro = {};
function If(e) {
  let t = ro[e];
  if (t)
    return t;
  t = ro[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function Zu(e, t, u) {
  typeof t != "string" && (u = t, t = Zu.defaultChars), typeof u == "undefined" && (u = !0);
  const n = If(t);
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
Zu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Zu.componentChars = "-_.!~*'()";
function ei(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function vn() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const Lf = /^([a-z0-9.+-]+:)/i, Bf = /:[0-9]*$/, Pf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, jf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], zf = ["{", "}", "|", "\\", "^", "`"].concat(jf), Uf = ["'"].concat(zf), io = ["%", "/", "?", ";", "#"].concat(Uf), oo = ["/", "?", "#"], qf = 255, so = /^[+a-z0-9A-Z_-]{0,63}$/, $f = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, ao = {
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
  if (e && e instanceof vn) return e;
  const u = new vn();
  return u.parse(e, t), u;
}
vn.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = Pf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = Lf.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && ao[o]) && (i = i.substr(2), this.slashes = !0)), !ao[o] && (r || o && !co[o])) {
    let c = -1;
    for (let d = 0; d < oo.length; d++)
      n = i.indexOf(oo[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < io.length; d++)
      n = i.indexOf(io[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let x = 0, m = d.length; x < m; x++) {
        const w = d[x];
        if (w && !w.match(so)) {
          let E = "";
          for (let _ = 0, g = w.length; _ < g; _++)
            w.charCodeAt(_) > 127 ? E += "x" : E += w[_];
          if (!E.match(so)) {
            const _ = d.slice(0, x), g = d.slice(x + 1), v = w.match($f);
            v && (_.push(v[1]), g.unshift(v[2])), g.length && (i = g.join(".") + i), this.hostname = _.join(".");
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
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), co[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
vn.prototype.parseHost = function(e) {
  let t = Bf.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: hu,
  encode: Zu,
  format: ei,
  parse: ti
}, Symbol.toStringTag, { value: "Module" })), Gs = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Zs = /[\0-\x1F\x7F-\x9F]/, Wf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, ui = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Ks = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, Js = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, Vf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: Gs,
  Cc: Zs,
  Cf: Wf,
  P: ui,
  S: Ks,
  Z: Js
}, Symbol.toStringTag, { value: "Module" })), Gf = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), Zf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var cr;
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
  (cr = String.fromCodePoint) !== null && cr !== void 0 ? cr : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function Xf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = Kf.get(e)) !== null && t !== void 0 ? t : e;
}
var ke;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(ke || (ke = {}));
const Yf = 32;
var It;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(It || (It = {}));
function Rr(e) {
  return e >= ke.ZERO && e <= ke.NINE;
}
function Qf(e) {
  return e >= ke.UPPER_A && e <= ke.UPPER_F || e >= ke.LOWER_A && e <= ke.LOWER_F;
}
function ed(e) {
  return e >= ke.UPPER_A && e <= ke.UPPER_Z || e >= ke.LOWER_A && e <= ke.LOWER_Z || Rr(e);
}
function td(e) {
  return e === ke.EQUALS || ed(e);
}
var we;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(we || (we = {}));
var Nt;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Nt || (Nt = {}));
class ud {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = we.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Nt.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = we.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case we.EntityStart:
        return t.charCodeAt(u) === ke.NUM ? (this.state = we.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = we.NamedEntity, this.stateNamedEntity(t, u));
      case we.NumericStart:
        return this.stateNumericStart(t, u);
      case we.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case we.NumericHex:
        return this.stateNumericHex(t, u);
      case we.NamedEntity:
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | Yf) === ke.LOWER_X ? (this.state = we.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = we.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (Rr(r) || Qf(r))
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
      if (Rr(r))
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
    if (t === ke.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Nt.Strict)
      return 0;
    return this.emitCodePoint(Xf(this.result), this.consumed), this.errors && (t !== ke.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
    let r = n[this.treeIndex], i = (r & It.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const o = t.charCodeAt(u);
      if (this.treeIndex = nd(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Nt.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        td(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & It.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === ke.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== Nt.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    const { result: u, decodeTree: n } = this, r = (n[u] & It.VALUE_LENGTH) >> 14;
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
    return this.emitCodePoint(u === 1 ? r[t] & ~It.VALUE_LENGTH : r[t + 1], n), u === 3 && this.emitCodePoint(r[t + 2], n), n;
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
      case we.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Nt.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case we.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case we.NumericHex:
        return this.emitNumericEntity(0, 3);
      case we.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case we.EntityStart:
        return 0;
    }
  }
}
function Xs(e) {
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
  const r = (t & It.BRANCH_LENGTH) >> 7, i = t & It.JUMP_TABLE;
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
const rd = Xs(Gf);
Xs(Zf);
function Ys(e, t = Nt.Legacy) {
  return rd(e, t);
}
function id(e) {
  return Object.prototype.toString.call(e);
}
function ni(e) {
  return id(e) === "[object String]";
}
const od = Object.prototype.hasOwnProperty;
function sd(e, t) {
  return od.call(e, t);
}
function Pn(e) {
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
function Qs(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function ri(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function yn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const ea = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, ad = /&([a-z#][a-z0-9]{1,31});/gi, cd = new RegExp(ea.source + "|" + ad.source, "gi"), ld = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function fd(e, t) {
  if (t.charCodeAt(0) === 35 && ld.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return ri(n) ? yn(n) : e;
  }
  const u = Ys(e);
  return u !== e ? u : e;
}
function dd(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ea, "$1");
}
function pu(e) {
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
function zt(e) {
  return hd.test(e) ? e.replace(pd, gd) : e;
}
const md = /[.?*+^$[\]\\(){}|-]/g;
function _d(e) {
  return e.replace(md, "\\$&");
}
function re(e) {
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
  return ui.test(e) || Ks.test(e);
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
function jn(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const xd = { mdurl: Hf, ucmicro: Vf }, vd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: Qs,
  assign: Pn,
  escapeHtml: zt,
  escapeRE: _d,
  fromCodePoint: yn,
  has: sd,
  isMdAsciiPunct: Pu,
  isPunctChar: Bu,
  isSpace: re,
  isString: ni,
  isValidEntityCode: ri,
  isWhiteSpace: Lu,
  lib: xd,
  normalizeReference: jn,
  unescapeAll: pu,
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
function Ed(e, t, u) {
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
        return i.pos = r + 1, i.str = pu(e.slice(t + 1, r)), i.ok = !0, i;
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
  return t === r || o !== 0 || (i.str = pu(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function wd(e, t, u, n) {
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
      return o.pos = i + 1, o.str += pu(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < u && i++, i++;
  }
  return o.can_continue = !0, o.str += pu(e.slice(t, i)), o;
}
const kd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: Ed,
  parseLinkLabel: yd,
  parseLinkTitle: wd
}, Symbol.toStringTag, { value: "Module" })), xt = {};
xt.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + zt(i.content) + "</code>";
};
xt.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + zt(e[t].content) + `</code></pre>
`;
};
xt.fence = function(e, t, u, n, r) {
  const i = e[t], o = i.info ? pu(i.info).trim() : "";
  let s = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    s = l[0], a = l.slice(2).join("");
  }
  let c;
  if (u.highlight ? c = u.highlight(i.content, s, a) || zt(i.content) : c = zt(i.content), c.indexOf("<pre") === 0)
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
xt.image = function(e, t, u, n, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, u, n), r.renderToken(e, t, u);
};
xt.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
xt.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
xt.text = function(e, t) {
  return zt(e[t].content);
};
xt.html_block = function(e, t) {
  return e[t].content;
};
xt.html_inline = function(e, t) {
  return e[t].content;
};
function Eu() {
  this.rules = Pn({}, xt);
}
Eu.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + zt(t.attrs[u][0]) + '="' + zt(t.attrs[u][1]) + '"';
  return r;
};
Eu.prototype.renderToken = function(t, u, n) {
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
Eu.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t);
  }
  return n;
};
Eu.prototype.renderInlineAsText = function(e, t, u) {
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
Eu.prototype.render = function(e, t, u) {
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
function ct(e, t, u) {
  this.type = e, this.tag = t, this.attrs = null, this.map = null, this.nesting = u, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
ct.prototype.attrIndex = function(t) {
  if (!this.attrs)
    return -1;
  const u = this.attrs;
  for (let n = 0, r = u.length; n < r; n++)
    if (u[n][0] === t)
      return n;
  return -1;
};
ct.prototype.attrPush = function(t) {
  this.attrs ? this.attrs.push(t) : this.attrs = [t];
};
ct.prototype.attrSet = function(t, u) {
  const n = this.attrIndex(t), r = [t, u];
  n < 0 ? this.attrPush(r) : this.attrs[n] = r;
};
ct.prototype.attrGet = function(t) {
  const u = this.attrIndex(t);
  let n = null;
  return u >= 0 && (n = this.attrs[u][1]), n;
};
ct.prototype.attrJoin = function(t, u) {
  const n = this.attrIndex(t);
  n < 0 ? this.attrPush([t, u]) : this.attrs[n][1] = this.attrs[n][1] + " " + u;
};
function ta(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
ta.prototype.Token = ct;
const Ad = /\r\n?|\n/g, Cd = /\0/g;
function Dd(e) {
  let t;
  t = e.src.replace(Ad, `
`), t = t.replace(Cd, "�"), e.src = t;
}
function Sd(e) {
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
function Fd(e) {
  return /^<a[>\s]/i.test(e);
}
function Rd(e) {
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
        if (s.type === "html_inline" && (Fd(s.content) && i > 0 && i--, Rd(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const l = [];
          let f = s.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let p = 0; p < c.length; p++) {
            const d = c[p].url, x = e.md.normalizeLink(d);
            if (!e.md.validateLink(x))
              continue;
            let m = c[p].text;
            c[p].schema ? c[p].schema === "mailto:" && !/^mailto:/i.test(m) ? m = e.md.normalizeLinkText("mailto:" + m).replace(/^mailto:/, "") : m = e.md.normalizeLinkText(m) : m = e.md.normalizeLinkText("http://" + m).replace(/^http:\/\//, "");
            const w = c[p].index;
            if (w > h) {
              const v = new e.Token("text", "", 0);
              v.content = a.slice(h, w), v.level = f, l.push(v);
            }
            const E = new e.Token("link_open", "a", 1);
            E.attrs = [["href", x]], E.level = f++, E.markup = "linkify", E.info = "auto", l.push(E);
            const _ = new e.Token("text", "", 0);
            _.content = m, _.level = f, l.push(_);
            const g = new e.Token("link_close", "a", -1);
            g.level = --f, g.markup = "linkify", g.info = "auto", l.push(g), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[u].children = r = Qs(r, o, l);
        }
      }
    }
}
const ua = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Nd = /\((c|tm|r)\)/i, Md = /\((c|tm|r)\)/ig, Id = {
  c: "©",
  r: "®",
  tm: "™"
};
function Ld(e, t) {
  return Id[t.toLowerCase()];
}
function Bd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Md, Ld)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function Pd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && ua.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function jd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Nd.test(e.tokens[t].content) && Bd(e.tokens[t].children), ua.test(e.tokens[t].content) && Pd(e.tokens[t].children));
}
const zd = /['"]/, lo = /['"]/g, fo = "’";
function rn(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function Ud(e, t) {
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
          for (u = r - 1; u >= 0 && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u--)
            if (e[u].content) {
              d = e[u].content.charCodeAt(e[u].content.length - 1);
              break;
            }
        let x = 32;
        if (a < c)
          x = s.charCodeAt(a);
        else
          for (u = r + 1; u < e.length && !(e[u].type === "softbreak" || e[u].type === "hardbreak"); u++)
            if (e[u].content) {
              x = e[u].content.charCodeAt(0);
              break;
            }
        const m = Pu(d) || Bu(String.fromCharCode(d)), w = Pu(x) || Bu(String.fromCharCode(x)), E = Lu(d), _ = Lu(x);
        if (_ ? f = !1 : w && (E || m || (f = !1)), E ? h = !1 : m && (_ || w || (h = !1)), x === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = m, h = w), !f && !h) {
          p && (i.content = rn(i.content, l.index, fo));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let g = n[u];
            if (n[u].level < o)
              break;
            if (g.single === p && n[u].level === o) {
              g = n[u];
              let v, A;
              p ? (v = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (v = t.md.options.quotes[0], A = t.md.options.quotes[1]), i.content = rn(i.content, l.index, A), e[g.token].content = rn(
                e[g.token].content,
                g.pos,
                v
              ), a += A.length - 1, g.token === r && (a += v.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = rn(i.content, l.index, fo));
      }
  }
}
function qd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !zd.test(e.tokens[t].content) || Ud(e.tokens[t].children, e);
}
function $d(e) {
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
const lr = [
  ["normalize", Dd],
  ["block", Sd],
  ["inline", Td],
  ["linkify", Od],
  ["replacements", jd],
  ["smartquotes", qd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", $d]
];
function ii() {
  this.ruler = new He();
  for (let e = 0; e < lr.length; e++)
    this.ruler.push(lr[e][0], lr[e][1]);
}
ii.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
ii.prototype.State = ta;
function vt(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (re(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
vt.prototype.push = function(e, t, u) {
  const n = new ct(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
vt.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
vt.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
vt.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!re(n))
      break;
  }
  return t;
};
vt.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!re(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
vt.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
vt.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
vt.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const i = new Array(u - t);
  for (let o = 0, s = t; s < u; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < u || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < n; ) {
      const h = this.src.charCodeAt(l);
      if (re(h))
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
vt.prototype.Token = ct;
const Hd = 65536;
function fr(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function ho(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), i = !1, o = 0, s = "";
  for (; n < u; )
    r === 124 && (i ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), i = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(o)), t;
}
function Wd(e, t, u, n) {
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
  if (s !== 124 && s !== 45 && s !== 58 && !re(s) || o === 45 && re(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const g = e.src.charCodeAt(i);
    if (g !== 124 && g !== 45 && g !== 58 && !re(g))
      return !1;
    i++;
  }
  let a = fr(e, t + 1), c = a.split("|");
  const l = [];
  for (let g = 0; g < c.length; g++) {
    const v = c[g].trim();
    if (!v) {
      if (g === 0 || g === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(v))
      return !1;
    v.charCodeAt(v.length - 1) === 58 ? l.push(v.charCodeAt(0) === 58 ? "center" : "right") : v.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = fr(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = ho(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (n)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const p = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), x = [t, 0];
  d.map = x;
  const m = e.push("thead_open", "thead", 1);
  m.map = [t, t + 1];
  const w = e.push("tr_open", "tr", 1);
  w.map = [t, t + 1];
  for (let g = 0; g < c.length; g++) {
    const v = e.push("th_open", "th", 1);
    l[g] && (v.attrs = [["style", "text-align:" + l[g]]]);
    const A = e.push("inline", "", 0);
    A.content = c[g].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let E, _ = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let g = !1;
    for (let A = 0, T = p.length; A < T; A++)
      if (p[A](e, r, u, !0)) {
        g = !0;
        break;
      }
    if (g || (a = fr(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = ho(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), _ += f - c.length, _ > Hd))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = E = [t + 2, 0];
    }
    const v = e.push("tr_open", "tr", 1);
    v.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const T = e.push("td_open", "td", 1);
      l[A] && (T.attrs = [["style", "text-align:" + l[A]]]);
      const R = e.push("inline", "", 0);
      R.content = c[A] ? c[A].trim() : "", R.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return E && (e.push("tbody_close", "tbody", -1), E[1] = r), e.push("table_close", "table", -1), x[1] = r, e.parentType = h, e.line = r, !0;
}
function Vd(e, t, u) {
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
function Gd(e, t, u, n) {
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
function Zd(e, t, u, n) {
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
      let v = e.sCount[d] + 1, A, T;
      e.src.charCodeAt(r) === 32 ? (r++, v++, T = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[d] + v) % 4 === 3 ? (r++, v++, T = !1) : T = !0) : A = !1;
      let R = v;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const O = e.src.charCodeAt(r);
        if (re(O))
          O === 9 ? R += 4 - (R + e.bsCount[d] + (T ? 1 : 0)) % 4 : R++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (A ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = R - v, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let g = !1;
    for (let v = 0, A = f.length; v < A; v++)
      if (f[v](e, d, u, !0)) {
        g = !0;
        break;
      }
    if (g) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const x = e.blkIndent;
  e.blkIndent = 0;
  const m = e.push("blockquote_open", "blockquote", 1);
  m.markup = ">";
  const w = [t, 0];
  m.map = w, e.md.block.tokenize(e, t, d);
  const E = e.push("blockquote_close", "blockquote", -1);
  E.markup = ">", e.lineMax = o, e.parentType = h, w[1] = e.line;
  for (let _ = 0; _ < l.length; _++)
    e.bMarks[_ + t] = s[_], e.tShift[_ + t] = l[_], e.sCount[_ + t] = c[_], e.bsCount[_ + t] = a[_];
  return e.blkIndent = x, !0;
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
    if (c !== o && !re(c))
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
function po(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!re(i))
      return -1;
  }
  return n;
}
function bo(e, t) {
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
  return r < n && (i = e.src.charCodeAt(r), !re(i)) ? -1 : r;
}
function Jd(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function Xd(e, t, u, n) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = bo(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = po(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(p) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(p - 1), x = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const m = [a, 0];
  s.map = m, s.markup = String.fromCharCode(d);
  let w = !1;
  const E = e.md.block.ruler.getRules("list"), _ = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const g = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let v = g;
    for (; i < r; ) {
      const U = e.src.charCodeAt(i);
      if (U === 9)
        v += 4 - (v + e.bsCount[a]) % 4;
      else if (U === 32)
        v++;
      else
        break;
      i++;
    }
    const A = i;
    let T;
    A >= r ? T = 1 : T = v - g, T > 4 && (T = 1);
    const R = g + T;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const O = [a, 0];
    s.map = O, f && (s.info = e.src.slice(o, p - 1));
    const P = e.tight, J = e.tShift[a], oe = e.sCount[a], Z = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = R, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = v, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || w) && (c = !1), w = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = Z, e.tShift[a] = J, e.sCount[a] = oe, e.tight = P, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, O[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let z = !1;
    for (let U = 0, ie = E.length; U < ie; U++)
      if (E[U](e, a, u, !0)) {
        z = !0;
        break;
      }
    if (z)
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
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), m[1] = a, e.line = a, e.parentType = _, c && Jd(e, x), !0;
}
function Yd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(E) {
    const _ = e.lineMax;
    if (E >= _ || e.isEmpty(E))
      return null;
    let g = !1;
    if (e.sCount[E] - e.blkIndent > 3 && (g = !0), e.sCount[E] < 0 && (g = !0), !g) {
      const T = e.md.block.ruler.getRules("reference"), R = e.parentType;
      e.parentType = "reference";
      let O = !1;
      for (let P = 0, J = T.length; P < J; P++)
        if (T[P](e, E, _, !0)) {
          O = !0;
          break;
        }
      if (e.parentType = R, O)
        return null;
    }
    const v = e.bMarks[E] + e.tShift[E], A = e.eMarks[E];
    return e.src.slice(v, A + 1);
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
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (E === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const E = a.charCodeAt(r);
    if (E === 10) {
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (!re(E)) break;
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
      const _ = s(o);
      _ !== null && (a += _, i = a.length, o++);
    } else if (!re(E)) break;
  }
  let x = e.md.helpers.parseLinkTitle(a, r, i);
  for (; x.can_continue; ) {
    const E = s(o);
    if (E === null) break;
    a += E, r = i, i = a.length, o++, x = e.md.helpers.parseLinkTitle(a, r, i, x);
  }
  let m;
  for (r < i && d !== r && x.ok ? (m = x.str, r = x.pos) : (m = "", r = h, o = p); r < i; ) {
    const E = a.charCodeAt(r);
    if (!re(E))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && m)
    for (m = "", r = h, o = p; r < i; ) {
      const E = a.charCodeAt(r);
      if (!re(E))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const w = jn(a.slice(1, c));
  return w ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[w] == "undefined" && (e.env.references[w] = { title: m, href: f }), e.line = o), !0) : !1;
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
], e1 = "[a-zA-Z_:][a-zA-Z0-9:._-]*", t1 = "[^\"'=<>`\\x00-\\x20]+", u1 = "'[^']*'", n1 = '"[^"]*"', r1 = "(?:" + t1 + "|" + u1 + "|" + n1 + ")", i1 = "(?:\\s+" + e1 + "(?:\\s*=\\s*" + r1 + ")?)", na = "<[A-Za-z][A-Za-z0-9\\-]*" + i1 + "*\\s*\\/?>", ra = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", o1 = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", s1 = "<[?][\\s\\S]*?[?]>", a1 = "<![A-Za-z][^>]*>", c1 = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", l1 = new RegExp("^(?:" + na + "|" + ra + "|" + o1 + "|" + s1 + "|" + a1 + "|" + c1 + ")"), f1 = new RegExp("^(?:" + na + "|" + ra + ")"), ru = [
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
  for (; s < ru.length && !ru[s][0].test(o); s++)
    ;
  if (s === ru.length)
    return !1;
  if (n)
    return ru[s][2];
  let a = t + 1;
  if (!ru[s][1].test(o)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), ru[s][1].test(o)) {
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
  if (s > 6 || r < i && !re(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && re(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
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
const on = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Wd, ["paragraph", "reference"]],
  ["code", Vd],
  ["fence", Gd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Zd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Kd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", Xd, ["paragraph", "reference", "blockquote"]],
  ["reference", Yd],
  ["html_block", d1, ["paragraph", "reference", "blockquote"]],
  ["heading", h1, ["paragraph", "reference", "blockquote"]],
  ["lheading", p1],
  ["paragraph", b1]
];
function zn() {
  this.ruler = new He();
  for (let e = 0; e < on.length; e++)
    this.ruler.push(on[e][0], on[e][1], { alt: (on[e][2] || []).slice() });
}
zn.prototype.tokenize = function(e, t, u) {
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
zn.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
zn.prototype.State = vt;
function Ku(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Ku.prototype.pushPending = function() {
  const e = new ct("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Ku.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new ct(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
Ku.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = Pu(r) || Bu(String.fromCharCode(r)), c = Pu(s) || Bu(String.fromCharCode(s)), l = Lu(r), f = Lu(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
Ku.prototype.Token = ct;
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
function v1(e, t) {
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
  for (u++; u < r && re(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const oi = [];
for (let e = 0; e < 256; e++)
  oi.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  oi[e.charCodeAt(0)] = 1;
});
function y1(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!re(r)); )
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
function E1(e, t) {
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
function w1(e, t) {
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
function go(e, t) {
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
function k1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  go(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && go(e, t[n].delimiters);
}
const ia = {
  tokenize: w1,
  postProcess: k1
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
function mo(e, t) {
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
  mo(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && mo(e, t[n].delimiters);
}
const oa = {
  tokenize: A1,
  postProcess: C1
};
function D1(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!re(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!re(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!re(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[jn(n)], !i)
      return e.pos = l, !1;
    o = i.href, s = i.title;
  }
  if (!t) {
    e.pos = h, e.posMax = p;
    const x = e.push("link_open", "a", 1), m = [["href", o]];
    x.attrs = m, s && m.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = f, !0;
}
function S1(e, t) {
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!re(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!re(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!re(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[jn(r)], !o)
      return e.pos = f, !1;
    l = o.href, a = o.title;
  }
  if (!t) {
    n = e.src.slice(p, d);
    const x = [];
    e.md.inline.parse(
      n,
      e.md,
      e.env,
      x
    );
    const m = e.push("image", "img", 0), w = [["src", l], ["alt", ""]];
    m.attrs = w, m.children = x, m.content = n, a && w.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const T1 = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, F1 = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function R1(e, t) {
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
  if (F1.test(i)) {
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
function N1(e) {
  return /^<\/a\s*>/i.test(e);
}
function M1(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function I1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !M1(r))
    return !1;
  const i = e.src.slice(n).match(l1);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], O1(o.content) && e.linkLevel++, N1(o.content) && e.linkLevel--;
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
        s.content = ri(o) ? yn(o) : yn(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(B1);
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
function _o(e) {
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
function j1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  _o(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && _o(t[n].delimiters);
}
function z1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const dr = [
  ["text", m1],
  ["linkify", x1],
  ["newline", v1],
  ["escape", y1],
  ["backticks", E1],
  ["strikethrough", ia.tokenize],
  ["emphasis", oa.tokenize],
  ["link", D1],
  ["image", S1],
  ["autolink", R1],
  ["html_inline", I1],
  ["entity", P1]
], hr = [
  ["balance_pairs", j1],
  ["strikethrough", ia.postProcess],
  ["emphasis", oa.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", z1]
];
function Ju() {
  this.ruler = new He();
  for (let e = 0; e < dr.length; e++)
    this.ruler.push(dr[e][0], dr[e][1]);
  this.ruler2 = new He();
  for (let e = 0; e < hr.length; e++)
    this.ruler2.push(hr[e][0], hr[e][1]);
}
Ju.prototype.skipToken = function(e) {
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
Ju.prototype.tokenize = function(e) {
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
Ju.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
Ju.prototype.State = Ku;
function U1(e) {
  const t = {};
  e = e || {}, t.src_Any = Gs.source, t.src_Cc = Zs.source, t.src_Z = Js.source, t.src_P = ui.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function Or(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function Un(e) {
  return Object.prototype.toString.call(e);
}
function q1(e) {
  return Un(e) === "[object String]";
}
function $1(e) {
  return Un(e) === "[object Object]";
}
function H1(e) {
  return Un(e) === "[object RegExp]";
}
function xo(e) {
  return Un(e) === "[object Function]";
}
function W1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const sa = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function V1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || sa.hasOwnProperty(u);
  }, !1);
}
const G1 = {
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
}, Z1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", K1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function J1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function X1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function vo() {
  return function(e, t) {
    t.normalize(e);
  };
}
function En(e) {
  const t = e.re = U1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(Z1), u.push(t.src_xn), t.src_tlds = u.join("|");
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
    if (e.__compiled__[s] = c, $1(a)) {
      H1(a.validate) ? c.validate = X1(a.validate) : xo(a.validate) ? c.validate = a.validate : i(s, a), xo(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = vo();
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
  }).map(W1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), J1(e);
}
function Y1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function Nr(e, t) {
  const u = new Y1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Ye(e, t) {
  if (!(this instanceof Ye))
    return new Ye(e, t);
  t || V1(e) && (t = e, e = {}), this.__opts__ = Or({}, sa, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Or({}, G1, e), this.__compiled__ = {}, this.__tlds__ = K1, this.__tlds_replaced__ = !1, this.re = {}, En(this);
}
Ye.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, En(this), this;
};
Ye.prototype.set = function(t) {
  return this.__opts__ = Or(this.__opts__, t), this;
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
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(Nr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(Nr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Ye.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, Nr(this, 0)) : null;
};
Ye.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), En(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, En(this), this);
};
Ye.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Ye.prototype.onCompile = function() {
};
const ou = 2147483647, gt = 36, si = 1, ju = 26, Q1 = 38, eh = 700, aa = 72, ca = 128, la = "-", th = /^xn--/, uh = /[^\0-\x7F]/, nh = /[\x2E\u3002\uFF0E\uFF61]/g, rh = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, pr = gt - si, mt = Math.floor, br = String.fromCharCode;
function Ot(e) {
  throw new RangeError(rh[e]);
}
function ih(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function fa(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(nh, ".");
  const r = e.split("."), i = ih(r, t).join(".");
  return n + i;
}
function da(e) {
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
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : gt;
}, yo = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, ha = function(e, t, u) {
  let n = 0;
  for (e = u ? mt(e / eh) : e >> 1, e += mt(e / t); e > pr * ju >> 1; n += gt)
    e = mt(e / pr);
  return mt(n + (pr + 1) * e / (e + Q1));
}, pa = function(e) {
  const t = [], u = e.length;
  let n = 0, r = ca, i = aa, o = e.lastIndexOf(la);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && Ot("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = gt; ; f += gt) {
      s >= u && Ot("invalid-input");
      const h = sh(e.charCodeAt(s++));
      h >= gt && Ot("invalid-input"), h > mt((ou - n) / l) && Ot("overflow"), n += h * l;
      const p = f <= i ? si : f >= i + ju ? ju : f - i;
      if (h < p)
        break;
      const d = gt - p;
      l > mt(ou / d) && Ot("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = ha(n - a, c, a == 0), mt(n / c) > ou - r && Ot("overflow"), r += mt(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, ba = function(e) {
  const t = [];
  e = da(e);
  const u = e.length;
  let n = ca, r = 0, i = aa;
  for (const a of e)
    a < 128 && t.push(br(a));
  const o = t.length;
  let s = o;
  for (o && t.push(la); s < u; ) {
    let a = ou;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > mt((ou - r) / c) && Ot("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > ou && Ot("overflow"), l === n) {
        let f = r;
        for (let h = gt; ; h += gt) {
          const p = h <= i ? si : h >= i + ju ? ju : h - i;
          if (f < p)
            break;
          const d = f - p, x = gt - p;
          t.push(
            br(yo(p + d % x, 0))
          ), f = mt(d / x);
        }
        t.push(br(yo(f, 0))), i = ha(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, ah = function(e) {
  return fa(e, function(t) {
    return th.test(t) ? pa(t.slice(4).toLowerCase()) : t;
  });
}, ch = function(e) {
  return fa(e, function(t) {
    return uh.test(t) ? "xn--" + ba(t) : t;
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
    encode: oh
  },
  decode: pa,
  encode: ba,
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
const ma = ["http:", "https:", "mailto:"];
function mh(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ma.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ga.toASCII(t.hostname);
    } catch (u) {
    }
  return Zu(ei(t));
}
function _h(e) {
  const t = ti(e, !0);
  if (t.hostname && (!t.protocol || ma.indexOf(t.protocol) >= 0))
    try {
      t.hostname = ga.toUnicode(t.hostname);
    } catch (u) {
    }
  return hu(ei(t), hu.defaultChars + "%");
}
function ut(e, t) {
  if (!(this instanceof ut))
    return new ut(e, t);
  t || ni(e) || (t = e || {}, e = "default"), this.inline = new Ju(), this.block = new zn(), this.core = new ii(), this.renderer = new Eu(), this.linkify = new Ye(), this.validateLink = gh, this.normalizeLink = mh, this.normalizeLinkText = _h, this.utils = vd, this.helpers = Pn({}, kd), this.options = {}, this.configure(e), t && this.set(t);
}
ut.prototype.set = function(e) {
  return Pn(this.options, e), this;
};
ut.prototype.configure = function(e) {
  const t = this;
  if (ni(e)) {
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
function xh(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gr, Eo;
function vh() {
  if (Eo) return gr;
  Eo = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((k) => {
      const D = b[k], q = typeof D;
      (q === "object" || q === "function") && !Object.isFrozen(D) && e(D);
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
    const D = /* @__PURE__ */ Object.create(null);
    for (const q in b)
      D[q] = b[q];
    return k.forEach(function(q) {
      for (const fe in q)
        D[fe] = q[fe];
    }), /** @type {T} */
    D;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: k }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const D = b.split(".");
      return [
        `${k}${D.shift()}`,
        ...D.map((q, fe) => `${q}${"_".repeat(fe + 1)}`)
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
    constructor(k, D) {
      this.buffer = "", this.classPrefix = D.classPrefix, k.walk(this);
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
      const D = o(
        k.scope,
        { prefix: this.classPrefix }
      );
      this.span(D);
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
      const D = a({ scope: k });
      this.add(D), this.stack.push(D);
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
    static _walk(k, D) {
      return typeof D == "string" ? k.addText(D) : D.children && (k.openNode(D), D.children.forEach((q) => this._walk(k, q)), k.closeNode(D)), k;
    }
    /**
     * @param {Node} node
     */
    static _collapse(k) {
      typeof k != "string" && k.children && (k.children.every((D) => typeof D == "string") ? k.children = [k.children.join("")] : k.children.forEach((D) => {
        c._collapse(D);
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
    __addSublanguage(k, D) {
      const q = k.root;
      D && (q.scope = `language:${D}`), this.add(q);
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
    return x("(?=", b, ")");
  }
  function p(b) {
    return x("(?:", b, ")*");
  }
  function d(b) {
    return x("(?:", b, ")?");
  }
  function x(...b) {
    return b.map((D) => f(D)).join("");
  }
  function m(b) {
    const k = b[b.length - 1];
    return typeof k == "object" && k.constructor === Object ? (b.splice(b.length - 1, 1), k) : {};
  }
  function w(...b) {
    return "(" + (m(b).capture ? "" : "?:") + b.map((q) => f(q)).join("|") + ")";
  }
  function E(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function _(b, k) {
    const D = b && b.exec(k);
    return D && D.index === 0;
  }
  const g = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function v(b, { joinWith: k }) {
    let D = 0;
    return b.map((q) => {
      D += 1;
      const fe = D;
      let de = f(q), M = "";
      for (; de.length > 0; ) {
        const N = g.exec(de);
        if (!N) {
          M += de;
          break;
        }
        M += de.substring(0, N.index), de = de.substring(N.index + N[0].length), N[0][0] === "\\" && N[1] ? M += "\\" + String(Number(N[1]) + fe) : (M += N[0], N[0] === "(" && D++);
      }
      return M;
    }).map((q) => `(${q})`).join(k);
  }
  const A = /\b\B/, T = "[a-zA-Z]\\w*", R = "[a-zA-Z_]\\w*", O = "\\b\\d+(\\.\\d+)?", P = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", J = "\\b(0b[01]+)", oe = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Z = (b = {}) => {
    const k = /^#![ ]*\//;
    return b.binary && (b.begin = x(
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
      "on:begin": (D, q) => {
        D.index !== 0 && q.ignoreMatch();
      }
    }, b);
  }, z = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, U = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [z]
  }, ie = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [z]
  }, Pe = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, ee = function(b, k, D = {}) {
    const q = n(
      {
        scope: "comment",
        begin: b,
        end: k,
        contains: []
      },
      D
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
    const fe = w(
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
        begin: x(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          fe,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), q;
  }, _e = ee("//", "$"), L = ee("/\\*", "\\*/"), W = ee("#", "$"), be = {
    scope: "number",
    begin: O,
    relevance: 0
  }, xe = {
    scope: "number",
    begin: P,
    relevance: 0
  }, lt = {
    scope: "number",
    begin: J,
    relevance: 0
  }, wu = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      z,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [z]
      }
    ]
  }, qn = {
    scope: "title",
    begin: T,
    relevance: 0
  }, $n = {
    scope: "title",
    begin: R,
    relevance: 0
  }, Dt = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + R,
    relevance: 0
  };
  var St = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: U,
    BACKSLASH_ESCAPE: z,
    BINARY_NUMBER_MODE: lt,
    BINARY_NUMBER_RE: J,
    COMMENT: ee,
    C_BLOCK_COMMENT_MODE: L,
    C_LINE_COMMENT_MODE: _e,
    C_NUMBER_MODE: xe,
    C_NUMBER_RE: P,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (k, D) => {
            D.data._beginMatch = k[1];
          },
          /** @type {ModeCallback} */
          "on:end": (k, D) => {
            D.data._beginMatch !== k[1] && D.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: W,
    IDENT_RE: T,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: Dt,
    NUMBER_MODE: be,
    NUMBER_RE: O,
    PHRASAL_WORDS_MODE: Pe,
    QUOTE_STRING_MODE: ie,
    REGEXP_MODE: wu,
    RE_STARTERS_RE: oe,
    SHEBANG: Z,
    TITLE_MODE: qn,
    UNDERSCORE_IDENT_RE: R,
    UNDERSCORE_TITLE_MODE: $n
  });
  function Ea(b, k) {
    b.input[b.index - 1] === "." && k.ignoreMatch();
  }
  function wa(b, k) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function ka(b, k) {
    k && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = Ea, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function Aa(b, k) {
    Array.isArray(b.illegal) && (b.illegal = w(...b.illegal));
  }
  function Ca(b, k) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function Da(b, k) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const Sa = (b, k) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const D = Object.assign({}, b);
    Object.keys(b).forEach((q) => {
      delete b[q];
    }), b.keywords = D.keywords, b.begin = x(D.beforeMatch, h(D.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(D, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete D.beforeMatch;
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
  function ai(b, k, D = Fa) {
    const q = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? fe(D, b.split(" ")) : Array.isArray(b) ? fe(D, b) : Object.keys(b).forEach(function(de) {
      Object.assign(
        q,
        ai(b[de], k, de)
      );
    }), q;
    function fe(de, M) {
      k && (M = M.map((N) => N.toLowerCase())), M.forEach(function(N) {
        const j = N.split("|");
        q[j[0]] = [de, Ra(j[0], j[1])];
      });
    }
  }
  function Ra(b, k) {
    return k ? Number(k) : Oa(b) ? 0 : 1;
  }
  function Oa(b) {
    return Ta.includes(b.toLowerCase());
  }
  const ci = {}, qt = (b) => {
    console.error(b);
  }, li = (b, ...k) => {
    console.log(`WARN: ${b}`, ...k);
  }, Qt = (b, k) => {
    ci[`${b}/${k}`] || (console.log(`Deprecated as of ${b}. ${k}`), ci[`${b}/${k}`] = !0);
  }, Xu = new Error();
  function fi(b, k, { key: D }) {
    let q = 0;
    const fe = b[D], de = {}, M = {};
    for (let N = 1; N <= k.length; N++)
      M[N + q] = fe[N], de[N + q] = !0, q += E(k[N - 1]);
    b[D] = M, b[D]._emit = de, b[D]._multi = !0;
  }
  function Na(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw qt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Xu;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw qt("beginScope must be object"), Xu;
      fi(b, b.begin, { key: "beginScope" }), b.begin = v(b.begin, { joinWith: "" });
    }
  }
  function Ma(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw qt("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Xu;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw qt("endScope must be object"), Xu;
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
    function k(M, N) {
      return new RegExp(
        f(M),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (N ? "g" : "")
      );
    }
    class D {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(N, j) {
        j.position = this.position++, this.matchIndexes[this.matchAt] = j, this.regexes.push([j, N]), this.matchAt += E(N) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const N = this.regexes.map((j) => j[1]);
        this.matcherRe = k(v(N, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(N) {
        this.matcherRe.lastIndex = this.lastIndex;
        const j = this.matcherRe.exec(N);
        if (!j)
          return null;
        const ve = j.findIndex((ku, Wn) => Wn > 0 && ku !== void 0), he = this.matchIndexes[ve];
        return j.splice(0, ve), Object.assign(j, he);
      }
    }
    class q {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(N) {
        if (this.multiRegexes[N]) return this.multiRegexes[N];
        const j = new D();
        return this.rules.slice(N).forEach(([ve, he]) => j.addRule(ve, he)), j.compile(), this.multiRegexes[N] = j, j;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(N, j) {
        this.rules.push([N, j]), j.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(N) {
        const j = this.getMatcher(this.regexIndex);
        j.lastIndex = this.lastIndex;
        let ve = j.exec(N);
        if (this.resumingScanAtSamePosition() && !(ve && ve.index === this.lastIndex)) {
          const he = this.getMatcher(0);
          he.lastIndex = this.lastIndex + 1, ve = he.exec(N);
        }
        return ve && (this.regexIndex += ve.position + 1, this.regexIndex === this.count && this.considerAll()), ve;
      }
    }
    function fe(M) {
      const N = new q();
      return M.contains.forEach((j) => N.addRule(j.begin, { rule: j, type: "begin" })), M.terminatorEnd && N.addRule(M.terminatorEnd, { type: "end" }), M.illegal && N.addRule(M.illegal, { type: "illegal" }), N;
    }
    function de(M, N) {
      const j = (
        /** @type CompiledMode */
        M
      );
      if (M.isCompiled) return j;
      [
        wa,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Ca,
        La,
        Sa
      ].forEach((he) => he(M, N)), b.compilerExtensions.forEach((he) => he(M, N)), M.__beforeBegin = null, [
        ka,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        Aa,
        // default to 1 relevance if not specified
        Da
      ].forEach((he) => he(M, N)), M.isCompiled = !0;
      let ve = null;
      return typeof M.keywords == "object" && M.keywords.$pattern && (M.keywords = Object.assign({}, M.keywords), ve = M.keywords.$pattern, delete M.keywords.$pattern), ve = ve || /\w+/, M.keywords && (M.keywords = ai(M.keywords, b.case_insensitive)), j.keywordPatternRe = k(ve, !0), N && (M.begin || (M.begin = /\B|\b/), j.beginRe = k(j.begin), !M.end && !M.endsWithParent && (M.end = /\B|\b/), M.end && (j.endRe = k(j.end)), j.terminatorEnd = f(j.end) || "", M.endsWithParent && N.terminatorEnd && (j.terminatorEnd += (M.end ? "|" : "") + N.terminatorEnd)), M.illegal && (j.illegalRe = k(
        /** @type {RegExp | string} */
        M.illegal
      )), M.contains || (M.contains = []), M.contains = [].concat(...M.contains.map(function(he) {
        return Pa(he === "self" ? M : he);
      })), M.contains.forEach(function(he) {
        de(
          /** @type Mode */
          he,
          j
        );
      }), M.starts && de(M.starts, N), j.matcher = fe(j), j;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), de(
      /** @type Mode */
      b
    );
  }
  function di(b) {
    return b ? b.endsWithParent || di(b.starts) : !1;
  }
  function Pa(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(k) {
      return n(b, { variants: null }, k);
    })), b.cachedVariants ? b.cachedVariants : di(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var ja = "11.11.1";
  class za extends Error {
    constructor(k, D) {
      super(k), this.name = "HTMLInjectionError", this.html = D;
    }
  }
  const Hn = u, hi = n, pi = Symbol("nomatch"), Ua = 7, bi = function(b) {
    const k = /* @__PURE__ */ Object.create(null), D = /* @__PURE__ */ Object.create(null), q = [];
    let fe = !0;
    const de = "Could not find the language '{}', did you forget to load/include a language module?", M = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function j(C) {
      return N.noHighlightRe.test(C);
    }
    function ve(C) {
      let B = C.className + " ";
      B += C.parentNode ? C.parentNode.className : "";
      const K = N.languageDetectRe.exec(B);
      if (K) {
        const ue = Tt(K[1]);
        return ue || (li(de.replace("{}", K[1])), li("Falling back to no-highlight mode for this block.", C)), ue ? K[1] : "no-highlight";
      }
      return B.split(/\s+/).find((ue) => j(ue) || Tt(ue));
    }
    function he(C, B, K) {
      let ue = "", ge = "";
      typeof B == "object" ? (ue = C, K = B.ignoreIllegals, ge = B.language) : (Qt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), Qt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), ge = C, ue = B), K === void 0 && (K = !0);
      const nt = {
        code: ue,
        language: ge
      };
      Qu("before:highlight", nt);
      const Ft = nt.result ? nt.result : ku(nt.language, nt.code, K);
      return Ft.code = nt.code, Qu("after:highlight", Ft), Ft;
    }
    function ku(C, B, K, ue) {
      const ge = /* @__PURE__ */ Object.create(null);
      function nt(S, I) {
        return S.keywords[I];
      }
      function Ft() {
        if (!$.keywords) {
          Ae.addText(ne);
          return;
        }
        let S = 0;
        $.keywordPatternRe.lastIndex = 0;
        let I = $.keywordPatternRe.exec(ne), V = "";
        for (; I; ) {
          V += ne.substring(S, I.index);
          const Y = dt.case_insensitive ? I[0].toLowerCase() : I[0], Te = nt($, Y);
          if (Te) {
            const [yt, rc] = Te;
            if (Ae.addText(V), V = "", ge[Y] = (ge[Y] || 0) + 1, ge[Y] <= Ua && (un += rc), yt.startsWith("_"))
              V += I[0];
            else {
              const ic = dt.classNameAliases[yt] || yt;
              ft(I[0], ic);
            }
          } else
            V += I[0];
          S = $.keywordPatternRe.lastIndex, I = $.keywordPatternRe.exec(ne);
        }
        V += ne.substring(S), Ae.addText(V);
      }
      function en() {
        if (ne === "") return;
        let S = null;
        if (typeof $.subLanguage == "string") {
          if (!k[$.subLanguage]) {
            Ae.addText(ne);
            return;
          }
          S = ku($.subLanguage, ne, !0, wi[$.subLanguage]), wi[$.subLanguage] = /** @type {CompiledMode} */
          S._top;
        } else
          S = Vn(ne, $.subLanguage.length ? $.subLanguage : null);
        $.relevance > 0 && (un += S.relevance), Ae.__addSublanguage(S._emitter, S.language);
      }
      function Ge() {
        $.subLanguage != null ? en() : Ft(), ne = "";
      }
      function ft(S, I) {
        S !== "" && (Ae.startScope(I), Ae.addText(S), Ae.endScope());
      }
      function xi(S, I) {
        let V = 1;
        const Y = I.length - 1;
        for (; V <= Y; ) {
          if (!S._emit[V]) {
            V++;
            continue;
          }
          const Te = dt.classNameAliases[S[V]] || S[V], yt = I[V];
          Te ? ft(yt, Te) : (ne = yt, Ft(), ne = ""), V++;
        }
      }
      function vi(S, I) {
        return S.scope && typeof S.scope == "string" && Ae.openNode(dt.classNameAliases[S.scope] || S.scope), S.beginScope && (S.beginScope._wrap ? (ft(ne, dt.classNameAliases[S.beginScope._wrap] || S.beginScope._wrap), ne = "") : S.beginScope._multi && (xi(S.beginScope, I), ne = "")), $ = Object.create(S, { parent: { value: $ } }), $;
      }
      function yi(S, I, V) {
        let Y = _(S.endRe, V);
        if (Y) {
          if (S["on:end"]) {
            const Te = new t(S);
            S["on:end"](I, Te), Te.isMatchIgnored && (Y = !1);
          }
          if (Y) {
            for (; S.endsParent && S.parent; )
              S = S.parent;
            return S;
          }
        }
        if (S.endsWithParent)
          return yi(S.parent, I, V);
      }
      function Qa(S) {
        return $.matcher.regexIndex === 0 ? (ne += S[0], 1) : (Jn = !0, 0);
      }
      function ec(S) {
        const I = S[0], V = S.rule, Y = new t(V), Te = [V.__beforeBegin, V["on:begin"]];
        for (const yt of Te)
          if (yt && (yt(S, Y), Y.isMatchIgnored))
            return Qa(I);
        return V.skip ? ne += I : (V.excludeBegin && (ne += I), Ge(), !V.returnBegin && !V.excludeBegin && (ne = I)), vi(V, S), V.returnBegin ? 0 : I.length;
      }
      function tc(S) {
        const I = S[0], V = B.substring(S.index), Y = yi($, S, V);
        if (!Y)
          return pi;
        const Te = $;
        $.endScope && $.endScope._wrap ? (Ge(), ft(I, $.endScope._wrap)) : $.endScope && $.endScope._multi ? (Ge(), xi($.endScope, S)) : Te.skip ? ne += I : (Te.returnEnd || Te.excludeEnd || (ne += I), Ge(), Te.excludeEnd && (ne = I));
        do
          $.scope && Ae.closeNode(), !$.skip && !$.subLanguage && (un += $.relevance), $ = $.parent;
        while ($ !== Y.parent);
        return Y.starts && vi(Y.starts, S), Te.returnEnd ? 0 : I.length;
      }
      function uc() {
        const S = [];
        for (let I = $; I !== dt; I = I.parent)
          I.scope && S.unshift(I.scope);
        S.forEach((I) => Ae.openNode(I));
      }
      let tn = {};
      function Ei(S, I) {
        const V = I && I[0];
        if (ne += S, V == null)
          return Ge(), 0;
        if (tn.type === "begin" && I.type === "end" && tn.index === I.index && V === "") {
          if (ne += B.slice(I.index, I.index + 1), !fe) {
            const Y = new Error(`0 width match regex (${C})`);
            throw Y.languageName = C, Y.badRule = tn.rule, Y;
          }
          return 1;
        }
        if (tn = I, I.type === "begin")
          return ec(I);
        if (I.type === "illegal" && !K) {
          const Y = new Error('Illegal lexeme "' + V + '" for mode "' + ($.scope || "<unnamed>") + '"');
          throw Y.mode = $, Y;
        } else if (I.type === "end") {
          const Y = tc(I);
          if (Y !== pi)
            return Y;
        }
        if (I.type === "illegal" && V === "")
          return ne += `
`, 1;
        if (Kn > 1e5 && Kn > I.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ne += V, V.length;
      }
      const dt = Tt(C);
      if (!dt)
        throw qt(de.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const nc = Ba(dt);
      let Zn = "", $ = ue || nc;
      const wi = {}, Ae = new N.__emitter(N);
      uc();
      let ne = "", un = 0, $t = 0, Kn = 0, Jn = !1;
      try {
        if (dt.__emitTokens)
          dt.__emitTokens(B, Ae);
        else {
          for ($.matcher.considerAll(); ; ) {
            Kn++, Jn ? Jn = !1 : $.matcher.considerAll(), $.matcher.lastIndex = $t;
            const S = $.matcher.exec(B);
            if (!S) break;
            const I = B.substring($t, S.index), V = Ei(I, S);
            $t = S.index + V;
          }
          Ei(B.substring($t));
        }
        return Ae.finalize(), Zn = Ae.toHTML(), {
          language: C,
          value: Zn,
          relevance: un,
          illegal: !1,
          _emitter: Ae,
          _top: $
        };
      } catch (S) {
        if (S.message && S.message.includes("Illegal"))
          return {
            language: C,
            value: Hn(B),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: S.message,
              index: $t,
              context: B.slice($t - 100, $t + 100),
              mode: S.mode,
              resultSoFar: Zn
            },
            _emitter: Ae
          };
        if (fe)
          return {
            language: C,
            value: Hn(B),
            illegal: !1,
            relevance: 0,
            errorRaised: S,
            _emitter: Ae,
            _top: $
          };
        throw S;
      }
    }
    function Wn(C) {
      const B = {
        value: Hn(C),
        illegal: !1,
        relevance: 0,
        _top: M,
        _emitter: new N.__emitter(N)
      };
      return B._emitter.addText(C), B;
    }
    function Vn(C, B) {
      B = B || N.languages || Object.keys(k);
      const K = Wn(C), ue = B.filter(Tt).filter(_i).map(
        (Ge) => ku(Ge, C, !1)
      );
      ue.unshift(K);
      const ge = ue.sort((Ge, ft) => {
        if (Ge.relevance !== ft.relevance) return ft.relevance - Ge.relevance;
        if (Ge.language && ft.language) {
          if (Tt(Ge.language).supersetOf === ft.language)
            return 1;
          if (Tt(ft.language).supersetOf === Ge.language)
            return -1;
        }
        return 0;
      }), [nt, Ft] = ge, en = nt;
      return en.secondBest = Ft, en;
    }
    function qa(C, B, K) {
      const ue = B && D[B] || K;
      C.classList.add("hljs"), C.classList.add(`language-${ue}`);
    }
    function Gn(C) {
      let B = null;
      const K = ve(C);
      if (j(K)) return;
      if (Qu(
        "before:highlightElement",
        { el: C, language: K }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (N.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), N.throwUnescapedHTML))
        throw new za(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      B = C;
      const ue = B.textContent, ge = K ? he(ue, { language: K, ignoreIllegals: !0 }) : Vn(ue);
      C.innerHTML = ge.value, C.dataset.highlighted = "yes", qa(C, K, ge.language), C.result = {
        language: ge.language,
        // TODO: remove with version 11.0
        re: ge.relevance,
        relevance: ge.relevance
      }, ge.secondBest && (C.secondBest = {
        language: ge.secondBest.language,
        relevance: ge.secondBest.relevance
      }), Qu("after:highlightElement", { el: C, result: ge, text: ue });
    }
    function $a(C) {
      N = hi(N, C);
    }
    const Ha = () => {
      Yu(), Qt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function Wa() {
      Yu(), Qt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let gi = !1;
    function Yu() {
      function C() {
        Yu();
      }
      if (document.readyState === "loading") {
        gi || window.addEventListener("DOMContentLoaded", C, !1), gi = !0;
        return;
      }
      document.querySelectorAll(N.cssSelector).forEach(Gn);
    }
    function Va(C, B) {
      let K = null;
      try {
        K = B(b);
      } catch (ue) {
        if (qt("Language definition for '{}' could not be registered.".replace("{}", C)), fe)
          qt(ue);
        else
          throw ue;
        K = M;
      }
      K.name || (K.name = C), k[C] = K, K.rawDefinition = B.bind(null, b), K.aliases && mi(K.aliases, { languageName: C });
    }
    function Ga(C) {
      delete k[C];
      for (const B of Object.keys(D))
        D[B] === C && delete D[B];
    }
    function Za() {
      return Object.keys(k);
    }
    function Tt(C) {
      return C = (C || "").toLowerCase(), k[C] || k[D[C]];
    }
    function mi(C, { languageName: B }) {
      typeof C == "string" && (C = [C]), C.forEach((K) => {
        D[K.toLowerCase()] = B;
      });
    }
    function _i(C) {
      const B = Tt(C);
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
    function Xa(C) {
      const B = q.indexOf(C);
      B !== -1 && q.splice(B, 1);
    }
    function Qu(C, B) {
      const K = C;
      q.forEach(function(ue) {
        ue[K] && ue[K](B);
      });
    }
    function Ya(C) {
      return Qt("10.7.0", "highlightBlock will be removed entirely in v12.0"), Qt("10.7.0", "Please use highlightElement now."), Gn(C);
    }
    Object.assign(b, {
      highlight: he,
      highlightAuto: Vn,
      highlightAll: Yu,
      highlightElement: Gn,
      // TODO: Remove with v12 API
      highlightBlock: Ya,
      configure: $a,
      initHighlighting: Ha,
      initHighlightingOnLoad: Wa,
      registerLanguage: Va,
      unregisterLanguage: Ga,
      listLanguages: Za,
      getLanguage: Tt,
      registerAliases: mi,
      autoDetection: _i,
      inherit: hi,
      addPlugin: Ja,
      removePlugin: Xa
    }), b.debugMode = function() {
      fe = !1;
    }, b.safeMode = function() {
      fe = !0;
    }, b.versionString = ja, b.regex = {
      concat: x,
      lookahead: h,
      either: w,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const C in St)
      typeof St[C] == "object" && e(St[C]);
    return Object.assign(b, St), b;
  }, eu = bi({});
  return eu.newInstance = () => bi({}), gr = eu, eu.HighlightJS = eu, eu.default = eu, gr;
}
var yh = /* @__PURE__ */ vh();
const Oe = /* @__PURE__ */ xh(yh), wo = "[A-Za-z$_][0-9A-Za-z$_]*", Eh = [
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
], wh = [
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
], kh = [
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
  va,
  _a,
  xa
);
function Ch(e) {
  const t = e.regex, u = (ee, { after: _e }) => {
    const L = "</" + ee[0].slice(1);
    return ee.input.indexOf(L, _e) !== -1;
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
    isTrulyOpeningTag: (ee, _e) => {
      const L = ee[0].length + ee.index, W = ee.input[L];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        W === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        W === ","
      ) {
        _e.ignoreMatch();
        return;
      }
      W === ">" && (u(ee, { after: L }) || _e.ignoreMatch());
      let be;
      const xe = ee.input.substring(L);
      if (be = xe.match(/^\s*=/)) {
        _e.ignoreMatch();
        return;
      }
      if ((be = xe.match(/^\s+extends\s+/)) && be.index === 0) {
        _e.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: wo,
    keyword: Eh,
    literal: wh,
    built_in: Ah,
    "variable.language": kh
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
  }, x = {
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
  }, _ = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    x,
    m,
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
  const g = [].concat(E, h.contains), v = g.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(g)
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
  }, T = {
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
    contains: [A],
    illegal: /%/
  }, J = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function oe(ee) {
    return t.concat("(?!", ee.join("|"), ")");
  }
  const Z = {
    match: t.concat(
      /\b/,
      oe([
        ...va,
        "super",
        "import"
      ].map((ee) => `${ee}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, z = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(n, /(?![0-9A-Za-z$_(])/)
    )),
    end: n,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, U = {
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
  }, ie = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Pe = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(ie)
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
      x,
      m,
      E,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      R,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      Pe,
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
            begin: ie,
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
          A,
          e.inherit(e.TITLE_MODE, { begin: n, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      z,
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
      Z,
      J,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Dh(e) {
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
const Sh = (e) => ({
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
}), Th = [
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
], Fh = [
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
], Rh = [
  ...Th,
  ...Fh
], Oh = [
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
].sort().reverse(), Mh = [
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
].sort().reverse(), Ih = [
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
function Lh(e) {
  const t = e.regex, u = Sh(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
          { begin: ":(:)?(" + Mh.join("|") + ")" }
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
        begin: "\\b(" + Ih.join("|") + ")\\b"
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
              attribute: Oh.join(" ")
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
        begin: "\\b(" + Rh.join("|") + ")\\b"
      }
    ]
  };
}
function Bh(e) {
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
function Ph(e) {
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
    "on:begin": (z, U) => {
      U.data._beginMatch = z[1] || z[2];
    },
    "on:end": (z, U) => {
      U.data._beginMatch !== z[1] && U.ignoreMatch();
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
  }, x = {
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
  ], g = {
    keyword: w,
    literal: ((z) => {
      const U = [];
      return z.forEach((ie) => {
        U.push(ie), ie.toLowerCase() === ie ? U.push(ie.toUpperCase()) : U.push(ie.toLowerCase());
      }), U;
    })(m),
    built_in: E
  }, v = (z) => z.map((U) => U.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", v(E).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, T = t.concat(n, "\\b(?!\\()"), R = { variants: [
    {
      match: [
        t.concat(
          /::/,
          t.lookahead(/(?!class\b)/)
        ),
        T
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
        T
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
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, P = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: g,
    contains: [
      O,
      o,
      R,
      e.C_BLOCK_COMMENT_MODE,
      d,
      x,
      A
    ]
  }, J = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", v(w).join("\\b|"), "|", v(E).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [P]
  };
  P.contains.push(J);
  const oe = [
    O,
    R,
    e.C_BLOCK_COMMENT_MODE,
    d,
    x,
    A
  ], Z = {
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
    keywords: g,
    contains: [
      Z,
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
      J,
      R,
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
            keywords: g,
            contains: [
              "self",
              Z,
              o,
              R,
              e.C_BLOCK_COMMENT_MODE,
              d,
              x
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
      x
    ]
  };
}
function jh(e) {
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
  ].filter((v) => !l.includes(v)), x = {
    scope: "variable",
    match: /@[a-z0-9][a-z0-9_]*/
  }, m = {
    scope: "operator",
    match: /[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,
    relevance: 0
  }, w = {
    match: t.concat(/\b/, t.either(...p), /\s*\(/),
    relevance: 0,
    keywords: { built_in: p }
  };
  function E(v) {
    return t.concat(
      /\b/,
      t.either(...v.map((A) => A.replace(/\s+/, "\\s+"))),
      /\b/
    );
  }
  const _ = {
    scope: "keyword",
    match: E(h),
    relevance: 0
  };
  function g(v, {
    exceptions: A,
    when: T
  } = {}) {
    const R = T;
    return A = A || [], v.map((O) => O.match(/\|\d+$/) || A.includes(O) ? O : R(O) ? `${O}|0` : O);
  }
  return {
    name: "SQL",
    case_insensitive: !0,
    // does not include {} or HTML tags `</`
    illegal: /[{}]|<\//,
    keywords: {
      $pattern: /\b[\w\.]+/,
      keyword: g(d, { when: (v) => v.length < 3 }),
      literal: i,
      type: s,
      built_in: f
    },
    contains: [
      {
        scope: "type",
        match: E(o)
      },
      _,
      w,
      x,
      n,
      r,
      e.C_NUMBER_MODE,
      e.C_BLOCK_COMMENT_MODE,
      u,
      m
    ]
  };
}
Oe.registerLanguage("javascript", Ch);
Oe.registerLanguage("json", Dh);
Oe.registerLanguage("xml", ya);
Oe.registerLanguage("html", ya);
Oe.registerLanguage("css", Lh);
Oe.registerLanguage("markdown", Bh);
Oe.registerLanguage("php", Ph);
Oe.registerLanguage("sql", jh);
const it = new ut({
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
      return it.utils.escapeHtml(e);
    }
  }
});
it.enable(["table", "strikethrough"]);
it.renderer.rules.code_inline = function(e, t) {
  const u = e[t];
  return `<code class="md-inline-code">${it.utils.escapeHtml(u.content)}</code>`;
};
it.renderer.rules.fence = function(e, t) {
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
    o = it.utils.escapeHtml(r), s = "plaintext";
  }
  const a = it.utils.escapeHtml(r);
  return `<div class="md-codeblock"><div class="md-codeblock-header"><span class="md-codeblock-lang">${s}</span><button type="button" class="copy-code" data-code="${a}"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy-icon"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg><span class="copy-label">Copy Code</span></button></div><pre class="md-pre"><code class="hljs language-${s}">${o}</code></pre></div>`;
};
it.renderer.rules.link_open = function(e, t) {
  const u = e[t], n = u.attrIndex("href");
  if (n >= 0) {
    const r = u.attrs[n][1];
    u.attrs[n][1] = it.utils.escapeHtml(r);
  }
  return u.attrIndex("target") < 0 && u.attrPush(["target", "_blank"]), u.attrIndex("rel") < 0 && u.attrPush(["rel", "noopener noreferrer"]), it.renderer.renderToken(e, t, {});
};
function zh(e) {
  return e ? it.render(e) : "";
}
var Uh = /* @__PURE__ */ pe('<img alt="Bot Icon" class="avatar-image svelte-1369djj">'), qh = /* @__PURE__ */ pe("<div><!></div>"), $h = /* @__PURE__ */ pe('<div class="text svelte-1369djj"> </div>'), Hh = /* @__PURE__ */ pe('<div class="thinking svelte-1369djj"><span class="svelte-1369djj">Thinking</span> <div class="dots-container svelte-1369djj"><span class="dot svelte-1369djj"></span> <span class="dot svelte-1369djj"></span> <span class="dot svelte-1369djj"></span></div></div>'), Wh = /* @__PURE__ */ pe('<a target="_blank" rel="noopener noreferrer" class="svelte-1369djj"> </a>'), Vh = /* @__PURE__ */ pe('<span class="svelte-1369djj"> </span>'), Gh = /* @__PURE__ */ pe('<li class="source-item svelte-1369djj"><!></li>'), Zh = /* @__PURE__ */ pe('<div class="sources-block svelte-1369djj"><div class="sources-title svelte-1369djj">Sources</div> <ul class="sources-list svelte-1369djj"></ul></div>'), Kh = /* @__PURE__ */ pe("<div><!></div> <!>", 1), Jh = /* @__PURE__ */ pe('<div><div><!> <div><div><!></div> <div><span class="timestamp svelte-1369djj"> </span></div></div></div></div>');
const Xh = {
  hash: "svelte-1369djj",
  code: `.message-container.svelte-1369djj {display:flex;padding:0 0.5rem;margin-bottom:12px; /* increased space between messages */}.user-message.svelte-1369djj {justify-content:flex-end;}.bot-message.svelte-1369djj {justify-content:flex-start;}.message-content.svelte-1369djj {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.user-content.svelte-1369djj {flex-direction:row-reverse;}.bot-content.svelte-1369djj {flex-direction:row;}

  /* Match WidgetView preview: square avatar with rounded-md corners (size-8 equivalent) */.avatar.svelte-1369djj {width:2rem; /* size-8 */height:2rem; /* size-8 */border-radius:0.375rem; /* rounded-md */display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);overflow:hidden; /* ensure images are clipped to rounded corners */}.avatar.icon-url.svelte-1369djj {background-color:transparent;overflow:hidden;}.avatar-image.svelte-1369djj {width:100%;height:100%;object-fit:cover; /* fill and crop to match preview */display:block;}

  /* New flex-based body */.message-body.svelte-1369djj {display:flex;flex-direction:column;align-items:flex-start;gap:2px;max-width:100%;}.user-body.svelte-1369djj {align-items:flex-end;}.bot-body.svelte-1369djj {align-items:flex-start;}.bubble.svelte-1369djj {padding:0.55rem 0.8rem;border-radius:10px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);line-height:1.5;display:inline-flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);max-width:85%; /* reduce message width to fit better in smaller widget */position:relative;
    /* 0.92rem ≈ 14.7px -> use 15px */font-size:15px;}.user-bubble.svelte-1369djj {border-top-right-radius:3px;}.bot-bubble.svelte-1369djj {border-top-left-radius:3px;border:1px solid #e5e7eb;}.text.svelte-1369djj {white-space:pre-wrap;word-break:break-word;margin:0;padding:0;}.markdown.svelte-1369djj {width:100%;}.meta-row.svelte-1369djj {display:flex;width:100%;opacity:0;visibility:hidden;height:0;overflow:hidden;transition:opacity 120ms ease;}.user-meta.svelte-1369djj {justify-content:flex-end;}.bot-meta.svelte-1369djj {justify-content:flex-start;}.timestamp.svelte-1369djj {
    /* 0.625rem = 10px */font-size:10px;line-height:1;color:#6b7280;}

  /* Reveal timestamp (meta row) on hover/focus within the message body */.message-body.svelte-1369djj:hover .meta-row:where(.svelte-1369djj),
  .message-body.svelte-1369djj:focus-within .meta-row:where(.svelte-1369djj) {opacity:1;visibility:visible;height:auto;overflow:visible;margin-top:2px;}

  @keyframes svelte-1369djj-bounce {
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
    /* 0.875em of parent (~15px) ≈ 13px */font-size:13px;color:#1f2937;border:1px solid #e5e7eb;}.message-markdown .md-codeblock {margin:0.5rem 0;background:#ffffff;border:1px solid #e5e7eb;border-radius:0.5rem;overflow:visible;}.message-markdown .md-codeblock-header {display:flex;align-items:center;justify-content:space-between;padding:0.375rem 0.75rem;background:#f8fafc;border-bottom:1px solid #e5e7eb;}.message-markdown .md-codeblock-lang {display:inline-block;border-radius:0.25rem;background:#dbeafe; /* blue-100 */color:#1d4ed8; /* blue-700 */font-weight:600;padding:0.25rem 0.5rem;text-transform:uppercase;letter-spacing:0.03em;font-size:10px;}.message-markdown .copy-code {-webkit-appearance:none;appearance:none;border:none;border-radius:0.25rem;background:#0f172a; /* slate-900 */color:#ffffff;padding:0.25rem 0.5rem;display:inline-flex;align-items:center;gap:0.25rem;cursor:pointer;font-size:12px;}.message-markdown .copy-code:hover {background:#1e293b;}.message-markdown .copy-code:focus-visible {outline:2px solid #93c5fd; /* blue-300 */outline-offset:2px;}.message-markdown .copy-code:active {transform:scale(0.98);}.message-markdown .md-pre {overflow-x:auto;font-size:15px;line-height:1.625;margin:0; /* remove default ~1em margin around pre */border-bottom-left-radius:0.5rem;border-bottom-right-radius:0.5rem;}.message-markdown pre {overflow-x:auto; /* overflow-x-auto */max-width:100%; /* max-w-full */background-color:#f8fafc; /* light bg similar to Vue */}.message-markdown pre code {color:#1f2937;white-space:pre; /* ensure no wrapping inside code blocks */word-break:normal;overflow-wrap:normal;}.message-markdown img {max-width:100%;height:auto;}.streaming.svelte-1369djj {
    animation: svelte-1369djj-pulse 2s infinite ease-in-out;}
  @keyframes svelte-1369djj-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.thinking.svelte-1369djj {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.sources-block.svelte-1369djj {border-top:1px solid #e5e7eb;margin-top:8px;padding-top:6px;}.sources-title.svelte-1369djj {font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.05em;color:#374151;margin-bottom:4px;}.sources-list.svelte-1369djj {list-style:disc;padding-left:1.1rem;margin:0;display:flex;flex-direction:column;gap:2px;}.source-item.svelte-1369djj a:where(.svelte-1369djj) {font-size:11px;color:#2563eb;text-decoration:none;word-break:break-all;}.source-item.svelte-1369djj a:where(.svelte-1369djj):hover {text-decoration:underline;}.dots-container.svelte-1369djj {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-1369djj {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-1369djj-bounce 1.4s infinite ease-in-out both;}.dot.svelte-1369djj:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-1369djj:nth-child(2) {animation-delay:-0.16s;}.typing-animation.svelte-1369djj {
    animation: svelte-1369djj-typing 0.5s ease-in-out;}
  @keyframes svelte-1369djj-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }`
};
function Yh(e, t) {
  mu(t, !0), Fn(e, Xh);
  const u = rt(t, "isStreaming", 3, !1), n = rt(t, "hasStarted", 3, !1), r = rt(t, "sources", 19, () => []), i = rt(t, "showSources", 3, !0), o = { Bot: Fr, BotMessageSquare: Hs, Sparkle: Ws, Sparkles: Vs }, s = t.botIcon && (t.botIcon.startsWith("http://") || t.botIcon.startsWith("https://")), a = /* @__PURE__ */ Ke(() => !s && t.botIcon && o[t.botIcon] ? o[t.botIcon] : Fr), c = (O) => O.toLocaleString([], {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  }), l = /* @__PURE__ */ Ke(() => t.type === "bot" ? zh(t.content) : t.content);
  function f(O) {
    var U, ie;
    const P = O.target, J = (U = P == null ? void 0 : P.closest) == null ? void 0 : U.call(P, ".copy-code");
    if (!J) return;
    const oe = J.getAttribute("data-code") || "", Z = J.querySelector(".copy-label"), z = Z ? Z.textContent : "";
    (ie = navigator == null ? void 0 : navigator.clipboard) != null && ie.writeText && navigator.clipboard.writeText(oe).then(() => {
      Z && (Z.textContent = "Copied"), setTimeout(
        () => {
          Z && (Z.textContent = z || "Copy Code");
        },
        1500
      );
    }).catch(() => {
      Z && (Z.textContent = "Failed"), setTimeout(
        () => {
          Z && (Z.textContent = z || "Copy Code");
        },
        1500
      );
    });
  }
  let h = /* @__PURE__ */ ze(null);
  cu(() => {
    const O = F(h);
    if (!O) return;
    const P = (J) => f(J);
    return O.addEventListener("click", P), () => {
      O.removeEventListener("click", P);
    };
  });
  var p = Jh(), d = X(p), x = X(d);
  {
    var m = (O) => {
      var P = qh();
      Et(P, 1, `avatar ${s ? "icon-url" : ""}`, "svelte-1369djj");
      var J = X(P);
      {
        var oe = (z) => {
          var U = Uh();
          De(() => tt(U, "src", t.botIcon)), G(z, U);
        }, Z = (z, U) => {
          {
            var ie = (Pe) => {
              var ee = Se(), _e = me(ee);
              cs(_e, () => F(a), (L, W) => {
                W(L, { size: 20, strokeWidth: 2, color: "white" });
              }), G(Pe, ee);
            };
            Ie(
              z,
              (Pe) => {
                F(a) && Pe(ie);
              },
              U
            );
          }
        };
        Ie(J, (z) => {
          s ? z(oe) : z(Z, !1);
        });
      }
      De(() => {
        var z;
        return du(P, `background-color: ${(z = s ? "transparent" : t.colorHex) != null ? z : ""}`);
      }), G(O, P);
    };
    Ie(x, (O) => {
      t.type === "bot" && t.botIcon && O(m);
    });
  }
  var w = Fe(x, 2), E = X(w), _ = X(E);
  {
    var g = (O) => {
      var P = $h(), J = X(P);
      De(() => iu(J, t.content)), G(O, P);
    }, v = (O, P) => {
      {
        var J = (Z) => {
          var z = Hh();
          G(Z, z);
        }, oe = (Z) => {
          var z = Kh(), U = me(z), ie = X(U);
          E0(ie, () => F(l)), an(U, (_e) => ce(h, _e), () => F(h));
          var Pe = Fe(U, 2);
          {
            var ee = (_e) => {
              var L = Zh(), W = Fe(X(L), 2);
              Kr(W, 21, r, as, (be, xe) => {
                var lt = Gh(), wu = X(lt);
                {
                  var qn = (Dt) => {
                    var Ut = Wh(), St = X(Ut);
                    De(() => {
                      tt(Ut, "href", F(xe).source), iu(St, F(xe).title || F(xe).source);
                    }), G(Dt, Ut);
                  }, $n = (Dt) => {
                    var Ut = Vh(), St = X(Ut);
                    De(() => iu(St, F(xe).title || "Untitled")), G(Dt, Ut);
                  };
                  Ie(wu, (Dt) => {
                    F(xe).source ? Dt(qn) : Dt($n, !1);
                  });
                }
                De(() => tt(lt, "title", F(xe).source || "")), G(be, lt);
              }), G(_e, L);
            };
            Ie(Pe, (_e) => {
              i() && r() && r().length > 0 && _e(ee);
            });
          }
          De(() => Et(U, 1, `message-markdown markdown ${u() ? "typing-animation" : ""}`, "svelte-1369djj")), G(Z, z);
        };
        Ie(
          O,
          (Z) => {
            u() && !n() ? Z(J) : Z(oe, !1);
          },
          P
        );
      }
    };
    Ie(_, (O) => {
      t.type === "user" ? O(g) : O(v, !1);
    });
  }
  var A = Fe(E, 2), T = X(A), R = X(T);
  De(
    (O) => {
      var P, J, oe, Z;
      Et(p, 1, `message-container ${t.type === "user" ? "user-message" : "bot-message"}`, "svelte-1369djj"), Et(d, 1, `message-content ${t.type === "user" ? "user-content" : "bot-content"}`, "svelte-1369djj"), Et(w, 1, `message-body ${(P = t.type) != null ? P : ""}-body`, "svelte-1369djj"), Et(E, 1, `bubble ${(J = t.type) != null ? J : ""}-bubble ${u() ? "streaming" : ""}`, "svelte-1369djj"), du(E, `--message-color: ${(oe = t.type === "user" ? t.lighterColorHex : "white") != null ? oe : ""}; --text-color: ${t.type === "user" ? "white" : "#1f2937"}`), Et(A, 1, `meta-row ${(Z = t.type) != null ? Z : ""}-meta`, "svelte-1369djj"), iu(R, O);
    },
    [() => c(t.timestamp)]
  ), G(e, p), _u();
}
var Qh = /* @__PURE__ */ pe('<div class="loading-more svelte-wydm8m"><div class="loading-spinner svelte-wydm8m"></div> <span>Loading previous messages...</span></div>'), ep = (e, t) => {
  e.key === "Enter" && (e.shiftKey || (e.preventDefault(), t()));
}, tp = /* @__PURE__ */ pe('<div class="branding svelte-wydm8m">Powered by <a target="_blank" rel="noopener noreferrer" class="branding-link svelte-wydm8m"></a></div>'), up = /* @__PURE__ */ pe('<div class="chat-container svelte-wydm8m"><div class="messages-container svelte-wydm8m"><!> <!> <div class="bottom-anchor"></div></div> <form class="input-container svelte-wydm8m"><textarea placeholder="Type your message..." class="message-input svelte-wydm8m" rows="1"></textarea> <button type="submit" class="send-button svelte-wydm8m" aria-label="Send message" title="Send"><!></button></form> <!></div>');
const np = {
  hash: "svelte-wydm8m",
  code: `.chat-container.svelte-wydm8m {height:100%;display:flex;flex-direction:column;overflow:hidden;}.messages-container.svelte-wydm8m {flex:1;overflow-y:auto;
    /* Reduced horizontal padding (was 0.75rem) to tighten message list */padding:0.75rem 0.25rem 0;background-color:#f9fafb;display:flex;flex-direction:column;width:100%;box-sizing:border-box;min-height:0; /* Important for flex container */}.input-container.svelte-wydm8m {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:white;padding:0.75rem;width:100%;box-sizing:border-box;position:relative;}.message-input.svelte-wydm8m {width:100%;padding:0.5rem 3.25rem 0.5rem 0.75rem; /* add right padding for send button */border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;resize:none;min-height:2.5rem;max-height:120px;line-height:1.5;overflow-y:auto;transition:height 0.1s ease;display:block;}.message-input.svelte-wydm8m:focus {outline:none;border-color:var(--theme-color);}.message-input.svelte-wydm8m:disabled {background-color:#f9fafb;cursor:not-allowed;}.send-button.svelte-wydm8m {position:absolute;right:1rem;top:50%;transform:translateY(-50%);width:2rem;height:2rem;border:none;border-radius:9999px;display:flex;align-items:center;justify-content:center;color:var(--theme-color);background:transparent;cursor:pointer;transition:background-color 0.15s ease,
      transform 0.15s ease,
      opacity 0.15s ease;}

  /* Hover effect removed as requested */.send-button.svelte-wydm8m:disabled {opacity:0.5;cursor:not-allowed;}.loading-more.svelte-wydm8m {display:flex;align-items:center;justify-content:center;gap:0.5rem;padding:0.5rem;color:#6b7280;font-size:0.875rem;}.loading-spinner.svelte-wydm8m {width:1rem;height:1rem;border:2px solid #e5e7eb;border-top-color:#3b82f6;border-radius:50%;
    animation: svelte-wydm8m-spin 1s linear infinite;}

  @keyframes svelte-wydm8m-spin {
    to {
      transform: rotate(360deg);
    }
  }

  /* Branding line below the input */.branding.svelte-wydm8m {text-align:center;color:#94a3b8; /* slate-400 */font-size:11px;margin:0.25rem 0 0.5rem 0;}.branding-link.svelte-wydm8m {font-weight:600;color:var(--theme-color, #3b82f6);text-decoration:none;margin-left:0.25rem;font-size:inherit;display:inline-block;}`
};
function rp(e, t) {
  mu(t, !0), Fn(e, np);
  const [u, n] = M0(), r = () => N0(Je, "$chatStore", u), i = "fluentBot", o = "https://beta.fluentbot.ai";
  let s = /* @__PURE__ */ ze(""), a, c, l = /* @__PURE__ */ ze(!1), f = /* @__PURE__ */ ze(!0), h = /* @__PURE__ */ ze(!1), p, d = /* @__PURE__ */ Ke(() => r().messages), x = /* @__PURE__ */ Ke(() => r().isLoading), m = /* @__PURE__ */ Ke(() => r().hasMore), w = /* @__PURE__ */ Ke(() => r().currentChatId), E = /* @__PURE__ */ Ke(() => () => {
    var xe, lt;
    const L = F(d).length;
    if (L === 0) return "";
    const W = F(d)[L - 1], be = ((xe = W == null ? void 0 : W.message) != null ? xe : "").length;
    return `${(lt = W == null ? void 0 : W.id) != null ? lt : ""}:${be}`;
  });
  const _ = () => {
    if (!a) return !0;
    const L = 80, { scrollTop: W, scrollHeight: be, clientHeight: xe } = a;
    return be - (W + xe) <= L;
  }, g = (L = !1) => {
    if (!a) return;
    if (p) {
      p.scrollIntoView({
        behavior: L ? "smooth" : "auto",
        block: "end"
      });
      return;
    }
    const W = a.scrollHeight;
    L ? a.scrollTo({ top: W, behavior: "smooth" }) : a.scrollTop = W;
  }, v = () => Ee(null, null, function* () {
    if (!a || (F(h) && ce(f, _(), !0), F(l) || !F(m))) return;
    const { scrollTop: L } = a;
    L === 0 && F(w) && (ce(l, !0), yield $s(F(w), r().currentPage + 1), ce(l, !1));
  });
  ms(() => {
    requestAnimationFrame(() => g(!1));
    const L = new ResizeObserver(() => {
      F(f) && g(!1);
    });
    return a && L.observe(a), () => {
      L.disconnect();
    };
  });
  const A = () => {
    if (c) {
      c.style.height = "auto";
      const W = Math.min(c.scrollHeight, 120);
      c.style.height = `${W}px`;
    }
  };
  cu(() => {
    A();
  }), cu(() => {
    const L = F(d).length;
    if (F(E), !F(h) && L > 0) {
      u0().then(() => {
        requestAnimationFrame(() => {
          g(!1), ce(f, !0), ce(h, !0);
        });
      });
      return;
    }
    F(f) && requestAnimationFrame(() => g(!1));
  });
  const T = () => Ee(null, null, function* () {
    if (!F(s).trim()) return;
    const L = F(s);
    ce(s, ""), A(), ce(f, !0), yield Ef(L, t.settings);
  });
  var R = up(), O = X(R), P = X(O);
  {
    var J = (L) => {
      var W = Qh();
      G(L, W);
    };
    Ie(P, (L) => {
      F(l) && L(J);
    });
  }
  var oe = Fe(P, 2);
  Kr(oe, 17, () => F(d), (L) => L.id, (L, W) => {
    const be = /* @__PURE__ */ Ke(() => F(W).role === "human" ? "user" : "bot"), xe = /* @__PURE__ */ Ke(() => new Date(F(W).created_at)), lt = /* @__PURE__ */ Ke(() => F(W).id === "streaming"), wu = /* @__PURE__ */ Ke(() => F(W).id === "streaming" && F(W).message.length > 0);
    Yh(L, {
      get content() {
        return F(W).message;
      },
      get type() {
        return F(be);
      },
      get timestamp() {
        return F(xe);
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
        return F(lt);
      },
      get hasStarted() {
        return F(wu);
      },
      get sources() {
        return F(W).sources;
      },
      get showSources() {
        return t.settings.show_sources;
      }
    });
  });
  var Z = Fe(oe, 2);
  an(Z, (L) => p = L, () => p), an(O, (L) => a = L, () => a);
  var z = Fe(O, 2), U = X(z);
  U.__input = A, U.__keydown = [ep, T], an(U, (L) => c = L, () => c);
  var ie = Fe(U, 2), Pe = X(ie);
  Rf(Pe, { size: 18, strokeWidth: 2 });
  var ee = Fe(z, 2);
  {
    var _e = (L) => {
      var W = tp(), be = Fe(X(W));
      tt(be, "href", o), be.textContent = i, G(L, W);
    };
    Ie(ee, (L) => {
      t.settings.show_branding && L(_e);
    });
  }
  De(
    (L) => {
      var W, be;
      du(z, `--theme-color: ${(W = t.settings.color_hex) != null ? W : ""}; --hover-color: ${(be = t.settings.lighter_color_hex) != null ? be : ""}`), U.disabled = F(x), ie.disabled = L;
    },
    [
      () => F(x) || !F(s).trim()
    ]
  ), Mi("scroll", O, v), Mi("submit", z, (L) => {
    L.preventDefault(), T();
  }), T0(U, () => F(s), (L) => ce(s, L)), G(e, R), _u(), n();
}
Tn(["input", "keydown"]);
const Ce = [];
for (let e = 0; e < 256; ++e)
  Ce.push((e + 256).toString(16).slice(1));
function ip(e, t = 0) {
  return (Ce[e[t + 0]] + Ce[e[t + 1]] + Ce[e[t + 2]] + Ce[e[t + 3]] + "-" + Ce[e[t + 4]] + Ce[e[t + 5]] + "-" + Ce[e[t + 6]] + Ce[e[t + 7]] + "-" + Ce[e[t + 8]] + Ce[e[t + 9]] + "-" + Ce[e[t + 10]] + Ce[e[t + 11]] + Ce[e[t + 12]] + Ce[e[t + 13]] + Ce[e[t + 14]] + Ce[e[t + 15]]).toLowerCase();
}
let mr;
const op = new Uint8Array(16);
function sp() {
  if (!mr) {
    if (typeof crypto == "undefined" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    mr = crypto.getRandomValues.bind(crypto);
  }
  return mr(op);
}
const ap = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), ko = { randomUUID: ap };
function cp(e, t, u) {
  var r, i, o;
  if (ko.randomUUID && !e)
    return ko.randomUUID();
  e = e || {};
  const n = (o = (i = e.random) != null ? i : (r = e.rng) == null ? void 0 : r.call(e)) != null ? o : sp();
  if (n.length < 16)
    throw new Error("Random bytes length must be >= 16");
  return n[6] = n[6] & 15 | 64, n[8] = n[8] & 63 | 128, ip(n);
}
class lp {
  constructor(t) {
    Qe(this, "settings");
    this.settings = t;
  }
  initialize() {
    return Ee(this, null, function* () {
      yield this.initializeUserId(), yield this.initializeChat();
    });
  }
  initializeUserId() {
    return Ee(this, null, function* () {
      if (!localStorage.getItem("userId")) {
        const u = cp();
        localStorage.setItem("userId", u);
      }
    });
  }
  initializeChat() {
    return Ee(this, null, function* () {
      const t = localStorage.getItem("currentChatId");
      t ? yield $s(t) : this.settings.first_message && this.addInitialMessage();
    });
  }
  addInitialMessage() {
    this.settings.first_message && Je.update((t) => ye(se({}, t), {
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
    Je.update((t) => ye(se({}, t), {
      messages: [],
      filters: {
        sources: [],
        dateRange: null
      }
    })), localStorage.removeItem("currentChatId"), this.settings.first_message && this.addInitialMessage();
  }
}
const fp = (e, t) => {
  t.resetChat();
}, dp = (e, t) => {
  if (F(t)) {
    const u = new CustomEvent("minimize-widget");
    document.dispatchEvent(u), ce(t, !1);
  } else {
    const u = new CustomEvent("maximize-widget");
    document.dispatchEvent(u), ce(t, !0);
  }
};
var hp = /* @__PURE__ */ pe('<img class="logo svelte-160n4uf" loading="lazy" decoding="async">'), pp = /* @__PURE__ */ pe('<main class="svelte-160n4uf"><header class="main-header svelte-160n4uf"><div class="brand svelte-160n4uf"><!> <div class="title svelte-160n4uf"> </div></div> <div class="button-group svelte-160n4uf"><button class="icon-button svelte-160n4uf"><!></button> <button class="icon-button svelte-160n4uf" aria-label="Reset chat"><!></button></div></header> <div class="content svelte-160n4uf"><!></div></main>');
const bp = {
  hash: "svelte-160n4uf",
  code: `main.svelte-160n4uf {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden; /* preserve container rounded-corner clipping */}header.svelte-160n4uf {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;}.main-header.svelte-160n4uf {color:white;padding:0.5rem;display:flex;align-items:center;gap:0.5rem;flex-shrink:0;position:relative; /* ensure tooltips appear above content */z-index:2;}.brand.svelte-160n4uf {display:flex;align-items:center;gap:0.5rem;min-width:0; /* allow children to truncate */}.title.svelte-160n4uf {font-size:1.125rem;font-weight:600;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;}.logo.svelte-160n4uf {height:32px;max-width:120px;object-fit:contain;display:block;}.button-group.svelte-160n4uf {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-160n4uf {background:transparent;border:none;color:white;cursor:pointer;position:relative; /* enable tooltip positioning */display:inline-flex;align-items:center;justify-content:center;}

  /* Custom tooltip using aria-label as content */.icon-button.svelte-160n4uf::after {content:attr(aria-label);position:absolute;top:calc(
      100% + 8px
    ); /* place tooltip below to avoid clipping by container */left:50%;transform:translateX(-50%);background-color:rgba(17, 24, 39, 0.95); /* near-black */color:#fff;padding:6px 8px; /* padding as requested */border-radius:6px; /* rounded corners as requested */font-size:12px;line-height:1;white-space:nowrap;opacity:0;pointer-events:none;transition:opacity 150ms ease,
      transform 150ms ease;z-index:1000;}.icon-button.svelte-160n4uf:hover::after,
  .icon-button.svelte-160n4uf:focus-visible::after {opacity:1;transform:translateX(-50%) translateY(2px); /* slight downward nudge */}

  /* Keep the right-most tooltip inside the container by aligning it to the right edge of the button */.button-group.svelte-160n4uf .icon-button:where(.svelte-160n4uf):last-child::after {left:auto;right:0;transform:translateY(2px);}.content.svelte-160n4uf {flex:1;overflow:hidden; /* keep scrolling content masked while tooltips can overflow from header */}`
};
function gp(e, t) {
  mu(t, !0), Fn(e, bp);
  const u = new lp(t.settings);
  let n = /* @__PURE__ */ ze(!1);
  ms(() => Ee(null, null, function* () {
    yield u.initialize();
  }));
  var r = pp(), i = X(r), o = X(i), s = X(o);
  {
    var a = (g) => {
      var v = hp();
      De(() => {
        tt(v, "src", t.settings.header_logo), tt(v, "alt", t.settings.title_text ? t.settings.title_text + " logo" : "Logo");
      }), G(g, v);
    };
    Ie(s, (g) => {
      t.settings.header_logo && g(a);
    });
  }
  var c = Fe(s, 2), l = X(c), f = Fe(o, 2), h = X(f);
  h.__click = [dp, n];
  var p = X(h);
  {
    var d = (g) => {
      Ff(g, {});
    }, x = (g) => {
      Af(g, {});
    };
    Ie(p, (g) => {
      F(n) ? g(d) : g(x, !1);
    });
  }
  var m = Fe(h, 2);
  m.__click = [fp, u];
  var w = X(m);
  Of(w, {});
  var E = Fe(i, 2), _ = X(E);
  rp(_, {
    get settings() {
      return t.settings;
    }
  }), De(() => {
    var g;
    du(i, `background-color: ${(g = t.settings.color_hex) != null ? g : ""};`), tt(c, "title", t.settings.title_text), iu(l, t.settings.title_text), tt(h, "aria-label", F(n) ? "Collapse chat" : "Expand chat");
  }), G(e, r), _u();
}
Tn(["click"]);
const mp = "html,body{height:100%;margin:0;overflow:hidden}", _p = `pre code.hljs{display:block;overflow-x:auto;padding:1em}code.hljs{padding:3px 5px}/*!
  Theme: a11y-light
  Author: @ericwbailey
  Maintainer: @ericwbailey

  Based on the Tomorrow Night Eighties theme: https://github.com/isagalaev/highlight.js/blob/master/src/styles/tomorrow-night-eighties.css
*/.hljs{background:#fefefe;color:#545454}.hljs-comment,.hljs-quote{color:#696969}.hljs-variable,.hljs-template-variable,.hljs-tag,.hljs-name,.hljs-selector-id,.hljs-selector-class,.hljs-regexp,.hljs-deletion{color:#d91e18}.hljs-number,.hljs-built_in,.hljs-literal,.hljs-type,.hljs-params,.hljs-meta,.hljs-link,.hljs-attribute{color:#aa5d00}.hljs-string,.hljs-symbol,.hljs-bullet,.hljs-addition{color:green}.hljs-title,.hljs-section{color:#007faa}.hljs-keyword,.hljs-selector-tag{color:#7928a1}.hljs-emphasis{font-style:italic}.hljs-strong{font-weight:700}@media screen and (-ms-high-contrast: active){.hljs-addition,.hljs-attribute,.hljs-built_in,.hljs-bullet,.hljs-comment,.hljs-link,.hljs-literal,.hljs-meta,.hljs-number,.hljs-params,.hljs-string,.hljs-symbol,.hljs-type,.hljs-quote{color:highlight}.hljs-keyword,.hljs-selector-tag{font-weight:700}}`;
var xp = (e, t, u) => {
  var n;
  (n = u.onToggle) == null || n.call(u);
}, vp = /* @__PURE__ */ pe('<div class="close-icon svelte-9sm2tt"><!></div>'), yp = /* @__PURE__ */ pe('<img alt="Chat Icon" class="icon-image svelte-9sm2tt">'), Ep = /* @__PURE__ */ pe('<span class="button-text svelte-9sm2tt"> </span>'), wp = /* @__PURE__ */ pe('<div class="chat-icon svelte-9sm2tt"><!></div> <!>', 1), kp = /* @__PURE__ */ pe('<button id="chat-button"><!></button>');
const Ap = {
  hash: "svelte-9sm2tt",
  code: `#chat-button.svelte-9sm2tt {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;z-index:10000;}#chat-button.with-text.svelte-9sm2tt {padding:0 1.25rem;border-radius:100px;}

  /* Unified padding; custom image constrained by icon-image class */#chat-button.svelte-9sm2tt:hover {background-color:var(--hover-color) !important;transform:translateY(-1px);}#chat-button.active.svelte-9sm2tt {filter:brightness(0.9);}.chat-icon.svelte-9sm2tt,
  .close-icon.svelte-9sm2tt {display:flex;align-items:center;transition:transform 0.3s ease;}.button-text.svelte-9sm2tt {font-size:16px;font-weight:500;white-space:nowrap;}

  /* Icon visibility is now controlled by template conditionals */.icon-image.svelte-9sm2tt {width:28px;height:28px;object-fit:contain;display:block;}`
};
function Ao(e, t) {
  mu(t, !0), Fn(e, Ap);
  const u = /* @__PURE__ */ B0(t, ["$$slots", "$$events", "$$legacy"]), n = {
    MessageSquare: uo,
    MessageSquareMore: Sf,
    MessageCircle: Df,
    MessageCircleMore: Cf,
    MessagesSquare: Tf,
    Bot: Fr,
    BotMessageSquare: Hs,
    Sparkle: Ws,
    Sparkles: Vs
  }, r = /* @__PURE__ */ Ke(() => !!t.buttonIcon && t.buttonIcon.startsWith("https://")), i = /* @__PURE__ */ Ke(() => F(r) ? null : n[t.buttonIcon || "MessageSquare"] || uo);
  var o = kp();
  o.__click = [xp, u, t];
  let s;
  var a = X(o);
  {
    var c = (f) => {
      var h = vp(), p = X(h);
      Nf(p, { size: 24, strokeWidth: 2 }), G(f, h);
    }, l = (f) => {
      var h = wp(), p = me(h), d = X(p);
      {
        var x = (_) => {
          var g = yp();
          De(() => tt(g, "src", t.buttonIcon)), G(_, g);
        }, m = (_, g) => {
          {
            var v = (A) => {
              var T = Se(), R = me(T);
              cs(R, () => F(i), (O, P) => {
                P(O, { size: 24, strokeWidth: 2 });
              }), G(A, T);
            };
            Ie(
              _,
              (A) => {
                F(i) && A(v);
              },
              g
            );
          }
        };
        Ie(d, (_) => {
          F(r) ? _(x) : _(m, !1);
        });
      }
      var w = Fe(p, 2);
      {
        var E = (_) => {
          var g = Ep(), v = X(g);
          De(() => iu(v, t.buttonText)), G(_, g);
        };
        Ie(w, (_) => {
          t.showButtonText && !t.isOpen && _(E);
        });
      }
      G(f, h);
    };
    Ie(a, (f) => {
      t.isOpen ? f(c) : f(l, !1);
    });
  }
  De(
    (f) => {
      var h, p;
      tt(o, "aria-label", t.isOpen ? "Close chat" : "Open chat"), du(o, `background-color: ${(h = t.colorHex) != null ? h : ""}; --hover-color: ${(p = t.lighterColorHex) != null ? p : ""}`), s = Et(o, 1, "svelte-9sm2tt", null, s, f);
    },
    [
      () => ({
        active: t.isOpen,
        "with-text": t.showButtonText && !t.isOpen,
        "with-icon-url": F(r)
      })
    ]
  ), G(e, o), _u();
}
Tn(["click"]);
class Cp {
  constructor(t) {
    Qe(this, "container", null);
    Qe(this, "buttonContainer", null);
    Qe(this, "isOpen", !1);
    Qe(this, "isMaximized", !1);
    Qe(this, "clickHandler");
    Qe(this, "maximizeHandler");
    Qe(this, "minimizeHandler");
    Qe(this, "closeHandler");
    Qe(this, "settings", null);
    Qe(this, "chatButtonInstance", null);
    this.clickHandler = this.handleClickOutside.bind(this), this.maximizeHandler = this.maximizeWidget.bind(this), this.minimizeHandler = this.minimizeWidget.bind(this), this.closeHandler = () => {
      this.isOpen && this.toggleWidget();
    }, this.initialize(t);
  }
  fetchSettings(t) {
    return Ee(this, null, function* () {
      try {
        return (yield xf.get(`/api/bots/${t}/widget-settings`)).data.data;
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
          this.chatButtonInstance = tr(Ao, o);
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
                overflow: hidden;
                display: none;
                flex-direction: column;
                position: relative;
                background: white;
                border-radius: 0.5rem;
                box-shadow: 
                    rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
                    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
                margin-bottom: 1rem;
                opacity: 0;
                transform: translateY(20px) scale(0.95);
                transform-origin: bottom;
                transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
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

            ${_p}
            ${mp}
        `, t;
  }
  initialize(t) {
    return Ee(this, null, function* () {
      if (this.settings = yield this.fetchSettings(t), !this.settings) {
        console.warn("No widget settings found, widget will not be initialized");
        return;
      }
      const u = document.createElement("div");
      u.id = "fluent-bot-chat-widget-container", u.classList.add(`align-${this.settings.button_alignment}`);
      const n = u.attachShadow({ mode: "open" }), r = document.createElement("div");
      r.id = "fluent-bot-chat-widget";
      const i = document.createElement("div");
      i.id = "chat-button-container", n.appendChild(this.createStyles()), n.appendChild(r), n.appendChild(i), document.body.appendChild(u), this.container = r, this.buttonContainer = i, document.addEventListener("click", this.clickHandler, !0), document.addEventListener("close-widget", this.closeHandler), document.addEventListener("maximize-widget", this.maximizeHandler), document.addEventListener("minimize-widget", this.minimizeHandler), tr(gp, {
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
      this.chatButtonInstance = tr(Ao, o);
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
const Dp = () => document.querySelector(
  "#fluent-bot-chat-widget-container"
), Gp = (e) => {
  Dp() || new Cp(e);
};
export {
  Cp as FluentBotChatWidget,
  Gp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
