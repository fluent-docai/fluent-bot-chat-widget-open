var za = Object.defineProperty, Ua = Object.defineProperties;
var $a = Object.getOwnPropertyDescriptors;
var oi = Object.getOwnPropertySymbols;
var qa = Object.prototype.hasOwnProperty, Ha = Object.prototype.propertyIsEnumerable;
var Ht = (e, t) => (t = Symbol[e]) ? t : Symbol.for("Symbol." + e), ja = (e) => {
  throw TypeError(e);
};
var Ln = (e, t, u) => t in e ? za(e, t, { enumerable: !0, configurable: !0, writable: !0, value: u }) : e[t] = u, oe = (e, t) => {
  for (var u in t || (t = {}))
    qa.call(t, u) && Ln(e, u, t[u]);
  if (oi)
    for (var u of oi(t))
      Ha.call(t, u) && Ln(e, u, t[u]);
  return e;
}, _e = (e, t) => Ua(e, $a(t));
var jt = (e, t, u) => Ln(e, typeof t != "symbol" ? t + "" : t, u);
var qe = (e, t, u) => new Promise((n, r) => {
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
}), Mt = function(e, t) {
  this[0] = e, this[1] = t;
}, Bn = (e, t, u) => {
  var n = (o, s, a, c) => {
    try {
      var l = u[o](s), f = (s = l.value) instanceof Mt, h = l.done;
      Promise.resolve(f ? s[0] : s).then((p) => f ? n(o === "return" ? o : "next", s[1] ? { done: p.done, value: p.value } : p, a, c) : a({ value: p, done: h })).catch((p) => n("throw", p, a, c));
    } catch (p) {
      c(p);
    }
  }, r = (o) => i[o] = (s) => new Promise((a, c) => n(o, s, a, c)), i = {};
  return u = u.apply(e, t), i[Ht("asyncIterator")] = () => i, r("next"), r("throw"), r("return"), i;
}, Pn = (e) => {
  var t = e[Ht("asyncIterator")], u = !1, n, r = {};
  return t == null ? (t = e[Ht("iterator")](), n = (i) => r[i] = (o) => t[i](o)) : (t = t.call(e), n = (i) => r[i] = (o) => {
    if (u) {
      if (u = !1, i === "throw") throw o;
      return o;
    }
    return u = !0, {
      done: !1,
      value: new Mt(new Promise((s) => {
        var a = t[i](o);
        a instanceof Object || ja("Object expected"), s(a);
      }), 1)
    };
  }), r[Ht("iterator")] = () => r, n("next"), "throw" in t ? n("throw") : r.throw = (i) => {
    throw i;
  }, "return" in t && n("return"), r;
}, si = (e, t, u) => (t = e[Ht("asyncIterator")]) ? t.call(e) : (e = e[Ht("iterator")](), t = {}, u = (n, r) => (r = e[n]) && (t[n] = (i) => new Promise((o, s, a) => (i = r.call(e, i), a = i.done, Promise.resolve(i.value).then((c) => o({ value: c, done: a }), s)))), u("next"), u("return"), t);
var hr = Array.isArray, Ga = Array.prototype.indexOf, pr = Array.from, eo = Object.defineProperty, kt = Object.getOwnPropertyDescriptor, to = Object.getOwnPropertyDescriptors, Za = Object.prototype, Wa = Array.prototype, br = Object.getPrototypeOf;
function cu(e) {
  return typeof e == "function";
}
const wt = () => {
};
function Ka(e) {
  return e();
}
function Ju(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
const We = 2, uo = 4, fn = 8, gr = 16, bt = 32, yu = 64, Xu = 128, Le = 256, Yu = 512, ye = 1024, Nt = 2048, tu = 4096, pt = 8192, dn = 16384, Va = 32768, vu = 65536, Ja = 1 << 17, Xa = 1 << 19, no = 1 << 20, At = Symbol("$state"), ro = Symbol("legacy props"), Ya = Symbol("");
function io(e) {
  return e === this.v;
}
function oo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function _r(e) {
  return !oo(e, this.v);
}
function Qa(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ec() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function tc(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function uc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function nc(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function rc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function ic() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function oc() {
  throw new Error("https://svelte.dev/e/state_unsafe_local_read");
}
function sc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let uu = !1;
function ac() {
  uu = !0;
}
const mr = 1, xr = 2, so = 4, cc = 8, lc = 16, fc = 1, dc = 2, ao = 4, hc = 8, pc = 16, bc = 2, ke = Symbol(), co = "http://www.w3.org/2000/svg";
function gc(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let ne = null;
function ai(e) {
  ne = e;
}
function ku(e, t = !1, u) {
  ne = {
    p: ne,
    c: null,
    e: null,
    m: !1,
    s: e,
    x: null,
    l: null
  }, uu && !t && (ne.l = {
    s: null,
    u: null,
    r1: [],
    r2: we(!1)
  });
}
function wu(e) {
  const t = ne;
  if (t !== null) {
    const o = t.e;
    if (o !== null) {
      var u = Y, n = X;
      t.e = null;
      try {
        for (var r = 0; r < o.length; r++) {
          var i = o[r];
          Tt(i.effect), Dt(i.reaction), vr(i.fn);
        }
      } finally {
        Tt(u), Dt(n);
      }
    }
    ne = t.p, t.m = !0;
  }
  return (
    /** @type {T} */
    {}
  );
}
function Au() {
  return !uu || ne !== null && ne.l === null;
}
function we(e, t) {
  var u = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: io,
    rv: 0,
    wv: 0
  };
  return u;
}
function _c(e) {
  return /* @__PURE__ */ mc(we(e));
}
// @__NO_SIDE_EFFECTS__
function Er(e, t = !1) {
  var n, r;
  const u = we(e);
  return t || (u.equals = _r), uu && ne !== null && ne.l !== null && ((r = (n = ne.l).s) != null ? r : n.s = []).push(u), u;
}
// @__NO_SIDE_EFFECTS__
function mc(e) {
  return X !== null && !je && (X.f & We) !== 0 && (rt === null ? Tc([e]) : rt.push(e)), e;
}
function Ne(e, t) {
  return X !== null && !je && Au() && (X.f & (We | gr)) !== 0 && // If the source was created locally within the current derived, then
  // we allow the mutation.
  (rt === null || !rt.includes(e)) && sc(), Yn(e, t);
}
function Yn(e, t) {
  return e.equals(t) || (e.v, e.v = t, e.wv = Ao(), lo(e, Nt), Au() && Y !== null && (Y.f & ye) !== 0 && (Y.f & (bt | yu)) === 0 && (ht === null ? Rc([e]) : ht.push(e))), t;
}
function ci(e, t = 1) {
  var u = q(e), n = t === 1 ? u++ : u--;
  return Ne(e, u), n;
}
function lo(e, t) {
  var u = e.reactions;
  if (u !== null)
    for (var n = Au(), r = u.length, i = 0; i < r; i++) {
      var o = u[i], s = o.f;
      (s & Nt) === 0 && (!n && o === Y || (ot(o, t), (s & (ye | Le)) !== 0 && ((s & We) !== 0 ? lo(
        /** @type {Derived} */
        o,
        tu
      ) : gn(
        /** @type {Effect} */
        o
      ))));
    }
}
let xc = !1;
function Kt(e, t = null, u) {
  if (typeof e != "object" || e === null || At in e)
    return e;
  const n = br(e);
  if (n !== Za && n !== Wa)
    return e;
  var r = /* @__PURE__ */ new Map(), i = hr(e), o = we(0);
  i && r.set("length", we(
    /** @type {any[]} */
    e.length
  ));
  var s;
  return new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, l) {
        (!("value" in l) || l.configurable === !1 || l.enumerable === !1 || l.writable === !1) && rc();
        var f = r.get(c);
        return f === void 0 ? (f = we(l.value), r.set(c, f)) : Ne(f, Kt(l.value, s)), !0;
      },
      deleteProperty(a, c) {
        var l = r.get(c);
        if (l === void 0)
          c in a && r.set(c, we(ke));
        else {
          if (i && typeof c == "string") {
            var f = (
              /** @type {Source<number>} */
              r.get("length")
            ), h = Number(c);
            Number.isInteger(h) && h < f.v && Ne(f, h);
          }
          Ne(l, ke), li(o);
        }
        return !0;
      },
      get(a, c, l) {
        var d;
        if (c === At)
          return e;
        var f = r.get(c), h = c in a;
        if (f === void 0 && (!h || (d = kt(a, c)) != null && d.writable) && (f = we(Kt(h ? a[c] : ke, s)), r.set(c, f)), f !== void 0) {
          var p = q(f);
          return p === ke ? void 0 : p;
        }
        return Reflect.get(a, c, l);
      },
      getOwnPropertyDescriptor(a, c) {
        var l = Reflect.getOwnPropertyDescriptor(a, c);
        if (l && "value" in l) {
          var f = r.get(c);
          f && (l.value = q(f));
        } else if (l === void 0) {
          var h = r.get(c), p = h == null ? void 0 : h.v;
          if (h !== void 0 && p !== ke)
            return {
              enumerable: !0,
              configurable: !0,
              value: p,
              writable: !0
            };
        }
        return l;
      },
      has(a, c) {
        var p;
        if (c === At)
          return !0;
        var l = r.get(c), f = l !== void 0 && l.v !== ke || Reflect.has(a, c);
        if (l !== void 0 || Y !== null && (!f || (p = kt(a, c)) != null && p.writable)) {
          l === void 0 && (l = we(f ? Kt(a[c], s) : ke), r.set(c, l));
          var h = q(l);
          if (h === ke)
            return !1;
        }
        return f;
      },
      set(a, c, l, f) {
        var y;
        var h = r.get(c), p = c in a;
        if (i && c === "length")
          for (var d = l; d < /** @type {Source<number>} */
          h.v; d += 1) {
            var g = r.get(d + "");
            g !== void 0 ? Ne(g, ke) : d in a && (g = we(ke), r.set(d + "", g));
          }
        h === void 0 ? (!p || (y = kt(a, c)) != null && y.writable) && (h = we(void 0), Ne(h, Kt(l, s)), r.set(c, h)) : (p = h.v !== ke, Ne(h, Kt(l, s)));
        var _ = Reflect.getOwnPropertyDescriptor(a, c);
        if (_ != null && _.set && _.set.call(f, l), !p) {
          if (i && typeof c == "string") {
            var k = (
              /** @type {Source<number>} */
              r.get("length")
            ), v = Number(c);
            Number.isInteger(v) && v >= k.v && Ne(k, v + 1);
          }
          li(o);
        }
        return !0;
      },
      ownKeys(a) {
        q(o);
        var c = Reflect.ownKeys(a).filter((h) => {
          var p = r.get(h);
          return p === void 0 || p.v !== ke;
        });
        for (var [l, f] of r)
          f.v !== ke && !(l in a) && c.push(l);
        return c;
      },
      setPrototypeOf() {
        ic();
      }
    }
  );
}
function li(e, t = 1) {
  Ne(e, e.v + t);
}
var fi, fo, ho, po;
function Ec() {
  if (fi === void 0) {
    fi = window, fo = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype;
    ho = kt(t, "firstChild").get, po = kt(t, "nextSibling").get, e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__styles = null, e.__e = void 0, Text.prototype.__t = void 0;
  }
}
function hn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return ho.call(e);
}
// @__NO_SIDE_EFFECTS__
function pn(e) {
  return po.call(e);
}
function W(e, t) {
  return /* @__PURE__ */ Xt(e);
}
function Ie(e, t) {
  {
    var u = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ Xt(
        /** @type {Node} */
        e
      )
    );
    return u instanceof Comment && u.data === "" ? /* @__PURE__ */ pn(u) : u;
  }
}
function Ge(e, t = 1, u = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ pn(n);
  return n;
}
function yc(e) {
  e.textContent = "";
}
// @__NO_SIDE_EFFECTS__
function He(e) {
  var t = We | Nt, u = X !== null && (X.f & We) !== 0 ? (
    /** @type {Derived} */
    X
  ) : null;
  return Y === null || u !== null && (u.f & Le) !== 0 ? t |= Le : Y.f |= no, {
    ctx: ne,
    deps: null,
    effects: null,
    equals: io,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      null
    ),
    wv: 0,
    parent: u != null ? u : Y
  };
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  const t = /* @__PURE__ */ He(e);
  return t.equals = _r, t;
}
function bo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var u = 0; u < t.length; u += 1)
      it(
        /** @type {Effect} */
        t[u]
      );
  }
}
function vc(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & We) === 0)
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function kc(e) {
  var t, u = Y;
  Tt(vc(e));
  try {
    bo(e), t = So(e);
  } finally {
    Tt(u);
  }
  return t;
}
function go(e) {
  var t = kc(e), u = (yt || (e.f & Le) !== 0) && e.deps !== null ? tu : ye;
  ot(e, u), e.equals(t) || (e.v = t, e.wv = Ao());
}
function _o(e) {
  Y === null && X === null && tc(), X !== null && (X.f & Le) !== 0 && Y === null && ec(), Ar && Qa();
}
function wc(e, t) {
  var u = t.last;
  u === null ? t.last = t.first = e : (u.next = e, e.prev = u, t.last = e);
}
function nu(e, t, u, n = !0) {
  var c;
  var r = (e & yu) !== 0, i = Y, o = {
    ctx: ne,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Nt,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r ? null : i,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0
  };
  if (u)
    try {
      Cr(o), o.f |= Va;
    } catch (l) {
      throw it(o), l;
    }
  else t !== null && gn(o);
  var s = u && o.deps === null && o.first === null && o.nodes_start === null && o.teardown === null && (o.f & (no | Xu)) === 0;
  if (!s && !r && n && (i !== null && wc(o, i), X !== null && (X.f & We) !== 0)) {
    var a = (
      /** @type {Derived} */
      X
    );
    ((c = a.effects) != null ? c : a.effects = []).push(o);
  }
  return o;
}
function mo(e) {
  const t = nu(fn, null, !1);
  return ot(t, ye), t.teardown = e, t;
}
function pu(e) {
  var r;
  _o();
  var t = Y !== null && (Y.f & bt) !== 0 && ne !== null && !ne.m;
  if (t) {
    var u = (
      /** @type {ComponentContext} */
      ne
    );
    ((r = u.e) != null ? r : u.e = []).push({
      fn: e,
      effect: Y,
      reaction: X
    });
  } else {
    var n = vr(e);
    return n;
  }
}
function Ac(e) {
  return _o(), kr(e);
}
function Cc(e) {
  const t = nu(yu, e, !0);
  return (u = {}) => new Promise((n) => {
    u.outro ? Yt(t, () => {
      it(t), n(void 0);
    }) : (it(t), n(void 0));
  });
}
function vr(e) {
  return nu(uo, e, !1);
}
function kr(e) {
  return nu(fn, e, !0);
}
function Ze(e, t = [], u = He) {
  const n = t.map(u);
  return ru(() => e(...n.map(q)));
}
function ru(e, t = 0) {
  return nu(fn | gr | t, e, !0);
}
function St(e, t = !0) {
  return nu(fn | bt, e, !0, t);
}
function xo(e) {
  var t = e.teardown;
  if (t !== null) {
    const u = Ar, n = X;
    di(!0), Dt(null);
    try {
      t.call(null);
    } finally {
      di(u), Dt(n);
    }
  }
}
function Eo(e, t = !1) {
  var u = e.first;
  for (e.first = e.last = null; u !== null; ) {
    var n = u.next;
    it(u, t), u = n;
  }
}
function Sc(e) {
  for (var t = e.first; t !== null; ) {
    var u = t.next;
    (t.f & bt) === 0 && it(t), t = u;
  }
}
function it(e, t = !0) {
  var u = !1;
  if ((t || (e.f & Xa) !== 0) && e.nodes_start !== null) {
    for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
      var i = n === r ? null : (
        /** @type {TemplateNode} */
        /* @__PURE__ */ pn(n)
      );
      n.remove(), n = i;
    }
    u = !0;
  }
  Eo(e, t && !u), un(e, 0), ot(e, dn);
  var o = e.transitions;
  if (o !== null)
    for (const a of o)
      a.stop();
  xo(e);
  var s = e.parent;
  s !== null && s.first !== null && yo(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes_start = e.nodes_end = null;
}
function yo(e) {
  var t = e.parent, u = e.prev, n = e.next;
  u !== null && (u.next = n), n !== null && (n.prev = u), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = u));
}
function Yt(e, t) {
  var u = [];
  wr(e, u, !0), vo(u, () => {
    it(e), t && t();
  });
}
function vo(e, t) {
  var u = e.length;
  if (u > 0) {
    var n = () => --u || t();
    for (var r of e)
      r.out(n);
  } else
    t();
}
function wr(e, t, u) {
  if ((e.f & pt) === 0) {
    if (e.f ^= pt, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || u) && t.push(o);
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & vu) !== 0 || (n.f & bt) !== 0;
      wr(n, t, i ? u : !1), n = r;
    }
  }
}
function bu(e) {
  ko(e, !0);
}
function ko(e, t) {
  if ((e.f & pt) !== 0) {
    e.f ^= pt, (e.f & ye) === 0 && (e.f ^= ye), Su(e) && (ot(e, Nt), gn(e));
    for (var u = e.first; u !== null; ) {
      var n = u.next, r = (u.f & vu) !== 0 || (u.f & bt) !== 0;
      ko(u, r ? t : !1), u = n;
    }
    if (e.transitions !== null)
      for (const i of e.transitions)
        (i.is_global || t) && i.in();
  }
}
let Qu = [];
function Dc() {
  var e = Qu;
  Qu = [], Ju(e);
}
function Cu(e) {
  Qu.length === 0 && queueMicrotask(Dc), Qu.push(e);
}
let ju = !1, Qn = !1, en = null, Gu = !1, Ar = !1;
function di(e) {
  Ar = e;
}
let Zu = [];
let X = null, je = !1;
function Dt(e) {
  X = e;
}
let Y = null;
function Tt(e) {
  Y = e;
}
let rt = null;
function Tc(e) {
  rt = e;
}
let Ee = null, Re = 0, ht = null;
function Rc(e) {
  ht = e;
}
let wo = 1, tn = 0, yt = !1;
function Ao() {
  return ++wo;
}
function Su(e) {
  var f, h;
  var t = e.f;
  if ((t & Nt) !== 0)
    return !0;
  if ((t & tu) !== 0) {
    var u = e.deps, n = (t & Le) !== 0;
    if (u !== null) {
      var r, i, o = (t & Yu) !== 0, s = n && Y !== null && !yt, a = u.length;
      if (o || s) {
        var c = (
          /** @type {Derived} */
          e
        ), l = c.parent;
        for (r = 0; r < a; r++)
          i = u[r], (o || !((f = i == null ? void 0 : i.reactions) != null && f.includes(c))) && ((h = i.reactions) != null ? h : i.reactions = []).push(c);
        o && (c.f ^= Yu), s && l !== null && (l.f & Le) === 0 && (c.f ^= Le);
      }
      for (r = 0; r < a; r++)
        if (i = u[r], Su(
          /** @type {Derived} */
          i
        ) && go(
          /** @type {Derived} */
          i
        ), i.wv > e.wv)
          return !0;
    }
    (!n || Y !== null && !yt) && ot(e, ye);
  }
  return !1;
}
function Nc(e, t) {
  for (var u = t; u !== null; ) {
    if ((u.f & Xu) !== 0)
      try {
        u.fn(e);
        return;
      } catch (n) {
        u.f ^= Xu;
      }
    u = u.parent;
  }
  throw ju = !1, e;
}
function Oc(e) {
  return (e.f & dn) === 0 && (e.parent === null || (e.parent.f & Xu) === 0);
}
function bn(e, t, u, n) {
  if (ju) {
    if (u === null && (ju = !1), Oc(t))
      throw e;
    return;
  }
  u !== null && (ju = !0);
  {
    Nc(e, t);
    return;
  }
}
function Co(e, t, u = !0) {
  var n = e.reactions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      (i.f & We) !== 0 ? Co(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (u ? ot(i, Nt) : (i.f & ye) !== 0 && ot(i, tu), gn(
        /** @type {Effect} */
        i
      ));
    }
}
function So(e) {
  var p, d;
  var t = Ee, u = Re, n = ht, r = X, i = yt, o = rt, s = ne, a = je, c = e.f;
  Ee = /** @type {null | Value[]} */
  null, Re = 0, ht = null, yt = (c & Le) !== 0 && (je || !Gu || X === null), X = (c & (bt | yu)) === 0 ? e : null, rt = null, ai(e.ctx), je = !1, tn++;
  try {
    var l = (
      /** @type {Function} */
      (0, e.fn)()
    ), f = e.deps;
    if (Ee !== null) {
      var h;
      if (un(e, Re), f !== null && Re > 0)
        for (f.length = Re + Ee.length, h = 0; h < Ee.length; h++)
          f[Re + h] = Ee[h];
      else
        e.deps = f = Ee;
      if (!yt)
        for (h = Re; h < f.length; h++)
          ((d = (p = f[h]).reactions) != null ? d : p.reactions = []).push(e);
    } else f !== null && Re < f.length && (un(e, Re), f.length = Re);
    if (Au() && ht !== null && !je && f !== null && (e.f & (We | tu | Nt)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      ht.length; h++)
        Co(
          ht[h],
          /** @type {Effect} */
          e
        );
    return r !== null && tn++, l;
  } finally {
    Ee = t, Re = u, ht = n, X = r, yt = i, rt = o, ai(s), je = a;
  }
}
function Fc(e, t) {
  let u = t.reactions;
  if (u !== null) {
    var n = Ga.call(u, e);
    if (n !== -1) {
      var r = u.length - 1;
      r === 0 ? u = t.reactions = null : (u[n] = u[r], u.pop());
    }
  }
  u === null && (t.f & We) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ee === null || !Ee.includes(t)) && (ot(t, tu), (t.f & (Le | Yu)) === 0 && (t.f ^= Yu), bo(
    /** @type {Derived} **/
    t
  ), un(
    /** @type {Derived} **/
    t,
    0
  ));
}
function un(e, t) {
  var u = e.deps;
  if (u !== null)
    for (var n = t; n < u.length; n++)
      Fc(e, u[n]);
}
function Cr(e) {
  var t = e.f;
  if ((t & dn) === 0) {
    ot(e, ye);
    var u = Y, n = ne, r = Gu;
    Y = e, Gu = !0;
    try {
      (t & gr) !== 0 ? Sc(e) : Eo(e), xo(e);
      var i = So(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = wo;
      var o = e.deps, s;
    } catch (a) {
      bn(a, e, u, n || e.ctx);
    } finally {
      Gu = r, Y = u;
    }
  }
}
function Ic() {
  try {
    uc();
  } catch (e) {
    if (en !== null)
      bn(e, en, null);
    else
      throw e;
  }
}
function Mc() {
  try {
    for (var e = 0; Zu.length > 0; ) {
      e++ > 1e3 && Ic();
      var t = Zu, u = t.length;
      Zu = [];
      for (var n = 0; n < u; n++) {
        var r = t[n];
        (r.f & ye) === 0 && (r.f ^= ye);
        var i = Bc(r);
        Lc(i);
      }
    }
  } finally {
    Qn = !1, en = null;
  }
}
function Lc(e) {
  var t = e.length;
  if (t !== 0)
    for (var u = 0; u < t; u++) {
      var n = e[u];
      if ((n.f & (dn | pt)) === 0)
        try {
          Su(n) && (Cr(n), n.deps === null && n.first === null && n.nodes_start === null && (n.teardown === null ? yo(n) : n.fn = null));
        } catch (r) {
          bn(r, n, null, n.ctx);
        }
    }
}
function gn(e) {
  Qn || (Qn = !0, queueMicrotask(Mc));
  for (var t = en = e; t.parent !== null; ) {
    t = t.parent;
    var u = t.f;
    if ((u & (yu | bt)) !== 0) {
      if ((u & ye) === 0) return;
      t.f ^= ye;
    }
  }
  Zu.push(t);
}
function Bc(e) {
  for (var t = [], u = e.first; u !== null; ) {
    var n = u.f, r = (n & bt) !== 0, i = r && (n & ye) !== 0;
    if (!i && (n & pt) === 0) {
      if ((n & uo) !== 0)
        t.push(u);
      else if (r)
        u.f ^= ye;
      else {
        var o = X;
        try {
          X = u, Su(u) && Cr(u);
        } catch (c) {
          bn(c, u, null, u.ctx);
        } finally {
          X = o;
        }
      }
      var s = u.first;
      if (s !== null) {
        u = s;
        continue;
      }
    }
    var a = u.parent;
    for (u = u.next; u === null && a !== null; )
      u = a.next, a = a.parent;
  }
  return t;
}
function q(e) {
  var t = e.f, u = (t & We) !== 0;
  if (X !== null && !je) {
    rt !== null && rt.includes(e) && oc();
    var n = X.deps;
    e.rv < tn && (e.rv = tn, Ee === null && n !== null && n[Re] === e ? Re++ : Ee === null ? Ee = [e] : (!yt || !Ee.includes(e)) && Ee.push(e));
  } else if (u && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var r = (
      /** @type {Derived} */
      e
    ), i = r.parent;
    i !== null && (i.f & Le) === 0 && (r.f ^= Le);
  }
  return u && (r = /** @type {Derived} */
  e, Su(r) && go(r)), e.v;
}
function zt(e) {
  var t = je;
  try {
    return je = !0, e();
  } finally {
    je = t;
  }
}
const Pc = -7169;
function ot(e, t) {
  e.f = e.f & Pc | t;
}
function zc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (At in e)
      er(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const u = e[t];
        typeof u == "object" && u && At in u && er(u);
      }
  }
}
function er(e, t = /* @__PURE__ */ new Set()) {
  if (typeof e == "object" && e !== null && // We don't want to traverse DOM elements
  !(e instanceof EventTarget) && !t.has(e)) {
    t.add(e), e instanceof Date && e.getTime();
    for (let n in e)
      try {
        er(e[n], t);
      } catch (r) {
      }
    const u = br(e);
    if (u !== Object.prototype && u !== Array.prototype && u !== Map.prototype && u !== Set.prototype && u !== Date.prototype) {
      const n = to(u);
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
function Uc(e) {
  return e.endsWith("capture") && e !== "gotpointercapture" && e !== "lostpointercapture";
}
const $c = [
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
function qc(e) {
  return $c.includes(e);
}
const Hc = {
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
function jc(e) {
  var t;
  return e = e.toLowerCase(), (t = Hc[e]) != null ? t : e;
}
const Gc = ["touchstart", "touchmove"];
function Zc(e) {
  return Gc.includes(e);
}
function Wc(e, t) {
  if (t) {
    const u = document.body;
    e.autofocus = !0, Cu(() => {
      document.activeElement === u && e.focus();
    });
  }
}
let hi = !1;
function Kc() {
  hi || (hi = !0, document.addEventListener(
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
function Do(e) {
  var t = X, u = Y;
  Dt(null), Tt(null);
  try {
    return e();
  } finally {
    Dt(t), Tt(u);
  }
}
function Vc(e, t, u, n = u) {
  e.addEventListener(t, () => Do(u));
  const r = e.__on_r;
  r ? e.__on_r = () => {
    r(), n(!0);
  } : e.__on_r = () => n(!0), Kc();
}
const To = /* @__PURE__ */ new Set(), tr = /* @__PURE__ */ new Set();
function Ro(e, t, u, n = {}) {
  function r(i) {
    if (n.capture || du.call(t, i), !i.cancelBubble)
      return Do(() => u == null ? void 0 : u.call(this, i));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Cu(() => {
    t.addEventListener(e, r, n);
  }) : t.addEventListener(e, r, n), r;
}
function Jc(e, t, u, n, r) {
  var i = { capture: n, passive: r }, o = Ro(e, t, u, i);
  (t === document.body || t === window || t === document) && mo(() => {
    t.removeEventListener(e, o, i);
  });
}
function _n(e) {
  for (var t = 0; t < e.length; t++)
    To.add(e[t]);
  for (var u of tr)
    u(e);
}
function du(e) {
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
    eo(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || u;
      }
    });
    var l = X, f = Y;
    Dt(null), Tt(null);
    try {
      for (var h, p = []; i !== null; ) {
        var d = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var g = i["__" + n];
          if (g !== void 0 && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i))
            if (hr(g)) {
              var [_, ...k] = g;
              _.apply(i, [e, ...k]);
            } else
              g.call(i, e);
        } catch (y) {
          h ? p.push(y) : h = y;
        }
        if (e.cancelBubble || d === t || d === null)
          break;
        i = d;
      }
      if (h) {
        for (let y of p)
          queueMicrotask(() => {
            throw y;
          });
        throw h;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Dt(l), Tt(f);
    }
  }
}
function Sr(e) {
  var t = document.createElement("template");
  return t.innerHTML = e, t.content;
}
function Du(e, t) {
  var u = (
    /** @type {Effect} */
    Y
  );
  u.nodes_start === null && (u.nodes_start = e, u.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function ve(e, t) {
  var u = (t & bc) !== 0, n, r = !e.startsWith("<!>");
  return () => {
    n === void 0 && (n = Sr(r ? e : "<!>" + e), n = /** @type {Node} */
    /* @__PURE__ */ Xt(n));
    var i = (
      /** @type {TemplateNode} */
      u || fo ? document.importNode(n, !0) : n.cloneNode(!0)
    );
    return Du(i, i), i;
  };
}
// @__NO_SIDE_EFFECTS__
function Xc(e, t, u = "svg") {
  var n = !e.startsWith("<!>"), r = `<${u}>${n ? e : "<!>" + e}</${u}>`, i;
  return () => {
    if (!i) {
      var o = (
        /** @type {DocumentFragment} */
        Sr(r)
      ), s = (
        /** @type {Element} */
        /* @__PURE__ */ Xt(o)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ Xt(s);
    }
    var a = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return Du(a, a), a;
  };
}
function Me() {
  var e = document.createDocumentFragment(), t = document.createComment(""), u = hn();
  return e.append(t, u), Du(t, u), e;
}
function K(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function hu(e, t) {
  var n;
  var u = t == null ? "" : typeof t == "object" ? t + "" : t;
  u !== ((n = e.__t) != null ? n : e.__t = e.nodeValue) && (e.__t = u, e.nodeValue = u + "");
}
function pi(e, t) {
  return Yc(e, t);
}
const Gt = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: u, props: n = {}, events: r, context: i, intro: o = !0 }) {
  Ec();
  var s = /* @__PURE__ */ new Set(), a = (f) => {
    for (var h = 0; h < f.length; h++) {
      var p = f[h];
      if (!s.has(p)) {
        s.add(p);
        var d = Zc(p);
        t.addEventListener(p, du, { passive: d });
        var g = Gt.get(p);
        g === void 0 ? (document.addEventListener(p, du, { passive: d }), Gt.set(p, 1)) : Gt.set(p, g + 1);
      }
    }
  };
  a(pr(To)), tr.add(a);
  var c = void 0, l = Cc(() => {
    var f = u != null ? u : t.appendChild(hn());
    return St(() => {
      if (i) {
        ku({});
        var h = (
          /** @type {ComponentContext} */
          ne
        );
        h.c = i;
      }
      r && (n.$$events = r), c = e(f, n) || {}, i && wu();
    }), () => {
      var d;
      for (var h of s) {
        t.removeEventListener(h, du);
        var p = (
          /** @type {number} */
          Gt.get(h)
        );
        --p === 0 ? (document.removeEventListener(h, du), Gt.delete(h)) : Gt.set(h, p);
      }
      tr.delete(a), f !== u && ((d = f.parentNode) == null || d.removeChild(f));
    };
  });
  return Qc.set(c, l), c;
}
let Qc = /* @__PURE__ */ new WeakMap();
function et(e, t, [u, n] = [0, 0]) {
  var r = e, i = null, o = null, s = ke, a = u > 0 ? vu : 0, c = !1;
  const l = (h, p = !0) => {
    c = !0, f(p, h);
  }, f = (h, p) => {
    s !== (s = h) && (s ? (i ? bu(i) : p && (i = St(() => p(r))), o && Yt(o, () => {
      o = null;
    })) : (o ? bu(o) : p && (o = St(() => p(r, [u + 1, n]))), i && Yt(i, () => {
      i = null;
    })));
  };
  ru(() => {
    c = !1, t(l), c || f(null, null);
  }, a);
}
function No(e, t) {
  return t;
}
function e0(e, t, u, n) {
  for (var r = [], i = t.length, o = 0; o < i; o++)
    wr(t[o].e, r, !0);
  var s = i > 0 && r.length === 0 && u !== null;
  if (s) {
    var a = (
      /** @type {Element} */
      /** @type {Element} */
      u.parentNode
    );
    yc(a), a.append(
      /** @type {Element} */
      u
    ), n.clear(), mt(e, t[0].prev, t[i - 1].next);
  }
  vo(r, () => {
    for (var c = 0; c < i; c++) {
      var l = t[c];
      s || (n.delete(l.k), mt(e, l.prev, l.next)), it(l.e, !s);
    }
  });
}
function Dr(e, t, u, n, r, i = null) {
  var o = e, s = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, a = (t & so) !== 0;
  if (a) {
    var c = (
      /** @type {Element} */
      e
    );
    o = c.appendChild(hn());
  }
  var l = null, f = !1, h = /* @__PURE__ */ yr(() => {
    var p = u();
    return hr(p) ? p : p == null ? [] : pr(p);
  });
  ru(() => {
    var p = q(h), d = p.length;
    f && d === 0 || (f = d === 0, t0(p, s, o, r, t, n, u), i !== null && (d === 0 ? l ? bu(l) : l = St(() => i(o)) : l !== null && Yt(l, () => {
      l = null;
    })), q(h));
  });
}
function t0(e, t, u, n, r, i, o) {
  var V, U, J, Se;
  var s = (r & cc) !== 0, a = (r & (mr | xr)) !== 0, c = e.length, l = t.items, f = t.first, h = f, p, d = null, g, _ = [], k = [], v, y, m, x;
  if (s)
    for (x = 0; x < c; x += 1)
      v = e[x], y = i(v, x), m = l.get(y), m !== void 0 && ((V = m.a) == null || V.measure(), (g != null ? g : g = /* @__PURE__ */ new Set()).add(m));
  for (x = 0; x < c; x += 1) {
    if (v = e[x], y = i(v, x), m = l.get(y), m === void 0) {
      var A = h ? (
        /** @type {TemplateNode} */
        h.e.nodes_start
      ) : u;
      d = n0(
        A,
        t,
        d,
        d === null ? t.first : d.next,
        v,
        y,
        x,
        n,
        r,
        o
      ), l.set(y, d), _ = [], k = [], h = d.next;
      continue;
    }
    if (a && u0(m, v, x, r), (m.e.f & pt) !== 0 && (bu(m.e), s && ((U = m.a) == null || U.unfix(), (g != null ? g : g = /* @__PURE__ */ new Set()).delete(m))), m !== h) {
      if (p !== void 0 && p.has(m)) {
        if (_.length < k.length) {
          var T = k[0], S;
          d = T.prev;
          var I = _[0], H = _[_.length - 1];
          for (S = 0; S < _.length; S += 1)
            bi(_[S], T, u);
          for (S = 0; S < k.length; S += 1)
            p.delete(k[S]);
          mt(t, I.prev, H.next), mt(t, d, I), mt(t, H, T), h = T, d = H, x -= 1, _ = [], k = [];
        } else
          p.delete(m), bi(m, h, u), mt(t, m.prev, m.next), mt(t, m, d === null ? t.first : d.next), mt(t, d, m), d = m;
        continue;
      }
      for (_ = [], k = []; h !== null && h.k !== y; )
        (h.e.f & pt) === 0 && (p != null ? p : p = /* @__PURE__ */ new Set()).add(h), k.push(h), h = h.next;
      if (h === null)
        continue;
      m = h;
    }
    _.push(m), d = m, h = m.next;
  }
  if (h !== null || p !== void 0) {
    for (var ue = p === void 0 ? [] : pr(p); h !== null; )
      (h.e.f & pt) === 0 && ue.push(h), h = h.next;
    var ae = ue.length;
    if (ae > 0) {
      var pe = (r & so) !== 0 && c === 0 ? u : null;
      if (s) {
        for (x = 0; x < ae; x += 1)
          (J = ue[x].a) == null || J.measure();
        for (x = 0; x < ae; x += 1)
          (Se = ue[x].a) == null || Se.fix();
      }
      e0(t, ue, pe, l);
    }
  }
  s && Cu(() => {
    var G;
    if (g !== void 0)
      for (m of g)
        (G = m.a) == null || G.apply();
  }), Y.first = t.first && t.first.e, Y.last = d && d.e;
}
function u0(e, t, u, n) {
  (n & mr) !== 0 && Yn(e.v, t), (n & xr) !== 0 ? Yn(
    /** @type {Value<number>} */
    e.i,
    u
  ) : e.i = u;
}
function n0(e, t, u, n, r, i, o, s, a, c) {
  var l = (a & mr) !== 0, f = (a & lc) === 0, h = l ? f ? /* @__PURE__ */ Er(r) : we(r) : r, p = (a & xr) === 0 ? o : we(o), d = {
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
    return d.e = St(() => s(e, h, p, c), xc), d.e.prev = u && u.e, d.e.next = n && n.e, u === null ? t.first = d : (u.next = d, u.e.next = d.e), n !== null && (n.prev = d, n.e.prev = d.e), d;
  } finally {
  }
}
function bi(e, t, u) {
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
      /* @__PURE__ */ pn(i)
    );
    r.before(i), i = o;
  }
}
function mt(e, t, u) {
  t === null ? e.first = u : (t.next = u, t.e.next = u && u.e), u !== null && (u.prev = t, u.e.prev = t && t.e);
}
function Oo(e, t, u, n, r) {
  var i = e, o = "", s;
  ru(() => {
    var a;
    o !== (o = (a = t()) != null ? a : "") && (s !== void 0 && (it(s), s = void 0), o !== "" && (s = St(() => {
      var c = o + "", l = Sr(c);
      Du(
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xt(l),
        /** @type {TemplateNode} */
        l.lastChild
      ), i.before(l);
    })));
  });
}
function Ke(e, t, u, n, r) {
  var s;
  var i = (s = t.$$slots) == null ? void 0 : s[u], o = !1;
  i === !0 && (i = t.children, o = !0), i === void 0 || i(e, o ? () => n : n);
}
function r0(e, t, u) {
  var n = e, r, i;
  ru(() => {
    r !== (r = t()) && (i && (Yt(i), i = null), r && (i = St(() => u(n, r))));
  }, vu);
}
function i0(e, t, u, n, r, i) {
  var o, s, a = null, c = (
    /** @type {TemplateNode} */
    e
  ), l;
  ru(() => {
    const f = t() || null;
    var h = co;
    f !== o && (l && (f === null ? Yt(l, () => {
      l = null, s = null;
    }) : f === s ? bu(l) : it(l)), f && f !== s && (l = St(() => {
      if (a = document.createElementNS(h, f), Du(a, a), n) {
        var p = (
          /** @type {TemplateNode} */
          a.appendChild(hn())
        );
        n(a, p);
      }
      Y.nodes_end = a, c.before(a);
    })), o = f, o && (s = o));
  }, vu);
}
function mn(e, t) {
  Cu(() => {
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
function Fo(e) {
  var t, u, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var r = e.length;
    for (t = 0; t < r; t++) e[t] && (u = Fo(e[t])) && (n && (n += " "), n += u);
  } else for (u in e) e[u] && (n && (n += " "), n += u);
  return n;
}
function o0() {
  for (var e, t, u = 0, n = "", r = arguments.length; u < r; u++) (e = arguments[u]) && (t = Fo(e)) && (n && (n += " "), n += t);
  return n;
}
function s0(e) {
  return typeof e == "object" ? o0(e) : e != null ? e : "";
}
const gi = [...` 	
\r\f \v\uFEFF`];
function a0(e, t, u) {
  var n = e == null ? "" : "" + e;
  if (t && (n = n ? n + " " + t : t), u) {
    for (var r in u)
      if (u[r])
        n = n ? n + " " + r : r;
      else if (n.length)
        for (var i = r.length, o = 0; (o = n.indexOf(r, o)) >= 0; ) {
          var s = o + i;
          (o === 0 || gi.includes(n[o - 1])) && (s === n.length || gi.includes(n[s])) ? n = (o === 0 ? "" : n.substring(0, o)) + n.substring(s + 1) : o = s;
        }
  }
  return n === "" ? null : n;
}
function Vt(e, t, u, n, r, i) {
  var o = e.__className;
  if (o !== u) {
    var s = a0(u, n, i);
    s == null ? e.removeAttribute("class") : t ? e.className = s : e.setAttribute("class", s), e.__className = u;
  } else if (i)
    for (var a in i) {
      var c = !!i[a];
      (r == null || c !== !!r[a]) && e.classList.toggle(a, c);
    }
  return i;
}
const lu = Symbol("class");
function c0(e, t) {
  t ? e.hasAttribute("selected") || e.setAttribute("selected", "") : e.removeAttribute("selected");
}
function Ct(e, t, u, n) {
  var i;
  var r = (i = e.__attributes) != null ? i : e.__attributes = {};
  r[t] !== (r[t] = u) && (t === "style" && "__styles" in e && (e.__styles = {}), t === "loading" && (e[Ya] = u), u == null ? e.removeAttribute(t) : typeof u != "string" && Io(e).includes(t) ? e[t] = u : e.setAttribute(t, u));
}
function _i(e, t, u, n, r = !1, i = !1, o = !1) {
  var v;
  var s = t || {}, a = e.tagName === "OPTION";
  for (var c in t)
    c in u || (u[c] = null);
  u.class ? u.class = s0(u.class) : u[lu] && (u.class = null);
  var l = Io(e), f = (
    /** @type {Record<string, unknown>} **/
    (v = e.__attributes) != null ? v : e.__attributes = {}
  );
  for (const y in u) {
    let m = u[y];
    if (a && y === "value" && m == null) {
      e.value = e.__value = "", s[y] = m;
      continue;
    }
    if (y === "class") {
      var h = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Vt(e, h, m, n, t == null ? void 0 : t[lu], u[lu]), s[y] = m, s[lu] = u[lu];
      continue;
    }
    var p = s[y];
    if (m !== p) {
      s[y] = m;
      var d = y[0] + y[1];
      if (d !== "$$") {
        if (d === "on") {
          const x = {}, A = "$$" + y;
          let T = y.slice(2);
          var g = qc(T);
          if (Uc(T) && (T = T.slice(0, -7), x.capture = !0), !g && p) {
            if (m != null) continue;
            e.removeEventListener(T, s[A], x), s[A] = null;
          }
          if (m != null)
            if (g)
              e[`__${T}`] = m, _n([T]);
            else {
              let S = function(I) {
                s[y].call(this, I);
              };
              s[A] = Ro(T, e, S, x);
            }
          else g && (e[`__${T}`] = void 0);
        } else if (y === "style" && m != null)
          e.style.cssText = m + "";
        else if (y === "autofocus")
          Wc(
            /** @type {HTMLElement} */
            e,
            !!m
          );
        else if (!i && (y === "__value" || y === "value" && m != null))
          e.value = e.__value = m;
        else if (y === "selected" && a)
          c0(
            /** @type {HTMLOptionElement} */
            e,
            m
          );
        else {
          var _ = y;
          r || (_ = jc(_));
          var k = _ === "defaultValue" || _ === "defaultChecked";
          if (m == null && !i && !k)
            if (f[y] = null, _ === "value" || _ === "checked") {
              let x = (
                /** @type {HTMLInputElement} */
                e
              );
              const A = t === void 0;
              if (_ === "value") {
                let T = x.defaultValue;
                x.removeAttribute(_), x.defaultValue = T, x.value = x.__value = A ? T : null;
              } else {
                let T = x.defaultChecked;
                x.removeAttribute(_), x.defaultChecked = T, x.checked = A ? T : !1;
              }
            } else
              e.removeAttribute(y);
          else k || l.includes(_) && (i || typeof m != "string") ? e[_] = m : typeof m != "function" && Ct(e, _, m);
        }
        y === "style" && "__styles" in e && (e.__styles = {});
      }
    }
  }
  return s;
}
var mi = /* @__PURE__ */ new Map();
function Io(e) {
  var t = mi.get(e.nodeName);
  if (t) return t;
  mi.set(e.nodeName, t = []);
  for (var u, n = e, r = Element.prototype; r !== n; ) {
    u = to(n);
    for (var i in u)
      u[i].set && t.push(i);
    n = br(n);
  }
  return t;
}
function l0(e, t, u = t) {
  var n = Au();
  Vc(e, "input", (r) => {
    var i = r ? e.defaultValue : e.value;
    if (i = zn(e) ? Un(i) : i, u(i), n && i !== (i = t())) {
      var o = e.selectionStart, s = e.selectionEnd;
      e.value = i != null ? i : "", s !== null && (e.selectionStart = o, e.selectionEnd = Math.min(s, e.value.length));
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  zt(t) == null && e.value && u(zn(e) ? Un(e.value) : e.value), kr(() => {
    var r = t();
    zn(e) && r === Un(e.value) || e.type === "date" && !r && !e.value || r !== e.value && (e.value = r != null ? r : "");
  });
}
function zn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Un(e) {
  return e === "" ? null : +e;
}
function xi(e, t) {
  return e === t || (e == null ? void 0 : e[At]) === t;
}
function f0(e = {}, t, u, n) {
  return vr(() => {
    var r, i;
    return kr(() => {
      r = i, i = [], zt(() => {
        e !== u(...i) && (t(e, ...i), r && xi(u(...r), e) && t(null, ...r));
      });
    }), () => {
      Cu(() => {
        i && xi(u(...i), e) && t(null, ...i);
      });
    };
  }), e;
}
function d0(e = !1) {
  const t = (
    /** @type {ComponentContextLegacy} */
    ne
  ), u = t.l.u;
  if (!u) return;
  let n = () => zc(t.s);
  if (e) {
    let r = 0, i = (
      /** @type {Record<string, any>} */
      {}
    );
    const o = /* @__PURE__ */ He(() => {
      let s = !1;
      const a = t.s;
      for (const c in a)
        a[c] !== i[c] && (i[c] = a[c], s = !0);
      return s && r++, r;
    });
    n = () => q(o);
  }
  u.b.length && Ac(() => {
    Ei(t, n), Ju(u.b);
  }), pu(() => {
    const r = zt(() => u.m.map(Ka));
    return () => {
      for (const i of r)
        typeof i == "function" && i();
    };
  }), u.a.length && pu(() => {
    Ei(t, n), Ju(u.a);
  });
}
function Ei(e, t) {
  if (e.l.s)
    for (const u of e.l.s) q(u);
  t();
}
function Tr(e, t, u) {
  if (e == null)
    return t(void 0), u && u(void 0), wt;
  const n = zt(
    () => e.subscribe(
      t,
      // @ts-expect-error
      u
    )
  );
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
const Zt = [];
function h0(e, t) {
  return {
    subscribe: Rr(e, t).subscribe
  };
}
function Rr(e, t = wt) {
  let u = null;
  const n = /* @__PURE__ */ new Set();
  function r(s) {
    if (oo(e, s) && (e = s, u)) {
      const a = !Zt.length;
      for (const c of n)
        c[1](), Zt.push(c, e);
      if (a) {
        for (let c = 0; c < Zt.length; c += 2)
          Zt[c][0](Zt[c + 1]);
        Zt.length = 0;
      }
    }
  }
  function i(s) {
    r(s(
      /** @type {T} */
      e
    ));
  }
  function o(s, a = wt) {
    const c = [s, a];
    return n.add(c), n.size === 1 && (u = t(r, i) || wt), s(
      /** @type {T} */
      e
    ), () => {
      n.delete(c), n.size === 0 && u && (u(), u = null);
    };
  }
  return { set: r, update: i, subscribe: o };
}
function p0(e, t, u) {
  const n = !Array.isArray(e), r = n ? [e] : e;
  if (!r.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const i = t.length < 2;
  return h0(u, (o, s) => {
    let a = !1;
    const c = [];
    let l = 0, f = wt;
    const h = () => {
      if (l)
        return;
      f();
      const d = t(n ? c[0] : c, o, s);
      i ? o(d) : f = typeof d == "function" ? d : wt;
    }, p = r.map(
      (d, g) => Tr(
        d,
        (_) => {
          c[g] = _, l &= ~(1 << g), a && h();
        },
        () => {
          l |= 1 << g;
        }
      )
    );
    return a = !0, h(), function() {
      Ju(p), f(), a = !1;
    };
  });
}
function Mo(e) {
  let t;
  return Tr(e, (u) => t = u)(), t;
}
let $u = !1, ur = Symbol();
function b0(e, t, u) {
  var i;
  const n = (i = u[t]) != null ? i : u[t] = {
    store: null,
    source: /* @__PURE__ */ Er(void 0),
    unsubscribe: wt
  };
  if (n.store !== e && !(ur in u))
    if (n.unsubscribe(), n.store = e != null ? e : null, e == null)
      n.source.v = void 0, n.unsubscribe = wt;
    else {
      var r = !0;
      n.unsubscribe = Tr(e, (o) => {
        r ? n.source.v = o : Ne(n.source, o);
      }), r = !1;
    }
  return e && ur in u ? Mo(e) : q(n.source);
}
function g0() {
  const e = {};
  function t() {
    mo(() => {
      for (var u in e)
        e[u].unsubscribe();
      eo(e, ur, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function _0(e) {
  var t = $u;
  try {
    return $u = !1, [e(), $u];
  } finally {
    $u = t;
  }
}
const m0 = {
  get(e, t) {
    if (!e.exclude.includes(t))
      return q(e.version), t in e.special ? e.special[t]() : e.props[t];
  },
  set(e, t, u) {
    return t in e.special || (e.special[t] = Lt(
      {
        get [t]() {
          return e.props[t];
        }
      },
      /** @type {string} */
      t,
      ao
    )), e.special[t](u), ci(e.version), !0;
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
    return e.exclude.includes(t) || (e.exclude.push(t), ci(e.version)), !0;
  },
  has(e, t) {
    return e.exclude.includes(t) ? !1 : t in e.props;
  },
  ownKeys(e) {
    return Reflect.ownKeys(e.props).filter((t) => !e.exclude.includes(t));
  }
};
function Be(e, t) {
  return new Proxy({ props: e, exclude: t, special: {}, version: we(0) }, m0);
}
const x0 = {
  get(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (cu(n) && (n = n()), typeof n == "object" && n !== null && t in n) return n[t];
    }
  },
  set(e, t, u) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      cu(r) && (r = r());
      const i = kt(r, t);
      if (i && i.set)
        return i.set(u), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let u = e.props.length;
    for (; u--; ) {
      let n = e.props[u];
      if (cu(n) && (n = n()), typeof n == "object" && n !== null && t in n) {
        const r = kt(n, t);
        return r && !r.configurable && (r.configurable = !0), r;
      }
    }
  },
  has(e, t) {
    if (t === At || t === ro) return !1;
    for (let u of e.props)
      if (cu(u) && (u = u()), u != null && t in u) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let u of e.props) {
      cu(u) && (u = u());
      for (const n in u)
        t.includes(n) || t.push(n);
    }
    return t;
  }
};
function st(...e) {
  return new Proxy({ props: e }, x0);
}
function Lt(e, t, u, n) {
  var A, T;
  var r = (u & fc) !== 0, i = !uu || (u & dc) !== 0, o = (u & hc) !== 0, s = (u & pc) !== 0, a = !1, c;
  o ? [c, a] = _0(() => (
    /** @type {V} */
    e[t]
  )) : c = /** @type {V} */
  e[t];
  var l = At in e || ro in e, f = o && ((T = (A = kt(e, t)) == null ? void 0 : A.set) != null ? T : l && t in e && ((S) => e[t] = S)) || void 0, h = (
    /** @type {V} */
    n
  ), p = !0, d = !1, g = () => (d = !0, p && (p = !1, s ? h = zt(
    /** @type {() => V} */
    n
  ) : h = /** @type {V} */
  n), h);
  c === void 0 && n !== void 0 && (f && i && nc(), c = g(), f && f(c));
  var _;
  if (i)
    _ = () => {
      var S = (
        /** @type {V} */
        e[t]
      );
      return S === void 0 ? g() : (p = !0, d = !1, S);
    };
  else {
    var k = (r ? He : yr)(
      () => (
        /** @type {V} */
        e[t]
      )
    );
    k.f |= Ja, _ = () => {
      var S = q(k);
      return S !== void 0 && (h = /** @type {V} */
      void 0), S === void 0 ? h : S;
    };
  }
  if ((u & ao) === 0)
    return _;
  if (f) {
    var v = e.$$legacy;
    return function(S, I) {
      return arguments.length > 0 ? ((!i || !I || v || a) && f(I ? _() : S), S) : _();
    };
  }
  var y = !1, m = /* @__PURE__ */ Er(c), x = /* @__PURE__ */ He(() => {
    var S = _(), I = q(m);
    return y ? (y = !1, I) : m.v = S;
  });
  return r || (x.equals = _r), function(S, I) {
    if (arguments.length > 0) {
      const H = I ? q(x) : i && o ? Kt(S) : S;
      return x.equals(H) || (y = !0, Ne(m, H), d && h !== void 0 && (h = H), zt(() => q(x))), S;
    }
    return q(x);
  };
}
function Lo(e) {
  ne === null && gc(), uu && ne.l !== null ? E0(ne).m.push(e) : pu(() => {
    const t = zt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function E0(e) {
  var u;
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return (u = t.u) != null ? u : t.u = { a: [], b: [], m: [] };
}
const y0 = "5";
typeof window != "undefined" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(y0);
function Bo(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: v0 } = Object.prototype, { getPrototypeOf: Nr } = Object, xn = /* @__PURE__ */ ((e) => (t) => {
  const u = v0.call(t);
  return e[u] || (e[u] = u.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ve = (e) => (e = e.toLowerCase(), (t) => xn(t) === e), En = (e) => (t) => typeof t === e, { isArray: iu } = Array, gu = En("undefined");
function k0(e) {
  return e !== null && !gu(e) && e.constructor !== null && !gu(e.constructor) && Oe(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Po = Ve("ArrayBuffer");
function w0(e) {
  let t;
  return typeof ArrayBuffer != "undefined" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Po(e.buffer), t;
}
const A0 = En("string"), Oe = En("function"), zo = En("number"), yn = (e) => e !== null && typeof e == "object", C0 = (e) => e === !0 || e === !1, Wu = (e) => {
  if (xn(e) !== "object")
    return !1;
  const t = Nr(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, S0 = Ve("Date"), D0 = Ve("File"), T0 = Ve("Blob"), R0 = Ve("FileList"), N0 = (e) => yn(e) && Oe(e.pipe), O0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Oe(e.append) && ((t = xn(e)) === "formdata" || // detect form-data instance
  t === "object" && Oe(e.toString) && e.toString() === "[object FormData]"));
}, F0 = Ve("URLSearchParams"), [I0, M0, L0, B0] = ["ReadableStream", "Request", "Response", "Headers"].map(Ve), P0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Tu(e, t, { allOwnKeys: u = !1 } = {}) {
  if (e === null || typeof e == "undefined")
    return;
  let n, r;
  if (typeof e != "object" && (e = [e]), iu(e))
    for (n = 0, r = e.length; n < r; n++)
      t.call(null, e[n], n, e);
  else {
    const i = u ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let s;
    for (n = 0; n < o; n++)
      s = i[n], t.call(null, e[s], s, e);
  }
}
function Uo(e, t) {
  t = t.toLowerCase();
  const u = Object.keys(e);
  let n = u.length, r;
  for (; n-- > 0; )
    if (r = u[n], t === r.toLowerCase())
      return r;
  return null;
}
const Bt = typeof globalThis != "undefined" ? globalThis : typeof self != "undefined" ? self : typeof window != "undefined" ? window : global, $o = (e) => !gu(e) && e !== Bt;
function nr() {
  const { caseless: e } = $o(this) && this || {}, t = {}, u = (n, r) => {
    const i = e && Uo(t, r) || r;
    Wu(t[i]) && Wu(n) ? t[i] = nr(t[i], n) : Wu(n) ? t[i] = nr({}, n) : iu(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, r = arguments.length; n < r; n++)
    arguments[n] && Tu(arguments[n], u);
  return t;
}
const z0 = (e, t, u, { allOwnKeys: n } = {}) => (Tu(t, (r, i) => {
  u && Oe(r) ? e[i] = Bo(r, u) : e[i] = r;
}, { allOwnKeys: n }), e), U0 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), $0 = (e, t, u, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), u && Object.assign(e.prototype, u);
}, q0 = (e, t, u, n) => {
  let r, i, o;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (r = Object.getOwnPropertyNames(e), i = r.length; i-- > 0; )
      o = r[i], (!n || n(o, e, t)) && !s[o] && (t[o] = e[o], s[o] = !0);
    e = u !== !1 && Nr(e);
  } while (e && (!u || u(e, t)) && e !== Object.prototype);
  return t;
}, H0 = (e, t, u) => {
  e = String(e), (u === void 0 || u > e.length) && (u = e.length), u -= t.length;
  const n = e.indexOf(t, u);
  return n !== -1 && n === u;
}, j0 = (e) => {
  if (!e) return null;
  if (iu(e)) return e;
  let t = e.length;
  if (!zo(t)) return null;
  const u = new Array(t);
  for (; t-- > 0; )
    u[t] = e[t];
  return u;
}, G0 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array != "undefined" && Nr(Uint8Array)), Z0 = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let r;
  for (; (r = n.next()) && !r.done; ) {
    const i = r.value;
    t.call(e, i[0], i[1]);
  }
}, W0 = (e, t) => {
  let u;
  const n = [];
  for (; (u = e.exec(t)) !== null; )
    n.push(u);
  return n;
}, K0 = Ve("HTMLFormElement"), V0 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(u, n, r) {
    return n.toUpperCase() + r;
  }
), yi = (({ hasOwnProperty: e }) => (t, u) => e.call(t, u))(Object.prototype), J0 = Ve("RegExp"), qo = (e, t) => {
  const u = Object.getOwnPropertyDescriptors(e), n = {};
  Tu(u, (r, i) => {
    let o;
    (o = t(r, i, e)) !== !1 && (n[i] = o || r);
  }), Object.defineProperties(e, n);
}, X0 = (e) => {
  qo(e, (t, u) => {
    if (Oe(e) && ["arguments", "caller", "callee"].indexOf(u) !== -1)
      return !1;
    const n = e[u];
    if (Oe(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + u + "'");
      });
    }
  });
}, Y0 = (e, t) => {
  const u = {}, n = (r) => {
    r.forEach((i) => {
      u[i] = !0;
    });
  };
  return iu(e) ? n(e) : n(String(e).split(t)), u;
}, Q0 = () => {
}, el = (e, t) => e != null && Number.isFinite(e = +e) ? e : t;
function tl(e) {
  return !!(e && Oe(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const ul = (e) => {
  const t = new Array(10), u = (n, r) => {
    if (yn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[r] = n;
        const i = iu(n) ? [] : {};
        return Tu(n, (o, s) => {
          const a = u(o, r + 1);
          !gu(a) && (i[s] = a);
        }), t[r] = void 0, i;
      }
    }
    return n;
  };
  return u(e, 0);
}, nl = Ve("AsyncFunction"), rl = (e) => e && (yn(e) || Oe(e)) && Oe(e.then) && Oe(e.catch), Ho = ((e, t) => e ? setImmediate : t ? ((u, n) => (Bt.addEventListener("message", ({ source: r, data: i }) => {
  r === Bt && i === u && n.length && n.shift()();
}, !1), (r) => {
  n.push(r), Bt.postMessage(u, "*");
}))(`axios@${Math.random()}`, []) : (u) => setTimeout(u))(
  typeof setImmediate == "function",
  Oe(Bt.postMessage)
), il = typeof queueMicrotask != "undefined" ? queueMicrotask.bind(Bt) : typeof process != "undefined" && process.nextTick || Ho, E = {
  isArray: iu,
  isArrayBuffer: Po,
  isBuffer: k0,
  isFormData: O0,
  isArrayBufferView: w0,
  isString: A0,
  isNumber: zo,
  isBoolean: C0,
  isObject: yn,
  isPlainObject: Wu,
  isReadableStream: I0,
  isRequest: M0,
  isResponse: L0,
  isHeaders: B0,
  isUndefined: gu,
  isDate: S0,
  isFile: D0,
  isBlob: T0,
  isRegExp: J0,
  isFunction: Oe,
  isStream: N0,
  isURLSearchParams: F0,
  isTypedArray: G0,
  isFileList: R0,
  forEach: Tu,
  merge: nr,
  extend: z0,
  trim: P0,
  stripBOM: U0,
  inherits: $0,
  toFlatObject: q0,
  kindOf: xn,
  kindOfTest: Ve,
  endsWith: H0,
  toArray: j0,
  forEachEntry: Z0,
  matchAll: W0,
  isHTMLForm: K0,
  hasOwnProperty: yi,
  hasOwnProp: yi,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: qo,
  freezeMethods: X0,
  toObjectSet: Y0,
  toCamelCase: V0,
  noop: Q0,
  toFiniteNumber: el,
  findKey: Uo,
  global: Bt,
  isContextDefined: $o,
  isSpecCompliantForm: tl,
  toJSONObject: ul,
  isAsyncFn: nl,
  isThenable: rl,
  setImmediate: Ho,
  asap: il
};
function z(e, t, u, n, r) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), u && (this.config = u), n && (this.request = n), r && (this.response = r, this.status = r.status ? r.status : null);
}
E.inherits(z, Error, {
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
const jo = z.prototype, Go = {};
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
  Go[e] = { value: e };
});
Object.defineProperties(z, Go);
Object.defineProperty(jo, "isAxiosError", { value: !0 });
z.from = (e, t, u, n, r, i) => {
  const o = Object.create(jo);
  return E.toFlatObject(e, o, function(a) {
    return a !== Error.prototype;
  }, (s) => s !== "isAxiosError"), z.call(o, e.message, t, u, n, r), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const ol = null;
function rr(e) {
  return E.isPlainObject(e) || E.isArray(e);
}
function Zo(e) {
  return E.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function vi(e, t, u) {
  return e ? e.concat(t).map(function(r, i) {
    return r = Zo(r), !u && i ? "[" + r + "]" : r;
  }).join(u ? "." : "") : t;
}
function sl(e) {
  return E.isArray(e) && !e.some(rr);
}
const al = E.toFlatObject(E, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function vn(e, t, u) {
  if (!E.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), u = E.toFlatObject(u, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, _) {
    return !E.isUndefined(_[g]);
  });
  const n = u.metaTokens, r = u.visitor || l, i = u.dots, o = u.indexes, a = (u.Blob || typeof Blob != "undefined" && Blob) && E.isSpecCompliantForm(t);
  if (!E.isFunction(r))
    throw new TypeError("visitor must be a function");
  function c(d) {
    if (d === null) return "";
    if (E.isDate(d))
      return d.toISOString();
    if (!a && E.isBlob(d))
      throw new z("Blob is not supported. Use a Buffer instead.");
    return E.isArrayBuffer(d) || E.isTypedArray(d) ? a && typeof Blob == "function" ? new Blob([d]) : Buffer.from(d) : d;
  }
  function l(d, g, _) {
    let k = d;
    if (d && !_ && typeof d == "object") {
      if (E.endsWith(g, "{}"))
        g = n ? g : g.slice(0, -2), d = JSON.stringify(d);
      else if (E.isArray(d) && sl(d) || (E.isFileList(d) || E.endsWith(g, "[]")) && (k = E.toArray(d)))
        return g = Zo(g), k.forEach(function(y, m) {
          !(E.isUndefined(y) || y === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? vi([g], m, i) : o === null ? g : g + "[]",
            c(y)
          );
        }), !1;
    }
    return rr(d) ? !0 : (t.append(vi(_, g, i), c(d)), !1);
  }
  const f = [], h = Object.assign(al, {
    defaultVisitor: l,
    convertValue: c,
    isVisitable: rr
  });
  function p(d, g) {
    if (!E.isUndefined(d)) {
      if (f.indexOf(d) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      f.push(d), E.forEach(d, function(k, v) {
        (!(E.isUndefined(k) || k === null) && r.call(
          t,
          k,
          E.isString(v) ? v.trim() : v,
          g,
          h
        )) === !0 && p(k, g ? g.concat(v) : [v]);
      }), f.pop();
    }
  }
  if (!E.isObject(e))
    throw new TypeError("data must be an object");
  return p(e), t;
}
function ki(e) {
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
function Or(e, t) {
  this._pairs = [], e && vn(e, this, t);
}
const Wo = Or.prototype;
Wo.append = function(t, u) {
  this._pairs.push([t, u]);
};
Wo.toString = function(t) {
  const u = t ? function(n) {
    return t.call(this, n, ki);
  } : ki;
  return this._pairs.map(function(r) {
    return u(r[0]) + "=" + u(r[1]);
  }, "").join("&");
};
function cl(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Ko(e, t, u) {
  if (!t)
    return e;
  const n = u && u.encode || cl;
  E.isFunction(u) && (u = {
    serialize: u
  });
  const r = u && u.serialize;
  let i;
  if (r ? i = r(t, u) : i = E.isURLSearchParams(t) ? t.toString() : new Or(t, u).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class wi {
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
    E.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const Vo = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ll = typeof URLSearchParams != "undefined" ? URLSearchParams : Or, fl = typeof FormData != "undefined" ? FormData : null, dl = typeof Blob != "undefined" ? Blob : null, hl = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ll,
    FormData: fl,
    Blob: dl
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Fr = typeof window != "undefined" && typeof document != "undefined", ir = typeof navigator == "object" && navigator || void 0, pl = Fr && (!ir || ["ReactNative", "NativeScript", "NS"].indexOf(ir.product) < 0), bl = typeof WorkerGlobalScope != "undefined" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", gl = Fr && window.location.href || "http://localhost", _l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Fr,
  hasStandardBrowserEnv: pl,
  hasStandardBrowserWebWorkerEnv: bl,
  navigator: ir,
  origin: gl
}, Symbol.toStringTag, { value: "Module" })), me = oe(oe({}, _l), hl);
function ml(e, t) {
  return vn(e, new me.classes.URLSearchParams(), Object.assign({
    visitor: function(u, n, r, i) {
      return me.isNode && E.isBuffer(u) ? (this.append(n, u.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function xl(e) {
  return E.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function El(e) {
  const t = {}, u = Object.keys(e);
  let n;
  const r = u.length;
  let i;
  for (n = 0; n < r; n++)
    i = u[n], t[i] = e[i];
  return t;
}
function Jo(e) {
  function t(u, n, r, i) {
    let o = u[i++];
    if (o === "__proto__") return !0;
    const s = Number.isFinite(+o), a = i >= u.length;
    return o = !o && E.isArray(r) ? r.length : o, a ? (E.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !s) : ((!r[o] || !E.isObject(r[o])) && (r[o] = []), t(u, n, r[o], i) && E.isArray(r[o]) && (r[o] = El(r[o])), !s);
  }
  if (E.isFormData(e) && E.isFunction(e.entries)) {
    const u = {};
    return E.forEachEntry(e, (n, r) => {
      t(xl(n), r, u, 0);
    }), u;
  }
  return null;
}
function yl(e, t, u) {
  if (E.isString(e))
    try {
      return (t || JSON.parse)(e), E.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (u || JSON.stringify)(e);
}
const Ru = {
  transitional: Vo,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, u) {
    const n = u.getContentType() || "", r = n.indexOf("application/json") > -1, i = E.isObject(t);
    if (i && E.isHTMLForm(t) && (t = new FormData(t)), E.isFormData(t))
      return r ? JSON.stringify(Jo(t)) : t;
    if (E.isArrayBuffer(t) || E.isBuffer(t) || E.isStream(t) || E.isFile(t) || E.isBlob(t) || E.isReadableStream(t))
      return t;
    if (E.isArrayBufferView(t))
      return t.buffer;
    if (E.isURLSearchParams(t))
      return u.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return ml(t, this.formSerializer).toString();
      if ((s = E.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const a = this.env && this.env.FormData;
        return vn(
          s ? { "files[]": t } : t,
          a && new a(),
          this.formSerializer
        );
      }
    }
    return i || r ? (u.setContentType("application/json", !1), yl(t)) : t;
  }],
  transformResponse: [function(t) {
    const u = this.transitional || Ru.transitional, n = u && u.forcedJSONParsing, r = this.responseType === "json";
    if (E.isResponse(t) || E.isReadableStream(t))
      return t;
    if (t && E.isString(t) && (n && !this.responseType || r)) {
      const o = !(u && u.silentJSONParsing) && r;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (o)
          throw s.name === "SyntaxError" ? z.from(s, z.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: me.classes.FormData,
    Blob: me.classes.Blob
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
  Ru.headers[e] = {};
});
const vl = E.toObjectSet([
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
]), kl = (e) => {
  const t = {};
  let u, n, r;
  return e && e.split(`
`).forEach(function(o) {
    r = o.indexOf(":"), u = o.substring(0, r).trim().toLowerCase(), n = o.substring(r + 1).trim(), !(!u || t[u] && vl[u]) && (u === "set-cookie" ? t[u] ? t[u].push(n) : t[u] = [n] : t[u] = t[u] ? t[u] + ", " + n : n);
  }), t;
}, Ai = Symbol("internals");
function fu(e) {
  return e && String(e).trim().toLowerCase();
}
function Ku(e) {
  return e === !1 || e == null ? e : E.isArray(e) ? e.map(Ku) : String(e);
}
function wl(e) {
  const t = /* @__PURE__ */ Object.create(null), u = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = u.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Al = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function $n(e, t, u, n, r) {
  if (E.isFunction(n))
    return n.call(this, t, u);
  if (r && (t = u), !!E.isString(t)) {
    if (E.isString(n))
      return t.indexOf(n) !== -1;
    if (E.isRegExp(n))
      return n.test(t);
  }
}
function Cl(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, u, n) => u.toUpperCase() + n);
}
function Sl(e, t) {
  const u = E.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + u, {
      value: function(r, i, o) {
        return this[n].call(this, t, r, i, o);
      },
      configurable: !0
    });
  });
}
let Ae = class {
  constructor(t) {
    t && this.set(t);
  }
  set(t, u, n) {
    const r = this;
    function i(s, a, c) {
      const l = fu(a);
      if (!l)
        throw new Error("header name must be a non-empty string");
      const f = E.findKey(r, l);
      (!f || r[f] === void 0 || c === !0 || c === void 0 && r[f] !== !1) && (r[f || a] = Ku(s));
    }
    const o = (s, a) => E.forEach(s, (c, l) => i(c, l, a));
    if (E.isPlainObject(t) || t instanceof this.constructor)
      o(t, u);
    else if (E.isString(t) && (t = t.trim()) && !Al(t))
      o(kl(t), u);
    else if (E.isHeaders(t))
      for (const [s, a] of t.entries())
        i(a, s, n);
    else
      t != null && i(u, t, n);
    return this;
  }
  get(t, u) {
    if (t = fu(t), t) {
      const n = E.findKey(this, t);
      if (n) {
        const r = this[n];
        if (!u)
          return r;
        if (u === !0)
          return wl(r);
        if (E.isFunction(u))
          return u.call(this, r, n);
        if (E.isRegExp(u))
          return u.exec(r);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, u) {
    if (t = fu(t), t) {
      const n = E.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!u || $n(this, this[n], n, u)));
    }
    return !1;
  }
  delete(t, u) {
    const n = this;
    let r = !1;
    function i(o) {
      if (o = fu(o), o) {
        const s = E.findKey(n, o);
        s && (!u || $n(n, n[s], s, u)) && (delete n[s], r = !0);
      }
    }
    return E.isArray(t) ? t.forEach(i) : i(t), r;
  }
  clear(t) {
    const u = Object.keys(this);
    let n = u.length, r = !1;
    for (; n--; ) {
      const i = u[n];
      (!t || $n(this, this[i], i, t, !0)) && (delete this[i], r = !0);
    }
    return r;
  }
  normalize(t) {
    const u = this, n = {};
    return E.forEach(this, (r, i) => {
      const o = E.findKey(n, i);
      if (o) {
        u[o] = Ku(r), delete u[i];
        return;
      }
      const s = t ? Cl(i) : String(i).trim();
      s !== i && delete u[i], u[s] = Ku(r), n[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const u = /* @__PURE__ */ Object.create(null);
    return E.forEach(this, (n, r) => {
      n != null && n !== !1 && (u[r] = t && E.isArray(n) ? n.join(", ") : n);
    }), u;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, u]) => t + ": " + u).join(`
`);
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
    const n = (this[Ai] = this[Ai] = {
      accessors: {}
    }).accessors, r = this.prototype;
    function i(o) {
      const s = fu(o);
      n[s] || (Sl(r, o), n[s] = !0);
    }
    return E.isArray(t) ? t.forEach(i) : i(t), this;
  }
};
Ae.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
E.reduceDescriptors(Ae.prototype, ({ value: e }, t) => {
  let u = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[u] = n;
    }
  };
});
E.freezeMethods(Ae);
function qn(e, t) {
  const u = this || Ru, n = t || u, r = Ae.from(n.headers);
  let i = n.data;
  return E.forEach(e, function(s) {
    i = s.call(u, i, r.normalize(), t ? t.status : void 0);
  }), r.normalize(), i;
}
function Xo(e) {
  return !!(e && e.__CANCEL__);
}
function ou(e, t, u) {
  z.call(this, e == null ? "canceled" : e, z.ERR_CANCELED, t, u), this.name = "CanceledError";
}
E.inherits(ou, z, {
  __CANCEL__: !0
});
function Yo(e, t, u) {
  const n = u.config.validateStatus;
  !u.status || !n || n(u.status) ? e(u) : t(new z(
    "Request failed with status code " + u.status,
    [z.ERR_BAD_REQUEST, z.ERR_BAD_RESPONSE][Math.floor(u.status / 100) - 4],
    u.config,
    u.request,
    u
  ));
}
function Dl(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Tl(e, t) {
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
function Rl(e, t) {
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
const nn = (e, t, u = 3) => {
  let n = 0;
  const r = Tl(50, 250);
  return Rl((i) => {
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
}, Ci = (e, t) => {
  const u = e != null;
  return [(n) => t[0]({
    lengthComputable: u,
    total: e,
    loaded: n
  }), t[1]];
}, Si = (e) => (...t) => E.asap(() => e(...t)), Nl = me.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, t) => (u) => (u = new URL(u, me.origin), e.protocol === u.protocol && e.host === u.host && (t || e.port === u.port)))(
  new URL(me.origin),
  me.navigator && /(msie|trident)/i.test(me.navigator.userAgent)
) : () => !0, Ol = me.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, u, n, r, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      E.isNumber(u) && o.push("expires=" + new Date(u).toGMTString()), E.isString(n) && o.push("path=" + n), E.isString(r) && o.push("domain=" + r), i === !0 && o.push("secure"), document.cookie = o.join("; ");
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
function Fl(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Il(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qo(e, t, u) {
  let n = !Fl(t);
  return e && n || u == !1 ? Il(e, t) : t;
}
const Di = (e) => e instanceof Ae ? oe({}, e) : e;
function Ut(e, t) {
  t = t || {};
  const u = {};
  function n(c, l, f, h) {
    return E.isPlainObject(c) && E.isPlainObject(l) ? E.merge.call({ caseless: h }, c, l) : E.isPlainObject(l) ? E.merge({}, l) : E.isArray(l) ? l.slice() : l;
  }
  function r(c, l, f, h) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(c))
        return n(void 0, c, f, h);
    } else return n(c, l, f, h);
  }
  function i(c, l) {
    if (!E.isUndefined(l))
      return n(void 0, l);
  }
  function o(c, l) {
    if (E.isUndefined(l)) {
      if (!E.isUndefined(c))
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
    headers: (c, l, f) => r(Di(c), Di(l), f, !0)
  };
  return E.forEach(Object.keys(Object.assign({}, e, t)), function(l) {
    const f = a[l] || r, h = f(e[l], t[l], l);
    E.isUndefined(h) && f !== s || (u[l] = h);
  }), u;
}
const es = (e) => {
  const t = Ut({}, e);
  let { data: u, withXSRFToken: n, xsrfHeaderName: r, xsrfCookieName: i, headers: o, auth: s } = t;
  t.headers = o = Ae.from(o), t.url = Ko(Qo(t.baseURL, t.url), e.params, e.paramsSerializer), s && o.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let a;
  if (E.isFormData(u)) {
    if (me.hasStandardBrowserEnv || me.hasStandardBrowserWebWorkerEnv)
      o.setContentType(void 0);
    else if ((a = o.getContentType()) !== !1) {
      const [c, ...l] = a ? a.split(";").map((f) => f.trim()).filter(Boolean) : [];
      o.setContentType([c || "multipart/form-data", ...l].join("; "));
    }
  }
  if (me.hasStandardBrowserEnv && (n && E.isFunction(n) && (n = n(t)), n || n !== !1 && Nl(t.url))) {
    const c = r && i && Ol.read(i);
    c && o.set(r, c);
  }
  return t;
}, Ml = typeof XMLHttpRequest != "undefined", Ll = Ml && function(e) {
  return new Promise(function(u, n) {
    const r = es(e);
    let i = r.data;
    const o = Ae.from(r.headers).normalize();
    let { responseType: s, onUploadProgress: a, onDownloadProgress: c } = r, l, f, h, p, d;
    function g() {
      p && p(), d && d(), r.cancelToken && r.cancelToken.unsubscribe(l), r.signal && r.signal.removeEventListener("abort", l);
    }
    let _ = new XMLHttpRequest();
    _.open(r.method.toUpperCase(), r.url, !0), _.timeout = r.timeout;
    function k() {
      if (!_)
        return;
      const y = Ae.from(
        "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
      ), x = {
        data: !s || s === "text" || s === "json" ? _.responseText : _.response,
        status: _.status,
        statusText: _.statusText,
        headers: y,
        config: e,
        request: _
      };
      Yo(function(T) {
        u(T), g();
      }, function(T) {
        n(T), g();
      }, x), _ = null;
    }
    "onloadend" in _ ? _.onloadend = k : _.onreadystatechange = function() {
      !_ || _.readyState !== 4 || _.status === 0 && !(_.responseURL && _.responseURL.indexOf("file:") === 0) || setTimeout(k);
    }, _.onabort = function() {
      _ && (n(new z("Request aborted", z.ECONNABORTED, e, _)), _ = null);
    }, _.onerror = function() {
      n(new z("Network Error", z.ERR_NETWORK, e, _)), _ = null;
    }, _.ontimeout = function() {
      let m = r.timeout ? "timeout of " + r.timeout + "ms exceeded" : "timeout exceeded";
      const x = r.transitional || Vo;
      r.timeoutErrorMessage && (m = r.timeoutErrorMessage), n(new z(
        m,
        x.clarifyTimeoutError ? z.ETIMEDOUT : z.ECONNABORTED,
        e,
        _
      )), _ = null;
    }, i === void 0 && o.setContentType(null), "setRequestHeader" in _ && E.forEach(o.toJSON(), function(m, x) {
      _.setRequestHeader(x, m);
    }), E.isUndefined(r.withCredentials) || (_.withCredentials = !!r.withCredentials), s && s !== "json" && (_.responseType = r.responseType), c && ([h, d] = nn(c, !0), _.addEventListener("progress", h)), a && _.upload && ([f, p] = nn(a), _.upload.addEventListener("progress", f), _.upload.addEventListener("loadend", p)), (r.cancelToken || r.signal) && (l = (y) => {
      _ && (n(!y || y.type ? new ou(null, e, _) : y), _.abort(), _ = null);
    }, r.cancelToken && r.cancelToken.subscribe(l), r.signal && (r.signal.aborted ? l() : r.signal.addEventListener("abort", l)));
    const v = Dl(r.url);
    if (v && me.protocols.indexOf(v) === -1) {
      n(new z("Unsupported protocol " + v + ":", z.ERR_BAD_REQUEST, e));
      return;
    }
    _.send(i || null);
  });
}, Bl = (e, t) => {
  const { length: u } = e = e ? e.filter(Boolean) : [];
  if (t || u) {
    let n = new AbortController(), r;
    const i = function(c) {
      if (!r) {
        r = !0, s();
        const l = c instanceof Error ? c : this.reason;
        n.abort(l instanceof z ? l : new ou(l instanceof Error ? l.message : l));
      }
    };
    let o = t && setTimeout(() => {
      o = null, i(new z(`timeout ${t} of ms exceeded`, z.ETIMEDOUT));
    }, t);
    const s = () => {
      e && (o && clearTimeout(o), o = null, e.forEach((c) => {
        c.unsubscribe ? c.unsubscribe(i) : c.removeEventListener("abort", i);
      }), e = null);
    };
    e.forEach((c) => c.addEventListener("abort", i));
    const { signal: a } = n;
    return a.unsubscribe = () => E.asap(s), a;
  }
}, Pl = function* (e, t) {
  let u = e.byteLength;
  if (u < t) {
    yield e;
    return;
  }
  let n = 0, r;
  for (; n < u; )
    r = n + t, yield e.slice(n, r), n = r;
}, zl = function(e, t) {
  return Bn(this, null, function* () {
    try {
      for (var u = si(Ul(e)), n, r, i; n = !(r = yield new Mt(u.next())).done; n = !1) {
        const o = r.value;
        yield* Pn(Pl(o, t));
      }
    } catch (r) {
      i = [r];
    } finally {
      try {
        n && (r = u.return) && (yield new Mt(r.call(u)));
      } finally {
        if (i)
          throw i[0];
      }
    }
  });
}, Ul = function(e) {
  return Bn(this, null, function* () {
    if (e[Symbol.asyncIterator]) {
      yield* Pn(e);
      return;
    }
    const t = e.getReader();
    try {
      for (; ; ) {
        const { done: u, value: n } = yield new Mt(t.read());
        if (u)
          break;
        yield n;
      }
    } finally {
      yield new Mt(t.cancel());
    }
  });
}, Ti = (e, t, u, n) => {
  const r = zl(e, t);
  let i = 0, o, s = (c) => {
    o || (o = !0, n && n(c));
  };
  return new ReadableStream({
    pull(c) {
      return qe(this, null, function* () {
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
}, kn = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", ts = kn && typeof ReadableStream == "function", $l = kn && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : (e) => qe(void 0, null, function* () {
  return new Uint8Array(yield new Response(e).arrayBuffer());
})), us = (e, ...t) => {
  try {
    return !!e(...t);
  } catch (u) {
    return !1;
  }
}, ql = ts && us(() => {
  let e = !1;
  const t = new Request(me.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
}), Ri = 64 * 1024, or = ts && us(() => E.isReadableStream(new Response("").body)), rn = {
  stream: or && ((e) => e.body)
};
kn && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !rn[t] && (rn[t] = E.isFunction(e[t]) ? (u) => u[t]() : (u, n) => {
      throw new z(`Response type '${t}' is not supported`, z.ERR_NOT_SUPPORT, n);
    });
  });
})(new Response());
const Hl = (e) => qe(void 0, null, function* () {
  if (e == null)
    return 0;
  if (E.isBlob(e))
    return e.size;
  if (E.isSpecCompliantForm(e))
    return (yield new Request(me.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (E.isArrayBufferView(e) || E.isArrayBuffer(e))
    return e.byteLength;
  if (E.isURLSearchParams(e) && (e = e + ""), E.isString(e))
    return (yield $l(e)).byteLength;
}), jl = (e, t) => qe(void 0, null, function* () {
  const u = E.toFiniteNumber(e.getContentLength());
  return u == null ? Hl(t) : u;
}), Gl = kn && ((e) => qe(void 0, null, function* () {
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
  } = es(e);
  c = c ? (c + "").toLowerCase() : "text";
  let p = Bl([r, i && i.toAbortSignal()], o), d;
  const g = p && p.unsubscribe && (() => {
    p.unsubscribe();
  });
  let _;
  try {
    if (a && ql && u !== "get" && u !== "head" && (_ = yield jl(l, n)) !== 0) {
      let x = new Request(t, {
        method: "POST",
        body: n,
        duplex: "half"
      }), A;
      if (E.isFormData(n) && (A = x.headers.get("content-type")) && l.setContentType(A), x.body) {
        const [T, S] = Ci(
          _,
          nn(Si(a))
        );
        n = Ti(x.body, Ri, T, S);
      }
    }
    E.isString(f) || (f = f ? "include" : "omit");
    const k = "credentials" in Request.prototype;
    d = new Request(t, _e(oe({}, h), {
      signal: p,
      method: u.toUpperCase(),
      headers: l.normalize().toJSON(),
      body: n,
      duplex: "half",
      credentials: k ? f : void 0
    }));
    let v = yield fetch(d);
    const y = or && (c === "stream" || c === "response");
    if (or && (s || y && g)) {
      const x = {};
      ["status", "statusText", "headers"].forEach((I) => {
        x[I] = v[I];
      });
      const A = E.toFiniteNumber(v.headers.get("content-length")), [T, S] = s && Ci(
        A,
        nn(Si(s), !0)
      ) || [];
      v = new Response(
        Ti(v.body, Ri, T, () => {
          S && S(), g && g();
        }),
        x
      );
    }
    c = c || "text";
    let m = yield rn[E.findKey(rn, c) || "text"](v, e);
    return !y && g && g(), yield new Promise((x, A) => {
      Yo(x, A, {
        data: m,
        headers: Ae.from(v.headers),
        status: v.status,
        statusText: v.statusText,
        config: e,
        request: d
      });
    });
  } catch (k) {
    throw g && g(), k && k.name === "TypeError" && /fetch/i.test(k.message) ? Object.assign(
      new z("Network Error", z.ERR_NETWORK, e, d),
      {
        cause: k.cause || k
      }
    ) : z.from(k, k && k.code, e, d);
  }
})), sr = {
  http: ol,
  xhr: Ll,
  fetch: Gl
};
E.forEach(sr, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch (u) {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ni = (e) => `- ${e}`, Zl = (e) => E.isFunction(e) || e === null || e === !1, ns = {
  getAdapter: (e) => {
    e = E.isArray(e) ? e : [e];
    const { length: t } = e;
    let u, n;
    const r = {};
    for (let i = 0; i < t; i++) {
      u = e[i];
      let o;
      if (n = u, !Zl(u) && (n = sr[(o = String(u)).toLowerCase()], n === void 0))
        throw new z(`Unknown adapter '${o}'`);
      if (n)
        break;
      r[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(r).map(
        ([s, a]) => `adapter ${s} ` + (a === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Ni).join(`
`) : " " + Ni(i[0]) : "as no adapter specified";
      throw new z(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: sr
};
function Hn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new ou(null, e);
}
function Oi(e) {
  return Hn(e), e.headers = Ae.from(e.headers), e.data = qn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ns.getAdapter(e.adapter || Ru.adapter)(e).then(function(n) {
    return Hn(e), n.data = qn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Ae.from(n.headers), n;
  }, function(n) {
    return Xo(n) || (Hn(e), n && n.response && (n.response.data = qn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Ae.from(n.response.headers))), Promise.reject(n);
  });
}
const rs = "1.8.1", wn = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  wn[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Fi = {};
wn.transitional = function(t, u, n) {
  function r(i, o) {
    return "[Axios v" + rs + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, s) => {
    if (t === !1)
      throw new z(
        r(o, " has been removed" + (u ? " in " + u : "")),
        z.ERR_DEPRECATED
      );
    return u && !Fi[o] && (Fi[o] = !0, console.warn(
      r(
        o,
        " has been deprecated since v" + u + " and will be removed in the near future"
      )
    )), t ? t(i, o, s) : !0;
  };
};
wn.spelling = function(t) {
  return (u, n) => (console.warn(`${n} is likely a misspelling of ${t}`), !0);
};
function Wl(e, t, u) {
  if (typeof e != "object")
    throw new z("options must be an object", z.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let r = n.length;
  for (; r-- > 0; ) {
    const i = n[r], o = t[i];
    if (o) {
      const s = e[i], a = s === void 0 || o(s, i, e);
      if (a !== !0)
        throw new z("option " + i + " must be " + a, z.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (u !== !0)
      throw new z("Unknown option " + i, z.ERR_BAD_OPTION);
  }
}
const Vu = {
  assertOptions: Wl,
  validators: wn
}, Qe = Vu.validators;
let Pt = class {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new wi(),
      response: new wi()
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
    return qe(this, null, function* () {
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
    typeof t == "string" ? (u = u || {}, u.url = t) : u = t || {}, u = Ut(this.defaults, u);
    const { transitional: n, paramsSerializer: r, headers: i } = u;
    n !== void 0 && Vu.assertOptions(n, {
      silentJSONParsing: Qe.transitional(Qe.boolean),
      forcedJSONParsing: Qe.transitional(Qe.boolean),
      clarifyTimeoutError: Qe.transitional(Qe.boolean)
    }, !1), r != null && (E.isFunction(r) ? u.paramsSerializer = {
      serialize: r
    } : Vu.assertOptions(r, {
      encode: Qe.function,
      serialize: Qe.function
    }, !0)), u.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? u.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : u.allowAbsoluteUrls = !0), Vu.assertOptions(u, {
      baseUrl: Qe.spelling("baseURL"),
      withXsrfToken: Qe.spelling("withXSRFToken")
    }, !0), u.method = (u.method || this.defaults.method || "get").toLowerCase();
    let o = i && E.merge(
      i.common,
      i[u.method]
    );
    i && E.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (d) => {
        delete i[d];
      }
    ), u.headers = Ae.concat(o, i);
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
      const d = [Oi.bind(this), void 0];
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
      } catch (_) {
        g.call(this, _);
        break;
      }
    }
    try {
      l = Oi.call(this, p);
    } catch (d) {
      return Promise.reject(d);
    }
    for (f = 0, h = c.length; f < h; )
      l = l.then(c[f++], c[f++]);
    return l;
  }
  getUri(t) {
    t = Ut(this.defaults, t);
    const u = Qo(t.baseURL, t.url, t.allowAbsoluteUrls);
    return Ko(u, t.params, t.paramsSerializer);
  }
};
E.forEach(["delete", "get", "head", "options"], function(t) {
  Pt.prototype[t] = function(u, n) {
    return this.request(Ut(n || {}, {
      method: t,
      url: u,
      data: (n || {}).data
    }));
  };
});
E.forEach(["post", "put", "patch"], function(t) {
  function u(n) {
    return function(i, o, s) {
      return this.request(Ut(s || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  Pt.prototype[t] = u(), Pt.prototype[t + "Form"] = u(!0);
});
let Kl = class is {
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
      n.reason || (n.reason = new ou(i, o, s), u(n.reason));
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
      token: new is(function(r) {
        t = r;
      }),
      cancel: t
    };
  }
};
function Vl(e) {
  return function(u) {
    return e.apply(null, u);
  };
}
function Jl(e) {
  return E.isObject(e) && e.isAxiosError === !0;
}
const ar = {
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
Object.entries(ar).forEach(([e, t]) => {
  ar[t] = e;
});
function os(e) {
  const t = new Pt(e), u = Bo(Pt.prototype.request, t);
  return E.extend(u, Pt.prototype, t, { allOwnKeys: !0 }), E.extend(u, t, null, { allOwnKeys: !0 }), u.create = function(r) {
    return os(Ut(e, r));
  }, u;
}
const se = os(Ru);
se.Axios = Pt;
se.CanceledError = ou;
se.CancelToken = Kl;
se.isCancel = Xo;
se.VERSION = rs;
se.toFormData = vn;
se.AxiosError = z;
se.Cancel = se.CanceledError;
se.all = function(t) {
  return Promise.all(t);
};
se.spread = Vl;
se.isAxiosError = Jl;
se.mergeConfig = Ut;
se.AxiosHeaders = Ae;
se.formToJSON = (e) => Jo(E.isHTMLForm(e) ? new FormData(e) : e);
se.getAdapter = ns.getAdapter;
se.HttpStatusCode = ar;
se.default = se;
const {
  Axios: Vh,
  AxiosError: Jh,
  CanceledError: Xh,
  isCancel: Yh,
  CancelToken: Qh,
  VERSION: ep,
  all: tp,
  Cancel: up,
  isAxiosError: np,
  spread: rp,
  toFormData: ip,
  AxiosHeaders: op,
  HttpStatusCode: sp,
  formToJSON: ap,
  getAdapter: cp,
  mergeConfig: lp
} = se, Xl = {
  // Only enable logging in development
  apiBaseUrl: "https://fluent-ai-backend.support-ai.workers.dev/fluent-bot"
}, Ir = se.create({
  baseURL: Xl.apiBaseUrl,
  timeout: 3e4,
  headers: {
    "Content-Type": "application/json"
  }
});
Ir.interceptors.request.use(
  (e) => e,
  (e) => (console.error(e), Promise.reject(e))
);
Ir.interceptors.response.use(
  (e) => e,
  (e) => (console.error(e), Promise.reject(e))
);
const Ii = {};
function Yl(e) {
  let t = Ii[e];
  if (t)
    return t;
  t = Ii[e] = [];
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
function Qt(e, t) {
  typeof t != "string" && (t = Qt.defaultChars);
  const u = Yl(t);
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
Qt.defaultChars = ";/?:@&=+$,#";
Qt.componentChars = "";
const Mi = {};
function Ql(e) {
  let t = Mi[e];
  if (t)
    return t;
  t = Mi[e] = [];
  for (let u = 0; u < 128; u++) {
    const n = String.fromCharCode(u);
    /^[0-9a-z]$/i.test(n) ? t.push(n) : t.push("%" + ("0" + u.toString(16).toUpperCase()).slice(-2));
  }
  for (let u = 0; u < e.length; u++)
    t[e.charCodeAt(u)] = e[u];
  return t;
}
function Nu(e, t, u) {
  typeof t != "string" && (u = t, t = Nu.defaultChars), typeof u == "undefined" && (u = !0);
  const n = Ql(t);
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
Nu.defaultChars = ";/?:@&=+$,-_.!~*'()#";
Nu.componentChars = "-_.!~*'()";
function Mr(e) {
  let t = "";
  return t += e.protocol || "", t += e.slashes ? "//" : "", t += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? t += "[" + e.hostname + "]" : t += e.hostname || "", t += e.port ? ":" + e.port : "", t += e.pathname || "", t += e.search || "", t += e.hash || "", t;
}
function on() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
const ef = /^([a-z0-9.+-]+:)/i, tf = /:[0-9]*$/, uf = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, nf = ["<", ">", '"', "`", " ", "\r", `
`, "	"], rf = ["{", "}", "|", "\\", "^", "`"].concat(nf), of = ["'"].concat(rf), Li = ["%", "/", "?", ";", "#"].concat(of), Bi = ["/", "?", "#"], sf = 255, Pi = /^[+a-z0-9A-Z_-]{0,63}$/, af = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, zi = {
  javascript: !0,
  "javascript:": !0
}, Ui = {
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
function Lr(e, t) {
  if (e && e instanceof on) return e;
  const u = new on();
  return u.parse(e, t), u;
}
on.prototype.parse = function(e, t) {
  let u, n, r, i = e;
  if (i = i.trim(), !t && e.split("#").length === 1) {
    const c = uf.exec(i);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  let o = ef.exec(i);
  if (o && (o = o[0], u = o.toLowerCase(), this.protocol = o, i = i.substr(o.length)), (t || o || i.match(/^\/\/[^@\/]+@[^@\/]+/)) && (r = i.substr(0, 2) === "//", r && !(o && zi[o]) && (i = i.substr(2), this.slashes = !0)), !zi[o] && (r || o && !Ui[o])) {
    let c = -1;
    for (let d = 0; d < Bi.length; d++)
      n = i.indexOf(Bi[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    let l, f;
    c === -1 ? f = i.lastIndexOf("@") : f = i.lastIndexOf("@", c), f !== -1 && (l = i.slice(0, f), i = i.slice(f + 1), this.auth = l), c = -1;
    for (let d = 0; d < Li.length; d++)
      n = i.indexOf(Li[d]), n !== -1 && (c === -1 || n < c) && (c = n);
    c === -1 && (c = i.length), i[c - 1] === ":" && c--;
    const h = i.slice(0, c);
    i = i.slice(c), this.parseHost(h), this.hostname = this.hostname || "";
    const p = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!p) {
      const d = this.hostname.split(/\./);
      for (let g = 0, _ = d.length; g < _; g++) {
        const k = d[g];
        if (k && !k.match(Pi)) {
          let v = "";
          for (let y = 0, m = k.length; y < m; y++)
            k.charCodeAt(y) > 127 ? v += "x" : v += k[y];
          if (!v.match(Pi)) {
            const y = d.slice(0, g), m = d.slice(g + 1), x = k.match(af);
            x && (y.push(x[1]), m.unshift(x[2])), m.length && (i = m.join(".") + i), this.hostname = y.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > sf && (this.hostname = ""), p && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  const s = i.indexOf("#");
  s !== -1 && (this.hash = i.substr(s), i = i.slice(0, s));
  const a = i.indexOf("?");
  return a !== -1 && (this.search = i.substr(a), i = i.slice(0, a)), i && (this.pathname = i), Ui[u] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
on.prototype.parseHost = function(e) {
  let t = tf.exec(e);
  t && (t = t[0], t !== ":" && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e);
};
const cf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: Qt,
  encode: Nu,
  format: Mr,
  parse: Lr
}, Symbol.toStringTag, { value: "Module" })), ss = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, as = /[\0-\x1F\x7F-\x9F]/, lf = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/, Br = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, cs = /[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/, ls = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/, ff = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Any: ss,
  Cc: as,
  Cf: lf,
  P: Br,
  S: cs,
  Z: ls
}, Symbol.toStringTag, { value: "Module" })), df = new Uint16Array(
  // prettier-ignore
  'ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map((e) => e.charCodeAt(0))
), hf = new Uint16Array(
  // prettier-ignore
  "Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map((e) => e.charCodeAt(0))
);
var jn;
const pf = /* @__PURE__ */ new Map([
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
]), bf = (
  // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
  (jn = String.fromCodePoint) !== null && jn !== void 0 ? jn : function(e) {
    let t = "";
    return e > 65535 && (e -= 65536, t += String.fromCharCode(e >>> 10 & 1023 | 55296), e = 56320 | e & 1023), t += String.fromCharCode(e), t;
  }
);
function gf(e) {
  var t;
  return e >= 55296 && e <= 57343 || e > 1114111 ? 65533 : (t = pf.get(e)) !== null && t !== void 0 ? t : e;
}
var he;
(function(e) {
  e[e.NUM = 35] = "NUM", e[e.SEMI = 59] = "SEMI", e[e.EQUALS = 61] = "EQUALS", e[e.ZERO = 48] = "ZERO", e[e.NINE = 57] = "NINE", e[e.LOWER_A = 97] = "LOWER_A", e[e.LOWER_F = 102] = "LOWER_F", e[e.LOWER_X = 120] = "LOWER_X", e[e.LOWER_Z = 122] = "LOWER_Z", e[e.UPPER_A = 65] = "UPPER_A", e[e.UPPER_F = 70] = "UPPER_F", e[e.UPPER_Z = 90] = "UPPER_Z";
})(he || (he = {}));
const _f = 32;
var vt;
(function(e) {
  e[e.VALUE_LENGTH = 49152] = "VALUE_LENGTH", e[e.BRANCH_LENGTH = 16256] = "BRANCH_LENGTH", e[e.JUMP_TABLE = 127] = "JUMP_TABLE";
})(vt || (vt = {}));
function cr(e) {
  return e >= he.ZERO && e <= he.NINE;
}
function mf(e) {
  return e >= he.UPPER_A && e <= he.UPPER_F || e >= he.LOWER_A && e <= he.LOWER_F;
}
function xf(e) {
  return e >= he.UPPER_A && e <= he.UPPER_Z || e >= he.LOWER_A && e <= he.LOWER_Z || cr(e);
}
function Ef(e) {
  return e === he.EQUALS || xf(e);
}
var de;
(function(e) {
  e[e.EntityStart = 0] = "EntityStart", e[e.NumericStart = 1] = "NumericStart", e[e.NumericDecimal = 2] = "NumericDecimal", e[e.NumericHex = 3] = "NumericHex", e[e.NamedEntity = 4] = "NamedEntity";
})(de || (de = {}));
var Et;
(function(e) {
  e[e.Legacy = 0] = "Legacy", e[e.Strict = 1] = "Strict", e[e.Attribute = 2] = "Attribute";
})(Et || (Et = {}));
class yf {
  constructor(t, u, n) {
    this.decodeTree = t, this.emitCodePoint = u, this.errors = n, this.state = de.EntityStart, this.consumed = 1, this.result = 0, this.treeIndex = 0, this.excess = 1, this.decodeMode = Et.Strict;
  }
  /** Resets the instance to make it reusable. */
  startEntity(t) {
    this.decodeMode = t, this.state = de.EntityStart, this.result = 0, this.treeIndex = 0, this.excess = 1, this.consumed = 1;
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
      case de.EntityStart:
        return t.charCodeAt(u) === he.NUM ? (this.state = de.NumericStart, this.consumed += 1, this.stateNumericStart(t, u + 1)) : (this.state = de.NamedEntity, this.stateNamedEntity(t, u));
      case de.NumericStart:
        return this.stateNumericStart(t, u);
      case de.NumericDecimal:
        return this.stateNumericDecimal(t, u);
      case de.NumericHex:
        return this.stateNumericHex(t, u);
      case de.NamedEntity:
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
    return u >= t.length ? -1 : (t.charCodeAt(u) | _f) === he.LOWER_X ? (this.state = de.NumericHex, this.consumed += 1, this.stateNumericHex(t, u + 1)) : (this.state = de.NumericDecimal, this.stateNumericDecimal(t, u));
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
      if (cr(r) || mf(r))
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
      if (cr(r))
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
    if (t === he.SEMI)
      this.consumed += 1;
    else if (this.decodeMode === Et.Strict)
      return 0;
    return this.emitCodePoint(gf(this.result), this.consumed), this.errors && (t !== he.SEMI && this.errors.missingSemicolonAfterCharacterReference(), this.errors.validateNumericCharacterReference(this.result)), this.consumed;
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
    let r = n[this.treeIndex], i = (r & vt.VALUE_LENGTH) >> 14;
    for (; u < t.length; u++, this.excess++) {
      const o = t.charCodeAt(u);
      if (this.treeIndex = vf(n, r, this.treeIndex + Math.max(1, i), o), this.treeIndex < 0)
        return this.result === 0 || // If we are parsing an attribute
        this.decodeMode === Et.Attribute && // We shouldn't have consumed any characters after the entity,
        (i === 0 || // And there should be no invalid characters.
        Ef(o)) ? 0 : this.emitNotTerminatedNamedEntity();
      if (r = n[this.treeIndex], i = (r & vt.VALUE_LENGTH) >> 14, i !== 0) {
        if (o === he.SEMI)
          return this.emitNamedEntityData(this.treeIndex, i, this.consumed + this.excess);
        this.decodeMode !== Et.Strict && (this.result = this.treeIndex, this.consumed += this.excess, this.excess = 0);
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
    const { result: u, decodeTree: n } = this, r = (n[u] & vt.VALUE_LENGTH) >> 14;
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
    return this.emitCodePoint(u === 1 ? r[t] & ~vt.VALUE_LENGTH : r[t + 1], n), u === 3 && this.emitCodePoint(r[t + 2], n), n;
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
      case de.NamedEntity:
        return this.result !== 0 && (this.decodeMode !== Et.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
      // Otherwise, emit a numeric entity if we have one.
      case de.NumericDecimal:
        return this.emitNumericEntity(0, 2);
      case de.NumericHex:
        return this.emitNumericEntity(0, 3);
      case de.NumericStart:
        return (t = this.errors) === null || t === void 0 || t.absenceOfDigitsInNumericCharacterReference(this.consumed), 0;
      case de.EntityStart:
        return 0;
    }
  }
}
function fs(e) {
  let t = "";
  const u = new yf(e, (n) => t += bf(n));
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
function vf(e, t, u, n) {
  const r = (t & vt.BRANCH_LENGTH) >> 7, i = t & vt.JUMP_TABLE;
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
const kf = fs(df);
fs(hf);
function ds(e, t = Et.Legacy) {
  return kf(e, t);
}
function wf(e) {
  return Object.prototype.toString.call(e);
}
function Pr(e) {
  return wf(e) === "[object String]";
}
const Af = Object.prototype.hasOwnProperty;
function Cf(e, t) {
  return Af.call(e, t);
}
function An(e) {
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
function hs(e, t, u) {
  return [].concat(e.slice(0, t), u, e.slice(t + 1));
}
function zr(e) {
  return !(e >= 55296 && e <= 57343 || e >= 64976 && e <= 65007 || (e & 65535) === 65535 || (e & 65535) === 65534 || e >= 0 && e <= 8 || e === 11 || e >= 14 && e <= 31 || e >= 127 && e <= 159 || e > 1114111);
}
function sn(e) {
  if (e > 65535) {
    e -= 65536;
    const t = 55296 + (e >> 10), u = 56320 + (e & 1023);
    return String.fromCharCode(t, u);
  }
  return String.fromCharCode(e);
}
const ps = /\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g, Sf = /&([a-z#][a-z0-9]{1,31});/gi, Df = new RegExp(ps.source + "|" + Sf.source, "gi"), Tf = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;
function Rf(e, t) {
  if (t.charCodeAt(0) === 35 && Tf.test(t)) {
    const n = t[1].toLowerCase() === "x" ? parseInt(t.slice(2), 16) : parseInt(t.slice(1), 10);
    return zr(n) ? sn(n) : e;
  }
  const u = ds(e);
  return u !== e ? u : e;
}
function Nf(e) {
  return e.indexOf("\\") < 0 ? e : e.replace(ps, "$1");
}
function eu(e) {
  return e.indexOf("\\") < 0 && e.indexOf("&") < 0 ? e : e.replace(Df, function(t, u, n) {
    return u || Rf(t, n);
  });
}
const Of = /[&<>"]/, Ff = /[&<>"]/g, If = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;"
};
function Mf(e) {
  return If[e];
}
function Rt(e) {
  return Of.test(e) ? e.replace(Ff, Mf) : e;
}
const Lf = /[.?*+^$[\]\\(){}|-]/g;
function Bf(e) {
  return e.replace(Lf, "\\$&");
}
function te(e) {
  switch (e) {
    case 9:
    case 32:
      return !0;
  }
  return !1;
}
function _u(e) {
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
function mu(e) {
  return Br.test(e) || cs.test(e);
}
function xu(e) {
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
function Cn(e) {
  return e = e.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (e = e.replace(/ẞ/g, "ß")), e.toLowerCase().toUpperCase();
}
const Pf = { mdurl: cf, ucmicro: ff }, zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arrayReplaceAt: hs,
  assign: An,
  escapeHtml: Rt,
  escapeRE: Bf,
  fromCodePoint: sn,
  has: Cf,
  isMdAsciiPunct: xu,
  isPunctChar: mu,
  isSpace: te,
  isString: Pr,
  isValidEntityCode: zr,
  isWhiteSpace: _u,
  lib: Pf,
  normalizeReference: Cn,
  unescapeAll: eu,
  unescapeMd: Nf
}, Symbol.toStringTag, { value: "Module" }));
function Uf(e, t, u) {
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
function $f(e, t, u) {
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
        return i.pos = r + 1, i.str = eu(e.slice(t + 1, r)), i.ok = !0, i;
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
  return t === r || o !== 0 || (i.str = eu(e.slice(t, r)), i.pos = r, i.ok = !0), i;
}
function qf(e, t, u, n) {
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
      return o.pos = i + 1, o.str += eu(e.slice(t, i)), o.ok = !0, o;
    if (r === 40 && o.marker === 41)
      return o;
    r === 92 && i + 1 < u && i++, i++;
  }
  return o.can_continue = !0, o.str += eu(e.slice(t, i)), o;
}
const Hf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  parseLinkDestination: $f,
  parseLinkLabel: Uf,
  parseLinkTitle: qf
}, Symbol.toStringTag, { value: "Module" })), at = {};
at.code_inline = function(e, t, u, n, r) {
  const i = e[t];
  return "<code" + r.renderAttrs(i) + ">" + Rt(i.content) + "</code>";
};
at.code_block = function(e, t, u, n, r) {
  const i = e[t];
  return "<pre" + r.renderAttrs(i) + "><code>" + Rt(e[t].content) + `</code></pre>
`;
};
at.fence = function(e, t, u, n, r) {
  const i = e[t], o = i.info ? eu(i.info).trim() : "";
  let s = "", a = "";
  if (o) {
    const l = o.split(/(\s+)/g);
    s = l[0], a = l.slice(2).join("");
  }
  let c;
  if (u.highlight ? c = u.highlight(i.content, s, a) || Rt(i.content) : c = Rt(i.content), c.indexOf("<pre") === 0)
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
at.image = function(e, t, u, n, r) {
  const i = e[t];
  return i.attrs[i.attrIndex("alt")][1] = r.renderInlineAsText(i.children, u, n), r.renderToken(e, t, u);
};
at.hardbreak = function(e, t, u) {
  return u.xhtmlOut ? `<br />
` : `<br>
`;
};
at.softbreak = function(e, t, u) {
  return u.breaks ? u.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
at.text = function(e, t) {
  return Rt(e[t].content);
};
at.html_block = function(e, t) {
  return e[t].content;
};
at.html_inline = function(e, t) {
  return e[t].content;
};
function su() {
  this.rules = An({}, at);
}
su.prototype.renderAttrs = function(t) {
  let u, n, r;
  if (!t.attrs)
    return "";
  for (r = "", u = 0, n = t.attrs.length; u < n; u++)
    r += " " + Rt(t.attrs[u][0]) + '="' + Rt(t.attrs[u][1]) + '"';
  return r;
};
su.prototype.renderToken = function(t, u, n) {
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
su.prototype.renderInline = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t);
  }
  return n;
};
su.prototype.renderInlineAsText = function(e, t, u) {
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
su.prototype.render = function(e, t, u) {
  let n = "";
  const r = this.rules;
  for (let i = 0, o = e.length; i < o; i++) {
    const s = e[i].type;
    s === "inline" ? n += this.renderInline(e[i].children, t, u) : typeof r[s] != "undefined" ? n += r[s](e, i, t, u, this) : n += this.renderToken(e, i, t, u);
  }
  return n;
};
function Ce() {
  this.__rules__ = [], this.__cache__ = null;
}
Ce.prototype.__find__ = function(e) {
  for (let t = 0; t < this.__rules__.length; t++)
    if (this.__rules__[t].name === e)
      return t;
  return -1;
};
Ce.prototype.__compile__ = function() {
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
Ce.prototype.at = function(e, t, u) {
  const n = this.__find__(e), r = u || {};
  if (n === -1)
    throw new Error("Parser rule not found: " + e);
  this.__rules__[n].fn = t, this.__rules__[n].alt = r.alt || [], this.__cache__ = null;
};
Ce.prototype.before = function(e, t, u, n) {
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
Ce.prototype.after = function(e, t, u, n) {
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
Ce.prototype.push = function(e, t, u) {
  const n = u || {};
  this.__rules__.push({
    name: e,
    enabled: !0,
    fn: t,
    alt: n.alt || []
  }), this.__cache__ = null;
};
Ce.prototype.enable = function(e, t) {
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
Ce.prototype.enableOnly = function(e, t) {
  Array.isArray(e) || (e = [e]), this.__rules__.forEach(function(u) {
    u.enabled = !1;
  }), this.enable(e, t);
};
Ce.prototype.disable = function(e, t) {
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
Ce.prototype.getRules = function(e) {
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
function bs(e, t, u) {
  this.src = e, this.env = u, this.tokens = [], this.inlineMode = !1, this.md = t;
}
bs.prototype.Token = Je;
const jf = /\r\n?|\n/g, Gf = /\0/g;
function Zf(e) {
  let t;
  t = e.src.replace(jf, `
`), t = t.replace(Gf, "�"), e.src = t;
}
function Wf(e) {
  let t;
  e.inlineMode ? (t = new e.Token("inline", "", 0), t.content = e.src, t.map = [0, 1], t.children = [], e.tokens.push(t)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}
function Kf(e) {
  const t = e.tokens;
  for (let u = 0, n = t.length; u < n; u++) {
    const r = t[u];
    r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
  }
}
function Vf(e) {
  return /^<a[>\s]/i.test(e);
}
function Jf(e) {
  return /^<\/a\s*>/i.test(e);
}
function Xf(e) {
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
        if (s.type === "html_inline" && (Vf(s.content) && i > 0 && i--, Jf(s.content) && i++), !(i > 0) && s.type === "text" && e.md.linkify.test(s.content)) {
          const a = s.content;
          let c = e.md.linkify.match(a);
          const l = [];
          let f = s.level, h = 0;
          c.length > 0 && c[0].index === 0 && o > 0 && r[o - 1].type === "text_special" && (c = c.slice(1));
          for (let p = 0; p < c.length; p++) {
            const d = c[p].url, g = e.md.normalizeLink(d);
            if (!e.md.validateLink(g))
              continue;
            let _ = c[p].text;
            c[p].schema ? c[p].schema === "mailto:" && !/^mailto:/i.test(_) ? _ = e.md.normalizeLinkText("mailto:" + _).replace(/^mailto:/, "") : _ = e.md.normalizeLinkText(_) : _ = e.md.normalizeLinkText("http://" + _).replace(/^http:\/\//, "");
            const k = c[p].index;
            if (k > h) {
              const x = new e.Token("text", "", 0);
              x.content = a.slice(h, k), x.level = f, l.push(x);
            }
            const v = new e.Token("link_open", "a", 1);
            v.attrs = [["href", g]], v.level = f++, v.markup = "linkify", v.info = "auto", l.push(v);
            const y = new e.Token("text", "", 0);
            y.content = _, y.level = f, l.push(y);
            const m = new e.Token("link_close", "a", -1);
            m.level = --f, m.markup = "linkify", m.info = "auto", l.push(m), h = c[p].lastIndex;
          }
          if (h < a.length) {
            const p = new e.Token("text", "", 0);
            p.content = a.slice(h), p.level = f, l.push(p);
          }
          t[u].children = r = hs(r, o, l);
        }
      }
    }
}
const gs = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Yf = /\((c|tm|r)\)/i, Qf = /\((c|tm|r)\)/ig, ed = {
  c: "©",
  r: "®",
  tm: "™"
};
function td(e, t) {
  return ed[t.toLowerCase()];
}
function ud(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && (n.content = n.content.replace(Qf, td)), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function nd(e) {
  let t = 0;
  for (let u = e.length - 1; u >= 0; u--) {
    const n = e[u];
    n.type === "text" && !t && gs.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), n.type === "link_open" && n.info === "auto" && t--, n.type === "link_close" && n.info === "auto" && t++;
  }
}
function rd(e) {
  let t;
  if (e.md.options.typographer)
    for (t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type === "inline" && (Yf.test(e.tokens[t].content) && ud(e.tokens[t].children), gs.test(e.tokens[t].content) && nd(e.tokens[t].children));
}
const id = /['"]/, $i = /['"]/g, qi = "’";
function qu(e, t, u) {
  return e.slice(0, t) + u + e.slice(t + 1);
}
function od(e, t) {
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
        $i.lastIndex = a;
        const l = $i.exec(s);
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
        const _ = xu(d) || mu(String.fromCharCode(d)), k = xu(g) || mu(String.fromCharCode(g)), v = _u(d), y = _u(g);
        if (y ? f = !1 : k && (v || _ || (f = !1)), v ? h = !1 : _ && (y || k || (h = !1)), g === 34 && l[0] === '"' && d >= 48 && d <= 57 && (h = f = !1), f && h && (f = _, h = k), !f && !h) {
          p && (i.content = qu(i.content, l.index, qi));
          continue;
        }
        if (h)
          for (u = n.length - 1; u >= 0; u--) {
            let m = n[u];
            if (n[u].level < o)
              break;
            if (m.single === p && n[u].level === o) {
              m = n[u];
              let x, A;
              p ? (x = t.md.options.quotes[2], A = t.md.options.quotes[3]) : (x = t.md.options.quotes[0], A = t.md.options.quotes[1]), i.content = qu(i.content, l.index, A), e[m.token].content = qu(
                e[m.token].content,
                m.pos,
                x
              ), a += A.length - 1, m.token === r && (a += x.length - 1), s = i.content, c = s.length, n.length = u;
              continue e;
            }
          }
        f ? n.push({
          token: r,
          pos: l.index,
          single: p,
          level: o
        }) : h && p && (i.content = qu(i.content, l.index, qi));
      }
  }
}
function sd(e) {
  if (e.md.options.typographer)
    for (let t = e.tokens.length - 1; t >= 0; t--)
      e.tokens[t].type !== "inline" || !id.test(e.tokens[t].content) || od(e.tokens[t].children, e);
}
function ad(e) {
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
const Gn = [
  ["normalize", Zf],
  ["block", Wf],
  ["inline", Kf],
  ["linkify", Xf],
  ["replacements", rd],
  ["smartquotes", sd],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", ad]
];
function Ur() {
  this.ruler = new Ce();
  for (let e = 0; e < Gn.length; e++)
    this.ruler.push(Gn[e][0], Gn[e][1]);
}
Ur.prototype.process = function(e) {
  const t = this.ruler.getRules("");
  for (let u = 0, n = t.length; u < n; u++)
    t[u](e);
};
Ur.prototype.State = bs;
function ct(e, t, u, n) {
  this.src = e, this.md = t, this.env = u, this.tokens = n, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0;
  const r = this.src;
  for (let i = 0, o = 0, s = 0, a = 0, c = r.length, l = !1; o < c; o++) {
    const f = r.charCodeAt(o);
    if (!l)
      if (te(f)) {
        s++, f === 9 ? a += 4 - a % 4 : a++;
        continue;
      } else
        l = !0;
    (f === 10 || o === c - 1) && (f !== 10 && o++, this.bMarks.push(i), this.eMarks.push(o), this.tShift.push(s), this.sCount.push(a), this.bsCount.push(0), l = !1, s = 0, a = 0, i = o + 1);
  }
  this.bMarks.push(r.length), this.eMarks.push(r.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
ct.prototype.push = function(e, t, u) {
  const n = new Je(e, t, u);
  return n.block = !0, u < 0 && this.level--, n.level = this.level, u > 0 && this.level++, this.tokens.push(n), n;
};
ct.prototype.isEmpty = function(t) {
  return this.bMarks[t] + this.tShift[t] >= this.eMarks[t];
};
ct.prototype.skipEmptyLines = function(t) {
  for (let u = this.lineMax; t < u && !(this.bMarks[t] + this.tShift[t] < this.eMarks[t]); t++)
    ;
  return t;
};
ct.prototype.skipSpaces = function(t) {
  for (let u = this.src.length; t < u; t++) {
    const n = this.src.charCodeAt(t);
    if (!te(n))
      break;
  }
  return t;
};
ct.prototype.skipSpacesBack = function(t, u) {
  if (t <= u)
    return t;
  for (; t > u; )
    if (!te(this.src.charCodeAt(--t)))
      return t + 1;
  return t;
};
ct.prototype.skipChars = function(t, u) {
  for (let n = this.src.length; t < n && this.src.charCodeAt(t) === u; t++)
    ;
  return t;
};
ct.prototype.skipCharsBack = function(t, u, n) {
  if (t <= n)
    return t;
  for (; t > n; )
    if (u !== this.src.charCodeAt(--t))
      return t + 1;
  return t;
};
ct.prototype.getLines = function(t, u, n, r) {
  if (t >= u)
    return "";
  const i = new Array(u - t);
  for (let o = 0, s = t; s < u; s++, o++) {
    let a = 0;
    const c = this.bMarks[s];
    let l = c, f;
    for (s + 1 < u || r ? f = this.eMarks[s] + 1 : f = this.eMarks[s]; l < f && a < n; ) {
      const h = this.src.charCodeAt(l);
      if (te(h))
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
ct.prototype.Token = Je;
const cd = 65536;
function Zn(e, t) {
  const u = e.bMarks[t] + e.tShift[t], n = e.eMarks[t];
  return e.src.slice(u, n);
}
function Hi(e) {
  const t = [], u = e.length;
  let n = 0, r = e.charCodeAt(n), i = !1, o = 0, s = "";
  for (; n < u; )
    r === 124 && (i ? (s += e.substring(o, n - 1), o = n) : (t.push(s + e.substring(o, n)), s = "", o = n + 1)), i = r === 92, n++, r = e.charCodeAt(n);
  return t.push(s + e.substring(o)), t;
}
function ld(e, t, u, n) {
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
  if (s !== 124 && s !== 45 && s !== 58 && !te(s) || o === 45 && te(s))
    return !1;
  for (; i < e.eMarks[r]; ) {
    const m = e.src.charCodeAt(i);
    if (m !== 124 && m !== 45 && m !== 58 && !te(m))
      return !1;
    i++;
  }
  let a = Zn(e, t + 1), c = a.split("|");
  const l = [];
  for (let m = 0; m < c.length; m++) {
    const x = c[m].trim();
    if (!x) {
      if (m === 0 || m === c.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(x))
      return !1;
    x.charCodeAt(x.length - 1) === 58 ? l.push(x.charCodeAt(0) === 58 ? "center" : "right") : x.charCodeAt(0) === 58 ? l.push("left") : l.push("");
  }
  if (a = Zn(e, t).trim(), a.indexOf("|") === -1 || e.sCount[t] - e.blkIndent >= 4)
    return !1;
  c = Hi(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop();
  const f = c.length;
  if (f === 0 || f !== l.length)
    return !1;
  if (n)
    return !0;
  const h = e.parentType;
  e.parentType = "table";
  const p = e.md.block.ruler.getRules("blockquote"), d = e.push("table_open", "table", 1), g = [t, 0];
  d.map = g;
  const _ = e.push("thead_open", "thead", 1);
  _.map = [t, t + 1];
  const k = e.push("tr_open", "tr", 1);
  k.map = [t, t + 1];
  for (let m = 0; m < c.length; m++) {
    const x = e.push("th_open", "th", 1);
    l[m] && (x.attrs = [["style", "text-align:" + l[m]]]);
    const A = e.push("inline", "", 0);
    A.content = c[m].trim(), A.children = [], e.push("th_close", "th", -1);
  }
  e.push("tr_close", "tr", -1), e.push("thead_close", "thead", -1);
  let v, y = 0;
  for (r = t + 2; r < u && !(e.sCount[r] < e.blkIndent); r++) {
    let m = !1;
    for (let A = 0, T = p.length; A < T; A++)
      if (p[A](e, r, u, !0)) {
        m = !0;
        break;
      }
    if (m || (a = Zn(e, r).trim(), !a) || e.sCount[r] - e.blkIndent >= 4 || (c = Hi(a), c.length && c[0] === "" && c.shift(), c.length && c[c.length - 1] === "" && c.pop(), y += f - c.length, y > cd))
      break;
    if (r === t + 2) {
      const A = e.push("tbody_open", "tbody", 1);
      A.map = v = [t + 2, 0];
    }
    const x = e.push("tr_open", "tr", 1);
    x.map = [r, r + 1];
    for (let A = 0; A < f; A++) {
      const T = e.push("td_open", "td", 1);
      l[A] && (T.attrs = [["style", "text-align:" + l[A]]]);
      const S = e.push("inline", "", 0);
      S.content = c[A] ? c[A].trim() : "", S.children = [], e.push("td_close", "td", -1);
    }
    e.push("tr_close", "tr", -1);
  }
  return v && (e.push("tbody_close", "tbody", -1), v[1] = r), e.push("table_close", "table", -1), g[1] = r, e.parentType = h, e.line = r, !0;
}
function fd(e, t, u) {
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
function dd(e, t, u, n) {
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
function hd(e, t, u, n) {
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
    const y = e.sCount[d] < e.blkIndent;
    if (r = e.bMarks[d] + e.tShift[d], i = e.eMarks[d], r >= i)
      break;
    if (e.src.charCodeAt(r++) === 62 && !y) {
      let x = e.sCount[d] + 1, A, T;
      e.src.charCodeAt(r) === 32 ? (r++, x++, T = !1, A = !0) : e.src.charCodeAt(r) === 9 ? (A = !0, (e.bsCount[d] + x) % 4 === 3 ? (r++, x++, T = !1) : T = !0) : A = !1;
      let S = x;
      for (s.push(e.bMarks[d]), e.bMarks[d] = r; r < i; ) {
        const I = e.src.charCodeAt(r);
        if (te(I))
          I === 9 ? S += 4 - (S + e.bsCount[d] + (T ? 1 : 0)) % 4 : S++;
        else
          break;
        r++;
      }
      p = r >= i, a.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (A ? 1 : 0), c.push(e.sCount[d]), e.sCount[d] = S - x, l.push(e.tShift[d]), e.tShift[d] = r - e.bMarks[d];
      continue;
    }
    if (p)
      break;
    let m = !1;
    for (let x = 0, A = f.length; x < A; x++)
      if (f[x](e, d, u, !0)) {
        m = !0;
        break;
      }
    if (m) {
      e.lineMax = d, e.blkIndent !== 0 && (s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    s.push(e.bMarks[d]), a.push(e.bsCount[d]), l.push(e.tShift[d]), c.push(e.sCount[d]), e.sCount[d] = -1;
  }
  const g = e.blkIndent;
  e.blkIndent = 0;
  const _ = e.push("blockquote_open", "blockquote", 1);
  _.markup = ">";
  const k = [t, 0];
  _.map = k, e.md.block.tokenize(e, t, d);
  const v = e.push("blockquote_close", "blockquote", -1);
  v.markup = ">", e.lineMax = o, e.parentType = h, k[1] = e.line;
  for (let y = 0; y < l.length; y++)
    e.bMarks[y + t] = s[y], e.tShift[y + t] = l[y], e.sCount[y + t] = c[y], e.bsCount[y + t] = a[y];
  return e.blkIndent = g, !0;
}
function pd(e, t, u, n) {
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
    if (c !== o && !te(c))
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
function ji(e, t) {
  const u = e.eMarks[t];
  let n = e.bMarks[t] + e.tShift[t];
  const r = e.src.charCodeAt(n++);
  if (r !== 42 && r !== 45 && r !== 43)
    return -1;
  if (n < u) {
    const i = e.src.charCodeAt(n);
    if (!te(i))
      return -1;
  }
  return n;
}
function Gi(e, t) {
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
  return r < n && (i = e.src.charCodeAt(r), !te(i)) ? -1 : r;
}
function bd(e, t) {
  const u = e.level + 2;
  for (let n = t + 2, r = e.tokens.length - 2; n < r; n++)
    e.tokens[n].level === u && e.tokens[n].type === "paragraph_open" && (e.tokens[n + 2].hidden = !0, e.tokens[n].hidden = !0, n += 2);
}
function gd(e, t, u, n) {
  let r, i, o, s, a = t, c = !0;
  if (e.sCount[a] - e.blkIndent >= 4 || e.listIndent >= 0 && e.sCount[a] - e.listIndent >= 4 && e.sCount[a] < e.blkIndent)
    return !1;
  let l = !1;
  n && e.parentType === "paragraph" && e.sCount[a] >= e.blkIndent && (l = !0);
  let f, h, p;
  if ((p = Gi(e, a)) >= 0) {
    if (f = !0, o = e.bMarks[a] + e.tShift[a], h = Number(e.src.slice(o, p - 1)), l && h !== 1) return !1;
  } else if ((p = ji(e, a)) >= 0)
    f = !1;
  else
    return !1;
  if (l && e.skipSpaces(p) >= e.eMarks[a])
    return !1;
  if (n)
    return !0;
  const d = e.src.charCodeAt(p - 1), g = e.tokens.length;
  f ? (s = e.push("ordered_list_open", "ol", 1), h !== 1 && (s.attrs = [["start", h]])) : s = e.push("bullet_list_open", "ul", 1);
  const _ = [a, 0];
  s.map = _, s.markup = String.fromCharCode(d);
  let k = !1;
  const v = e.md.block.ruler.getRules("list"), y = e.parentType;
  for (e.parentType = "list"; a < u; ) {
    i = p, r = e.eMarks[a];
    const m = e.sCount[a] + p - (e.bMarks[a] + e.tShift[a]);
    let x = m;
    for (; i < r; ) {
      const U = e.src.charCodeAt(i);
      if (U === 9)
        x += 4 - (x + e.bsCount[a]) % 4;
      else if (U === 32)
        x++;
      else
        break;
      i++;
    }
    const A = i;
    let T;
    A >= r ? T = 1 : T = x - m, T > 4 && (T = 1);
    const S = m + T;
    s = e.push("list_item_open", "li", 1), s.markup = String.fromCharCode(d);
    const I = [a, 0];
    s.map = I, f && (s.info = e.src.slice(o, p - 1));
    const H = e.tight, ue = e.tShift[a], ae = e.sCount[a], pe = e.listIndent;
    if (e.listIndent = e.blkIndent, e.blkIndent = S, e.tight = !0, e.tShift[a] = A - e.bMarks[a], e.sCount[a] = x, A >= r && e.isEmpty(a + 1) ? e.line = Math.min(e.line + 2, u) : e.md.block.tokenize(e, a, u, !0), (!e.tight || k) && (c = !1), k = e.line - a > 1 && e.isEmpty(e.line - 1), e.blkIndent = e.listIndent, e.listIndent = pe, e.tShift[a] = ue, e.sCount[a] = ae, e.tight = H, s = e.push("list_item_close", "li", -1), s.markup = String.fromCharCode(d), a = e.line, I[1] = a, a >= u || e.sCount[a] < e.blkIndent || e.sCount[a] - e.blkIndent >= 4)
      break;
    let V = !1;
    for (let U = 0, J = v.length; U < J; U++)
      if (v[U](e, a, u, !0)) {
        V = !0;
        break;
      }
    if (V)
      break;
    if (f) {
      if (p = Gi(e, a), p < 0)
        break;
      o = e.bMarks[a] + e.tShift[a];
    } else if (p = ji(e, a), p < 0)
      break;
    if (d !== e.src.charCodeAt(p - 1))
      break;
  }
  return f ? s = e.push("ordered_list_close", "ol", -1) : s = e.push("bullet_list_close", "ul", -1), s.markup = String.fromCharCode(d), _[1] = a, e.line = a, e.parentType = y, c && bd(e, g), !0;
}
function _d(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t], o = t + 1;
  if (e.sCount[t] - e.blkIndent >= 4 || e.src.charCodeAt(r) !== 91)
    return !1;
  function s(v) {
    const y = e.lineMax;
    if (v >= y || e.isEmpty(v))
      return null;
    let m = !1;
    if (e.sCount[v] - e.blkIndent > 3 && (m = !0), e.sCount[v] < 0 && (m = !0), !m) {
      const T = e.md.block.ruler.getRules("reference"), S = e.parentType;
      e.parentType = "reference";
      let I = !1;
      for (let H = 0, ue = T.length; H < ue; H++)
        if (T[H](e, v, y, !0)) {
          I = !0;
          break;
        }
      if (e.parentType = S, I)
        return null;
    }
    const x = e.bMarks[v] + e.tShift[v], A = e.eMarks[v];
    return e.src.slice(x, A + 1);
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
      const y = s(o);
      y !== null && (a += y, i = a.length, o++);
    } else if (v === 92 && (r++, r < i && a.charCodeAt(r) === 10)) {
      const y = s(o);
      y !== null && (a += y, i = a.length, o++);
    }
  }
  if (c < 0 || a.charCodeAt(c + 1) !== 58)
    return !1;
  for (r = c + 2; r < i; r++) {
    const v = a.charCodeAt(r);
    if (v === 10) {
      const y = s(o);
      y !== null && (a += y, i = a.length, o++);
    } else if (!te(v)) break;
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
      const y = s(o);
      y !== null && (a += y, i = a.length, o++);
    } else if (!te(v)) break;
  }
  let g = e.md.helpers.parseLinkTitle(a, r, i);
  for (; g.can_continue; ) {
    const v = s(o);
    if (v === null) break;
    a += v, r = i, i = a.length, o++, g = e.md.helpers.parseLinkTitle(a, r, i, g);
  }
  let _;
  for (r < i && d !== r && g.ok ? (_ = g.str, r = g.pos) : (_ = "", r = h, o = p); r < i; ) {
    const v = a.charCodeAt(r);
    if (!te(v))
      break;
    r++;
  }
  if (r < i && a.charCodeAt(r) !== 10 && _)
    for (_ = "", r = h, o = p; r < i; ) {
      const v = a.charCodeAt(r);
      if (!te(v))
        break;
      r++;
    }
  if (r < i && a.charCodeAt(r) !== 10)
    return !1;
  const k = Cn(a.slice(1, c));
  return k ? (n || (typeof e.env.references == "undefined" && (e.env.references = {}), typeof e.env.references[k] == "undefined" && (e.env.references[k] = { title: _, href: f }), e.line = o), !0) : !1;
}
const md = [
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
], xd = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Ed = "[^\"'=<>`\\x00-\\x20]+", yd = "'[^']*'", vd = '"[^"]*"', kd = "(?:" + Ed + "|" + yd + "|" + vd + ")", wd = "(?:\\s+" + xd + "(?:\\s*=\\s*" + kd + ")?)", _s = "<[A-Za-z][A-Za-z0-9\\-]*" + wd + "*\\s*\\/?>", ms = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Ad = "<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->", Cd = "<[?][\\s\\S]*?[?]>", Sd = "<![A-Za-z][^>]*>", Dd = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Td = new RegExp("^(?:" + _s + "|" + ms + "|" + Ad + "|" + Cd + "|" + Sd + "|" + Dd + ")"), Rd = new RegExp("^(?:" + _s + "|" + ms + ")"), Wt = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + md.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Rd.source + "\\s*$"), /^$/, !1]
];
function Nd(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(r) !== 60)
    return !1;
  let o = e.src.slice(r, i), s = 0;
  for (; s < Wt.length && !Wt[s][0].test(o); s++)
    ;
  if (s === Wt.length)
    return !1;
  if (n)
    return Wt[s][2];
  let a = t + 1;
  if (!Wt[s][1].test(o)) {
    for (; a < u && !(e.sCount[a] < e.blkIndent); a++)
      if (r = e.bMarks[a] + e.tShift[a], i = e.eMarks[a], o = e.src.slice(r, i), Wt[s][1].test(o)) {
        o.length !== 0 && a++;
        break;
      }
  }
  e.line = a;
  const c = e.push("html_block", "", 0);
  return c.map = [t, a], c.content = e.getLines(t, a, e.blkIndent, !0), !0;
}
function Od(e, t, u, n) {
  let r = e.bMarks[t] + e.tShift[t], i = e.eMarks[t];
  if (e.sCount[t] - e.blkIndent >= 4)
    return !1;
  let o = e.src.charCodeAt(r);
  if (o !== 35 || r >= i)
    return !1;
  let s = 1;
  for (o = e.src.charCodeAt(++r); o === 35 && r < i && s <= 6; )
    s++, o = e.src.charCodeAt(++r);
  if (s > 6 || r < i && !te(o))
    return !1;
  if (n)
    return !0;
  i = e.skipSpacesBack(i, r);
  const a = e.skipCharsBack(i, 35, r);
  a > r && te(e.src.charCodeAt(a - 1)) && (i = a), e.line = t + 1;
  const c = e.push("heading_open", "h" + String(s), 1);
  c.markup = "########".slice(0, s), c.map = [t, e.line];
  const l = e.push("inline", "", 0);
  l.content = e.src.slice(r, i).trim(), l.map = [t, e.line], l.children = [];
  const f = e.push("heading_close", "h" + String(s), -1);
  return f.markup = "########".slice(0, s), !0;
}
function Fd(e, t, u) {
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
function Id(e, t, u) {
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
const Hu = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", ld, ["paragraph", "reference"]],
  ["code", fd],
  ["fence", dd, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", hd, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", pd, ["paragraph", "reference", "blockquote", "list"]],
  ["list", gd, ["paragraph", "reference", "blockquote"]],
  ["reference", _d],
  ["html_block", Nd, ["paragraph", "reference", "blockquote"]],
  ["heading", Od, ["paragraph", "reference", "blockquote"]],
  ["lheading", Fd],
  ["paragraph", Id]
];
function Sn() {
  this.ruler = new Ce();
  for (let e = 0; e < Hu.length; e++)
    this.ruler.push(Hu[e][0], Hu[e][1], { alt: (Hu[e][2] || []).slice() });
}
Sn.prototype.tokenize = function(e, t, u) {
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
Sn.prototype.parse = function(e, t, u, n) {
  if (!e)
    return;
  const r = new this.State(e, t, u, n);
  this.tokenize(r, r.line, r.lineMax);
};
Sn.prototype.State = ct;
function Ou(e, t, u, n) {
  this.src = e, this.env = u, this.md = t, this.tokens = n, this.tokens_meta = Array(n.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = !1, this.linkLevel = 0;
}
Ou.prototype.pushPending = function() {
  const e = new Je("text", "", 0);
  return e.content = this.pending, e.level = this.pendingLevel, this.tokens.push(e), this.pending = "", e;
};
Ou.prototype.push = function(e, t, u) {
  this.pending && this.pushPending();
  const n = new Je(e, t, u);
  let r = null;
  return u < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), n.level = this.level, u > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], r = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(n), this.tokens_meta.push(r), n;
};
Ou.prototype.scanDelims = function(e, t) {
  const u = this.posMax, n = this.src.charCodeAt(e), r = e > 0 ? this.src.charCodeAt(e - 1) : 32;
  let i = e;
  for (; i < u && this.src.charCodeAt(i) === n; )
    i++;
  const o = i - e, s = i < u ? this.src.charCodeAt(i) : 32, a = xu(r) || mu(String.fromCharCode(r)), c = xu(s) || mu(String.fromCharCode(s)), l = _u(r), f = _u(s), h = !f && (!c || l || a), p = !l && (!a || f || c);
  return { can_open: h && (t || !p || a), can_close: p && (t || !h || c), length: o };
};
Ou.prototype.Token = Je;
function Md(e) {
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
function Ld(e, t) {
  let u = e.pos;
  for (; u < e.posMax && !Md(e.src.charCodeAt(u)); )
    u++;
  return u === e.pos ? !1 : (t || (e.pending += e.src.slice(e.pos, u)), e.pos = u, !0);
}
const Bd = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;
function Pd(e, t) {
  if (!e.md.options.linkify || e.linkLevel > 0) return !1;
  const u = e.pos, n = e.posMax;
  if (u + 3 > n || e.src.charCodeAt(u) !== 58 || e.src.charCodeAt(u + 1) !== 47 || e.src.charCodeAt(u + 2) !== 47) return !1;
  const r = e.pending.match(Bd);
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
function zd(e, t) {
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
  for (u++; u < r && te(e.src.charCodeAt(u)); )
    u++;
  return e.pos = u, !0;
}
const $r = [];
for (let e = 0; e < 256; e++)
  $r.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e) {
  $r[e.charCodeAt(0)] = 1;
});
function Ud(e, t) {
  let u = e.pos;
  const n = e.posMax;
  if (e.src.charCodeAt(u) !== 92 || (u++, u >= n)) return !1;
  let r = e.src.charCodeAt(u);
  if (r === 10) {
    for (t || e.push("hardbreak", "br", 0), u++; u < n && (r = e.src.charCodeAt(u), !!te(r)); )
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
    r < 256 && $r[r] !== 0 ? s.content = i : s.content = o, s.markup = o, s.info = "escape";
  }
  return e.pos = u + 1, !0;
}
function $d(e, t) {
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
function qd(e, t) {
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
function Zi(e, t) {
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
function Hd(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Zi(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Zi(e, t[n].delimiters);
}
const xs = {
  tokenize: qd,
  postProcess: Hd
};
function jd(e, t) {
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
function Wi(e, t) {
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
function Gd(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Wi(e, e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Wi(e, t[n].delimiters);
}
const Es = {
  tokenize: jd,
  postProcess: Gd
};
function Zd(e, t) {
  let u, n, r, i, o = "", s = "", a = e.pos, c = !0;
  if (e.src.charCodeAt(e.pos) !== 91)
    return !1;
  const l = e.pos, f = e.posMax, h = e.pos + 1, p = e.md.helpers.parseLinkLabel(e, e.pos, !0);
  if (p < 0)
    return !1;
  let d = p + 1;
  if (d < f && e.src.charCodeAt(d) === 40) {
    for (c = !1, d++; d < f && (u = e.src.charCodeAt(d), !(!te(u) && u !== 10)); d++)
      ;
    if (d >= f)
      return !1;
    if (a = d, r = e.md.helpers.parseLinkDestination(e.src, d, e.posMax), r.ok) {
      for (o = e.md.normalizeLink(r.str), e.md.validateLink(o) ? d = r.pos : o = "", a = d; d < f && (u = e.src.charCodeAt(d), !(!te(u) && u !== 10)); d++)
        ;
      if (r = e.md.helpers.parseLinkTitle(e.src, d, e.posMax), d < f && a !== d && r.ok)
        for (s = r.str, d = r.pos; d < f && (u = e.src.charCodeAt(d), !(!te(u) && u !== 10)); d++)
          ;
    }
    (d >= f || e.src.charCodeAt(d) !== 41) && (c = !0), d++;
  }
  if (c) {
    if (typeof e.env.references == "undefined")
      return !1;
    if (d < f && e.src.charCodeAt(d) === 91 ? (a = d + 1, d = e.md.helpers.parseLinkLabel(e, d), d >= 0 ? n = e.src.slice(a, d++) : d = p + 1) : d = p + 1, n || (n = e.src.slice(h, p)), i = e.env.references[Cn(n)], !i)
      return e.pos = l, !1;
    o = i.href, s = i.title;
  }
  if (!t) {
    e.pos = h, e.posMax = p;
    const g = e.push("link_open", "a", 1), _ = [["href", o]];
    g.attrs = _, s && _.push(["title", s]), e.linkLevel++, e.md.inline.tokenize(e), e.linkLevel--, e.push("link_close", "a", -1);
  }
  return e.pos = d, e.posMax = f, !0;
}
function Wd(e, t) {
  let u, n, r, i, o, s, a, c, l = "";
  const f = e.pos, h = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91)
    return !1;
  const p = e.pos + 2, d = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1);
  if (d < 0)
    return !1;
  if (i = d + 1, i < h && e.src.charCodeAt(i) === 40) {
    for (i++; i < h && (u = e.src.charCodeAt(i), !(!te(u) && u !== 10)); i++)
      ;
    if (i >= h)
      return !1;
    for (c = i, s = e.md.helpers.parseLinkDestination(e.src, i, e.posMax), s.ok && (l = e.md.normalizeLink(s.str), e.md.validateLink(l) ? i = s.pos : l = ""), c = i; i < h && (u = e.src.charCodeAt(i), !(!te(u) && u !== 10)); i++)
      ;
    if (s = e.md.helpers.parseLinkTitle(e.src, i, e.posMax), i < h && c !== i && s.ok)
      for (a = s.str, i = s.pos; i < h && (u = e.src.charCodeAt(i), !(!te(u) && u !== 10)); i++)
        ;
    else
      a = "";
    if (i >= h || e.src.charCodeAt(i) !== 41)
      return e.pos = f, !1;
    i++;
  } else {
    if (typeof e.env.references == "undefined")
      return !1;
    if (i < h && e.src.charCodeAt(i) === 91 ? (c = i + 1, i = e.md.helpers.parseLinkLabel(e, i), i >= 0 ? r = e.src.slice(c, i++) : i = d + 1) : i = d + 1, r || (r = e.src.slice(p, d)), o = e.env.references[Cn(r)], !o)
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
    const _ = e.push("image", "img", 0), k = [["src", l], ["alt", ""]];
    _.attrs = k, _.children = g, _.content = n, a && k.push(["title", a]);
  }
  return e.pos = i, e.posMax = h, !0;
}
const Kd = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, Vd = /^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;
function Jd(e, t) {
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
  if (Vd.test(i)) {
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
  if (Kd.test(i)) {
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
function Xd(e) {
  return /^<a[>\s]/i.test(e);
}
function Yd(e) {
  return /^<\/a\s*>/i.test(e);
}
function Qd(e) {
  const t = e | 32;
  return t >= 97 && t <= 122;
}
function e1(e, t) {
  if (!e.md.options.html)
    return !1;
  const u = e.posMax, n = e.pos;
  if (e.src.charCodeAt(n) !== 60 || n + 2 >= u)
    return !1;
  const r = e.src.charCodeAt(n + 1);
  if (r !== 33 && r !== 63 && r !== 47 && !Qd(r))
    return !1;
  const i = e.src.slice(n).match(Td);
  if (!i)
    return !1;
  if (!t) {
    const o = e.push("html_inline", "", 0);
    o.content = i[0], Xd(o.content) && e.linkLevel++, Yd(o.content) && e.linkLevel--;
  }
  return e.pos += i[0].length, !0;
}
const t1 = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, u1 = /^&([a-z][a-z0-9]{1,31});/i;
function n1(e, t) {
  const u = e.pos, n = e.posMax;
  if (e.src.charCodeAt(u) !== 38 || u + 1 >= n) return !1;
  if (e.src.charCodeAt(u + 1) === 35) {
    const i = e.src.slice(u).match(t1);
    if (i) {
      if (!t) {
        const o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), s = e.push("text_special", "", 0);
        s.content = zr(o) ? sn(o) : sn(65533), s.markup = i[0], s.info = "entity";
      }
      return e.pos += i[0].length, !0;
    }
  } else {
    const i = e.src.slice(u).match(u1);
    if (i) {
      const o = ds(i[0]);
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
function Ki(e) {
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
function r1(e) {
  const t = e.tokens_meta, u = e.tokens_meta.length;
  Ki(e.delimiters);
  for (let n = 0; n < u; n++)
    t[n] && t[n].delimiters && Ki(t[n].delimiters);
}
function i1(e) {
  let t, u, n = 0;
  const r = e.tokens, i = e.tokens.length;
  for (t = u = 0; t < i; t++)
    r[t].nesting < 0 && n--, r[t].level = n, r[t].nesting > 0 && n++, r[t].type === "text" && t + 1 < i && r[t + 1].type === "text" ? r[t + 1].content = r[t].content + r[t + 1].content : (t !== u && (r[u] = r[t]), u++);
  t !== u && (r.length = u);
}
const Wn = [
  ["text", Ld],
  ["linkify", Pd],
  ["newline", zd],
  ["escape", Ud],
  ["backticks", $d],
  ["strikethrough", xs.tokenize],
  ["emphasis", Es.tokenize],
  ["link", Zd],
  ["image", Wd],
  ["autolink", Jd],
  ["html_inline", e1],
  ["entity", n1]
], Kn = [
  ["balance_pairs", r1],
  ["strikethrough", xs.postProcess],
  ["emphasis", Es.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", i1]
];
function Fu() {
  this.ruler = new Ce();
  for (let e = 0; e < Wn.length; e++)
    this.ruler.push(Wn[e][0], Wn[e][1]);
  this.ruler2 = new Ce();
  for (let e = 0; e < Kn.length; e++)
    this.ruler2.push(Kn[e][0], Kn[e][1]);
}
Fu.prototype.skipToken = function(e) {
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
Fu.prototype.tokenize = function(e) {
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
Fu.prototype.parse = function(e, t, u, n) {
  const r = new this.State(e, t, u, n);
  this.tokenize(r);
  const i = this.ruler2.getRules(""), o = i.length;
  for (let s = 0; s < o; s++)
    i[s](r);
};
Fu.prototype.State = Ou;
function o1(e) {
  const t = {};
  e = e || {}, t.src_Any = ss.source, t.src_Cc = as.source, t.src_Z = ls.source, t.src_P = Br.source, t.src_ZPCc = [t.src_Z, t.src_P, t.src_Cc].join("|"), t.src_ZCc = [t.src_Z, t.src_Cc].join("|");
  const u = "[><｜]";
  return t.src_pseudo_letter = "(?:(?!" + u + "|" + t.src_ZPCc + ")" + t.src_Any + ")", t.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", t.src_auth = "(?:(?:(?!" + t.src_ZCc + "|[@/\\[\\]()]).)+@)?", t.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", t.src_host_terminator = "(?=$|" + u + "|" + t.src_ZPCc + ")(?!" + (e["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + t.src_ZPCc + "))", t.src_path = "(?:[/?#](?:(?!" + t.src_ZCc + "|" + u + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + t.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + t.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + t.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + t.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + t.src_ZCc + "|[']).)+\\'|\\'(?=" + t.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + t.src_ZCc + "|[.]|$)|" + (e["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + // allow `,,,` in paths
  ",(?!" + t.src_ZCc + "|$)|;(?!" + t.src_ZCc + "|$)|\\!+(?!" + t.src_ZCc + "|[!]|$)|\\?(?!" + t.src_ZCc + "|[?]|$))+|\\/)?", t.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', t.src_xn = "xn--[a-z0-9\\-]{1,59}", t.src_domain_root = // Allow letters & digits (http://test1)
  "(?:" + t.src_xn + "|" + t.src_pseudo_letter + "{1,63})", t.src_domain = "(?:" + t.src_xn + "|(?:" + t.src_pseudo_letter + ")|(?:" + t.src_pseudo_letter + "(?:-|" + t.src_pseudo_letter + "){0,61}" + t.src_pseudo_letter + "))", t.src_host = "(?:(?:(?:(?:" + t.src_domain + ")\\.)*" + t.src_domain + "))", t.tpl_host_fuzzy = "(?:" + t.src_ip4 + "|(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%)))", t.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + t.src_domain + ")\\.)+(?:%TLDS%))", t.src_host_strict = t.src_host + t.src_host_terminator, t.tpl_host_fuzzy_strict = t.tpl_host_fuzzy + t.src_host_terminator, t.src_host_port_strict = t.src_host + t.src_port + t.src_host_terminator, t.tpl_host_port_fuzzy_strict = t.tpl_host_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_port_no_ip_fuzzy_strict = t.tpl_host_no_ip_fuzzy + t.src_port + t.src_host_terminator, t.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + t.src_ZPCc + "|>|$))", t.tpl_email_fuzzy = "(^|" + u + '|"|\\(|' + t.src_ZCc + ")(" + t.src_email_name + "@" + t.tpl_host_fuzzy_strict + ")", t.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_fuzzy_strict + t.src_path + ")", t.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
  // but can start with > (markdown blockquote)
  "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + t.src_ZPCc + "))((?![$+<=>^`|｜])" + t.tpl_host_port_no_ip_fuzzy_strict + t.src_path + ")", t;
}
function lr(e) {
  return Array.prototype.slice.call(arguments, 1).forEach(function(u) {
    u && Object.keys(u).forEach(function(n) {
      e[n] = u[n];
    });
  }), e;
}
function Dn(e) {
  return Object.prototype.toString.call(e);
}
function s1(e) {
  return Dn(e) === "[object String]";
}
function a1(e) {
  return Dn(e) === "[object Object]";
}
function c1(e) {
  return Dn(e) === "[object RegExp]";
}
function Vi(e) {
  return Dn(e) === "[object Function]";
}
function l1(e) {
  return e.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
const ys = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function f1(e) {
  return Object.keys(e || {}).reduce(function(t, u) {
    return t || ys.hasOwnProperty(u);
  }, !1);
}
const d1 = {
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
}, h1 = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", p1 = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function b1(e) {
  e.__index__ = -1, e.__text_cache__ = "";
}
function g1(e) {
  return function(t, u) {
    const n = t.slice(u);
    return e.test(n) ? n.match(e)[0].length : 0;
  };
}
function Ji() {
  return function(e, t) {
    t.normalize(e);
  };
}
function an(e) {
  const t = e.re = o1(e.__opts__), u = e.__tlds__.slice();
  e.onCompile(), e.__tlds_replaced__ || u.push(h1), u.push(t.src_xn), t.src_tlds = u.join("|");
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
    if (e.__compiled__[s] = c, a1(a)) {
      c1(a.validate) ? c.validate = g1(a.validate) : Vi(a.validate) ? c.validate = a.validate : i(s, a), Vi(a.normalize) ? c.normalize = a.normalize : a.normalize ? i(s, a) : c.normalize = Ji();
      return;
    }
    if (s1(a)) {
      r.push(s);
      return;
    }
    i(s, a);
  }), r.forEach(function(s) {
    e.__compiled__[e.__schemas__[s]] && (e.__compiled__[s].validate = e.__compiled__[e.__schemas__[s]].validate, e.__compiled__[s].normalize = e.__compiled__[e.__schemas__[s]].normalize);
  }), e.__compiled__[""] = { validate: null, normalize: Ji() };
  const o = Object.keys(e.__compiled__).filter(function(s) {
    return s.length > 0 && e.__compiled__[s];
  }).map(l1).join("|");
  e.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "i"), e.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + t.src_ZPCc + "))(" + o + ")", "ig"), e.re.schema_at_start = RegExp("^" + e.re.schema_search.source, "i"), e.re.pretest = RegExp(
    "(" + e.re.schema_test.source + ")|(" + e.re.host_fuzzy_test.source + ")|@",
    "i"
  ), b1(e);
}
function _1(e, t) {
  const u = e.__index__, n = e.__last_index__, r = e.__text_cache__.slice(u, n);
  this.schema = e.__schema__.toLowerCase(), this.index = u + t, this.lastIndex = n + t, this.raw = r, this.text = r, this.url = r;
}
function fr(e, t) {
  const u = new _1(e, t);
  return e.__compiled__[u.schema].normalize(u, e), u;
}
function Fe(e, t) {
  if (!(this instanceof Fe))
    return new Fe(e, t);
  t || f1(e) && (t = e, e = {}), this.__opts__ = lr({}, ys, t), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = lr({}, d1, e), this.__compiled__ = {}, this.__tlds__ = p1, this.__tlds_replaced__ = !1, this.re = {}, an(this);
}
Fe.prototype.add = function(t, u) {
  return this.__schemas__[t] = u, an(this), this;
};
Fe.prototype.set = function(t) {
  return this.__opts__ = lr(this.__opts__, t), this;
};
Fe.prototype.test = function(t) {
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
Fe.prototype.pretest = function(t) {
  return this.re.pretest.test(t);
};
Fe.prototype.testSchemaAt = function(t, u, n) {
  return this.__compiled__[u.toLowerCase()] ? this.__compiled__[u.toLowerCase()].validate(t, n, this) : 0;
};
Fe.prototype.match = function(t) {
  const u = [];
  let n = 0;
  this.__index__ >= 0 && this.__text_cache__ === t && (u.push(fr(this, n)), n = this.__last_index__);
  let r = n ? t.slice(n) : t;
  for (; this.test(r); )
    u.push(fr(this, n)), r = r.slice(this.__last_index__), n += this.__last_index__;
  return u.length ? u : null;
};
Fe.prototype.matchAtStart = function(t) {
  if (this.__text_cache__ = t, this.__index__ = -1, !t.length) return null;
  const u = this.re.schema_at_start.exec(t);
  if (!u) return null;
  const n = this.testSchemaAt(t, u[2], u[0].length);
  return n ? (this.__schema__ = u[2], this.__index__ = u.index + u[1].length, this.__last_index__ = u.index + u[0].length + n, fr(this, 0)) : null;
};
Fe.prototype.tlds = function(t, u) {
  return t = Array.isArray(t) ? t : [t], u ? (this.__tlds__ = this.__tlds__.concat(t).sort().filter(function(n, r, i) {
    return n !== i[r - 1];
  }).reverse(), an(this), this) : (this.__tlds__ = t.slice(), this.__tlds_replaced__ = !0, an(this), this);
};
Fe.prototype.normalize = function(t) {
  t.schema || (t.url = "http://" + t.url), t.schema === "mailto:" && !/^mailto:/i.test(t.url) && (t.url = "mailto:" + t.url);
};
Fe.prototype.onCompile = function() {
};
const Jt = 2147483647, tt = 36, qr = 1, Eu = 26, m1 = 38, x1 = 700, vs = 72, ks = 128, ws = "-", E1 = /^xn--/, y1 = /[^\0-\x7F]/, v1 = /[\x2E\u3002\uFF0E\uFF61]/g, k1 = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, Vn = tt - qr, ut = Math.floor, Jn = String.fromCharCode;
function xt(e) {
  throw new RangeError(k1[e]);
}
function w1(e, t) {
  const u = [];
  let n = e.length;
  for (; n--; )
    u[n] = t(e[n]);
  return u;
}
function As(e, t) {
  const u = e.split("@");
  let n = "";
  u.length > 1 && (n = u[0] + "@", e = u[1]), e = e.replace(v1, ".");
  const r = e.split("."), i = w1(r, t).join(".");
  return n + i;
}
function Cs(e) {
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
const A1 = (e) => String.fromCodePoint(...e), C1 = function(e) {
  return e >= 48 && e < 58 ? 26 + (e - 48) : e >= 65 && e < 91 ? e - 65 : e >= 97 && e < 123 ? e - 97 : tt;
}, Xi = function(e, t) {
  return e + 22 + 75 * (e < 26) - ((t != 0) << 5);
}, Ss = function(e, t, u) {
  let n = 0;
  for (e = u ? ut(e / x1) : e >> 1, e += ut(e / t); e > Vn * Eu >> 1; n += tt)
    e = ut(e / Vn);
  return ut(n + (Vn + 1) * e / (e + m1));
}, Ds = function(e) {
  const t = [], u = e.length;
  let n = 0, r = ks, i = vs, o = e.lastIndexOf(ws);
  o < 0 && (o = 0);
  for (let s = 0; s < o; ++s)
    e.charCodeAt(s) >= 128 && xt("not-basic"), t.push(e.charCodeAt(s));
  for (let s = o > 0 ? o + 1 : 0; s < u; ) {
    const a = n;
    for (let l = 1, f = tt; ; f += tt) {
      s >= u && xt("invalid-input");
      const h = C1(e.charCodeAt(s++));
      h >= tt && xt("invalid-input"), h > ut((Jt - n) / l) && xt("overflow"), n += h * l;
      const p = f <= i ? qr : f >= i + Eu ? Eu : f - i;
      if (h < p)
        break;
      const d = tt - p;
      l > ut(Jt / d) && xt("overflow"), l *= d;
    }
    const c = t.length + 1;
    i = Ss(n - a, c, a == 0), ut(n / c) > Jt - r && xt("overflow"), r += ut(n / c), n %= c, t.splice(n++, 0, r);
  }
  return String.fromCodePoint(...t);
}, Ts = function(e) {
  const t = [];
  e = Cs(e);
  const u = e.length;
  let n = ks, r = 0, i = vs;
  for (const a of e)
    a < 128 && t.push(Jn(a));
  const o = t.length;
  let s = o;
  for (o && t.push(ws); s < u; ) {
    let a = Jt;
    for (const l of e)
      l >= n && l < a && (a = l);
    const c = s + 1;
    a - n > ut((Jt - r) / c) && xt("overflow"), r += (a - n) * c, n = a;
    for (const l of e)
      if (l < n && ++r > Jt && xt("overflow"), l === n) {
        let f = r;
        for (let h = tt; ; h += tt) {
          const p = h <= i ? qr : h >= i + Eu ? Eu : h - i;
          if (f < p)
            break;
          const d = f - p, g = tt - p;
          t.push(
            Jn(Xi(p + d % g, 0))
          ), f = ut(d / g);
        }
        t.push(Jn(Xi(f, 0))), i = Ss(r, c, s === o), r = 0, ++s;
      }
    ++r, ++n;
  }
  return t.join("");
}, S1 = function(e) {
  return As(e, function(t) {
    return E1.test(t) ? Ds(t.slice(4).toLowerCase()) : t;
  });
}, D1 = function(e) {
  return As(e, function(t) {
    return y1.test(t) ? "xn--" + Ts(t) : t;
  });
}, Rs = {
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
    decode: Cs,
    encode: A1
  },
  decode: Ds,
  encode: Ts,
  toASCII: D1,
  toUnicode: S1
}, T1 = {
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
}, R1 = {
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
}, N1 = {
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
}, O1 = {
  default: T1,
  zero: R1,
  commonmark: N1
}, F1 = /^(vbscript|javascript|file|data):/, I1 = /^data:image\/(gif|png|jpeg|webp);/;
function M1(e) {
  const t = e.trim().toLowerCase();
  return F1.test(t) ? I1.test(t) : !0;
}
const Ns = ["http:", "https:", "mailto:"];
function L1(e) {
  const t = Lr(e, !0);
  if (t.hostname && (!t.protocol || Ns.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Rs.toASCII(t.hostname);
    } catch (u) {
    }
  return Nu(Mr(t));
}
function B1(e) {
  const t = Lr(e, !0);
  if (t.hostname && (!t.protocol || Ns.indexOf(t.protocol) >= 0))
    try {
      t.hostname = Rs.toUnicode(t.hostname);
    } catch (u) {
    }
  return Qt(Mr(t), Qt.defaultChars + "%");
}
function Pe(e, t) {
  if (!(this instanceof Pe))
    return new Pe(e, t);
  t || Pr(e) || (t = e || {}, e = "default"), this.inline = new Fu(), this.block = new Sn(), this.core = new Ur(), this.renderer = new su(), this.linkify = new Fe(), this.validateLink = M1, this.normalizeLink = L1, this.normalizeLinkText = B1, this.utils = zf, this.helpers = An({}, Hf), this.options = {}, this.configure(e), t && this.set(t);
}
Pe.prototype.set = function(e) {
  return An(this.options, e), this;
};
Pe.prototype.configure = function(e) {
  const t = this;
  if (Pr(e)) {
    const u = e;
    if (e = O1[u], !e)
      throw new Error('Wrong `markdown-it` preset "' + u + '", check name');
  }
  if (!e)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return e.options && t.set(e.options), e.components && Object.keys(e.components).forEach(function(u) {
    e.components[u].rules && t[u].ruler.enableOnly(e.components[u].rules), e.components[u].rules2 && t[u].ruler2.enableOnly(e.components[u].rules2);
  }), this;
};
Pe.prototype.enable = function(e, t) {
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
Pe.prototype.disable = function(e, t) {
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
Pe.prototype.use = function(e) {
  const t = [this].concat(Array.prototype.slice.call(arguments, 1));
  return e.apply(e, t), this;
};
Pe.prototype.parse = function(e, t) {
  if (typeof e != "string")
    throw new Error("Input data should be a String");
  const u = new this.core.State(e, this, t);
  return this.core.process(u), u.tokens;
};
Pe.prototype.render = function(e, t) {
  return t = t || {}, this.renderer.render(this.parse(e, t), this.options, t);
};
Pe.prototype.parseInline = function(e, t) {
  const u = new this.core.State(e, this, t);
  return u.inlineMode = !0, this.core.process(u), u.tokens;
};
Pe.prototype.renderInline = function(e, t) {
  return t = t || {}, this.renderer.render(this.parseInline(e, t), this.options, t);
};
function P1(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xn, Yi;
function z1() {
  if (Yi) return Xn;
  Yi = 1;
  function e(b) {
    return b instanceof Map ? b.clear = b.delete = b.set = function() {
      throw new Error("map is read-only");
    } : b instanceof Set && (b.add = b.clear = b.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(b), Object.getOwnPropertyNames(b).forEach((w) => {
      const D = b[w], B = typeof D;
      (B === "object" || B === "function") && !Object.isFrozen(D) && e(D);
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
    const D = /* @__PURE__ */ Object.create(null);
    for (const B in b)
      D[B] = b[B];
    return w.forEach(function(B) {
      for (const re in B)
        D[re] = B[re];
    }), /** @type {T} */
    D;
  }
  const r = "</span>", i = (b) => !!b.scope, o = (b, { prefix: w }) => {
    if (b.startsWith("language:"))
      return b.replace("language:", "language-");
    if (b.includes(".")) {
      const D = b.split(".");
      return [
        `${w}${D.shift()}`,
        ...D.map((B, re) => `${B}${"_".repeat(re + 1)}`)
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
    constructor(w, D) {
      this.buffer = "", this.classPrefix = D.classPrefix, w.walk(this);
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
      const D = o(
        w.scope,
        { prefix: this.classPrefix }
      );
      this.span(D);
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
      const D = a({ scope: w });
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
    walk(w) {
      return this.constructor._walk(w, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(w, D) {
      return typeof D == "string" ? w.addText(D) : D.children && (w.openNode(D), D.children.forEach((B) => this._walk(w, B)), w.closeNode(D)), w;
    }
    /**
     * @param {Node} node
     */
    static _collapse(w) {
      typeof w != "string" && w.children && (w.children.every((D) => typeof D == "string") ? w.children = [w.children.join("")] : w.children.forEach((D) => {
        c._collapse(D);
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
    __addSublanguage(w, D) {
      const B = w.root;
      D && (B.scope = `language:${D}`), this.add(B);
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
    return b.map((D) => f(D)).join("");
  }
  function _(b) {
    const w = b[b.length - 1];
    return typeof w == "object" && w.constructor === Object ? (b.splice(b.length - 1, 1), w) : {};
  }
  function k(...b) {
    return "(" + (_(b).capture ? "" : "?:") + b.map((B) => f(B)).join("|") + ")";
  }
  function v(b) {
    return new RegExp(b.toString() + "|").exec("").length - 1;
  }
  function y(b, w) {
    const D = b && b.exec(w);
    return D && D.index === 0;
  }
  const m = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function x(b, { joinWith: w }) {
    let D = 0;
    return b.map((B) => {
      D += 1;
      const re = D;
      let ie = f(B), O = "";
      for (; ie.length > 0; ) {
        const N = m.exec(ie);
        if (!N) {
          O += ie;
          break;
        }
        O += ie.substring(0, N.index), ie = ie.substring(N.index + N[0].length), N[0][0] === "\\" && N[1] ? O += "\\" + String(Number(N[1]) + re) : (O += N[0], N[0] === "(" && D++);
      }
      return O;
    }).map((B) => `(${B})`).join(w);
  }
  const A = /\b\B/, T = "[a-zA-Z]\\w*", S = "[a-zA-Z_]\\w*", I = "\\b\\d+(\\.\\d+)?", H = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", ue = "\\b(0b[01]+)", ae = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", pe = (b = {}) => {
    const w = /^#![ ]*\//;
    return b.binary && (b.begin = g(
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
      "on:begin": (D, B) => {
        D.index !== 0 && B.ignoreMatch();
      }
    }, b);
  }, V = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, U = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [V]
  }, J = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [V]
  }, Se = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, G = function(b, w, D = {}) {
    const B = n(
      {
        scope: "comment",
        begin: b,
        end: w,
        contains: []
      },
      D
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
    const re = k(
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
          re,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), B;
  }, xe = G("//", "$"), De = G("/\\*", "\\*/"), Ue = G("#", "$"), ft = {
    scope: "number",
    begin: I,
    relevance: 0
  }, Ot = {
    scope: "number",
    begin: H,
    relevance: 0
  }, Js = {
    scope: "number",
    begin: ue,
    relevance: 0
  }, Xs = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      V,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [V]
      }
    ]
  }, Ys = {
    scope: "title",
    begin: T,
    relevance: 0
  }, Qs = {
    scope: "title",
    begin: S,
    relevance: 0
  }, ea = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + S,
    relevance: 0
  };
  var Iu = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: U,
    BACKSLASH_ESCAPE: V,
    BINARY_NUMBER_MODE: Js,
    BINARY_NUMBER_RE: ue,
    COMMENT: G,
    C_BLOCK_COMMENT_MODE: De,
    C_LINE_COMMENT_MODE: xe,
    C_NUMBER_MODE: Ot,
    C_NUMBER_RE: H,
    END_SAME_AS_BEGIN: function(b) {
      return Object.assign(
        b,
        {
          /** @type {ModeCallback} */
          "on:begin": (w, D) => {
            D.data._beginMatch = w[1];
          },
          /** @type {ModeCallback} */
          "on:end": (w, D) => {
            D.data._beginMatch !== w[1] && D.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: Ue,
    IDENT_RE: T,
    MATCH_NOTHING_RE: A,
    METHOD_GUARD: ea,
    NUMBER_MODE: ft,
    NUMBER_RE: I,
    PHRASAL_WORDS_MODE: Se,
    QUOTE_STRING_MODE: J,
    REGEXP_MODE: Xs,
    RE_STARTERS_RE: ae,
    SHEBANG: pe,
    TITLE_MODE: Ys,
    UNDERSCORE_IDENT_RE: S,
    UNDERSCORE_TITLE_MODE: Qs
  });
  function ta(b, w) {
    b.input[b.index - 1] === "." && w.ignoreMatch();
  }
  function ua(b, w) {
    b.className !== void 0 && (b.scope = b.className, delete b.className);
  }
  function na(b, w) {
    w && b.beginKeywords && (b.begin = "\\b(" + b.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", b.__beforeBegin = ta, b.keywords = b.keywords || b.beginKeywords, delete b.beginKeywords, b.relevance === void 0 && (b.relevance = 0));
  }
  function ra(b, w) {
    Array.isArray(b.illegal) && (b.illegal = k(...b.illegal));
  }
  function ia(b, w) {
    if (b.match) {
      if (b.begin || b.end) throw new Error("begin & end are not supported with match");
      b.begin = b.match, delete b.match;
    }
  }
  function oa(b, w) {
    b.relevance === void 0 && (b.relevance = 1);
  }
  const sa = (b, w) => {
    if (!b.beforeMatch) return;
    if (b.starts) throw new Error("beforeMatch cannot be used with starts");
    const D = Object.assign({}, b);
    Object.keys(b).forEach((B) => {
      delete b[B];
    }), b.keywords = D.keywords, b.begin = g(D.beforeMatch, h(D.begin)), b.starts = {
      relevance: 0,
      contains: [
        Object.assign(D, { endsParent: !0 })
      ]
    }, b.relevance = 0, delete D.beforeMatch;
  }, aa = [
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
  ], ca = "keyword";
  function jr(b, w, D = ca) {
    const B = /* @__PURE__ */ Object.create(null);
    return typeof b == "string" ? re(D, b.split(" ")) : Array.isArray(b) ? re(D, b) : Object.keys(b).forEach(function(ie) {
      Object.assign(
        B,
        jr(b[ie], w, ie)
      );
    }), B;
    function re(ie, O) {
      w && (O = O.map((N) => N.toLowerCase())), O.forEach(function(N) {
        const L = N.split("|");
        B[L[0]] = [ie, la(L[0], L[1])];
      });
    }
  }
  function la(b, w) {
    return w ? Number(w) : fa(b) ? 0 : 1;
  }
  function fa(b) {
    return aa.includes(b.toLowerCase());
  }
  const Gr = {}, Ft = (b) => {
    console.error(b);
  }, Zr = (b, ...w) => {
    console.log(`WARN: ${b}`, ...w);
  }, $t = (b, w) => {
    Gr[`${b}/${w}`] || (console.log(`Deprecated as of ${b}. ${w}`), Gr[`${b}/${w}`] = !0);
  }, Mu = new Error();
  function Wr(b, w, { key: D }) {
    let B = 0;
    const re = b[D], ie = {}, O = {};
    for (let N = 1; N <= w.length; N++)
      O[N + B] = re[N], ie[N + B] = !0, B += v(w[N - 1]);
    b[D] = O, b[D]._emit = ie, b[D]._multi = !0;
  }
  function da(b) {
    if (Array.isArray(b.begin)) {
      if (b.skip || b.excludeBegin || b.returnBegin)
        throw Ft("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), Mu;
      if (typeof b.beginScope != "object" || b.beginScope === null)
        throw Ft("beginScope must be object"), Mu;
      Wr(b, b.begin, { key: "beginScope" }), b.begin = x(b.begin, { joinWith: "" });
    }
  }
  function ha(b) {
    if (Array.isArray(b.end)) {
      if (b.skip || b.excludeEnd || b.returnEnd)
        throw Ft("skip, excludeEnd, returnEnd not compatible with endScope: {}"), Mu;
      if (typeof b.endScope != "object" || b.endScope === null)
        throw Ft("endScope must be object"), Mu;
      Wr(b, b.end, { key: "endScope" }), b.end = x(b.end, { joinWith: "" });
    }
  }
  function pa(b) {
    b.scope && typeof b.scope == "object" && b.scope !== null && (b.beginScope = b.scope, delete b.scope);
  }
  function ba(b) {
    pa(b), typeof b.beginScope == "string" && (b.beginScope = { _wrap: b.beginScope }), typeof b.endScope == "string" && (b.endScope = { _wrap: b.endScope }), da(b), ha(b);
  }
  function ga(b) {
    function w(O, N) {
      return new RegExp(
        f(O),
        "m" + (b.case_insensitive ? "i" : "") + (b.unicodeRegex ? "u" : "") + (N ? "g" : "")
      );
    }
    class D {
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
        this.matcherRe = w(x(N, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(N) {
        this.matcherRe.lastIndex = this.lastIndex;
        const L = this.matcherRe.exec(N);
        if (!L)
          return null;
        const fe = L.findIndex((au, Rn) => Rn > 0 && au !== void 0), ce = this.matchIndexes[fe];
        return L.splice(0, fe), Object.assign(L, ce);
      }
    }
    class B {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(N) {
        if (this.multiRegexes[N]) return this.multiRegexes[N];
        const L = new D();
        return this.rules.slice(N).forEach(([fe, ce]) => L.addRule(fe, ce)), L.compile(), this.multiRegexes[N] = L, L;
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
        let fe = L.exec(N);
        if (this.resumingScanAtSamePosition() && !(fe && fe.index === this.lastIndex)) {
          const ce = this.getMatcher(0);
          ce.lastIndex = this.lastIndex + 1, fe = ce.exec(N);
        }
        return fe && (this.regexIndex += fe.position + 1, this.regexIndex === this.count && this.considerAll()), fe;
      }
    }
    function re(O) {
      const N = new B();
      return O.contains.forEach((L) => N.addRule(L.begin, { rule: L, type: "begin" })), O.terminatorEnd && N.addRule(O.terminatorEnd, { type: "end" }), O.illegal && N.addRule(O.illegal, { type: "illegal" }), N;
    }
    function ie(O, N) {
      const L = (
        /** @type CompiledMode */
        O
      );
      if (O.isCompiled) return L;
      [
        ua,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        ia,
        ba,
        sa
      ].forEach((ce) => ce(O, N)), b.compilerExtensions.forEach((ce) => ce(O, N)), O.__beforeBegin = null, [
        na,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        ra,
        // default to 1 relevance if not specified
        oa
      ].forEach((ce) => ce(O, N)), O.isCompiled = !0;
      let fe = null;
      return typeof O.keywords == "object" && O.keywords.$pattern && (O.keywords = Object.assign({}, O.keywords), fe = O.keywords.$pattern, delete O.keywords.$pattern), fe = fe || /\w+/, O.keywords && (O.keywords = jr(O.keywords, b.case_insensitive)), L.keywordPatternRe = w(fe, !0), N && (O.begin || (O.begin = /\B|\b/), L.beginRe = w(L.begin), !O.end && !O.endsWithParent && (O.end = /\B|\b/), O.end && (L.endRe = w(L.end)), L.terminatorEnd = f(L.end) || "", O.endsWithParent && N.terminatorEnd && (L.terminatorEnd += (O.end ? "|" : "") + N.terminatorEnd)), O.illegal && (L.illegalRe = w(
        /** @type {RegExp | string} */
        O.illegal
      )), O.contains || (O.contains = []), O.contains = [].concat(...O.contains.map(function(ce) {
        return _a(ce === "self" ? O : ce);
      })), O.contains.forEach(function(ce) {
        ie(
          /** @type Mode */
          ce,
          L
        );
      }), O.starts && ie(O.starts, N), L.matcher = re(L), L;
    }
    if (b.compilerExtensions || (b.compilerExtensions = []), b.contains && b.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return b.classNameAliases = n(b.classNameAliases || {}), ie(
      /** @type Mode */
      b
    );
  }
  function Kr(b) {
    return b ? b.endsWithParent || Kr(b.starts) : !1;
  }
  function _a(b) {
    return b.variants && !b.cachedVariants && (b.cachedVariants = b.variants.map(function(w) {
      return n(b, { variants: null }, w);
    })), b.cachedVariants ? b.cachedVariants : Kr(b) ? n(b, { starts: b.starts ? n(b.starts) : null }) : Object.isFrozen(b) ? n(b) : b;
  }
  var ma = "11.11.1";
  class xa extends Error {
    constructor(w, D) {
      super(w), this.name = "HTMLInjectionError", this.html = D;
    }
  }
  const Tn = u, Vr = n, Jr = Symbol("nomatch"), Ea = 7, Xr = function(b) {
    const w = /* @__PURE__ */ Object.create(null), D = /* @__PURE__ */ Object.create(null), B = [];
    let re = !0;
    const ie = "Could not find the language '{}', did you forget to load/include a language module?", O = { disableAutodetect: !0, name: "Plain text", contains: [] };
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
    function L(C) {
      return N.noHighlightRe.test(C);
    }
    function fe(C) {
      let M = C.className + " ";
      M += C.parentNode ? C.parentNode.className : "";
      const j = N.languageDetectRe.exec(M);
      if (j) {
        const Q = gt(j[1]);
        return Q || (Zr(ie.replace("{}", j[1])), Zr("Falling back to no-highlight mode for this block.", C)), Q ? j[1] : "no-highlight";
      }
      return M.split(/\s+/).find((Q) => L(Q) || gt(Q));
    }
    function ce(C, M, j) {
      let Q = "", le = "";
      typeof M == "object" ? (Q = C, j = M.ignoreIllegals, le = M.language) : ($t("10.7.0", "highlight(lang, code, ...args) has been deprecated."), $t("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), le = C, Q = M), j === void 0 && (j = !0);
      const $e = {
        code: Q,
        language: le
      };
      Bu("before:highlight", $e);
      const _t = $e.result ? $e.result : au($e.language, $e.code, j);
      return _t.code = $e.code, Bu("after:highlight", _t), _t;
    }
    function au(C, M, j, Q) {
      const le = /* @__PURE__ */ Object.create(null);
      function $e(R, F) {
        return R.keywords[F];
      }
      function _t() {
        if (!P.keywords) {
          be.addText(ee);
          return;
        }
        let R = 0;
        P.keywordPatternRe.lastIndex = 0;
        let F = P.keywordPatternRe.exec(ee), $ = "";
        for (; F; ) {
          $ += ee.substring(R, F.index);
          const Z = Ye.case_insensitive ? F[0].toLowerCase() : F[0], ge = $e(P, Z);
          if (ge) {
            const [dt, Ba] = ge;
            if (be.addText($), $ = "", le[Z] = (le[Z] || 0) + 1, le[Z] <= Ea && (Uu += Ba), dt.startsWith("_"))
              $ += F[0];
            else {
              const Pa = Ye.classNameAliases[dt] || dt;
              Xe(F[0], Pa);
            }
          } else
            $ += F[0];
          R = P.keywordPatternRe.lastIndex, F = P.keywordPatternRe.exec(ee);
        }
        $ += ee.substring(R), be.addText($);
      }
      function Pu() {
        if (ee === "") return;
        let R = null;
        if (typeof P.subLanguage == "string") {
          if (!w[P.subLanguage]) {
            be.addText(ee);
            return;
          }
          R = au(P.subLanguage, ee, !0, ii[P.subLanguage]), ii[P.subLanguage] = /** @type {CompiledMode} */
          R._top;
        } else
          R = Nn(ee, P.subLanguage.length ? P.subLanguage : null);
        P.relevance > 0 && (Uu += R.relevance), be.__addSublanguage(R._emitter, R.language);
      }
      function Te() {
        P.subLanguage != null ? Pu() : _t(), ee = "";
      }
      function Xe(R, F) {
        R !== "" && (be.startScope(F), be.addText(R), be.endScope());
      }
      function ti(R, F) {
        let $ = 1;
        const Z = F.length - 1;
        for (; $ <= Z; ) {
          if (!R._emit[$]) {
            $++;
            continue;
          }
          const ge = Ye.classNameAliases[R[$]] || R[$], dt = F[$];
          ge ? Xe(dt, ge) : (ee = dt, _t(), ee = ""), $++;
        }
      }
      function ui(R, F) {
        return R.scope && typeof R.scope == "string" && be.openNode(Ye.classNameAliases[R.scope] || R.scope), R.beginScope && (R.beginScope._wrap ? (Xe(ee, Ye.classNameAliases[R.beginScope._wrap] || R.beginScope._wrap), ee = "") : R.beginScope._multi && (ti(R.beginScope, F), ee = "")), P = Object.create(R, { parent: { value: P } }), P;
      }
      function ni(R, F, $) {
        let Z = y(R.endRe, $);
        if (Z) {
          if (R["on:end"]) {
            const ge = new t(R);
            R["on:end"](F, ge), ge.isMatchIgnored && (Z = !1);
          }
          if (Z) {
            for (; R.endsParent && R.parent; )
              R = R.parent;
            return R;
          }
        }
        if (R.endsWithParent)
          return ni(R.parent, F, $);
      }
      function Oa(R) {
        return P.matcher.regexIndex === 0 ? (ee += R[0], 1) : (Mn = !0, 0);
      }
      function Fa(R) {
        const F = R[0], $ = R.rule, Z = new t($), ge = [$.__beforeBegin, $["on:begin"]];
        for (const dt of ge)
          if (dt && (dt(R, Z), Z.isMatchIgnored))
            return Oa(F);
        return $.skip ? ee += F : ($.excludeBegin && (ee += F), Te(), !$.returnBegin && !$.excludeBegin && (ee = F)), ui($, R), $.returnBegin ? 0 : F.length;
      }
      function Ia(R) {
        const F = R[0], $ = M.substring(R.index), Z = ni(P, R, $);
        if (!Z)
          return Jr;
        const ge = P;
        P.endScope && P.endScope._wrap ? (Te(), Xe(F, P.endScope._wrap)) : P.endScope && P.endScope._multi ? (Te(), ti(P.endScope, R)) : ge.skip ? ee += F : (ge.returnEnd || ge.excludeEnd || (ee += F), Te(), ge.excludeEnd && (ee = F));
        do
          P.scope && be.closeNode(), !P.skip && !P.subLanguage && (Uu += P.relevance), P = P.parent;
        while (P !== Z.parent);
        return Z.starts && ui(Z.starts, R), ge.returnEnd ? 0 : F.length;
      }
      function Ma() {
        const R = [];
        for (let F = P; F !== Ye; F = F.parent)
          F.scope && R.unshift(F.scope);
        R.forEach((F) => be.openNode(F));
      }
      let zu = {};
      function ri(R, F) {
        const $ = F && F[0];
        if (ee += R, $ == null)
          return Te(), 0;
        if (zu.type === "begin" && F.type === "end" && zu.index === F.index && $ === "") {
          if (ee += M.slice(F.index, F.index + 1), !re) {
            const Z = new Error(`0 width match regex (${C})`);
            throw Z.languageName = C, Z.badRule = zu.rule, Z;
          }
          return 1;
        }
        if (zu = F, F.type === "begin")
          return Fa(F);
        if (F.type === "illegal" && !j) {
          const Z = new Error('Illegal lexeme "' + $ + '" for mode "' + (P.scope || "<unnamed>") + '"');
          throw Z.mode = P, Z;
        } else if (F.type === "end") {
          const Z = Ia(F);
          if (Z !== Jr)
            return Z;
        }
        if (F.type === "illegal" && $ === "")
          return ee += `
`, 1;
        if (In > 1e5 && In > F.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return ee += $, $.length;
      }
      const Ye = gt(C);
      if (!Ye)
        throw Ft(ie.replace("{}", C)), new Error('Unknown language: "' + C + '"');
      const La = ga(Ye);
      let Fn = "", P = Q || La;
      const ii = {}, be = new N.__emitter(N);
      Ma();
      let ee = "", Uu = 0, It = 0, In = 0, Mn = !1;
      try {
        if (Ye.__emitTokens)
          Ye.__emitTokens(M, be);
        else {
          for (P.matcher.considerAll(); ; ) {
            In++, Mn ? Mn = !1 : P.matcher.considerAll(), P.matcher.lastIndex = It;
            const R = P.matcher.exec(M);
            if (!R) break;
            const F = M.substring(It, R.index), $ = ri(F, R);
            It = R.index + $;
          }
          ri(M.substring(It));
        }
        return be.finalize(), Fn = be.toHTML(), {
          language: C,
          value: Fn,
          relevance: Uu,
          illegal: !1,
          _emitter: be,
          _top: P
        };
      } catch (R) {
        if (R.message && R.message.includes("Illegal"))
          return {
            language: C,
            value: Tn(M),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: R.message,
              index: It,
              context: M.slice(It - 100, It + 100),
              mode: R.mode,
              resultSoFar: Fn
            },
            _emitter: be
          };
        if (re)
          return {
            language: C,
            value: Tn(M),
            illegal: !1,
            relevance: 0,
            errorRaised: R,
            _emitter: be,
            _top: P
          };
        throw R;
      }
    }
    function Rn(C) {
      const M = {
        value: Tn(C),
        illegal: !1,
        relevance: 0,
        _top: O,
        _emitter: new N.__emitter(N)
      };
      return M._emitter.addText(C), M;
    }
    function Nn(C, M) {
      M = M || N.languages || Object.keys(w);
      const j = Rn(C), Q = M.filter(gt).filter(ei).map(
        (Te) => au(Te, C, !1)
      );
      Q.unshift(j);
      const le = Q.sort((Te, Xe) => {
        if (Te.relevance !== Xe.relevance) return Xe.relevance - Te.relevance;
        if (Te.language && Xe.language) {
          if (gt(Te.language).supersetOf === Xe.language)
            return 1;
          if (gt(Xe.language).supersetOf === Te.language)
            return -1;
        }
        return 0;
      }), [$e, _t] = le, Pu = $e;
      return Pu.secondBest = _t, Pu;
    }
    function ya(C, M, j) {
      const Q = M && D[M] || j;
      C.classList.add("hljs"), C.classList.add(`language-${Q}`);
    }
    function On(C) {
      let M = null;
      const j = fe(C);
      if (L(j)) return;
      if (Bu(
        "before:highlightElement",
        { el: C, language: j }
      ), C.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", C);
        return;
      }
      if (C.children.length > 0 && (N.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(C)), N.throwUnescapedHTML))
        throw new xa(
          "One of your code blocks includes unescaped HTML.",
          C.innerHTML
        );
      M = C;
      const Q = M.textContent, le = j ? ce(Q, { language: j, ignoreIllegals: !0 }) : Nn(Q);
      C.innerHTML = le.value, C.dataset.highlighted = "yes", ya(C, j, le.language), C.result = {
        language: le.language,
        // TODO: remove with version 11.0
        re: le.relevance,
        relevance: le.relevance
      }, le.secondBest && (C.secondBest = {
        language: le.secondBest.language,
        relevance: le.secondBest.relevance
      }), Bu("after:highlightElement", { el: C, result: le, text: Q });
    }
    function va(C) {
      N = Vr(N, C);
    }
    const ka = () => {
      Lu(), $t("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function wa() {
      Lu(), $t("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let Yr = !1;
    function Lu() {
      function C() {
        Lu();
      }
      if (document.readyState === "loading") {
        Yr || window.addEventListener("DOMContentLoaded", C, !1), Yr = !0;
        return;
      }
      document.querySelectorAll(N.cssSelector).forEach(On);
    }
    function Aa(C, M) {
      let j = null;
      try {
        j = M(b);
      } catch (Q) {
        if (Ft("Language definition for '{}' could not be registered.".replace("{}", C)), re)
          Ft(Q);
        else
          throw Q;
        j = O;
      }
      j.name || (j.name = C), w[C] = j, j.rawDefinition = M.bind(null, b), j.aliases && Qr(j.aliases, { languageName: C });
    }
    function Ca(C) {
      delete w[C];
      for (const M of Object.keys(D))
        D[M] === C && delete D[M];
    }
    function Sa() {
      return Object.keys(w);
    }
    function gt(C) {
      return C = (C || "").toLowerCase(), w[C] || w[D[C]];
    }
    function Qr(C, { languageName: M }) {
      typeof C == "string" && (C = [C]), C.forEach((j) => {
        D[j.toLowerCase()] = M;
      });
    }
    function ei(C) {
      const M = gt(C);
      return M && !M.disableAutodetect;
    }
    function Da(C) {
      C["before:highlightBlock"] && !C["before:highlightElement"] && (C["before:highlightElement"] = (M) => {
        C["before:highlightBlock"](
          Object.assign({ block: M.el }, M)
        );
      }), C["after:highlightBlock"] && !C["after:highlightElement"] && (C["after:highlightElement"] = (M) => {
        C["after:highlightBlock"](
          Object.assign({ block: M.el }, M)
        );
      });
    }
    function Ta(C) {
      Da(C), B.push(C);
    }
    function Ra(C) {
      const M = B.indexOf(C);
      M !== -1 && B.splice(M, 1);
    }
    function Bu(C, M) {
      const j = C;
      B.forEach(function(Q) {
        Q[j] && Q[j](M);
      });
    }
    function Na(C) {
      return $t("10.7.0", "highlightBlock will be removed entirely in v12.0"), $t("10.7.0", "Please use highlightElement now."), On(C);
    }
    Object.assign(b, {
      highlight: ce,
      highlightAuto: Nn,
      highlightAll: Lu,
      highlightElement: On,
      // TODO: Remove with v12 API
      highlightBlock: Na,
      configure: va,
      initHighlighting: ka,
      initHighlightingOnLoad: wa,
      registerLanguage: Aa,
      unregisterLanguage: Ca,
      listLanguages: Sa,
      getLanguage: gt,
      registerAliases: Qr,
      autoDetection: ei,
      inherit: Vr,
      addPlugin: Ta,
      removePlugin: Ra
    }), b.debugMode = function() {
      re = !1;
    }, b.safeMode = function() {
      re = !0;
    }, b.versionString = ma, b.regex = {
      concat: g,
      lookahead: h,
      either: k,
      optional: d,
      anyNumberOfTimes: p
    };
    for (const C in Iu)
      typeof Iu[C] == "object" && e(Iu[C]);
    return Object.assign(b, Iu), b;
  }, qt = Xr({});
  return qt.newInstance = () => Xr({}), Xn = qt, qt.HighlightJS = qt, qt.default = qt, Xn;
}
var U1 = /* @__PURE__ */ z1();
const ze = /* @__PURE__ */ P1(U1), Qi = "[A-Za-z$_][0-9A-Za-z$_]*", $1 = [
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
], q1 = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Os = [
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
], Fs = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Is = [
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
], H1 = [
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
], j1 = [].concat(
  Is,
  Os,
  Fs
);
function G1(e) {
  const t = e.regex, u = (G, { after: xe }) => {
    const De = "</" + G[0].slice(1);
    return G.input.indexOf(De, xe) !== -1;
  }, n = Qi, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (G, xe) => {
      const De = G[0].length + G.index, Ue = G.input[De];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ue === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ue === ","
      ) {
        xe.ignoreMatch();
        return;
      }
      Ue === ">" && (u(G, { after: De }) || xe.ignoreMatch());
      let ft;
      const Ot = G.input.substring(De);
      if (ft = Ot.match(/^\s*=/)) {
        xe.ignoreMatch();
        return;
      }
      if ((ft = Ot.match(/^\s+extends\s+/)) && ft.index === 0) {
        xe.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: Qi,
    keyword: $1,
    literal: q1,
    built_in: j1,
    "variable.language": H1
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
  }, _ = {
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
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    g,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(y)
  });
  const m = [].concat(v, h.contains), x = m.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(m)
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
    contains: x
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
        ...Os,
        ...Fs
      ]
    }
  }, I = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, H = {
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
  }, ue = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ae(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const pe = {
    match: t.concat(
      /\b/,
      ae([
        ...Is,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
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
  }, J = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Se = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(J)
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
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: S },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      I,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      g,
      _,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      S,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      Se,
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
            begin: J,
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
                    contains: x
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
      H,
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
      V,
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
      pe,
      ue,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const cn = "[A-Za-z$_][0-9A-Za-z$_]*", Ms = [
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
], Ls = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Bs = [
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
], Ps = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], zs = [
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
], Us = [
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
], $s = [].concat(
  zs,
  Bs,
  Ps
);
function Z1(e) {
  const t = e.regex, u = (G, { after: xe }) => {
    const De = "</" + G[0].slice(1);
    return G.input.indexOf(De, xe) !== -1;
  }, n = cn, r = {
    begin: "<>",
    end: "</>"
  }, i = /<[A-Za-z0-9\\._:-]+\s*\/>/, o = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (G, xe) => {
      const De = G[0].length + G.index, Ue = G.input[De];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        Ue === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        Ue === ","
      ) {
        xe.ignoreMatch();
        return;
      }
      Ue === ">" && (u(G, { after: De }) || xe.ignoreMatch());
      let ft;
      const Ot = G.input.substring(De);
      if (ft = Ot.match(/^\s*=/)) {
        xe.ignoreMatch();
        return;
      }
      if ((ft = Ot.match(/^\s+extends\s+/)) && ft.index === 0) {
        xe.ignoreMatch();
        return;
      }
    }
  }, s = {
    $pattern: cn,
    keyword: Ms,
    literal: Ls,
    built_in: $s,
    "variable.language": Us
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
  }, _ = {
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
  }, y = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    p,
    d,
    g,
    _,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    f
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  h.contains = y.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: s,
    contains: [
      "self"
    ].concat(y)
  });
  const m = [].concat(v, h.contains), x = m.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: s,
      contains: ["self"].concat(m)
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
    contains: x
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
        ...Bs,
        ...Ps
      ]
    }
  }, I = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, H = {
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
  }, ue = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function ae(G) {
    return t.concat("(?!", G.join("|"), ")");
  }
  const pe = {
    match: t.concat(
      /\b/,
      ae([
        ...zs,
        "super",
        "import"
      ].map((G) => `${G}\\s*\\(`)),
      n,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, V = {
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
  }, J = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Se = {
    match: [
      /const|var|let/,
      /\s+/,
      n,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(J)
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
    exports: { PARAMS_CONTAINS: x, CLASS_REFERENCE: S },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      I,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      p,
      d,
      g,
      _,
      v,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      f,
      S,
      {
        scope: "attr",
        match: n + t.lookahead(":"),
        relevance: 0
      },
      Se,
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
            begin: J,
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
                    contains: x
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
      H,
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
      V,
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
      pe,
      ue,
      T,
      U,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function W1(e) {
  const t = e.regex, u = Z1(e), n = cn, r = [
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
    $pattern: cn,
    keyword: Ms.concat(a),
    literal: Ls,
    built_in: $s.concat(r),
    "variable.language": Us
  }, l = {
    className: "meta",
    begin: "@" + n
  }, f = (g, _, k) => {
    const v = g.contains.findIndex((y) => y.label === _);
    if (v === -1)
      throw new Error("can not find mode to replace");
    g.contains.splice(v, 1, k);
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
function K1(e) {
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
  }, _ = {
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
      _,
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
          g,
          k,
          f
        ]
      }
    ]
  };
}
function V1(e) {
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
  ], _ = [
    "true",
    "false"
  ], k = { match: /(\/[a-z._-]+)+/ }, v = [
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
  ], y = [
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
  ], m = [
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
  ], x = [
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
      literal: _,
      built_in: [
        ...v,
        ...y,
        // Shell modifiers
        "set",
        "shopt",
        ...m,
        ...x
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
function J1(e) {
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
function qs(e) {
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
const X1 = (e) => ({
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
}), Y1 = [
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
], Q1 = [
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
], eh = [
  ...Y1,
  ...Q1
], th = [
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
].sort().reverse(), uh = [
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
].sort().reverse(), nh = [
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
].sort().reverse(), rh = [
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
function ih(e) {
  const t = e.regex, u = X1(e), n = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, r = "and or not only", i = /@-?\w[\w]*(-\w+)*/, o = "[a-zA-Z-][a-zA-Z0-9_-]*", s = [
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
          { begin: ":(" + uh.join("|") + ")" },
          { begin: ":(:)?(" + nh.join("|") + ")" }
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
        begin: "\\b(" + rh.join("|") + ")\\b"
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
              attribute: th.join(" ")
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
        begin: "\\b(" + eh.join("|") + ")\\b"
      }
    ]
  };
}
function oh(e) {
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
function sh(e) {
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
    "on:begin": (V, U) => {
      U.data._beginMatch = V[1] || V[2];
    },
    "on:end": (V, U) => {
      U.data._beginMatch !== V[1] && U.ignoreMatch();
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
  }, _ = [
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
  ], m = {
    keyword: k,
    literal: ((V) => {
      const U = [];
      return V.forEach((J) => {
        U.push(J), J.toLowerCase() === J ? U.push(J.toUpperCase()) : U.push(J.toLowerCase());
      }), U;
    })(_),
    built_in: v
  }, x = (V) => V.map((U) => U.replace(/\|\d+$/, "")), A = { variants: [
    {
      match: [
        /new/,
        t.concat(p, "+"),
        // to prevent built ins from being confused as the class constructor call
        t.concat("(?!", x(v).join("\\b|"), "\\b)"),
        r
      ],
      scope: {
        1: "keyword",
        4: "title.class"
      }
    }
  ] }, T = t.concat(n, "\\b(?!\\()"), S = { variants: [
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
  ] }, I = {
    scope: "attr",
    match: t.concat(n, t.lookahead(":"), t.lookahead(/(?!::)/))
  }, H = {
    relevance: 0,
    begin: /\(/,
    end: /\)/,
    keywords: m,
    contains: [
      I,
      o,
      S,
      e.C_BLOCK_COMMENT_MODE,
      d,
      g,
      A
    ]
  }, ue = {
    relevance: 0,
    match: [
      /\b/,
      // to prevent keywords from being confused as the function title
      t.concat("(?!fn\\b|function\\b|", x(k).join("\\b|"), "|", x(v).join("\\b|"), "\\b)"),
      n,
      t.concat(p, "*"),
      t.lookahead(/(?=\()/)
    ],
    scope: { 3: "title.function.invoke" },
    contains: [H]
  };
  H.contains.push(ue);
  const ae = [
    I,
    S,
    e.C_BLOCK_COMMENT_MODE,
    d,
    g,
    A
  ], pe = {
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
      literal: _,
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
          literal: _,
          keyword: [
            "new",
            "array"
          ]
        },
        contains: [
          "self",
          ...ae
        ]
      },
      ...ae,
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
    keywords: m,
    contains: [
      pe,
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
      ue,
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
            keywords: m,
            contains: [
              "self",
              pe,
              o,
              S,
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
ze.registerLanguage("javascript", G1);
ze.registerLanguage("typescript", W1);
ze.registerLanguage("python", K1);
ze.registerLanguage("bash", V1);
ze.registerLanguage("json", J1);
ze.registerLanguage("xml", qs);
ze.registerLanguage("html", qs);
ze.registerLanguage("css", ih);
ze.registerLanguage("markdown", oh);
ze.registerLanguage("php", sh);
const Hr = new Pe({
  html: !0,
  linkify: !0,
  typographer: !0,
  highlight: function(e, t) {
    if (t && ze.getLanguage(t))
      try {
        return ze.highlight(e, { language: t }).value;
      } catch (u) {
      }
    return "";
  }
});
Hr.renderer.rules.fence = function(e, t, u, n, r) {
  const i = e[t];
  return `<pre><code class="hljs language-${i.info.trim()}">${i.content}</code></pre>`;
};
Hr.renderer.rules.code_inline = function(e, t, u, n, r) {
  return `<code class="inline-code">${e[t].content}</code>`;
};
function dr(e) {
  return Hr.render(e);
}
const ah = {
  messages: [],
  isLoading: !1,
  currentChatId: null,
  error: null
}, nt = Rr(ah);
p0(
  nt,
  (e) => e.messages.map((t) => _e(oe({}, t), {
    message: t.role === "ai" ? dr(t.message) : t.message
  }))
);
const ch = (e, t) => qe(void 0, null, function* () {
  const u = localStorage.getItem("userId"), n = t.user_id, r = t.bot_id;
  if (!u || !n || !r)
    throw new Error("User ID, Fluent Bot User ID, and Bot ID are required");
  let i = "", o = "";
  nt.update((s) => _e(oe({}, s), {
    messages: [
      ...s.messages,
      {
        id: Date.now().toString(),
        chatId: s.currentChatId || "",
        role: "human",
        message: e,
        context: null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      },
      {
        id: "streaming",
        chatId: s.currentChatId || "",
        role: "ai",
        message: "",
        context: null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ],
    isLoading: !0
  }));
  try {
    const s = {
      message: e,
      userId: u,
      fluentBotUserId: n,
      botId: r,
      chatId: Mo(nt).currentChatId || void 0
    }, a = yield Ir.post("/chat", s, {
      responseType: "text",
      headers: {
        Accept: "text/event-stream"
      },
      onDownloadProgress: (c) => {
        var p, d;
        const l = ((d = (p = c.event) == null ? void 0 : p.target) == null ? void 0 : d.responseText) || "";
        if (!l || l === i) return;
        const f = l.slice(i.length);
        i = l;
        const h = f.split(`
`);
        for (const g of h) {
          if (!g.trim() || !g.startsWith("data:")) continue;
          const _ = g.replace("data:", "").trim();
          if (_)
            try {
              const k = JSON.parse(_);
              nt.update((v) => {
                const y = v.messages.find((m) => m.id === "streaming");
                if (!y) return v;
                if (Array.isArray(k))
                  return _e(oe({}, v), {
                    messages: v.messages.map(
                      (m) => m.id === "streaming" ? _e(oe({}, m), {
                        context: k.map((x) => ({
                          id: x.id,
                          title: x.title,
                          url: x.url
                        }))
                      }) : m
                    )
                  });
                if (typeof k == "string")
                  return o += k, _e(oe({}, v), {
                    messages: v.messages.map(
                      (m) => m.id === "streaming" ? _e(oe({}, m), {
                        message: dr(o)
                      }) : m
                    )
                  });
                if ("chatId" in k)
                  return _e(oe({}, v), {
                    currentChatId: k.chatId
                  });
                if ("done" in k && k.done) {
                  const m = {
                    id: Date.now().toString(),
                    chatId: v.currentChatId || "",
                    role: "ai",
                    message: dr(o),
                    context: y.context,
                    created_at: (/* @__PURE__ */ new Date()).toISOString()
                  };
                  return _e(oe({}, v), {
                    messages: v.messages.map(
                      (x) => x.id === "streaming" ? m : x
                    ),
                    isLoading: !1
                  });
                }
                if ("error" in k)
                  throw new Error(k.error);
                return v;
              });
            } catch (k) {
              if (console.error("Error parsing SSE data:", k), k instanceof Error && k.message !== "Error parsing SSE data:")
                throw k;
            }
        }
      }
    });
  } catch (s) {
    throw console.error("Error sending message:", s), nt.update((a) => _e(oe({}, a), {
      isLoading: !1
    })), s;
  }
}), lh = () => {
  nt.update((e) => _e(oe({}, e), {
    messages: [],
    currentChatId: null
  }));
}, fh = () => {
  nt.update((e) => _e(oe({}, e), {
    messages: [],
    currentChatId: null
  }));
};
function dh() {
  const { subscribe: e, set: t } = Rr({
    userId: null
  });
  function u() {
    const n = localStorage.getItem("userId");
    if (n)
      t({ userId: n });
    else {
      const r = crypto.randomUUID();
      localStorage.setItem("userId", r), t({ userId: r });
    }
  }
  return {
    subscribe: e,
    initializeUser: u
  };
}
const hh = dh();
ac();
/**
 * @license lucide-svelte v0.479.0 - ISC
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
const ph = {
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
var bh = /* @__PURE__ */ Xc("<svg><!><!></svg>");
function lt(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]), n = Be(u, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  ku(t, !1);
  let r = Lt(t, "name", 8, void 0), i = Lt(t, "color", 8, "currentColor"), o = Lt(t, "size", 8, 24), s = Lt(t, "strokeWidth", 8, 2), a = Lt(t, "absoluteStrokeWidth", 8, !1), c = Lt(t, "iconNode", 24, () => []);
  const l = (...g) => g.filter((_, k, v) => !!_ && v.indexOf(_) === k).join(" ");
  d0();
  var f = bh();
  let h;
  var p = W(f);
  Dr(p, 1, c, No, (g, _) => {
    let k = () => q(_)[0], v = () => q(_)[1];
    var y = Me(), m = Ie(y);
    i0(m, k, !0, (x, A) => {
      let T;
      Ze(() => T = _i(x, T, oe({}, v()), void 0, x.namespaceURI === co, x.nodeName.includes("-")));
    }), K(g, y);
  });
  var d = Ge(p);
  Ke(d, t, "default", {}), Ze(
    (g, _) => h = _i(
      f,
      h,
      _e(oe(oe({}, ph), n), {
        width: o(),
        height: o(),
        stroke: i(),
        "stroke-width": g,
        class: _
      }),
      void 0,
      !0
    ),
    [
      () => a() ? Number(s()) * 24 / Number(o()) : s(),
      () => l("lucide-icon", "lucide", r() ? `lucide-${r()}` : "", u.class)
    ],
    yr
  ), K(e, f), wu();
}
function Hs(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "circle-help" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function js(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "file-text" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Gs(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "info" }, () => u, {
    iconNode: [
      [
        "circle",
        { cx: "12", cy: "12", r: "10" }
      ],
      ["path", { d: "M12 16v-4" }],
      ["path", { d: "M12 8h.01" }]
    ],
    children: (r, i) => {
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Zs(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "life-buoy" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ws(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "menu" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Ks(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "message-square-more" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function ln(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "message-square" }, () => u, {
    iconNode: [
      [
        "path",
        {
          d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
        }
      ]
    ],
    children: (r, i) => {
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function Vs(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "monitor" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function gh(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "refresh-cw" }, () => u, {
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
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
function _h(e, t) {
  const u = Be(t, [
    "children",
    "$$slots",
    "$$events",
    "$$legacy"
  ]);
  lt(e, st({ name: "x" }, () => u, {
    iconNode: [
      ["path", { d: "M18 6 6 18" }],
      ["path", { d: "m6 6 12 12" }]
    ],
    children: (r, i) => {
      var o = Me(), s = Ie(o);
      Ke(s, t, "default", {}), K(r, o);
    },
    $$slots: { default: !0 }
  }));
}
var mh = /* @__PURE__ */ ve('<span class="svelte-1p3l3iy">U</span>'), xh = /* @__PURE__ */ ve('<div class="avatar svelte-1p3l3iy"><!></div>'), Eh = /* @__PURE__ */ ve('<div class="message-text svelte-1p3l3iy"> </div>'), yh = /* @__PURE__ */ ve('<div class="markdown-content svelte-1p3l3iy"><!></div>'), vh = /* @__PURE__ */ ve('<a target="_blank" rel="external" class="source-link svelte-1p3l3iy" data-sveltekit-preload-data="tap"><span class="link-text svelte-1p3l3iy"> </span></a>'), kh = /* @__PURE__ */ ve('<div class="context-links svelte-1p3l3iy"><div class="context-label svelte-1p3l3iy">Sources:</div> <!></div>'), wh = /* @__PURE__ */ ve('<div><div><!> <div class="bubble-container svelte-1p3l3iy"><div><!></div> <!> <div> </div></div></div></div>');
const Ah = {
  hash: "svelte-1p3l3iy",
  code: `.message-container.svelte-1p3l3iy {display:flex;padding:0 0.5rem;}.user-message.svelte-1p3l3iy {justify-content:flex-end;}.bot-message.svelte-1p3l3iy {justify-content:flex-start;}.message-content.svelte-1p3l3iy {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.user-content.svelte-1p3l3iy {flex-direction:row-reverse;}.bot-content.svelte-1p3l3iy {flex-direction:row;}.avatar.svelte-1p3l3iy {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;background-color:var(--primary-color);}.bubble-container.svelte-1p3l3iy {max-width:100%;}.message-bubble.svelte-1p3l3iy {padding:0.625rem 0.875rem;border-radius:1.25rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);position:relative;line-height:1.5;display:flex;flex-direction:column;background-color:var(--message-color);color:var(--text-color);}.user-bubble.svelte-1p3l3iy {border-top-right-radius:0.25rem;}.bot-bubble.svelte-1p3l3iy {border-top-left-radius:0.25rem;border:1px solid #e5e7eb;}.message-text.svelte-1p3l3iy {white-space:pre-wrap;word-break:break-word;font-size:0.95rem;margin:0;padding:0;}

  @keyframes svelte-1p3l3iy-bounce {
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
  }.context-links.svelte-1p3l3iy {margin-top:0.25rem;padding-top:0.25rem;border-top:1px solid rgba(0, 0, 0, 0.1);display:flex;flex-wrap:wrap;gap:0.25rem;align-items:center;}.context-label.svelte-1p3l3iy {font-size:0.65rem;color:#6b7280;font-weight:400;}.source-link.svelte-1p3l3iy {display:inline-flex;align-items:center;gap:0.125rem;font-size:0.65rem;color:#2563eb;text-decoration:none;padding:0.125rem 0.375rem;border-radius:0.125rem;transition:all 0.2s ease;background-color:rgba(37, 99, 235, 0.05);}.source-link.svelte-1p3l3iy:hover {background-color:rgba(37, 99, 235, 0.1);color:#1d4ed8;text-decoration:none;}.link-text.svelte-1p3l3iy {max-width:150px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}.timestamp.svelte-1p3l3iy {font-size:0.75rem;color:#6b7280; /* text-gray-500 */margin-top:0.25rem;}.user-timestamp.svelte-1p3l3iy {text-align:right;}.bot-timestamp.svelte-1p3l3iy {text-align:left;}

  /* Global styles for markdown content */.markdown-content {font-size:0.95rem;line-height:1.5;color:inherit;margin:0;padding:0;}.markdown-content p {margin:0;padding:0;color:inherit;}.markdown-content p + p {margin-top:0.75rem;}.markdown-content pre {margin:0.75rem 0;padding:0.75rem;border-radius:0.5rem;background-color:#f8fafc !important;overflow-x:auto;border:1px solid #e5e7eb;}.markdown-content pre code {color:#1f2937; /* text-gray-800 */font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
      monospace;}.markdown-content code.inline-code {background-color:#f3f4f6;padding:0.2rem 0.4rem;border-radius:0.25rem;font-size:0.875em;color:#dc2626;border:1px solid #e5e7eb;}.markdown-content ul,
  .markdown-content ol {margin:0.75rem 0;padding-left:1.5rem;}.markdown-content li {margin-bottom:0.5rem;}.markdown-content a {color:#2563eb;text-decoration:none;cursor:pointer;}.markdown-content a:hover {text-decoration:underline;}.markdown-content blockquote {margin:0.75rem 0;padding-left:1rem;border-left:4px solid #e5e7eb;color:#6b7280;}`
};
function Ch(e, t) {
  ku(t, !0), mn(e, Ah);
  const u = {
    MessageSquare: ln,
    MessageSquareMore: Ks,
    Monitor: Vs,
    LifeBuoy: Zs,
    HelpCircle: Hs,
    Menu: Ws,
    Info: Gs,
    FileText: js
  }, n = /* @__PURE__ */ He(() => t.botIcon && u[t.botIcon] ? u[t.botIcon] : ln), r = (m) => m.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }), i = (m, x) => {
    m.preventDefault(), m.stopPropagation(), window.open(x, "_blank", "noopener,noreferrer");
  }, o = (m) => {
    const A = new DOMParser().parseFromString(m, "text/html"), T = A.getElementsByTagName("a");
    return Array.from(T).forEach((S) => {
      const I = S.getAttribute("href");
      I && (S.setAttribute("target", "_blank"), S.setAttribute("rel", "noopener noreferrer"), S.addEventListener("click", (H) => i(H, I)));
    }), A.body.innerHTML;
  };
  var s = wh(), a = W(s), c = W(a);
  {
    var l = (m) => {
      var x = xh(), A = W(x);
      {
        var T = (I) => {
          var H = mh();
          K(I, H);
        }, S = (I, H) => {
          {
            var ue = (ae) => {
              var pe = Me(), V = Ie(pe);
              r0(V, () => q(n), (U, J) => {
                J(U, { size: 20, strokeWidth: 2, color: "white" });
              }), K(ae, pe);
            };
            et(
              I,
              (ae) => {
                q(n) && ae(ue);
              },
              H
            );
          }
        };
        et(A, (I) => {
          t.type === "user" ? I(T) : I(S, !1);
        });
      }
      Ze(() => {
        var I;
        return Ct(x, "style", `background-color: ${(I = t.type === "user" ? t.lighterColorHex : t.colorHex) != null ? I : ""}`);
      }), K(m, x);
    };
    et(c, (m) => {
      t.botIcon && (t.type === "user" || t.type === "bot") && m(l);
    });
  }
  var f = Ge(c, 2), h = W(f), p = W(h);
  {
    var d = (m) => {
      var x = Eh(), A = W(x);
      Ze(() => hu(A, t.content)), K(m, x);
    }, g = (m) => {
      var x = yh(), A = W(x);
      Oo(A, () => o(t.content)), K(m, x);
    };
    et(p, (m) => {
      t.type === "user" ? m(d) : m(g, !1);
    });
  }
  var _ = Ge(h, 2);
  {
    var k = (m) => {
      var x = kh(), A = Ge(W(x), 2);
      Dr(A, 17, () => t.context, No, (T, S) => {
        var I = vh(), H = W(I), ue = W(H);
        Ze(() => {
          Ct(I, "href", q(S).url), hu(ue, q(S).title);
        }), K(T, I);
      }), K(m, x);
    };
    et(_, (m) => {
      t.context && t.context.length > 0 && t.showSources && m(k);
    });
  }
  var v = Ge(_, 2), y = W(v);
  Ze(
    (m) => {
      var x, A, T, S, I, H;
      Vt(s, 1, `message-container ${(x = t.type === "user" ? "user-message" : "bot-message") != null ? x : ""}`, "svelte-1p3l3iy"), Vt(a, 1, `message-content ${(A = t.type === "user" ? "user-content" : "bot-content") != null ? A : ""}`, "svelte-1p3l3iy"), Vt(h, 1, `message-bubble ${(T = t.type === "user" ? "user-bubble" : "bot-bubble") != null ? T : ""}`, "svelte-1p3l3iy"), Ct(h, "style", `--message-color: ${(S = t.type === "user" ? t.lighterColorHex : "white") != null ? S : ""}; --text-color: ${(I = t.type === "user" ? "white" : "#1f2937") != null ? I : ""}`), Vt(v, 1, `timestamp ${(H = t.type === "user" ? "user-timestamp" : "bot-timestamp") != null ? H : ""}`, "svelte-1p3l3iy"), hu(y, m);
    },
    [() => r(t.timestamp)]
  ), K(e, s), wu();
}
var Sh = /* @__PURE__ */ ve('<div class="avatar svelte-1cgyw68"><span class="svelte-1cgyw68">B</span></div>'), Dh = /* @__PURE__ */ ve('<div class="thinking svelte-1cgyw68"><span class="svelte-1cgyw68">Thinking</span> <div class="dots-container svelte-1cgyw68"><span class="dot svelte-1cgyw68"></span> <span class="dot svelte-1cgyw68"></span> <span class="dot svelte-1cgyw68"></span></div></div>'), Th = /* @__PURE__ */ ve('<div class="prose typing-animation svelte-1cgyw68"><!></div>'), Rh = /* @__PURE__ */ ve('<div class="message-container bot-message svelte-1cgyw68"><div class="message-content bot-content svelte-1cgyw68"><!> <div class="bubble-container svelte-1cgyw68"><div class="message-bubble bot-bubble svelte-1cgyw68"><!></div></div></div></div>'), Nh = (e, t) => {
  e.key === "Enter" && !e.shiftKey && (e.preventDefault(), t());
}, Oh = /* @__PURE__ */ ve('<div class="chat-container svelte-1cgyw68"><div class="messages-container svelte-1cgyw68"></div> <form class="input-container svelte-1cgyw68"><input type="text" placeholder="Type your message..." class="message-input svelte-1cgyw68"></form></div>');
const Fh = {
  hash: "svelte-1cgyw68",
  code: `.chat-container.svelte-1cgyw68 {height:100%;display:flex;flex-direction:column;}.messages-container.svelte-1cgyw68 {flex:1;overflow-y:auto;padding:0.75rem 0.75rem 0;background-color:#f9fafb;display:flex;flex-direction:column;width:100%;box-sizing:border-box;}.message-container.svelte-1cgyw68 {display:flex;margin-bottom:0.25rem;padding:0 0.5rem;}.bot-message.svelte-1cgyw68 {justify-content:flex-start;}.message-content.svelte-1cgyw68 {display:flex;align-items:flex-start;gap:0.5rem;max-width:85%;}.bot-content.svelte-1cgyw68 {flex-direction:row;}.avatar.svelte-1cgyw68 {width:2.5rem;height:2.5rem;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:600;flex-shrink:0;}.bubble-container.svelte-1cgyw68 {max-width:100%;}.message-bubble.svelte-1cgyw68 {padding:0.625rem 0.875rem;border-radius:1.25rem;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);position:relative;line-height:1.5;display:flex;flex-direction:column;background-color:white;color:#1f2937;
    animation: svelte-1cgyw68-pulse 2s infinite ease-in-out;}.bot-bubble.svelte-1cgyw68 {border-top-left-radius:0.25rem;border:1px solid #e5e7eb;}.thinking.svelte-1cgyw68 {display:flex;align-items:center;gap:0.5rem;color:#1f2937;font-size:0.95rem;padding:0.25rem 0;}.dots-container.svelte-1cgyw68 {display:flex;align-items:center;gap:0.25rem;}.dot.svelte-1cgyw68 {width:4px;height:4px;background-color:#1f2937;border-radius:50%;display:inline-block;
    animation: svelte-1cgyw68-bounce 1.4s infinite ease-in-out both;}.dot.svelte-1cgyw68:nth-child(1) {animation-delay:-0.32s;}.dot.svelte-1cgyw68:nth-child(2) {animation-delay:-0.16s;}

  @keyframes svelte-1cgyw68-bounce {
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

  @keyframes svelte-1cgyw68-pulse {
    0%,
    100% {
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }
    50% {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
  }.prose.svelte-1cgyw68 {font-size:0.95rem;line-height:1.5;max-width:100%;overflow-wrap:break-word;margin:0;}.input-container.svelte-1cgyw68 {flex-shrink:0;border-top:1px solid #e5e7eb;background-color:white;padding:0.75rem;width:100%;box-sizing:border-box;}.message-input.svelte-1cgyw68 {width:100%;padding:0.5rem 0.75rem;border:1px solid #e5e7eb;border-radius:0.5rem;box-sizing:border-box;max-width:100%;font-size:0.875rem;}.message-input.svelte-1cgyw68:focus {outline:none;border-color:#3b82f6;}

  /* Typing animation */
  @keyframes svelte-1cgyw68-typing {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }.typing-animation.svelte-1cgyw68 {
    animation: svelte-1cgyw68-typing 0.5s ease-in-out;}`
};
function Ih(e, t) {
  ku(t, !0), mn(e, Fh);
  const [u, n] = g0(), r = () => b0(nt, "$chatStore", u);
  let i = _c(""), o, s = /* @__PURE__ */ He(() => r().messages), a = /* @__PURE__ */ He(() => r().isLoading);
  const c = () => {
    o && (o.scrollTop = o.scrollHeight);
  };
  pu(() => {
    q(s) && setTimeout(c, 100);
  }), Lo(() => {
    c();
  }), pu(() => {
    c();
  });
  const l = () => qe(this, null, function* () {
    if (!q(i).trim()) return;
    const g = q(i);
    Ne(i, ""), yield ch(g, t.settings);
  });
  var f = Oh(), h = W(f);
  Dr(h, 21, () => q(s), (g) => g.id, (g, _) => {
    var k = Me(), v = Ie(k);
    {
      var y = (x) => {
        var A = Rh(), T = W(A), S = W(T);
        {
          var I = (U) => {
            var J = Sh();
            Ze(() => {
              var Se;
              return Ct(J, "style", `background-color: ${(Se = t.settings.color_hex) != null ? Se : ""}`);
            }), K(U, J);
          };
          et(S, (U) => {
            t.settings.bot_icon && U(I);
          });
        }
        var H = Ge(S, 2), ue = W(H), ae = W(ue);
        {
          var pe = (U) => {
            var J = Dh();
            K(U, J);
          }, V = (U) => {
            var J = Th(), Se = W(J);
            Oo(Se, () => q(_).message), K(U, J);
          };
          et(ae, (U) => {
            q(_).message ? U(V, !1) : U(pe);
          });
        }
        K(x, A);
      }, m = (x) => {
        const A = /* @__PURE__ */ He(() => q(_).role === "human" ? "user" : "bot"), T = /* @__PURE__ */ He(() => new Date(q(_).created_at)), S = /* @__PURE__ */ He(() => q(_).context || null);
        Ch(x, {
          get content() {
            return q(_).message;
          },
          get type() {
            return q(A);
          },
          get timestamp() {
            return q(T);
          },
          get context() {
            return q(S);
          },
          get botIcon() {
            return t.settings.bot_icon;
          },
          get showSources() {
            return t.settings.show_sources;
          },
          get colorHex() {
            return t.settings.color_hex;
          },
          get lighterColorHex() {
            return t.settings.lighter_color_hex;
          }
        });
      };
      et(v, (x) => {
        q(_).id === "streaming" ? x(y) : x(m, !1);
      });
    }
    K(g, k);
  }), f0(h, (g) => o = g, () => o);
  var p = Ge(h, 2), d = W(p);
  d.__keydown = [Nh, l], Ze(() => d.disabled = q(a)), Jc("submit", p, (g) => {
    g.preventDefault(), l();
  }), l0(d, () => q(i), (g) => Ne(i, g)), K(e, f), wu(), n();
}
_n(["keydown"]);
const Mh = (e, t) => {
  lh(), fh(), t.settings.first_message && nt.update((u) => _e(oe({}, u), {
    messages: [
      {
        id: Date.now().toString(),
        chatId: "",
        role: "ai",
        message: t.settings.first_message,
        formattedMessage: t.settings.first_message,
        context: null,
        created_at: (/* @__PURE__ */ new Date()).toISOString()
      }
    ]
  }));
};
var Lh = /* @__PURE__ */ ve('<main class="svelte-1o5wgkq"><header class="main-header svelte-1o5wgkq"><div class="title svelte-1o5wgkq"> </div> <div class="button-group svelte-1o5wgkq"><button class="icon-button svelte-1o5wgkq" aria-label="Refresh chat"><!></button></div></header> <div class="content svelte-1o5wgkq"><!></div></main>');
const Bh = {
  hash: "svelte-1o5wgkq",
  code: "main.svelte-1o5wgkq {height:100vh;display:flex;flex-direction:column;background-color:#f9fafb; /* gray-50 */overflow:hidden;}header.svelte-1o5wgkq {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.main-header.svelte-1o5wgkq {color:white;padding:1rem;display:flex;align-items:center;gap:1rem;flex-shrink:0;}.title.svelte-1o5wgkq {font-size:1.125rem;font-weight:600;line-height:1.25;}.button-group.svelte-1o5wgkq {margin-left:auto;display:flex;gap:0.5rem;}.icon-button.svelte-1o5wgkq {padding:0.5rem;border-radius:9999px;background:transparent;border:none;color:white;cursor:pointer;}.icon-button.svelte-1o5wgkq:hover {background-color:rgba(255, 255, 255, 0.1);}.content.svelte-1o5wgkq {flex:1;overflow:hidden;}"
};
function Ph(e, t) {
  ku(t, !0), mn(e, Bh), Lo(() => {
    hh.initializeUser(), t.settings.first_message && nt.update((f) => _e(oe({}, f), {
      messages: [
        {
          id: Date.now().toString(),
          chatId: "",
          role: "ai",
          message: t.settings.first_message,
          formattedMessage: t.settings.first_message,
          context: null,
          created_at: (/* @__PURE__ */ new Date()).toISOString()
        }
      ]
    }));
  });
  var u = Lh(), n = W(u), r = W(n), i = W(r), o = Ge(r, 2), s = W(o);
  s.__click = [Mh, t];
  var a = W(s);
  gh(a, { class: "icon" });
  var c = Ge(n, 2), l = W(c);
  Ih(l, {
    get settings() {
      return t.settings;
    }
  }), Ze(() => {
    var f;
    Ct(n, "style", `background-color: ${(f = t.settings.color_hex) != null ? f : ""};`), hu(i, t.settings.bot_name);
  }), K(e, u), wu();
}
_n(["click"]);
var zh = /* @__PURE__ */ ve('<span class="button-text svelte-1njf57d"> </span>'), Uh = /* @__PURE__ */ ve('<button id="chat-button"><!> <div class="chat-icon svelte-1njf57d"><!></div> <div class="close-icon svelte-1njf57d"><!></div></button>');
const $h = {
  hash: "svelte-1njf57d",
  code: `#chat-button.svelte-1njf57d {display:flex;align-items:center;justify-content:center;gap:8px;min-width:3.5rem;height:3.5rem;padding:0;color:white;border:none;border-radius:50%;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);transition:all 0.2s ease;z-index:10000;}#chat-button.with-text.svelte-1njf57d {padding:0 1.25rem;border-radius:100px;}#chat-button.svelte-1njf57d:hover {background-color:var(--hover-color) !important;transform:translateY(-1px);}#chat-button.active.svelte-1njf57d {filter:brightness(0.9);}.chat-icon.svelte-1njf57d,
  .close-icon.svelte-1njf57d {display:flex;align-items:center;transition:transform 0.3s ease;}.button-text.svelte-1njf57d {font-size:0.875rem;font-weight:500;white-space:nowrap;}.close-icon.svelte-1njf57d {display:none;}#chat-button.active.svelte-1njf57d .chat-icon:where(.svelte-1njf57d) {display:none;}#chat-button.active.svelte-1njf57d .close-icon:where(.svelte-1njf57d) {display:flex;}`
};
function qh(e, t) {
  mn(e, $h);
  const n = {
    MessageSquare: ln,
    MessageSquareMore: Ks,
    Monitor: Vs,
    LifeBuoy: Zs,
    HelpCircle: Hs,
    Menu: Ws,
    Info: Gs,
    FileText: js
  }[t.buttonIcon] || ln;
  var r = Uh();
  r.__click = function(...p) {
    var d;
    (d = t.onToggle) == null || d.apply(this, p);
  };
  let i;
  var o = W(r);
  {
    var s = (p) => {
      var d = zh(), g = W(d);
      Ze(() => hu(g, t.buttonText)), K(p, d);
    };
    et(o, (p) => {
      t.showButtonText && p(s);
    });
  }
  var a = Ge(o, 2), c = W(a);
  {
    var l = (p) => {
      n(p, { size: 24, strokeWidth: 2 });
    };
    et(c, (p) => {
      n && p(l);
    });
  }
  var f = Ge(a, 2), h = W(f);
  _h(h, { size: 24, strokeWidth: 2 }), Ze(() => {
    var p, d;
    Ct(r, "aria-label", t.isOpen ? "Close chat" : "Open chat"), Ct(r, "style", `background-color: ${(p = t.colorHex) != null ? p : ""}; --hover-color: ${(d = t.lighterColorHex) != null ? d : ""}`), i = Vt(r, 1, "svelte-1njf57d", null, i, {
      active: t.isOpen,
      "with-text": t.showButtonText
    });
  }), K(e, r);
}
_n(["click"]);
const Hh = "html,body{height:100%;margin:0;overflow:hidden}";
class jh {
  constructor(t) {
    jt(this, "container", null);
    jt(this, "buttonContainer", null);
    jt(this, "isOpen", !1);
    jt(this, "clickHandler");
    jt(this, "settings", null);
    this.clickHandler = this.handleClickOutside.bind(this), this.initialize(t);
  }
  fetchSettings(t) {
    return qe(this, null, function* () {
      try {
        const u = yield fetch(`http://localhost:8000/api/bots/${t}/widget-settings`);
        if (!u.ok)
          throw new Error("Failed to fetch widget settings");
        return (yield u.json()).data;
      } catch (u) {
        return console.error("Error fetching widget settings:", u), {
          bot_name: "Fluent ChatBot",
          user_id: 1,
          id: t,
          bot_id: t,
          color_hex: "#2563eb",
          lighter_color_hex: "#3b82f6",
          button_icon: "MessageSquare",
          button_alignment: "right",
          show_button_text: !1,
          button_text: "Help",
          bot_icon: null,
          header_alignment: "center",
          first_message: null,
          support_link: null,
          support_button_text: "Contact support",
          show_sources: !0,
          show_branding: !1,
          allowed_domains: null,
          created_at: (/* @__PURE__ */ new Date()).toISOString(),
          updated_at: (/* @__PURE__ */ new Date()).toISOString()
        };
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
            
            #fluent-bot-chat-widget-container {
                position: fixed;
                bottom: 20px;
                z-index: 9999;
                display: flex;
                flex-direction: column;
            }

            #fluent-bot-chat-widget-container.align-right {
                right: 20px;
                align-items: flex-end;
            }

            #fluent-bot-chat-widget-container.align-left {
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
            }

            #fluent-bot-chat-widget-container.align-right #fluent-bot-chat-widget {
                transform-origin: bottom right;
            }

            #fluent-bot-chat-widget-container.align-left #fluent-bot-chat-widget {
                transform-origin: bottom left;
            }

            ${Hh}
        `, t;
  }
  initialize(t) {
    return qe(this, null, function* () {
      this.settings = yield this.fetchSettings(t);
      const u = document.createElement("div");
      u.id = "fluent-bot-chat-widget-container", u.classList.add(`align-${this.settings.button_alignment}`);
      const n = document.createElement("div");
      n.id = "fluent-bot-chat-widget";
      const r = document.createElement("div");
      r.id = "chat-button-container", u.appendChild(this.createStyles()), u.appendChild(n), u.appendChild(r), document.body.appendChild(u), this.container = n, this.buttonContainer = r, document.addEventListener("click", this.clickHandler, !0), pi(Ph, {
        target: n,
        props: {
          settings: this.settings
        }
      }), pi(qh, {
        target: r,
        props: {
          isOpen: this.isOpen,
          onToggle: () => this.toggleWidget(),
          buttonIcon: this.settings.button_icon,
          showButtonText: this.settings.show_button_text,
          buttonText: this.settings.button_text,
          colorHex: this.settings.color_hex,
          lighterColorHex: this.settings.lighter_color_hex
        }
      });
    });
  }
  destroy() {
    if (this.container) {
      const t = this.container.closest("#fluent-bot-chat-widget-container");
      t && t.remove();
    }
    document.removeEventListener("click", this.clickHandler, !0);
  }
}
const fp = (e) => {
  document.querySelector("#fluent-bot-chat-widget-container") || new jh(e);
};
export {
  jh as FluentBotChatWidget,
  fp as injectWidget
};
//# sourceMappingURL=fluent-bot-chat-widget.es.js.map
